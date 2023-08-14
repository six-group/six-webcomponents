import{_ as n,E as t,o,c as l,J as p,k as s,a,S as c}from"./chunks/framework.0d091df2.js";const x=JSON.parse('{"title":"six-search-field","description":"","frontmatter":{},"headers":[],"relativePath":"components/six-search-field.md","filePath":"components/six-search-field.md"}'),r={name:"components/six-search-field.md"},d=s("h1",{id:"six-search-field",tabindex:"-1"},[a("six-search-field "),s("a",{class:"header-anchor",href:"#six-search-field","aria-label":'Permalink to "six-search-field"'},"​")],-1),i=s("h1",{id:"basic-search-field",tabindex:"-1"},[a("Basic Search Field "),s("a",{class:"header-anchor",href:"#basic-search-field","aria-label":'Permalink to "Basic Search Field"'},"​")],-1),D=s("p",null,"Showing a basic search field returning results on pressing on a default debounce",-1),y=c(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-search-field</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">basic-search-field</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search-results</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-search-field</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> basicSearchField </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">basic-search-field</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> searchResultsBox </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">search-results</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  basicSearchField</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">six-search-field-change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">searchResultsBox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">searchResultsBox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">padding</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1em</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>clearable</code></td><td><code>clearable</code></td><td>Set to true to add a clear button when the input is populated.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>debounce</code></td><td><code>debounce</code></td><td>Debounce time in milliseconds, default is 300 ms</td><td><code>number</code></td><td><code>DEFAULT_DEBOUNCE_FAST</code></td></tr><tr><td><code>disabled</code></td><td><code>disabled</code></td><td>Set to true to disable the input.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>placeholder</code></td><td><code>placeholder</code></td><td>The input&#39;s placeholder text.</td><td><code>string | undefined</code></td><td><code>undefined</code></td></tr><tr><td><code>value</code></td><td><code>value</code></td><td>The input&#39;s value attribute.</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>six-search-field-change</code></td><td>Emitted when a search is triggered</td><td><code>CustomEvent&lt;SixSearchFieldChangePayload&gt;</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td></td><td>Used to define the results below the search component.</td></tr></tbody></table><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><h3 id="depends-on" tabindex="-1">Depends on <a class="header-anchor" href="#depends-on" aria-label="Permalink to &quot;Depends on&quot;">​</a></h3><ul><li><a href="./six-input.html">six-input</a></li><li><a href="./six-icon.html">six-icon</a></li></ul><h3 id="graph" tabindex="-1">Graph <a class="header-anchor" href="#graph" aria-label="Permalink to &quot;Graph&quot;">​</a></h3><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TD</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  six-search-field </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> six-input</span></span>
<span class="line"><span style="color:#A6ACCD;">  six-search-field </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> six-icon</span></span>
<span class="line"><span style="color:#A6ACCD;">  six-input </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> six-icon</span></span>
<span class="line"><span style="color:#A6ACCD;">  style six-search-field fill:#f9f,stroke:#333,stroke-width:4px</span></span></code></pre></div><hr><p>Copyright © 2021-present SIX-Group</p>`,14);function F(h,C,A,u,f,b){const e=t("docs-demo-six-search-field-222");return o(),l("div",null,[d,i,D,p(e),y])}const _=n(r,[["render",F]]);export{x as __pageData,_ as default};
