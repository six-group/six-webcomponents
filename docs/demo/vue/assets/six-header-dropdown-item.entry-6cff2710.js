import{r as n,h as e,H as a,g as h}from"./index-1f0a2d87.js";import{g as c}from"./slot-56531341-2ae944bc.js";const g=":host{height:100%;display:flex;align-items:center;box-sizing:border-box;padding:0 var(--six-spacing-large);border-bottom:solid var(--six-header-border-height) transparent;border-top:solid var(--six-header-border-height) transparent;transition:var(--six-transition-fast) border-color}:host(.six-header-dropdown-item--active){border-bottom:solid var(--six-header-border-height) var(--six-header-border-color-open);transition:var(--six-transition-fast) border-color}",l=g,p=class{constructor(t){n(this,t),this.active=!1}connectedCallback(){this.updateDropdownDistance()}componentDidLoad(){this.updateDropdownDistance()}render(){return e(a,{key:"fc1c8ffcb391ed1d9ba3d0fd27e8c599e169b3d1",class:{"six-header-dropdown-item--active":this.active}},e("six-dropdown",{key:"d8620f944a5b888a52880d7977f49edf0353b6ad",ref:t=>this.dropdownElement=t,hoist:!0,skidding:0,placement:"bottom-end","onSix-dropdown-show":()=>this.active=!0,"onSix-dropdown-hide":()=>this.active=!1},e("slot",{key:"bf1852e25863a45f9c1aa047cd9d9ceb5d7eba81",slot:"trigger",name:"trigger"}),e("slot",{key:"3461d0e1d484326400db97087689c6375269a974"})))}updateDropdownDistance(){const t=c(this.host,"trigger"),o=this.host.closest("six-header");if(t!=null&&o!=null&&this.dropdownElement!=null&&this.host!=null){const r=this.host.getBoundingClientRect().right,i=t.getBoundingClientRect().right,s=o.getBoundingClientRect().bottom,d=t.getBoundingClientRect().bottom;this.dropdownElement.distance=s-d+3,this.dropdownElement.skidding=r-i}}get host(){return h(this)}};p.style=l;export{p as six_header_dropdown_item};
