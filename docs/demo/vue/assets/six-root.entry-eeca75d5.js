import{r as i,h as t,g as o}from"./index-b3442079.js";const r=":host{display:block;overflow:hidden;height:inherit}.six-root{display:grid;grid-template:auto 1fr auto/auto 1fr auto;height:100%}.six-root__container--padded{padding:var(--six-spacing-xxx-large)}.six-root__left-sidebar{height:100%;overflow:scroll;grid-column:1/2}.six-root__right-sidebar{height:100%;overflow:scroll;grid-column:3/4}.six-root nav{overflow:hidden}header{grid-column:1/4;position:sticky;top:0;z-index:var(--six-z-index-header);margin-right:2px}main{height:100%;display:flex;flex-direction:column;justify-content:space-between;grid-column:2/3;overflow:auto}footer{grid-column:1/4}",s=class{constructor(e){i(this,e),this.padded=!0,this.stage=null,this.version=""}render(){return t("host",{class:"six-root"},t("header",{part:"header"},this.stage&&t("six-stage-indicator",{stage:this.stage},this.version),t("slot",{name:"header"})),t("nav",{class:"six-root__left-sidebar",part:"left-sidebar"},t("slot",{name:"left-sidebar"})),t("main",{part:"main"},t("div",{class:{"six-root__container":!0,"six-root__container--padded":this.padded},part:"container"},t("slot",{name:"main"})),t("div",{class:"six-root__footer"},t("slot",{name:"footer"}))),t("nav",{class:"six-root__right-sidebar",part:"right-sidebar"},t("slot",{name:"right-sidebar"})))}get host(){return o(this)}};s.style=r;export{s as six_root};