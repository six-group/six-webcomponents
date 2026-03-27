# Architecture

Under the hood, our Component Library is based on [Stencil](https://stenciljs.com/). Stencil is a
compiler that generates Web Components (more specifically, Custom Elements) and builds high
performance web apps. Stencil combines the best concepts of the most popular frameworks into a
simple build-time tool. At the end everything will be compiled in a clean web component without any
framework specific code - just pure JS and CSS. Additionally, there are so called _output-targets_
which allow a very comfortable integration into all major frameworks.

![Stenciljs Architecture](/images/stenciljs_architecture.svg 'Stenciljs Architecture')"

Stencil takes features such as

- Virtual DOM
- Async rendering (inspired by React Fiber)
- Reactive data-binding
- TypeScript
- JSX
- Static Site Generation (SSG)

and then generates **standards-based** Web Components and web apps with these features baked in.

Except Stencil, our library doesn't have any other dependency. Even no CSS framework! Therefore, it
is very lightweight and doesn't bloat your application.
