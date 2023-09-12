"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[9596],{9596:function(t,i,a){a.r(i),a.d(i,{six_tab:function(){return c}});var o=a(2723),s=a(4795),e=a(9249),r=a(7371),n=a(8551),l=0,c=function(){function t(i){(0,e.Z)(this,t),(0,n.r)(this,i),this.sixClose=(0,n.c)(this,"six-tab-close",7),this.componentId="tab-".concat(++l),this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}return(0,r.Z)(t,[{key:"connectedCallback",value:function(){this.handleCloseClick=this.handleCloseClick.bind(this)}},{key:"setFocus",value:function(){var t=(0,s.Z)((0,o.Z)().mark((function t(i){var a;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(a=this.tab)||void 0===a||a.focus(i);case 1:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}()},{key:"removeFocus",value:function(){var t=(0,s.Z)((0,o.Z)().mark((function t(){var i;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(i=this.tab)||void 0===i||i.blur();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleCloseClick",value:function(){this.sixClose.emit()}},{key:"render",value:function(){var t,i=this,a=this.host.closest("six-tab-group"),o=null!==(t=null===a||void 0===a?void 0:a.placement)&&void 0!==t?t:"top";return(0,n.h)(n.H,{id:this.host.id||this.componentId},(0,n.h)("div",{part:"base",ref:function(t){return i.tab=t},class:{tab:!0,"tab--top":"top"===o,"tab--bottom":"bottom"===o,"tab--left":"left"===o,"tab--right":"right"===o,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled},role:"tab","aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled||!this.active?"-1":"0"},(0,n.h)("slot",null),this.closable&&(0,n.h)("six-icon-button",{name:"close",size:"xSmall",exportparts:"base:close-button",class:"tab__close-button",onClick:this.handleCloseClick,tabIndex:-1,"aria-hidden":"true"})),(0,n.h)("div",{class:{tab__indicator:!0,"tab__indicator--active":this.active,"tab__indicator--top":"top"===o,"tab__indicator--bottom":"bottom"===o,"tab__indicator--left":"left"===o,"tab__indicator--right":"right"===o}}))}},{key:"host",get:function(){return(0,n.g)(this)}}]),t}();c.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:flex}.tab{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-semibold);color:var(--six-tab-color);padding:var(--six-spacing-medium) var(--six-spacing-large);white-space:nowrap;user-select:none;cursor:pointer;width:100%}.tab:focus{outline:none}.tab:focus-visible{outline:var(--six-focus-ring);outline-offset:calc(-1 * var(--six-focus-ring-width) - var(--six-focus-ring-offset))}.tab.tab--active:not(.tab--disabled){color:var(--six-tab-color-active);font-weight:var(--six-font-weight-bold)}.tab.tab--closable{padding-right:var(--six-spacing-small)}.tab.tab--disabled{color:var(--six-tab-color-disabled);cursor:not-allowed}.tab:hover:not(.tab--disabled){color:var(--six-tab-color-hover)}.tab__close-button{font-size:var(--six-font-size-large);margin-left:var(--six-spacing-xx-small)}.tab__close-button::part(base){padding:var(--six-spacing-xxx-small)}.tab__indicator{position:absolute}.tab__indicator.tab__indicator--active{background-color:var(--six-tab-border-color-active)}.tab--top{margin-bottom:var(--six-spacing-xxx-small)}.tab__indicator--top{width:100%;bottom:0;height:var(--six-tab-border-width)}.tab--bottom{margin-top:var(--six-spacing-xxx-small)}.tab__indicator--bottom{width:100%;top:0;height:var(--six-tab-border-width)}.tab--left{margin-right:var(--six-spacing-xxx-small)}.tab__indicator--left{height:100%;right:0;top:0;width:var(--six-tab-border-width)}.tab--right{margin-left:var(--six-spacing-xxx-small)}.tab__indicator--right{height:100%;left:0;top:0;width:var(--six-tab-border-width)}"}}]);
//# sourceMappingURL=9596.a126e5c9.chunk.js.map