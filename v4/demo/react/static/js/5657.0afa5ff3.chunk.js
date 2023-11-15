"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[5657],{5657:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t=r(3017),s=r(9249),o=r(7371),i=r(5754),a=r(3820),c=function(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},u=function(e,n,r){var t=n.className||n.class,s=r.className||r.class,o=f(e),i=f(t?t.split(" "):[]),a=f(s?s.split(" "):[]),c=[];return o.forEach((function(e){i.has(e)?(c.push(e),i.delete(e)):a.has(e)||c.push(e)})),i.forEach((function(e){return c.push(e)})),c.join(" ")},l=function(e){if("undefined"===typeof document)return!0;var n="on"+function(e){return"doubleclick"===e?"dblclick":e}(e),r=n in document;if(!r){var t=document.createElement("div");t.setAttribute(n,"return;"),r="function"===typeof t[n]}return r},d=function(e,n,r){var t=e.__events||(e.__events={}),s=t[n];s&&e.removeEventListener(n,s),e.addEventListener(n,t[n]=function(e){r&&r.call(this,e)})},f=function(e){var n=new Map;return e.forEach((function(e){return n.set(e,e)})),n},p=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){n.forEach((function(n){!function(e,n){"function"===typeof e?e(n):null!=e&&(e.current=n)}(n,e)}))}},m=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]])}return r},h=function(e,n,r,f){void 0!==f&&f();var h=e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(""),x=function(n){(0,i.Z)(x,n);var f=(0,a.Z)(x);function x(e){var n;return(0,s.Z)(this,x),(n=f.call(this,e)).setComponentElRef=function(e){n.componentEl=e},n}return(0,o.Z)(x,[{key:"componentDidMount",value:function(){this.componentDidUpdate(this.props)}},{key:"componentDidUpdate",value:function(e){!function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var t=u(e.classList,n,r);""!==t&&(e.className=t),Object.keys(n).forEach((function(r){if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){var t=r.substring(2),s=t[0].toLowerCase()+t.substring(1);l(s)||d(e,s,n[r])}else e[r]=n[r],"string"===typeof n[r]&&e.setAttribute(c(r),n[r])}))}}(this.componentEl,this.props,e)}},{key:"render",value:function(){var n=this.props,s=n.children,o=n.forwardedRef,i=n.style,a=(n.className,n.ref,m(n,["children","forwardedRef","style","className","ref"])),u=Object.keys(a).reduce((function(e,n){var r=a[n];if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){var t=n.substring(2).toLowerCase();"undefined"!==typeof document&&l(t)&&(e[n]=r)}else{var s=typeof r;"string"!==s&&"boolean"!==s&&"number"!==s||(e[c(n)]=r)}return e}),{});r&&(u=r(this.props,u));var d=Object.assign(Object.assign({},u),{ref:p(o,this.setComponentElRef),style:i});return(0,t.createElement)(e,d,s)}}],[{key:"displayName",get:function(){return h}}]),x}(t.Component);return n&&(x.contextType=n),function(e,n){var r=function(n,r){return t.createElement(e,Object.assign({},n,{forwardedRef:r}))};return r.displayName=n,t.forwardRef(r)}(x,h)};(0,r(10).q4)();var x,v=h("six-dialog"),j=h("six-drawer"),b=r(6234),y=r(8993),g=function(e){var n=(0,t.useState)(!1),r=(0,b.Z)(n,2),s=r[0],o=r[1],i=(0,t.useState)(),a=(0,b.Z)(i,2),c=a[0],u=a[1],l=(0,t.useState)(null),d=(0,b.Z)(l,2),f=d[0],p=d[1],m=(0,t.useCallback)((function(e){var n=e.header,r=e.children;u(n),p(r),o(!0)}),[u,p,o]),h=function(){o(!1)};return{Component:(0,t.useCallback)((function(){return(0,y.jsx)(e,{open:s,label:c,"onSix-drawer-hide":h,"onSix-dialog-hide":h,children:f})}),[e,s,c,f]),open:m,close:h}},w=r(9404),O=r(7987),C=r(3028),_=r(2776);(x||(x={})).columns={name:"Name",email:"E-mail",phone:"Phone",username:"Username",website:"Website"};var k,E,Z=r(8079),N={Object:(k="Object",function(e){return function(e){return Object.prototype.toString.call(e).slice(8,-1)}(e)===k})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return function(r){return e[r]||n}},S=function e(n,r){return Array.from(new Set([].concat((0,Z.Z)(Object.keys(n)),(0,Z.Z)(Object.keys(r))))).every((function(t){var s=U(n,void 0)(t),o=U(r,void 0)(t);return N.Object(s)&&N.Object(o)?e(s,o):s===o}))},L=function(e){var n=e.value,r=(0,t.useState)(!1),s=(0,b.Z)(r,2),o=s[0],i=s[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("six-button",{onClick:function(){return i((function(e){return!e}))},children:"Debug"}),o&&(0,y.jsx)("pre",{children:JSON.stringify(n,null,2)})]})},R=function(e){var n=e.control,r=e.names,s=e.children;return(0,y.jsx)("form",{children:t.Children.map(s,(function(e){if(t.isValidElement(e)){var s=U(r,e.props.name)(e.props.name);return(0,y.jsx)(_.Qr,{control:n,name:e.props.name,render:function(n){var r=n.field,o=r.value,i=r.onChange;return e.props.value?t.cloneElement(e,{label:s,value:e.props.value,checked:o===e.props.value,onInput:i}):t.cloneElement(e,{label:s,value:o,onInput:i})}})}}))})};(E||(E={})).columns={role:"Role",password:"Password",passwordConfirmation:"Confirm password",radio:"radio",important:"VIP"};var A=(0,C.Z)((0,C.Z)({},x.columns),E.columns),I=function(e){var n=e.user,r=e.updateUser,s=(0,t.useMemo)((function(){return function(e){return Object.assign({role:"user",password:"",passwordConfirmation:"",radio:"2",important:!1},e)}(n)}),[n]),o=(0,_.cI)({defaultValues:s}),i=o.control,a=(0,o.watch)();return(0,y.jsxs)(t.Fragment,{children:[(0,y.jsx)("h3",{children:"Form"}),(0,y.jsxs)(R,{control:i,names:A,children:[(0,y.jsx)("six-input",{required:!0,type:"text",name:"name"}),(0,y.jsx)("six-input",{required:!0,type:"email",name:"email"}),(0,y.jsx)("six-input",{name:"username"}),(0,y.jsxs)("six-select",{name:"role",children:[(0,y.jsx)("six-menu-item",{value:"admin",children:"Administrator"}),(0,y.jsx)("six-menu-item",{value:"user",children:"User"}),(0,y.jsx)("six-menu-item",{children:"Not defined"})]}),(0,y.jsx)("six-checkbox",{name:"important",children:"Important"}),(0,y.jsx)("six-input",{required:!0,type:"password",name:"password"}),(0,y.jsx)("six-input",{required:!0,type:"password",name:"passwordConfirmation"}),["1","2","3"].map((function(e){return(0,y.jsx)("six-radio",{name:"radio",value:e,children:"Option "+e},e)}))]}),(0,y.jsx)("br",{}),(0,y.jsx)(L,{value:a}),(0,y.jsx)("footer",{slot:"footer",children:(0,y.jsx)("six-button",{disabled:S(s,a),onClick:function(){return r(a)},children:"Update"})})]})},P=function(e){var n=e.users,r=e.selectUser;return(0,y.jsxs)("table",{children:[(0,y.jsx)("thead",{children:(0,y.jsx)("tr",{children:Object.entries(x.columns).map((function(e){var n=(0,b.Z)(e,2),r=n[0],t=n[1];return(0,y.jsx)("th",{children:t},r)}))})}),(0,y.jsx)("tbody",{children:Object.entries(n).map((function(e){var n=(0,b.Z)(e,2),t=n[0],s=n[1];return(0,y.jsx)("tr",{onClick:function(){return r(s)},children:Object.entries(x.columns).map((function(e){var n=(0,b.Z)(e,1)[0];return(0,y.jsx)("td",{children:s[n]},n)}))},t)}))})]})},q=function(){return(0,y.jsxs)("header",{className:"users-header",children:[(0,y.jsx)("six-icon",{size:"large",children:"supervisor_account"}),(0,y.jsx)("span",{className:"users-header__title",children:"Users"})]})},D=function(){var e=g(j),n=g(v),r=function(){var e=(0,w.i)("https://jsonplaceholder.typicode.com/users",[]),n=(0,t.useState)([]),r=(0,b.Z)(n,2),s=r[0],o=r[1],i=(0,t.useState)(!1),a=(0,b.Z)(i,2),c=a[0],u=a[1],l=(0,t.useCallback)((function(){u(!0),setTimeout((function(){o(e.data),u(!1)}),O.N.delay)}),[o,u,e.data]);return(0,t.useEffect)((function(){e.notLoaded&&e.execute()}),[e]),(0,t.useEffect)((function(){l()}),[l]),{users:s,loading:c}}(),s=r.users,o=r.loading,i=function(r){e.close(),n.open({header:"Update",children:(0,y.jsx)("pre",{children:JSON.stringify(r,null,2)})})};return(0,y.jsxs)("div",{className:"users",children:[(0,y.jsx)(q,{}),(0,y.jsx)("six-card",{className:"users__table ".concat(o?"users__table--loading":""),children:(0,y.jsx)(P,{users:s,loading:o,selectUser:function(n){e.open({header:"User #".concat(n.id),children:(0,y.jsx)(I,{user:n,updateUser:i})})}})}),(0,y.jsx)(e.Component,{}),(0,y.jsx)(n.Component,{})]})}}}]);
//# sourceMappingURL=5657.0afa5ff3.chunk.js.map