var R="top",k="bottom",S="right",B="left",Pt="auto",pt=[R,k,S,B],Q="start",at="end",ce="clippingParents",Kt="viewport",it="popper",ue="reference",Nt=pt.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+at])},[]),Qt=[].concat(pt,[Pt]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+at])},[]),ve="beforeRead",de="read",he="afterRead",me="beforeMain",ge="main",ye="afterMain",be="beforeWrite",we="write",xe="afterWrite",Oe=[ve,de,he,me,ge,ye,be,we,xe];function V(e){return e?(e.nodeName||"").toLowerCase():null}function $(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){var t=$(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=$(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ct(e){if(typeof ShadowRoot>"u")return!1;var t=$(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ee(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var i=t.styles[r]||{},n=t.attributes[r]||{},o=t.elements[r];!L(o)||!V(o)||(Object.assign(o.style,i),Object.keys(n).forEach(function(f){var s=n[f];s===!1?o.removeAttribute(f):o.setAttribute(f,s===!0?"":s)}))})}function Ae(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(i){var n=t.elements[i],o=t.attributes[i]||{},f=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:r[i]),s=f.reduce(function(a,l){return a[l]="",a},{});!L(n)||!V(n)||(Object.assign(n.style,s),Object.keys(o).forEach(function(a){n.removeAttribute(a)}))})}}const Pe={name:"applyStyles",enabled:!0,phase:"write",fn:Ee,effect:Ae,requires:["computeStyles"]};function H(e){return e.split("-")[0]}var G=Math.max,gt=Math.min,Z=Math.round;function Et(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Zt(){return!/^((?!chrome|android).)*safari/i.test(Et())}function _(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var i=e.getBoundingClientRect(),n=1,o=1;t&&L(e)&&(n=e.offsetWidth>0&&Z(i.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Z(i.height)/e.offsetHeight||1);var f=J(e)?$(e):window,s=f.visualViewport,a=!Zt()&&r,l=(i.left+(a&&s?s.offsetLeft:0))/n,p=(i.top+(a&&s?s.offsetTop:0))/o,h=i.width/n,y=i.height/o;return{width:h,height:y,top:p,right:l+h,bottom:p+y,left:l,x:l,y:p}}function Dt(e){var t=_(e),r=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function _t(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ct(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function F(e){return $(e).getComputedStyle(e)}function Ce(e){return["table","td","th"].indexOf(V(e))>=0}function q(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function yt(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Ct(e)?e.host:null)||q(e)}function qt(e){return!L(e)||F(e).position==="fixed"?null:e.offsetParent}function De(e){var t=/firefox/i.test(Et()),r=/Trident/i.test(Et());if(r&&L(e)){var i=F(e);if(i.position==="fixed")return null}var n=yt(e);for(Ct(n)&&(n=n.host);L(n)&&["html","body"].indexOf(V(n))<0;){var o=F(n);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return n;n=n.parentNode}return null}function ft(e){for(var t=$(e),r=qt(e);r&&Ce(r)&&F(r).position==="static";)r=qt(r);return r&&(V(r)==="html"||V(r)==="body"&&F(r).position==="static")?t:r||De(e)||t}function jt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function nt(e,t,r){return G(e,gt(t,r))}function je(e,t,r){var i=nt(e,t,r);return i>r?r:i}function te(){return{top:0,right:0,bottom:0,left:0}}function ee(e){return Object.assign({},te(),e)}function re(e,t){return t.reduce(function(r,i){return r[i]=e,r},{})}var Re=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ee(typeof t!="number"?t:re(t,pt))};function Be(e){var t,r=e.state,i=e.name,n=e.options,o=r.elements.arrow,f=r.modifiersData.popperOffsets,s=H(r.placement),a=jt(s),l=[B,S].indexOf(s)>=0,p=l?"height":"width";if(!(!o||!f)){var h=Re(n.padding,r),y=Dt(o),c=a==="y"?R:B,w=a==="y"?k:S,d=r.rects.reference[p]+r.rects.reference[a]-f[a]-r.rects.popper[p],v=f[a]-r.rects.reference[a],b=ft(o),O=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,E=d/2-v/2,u=h[c],m=O-y[p]-h[w],g=O/2-y[p]/2+E,x=nt(u,g,m),C=a;r.modifiersData[i]=(t={},t[C]=x,t.centerOffset=x-g,t)}}function Te(e){var t=e.state,r=e.options,i=r.element,n=i===void 0?"[data-popper-arrow]":i;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||_t(t.elements.popper,n)&&(t.elements.arrow=n))}const $e={name:"arrow",enabled:!0,phase:"main",fn:Be,effect:Te,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tt(e){return e.split("-")[1]}var Le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ke(e,t){var r=e.x,i=e.y,n=t.devicePixelRatio||1;return{x:Z(r*n)/n||0,y:Z(i*n)/n||0}}function Xt(e){var t,r=e.popper,i=e.popperRect,n=e.placement,o=e.variation,f=e.offsets,s=e.position,a=e.gpuAcceleration,l=e.adaptive,p=e.roundOffsets,h=e.isFixed,y=f.x,c=y===void 0?0:y,w=f.y,d=w===void 0?0:w,v=typeof p=="function"?p({x:c,y:d}):{x:c,y:d};c=v.x,d=v.y;var b=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),E=B,u=R,m=window;if(l){var g=ft(r),x="clientHeight",C="clientWidth";if(g===$(r)&&(g=q(r),F(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",C="scrollWidth")),g=g,n===R||(n===B||n===S)&&o===at){u=k;var P=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];d-=P-i.height,d*=a?1:-1}if(n===B||(n===R||n===k)&&o===at){E=S;var A=h&&g===m&&m.visualViewport?m.visualViewport.width:g[C];c-=A-i.width,c*=a?1:-1}}var D=Object.assign({position:s},l&&Le),M=p===!0?ke({x:c,y:d},$(r)):{x:c,y:d};if(c=M.x,d=M.y,a){var j;return Object.assign({},D,(j={},j[u]=O?"0":"",j[E]=b?"0":"",j.transform=(m.devicePixelRatio||1)<=1?"translate("+c+"px, "+d+"px)":"translate3d("+c+"px, "+d+"px, 0)",j))}return Object.assign({},D,(t={},t[u]=O?d+"px":"",t[E]=b?c+"px":"",t.transform="",t))}function Se(e){var t=e.state,r=e.options,i=r.gpuAcceleration,n=i===void 0?!0:i,o=r.adaptive,f=o===void 0?!0:o,s=r.roundOffsets,a=s===void 0?!0:s,l={placement:H(t.placement),variation:tt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Xt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Xt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Me={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Se,data:{}};var ht={passive:!0};function We(e){var t=e.state,r=e.instance,i=e.options,n=i.scroll,o=n===void 0?!0:n,f=i.resize,s=f===void 0?!0:f,a=$(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&l.forEach(function(p){p.addEventListener("scroll",r.update,ht)}),s&&a.addEventListener("resize",r.update,ht),function(){o&&l.forEach(function(p){p.removeEventListener("scroll",r.update,ht)}),s&&a.removeEventListener("resize",r.update,ht)}}const He={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:We,data:{}};var Ve={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(e){return e.replace(/left|right|bottom|top/g,function(t){return Ve[t]})}var Fe={start:"end",end:"start"};function It(e){return e.replace(/start|end/g,function(t){return Fe[t]})}function Rt(e){var t=$(e),r=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:r,scrollTop:i}}function Bt(e){return _(q(e)).left+Rt(e).scrollLeft}function Ne(e,t){var r=$(e),i=q(e),n=r.visualViewport,o=i.clientWidth,f=i.clientHeight,s=0,a=0;if(n){o=n.width,f=n.height;var l=Zt();(l||!l&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:o,height:f,x:s+Bt(e),y:a}}function qe(e){var t,r=q(e),i=Rt(e),n=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=G(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-i.scrollLeft+Bt(e),a=-i.scrollTop;return F(n||r).direction==="rtl"&&(s+=G(r.clientWidth,n?n.clientWidth:0)-o),{width:o,height:f,x:s,y:a}}function Tt(e){var t=F(e),r=t.overflow,i=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+i)}function ie(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:L(e)&&Tt(e)?e:ie(yt(e))}function ot(e,t){var r;t===void 0&&(t=[]);var i=ie(e),n=i===((r=e.ownerDocument)==null?void 0:r.body),o=$(i),f=n?[o].concat(o.visualViewport||[],Tt(i)?i:[]):i,s=t.concat(f);return n?s:s.concat(ot(yt(f)))}function At(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Xe(e,t){var r=_(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Yt(e,t,r){return t===Kt?At(Ne(e,r)):J(t)?Xe(t,r):At(qe(q(e)))}function Ie(e){var t=ot(yt(e)),r=["absolute","fixed"].indexOf(F(e).position)>=0,i=r&&L(e)?ft(e):e;return J(i)?t.filter(function(n){return J(n)&&_t(n,i)&&V(n)!=="body"}):[]}function Ye(e,t,r,i){var n=t==="clippingParents"?Ie(e):[].concat(t),o=[].concat(n,[r]),f=o[0],s=o.reduce(function(a,l){var p=Yt(e,l,i);return a.top=G(p.top,a.top),a.right=gt(p.right,a.right),a.bottom=gt(p.bottom,a.bottom),a.left=G(p.left,a.left),a},Yt(e,f,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ne(e){var t=e.reference,r=e.element,i=e.placement,n=i?H(i):null,o=i?tt(i):null,f=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case R:a={x:f,y:t.y-r.height};break;case k:a={x:f,y:t.y+t.height};break;case S:a={x:t.x+t.width,y:s};break;case B:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var l=n?jt(n):null;if(l!=null){var p=l==="y"?"height":"width";switch(o){case Q:a[l]=a[l]-(t[p]/2-r[p]/2);break;case at:a[l]=a[l]+(t[p]/2-r[p]/2);break}}return a}function st(e,t){t===void 0&&(t={});var r=t,i=r.placement,n=i===void 0?e.placement:i,o=r.strategy,f=o===void 0?e.strategy:o,s=r.boundary,a=s===void 0?ce:s,l=r.rootBoundary,p=l===void 0?Kt:l,h=r.elementContext,y=h===void 0?it:h,c=r.altBoundary,w=c===void 0?!1:c,d=r.padding,v=d===void 0?0:d,b=ee(typeof v!="number"?v:re(v,pt)),O=y===it?ue:it,E=e.rects.popper,u=e.elements[w?O:y],m=Ye(J(u)?u:u.contextElement||q(e.elements.popper),a,p,f),g=_(e.elements.reference),x=ne({reference:g,element:E,strategy:"absolute",placement:n}),C=At(Object.assign({},E,x)),P=y===it?C:g,A={top:m.top-P.top+b.top,bottom:P.bottom-m.bottom+b.bottom,left:m.left-P.left+b.left,right:P.right-m.right+b.right},D=e.modifiersData.offset;if(y===it&&D){var M=D[n];Object.keys(A).forEach(function(j){var X=[S,k].indexOf(j)>=0?1:-1,I=[R,k].indexOf(j)>=0?"y":"x";A[j]+=M[I]*X})}return A}function ze(e,t){t===void 0&&(t={});var r=t,i=r.placement,n=r.boundary,o=r.rootBoundary,f=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,l=a===void 0?Qt:a,p=tt(i),h=p?s?Nt:Nt.filter(function(w){return tt(w)===p}):pt,y=h.filter(function(w){return l.indexOf(w)>=0});y.length===0&&(y=h);var c=y.reduce(function(w,d){return w[d]=st(e,{placement:d,boundary:n,rootBoundary:o,padding:f})[H(d)],w},{});return Object.keys(c).sort(function(w,d){return c[w]-c[d]})}function Ue(e){if(H(e)===Pt)return[];var t=mt(e);return[It(e),t,It(t)]}function Ge(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var n=r.mainAxis,o=n===void 0?!0:n,f=r.altAxis,s=f===void 0?!0:f,a=r.fallbackPlacements,l=r.padding,p=r.boundary,h=r.rootBoundary,y=r.altBoundary,c=r.flipVariations,w=c===void 0?!0:c,d=r.allowedAutoPlacements,v=t.options.placement,b=H(v),O=b===v,E=a||(O||!w?[mt(v)]:Ue(v)),u=[v].concat(E).reduce(function(K,N){return K.concat(H(N)===Pt?ze(t,{placement:N,boundary:p,rootBoundary:h,padding:l,flipVariations:w,allowedAutoPlacements:d}):N)},[]),m=t.rects.reference,g=t.rects.popper,x=new Map,C=!0,P=u[0],A=0;A<u.length;A++){var D=u[A],M=H(D),j=tt(D)===Q,X=[R,k].indexOf(M)>=0,I=X?"width":"height",T=st(t,{placement:D,boundary:p,rootBoundary:h,altBoundary:y,padding:l}),W=X?j?S:B:j?k:R;m[I]>g[I]&&(W=mt(W));var lt=mt(W),Y=[];if(o&&Y.push(T[M]<=0),s&&Y.push(T[W]<=0,T[lt]<=0),Y.every(function(K){return K})){P=D,C=!1;break}x.set(D,Y)}if(C)for(var ct=w?3:1,bt=function(N){var rt=u.find(function(vt){var z=x.get(vt);if(z)return z.slice(0,N).every(function(wt){return wt})});if(rt)return P=rt,"break"},et=ct;et>0;et--){var ut=bt(et);if(ut==="break")break}t.placement!==P&&(t.modifiersData[i]._skip=!0,t.placement=P,t.reset=!0)}}const Je={name:"flip",enabled:!0,phase:"main",fn:Ge,requiresIfExists:["offset"],data:{_skip:!1}};function zt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ut(e){return[R,S,k,B].some(function(t){return e[t]>=0})}function Ke(e){var t=e.state,r=e.name,i=t.rects.reference,n=t.rects.popper,o=t.modifiersData.preventOverflow,f=st(t,{elementContext:"reference"}),s=st(t,{altBoundary:!0}),a=zt(f,i),l=zt(s,n,o),p=Ut(a),h=Ut(l);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":h})}const Qe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ke};function Ze(e,t,r){var i=H(e),n=[B,R].indexOf(i)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=o[0],s=o[1];return f=f||0,s=(s||0)*n,[B,S].indexOf(i)>=0?{x:s,y:f}:{x:f,y:s}}function _e(e){var t=e.state,r=e.options,i=e.name,n=r.offset,o=n===void 0?[0,0]:n,f=Qt.reduce(function(p,h){return p[h]=Ze(h,t.rects,o),p},{}),s=f[t.placement],a=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=f}const tr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:_e};function er(e){var t=e.state,r=e.name;t.modifiersData[r]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const rr={name:"popperOffsets",enabled:!0,phase:"read",fn:er,data:{}};function ir(e){return e==="x"?"y":"x"}function nr(e){var t=e.state,r=e.options,i=e.name,n=r.mainAxis,o=n===void 0?!0:n,f=r.altAxis,s=f===void 0?!1:f,a=r.boundary,l=r.rootBoundary,p=r.altBoundary,h=r.padding,y=r.tether,c=y===void 0?!0:y,w=r.tetherOffset,d=w===void 0?0:w,v=st(t,{boundary:a,rootBoundary:l,padding:h,altBoundary:p}),b=H(t.placement),O=tt(t.placement),E=!O,u=jt(b),m=ir(u),g=t.modifiersData.popperOffsets,x=t.rects.reference,C=t.rects.popper,P=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(g){if(o){var j,X=u==="y"?R:B,I=u==="y"?k:S,T=u==="y"?"height":"width",W=g[u],lt=W+v[X],Y=W-v[I],ct=c?-C[T]/2:0,bt=O===Q?x[T]:C[T],et=O===Q?-C[T]:-x[T],ut=t.elements.arrow,K=c&&ut?Dt(ut):{width:0,height:0},N=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),rt=N[X],vt=N[I],z=nt(0,x[T],K[T]),wt=E?x[T]/2-ct-z-rt-A.mainAxis:bt-z-rt-A.mainAxis,oe=E?-x[T]/2+ct+z+vt+A.mainAxis:et+z+vt+A.mainAxis,xt=t.elements.arrow&&ft(t.elements.arrow),ae=xt?u==="y"?xt.clientTop||0:xt.clientLeft||0:0,$t=(j=D==null?void 0:D[u])!=null?j:0,se=W+wt-$t-ae,pe=W+oe-$t,Lt=nt(c?gt(lt,se):lt,W,c?G(Y,pe):Y);g[u]=Lt,M[u]=Lt-W}if(s){var kt,fe=u==="x"?R:B,le=u==="x"?k:S,U=g[m],dt=m==="y"?"height":"width",St=U+v[fe],Mt=U-v[le],Ot=[R,B].indexOf(b)!==-1,Wt=(kt=D==null?void 0:D[m])!=null?kt:0,Ht=Ot?St:U-x[dt]-C[dt]-Wt+A.altAxis,Vt=Ot?U+x[dt]+C[dt]-Wt-A.altAxis:Mt,Ft=c&&Ot?je(Ht,U,Vt):nt(c?Ht:St,U,c?Vt:Mt);g[m]=Ft,M[m]=Ft-U}t.modifiersData[i]=M}}const or={name:"preventOverflow",enabled:!0,phase:"main",fn:nr,requiresIfExists:["offset"]};function ar(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function sr(e){return e===$(e)||!L(e)?Rt(e):ar(e)}function pr(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,i=Z(t.height)/e.offsetHeight||1;return r!==1||i!==1}function fr(e,t,r){r===void 0&&(r=!1);var i=L(t),n=L(t)&&pr(t),o=q(t),f=_(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!r)&&((V(t)!=="body"||Tt(o))&&(s=sr(t)),L(t)?(a=_(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):o&&(a.x=Bt(o))),{x:f.left+s.scrollLeft-a.x,y:f.top+s.scrollTop-a.y,width:f.width,height:f.height}}function lr(e){var t=new Map,r=new Set,i=[];e.forEach(function(o){t.set(o.name,o)});function n(o){r.add(o.name);var f=[].concat(o.requires||[],o.requiresIfExists||[]);f.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),i.push(o)}return e.forEach(function(o){r.has(o.name)||n(o)}),i}function cr(e){var t=lr(e);return Oe.reduce(function(r,i){return r.concat(t.filter(function(n){return n.phase===i}))},[])}function ur(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function vr(e){var t=e.reduce(function(r,i){var n=r[i.name];return r[i.name]=n?Object.assign({},n,i,{options:Object.assign({},n.options,i.options),data:Object.assign({},n.data,i.data)}):i,r},{});return Object.keys(t).map(function(r){return t[r]})}var Gt={placement:"bottom",modifiers:[],strategy:"absolute"};function Jt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function dr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,i=r===void 0?[]:r,n=t.defaultOptions,o=n===void 0?Gt:n;return function(s,a,l){l===void 0&&(l=o);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gt,o),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},h=[],y=!1,c={state:p,setOptions:function(b){var O=typeof b=="function"?b(p.options):b;d(),p.options=Object.assign({},o,p.options,O),p.scrollParents={reference:J(s)?ot(s):s.contextElement?ot(s.contextElement):[],popper:ot(a)};var E=cr(vr([].concat(i,p.options.modifiers)));return p.orderedModifiers=E.filter(function(u){return u.enabled}),w(),c.update()},forceUpdate:function(){if(!y){var b=p.elements,O=b.reference,E=b.popper;if(Jt(O,E)){p.rects={reference:fr(O,ft(E),p.options.strategy==="fixed"),popper:Dt(E)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(A){return p.modifiersData[A.name]=Object.assign({},A.data)});for(var u=0;u<p.orderedModifiers.length;u++){if(p.reset===!0){p.reset=!1,u=-1;continue}var m=p.orderedModifiers[u],g=m.fn,x=m.options,C=x===void 0?{}:x,P=m.name;typeof g=="function"&&(p=g({state:p,options:C,name:P,instance:c})||p)}}}},update:ur(function(){return new Promise(function(v){c.forceUpdate(),v(p)})}),destroy:function(){d(),y=!0}};if(!Jt(s,a))return c;c.setOptions(l).then(function(v){!y&&l.onFirstUpdate&&l.onFirstUpdate(v)});function w(){p.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,E=O===void 0?{}:O,u=v.effect;if(typeof u=="function"){var m=u({state:p,name:b,instance:c,options:E}),g=function(){};h.push(m||g)}})}function d(){h.forEach(function(v){return v()}),h=[]}return c}}var hr=[He,rr,Me,Pe,tr,Je,or,$e,Qe],mr=dr({defaultModifiers:hr});class gr{constructor(t,r,i){this.handleTransitionEnd=this.handleTransitionEnd.bind(this),this.anchor=t,this.popover=r,this.options=Object.assign({skidding:0,distance:0,placement:"bottom-start",strategy:"absolute",transitionElement:this.popover,visibleClass:"popover-visible",onAfterShow:()=>Promise,onAfterHide:()=>Promise,onTransitionEnd:()=>Promise},i),this.isVisible=!1,this.popover.hidden=!0,this.options.visibleClass!=null&&this.popover.classList.remove(this.options.visibleClass),this.popover.addEventListener("transitionend",this.handleTransitionEnd)}handleTransitionEnd(t){var r,i;t.target===this.options.transitionElement&&((r=this.options.onTransitionEnd)===null||r===void 0||r.call(this,t),!this.isVisible&&!this.popover.hidden&&(this.popover.hidden=!0,this.options.visibleClass!=null&&this.popover.classList.remove(this.options.visibleClass),(i=this.options.onAfterHide)===null||i===void 0||i.call(this)))}destroy(){this.popover.removeEventListener("transitionend",this.handleTransitionEnd),this.popper&&(this.popper.destroy(),this.popper=void 0)}show(){this.isVisible=!0,this.popover.hidden=!1,requestAnimationFrame(()=>{this.options.visibleClass!=null&&this.popover.classList.add(this.options.visibleClass)}),this.popper&&this.popper.destroy(),this.popper=mr(this.anchor,this.popover,{placement:this.options.placement,strategy:this.options.strategy,modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.options.skidding,this.options.distance]}}]}),this.popover.addEventListener("transitionend",()=>{var t;return(t=this.options.onAfterShow)===null||t===void 0?void 0:t.call(this)},{once:!0}),requestAnimationFrame(()=>{var t;return(t=this.popper)===null||t===void 0?void 0:t.update()})}reposition(){var t;(t=this.popper)===null||t===void 0||t.update()}hide(){this.isVisible=!1,this.options.visibleClass!=null&&this.popover.classList.remove(this.options.visibleClass)}setOptions(t){this.options=Object.assign(this.options,t),this.options.visibleClass!=null&&(this.isVisible?this.popover.classList.add(this.options.visibleClass):this.popover.classList.remove(this.options.visibleClass)),this.popper!=null&&(this.popper.setOptions({placement:this.options.placement,strategy:this.options.strategy}),requestAnimationFrame(()=>{var r;return(r=this.popper)===null||r===void 0?void 0:r.update()}))}}export{gr as P};