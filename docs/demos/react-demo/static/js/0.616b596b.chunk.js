(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return me}));var i=n(14),o=n(15),r="top",s="bottom",a="right",f="left",p="auto",c=[r,s,a,f],u="start",l="end",d="viewport",h="popper",m=c.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+l])}),[]),v=[].concat(c,[p]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+l])}),[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function y(e){return e?(e.nodeName||"").toLowerCase():null}function b(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){return e instanceof b(e).Element||e instanceof Element}function x(e){return e instanceof b(e).HTMLElement||e instanceof HTMLElement}function O(e){return"undefined"!==typeof ShadowRoot&&(e instanceof b(e).ShadowRoot||e instanceof ShadowRoot)}var E={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];x(o)&&y(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});x(i)&&y(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function j(e){return e.split("-")[0]}var A=Math.max,k=Math.min,L=Math.round;function D(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,o=1;if(x(e)&&t){var r=e.offsetHeight,s=e.offsetWidth;s>0&&(i=L(n.width)/s||1),r>0&&(o=L(n.height)/r||1)}return{width:n.width/i,height:n.height/o,top:n.top/o,right:n.right/i,bottom:n.bottom/o,left:n.left/i,x:n.left/i,y:n.top/o}}function T(e){var t=D(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function M(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&O(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function P(e){return b(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(y(e))>=0}function C(e){return((w(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(O(e)?e.host:null)||C(e)}function B(e){return x(e)&&"fixed"!==P(e).position?e.offsetParent:null}function R(e){for(var t=b(e),n=B(e);n&&W(n)&&"static"===P(n).position;)n=B(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===P(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&x(e)&&"fixed"===P(e).position)return null;for(var n=H(e);x(n)&&["html","body"].indexOf(y(n))<0;){var i=P(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function S(e,t,n){return A(e,k(t,n))}function q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function F(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function N(e){return e.split("-")[1]}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(e){var t,n=e.popper,i=e.popperRect,o=e.placement,p=e.variation,c=e.offsets,u=e.position,d=e.gpuAcceleration,h=e.adaptive,m=e.roundOffsets,v=e.isFixed,g=c.x,y=void 0===g?0:g,w=c.y,x=void 0===w?0:w,O="function"===typeof m?m({x:y,y:x}):{x:y,y:x};y=O.x,x=O.y;var E=c.hasOwnProperty("x"),j=c.hasOwnProperty("y"),A=f,k=r,D=window;if(h){var T=R(n),M="clientHeight",W="clientWidth";if(T===b(n)&&"static"!==P(T=C(n)).position&&"absolute"===u&&(M="scrollHeight",W="scrollWidth"),T=T,o===r||(o===f||o===a)&&p===l)k=s,x-=(v&&D.visualViewport?D.visualViewport.height:T[M])-i.height,x*=d?1:-1;if(o===f||(o===r||o===s)&&p===l)A=a,y-=(v&&D.visualViewport?D.visualViewport.width:T[W])-i.width,y*=d?1:-1}var H,B=Object.assign({position:u},h&&I),V=!0===m?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:L(t*i)/i||0,y:L(n*i)/i||0}}({x:y,y:x}):{x:y,y:x};return y=V.x,x=V.y,d?Object.assign({},B,((H={})[k]=j?"0":"",H[A]=E?"0":"",H.transform=(D.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",H)):Object.assign({},B,((t={})[k]=j?x+"px":"",t[A]=E?y+"px":"",t.transform="",t))}var z={passive:!0};var _={left:"right",right:"left",bottom:"top",top:"bottom"};function J(e){return e.replace(/left|right|bottom|top/g,(function(e){return _[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e){var t=b(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(e){return D(C(e)).left+G(e).scrollLeft}function Q(e){var t=P(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function Z(e){return["html","body","#document"].indexOf(y(e))>=0?e.ownerDocument.body:x(e)&&Q(e)?e:Z(H(e))}function $(e,t){var n;void 0===t&&(t=[]);var i=Z(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),r=b(i),s=o?[r].concat(r.visualViewport||[],Q(i)?i:[]):i,a=t.concat(s);return o?a:a.concat($(H(s)))}function ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===d?ee(function(e){var t=b(e),n=C(e),i=t.visualViewport,o=n.clientWidth,r=n.clientHeight,s=0,a=0;return i&&(o=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,a=i.offsetTop)),{width:o,height:r,x:s+K(e),y:a}}(e)):w(t)?function(e){var t=D(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){var t,n=C(e),i=G(e),o=null==(t=e.ownerDocument)?void 0:t.body,r=A(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=A(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+K(e),f=-i.scrollTop;return"rtl"===P(o||n).direction&&(a+=A(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:f}}(C(e)))}function ne(e,t,n){var i="clippingParents"===t?function(e){var t=$(H(e)),n=["absolute","fixed"].indexOf(P(e).position)>=0&&x(e)?R(e):e;return w(n)?t.filter((function(e){return w(e)&&M(e,n)&&"body"!==y(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),r=o[0],s=o.reduce((function(t,n){var i=te(e,n);return t.top=A(i.top,t.top),t.right=k(i.right,t.right),t.bottom=k(i.bottom,t.bottom),t.left=A(i.left,t.left),t}),te(e,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ie(e){var t,n=e.reference,i=e.element,o=e.placement,p=o?j(o):null,c=o?N(o):null,d=n.x+n.width/2-i.width/2,h=n.y+n.height/2-i.height/2;switch(p){case r:t={x:d,y:n.y-i.height};break;case s:t={x:d,y:n.y+n.height};break;case a:t={x:n.x+n.width,y:h};break;case f:t={x:n.x-i.width,y:h};break;default:t={x:n.x,y:n.y}}var m=p?V(p):null;if(null!=m){var v="y"===m?"height":"width";switch(c){case u:t[m]=t[m]-(n[v]/2-i[v]/2);break;case l:t[m]=t[m]+(n[v]/2-i[v]/2)}}return t}function oe(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,f=n.boundary,p=void 0===f?"clippingParents":f,u=n.rootBoundary,l=void 0===u?d:u,m=n.elementContext,v=void 0===m?h:m,g=n.altBoundary,y=void 0!==g&&g,b=n.padding,x=void 0===b?0:b,O=q("number"!==typeof x?x:F(x,c)),E=v===h?"reference":h,j=e.rects.popper,A=e.elements[y?E:v],k=ne(w(A)?A:A.contextElement||C(e.elements.popper),p,l),L=D(e.elements.reference),T=ie({reference:L,element:j,strategy:"absolute",placement:o}),M=ee(Object.assign({},j,T)),P=v===h?M:L,W={top:k.top-P.top+O.top,bottom:P.bottom-k.bottom+O.bottom,left:k.left-P.left+O.left,right:P.right-k.right+O.right},H=e.modifiersData.offset;if(v===h&&H){var B=H[o];Object.keys(W).forEach((function(e){var t=[a,s].indexOf(e)>=0?1:-1,n=[r,s].indexOf(e)>=0?"y":"x";W[e]+=B[n]*t}))}return W}function re(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,f=n.allowedAutoPlacements,p=void 0===f?v:f,u=N(i),l=u?a?m:m.filter((function(e){return N(e)===u})):c,d=l.filter((function(e){return p.indexOf(e)>=0}));0===d.length&&(d=l);var h=d.reduce((function(t,n){return t[n]=oe(e,{placement:n,boundary:o,rootBoundary:r,padding:s})[j(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}function se(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[r,a,s,f].some((function(t){return e[t]>=0}))}function fe(e,t,n){void 0===n&&(n=!1);var i=x(t),o=x(t)&&function(e){var t=e.getBoundingClientRect(),n=L(t.width)/e.offsetWidth||1,i=L(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),r=C(t),s=D(e,o),a={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(i||!i&&!n)&&(("body"!==y(t)||Q(r))&&(a=function(e){return e!==b(e)&&x(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:G(e);var t}(t)),x(t)?((f=D(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):r&&(f.x=K(r))),{x:s.left+a.scrollLeft-f.x,y:s.top+a.scrollTop-f.y,width:s.width,height:s.height}}function pe(e){var t=new Map,n=new Set,i=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&o(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),i}function ce(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ue={placement:"bottom",modifiers:[],strategy:"absolute"};function le(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function de(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,r=void 0===o?ue:o;return function(e,t,n){void 0===n&&(n=r);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ue,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],a=!1,f={state:o,setOptions:function(n){var a="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},r,o.options,a),o.scrollParents={reference:w(e)?$(e):e.contextElement?$(e.contextElement):[],popper:$(t)};var c=function(e){var t=pe(e);return g.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(i,o.options.modifiers)));return o.orderedModifiers=c.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,r=e.effect;if("function"===typeof r){var a=r({state:o,name:t,instance:f,options:i}),p=function(){};s.push(a||p)}})),f.update()},forceUpdate:function(){if(!a){var e=o.elements,t=e.reference,n=e.popper;if(le(t,n)){o.rects={reference:fe(t,R(n),"fixed"===o.options.strategy),popper:T(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<o.orderedModifiers.length;i++)if(!0!==o.reset){var r=o.orderedModifiers[i],s=r.fn,p=r.options,c=void 0===p?{}:p,u=r.name;"function"===typeof s&&(o=s({state:o,options:c,name:u,instance:f})||o)}else o.reset=!1,i=-1}}},update:ce((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){p(),a=!0}};if(!le(e,t))return f;function p(){s.forEach((function(e){return e()})),s=[]}return f.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var he=de({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,f=b(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&p.forEach((function(e){e.addEventListener("scroll",n.update,z)})),a&&f.addEventListener("resize",n.update,z),function(){r&&p.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),a&&f.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ie({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,f=void 0===a||a,p={placement:j(t.placement),variation:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,U(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,U(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},E,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.offset,s=void 0===o?[0,0]:o,p=v.reduce((function(e,n){return e[n]=function(e,t,n){var i=j(e),o=[f,r].indexOf(i)>=0?-1:1,s="function"===typeof n?n(Object.assign({},t,{placement:e})):n,p=s[0],c=s[1];return p=p||0,c=(c||0)*o,[f,a].indexOf(i)>=0?{x:c,y:p}:{x:p,y:c}}(n,t.rects,s),e}),{}),c=p[t.placement],u=c.x,l=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=p}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,c=void 0===o||o,l=n.altAxis,d=void 0===l||l,h=n.fallbackPlacements,m=n.padding,v=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=t.options.placement,E=j(O),A=h||(E===O||!w?[J(O)]:function(e){if(j(e)===p)return[];var t=J(e);return[Y(e),t,Y(t)]}(O)),k=[O].concat(A).reduce((function(e,n){return e.concat(j(n)===p?re(t,{placement:n,boundary:v,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),L=t.rects.reference,D=t.rects.popper,T=new Map,M=!0,P=k[0],W=0;W<k.length;W++){var C=k[W],H=j(C),B=N(C)===u,R=[r,s].indexOf(H)>=0,V=R?"width":"height",S=oe(t,{placement:C,boundary:v,rootBoundary:g,altBoundary:y,padding:m}),q=R?B?a:f:B?s:r;L[V]>D[V]&&(q=J(q));var F=J(q),I=[];if(c&&I.push(S[H]<=0),d&&I.push(S[q]<=0,S[F]<=0),I.every((function(e){return e}))){P=C,M=!1;break}T.set(C,I)}if(M)for(var U=function(e){var t=k.find((function(t){var n=T.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},z=w?3:1;z>0;z--){if("break"===U(z))break}t.placement!==P&&(t.modifiersData[i]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,p=void 0===o||o,c=n.altAxis,l=void 0!==c&&c,d=n.boundary,h=n.rootBoundary,m=n.altBoundary,v=n.padding,g=n.tether,y=void 0===g||g,b=n.tetherOffset,w=void 0===b?0:b,x=oe(t,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),O=j(t.placement),E=N(t.placement),L=!E,D=V(O),M="x"===D?"y":"x",P=t.modifiersData.popperOffsets,W=t.rects.reference,C=t.rects.popper,H="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,B="number"===typeof H?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,F={x:0,y:0};if(P){if(p){var I,U="y"===D?r:f,z="y"===D?s:a,_="y"===D?"height":"width",J=P[D],X=J+x[U],Y=J-x[z],G=y?-C[_]/2:0,K=E===u?W[_]:C[_],Q=E===u?-C[_]:-W[_],Z=t.elements.arrow,$=y&&Z?T(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],ne=ee[z],ie=S(0,W[_],$[_]),re=L?W[_]/2-G-ie-te-B.mainAxis:K-ie-te-B.mainAxis,se=L?-W[_]/2+G+ie+ne+B.mainAxis:Q+ie+ne+B.mainAxis,ae=t.elements.arrow&&R(t.elements.arrow),fe=ae?"y"===D?ae.clientTop||0:ae.clientLeft||0:0,pe=null!=(I=null==q?void 0:q[D])?I:0,ce=J+se-pe,ue=S(y?k(X,J+re-pe-fe):X,J,y?A(Y,ce):Y);P[D]=ue,F[D]=ue-J}if(l){var le,de="x"===D?r:f,he="x"===D?s:a,me=P[M],ve="y"===M?"height":"width",ge=me+x[de],ye=me-x[he],be=-1!==[r,f].indexOf(O),we=null!=(le=null==q?void 0:q[M])?le:0,xe=be?ge:me-W[ve]-C[ve]-we+B.altAxis,Oe=be?me+W[ve]+C[ve]-we-B.altAxis:ye,Ee=y&&be?function(e,t,n){var i=S(e,t,n);return i>n?n:i}(xe,me,Oe):S(y?xe:ge,me,y?Oe:ye);P[M]=Ee,F[M]=Ee-me}t.modifiersData[i]=F}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,o=e.options,p=n.elements.arrow,u=n.modifiersData.popperOffsets,l=j(n.placement),d=V(l),h=[f,a].indexOf(l)>=0?"height":"width";if(p&&u){var m=function(e,t){return q("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:F(e,c))}(o.padding,n),v=T(p),g="y"===d?r:f,y="y"===d?s:a,b=n.rects.reference[h]+n.rects.reference[d]-u[d]-n.rects.popper[h],w=u[d]-n.rects.reference[d],x=R(p),O=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,E=b/2-w/2,A=m[g],k=O-v[h]-m[y],L=O/2-v[h]/2+E,D=S(A,L,k),M=d;n.modifiersData[i]=((t={})[M]=D,t.centerOffset=D-L,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i)))&&M(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,s=oe(t,{elementContext:"reference"}),a=oe(t,{altBoundary:!0}),f=se(s,i),p=se(a,o,r),c=ae(f),u=ae(p);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}),me=function(){function e(t,n,o){Object(i.a)(this,e),this.handleTransitionEnd=this.handleTransitionEnd.bind(this),this.anchor=t,this.popover=n,this.options=Object.assign({skidding:0,distance:0,placement:"bottom-start",strategy:"absolute",transitionElement:this.popover,visibleClass:"popover-visible",onAfterShow:function(){},onAfterHide:function(){},onTransitionEnd:function(){}},o),this.isVisible=!1,this.popover.hidden=!0,this.popover.classList.remove(this.options.visibleClass),this.popover.addEventListener("transitionend",this.handleTransitionEnd)}return Object(o.a)(e,[{key:"handleTransitionEnd",value:function(e){e.target===this.options.transitionElement&&(this.options.onTransitionEnd.call(this,e),this.isVisible||this.popover.hidden||(this.popover.hidden=!0,this.popover.classList.remove(this.options.visibleClass),this.options.onAfterHide.call(this)))}},{key:"destroy",value:function(){this.popover.removeEventListener("transitionend",this.handleTransitionEnd),this.popper&&(this.popper.destroy(),this.popper=null)}},{key:"show",value:function(){var e=this;this.isVisible=!0,this.popover.hidden=!1,requestAnimationFrame((function(){return e.popover.classList.add(e.options.visibleClass)})),this.popper&&this.popper.destroy(),this.popper=he(this.anchor,this.popover,{placement:this.options.placement,strategy:this.options.strategy,modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.options.skidding,this.options.distance]}}]}),this.popover.addEventListener("transitionend",(function(){return e.options.onAfterShow.call(e)}),{once:!0}),requestAnimationFrame((function(){var t;return null===(t=e.popper)||void 0===t?void 0:t.update()}))}},{key:"reposition",value:function(){this.popper.update()}},{key:"hide",value:function(){this.isVisible=!1,this.popover.classList.remove(this.options.visibleClass)}},{key:"setOptions",value:function(e){var t=this;this.options=Object.assign(this.options,e),this.isVisible?this.popover.classList.add(this.options.visibleClass):this.popover.classList.remove(this.options.visibleClass),this.popper&&(this.popper.setOptions({placement:this.options.placement,strategy:this.options.strategy}),requestAnimationFrame((function(){return t.popper.update()})))}}]),e}()}}]);
//# sourceMappingURL=0.616b596b.chunk.js.map