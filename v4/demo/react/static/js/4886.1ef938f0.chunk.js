"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[4886],{2933:function(e,i,t){t.d(i,{f:function(){return s}});var n=new WeakMap;var s={observe:function(e){if(null!=e){var i=["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageDown","PageUp"],t=function(t){i.includes(t.key)&&e.classList.add("focus-visible")},s=function(){return e.classList.remove("focus-visible")};n.set(e,{is:t,isNot:s}),e.addEventListener("keydown",t),e.addEventListener("keyup",t),e.addEventListener("mousedown",s),e.addEventListener("mousedown",s)}},unobserve:function(e){if(null!=e){var i=n.get(e);if(i){var t=i.is,s=i.isNot;e.classList.remove("focus-visible"),e.removeEventListener("keydown",t),e.removeEventListener("keyup",t),e.removeEventListener("mousedown",s),e.removeEventListener("mousedown",s)}}}}},4886:function(e,i,t){t.r(i),t.d(i,{six_details:function(){return h}});var n=t(2723),s=t(4795),o=t(9249),r=t(7371),a=t(8551),d=t(2933),l=0,h=function(){function e(i){var t=this;(0,o.Z)(this,e),(0,a.r)(this,i),this.sixShow=(0,a.c)(this,"six-details-show",7),this.sixAfterShow=(0,a.c)(this,"six-details-after-show",7),this.sixHide=(0,a.c)(this,"six-details-hide",7),this.sixAfterHide=(0,a.c)(this,"six-details-after-hide",7),this.componentId="details-".concat(++l),this.isVisible=!1,this.handleBodyTransitionEnd=function(e){if(null!=t.body){var i=e.target;"height"===e.propertyName&&i.classList.contains("details__body")&&(t.body.style.overflow=t.open?"visible":"hidden",t.body.style.height=t.open?"auto":"0",t.open?t.sixAfterShow.emit():t.sixAfterHide.emit(),t.body.hidden=!t.open)}},this.handleSummaryClick=function(){var e;t.disabled||!t.hasContent&&!t.selectableEmpty||(t.open?t.hide():t.show(),null===(e=t.header)||void 0===e||e.focus())},this.handleSummaryKeyDown=function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.open?t.hide():t.show()),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||(e.preventDefault(),t.hide()),"ArrowDown"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),t.show())},this.animateSummaryIcon=!0,this.open=!1,this.summary="",this.summaryIcon=void 0,this.summaryIconSize="inherit",this.disabled=!1,this.inline=!1,this.selectableEmpty=!1,this.hasContent=!0}return(0,r.Z)(e,[{key:"handleOpenChange",value:function(){null!=this.body&&(this.open?this.show():this.hide())}},{key:"componentDidLoad",value:function(){null!=this.details&&null!=this.body&&(d.f.observe(this.details),this.body.hidden=!this.open,this.open&&this.show())}},{key:"disconnectedCallback",value:function(){null!=this.details&&d.f.unobserve(this.details)}},{key:"show",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isVisible&&null!=this.body){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixShow.emit().defaultPrevented){e.next=6;break}return this.open=!1,e.abrupt("return");case 6:this.body.hidden=!1,0===this.body.scrollHeight?(this.body.style.height="auto",this.body.style.overflow="visible"):(this.body.style.height="".concat(this.body.scrollHeight,"px"),this.body.style.overflow="hidden"),this.isVisible=!0,this.open=!0;case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hide",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isVisible&&null!=this.body){e.next=2;break}return e.abrupt("return");case 2:if(i=this.body,!this.sixHide.emit().defaultPrevented){e.next=7;break}return this.open=!0,e.abrupt("return");case 7:i.style.height="".concat(i.scrollHeight,"px"),i.style.overflow="hidden",requestAnimationFrame((function(){i.style.height="0"})),this.isVisible=!1,this.open=!1;case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,i=this.hasContent&&(this.summaryIcon||"expand_more");return(0,a.h)("div",{ref:function(i){return e.details=i},part:"base",class:{details:!0,"details--open":this.open,"details--disabled":this.disabled,inline:this.inline}},(0,a.h)("header",{ref:function(i){return e.header=i},part:"header",id:"".concat(this.componentId,"-header"),class:"details__header",role:"button","aria-expanded":this.open?"true":"false","aria-controls":"".concat(this.componentId,"-content"),"aria-disabled":this.disabled?"true":"false",tabIndex:this.disabled?-1:0,onClick:this.handleSummaryClick,onKeyDown:this.handleSummaryKeyDown},(0,a.h)("div",{part:"summary",class:"details__summary"},(0,a.h)("slot",{name:"summary"},this.summary)),(0,a.h)("span",{part:"summary-icon",class:{"details__summary-icon":!0,"details__summary-icon--animate":this.animateSummaryIcon}},(0,a.h)("slot",{name:"summary-icon",onSlotchange:function(){return e.animateSummaryIcon=!1}},i&&(0,a.h)("six-icon",{size:this.summaryIconSize},i)))),(0,a.h)("div",{ref:function(i){return e.body=i},class:"details__body",onTransitionEnd:this.handleBodyTransitionEnd},(0,a.h)("div",{part:"content",id:"".concat(this.componentId,"-content"),class:"details__content",role:"region","aria-labelledby":"".concat(this.componentId,"-header")},(0,a.h)("slot",null))))}},{key:"host",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"]}}}]),e}();h.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--hide-duration:var(--six-transition-medium);--hide-timing-function:ease;--show-duration:var(--six-transition-medium);--show-timing-function:ease;font-family:var(--six-font-family);display:block}.details{border:solid var(--six-border-width) var(--six-input-border-color);border-radius:var(--six-border-radius-medium);color:var(--six-details-color);overflow-anchor:none;font-size:var(--six-input-font-size-medium)}.details:hover:not(.details--disabled):not(.details--open){border-color:var(--six-input-border-color-hover)}.details.inline{border:none;color:var(--six-sidebar-color)}.details.inline:hover{background-color:var(--six-sidebar-hover-background-color)}.details.inline.details--open{background-color:var(--six-color-web-rock-50)}.details.inline.details--open:hover{border:none;box-shadow:none}.details.inline.details--open>.details__header{color:var(--six-sidebar-color);font-weight:var(--six-font-weight-bold);background-color:var(--six-sidebar-header-background-color)}.details--disabled{background-color:var(--six-input-background-color-disabled);border-color:var(--six-input-border-color-disabled);color:var(--six-input-color-disabled)}.details__header{display:flex;align-items:center;border-radius:inherit;padding:var(--six-spacing-medium);user-select:none;cursor:pointer}.details__header:focus{outline:none}.details--disabled .details__header{cursor:not-allowed;border-width:1px}.details--disabled .details__header:focus{outline:none;box-shadow:none}.details__summary{flex:1 1 auto;display:flex;align-items:center}.details__summary-icon{flex:0 0 auto;display:flex;align-items:center;font-size:1.2em;transition:var(--six-transition-medium) transform ease}.details--open .details__summary-icon--animate{transform:rotate(-180deg)}.details--open:hover{color:var(--six-input-color-focus)}.details__body{height:0;overflow:hidden;transition-property:height;transition-duration:var(--hide-duration);transition-timing-function:var(--hide-timing-function)}.details--open .details__body{transition-duration:var(--show-duration);transition-timing-function:var(--show-timing-function)}.details__content{padding:var(--six-spacing-medium)}"}}]);
//# sourceMappingURL=4886.1ef938f0.chunk.js.map