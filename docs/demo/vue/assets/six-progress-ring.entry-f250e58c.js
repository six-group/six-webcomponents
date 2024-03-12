import{r as i,h as s}from"./index-3bbd6a8b.js";const o=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--track-color:var(--six-progress-track-color);--indicator-color:var(--six-progress-indicator-color);display:inline-flex}.progress-ring{display:inline-flex;align-items:center;justify-content:center;position:relative}.progress-ring__image{transform:rotate(-90deg);transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;user-select:none;font-family:var(--six-font-family)}",a=o,n=class{constructor(e){i(this,e),this.size=128,this.strokeWidth=4,this.percentage=0}handlePercentageChange(){this.updateProgress()}componentDidLoad(){this.updateProgress()}updateProgress(){var e;if(((e=this.indicator)===null||e===void 0?void 0:e.r)==null)return;const r=this.indicator.r.baseVal.value*2*Math.PI,t=r-this.percentage/100*r;this.indicator.style.strokeDasharray=`${r} ${r}`,this.indicator.style.strokeDashoffset=`${t}`}render(){return s("div",{key:"e502ccf39d3b246d03122b446949ee8380e1a2fa",part:"base",class:"progress-ring"},s("svg",{key:"d37581863e5a67e9f8a9cd058954581ee7e86a4a",class:"progress-ring__image",width:this.size,height:this.size},s("circle",{key:"022eeb124e217d93479cf7ead2cabb9169b9afd4",class:"progress-ring__track","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-this.strokeWidth*2,cx:this.size/2,cy:this.size/2}),s("circle",{key:"bc0fbfc9f1c872243ae2169d6412db47fb554e19",ref:e=>this.indicator=e,class:"progress-ring__indicator","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-this.strokeWidth*2,cx:this.size/2,cy:this.size/2})),s("span",{key:"9320211edc9c0b9b24124ffc7ffdac9d6d2f86a7",part:"label",class:"progress-ring__label"},s("slot",{key:"e7c3ce7e12a7691e461b73e6cbd2912dde27ac75"})))}static get watchers(){return{percentage:["handlePercentageChange"]}}};n.style=a;export{n as six_progress_ring};
