"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[398],{398:(m,u,o)=>{o.r(u),o.d(u,{six_alert:()=>p});var h=o(5861),t=o(5856),f=o(5730);const i=Object.assign(document.createElement("div"),{className:"six-toast-stack"}),p=class{constructor(e){(0,t.r)(this,e),this.sixShow=(0,t.c)(this,"six-alert-show",7),this.sixAfterShow=(0,t.c)(this,"six-alert-after-show",7),this.sixHide=(0,t.c)(this,"six-alert-hide",7),this.sixAfterHide=(0,t.c)(this,"six-alert-after-hide",7),this.handleCloseClick=()=>{this.hide()},this.handleMouseEnter=()=>{this.pauseAutoHide()},this.handleMouseLeave=()=>{this.resetAutoHide()},this.handleTransitionEnd=s=>{"opacity"===s.propertyName&&s.target.classList.contains("alert")&&(this.isVisible=this.open,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit())},this.isVisible=!1,this.open=!1,this.closable=!1,this.type="primary",this.duration=1/0}handleOpenChange(){this.open?this.show():this.hide()}handleDurationChange(){this.restartAutoHide()}componentWillLoad(){this.open&&this.show()}show(){var e=this;return(0,h.Z)(function*(){e.isVisible||(e.sixShow.emit().defaultPrevented?e.open=!1:(e.isVisible=!0,e.open=!0,e.duration<1/0&&(e.autoHideTimeout=window.setTimeout(()=>e.hide(),e.duration))))})()}hide(){var e=this;return(0,h.Z)(function*(){e.isVisible&&(e.sixHide.emit().defaultPrevented?e.open=!0:(clearTimeout(e.autoHideTimeout),e.isVisible=!1,e.open=!1))})()}toast(e=!0){var s=this;return(0,h.Z)(function*(){return new Promise(d=>{var c;if(i.parentElement||document.body.append(i),i.append(s.host),e){const a=document.querySelector("six-root"),r=(0,f.g)(a,"header"),n=null===(c=a?.shadowRoot)||void 0===c?void 0:c.querySelector("host main");if(null!=n&&n instanceof HTMLElement&&(i.style.right=n.offsetWidth-n.clientWidth+"px"),null!=r){const l=r?.getBoundingClientRect();i.style.top=`${l.top+l.height}px`}}else i.style.top="0",i.style.right="0";requestAnimationFrame(()=>s.show()),s.host.addEventListener("six-alert-after-hide",()=>{s.host.remove(),d(),null===i.querySelector("six-alert")&&i.remove()},{once:!0})})})()}pauseAutoHide(){clearTimeout(this.autoHideTimeout)}resetAutoHide(){this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}restartAutoHide(){this.pauseAutoHide(),this.resetAutoHide()}render(){const e=null!=this.host.closest(".six-toast-stack");return(0,t.h)("div",{key:"cd9d14bef5923cf2ec8add1f61e92733aa9dd59f",part:"base",class:{alert:!0,"alert--open":this.open,"alert--visible":this.isVisible,"alert--closable":this.closable,"alert--primary":"primary"===this.type,"alert--success":"success"===this.type,"alert--info":"info"===this.type,"alert--warning":"warning"===this.type,"alert--danger":"danger"===this.type,"alert--shadow":e},role:"alert","aria-live":"assertive","aria-atomic":"true","aria-hidden":this.open?"false":"true",onTransitionEnd:this.handleTransitionEnd,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},(0,t.h)("span",{key:"fb6e8cf52eb87ddb1a81a797482457b3afccaa98",part:"icon",class:"alert__icon"},(0,t.h)("slot",{key:"3d97a399ac05620214ef8a4d6a19c37a103f76a2",name:"icon"})),(0,t.h)("span",{key:"3984ce04838d33a688b6cfafb7827646e0e9d582",part:"message",class:"alert__message"},(0,t.h)("slot",{key:"f84ff31b7b74571b2ff9f074b617cb344313939e"})),this.closable&&(0,t.h)("span",{class:"alert__close"},(0,t.h)("six-icon-button",{name:"clear",exportparts:"base:close-button",onClick:this.handleCloseClick})))}get host(){return(0,t.g)(this)}static get watchers(){return{open:["handleOpenChange"],duration:["handleDurationChange"]}}};p.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:contents;margin:0}.alert{position:relative;display:flex;align-items:stretch;background-color:var(--six-color-white);border:solid 1px var(--six-color-web-rock-200);border-top-width:3px;border-radius:var(--six-border-radius-medium);box-shadow:var(--box-shadow);font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);line-height:1.6;color:var(--six-color-web-rock-700);opacity:0;transform:scale(0.9);transition:var(--six-transition-medium) opacity ease, var(--six-transition-medium) transform ease;margin:inherit}.alert:not(.alert--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.alert--shadow{box-shadow:var(--six-shadow-medium)}.alert--open{opacity:1;transform:none}.alert__icon{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-large)}.alert__icon ::slotted(*){margin-left:var(--six-spacing-large)}.alert--primary{border-top-color:var(--six-color-web-rock-900)}.alert--primary .alert__icon{color:var(--six-color-web-rock-900)}.alert--success{border-top-color:var(--six-color-success-600)}.alert--success .alert__icon{color:var(--six-color-success-600)}.alert--info{border-top-color:var(--six-color-action-500)}.alert--info .alert__icon{color:var(--six-color-action-500)}.alert--warning{border-top-color:var(--six-color-warning-800)}.alert--warning .alert__icon{color:var(--six-color-warning-800)}.alert--danger{border-top-color:var(--six-color-danger-900)}.alert--danger .alert__icon{color:var(--six-color-danger-900)}.alert__message{flex:1 1 auto;padding:var(--six-spacing-large);overflow:hidden}.alert__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-large);padding-right:var(--six-spacing-medium)}"}}]);