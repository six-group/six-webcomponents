(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2263c0"],{e890:function(e,t,s){"use strict";s.r(t),s.d(t,"six_root",(function(){return r}));var i=s("c8e7");const o=":host{display:block;overflow:hidden;height:inherit}.six-root{display:grid;grid-template:auto 1fr auto/auto 1fr auto;height:100%}.six-root__container--padded{padding:var(--six-spacing-xxx-large)}.six-root__left-sidebar{height:100%;overflow:scroll;grid-column:1/2}.six-root__right-sidebar{height:100%;overflow:scroll;grid-column:3/4}.six-root nav{overflow:hidden}header{grid-column:1/4;position:sticky;top:0;z-index:var(--six-z-index-header);margin-right:2px}main{height:100%;display:flex;flex-direction:column;justify-content:space-between;grid-column:2/3;overflow:auto}footer{grid-column:1/4}";let r=class{constructor(e){Object(i["i"])(this,e),this.collapsedEvent=Object(i["e"])(this,"six-root-collapsed",7),this.breakpoint=1024,this.padded=!0,this.stage=null,this.version="",this.resizeObserver=new ResizeObserver(([e])=>{const{width:t}=e.contentRect;this.collapse=t<this.breakpoint})}handleCollapsed(e){this.collapsedEvent.emit({collapsed:e})}componentWillLoad(){this.resizeObserver.observe(this.host)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return Object(i["g"])("host",{class:"six-root"},Object(i["g"])("header",{part:"header"},this.stage&&Object(i["g"])("six-stage-indicator",{stage:this.stage},this.version),Object(i["g"])("slot",{name:"header"})),Object(i["g"])("nav",{class:"six-root__left-sidebar",part:"left-sidebar"},Object(i["g"])("set-attributes",{value:{open:!this.collapse}},Object(i["g"])("slot",{name:"left-sidebar"}))),Object(i["g"])("main",{part:"main"},Object(i["g"])("div",{class:{"six-root__container":!0,"six-root__container--padded":this.padded},part:"container"},Object(i["g"])("slot",{name:"main"})),Object(i["g"])("div",{class:"six-root__footer"},Object(i["g"])("slot",{name:"footer"}))),Object(i["g"])("nav",{class:"six-root__right-sidebar",part:"right-sidebar"},Object(i["g"])("slot",{name:"right-sidebar"})))}get host(){return Object(i["f"])(this)}static get watchers(){return{collapse:["handleCollapsed"]}}};r.style=o}}]);
//# sourceMappingURL=chunk-2d2263c0.c342b534.js.map