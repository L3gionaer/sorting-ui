import{n as b,m as w,r as k,s as v,o as x}from"./scheduler.oylLmlEu.js";const a=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=b){let r;const n=new Set;function u(t){if(v(s,t)&&(s=t,r)){const i=!a.length;for(const e of n)e[1](),a.push(e,s);if(i){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function l(t){u(t(s))}function f(t,i=b){const e=[t,i];return n.add(e),n.size===1&&(r=o(u,l)||b),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:u,update:l,subscribe:f}}function B(s,o,r){const n=!Array.isArray(s),u=n?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=o.length<2;return z(r,(f,t)=>{let i=!1;const e=[];let d=0,g=b;const _=()=>{if(d)return;g();const c=o(n?e[0]:e,f,t);l?f(c):g=x(c)?c:b},q=u.map((c,p)=>w(c,m=>{e[p]=m,d&=~(1<<p),i&&_()},()=>{d|=1<<p}));return i=!0,_(),function(){k(q),g(),i=!1}})}function E(s){return{subscribe:s.subscribe.bind(s)}}var h;const S=((h=globalThis.__sveltekit_1eq05tc)==null?void 0:h.base)??"/sorting-ui";var y;const j=((y=globalThis.__sveltekit_1eq05tc)==null?void 0:y.assets)??"https://l3gionaer.github.io/sorting-ui";export{E as a,S as b,j as c,B as d,z as r,A as w};