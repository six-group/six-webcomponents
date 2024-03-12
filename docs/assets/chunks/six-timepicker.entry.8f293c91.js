import{r as k,c as a,h as s,g as b}from"../app.e11adc8d.js";import{I as m}from"./types-a07bb999.cc5ade9e.js";import{D as d,b as v,a as g}from"./execution-control-2ebaf4ef.ca9145b2.js";import{E as P}from"./event-listeners-706d4309.8644075f.js";import{h as p}from"./slot-56531341.2ae944bc.js";import{a as C,m as _}from"./popup-7209e9d5.833cdd91.js";import"./framework.57535aa4.js";import"./theme.48150ed6.js";const H=()=>{const e=new Date;return{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds(),has24Hours:!0}},u=12,w=e=>e>u?e-u:e,y=()=>{const e=new Date,t=e.getHours();return{hours:w(t),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds(),has24Hours:!1,period:t>=u?"PM":"AM"}},S=(e=!0)=>e?H():y(),c=(e,t)=>{const i=e.split(":"),n=t.split(":");return i.length===n.length},l=(e,t)=>{const i=e.split(":"),n=t.split(":");c(e,t)||console.error(`Timestring did not match expected format.
Expected format: ${t}
Received timestring: ${e}`);const r={};return i.forEach((o,x)=>{switch(n[x]){case"HH":r.hours=Number(o),r.has24Hours=!0;break;case"hh":r.hours=Number(o),r.has24Hours=!1;break;case"mm":r.minutes=Number(o);break;case"ss":r.seconds=Number(o);break;case"ms":r.milliseconds=Number(o);break;case"aa":r.period=o.toUpperCase()==="PM"?"PM":"AM"}}),r},f=(e,t)=>e==null?"":t.split(":").map(n=>{switch(n){case"HH":case"hh":return String(e.hours).padStart(2,"0");case"mm":return String(e.minutes).padStart(2,"0");case"ss":return String(e.seconds).padStart(2,"0");case"ms":return String(e.milliseconds).padStart(3,"0");case"aa":return String(e.period)}}).join(":"),T=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:block;font-family:var(--six-font-family)}.timepicker_clear{display:inline-flex;align-items:center;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;padding:0;transition:var(--six-transition-fast) color;cursor:pointer}.timepicker_clear:hover{color:var(--six-input-icon-color-hover)}.timepicker_clear:focus{outline:none}.timepicker_clear--right{right:0;position:absolute}.timepicker_clear--left{right:35px;position:absolute}.timepicker__container{position:relative}.timepicker__popup{display:flex;justify-content:center;min-width:min-content;min-height:145px;background-color:white;padding:0.5em 0.5em 1.5em;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);user-select:none;position:absolute;z-index:var(--six-z-index-dropdown);right:0;left:0}.timepicker__popup--is-up{bottom:100%}.timepicker__popup--is-inline{position:initial;box-shadow:none;border:1px solid var(--six-color-web-rock-400)}.timepicker__separator{display:flex;align-items:center}.timepicker__item--wide{padding-left:0.5rem;padding-right:0.5rem}.input--empty .timepicker_clear{visibility:hidden}.input--hide{display:none}.prefix{cursor:pointer}.prefix--right{right:0;display:inline-flex;position:absolute;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;margin-right:var(--six-input-spacing-medium);transition:var(--six-transition-fast) color}",E=T,h=145,U=class{constructor(e){k(this,e),this.sixChange=a(this,"six-timepicker-change",7),this.sixChangeDebounced=a(this,"six-timepicker-change-debounced",7),this.sixClear=a(this,"six-timepicker-clear",7),this.eventListeners=new P,this.handlePickerChange=(t,i)=>{if(t.stopPropagation(),this.popupValue==null)return;this.popupValue[i]=t.detail;const n=f(this.popupValue,this.format);this.value=n,this.sixChange.emit({changedProperty:i,value:this.popupValue,valueAsString:n})},this.handleDocumentMouseDown=t=>{if(!t.composedPath().includes(this.host)){this.closePopup();return}},this.handleClearClick=t=>{t.stopPropagation(),this.value="",this.sixClear.emit(),this.sixChange.emit({value:{},valueAsString:""})},this.format="HH:mm:ss",this.separator=":",this.value="",this.open=!1,this.inline=!1,this.readonly=!1,this.disabled=!1,this.placement=void 0,this.size="medium",this.required=!1,this.placeholder=void 0,this.errorText="",this.errorTextCount=void 0,this.label="",this.invalid=!1,this.name="",this.clearable=!1,this.iconPosition="left",this.hoist=!1,this.timeout=d,this.interval=v,this.defaultTime=void 0,this.debounce=d,this.isPopupContentUp=!1,this.isDropDownContentUp=!1,this.popupValue={}}async resizeHandler(){this.calcIsPopupContentUp(),this.moveOpenHoistedPopup()}async scrollHandler(){this.calcIsPopupContentUp(),this.moveOpenHoistedPopup()}valueChanged(){this.updateValue()}async setFocus(e){var t;(t=this.inputElement)===null||t===void 0||t.setFocus(e)}connectedCallback(){this.eventListeners.forward("six-timepicker-change","change",this.host)}componentWillLoad(){this.updateValue(),this.inline&&(this.open=!0),this.open&&this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown)}componentDidLoad(){if(this.inputElement==null)return;const e=this.inputElement;this.eventListeners.add(this.host,"six-timepicker-change",g(t=>this.sixChangeDebounced.emit(t.detail),this.debounce)),this.eventListeners.add(e,"six-input-input",g(t=>{if(t.stopPropagation(),!c(e.value,this.format)){this.value=e.value,this.sixChange.emit({value:{},valueAsString:""});return}this.value=e.value,this.popupValue=l(e.value,this.format),this.sixChange.emit({value:this.popupValue,valueAsString:f(this.popupValue,this.format)})},this.debounce))}componentDidRender(){C(this.hoist,this.popup,this.inputElement,this.wrapper,h,e=>this.isDropDownContentUp=e)}disconnectedCallback(){this.eventListeners.removeAll()}updateValue(){(typeof this.value!="string"||!c(this.value,this.format))&&(this.value=""),this.value===""?this.defaultTime==null?this.popupValue=S(this.is24HourClock()):this.popupValue=l(this.defaultTime,this.format):this.popupValue=l(this.value,this.format)}calcIsPopupContentUp(){if(this.inputElement==null||this.wrapper==null)return;const e=this.inputElement.getBoundingClientRect(),t=this.wrapper.getBoundingClientRect(),i=Math.max(t.height,h),n=e.y>window.innerHeight/2;this.isPopupContentUp=n&&window.innerHeight<e.bottom+i}moveOpenHoistedPopup(){_(this.hoist,this.open,this.popup,this.inputElement,this.wrapper,h)}getSixTimeUnitPicker(e){return s("six-item-picker",{class:e.class,timeout:this.timeout,interval:this.interval,padded:!0,min:e.min,max:e.max,value:this.popupValue[e.propertyName],items:e.items,type:e.type||m.NUMBER,"padding-length":e.paddingLength,"onSix-item-picker-change":t=>this.handlePickerChange(t,e.propertyName)})}getHour24Picker(){if(this.is24HourClock())return this.getSixTimeUnitPicker({min:0,max:23,propertyName:"hours"})}is24HourClock(){return this.format.includes("HH")}getHour12Picker(){if(this.is12HourClock())return this.getSixTimeUnitPicker({min:0,max:11,propertyName:"hours"})}is12HourClock(){return this.format.includes("hh")}getAmPmPicker(){if(!this.is12HourClock())return;const e=["AM","PM"];return this.getSixTimeUnitPicker({items:e,type:m.CUSTOM,propertyName:"period"})}getMinutePicker(){if(this.format.includes("mm"))return this.getSixTimeUnitPicker({min:0,max:59,propertyName:"minutes"})}getSecondsPicker(){if(this.format.includes("ss"))return this.getSixTimeUnitPicker({min:0,max:59,propertyName:"seconds"})}getMillisecondsPicker(){if(this.format.includes("ms"))return this.getSixTimeUnitPicker({min:0,max:999,class:"timepicker__item--wide",paddingLength:3,propertyName:"milliseconds"})}getSeparator(){return s("div",{class:"timepicker__separator"},s("span",null,this.separator))}getContent(){const t=[this.getHour24Picker(),this.getHour12Picker(),this.getMinutePicker(),this.getSecondsPicker(),this.getMillisecondsPicker()].filter(i=>i!==void 0);return t.map((i,n)=>n===t.length-1?[i]:[i,this.getSeparator()])}openPopup(){!this.open&&!this.disabled&&(this.open=!0,this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown))}closePopup(){this.inline||(this.open=!1,this.eventListeners.remove(document,"mousedown",this.handleDocumentMouseDown))}renderClearable(){return this.clearable&&s("button",{slot:"suffix",class:{timepicker_clear:!0,"timepicker_clear--right":this.iconPosition==="left","timepicker_clear--left":this.iconPosition==="right"},type:"button",onClick:this.handleClearClick,tabindex:"-1"},s("six-icon",{size:"small"},"clear"))}renderCustomIcon(){const e=p(this.host,"custom-icon")?s("slot",{name:"custom-icon"}):s("six-icon",{size:this.size==="large"?"medium":this.size},"watch_later");return s("span",{slot:"prefix",part:"icon",class:{prefix:!0,"prefix--right":this.iconPosition==="right"}},e)}render(){return s("div",{key:"19badfa42a1f8d5ef4b6b385780e88dbdceaa9e4",part:"container",ref:e=>this.wrapper=e,class:"timepicker__container"},s("six-input",{key:"7cd0508f766099136b7b85bd15dce64170ec3eca",ref:e=>this.inputElement=e,part:"input",onClick:()=>this.openPopup(),value:this.value,placeholder:this.placeholder,readonly:this.readonly,disabled:this.disabled,errorTextCount:this.errorTextCount,errorText:this.errorText,invalid:this.invalid,size:this.size,name:this.name,label:this.label,required:this.required,class:{"input--empty":this.value==="","input--hide":this.inline}},this.renderCustomIcon(),this.renderClearable(),p(this.host,"label")?s("span",{slot:"label"},s("slot",{name:"label"})):null,p(this.host,"error-text")?s("span",{slot:"error-text"},s("slot",{name:"error-text"})):null),this.open&&s("div",{ref:e=>this.popup=e,part:"popup",class:{timepicker__popup:!0,"timepicker__popup--is-up":this.placement==null?this.placement==="top":this.isPopupContentUp,"timepicker__popup--is-inline":this.inline}},...this.getContent(),this.getAmPmPicker()))}get host(){return b(this)}static get watchers(){return{value:["valueChanged"]}}};U.style=E;export{U as six_timepicker};
