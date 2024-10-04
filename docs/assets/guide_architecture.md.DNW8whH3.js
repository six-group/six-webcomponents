import{_ as t,c as r,d as i,o as a}from"./chunks/framework.B1eiGiK_.js";const n="/six-webcomponents/assets/stenciljs_architecture.Lutp7VI3.svg",m=JSON.parse('{"title":"Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"guide/architecture.md","filePath":"guide/architecture.md","lastUpdated":1727888787000}'),o={name:"guide/architecture.md"};function c(s,e,l,p,d,h){return a(),r("div",null,e[0]||(e[0]=[i('<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><p>Under the hood, our Component Library is based on <a href="https://stenciljs.com/" target="_blank" rel="noreferrer">Stencil</a>. Stencil is a compiler that generates Web Components (more specifically, Custom Elements) and builds high performance web apps. Stencil combines the best concepts of the most popular frameworks into a simple build-time tool. At the end everything will be compiled in a clean web component without any framework specific code - just pure JS and CSS. Additionally, there are so called <em>output-targets</em> which allow a very comfortable integration into all major frameworks.</p><p><img src="'+n+'" alt="Stenciljs Architecture" title="Stenciljs Architecture">&quot;</p><p>Stencil takes features such as</p><ul><li>Virtual DOM</li><li>Async rendering (inspired by React Fiber)</li><li>Reactive data-binding</li><li>TypeScript</li><li>JSX</li><li>Static Site Generation (SSG)</li></ul><p>and then generates <strong>standards-based</strong> Web Components and web apps with these features baked in.</p><p>Except Stencil, our library doesn&#39;t have any other dependency. Even no CSS framework! Therefore, it is very lightweight and doesn&#39;t bloat your application.</p>',7)]))}const b=t(o,[["render",c]]);export{m as __pageData,b as default};
