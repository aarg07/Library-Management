function Pd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in e)){const a=Object.getOwnPropertyDescriptor(n,l);a&&Object.defineProperty(e,l,a.get?a:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},Ol={},Js={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn=Symbol.for("react.element"),Rd=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Eo=Symbol.iterator;function Hd(e){return e===null||typeof e!="object"?null:(e=Eo&&e[Eo]||e["@@iterator"],typeof e=="function"?e:null)}var Xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qs=Object.assign,Zs={};function zr(e,t,r){this.props=e,this.context=t,this.refs=Zs,this.updater=r||Xs}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eu(){}eu.prototype=zr.prototype;function Si(e,t,r){this.props=e,this.context=t,this.refs=Zs,this.updater=r||Xs}var Ci=Si.prototype=new eu;Ci.constructor=Si;qs(Ci,zr.prototype);Ci.isPureReactComponent=!0;var zo=Array.isArray,tu=Object.prototype.hasOwnProperty,Ei={current:null},ru={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,r){var n,l={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)tu.call(t,n)&&!ru.hasOwnProperty(n)&&(l[n]=t[n]);var u=arguments.length-2;if(u===1)l.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps,u)l[n]===void 0&&(l[n]=u[n]);return{$$typeof:Sn,type:e,key:a,ref:o,props:l,_owner:Ei.current}}function Vd(e,t){return{$$typeof:Sn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sn}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var _o=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function Jn(e,t,r,n,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Sn:case Rd:o=!0}}if(o)return o=e,l=l(o),e=n===""?"."+ta(o,0):n,zo(l)?(r="",e!=null&&(r=e.replace(_o,"$&/")+"/"),Jn(l,t,r,"",function(c){return c})):l!=null&&(zi(l)&&(l=Vd(l,r+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(_o,"$&/")+"/")+e)),t.push(l)),1;if(o=0,n=n===""?".":n+":",zo(e))for(var u=0;u<e.length;u++){a=e[u];var s=n+ta(a,u);o+=Jn(a,t,r,s,l)}else if(s=Hd(e),typeof s=="function")for(e=s.call(e),u=0;!(a=e.next()).done;)a=a.value,s=n+ta(a,u++),o+=Jn(a,t,r,s,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Tn(e,t,r){if(e==null)return e;var n=[],l=0;return Jn(e,n,"","",function(a){return t.call(r,a,l++)}),n}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Xn={transition:null},Yd={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Xn,ReactCurrentOwner:Ei};function lu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Tn,forEach:function(e,t,r){Tn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!zi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=zr;H.Fragment=Md;H.Profiler=Od;H.PureComponent=Si;H.StrictMode=Dd;H.Suspense=Fd;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;H.act=lu;H.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=qs({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ei.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)tu.call(t,s)&&!ru.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];n.children=u}return{$$typeof:Sn,type:e.type,key:l,ref:a,props:n,_owner:o}};H.createContext=function(e){return e={$$typeof:Bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};H.createElement=nu;H.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Ad,render:e}};H.isValidElement=zi;H.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Qd}};H.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Xn.transition;Xn.transition={};try{e()}finally{Xn.transition=t}};H.unstable_act=lu;H.useCallback=function(e,t){return Ce.current.useCallback(e,t)};H.useContext=function(e){return Ce.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ce.current.useEffect(e,t)};H.useId=function(){return Ce.current.useId()};H.useImperativeHandle=function(e,t,r){return Ce.current.useImperativeHandle(e,t,r)};H.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ce.current.useMemo(e,t)};H.useReducer=function(e,t,r){return Ce.current.useReducer(e,t,r)};H.useRef=function(e){return Ce.current.useRef(e)};H.useState=function(e){return Ce.current.useState(e)};H.useSyncExternalStore=function(e,t,r){return Ce.current.useSyncExternalStore(e,t,r)};H.useTransition=function(){return Ce.current.useTransition()};H.version="18.3.1";Js.exports=H;var v=Js.exports;const au=Td(v),Gd=Pd({__proto__:null,default:au},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=v,Jd=Symbol.for("react.element"),Xd=Symbol.for("react.fragment"),qd=Object.prototype.hasOwnProperty,Zd=Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ef={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,r){var n,l={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)qd.call(t,n)&&!ef.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:Jd,type:e,key:a,ref:o,props:l,_owner:Zd.current}}Ol.Fragment=Xd;Ol.jsx=iu;Ol.jsxs=iu;Ks.exports=Ol;var i=Ks.exports,_a={},ou={exports:{}},Ae={},su={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,I){var z=E.length;E.push(I);e:for(;0<z;){var B=z-1>>>1,Q=E[B];if(0<l(Q,I))E[B]=I,E[z]=Q,z=B;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var I=E[0],z=E.pop();if(z!==I){E[0]=z;e:for(var B=0,Q=E.length,P=Q>>>1;B<P;){var F=2*(B+1)-1,D=E[F],J=F+1,Me=E[J];if(0>l(D,z))J<Q&&0>l(Me,D)?(E[B]=Me,E[J]=z,B=J):(E[B]=D,E[F]=z,B=F);else if(J<Q&&0>l(Me,z))E[B]=Me,E[J]=z,B=J;else break e}}return I}function l(E,I){var z=E.sortIndex-I.sortIndex;return z!==0?z:E.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],h=1,m=null,g=3,y=!1,j=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var I=r(c);I!==null;){if(I.callback===null)n(c);else if(I.startTime<=E)n(c),I.sortIndex=I.expirationTime,t(s,I);else break;I=r(c)}}function x(E){if(b=!1,p(E),!j)if(r(s)!==null)j=!0,de(N);else{var I=r(c);I!==null&&U(x,I.startTime-E)}}function N(E,I){j=!1,b&&(b=!1,f(_),_=-1),y=!0;var z=g;try{for(p(I),m=r(s);m!==null&&(!(m.expirationTime>I)||E&&!R());){var B=m.callback;if(typeof B=="function"){m.callback=null,g=m.priorityLevel;var Q=B(m.expirationTime<=I);I=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===r(s)&&n(s),p(I)}else n(s);m=r(s)}if(m!==null)var P=!0;else{var F=r(c);F!==null&&U(x,F.startTime-I),P=!1}return P}finally{m=null,g=z,y=!1}}var L=!1,T=null,_=-1,$=5,O=-1;function R(){return!(e.unstable_now()-O<$)}function A(){if(T!==null){var E=e.unstable_now();O=E;var I=!0;try{I=T(!0,E)}finally{I?me():(L=!1,T=null)}}else L=!1}var me;if(typeof d=="function")me=function(){d(A)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Re=ae.port2;ae.port1.onmessage=A,me=function(){Re.postMessage(null)}}else me=function(){C(A,0)};function de(E){T=E,L||(L=!0,me())}function U(E,I){_=C(function(){E(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){j||y||(j=!0,de(N))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var z=g;g=I;try{return E()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,I){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=g;g=E;try{return I()}finally{g=z}},e.unstable_scheduleCallback=function(E,I,z){var B=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?B+z:B):z=B,E){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=z+Q,E={id:h++,callback:I,priorityLevel:E,startTime:z,expirationTime:Q,sortIndex:-1},z>B?(E.sortIndex=z,t(c,E),r(s)===null&&E===r(c)&&(b?(f(_),_=-1):b=!0,U(x,z-B))):(E.sortIndex=Q,t(s,E),j||y||(j=!0,de(N))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var I=g;return function(){var z=g;g=I;try{return E.apply(this,arguments)}finally{g=z}}}})(uu);su.exports=uu;var tf=su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=v,Be=tf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,ln={};function Zt(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(ln[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lo={},Po={};function lf(e){return La.call(Po,e)?!0:La.call(Lo,e)?!1:nf.test(e)?Po[e]=!0:(Lo[e]=!0,!1)}function af(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function of(e,t,r,n){if(t===null||typeof t>"u"||af(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,r,n,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var _i=/[\-:]([a-z])/g;function Li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_i,Li);xe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_i,Li);xe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_i,Li);xe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pi(e,t,r,n){var l=xe.hasOwnProperty(t)?xe[t]:null;(l!==null?l.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(of(t,r,l,n)&&(r=null),n||l===null?lf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,n=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ht=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rn=Symbol.for("react.element"),nr=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Ti=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),Ri=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),Mi=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),To=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ra;function Vr(e){if(ra===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ra=t&&t[1]||""}return`
`+ra+e}var na=!1;function la(e,t){if(!e||na)return"";na=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),a=n.stack.split(`
`),o=l.length-1,u=a.length-1;1<=o&&0<=u&&l[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==a[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==a[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{na=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Vr(e):""}function sf(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=la(e.type,!1),e;case 11:return e=la(e.type.render,!1),e;case 1:return e=la(e.type,!0),e;default:return""}}function Ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case nr:return"Portal";case Pa:return"Profiler";case Ti:return"StrictMode";case Ta:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case Ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mi:return t=e.displayName||null,t!==null?t:Ma(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Ma(e(t))}catch{}}return null}function uf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(t);case 8:return t===Ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cf(e){var t=mu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mn(e){e._valueTracker||(e._valueTracker=cf(e))}function hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=mu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var r=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ro(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Rt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&Pi(e,"checked",t,!1)}function Oa(e,t){gu(e,t);var r=Rt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ia(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ia(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ia(e,t,r){(t!=="number"||cl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Wr=Array.isArray;function hr(e,t,r,n){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Rt(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Do(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(Wr(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Rt(r)}}function vu(e,t){var r=Rt(t.value),n=Rt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Oo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dn,xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dn=Dn||document.createElement("div"),Dn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function an(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},df=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function wu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,l=wu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,l):e[r]=l}}var ff=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(ff[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function $a(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,gr=null,vr=null;function Io(e){if(e=zn(e)){if(typeof Ha!="function")throw Error(S(280));var t=e.stateNode;t&&(t=$l(t),Ha(e.stateNode,e.type,t))}}function ju(e){gr?vr?vr.push(e):vr=[e]:gr=e}function bu(){if(gr){var e=gr,t=vr;if(vr=gr=null,Io(e),t)for(e=0;e<t.length;e++)Io(t[e])}}function Nu(e,t){return e(t)}function Su(){}var aa=!1;function Cu(e,t,r){if(aa)return e(t,r);aa=!0;try{return Nu(e,t,r)}finally{aa=!1,(gr!==null||vr!==null)&&(Su(),bu())}}function on(e,t){var r=e.stateNode;if(r===null)return null;var n=$l(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var Va=!1;if(dt)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Va=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Va=!1}function pf(e,t,r,n,l,a,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var Jr=!1,dl=null,fl=!1,Wa=null,mf={onError:function(e){Jr=!0,dl=e}};function hf(e,t,r,n,l,a,o,u,s){Jr=!1,dl=null,pf.apply(mf,arguments)}function gf(e,t,r,n,l,a,o,u,s){if(hf.apply(this,arguments),Jr){if(Jr){var c=dl;Jr=!1,dl=null}else throw Error(S(198));fl||(fl=!0,Wa=c)}}function er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bo(e){if(er(e)!==e)throw Error(S(188))}function vf(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var l=r.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){r=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===r)return Bo(l),e;if(a===n)return Bo(l),t;a=a.sibling}throw Error(S(188))}if(r.return!==n.return)r=l,n=a;else{for(var o=!1,u=l.child;u;){if(u===r){o=!0,r=l,n=a;break}if(u===n){o=!0,n=l,r=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===r){o=!0,r=a,n=l;break}if(u===n){o=!0,n=a,r=l;break}u=u.sibling}if(!o)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function zu(e){return e=vf(e),e!==null?_u(e):null}function _u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_u(e);if(t!==null)return t;e=e.sibling}return null}var Lu=Be.unstable_scheduleCallback,Ao=Be.unstable_cancelCallback,yf=Be.unstable_shouldYield,xf=Be.unstable_requestPaint,oe=Be.unstable_now,wf=Be.unstable_getCurrentPriorityLevel,Oi=Be.unstable_ImmediatePriority,Pu=Be.unstable_UserBlockingPriority,pl=Be.unstable_NormalPriority,kf=Be.unstable_LowPriority,Tu=Be.unstable_IdlePriority,Il=null,lt=null;function jf(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Sf,bf=Math.log,Nf=Math.LN2;function Sf(e){return e>>>=0,e===0?32:31-(bf(e)/Nf|0)|0}var On=64,In=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ml(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var u=o&~l;u!==0?n=Qr(u):(a&=o,a!==0&&(n=Qr(a)))}else o=r&~l,o!==0?n=Qr(o):a!==0&&(n=Qr(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&l)&&(l=n&-n,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Xe(t),l=1<<r,n|=e[r],t&=~l;return n}function Cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Xe(a),u=1<<o,s=l[o];s===-1?(!(u&r)||u&n)&&(l[o]=Cf(u,t)):s<=t&&(e.expiredLanes|=u),a&=~u}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ru(){var e=On;return On<<=1,!(On&4194240)&&(On=64),e}function ia(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Cn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=r}function zf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Xe(r),a=1<<l;t[l]=0,n[l]=-1,e[l]=-1,r&=~a}}function Ii(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Xe(r),l=1<<n;l&t|e[n]&t&&(e[n]|=t),r&=~l}}var K=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Du,Bi,Ou,Iu,Bu,Ya=!1,Bn=[],Nt=null,St=null,Ct=null,sn=new Map,un=new Map,xt=[],_f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fo(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function Br(e,t,r,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},t!==null&&(t=zn(t),t!==null&&Bi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Lf(e,t,r,n,l){switch(t){case"focusin":return Nt=Br(Nt,e,t,r,n,l),!0;case"dragenter":return St=Br(St,e,t,r,n,l),!0;case"mouseover":return Ct=Br(Ct,e,t,r,n,l),!0;case"pointerover":var a=l.pointerId;return sn.set(a,Br(sn.get(a)||null,e,t,r,n,l)),!0;case"gotpointercapture":return a=l.pointerId,un.set(a,Br(un.get(a)||null,e,t,r,n,l)),!0}return!1}function Au(e){var t=Ut(e.target);if(t!==null){var r=er(t);if(r!==null){if(t=r.tag,t===13){if(t=Eu(r),t!==null){e.blockedOn=t,Bu(e.priority,function(){Ou(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ua=n,r.target.dispatchEvent(n),Ua=null}else return t=zn(r),t!==null&&Bi(t),e.blockedOn=r,!1;t.shift()}return!0}function $o(e,t,r){qn(e)&&r.delete(t)}function Pf(){Ya=!1,Nt!==null&&qn(Nt)&&(Nt=null),St!==null&&qn(St)&&(St=null),Ct!==null&&qn(Ct)&&(Ct=null),sn.forEach($o),un.forEach($o)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ya||(Ya=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Pf)))}function cn(e){function t(l){return Ar(l,e)}if(0<Bn.length){Ar(Bn[0],e);for(var r=1;r<Bn.length;r++){var n=Bn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Nt!==null&&Ar(Nt,e),St!==null&&Ar(St,e),Ct!==null&&Ar(Ct,e),sn.forEach(t),un.forEach(t),r=0;r<xt.length;r++)n=xt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<xt.length&&(r=xt[0],r.blockedOn===null);)Au(r),r.blockedOn===null&&xt.shift()}var yr=ht.ReactCurrentBatchConfig,hl=!0;function Tf(e,t,r,n){var l=K,a=yr.transition;yr.transition=null;try{K=1,Ai(e,t,r,n)}finally{K=l,yr.transition=a}}function Rf(e,t,r,n){var l=K,a=yr.transition;yr.transition=null;try{K=4,Ai(e,t,r,n)}finally{K=l,yr.transition=a}}function Ai(e,t,r,n){if(hl){var l=Ga(e,t,r,n);if(l===null)ga(e,t,n,gl,r),Fo(e,n);else if(Lf(l,e,t,r,n))n.stopPropagation();else if(Fo(e,n),t&4&&-1<_f.indexOf(e)){for(;l!==null;){var a=zn(l);if(a!==null&&Du(a),a=Ga(e,t,r,n),a===null&&ga(e,t,n,gl,r),a===l)break;l=a}l!==null&&n.stopPropagation()}else ga(e,t,n,null,r)}}var gl=null;function Ga(e,t,r,n){if(gl=null,e=Di(n),e=Ut(e),e!==null)if(t=er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Eu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gl=e,null}function Fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wf()){case Oi:return 1;case Pu:return 4;case pl:case kf:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var kt=null,Fi=null,Zn=null;function $u(){if(Zn)return Zn;var e,t=Fi,r=t.length,n,l="value"in kt?kt.value:kt.textContent,a=l.length;for(e=0;e<r&&t[e]===l[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===l[a-n];n++);return Zn=l.slice(e,1<n?1-n:void 0)}function el(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function An(){return!0}function Uo(){return!1}function Fe(e){function t(r,n,l,a,o){this._reactName=r,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(r=e[u],this[u]=r?r(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?An:Uo,this.isPropagationStopped=Uo,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Fe(_r),En=ne({},_r,{view:0,detail:0}),Mf=Fe(En),oa,sa,Fr,Bl=ne({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(oa=e.screenX-Fr.screenX,sa=e.screenY-Fr.screenY):sa=oa=0,Fr=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Ho=Fe(Bl),Df=ne({},Bl,{dataTransfer:0}),Of=Fe(Df),If=ne({},En,{relatedTarget:0}),ua=Fe(If),Bf=ne({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Af=Fe(Bf),Ff=ne({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$f=Fe(Ff),Uf=ne({},_r,{data:0}),Vo=Fe(Uf),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wf[e])?!!t[e]:!1}function Ui(){return Qf}var Yf=ne({},En,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ui,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gf=Fe(Yf),Kf=ne({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Fe(Kf),Jf=ne({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ui}),Xf=Fe(Jf),qf=ne({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zf=Fe(qf),ep=ne({},Bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Fe(ep),rp=[9,13,27,32],Hi=dt&&"CompositionEvent"in window,Xr=null;dt&&"documentMode"in document&&(Xr=document.documentMode);var np=dt&&"TextEvent"in window&&!Xr,Uu=dt&&(!Hi||Xr&&8<Xr&&11>=Xr),Qo=" ",Yo=!1;function Hu(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function lp(e,t){switch(e){case"compositionend":return Vu(t);case"keypress":return t.which!==32?null:(Yo=!0,Qo);case"textInput":return e=t.data,e===Qo&&Yo?null:e;default:return null}}function ap(e,t){if(ar)return e==="compositionend"||!Hi&&Hu(e,t)?(e=$u(),Zn=Fi=kt=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uu&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function Wu(e,t,r,n){ju(n),t=vl(t,"onChange"),0<t.length&&(r=new $i("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var qr=null,dn=null;function op(e){rc(e,0)}function Al(e){var t=sr(e);if(hu(t))return e}function sp(e,t){if(e==="change")return t}var Qu=!1;if(dt){var ca;if(dt){var da="oninput"in document;if(!da){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),da=typeof Ko.oninput=="function"}ca=da}else ca=!1;Qu=ca&&(!document.documentMode||9<document.documentMode)}function Jo(){qr&&(qr.detachEvent("onpropertychange",Yu),dn=qr=null)}function Yu(e){if(e.propertyName==="value"&&Al(dn)){var t=[];Wu(t,dn,e,Di(e)),Cu(op,t)}}function up(e,t,r){e==="focusin"?(Jo(),qr=t,dn=r,qr.attachEvent("onpropertychange",Yu)):e==="focusout"&&Jo()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(dn)}function dp(e,t){if(e==="click")return Al(t)}function fp(e,t){if(e==="input"||e==="change")return Al(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:pp;function fn(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var l=r[n];if(!La.call(t,l)||!Ze(e[l],t[l]))return!1}return!0}function Xo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qo(e,t){var r=Xo(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xo(r)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=cl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=cl(e.document)}return t}function Vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mp(e){var t=Ku(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Gu(r.ownerDocument.documentElement,r)){if(n!==null&&Vi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=qo(r,a);var o=qo(r,n);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hp=dt&&"documentMode"in document&&11>=document.documentMode,ir=null,Ka=null,Zr=null,Ja=!1;function Zo(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ja||ir==null||ir!==cl(n)||(n=ir,"selectionStart"in n&&Vi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Zr&&fn(Zr,n)||(Zr=n,n=vl(Ka,"onSelect"),0<n.length&&(t=new $i("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ir)))}function Fn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var or={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},fa={},Ju={};dt&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Fl(e){if(fa[e])return fa[e];if(!or[e])return e;var t=or[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ju)return fa[e]=t[r];return e}var Xu=Fl("animationend"),qu=Fl("animationiteration"),Zu=Fl("animationstart"),ec=Fl("transitionend"),tc=new Map,es="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){tc.set(e,t),Zt(t,[e])}for(var pa=0;pa<es.length;pa++){var ma=es[pa],gp=ma.toLowerCase(),vp=ma[0].toUpperCase()+ma.slice(1);Dt(gp,"on"+vp)}Dt(Xu,"onAnimationEnd");Dt(qu,"onAnimationIteration");Dt(Zu,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(ec,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function ts(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,gf(n,t,void 0,e),e.currentTarget=null}function rc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],l=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var u=n[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==a&&l.isPropagationStopped())break e;ts(l,u,c),a=s}else for(o=0;o<n.length;o++){if(u=n[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==a&&l.isPropagationStopped())break e;ts(l,u,c),a=s}}}if(fl)throw e=Wa,fl=!1,Wa=null,e}function q(e,t){var r=t[ti];r===void 0&&(r=t[ti]=new Set);var n=e+"__bubble";r.has(n)||(nc(t,e,2,!1),r.add(n))}function ha(e,t,r){var n=0;t&&(n|=4),nc(r,e,n,t)}var $n="_reactListening"+Math.random().toString(36).slice(2);function pn(e){if(!e[$n]){e[$n]=!0,cu.forEach(function(r){r!=="selectionchange"&&(yp.has(r)||ha(r,!1,e),ha(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$n]||(t[$n]=!0,ha("selectionchange",!1,t))}}function nc(e,t,r,n){switch(Fu(t)){case 1:var l=Tf;break;case 4:l=Rf;break;default:l=Ai}r=l.bind(null,t,r,e),l=void 0,!Va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function ga(e,t,r,n,l){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=n.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Ut(u),o===null)return;if(s=o.tag,s===5||s===6){n=a=o;continue e}u=u.parentNode}}n=n.return}Cu(function(){var c=a,h=Di(r),m=[];e:{var g=tc.get(e);if(g!==void 0){var y=$i,j=e;switch(e){case"keypress":if(el(r)===0)break e;case"keydown":case"keyup":y=Gf;break;case"focusin":j="focus",y=ua;break;case"focusout":j="blur",y=ua;break;case"beforeblur":case"afterblur":y=ua;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Xf;break;case Xu:case qu:case Zu:y=Af;break;case ec:y=Zf;break;case"scroll":y=Mf;break;case"wheel":y=tp;break;case"copy":case"cut":case"paste":y=$f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wo}var b=(t&4)!==0,C=!b&&e==="scroll",f=b?g!==null?g+"Capture":null:g;b=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=on(d,f),x!=null&&b.push(mn(d,x,p)))),C)break;d=d.return}0<b.length&&(g=new y(g,j,null,r,h),m.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==Ua&&(j=r.relatedTarget||r.fromElement)&&(Ut(j)||j[ft]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(j=r.relatedTarget||r.toElement,y=c,j=j?Ut(j):null,j!==null&&(C=er(j),j!==C||j.tag!==5&&j.tag!==6)&&(j=null)):(y=null,j=c),y!==j)){if(b=Ho,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Wo,x="onPointerLeave",f="onPointerEnter",d="pointer"),C=y==null?g:sr(y),p=j==null?g:sr(j),g=new b(x,d+"leave",y,r,h),g.target=C,g.relatedTarget=p,x=null,Ut(h)===c&&(b=new b(f,d+"enter",j,r,h),b.target=p,b.relatedTarget=C,x=b),C=x,y&&j)t:{for(b=y,f=j,d=0,p=b;p;p=rr(p))d++;for(p=0,x=f;x;x=rr(x))p++;for(;0<d-p;)b=rr(b),d--;for(;0<p-d;)f=rr(f),p--;for(;d--;){if(b===f||f!==null&&b===f.alternate)break t;b=rr(b),f=rr(f)}b=null}else b=null;y!==null&&rs(m,g,y,b,!1),j!==null&&C!==null&&rs(m,C,j,b,!0)}}e:{if(g=c?sr(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var N=sp;else if(Go(g))if(Qu)N=fp;else{N=cp;var L=up}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=dp);if(N&&(N=N(e,c))){Wu(m,N,r,h);break e}L&&L(e,g,c),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Ia(g,"number",g.value)}switch(L=c?sr(c):window,e){case"focusin":(Go(L)||L.contentEditable==="true")&&(ir=L,Ka=c,Zr=null);break;case"focusout":Zr=Ka=ir=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,Zo(m,r,h);break;case"selectionchange":if(hp)break;case"keydown":case"keyup":Zo(m,r,h)}var T;if(Hi)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ar?Hu(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(Uu&&r.locale!=="ko"&&(ar||_!=="onCompositionStart"?_==="onCompositionEnd"&&ar&&(T=$u()):(kt=h,Fi="value"in kt?kt.value:kt.textContent,ar=!0)),L=vl(c,_),0<L.length&&(_=new Vo(_,e,null,r,h),m.push({event:_,listeners:L}),T?_.data=T:(T=Vu(r),T!==null&&(_.data=T)))),(T=np?lp(e,r):ap(e,r))&&(c=vl(c,"onBeforeInput"),0<c.length&&(h=new Vo("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:c}),h.data=T))}rc(m,t)})}function mn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function vl(e,t){for(var r=t+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=on(e,r),a!=null&&n.unshift(mn(e,a,l)),a=on(e,t),a!=null&&n.push(mn(e,a,l))),e=e.return}return n}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rs(e,t,r,n,l){for(var a=t._reactName,o=[];r!==null&&r!==n;){var u=r,s=u.alternate,c=u.stateNode;if(s!==null&&s===n)break;u.tag===5&&c!==null&&(u=c,l?(s=on(r,a),s!=null&&o.unshift(mn(r,s,u))):l||(s=on(r,a),s!=null&&o.push(mn(r,s,u)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var xp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function ns(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(wp,"")}function Un(e,t,r){if(t=ns(t),ns(e)!==t&&r)throw Error(S(425))}function yl(){}var Xa=null,qa=null;function Za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ei=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,ls=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof ls<"u"?function(e){return ls.resolve(null).then(e).catch(bp)}:ei;function bp(e){setTimeout(function(){throw e})}function va(e,t){var r=t,n=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(n===0){e.removeChild(l),cn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=l}while(r);cn(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function as(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Lr,hn="__reactProps$"+Lr,ft="__reactContainer$"+Lr,ti="__reactEvents$"+Lr,Np="__reactListeners$"+Lr,Sp="__reactHandles$"+Lr;function Ut(e){var t=e[nt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ft]||r[nt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=as(e);e!==null;){if(r=e[nt])return r;e=as(e)}return t}e=r,r=e.parentNode}return null}function zn(e){return e=e[nt]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function $l(e){return e[hn]||null}var ri=[],ur=-1;function Ot(e){return{current:e}}function Z(e){0>ur||(e.current=ri[ur],ri[ur]=null,ur--)}function X(e,t){ur++,ri[ur]=e.current,e.current=t}var Mt={},be=Ot(Mt),Le=Ot(!1),Yt=Mt;function jr(e,t){var r=e.type.contextTypes;if(!r)return Mt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in r)l[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pe(e){return e=e.childContextTypes,e!=null}function xl(){Z(Le),Z(be)}function is(e,t,r){if(be.current!==Mt)throw Error(S(168));X(be,t),X(Le,r)}function lc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var l in n)if(!(l in t))throw Error(S(108,uf(e)||"Unknown",l));return ne({},r,n)}function wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Yt=be.current,X(be,e),X(Le,Le.current),!0}function os(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=lc(e,t,Yt),n.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(be),X(be,e)):Z(Le),X(Le,r)}var ot=null,Ul=!1,ya=!1;function ac(e){ot===null?ot=[e]:ot.push(e)}function Cp(e){Ul=!0,ac(e)}function It(){if(!ya&&ot!==null){ya=!0;var e=0,t=K;try{var r=ot;for(K=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ot=null,Ul=!1}catch(l){throw ot!==null&&(ot=ot.slice(e+1)),Lu(Oi,It),l}finally{K=t,ya=!1}}return null}var cr=[],dr=0,kl=null,jl=0,$e=[],Ue=0,Gt=null,st=1,ut="";function Ft(e,t){cr[dr++]=jl,cr[dr++]=kl,kl=e,jl=t}function ic(e,t,r){$e[Ue++]=st,$e[Ue++]=ut,$e[Ue++]=Gt,Gt=e;var n=st;e=ut;var l=32-Xe(n)-1;n&=~(1<<l),r+=1;var a=32-Xe(t)+l;if(30<a){var o=l-l%5;a=(n&(1<<o)-1).toString(32),n>>=o,l-=o,st=1<<32-Xe(t)+l|r<<l|n,ut=a+e}else st=1<<a|r<<l|n,ut=e}function Wi(e){e.return!==null&&(Ft(e,1),ic(e,1,0))}function Qi(e){for(;e===kl;)kl=cr[--dr],cr[dr]=null,jl=cr[--dr],cr[dr]=null;for(;e===Gt;)Gt=$e[--Ue],$e[Ue]=null,ut=$e[--Ue],$e[Ue]=null,st=$e[--Ue],$e[Ue]=null}var Ie=null,Oe=null,ee=!1,Je=null;function oc(e,t){var r=He(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ss(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Oe=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Gt!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=He(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ie=e,Oe=null,!0):!1;default:return!1}}function ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(ee){var t=Oe;if(t){var r=t;if(!ss(e,t)){if(ni(e))throw Error(S(418));t=Et(r.nextSibling);var n=Ie;t&&ss(e,t)?oc(n,r):(e.flags=e.flags&-4097|2,ee=!1,Ie=e)}}else{if(ni(e))throw Error(S(418));e.flags=e.flags&-4097|2,ee=!1,Ie=e}}}function us(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Hn(e){if(e!==Ie)return!1;if(!ee)return us(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Za(e.type,e.memoizedProps)),t&&(t=Oe)){if(ni(e))throw sc(),Error(S(418));for(;t;)oc(e,t),t=Et(t.nextSibling)}if(us(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Oe=Et(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Ie?Et(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=Oe;e;)e=Et(e.nextSibling)}function br(){Oe=Ie=null,ee=!1}function Yi(e){Je===null?Je=[e]:Je.push(e)}var Ep=ht.ReactCurrentBatchConfig;function $r(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var l=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var u=l.refs;o===null?delete u[a]:u[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Vn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cs(e){var t=e._init;return t(e._payload)}function uc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=Pt(f,d),f.index=0,f.sibling=null,f}function a(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,d,p,x){return d===null||d.tag!==6?(d=Sa(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,x){var N=p.type;return N===lr?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vt&&cs(N)===d.type)?(x=l(d,p.props),x.ref=$r(f,d,p),x.return=f,x):(x=ol(p.type,p.key,p.props,null,f.mode,x),x.ref=$r(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ca(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,N){return d===null||d.tag!==7?(d=Qt(p,f.mode,x,N),d.return=f,d):(d=l(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Sa(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Rn:return p=ol(d.type,d.key,d.props,null,f.mode,p),p.ref=$r(f,null,d),p.return=f,p;case nr:return d=Ca(d,f.mode,p),d.return=f,d;case vt:var x=d._init;return m(f,x(d._payload),p)}if(Wr(d)||Or(d))return d=Qt(d,f.mode,p,null),d.return=f,d;Vn(f,d)}return null}function g(f,d,p,x){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:u(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rn:return p.key===N?s(f,d,p,x):null;case nr:return p.key===N?c(f,d,p,x):null;case vt:return N=p._init,g(f,d,N(p._payload),x)}if(Wr(p)||Or(p))return N!==null?null:h(f,d,p,x,null);Vn(f,p)}return null}function y(f,d,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,u(d,f,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Rn:return f=f.get(x.key===null?p:x.key)||null,s(d,f,x,N);case nr:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,N);case vt:var L=x._init;return y(f,d,p,L(x._payload),N)}if(Wr(x)||Or(x))return f=f.get(p)||null,h(d,f,x,N,null);Vn(d,x)}return null}function j(f,d,p,x){for(var N=null,L=null,T=d,_=d=0,$=null;T!==null&&_<p.length;_++){T.index>_?($=T,T=null):$=T.sibling;var O=g(f,T,p[_],x);if(O===null){T===null&&(T=$);break}e&&T&&O.alternate===null&&t(f,T),d=a(O,d,_),L===null?N=O:L.sibling=O,L=O,T=$}if(_===p.length)return r(f,T),ee&&Ft(f,_),N;if(T===null){for(;_<p.length;_++)T=m(f,p[_],x),T!==null&&(d=a(T,d,_),L===null?N=T:L.sibling=T,L=T);return ee&&Ft(f,_),N}for(T=n(f,T);_<p.length;_++)$=y(T,f,_,p[_],x),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?_:$.key),d=a($,d,_),L===null?N=$:L.sibling=$,L=$);return e&&T.forEach(function(R){return t(f,R)}),ee&&Ft(f,_),N}function b(f,d,p,x){var N=Or(p);if(typeof N!="function")throw Error(S(150));if(p=N.call(p),p==null)throw Error(S(151));for(var L=N=null,T=d,_=d=0,$=null,O=p.next();T!==null&&!O.done;_++,O=p.next()){T.index>_?($=T,T=null):$=T.sibling;var R=g(f,T,O.value,x);if(R===null){T===null&&(T=$);break}e&&T&&R.alternate===null&&t(f,T),d=a(R,d,_),L===null?N=R:L.sibling=R,L=R,T=$}if(O.done)return r(f,T),ee&&Ft(f,_),N;if(T===null){for(;!O.done;_++,O=p.next())O=m(f,O.value,x),O!==null&&(d=a(O,d,_),L===null?N=O:L.sibling=O,L=O);return ee&&Ft(f,_),N}for(T=n(f,T);!O.done;_++,O=p.next())O=y(T,f,_,O.value,x),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?_:O.key),d=a(O,d,_),L===null?N=O:L.sibling=O,L=O);return e&&T.forEach(function(A){return t(f,A)}),ee&&Ft(f,_),N}function C(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===lr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Rn:e:{for(var N=p.key,L=d;L!==null;){if(L.key===N){if(N=p.type,N===lr){if(L.tag===7){r(f,L.sibling),d=l(L,p.props.children),d.return=f,f=d;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vt&&cs(N)===L.type){r(f,L.sibling),d=l(L,p.props),d.ref=$r(f,L,p),d.return=f,f=d;break e}r(f,L);break}else t(f,L);L=L.sibling}p.type===lr?(d=Qt(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=ol(p.type,p.key,p.props,null,f.mode,x),x.ref=$r(f,d,p),x.return=f,f=x)}return o(f);case nr:e:{for(L=p.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Ca(p,f.mode,x),d.return=f,f=d}return o(f);case vt:return L=p._init,C(f,d,L(p._payload),x)}if(Wr(p))return j(f,d,p,x);if(Or(p))return b(f,d,p,x);Vn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(f,d.sibling),d=l(d,p),d.return=f,f=d):(r(f,d),d=Sa(p,f.mode,x),d.return=f,f=d),o(f)):r(f,d)}return C}var Nr=uc(!0),cc=uc(!1),bl=Ot(null),Nl=null,fr=null,Gi=null;function Ki(){Gi=fr=Nl=null}function Ji(e){var t=bl.current;Z(bl),e._currentValue=t}function ai(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function xr(e,t){Nl=e,Gi=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Gi!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Nl===null)throw Error(S(308));fr=e,Nl.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Ht=null;function Xi(e){Ht===null?Ht=[e]:Ht.push(e)}function dc(e,t,r,n){var l=t.interleaved;return l===null?(r.next=r,Xi(t)):(r.next=l.next,l.next=r),t.interleaved=r,pt(e,n)}function pt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var yt=!1;function qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Y&2){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,pt(e,r)}return l=n.interleaved,l===null?(t.next=t,Xi(n)):(t.next=l.next,l.next=t),n.interleaved=t,pt(e,r)}function tl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ii(e,r)}}function ds(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var l=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?l=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?l=a=t:a=a.next=t}else l=a=t;r={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Sl(e,t,r,n){var l=e.updateQueue;yt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?a=c:o.next=c,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=s))}if(a!==null){var m=l.baseState;o=0,h=c=s=null,u=a;do{var g=u.lane,y=u.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var j=e,b=u;switch(g=t,y=r,b.tag){case 1:if(j=b.payload,typeof j=="function"){m=j.call(y,m,g);break e}m=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=b.payload,g=typeof j=="function"?j.call(y,m,g):j,g==null)break e;m=ne({},m,g);break e;case 2:yt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[u]:g.push(u))}else y={eventTime:y,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,s=m):h=h.next=y,o|=g;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;g=u,u=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);Jt|=o,e.lanes=o,e.memoizedState=m}}function fs(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],l=n.callback;if(l!==null){if(n.callback=null,n=r,typeof l!="function")throw Error(S(191,l));l.call(n)}}}var _n={},at=Ot(_n),gn=Ot(_n),vn=Ot(_n);function Vt(e){if(e===_n)throw Error(S(174));return e}function Zi(e,t){switch(X(vn,t),X(gn,e),X(at,_n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Aa(t,e)}Z(at),X(at,t)}function Sr(){Z(at),Z(gn),Z(vn)}function pc(e){Vt(vn.current);var t=Vt(at.current),r=Aa(t,e.type);t!==r&&(X(gn,e),X(at,r))}function eo(e){gn.current===e&&(Z(at),Z(gn))}var te=Ot(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function to(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var rl=ht.ReactCurrentDispatcher,wa=ht.ReactCurrentBatchConfig,Kt=0,re=null,fe=null,he=null,El=!1,en=!1,yn=0,zp=0;function we(){throw Error(S(321))}function ro(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ze(e[r],t[r]))return!1;return!0}function no(e,t,r,n,l,a){if(Kt=a,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rl.current=e===null||e.memoizedState===null?Tp:Rp,e=r(n,l),en){a=0;do{if(en=!1,yn=0,25<=a)throw Error(S(301));a+=1,he=fe=null,t.updateQueue=null,rl.current=Mp,e=r(n,l)}while(en)}if(rl.current=zl,t=fe!==null&&fe.next!==null,Kt=0,he=fe=re=null,El=!1,t)throw Error(S(300));return e}function lo(){var e=yn!==0;return yn=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?re.memoizedState=he=e:he=he.next=e,he}function Qe(){if(fe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?re.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(S(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?re.memoizedState=he=e:he=he.next=e}return he}function xn(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=Qe(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=fe,l=n.baseQueue,a=r.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}n.baseQueue=l=a,r.pending=null}if(l!==null){a=l.next,n=n.baseState;var u=o=null,s=null,c=a;do{var h=c.lane;if((Kt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,o=n):s=s.next=m,re.lanes|=h,Jt|=h}c=c.next}while(c!==null&&c!==a);s===null?o=n:s.next=u,Ze(n,t.memoizedState)||(_e=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){l=e;do a=l.lane,re.lanes|=a,Jt|=a,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ja(e){var t=Qe(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,l=r.pending,a=t.memoizedState;if(l!==null){r.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);Ze(a,t.memoizedState)||(_e=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function mc(){}function hc(e,t){var r=re,n=Qe(),l=t(),a=!Ze(n.memoizedState,l);if(a&&(n.memoizedState=l,_e=!0),n=n.queue,ao(yc.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||he!==null&&he.memoizedState.tag&1){if(r.flags|=2048,wn(9,vc.bind(null,r,n,l,t),void 0,null),ge===null)throw Error(S(349));Kt&30||gc(r,t,l)}return l}function gc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vc(e,t,r,n){t.value=r,t.getSnapshot=n,xc(t)&&wc(e)}function yc(e,t,r){return r(function(){xc(t)&&wc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ze(e,r)}catch{return!0}}function wc(e){var t=pt(e,1);t!==null&&qe(t,e,1,-1)}function ps(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xn,lastRenderedState:e},t.queue=e,e=e.dispatch=Pp.bind(null,re,e),[t.memoizedState,e]}function wn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function kc(){return Qe().memoizedState}function nl(e,t,r,n){var l=rt();re.flags|=e,l.memoizedState=wn(1|t,r,void 0,n===void 0?null:n)}function Hl(e,t,r,n){var l=Qe();n=n===void 0?null:n;var a=void 0;if(fe!==null){var o=fe.memoizedState;if(a=o.destroy,n!==null&&ro(n,o.deps)){l.memoizedState=wn(t,r,a,n);return}}re.flags|=e,l.memoizedState=wn(1|t,r,a,n)}function ms(e,t){return nl(8390656,8,e,t)}function ao(e,t){return Hl(2048,8,e,t)}function jc(e,t){return Hl(4,2,e,t)}function bc(e,t){return Hl(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sc(e,t,r){return r=r!=null?r.concat([e]):null,Hl(4,4,Nc.bind(null,t,e),r)}function io(){}function Cc(e,t){var r=Qe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ro(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ec(e,t){var r=Qe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ro(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function zc(e,t,r){return Kt&21?(Ze(r,t)||(r=Ru(),re.lanes|=r,Jt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=r)}function _p(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var n=wa.transition;wa.transition={};try{e(!1),t()}finally{K=r,wa.transition=n}}function _c(){return Qe().memoizedState}function Lp(e,t,r){var n=Lt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Lc(e))Pc(t,r);else if(r=dc(e,t,r,n),r!==null){var l=Se();qe(r,e,n,l),Tc(r,t,n)}}function Pp(e,t,r){var n=Lt(e),l={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Pc(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,r);if(l.hasEagerState=!0,l.eagerState=u,Ze(u,o)){var s=t.interleaved;s===null?(l.next=l,Xi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}r=dc(e,t,l,n),r!==null&&(l=Se(),qe(r,e,n,l),Tc(r,t,n))}}function Lc(e){var t=e.alternate;return e===re||t!==null&&t===re}function Pc(e,t){en=El=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Tc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ii(e,r)}}var zl={readContext:We,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Tp={readContext:We,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:ms,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,nl(4194308,4,Nc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var r=rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Lp.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:ps,useDebugValue:io,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=ps(!1),t=e[0];return e=_p.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=re,l=rt();if(ee){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),ge===null)throw Error(S(349));Kt&30||gc(n,t,r)}l.memoizedState=r;var a={value:r,getSnapshot:t};return l.queue=a,ms(yc.bind(null,n,a,e),[e]),n.flags|=2048,wn(9,vc.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=rt(),t=ge.identifierPrefix;if(ee){var r=ut,n=st;r=(n&~(1<<32-Xe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=zp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rp={readContext:We,useCallback:Cc,useContext:We,useEffect:ao,useImperativeHandle:Sc,useInsertionEffect:jc,useLayoutEffect:bc,useMemo:Ec,useReducer:ka,useRef:kc,useState:function(){return ka(xn)},useDebugValue:io,useDeferredValue:function(e){var t=Qe();return zc(t,fe.memoizedState,e)},useTransition:function(){var e=ka(xn)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:hc,useId:_c,unstable_isNewReconciler:!1},Mp={readContext:We,useCallback:Cc,useContext:We,useEffect:ao,useImperativeHandle:Sc,useInsertionEffect:jc,useLayoutEffect:bc,useMemo:Ec,useReducer:ja,useRef:kc,useState:function(){return ja(xn)},useDebugValue:io,useDeferredValue:function(e){var t=Qe();return fe===null?t.memoizedState=e:zc(t,fe.memoizedState,e)},useTransition:function(){var e=ja(xn)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:hc,useId:_c,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ii(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ne({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Vl={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Se(),l=Lt(e),a=ct(n,l);a.payload=t,r!=null&&(a.callback=r),t=zt(e,a,l),t!==null&&(qe(t,e,l,n),tl(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Se(),l=Lt(e),a=ct(n,l);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=zt(e,a,l),t!==null&&(qe(t,e,l,n),tl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Se(),n=Lt(e),l=ct(r,n);l.tag=2,t!=null&&(l.callback=t),t=zt(e,l,n),t!==null&&(qe(t,e,n,r),tl(t,e,n))}};function hs(e,t,r,n,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!fn(r,n)||!fn(l,a):!0}function Rc(e,t,r){var n=!1,l=Mt,a=t.contextType;return typeof a=="object"&&a!==null?a=We(a):(l=Pe(t)?Yt:be.current,n=t.contextTypes,a=(n=n!=null)?jr(e,l):Mt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function gs(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function oi(e,t,r,n){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},qi(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=We(a):(a=Pe(t)?Yt:be.current,l.context=jr(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ii(e,t,a,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Vl.enqueueReplaceState(l,l.state,null),Sl(e,r,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var r="",n=t;do r+=sf(n),n=n.return;while(n);var l=r}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function ba(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function si(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Dp=typeof WeakMap=="function"?WeakMap:Map;function Mc(e,t,r){r=ct(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ll||(Ll=!0,yi=n),si(e,t)},r}function Dc(e,t,r){r=ct(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;r.payload=function(){return n(l)},r.callback=function(){si(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){si(e,t),typeof n!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function vs(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Dp;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(r)||(l.add(r),e=Kp.bind(null,e,t,r),t.then(e,e))}function ys(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xs(e,t,r,n,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ct(-1,1),t.tag=2,zt(r,t,1))),r.lanes|=1),e)}var Op=ht.ReactCurrentOwner,_e=!1;function Ne(e,t,r,n){t.child=e===null?cc(t,null,r,n):Nr(t,e.child,r,n)}function ws(e,t,r,n,l){r=r.render;var a=t.ref;return xr(t,l),n=no(e,t,r,n,a,l),r=lo(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,mt(e,t,l)):(ee&&r&&Wi(t),t.flags|=1,Ne(e,t,n,l),t.child)}function ks(e,t,r,n,l){if(e===null){var a=r.type;return typeof a=="function"&&!ho(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Oc(e,t,a,n,l)):(e=ol(r.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:fn,r(o,n)&&e.ref===t.ref)return mt(e,t,l)}return t.flags|=1,e=Pt(a,n),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,r,n,l){if(e!==null){var a=e.memoizedProps;if(fn(a,n)&&e.ref===t.ref)if(_e=!1,t.pendingProps=n=a,(e.lanes&l)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,mt(e,t,l)}return ui(e,t,r,n,l)}function Ic(e,t,r){var n=t.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(mr,De),De|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(mr,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,X(mr,De),De|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,X(mr,De),De|=n;return Ne(e,t,l,r),t.child}function Bc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ui(e,t,r,n,l){var a=Pe(r)?Yt:be.current;return a=jr(t,a),xr(t,l),r=no(e,t,r,n,a,l),n=lo(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,mt(e,t,l)):(ee&&n&&Wi(t),t.flags|=1,Ne(e,t,r,l),t.child)}function js(e,t,r,n,l){if(Pe(r)){var a=!0;wl(t)}else a=!1;if(xr(t,l),t.stateNode===null)ll(e,t),Rc(t,r,n),oi(t,r,n,l),n=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=We(c):(c=Pe(r)?Yt:be.current,c=jr(t,c));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==n||s!==c)&&gs(t,o,n,c),yt=!1;var g=t.memoizedState;o.state=g,Sl(t,n,o,l),s=t.memoizedState,u!==n||g!==s||Le.current||yt?(typeof h=="function"&&(ii(t,r,h,n),s=t.memoizedState),(u=yt||hs(t,r,u,n,g,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),o.props=n,o.state=s,o.context=c,n=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,fc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ge(t.type,u),o.props=c,m=t.pendingProps,g=o.context,s=r.contextType,typeof s=="object"&&s!==null?s=We(s):(s=Pe(r)?Yt:be.current,s=jr(t,s));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||g!==s)&&gs(t,o,n,s),yt=!1,g=t.memoizedState,o.state=g,Sl(t,n,o,l);var j=t.memoizedState;u!==m||g!==j||Le.current||yt?(typeof y=="function"&&(ii(t,r,y,n),j=t.memoizedState),(c=yt||hs(t,r,c,n,g,j,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,j,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,j,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=j),o.props=n,o.state=j,o.context=s,n=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ci(e,t,r,n,a,l)}function ci(e,t,r,n,l,a){Bc(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return l&&os(t,r,!1),mt(e,t,a);n=t.stateNode,Op.current=t;var u=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Nr(t,e.child,null,a),t.child=Nr(t,null,u,a)):Ne(e,t,u,a),t.memoizedState=n.state,l&&os(t,r,!0),t.child}function Ac(e){var t=e.stateNode;t.pendingContext?is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&is(e,t.context,!1),Zi(e,t.containerInfo)}function bs(e,t,r,n,l){return br(),Yi(l),t.flags|=256,Ne(e,t,r,n),t.child}var di={dehydrated:null,treeContext:null,retryLane:0};function fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,r){var n=t.pendingProps,l=te.current,a=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(te,l&1),e===null)return li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Yl(o,n,0,null),e=Qt(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=fi(r),t.memoizedState=di,e):oo(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Ip(e,t,o,n,u,l,r);if(a){a=n.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:n.children};return!(o&1)&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=Pt(l,s),n.subtreeFlags=l.subtreeFlags&14680064),u!==null?a=Pt(u,a):(a=Qt(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?fi(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=di,n}return a=e.child,e=a.sibling,n=Pt(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function oo(e,t){return t=Yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wn(e,t,r,n){return n!==null&&Yi(n),Nr(t,e.child,null,r),e=oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,r,n,l,a,o){if(r)return t.flags&256?(t.flags&=-257,n=ba(Error(S(422))),Wn(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,l=t.mode,n=Yl({mode:"visible",children:n.children},l,0,null),a=Qt(a,l,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&Nr(t,e.child,null,o),t.child.memoizedState=fi(o),t.memoizedState=di,a);if(!(t.mode&1))return Wn(e,t,o,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var u=n.dgst;return n=u,a=Error(S(419)),n=ba(a,n,void 0),Wn(e,t,o,n)}if(u=(o&e.childLanes)!==0,_e||u){if(n=ge,n!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(n.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,pt(e,l),qe(n,e,l,-1))}return mo(),n=ba(Error(S(421))),Wn(e,t,o,n)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Jp.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Oe=Et(l.nextSibling),Ie=t,ee=!0,Je=null,e!==null&&($e[Ue++]=st,$e[Ue++]=ut,$e[Ue++]=Gt,st=e.id,ut=e.overflow,Gt=t),t=oo(t,n.children),t.flags|=4096,t)}function Ns(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ai(e.return,t,r)}function Na(e,t,r,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=l)}function $c(e,t,r){var n=t.pendingProps,l=n.revealOrder,a=n.tail;if(Ne(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ns(e,r,t);else if(e.tag===19)Ns(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(te,n),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&Cl(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Na(t,!1,l,r,a);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Na(t,!0,r,null,a);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ll(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=Pt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Pt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Bp(e,t,r){switch(t.tag){case 3:Ac(t),br();break;case 5:pc(t);break;case 1:Pe(t.type)&&wl(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,l=t.memoizedProps.value;X(bl,n._currentValue),n._currentValue=l;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?Fc(e,t,r):(X(te,te.current&1),e=mt(e,t,r),e!==null?e.sibling:null);X(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return $c(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,r)}return mt(e,t,r)}var Uc,pi,Hc,Vc;Uc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};pi=function(){};Hc=function(e,t,r,n){var l=e.memoizedProps;if(l!==n){e=t.stateNode,Vt(at.current);var a=null;switch(r){case"input":l=Da(e,l),n=Da(e,n),a=[];break;case"select":l=ne({},l,{value:void 0}),n=ne({},n,{value:void 0}),a=[];break;case"textarea":l=Ba(e,l),n=Ba(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=yl)}Fa(r,n);var o;r=null;for(c in l)if(!n.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ln.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var s=n[c];if(u=l!=null?l[c]:void 0,n.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(r||(r={}),r[o]=s[o])}else r||(a||(a=[]),a.push(c,r)),r=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ln.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&q("scroll",e),a||u===s||(a=[])):(a=a||[]).push(c,s))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Vc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ur(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ap(e,t,r){var n=t.pendingProps;switch(Qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Pe(t.type)&&xl(),ke(t),null;case 3:return n=t.stateNode,Sr(),Z(Le),Z(be),to(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ki(Je),Je=null))),pi(e,t),ke(t),null;case 5:eo(t);var l=Vt(vn.current);if(r=t.type,e!==null&&t.stateNode!=null)Hc(e,t,r,n,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return ke(t),null}if(e=Vt(at.current),Hn(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[nt]=t,n[hn]=a,e=(t.mode&1)!==0,r){case"dialog":q("cancel",n),q("close",n);break;case"iframe":case"object":case"embed":q("load",n);break;case"video":case"audio":for(l=0;l<Yr.length;l++)q(Yr[l],n);break;case"source":q("error",n);break;case"img":case"image":case"link":q("error",n),q("load",n);break;case"details":q("toggle",n);break;case"input":Ro(n,a),q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},q("invalid",n);break;case"textarea":Do(n,a),q("invalid",n)}Fa(r,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="children"?typeof u=="string"?n.textContent!==u&&(a.suppressHydrationWarning!==!0&&Un(n.textContent,u,e),l=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&Un(n.textContent,u,e),l=["children",""+u]):ln.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&q("scroll",n)}switch(r){case"input":Mn(n),Mo(n,a,!0);break;case"textarea":Mn(n),Oo(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=yl)}n=l,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[nt]=t,e[hn]=n,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(o=$a(r,n),r){case"dialog":q("cancel",e),q("close",e),l=n;break;case"iframe":case"object":case"embed":q("load",e),l=n;break;case"video":case"audio":for(l=0;l<Yr.length;l++)q(Yr[l],e);l=n;break;case"source":q("error",e),l=n;break;case"img":case"image":case"link":q("error",e),q("load",e),l=n;break;case"details":q("toggle",e),l=n;break;case"input":Ro(e,n),l=Da(e,n),q("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=ne({},n,{value:void 0}),q("invalid",e);break;case"textarea":Do(e,n),l=Ba(e,n),q("invalid",e);break;default:l=n}Fa(r,l),u=l;for(a in u)if(u.hasOwnProperty(a)){var s=u[a];a==="style"?ku(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xu(e,s)):a==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&an(e,s):typeof s=="number"&&an(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ln.hasOwnProperty(a)?s!=null&&a==="onScroll"&&q("scroll",e):s!=null&&Pi(e,a,s,o))}switch(r){case"input":Mn(e),Mo(e,n,!1);break;case"textarea":Mn(e),Oo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Rt(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?hr(e,!!n.multiple,a,!1):n.defaultValue!=null&&hr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=yl)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Vc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=Vt(vn.current),Vt(at.current),Hn(t)){if(n=t.stateNode,r=t.memoizedProps,n[nt]=t,(a=n.nodeValue!==r)&&(e=Ie,e!==null))switch(e.tag){case 3:Un(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Un(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nt]=t,t.stateNode=n}return ke(t),null;case 13:if(Z(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Oe!==null&&t.mode&1&&!(t.flags&128))sc(),br(),t.flags|=98560,a=!1;else if(a=Hn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[nt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),a=!1}else Je!==null&&(ki(Je),Je=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):mo())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return Sr(),pi(e,t),e===null&&pn(t.stateNode.containerInfo),ke(t),null;case 10:return Ji(t.type._context),ke(t),null;case 17:return Pe(t.type)&&xl(),ke(t),null;case 19:if(Z(te),a=t.memoizedState,a===null)return ke(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)Ur(a,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Cl(e),o!==null){for(t.flags|=128,Ur(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&oe()>Er&&(t.flags|=128,n=!0,Ur(a,!1),t.lanes=4194304)}else{if(!n)if(e=Cl(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ur(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ee)return ke(t),null}else 2*oe()-a.renderingStartTime>Er&&r!==1073741824&&(t.flags|=128,n=!0,Ur(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=oe(),t.sibling=null,r=te.current,X(te,n?r&1|2:r&1),t):(ke(t),null);case 22:case 23:return po(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?De&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Fp(e,t){switch(Qi(t),t.tag){case 1:return Pe(t.type)&&xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),Z(Le),Z(be),to(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eo(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Sr(),null;case 10:return Ji(t.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var Qn=!1,je=!1,$p=typeof WeakSet=="function"?WeakSet:Set,M=null;function pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){le(e,t,n)}else r.current=null}function mi(e,t,r){try{r()}catch(n){le(e,t,n)}}var Ss=!1;function Up(e,t){if(Xa=hl,e=Ku(),Vi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,u=-1,s=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==r||l!==0&&m.nodeType!==3||(u=o+l),m!==a||n!==0&&m.nodeType!==3||(s=o+n),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===r&&++c===l&&(u=o),g===a&&++h===n&&(s=o),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}r=u===-1||s===-1?null:{start:u,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(qa={focusedElem:e,selectionRange:r},hl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var b=j.memoizedProps,C=j.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ge(t.type,b),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return j=Ss,Ss=!1,j}function tn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&mi(t,r,a)}l=l.next}while(l!==n)}}function Wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[hn],delete t[ti],delete t[Np],delete t[Sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=yl));else if(n!==4&&(e=e.child,e!==null))for(gi(e,t,r),e=e.sibling;e!==null;)gi(e,t,r),e=e.sibling}function vi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vi(e,t,r),e=e.sibling;e!==null;)vi(e,t,r),e=e.sibling}var ve=null,Ke=!1;function gt(e,t,r){for(r=r.child;r!==null;)Yc(e,t,r),r=r.sibling}function Yc(e,t,r){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Il,r)}catch{}switch(r.tag){case 5:je||pr(r,t);case 6:var n=ve,l=Ke;ve=null,gt(e,t,r),ve=n,Ke=l,ve!==null&&(Ke?(e=ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ve.removeChild(r.stateNode));break;case 18:ve!==null&&(Ke?(e=ve,r=r.stateNode,e.nodeType===8?va(e.parentNode,r):e.nodeType===1&&va(e,r),cn(e)):va(ve,r.stateNode));break;case 4:n=ve,l=Ke,ve=r.stateNode.containerInfo,Ke=!0,gt(e,t,r),ve=n,Ke=l;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&mi(r,t,o),l=l.next}while(l!==n)}gt(e,t,r);break;case 1:if(!je&&(pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(u){le(r,t,u)}gt(e,t,r);break;case 21:gt(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,gt(e,t,r),je=n):gt(e,t,r);break;default:gt(e,t,r)}}function Es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new $p),t.forEach(function(n){var l=Xp.bind(null,e,n);r.has(n)||(r.add(n),n.then(l,l))})}}function Ye(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var l=r[n];try{var a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,Ke=!1;break e;case 3:ve=u.stateNode.containerInfo,Ke=!0;break e;case 4:ve=u.stateNode.containerInfo,Ke=!0;break e}u=u.return}if(ve===null)throw Error(S(160));Yc(a,o,l),ve=null,Ke=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){le(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),tt(e),n&4){try{tn(3,e,e.return),Wl(3,e)}catch(b){le(e,e.return,b)}try{tn(5,e,e.return)}catch(b){le(e,e.return,b)}}break;case 1:Ye(t,e),tt(e),n&512&&r!==null&&pr(r,r.return);break;case 5:if(Ye(t,e),tt(e),n&512&&r!==null&&pr(r,r.return),e.flags&32){var l=e.stateNode;try{an(l,"")}catch(b){le(e,e.return,b)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&gu(l,a),$a(u,o);var c=$a(u,a);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?ku(l,m):h==="dangerouslySetInnerHTML"?xu(l,m):h==="children"?an(l,m):Pi(l,h,m,c)}switch(u){case"input":Oa(l,a);break;case"textarea":vu(l,a);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?hr(l,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?hr(l,!!a.multiple,a.defaultValue,!0):hr(l,!!a.multiple,a.multiple?[]:"",!1))}l[hn]=a}catch(b){le(e,e.return,b)}}break;case 6:if(Ye(t,e),tt(e),n&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(b){le(e,e.return,b)}}break;case 3:if(Ye(t,e),tt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{cn(t.containerInfo)}catch(b){le(e,e.return,b)}break;case 4:Ye(t,e),tt(e);break;case 13:Ye(t,e),tt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(co=oe())),n&4&&Es(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(je=(c=je)||h,Ye(t,e),je=c):Ye(t,e),tt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(m=M=h;M!==null;){switch(g=M,y=g.child,g.tag){case 0:case 11:case 14:case 15:tn(4,g,g.return);break;case 1:pr(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(b){le(n,r,b)}}break;case 5:pr(g,g.return);break;case 22:if(g.memoizedState!==null){_s(m);continue}}y!==null?(y.return=g,M=y):_s(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=wu("display",o))}catch(b){le(e,e.return,b)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(b){le(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(t,e),tt(e),n&4&&Es(e);break;case 21:break;default:Ye(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Qc(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(an(l,""),n.flags&=-33);var a=Cs(e);vi(e,a,l);break;case 3:case 4:var o=n.stateNode.containerInfo,u=Cs(e);gi(e,u,o);break;default:throw Error(S(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hp(e,t,r){M=e,Kc(e)}function Kc(e,t,r){for(var n=(e.mode&1)!==0;M!==null;){var l=M,a=l.child;if(l.tag===22&&n){var o=l.memoizedState!==null||Qn;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||je;u=Qn;var c=je;if(Qn=o,(je=s)&&!c)for(M=l;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?Ls(l):s!==null?(s.return=o,M=s):Ls(l);for(;a!==null;)M=a,Kc(a),a=a.sibling;M=l,Qn=u,je=c}zs(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,M=a):zs(e)}}function zs(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Wl(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Ge(t.type,r.memoizedProps);n.componentDidUpdate(l,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&fs(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}fs(t,o,r)}break;case 5:var u=t.stateNode;if(r===null&&t.flags&4){r=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&cn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}je||t.flags&512&&hi(t)}catch(g){le(t,t.return,g)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function _s(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function Ls(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wl(4,t)}catch(s){le(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var l=t.return;try{n.componentDidMount()}catch(s){le(t,l,s)}}var a=t.return;try{hi(t)}catch(s){le(t,a,s)}break;case 5:var o=t.return;try{hi(t)}catch(s){le(t,o,s)}}}catch(s){le(t,t.return,s)}if(t===e){M=null;break}var u=t.sibling;if(u!==null){u.return=t.return,M=u;break}M=t.return}}var Vp=Math.ceil,_l=ht.ReactCurrentDispatcher,so=ht.ReactCurrentOwner,Ve=ht.ReactCurrentBatchConfig,Y=0,ge=null,ce=null,ye=0,De=0,mr=Ot(0),pe=0,kn=null,Jt=0,Ql=0,uo=0,rn=null,ze=null,co=0,Er=1/0,it=null,Ll=!1,yi=null,_t=null,Yn=!1,jt=null,Pl=0,nn=0,xi=null,al=-1,il=0;function Se(){return Y&6?oe():al!==-1?al:al=oe()}function Lt(e){return e.mode&1?Y&2&&ye!==0?ye&-ye:Ep.transition!==null?(il===0&&(il=Ru()),il):(e=K,e!==0||(e=window.event,e=e===void 0?16:Fu(e.type)),e):1}function qe(e,t,r,n){if(50<nn)throw nn=0,xi=null,Error(S(185));Cn(e,r,n),(!(Y&2)||e!==ge)&&(e===ge&&(!(Y&2)&&(Ql|=r),pe===4&&wt(e,ye)),Te(e,n),r===1&&Y===0&&!(t.mode&1)&&(Er=oe()+500,Ul&&It()))}function Te(e,t){var r=e.callbackNode;Ef(e,t);var n=ml(e,e===ge?ye:0);if(n===0)r!==null&&Ao(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ao(r),t===1)e.tag===0?Cp(Ps.bind(null,e)):ac(Ps.bind(null,e)),jp(function(){!(Y&6)&&It()}),r=null;else{switch(Mu(n)){case 1:r=Oi;break;case 4:r=Pu;break;case 16:r=pl;break;case 536870912:r=Tu;break;default:r=pl}r=nd(r,Jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jc(e,t){if(al=-1,il=0,Y&6)throw Error(S(327));var r=e.callbackNode;if(wr()&&e.callbackNode!==r)return null;var n=ml(e,e===ge?ye:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Tl(e,n);else{t=n;var l=Y;Y|=2;var a=qc();(ge!==e||ye!==t)&&(it=null,Er=oe()+500,Wt(e,t));do try{Yp();break}catch(u){Xc(e,u)}while(!0);Ki(),_l.current=a,Y=l,ce!==null?t=0:(ge=null,ye=0,t=pe)}if(t!==0){if(t===2&&(l=Qa(e),l!==0&&(n=l,t=wi(e,l))),t===1)throw r=kn,Wt(e,0),wt(e,n),Te(e,oe()),r;if(t===6)wt(e,n);else{if(l=e.current.alternate,!(n&30)&&!Wp(l)&&(t=Tl(e,n),t===2&&(a=Qa(e),a!==0&&(n=a,t=wi(e,a))),t===1))throw r=kn,Wt(e,0),wt(e,n),Te(e,oe()),r;switch(e.finishedWork=l,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:$t(e,ze,it);break;case 3:if(wt(e,n),(n&130023424)===n&&(t=co+500-oe(),10<t)){if(ml(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){Se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ei($t.bind(null,e,ze,it),t);break}$t(e,ze,it);break;case 4:if(wt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,l=-1;0<n;){var o=31-Xe(n);a=1<<o,o=t[o],o>l&&(l=o),n&=~a}if(n=l,n=oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Vp(n/1960))-n,10<n){e.timeoutHandle=ei($t.bind(null,e,ze,it),n);break}$t(e,ze,it);break;case 5:$t(e,ze,it);break;default:throw Error(S(329))}}}return Te(e,oe()),e.callbackNode===r?Jc.bind(null,e):null}function wi(e,t){var r=rn;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=ze,ze=r,t!==null&&ki(t)),e}function ki(e){ze===null?ze=e:ze.push.apply(ze,e)}function Wp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var l=r[n],a=l.getSnapshot;l=l.value;try{if(!Ze(a(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~uo,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xe(t),n=1<<r;e[r]=-1,t&=~n}}function Ps(e){if(Y&6)throw Error(S(327));wr();var t=ml(e,0);if(!(t&1))return Te(e,oe()),null;var r=Tl(e,t);if(e.tag!==0&&r===2){var n=Qa(e);n!==0&&(t=n,r=wi(e,n))}if(r===1)throw r=kn,Wt(e,0),wt(e,t),Te(e,oe()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,ze,it),Te(e,oe()),null}function fo(e,t){var r=Y;Y|=1;try{return e(t)}finally{Y=r,Y===0&&(Er=oe()+500,Ul&&It())}}function Xt(e){jt!==null&&jt.tag===0&&!(Y&6)&&wr();var t=Y;Y|=1;var r=Ve.transition,n=K;try{if(Ve.transition=null,K=1,e)return e()}finally{K=n,Ve.transition=r,Y=t,!(Y&6)&&It()}}function po(){De=mr.current,Z(mr)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,kp(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(Qi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&xl();break;case 3:Sr(),Z(Le),Z(be),to();break;case 5:eo(n);break;case 4:Sr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Ji(n.type._context);break;case 22:case 23:po()}r=r.return}if(ge=e,ce=e=Pt(e.current,null),ye=De=t,pe=0,kn=null,uo=Ql=Jt=0,ze=rn=null,Ht!==null){for(t=0;t<Ht.length;t++)if(r=Ht[t],n=r.interleaved,n!==null){r.interleaved=null;var l=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=l,n.next=o}r.pending=n}Ht=null}return e}function Xc(e,t){do{var r=ce;try{if(Ki(),rl.current=zl,El){for(var n=re.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}El=!1}if(Kt=0,he=fe=re=null,en=!1,yn=0,so.current=null,r===null||r.return===null){pe=1,kn=t,ce=null;break}e:{var a=e,o=r.return,u=r,s=t;if(t=ye,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ys(o);if(y!==null){y.flags&=-257,xs(y,o,u,a,t),y.mode&1&&vs(a,c,t),t=y,s=c;var j=t.updateQueue;if(j===null){var b=new Set;b.add(s),t.updateQueue=b}else j.add(s);break e}else{if(!(t&1)){vs(a,c,t),mo();break e}s=Error(S(426))}}else if(ee&&u.mode&1){var C=ys(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xs(C,o,u,a,t),Yi(Cr(s,u));break e}}a=s=Cr(s,u),pe!==4&&(pe=2),rn===null?rn=[a]:rn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Mc(a,s,t);ds(a,f);break e;case 1:u=s;var d=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Dc(a,u,t);ds(a,x);break e}}a=a.return}while(a!==null)}ed(r)}catch(N){t=N,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function qc(){var e=_l.current;return _l.current=zl,e===null?zl:e}function mo(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||!(Jt&268435455)&&!(Ql&268435455)||wt(ge,ye)}function Tl(e,t){var r=Y;Y|=2;var n=qc();(ge!==e||ye!==t)&&(it=null,Wt(e,t));do try{Qp();break}catch(l){Xc(e,l)}while(!0);if(Ki(),Y=r,_l.current=n,ce!==null)throw Error(S(261));return ge=null,ye=0,pe}function Qp(){for(;ce!==null;)Zc(ce)}function Yp(){for(;ce!==null&&!yf();)Zc(ce)}function Zc(e){var t=rd(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?ed(e):ce=t,so.current=null}function ed(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Fp(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(r=Ap(r,t,De),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function $t(e,t,r){var n=K,l=Ve.transition;try{Ve.transition=null,K=1,Gp(e,t,r,n)}finally{Ve.transition=l,K=n}return null}function Gp(e,t,r,n){do wr();while(jt!==null);if(Y&6)throw Error(S(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(zf(e,a),e===ge&&(ce=ge=null,ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Yn||(Yn=!0,nd(pl,function(){return wr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Ve.transition,Ve.transition=null;var o=K;K=1;var u=Y;Y|=4,so.current=null,Up(e,r),Gc(r,e),mp(qa),hl=!!Xa,qa=Xa=null,e.current=r,Hp(r),xf(),Y=u,K=o,Ve.transition=a}else e.current=r;if(Yn&&(Yn=!1,jt=e,Pl=l),a=e.pendingLanes,a===0&&(_t=null),jf(r.stateNode),Te(e,oe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],n(l.value,{componentStack:l.stack,digest:l.digest});if(Ll)throw Ll=!1,e=yi,yi=null,e;return Pl&1&&e.tag!==0&&wr(),a=e.pendingLanes,a&1?e===xi?nn++:(nn=0,xi=e):nn=0,It(),null}function wr(){if(jt!==null){var e=Mu(Pl),t=Ve.transition,r=K;try{if(Ve.transition=null,K=16>e?16:e,jt===null)var n=!1;else{if(e=jt,jt=null,Pl=0,Y&6)throw Error(S(331));var l=Y;for(Y|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var u=a.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(M=c;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:tn(8,h,a)}var m=h.child;if(m!==null)m.return=h,M=m;else for(;M!==null;){h=M;var g=h.sibling,y=h.return;if(Wc(h),h===c){M=null;break}if(g!==null){g.return=y,M=g;break}M=y}}}var j=a.alternate;if(j!==null){var b=j.child;if(b!==null){j.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:tn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,M=f;break e}M=a.return}}var d=e.current;for(M=d;M!==null;){o=M;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,M=p;else e:for(o=d;M!==null;){if(u=M,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Wl(9,u)}}catch(N){le(u,u.return,N)}if(u===o){M=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,M=x;break e}M=u.return}}if(Y=l,It(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Il,e)}catch{}n=!0}return n}finally{K=r,Ve.transition=t}}return!1}function Ts(e,t,r){t=Cr(r,t),t=Mc(e,t,1),e=zt(e,t,1),t=Se(),e!==null&&(Cn(e,1,t),Te(e,t))}function le(e,t,r){if(e.tag===3)Ts(e,e,r);else for(;t!==null;){if(t.tag===3){Ts(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_t===null||!_t.has(n))){e=Cr(r,e),e=Dc(t,e,1),t=zt(t,e,1),e=Se(),t!==null&&(Cn(t,1,e),Te(t,e));break}}t=t.return}}function Kp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&r,ge===e&&(ye&r)===r&&(pe===4||pe===3&&(ye&130023424)===ye&&500>oe()-co?Wt(e,0):uo|=r),Te(e,t)}function td(e,t){t===0&&(e.mode&1?(t=In,In<<=1,!(In&130023424)&&(In=4194304)):t=1);var r=Se();e=pt(e,t),e!==null&&(Cn(e,t,r),Te(e,r))}function Jp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),td(e,r)}function Xp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),td(e,r)}var rd;rd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)_e=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return _e=!1,Bp(e,t,r);_e=!!(e.flags&131072)}else _e=!1,ee&&t.flags&1048576&&ic(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ll(e,t),e=t.pendingProps;var l=jr(t,be.current);xr(t,r),l=no(null,t,n,e,l,r);var a=lo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(n)?(a=!0,wl(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qi(t),l.updater=Vl,t.stateNode=l,l._reactInternals=t,oi(t,n,e,r),t=ci(null,t,n,!0,a,r)):(t.tag=0,ee&&a&&Wi(t),Ne(null,t,l,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ll(e,t),e=t.pendingProps,l=n._init,n=l(n._payload),t.type=n,l=t.tag=Zp(n),e=Ge(n,e),l){case 0:t=ui(null,t,n,e,r);break e;case 1:t=js(null,t,n,e,r);break e;case 11:t=ws(null,t,n,e,r);break e;case 14:t=ks(null,t,n,Ge(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ge(n,l),ui(e,t,n,l,r);case 1:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ge(n,l),js(e,t,n,l,r);case 3:e:{if(Ac(t),e===null)throw Error(S(387));n=t.pendingProps,a=t.memoizedState,l=a.element,fc(e,t),Sl(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Cr(Error(S(423)),t),t=bs(e,t,n,r,l);break e}else if(n!==l){l=Cr(Error(S(424)),t),t=bs(e,t,n,r,l);break e}else for(Oe=Et(t.stateNode.containerInfo.firstChild),Ie=t,ee=!0,Je=null,r=cc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(br(),n===l){t=mt(e,t,r);break e}Ne(e,t,n,r)}t=t.child}return t;case 5:return pc(t),e===null&&li(t),n=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,Za(n,l)?o=null:a!==null&&Za(n,a)&&(t.flags|=32),Bc(e,t),Ne(e,t,o,r),t.child;case 6:return e===null&&li(t),null;case 13:return Fc(e,t,r);case 4:return Zi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Nr(t,null,n,r):Ne(e,t,n,r),t.child;case 11:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ge(n,l),ws(e,t,n,l,r);case 7:return Ne(e,t,t.pendingProps,r),t.child;case 8:return Ne(e,t,t.pendingProps.children,r),t.child;case 12:return Ne(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,X(bl,n._currentValue),n._currentValue=o,a!==null)if(Ze(a.value,o)){if(a.children===l.children&&!Le.current){t=mt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var s=u.firstContext;s!==null;){if(s.context===n){if(a.tag===1){s=ct(-1,r&-r),s.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),ai(a.return,r,t),u.lanes|=r;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),ai(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ne(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,n=t.pendingProps.children,xr(t,r),l=We(l),n=n(l),t.flags|=1,Ne(e,t,n,r),t.child;case 14:return n=t.type,l=Ge(n,t.pendingProps),l=Ge(n.type,l),ks(e,t,n,l,r);case 15:return Oc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,l=t.pendingProps,l=t.elementType===n?l:Ge(n,l),ll(e,t),t.tag=1,Pe(n)?(e=!0,wl(t)):e=!1,xr(t,r),Rc(t,n,l),oi(t,n,l,r),ci(null,t,n,!0,e,r);case 19:return $c(e,t,r);case 22:return Ic(e,t,r)}throw Error(S(156,t.tag))};function nd(e,t){return Lu(e,t)}function qp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,r,n){return new qp(e,t,r,n)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zp(e){if(typeof e=="function")return ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ri)return 11;if(e===Mi)return 14}return 2}function Pt(e,t){var r=e.alternate;return r===null?(r=He(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ol(e,t,r,n,l,a){var o=2;if(n=e,typeof e=="function")ho(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Qt(r.children,l,a,t);case Ti:o=8,l|=8;break;case Pa:return e=He(12,r,t,l|2),e.elementType=Pa,e.lanes=a,e;case Ta:return e=He(13,r,t,l),e.elementType=Ta,e.lanes=a,e;case Ra:return e=He(19,r,t,l),e.elementType=Ra,e.lanes=a,e;case pu:return Yl(r,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:o=10;break e;case fu:o=9;break e;case Ri:o=11;break e;case Mi:o=14;break e;case vt:o=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=He(o,r,t,l),t.elementType=e,t.type=n,t.lanes=a,t}function Qt(e,t,r,n){return e=He(7,e,n,t),e.lanes=r,e}function Yl(e,t,r,n){return e=He(22,e,n,t),e.elementType=pu,e.lanes=r,e.stateNode={isHidden:!1},e}function Sa(e,t,r){return e=He(6,e,null,t),e.lanes=r,e}function Ca(e,t,r){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function em(e,t,r,n,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function go(e,t,r,n,l,a,o,u,s){return e=new em(e,t,r,u,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=He(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},qi(a),e}function tm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ld(e){if(!e)return Mt;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(Pe(r))return lc(e,r,t)}return t}function ad(e,t,r,n,l,a,o,u,s){return e=go(r,n,!0,e,l,a,o,u,s),e.context=ld(null),r=e.current,n=Se(),l=Lt(r),a=ct(n,l),a.callback=t??null,zt(r,a,l),e.current.lanes=l,Cn(e,l,n),Te(e,n),e}function Gl(e,t,r,n){var l=t.current,a=Se(),o=Lt(l);return r=ld(r),t.context===null?t.context=r:t.pendingContext=r,t=ct(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=zt(l,t,o),e!==null&&(qe(e,l,o,a),tl(e,l,o)),o}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function vo(e,t){Rs(e,t),(e=e.alternate)&&Rs(e,t)}function rm(){return null}var id=typeof reportError=="function"?reportError:function(e){console.error(e)};function yo(e){this._internalRoot=e}Kl.prototype.render=yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Gl(e,t,null,null)};Kl.prototype.unmount=yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Gl(null,e,null,null)}),t[ft]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<xt.length&&t!==0&&t<xt[r].priority;r++);xt.splice(r,0,e),r===0&&Au(e)}};function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ms(){}function nm(e,t,r,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var c=Rl(o);a.call(c)}}var o=ad(t,n,e,0,null,!1,!1,"",Ms);return e._reactRootContainer=o,e[ft]=o.current,pn(e.nodeType===8?e.parentNode:e),Xt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var u=n;n=function(){var c=Rl(s);u.call(c)}}var s=go(e,0,!1,null,null,!1,!1,"",Ms);return e._reactRootContainer=s,e[ft]=s.current,pn(e.nodeType===8?e.parentNode:e),Xt(function(){Gl(t,s,r,n)}),s}function Xl(e,t,r,n,l){var a=r._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var u=l;l=function(){var s=Rl(o);u.call(s)}}Gl(t,o,e,l)}else o=nm(r,t,e,l,n);return Rl(o)}Du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Qr(t.pendingLanes);r!==0&&(Ii(t,r|1),Te(t,oe()),!(Y&6)&&(Er=oe()+500,It()))}break;case 13:Xt(function(){var n=pt(e,1);if(n!==null){var l=Se();qe(n,e,1,l)}}),vo(e,1)}};Bi=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var r=Se();qe(t,e,134217728,r)}vo(e,134217728)}};Ou=function(e){if(e.tag===13){var t=Lt(e),r=pt(e,t);if(r!==null){var n=Se();qe(r,e,t,n)}vo(e,t)}};Iu=function(){return K};Bu=function(e,t){var r=K;try{return K=e,t()}finally{K=r}};Ha=function(e,t,r){switch(t){case"input":if(Oa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var l=$l(n);if(!l)throw Error(S(90));hu(n),Oa(n,l)}}}break;case"textarea":vu(e,r);break;case"select":t=r.value,t!=null&&hr(e,!!r.multiple,t,!1)}};Nu=fo;Su=Xt;var lm={usingClientEntryPoint:!1,Events:[zn,sr,$l,ju,bu,fo]},Hr={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gn.isDisabled&&Gn.supportsFiber)try{Il=Gn.inject(am),lt=Gn}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Ae.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xo(t))throw Error(S(200));return tm(e,t,null,r)};Ae.createRoot=function(e,t){if(!xo(e))throw Error(S(299));var r=!1,n="",l=id;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=go(e,1,!1,null,null,r,!1,n,l),e[ft]=t.current,pn(e.nodeType===8?e.parentNode:e),new yo(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Xt(e)};Ae.hydrate=function(e,t,r){if(!Jl(t))throw Error(S(200));return Xl(null,e,t,!0,r)};Ae.hydrateRoot=function(e,t,r){if(!xo(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,l=!1,a="",o=id;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=ad(t,null,e,1,r??null,l,!1,a,o),e[ft]=t.current,pn(e),n)for(e=0;e<n.length;e++)r=n[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Kl(t)};Ae.render=function(e,t,r){if(!Jl(t))throw Error(S(200));return Xl(null,e,t,!1,r)};Ae.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(S(40));return e._reactRootContainer?(Xt(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Ae.unstable_batchedUpdates=fo;Ae.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Jl(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Xl(e,t,r,!1,n)};Ae.version="18.3.1-next-f1338f8080-20240426";function od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od)}catch(e){console.error(e)}}od(),ou.exports=Ae;var im=ou.exports,Ds=im;_a.createRoot=Ds.createRoot,_a.hydrateRoot=Ds.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},jn.apply(null,arguments)}var bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bt||(bt={}));const Os="popstate";function om(e){e===void 0&&(e={});function t(n,l){let{pathname:a,search:o,hash:u}=n.location;return ji("",{pathname:a,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:Ml(l)}return um(t,r,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sm(){return Math.random().toString(36).substr(2,8)}function Is(e,t){return{usr:e.state,key:e.key,idx:t}}function ji(e,t,r,n){return r===void 0&&(r=null),jn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:r,key:t&&t.key||n||sm()})}function Ml(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Pr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function um(e,t,r,n){n===void 0&&(n={});let{window:l=document.defaultView,v5Compat:a=!1}=n,o=l.history,u=bt.Pop,s=null,c=h();c==null&&(c=0,o.replaceState(jn({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){u=bt.Pop;let C=h(),f=C==null?null:C-c;c=C,s&&s({action:u,location:b.location,delta:f})}function g(C,f){u=bt.Push;let d=ji(b.location,C,f);c=h()+1;let p=Is(d,c),x=b.createHref(d);try{o.pushState(p,"",x)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(x)}a&&s&&s({action:u,location:b.location,delta:1})}function y(C,f){u=bt.Replace;let d=ji(b.location,C,f);c=h();let p=Is(d,c),x=b.createHref(d);o.replaceState(p,"",x),a&&s&&s({action:u,location:b.location,delta:0})}function j(C){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof C=="string"?C:Ml(C);return d=d.replace(/ $/,"%20"),se(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let b={get action(){return u},get location(){return e(l,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Os,m),s=C,()=>{l.removeEventListener(Os,m),s=null}},createHref(C){return t(l,C)},createURL:j,encodeLocation(C){let f=j(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(C){return o.go(C)}};return b}var Bs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bs||(Bs={}));function cm(e,t,r){return r===void 0&&(r="/"),dm(e,t,r)}function dm(e,t,r,n){let l=typeof t=="string"?Pr(t):t,a=ko(l.pathname||"/",r);if(a==null)return null;let o=sd(e);fm(o);let u=null,s=Nm(a);for(let c=0;u==null&&c<o.length;++c)u=km(o[c],s);return u}function sd(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let l=(a,o,u)=>{let s={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(se(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let c=Tt([n,s.relativePath]),h=r.concat(s);a.children&&a.children.length>0&&(se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sd(a.children,t,h,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:xm(c,a.index),routesMeta:h})};return e.forEach((a,o)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))l(a,o);else for(let s of ud(a.path))l(a,o,s)}),t}function ud(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,l=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return l?[a,""]:[a];let o=ud(n.join("/")),u=[];return u.push(...o.map(s=>s===""?a:[a,s].join("/"))),l&&u.push(...o),u.map(s=>e.startsWith("/")&&s===""?"/":s)}function fm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:wm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const pm=/^:[\w-]+$/,mm=3,hm=2,gm=1,vm=10,ym=-2,As=e=>e==="*";function xm(e,t){let r=e.split("/"),n=r.length;return r.some(As)&&(n+=ym),t&&(n+=hm),r.filter(l=>!As(l)).reduce((l,a)=>l+(pm.test(a)?mm:a===""?gm:vm),n)}function wm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,l)=>n===t[l])?e[e.length-1]-t[t.length-1]:0}function km(e,t,r){let{routesMeta:n}=e,l={},a="/",o=[];for(let u=0;u<n.length;++u){let s=n[u],c=u===n.length-1,h=a==="/"?t:t.slice(a.length)||"/",m=jm({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h),g=s.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:Tt([a,m.pathname]),pathnameBase:_m(Tt([a,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(a=Tt([a,m.pathnameBase]))}return o}function jm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=bm(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let a=l[0],o=a.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:n.reduce((c,h,m)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let b=u[m]||"";o=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const j=u[m];return y&&!j?c[g]=void 0:c[g]=(j||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:e}}function bm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),wo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,s)=>(n.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),n]}function Nm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ko(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cm=e=>Sm.test(e);function Em(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:l=""}=typeof e=="string"?Pr(e):e,a;if(r)if(Cm(r))a=r;else{if(r.includes("//")){let o=r;r=cd(r),wo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?a=Fs(r.substring(1),"/"):a=Fs(r,t)}else a=t;return{pathname:a,search:Lm(n),hash:Pm(l)}}function Fs(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Ea(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function jo(e,t){let r=zm(e);return t?r.map((n,l)=>l===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function bo(e,t,r,n){n===void 0&&(n=!1);let l;typeof e=="string"?l=Pr(e):(l=jn({},e),se(!l.pathname||!l.pathname.includes("?"),Ea("?","pathname","search",l)),se(!l.pathname||!l.pathname.includes("#"),Ea("#","pathname","hash",l)),se(!l.search||!l.search.includes("#"),Ea("#","search","hash",l)));let a=e===""||l.pathname==="",o=a?"/":l.pathname,u;if(o==null)u=r;else{let m=t.length-1;if(!n&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}u=m>=0?t[m]:"/"}let s=Em(l,u),c=o&&o!=="/"&&o.endsWith("/"),h=(a||o===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const cd=e=>e.replace(/\/\/+/g,"/"),Tt=e=>cd(e.join("/")),_m=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dd=["post","put","patch","delete"];new Set(dd);const Rm=["get",...dd];new Set(Rm);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bn(){return bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bn.apply(null,arguments)}const No=v.createContext(null),Mm=v.createContext(null),Bt=v.createContext(null),ql=v.createContext(null),At=v.createContext({outlet:null,matches:[],isDataRoute:!1}),fd=v.createContext(null);function Dm(e,t){let{relative:r}=t===void 0?{}:t;Tr()||se(!1);let{basename:n,navigator:l}=v.useContext(Bt),{hash:a,pathname:o,search:u}=md(e,{relative:r}),s=o;return n!=="/"&&(s=o==="/"?n:Tt([n,o])),l.createHref({pathname:s,search:u,hash:a})}function Tr(){return v.useContext(ql)!=null}function Rr(){return Tr()||se(!1),v.useContext(ql).location}function pd(e){v.useContext(Bt).static||v.useLayoutEffect(e)}function Zl(){let{isDataRoute:e}=v.useContext(At);return e?Gm():Om()}function Om(){Tr()||se(!1);let e=v.useContext(No),{basename:t,future:r,navigator:n}=v.useContext(Bt),{matches:l}=v.useContext(At),{pathname:a}=Rr(),o=JSON.stringify(jo(l,r.v7_relativeSplatPath)),u=v.useRef(!1);return pd(()=>{u.current=!0}),v.useCallback(function(c,h){if(h===void 0&&(h={}),!u.current)return;if(typeof c=="number"){n.go(c);return}let m=bo(c,JSON.parse(o),a,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Tt([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,o,a,e])}function md(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(Bt),{matches:l}=v.useContext(At),{pathname:a}=Rr(),o=JSON.stringify(jo(l,n.v7_relativeSplatPath));return v.useMemo(()=>bo(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function Im(e,t){return Bm(e,t)}function Bm(e,t,r,n){Tr()||se(!1);let{navigator:l}=v.useContext(Bt),{matches:a}=v.useContext(At),o=a[a.length-1],u=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Rr(),h;if(t){var m;let C=typeof t=="string"?Pr(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||se(!1),h=C}else h=c;let g=h.pathname||"/",y=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let j=cm(e,{pathname:y}),b=Hm(j&&j.map(C=>Object.assign({},C,{params:Object.assign({},u,C.params),pathname:Tt([s,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Tt([s,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,r,n);return t&&b?v.createElement(ql.Provider,{value:{location:bn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:bt.Pop}},b):b}function Am(){let e=Ym(),t=Tm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:l},r):null,null)}const Fm=v.createElement(Am,null);class $m extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(At.Provider,{value:this.props.routeContext},v.createElement(fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Um(e){let{routeContext:t,match:r,children:n}=e,l=v.useContext(No);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(At.Provider,{value:t},n)}function Hm(e,t,r,n){var l;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,u=(l=r)==null?void 0:l.errors;if(u!=null){let h=o.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);h>=0||se(!1),o=o.slice(0,Math.min(o.length,h+1))}let s=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:y}=r,j=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||j){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let y,j=!1,b=null,C=null;r&&(y=u&&m.route.id?u[m.route.id]:void 0,b=m.route.errorElement||Fm,s&&(c<0&&g===0?(Km("route-fallback"),j=!0,C=null):c===g&&(j=!0,C=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return y?p=b:j?p=C:m.route.Component?p=v.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,v.createElement(Um,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:r!=null},children:p})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?v.createElement($m,{location:r.location,revalidation:r.revalidation,component:b,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var hd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hd||{}),gd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gd||{});function Vm(e){let t=v.useContext(No);return t||se(!1),t}function Wm(e){let t=v.useContext(Mm);return t||se(!1),t}function Qm(e){let t=v.useContext(At);return t||se(!1),t}function vd(e){let t=Qm(),r=t.matches[t.matches.length-1];return r.route.id||se(!1),r.route.id}function Ym(){var e;let t=v.useContext(fd),r=Wm(),n=vd();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Gm(){let{router:e}=Vm(hd.UseNavigateStable),t=vd(gd.UseNavigateStable),r=v.useRef(!1);return pd(()=>{r.current=!0}),v.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,bn({fromRouteId:t},a)))},[e,t])}const $s={};function Km(e,t,r){$s[e]||($s[e]=!0)}function Jm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yd(e){let{to:t,replace:r,state:n,relative:l}=e;Tr()||se(!1);let{future:a,static:o}=v.useContext(Bt),{matches:u}=v.useContext(At),{pathname:s}=Rr(),c=Zl(),h=bo(t,jo(u,a.v7_relativeSplatPath),s,l==="path"),m=JSON.stringify(h);return v.useEffect(()=>c(JSON.parse(m),{replace:r,state:n,relative:l}),[c,m,l,r,n]),null}function Gr(e){se(!1)}function Xm(e){let{basename:t="/",children:r=null,location:n,navigationType:l=bt.Pop,navigator:a,static:o=!1,future:u}=e;Tr()&&se(!1);let s=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:a,static:o,future:bn({v7_relativeSplatPath:!1},u)}),[s,u,a,o]);typeof n=="string"&&(n=Pr(n));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:j="default"}=n,b=v.useMemo(()=>{let C=ko(h,s);return C==null?null:{location:{pathname:C,search:m,hash:g,state:y,key:j},navigationType:l}},[s,h,m,g,y,j,l]);return b==null?null:v.createElement(Bt.Provider,{value:c},v.createElement(ql.Provider,{children:r,value:b}))}function qm(e){let{children:t,location:r}=e;return Im(bi(t),r)}new Promise(()=>{});function bi(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,l)=>{if(!v.isValidElement(n))return;let a=[...t,l];if(n.type===v.Fragment){r.push.apply(r,bi(n.props.children,a));return}n.type!==Gr&&se(!1),!n.props.index||!n.props.children||se(!1);let o={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=bi(n.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ni.apply(null,arguments)}function Zm(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function eh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function th(e,t){return e.button===0&&(!t||t==="_self")&&!eh(e)}const rh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nh="6";try{window.__reactRouterVersion=nh}catch{}const lh="startTransition",Us=Gd[lh];function ah(e){let{basename:t,children:r,future:n,window:l}=e,a=v.useRef();a.current==null&&(a.current=om({window:l,v5Compat:!0}));let o=a.current,[u,s]=v.useState({action:o.action,location:o.location}),{v7_startTransition:c}=n||{},h=v.useCallback(m=>{c&&Us?Us(()=>s(m)):s(m)},[s,c]);return v.useLayoutEffect(()=>o.listen(h),[o,h]),v.useEffect(()=>Jm(n),[n]),v.createElement(Xm,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:o,future:n})}const ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kn=v.forwardRef(function(t,r){let{onClick:n,relative:l,reloadDocument:a,replace:o,state:u,target:s,to:c,preventScrollReset:h,viewTransition:m}=t,g=Zm(t,rh),{basename:y}=v.useContext(Bt),j,b=!1;if(typeof c=="string"&&oh.test(c)&&(j=c,ih))try{let p=new URL(window.location.href),x=c.startsWith("//")?new URL(p.protocol+c):new URL(c),N=ko(x.pathname,y);x.origin===p.origin&&N!=null?c=N+x.search+x.hash:b=!0}catch{}let C=Dm(c,{relative:l}),f=sh(c,{replace:o,state:u,target:s,preventScrollReset:h,relative:l,viewTransition:m});function d(p){n&&n(p),p.defaultPrevented||f(p)}return v.createElement("a",Ni({},g,{href:j||C,onClick:b||a?n:d,ref:r,target:s}))});var Hs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hs||(Hs={}));var Vs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vs||(Vs={}));function sh(e,t){let{target:r,replace:n,state:l,preventScrollReset:a,relative:o,viewTransition:u}=t===void 0?{}:t,s=Zl(),c=Rr(),h=md(e,{relative:o});return v.useCallback(m=>{if(th(m,r)){m.preventDefault();let g=n!==void 0?n:Ml(c)===Ml(h);s(e,{replace:g,state:l,preventScrollReset:a,relative:o,viewTransition:u})}},[c,s,h,n,l,r,e,a,o,u])}const xd=v.createContext(null),uh=({children:e})=>{const[t,r]=v.useState(null),[n,l]=v.useState(localStorage.getItem("token")||null),[a,o]=v.useState(!1),[u,s]=v.useState(!0),[c,h]=v.useState(null);v.useEffect(()=>{(async()=>{if(!n){s(!1);return}try{const d=await(await fetch("/api/auth/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}})).json();d.success?(r(d.data),o(!0)):(localStorage.removeItem("token"),l(null),r(null),o(!1))}catch(f){console.error("Failed to load user:",f)}finally{s(!1)}})()},[n]);const b={user:t,token:n,isAuthenticated:a,loading:u,error:c,login:async(C,f)=>{s(!0),h(null);try{const p=await(await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:C,password:f})})).json();return p.success?(localStorage.setItem("token",p.data.token),l(p.data.token),r({_id:p.data._id,name:p.data.name,email:p.data.email,role:p.data.role}),o(!0),{success:!0}):(h(p.message||"Login failed"),{success:!1,message:p.message||"Login failed"})}catch(d){return console.error("Login error:",d),h("Network error, please try again."),{success:!1,message:"Network error, please try again."}}finally{s(!1)}},signup:async(C,f,d,p)=>{s(!0),h(null);try{const N=await(await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:C,email:f,password:d,role:p})})).json();return N.success?(localStorage.setItem("token",N.data.token),l(N.data.token),r({_id:N.data._id,name:N.data.name,email:N.data.email,role:N.data.role}),o(!0),{success:!0}):(h(N.message||"Registration failed"),{success:!1,message:N.message||"Registration failed"})}catch(x){return console.error("Registration error:",x),h("Network error, please try again."),{success:!1,message:"Network error, please try again."}}finally{s(!1)}},logout:()=>{localStorage.removeItem("token"),l(null),r(null),o(!1),h(null)},clearError:()=>h(null)};return i.jsx(xd.Provider,{value:b,children:e})},tr=()=>{const e=v.useContext(xd);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ch={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(e,t)=>{const r=v.forwardRef(({color:n="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:u="",children:s,...c},h)=>v.createElement("svg",{ref:h,...ch,width:l,height:l,stroke:n,strokeWidth:o?Number(a)*24/Number(l):a,className:["lucide",`lucide-${dh(e)}`,u].join(" "),...c},[...t.map(([m,g])=>v.createElement(m,g)),...Array.isArray(s)?s:[s]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=W("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=W("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=W("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=W("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=W("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=W("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=W("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=W("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=W("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=W("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=W("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=W("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=W("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=W("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=W("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=W("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=W("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=W("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=W("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=W("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=W("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=W("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=W("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=W("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=W("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=W("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=W("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=W("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),zh=()=>{const{user:e,isAuthenticated:t,logout:r}=tr(),n=Zl(),l=Rr(),a=()=>{r(),n("/")},o=u=>l.pathname===u?"nav-link-active":"";return i.jsxs("nav",{className:"navbar-container",children:[i.jsxs("div",{className:"navbar-inner",children:[i.jsxs(Kn,{to:"/",className:"navbar-brand",children:[i.jsx("div",{className:"brand-logo",children:i.jsx(xh,{size:24,className:"brand-icon-svg"})}),i.jsxs("span",{className:"brand-text",children:["Library ",i.jsx("span",{className:"brand-highlight",children:"Cipher"})]})]}),i.jsxs("div",{className:"navbar-links",children:[i.jsxs(Kn,{to:"/catalog",className:`nav-link ${o("/catalog")}`,children:[i.jsx(qt,{size:18}),i.jsx("span",{children:"Catalog"})]}),t&&i.jsxs(Kn,{to:"/dashboard",className:`nav-link ${o("/dashboard")}`,children:[i.jsx(yh,{size:18}),i.jsx("span",{children:"Dashboard"})]})]}),i.jsx("div",{className:"navbar-actions",children:t?i.jsxs("div",{className:"user-profile-badge",children:[i.jsxs("div",{className:"user-info",children:[i.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),i.jsx("span",{className:`role-tag ${(e==null?void 0:e.role)==="librarian"?"role-librarian":"role-member"}`,children:e==null?void 0:e.role})]}),i.jsx("button",{onClick:a,className:"btn-logout",title:"Log Out",children:i.jsx(wh,{size:18})})]}):i.jsxs(Kn,{to:"/",className:"btn btn-primary btn-sm",children:[i.jsx(Ch,{size:16}),i.jsx("span",{children:"Get Started"})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          background: rgba(8, 10, 24, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.15);
          z-index: 100;
          display: flex;
          align-items: center;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-logo {
          background: var(--gradient-primary);
          padding: 0.5rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .brand-icon-svg {
          color: white;
        }

        .brand-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }

        .brand-highlight {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link-active {
          color: var(--text-primary) !important;
          background: rgba(99, 102, 241, 0.1) !important;
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
        }

        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 0.4rem 0.4rem 0.4rem 1rem;
          border-radius: 12px;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.1rem;
        }

        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .role-tag {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        .role-librarian {
          background: rgba(168, 85, 247, 0.15);
          color: #d8b4fe;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .role-member {
          background: rgba(99, 102, 241, 0.15);
          color: #c7d2fe;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .btn-logout {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-logout:hover {
          background: rgba(239, 68, 68, 0.3);
          color: white;
          border-color: var(--accent-red);
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
        }
      `}})]})},_h=()=>{const{login:e,signup:t,isAuthenticated:r,error:n,clearError:l}=tr(),a=Zl(),[o,u]=v.useState(!0),[s,c]=v.useState({name:"",email:"",password:"",role:"member"}),[h,m]=v.useState(""),[g,y]=v.useState(!1),[j,b]=v.useState(8),[C,f]=v.useState(5),[d,p]=v.useState([]),[x,N]=v.useState(!0);v.useEffect(()=>{r&&a("/catalog")},[r,a]),v.useEffect(()=>{l(),m("")},[o]),v.useEffect(()=>{const _=async()=>{try{const R=await(await fetch("/api/books")).json();if(R.success){b(R.data.length);const A=new Set(R.data.map(me=>me.genre));f(A.size)}}catch(O){console.error("Error loading stats:",O)}},$=async()=>{try{N(!0);const R=await(await fetch("/api/books/featured")).json();R.success&&p(R.data.featuredBooks||[])}catch(O){console.error("Error loading featured books:",O)}finally{N(!1)}};_(),$()},[]);const L=_=>{c({...s,[_.target.name]:_.target.value})},T=async _=>{if(_.preventDefault(),m(""),y(!0),o){if(!s.email||!s.password){m("Please enter both email and password."),y(!1);return}const $=await e(s.email,s.password);$.success?a("/catalog"):m($.message||"Invalid email or password.")}else{if(!s.name||!s.email||!s.password){m("Please fill out all fields."),y(!1);return}if(s.password.length<6){m("Password must be at least 6 characters."),y(!1);return}const $=await t(s.name,s.email,s.password,s.role);$.success?a("/catalog"):m($.message||"Registration failed.")}y(!1)};return i.jsxs("div",{className:"landing-page-container",children:[i.jsx("div",{className:"glow-shape blob-1 spin-slow"}),i.jsx("div",{className:"glow-shape blob-2"}),i.jsxs("div",{className:"landing-layout",children:[i.jsxs("div",{className:"landing-hero-section",children:[i.jsxs("div",{className:"hero-badge",children:[i.jsx(Cd,{size:14,className:"sparkle-icon"}),i.jsx("span",{children:"Introducing Library Cipher 2.0"})]}),i.jsxs("h1",{className:"hero-title",children:["The Ultimate Digital ",i.jsx("br",{}),"Portal for ",i.jsx("span",{className:"gradient-title",children:"Book Lovers"})]}),i.jsx("p",{className:"hero-subtitle",children:"Seamlessly search catalogs, manage loans, and track your reading milestones in a premium, high-speed user interface designed for modern learners."}),i.jsxs("div",{className:"feature-bullets",children:[i.jsxs("div",{className:"bullet-item",children:[i.jsx(sl,{size:18,className:"bullet-check"}),i.jsx("span",{children:"Role-Based Librarian & Member views"})]}),i.jsxs("div",{className:"bullet-item",children:[i.jsx(sl,{size:18,className:"bullet-check"}),i.jsx("span",{children:"Real-time borrowing status indicators"})]}),i.jsxs("div",{className:"bullet-item",children:[i.jsx(sl,{size:18,className:"bullet-check"}),i.jsx("span",{children:"Interactive dashboard charts and logs"})]})]}),i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card glass-panel",children:[i.jsx(qt,{size:24,className:"stat-icon icon-blue"}),i.jsx("div",{className:"stat-value",children:j}),i.jsx("div",{className:"stat-label",children:"Total Books"})]}),i.jsxs("div",{className:"stat-card glass-panel",children:[i.jsx(mh,{size:24,className:"stat-icon icon-purple"}),i.jsx("div",{className:"stat-value",children:C}),i.jsx("div",{className:"stat-label",children:"Categories"})]}),i.jsxs("div",{className:"stat-card glass-panel",children:[i.jsx(_d,{size:24,className:"stat-icon icon-teal"}),i.jsx("div",{className:"stat-value",children:"Active"}),i.jsx("div",{className:"stat-label",children:"Community"})]})]}),i.jsxs("div",{className:"featured-spotlight glass-panel",children:[i.jsxs("div",{className:"featured-spotlight-header",children:[i.jsxs("div",{children:[i.jsx("p",{className:"featured-eyebrow",children:"Popular right now"}),i.jsx("h3",{children:"Curated picks for your next read"})]}),i.jsx("span",{className:"featured-pill",children:"Fresh every day"})]}),i.jsx("div",{className:"featured-list",children:x?i.jsx("p",{className:"featured-empty",children:"Loading favorites..."}):d.length>0?d.map(_=>i.jsxs("div",{className:"featured-book-item",children:[i.jsxs("div",{children:[i.jsx("p",{className:"featured-book-title",children:_.title}),i.jsxs("p",{className:"featured-book-meta",children:[_.author," · ",_.genre]})]}),i.jsxs("div",{className:"featured-book-action",children:[i.jsx("span",{children:_.ratingAverage?`${_.ratingAverage.toFixed(1)}★`:"New"}),i.jsx(wd,{size:16})]})]},_._id)):i.jsx("p",{className:"featured-empty",children:"More selections will appear here as the catalog grows."})})]})]}),i.jsx("div",{className:"landing-auth-section",children:i.jsxs("div",{className:"auth-form-card glass-panel",children:[i.jsxs("div",{className:"auth-tabs",children:[i.jsxs("button",{onClick:()=>u(!0),className:`auth-tab-btn ${o?"auth-tab-active":""}`,children:[i.jsx(Ys,{size:16}),i.jsx("span",{children:"Sign In"})]}),i.jsxs("button",{onClick:()=>u(!1),className:`auth-tab-btn ${o?"":"auth-tab-active"}`,children:[i.jsx(Gs,{size:16}),i.jsx("span",{children:"Register"})]})]}),i.jsx("div",{className:"auth-tab-divider"}),i.jsxs("form",{onSubmit:T,className:"auth-form",children:[h&&i.jsx("div",{className:"auth-error-banner",children:i.jsx("span",{children:h})}),!o&&i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",value:s.name,onChange:L,placeholder:"Enter your name",className:"input-field",required:!o})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",value:s.email,onChange:L,placeholder:"name@example.com",className:"input-field",required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Password"}),i.jsx("input",{type:"password",name:"password",value:s.password,onChange:L,placeholder:"••••••••",className:"input-field",required:!0})]}),!o&&i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Account Role"}),i.jsxs("select",{name:"role",value:s.role,onChange:L,className:"input-field",style:{background:"var(--bg-input)"},children:[i.jsx("option",{value:"member",children:"Library Member (Student)"}),i.jsx("option",{value:"librarian",children:"Librarian (Admin)"})]})]}),i.jsx("button",{type:"submit",disabled:g,className:"btn btn-primary w-full mt-4 py-3",children:g?i.jsx("div",{className:"small-loader"}):o?i.jsxs(i.Fragment,{children:[i.jsx(Ys,{size:18}),i.jsx("span",{children:"Enter Library Portal"})]}):i.jsxs(i.Fragment,{children:[i.jsx(Gs,{size:18}),i.jsx("span",{children:"Create Account"})]})})]})]})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .landing-page-container {
          position: relative;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding-top: 1rem;
        }

        .glow-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          filter: blur(120px);
          opacity: 0.2;
        }

        .blob-1 {
          width: 450px;
          height: 450px;
          background: var(--accent-indigo);
          top: 10%;
          left: 5%;
        }

        .blob-2 {
          width: 350px;
          height: 350px;
          background: var(--accent-purple);
          bottom: 10%;
          right: 5%;
        }

        .landing-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          width: 100%;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .landing-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 0.4rem 0.9rem;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #c7d2fe;
          margin-bottom: 1.5rem;
        }

        .sparkle-icon {
          color: var(--accent-purple);
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: 3.5rem;
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .feature-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .bullet-check {
          color: var(--accent-teal);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 600px;
        }

        .featured-spotlight {
          margin-top: 1.5rem;
          max-width: 680px;
          padding: 1.4rem 1.2rem !important;
        }

        .featured-spotlight-header {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }

        .featured-eyebrow {
          color: var(--accent-cyan);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .featured-spotlight h3 {
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .featured-pill {
          background: rgba(99, 102, 241, 0.14);
          color: #c7d2fe;
          border: 1px solid rgba(99, 102, 241, 0.22);
          border-radius: 999px;
          padding: 0.25rem 0.6rem;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .featured-list {
          display: grid;
          gap: 0.75rem;
        }

        .featured-book-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 0.9rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .featured-book-title {
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .featured-book-meta {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .featured-book-action {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-teal);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .featured-empty {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .stat-card {
          text-align: center;
          padding: 1.25rem 1rem !important;
          border-radius: 14px !important;
        }

        .stat-icon {
          margin: 0 auto 0.5rem auto;
        }

        .icon-blue { color: var(--accent-cyan); }
        .icon-purple { color: var(--accent-purple); }
        .icon-teal { color: var(--accent-teal); }

        .stat-value {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.2rem;
        }

        /* Auth Card styling */
        .auth-form-card {
          padding: 2.5rem !important;
          border-radius: 20px !important;
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--border-light) !important;
        }

        .auth-tabs {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.25rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .auth-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .auth-tab-active {
          background: var(--gradient-primary);
          color: white;
          box-shadow: 0 4px 10px rgba(168, 85, 247, 0.25);
        }

        .auth-tab-divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 1.5rem;
        }

        .auth-error-banner {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        .small-loader {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }
      `}})]})},Lh=({book:e,userRole:t,onBorrow:r,onEdit:n,onDelete:l,onViewDetails:a,activeBorrows:o=[],isFavorite:u=!1,onToggleFavorite:s})=>{var O;const{_id:c,title:h,author:m,genre:g,isbn:y,copiesTotal:j,copiesAvailable:b,coverImage:C,publishYear:f}=e,d=o.some(R=>{var A;return((A=R.book)==null?void 0:A._id)===c&&(R.status==="borrowed"||R.status==="overdue")}),p=o.find(R=>{var A;return((A=R.book)==null?void 0:A._id)===c&&(R.status==="borrowed"||R.status==="overdue")}),x=e.ratingAverage||0,N=((O=e.reviews)==null?void 0:O.length)||0,L=R=>{const A=(R||"").toLowerCase();return A.includes("fantasy")?"linear-gradient(135deg, #1e1b4b 0%, #311042 100%)":A.includes("sci-fi")||A.includes("dystopian")?"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)":A.includes("thriller")||A.includes("mystery")?"linear-gradient(135deg, #450a0a 0%, #1c0404 100%)":A.includes("biography")||A.includes("history")?"linear-gradient(135deg, #14532d 0%, #064e3b 100%)":A.includes("romance")?"linear-gradient(135deg, #831843 0%, #4c0519 100%)":"linear-gradient(135deg, #1e3a8a 0%, #172554 100%)"},T=b>0,_=b/j*100,$=()=>{a&&a(e)};return i.jsxs("div",{className:"book-card glass-panel",children:[i.jsxs("div",{className:"book-cover-container",onClick:$,style:{cursor:a?"pointer":"default"},children:[C?i.jsx("img",{src:C,alt:h,className:"book-cover-img",onError:R=>{R.target.style.display="none"}}):null,i.jsxs("div",{className:"book-cover-fallback",style:{background:L(g)},children:[i.jsx("div",{className:"spine-effect"}),i.jsxs("div",{className:"fallback-content",children:[i.jsx(kd,{size:32,className:"fallback-icon"}),i.jsx("h4",{className:"fallback-title",children:h}),i.jsx("span",{className:"fallback-author",children:m})]}),i.jsx("div",{className:"fallback-badge",children:g})]})]}),i.jsxs("div",{className:"book-card-details",children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[i.jsx("span",{className:"book-genre-tag",style:{margin:0},children:g}),i.jsx("button",{type:"button",className:`favorite-toggle-btn ${u?"is-favorited":""}`,onClick:R=>{R.stopPropagation(),s==null||s(c)},title:u?"Remove from saved list":"Save for later",children:i.jsx(Nd,{size:14,fill:u?"currentColor":"none"})}),i.jsx("div",{className:"card-stars-wrapper",children:x>0?i.jsxs("span",{className:"card-rating-tag",title:`${x.toFixed(1)} stars from ${N} reviews`,children:[i.jsx("span",{className:"star-icon",children:"★"}),i.jsx("span",{children:x.toFixed(1)})]}):i.jsx("span",{className:"card-no-rating-tag",children:"Unrated"})})]}),i.jsx("h3",{className:"book-title",title:h,onClick:$,style:{cursor:a?"pointer":"default"},children:h}),i.jsxs("p",{className:"book-author",children:["by ",m]}),i.jsxs("div",{className:"book-meta-grid",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx(jd,{size:13}),i.jsx("span",{children:f||"N/A"})]}),i.jsxs("div",{className:"meta-item",title:"ISBN Code",children:[i.jsx(bd,{size:13}),i.jsx("span",{className:"isbn-text",children:y})]})]}),i.jsxs("div",{className:"stock-container",children:[i.jsxs("div",{className:"stock-info",children:[i.jsx("span",{className:"stock-label",children:"Stock Status"}),i.jsxs("span",{className:"stock-ratio",children:[b," / ",j," Left"]})]}),i.jsx("div",{className:"stock-bar-track",children:i.jsx("div",{className:`stock-bar-fill ${_<30?"stock-low":_<60?"stock-medium":"stock-high"}`,style:{width:`${_}%`}})})]}),i.jsx("div",{className:"book-actions",children:t==="librarian"?i.jsxs("div",{className:"librarian-actions",children:[i.jsxs("button",{onClick:()=>n(e),className:"btn btn-secondary flex-1 btn-edit",children:[i.jsx(Sd,{size:16}),i.jsx("span",{children:"Edit"})]}),i.jsx("button",{onClick:()=>l(c),className:"btn btn-danger btn-delete",title:"Delete Book",children:i.jsx(Ed,{size:16})})]}):i.jsx("div",{className:"member-actions",children:d?i.jsx("div",{className:"borrowed-status-badge",children:i.jsxs("span",{className:"badge badge-borrowed w-full justify-center py-2 text-sm",children:["Borrowed (Due: ",new Date(p.dueDate).toLocaleDateString(),")"]})}):i.jsx("button",{onClick:()=>r(c),disabled:!T,className:`btn w-full ${T?"btn-primary":"btn-disabled"}`,children:T?"Borrow Book":"Out of Stock"})})})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .book-card {
          padding: 0 !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .book-cover-container {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid var(--border-light);
        }

        .book-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          transition: transform var(--transition-slow);
        }

        .book-card:hover .book-cover-img {
          transform: scale(1.08);
        }

        .book-cover-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          color: white;
          position: relative;
          z-index: 0;
        }

        .spine-effect {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 12px;
          background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.2) 100%);
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .fallback-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          max-width: 90%;
        }

        .fallback-icon {
          opacity: 0.6;
        }

        .fallback-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 0.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .fallback-author {
          font-size: 0.75rem;
          opacity: 0.8;
          font-weight: 500;
        }

        .fallback-badge {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.5rem;
          font-size: 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .book-card-details {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .book-genre-tag {
          font-size: 0.65rem;
          color: var(--accent-indigo);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.4rem;
        }

        .book-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .book-author {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .book-meta-grid {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .isbn-text {
          font-family: monospace;
          letter-spacing: 0.02em;
        }

        .stock-container {
          margin-top: auto;
          margin-bottom: 1.2rem;
        }

        .stock-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .stock-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .stock-ratio {
          color: var(--text-secondary);
          font-weight: 600;
        }

        .stock-bar-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .stock-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width var(--transition-normal);
        }

        .stock-high {
          background: var(--accent-emerald);
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
        }

        .stock-medium {
          background: var(--accent-amber);
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
        }

        .stock-low {
          background: var(--accent-red);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }

        .book-actions {
          display: flex;
        }

        .librarian-actions {
          display: flex;
          gap: 0.5rem;
          width: 100%;
        }

        .flex-1 {
          flex: 1;
        }

        .btn-edit {
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
        }

        .btn-delete {
          padding: 0.6rem;
        }

        .member-actions {
          width: 100%;
        }

        .btn-disabled {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: not-allowed;
        }

        .w-full {
          width: 100%;
        }

        .favorite-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .favorite-toggle-btn:hover {
          color: var(--accent-pink);
          border-color: rgba(236, 72, 153, 0.2);
          transform: translateY(-1px);
        }

        .favorite-toggle-btn.is-favorited {
          color: var(--accent-pink);
          background: rgba(236, 72, 153, 0.14);
          border-color: rgba(236, 72, 153, 0.24);
        }

        .card-stars-wrapper {
          display: flex;
          align-items: center;
        }

        .card-rating-tag {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          background: rgba(245, 158, 11, 0.1);
          color: #fcd34d;
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 0.15rem 0.4rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .star-icon {
          color: #f59e0b;
        }

        .card-no-rating-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}})]})},Nn=({isOpen:e,onClose:t,title:r,children:n})=>(v.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),e?i.jsxs("div",{className:"modal-overlay",onClick:t,children:[i.jsxs("div",{className:"modal-container glass-panel",onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{className:"modal-title",children:r}),i.jsx("button",{className:"modal-close-btn",onClick:t,children:i.jsx(Eh,{size:20})})]}),i.jsx("div",{className:"modal-body",children:n})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(2, 3, 10, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease-out;
        }

        .modal-container {
          background: var(--bg-modal) !important;
          border: 1px solid var(--border-hover) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), var(--shadow-glow-purple) !important;
          width: 100%;
          max-width: 550px;
          border-radius: 20px;
          padding: 2rem !important;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
        }

        .modal-title {
          font-size: 1.4rem;
          font-family: var(--font-display);
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--border-hover);
          transform: rotate(90deg);
        }

        .modal-body {
          max-height: 70vh;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        /* Modal Body Scrollbar styling */
        .modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.15);
          border-radius: 3px;
        }
        .modal-body::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}})]}):null),Ld=({book:e,isOpen:t,onClose:r,onBorrow:n,activeBorrows:l=[],user:a,onSubmitReview:o})=>{var I;if(!e)return null;const{_id:u,title:s,author:c,genre:h,isbn:m,copiesTotal:g,copiesAvailable:y,coverImage:j,publishYear:b,description:C,ratingAverage:f}=e,[d,p]=v.useState(5),[x,N]=v.useState(0),[L,T]=v.useState(""),[_,$]=v.useState(!1),[O,R]=v.useState("");v.useEffect(()=>{p(5),T(""),R("")},[e,t]);const A=l.some(z=>{var B;return((B=z.book)==null?void 0:B._id)===u&&(z.status==="borrowed"||z.status==="overdue")}),me=l.find(z=>{var B;return((B=z.book)==null?void 0:B._id)===u&&(z.status==="borrowed"||z.status==="overdue")}),ae=y>0,Re=y/g*100,de=((I=e.reviews)==null?void 0:I.length)||0,U=async z=>{if(z.preventDefault(),!!L.trim()){$(!0),R("");try{const B=await o(u,d,L);B.success?(R("Review submitted successfully!"),T(""),p(5)):R(B.message||"Failed to submit review.")}catch(B){console.error(B),R("Error submitting review.")}finally{$(!1)}}},E=z=>{const B=(z||"").toLowerCase();return B.includes("fantasy")?"linear-gradient(135deg, #1e1b4b 0%, #311042 100%)":B.includes("sci-fi")||B.includes("dystopian")?"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)":B.includes("thriller")||B.includes("mystery")?"linear-gradient(135deg, #450a0a 0%, #1c0404 100%)":B.includes("biography")||B.includes("history")?"linear-gradient(135deg, #14532d 0%, #064e3b 100%)":B.includes("romance")?"linear-gradient(135deg, #831843 0%, #4c0519 100%)":"linear-gradient(135deg, #1e3a8a 0%, #172554 100%)"};return i.jsxs(Nn,{isOpen:t,onClose:r,title:"Book Details",children:[i.jsxs("div",{className:"book-detail-wrapper",children:[i.jsxs("div",{className:"detail-upper-layout",children:[i.jsxs("div",{className:"detail-cover-container",children:[j?i.jsx("img",{src:j,alt:s,className:"detail-cover-img",onError:z=>{z.target.style.display="none"}}):null,i.jsxs("div",{className:"detail-cover-fallback",style:{background:E(h)},children:[i.jsx("div",{className:"spine-effect"}),i.jsx(kd,{size:48,className:"detail-fallback-icon"}),i.jsx("h4",{className:"detail-fallback-title",children:s}),i.jsx("span",{className:"detail-fallback-author",children:c})]})]}),i.jsxs("div",{className:"detail-meta-box",children:[i.jsx("span",{className:"badge badge-available mb-2",style:{alignSelf:"flex-start"},children:h}),i.jsx("h2",{className:"detail-title",children:s}),i.jsxs("p",{className:"detail-author",children:["by ",c]}),i.jsxs("div",{className:"detail-spec-grid",children:[i.jsxs("div",{className:"spec-item",children:[i.jsx(jd,{size:15}),i.jsxs("span",{children:["Published: ",b||"N/A"]})]}),i.jsxs("div",{className:"spec-item",children:[i.jsx(bd,{size:15}),i.jsxs("span",{children:["ISBN: ",m]})]})]}),i.jsx("div",{className:"detail-rating-summary",children:f>0?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"stars-row",children:[1,2,3,4,5].map(z=>i.jsx(za,{size:18,fill:z<=Math.round(f)?"#f59e0b":"none",stroke:z<=Math.round(f)?"#f59e0b":"var(--text-muted)"},z))}),i.jsxs("span",{className:"rating-text",children:[i.jsx("strong",{children:f.toFixed(1)})," out of 5 (",de," review",de>1?"s":"",")"]})]}):i.jsx("span",{className:"rating-text text-muted",children:"No reviews yet"})}),i.jsxs("div",{className:"detail-stock-box",children:[i.jsxs("div",{className:"stock-label-row",children:[i.jsx("span",{children:"Available Inventory"}),i.jsxs("span",{className:"stock-ratio-bold",children:[y," / ",g," Left"]})]}),i.jsx("div",{className:"stock-bar-track",children:i.jsx("div",{className:`stock-bar-fill ${Re<30?"stock-low":Re<60?"stock-medium":"stock-high"}`,style:{width:`${Re}%`}})})]}),(a==null?void 0:a.role)!=="librarian"&&i.jsx("div",{className:"detail-borrow-action mt-2",children:A?i.jsxs("div",{className:"badge badge-borrowed w-full justify-center py-2 text-sm",style:{padding:"0.6rem"},children:["Borrowed (Due: ",new Date(me.dueDate).toLocaleDateString(),")"]}):i.jsx("button",{onClick:()=>n(u),disabled:!ae,className:`btn w-full ${ae?"btn-primary":"btn-disabled"}`,children:ae?"Borrow Book Copy":"Out of Stock"})})]})]}),i.jsxs("div",{className:"detail-description-section",children:[i.jsx("h3",{children:"Synopsis"}),i.jsx("p",{children:C||"No description available for this book in the records."})]}),i.jsxs("div",{className:"detail-reviews-section",children:[i.jsx("h3",{children:"Community Reviews"}),i.jsx("div",{className:"reviews-list",children:de>0?e.reviews.map((z,B)=>i.jsxs("div",{className:"review-item-card glass-panel",children:[i.jsxs("div",{className:"review-header",children:[i.jsx("span",{className:"reviewer-name",children:z.userName}),i.jsx("div",{className:"stars-row-small",children:[1,2,3,4,5].map(Q=>i.jsx(za,{size:12,fill:Q<=z.rating?"#f59e0b":"none",stroke:Q<=z.rating?"#f59e0b":"var(--text-muted)"},Q))})]}),i.jsx("p",{className:"review-content",children:z.comment}),i.jsx("span",{className:"review-date",children:new Date(z.createdAt).toLocaleDateString()})]},z._id||B)):i.jsx("div",{className:"empty-reviews-state",children:i.jsx("p",{children:"There are no reviews for this book yet."})})}),a&&a.role!=="librarian"&&i.jsxs("form",{onSubmit:U,className:"add-review-form glass-panel",children:[i.jsx("h4",{children:"Write a Review"}),O&&i.jsxs("div",{className:`form-msg-banner ${O.includes("successfully")?"msg-success":"msg-error"}`,children:[O.includes("successfully")&&i.jsx(sl,{size:15}),i.jsx("span",{children:O})]}),i.jsxs("div",{className:"review-stars-selector",children:[i.jsx("span",{className:"input-label",style:{margin:0},children:"Rating:"}),i.jsx("div",{className:"interactive-stars",children:[1,2,3,4,5].map(z=>i.jsx("button",{type:"button",className:"star-btn",onClick:()=>p(z),onMouseEnter:()=>N(z),onMouseLeave:()=>N(0),children:i.jsx(za,{size:20,fill:z<=(x||d)?"#f59e0b":"none",stroke:z<=(x||d)?"#f59e0b":"var(--text-muted)"})},z))})]}),i.jsx("div",{className:"input-group",style:{marginBottom:"1rem"},children:i.jsx("textarea",{placeholder:"Share your thoughts about the book...",value:L,onChange:z=>T(z.target.value),className:"input-field",rows:"3",required:!0,style:{resize:"none"}})}),i.jsxs("button",{type:"submit",disabled:_||!L.trim(),className:"btn btn-secondary btn-sm",style:{alignSelf:"flex-end"},children:[i.jsx(bh,{size:14}),i.jsx("span",{children:"Submit Review"})]})]})]})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .book-detail-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-top: 0.5rem;
        }

        .detail-upper-layout {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 1.75rem;
        }

        @media (max-width: 500px) {
          .detail-upper-layout {
            grid-template-columns: 1fr;
          }
          .detail-cover-container {
            width: 140px;
            height: 200px;
            margin: 0 auto;
          }
        }

        .detail-cover-container {
          position: relative;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .detail-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          z-index: 1;
        }

        .detail-cover-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          color: white;
          text-align: center;
          position: relative;
          z-index: 0;
        }

        .detail-fallback-icon {
          opacity: 0.5;
          margin-bottom: 0.5rem;
        }

        .detail-fallback-title {
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .detail-fallback-author {
          font-size: 0.7rem;
          opacity: 0.8;
        }

        .detail-meta-box {
          display: flex;
          flex-direction: column;
        }

        .detail-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          line-height: 1.25;
          margin-bottom: 0.25rem;
        }

        .detail-author {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .detail-spec-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .detail-rating-summary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.2rem;
        }

        .stars-row {
          display: flex;
          gap: 0.15rem;
        }

        .rating-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .detail-stock-box {
          margin-bottom: 1rem;
        }

        .stock-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .stock-ratio-bold {
          font-weight: 700;
          color: var(--text-secondary);
        }

        /* Synopsis Section */
        .detail-description-section h3, .detail-reviews-section h3 {
          font-size: 1.1rem;
          font-family: var(--font-display);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }

        .detail-description-section p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Reviews lists */
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        /* Reviews Scrollbar */
        .reviews-list::-webkit-scrollbar {
          width: 4px;
        }
        .reviews-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .review-item-card {
          padding: 1rem !important;
          border-radius: 10px !important;
          background: rgba(255, 255, 255, 0.02) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reviewer-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stars-row-small {
          display: flex;
          gap: 1px;
        }

        .review-content {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .review-date {
          font-size: 0.7rem;
          color: var(--text-muted);
          align-self: flex-end;
        }

        .empty-reviews-state {
          text-align: center;
          padding: 1.5rem;
          color: var(--text-muted);
          font-size: 0.88rem;
          border: 1px dashed rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        /* Add Review Form */
        .add-review-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.25rem !important;
          border-radius: 12px !important;
          border-color: var(--border-light) !important;
        }

        .add-review-form h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
        }

        .review-stars-selector {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .interactive-stars {
          display: flex;
          gap: 0.25rem;
        }

        .star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform var(--transition-fast);
        }

        .star-btn:hover {
          transform: scale(1.15);
        }

        .form-msg-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.82rem;
          margin-bottom: 0.25rem;
        }

        .msg-success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #a7f3d0;
        }

        .msg-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
        }
      `}})]})},Ph=()=>{const{user:e,token:t,isAuthenticated:r}=tr(),[n,l]=v.useState([]),[a,o]=v.useState([]),[u,s]=v.useState(!0),[c,h]=v.useState(""),[m,g]=v.useState([]),[y,j]=v.useState([]),[b,C]=v.useState(""),[f,d]=v.useState("All"),[p,x]=v.useState(""),[N,L]=v.useState("featured"),[T,_]=v.useState(!1),[$,O]=v.useState(null),[R,A]=v.useState(!1),[me,ae]=v.useState(!1),[Re,de]=v.useState(null),[U,E]=v.useState({title:"",author:"",genre:"",isbn:"",copiesTotal:1,publishYear:new Date().getFullYear(),coverImage:""}),[I,z]=v.useState(""),[B,Q]=v.useState(!1),P=["All","Fantasy","Sci-Fi","Dystopian","Fiction","Biography","Thriller","Self-Help","History","Romance"],F=async()=>{try{const G=await(await fetch("/api/books/featured")).json();G.success&&g(G.data.featuredBooks||[])}catch(k){console.error("Error loading featured books:",k)}},D=async()=>{s(!0);try{const k=new URLSearchParams;b&&k.append("search",b),f&&f!=="All"&&k.append("genre",f),p&&k.append("availability",p);const ie=await(await fetch(`/api/books?${k.toString()}`)).json();ie.success?l(ie.data):h(ie.message||"Failed to fetch catalog.")}catch(k){console.error(k),h("Network error loading catalog.")}finally{s(!1)}},J=async()=>{if(!(!r||!t))try{const G=await(await fetch("/api/transactions/my",{headers:{Authorization:`Bearer ${t}`}})).json();if(G.success){const ie=G.data.filter(Dr=>Dr.status==="borrowed"||Dr.status==="overdue");o(ie)}}catch(k){console.error("Error fetching borrowings:",k)}};v.useEffect(()=>{D()},[b,f,p]),v.useEffect(()=>{F()},[]),v.useEffect(()=>{try{const k=JSON.parse(localStorage.getItem("libraryCipherFavorites")||"[]");j(k)}catch(k){console.error("Error loading favorites:",k)}},[]),v.useEffect(()=>{localStorage.setItem("libraryCipherFavorites",JSON.stringify(y))},[y]),v.useEffect(()=>{J()},[r,t]);const Me=k=>{j(G=>G.includes(k)?G.filter(ie=>ie!==k):[...G,k])},w=()=>{C(""),d("All"),x(""),L("featured")},V=async k=>{if(!r){alert("Please sign in or create an account to borrow books.");return}try{const ie=await(await fetch("/api/transactions/borrow",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({bookId:k})})).json();ie.success?(D(),J()):alert(ie.message||"Failed to borrow book.")}catch(G){console.error(G),alert("Error connecting to server.")}},ue=async k=>{k.preventDefault(),z(""),Q(!0);try{const ie=await(await fetch("/api/books",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(U)})).json();ie.success?(A(!1),E({title:"",author:"",genre:"",isbn:"",copiesTotal:1,publishYear:new Date().getFullYear(),coverImage:""}),D()):z(ie.message||"Failed to add book.")}catch(G){console.error(G),z("Network error adding book.")}finally{Q(!1)}},et=k=>{de(k),E({title:k.title,author:k.author,genre:k.genre,isbn:k.isbn,copiesTotal:k.copiesTotal,publishYear:k.publishYear||new Date().getFullYear(),coverImage:k.coverImage||""}),z(""),ae(!0)},Mr=async k=>{k.preventDefault(),z(""),Q(!0);try{const ie=await(await fetch(`/api/books/${Re._id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(U)})).json();ie.success?(ae(!1),de(null),D()):z(ie.message||"Failed to update book.")}catch(G){console.error(G),z("Network error updating book.")}finally{Q(!1)}},Ln=async k=>{if(window.confirm("Are you sure you want to delete this book?"))try{const ie=await(await fetch(`/api/books/${k}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).json();ie.success?D():alert(ie.message||"Failed to delete book.")}catch(G){console.error(G),alert("Error deleting book.")}},So=async(k,G,ie)=>{try{const ea=await(await fetch(`/api/books/${k}/reviews`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({rating:G,comment:ie})})).json();return ea.success?(D(),O(ea.data),{success:!0}):{success:!1,message:ea.message}}catch(Dr){return console.error(Dr),{success:!1,message:"Server connection error."}}},Pn=[...n].sort((k,G)=>N==="rating"?(G.ratingAverage||0)-(k.ratingAverage||0):N==="availability"?(G.copiesAvailable||0)-(k.copiesAvailable||0):N==="newest"?new Date(G.createdAt||0)-new Date(k.createdAt||0):y.includes(G._id)?1:0-(y.includes(k._id)?1:0)),Co=n.filter(k=>y.includes(k._id));return i.jsxs("div",{className:"catalog-container",children:[i.jsxs("div",{className:"catalog-header-row",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"catalog-title gradient-title",children:"Discover Literature"}),i.jsx("p",{className:"catalog-subtitle",children:"Search, filter, and borrow from our curated physical and digital library."})]}),(e==null?void 0:e.role)==="librarian"&&i.jsxs("button",{onClick:()=>{A(!0),z("")},className:"btn btn-primary",children:[i.jsx(Dl,{size:18}),i.jsx("span",{children:"Add New Book"})]})]}),i.jsxs("div",{className:"catalog-highlights-grid",children:[i.jsxs("div",{className:"highlight-card glass-panel",children:[i.jsxs("div",{className:"highlight-header",children:[i.jsx(Cd,{size:18,className:"text-cyan"}),i.jsx("h3",{children:"Featured shelves"})]}),i.jsx("div",{className:"highlight-list",children:m.length>0?m.map(k=>i.jsxs("div",{className:"highlight-item",children:[i.jsxs("div",{children:[i.jsx("p",{className:"highlight-title",children:k.title}),i.jsx("p",{className:"highlight-meta",children:k.author})]}),i.jsx("span",{className:"highlight-badge",children:k.genre})]},k._id)):i.jsx("p",{className:"highlight-empty",children:"Featured books are being prepared."})})]}),i.jsxs("div",{className:"highlight-card glass-panel",children:[i.jsxs("div",{className:"highlight-header",children:[i.jsx(Nd,{size:18,className:"text-pink"}),i.jsx("h3",{children:"Saved for later"})]}),i.jsx("div",{className:"highlight-list",children:Co.length>0?Co.map(k=>i.jsxs("div",{className:"highlight-item",children:[i.jsxs("div",{children:[i.jsx("p",{className:"highlight-title",children:k.title}),i.jsx("p",{className:"highlight-meta",children:k.author})]}),i.jsx("button",{className:"mini-action-btn",onClick:()=>V(k._id),children:i.jsx(wd,{size:14})})]},k._id)):i.jsx("p",{className:"highlight-empty",children:"Tap the heart on any card to build your reading list."})})]})]}),i.jsxs("div",{className:"filters-panel glass-panel",children:[i.jsxs("div",{className:"search-box-container",children:[i.jsx(ul,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Search books by title, author, or ISBN...",value:b,onChange:k=>C(k.target.value),className:"catalog-search-input"})]}),i.jsxs("div",{className:"dropdowns-group",children:[i.jsxs("div",{className:"filter-dropdown-wrapper",children:[i.jsx(Nh,{size:14,className:"dropdown-icon"}),i.jsxs("select",{value:N,onChange:k=>L(k.target.value),className:"filter-select",children:[i.jsx("option",{value:"featured",children:"Recommended first"}),i.jsx("option",{value:"rating",children:"Highest rated"}),i.jsx("option",{value:"availability",children:"Most copies available"}),i.jsx("option",{value:"newest",children:"Newest arrivals"})]})]}),i.jsxs("div",{className:"filter-dropdown-wrapper",children:[i.jsx(vh,{size:14,className:"dropdown-icon"}),i.jsx("select",{value:f,onChange:k=>d(k.target.value),className:"filter-select",children:P.map(k=>i.jsx("option",{value:k,children:k==="All"?"All Genres":k},k))})]}),i.jsxs("div",{className:"filter-dropdown-wrapper",children:[i.jsx(qt,{size:14,className:"dropdown-icon"}),i.jsxs("select",{value:p,onChange:k=>x(k.target.value),className:"filter-select",children:[i.jsx("option",{value:"",children:"All Statuses"}),i.jsx("option",{value:"available",children:"Available in Stock"})]})]}),i.jsx("button",{className:"btn btn-secondary",onClick:w,children:"Reset"})]})]}),i.jsx("div",{className:"genre-chip-row",children:P.filter(k=>k!=="All").map(k=>i.jsx("button",{className:`genre-chip ${f===k?"genre-chip-active":""}`,onClick:()=>d(k),children:k},k))}),c&&i.jsxs("div",{className:"catalog-error-state glass-panel",children:[i.jsx(gh,{size:32,className:"error-icon"}),i.jsx("p",{children:c}),i.jsx("button",{onClick:D,className:"btn btn-secondary mt-2",children:"Try Again"})]}),u?i.jsxs("div",{className:"loader-wrapper",children:[i.jsx("div",{className:"loader"}),i.jsx("p",{style:{color:"var(--text-secondary)"},children:"Flipping pages..."})]}):n.length>0?i.jsx("div",{className:"catalog-grid",children:Pn.map(k=>i.jsx(Lh,{book:k,userRole:e==null?void 0:e.role,onBorrow:V,onEdit:et,onDelete:Ln,activeBorrows:a,isFavorite:y.includes(k._id),onToggleFavorite:Me,onViewDetails:G=>{O(G),_(!0)}},k._id))}):i.jsxs("div",{className:"empty-catalog-state glass-panel",children:[i.jsx(qt,{size:48,className:"empty-icon"}),i.jsx("h3",{children:"No books match your criteria"}),i.jsx("p",{children:"Try refining your search, checking another genre, or registering a new item."})]}),i.jsx(Nn,{isOpen:R,onClose:()=>A(!1),title:"Register New Book",children:i.jsxs("form",{onSubmit:ue,className:"modal-form",children:[I&&i.jsx("div",{className:"modal-error-banner",children:I}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Book Title"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"e.g. The Odyssey",value:U.title,onChange:k=>E({...U,title:k.target.value}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Author Name"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"e.g. Homer",value:U.author,onChange:k=>E({...U,author:k.target.value}),required:!0})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Genre"}),i.jsxs("select",{className:"input-field",value:U.genre,onChange:k=>E({...U,genre:k.target.value}),required:!0,style:{background:"var(--bg-input)"},children:[i.jsx("option",{value:"",children:"Select Genre"}),P.filter(k=>k!=="All").map(k=>i.jsx("option",{value:k,children:k},k))]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"ISBN Code"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"e.g. 9780140449112",value:U.isbn,onChange:k=>E({...U,isbn:k.target.value}),required:!0})]})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Total Copies"}),i.jsx("input",{type:"number",min:"1",className:"input-field",value:U.copiesTotal,onChange:k=>E({...U,copiesTotal:Number(k.target.value)}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Publish Year"}),i.jsx("input",{type:"number",min:"0",className:"input-field",value:U.publishYear,onChange:k=>E({...U,publishYear:Number(k.target.value)})})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Cover Image URL (Optional)"}),i.jsx("input",{type:"url",className:"input-field",placeholder:"https://images.unsplash.com/...",value:U.coverImage,onChange:k=>E({...U,coverImage:k.target.value})})]}),i.jsx("button",{type:"submit",disabled:B,className:"btn btn-primary w-full py-3 mt-2",children:B?i.jsx("div",{className:"small-loader"}):"Confirm Registration"})]})}),i.jsx(Nn,{isOpen:me,onClose:()=>{ae(!1),de(null)},title:"Modify Book Records",children:i.jsxs("form",{onSubmit:Mr,className:"modal-form",children:[I&&i.jsx("div",{className:"modal-error-banner",children:I}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Book Title"}),i.jsx("input",{type:"text",className:"input-field",value:U.title,onChange:k=>E({...U,title:k.target.value}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Author Name"}),i.jsx("input",{type:"text",className:"input-field",value:U.author,onChange:k=>E({...U,author:k.target.value}),required:!0})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Genre"}),i.jsx("select",{className:"input-field",value:U.genre,onChange:k=>E({...U,genre:k.target.value}),required:!0,style:{background:"var(--bg-input)"},children:P.filter(k=>k!=="All").map(k=>i.jsx("option",{value:k,children:k},k))})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"ISBN Code"}),i.jsx("input",{type:"text",className:"input-field",value:U.isbn,onChange:k=>E({...U,isbn:k.target.value}),required:!0})]})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Total Copies"}),i.jsx("input",{type:"number",min:"0",className:"input-field",value:U.copiesTotal,onChange:k=>E({...U,copiesTotal:Number(k.target.value)}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Publish Year"}),i.jsx("input",{type:"number",min:"0",className:"input-field",value:U.publishYear,onChange:k=>E({...U,publishYear:Number(k.target.value)})})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Cover Image URL"}),i.jsx("input",{type:"url",className:"input-field",value:U.coverImage,onChange:k=>E({...U,coverImage:k.target.value})})]}),i.jsx("button",{type:"submit",disabled:B,className:"btn btn-primary w-full py-3 mt-2",children:B?i.jsx("div",{className:"small-loader"}):"Save Modifications"})]})}),i.jsx(Ld,{book:$,isOpen:T,onClose:()=>{_(!1),O(null)},onBorrow:V,activeBorrows:a,user:e,onSubmitReview:So}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .catalog-container {
          width: 100%;
        }

        .catalog-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .catalog-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .catalog-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .catalog-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .catalog-highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 860px) {
          .catalog-highlights-grid {
            grid-template-columns: 1fr;
          }
        }

        .highlight-card {
          padding: 1.2rem !important;
          border-radius: 16px !important;
        }

        .highlight-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.9rem;
        }

        .highlight-header h3 {
          font-size: 1rem;
          color: var(--text-primary);
        }

        .highlight-list {
          display: grid;
          gap: 0.75rem;
        }

        .highlight-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.8rem;
          padding: 0.7rem 0.8rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .highlight-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .highlight-meta {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .highlight-badge {
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          background: rgba(99, 102, 241, 0.14);
          color: #c7d2fe;
          border: 1px solid rgba(99, 102, 241, 0.2);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mini-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          cursor: pointer;
        }

        .highlight-empty {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-pink { color: var(--accent-pink); }

        .genre-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-bottom: 1.5rem;
        }

        .genre-chip {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: var(--text-secondary);
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          font-size: 0.82rem;
          cursor: pointer;
        }

        .genre-chip-active {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
        }

        /* Filters Styling */
        .filters-panel {
          padding: 1.25rem !important;
          border-radius: 14px !important;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 2rem;
          border-color: var(--border-light) !important;
        }

        @media (max-width: 800px) {
          .filters-panel {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .search-box-container {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .catalog-search-input {
          width: 100%;
          background: rgba(8, 10, 24, 0.4);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 0.8rem 1rem 0.8rem 2.8rem;
          border-radius: 10px;
          outline: none;
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .catalog-search-input:focus {
          border-color: var(--accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
          background: rgba(8, 10, 24, 0.8);
        }

        .dropdowns-group {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .dropdowns-group {
            flex-direction: column;
            width: 100%;
          }
        }

        .filter-dropdown-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dropdown-icon {
          position: absolute;
          left: 0.85rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .filter-select {
          background: rgba(8, 10, 24, 0.4);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          padding: 0.8rem 2rem 0.8rem 2.2rem;
          border-radius: 10px;
          outline: none;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          appearance: none;
          -webkit-appearance: none;
        }

        .filter-select:focus, .filter-select:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        /* Grid */
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* States */
        .catalog-error-state, .empty-catalog-state {
          text-align: center;
          padding: 4rem 2rem !important;
          border-radius: 20px !important;
          max-width: 600px;
          margin: 3rem auto;
        }

        .error-icon {
          color: var(--accent-red);
          margin-bottom: 1rem;
        }

        .empty-icon {
          color: var(--text-muted);
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-catalog-state h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .empty-catalog-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Modal Forms layout helpers */
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .grid-2-col {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .modal-error-banner {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.2rem;
          text-align: center;
        }
      `}})]})},Th=()=>{const{token:e,user:t}=tr(),[r,n]=v.useState(null),[l,a]=v.useState(null),[o,u]=v.useState([]),[s,c]=v.useState([]),[h,m]=v.useState([]),[g,y]=v.useState(!0),[j,b]=v.useState(!1),[C,f]=v.useState((t==null?void 0:t.monthlyGoal)||3),[d,p]=v.useState(!1),[x,N]=v.useState(!1),[L,T]=v.useState(null),_=async()=>{try{const F=await(await fetch("/api/dashboard/member",{headers:{Authorization:`Bearer ${e}`}})).json();F.success&&(n(F.data.stats),a(F.data.upcomingDue),u(F.data.genrePreferences));const J=await(await fetch("/api/transactions/my",{headers:{Authorization:`Bearer ${e}`}})).json();J.success&&c(J.data);const w=await(await fetch("/api/books")).json();w.success&&m(w.data),t!=null&&t.monthlyGoal&&f(t.monthlyGoal)}catch(P){console.error(P)}finally{y(!1)}};v.useEffect(()=>{_()},[e,t]);const $=async P=>{if(d)return;const F=C+P;if(!(F<1)){p(!0),f(F);try{const J=await(await fetch("/api/auth/goal",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({goal:F})})).json();J.success||(f(C),alert(J.message||"Failed to update goal."))}catch(D){console.error(D),f(C)}finally{p(!1)}}},O=async P=>{if(!j&&window.confirm("Are you returning this book?")){b(!0);try{const D=await(await fetch(`/api/transactions/return/${P}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}})).json();D.success?_():alert(D.message||"Failed to return book.")}catch(F){console.error(F),alert("Error returning book.")}finally{b(!1)}}},R=async P=>{b(!0);try{const D=await(await fetch("/api/transactions/borrow",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({bookId:P})})).json();D.success?_():alert(D.message||"Failed to borrow book.")}catch(F){console.error(F),alert("Error connecting to server.")}finally{b(!1)}},A=async(P,F,D)=>{try{const Me=await(await fetch(`/api/books/${P}/reviews`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({rating:F,comment:D})})).json();return Me.success?(_(),T(Me.data),{success:!0}):{success:!1,message:Me.message}}catch(J){return console.error(J),{success:!1,message:"Server connection error."}}},me=new Date().getMonth(),ae=new Date().getFullYear(),Re=s.filter(P=>{if(P.status!=="returned"||!P.returnDate)return!1;const F=new Date(P.returnDate);return F.getMonth()===me&&F.getFullYear()===ae}).length,de=Math.min(Re/C*100,100),U=o.length>0?o[0].name:"Fiction",E=s.filter(P=>P.status==="borrowed"||P.status==="overdue").map(P=>{var F;return(F=P.book)==null?void 0:F._id}),I=h.filter(P=>P.genre===U&&!E.includes(P._id)&&P.copiesAvailable>0).slice(0,3),z=s.filter(P=>P.status==="borrowed"||P.status==="overdue"),B=s.filter(P=>P.status==="returned"),Q=P=>{T(P),N(!0)};return g?i.jsxs("div",{className:"loader-wrapper",children:[i.jsx("div",{className:"loader"}),i.jsx("p",{style:{color:"var(--text-secondary)"},children:"Gathering reading stats..."})]}):i.jsxs("div",{className:"dashboard-container",children:[i.jsxs("div",{className:"dashboard-header",children:[i.jsx("h1",{className:"dashboard-title gradient-title",children:"Member Dashboard"}),i.jsx("p",{className:"dashboard-subtitle",children:"Track your loans, view reading achievements, and coordinate returns."})]}),i.jsxs("div",{className:"widgets-row",children:[i.jsxs("div",{className:"widget-card glass-panel w-glow-blue",children:[i.jsx(qt,{className:"widget-icon text-cyan",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(r==null?void 0:r.activeLoans)||0}),i.jsx("div",{className:"widget-label",children:"Active Borrows"})]})]}),i.jsxs("div",{className:`widget-card glass-panel ${(r==null?void 0:r.overdueLoans)>0?"w-glow-red":"w-glow-green"}`,children:[i.jsx(zd,{className:(r==null?void 0:r.overdueLoans)>0?"widget-icon text-red":"widget-icon text-emerald",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(r==null?void 0:r.overdueLoans)||0}),i.jsx("div",{className:"widget-label",children:"Overdue Items"})]})]}),i.jsxs("div",{className:"widget-card glass-panel w-glow-emerald",children:[i.jsx(jh,{className:"widget-icon text-emerald",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(r==null?void 0:r.returnedLoans)||0}),i.jsx("div",{className:"widget-label",children:"Completed Returns"})]})]}),i.jsxs("div",{className:"widget-card glass-panel w-glow-purple",children:[i.jsx(Ws,{className:"widget-icon text-purple",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(r==null?void 0:r.totalBorrowed)||0}),i.jsx("div",{className:"widget-label",children:"Total Read"})]})]})]}),i.jsxs("div",{className:"goals-preferences-layout",children:[i.jsxs("div",{className:"goals-widget-card glass-panel goals-glow",children:[i.jsxs("div",{className:"goals-header",children:[i.jsx("h3",{children:"Monthly Reading Target"}),i.jsx("span",{className:"month-badge",children:new Date().toLocaleString("default",{month:"long"})})]}),i.jsxs("div",{className:"goals-body",children:[i.jsxs("div",{className:"goal-dial-container",children:[i.jsxs("svg",{width:"150",height:"150",viewBox:"0 0 150 150",className:"dial-svg",children:[i.jsx("circle",{cx:"75",cy:"75",r:"60",stroke:"rgba(255, 255, 255, 0.03)",strokeWidth:"10",fill:"transparent"}),i.jsx("circle",{cx:"75",cy:"75",r:"60",stroke:"url(#goalGradient)",strokeWidth:"10",fill:"transparent",strokeDasharray:2*Math.PI*60,strokeDashoffset:2*Math.PI*60*(1-de/100),strokeLinecap:"round",transform:"rotate(-90 75 75)",className:"dial-fill-animation"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"goalGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[i.jsx("stop",{offset:"0%",stopColor:"var(--accent-indigo)"}),i.jsx("stop",{offset:"100%",stopColor:"var(--accent-pink)"})]})})]}),i.jsxs("div",{className:"dial-inner-text",children:[i.jsxs("span",{className:"dial-count",children:[Re," / ",C]}),i.jsx("span",{className:"dial-label",children:"Books Read"})]})]}),i.jsxs("div",{className:"goal-controls-wrapper",children:[i.jsx("span",{className:"controls-label",children:"Adjust Monthly Target:"}),i.jsxs("div",{className:"controls-btns",children:[i.jsx("button",{onClick:()=>$(-1),disabled:C<=1||d,className:"goal-adj-btn",children:i.jsx(kh,{size:14})}),i.jsx("span",{className:"current-goal-val",children:C}),i.jsx("button",{onClick:()=>$(1),disabled:d,className:"goal-adj-btn",children:i.jsx(Dl,{size:14})})]})]})]})]}),i.jsxs("div",{className:"genre-pref-card glass-panel",children:[i.jsx("h3",{className:"pref-title",children:"Your Genre Preferences"}),o.length>0?i.jsx("div",{className:"pref-list",children:o.slice(0,3).map((P,F)=>i.jsxs("div",{className:"pref-item",children:[i.jsxs("div",{className:"pref-rank-box",children:["#",F+1]}),i.jsxs("div",{className:"pref-text-info",children:[i.jsx("span",{className:"pref-name",children:P.name}),i.jsxs("span",{className:"pref-count",children:[P.count," book",P.count>1?"s":""," read"]})]}),i.jsx("div",{className:"pref-meter-track",children:i.jsx("div",{className:"pref-meter-fill",style:{width:`${P.count/r.totalBorrowed*100}%`}})})]},P.name))}):i.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginTop:"1rem"},children:"Borrow books to reveal your analytical category insights here."})]})]}),i.jsxs("div",{className:"dashboard-insights-grid",children:[l?i.jsxs("div",{className:`insight-card glass-panel ${l.daysLeft<=0?"insight-overdue":l.daysLeft<=3?"insight-warning":"insight-safe"}`,children:[i.jsx(Qs,{className:"insight-icon",size:32}),i.jsxs("div",{className:"insight-details",children:[i.jsx("span",{className:"insight-badge-label",children:l.daysLeft<=0?"OVERDUE NOTICE":"UPCOMING DUE DATE"}),i.jsx("h3",{className:"insight-title",children:l.bookTitle}),i.jsx("p",{className:"insight-desc",children:l.daysLeft<=0?`This book was due on ${new Date(l.dueDate).toLocaleDateString()}. Please return it as soon as possible to avoid library lockouts.`:l.daysLeft===1?`Due tomorrow (${new Date(l.dueDate).toLocaleDateString()}). Make plans to drop it off or register a self-return.`:`Due in ${l.daysLeft} days (on ${new Date(l.dueDate).toLocaleDateString()}).`})]})]}):i.jsxs("div",{className:"insight-card glass-panel insight-empty",children:[i.jsx(Ws,{className:"insight-icon text-muted",size:32}),i.jsxs("div",{className:"insight-details",children:[i.jsx("span",{className:"insight-badge-label text-muted",children:"Reading Status"}),i.jsx("h3",{className:"insight-title",style:{color:"var(--text-secondary)"},children:"All caught up!"}),i.jsx("p",{className:"insight-desc",children:"No active due dates. Explore the catalog and choose your next adventure."})]})]}),i.jsxs("div",{className:"recommendations-card glass-panel rec-glow",children:[i.jsxs("div",{className:"rec-header",children:[i.jsx(Sh,{size:18,className:"text-cyan"}),i.jsx("h3",{children:"Suggested for You"})]}),i.jsx("div",{className:"rec-list",children:I.length>0?I.map(P=>i.jsxs("div",{className:"rec-item",onClick:()=>Q(P),children:[i.jsx("div",{className:"rec-img-box",children:P.coverImage?i.jsx("img",{src:P.coverImage,alt:P.title,className:"rec-img"}):i.jsx("div",{className:"rec-img-fallback",children:i.jsx(Book,{size:14})})}),i.jsxs("div",{className:"rec-info",children:[i.jsx("span",{className:"rec-title",title:P.title,children:P.title}),i.jsxs("span",{className:"rec-author",children:["by ",P.author]})]}),i.jsx("button",{onClick:F=>{F.stopPropagation(),R(P._id)},disabled:j,className:"btn btn-secondary btn-icon rec-btn",title:"Quick borrow",children:i.jsx(Dl,{size:14})})]},P._id)):i.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:"We will display personalized suggestions here once catalog data matches your preferences."})})]})]}),i.jsxs("div",{className:"dashboard-tables-section",children:[i.jsxs("div",{className:"table-block",children:[i.jsx("h2",{className:"table-block-title",children:"Currently Borrowed"}),z.length>0?i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"custom-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Book Details"}),i.jsx("th",{children:"Borrow Date"}),i.jsx("th",{children:"Due Date"}),i.jsx("th",{children:"Status"}),i.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),i.jsx("tbody",{children:z.map(P=>{var F,D;return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"book-table-detail",onClick:()=>Q(P.book),style:{cursor:"pointer"},children:[i.jsx("span",{className:"b-title",children:(F=P.book)==null?void 0:F.title}),i.jsxs("span",{className:"b-author",children:["by ",(D=P.book)==null?void 0:D.author]})]})}),i.jsx("td",{children:new Date(P.borrowDate).toLocaleDateString()}),i.jsx("td",{children:new Date(P.dueDate).toLocaleDateString()}),i.jsx("td",{children:i.jsx("span",{className:`badge ${P.status==="overdue"?"badge-overdue":"badge-borrowed"}`,children:P.status})}),i.jsx("td",{style:{textAlign:"right"},children:i.jsx("button",{disabled:j,onClick:()=>O(P._id),className:"btn btn-secondary btn-sm",children:"Return Book"})})]},P._id)})})]})}):i.jsxs("div",{className:"empty-table-state glass-panel",children:[i.jsx(Qs,{size:36,className:"text-muted mb-2"}),i.jsx("p",{children:"You do not have any books checked out right now."})]})]}),i.jsxs("div",{className:"table-block",style:{marginTop:"3rem"},children:[i.jsx("h2",{className:"table-block-title",children:"Borrowing History"}),B.length>0?i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"custom-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Book Details"}),i.jsx("th",{children:"Borrow Date"}),i.jsx("th",{children:"Return Date"}),i.jsx("th",{children:"Status"})]})}),i.jsx("tbody",{children:B.slice(0,10).map(P=>{var F,D;return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"book-table-detail",onClick:()=>Q(P.book),style:{cursor:"pointer"},children:[i.jsx("span",{className:"b-title",children:(F=P.book)==null?void 0:F.title}),i.jsxs("span",{className:"b-author",children:["by ",(D=P.book)==null?void 0:D.author]})]})}),i.jsx("td",{children:new Date(P.borrowDate).toLocaleDateString()}),i.jsx("td",{children:P.returnDate?new Date(P.returnDate).toLocaleDateString():"N/A"}),i.jsx("td",{children:i.jsx("span",{className:"badge badge-returned",children:"Returned"})})]},P._id)})})]})}):i.jsx("div",{className:"empty-table-state glass-panel",children:i.jsx("p",{style:{color:"var(--text-muted)"},children:"Your returned books logs will appear here once you complete a loan."})})]})]}),i.jsx(Ld,{book:L,isOpen:x,onClose:()=>{N(!1),T(null)},onBorrow:R,activeBorrows:z,user:t,onSubmitReview:A}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .dashboard-container {
          width: 100%;
        }

        .dashboard-header {
          margin-bottom: 2.5rem;
        }

        .dashboard-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Widgets Layout */
        .widgets-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 1024px) {
          .widgets-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .widgets-row {
            grid-template-columns: 1fr;
          }
        }

        .widget-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem !important;
          border-radius: 16px !important;
          border-color: var(--border-light) !important;
        }

        .widget-icon {
          padding: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid var(--border-light);
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-emerald { color: var(--accent-emerald); }
        .text-purple { color: var(--accent-purple); }
        .text-red { color: var(--accent-red); }

        .widget-value {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .widget-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        /* Glowing accents on widgets */
        .w-glow-blue:hover { box-shadow: 0 0 25px rgba(6, 182, 212, 0.25) !important; border-color: rgba(6, 182, 212, 0.3) !important; }
        .w-glow-green:hover { box-shadow: 0 0 25px rgba(16, 185, 129, 0.25) !important; border-color: rgba(16, 185, 129, 0.3) !important; }
        .w-glow-red:hover { box-shadow: 0 0 25px rgba(239, 68, 68, 0.25) !important; border-color: rgba(239, 68, 68, 0.3) !important; }
        .w-glow-emerald:hover { box-shadow: 0 0 25px rgba(16, 185, 129, 0.25) !important; border-color: rgba(16, 185, 129, 0.3) !important; }
        .w-glow-purple:hover { box-shadow: 0 0 25px rgba(168, 85, 247, 0.25) !important; border-color: rgba(168, 85, 247, 0.3) !important; }

        /* Goals & Preferences grid */
        .goals-preferences-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 900px) {
          .goals-preferences-layout {
            grid-template-columns: 1fr;
          }
        }

        .goals-widget-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .goals-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .goals-header h3 {
          font-size: 1.15rem;
          color: white;
        }

        .month-badge {
          background: rgba(168, 85, 247, 0.15);
          color: #d8b4fe;
          border: 1px solid rgba(168, 85, 247, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .goals-body {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 2rem;
          flex: 1;
        }

        @media (max-width: 450px) {
          .goals-body {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        .goal-dial-container {
          position: relative;
          width: 150px;
          height: 150px;
        }

        .dial-svg {
          width: 100%;
          height: 100%;
        }

        .dial-inner-text {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .dial-count {
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
          font-family: var(--font-display);
        }

        .dial-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .goal-controls-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .controls-label {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .controls-btns {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 0.3rem 0.5rem;
          border-radius: 10px;
          width: fit-content;
        }

        .goal-adj-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .goal-adj-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--border-hover);
        }

        .goal-adj-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .current-goal-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          min-width: 20px;
          text-align: center;
        }

        .goals-glow:hover {
          box-shadow: 0 0 25px rgba(236, 72, 153, 0.15) !important;
          border-color: rgba(236, 72, 153, 0.25) !important;
        }

        /* Insights grid */
        .dashboard-insights-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .dashboard-insights-grid {
            grid-template-columns: 1fr;
          }
        }

        .insight-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem !important;
          border-radius: 20px !important;
          border: 1px solid transparent !important;
        }

        .insight-icon {
          flex-shrink: 0;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .insight-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .insight-badge-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .insight-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
        }

        .insight-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Insight status colors */
        .insight-overdue {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(13, 17, 39, 0.45) 100%) !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
          box-shadow: 0 8px 30px rgba(239, 68, 68, 0.1) !important;
        }
        .insight-overdue .insight-icon { color: var(--accent-red); background: rgba(239, 68, 68, 0.1); }
        .insight-overdue .insight-badge-label { color: #fca5a5; }

        .insight-warning {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(13, 17, 39, 0.45) 100%) !important;
          border-color: rgba(245, 158, 11, 0.3) !important;
        }
        .insight-warning .insight-icon { color: var(--accent-amber); background: rgba(245, 158, 11, 0.1); }
        .insight-warning .insight-badge-label { color: #fde68a; }

        .insight-safe {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(13, 17, 39, 0.45) 100%) !important;
          border-color: var(--border-light) !important;
        }
        .insight-safe .insight-icon { color: var(--accent-indigo); background: rgba(99, 102, 241, 0.1); }
        .insight-safe .insight-badge-label { color: #c7d2fe; }

        .insight-empty {
          border-color: var(--border-light) !important;
        }

        /* Recommendations widget card */
        .recommendations-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .rec-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .rec-header h3 {
          font-size: 1.15rem;
          color: white;
        }

        .rec-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .rec-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .rec-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border-light);
          transform: translateX(4px);
        }

        .rec-img-box {
          width: 36px;
          height: 52px;
          border-radius: 4px;
          overflow: hidden;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .rec-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rec-img-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
        }

        .rec-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .rec-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .rec-author {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .rec-btn {
          padding: 0.4rem;
          border-radius: 6px;
        }

        .rec-glow:hover {
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.12) !important;
          border-color: rgba(6, 182, 212, 0.25) !important;
        }

        /* Favorite Genres Card */
        .genre-pref-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
        }

        .pref-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .pref-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .pref-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1rem;
          row-gap: 0.5rem;
        }

        .pref-rank-box {
          background: var(--gradient-primary);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-family: var(--font-display);
          font-size: 0.85rem;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .pref-text-info {
          display: flex;
          flex-direction: column;
        }

        .pref-name {
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .pref-count {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .pref-meter-track {
          grid-column: 1 / span 3;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          overflow: hidden;
        }

        .pref-meter-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        /* Tables segment */
        .table-block-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: var(--font-display);
        }

        .book-table-detail {
          display: flex;
          flex-direction: column;
        }

        .book-table-detail .b-title {
          font-weight: 700;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .book-table-detail:hover .b-title {
          color: var(--accent-indigo);
        }

        .book-table-detail .b-author {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .empty-table-state {
          padding: 3rem 1.5rem !important;
          text-align: center;
          color: var(--text-secondary);
          border-radius: 12px !important;
          border-style: dashed !important;
          border-color: var(--border-light) !important;
        }

        .mb-2 {
          margin-bottom: 0.5rem;
        }
      `}})]})},Rh=()=>{const{token:e}=tr(),[t,r]=v.useState("loans"),[n,l]=v.useState(null),[a,o]=v.useState([]),[u,s]=v.useState([]),[c,h]=v.useState([]),[m,g]=v.useState(!0),[y,j]=v.useState(!1),[b,C]=v.useState(""),[f,d]=v.useState(""),[p,x]=v.useState(""),[N,L]=v.useState(!1),[T,_]=v.useState(!1),[$,O]=v.useState(null),[R,A]=v.useState({title:"",author:"",genre:"",isbn:"",copiesTotal:1,publishYear:new Date().getFullYear(),coverImage:""}),[me,ae]=v.useState(""),Re=["Fantasy","Sci-Fi","Dystopian","Fiction","Biography","Thriller","Self-Help","History","Romance"],de=async()=>{try{const V=await(await fetch("/api/dashboard/librarian",{headers:{Authorization:`Bearer ${e}`}})).json();V.success&&l(V.data);const et=await(await fetch("/api/transactions/all",{headers:{Authorization:`Bearer ${e}`}})).json();et.success&&o(et.data);const Ln=await(await fetch("/api/books")).json();Ln.success&&s(Ln.data);const Pn=await(await fetch("/api/dashboard/users",{headers:{Authorization:`Bearer ${e}`}})).json();Pn.success&&h(Pn.data)}catch(w){console.error("Error fetching admin dashboard data:",w)}finally{g(!1)}};v.useEffect(()=>{de()},[e]);const U=async w=>{if(!y&&window.confirm("Approve return of physical copy? This resets stock levels.")){j(!0);try{const ue=await(await fetch(`/api/transactions/return/${w}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}})).json();ue.success?de():alert(ue.message||"Failed to approve return.")}catch(V){console.error(V),alert("Error connecting to server.")}finally{j(!1)}}},E=async w=>{w.preventDefault(),ae(""),j(!0);try{const ue=await(await fetch("/api/books",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(R)})).json();ue.success?(L(!1),A({title:"",author:"",genre:"",isbn:"",copiesTotal:1,publishYear:new Date().getFullYear(),coverImage:""}),de()):ae(ue.message||"Failed to register book.")}catch(V){console.error(V),ae("Server connection error.")}finally{j(!1)}},I=w=>{O(w),A({title:w.title,author:w.author,genre:w.genre,isbn:w.isbn,copiesTotal:w.copiesTotal,publishYear:w.publishYear||new Date().getFullYear(),coverImage:w.coverImage||""}),ae(""),_(!0)},z=async w=>{w.preventDefault(),ae(""),j(!0);try{const ue=await(await fetch(`/api/books/${$._id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(R)})).json();ue.success?(_(!1),O(null),de()):ae(ue.message||"Failed to edit book records.")}catch(V){console.error(V),ae("Server connection error.")}finally{j(!1)}},B=async w=>{if(window.confirm("Are you absolutely sure you want to delete this book from database?"))try{const ue=await(await fetch(`/api/books/${w}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}})).json();ue.success?de():alert(ue.message||"Failed to delete book.")}catch(V){console.error(V),alert("Error deleting book.")}},Q=a.filter(w=>{var ue,et;const V=b.toLowerCase();return(((ue=w.user)==null?void 0:ue.name)||"").toLowerCase().includes(V)||(((et=w.book)==null?void 0:et.title)||"").toLowerCase().includes(V)||(w.status||"").toLowerCase().includes(V)}),P=u.filter(w=>{const V=f.toLowerCase();return w.title.toLowerCase().includes(V)||w.author.toLowerCase().includes(V)||w.isbn.toLowerCase().includes(V)||w.genre.toLowerCase().includes(V)}),F=c.filter(w=>{const V=p.toLowerCase();return w.name.toLowerCase().includes(V)||w.email.toLowerCase().includes(V)});if(m)return i.jsxs("div",{className:"loader-wrapper",children:[i.jsx("div",{className:"loader"}),i.jsx("p",{style:{color:"var(--text-secondary)"},children:"Compiling database analytics..."})]});const{stats:D,genreStats:J}=n||{},Me=(J==null?void 0:J.length)>0?Math.max(...J.map(w=>w.value)):10;return i.jsxs("div",{className:"admin-container",children:[i.jsxs("div",{className:"admin-header-row",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"admin-title gradient-title",children:"Librarian Headquarters"}),i.jsx("p",{className:"admin-subtitle",children:"Monitor loans, control catalog stock, and review member accounts."})]}),i.jsxs("button",{onClick:()=>{L(!0),ae("")},className:"btn btn-primary",children:[i.jsx(Dl,{size:18}),i.jsx("span",{children:"Add New Book"})]})]}),i.jsxs("div",{className:"widgets-row",children:[i.jsxs("div",{className:"widget-card glass-panel w-glow-purple",children:[i.jsx(qt,{className:"widget-icon text-purple",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(D==null?void 0:D.totalBooks)||0}),i.jsx("div",{className:"widget-label",children:"Unique Titles"})]})]}),i.jsxs("div",{className:"widget-card glass-panel w-glow-blue",children:[i.jsx(_d,{className:"widget-icon text-cyan",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(D==null?void 0:D.totalMembers)||0}),i.jsx("div",{className:"widget-label",children:"Members"})]})]}),i.jsxs("div",{className:"widget-card glass-panel w-glow-emerald",children:[i.jsx(fh,{className:"widget-icon text-emerald",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(D==null?void 0:D.activeLoans)||0}),i.jsx("div",{className:"widget-label",children:"Active Loans"})]})]}),i.jsxs("div",{className:`widget-card glass-panel ${(D==null?void 0:D.overdueLoans)>0?"w-glow-red":"w-glow-green"}`,children:[i.jsx(zd,{className:(D==null?void 0:D.overdueLoans)>0?"widget-icon text-red":"widget-icon text-emerald",size:24}),i.jsxs("div",{children:[i.jsx("div",{className:"widget-value",children:(D==null?void 0:D.overdueLoans)||0}),i.jsx("div",{className:"widget-label",children:"Overdue Alerts"})]})]})]}),i.jsxs("div",{className:"analytics-layout",children:[i.jsxs("div",{className:"chart-card glass-panel",children:[i.jsxs("div",{className:"chart-header",children:[i.jsx(ph,{size:18,className:"text-purple"}),i.jsx("h3",{children:"Book Copies by Genre"})]}),i.jsx("div",{className:"chart-body",children:J&&J.length>0?i.jsx("div",{className:"genre-chart-list",children:J.map(w=>{const V=w.value/Me*100;return i.jsxs("div",{className:"chart-row-item",children:[i.jsx("span",{className:"row-label",children:w.name}),i.jsxs("div",{className:"bar-wrapper",children:[i.jsx("div",{className:"bar-track",children:i.jsx("div",{className:"bar-fill",style:{width:`${V}%`}})}),i.jsxs("span",{className:"row-value",children:[w.value," copy",w.value>1?"s":""]})]})]},w.name)})}):i.jsx("p",{style:{color:"var(--text-muted)"},children:"No genre statistics registered."})})]}),i.jsxs("div",{className:"chart-card glass-panel",children:[i.jsxs("div",{className:"chart-header",children:[i.jsx(qt,{size:18,className:"text-cyan"}),i.jsx("h3",{children:"Total Stock Allocation"})]}),i.jsxs("div",{className:"chart-body flex-center-col",children:[i.jsxs("div",{className:"stock-ratio-ring-container",children:[i.jsxs("svg",{width:"160",height:"160",viewBox:"0 0 160 160",className:"svg-ring",children:[i.jsx("circle",{cx:"80",cy:"80",r:"65",stroke:"rgba(255,255,255,0.03)",strokeWidth:"12",fill:"transparent"}),i.jsx("circle",{cx:"80",cy:"80",r:"65",stroke:"var(--accent-emerald)",strokeWidth:"12",fill:"transparent",strokeDasharray:2*Math.PI*65,strokeDashoffset:2*Math.PI*65*(1-((D==null?void 0:D.availableCopies)/(D==null?void 0:D.totalCopies)||1)),strokeLinecap:"round",transform:"rotate(-90 80 80)"})]}),i.jsxs("div",{className:"ring-inner-content",children:[i.jsxs("span",{className:"ring-percentage",children:[(D==null?void 0:D.totalCopies)>0?Math.round(D.availableCopies/D.totalCopies*100):100,"%"]}),i.jsx("span",{className:"ring-label",children:"Available"})]})]}),i.jsxs("div",{className:"chart-legends-grid",children:[i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot bg-emerald"}),i.jsxs("div",{className:"legend-info",children:[i.jsx("span",{className:"legend-name",children:"Available"}),i.jsx("span",{className:"legend-val",children:(D==null?void 0:D.availableCopies)||0})]})]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot bg-purple"}),i.jsxs("div",{className:"legend-info",children:[i.jsx("span",{className:"legend-name",children:"Borrowed / Out"}),i.jsx("span",{className:"legend-val",children:(D==null?void 0:D.borrowedCopies)||0})]})]})]})]})]})]}),i.jsxs("div",{className:"tab-control-strip",children:[i.jsx("button",{onClick:()=>r("loans"),className:`tab-btn ${t==="loans"?"tab-btn-active":""}`,children:"Active Loans & Returns"}),i.jsx("button",{onClick:()=>r("books"),className:`tab-btn ${t==="books"?"tab-btn-active":""}`,children:"Catalog Manager"}),i.jsx("button",{onClick:()=>r("members"),className:`tab-btn ${t==="members"?"tab-btn-active":""}`,children:"Library Members"})]}),i.jsxs("div",{className:"table-search-row",children:[t==="loans"&&i.jsxs("div",{className:"search-box-container",children:[i.jsx(ul,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Search loans by member, book title, status...",value:b,onChange:w=>C(w.target.value),className:"catalog-search-input"})]}),t==="books"&&i.jsxs("div",{className:"search-box-container",children:[i.jsx(ul,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Search books by title, author, genre, ISBN...",value:f,onChange:w=>d(w.target.value),className:"catalog-search-input"})]}),t==="members"&&i.jsxs("div",{className:"search-box-container",children:[i.jsx(ul,{size:18,className:"search-icon"}),i.jsx("input",{type:"text",placeholder:"Search members by name, email...",value:p,onChange:w=>x(w.target.value),className:"catalog-search-input"})]})]}),i.jsxs("div",{className:"admin-tables-container",children:[t==="loans"&&(Q.length>0?i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"custom-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Member"}),i.jsx("th",{children:"Book Checked Out"}),i.jsx("th",{children:"Issue Date"}),i.jsx("th",{children:"Due Date"}),i.jsx("th",{children:"Status"}),i.jsx("th",{style:{textAlign:"right"},children:"Action Approval"})]})}),i.jsx("tbody",{children:Q.map(w=>{var V,ue,et,Mr;return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"member-table-cell",children:[i.jsx("span",{className:"cell-main",children:(V=w.user)==null?void 0:V.name}),i.jsx("span",{className:"cell-sub",children:(ue=w.user)==null?void 0:ue.email})]})}),i.jsx("td",{children:i.jsxs("div",{className:"member-table-cell",children:[i.jsx("span",{className:"cell-main",children:(et=w.book)==null?void 0:et.title}),i.jsx("span",{className:"cell-sub",children:(Mr=w.book)==null?void 0:Mr.isbn})]})}),i.jsx("td",{children:new Date(w.borrowDate).toLocaleDateString()}),i.jsx("td",{children:new Date(w.dueDate).toLocaleDateString()}),i.jsx("td",{children:i.jsx("span",{className:`badge ${w.status==="overdue"?"badge-overdue":w.status==="returned"?"badge-returned":"badge-borrowed"}`,children:w.status})}),i.jsx("td",{style:{textAlign:"right"},children:w.status!=="returned"?i.jsxs("button",{disabled:y,onClick:()=>U(w._id),className:"btn btn-secondary btn-sm btn-approve",children:[i.jsx(hh,{size:14,className:"text-emerald"}),i.jsx("span",{children:"Confirm Return"})]}):i.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.82rem"},children:["Returned on ",w.returnDate?new Date(w.returnDate).toLocaleDateString():"N/A"]})})]},w._id)})})]})}):i.jsx("div",{className:"empty-table-state glass-panel",children:i.jsx("p",{children:"No active borrows or historic loans match this filter."})})),t==="books"&&(P.length>0?i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"custom-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Title & Author"}),i.jsx("th",{children:"Genre"}),i.jsx("th",{children:"ISBN Code"}),i.jsx("th",{children:"Availability Status"}),i.jsx("th",{style:{textAlign:"right"},children:"Modify Records"})]})}),i.jsx("tbody",{children:P.map(w=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"member-table-cell",children:[i.jsx("span",{className:"cell-main",children:w.title}),i.jsxs("span",{className:"cell-sub",children:["by ",w.author]})]})}),i.jsx("td",{children:w.genre}),i.jsx("td",{style:{fontFamily:"monospace"},children:w.isbn}),i.jsx("td",{children:i.jsxs("span",{className:`badge ${w.copiesAvailable>0?"badge-available":"badge-overdue"}`,children:[w.copiesAvailable," / ",w.copiesTotal," available"]})}),i.jsx("td",{style:{textAlign:"right"},children:i.jsxs("div",{className:"manager-actions-row",children:[i.jsx("button",{onClick:()=>I(w),className:"btn-icon",title:"Edit book records",children:i.jsx(Sd,{size:15})}),i.jsx("button",{onClick:()=>B(w._id),className:"btn-icon text-red",title:"Remove book",children:i.jsx(Ed,{size:15})})]})})]},w._id))})]})}):i.jsx("div",{className:"empty-table-state glass-panel",children:i.jsx("p",{children:"No catalog records matched your search query."})})),t==="members"&&(F.length>0?i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"custom-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Member Details"}),i.jsx("th",{children:"Account Registration"}),i.jsx("th",{children:"Active Borrows"}),i.jsx("th",{children:"Overdues"}),i.jsx("th",{children:"Completed Returns"})]})}),i.jsx("tbody",{children:F.map(w=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"member-table-cell",children:[i.jsx("span",{className:"cell-main",children:w.name}),i.jsx("span",{className:"cell-sub",children:w.email})]})}),i.jsx("td",{children:new Date(w.createdAt).toLocaleDateString()}),i.jsx("td",{children:i.jsxs("span",{className:`badge ${w.activeLoans>0?"badge-borrowed":"badge-returned"}`,children:[w.activeLoans," active"]})}),i.jsx("td",{children:i.jsxs("span",{className:`badge ${w.overdueLoans>0?"badge-overdue":"badge-returned"}`,children:[w.overdueLoans," overdue"]})}),i.jsxs("td",{children:[w.returnedLoans," returns"]})]},w._id))})]})}):i.jsx("div",{className:"empty-table-state glass-panel",children:i.jsx("p",{children:"No registered library members match this filter."})}))]}),i.jsx(Nn,{isOpen:N,onClose:()=>L(!1),title:"Register New Book",children:i.jsxs("form",{onSubmit:E,className:"modal-form",children:[me&&i.jsx("div",{className:"modal-error-banner",children:me}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Book Title"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"e.g. The Odyssey",value:R.title,onChange:w=>A({...R,title:w.target.value}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Author Name"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"e.g. Homer",value:R.author,onChange:w=>A({...R,author:w.target.value}),required:!0})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Genre"}),i.jsxs("select",{className:"input-field",value:R.genre,onChange:w=>A({...R,genre:w.target.value}),required:!0,style:{background:"var(--bg-input)"},children:[i.jsx("option",{value:"",children:"Select Genre"}),Re.map(w=>i.jsx("option",{value:w,children:w},w))]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"ISBN Code"}),i.jsx("input",{type:"text",className:"input-field",placeholder:"e.g. 9780140449112",value:R.isbn,onChange:w=>A({...R,isbn:w.target.value}),required:!0})]})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Total Copies"}),i.jsx("input",{type:"number",min:"1",className:"input-field",value:R.copiesTotal,onChange:w=>A({...R,copiesTotal:Number(w.target.value)}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Publish Year"}),i.jsx("input",{type:"number",min:"0",className:"input-field",value:R.publishYear,onChange:w=>A({...R,publishYear:Number(w.target.value)})})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Cover Image URL (Optional)"}),i.jsx("input",{type:"url",className:"input-field",placeholder:"https://images.unsplash.com/...",value:R.coverImage,onChange:w=>A({...R,coverImage:w.target.value})})]}),i.jsx("button",{type:"submit",disabled:y,className:"btn btn-primary w-full py-3 mt-2",children:y?i.jsx("div",{className:"small-loader"}):"Confirm Registration"})]})}),i.jsx(Nn,{isOpen:T,onClose:()=>{_(!1),O(null)},title:"Modify Book Records",children:i.jsxs("form",{onSubmit:z,className:"modal-form",children:[me&&i.jsx("div",{className:"modal-error-banner",children:me}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Book Title"}),i.jsx("input",{type:"text",className:"input-field",value:R.title,onChange:w=>A({...R,title:w.target.value}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Author Name"}),i.jsx("input",{type:"text",className:"input-field",value:R.author,onChange:w=>A({...R,author:w.target.value}),required:!0})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Genre"}),i.jsx("select",{className:"input-field",value:R.genre,onChange:w=>A({...R,genre:w.target.value}),required:!0,style:{background:"var(--bg-input)"},children:Re.map(w=>i.jsx("option",{value:w,children:w},w))})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"ISBN Code"}),i.jsx("input",{type:"text",className:"input-field",value:R.isbn,onChange:w=>A({...R,isbn:w.target.value}),required:!0})]})]}),i.jsxs("div",{className:"grid-2-col",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Total Copies"}),i.jsx("input",{type:"number",min:"0",className:"input-field",value:R.copiesTotal,onChange:w=>A({...R,copiesTotal:Number(w.target.value)}),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Publish Year"}),i.jsx("input",{type:"number",min:"0",className:"input-field",value:R.publishYear,onChange:w=>A({...R,publishYear:Number(w.target.value)})})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{className:"input-label",children:"Cover Image URL"}),i.jsx("input",{type:"url",className:"input-field",value:R.coverImage,onChange:w=>A({...R,coverImage:w.target.value})})]}),i.jsx("button",{type:"submit",disabled:y,className:"btn btn-primary w-full py-3 mt-2",children:y?i.jsx("div",{className:"small-loader"}):"Save Modifications"})]})}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .admin-container {
          width: 100%;
        }

        .admin-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .admin-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .admin-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .admin-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Analytics Layout Charts */
        .analytics-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .analytics-layout {
            grid-template-columns: 1fr;
          }
        }

        .chart-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .chart-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }

        .chart-header h3 {
          font-size: 1.15rem;
          color: white;
        }

        .chart-body {
          flex: 1;
        }

        .genre-chart-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .chart-row-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 1rem;
        }

        .row-label {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bar-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .bar-track {
          height: 10px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 5px;
          flex: 1;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
          transition: width var(--transition-slow);
        }

        .row-value {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
        }

        /* Ring Donut Chart */
        .flex-center-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .stock-ratio-ring-container {
          position: relative;
          width: 160px;
          height: 160px;
        }

        .svg-ring {
          width: 100%;
          height: 100%;
        }

        .ring-inner-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.1rem;
        }

        .ring-percentage {
          font-size: 1.8rem;
          font-weight: 800;
          font-family: var(--font-display);
          color: white;
        }

        .ring-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .chart-legends-grid {
          display: flex;
          gap: 2rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .bg-emerald { background: var(--accent-emerald); }
        .bg-purple { background: var(--accent-purple); }

        .legend-info {
          display: flex;
          flex-direction: column;
        }

        .legend-name {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .legend-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Tab controls */
        .tab-control-strip {
          display: flex;
          border-bottom: 1px solid var(--border-light);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          overflow-x: auto;
        }

        .tab-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.75rem 0.5rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-btn-active {
          color: var(--text-primary);
          border-color: var(--accent-indigo);
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
        }

        .table-search-row {
          margin-bottom: 1.5rem;
        }

        .member-table-cell {
          display: flex;
          flex-direction: column;
        }

        .cell-main {
          font-weight: 700;
          color: var(--text-primary);
        }

        .cell-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .btn-approve {
          background: rgba(16, 185, 129, 0.1);
          color: #a7f3d0;
          border: 1px solid rgba(16, 185, 129, 0.2);
          transition: all var(--transition-fast);
        }

        .btn-approve:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: var(--accent-emerald);
          color: white;
          transform: translateY(-1px);
        }

        .manager-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }
      `}})]})},Mh=({children:e})=>{const{isAuthenticated:t,loading:r}=tr();return r?i.jsxs("div",{className:"loader-wrapper",children:[i.jsx("div",{className:"loader"}),i.jsx("p",{style:{color:"var(--text-secondary)",fontFamily:"var(--font-display)"},children:"Securing connection..."})]}):t?e:i.jsx(yd,{to:"/",replace:!0})},Dh=()=>{const{user:e}=tr();return(e==null?void 0:e.role)==="librarian"?i.jsx(Rh,{}):i.jsx(Th,{})};function Oh(){return i.jsx(uh,{children:i.jsx(ah,{children:i.jsxs("div",{className:"app-container",children:[i.jsx(zh,{}),i.jsx("main",{className:"main-content",children:i.jsxs(qm,{children:[i.jsx(Gr,{path:"/",element:i.jsx(_h,{})}),i.jsx(Gr,{path:"/catalog",element:i.jsx(Ph,{})}),i.jsx(Gr,{path:"/dashboard",element:i.jsx(Mh,{children:i.jsx(Dh,{})})}),i.jsx(Gr,{path:"*",element:i.jsx(yd,{to:"/",replace:!0})})]})})]})})})}_a.createRoot(document.getElementById("root")).render(i.jsx(au.StrictMode,{children:i.jsx(Oh,{})}));
