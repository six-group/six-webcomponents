import{r as e,h as t,H as a,g as i}from"./index-c875b36f.js";const o=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:block;font-family:var(--six-font-family)}.tab-panel{border:solid 1px transparent;padding:20px 20px}";let n=0;const r=class{constructor(s){e(this,s),this.componentId=`tab-panel-${++n}`,this.name="",this.active=!1}render(){return t(a,{id:this.host.id||this.componentId,style:{display:this.active?"block":"none"}},t("div",{part:"base",class:"tab-panel",role:"tabpanel","aria-selected":this.active?"true":"false","aria-hidden":this.active?"false":"true"},t("slot",null)))}get host(){return i(this)}};r.style=o;export{r as six_tab_panel};
