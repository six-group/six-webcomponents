"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[9889],{9889:(m,l,r)=>{r.r(l),r.d(l,{six_switch:()=>a});var n=r(4795),t=r(8708),c=r(9643),h=r(7082);let s=0;const a=class{constructor(e){(0,t.r)(this,e),this.sixBlur=(0,t.c)(this,"six-switch-blur",7),this.sixChange=(0,t.c)(this,"six-switch-change",7),this.sixFocus=(0,t.c)(this,"six-switch-focus",7),this.switchId="switch-"+ ++s,this.labelId=`switch-label-${s}`,this.errorTextId=`input-error-text-${s}`,this.eventListeners=new c.E,this.handleClick=()=>{null!=this.inputElement&&(this.checked=this.inputElement.checked,this.sixChange.emit(this.checked))},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit(this.checked)},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleKeyDown=o=>{"ArrowLeft"===o.key&&(o.preventDefault(),this.checked=!1,this.sixChange.emit(this.checked)),"ArrowRight"===o.key&&(o.preventDefault(),this.checked=!0,this.sixChange.emit(this.checked))},this.handleMouseDown=o=>{var i;o.preventDefault(),null===(i=this.inputElement)||void 0===i||i.focus()},this.hasFocus=!1,this.name="",this.value="on",this.disabled=!1,this.required=!1,this.checked=!1,this.label="",this.errorText="",this.invalid=!1}handleCheckedChange(){null!=this.inputElement&&(this.inputElement.checked=this.checked,this.checked=this.inputElement.checked)}connectedCallback(){this.eventListeners.forward("six-switch-change","change",this.host),this.eventListeners.forward("six-switch-blur","blur",this.host),this.eventListeners.forward("six-switch-focus","focus",this.host)}disconnectedCallback(){this.eventListeners.removeAll()}setFocus(e){var o=this;return(0,n.Z)(function*(){var i;null===(i=o.inputElement)||void 0===i||i.focus(e)})()}removeFocus(){var e=this;return(0,n.Z)(function*(){var o;null===(o=e.inputElement)||void 0===o||o.blur()})()}render(){return(0,t.h)(h.F,{inputId:this.switchId,label:this.label,labelId:this.labelId,hasLabelSlot:!1,errorTextId:this.errorTextId,errorText:this.errorText,size:"medium",disabled:this.disabled,required:this.required,displayError:this.invalid},(0,t.h)("label",{part:"base",htmlFor:this.switchId,class:{switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus},onMouseDown:this.handleMouseDown},(0,t.h)("span",{part:"control",class:"switch__control"},(0,t.h)("span",{part:"thumb",class:"switch__thumb"}),(0,t.h)("input",{ref:e=>this.inputElement=e,id:this.switchId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"switch","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:this.handleClick,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown})),(0,t.h)("span",{part:"label",id:this.labelId,class:"switch__label"},(0,t.h)("slot",null))))}get host(){return(0,t.g)(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};a.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*"}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;color:var(--six-color-danger-800);margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{--height:var(--six-selection-control-toggle-size);--thumb-size:calc(var(--six-selection-control-toggle-size) - 4px);--width:calc(var(--height) * 2);display:inline-block}.switch{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.switch__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--width);height:var(--height);background-color:var(--six-selection-control-color-disabled);border-radius:var(--height);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color}.switch__control .switch__thumb{width:var(--thumb-size);height:var(--thumb-size);background-color:var(--six-input-background-color);border-radius:50%;transform:translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));transition:var(--six-transition-fast) transform ease, var(--six-transition-fast) background-color, var(--six-transition-fast) border-color, var(--six-transition-fast) box-shadow}.switch__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover{background-color:var(--six-input-border-color-hover)}.switch--checked .switch__control{background-color:var(--six-selection-control-color)}.switch--checked .switch__control .switch__thumb{background-color:var(--six-color-white);transform:translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2))}.switch.switch--checked:not(.switch--disabled) .switch__control:hover{background-color:var(--six-input-border-color-focus)}.switch--disabled{cursor:not-allowed;color:var(--six-selection-control-color-disabled)}.switch--disabled .switch__control{background-color:var(--six-selection-control-color-disabled)}.switch--disabled.switch--checked .switch__control{background-color:var(--six-selection-control-color-disabled)}.switch__label{line-height:var(--height);margin-left:0.5em;user-select:none}'}}]);