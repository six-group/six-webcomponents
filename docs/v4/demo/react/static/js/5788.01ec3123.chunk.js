"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[5788],{6514:function(e,t,i){i.d(t,{E:function(){return r}});var n=i(9249),s=i(7371),r=function(){function e(){var t=this;(0,n.Z)(this,e),this.eventListeners=[],this.add=function(e,i,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t.eventListeners.push({el:e,name:i,listener:n,identifier:s}),e.addEventListener(i,n)},this.remove=function(e,i,n){t.eventListeners=t.getFilteredEventListeners((function(t){return t.listener==n&&t.el===e&&t.name===i}))},this.removeByIdentifier=function(e){var i=function(t){return t.identifier===e};void 0!==t.eventListeners.find(i)&&(t.eventListeners=t.getFilteredEventListeners(i))},this.removeAll=function(){for(;t.eventListeners.length>0;){var e=t.eventListeners.pop();null!=e&&e.el.removeEventListener(e.name,e.listener)}}}return(0,s.Z)(e,[{key:"getFilteredEventListeners",value:function(e){return this.eventListeners.filter((function(t){return!e(t)||(t.el.removeEventListener(t.name,t.listener),!1)}))}},{key:"forward",value:function(e,t,i){switch(t){case"input":case"change":this.add(i,e,(function(){return i.dispatchEvent(new InputEvent(t,{bubbles:!0,cancelable:!0}))}));break;case"blur":case"focus":this.add(i,e,(function(){return i.dispatchEvent(new FocusEvent(t,{bubbles:!0,cancelable:!0}))}))}}}]),e}()},5788:function(e,t,i){i.r(t),i.d(t,{six_header:function(){return p}});var n,s,r=i(6666),o=i(2723),c=i(4795),a=i(9249),h=i(7371),l=i(8551),d=i(6514),u=i(1065);!function(e){e[e.None=0]="None",e[e.Search=1]="Search",e[e.AppSwitcher=2]="AppSwitcher",e[e.Profile=3]="Profile"}(n||(n={})),function(e){e.Search="search-field",e.Notifications="notifications",e.AppSwitcher="app-switcher-menu",e.Profile="profile-menu",e.Logo="logo"}(s||(s={}));var p=function(){function e(t){var i=this;(0,a.Z)(this,e),(0,l.r)(this,t),this.sixAppNameClicked=(0,l.c)(this,"six-header-app-name-clicked",7),this.sixAppSwitcherSelect=(0,l.c)(this,"six-header-app-switcher-select",7),this.sixProfileSelect=(0,l.c)(this,"six-header-profile-select",7),this.sixHamburgerClick=(0,l.c)(this,"six-header-hamburger-menu-clicked",7),this.sixLogoClick=(0,l.c)(this,"six-header-logo-clicked",7),this.sixSearchFieldToggle=(0,l.c)(this,"six-header-search-field-toggle",7),this.eventListeners=new d.E,this.setupMenu=function(e){null!=e&&i.eventListeners.add(e,"click",(function(){return i.sixHamburgerClick.emit()}))},this.setupLogo=function(e){i.clickableLogo&&null!=e&&i.eventListeners.add(e,"click",(function(){return i.sixLogoClick.emit()}))},this.setupProfile=function(e){null!=e&&(i.eventListeners.add(e,"six-dropdown-show",i.selectSection(n.Profile)),i.eventListeners.add(e,"six-dropdown-hide",i.selectSection(n.None)),i.eventListeners.add(e,"six-menu-item-selected",(function(e){var t=e.detail,n=t.name,s=t.item;i.sixProfileSelect.emit({selectedLabel:s.innerText,name:n,item:s})})))},this.setupAppSwitcher=function(e){null!=e&&(i.eventListeners.add(e,"six-dropdown-show",i.selectSection(n.AppSwitcher)),i.eventListeners.add(e,"six-dropdown-hide",i.selectSection(n.None)),i.eventListeners.add(e,"six-menu-item-selected",(function(e){var t=e.detail,n=t.name,s=t.item;i.selectedApp=s.innerText,i.sixAppSwitcherSelect.emit({selectedLabel:s.innerText,name:n,item:s})})))},this.appNameClicked=function(){return i.sixAppNameClicked.emit()},this.computeSearchOpenState=function(){i.selectedSection=i.openSearch?n.Search:n.None},this.shiftContent=!1,this.openHamburgerMenu=!1,this.openSearch=!1,this.clickableLogo=!1,this.selectedApp=void 0,this.selectedSection=void 0}return(0,h.Z)(e,[{key:"handleOpenSearchChange",value:function(){this.computeSearchOpenState()}},{key:"setSearchOpenState",value:function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.selectedSection!==n.Search||t?t&&this.selectedSection!==n.Search&&(this.selectedSection=n.Search):this.selectedSection=n.None;case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getIsSearchOpen",value:function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.selectedSection===n.Search);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hasSlot",value:function(e){return null!=this.slots&&this.slots[e]}},{key:"isSectionSelected",value:function(e){return e===this.selectedSection}},{key:"selectSection",value:function(e){var t=this;return function(){return t.selectedSection=e}}},{key:"toggleSearch",value:function(){var e=this,t=this.selectedSection!==n.Search;this.selectedSection=this.selectedSection===n.Search?n.None:n.Search,this.sixSearchFieldToggle.emit({visible:t}),this.selectedSection===n.Search&&setTimeout((0,c.Z)((0,o.Z)().mark((function t(){var i,n,r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=(0,u.g)(e.host,s.Search),null===(n=null===(i=null===r||void 0===r?void 0:r.shadowRoot)||void 0===i?void 0:i.querySelector("six-input"))||void 0===n||n.setFocus();case 2:case"end":return t.stop()}}),t)}))),50)}},{key:"componentWillLoad",value:function(){var e;this.slots=(e={},(0,r.Z)(e,s.Search,(0,u.h)(this.host,s.Search)),(0,r.Z)(e,s.Notifications,(0,u.h)(this.host,s.Notifications)),(0,r.Z)(e,s.AppSwitcher,(0,u.h)(this.host,s.AppSwitcher)),(0,r.Z)(e,s.Profile,(0,u.h)(this.host,s.Profile)),(0,r.Z)(e,s.Logo,(0,u.h)(this.host,s.Logo)),e),this.hasSlot(s.AppSwitcher)&&(this.selectedApp=this.getSelectedApp()),this.hasSlot(s.Search)&&this.computeSearchOpenState()}},{key:"getSelectedApp",value:function(){var e,t=(0,u.g)(this.host,s.AppSwitcher);if(null!=t){var i=Array.from(t.querySelectorAll("six-menu-item")).find((function(e){return e.hasAttribute("checked")}));return null!==(e=null===i||void 0===i?void 0:i.textContent)&&void 0!==e?e:void 0}}},{key:"disconnectedCallback",value:function(){this.eventListeners.removeAll()}},{key:"render",value:function(){var e=this,t=this.hasSlot(s.Search)&&(0,l.h)("section",{class:{"six-header__search":!0,"six-header__search--open":this.isSectionSelected(n.Search)}},(0,l.h)("six-icon-button",{name:"search",onClick:function(){return e.toggleSearch()},"data-testid":"search-trigger"})),i=this.hasSlot(s.Notifications)&&(0,l.h)("section",{class:"six-header__notification"},(0,l.h)("slot",{name:s.Notifications})),r=this.hasSlot(s.AppSwitcher)&&(0,l.h)("section",{class:{"six-header__app-switcher":!0,"six-header__app-switcher--open":this.isSectionSelected(n.AppSwitcher)}},(0,l.h)("a",{onClick:this.appNameClicked,class:"six-header__selected-app"},this.selectedApp),(0,l.h)("six-dropdown",{distance:13,skidding:20,placement:"bottom-end",ref:this.setupAppSwitcher},(0,l.h)("six-icon-button",{name:"apps",slot:"trigger"}),(0,l.h)("slot",{name:s.AppSwitcher}))),o=this.hasSlot(s.Profile)&&(0,l.h)("section",{class:{"six-header__profile":!0,"six-header__profile--open":this.isSectionSelected(n.Profile)}},(0,l.h)("six-dropdown",{distance:17,skidding:20,placement:"bottom-end",ref:this.setupProfile},(0,l.h)("slot",{name:"profile-avatar",slot:"trigger"}),(0,l.h)("slot",{name:"profile-menu"}))),c=this.hasSlot(s.Logo)?(0,l.h)("section",null,(0,l.h)("slot",{name:"logo"})):(0,l.h)("section",{class:{"six-header__logo":!0,"six-header__logo--clickable":this.clickableLogo},ref:this.setupLogo},(0,l.h)("svg",{height:"20",viewBox:"0 0 90 26",xmlns:"http://www.w3.org/2000/svg"},(0,l.h)("title",null,"SIX"),(0,l.h)("g",{fill:"#DE3919","fill-rule":"nonzero"},(0,l.h)("path",{d:"m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525"}),(0,l.h)("path",{d:"m42.16.324h5.21v24.806h-5.21z"}),(0,l.h)("path",{d:"m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545"}))));return(0,l.h)(l.H,null,(0,l.h)("header",{class:"six-header"},(0,l.h)("section",{class:"six-header__menu"},(0,l.h)("six-icon-button",{name:this.openHamburgerMenu?"menu_open":"menu",ref:this.setupMenu})),c,(0,l.h)("section",{class:"six-header__placeholder"}),(0,l.h)("section",{class:"six-header__custom"},(0,l.h)("slot",null)),t,i,r,o),(0,l.h)("div",{class:{"six-header__search-field":!0,"six-header__search-field--visible":this.isSectionSelected(n.Search),"six-header__search-field--shift-content":this.shiftContent}},(0,l.h)("slot",{name:s.Search})))}},{key:"host",get:function(){return(0,l.g)(this)}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{openSearch:["handleOpenSearchChange"]}}}]),e}();p.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;user-select:none;--search-border-width:1px}::slotted(six-search-field){position:absolute;margin-left:var(--search-border-width);width:calc(100% - 2 * var(--search-border-width))}.six-header{display:flex;width:100%;height:3.75rem;background-color:var(--six-header-background-color);align-items:center;flex-wrap:wrap;box-shadow:var(--six-shadow-x-large);border-bottom:var(--six-header-border-with) solid var(--six-header-border-color)}.six-header__logo{width:6rem;margin-top:0.15rem}.six-header__logo--clickable{cursor:pointer}.six-header__placeholder{flex:1}.six-header__menu,.six-header__logo,.six-header__custom,.six-header__search,.six-header__notification,.six-header__app-switcher,.six-header__profile{height:calc(100% - 0.25rem - 1px);padding:0 1.25rem;display:flex;align-items:center;border-bottom:solid 0.25rem transparent}.six-header__menu--open,.six-header__logo--open,.six-header__custom--open,.six-header__search--open,.six-header__notification--open,.six-header__app-switcher--open,.six-header__profile--open{border-bottom:solid 0.25rem var(--six-header-border-color-open)}.six-header__selected-app{cursor:pointer;font-size:0.9rem;font-weight:600;padding-right:0;padding-left:0.3rem}.six-header__selected-app:hover{color:var(--six-header-selected-app-color-hover)}.six-header__search-field{opacity:0;transform:scale(0.9);transition:var(--six-transition-fast) opacity, var(--six-transition-fast) transform;display:none}.six-header__search-field--visible{opacity:1;transform:none;display:block}.six-header__search-field--shift-content.six-header__search-field--visible{height:2.65rem;transition:var(--six-transition-fast) height}.six-header__search-field--shift-content:not(.six-header__search-field--visible){height:0;transition:var(--six-transition-fast) height}"},1065:function(e,t,i){i.d(t,{a:function(){return s},b:function(){return o},g:function(){return c},h:function(){return r}});var n=i(8079);function s(e){var t=null!=e?e.assignedNodes({flatten:!0}):[],i="";return(0,n.Z)(t).map((function(e){e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)})),i}function r(e,t){return null!=t&&""!==t?null!==e.querySelector('[slot="'.concat(t,'"]')):Array.from(e.childNodes).some((function(e){var t;if(e.nodeType===e.TEXT_NODE&&""!==(null===(t=e.textContent)||void 0===t?void 0:t.trim()))return!0;if(e.nodeType===e.ELEMENT_NODE&&!e.hasAttribute("slot"))return!0;return!1}))}var o=function(e){var t;return null===(t=e.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0})};function c(e,t){return null==e?null:e.querySelector('[slot="'.concat(t,'"]'))}},6666:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(5850);function s(e,t,i){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}}}]);
//# sourceMappingURL=5788.01ec3123.chunk.js.map