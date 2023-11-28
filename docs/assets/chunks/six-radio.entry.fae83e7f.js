import{r as d,c as a,h as t,g as c}from"../app.ba663a44.js";import{E as h}from"./event-listeners-706d4309.8644075f.js";import"./framework.7a2bf33b.js";import"./theme.6e4f5b55.js";const u=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.radio{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.radio__icon{display:inline-flex;width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size)}.radio__icon svg{width:100%;height:100%}.radio__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size);border:solid var(--six-border-width) var(--six-input-border-color);border-radius:50%;background-color:var(--six-input-background-color);color:transparent;transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--six-input-border-color-hover)}.radio--checked .radio__control{color:var(--six-selection-control-color);border-color:var(--six-selection-control-color)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{color:var(--six-input-border-color-focus);border-color:var(--six-input-border-color-focus)}.radio--disabled{cursor:not-allowed;color:var(--six-input-color-disabled)}.radio--disabled .radio__control{border-color:var(--six-input-border-color-disabled)}.radio--disabled.radio--checked .radio__control{color:var(--six-selection-control-color-disabled)}.radio__label{line-height:var(--six-selection-control-toggle-size);margin-left:0.5em;user-select:none}";let n=0;const v=class{constructor(i){d(this,i),this.sixBlur=a(this,"six-radio-blur",7),this.sixChange=a(this,"six-radio-change",7),this.sixFocus=a(this,"six-radio-focus",7),this.inputId=`radio-${++n}`,this.labelId=`radio-label-${n}`,this.eventListeners=new h,this.handleClick=()=>{this.nativeInput!=null&&(this.checked=this.nativeInput.checked,this.sixChange.emit())},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleKeyDown=e=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){const o=this.getAllRadios().filter(r=>!r.disabled),l=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=o.indexOf(this.host)+l;s<0&&(s=o.length-1),s>o.length-1&&(s=0),this.getAllRadios().forEach(r=>r.checked=!1),o[s].setFocus(),o[s].checked=!0,o[s].dispatchEvent(new CustomEvent("six-radio-change",{bubbles:!0,cancelable:!0})),e.preventDefault()}},this.handleMouseDown=e=>{var o;e.preventDefault(),(o=this.nativeInput)===null||o===void 0||o.focus()},this.hasFocus=!1,this.name="",this.value="on",this.disabled=!1,this.checked=!1,this.invalid=!1}handleCheckedChange(){this.checked&&this.getSiblingRadios().forEach(i=>i.checked=!1),this.nativeInput!=null&&(this.nativeInput.checked=this.checked)}handleNameChange(i){this.nativeInput!=null&&(this.nativeInput.name=i)}connectedCallback(){this.eventListeners.forward("six-radio-change","change",this.host),this.eventListeners.forward("six-radio-blur","blur",this.host),this.eventListeners.forward("six-radio-focus","focus",this.host)}disconnectedCallback(){this.eventListeners.removeAll()}async setFocus(i){var e;(e=this.nativeInput)===null||e===void 0||e.focus(i)}async removeFocus(){var i;(i=this.nativeInput)===null||i===void 0||i.blur()}getAllRadios(){const i=this.host.closest("form")||document.body;return this.name===""?[]:[...i.querySelectorAll("six-radio")].filter(e=>e.name===this.name)}getSiblingRadios(){return this.getAllRadios().filter(i=>i!==this.host)}render(){return t("label",{part:"base",class:{radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus},htmlFor:this.inputId,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown},t("span",{part:"control",class:"radio__control"},t("span",{part:"checked-icon",class:"radio__icon"},t("svg",{viewBox:"0 0 16 16"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{fill:"currentColor"},t("circle",{cx:"8",cy:"8",r:"5"}))))),t("input",{ref:i=>this.nativeInput=i,id:this.inputId,type:"radio",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,role:"radio","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:this.handleClick,onBlur:this.handleBlur,onFocus:this.handleFocus})),t("span",{part:"label",id:this.labelId,class:"radio__label"},t("slot",null)))}get host(){return c(this)}static get watchers(){return{checked:["handleCheckedChange"],name:["handleNameChange"]}}};v.style=u;export{v as six_radio};