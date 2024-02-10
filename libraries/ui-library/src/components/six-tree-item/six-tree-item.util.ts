export function isTreeItem(node: Node | Element): node is HTMLSixTreeItemElement {
  return node instanceof Element && node.tagName.toLowerCase() === 'six-tree-item';
}
