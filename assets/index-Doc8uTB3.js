(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Mp={exports:{}},al={},Fp={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function EA(){if(Av)return Ce;Av=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(x){return x===null||typeof x!="object"?null:(x=w&&x[w]||x["@@iterator"],typeof x=="function"?x:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,$={};function q(x,G,ge){this.props=x,this.context=G,this.refs=$,this.updater=ge||V}q.prototype.isReactComponent={},q.prototype.setState=function(x,G){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,G,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function fe(){}fe.prototype=q.prototype;function me(x,G,ge){this.props=x,this.context=G,this.refs=$,this.updater=ge||V}var ae=me.prototype=new fe;ae.constructor=me,W(ae,q.prototype),ae.isPureReactComponent=!0;var Ee=Array.isArray,Re=Object.prototype.hasOwnProperty,_e={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(x,G,ge){var Pe,ke={},xe=null,Be=null;if(G!=null)for(Pe in G.ref!==void 0&&(Be=G.ref),G.key!==void 0&&(xe=""+G.key),G)Re.call(G,Pe)&&!C.hasOwnProperty(Pe)&&(ke[Pe]=G[Pe]);var ze=arguments.length-2;if(ze===1)ke.children=ge;else if(1<ze){for(var Ke=Array(ze),xt=0;xt<ze;xt++)Ke[xt]=arguments[xt+2];ke.children=Ke}if(x&&x.defaultProps)for(Pe in ze=x.defaultProps,ze)ke[Pe]===void 0&&(ke[Pe]=ze[Pe]);return{$$typeof:r,type:x,key:xe,ref:Be,props:ke,_owner:_e.current}}function P(x,G){return{$$typeof:r,type:x.type,key:G,ref:x.ref,props:x.props,_owner:x._owner}}function b(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function N(x){var G={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ge){return G[ge]})}var O=/\/+/g;function R(x,G){return typeof x=="object"&&x!==null&&x.key!=null?N(""+x.key):G.toString(36)}function _t(x,G,ge,Pe,ke){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var Be=!1;if(x===null)Be=!0;else switch(xe){case"string":case"number":Be=!0;break;case"object":switch(x.$$typeof){case r:case e:Be=!0}}if(Be)return Be=x,ke=ke(Be),x=Pe===""?"."+R(Be,0):Pe,Ee(ke)?(ge="",x!=null&&(ge=x.replace(O,"$&/")+"/"),_t(ke,G,ge,"",function(xt){return xt})):ke!=null&&(b(ke)&&(ke=P(ke,ge+(!ke.key||Be&&Be.key===ke.key?"":(""+ke.key).replace(O,"$&/")+"/")+x)),G.push(ke)),1;if(Be=0,Pe=Pe===""?".":Pe+":",Ee(x))for(var ze=0;ze<x.length;ze++){xe=x[ze];var Ke=Pe+R(xe,ze);Be+=_t(xe,G,ge,Ke,ke)}else if(Ke=T(x),typeof Ke=="function")for(x=Ke.call(x),ze=0;!(xe=x.next()).done;)xe=xe.value,Ke=Pe+R(xe,ze++),Be+=_t(xe,G,ge,Ke,ke);else if(xe==="object")throw G=String(x),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Be}function Yt(x,G,ge){if(x==null)return x;var Pe=[],ke=0;return _t(x,Pe,"","",function(xe){return G.call(ge,xe,ke++)}),Pe}function Xt(x){if(x._status===-1){var G=x._result;G=G(),G.then(function(ge){(x._status===0||x._status===-1)&&(x._status=1,x._result=ge)},function(ge){(x._status===0||x._status===-1)&&(x._status=2,x._result=ge)}),x._status===-1&&(x._status=0,x._result=G)}if(x._status===1)return x._result.default;throw x._result}var We={current:null},ne={transition:null},ye={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:ne,ReactCurrentOwner:_e};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Yt,forEach:function(x,G,ge){Yt(x,function(){G.apply(this,arguments)},ge)},count:function(x){var G=0;return Yt(x,function(){G++}),G},toArray:function(x){return Yt(x,function(G){return G})||[]},only:function(x){if(!b(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ce.Component=q,Ce.Fragment=t,Ce.Profiler=s,Ce.PureComponent=me,Ce.StrictMode=n,Ce.Suspense=f,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Ce.act=oe,Ce.cloneElement=function(x,G,ge){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Pe=W({},x.props),ke=x.key,xe=x.ref,Be=x._owner;if(G!=null){if(G.ref!==void 0&&(xe=G.ref,Be=_e.current),G.key!==void 0&&(ke=""+G.key),x.type&&x.type.defaultProps)var ze=x.type.defaultProps;for(Ke in G)Re.call(G,Ke)&&!C.hasOwnProperty(Ke)&&(Pe[Ke]=G[Ke]===void 0&&ze!==void 0?ze[Ke]:G[Ke])}var Ke=arguments.length-2;if(Ke===1)Pe.children=ge;else if(1<Ke){ze=Array(Ke);for(var xt=0;xt<Ke;xt++)ze[xt]=arguments[xt+2];Pe.children=ze}return{$$typeof:r,type:x.type,key:ke,ref:xe,props:Pe,_owner:Be}},Ce.createContext=function(x){return x={$$typeof:l,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:a,_context:x},x.Consumer=x},Ce.createElement=S,Ce.createFactory=function(x){var G=S.bind(null,x);return G.type=x,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(x){return{$$typeof:d,render:x}},Ce.isValidElement=b,Ce.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:Xt}},Ce.memo=function(x,G){return{$$typeof:m,type:x,compare:G===void 0?null:G}},Ce.startTransition=function(x){var G=ne.transition;ne.transition={};try{x()}finally{ne.transition=G}},Ce.unstable_act=oe,Ce.useCallback=function(x,G){return We.current.useCallback(x,G)},Ce.useContext=function(x){return We.current.useContext(x)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(x){return We.current.useDeferredValue(x)},Ce.useEffect=function(x,G){return We.current.useEffect(x,G)},Ce.useId=function(){return We.current.useId()},Ce.useImperativeHandle=function(x,G,ge){return We.current.useImperativeHandle(x,G,ge)},Ce.useInsertionEffect=function(x,G){return We.current.useInsertionEffect(x,G)},Ce.useLayoutEffect=function(x,G){return We.current.useLayoutEffect(x,G)},Ce.useMemo=function(x,G){return We.current.useMemo(x,G)},Ce.useReducer=function(x,G,ge){return We.current.useReducer(x,G,ge)},Ce.useRef=function(x){return We.current.useRef(x)},Ce.useState=function(x){return We.current.useState(x)},Ce.useSyncExternalStore=function(x,G,ge){return We.current.useSyncExternalStore(x,G,ge)},Ce.useTransition=function(){return We.current.useTransition()},Ce.version="18.3.1",Ce}var Rv;function Bm(){return Rv||(Rv=1,Fp.exports=EA()),Fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function TA(){if(Pv)return al;Pv=1;var r=Bm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(d,f,m){var v,w={},T=null,V=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(V=f.ref);for(v in f)n.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:V,props:w,_owner:s.current}}return al.Fragment=t,al.jsx=l,al.jsxs=l,al}var kv;function SA(){return kv||(kv=1,Mp.exports=TA()),Mp.exports}var nt=SA(),zt=Bm(),Fh={},Up={exports:{}},Sn={},Bp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function AA(){return Cv||(Cv=1,function(r){function e(ne,ye){var oe=ne.length;ne.push(ye);e:for(;0<oe;){var x=oe-1>>>1,G=ne[x];if(0<s(G,ye))ne[x]=ye,ne[oe]=G,oe=x;else break e}}function t(ne){return ne.length===0?null:ne[0]}function n(ne){if(ne.length===0)return null;var ye=ne[0],oe=ne.pop();if(oe!==ye){ne[0]=oe;e:for(var x=0,G=ne.length,ge=G>>>1;x<ge;){var Pe=2*(x+1)-1,ke=ne[Pe],xe=Pe+1,Be=ne[xe];if(0>s(ke,oe))xe<G&&0>s(Be,ke)?(ne[x]=Be,ne[xe]=oe,x=xe):(ne[x]=ke,ne[Pe]=oe,x=Pe);else if(xe<G&&0>s(Be,oe))ne[x]=Be,ne[xe]=oe,x=xe;else break e}}return ye}function s(ne,ye){var oe=ne.sortIndex-ye.sortIndex;return oe!==0?oe:ne.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var l=Date,d=l.now();r.unstable_now=function(){return l.now()-d}}var f=[],m=[],v=1,w=null,T=3,V=!1,W=!1,$=!1,q=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(ne){for(var ye=t(m);ye!==null;){if(ye.callback===null)n(m);else if(ye.startTime<=ne)n(m),ye.sortIndex=ye.expirationTime,e(f,ye);else break;ye=t(m)}}function Ee(ne){if($=!1,ae(ne),!W)if(t(f)!==null)W=!0,Xt(Re);else{var ye=t(m);ye!==null&&We(Ee,ye.startTime-ne)}}function Re(ne,ye){W=!1,$&&($=!1,fe(S),S=-1),V=!0;var oe=T;try{for(ae(ye),w=t(f);w!==null&&(!(w.expirationTime>ye)||ne&&!N());){var x=w.callback;if(typeof x=="function"){w.callback=null,T=w.priorityLevel;var G=x(w.expirationTime<=ye);ye=r.unstable_now(),typeof G=="function"?w.callback=G:w===t(f)&&n(f),ae(ye)}else n(f);w=t(f)}if(w!==null)var ge=!0;else{var Pe=t(m);Pe!==null&&We(Ee,Pe.startTime-ye),ge=!1}return ge}finally{w=null,T=oe,V=!1}}var _e=!1,C=null,S=-1,P=5,b=-1;function N(){return!(r.unstable_now()-b<P)}function O(){if(C!==null){var ne=r.unstable_now();b=ne;var ye=!0;try{ye=C(!0,ne)}finally{ye?R():(_e=!1,C=null)}}else _e=!1}var R;if(typeof me=="function")R=function(){me(O)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Yt=_t.port2;_t.port1.onmessage=O,R=function(){Yt.postMessage(null)}}else R=function(){q(O,0)};function Xt(ne){C=ne,_e||(_e=!0,R())}function We(ne,ye){S=q(function(){ne(r.unstable_now())},ye)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ne){ne.callback=null},r.unstable_continueExecution=function(){W||V||(W=!0,Xt(Re))},r.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ne?Math.floor(1e3/ne):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(ne){switch(T){case 1:case 2:case 3:var ye=3;break;default:ye=T}var oe=T;T=ye;try{return ne()}finally{T=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ne,ye){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var oe=T;T=ne;try{return ye()}finally{T=oe}},r.unstable_scheduleCallback=function(ne,ye,oe){var x=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?x+oe:x):oe=x,ne){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ne={id:v++,callback:ye,priorityLevel:ne,startTime:oe,expirationTime:G,sortIndex:-1},oe>x?(ne.sortIndex=oe,e(m,ne),t(f)===null&&ne===t(m)&&($?(fe(S),S=-1):$=!0,We(Ee,oe-x))):(ne.sortIndex=G,e(f,ne),W||V||(W=!0,Xt(Re))),ne},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ne){var ye=T;return function(){var oe=T;T=ye;try{return ne.apply(this,arguments)}finally{T=oe}}}}(zp)),zp}var bv;function RA(){return bv||(bv=1,Bp.exports=AA()),Bp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function PA(){if(Dv)return Sn;Dv=1;var r=Bm(),e=RA();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:m.test(i)?w[i]=!0:(v[i]=!0,!1)}function V(i,o,u,h){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function W(i,o,u,h){if(o===null||typeof o>"u"||V(i,o,u,h))return!0;if(h)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function $(i,o,u,h,p,_,I){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=I}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){q[i]=new $(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];q[o]=new $(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){q[i]=new $(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){q[i]=new $(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){q[i]=new $(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){q[i]=new $(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){q[i]=new $(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){q[i]=new $(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){q[i]=new $(i,5,!1,i.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function me(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(fe,me);q[o]=new $(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(fe,me);q[o]=new $(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(fe,me);q[o]=new $(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){q[i]=new $(i,1,!1,i.toLowerCase(),null,!1,!1)}),q.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){q[i]=new $(i,1,!1,i.toLowerCase(),null,!0,!0)});function ae(i,o,u,h){var p=q.hasOwnProperty(o)?q[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(W(o,u,p,h)&&(u=null),h||p===null?T(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):p.mustUseProperty?i[p.propertyName]=u===null?p.type===3?!1:"":u:(o=p.attributeName,h=p.attributeNamespace,u===null?i.removeAttribute(o):(p=p.type,u=p===3||p===4&&u===!0?"":""+u,h?i.setAttributeNS(h,o,u):i.setAttribute(o,u))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),_e=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),_t=Symbol.for("react.suspense_list"),Yt=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),ne=Symbol.iterator;function ye(i){return i===null||typeof i!="object"?null:(i=ne&&i[ne]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,x;function G(i){if(x===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);x=o&&o[1]||""}return`
`+x+i}var ge=!1;function Pe(i,o){if(!i||ge)return"";ge=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(B){var h=B}Reflect.construct(i,[],o)}else{try{o.call()}catch(B){h=B}i.call(o.prototype)}else{try{throw Error()}catch(B){h=B}i()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var p=B.stack.split(`
`),_=h.stack.split(`
`),I=p.length-1,A=_.length-1;1<=I&&0<=A&&p[I]!==_[A];)A--;for(;1<=I&&0<=A;I--,A--)if(p[I]!==_[A]){if(I!==1||A!==1)do if(I--,A--,0>A||p[I]!==_[A]){var k=`
`+p[I].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=I&&0<=A);break}}}finally{ge=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?G(i):""}function ke(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function xe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case C:return"Fragment";case _e:return"Portal";case P:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case _t:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case O:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Yt:return o=i.displayName||null,o!==null?o:xe(i.type)||"Memo";case Xt:o=i._payload,i=i._init;try{return xe(i(o))}catch{}}return null}function Be(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ze(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ke(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function xt(i){var o=Ke(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,_=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(I){h=""+I,_.call(this,I)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return h},setValue:function(I){h=""+I},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function zr(i){i._valueTracker||(i._valueTracker=xt(i))}function Ro(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),h="";return i&&(h=Ke(i)?i.checked?"true":"false":i.value),i=h,i!==u?(o.setValue(i),!0):!1}function Ii(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ws(i,o){var u=o.checked;return oe({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function Po(i,o){var u=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;u=ze(o.value!=null?o.value:u),i._wrapperState={initialChecked:h,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function fu(i,o){o=o.checked,o!=null&&ae(i,"checked",o,!1)}function pu(i,o){fu(i,o);var u=ze(o.value),h=o.type;if(u!=null)h==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?ko(i,o.type,u):o.hasOwnProperty("defaultValue")&&ko(i,o.type,ze(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Tc(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function ko(i,o,u){(o!=="number"||Ii(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var jr=Array.isArray;function qr(i,o,u,h){if(i=i.options,o){o={};for(var p=0;p<u.length;p++)o["$"+u[p]]=!0;for(u=0;u<i.length;u++)p=o.hasOwnProperty("$"+i[u].value),i[u].selected!==p&&(i[u].selected=p),p&&h&&(i[u].defaultSelected=!0)}else{for(u=""+ze(u),o=null,p=0;p<i.length;p++){if(i[p].value===u){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function mu(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Co(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(jr(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:ze(u)}}function bo(i,o){var u=ze(o.value),h=ze(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),h!=null&&(i.defaultValue=""+h)}function gu(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Pt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Pt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var $r,_u=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,u,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=$r.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ei(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Es=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(i){Es.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Is[o]=Is[i]})});function yu(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||Is.hasOwnProperty(i)&&Is[i]?(""+o).trim():o+"px"}function vu(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var h=u.indexOf("--")===0,p=yu(u,o[u],h);u==="float"&&(u="cssFloat"),h?i.setProperty(u,p):i[u]=p}}var wu=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(i,o){if(o){if(wu[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Eu(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Do(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var No=null,Un=null,mr=null;function Vo(i){if(i=Gu(i)){if(typeof No!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Zc(o),No(i.stateNode,i.type,o))}}function gr(i){Un?mr?mr.push(i):mr=[i]:Un=i}function Tu(){if(Un){var i=Un,o=mr;if(mr=Un=null,Vo(i),o)for(i=0;i<o.length;i++)Vo(o[i])}}function Ss(i,o){return i(o)}function Su(){}var Wr=!1;function Au(i,o,u){if(Wr)return i(o,u);Wr=!0;try{return Ss(i,o,u)}finally{Wr=!1,(Un!==null||mr!==null)&&(Su(),Tu())}}function yt(i,o){var u=i.stateNode;if(u===null)return null;var h=Zc(u);if(h===null)return null;u=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var xo=!1;if(d)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{xo=!1}function As(i,o,u,h,p,_,I,A,k){var B=Array.prototype.slice.call(arguments,3);try{o.apply(u,B)}catch(J){this.onError(J)}}var Rs=!1,Oo=null,Zn=!1,Ru=null,hf={onError:function(i){Rs=!0,Oo=i}};function Lo(i,o,u,h,p,_,I,A,k){Rs=!1,Oo=null,As.apply(hf,arguments)}function Sc(i,o,u,h,p,_,I,A,k){if(Lo.apply(this,arguments),Rs){if(Rs){var B=Oo;Rs=!1,Oo=null}else throw Error(t(198));Zn||(Zn=!0,Ru=B)}}function er(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function Ps(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function tr(i){if(er(i)!==i)throw Error(t(188))}function Ac(i){var o=i.alternate;if(!o){if(o=er(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,h=o;;){var p=u.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){u=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===u)return tr(p),i;if(_===h)return tr(p),o;_=_.sibling}throw Error(t(188))}if(u.return!==h.return)u=p,h=_;else{for(var I=!1,A=p.child;A;){if(A===u){I=!0,u=p,h=_;break}if(A===h){I=!0,h=p,u=_;break}A=A.sibling}if(!I){for(A=_.child;A;){if(A===u){I=!0,u=_,h=p;break}if(A===h){I=!0,h=_,u=p;break}A=A.sibling}if(!I)throw Error(t(189))}}if(u.alternate!==h)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function Pu(i){return i=Ac(i),i!==null?Mo(i):null}function Mo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Mo(i);if(o!==null)return o;i=i.sibling}return null}var Fo=e.unstable_scheduleCallback,ku=e.unstable_cancelCallback,Rc=e.unstable_shouldYield,df=e.unstable_requestPaint,He=e.unstable_now,Pc=e.unstable_getCurrentPriorityLevel,ks=e.unstable_ImmediatePriority,Ti=e.unstable_UserBlockingPriority,Bn=e.unstable_NormalPriority,Cu=e.unstable_LowPriority,kc=e.unstable_IdlePriority,Cs=null,Cn=null;function Cc(i){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Cs,i,void 0,(i.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:Dc,bu=Math.log,bc=Math.LN2;function Dc(i){return i>>>=0,i===0?32:31-(bu(i)/bc|0)|0}var Uo=64,Bo=4194304;function Si(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function bs(i,o){var u=i.pendingLanes;if(u===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,I=u&268435455;if(I!==0){var A=I&~p;A!==0?h=Si(A):(_&=I,_!==0&&(h=Si(_)))}else I=u&~p,I!==0?h=Si(I):_!==0&&(h=Si(_));if(h===0)return 0;if(o!==0&&o!==h&&!(o&p)&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if(h&4&&(h|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)u=31-un(o),p=1<<u,h|=i[u],o&=~p;return h}function ff(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(i,o){for(var u=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var I=31-un(_),A=1<<I,k=p[I];k===-1?(!(A&u)||A&h)&&(p[I]=ff(A,o)):k<=o&&(i.expiredLanes|=A),_&=~A}}function bn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ds(){var i=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),i}function Ai(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function Ri(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-un(o),i[o]=u}function Ge(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<u;){var p=31-un(u),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,u&=~_}}function Pi(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var h=31-un(u),p=1<<h;p&o|i[h]&o&&(i[h]|=o),u&=~p}}var Ve=0;function ki(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Nc,zo,Vc,xc,Oc,Du=!1,_r=[],qt=null,nr=null,rr=null,Ci=new Map,zn=new Map,yr=[],pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(i,o){switch(i){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ci.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(o.pointerId)}}function _n(i,o,u,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:u,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Gu(o),o!==null&&zo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function mf(i,o,u,h,p){switch(o){case"focusin":return qt=_n(qt,i,o,u,h,p),!0;case"dragenter":return nr=_n(nr,i,o,u,h,p),!0;case"mouseover":return rr=_n(rr,i,o,u,h,p),!0;case"pointerover":var _=p.pointerId;return Ci.set(_,_n(Ci.get(_)||null,i,o,u,h,p)),!0;case"gotpointercapture":return _=p.pointerId,zn.set(_,_n(zn.get(_)||null,i,o,u,h,p)),!0}return!1}function Mc(i){var o=Ls(i.target);if(o!==null){var u=er(o);if(u!==null){if(o=u.tag,o===13){if(o=Ps(u),o!==null){i.blockedOn=o,Oc(i.priority,function(){Vc(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Kr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=jo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var h=new u.constructor(u.type,u);Ts=h,u.target.dispatchEvent(h),Ts=null}else return o=Gu(u),o!==null&&zo(o),i.blockedOn=u,!1;o.shift()}return!0}function Ns(i,o,u){Kr(i)&&u.delete(o)}function Fc(){Du=!1,qt!==null&&Kr(qt)&&(qt=null),nr!==null&&Kr(nr)&&(nr=null),rr!==null&&Kr(rr)&&(rr=null),Ci.forEach(Ns),zn.forEach(Ns)}function ir(i,o){i.blockedOn===o&&(i.blockedOn=null,Du||(Du=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fc)))}function sr(i){function o(p){return ir(p,i)}if(0<_r.length){ir(_r[0],i);for(var u=1;u<_r.length;u++){var h=_r[u];h.blockedOn===i&&(h.blockedOn=null)}}for(qt!==null&&ir(qt,i),nr!==null&&ir(nr,i),rr!==null&&ir(rr,i),Ci.forEach(o),zn.forEach(o),u=0;u<yr.length;u++)h=yr[u],h.blockedOn===i&&(h.blockedOn=null);for(;0<yr.length&&(u=yr[0],u.blockedOn===null);)Mc(u),u.blockedOn===null&&yr.shift()}var Hr=Ee.ReactCurrentBatchConfig,bi=!0;function et(i,o,u,h){var p=Ve,_=Hr.transition;Hr.transition=null;try{Ve=1,Nu(i,o,u,h)}finally{Ve=p,Hr.transition=_}}function gf(i,o,u,h){var p=Ve,_=Hr.transition;Hr.transition=null;try{Ve=4,Nu(i,o,u,h)}finally{Ve=p,Hr.transition=_}}function Nu(i,o,u,h){if(bi){var p=jo(i,o,u,h);if(p===null)Pf(i,o,h,Vs,u),Lc(i,h);else if(mf(p,i,o,u,h))h.stopPropagation();else if(Lc(i,h),o&4&&-1<pf.indexOf(i)){for(;p!==null;){var _=Gu(p);if(_!==null&&Nc(_),_=jo(i,o,u,h),_===null&&Pf(i,o,h,Vs,u),_===p)break;p=_}p!==null&&h.stopPropagation()}else Pf(i,o,h,null,u)}}var Vs=null;function jo(i,o,u,h){if(Vs=null,i=Do(h),i=Ls(i),i!==null)if(o=er(i),o===null)i=null;else if(u=o.tag,u===13){if(i=Ps(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Vs=i,null}function Vu(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pc()){case ks:return 1;case Ti:return 4;case Bn:case Cu:return 16;case kc:return 536870912;default:return 16}default:return 16}}var Dn=null,qo=null,yn=null;function xu(){if(yn)return yn;var i,o=qo,u=o.length,h,p="value"in Dn?Dn.value:Dn.textContent,_=p.length;for(i=0;i<u&&o[i]===p[i];i++);var I=u-i;for(h=1;h<=I&&o[u-h]===p[_-h];h++);return yn=p.slice(i,1<h?1-h:void 0)}function $o(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function vr(){return!0}function Ou(){return!1}function $t(i){function o(u,h,p,_,I){this._reactName=u,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=I,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(u=i[A],this[A]=u?u(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?vr:Ou,this.isPropagationStopped=Ou,this}return oe(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),o}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=$t(or),wr=oe({},or,{view:0,detail:0}),_f=$t(wr),Go,Qr,Di,xs=oe({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ir,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Di&&(Di&&i.type==="mousemove"?(Go=i.screenX-Di.screenX,Qr=i.screenY-Di.screenY):Qr=Go=0,Di=i),Go)},movementY:function(i){return"movementY"in i?i.movementY:Qr}}),Ko=$t(xs),Lu=oe({},xs,{dataTransfer:0}),Uc=$t(Lu),Ho=oe({},wr,{relatedTarget:0}),Qo=$t(Ho),Bc=oe({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Jr=$t(Bc),zc=oe({},or,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),jc=$t(zc),qc=oe({},or,{data:0}),Mu=$t(qc),Jo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=$c[i])?!!o[i]:!1}function Ir(){return Wc}var c=oe({},wr,{key:function(i){if(i.key){var o=Jo[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=$o(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ln[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ir,charCode:function(i){return i.type==="keypress"?$o(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?$o(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=$t(c),y=oe({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=$t(y),M=oe({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ir}),j=$t(M),ee=oe({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=$t(ee),Ct=oe({},xs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=$t(Ct),Ot=[9,13,27,32],Tt=d&&"CompositionEvent"in window,jn=null;d&&"documentMode"in document&&(jn=document.documentMode);var Nn=d&&"TextEvent"in window&&!jn,Os=d&&(!Tt||jn&&8<jn&&11>=jn),Yo=" ",v_=!1;function w_(i,o){switch(i){case"keyup":return Ot.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Xo=!1;function vS(i,o){switch(i){case"compositionend":return I_(o);case"keypress":return o.which!==32?null:(v_=!0,Yo);case"textInput":return i=o.data,i===Yo&&v_?null:i;default:return null}}function wS(i,o){if(Xo)return i==="compositionend"||!Tt&&w_(i,o)?(i=xu(),yn=qo=Dn=null,Xo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Os&&o.locale!=="ko"?null:o.data;default:return null}}var IS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!IS[i.type]:o==="textarea"}function T_(i,o,u,h){gr(h),o=Jc(o,"onChange"),0<o.length&&(u=new Wo("onChange","change",null,u,h),i.push({event:u,listeners:o}))}var Fu=null,Uu=null;function ES(i){z_(i,0)}function Gc(i){var o=ra(i);if(Ro(o))return i}function TS(i,o){if(i==="change")return o}var S_=!1;if(d){var yf;if(d){var vf="oninput"in document;if(!vf){var A_=document.createElement("div");A_.setAttribute("oninput","return;"),vf=typeof A_.oninput=="function"}yf=vf}else yf=!1;S_=yf&&(!document.documentMode||9<document.documentMode)}function R_(){Fu&&(Fu.detachEvent("onpropertychange",P_),Uu=Fu=null)}function P_(i){if(i.propertyName==="value"&&Gc(Uu)){var o=[];T_(o,Uu,i,Do(i)),Au(ES,o)}}function SS(i,o,u){i==="focusin"?(R_(),Fu=o,Uu=u,Fu.attachEvent("onpropertychange",P_)):i==="focusout"&&R_()}function AS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Gc(Uu)}function RS(i,o){if(i==="click")return Gc(o)}function PS(i,o){if(i==="input"||i==="change")return Gc(o)}function kS(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ar=typeof Object.is=="function"?Object.is:kS;function Bu(i,o){if(ar(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),h=Object.keys(o);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var p=u[h];if(!f.call(o,p)||!ar(i[p],o[p]))return!1}return!0}function k_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function C_(i,o){var u=k_(i);i=0;for(var h;u;){if(u.nodeType===3){if(h=i+u.textContent.length,i<=o&&h>=o)return{node:u,offset:o-i};i=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=k_(u)}}function b_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?b_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function D_(){for(var i=window,o=Ii();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=Ii(i.document)}return o}function wf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function CS(i){var o=D_(),u=i.focusedElem,h=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&b_(u.ownerDocument.documentElement,u)){if(h!==null&&wf(u)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=u.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=C_(u,_);var I=C_(u,h);p&&I&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==I.node||i.focusOffset!==I.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(I.node,I.offset)):(o.setEnd(I.node,I.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var bS=d&&"documentMode"in document&&11>=document.documentMode,Zo=null,If=null,zu=null,Ef=!1;function N_(i,o,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Ef||Zo==null||Zo!==Ii(h)||(h=Zo,"selectionStart"in h&&wf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),zu&&Bu(zu,h)||(zu=h,h=Jc(If,"onSelect"),0<h.length&&(o=new Wo("onSelect","select",null,o,u),i.push({event:o,listeners:h}),o.target=Zo)))}function Kc(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var ea={animationend:Kc("Animation","AnimationEnd"),animationiteration:Kc("Animation","AnimationIteration"),animationstart:Kc("Animation","AnimationStart"),transitionend:Kc("Transition","TransitionEnd")},Tf={},V_={};d&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Hc(i){if(Tf[i])return Tf[i];if(!ea[i])return i;var o=ea[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in V_)return Tf[i]=o[u];return i}var x_=Hc("animationend"),O_=Hc("animationiteration"),L_=Hc("animationstart"),M_=Hc("transitionend"),F_=new Map,U_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(i,o){F_.set(i,o),a(o,[i])}for(var Sf=0;Sf<U_.length;Sf++){var Af=U_[Sf],DS=Af.toLowerCase(),NS=Af[0].toUpperCase()+Af.slice(1);Ni(DS,"on"+NS)}Ni(x_,"onAnimationEnd"),Ni(O_,"onAnimationIteration"),Ni(L_,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(M_,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ju="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ju));function B_(i,o,u){var h=i.type||"unknown-event";i.currentTarget=u,Sc(h,o,void 0,i),i.currentTarget=null}function z_(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var h=i[u],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var I=h.length-1;0<=I;I--){var A=h[I],k=A.instance,B=A.currentTarget;if(A=A.listener,k!==_&&p.isPropagationStopped())break e;B_(p,A,B),_=k}else for(I=0;I<h.length;I++){if(A=h[I],k=A.instance,B=A.currentTarget,A=A.listener,k!==_&&p.isPropagationStopped())break e;B_(p,A,B),_=k}}}if(Zn)throw i=Ru,Zn=!1,Ru=null,i}function Ye(i,o){var u=o[Vf];u===void 0&&(u=o[Vf]=new Set);var h=i+"__bubble";u.has(h)||(j_(o,i,2,!1),u.add(h))}function Rf(i,o,u){var h=0;o&&(h|=4),j_(u,i,h,o)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function qu(i){if(!i[Qc]){i[Qc]=!0,n.forEach(function(u){u!=="selectionchange"&&(VS.has(u)||Rf(u,!1,i),Rf(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Qc]||(o[Qc]=!0,Rf("selectionchange",!1,o))}}function j_(i,o,u,h){switch(Vu(o)){case 1:var p=et;break;case 4:p=gf;break;default:p=Nu}u=p.bind(null,o,u,i),p=void 0,!xo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,u,{capture:!0,passive:p}):i.addEventListener(o,u,!0):p!==void 0?i.addEventListener(o,u,{passive:p}):i.addEventListener(o,u,!1)}function Pf(i,o,u,h,p){var _=h;if(!(o&1)&&!(o&2)&&h!==null)e:for(;;){if(h===null)return;var I=h.tag;if(I===3||I===4){var A=h.stateNode.containerInfo;if(A===p||A.nodeType===8&&A.parentNode===p)break;if(I===4)for(I=h.return;I!==null;){var k=I.tag;if((k===3||k===4)&&(k=I.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;I=I.return}for(;A!==null;){if(I=Ls(A),I===null)return;if(k=I.tag,k===5||k===6){h=_=I;continue e}A=A.parentNode}}h=h.return}Au(function(){var B=_,J=Do(u),Y=[];e:{var H=F_.get(i);if(H!==void 0){var ie=Wo,le=i;switch(i){case"keypress":if($o(u)===0)break e;case"keydown":case"keyup":ie=g;break;case"focusin":le="focus",ie=Qo;break;case"focusout":le="blur",ie=Qo;break;case"beforeblur":case"afterblur":ie=Qo;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=j;break;case x_:case O_:case L_:ie=Jr;break;case M_:ie=je;break;case"scroll":ie=_f;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=jc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var he=(o&4)!==0,vt=!he&&i==="scroll",F=he?H!==null?H+"Capture":null:H;he=[];for(var D=B,U;D!==null;){U=D;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,F!==null&&(Z=yt(D,F),Z!=null&&he.push($u(D,Z,U)))),vt)break;D=D.return}0<he.length&&(H=new ie(H,le,null,u,J),Y.push({event:H,listeners:he}))}}if(!(o&7)){e:{if(H=i==="mouseover"||i==="pointerover",ie=i==="mouseout"||i==="pointerout",H&&u!==Ts&&(le=u.relatedTarget||u.fromElement)&&(Ls(le)||le[Yr]))break e;if((ie||H)&&(H=J.window===J?J:(H=J.ownerDocument)?H.defaultView||H.parentWindow:window,ie?(le=u.relatedTarget||u.toElement,ie=B,le=le?Ls(le):null,le!==null&&(vt=er(le),le!==vt||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=B),ie!==le)){if(he=Ko,Z="onMouseLeave",F="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(he=E,Z="onPointerLeave",F="onPointerEnter",D="pointer"),vt=ie==null?H:ra(ie),U=le==null?H:ra(le),H=new he(Z,D+"leave",ie,u,J),H.target=vt,H.relatedTarget=U,Z=null,Ls(J)===B&&(he=new he(F,D+"enter",le,u,J),he.target=U,he.relatedTarget=vt,Z=he),vt=Z,ie&&le)t:{for(he=ie,F=le,D=0,U=he;U;U=ta(U))D++;for(U=0,Z=F;Z;Z=ta(Z))U++;for(;0<D-U;)he=ta(he),D--;for(;0<U-D;)F=ta(F),U--;for(;D--;){if(he===F||F!==null&&he===F.alternate)break t;he=ta(he),F=ta(F)}he=null}else he=null;ie!==null&&q_(Y,H,ie,he,!1),le!==null&&vt!==null&&q_(Y,vt,le,he,!0)}}e:{if(H=B?ra(B):window,ie=H.nodeName&&H.nodeName.toLowerCase(),ie==="select"||ie==="input"&&H.type==="file")var de=TS;else if(E_(H))if(S_)de=PS;else{de=AS;var we=SS}else(ie=H.nodeName)&&ie.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(de=RS);if(de&&(de=de(i,B))){T_(Y,de,u,J);break e}we&&we(i,H,B),i==="focusout"&&(we=H._wrapperState)&&we.controlled&&H.type==="number"&&ko(H,"number",H.value)}switch(we=B?ra(B):window,i){case"focusin":(E_(we)||we.contentEditable==="true")&&(Zo=we,If=B,zu=null);break;case"focusout":zu=If=Zo=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,N_(Y,u,J);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":N_(Y,u,J)}var Ie;if(Tt)e:{switch(i){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Xo?w_(i,u)&&(Te="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(Te="onCompositionStart");Te&&(Os&&u.locale!=="ko"&&(Xo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Xo&&(Ie=xu()):(Dn=J,qo="value"in Dn?Dn.value:Dn.textContent,Xo=!0)),we=Jc(B,Te),0<we.length&&(Te=new Mu(Te,i,null,u,J),Y.push({event:Te,listeners:we}),Ie?Te.data=Ie:(Ie=I_(u),Ie!==null&&(Te.data=Ie)))),(Ie=Nn?vS(i,u):wS(i,u))&&(B=Jc(B,"onBeforeInput"),0<B.length&&(J=new Mu("onBeforeInput","beforeinput",null,u,J),Y.push({event:J,listeners:B}),J.data=Ie))}z_(Y,o)})}function $u(i,o,u){return{instance:i,listener:o,currentTarget:u}}function Jc(i,o){for(var u=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=yt(i,u),_!=null&&h.unshift($u(i,_,p)),_=yt(i,o),_!=null&&h.push($u(i,_,p))),i=i.return}return h}function ta(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function q_(i,o,u,h,p){for(var _=o._reactName,I=[];u!==null&&u!==h;){var A=u,k=A.alternate,B=A.stateNode;if(k!==null&&k===h)break;A.tag===5&&B!==null&&(A=B,p?(k=yt(u,_),k!=null&&I.unshift($u(u,k,A))):p||(k=yt(u,_),k!=null&&I.push($u(u,k,A)))),u=u.return}I.length!==0&&i.push({event:o,listeners:I})}var xS=/\r\n?/g,OS=/\u0000|\uFFFD/g;function $_(i){return(typeof i=="string"?i:""+i).replace(xS,`
`).replace(OS,"")}function Yc(i,o,u){if(o=$_(o),$_(i)!==o&&u)throw Error(t(425))}function Xc(){}var kf=null,Cf=null;function bf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,W_=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof W_<"u"?function(i){return W_.resolve(null).then(i).catch(FS)}:Df;function FS(i){setTimeout(function(){throw i})}function Nf(i,o){var u=o,h=0;do{var p=u.nextSibling;if(i.removeChild(u),p&&p.nodeType===8)if(u=p.data,u==="/$"){if(h===0){i.removeChild(p),sr(o);return}h--}else u!=="$"&&u!=="$?"&&u!=="$!"||h++;u=p}while(u);sr(o)}function Vi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function G_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var na=Math.random().toString(36).slice(2),Er="__reactFiber$"+na,Wu="__reactProps$"+na,Yr="__reactContainer$"+na,Vf="__reactEvents$"+na,US="__reactListeners$"+na,BS="__reactHandles$"+na;function Ls(i){var o=i[Er];if(o)return o;for(var u=i.parentNode;u;){if(o=u[Yr]||u[Er]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=G_(i);i!==null;){if(u=i[Er])return u;i=G_(i)}return o}i=u,u=i.parentNode}return null}function Gu(i){return i=i[Er]||i[Yr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ra(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Zc(i){return i[Wu]||null}var xf=[],ia=-1;function xi(i){return{current:i}}function Xe(i){0>ia||(i.current=xf[ia],xf[ia]=null,ia--)}function Qe(i,o){ia++,xf[ia]=i.current,i.current=o}var Oi={},Zt=xi(Oi),vn=xi(!1),Ms=Oi;function sa(i,o){var u=i.type.contextTypes;if(!u)return Oi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in u)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function wn(i){return i=i.childContextTypes,i!=null}function eh(){Xe(vn),Xe(Zt)}function K_(i,o,u){if(Zt.current!==Oi)throw Error(t(168));Qe(Zt,o),Qe(vn,u)}function H_(i,o,u){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return u;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,Be(i)||"Unknown",p));return oe({},u,h)}function th(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Oi,Ms=Zt.current,Qe(Zt,i),Qe(vn,vn.current),!0}function Q_(i,o,u){var h=i.stateNode;if(!h)throw Error(t(169));u?(i=H_(i,o,Ms),h.__reactInternalMemoizedMergedChildContext=i,Xe(vn),Xe(Zt),Qe(Zt,i)):Xe(vn),Qe(vn,u)}var Xr=null,nh=!1,Of=!1;function J_(i){Xr===null?Xr=[i]:Xr.push(i)}function zS(i){nh=!0,J_(i)}function Li(){if(!Of&&Xr!==null){Of=!0;var i=0,o=Ve;try{var u=Xr;for(Ve=1;i<u.length;i++){var h=u[i];do h=h(!0);while(h!==null)}Xr=null,nh=!1}catch(p){throw Xr!==null&&(Xr=Xr.slice(i+1)),Fo(ks,Li),p}finally{Ve=o,Of=!1}}return null}var oa=[],aa=0,rh=null,ih=0,qn=[],$n=0,Fs=null,Zr=1,ei="";function Us(i,o){oa[aa++]=ih,oa[aa++]=rh,rh=i,ih=o}function Y_(i,o,u){qn[$n++]=Zr,qn[$n++]=ei,qn[$n++]=Fs,Fs=i;var h=Zr;i=ei;var p=32-un(h)-1;h&=~(1<<p),u+=1;var _=32-un(o)+p;if(30<_){var I=p-p%5;_=(h&(1<<I)-1).toString(32),h>>=I,p-=I,Zr=1<<32-un(o)+p|u<<p|h,ei=_+i}else Zr=1<<_|u<<p|h,ei=i}function Lf(i){i.return!==null&&(Us(i,1),Y_(i,1,0))}function Mf(i){for(;i===rh;)rh=oa[--aa],oa[aa]=null,ih=oa[--aa],oa[aa]=null;for(;i===Fs;)Fs=qn[--$n],qn[$n]=null,ei=qn[--$n],qn[$n]=null,Zr=qn[--$n],qn[$n]=null}var Vn=null,xn=null,tt=!1,ur=null;function X_(i,o){var u=Hn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function Z_(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Vn=i,xn=Vi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Vn=i,xn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Fs!==null?{id:Zr,overflow:ei}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Hn(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,Vn=i,xn=null,!0):!1;default:return!1}}function Ff(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Uf(i){if(tt){var o=xn;if(o){var u=o;if(!Z_(i,o)){if(Ff(i))throw Error(t(418));o=Vi(u.nextSibling);var h=Vn;o&&Z_(i,o)?X_(h,u):(i.flags=i.flags&-4097|2,tt=!1,Vn=i)}}else{if(Ff(i))throw Error(t(418));i.flags=i.flags&-4097|2,tt=!1,Vn=i}}}function ey(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Vn=i}function sh(i){if(i!==Vn)return!1;if(!tt)return ey(i),tt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!bf(i.type,i.memoizedProps)),o&&(o=xn)){if(Ff(i))throw ty(),Error(t(418));for(;o;)X_(i,o),o=Vi(o.nextSibling)}if(ey(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){xn=Vi(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}xn=null}}else xn=Vn?Vi(i.stateNode.nextSibling):null;return!0}function ty(){for(var i=xn;i;)i=Vi(i.nextSibling)}function ua(){xn=Vn=null,tt=!1}function Bf(i){ur===null?ur=[i]:ur.push(i)}var jS=Ee.ReactCurrentBatchConfig;function Ku(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var h=u.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(I){var A=p.refs;I===null?delete A[_]:A[_]=I},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function oh(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function ny(i){var o=i._init;return o(i._payload)}function ry(i){function o(F,D){if(i){var U=F.deletions;U===null?(F.deletions=[D],F.flags|=16):U.push(D)}}function u(F,D){if(!i)return null;for(;D!==null;)o(F,D),D=D.sibling;return null}function h(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function p(F,D){return F=$i(F,D),F.index=0,F.sibling=null,F}function _(F,D,U){return F.index=U,i?(U=F.alternate,U!==null?(U=U.index,U<D?(F.flags|=2,D):U):(F.flags|=2,D)):(F.flags|=1048576,D)}function I(F){return i&&F.alternate===null&&(F.flags|=2),F}function A(F,D,U,Z){return D===null||D.tag!==6?(D=Dp(U,F.mode,Z),D.return=F,D):(D=p(D,U),D.return=F,D)}function k(F,D,U,Z){var de=U.type;return de===C?J(F,D,U.props.children,Z,U.key):D!==null&&(D.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Xt&&ny(de)===D.type)?(Z=p(D,U.props),Z.ref=Ku(F,D,U),Z.return=F,Z):(Z=bh(U.type,U.key,U.props,null,F.mode,Z),Z.ref=Ku(F,D,U),Z.return=F,Z)}function B(F,D,U,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Np(U,F.mode,Z),D.return=F,D):(D=p(D,U.children||[]),D.return=F,D)}function J(F,D,U,Z,de){return D===null||D.tag!==7?(D=Ks(U,F.mode,Z,de),D.return=F,D):(D=p(D,U),D.return=F,D)}function Y(F,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Dp(""+D,F.mode,U),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Re:return U=bh(D.type,D.key,D.props,null,F.mode,U),U.ref=Ku(F,null,D),U.return=F,U;case _e:return D=Np(D,F.mode,U),D.return=F,D;case Xt:var Z=D._init;return Y(F,Z(D._payload),U)}if(jr(D)||ye(D))return D=Ks(D,F.mode,U,null),D.return=F,D;oh(F,D)}return null}function H(F,D,U,Z){var de=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:A(F,D,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Re:return U.key===de?k(F,D,U,Z):null;case _e:return U.key===de?B(F,D,U,Z):null;case Xt:return de=U._init,H(F,D,de(U._payload),Z)}if(jr(U)||ye(U))return de!==null?null:J(F,D,U,Z,null);oh(F,U)}return null}function ie(F,D,U,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(U)||null,A(D,F,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Re:return F=F.get(Z.key===null?U:Z.key)||null,k(D,F,Z,de);case _e:return F=F.get(Z.key===null?U:Z.key)||null,B(D,F,Z,de);case Xt:var we=Z._init;return ie(F,D,U,we(Z._payload),de)}if(jr(Z)||ye(Z))return F=F.get(U)||null,J(D,F,Z,de,null);oh(D,Z)}return null}function le(F,D,U,Z){for(var de=null,we=null,Ie=D,Te=D=0,Ft=null;Ie!==null&&Te<U.length;Te++){Ie.index>Te?(Ft=Ie,Ie=null):Ft=Ie.sibling;var Fe=H(F,Ie,U[Te],Z);if(Fe===null){Ie===null&&(Ie=Ft);break}i&&Ie&&Fe.alternate===null&&o(F,Ie),D=_(Fe,D,Te),we===null?de=Fe:we.sibling=Fe,we=Fe,Ie=Ft}if(Te===U.length)return u(F,Ie),tt&&Us(F,Te),de;if(Ie===null){for(;Te<U.length;Te++)Ie=Y(F,U[Te],Z),Ie!==null&&(D=_(Ie,D,Te),we===null?de=Ie:we.sibling=Ie,we=Ie);return tt&&Us(F,Te),de}for(Ie=h(F,Ie);Te<U.length;Te++)Ft=ie(Ie,F,Te,U[Te],Z),Ft!==null&&(i&&Ft.alternate!==null&&Ie.delete(Ft.key===null?Te:Ft.key),D=_(Ft,D,Te),we===null?de=Ft:we.sibling=Ft,we=Ft);return i&&Ie.forEach(function(Wi){return o(F,Wi)}),tt&&Us(F,Te),de}function he(F,D,U,Z){var de=ye(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var we=de=null,Ie=D,Te=D=0,Ft=null,Fe=U.next();Ie!==null&&!Fe.done;Te++,Fe=U.next()){Ie.index>Te?(Ft=Ie,Ie=null):Ft=Ie.sibling;var Wi=H(F,Ie,Fe.value,Z);if(Wi===null){Ie===null&&(Ie=Ft);break}i&&Ie&&Wi.alternate===null&&o(F,Ie),D=_(Wi,D,Te),we===null?de=Wi:we.sibling=Wi,we=Wi,Ie=Ft}if(Fe.done)return u(F,Ie),tt&&Us(F,Te),de;if(Ie===null){for(;!Fe.done;Te++,Fe=U.next())Fe=Y(F,Fe.value,Z),Fe!==null&&(D=_(Fe,D,Te),we===null?de=Fe:we.sibling=Fe,we=Fe);return tt&&Us(F,Te),de}for(Ie=h(F,Ie);!Fe.done;Te++,Fe=U.next())Fe=ie(Ie,F,Te,Fe.value,Z),Fe!==null&&(i&&Fe.alternate!==null&&Ie.delete(Fe.key===null?Te:Fe.key),D=_(Fe,D,Te),we===null?de=Fe:we.sibling=Fe,we=Fe);return i&&Ie.forEach(function(IA){return o(F,IA)}),tt&&Us(F,Te),de}function vt(F,D,U,Z){if(typeof U=="object"&&U!==null&&U.type===C&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Re:e:{for(var de=U.key,we=D;we!==null;){if(we.key===de){if(de=U.type,de===C){if(we.tag===7){u(F,we.sibling),D=p(we,U.props.children),D.return=F,F=D;break e}}else if(we.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Xt&&ny(de)===we.type){u(F,we.sibling),D=p(we,U.props),D.ref=Ku(F,we,U),D.return=F,F=D;break e}u(F,we);break}else o(F,we);we=we.sibling}U.type===C?(D=Ks(U.props.children,F.mode,Z,U.key),D.return=F,F=D):(Z=bh(U.type,U.key,U.props,null,F.mode,Z),Z.ref=Ku(F,D,U),Z.return=F,F=Z)}return I(F);case _e:e:{for(we=U.key;D!==null;){if(D.key===we)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){u(F,D.sibling),D=p(D,U.children||[]),D.return=F,F=D;break e}else{u(F,D);break}else o(F,D);D=D.sibling}D=Np(U,F.mode,Z),D.return=F,F=D}return I(F);case Xt:return we=U._init,vt(F,D,we(U._payload),Z)}if(jr(U))return le(F,D,U,Z);if(ye(U))return he(F,D,U,Z);oh(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(u(F,D.sibling),D=p(D,U),D.return=F,F=D):(u(F,D),D=Dp(U,F.mode,Z),D.return=F,F=D),I(F)):u(F,D)}return vt}var la=ry(!0),iy=ry(!1),ah=xi(null),uh=null,ca=null,zf=null;function jf(){zf=ca=uh=null}function qf(i){var o=ah.current;Xe(ah),i._currentValue=o}function $f(i,o,u){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===u)break;i=i.return}}function ha(i,o){uh=i,zf=ca=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(In=!0),i.firstContext=null)}function Wn(i){var o=i._currentValue;if(zf!==i)if(i={context:i,memoizedValue:o,next:null},ca===null){if(uh===null)throw Error(t(308));ca=i,uh.dependencies={lanes:0,firstContext:i}}else ca=ca.next=i;return o}var Bs=null;function Wf(i){Bs===null?Bs=[i]:Bs.push(i)}function sy(i,o,u,h){var p=o.interleaved;return p===null?(u.next=u,Wf(o)):(u.next=p.next,p.next=u),o.interleaved=u,ti(i,h)}function ti(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var Mi=!1;function Gf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ni(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Fi(i,o,u){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,Me&2){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,ti(i,u)}return p=h.interleaved,p===null?(o.next=o,Wf(h)):(o.next=p.next,p.next=o),h.interleaved=o,ti(i,u)}function lh(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,u|=h,o.lanes=u,Pi(i,u)}}function ay(i,o){var u=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var p=null,_=null;if(u=u.firstBaseUpdate,u!==null){do{var I={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};_===null?p=_=I:_=_.next=I,u=u.next}while(u!==null);_===null?p=_=o:_=_.next=o}else p=_=o;u={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function ch(i,o,u,h){var p=i.updateQueue;Mi=!1;var _=p.firstBaseUpdate,I=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var k=A,B=k.next;k.next=null,I===null?_=B:I.next=B,I=k;var J=i.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==I&&(A===null?J.firstBaseUpdate=B:A.next=B,J.lastBaseUpdate=k))}if(_!==null){var Y=p.baseState;I=0,J=B=k=null,A=_;do{var H=A.lane,ie=A.eventTime;if((h&H)===H){J!==null&&(J=J.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var le=i,he=A;switch(H=o,ie=u,he.tag){case 1:if(le=he.payload,typeof le=="function"){Y=le.call(ie,Y,H);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=he.payload,H=typeof le=="function"?le.call(ie,Y,H):le,H==null)break e;Y=oe({},Y,H);break e;case 2:Mi=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,H=p.effects,H===null?p.effects=[A]:H.push(A))}else ie={eventTime:ie,lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(B=J=ie,k=Y):J=J.next=ie,I|=H;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;H=A,A=H.next,H.next=null,p.lastBaseUpdate=H,p.shared.pending=null}}while(!0);if(J===null&&(k=Y),p.baseState=k,p.firstBaseUpdate=B,p.lastBaseUpdate=J,o=p.shared.interleaved,o!==null){p=o;do I|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);qs|=I,i.lanes=I,i.memoizedState=Y}}function uy(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=u,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Hu={},Tr=xi(Hu),Qu=xi(Hu),Ju=xi(Hu);function zs(i){if(i===Hu)throw Error(t(174));return i}function Kf(i,o){switch(Qe(Ju,o),Qe(Qu,i),Qe(Tr,Hu),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:kt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=kt(o,i)}Xe(Tr),Qe(Tr,o)}function da(){Xe(Tr),Xe(Qu),Xe(Ju)}function ly(i){zs(Ju.current);var o=zs(Tr.current),u=kt(o,i.type);o!==u&&(Qe(Qu,i),Qe(Tr,u))}function Hf(i){Qu.current===i&&(Xe(Tr),Xe(Qu))}var at=xi(0);function hh(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Qf=[];function Jf(){for(var i=0;i<Qf.length;i++)Qf[i]._workInProgressVersionPrimary=null;Qf.length=0}var dh=Ee.ReactCurrentDispatcher,Yf=Ee.ReactCurrentBatchConfig,js=0,ut=null,bt=null,Lt=null,fh=!1,Yu=!1,Xu=0,qS=0;function en(){throw Error(t(321))}function Xf(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!ar(i[u],o[u]))return!1;return!0}function Zf(i,o,u,h,p,_){if(js=_,ut=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,dh.current=i===null||i.memoizedState===null?KS:HS,i=u(h,p),Yu){_=0;do{if(Yu=!1,Xu=0,25<=_)throw Error(t(301));_+=1,Lt=bt=null,o.updateQueue=null,dh.current=QS,i=u(h,p)}while(Yu)}if(dh.current=gh,o=bt!==null&&bt.next!==null,js=0,Lt=bt=ut=null,fh=!1,o)throw Error(t(300));return i}function ep(){var i=Xu!==0;return Xu=0,i}function Sr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ut.memoizedState=Lt=i:Lt=Lt.next=i,Lt}function Gn(){if(bt===null){var i=ut.alternate;i=i!==null?i.memoizedState:null}else i=bt.next;var o=Lt===null?ut.memoizedState:Lt.next;if(o!==null)Lt=o,bt=i;else{if(i===null)throw Error(t(310));bt=i,i={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Lt===null?ut.memoizedState=Lt=i:Lt=Lt.next=i}return Lt}function Zu(i,o){return typeof o=="function"?o(i):o}function tp(i){var o=Gn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=bt,p=h.baseQueue,_=u.pending;if(_!==null){if(p!==null){var I=p.next;p.next=_.next,_.next=I}h.baseQueue=p=_,u.pending=null}if(p!==null){_=p.next,h=h.baseState;var A=I=null,k=null,B=_;do{var J=B.lane;if((js&J)===J)k!==null&&(k=k.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:i(h,B.action);else{var Y={lane:J,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};k===null?(A=k=Y,I=h):k=k.next=Y,ut.lanes|=J,qs|=J}B=B.next}while(B!==null&&B!==_);k===null?I=h:k.next=A,ar(h,o.memoizedState)||(In=!0),o.memoizedState=h,o.baseState=I,o.baseQueue=k,u.lastRenderedState=h}if(i=u.interleaved,i!==null){p=i;do _=p.lane,ut.lanes|=_,qs|=_,p=p.next;while(p!==i)}else p===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function np(i){var o=Gn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=u.dispatch,p=u.pending,_=o.memoizedState;if(p!==null){u.pending=null;var I=p=p.next;do _=i(_,I.action),I=I.next;while(I!==p);ar(_,o.memoizedState)||(In=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),u.lastRenderedState=_}return[_,h]}function cy(){}function hy(i,o){var u=ut,h=Gn(),p=o(),_=!ar(h.memoizedState,p);if(_&&(h.memoizedState=p,In=!0),h=h.queue,rp(py.bind(null,u,h,i),[i]),h.getSnapshot!==o||_||Lt!==null&&Lt.memoizedState.tag&1){if(u.flags|=2048,el(9,fy.bind(null,u,h,p,o),void 0,null),Mt===null)throw Error(t(349));js&30||dy(u,o,p)}return p}function dy(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=ut.updateQueue,o===null?(o={lastEffect:null,stores:null},ut.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function fy(i,o,u,h){o.value=u,o.getSnapshot=h,my(o)&&gy(i)}function py(i,o,u){return u(function(){my(o)&&gy(i)})}function my(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!ar(i,u)}catch{return!0}}function gy(i){var o=ti(i,1);o!==null&&dr(o,i,1,-1)}function _y(i){var o=Sr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zu,lastRenderedState:i},o.queue=i,i=i.dispatch=GS.bind(null,ut,i),[o.memoizedState,i]}function el(i,o,u,h){return i={tag:i,create:o,destroy:u,deps:h,next:null},o=ut.updateQueue,o===null?(o={lastEffect:null,stores:null},ut.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(h=u.next,u.next=i,i.next=h,o.lastEffect=i)),i}function yy(){return Gn().memoizedState}function ph(i,o,u,h){var p=Sr();ut.flags|=i,p.memoizedState=el(1|o,u,void 0,h===void 0?null:h)}function mh(i,o,u,h){var p=Gn();h=h===void 0?null:h;var _=void 0;if(bt!==null){var I=bt.memoizedState;if(_=I.destroy,h!==null&&Xf(h,I.deps)){p.memoizedState=el(o,u,_,h);return}}ut.flags|=i,p.memoizedState=el(1|o,u,_,h)}function vy(i,o){return ph(8390656,8,i,o)}function rp(i,o){return mh(2048,8,i,o)}function wy(i,o){return mh(4,2,i,o)}function Iy(i,o){return mh(4,4,i,o)}function Ey(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Ty(i,o,u){return u=u!=null?u.concat([i]):null,mh(4,4,Ey.bind(null,o,i),u)}function ip(){}function Sy(i,o){var u=Gn();o=o===void 0?null:o;var h=u.memoizedState;return h!==null&&o!==null&&Xf(o,h[1])?h[0]:(u.memoizedState=[i,o],i)}function Ay(i,o){var u=Gn();o=o===void 0?null:o;var h=u.memoizedState;return h!==null&&o!==null&&Xf(o,h[1])?h[0]:(i=i(),u.memoizedState=[i,o],i)}function Ry(i,o,u){return js&21?(ar(u,o)||(u=Ds(),ut.lanes|=u,qs|=u,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,In=!0),i.memoizedState=u)}function $S(i,o){var u=Ve;Ve=u!==0&&4>u?u:4,i(!0);var h=Yf.transition;Yf.transition={};try{i(!1),o()}finally{Ve=u,Yf.transition=h}}function Py(){return Gn().memoizedState}function WS(i,o,u){var h=ji(i);if(u={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null},ky(i))Cy(o,u);else if(u=sy(i,o,u,h),u!==null){var p=hn();dr(u,i,h,p),by(u,o,h)}}function GS(i,o,u){var h=ji(i),p={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null};if(ky(i))Cy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var I=o.lastRenderedState,A=_(I,u);if(p.hasEagerState=!0,p.eagerState=A,ar(A,I)){var k=o.interleaved;k===null?(p.next=p,Wf(o)):(p.next=k.next,k.next=p),o.interleaved=p;return}}catch{}finally{}u=sy(i,o,p,h),u!==null&&(p=hn(),dr(u,i,h,p),by(u,o,h))}}function ky(i){var o=i.alternate;return i===ut||o!==null&&o===ut}function Cy(i,o){Yu=fh=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function by(i,o,u){if(u&4194240){var h=o.lanes;h&=i.pendingLanes,u|=h,o.lanes=u,Pi(i,u)}}var gh={readContext:Wn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},KS={readContext:Wn,useCallback:function(i,o){return Sr().memoizedState=[i,o===void 0?null:o],i},useContext:Wn,useEffect:vy,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,ph(4194308,4,Ey.bind(null,o,i),u)},useLayoutEffect:function(i,o){return ph(4194308,4,i,o)},useInsertionEffect:function(i,o){return ph(4,2,i,o)},useMemo:function(i,o){var u=Sr();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var h=Sr();return o=u!==void 0?u(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=WS.bind(null,ut,i),[h.memoizedState,i]},useRef:function(i){var o=Sr();return i={current:i},o.memoizedState=i},useState:_y,useDebugValue:ip,useDeferredValue:function(i){return Sr().memoizedState=i},useTransition:function(){var i=_y(!1),o=i[0];return i=$S.bind(null,i[1]),Sr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var h=ut,p=Sr();if(tt){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Mt===null)throw Error(t(349));js&30||dy(h,o,u)}p.memoizedState=u;var _={value:u,getSnapshot:o};return p.queue=_,vy(py.bind(null,h,_,i),[i]),h.flags|=2048,el(9,fy.bind(null,h,_,u,o),void 0,null),u},useId:function(){var i=Sr(),o=Mt.identifierPrefix;if(tt){var u=ei,h=Zr;u=(h&~(1<<32-un(h)-1)).toString(32)+u,o=":"+o+"R"+u,u=Xu++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=qS++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},HS={readContext:Wn,useCallback:Sy,useContext:Wn,useEffect:rp,useImperativeHandle:Ty,useInsertionEffect:wy,useLayoutEffect:Iy,useMemo:Ay,useReducer:tp,useRef:yy,useState:function(){return tp(Zu)},useDebugValue:ip,useDeferredValue:function(i){var o=Gn();return Ry(o,bt.memoizedState,i)},useTransition:function(){var i=tp(Zu)[0],o=Gn().memoizedState;return[i,o]},useMutableSource:cy,useSyncExternalStore:hy,useId:Py,unstable_isNewReconciler:!1},QS={readContext:Wn,useCallback:Sy,useContext:Wn,useEffect:rp,useImperativeHandle:Ty,useInsertionEffect:wy,useLayoutEffect:Iy,useMemo:Ay,useReducer:np,useRef:yy,useState:function(){return np(Zu)},useDebugValue:ip,useDeferredValue:function(i){var o=Gn();return bt===null?o.memoizedState=i:Ry(o,bt.memoizedState,i)},useTransition:function(){var i=np(Zu)[0],o=Gn().memoizedState;return[i,o]},useMutableSource:cy,useSyncExternalStore:hy,useId:Py,unstable_isNewReconciler:!1};function lr(i,o){if(i&&i.defaultProps){o=oe({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function sp(i,o,u,h){o=i.memoizedState,u=u(h,o),u=u==null?o:oe({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var _h={isMounted:function(i){return(i=i._reactInternals)?er(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var h=hn(),p=ji(i),_=ni(h,p);_.payload=o,u!=null&&(_.callback=u),o=Fi(i,_,p),o!==null&&(dr(o,i,p,h),lh(o,i,p))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var h=hn(),p=ji(i),_=ni(h,p);_.tag=1,_.payload=o,u!=null&&(_.callback=u),o=Fi(i,_,p),o!==null&&(dr(o,i,p,h),lh(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=hn(),h=ji(i),p=ni(u,h);p.tag=2,o!=null&&(p.callback=o),o=Fi(i,p,h),o!==null&&(dr(o,i,h,u),lh(o,i,h))}};function Dy(i,o,u,h,p,_,I){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,I):o.prototype&&o.prototype.isPureReactComponent?!Bu(u,h)||!Bu(p,_):!0}function Ny(i,o,u){var h=!1,p=Oi,_=o.contextType;return typeof _=="object"&&_!==null?_=Wn(_):(p=wn(o)?Ms:Zt.current,h=o.contextTypes,_=(h=h!=null)?sa(i,p):Oi),o=new o(u,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=_h,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Vy(i,o,u,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,h),o.state!==i&&_h.enqueueReplaceState(o,o.state,null)}function op(i,o,u,h){var p=i.stateNode;p.props=u,p.state=i.memoizedState,p.refs={},Gf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Wn(_):(_=wn(o)?Ms:Zt.current,p.context=sa(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(sp(i,o,_,u),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&_h.enqueueReplaceState(p,p.state,null),ch(i,u,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function fa(i,o){try{var u="",h=o;do u+=ke(h),h=h.return;while(h);var p=u}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function ap(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function up(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var JS=typeof WeakMap=="function"?WeakMap:Map;function xy(i,o,u){u=ni(-1,u),u.tag=3,u.payload={element:null};var h=o.value;return u.callback=function(){Sh||(Sh=!0,Tp=h),up(i,o)},u}function Oy(i,o,u){u=ni(-1,u),u.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;u.payload=function(){return h(p)},u.callback=function(){up(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(u.callback=function(){up(i,o),typeof h!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var I=o.stack;this.componentDidCatch(o.value,{componentStack:I!==null?I:""})}),u}function Ly(i,o,u){var h=i.pingCache;if(h===null){h=i.pingCache=new JS;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(u)||(p.add(u),i=cA.bind(null,i,o,u),o.then(i,i))}function My(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Fy(i,o,u,h,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=ni(-1,1),o.tag=2,Fi(u,o,1))),u.lanes|=1),i)}var YS=Ee.ReactCurrentOwner,In=!1;function cn(i,o,u,h){o.child=i===null?iy(o,null,u,h):la(o,i.child,u,h)}function Uy(i,o,u,h,p){u=u.render;var _=o.ref;return ha(o,p),h=Zf(i,o,u,h,_,p),u=ep(),i!==null&&!In?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ri(i,o,p)):(tt&&u&&Lf(o),o.flags|=1,cn(i,o,h,p),o.child)}function By(i,o,u,h,p){if(i===null){var _=u.type;return typeof _=="function"&&!bp(_)&&_.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=_,zy(i,o,_,h,p)):(i=bh(u.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&p)){var I=_.memoizedProps;if(u=u.compare,u=u!==null?u:Bu,u(I,h)&&i.ref===o.ref)return ri(i,o,p)}return o.flags|=1,i=$i(_,h),i.ref=o.ref,i.return=o,o.child=i}function zy(i,o,u,h,p){if(i!==null){var _=i.memoizedProps;if(Bu(_,h)&&i.ref===o.ref)if(In=!1,o.pendingProps=h=_,(i.lanes&p)!==0)i.flags&131072&&(In=!0);else return o.lanes=i.lanes,ri(i,o,p)}return lp(i,o,u,h,p)}function jy(i,o,u){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(ma,On),On|=u;else{if(!(u&1073741824))return i=_!==null?_.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Qe(ma,On),On|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:u,Qe(ma,On),On|=h}else _!==null?(h=_.baseLanes|u,o.memoizedState=null):h=u,Qe(ma,On),On|=h;return cn(i,o,p,u),o.child}function qy(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function lp(i,o,u,h,p){var _=wn(u)?Ms:Zt.current;return _=sa(o,_),ha(o,p),u=Zf(i,o,u,h,_,p),h=ep(),i!==null&&!In?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ri(i,o,p)):(tt&&h&&Lf(o),o.flags|=1,cn(i,o,u,p),o.child)}function $y(i,o,u,h,p){if(wn(u)){var _=!0;th(o)}else _=!1;if(ha(o,p),o.stateNode===null)vh(i,o),Ny(o,u,h),op(o,u,h,p),h=!0;else if(i===null){var I=o.stateNode,A=o.memoizedProps;I.props=A;var k=I.context,B=u.contextType;typeof B=="object"&&B!==null?B=Wn(B):(B=wn(u)?Ms:Zt.current,B=sa(o,B));var J=u.getDerivedStateFromProps,Y=typeof J=="function"||typeof I.getSnapshotBeforeUpdate=="function";Y||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(A!==h||k!==B)&&Vy(o,I,h,B),Mi=!1;var H=o.memoizedState;I.state=H,ch(o,h,I,p),k=o.memoizedState,A!==h||H!==k||vn.current||Mi?(typeof J=="function"&&(sp(o,u,J,h),k=o.memoizedState),(A=Mi||Dy(o,u,A,h,H,k,B))?(Y||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(o.flags|=4194308)):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=k),I.props=h,I.state=k,I.context=B,h=A):(typeof I.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{I=o.stateNode,oy(i,o),A=o.memoizedProps,B=o.type===o.elementType?A:lr(o.type,A),I.props=B,Y=o.pendingProps,H=I.context,k=u.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=wn(u)?Ms:Zt.current,k=sa(o,k));var ie=u.getDerivedStateFromProps;(J=typeof ie=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(A!==Y||H!==k)&&Vy(o,I,h,k),Mi=!1,H=o.memoizedState,I.state=H,ch(o,h,I,p);var le=o.memoizedState;A!==Y||H!==le||vn.current||Mi?(typeof ie=="function"&&(sp(o,u,ie,h),le=o.memoizedState),(B=Mi||Dy(o,u,B,h,H,le,k)||!1)?(J||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(h,le,k),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(h,le,k)),typeof I.componentDidUpdate=="function"&&(o.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof I.componentDidUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=le),I.props=h,I.state=le,I.context=k,h=B):(typeof I.componentDidUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(o.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&H===i.memoizedState||(o.flags|=1024),h=!1)}return cp(i,o,u,h,_,p)}function cp(i,o,u,h,p,_){qy(i,o);var I=(o.flags&128)!==0;if(!h&&!I)return p&&Q_(o,u,!1),ri(i,o,_);h=o.stateNode,YS.current=o;var A=I&&typeof u.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&I?(o.child=la(o,i.child,null,_),o.child=la(o,null,A,_)):cn(i,o,A,_),o.memoizedState=h.state,p&&Q_(o,u,!0),o.child}function Wy(i){var o=i.stateNode;o.pendingContext?K_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&K_(i,o.context,!1),Kf(i,o.containerInfo)}function Gy(i,o,u,h,p){return ua(),Bf(p),o.flags|=256,cn(i,o,u,h),o.child}var hp={dehydrated:null,treeContext:null,retryLane:0};function dp(i){return{baseLanes:i,cachePool:null,transitions:null}}function Ky(i,o,u){var h=o.pendingProps,p=at.current,_=!1,I=(o.flags&128)!==0,A;if((A=I)||(A=i!==null&&i.memoizedState===null?!1:(p&2)!==0),A?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Qe(at,p&1),i===null)return Uf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(I=h.children,i=h.fallback,_?(h=o.mode,_=o.child,I={mode:"hidden",children:I},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=I):_=Dh(I,h,0,null),i=Ks(i,h,u,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=dp(u),o.memoizedState=hp,i):fp(o,I));if(p=i.memoizedState,p!==null&&(A=p.dehydrated,A!==null))return XS(i,o,I,h,A,p,u);if(_){_=h.fallback,I=o.mode,p=i.child,A=p.sibling;var k={mode:"hidden",children:h.children};return!(I&1)&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=k,o.deletions=null):(h=$i(p,k),h.subtreeFlags=p.subtreeFlags&14680064),A!==null?_=$i(A,_):(_=Ks(_,I,u,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,I=i.child.memoizedState,I=I===null?dp(u):{baseLanes:I.baseLanes|u,cachePool:null,transitions:I.transitions},_.memoizedState=I,_.childLanes=i.childLanes&~u,o.memoizedState=hp,h}return _=i.child,i=_.sibling,h=$i(_,{mode:"visible",children:h.children}),!(o.mode&1)&&(h.lanes=u),h.return=o,h.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=h,o.memoizedState=null,h}function fp(i,o){return o=Dh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function yh(i,o,u,h){return h!==null&&Bf(h),la(o,i.child,null,u),i=fp(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function XS(i,o,u,h,p,_,I){if(u)return o.flags&256?(o.flags&=-257,h=ap(Error(t(422))),yh(i,o,I,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=Dh({mode:"visible",children:h.children},p,0,null),_=Ks(_,p,I,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,o.mode&1&&la(o,i.child,null,I),o.child.memoizedState=dp(I),o.memoizedState=hp,_);if(!(o.mode&1))return yh(i,o,I,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var A=h.dgst;return h=A,_=Error(t(419)),h=ap(_,h,void 0),yh(i,o,I,h)}if(A=(I&i.childLanes)!==0,In||A){if(h=Mt,h!==null){switch(I&-I){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|I)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ti(i,p),dr(h,i,p,-1))}return Cp(),h=ap(Error(t(421))),yh(i,o,I,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=hA.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,xn=Vi(p.nextSibling),Vn=o,tt=!0,ur=null,i!==null&&(qn[$n++]=Zr,qn[$n++]=ei,qn[$n++]=Fs,Zr=i.id,ei=i.overflow,Fs=o),o=fp(o,h.children),o.flags|=4096,o)}function Hy(i,o,u){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),$f(i.return,o,u)}function pp(i,o,u,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=u,_.tailMode=p)}function Qy(i,o,u){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(cn(i,o,h.children,u),h=at.current,h&2)h=h&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Hy(i,u,o);else if(i.tag===19)Hy(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(Qe(at,h),!(o.mode&1))o.memoizedState=null;else switch(p){case"forwards":for(u=o.child,p=null;u!==null;)i=u.alternate,i!==null&&hh(i)===null&&(p=u),u=u.sibling;u=p,u===null?(p=o.child,o.child=null):(p=u.sibling,u.sibling=null),pp(o,!1,p,u,_);break;case"backwards":for(u=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&hh(i)===null){o.child=p;break}i=p.sibling,p.sibling=u,u=p,p=i}pp(o,!0,u,null,_);break;case"together":pp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function vh(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ri(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),qs|=o.lanes,!(u&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=$i(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=$i(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function ZS(i,o,u){switch(o.tag){case 3:Wy(o),ua();break;case 5:ly(o);break;case 1:wn(o.type)&&th(o);break;case 4:Kf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;Qe(ah,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Qe(at,at.current&1),o.flags|=128,null):u&o.child.childLanes?Ky(i,o,u):(Qe(at,at.current&1),i=ri(i,o,u),i!==null?i.sibling:null);Qe(at,at.current&1);break;case 19:if(h=(u&o.childLanes)!==0,i.flags&128){if(h)return Qy(i,o,u);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Qe(at,at.current),h)break;return null;case 22:case 23:return o.lanes=0,jy(i,o,u)}return ri(i,o,u)}var Jy,mp,Yy,Xy;Jy=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},mp=function(){},Yy=function(i,o,u,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,zs(Tr.current);var _=null;switch(u){case"input":p=ws(i,p),h=ws(i,h),_=[];break;case"select":p=oe({},p,{value:void 0}),h=oe({},h,{value:void 0}),_=[];break;case"textarea":p=mu(i,p),h=mu(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Xc)}Iu(u,h);var I;u=null;for(B in p)if(!h.hasOwnProperty(B)&&p.hasOwnProperty(B)&&p[B]!=null)if(B==="style"){var A=p[B];for(I in A)A.hasOwnProperty(I)&&(u||(u={}),u[I]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(s.hasOwnProperty(B)?_||(_=[]):(_=_||[]).push(B,null));for(B in h){var k=h[B];if(A=p!=null?p[B]:void 0,h.hasOwnProperty(B)&&k!==A&&(k!=null||A!=null))if(B==="style")if(A){for(I in A)!A.hasOwnProperty(I)||k&&k.hasOwnProperty(I)||(u||(u={}),u[I]="");for(I in k)k.hasOwnProperty(I)&&A[I]!==k[I]&&(u||(u={}),u[I]=k[I])}else u||(_||(_=[]),_.push(B,u)),u=k;else B==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,A=A?A.__html:void 0,k!=null&&A!==k&&(_=_||[]).push(B,k)):B==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(B,""+k):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(s.hasOwnProperty(B)?(k!=null&&B==="onScroll"&&Ye("scroll",i),_||A===k||(_=[])):(_=_||[]).push(B,k))}u&&(_=_||[]).push("style",u);var B=_;(o.updateQueue=B)&&(o.flags|=4)}},Xy=function(i,o,u,h){u!==h&&(o.flags|=4)};function tl(i,o){if(!tt)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function tn(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,h=0;if(o)for(var p=i.child;p!==null;)u|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)u|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=u,o}function eA(i,o,u){var h=o.pendingProps;switch(Mf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(o),null;case 1:return wn(o.type)&&eh(),tn(o),null;case 3:return h=o.stateNode,da(),Xe(vn),Xe(Zt),Jf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(sh(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,ur!==null&&(Rp(ur),ur=null))),mp(i,o),tn(o),null;case 5:Hf(o);var p=zs(Ju.current);if(u=o.type,i!==null&&o.stateNode!=null)Yy(i,o,u,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return tn(o),null}if(i=zs(Tr.current),sh(o)){h=o.stateNode,u=o.type;var _=o.memoizedProps;switch(h[Er]=o,h[Wu]=_,i=(o.mode&1)!==0,u){case"dialog":Ye("cancel",h),Ye("close",h);break;case"iframe":case"object":case"embed":Ye("load",h);break;case"video":case"audio":for(p=0;p<ju.length;p++)Ye(ju[p],h);break;case"source":Ye("error",h);break;case"img":case"image":case"link":Ye("error",h),Ye("load",h);break;case"details":Ye("toggle",h);break;case"input":Po(h,_),Ye("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},Ye("invalid",h);break;case"textarea":Co(h,_),Ye("invalid",h)}Iu(u,_),p=null;for(var I in _)if(_.hasOwnProperty(I)){var A=_[I];I==="children"?typeof A=="string"?h.textContent!==A&&(_.suppressHydrationWarning!==!0&&Yc(h.textContent,A,i),p=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(_.suppressHydrationWarning!==!0&&Yc(h.textContent,A,i),p=["children",""+A]):s.hasOwnProperty(I)&&A!=null&&I==="onScroll"&&Ye("scroll",h)}switch(u){case"input":zr(h),Tc(h,_,!0);break;case"textarea":zr(h),gu(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Xc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{I=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Pt(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=I.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=I.createElement(u,{is:h.is}):(i=I.createElement(u),u==="select"&&(I=i,h.multiple?I.multiple=!0:h.size&&(I.size=h.size))):i=I.createElementNS(i,u),i[Er]=o,i[Wu]=h,Jy(i,o,!1,!1),o.stateNode=i;e:{switch(I=Eu(u,h),u){case"dialog":Ye("cancel",i),Ye("close",i),p=h;break;case"iframe":case"object":case"embed":Ye("load",i),p=h;break;case"video":case"audio":for(p=0;p<ju.length;p++)Ye(ju[p],i);p=h;break;case"source":Ye("error",i),p=h;break;case"img":case"image":case"link":Ye("error",i),Ye("load",i),p=h;break;case"details":Ye("toggle",i),p=h;break;case"input":Po(i,h),p=ws(i,h),Ye("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=oe({},h,{value:void 0}),Ye("invalid",i);break;case"textarea":Co(i,h),p=mu(i,h),Ye("invalid",i);break;default:p=h}Iu(u,p),A=p;for(_ in A)if(A.hasOwnProperty(_)){var k=A[_];_==="style"?vu(i,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&_u(i,k)):_==="children"?typeof k=="string"?(u!=="textarea"||k!=="")&&Ei(i,k):typeof k=="number"&&Ei(i,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?k!=null&&_==="onScroll"&&Ye("scroll",i):k!=null&&ae(i,_,k,I))}switch(u){case"input":zr(i),Tc(i,h,!1);break;case"textarea":zr(i),gu(i);break;case"option":h.value!=null&&i.setAttribute("value",""+ze(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?qr(i,!!h.multiple,_,!1):h.defaultValue!=null&&qr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Xc)}switch(u){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return tn(o),null;case 6:if(i&&o.stateNode!=null)Xy(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(u=zs(Ju.current),zs(Tr.current),sh(o)){if(h=o.stateNode,u=o.memoizedProps,h[Er]=o,(_=h.nodeValue!==u)&&(i=Vn,i!==null))switch(i.tag){case 3:Yc(h.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Yc(h.nodeValue,u,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(u.nodeType===9?u:u.ownerDocument).createTextNode(h),h[Er]=o,o.stateNode=h}return tn(o),null;case 13:if(Xe(at),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(tt&&xn!==null&&o.mode&1&&!(o.flags&128))ty(),ua(),o.flags|=98560,_=!1;else if(_=sh(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Er]=o}else ua(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;tn(o),_=!1}else ur!==null&&(Rp(ur),ur=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,o.mode&1&&(i===null||at.current&1?Dt===0&&(Dt=3):Cp())),o.updateQueue!==null&&(o.flags|=4),tn(o),null);case 4:return da(),mp(i,o),i===null&&qu(o.stateNode.containerInfo),tn(o),null;case 10:return qf(o.type._context),tn(o),null;case 17:return wn(o.type)&&eh(),tn(o),null;case 19:if(Xe(at),_=o.memoizedState,_===null)return tn(o),null;if(h=(o.flags&128)!==0,I=_.rendering,I===null)if(h)tl(_,!1);else{if(Dt!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(I=hh(i),I!==null){for(o.flags|=128,tl(_,!1),h=I.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=u,u=o.child;u!==null;)_=u,i=h,_.flags&=14680066,I=_.alternate,I===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=I.childLanes,_.lanes=I.lanes,_.child=I.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=I.memoizedProps,_.memoizedState=I.memoizedState,_.updateQueue=I.updateQueue,_.type=I.type,i=I.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return Qe(at,at.current&1|2),o.child}i=i.sibling}_.tail!==null&&He()>ga&&(o.flags|=128,h=!0,tl(_,!1),o.lanes=4194304)}else{if(!h)if(i=hh(I),i!==null){if(o.flags|=128,h=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),tl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!I.alternate&&!tt)return tn(o),null}else 2*He()-_.renderingStartTime>ga&&u!==1073741824&&(o.flags|=128,h=!0,tl(_,!1),o.lanes=4194304);_.isBackwards?(I.sibling=o.child,o.child=I):(u=_.last,u!==null?u.sibling=I:o.child=I,_.last=I)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=He(),o.sibling=null,u=at.current,Qe(at,h?u&1|2:u&1),o):(tn(o),null);case 22:case 23:return kp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&o.mode&1?On&1073741824&&(tn(o),o.subtreeFlags&6&&(o.flags|=8192)):tn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function tA(i,o){switch(Mf(o),o.tag){case 1:return wn(o.type)&&eh(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return da(),Xe(vn),Xe(Zt),Jf(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return Hf(o),null;case 13:if(Xe(at),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ua()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Xe(at),null;case 4:return da(),null;case 10:return qf(o.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var wh=!1,nn=!1,nA=typeof WeakSet=="function"?WeakSet:Set,ue=null;function pa(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(h){dt(i,o,h)}else u.current=null}function gp(i,o,u){try{u()}catch(h){dt(i,o,h)}}var Zy=!1;function rA(i,o){if(kf=bi,i=D_(),wf(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{u.nodeType,_.nodeType}catch{u=null;break e}var I=0,A=-1,k=-1,B=0,J=0,Y=i,H=null;t:for(;;){for(var ie;Y!==u||p!==0&&Y.nodeType!==3||(A=I+p),Y!==_||h!==0&&Y.nodeType!==3||(k=I+h),Y.nodeType===3&&(I+=Y.nodeValue.length),(ie=Y.firstChild)!==null;)H=Y,Y=ie;for(;;){if(Y===i)break t;if(H===u&&++B===p&&(A=I),H===_&&++J===h&&(k=I),(ie=Y.nextSibling)!==null)break;Y=H,H=Y.parentNode}Y=ie}u=A===-1||k===-1?null:{start:A,end:k}}else u=null}u=u||{start:0,end:0}}else u=null;for(Cf={focusedElem:i,selectionRange:u},bi=!1,ue=o;ue!==null;)if(o=ue,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ue=i;else for(;ue!==null;){o=ue;try{var le=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var he=le.memoizedProps,vt=le.memoizedState,F=o.stateNode,D=F.getSnapshotBeforeUpdate(o.elementType===o.type?he:lr(o.type,he),vt);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=o.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){dt(o,o.return,Z)}if(i=o.sibling,i!==null){i.return=o.return,ue=i;break}ue=o.return}return le=Zy,Zy=!1,le}function nl(i,o,u){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&gp(o,u,_)}p=p.next}while(p!==h)}}function Ih(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var h=u.create;u.destroy=h()}u=u.next}while(u!==o)}}function _p(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function ev(i){var o=i.alternate;o!==null&&(i.alternate=null,ev(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Er],delete o[Wu],delete o[Vf],delete o[US],delete o[BS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function tv(i){return i.tag===5||i.tag===3||i.tag===4}function nv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||tv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function yp(i,o,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Xc));else if(h!==4&&(i=i.child,i!==null))for(yp(i,o,u),i=i.sibling;i!==null;)yp(i,o,u),i=i.sibling}function vp(i,o,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(vp(i,o,u),i=i.sibling;i!==null;)vp(i,o,u),i=i.sibling}var Wt=null,cr=!1;function Ui(i,o,u){for(u=u.child;u!==null;)rv(i,o,u),u=u.sibling}function rv(i,o,u){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Cs,u)}catch{}switch(u.tag){case 5:nn||pa(u,o);case 6:var h=Wt,p=cr;Wt=null,Ui(i,o,u),Wt=h,cr=p,Wt!==null&&(cr?(i=Wt,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):Wt.removeChild(u.stateNode));break;case 18:Wt!==null&&(cr?(i=Wt,u=u.stateNode,i.nodeType===8?Nf(i.parentNode,u):i.nodeType===1&&Nf(i,u),sr(i)):Nf(Wt,u.stateNode));break;case 4:h=Wt,p=cr,Wt=u.stateNode.containerInfo,cr=!0,Ui(i,o,u),Wt=h,cr=p;break;case 0:case 11:case 14:case 15:if(!nn&&(h=u.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,I=_.destroy;_=_.tag,I!==void 0&&(_&2||_&4)&&gp(u,o,I),p=p.next}while(p!==h)}Ui(i,o,u);break;case 1:if(!nn&&(pa(u,o),h=u.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=u.memoizedProps,h.state=u.memoizedState,h.componentWillUnmount()}catch(A){dt(u,o,A)}Ui(i,o,u);break;case 21:Ui(i,o,u);break;case 22:u.mode&1?(nn=(h=nn)||u.memoizedState!==null,Ui(i,o,u),nn=h):Ui(i,o,u);break;default:Ui(i,o,u)}}function iv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new nA),o.forEach(function(h){var p=dA.bind(null,i,h);u.has(h)||(u.add(h),h.then(p,p))})}}function hr(i,o){var u=o.deletions;if(u!==null)for(var h=0;h<u.length;h++){var p=u[h];try{var _=i,I=o,A=I;e:for(;A!==null;){switch(A.tag){case 5:Wt=A.stateNode,cr=!1;break e;case 3:Wt=A.stateNode.containerInfo,cr=!0;break e;case 4:Wt=A.stateNode.containerInfo,cr=!0;break e}A=A.return}if(Wt===null)throw Error(t(160));rv(_,I,p),Wt=null,cr=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(B){dt(p,o,B)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)sv(o,i),o=o.sibling}function sv(i,o){var u=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hr(o,i),Ar(i),h&4){try{nl(3,i,i.return),Ih(3,i)}catch(he){dt(i,i.return,he)}try{nl(5,i,i.return)}catch(he){dt(i,i.return,he)}}break;case 1:hr(o,i),Ar(i),h&512&&u!==null&&pa(u,u.return);break;case 5:if(hr(o,i),Ar(i),h&512&&u!==null&&pa(u,u.return),i.flags&32){var p=i.stateNode;try{Ei(p,"")}catch(he){dt(i,i.return,he)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,I=u!==null?u.memoizedProps:_,A=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{A==="input"&&_.type==="radio"&&_.name!=null&&fu(p,_),Eu(A,I);var B=Eu(A,_);for(I=0;I<k.length;I+=2){var J=k[I],Y=k[I+1];J==="style"?vu(p,Y):J==="dangerouslySetInnerHTML"?_u(p,Y):J==="children"?Ei(p,Y):ae(p,J,Y,B)}switch(A){case"input":pu(p,_);break;case"textarea":bo(p,_);break;case"select":var H=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ie=_.value;ie!=null?qr(p,!!_.multiple,ie,!1):H!==!!_.multiple&&(_.defaultValue!=null?qr(p,!!_.multiple,_.defaultValue,!0):qr(p,!!_.multiple,_.multiple?[]:"",!1))}p[Wu]=_}catch(he){dt(i,i.return,he)}}break;case 6:if(hr(o,i),Ar(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(he){dt(i,i.return,he)}}break;case 3:if(hr(o,i),Ar(i),h&4&&u!==null&&u.memoizedState.isDehydrated)try{sr(o.containerInfo)}catch(he){dt(i,i.return,he)}break;case 4:hr(o,i),Ar(i);break;case 13:hr(o,i),Ar(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Ep=He())),h&4&&iv(i);break;case 22:if(J=u!==null&&u.memoizedState!==null,i.mode&1?(nn=(B=nn)||J,hr(o,i),nn=B):hr(o,i),Ar(i),h&8192){if(B=i.memoizedState!==null,(i.stateNode.isHidden=B)&&!J&&i.mode&1)for(ue=i,J=i.child;J!==null;){for(Y=ue=J;ue!==null;){switch(H=ue,ie=H.child,H.tag){case 0:case 11:case 14:case 15:nl(4,H,H.return);break;case 1:pa(H,H.return);var le=H.stateNode;if(typeof le.componentWillUnmount=="function"){h=H,u=H.return;try{o=h,le.props=o.memoizedProps,le.state=o.memoizedState,le.componentWillUnmount()}catch(he){dt(h,u,he)}}break;case 5:pa(H,H.return);break;case 22:if(H.memoizedState!==null){uv(Y);continue}}ie!==null?(ie.return=H,ue=ie):uv(Y)}J=J.sibling}e:for(J=null,Y=i;;){if(Y.tag===5){if(J===null){J=Y;try{p=Y.stateNode,B?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(A=Y.stateNode,k=Y.memoizedProps.style,I=k!=null&&k.hasOwnProperty("display")?k.display:null,A.style.display=yu("display",I))}catch(he){dt(i,i.return,he)}}}else if(Y.tag===6){if(J===null)try{Y.stateNode.nodeValue=B?"":Y.memoizedProps}catch(he){dt(i,i.return,he)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===i)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===i)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===i)break e;J===Y&&(J=null),Y=Y.return}J===Y&&(J=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:hr(o,i),Ar(i),h&4&&iv(i);break;case 21:break;default:hr(o,i),Ar(i)}}function Ar(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(tv(u)){var h=u;break e}u=u.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Ei(p,""),h.flags&=-33);var _=nv(i);vp(i,_,p);break;case 3:case 4:var I=h.stateNode.containerInfo,A=nv(i);yp(i,A,I);break;default:throw Error(t(161))}}catch(k){dt(i,i.return,k)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function iA(i,o,u){ue=i,ov(i)}function ov(i,o,u){for(var h=(i.mode&1)!==0;ue!==null;){var p=ue,_=p.child;if(p.tag===22&&h){var I=p.memoizedState!==null||wh;if(!I){var A=p.alternate,k=A!==null&&A.memoizedState!==null||nn;A=wh;var B=nn;if(wh=I,(nn=k)&&!B)for(ue=p;ue!==null;)I=ue,k=I.child,I.tag===22&&I.memoizedState!==null?lv(p):k!==null?(k.return=I,ue=k):lv(p);for(;_!==null;)ue=_,ov(_),_=_.sibling;ue=p,wh=A,nn=B}av(i)}else p.subtreeFlags&8772&&_!==null?(_.return=p,ue=_):av(i)}}function av(i){for(;ue!==null;){var o=ue;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:nn||Ih(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!nn)if(u===null)h.componentDidMount();else{var p=o.elementType===o.type?u.memoizedProps:lr(o.type,u.memoizedProps);h.componentDidUpdate(p,u.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&uy(o,_,h);break;case 3:var I=o.updateQueue;if(I!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}uy(o,I,u)}break;case 5:var A=o.stateNode;if(u===null&&o.flags&4){u=A;var k=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&u.focus();break;case"img":k.src&&(u.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var B=o.alternate;if(B!==null){var J=B.memoizedState;if(J!==null){var Y=J.dehydrated;Y!==null&&sr(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}nn||o.flags&512&&_p(o)}catch(H){dt(o,o.return,H)}}if(o===i){ue=null;break}if(u=o.sibling,u!==null){u.return=o.return,ue=u;break}ue=o.return}}function uv(i){for(;ue!==null;){var o=ue;if(o===i){ue=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ue=u;break}ue=o.return}}function lv(i){for(;ue!==null;){var o=ue;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{Ih(4,o)}catch(k){dt(o,u,k)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(k){dt(o,p,k)}}var _=o.return;try{_p(o)}catch(k){dt(o,_,k)}break;case 5:var I=o.return;try{_p(o)}catch(k){dt(o,I,k)}}}catch(k){dt(o,o.return,k)}if(o===i){ue=null;break}var A=o.sibling;if(A!==null){A.return=o.return,ue=A;break}ue=o.return}}var sA=Math.ceil,Eh=Ee.ReactCurrentDispatcher,wp=Ee.ReactCurrentOwner,Kn=Ee.ReactCurrentBatchConfig,Me=0,Mt=null,St=null,Gt=0,On=0,ma=xi(0),Dt=0,rl=null,qs=0,Th=0,Ip=0,il=null,En=null,Ep=0,ga=1/0,ii=null,Sh=!1,Tp=null,Bi=null,Ah=!1,zi=null,Rh=0,sl=0,Sp=null,Ph=-1,kh=0;function hn(){return Me&6?He():Ph!==-1?Ph:Ph=He()}function ji(i){return i.mode&1?Me&2&&Gt!==0?Gt&-Gt:jS.transition!==null?(kh===0&&(kh=Ds()),kh):(i=Ve,i!==0||(i=window.event,i=i===void 0?16:Vu(i.type)),i):1}function dr(i,o,u,h){if(50<sl)throw sl=0,Sp=null,Error(t(185));Ri(i,u,h),(!(Me&2)||i!==Mt)&&(i===Mt&&(!(Me&2)&&(Th|=u),Dt===4&&qi(i,Gt)),Tn(i,h),u===1&&Me===0&&!(o.mode&1)&&(ga=He()+500,nh&&Li()))}function Tn(i,o){var u=i.callbackNode;Gr(i,o);var h=bs(i,i===Mt?Gt:0);if(h===0)u!==null&&ku(u),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(u!=null&&ku(u),o===1)i.tag===0?zS(hv.bind(null,i)):J_(hv.bind(null,i)),MS(function(){!(Me&6)&&Li()}),u=null;else{switch(ki(h)){case 1:u=ks;break;case 4:u=Ti;break;case 16:u=Bn;break;case 536870912:u=kc;break;default:u=Bn}u=vv(u,cv.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function cv(i,o){if(Ph=-1,kh=0,Me&6)throw Error(t(327));var u=i.callbackNode;if(_a()&&i.callbackNode!==u)return null;var h=bs(i,i===Mt?Gt:0);if(h===0)return null;if(h&30||h&i.expiredLanes||o)o=Ch(i,h);else{o=h;var p=Me;Me|=2;var _=fv();(Mt!==i||Gt!==o)&&(ii=null,ga=He()+500,Ws(i,o));do try{uA();break}catch(A){dv(i,A)}while(!0);jf(),Eh.current=_,Me=p,St!==null?o=0:(Mt=null,Gt=0,o=Dt)}if(o!==0){if(o===2&&(p=bn(i),p!==0&&(h=p,o=Ap(i,p))),o===1)throw u=rl,Ws(i,0),qi(i,h),Tn(i,He()),u;if(o===6)qi(i,h);else{if(p=i.current.alternate,!(h&30)&&!oA(p)&&(o=Ch(i,h),o===2&&(_=bn(i),_!==0&&(h=_,o=Ap(i,_))),o===1))throw u=rl,Ws(i,0),qi(i,h),Tn(i,He()),u;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Gs(i,En,ii);break;case 3:if(qi(i,h),(h&130023424)===h&&(o=Ep+500-He(),10<o)){if(bs(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){hn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Df(Gs.bind(null,i,En,ii),o);break}Gs(i,En,ii);break;case 4:if(qi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var I=31-un(h);_=1<<I,I=o[I],I>p&&(p=I),h&=~_}if(h=p,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*sA(h/1960))-h,10<h){i.timeoutHandle=Df(Gs.bind(null,i,En,ii),h);break}Gs(i,En,ii);break;case 5:Gs(i,En,ii);break;default:throw Error(t(329))}}}return Tn(i,He()),i.callbackNode===u?cv.bind(null,i):null}function Ap(i,o){var u=il;return i.current.memoizedState.isDehydrated&&(Ws(i,o).flags|=256),i=Ch(i,o),i!==2&&(o=En,En=u,o!==null&&Rp(o)),i}function Rp(i){En===null?En=i:En.push.apply(En,i)}function oA(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var h=0;h<u.length;h++){var p=u[h],_=p.getSnapshot;p=p.value;try{if(!ar(_(),p))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function qi(i,o){for(o&=~Ip,o&=~Th,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-un(o),h=1<<u;i[u]=-1,o&=~h}}function hv(i){if(Me&6)throw Error(t(327));_a();var o=bs(i,0);if(!(o&1))return Tn(i,He()),null;var u=Ch(i,o);if(i.tag!==0&&u===2){var h=bn(i);h!==0&&(o=h,u=Ap(i,h))}if(u===1)throw u=rl,Ws(i,0),qi(i,o),Tn(i,He()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Gs(i,En,ii),Tn(i,He()),null}function Pp(i,o){var u=Me;Me|=1;try{return i(o)}finally{Me=u,Me===0&&(ga=He()+500,nh&&Li())}}function $s(i){zi!==null&&zi.tag===0&&!(Me&6)&&_a();var o=Me;Me|=1;var u=Kn.transition,h=Ve;try{if(Kn.transition=null,Ve=1,i)return i()}finally{Ve=h,Kn.transition=u,Me=o,!(Me&6)&&Li()}}function kp(){On=ma.current,Xe(ma)}function Ws(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,LS(u)),St!==null)for(u=St.return;u!==null;){var h=u;switch(Mf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&eh();break;case 3:da(),Xe(vn),Xe(Zt),Jf();break;case 5:Hf(h);break;case 4:da();break;case 13:Xe(at);break;case 19:Xe(at);break;case 10:qf(h.type._context);break;case 22:case 23:kp()}u=u.return}if(Mt=i,St=i=$i(i.current,null),Gt=On=o,Dt=0,rl=null,Ip=Th=qs=0,En=il=null,Bs!==null){for(o=0;o<Bs.length;o++)if(u=Bs[o],h=u.interleaved,h!==null){u.interleaved=null;var p=h.next,_=u.pending;if(_!==null){var I=_.next;_.next=p,h.next=I}u.pending=h}Bs=null}return i}function dv(i,o){do{var u=St;try{if(jf(),dh.current=gh,fh){for(var h=ut.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}fh=!1}if(js=0,Lt=bt=ut=null,Yu=!1,Xu=0,wp.current=null,u===null||u.return===null){Dt=1,rl=o,St=null;break}e:{var _=i,I=u.return,A=u,k=o;if(o=Gt,A.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var B=k,J=A,Y=J.tag;if(!(J.mode&1)&&(Y===0||Y===11||Y===15)){var H=J.alternate;H?(J.updateQueue=H.updateQueue,J.memoizedState=H.memoizedState,J.lanes=H.lanes):(J.updateQueue=null,J.memoizedState=null)}var ie=My(I);if(ie!==null){ie.flags&=-257,Fy(ie,I,A,_,o),ie.mode&1&&Ly(_,B,o),o=ie,k=B;var le=o.updateQueue;if(le===null){var he=new Set;he.add(k),o.updateQueue=he}else le.add(k);break e}else{if(!(o&1)){Ly(_,B,o),Cp();break e}k=Error(t(426))}}else if(tt&&A.mode&1){var vt=My(I);if(vt!==null){!(vt.flags&65536)&&(vt.flags|=256),Fy(vt,I,A,_,o),Bf(fa(k,A));break e}}_=k=fa(k,A),Dt!==4&&(Dt=2),il===null?il=[_]:il.push(_),_=I;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var F=xy(_,k,o);ay(_,F);break e;case 1:A=k;var D=_.type,U=_.stateNode;if(!(_.flags&128)&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Bi===null||!Bi.has(U)))){_.flags|=65536,o&=-o,_.lanes|=o;var Z=Oy(_,A,o);ay(_,Z);break e}}_=_.return}while(_!==null)}mv(u)}catch(de){o=de,St===u&&u!==null&&(St=u=u.return);continue}break}while(!0)}function fv(){var i=Eh.current;return Eh.current=gh,i===null?gh:i}function Cp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Mt===null||!(qs&268435455)&&!(Th&268435455)||qi(Mt,Gt)}function Ch(i,o){var u=Me;Me|=2;var h=fv();(Mt!==i||Gt!==o)&&(ii=null,Ws(i,o));do try{aA();break}catch(p){dv(i,p)}while(!0);if(jf(),Me=u,Eh.current=h,St!==null)throw Error(t(261));return Mt=null,Gt=0,Dt}function aA(){for(;St!==null;)pv(St)}function uA(){for(;St!==null&&!Rc();)pv(St)}function pv(i){var o=yv(i.alternate,i,On);i.memoizedProps=i.pendingProps,o===null?mv(i):St=o,wp.current=null}function mv(i){var o=i;do{var u=o.alternate;if(i=o.return,o.flags&32768){if(u=tA(u,o),u!==null){u.flags&=32767,St=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Dt=6,St=null;return}}else if(u=eA(u,o,On),u!==null){St=u;return}if(o=o.sibling,o!==null){St=o;return}St=o=i}while(o!==null);Dt===0&&(Dt=5)}function Gs(i,o,u){var h=Ve,p=Kn.transition;try{Kn.transition=null,Ve=1,lA(i,o,u,h)}finally{Kn.transition=p,Ve=h}return null}function lA(i,o,u,h){do _a();while(zi!==null);if(Me&6)throw Error(t(327));u=i.finishedWork;var p=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=u.lanes|u.childLanes;if(Ge(i,_),i===Mt&&(St=Mt=null,Gt=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Ah||(Ah=!0,vv(Bn,function(){return _a(),null})),_=(u.flags&15990)!==0,u.subtreeFlags&15990||_){_=Kn.transition,Kn.transition=null;var I=Ve;Ve=1;var A=Me;Me|=4,wp.current=null,rA(i,u),sv(u,i),CS(Cf),bi=!!kf,Cf=kf=null,i.current=u,iA(u),df(),Me=A,Ve=I,Kn.transition=_}else i.current=u;if(Ah&&(Ah=!1,zi=i,Rh=p),_=i.pendingLanes,_===0&&(Bi=null),Cc(u.stateNode),Tn(i,He()),o!==null)for(h=i.onRecoverableError,u=0;u<o.length;u++)p=o[u],h(p.value,{componentStack:p.stack,digest:p.digest});if(Sh)throw Sh=!1,i=Tp,Tp=null,i;return Rh&1&&i.tag!==0&&_a(),_=i.pendingLanes,_&1?i===Sp?sl++:(sl=0,Sp=i):sl=0,Li(),null}function _a(){if(zi!==null){var i=ki(Rh),o=Kn.transition,u=Ve;try{if(Kn.transition=null,Ve=16>i?16:i,zi===null)var h=!1;else{if(i=zi,zi=null,Rh=0,Me&6)throw Error(t(331));var p=Me;for(Me|=4,ue=i.current;ue!==null;){var _=ue,I=_.child;if(ue.flags&16){var A=_.deletions;if(A!==null){for(var k=0;k<A.length;k++){var B=A[k];for(ue=B;ue!==null;){var J=ue;switch(J.tag){case 0:case 11:case 15:nl(8,J,_)}var Y=J.child;if(Y!==null)Y.return=J,ue=Y;else for(;ue!==null;){J=ue;var H=J.sibling,ie=J.return;if(ev(J),J===B){ue=null;break}if(H!==null){H.return=ie,ue=H;break}ue=ie}}}var le=_.alternate;if(le!==null){var he=le.child;if(he!==null){le.child=null;do{var vt=he.sibling;he.sibling=null,he=vt}while(he!==null)}}ue=_}}if(_.subtreeFlags&2064&&I!==null)I.return=_,ue=I;else e:for(;ue!==null;){if(_=ue,_.flags&2048)switch(_.tag){case 0:case 11:case 15:nl(9,_,_.return)}var F=_.sibling;if(F!==null){F.return=_.return,ue=F;break e}ue=_.return}}var D=i.current;for(ue=D;ue!==null;){I=ue;var U=I.child;if(I.subtreeFlags&2064&&U!==null)U.return=I,ue=U;else e:for(I=D;ue!==null;){if(A=ue,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Ih(9,A)}}catch(de){dt(A,A.return,de)}if(A===I){ue=null;break e}var Z=A.sibling;if(Z!==null){Z.return=A.return,ue=Z;break e}ue=A.return}}if(Me=p,Li(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Cs,i)}catch{}h=!0}return h}finally{Ve=u,Kn.transition=o}}return!1}function gv(i,o,u){o=fa(u,o),o=xy(i,o,1),i=Fi(i,o,1),o=hn(),i!==null&&(Ri(i,1,o),Tn(i,o))}function dt(i,o,u){if(i.tag===3)gv(i,i,u);else for(;o!==null;){if(o.tag===3){gv(o,i,u);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Bi===null||!Bi.has(h))){i=fa(u,i),i=Oy(o,i,1),o=Fi(o,i,1),i=hn(),o!==null&&(Ri(o,1,i),Tn(o,i));break}}o=o.return}}function cA(i,o,u){var h=i.pingCache;h!==null&&h.delete(o),o=hn(),i.pingedLanes|=i.suspendedLanes&u,Mt===i&&(Gt&u)===u&&(Dt===4||Dt===3&&(Gt&130023424)===Gt&&500>He()-Ep?Ws(i,0):Ip|=u),Tn(i,o)}function _v(i,o){o===0&&(i.mode&1?(o=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):o=1);var u=hn();i=ti(i,o),i!==null&&(Ri(i,o,u),Tn(i,u))}function hA(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),_v(i,u)}function dA(i,o){var u=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(u=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),_v(i,u)}var yv;yv=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||vn.current)In=!0;else{if(!(i.lanes&u)&&!(o.flags&128))return In=!1,ZS(i,o,u);In=!!(i.flags&131072)}else In=!1,tt&&o.flags&1048576&&Y_(o,ih,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;vh(i,o),i=o.pendingProps;var p=sa(o,Zt.current);ha(o,u),p=Zf(null,o,h,i,p,u);var _=ep();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,wn(h)?(_=!0,th(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Gf(o),p.updater=_h,o.stateNode=p,p._reactInternals=o,op(o,h,i,u),o=cp(null,o,h,!0,_,u)):(o.tag=0,tt&&_&&Lf(o),cn(null,o,p,u),o=o.child),o;case 16:h=o.elementType;e:{switch(vh(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=pA(h),i=lr(h,i),p){case 0:o=lp(null,o,h,i,u);break e;case 1:o=$y(null,o,h,i,u);break e;case 11:o=Uy(null,o,h,i,u);break e;case 14:o=By(null,o,h,lr(h.type,i),u);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:lr(h,p),lp(i,o,h,p,u);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:lr(h,p),$y(i,o,h,p,u);case 3:e:{if(Wy(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,oy(i,o),ch(o,h,null,u);var I=o.memoizedState;if(h=I.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=fa(Error(t(423)),o),o=Gy(i,o,h,u,p);break e}else if(h!==p){p=fa(Error(t(424)),o),o=Gy(i,o,h,u,p);break e}else for(xn=Vi(o.stateNode.containerInfo.firstChild),Vn=o,tt=!0,ur=null,u=iy(o,null,h,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(ua(),h===p){o=ri(i,o,u);break e}cn(i,o,h,u)}o=o.child}return o;case 5:return ly(o),i===null&&Uf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,I=p.children,bf(h,p)?I=null:_!==null&&bf(h,_)&&(o.flags|=32),qy(i,o),cn(i,o,I,u),o.child;case 6:return i===null&&Uf(o),null;case 13:return Ky(i,o,u);case 4:return Kf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=la(o,null,h,u):cn(i,o,h,u),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:lr(h,p),Uy(i,o,h,p,u);case 7:return cn(i,o,o.pendingProps,u),o.child;case 8:return cn(i,o,o.pendingProps.children,u),o.child;case 12:return cn(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,I=p.value,Qe(ah,h._currentValue),h._currentValue=I,_!==null)if(ar(_.value,I)){if(_.children===p.children&&!vn.current){o=ri(i,o,u);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var A=_.dependencies;if(A!==null){I=_.child;for(var k=A.firstContext;k!==null;){if(k.context===h){if(_.tag===1){k=ni(-1,u&-u),k.tag=2;var B=_.updateQueue;if(B!==null){B=B.shared;var J=B.pending;J===null?k.next=k:(k.next=J.next,J.next=k),B.pending=k}}_.lanes|=u,k=_.alternate,k!==null&&(k.lanes|=u),$f(_.return,u,o),A.lanes|=u;break}k=k.next}}else if(_.tag===10)I=_.type===o.type?null:_.child;else if(_.tag===18){if(I=_.return,I===null)throw Error(t(341));I.lanes|=u,A=I.alternate,A!==null&&(A.lanes|=u),$f(I,u,o),I=_.sibling}else I=_.child;if(I!==null)I.return=_;else for(I=_;I!==null;){if(I===o){I=null;break}if(_=I.sibling,_!==null){_.return=I.return,I=_;break}I=I.return}_=I}cn(i,o,p.children,u),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,ha(o,u),p=Wn(p),h=h(p),o.flags|=1,cn(i,o,h,u),o.child;case 14:return h=o.type,p=lr(h,o.pendingProps),p=lr(h.type,p),By(i,o,h,p,u);case 15:return zy(i,o,o.type,o.pendingProps,u);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:lr(h,p),vh(i,o),o.tag=1,wn(h)?(i=!0,th(o)):i=!1,ha(o,u),Ny(o,h,p),op(o,h,p,u),cp(null,o,h,!0,i,u);case 19:return Qy(i,o,u);case 22:return jy(i,o,u)}throw Error(t(156,o.tag))};function vv(i,o){return Fo(i,o)}function fA(i,o,u,h){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(i,o,u,h){return new fA(i,o,u,h)}function bp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function pA(i){if(typeof i=="function")return bp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===O)return 11;if(i===Yt)return 14}return 2}function $i(i,o){var u=i.alternate;return u===null?(u=Hn(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function bh(i,o,u,h,p,_){var I=2;if(h=i,typeof i=="function")bp(i)&&(I=1);else if(typeof i=="string")I=5;else e:switch(i){case C:return Ks(u.children,p,_,o);case S:I=8,p|=8;break;case P:return i=Hn(12,u,o,p|2),i.elementType=P,i.lanes=_,i;case R:return i=Hn(13,u,o,p),i.elementType=R,i.lanes=_,i;case _t:return i=Hn(19,u,o,p),i.elementType=_t,i.lanes=_,i;case We:return Dh(u,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:I=10;break e;case N:I=9;break e;case O:I=11;break e;case Yt:I=14;break e;case Xt:I=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Hn(I,u,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Ks(i,o,u,h){return i=Hn(7,i,h,o),i.lanes=u,i}function Dh(i,o,u,h){return i=Hn(22,i,h,o),i.elementType=We,i.lanes=u,i.stateNode={isHidden:!1},i}function Dp(i,o,u){return i=Hn(6,i,null,o),i.lanes=u,i}function Np(i,o,u){return o=Hn(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function mA(i,o,u,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ai(0),this.expirationTimes=Ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Vp(i,o,u,h,p,_,I,A,k){return i=new mA(i,o,u,A,k),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Hn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(_),i}function gA(i,o,u){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:h==null?null:""+h,children:i,containerInfo:o,implementation:u}}function wv(i){if(!i)return Oi;i=i._reactInternals;e:{if(er(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(wn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(wn(u))return H_(i,u,o)}return o}function Iv(i,o,u,h,p,_,I,A,k){return i=Vp(u,h,!0,i,p,_,I,A,k),i.context=wv(null),u=i.current,h=hn(),p=ji(u),_=ni(h,p),_.callback=o??null,Fi(u,_,p),i.current.lanes=p,Ri(i,p,h),Tn(i,h),i}function Nh(i,o,u,h){var p=o.current,_=hn(),I=ji(p);return u=wv(u),o.context===null?o.context=u:o.pendingContext=u,o=ni(_,I),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Fi(p,o,I),i!==null&&(dr(i,p,I,_),lh(i,p,I)),I}function Vh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ev(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function xp(i,o){Ev(i,o),(i=i.alternate)&&Ev(i,o)}function _A(){return null}var Tv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Op(i){this._internalRoot=i}xh.prototype.render=Op.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Nh(i,o,null,null)},xh.prototype.unmount=Op.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;$s(function(){Nh(null,i,null,null)}),o[Yr]=null}};function xh(i){this._internalRoot=i}xh.prototype.unstable_scheduleHydration=function(i){if(i){var o=xc();i={blockedOn:null,target:i,priority:o};for(var u=0;u<yr.length&&o!==0&&o<yr[u].priority;u++);yr.splice(u,0,i),u===0&&Mc(i)}};function Lp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Oh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Sv(){}function yA(i,o,u,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var B=Vh(I);_.call(B)}}var I=Iv(o,h,i,0,null,!1,!1,"",Sv);return i._reactRootContainer=I,i[Yr]=I.current,qu(i.nodeType===8?i.parentNode:i),$s(),I}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var A=h;h=function(){var B=Vh(k);A.call(B)}}var k=Vp(i,0,!1,null,null,!1,!1,"",Sv);return i._reactRootContainer=k,i[Yr]=k.current,qu(i.nodeType===8?i.parentNode:i),$s(function(){Nh(o,k,u,h)}),k}function Lh(i,o,u,h,p){var _=u._reactRootContainer;if(_){var I=_;if(typeof p=="function"){var A=p;p=function(){var k=Vh(I);A.call(k)}}Nh(o,I,i,p)}else I=yA(u,o,i,p,h);return Vh(I)}Nc=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=Si(o.pendingLanes);u!==0&&(Pi(o,u|1),Tn(o,He()),!(Me&6)&&(ga=He()+500,Li()))}break;case 13:$s(function(){var h=ti(i,1);if(h!==null){var p=hn();dr(h,i,1,p)}}),xp(i,1)}},zo=function(i){if(i.tag===13){var o=ti(i,134217728);if(o!==null){var u=hn();dr(o,i,134217728,u)}xp(i,134217728)}},Vc=function(i){if(i.tag===13){var o=ji(i),u=ti(i,o);if(u!==null){var h=hn();dr(u,i,o,h)}xp(i,o)}},xc=function(){return Ve},Oc=function(i,o){var u=Ve;try{return Ve=i,o()}finally{Ve=u}},No=function(i,o,u){switch(o){case"input":if(pu(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var h=u[o];if(h!==i&&h.form===i.form){var p=Zc(h);if(!p)throw Error(t(90));Ro(h),pu(h,p)}}}break;case"textarea":bo(i,u);break;case"select":o=u.value,o!=null&&qr(i,!!u.multiple,o,!1)}},Ss=Pp,Su=$s;var vA={usingClientEntryPoint:!1,Events:[Gu,ra,Zc,gr,Tu,Pp]},ol={findFiberByHostInstance:Ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wA={bundleType:ol.bundleType,version:ol.version,rendererPackageName:ol.rendererPackageName,rendererConfig:ol.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Pu(i),i===null?null:i.stateNode},findFiberByHostInstance:ol.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mh.isDisabled&&Mh.supportsFiber)try{Cs=Mh.inject(wA),Cn=Mh}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA,Sn.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(o))throw Error(t(200));return gA(i,o,null,u)},Sn.createRoot=function(i,o){if(!Lp(i))throw Error(t(299));var u=!1,h="",p=Tv;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Vp(i,1,!1,null,null,u,!1,h,p),i[Yr]=o.current,qu(i.nodeType===8?i.parentNode:i),new Op(o)},Sn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Pu(o),i=i===null?null:i.stateNode,i},Sn.flushSync=function(i){return $s(i)},Sn.hydrate=function(i,o,u){if(!Oh(o))throw Error(t(200));return Lh(null,i,o,!0,u)},Sn.hydrateRoot=function(i,o,u){if(!Lp(i))throw Error(t(405));var h=u!=null&&u.hydratedSources||null,p=!1,_="",I=Tv;if(u!=null&&(u.unstable_strictMode===!0&&(p=!0),u.identifierPrefix!==void 0&&(_=u.identifierPrefix),u.onRecoverableError!==void 0&&(I=u.onRecoverableError)),o=Iv(o,null,i,1,u??null,p,!1,_,I),i[Yr]=o.current,qu(i),h)for(i=0;i<h.length;i++)u=h[i],p=u._getVersion,p=p(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,p]:o.mutableSourceEagerHydrationData.push(u,p);return new xh(o)},Sn.render=function(i,o,u){if(!Oh(o))throw Error(t(200));return Lh(null,i,o,!1,u)},Sn.unmountComponentAtNode=function(i){if(!Oh(i))throw Error(t(40));return i._reactRootContainer?($s(function(){Lh(null,null,i,!1,function(){i._reactRootContainer=null,i[Yr]=null})}),!0):!1},Sn.unstable_batchedUpdates=Pp,Sn.unstable_renderSubtreeIntoContainer=function(i,o,u,h){if(!Oh(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Lh(i,o,u,!1,h)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var Nv;function kA(){if(Nv)return Up.exports;Nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Up.exports=PA(),Up.exports}var Vv;function CA(){if(Vv)return Fh;Vv=1;var r=kA();return Fh.createRoot=r.createRoot,Fh.hydrateRoot=r.hydrateRoot,Fh}var bA=CA(),xv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},DA=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const a=r[t++];e[n++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=r[t++],l=r[t++],d=r[t++],f=((s&7)<<18|(a&63)<<12|(l&63)<<6|d&63)-65536;e[n++]=String.fromCharCode(55296+(f>>10)),e[n++]=String.fromCharCode(56320+(f&1023))}else{const a=r[t++],l=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},kI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const a=r[s],l=s+1<r.length,d=l?r[s+1]:0,f=s+2<r.length,m=f?r[s+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,V=m&63;f||(V=64,l||(T=64)),n.push(t[v],t[w],t[T],t[V])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(PI(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):DA(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const a=t[r.charAt(s++)],d=s<r.length?t[r.charAt(s)]:0;++s;const m=s<r.length?t[r.charAt(s)]:64;++s;const w=s<r.length?t[r.charAt(s)]:64;if(++s,a==null||d==null||m==null||w==null)throw new NA;const T=a<<2|d>>4;if(n.push(T),m!==64){const V=d<<4&240|m>>2;if(n.push(V),w!==64){const W=m<<6&192|w;n.push(W)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class NA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VA=function(r){const e=PI(r);return kI.encodeByteArray(e,!0)},od=function(r){return VA(r).replace(/\./g,"")},CI=function(r){try{return kI.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ad(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!xA(t)||(r[t]=ad(r[t],e[t]));return r}function xA(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=()=>bI().__FIREBASE_DEFAULTS__,LA=()=>{if(typeof process>"u"||typeof xv>"u")return;const r=xv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},MA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&CI(r[1]);return e&&JSON.parse(e)},zm=()=>{try{return OA()||LA()||MA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},DI=()=>{var r;return(r=zm())===null||r===void 0?void 0:r.config},FA=r=>{var e;return(e=zm())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[od(JSON.stringify(t)),od(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function jm(){var r;const e=(r=zm())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jA(){return typeof window<"u"||NI()}function NI(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function qA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function qm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xI(){const r=ct();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function OI(){return!jm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xl(){try{return typeof indexedDB=="object"}catch{return!1}}function $A(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="FirebaseError";class pn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=WA,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?GA(a,n):"Error",d=`${this.serviceName}: ${l} (${s}).`;return new pn(s,d,n)}}function GA(r,e){return r.replace(KA,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const KA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function HA(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ol(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const a=r[s],l=e[s];if(Lv(a)&&Lv(l)){if(!Ol(a,l))return!1}else if(a!==l)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Lv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ka(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,a]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function _l(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function LI(r,e){const t=new QA(r,e);return t.subscribe.bind(t)}class QA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");JA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=jp),s.error===void 0&&(s.error=jp),s.complete===void 0&&(s.complete=jp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JA(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function jp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r){return r&&r._delegate?r._delegate:r}class Or{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new UA;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZA(e))try{this.getOrInitializeService({instanceIdentifier:Qs})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});n.resolve(a)}catch{}}}}clearInstance(e=Qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qs){return this.instances.has(e)}getOptions(e=Qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,l]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);n===d&&l.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),a=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:XA(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Qs){return this.component?this.component.multipleInstances?e:Qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XA(r){return r===Qs?void 0:r}function ZA(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new YA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=[];var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const FI={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},eR=be.INFO,tR={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},nR=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=tR[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=eR,this._logHandler=nR,this._userLogHandler=null,$m.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function rR(r){$m.forEach(e=>{e.setLogLevel(r)})}function iR(r,e){for(const t of $m){let n=null;e&&e.level&&(n=FI[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(s,a,...l)=>{const d=l.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");a>=(n??s.logLevel)&&r({level:be[a].toLowerCase(),message:d,args:l,type:s.name})}}}const sR=(r,e)=>e.some(t=>r instanceof t);let Mv,Fv;function oR(){return Mv||(Mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aR(){return Fv||(Fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UI=new WeakMap,sm=new WeakMap,BI=new WeakMap,qp=new WeakMap,Wm=new WeakMap;function uR(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",l)},a=()=>{t(es(r.result)),s()},l=()=>{n(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&UI.set(t,r)}).catch(()=>{}),Wm.set(e,r),e}function lR(r){if(sm.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",l),r.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",l),r.addEventListener("abort",l)});sm.set(r,e)}let om={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return sm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||BI.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return es(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function cR(r){om=r(om)}function hR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call($p(this),e,...t);return BI.set(n,e.sort?e.sort():[e]),es(n)}:aR().includes(r)?function(...e){return r.apply($p(this),e),es(UI.get(this))}:function(...e){return es(r.apply($p(this),e))}}function dR(r){return typeof r=="function"?hR(r):(r instanceof IDBTransaction&&lR(r),sR(r,oR())?new Proxy(r,om):r)}function es(r){if(r instanceof IDBRequest)return uR(r);if(qp.has(r))return qp.get(r);const e=dR(r);return e!==r&&(qp.set(r,e),Wm.set(e,r)),e}const $p=r=>Wm.get(r);function fR(r,e,{blocked:t,upgrade:n,blocking:s,terminated:a}={}){const l=indexedDB.open(r,e),d=es(l);return n&&l.addEventListener("upgradeneeded",f=>{n(es(l.result),f.oldVersion,f.newVersion,es(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const pR=["get","getKey","getAll","getAllKeys","count"],mR=["put","add","delete","clear"],Wp=new Map;function Uv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Wp.get(e))return Wp.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=mR.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||pR.includes(t)))return;const a=async function(l,...d){const f=this.transaction(l,s?"readwrite":"readonly");let m=f.store;return n&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Wp.set(e,a),a}cR(r=>({...r,get:(e,t,n)=>Uv(e,t)||r.get(e,t,n),has:(e,t)=>!!Uv(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_R(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function _R(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",am="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Cd("@firebase/app"),yR="@firebase/app-compat",vR="@firebase/analytics-compat",wR="@firebase/analytics",IR="@firebase/app-check-compat",ER="@firebase/app-check",TR="@firebase/auth",SR="@firebase/auth-compat",AR="@firebase/database",RR="@firebase/data-connect",PR="@firebase/database-compat",kR="@firebase/functions",CR="@firebase/functions-compat",bR="@firebase/installations",DR="@firebase/installations-compat",NR="@firebase/messaging",VR="@firebase/messaging-compat",xR="@firebase/performance",OR="@firebase/performance-compat",LR="@firebase/remote-config",MR="@firebase/remote-config-compat",FR="@firebase/storage",UR="@firebase/storage-compat",BR="@firebase/firestore",zR="@firebase/vertexai",jR="@firebase/firestore-compat",qR="firebase",$R="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]",WR={[ud]:"fire-core",[yR]:"fire-core-compat",[wR]:"fire-analytics",[vR]:"fire-analytics-compat",[ER]:"fire-app-check",[IR]:"fire-app-check-compat",[TR]:"fire-auth",[SR]:"fire-auth-compat",[AR]:"fire-rtdb",[RR]:"fire-data-connect",[PR]:"fire-rtdb-compat",[kR]:"fire-fn",[CR]:"fire-fn-compat",[bR]:"fire-iid",[DR]:"fire-iid-compat",[NR]:"fire-fcm",[VR]:"fire-fcm-compat",[xR]:"fire-perf",[OR]:"fire-perf-compat",[LR]:"fire-rc",[MR]:"fire-rc-compat",[FR]:"fire-gcs",[UR]:"fire-gcs-compat",[BR]:"fire-fst",[jR]:"fire-fst-compat",[zR]:"fire-vertex","fire-js":"fire-js",[qR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Map,Ma=new Map,Fa=new Map;function Ll(r,e){try{r.container.addComponent(e)}catch(t){ci.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function zI(r,e){r.container.addOrOverwriteComponent(e)}function ss(r){const e=r.name;if(Fa.has(e))return ci.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,r);for(const t of is.values())Ll(t,r);for(const t of Ma.values())Ll(t,r);return!0}function jI(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function GR(r,e,t=rs){jI(r,e).clearInstance(t)}function qI(r){return r.options!==void 0}function ft(r){return r.settings!==void 0}function KR(){Fa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new wo("app","Firebase",HR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $I=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR extends $I{constructor(e,t,n,s){const a=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,l={name:n,automaticDataCollectionEnabled:a};if(e.apiKey!==void 0)super(e,l,s);else{const d=e;super(d.options,l,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:a},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,fr(ud,am,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Km(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Jn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=$R;function Gm(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:rs,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(t||(t=DI()),!t)throw Jn.create("no-options");const a=is.get(s);if(a){if(Ol(t,a.options)&&Ol(n,a.config))return a;throw Jn.create("duplicate-app",{appName:s})}const l=new MI(s);for(const f of Fa.values())l.addComponent(f);const d=new $I(t,n,l);return is.set(s,d),d}function JR(r,e){if(jA()&&!NI())throw Jn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;qI(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const s=m=>[...m].reduce((v,w)=>Math.imul(31,v)+w.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Jn.create("finalization-registry-not-supported",{});const a=""+s(JSON.stringify(n)),l=Ma.get(a);if(l)return l.incRefCount(e.releaseOnDeref),l;const d=new MI(a);for(const m of Fa.values())d.addComponent(m);const f=new QR(t,e,a,d);return Ma.set(a,f),f}function YR(r=rs){const e=is.get(r);if(!e&&r===rs&&DI())return Gm();if(!e)throw Jn.create("no-app",{appName:r});return e}function XR(){return Array.from(is.values())}async function Km(r){let e=!1;const t=r.name;is.has(t)?(e=!0,is.delete(t)):Ma.has(t)&&r.decRefCount()<=0&&(Ma.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function fr(r,e,t){var n;let s=(n=WR[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&d.push("and"),l&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ci.warn(d.join(" "));return}ss(new Or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function WI(r,e){if(r!==null&&typeof r!="function")throw Jn.create("invalid-log-argument");iR(r,e)}function GI(r){rR(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="firebase-heartbeat-database",eP=1,Ml="firebase-heartbeat-store";let Gp=null;function KI(){return Gp||(Gp=fR(ZR,eP,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ml)}catch(t){console.warn(t)}}}}).catch(r=>{throw Jn.create("idb-open",{originalErrorMessage:r.message})})),Gp}async function tP(r){try{const t=(await KI()).transaction(Ml),n=await t.objectStore(Ml).get(HI(r));return await t.done,n}catch(e){if(e instanceof pn)ci.warn(e.message);else{const t=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ci.warn(t.message)}}}async function Bv(r,e){try{const n=(await KI()).transaction(Ml,"readwrite");await n.objectStore(Ml).put(e,HI(r)),await n.done}catch(t){if(t instanceof pn)ci.warn(t.message);else{const n=Jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ci.warn(n.message)}}}function HI(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=1024,rP=30*24*60*60*1e3;class iP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oP(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=zv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const d=new Date(l.date).valueOf();return Date.now()-d<=rP}),this._storage.overwrite(this._heartbeatsCache))}catch(n){ci.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zv(),{heartbeatsToSend:n,unsentEntries:s}=sP(this._heartbeatsCache.heartbeats),a=od(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ci.warn(t),""}}}function zv(){return new Date().toISOString().substring(0,10)}function sP(r,e=nP){const t=[];let n=r.slice();for(const s of r){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),jv(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jv(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class oP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xl()?$A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tP(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jv(r){return od(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(r){ss(new Or("platform-logger",e=>new gR(e),"PRIVATE")),ss(new Or("heartbeat",e=>new iP(e),"PRIVATE")),fr(ud,am,r),fr(ud,am,"esm2017"),fr("fire-js","")}aP("");const uP=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:pn,SDK_VERSION:ps,_DEFAULT_ENTRY_NAME:rs,_addComponent:Ll,_addOrOverwriteComponent:zI,_apps:is,_clearComponents:KR,_components:Fa,_getProvider:jI,_isFirebaseApp:qI,_isFirebaseServerApp:ft,_registerComponent:ss,_removeServiceInstance:GR,_serverApps:Ma,deleteApp:Km,getApp:YR,getApps:XR,initializeApp:Gm,initializeServerApp:JR,onLog:WI,registerVersion:fr,setLogLevel:GI},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this._delegate=e,this.firebase=t,Ll(e,new Or("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Km(this._delegate)))}_getService(e,t=rs){var n;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((n=s.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=rs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ll(this._delegate,e)}_addOrOverwriteComponent(e){zI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},qv=new wo("app-compat","Firebase",cP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(r){const e={},t={__esModule:!0,initializeApp:a,app:s,registerVersion:fr,setLogLevel:GI,onLog:WI,apps:null,SDK_VERSION:ps,INTERNAL:{registerComponent:d,removeApp:n,useAsService:f,modularAPIs:uP}};t.default=t,Object.defineProperty(t,"apps",{get:l});function n(m){delete e[m]}function s(m){if(m=m||rs,!Ov(e,m))throw qv.create("no-app",{appName:m});return e[m]}s.App=r;function a(m,v={}){const w=Gm(m,v);if(Ov(e,w.name))return e[w.name];const T=new r(w,t);return e[w.name]=T,T}function l(){return Object.keys(e).map(m=>e[m])}function d(m){const v=m.name,w=v.replace("-compat","");if(ss(m)&&m.type==="PUBLIC"){const T=(V=s())=>{if(typeof V[w]!="function")throw qv.create("invalid-app-argument",{appName:v});return V[w]()};m.serviceProps!==void 0&&ad(T,m.serviceProps),t[w]=T,r.prototype[w]=function(...V){return this._getService.bind(this,v).apply(this,m.multipleInstances?V:[])}}return m.type==="PUBLIC"?t[w]:null}function f(m,v){return v==="serverAuth"?null:v}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){const r=hP(lP);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:QI,extendNamespace:e,createSubscribe:LI,ErrorFactory:wo,deepExtend:ad});function e(t){ad(r,t)}return r}const dP=QI();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new Cd("@firebase/app-compat"),fP="@firebase/app-compat",pP="0.2.46";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(r){fr(fP,pP,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const r=bI();if(r.firebase!==void 0){$v.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&$v.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Br=dP;mP();var gP="firebase",_P="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br.registerVersion(gP,_P,"app-compat");var Wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var so,JI;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function P(){}P.prototype=S.prototype,C.D=S.prototype,C.prototype=new P,C.prototype.constructor=C,C.C=function(b,N,O){for(var R=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)R[_t-2]=arguments[_t];return S.prototype[N].apply(b,R)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,S,P){P||(P=0);var b=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)b[N]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(N=0;16>N;++N)b[N]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=C.g[0],P=C.g[1],N=C.g[2];var O=C.g[3],R=S+(O^P&(N^O))+b[0]+3614090360&4294967295;S=P+(R<<7&4294967295|R>>>25),R=O+(N^S&(P^N))+b[1]+3905402710&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(P^O&(S^P))+b[2]+606105819&4294967295,N=O+(R<<17&4294967295|R>>>15),R=P+(S^N&(O^S))+b[3]+3250441966&4294967295,P=N+(R<<22&4294967295|R>>>10),R=S+(O^P&(N^O))+b[4]+4118548399&4294967295,S=P+(R<<7&4294967295|R>>>25),R=O+(N^S&(P^N))+b[5]+1200080426&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(P^O&(S^P))+b[6]+2821735955&4294967295,N=O+(R<<17&4294967295|R>>>15),R=P+(S^N&(O^S))+b[7]+4249261313&4294967295,P=N+(R<<22&4294967295|R>>>10),R=S+(O^P&(N^O))+b[8]+1770035416&4294967295,S=P+(R<<7&4294967295|R>>>25),R=O+(N^S&(P^N))+b[9]+2336552879&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(P^O&(S^P))+b[10]+4294925233&4294967295,N=O+(R<<17&4294967295|R>>>15),R=P+(S^N&(O^S))+b[11]+2304563134&4294967295,P=N+(R<<22&4294967295|R>>>10),R=S+(O^P&(N^O))+b[12]+1804603682&4294967295,S=P+(R<<7&4294967295|R>>>25),R=O+(N^S&(P^N))+b[13]+4254626195&4294967295,O=S+(R<<12&4294967295|R>>>20),R=N+(P^O&(S^P))+b[14]+2792965006&4294967295,N=O+(R<<17&4294967295|R>>>15),R=P+(S^N&(O^S))+b[15]+1236535329&4294967295,P=N+(R<<22&4294967295|R>>>10),R=S+(N^O&(P^N))+b[1]+4129170786&4294967295,S=P+(R<<5&4294967295|R>>>27),R=O+(P^N&(S^P))+b[6]+3225465664&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^P&(O^S))+b[11]+643717713&4294967295,N=O+(R<<14&4294967295|R>>>18),R=P+(O^S&(N^O))+b[0]+3921069994&4294967295,P=N+(R<<20&4294967295|R>>>12),R=S+(N^O&(P^N))+b[5]+3593408605&4294967295,S=P+(R<<5&4294967295|R>>>27),R=O+(P^N&(S^P))+b[10]+38016083&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^P&(O^S))+b[15]+3634488961&4294967295,N=O+(R<<14&4294967295|R>>>18),R=P+(O^S&(N^O))+b[4]+3889429448&4294967295,P=N+(R<<20&4294967295|R>>>12),R=S+(N^O&(P^N))+b[9]+568446438&4294967295,S=P+(R<<5&4294967295|R>>>27),R=O+(P^N&(S^P))+b[14]+3275163606&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^P&(O^S))+b[3]+4107603335&4294967295,N=O+(R<<14&4294967295|R>>>18),R=P+(O^S&(N^O))+b[8]+1163531501&4294967295,P=N+(R<<20&4294967295|R>>>12),R=S+(N^O&(P^N))+b[13]+2850285829&4294967295,S=P+(R<<5&4294967295|R>>>27),R=O+(P^N&(S^P))+b[2]+4243563512&4294967295,O=S+(R<<9&4294967295|R>>>23),R=N+(S^P&(O^S))+b[7]+1735328473&4294967295,N=O+(R<<14&4294967295|R>>>18),R=P+(O^S&(N^O))+b[12]+2368359562&4294967295,P=N+(R<<20&4294967295|R>>>12),R=S+(P^N^O)+b[5]+4294588738&4294967295,S=P+(R<<4&4294967295|R>>>28),R=O+(S^P^N)+b[8]+2272392833&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^P)+b[11]+1839030562&4294967295,N=O+(R<<16&4294967295|R>>>16),R=P+(N^O^S)+b[14]+4259657740&4294967295,P=N+(R<<23&4294967295|R>>>9),R=S+(P^N^O)+b[1]+2763975236&4294967295,S=P+(R<<4&4294967295|R>>>28),R=O+(S^P^N)+b[4]+1272893353&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^P)+b[7]+4139469664&4294967295,N=O+(R<<16&4294967295|R>>>16),R=P+(N^O^S)+b[10]+3200236656&4294967295,P=N+(R<<23&4294967295|R>>>9),R=S+(P^N^O)+b[13]+681279174&4294967295,S=P+(R<<4&4294967295|R>>>28),R=O+(S^P^N)+b[0]+3936430074&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^P)+b[3]+3572445317&4294967295,N=O+(R<<16&4294967295|R>>>16),R=P+(N^O^S)+b[6]+76029189&4294967295,P=N+(R<<23&4294967295|R>>>9),R=S+(P^N^O)+b[9]+3654602809&4294967295,S=P+(R<<4&4294967295|R>>>28),R=O+(S^P^N)+b[12]+3873151461&4294967295,O=S+(R<<11&4294967295|R>>>21),R=N+(O^S^P)+b[15]+530742520&4294967295,N=O+(R<<16&4294967295|R>>>16),R=P+(N^O^S)+b[2]+3299628645&4294967295,P=N+(R<<23&4294967295|R>>>9),R=S+(N^(P|~O))+b[0]+4096336452&4294967295,S=P+(R<<6&4294967295|R>>>26),R=O+(P^(S|~N))+b[7]+1126891415&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~P))+b[14]+2878612391&4294967295,N=O+(R<<15&4294967295|R>>>17),R=P+(O^(N|~S))+b[5]+4237533241&4294967295,P=N+(R<<21&4294967295|R>>>11),R=S+(N^(P|~O))+b[12]+1700485571&4294967295,S=P+(R<<6&4294967295|R>>>26),R=O+(P^(S|~N))+b[3]+2399980690&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~P))+b[10]+4293915773&4294967295,N=O+(R<<15&4294967295|R>>>17),R=P+(O^(N|~S))+b[1]+2240044497&4294967295,P=N+(R<<21&4294967295|R>>>11),R=S+(N^(P|~O))+b[8]+1873313359&4294967295,S=P+(R<<6&4294967295|R>>>26),R=O+(P^(S|~N))+b[15]+4264355552&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~P))+b[6]+2734768916&4294967295,N=O+(R<<15&4294967295|R>>>17),R=P+(O^(N|~S))+b[13]+1309151649&4294967295,P=N+(R<<21&4294967295|R>>>11),R=S+(N^(P|~O))+b[4]+4149444226&4294967295,S=P+(R<<6&4294967295|R>>>26),R=O+(P^(S|~N))+b[11]+3174756917&4294967295,O=S+(R<<10&4294967295|R>>>22),R=N+(S^(O|~P))+b[2]+718787259&4294967295,N=O+(R<<15&4294967295|R>>>17),R=P+(O^(N|~S))+b[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+N&4294967295,C.g[3]=C.g[3]+O&4294967295}n.prototype.u=function(C,S){S===void 0&&(S=C.length);for(var P=S-this.blockSize,b=this.B,N=this.h,O=0;O<S;){if(N==0)for(;O<=P;)s(this,C,O),O+=this.blockSize;if(typeof C=="string"){for(;O<S;)if(b[N++]=C.charCodeAt(O++),N==this.blockSize){s(this,b),N=0;break}}else for(;O<S;)if(b[N++]=C[O++],N==this.blockSize){s(this,b),N=0;break}}this.h=N,this.o+=S},n.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;var P=8*this.o;for(S=C.length-8;S<C.length;++S)C[S]=P&255,P/=256;for(this.u(C),C=Array(16),S=P=0;4>S;++S)for(var b=0;32>b;b+=8)C[P++]=this.g[S]>>>b&255;return C};function a(C,S){var P=d;return Object.prototype.hasOwnProperty.call(P,C)?P[C]:P[C]=S(C)}function l(C,S){this.h=S;for(var P=[],b=!0,N=C.length-1;0<=N;N--){var O=C[N]|0;b&&O==S||(P[N]=O,b=!1)}this.g=P}var d={};function f(C){return-128<=C&&128>C?a(C,function(S){return new l([S|0],0>S?-1:0)}):new l([C|0],0>C?-1:0)}function m(C){if(isNaN(C)||!isFinite(C))return w;if(0>C)return q(m(-C));for(var S=[],P=1,b=0;C>=P;b++)S[b]=C/P|0,P*=4294967296;return new l(S,0)}function v(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return q(v(C.substring(1),S));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=m(Math.pow(S,8)),b=w,N=0;N<C.length;N+=8){var O=Math.min(8,C.length-N),R=parseInt(C.substring(N,N+O),S);8>O?(O=m(Math.pow(S,O)),b=b.j(O).add(m(R))):(b=b.j(P),b=b.add(m(R)))}return b}var w=f(0),T=f(1),V=f(16777216);r=l.prototype,r.m=function(){if($(this))return-q(this).m();for(var C=0,S=1,P=0;P<this.g.length;P++){var b=this.i(P);C+=(0<=b?b:4294967296+b)*S,S*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(W(this))return"0";if($(this))return"-"+q(this).toString(C);for(var S=m(Math.pow(C,6)),P=this,b="";;){var N=Ee(P,S).g;P=fe(P,N.j(S));var O=((0<P.g.length?P.g[0]:P.h)>>>0).toString(C);if(P=N,W(P))return O+b;for(;6>O.length;)O="0"+O;b=O+b}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function W(C){if(C.h!=0)return!1;for(var S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function $(C){return C.h==-1}r.l=function(C){return C=fe(this,C),$(C)?-1:W(C)?0:1};function q(C){for(var S=C.g.length,P=[],b=0;b<S;b++)P[b]=~C.g[b];return new l(P,~C.h).add(T)}r.abs=function(){return $(this)?q(this):this},r.add=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],b=0,N=0;N<=S;N++){var O=b+(this.i(N)&65535)+(C.i(N)&65535),R=(O>>>16)+(this.i(N)>>>16)+(C.i(N)>>>16);b=R>>>16,O&=65535,R&=65535,P[N]=R<<16|O}return new l(P,P[P.length-1]&-2147483648?-1:0)};function fe(C,S){return C.add(q(S))}r.j=function(C){if(W(this)||W(C))return w;if($(this))return $(C)?q(this).j(q(C)):q(q(this).j(C));if($(C))return q(this.j(q(C)));if(0>this.l(V)&&0>C.l(V))return m(this.m()*C.m());for(var S=this.g.length+C.g.length,P=[],b=0;b<2*S;b++)P[b]=0;for(b=0;b<this.g.length;b++)for(var N=0;N<C.g.length;N++){var O=this.i(b)>>>16,R=this.i(b)&65535,_t=C.i(N)>>>16,Yt=C.i(N)&65535;P[2*b+2*N]+=R*Yt,me(P,2*b+2*N),P[2*b+2*N+1]+=O*Yt,me(P,2*b+2*N+1),P[2*b+2*N+1]+=R*_t,me(P,2*b+2*N+1),P[2*b+2*N+2]+=O*_t,me(P,2*b+2*N+2)}for(b=0;b<S;b++)P[b]=P[2*b+1]<<16|P[2*b];for(b=S;b<2*S;b++)P[b]=0;return new l(P,0)};function me(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function ae(C,S){this.g=C,this.h=S}function Ee(C,S){if(W(S))throw Error("division by zero");if(W(C))return new ae(w,w);if($(C))return S=Ee(q(C),S),new ae(q(S.g),q(S.h));if($(S))return S=Ee(C,q(S)),new ae(q(S.g),S.h);if(30<C.g.length){if($(C)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,b=S;0>=b.l(C);)P=Re(P),b=Re(b);var N=_e(P,1),O=_e(b,1);for(b=_e(b,2),P=_e(P,2);!W(b);){var R=O.add(b);0>=R.l(C)&&(N=N.add(P),O=R),b=_e(b,1),P=_e(P,1)}return S=fe(C,N.j(S)),new ae(N,S)}for(N=w;0<=C.l(S);){for(P=Math.max(1,Math.floor(C.m()/S.m())),b=Math.ceil(Math.log(P)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),O=m(P),R=O.j(S);$(R)||0<R.l(C);)P-=b,O=m(P),R=O.j(S);W(O)&&(O=T),N=N.add(O),C=fe(C,R)}return new ae(N,C)}r.A=function(C){return Ee(this,C).h},r.and=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],b=0;b<S;b++)P[b]=this.i(b)&C.i(b);return new l(P,this.h&C.h)},r.or=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],b=0;b<S;b++)P[b]=this.i(b)|C.i(b);return new l(P,this.h|C.h)},r.xor=function(C){for(var S=Math.max(this.g.length,C.g.length),P=[],b=0;b<S;b++)P[b]=this.i(b)^C.i(b);return new l(P,this.h^C.h)};function Re(C){for(var S=C.g.length+1,P=[],b=0;b<S;b++)P[b]=C.i(b)<<1|C.i(b-1)>>>31;return new l(P,C.h)}function _e(C,S){var P=S>>5;S%=32;for(var b=C.g.length-P,N=[],O=0;O<b;O++)N[O]=0<S?C.i(O+P)>>>S|C.i(O+P+1)<<32-S:C.i(O+P);return new l(N,C.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,JI=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=v,so=l}).apply(typeof Wv<"u"?Wv:typeof self<"u"?self:typeof window<"u"?window:{});var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YI,yl,XI,Kh,um,ZI,eE,tE;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uh=="object"&&Uh];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var n=t(this);function s(c,g){if(g)e:{var y=n;c=c.split(".");for(var E=0;E<c.length-1;E++){var M=c[E];if(!(M in y))break e;y=y[M]}c=c[c.length-1],E=y[c],g=g(E),g!=E&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,E=!1,M={next:function(){if(!E&&y<c.length){var j=y++;return{value:g(j,c[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function w(c,g,y){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),c.apply(g,M)}}return function(){return c.apply(g,arguments)}}function T(c,g,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function V(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function W(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(E,M,j){for(var ee=Array(arguments.length-2),je=2;je<arguments.length;je++)ee[je-2]=arguments[je];return g.prototype[M].apply(E,ee)}}function $(c){const g=c.length;if(0<g){const y=Array(g);for(let E=0;E<g;E++)y[E]=c[E];return y}return[]}function q(c,g){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(f(E)){const M=c.length||0,j=E.length||0;c.length=M+j;for(let ee=0;ee<j;ee++)c[M+ee]=E[ee]}else c.push(E)}}class fe{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function me(c){return/^[\s\xa0]*$/.test(c)}function ae(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function Ee(c){return Ee[" "](c),c}Ee[" "]=function(){};var Re=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function _e(c,g,y){for(const E in c)g.call(y,c[E],E,c)}function C(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function S(c){const g={};for(const y in c)g[y]=c[y];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,g){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)c[y]=E[y];for(let j=0;j<P.length;j++)y=P[j],Object.prototype.hasOwnProperty.call(E,y)&&(c[y]=E[y])}}function N(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function O(c){d.setTimeout(()=>{throw c},0)}function R(){var c=ye;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class _t{constructor(){this.h=this.g=null}add(g,y){const E=Yt.get();E.set(g,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Yt=new fe(()=>new Xt,c=>c.reset());class Xt{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let We,ne=!1,ye=new _t,oe=()=>{const c=d.Promise.resolve(void 0);We=()=>{c.then(x)}};var x=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){O(y)}var g=Yt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ne=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c}();function ke(c,g){if(ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Re){e:{try{Ee(g.nodeName);var M=!0;break e}catch{}M=!1}M||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ke.aa.h.call(this)}}W(ke,ge);var xe={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),ze=0;function Ke(c,g,y,E,M){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!E,this.ha=M,this.key=++ze,this.da=this.fa=!1}function xt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function zr(c){this.src=c,this.g={},this.h=0}zr.prototype.add=function(c,g,y,E,M){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var ee=Ii(c,g,E,M);return-1<ee?(g=c[ee],y||(g.fa=!1)):(g=new Ke(g,this.src,j,!!E,M),g.fa=y,c.push(g)),g};function Ro(c,g){var y=g.type;if(y in c.g){var E=c.g[y],M=Array.prototype.indexOf.call(E,g,void 0),j;(j=0<=M)&&Array.prototype.splice.call(E,M,1),j&&(xt(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Ii(c,g,y,E){for(var M=0;M<c.length;++M){var j=c[M];if(!j.da&&j.listener==g&&j.capture==!!y&&j.ha==E)return M}return-1}var ws="closure_lm_"+(1e6*Math.random()|0),Po={};function fu(c,g,y,E,M){if(Array.isArray(g)){for(var j=0;j<g.length;j++)fu(c,g[j],y,E,M);return null}return y=gu(y),c&&c[Be]?c.K(g,y,m(E)?!!E.capture:!!E,M):pu(c,g,y,!1,E,M)}function pu(c,g,y,E,M,j){if(!g)throw Error("Invalid event type");var ee=m(M)?!!M.capture:!!M,je=Co(c);if(je||(c[ws]=je=new zr(c)),y=je.add(g,y,E,ee,j),y.proxy)return y;if(E=Tc(),y.proxy=E,E.src=c,E.listener=y,c.addEventListener)Pe||(M=ee),M===void 0&&(M=!1),c.addEventListener(g.toString(),E,M);else if(c.attachEvent)c.attachEvent(qr(g.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Tc(){function c(y){return g.call(c.src,c.listener,y)}const g=mu;return c}function ko(c,g,y,E,M){if(Array.isArray(g))for(var j=0;j<g.length;j++)ko(c,g[j],y,E,M);else E=m(E)?!!E.capture:!!E,y=gu(y),c&&c[Be]?(c=c.i,g=String(g).toString(),g in c.g&&(j=c.g[g],y=Ii(j,y,E,M),-1<y&&(xt(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete c.g[g],c.h--)))):c&&(c=Co(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ii(g,y,E,M)),(y=-1<c?g[c]:null)&&jr(y))}function jr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Be])Ro(g.i,c);else{var y=c.type,E=c.proxy;g.removeEventListener?g.removeEventListener(y,E,c.capture):g.detachEvent?g.detachEvent(qr(y),E):g.addListener&&g.removeListener&&g.removeListener(E),(y=Co(g))?(Ro(y,c),y.h==0&&(y.src=null,g[ws]=null)):xt(c)}}}function qr(c){return c in Po?Po[c]:Po[c]="on"+c}function mu(c,g){if(c.da)c=!0;else{g=new ke(g,this);var y=c.listener,E=c.ha||c.src;c.fa&&jr(c),c=y.call(E,g)}return c}function Co(c){return c=c[ws],c instanceof zr?c:null}var bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function gu(c){return typeof c=="function"?c:(c[bo]||(c[bo]=function(g){return c.handleEvent(g)}),c[bo])}function Pt(){G.call(this),this.i=new zr(this),this.M=this,this.F=null}W(Pt,G),Pt.prototype[Be]=!0,Pt.prototype.removeEventListener=function(c,g,y,E){ko(this,c,g,y,E)};function kt(c,g){var y,E=c.F;if(E)for(y=[];E;E=E.F)y.push(E);if(c=c.M,E=g.type||g,typeof g=="string")g=new ge(g,c);else if(g instanceof ge)g.target=g.target||c;else{var M=g;g=new ge(E,c),b(g,M)}if(M=!0,y)for(var j=y.length-1;0<=j;j--){var ee=g.g=y[j];M=$r(ee,E,!0,g)&&M}if(ee=g.g=c,M=$r(ee,E,!0,g)&&M,M=$r(ee,E,!1,g)&&M,y)for(j=0;j<y.length;j++)ee=g.g=y[j],M=$r(ee,E,!1,g)&&M}Pt.prototype.N=function(){if(Pt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],E=0;E<y.length;E++)xt(y[E]);delete c.g[g],c.h--}}this.F=null},Pt.prototype.K=function(c,g,y,E){return this.i.add(String(c),g,!1,y,E)},Pt.prototype.L=function(c,g,y,E){return this.i.add(String(c),g,!0,y,E)};function $r(c,g,y,E){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var M=!0,j=0;j<g.length;++j){var ee=g[j];if(ee&&!ee.da&&ee.capture==y){var je=ee.listener,Ct=ee.ha||ee.src;ee.fa&&Ro(c.i,ee),M=je.call(Ct,E)!==!1&&M}}return M&&!E.defaultPrevented}function _u(c,g,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function Ei(c){c.g=_u(()=>{c.g=null,c.i&&(c.i=!1,Ei(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Is extends G{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(c){G.call(this),this.h=c,this.g={}}W(Es,G);var yu=[];function vu(c){_e(c.g,function(g,y){this.g.hasOwnProperty(y)&&jr(g)},c),c.g={}}Es.prototype.N=function(){Es.aa.N.call(this),vu(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wu=d.JSON.stringify,Iu=d.JSON.parse,Eu=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Ts(){}Ts.prototype.h=null;function Do(c){return c.h||(c.h=c.i())}function No(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){ge.call(this,"d")}W(mr,ge);function Vo(){ge.call(this,"c")}W(Vo,ge);var gr={},Tu=null;function Ss(){return Tu=Tu||new Pt}gr.La="serverreachability";function Su(c){ge.call(this,gr.La,c)}W(Su,ge);function Wr(c){const g=Ss();kt(g,new Su(g))}gr.STAT_EVENT="statevent";function Au(c,g){ge.call(this,gr.STAT_EVENT,c),this.stat=g}W(Au,ge);function yt(c){const g=Ss();kt(g,new Au(g,c))}gr.Ma="timingevent";function xo(c,g){ge.call(this,gr.Ma,c),this.size=g}W(xo,ge);function Xn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function Rs(c,g,y,E,M,j){c.info(function(){if(c.g)if(j)for(var ee="",je=j.split("&"),Ct=0;Ct<je.length;Ct++){var Oe=je[Ct].split("=");if(1<Oe.length){var Ot=Oe[0];Oe=Oe[1];var Tt=Ot.split("_");ee=2<=Tt.length&&Tt[1]=="type"?ee+(Ot+"="+Oe+"&"):ee+(Ot+"=redacted&")}}else ee=null;else ee=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+g+`
`+y+`
`+ee})}function Oo(c,g,y,E,M,j,ee){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+g+`
`+y+`
`+j+" "+ee})}function Zn(c,g,y,E){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+hf(c,y)+(E?" "+E:"")})}function Ru(c,g){c.info(function(){return"TIMEOUT: "+g})}As.prototype.info=function(){};function hf(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var E=y[c];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var j=M[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return wu(y)}catch{return g}}var Lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},er;function Ps(){}W(Ps,Ts),Ps.prototype.g=function(){return new XMLHttpRequest},Ps.prototype.i=function(){return{}},er=new Ps;function tr(c,g,y,E){this.j=c,this.i=g,this.l=y,this.R=E||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ac}function Ac(){this.i=null,this.g="",this.h=!1}var Pu={},Mo={};function Fo(c,g,y){c.L=1,c.v=Pi(bn(g)),c.m=y,c.P=!0,ku(c,null)}function ku(c,g){c.F=Date.now(),He(c),c.A=bn(c.v);var y=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Ci(y.i,"t",E),c.C=0,y=c.j.J,c.h=new Ac,c.g=qc(c.j,y?g:null,!c.m),0<c.O&&(c.M=new Is(T(c.Y,c,c.g),c.O)),g=c.U,y=c.g,E=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(yu[0]=M.toString()),M=yu);for(var j=0;j<M.length;j++){var ee=fu(y,M[j],E||g.handleEvent,!1,g.h||g);if(!ee)break;g.g[ee.key]=ee}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Wr(),Rs(c.i,c.u,c.A,c.l,c.R,c.m)}tr.prototype.ca=function(c){c=c.target;const g=this.M;g&&yn(c)==3?g.j():this.Y(c)},tr.prototype.Y=function(c){try{if(c==this.g)e:{const Tt=yn(this.g);var g=this.g.Ba();const jn=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||xu(this.g)))){this.J||Tt!=4||g==7||(g==8||0>=jn?Wr(3):Wr(2)),ks(this);var y=this.g.Z();this.X=y;t:if(Rc(this)){var E=xu(this.g);c="";var M=E.length,j=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Ti(this);var ee="";break t}this.h.i=new d.TextDecoder}for(g=0;g<M;g++)this.h.h=!0,c+=this.h.i.decode(E[g],{stream:!(j&&g==M-1)});E.length=0,this.h.g+=c,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,Oo(this.i,this.u,this.A,this.l,this.R,Tt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Ct=this.g;if((je=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!me(je)){var Oe=je;break t}}Oe=null}if(y=Oe)Zn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cu(this,y);else{this.o=!1,this.s=3,yt(12),Bn(this),Ti(this);break e}}if(this.P){y=!0;let Nn;for(;!this.J&&this.C<ee.length;)if(Nn=df(this,ee),Nn==Mo){Tt==4&&(this.s=4,yt(14),y=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==Pu){this.s=4,yt(15),Zn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Zn(this.i,this.l,Nn,null),Cu(this,Nn);if(Rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||ee.length!=0||this.h.h||(this.s=1,yt(16),y=!1),this.o=this.o&&y,!y)Zn(this.i,this.l,ee,"[Invalid Chunked Response]"),Bn(this),Ti(this);else if(0<ee.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Lu(Ot),Ot.M=!0,yt(11))}}else Zn(this.i,this.l,ee,null),Cu(this,ee);Tt==4&&Bn(this),this.o&&!this.J&&(Tt==4?Qo(this.j,this):(this.o=!1,He(this)))}else $o(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Bn(this),Ti(this)}}}catch{}finally{}};function Rc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function df(c,g){var y=c.C,E=g.indexOf(`
`,y);return E==-1?Mo:(y=Number(g.substring(y,E)),isNaN(y)?Pu:(E+=1,E+y>g.length?Mo:(g=g.slice(E,E+y),c.C=E+y,g)))}tr.prototype.cancel=function(){this.J=!0,Bn(this)};function He(c){c.S=Date.now()+c.I,Pc(c,c.I)}function Pc(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Xn(T(c.ba,c),g)}function ks(c){c.B&&(d.clearTimeout(c.B),c.B=null)}tr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ru(this.i,this.A),this.L!=2&&(Wr(),yt(17)),Bn(this),this.s=2,Ti(this)):Pc(this,this.S-c)};function Ti(c){c.j.G==0||c.J||Qo(c.j,c)}function Bn(c){ks(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,vu(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Cu(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||un(y.h,c))){if(!c.K&&un(y.h,c)&&y.G==3){try{var E=y.Da.g.parse(g)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Ho(y),or(y);else break e;Ko(y),yt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=Xn(T(y.Za,y),6e3));if(1>=Cc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Jr(y,11)}else if((c.K||y.g==c)&&Ho(y),!me(g))for(M=y.Da.g.parse(g),g=0;g<M.length;g++){let Oe=M[g];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Ot=Oe[3];Ot!=null&&(y.la=Ot,y.j.info("VER="+y.la));const Tt=Oe[4];Tt!=null&&(y.Aa=Tt,y.j.info("SVER="+y.Aa));const jn=Oe[5];jn!=null&&typeof jn=="number"&&0<jn&&(E=1.5*jn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Nn=c.g;if(Nn){const Os=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var j=E.h;j.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(bu(j,j.h),j.h=null))}if(E.D){const Yo=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yo&&(E.ya=Yo,Ge(E.I,E.D,Yo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=c;if(E.qa=jc(E,E.J?E.ia:null,E.W),ee.K){bc(E.h,ee);var je=ee,Ct=E.L;Ct&&(je.I=Ct),je.B&&(ks(je),He(je)),E.g=ee}else xs(E);0<y.i.length&&wr(y)}else Oe[0]!="stop"&&Oe[0]!="close"||Jr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Jr(y,7):$t(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}Wr(4)}catch{}}var kc=class{constructor(c,g){this.g=c,this.map=g}};function Cs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Cc(c){return c.h?1:c.g?c.g.size:0}function un(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function bu(c,g){c.g?c.g.add(g):c.h=g}function bc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Cs.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Dc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return $(c.i)}function Uo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,E=0;E<y;E++)g.push(c[E]);return g}g=[],y=0;for(E in c)g[y++]=c[E];return g}function Bo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const E in c)g[y++]=E;return g}}}function Si(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=Bo(c),E=Uo(c),M=E.length,j=0;j<M;j++)g.call(void 0,E[j],y&&y[j],c)}var bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var E=c[y].indexOf("="),M=null;if(0<=E){var j=c[y].substring(0,E);M=c[y].substring(E+1)}else j=c[y];g(j,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Gr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Gr){this.h=c.h,Ds(this,c.j),this.o=c.o,this.g=c.g,Ai(this,c.s),this.l=c.l;var g=c.i,y=new _r;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),Ri(this,y),this.m=c.m}else c&&(g=String(c).match(bs))?(this.h=!1,Ds(this,g[1]||"",!0),this.o=Ve(g[2]||""),this.g=Ve(g[3]||"",!0),Ai(this,g[4]),this.l=Ve(g[5]||"",!0),Ri(this,g[6]||"",!0),this.m=Ve(g[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}Gr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ki(g,zo,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ki(g,zo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(ki(y,y.charAt(0)=="/"?xc:Vc,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",ki(y,Du)),c.join("")};function bn(c){return new Gr(c)}function Ds(c,g,y){c.j=y?Ve(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ai(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ri(c,g,y){g instanceof _r?(c.i=g,yr(c.i,c.h)):(y||(g=ki(g,Oc)),c.i=new _r(g,c.h))}function Ge(c,g,y){c.i.set(g,y)}function Pi(c){return Ge(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ve(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ki(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,Nc),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Nc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var zo=/[#\/\?@]/g,Vc=/[#\?:]/g,xc=/[#\?]/g,Oc=/[#\?@]/g,Du=/#/g;function _r(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function qt(c){c.g||(c.g=new Map,c.h=0,c.i&&ff(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}r=_r.prototype,r.add=function(c,g){qt(this),this.i=null,c=zn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function nr(c,g){qt(c),g=zn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function rr(c,g){return qt(c),g=zn(c,g),c.g.has(g)}r.forEach=function(c,g){qt(this),this.g.forEach(function(y,E){y.forEach(function(M){c.call(g,M,E,this)},this)},this)},r.na=function(){qt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let E=0;E<g.length;E++){const M=c[E];for(let j=0;j<M.length;j++)y.push(g[E])}return y},r.V=function(c){qt(this);let g=[];if(typeof c=="string")rr(this,c)&&(g=g.concat(this.g.get(zn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},r.set=function(c,g){return qt(this),this.i=null,c=zn(this,c),rr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ci(c,g,y){nr(c,g),0<y.length&&(c.i=null,c.g.set(zn(c,g),$(y)),c.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var E=g[y];const j=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var M=j;ee[E]!==""&&(M+="="+encodeURIComponent(String(ee[E]))),c.push(M)}}return this.i=c.join("&")};function zn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function yr(c,g){g&&!c.j&&(qt(c),c.i=null,c.g.forEach(function(y,E){var M=E.toLowerCase();E!=M&&(nr(this,E),Ci(this,M,y))},c)),c.j=g}function pf(c,g){const y=new As;if(d.Image){const E=new Image;E.onload=V(_n,y,"TestLoadImage: loaded",!0,g,E),E.onerror=V(_n,y,"TestLoadImage: error",!1,g,E),E.onabort=V(_n,y,"TestLoadImage: abort",!1,g,E),E.ontimeout=V(_n,y,"TestLoadImage: timeout",!1,g,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else g(!1)}function Lc(c,g){const y=new As,E=new AbortController,M=setTimeout(()=>{E.abort(),_n(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?_n(y,"TestPingServer: ok",!0,g):_n(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),_n(y,"TestPingServer: error",!1,g)})}function _n(c,g,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function mf(){this.g=new Eu}function Mc(c,g,y){const E=y||"";try{Si(c,function(M,j){let ee=M;m(M)&&(ee=wu(M)),g.push(E+j+"="+encodeURIComponent(ee))})}catch(M){throw g.push(E+"type="+encodeURIComponent("_badmap")),M}}function Kr(c){this.l=c.Ub||null,this.j=c.eb||!1}W(Kr,Ts),Kr.prototype.g=function(){return new Ns(this.l,this.j)},Kr.prototype.i=function(c){return function(){return c}}({});function Ns(c,g){Pt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Ns,Pt),r=Ns.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,sr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ir(this):sr(this),this.readyState==3&&Fc(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ir(this))},r.Qa=function(c){this.g&&(this.response=c,ir(this))},r.ga=function(){this.g&&ir(this)};function ir(c){c.readyState=4,c.l=null,c.j=null,c.v=null,sr(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function sr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hr(c){let g="";return _e(c,function(y,E){g+=E,g+=":",g+=y,g+=`\r
`}),g}function bi(c,g,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Hr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Ge(c,g,y))}function et(c){Pt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(et,Pt);var gf=/^https?$/i,Nu=["POST","PUT"];r=et.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():er.g(),this.v=this.o?Do(this.o):Do(er),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){Vs(this,j);return}if(c=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Nu,g,void 0))||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of y)this.g.setRequestHeader(j,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qo(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){Vs(this,j)}};function Vs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,jo(c),Dn(c)}function jo(c){c.A||(c.A=!0,kt(c,"complete"),kt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,kt(this,"complete"),kt(this,"abort"),Dn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dn(this,!0)),et.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vu(this):this.bb())},r.bb=function(){Vu(this)};function Vu(c){if(c.h&&typeof l<"u"&&(!c.v[1]||yn(c)!=4||c.Z()!=2)){if(c.u&&yn(c)==4)_u(c.Ea,0,c);else if(kt(c,"readystatechange"),yn(c)==4){c.h=!1;try{const ee=c.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var E;if(E=ee===0){var M=String(c.D).match(bs)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),E=!gf.test(M?M.toLowerCase():"")}y=E}if(y)kt(c,"complete"),kt(c,"success");else{c.m=6;try{var j=2<yn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",jo(c)}}finally{Dn(c)}}}}function Dn(c,g){if(c.g){qo(c);const y=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||kt(c,"ready");try{y.onreadystatechange=E}catch{}}}function qo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function yn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Iu(g)}};function xu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function $o(c){const g={};c=(c.g&&2<=yn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(me(c[E]))continue;var y=N(c[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=g[M]||[];g[M]=j,j.push(y)}C(g,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function Ou(c){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,c),this.cb=vr("retryDelaySeedMs",1e4,c),this.Wa=vr("forwardChannelMaxRetries",2,c),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Cs(c&&c.concurrentRequestLimit),this.Da=new mf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ou.prototype,r.la=8,r.G=1,r.connect=function(c,g,y,E){yt(0),this.W=c,this.H=g||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=jc(this,null,this.W),wr(this)};function $t(c){if(Wo(c),c.G==3){var g=c.U++,y=bn(c.I);if(Ge(y,"SID",c.K),Ge(y,"RID",g),Ge(y,"TYPE","terminate"),Qr(c,y),g=new tr(c,c.j,g),g.L=2,g.v=Pi(bn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=qc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),He(g)}zc(c)}function or(c){c.g&&(Lu(c),c.g.cancel(),c.g=null)}function Wo(c){or(c),c.u&&(d.clearTimeout(c.u),c.u=null),Ho(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function wr(c){if(!Cn(c.h)&&!c.s){c.s=!0;var g=c.Ga;We||oe(),ne||(We(),ne=!0),ye.add(g,c),c.B=0}}function _f(c,g){return Cc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Xn(T(c.Ga,c,g),Bc(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new tr(this,this.j,c);let j=this.o;if(this.S&&(j?(j=S(j),b(j,this.S)):j=this.S),this.m!==null||this.O||(M.H=j,j=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(g+=E,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Di(this,M,g),y=bn(this.I),Ge(y,"RID",c),Ge(y,"CVER",22),this.D&&Ge(y,"X-HTTP-Session-Id",this.D),Qr(this,y),j&&(this.O?g="headers="+encodeURIComponent(String(Hr(j)))+"&"+g:this.m&&bi(y,this.m,j)),bu(this.h,M),this.Ua&&Ge(y,"TYPE","init"),this.P?(Ge(y,"$req",g),Ge(y,"SID","null"),M.T=!0,Fo(M,y,null)):Fo(M,y,g),this.G=2}}else this.G==3&&(c?Go(this,c):this.i.length==0||Cn(this.h)||Go(this))};function Go(c,g){var y;g?y=g.l:y=c.U++;const E=bn(c.I);Ge(E,"SID",c.K),Ge(E,"RID",y),Ge(E,"AID",c.T),Qr(c,E),c.m&&c.o&&bi(E,c.m,c.o),y=new tr(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Di(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),bu(c.h,y),Fo(y,E,g)}function Qr(c,g){c.H&&_e(c.H,function(y,E){Ge(g,E,y)}),c.l&&Si({},function(y,E){Ge(g,E,y)})}function Di(c,g,y){y=Math.min(c.i.length,y);var E=c.l?T(c.l.Na,c.l,c):null;e:{var M=c.i;let j=-1;for(;;){const ee=["count="+y];j==-1?0<y?(j=M[0].g,ee.push("ofs="+j)):j=0:ee.push("ofs="+j);let je=!0;for(let Ct=0;Ct<y;Ct++){let Oe=M[Ct].g;const Ot=M[Ct].map;if(Oe-=j,0>Oe)j=Math.max(0,M[Ct].g-100),je=!1;else try{Mc(Ot,ee,"req"+Oe+"_")}catch{E&&E(Ot)}}if(je){E=ee.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,E}function xs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;We||oe(),ne||(We(),ne=!0),ye.add(g,c),c.v=0}}function Ko(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Xn(T(c.Fa,c),Bc(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Xn(T(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),or(this),Uc(this))};function Lu(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Uc(c){c.g=new tr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=bn(c.qa);Ge(g,"RID","rpc"),Ge(g,"SID",c.K),Ge(g,"AID",c.T),Ge(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ge(g,"TO",c.ja),Ge(g,"TYPE","xmlhttp"),Qr(c,g),c.m&&c.o&&bi(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Pi(bn(g)),y.m=null,y.P=!0,ku(y,c)}r.Za=function(){this.C!=null&&(this.C=null,or(this),Ko(this),yt(19))};function Ho(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Qo(c,g){var y=null;if(c.g==g){Ho(c),Lu(c),c.g=null;var E=2}else if(un(c.h,g))y=g.D,bc(c.h,g),E=1;else return;if(c.G!=0){if(g.o)if(E==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var M=c.B;E=Ss(),kt(E,new xo(E,y)),wr(c)}else xs(c);else if(M=g.s,M==3||M==0&&0<g.X||!(E==1&&_f(c,g)||E==2&&Ko(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),M){case 1:Jr(c,5);break;case 4:Jr(c,10);break;case 3:Jr(c,6);break;default:Jr(c,2)}}}function Bc(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function Jr(c,g){if(c.j.info("Error code "+g),g==2){var y=T(c.fb,c),E=c.Xa;const M=!E;E=new Gr(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ds(E,"https"),Pi(E),M?pf(E.toString(),y):Lc(E.toString(),y)}else yt(2);c.G=0,c.l&&c.l.sa(g),zc(c),Wo(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function zc(c){if(c.G=0,c.ka=[],c.l){const g=Dc(c.h);(g.length!=0||c.i.length!=0)&&(q(c.ka,g),q(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function jc(c,g,y){var E=y instanceof Gr?bn(y):new Gr(y);if(E.g!="")g&&(E.g=g+"."+E.g),Ai(E,E.s);else{var M=d.location;E=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;var j=new Gr(null);E&&Ds(j,E),g&&(j.g=g),M&&Ai(j,M),y&&(j.l=y),E=j}return y=c.D,g=c.ya,y&&g&&Ge(E,y,g),Ge(E,"VER",c.la),Qr(c,E),E}function qc(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new et(new Kr({eb:y})):new et(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}r=Mu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Jo(){}Jo.prototype.g=function(c,g){return new ln(c,g)};function ln(c,g){Pt.call(this),this.g=new Ou(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!me(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!me(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Ir(this)}W(ln,Pt),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){$t(this.g)},ln.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=wu(c),c=y);g.i.push(new kc(g.Ya++,c)),g.G==3&&wr(g)},ln.prototype.N=function(){this.g.l=null,delete this.j,$t(this.g),delete this.g,ln.aa.N.call(this)};function $c(c){mr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}W($c,mr);function Wc(){Vo.call(this),this.status=1}W(Wc,Vo);function Ir(c){this.g=c}W(Ir,Mu),Ir.prototype.ua=function(){kt(this.g,"a")},Ir.prototype.ta=function(c){kt(this.g,new $c(c))},Ir.prototype.sa=function(c){kt(this.g,new Wc)},Ir.prototype.ra=function(){kt(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,tE=function(){return new Jo},eE=function(){return Ss()},ZI=gr,um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lo.NO_ERROR=0,Lo.TIMEOUT=8,Lo.HTTP_ERROR=6,Kh=Lo,Sc.COMPLETE="complete",XI=Sc,No.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Pt.prototype.listen=Pt.prototype.K,yl=No,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,YI=et}).apply(typeof Uh<"u"?Uh:typeof self<"u"?self:typeof window<"u"?window:{});const Gv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Cd("@firebase/firestore");function Ta(){return os.logLevel}function yP(r){os.setLogLevel(r)}function Q(r,...e){if(os.logLevel<=be.DEBUG){const t=e.map(Hm);os.debug(`Firestore (${nu}): ${r}`,...t)}}function wt(r,...e){if(os.logLevel<=be.ERROR){const t=e.map(Hm);os.error(`Firestore (${nu}): ${r}`,...t)}}function Lr(r,...e){if(os.logLevel<=be.WARN){const t=e.map(Hm);os.warn(`Firestore (${nu}): ${r}`,...t)}}function Hm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(r="Unexpected state"){const e=`FIRESTORE (${nu}) INTERNAL ASSERTION FAILED: `+r;throw wt(e),new Error(e)}function ce(r,e){r||se()}function vP(r,e){r||se()}function re(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class IP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class EP{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let n=this.i;const s=f=>this.i!==n?(n=this.i,t(f)):Promise.resolve();let a=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Qt,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Qt)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ce(typeof n.accessToken=="string"),new nE(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Bt(e)}}class TP{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class SP{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new TP(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ce(this.o===void 0);const n=a=>{a.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,Q("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>n(a))};const s=a=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new AP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=PP(40);for(let a=0;a<s.length;++a)n.length<20&&s[a]<t&&(n+=e.charAt(s[a]%e.length))}return n}}function Se(r,e){return r<e?-1:r>e?1:0}function Ua(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function iE(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ot(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new K(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new ot(0,0))}static max(){return new pe(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,n){t===void 0?t=0:t>e.length&&se(),n===void 0?n=e.length-t:n>e.length-t&&se(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Fl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fl?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const a=e.get(s),l=t.get(s);if(a<l)return-1;if(a>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class De extends Fl{construct(e,t,n){return new De(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new K(z.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new De(t)}static emptyPath(){return new De([])}}const kP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Fl{construct(e,t,n){return new it(e,t,n)}static isValidIdentifier(e){return kP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const a=()=>{if(n.length===0)throw new K(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let l=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new K(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new K(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=f,s+=2}else d==="`"?(l=!l,s++):d!=="."||l?(n+=d,s++):(a(),s++)}if(a(),l)throw new K(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(t)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function lm(r){return r.fields.find(e=>e.kind===2)}function Js(r){return r.fields.filter(e=>e.kind!==2)}ld.UNKNOWN_ID=-1;class Hh{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ul{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ul(0,Fn.min())}}function sE(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(n===1e9?new ot(t+1,0):new ot(t,n));return new Fn(s,te.empty(),e)}function oE(r){return new Fn(r.readTime,r.key,-1)}class Fn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Fn(pe.min(),te.empty(),-1)}static max(){return new Fn(pe.max(),te.empty(),-1)}}function Qm(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=te.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==aE)throw r;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((n,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,n)=>{t(e)})}static reject(e){return new L((t,n)=>{n(e)})}static waitFor(e){return new L((t,n)=>{let s=0,a=0,l=!1;e.forEach(d=>{++s,d.next(()=>{++a,l&&a===s&&t()},f=>n(f))}),l=!0,a===s&&t()})}static or(e){let t=L.resolve(!1);for(const n of e)t=t.next(s=>s?L.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,a)=>{n.push(t.call(this,s,a))}),this.waitFor(n)}static mapArray(e,t){return new L((n,s)=>{const a=e.length,l=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(v=>{l[m]=v,++d,d===a&&n(l)},v=>s(v))}})}static doWhile(e,t){return new L((n,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):n()};a()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{static open(e,t,n,s){try{return new bd(t,e.transaction(s,n))}catch(a){throw new Tl(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Qt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Tl(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Jm(n.target.error);this.V.reject(new Tl(e,s))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(Q("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new bP(t)}}class Vr{static delete(e){return Q("SimpleDb","Removing database:",e),Ys(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!xl())return!1;if(Vr.S())return!0;const e=ct(),t=Vr.D(e),n=0<t&&t<10,s=lE(e),a=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||a)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.F=n,Vr.D(ct())===12.2&&wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(Q("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=a=>{const l=a.target.result;t(l)},s.onblocked=()=>{n(new Tl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=a=>{const l=a.target.error;l.name==="VersionError"?n(new K(z.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):l.name==="InvalidStateError"?n(new K(z.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+l)):n(new Tl(e,l))},s.onupgradeneeded=a=>{Q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const l=a.target.result;this.F.O(l,s.transaction,a.oldVersion,this.version).next(()=>{Q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const a=t==="readonly";let l=0;for(;;){++l;try{this.db=await this.M(e);const d=bd.open(this.db,e,a?"readonly":"readwrite",n),f=s(d).next(m=>(d.g(),m)).catch(m=>(d.abort(m),L.reject(m))).toPromise();return f.catch(()=>{}),await d.m,f}catch(d){const f=d,m=f.name!=="FirebaseError"&&l<3;if(Q("SimpleDb","Transaction failed with error:",f.message,"Retrying:",m),this.close(),!m)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lE(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class CP{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ys(this.B.delete())}}class Tl extends K{constructor(e,t){super(z.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function gs(r){return r.name==="IndexedDbTransactionError"}class bP{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(Q("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Q("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ys(n)}add(e){return Q("SimpleDb","ADD",this.store.name,e,e),Ys(this.store.add(e))}get(e){return Ys(this.store.get(e)).next(t=>(t===void 0&&(t=null),Q("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return Q("SimpleDb","DELETE",this.store.name,e),Ys(this.store.delete(e))}count(){return Q("SimpleDb","COUNT",this.store.name),Ys(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const a=s.getAll(n.range);return new L((l,d)=>{a.onerror=f=>{d(f.target.error)},a.onsuccess=f=>{l(f.target.result)}})}{const a=this.cursor(n),l=[];return this.W(a,(d,f)=>{l.push(f)}).next(()=>l)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new L((s,a)=>{n.onerror=l=>{a(l.target.error)},n.onsuccess=l=>{s(l.target.result)}})}j(e,t){Q("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(a,l,d)=>d.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new L((n,s)=>{t.onerror=a=>{const l=Jm(a.target.error);s(l)},t.onsuccess=a=>{const l=a.target.result;l?e(l.primaryKey,l.value).next(d=>{d?l.continue():n()}):n()}})}W(e,t){const n=[];return new L((s,a)=>{e.onerror=l=>{a(l.target.error)},e.onsuccess=l=>{const d=l.target.result;if(!d)return void s();const f=new CP(d),m=t(d.primaryKey,d.value,f);if(m instanceof L){const v=m.catch(w=>(f.done(),L.reject(w)));n.push(v)}f.isDone?s():f.K===null?d.continue():d.continue(f.K)}}).next(()=>L.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ys(r){return new L((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Jm(n.target.error);t(s)}})}let Kv=!1;function Jm(r){const e=Vr.D(ct());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Kv||(Kv=!0,setTimeout(()=>{throw n},0)),n}}return r}class DP{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){Q("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{Q("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){gs(t)?Q("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await ms(t)}await this.X(6e4)})}}class NP{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,a=!0;return L.doWhile(()=>a===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(l=>{if(l!==null&&!n.has(l))return Q("IndexBackfiller",`Processing collection: ${l}`),this.ne(e,l,s).next(d=>{s-=d,n.add(l)});a=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(a=>{const l=a.changes;return this.localStore.indexManager.updateIndexEntries(e,l).next(()=>this.re(s,a)).next(d=>(Q("IndexBackfiller",`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>l.size)}))}re(e,t){let n=e;return t.changes.forEach((s,a)=>{const l=oE(a);Qm(l,n)>0&&(n=l)}),new Fn(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rn.oe=-1;function rc(r){return r==null}function Bl(r){return r===0&&1/r==-1/0}function cE(r){return typeof r=="number"&&Number.isInteger(r)&&!Bl(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Hv(e)),e=VP(r.get(t),e);return Hv(e)}function VP(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const a=r.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function Hv(r){return r+""}function br(r){const e=r.length;if(ce(e>=2),e===2)return ce(r.charAt(0)===""&&r.charAt(1)===""),De.emptyPath();const t=e-2,n=[];let s="";for(let a=0;a<e;){const l=r.indexOf("",a);switch((l<0||l>t)&&se(),r.charAt(l+1)){case"":const d=r.substring(a,l);let f;s.length===0?f=d:(s+=d,f=s,s=""),n.push(f);break;case"":s+=r.substring(a,l),s+="\0";break;case"":s+=r.substring(a,l+1);break;default:se()}a=l+2}return new De(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(r,e){return[r,on(e)]}function hE(r,e,t){return[r,on(e),t]}const xP={},OP=["prefixPath","collectionGroup","readTime","documentId"],LP=["prefixPath","collectionGroup","documentId"],MP=["collectionGroup","readTime","prefixPath","documentId"],FP=["canonicalId","targetId"],UP=["targetId","path"],BP=["path","targetId"],zP=["collectionId","parent"],jP=["indexId","uid"],qP=["uid","sequenceNumber"],$P=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],WP=["indexId","uid","orderedDocumentKey"],GP=["userId","collectionPath","documentId"],KP=["userId","collectionPath","largestBatchId"],HP=["userId","collectionGroup","largestBatchId"],dE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],QP=[...dE,"documentOverlays"],fE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],pE=fE,Ym=[...pE,"indexConfiguration","indexState","indexEntries"],JP=Ym,YP=[...Ym,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends uE{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Vt(r,e){const t=re(r);return Vr.C(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function _s(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function mE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bh(this.root,e,this.comparator,!0)}}class Bh{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,n,s,a){this.key=e,this.value=t,this.color=n??Kt.RED,this.left=s??Kt.EMPTY,this.right=a??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,a){return new Kt(e??this.key,t??this.value,n??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const a=n(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,n),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,t,n,s,a){return this}insert(e,t,n){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yv(this.data.getIterator())}getIteratorFrom(e){return new Yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=n.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class Yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ya(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new $e(it.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ua(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new gE("Invalid base64 string: "+a):a}}(e);return new pt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a}(e);return new pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const ZP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(r){if(ce(!!r),typeof r=="string"){let e=0;const t=ZP.exec(r);if(ce(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function di(r){return typeof r=="string"?pt.fromBase64String(r):pt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Nd(r){const e=r.mapValue.fields.__previous_value__;return Dd(e)?Nd(e):e}function zl(r){const e=hi(r.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t,n,s,a,l,d,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m}}class as{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Jh={nullValue:"NULL_VALUE"};function us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Dd(r)?4:_E(r)?9007199254740991:Vd(r)?10:11:se()}function Mr(r,e){if(r===e)return!0;const t=us(r);if(t!==us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zl(r).isEqual(zl(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const l=hi(s.timestampValue),d=hi(a.timestampValue);return l.seconds===d.seconds&&l.nanos===d.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,a){return di(s.bytesValue).isEqual(di(a.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,a){return rt(s.geoPointValue.latitude)===rt(a.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(a.geoPointValue.longitude)}(r,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return rt(s.integerValue)===rt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const l=rt(s.doubleValue),d=rt(a.doubleValue);return l===d?Bl(l)===Bl(d):isNaN(l)&&isNaN(d)}return!1}(r,e);case 9:return Ua(r.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:case 11:return function(s,a){const l=s.mapValue.fields||{},d=a.mapValue.fields||{};if(Jv(l)!==Jv(d))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(d[f]===void 0||!Mr(l[f],d[f])))return!1;return!0}(r,e);default:return se()}}function jl(r,e){return(r.values||[]).find(t=>Mr(t,e))!==void 0}function ls(r,e){if(r===e)return 0;const t=us(r),n=us(e);if(t!==n)return Se(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return function(a,l){const d=rt(a.integerValue||a.doubleValue),f=rt(l.integerValue||l.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(r,e);case 3:return Xv(r.timestampValue,e.timestampValue);case 4:return Xv(zl(r),zl(e));case 5:return Se(r.stringValue,e.stringValue);case 6:return function(a,l){const d=di(a),f=di(l);return d.compareTo(f)}(r.bytesValue,e.bytesValue);case 7:return function(a,l){const d=a.split("/"),f=l.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=Se(d[m],f[m]);if(v!==0)return v}return Se(d.length,f.length)}(r.referenceValue,e.referenceValue);case 8:return function(a,l){const d=Se(rt(a.latitude),rt(l.latitude));return d!==0?d:Se(rt(a.longitude),rt(l.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Zv(r.arrayValue,e.arrayValue);case 10:return function(a,l){var d,f,m,v;const w=a.fields||{},T=l.fields||{},V=(d=w.value)===null||d===void 0?void 0:d.arrayValue,W=(f=T.value)===null||f===void 0?void 0:f.arrayValue,$=Se(((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0,((v=W==null?void 0:W.values)===null||v===void 0?void 0:v.length)||0);return $!==0?$:Zv(V,W)}(r.mapValue,e.mapValue);case 11:return function(a,l){if(a===Xi.mapValue&&l===Xi.mapValue)return 0;if(a===Xi.mapValue)return 1;if(l===Xi.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=l.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=Se(f[w],v[w]);if(T!==0)return T;const V=ls(d[f[w]],m[v[w]]);if(V!==0)return V}return Se(f.length,v.length)}(r.mapValue,e.mapValue);default:throw se()}}function Xv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=hi(r),n=hi(e),s=Se(t.seconds,n.seconds);return s!==0?s:Se(t.nanos,n.nanos)}function Zv(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const a=ls(t[s],n[s]);if(a)return a}return Se(t.length,n.length)}function Ba(r){return hm(r)}function hm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=hi(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return di(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return te.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const a of t.values||[])s?s=!1:n+=",",n+=hm(a);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const l of n)a?a=!1:s+=",",s+=`${l}:${hm(t.fields[l])}`;return s+"}"}(r.mapValue):se()}function Yh(r){switch(us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nd(r);return e?16+Yh(e):16;case 5:return 2*r.stringValue.length;case 6:return di(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,a)=>s+Yh(a),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return _s(n.fields,(a,l)=>{s+=a.length+Yh(l)}),s}(r.mapValue);default:throw se()}}function uo(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function dm(r){return!!r&&"integerValue"in r}function ql(r){return!!r&&"arrayValue"in r}function ew(r){return!!r&&"nullValue"in r}function tw(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xh(r){return!!r&&"mapValue"in r}function Vd(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return _s(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Sl(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sl(r.arrayValue.values[t]);return e}return Object.assign({},r)}function _E(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const yE={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function t1(r){return"nullValue"in r?Jh:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?uo(as.empty(),te.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Vd(r)?yE:{mapValue:{}}:se()}function n1(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?uo(as.empty(),te.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?yE:"mapValue"in r?Vd(r)?{mapValue:{}}:Xi:se()}function nw(r,e){const t=ls(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function rw(r,e){const t=ls(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Xh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sl(t)}setAll(e){let t=it.emptyPath(),n={},s=[];e.forEach((l,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,n,s),n={},s=[],t=d.popLast()}l?n[d.lastSegment()]=Sl(l):s.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,n,s)}delete(e){const t=this.field(e.popLast());Xh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Xh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){_s(t,(s,a)=>e[s]=a);for(const s of n)delete e[s]}clone(){return new Ht(Sl(this.value))}}function vE(r){const e=[];return _s(r.fields,(t,n)=>{const s=new it([t]);if(Xh(n)){const a=vE(n.mapValue).fields;if(a.length===0)e.push(s);else for(const l of a)e.push(s.child(l))}else e.push(s)}),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,n,s,a,l,d){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=a,this.data=l,this.documentState=d}static newInvalidDocument(e){return new Ze(e,0,pe.min(),pe.min(),pe.min(),Ht.empty(),0)}static newFoundDocument(e,t,n,s){return new Ze(e,1,t,pe.min(),n,s,0)}static newNoDocument(e,t){return new Ze(e,2,t,pe.min(),pe.min(),Ht.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,pe.min(),pe.min(),Ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.position=e,this.inclusive=t}}function iw(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const a=e[s],l=r.position[s];if(a.field.isKeyField()?n=te.comparator(te.fromName(l.referenceValue),t.key):n=ls(l,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function sw(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Mr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t="asc"){this.field=e,this.dir=t}}function r1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{}class Ne extends wE{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new i1(e,t,n):t==="array-contains"?new a1(e,n):t==="in"?new RE(e,n):t==="not-in"?new u1(e,n):t==="array-contains-any"?new l1(e,n):new Ne(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new s1(e,n):new o1(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ls(t,this.value)):t!==null&&us(this.value)===us(t)&&this.matchesComparison(ls(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qe extends wE{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qe(e,t)}matches(e){return za(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function za(r){return r.op==="and"}function fm(r){return r.op==="or"}function Xm(r){return IE(r)&&za(r)}function IE(r){for(const e of r.filters)if(e instanceof qe)return!1;return!0}function pm(r){if(r instanceof Ne)return r.field.canonicalString()+r.op.toString()+Ba(r.value);if(Xm(r))return r.filters.map(e=>pm(e)).join(",");{const e=r.filters.map(t=>pm(t)).join(",");return`${r.op}(${e})`}}function EE(r,e){return r instanceof Ne?function(n,s){return s instanceof Ne&&n.op===s.op&&n.field.isEqual(s.field)&&Mr(n.value,s.value)}(r,e):r instanceof qe?function(n,s){return s instanceof qe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((a,l,d)=>a&&EE(l,s.filters[d]),!0):!1}(r,e):void se()}function TE(r,e){const t=r.filters.concat(e);return qe.create(t,r.op)}function SE(r){return r instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Ba(t.value)}`}(r):r instanceof qe?function(t){return t.op.toString()+" {"+t.getFilters().map(SE).join(" ,")+"}"}(r):"Filter"}class i1 extends Ne{constructor(e,t,n){super(e,t,n),this.key=te.fromName(n.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class s1 extends Ne{constructor(e,t){super(e,"in",t),this.keys=AE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class o1 extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=AE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function AE(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>te.fromName(n.referenceValue))}class a1 extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ql(t)&&jl(t.arrayValue,this.value)}}class RE extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jl(this.value.arrayValue,t)}}class u1 extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jl(this.value.arrayValue,t)}}class l1 extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ql(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>jl(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t=null,n=[],s=[],a=null,l=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=a,this.startAt=l,this.endAt=d,this.ue=null}}function mm(r,e=null,t=[],n=[],s=null,a=null,l=null){return new c1(r,e,t,n,s,a,l)}function lo(r){const e=re(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>pm(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(a){return a.field.canonicalString()+a.dir}(n)).join(","),rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ba(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ba(n)).join(",")),e.ue=t}return e.ue}function ic(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!r1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!EE(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!sw(r.startAt,e.startAt)&&sw(r.endAt,e.endAt)}function cd(r){return te.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function hd(r,e){return r.filters.filter(t=>t instanceof Ne&&t.field.isEqual(e))}function ow(r,e,t){let n=Jh,s=!0;for(const a of hd(r,e)){let l=Jh,d=!0;switch(a.op){case"<":case"<=":l=t1(a.value);break;case"==":case"in":case">=":l=a.value;break;case">":l=a.value,d=!1;break;case"!=":case"not-in":l=Jh}nw({value:n,inclusive:s},{value:l,inclusive:d})<0&&(n=l,s=d)}if(t!==null){for(let a=0;a<r.orderBy.length;++a)if(r.orderBy[a].field.isEqual(e)){const l=t.position[a];nw({value:n,inclusive:s},{value:l,inclusive:t.inclusive})<0&&(n=l,s=t.inclusive);break}}return{value:n,inclusive:s}}function aw(r,e,t){let n=Xi,s=!0;for(const a of hd(r,e)){let l=Xi,d=!0;switch(a.op){case">=":case">":l=n1(a.value),d=!1;break;case"==":case"in":case"<=":l=a.value;break;case"<":l=a.value,d=!1;break;case"!=":case"not-in":l=Xi}rw({value:n,inclusive:s},{value:l,inclusive:d})>0&&(n=l,s=d)}if(t!==null){for(let a=0;a<r.orderBy.length;++a)if(r.orderBy[a].field.isEqual(e)){const l=t.position[a];rw({value:n,inclusive:s},{value:l,inclusive:t.inclusive})>0&&(n=l,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t=null,n=[],s=[],a=null,l="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=a,this.limitType=l,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PE(r,e,t,n,s,a,l,d){return new mi(r,e,t,n,s,a,l,d)}function ru(r){return new mi(r)}function uw(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Zm(r){return r.collectionGroup!==null}function Da(r){const e=re(r);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let d=new $e(it.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new $l(a,n))}),t.has(it.keyField().canonicalString())||e.ce.push(new $l(it.keyField(),n))}return e.ce}function mn(r){const e=re(r);return e.le||(e.le=h1(e,Da(r))),e.le}function h1(r,e){if(r.limitType==="F")return mm(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new $l(s.field,a)});const t=r.endAt?new cs(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new cs(r.startAt.position,r.startAt.inclusive):null;return mm(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function gm(r,e){const t=r.filters.concat([e]);return new mi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function dd(r,e,t){return new mi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function sc(r,e){return ic(mn(r),mn(e))&&r.limitType===e.limitType}function kE(r){return`${lo(mn(r))}|lt:${r.limitType}`}function Sa(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>SE(s)).join(", ")}]`),rc(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ba(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ba(s)).join(",")),`Target(${n})`}(mn(r))}; limitType=${r.limitType})`}function oc(r,e){return e.isFoundDocument()&&function(n,s){const a=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(a):te.isDocumentKey(n.path)?n.path.isEqual(a):n.path.isImmediateParentOf(a)}(r,e)&&function(n,s){for(const a of Da(n))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const a of n.filters)if(!a.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(l,d,f){const m=iw(l,d,f);return l.inclusive?m<=0:m<0}(n.startAt,Da(n),s)||n.endAt&&!function(l,d,f){const m=iw(l,d,f);return l.inclusive?m>=0:m>0}(n.endAt,Da(n),s))}(r,e)}function CE(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function bE(r){return(e,t)=>{let n=!1;for(const s of Da(r)){const a=d1(s,e,t);if(a!==0)return a;n=n||s.field.isKeyField()}return 0}}function d1(r,e,t){const n=r.field.isKeyField()?te.comparator(e.key,t.key):function(a,l,d){const f=l.data.field(a),m=d.data.field(a);return f!==null&&m!==null?ls(f,m):se()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,a]of n)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(t,n)=>{for(const[s,a]of n)e(s,a)})}isEmpty(){return mE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new Je(te.comparator);function kn(){return f1}const DE=new Je(te.comparator);function vl(...r){let e=DE;for(const t of r)e=e.insert(t.key,t);return e}function NE(r){let e=DE;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Dr(){return Al()}function VE(){return Al()}function Al(){return new gi(r=>r.toString(),(r,e)=>r.isEqual(e))}const p1=new Je(te.comparator),m1=new $e(te.comparator);function Ae(...r){let e=m1;for(const t of r)e=e.add(t);return e}const g1=new $e(Se);function eg(){return g1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function xE(r){return{integerValue:""+r}}function OE(r,e){return cE(e)?xE(e):tg(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this._=void 0}}function _1(r,e,t){return r instanceof ja?function(s,a){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Dd(a)&&(a=Nd(a)),a&&(l.fields.__previous_value__=a),{mapValue:l}}(t,e):r instanceof co?ME(r,e):r instanceof ho?FE(r,e):function(s,a){const l=LE(s,a),d=lw(l)+lw(s.Pe);return dm(l)&&dm(s.Pe)?xE(d):tg(s.serializer,d)}(r,e)}function y1(r,e,t){return r instanceof co?ME(r,e):r instanceof ho?FE(r,e):t}function LE(r,e){return r instanceof qa?function(n){return dm(n)||function(a){return!!a&&"doubleValue"in a}(n)}(e)?e:{integerValue:0}:null}class ja extends xd{}class co extends xd{constructor(e){super(),this.elements=e}}function ME(r,e){const t=UE(e);for(const n of r.elements)t.some(s=>Mr(s,n))||t.push(n);return{arrayValue:{values:t}}}class ho extends xd{constructor(e){super(),this.elements=e}}function FE(r,e){let t=UE(e);for(const n of r.elements)t=t.filter(s=>!Mr(s,n));return{arrayValue:{values:t}}}class qa extends xd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function lw(r){return rt(r.integerValue||r.doubleValue)}function UE(r){return ql(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.field=e,this.transform=t}}function v1(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof co&&s instanceof co||n instanceof ho&&s instanceof ho?Ua(n.elements,s.elements,Mr):n instanceof qa&&s instanceof qa?Mr(n.Pe,s.Pe):n instanceof ja&&s instanceof ja}(r.transform,e.transform)}class w1{constructor(e,t){this.version=e,this.transformResults=t}}class st{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Od{}function BE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new su(r.key,st.none()):new iu(r.key,r.data,st.none());{const t=r.data,n=Ht.empty();let s=new $e(it.comparator);for(let a of e.fields)if(!s.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?n.delete(a):n.set(a,l),s=s.add(a)}return new _i(r.key,n,new Pn(s.toArray()),st.none())}}function I1(r,e,t){r instanceof iu?function(s,a,l){const d=s.value.clone(),f=hw(s.fieldTransforms,a,l.transformResults);d.setAll(f),a.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(r,e,t):r instanceof _i?function(s,a,l){if(!Zh(s.precondition,a))return void a.convertToUnknownDocument(l.version);const d=hw(s.fieldTransforms,a,l.transformResults),f=a.data;f.setAll(zE(s)),f.setAll(d),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(r,e,t):function(s,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Rl(r,e,t,n){return r instanceof iu?function(a,l,d,f){if(!Zh(a.precondition,l))return d;const m=a.value.clone(),v=dw(a.fieldTransforms,f,l);return m.setAll(v),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(r,e,t,n):r instanceof _i?function(a,l,d,f){if(!Zh(a.precondition,l))return d;const m=dw(a.fieldTransforms,f,l),v=l.data;return v.setAll(zE(a)),v.setAll(m),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(r,e,t,n):function(a,l,d){return Zh(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):d}(r,e,t)}function E1(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),a=LE(n.transform,s||null);a!=null&&(t===null&&(t=Ht.empty()),t.set(n.field,a))}return t||null}function cw(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ua(n,s,(a,l)=>v1(a,l))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class iu extends Od{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _i extends Od{constructor(e,t,n,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function zE(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function hw(r,e,t){const n=new Map;ce(r.length===t.length);for(let s=0;s<t.length;s++){const a=r[s],l=a.transform,d=e.data.field(a.field);n.set(a.field,y1(l,d,t[s]))}return n}function dw(r,e,t){const n=new Map;for(const s of r){const a=s.transform,l=t.data.field(s.field);n.set(s.field,_1(a,l,e))}return n}class su extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ng extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&I1(a,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Rl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Rl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=VE();return this.mutations.forEach(s=>{const a=e.get(s.key),l=a.overlayedDocument;let d=this.applyToLocalView(l,a.mutatedFields);d=t.has(s.key)?null:d;const f=BE(l,d);f!==null&&n.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(pe.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ua(this.mutations,e.mutations,(t,n)=>cw(t,n))&&Ua(this.baseMutations,e.baseMutations,(t,n)=>cw(t,n))}}class ig{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){ce(e.mutations.length===n.length);let s=function(){return p1}();const a=e.mutations;for(let l=0;l<a.length;l++)s=s.insert(a[l].key,n[l].version);return new ig(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,Le;function jE(r){switch(r){default:return se();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function qE(r){if(r===void 0)return wt("GRPC error has no .code"),z.UNKNOWN;switch(r){case At.OK:return z.OK;case At.CANCELLED:return z.CANCELLED;case At.UNKNOWN:return z.UNKNOWN;case At.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case At.INTERNAL:return z.INTERNAL;case At.UNAVAILABLE:return z.UNAVAILABLE;case At.UNAUTHENTICATED:return z.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case At.NOT_FOUND:return z.NOT_FOUND;case At.ALREADY_EXISTS:return z.ALREADY_EXISTS;case At.PERMISSION_DENIED:return z.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case At.ABORTED:return z.ABORTED;case At.OUT_OF_RANGE:return z.OUT_OF_RANGE;case At.UNIMPLEMENTED:return z.UNIMPLEMENTED;case At.DATA_LOSS:return z.DATA_LOSS;default:return se()}}(Le=At||(At={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=new so([4294967295,4294967295],0);function fw(r){const e=$E().encode(r),t=new JI;return t.update(e),new Uint8Array(t.digest())}function pw(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new so([t,n],0),new so([s,a],0)]}class og{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new wl(`Invalid padding: ${t}`);if(n<0)throw new wl(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new wl(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new wl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=so.fromNumber(this.Te)}Ee(e,t,n){let s=e.add(t.multiply(so.fromNumber(n)));return s.compare(S1)===1&&(s=new so([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=fw(e),[n,s]=pw(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(n,s,a);if(!this.de(l))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new og(a,s,t);return n.forEach(d=>l.insert(d)),l}insert(e){if(this.Te===0)return;const t=fw(e),[n,s]=pw(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(n,s,a);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class wl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,n,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new uc(pe.min(),s,new Je(Se),kn(),Ae())}}class lc{constructor(e,t,n,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lc(n,t,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class WE{constructor(e,t){this.targetId=e,this.me=t}}class GE{constructor(e,t,n=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class mw{constructor(){this.fe=0,this.ge=gw(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),t=Ae(),n=Ae();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:se()}}),new lc(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=gw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class A1{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=zh(),this.Qe=zh(),this.Ke=new Je(Se)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,n=e.me.count,s=this.Ye(t);if(s){const a=s.target;if(cd(a))if(n===0){const l=new te(a.path);this.We(t,l,Ze.newNoDocument(l,pe.min()))}else ce(n===1);else{const l=this.Ze(t);if(l!==n){const d=this.Xe(e),f=d?this.et(d,e,l):1;if(f!==0){this.He(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:a=0}=t;let l,d;try{l=di(n).toUint8Array()}catch(f){if(f instanceof gE)return Lr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new og(l,s,a)}catch(f){return Lr(f instanceof wl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Te===0?null:d}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(a=>{const l=this.Le.nt(),d=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((a,l)=>{const d=this.Ye(l);if(d){if(a.current&&cd(d.target)){const f=new te(d.target.path);this.st(f).has(l)||this.ot(l,f)||this.We(l,f,Ze.newNoDocument(f,e))}a.be&&(t.set(l,a.ve()),a.Ce())}});let n=Ae();this.Qe.forEach((a,l)=>{let d=!0;l.forEachWhile(f=>{const m=this.Ye(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(n=n.add(a))}),this.ke.forEach((a,l)=>l.setReadTime(e));const s=new uc(e,t,this.Ke,this.ke,n);return this.ke=kn(),this.qe=zh(),this.Qe=zh(),this.Ke=new Je(Se),s}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new mw,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new $e(Se),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new $e(Se),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new mw),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function zh(){return new Je(te.comparator)}function gw(){return new Je(te.comparator)}const R1={asc:"ASCENDING",desc:"DESCENDING"},P1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k1={and:"AND",or:"OR"};class C1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _m(r,e){return r.useProto3Json||rc(e)?e:{value:e}}function $a(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function b1(r,e){return $a(r,e.toTimestamp())}function It(r){return ce(!!r),pe.fromTimestamp(function(t){const n=hi(t);return new ot(n.seconds,n.nanos)}(r))}function ag(r,e){return ym(r,e).canonicalString()}function ym(r,e){const t=function(s){return new De(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function HE(r){const e=De.fromString(r);return ce(iT(e)),e}function Wl(r,e){return ag(r.databaseId,e.path)}function xr(r,e){const t=HE(e);if(t.get(1)!==r.databaseId.projectId)throw new K(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new K(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new te(YE(t))}function QE(r,e){return ag(r.databaseId,e)}function JE(r){const e=HE(r);return e.length===4?De.emptyPath():YE(e)}function vm(r){return new De(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function YE(r){return ce(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function _w(r,e,t){return{name:Wl(r,e),fields:t.value.mapValue.fields}}function XE(r,e,t){const n=xr(r,e.name),s=It(e.updateTime),a=e.createTime?It(e.createTime):pe.min(),l=new Ht({mapValue:{fields:e.fields}}),d=Ze.newFoundDocument(n,s,a,l);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function D1(r,e){return"found"in e?function(n,s){ce(!!s.found),s.found.name,s.found.updateTime;const a=xr(n,s.found.name),l=It(s.found.updateTime),d=s.found.createTime?It(s.found.createTime):pe.min(),f=new Ht({mapValue:{fields:s.found.fields}});return Ze.newFoundDocument(a,l,d,f)}(r,e):"missing"in e?function(n,s){ce(!!s.missing),ce(!!s.readTime);const a=xr(n,s.missing),l=It(s.readTime);return Ze.newNoDocument(a,l)}(r,e):se()}function N1(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,v){return m.useProto3Json?(ce(v===void 0||typeof v=="string"),pt.fromBase64String(v||"")):(ce(v===void 0||v instanceof Buffer||v instanceof Uint8Array),pt.fromUint8Array(v||new Uint8Array))}(r,e.targetChange.resumeToken),l=e.targetChange.cause,d=l&&function(m){const v=m.code===void 0?z.UNKNOWN:qE(m.code);return new K(v,m.message||"")}(l);t=new GE(n,s,a,d||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=xr(r,n.document.name),a=It(n.document.updateTime),l=n.document.createTime?It(n.document.createTime):pe.min(),d=new Ht({mapValue:{fields:n.document.fields}}),f=Ze.newFoundDocument(s,a,l,d),m=n.targetIds||[],v=n.removedTargetIds||[];t=new ed(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=xr(r,n.document),a=n.readTime?It(n.readTime):pe.min(),l=Ze.newNoDocument(s,a),d=n.removedTargetIds||[];t=new ed([],d,l.key,l)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=xr(r,n.document),a=n.removedTargetIds||[];t=new ed([],a,s,null)}else{if(!("filter"in e))return se();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:a}=n,l=new T1(s,a),d=n.targetId;t=new WE(d,l)}}return t}function Gl(r,e){let t;if(e instanceof iu)t={update:_w(r,e.key,e.value)};else if(e instanceof su)t={delete:Wl(r,e.key)};else if(e instanceof _i)t={update:_w(r,e.key,e.data),updateMask:F1(e.fieldMask)};else{if(!(e instanceof ng))return se();t={verify:Wl(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(a,l){const d=l.transform;if(d instanceof ja)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof co)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ho)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof qa)return{fieldPath:l.field.canonicalString(),increment:d.Pe};throw se()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:b1(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:se()}(r,e.precondition)),t}function wm(r,e){const t=e.currentDocument?function(a){return a.updateTime!==void 0?st.updateTime(It(a.updateTime)):a.exists!==void 0?st.exists(a.exists):st.none()}(e.currentDocument):st.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(l,d){let f=null;if("setToServerValue"in d)ce(d.setToServerValue==="REQUEST_TIME"),f=new ja;else if("appendMissingElements"in d){const v=d.appendMissingElements.values||[];f=new co(v)}else if("removeAllFromArray"in d){const v=d.removeAllFromArray.values||[];f=new ho(v)}else"increment"in d?f=new qa(l,d.increment):se();const m=it.fromServerFormat(d.fieldPath);return new ac(m,f)}(r,s)):[];if(e.update){e.update.name;const s=xr(r,e.update.name),a=new Ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const l=function(f){const m=f.fieldPaths||[];return new Pn(m.map(v=>it.fromServerFormat(v)))}(e.updateMask);return new _i(s,a,l,t,n)}return new iu(s,a,t,n)}if(e.delete){const s=xr(r,e.delete);return new su(s,t)}if(e.verify){const s=xr(r,e.verify);return new ng(s,t)}return se()}function V1(r,e){return r&&r.length>0?(ce(e!==void 0),r.map(t=>function(s,a){let l=s.updateTime?It(s.updateTime):It(a);return l.isEqual(pe.min())&&(l=It(a)),new w1(l,s.transformResults||[])}(t,e))):[]}function ZE(r,e){return{documents:[QE(r,e.path)]}}function eT(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=QE(r,s);const a=function(m){if(m.length!==0)return rT(qe.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const l=function(m){if(m.length!==0)return m.map(v=>function(T){return{field:Aa(T.field),direction:O1(T.dir)}}(v))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const d=_m(r,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ct:t,parent:s}}function tT(r){let e=JE(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){ce(n===1);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(w){const T=nT(w);return T instanceof qe&&Xm(T)?T.getFilters():[T]}(t.where));let l=[];t.orderBy&&(l=function(w){return w.map(T=>function(W){return new $l(Ra(W.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(w){let T;return T=typeof w=="object"?w.value:w,rc(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(w){const T=!!w.before,V=w.values||[];return new cs(V,T)}(t.startAt));let m=null;return t.endAt&&(m=function(w){const T=!w.before,V=w.values||[];return new cs(V,T)}(t.endAt)),PE(e,s,l,a,d,"F",f,m)}function x1(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nT(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ra(t.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ra(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ra(t.unaryFilter.field);return Ne.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ra(t.unaryFilter.field);return Ne.create(l,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(r):r.fieldFilter!==void 0?function(t){return Ne.create(Ra(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return qe.create(t.compositeFilter.filters.map(n=>nT(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se()}}(t.compositeFilter.op))}(r):se()}function O1(r){return R1[r]}function L1(r){return P1[r]}function M1(r){return k1[r]}function Aa(r){return{fieldPath:r.canonicalString()}}function Ra(r){return it.fromServerFormat(r.fieldPath)}function rT(r){return r instanceof Ne?function(t){if(t.op==="=="){if(tw(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NAN"}};if(ew(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tw(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NOT_NAN"}};if(ew(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Aa(t.field),op:L1(t.op),value:t.value}}}(r):r instanceof qe?function(t){const n=t.getFilters().map(s=>rT(s));return n.length===1?n[0]:{compositeFilter:{op:M1(t.op),filters:n}}}(r):se()}function F1(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function iT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n,s,a=pe.min(),l=pe.min(),d=pt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.ht=e}}function U1(r,e){let t;if(e.document)t=XE(r.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=te.fromSegments(e.noDocument.path),s=po(e.noDocument.readTime);t=Ze.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return se();{const n=te.fromSegments(e.unknownDocument.path),s=po(e.unknownDocument.version);t=Ze.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const a=new ot(s[0],s[1]);return pe.fromTimestamp(a)}(e.readTime)),t}function yw(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:fd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(a,l){return{name:Wl(a,l.key),fields:l.data.value.mapValue.fields,updateTime:$a(a,l.version.toTimestamp()),createTime:$a(a,l.createTime.toTimestamp())}}(r.ht,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:fo(e.version)};else{if(!e.isUnknownDocument())return se();n.unknownDocument={path:t.path.toArray(),version:fo(e.version)}}return n}function fd(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function fo(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function po(r){const e=new ot(r.seconds,r.nanoseconds);return pe.fromTimestamp(e)}function Xs(r,e){const t=(e.baseMutations||[]).map(a=>wm(r.ht,a));for(let a=0;a<e.mutations.length-1;++a){const l=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const d=e.mutations[a+1];l.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const n=e.mutations.map(a=>wm(r.ht,a)),s=ot.fromMillis(e.localWriteTimeMs);return new rg(e.batchId,s,t,n)}function Il(r){const e=po(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?po(r.lastLimboFreeSnapshotVersion):pe.min();let n;return n=function(a){return a.documents!==void 0}(r.query)?function(a){return ce(a.documents.length===1),mn(ru(JE(a.documents[0])))}(r.query):function(a){return mn(tT(a))}(r.query),new si(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,pt.fromBase64String(r.resumeToken))}function oT(r,e){const t=fo(e.snapshotVersion),n=fo(e.lastLimboFreeSnapshotVersion);let s;s=cd(e.target)?ZE(r.ht,e.target):eT(r.ht,e.target).ct;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:lo(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function ug(r){const e=tT({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?dd(e,e.limit,"L"):e}function Kp(r,e){return new sg(e.largestBatchId,wm(r.ht,e.overlayMutation))}function vw(r,e){const t=e.path.lastSegment();return[r,on(e.path.popLast()),t]}function ww(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:fo(n.readTime),documentKey:on(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{getBundleMetadata(e,t){return Iw(e).get(t).next(n=>{if(n)return function(a){return{id:a.bundleId,createTime:po(a.createTime),version:a.version}}(n)})}saveBundleMetadata(e,t){return Iw(e).put(function(s){return{bundleId:s.id,createTime:fo(It(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ew(e).get(t).next(n=>{if(n)return function(a){return{name:a.name,query:ug(a.bundledQuery),readTime:po(a.readTime)}}(n)})}saveNamedQuery(e,t){return Ew(e).put(function(s){return{name:s.name,readTime:fo(It(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Iw(r){return Vt(r,"bundles")}function Ew(r){return Vt(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const n=t.uid||"";return new Ld(e,n)}getOverlay(e,t){return ul(e).get(vw(this.userId,t)).next(n=>n?Kp(this.serializer,n):null)}getOverlays(e,t){const n=Dr();return L.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&n.set(s,a)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((a,l)=>{const d=new sg(t,l);s.push(this.Tt(e,d))}),L.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(l=>s.add(on(l.getCollectionPath())));const a=[];return s.forEach(l=>{const d=IDBKeyRange.bound([this.userId,l,n],[this.userId,l,n+1],!1,!0);a.push(ul(e).j("collectionPathOverlayIndex",d))}),L.waitFor(a)}getOverlaysForCollection(e,t,n){const s=Dr(),a=on(t),l=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,Number.POSITIVE_INFINITY],!0);return ul(e).U("collectionPathOverlayIndex",l).next(d=>{for(const f of d){const m=Kp(this.serializer,f);s.set(m.getKey(),m)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const a=Dr();let l;const d=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ul(e).J({index:"collectionGroupOverlayIndex",range:d},(f,m,v)=>{const w=Kp(this.serializer,m);a.size()<s||w.largestBatchId===l?(a.set(w.getKey(),w),l=w.largestBatchId):v.done()}).next(()=>a)}Tt(e,t){return ul(e).put(function(s,a,l){const[d,f,m]=vw(a,l.mutation.key);return{userId:a,collectionPath:f,documentId:m,collectionGroup:l.mutation.key.getCollectionGroup(),largestBatchId:l.largestBatchId,overlayMutation:Gl(s.ht,l.mutation)}}(this.serializer,this.userId,t))}}function ul(r){return Vt(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{It(e){return Vt(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?pt.fromUint8Array(n):pt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(rt(e.integerValue));else if("doubleValue"in e){const n=rt(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),Bl(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),typeof n=="string"&&(n=hi(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(di(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?_E(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Vd(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):se()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const n=e.fields||{};this.Rt(t,55);for(const s of Object.keys(n))this.gt(s,t),this.dt(n[s],t)}bt(e,t){var n,s;const a=e.fields||{};this.Rt(t,53);const l="value",d=((s=(n=a[l].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Rt(t,15),t.Vt(rt(d)),this.gt(l,t),this.dt(a[l],t)}vt(e,t){const n=e.values||[];this.Rt(t,50);for(const s of n)this.dt(s,t)}St(e,t){this.Rt(t,37),te.fromName(e).path.forEach(n=>{this.Rt(t,60),this.Ct(n,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}Zs.Ft=new Zs;function j1(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Tw(r){const e=64-function(n){let s=0;for(let a=0;a<8;++a){const l=j1(255&n[a]);if(s+=l,l!==8)break}return s}(r);return Math.ceil(e/8)}class q1{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Lt(n.value),n=t.next();this.Bt()}kt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const s=t.codePointAt(0);this.xt(240|s>>>18),this.xt(128|63&s>>>12),this.xt(128|63&s>>>6),this.xt(128|63&s)}}this.Ot()}qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Lt(n);else if(n<2048)this.Lt(960|n>>>6),this.Lt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Lt(480|n>>>12),this.Lt(128|63&n>>>6),this.Lt(128|63&n);else{const s=t.codePointAt(0);this.Lt(240|s>>>18),this.Lt(128|63&s>>>12),this.Lt(128|63&s>>>6),this.Lt(128|63&s)}}this.Bt()}Qt(e){const t=this.Kt(e),n=Tw(t);this.$t(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ut(e){const t=this.Kt(e),n=Tw(t);this.$t(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(a){const l=new DataView(new ArrayBuffer(8));return l.setFloat64(0,a,!1),new Uint8Array(l.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Lt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class $1{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class W1{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class ll{constructor(){this.Jt=new q1,this.Yt=new $1(this.Jt),this.Zt=new W1(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new eo(this.indexId,this.documentKey,this.arrayValue,n)}}function Gi(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Sw(r.arrayValue,e.arrayValue),t!==0?t:(t=Sw(r.directionalValue,e.directionalValue),t!==0?t:te.comparator(r.documentKey,e.documentKey)))}function Sw(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.tn=new $e((t,n)=>it.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const n=t;n.isInequality()?this.tn=this.tn.add(n):this.rn.push(n)}}get sn(){return this.tn.size>1}on(e){if(ce(e.collectionGroup===this.collectionId),this.sn)return!1;const t=lm(e);if(t!==void 0&&!this._n(t))return!1;const n=Js(e);let s=new Set,a=0,l=0;for(;a<n.length&&this._n(n[a]);++a)s=s.add(n[a].fieldPath.canonicalString());if(a===n.length)return!0;if(this.tn.size>0){const d=this.tn.getIterator().getNext();if(!s.has(d.field.canonicalString())){const f=n[a];if(!this.an(d,f)||!this.un(this.nn[l++],f))return!1}++a}for(;a<n.length;++a){const d=n[a];if(l>=this.nn.length||!this.un(this.nn[l++],d))return!1}return!0}cn(){if(this.sn)return null;let e=new $e(it.comparator);const t=[];for(const n of this.rn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Hh(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Hh(n.field,0))}for(const n of this.nn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Hh(n.field,n.dir==="asc"?0:1)));return new ld(ld.UNKNOWN_ID,this.collectionId,t,Ul.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r){var e,t;if(ce(r instanceof Ne||r instanceof qe),r instanceof Ne){if(r instanceof RE){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(a=>Ne.create(r.field,"==",a)))||[];return qe.create(s,"or")}return r}const n=r.filters.map(s=>aT(s));return qe.create(n,r.op)}function G1(r){if(r.getFilters().length===0)return[];const e=Tm(aT(r));return ce(uT(e)),Im(e)||Em(e)?[e]:e.getFilters()}function Im(r){return r instanceof Ne}function Em(r){return r instanceof qe&&Xm(r)}function uT(r){return Im(r)||Em(r)||function(t){if(t instanceof qe&&fm(t)){for(const n of t.getFilters())if(!Im(n)&&!Em(n))return!1;return!0}return!1}(r)}function Tm(r){if(ce(r instanceof Ne||r instanceof qe),r instanceof Ne)return r;if(r.filters.length===1)return Tm(r.filters[0]);const e=r.filters.map(n=>Tm(n));let t=qe.create(e,r.op);return t=pd(t),uT(t)?t:(ce(t instanceof qe),ce(za(t)),ce(t.filters.length>1),t.filters.reduce((n,s)=>lg(n,s)))}function lg(r,e){let t;return ce(r instanceof Ne||r instanceof qe),ce(e instanceof Ne||e instanceof qe),t=r instanceof Ne?e instanceof Ne?function(s,a){return qe.create([s,a],"and")}(r,e):Rw(r,e):e instanceof Ne?Rw(e,r):function(s,a){if(ce(s.filters.length>0&&a.filters.length>0),za(s)&&za(a))return TE(s,a.getFilters());const l=fm(s)?s:a,d=fm(s)?a:s,f=l.filters.map(m=>lg(m,d));return qe.create(f,"or")}(r,e),pd(t)}function Rw(r,e){if(za(e))return TE(e,r.getFilters());{const t=e.filters.map(n=>lg(r,n));return qe.create(t,"or")}}function pd(r){if(ce(r instanceof Ne||r instanceof qe),r instanceof Ne)return r;const e=r.getFilters();if(e.length===1)return pd(e[0]);if(IE(r))return r;const t=e.map(s=>pd(s)),n=[];return t.forEach(s=>{s instanceof Ne?n.push(s):s instanceof qe&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:qe.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.ln=new cg}addToCollectionParentIndex(e,t){return this.ln.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Fn.min())}updateCollectionGroup(e,t,n){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class cg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new $e(De.comparator),a=!s.has(n);return this.index[t]=s.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new $e(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Uint8Array(0);class H1{constructor(e,t){this.databaseId=t,this.hn=new cg,this.Pn=new gi(n=>lo(n),(n,s)=>ic(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const a={collectionId:n,parent:on(s)};return Pw(e).put(a)}return L.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[iE(t),""],!1,!0);return Pw(e).U(s).next(a=>{for(const l of a){if(l.collectionId!==t)break;n.push(br(l.parent))}return n})}addFieldIndex(e,t){const n=cl(e),s=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(f=>[f.fieldPath.canonicalString(),f.kind])}}(t);delete s.indexId;const a=n.add(s);if(t.indexState){const l=wa(e);return a.next(d=>{l.put(ww(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return a.next()}deleteFieldIndex(e,t){const n=cl(e),s=wa(e),a=va(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=cl(e),n=va(e),s=wa(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return L.forEach(this.Tn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const a=new Aw(n).cn();if(a!=null)return this.addFieldIndex(e,a)}}))}getDocumentsMatchingTarget(e,t){const n=va(e);let s=!0;const a=new Map;return L.forEach(this.Tn(t),l=>this.In(e,l).next(d=>{s&&(s=!!d),a.set(l,d)})).next(()=>{if(s){let l=Ae();const d=[];return L.forEach(a,(f,m)=>{Q("IndexedDbIndexManager",`Using index ${function(ae){return`id=${ae.indexId}|cg=${ae.collectionGroup}|f=${ae.fields.map(Ee=>`${Ee.fieldPath}:${Ee.kind}`).join(",")}`}(f)} to execute ${lo(t)}`);const v=function(ae,Ee){const Re=lm(Ee);if(Re===void 0)return null;for(const _e of hd(ae,Re.fieldPath))switch(_e.op){case"array-contains-any":return _e.value.arrayValue.values||[];case"array-contains":return[_e.value]}return null}(m,f),w=function(ae,Ee){const Re=new Map;for(const _e of Js(Ee))for(const C of hd(ae,_e.fieldPath))switch(C.op){case"==":case"in":Re.set(_e.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return Re.set(_e.fieldPath.canonicalString(),C.value),Array.from(Re.values())}return null}(m,f),T=function(ae,Ee){const Re=[];let _e=!0;for(const C of Js(Ee)){const S=C.kind===0?ow(ae,C.fieldPath,ae.startAt):aw(ae,C.fieldPath,ae.startAt);Re.push(S.value),_e&&(_e=S.inclusive)}return new cs(Re,_e)}(m,f),V=function(ae,Ee){const Re=[];let _e=!0;for(const C of Js(Ee)){const S=C.kind===0?aw(ae,C.fieldPath,ae.endAt):ow(ae,C.fieldPath,ae.endAt);Re.push(S.value),_e&&(_e=S.inclusive)}return new cs(Re,_e)}(m,f),W=this.En(f,m,T),$=this.En(f,m,V),q=this.dn(f,m,w),fe=this.An(f.indexId,v,W,T.inclusive,$,V.inclusive,q);return L.forEach(fe,me=>n.G(me,t.limit).next(ae=>{ae.forEach(Ee=>{const Re=te.fromSegments(Ee.documentKey);l.has(Re)||(l=l.add(Re),d.push(Re))})}))}).next(()=>d)}return L.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=G1(qe.create(e.filters,"and")).map(n=>mm(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,n,s,a,l,d){const f=(t!=null?t.length:1)*Math.max(n.length,a.length),m=f/(t!=null?t.length:1),v=[];for(let w=0;w<f;++w){const T=t?this.Rn(t[w/m]):jh,V=this.Vn(e,T,n[w%m],s),W=this.mn(e,T,a[w%m],l),$=d.map(q=>this.Vn(e,T,q,!0));v.push(...this.createRange(V,W,$))}return v}Vn(e,t,n,s){const a=new eo(e,te.empty(),t,n);return s?a:a.en()}mn(e,t,n,s){const a=new eo(e,te.empty(),t,n);return s?a.en():a}In(e,t){const n=new Aw(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(a=>{let l=null;for(const d of a)n.on(d)&&(!l||d.fields.length>l.fields.length)&&(l=d);return l})}getIndexType(e,t){let n=2;const s=this.Tn(t);return L.forEach(s,a=>this.In(e,a).next(l=>{l?n!==0&&l.fields.length<function(f){let m=new $e(it.comparator),v=!1;for(const w of f.filters)for(const T of w.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?v=!0:m=m.add(T.field));for(const w of f.orderBy)w.field.isKeyField()||(m=m.add(w.field));return m.size+(v?1:0)}(a)&&(n=1):n=0})).next(()=>function(l){return l.limit!==null}(t)&&s.length>1&&n===2?1:n)}fn(e,t){const n=new ll;for(const s of Js(e)){const a=t.data.field(s.fieldPath);if(a==null)return null;const l=n.Xt(s.kind);Zs.Ft.Et(a,l)}return n.Ht()}Rn(e){const t=new ll;return Zs.Ft.Et(e,t.Xt(0)),t.Ht()}gn(e,t){const n=new ll;return Zs.Ft.Et(uo(this.databaseId,t),n.Xt(function(a){const l=Js(a);return l.length===0?0:l[l.length-1].kind}(e))),n.Ht()}dn(e,t,n){if(n===null)return[];let s=[];s.push(new ll);let a=0;for(const l of Js(e)){const d=n[a++];for(const f of s)if(this.pn(t,l.fieldPath)&&ql(d))s=this.yn(s,l,d);else{const m=f.Xt(l.kind);Zs.Ft.Et(d,m)}}return this.wn(s)}En(e,t,n){return this.dn(e,t,n.position)}wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ht();return t}yn(e,t,n){const s=[...e],a=[];for(const l of n.arrayValue.values||[])for(const d of s){const f=new ll;f.seed(d.Ht()),Zs.Ft.Et(l,f.Xt(t.kind)),a.push(f)}return a}pn(e,t){return!!e.filters.find(n=>n instanceof Ne&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=cl(e),s=wa(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(a=>{const l=[];return L.forEach(a,d=>s.get([d.indexId,this.uid]).next(f=>{l.push(function(v,w){const T=w?new Ul(w.sequenceNumber,new Fn(po(w.readTime),new te(br(w.documentKey)),w.largestBatchId)):Ul.empty(),V=v.fields.map(([W,$])=>new Hh(it.fromServerFormat(W),$));return new ld(v.indexId,v.collectionGroup,V,T)}(d,f))})).next(()=>l)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const a=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return a!==0?a:Se(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=cl(e),a=wa(e);return this.Sn(e).next(l=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(d=>L.forEach(d,f=>a.put(ww(f.indexId,this.uid,l,n)))))}updateIndexEntries(e,t){const n=new Map;return L.forEach(t,(s,a)=>{const l=n.get(s.collectionGroup);return(l?L.resolve(l):this.getFieldIndexes(e,s.collectionGroup)).next(d=>(n.set(s.collectionGroup,d),L.forEach(d,f=>this.bn(e,s,f).next(m=>{const v=this.Dn(a,f);return m.isEqual(v)?L.resolve():this.vn(e,a,f,m,v)}))))})}Cn(e,t,n,s){return va(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,n,s){return va(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}bn(e,t,n){const s=va(e);let a=new $e(Gi);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(l,d)=>{a=a.add(new eo(n.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>a)}Dn(e,t){let n=new $e(Gi);const s=this.fn(t,e);if(s==null)return n;const a=lm(t);if(a!=null){const l=e.data.field(a.fieldPath);if(ql(l))for(const d of l.arrayValue.values||[])n=n.add(new eo(t.indexId,e.key,this.Rn(d),s))}else n=n.add(new eo(t.indexId,e.key,jh,s));return n}vn(e,t,n,s,a){Q("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const l=[];return function(f,m,v,w,T){const V=f.getIterator(),W=m.getIterator();let $=ya(V),q=ya(W);for(;$||q;){let fe=!1,me=!1;if($&&q){const ae=v($,q);ae<0?me=!0:ae>0&&(fe=!0)}else $!=null?me=!0:fe=!0;fe?(w(q),q=ya(W)):me?(T($),$=ya(V)):($=ya(V),q=ya(W))}}(s,a,Gi,d=>{l.push(this.Cn(e,t,n,d))},d=>{l.push(this.Fn(e,t,n,d))}),L.waitFor(l)}Sn(e){let t=1;return wa(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,a)=>{a.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((l,d)=>Gi(l,d)).filter((l,d,f)=>!d||Gi(l,f[d-1])!==0);const s=[];s.push(e);for(const l of n){const d=Gi(l,e),f=Gi(l,t);if(d===0)s[0]=e.en();else if(d>0&&f<0)s.push(l),s.push(l.en());else if(f>0)break}s.push(t);const a=[];for(let l=0;l<s.length;l+=2){if(this.Mn(s[l],s[l+1]))return[];const d=[s[l].indexId,this.uid,s[l].arrayValue,s[l].directionalValue,jh,[]],f=[s[l+1].indexId,this.uid,s[l+1].arrayValue,s[l+1].directionalValue,jh,[]];a.push(IDBKeyRange.bound(d,f))}return a}Mn(e,t){return Gi(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kw)}getMinOffset(e,t){return L.mapArray(this.Tn(t),n=>this.In(e,n).next(s=>s||se())).next(kw)}}function Pw(r){return Vt(r,"collectionParents")}function va(r){return Vt(r,"indexEntries")}function cl(r){return Vt(r,"indexConfiguration")}function wa(r){return Vt(r,"indexState")}function kw(r){ce(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Qm(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Fn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),a=[],l=IDBKeyRange.only(t.batchId);let d=0;const f=n.J({range:l},(v,w,T)=>(d++,T.delete()));a.push(f.next(()=>{ce(d===1)}));const m=[];for(const v of t.mutations){const w=hE(e,v.key.path,t.batchId);a.push(s.delete(w)),m.push(v.key)}return L.waitFor(a).next(()=>m)}function md(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw se();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(41943040,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);class Md{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.xn={}}static Pt(e,t,n,s){ce(e.uid!=="");const a=e.isAuthenticated()?e.uid:"";return new Md(a,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ki(e).J({index:"userMutationsIndex",range:n},(s,a,l)=>{t=!1,l.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const a=Pa(e),l=Ki(e);return l.add({}).next(d=>{ce(typeof d=="number");const f=new rg(d,t,n,s),m=function(V,W,$){const q=$.baseMutations.map(me=>Gl(V.ht,me)),fe=$.mutations.map(me=>Gl(V.ht,me));return{userId:W,batchId:$.batchId,localWriteTimeMs:$.localWriteTime.toMillis(),baseMutations:q,mutations:fe}}(this.serializer,this.userId,f),v=[];let w=new $e((T,V)=>Se(T.canonicalString(),V.canonicalString()));for(const T of s){const V=hE(this.userId,T.key.path,d);w=w.add(T.key.path.popLast()),v.push(l.put(m)),v.push(a.put(V,xP))}return w.forEach(T=>{v.push(this.indexManager.addToCollectionParentIndex(e,T))}),e.addOnCommittedListener(()=>{this.xn[d]=f.keys()}),L.waitFor(v).next(()=>f)})}lookupMutationBatch(e,t){return Ki(e).get(t).next(n=>n?(ce(n.userId===this.userId),Xs(this.serializer,n)):null)}On(e,t){return this.xn[t]?L.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let a=null;return Ki(e).J({index:"userMutationsIndex",range:s},(l,d,f)=>{d.userId===this.userId&&(ce(d.batchId>=n),a=Xs(this.serializer,d)),f.done()}).next(()=>a)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ki(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,a,l)=>{n=a.batchId,l.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ki(e).U("userMutationsIndex",t).next(n=>n.map(s=>Xs(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Qh(this.userId,t.path),s=IDBKeyRange.lowerBound(n),a=[];return Pa(e).J({range:s},(l,d,f)=>{const[m,v,w]=l,T=br(v);if(m===this.userId&&t.path.isEqual(T))return Ki(e).get(w).next(V=>{if(!V)throw se();ce(V.userId===this.userId),a.push(Xs(this.serializer,V))});f.done()}).next(()=>a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $e(Se);const s=[];return t.forEach(a=>{const l=Qh(this.userId,a.path),d=IDBKeyRange.lowerBound(l),f=Pa(e).J({range:d},(m,v,w)=>{const[T,V,W]=m,$=br(V);T===this.userId&&a.path.isEqual($)?n=n.add(W):w.done()});s.push(f)}),L.waitFor(s).next(()=>this.Nn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,a=Qh(this.userId,n),l=IDBKeyRange.lowerBound(a);let d=new $e(Se);return Pa(e).J({range:l},(f,m,v)=>{const[w,T,V]=f,W=br(T);w===this.userId&&n.isPrefixOf(W)?W.length===s&&(d=d.add(V)):v.done()}).next(()=>this.Nn(e,d))}Nn(e,t){const n=[],s=[];return t.forEach(a=>{s.push(Ki(e).get(a).next(l=>{if(l===null)throw se();ce(l.userId===this.userId),n.push(Xs(this.serializer,l))}))}),L.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return lT(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Ln(t.batchId)}),L.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Ln(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return L.resolve();const n=IDBKeyRange.lowerBound(function(l){return[l]}(this.userId)),s=[];return Pa(e).J({range:n},(a,l,d)=>{if(a[0]===this.userId){const f=br(a[1]);s.push(f)}else d.done()}).next(()=>{ce(s.length===0)})})}containsKey(e,t){return cT(e,this.userId,t)}Bn(e){return hT(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function cT(r,e,t){const n=Qh(e,t.path),s=n[1],a=IDBKeyRange.lowerBound(n);let l=!1;return Pa(r).J({range:a,H:!0},(d,f,m)=>{const[v,w,T]=d;v===e&&w===s&&(l=!0),m.done()}).next(()=>l)}function Ki(r){return Vt(r,"mutations")}function Pa(r){return Vt(r,"documentMutations")}function hT(r){return Vt(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new mo(0)}static Qn(){return new mo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const n=new mo(t.highestTargetId);return t.highestTargetId=n.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>pe.fromTimestamp(new ot(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Kn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.$n(e,s)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(n=>(n.targetCount+=1,this.Wn(t,n),this.$n(e,n))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ia(e).delete(t.targetId)).next(()=>this.Kn(e)).next(n=>(ce(n.targetCount>0),n.targetCount-=1,this.$n(e,n)))}removeTargets(e,t,n){let s=0;const a=[];return Ia(e).J((l,d)=>{const f=Il(d);f.sequenceNumber<=t&&n.get(f.targetId)===null&&(s++,a.push(this.removeTargetData(e,f)))}).next(()=>L.waitFor(a)).next(()=>s)}forEachTarget(e,t){return Ia(e).J((n,s)=>{const a=Il(s);t(a)})}Kn(e){return bw(e).get("targetGlobalKey").next(t=>(ce(t!==null),t))}$n(e,t){return bw(e).put("targetGlobalKey",t)}Un(e,t){return Ia(e).put(oT(this.serializer,t))}Wn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=lo(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let a=null;return Ia(e).J({range:s,index:"queryTargetsIndex"},(l,d,f)=>{const m=Il(d);ic(t,m.target)&&(a=m,f.done())}).next(()=>a)}addMatchingKeys(e,t,n){const s=[],a=Ji(e);return t.forEach(l=>{const d=on(l.path);s.push(a.put({targetId:n,path:d})),s.push(this.referenceDelegate.addReference(e,n,l))}),L.waitFor(s)}removeMatchingKeys(e,t,n){const s=Ji(e);return L.forEach(t,a=>{const l=on(a.path);return L.waitFor([s.delete([n,l]),this.referenceDelegate.removeReference(e,n,a)])})}removeMatchingKeysForTargetId(e,t){const n=Ji(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Ji(e);let a=Ae();return s.J({range:n,H:!0},(l,d,f)=>{const m=br(l[1]),v=new te(m);a=a.add(v)}).next(()=>a)}containsKey(e,t){const n=on(t.path),s=IDBKeyRange.bound([n],[iE(n)],!1,!0);let a=0;return Ji(e).J({index:"documentTargetsIndex",H:!0,range:s},([l,d],f,m)=>{l!==0&&(a++,m.done())}).next(()=>a>0)}ut(e,t){return Ia(e).get(t).next(n=>n?Il(n):null)}}function Ia(r){return Vt(r,"targets")}function bw(r){return Vt(r,"targetGlobal")}function Ji(r){return Vt(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw([r,e],[t,n]){const s=Se(r,t);return s===0?Se(e,n):s}class J1{constructor(e){this.Gn=e,this.buffer=new $e(Dw),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Dw(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dT{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Q("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gs(t)?Q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ms(t)}await this.Yn(3e5)})}}class Y1{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Rn.oe);const n=new J1(t);return this.Zn.forEachTarget(e,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Cw)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cw):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,s,a,l,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,l=Date.now(),this.nthSequenceNumber(e,s))).next(w=>(n=w,d=Date.now(),this.removeTargets(e,n,t))).next(w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,n))).next(w=>(m=Date.now(),Ta()<=be.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${s} in `+(d-l)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function fT(r,e){return new Y1(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,t){this.db=e,this.garbageCollector=fT(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(n,s)=>t(s))}addReference(e,t,n){return qh(e,n)}removeReference(e,t,n){return qh(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return qh(e,t)}ir(e,t){return function(s,a){let l=!1;return hT(s).Y(d=>cT(s,d,a).next(f=>(f&&(l=!0),L.resolve(!f)))).next(()=>l)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let a=0;return this.rr(e,(l,d)=>{if(d<=t){const f=this.ir(e,l).next(m=>{if(!m)return a++,n.getEntry(e,l).next(()=>(n.removeEntry(l,pe.min()),Ji(e).delete(function(w){return[0,on(w.path)]}(l))))});s.push(f)}}).next(()=>L.waitFor(s)).next(()=>n.apply(e)).next(()=>a)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return qh(e,t)}rr(e,t){const n=Ji(e);let s,a=Rn.oe;return n.J({index:"documentTargetsIndex"},([l,d],{path:f,sequenceNumber:m})=>{l===0?(a!==Rn.oe&&t(new te(br(s)),a),a=m,s=f):a=Rn.oe}).next(()=>{a!==Rn.oe&&t(new te(br(s)),a)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function qh(r,e){return Ji(r).put(function(n,s){return{targetId:0,path:on(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.changes=new gi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?L.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Hs(e).put(n)}removeEntry(e,t,n){return Hs(e).delete(function(a,l){const d=a.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],fd(l),d[d.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.sr(e,n)))}getEntry(e,t){let n=Ze.newInvalidDocument(t);return Hs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hl(t))},(s,a)=>{n=this._r(t,a)}).next(()=>n)}ar(e,t){let n={size:0,document:Ze.newInvalidDocument(t)};return Hs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(hl(t))},(s,a)=>{n={document:this._r(t,a),size:md(a)}}).next(()=>n)}getEntries(e,t){let n=kn();return this.ur(e,t,(s,a)=>{const l=this._r(s,a);n=n.insert(s,l)}).next(()=>n)}cr(e,t){let n=kn(),s=new Je(te.comparator);return this.ur(e,t,(a,l)=>{const d=this._r(a,l);n=n.insert(a,d),s=s.insert(a,md(l))}).next(()=>({documents:n,lr:s}))}ur(e,t,n){if(t.isEmpty())return L.resolve();let s=new $e(xw);t.forEach(f=>s=s.add(f));const a=IDBKeyRange.bound(hl(s.first()),hl(s.last())),l=s.getIterator();let d=l.getNext();return Hs(e).J({index:"documentKeyIndex",range:a},(f,m,v)=>{const w=te.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&xw(d,w)<0;)n(d,null),d=l.getNext();d&&d.isEqual(w)&&(n(d,m),d=l.hasNext()?l.getNext():null),d?v.$(hl(d)):v.done()}).next(()=>{for(;d;)n(d,null),d=l.hasNext()?l.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,a){const l=t.path,d=[l.popLast().toArray(),l.lastSegment(),fd(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],f=[l.popLast().toArray(),l.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hs(e).U(IDBKeyRange.bound(d,f,!0)).next(m=>{a==null||a.incrementDocumentReadCount(m.length);let v=kn();for(const w of m){const T=this._r(te.fromSegments(w.prefixPath.concat(w.collectionGroup,w.documentId)),w);T.isFoundDocument()&&(oc(t,T)||s.has(T.key))&&(v=v.insert(T.key,T))}return v})}getAllFromCollectionGroup(e,t,n,s){let a=kn();const l=Vw(t,n),d=Vw(t,Fn.max());return Hs(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(l,d,!0)},(f,m,v)=>{const w=this._r(te.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);a=a.insert(w.key,w),a.size===s&&v.done()}).next(()=>a)}newChangeBuffer(e){return new ek(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Nw(e).get("remoteDocumentGlobalKey").next(t=>(ce(!!t),t))}sr(e,t){return Nw(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const n=U1(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(pe.min())))return n}return Ze.newInvalidDocument(e)}}function mT(r){return new Z1(r)}class ek extends pT{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new gi(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new $e((a,l)=>Se(a.canonicalString(),l.canonicalString()));return this.changes.forEach((a,l)=>{const d=this.Pr.get(a);if(t.push(this.hr.removeEntry(e,a,d.readTime)),l.isValidDocument()){const f=yw(this.hr.serializer,l);s=s.add(a.path.popLast());const m=md(f);n+=m-d.size,t.push(this.hr.addEntry(e,a,f))}else if(n-=d.size,this.trackRemovals){const f=yw(this.hr.serializer,l.convertToNoDocument(pe.min()));t.push(this.hr.addEntry(e,a,f))}}),s.forEach(a=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,a))}),t.push(this.hr.updateMetadata(e,n)),L.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(n=>(this.Pr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:n,lr:s})=>(s.forEach((a,l)=>{this.Pr.set(a,{size:l,readTime:n.get(a).readTime})}),n))}}function Nw(r){return Vt(r,"remoteDocumentGlobal")}function Hs(r){return Vt(r,"remoteDocumentsV14")}function hl(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Vw(r,e){const t=e.documentKey.path.toArray();return[r,fd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function xw(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let a=0;a<t.length-2&&a<n.length-2;++a)if(s=Se(t[a],n[a]),s)return s;return s=Se(t.length,n.length),s||(s=Se(t[t.length-2],n[n.length-2]),s||Se(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Rl(n.mutation,s,Pn.empty(),ot.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Ae()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Ae()){const s=Dr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(a=>{let l=vl();return a.forEach((d,f)=>{l=l.insert(d,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const n=Dr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Ae()))}populateOverlays(e,t,n){const s=[];return n.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((l,d)=>{t.set(l,d)})})}computeViews(e,t,n,s){let a=kn();const l=Al(),d=function(){return Al()}();return t.forEach((f,m)=>{const v=n.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof _i)?a=a.insert(m.key,m):v!==void 0?(l.set(m.key,v.mutation.getFieldMask()),Rl(v.mutation,m,v.mutation.getFieldMask(),ot.now())):l.set(m.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,v)=>l.set(m,v)),t.forEach((m,v)=>{var w;return d.set(m,new tk(v,(w=l.get(m))!==null&&w!==void 0?w:null))}),d))}recalculateAndSaveOverlays(e,t){const n=Al();let s=new Je((l,d)=>l-d),a=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const d of l)d.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let v=n.get(f)||Pn.empty();v=d.applyToLocalView(m,v),n.set(f,v);const w=(s.get(d.batchId)||Ae()).add(f);s=s.insert(d.batchId,w)})}).next(()=>{const l=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,w=VE();v.forEach(T=>{if(!a.has(T)){const V=BE(t.get(T),n.get(T));V!==null&&w.set(T,V),a=a.add(T)}}),l.push(this.documentOverlayCache.saveOverlays(e,m,w))}return L.waitFor(l)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(l){return te.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(a=>{const l=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-a.size):L.resolve(Dr());let d=-1,f=a;return l.next(m=>L.forEach(m,(v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?L.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{f=f.insert(v,T)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,Ae())).next(v=>({batchId:d,changes:NE(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next(n=>{let s=vl();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const a=t.collectionGroup;let l=vl();return this.indexManager.getCollectionParents(e,a).next(d=>L.forEach(d,f=>{const m=function(w,T){return new mi(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,n,s).next(v=>{v.forEach((w,T)=>{l=l.insert(w,T)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,n,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,s))).next(l=>{a.forEach((f,m)=>{const v=m.getKey();l.get(v)===null&&(l=l.insert(v,Ze.newInvalidDocument(v)))});let d=vl();return l.forEach((f,m)=>{const v=a.get(f);v!==void 0&&Rl(v.mutation,m,Pn.empty(),ot.now()),oc(t,m)&&(d=d.insert(f,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return L.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:It(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:ug(s.bundledQuery),readTime:It(s.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.overlays=new Je(te.comparator),this.Er=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Dr();return L.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&n.set(s,a)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,a)=>{this.Tt(e,t,a)}),L.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Er.get(n);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Er.delete(n)),L.resolve()}getOverlaysForCollection(e,t,n){const s=Dr(),a=t.length+1,l=new te(t.child("")),d=this.overlays.getIteratorFrom(l);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>n&&s.set(f.getKey(),f)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let a=new Je((m,v)=>m-v);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>n){let v=a.get(m.largestBatchId);v===null&&(v=Dr(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Dr(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=s)););return L.resolve(d)}Tt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const l=this.Er.get(s.largestBatchId).delete(n.key);this.Er.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new sg(t,n));let a=this.Er.get(t);a===void 0&&(a=Ae(),this.Er.set(t,a)),this.Er.set(t,a.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.dr=new $e(Ut.Ar),this.Rr=new $e(Ut.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new Ut(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new Ut(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new te(new De([])),n=new Ut(t,e),s=new Ut(t,e+1),a=[];return this.Rr.forEachInRange([n,s],l=>{this.gr(l),a.push(l.key)}),a}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new te(new De([])),n=new Ut(t,e),s=new Ut(t,e+1);let a=Ae();return this.Rr.forEachInRange([n,s],l=>{a=a.add(l.key)}),a}containsKey(e){const t=new Ut(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ut{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return te.comparator(e.key,t.key)||Se(e.br,t.br)}static Vr(e,t){return Se(e.br,t.br)||te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new $e(Ut.Ar)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new rg(a,t,n,s);this.mutationQueue.push(l);for(const d of s)this.vr=this.vr.add(new Ut(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return L.resolve(l)}lookupMutationBatch(e,t){return L.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Fr(n),a=s<0?0:s;return L.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ut(t,0),s=new Ut(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([n,s],l=>{const d=this.Cr(l.br);a.push(d)}),L.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $e(Se);return t.forEach(s=>{const a=new Ut(s,0),l=new Ut(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,l],d=>{n=n.add(d.br)})}),L.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let a=n;te.isDocumentKey(a)||(a=a.child(""));const l=new Ut(new te(a),0);let d=new $e(Se);return this.vr.forEachWhile(f=>{const m=f.key.path;return!!n.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.br)),!0)},l),L.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(n=>{const s=this.Cr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ce(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return L.forEach(t.mutations,s=>{const a=new Ut(s.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new Ut(t,0),s=this.vr.firstAfterOrEqual(n);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.Nr=e,this.docs=function(){return new Je(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),a=s?s.size:0,l=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return L.resolve(n?n.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let n=kn();return t.forEach(s=>{const a=this.docs.get(s);n=n.insert(s,a?a.document.mutableCopy():Ze.newInvalidDocument(s))}),L.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let a=kn();const l=t.path,d=new te(l.child("")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||Qm(oE(v),n)<=0||(s.has(v.key)||oc(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return L.resolve(a)}getAllFromCollectionGroup(e,t,n,s){se()}Lr(e,t){return L.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ak(this)}getSize(e){return L.resolve(this.size)}}class ak extends pT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(n)}),L.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.persistence=e,this.Br=new gi(t=>lo(t),ic),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.kr=0,this.qr=new hg,this.targetCount=0,this.Qr=mo.qn()}forEachTarget(e,t){return this.Br.forEach((n,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),L.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new mo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Un(t),L.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,n){let s=0;const a=[];return this.Br.forEach((l,d)=>{d.sequenceNumber<=t&&n.get(d.targetId)===null&&(this.Br.delete(l),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),L.waitFor(a).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return L.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),L.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(l=>{a.push(s.markPotentiallyOrphaned(e,l))}),L.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return L.resolve(n)}containsKey(e,t){return L.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Rn(0),this.Ur=!1,this.Ur=!0,this.Wr=new ik,this.referenceDelegate=e(this),this.Gr=new uk(this),this.indexManager=new K1,this.remoteDocumentCache=function(s){return new ok(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new sT(t),this.jr=new nk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new sk(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){Q("MemoryPersistence","Starting transaction:",e);const s=new lk(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(e,t){return L.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class lk extends uE{constructor(e){super(),this.currentSequenceNumber=e}}class Fd{constructor(e){this.persistence=e,this.Zr=new hg,this.Xr=null}static ei(e){return new Fd(e)}get ti(){if(this.Xr)return this.Xr;throw se()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),L.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),L.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ti,n=>{const s=te.fromPath(n);return this.ni(e,s).next(a=>{a||t.removeEntry(s,pe.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return L.or([()=>L.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class gd{constructor(e,t){this.persistence=e,this.ri=new gi(n=>on(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=fT(this,t)}static ei(e,t){return new gd(e,t)}Hr(){}Jr(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return L.forEach(this.ri,(n,s)=>this.ir(e,n,s).next(a=>a?L.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Lr(e,l=>this.ir(e,l,t).next(d=>{d||(n++,a.removeEntry(l,pe.min()))})).next(()=>a.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),L.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),L.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yh(e.data.value)),t}ir(e,t,n){return L.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return L.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.serializer=e}O(e,t,n,s){const a=new bd("createOrUpgrade",t);n<1&&s>=1&&(function(f){f.createObjectStore("owner")}(e),function(f){f.createObjectStore("mutationQueues",{keyPath:"userId"}),f.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qv,{unique:!0}),f.createObjectStore("documentMutations")}(e),Ow(e),function(f){f.createObjectStore("remoteDocuments")}(e));let l=L.resolve();return n<3&&s>=3&&(n!==0&&(function(f){f.deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal")}(e),Ow(e)),l=l.next(()=>function(f){const m=f.store("targetGlobal"),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:pe.min().toTimestamp(),targetCount:0};return m.put("targetGlobalKey",v)}(a))),n<4&&s>=4&&(n!==0&&(l=l.next(()=>function(f,m){return m.store("mutations").U().next(v=>{f.deleteObjectStore("mutations"),f.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qv,{unique:!0});const w=m.store("mutations"),T=v.map(V=>w.put(V));return L.waitFor(T)})}(e,a))),l=l.next(()=>{(function(f){f.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(l=l.next(()=>this.ii(a))),n<6&&s>=6&&(l=l.next(()=>(function(f){f.createObjectStore("remoteDocumentGlobal")}(e),this.si(a)))),n<7&&s>=7&&(l=l.next(()=>this.oi(a))),n<8&&s>=8&&(l=l.next(()=>this._i(e,a))),n<9&&s>=9&&(l=l.next(()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(l=l.next(()=>this.ai(a))),n<11&&s>=11&&(l=l.next(()=>{(function(f){f.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(f){f.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(l=l.next(()=>{(function(f){const m=f.createObjectStore("documentOverlays",{keyPath:GP});m.createIndex("collectionPathOverlayIndex",KP,{unique:!1}),m.createIndex("collectionGroupOverlayIndex",HP,{unique:!1})})(e)})),n<13&&s>=13&&(l=l.next(()=>function(f){const m=f.createObjectStore("remoteDocumentsV14",{keyPath:OP});m.createIndex("documentKeyIndex",LP),m.createIndex("collectionGroupIndex",MP)}(e)).next(()=>this.ui(e,a)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(l=l.next(()=>this.ci(e,a))),n<15&&s>=15&&(l=l.next(()=>function(f){f.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),f.createObjectStore("indexState",{keyPath:jP}).createIndex("sequenceNumberIndex",qP,{unique:!1}),f.createObjectStore("indexEntries",{keyPath:$P}).createIndex("documentKeyIndex",WP,{unique:!1})}(e))),n<16&&s>=16&&(l=l.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(l=l.next(()=>{(function(f){f.createObjectStore("globals",{keyPath:"name"})})(e)})),l}si(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=md(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ii(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>L.forEach(s,a=>{const l=IDBKeyRange.bound([a.userId,-1],[a.userId,a.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",l).next(d=>L.forEach(d,f=>{ce(f.userId===a.userId);const m=Xs(this.serializer,f);return lT(e,a.userId,m).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const a=[];return n.J((l,d)=>{const f=new De(l),m=function(w){return[0,on(w)]}(f);a.push(t.get(m).next(v=>v?L.resolve():(w=>t.put({targetId:0,path:on(w),sequenceNumber:s.highestListenSequenceNumber}))(f)))}).next(()=>L.waitFor(a))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:zP});const n=t.store("collectionParents"),s=new cg,a=l=>{if(s.add(l)){const d=l.lastSegment(),f=l.popLast();return n.put({collectionId:d,parent:on(f)})}};return t.store("remoteDocuments").J({H:!0},(l,d)=>{const f=new De(l);return a(f.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([l,d,f],m)=>{const v=br(d);return a(v.popLast())}))}ai(e){const t=e.store("targets");return t.J((n,s)=>{const a=Il(s),l=oT(this.serializer,a);return t.put(l)})}ui(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((a,l)=>{const d=t.store("remoteDocumentsV14"),f=function(w){return w.document?new te(De.fromString(w.document.name).popFirst(5)):w.noDocument?te.fromSegments(w.noDocument.path):w.unknownDocument?te.fromSegments(w.unknownDocument.path):se()}(l).path.toArray(),m={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:l.readTime||[0,0],unknownDocument:l.unknownDocument,noDocument:l.noDocument,document:l.document,hasCommittedMutations:!!l.hasCommittedMutations};s.push(d.put(m))}).next(()=>L.waitFor(s))}ci(e,t){const n=t.store("mutations"),s=mT(this.serializer),a=new dg(Fd.ei,this.serializer.ht);return n.U().next(l=>{const d=new Map;return l.forEach(f=>{var m;let v=(m=d.get(f.userId))!==null&&m!==void 0?m:Ae();Xs(this.serializer,f).keys().forEach(w=>v=v.add(w)),d.set(f.userId,v)}),L.forEach(d,(f,m)=>{const v=new Bt(m),w=Ld.Pt(this.serializer,v),T=a.getIndexManager(v),V=Md.Pt(v,this.serializer,T,a.referenceDelegate);return new gT(s,V,w,T).recalculateAndSaveOverlaysForDocumentKeys(new cm(t,Rn.oe),f).next()})})}}function Ow(r){r.createObjectStore("targetDocuments",{keyPath:UP}).createIndex("documentTargetsIndex",BP,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",FP,{unique:!0}),r.createObjectStore("targetGlobal")}const Hp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fg{constructor(e,t,n,s,a,l,d,f,m,v,w=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.li=a,this.window=l,this.document=d,this.hi=m,this.Pi=v,this.Ti=w,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=T=>Promise.resolve(),!fg.p())throw new K(z.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new X1(this,s),this.Vi=t+"main",this.serializer=new sT(f),this.mi=new Vr(this.Vi,this.Ti,new ck(this.serializer)),this.Wr=new z1,this.Gr=new Q1(this.referenceDelegate,this.serializer),this.remoteDocumentCache=mT(this.serializer),this.jr=new B1,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,v===!1&&wt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new K(z.FAILED_PRECONDITION,Hp);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new Rn(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$h(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(gs(e))return Q("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return dl(e).get("owner").next(t=>L.resolve(this.Fi(t)))}Mi(e){return $h(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Vt(t,"clientMetadata");return n.U().next(s=>{const a=this.Ni(s,18e5),l=s.filter(d=>a.indexOf(d)===-1);return L.forEach(l,d=>n.delete(d.clientId)).next(()=>l)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Li(t.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?L.resolve(!0):dl(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new K(z.FAILED_PRECONDITION,Hp);return!1}}return!(!this.networkEnabled||!this.inForeground)||$h(e).U().next(n=>this.Ni(n,5e3).find(s=>{if(this.clientId!==s.clientId){const a=!this.networkEnabled&&s.networkEnabled,l=!this.inForeground&&s.inForeground,d=this.networkEnabled===s.networkEnabled;if(a||l&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&Q("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new cm(e,Rn.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(n=>this.Oi(n.updateTimeMs,t)&&!this.Bi(n.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>$h(e).U().next(t=>this.Ni(t,18e5).map(n=>n.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return Md.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new H1(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return Ld.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,n){Q("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",a=function(f){return f===17?YP:f===16?JP:f===15?Ym:f===14?pE:f===13?fE:f===12?QP:f===11?dE:void se()}(this.Ti);let l;return this.mi.runTransaction(e,s,a,d=>(l=new cm(d,this.$r?this.$r.next():Rn.oe),t==="readwrite-primary"?this.bi(l).next(f=>!!f||this.Di(l)).next(f=>{if(!f)throw wt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new K(z.FAILED_PRECONDITION,aE);return n(l)}).next(f=>this.Ci(l).next(()=>f)):this.Ui(l).next(()=>n(l)))).then(d=>(l.raiseOnCommittedEvent(),d))}Ui(e){return dl(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new K(z.FAILED_PRECONDITION,Hp)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return dl(e).put("owner",t)}static p(){return Vr.p()}vi(e){const t=dl(e);return t.get("owner").next(n=>this.Fi(n)?(Q("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):L.resolve())}Oi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(wt(`Detected an update time that is in the future: ${e} > ${n}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;OI()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(e){var t;try{const n=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Li(e)))!==null;return Q("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return wt("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(e){wt("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function dl(r){return Vt(r,"owner")}function $h(r){return Vt(r,"clientMetadata")}function pg(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=s}static zi(e,t){let n=Ae(),s=Ae();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new mg(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return OI()?8:lE(ct())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,s){const a={result:null};return this.Xi(e,t).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.es(e,t,s,n).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new hk;return this.ts(e,t,l).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,l,d.size)})}).next(()=>a.result)}ns(e,t,n,s){return n.documentReadCount<this.Ji?(Ta()<=be.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Sa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),L.resolve()):(Ta()<=be.DEBUG&&Q("QueryEngine","Query:",Sa(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(Ta()<=be.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Sa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(t))):L.resolve())}Xi(e,t){if(uw(t))return L.resolve(null);let n=mn(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=dd(t,null,"F"),n=mn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(a=>{const l=Ae(...a);return this.Zi.getDocuments(e,l).next(d=>this.indexManager.getMinOffset(e,n).next(f=>{const m=this.rs(t,d);return this.ss(t,m,l,f.readTime)?this.Xi(e,dd(t,null,"F")):this.os(e,m,t,f)}))})))}es(e,t,n,s){return uw(t)||s.isEqual(pe.min())?L.resolve(null):this.Zi.getDocuments(e,n).next(a=>{const l=this.rs(t,a);return this.ss(t,l,n,s)?L.resolve(null):(Ta()<=be.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sa(t)),this.os(e,l,t,sE(s,-1)).next(d=>d))})}rs(e,t){let n=new $e(bE(e));return t.forEach((s,a)=>{oc(e,a)&&(n=n.add(a))}),n}ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(e,t,n){return Ta()<=be.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Sa(t)),this.Zi.getDocumentsMatchingQuery(e,t,Fn.min(),n)}os(e,t,n,s){return this.Zi.getDocumentsMatchingQuery(e,n,s).next(a=>(t.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t,n,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Je(Se),this.cs=new gi(a=>lo(a),ic),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gT(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function yT(r,e,t,n){return new dk(r,e,t,n)}async function vT(r,e){const t=re(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(a=>(s=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(a=>{const l=[],d=[];let f=Ae();for(const m of s){l.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(n,f).next(m=>({Ts:m,removedBatchIds:l,addedBatchIds:d}))})})}function fk(r,e){const t=re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,f,m,v){const w=m.batch,T=w.keys();let V=L.resolve();return T.forEach(W=>{V=V.next(()=>v.getEntry(f,W)).next($=>{const q=m.docVersions.get(W);ce(q!==null),$.version.compareTo(q)<0&&(w.applyToRemoteDocument($,m),$.isValidDocument()&&($.setReadTime(m.commitVersion),v.addEntry($)))})}),V.next(()=>d.mutationQueue.removeMutationBatch(f,w))}(t,n,e,a).next(()=>a.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(d){let f=Ae();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function wT(r){const e=re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function pk(r,e){const t=re(r),n=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const d=[];e.targetChanges.forEach((v,w)=>{const T=s.get(w);if(!T)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,w).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,w)));let V=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?V=V.withResumeToken(pt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):v.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(v.resumeToken,n)),s=s.insert(w,V),function($,q,fe){return $.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(T,V,v)&&d.push(t.Gr.updateTargetData(a,V))});let f=kn(),m=Ae();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(IT(a,l,e.documentUpdates).next(v=>{f=v.Is,m=v.Es})),!n.isEqual(pe.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(w=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,n));d.push(v)}return L.waitFor(d).next(()=>l.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.us=s,a))}function IT(r,e,t){let n=Ae(),s=Ae();return t.forEach(a=>n=n.add(a)),e.getEntries(r,n).next(a=>{let l=kn();return t.forEach((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(pe.min())?(e.removeEntry(d,f.readTime),l=l.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),l=l.insert(d,f)):Q("LocalStore","Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Is:l,Es:s}})}function mk(r,e){const t=re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Wa(r,e){const t=re(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Gr.getTargetData(n,e).next(a=>a?(s=a,L.resolve(s)):t.Gr.allocateTargetId(n).next(l=>(s=new si(e,l,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function Ga(r,e,t){const n=re(r),s=n.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,l=>n.persistence.referenceDelegate.removeTarget(l,s))}catch(l){if(!gs(l))throw l;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}n.us=n.us.remove(e),n.cs.delete(s.target)}function _d(r,e,t){const n=re(r);let s=pe.min(),a=Ae();return n.persistence.runTransaction("Execute query","readwrite",l=>function(f,m,v){const w=re(f),T=w.cs.get(v);return T!==void 0?L.resolve(w.us.get(T)):w.Gr.getTargetData(m,v)}(n,l,mn(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(l,d.targetId).next(f=>{a=f})}).next(()=>n._s.getDocumentsMatchingQuery(l,e,t?s:pe.min(),t?a:Ae())).next(d=>(ST(n,CE(e),d),{documents:d,ds:a})))}function ET(r,e){const t=re(r),n=re(t.Gr),s=t.us.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",a=>n.ut(a,e).next(l=>l?l.target:null))}function TT(r,e){const t=re(r),n=t.ls.get(e)||pe.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.hs.getAllFromCollectionGroup(s,e,sE(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(ST(t,e,s),s))}function ST(r,e,t){let n=r.ls.get(e)||pe.min();t.forEach((s,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)}),r.ls.set(e,n)}async function gk(r,e,t,n){const s=re(r);let a=Ae(),l=kn();for(const m of t){const v=e.As(m.metadata.name);m.document&&(a=a.add(v));const w=e.Rs(m);w.setReadTime(e.Vs(m.metadata.readTime)),l=l.insert(v,w)}const d=s.hs.newChangeBuffer({trackRemovals:!0}),f=await Wa(s,function(v){return mn(ru(De.fromString(`__bundle__/docs/${v}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",m=>IT(m,d,l).next(v=>(d.apply(m),v)).next(v=>s.Gr.removeMatchingKeysForTargetId(m,f.targetId).next(()=>s.Gr.addMatchingKeys(m,a,f.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(m,v.Is,v.Es)).next(()=>v.Is)))}async function _k(r,e,t=Ae()){const n=await Wa(r,mn(ug(e.bundledQuery))),s=re(r);return s.persistence.runTransaction("Save named query","readwrite",a=>{const l=It(e.readTime);if(n.snapshotVersion.compareTo(l)>=0)return s.jr.saveNamedQuery(a,e);const d=n.withResumeToken(pt.EMPTY_BYTE_STRING,l);return s.us=s.us.insert(d.targetId,d),s.Gr.updateTargetData(a,d).next(()=>s.Gr.removeMatchingKeysForTargetId(a,n.targetId)).next(()=>s.Gr.addMatchingKeys(a,t,n.targetId)).next(()=>s.jr.saveNamedQuery(a,e))})}function Lw(r,e){return`firestore_clients_${r}_${e}`}function Mw(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Qp(r,e){return`firestore_targets_${r}_${e}`}class yd{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static fs(e,t,n){const s=JSON.parse(n);let a,l=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return l&&s.error&&(l=typeof s.error.message=="string"&&typeof s.error.code=="string",l&&(a=new K(s.error.code,s.error.message))),l?new yd(e,t,s.state,a):(wt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Pl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static fs(e,t){const n=JSON.parse(t);let s,a=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return a&&n.error&&(a=typeof n.error.message=="string"&&typeof n.error.code=="string",a&&(s=new K(n.error.code,n.error.message))),a?new Pl(e,n.state,s):(wt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vd{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static fs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,a=eg();for(let l=0;s&&l<n.activeTargetIds.length;++l)s=cE(n.activeTargetIds[l]),a=a.add(n.activeTargetIds[l]);return s?new vd(e,a):(wt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class gg{constructor(e,t){this.clientId=e,this.onlineState=t}static fs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new gg(t.clientId,t.onlineState):(wt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sm{constructor(){this.activeTargetIds=eg()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jp{constructor(e,t,n,s,a){this.window=e,this.li=t,this.persistenceKey=n,this.ws=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new Je(Se),this.started=!1,this.vs=[];const l=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=a,this.Cs=Lw(this.persistenceKey,this.ws),this.Fs=function(f){return`firestore_sequence_number_${f}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new Sm),this.Ms=new RegExp(`^firestore_clients_${l}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${l}_(\\d+)$`),this.Ns=function(f){return`firestore_online_state_${f}`}(this.persistenceKey),this.Ls=function(f){return`firestore_bundle_loaded_v2_${f}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const n of e){if(n===this.ws)continue;const s=this.getItem(Lw(this.persistenceKey,n));if(s){const a=vd.fs(n,s);a&&(this.Ds=this.Ds.insert(a.clientId,a))}}this.Bs();const t=this.storage.getItem(this.Ns);if(t){const n=this.ks(t);n&&this.qs(n)}for(const n of this.vs)this.bs(n);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(e){let t=!1;return this.Ds.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ks(e,"pending")}updateMutationState(e,t,n){this.Ks(e,t,n),this.$s(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Qp(this.persistenceKey,e));if(s){const a=Pl.fs(e,s);a&&(n=a.state)}}return t&&this.Us.ps(e),this.Bs(),n}removeLocalQueryTarget(e){this.Us.ys(e),this.Bs()}isLocalQueryTarget(e){return this.Us.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qp(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ws(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.$s(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Gs(e)}notifyBundleLoaded(e){this.zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Q("SharedClientState","READ",e,t),t}setItem(e,t){Q("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Q("SharedClientState","REMOVE",e),this.storage.removeItem(e)}bs(e){const t=e;if(t.storageArea===this.storage){if(Q("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Cs)return void wt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ms.test(t.key)){if(t.newValue==null){const n=this.js(t.key);return this.Hs(n,null)}{const n=this.Js(t.key,t.newValue);if(n)return this.Hs(n.clientId,n)}}else if(this.xs.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(this.Os.test(t.key)){if(t.newValue!==null){const n=this.Xs(t.key,t.newValue);if(n)return this.eo(n)}}else if(t.key===this.Ns){if(t.newValue!==null){const n=this.ks(t.newValue);if(n)return this.qs(n)}}else if(t.key===this.Fs){const n=function(a){let l=Rn.oe;if(a!=null)try{const d=JSON.parse(a);ce(typeof d=="number"),l=d}catch(d){wt("SharedClientState","Failed to read sequence number from WebStorage",d)}return l}(t.newValue);n!==Rn.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Ls){const n=this.no(t.newValue);await Promise.all(n.map(s=>this.syncEngine.ro(s)))}}}else this.vs.push(t)})}}get Us(){return this.Ds.get(this.ws)}Bs(){this.setItem(this.Cs,this.Us.gs())}Ks(e,t,n){const s=new yd(this.currentUser,e,t,n),a=Mw(this.persistenceKey,this.currentUser,e);this.setItem(a,s.gs())}$s(e){const t=Mw(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Gs(e){const t={clientId:this.ws,onlineState:e};this.storage.setItem(this.Ns,JSON.stringify(t))}Ws(e,t,n){const s=Qp(this.persistenceKey,e),a=new Pl(e,t,n);this.setItem(s,a.gs())}zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ls,t)}js(e){const t=this.Ms.exec(e);return t?t[1]:null}Js(e,t){const n=this.js(e);return vd.fs(n,t)}Ys(e,t){const n=this.xs.exec(e),s=Number(n[1]),a=n[2]!==void 0?n[2]:null;return yd.fs(new Bt(a),s,t)}Xs(e,t){const n=this.Os.exec(e),s=Number(n[1]);return Pl.fs(s,t)}ks(e){return gg.fs(e)}no(e){return JSON.parse(e)}async Zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.io(e.batchId,e.state,e.error);Q("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}eo(e){return this.syncEngine.so(e.targetId,e.state,e.error)}Hs(e,t){const n=t?this.Ds.insert(e,t):this.Ds.remove(e),s=this.Qs(this.Ds),a=this.Qs(n),l=[],d=[];return a.forEach(f=>{s.has(f)||l.push(f)}),s.forEach(f=>{a.has(f)||d.push(f)}),this.syncEngine.oo(l,d).then(()=>{this.Ds=n})}qs(e){this.Ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Qs(e){let t=eg();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class AT{constructor(){this._o=new Sm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Sm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh=null;function Yp(){return Wh===null?Wh=function(){return 268435456+Math.round(2147483648*Math.random())}():Wh++,"0x"+Wh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class Ik extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(t,n,s,a,l){const d=Yp(),f=this.No(t,n.toUriEncodedString());Q("RestConnection",`Sending RPC '${t}' ${d}:`,f,s);const m={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(m,a,l),this.Bo(t,f,m,s).then(v=>(Q("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Lr("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",f,"request:",s),v})}ko(t,n,s,a,l,d){return this.Oo(t,n,s,a,l)}Lo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nu}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>t[l]=a),s&&s.headers.forEach((a,l)=>t[l]=a)}No(t,n){const s=vk[t];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,s){const a=Yp();return new Promise((l,d)=>{const f=new YI;f.setWithCredentials(!0),f.listenOnce(XI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Kh.NO_ERROR:const v=f.getResponseJson();Q(rn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),l(v);break;case Kh.TIMEOUT:Q(rn,`RPC '${e}' ${a} timed out`),d(new K(z.DEADLINE_EXCEEDED,"Request time out"));break;case Kh.HTTP_ERROR:const w=f.getStatus();if(Q(rn,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const V=T==null?void 0:T.error;if(V&&V.status&&V.message){const W=function(q){const fe=q.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(fe)>=0?fe:z.UNKNOWN}(V.status);d(new K(W,V.message))}else d(new K(z.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new K(z.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{Q(rn,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);Q(rn,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,n,15)})}qo(e,t,n){const s=Yp(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=tE(),d=eE(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Lo(f.initMessageHeaders,t,n),f.encodeInitMessageHeaders=!0;const v=a.join("");Q(rn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const w=l.createWebChannel(v,f);let T=!1,V=!1;const W=new wk({Eo:q=>{V?Q(rn,`Not sending because RPC '${e}' stream ${s} is closed:`,q):(T||(Q(rn,`Opening RPC '${e}' stream ${s} transport.`),w.open(),T=!0),Q(rn,`RPC '${e}' stream ${s} sending:`,q),w.send(q))},Ao:()=>w.close()}),$=(q,fe,me)=>{q.listen(fe,ae=>{try{me(ae)}catch(Ee){setTimeout(()=>{throw Ee},0)}})};return $(w,yl.EventType.OPEN,()=>{V||(Q(rn,`RPC '${e}' stream ${s} transport opened.`),W.So())}),$(w,yl.EventType.CLOSE,()=>{V||(V=!0,Q(rn,`RPC '${e}' stream ${s} transport closed`),W.Do())}),$(w,yl.EventType.ERROR,q=>{V||(V=!0,Lr(rn,`RPC '${e}' stream ${s} transport errored:`,q),W.Do(new K(z.UNAVAILABLE,"The operation could not be completed")))}),$(w,yl.EventType.MESSAGE,q=>{var fe;if(!V){const me=q.data[0];ce(!!me);const ae=me,Ee=(ae==null?void 0:ae.error)||((fe=ae[0])===null||fe===void 0?void 0:fe.error);if(Ee){Q(rn,`RPC '${e}' stream ${s} received error:`,Ee);const Re=Ee.status;let _e=function(P){const b=At[P];if(b!==void 0)return qE(b)}(Re),C=Ee.message;_e===void 0&&(_e=z.INTERNAL,C="Unknown error status: "+Re+" with message "+Ee.message),V=!0,W.Do(new K(_e,C)),w.close()}else Q(rn,`RPC '${e}' stream ${s} received:`,me),W.vo(me)}}),$(d,ZI.STAT_EVENT,q=>{q.stat===um.PROXY?Q(rn,`RPC '${e}' stream ${s} detected buffering proxy`):q.stat===um.NOPROXY&&Q(rn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{W.bo()},0),W}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(){return typeof window<"u"?window:null}function td(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(r){return new C1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,n=1e3,s=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-n);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t,n,s,a,l,d,f){this.li=e,this.Yo=n,this.Zo=s,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new _g(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===t&&this.I_(n,s)},n=>{e(()=>{const s=new K(z.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(s)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.E_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ek extends PT{constructor(e,t,n,s,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,l),this.serializer=a}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=N1(this.serializer,e),n=function(a){if(!("targetChange"in a))return pe.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?pe.min():l.readTime?It(l.readTime):pe.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=vm(this.serializer),t.addTarget=function(a,l){let d;const f=l.target;if(d=cd(f)?{documents:ZE(a,f)}:{query:eT(a,f).ct},d.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){d.resumeToken=KE(a,l.resumeToken);const m=_m(a,l.expectedCount);m!==null&&(d.expectedCount=m)}else if(l.snapshotVersion.compareTo(pe.min())>0){d.readTime=$a(a,l.snapshotVersion.toTimestamp());const m=_m(a,l.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const n=x1(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=vm(this.serializer),t.removeTarget=e,this.c_(t)}}class Tk extends PT{constructor(e,t,n,s,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,l),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=V1(e.writeResults,e.commitTime),n=It(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=vm(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Gl(this.serializer,n))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new K(z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Oo(e,ym(t,n),s,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(z.UNKNOWN,a.toString())})}ko(e,t,n,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,d])=>this.connection.ko(e,ym(t,n),s,l,d,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new K(z.UNKNOWN,l.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Ak{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(wt(t),this.C_=!1):Q("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,t,n,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(l=>{n.enqueueAndForget(async()=>{ys(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=re(f);m.k_.add(4),await ou(m),m.K_.set("Unknown"),m.k_.delete(4),await hc(m)}(this))})}),this.K_=new Ak(n,s)}}async function hc(r){if(ys(r))for(const e of r.q_)await e(!0)}async function ou(r){for(const e of r.q_)await e(!1)}function Ud(r,e){const t=re(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),wg(t)?vg(t):uu(t).s_()&&yg(t,e))}function Ka(r,e){const t=re(r),n=uu(t);t.B_.delete(e),n.s_()&&kT(t,e),t.B_.size===0&&(n.s_()?n.a_():ys(t)&&t.K_.set("Unknown"))}function yg(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}uu(r).V_(e)}function kT(r,e){r.U_.xe(e),uu(r).m_(e)}function vg(r){r.U_=new A1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),uu(r).start(),r.K_.F_()}function wg(r){return ys(r)&&!uu(r).i_()&&r.B_.size>0}function ys(r){return re(r).k_.size===0}function CT(r){r.U_=void 0}async function Pk(r){r.K_.set("Online")}async function kk(r){r.B_.forEach((e,t)=>{yg(r,e)})}async function Ck(r,e){CT(r),wg(r)?(r.K_.O_(e),vg(r)):r.K_.set("Unknown")}async function bk(r,e,t){if(r.K_.set("Online"),e instanceof GE&&e.state===2&&e.cause)try{await async function(s,a){const l=a.cause;for(const d of a.targetIds)s.B_.has(d)&&(await s.remoteSyncer.rejectListen(d,l),s.B_.delete(d),s.U_.removeTarget(d))}(r,e)}catch(n){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wd(r,n)}else if(e instanceof ed?r.U_.$e(e):e instanceof WE?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(pe.min()))try{const n=await wT(r.localStore);t.compareTo(n)>=0&&await function(a,l){const d=a.U_.it(l);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.B_.get(m);v&&a.B_.set(m,v.withResumeToken(f.resumeToken,l))}}),d.targetMismatches.forEach((f,m)=>{const v=a.B_.get(f);if(!v)return;a.B_.set(f,v.withResumeToken(pt.EMPTY_BYTE_STRING,v.snapshotVersion)),kT(a,f);const w=new si(v.target,f,m,v.sequenceNumber);yg(a,w)}),a.remoteSyncer.applyRemoteEvent(d)}(r,t)}catch(n){Q("RemoteStore","Failed to raise snapshot:",n),await wd(r,n)}}async function wd(r,e,t){if(!gs(e))throw e;r.k_.add(1),await ou(r),r.K_.set("Offline"),t||(t=()=>wT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await hc(r)})}function bT(r,e){return e().catch(t=>wd(r,t,e))}async function au(r){const e=re(r),t=hs(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Dk(e);)try{const s=await mk(e.localStore,n);if(s===null){e.L_.length===0&&t.a_();break}n=s.batchId,Nk(e,s)}catch(s){await wd(e,s)}DT(e)&&NT(e)}function Dk(r){return ys(r)&&r.L_.length<10}function Nk(r,e){r.L_.push(e);const t=hs(r);t.s_()&&t.f_&&t.g_(e.mutations)}function DT(r){return ys(r)&&!hs(r).i_()&&r.L_.length>0}function NT(r){hs(r).start()}async function Vk(r){hs(r).w_()}async function xk(r){const e=hs(r);for(const t of r.L_)e.g_(t.mutations)}async function Ok(r,e,t){const n=r.L_.shift(),s=ig.from(n,e,t);await bT(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await au(r)}async function Lk(r,e){e&&hs(r).f_&&await async function(n,s){if(function(l){return jE(l)&&l!==z.ABORTED}(s.code)){const a=n.L_.shift();hs(n).__(),await bT(n,()=>n.remoteSyncer.rejectFailedWrite(a.batchId,s)),await au(n)}}(r,e),DT(r)&&NT(r)}async function Uw(r,e){const t=re(r);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const n=ys(t);t.k_.add(3),await ou(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await hc(t)}async function Am(r,e){const t=re(r);e?(t.k_.delete(2),await hc(t)):e||(t.k_.add(2),await ou(t),t.K_.set("Unknown"))}function uu(r){return r.W_||(r.W_=function(t,n,s){const a=re(t);return a.b_(),new Ek(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Ro:Pk.bind(null,r),mo:kk.bind(null,r),po:Ck.bind(null,r),R_:bk.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),wg(r)?vg(r):r.K_.set("Unknown")):(await r.W_.stop(),CT(r))})),r.W_}function hs(r){return r.G_||(r.G_=function(t,n,s){const a=re(t);return a.b_(),new Tk(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:Vk.bind(null,r),po:Lk.bind(null,r),p_:xk.bind(null,r),y_:Ok.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await au(r)):(await r.G_.stop(),r.L_.length>0&&(Q("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t,n,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=a,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,a){const l=Date.now()+n,d=new Ig(e,t,l,s,a);return d.start(n),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(r,e){if(wt("AsyncQueue",`${e}: ${r}`),gs(r))return new K(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{static emptySet(e){return new Na(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||te.comparator(t.key,n.key):(t,n)=>te.comparator(t.key,n.key),this.keyedMap=vl(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Na)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=n.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Na;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.z_=new Je(te.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):se():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ha{constructor(e,t,n,s,a,l,d,f,m){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,n,s,a){const l=[];return t.forEach(d=>{l.push({type:0,doc:d})}),new Ha(e,t,Na.emptySet(t),l,n,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Fk{constructor(){this.queries=zw(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const s=re(t),a=s.queries;s.queries=zw(),a.forEach((l,d)=>{for(const f of d.J_)f.onError(n)})})(this,new K(z.ABORTED,"Firestore shutting down"))}}function zw(){return new gi(r=>kE(r),sc)}async function Eg(r,e){const t=re(r);let n=3;const s=e.query;let a=t.queries.get(s);a?!a.Y_()&&e.Z_()&&(n=2):(a=new Mk,n=e.Z_()?0:1);try{switch(n){case 0:a.H_=await t.onListen(s,!0);break;case 1:a.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(l){const d=lu(l,`Initialization of query '${Sa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Sg(t)}async function Tg(r,e){const t=re(r),n=e.query;let s=3;const a=t.queries.get(n);if(a){const l=a.J_.indexOf(e);l>=0&&(a.J_.splice(l,1),a.J_.length===0?s=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Uk(r,e){const t=re(r);let n=!1;for(const s of e){const a=s.query,l=t.queries.get(a);if(l){for(const d of l.J_)d.ta(s)&&(n=!0);l.H_=s}}n&&Sg(t)}function Bk(r,e,t){const n=re(r),s=n.queries.get(e);if(s)for(const a of s.J_)a.onError(t);n.queries.delete(e)}function Sg(r){r.X_.forEach(e=>{e.next()})}var Rm,jw;(jw=Rm||(Rm={})).na="default",jw.Cache="cache";class Ag{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Ha(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ha.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Rm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,t){this.ca=e,this.byteLength=t}la(){return"metadata"in this.ca}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.serializer=e}As(e){return xr(this.serializer,e)}Rs(e){return e.metadata.exists?XE(this.serializer,e.document,!1):Ze.newNoDocument(this.As(e.metadata.name),this.Vs(e.metadata.readTime))}Vs(e){return It(e)}}class jk{constructor(e,t,n){this.ha=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=VT(e)}Pa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ca.namedQuery)this.queries.push(e.ca.namedQuery);else if(e.ca.documentMetadata){this.documents.push({metadata:e.ca.documentMetadata}),e.ca.documentMetadata.exists||++t;const n=De.fromString(e.ca.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ca.document&&(this.documents[this.documents.length-1].document=e.ca.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ta(e){const t=new Map,n=new qw(this.serializer);for(const s of e)if(s.metadata.queries){const a=n.As(s.metadata.name);for(const l of s.metadata.queries){const d=(t.get(l)||Ae()).add(a);t.set(l,d)}}return t}async complete(){const e=await gk(this.localStore,new qw(this.serializer),this.documents,this.ha.id),t=this.Ta(this.documents);for(const n of this.queries)await _k(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ia:this.collectionGroups,Ea:e}}}function VT(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.key=e}}class OT{constructor(e){this.key=e}}class LT{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ae(),this.mutatedKeys=Ae(),this.Va=bE(e),this.ma=new Na(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new Bw,s=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,l=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,w)=>{const T=s.get(v),V=oc(this.query,w)?w:null,W=!!T&&this.mutatedKeys.has(T.key),$=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let q=!1;T&&V?T.data.isEqual(V.data)?W!==$&&(n.track({type:3,doc:V}),q=!0):this.ya(T,V)||(n.track({type:2,doc:V}),q=!0,(f&&this.Va(V,f)>0||m&&this.Va(V,m)<0)&&(d=!0)):!T&&V?(n.track({type:0,doc:V}),q=!0):T&&!V&&(n.track({type:1,doc:T}),q=!0,(f||m)&&(d=!0)),q&&(V?(l=l.add(V),a=$?a.add(v):a.delete(v)):(l=l.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const v=this.query.limitType==="F"?l.last():l.first();l=l.delete(v.key),a=a.delete(v.key),n.track({type:1,doc:v})}return{ma:l,pa:n,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const l=e.pa.j_();l.sort((v,w)=>function(V,W){const $=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return $(V)-$(W)}(v.type,w.type)||this.Va(v.doc,w.doc)),this.wa(n),s=s!=null&&s;const d=t&&!s?this.Sa():[],f=this.Ra.size===0&&this.current&&!s?1:0,m=f!==this.Aa;return this.Aa=f,l.length!==0||m?{snapshot:new Ha(this.query,e.ma,a,l,e.mutatedKeys,f===0,m,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Bw,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ae(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new OT(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new xT(n))}),t}va(e){this.da=e.ds,this.Ra=Ae();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ha.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class qk{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class $k{constructor(e){this.key=e,this.Fa=!1}}class Wk{constructor(e,t,n,s,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Ma={},this.xa=new gi(d=>kE(d),sc),this.Oa=new Map,this.Na=new Set,this.La=new Je(te.comparator),this.Ba=new Map,this.ka=new hg,this.qa={},this.Qa=new Map,this.Ka=mo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Gk(r,e,t=!0){const n=Bd(r);let s;const a=n.xa.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await MT(n,e,t,!0),s}async function Kk(r,e){const t=Bd(r);await MT(t,e,!0,!1)}async function MT(r,e,t,n){const s=await Wa(r.localStore,mn(e)),a=s.targetId,l=r.sharedClientState.addLocalQueryTarget(a,t);let d;return n&&(d=await Rg(r,e,a,l==="current",s.resumeToken)),r.isPrimaryClient&&t&&Ud(r.remoteStore,s),d}async function Rg(r,e,t,n,s){r.Ua=(w,T,V)=>async function($,q,fe,me){let ae=q.view.ga(fe);ae.ss&&(ae=await _d($.localStore,q.query,!1).then(({documents:C})=>q.view.ga(C,ae)));const Ee=me&&me.targetChanges.get(q.targetId),Re=me&&me.targetMismatches.get(q.targetId)!=null,_e=q.view.applyChanges(ae,$.isPrimaryClient,Ee,Re);return Pm($,q.targetId,_e.ba),_e.snapshot}(r,w,T,V);const a=await _d(r.localStore,e,!0),l=new LT(e,a.ds),d=l.ga(a.documents),f=lc.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),m=l.applyChanges(d,r.isPrimaryClient,f);Pm(r,t,m.ba);const v=new qk(e,t,l);return r.xa.set(e,v),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),m.snapshot}async function Hk(r,e,t){const n=re(r),s=n.xa.get(e),a=n.Oa.get(s.targetId);if(a.length>1)return n.Oa.set(s.targetId,a.filter(l=>!sc(l,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ga(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Ka(n.remoteStore,s.targetId),Qa(n,s.targetId)}).catch(ms)):(Qa(n,s.targetId),await Ga(n.localStore,s.targetId,!0))}async function Qk(r,e){const t=re(r),n=t.xa.get(e),s=t.Oa.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ka(t.remoteStore,n.targetId))}async function Jk(r,e,t){const n=bg(r);try{const s=await function(l,d){const f=re(l),m=ot.now(),v=d.reduce((V,W)=>V.add(W.key),Ae());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let W=kn(),$=Ae();return f.hs.getEntries(V,v).next(q=>{W=q,W.forEach((fe,me)=>{me.isValidDocument()||($=$.add(fe))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,W)).next(q=>{w=q;const fe=[];for(const me of d){const ae=E1(me,w.get(me.key).overlayedDocument);ae!=null&&fe.push(new _i(me.key,ae,vE(ae.value.mapValue),st.exists(!0)))}return f.mutationQueue.addMutationBatch(V,m,fe,d)}).next(q=>{T=q;const fe=q.applyToLocalDocumentSet(w,$);return f.documentOverlayCache.saveOverlays(V,q.batchId,fe)})}).then(()=>({batchId:T.batchId,changes:NE(w)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(l,d,f){let m=l.qa[l.currentUser.toKey()];m||(m=new Je(Se)),m=m.insert(d,f),l.qa[l.currentUser.toKey()]=m}(n,s.batchId,t),await yi(n,s.changes),await au(n.remoteStore)}catch(s){const a=lu(s,"Failed to persist write");t.reject(a)}}async function FT(r,e){const t=re(r);try{const n=await pk(t.localStore,e);e.targetChanges.forEach((s,a)=>{const l=t.Ba.get(a);l&&(ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?l.Fa=!0:s.modifiedDocuments.size>0?ce(l.Fa):s.removedDocuments.size>0&&(ce(l.Fa),l.Fa=!1))}),await yi(t,n,e)}catch(n){await ms(n)}}function $w(r,e,t){const n=re(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.xa.forEach((a,l)=>{const d=l.view.ea(e);d.snapshot&&s.push(d.snapshot)}),function(l,d){const f=re(l);f.onlineState=d;let m=!1;f.queries.forEach((v,w)=>{for(const T of w.J_)T.ea(d)&&(m=!0)}),m&&Sg(f)}(n.eventManager,e),s.length&&n.Ma.R_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Yk(r,e,t){const n=re(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ba.get(e),a=s&&s.key;if(a){let l=new Je(te.comparator);l=l.insert(a,Ze.newNoDocument(a,pe.min()));const d=Ae().add(a),f=new uc(pe.min(),new Map,new Je(Se),l,d);await FT(n,f),n.La=n.La.remove(a),n.Ba.delete(e),Cg(n)}else await Ga(n.localStore,e,!1).then(()=>Qa(n,e,t)).catch(ms)}async function Xk(r,e){const t=re(r),n=e.batch.batchId;try{const s=await fk(t.localStore,e);kg(t,n,null),Pg(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await yi(t,s)}catch(s){await ms(s)}}async function Zk(r,e,t){const n=re(r);try{const s=await function(l,d){const f=re(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next(w=>(ce(w!==null),v=w.keys(),f.mutationQueue.removeMutationBatch(m,w))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(n.localStore,e);kg(n,e,t),Pg(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await yi(n,s)}catch(s){await ms(s)}}async function eC(r,e){const t=re(r);ys(t.remoteStore)||Q("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(l){const d=re(l);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",f=>d.mutationQueue.getHighestUnacknowledgedBatchId(f))}(t.localStore);if(n===-1)return void e.resolve();const s=t.Qa.get(n)||[];s.push(e),t.Qa.set(n,s)}catch(n){const s=lu(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Pg(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function kg(r,e,t){const n=re(r);let s=n.qa[n.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),n.qa[n.currentUser.toKey()]=s}}function Qa(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||UT(r,n)})}function UT(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Ka(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),Cg(r))}function Pm(r,e,t){for(const n of t)n instanceof xT?(r.ka.addReference(n.key,e),tC(r,n)):n instanceof OT?(Q("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||UT(r,n.key)):se()}function tC(r,e){const t=e.key,n=t.path.canonicalString();r.La.get(t)||r.Na.has(n)||(Q("SyncEngine","New document in limbo: "+t),r.Na.add(n),Cg(r))}function Cg(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new te(De.fromString(e)),n=r.Ka.next();r.Ba.set(n,new $k(t)),r.La=r.La.insert(t,n),Ud(r.remoteStore,new si(mn(ru(t.path)),n,"TargetPurposeLimboResolution",Rn.oe))}}async function yi(r,e,t){const n=re(r),s=[],a=[],l=[];n.xa.isEmpty()||(n.xa.forEach((d,f)=>{l.push(n.Ua(f,e,t).then(m=>{var v;if((m||t)&&n.isPrimaryClient){const w=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;n.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(m){s.push(m);const w=mg.zi(f.targetId,m);a.push(w)}}))}),await Promise.all(l),n.Ma.R_(s),await async function(f,m){const v=re(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>L.forEach(m,T=>L.forEach(T.Wi,V=>v.persistence.referenceDelegate.addReference(w,T.targetId,V)).next(()=>L.forEach(T.Gi,V=>v.persistence.referenceDelegate.removeReference(w,T.targetId,V)))))}catch(w){if(!gs(w))throw w;Q("LocalStore","Failed to update sequence numbers: "+w)}for(const w of m){const T=w.targetId;if(!w.fromCache){const V=v.us.get(T),W=V.snapshotVersion,$=V.withLastLimboFreeSnapshotVersion(W);v.us=v.us.insert(T,$)}}}(n.localStore,a))}async function nC(r,e){const t=re(r);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const n=await vT(t.localStore,e);t.currentUser=e,function(a,l){a.Qa.forEach(d=>{d.forEach(f=>{f.reject(new K(z.CANCELLED,l))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await yi(t,n.Ts)}}function rC(r,e){const t=re(r),n=t.Ba.get(e);if(n&&n.Fa)return Ae().add(n.key);{let s=Ae();const a=t.Oa.get(e);if(!a)return s;for(const l of a){const d=t.xa.get(l);s=s.unionWith(d.view.fa)}return s}}async function iC(r,e){const t=re(r),n=await _d(t.localStore,e.query,!0),s=e.view.va(n);return t.isPrimaryClient&&Pm(t,e.targetId,s.ba),s}async function sC(r,e){const t=re(r);return TT(t.localStore,e).then(n=>yi(t,n))}async function oC(r,e,t,n){const s=re(r),a=await function(d,f){const m=re(d),v=re(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",w=>v.On(w,f).next(T=>T?m.localDocuments.getDocuments(w,T):L.resolve(null)))}(s.localStore,e);a!==null?(t==="pending"?await au(s.remoteStore):t==="acknowledged"||t==="rejected"?(kg(s,e,n||null),Pg(s,e),function(d,f){re(re(d).mutationQueue).Ln(f)}(s.localStore,e)):se(),await yi(s,a)):Q("SyncEngine","Cannot apply mutation batch with id: "+e)}async function aC(r,e){const t=re(r);if(Bd(t),bg(t),e===!0&&t.$a!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Ww(t,n.toArray());t.$a=!0,await Am(t.remoteStore,!0);for(const a of s)Ud(t.remoteStore,a)}else if(e===!1&&t.$a!==!1){const n=[];let s=Promise.resolve();t.Oa.forEach((a,l)=>{t.sharedClientState.isLocalQueryTarget(l)?n.push(l):s=s.then(()=>(Qa(t,l),Ga(t.localStore,l,!0))),Ka(t.remoteStore,l)}),await s,await Ww(t,n),function(l){const d=re(l);d.Ba.forEach((f,m)=>{Ka(d.remoteStore,m)}),d.ka.wr(),d.Ba=new Map,d.La=new Je(te.comparator)}(t),t.$a=!1,await Am(t.remoteStore,!1)}}async function Ww(r,e,t){const n=re(r),s=[],a=[];for(const l of e){let d;const f=n.Oa.get(l);if(f&&f.length!==0){d=await Wa(n.localStore,mn(f[0]));for(const m of f){const v=n.xa.get(m),w=await iC(n,v);w.snapshot&&a.push(w.snapshot)}}else{const m=await ET(n.localStore,l);d=await Wa(n.localStore,m),await Rg(n,BT(m),l,!1,d.resumeToken)}s.push(d)}return n.Ma.R_(a),s}function BT(r){return PE(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function uC(r){return function(t){return re(re(t).persistence).$i()}(re(r).localStore)}async function lC(r,e,t,n){const s=re(r);if(s.$a)return void Q("SyncEngine","Ignoring unexpected query state notification.");const a=s.Oa.get(e);if(a&&a.length>0)switch(t){case"current":case"not-current":{const l=await TT(s.localStore,CE(a[0])),d=uc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",pt.EMPTY_BYTE_STRING);await yi(s,l,d);break}case"rejected":await Ga(s.localStore,e,!0),Qa(s,e,n);break;default:se()}}async function cC(r,e,t){const n=Bd(r);if(n.$a){for(const s of e){if(n.Oa.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){Q("SyncEngine","Adding an already active target "+s);continue}const a=await ET(n.localStore,s),l=await Wa(n.localStore,a);await Rg(n,BT(a),l.targetId,!1,l.resumeToken),Ud(n.remoteStore,l)}for(const s of t)n.Oa.has(s)&&await Ga(n.localStore,s,!1).then(()=>{Ka(n.remoteStore,s),Qa(n,s)}).catch(ms)}}function Bd(r){const e=re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=FT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yk.bind(null,e),e.Ma.R_=Uk.bind(null,e.eventManager),e.Ma.Wa=Bk.bind(null,e.eventManager),e}function bg(r){const e=re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zk.bind(null,e),e}function hC(r,e,t){const n=re(r);(async function(a,l,d){try{const f=await l.getMetadata();if(await function(V,W){const $=re(V),q=It(W.createTime);return $.persistence.runTransaction("hasNewerBundle","readonly",fe=>$.jr.getBundleMetadata(fe,W.id)).then(fe=>!!fe&&fe.createTime.compareTo(q)>=0)}(a.localStore,f))return await l.close(),d._completeWith(function(V){return{taskState:"Success",documentsLoaded:V.totalDocuments,bytesLoaded:V.totalBytes,totalDocuments:V.totalDocuments,totalBytes:V.totalBytes}}(f)),Promise.resolve(new Set);d._updateProgress(VT(f));const m=new jk(f,a.localStore,l.serializer);let v=await l.Ga();for(;v;){const T=await m.Pa(v);T&&d._updateProgress(T),v=await l.Ga()}const w=await m.complete();return await yi(a,w.Ea,void 0),await function(V,W){const $=re(V);return $.persistence.runTransaction("Save bundle","readwrite",q=>$.jr.saveBundleMetadata(q,W))}(a.localStore,f),d._completeWith(w.progress),Promise.resolve(w.Ia)}catch(f){return Lr("SyncEngine",`Loading bundle failed with ${f}`),d._failWith(f),Promise.resolve(new Set)}})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return yT(this.persistence,new _T,e.initialUser,this.serializer)}ja(e){return new dg(Fd.ei,this.serializer)}za(e){return new AT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kl.provider={build:()=>new Kl};class dC extends Kl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ce(this.persistence.referenceDelegate instanceof gd);const n=this.persistence.referenceDelegate.garbageCollector;return new dT(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new dg(n=>gd.ei(n,t),this.serializer)}}class zT extends Kl{constructor(e,t,n){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await bg(this.Za.syncEngine),await au(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return yT(this.persistence,new _T,e.initialUser,this.serializer)}Ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new dT(n,e.asyncQueue,t)}Ya(e,t){const n=new NP(t,this.persistence);return new DP(e.asyncQueue,n)}ja(e){const t=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new fg(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,RT(),td(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new AT}}class fC extends zT{constructor(e,t){super(e,t,!1),this.Za=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Za.syncEngine;this.sharedClientState instanceof Jp&&(this.sharedClientState.syncEngine={io:oC.bind(null,t),so:lC.bind(null,t),oo:cC.bind(null,t),$i:uC.bind(null,t),ro:sC.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Si(async n=>{await aC(this.Za.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}za(e){const t=RT();if(!Jp.p(t))throw new K(z.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=pg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Jp(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Hl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>$w(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=nC.bind(null,this.syncEngine),await Am(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fk}()}createDatastore(e){const t=cc(e.databaseInfo.databaseId),n=function(a){return new Ik(a)}(e.databaseInfo);return function(a,l,d,f){return new Sk(a,l,d,f)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,a,l,d){return new Rk(n,s,a,l,d)}(this.localStore,this.datastore,e.asyncQueue,t=>$w(this.syncEngine,t,0),function(){return Fw.p()?new Fw:new yk}())}createSyncEngine(e,t){return function(s,a,l,d,f,m,v){const w=new Wk(s,a,l,d,f,m);return v&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=re(s);Q("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await ou(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Hl.provider={build:()=>new Hl};function Gw(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,t){this.tu=e,this.serializer=t,this.metadata=new Qt,this.buffer=new Uint8Array,this.nu=function(){return new TextDecoder("utf-8")}(),this.ru().then(n=>{n&&n.la()?this.metadata.resolve(n.ca.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.ca)}`))},n=>this.metadata.reject(n))}close(){return this.tu.cancel()}async getMetadata(){return this.metadata.promise}async Ga(){return await this.getMetadata(),this.ru()}async ru(){const e=await this.iu();if(e===null)return null;const t=this.nu.decode(e),n=Number(t);isNaN(n)&&this.su(`length string (${t}) is not valid number`);const s=await this.ou(n);return new zk(JSON.parse(s),e.length+n)}_u(){return this.buffer.findIndex(e=>e===123)}async iu(){for(;this._u()<0&&!await this.au(););if(this.buffer.length===0)return null;const e=this._u();e<0&&this.su("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ou(e){for(;this.buffer.length<e;)await this.au()&&this.su("Reached the end of bundle when more is expected.");const t=this.nu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}su(e){throw this.tu.cancel(),new Error(`Invalid bundle format: ${e}`)}async au(){const e=await this.tu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(z.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,a){const l=re(s),d={documents:a.map(w=>Wl(l.serializer,w))},f=await l.ko("BatchGetDocuments",l.serializer.databaseId,De.emptyPath(),d,a.length),m=new Map;f.forEach(w=>{const T=D1(l.serializer,w);m.set(T.key.toString(),T)});const v=[];return a.forEach(w=>{const T=m.get(w.toString());ce(!!T),v.push(T)}),v}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new su(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=te.fromPath(n);this.mutations.push(new ng(s,this.precondition(s)))}),await async function(n,s){const a=re(n),l={writes:s.map(d=>Gl(a.serializer,d))};await a.Oo("Commit",a.serializer.databaseId,De.emptyPath(),l)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw se();t=pe.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new K(z.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(pe.min())?st.exists(!1):st.updateTime(t):st.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(pe.min()))throw new K(z.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return st.updateTime(t)}return st.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,t,n,s,a){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=a,this.uu=n.maxAttempts,this.r_=new _g(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new mC(this.datastore),t=this.hu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Pu(s)}))}).catch(n=>{this.Pu(n)})})}hu(e){try{const t=this.updateFunction(e);return!rc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!jE(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,t,n,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Bt.UNAUTHENTICATED,this.clientId=rE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,async l=>{Q("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(n,l=>(Q("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=lu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Xp(r,e){r.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await vT(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Kw(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Dg(r);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Uw(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Uw(e.remoteStore,s)),r._onlineComponents=e}async function Dg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xp(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await Xp(r,new Kl)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Xp(r,new dC(void 0));return r._offlineComponents}async function jd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Kw(r,r._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Kw(r,new Hl))),r._onlineComponents}function jT(r){return Dg(r).then(e=>e.persistence)}function Ng(r){return Dg(r).then(e=>e.localStore)}function qT(r){return jd(r).then(e=>e.remoteStore)}function Vg(r){return jd(r).then(e=>e.syncEngine)}function yC(r){return jd(r).then(e=>e.datastore)}async function Ja(r){const e=await jd(r),t=e.eventManager;return t.onListen=Gk.bind(null,e.syncEngine),t.onUnlisten=Hk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Kk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Qk.bind(null,e.syncEngine),t}function vC(r){return r.asyncQueue.enqueue(async()=>{const e=await jT(r),t=await qT(r);return e.setNetworkEnabled(!0),function(s){const a=re(s);return a.k_.delete(0),hc(a)}(t)})}function wC(r){return r.asyncQueue.enqueue(async()=>{const e=await jT(r),t=await qT(r);return e.setNetworkEnabled(!1),async function(s){const a=re(s);a.k_.add(0),await ou(a),a.K_.set("Offline")}(t)})}function IC(r,e){const t=new Qt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,a,l){try{const d=await function(m,v){const w=re(m);return w.persistence.runTransaction("read document","readonly",T=>w.localDocuments.getDocument(T,v))}(s,a);d.isFoundDocument()?l.resolve(d):d.isNoDocument()?l.resolve(null):l.reject(new K(z.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const f=lu(d,`Failed to get document '${a} from cache`);l.reject(f)}}(await Ng(r),e,t)),t.promise}function $T(r,e,t={}){const n=new Qt;return r.asyncQueue.enqueueAndForget(async()=>function(a,l,d,f,m){const v=new zd({next:T=>{v.eu(),l.enqueueAndForget(()=>Tg(a,w));const V=T.docs.has(d);!V&&T.fromCache?m.reject(new K(z.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&T.fromCache&&f&&f.source==="server"?m.reject(new K(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(T)},error:T=>m.reject(T)}),w=new Ag(ru(d.path),v,{includeMetadataChanges:!0,ua:!0});return Eg(a,w)}(await Ja(r),r.asyncQueue,e,t,n)),n.promise}function EC(r,e){const t=new Qt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,a,l){try{const d=await _d(s,a,!0),f=new LT(a,d.ds),m=f.ga(d.documents),v=f.applyChanges(m,!1);l.resolve(v.snapshot)}catch(d){const f=lu(d,`Failed to execute query '${a} against cache`);l.reject(f)}}(await Ng(r),e,t)),t.promise}function WT(r,e,t={}){const n=new Qt;return r.asyncQueue.enqueueAndForget(async()=>function(a,l,d,f,m){const v=new zd({next:T=>{v.eu(),l.enqueueAndForget(()=>Tg(a,w)),T.fromCache&&f.source==="server"?m.reject(new K(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),w=new Ag(d,v,{includeMetadataChanges:!0,ua:!0});return Eg(a,w)}(await Ja(r),r.asyncQueue,e,t,n)),n.promise}function TC(r,e){const t=new zd(e);return r.asyncQueue.enqueueAndForget(async()=>function(s,a){re(s).X_.add(a),a.next()}(await Ja(r),t)),()=>{t.eu(),r.asyncQueue.enqueueAndForget(async()=>function(s,a){re(s).X_.delete(a)}(await Ja(r),t))}}function SC(r,e,t,n){const s=function(l,d){let f;return f=typeof l=="string"?$E().encode(l):l,function(v,w){return new pC(v,w)}(function(v,w){if(v instanceof Uint8Array)return Gw(v,w);if(v instanceof ArrayBuffer)return Gw(new Uint8Array(v),w);if(v instanceof ReadableStream)return v.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(f),d)}(t,cc(e));r.asyncQueue.enqueueAndForget(async()=>{hC(await Vg(r),s,n)})}function AC(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){const a=re(n);return a.persistence.runTransaction("Get named query","readonly",l=>a.jr.getNamedQuery(l,s))}(await Ng(r),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(r,e,t){if(!t)throw new K(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function KT(r,e,t,n){if(e===!0&&n===!0)throw new K(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Qw(r){if(!te.isDocumentKey(r))throw new K(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Jw(r){if(te.isDocumentKey(r))throw new K(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function qd(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":se()}function Ue(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new K(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qd(r);throw new K(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function HT(r,e){if(e<=0)throw new K(z.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GT((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new K(z.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wP;switch(n.type){case"firstParty":return new SP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Hw.get(t);n&&(Q("ComponentProvider","Removing Datastore"),Hw.delete(t),n.terminate())}(this),Promise.resolve()}}function RC(r,e,t,n={}){var s;const a=(r=Ue(r,dc))._getSettings(),l=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),n.mockUserToken){let d,f;if(typeof n.mockUserToken=="string")d=n.mockUserToken,f=Bt.MOCK_USER;else{d=BA(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new K(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Bt(m)}r._authCredentials=new IP(new nE(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn=class QT{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new QT(this.firestore,e,this._query)}},lt=class JT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new JT(this.firestore,e,this._key)}},ts=class YT extends gn{constructor(e,t,n){super(e,t,ru(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new te(e))}withConverter(e){return new YT(this.firestore,e,this._path)}};function XT(r,e,...t){if(r=ve(r),xg("collection","path",e),r instanceof dc){const n=De.fromString(e,...t);return Jw(n),new ts(r,null,n)}{if(!(r instanceof lt||r instanceof ts))throw new K(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(De.fromString(e,...t));return Jw(n),new ts(r.firestore,null,n)}}function PC(r,e){if(r=Ue(r,dc),xg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new K(z.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gn(r,null,function(n){return new mi(De.emptyPath(),n)}(e))}function Id(r,e,...t){if(r=ve(r),arguments.length===1&&(e=rE.newId()),xg("doc","path",e),r instanceof dc){const n=De.fromString(e,...t);return Qw(n),new lt(r,null,new te(n))}{if(!(r instanceof lt||r instanceof ts))throw new K(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(De.fromString(e,...t));return Qw(n),new lt(r.firestore,r instanceof ts?r.converter:null,new te(n))}}function ZT(r,e){return r=ve(r),e=ve(e),(r instanceof lt||r instanceof ts)&&(e instanceof lt||e instanceof ts)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Og(r,e){return r=ve(r),e=ve(e),r instanceof gn&&e instanceof gn&&r.firestore===e.firestore&&sc(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new _g(this,"async_queue_retry"),this.fu=()=>{const n=td();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=td();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=td();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Qt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!gs(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const s=function(l){let d=l.message||"";return l.stack&&(d=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),d}(n);throw wt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Ig.createAndSchedule(this,e,t,n,a=>this.Su(a));return this.du.push(s),s}pu(){this.Au&&se()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function km(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of n)if(a in s&&typeof s[a]=="function")return!0;return!1}(r,["next","error","complete"])}class kC{constructor(){this._progressObserver={},this._taskCompletionResolver=new Qt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=-1;let Et=class extends dc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Xw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xw(e),this._firestoreClient=void 0,await e}}};function an(r){if(r._terminated)throw new K(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||e0(r),r._firestoreClient}function e0(r){var e,t,n;const s=r._freezeSettings(),a=function(d,f,m,v){return new e1(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,GT(v.experimentalLongPollingOptions),v.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new _C(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(r._componentsProvider))}function bC(r,e){Lr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return t0(r,Hl.provider,{build:n=>new zT(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function DC(r){Lr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();t0(r,Hl.provider,{build:t=>new fC(t,e.cacheSizeBytes)})}function t0(r,e,t){if((r=Ue(r,Et))._firestoreClient||r._terminated)throw new K(z.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new K(z.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},e0(r)}function NC(r){if(r._initialized&&!r._terminated)throw new K(z.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Qt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Vr.p())return Promise.resolve();const s=n+"main";await Vr.delete(s)}(pg(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function VC(r){return function(t){const n=new Qt;return t.asyncQueue.enqueueAndForget(async()=>eC(await Vg(t),n)),n.promise}(an(r=Ue(r,Et)))}function xC(r){return vC(an(r=Ue(r,Et)))}function OC(r){return wC(an(r=Ue(r,Et)))}function LC(r,e){const t=an(r=Ue(r,Et)),n=new kC;return SC(t,r._databaseId,e,n),n}function MC(r,e){return AC(an(r=Ue(r,Et)),e).then(t=>t?new gn(r,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fr(pt.fromBase64String(e))}catch(t){throw new K(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fr(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=/^__.*__$/;class UC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,t,this.fieldTransforms):new iu(e,this.data,t,this.fieldTransforms)}}class n0{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function r0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Wd{constructor(e,t,n,s,a,l){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Lu(e),s}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ed(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(r0(this.Mu)&&FC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class BC{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||cc(e)}$u(e,t,n,s=!1){return new Wd({Mu:e,methodName:t,Ku:n,path:it.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eo(r){const e=r._freezeSettings(),t=cc(r._databaseId);return new BC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Gd(r,e,t,n,s,a={}){const l=r.$u(a.merge||a.mergeFields?2:0,e,t,s);qg("Data must be an object, but it was:",l,n);const d=o0(n,l);let f,m;if(a.merge)f=new Pn(l.fieldMask),m=l.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=Cm(e,w,t);if(!l.contains(T))throw new K(z.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);u0(v,T)||v.push(T)}f=new Pn(v),m=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,m=l.fieldTransforms;return new UC(new Ht(d),f,m)}class fc extends Io{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fc}}function i0(r,e,t){return new Wd({Mu:3,Ku:e.settings.Ku,methodName:r._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Mg extends Io{_toFieldTransform(e){return new ac(e.path,new ja)}isEqual(e){return e instanceof Mg}}class Fg extends Io{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=i0(this,e,!0),n=this.Uu.map(a=>To(a,t)),s=new co(n);return new ac(e.path,s)}isEqual(e){return e instanceof Fg&&Ol(this.Uu,e.Uu)}}class Ug extends Io{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=i0(this,e,!0),n=this.Uu.map(a=>To(a,t)),s=new ho(n);return new ac(e.path,s)}isEqual(e){return e instanceof Ug&&Ol(this.Uu,e.Uu)}}class Bg extends Io{constructor(e,t){super(e),this.Wu=t}_toFieldTransform(e){const t=new qa(e.serializer,OE(e.serializer,this.Wu));return new ac(e.path,t)}isEqual(e){return e instanceof Bg&&this.Wu===e.Wu}}function zg(r,e,t,n){const s=r.$u(1,e,t);qg("Data must be an object, but it was:",s,n);const a=[],l=Ht.empty();_s(n,(f,m)=>{const v=$g(e,f,t);m=ve(m);const w=s.Bu(v);if(m instanceof fc)a.push(v);else{const T=To(m,w);T!=null&&(a.push(v),l.set(v,T))}});const d=new Pn(a);return new n0(l,d,s.fieldTransforms)}function jg(r,e,t,n,s,a){const l=r.$u(1,e,t),d=[Cm(e,n,t)],f=[s];if(a.length%2!=0)throw new K(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(Cm(e,a[T])),f.push(a[T+1]);const m=[],v=Ht.empty();for(let T=d.length-1;T>=0;--T)if(!u0(m,d[T])){const V=d[T];let W=f[T];W=ve(W);const $=l.Bu(V);if(W instanceof fc)m.push(V);else{const q=To(W,$);q!=null&&(m.push(V),v.set(V,q))}}const w=new Pn(m);return new n0(v,w,l.fieldTransforms)}function s0(r,e,t,n=!1){return To(t,r.$u(n?4:3,e))}function To(r,e){if(a0(r=ve(r)))return qg("Unsupported field value:",e,r),o0(r,e);if(r instanceof Io)return function(n,s){if(!r0(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const a=n._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,s){const a=[];let l=0;for(const d of n){let f=To(d,s.ku(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(r,e)}return function(n,s){if((n=ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return OE(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const a=ot.fromDate(n);return{timestampValue:$a(s.serializer,a)}}if(n instanceof ot){const a=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$a(s.serializer,a)}}if(n instanceof $d)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fr)return{bytesValue:KE(s.serializer,n._byteString)};if(n instanceof lt){const a=s.databaseId,l=n.firestore._databaseId;if(!l.isEqual(a))throw s.qu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:ag(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Lg)return function(l,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw d.qu("VectorValues must only contain numeric values.");return tg(d.serializer,f)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${qd(n)}`)}(r,e)}function o0(r,e){const t={};return mE(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(r,(n,s)=>{const a=To(s,e.Ou(n));a!=null&&(t[n]=a)}),{mapValue:{fields:t}}}function a0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof $d||r instanceof Fr||r instanceof lt||r instanceof Io||r instanceof Lg)}function qg(r,e,t){if(!a0(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=qd(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function Cm(r,e,t){if((e=ve(e))instanceof ds)return e._internalPath;if(typeof e=="string")return $g(r,e);throw Ed("Field path arguments must be of type string or ",r,!1,void 0,t)}const zC=new RegExp("[~\\*/\\[\\]]");function $g(r,e,t){if(e.search(zC)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ds(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ed(r,e,t,n,s){const a=n&&!n.isEmpty(),l=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${n}`),l&&(f+=` in document ${s}`),f+=")"),new K(z.INVALID_ARGUMENT,d+r+f)}function u0(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,n,s,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jC extends Ql{data(){return super.data()}}function Kd(r,e){return typeof e=="string"?$g(r,e):e instanceof ds?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new K(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wg{}class pc extends Wg{}function Hi(r,e,...t){let n=[];e instanceof Wg&&n.push(e),n=n.concat(t),function(a){const l=a.filter(f=>f instanceof Gg).length,d=a.filter(f=>f instanceof Hd).length;if(l>1||l>0&&d>0)throw new K(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Hd extends pc{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Hd(e,t,n)}_apply(e){const t=this._parse(e);return h0(e._query,t),new gn(e.firestore,e.converter,gm(e._query,t))}_parse(e){const t=Eo(e.firestore);return function(a,l,d,f,m,v,w){let T;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new K(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){eI(w,v);const V=[];for(const W of w)V.push(Zw(f,a,W));T={arrayValue:{values:V}}}else T=Zw(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||eI(w,v),T=s0(d,l,w,v==="in"||v==="not-in");return Ne.create(m,v,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qC(r,e,t){const n=e,s=Kd("where",r);return Hd._create(s,n,t)}class Gg extends Wg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gg(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let l=s;const d=a.getFlattenedFilters();for(const f of d)h0(l,f),l=gm(l,f)}(e._query,t),new gn(e.firestore,e.converter,gm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kg extends pc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Kg(e,t)}_apply(e){const t=function(s,a,l){if(s.startAt!==null)throw new K(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $l(a,l)}(e._query,this._field,this._direction);return new gn(e.firestore,e.converter,function(s,a){const l=s.explicitOrderBy.concat([a]);return new mi(s.path,s.collectionGroup,l,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function $C(r,e="asc"){const t=e,n=Kd("orderBy",r);return Kg._create(n,t)}class Qd extends pc{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Qd(e,t,n)}_apply(e){return new gn(e.firestore,e.converter,dd(e._query,this._limit,this._limitType))}}function WC(r){return HT("limit",r),Qd._create("limit",r,"F")}function GC(r){return HT("limitToLast",r),Qd._create("limitToLast",r,"L")}class Jd extends pc{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Jd(e,t,n)}_apply(e){const t=c0(e,this.type,this._docOrFields,this._inclusive);return new gn(e.firestore,e.converter,function(s,a){return new mi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,a,s.endAt)}(e._query,t))}}function KC(...r){return Jd._create("startAt",r,!0)}function HC(...r){return Jd._create("startAfter",r,!1)}class Yd extends pc{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Yd(e,t,n)}_apply(e){const t=c0(e,this.type,this._docOrFields,this._inclusive);return new gn(e.firestore,e.converter,function(s,a){return new mi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,a)}(e._query,t))}}function QC(...r){return Yd._create("endBefore",r,!1)}function JC(...r){return Yd._create("endAt",r,!0)}function c0(r,e,t,n){if(t[0]=ve(t[0]),t[0]instanceof Ql)return function(a,l,d,f,m){if(!f)throw new K(z.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const v=[];for(const w of Da(a))if(w.field.isKeyField())v.push(uo(l,f.key));else{const T=f.data.field(w.field);if(Dd(T))throw new K(z.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+w.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(T===null){const V=w.field.canonicalString();throw new K(z.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${V}' (used as the orderBy) does not exist.`)}v.push(T)}return new cs(v,m)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Eo(r.firestore);return function(l,d,f,m,v,w){const T=l.explicitOrderBy;if(v.length>T.length)throw new K(z.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const V=[];for(let W=0;W<v.length;W++){const $=v[W];if(T[W].field.isKeyField()){if(typeof $!="string")throw new K(z.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof $}`);if(!Zm(l)&&$.indexOf("/")!==-1)throw new K(z.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${$}' contains a slash.`);const q=l.path.child(De.fromString($));if(!te.isDocumentKey(q))throw new K(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${q}' is not because it contains an odd number of segments.`);const fe=new te(q);V.push(uo(d,fe))}else{const q=s0(f,m,$);V.push(q)}}return new cs(V,w)}(r._query,r.firestore._databaseId,s,e,t,n)}}function Zw(r,e,t){if(typeof(t=ve(t))=="string"){if(t==="")throw new K(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zm(e)&&t.indexOf("/")!==-1)throw new K(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(De.fromString(t));if(!te.isDocumentKey(n))throw new K(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return uo(r,new te(n))}if(t instanceof lt)return uo(r,t._key);throw new K(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qd(t)}.`)}function eI(r,e){if(!Array.isArray(r)||r.length===0)throw new K(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function h0(r,e){const t=function(s,a){for(const l of s)for(const d of l.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Hg{convertValue(e,t="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return _s(e,(s,a)=>{n[s]=this.convertValue(a,t)}),n}convertVectorValue(e){var t,n,s;const a=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(l=>rt(l.doubleValue));return new Lg(a)}convertGeoPoint(e){return new $d(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Nd(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(zl(e));default:return null}}convertTimestamp(e){const t=hi(e);return new ot(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=De.fromString(e);ce(iT(n));const s=new as(n.get(1),n.get(3)),a=new te(n.popFirst(5));return s.isEqual(t)||wt(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class YC extends Hg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let fi=class extends Ql{constructor(e,t,n,s,a,l){super(e,t,n,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new kl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},kl=class extends fi{data(e={}){return super.data(e)}},fs=class{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new no(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new kl(this._firestore,this._userDataWriter,n.key,n,new no(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map(d=>{const f=new kl(s._firestore,s._userDataWriter,d.doc.key,d.doc,new no(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new kl(s._firestore,s._userDataWriter,d.doc.key,d.doc,new no(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=l.indexOf(d.doc.key),l=l.delete(d.doc.key)),d.type!==1&&(l=l.add(d.doc),v=l.indexOf(d.doc.key)),{type:XC(d.type),doc:f,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function XC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}function d0(r,e){return r instanceof fi&&e instanceof fi?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof fs&&e instanceof fs&&r._firestore===e._firestore&&Og(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(r){r=Ue(r,lt);const e=Ue(r.firestore,Et);return $T(an(e),r._key).then(t=>Qg(e,r,t))}class So extends Hg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function eb(r){r=Ue(r,lt);const e=Ue(r.firestore,Et),t=an(e),n=new So(e);return IC(t,r._key).then(s=>new fi(e,n,r._key,s,new no(s!==null&&s.hasLocalMutations,!0),r.converter))}function tb(r){r=Ue(r,lt);const e=Ue(r.firestore,Et);return $T(an(e),r._key,{source:"server"}).then(t=>Qg(e,r,t))}function nb(r){r=Ue(r,gn);const e=Ue(r.firestore,Et),t=an(e),n=new So(e);return l0(r._query),WT(t,r._query).then(s=>new fs(e,n,r,s))}function rb(r){r=Ue(r,gn);const e=Ue(r.firestore,Et),t=an(e),n=new So(e);return EC(t,r._query).then(s=>new fs(e,n,r,s))}function ib(r){r=Ue(r,gn);const e=Ue(r.firestore,Et),t=an(e),n=new So(e);return WT(t,r._query,{source:"server"}).then(s=>new fs(e,n,r,s))}function tI(r,e,t){r=Ue(r,lt);const n=Ue(r.firestore,Et),s=Xd(r.converter,e,t);return mc(n,[Gd(Eo(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,st.none())])}function nI(r,e,t,...n){r=Ue(r,lt);const s=Ue(r.firestore,Et),a=Eo(s);let l;return l=typeof(e=ve(e))=="string"||e instanceof ds?jg(a,"updateDoc",r._key,e,t,n):zg(a,"updateDoc",r._key,e),mc(s,[l.toMutation(r._key,st.exists(!0))])}function sb(r){return mc(Ue(r.firestore,Et),[new su(r._key,st.none())])}function ob(r,e){const t=Ue(r.firestore,Et),n=Id(r),s=Xd(r.converter,e);return mc(t,[Gd(Eo(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,st.exists(!1))]).then(()=>n)}function Td(r,...e){var t,n,s;r=ve(r);let a={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||km(e[l])||(a=e[l],l++);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(km(e[l])){const w=e[l];e[l]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[l+1]=(n=w.error)===null||n===void 0?void 0:n.bind(w),e[l+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,m,v;if(r instanceof lt)m=Ue(r.firestore,Et),v=ru(r._key.path),f={next:w=>{e[l]&&e[l](Qg(m,r,w))},error:e[l+1],complete:e[l+2]};else{const w=Ue(r,gn);m=Ue(w.firestore,Et),v=w._query;const T=new So(m);f={next:V=>{e[l]&&e[l](new fs(m,T,w,V))},error:e[l+1],complete:e[l+2]},l0(r._query)}return function(T,V,W,$){const q=new zd($),fe=new Ag(V,q,W);return T.asyncQueue.enqueueAndForget(async()=>Eg(await Ja(T),fe)),()=>{q.eu(),T.asyncQueue.enqueueAndForget(async()=>Tg(await Ja(T),fe))}}(an(m),v,d,f)}function ab(r,e){return TC(an(r=Ue(r,Et)),km(e)?e:{next:e})}function mc(r,e){return function(n,s){const a=new Qt;return n.asyncQueue.enqueueAndForget(async()=>Jk(await Vg(n),s,a)),a.promise}(an(r),e)}function Qg(r,e,t){const n=t.docs.get(e._key),s=new So(r);return new fi(r,s,e._key,n,new no(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lb=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Eo(e)}set(e,t,n){this._verifyNotCommitted();const s=Yi(e,this._firestore),a=Xd(s.converter,t,n),l=Gd(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,n);return this._mutations.push(l.toMutation(s._key,st.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const a=Yi(e,this._firestore);let l;return l=typeof(t=ve(t))=="string"||t instanceof ds?jg(this._dataReader,"WriteBatch.update",a._key,t,n,s):zg(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(l.toMutation(a._key,st.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Yi(e,this._firestore);return this._mutations=this._mutations.concat(new su(t._key,st.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(z.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Yi(r,e){if((r=ve(r)).firestore!==e)throw new K(z.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cb=class extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=Eo(t)}get(t){const n=Yi(t,this._firestore),s=new YC(this._firestore);return this._transaction.lookup([n._key]).then(a=>{if(!a||a.length!==1)return se();const l=a[0];if(l.isFoundDocument())return new Ql(this._firestore,s,l.key,l,n.converter);if(l.isNoDocument())return new Ql(this._firestore,s,n._key,null,n.converter);throw se()})}set(t,n,s){const a=Yi(t,this._firestore),l=Xd(a.converter,n,s),d=Gd(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,s);return this._transaction.set(a._key,d),this}update(t,n,s,...a){const l=Yi(t,this._firestore);let d;return d=typeof(n=ve(n))=="string"||n instanceof ds?jg(this._dataReader,"Transaction.update",l._key,n,s,a):zg(this._dataReader,"Transaction.update",l._key,n),this._transaction.update(l._key,d),this}delete(t){const n=Yi(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Yi(e,this._firestore),n=new So(this._firestore);return super.get(e).then(s=>new fi(this._firestore,n,t._key,s._document,new no(!1,!1),t.converter))}};function hb(r,e,t){r=Ue(r,Et);const n=Object.assign(Object.assign({},ub),t);return function(a){if(a.maxAttempts<1)throw new K(z.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(a,l,d){const f=new Qt;return a.asyncQueue.enqueueAndForget(async()=>{const m=await yC(a);new gC(a.asyncQueue,m,d,l,f).cu()}),f.promise}(an(r),s=>e(new cb(r,s)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(){return new fc("deleteField")}function fb(){return new Mg("serverTimestamp")}function pb(...r){return new Fg("arrayUnion",r)}function mb(...r){return new Ug("arrayRemove",r)}function gb(r){return new Bg("increment",r)}(function(e,t=!0){(function(s){nu=s})(ps),ss(new Or("firestore",(n,{instanceIdentifier:s,options:a})=>{const l=n.getProvider("app").getImmediate(),d=new Et(new EP(n.getProvider("auth-internal")),new RP(n.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new K(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(m.options.projectId,v)}(l,s),l);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),fr(Gv,"4.7.5",e),fr(Gv,"4.7.5","esm2017")})();const _b="@firebase/firestore-compat",yb="0.3.40";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new K("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){if(typeof Uint8Array>"u")throw new K("unimplemented","Uint8Arrays are not available in this environment.")}function iI(){if(!XP())throw new K("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Jl{constructor(e){this._delegate=e}static fromBase64String(e){return iI(),new Jl(Fr.fromBase64String(e))}static fromUint8Array(e){return rI(),new Jl(Fr.fromUint8Array(e))}toBase64(){return iI(),this._delegate.toBase64()}toUint8Array(){return rI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(r){return vb(r,["next","error","complete"])}function vb(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{enableIndexedDbPersistence(e,t){return bC(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return DC(e._delegate)}clearIndexedDbPersistence(e){return NC(e._delegate)}}class f0{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof as||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Lr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){RC(this._delegate,e,t,n)}enableNetwork(){return xC(this._delegate)}disableNetwork(){return OC(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,KT("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return VC(this._delegate)}onSnapshotsInSync(e){return ab(this._delegate,e)}get app(){if(!this._appCompat)throw new K("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ya(this,XT(this._delegate,e))}catch(t){throw fn(t,"collection()","Firestore.collection()")}}doc(e){try{return new Qn(this,Id(this._delegate,e))}catch(t){throw fn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new dn(this,PC(this._delegate,e))}catch(t){throw fn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return hb(this._delegate,t=>e(new p0(this,t)))}batch(){return an(this._delegate),new m0(new lb(this._delegate,e=>mc(this._delegate,e)))}loadBundle(e){return LC(this._delegate,e)}namedQuery(e){return MC(this._delegate,e).then(t=>t?new dn(this,t):null)}}class Zd extends Hg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jl(new Fr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Qn.forKey(t,this.firestore,null)}}function Ib(r){yP(r)}class p0{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Zd(e)}get(e){const t=ro(e);return this._delegate.get(t).then(n=>new Yl(this._firestore,new fi(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const s=ro(e);return n?(Jg("Transaction.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const a=ro(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,n,...s),this}delete(e){const t=ro(e);return this._delegate.delete(t),this}}class m0{constructor(e){this._delegate=e}set(e,t,n){const s=ro(e);return n?(Jg("WriteBatch.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const a=ro(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,n,...s),this}delete(e){const t=ro(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class go{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new kl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Xl(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=go.INSTANCES;let s=n.get(e);s||(s=new WeakMap,n.set(e,s));let a=s.get(t);return a||(a=new go(e,new Zd(e),t),s.set(t,a)),a}}go.INSTANCES=new WeakMap;class Qn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Zd(e)}static forPath(e,t,n){if(e.length%2!==0)throw new K("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qn(t,new lt(t._delegate,n,new te(e)))}static forKey(e,t,n){return new Qn(t,new lt(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Ya(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ya(this.firestore,XT(this._delegate,e))}catch(t){throw fn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ve(e),e instanceof lt?ZT(this._delegate,e):!1}set(e,t){t=Jg("DocumentReference.set",t);try{return t?tI(this._delegate,e,t):tI(this._delegate,e)}catch(n){throw fn(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?nI(this._delegate,e):nI(this._delegate,e,t,...n)}catch(s){throw fn(s,"updateDoc()","DocumentReference.update()")}}delete(){return sb(this._delegate)}onSnapshot(...e){const t=g0(e),n=_0(e,s=>new Yl(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Td(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=eb(this._delegate):(e==null?void 0:e.source)==="server"?t=tb(this._delegate):t=ZC(this._delegate),t.then(n=>new Yl(this.firestore,new fi(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new Qn(this.firestore,e?this._delegate.withConverter(go.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fn(r,e,t){return r.message=r.message.replace(e,t),r}function g0(r){for(const e of r)if(typeof e=="object"&&!bm(e))return e;return{}}function _0(r,e){var t,n;let s;return bm(r[0])?s=r[0]:bm(r[1])?s=r[1]:typeof r[0]=="function"?s={next:r[0],error:r[1],complete:r[2]}:s={next:r[1],error:r[2],complete:r[3]},{next:a=>{s.next&&s.next(e(a))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(n=s.complete)===null||n===void 0?void 0:n.bind(s)}}class Yl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Qn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return d0(this._delegate,e._delegate)}}class Xl extends Yl{data(e){const t=this._delegate.data(e);return this._delegate._converter||vP(t!==void 0),t}}class dn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Zd(e)}where(e,t,n){try{return new dn(this.firestore,Hi(this._delegate,qC(e,t,n)))}catch(s){throw fn(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new dn(this.firestore,Hi(this._delegate,$C(e,t)))}catch(n){throw fn(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new dn(this.firestore,Hi(this._delegate,WC(e)))}catch(t){throw fn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new dn(this.firestore,Hi(this._delegate,GC(e)))}catch(t){throw fn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new dn(this.firestore,Hi(this._delegate,KC(...e)))}catch(t){throw fn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new dn(this.firestore,Hi(this._delegate,HC(...e)))}catch(t){throw fn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new dn(this.firestore,Hi(this._delegate,QC(...e)))}catch(t){throw fn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new dn(this.firestore,Hi(this._delegate,JC(...e)))}catch(t){throw fn(t,"endAt()","Query.endAt()")}}isEqual(e){return Og(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=rb(this._delegate):(e==null?void 0:e.source)==="server"?t=ib(this._delegate):t=nb(this._delegate),t.then(n=>new Dm(this.firestore,new fs(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=g0(e),n=_0(e,s=>new Dm(this.firestore,new fs(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Td(this._delegate,t,n)}withConverter(e){return new dn(this.firestore,e?this._delegate.withConverter(go.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Eb{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Xl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Dm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new dn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Xl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Eb(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Xl(this._firestore,n))})}isEqual(e){return d0(this._delegate,e._delegate)}}class Ya extends dn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qn(this.firestore,e):null}doc(e){try{return e===void 0?new Qn(this.firestore,Id(this._delegate)):new Qn(this.firestore,Id(this._delegate,e))}catch(t){throw fn(t,"doc()","CollectionReference.doc()")}}add(e){return ob(this._delegate,e).then(t=>new Qn(this.firestore,t))}isEqual(e){return ZT(this._delegate,e._delegate)}withConverter(e){return new Ya(this.firestore,e?this._delegate.withConverter(go.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ro(r){return Ue(r,lt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(...e){this._delegate=new ds(...e)}static documentId(){return new Yg(it.keyField().canonicalString())}isEqual(e){return e=ve(e),e instanceof ds?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{static serverTimestamp(){const e=fb();return e._methodName="FieldValue.serverTimestamp",new to(e)}static delete(){const e=db();return e._methodName="FieldValue.delete",new to(e)}static arrayUnion(...e){const t=pb(...e);return t._methodName="FieldValue.arrayUnion",new to(t)}static arrayRemove(...e){const t=mb(...e);return t._methodName="FieldValue.arrayRemove",new to(t)}static increment(e){const t=gb(e);return t._methodName="FieldValue.increment",new to(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb={Firestore:f0,GeoPoint:$d,Timestamp:ot,Blob:Jl,Transaction:p0,WriteBatch:m0,DocumentReference:Qn,DocumentSnapshot:Yl,Query:dn,QueryDocumentSnapshot:Xl,QuerySnapshot:Dm,CollectionReference:Ya,FieldPath:Yg,FieldValue:to,setLogLevel:Ib,CACHE_SIZE_UNLIMITED:CC};function Sb(r,e){r.INTERNAL.registerComponent(new Or("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(n,s)},"PUBLIC").setServiceProps(Object.assign({},Tb)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(r){Sb(r,(e,t)=>new f0(e,t,new wb)),r.registerVersion(_b,yb)}Ab(Br);function Xg(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}const fl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ea={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function y0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pb=Rb,kb=y0,v0=new wo("auth","Firebase",y0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new Cd("@firebase/auth");function Cb(r,...e){Sd.logLevel<=be.WARN&&Sd.warn(`Auth (${ps}): ${r}`,...e)}function nd(r,...e){Sd.logLevel<=be.ERROR&&Sd.error(`Auth (${ps}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(r,...e){throw e_(r,...e)}function Nt(r,...e){return e_(r,...e)}function Zg(r,e,t){const n=Object.assign(Object.assign({},kb()),{[e]:t});return new wo("auth","Firebase",n).create(e,{appName:r.name})}function jt(r){return Zg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cu(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Jt(r,"argument-error"),Zg(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function e_(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return v0.create(r,...e)}function X(r,e,...t){if(!r)throw e_(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw nd(e),new Error(e)}function pr(r,e){r||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function t_(){return sI()==="http:"||sI()==="https:"}function sI(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t_()||VI()||"connection"in navigator)?navigator.onLine:!0}function Db(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.shortDelay=e,this.longDelay=t,pr(t>e,"Short delay should be less than long delay!"),this.isMobile=zA()||qm()}get(){return bb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(r,e){pr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new gc(3e4,6e4);function mt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function gt(r,e,t,n,s={}){return I0(r,s,async()=>{let a={},l={};n&&(e==="GET"?l=n:a={body:JSON.stringify(n)});const d=tu(Object.assign({key:r.config.apiKey},l)).slice(1),f=await r._getAdditionalHeaders();f["Content-Type"]="application/json",r.languageCode&&(f["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:f},a);return qA()||(m.referrerPolicy="no-referrer"),w0.fetch()(E0(r,r.config.apiHost,t,d),m)})}async function I0(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Nb),e);try{const s=new Ob(r),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw El(r,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const d=a.ok?l.errorMessage:l.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(r,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw El(r,"email-already-in-use",l);if(f==="USER_DISABLED")throw El(r,"user-disabled",l);const v=n[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Zg(r,v,m);Jt(r,v)}}catch(s){if(s instanceof pn)throw s;Jt(r,"network-request-failed",{message:String(s)})}}async function vi(r,e,t,n,s={}){const a=await gt(r,e,t,n,s);return"mfaPendingCredential"in a&&Jt(r,"multi-factor-auth-required",{_serverResponse:a}),a}function E0(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?n_(r.config,s):`${r.config.apiScheme}://${s}`}function xb(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ob{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Nt(this.auth,"network-request-failed")),Vb.get())})}}function El(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Nt(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(r){return r!==void 0&&r.getResponse!==void 0}function aI(r){return r!==void 0&&r.enterprise!==void 0}class T0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(r){return(await gt(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function S0(r,e){return gt(r,"GET","/v2/recaptchaConfig",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(r,e){return gt(r,"POST","/v1/accounts:delete",e)}async function Fb(r,e){return gt(r,"POST","/v1/accounts:update",e)}async function A0(r,e){return gt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ub(r,e=!1){const t=ve(r),n=await t.getIdToken(e),s=ef(n);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:Cl(Zp(s.auth_time)),issuedAtTime:Cl(Zp(s.iat)),expirationTime:Cl(Zp(s.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Zp(r){return Number(r)*1e3}function ef(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return nd("JWT malformed, contained fewer than 3 sections"),null;try{const s=CI(t);return s?JSON.parse(s):(nd("Failed to decode base64 JWT payload"),null)}catch(s){return nd("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uI(r){const e=ef(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof pn&&Bb(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Bb({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(r){var e;const t=r.auth,n=await r.getIdToken(),s=await pi(r,A0(t,{idToken:n}));X(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];r._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?R0(a.providerUserInfo):[],d=qb(r.providerData,l),f=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Nm(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(r,w)}async function jb(r){const e=ve(r);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qb(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function R0(r){return r.map(e=>{var{providerId:t}=e,n=Xg(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(r,e){const t=await I0(r,{},async()=>{const n=tu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=r.config,l=E0(r,s,"/v1/token",`key=${a}`),d=await r._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",w0.fetch()(l,{method:"POST",headers:d,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wb(r,e){return gt(r,"POST","/v2/accounts:revokeToken",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=uI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:a}=await $b(e,t);this.updateTokensAndExpiration(n,s,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:a}=t,l=new Va;return n&&(X(typeof n=="string","internal-error",{appName:e}),l.refreshToken=n),s&&(X(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(X(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Va,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class oi{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,a=Xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Nm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ub(this,e)}reload(){return jb(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await pi(this,Mb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,a,l,d,f,m,v;const w=(n=t.displayName)!==null&&n!==void 0?n:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,V=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,W=(l=t.photoURL)!==null&&l!==void 0?l:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,q=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,fe=(m=t.createdAt)!==null&&m!==void 0?m:void 0,me=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ae,emailVerified:Ee,isAnonymous:Re,providerData:_e,stsTokenManager:C}=t;X(ae&&C,e,"internal-error");const S=Va.fromJSON(this.name,C);X(typeof ae=="string",e,"internal-error"),Qi(w,e.name),Qi(T,e.name),X(typeof Ee=="boolean",e,"internal-error"),X(typeof Re=="boolean",e,"internal-error"),Qi(V,e.name),Qi(W,e.name),Qi($,e.name),Qi(q,e.name),Qi(fe,e.name),Qi(me,e.name);const P=new oi({uid:ae,auth:e,email:T,emailVerified:Ee,displayName:w,isAnonymous:Re,photoURL:W,phoneNumber:V,tenantId:$,stsTokenManager:S,createdAt:fe,lastLoginAt:me});return _e&&Array.isArray(_e)&&(P.providerData=_e.map(b=>Object.assign({},b))),q&&(P._redirectEventId=q),P}static async _fromIdTokenResponse(e,t,n=!1){const s=new Va;s.updateFromServerResponse(t);const a=new oi({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ec(a),a}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];X(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?R0(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new Va;d.updateFromIdToken(n);const f=new oi({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:l}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Map;function Mn(r){pr(r instanceof Function,"Expected a class definition");let e=lI.get(r);return e?(pr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,lI.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}P0.type="NONE";const Xa=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(r,e,t){return`firebase:${r}:${e}:${t}`}class xa{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:a}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,a),this.fullPersistenceKey=oo("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new xa(Mn(Xa),e,n);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||Mn(Xa);const l=oo(n,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(l);if(v){const w=oi._fromJSON(e,v);m!==a&&(d=w),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new xa(a,e,n):(a=f[0],d&&await a._set(l,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(l)}catch{}})),new xa(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N0(e))return"Blackberry";if(V0(e))return"Webos";if(C0(e))return"Safari";if((e.includes("chrome/")||b0(e))&&!e.includes("edge/"))return"Chrome";if(_c(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function k0(r=ct()){return/firefox\//i.test(r)}function C0(r=ct()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function b0(r=ct()){return/crios\//i.test(r)}function D0(r=ct()){return/iemobile/i.test(r)}function _c(r=ct()){return/android/i.test(r)}function N0(r=ct()){return/blackberry/i.test(r)}function V0(r=ct()){return/webos/i.test(r)}function yc(r=ct()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Gb(r=ct()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function Kb(r=ct()){var e;return yc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hb(){return xI()&&document.documentMode===10}function x0(r=ct()){return yc(r)||_c(r)||V0(r)||N0(r)||/windows phone/i.test(r)||D0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(r,e=[]){let t;switch(r){case"Browser":t=cI(ct());break;case"Worker":t=`${cI(ct())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ps}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((l,d)=>{try{const f=e(a);l(f)}catch(f){d(f)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(r,e={}){return gt(r,"GET","/v2/passwordPolicy",mt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=6;class Xb{constructor(e){var t,n,s,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:Yb,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,a,l,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(n=f.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hI(this),this.idTokenSubscription=new hI(this),this.beforeStateQueue=new Qb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mn(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await xa.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await A0(this,{idToken:e}),n=await oi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Db()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(jt(this));const t=e?ve(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jb(this),t=new Xb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Wb(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mn(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await xa.create(this,[Mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(d,this,"internal-error"),d.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,n,s);return()=>{l=!0,f()}}else{const f=e.addObserver(t);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ht(r){return ve(r)}class hI{constructor(e){this.auth=e,this.observer=null,this.addObserver=LI(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eD(r){vc=r}function r_(r){return vc.loadJS(r)}function tD(){return vc.recaptchaV2Script}function nD(){return vc.recaptchaEnterpriseScript}function rD(){return vc.gapiScript}function L0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=500,sD=6e4,Gh=1e12;class oD{constructor(e){this.auth=e,this.counter=Gh,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new lD(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Gh;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Gh;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Gh;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class aD{constructor(){this.enterprise=new uD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class uD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lD{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;X(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=cD(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},sD)},iD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function cD(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const hD="recaptcha-enterprise",bl="NO_RECAPTCHA";class M0{constructor(e){this.type=hD,this.auth=ht(e)}async verify(e="verify",t=!1){async function n(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,d)=>{S0(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new T0(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,l(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,l,d){const f=window.grecaptcha;aI(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{l(m)}).catch(()=>{l(bl)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aD().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{n(this.auth).then(d=>{if(!t&&aI(window.grecaptcha))s(d,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=nD();f.length!==0&&(f+=d),r_(f).then(()=>{s(d,a,l)}).catch(m=>{l(m)})}}).catch(d=>{l(d)})})}}async function pl(r,e,t,n=!1,s=!1){const a=new M0(r);let l;if(s)l=bl;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return n?Object.assign(d,{captchaResp:l}):Object.assign(d,{captchaResponse:l}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ns(r,e,t,n,s){var a,l;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await pl(r,e,t,t==="getOobCode");return n(r,d)}else return n(r,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await pl(r,e,t,t==="getOobCode");return n(r,f)}else return Promise.reject(d)});else if(s==="PHONE_PROVIDER")if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("PHONE_PROVIDER")){const d=await pl(r,e,t);return n(r,d).catch(async f=>{var m;if(((m=r._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await pl(r,e,t,!1,!0);return n(r,v)}return Promise.reject(f)})}else{const d=await pl(r,e,t,!1,!0);return n(r,d)}else return Promise.reject(s+" provider is not supported.")}async function dD(r){const e=ht(r),t=await S0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new T0(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new M0(e).verify()}function fD(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Mn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function pD(r,e,t){const n=ht(r);X(n._canInitEmulator,n,"emulator-config-failed"),X(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),a=F0(e),{host:l,port:d}=mD(e),f=d===null?"":`:${d}`;n.config.emulator={url:`${a}//${l}${f}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:l,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||gD()}function F0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function mD(r){const e=F0(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const a=s[1];return{host:a,port:dI(n.substr(a.length+1))}}else{const[a,l]=n.split(":");return{host:a,port:dI(l)}}}function dI(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gD(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(r,e){return gt(r,"POST","/v1/accounts:resetPassword",mt(r,e))}async function _D(r,e){return gt(r,"POST","/v1/accounts:update",e)}async function yD(r,e){return gt(r,"POST","/v1/accounts:signUp",e)}async function vD(r,e){return gt(r,"POST","/v1/accounts:update",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(r,e){return vi(r,"POST","/v1/accounts:signInWithPassword",mt(r,e))}async function tf(r,e){return gt(r,"POST","/v1/accounts:sendOobCode",mt(r,e))}async function ID(r,e){return tf(r,e)}async function ED(r,e){return tf(r,e)}async function TD(r,e){return tf(r,e)}async function SD(r,e){return tf(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(r,e){return vi(r,"POST","/v1/accounts:signInWithEmailLink",mt(r,e))}async function RD(r,e){return vi(r,"POST","/v1/accounts:signInWithEmailLink",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends hu{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new tc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new tc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ns(e,t,"signInWithPassword",wD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return AD(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ns(e,n,"signUpPassword",yD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return RD(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(r,e){return vi(r,"POST","/v1/accounts:signInWithIdp",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="http://localhost";class Ur extends hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,a=Xg(t,["providerId","signInMethod"]);if(!n||!s)return null;const l=new Ur(n,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return li(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,li(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,li(e,t)}buildRequest(){const e={requestUri:PD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(r,e){return gt(r,"POST","/v1/accounts:sendVerificationCode",mt(r,e))}async function kD(r,e){return vi(r,"POST","/v1/accounts:signInWithPhoneNumber",mt(r,e))}async function CD(r,e){const t=await vi(r,"POST","/v1/accounts:signInWithPhoneNumber",mt(r,e));if(t.temporaryProof)throw El(r,"account-exists-with-different-credential",t);return t}const bD={USER_NOT_FOUND:"user-not-found"};async function DD(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return vi(r,"POST","/v1/accounts:signInWithPhoneNumber",mt(r,t),bD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends hu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ao({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ao({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return kD(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return CD(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return DD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:a}=e;return!n&&!t&&!s&&!a?null:new ao({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VD(r){const e=ka(_l(r)).link,t=e?ka(_l(e)).deep_link_id:null,n=ka(_l(r)).deep_link_id;return(n?ka(_l(n)).link:null)||n||t||e||r}class nf{constructor(e){var t,n,s,a,l,d;const f=ka(_l(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(n=f.oobCode)!==null&&n!==void 0?n:null,w=ND((s=f.mode)!==null&&s!==void 0?s:null);X(m&&v&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=VD(e);try{return new nf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,t){return tc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=nf.parseLink(t);return X(n,"argument-error"),tc._fromEmailAndCode(e,n.code,n.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Oa extends du{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return X("providerId"in t&&"signInMethod"in t,"argument-error"),Ur._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return X(e.idToken||e.accessToken,"argument-error"),Ur._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Oa.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Oa.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:s,pendingToken:a,nonce:l,providerId:d}=e;if(!n&&!s&&!t&&!a||!d)return null;try{return new Oa(d)._credential({idToken:t,accessToken:n,nonce:l,pendingToken:a})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends du{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ur._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pr.credential(t,n)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends du{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD="http://localhost";class Za extends hu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return li(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,li(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,li(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,pendingToken:a}=t;return!n||!s||!a||n!==s?null:new Za(n,a)}static _create(e,t){return new Za(e,t)}buildRequest(){return{requestUri:xD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="saml.";class Ad extends wi{constructor(e){X(e.startsWith(OD),"argument-error"),super(e)}static credentialFromResult(e){return Ad.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ad.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Za.fromJSON(e);return X(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Za._create(n,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends du{constructor(){super("twitter.com")}static credential(e,t){return Ur._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Cr.credential(t,n)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(r,e){return vi(r,"POST","/v1/accounts:signUp",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const a=await oi._fromIdTokenResponse(e,n,s),l=pI(n);return new Yn({user:a,providerId:l,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=pI(n);return new Yn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function pI(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(r){var e;if(ft(r.app))return Promise.reject(jt(r));const t=ht(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Yn({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await B0(t,{returnSecureToken:!0}),s=await Yn._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends pn{constructor(e,t,n,s){var a;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Rd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Rd(e,t,n,s)}}function z0(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Rd._fromErrorAndOperation(r,a,e,n):a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(r,e){const t=ve(r);await rf(!0,t,e);const{providerUserInfo:n}=await Fb(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=j0(n||[]);return t.providerData=t.providerData.filter(a=>s.has(a.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function i_(r,e,t=!1){const n=await pi(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Yn._forOperation(r,"link",n)}async function rf(r,e,t){await ec(e);const n=j0(e.providerData),s=r===!1?"provider-already-linked":"no-such-provider";X(n.has(t)===r,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(r,e,t=!1){const{auth:n}=r;if(ft(n.app))return Promise.reject(jt(n));const s="reauthenticate";try{const a=await pi(r,z0(n,s,e,r),t);X(a.idToken,n,"internal-error");const l=ef(a.idToken);X(l,n,"internal-error");const{sub:d}=l;return X(r.uid===d,n,"user-mismatch"),Yn._forOperation(r,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Jt(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(r,e,t=!1){if(ft(r.app))return Promise.reject(jt(r));const n="signIn",s=await z0(r,n,e),a=await Yn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(a.user),a}async function sf(r,e){return $0(ht(r),e)}async function W0(r,e){const t=ve(r);return await rf(!1,t,e.providerId),i_(t,e)}async function G0(r,e){return q0(ve(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(r,e){return vi(r,"POST","/v1/accounts:signInWithCustomToken",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(r,e){if(ft(r.app))return Promise.reject(jt(r));const t=ht(r),n=await FD(t,{token:e,returnSecureToken:!0}),s=await Yn._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?s_._fromServerResponse(e,t):"totpInfo"in t?o_._fromServerResponse(e,t):Jt(e,"internal-error")}}class s_ extends wc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new s_(t)}}class o_ extends wc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new o_(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(r,e,t){var n;X(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),X(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(X(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(X(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(r){const e=ht(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BD(r,e,t){const n=ht(r),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&of(n,s,t),await ns(n,s,"getOobCode",ED,"EMAIL_PASSWORD_PROVIDER")}async function zD(r,e,t){await U0(ve(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&a_(r),n})}async function jD(r,e){await vD(ve(r),{oobCode:e})}async function K0(r,e){const t=ve(r),n=await U0(t,{oobCode:e}),s=n.requestType;switch(X(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":X(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":X(n.mfaInfo,t,"internal-error");default:X(n.email,t,"internal-error")}let a=null;return n.mfaInfo&&(a=wc._fromServerResponse(ht(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:a},operation:s}}async function qD(r,e){const{data:t}=await K0(ve(r),e);return t.email}async function $D(r,e,t){if(ft(r.app))return Promise.reject(jt(r));const n=ht(r),l=await ns(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B0,"EMAIL_PASSWORD_PROVIDER").catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&a_(r),f}),d=await Yn._fromIdTokenResponse(n,"signIn",l);return await n._updateCurrentUser(d.user),d}function WD(r,e,t){return ft(r.app)?Promise.reject(jt(r)):sf(ve(r),vs.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&a_(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(r,e,t){const n=ht(r),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function a(l,d){X(d.handleCodeInApp,n,"argument-error"),d&&of(n,l,d)}a(s,t),await ns(n,s,"getOobCode",TD,"EMAIL_PASSWORD_PROVIDER")}function KD(r,e){const t=nf.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function HD(r,e,t){if(ft(r.app))return Promise.reject(jt(r));const n=ve(r),s=vs.credentialWithLink(e,t||Zl());return X(s._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),sf(n,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(r,e){return gt(r,"POST","/v1/accounts:createAuthUri",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(r,e){const t=t_()?Zl():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:s}=await QD(ve(r),n);return s||[]}async function YD(r,e){const t=ve(r),s={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&of(t.auth,s,e);const{email:a}=await ID(t.auth,s);a!==r.email&&await r.reload()}async function XD(r,e,t){const n=ve(r),a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&of(n.auth,a,t);const{email:l}=await SD(n.auth,a);l!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(r,e){return gt(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=ve(r),a={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},l=await pi(n,ZD(n.auth,a));n.displayName=l.displayName||null,n.photoURL=l.photoUrl||null;const d=n.providerData.find(({providerId:f})=>f==="password");d&&(d.displayName=n.displayName,d.photoURL=n.photoURL),await n._updateTokensIfNecessary(l)}function tN(r,e){const t=ve(r);return ft(t.auth.app)?Promise.reject(jt(t.auth)):H0(t,e,null)}function nN(r,e){return H0(ve(r),null,e)}async function H0(r,e,t){const{auth:n}=r,a={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(a.email=e),t&&(a.password=t);const l=await pi(r,_D(n,a));await r._updateTokensIfNecessary(l,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(r){var e,t;if(!r)return null;const{providerId:n}=r,s=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},a=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(r!=null&&r.idToken)){const l=(t=(e=ef(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(l){const d=l!=="anonymous"&&l!=="custom"?l:null;return new La(a,d)}}if(!n)return null;switch(n){case"facebook.com":return new iN(a,s);case"github.com":return new sN(a,s);case"google.com":return new oN(a,s);case"twitter.com":return new aN(a,s,r.screenName||null);case"custom":case"anonymous":return new La(a,null);default:return new La(a,n,s)}}class La{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Q0 extends La{constructor(e,t,n,s){super(e,t,n),this.username=s}}class iN extends La{constructor(e,t){super(e,"facebook.com",t)}}class sN extends Q0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class oN extends La{constructor(e,t){super(e,"google.com",t)}}class aN extends Q0{constructor(e,t,n){super(e,"twitter.com",t,n)}}function uN(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:rN(t)}function lN(r,e,t,n){return ve(r).onAuthStateChanged(e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new io("enroll",e,t)}static _fromMfaPendingCredential(e){return new io("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return io._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return io._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=ht(e),s=t.customData._serverResponse,a=(s.mfaInfo||[]).map(d=>wc._fromServerResponse(n,d));X(s.mfaPendingCredential,n,"internal-error");const l=io._fromMfaPendingCredential(s.mfaPendingCredential);return new u_(l,a,async d=>{const f=await d._process(n,l);delete s.mfaInfo,delete s.mfaPendingCredential;const m=Object.assign(Object.assign({},s),{idToken:f.idToken,refreshToken:f.refreshToken});switch(t.operationType){case"signIn":const v=await Yn._fromIdTokenResponse(n,t.operationType,m);return await n._updateCurrentUser(v.user),v;case"reauthenticate":return X(t.user,n,"internal-error"),Yn._forOperation(t.user,t.operationType,m);default:Jt(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function cN(r,e){var t;const n=ve(r),s=e;return X(e.customData.operationType,n,"argument-error"),X((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),u_._fromError(n,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(r,e){return gt(r,"POST","/v2/accounts/mfaEnrollment:start",mt(r,e))}function hN(r,e){return gt(r,"POST","/v2/accounts/mfaEnrollment:finalize",mt(r,e))}function dN(r,e){return gt(r,"POST","/v2/accounts/mfaEnrollment:withdraw",mt(r,e))}class l_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>wc._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new l_(e)}async getSession(){return io._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,s=await this.getSession(),a=await pi(this.user,n._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(a),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const s=await pi(this.user,dN(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const em=new WeakMap;function fN(r){const e=ve(r);return em.has(e)||em.set(e,l_._fromUser(e)),em.get(e)}const Pd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pd,"1"),this.storage.removeItem(Pd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=1e3,mN=10;class Y0 extends J0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=x0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,d,f)=>{this.notifyListeners(l,f)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(n);!t&&this.localCache[n]===l||this.notifyListeners(n,l)},a=this.storage.getItem(n);Hb()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mN):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},pN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y0.type="LOCAL";const c_=Y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0 extends J0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}X0.type="SESSION";const _o=X0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new af(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const d=Array.from(l).map(async m=>m(t.origin,a)),f=await gN(d);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}af.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((d,f)=>{const m=Ic("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},n);l={messageChannel:s,onMessage(w){const T=w;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function yN(r){Rt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function vN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function IN(){return h_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebaseLocalStorageDb",EN=1,kd="firebaseLocalStorage",eS="fbase_key";class Ec{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uf(r,e){return r.transaction([kd],e?"readwrite":"readonly").objectStore(kd)}function TN(){const r=indexedDB.deleteDatabase(Z0);return new Ec(r).toPromise()}function Vm(){const r=indexedDB.open(Z0,EN);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(kd,{keyPath:eS})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(kd)?e(n):(n.close(),await TN(),e(await Vm()))})})}async function gI(r,e,t){const n=uf(r,!0).put({[eS]:e,value:t});return new Ec(n).toPromise()}async function SN(r,e){const t=uf(r,!1).get(e),n=await new Ec(t).toPromise();return n===void 0?null:n.value}function _I(r,e){const t=uf(r,!0).delete(e);return new Ec(t).toPromise()}const AN=800,RN=3;class tS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>RN)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=af._getInstance(IN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vN(),!this.activeServiceWorker)return;this.sender=new _N(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await gI(e,Pd,"1"),await _I(e,Pd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gI(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>SN(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_I(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=uf(s,!1).getAll();return new Ec(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tS.type="LOCAL";const nc=tS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(r,e){return gt(r,"POST","/v2/accounts/mfaSignIn:start",mt(r,e))}function PN(r,e){return gt(r,"POST","/v2/accounts/mfaSignIn:finalize",mt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=L0("rcb"),kN=new gc(3e4,6e4);class CN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Rt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return X(bN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&oI(Rt().grecaptcha)?Promise.resolve(Rt().grecaptcha):new Promise((n,s)=>{const a=Rt().setTimeout(()=>{s(Nt(e,"network-request-failed"))},kN.get());Rt()[tm]=()=>{Rt().clearTimeout(a),delete Rt()[tm];const d=Rt().grecaptcha;if(!d||!oI(d)){s(Nt(e,"internal-error"));return}const f=d.render;d.render=(m,v)=>{const w=f(m,v);return this.counter++,w},this.hostLanguage=t,n(d)};const l=`${tD()}?${tu({onload:tm,render:"explicit",hl:t})}`;r_(l).catch(()=>{clearTimeout(a),s(Nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Rt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bN(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class DN{async load(e){return new oD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="recaptcha",NN={theme:"light",type:"image"};let VN=class{constructor(e,t,n=Object.assign({},NN)){this.parameters=n,this.type=Dl,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ht(e),this.isInvisible=this.parameters.size==="invisible",X(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;X(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new DN:new CN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(s=>{const a=l=>{l&&(this.tokenChangeListeners.delete(a),s(l))};this.tokenChangeListeners.add(a),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){X(!this.parameters.sitekey,this.auth,"argument-error"),X(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),X(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Rt()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){X(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){X(t_()&&!h_(),this.auth,"internal-error"),await xN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Lb(this.auth);X(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return X(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function xN(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ao._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ON(r,e,t){if(ft(r.app))return Promise.reject(jt(r));const n=ht(r),s=await lf(n,e,ve(t));return new d_(s,a=>sf(n,a))}async function LN(r,e,t){const n=ve(r);await rf(!1,n,"phone");const s=await lf(n.auth,e,ve(t));return new d_(s,a=>W0(n,a))}async function MN(r,e,t){const n=ve(r);if(ft(n.auth.app))return Promise.reject(jt(n.auth));const s=await lf(n.auth,e,ve(t));return new d_(s,a=>G0(n,a))}async function lf(r,e,t){var n;if(!r._getRecaptchaConfig())try{await dD(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s){X(a.type==="enroll",r,"internal-error");const l={idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ns(r,l,"mfaSmsEnrollment",async(v,w)=>{if(w.phoneEnrollmentInfo.captchaResponse===bl){X((t==null?void 0:t.type)===Dl,v,"argument-error");const T=await nm(v,w,t);return mI(v,T)}return mI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{X(a.type==="signin",r,"internal-error");const l=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;X(l,r,"missing-multi-factor-info");const d={mfaPendingCredential:a.credential,mfaEnrollmentId:l,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ns(r,d,"mfaSmsSignIn",async(w,T)=>{if(T.phoneSignInInfo.captchaResponse===bl){X((t==null?void 0:t.type)===Dl,w,"argument-error");const V=await nm(w,T,t);return yI(w,V)}return yI(w,T)},"PHONE_PROVIDER").catch(w=>Promise.reject(w))).phoneResponseInfo.sessionInfo}}else{const a={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ns(r,a,"sendVerificationCode",async(m,v)=>{if(v.captchaResponse===bl){X((t==null?void 0:t.type)===Dl,m,"argument-error");const w=await nm(m,v,t);return fI(m,w)}return fI(m,v)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function FN(r,e){const t=ve(r);if(ft(t.auth.app))return Promise.reject(jt(t.auth));await i_(t,e)}async function nm(r,e,t){X(t.type===Dl,r,"argument-error");const n=await t.verify();X(typeof n=="string",r,"argument-error");const s=Object.assign({},e);if("phoneEnrollmentInfo"in s){const a=s.phoneEnrollmentInfo.phoneNumber,l=s.phoneEnrollmentInfo.captchaResponse,d=s.phoneEnrollmentInfo.clientType,f=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:n,captchaResponse:l,clientType:d,recaptchaVersion:f}}),s}else if("phoneSignInInfo"in s){const a=s.phoneSignInInfo.captchaResponse,l=s.phoneSignInInfo.clientType,d=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:a,clientType:l,recaptchaVersion:d}}),s}else return Object.assign(s,{recaptchaToken:n}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo=class rd{constructor(e){this.providerId=rd.PROVIDER_ID,this.auth=ht(e)}verifyPhoneNumber(e,t){return lf(this.auth,e,ve(t))}static credential(e,t){return ao._fromVerification(e,t)}static credentialFromResult(e){const t=e;return rd.credentialFromTaggedObject(t)}static credentialFromError(e){return rd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ao._fromTokenResponse(t,n):null}};yo.PROVIDER_ID="phone";yo.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(r,e){return e?Mn(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends hu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UN(r){return $0(r.auth,new f_(r),r.bypassAuthState)}function BN(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),q0(t,new f_(r),r.bypassAuthState)}async function zN(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),i_(t,new f_(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,n,s,a=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:a,error:l,type:d}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UN;case"linkViaPopup":case"linkViaRedirect":return zN;case"reauthViaPopup":case"reauthViaRedirect":return BN;default:Jt(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=new gc(2e3,1e4);async function qN(r,e,t){if(ft(r.app))return Promise.reject(Nt(r,"operation-not-supported-in-this-environment"));const n=ht(r);cu(r,e,wi);const s=Ao(n,t);return new ai(n,"signInViaPopup",e,s).executeNotNull()}async function $N(r,e,t){const n=ve(r);if(ft(n.auth.app))return Promise.reject(Nt(n.auth,"operation-not-supported-in-this-environment"));cu(n.auth,e,wi);const s=Ao(n.auth,t);return new ai(n.auth,"reauthViaPopup",e,s,n).executeNotNull()}async function WN(r,e,t){const n=ve(r);cu(n.auth,e,wi);const s=Ao(n.auth,t);return new ai(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class ai extends nS{constructor(e,t,n,s,a){super(e,t,s,a),this.provider=n,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jN.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="pendingRedirect",Nl=new Map;class KN extends nS{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Nl.get(this.auth._key());if(!e){try{const n=await HN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Nl.set(this.auth._key(),e)}return this.bypassAuthState||Nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HN(r,e){const t=iS(e),n=rS(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}async function p_(r,e){return rS(r)._set(iS(e),"true")}function QN(){Nl.clear()}function m_(r,e){Nl.set(r._key(),e)}function rS(r){return Mn(r._redirectPersistence)}function iS(r){return oo(GN,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(r,e,t){return YN(r,e,t)}async function YN(r,e,t){if(ft(r.app))return Promise.reject(jt(r));const n=ht(r);cu(r,e,wi),await n._initializationPromise;const s=Ao(n,t);return await p_(s,n),s._openRedirect(n,e,"signInViaRedirect")}function XN(r,e,t){return ZN(r,e,t)}async function ZN(r,e,t){const n=ve(r);if(cu(n.auth,e,wi),ft(n.auth.app))return Promise.reject(jt(n.auth));await n.auth._initializationPromise;const s=Ao(n.auth,t);await p_(s,n.auth);const a=await sS(n);return s._openRedirect(n.auth,e,"reauthViaRedirect",a)}function eV(r,e,t){return tV(r,e,t)}async function tV(r,e,t){const n=ve(r);cu(n.auth,e,wi),await n.auth._initializationPromise;const s=Ao(n.auth,t);await rf(!1,n,e.providerId),await p_(s,n.auth);const a=await sS(n);return s._openRedirect(n.auth,e,"linkViaRedirect",a)}async function nV(r,e){return await ht(r)._initializationPromise,cf(r,e,!1)}async function cf(r,e,t=!1){if(ft(r.app))return Promise.reject(jt(r));const n=ht(r),s=Ao(n,e),l=await new KN(n,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await n._persistUserIfCurrent(l.user),await n._setRedirectUser(null,e)),l}async function sS(r){const e=Ic(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=10*60*1e3;class oS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!aS(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rV&&this.cachedEventUids.clear(),this.cachedEventUids.has(vI(e))}saveEventToCache(e){this.cachedEventUids.add(vI(e)),this.lastProcessedEventTime=Date.now()}}function vI(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function aS({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iV(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aS(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(r,e={}){return gt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oV=/^https?/;async function aV(r){if(r.config.emulator)return;const{authorizedDomains:e}=await uS(r);for(const t of e)try{if(uV(t))return}catch{}Jt(r,"unauthorized-domain")}function uV(r){const e=Zl(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const l=new URL(r);return l.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===n}if(!oV.test(t))return!1;if(sV.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=new gc(3e4,6e4);function wI(){const r=Rt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function cV(r){return new Promise((e,t)=>{var n,s,a;function l(){wI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wI(),t(Nt(r,"network-request-failed"))},timeout:lV.get()})}if(!((s=(n=Rt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Rt().gapi)===null||a===void 0)&&a.load)l();else{const d=L0("iframefcb");return Rt()[d]=()=>{gapi.load?l():t(Nt(r,"network-request-failed"))},r_(`${rD()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw id=null,e})}let id=null;function hV(r){return id=id||cV(r),id}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dV=new gc(5e3,15e3),fV="__/auth/iframe",pV="emulator/auth/iframe",mV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _V(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?n_(e,pV):`https://${r.config.authDomain}/${fV}`,n={apiKey:e.apiKey,appName:r.name,v:ps},s=gV.get(r.config.apiHost);s&&(n.eid=s);const a=r._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${tu(n).slice(1)}`}async function yV(r){const e=await hV(r),t=Rt().gapi;return X(t,r,"internal-error"),e.open({where:document.body,url:_V(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mV,dontclear:!0},n=>new Promise(async(s,a)=>{await n.restyle({setHideOnLeave:!1});const l=Nt(r,"network-request-failed"),d=Rt().setTimeout(()=>{a(l)},dV.get());function f(){Rt().clearTimeout(d),s(n)}n.ping(f).then(f,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wV=500,IV=600,EV="_blank",TV="http://localhost";class II{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SV(r,e,t,n=wV,s=IV){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-n)/2,0).toString();let d="";const f=Object.assign(Object.assign({},vV),{width:n.toString(),height:s.toString(),top:a,left:l}),m=ct().toLowerCase();t&&(d=b0(m)?EV:t),k0(m)&&(e=e||TV,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[V,W])=>`${T}${V}=${W},`,"");if(Kb(m)&&d!=="_self")return AV(e||"",d),new II(null);const w=window.open(e||"",d,v);X(w,r,"popup-blocked");try{w.focus()}catch{}return new II(w)}function AV(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV="__/auth/handler",PV="emulator/auth/handler",kV=encodeURIComponent("fac");async function xm(r,e,t,n,s,a){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const l={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ps,eventId:s};if(e instanceof wi){e.setDefaultLanguage(r.languageCode),l.providerId=e.providerId||"",HA(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries(a||{}))l[v]=w}if(e instanceof du){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(l.scopes=v.join(","))}r.tenantId&&(l.tid=r.tenantId);const d=l;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await r._getAppCheckToken(),m=f?`#${kV}=${encodeURIComponent(f)}`:"";return`${CV(r)}?${tu(d).slice(1)}${m}`}function CV({config:r}){return r.emulator?n_(r,PV):`https://${r.authDomain}/${RV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="webStorageSupport";class bV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_o,this._completeRedirectFn=cf,this._overrideRedirectResult=m_}async _openPopup(e,t,n,s){var a;pr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await xm(e,t,n,Zl(),s);return SV(e,l,Ic())}async _openRedirect(e,t,n,s){await this._originValidation(e);const a=await xm(e,t,n,Zl(),s);return yN(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(pr(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await yV(e),n=new oS(e);return t.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rm,{type:rm},s=>{var a;const l=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[rm];l!==void 0&&t(!!l),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return x0()||C0()||yc()}}const DV=bV;class NV{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Nr("unexpected MultiFactorSessionType")}}}class g_ extends NV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new g_(e)}_finalizeEnroll(e,t,n){return hN(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return PN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lS{constructor(){}static assertion(e){return g_._fromCredential(e)}}lS.FACTOR_ID="phone";var EI="@firebase/auth",TI="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OV(r){ss(new Or("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:d}=n.options;X(l&&!l.includes(":"),"invalid-api-key",{appName:n.name});const f={apiKey:l,authDomain:d,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O0(r)},m=new Zb(n,s,a,f);return fD(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),ss(new Or("auth-internal",e=>{const t=ht(e.getProvider("auth").getImmediate());return(n=>new VV(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(EI,TI,xV(r)),fr(EI,TI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=5*60;FA("authIdTokenMaxAge");function MV(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}eD({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const a=Nt("internal-error");a.customData=s,t(a)},n.type="text/javascript",n.charset="UTF-8",MV().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OV("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=2e3;async function UV(r,e,t){var n;const{BuildInfo:s}=vo();pr(e.sessionId,"AuthEvent did not contain a session ID");const a=await $V(e.sessionId),l={};return yc()?l.ibi=s.packageName:_c()?l.apn=s.packageName:Jt(r,"operation-not-supported-in-this-environment"),s.displayName&&(l.appDisplayName=s.displayName),l.sessionId=a,xm(r,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,l)}async function BV(r){const{BuildInfo:e}=vo(),t={};yc()?t.iosBundleId=e.packageName:_c()?t.androidPackageName=e.packageName:Jt(r,"operation-not-supported-in-this-environment"),await uS(r,t)}function zV(r){const{cordova:e}=vo();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let s=null;n?e.plugins.browsertab.openUrl(r):s=e.InAppBrowser.open(r,Gb()?"_blank":"_system","location=yes"),t(s)})})}async function jV(r,e,t){const{cordova:n}=vo();let s=()=>{};try{await new Promise((a,l)=>{let d=null;function f(){var w;a();const T=(w=n.plugins.browsertab)===null||w===void 0?void 0:w.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{l(Nt(r,"redirect-cancelled-by-user"))},FV))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(f),document.addEventListener("resume",m,!1),_c()&&document.addEventListener("visibilitychange",v,!1),s=()=>{e.removePassiveListener(f),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",v,!1),d&&window.clearTimeout(d)}})}finally{s()}}function qV(r){var e,t,n,s,a,l,d,f,m,v;const w=vo();X(typeof((e=w==null?void 0:w.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),X(typeof((t=w==null?void 0:w.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),X(typeof((a=(s=(n=w==null?void 0:w.cordova)===null||n===void 0?void 0:n.plugins)===null||s===void 0?void 0:s.browsertab)===null||a===void 0?void 0:a.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),X(typeof((f=(d=(l=w==null?void 0:w.cordova)===null||l===void 0?void 0:l.plugins)===null||d===void 0?void 0:d.browsertab)===null||f===void 0?void 0:f.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),X(typeof((v=(m=w==null?void 0:w.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||v===void 0?void 0:v.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $V(r){const e=WV(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function WV(r){if(pr(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV=20;class KV extends oS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function HV(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:YV(),postBody:null,tenantId:r.tenantId,error:Nt(r,"no-auth-event")}}function QV(r,e){return Om()._set(Lm(r),e)}async function SI(r){const e=await Om()._get(Lm(r));return e&&await Om()._remove(Lm(r)),e}function JV(r,e){var t,n;const s=ZV(e);if(s.includes("/__/auth/callback")){const a=sd(s),l=a.firebaseError?XV(decodeURIComponent(a.firebaseError)):null,d=(n=(t=l==null?void 0:l.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],f=d?Nt(d):null;return f?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:f,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:s,postBody:null}}return null}function YV(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<GV;t++){const n=Math.floor(Math.random()*e.length);r.push(e.charAt(n))}return r.join("")}function Om(){return Mn(c_)}function Lm(r){return oo("authEvent",r.config.apiKey,r.name)}function XV(r){try{return JSON.parse(r)}catch{return null}}function ZV(r){const e=sd(r),t=e.link?decodeURIComponent(e.link):void 0,n=sd(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return sd(s).link||s||n||t||r}function sd(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return ka(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=500;class tx{constructor(){this._redirectPersistence=_o,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=cf,this._overrideRedirectResult=m_}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new KV(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Jt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,s){qV(e);const a=await this._initialize(e);await a.initialized(),a.resetRedirect(),QN(),await this._originValidation(e);const l=HV(e,n,s);await QV(e,l);const d=await UV(e,l,t),f=await zV(d);return jV(e,a,f)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:s,BuildInfo:a}=vo(),l=setTimeout(async()=>{await SI(e),t.onEvent(AI())},ex),d=async v=>{clearTimeout(l);const w=await SI(e);let T=null;w&&(v!=null&&v.url)&&(T=JV(w,v.url)),t.onEvent(T||AI())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,d);const f=s,m=`${a.packageName.toLowerCase()}://`;vo().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(m)&&d({url:v}),typeof f=="function")try{f(v)}catch(w){console.error(w)}}}}const nx=tx;function AI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Nt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(r,e){ht(r)._logFramework(e)}var ix="@firebase/auth-compat",sx="0.5.16";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=1e3;function Vl(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function ax(){return Vl()==="http:"||Vl()==="https:"}function cS(r=ct()){return!!((Vl()==="file:"||Vl()==="ionic:"||Vl()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function ux(){return qm()||jm()}function lx(){return xI()&&(document==null?void 0:document.documentMode)===11}function cx(r=ct()){return/Edge\/\d+/.test(r)}function hx(r=ct()){return lx()||cx(r)}function hS(){try{const r=self.localStorage,e=Ic();if(r)return r.setItem(e,"1"),r.removeItem(e),hx()?xl():!0}catch{return __()&&xl()}return!1}function __(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function im(){return(ax()||VI()||cS())&&!ux()&&hS()&&!__()}function dS(){return cS()&&typeof document<"u"}async function dx(){return dS()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},ox);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function fx(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={LOCAL:"local",NONE:"none",SESSION:"session"},ml=X,fS="persistence";function px(r,e){if(ml(Object.values(Ln).includes(e),r,"invalid-persistence-type"),qm()){ml(e!==Ln.SESSION,r,"unsupported-persistence-type");return}if(jm()){ml(e===Ln.NONE,r,"unsupported-persistence-type");return}if(__()){ml(e===Ln.NONE||e===Ln.LOCAL&&xl(),r,"unsupported-persistence-type");return}ml(e===Ln.NONE||hS(),r,"unsupported-persistence-type")}async function Mm(r){await r._initializationPromise;const e=pS(),t=oo(fS,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function mx(r,e){const t=pS();if(!t)return[];const n=oo(fS,r,e);switch(t.getItem(n)){case Ln.NONE:return[Xa];case Ln.LOCAL:return[nc,_o];case Ln.SESSION:return[_o];default:return[]}}function pS(){var r;try{return((r=fx())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=X;class Zi{constructor(){this.browserResolver=Mn(DV),this.cordovaResolver=Mn(nx),this.underlyingResolver=null,this._redirectPersistence=_o,this._completeRedirectFn=cf,this._overrideRedirectResult=m_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,s)}async _openRedirect(e,t,n,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return dS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return gx(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await dx();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(r){return r.unwrap()}function _x(r){return r.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(r){return gS(r)}function vx(r,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new wx(r,cN(r,e))}else if(n){const s=gS(e),a=e;s&&(a.credential=s,a.tenantId=n.tenantId||void 0,a.email=n.email||void 0,a.phoneNumber=n.phoneNumber||void 0)}}function gS(r){const{_tokenResponse:e}=r instanceof pn?r.customData:r;if(!e)return null;if(!(r instanceof pn)&&"temporaryProof"in e&&"phoneNumber"in e)return yo.credentialFromResult(r);const t=e.providerId;if(!t||t===fl.PASSWORD)return null;let n;switch(t){case fl.GOOGLE:n=Pr;break;case fl.FACEBOOK:n=Rr;break;case fl.GITHUB:n=kr;break;case fl.TWITTER:n=Cr;break;default:const{oauthIdToken:s,oauthAccessToken:a,oauthTokenSecret:l,pendingToken:d,nonce:f}=e;return!a&&!l&&!s&&!d?null:d?t.startsWith("saml.")?Za._create(t,d):Ur._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:s,accessToken:a}):new Oa(t).credential({idToken:s,accessToken:a,rawNonce:f})}return r instanceof pn?n.credentialFromError(r):n.credentialFromResult(r)}function An(r,e){return e.catch(t=>{throw t instanceof pn&&vx(r,t),t}).then(t=>{const n=t.operationType,s=t.user;return{operationType:n,credential:yx(t),additionalUserInfo:uN(t),user:ui.getOrCreate(s)}})}async function Fm(r,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>An(r,t.confirm(n))}}class wx{constructor(e,t){this.resolver=t,this.auth=_x(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return An(mS(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._delegate=e,this.multiFactor=fN(e)}static getOrCreate(e){return ui.USER_MAP.has(e)||ui.USER_MAP.set(e,new ui(e)),ui.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return An(this.auth,W0(this._delegate,e))}async linkWithPhoneNumber(e,t){return Fm(this.auth,LN(this._delegate,e,t))}async linkWithPopup(e){return An(this.auth,WN(this._delegate,e,Zi))}async linkWithRedirect(e){return await Mm(ht(this.auth)),eV(this._delegate,e,Zi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return An(this.auth,G0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Fm(this.auth,MN(this._delegate,e,t))}reauthenticateWithPopup(e){return An(this.auth,$N(this._delegate,e,Zi))}async reauthenticateWithRedirect(e){return await Mm(ht(this.auth)),XN(this._delegate,e,Zi)}sendEmailVerification(e){return YD(this._delegate,e)}async unlink(e){return await MD(this._delegate,e),this}updateEmail(e){return tN(this._delegate,e)}updatePassword(e){return nN(this._delegate,e)}updatePhoneNumber(e){return FN(this._delegate,e)}updateProfile(e){return eN(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return XD(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ui.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=X;class Um{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;gl(n,"invalid-api-key",{appName:e.name}),gl(n,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Zi:void 0;this._delegate=t.initialize({options:{persistence:Ix(n,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(Pb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ui.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){pD(this._delegate,e,t)}applyActionCode(e){return jD(this._delegate,e)}checkActionCode(e){return K0(this._delegate,e)}confirmPasswordReset(e,t){return zD(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return An(this._delegate,$D(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return JD(this._delegate,e)}isSignInWithEmailLink(e){return KD(this._delegate,e)}async getRedirectResult(){gl(im(),this._delegate,"operation-not-supported-in-this-environment");const e=await nV(this._delegate,Zi);return e?An(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){rx(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:s,error:a,complete:l}=RI(e,t,n);return this._delegate.onAuthStateChanged(s,a,l)}onIdTokenChanged(e,t,n){const{next:s,error:a,complete:l}=RI(e,t,n);return this._delegate.onIdTokenChanged(s,a,l)}sendSignInLinkToEmail(e,t){return GD(this._delegate,e,t)}sendPasswordResetEmail(e,t){return BD(this._delegate,e,t||void 0)}async setPersistence(e){px(this._delegate,e);let t;switch(e){case Ln.SESSION:t=_o;break;case Ln.LOCAL:t=await Mn(nc)._isAvailable()?nc:c_;break;case Ln.NONE:t=Xa;break;default:return Jt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return An(this._delegate,LD(this._delegate))}signInWithCredential(e){return An(this._delegate,sf(this._delegate,e))}signInWithCustomToken(e){return An(this._delegate,UD(this._delegate,e))}signInWithEmailAndPassword(e,t){return An(this._delegate,WD(this._delegate,e,t))}signInWithEmailLink(e,t){return An(this._delegate,HD(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Fm(this._delegate,ON(this._delegate,e,t))}async signInWithPopup(e){return gl(im(),this._delegate,"operation-not-supported-in-this-environment"),An(this._delegate,qN(this._delegate,e,Zi))}async signInWithRedirect(e){return gl(im(),this._delegate,"operation-not-supported-in-this-environment"),await Mm(this._delegate),JN(this._delegate,e,Zi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return qD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Um.Persistence=Ln;function RI(r,e,t){let n=r;typeof r!="function"&&({next:n,error:e,complete:t}=r);const s=n;return{next:l=>s(l&&ui.getOrCreate(l)),error:e,complete:t}}function Ix(r,e){const t=mx(r,e);if(typeof self<"u"&&!t.includes(nc)&&t.push(nc),typeof window<"u")for(const n of[c_,_o])t.includes(n)||t.push(n);return t.includes(Xa)||t.push(Xa),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{static credential(e,t){return yo.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new yo(mS(Br.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}y_.PHONE_SIGN_IN_METHOD=yo.PHONE_SIGN_IN_METHOD;y_.PROVIDER_ID=yo.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=X;class Tx{constructor(e,t,n=Br.app()){var s;Ex((s=n.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new VN(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="auth-compat";function Ax(r){r.INTERNAL.registerComponent(new Or(Sx,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Um(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ea.EMAIL_SIGNIN,PASSWORD_RESET:Ea.PASSWORD_RESET,RECOVER_EMAIL:Ea.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ea.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ea.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ea.VERIFY_EMAIL}},EmailAuthProvider:vs,FacebookAuthProvider:Rr,GithubAuthProvider:kr,GoogleAuthProvider:Pr,OAuthProvider:Oa,SAMLAuthProvider:Ad,PhoneAuthProvider:y_,PhoneMultiFactorGenerator:lS,RecaptchaVerifier:Tx,TwitterAuthProvider:Cr,Auth:Um,AuthCredential:hu,Error:pn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(ix,sx)}Ax(Br);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Rx(r,e,t,n){function s(a){return a instanceof t?a:new t(function(l){l(a)})}return new(t||(t=Promise))(function(a,l){function d(v){try{m(n.next(v))}catch(w){l(w)}}function f(v){try{m(n.throw(v))}catch(w){l(w)}}function m(v){v.done?a(v.value):s(v.value).then(d,f)}m((n=n.apply(r,[])).next())})}function Px(r,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,s,a,l;return l={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function d(m){return function(v){return f([m,v])}}function f(m){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,s&&(a=m[0]&2?s.return:m[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,m[1])).done)return a;switch(s=0,a&&(m=[m[0]&2,a.value]),m[0]){case 0:case 1:a=m;break;case 4:return t.label++,{value:m[1],done:!1};case 5:t.label++,s=m[1],m=[0];continue;case 7:m=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(m[0]===6||m[0]===2)){t=0;continue}if(m[0]===3&&(!a||m[1]>a[0]&&m[1]<a[3])){t.label=m[1];break}if(m[0]===6&&t.label<a[1]){t.label=a[1],a=m;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(m);break}a[2]&&t.ops.pop(),t.trys.pop();continue}m=e.call(r,t)}catch(v){m=[6,v],s=0}finally{n=a=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ca=function(){return Ca=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ca.apply(this,arguments)},_S=function(r){return{loading:r==null,value:r}},kx=function(){return function(r,e){switch(e.type){case"error":return Ca(Ca({},r),{error:e.error,loading:!1,value:void 0});case"reset":return _S(e.defaultValue);case"value":return Ca(Ca({},r),{error:void 0,loading:!1,value:e.value});default:return r}}},Cx=function(r){var e=r?r():void 0,t=zt.useReducer(kx(),_S(e)),n=t[0],s=t[1],a=zt.useCallback(function(){var f=r?r():void 0;s({type:"reset",defaultValue:f})},[r]),l=zt.useCallback(function(f){s({type:"error",error:f})},[]),d=zt.useCallback(function(f){s({type:"value",value:f})},[]);return zt.useMemo(function(){return{error:n.error,loading:n.loading,reset:a,setError:l,setValue:d,value:n.value}},[n.error,n.loading,a,l,d,n.value])},bx=function(r,e){var t=Cx(function(){return r.currentUser}),n=t.error,s=t.loading,a=t.setError,l=t.setValue,d=t.value;return zt.useEffect(function(){var f=lN(r,function(m){return Rx(void 0,void 0,void 0,function(){var v;return Px(this,function(w){switch(w.label){case 0:return[3,4];case 1:return w.trys.push([1,3,,4]),[4,e.onUserChanged(m)];case 2:return w.sent(),[3,4];case 3:return v=w.sent(),a(v),[3,4];case 4:return l(m),[2]}})})},a);return function(){f()}},[r]),[d,s,n]};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ba=function(){return ba=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ba.apply(this,arguments)},yS=function(r){return{loading:r==null,value:r}},Dx=function(){return function(r,e){switch(e.type){case"error":return ba(ba({},r),{error:e.error,loading:!1,value:void 0});case"reset":return yS(e.defaultValue);case"value":return ba(ba({},r),{error:void 0,loading:!1,value:e.value});default:return r}}},Nx=function(r){var e=void 0,t=zt.useReducer(Dx(),yS(e)),n=t[0],s=t[1],a=zt.useCallback(function(){var f=void 0;s({type:"reset",defaultValue:f})},[r]),l=zt.useCallback(function(f){s({type:"error",error:f})},[]),d=zt.useCallback(function(f){s({type:"value",value:f})},[]);return zt.useMemo(function(){return{error:n.error,loading:n.loading,reset:a,setError:l,setValue:d,value:n.value}},[n.error,n.loading,a,l,d,n.value])},Vx=function(r,e,t){var n=zt.useRef(r);return zt.useEffect(function(){e(r,n.current)||(n.current=r,t&&t())}),n},xx=function(r,e){var t=!r&&!e,n=!!r&&!!e&&Og(r,e);return t||n},Ox=function(r,e){return Vx(r,xx,e)},Lx=function(r,e){var t=Nx(),n=t.error,s=t.loading,a=t.reset,l=t.setError,d=t.setValue,f=t.value,m=Ox(r,a);return zt.useEffect(function(){if(!m.current){d(void 0);return}var v=e!=null&&e.snapshotListenOptions?Td(m.current,e.snapshotListenOptions,d,l):Td(m.current,d,l);return function(){v()}},[m.current]),[f,s,n]},Mx=function(r,e){var t=Lx(r,e),n=t[0],s=t[1],a=t[2],l=Fx(n,e==null?void 0:e.snapshotOptions,e==null?void 0:e.initialValue);return[l,s,a,n]},Fx=function(r,e,t){return zt.useMemo(function(){var n;return(n=r==null?void 0:r.docs.map(function(s){return s.data(e)}))!==null&&n!==void 0?n:t},[r,e])};Br.initializeApp({apiKey:"AIzaSyDqboFWPZtKfVD8KqznFLBUqkd9JN7l7WY",authDomain:"chat-app-37466.firebaseapp.com",projectId:"chat-app-37466",storageBucket:"chat-app-37466.firebasestorage.app",messagingSenderId:"368301327304",appId:"1:368301327304:web:be77aad4c71d5b9e69f6fd",measurementId:"G-XRQMR57SP5"});const eu=Br.auth(),Ux=Br.firestore();function Bx(){const[r]=bx(eu);return nt.jsx(nt.Fragment,{children:nt.jsxs("div",{className:"App",children:[nt.jsxs("header",{children:[nt.jsx("h1",{children:"⚛️🔥💬"}),nt.jsx(jx,{})]}),nt.jsx("section",{children:r?nt.jsx(qx,{}):nt.jsx(zx,{})})]})})}function zx(){const r=()=>{const e=new Br.auth.GoogleAuthProvider;eu.signInWithPopup(e)};return nt.jsx("button",{onClick:r,children:"Sign in with Google"})}function jx(){return eu.currentUser&&nt.jsx("button",{onClick:()=>eu.signOut(),children:"Sign Out"})}function qx(){const r=zt.useRef(),e=Ux.collection("messages"),t=e.orderBy("createdAt").limit(25),[n]=Mx(t,{idField:"id"}),[s,a]=zt.useState(""),l=async d=>{d.preventDefault();const{uid:f,photoURL:m}=eu.currentUser;await e.add({text:s,createdAt:Br.firestore.FieldValue.serverTimestamp(),uid:f,photoURL:m}),a(""),r.current.scrollIntoView({behavior:"smooth"})};return nt.jsxs(nt.Fragment,{children:[nt.jsxs("main",{children:[n&&n.map(d=>nt.jsx($x,{message:d},d.id)),nt.jsx("div",{ref:r})]}),nt.jsxs("form",{onSubmit:l,children:[nt.jsx("input",{value:s,onChange:d=>a(d.target.value)}),nt.jsx("button",{type:"submit",children:"submit🕊️"})]})]})}function $x(r){const{text:e,uid:t,photoURL:n}=r.message,s=t==eu.currentUser.uid?"sent":"received";return nt.jsxs("div",{className:`message ${s}`,children:[nt.jsx("img",{src:n,alt:"image"}),nt.jsx("p",{children:e})]})}bA.createRoot(document.getElementById("root")).render(nt.jsx(zt.StrictMode,{children:nt.jsx(Bx,{})}));
