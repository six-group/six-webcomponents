"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[5231],{5231:(d,r,e)=>{e.r(r),e.d(r,{six_sidebar_item_group:()=>o});var s=e(9265),h=e(1792);const o=class{constructor(i){(0,s.r)(this,i),this.provideSlot=t=>this.summaryIconHasContent?(0,s.h)("div",{slot:t},(0,s.h)("slot",{name:t})):(0,s.h)("slot",{name:t,onSlotchange:()=>{var a;const n=null===(a=this.host.shadowRoot)||void 0===a?void 0:a.querySelector(`slot[name="${t}"]`);null!=n&&(this.summaryIconHasContent=n.assignedNodes().length>0)}}),this.hasItems=!1,this.name="",this.icon="",this.value="",this.open=!1,this.summaryIcon=void 0,this.summaryIconHasContent=!1,this.href=void 0}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this)}componentWillLoad(){this.handleSlotChange()}handleSlotChange(){this.hasItems=(0,h.h)(this.host)}isSubgroup(){var i;return null!=(null===(i=this.host.parentElement)||void 0===i?void 0:i.closest("six-sidebar-item-group"))}renderAsHref(){return null!=this.href&&!this.hasItems}render(){const i=(0,s.h)("six-details",{class:{"six-sidebar-item-group":!0,"six-sidebar-item-group--childless":!this.hasItems,"six-sidebar-item-group--subgroup":this.isSubgroup()},inline:!0,open:this.open,"summary-icon":this.summaryIcon,hasContent:this.hasItems},(0,s.h)("div",{slot:"summary"},(0,s.h)("div",{class:"six-sidebar-details__header"},this.icon&&(0,s.h)("six-icon",{class:"six-sidebar-details__header-icon"},this.icon),this.name)),this.provideSlot("summary-icon"),(0,s.h)("slot",null));return this.renderAsHref()?(0,s.h)("a",{class:"six-sidebar-details__link",href:this.href},i):i}get host(){return(0,s.g)(this)}};o.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.six-sidebar-item-group{--horizontal-padding:var(--six-spacing-x-large)}.six-sidebar-item-group--childless::part(content){padding:0 !important}.six-sidebar-item-group--subgroup::part(header){background-color:transparent !important}.six-sidebar-item-group__header-icon{margin-left:16px;transform:translate(0px, -3px)}.six-sidebar-details__header{display:flex}.six-sidebar-details__header-icon{margin-right:1em}.six-sidebar-details__link{text-decoration:none;display:block;color:inherit;width:100%}"}}]);