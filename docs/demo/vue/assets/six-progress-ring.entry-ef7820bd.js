import{r as i,h as r}from"./index-c875b36f.js";const o=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--track-color:var(--six-progress-track-color);--indicator-color:var(--six-progress-indicator-color);display:inline-flex}.progress-ring{display:inline-flex;align-items:center;justify-content:center;position:relative}.progress-ring__image{transform:rotate(-90deg);transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;user-select:none;font-family:var(--six-font-family)}",n=class{constructor(s){i(this,s),this.size=128,this.strokeWidth=4,this.percentage=0}handlePercentageChange(){this.updateProgress()}componentDidLoad(){this.updateProgress()}updateProgress(){var s;if(((s=this.indicator)===null||s===void 0?void 0:s.r)==null)return;const t=this.indicator.r.baseVal.value*2*Math.PI,e=t-this.percentage/100*t;this.indicator.style.strokeDasharray=`${t} ${t}`,this.indicator.style.strokeDashoffset=`${e}`}render(){return r("div",{part:"base",class:"progress-ring"},r("svg",{class:"progress-ring__image",width:this.size,height:this.size},r("circle",{class:"progress-ring__track","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-this.strokeWidth*2,cx:this.size/2,cy:this.size/2}),r("circle",{ref:s=>this.indicator=s,class:"progress-ring__indicator","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-this.strokeWidth*2,cx:this.size/2,cy:this.size/2})),r("span",{part:"label",class:"progress-ring__label"},r("slot",null)))}static get watchers(){return{percentage:["handlePercentageChange"]}}};n.style=o;export{n as six_progress_ring};
