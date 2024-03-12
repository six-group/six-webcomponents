"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[9070],{9070:(d,e,i)=>{i.r(e),i.d(e,{six_button:()=>l});var s=i(5861),t=i(5856),a=i(5730),b=i(1114);const l=class{constructor(r){(0,t.r)(this,r),this.sixBlur=(0,t.c)(this,"six-button-blur",7),this.sixFocus=(0,t.c)(this,"six-button-focus",7),this.handleSlotChange=()=>{this.hasLabel=(0,a.h)(this.host),this.hasPrefix=(0,a.h)(this.host,"prefix"),this.hasSuffix=(0,a.h)(this.host,"suffix")},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleClick=o=>{if(this.disabled||this.loading)return o.preventDefault(),void o.stopPropagation();this.submit&&(o.preventDefault(),(0,b.s)(this.host))},this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.type="primary",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.circle=!1,this.submit=!1,this.reset=!1,this.name="",this.value="",this.href=void 0,this.target=void 0,this.download=void 0}componentWillLoad(){this.handleSlotChange()}setFocus(r){var o=this;return(0,s.Z)(function*(){var n;null===(n=o.nativeButton)||void 0===n||n.focus(r)})()}removeFocus(){var r=this;return(0,s.Z)(function*(){var o;null===(o=r.nativeButton)||void 0===o||o.blur()})()}render(){const r=null!=this.href,o=!r;return(0,t.h)("div",{key:"5716f556b3f259d77c503deee0a5fccc2a904bf4",onClick:this.handleClick,class:{"button-wrapper--disabled":this.disabled}},(0,t.h)(r?"a":"button",{key:"c2fe53c0e2b4fdd6d89c36ff8720cc263bac44aa",ref:u=>this.nativeButton=u,part:"base",class:{button:!0,"button--secondary":"secondary"===this.type,"button--primary":"primary"===this.type,"button--link":"link"===this.type,"button--success":"success"===this.type,"button--warning":"warning"===this.type,"button--danger":"danger"===this.type,"button--action":"action"===this.type,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--pill":this.pill,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix},disabled:o?this.disabled:void 0,tabindex:this.disabled?"-1":void 0,type:o?this.submit?"submit":this.reset?"reset":"button":void 0,name:o?this.name:void 0,value:o?this.value:void 0,href:r?this.href:void 0,target:r&&null!=this.target?this.target:void 0,download:r&&null!=this.download?this.download:void 0,rel:r&&null!=this.target?"noreferrer noopener":void 0,onBlur:this.handleBlur,onFocus:this.handleFocus,"data-testid":"button"},(0,t.h)("span",{key:"aa6093fd8833fdf4860dd8127c32f95405679a11",part:"prefix",class:"button__prefix"},(0,t.h)("slot",{key:"ed197dbf11772f1a2e10d84c53507a87fe696f63",onSlotchange:this.handleSlotChange,name:"prefix"})),(0,t.h)("span",{key:"f448d136ad4bb9e8e7379f6ece670b6031040d23",part:"label",class:"button__label"},(0,t.h)("slot",{key:"9a11065a1568921dab8db67619e1be45e15ca8aa",onSlotchange:this.handleSlotChange})),(0,t.h)("span",{key:"23695f99c1c866f863632fc0a25c8f568ce537ab",part:"suffix",class:"button__suffix"},(0,t.h)("slot",{key:"fa2e99811d561d5939cc07469c2159627a7be711",onSlotchange:this.handleSlotChange,name:"suffix"})),this.caret&&(0,t.h)("span",{part:"caret",class:"button__caret"},(0,t.h)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},(0,t.h)("polyline",{points:"6 9 12 15 18 9"}))),this.loading&&(0,t.h)("six-spinner",null)))}get host(){return(0,t.g)(this)}};l.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:inline-block;width:auto;cursor:pointer}.button{display:inline-flex;align-items:stretch;justify-content:center;width:100%;border-style:solid;border-width:var(--six-border-width);border-radius:0;font-family:var(--six-font-family);font-weight:var(--six-font-weight-semibold);text-decoration:none;user-select:none;white-space:nowrap;vertical-align:middle;padding:0;transition:var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) border, var(--six-transition-fast) box-shadow;cursor:inherit}.button::-moz-focus-inner{border:0}.button:focus{outline:none}.button.button--disabled{pointer-events:none}.button ::slotted(six-icon){pointer-events:none;transform:translateY(-1.5px)}.button-wrapper--disabled{cursor:not-allowed}.button__prefix,.button__suffix{flex:0 0 auto;display:flex;align-items:center}.button:focus-visible{outline:var(--six-focus-ring);outline-offset:var(--six-focus-ring-offset)}.button.button--secondary{background-color:var(--six-color-white);border-color:var(--six-color-web-rock-900);color:var(--six-color-web-rock-900)}.button.button--secondary.button--disabled{background-color:var(--six-color-web-rock-400);border-color:var(--six-color-web-rock-400);color:var(--six-color-web-rock-700)}.button.button--secondary:hover:not(.button--disabled){background-color:var(--six-color-web-rock-100)}.button.button--secondary:focus:not(.button--disabled){background-color:var(--six-color-web-rock-100);border-color:var(--six-color-web-rock-400)}.button.button--secondary:active:not(.button--disabled){background-color:var(--six-color-web-rock-300);border-color:var(--six-color-web-rock-900);border-width:1px}.button.button--primary{background-color:var(--six-color-web-rock-900);border-color:var(--six-color-web-rock-900);color:var(--six-color-white)}.button.button--primary.button--disabled{background-color:var(--six-color-web-rock-400);border-color:var(--six-color-web-rock-400);color:var(--six-color-web-rock-700)}.button.button--primary:hover:not(.button--disabled){background-color:var(--six-color-web-rock-800);border-color:var(--six-color-web-rock-800)}.button.button--primary:active:not(.button--disabled){background-color:var(--six-color-web-rock-900);border-color:var(--six-color-web-rock-900);opacity:70%}.button.button--link{background-color:transparent;border-color:transparent;color:var(--six-color-action-500)}.button.button--link.button--disabled{color:var(--six-color-web-rock-400)}.button.button--link:hover:not(.button--disabled){color:var(--six-color-action-600)}.button.button--link:active:not(.button--disabled){color:var(--six-color-action-light-to-be-defined)}.button.button--danger{background-color:var(--six-color-danger-800);border-color:var(--six-color-danger-800);color:var(--six-color-white)}.button.button--danger.button--disabled{background-color:var(--six-color-web-rock-400);border-color:var(--six-color-web-rock-400);color:var(--six-color-web-rock-700)}.button.button--danger:hover:not(.button--disabled){background-color:var(--six-color-danger-900);border-color:var(--six-color-danger-900)}.button.button--danger:active:not(.button--disabled){background-color:var(--six-color-danger-800);border-color:var(--six-color-danger-800);opacity:70%}.button.button--warning{background-color:var(--six-color-warning-700);border-color:var(--six-color-warning-700);color:var(--six-color-web-rock-900)}.button.button--warning.button--disabled{background-color:var(--six-color-web-rock-400);border-color:var(--six-color-web-rock-400);color:var(--six-color-web-rock-700)}.button.button--warning:hover:not(.button--disabled){background-color:var(--six-color-warning-800);border-color:var(--six-color-warning-800)}.button.button--warning:active:not(.button--disabled){background-color:var(--six-color-warning-700);border-color:var(--six-color-warning-700);opacity:70%}.button.button--success{background-color:var(--six-color-success-500);border-color:var(--six-color-success-500);color:var(--six-color-web-rock-900)}.button.button--success.button--disabled{background-color:var(--six-color-web-rock-400);border-color:var(--six-color-web-rock-400);color:var(--six-color-web-rock-700)}.button.button--success:hover:not(.button--disabled){background-color:var(--six-color-success-600);border-color:var(--six-color-success-600)}.button.button--success:active:not(.button--disabled){background-color:var(--six-color-success-500);border-color:var(--six-color-success-500);opacity:70%}.button.button--action{background-color:var(--six-color-action-500);border-color:var(--six-color-action-500);color:var(--six-color-white)}.button.button--action.button--disabled{background-color:var(--six-color-web-rock-400);border-color:var(--six-color-web-rock-400);color:var(--six-color-web-rock-700)}.button.button--action:hover:not(.button--disabled){background-color:var(--six-color-action-600);border-color:var(--six-color-action-600)}.button.button--action:active:not(.button--disabled){background-color:var(--six-color-action-500);border-color:var(--six-color-action-500);opacity:70%}.button--small{font-size:var(--six-button-font-size-small);height:var(--six-height-small);line-height:calc(var(--six-height-small) - var(--six-border-width) * 2)}.button--medium{font-size:var(--six-button-font-size-medium);height:var(--six-height-medium);line-height:calc(var(--six-height-medium) - var(--six-border-width) * 2)}.button--large{font-size:var(--six-button-font-size-large);height:var(--six-height-large);line-height:calc(var(--six-height-large) - var(--six-border-width) * 2)}.button--pill.button--small{border-radius:var(--six-height-small)}.button--pill.button--medium{border-radius:var(--six-height-medium)}.button--pill.button--large{border-radius:var(--six-height-large)}.button--circle{padding-left:0;padding-right:0;font-size:revert}.button--circle.button--small{width:var(--six-height-small);border-radius:50%}.button--circle.button--medium{width:var(--six-height-medium);border-radius:50%}.button--circle.button--large{width:var(--six-height-large);border-radius:50%}.button--circle .button__prefix,.button--circle .button__suffix,.button--circle .button__caret{display:none}.button--circle .button__prefix svg,.button--circle .button__suffix svg,.button--circle .button__caret svg{color:var(--six-color-web-rock-900)}.button--caret .button__suffix{display:none}.button--caret .button__caret{display:flex;align-items:center}.button--caret .button__caret svg{color:var(--six-color-web-rock-900);width:1em;height:1em}.button--primary .button__caret svg,.button--action .button__caret svg,.button--danger .button__caret svg{color:var(--six-color-white)}.button--loading{position:relative;cursor:wait}.button--loading .button__prefix,.button--loading .button__label,.button--loading .button__suffix,.button--loading .button__caret{visibility:hidden}.button--loading six-spinner{--indicator-color:currentColor;position:absolute;height:1em;width:1em;top:calc(50% - 0.5em);left:calc(50% - 0.5em)}.button ::slotted(six-badge){position:absolute;top:0;right:0;transform:translateY(-50%) translateX(50%);pointer-events:none}.button--has-label.button--small .button__label{padding:0 var(--six-spacing-small)}.button--has-label.button--medium .button__label{padding:0 var(--six-spacing-medium)}.button--has-label.button--large .button__label{padding:0 var(--six-spacing-large)}.button--has-prefix.button--small{padding-left:var(--six-spacing-x-small)}.button--has-prefix.button--small .button__label{padding-left:var(--six-spacing-x-small)}.button--has-prefix.button--medium{padding-left:var(--six-spacing-small)}.button--has-prefix.button--medium .button__label{padding-left:var(--six-spacing-small)}.button--has-prefix.button--large{padding-left:var(--six-spacing-small)}.button--has-prefix.button--large .button__label{padding-left:var(--six-spacing-small)}.button--has-suffix.button--small,.button--caret.button--small{padding-right:var(--six-spacing-x-small)}.button--has-suffix.button--small .button__label,.button--caret.button--small .button__label{padding-right:var(--six-spacing-x-small)}.button--has-suffix.button--medium,.button--caret.button--medium{padding-right:var(--six-spacing-small)}.button--has-suffix.button--medium .button__label,.button--caret.button--medium .button__label{padding-right:var(--six-spacing-small)}.button--has-suffix.button--large,.button--caret.button--large{padding-right:var(--six-spacing-small)}.button--has-suffix.button--large .button__label,.button--caret.button--large .button__label{padding-right:var(--six-spacing-small)}"}}]);