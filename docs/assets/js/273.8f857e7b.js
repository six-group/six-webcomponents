(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{626:function(e,t,l){"use strict";l.r(t);var n={name:"docs-demo-six-select-239",mounted(){(()=>{const e=document.getElementById("autocomplete-example");e.addEventListener("six-select-change",t=>{if(t.detail.isSelected)return;(e=>{let t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild})(e);const l=t.detail.value||"All Values";new Array(5).fill("").forEach((t,n)=>{e.append(((e,t)=>{const l=document.createElement("six-menu-item");return l.innerText=t,l.setAttribute("value",e),l})(`option ${l} ${n}`,`Option ${l} ${n}`))})})})()}},a=l(10),s=Object(a.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"demo my-app"},[e("six-select",{attrs:{id:"autocomplete-example",autocomplete:"",clearable:""}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);