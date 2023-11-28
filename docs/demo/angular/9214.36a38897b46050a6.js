"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[9214],{9214:(x,d,c)=>{c.r(d),c.d(d,{six_header:()=>p});var l=c(5861),e=c(9265),_=c(7418),n=c(1792),r=function(t){return t[t.None=0]="None",t[t.Search=1]="Search",t[t.AppSwitcher=2]="AppSwitcher",t[t.Profile=3]="Profile",t}(r||{}),s=function(t){return t.Search="search-field",t.Notifications="notifications",t.AppSwitcher="app-switcher-menu",t.Profile="profile-menu",t.Logo="logo",t}(s||{});const p=class{constructor(t){(0,e.r)(this,t),this.sixAppNameClicked=(0,e.c)(this,"six-header-app-name-clicked",7),this.sixAppSwitcherSelect=(0,e.c)(this,"six-header-app-switcher-select",7),this.sixProfileSelect=(0,e.c)(this,"six-header-profile-select",7),this.sixHamburgerClick=(0,e.c)(this,"six-header-hamburger-menu-clicked",7),this.sixLogoClick=(0,e.c)(this,"six-header-logo-clicked",7),this.sixSearchFieldToggle=(0,e.c)(this,"six-header-search-field-toggle",7),this.eventListeners=new _.E,this.setupMenu=i=>{null!=i&&this.eventListeners.add(i,"click",()=>this.sixHamburgerClick.emit())},this.setupLogo=i=>{!this.clickableLogo||null==i||this.eventListeners.add(i,"click",()=>this.sixLogoClick.emit())},this.setupProfile=i=>{null!=i&&(this.eventListeners.add(i,"six-dropdown-show",this.selectSection(r.Profile)),this.eventListeners.add(i,"six-dropdown-hide",this.selectSection(r.None)),this.eventListeners.add(i,"six-menu-item-selected",a=>{const{name:o,item:h}=a.detail;this.sixProfileSelect.emit({selectedLabel:h.innerText,name:o,item:h})}))},this.setupAppSwitcher=i=>{null!=i&&(this.eventListeners.add(i,"six-dropdown-show",this.selectSection(r.AppSwitcher)),this.eventListeners.add(i,"six-dropdown-hide",this.selectSection(r.None)),this.eventListeners.add(i,"six-menu-item-selected",a=>{const{name:o,item:h}=a.detail;this.selectedApp=h.innerText,this.sixAppSwitcherSelect.emit({selectedLabel:h.innerText,name:o,item:h})}))},this.appNameClicked=()=>this.sixAppNameClicked.emit(),this.computeSearchOpenState=()=>{this.selectedSection=this.openSearch?r.Search:r.None},this.shiftContent=!1,this.openHamburgerMenu=!1,this.openSearch=!1,this.clickableLogo=!1,this.selectedApp=void 0,this.selectedSection=void 0}handleOpenSearchChange(){this.computeSearchOpenState()}setSearchOpenState(t){var i=this;return(0,l.Z)(function*(){i.selectedSection!==r.Search||t?t&&i.selectedSection!==r.Search&&(i.selectedSection=r.Search):i.selectedSection=r.None})()}getIsSearchOpen(){var t=this;return(0,l.Z)(function*(){return t.selectedSection===r.Search})()}hasSlot(t){return null!=this.slots&&this.slots[t]}isSectionSelected(t){return t===this.selectedSection}selectSection(t){return()=>this.selectedSection=t}toggleSearch(){var t=this;const i=this.selectedSection!==r.Search;this.selectedSection=this.selectedSection===r.Search?r.None:r.Search,this.sixSearchFieldToggle.emit({visible:i}),this.selectedSection===r.Search&&setTimeout((0,l.Z)(function*(){var a,o;const h=(0,n.g)(t.host,s.Search);null===(o=null===(a=h?.shadowRoot)||void 0===a?void 0:a.querySelector("six-input"))||void 0===o||o.setFocus()}),50)}componentWillLoad(){this.slots={[s.Search]:(0,n.h)(this.host,s.Search),[s.Notifications]:(0,n.h)(this.host,s.Notifications),[s.AppSwitcher]:(0,n.h)(this.host,s.AppSwitcher),[s.Profile]:(0,n.h)(this.host,s.Profile),[s.Logo]:(0,n.h)(this.host,s.Logo)},this.hasSlot(s.AppSwitcher)&&(this.selectedApp=this.getSelectedApp()),this.hasSlot(s.Search)&&this.computeSearchOpenState()}getSelectedApp(){var t;const i=(0,n.g)(this.host,s.AppSwitcher);if(null==i)return;const o=Array.from(i.querySelectorAll("six-menu-item")).find(h=>h.hasAttribute("checked"));return null!==(t=o?.textContent)&&void 0!==t?t:void 0}disconnectedCallback(){this.eventListeners.removeAll()}render(){const t=this.hasSlot(s.Search)&&(0,e.h)("section",{class:{"six-header__search":!0,"six-header__search--open":this.isSectionSelected(r.Search)}},(0,e.h)("six-icon-button",{name:"search",onClick:()=>this.toggleSearch(),"data-testid":"search-trigger"})),i=this.hasSlot(s.Notifications)&&(0,e.h)("section",{class:"six-header__notification"},(0,e.h)("slot",{name:s.Notifications})),a=this.hasSlot(s.AppSwitcher)&&(0,e.h)("section",{class:{"six-header__app-switcher":!0,"six-header__app-switcher--open":this.isSectionSelected(r.AppSwitcher)}},(0,e.h)("a",{onClick:this.appNameClicked,class:"six-header__selected-app"},this.selectedApp),(0,e.h)("six-dropdown",{distance:13,skidding:20,placement:"bottom-end",ref:this.setupAppSwitcher},(0,e.h)("six-icon-button",{name:"apps",slot:"trigger"}),(0,e.h)("slot",{name:s.AppSwitcher}))),o=this.hasSlot(s.Profile)&&(0,e.h)("section",{class:{"six-header__profile":!0,"six-header__profile--open":this.isSectionSelected(r.Profile)}},(0,e.h)("six-dropdown",{distance:17,skidding:20,placement:"bottom-end",ref:this.setupProfile},(0,e.h)("slot",{name:"profile-avatar",slot:"trigger"}),(0,e.h)("slot",{name:"profile-menu"}))),h=this.hasSlot(s.Logo)?(0,e.h)("section",null,(0,e.h)("slot",{name:"logo"})):(0,e.h)("section",{class:{"six-header__logo":!0,"six-header__logo--clickable":this.clickableLogo},ref:this.setupLogo},(0,e.h)("svg",{height:"20",viewBox:"0 0 90 26",xmlns:"http://www.w3.org/2000/svg"},(0,e.h)("title",null,"SIX"),(0,e.h)("g",{fill:"#DE3919","fill-rule":"nonzero"},(0,e.h)("path",{d:"m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525"}),(0,e.h)("path",{d:"m42.16.324h5.21v24.806h-5.21z"}),(0,e.h)("path",{d:"m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545"}))));return(0,e.h)(e.H,null,(0,e.h)("header",{class:"six-header"},(0,e.h)("section",{class:"six-header__menu"},(0,e.h)("six-icon-button",{name:this.openHamburgerMenu?"menu_open":"menu",ref:this.setupMenu})),h,(0,e.h)("section",{class:"six-header__placeholder"}),(0,e.h)("section",{class:"six-header__custom"},(0,e.h)("slot",null)),t,i,a,o),(0,e.h)("div",{class:{"six-header__search-field":!0,"six-header__search-field--visible":this.isSectionSelected(r.Search),"six-header__search-field--shift-content":this.shiftContent}},(0,e.h)("slot",{name:s.Search})))}static get assetsDirs(){return["assets"]}get host(){return(0,e.g)(this)}static get watchers(){return{openSearch:["handleOpenSearchChange"]}}};p.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;user-select:none;--search-border-width:1px}::slotted(six-search-field){position:absolute;margin-left:var(--search-border-width);width:calc(100% - 2 * var(--search-border-width))}.six-header{display:flex;width:100%;height:3.75rem;background-color:var(--six-header-background-color);align-items:center;flex-wrap:wrap;box-shadow:var(--six-shadow-x-large);border-bottom:var(--six-header-border-with) solid var(--six-header-border-color)}.six-header__logo{width:6rem;margin-top:0.15rem}.six-header__logo--clickable{cursor:pointer}.six-header__placeholder{flex:1}.six-header__menu,.six-header__logo,.six-header__custom,.six-header__search,.six-header__notification,.six-header__app-switcher,.six-header__profile{height:calc(100% - 0.25rem - 1px);padding:0 1.25rem;display:flex;align-items:center;border-bottom:solid 0.25rem transparent}.six-header__menu--open,.six-header__logo--open,.six-header__custom--open,.six-header__search--open,.six-header__notification--open,.six-header__app-switcher--open,.six-header__profile--open{border-bottom:solid 0.25rem var(--six-header-border-color-open)}.six-header__selected-app{cursor:pointer;font-size:0.9rem;font-weight:600;padding-right:0;padding-left:0.3rem}.six-header__selected-app:hover{color:var(--six-header-selected-app-color-hover)}.six-header__search-field{opacity:0;transform:scale(0.9);transition:var(--six-transition-fast) opacity, var(--six-transition-fast) transform;display:none}.six-header__search-field--visible{opacity:1;transform:none;display:block}.six-header__search-field--shift-content.six-header__search-field--visible{height:2.65rem;transition:var(--six-transition-fast) height}.six-header__search-field--shift-content:not(.six-header__search-field--visible){height:0;transition:var(--six-transition-fast) height}"}}]);