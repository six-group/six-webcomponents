(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[46],{76:function(r,e,t){"use strict";t.r(e),t.d(e,"six_progress_bar",(function(){return s}));var i=t(14),a=t(15),o=t(21),s=function(){function r(e){Object(i.a)(this,r),Object(o.i)(this,e),this.percentage=0,this.indeterminate=!1}return Object(a.a)(r,[{key:"render",value:function(){return Object(o.g)("div",{part:"base",class:{"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate},role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.indeterminate?null:this.percentage},Object(o.g)("div",{part:"indicator",class:"progress-bar__indicator",style:{width:"".concat(this.percentage,"%")}},!this.indeterminate&&Object(o.g)("span",{part:"label",class:"progress-bar__label"},Object(o.g)("slot",null))))}}]),r}();s.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--height:16px;--track-color:var(--six-progress-track-color);--indicator-color:var(--six-progress-indicator-color);--label-color:var(--six-progress-label-color);display:block}.progress-bar{position:relative;background-color:var(--track-color);height:var(--height);border-radius:var(--sl-border-radius-pill);overflow:hidden}.progress-bar__indicator{height:100%;font-family:var(--six-font-sans);font-size:12px;font-weight:var(--six-font-weight-normal);background-color:var(--indicator-color);color:var(--label-color);text-align:center;line-height:var(--height);white-space:nowrap;overflow:hidden;transition:400ms width, 400ms background-color;user-select:none}.progress-bar--indeterminate .progress-bar__indicator{position:absolute;animation:indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1)}@keyframes indeterminate{0%{left:-50%;width:50%}75%,100%{left:100%;width:50%}}"}}]);
//# sourceMappingURL=46.eb6c3bdd.chunk.js.map