"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[2378],{2378:(c,e,o)=>{o.r(e),o.d(e,{six_tab:()=>r});var l=o(5861),a=o(5856);let n=0;const r=class{constructor(i){(0,a.r)(this,i),this.sixClose=(0,a.c)(this,"six-tab-close",7),this.componentId="tab-"+ ++n,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){this.handleCloseClick=this.handleCloseClick.bind(this)}setFocus(i){var s=this;return(0,l.Z)(function*(){var t;null===(t=s.tab)||void 0===t||t.focus(i)})()}removeFocus(){var i=this;return(0,l.Z)(function*(){var s;null===(s=i.tab)||void 0===s||s.blur()})()}handleCloseClick(){this.sixClose.emit()}render(){var i;const s=this.host.closest("six-tab-group"),t=null!==(i=s?.placement)&&void 0!==i?i:"top";return(0,a.h)(a.H,{key:"66eaedc782e87077c15d655a283127bba7e89dd8",id:this.host.id||this.componentId},(0,a.h)("div",{key:"dd59ec7e9406b1baab4f4fda287cfdaf98d79c31",part:"base",ref:d=>this.tab=d,class:{tab:!0,"tab--top":"top"===t,"tab--bottom":"bottom"===t,"tab--left":"left"===t,"tab--right":"right"===t,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled},role:"tab","aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled||!this.active?"-1":"0"},(0,a.h)("slot",{key:"bd701cd5777e3d1cadbf3907534470a96e46a66d"}),this.closable&&(0,a.h)("six-icon-button",{name:"close",size:"xSmall",exportparts:"base:close-button",class:"tab__close-button",onClick:this.handleCloseClick,tabIndex:-1,"aria-hidden":"true"})),(0,a.h)("div",{key:"bc01ef29679199af1e9378f57b31016a081b9990",class:{tab__indicator:!0,"tab__indicator--active":this.active,"tab__indicator--top":"top"===t,"tab__indicator--bottom":"bottom"===t,"tab__indicator--left":"left"===t,"tab__indicator--right":"right"===t}}))}get host(){return(0,a.g)(this)}};r.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:flex}.tab{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-semibold);color:var(--six-tab-color);padding:var(--six-spacing-medium) var(--six-spacing-large);white-space:nowrap;user-select:none;cursor:pointer;width:100%}.tab:focus{outline:none}.tab:focus-visible{outline:var(--six-focus-ring);outline-offset:calc(-1 * var(--six-focus-ring-width) - var(--six-focus-ring-offset))}.tab.tab--active:not(.tab--disabled){color:var(--six-tab-color-active);font-weight:var(--six-font-weight-bold)}.tab.tab--closable{padding-right:var(--six-spacing-small)}.tab.tab--disabled{color:var(--six-tab-color-disabled);cursor:not-allowed}.tab:hover:not(.tab--disabled){color:var(--six-tab-color-hover)}.tab__close-button{font-size:var(--six-font-size-large);margin-left:var(--six-spacing-xx-small)}.tab__close-button::part(base){padding:var(--six-spacing-xxx-small)}.tab__indicator{position:absolute}.tab__indicator.tab__indicator--active{background-color:var(--six-tab-border-color-active)}.tab--top{margin-bottom:var(--six-spacing-xxx-small)}.tab__indicator--top{width:100%;bottom:0;height:var(--six-tab-border-width)}.tab--bottom{margin-top:var(--six-spacing-xxx-small)}.tab__indicator--bottom{width:100%;top:0;height:var(--six-tab-border-width)}.tab--left{margin-right:var(--six-spacing-xxx-small)}.tab__indicator--left{height:100%;right:0;top:0;width:var(--six-tab-border-width)}.tab--right{margin-left:var(--six-spacing-xxx-small)}.tab__indicator--right{height:100%;left:0;top:0;width:var(--six-tab-border-width)}"}}]);