// Since Angular 19, standalone components are the default. However, the Stencil Angular
// output target with output type 'component' does not set the standalone property at all.
// This was acceptable before Angular 19, but now it needs to be explicitly set to false
// for compatibility with NgModule-based applications that have not migrated to standalone.

// This script adds the standalone property to all generated proxies. This can be removed
// as soon as the Stencil output target is fixed. See https://github.com/stenciljs/output-targets/issues/648

const fs = require('fs');
const path = process.argv[2];
let content = fs.readFileSync(path, 'utf8');
content = content.replaceAll('@Component({', '@Component({\n  standalone: false,');
fs.writeFileSync(path, content, 'utf8');
console.log(`√ Angular standalone fix applied for ${path} `);
