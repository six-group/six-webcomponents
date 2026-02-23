const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const PRIORITY_STATES = ['disabled', 'hover', 'focused', 'focus-visible'];
const OUTPUT_DIR = path.join(__dirname, '../playwright-report');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'screenshot.html');

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function extractTodos(componentName) {
  const testFile = path.join(COMPONENTS_DIR, componentName, `${componentName}.e2e.ts`);

  if (!fs.existsSync(testFile)) {
    return [];
  }

  const content = fs.readFileSync(testFile, 'utf-8');
  const todos = [];

  // Match TODO comments (single line // TODO: ... or multiline)
  const todoRegex = /\/\/\s*TODO:?\s*(.+?)(?:\n|$)/gi;
  let match;

  while ((match = todoRegex.exec(content)) !== null) {
    todos.push(match[1].trim());
  }

  return todos;
}

function getComponentScreenshots() {
  const components = [];
  const allStates = new Set();

  const componentDirs = fs.readdirSync(COMPONENTS_DIR).filter((dir) => {
    const fullPath = path.join(COMPONENTS_DIR, dir);
    return fs.statSync(fullPath).isDirectory() && dir.startsWith('six-');
  });

  for (const componentName of componentDirs) {
    const snapshotDir = path.join(COMPONENTS_DIR, componentName, `${componentName}.e2e.ts-snapshots`);

    if (!fs.existsSync(snapshotDir)) {
      continue;
    }

    const screenshots = {};
    const prefix = componentName.replace('six-', '') + '-';

    // Read all PNG files in the snapshot directory
    const files = fs.readdirSync(snapshotDir).filter((file) => file.endsWith('.png'));

    for (const file of files) {
      // Extract state from filename: e.g., "button-hover.png" -> "hover"
      if (file.startsWith(prefix)) {
        const state = file.slice(prefix.length, -4); // Remove prefix and .png
        if (state) {
          allStates.add(state);
          screenshots[state] = path.relative(path.dirname(OUTPUT_FILE), path.join(snapshotDir, file));
        }
      }
    }

    if (Object.keys(screenshots).length > 0) {
      // Count how many priority states this component has
      const priorityStateCount = PRIORITY_STATES.filter((state) => screenshots[state]).length;

      // Extract TODOs from the test file
      const todos = extractTodos(componentName);

      components.push({
        name: componentName,
        screenshots,
        priorityStateCount,
        totalCount: Object.keys(screenshots).length,
        todos,
      });
    }
  }

  // Sort: components with all 4 priority states first, then by priority state count, then by name
  components.sort((a, b) => {
    if (b.priorityStateCount !== a.priorityStateCount) {
      return b.priorityStateCount - a.priorityStateCount;
    }
    return a.name.localeCompare(b.name);
  });

  // Count occurrences of each state across all components
  const stateCounts = {};
  for (const component of components) {
    for (const state of Object.keys(component.screenshots)) {
      stateCounts[state] = (stateCounts[state] || 0) + 1;
    }
  }

  // Build ordered states: priority states first, then other states by frequency (descending)
  const otherStates = [...allStates]
    .filter((state) => !PRIORITY_STATES.includes(state))
    .sort((a, b) => {
      const countDiff = (stateCounts[b] || 0) - (stateCounts[a] || 0);
      if (countDiff !== 0) return countDiff;
      return a.localeCompare(b); // Alphabetical as tiebreaker
    });

  const orderedStates = [...PRIORITY_STATES, ...otherStates];

  return { components, states: orderedStates };
}

function generateHTML(components, states) {
  const headerCells = states.map((state) => `<th>${state}</th>`).join('\n      ');

  const rows = components
    .map((component) => {
      const cells = states
        .map((state) => {
          if (component.screenshots[state]) {
            return `<td><img src="${component.screenshots[state]}" alt="${component.name} ${state}"></td>`;
          }
          return '<td>-</td>';
        })
        .join('\n      ');

      const todoList =
        component.todos.length > 0
          ? `<ul class="todos">${component.todos.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`
          : '';

      return `    <tr>
      <td><strong>${component.name}</strong>${todoList}</td>
      ${cells}
    </tr>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Component Screenshots</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 2rem; }
    h1 { font-weight: 500; }
    table { border-collapse: collapse; }
    th, td { padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #eee; }
    th { background: #f5f5f5; font-weight: 500; position: sticky; top: 0; }
    td:first-child { font-family: monospace; vertical-align: top; }
    img { max-height: 100px; }
    .todos { margin: 0.5rem 0 0 0; padding-left: 1.2rem; font-family: system-ui, sans-serif; font-size: 0.85rem; color: #b45309; min-width: 300px; }
    .todos li { margin: 0.2rem 0; }
  </style>
</head>
<body>
  <h1>Component Screenshot Report</h1>
  <p>Found ${components.length} components with ${states.length} unique states</p>
  <table>
    <tr>
      <th>TODO</th>
      ${headerCells}
    </tr>
${rows}
  </table>
</body>
</html>
`;
}

const { components, states } = getComponentScreenshots();
const html = generateHTML(components, states);

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
fs.writeFileSync(OUTPUT_FILE, html);

console.log(`Generated ${OUTPUT_FILE}`);
console.log(`Found ${components.length} components with ${states.length} unique states`);
console.log(`States: ${states.join(', ')}`);
