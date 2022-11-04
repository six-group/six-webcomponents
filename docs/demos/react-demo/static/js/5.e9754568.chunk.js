(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[5],{111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var r,c,o,i,a=n(4),s=n(0),u=n(3),l=n(99);!function(e){e.None="none",e.Asc="asc",e.Desc="desc"}(r||(r={})),function(e){e.Equals="eq",e.NotEquals="ne",e.Includes="in",e.NotIncludes="ni"}(c||(c={})),(i=o||(o={})).columns={name:"Name",email:"E-mail",phone:"Phone",username:"Username",website:"Website"},i.sort={name:r.None,email:r.None},i.filter={username:Object(l.a)({},c.Includes,"")};var d,b,j=n(1),f=function(e){var t=Object(s.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],o=Object(s.useState)(),i=Object(a.a)(o,2),u=i[0],l=i[1],d=Object(s.useState)(null),b=Object(a.a)(d,2),f=b[0],O=b[1],p=Object(s.useCallback)((function(e){var t=e.header,n=e.children;l(t),O(n),c(!0)}),[l,O,c]),h=function(){c(!1)};return{Component:Object(s.useCallback)((function(){return Object(j.jsx)(e,{open:r,label:u,"onSix-drawer-hide":h,"onSix-dialog-hide":h,children:f})}),[e,r,u,f]),open:p,close:h}},O=n(27),p=function(e){return"string"!==typeof e||e.length<1},h=(d={},Object(l.a)(d,c.Includes,(function(e,t){return e.includes(t)})),Object(l.a)(d,c.NotIncludes,(function(e,t){return!e.includes(t)})),Object(l.a)(d,c.Equals,(function(e,t){return e===t})),Object(l.a)(d,c.NotEquals,(function(e,t){return e!==t})),d),v=n(9),m=function(e){return e===r.None},x=(b={},Object(l.a)(b,r.Asc,(function(e,t){return String(e).localeCompare(String(t))})),Object(l.a)(b,r.Desc,(function(e,t){return String(t).localeCompare(String(e))})),Object(l.a)(b,r.None,(function(){return 0})),b),g=n(26),S=function(e){var t=e.sortModel,n=e.filterModel,r=e.search,c=Object(O.a)("https://jsonplaceholder.typicode.com/users",[]),i=Object(s.useState)([]),u=Object(a.a)(i,2),l=u[0],d=u[1],b=Object(s.useState)(!1),j=Object(a.a)(b,2),f=j[0],S=j[1],y=Object(s.useCallback)((function(){var e,i,s=(e=Object.keys(o.columns),i=r,function(t){if(p(i))return!0;var n=i.toLowerCase();return e.map((function(e){var n;return null!==(n=t[e])&&void 0!==n?n:""})).map(String).join().toLowerCase().includes(n)}),u=function(e){return function(t){var n=Object.keys(e);if(0===n.length)return!0;for(var r=0,c=n;r<c.length;r++){var o=c[r],i=e[o];if(!i)return!0;for(var s=0,u=Object.entries(i);s<u.length;s++){var l,d=Object(a.a)(u[s],2),b=d[0],j=d[1];if(!p(j)){var f=String(null!==(l=t[o])&&void 0!==l?l:"");if(!p(f)&&!h[b](f,j))return!1}}}return!0}}(n),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=Object.values(e);return 0===n.length||n.every(m)?t:Object(v.a)(t).sort((function(t,n){return Object.entries(e).reduce((function(e,r){var c=Object(a.a)(r,2),o=c[0],i=c[1];return e+x[i](t[o],n[o])}),0)}))}}(t);S(!0),setTimeout((function(){d(l(c.data.filter(s).filter(u))),S(!1)}),g.a.delay)}),[t,n,r,d,S,c.data]);return Object(s.useEffect)((function(){c.notLoaded&&c.execute()}),[c]),Object(s.useEffect)((function(){y()}),[t,n,r,y]),{users:l,loading:f}},y=(n(111),n(6)),w=n.n(y),k=n(10);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M,U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return function(n){return e[n]||t}}({"six-input":function(e){return e.value},"six-textarea":function(e){return e.value},"six-radio":function(e){return e.value},"six-select":function(e){return e.value},"six-checkbox":function(e){return null===e.getAttribute("checked")}},(function(){}));n(112);(M||(M={})).columns={role:"Role",password:"Password",passwordConfirmation:"Confirm password",radio:"radio",important:"checkbox"};var E=function(e){return Object.assign({role:"user",password:"",passwordConfirmation:"",radio:"2",important:!1},e)},P=function(e){var t,n,r,c=e.user,i=e.updateUser,d=Object(s.useRef)(null),b=Object(s.useState)(E(c)),f=Object(a.a)(b,2),O=f[0],p=f[1],h=function(e){return function(t){var n=t.target;p(N(N({},O),{},Object(l.a)({},e,function(e){var t,n=null===e||void 0===e||null===(t=e.tagName)||void 0===t?void 0:t.toLowerCase();return U(n)(e)}(n))))}},m=function(){var e=Object(k.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=d.current)||void 0===t?void 0:t.submit();case 2:if(!e.sent){e.next=4;break}i(O);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=(t="radio",function(e){return O[t]===e});return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsxs)(u.h,{ref:d,children:[Object(j.jsx)(u.l,{label:o.columns.name,value:O.name,required:!0,"onSix-input-input":h("name")}),Object(j.jsx)(u.l,{label:o.columns.email,type:"email",value:O.email,required:!0,"onSix-input-input":h("email")}),Object(j.jsx)(u.l,{label:o.columns.username,value:O.username,"onSix-input-input":h("username")}),Object(j.jsxs)(u.r,{label:M.columns.role,value:O.role,"onSix-select-change":h("role"),children:[Object(j.jsx)(u.n,{value:"admin",children:"Administrator"}),Object(j.jsx)(u.n,{value:"user",children:"User"}),Object(j.jsx)(u.n,{children:"Not defined"})]}),Object(j.jsx)(u.e,{"onSix-checkbox-change":h("important"),children:"Important"}),Object(j.jsx)(u.l,{label:M.columns.password,type:"password",required:!0,"onSix-input-input":h("password")}),Object(j.jsx)(u.l,{label:M.columns.passwordConfirmation,type:"password",required:!0,"onSix-input-input":h("passwordConfirmation")}),["1","2","3"].map((function(e){return Object(j.jsx)(u.o,{name:"radio",value:e,checked:x(e),"onSix-radio-change":h("radio"),children:"Option "+e},e)}))]}),Object(j.jsx)("footer",{slot:"footer",children:Object(j.jsx)(u.c,{disabled:(n=E(c),r=O,Array.from(new Set([].concat(Object(v.a)(Object.keys(n)),Object(v.a)(Object.keys(r))))).every((function(e){return n[e]===r[e]}))),onClick:m,children:"Update"})})]})},q=function(e){var t=e.users,n=e.loading,r=e.sortModel,c=e.filterModel,i=e.selectUser,s=e.setSortModel,l=e.setFilterModel,d=function(e){return function(){i(e)}},b=function(e){var t=e.detail;s(N(N({},r),t))},f=function(e){var t=e.detail;l(N(N({},c),t))},O=Object.entries(o.columns).map((function(e){var t,n=Object(a.a)(e,2),o=n[0],i=n[1],s=(t=o,function(){var e=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})[t]||e}),l=s(r,void 0),d=Object.entries(s(c,{})),O=Object(a.a)(d,1)[0];O=void 0===O?[]:O;var p=Object(a.a)(O,2),h=p[0],v=p[1];return Object(j.jsx)(u.y,{name:o,sort:l,filter:h,value:v,"onSix-table-header-cell-sort-updated":b,"onSix-table-header-cell-filter-updated":f,children:i},o)})),p=t.map((function(e){var t=Object.keys(o.columns).map((function(t){return Object(j.jsx)(u.w,{children:e[t]},t)}));return Object(j.jsx)(u.z,{onClick:d(e),children:t},e.id)}));return Object(j.jsxs)(u.v,{loading:n||void 0,children:[Object(j.jsx)(u.x,{children:O}),p]})},D=(n(113),function(e){var t=e.fetchServerModel,n=e.toggleTableType,r=t?"Fetch on every sort or filter update.":"Fetch once and do all sorting and filtering locally.";return Object(j.jsxs)("header",{className:"users-header",children:[Object(j.jsx)(u.j,{size:"large",children:"supervisor_account"}),Object(j.jsx)("span",{className:"users-header__title",children:"Users"}),Object(j.jsxs)("p",{children:["Table could be constructed either from ",Object(j.jsx)("code",{children:"ui-library"})," building blocks or directly supplying the data to ",Object(j.jsx)("code",{children:"six-table"})," component. Two different fetching models are represented here."]}),Object(j.jsx)(u.c,{onClick:n,children:t?"Server":"UI"}),Object(j.jsx)("span",{children:r})]})}),I=function(e){var t=e.loading,n=e.users,r=e.search,c=e.selectUser,i=Object(s.useRef)(null),l=Object(s.useState)(o.sort),d=Object(a.a)(l,2),b=d[0],f=d[1],O=Object(s.useState)(o.filter),p=Object(a.a)(O,2),h=p[0],v=p[1],m=Object(s.useCallback)((function(){var e;null===(e=i.current)||void 0===e||e.setData({columns:o.columns,rows:n,quickFilter:r,sort:b,filter:h})}),[i,n,r,b,h]);Object(s.useEffect)((function(){m()}),[m]);return Object(j.jsx)(u.v,{loading:t||void 0,"onSix-table-ready":m,"onSix-table-header-cell-sort-updated":function(e){var t=e.detail;f(N(N({},b),t))},"onSix-table-header-cell-filter-updated":function(e){var t=e.detail;v(N(N({},h),t))},"onSix-table-row-clicked":function(e){var t=e.detail;c(t.item)},ref:i})};t.default=function(e){var t=e.search,n=e.setSearch,r=f(u.g),c=f(u.f),i=Object(s.useState)(!1),l=Object(a.a)(i,2),d=l[0],b=l[1],O=Object(s.useState)(o.sort),p=Object(a.a)(O,2),h=p[0],v=p[1],m=Object(s.useState)(o.filter),x=Object(a.a)(m,2),g=x[0],y=x[1],w=S({sortModel:h,filterModel:g,search:t}),k=w.users,C=w.loading;Object(s.useEffect)((function(){d||(v(o.sort),y(o.filter),n(""))}),[d,v,y,n]);var N=function(e){r.close(),c.open({header:"Update",children:Object(j.jsx)("pre",{children:JSON.stringify(e,null,2)})})},M=function(e){r.open({header:"User #".concat(e.id),children:Object(j.jsx)(P,{user:e,updateUser:N})})},U=d?Object(j.jsx)(q,{users:k,loading:C,sortModel:h,filterModel:g,selectUser:M,setSortModel:v,setFilterModel:y}):Object(j.jsx)(I,{users:k,loading:C,search:t,selectUser:M});return Object(j.jsxs)("div",{className:"users",children:[Object(j.jsx)(D,{fetchServerModel:d,toggleTableType:function(){b(!d)}}),Object(j.jsx)(u.d,{className:"users__table ".concat(C?"users__table--loading":""),children:U}),Object(j.jsx)(r.Component,{}),Object(j.jsx)(c.Component,{})]})}},99:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.e9754568.chunk.js.map