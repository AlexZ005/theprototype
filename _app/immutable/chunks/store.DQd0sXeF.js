import{D as H,F as G,h as y,G as m,H as A,I as U,J as $,K as W,z as M,x as q,b as J,L as K,M as B,N,O as g,B as S,c as v,y as Y,P as D,Q as L,C as Q,R as X,S as Z,U as x,V as ee,W as te,X as re,a as ne,p as ae,o as se,f as ie,Y as oe,n as R,Z as ue,j as fe}from"./runtime.CIM3sitz.js";import{b as ce}from"./disclose-version.oaUIuTKZ.js";import{s as le}from"./utils.iEQXz34h.js";const j=new Set,I=new Set;function Te(e){if(!y)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function de(e,t,a,n){function s(r){if(n.capture||w.call(t,r),!r.cancelBubble){var u=W,d=M;m(null),A(null);try{return a.call(this,r)}finally{m(u),A(d)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?G(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function me(e,t,a,n,s){var r={capture:n,passive:s},u=de(e,t,a,r);(t===document.body||t===window||t===document)&&H(()=>{t.removeEventListener(e,u,r)})}function Ae(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var a of I)a(e)}function w(e){var V;var t=this,a=t.ownerDocument,n=e.type,s=((V=e.composedPath)==null?void 0:V.call(e))||[],r=s[0]||e.target,u=0,d=e.__root;if(d){var _=s.indexOf(d);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var h=s.indexOf(t);if(h===-1)return;_<=h&&(u=_)}if(r=s[u]||e.target,r!==t){U(e,"currentTarget",{configurable:!0,get(){return r||a}});var k=W,c=M;m(null),A(null);try{for(var i,o=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var p=r["__"+n];if(p!==void 0&&!r.disabled)if($(p)){var[P,...z]=p;P.apply(r,[e,...z])}else p.call(r,e)}catch(T){i?o.push(T):i=T}if(e.cancelBubble||l===t||l===null)break;r=l}if(i){for(let T of o)queueMicrotask(()=>{throw T});throw i}}finally{e.__root=t,delete e.currentTarget,m(k),A(c)}}}let f;function _e(){f=void 0}function Se(e){let t=null,a=y;var n;if(y){for(t=v,f===void 0&&(f=Y(document.head));f!==null&&(f.nodeType!==8||f.data!==B);)f=N(f);f===null?g(!1):f=S(N(f))}y||(n=document.head.appendChild(q()));try{J(()=>e(n),K)}finally{a&&(g(!0),f=v,S(t))}}function ke(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const he=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Le(e){return he.includes(e)}const pe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ne(e){return e=e.toLowerCase(),pe[e]??e}const ve=["touchstart","touchmove"];function ye(e){return ve.includes(e)}let O=!0;function De(e){O=e}function Re(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function be(e,t){return F(e,t)}function Ie(e,t){D(),t.intro=t.intro??!1;const a=t.target,n=y,s=v;try{for(var r=Y(a);r&&(r.nodeType!==8||r.data!==B);)r=N(r);if(!r)throw L;g(!0),S(r),Q();const u=F(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==X)throw Z(),L;return g(!1),u}catch(u){if(u===L)return t.recover===!1&&x(),D(),ee(a),g(!1),be(e,t);throw u}finally{g(n),S(s),_e()}}const b=new Map;function F(e,{target:t,anchor:a,props:n={},events:s,context:r,intro:u=!0}){D();var d=new Set,_=c=>{for(var i=0;i<c.length;i++){var o=c[i];if(!d.has(o)){d.add(o);var l=ye(o);t.addEventListener(o,w,{passive:l});var p=b.get(o);p===void 0?(document.addEventListener(o,w,{passive:l}),b.set(o,1)):b.set(o,p+1)}}};_(te(j)),I.add(_);var h=void 0,k=re(()=>{var c=a??t.appendChild(q());return ne(()=>{if(r){ae({});var i=ie;i.c=r}s&&(n.$$events=s),y&&ce(c,null),O=u,h=e(c,n)||{},O=!0,y&&(M.nodes_end=v),r&&se()}),()=>{var l;for(var i of d){t.removeEventListener(i,w);var o=b.get(i);--o===0?(document.removeEventListener(i,w),b.delete(i)):b.set(i,o)}I.delete(_),C.delete(h),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return C.set(h,k),h}let C=new WeakMap;function Oe(e){const t=C.get(e);t&&t()}let E=!1;function Ce(e,t,a){const n=a[t]??(a[t]={store:null,source:oe(void 0),unsubscribe:R});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=R;else{var s=!0;n.unsubscribe=le(e,r=>{s?n.source.v=r:ue(n.source,r)}),s=!1}return fe(n.source)}function Me(e,t,a){let n=a[t];return n&&n.store!==e&&(n.unsubscribe(),n.unsubscribe=R),e}function Ve(e,t){return e.set(t),t}function He(){const e={};return H(()=>{for(var t in e)e[t].unsubscribe()}),e}function We(e,t,a){return e.set(a),t}function qe(){E=!0}function Be(e){var t=E;try{return E=!1,[e(),E]}finally{E=t}}export{Re as a,Ce as b,Be as c,De as d,Ae as e,Le as f,de as g,Ie as h,ke as i,O as j,Ve as k,We as l,be as m,Ne as n,qe as o,me as p,Se as q,Te as r,He as s,Me as t,Oe as u};
