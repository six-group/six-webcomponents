import{r,c as e,h as i,H as a,g as n}from"./theme.P7qy9ptf.js";import{P as p}from"./popover-25996e62.BxBxSfOk.js";import"./framework.DFnNdRoT.js";const l=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--max-width:20rem;--hide-delay:0s;--hide-duration:0.125s;--hide-timing-function:ease;--show-delay:0.125s;--show-duration:0.125s;--show-timing-function:ease;display:contents}.tooltip-positioner{position:fixed;z-index:var(--six-z-index-tooltip);pointer-events:none}.tooltip{max-width:var(--max-width);border-radius:var(--six-border-radius-medium);background-color:var(--six-tooltip-background-color);font-family:var(--six-font-family);font-size:var(--six-tooltip-font-size);font-weight:var(--six-tooltip-font-weight);line-height:var(--six-tooltip-line-height);color:var(--six-tooltip-color);opacity:0;padding:var(--six-spacing-xxx-small) var(--six-spacing-x-small);transform:scale(0.8);transform-origin:bottom;transition-property:opacity, transform;transition-delay:var(--hide-delay);transition-duration:var(--hide-duration);transition-timing-function:var(--hide-timing-function)}.tooltip::after{content:"";position:absolute;width:0;height:0}.tooltip-positioner[data-popper-placement^=top] .tooltip{transform-origin:bottom}.tooltip-positioner[data-popper-placement^=bottom] .tooltip{transform-origin:top}.tooltip-positioner[data-popper-placement^=left] .tooltip{transform-origin:right}.tooltip-positioner[data-popper-placement^=right] .tooltip{transform-origin:left}.tooltip-positioner.popover-visible .tooltip{opacity:1;transform:none;transition-delay:var(--show-delay);transition-duration:var(--show-duration);transition-timing-function:var(--show-timing-function)}.tooltip-positioner[data-popper-placement^=bottom] .tooltip::after{bottom:100%;left:calc(50% - var(--six-tooltip-arrow-size));border-bottom:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=bottom-start] .tooltip::after{left:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=bottom-end] .tooltip::after{right:var(--six-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=top] .tooltip::after{top:100%;left:calc(50% - var(--six-tooltip-arrow-size));border-top:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=top-start] .tooltip::after{left:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=top-end] .tooltip::after{right:var(--six-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=left] .tooltip::after{top:calc(50% - var(--six-tooltip-arrow-size));left:100%;border-left:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-top:var(--six-tooltip-arrow-size) solid transparent;border-bottom:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=left-start] .tooltip::after{top:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=left-end] .tooltip::after{top:auto;bottom:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement^=right] .tooltip::after{top:calc(50% - var(--six-tooltip-arrow-size));right:100%;border-right:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-top:var(--six-tooltip-arrow-size) solid transparent;border-bottom:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=right-start] .tooltip::after{top:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=right-end] .tooltip::after{top:auto;bottom:var(--six-tooltip-arrow-start-end-offset)}',h=l;let d=0;const c=class{constructor(t){r(this,t),this.sixShow=e(this,"six-tooltip-show",7),this.sixAfterShow=e(this,"six-tooltip-after-show",7),this.sixHide=e(this,"six-tooltip-hide",7),this.sixAfterHide=e(this,"six-tooltip-after-hide",7),this.componentId=`tooltip-${++d}`,this.isVisible=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=o=>{this.open&&o.key==="Escape"&&(o.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&this.show()},this.handleMouseOut=()=>{this.hasTrigger("hover")&&this.hide()},this.handleSlotChange=()=>{const o=this.target,s=this.getTarget();s!==o&&(o!=null&&o.removeAttribute("aria-describedby"),s.setAttribute("aria-describedby",this.componentId))},this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.open=!1,this.skidding=0,this.trigger="hover focus"}handleOpenChange(){this.open?this.show():this.hide()}componentDidLoad(){this.tooltipPositioner!=null&&(this.target=this.getTarget(),this.popover=new p(this.target,this.tooltipPositioner,{strategy:"fixed"}),this.syncOptions(),this.host.addEventListener("blur",this.handleBlur,!0),this.host.addEventListener("click",this.handleClick,!0),this.host.addEventListener("focus",this.handleFocus,!0),this.tooltipPositioner.hidden=!this.open,this.open&&this.show())}componentDidUpdate(){this.syncOptions()}disconnectedCallback(){this.popover!=null&&this.popover.destroy(),this.host.removeEventListener("blur",this.handleBlur,!0),this.host.removeEventListener("click",this.handleClick,!0),this.host.removeEventListener("focus",this.handleFocus,!0)}async show(){var t;if(this.isVisible||this.disabled)return;if(this.sixShow.emit().defaultPrevented){this.open=!1;return}this.isVisible=!0,this.open=!0,(t=this.popover)===null||t===void 0||t.show()}async hide(){var t;if(!this.isVisible||this.disabled)return;if(this.sixHide.emit().defaultPrevented){this.open=!0;return}this.isVisible=!1,this.open=!1,(t=this.popover)===null||t===void 0||t.hide()}getTarget(){const t=[...this.host.children].find(o=>o.tagName.toLowerCase()!=="style"&&o.getAttribute("slot")!=="content");if(t==null)throw new Error("Invalid tooltip target: no child element was found.");return t}hasTrigger(t){return this.trigger.split(" ").includes(t)}syncOptions(){this.popover!=null&&this.popover.setOptions({placement:this.placement,distance:this.distance,skidding:this.skidding,transitionElement:this.tooltip,onAfterHide:()=>this.sixAfterHide.emit(),onAfterShow:()=>this.sixAfterShow.emit()})}render(){return i(a,{key:"cc7af29aecbec81fe99af1045c7060f452b35d6a",onKeyDown:this.handleKeyDown,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},i("slot",{key:"f09c1c24cdbee4eec20003235d7733001fe7eec0",onSlotchange:this.handleSlotChange}),i("div",{key:"c890ae453a9214a4088d0ba67e040f2f066a03e4",ref:t=>this.tooltipPositioner=t,class:"tooltip-positioner"},i("div",{key:"c50a741a9d98262cbdbd43d44b47072a985faddb",part:"base",ref:t=>this.tooltip=t,id:this.componentId,class:{tooltip:!0,"tooltip--open":this.open},role:"tooltip","aria-hidden":this.open?"false":"true"},i("slot",{key:"63380a424b7e9e7325989a9611bb7a24e3d00beb",name:"content"},this.content))))}get host(){return n(this)}static get watchers(){return{open:["handleOpenChange"]}}};c.style=h;export{c as six_tooltip};
