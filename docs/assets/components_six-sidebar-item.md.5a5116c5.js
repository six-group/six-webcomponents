import{_ as a,K as o,o as n,c as l,O as p,k as s,a as t,X as r}from"./chunks/framework.7a2bf33b.js";const E=JSON.parse('{"title":"Sidebar Item","description":"","frontmatter":{},"headers":[],"relativePath":"components/six-sidebar-item.md","filePath":"components/six-sidebar-item.md"}'),c={name:"components/six-sidebar-item.md"},d=s("h1",{id:"sidebar-item",tabindex:"-1"},[t("Sidebar Item "),s("a",{class:"header-anchor",href:"#sidebar-item","aria-label":'Permalink to "Sidebar Item"'},"​")],-1),i=s("h2",{id:"six-sidebar-item",tabindex:"-1"},[t("six sidebar item "),s("a",{class:"header-anchor",href:"#six-sidebar-item","aria-label":'Permalink to "six sidebar item"'},"​")],-1),D=r(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 10em</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">six-sidebar-items-group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Data</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">history</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">History</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">transactions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Transactions</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">upload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Upload</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.google.ch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Link</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-sidebar-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>disabled</code></td><td><code>disabled</code></td><td>Set to true to draw the sidebar item in a disabled state.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>href</code></td><td><code>href</code></td><td>Provide if the item should be rendered as anchor tag. Note, that the href is added automatically when using routerLink in Angular.</td><td><code>string | undefined</code></td><td><code>undefined</code></td></tr><tr><td><code>selected</code></td><td><code>selected</code></td><td>Set to true to draw the item in a selected state.</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>value</code></td><td><code>value</code></td><td>A unique value to store in the sidebar item. This can be used as a way to identify sidebar items when selected.</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td></td><td>Used to define the nested displayed text of the item.</td></tr></tbody></table><hr><p>Copyright © 2021-present SIX-Group</p>`,7);function F(y,h,m,b,u,_){const e=o("docs-demo-six-sidebar-item-0");return n(),l("div",null,[d,i,p(e),D])}const g=a(c,[["render",F]]);export{E as __pageData,g as default};