var q=Object.defineProperty;var G=(t,n,e)=>n in t?q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(G(t,typeof n!="symbol"?n+"":n,e),e);function L(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function ot(){return Object.create(null)}function F(t){t.forEach(z)}function R(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function ut(t){return Object.keys(t).length===0}function U(t,...n){if(t==null){for(const i of n)i(void 0);return L}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(U(n,e))}function _t(t,n,e,i){if(t){const s=j(t,n,e,i);return t[0](s)}}function j(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const s=t[2](i(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(n.dirty.length,s.length);for(let o=0;o<c;o+=1)r[o]=n.dirty[o]|s[o];return r}return n.dirty|s}return n.dirty}function dt(t,n,e,i,s,r){if(s){const c=j(n,e,i,r);t.p(c,s)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function bt(t){const n={};for(const e in t)n[e]=!0;return n}function gt(t,n,e){return t.set(e),n}function xt(t){return t&&R(t.destroy)?t.destroy:L}let y=!1;function wt(){y=!0}function Et(){y=!1}function W(t,n,e,i){for(;t<n;){const s=t+(n-t>>1);e(s)<=i?t=s+1:n=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&l.push(u)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let s=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,u=(s>0&&n[e[s]].claim_order<=a?s+1:W(1,s,B=>n[e[B]].claim_order,a))-1;i[l]=e[u]+1;const N=u+1;e[N]=l,s=Math.max(N,s)}const r=[],c=[];let o=n.length-1;for(let l=e[s]+1;l!=0;l=i[l-1]){for(r.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);r.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<r.length&&c[l].claim_order>=r[a].claim_order;)a++;const u=a<r.length?r[a]:null;t.insertBefore(c[l],u)}}function K(t,n){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function V(t,n,e){y&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function vt(){return v(" ")}function Nt(){return v("")}function kt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function At(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Lt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function C(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const X=["width","height"];function Y(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set&&X.indexOf(i)===-1?t[i]=n[i]:C(t,i,n[i])}function Z(t,n){Object.keys(n).forEach(e=>{$(t,e,n[e])})}function $(t,n,e){const i=n.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&e===""?!0:e:n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:C(t,n,e)}function jt(t){return/-/.test(t)?Z:Y}function Mt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,s=!1){S(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function O(t,n,e,i){return H(t,s=>s.nodeName===n,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];e[o.name]||r.push(o.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(n))}function Pt(t,n,e){return O(t,n,e,M)}function Ct(t,n,e){return O(t,n,e,P)}function tt(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function St(t){return tt(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===n)return i}return-1}function Ht(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new b(n);S(t);const s=t.splice(e,i-e+1);w(s[0]),w(s[s.length-1]);const r=s.slice(1,s.length-1);if(r.length===0)return new b(n);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(n,r)}function Ot(t,n){n=""+n,t.data!==n&&(t.data=n)}function Dt(t,n){t.value=n??""}function Bt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function qt(t,n,e){t.classList.toggle(n,!!e)}function nt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class et{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=P(e.nodeName):this.e=M(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Q(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class b extends et{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],e)}}function Gt(t,n){return new t(n)}let p;function g(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function It(t){d().$$.on_mount.push(t)}function zt(t){d().$$.after_update.push(t)}function Ft(t){d().$$.on_destroy.push(t)}function Rt(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[n];if(s){const r=nt(n,e,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function Ut(t,n){return d().$$.context.set(t,n),n}function Wt(t){return d().$$.context.get(t)}function Jt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const m=[],A=[];let h=[];const E=[],D=Promise.resolve();let T=!1;function it(){T||(T=!0,D.then(ct))}function Kt(){return it(),D}function st(t){h.push(t)}function Qt(t){E.push(t)}const x=new Set;let _=0;function ct(){if(_!==0)return;const t=p;do{try{for(;_<m.length;){const n=m[_];_++,g(n),lt(n.$$)}}catch(n){throw m.length=0,_=0,n}for(g(null),m.length=0,_=0;A.length;)A.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];x.has(e)||(x.add(e),e())}h.length=0}while(m.length);for(;E.length;)E.pop()();T=!1,x.clear(),g(t)}function lt(t){if(t.fragment!==null){t.update(),F(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(st)}}function Vt(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{xt as $,A,Gt as B,Kt as C,ot as D,ct as E,ut as F,st as G,Vt as H,p as I,g as J,z as K,m as L,it as M,wt as N,Et as O,b as P,Ht as Q,kt as R,Jt as S,At as T,Lt as U,Wt as V,yt as W,d as X,I as Y,pt as Z,Y as _,U as a,jt as a0,P as a1,Ct as a2,Ft as a3,bt as a4,qt as a5,Qt as a6,Dt as a7,Rt as a8,Ut as a9,gt as aa,Tt as ab,ht as b,_t as c,vt as d,M as e,Pt as f,mt as g,Mt as h,R as i,tt as j,w as k,St as l,V as m,L as n,K as o,Ot as p,ft as q,F as r,at as s,v as t,dt as u,Nt as v,zt as w,It as x,C as y,Bt as z};
