(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{339:function(e,t,i){"use strict";var r=i(17),a=i(28),n=i(3),s=i(46),o=i(0),l=i(47),c=i(340),u=i(97),d=i(96),m=i(341),v=i(343),p=i(16),h=i(49),f=p("replace"),g=TypeError,x=n("".indexOf),b=n("".replace),_=n("".slice),w=Math.max,y=function(e,t,i){return i>e.length?-1:""===t?i:x(e,t,i)};r({target:"String",proto:!0},{replaceAll:function(e,t){var i,r,n,p,L,k,C,E,M,A=s(this),$=0,q=0,S="";if(!l(e)){if((i=c(e))&&(r=u(s(m(e))),!~x(r,"g")))throw g("`.replaceAll` does not allow non-global regexes");if(n=d(e,f))return a(n,e,A,t);if(h&&i)return b(u(A),e,t)}for(p=u(A),L=u(e),(k=o(t))||(t=u(t)),C=L.length,E=w(1,C),$=y(p,L,0);-1!==$;)M=k?u(t(L,$,p)):v(L,p,$,[],void 0,t),S+=_(p,q,$)+M,q=$+C,$=y(p,L,$+E);return q<p.length&&(S+=_(p,q)),S}})},340:function(e,t,i){var r=i(8),a=i(12),n=i(16)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},341:function(e,t,i){var r=i(28),a=i(4),n=i(48),s=i(342),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||a(e,"flags")||!n(o,e)?t:r(s,e)}},342:function(e,t,i){"use strict";var r=i(30);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},343:function(e,t,i){var r=i(3),a=i(29),n=Math.floor,s=r("".charAt),o=r("".replace),l=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,i,r,d,m){var v=i+e.length,p=r.length,h=u;return void 0!==d&&(d=a(d),h=c),o(m,h,(function(a,o){var c;switch(s(o,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,i);case"'":return l(t,v);case"<":c=d[l(o,1,-1)];break;default:var u=+o;if(0===u)return a;if(u>p){var m=n(u/10);return 0===m?a:m<=p?void 0===r[m-1]?s(o,1):r[m-1]+s(o,1):a}c=r[u-1]}return void 0===c?"":c}))}},505:function(e,t,i){"use strict";i.r(t);i(94),i(339);var r={name:"docs-demo-six-header-120",mounted(){const e=Object.entries({header:"six-header",dialog:"six-dialog",dialogClose:"six-dialog six-button",search:"six-search-field",searchResults:"six-search-field div",notifications:'[slot="notifications"]',notificationsBadge:"six-badge",logout:"#logout"}).reduce((e,[t,i])=>({...e,[t]:document.querySelector(i)}),{}),t=({type:t,detail:i})=>{const{selectedLabel:r}=i;"Language"!==r.trim()&&(e.dialog.label=t,e.dialog.querySelector("pre").innerHTML=JSON.stringify({detail:i},null,2),e.dialog.show())};e.header.addEventListener("six-header-hamburger-menu-clicked",t),e.header.addEventListener("six-header-app-name-clicked",t),e.header.addEventListener("six-header-app-switcher-select",t),e.header.addEventListener("six-header-profile-select",t),e.notifications.addEventListener("click",t),e.dialogClose.addEventListener("click",()=>e.dialog.hide()),e.search.addEventListener("six-search-field-change",({detail:t})=>{const r=t.value;i(r).then(t=>{e.searchResults.innerHTML=t.map(e=>`<article>${e.replaceAll(r,`<b>${r}</b>`)} <six-button type="link">...</six-button></article>`).join("")})});const i=e=>new Promise(t=>{const i=e?"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eveniet labore nemo nihil quae soluta sunt temporibus vitae voluptas voluptatem? Amet eius eveniet libero, minus odio officia pariatur provident tenetur.".split([", "]).filter(t=>t.includes(e.trim())).slice(0,3):[];setTimeout(()=>t(i),1e3)});e.logout.addEventListener("click",t=>{t.stopPropagation(),e.header.remove()});let r=99;const a=()=>setTimeout(()=>{const t=n(-9,9);r+=r+t>=0&&r+t<=99?t:0,e.notificationsBadge.innerText=r,a()},n(300,3e3)),n=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e);a()}},a=i(10),n=Object(a.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"demo my-app"},[t("six-root",[t("six-header",{attrs:{slot:"header","show-search":"","shift-content":""},slot:"header"},[t("six-search-field",{attrs:{slot:"search-field",placeholder:"Search for some 'a' ...",clearable:""},slot:"search-field"},[t("div",{attrs:{id:"search-results"}})]),e._v(" "),t("six-icon-button",{attrs:{slot:"notifications",name:"notifications_none"},slot:"notifications"},[t("six-badge",{attrs:{type:"danger",pill:""}},[e._v("99")])],1),e._v(" "),t("six-menu",{attrs:{slot:"app-switcher-menu"},slot:"app-switcher-menu"},[t("six-menu-item",{attrs:{checked:""}},[e._v("Custody")]),e._v(" "),t("six-menu-item",[e._v("Swiss Interbank Clearing")]),e._v(" "),t("six-menu-item",[e._v("Tri-Party Agent")]),e._v(" "),t("six-menu-item",[e._v("Financial Information")])],1),e._v(" "),t("six-menu",{attrs:{slot:"profile-menu"},slot:"profile-menu"},[t("six-menu-item",[t("b",[e._v("Cat Kittens")]),t("br"),e._v("cat.kitty.kittens@themCatsBeCool.com")]),e._v(" "),t("six-menu-item",[t("b",[e._v("Language")]),t("br"),t("six-language-switcher")],1),e._v(" "),t("six-menu-item",[e._v("Change password")]),e._v(" "),t("six-menu-item",{attrs:{id:"logout"}},[e._v("Logout")])],1),e._v(" "),t("six-avatar",{attrs:{slot:"profile-avatar",image:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"},slot:"profile-avatar"}),e._v(" "),t("six-icon-button",{attrs:{name:"shopping_cart"}})],1),e._v(" "),t("section",{attrs:{slot:"main"},slot:"main"},[t("six-card",[t("h1",[e._v("Main content")]),e._v(" "),t("p",[e._v("\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis culpa cum earum error,\r\n                fuga laboriosam nam nisi pariatur rem tempora unde voluptatem? Consequuntur dicta fugit numquam\r\n                obcaecati perferendis?\r\n              ")])])],1)],1),e._v(" "),t("six-dialog",{staticClass:"dialog-overview",attrs:{label:"Dialog"}},[t("pre"),e._v(" "),t("six-button",{attrs:{slot:"footer",type:"primary"},slot:"footer"},[e._v("Close")])],1),e._v(" "),t("style",[e._v("\r\n          section[slot='main'] six-card {\r\n            width: 100%;\r\n          }\r\n\r\n          six-search-field div article {\r\n            background-color: var(--six-color-white);\r\n            padding: 0.6rem;\r\n          }\r\n        ")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);