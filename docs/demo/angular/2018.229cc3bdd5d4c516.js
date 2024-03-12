"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[2018],{2018:(_,p,s)=>{s.r(p),s.d(p,{six_input:()=>d});var n=s(5861),e=s(5856),c=s(4786),l=s(5730),x=s(7418),f=s(1114);const u={large:"medium",medium:"small",small:"xSmall"};let a=0;const d=class{constructor(i){(0,e.r)(this,i),this.sixChange=(0,e.c)(this,"six-input-change",7),this.sixClear=(0,e.c)(this,"six-input-clear",7),this.sixInput=(0,e.c)(this,"six-input-input",7),this.sixFocus=(0,e.c)(this,"six-input-focus",7),this.sixBlur=(0,e.c)(this,"six-input-blur",7),this.inputId="input-"+ ++a,this.labelId=`input-label-${a}`,this.helpTextId=`input-help-text-${a}`,this.errorTextId=`input-error-text-${a}`,this.eventListeners=new x.E,this.handleChange=t=>{t.stopPropagation(),null!=this.nativeInput&&(this.value=this.nativeInput.value,this.sixChange.emit())},this.handleInput=t=>{t.stopPropagation(),null!=this.nativeInput&&(this.value=this.nativeInput.value,this.sixInput.emit())},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleClearClick=t=>{this.value="",this.sixClear.emit(),this.sixInput.emit(),this.sixChange.emit(),null!=this.nativeInput&&this.nativeInput.focus(),t.stopPropagation()},this.handleKeyDown=t=>{"Enter"===t.key&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&(0,f.s)(this.host)})},this.handlePasswordToggle=()=>{this.isPasswordVisible=!this.isPasswordVisible},this.handleSlotChange=()=>{this.hasHelpTextSlot=(0,l.h)(this.host,"help-text"),this.hasLabelSlot=(0,l.h)(this.host,"label"),this.hasErrorSlot=(0,l.h)(this.host,"error-text")},this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.hasErrorSlot=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.name="",this.value="",this.pill=!1,this.helpText="",this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.minlength=void 0,this.maxlength=void 0,this.min=void 0,this.max=void 0,this.step=void 0,this.pattern=void 0,this.dropdownSearch=!1,this.required=!1,this.autocapitalize="off",this.autocorrect="off",this.autocomplete="off",this.autofocus=!1,this.spellcheck=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.clearable=!1,this.togglePassword=!1,this.inputmode=void 0,this.line=!1}handleLabelChange(){this.handleSlotChange()}handleValueChange(){this.value=this.getValue(),null!=this.nativeInput&&this.nativeInput.value!==this.value&&(this.nativeInput.value=this.value)}connectedCallback(){var i;null===(i=this.host.shadowRoot)||void 0===i||i.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-input-input","input",this.host),this.eventListeners.forward("six-input-change","change",this.host),this.eventListeners.forward("six-input-focus","focus",this.host),this.eventListeners.forward("six-input-blur","blur",this.host)}componentWillLoad(){this.handleSlotChange()}disconnectedCallback(){var i;null===(i=this.host.shadowRoot)||void 0===i||i.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}setFocus(i){var t=this;return(0,n.Z)(function*(){var r;null===(r=t.nativeInput)||void 0===r||r.focus(i)})()}removeFocus(){var i=this;return(0,n.Z)(function*(){var t;null===(t=i.nativeInput)||void 0===t||t.blur()})()}select(){var i=this;return(0,n.Z)(function*(){var t;return null===(t=i.nativeInput)||void 0===t?void 0:t.select()})()}setSelectionRange(i,t,r="none"){var h=this;return(0,n.Z)(function*(){var o;return null===(o=h.nativeInput)||void 0===o?void 0:o.setSelectionRange(i,t,r)})()}setRangeText(i,t,r,h="preserve"){var o=this;return(0,n.Z)(function*(){null!=o.nativeInput&&(o.nativeInput.setRangeText(i,t,r,h),o.getValue()!==o.nativeInput.value&&(o.value=o.nativeInput.value,o.sixChange.emit(),o.sixInput.emit()))})()}getValue(){var i;return(null!==(i=this.value)&&void 0!==i?i:"").toString()}render(){return(0,e.h)(c.F,{key:"c814025e7db66cd628c466316a5bd3fe4c3e77bf",inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,errorTextId:this.errorTextId,errorText:this.errorText,errorTextCount:this.errorTextCount,hasErrorTextSlot:this.hasErrorSlot,size:this.size,disabled:this.disabled,required:this.required,displayError:this.invalid},(0,e.h)("div",{key:"bad7f2e31ec8465f3292927e9d9fb37aa919cb33",part:"base",class:{input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--line":this.line,"input--pill":this.pill,"input--disabled":this.disabled,"input--dropdown-search":this.dropdownSearch,"input--focused":this.hasFocus,"input--empty":0===this.getValue().length,"input--invalid":this.invalid}},(0,e.h)("span",{key:"fa0b1320b4d44794f36047ca65efa9c03d180234",part:"prefix",class:"input__prefix"},(0,e.h)("slot",{key:"8312c426648c862ef669cb424a219cb85f2b193c",name:"prefix"})),(0,e.h)("input",{key:"87ce5517721681533fc7bcf18d20cb3d1ee7fb6f",part:"input",ref:i=>this.nativeInput=i,id:this.inputId,size:1,class:{input__control:!0,input__control__prefix:(0,l.h)(this.host,"prefix")},type:"password"===this.type&&this.isPasswordVisible?"text":this.type,name:this.name,placeholder:this.placeholder,disabled:this.disabled,readonly:this.readonly,minLength:this.minlength,maxLength:this.maxlength,min:this.min,max:this.max,step:this.step,value:this.getValue(),autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,spellcheck:this.spellcheck,pattern:this.pattern,required:this.required,inputMode:this.inputmode,"aria-labelledby":this.labelId,"aria-describedby":this.helpTextId,"aria-invalid":this.invalid?"true":"false",onChange:this.handleChange,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,"data-testid":"input-control"}),this.clearable&&(0,e.h)("button",{part:"clear-button",class:"input__clear",type:"button",onClick:this.handleClearClick,tabindex:"-1","data-testid":"input-clear-button"},(0,e.h)("slot",{name:"clear-icon"},(0,e.h)("six-icon",{size:u[this.size]},"clear"))),this.togglePassword&&(0,e.h)("button",{part:"password-toggle-button",class:"input__password-toggle",type:"button",onClick:this.handlePasswordToggle,tabindex:"-1"},this.isPasswordVisible?(0,e.h)("slot",{name:"show-password-icon"},(0,e.h)("six-icon",{size:u[this.size]},"visibility_off")):(0,e.h)("slot",{name:"hide-password-icon"},(0,e.h)("six-icon",{size:u[this.size]},"visibility"))),(0,e.h)("span",{key:"5768204290a458c6025f93d7eed7b4762fa8ab94",part:"suffix",class:"input__suffix"},(0,e.h)("slot",{key:"9f1917c71eeb148d31adf808299ef43c5307678f",name:"suffix"}))))}get host(){return(0,e.g)(this)}static get watchers(){return{helpText:["handleLabelChange"],errorText:["handleLabelChange"],label:["handleLabelChange"],value:["handleValueChange"]}}};d.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*";transform:scale(1.1);margin-left:var(--six-spacing-xxx-small);position:absolute}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{display:block}.input{display:inline-flex;align-items:stretch;justify-content:start;position:relative;width:100%;font-family:var(--six-font-family);font-weight:var(--six-input-font-weight);letter-spacing:var(--six-input-letter-spacing);background-color:var(--six-input-background-color);border:solid var(--six-border-width) var(--six-input-border-color);vertical-align:middle;overflow:hidden;transition:var(--six-transition-fast) color, var(--six-transition-fast) border, var(--six-transition-fast) box-shadow;cursor:text}.input--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.input:hover:not(.input--disabled){background-color:var(--six-input-background-color-hover);border-color:var(--six-input-border-color-hover)}.input:hover:not(.input--disabled) .input__control{color:var(--six-input-color-hover)}.input:hover.input--dropdown-search{border-color:transparent}.input--dropdown-search{border-color:transparent}.input--dropdown-search.input--focused{border-color:var(--six-input-border-color)}.input.input--focused:not(.input--disabled){background-color:var(--six-input-background-color-focus);border-bottom-color:var(--six-input-border-color-focus);box-shadow:0 1px 0 0 var(--six-input-border-color-focus)}.input.input--focused:not(.input--disabled):not(.input--line){border-color:var(--six-input-border-color-focus);box-shadow:var(--six-input-focus-shadow)}.input.input--focused:not(.input--disabled) .input__control{color:var(--six-input-color-focus)}.input.input--disabled{background-color:var(--six-input-background-color-disabled);border-color:var(--six-input-border-color-disabled);cursor:not-allowed}.input.input--disabled .input__control{color:var(--six-input-color-disabled)}.input.input--disabled .input__control::placeholder{color:var(--six-input-placeholder-color-disabled)}.input.input--invalid:not(.input--disabled):not(.input--focused){border-bottom-color:var(--six-input-border-color-danger)}.input.input--invalid:not(.input--disabled):not(.input--focused):not(.input--line){border-color:var(--six-input-border-color-danger)}.input__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;min-width:0;color:var(--six-input-color);border:none;background:none;box-shadow:none;padding:0;margin:0;cursor:inherit;-webkit-appearance:none}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--six-height-large) var(--six-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--six-color-primary-500)}.input__control::placeholder{color:var(--six-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.input__control::-ms-reveal{display:none}.input__prefix,.input__suffix{display:inline-flex;flex:0 0 auto;align-items:center;cursor:default}.input__prefix ::slotted(six-icon),.input__suffix ::slotted(six-icon){color:var(--six-input-icon-color)}.input.input--disabled ::slotted(six-icon){cursor:not-allowed}.input--small{border-radius:var(--six-input-border-radius-small);font-size:var(--six-input-font-size-small);height:var(--six-height-small)}.input--small .input__control{height:calc(var(--six-height-small) - var(--six-border-width) * 2);margin:0 var(--six-input-spacing-small)}.input--small .input__control__prefix{margin:0 var(--six-input-prefix-spacing-small)}.input--small .input__clear,.input--small .input__password-toggle{margin-right:var(--six-input-spacing-small)}.input--small .input__prefix ::slotted(*){margin-left:var(--six-input-prefix-spacing-small)}.input--small .input__suffix ::slotted(*){margin-right:var(--six-input-prefix-spacing-small)}.input--medium{border-radius:var(--six-input-border-radius-medium);font-size:var(--six-input-font-size-medium);height:var(--six-height-medium)}.input--medium .input__control{height:calc(var(--six-height-medium) - var(--six-border-width) * 2);margin:0 var(--six-input-spacing-medium)}.input--medium .input__control__prefix{margin:0 var(--six-input-prefix-spacing-medium)}.input--medium .input__clear,.input--medium .input__password-toggle{margin-right:var(--six-input-spacing-medium)}.input--medium .input__prefix ::slotted(*){margin-left:var(--six-input-prefix-spacing-medium)}.input--medium .input__suffix ::slotted(*){margin-right:var(--six-input-prefix-spacing-medium)}.input--large{border-radius:var(--six-input-border-radius-large);font-size:var(--six-input-font-size-large);height:var(--six-height-large)}.input--large .input__control{height:calc(var(--six-height-large) - var(--six-border-width) * 2);margin:0 var(--six-input-spacing-large)}.input--large .input__control__prefix{margin:0 var(--six-input-prefix-spacing-large)}.input--large .input__clear,.input--large .input__password-toggle{margin-right:var(--six-input-spacing-large)}.input--large .input__prefix ::slotted(*){margin-left:var(--six-input-prefix-spacing-large)}.input--large .input__suffix ::slotted(*){margin-right:var(--six-input-prefix-spacing-large)}.input--pill.input--small{border-radius:var(--six-height-small)}.input--pill.input--medium{border-radius:var(--six-height-medium)}.input--pill.input--large{border-radius:var(--six-height-large)}.input__clear,.input__password-toggle{display:inline-flex;align-items:center;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;padding:0;transition:var(--six-transition-fast) color;cursor:pointer}.input__clear:hover,.input__password-toggle:hover{color:var(--six-input-icon-color-hover)}.input__clear:focus,.input__password-toggle:focus{outline:none}.input--empty .input__clear{visibility:hidden}'}}]);