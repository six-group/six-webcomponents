(self.webpackChunksix_app=self.webpackChunksix_app||[]).push([[7365],{7365:(t,e,o)=>{"use strict";o.r(e),o.d(e,{six_table:()=>h});var r=o(6304),s=o(1488),i=o(7577);const l=[t=>"object"==typeof t,t=>"object"==typeof t.columns,t=>Array.isArray(t.rows),t=>void 0===t.sort||"object"==typeof t.sort],n=t=>l.every((t=>e=>e(t))(t)),a=t=>"string"!=typeof t||t.length<1,c={[i.F.Includes]:(t,e)=>t.includes(e),[i.F.NotIncludes]:(t,e)=>!t.includes(e),[i.F.Equals]:(t,e)=>t===e,[i.F.NotEquals]:(t,e)=>t!==e},d=t=>t===i.S.None;let h=class{constructor(t){(0,s.r)(this,t),this.tableReady=(0,s.c)(this,"six-table-ready",7),this.tableRowClicked=(0,s.c)(this,"six-table-row-clicked",7),this.tableCellClicked=(0,s.c)(this,"six-table-cell-clicked",7),this.striped=!1,this.loading=!1,this.data={columns:{},rows:[]},this.handleRowClick=t=>e=>{this.tableRowClicked.emit({event:e,item:t})},this.handleCellClick=(t,e)=>o=>{this.tableCellClicked.emit({event:o,item:t,key:e})}}handleData({detail:t}){n(t)&&(this.data=t)}setData(t){var e=this;return(0,r.Z)(function*(){n(t)&&(e.data=t)})()}componentDidLoad(){this.tableReady.emit()}render(){const t=this.loading&&(0,s.h)("div",{class:"loading"},(0,s.h)("six-spinner",{"data-testid":"loading-spinner"}));return(0,s.h)(s.H,null,(0,s.h)("slot",null,(({data:t,handleRowClick:e,handleCellClick:o})=>{if(!n(t))return;const r=Object.keys(t.columns),l=r.map(e=>{const o=(r=e,(t={},e)=>t[r]||e);var r;const i=o(t.sort,void 0),[[l,n]=[]]=Object.entries(o(t.filter,{}));return(0,s.h)("six-table-header-cell",{name:e,sort:i,filter:l,value:n},t.columns[e])}),h=((t,e)=>o=>{if(a(e))return!0;const r=e.toLowerCase();return t.map(t=>{var e;return null!==(e=o[t])&&void 0!==e?e:""}).map(String).join().toLowerCase().includes(r)})(Object.keys(t.columns),t.quickFilter),u=((t={})=>e=>{var o;const r=Object.keys(t);if(0===r.length)return!0;for(const s of r){const r=t[s];if(!r)return!0;for(const[t,i]of Object.entries(r)){if(a(i))continue;const r=String(null!==(o=e[s])&&void 0!==o?o:"");if(!a(r)&&!c[t](r,i))return!1}}return!0})(t.filter),b=((t={},e={})=>o=>{const r=Object.values(t);return 0===r.length||r.every(d)?o:[...o].sort((o,r)=>Object.entries(t).reduce((t,[s,l],n)=>{if(l===i.S.None)return t;const a=e[s],c={[i.S.Asc]:1,[i.S.Desc]:-1}[l];return a?t+c*(a(o,r)<<n):t+c*(((t,e)=>String(t).localeCompare(String(e)))(o[s],r[s])<<n)},0))})(t.sort,t.compare)(t.rows.filter(h).filter(u)).map((i,l)=>{const n=r.map(e=>{const r=t.render&&t.render[e],n="function"==typeof r?r(i):String(i[e]);return(0,s.h)("six-table-cell",{onClick:o(i,e),"data-testid":`table-cell-${e}-${l}`,innerHTML:n})});return(0,s.h)("six-table-row",{onClick:e(i),"data-testid":`table-row-${l}`},n)});return(0,s.h)(s.F,null,(0,s.h)("six-table-header",{"data-testid":"table-header"},l),b)})(this)),t)}get host(){return(0,s.g)(this)}};h.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:table;border-collapse:collapse;user-select:none;border:none;width:100%;height:100%}:host([loading]){border-collapse:separate}:host([striped]) six-table-row:nth-child(odd):not(:hover),:host([striped]) ::slotted(six-table-row:nth-child(odd):not(:hover)){background-color:var(--six-table-row-background-color)}:host(:not(striped)) ::slotted(six-table-row){border-bottom:solid 1px var(--six-table-row-border-color)}.loading{position:absolute;background-color:var(--six-table-background-color);top:0;left:0;width:100%;height:100%}.loading six-spinner{top:calc(50% - 0.5em);left:50%;transform:scale(3)}"}}]);