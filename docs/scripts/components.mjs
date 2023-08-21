import path from 'path';
import { NodeType, parse } from 'node-html-parser';
import TurndownService from 'turndown';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const uiLibraryPath = path.join(__dirname, '../../libraries/ui-library');
const componentsJsonPath = path.join(uiLibraryPath, 'docs/components.json');
const componentsPath = path.join(__dirname, `../components`);
const examplesPath = path.join(__dirname, `../examples`);

// create output dirs
mkdirSync(componentsPath, { recursive: true });
mkdirSync(examplesPath, { recursive: true });

// parse components
const components = getComponents(componentsJsonPath, uiLibraryPath);

// generate component.tags.mts
const tags = `export const components = [${components.map((c) => `"${c.tag}"`).join(',')}];`;
await writeFileSync(path.join(componentsPath, 'component.tags.mts'), tags, 'utf-8');

// generate vue examples and markdown files
for (const component of components) {
  transformToMarkdown(component);
}

// -------------------------
// utils

function extractDemoScript(node) {
  const scriptNode = node.childNodes.find((n) => n.rawTagName === 'script');
  if (scriptNode !== undefined) {
    node.removeChild(scriptNode);
    return scriptNode.innerHTML;
  }
  return '';
}

function extractDemoStyle(node) {
  const styleNodes = node.querySelectorAll('style');
  let styles = '';
  styleNodes.forEach((s) => {
    s.parentNode.removeChild(s);
    styles += s.innerHTML;
  });
  return styles;
}

function writeDemoComponent(tag, node) {
  const script = extractDemoScript(node);
  const style = extractDemoStyle(node);
  const html = node.innerHTML;
  const componentContent = [
    '<template>',
    '<div>',
    html,
    '</div>',
    '</template>',
    '<style>',
    style,
    '</style>',
    '<script>',
    'export default {',
    `  name: '${tag}',`,
    `  mounted() { ${script} }`,
    '}',
    '</script>',
  ].join('\n');
  writeFileSync(path.join(examplesPath, `${tag}.vue`), componentContent, 'utf-8');
}

function getComponents(componentsJsonPath, uiLibraryPath) {
  const { components } = JSON.parse(readFileSync(componentsJsonPath, 'utf-8'));
  return components
    .filter((component) => component.filePath.startsWith('src/components/'))
    .map((component) => {
      const componentPath = path.join(uiLibraryPath, component.filePath);
      const readme = path.join(path.dirname(componentPath), 'readme.md');
      const indexHtml = path.join(path.dirname(componentPath), 'index.html');
      component.md = readFileSync(readme, 'utf8');
      component.html = readFileSync(indexHtml, 'utf8');
      return component;
    });
}

function transformToMarkdown(component) {
  const turndownService = new TurndownService({ headingStyle: 'atx' });
  const root = parse(component.html);
  const container = root.querySelector('.container');
  let index = 0;
  const vueExamples = container.childNodes.map((node) => {
    switch (node.rawTagName) {
      case 'section': {
        const tag = `docs-demo-${component.tag}-${index++}`;
        const numLeftWhiteSpace = node.innerHTML.replace(/[\n\r]/g, '').search(/\S|$/);
        const content = node.innerHTML
          .split('\n')
          .map((l) => l.substring(numLeftWhiteSpace))
          .join('\n');
        const vueComponentTag = [
          `<${tag}></${tag}>`,
          '\n' + '\n',
          '```html',
          content,
          '```',
          '\n',
        ].join('');
        writeDemoComponent(tag, node);
        return vueComponentTag;
      }
      default:
        return node.nodeType === NodeType.ELEMENT_NODE
          ? turndownService.turndown(node.outerHTML)
          : '';
    }
  });

  const title = component.tag
    .replace('six-', '')
    .split('-')
    .map((c) => c[0].toUpperCase() + c.slice(1))
    .join(' ');

  const markdown = component.md
    .replace(/\(\.\.\/(.*?)\)/g, '($1.html)') // fix dependencies links for doc
    .replace(`# ${component.tag}`, `# ${title}`)
    .replace('<!-- EXAMPLES -->', vueExamples.join('\n')); // replace example placeholder with vue component
  writeFileSync(path.join(componentsPath, `${component.tag}.md`), markdown, 'utf8');
}
