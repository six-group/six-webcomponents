import{r as i,c as n,h as s}from"../app.e11adc8d.js";import"./framework.57535aa4.js";import"./theme.48150ed6.js";const r=".language-switcher__container{display:flex}.language-switcher__separator{padding:0 0.25rem}.language-switcher__label{cursor:pointer}.language-switcher__label:hover{color:var(--six-color-web-rock-600)}.language-switcher__label--selected{color:var(--six-color-black);text-decoration:underline}",g=r,c=["EN","DE","ES"],l=class{constructor(e){i(this,e),this.sixChange=n(this,"six-language-switcher-change",7),this.handleLanguageSwitching=(t,a)=>()=>{a!==void 0?this.sixChange.emit(a):this.sixChange.emit(t),this.selected=t},this.selected=void 0,this.languages=c}handleChangesLanguages(e){if(!Array.isArray(e))throw new Error("languages is expected to be an array");this.updateSelectedLanguage()}componentWillLoad(){this.selected===void 0&&this.updateSelectedLanguage()}updateSelectedLanguage(){const e=this.languages[0];typeof e=="string"?(this.selected=e,this.sixChange.emit(this.selected)):(this.selected=e.key,this.sixChange.emit(e.value))}render(){return s("div",{key:"64f80894523a4b03643949135f18b553cd0517b6",part:"container",class:"language-switcher__container"},this.languages.map((e,t)=>{const a=typeof e=="string"?e:e.key;return s("div",{onClick:this.handleLanguageSwitching(a,typeof e=="string"?e:e.value)},s("span",{part:"label",class:{"language-switcher__label":!0,"language-switcher__label--selected":this.selected===a}},a),t<this.languages.length-1&&s("span",{part:"separator",class:"language-switcher__separator"},"|"))}))}static get watchers(){return{languages:["handleChangesLanguages"]}}};l.style=g;export{l as six_language_switcher};
