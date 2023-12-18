"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[8262],{8262:(E,g,r)=>{r.r(g),r.d(g,{six_timepicker:()=>v});var h=r(5861),i=r(9265),f=r(5349),l=r(3185),k=r(7418),p=r(1792),_=r(3304);const C=e=>e>12?e-12:e,c=(e,t)=>{const s=e.split(":"),n=t.split(":");return s.length===n.length},m=(e,t)=>{const s=e.split(":"),n=t.split(":");c(e,t)||console.error(`Timestring did not match expected format.\nExpected format: ${t}\nReceived timestring: ${e}`);const o={};return s.forEach((a,T)=>{switch(n[T]){case"HH":o.hours=Number(a),o.has24Hours=!0;break;case"hh":o.hours=Number(a),o.has24Hours=!1;break;case"mm":o.minutes=Number(a);break;case"ss":o.seconds=Number(a);break;case"ms":o.milliseconds=Number(a);break;case"aa":o.period="PM"===a.toUpperCase()?"PM":"AM"}}),o},x=(e,t)=>null==e?"":t.split(":").map(n=>{switch(n){case"HH":case"hh":return String(e.hours).padStart(2,"0");case"mm":return String(e.minutes).padStart(2,"0");case"ss":return String(e.seconds).padStart(2,"0");case"ms":return String(e.milliseconds).padStart(3,"0");case"aa":return String(e.period)}}).join(":"),v=class{constructor(e){(0,i.r)(this,e),this.sixChange=(0,i.c)(this,"six-timepicker-change",7),this.sixChangeDebounced=(0,i.c)(this,"six-timepicker-change-debounced",7),this.sixClear=(0,i.c)(this,"six-timepicker-clear",7),this.eventListeners=new k.E,this.handlePickerChange=(t,s)=>{if(t.stopPropagation(),null==this.popupValue)return;this.popupValue[s]=t.detail;const n=x(this.popupValue,this.format);this.value=n,this.sixChange.emit({changedProperty:s,value:this.popupValue,valueAsString:n})},this.handleDocumentMouseDown=t=>{t.composedPath().includes(this.host)||this.closePopup()},this.handleClearClick=t=>{t.stopPropagation(),this.value="",this.sixClear.emit(),this.sixChange.emit({value:{},valueAsString:""})},this.format="HH:mm:ss",this.separator=":",this.value="",this.open=!1,this.inline=!1,this.readonly=!1,this.disabled=!1,this.placement=void 0,this.size="medium",this.required=!1,this.placeholder=void 0,this.errorText="",this.errorTextCount=void 0,this.label="",this.invalid=!1,this.name="",this.clearable=!1,this.iconPosition="left",this.hoist=!1,this.timeout=l.D,this.interval=l.b,this.defaultTime=void 0,this.debounce=l.D,this.isPopupContentUp=!1,this.isDropDownContentUp=!1,this.popupValue={}}resizeHandler(){var e=this;return(0,h.Z)(function*(){e.calcIsPopupContentUp(),e.moveOpenHoistedPopup()})()}scrollHandler(){var e=this;return(0,h.Z)(function*(){e.calcIsPopupContentUp(),e.moveOpenHoistedPopup()})()}valueChanged(){this.updateValue()}setFocus(e){var t=this;return(0,h.Z)(function*(){var s;null===(s=t.inputElement)||void 0===s||s.setFocus(e)})()}connectedCallback(){this.eventListeners.forward("six-timepicker-change","change",this.host)}componentWillLoad(){this.updateValue(),this.inline&&(this.open=!0),this.open&&this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown)}componentDidLoad(){if(null==this.inputElement)return;const e=this.inputElement;this.eventListeners.add(this.host,"six-timepicker-change",(0,l.a)(t=>this.sixChangeDebounced.emit(t.detail),this.debounce)),this.eventListeners.add(e,"six-input-input",(0,l.a)(t=>{if(t.stopPropagation(),!c(e.value,this.format))return this.value=e.value,void this.sixChange.emit({value:{},valueAsString:""});this.value=e.value,this.popupValue=m(e.value,this.format),this.sixChange.emit({value:this.popupValue,valueAsString:x(this.popupValue,this.format)})},this.debounce))}componentDidRender(){(0,_.a)(this.hoist,this.popup,this.inputElement,this.wrapper,145,e=>this.isDropDownContentUp=e)}disconnectedCallback(){this.eventListeners.removeAll()}updateValue(){("string"!=typeof this.value||!c(this.value,this.format))&&(this.value=""),this.popupValue=""===this.value?null==this.defaultTime?((e=!0)=>e?(()=>{const e=new Date;return{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds(),has24Hours:!0}})():(()=>{const e=new Date,t=e.getHours();return{hours:C(t),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds(),has24Hours:!1,period:t>=12?"PM":"AM"}})())(this.is24HourClock()):m(this.defaultTime,this.format):m(this.value,this.format)}calcIsPopupContentUp(){if(null==this.inputElement||null==this.wrapper)return;const e=this.inputElement.getBoundingClientRect(),t=this.wrapper.getBoundingClientRect(),s=Math.max(t.height,145),n=e.y>window.innerHeight/2;this.isPopupContentUp=n&&window.innerHeight<e.bottom+s}moveOpenHoistedPopup(){(0,_.m)(this.hoist,this.open,this.popup,this.inputElement,this.wrapper,145)}getSixTimeUnitPicker(e){return(0,i.h)("six-item-picker",{class:e.class,timeout:this.timeout,interval:this.interval,padded:!0,min:e.min,max:e.max,value:this.popupValue[e.propertyName],items:e.items,type:e.type||f.I.NUMBER,"padding-length":e.paddingLength,"onSix-item-picker-change":t=>this.handlePickerChange(t,e.propertyName)})}getHour24Picker(){if(this.is24HourClock())return this.getSixTimeUnitPicker({min:0,max:23,propertyName:"hours"})}is24HourClock(){return this.format.includes("HH")}getHour12Picker(){if(this.is12HourClock())return this.getSixTimeUnitPicker({min:0,max:11,propertyName:"hours"})}is12HourClock(){return this.format.includes("hh")}getAmPmPicker(){if(this.is12HourClock())return this.getSixTimeUnitPicker({items:["AM","PM"],type:f.I.CUSTOM,propertyName:"period"})}getMinutePicker(){if(this.format.includes("mm"))return this.getSixTimeUnitPicker({min:0,max:59,propertyName:"minutes"})}getSecondsPicker(){if(this.format.includes("ss"))return this.getSixTimeUnitPicker({min:0,max:59,propertyName:"seconds"})}getMillisecondsPicker(){if(this.format.includes("ms"))return this.getSixTimeUnitPicker({min:0,max:999,class:"timepicker__item--wide",paddingLength:3,propertyName:"milliseconds"})}getSeparator(){return(0,i.h)("div",{class:"timepicker__separator"},(0,i.h)("span",null,this.separator))}getContent(){const t=[this.getHour24Picker(),this.getHour12Picker(),this.getMinutePicker(),this.getSecondsPicker(),this.getMillisecondsPicker()].filter(s=>void 0!==s);return t.map((s,n)=>n===t.length-1?[s]:[s,this.getSeparator()])}openPopup(){!this.open&&!this.disabled&&(this.open=!0,this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown))}closePopup(){this.inline||(this.open=!1,this.eventListeners.remove(document,"mousedown",this.handleDocumentMouseDown))}renderClearable(){return this.clearable&&(0,i.h)("button",{slot:"suffix",class:{timepicker_clear:!0,"timepicker_clear--right":"left"===this.iconPosition,"timepicker_clear--left":"right"===this.iconPosition},type:"button",onClick:this.handleClearClick,tabindex:"-1"},(0,i.h)("six-icon",{size:"small"},"clear"))}renderCustomIcon(){const e=(0,p.h)(this.host,"custom-icon")?(0,i.h)("slot",{name:"custom-icon"}):(0,i.h)("six-icon",{size:"large"===this.size?"medium":this.size},"watch_later");return(0,i.h)("span",{slot:"prefix",part:"icon",class:{prefix:!0,"prefix--right":"right"===this.iconPosition}},e)}render(){return(0,i.h)("div",{part:"container",ref:e=>this.wrapper=e,class:"timepicker__container"},(0,i.h)("six-input",{ref:e=>this.inputElement=e,part:"input",onClick:()=>this.openPopup(),value:this.value,placeholder:this.placeholder,readonly:this.readonly,disabled:this.disabled,errorTextCount:this.errorTextCount,errorText:this.errorText,invalid:this.invalid,size:this.size,name:this.name,label:this.label,required:this.required,class:{"input--empty":""===this.value,"input--hide":this.inline}},this.renderCustomIcon(),this.renderClearable(),(0,p.h)(this.host,"label")?(0,i.h)("span",{slot:"label"},(0,i.h)("slot",{name:"label"})):null,(0,p.h)(this.host,"error-text")?(0,i.h)("span",{slot:"error-text"},(0,i.h)("slot",{name:"error-text"})):null),this.open&&(0,i.h)("div",{ref:e=>this.popup=e,part:"popup",class:{timepicker__popup:!0,"timepicker__popup--is-up":null==this.placement?"top"===this.placement:this.isPopupContentUp,"timepicker__popup--is-inline":this.inline}},...this.getContent(),this.getAmPmPicker()))}get host(){return(0,i.g)(this)}static get watchers(){return{value:["valueChanged"]}}};v.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;font-family:var(--six-font-family)}.timepicker_clear{display:inline-flex;align-items:center;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;padding:0;transition:var(--six-transition-fast) color;cursor:pointer}.timepicker_clear:hover{color:var(--six-input-icon-color-hover)}.timepicker_clear:focus{outline:none}.timepicker_clear--right{right:0;position:absolute}.timepicker_clear--left{right:35px;position:absolute}.timepicker__container{position:relative}.timepicker__popup{display:flex;justify-content:center;min-width:min-content;min-height:145px;background-color:white;padding:0.5em 0.5em 1.5em;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);user-select:none;position:absolute;z-index:var(--six-z-index-dropdown);right:0;left:0}.timepicker__popup--is-up{bottom:100%}.timepicker__popup--is-inline{position:initial;box-shadow:none;border:1px solid var(--six-color-web-rock-400)}.timepicker__separator{display:flex;align-items:center}.timepicker__item--wide{padding-left:0.5rem;padding-right:0.5rem}.input--empty .timepicker_clear{visibility:hidden}.input--hide{display:none}.prefix{cursor:pointer}.prefix--right{right:0;display:inline-flex;position:absolute;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;margin-right:var(--six-input-spacing-medium);transition:var(--six-transition-fast) color}"}}]);