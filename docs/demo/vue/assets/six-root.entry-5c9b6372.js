import{r as o,c as r,h as e,g as a}from"./index-8f8a160b.js";const n=":host{display:block;overflow:hidden;height:inherit}.six-root{display:grid;grid-template:auto 1fr auto/auto 1fr auto;height:100%}.six-root__container--padded{padding:var(--six-spacing-xxx-large)}.six-root__left-sidebar{height:100%;overflow:scroll;grid-column:1/2}.six-root__right-sidebar{height:100%;overflow:scroll;grid-column:3/4}.six-root nav{overflow:hidden}header{grid-column:1/4;position:sticky;top:0;z-index:var(--six-z-index-header);margin-right:2px}main{height:100%;display:flex;flex-direction:column;justify-content:space-between;grid-column:2/3;overflow:auto}footer{grid-column:1/4}",l=class{constructor(t){o(this,t),this.collapsedEvent=r(this,"six-root-collapsed",7),this.resizeObserver=new ResizeObserver(([s])=>{const{width:i}=s.contentRect;this.collapse=i<this.breakpoint}),this.breakpoint=1024,this.padded=!0,this.stage=null,this.version="",this.collapse=!1}handleCollapsed(t){this.collapsedEvent.emit({collapsed:t})}componentWillLoad(){this.resizeObserver.observe(this.host)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return e("host",{class:"six-root"},e("header",{part:"header"},this.stage&&e("six-stage-indicator",{stage:this.stage},this.version),e("slot",{name:"header"})),e("nav",{class:"six-root__left-sidebar",part:"left-sidebar"},e("set-attributes",{value:{open:!this.collapse}},e("slot",{name:"left-sidebar"}))),e("main",{part:"main"},e("div",{class:{"six-root__container":!0,"six-root__container--padded":this.padded},part:"container"},e("slot",{name:"main"})),e("div",{class:"six-root__footer"},e("slot",{name:"footer"}))),e("nav",{class:"six-root__right-sidebar",part:"right-sidebar"},e("slot",{name:"right-sidebar"})))}get host(){return a(this)}static get watchers(){return{collapse:["handleCollapsed"]}}};l.style=n;export{l as six_root};
