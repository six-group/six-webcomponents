const path = require("path");
const { readFile, writeFile, readJson, writeJson } = require("fs-extra");
const { parse, NodeType } = require("node-html-parser");
const TurndownService = require("turndown");
const { mkdirSync } = require("fs");

const NEWLINE = "\n";
const LIB_PATH = path.join(__dirname, "../../libraries/ui-library");
const turndownService = new TurndownService({ headingStyle: "atx" });

let INDEX = 0;

// UTIL FUNCTIONS

function extractDemoScript(node) {
  const scriptNode = node.childNodes.find((n) => n.rawTagName === "script");
  if (scriptNode !== undefined) {
    node.removeChild(scriptNode);
    return scriptNode.innerHTML;
  }
  return "";
}

function extractDemoStyle(node) {
  const styleNodes = node.querySelectorAll("style");
  let styles = "";
  styleNodes.forEach((s) => {
    s.parentNode.removeChild(s);
    styles += s.innerHTML;
  });
  return styles;
}

async function writeDemoComponent(tag, node) {
  const script = extractDemoScript(node);
  const style = extractDemoStyle(node);
  const html = node.innerHTML;
  const componentContent = [
    "<template>",
    '<div class="demo my-app">',
    html,
    "</div>",
    "</template>",
    "<style>",
    style,
    "</style>",
    "<script>",
    "export default {",
    `  name: '${tag}',`,
    `  mounted() { ${script} }`,
    "}",
    "</script>",
  ].join(NEWLINE);

  mkdirSync(path.join(__dirname, `../examples`), { recursive: true });
  await writeFile(path.join(__dirname, `../examples/${tag}.vue`), componentContent);
}

async function processNode(node, component) {
  switch (node.rawTagName) {
    case "section": {
      const tag = `docs-demo-${component.tag}-${INDEX++}`;
      const numLeftWhiteSpace = node.innerHTML.replace(/[\n\r]/g, "").search(/\S|$/);
      const content = node.innerHTML
        .split(NEWLINE)
        .map((l) => l.substring(numLeftWhiteSpace))
        .join(NEWLINE);
      const example = [
        `<${tag}></${tag}>`,
        NEWLINE + NEWLINE,
        "```html",
        content,
        "```",
        NEWLINE,
      ].join("");
      await writeDemoComponent(tag, node);
      return example;
    }
    default:
      return node.nodeType === NodeType.ELEMENT_NODE
        ? turndownService.turndown(node.outerHTML)
        : "";
  }
}

// MAIN FUNCTIONS

async function getComponents() {
  const result = [];
  let componentsDir = path.join(LIB_PATH, "docs/components.json");
  const { components } = await readJson(componentsDir);
  /* eslint-disable no-await-in-loop */
  for (const component of components) {
    if (component.filePath.startsWith("src/components/")) {
      const tsxPath = path.join(LIB_PATH, component.filePath);
      const mdFile = path.join(path.dirname(tsxPath), "readme.md");
      const htmlFile = path.join(path.dirname(tsxPath), "index.html");
      component.md = await readFile(mdFile, "utf8");
      component.html = await readFile(htmlFile, "utf8");
      result.push(component);
    }
  }
  return result;
}

async function writeSidebar(components) {
  const tags = components.map((c) => c.tag);
  mkdirSync(path.join(__dirname, `../components`), { recursive: true });
  const filePath = path.join(__dirname, "../components/component.tags.json");
  writeJson(filePath, tags);
}

async function transformToMarkdown(component) {
  const root = parse(component.html);
  const container = root.querySelector(".container");
  const promises = container.childNodes.map((node) => processNode(node, component));

  const examples = await Promise.all(promises);
  component.md = component.md.replace(/\(\.\.\/(.*?)\)/g, "($1.html)"); // fix dependencies links for doc
  return component.md.replace("<!-- EXAMPLES -->", examples.join(NEWLINE));
}

async function writeMarkdown(component) {
  mkdirSync(path.join(__dirname, `../components`), { recursive: true });
  await writeFile(path.join(__dirname, `../components/${component.tag}.md`), component.md);
}

// MAIN

(async function main() {
  const components = await getComponents();
  await writeSidebar(components);

  for (const component of components) {
    component.md = await transformToMarkdown(component);
    await writeMarkdown(component);
  }
})();
