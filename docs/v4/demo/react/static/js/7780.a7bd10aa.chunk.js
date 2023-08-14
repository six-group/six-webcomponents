"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[7780],{7780:function(e,t,n){n.d(t,{P:function(){return Ee}});var i=n(9249),o=n(7371),r="top",s="bottom",a="right",f="left",p="auto",c=[r,s,a,f],l="start",u="end",d="clippingParents",h="viewport",v="popper",m="reference",y=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+u])}),[]),g=[].concat(c,[p]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+u])}),[]),b=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function w(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function O(e){return e instanceof x(e).Element||e instanceof Element}function E(e){return e instanceof x(e).HTMLElement||e instanceof HTMLElement}function j(e){return"undefined"!==typeof ShadowRoot&&(e instanceof x(e).ShadowRoot||e instanceof ShadowRoot)}var A={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];E(o)&&w(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});E(i)&&w(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function k(e){return e.split("-")[0]}var D=Math.max,L=Math.min,C=Math.round;function P(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function T(){return!/^((?!chrome|android).)*safari/i.test(P())}function W(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),o=1,r=1;t&&E(e)&&(o=e.offsetWidth>0&&C(i.width)/e.offsetWidth||1,r=e.offsetHeight>0&&C(i.height)/e.offsetHeight||1);var s=(O(e)?x(e):window).visualViewport,a=!T()&&n,f=(i.left+(a&&s?s.offsetLeft:0))/o,p=(i.top+(a&&s?s.offsetTop:0))/r,c=i.width/o,l=i.height/r;return{width:c,height:l,top:p,right:f+c,bottom:p+l,left:f,x:f,y:p}}function H(e){var t=W(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function M(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&j(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function B(e){return x(e).getComputedStyle(e)}function V(e){return["table","td","th"].indexOf(w(e))>=0}function R(e){return((O(e)?e.ownerDocument:e.document)||window.document).documentElement}function _(e){return"html"===w(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||R(e)}function S(e){return E(e)&&"fixed"!==B(e).position?e.offsetParent:null}function q(e){for(var t=x(e),n=S(e);n&&V(n)&&"static"===B(n).position;)n=S(n);return n&&("html"===w(n)||"body"===w(n)&&"static"===B(n).position)?t:n||function(e){var t=/firefox/i.test(P());if(/Trident/i.test(P())&&E(e)&&"fixed"===B(e).position)return null;var n=_(e);for(j(n)&&(n=n.host);E(n)&&["html","body"].indexOf(w(n))<0;){var i=B(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function F(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function N(e,t,n){return D(e,L(t,n))}function I(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function U(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,o=e.options,p=n.elements.arrow,l=n.modifiersData.popperOffsets,u=k(n.placement),d=F(u),h=[f,a].indexOf(u)>=0?"height":"width";if(p&&l){var v=function(e,t){return I("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:U(e,c))}(o.padding,n),m=H(p),y="y"===d?r:f,g="y"===d?s:a,b=n.rects.reference[h]+n.rects.reference[d]-l[d]-n.rects.popper[h],w=l[d]-n.rects.reference[d],x=q(p),O=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,E=b/2-w/2,j=v[y],A=O-m[h]-v[g],D=O/2-m[h]/2+E,L=N(j,D,A),C=d;n.modifiersData[i]=((t={})[C]=L,t.centerOffset=L-D,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i)))&&M(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function X(e){return e.split("-")[1]}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,i=e.popperRect,o=e.placement,p=e.variation,c=e.offsets,l=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,m=e.isFixed,y=c.x,g=void 0===y?0:y,b=c.y,w=void 0===b?0:b,O="function"===typeof v?v({x:g,y:w}):{x:g,y:w};g=O.x,w=O.y;var E=c.hasOwnProperty("x"),j=c.hasOwnProperty("y"),A=f,k=r,D=window;if(h){var L=q(n),P="clientHeight",T="clientWidth";if(L===x(n)&&"static"!==B(L=R(n)).position&&"absolute"===l&&(P="scrollHeight",T="scrollWidth"),o===r||(o===f||o===a)&&p===u)k=s,w-=(m&&L===D&&D.visualViewport?D.visualViewport.height:L[P])-i.height,w*=d?1:-1;if(o===f||(o===r||o===s)&&p===u)A=a,g-=(m&&L===D&&D.visualViewport?D.visualViewport.width:L[T])-i.width,g*=d?1:-1}var W,H=Object.assign({position:l},h&&Y),M=!0===v?function(e,t){var n=e.x,i=e.y,o=t.devicePixelRatio||1;return{x:C(n*o)/o||0,y:C(i*o)/o||0}}({x:g,y:w},x(n)):{x:g,y:w};return g=M.x,w=M.y,d?Object.assign({},H,((W={})[k]=j?"0":"",W[A]=E?"0":"",W.transform=(D.devicePixelRatio||1)<=1?"translate("+g+"px, "+w+"px)":"translate3d("+g+"px, "+w+"px, 0)",W)):Object.assign({},H,((t={})[k]=j?w+"px":"",t[A]=E?g+"px":"",t.transform="",t))}var G={passive:!0};var J={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(function(e){return J[e]}))}var Q={start:"end",end:"start"};function $(e){return e.replace(/start|end/g,(function(e){return Q[e]}))}function ee(e){var t=x(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function te(e){return W(R(e)).left+ee(e).scrollLeft}function ne(e){var t=B(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function ie(e){return["html","body","#document"].indexOf(w(e))>=0?e.ownerDocument.body:E(e)&&ne(e)?e:ie(_(e))}function oe(e,t){var n;void 0===t&&(t=[]);var i=ie(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),r=x(i),s=o?[r].concat(r.visualViewport||[],ne(i)?i:[]):i,a=t.concat(s);return o?a:a.concat(oe(_(s)))}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t,n){return t===h?re(function(e,t){var n=x(e),i=R(e),o=n.visualViewport,r=i.clientWidth,s=i.clientHeight,a=0,f=0;if(o){r=o.width,s=o.height;var p=T();(p||!p&&"fixed"===t)&&(a=o.offsetLeft,f=o.offsetTop)}return{width:r,height:s,x:a+te(e),y:f}}(e,n)):O(t)?function(e,t){var n=W(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):re(function(e){var t,n=R(e),i=ee(e),o=null==(t=e.ownerDocument)?void 0:t.body,r=D(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=D(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+te(e),f=-i.scrollTop;return"rtl"===B(o||n).direction&&(a+=D(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:f}}(R(e)))}function ae(e,t,n,i){var o="clippingParents"===t?function(e){var t=oe(_(e)),n=["absolute","fixed"].indexOf(B(e).position)>=0&&E(e)?q(e):e;return O(n)?t.filter((function(e){return O(e)&&M(e,n)&&"body"!==w(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),s=r[0],a=r.reduce((function(t,n){var o=se(e,n,i);return t.top=D(o.top,t.top),t.right=L(o.right,t.right),t.bottom=L(o.bottom,t.bottom),t.left=D(o.left,t.left),t}),se(e,s,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){var t,n=e.reference,i=e.element,o=e.placement,p=o?k(o):null,c=o?X(o):null,d=n.x+n.width/2-i.width/2,h=n.y+n.height/2-i.height/2;switch(p){case r:t={x:d,y:n.y-i.height};break;case s:t={x:d,y:n.y+n.height};break;case a:t={x:n.x+n.width,y:h};break;case f:t={x:n.x-i.width,y:h};break;default:t={x:n.x,y:n.y}}var v=p?F(p):null;if(null!=v){var m="y"===v?"height":"width";switch(c){case l:t[v]=t[v]-(n[m]/2-i[m]/2);break;case u:t[v]=t[v]+(n[m]/2-i[m]/2)}}return t}function pe(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,f=n.strategy,p=void 0===f?e.strategy:f,l=n.boundary,u=void 0===l?d:l,y=n.rootBoundary,g=void 0===y?h:y,b=n.elementContext,w=void 0===b?v:b,x=n.altBoundary,E=void 0!==x&&x,j=n.padding,A=void 0===j?0:j,k=I("number"!==typeof A?A:U(A,c)),D=w===v?m:v,L=e.rects.popper,C=e.elements[E?D:w],P=ae(O(C)?C:C.contextElement||R(e.elements.popper),u,g,p),T=W(e.elements.reference),H=fe({reference:T,element:L,strategy:"absolute",placement:o}),M=re(Object.assign({},L,H)),B=w===v?M:T,V={top:P.top-B.top+k.top,bottom:B.bottom-P.bottom+k.bottom,left:P.left-B.left+k.left,right:B.right-P.right+k.right},_=e.modifiersData.offset;if(w===v&&_){var S=_[o];Object.keys(V).forEach((function(e){var t=[a,s].indexOf(e)>=0?1:-1,n=[r,s].indexOf(e)>=0?"y":"x";V[e]+=S[n]*t}))}return V}function ce(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,f=n.allowedAutoPlacements,p=void 0===f?g:f,l=X(i),u=l?a?y:y.filter((function(e){return X(e)===l})):c,d=u.filter((function(e){return p.indexOf(e)>=0}));0===d.length&&(d=u);var h=d.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:r,padding:s})[k(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,c=void 0===o||o,u=n.altAxis,d=void 0===u||u,h=n.fallbackPlacements,v=n.padding,m=n.boundary,y=n.rootBoundary,g=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,E=k(O),j=h||(E===O||!w?[K(O)]:function(e){if(k(e)===p)return[];var t=K(e);return[$(e),t,$(t)]}(O)),A=[O].concat(j).reduce((function(e,n){return e.concat(k(n)===p?ce(t,{placement:n,boundary:m,rootBoundary:y,padding:v,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),D=t.rects.reference,L=t.rects.popper,C=new Map,P=!0,T=A[0],W=0;W<A.length;W++){var H=A[W],M=k(H),B=X(H)===l,V=[r,s].indexOf(M)>=0,R=V?"width":"height",_=pe(t,{placement:H,boundary:m,rootBoundary:y,altBoundary:g,padding:v}),S=V?B?a:f:B?s:r;D[R]>L[R]&&(S=K(S));var q=K(S),F=[];if(c&&F.push(_[M]<=0),d&&F.push(_[S]<=0,_[q]<=0),F.every((function(e){return e}))){T=H,P=!1;break}C.set(H,F)}if(P)for(var N=function(e){var t=A.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},I=w?3:1;I>0;I--){if("break"===N(I))break}t.placement!==T&&(t.modifiersData[i]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[r,a,s,f].some((function(t){return e[t]>=0}))}var he={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.offset,s=void 0===o?[0,0]:o,p=g.reduce((function(e,n){return e[n]=function(e,t,n){var i=k(e),o=[f,r].indexOf(i)>=0?-1:1,s="function"===typeof n?n(Object.assign({},t,{placement:e})):n,p=s[0],c=s[1];return p=p||0,c=(c||0)*o,[f,a].indexOf(i)>=0?{x:c,y:p}:{x:p,y:c}}(n,t.rects,s),e}),{}),c=p[t.placement],l=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[i]=p}};var ve={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,p=void 0===o||o,c=n.altAxis,u=void 0!==c&&c,d=n.boundary,h=n.rootBoundary,v=n.altBoundary,m=n.padding,y=n.tether,g=void 0===y||y,b=n.tetherOffset,w=void 0===b?0:b,x=pe(t,{boundary:d,rootBoundary:h,padding:m,altBoundary:v}),O=k(t.placement),E=X(t.placement),j=!E,A=F(O),C="x"===A?"y":"x",P=t.modifiersData.popperOffsets,T=t.rects.reference,W=t.rects.popper,M="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,B="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(P){if(p){var _,S="y"===A?r:f,I="y"===A?s:a,U="y"===A?"height":"width",z=P[A],Y=z+x[S],Z=z-x[I],G=g?-W[U]/2:0,J=E===l?T[U]:W[U],K=E===l?-W[U]:-T[U],Q=t.elements.arrow,$=g&&Q?H(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[S],ne=ee[I],ie=N(0,T[U],$[U]),oe=j?T[U]/2-G-ie-te-B.mainAxis:J-ie-te-B.mainAxis,re=j?-T[U]/2+G+ie+ne+B.mainAxis:K+ie+ne+B.mainAxis,se=t.elements.arrow&&q(t.elements.arrow),ae=se?"y"===A?se.clientTop||0:se.clientLeft||0:0,fe=null!=(_=null==V?void 0:V[A])?_:0,ce=z+re-fe,le=N(g?L(Y,z+oe-fe-ae):Y,z,g?D(Z,ce):Z);P[A]=le,R[A]=le-z}if(u){var ue,de="x"===A?r:f,he="x"===A?s:a,ve=P[C],me="y"===C?"height":"width",ye=ve+x[de],ge=ve-x[he],be=-1!==[r,f].indexOf(O),we=null!=(ue=null==V?void 0:V[C])?ue:0,xe=be?ye:ve-T[me]-W[me]-we+B.altAxis,Oe=be?ve+T[me]+W[me]-we-B.altAxis:ge,Ee=g&&be?function(e,t,n){var i=N(e,t,n);return i>n?n:i}(xe,ve,Oe):N(g?xe:ye,ve,g?Oe:ge);P[C]=Ee,R[C]=Ee-ve}t.modifiersData[i]=R}},requiresIfExists:["offset"]};function me(e,t,n){void 0===n&&(n=!1);var i=E(t),o=E(t)&&function(e){var t=e.getBoundingClientRect(),n=C(t.width)/e.offsetWidth||1,i=C(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),r=R(t),s=W(e,o,n),a={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==w(t)||ne(r))&&(a=function(e){return e!==x(e)&&E(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:ee(e);var t}(t)),E(t)?((f=W(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):r&&(f.x=te(r))),{x:s.left+a.scrollLeft-f.x,y:s.top+a.scrollTop-f.y,width:s.width,height:s.height}}function ye(e){var t=new Map,n=new Set,i=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&o(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),i}function ge(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var be={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function xe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,r=void 0===o?be:o;return function(e,t,n){void 0===n&&(n=r);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},be,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],a=!1,f={state:o,setOptions:function(n){var a="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},r,o.options,a),o.scrollParents={reference:O(e)?oe(e):e.contextElement?oe(e.contextElement):[],popper:oe(t)};var c=function(e){var t=ye(e);return b.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(i,o.options.modifiers)));return o.orderedModifiers=c.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,r=e.effect;if("function"===typeof r){var a=r({state:o,name:t,instance:f,options:i}),p=function(){};s.push(a||p)}})),f.update()},forceUpdate:function(){if(!a){var e=o.elements,t=e.reference,n=e.popper;if(we(t,n)){o.rects={reference:me(t,q(n),"fixed"===o.options.strategy),popper:H(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<o.orderedModifiers.length;i++)if(!0!==o.reset){var r=o.orderedModifiers[i],s=r.fn,p=r.options,c=void 0===p?{}:p,l=r.name;"function"===typeof s&&(o=s({state:o,options:c,name:l,instance:f})||o)}else o.reset=!1,i=-1}}},update:ge((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){p(),a=!0}};if(!we(e,t))return f;function p(){s.forEach((function(e){return e()})),s=[]}return f.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Oe=xe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,f=x(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&p.forEach((function(e){e.addEventListener("scroll",n.update,G)})),a&&f.addEventListener("resize",n.update,G),function(){r&&p.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),a&&f.removeEventListener("resize",n.update,G)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,f=void 0===a||a,p={placement:k(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},A,he,le,ve,z,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,s=pe(t,{elementContext:"reference"}),a=pe(t,{altBoundary:!0}),f=ue(s,i),p=ue(a,o,r),c=de(f),l=de(p);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),Ee=function(){function e(t,n,o){(0,i.Z)(this,e),this.handleTransitionEnd=this.handleTransitionEnd.bind(this),this.anchor=t,this.popover=n,this.options=Object.assign({skidding:0,distance:0,placement:"bottom-start",strategy:"absolute",transitionElement:this.popover,visibleClass:"popover-visible",onAfterShow:function(){return Promise},onAfterHide:function(){return Promise},onTransitionEnd:function(){return Promise}},o),this.isVisible=!1,this.popover.hidden=!0,null!=this.options.visibleClass&&this.popover.classList.remove(this.options.visibleClass),this.popover.addEventListener("transitionend",this.handleTransitionEnd)}return(0,o.Z)(e,[{key:"handleTransitionEnd",value:function(e){var t,n;e.target===this.options.transitionElement&&(null===(t=this.options.onTransitionEnd)||void 0===t||t.call(this,e),this.isVisible||this.popover.hidden||(this.popover.hidden=!0,null!=this.options.visibleClass&&this.popover.classList.remove(this.options.visibleClass),null===(n=this.options.onAfterHide)||void 0===n||n.call(this)))}},{key:"destroy",value:function(){this.popover.removeEventListener("transitionend",this.handleTransitionEnd),this.popper&&(this.popper.destroy(),this.popper=void 0)}},{key:"show",value:function(){var e=this;this.isVisible=!0,this.popover.hidden=!1,requestAnimationFrame((function(){null!=e.options.visibleClass&&e.popover.classList.add(e.options.visibleClass)})),this.popper&&this.popper.destroy(),this.popper=Oe(this.anchor,this.popover,{placement:this.options.placement,strategy:this.options.strategy,modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.options.skidding,this.options.distance]}}]}),this.popover.addEventListener("transitionend",(function(){var t;return null===(t=e.options.onAfterShow)||void 0===t?void 0:t.call(e)}),{once:!0}),requestAnimationFrame((function(){var t;return null===(t=e.popper)||void 0===t?void 0:t.update()}))}},{key:"reposition",value:function(){var e;null===(e=this.popper)||void 0===e||e.update()}},{key:"hide",value:function(){this.isVisible=!1,null!=this.options.visibleClass&&this.popover.classList.remove(this.options.visibleClass)}},{key:"setOptions",value:function(e){var t=this;this.options=Object.assign(this.options,e),null!=this.options.visibleClass&&(this.isVisible?this.popover.classList.add(this.options.visibleClass):this.popover.classList.remove(this.options.visibleClass)),null!=this.popper&&(this.popper.setOptions({placement:this.options.placement,strategy:this.options.strategy}),requestAnimationFrame((function(){var e;return null===(e=t.popper)||void 0===e?void 0:e.update()})))}}]),e}()}}]);
//# sourceMappingURL=7780.a7bd10aa.chunk.js.map