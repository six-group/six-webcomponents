(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f399887"],{"551e":function(t,o,e){"use strict";function l(t){const o=t?t.assignedNodes({flatten:!0}):[];let e="";return[...o].map(t=>{t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e}function r(t,o){return o?null!==t.querySelector(`[slot="${o}"]`):Array.from(t.childNodes).some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if(!o.hasAttribute("slot"))return!0}return!1})}e.d(o,"a",(function(){return l})),e.d(o,"b",(function(){return s})),e.d(o,"c",(function(){return a})),e.d(o,"d",(function(){return r}));const n=(t,[o,e])=>Object.assign(Object.assign({},t),{[o]:e}),a=t=>o=>Object.values(t).map(t=>[t,r(o,t)]).reduce(n,{}),s=t=>{var o;return null===(o=t.querySelector("slot"))||void 0===o?void 0:o.assignedElements({flatten:!0})}},"6e2f":function(t,o,e){"use strict";e.d(o,"a",(function(){return r}));var l=e("c8e7");const r=(t,o)=>{const e=!!t.label||t.hasLabelSlot,r=!!t.helpText||t.hasHelpTextSlot,n=t.errorText&&""!==t.errorText||!t.hasErrorTextSlot;return Object(l["g"])("div",{part:"form-control",class:{"form-control":!0,"form-control--small":"small"===t.size,"form-control--medium":"medium"===t.size,"form-control--large":"large"===t.size,"form-control--has-label":e,"form-control--has-help-text":r,"form-control--has-error-text":t.displayError,"form-control--disabled":t.disabled,"form-control--invalid":t.displayError&&!t.disabled}},Object(l["g"])("label",{part:"label",id:t.labelId,class:{"form-control__label":!0,"form-control__label__required":t.required},htmlFor:t.inputId,"aria-hidden":e?"false":"true",onClick:t.onLabelClick},Object(l["g"])("slot",{name:"label"},t.label)),Object(l["g"])("div",{class:"form-control__input"},o),Object(l["g"])("div",{part:"error-text",id:t.errorTextId,class:"form-control__error-text","aria-hidden":t.displayError?"false":"true"},n?t.errorText:Object(l["g"])("slot",{name:"error-text"})),Object(l["g"])("div",{part:"help-text",id:t.helpTextId,class:"form-control__help-text","aria-hidden":r?"false":"true"},Object(l["g"])("slot",{name:"help-text"},t.helpText)))}},c9c3:function(t,o,e){"use strict";e.r(o),e.d(o,"six_group_label",(function(){return i}));var l=e("c8e7"),r=e("6e2f"),n=e("551e");const a=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*"}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;color:var(--six-color-danger-800);margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{display:block}';let s=0,i=class{constructor(t){Object(l["i"])(this,t),this.wrapperLabelId="label-"+ ++s,this.labelId="label-label-"+s,this.helpTextId="label-help-text-"+s,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.size="medium",this.label="",this.helpText="",this.disabled=!1}handleLabelChange(){this.handleSlotChange()}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this),this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}componentWillLoad(){this.handleSlotChange()}disconnectedCallback(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(){this.hasLabelSlot=Object(n["d"])(this.host,"label"),this.hasHelpTextSlot=Object(n["d"])(this.host,"help-text")}render(){return Object(l["g"])(r["a"],{inputId:this.wrapperLabelId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size,disabled:this.disabled,required:this.required},Object(l["g"])("slot",null))}get host(){return Object(l["f"])(this)}static get watchers(){return{helpText:["handleLabelChange"],label:["handleLabelChange"]}}};i.style=a}}]);
//# sourceMappingURL=chunk-5f399887.6827fe6e.js.map