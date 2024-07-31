import{_ as h,E as s,c as o,J as t,d as i,o as p}from"./chunks/framework.DFnNdRoT.js";const w=JSON.parse('{"title":"File List Item","description":"","frontmatter":{},"headers":[],"relativePath":"components/six-file-list-item.md","filePath":"components/six-file-list-item.md","lastUpdated":1722415838000}'),k={name:"components/six-file-list-item.md"},r=i('<h1 id="file-list-item" tabindex="-1">File List Item <a class="header-anchor" href="#file-list-item" aria-label="Permalink to &quot;File List Item&quot;">​</a></h1><p>A <code>six-file-list-item</code> can be used within a <code>six-file-list</code> and in compination with <code>six-file-upload</code></p><h3 id="showing-the-file-name" tabindex="-1">Showing the file name <a class="header-anchor" href="#showing-the-file-name" aria-label="Permalink to &quot;Showing the file name&quot;">​</a></h3><p>Use the <code>identifier</code> attribute to set an id (will be returned when trying to download or delete a file) and the <code>name</code> attribute to set the name (will be shown in the UI)</p>',4),c=i('<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file_1.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="showing-the-upload-date" tabindex="-1">Showing the upload date <a class="header-anchor" href="#showing-the-upload-date" aria-label="Permalink to &quot;Showing the upload date&quot;">​</a></h3><p>You can use <code>date</code> attribute to show when the file has been uploaded</p>',3),E=i('<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id_2&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file_2.pdf&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;23.09.2021, 09:12&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="showing-file-size" tabindex="-1">Showing File Size <a class="header-anchor" href="#showing-file-size" aria-label="Permalink to &quot;Showing File Size&quot;">​</a></h3><p>You can show the file size in KB. Use the <code>size</code> attribute. The number you provide will be divided by 1024 and rounded</p>',3),g=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id_3&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file_3.pdf&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;03.12.2021, 10:22&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;75680&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="disabling-download" tabindex="-1">Disabling download <a class="header-anchor" href="#disabling-download" aria-label="Permalink to &quot;Disabling download&quot;">​</a></h3><p>If you don&#39;t want the file to be downloadable simply set the <code>nodownload</code> attribute</p>`,3),_=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id_4&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file_4.pdf&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;02.10.2021, 12:25&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;77590&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nodownload</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="disabling-deletion" tabindex="-1">Disabling Deletion <a class="header-anchor" href="#disabling-deletion" aria-label="Permalink to &quot;Disabling Deletion&quot;">​</a></h3><p>If you don&#39;t want the file to be deletable, simply set the <code>nodelete</code> attribute</p>`,3),u=i(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           identifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id_5&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file_5.pdf&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;11.07.2021, 10:32&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;72040&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nodelete</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">six-file-list-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>date</code></td><td><code>date</code></td><td>The date when the file was uploaded</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><code>identifier</code></td><td><code>identifier</code></td><td>An id to clearly identify the file</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><code>name</code></td><td><code>name</code></td><td>The filename</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td><code>nodelete</code></td><td><code>nodelete</code></td><td>Set to true if you don&#39;t want to allow to delete this file</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>nodownload</code></td><td><code>nodownload</code></td><td>Set to true if you don&#39;t want to allow to download this file</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td><code>size</code></td><td>The file size. This number will be divided by 1024 to show the filesize in KB</td><td><code>number | undefined</code></td><td><code>undefined</code></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>six-file-list-item-download</code></td><td>Triggered on file download.</td><td><code>CustomEvent&lt;SixFileListDownloadPayload&gt;</code></td></tr><tr><td><code>six-file-list-item-remove</code></td><td>Triggered on file remove.</td><td><code>CustomEvent&lt;SixFileListRemovePayload&gt;</code></td></tr></tbody></table><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><h3 id="depends-on" tabindex="-1">Depends on <a class="header-anchor" href="#depends-on" aria-label="Permalink to &quot;Depends on&quot;">​</a></h3><ul><li><a href="./six-icon.html">six-icon</a></li></ul><h3 id="graph" tabindex="-1">Graph <a class="header-anchor" href="#graph" aria-label="Permalink to &quot;Graph&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  six-file-list-item --&gt; six-icon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  style six-file-list-item fill:#f9f,stroke:#333,stroke-width:4px</span></span></code></pre></div><hr><p>Copyright © 2021-present SIX-Group</p>`,12);function m(y,f,F,b,C,x){const e=s("docs-demo-six-file-list-item-0"),a=s("docs-demo-six-file-list-item-1"),n=s("docs-demo-six-file-list-item-2"),l=s("docs-demo-six-file-list-item-3"),d=s("docs-demo-six-file-list-item-4");return p(),o("div",null,[r,t(e),c,t(a),E,t(n),g,t(l),_,t(d),u])}const v=h(k,[["render",m]]);export{w as __pageData,v as default};
