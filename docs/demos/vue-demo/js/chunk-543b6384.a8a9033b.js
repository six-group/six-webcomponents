(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-543b6384"],{"2eb3":function(e,t,n){"use strict";n.r(t),n.d(t,"six_form",(function(){return r}));var i=n("c8e7"),s=n("32a1");const a=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}";let r=class{constructor(e){Object(i["i"])(this,e),this.sixSubmit=Object(i["e"])(this,"six-form-submit",7),this.sixChange=Object(i["e"])(this,"six-form-change",7),this.sixReset=Object(i["e"])(this,"six-form-reset",7),this.eventListeners=new s["a"],this.novalidate=!1}connectedCallback(){this.formControls=[{tag:"six-button",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,click:e=>{const t=e.target;t.submit&&this.submit(),t.reset&&this.reset()}},{tag:"six-checkbox",serialize:(e,t)=>e.name&&e.checked&&!e.disabled?t.append(e.name,e.value):null,changeEventName:"six-checkbox-change"},{tag:"six-color-picker",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null},{tag:"six-input",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,keyDown:e=>{"Enter"!==e.key||e.defaultPrevented||this.submit()},changeEventName:"six-input-change"},{tag:"six-datepicker",serialize:(e,t)=>{var n;return e.name&&!e.disabled?t.append(e.name,null===(n=e.value)||void 0===n?void 0:n.toISOString()):null},keyDown:e=>{"Enter"!==e.key||e.defaultPrevented||this.submit()},changeEventName:"six-datepicker-select"},{tag:"six-radio",serialize:(e,t)=>e.name&&e.checked&&!e.disabled?t.append(e.name,e.value):null,changeEventName:"six-radio-change"},{tag:"six-range",serialize:(e,t)=>{e.name&&!e.disabled&&t.append(e.name,e.value+"")},changeEventName:"six-range-change"},{tag:"six-select",serialize:(e,t)=>{if(e.name&&!e.disabled)if(e.multiple){const n=[...e.value];n.length?n.map(n=>t.append(e.name,n)):t.append(e.name,"")}else t.append(e.name,e.value+"")},changeEventName:"six-select-change"},{tag:"six-switch",serialize:(e,t)=>e.name&&e.checked&&!e.disabled?t.append(e.name,e.value):null,changeEventName:"six-switch-change"},{tag:"six-textarea",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,changeEventName:"six-textarea-change"},{tag:"six-timepicker",serialize:(e,t)=>e.name&&!e.disabled?t.append(e.name,e.value):null,keyDown:e=>{"Enter"!==e.key||e.defaultPrevented||this.submit()},changeEventName:"six-timepicker-change"}],this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}disconnectedCallback(){this.eventListeners.removeAll()}componentDidLoad(){this.getFormControls().then(e=>e.forEach(e=>this.appendChangeListener(e)))}appendChangeListener(e){const t=e.tagName.toLowerCase();for(const n of this.formControls)n.tag===t&&n.changeEventName&&this.eventListeners.add(e,n.changeEventName,()=>this.handleChange(e))}async getFormData(){const e=new FormData,t=await this.getFormControls();return t.map(t=>this.serializeElement(t,e)),e}async getFormControls(){const e=this.form.querySelector("slot"),t=this.formControls.map(e=>e.tag);return e.assignedElements({flatten:!0}).reduce((e,t)=>e.concat(t,[...t.querySelectorAll("*")]),[]).filter(e=>t.includes(e.tagName.toLowerCase()))}async submit(){const e=await this.getFormData(),t=await this.getFormControls(),n=t.filter(e=>"function"===typeof e.reportValidity);if(!this.novalidate){let e=!0;for(const t of n)await t.reportValidity()||(e=!1);if(!e)return!1}return this.sixSubmit.emit({formData:e,formControls:t}),!0}async checkValidity(){const e=await this.getFormControls(),t=e.filter(e=>"function"===typeof e.checkValidity).map(e=>e.checkValidity()),n=await Promise.all(t).then(e=>e.filter(e=>!1===e));return 0==n.length}async reset(){const e=await this.getFormControls();e.filter(e=>(null===e||void 0===e?void 0:e.reset)&&"function"===typeof(null===e||void 0===e?void 0:e.reset)).forEach(e=>e.reset()),this.sixReset.emit()}handleClick(e){const t=e.target,n=t.tagName.toLowerCase();for(const i of this.formControls)i.tag===n&&i.click&&i.click(e)}handleKeyDown(e){const t=e.target,n=t.tagName.toLowerCase();for(const i of this.formControls)i.tag===n&&i.keyDown&&i.keyDown(e)}handleChange(e){this.checkValidity().then(t=>this.sixChange.emit({valid:t,formControl:e}))}serializeElement(e,t){const n=e.tagName.toLowerCase();for(const i of this.formControls)if(i.tag===n)return i.serialize(e,t);return null}render(){return Object(i["g"])("div",{ref:e=>this.form=e,part:"base",class:"form",role:"form",onClick:this.handleClick,onKeyDown:this.handleKeyDown},Object(i["g"])("slot",null))}};r.style=a},"32a1":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const i=e=>t=>Object.keys(e).every(n=>e[n]===t[n]);class s{constructor(){this.eventListeners=[],this.add=(e,t,n,i=null)=>{this.eventListeners.push({el:e,name:t,listener:n,identifier:i}),e.addEventListener(t,n)},this.remove=(e,t,n)=>{const s=i({el:e,name:t,listener:n});this.eventListeners=this.getFilteredEventListeners(s)},this.removeByIdentifier=e=>{const t=t=>t.identifier===e,n=void 0!==this.eventListeners.find(t);n&&(this.eventListeners=this.getFilteredEventListeners(t))},this.removeAll=()=>{while(this.eventListeners.length){const{el:e,name:t,listener:n}=this.eventListeners.pop();e.removeEventListener(t,n)}}}getFilteredEventListeners(e){return this.eventListeners.filter(t=>!e(t)||(t.el.removeEventListener(t.name,t.listener),!1))}}}}]);
//# sourceMappingURL=chunk-543b6384.a8a9033b.js.map