"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[2228],{2228:(m,a,s)=>{s.r(a),s.d(a,{six_checkbox:()=>c,six_menu_item:()=>h});var r=s(5861),e=s(5856),d=s(4786),l=s(5730),u=s(7418);let n=0;const c=class{constructor(t){(0,e.r)(this,t),this.sixBlur=(0,e.c)(this,"six-checkbox-blur",7),this.sixChange=(0,e.c)(this,"six-checkbox-change",7),this.sixFocus=(0,e.c)(this,"six-checkbox-focus",7),this.inputId="checkbox-"+ ++n,this.labelId=`checkbox-label-${n}`,this.textId=`checkbox-text-${n}`,this.errorTextId=`input-error-text-${n}`,this.eventListeners=new u.E,this.handleChange=()=>{null!=this.nativeInput&&(this.checked=this.nativeInput.checked,this.indeterminate=!1,this.sixChange.emit())},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleMouseDown=o=>{var i;o.preventDefault(),null===(i=this.nativeInput)||void 0===i||i.focus()},this.hasFocus=!1,this.hasLabelSlot=!1,this.hasErrorSlot=!1,this.name="",this.value="on",this.disabled=!1,this.required=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.checked=!1,this.indeterminate=!1}handleCheckedChange(){null!=this.nativeInput&&(this.nativeInput.checked=this.checked,this.checked=this.nativeInput.checked,this.nativeInput.indeterminate=this.indeterminate)}handleLabelChange(){this.handleSlotChange()}connectedCallback(){var t;null===(t=this.host.shadowRoot)||void 0===t||t.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-checkbox-change","change",this.host),this.eventListeners.forward("six-checkbox-blur","blur",this.host),this.eventListeners.forward("six-checkbox-focus","focus",this.host)}disconnectedCallback(){var t;null===(t=this.host.shadowRoot)||void 0===t||t.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}componentWillLoad(){this.handleSlotChange()}componentDidLoad(){const t=this.nativeInput;null!=t&&(t.indeterminate=this.indeterminate)}setFocus(t){var o=this;return(0,r.Z)(function*(){var i;null===(i=o.nativeInput)||void 0===i||i.focus(t)})()}removeFocus(){var t=this;return(0,r.Z)(function*(){var o;null===(o=t.nativeInput)||void 0===o||o.blur()})()}handleSlotChange(){this.hasLabelSlot=(0,l.h)(this.host,"label"),this.hasErrorSlot=(0,l.h)(this.host,"error-text")}render(){return(0,e.h)(d.F,{key:"54491495a98aa97389193b9c05dc254f2ca4cc06",inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,errorTextId:this.errorTextId,hasErrorTextSlot:this.hasErrorSlot,errorText:this.errorText,errorTextCount:this.errorTextCount,size:"medium",disabled:this.disabled,required:this.required,displayError:this.invalid},(0,e.h)("label",{key:"dae2b0c1391767645bb66f4828a4f8d8a38deaf3",part:"base",class:{checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--invalid":this.invalid,"checkbox--indeterminate":this.indeterminate},htmlFor:this.inputId,onMouseDown:this.handleMouseDown},(0,e.h)("span",{key:"ed1796c0cc17867f04d104689d987d65b5bb0392",part:"control",class:"checkbox__control"},this.checked&&(0,e.h)("span",{part:"checked-icon",class:"checkbox__icon"},(0,e.h)("svg",{viewBox:"0 0 16 16"},(0,e.h)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},(0,e.h)("g",{stroke:"currentColor","stroke-width":"2"},(0,e.h)("g",{transform:"translate(3.428571, 3.428571)"},(0,e.h)("path",{d:"M0,5.71428571 L3.42857143,9.14285714"}),(0,e.h)("path",{d:"M9.14285714,0 L3.42857143,9.14285714"})))))),!this.checked&&this.indeterminate&&(0,e.h)("span",{part:"indeterminate-icon",class:"checkbox__icon"},(0,e.h)("svg",{viewBox:"0 0 16 16"},(0,e.h)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},(0,e.h)("g",{stroke:"currentColor","stroke-width":"2"},(0,e.h)("g",{transform:"translate(2.285714, 6.857143)"},(0,e.h)("path",{d:"M10.2857143,1.14285714 L1.14285714,1.14285714"})))))),(0,e.h)("input",{key:"36becd2a1efa0d8aca0b5c2b35864b0e3b6c6ea9",ref:t=>this.nativeInput=t,id:this.inputId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"checkbox","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus})),(0,e.h)("span",{key:"845042ded0f6b244b57c9a1db3d276bfa13a5884",part:"text",id:this.textId,class:"checkbox__text"},(0,e.h)("slot",{key:"8b7107860fe3f1d1fd8ce7ace01750b9a426cada"}))))}get host(){return(0,e.g)(this)}static get watchers(){return{checked:["handleCheckedChange"],indeterminate:["handleCheckedChange"],errorText:["handleLabelChange"],label:["handleLabelChange"]}}};c.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*";transform:scale(1.1);margin-left:var(--six-spacing-xxx-small);position:absolute}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{display:inline-block}.checkbox{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.checkbox--focused .checkbox__control{outline:var(--six-focus-ring);outline-offset:0}.checkbox__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size);border:solid var(--six-border-width) var(--six-input-border-color);border-radius:0;background-color:var(--six-input-background-color);color:var(--six-checkbox-color);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--six-input-border-color-hover)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--six-selection-control-color);background-color:var(--six-selection-control-color)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--six-input-border-color-focus);background-color:var(--six-input-border-color-focus)}.checkbox--disabled{cursor:not-allowed;color:var(--six-input-color-disabled)}.checkbox--disabled .checkbox__control{border-color:var(--six-input-border-color-disabled)}.checkbox--disabled.checkbox--checked .checkbox__control,.checkbox--disabled.checkbox--indeterminate .checkbox__control{background-color:var(--six-selection-control-color-disabled)}.checkbox--invalid:not(.checkbox--disabled) .checkbox__control{border-color:var(--six-input-border-color-danger)}.checkbox__text{line-height:var(--six-selection-control-toggle-size);margin-left:0.5em;user-select:none}';const h=class{constructor(t){(0,e.r)(this,t),this.handleCheckboxChange=()=>{this.host.dispatchEvent(new Event("click",{bubbles:!0,cancelable:!0}))},this.hasFocus=!1,this.active=!1,this.checkType="check",this.checked=!1,this.value="",this.disabled=!1}connectedCallback(){this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleCheckboxChange=this.handleCheckboxChange.bind(this)}setFocus(t){var o=this;return(0,r.Z)(function*(){var i;null===(i=o.menuItem)||void 0===i||i.focus(t)})()}removeFocus(){var t=this;return(0,r.Z)(function*(){var o;null===(o=t.menuItem)||void 0===o||o.blur()})()}getTextLabel(){return Promise.resolve((0,l.a)(this.defaultSlot))}handleBlur(){this.hasFocus=!1}handleFocus(){this.hasFocus=!0}handleMouseEnter(){this.active=!0}handleMouseLeave(){this.active=!1,this.hasFocus=!1}render(){return(0,e.h)("div",{key:"d8c10ca0fc9bd795b87790337f2cc0c792999685",ref:t=>this.menuItem=t,part:"base",class:{"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--focused":this.hasFocus,"menu-item--active":this.active},role:"menuitem","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false",tabIndex:this.disabled?void 0:0,onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},"checkbox"===this.checkType&&(0,e.h)("span",{class:"menu-item__checkbox"},(0,e.h)("six-checkbox",{"onSix-checkbox-change":this.handleCheckboxChange,disabled:this.disabled,checked:this.checked})),(0,e.h)("span",{key:"470f2fee47a4120c0dead3b7996220af9e5274d1",part:"prefix",class:"menu-item__prefix"},(0,e.h)("slot",{key:"fdddb68cb266d02f6a6a2b46ffcdecb1d8eb32db",name:"prefix"})),(0,e.h)("span",{key:"6d9fe694ce0e07f2aac3604b905f9194f4764057",part:"label",class:"menu-item__label"},(0,e.h)("slot",{key:"ef2903a04191f78955802da5edefd32583305068",ref:t=>this.defaultSlot=t})),(0,e.h)("span",{key:"d4f6ee6c2789c33deaf08eb585ec7ca283b59170",part:"suffix",class:"menu-item__suffix"},(0,e.h)("slot",{key:"39a1d59be3d1f9deda4c55b1575a72c647600783",name:"suffix"})),"check"===this.checkType&&(0,e.h)("span",{part:"checked-icon",class:"menu-item__check"},(0,e.h)("six-icon",{size:"small","aria-hidden":"true"},"check")))}get host(){return(0,e.g)(this)}};h.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:block}:focus{outline:none}.menu-item{position:relative;display:flex;align-items:stretch;font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);line-height:var(--six-line-height-normal);letter-spacing:var(--six-letter-spacing-normal);text-align:left;color:var(--six-input-color);border-radius:var(--six-border-radius-medium);padding:var(--six-spacing-x-small) var(--six-spacing-medium);transition:var(--six-transition-fast) fill;user-select:none;white-space:nowrap;cursor:pointer}.menu-item.menu-item--focused:not(.menu-item--disabled){outline:none;background-color:var(--six-menu-item-background-color)}.menu-item.menu-item--active:not(.menu-item--disabled){outline:none;background-color:var(--six-menu-item-background-color)}.menu-item.menu-item--disabled{outline:none;color:var(--six-input-color-disabled);cursor:not-allowed}.menu-item .menu-item__label{flex:1 1 auto;align-self:center}.menu-item .menu-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__prefix ::slotted(:last-child){margin-right:0.5em}.menu-item .menu-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__suffix ::slotted(:first-child){margin-left:0.5em}.menu-item .menu-item__check{flex:0 0 auto;display:flex;align-items:center;margin-left:var(--six-spacing-small);visibility:hidden;font-size:inherit}.menu-item .menu-item__checkbox{margin-top:-1px}.menu-item--checked .menu-item__check{visibility:visible}"}}]);