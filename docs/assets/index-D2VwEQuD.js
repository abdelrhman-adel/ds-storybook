import{r as E}from"./index-DVXBtNgz.js";var x={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=E,C=Symbol.for("react.element"),h=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,S=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function O(r,e,n){var t,s={},l=null,d=null;n!==void 0&&(l=""+n),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(d=e.ref);for(t in e)P.call(e,t)&&!V.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:C,type:r,key:l,ref:d,props:s,_owner:S.current}}v.Fragment=h;v.jsx=O;v.jsxs=O;x.exports=v;var T=x.exports;function j(r){var e,n,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(n=j(r[e]))&&(t&&(t+=" "),t+=n);else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function A(){for(var r,e,n=0,t="";n<arguments.length;)(r=arguments[n++])&&(e=j(r))&&(t&&(t+=" "),t+=e);return t}const y=r=>typeof r=="boolean"?"".concat(r):r===0?"0":r,_=A,g=(r,e)=>n=>{var t;if((e==null?void 0:e.variants)==null)return _(r,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:l}=e,d=Object.keys(s).map(o=>{const a=n==null?void 0:n[o],u=l==null?void 0:l[o];if(a===null)return null;const i=y(a)||y(u);return s[o][i]}),c=n&&Object.entries(n).reduce((o,a)=>{let[u,i]=a;return i===void 0||(o[u]=i),o},{}),b=e==null||(t=e.compoundVariants)===null||t===void 0?void 0:t.reduce((o,a)=>{let{class:u,className:i,...N}=a;return Object.entries(N).every(k=>{let[m,f]=k;return Array.isArray(f)?f.includes({...l,...c}[m]):{...l,...c}[m]===f})?[...o,u,i]:o},[]);return _(r,d,b,n==null?void 0:n.class,n==null?void 0:n.className)};export{g as c,T as j};
