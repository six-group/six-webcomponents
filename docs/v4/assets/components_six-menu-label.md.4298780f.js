import{_ as l,E as o,o as e,c as t,J as p,k as s,a,S as r}from"./chunks/framework.0d091df2.js";const _=JSON.parse('{"title":"six-menu-label","description":"","frontmatter":{},"headers":[],"relativePath":"components/six-menu-label.md","filePath":"components/six-menu-label.md"}'),c={name:"components/six-menu-label.md"},D=s("h1",{id:"six-menu-label",tabindex:"-1"},[a("six-menu-label "),s("a",{class:"header-anchor",href:"#six-menu-label","aria-label":'Permalink to "six-menu-label"'},"​")],-1),F=s("h2",{id:"menu-label",tabindex:"-1"},[a("Menu Label "),s("a",{class:"header-anchor",href:"#menu-label","aria-label":'Permalink to "Menu Label"'},"​")],-1),y=s("p",null,"Menu labels are used to describe a group of menu items.",-1),i=r(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu</span><span style="color:#89DDFF;">           </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    max-width: 200px;</span></span>
<span class="line"><span style="color:#C3E88D;">    border: solid 1px var(--six-panel-border-color);</span></span>
<span class="line"><span style="color:#C3E88D;">    border-radius: var(--six-border-radius-medium);</span></span>
<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Fruits</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apple</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Apple</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banana</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Banana</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Orange</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-divider</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-menu-divider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Vegetables</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">broccoli</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Broccoli</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">carrot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Carrot</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zucchini</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Zucchini</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-menu</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td></td><td>The menu label&#39;s content.</td></tr></tbody></table><h2 id="shadow-parts" tabindex="-1">Shadow Parts <a class="header-anchor" href="#shadow-parts" aria-label="Permalink to &quot;Shadow Parts&quot;">​</a></h2><table><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;base&quot;</code></td><td>The component&#39;s base wrapper.</td></tr></tbody></table><hr><p>Copyright © 2021-present SIX-Group</p>`,7);function u(d,m,C,h,b,A){const n=o("docs-demo-six-menu-label-187");return e(),t("div",null,[D,F,y,p(n),i])}const g=l(c,[["render",u]]);export{_ as __pageData,g as default};
