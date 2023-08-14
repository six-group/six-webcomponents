import{_ as D,E as s,o as F,c as y,J as o,k as a,a as l,S as n}from"./chunks/framework.0d091df2.js";const f=JSON.parse('{"title":"six-progress-ring","description":"","frontmatter":{},"headers":[],"relativePath":"components/six-progress-ring.md","filePath":"components/six-progress-ring.md"}'),i={name:"components/six-progress-ring.md"},d=a("h1",{id:"six-progress-ring",tabindex:"-1"},[l("six-progress-ring "),a("a",{class:"header-anchor",href:"#six-progress-ring","aria-label":'Permalink to "six-progress-ring"'},"​")],-1),C=a("h2",{id:"sixprogressring",tabindex:"-1"},[l("SixProgressRing "),a("a",{class:"header-anchor",href:"#sixprogressring","aria-label":'Permalink to "SixProgressRing"'},"​")],-1),g=a("p",null,"Progress rings are used to show the progress of a determinate operation in a circular fashion.",-1),h=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">percentage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="size" tabindex="-1">Size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;Size&quot;">​</a></h3><p>Use the <code>--size</code> attribute to set the diameter of the progress ring.</p>',4),A=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">percentage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="stroke-width" tabindex="-1">Stroke Width <a class="header-anchor" href="#stroke-width" aria-label="Permalink to &quot;Stroke Width&quot;">​</a></h3><p>Use the <code>stroke-width</code> attribute to set the width of the progress ring&#39;s indicator.</p>',3),_=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">percentage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">stroke-width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="colors" tabindex="-1">Colors <a class="header-anchor" href="#colors" aria-label="Permalink to &quot;Colors&quot;">​</a></h3><p>To change the color, use the <code>--track-color</code> and <code>--indicator-color</code> custom properties.</p>',3),u=n('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">percentage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--track-color: tomato; --indicator-color: green</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="labels" tabindex="-1">Labels <a class="header-anchor" href="#labels" aria-label="Permalink to &quot;Labels&quot;">​</a></h3><p>Use the default slot to show a label.</p>',3),m=n(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">percentage</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">progress-ring-labels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">margin-bottom: 0.5rem</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span><span style="color:#A6ACCD;">50%</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-progress-ring</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">circle</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">six-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">remove</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-icon</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">six-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">circle</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">six-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">six-icon</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">six-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> progressRing </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.progress-ring-labels</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> subtractButton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nextElementSibling</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nextElementSibling</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> addButton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> subtractButton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nextElementSibling</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  addButton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">percentage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">percentage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">percentage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">percentage</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">percentage</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  subtractButton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">percentage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">percentage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">percentage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">percentage</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">progressRing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">percentage</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>percentage</code></td><td><code>percentage</code></td><td>The current progress percentage, 0 - 100.</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>size</code></td><td><code>size</code></td><td>The size of the progress ring in pixels.</td><td><code>number</code></td><td><code>128</code></td></tr><tr><td><code>strokeWidth</code></td><td><code>stroke-width</code></td><td>The stroke width of the progress ring in pixels.</td><td><code>number</code></td><td><code>4</code></td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td></td><td>A label to show inside the ring.</td></tr></tbody></table><h2 id="shadow-parts" tabindex="-1">Shadow Parts <a class="header-anchor" href="#shadow-parts" aria-label="Permalink to &quot;Shadow Parts&quot;">​</a></h2><table><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>&quot;base&quot;</code></td><td>The component&#39;s base wrapper.</td></tr><tr><td><code>&quot;label&quot;</code></td><td>The progress ring label.</td></tr></tbody></table><h2 id="css-custom-properties" tabindex="-1">CSS Custom Properties <a class="header-anchor" href="#css-custom-properties" aria-label="Permalink to &quot;CSS Custom Properties&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>--indicator-color</code></td><td>The indicator color.</td></tr><tr><td><code>--track-color</code></td><td>The track color.</td></tr></tbody></table><hr><p>Copyright © 2021-present SIX-Group</p>`,11);function b(x,E,q,T,S,P){const p=s("docs-demo-six-progress-ring-204"),t=s("docs-demo-six-progress-ring-205"),e=s("docs-demo-six-progress-ring-206"),r=s("docs-demo-six-progress-ring-207"),c=s("docs-demo-six-progress-ring-208");return F(),y("div",null,[d,C,g,o(p),h,o(t),A,o(e),_,o(r),u,o(c),m])}const v=D(i,[["render",b]]);export{f as __pageData,v as default};
