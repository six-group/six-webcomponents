"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[2261],{2261:(f,o,t)=>{t.r(o),t.d(o,{six_dialog:()=>r});var l=t(5861),e=t(9265),a=t(5058),h=t(1792),n=t(3934);const g=(0,n.i)();let x=0;const r=class{constructor(i){(0,e.r)(this,i),this.sixShow=(0,e.c)(this,"six-dialog-show",7),this.sixAfterShow=(0,e.c)(this,"six-dialog-after-show",7),this.sixHide=(0,e.c)(this,"six-dialog-hide",7),this.sixAfterHide=(0,e.c)(this,"six-dialog-after-hide",7),this.sixInitialFocus=(0,e.c)(this,"six-dialog-initial-focus",7),this.sixOverlayDismiss=(0,e.c)(this,"six-dialog-overlay-dismiss",7),this.componentId="dialog-"+ ++x,this.willShow=!1,this.willHide=!1,this.handleCloseClick=()=>{this.hide()},this.handleKeyDown=s=>{"Escape"===s.key&&this.hide()},this.handleOverlayClick=()=>{this.sixOverlayDismiss.emit().defaultPrevented||this.hide()},this.handleSlotChange=()=>{this.hasFooter=(0,h.h)(this.host,"footer")},this.handleTransitionEnd=s=>{"opacity"===s.propertyName&&s.target.classList.contains("dialog__panel")&&(this.isVisible=this.open,this.willShow=!1,this.willHide=!1,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit())},this.hasFooter=!1,this.isVisible=!1,this.open=!1,this.label="",this.noHeader=!1}handleOpenChange(){this.open?this.show():this.hide()}connectedCallback(){this.modal=new n.M(this.host,{onFocusOut:()=>{var i;return null===(i=this.panel)||void 0===i?void 0:i.focus()}})}componentWillLoad(){this.handleSlotChange(),this.open&&this.show()}disconnectedCallback(){(0,a.u)(this.host)}show(){var i=this;return(0,l.Z)(function*(){if(i.willShow||null==i.modal||null==i.panel||null==i.dialog)return;const s=i.panel;i.sixShow.emit().defaultPrevented?i.open=!1:(i.willShow=!0,i.isVisible=!0,i.open=!0,i.modal.activate(),(0,a.l)(i.host),i.open&&(g?requestAnimationFrame(()=>{i.sixInitialFocus.emit().defaultPrevented||s.focus({preventScroll:!0})}):i.dialog.addEventListener("transitionend",()=>{i.sixInitialFocus.emit().defaultPrevented||s.focus()},{once:!0})))})()}hide(){var i=this;return(0,l.Z)(function*(){i.willHide||null==i.modal||(i.sixHide.emit().defaultPrevented?i.open=!0:(i.willHide=!0,i.open=!1,i.modal.deactivate(),(0,a.u)(i.host)))})()}render(){return(0,e.h)("div",{ref:i=>this.dialog=i,part:"base",class:{dialog:!0,"dialog--open":this.open,"dialog--visible":this.isVisible,"dialog--has-footer":this.hasFooter},onKeyDown:this.handleKeyDown,onTransitionEnd:this.handleTransitionEnd},(0,e.h)("div",{part:"overlay",class:"dialog__overlay",onClick:this.handleOverlayClick}),(0,e.h)("div",{ref:i=>this.panel=i,part:"panel",class:"dialog__panel",role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-label":this.noHeader?this.label:null,"aria-labelledby":this.noHeader?null:`${this.componentId}-title`,tabIndex:0},!this.noHeader&&(0,e.h)("header",{part:"header",class:"dialog__header"},(0,e.h)("span",{part:"title",class:"dialog__title",id:`${this.componentId}-title`},(0,e.h)("slot",{name:"label"},this.label||String.fromCharCode(65279))),(0,e.h)("six-icon-button",{exportparts:"base:close-button",class:"dialog__close",name:"close",onClick:this.handleCloseClick})),(0,e.h)("div",{part:"body",class:"dialog__body"},(0,e.h)("slot",null)),(0,e.h)("footer",{part:"footer",class:"dialog__footer"},(0,e.h)("slot",{name:"footer",onSlotchange:this.handleSlotChange}))))}get host(){return(0,e.g)(this)}static get watchers(){return{open:["handleOpenChange"]}}};r.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--width:31rem;display:contents}.dialog{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--six-z-index-dialog);color:var(--six-color-web-rock-900)}.dialog:not(.dialog--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.dialog__panel{display:flex;flex-direction:column;z-index:2;width:var(--width);max-width:calc(100% - var(--six-spacing-xx-large));max-height:calc(100% - var(--six-spacing-xx-large));background-color:var(--six-panel-background-color);border-radius:var(--six-border-radius-medium);box-shadow:var(--six-shadow-x-large);opacity:0;transform:scale(0.8);transition:var(--six-transition-medium) opacity, var(--six-transition-medium) transform}.dialog__panel:focus{outline:none}@media screen and (max-width: 420px){.dialog__panel{max-height:80vh}}.dialog--open .dialog__panel{display:flex;opacity:1;transform:none}.dialog__header{flex:0 0 auto;display:flex}.dialog__title{flex:1 1 auto;font-size:var(--six-font-size-x-large);font-weight:var(--six-font-weight-bold);line-height:var(--six-line-height-dense);padding:var(--six-spacing-large) var(--six-spacing-large) var(--six-spacing-small)}.dialog__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-x-large);padding:0 var(--six-spacing-x-small)}.dialog__body{flex:1 1 auto;padding:var(--six-spacing-small) var(--six-spacing-large) var(--six-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.dialog__footer{flex:0 0 auto;text-align:right;padding:var(--six-spacing-large)}.dialog__footer ::slotted(six-button:not(:first-of-type)){margin-left:var(--six-spacing-xx-small)}.dialog:not(.dialog--has-footer) .dialog__footer{display:none}.dialog__overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--six-overlay-background-color);opacity:0;transition:var(--six-transition-medium) opacity}.dialog--open .dialog__overlay{opacity:0.8}"}}]);