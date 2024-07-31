import{_ as e,c as o,o as t,d as a}from"./chunks/framework.DFnNdRoT.js";const f=JSON.parse('{"title":"Upgrade to Version 4","description":"","frontmatter":{},"headers":[],"relativePath":"guide/upgrade-v4.md","filePath":"guide/upgrade-v4.md","lastUpdated":1722415838000}'),r={name:"guide/upgrade-v4.md"},i=a('<h1 id="upgrade-to-version-4" tabindex="-1">Upgrade to Version 4 <a class="header-anchor" href="#upgrade-to-version-4" aria-label="Permalink to &quot;Upgrade to Version 4&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This guide assumes that you have already updated your app to version 3 of the six-webcomponents.</p></div><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>In version 4, our main focus has been on strengthening support for Angular applications, streamlining the library by removing less-used features, and enhancing the overall code robustness of our components. Below is a brief overview of the key changes:</p><h2 id="better-support-for-angular" tabindex="-1">Better Support for Angular <a class="header-anchor" href="#better-support-for-angular" aria-label="Permalink to &quot;Better Support for Angular&quot;">​</a></h2><p>We now ship a <a href="https://www.npmjs.com/package/@six-group/ui-library-angular" target="_blank" rel="noreferrer">dedicated npm package for Angular</a>, which includes wrapper components, utilities for form handling and a more comprehensive form example, that showcases the usage of all available form elements.</p><p>Steps to use the new Angular library:</p><ol><li>Remove <code>CUSTOM_ELEMENTS_SCHEMA</code> from your Angular modules.</li><li>Remove <code>defineCustomElement()</code> in your <code>main.ts</code> file</li><li>Add <code>@six-group/ui-library-angular</code> to your <code>package.json</code> dependencies.</li><li>Add <code>UiLibraryAngularModule.forRoot()</code> to the module imports.</li><li>Replace the stylesheet import with <code>@import &quot;@six-group/ui-library/dist/ui-library/ui-library.css&quot;</code></li><li>Remove any <code>&quot;assets&quot;</code> option that copies assets from the ui-library in <code>angular.json</code></li><li>If applicable, eliminate any custom <a href="https://angular.io/api/forms/ControlValueAccessor" target="_blank" rel="noreferrer">control value accessors</a>. Angular value accessors are now shipped with the library.</li></ol><p>For detailed guidance on setting up Angular, refer to the <a href="./angular.html">Angular guide</a>.</p><h2 id="client-side-validation-support-removal" tabindex="-1">Client Side Validation Support Removal <a class="header-anchor" href="#client-side-validation-support-removal" aria-label="Permalink to &quot;Client Side Validation Support Removal&quot;">​</a></h2><p>Supporting client-side form validation for web components can be quite challenging and prone to errors. Furthermore, it&#39;s worth noting that StencilJS currently <a href="https://github.com/ionic-team/stencil/issues/2284" target="_blank" rel="noreferrer">lacks support</a> for form-associated components. Consequently, we&#39;ve opted to entirely eliminate this functionality.</p><p>In detail, the following changes were made:</p><ul><li>Removed the <code>six-form</code> component.</li><li>Removed the following method form all form components: <ul><li><code>reset()</code></li><li><code>reportValidity()</code></li><li><code>checkValidity()</code></li><li><code>setCustomValidity()</code></li><li><code>getValidity()</code></li><li><code>isValid()</code></li><li><code>getValidationMessage()</code></li></ul></li><li>Removed the following properties in all form components: <ul><li><code>errorOnBlur</code></li></ul></li></ul><p>The <code>six-form</code> component can be substituted with a native <code>&lt;form&gt;</code> element. However, since the validation logic is no longer managed, it must now be carried out manually or with the assistance of a form library.</p><p>Form elements still maintain the capability to display error messages. To display an error message you need to set the <code>error-text</code> and <code>invalid</code> property. Note that those properties are set automatically if you use the <a href="https://www.npmjs.com/package/@six-group/ui-library-angular" target="_blank" rel="noreferrer">dedicated npm package for Angular</a> in combination with <a href="https://angular.io/guide/forms-overview" target="_blank" rel="noreferrer">Angular forms</a>.</p><h2 id="vue-support-removal" tabindex="-1">Vue Support Removal <a class="header-anchor" href="#vue-support-removal" aria-label="Permalink to &quot;Vue Support Removal&quot;">​</a></h2><p>As part of our efforts to streamline the library&#39;s focus and improve the code quality, we have temporarily removed support for Vue.js. We&#39;re working on reintroducing Vue support in a future release to provide a more tailored experience for Vue users.</p><h2 id="standard-events" tabindex="-1">Standard Events <a class="header-anchor" href="#standard-events" aria-label="Permalink to &quot;Standard Events&quot;">​</a></h2><p>To enhance compatibility with form libraries, we chose to emit standard events in addition to the existing ones. For instance, apart from the existing <code>six-input-change</code> event, we now also trigger a <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event" target="_blank" rel="noreferrer">standard <code>change</code></a> event when there&#39;s a change in an input field&#39;s value. The same principle applies to <code>input</code> and <code>focus</code> events as well.</p><h2 id="table-component-removal" tabindex="-1">Table Component Removal <a class="header-anchor" href="#table-component-removal" aria-label="Permalink to &quot;Table Component Removal&quot;">​</a></h2><p>In version 4, we have made a strategic decision to remove the <code>six-table</code> component from the library. This decision is in line with our commitment to refining core functionalities and simplifying the library in general. While offering a comprehensive table component is valuable, the complexity involved is better suited for dedicated solutions.</p><p>As a result, we recommend exploring existing table components within your framework&#39;s ecosystem to find the best-fit solution for your needs. For instance, in certain Angular projects, we&#39;ve found success with <a href="https://www.ag-grid.com/" target="_blank" rel="noreferrer">AG Grid</a>, a powerful and flexible table component that offers extensive capabilities.</p><p>In the future, we intend to offer pre-defined styles for certain libraries in this category.</p>',23),n=[i];function l(s,d,c,p,u,h){return t(),o("div",null,n)}const g=e(r,[["render",l]]);export{f as __pageData,g as default};
