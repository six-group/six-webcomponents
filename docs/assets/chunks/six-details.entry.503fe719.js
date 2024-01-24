import{r as n,c as t,h as s,g as r}from"../app.83a20743.js";import{f as o}from"./focus-visible-d9dbfeef.40105f05.js";import"./framework.5e4f3225.js";import"./theme.f32e92b8.js";const d=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--hide-duration:var(--six-transition-medium);--hide-timing-function:ease;--show-duration:var(--six-transition-medium);--show-timing-function:ease;--horizontal-padding:var(--six-spacing-medium);font-family:var(--six-font-family);display:block}.details{border:solid var(--six-border-width) var(--six-input-border-color);border-radius:var(--six-border-radius-medium);color:var(--six-details-color);overflow-anchor:none;font-size:var(--six-input-font-size-medium)}.details:hover:not(.details--disabled):not(.details--open){border-color:var(--six-input-border-color-hover)}.details.inline{border:none;color:var(--six-sidebar-color)}.details.inline:hover{background-color:var(--six-sidebar-hover-background-color)}.details.inline.details--open{background-color:var(--six-color-web-rock-50)}.details.inline.details--open:hover{border:none;box-shadow:none}.details.inline.details--open>.details__header{color:var(--six-sidebar-color);font-weight:var(--six-font-weight-bold);background-color:var(--six-sidebar-header-background-color)}.details--disabled{background-color:var(--six-input-background-color-disabled);border-color:var(--six-input-border-color-disabled);color:var(--six-input-color-disabled)}.details__header{display:flex;align-items:center;border-radius:inherit;padding:var(--six-spacing-medium) var(--horizontal-padding);user-select:none;cursor:pointer}.details__header:focus{outline:none}.details--disabled .details__header{cursor:not-allowed;border-width:1px}.details--disabled .details__header:focus{outline:none;box-shadow:none}.details__summary{flex:1 1 auto;display:flex;align-items:center}.details__summary-icon{flex:0 0 auto;display:flex;align-items:center;font-size:1.2em;transition:var(--six-transition-medium) transform ease}.details--open .details__summary-icon--animate{transform:rotate(-180deg)}.details--open:hover{color:var(--six-input-color-focus)}.details__body{height:0;overflow:hidden;transition-property:height;transition-duration:var(--hide-duration);transition-timing-function:var(--hide-timing-function)}.details--open .details__body{transition-duration:var(--show-duration);transition-timing-function:var(--show-timing-function)}.details__content{padding:var(--six-spacing-medium)}";let l=0;const h=class{constructor(e){n(this,e),this.sixShow=t(this,"six-details-show",7),this.sixAfterShow=t(this,"six-details-after-show",7),this.sixHide=t(this,"six-details-hide",7),this.sixAfterHide=t(this,"six-details-after-hide",7),this.componentId=`details-${++l}`,this.isVisible=!1,this.handleBodyTransitionEnd=i=>{if(this.body==null)return;const a=i.target;i.propertyName==="height"&&a.classList.contains("details__body")&&(this.body.style.overflow=this.open?"visible":"hidden",this.body.style.height=this.open?"auto":"0",this.open?this.sixAfterShow.emit():this.sixAfterHide.emit(),this.body.hidden=!this.open)},this.handleSummaryClick=()=>{var i;!this.disabled&&(this.hasContent||this.selectableEmpty)&&(this.open?this.hide():this.show(),(i=this.header)===null||i===void 0||i.focus())},this.handleSummaryKeyDown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.open?this.hide():this.show()),(i.key==="ArrowUp"||i.key==="ArrowLeft")&&(i.preventDefault(),this.hide()),(i.key==="ArrowDown"||i.key==="ArrowRight")&&(i.preventDefault(),this.show())},this.animateSummaryIcon=!0,this.open=!1,this.summary="",this.summaryIcon=void 0,this.summaryIconSize="inherit",this.disabled=!1,this.inline=!1,this.selectableEmpty=!1,this.hasContent=!0}handleOpenChange(){this.body!=null&&(this.open?this.show():this.hide())}componentDidLoad(){this.details==null||this.body==null||(o.observe(this.details),this.body.hidden=!this.open,this.open&&this.show())}disconnectedCallback(){this.details!=null&&o.unobserve(this.details)}async show(){if(this.isVisible||this.body==null)return;if(this.sixShow.emit().defaultPrevented){this.open=!1;return}this.body.hidden=!1,this.body.scrollHeight===0?(this.body.style.height="auto",this.body.style.overflow="visible"):(this.body.style.height=`${this.body.scrollHeight}px`,this.body.style.overflow="hidden"),this.isVisible=!0,this.open=!0}async hide(){if(!this.isVisible||this.body==null)return;const e=this.body;if(this.sixHide.emit().defaultPrevented){this.open=!0;return}e.style.height=`${e.scrollHeight}px`,e.style.overflow="hidden",requestAnimationFrame(()=>{e.style.height="0"}),this.isVisible=!1,this.open=!1}render(){const e=this.hasContent&&(this.summaryIcon||"expand_more");return s("div",{ref:i=>this.details=i,part:"base",class:{details:!0,"details--open":this.open,"details--disabled":this.disabled,inline:this.inline}},s("header",{ref:i=>this.header=i,part:"header",id:`${this.componentId}-header`,class:"details__header",role:"button","aria-expanded":this.open?"true":"false","aria-controls":`${this.componentId}-content`,"aria-disabled":this.disabled?"true":"false",tabIndex:this.disabled?-1:0,onClick:this.handleSummaryClick,onKeyDown:this.handleSummaryKeyDown},s("div",{part:"summary",class:"details__summary"},s("slot",{name:"summary"},this.summary)),s("span",{part:"summary-icon",class:{"details__summary-icon":!0,"details__summary-icon--animate":this.animateSummaryIcon}},s("slot",{name:"summary-icon",onSlotchange:()=>this.animateSummaryIcon=!1},e&&s("six-icon",{size:this.summaryIconSize},e)))),s("div",{ref:i=>this.body=i,class:"details__body",onTransitionEnd:this.handleBodyTransitionEnd},s("div",{part:"content",id:`${this.componentId}-content`,class:"details__content",role:"region","aria-labelledby":`${this.componentId}-header`},s("slot",null))))}get host(){return r(this)}static get watchers(){return{open:["handleOpenChange"]}}};h.style=d;export{h as six_details};
