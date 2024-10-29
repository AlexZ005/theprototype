import{D as H,F as G,G as T,H as S,I as U,J as $,K as W,z as V,x as B,b as J,L as K,h as g,M as Y,N,O as b,B as L,c as y,y as j,P as D,Q as A,C as Q,R as X,S as Z,U as x,V as ee,W as te,X as re,a as ne,p as ae,o as se,f as oe,Y as ie,n as M,j as ue,Z as le}from"./runtime.B_A3xDWe.js";import{b as ce}from"./disclose-version.5CMN_7dh.js";import{s as fe}from"./utils.BIxPTm9_.js";const F=new Set,R=new Set;function de(e,t,n,a){function s(r){if(a.capture||w.call(t,r),!r.cancelBubble){var u=W,d=V;T(null),S(null);try{return n.call(this,r)}finally{T(u),S(d)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?G(()=>{t.addEventListener(e,s,a)}):t.addEventListener(e,s,a),s}function me(e,t,n,a,s){var r={capture:a,passive:s},u=de(e,t,n,r);(t===document.body||t===window||t===document)&&H(()=>{t.removeEventListener(e,u,r)})}function Te(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var n of R)n(e)}function w(e){var C;var t=this,n=t.ownerDocument,a=e.type,s=((C=e.composedPath)==null?void 0:C.call(e))||[],r=s[0]||e.target,u=0,d=e.__root;if(d){var _=s.indexOf(d);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var h=s.indexOf(t);if(h===-1)return;_<=h&&(u=_)}if(r=s[u]||e.target,r!==t){U(e,"currentTarget",{configurable:!0,get(){return r||n}});var k=W,c=V;T(null),S(null);try{for(var o,i=[];r!==null;){var f=r.assignedSlot||r.parentNode||r.host||null;try{var p=r["__"+a];if(p!==void 0&&!r.disabled)if($(p)){var[q,...z]=p;q.apply(r,[e,...z])}else p.call(r,e)}catch(m){o?i.push(m):o=m}if(e.cancelBubble||f===t||f===null)break;r=f}if(o){for(let m of i)queueMicrotask(()=>{throw m});throw o}}finally{e.__root=t,delete e.currentTarget,T(k),S(c)}}}let l;function _e(){l=void 0}function Se(e){let t=null,n=g;var a;if(g){for(t=y,l===void 0&&(l=j(document.head));l!==null&&(l.nodeType!==8||l.data!==Y);)l=N(l);l===null?b(!1):l=L(N(l))}g||(a=document.head.appendChild(B()));try{J(()=>e(a),K)}finally{n&&(b(!0),l=y,L(t))}}function Le(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const he=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ke(e){return he.includes(e)}const pe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ae(e){return e=e.toLowerCase(),pe[e]??e}const ye=["touchstart","touchmove"];function ve(e){return ye.includes(e)}let I=!0;function Ne(e){I=e}function De(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function be(e,t){return P(e,t)}function Re(e,t){D(),t.intro=t.intro??!1;const n=t.target,a=g,s=y;try{for(var r=j(n);r&&(r.nodeType!==8||r.data!==Y);)r=N(r);if(!r)throw A;b(!0),L(r),Q();const u=P(e,{...t,anchor:r});if(y===null||y.nodeType!==8||y.data!==X)throw Z(),A;return b(!1),u}catch(u){if(u===A)return t.recover===!1&&x(),D(),ee(n),b(!1),be(e,t);throw u}finally{b(a),L(s),_e()}}const v=new Map;function P(e,{target:t,anchor:n,props:a={},events:s,context:r,intro:u=!0}){D();var d=new Set,_=c=>{for(var o=0;o<c.length;o++){var i=c[o];if(!d.has(i)){d.add(i);var f=ve(i);t.addEventListener(i,w,{passive:f});var p=v.get(i);p===void 0?(document.addEventListener(i,w,{passive:f}),v.set(i,1)):v.set(i,p+1)}}};_(te(F)),R.add(_);var h=void 0,k=re(()=>{var c=n??t.appendChild(B());return ne(()=>{if(r){ae({});var o=oe;o.c=r}s&&(a.$$events=s),g&&ce(c,null),I=u,h=e(c,a)||{},I=!0,g&&(V.nodes_end=y),r&&se()}),()=>{var f;for(var o of d){t.removeEventListener(o,w);var i=v.get(o);--i===0?(document.removeEventListener(o,w),v.delete(o)):v.set(o,i)}R.delete(_),O.delete(h),c!==n&&((f=c.parentNode)==null||f.removeChild(c))}});return O.set(h,k),h}let O=new WeakMap;function Ie(e){const t=O.get(e);t&&t()}let E=!1;function Oe(e,t,n){const a=n[t]??(n[t]={store:null,source:ie(void 0),unsubscribe:M});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=M;else{var s=!0;a.unsubscribe=fe(e,r=>{s?a.source.v=r:le(a.source,r)}),s=!1}return ue(a.source)}function Ve(e,t){return e.set(t),t}function Ce(){const e={};return H(()=>{for(var t in e)e[t].unsubscribe()}),e}function Me(){E=!0}function He(e){var t=E;try{return E=!1,[e(),E]}finally{E=t}}export{De as a,Oe as b,He as c,Ne as d,Te as e,ke as f,de as g,Re as h,Le as i,I as j,Ve as k,Me as l,be as m,Ae as n,me as o,Se as p,Ce as s,Ie as u};
