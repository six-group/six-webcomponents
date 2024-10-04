import{_ as i,c as a,d as e,o as t}from"./chunks/framework.B1eiGiK_.js";const u=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue.md","filePath":"guide/vue.md","lastUpdated":1727888787000}'),n={name:"guide/vue.md"};function l(p,s,h,r,o,k){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><p>We offer a <a href="https://www.npmjs.com/package/@six-group/ui-library-vue" target="_blank" rel="noreferrer">dedicated npm package for Vue</a> to simplify the use of our web components. Find detailed steps in this guide to learn how to use it.</p><p>For more detailed usage examples, check the <a href="https://six-group.github.io/six-webcomponents/demo/vue" target="_blank" rel="noreferrer">Vue demo</a> and its <a href="https://github.com/six-group/six-webcomponents/tree/main/examples/vue" target="_blank" rel="noreferrer">source code</a>.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><ol><li><p>Install both the web components and Vue library:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @six-group/ui-library</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @six-group/ui-library-vue</span></span></code></pre></div></li><li><p>In your main.ts file, add the <code>UiLibraryVue</code> plugin to your Vue application and import the styles:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UiLibraryVue } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@six-group/ui-library-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@six-group/ui-library/dist/ui-library/ui-library.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UiLibraryVue);</span></span></code></pre></div></li></ol><h2 id="using-the-components" tabindex="-1">Using the Components <a class="header-anchor" href="#using-the-components" aria-label="Permalink to &quot;Using the Components&quot;">​</a></h2><p>The components can be used just like any other Vue component.</p><ol><li><p>Import the component in <code>&lt;script setup&gt;</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SixButton } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@six-group/ui-library-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li><li><p>Use it in the template</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;doIt()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Click Me&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ol><h2 id="router" tabindex="-1">Router <a class="header-anchor" href="#router" aria-label="Permalink to &quot;Router&quot;">​</a></h2><p>If you are using <code>vue-router</code> and want to use <code>router-link</code> attributes on the web components, you have to pass the router as part of the configuration to the <code>UiLibraryVue</code> plugin:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UiLibraryVue, { router });</span></span></code></pre></div><p>You can then use <code>router-link</code> on any component from the library like this:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-sidebar-item-group</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> router-link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/the-link&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Link Demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="forms" tabindex="-1">Forms <a class="header-anchor" href="#forms" aria-label="Permalink to &quot;Forms&quot;">​</a></h2><p>Form components like <code>six-input</code>, <code>six-checkbox</code> or <code>six-select</code> integrate smoothly with Vue’s <code>v-model</code> bindings.</p><h3 id="error-message-translations" tabindex="-1">Error Message Translations <a class="header-anchor" href="#error-message-translations" aria-label="Permalink to &quot;Error Message Translations&quot;">​</a></h3><p>For proper translation, set the lang attribute on the <code>html</code> element. Languages available are <code>en</code>, <code>de</code>, <code>it</code>, and <code>fr</code>.</p><h2 id="polyfills" tabindex="-1">Polyfills <a class="header-anchor" href="#polyfills" aria-label="Permalink to &quot;Polyfills&quot;">​</a></h2><p>By default, polyfills are not included when registering the Vue plugin in your app.</p><p>For non-browser environments, like unit tests, enable them as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UiLibraryVue, { applyPolyfills: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div>`,21)]))}const c=i(n,[["render",l]]);export{u as __pageData,c as default};
