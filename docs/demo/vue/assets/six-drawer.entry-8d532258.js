import{r as o,c as s,h as t,g as n}from"./index-c875b36f.js";import{u as r,l}from"./scroll-3e16851e-29c32130.js";import{h}from"./slot-56531341-2ae944bc.js";import{i as d,M as c}from"./modal-96526245-436b1ed9.js";const w=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--size:25rem;display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.drawer:not(.drawer--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--six-z-index-drawer)}.drawer__panel{position:absolute;display:flex;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--six-drawer-background-color);color:var(--six-drawer-color);box-shadow:var(--six-shadow-large);transition:var(--six-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--size);transform:translate(0, -100%)}.drawer--right .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:var(--size);height:100%;transform:translate(100%, 0)}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--size);transform:translate(0, 100%)}.drawer--left .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--size);height:100%;transform:translate(-100%, 0)}.drawer--open .drawer__panel{transform:none}.drawer__header{display:flex}.drawer__title{flex:1 1 auto;font-size:var(--six-font-size-large);line-height:var(--six-line-height-dense);padding:var(--six-spacing-large)}.drawer__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-x-large);padding:0 var(--six-spacing-large)}.drawer__body{flex:1 1 auto;padding:var(--six-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.drawer__footer{text-align:right;padding:var(--six-spacing-large)}.drawer__footer ::slotted(six-button:not(:last-of-type)){margin-right:var(--six-spacing-x-small)}.drawer:not(.drawer--has-footer) .drawer__footer{display:none}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--six-overlay-background-color);opacity:0;transition:var(--six-transition-medium) opacity;pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}.drawer--open .drawer__overlay{opacity:0.4}",p=d();let f=0;const u=class{constructor(e){o(this,e),this.sixShow=s(this,"six-drawer-show",7),this.sixAfterShow=s(this,"six-drawer-after-show",7),this.sixHide=s(this,"six-drawer-hide",7),this.sixAfterHide=s(this,"six-drawer-after-hide",7),this.sixInitialFocus=s(this,"six-drawer-initial-focus",7),this.sixOverlayDismiss=s(this,"six-drawer-overlay-dismiss",7),this.componentId=`drawer-${++f}`,this.willShow=!1,this.willHide=!1,this.handleCloseClick=()=>{this.hide()},this.handleKeyDown=i=>{i.key==="Escape"&&this.hide()},this.handleOverlayClick=()=>{this.sixOverlayDismiss.emit().defaultPrevented||this.hide()},this.handleSlotChange=()=>{this.hasFooter=h(this.host,"footer")},this.handleTransitionEnd=i=>{const a=i.target;i.propertyName==="transform"&&a.classList.contains("drawer__panel")&&this.resetTransitionVariables()},this.hasFooter=!1,this.isVisible=!1,this.open=!1,this.label="",this.placement="right",this.contained=!1,this.noHeader=!1}handleOpenChange(){this.open?this.show():this.hide()}connectedCallback(){this.modal=new c(this.host,{onFocusOut:()=>{var e;return this.contained?null:(e=this.panel)===null||e===void 0?void 0:e.focus()}})}componentWillLoad(){this.handleSlotChange(),this.open&&(this.show(),this.resetTransitionVariables())}disconnectedCallback(){r(this.host)}async show(){if(this.willShow||this.modal==null||this.panel==null||this.drawer==null)return;const e=this.panel;if(this.sixShow.emit().defaultPrevented){this.open=!1;return}this.willShow=!0,this.isVisible=!0,this.open=!0,this.contained||(this.modal.activate(),l(this.host)),this.open&&(p?requestAnimationFrame(()=>{this.sixInitialFocus.emit().defaultPrevented||e.focus({preventScroll:!0})}):this.drawer.addEventListener("transitionend",()=>{this.sixInitialFocus.emit().defaultPrevented||e.focus()},{once:!0}))}async hide(){if(this.willHide||this.modal==null)return;if(this.sixHide.emit().defaultPrevented){this.open=!0;return}this.willHide=!0,this.open=!1,this.modal.deactivate(),r(this.host)}resetTransitionVariables(){this.isVisible=this.open,this.willShow=!1,this.willHide=!1,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit()}render(){return t("div",{ref:e=>this.drawer=e,part:"base",class:{drawer:!0,"drawer--open":this.open,"drawer--visible":this.isVisible,"drawer--top":this.placement==="top","drawer--right":this.placement==="right","drawer--bottom":this.placement==="bottom","drawer--left":this.placement==="left","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--has-footer":this.hasFooter},onKeyDown:this.handleKeyDown,onTransitionEnd:this.handleTransitionEnd},t("div",{part:"overlay",class:"drawer__overlay",onClick:this.handleOverlayClick,tabIndex:-1}),t("div",{ref:e=>this.panel=e,part:"panel",class:"drawer__panel",role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-label":this.noHeader?this.label:null,"aria-labelledby":this.noHeader?null:`${this.componentId}-title`,tabIndex:0},!this.noHeader&&t("header",{part:"header",class:"drawer__header"},t("span",{part:"title",class:"drawer__title",id:`${this.componentId}-title`},t("slot",{name:"label"},this.label||String.fromCharCode(65279))),t("six-icon-button",{exportparts:"base:close-button",class:"drawer__close",name:"close",onClick:this.handleCloseClick})),t("div",{part:"body",class:"drawer__body"},t("slot",null)),t("footer",{part:"footer",class:"drawer__footer"},t("slot",{name:"footer",onSlotchange:this.handleSlotChange}))))}get host(){return n(this)}static get watchers(){return{open:["handleOpenChange"]}}};u.style=w;export{u as six_drawer};
