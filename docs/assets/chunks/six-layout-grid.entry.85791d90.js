import{r as e,h as t,H as o,g as n}from"../app.e11adc8d.js";import"./framework.57535aa4.js";import"./theme.48150ed6.js";const r=":host{display:grid;grid-template-columns:repeat(var(--no-of-columns), 1fr);grid-column-gap:1rem}",i=r,a=class{constructor(s){e(this,s),this.columns=void 0}handleColumnsChange(){(typeof this.columns!="number"||this.columns===0)&&(this.columns=12),this.host.style.setProperty("--no-of-columns",String(this.columns))}componentWillLoad(){this.handleColumnsChange()}render(){return t(o,{key:"84c4fee011655f296908661ae1b10452a5682594"},t("slot",{key:"389a12ed87de92e7c835df2a77c0f6316406284e"}))}get host(){return n(this)}static get watchers(){return{columns:["handleColumnsChange"]}}};a.style=i;export{a as six_layout_grid};
