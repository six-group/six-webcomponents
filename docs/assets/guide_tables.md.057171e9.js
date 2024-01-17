import{_ as s,o as n,c as a,X as l}from"./chunks/framework.7a2bf33b.js";const A=JSON.parse('{"title":"Tables","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tables.md","filePath":"guide/tables.md"}'),p={name:"guide/tables.md"},o=l(`<h1 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h1><p>Since the SIX Web Components Library supports basic components only, we do not provide any table implementation. If your application depends on tables, you have the following options:</p><ul><li>For simple just use plain HTML tables and apply our <a href="#plain-html">CSS style</a>.</li><li>For complex tasks you should consider using a 3rd party table implementation like <a href="https://www.ag-grid.com/" target="_blank" rel="noreferrer">AG Grid</a>. Have a look at our <a href="#ag-grid">CSS style</a> for styling.</li><li>Maybe there is a reusable SIX internal table component made by another team. Just ask on the official MS Teams chanel.</li></ul><h3 id="plain-html" tabindex="-1">Plain HTML <a class="header-anchor" href="#plain-html" aria-label="Permalink to &quot;Plain HTML&quot;">​</a></h3><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">table</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">sic-table</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">border-collapse</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> collapse</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-font-size-small</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">thead</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#BABED8;"> solid </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-700</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">th</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-900</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-spacing-medium</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-spacing-medium</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-spacing-x-small</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">td</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-spacing-medium</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#BABED8;"> solid </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-400</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">td</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">padding-0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">total</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#BABED8;"> solid </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-700</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-font-weight-bold</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-800</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">align-right</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">content-width</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="ag-grid" tabindex="-1">AG Grid <a class="header-anchor" href="#ag-grid" aria-label="Permalink to &quot;AG Grid&quot;">​</a></h3><p>Overwriting AG Grid its standard theme allows you to present the table according to the SIX corporate styleguide. As an example apply the <a href="https://www.ag-grid.com/javascript-data-grid/themes/" target="_blank" rel="noreferrer">ag-theme-alpine</a> theme and put those SCSS definitions to your global style sheet file:</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@ag-grid-community/styles</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">grid-styles</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#BABED8;">    themes: </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#BABED8;">      alpine: </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">// fonts</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">font-family</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Noto Sans</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">, sans-serif</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">font-size</span><span style="color:#BABED8;">: </span><span style="color:#F78C6C;">16px</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">// borders</span></span>
<span class="line"><span style="color:#BABED8;">        borders: false,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#BABED8;">: </span><span style="color:#F78C6C;">0px</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">// colors</span></span>
<span class="line"><span style="color:#BABED8;">        header-foreground-color: </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-900</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        header-background-color: null,</span></span>
<span class="line"><span style="color:#BABED8;">        data-color: </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-900</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        odd-row-background-color: </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-100</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        row-hover-color: </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-clay-50</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        control-panel-background-color: </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-clay-50</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">// spacing</span></span>
<span class="line"><span style="color:#BABED8;">        cell-horizontal-padding: </span><span style="color:#F78C6C;">12px</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// use theme parameters where possible</span></span>
<span class="line"><span style="color:#BABED8;">  --ag-invalid-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color-danger</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  --ag-input-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  --ag-input-focus-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color-focus</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  --ag-checkbox-unchecked-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color-hover</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  --ag-side-bar-panel-width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">350px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  --ag-tab-min-width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">350px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// or write CSS selectors to make customisations beyond what the parameters support</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#BABED8;"> solid </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-color-web-rock-900</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-row</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">16px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-picker-field-wrapper</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-row-hover</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> pointer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-tooltip</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--max-width</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-border-radius-medium</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-tooltip-background-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-font-family</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-tooltip-font-size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-tooltip-font-weight</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-tooltip-line-height</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-tooltip-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-spacing-xxx-small</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-spacing-x-small</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/* hide filter icon until hovered over */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-icon</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-cell-menu-button</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/* show filter icon when hovered over */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-active</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-icon</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-cell-menu-button</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-column-menu-visible</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-icon</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-header-cell-menu-button</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> unset</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/* filter styling ... */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">not</span><span style="color:#89DDFF;">([</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">]):</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">tel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">datetime-local</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">textarea</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">ag-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-background-color-focus</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color-focus</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-focus-shadow</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-input-field-input</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-background-color-hover</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color-hover</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-picker-field-wrapper</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-background-color-focus</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-border-color-focus</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">--six-input-focus-shadow</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-filter</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">focus</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-select-list-item</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-theme-alpine</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ag-filter</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,8),e=[o];function c(t,r,D,y,F,B){return n(),a("div",null,e)}const E=s(p,[["render",c]]);export{A as __pageData,E as default};