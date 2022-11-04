(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d013f7de"],{"32a1":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const s=e=>t=>Object.keys(e).every(i=>e[i]===t[i]);class n{constructor(){this.eventListeners=[],this.add=(e,t,i,s=null)=>{this.eventListeners.push({el:e,name:t,listener:i,identifier:s}),e.addEventListener(t,i)},this.remove=(e,t,i)=>{const n=s({el:e,name:t,listener:i});this.eventListeners=this.getFilteredEventListeners(n)},this.removeByIdentifier=e=>{const t=t=>t.identifier===e,i=void 0!==this.eventListeners.find(t);i&&(this.eventListeners=this.getFilteredEventListeners(t))},this.removeAll=()=>{while(this.eventListeners.length){const{el:e,name:t,listener:i}=this.eventListeners.pop();e.removeEventListener(t,i)}}}getFilteredEventListeners(e){return this.eventListeners.filter(t=>!e(t)||(t.el.removeEventListener(t.name,t.listener),!1))}}},7363:function(e,t,i){"use strict";i.r(t),i.d(t,"six_item_picker",(function(){return x}));var s=i("c8e7"),n=i("9e73"),r=i("988a"),o=i("32a1");const h=".item_picker__container{width:2.5em;display:flex;flex-wrap:wrap;justify-content:center}.item_picker__content{font-size:1.5rem}.item_picker__btn{cursor:pointer;width:2.5em;height:2.5em;display:flex;vertical-align:middle;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--six-color-web-rock-500)}.item_picker__btn:hover{background-color:var(--six-color-web-rock-100);border-radius:100%}.item_picker__btn:active{color:var(--six-color-web-rock-400)}.item_picker__btn--disabled{color:var(--six-color-web-rock-300);cursor:not-allowed}.item_picker__btn--disabled:hover{background-color:initial}.item_picker__btn--disabled:active{color:var(--six-color-web-rock-300)}",a=65,u=26,l=(()=>{const e=Array.from(Array(u)).map((e,t)=>t+a),t={},i=e.map((e,i)=>{const s=String.fromCharCode(e);return t[s]=i,s});return{alphabet:i,letterIndexes:t}})(),d=(()=>{const e=[],t={};for(let i=0;i<l.alphabet.length;i++){const s=l.alphabet[i].toLowerCase();t[s]=e.length,e.push(s)}return{alphabet:e,letterIndexes:t}})(),m=(()=>{const e=[],t={};for(let i=0;i<l.alphabet.length;i++){const s=l.alphabet[i];t[s]=e.length,e.push(s);const n=d.alphabet[i];t[n]=e.length,e.push(n)}return{alphabet:e,letterIndexes:t}})(),c=e=>{const t={};for(let i=0;i<(null===e||void 0===e?void 0:e.length);i++)t[e[i]]=i;return t},p="[SIX-ITEM-PICKER]",v=(e,t)=>e-t,b=(e,t)=>e+t,g="debounced-item-picker";let x=class{constructor(e){Object(s["i"])(this,e),this.sixChange=Object(s["e"])(this,"six-item-picker-change",7),this.sixChangeDebounced=Object(s["e"])(this,"six-item-picker-change-debounced",7),this.eventListeners=new o["a"],this.value="",this.type=n["a"].NUMBER,this.roundtrip=!0,this.step=1,this.padded=!1,this.paddingLength=2,this.paddingChar="0",this.paddingDirection=n["b"].BEFORE,this.timeout=r["a"],this.interval=r["c"],this.debounce=r["a"],this._items=[],this.handleSixItemPickerChangeDebounced=()=>{this.sixChangeDebounced.emit(this.value)}}handleValueChange(){this.setup()}debounceChanged(){this.eventListeners.removeByIdentifier(g),this.eventListeners.add(this.host,"six-item-picker-change",Object(r["b"])(this.handleSixItemPickerChangeDebounced,this.debounce),g)}handleSetChange(){this.setup(),this.min=this._items[0],this.max=this.getLastStringItem()}componentWillLoad(){this.setup()}componentDidLoad(){this.eventListeners.add(this.host,"six-item-picker-change",Object(r["b"])(this.handleSixItemPickerChangeDebounced,this.debounce),g)}disconnectedCallback(){this.eventListeners.removeAll()}setup(){this.isNumber()?this.setupNumberItems():this.setUpStringItems()}setupNumberItems(){var e;this.isInvalidNumber()&&(console.warn(`${p} Expected number but value is not a number: "${this.value}"`),console.info(p+" Will set value to either minimum or if not provided to zero."),this.value=null!==(e=this.min)&&void 0!==e?e:0)}setUpStringItems(){if(this._items=this.getItems(),!this._items)return void console.warn(p+": abort setup because no items were found.");this._itemIndexes=this.getItemIndexes();const e=void 0===this._items.find(e=>String(e)===String(this.value));if(e&&(console.warn(`${p} Expected item from item set but value was not found in set: "${this.value}"`),console.info(`${p} Will set value to either minimum or if not provided to "${this._items[0]}".`),this.value=this._items[0]),void 0===this.min&&(this.roundtrip||(console.warn(p+" Expected a min value"),console.info(`${p} Will set min value to ${this._items[0]}`)),this.min=this._items[0]),void 0===this.max){const e=this.getLastStringItem();this.roundtrip||(console.warn(p+" Expected a min value if roundtrip is enabled"),console.info(`${p} Will set min value to ${e}`)),this.max=e}}getLastStringItem(){return this._items[this._items.length-1]}getItems(){return{[n["a"].LETTER]:m.alphabet,[n["a"].CAPITAL_LETTER]:l.alphabet,[n["a"].LOWER_LETTER]:d.alphabet,[n["a"].CUSTOM]:this.items}[this.type]}getItemIndexes(){return this.type===n["a"].CUSTOM?c(this.items):{[n["a"].LETTER]:m.letterIndexes,[n["a"].CAPITAL_LETTER]:l.letterIndexes,[n["a"].LOWER_LETTER]:d.letterIndexes}[this.type]}previousItem(){this.isNumber()?this.previousNumber():this.previousStringItem(),this.sixChange.emit(this.value)}previousNumber(){this.changeValue({isNextItemAllowed:()=>!this.isPreviousNumberDisabled(),getNextItem:()=>Number(this.value)-this.step,getRoundtripItem:()=>Number(this.max),isRoundtripPossible:()=>void 0===this.max&&this.roundtrip})}previousStringItem(){const e=this.value,t=this.min;this.changeValue({isNextItemAllowed:()=>void 0===t||this.getStringItemIndex(e)>this.getStringItemIndex(t),getNextItem:()=>this.getNextItemByOperation(v),getRoundtripItem:()=>this.max,isRoundtripPossible:()=>void 0===this.max&&this.roundtrip})}nextItem(){this.isNumber()?this.nextNumber():this.nextStringItem(),this.sixChange.emit(this.value)}nextNumber(){this.changeValue({isNextItemAllowed:()=>!this.isNextNumberDisabled(),getNextItem:()=>Number(this.value)+this.step,getRoundtripItem:()=>Number(this.min),isRoundtripPossible:()=>void 0===this.min&&this.roundtrip})}getStringItemIndex(e){return this._itemIndexes[e]}nextStringItem(){const e=this.value,t=this.max;this.changeValue({isNextItemAllowed:()=>void 0===t||this.getStringItemIndex(e)<this.getStringItemIndex(t),getNextItem:()=>this.getNextItemByOperation(b),getRoundtripItem:()=>this.min,isRoundtripPossible:()=>void 0===this.min&&this.roundtrip})}getNextItemByOperation(e){const t=this.value,i=e(this.getStringItemIndex(t),this.step),s=this._items.length,n=(i%s+s)%s;return this._items[n]}changeValue(e){e.isNextItemAllowed()?this.value=e.getNextItem():e.isRoundtripPossible()?console.error(p+" Item picker is expected to perform a roundtrip, but either max or min value is missing so a roundtrip is not possible"):this.roundtrip?this.value=e.getRoundtripItem():console.warn(p+" Roundtrip is not allowed, but was still triggered, please report this issue to the developer of six-item-picker")}isNumber(){return this.type===n["a"].NUMBER}isInvalidNumber(){return""===this.value||!!isNaN(this.value)}isNextDisabled(){return!this.roundtrip&&(this.isNumber()?this.isNextNumberDisabled():!this._itemIndexes||this._itemIndexes[String(this.value)]+this.step>this._itemIndexes[String(this.max)])}isNextNumberDisabled(){var e;return Number(this.value)+this.step>(null!==(e=this.max)&&void 0!==e?e:1/0)}isPrevDisabled(){return!this.roundtrip&&(this.isNumber()?this.isPreviousNumberDisabled():!this._itemIndexes||this._itemIndexes[String(this.value)]-this.step<this._itemIndexes[String(this.min)])}isPreviousNumberDisabled(){var e;return Number(this.value)-this.step<(null!==(e=this.min)&&void 0!==e?e:-1/0)}onMouseDownNext(){this.isNextDisabled()||(this.nextItem(),this._timeoutNext=setTimeout(()=>{this._intervalNext=setInterval(()=>{this.nextItem()},this.interval)},this.timeout))}onMouseUpNext(){clearTimeout(this._timeoutNext),clearInterval(this._intervalNext)}onMouseDownPrev(){this.isPrevDisabled()||(this.previousItem(),this._timeoutPrev=setTimeout(()=>{this._intervalPrev=setInterval(()=>{this.previousItem()},this.interval)},this.timeout))}onMouseUpPrev(){clearTimeout(this._timeoutPrev),clearInterval(this._intervalPrev)}getFormattedValue(){return void 0===this.value||null===this.value?this.value:this.padded?this.paddingDirection===n["b"].BEFORE?String(this.value).padStart(this.paddingLength,this.paddingChar):this.paddingDirection===n["b"].AFTER?String(this.value).padEnd(this.paddingLength,this.paddingChar):this.value:this.value}render(){return Object(s["g"])("div",{part:"container",class:"item_picker__container"},Object(s["g"])("div",{part:"up",class:{item_picker__btn:!0,"item_picker__btn--disabled":this.isNextDisabled()},onMouseDown:()=>this.onMouseDownNext(),onMouseUp:()=>this.onMouseUpNext()},Object(s["g"])("six-icon",{size:"large"},"expand_less")),Object(s["g"])("div",{part:"content",class:"item_picker__content"},this.getFormattedValue()),Object(s["g"])("div",{part:"down",class:{item_picker__btn:!0,"item_picker__btn--disabled":this.isPrevDisabled()},onMouseDown:()=>this.onMouseDownPrev(),onMouseUp:()=>this.onMouseUpPrev()},Object(s["g"])("six-icon",{size:"large"},"expand_more")))}get host(){return Object(s["f"])(this)}static get watchers(){return{value:["handleValueChange"],debounce:["debounceChanged"],items:["handleSetChange"]}}};x.style=h},"988a":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o}));const s=35,n=300,r=(e,t=n)=>{let i;return(...s)=>{clearTimeout(i),i=setTimeout(()=>e.apply(void 0,s),t)}},o=(e,t)=>{const i=e._original||e,s=r(i.emit.bind(i),t);return{_original:e,emit:s}}},"9e73":function(e,t,i){"use strict";var s,n;i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n})),function(e){e["NUMBER"]="number",e["LETTER"]="letter",e["CAPITAL_LETTER"]="capital-letter",e["LOWER_LETTER"]="lower-letter",e["CUSTOM"]="custom"}(s||(s={})),function(e){e["BEFORE"]="before",e["AFTER"]="after"}(n||(n={}))}}]);
//# sourceMappingURL=chunk-d013f7de.403c14d7.js.map