import{Y as A,Z as V,_ as k,$ as w,a0 as J,o as p,a1 as h,a2 as I,j as g,G as q,a3 as Q,a4 as W,D as X,b as ee,a5 as M,a as Y,a6 as B,h as j,O as re,E as ne,a7 as te,a8 as ae,N as ie,M as K,c as se,a9 as fe,aa as ue,g as x,ab as le,ac as ce,ad as oe,ae as de,af as _e,ag as ve,ah as he,C as U,ai as ye,aj as be,ak as pe,l as Z,al as ge,F as we,am as Pe,an as T,ao as Ee,m as Re,f as L,ap as z,e as me}from"./runtime.Bim-CxsK.js";import{c as Ie}from"./store.BLKL_Ris.js";function m(e,r=null,i){if(typeof e!="object"||e===null||A in e)return e;const f=W(e);if(f!==V&&f!==k)return e;var a=new Map,l=X(e),v=w(0);l&&a.set("length",w(e.length));var _;return new Proxy(e,{defineProperty(u,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&J();var s=a.get(n);return s===void 0?(s=w(t.value),a.set(n,s)):p(s,m(t.value,_)),!0},deleteProperty(u,n){var t=a.get(n);if(t===void 0)n in u&&a.set(n,w(h));else{if(l&&typeof n=="string"){var s=a.get("length"),c=Number(n);Number.isInteger(c)&&c<s.v&&p(s,c)}p(t,h),$(v)}return!0},get(u,n,t){var y;if(n===A)return e;var s=a.get(n),c=n in u;if(s===void 0&&(!c||(y=I(u,n))!=null&&y.writable)&&(s=w(m(c?u[n]:h,_)),a.set(n,s)),s!==void 0){var o=g(s);return o===h?void 0:o}return Reflect.get(u,n,t)},getOwnPropertyDescriptor(u,n){var t=Reflect.getOwnPropertyDescriptor(u,n);if(t&&"value"in t){var s=a.get(n);s&&(t.value=g(s))}else if(t===void 0){var c=a.get(n),o=c==null?void 0:c.v;if(c!==void 0&&o!==h)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(u,n){var o;if(n===A)return!0;var t=a.get(n),s=t!==void 0&&t.v!==h||Reflect.has(u,n);if(t!==void 0||q!==null&&(!s||(o=I(u,n))!=null&&o.writable)){t===void 0&&(t=w(s?m(u[n],_):h),a.set(n,t));var c=g(t);if(c===h)return!1}return s},set(u,n,t,s){var O;var c=a.get(n),o=n in u;if(l&&n==="length")for(var y=t;y<c.v;y+=1){var b=a.get(y+"");b!==void 0?p(b,h):y in u&&(b=w(h),a.set(y+"",b))}c===void 0?(!o||(O=I(u,n))!=null&&O.writable)&&(c=w(void 0),p(c,m(t,_)),a.set(n,c)):(o=c.v!==h,p(c,m(t,_)));var P=Reflect.getOwnPropertyDescriptor(u,n);if(P!=null&&P.set&&P.set.call(s,t),!o){if(l&&typeof n=="string"){var N=a.get("length"),E=Number(n);Number.isInteger(E)&&E>=N.v&&p(N,E+1)}$(v)}return!0},ownKeys(u){g(v);var n=Reflect.ownKeys(u).filter(c=>{var o=a.get(c);return o===void 0||o.v!==h});for(var[t,s]of a)s.v!==h&&!(t in u)&&n.push(t);return n},setPrototypeOf(){Q()}})}function $(e,r=1){p(e,e.v+r)}function Ae(e,r,i,f=null,a=!1){j&&re();var l=e,v=null,_=null,u=null,n=a?ne:0;ee(()=>{if(u===(u=!!r()))return;let t=!1;if(j){const s=l.data===te;u===s&&(l=ae(),ie(l),K(!1),t=!0)}u?(v?M(v):v=Y(()=>i(l)),_&&B(_,()=>{_=null})):(_?M(_):f&&(_=Y(()=>f(l))),v&&B(v,()=>{v=null})),t&&K(!0)},n),j&&(l=se)}function G(e,r){return e===r||(e==null?void 0:e[A])===r}function Le(e={},r,i,f){return fe(()=>{var a,l;return ue(()=>{a=l,l=[],x(()=>{e!==i(...l)&&(r(e,...l),a&&G(i(...a),e)&&r(null,...a))})}),()=>{le(()=>{l&&G(i(...l),e)&&r(null,...l)})}}),e}const Oe={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Fe(e,r,i){return new Proxy({props:e,exclude:r},Oe)}const Se={get(e,r){let i=e.props.length;for(;i--;){let f=e.props[i];if(T(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f)return f[r]}},set(e,r,i){let f=e.props.length;for(;f--;){let a=e.props[f];T(a)&&(a=a());const l=I(a,r);if(l&&l.set)return l.set(i),!0}return!1},getOwnPropertyDescriptor(e,r){let i=e.props.length;for(;i--;){let f=e.props[i];if(T(f)&&(f=f()),typeof f=="object"&&f!==null&&r in f){const a=I(f,r);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,r){for(let i of e.props)if(T(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){T(i)&&(i=i());for(const f in i)r.includes(f)||r.push(f)}return r}};function je(...e){return new Proxy({props:e},Se)}function H(e){for(var r=q,i=q;r!==null&&!(r.f&(ve|he));)r=r.parent;try{return U(r),e()}finally{U(i)}}function qe(e,r,i,f){var C;var a=(i&ye)!==0,l=(i&be)!==0,v=(i&pe)!==0,_=(i&Ee)!==0,u=!1,n;v?[n,u]=Ie(()=>e[r]):n=e[r];var t=(C=I(e,r))==null?void 0:C.set,s=f,c=!0,o=!1,y=()=>(o=!0,c&&(c=!1,_?s=x(f):s=f),s);n===void 0&&f!==void 0&&(t&&l&&ce(),n=y(),t&&t(n));var b;if(l)b=()=>{var d=e[r];return d===void 0?y():(c=!0,o=!1,d)};else{var P=H(()=>(a?Z:ge)(()=>e[r]));P.f|=oe,b=()=>{var d=g(P);return d!==void 0&&(s=void 0),d===void 0?s:d}}if(!(i&de))return b;if(t){var N=e.$$legacy;return function(d,R){return arguments.length>0?((!l||!R||N||u)&&t(R?b():d),d):b()}}var E=!1,O=!1,F=Re(n),S=H(()=>Z(()=>{var d=b(),R=g(F),D=we;return E||d===void 0&&D.f&Pe?(E=!1,O=!0,R):(O=!1,F.v=d)}));return a||(S.equals=_e),function(d,R){if(arguments.length>0){const D=R?g(S):l&&v?m(d):d;return S.equals(D)||(E=!0,p(F,D),o&&s!==void 0&&(s=D),x(()=>g(S))),d}return g(S)}}function De(e){L===null&&z(),L.l!==null?Te(L).m.push(e):me(()=>{const r=x(e);if(typeof r=="function")return r})}function Ce(e){L===null&&z(),De(()=>()=>x(e))}function Te(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{m as a,Le as b,Ce as c,Ae as i,De as o,qe as p,Fe as r,je as s};
