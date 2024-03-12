"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[9214],{9214:(b,l,n)=>{n.r(l),n.d(l,{six_header:()=>p});var d=n(5861),t=n(5856),f=n(7418),c=n(5730),r=function(e){return e[e.None=0]="None",e[e.Search=1]="Search",e[e.AppSwitcher=2]="AppSwitcher",e[e.Profile=3]="Profile",e}(r||{}),s=function(e){return e.Search="search-field",e.Notifications="notifications",e.AppSwitcher="app-switcher-menu",e.Profile="profile-menu",e.Logo="logo",e}(s||{});const p=class{constructor(e){(0,t.r)(this,e),this.sixAppNameClicked=(0,t.c)(this,"six-header-app-name-clicked",7),this.sixAppSwitcherSelect=(0,t.c)(this,"six-header-app-switcher-select",7),this.sixProfileSelect=(0,t.c)(this,"six-header-profile-select",7),this.sixHamburgerClick=(0,t.c)(this,"six-header-hamburger-menu-clicked",7),this.sixLogoClick=(0,t.c)(this,"six-header-logo-clicked",7),this.sixSearchFieldToggle=(0,t.c)(this,"six-header-search-field-toggle",7),this.eventListeners=new f.E,this.setupMenu=i=>{null!=i&&this.eventListeners.add(i,"click",()=>this.sixHamburgerClick.emit())},this.setupLogo=i=>{!this.clickableLogo||null==i||this.eventListeners.add(i,"click",()=>this.sixLogoClick.emit())},this.setupProfile=i=>{null!=i&&(this.eventListeners.add(i,"six-dropdown-show",this.selectSection(r.Profile)),this.eventListeners.add(i,"six-dropdown-hide",this.selectSection(r.None)),this.eventListeners.add(i,"six-menu-item-selected",h=>{const{name:o,item:a}=h.detail;this.sixProfileSelect.emit({selectedLabel:a.innerText,name:o,item:a})}))},this.setupAppSwitcher=i=>{null!=i&&(this.eventListeners.add(i,"six-dropdown-show",this.selectSection(r.AppSwitcher)),this.eventListeners.add(i,"six-dropdown-hide",this.selectSection(r.None)),this.eventListeners.add(i,"six-menu-item-selected",h=>{const{name:o,item:a}=h.detail;this.selectedApp=a.innerText,this.sixAppSwitcherSelect.emit({selectedLabel:a.innerText,name:o,item:a})}))},this.appNameClicked=()=>this.sixAppNameClicked.emit(),this.computeSearchOpenState=()=>{this.selectedSection=this.openSearch?r.Search:r.None},this.shiftContent=!1,this.hideHamburgerMenu=!1,this.openHamburgerMenu=!1,this.openSearch=!1,this.clickableLogo=!1,this.selectedApp=void 0,this.selectedSection=void 0}handleOpenSearchChange(){this.computeSearchOpenState()}setSearchOpenState(e){var i=this;return(0,d.Z)(function*(){i.selectedSection!==r.Search||e?e&&i.selectedSection!==r.Search&&(i.selectedSection=r.Search):i.selectedSection=r.None})()}getIsSearchOpen(){var e=this;return(0,d.Z)(function*(){return e.selectedSection===r.Search})()}hasSlot(e){return null!=this.slots&&this.slots[e]}isSectionSelected(e){return e===this.selectedSection}selectSection(e){return()=>this.selectedSection=e}toggleSearch(){var e=this;const i=this.selectedSection!==r.Search;this.selectedSection=this.selectedSection===r.Search?r.None:r.Search,this.sixSearchFieldToggle.emit({visible:i}),this.selectedSection===r.Search&&setTimeout((0,d.Z)(function*(){var h,o;const a=(0,c.g)(e.host,s.Search);null===(o=null===(h=a?.shadowRoot)||void 0===h?void 0:h.querySelector("six-input"))||void 0===o||o.setFocus()}),50)}componentWillLoad(){this.slots={[s.Search]:(0,c.h)(this.host,s.Search),[s.Notifications]:(0,c.h)(this.host,s.Notifications),[s.AppSwitcher]:(0,c.h)(this.host,s.AppSwitcher),[s.Profile]:(0,c.h)(this.host,s.Profile),[s.Logo]:(0,c.h)(this.host,s.Logo)},this.hasSlot(s.AppSwitcher)&&this.updateSelectedApp(),this.hasSlot(s.Search)&&this.computeSearchOpenState()}connectedCallback(){const e=(0,c.g)(this.host,s.AppSwitcher);e&&(this.mutationObserver=new MutationObserver(i=>{i.some(h=>"childList"===h.type||"attributes"===h.type)&&this.updateSelectedApp()}),this.mutationObserver.observe(e,{attributes:!0,childList:!0,subtree:!0}))}updateSelectedApp(){var e;const i=(0,c.g)(this.host,s.AppSwitcher);if(null==i)return;const o=Array.from(i.querySelectorAll("six-menu-item")).find(a=>a.hasAttribute("checked")&&"false"!==a.getAttribute("checked"));this.selectedApp=null!==(e=o?.textContent)&&void 0!==e?e:void 0}disconnectedCallback(){var e;this.eventListeners.removeAll(),null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){const e=!this.hideHamburgerMenu&&(0,t.h)("section",{key:"fb78ad479f72a484bd7f7d976106628ad2801f63",class:"six-header__menu"},(0,t.h)("six-icon-button",{key:"80bf31342d363b5fe1cff6bede3796dda10110cf",name:this.openHamburgerMenu?"menu_open":"menu",ref:this.setupMenu})),i=this.hasSlot(s.Search)&&(0,t.h)("section",{key:"6c31756cf58b9804ef66af83ff96db81d480827b",class:{"six-header__search":!0,"six-header__search--open":this.isSectionSelected(r.Search)}},(0,t.h)("six-icon-button",{key:"3af9901f916fcdef235232075784a8e174516df5",name:"search",onClick:()=>this.toggleSearch(),"data-testid":"search-trigger"})),h=this.hasSlot(s.Notifications)&&(0,t.h)("section",{key:"f987048f9a787006209195e08e1410287173b1db",class:"six-header__notification"},(0,t.h)("slot",{key:"6b868840d2c5da71d144fe70ee3d788a9058946e",name:s.Notifications})),o=this.hasSlot(s.AppSwitcher)&&(0,t.h)("section",{key:"319335bd8baedff666831f02b1e069e90594caff",class:{"six-header__app-switcher":!0,"six-header__app-switcher--open":this.isSectionSelected(r.AppSwitcher)}},(0,t.h)("six-dropdown",{key:"dbc3e051599e7f5c17e0c5fd21ecf0ec94d38ddc",distance:13,skidding:20,placement:"bottom-end",ref:this.setupAppSwitcher},(0,t.h)("div",{key:"8f67ad4d5658a003177364f11188b26edc09b8b3",slot:"trigger",class:"six-header__app-switcher-dropdown"},(0,t.h)("a",{key:"62748cf2060348ccc971ae61b0768a5771f6cd5c",onClick:this.appNameClicked,class:"six-header__selected-app"},this.selectedApp),(0,t.h)("six-icon-button",{key:"2e8c73e6e9b72bf98985d3cd4d5ba92519edbeb2",name:"apps"})),(0,t.h)("slot",{key:"70056ce4c0154a5122854377ad16549fba8c7a1e",name:s.AppSwitcher}))),a=this.hasSlot(s.Profile)&&(0,t.h)("section",{key:"98a2ec4173e732e113a904dd0e6eea123f0957f4",class:{"six-header__profile":!0,"six-header__profile--open":this.isSectionSelected(r.Profile)}},(0,t.h)("six-dropdown",{key:"8b60c2141215c35e9115fb233eaa3e7884459bd9",distance:17,skidding:20,placement:"bottom-end",ref:this.setupProfile},(0,t.h)("slot",{key:"745751f79e8580a192104b4a9893544a7d51fb9b",name:"profile-avatar",slot:"trigger"}),(0,t.h)("slot",{key:"51954bfd0865bf952797e7b29d777dcf2d262278",name:"profile-menu"}))),u=this.hasSlot(s.Logo)?(0,t.h)("section",null,(0,t.h)("slot",{name:"logo"})):(0,t.h)("section",{class:{"six-header__logo":!0,"six-header__logo--clickable":this.clickableLogo},ref:this.setupLogo},(0,t.h)("svg",{height:"20",viewBox:"0 0 90 26",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("title",null,"SIX"),(0,t.h)("g",{fill:"#DE3919","fill-rule":"nonzero"},(0,t.h)("path",{d:"m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525"}),(0,t.h)("path",{d:"m42.16.324h5.21v24.806h-5.21z"}),(0,t.h)("path",{d:"m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545"}))));return(0,t.h)(t.H,{key:"0b346dcbc076e01148e9dfcfb357e4e2ee6afdae"},(0,t.h)("header",{key:"9a9e22af30dc5b5f057a9e78aa505d4e221e0572",class:"six-header"},e,u,(0,t.h)("section",{key:"2a8cefbeb528e2a658604aadc3c0e14ac3f2475d",class:"six-header__placeholder"}),(0,t.h)("section",{key:"c581467ed29411e73495453aa221e6778beb785f",class:"six-header__custom"},(0,t.h)("slot",{key:"a7852b67ff9c6364df2b05c4865f5776a83e412b"})),i,h,o,a),(0,t.h)("div",{key:"a1c39c872a97b466805a5edf86f918513772f440",class:{"six-header__search-field":!0,"six-header__search-field--visible":this.isSectionSelected(r.Search),"six-header__search-field--shift-content":this.shiftContent}},(0,t.h)("slot",{key:"df9347b8759b1793909cf1de124872f4444928b6",name:s.Search})))}static get assetsDirs(){return["assets"]}get host(){return(0,t.g)(this)}static get watchers(){return{openSearch:["handleOpenSearchChange"]}}};p.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:block;user-select:none;--search-border-width:1px}::slotted(six-search-field){position:absolute;margin-left:var(--search-border-width);width:calc(100% - 2 * var(--search-border-width))}.six-header{display:flex;width:100%;height:3.75rem;background-color:var(--six-header-background-color);align-items:center;flex-wrap:wrap;box-shadow:var(--six-shadow-medium);border-bottom:var(--six-header-border-with) solid var(--six-header-border-color)}.six-header__logo{width:6rem;margin-top:0.15rem}.six-header__logo--clickable{cursor:pointer}.six-header__placeholder{flex:1}.six-header__menu,.six-header__logo,.six-header__custom,.six-header__search,.six-header__notification,.six-header__app-switcher,.six-header__profile{height:calc(100% - 0.25rem - 1px);padding:0 1.25rem;display:flex;align-items:center;border-bottom:solid 0.25rem transparent}.six-header__menu--open,.six-header__logo--open,.six-header__custom--open,.six-header__search--open,.six-header__notification--open,.six-header__app-switcher--open,.six-header__profile--open{border-bottom:solid 0.25rem var(--six-header-border-color-open)}.six-header__app-switcher-dropdown{display:flex;align-items:center}.six-header__selected-app{cursor:pointer;font-size:0.9rem;font-weight:600;padding-right:0;padding-left:0.3rem}.six-header__selected-app:hover{color:var(--six-header-selected-app-color-hover)}.six-header__search-field{opacity:0;transform:scale(0.9);transition:var(--six-transition-fast) opacity, var(--six-transition-fast) transform;display:none}.six-header__search-field--visible{opacity:1;transform:none;display:block}.six-header__search-field--shift-content.six-header__search-field--visible{height:2.65rem;transition:var(--six-transition-fast) height}.six-header__search-field--shift-content:not(.six-header__search-field--visible){height:0;transition:var(--six-transition-fast) height}"}}]);