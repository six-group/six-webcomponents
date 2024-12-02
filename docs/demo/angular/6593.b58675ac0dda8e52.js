"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[6593],{6593:(b,s,t)=>{t.r(s),t.d(s,{six_checkbox:()=>c});var n=t(467),e=t(3464),h=t(1556),a=t(3502),d=t(3777);let l=0;const c=class{constructor(o){(0,e.r)(this,o),this.sixBlur=(0,e.c)(this,"six-checkbox-blur",7),this.sixChange=(0,e.c)(this,"six-checkbox-change",7),this.sixFocus=(0,e.c)(this,"six-checkbox-focus",7),this.inputId="checkbox-"+ ++l,this.labelId=`checkbox-label-${l}`,this.textId=`checkbox-text-${l}`,this.errorTextId=`input-error-text-${l}`,this.eventListeners=new d.E,this.handleChange=()=>{null!=this.nativeInput&&(this.checked=this.nativeInput.checked,this.indeterminate=!1,this.sixChange.emit())},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleMouseDown=r=>{var i;r.preventDefault(),null===(i=this.nativeInput)||void 0===i||i.focus()},this.hasFocus=!1,this.hasLabelSlot=!1,this.hasErrorSlot=!1,this.name="",this.value="on",this.disabled=!1,this.required=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.checked=!1,this.indeterminate=!1}handleCheckedChange(){null!=this.nativeInput&&(this.nativeInput.checked=this.checked,this.checked=this.nativeInput.checked,this.nativeInput.indeterminate=this.indeterminate)}handleLabelChange(){this.handleSlotChange()}connectedCallback(){var o;null===(o=this.host.shadowRoot)||void 0===o||o.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-checkbox-change","change",this.host),this.eventListeners.forward("six-checkbox-blur","blur",this.host),this.eventListeners.forward("six-checkbox-focus","focus",this.host)}disconnectedCallback(){var o;null===(o=this.host.shadowRoot)||void 0===o||o.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}componentWillLoad(){this.handleSlotChange()}componentDidLoad(){const o=this.nativeInput;null!=o&&(o.indeterminate=this.indeterminate)}setFocus(o){var r=this;return(0,n.A)(function*(){var i;null===(i=r.nativeInput)||void 0===i||i.focus(o)})()}removeFocus(){var o=this;return(0,n.A)(function*(){var r;null===(r=o.nativeInput)||void 0===r||r.blur()})()}handleSlotChange(){this.hasLabelSlot=(0,a.h)(this.host,"label"),this.hasErrorSlot=(0,a.h)(this.host,"error-text")}render(){return(0,e.h)(h.F,{key:"3881d6f70869fe371be4bdc084d1e2ee2ffcaad0",inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,errorTextId:this.errorTextId,hasErrorTextSlot:this.hasErrorSlot,errorText:this.errorText,errorTextCount:this.errorTextCount,size:"medium",disabled:this.disabled,required:this.required,displayError:this.invalid},(0,e.h)("label",{key:"a42631ccd1b8fb0ee21d575c4f08d92b6349d9f8",part:"base",class:{checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--invalid":this.invalid,"checkbox--indeterminate":this.indeterminate},htmlFor:this.inputId,onMouseDown:this.handleMouseDown},(0,e.h)("span",{key:"d1e1080dd43c4e3110b9f272f1dd2185c99ecbc4",part:"control",class:"checkbox__control"},this.checked&&(0,e.h)("span",{key:"e02e32f28b9e997ee1baf81aa5d12e00df275e9e",part:"checked-icon",class:"checkbox__icon"},(0,e.h)("svg",{key:"b313da8df11a0cce0c8f3c8785e46be998106528",viewBox:"0 0 16 16"},(0,e.h)("g",{key:"9e49d0e0f0cf1070b1b283cc63586ad34c284302",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},(0,e.h)("g",{key:"a36e0b3299473a24a14ce268052b00f3929e0f31",stroke:"currentColor","stroke-width":"2"},(0,e.h)("g",{key:"f4f0033909e86d0a79bfba797b6ec9f389e2d8c7",transform:"translate(3.428571, 3.428571)"},(0,e.h)("path",{key:"09a34c50138270daad1968cd330f16d49d1807ce",d:"M0,5.71428571 L3.42857143,9.14285714"}),(0,e.h)("path",{key:"1fa1a9f56875cfd60d1595f05bf8a294bd85aaaa",d:"M9.14285714,0 L3.42857143,9.14285714"})))))),!this.checked&&this.indeterminate&&(0,e.h)("span",{key:"d263c3e0de02a8c17869ff74b6c864d23d7539e6",part:"indeterminate-icon",class:"checkbox__icon"},(0,e.h)("svg",{key:"192a9d79ce11edb96b51776a5d0a517ea160d0e6",viewBox:"0 0 16 16"},(0,e.h)("g",{key:"ccd9afa0efe3c764521dd1d34e02c2680b68fb37",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},(0,e.h)("g",{key:"f9d774248f858e7ff08d91a23f4a0290b2000a66",stroke:"currentColor","stroke-width":"2"},(0,e.h)("g",{key:"d098b4ab5ee88a3d90f13488d86a3f37a382fee9",transform:"translate(2.285714, 6.857143)"},(0,e.h)("path",{key:"d47b208149e864b67ac8d25c0607b6e5868262a7",d:"M10.2857143,1.14285714 L1.14285714,1.14285714"})))))),(0,e.h)("input",{key:"e3da5bf1a133e8a31a6abfd8852cd1e8434f1861",ref:o=>this.nativeInput=o,id:this.inputId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"checkbox","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus})),(0,e.h)("span",{key:"298954f2c0314e37a43fb47a8d1e9a3069f7ee4e",part:"text",id:this.textId,class:"checkbox__text"},(0,e.h)("slot",{key:"539f5cde4f4a771422145d6faf4a611c1c07b74f"}))))}get host(){return(0,e.g)(this)}static get watchers(){return{checked:["handleCheckedChange"],indeterminate:["handleCheckedChange"],errorText:["handleLabelChange"],label:["handleLabelChange"]}}};c.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*";transform:scale(1.1);margin-left:var(--six-spacing-xxx-small);position:absolute}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{display:inline-block}.checkbox{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.checkbox--focused .checkbox__control{outline:var(--six-focus-ring);outline-offset:0}.checkbox__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--six-selection-control-toggle-size);min-width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size);border:solid var(--six-border-width) var(--six-input-border-color);border-radius:0;background-color:var(--six-input-background-color);color:var(--six-checkbox-color);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none;min-width:var(--six-selection-control-toggle-size)}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--six-input-border-color-hover)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--six-selection-control-color);background-color:var(--six-selection-control-color)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--six-input-border-color-focus);background-color:var(--six-input-border-color-focus)}.checkbox--disabled{cursor:not-allowed;color:var(--six-input-color-disabled)}.checkbox--disabled .checkbox__control{border-color:var(--six-input-border-color-disabled)}.checkbox--disabled.checkbox--checked .checkbox__control,.checkbox--disabled.checkbox--indeterminate .checkbox__control{background-color:var(--six-selection-control-color-disabled)}.checkbox--invalid:not(.checkbox--disabled) .checkbox__control{border-color:var(--six-input-border-color-danger)}.checkbox__text{line-height:var(--six-selection-control-toggle-size);margin-left:0.5em;user-select:none}'}}]);