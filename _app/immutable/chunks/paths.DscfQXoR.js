import{n as l,m as w,r as k,s as v,o as x}from"./scheduler.oylLmlEu.js";const c=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=l){let r;const n=new Set;function a(t){if(v(s,t)&&(s=t,r)){const i=!c.length;for(const e of n)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(t){a(t(s))}function f(t,i=l){const e=[t,i];return n.add(e),n.size===1&&(r=o(a,b)||l),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function E(s,o,r){const n=!Array.isArray(s),a=n?[s]:s;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=o(n?e[0]:e,f,t);b?f(u):p=x(u)?u:l},q=a.map((u,_)=>w(u,m=>{e[_]=m,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){k(q),p(),i=!1}})}function S(s){return{subscribe:s.subscribe.bind(s)}}var h;const T=((h=globalThis.__sveltekit_1galefq)==null?void 0:h.base)??"";var y;const j=((y=globalThis.__sveltekit_1galefq)==null?void 0:y.assets)??T;export{S as a,T as b,j as c,E as d,z as r,A as w};