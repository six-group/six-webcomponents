(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba193"],{3682:function(t,s,r){"use strict";r.r(s),r.d(s,"six_progress_ring",(function(){return o}));var e=r("c8e7");const i=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--track-color:var(--six-progress-track-color);--indicator-color:var(--six-progress-indicator-color);display:inline-flex}.progress-ring{display:inline-flex;align-items:center;justify-content:center;position:relative}.progress-ring__image{transform:rotate(-90deg);transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;user-select:none;font-family:var(--six-font-family)}";let o=class{constructor(t){Object(e["i"])(this,t),this.size=128,this.strokeWidth=4}handlePercentageChange(){this.updateProgress()}componentDidLoad(){this.updateProgress()}updateProgress(){if(!this.indicator.r)return;const t=this.indicator.r.baseVal.value,s=2*t*Math.PI,r=s-this.percentage/100*s;this.indicator.style.strokeDasharray=`${s} ${s}`,this.indicator.style.strokeDashoffset=""+r}render(){return Object(e["g"])("div",{part:"base",class:"progress-ring"},Object(e["g"])("svg",{class:"progress-ring__image",width:this.size,height:this.size},Object(e["g"])("circle",{class:"progress-ring__track","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-2*this.strokeWidth,cx:this.size/2,cy:this.size/2}),Object(e["g"])("circle",{ref:t=>this.indicator=t,class:"progress-ring__indicator","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-2*this.strokeWidth,cx:this.size/2,cy:this.size/2})),Object(e["g"])("span",{part:"label",class:"progress-ring__label"},Object(e["g"])("slot",null)))}static get watchers(){return{percentage:["handlePercentageChange"]}}};o.style=i}}]);
//# sourceMappingURL=chunk-2d0ba193.79f33b8c.js.map