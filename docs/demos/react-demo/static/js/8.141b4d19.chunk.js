(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[8],{100:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return l}));var n=i(99),o=i(4),s=i(9);function r(e){var t=e?e.assignedNodes({flatten:!0}):[],i="";return Object(s.a)(t).map((function(e){e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)})),i}function l(e,t){return t?null!==e.querySelector('[slot="'.concat(t,'"]')):Array.from(e.childNodes).some((function(e){if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE&&!e.hasAttribute("slot"))return!0;return!1}))}var a=function(e,t){var i=Object(o.a)(t,2),s=i[0],r=i[1];return Object.assign(Object.assign({},e),Object(n.a)({},s,r))},u=function(e){return function(t){return Object.values(e).map((function(e){return[e,l(t,e)]})).reduce(a,{})}},c=function(e){var t;return null===(t=e.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0})}},101:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(14),o=i(15),s=function(){function e(){var t=this;Object(n.a)(this,e),this.eventListeners=[],this.add=function(e,i,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t.eventListeners.push({el:e,name:i,listener:n,identifier:o}),e.addEventListener(i,n)},this.remove=function(e,i,n){var o,s=(o={el:e,name:i,listener:n},function(e){return Object.keys(o).every((function(t){return o[t]===e[t]}))});t.eventListeners=t.getFilteredEventListeners(s)},this.removeByIdentifier=function(e){var i=function(t){return t.identifier===e};void 0!==t.eventListeners.find(i)&&(t.eventListeners=t.getFilteredEventListeners(i))},this.removeAll=function(){for(;t.eventListeners.length;){var e=t.eventListeners.pop(),i=e.el,n=e.name,o=e.listener;i.removeEventListener(n,o)}}}return Object(o.a)(e,[{key:"getFilteredEventListeners",value:function(e){return this.eventListeners.filter((function(t){return!e(t)||(t.el.removeEventListener(t.name,t.listener),!1)}))}}]),e}()},103:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return r}));var n=35,o=300,s=function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,o)}),i)}},r=function(e,t){var i=e._original||e;return{_original:e,emit:s(i.emit.bind(i),t)}}},104:function(e,t,i){"use strict";function n(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return r}));var o=new Set;function s(e){o.add(e),document.body.classList.add("six-scroll-lock")}function r(e){o.delete(e),0===o.size&&document.body.classList.remove("six-scroll-lock")}function l(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"vertical",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth",s=n(e,t),r=s.top+t.scrollTop,l=s.left+t.scrollLeft,a=t.scrollLeft,u=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;"horizontal"!==i&&"both"!==i||(l<a?t.scrollTo({left:l,behavior:o}):l+e.clientWidth>u&&t.scrollTo({left:l-t.offsetWidth+e.clientWidth,behavior:o})),"vertical"!==i&&"both"!==i||(r<c?t.scrollTo({top:r,behavior:o}):r+e.clientHeight>h&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:o}))}},59:function(e,t,i){"use strict";i.r(t),i.d(t,"six_dropdown",(function(){return O})),i.d(t,"six_menu",(function(){return I})),i.d(t,"six_menu_item",(function(){return T}));var n=i(25),o=i(6),s=i.n(o),r=i(10),l=i(4),a=i(14),u=i(15),c=i(9),h=i(21),d=i(104),f=i(110),p=i(101),v=i(100),m=i(103);function g(e){return e.tabIndex>-1}function b(e){if(g(e))return e;if(e.shadowRoot){var t=Object(c.a)(e.shadowRoot.children).find(g);if(t)return t}return e.children?Object(c.a)(e.children).map(b)[0]:null}var y=function(e){return function(t){return(null===t||void 0===t?void 0:t.tagName.toLowerCase())===e.toLowerCase()}},w=y("six-menu"),x=y("six-menu-item"),k=0,O=function(){function e(t){var i=this;Object(a.a)(this,e),Object(h.i)(this,t),this.sixShow=Object(h.e)(this,"six-dropdown-show",7),this.sixAfterShow=Object(h.e)(this,"six-dropdown-after-show",7),this.sixHide=Object(h.e)(this,"six-dropdown-hide",7),this.sixAfterHide=Object(h.e)(this,"six-dropdown-after-hide",7),this.sixAutoFilterFired=Object(h.e)(this,"six-dropdown-auto-filter-fired",7),this.sixAsyncFilterFired=Object(h.e)(this,"six-async-filter-fired",7),this.sixScroll=Object(h.e)(this,"six-dropdown-scroll",7),this.componentId="dropdown-".concat(++k),this.isVisible=!1,this.hasBeenInitialized=!1,this.open=!1,this.placement="bottom-start",this.closeOnSelect=!0,this.distance=0,this.skidding=0,this.hoist=!1,this.filter=!1,this.asyncFilter=!1,this.filterPlaceholder="Filter...",this.autofocusFilter=!0,this.filterDebounce=m.a,this.disableHideOnEnterAndSpace=!1,this.options=null,this.virtualScroll=!1,this.eventListeners=new p.a,this._options=null,this.getMenuItems=function(){if(null!==i._options)return i._options.map((function(e){return Object(h.g)("six-menu-item",{value:e.value},e.label)}));var e=Object(v.b)(i.panel),t=Object(l.a)(e,1)[0];return Object(v.b)(t)||Array.from(t.querySelectorAll("six-menu-item"))},this.handleFilterInputChange=function(){var e,t,n=(null===(t=null===(e=i.filterInputElement.value)||void 0===e?void 0:e.toLowerCase())||void 0===t?void 0:t.trim())||"";i._options?i.handleFilteringForAttributeItems(n):i.handleFilteringForSlotItems(n),i.sixAutoFilterFired.emit({filterValue:n})}}return Object(u.a)(e,[{key:"hasFilterEnabled",get:function(){return this.filter||this.asyncFilter}},{key:"container",get:function(){return this.containingElement||this.host}},{key:"handleOpenChange",value:function(){this.open?this.show():this.hide(),this.updateAccessibleTrigger()}},{key:"handlePopoverOptionsChange",value:function(){this.popover.setOptions({strategy:this.hoist?"fixed":"absolute",placement:this.placement,distance:this.distance,skidding:this.skidding})}},{key:"handleOptionsChange",value:function(){this._options=Object(c.a)(this.options)}},{key:"connectedCallback",value:function(){this.virtualScroll&&null===this.options&&console.error("Options must be defined when using virtual scrolling"),null!==this.options&&(this._options=Object(c.a)(this.options)),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleTriggerClick=this.handleTriggerClick.bind(this),this.handleTriggerKeyDown=this.handleTriggerKeyDown.bind(this),this.handleTriggerKeyUp=this.handleTriggerKeyUp.bind(this),this.handleTriggerSlotChange=this.handleTriggerSlotChange.bind(this),this.handleDropdownScroll=this.handleDropdownScroll.bind(this),this.hasBeenInitialized&&!this.popover&&this.initializePopover()}},{key:"componentDidLoad",value:function(){var e=this;this.hasBeenInitialized=!0,this.initializePopover(),this.open&&this.show(),this.filter?this.setupFiltering(this.handleFilterInputChange):this.asyncFilter&&this.setupFiltering((function(){return e.sixAsyncFilterFired.emit({filterValue:e.filterInputElement.value})}))}},{key:"initializePopover",value:function(){var e=this,t=function(){var t=Object(r.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasFilterEnabled||!e.autofocusFilter){t.next=3;break}return t.next=3,e.filterInputElement.setFocus();case 3:e.sixAfterShow.emit();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();this.popover=new f.a(this.trigger,this.positioner,{strategy:this.hoist?"fixed":"absolute",placement:this.placement,distance:this.distance,skidding:this.skidding,transitionElement:this.panel,onAfterHide:function(){e.filter&&(e.filterInputElement.value="",null!==e._options?e._options=Object(c.a)(e.options):e.getMenuItems().forEach((function(e){return e.style.display="unset"})));e.sixAfterHide.emit()},onAfterShow:t,onTransitionEnd:function(){e.open||(e.panel.scrollTop=0)}})}},{key:"setupFiltering",value:function(e){this.eventListeners.add(this.filterInputElement,"six-input-input",Object(m.b)(e,this.filterDebounce))}},{key:"handleFilteringForAttributeItems",value:function(e){this._options=""!==e?this.options.filter((function(t){var i,n,o,s;return t.label&&(null===(n=null===(i=String(t.label))||void 0===i?void 0:i.toLowerCase())||void 0===n?void 0:n.includes(e))||t.value&&(null===(s=null===(o=String(t.value))||void 0===o?void 0:o.toLowerCase())||void 0===s?void 0:s.includes(e))})):Object(c.a)(this.options)}},{key:"handleFilteringForSlotItems",value:function(e){this.getMenuItems().forEach((function(t){var i,n,o=null===(i=null===t||void 0===t?void 0:t.value)||void 0===i?void 0:i.toLowerCase(),s=null===(n=null===t||void 0===t?void 0:t.innerText)||void 0===n?void 0:n.toLowerCase(),r=(null===o||void 0===o?void 0:o.includes(e))||(null===s||void 0===s?void 0:s.includes(e));t.style.display=r?"unset":"none"}))}},{key:"disconnectedCallback",value:function(){this.eventListeners.removeAll(),this.hide(),this.popover.destroy(),this.popover=null}},{key:"show",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isVisible){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixShow.emit().defaultPrevented){e.next=6;break}return this.open=!1,e.abrupt("return");case 6:this.eventListeners.add(this.panel,"six-menu-item-selected",this.handlePanelSelect),this.eventListeners.add(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown),this.isVisible=!0,this.open=!0,this.popover.show();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hide",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isVisible){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixHide.emit().defaultPrevented){e.next=6;break}return this.open=!0,e.abrupt("return");case 6:this.eventListeners.remove(this.panel,"six-menu-item-selected",this.handlePanelSelect),this.eventListeners.remove(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.remove(document,"mousedown",this.handleDocumentMouseDown),this.isVisible=!1,this.open=!1,this.popover.hide();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"focusOnTrigger",value:function(){var e=Object(v.b)(this.trigger),t=Object(l.a)(e,1)[0];t&&("function"===typeof t.setFocus?t.setFocus():"function"===typeof t.focus&&t.focus())}},{key:"getMenu",value:function(){var e=Object(v.b)(this.panel).filter(w);return Object(l.a)(e,1)[0]}},{key:"reposition",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.open){e.next=2;break}return e.abrupt("return");case 2:this.popover.reposition();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleDocumentKeyDown",value:function(e){var t=this;if("Escape"===e.key)return this.hide(),void this.focusOnTrigger();if(this.filterInputElement===this.host.shadowRoot.activeElement&&"ArrowDown"===e.key){var i=this.getMenuItems().find((function(e){return"none"!==e.style.display}));i&&i.setFocus()}if("Tab"===e.key){if(this.open&&x(document.activeElement))return e.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((function(){var e,i=t.container.getRootNode()instanceof ShadowRoot?null===(e=document.activeElement.shadowRoot)||void 0===e?void 0:e.activeElement:document.activeElement;(null===i||void 0===i?void 0:i.closest(t.container.tagName.toLowerCase()))===t.container||t.hide()}))}}},{key:"handleDocumentMouseDown",value:function(e){e.composedPath().includes(this.container)||this.hide()}},{key:"handleMenuItemActivate",value:function(e){var t=e.target;Object(d.c)(t,this.panel)}},{key:"handlePanelSelect",value:function(e){var t=e.target;this.closeOnSelect&&w(t)&&(this.hide(),this.focusOnTrigger())}},{key:"handleTriggerClick",value:function(){this.open?this.hide():this.show()}},{key:"handleTriggerKeyDown",value:function(e){var t=this.getMenu(),i=t?Object(c.a)(t.querySelectorAll("six-menu-item")):null,n=i[0],o=i[i.length-1];if("Escape"===e.key)return this.focusOnTrigger(),void this.hide();if(!this.disableHideOnEnterAndSpace&&[" ","Enter"].includes(e.key))return e.preventDefault(),void(this.open?this.hide():this.show());if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.open||this.show(),"ArrowDown"===e.key&&n)return void n.setFocus();if("ArrowUp"===e.key&&o)return void o.setFocus()}this.open&&t&&!["Tab","Shift","Meta","Ctrl","Alt"].includes(e.key)&&t.typeToSelect(e.key)}},{key:"handleTriggerKeyUp",value:function(e){" "===e.key&&e.preventDefault()}},{key:"handleTriggerSlotChange",value:function(){this.updateAccessibleTrigger()}},{key:"handleDropdownScroll",value:function(){this.sixScroll.emit({scrollHeight:this.panel.scrollHeight,scrollTop:this.panel.scrollTop,scrollbarHeight:this.panel.offsetHeight*(this.panel.offsetHeight/this.panel.scrollHeight),scrollRatio:this.panel.scrollTop/(this.panel.scrollHeight-this.panel.clientHeight)})}},{key:"updateAccessibleTrigger",value:function(){var e=Object(v.b)(this.trigger).map(b),t=Object(l.a)(e,1)[0];t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}},{key:"render",value:function(){var e=this;return Object(h.g)("div",{part:"base",id:this.componentId,class:{dropdown:!0,"dropdown--open":this.open}},Object(h.g)("span",{part:"trigger",class:"dropdown__trigger",ref:function(t){return e.trigger=t},onClick:this.handleTriggerClick,onKeyDown:this.handleTriggerKeyDown,onKeyUp:this.handleTriggerKeyUp},Object(h.g)("slot",{name:"trigger",onSlotchange:this.handleTriggerSlotChange})),Object(h.g)("div",{ref:function(t){return e.positioner=t},class:{dropdown__positioner:!0,dropdown__positioner__filtered:(this.filter||this.asyncFilter)&&!this.hoist}},this.hasFilterEnabled&&Object(h.g)("six-input",{class:{"filter-hidden":!this.open},"aria-hidden":this.open?"false":"true",ref:function(t){return e.filterInputElement=t},placeholder:this.filterPlaceholder}),Object(h.g)("div",{ref:function(t){return e.panel=t},part:"panel",class:"dropdown__panel",role:"menu","aria-hidden":this.open?"false":"true","aria-labelledby":this.componentId,onScroll:this.handleDropdownScroll},Object(h.g)("slot",null),this._options&&Object(h.g)("six-menu",{part:"menu",items:this._options,virtualScroll:this.virtualScroll}))))}},{key:"host",get:function(){return Object(h.f)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"],distance:["handlePopoverOptionsChange"],hoist:["handlePopoverOptionsChange"],placement:["handlePopoverOptionsChange"],skidding:["handlePopoverOptionsChange"],options:["handleOptionsChange"]}}}]),e}();O.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.dropdown{position:relative}.dropdown__trigger{display:block}.dropdown__positioner{position:absolute;z-index:var(--six-z-index-dropdown)}.dropdown__positioner__filtered{width:100%}.dropdown__panel{max-height:50vh;font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);color:var(--color);background-color:var(--six-panel-background-color);border-radius:var(--six-border-radius-medium);box-shadow:var(--six-elevation-2dp);opacity:0;overflow:auto;overscroll-behavior:none;pointer-events:none;transform:scale(0.9);transition:var(--six-transition-fast) opacity, var(--six-transition-fast) transform;scrollbar-width:thin}.filter-hidden{display:none}.dropdown__positioner[data-popper-placement^=top] .dropdown__panel{transform-origin:bottom}.dropdown__positioner[data-popper-placement^=bottom] .dropdown__panel{transform-origin:top}.dropdown__positioner[data-popper-placement^=left] .dropdown__panel{transform-origin:right}.dropdown__positioner[data-popper-placement^=right] .dropdown__panel{transform-origin:left}.dropdown__positioner.popover-visible .dropdown__panel{opacity:1;transform:none;pointer-events:all}";var S=function(e){var t,i,n;return null===(n=null===(i=null===(t=null===e||void 0===e?void 0:e.shadowRoot)||void 0===t?void 0:t.querySelector(".menu-item"))||void 0===i?void 0:i.classList)||void 0===n?void 0:n.contains("menu-item--focused")},_=function(e){var t=e.value,i=e.label;return Object(h.g)("six-menu-item",{value:t},i)},j=void 0,I=function(){function e(t){var i=this;Object(a.a)(this,e),Object(h.i)(this,t),this.sixMenuItemSelected=Object(h.e)(this,"six-menu-item-selected",7),this.eventListeners=new p.a,this.typeToSelectString="",this.removeBoxShadow=!1,this.items=null,this.itemsShown=j,this.virtualScroll=!1,this.itemSize=10,this.scrollingDebounce=15,this.scrollingIndex=0,this.sixMenuItemHeight=64,this.handleScrolling=function(){i.scrollingIndex=Math.floor(i.menuWrapper.scrollTop/i.sixMenuItemHeight)}}return Object(u.a)(e,[{key:"connectedCallback",value:function(){this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}},{key:"componentWillLoad",value:function(){this.items}},{key:"componentDidLoad",value:function(){this.setupForVirtualScrollingAfterRendering()}},{key:"disconnectedCallback",value:function(){this.eventListeners.removeAll()}},{key:"typeToSelect",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var i,o,r,l,a,u,c=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=setTimeout((function(){return c.typeToSelectString=""}),750),this.typeToSelectString+=t.toLowerCase(),o=this.getItems(),r=Object(n.a)(o),e.prev=5,r.s();case 7:if((l=r.n()).done){e.next=16;break}if(a=l.value,u=null===(i=a.shadowRoot)||void 0===i?void 0:i.querySelector("slot:not([name])"),Object(v.a)(u).toLowerCase().trim().substring(0,this.typeToSelectString.length)!==this.typeToSelectString){e.next=14;break}return a.setFocus(),e.abrupt("break",16);case 14:e.next=7;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),r.e(e.t0);case 21:return e.prev=21,r.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[5,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getItemsShown",value:function(){var e,t=this.virtualScroll?5:j;return null!==(e=this.itemsShown)&&void 0!==e?e:t}},{key:"setupForVirtualScrollingAfterRendering",value:function(){var e,t;if(this.virtualScroll){this.eventListeners.add(this.menuWrapper,"scroll",Object(m.b)(this.handleScrolling,this.scrollingDebounce));var i=null===(t=null===(e=this.menu)||void 0===e?void 0:e.querySelector("six-menu-item"))||void 0===t?void 0:t.clientHeight;i&&i>0&&(this.sixMenuItemHeight=i)}}},{key:"getItems",value:function(){if(null!==this.items&&void 0!==this.items)return this.items.map(_);var e=this.menu.querySelector("slot");return Object(c.a)(e.assignedElements({flatten:!0})).filter((function(e){return function(e){return"six-menu-item"===(null===e||void 0===e?void 0:e.tagName.toLowerCase())}(e)&&!e.disabled}))}},{key:"getActiveItemIndex",value:function(){var e=this.getItems(),t=this.getActiveItem(),i=e.indexOf(t);return i>-1?i:this.extractItemsFromDOM().findIndex(S)}},{key:"getActiveItem",value:function(){var e,t=this.getItems().find((function(e){return e===document.activeElement}));return t||(null===(e=this.extractItemsFromDOM())||void 0===e?void 0:e.find(S))}},{key:"extractItemsFromDOM",value:function(){var e,t;return Array.from(null===(t=null===(e=this.host)||void 0===e?void 0:e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("six-menu-item"))}},{key:"setActiveItem",value:function(e){e.setFocus()}},{key:"handleClick",value:function(e){var t=e.target.closest("six-menu-item");t&&!t.disabled&&this.sixMenuItemSelected.emit({name:t.value,item:t})}},{key:"handleKeyDown",value:function(e){if("Enter"===e.key){var t=this.getActiveItem();e.preventDefault(),t&&this.sixMenuItemSelected.emit({name:t.value,item:t})}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){var i=null===this.items?this.getItems():this.extractItemsFromDOM(),n=this.getActiveItemIndex();if(i.length)return e.preventDefault(),"ArrowDown"===e.key?n++:"ArrowUp"===e.key?n--:"Home"===e.key?n=0:"End"===e.key&&(n=i.length-1),n<0&&(n=0),n>i.length-1&&(n=i.length-1),void this.setActiveItem(i[n])}this.typeToSelect(e.key)}},{key:"getMenuWrapperStyle",value:function(){var e={};return this.getItemsShown()>0&&(e.height="".concat(this.getItemsShown()*this.sixMenuItemHeight,"px")),Object.assign({},e)}},{key:"getMenuContainerStyle",value:function(){var e={};return this.virtualScroll&&(e.transform="translateY(".concat(this.sixMenuItemHeight*this.scrollingIndex,"px)")),Object.assign({},e)}},{key:"getScrollbarGhostStyle",value:function(){var e={};return this.virtualScroll&&null!==this.items&&(e.height="".concat(this.items.length*this.sixMenuItemHeight-this.itemSize*this.sixMenuItemHeight,"px")),Object.assign({},e)}},{key:"renderItems",value:function(){if(void 0!==this.items&&null!==this.items)return this.virtualScroll?this.items.slice(this.scrollingIndex,Math.min(this.items.length,this.itemSize+this.scrollingIndex)).map(_):this.items.map(_)}},{key:"render",value:function(){var e=this;return Object(h.g)("div",{ref:function(t){return e.menuWrapper=t},style:this.getMenuWrapperStyle(),part:"wrapper",class:{menu:!0,"menu--noshadow":this.removeBoxShadow,"menu__wrapper--scrollable":this.getItemsShown()>0}},Object(h.g)("div",{ref:function(t){return e.menu=t},part:"base",role:"menu",onClick:this.handleClick,onKeyDown:this.handleKeyDown,tabIndex:0,style:this.getMenuContainerStyle()},Object(h.g)("slot",null),this.renderItems()),this.virtualScroll&&Object(h.g)("div",{style:this.getScrollbarGhostStyle()}))}},{key:"host",get:function(){return Object(h.f)(this)}}]),e}();I.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu{padding:0 0;border:none;box-shadow:var(--six-elevation-2dp)}.menu:focus{outline:none}.menu--noshadow{box-shadow:none}.menu__wrapper--scrollable{overflow-y:auto}";var T=function(){function e(t){Object(a.a)(this,e),Object(h.i)(this,t),this.hasFocus=!1,this.checked=!1,this.value="",this.disabled=!1}return Object(u.a)(e,[{key:"connectedCallback",value:function(){this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}},{key:"setFocus",value:function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.menuItem.focus(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeFocus",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.menuItem.blur();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleBlur",value:function(){this.hasFocus=!1}},{key:"handleFocus",value:function(){this.hasFocus=!0}},{key:"handleMouseEnter",value:function(){this.setFocus()}},{key:"handleMouseLeave",value:function(){this.removeFocus()}},{key:"render",value:function(){var e=this;return Object(h.g)("div",{ref:function(t){return e.menuItem=t},part:"base",class:{"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--focused":this.hasFocus},role:"menuitem","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false",tabIndex:this.disabled?null:0,onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},Object(h.g)("span",{part:"prefix",class:"menu-item__prefix"},Object(h.g)("slot",{name:"prefix"})),Object(h.g)("span",{part:"label",class:"menu-item__label"},Object(h.g)("slot",null)),Object(h.g)("span",{part:"suffix",class:"menu-item__suffix"},Object(h.g)("slot",{name:"suffix"})),Object(h.g)("span",{part:"checked-icon",class:"menu-item__check"},Object(h.g)("six-icon",{size:"small","aria-hidden":"true"},"check")))}}]),e}();T.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu-item{position:relative;display:flex;align-items:stretch;font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);line-height:var(--six-line-height-normal);letter-spacing:var(--six-letter-spacing-normal);text-align:left;color:var(--six-input-color);border-radius:var(--six-border-radius-medium);padding:var(--six-spacing-medium) var(--six-spacing-medium);transition:var(--six-transition-fast) fill;user-select:none;white-space:nowrap;cursor:pointer}.menu-item.menu-item--focused:not(.menu-item--disabled){outline:none;background-color:var(--six-menu-item-background-color)}.menu-item.menu-item--disabled{outline:none;color:var(--six-input-color-disabled);cursor:not-allowed}.menu-item .menu-item__label{flex:1 1 auto;align-self:center}.menu-item .menu-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__prefix ::slotted(:last-child){margin-right:0.5em}.menu-item .menu-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__suffix ::slotted(:first-child){margin-left:0.5em}.menu-item .menu-item__check{flex:0 0 auto;display:flex;align-items:center;margin-left:var(--six-spacing-small);visibility:hidden;font-size:inherit}.menu-item--checked .menu-item__check{visibility:visible}"},99:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=8.141b4d19.chunk.js.map