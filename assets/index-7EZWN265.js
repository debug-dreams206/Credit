(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();var Hs={exports:{}},qr={},$s={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt=Symbol.for("react.element"),tc=Symbol.for("react.portal"),rc=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Do=Symbol.iterator;function fc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Ws={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Qs={};function rt(e,n,t){this.props=e,this.context=n,this.refs=Qs,this.updater=t||Ws}rt.prototype.isReactComponent={};rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=rt.prototype;function Ri(e,n,t){this.props=e,this.context=n,this.refs=Qs,this.updater=t||Ws}var Ai=Ri.prototype=new Ks;Ai.constructor=Ri;Vs(Ai,rt.prototype);Ai.isPureReactComponent=!0;var No=Array.isArray,Ys=Object.prototype.hasOwnProperty,Oi={current:null},Gs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Ys.call(n,r)&&!Gs.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Kt,type:e,key:i,ref:o,props:l,_owner:Oi.current}}function pc(e,n){return{$$typeof:Kt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kt}function mc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Bo=/\/+/g;function vl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?mc(""+e.key):n.toString(36)}function hr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kt:case tc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+vl(o,0):r,No(l)?(t="",e!=null&&(t=e.replace(Bo,"$&/")+"/"),hr(l,n,t,"",function(c){return c})):l!=null&&(ji(l)&&(l=pc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",No(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+vl(i,s);o+=hr(i,n,t,a,l)}else if(a=fc(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+vl(i,s++),o+=hr(i,n,t,a,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function er(e,n,t){if(e==null)return e;var r=[],l=0;return hr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function gc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},vr={transition:null},yc={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:vr,ReactCurrentOwner:Oi};function Zs(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:er,forEach:function(e,n,t){er(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return er(e,function(){n++}),n},toArray:function(e){return er(e,function(n){return n})||[]},only:function(e){if(!ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=rt;b.Fragment=rc;b.Profiler=ic;b.PureComponent=Ri;b.StrictMode=lc;b.Suspense=uc;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yc;b.act=Zs;b.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Oi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Ys.call(n,a)&&!Gs.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Kt,type:e.type,key:l,ref:i,props:r,_owner:o}};b.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oc,_context:e},e.Consumer=e};b.createElement=Xs;b.createFactory=function(e){var n=Xs.bind(null,e);return n.type=e,n};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:ac,render:e}};b.isValidElement=ji;b.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:gc}};b.memo=function(e,n){return{$$typeof:cc,type:e,compare:n===void 0?null:n}};b.startTransition=function(e){var n=vr.transition;vr.transition={};try{e()}finally{vr.transition=n}};b.unstable_act=Zs;b.useCallback=function(e,n){return oe.current.useCallback(e,n)};b.useContext=function(e){return oe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};b.useEffect=function(e,n){return oe.current.useEffect(e,n)};b.useId=function(){return oe.current.useId()};b.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};b.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};b.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};b.useMemo=function(e,n){return oe.current.useMemo(e,n)};b.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};b.useRef=function(e){return oe.current.useRef(e)};b.useState=function(e){return oe.current.useState(e)};b.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};b.useTransition=function(){return oe.current.useTransition()};b.version="18.3.1";$s.exports=b;var wt=$s.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=wt,vc=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),wc=Object.prototype.hasOwnProperty,Sc=hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kc={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)wc.call(n,r)&&!kc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:vc,type:e,key:i,ref:o,props:l,_owner:Sc.current}}qr.Fragment=xc;qr.jsx=Js;qr.jsxs=Js;Hs.exports=qr;var qs=Hs.exports,Wl={},ea={exports:{}},he={},na={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,P){var F=E.length;E.push(P);e:for(;0<F;){var $=F-1>>>1,Y=E[$];if(0<l(Y,P))E[$]=P,E[F]=Y,F=$;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],F=E.pop();if(F!==P){E[0]=F;e:for(var $=0,Y=E.length,Jt=Y>>>1;$<Jt;){var gn=2*($+1)-1,hl=E[gn],yn=gn+1,qt=E[yn];if(0>l(hl,F))yn<Y&&0>l(qt,hl)?(E[$]=qt,E[yn]=F,$=yn):(E[$]=hl,E[gn]=F,$=gn);else if(yn<Y&&0>l(qt,F))E[$]=qt,E[yn]=F,$=yn;else break e}}return P}function l(E,P){var F=E.sortIndex-P.sortIndex;return F!==0?F:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],g=1,m=null,p=3,v=!1,x=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var P=t(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=E)r(c),P.sortIndex=P.expirationTime,n(a,P);else break;P=t(c)}}function y(E){if(w=!1,f(E),!x)if(t(a)!==null)x=!0,gl(k);else{var P=t(c);P!==null&&yl(y,P.startTime-E)}}function k(E,P){x=!1,w&&(w=!1,d(I),I=-1),v=!0;var F=p;try{for(f(P),m=t(a);m!==null&&(!(m.expirationTime>P)||E&&!ze());){var $=m.callback;if(typeof $=="function"){m.callback=null,p=m.priorityLevel;var Y=$(m.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(a)&&r(a),f(P)}else r(a);m=t(a)}if(m!==null)var Jt=!0;else{var gn=t(c);gn!==null&&yl(y,gn.startTime-P),Jt=!1}return Jt}finally{m=null,p=F,v=!1}}var C=!1,z=null,I=-1,H=5,L=-1;function ze(){return!(e.unstable_now()-L<H)}function ot(){if(z!==null){var E=e.unstable_now();L=E;var P=!0;try{P=z(!0,E)}finally{P?st():(C=!1,z=null)}}else C=!1}var st;if(typeof u=="function")st=function(){u(ot)};else if(typeof MessageChannel<"u"){var _o=new MessageChannel,nc=_o.port2;_o.port1.onmessage=ot,st=function(){nc.postMessage(null)}}else st=function(){M(ot,0)};function gl(E){z=E,C||(C=!0,st())}function yl(E,P){I=M(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,gl(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var F=p;p=P;try{return E()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var F=p;p=E;try{return P()}finally{p=F}},e.unstable_scheduleCallback=function(E,P,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=F+Y,E={id:g++,callback:P,priorityLevel:E,startTime:F,expirationTime:Y,sortIndex:-1},F>$?(E.sortIndex=F,n(c,E),t(a)===null&&E===t(c)&&(w?(d(I),I=-1):w=!0,yl(y,F-$))):(E.sortIndex=Y,n(a,E),x||v||(x=!0,gl(k))),E},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(E){var P=p;return function(){var F=p;p=P;try{return E.apply(this,arguments)}finally{p=F}}}})(ta);na.exports=ta;var Ec=na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=wt,ye=Ec;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ra=new Set,Lt={};function bn(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(Lt[e]=n,e=0;e<n.length;e++)ra.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mo={},Ro={};function Ic(e){return Vl.call(Ro,e)?!0:Vl.call(Mo,e)?!1:zc.test(e)?Ro[e]=!0:(Mo[e]=!0,!1)}function Pc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,n,t,r){if(n===null||typeof n>"u"||Pc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];q[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){q[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){q[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){q[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){q[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ui=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ui,Hi);q[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ui,Hi);q[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ui,Hi);q[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){q[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});q.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){q[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function $i(e,n,t,r){var l=q.hasOwnProperty(n)?q[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fc(n,t,l,r)&&(t=null),r||l===null?Ic(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),ia=Symbol.for("react.context"),Vi=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),oa=Symbol.for("react.offscreen"),Ao=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,xl;function yt(e){if(xl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xl=n&&n[1]||""}return`
`+xl+e}var wl=!1;function Sl(e,n){if(!e||wl)return"";wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yt(e):""}function bc(e){switch(e.tag){case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return yt("Suspense");case 19:return yt("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case _n:return"Portal";case Ql:return"Profiler";case Wi:return"StrictMode";case Kl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case Vi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qi:return n=e.displayName||null,n!==null?n:Gl(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return Gl(e(n))}catch{}}return null}function Lc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(n);case 8:return n===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tc(e){var n=sa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tr(e){e._valueTracker||(e._valueTracker=Tc(e))}function aa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=sa(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,n){var t=n.checked;return j({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Oo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ua(e,n){n=n.checked,n!=null&&$i(e,"checked",n,!1)}function Zl(e,n){ua(e,n);var t=cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jl(e,n.type,cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function jo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jl(e,n,t){(n!=="number"||br(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ht=Array.isArray;function Wn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+cn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ql(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return j({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(ht(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:cn(t)}}function ca(e,n){var t=cn(n.value),r=cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ho(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?da(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rr,fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_c=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){_c.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),St[n]=St[e]})});function pa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||St.hasOwnProperty(e)&&St[e]?(""+n).trim():n+"px"}function ma(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=pa(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Dc=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,n){if(n){if(Dc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Vn=null,Qn=null;function $o(e){if(e=Xt(e)){if(typeof li!="function")throw Error(h(280));var n=e.stateNode;n&&(n=ll(n),li(e.stateNode,e.type,n))}}function ga(e){Vn?Qn?Qn.push(e):Qn=[e]:Vn=e}function ya(){if(Vn){var e=Vn,n=Qn;if(Qn=Vn=null,$o(e),n)for(e=0;e<n.length;e++)$o(n[e])}}function ha(e,n){return e(n)}function va(){}var kl=!1;function xa(e,n,t){if(kl)return e(n,t);kl=!0;try{return ha(e,n,t)}finally{kl=!1,(Vn!==null||Qn!==null)&&(va(),ya())}}function _t(e,n){var t=e.stateNode;if(t===null)return null;var r=ll(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var ii=!1;if($e)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ii=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{ii=!1}function Nc(e,n,t,r,l,i,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(g){this.onError(g)}}var kt=!1,Lr=null,Tr=!1,oi=null,Bc={onError:function(e){kt=!0,Lr=e}};function Mc(e,n,t,r,l,i,o,s,a){kt=!1,Lr=null,Nc.apply(Bc,arguments)}function Rc(e,n,t,r,l,i,o,s,a){if(Mc.apply(this,arguments),kt){if(kt){var c=Lr;kt=!1,Lr=null}else throw Error(h(198));Tr||(Tr=!0,oi=c)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function wa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wo(e){if(Ln(e)!==e)throw Error(h(188))}function Ac(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Wo(l),e;if(i===r)return Wo(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function Sa(e){return e=Ac(e),e!==null?ka(e):null}function ka(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ka(e);if(n!==null)return n;e=e.sibling}return null}var Ea=ye.unstable_scheduleCallback,Vo=ye.unstable_cancelCallback,Oc=ye.unstable_shouldYield,jc=ye.unstable_requestPaint,W=ye.unstable_now,Uc=ye.unstable_getCurrentPriorityLevel,Yi=ye.unstable_ImmediatePriority,Ca=ye.unstable_UserBlockingPriority,_r=ye.unstable_NormalPriority,Hc=ye.unstable_LowPriority,za=ye.unstable_IdlePriority,el=null,Me=null;function $c(e){if(Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Qc,Wc=Math.log,Vc=Math.LN2;function Qc(e){return e>>>=0,e===0?32:31-(Wc(e)/Vc|0)|0}var lr=64,ir=4194304;function vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=vt(s):(i&=o,i!==0&&(r=vt(i)))}else o=t&~l,o!==0?r=vt(o):i!==0&&(r=vt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),l=1<<t,r|=e[t],n&=~l;return r}function Kc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Le(i),s=1<<o,a=l[o];a===-1?(!(s&t)||s&r)&&(l[o]=Kc(s,n)):a<=n&&(e.expiredLanes|=s),i&=~s}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ia(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function El(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function Gc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Le(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Gi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var _=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fa,Xi,ba,La,Ta,ai=!1,or=[],nn=null,tn=null,rn=null,Dt=new Map,Nt=new Map,Ze=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Dt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(n.pointerId)}}function ct(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Xt(n),n!==null&&Xi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Zc(e,n,t,r,l){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,l),!0;case"dragenter":return tn=ct(tn,e,n,t,r,l),!0;case"mouseover":return rn=ct(rn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Dt.set(i,ct(Dt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Nt.set(i,ct(Nt.get(i)||null,e,n,t,r,l)),!0}return!1}function _a(e){var n=xn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=wa(t),n!==null){e.blockedOn=n,Ta(e.priority,function(){ba(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ui(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ri=r,t.target.dispatchEvent(r),ri=null}else return n=Xt(t),n!==null&&Xi(n),e.blockedOn=t,!1;n.shift()}return!0}function Ko(e,n,t){xr(e)&&t.delete(n)}function Jc(){ai=!1,nn!==null&&xr(nn)&&(nn=null),tn!==null&&xr(tn)&&(tn=null),rn!==null&&xr(rn)&&(rn=null),Dt.forEach(Ko),Nt.forEach(Ko)}function dt(e,n){e.blockedOn===n&&(e.blockedOn=null,ai||(ai=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Jc)))}function Bt(e){function n(l){return dt(l,e)}if(0<or.length){dt(or[0],e);for(var t=1;t<or.length;t++){var r=or[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&dt(nn,e),tn!==null&&dt(tn,e),rn!==null&&dt(rn,e),Dt.forEach(n),Nt.forEach(n),t=0;t<Ze.length;t++)r=Ze[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ze.length&&(t=Ze[0],t.blockedOn===null);)_a(t),t.blockedOn===null&&Ze.shift()}var Kn=Ke.ReactCurrentBatchConfig,Nr=!0;function qc(e,n,t,r){var l=_,i=Kn.transition;Kn.transition=null;try{_=1,Zi(e,n,t,r)}finally{_=l,Kn.transition=i}}function ed(e,n,t,r){var l=_,i=Kn.transition;Kn.transition=null;try{_=4,Zi(e,n,t,r)}finally{_=l,Kn.transition=i}}function Zi(e,n,t,r){if(Nr){var l=ui(e,n,t,r);if(l===null)Dl(e,n,r,Br,t),Qo(e,r);else if(Zc(l,e,n,t,r))r.stopPropagation();else if(Qo(e,r),n&4&&-1<Xc.indexOf(e)){for(;l!==null;){var i=Xt(l);if(i!==null&&Fa(i),i=ui(e,n,t,r),i===null&&Dl(e,n,r,Br,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,n,r,null,t)}}var Br=null;function ui(e,n,t,r){if(Br=null,e=Ki(r),e=xn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=wa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Br=e,null}function Da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case Yi:return 1;case Ca:return 4;case _r:case Hc:return 16;case za:return 536870912;default:return 16}default:return 16}}var qe=null,Ji=null,wr=null;function Na(){if(wr)return wr;var e,n=Ji,t=n.length,r,l="value"in qe?qe.value:qe.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return wr=l.slice(e,1<r?1-r:void 0)}function Sr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Yo(){return!1}function ve(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:Yo,this.isPropagationStopped=Yo,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=ve(lt),Gt=j({},lt,{view:0,detail:0}),nd=ve(Gt),Cl,zl,ft,nl=j({},Gt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ft&&(ft&&e.type==="mousemove"?(Cl=e.screenX-ft.screenX,zl=e.screenY-ft.screenY):zl=Cl=0,ft=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Go=ve(nl),td=j({},nl,{dataTransfer:0}),rd=ve(td),ld=j({},Gt,{relatedTarget:0}),Il=ve(ld),id=j({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),od=ve(id),sd=j({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ad=ve(sd),ud=j({},lt,{data:0}),Xo=ve(ud),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fd[e])?!!n[e]:!1}function eo(){return pd}var md=j({},Gt,{key:function(e){if(e.key){var n=cd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=ve(md),yd=j({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=ve(yd),hd=j({},Gt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),vd=ve(hd),xd=j({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),wd=ve(xd),Sd=j({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kd=ve(Sd),Ed=[9,13,27,32],no=$e&&"CompositionEvent"in window,Et=null;$e&&"documentMode"in document&&(Et=document.documentMode);var Cd=$e&&"TextEvent"in window&&!Et,Ba=$e&&(!no||Et&&8<Et&&11>=Et),Jo=" ",qo=!1;function Ma(e,n){switch(e){case"keyup":return Ed.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ra(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function zd(e,n){switch(e){case"compositionend":return Ra(n);case"keypress":return n.which!==32?null:(qo=!0,Jo);case"textInput":return e=n.data,e===Jo&&qo?null:e;default:return null}}function Id(e,n){if(Nn)return e==="compositionend"||!no&&Ma(e,n)?(e=Na(),wr=Ji=qe=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ba&&n.locale!=="ko"?null:n.data;default:return null}}var Pd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pd[e.type]:n==="textarea"}function Aa(e,n,t,r){ga(r),n=Mr(n,"onChange"),0<n.length&&(t=new qi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ct=null,Mt=null;function Fd(e){Ga(e,0)}function tl(e){var n=Rn(e);if(aa(n))return e}function bd(e,n){if(e==="change")return n}var Oa=!1;if($e){var Pl;if($e){var Fl="oninput"in document;if(!Fl){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),Fl=typeof ns.oninput=="function"}Pl=Fl}else Pl=!1;Oa=Pl&&(!document.documentMode||9<document.documentMode)}function ts(){Ct&&(Ct.detachEvent("onpropertychange",ja),Mt=Ct=null)}function ja(e){if(e.propertyName==="value"&&tl(Mt)){var n=[];Aa(n,Mt,e,Ki(e)),xa(Fd,n)}}function Ld(e,n,t){e==="focusin"?(ts(),Ct=n,Mt=t,Ct.attachEvent("onpropertychange",ja)):e==="focusout"&&ts()}function Td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Mt)}function _d(e,n){if(e==="click")return tl(n)}function Dd(e,n){if(e==="input"||e==="change")return tl(n)}function Nd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _e=typeof Object.is=="function"?Object.is:Nd;function Rt(e,n){if(_e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Vl.call(n,l)||!_e(e[l],n[l]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ls(e,n){var t=rs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rs(t)}}function Ua(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ua(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ha(){for(var e=window,n=br();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=br(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bd(e){var n=Ha(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ua(t.ownerDocument.documentElement,t)){if(r!==null&&to(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ls(t,i);var o=ls(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Md=$e&&"documentMode"in document&&11>=document.documentMode,Bn=null,ci=null,zt=null,di=!1;function is(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;di||Bn==null||Bn!==br(r)||(r=Bn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zt&&Rt(zt,r)||(zt=r,r=Mr(ci,"onSelect"),0<r.length&&(n=new qi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Bn)))}function ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Mn={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},bl={},$a={};$e&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function rl(e){if(bl[e])return bl[e];if(!Mn[e])return e;var n=Mn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $a)return bl[e]=n[t];return e}var Wa=rl("animationend"),Va=rl("animationiteration"),Qa=rl("animationstart"),Ka=rl("transitionend"),Ya=new Map,os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,n){Ya.set(e,n),bn(n,[e])}for(var Ll=0;Ll<os.length;Ll++){var Tl=os[Ll],Rd=Tl.toLowerCase(),Ad=Tl[0].toUpperCase()+Tl.slice(1);fn(Rd,"on"+Ad)}fn(Wa,"onAnimationEnd");fn(Va,"onAnimationIteration");fn(Qa,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Ka,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Od=new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));function ss(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Rc(r,n,void 0,e),e.currentTarget=null}function Ga(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;ss(l,s,c),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;ss(l,s,c),i=a}}}if(Tr)throw e=oi,Tr=!1,oi=null,e}function N(e,n){var t=n[yi];t===void 0&&(t=n[yi]=new Set);var r=e+"__bubble";t.has(r)||(Xa(n,e,2,!1),t.add(r))}function _l(e,n,t){var r=0;n&&(r|=4),Xa(t,e,r,n)}var ur="_reactListening"+Math.random().toString(36).slice(2);function At(e){if(!e[ur]){e[ur]=!0,ra.forEach(function(t){t!=="selectionchange"&&(Od.has(t)||_l(t,!1,e),_l(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ur]||(n[ur]=!0,_l("selectionchange",!1,n))}}function Xa(e,n,t,r){switch(Da(n)){case 1:var l=qc;break;case 4:l=ed;break;default:l=Zi}t=l.bind(null,n,t,e),l=void 0,!ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Dl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=xn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}xa(function(){var c=i,g=Ki(t),m=[];e:{var p=Ya.get(e);if(p!==void 0){var v=qi,x=e;switch(e){case"keypress":if(Sr(t)===0)break e;case"keydown":case"keyup":v=gd;break;case"focusin":x="focus",v=Il;break;case"focusout":x="blur",v=Il;break;case"beforeblur":case"afterblur":v=Il;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vd;break;case Wa:case Va:case Qa:v=od;break;case Ka:v=wd;break;case"scroll":v=nd;break;case"wheel":v=kd;break;case"copy":case"cut":case"paste":v=ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zo}var w=(n&4)!==0,M=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var u=c,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=_t(u,d),y!=null&&w.push(Ot(u,y,f)))),M)break;u=u.return}0<w.length&&(p=new v(p,x,null,t,g),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==ri&&(x=t.relatedTarget||t.fromElement)&&(xn(x)||x[We]))break e;if((v||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=c,x=x?xn(x):null,x!==null&&(M=Ln(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=Go,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=Zo,y="onPointerLeave",d="onPointerEnter",u="pointer"),M=v==null?p:Rn(v),f=x==null?p:Rn(x),p=new w(y,u+"leave",v,t,g),p.target=M,p.relatedTarget=f,y=null,xn(g)===c&&(w=new w(d,u+"enter",x,t,g),w.target=f,w.relatedTarget=M,y=w),M=y,v&&x)n:{for(w=v,d=x,u=0,f=w;f;f=Tn(f))u++;for(f=0,y=d;y;y=Tn(y))f++;for(;0<u-f;)w=Tn(w),u--;for(;0<f-u;)d=Tn(d),f--;for(;u--;){if(w===d||d!==null&&w===d.alternate)break n;w=Tn(w),d=Tn(d)}w=null}else w=null;v!==null&&as(m,p,v,w,!1),x!==null&&M!==null&&as(m,M,x,w,!0)}}e:{if(p=c?Rn(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=bd;else if(es(p))if(Oa)k=Dd;else{k=Td;var C=Ld}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=_d);if(k&&(k=k(e,c))){Aa(m,k,t,g);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Jl(p,"number",p.value)}switch(C=c?Rn(c):window,e){case"focusin":(es(C)||C.contentEditable==="true")&&(Bn=C,ci=c,zt=null);break;case"focusout":zt=ci=Bn=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,is(m,t,g);break;case"selectionchange":if(Md)break;case"keydown":case"keyup":is(m,t,g)}var z;if(no)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Nn?Ma(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Ba&&t.locale!=="ko"&&(Nn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Nn&&(z=Na()):(qe=g,Ji="value"in qe?qe.value:qe.textContent,Nn=!0)),C=Mr(c,I),0<C.length&&(I=new Xo(I,e,null,t,g),m.push({event:I,listeners:C}),z?I.data=z:(z=Ra(t),z!==null&&(I.data=z)))),(z=Cd?zd(e,t):Id(e,t))&&(c=Mr(c,"onBeforeInput"),0<c.length&&(g=new Xo("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:c}),g.data=z))}Ga(m,n)})}function Ot(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=_t(e,t),i!=null&&r.unshift(Ot(e,i,l)),i=_t(e,n),i!=null&&r.push(Ot(e,i,l))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function as(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=_t(t,i),a!=null&&o.unshift(Ot(t,a,s))):l||(a=_t(t,i),a!=null&&o.push(Ot(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var jd=/\r\n?/g,Ud=/\u0000|\uFFFD/g;function us(e){return(typeof e=="string"?e:""+e).replace(jd,`
`).replace(Ud,"")}function cr(e,n,t){if(n=us(n),us(e)!==n&&t)throw Error(h(425))}function Rr(){}var fi=null,pi=null;function mi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,cs=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof cs<"u"?function(e){return cs.resolve(null).then(e).catch(Wd)}:gi;function Wd(e){setTimeout(function(){throw e})}function Nl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Bt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Bt(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ds(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),Be="__reactFiber$"+it,jt="__reactProps$"+it,We="__reactContainer$"+it,yi="__reactEvents$"+it,Vd="__reactListeners$"+it,Qd="__reactHandles$"+it;function xn(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[We]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ds(e);e!==null;){if(t=e[Be])return t;e=ds(e)}return n}e=t,t=e.parentNode}return null}function Xt(e){return e=e[Be]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ll(e){return e[jt]||null}var hi=[],An=-1;function pn(e){return{current:e}}function B(e){0>An||(e.current=hi[An],hi[An]=null,An--)}function D(e,n){An++,hi[An]=e.current,e.current=n}var dn={},re=pn(dn),ce=pn(!1),Cn=dn;function Zn(e,n){var t=e.type.contextTypes;if(!t)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Ar(){B(ce),B(re)}function fs(e,n,t){if(re.current!==dn)throw Error(h(168));D(re,n),D(ce,t)}function Za(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,Lc(e)||"Unknown",l));return j({},t,r)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Cn=re.current,D(re,e),D(ce,ce.current),!0}function ps(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=Za(e,n,Cn),r.__reactInternalMemoizedMergedChildContext=e,B(ce),B(re),D(re,e)):B(ce),D(ce,t)}var Oe=null,il=!1,Bl=!1;function Ja(e){Oe===null?Oe=[e]:Oe.push(e)}function Kd(e){il=!0,Ja(e)}function mn(){if(!Bl&&Oe!==null){Bl=!0;var e=0,n=_;try{var t=Oe;for(_=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Oe=null,il=!1}catch(l){throw Oe!==null&&(Oe=Oe.slice(e+1)),Ea(Yi,mn),l}finally{_=n,Bl=!1}}return null}var On=[],jn=0,jr=null,Ur=0,xe=[],we=0,zn=null,je=1,Ue="";function hn(e,n){On[jn++]=Ur,On[jn++]=jr,jr=e,Ur=n}function qa(e,n,t){xe[we++]=je,xe[we++]=Ue,xe[we++]=zn,zn=e;var r=je;e=Ue;var l=32-Le(r)-1;r&=~(1<<l),t+=1;var i=32-Le(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,je=1<<32-Le(n)+l|t<<l|r,Ue=i+e}else je=1<<i|t<<l|r,Ue=e}function ro(e){e.return!==null&&(hn(e,1),qa(e,1,0))}function lo(e){for(;e===jr;)jr=On[--jn],On[jn]=null,Ur=On[--jn],On[jn]=null;for(;e===zn;)zn=xe[--we],xe[we]=null,Ue=xe[--we],xe[we]=null,je=xe[--we],xe[we]=null}var ge=null,me=null,R=!1,be=null;function eu(e,n){var t=Se(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ms(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=zn!==null?{id:je,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Se(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xi(e){if(R){var n=me;if(n){var t=n;if(!ms(e,n)){if(vi(e))throw Error(h(418));n=ln(t.nextSibling);var r=ge;n&&ms(e,n)?eu(r,t):(e.flags=e.flags&-4097|2,R=!1,ge=e)}}else{if(vi(e))throw Error(h(418));e.flags=e.flags&-4097|2,R=!1,ge=e}}}function gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function dr(e){if(e!==ge)return!1;if(!R)return gs(e),R=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!mi(e.type,e.memoizedProps)),n&&(n=me)){if(vi(e))throw nu(),Error(h(418));for(;n;)eu(e,n),n=ln(n.nextSibling)}if(gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?ln(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=ln(e.nextSibling)}function Jn(){me=ge=null,R=!1}function io(e){be===null?be=[e]:be.push(e)}var Yd=Ke.ReactCurrentBatchConfig;function pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function fr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ys(e){var n=e._init;return n(e._payload)}function tu(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=un(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,y){return u===null||u.tag!==6?(u=Hl(f,d.mode,y),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,y){var k=f.type;return k===Dn?g(d,u,f.props.children,y,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ge&&ys(k)===u.type)?(y=l(u,f.props),y.ref=pt(d,u,f),y.return=d,y):(y=Fr(f.type,f.key,f.props,null,d.mode,y),y.ref=pt(d,u,f),y.return=d,y)}function c(d,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=$l(f,d.mode,y),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function g(d,u,f,y,k){return u===null||u.tag!==7?(u=En(f,d.mode,y,k),u.return=d,u):(u=l(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Hl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nr:return f=Fr(u.type,u.key,u.props,null,d.mode,f),f.ref=pt(d,null,u),f.return=d,f;case _n:return u=$l(u,d.mode,f),u.return=d,u;case Ge:var y=u._init;return m(d,y(u._payload),f)}if(ht(u)||at(u))return u=En(u,d.mode,f,null),u.return=d,u;fr(d,u)}return null}function p(d,u,f,y){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:s(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===k?a(d,u,f,y):null;case _n:return f.key===k?c(d,u,f,y):null;case Ge:return k=f._init,p(d,u,k(f._payload),y)}if(ht(f)||at(f))return k!==null?null:g(d,u,f,y,null);fr(d,f)}return null}function v(d,u,f,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,s(u,d,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nr:return d=d.get(y.key===null?f:y.key)||null,a(u,d,y,k);case _n:return d=d.get(y.key===null?f:y.key)||null,c(u,d,y,k);case Ge:var C=y._init;return v(d,u,f,C(y._payload),k)}if(ht(y)||at(y))return d=d.get(f)||null,g(u,d,y,k,null);fr(u,y)}return null}function x(d,u,f,y){for(var k=null,C=null,z=u,I=u=0,H=null;z!==null&&I<f.length;I++){z.index>I?(H=z,z=null):H=z.sibling;var L=p(d,z,f[I],y);if(L===null){z===null&&(z=H);break}e&&z&&L.alternate===null&&n(d,z),u=i(L,u,I),C===null?k=L:C.sibling=L,C=L,z=H}if(I===f.length)return t(d,z),R&&hn(d,I),k;if(z===null){for(;I<f.length;I++)z=m(d,f[I],y),z!==null&&(u=i(z,u,I),C===null?k=z:C.sibling=z,C=z);return R&&hn(d,I),k}for(z=r(d,z);I<f.length;I++)H=v(z,d,I,f[I],y),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?I:H.key),u=i(H,u,I),C===null?k=H:C.sibling=H,C=H);return e&&z.forEach(function(ze){return n(d,ze)}),R&&hn(d,I),k}function w(d,u,f,y){var k=at(f);if(typeof k!="function")throw Error(h(150));if(f=k.call(f),f==null)throw Error(h(151));for(var C=k=null,z=u,I=u=0,H=null,L=f.next();z!==null&&!L.done;I++,L=f.next()){z.index>I?(H=z,z=null):H=z.sibling;var ze=p(d,z,L.value,y);if(ze===null){z===null&&(z=H);break}e&&z&&ze.alternate===null&&n(d,z),u=i(ze,u,I),C===null?k=ze:C.sibling=ze,C=ze,z=H}if(L.done)return t(d,z),R&&hn(d,I),k;if(z===null){for(;!L.done;I++,L=f.next())L=m(d,L.value,y),L!==null&&(u=i(L,u,I),C===null?k=L:C.sibling=L,C=L);return R&&hn(d,I),k}for(z=r(d,z);!L.done;I++,L=f.next())L=v(z,d,I,L.value,y),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?I:L.key),u=i(L,u,I),C===null?k=L:C.sibling=L,C=L);return e&&z.forEach(function(ot){return n(d,ot)}),R&&hn(d,I),k}function M(d,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var k=f.key,C=u;C!==null;){if(C.key===k){if(k=f.type,k===Dn){if(C.tag===7){t(d,C.sibling),u=l(C,f.props.children),u.return=d,d=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ge&&ys(k)===C.type){t(d,C.sibling),u=l(C,f.props),u.ref=pt(d,C,f),u.return=d,d=u;break e}t(d,C);break}else n(d,C);C=C.sibling}f.type===Dn?(u=En(f.props.children,d.mode,y,f.key),u.return=d,d=u):(y=Fr(f.type,f.key,f.props,null,d.mode,y),y.ref=pt(d,u,f),y.return=d,d=y)}return o(d);case _n:e:{for(C=f.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=$l(f,d.mode,y),u.return=d,d=u}return o(d);case Ge:return C=f._init,M(d,u,C(f._payload),y)}if(ht(f))return x(d,u,f,y);if(at(f))return w(d,u,f,y);fr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=l(u,f),u.return=d,d=u):(t(d,u),u=Hl(f,d.mode,y),u.return=d,d=u),o(d)):t(d,u)}return M}var qn=tu(!0),ru=tu(!1),Hr=pn(null),$r=null,Un=null,oo=null;function so(){oo=Un=$r=null}function ao(e){var n=Hr.current;B(Hr),e._currentValue=n}function wi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){$r=e,oo=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ue=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:n,next:null},Un===null){if($r===null)throw Error(h(308));Un=e,$r.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return n}var wn=null;function uo(e){wn===null?wn=[e]:wn.push(e)}function lu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,uo(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ve(e,r)}function Ve(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xe=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ve(e,t)}return l=r.interleaved,l===null?(n.next=n,uo(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ve(e,t)}function kr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Gi(e,t)}}function hs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wr(e,n,t,r){var l=e.updateQueue;Xe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,g=c=a=null,s=i;do{var p=s.lane,v=s.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(p=n,v=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(v,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(v,m,p):x,p==null)break e;m=j({},m,p);break e;case 2:Xe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=v,a=m):g=g.next=v,o|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(g===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Pn|=o,e.lanes=o,e.memoizedState=m}}function vs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var Zt={},Re=pn(Zt),Ut=pn(Zt),Ht=pn(Zt);function Sn(e){if(e===Zt)throw Error(h(174));return e}function fo(e,n){switch(D(Ht,n),D(Ut,e),D(Re,Zt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ei(n,e)}B(Re),D(Re,n)}function et(){B(Re),B(Ut),B(Ht)}function ou(e){Sn(Ht.current);var n=Sn(Re.current),t=ei(n,e.type);n!==t&&(D(Ut,e),D(Re,t))}function po(e){Ut.current===e&&(B(Re),B(Ut))}var A=pn(0);function Vr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ml=[];function mo(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var Er=Ke.ReactCurrentDispatcher,Rl=Ke.ReactCurrentBatchConfig,In=0,O=null,Q=null,G=null,Qr=!1,It=!1,$t=0,Gd=0;function ee(){throw Error(h(321))}function go(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_e(e[t],n[t]))return!1;return!0}function yo(e,n,t,r,l,i){if(In=i,O=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?qd:ef,e=t(r,l),It){i=0;do{if(It=!1,$t=0,25<=i)throw Error(h(301));i+=1,G=Q=null,n.updateQueue=null,Er.current=nf,e=t(r,l)}while(It)}if(Er.current=Kr,n=Q!==null&&Q.next!==null,In=0,G=Q=O=null,Qr=!1,n)throw Error(h(300));return e}function ho(){var e=$t!==0;return $t=0,e}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?O.memoizedState=G=e:G=G.next=e,G}function Ce(){if(Q===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=G===null?O.memoizedState:G.next;if(n!==null)G=n,Q=e;else{if(e===null)throw Error(h(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},G===null?O.memoizedState=G=e:G=G.next=e}return G}function Wt(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=Ce(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=Q,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,c=i;do{var g=c.lane;if((In&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,o=r):a=a.next=m,O.lanes|=g,Pn|=g}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=s,_e(r,n.memoizedState)||(ue=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,O.lanes|=i,Pn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ol(e){var n=Ce(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);_e(i,n.memoizedState)||(ue=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function su(){}function au(e,n){var t=O,r=Ce(),l=n(),i=!_e(r.memoizedState,l);if(i&&(r.memoizedState=l,ue=!0),r=r.queue,vo(du.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||G!==null&&G.memoizedState.tag&1){if(t.flags|=2048,Vt(9,cu.bind(null,t,r,l,n),void 0,null),X===null)throw Error(h(349));In&30||uu(t,n,l)}return l}function uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cu(e,n,t,r){n.value=t,n.getSnapshot=r,fu(n)&&pu(e)}function du(e,n,t){return t(function(){fu(n)&&pu(e)})}function fu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_e(e,t)}catch{return!0}}function pu(e){var n=Ve(e,1);n!==null&&Te(n,e,1,-1)}function xs(e){var n=Ne();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},n.queue=e,e=e.dispatch=Jd.bind(null,O,e),[n.memoizedState,e]}function Vt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Ce().memoizedState}function Cr(e,n,t,r){var l=Ne();O.flags|=e,l.memoizedState=Vt(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(Q!==null){var o=Q.memoizedState;if(i=o.destroy,r!==null&&go(r,o.deps)){l.memoizedState=Vt(n,t,i,r);return}}O.flags|=e,l.memoizedState=Vt(1|n,t,i,r)}function ws(e,n){return Cr(8390656,8,e,n)}function vo(e,n){return ol(2048,8,e,n)}function gu(e,n){return ol(4,2,e,n)}function yu(e,n){return ol(4,4,e,n)}function hu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vu(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,hu.bind(null,n,e),t)}function xo(){}function xu(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&go(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wu(e,n){var t=Ce();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&go(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Su(e,n,t){return In&21?(_e(t,n)||(t=Ia(),O.lanes|=t,Pn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=t)}function Xd(e,n){var t=_;_=t!==0&&4>t?t:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),n()}finally{_=t,Rl.transition=r}}function ku(){return Ce().memoizedState}function Zd(e,n,t){var r=an(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Eu(e))Cu(n,t);else if(t=lu(e,n,t,r),t!==null){var l=ie();Te(t,e,r,l),zu(t,n,r)}}function Jd(e,n,t){var r=an(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Cu(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,_e(s,o)){var a=n.interleaved;a===null?(l.next=l,uo(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=lu(e,n,l,r),t!==null&&(l=ie(),Te(t,e,r,l),zu(t,n,r))}}function Eu(e){var n=e.alternate;return e===O||n!==null&&n===O}function Cu(e,n){It=Qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Gi(e,t)}}var Kr={readContext:Ee,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},qd={readContext:Ee,useCallback:function(e,n){return Ne().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:ws,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,hu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=Ne();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ne();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zd.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var n=Ne();return e={current:e},n.memoizedState=e},useState:xs,useDebugValue:xo,useDeferredValue:function(e){return Ne().memoizedState=e},useTransition:function(){var e=xs(!1),n=e[0];return e=Xd.bind(null,e[1]),Ne().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=O,l=Ne();if(R){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),X===null)throw Error(h(349));In&30||uu(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ws(du.bind(null,r,i,e),[e]),r.flags|=2048,Vt(9,cu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ne(),n=X.identifierPrefix;if(R){var t=Ue,r=je;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$t++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Gd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ef={readContext:Ee,useCallback:xu,useContext:Ee,useEffect:vo,useImperativeHandle:vu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:wu,useReducer:Al,useRef:mu,useState:function(){return Al(Wt)},useDebugValue:xo,useDeferredValue:function(e){var n=Ce();return Su(n,Q.memoizedState,e)},useTransition:function(){var e=Al(Wt)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:au,useId:ku,unstable_isNewReconciler:!1},nf={readContext:Ee,useCallback:xu,useContext:Ee,useEffect:vo,useImperativeHandle:vu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:wu,useReducer:Ol,useRef:mu,useState:function(){return Ol(Wt)},useDebugValue:xo,useDeferredValue:function(e){var n=Ce();return Q===null?n.memoizedState=e:Su(n,Q.memoizedState,e)},useTransition:function(){var e=Ol(Wt)[0],n=Ce().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:au,useId:ku,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=j({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Si(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:j({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var sl={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=an(e),i=He(r,l);i.payload=n,t!=null&&(i.callback=t),n=on(e,i,l),n!==null&&(Te(n,e,l,r),kr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=an(e),i=He(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=on(e,i,l),n!==null&&(Te(n,e,l,r),kr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=an(e),l=He(t,r);l.tag=2,n!=null&&(l.callback=n),n=on(e,l,r),n!==null&&(Te(n,e,r,t),kr(n,e,r))}};function Ss(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Rt(t,r)||!Rt(l,i):!0}function Iu(e,n,t){var r=!1,l=dn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=de(n)?Cn:re.current,r=n.contextTypes,i=(r=r!=null)?Zn(e,l):dn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=sl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function ks(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&sl.enqueueReplaceState(n,n.state,null)}function ki(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},co(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=de(n)?Cn:re.current,l.context=Zn(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Si(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&sl.enqueueReplaceState(l,l.state,null),Wr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",r=n;do t+=bc(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function jl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ei(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function Pu(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Gr||(Gr=!0,Di=r),Ei(e,n)},t}function Fu(e,n,t){t=He(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ei(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ei(e,n),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Es(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new tf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=hf.bind(null,e,n,t),n.then(e,e))}function Cs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function zs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,on(t,n,1))),t.lanes|=1),e)}var rf=Ke.ReactCurrentOwner,ue=!1;function le(e,n,t,r){n.child=e===null?ru(n,null,t,r):qn(n,e.child,t,r)}function Is(e,n,t,r,l){t=t.render;var i=n.ref;return Yn(n,l),r=yo(e,n,t,r,i,l),t=ho(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Qe(e,n,l)):(R&&t&&ro(n),n.flags|=1,le(e,n,r,l),n.child)}function Ps(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,bu(e,n,i,r,l)):(e=Fr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Rt,t(o,r)&&e.ref===n.ref)return Qe(e,n,l)}return n.flags|=1,e=un(i,r),e.ref=n.ref,e.return=n,n.child=e}function bu(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Rt(i,r)&&e.ref===n.ref)if(ue=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ue=!0);else return n.lanes=e.lanes,Qe(e,n,l)}return Ci(e,n,t,r,l)}function Lu(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D($n,pe),pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D($n,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,D($n,pe),pe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,D($n,pe),pe|=r;return le(e,n,l,t),n.child}function Tu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ci(e,n,t,r,l){var i=de(t)?Cn:re.current;return i=Zn(n,i),Yn(n,l),t=yo(e,n,t,r,i,l),r=ho(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Qe(e,n,l)):(R&&r&&ro(n),n.flags|=1,le(e,n,t,l),n.child)}function Fs(e,n,t,r,l){if(de(t)){var i=!0;Or(n)}else i=!1;if(Yn(n,l),n.stateNode===null)zr(e,n),Iu(n,t,r),ki(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(t)?Cn:re.current,c=Zn(n,c));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&ks(n,o,r,c),Xe=!1;var p=n.memoizedState;o.state=p,Wr(n,r,o,l),a=n.memoizedState,s!==r||p!==a||ce.current||Xe?(typeof g=="function"&&(Si(n,t,g,r),a=n.memoizedState),(s=Xe||Ss(n,t,s,r,p,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,iu(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:Pe(n.type,s),o.props=c,m=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=de(t)?Cn:re.current,a=Zn(n,a));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||p!==a)&&ks(n,o,r,a),Xe=!1,p=n.memoizedState,o.state=p,Wr(n,r,o,l);var x=n.memoizedState;s!==m||p!==x||ce.current||Xe?(typeof v=="function"&&(Si(n,t,v,r),x=n.memoizedState),(c=Xe||Ss(n,t,c,r,p,x,a)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return zi(e,n,t,r,i,l)}function zi(e,n,t,r,l,i){Tu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ps(n,t,!1),Qe(e,n,i);r=n.stateNode,rf.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=qn(n,e.child,null,i),n.child=qn(n,null,s,i)):le(e,n,s,i),n.memoizedState=r.state,l&&ps(n,t,!0),n.child}function _u(e){var n=e.stateNode;n.pendingContext?fs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&fs(e,n.context,!1),fo(e,n.containerInfo)}function bs(e,n,t,r,l){return Jn(),io(l),n.flags|=256,le(e,n,t,r),n.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,n,t){var r=n.pendingProps,l=A.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(A,l&1),e===null)return xi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=cl(o,r,0,null),e=En(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Pi(t),n.memoizedState=Ii,e):wo(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return lf(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=un(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=un(s,i):(i=En(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Pi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=un(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function wo(e,n){return n=cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,r){return r!==null&&io(r),qn(n,e.child,null,t),e=wo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lf(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=jl(Error(h(422))),pr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=cl({mode:"visible",children:r.children},l,0,null),i=En(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&qn(n,e.child,null,o),n.child.memoizedState=Pi(o),n.memoizedState=Ii,i);if(!(n.mode&1))return pr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(h(419)),r=jl(i,r,void 0),pr(e,n,o,r)}if(s=(o&e.childLanes)!==0,ue||s){if(r=X,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ve(e,l),Te(r,e,l,-1))}return Io(),r=jl(Error(h(421))),pr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=vf.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,me=ln(l.nextSibling),ge=n,R=!0,be=null,e!==null&&(xe[we++]=je,xe[we++]=Ue,xe[we++]=zn,je=e.id,Ue=e.overflow,zn=n),n=wo(n,r.children),n.flags|=4096,n)}function Ls(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),wi(e.return,n,t)}function Ul(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Nu(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(le(e,n,r.children,t),r=A.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,t,n);else if(e.tag===19)Ls(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(A,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Vr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ul(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Vr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ul(n,!0,t,null,i);break;case"together":Ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Pn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function of(e,n,t){switch(n.tag){case 3:_u(n),Jn();break;case 5:ou(n);break;case 1:de(n.type)&&Or(n);break;case 4:fo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;D(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D(A,A.current&1),n.flags|=128,null):t&n.child.childLanes?Du(e,n,t):(D(A,A.current&1),e=Qe(e,n,t),e!==null?e.sibling:null);D(A,A.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Nu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(A,A.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return Qe(e,n,t)}var Bu,Fi,Mu,Ru;Bu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fi=function(){};Mu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Sn(Re.current);var i=null;switch(t){case"input":l=Xl(e,l),r=Xl(e,r),i=[];break;case"select":l=j({},l,{value:void 0}),r=j({},r,{value:void 0}),i=[];break;case"textarea":l=ql(e,l),r=ql(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rr)}ni(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&N("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Ru=function(e,n,t,r){t!==r&&(n.flags|=4)};function mt(e,n){if(!R)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function sf(e,n,t){var r=n.pendingProps;switch(lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return de(n.type)&&Ar(),ne(n),null;case 3:return r=n.stateNode,et(),B(ce),B(re),mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,be!==null&&(Mi(be),be=null))),Fi(e,n),ne(n),null;case 5:po(n);var l=Sn(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Mu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return ne(n),null}if(e=Sn(Re.current),dr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Be]=n,r[jt]=i,e=(n.mode&1)!==0,t){case"dialog":N("cancel",r),N("close",r);break;case"iframe":case"object":case"embed":N("load",r);break;case"video":case"audio":for(l=0;l<xt.length;l++)N(xt[l],r);break;case"source":N("error",r);break;case"img":case"image":case"link":N("error",r),N("load",r);break;case"details":N("toggle",r);break;case"input":Oo(r,i),N("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},N("invalid",r);break;case"textarea":Uo(r,i),N("invalid",r)}ni(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&cr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&cr(r.textContent,s,e),l=["children",""+s]):Lt.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&N("scroll",r)}switch(t){case"input":tr(r),jo(r,i,!0);break;case"textarea":tr(r),Ho(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Rr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=da(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Be]=n,e[jt]=r,Bu(e,n,!1,!1),n.stateNode=e;e:{switch(o=ti(t,r),t){case"dialog":N("cancel",e),N("close",e),l=r;break;case"iframe":case"object":case"embed":N("load",e),l=r;break;case"video":case"audio":for(l=0;l<xt.length;l++)N(xt[l],e);l=r;break;case"source":N("error",e),l=r;break;case"img":case"image":case"link":N("error",e),N("load",e),l=r;break;case"details":N("toggle",e),l=r;break;case"input":Oo(e,r),l=Xl(e,r),N("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=j({},r,{value:void 0}),N("invalid",e);break;case"textarea":Uo(e,r),l=ql(e,r),N("invalid",e);break;default:l=r}ni(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?ma(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fa(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Tt(e,a):typeof a=="number"&&Tt(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lt.hasOwnProperty(i)?a!=null&&i==="onScroll"&&N("scroll",e):a!=null&&$i(e,i,a,o))}switch(t){case"input":tr(e),jo(e,r,!1);break;case"textarea":tr(e),Ho(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Ru(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=Sn(Ht.current),Sn(Re.current),dr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Be]=n,(i=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:cr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Be]=n,n.stateNode=r}return ne(n),null;case 13:if(B(A),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&me!==null&&n.mode&1&&!(n.flags&128))nu(),Jn(),n.flags|=98560,i=!1;else if(i=dr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[Be]=n}else Jn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),i=!1}else be!==null&&(Mi(be),be=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||A.current&1?K===0&&(K=3):Io())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return et(),Fi(e,n),e===null&&At(n.stateNode.containerInfo),ne(n),null;case 10:return ao(n.type._context),ne(n),null;case 17:return de(n.type)&&Ar(),ne(n),null;case 19:if(B(A),i=n.memoizedState,i===null)return ne(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)mt(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Vr(e),o!==null){for(n.flags|=128,mt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(A,A.current&1|2),n.child}e=e.sibling}i.tail!==null&&W()>tt&&(n.flags|=128,r=!0,mt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Vr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!R)return ne(n),null}else 2*W()-i.renderingStartTime>tt&&t!==1073741824&&(n.flags|=128,r=!0,mt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=W(),n.sibling=null,t=A.current,D(A,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return zo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function af(e,n){switch(lo(n),n.tag){case 1:return de(n.type)&&Ar(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),B(ce),B(re),mo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return po(n),null;case 13:if(B(A),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(A),null;case 4:return et(),null;case 10:return ao(n.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var mr=!1,te=!1,uf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Hn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function bi(e,n,t){try{t()}catch(r){U(e,n,r)}}var Ts=!1;function cf(e,n){if(fi=Nr,e=Ha(),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,c=0,g=0,m=e,p=null;n:for(;;){for(var v;m!==t||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break n;if(p===t&&++c===l&&(s=o),p===i&&++g===r&&(a=o),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(pi={focusedElem:e,selectionRange:t},Nr=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,M=x.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Pe(n.type,w),M);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(y){U(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return x=Ts,Ts=!1,x}function Pt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&bi(n,t,i)}l=l.next}while(l!==r)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Li(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Au(e){var n=e.alternate;n!==null&&(e.alternate=null,Au(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[jt],delete n[yi],delete n[Vd],delete n[Qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ou(e){return e.tag===5||e.tag===3||e.tag===4}function _s(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Rr));else if(r!==4&&(e=e.child,e!==null))for(Ti(e,n,t),e=e.sibling;e!==null;)Ti(e,n,t),e=e.sibling}function _i(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_i(e,n,t),e=e.sibling;e!==null;)_i(e,n,t),e=e.sibling}var Z=null,Fe=!1;function Ye(e,n,t){for(t=t.child;t!==null;)ju(e,n,t),t=t.sibling}function ju(e,n,t){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 5:te||Hn(t,n);case 6:var r=Z,l=Fe;Z=null,Ye(e,n,t),Z=r,Fe=l,Z!==null&&(Fe?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(Fe?(e=Z,t=t.stateNode,e.nodeType===8?Nl(e.parentNode,t):e.nodeType===1&&Nl(e,t),Bt(e)):Nl(Z,t.stateNode));break;case 4:r=Z,l=Fe,Z=t.stateNode.containerInfo,Fe=!0,Ye(e,n,t),Z=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&bi(t,n,o),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!te&&(Hn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){U(t,n,s)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,Ye(e,n,t),te=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function Ds(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new uf),n.forEach(function(r){var l=xf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Z=s.stateNode,Fe=!1;break e;case 3:Z=s.stateNode.containerInfo,Fe=!0;break e;case 4:Z=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(Z===null)throw Error(h(160));ju(i,o,l),Z=null,Fe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){U(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uu(n,e),n=n.sibling}function Uu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),De(e),r&4){try{Pt(3,e,e.return),al(3,e)}catch(w){U(e,e.return,w)}try{Pt(5,e,e.return)}catch(w){U(e,e.return,w)}}break;case 1:Ie(n,e),De(e),r&512&&t!==null&&Hn(t,t.return);break;case 5:if(Ie(n,e),De(e),r&512&&t!==null&&Hn(t,t.return),e.flags&32){var l=e.stateNode;try{Tt(l,"")}catch(w){U(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ua(l,i),ti(s,o);var c=ti(s,i);for(o=0;o<a.length;o+=2){var g=a[o],m=a[o+1];g==="style"?ma(l,m):g==="dangerouslySetInnerHTML"?fa(l,m):g==="children"?Tt(l,m):$i(l,g,m,c)}switch(s){case"input":Zl(l,i);break;case"textarea":ca(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Wn(l,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?Wn(l,!!i.multiple,i.defaultValue,!0):Wn(l,!!i.multiple,i.multiple?[]:"",!1))}l[jt]=i}catch(w){U(e,e.return,w)}}break;case 6:if(Ie(n,e),De(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){U(e,e.return,w)}}break;case 3:if(Ie(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Bt(n.containerInfo)}catch(w){U(e,e.return,w)}break;case 4:Ie(n,e),De(e);break;case 13:Ie(n,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=W())),r&4&&Ds(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(te=(c=te)||g,Ie(n,e),te=c):Ie(n,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(m=S=g;S!==null;){switch(p=S,v=p.child,p.tag){case 0:case 11:case 14:case 15:Pt(4,p,p.return);break;case 1:Hn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){U(r,t,w)}}break;case 5:Hn(p,p.return);break;case 22:if(p.memoizedState!==null){Bs(m);continue}}v!==null?(v.return=p,S=v):Bs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pa("display",o))}catch(w){U(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){U(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(n,e),De(e),r&4&&Ds(e);break;case 21:break;default:Ie(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ou(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tt(l,""),r.flags&=-33);var i=_s(e);_i(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=_s(e);Ti(e,s,o);break;default:throw Error(h(161))}}catch(a){U(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function df(e,n,t){S=e,Hu(e)}function Hu(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||mr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||te;s=mr;var c=te;if(mr=o,(te=a)&&!c)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Ms(l):a!==null?(a.return=o,S=a):Ms(l);for(;i!==null;)S=i,Hu(i),i=i.sibling;S=l,mr=s,te=c}Ns(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ns(e)}}function Ns(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||al(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&vs(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}vs(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Bt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}te||n.flags&512&&Li(n)}catch(p){U(n,n.return,p)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Bs(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function Ms(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(a){U(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){U(n,l,a)}}var i=n.return;try{Li(n)}catch(a){U(n,i,a)}break;case 5:var o=n.return;try{Li(n)}catch(a){U(n,o,a)}}}catch(a){U(n,n.return,a)}if(n===e){S=null;break}var s=n.sibling;if(s!==null){s.return=n.return,S=s;break}S=n.return}}var ff=Math.ceil,Yr=Ke.ReactCurrentDispatcher,So=Ke.ReactCurrentOwner,ke=Ke.ReactCurrentBatchConfig,T=0,X=null,V=null,J=0,pe=0,$n=pn(0),K=0,Qt=null,Pn=0,ul=0,ko=0,Ft=null,ae=null,Eo=0,tt=1/0,Ae=null,Gr=!1,Di=null,sn=null,gr=!1,en=null,Xr=0,bt=0,Ni=null,Ir=-1,Pr=0;function ie(){return T&6?W():Ir!==-1?Ir:Ir=W()}function an(e){return e.mode&1?T&2&&J!==0?J&-J:Yd.transition!==null?(Pr===0&&(Pr=Ia()),Pr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Da(e.type)),e):1}function Te(e,n,t,r){if(50<bt)throw bt=0,Ni=null,Error(h(185));Yt(e,t,r),(!(T&2)||e!==X)&&(e===X&&(!(T&2)&&(ul|=t),K===4&&Je(e,J)),fe(e,r),t===1&&T===0&&!(n.mode&1)&&(tt=W()+500,il&&mn()))}function fe(e,n){var t=e.callbackNode;Yc(e,n);var r=Dr(e,e===X?J:0);if(r===0)t!==null&&Vo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Vo(t),n===1)e.tag===0?Kd(Rs.bind(null,e)):Ja(Rs.bind(null,e)),$d(function(){!(T&6)&&mn()}),t=null;else{switch(Pa(r)){case 1:t=Yi;break;case 4:t=Ca;break;case 16:t=_r;break;case 536870912:t=za;break;default:t=_r}t=Xu(t,$u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $u(e,n){if(Ir=-1,Pr=0,T&6)throw Error(h(327));var t=e.callbackNode;if(Gn()&&e.callbackNode!==t)return null;var r=Dr(e,e===X?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Zr(e,r);else{n=r;var l=T;T|=2;var i=Vu();(X!==e||J!==n)&&(Ae=null,tt=W()+500,kn(e,n));do try{gf();break}catch(s){Wu(e,s)}while(!0);so(),Yr.current=i,T=l,V!==null?n=0:(X=null,J=0,n=K)}if(n!==0){if(n===2&&(l=si(e),l!==0&&(r=l,n=Bi(e,l))),n===1)throw t=Qt,kn(e,0),Je(e,r),fe(e,W()),t;if(n===6)Je(e,r);else{if(l=e.current.alternate,!(r&30)&&!pf(l)&&(n=Zr(e,r),n===2&&(i=si(e),i!==0&&(r=i,n=Bi(e,i))),n===1))throw t=Qt,kn(e,0),Je(e,r),fe(e,W()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:vn(e,ae,Ae);break;case 3:if(Je(e,r),(r&130023424)===r&&(n=Eo+500-W(),10<n)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(vn.bind(null,e,ae,Ae),n);break}vn(e,ae,Ae);break;case 4:if(Je(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Le(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ff(r/1960))-r,10<r){e.timeoutHandle=gi(vn.bind(null,e,ae,Ae),r);break}vn(e,ae,Ae);break;case 5:vn(e,ae,Ae);break;default:throw Error(h(329))}}}return fe(e,W()),e.callbackNode===t?$u.bind(null,e):null}function Bi(e,n){var t=Ft;return e.current.memoizedState.isDehydrated&&(kn(e,n).flags|=256),e=Zr(e,n),e!==2&&(n=ae,ae=t,n!==null&&Mi(n)),e}function Mi(e){ae===null?ae=e:ae.push.apply(ae,e)}function pf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!_e(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Je(e,n){for(n&=~ko,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Rs(e){if(T&6)throw Error(h(327));Gn();var n=Dr(e,0);if(!(n&1))return fe(e,W()),null;var t=Zr(e,n);if(e.tag!==0&&t===2){var r=si(e);r!==0&&(n=r,t=Bi(e,r))}if(t===1)throw t=Qt,kn(e,0),Je(e,n),fe(e,W()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vn(e,ae,Ae),fe(e,W()),null}function Co(e,n){var t=T;T|=1;try{return e(n)}finally{T=t,T===0&&(tt=W()+500,il&&mn())}}function Fn(e){en!==null&&en.tag===0&&!(T&6)&&Gn();var n=T;T|=1;var t=ke.transition,r=_;try{if(ke.transition=null,_=1,e)return e()}finally{_=r,ke.transition=t,T=n,!(T&6)&&mn()}}function zo(){pe=$n.current,B($n)}function kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hd(t)),V!==null)for(t=V.return;t!==null;){var r=t;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:et(),B(ce),B(re),mo();break;case 5:po(r);break;case 4:et();break;case 13:B(A);break;case 19:B(A);break;case 10:ao(r.type._context);break;case 22:case 23:zo()}t=t.return}if(X=e,V=e=un(e.current,null),J=pe=n,K=0,Qt=null,ko=ul=Pn=0,ae=Ft=null,wn!==null){for(n=0;n<wn.length;n++)if(t=wn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}wn=null}return e}function Wu(e,n){do{var t=V;try{if(so(),Er.current=Kr,Qr){for(var r=O.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Qr=!1}if(In=0,G=Q=O=null,It=!1,$t=0,So.current=null,t===null||t.return===null){K=1,Qt=n,V=null;break}e:{var i=e,o=t.return,s=t,a=n;if(n=J,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Cs(o);if(v!==null){v.flags&=-257,zs(v,o,s,i,n),v.mode&1&&Es(i,c,n),n=v,a=c;var x=n.updateQueue;if(x===null){var w=new Set;w.add(a),n.updateQueue=w}else x.add(a);break e}else{if(!(n&1)){Es(i,c,n),Io();break e}a=Error(h(426))}}else if(R&&s.mode&1){var M=Cs(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),zs(M,o,s,i,n),io(nt(a,s));break e}}i=a=nt(a,s),K!==4&&(K=2),Ft===null?Ft=[i]:Ft.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Pu(i,a,n);hs(i,d);break e;case 1:s=a;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=Fu(i,s,n);hs(i,y);break e}}i=i.return}while(i!==null)}Ku(t)}catch(k){n=k,V===t&&t!==null&&(V=t=t.return);continue}break}while(!0)}function Vu(){var e=Yr.current;return Yr.current=Kr,e===null?Kr:e}function Io(){(K===0||K===3||K===2)&&(K=4),X===null||!(Pn&268435455)&&!(ul&268435455)||Je(X,J)}function Zr(e,n){var t=T;T|=2;var r=Vu();(X!==e||J!==n)&&(Ae=null,kn(e,n));do try{mf();break}catch(l){Wu(e,l)}while(!0);if(so(),T=t,Yr.current=r,V!==null)throw Error(h(261));return X=null,J=0,K}function mf(){for(;V!==null;)Qu(V)}function gf(){for(;V!==null&&!Oc();)Qu(V)}function Qu(e){var n=Gu(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Ku(e):V=n,So.current=null}function Ku(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=af(t,n),t!==null){t.flags&=32767,V=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,V=null;return}}else if(t=sf(t,n,pe),t!==null){V=t;return}if(n=n.sibling,n!==null){V=n;return}V=n=e}while(n!==null);K===0&&(K=5)}function vn(e,n,t){var r=_,l=ke.transition;try{ke.transition=null,_=1,yf(e,n,t,r)}finally{ke.transition=l,_=r}return null}function yf(e,n,t,r){do Gn();while(en!==null);if(T&6)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Gc(e,i),e===X&&(V=X=null,J=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,Xu(_r,function(){return Gn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ke.transition,ke.transition=null;var o=_;_=1;var s=T;T|=4,So.current=null,cf(e,t),Uu(t,e),Bd(pi),Nr=!!fi,pi=fi=null,e.current=t,df(t),jc(),T=s,_=o,ke.transition=i}else e.current=t;if(gr&&(gr=!1,en=e,Xr=l),i=e.pendingLanes,i===0&&(sn=null),$c(t.stateNode),fe(e,W()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gr)throw Gr=!1,e=Di,Di=null,e;return Xr&1&&e.tag!==0&&Gn(),i=e.pendingLanes,i&1?e===Ni?bt++:(bt=0,Ni=e):bt=0,mn(),null}function Gn(){if(en!==null){var e=Pa(Xr),n=ke.transition,t=_;try{if(ke.transition=null,_=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Xr=0,T&6)throw Error(h(331));var l=T;for(T|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(S=c;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Pt(8,g,i)}var m=g.child;if(m!==null)m.return=g,S=m;else for(;S!==null;){g=S;var p=g.sibling,v=g.return;if(Au(g),g===c){S=null;break}if(p!==null){p.return=v,S=p;break}S=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pt(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,S=d;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:al(9,s)}}catch(k){U(s,s.return,k)}if(s===o){S=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,S=y;break e}S=s.return}}if(T=l,mn(),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{_=t,ke.transition=n}}return!1}function As(e,n,t){n=nt(t,n),n=Pu(e,n,1),e=on(e,n,1),n=ie(),e!==null&&(Yt(e,1,n),fe(e,n))}function U(e,n,t){if(e.tag===3)As(e,e,t);else for(;n!==null;){if(n.tag===3){As(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=nt(t,e),e=Fu(n,e,1),n=on(n,e,1),e=ie(),n!==null&&(Yt(n,1,e),fe(n,e));break}}n=n.return}}function hf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,X===e&&(J&t)===t&&(K===4||K===3&&(J&130023424)===J&&500>W()-Eo?kn(e,0):ko|=t),fe(e,n)}function Yu(e,n){n===0&&(e.mode&1?(n=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):n=1);var t=ie();e=Ve(e,n),e!==null&&(Yt(e,n,t),fe(e,t))}function vf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yu(e,t)}function xf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),Yu(e,t)}var Gu;Gu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ue=!1,of(e,n,t);ue=!!(e.flags&131072)}else ue=!1,R&&n.flags&1048576&&qa(n,Ur,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zr(e,n),e=n.pendingProps;var l=Zn(n,re.current);Yn(n,t),l=yo(null,n,r,e,l,t);var i=ho();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,de(r)?(i=!0,Or(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(n),l.updater=sl,n.stateNode=l,l._reactInternals=n,ki(n,r,e,t),n=zi(null,n,r,!0,i,t)):(n.tag=0,R&&i&&ro(n),le(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Sf(r),e=Pe(r,e),l){case 0:n=Ci(null,n,r,e,t);break e;case 1:n=Fs(null,n,r,e,t);break e;case 11:n=Is(null,n,r,e,t);break e;case 14:n=Ps(null,n,r,Pe(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Ci(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Fs(e,n,r,l,t);case 3:e:{if(_u(n),e===null)throw Error(h(387));r=n.pendingProps,i=n.memoizedState,l=i.element,iu(e,n),Wr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=nt(Error(h(423)),n),n=bs(e,n,r,t,l);break e}else if(r!==l){l=nt(Error(h(424)),n),n=bs(e,n,r,t,l);break e}else for(me=ln(n.stateNode.containerInfo.firstChild),ge=n,R=!0,be=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jn(),r===l){n=Qe(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return ou(n),e===null&&xi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,mi(r,l)?o=null:i!==null&&mi(r,i)&&(n.flags|=32),Tu(e,n),le(e,n,o,t),n.child;case 6:return e===null&&xi(n),null;case 13:return Du(e,n,t);case 4:return fo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qn(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),Is(e,n,r,l,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,D(Hr,r._currentValue),r._currentValue=o,i!==null)if(_e(i.value,o)){if(i.children===l.children&&!ce.current){n=Qe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=He(-1,t&-t),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),wi(i.return,t,n),s.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),wi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}le(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Yn(n,t),l=Ee(l),r=r(l),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,l=Pe(r,n.pendingProps),l=Pe(r.type,l),Ps(e,n,r,l,t);case 15:return bu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Pe(r,l),zr(e,n),n.tag=1,de(r)?(e=!0,Or(n)):e=!1,Yn(n,t),Iu(n,r,l),ki(n,r,l,t),zi(null,n,r,!0,e,t);case 19:return Nu(e,n,t);case 22:return Lu(e,n,t)}throw Error(h(156,n.tag))};function Xu(e,n){return Ea(e,n)}function wf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,n,t,r){return new wf(e,n,t,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sf(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vi)return 11;if(e===Qi)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=Se(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Fr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dn:return En(t.children,l,i,n);case Wi:o=8,l|=8;break;case Ql:return e=Se(12,t,n,l|2),e.elementType=Ql,e.lanes=i,e;case Kl:return e=Se(13,t,n,l),e.elementType=Kl,e.lanes=i,e;case Yl:return e=Se(19,t,n,l),e.elementType=Yl,e.lanes=i,e;case oa:return cl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:o=10;break e;case ia:o=9;break e;case Vi:o=11;break e;case Qi:o=14;break e;case Ge:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=Se(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function En(e,n,t,r){return e=Se(7,e,r,n),e.lanes=t,e}function cl(e,n,t,r){return e=Se(22,e,r,n),e.elementType=oa,e.lanes=t,e.stateNode={isHidden:!1},e}function Hl(e,n,t){return e=Se(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=Se(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function kf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fo(e,n,t,r,l,i,o,s,a){return e=new kf(e,n,t,s,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Se(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(i),e}function Ef(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Zu(e){if(!e)return dn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(de(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(de(t))return Za(e,t,n)}return n}function Ju(e,n,t,r,l,i,o,s,a){return e=Fo(t,r,!0,e,l,i,o,s,a),e.context=Zu(null),t=e.current,r=ie(),l=an(t),i=He(r,l),i.callback=n??null,on(t,i,l),e.current.lanes=l,Yt(e,l,r),fe(e,r),e}function dl(e,n,t,r){var l=n.current,i=ie(),o=an(l);return t=Zu(t),n.context===null?n.context=t:n.pendingContext=t,n=He(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(l,n,o),e!==null&&(Te(e,l,o,i),kr(e,l,o)),o}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Os(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function bo(e,n){Os(e,n),(e=e.alternate)&&Os(e,n)}function Cf(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}fl.prototype.render=Lo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));dl(e,n,null,null)};fl.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){dl(null,e,null,null)}),n[We]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var n=La();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ze.length&&n!==0&&n<Ze[t].priority;t++);Ze.splice(t,0,e),t===0&&_a(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function js(){}function zf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Jr(o);i.call(c)}}var o=Ju(n,r,e,0,null,!1,!1,"",js);return e._reactRootContainer=o,e[We]=o.current,At(e.nodeType===8?e.parentNode:e),Fn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Jr(a);s.call(c)}}var a=Fo(e,0,!1,null,null,!1,!1,"",js);return e._reactRootContainer=a,e[We]=a.current,At(e.nodeType===8?e.parentNode:e),Fn(function(){dl(n,a,t,r)}),a}function ml(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=Jr(o);s.call(a)}}dl(n,o,e,l)}else o=zf(t,n,e,l,r);return Jr(o)}Fa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=vt(n.pendingLanes);t!==0&&(Gi(n,t|1),fe(n,W()),!(T&6)&&(tt=W()+500,mn()))}break;case 13:Fn(function(){var r=Ve(e,1);if(r!==null){var l=ie();Te(r,e,1,l)}}),bo(e,1)}};Xi=function(e){if(e.tag===13){var n=Ve(e,134217728);if(n!==null){var t=ie();Te(n,e,134217728,t)}bo(e,134217728)}};ba=function(e){if(e.tag===13){var n=an(e),t=Ve(e,n);if(t!==null){var r=ie();Te(t,e,n,r)}bo(e,n)}};La=function(){return _};Ta=function(e,n){var t=_;try{return _=e,n()}finally{_=t}};li=function(e,n,t){switch(n){case"input":if(Zl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ll(r);if(!l)throw Error(h(90));aa(r),Zl(r,l)}}}break;case"textarea":ca(e,t);break;case"select":n=t.value,n!=null&&Wn(e,!!t.multiple,n,!1)}};ha=Co;va=Fn;var If={usingClientEntryPoint:!1,Events:[Xt,Rn,ll,ga,ya,Co]},gt={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{el=yr.inject(Pf),Me=yr}catch{}}he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;he.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(n))throw Error(h(200));return Ef(e,n,null,t)};he.createRoot=function(e,n){if(!To(e))throw Error(h(299));var t=!1,r="",l=qu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Fo(e,1,!1,null,null,t,!1,r,l),e[We]=n.current,At(e.nodeType===8?e.parentNode:e),new Lo(n)};he.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Sa(n),e=e===null?null:e.stateNode,e};he.flushSync=function(e){return Fn(e)};he.hydrate=function(e,n,t){if(!pl(n))throw Error(h(200));return ml(null,e,n,!0,t)};he.hydrateRoot=function(e,n,t){if(!To(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=qu;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Ju(n,null,e,1,t??null,l,!1,i,o),e[We]=n.current,At(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new fl(n)};he.render=function(e,n,t){if(!pl(n))throw Error(h(200));return ml(null,e,n,!1,t)};he.unmountComponentAtNode=function(e){if(!pl(e))throw Error(h(40));return e._reactRootContainer?(Fn(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};he.unstable_batchedUpdates=Co;he.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pl(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return ml(e,n,t,!1,r)};he.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),ea.exports=he;var Ff=ea.exports,Us=Ff;Wl.createRoot=Us.createRoot,Wl.hydrateRoot=Us.hydrateRoot;const bf=`<!-- Scroll progress -->
<div id="scroll-progress" style="width:0%;"></div>

<!-- Scan line effect -->
<div class="scan-line"></div>

<!-- Cursor glow -->
<div class="cursor-glow" id="cursorGlow"></div>
<div class="cursor-trail" id="cursorTrail"></div>

<!-- Particles canvas -->
<canvas id="particles-canvas"></canvas>

<!-- Ambient background -->
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
<div class="blob blob-3"></div>
<div class="grid-overlay"></div>

<!-- Toast container -->
<div class="toast-wrap" id="toastWrap"></div>

<!-- ══════════════════════════════════════════════════
     AUTH MODAL
══════════════════════════════════════════════════ -->
<div id="authModal" class="modal-overlay" style="display:none;">
  <div class="modal-box">
    <button onclick="closeAuth()" style="position:absolute;top:16px;right:16px;background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;"><i data-lucide="x" style="width:18px;height:18px;"></i></button>

    <div style="display:flex;gap:8px;margin-bottom:24px;">
      <button class="tab-pill active" id="tabLogin" onclick="switchTab('login')">Sign In</button>
      <button class="tab-pill" id="tabSignup" onclick="switchTab('signup')">Create Account</button>
    </div>

    <!-- Login -->
    <div id="formLogin">
      <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;font-weight:700;margin-bottom:4px;">Welcome back</h2>
      <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin-bottom:20px;">Access your credit history and profile</p>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div><label class="field-label">Email</label><input type="email" id="li-email" class="field-input" placeholder="you@example.com"></div>
        <div><label class="field-label">Password</label><input type="password" id="li-pass" class="field-input" placeholder="••••••••"></div>
        <div id="li-err" class="auth-error" style="display:none;"></div>
        <button class="btn-primary" style="width:100%;justify-content:center;" onclick="handleLogin()">Sign In</button>
      </div>
      <p style="text-align:center;color:rgba(255,255,255,0.35);font-size:0.82rem;margin-top:14px;">No account? <button onclick="switchTab('signup')" style="background:none;border:none;color:#00D4FF;cursor:pointer;font-size:0.82rem;">Create one →</button></p>
    </div>

    <!-- Signup -->
    <div id="formSignup" style="display:none;">
      <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;font-weight:700;margin-bottom:4px;">Create account</h2>
      <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin-bottom:20px;">Start tracking your credit journey</p>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div><label class="field-label">Full Name</label><input type="text" id="su-name" class="field-input" placeholder="Alex Johnson"></div>
        <div><label class="field-label">Email</label><input type="email" id="su-email" class="field-input" placeholder="you@example.com"></div>
        <div><label class="field-label">Password</label><input type="password" id="su-pass" class="field-input" placeholder="Min 6 characters"></div>
        <div id="su-err" class="auth-error" style="display:none;"></div>
        <button class="btn-primary" style="width:100%;justify-content:center;" onclick="handleSignup()">Create Account</button>
      </div>
      <p style="text-align:center;color:rgba(255,255,255,0.35);font-size:0.82rem;margin-top:14px;">Have an account? <button onclick="switchTab('login')" style="background:none;border:none;color:#00D4FF;cursor:pointer;font-size:0.82rem;">Sign in →</button></p>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════════
     NAVIGATION
══════════════════════════════════════════════════ -->
<nav class="nav-bar">
  <div class="nav-logo" style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="window.scrollTo({top:0,behavior:'smooth'})">
    <!-- Beautiful SVG Logo -->
    <svg width="36" height="36" viewBox="0 0 36 36" class="logo-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00D4FF"/>
          <stop offset="100%" stop-color="#8B5CF6"/>
        </linearGradient>
        <linearGradient id="lg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2DD4BF"/>
          <stop offset="100%" stop-color="#00D4FF"/>
        </linearGradient>
      </defs>
      <!-- Outer ring segments -->
      <circle cx="18" cy="18" r="15" fill="none" stroke="url(#lg1)" stroke-width="1.5" stroke-dasharray="60 35" class="logo-ring-outer"/>
      <!-- Inner ring -->
      <circle cx="18" cy="18" r="10" fill="none" stroke="url(#lg2)" stroke-width="1" stroke-dasharray="40 23" class="logo-ring-inner"/>
      <!-- Center diamond -->
      <polygon points="18,8 26,18 18,28 10,18" fill="none" stroke="url(#lg1)" stroke-width="1.5" stroke-linejoin="round"/>
      <!-- Center dot -->
      <circle cx="18" cy="18" r="3" fill="url(#lg1)"/>
      <!-- Corner nodes -->
      <circle cx="18" cy="8" r="1.5" fill="#00D4FF" opacity="0.8"/>
      <circle cx="26" cy="18" r="1.5" fill="#8B5CF6" opacity="0.8"/>
      <circle cx="18" cy="28" r="1.5" fill="#2DD4BF" opacity="0.8"/>
      <circle cx="10" cy="18" r="1.5" fill="#00D4FF" opacity="0.8"/>
    </svg>
    <div>
      <span style="background: linear-gradient(90deg,#00D4FF,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:1.3rem;letter-spacing:-0.02em;">Cred</span><span style="color:rgba(255,255,255,0.95);font-size:1.3rem;">AI</span>
    </div>
  </div>
  <div class="nav-links">
    <a href="#assessment" class="nav-link">Assessment</a>
    <a href="#how-it-works" class="nav-link">How It Works</a>
    <a href="#features" class="nav-link">Features</a>
    <a href="#dashboard-section" class="nav-link">Analytics</a>
    <a href="#history-section" class="nav-link" id="navHistoryLink" style="display:none;">History</a>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <div id="navLoggedOut">
      <button class="btn-primary btn-sm" onclick="openAuth('login')"><i data-lucide="log-in" style="width:14px;height:14px;"></i> Sign In</button>
    </div>
    <div id="navLoggedIn" style="display:none;align-items:center;gap:10px;" class="flex">
      <div class="user-nav-badge" onclick="scrollTo('history-section')">
        <div id="navAvatar" style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#00D4FF,#8B5CF6);display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:800;font-family:'Syne',sans-serif;">U</div>
        <span id="navName" style="font-size:0.85rem;font-weight:600;font-family:'Syne',sans-serif;">User</span>
      </div>
      <button onclick="handleLogout()" style="background:none;border:none;color:rgba(255,255,255,0.35);cursor:pointer;font-size:0.78rem;padding:6px 10px;border-radius:8px;transition:all 0.2s;" onmouseover="this.style.color='#ff2050'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">
        <i data-lucide="log-out" style="width:14px;height:14px;"></i>
      </button>
    </div>
  </div>
</nav>

<!-- ══════════════════════════════════════════════════
     HERO SECTION
══════════════════════════════════════════════════ -->
<section id="hero" style="position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:120px 24px 80px;z-index:10;overflow:hidden;">

  <div style="text-align:center;max-width:700px;margin:0 auto 60px;">
    <div class="hero-badge" style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:99px;border:1px solid rgba(0,212,255,0.25);margin-bottom:24px;animation:fadeSlideDown 0.8s ease both;">
      <span style="width:6px;height:6px;border-radius:50%;background:#00D4FF;animation:pulse 2s infinite;"></span>
      <span style="font-size:0.7rem;font-weight:700;letter-spacing:0.15em;color:#00D4FF;font-family:'Syne',sans-serif;">NEXT-GEN FINTECH · AI-POWERED</span>
    </div>
    <h1 style="font-size:clamp(2.8rem,6vw,5rem);font-weight:800;line-height:1.05;margin-bottom:20px;letter-spacing:-0.03em;animation:fadeSlideUp 0.9s 0.2s ease both;opacity:0;">
      Credit Risk<br>
      <span class="gradient-animate">Reimagined</span>
    </h1>
    <p style="font-size:1.1rem;color:rgba(255,255,255,0.45);max-width:520px;margin:0 auto;line-height:1.7;font-weight:300;animation:fadeSlideUp 0.9s 0.4s ease both;opacity:0;">AI-powered credit assessment using alternative behavioral data. Real-time scoring with full explainability.</p>
    <div style="display:flex;gap:14px;justify-content:center;margin-top:36px;flex-wrap:wrap;animation:fadeSlideUp 0.9s 0.6s ease both;opacity:0;">
      <a href="#assessment" class="btn-primary ripple btn-magnetic" style="box-shadow:0 0 30px rgba(0,212,255,0.15);"><span>Check Your Score</span><i data-lucide="arrow-right" style="width:16px;height:16px;"></i></a>
      <button class="btn-ghost btn-magnetic" onclick="openAuth('signup')" id="heroSignupBtn">Create Free Account</button>
    </div>
  </div>

  <!-- Hero 3-card scene -->
  <div style="position:relative;width:100%;max-width:1000px;height:460px;display:flex;align-items:center;justify-content:center;" class="hero-floats">

    <!-- Central Score Card -->
    <div class="glass-frost fa" style="border-radius:28px;padding:36px 40px;z-index:30;width:300px;display:flex;flex-direction:column;align-items:center;box-shadow:0 40px 100px rgba(0,0,0,0.6),0 0 60px rgba(0,212,255,0.08);">
      <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.2em;color:rgba(255,255,255,0.35);margin-bottom:20px;font-family:'Syne',sans-serif;">AI CREDIT SCORE</p>
      <!-- Score ring -->
      <div class="score-ring-wrap" style="width:160px;height:160px;margin-bottom:16px;">
        <svg class="score-ring-svg" width="160" height="160" viewBox="0 0 160 160">
          <circle class="score-ring-track" cx="80" cy="80" r="65"/>
          <circle class="score-ring-fill" id="heroRingFill" cx="80" cy="80" r="65" stroke="#00D4FF" stroke-dasharray="408" stroke-dashoffset="100"/>
        </svg>
        <div class="score-ring-number">
          <span id="heroScore" style="font-family:'Syne',sans-serif;font-size:2.6rem;font-weight:800;line-height:1;">785</span>
          <span id="heroScoreLabel" style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:#00D4FF;margin-top:2px;">EXCELLENT</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span id="heroScoreDelta" style="font-size:0.8rem;color:rgba(255,255,255,0.3);">Last check</span>
      </div>
    </div>

    <!-- Left: Factor breakdown -->
    <div class="glass fb" style="position:absolute;left:5%;top:15%;border-radius:20px;padding:18px 20px;width:200px;opacity:0.85;filter:blur(0.5px);">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.06);">
        <i data-lucide="bar-chart-2" style="width:14px;height:14px;color:#00D4FF;"></i>
        <span style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.5);font-family:'Syne',sans-serif;">SCORE FACTORS</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div><div style="display:flex;justify-content:space-between;font-size:0.7rem;margin-bottom:3px;"><span style="color:rgba(255,255,255,0.5);">Income</span><span style="color:#2DD4BF;">+130</span></div><div style="height:3px;background:rgba(255,255,255,0.06);border-radius:99px;"><div style="width:78%;height:100%;background:#2DD4BF;border-radius:99px;"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:0.7rem;margin-bottom:3px;"><span style="color:rgba(255,255,255,0.5);">Payments</span><span style="color:#2DD4BF;">+120</span></div><div style="height:3px;background:rgba(255,255,255,0.06);border-radius:99px;"><div style="width:72%;height:100%;background:#2DD4BF;border-radius:99px;"></div></div></div>
        <div><div style="display:flex;justify-content:space-between;font-size:0.7rem;margin-bottom:3px;"><span style="color:rgba(255,255,255,0.5);">Utilization</span><span style="color:#f59e0b;">+42</span></div><div style="height:3px;background:rgba(255,255,255,0.06);border-radius:99px;"><div style="width:45%;height:100%;background:#f59e0b;border-radius:99px;"></div></div></div>
      </div>
    </div>

    <!-- Right: Loan eligibility preview -->
    <div class="glass fc" style="position:absolute;right:5%;bottom:20%;border-radius:20px;padding:18px 20px;width:210px;opacity:0.9;filter:blur(0.3px);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <i data-lucide="credit-card" style="width:16px;height:16px;color:#00D4FF;"></i>
        <span class="loan-badge tier-prime">ELIGIBLE</span>
      </div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.35);letter-spacing:0.08em;font-family:'Syne',sans-serif;margin-bottom:4px;">MAX LOAN</div>
      <div style="font-size:1.4rem;font-weight:800;font-family:'Syne',sans-serif;margin-bottom:8px;">$225,000</div>
      <div style="font-size:0.7rem;color:rgba(255,255,255,0.4);">Rate: <span style="color:#2DD4BF;font-weight:600;">4.5% – 7.5%</span></div>
    </div>

    <!-- Top right: API ping -->
    <div class="glass" style="position:absolute;right:3%;top:10%;border-radius:14px;padding:10px 14px;opacity:0.75;display:flex;align-items:center;gap:8px;">
      <span style="width:7px;height:7px;border-radius:50%;background:#2DD4BF;box-shadow:0 0 8px #2DD4BF;animation:pulse 2s infinite;"></span>
      <span style="font-size:0.65rem;color:rgba(255,255,255,0.5);font-family:'Syne',sans-serif;">API LIVE · 12ms</span>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     ASSESSMENT SECTION
══════════════════════════════════════════════════ -->
<div class="section-divider"></div>
<section id="assessment" style="padding:80px 24px;position:relative;z-index:10;">
  <div style="max-width:860px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:52px;" class="reveal">
      <div style="display:inline-block;padding:4px 14px;border-radius:99px;border:1px solid rgba(139,92,246,0.3);background:rgba(139,92,246,0.07);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;color:#8B5CF6;margin-bottom:14px;font-family:'Syne',sans-serif;">CREDIT ASSESSMENT</div>
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;margin-bottom:12px;letter-spacing:-0.02em;">Calculate Your Score</h2>
      <p style="color:rgba(255,255,255,0.4);max-width:500px;margin:0 auto;line-height:1.65;">Input your financial signals. Our AI engine calculates your score with full explainability.</p>
    </div>

    <div class="glass-strong" style="border-radius:28px;padding:40px;position:relative;overflow:hidden;" class="reveal">
      <div style="position:absolute;inset:0;background:radial-gradient(circle at 70% 20%,rgba(0,212,255,0.04),transparent 60%);pointer-events:none;"></div>

      <!-- Form grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-bottom:24px;">
        <div>
          <label class="field-label">Monthly Income ($)</label>
          <input type="number" id="f-income" class="field-input" value="4500" min="0" oninput="livePreview()">
        </div>
        <div>
          <label class="field-label">Monthly Expenses ($)</label>
          <input type="number" id="f-expenses" class="field-input" value="2100" min="0" oninput="livePreview()">
        </div>
        <div>
          <label class="field-label">Monthly Transactions</label>
          <input type="number" id="f-transactions" class="field-input" value="45" min="0" oninput="livePreview()">
        </div>
        <div>
          <label class="field-label">Credit Utilization (%)</label>
          <input type="number" id="f-creditUtil" class="field-input" value="30" min="0" max="100" oninput="livePreview()">
        </div>
        <div>
          <label class="field-label">Payment History</label>
          <select id="f-paymentHistory" class="field-input" onchange="livePreview()">
            <option value="100">Excellent — Always on time</option>
            <option value="75">Good — Rarely late</option>
            <option value="50">Fair — Sometimes late</option>
            <option value="25">Poor — Often late</option>
          </select>
        </div>
        <div>
          <label class="field-label" style="display:flex;justify-content:space-between;"><span>Behavioral Score</span><span id="mobileVal" style="color:#00D4FF;font-weight:700;">80</span></label>
          <input type="range" id="f-mobile" min="1" max="100" value="80" style="width:100%;accent-color:#00D4FF;margin-top:20px;" oninput="document.getElementById('mobileVal').textContent=this.value;livePreview()">
        </div>
      </div>

      <!-- Live preview bar -->
      <div style="background:rgba(0,0,0,0.3);border-radius:14px;padding:16px 20px;border:1px solid rgba(255,255,255,0.05);margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:0.75rem;color:rgba(255,255,255,0.4);">Live Score Preview</span>
          <span id="livePreviewNum" style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;color:#00D4FF;">785</span>
        </div>
        <div style="height:6px;background:rgba(255,255,255,0.05);border-radius:99px;overflow:hidden;position:relative;">
          <div id="liveBar" style="height:100%;width:70%;border-radius:99px;background:linear-gradient(90deg,#ff2050,#f59e0b,#2DD4BF,#00D4FF);transition:width 0.4s ease;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;">
          <span style="font-size:0.65rem;color:rgba(255,255,255,0.25);">300</span>
          <span style="font-size:0.65rem;color:rgba(255,255,255,0.25);">850</span>
        </div>
      </div>

      <!-- Calculate button -->
      <button id="calcBtn" onclick="runCalculation()" class="btn-primary" style="width:100%;justify-content:center;padding:16px;font-size:1rem;border-radius:16px;">
        <i data-lucide="cpu" style="width:18px;height:18px;" id="calcIcon"></i>
        <span id="calcText">Calculate Credit Score</span>
      </button>
    </div>

    <!-- ── RESULT SECTION (shown after calculation) ── -->
    <div id="resultSection" style="display:none;margin-top:28px;">

      <!-- Score summary card -->
      <div class="glass-strong" style="border-radius:24px;padding:32px;margin-bottom:20px;display:flex;align-items:center;gap:32px;flex-wrap:wrap;">
        <div style="text-align:center;flex-shrink:0;">
          <div class="score-ring-wrap" style="width:130px;height:130px;">
            <svg class="score-ring-svg" width="130" height="130" viewBox="0 0 130 130">
              <circle class="score-ring-track" cx="65" cy="65" r="52"/>
              <circle class="score-ring-fill" id="resultRingFill" cx="65" cy="65" r="52" stroke="#00D4FF" stroke-dasharray="327" stroke-dashoffset="327"/>
            </svg>
            <div class="score-ring-number">
              <span id="resultScoreNum" style="font-family:'Syne',sans-serif;font-size:2.2rem;font-weight:800;line-height:1;">—</span>
              <span id="resultBand" style="font-size:0.6rem;font-weight:700;letter-spacing:0.1em;color:#00D4FF;margin-top:2px;">—</span>
            </div>
          </div>
        </div>
        <div style="flex:1;min-width:200px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap;">
            <span id="resultBandBig" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;">—</span>
            <span id="resultDelta" style="font-size:0.85rem;"></span>
          </div>
          <p id="resultDetail" style="color:rgba(255,255,255,0.5);font-size:0.9rem;margin-bottom:16px;line-height:1.6;">—</p>
          <div style="display:flex;gap:20px;flex-wrap:wrap;">
            <div><span style="font-size:0.65rem;color:rgba(255,255,255,0.3);display:block;letter-spacing:0.08em;font-family:'Syne',sans-serif;">DEFAULT RISK</span><span id="resultDefault" style="font-weight:700;font-size:1rem;">—</span></div>
            <div><span style="font-size:0.65rem;color:rgba(255,255,255,0.3);display:block;letter-spacing:0.08em;font-family:'Syne',sans-serif;">PERCENTILE</span><span id="resultPercentile" style="font-weight:700;font-size:1rem;">—</span></div>
          </div>
        </div>
      </div>

      <!-- Two-column: Factors + Loan -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;" id="factorsLoanGrid">

        <!-- AI Explainability Panel -->
        <div class="glass-strong" style="border-radius:24px;padding:28px;grid-column:span 2;" id="explainPanel">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
            <div style="width:32px;height:32px;border-radius:10px;background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.2);display:flex;align-items:center;justify-content:center;">
              <i data-lucide="lightbulb" style="width:16px;height:16px;color:#00D4FF;"></i>
            </div>
            <div>
              <h3 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;line-height:1;">Why This Score?</h3>
              <p style="font-size:0.75rem;color:rgba(255,255,255,0.35);">AI factor breakdown</p>
            </div>
          </div>
          <div id="factorCards" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;"></div>
        </div>

        <!-- Loan Eligibility -->
        <div class="glass-strong" style="border-radius:24px;padding:28px;" id="loanPanel">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
            <div style="width:32px;height:32px;border-radius:10px;background:rgba(45,212,191,0.1);border:1px solid rgba(45,212,191,0.2);display:flex;align-items:center;justify-content:center;">
              <i data-lucide="landmark" style="width:16px;height:16px;color:#2DD4BF;"></i>
            </div>
            <div>
              <h3 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;line-height:1;">Loan Eligibility</h3>
              <p style="font-size:0.75rem;color:rgba(255,255,255,0.35);">Estimated qualification</p>
            </div>
          </div>
          <div id="loanContent"></div>
        </div>

        <!-- Smart Suggestions -->
        <div class="glass-strong" style="border-radius:24px;padding:28px;" id="suggestPanel">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
            <div style="width:32px;height:32px;border-radius:10px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);display:flex;align-items:center;justify-content:center;">
              <i data-lucide="sparkles" style="width:16px;height:16px;color:#8B5CF6;"></i>
            </div>
            <div>
              <h3 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;line-height:1;">Smart Suggestions</h3>
              <p style="font-size:0.75rem;color:rgba(255,255,255,0.35);">Personalized action plan</p>
            </div>
          </div>
          <div id="suggestionsList" style="display:flex;flex-direction:column;gap:8px;"></div>
        </div>
      </div>

      <!-- Analytics charts -->
      <div class="glass-strong" style="border-radius:24px;padding:28px;margin-bottom:20px;" id="analyticsPanel">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;">
          <div style="width:32px;height:32px;border-radius:10px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.2);display:flex;align-items:center;justify-content:center;">
            <i data-lucide="bar-chart-2" style="width:16px;height:16px;color:#8B5CF6;"></i>
          </div>
          <h3 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;">Financial Analytics</h3>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          <div>
            <p style="font-size:0.72rem;color:rgba(255,255,255,0.35);margin-bottom:10px;font-family:'Syne',sans-serif;letter-spacing:0.08em;">SPENDING BREAKDOWN</p>
            <div style="height:200px;position:relative;"><canvas id="spendChart"></canvas></div>
          </div>
          <div>
            <p style="font-size:0.72rem;color:rgba(255,255,255,0.35);margin-bottom:10px;font-family:'Syne',sans-serif;letter-spacing:0.08em;">INCOME VS EXPENSES</p>
            <div style="height:200px;position:relative;"><canvas id="incExpChart"></canvas></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     HOW IT WORKS
══════════════════════════════════════════════════ -->
<div class="section-divider"></div>
<section id="how-it-works" style="padding:80px 24px;position:relative;z-index:10;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:60px;" class="reveal">
      <div style="display:inline-block;padding:4px 16px;border-radius:99px;border:1px solid rgba(45,212,191,0.3);background:rgba(45,212,191,0.07);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;color:#2DD4BF;margin-bottom:14px;font-family:'Syne',sans-serif;">SIMPLE PROCESS</div>
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-0.02em;margin-bottom:12px;">How It Works</h2>
      <p style="color:rgba(255,255,255,0.4);max-width:480px;margin:0 auto;line-height:1.65;font-size:0.95rem;">From input to insight in seconds. Our AI engine transforms your financial data into actionable intelligence.</p>
    </div>

    <!-- Steps grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px;position:relative;">

      <!-- Step 1 -->
      <div class="how-step reveal reveal-delay-1" id="step1">
        <div class="how-step-num">01</div>
        <div class="how-step-icon" style="background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.2);color:#00D4FF;">
          <i data-lucide="file-text" style="width:26px;height:26px;color:#00D4FF;"></i>
        </div>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:10px;">Enter Your Data</h3>
        <p style="font-size:0.83rem;color:rgba(255,255,255,0.45);line-height:1.65;">Input your income, expenses, payment history, and behavioral signals. No credit bureau access needed.</p>
        <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:6px;">
          <span style="padding:3px 10px;border-radius:99px;font-size:0.65rem;font-weight:600;background:rgba(0,212,255,0.08);color:rgba(0,212,255,0.7);border:1px solid rgba(0,212,255,0.15);font-family:'Syne',sans-serif;">Income</span>
          <span style="padding:3px 10px;border-radius:99px;font-size:0.65rem;font-weight:600;background:rgba(0,212,255,0.08);color:rgba(0,212,255,0.7);border:1px solid rgba(0,212,255,0.15);font-family:'Syne',sans-serif;">Expenses</span>
          <span style="padding:3px 10px;border-radius:99px;font-size:0.65rem;font-weight:600;background:rgba(0,212,255,0.08);color:rgba(0,212,255,0.7);border:1px solid rgba(0,212,255,0.15);font-family:'Syne',sans-serif;">Behavior</span>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="how-step reveal reveal-delay-2" id="step2">
        <div class="how-step-num">02</div>
        <div class="how-step-icon" style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.2);color:#8B5CF6;">
          <i data-lucide="cpu" style="width:26px;height:26px;color:#8B5CF6;"></i>
        </div>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:10px;">AI Processing</h3>
        <p style="font-size:0.83rem;color:rgba(255,255,255,0.45);line-height:1.65;">Our ensemble ML model weighs 5 key financial factors using behavioral scoring algorithms and pattern recognition.</p>
        <div style="margin-top:20px;padding:12px 14px;border-radius:12px;background:rgba(139,92,246,0.05);border:1px solid rgba(139,92,246,0.1);">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#8B5CF6;animation:pulse 1.5s infinite;"></span>
            <span style="font-size:0.72rem;color:rgba(255,255,255,0.4);font-family:'Syne',sans-serif;">Processing 47 signals...</span>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="how-step reveal reveal-delay-3" id="step3">
        <div class="how-step-num">03</div>
        <div class="how-step-icon" style="background:rgba(45,212,191,0.08);border:1px solid rgba(45,212,191,0.2);color:#2DD4BF;">
          <i data-lucide="bar-chart-2" style="width:26px;height:26px;color:#2DD4BF;"></i>
        </div>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:10px;">Get Your Score</h3>
        <p style="font-size:0.83rem;color:rgba(255,255,255,0.45);line-height:1.65;">Receive a 300–850 credit score with detailed factor breakdown, default probability, and percentile ranking.</p>
        <div style="margin-top:20px;">
          <div style="height:4px;background:rgba(255,255,255,0.05);border-radius:99px;overflow:hidden;">
            <div style="width:85%;height:100%;background:linear-gradient(90deg,#ff2050,#f59e0b,#2DD4BF,#00D4FF);border-radius:99px;animation:shimmer 2s infinite;position:relative;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;">
            <span style="font-size:0.65rem;color:rgba(255,255,255,0.25);">300</span>
            <span style="font-size:0.65rem;color:#2DD4BF;font-weight:700;">785</span>
            <span style="font-size:0.65rem;color:rgba(255,255,255,0.25);">850</span>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="how-step reveal reveal-delay-4" id="step4">
        <div class="how-step-num">04</div>
        <div class="how-step-icon" style="background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.2);color:#00D4FF;">
          <i data-lucide="sparkles" style="width:26px;height:26px;color:#00D4FF;"></i>
        </div>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;margin-bottom:10px;">Actionable Insights</h3>
        <p style="font-size:0.83rem;color:rgba(255,255,255,0.45);line-height:1.65;">Get personalized recommendations, loan eligibility estimates, and a step-by-step plan to improve your score.</p>
        <div style="margin-top:20px;display:flex;align-items:center;gap:8px;">
          <div style="width:28px;height:28px;border-radius:8px;background:rgba(45,212,191,0.1);border:1px solid rgba(45,212,191,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i data-lucide="trending-up" style="width:14px;height:14px;color:#2DD4BF;"></i>
          </div>
          <span style="font-size:0.78rem;color:rgba(255,255,255,0.5);">Up to <span style="color:#2DD4BF;font-weight:700;">+150 pts</span> improvement path</span>
        </div>
      </div>
    </div>

    <!-- Stats row -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:60px;" class="reveal">
      <div class="stat-box">
        <div class="stat-num" id="stat1">0</div><span style="font-size:0.7rem;">ms</span>
        <p style="color:rgba(255,255,255,0.35);font-size:0.78rem;margin-top:6px;font-family:'Syne',sans-serif;letter-spacing:0.05em;">RESPONSE TIME</p>
      </div>
      <div class="stat-box">
        <div class="stat-num" id="stat2">0</div><span style="font-size:0.7rem;">+</span>
        <p style="color:rgba(255,255,255,0.35);font-size:0.78rem;margin-top:6px;font-family:'Syne',sans-serif;letter-spacing:0.05em;">SIGNALS ANALYZED</p>
      </div>
      <div class="stat-box">
        <div class="stat-num" id="stat3">0</div><span style="font-size:0.7rem;">%</span>
        <p style="color:rgba(255,255,255,0.35);font-size:0.78rem;margin-top:6px;font-family:'Syne',sans-serif;letter-spacing:0.05em;">ACCURACY RATE</p>
      </div>
      <div class="stat-box">
        <div class="stat-num" id="stat4">0</div><span style="font-size:0.7rem;">K+</span>
        <p style="color:rgba(255,255,255,0.35);font-size:0.78rem;margin-top:6px;font-family:'Syne',sans-serif;letter-spacing:0.05em;">ASSESSMENTS DONE</p>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     FEATURES
══════════════════════════════════════════════════ -->
<div class="section-divider"></div>
<section id="features" style="padding:80px 24px;position:relative;z-index:10;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:60px;" class="reveal">
      <div style="display:inline-block;padding:4px 14px;border-radius:99px;border:1px solid rgba(0,212,255,0.25);background:rgba(0,212,255,0.06);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;color:#00D4FF;margin-bottom:14px;font-family:'Syne',sans-serif;">PLATFORM CAPABILITIES</div>
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-0.02em;">Intelligence at the Core</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;">
      <div class="feat-card reveal reveal-delay-1" style="--card-accent: linear-gradient(90deg, #00D4FF, #8B5CF6);">
        <div class="feat-card-icon" style="width:48px;height:48px;border-radius:14px;background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.15);display:flex;align-items:center;justify-content:center;margin-bottom:18px;"><i data-lucide="lightbulb" style="width:22px;height:22px;color:#00D4FF;"></i></div>
        <h3 style="font-size:1rem;font-weight:700;margin-bottom:10px;font-family:'Syne',sans-serif;">AI Explainability</h3>
        <p style="font-size:0.82rem;color:rgba(255,255,255,0.4);line-height:1.65;">Full factor breakdown showing exactly how each input affects your credit score with transparent reasoning.</p>
        <div style="margin-top:16px;display:flex;align-items:center;gap:6px;color:#00D4FF;font-size:0.78rem;font-weight:600;font-family:'Syne',sans-serif;">
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i> Full transparency
        </div>
      </div>
      <div class="feat-card reveal reveal-delay-2" style="--card-accent: linear-gradient(90deg, #8B5CF6, #2DD4BF);">
        <div class="feat-card-icon" style="width:48px;height:48px;border-radius:14px;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);display:flex;align-items:center;justify-content:center;margin-bottom:18px;"><i data-lucide="brain-circuit" style="width:22px;height:22px;color:#8B5CF6;"></i></div>
        <h3 style="font-size:1rem;font-weight:700;margin-bottom:10px;font-family:'Syne',sans-serif;">ML Scoring Engine</h3>
        <p style="font-size:0.82rem;color:rgba(255,255,255,0.4);line-height:1.65;">Weighted ensemble model with behavioral, financial, and alternative data signals for maximum accuracy.</p>
        <div style="margin-top:16px;display:flex;align-items:center;gap:6px;color:#8B5CF6;font-size:0.78rem;font-weight:600;font-family:'Syne',sans-serif;">
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i> 47 unique signals
        </div>
      </div>
      <div class="feat-card reveal reveal-delay-3" style="--card-accent: linear-gradient(90deg, #2DD4BF, #00D4FF);">
        <div class="feat-card-icon" style="width:48px;height:48px;border-radius:14px;background:rgba(45,212,191,0.08);border:1px solid rgba(45,212,191,0.15);display:flex;align-items:center;justify-content:center;margin-bottom:18px;"><i data-lucide="landmark" style="width:22px;height:22px;color:#2DD4BF;"></i></div>
        <h3 style="font-size:1rem;font-weight:700;margin-bottom:10px;font-family:'Syne',sans-serif;">Loan Eligibility</h3>
        <p style="font-size:0.82rem;color:rgba(255,255,255,0.4);line-height:1.65;">Instant loan amount estimates with interest rate ranges based on your score tier and risk profile.</p>
        <div style="margin-top:16px;display:flex;align-items:center;gap:6px;color:#2DD4BF;font-size:0.78rem;font-weight:600;font-family:'Syne',sans-serif;">
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i> Up to $500K
        </div>
      </div>
      <div class="feat-card reveal reveal-delay-4" style="--card-accent: linear-gradient(90deg, #00D4FF, #2DD4BF);">
        <div class="feat-card-icon" style="width:48px;height:48px;border-radius:14px;background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.15);display:flex;align-items:center;justify-content:center;margin-bottom:18px;"><i data-lucide="sparkles" style="width:22px;height:22px;color:#00D4FF;"></i></div>
        <h3 style="font-size:1rem;font-weight:700;margin-bottom:10px;font-family:'Syne',sans-serif;">Smart Suggestions</h3>
        <p style="font-size:0.82rem;color:rgba(255,255,255,0.4);line-height:1.65;">Personalized action plans with estimated point gains for each recommendation to maximize your score.</p>
        <div style="margin-top:16px;display:flex;align-items:center;gap:6px;color:#00D4FF;font-size:0.78rem;font-weight:600;font-family:'Syne',sans-serif;">
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i> +150 pts potential
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>
<section id="dashboard-section" style="padding:80px 24px;position:relative;z-index:10;background:rgba(0,0,0,0.15);">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:60px;" class="reveal">
      <div style="display:inline-block;padding:4px 14px;border-radius:99px;border:1px solid rgba(139,92,246,0.3);background:rgba(139,92,246,0.07);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;color:#8B5CF6;margin-bottom:14px;font-family:'Syne',sans-serif;">ANALYTICS DASHBOARD</div>
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;letter-spacing:-0.02em;">Portfolio Intelligence</h2>
    </div>

    <div style="display:grid;grid-template-columns:2fr 1fr;gap:20px;align-items:start;">
      <!-- Trend chart -->
      <div class="glass-strong reveal" style="border-radius:24px;padding:28px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
          <div>
            <h3 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;margin-bottom:2px;">Score Trend</h3>
            <p style="font-size:0.75rem;color:rgba(255,255,255,0.35);">Historical performance over time</p>
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:99px;background:rgba(45,212,191,0.08);border:1px solid rgba(45,212,191,0.2);">
            <span style="width:6px;height:6px;border-radius:50%;background:#2DD4BF;animation:pulse 2s infinite;"></span>
            <span style="font-size:0.65rem;font-weight:700;color:#2DD4BF;font-family:'Syne',sans-serif;">LIVE</span>
          </div>
        </div>
        <div style="height:220px;"><canvas id="trendChart"></canvas></div>
      </div>

      <!-- Right column stats -->
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="glass-strong reveal" style="border-radius:24px;padding:24px;">
          <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.35);margin-bottom:8px;font-family:'Syne',sans-serif;">APPROVAL RATE</p>
          <div class="stat-value" id="dashApproval" style="color:#2DD4BF;margin-bottom:10px;">84%</div>
          <div style="height:4px;background:rgba(255,255,255,0.05);border-radius:99px;overflow:hidden;">
            <div id="dashApprovalBar" style="height:100%;width:84%;background:linear-gradient(90deg,#2DD4BF,#06b6d4);border-radius:99px;transition:width 0.8s;"></div>
          </div>
        </div>
        <div class="glass-strong reveal" style="border-radius:24px;padding:24px;">
          <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.35);margin-bottom:8px;font-family:'Syne',sans-serif;">AVG DEFAULT RISK</p>
          <div class="stat-value" id="dashDefault" style="color:#f59e0b;">2.4%</div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.3);margin-top:4px;">Portfolio-wide risk exposure</p>
        </div>
        <div class="glass-strong reveal" style="border-radius:24px;padding:24px;">
          <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.35);margin-bottom:8px;font-family:'Syne',sans-serif;">TOTAL ASSESSMENTS</p>
          <div class="stat-value" id="dashTotal" style="color:#fff;">—</div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.3);margin-top:4px;">Checks performed</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     HISTORY + PROFILE SECTION (logged-in only)
══════════════════════════════════════════════════ -->
<div class="section-divider" id="hist-divider" style="display:none;"></div>
<section id="history-section" style="padding:80px 24px;position:relative;z-index:10;display:none;">
  <div style="max-width:900px;margin:0 auto;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:40px;flex-wrap:wrap;gap:16px;">
      <div>
        <h2 style="font-family:'Syne',sans-serif;font-size:2rem;font-weight:800;margin-bottom:4px;">Score History</h2>
        <p style="color:rgba(255,255,255,0.35);">Your complete credit assessment record</p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn-ghost btn-sm" onclick="exportCSV()"><i data-lucide="download" style="width:14px;height:14px;"></i> Export</button>
        <button class="btn-ghost btn-sm" onclick="clearHistory()" style="color:rgba(255,80,80,0.7);border-color:rgba(255,80,80,0.2);" onmouseover="this.style.color='#ff2050'" onmouseout="this.style.color='rgba(255,80,80,0.7)'"><i data-lucide="trash-2" style="width:14px;height:14px;"></i> Clear</button>
      </div>
    </div>

    <!-- Profile card -->
    <div class="glass-strong" style="border-radius:24px;padding:28px;margin-bottom:24px;">
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
        <div class="profile-avatar-ring" id="profileAvatar">U</div>
        <div style="flex:1;">
          <div id="profileName" style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;margin-bottom:2px;">—</div>
          <div id="profileEmail" style="font-size:0.85rem;color:rgba(255,255,255,0.4);">—</div>
        </div>
        <div style="display:flex;gap:16px;flex-wrap:wrap;">
          <div style="text-align:center;">
            <div id="profTotal" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;color:#00D4FF;">0</div>
            <div style="font-size:0.65rem;color:rgba(255,255,255,0.35);letter-spacing:0.08em;font-family:'Syne',sans-serif;">TOTAL CHECKS</div>
          </div>
          <div style="text-align:center;">
            <div id="profBest" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;color:#2DD4BF;">—</div>
            <div style="font-size:0.65rem;color:rgba(255,255,255,0.35);letter-spacing:0.08em;font-family:'Syne',sans-serif;">BEST SCORE</div>
          </div>
          <div style="text-align:center;">
            <div id="profAvg" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;">—</div>
            <div style="font-size:0.65rem;color:rgba(255,255,255,0.35);letter-spacing:0.08em;font-family:'Syne',sans-serif;">AVG SCORE</div>
          </div>
          <div style="text-align:center;">
            <div id="profLatest" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:800;color:#8B5CF6;">—</div>
            <div style="font-size:0.65rem;color:rgba(255,255,255,0.35);letter-spacing:0.08em;font-family:'Syne',sans-serif;">LATEST</div>
          </div>
        </div>
      </div>
    </div>

    <!-- History chart -->
    <div class="glass-strong" style="border-radius:24px;padding:28px;margin-bottom:20px;" id="histChartContainer" style="display:none;">
      <h3 style="font-family:'Syne',sans-serif;font-size:0.85rem;font-weight:700;color:rgba(255,255,255,0.4);letter-spacing:0.1em;margin-bottom:16px;">SCORE TREND</h3>
      <div style="height:180px;"><canvas id="histChart"></canvas></div>
    </div>

    <!-- History list -->
    <div class="glass-strong" style="border-radius:24px;overflow:hidden;">
      <div id="histEmpty" style="text-align:center;padding:60px 24px;color:rgba(255,255,255,0.3);">
        <i data-lucide="inbox" style="width:40px;height:40px;margin:0 auto 12px;display:block;opacity:0.3;"></i>
        <p style="font-size:0.9rem;">No assessments yet. Calculate your first score above!</p>
      </div>
      <div id="histRows"></div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════════
     ENHANCED FOOTER
══════════════════════════════════════════════════ -->
<div class="section-divider"></div>
<footer style="padding:60px 24px 32px;position:relative;z-index:10;background:rgba(0,0,0,0.2);">
  <div style="max-width:1100px;margin:0 auto;">

    <!-- Footer top grid -->
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;flex-wrap:wrap;">

      <!-- Brand column -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <svg width="32" height="32" viewBox="0 0 36 36" class="logo-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00D4FF"/><stop offset="100%" stop-color="#8B5CF6"/></linearGradient>
              <linearGradient id="flg2" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2DD4BF"/><stop offset="100%" stop-color="#00D4FF"/></linearGradient>
            </defs>
            <circle cx="18" cy="18" r="15" fill="none" stroke="url(#flg1)" stroke-width="1.5" stroke-dasharray="60 35" class="logo-ring-outer"/>
            <circle cx="18" cy="18" r="10" fill="none" stroke="url(#flg2)" stroke-width="1" stroke-dasharray="40 23" class="logo-ring-inner"/>
            <polygon points="18,8 26,18 18,28 10,18" fill="none" stroke="url(#flg1)" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="18" cy="18" r="3" fill="url(#flg1)"/>
            <circle cx="18" cy="8" r="1.5" fill="#00D4FF" opacity="0.8"/>
            <circle cx="26" cy="18" r="1.5" fill="#8B5CF6" opacity="0.8"/>
            <circle cx="18" cy="28" r="1.5" fill="#2DD4BF" opacity="0.8"/>
            <circle cx="10" cy="18" r="1.5" fill="#00D4FF" opacity="0.8"/>
          </svg>
          <span style="font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:800;"><span style="background:linear-gradient(90deg,#00D4FF,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Cred</span><span style="color:#fff;">AI</span></span>
        </div>
        <p style="color:rgba(255,255,255,0.35);font-size:0.85rem;line-height:1.7;max-width:240px;margin-bottom:20px;">Next-generation AI credit risk assessment platform. Empowering financial decisions with transparent intelligence.</p>
        <!-- Social links -->
        <div style="display:flex;gap:8px;">
          <a href="#" class="footer-social" title="Twitter/X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="footer-social" title="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="footer-social" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="#" class="footer-social" title="Discord">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
          </a>
        </div>
      </div>

      <!-- Product links -->
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.5);margin-bottom:16px;text-transform:uppercase;">Product</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#assessment" class="footer-link">Credit Assessment</a>
          <a href="#how-it-works" class="footer-link">How It Works</a>
          <a href="#features" class="footer-link">Features</a>
          <a href="#dashboard-section" class="footer-link">Analytics Dashboard</a>
          <a href="#" class="footer-link">API Access</a>
          <a href="#" class="footer-link">Pricing</a>
        </div>
      </div>

      <!-- Company links -->
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.5);margin-bottom:16px;text-transform:uppercase;">Company</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" class="footer-link">About Us</a>
          <a href="#" class="footer-link">Blog</a>
          <a href="#" class="footer-link">Careers</a>
          <a href="#" class="footer-link">Press Kit</a>
          <a href="#" class="footer-link">Contact</a>
        </div>
      </div>

      <!-- Legal/Support links -->
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.5);margin-bottom:16px;text-transform:uppercase;">Legal & Support</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Data Security</a>
          <a href="#" class="footer-link">Help Center</a>
          <a href="#" class="footer-link">Status Page</a>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div style="padding:28px 32px;border-radius:20px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);margin-bottom:40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;" class="glow-border">
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;margin-bottom:4px;">Stay in the loop</h4>
        <p style="font-size:0.82rem;color:rgba(255,255,255,0.35);">Get the latest fintech insights and product updates.</p>
      </div>
      <div style="display:flex;min-width:280px;">
        <input class="newsletter-input" type="email" placeholder="you@example.com">
        <button class="newsletter-btn">Subscribe →</button>
      </div>
    </div>

    <!-- Footer bottom -->
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.05);">
      <div style="font-size:0.78rem;color:rgba(255,255,255,0.2);">© 2025 CredAI · AI-Powered Credit Risk Assessment · Built for placement showcase</div>
      <div style="display:flex;gap:20px;flex-wrap:wrap;">
        <a href="#" class="footer-link" style="font-size:0.78rem;">Privacy</a>
        <a href="#" class="footer-link" style="font-size:0.78rem;">Terms</a>
        <a href="#" class="footer-link" style="font-size:0.78rem;">Cookies</a>
        <a href="#" class="footer-link" style="font-size:0.78rem;">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
`,Lf=`"use strict";

// ── Config ────────────────────────────────────────
const API_BASE = "http://localhost:5000/api";  // Change in prod
const DB_KEY   = "credai_v2_users";
const SES_KEY  = "credai_v2_session";

// ── Storage helpers ───────────────────────────────
const getUsers   = () => { try { return JSON.parse(localStorage.getItem(DB_KEY)||'{}'); } catch(e){return{};} };
const saveUsers  = u  => localStorage.setItem(DB_KEY, JSON.stringify(u));
const getSession = () => { try { return JSON.parse(sessionStorage.getItem(SES_KEY)); } catch(e){return null;} };
const setSession = s  => sessionStorage.setItem(SES_KEY, JSON.stringify(s));
const clearSession = ()=> sessionStorage.removeItem(SES_KEY);

// ── Password hash (frontend fallback) ────────────
async function hashPw(pw) {
  const enc  = new TextEncoder().encode("credai_salt_v2" + pw);
  const buf  = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

// ── Toast system ──────────────────────────────────
function toast(msg, type = "info") {
  const wrap  = document.getElementById('toastWrap');
  const colors = { success:'#2DD4BF', error:'#ff2050', warning:'#f59e0b', info:'#00D4FF' };
  const item  = document.createElement('div');
  item.className = 'toast-item';
  item.innerHTML = \`<span class="toast-dot" style="background:\${colors[type]||colors.info};box-shadow:0 0 8px \${colors[type]||colors.info};"></span><span>\${msg}</span>\`;
  wrap.appendChild(item);
  requestAnimationFrame(() => { requestAnimationFrame(() => item.classList.add('show')); });
  setTimeout(() => { item.classList.remove('show'); setTimeout(()=>item.remove(),500); }, 4000);
}

// ── Auth Modal ────────────────────────────────────
function openAuth(tab='login')   { document.getElementById('authModal').style.display='flex'; switchTab(tab); lucide.createIcons(); }
function closeAuth()             { document.getElementById('authModal').style.display='none'; }
function switchTab(t) {
  document.getElementById('formLogin').style.display  = t==='login'  ? 'block':'none';
  document.getElementById('formSignup').style.display = t==='signup' ? 'block':'none';
  document.getElementById('tabLogin').classList.toggle('active',  t==='login');
  document.getElementById('tabSignup').classList.toggle('active', t==='signup');
  document.getElementById('li-err').style.display = 'none';
  document.getElementById('su-err').style.display = 'none';
}

async function handleLogin() {
  const email = document.getElementById('li-email').value.trim().toLowerCase();
  const pw    = document.getElementById('li-pass').value;
  const errEl = document.getElementById('li-err');
  if (!email||!pw) { errEl.textContent='Please fill all fields.'; errEl.style.display='block'; return; }

  // Try backend first
  try {
    const res = await apiFetch('/auth/login', 'POST', { email, password: pw });
    if (res.ok) {
      const d = await res.json();
      setSession({ email, name: d.name, token: d.token });
      closeAuth(); loginUI(d.name, email); loadHistory(email);
      toast('Welcome back, ' + d.name + '!', 'success'); return;
    }
  } catch(e) { /* fall through to local */ }

  // Local fallback
  const users = getUsers();
  const hash  = await hashPw(pw);
  if (!users[email] || users[email].pw !== hash) {
    errEl.textContent = 'Invalid credentials.'; errEl.style.display = 'block'; return;
  }
  setSession({ email, name: users[email].name });
  closeAuth(); loginUI(users[email].name, email); loadHistory(email);
  toast('Welcome back, ' + users[email].name + '!', 'success');
}

async function handleSignup() {
  const name  = document.getElementById('su-name').value.trim();
  const email = document.getElementById('su-email').value.trim().toLowerCase();
  const pw    = document.getElementById('su-pass').value;
  const errEl = document.getElementById('su-err');
  if (!name||!email||!pw) { errEl.textContent='Please fill all fields.'; errEl.style.display='block'; return; }
  if (pw.length<6) { errEl.textContent='Password must be 6+ characters.'; errEl.style.display='block'; return; }
  if (!/\\S+@\\S+\\.\\S+/.test(email)) { errEl.textContent='Invalid email.'; errEl.style.display='block'; return; }

  // Try backend
  try {
    const res = await apiFetch('/auth/register', 'POST', { name, email, password: pw });
    if (res.ok) {
      const d = await res.json();
      setSession({ email, name, token: d.token });
      closeAuth(); loginUI(name, email);
      toast('Account created! Welcome, ' + name + '!', 'success'); return;
    }
    if (res.status===409) { errEl.textContent='Account already exists.'; errEl.style.display='block'; return; }
  } catch(e) { /* local fallback */ }

  // Local fallback
  const users = getUsers();
  if (users[email]) { errEl.textContent='Account already exists.'; errEl.style.display='block'; return; }
  const hash = await hashPw(pw);
  users[email] = { name, pw: hash, history: [] };
  saveUsers(users);
  setSession({ email, name });
  closeAuth(); loginUI(name, email);
  toast('Account created! Welcome, ' + name + '!', 'success');
}

function handleLogout() {
  clearSession(); logoutUI();
  toast('Signed out successfully.', 'info');
}

// ── UI state ──────────────────────────────────────
function loginUI(name, email) {
  document.getElementById('navLoggedOut').style.display = 'none';
  document.getElementById('navLoggedIn').style.display  = 'flex';
  document.getElementById('heroSignupBtn').style.display= 'none';
  document.getElementById('navName').textContent = name.split(' ')[0];
  document.getElementById('navAvatar').textContent = name.charAt(0).toUpperCase();
  document.getElementById('navHistoryLink').style.display = 'block';
  document.getElementById('history-section').style.display = 'block';
  document.getElementById('profileName').textContent  = name;
  document.getElementById('profileEmail').textContent = email;
  document.getElementById('profileAvatar').textContent = name.charAt(0).toUpperCase();
  lucide.createIcons();
}

function logoutUI() {
  document.getElementById('navLoggedOut').style.display = 'block';
  document.getElementById('navLoggedIn').style.display  = 'none';
  document.getElementById('heroSignupBtn').style.display= 'inline-flex';
  document.getElementById('navHistoryLink').style.display = 'none';
  document.getElementById('history-section').style.display= 'none';
  lucide.createIcons();
}

// ── API helper ────────────────────────────────────
async function apiFetch(path, method='GET', body=null) {
  const opts = { method, headers: { 'Content-Type':'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  return fetch(API_BASE + path, opts);
}

// ── Score computation (local fallback) ───────────
function computeScoreLocal(income, expenses, transactions, mobile, payHist, util) {
  const savingsRatio = income > 0 ? Math.max(0, (income - expenses) / income) : 0;
  const savingsPts   = Math.round(savingsRatio * 180);
  const phPts        = Math.round((payHist / 100) * 150);
  const txPts        = Math.round(Math.min(transactions, 100) * 0.8);
  const mobPts       = Math.round((mobile / 100) * 80);
  const utilPts      = Math.round(Math.max(0, (100 - util) / 100) * 60);
  const total        = 300 + savingsPts + phPts + txPts + mobPts + utilPts;
  const score        = Math.max(300, Math.min(850, total));

  const bands = [
    [750,850,"EXCELLENT","Prime rates apply. Outstanding financial health.","#00D4FF",0.01],
    [700,749,"LOW RISK","Strong profile. Most loans approved easily.","#06b6d4",0.03],
    [650,699,"MODERATE","Good standing. Slightly higher rates possible.","#a78bfa",0.06],
    [580,649,"MEDIUM RISK","Fair. Consider reducing utilization.","#f59e0b",0.10],
    [500,579,"HIGH RISK","Below average. Focus on payment consistency.","#f97316",0.16],
    [300,499,"VERY HIGH RISK","Needs significant improvement.","#ef4444",0.25],
  ];

  let band="HIGH RISK", detail="Needs improvement.", color="#f97316", dp=0.16;
  for (const [lo,hi,b,d,c,p] of bands) {
    if (score>=lo && score<=hi) { band=b;detail=d;color=c;dp=p; break; }
  }

  // Local factor breakdown
  const factors = [
    { name:"Income & Savings", icon:"trending-up",   contribution:savingsPts, maxPossible:180, actualPct:(savingsRatio*100).toFixed(1), tip: savingsRatio>=0.45?"Excellent savings discipline!":savingsRatio>=0.25?"Good savings. Target 45%+ ratio.":"Reduce expenses to improve savings ratio.", color:savingsRatio>=0.45?"green":savingsRatio>=0.25?"amber":"red" },
    { name:"Payment History",  icon:"calendar-check", contribution:phPts,     maxPossible:150, actualPct:(payHist).toFixed(1),    tip: payHist>=90?"Perfect payment record!":payHist>=65?"Mostly on-time. Automate bills.":"Late payments hurt score. Prioritize timely payments.", color:payHist>=90?"green":payHist>=65?"amber":"red" },
    { name:"Transaction Activity", icon:"repeat",     contribution:txPts,     maxPossible:80,  actualPct:(Math.min(transactions,100)).toFixed(1), tip: transactions>=60?"High activity — great behavioral signal.":transactions>=30?"Moderate activity.":"Increase regular activity to build history.", color:transactions>=60?"green":transactions>=30?"amber":"red" },
    { name:"Behavioral Score", icon:"smartphone",     contribution:mobPts,    maxPossible:80,  actualPct:(mobile).toFixed(1),       tip: mobile>=70?"Strong digital footprint!":mobile>=40?"Moderate engagement.":"Low digital usage.", color:mobile>=70?"green":mobile>=40?"amber":"red" },
    { name:"Credit Utilization",icon:"pie-chart",     contribution:utilPts,   maxPossible:60,  actualPct:((100-util)).toFixed(1),   tip: util<=20?"Excellent — below 20% is ideal!":util<=40?"Acceptable — aim for <30%.":"High utilization hurts score. Pay down balances.", color:util<=20?"green":util<=40?"amber":"red" },
  ];

  // Suggestions
  const sugg = [];
  if (savingsRatio<0.30) sugg.push(\`💰 Reduce monthly expenses by ~$\${Math.round(expenses-income*0.70).toLocaleString()} to hit a 30% savings ratio\`);
  if (payHist<75) sugg.push("📅 Set up auto-pay — on-time payments contribute up to 150 pts");
  if (util>30) sugg.push(\`💳 Lower credit utilization from \${util}% to below 30%\`);
  if (transactions<40) sugg.push("🔁 Increase monthly transactions to 40+ for better behavioral scoring");
  if (mobile<60) sugg.push("📱 Higher digital engagement improves alternative data scoring");
  if (score>=700) sugg.push("🏆 Your profile qualifies for premium credit products!");

  // Loan
  const annualIncome = income * 12;
  let loan;
  if (score>=750) loan = { eligible:true, maxAmount:Math.min(annualIncome*5,500000), rateMin:4.5, rateMax:7.5, tier:"prime" };
  else if (score>=700) loan = { eligible:true, maxAmount:Math.min(annualIncome*3.5,300000), rateMin:7.5, rateMax:11, tier:"standard" };
  else if (score>=650) loan = { eligible:true, maxAmount:Math.min(annualIncome*2,150000), rateMin:11, rateMax:16, tier:"standard" };
  else if (score>=580) loan = { eligible:true, maxAmount:Math.min(annualIncome*1,75000), rateMin:16, rateMax:22, tier:"subprime" };
  else if (score>=500) loan = { eligible:true, maxAmount:Math.min((income-expenses)*12,25000), rateMin:22, rateMax:28, tier:"subprime" };
  else loan = { eligible:false, maxAmount:0, rateMin:0, rateMax:0, tier:"declined" };

  return { score, band, detail, color, defaultProbability:(dp*100).toFixed(1), factors, suggestions:sugg.slice(0,5), loan, delta:null };
}

// ── Live preview ──────────────────────────────────
function livePreview() {
  const income   = parseFloat(document.getElementById('f-income').value)||0;
  const expenses = parseFloat(document.getElementById('f-expenses').value)||0;
  const tx       = parseFloat(document.getElementById('f-transactions').value)||0;
  const mob      = parseFloat(document.getElementById('f-mobile').value)||80;
  const ph       = parseFloat(document.getElementById('f-paymentHistory').value)||100;
  const util     = parseFloat(document.getElementById('f-creditUtil').value)||30;
  const r        = computeScoreLocal(income, expenses, tx, mob, ph, util);
  document.getElementById('livePreviewNum').textContent = r.score;
  document.getElementById('liveBar').style.width = ((r.score-300)/550*100)+'%';
}

// ── Main calculation ──────────────────────────────
let lastScore = null;
let spendChart = null, incExpChart = null, trendChartInstance = null, histChartInstance = null;

async function runCalculation() {
  const btn  = document.getElementById('calcBtn');
  const icon = document.getElementById('calcIcon');
  const text = document.getElementById('calcText');
  if (btn.disabled) return;

  // Loading state
  btn.disabled = true;
  icon.outerHTML = \`<div class="loader" id="calcIcon"></div>\`;
  text.textContent = 'Analyzing…';

  const income   = parseFloat(document.getElementById('f-income').value)||0;
  const expenses = parseFloat(document.getElementById('f-expenses').value)||0;
  const tx       = parseInt(document.getElementById('f-transactions').value)||0;
  const mob      = parseFloat(document.getElementById('f-mobile').value)||80;
  const ph       = parseFloat(document.getElementById('f-paymentHistory').value)||100;
  const util     = parseFloat(document.getElementById('f-creditUtil').value)||30;

  let result;

  // Validate
  if (expenses > income * 1.5) { toast('Expenses seem unusually high. Please check your inputs.', 'warning'); }

  // Try backend API
  try {
    const session = getSession();
    const res = await Promise.race([
      apiFetch('/predict', 'POST', { income, expenses, transactions: tx, mobileUsage: mob, paymentHistory: ph, creditUtil: util, previousScore: lastScore }),
      new Promise((_,rej) => setTimeout(()=>rej(new Error('timeout')), 3000))
    ]);
    if (res.ok) result = await res.json();
    else throw new Error('API error');
  } catch(e) {
    // Frontend fallback
    result = computeScoreLocal(income, expenses, tx, mob, ph, util);
    if (lastScore !== null) result.delta = result.score - lastScore;
  }

  // Simulate slight delay for realism
  await new Promise(r => setTimeout(r, 600));

  // Restore button
  btn.disabled = false;
  btn.innerHTML = \`<i data-lucide="check-circle" style="width:18px;height:18px;" id="calcIcon"></i><span id="calcText">Score Calculated!</span>\`;
  lucide.createIcons();
  setTimeout(() => {
    btn.innerHTML = \`<i data-lucide="refresh-cw" style="width:18px;height:18px;" id="calcIcon"></i><span id="calcText">Recalculate</span>\`;
    lucide.createIcons();
  }, 3500);

  // Render result
  renderResult(result, income, expenses);

  // Save to history
  const session = getSession();
  if (session) {
    const entry = { score: result.score, band: result.band, income, expenses, transactions: tx, mobileUsage: mob, creditUtil: util, date: new Date().toISOString() };
    try {
      await apiFetch(\`/history/\${session.email}\`, 'POST', entry);
    } catch(e) { /* local save */ }
    saveLocalHistory(session.email, entry);
    loadHistory(session.email);

    // Alert on delta
    if (result.delta !== null) {
      if (result.delta > 0) toast(\`🎉 Score up \${result.delta} pts! Great improvement.\`, 'success');
      else if (result.delta < 0) toast(\`⚠️ Score dropped by \${Math.abs(result.delta)} pts.\`, 'warning');
    }
    if (result.loan?.eligible && result.score >= 700) toast('🏦 You qualify for prime loan rates!', 'success');
  } else {
    toast('Sign in to save your score history!', 'info');
  }

  lastScore = result.score;
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultSection').scrollIntoView({ behavior:'smooth', block:'nearest' });
}

// ── Render result ─────────────────────────────────
function renderResult(r, income, expenses) {
  // Animate hero ring
  animRing('heroRingFill', r.score, 408, 65);
  document.getElementById('heroScore').textContent = r.score;
  document.getElementById('heroScoreLabel').textContent = r.band;

  // Animate result ring
  animRing('resultRingFill', r.score, 327, 52);

  // Score number animate
  animNumber('resultScoreNum', 0, r.score, 900);

  // Labels
  document.getElementById('resultBand').textContent    = r.band;
  document.getElementById('resultBandBig').textContent = r.band;
  document.getElementById('resultBandBig').style.color = r.color;
  document.getElementById('resultDetail').textContent  = r.detail;
  document.getElementById('resultDefault').textContent = r.defaultProbability + '%';
  document.getElementById('resultDefault').style.color = parseFloat(r.defaultProbability)<=5?'#2DD4BF':parseFloat(r.defaultProbability)<=12?'#f59e0b':'#ff2050';

  // Percentile estimate
  const pct = Math.round(((r.score-300)/550)*85+5);
  document.getElementById('resultPercentile').textContent = 'Top ' + (100-pct) + '%';

  // Delta
  const deltaEl = document.getElementById('resultDelta');
  if (r.delta !== null && r.delta !== undefined) {
    deltaEl.textContent = (r.delta>0?'↑ +':'↓ ')+r.delta+' pts';
    deltaEl.className   = r.delta>0?'delta-up':r.delta<0?'delta-down':'delta-same';
  } else { deltaEl.textContent = 'First check'; deltaEl.className = 'delta-same'; }

  // Factor cards (AI explainability)
  const fc = document.getElementById('factorCards');
  fc.innerHTML = r.factors.map(f => \`
    <div class="factor-card bg-\${f.color}-faint">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <i data-lucide="\${f.icon}" style="width:15px;height:15px;" class="col-\${f.color}"></i>
          <span style="font-size:0.78rem;font-weight:600;font-family:'Syne',sans-serif;">\${f.name}</span>
        </div>
        <span style="font-size:1rem;font-weight:800;font-family:'Syne',sans-serif;" class="col-\${f.color}">+\${f.contribution}</span>
      </div>
      <div class="factor-bar-bg" style="margin-bottom:8px;">
        <div class="factor-bar bar-\${f.color}" data-width="\${Math.round(f.contribution/f.maxPossible*100)}%" style="width:0%;"></div>
      </div>
      <p style="font-size:0.72rem;color:rgba(255,255,255,0.4);line-height:1.4;">\${f.tip}</p>
      <div style="display:flex;justify-content:space-between;margin-top:6px;">
        <span style="font-size:0.65rem;color:rgba(255,255,255,0.25);">Contribution</span>
        <span style="font-size:0.65rem;font-weight:700;" class="col-\${f.color}">\${f.contribution} / \${f.maxPossible} pts</span>
      </div>
    </div>
  \`).join('');
  lucide.createIcons();

  // Animate factor bars after DOM paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.factor-bar').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  });

  // Loan panel
  const lc = document.getElementById('loanContent');
  const loan = r.loan;
  if (loan.eligible) {
    lc.innerHTML = \`
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
        <span class="loan-badge tier-\${loan.tier}" style="font-size:0.75rem;padding:5px 14px;">\${loan.tier.toUpperCase()}</span>
        <span style="font-size:0.9rem;color:rgba(255,255,255,0.7);">Eligible</span>
      </div>
      <div style="margin-bottom:14px;">
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.3);letter-spacing:0.08em;font-family:'Syne',sans-serif;margin-bottom:4px;">ESTIMATED MAX LOAN</div>
        <div style="font-family:'Syne',sans-serif;font-size:2rem;font-weight:800;">$\${loan.maxAmount.toLocaleString()}</div>
      </div>
      <div style="background:rgba(255,255,255,0.03);border-radius:12px;padding:12px 14px;border:1px solid rgba(255,255,255,0.05);">
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.35);margin-bottom:4px;">INTEREST RATE RANGE</div>
        <div style="font-size:1.1rem;font-weight:700;font-family:'Syne',sans-serif;color:#2DD4BF;">\${loan.rateMin}% – \${loan.rateMax}%</div>
        <div style="font-size:0.72rem;color:rgba(255,255,255,0.3);margin-top:4px;">APR · Subject to lender approval</div>
      </div>
    \`;
  } else {
    lc.innerHTML = \`
      <div style="text-align:center;padding:20px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,32,80,0.1);border:1px solid rgba(255,32,80,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;"><i data-lucide="x-circle" style="width:22px;height:22px;color:#ff2050;"></i></div>
        <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;margin-bottom:8px;">Not eligible at this time</p>
        <p style="font-size:0.78rem;color:rgba(255,255,255,0.35);">Improve your score above 500 to qualify for credit products.</p>
      </div>
    \`;
    lucide.createIcons();
  }

  // Suggestions
  const sl = document.getElementById('suggestionsList');
  sl.innerHTML = r.suggestions.map(s => \`<div class="suggestion-item">\${s}</div>\`).join('');

  // Analytics charts
  renderAnalytics(income, expenses);

  // Dashboard update
  updateDashboard(r);
}

// ── Animated ring ─────────────────────────────────
function animRing(id, score, total, r) {
  const el = document.getElementById(id);
  if (!el) return;
  const pct    = (score - 300) / 550;
  const offset = total * (1 - pct);
  const color  = score>=750?'#00D4FF':score>=650?'#a78bfa':score>=580?'#f59e0b':'#ff2050';
  el.setAttribute('stroke-dasharray', total);
  el.style.stroke = color;
  requestAnimationFrame(() => { el.setAttribute('stroke-dashoffset', offset); });
}

// ── Animated number counter ───────────────────────
function animNumber(id, from, to, dur) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  const step  = now => {
    const p = Math.min((now-start)/dur,1);
    const e = 1-Math.pow(1-p,3);
    el.textContent = Math.round(from+(to-from)*e);
    if (p<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ── Analytics charts ──────────────────────────────
function renderAnalytics(income, expenses) {
  const savings = Math.max(0, income - expenses);
  const other   = Math.max(0, expenses * 0.3);
  const housing = Math.max(0, expenses * 0.4);
  const food    = Math.max(0, expenses * 0.2);
  const misc    = Math.max(0, expenses * 0.1);

  // Spending pie
  if (spendChart) spendChart.destroy();
  const sCtx = document.getElementById('spendChart');
  if (sCtx) {
    spendChart = new Chart(sCtx, {
      type: 'doughnut',
      data: {
        labels: ['Housing','Food','Other','Misc','Savings'],
        datasets: [{
          data: [housing,food,other,misc,savings],
          backgroundColor: ['#8B5CF6','#00D4FF','#f59e0b','#f97316','#2DD4BF'],
          borderColor: 'transparent', borderWidth: 0,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '68%',
        plugins: {
          legend: { position:'right', labels:{ color:'rgba(255,255,255,0.5)', font:{size:10,family:'DM Sans'}, boxWidth:10, padding:8 } },
          tooltip: { backgroundColor:'rgba(4,6,15,0.95)', titleColor:'#00D4FF', bodyColor:'#fff', borderColor:'rgba(255,255,255,0.1)', borderWidth:1 }
        }
      }
    });
  }

  // Income vs expense bar
  if (incExpChart) incExpChart.destroy();
  const iCtx = document.getElementById('incExpChart');
  if (iCtx) {
    incExpChart = new Chart(iCtx, {
      type: 'bar',
      data: {
        labels: ['Income','Expenses','Savings'],
        datasets: [{
          data: [income, expenses, savings],
          backgroundColor: ['rgba(0,212,255,0.25)','rgba(255,32,80,0.25)','rgba(45,212,191,0.25)'],
          borderColor:     ['#00D4FF','#ff2050','#2DD4BF'],
          borderWidth: 1.5, borderRadius: 8,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend:{ display:false }, tooltip:{ backgroundColor:'rgba(4,6,15,0.95)', titleColor:'#00D4FF', bodyColor:'#fff', borderColor:'rgba(255,255,255,0.1)', borderWidth:1 } },
        scales: {
          x: { grid:{ color:'rgba(255,255,255,0.04)' }, ticks:{ color:'rgba(255,255,255,0.4)', font:{size:10} } },
          y: { grid:{ color:'rgba(255,255,255,0.04)' }, ticks:{ color:'rgba(255,255,255,0.4)', font:{size:10}, callback: v=>'$'+v.toLocaleString() } }
        }
      }
    });
  }
}

// ── Dashboard update ──────────────────────────────
function updateDashboard(r) {
  const pct = Math.round(((r.score-300)/550)*44+55);
  const capped = Math.min(99, Math.max(40, pct));
  document.getElementById('dashApproval').textContent = capped + '%';
  document.getElementById('dashApprovalBar').style.width = capped + '%';
  document.getElementById('dashDefault').textContent = r.defaultProbability + '%';
  updateTrendChart();
}

// ── History helpers ───────────────────────────────
function saveLocalHistory(email, entry) {
  const users = getUsers();
  if (!users[email]) users[email] = { history: [] };
  if (!users[email].history) users[email].history = [];
  users[email].history.unshift({ ...entry, savedAt: Date.now() });
  if (users[email].history.length > 50) users[email].history = users[email].history.slice(0,50);
  saveUsers(users);
}

function getLocalHistory(email) {
  const users = getUsers();
  return users[email]?.history || [];
}

function loadHistory(email) {
  let history = getLocalHistory(email);

  // Try to merge from backend
  apiFetch(\`/history/\${email}\`).then(res=>res.json()).then(d => {
    if (d.history && d.history.length > 0) {
      // Merge: prefer backend data
      history = d.history;
      const users = getUsers();
      if (!users[email]) users[email] = {};
      users[email].history = history;
      saveUsers(users);
      renderHistory(email, history);
    }
  }).catch(()=>{});

  renderHistory(email, history);
}

function renderHistory(email, history) {
  // Profile stats
  document.getElementById('profTotal').textContent  = history.length;
  document.getElementById('dashTotal').textContent  = history.length;

  if (history.length > 0) {
    const scores = history.map(h=>h.score);
    document.getElementById('profBest').textContent   = Math.max(...scores);
    document.getElementById('profLatest').textContent = scores[0];
    document.getElementById('profAvg').textContent    = Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
  } else {
    ['profBest','profLatest','profAvg'].forEach(id => document.getElementById(id).textContent = '—');
  }

  // Empty state
  const isEmpty = history.length === 0;
  document.getElementById('histEmpty').style.display = isEmpty ? 'block' : 'none';
  document.getElementById('histRows').innerHTML = '';

  if (!isEmpty) {
    document.getElementById('histRows').innerHTML = history.map((h,i) => {
      const d = new Date(h.date || h.savedAt);
      const dateStr = d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
      const timeStr = d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
      const col = h.score>=700?'#00D4FF':h.score>=580?'#f59e0b':'#ff2050';
      return \`
        <div class="hist-row">
          <div style="display:flex;align-items:center;gap:16px;">
            <div style="width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;font-family:'Syne',sans-serif;background:\${col}15;color:\${col};">#\${i+1}</div>
            <div>
              <div style="font-size:0.9rem;font-weight:600;">\${dateStr} <span style="color:rgba(255,255,255,0.35);font-size:0.78rem;">\${timeStr}</span></div>
              <div style="font-size:0.75rem;color:rgba(255,255,255,0.35);">Income $\${(h.income||0).toLocaleString()} · Expenses $\${(h.expenses||0).toLocaleString()}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;color:\${col};">\${h.score}</span>
            <span style="padding:3px 10px;border-radius:99px;font-size:0.68rem;font-weight:700;font-family:'Syne',sans-serif;background:\${col}15;color:\${col};border:1px solid \${col}30;">\${h.band||'—'}</span>
          </div>
        </div>
      \`;
    }).join('');
  }

  // History chart
  const hcc = document.getElementById('histChartContainer');
  if (history.length > 1) {
    hcc.style.display = 'block';
    const last10 = [...history].reverse().slice(-10);
    const labels = last10.map(h=>new Date(h.date||h.savedAt).toLocaleDateString('en-US',{month:'short',day:'numeric'}));
    const data   = last10.map(h=>h.score);

    if (histChartInstance) histChartInstance.destroy();
    const ctx = document.getElementById('histChart');
    if (ctx) {
      const grad = ctx.getContext('2d').createLinearGradient(0,0,0,180);
      grad.addColorStop(0,'rgba(0,212,255,0.3)');
      grad.addColorStop(1,'rgba(0,212,255,0)');
      histChartInstance = new Chart(ctx, {
        type:'line',
        data:{ labels, datasets:[{ data, borderColor:'#00D4FF', backgroundColor:grad, borderWidth:2, fill:true, tension:0.4, pointBackgroundColor:'#8B5CF6', pointBorderColor:'#fff', pointRadius:4 }] },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false},tooltip:{backgroundColor:'rgba(4,6,15,0.9)',titleColor:'#00D4FF',bodyColor:'#fff',borderColor:'rgba(255,255,255,0.1)',borderWidth:1}}, scales:{ x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}}, y:{min:300,max:850,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}} } }
      });
    }
  } else { hcc.style.display = 'none'; }

  updateTrendChart(history);
}

// ── Trend chart (dashboard) ───────────────────────
function updateTrendChart(history) {
  const ctx = document.getElementById('trendChart');
  if (!ctx) return;

  let labels, scores;
  if (history && history.length > 0) {
    const map = {};
    history.forEach(h => {
      const d = new Date(h.date||h.savedAt);
      const k = d.toLocaleString('en-US',{month:'short',year:'2-digit'});
      if (!map[k]) map[k] = { sum:0, count:0, ts:d.getTime() };
      map[k].sum   += h.score;
      map[k].count++;
    });
    const sorted = Object.entries(map).sort((a,b)=>a[1].ts-b[1].ts).slice(-8);
    labels = sorted.map(e=>e[0]);
    scores = sorted.map(e=>Math.round(e[1].sum/e[1].count));
  } else {
    labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
    scores = [580,620,590,660,640,730,710];
  }

  const c    = ctx.getContext('2d');
  const grad = c.createLinearGradient(0,0,0,ctx.offsetHeight||200);
  grad.addColorStop(0,'rgba(0,212,255,0.25)');
  grad.addColorStop(1,'rgba(0,212,255,0)');

  if (trendChartInstance) trendChartInstance.destroy();
  trendChartInstance = new Chart(ctx, {
    type:'line',
    data:{ labels, datasets:[{ data:scores, borderColor:'#00D4FF', backgroundColor:grad, borderWidth:2, fill:true, tension:0.4, pointBackgroundColor:'#8B5CF6', pointBorderColor:'#fff', pointBorderWidth:1.5, pointRadius:4, pointHoverRadius:6 }] },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{backgroundColor:'rgba(4,6,15,0.95)',titleColor:'#00D4FF',bodyColor:'#fff',borderColor:'rgba(0,212,255,0.3)',borderWidth:1,callbacks:{label:c=>\` Score: \${c.parsed.y}\`}} },
      scales:{ x:{grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}}, y:{min:300,max:850,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'rgba(255,255,255,0.35)',font:{size:10}}} }
    }
  });
}

// ── Export CSV ────────────────────────────────────
function exportCSV() {
  const session = getSession();
  if (!session) return;
  const h = getLocalHistory(session.email);
  const csv = ['Date,Score,Band,Income,Expenses']
    .concat(h.map(r=>\`\${new Date(r.date||r.savedAt).toLocaleDateString()},\${r.score},\${r.band||''},\${r.income||''},\${r.expenses||''}\`))
    .join('\\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv,' + encodeURIComponent(csv);
  a.download = 'credai-history.csv';
  a.click();
  toast('History exported as CSV!', 'success');
}

function clearHistory() {
  const session = getSession();
  if (!session || !confirm('Clear all score history?')) return;
  const users = getUsers();
  if (users[session.email]) { users[session.email].history = []; saveUsers(users); }
  apiFetch(\`/history/\${session.email}\`, 'DELETE').catch(()=>{});
  renderHistory(session.email, []);
  toast('History cleared.', 'info');
}

// ── Scroll helper ─────────────────────────────────
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); }

// ── Intersection observer for reveals ─────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });

// ── Init ──────────────────────────────────────────
(function initApp() {
  try { lucide.createIcons(); } catch(e) { console.warn('lucide not ready', e); }
  livePreview();
  try { updateTrendChart(null); } catch(e) { console.warn('Chart not ready', e); }

  // Restore session
  const session = getSession();
  if (session) { loginUI(session.name, session.email); loadHistory(session.email); }

  // Reveal observer
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Auth overlay click
  document.getElementById('authModal').addEventListener('click', e => {
    if (e.target === document.getElementById('authModal')) closeAuth();
  });

  // Keyboard shortcuts
  document.getElementById('li-pass')?.addEventListener('keydown', e => { if(e.key==='Enter') handleLogin(); });
  document.getElementById('su-pass')?.addEventListener('keydown', e => { if(e.key==='Enter') handleSignup(); });
})();

// ── Scroll progress bar ──────────────────────────
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  const bar = document.getElementById('scroll-progress');
  if (bar) bar.style.width = progress + '%';
});

// ── Custom cursor ─────────────────────────────────
(function() {
  const glow = document.getElementById('cursorGlow');
  const trail = document.getElementById('cursorTrail');
  let mx = -100, my = -100, tx = -100, ty = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (glow) { glow.style.left = mx + 'px'; glow.style.top = my + 'px'; }
  });
  function animTrail() {
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    if (trail) { trail.style.left = tx + 'px'; trail.style.top = ty + 'px'; }
    requestAnimationFrame(animTrail);
  }
  animTrail();

  document.querySelectorAll('button, a, .btn-primary, .btn-ghost, .feat-card, .how-step').forEach(el => {
    el.addEventListener('mouseenter', () => { if(glow){glow.style.width='40px';glow.style.height='40px';} });
    el.addEventListener('mouseleave', () => { if(glow){glow.style.width='20px';glow.style.height='20px';} });
  });
})();

// ── Particles canvas ─────────────────────────────
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const N = 60;
  const pts = Array.from({length: N}, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    r: Math.random()*1.5+0.5,
    c: Math.random() > 0.5 ? [0,212,255] : [139,92,246]
  }));

  function draw() {
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = \`rgba(\${p.c[0]},\${p.c[1]},\${p.c[2]},0.6)\`;
      ctx.fill();
    });
    // Draw connections
    for (let i = 0; i < N; i++) {
      for (let j = i+1; j < N; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          const alpha = (1 - dist/120) * 0.12;
          ctx.strokeStyle = \`rgba(0,212,255,\${alpha})\`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Mouse-tracking card tilt ──────────────────────
document.querySelectorAll('.how-step').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const cx = rect.width/2, cy = rect.height/2;
    const rx = (y - cy) / cy * 4;
    const ry = -(x - cx) / cx * 4;
    card.style.transform = \`translateY(-8px) scale(1.01) perspective(600px) rotateX(\${rx}deg) rotateY(\${ry}deg)\`;
    card.style.setProperty('--mx', (x/rect.width*100)+'%');
    card.style.setProperty('--my', (y/rect.height*100)+'%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── Animated counters for stats ───────────────────
const statTargets = [12, 47, 97, 128];
const statIds = ['stat1','stat2','stat3','stat4'];
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  statTargets.forEach((target, i) => {
    const el = document.getElementById(statIds[i]);
    if (!el) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) animateStats(); });
}, { threshold: 0.3 });
const statsSection = document.querySelector('#how-it-works');
if (statsSection) statsObs.observe(statsSection);

// ── Hero entry animations ─────────────────────────
const style = document.createElement('style');
style.textContent = \`
  @keyframes fadeSlideDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeSlideUp   { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
\`;
document.head.appendChild(style);

// ── History section divider sync ─────────────────
// Patch loginUI to show divider when logged in
const _origLoginUI = window.loginUI;
window.loginUIWithDivider = function(name, email) {
  loginUI(name, email);
  const d = document.getElementById('hist-divider');
  if (d) d.style.display = 'block';
};
// Also patch show/hide of history section
const _origLogoutUI = window.logoutUI;

// ── Ripple effect ─────────────────────────────────
document.querySelectorAll('.ripple').forEach(el => {
  el.addEventListener('mousedown', e => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--rx', (e.clientX - rect.left) + 'px');
    el.style.setProperty('--ry', (e.clientY - rect.top) + 'px');
  });
});

// Add pulse keyframe
const styleSheet = document.styleSheets[0];
try { styleSheet.insertRule('@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }', styleSheet.cssRules.length); } catch(e){}
`;function Tf(){const e=wt.useRef(null),n=wt.useRef(!1);return wt.useEffect(()=>{if(n.current)return;n.current=!0;const t=document.createElement("script");return t.text=Lf,document.body.appendChild(t),()=>{document.body.removeChild(t)}},[]),qs.jsx("div",{ref:e,dangerouslySetInnerHTML:{__html:bf}})}Wl.createRoot(document.getElementById("root")).render(qs.jsx(Tf,{}));
