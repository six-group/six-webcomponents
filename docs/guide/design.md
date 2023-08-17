# Atomic Design

Our Web Components library is based largely on the principles of
[atomic design](https://atomicdesign.bradfrost.com/chapter-2/). The key idea of this methodology is
that small, independent - atomic - parts, can be combined into larger molecular structures.

![Atomic Design](/images/atomic_design.svg 'Atomic Design')

1. Atoms include basic HTML elements like [icons](/components/six-icon.html),
   [inputs](/components/six-input.html), [buttons](/components/six-button.html),...
2. Molecules are simple groups of UI elements functioning together as a unit. Label, input and
   button can join together to create a search form molecule.
3. Organisms are complex UI components composed of groups of molecules and/or atoms and/or other
   organisms. Example: [header](/components/six-header.html)

4. Templates are page-level objects that place components into a [layout](/components/six-root.html)
   and articulate the design’s underlying content structure.

5. Pages are specific instances of templates that show what a UI looks like with real representative
   content in place.

Being able to **reuse** basic components is a huge advantage in atomic web design. Recycling atoms
saves designers time while upholding consistent habits across all website pages.
