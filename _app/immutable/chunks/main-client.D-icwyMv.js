var hn=Object.defineProperty;var _n=(e,n,t)=>n in e?hn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ie=(e,n,t)=>(_n(e,typeof n!="symbol"?n+"":n,t),t),xe=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)};var y=(e,n,t)=>(xe(e,n,"read from private field"),t?t.call(e):n.get(e)),L=(e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)},I=(e,n,t,s)=>(xe(e,n,"write to private field"),s?s.call(e,t):n.set(e,t),t);var Se=(e,n,t)=>(xe(e,n,"access private method"),t);import{q as be,S,v as dn,w as vn,l as pn,o as te,x as le,s as T,U as X,y as mn,z as _e,m as de,g as M,A as Oe,a as re,B as wn,i as P,h as Y,n as Je,C as yn,E as He,k as z,j as me,F as Qe,G as Be,H as Xe,I as G,R as En,J as ve,K as je,L as Ze,M as Cn,N as An,D as In,O as xn,P as Le,Q as Sn,T as On,V as ue,W as kn,c as ee,u as Rn}from"./runtime.BeMPr59v.js";import{r as R,E as en,p as nn,q as ke,v as ne,h as tn,w as W,x as ie,y as sn,z as B,A as K,B as fn,C as Te,D as Ne,F as se,G as gn,P as Ln,H as Tn,I as Dn,J as Pn}from"./disclose-version.BSRJAapT.js";function ae(e,n=!0,t){if(typeof e=="object"&&e!=null&&!be(e)){if(S in e){const i=e[S];if(i.t===e||i.p===e)return i.p}const s=wn(e);if(s===dn||s===vn){const i=new Proxy(e,Kn);return pn(e,S,{value:{s:new Map,v:te(0),a:le(e),i:n,p:i,t:e},writable:!0,enumerable:!1}),i}}return e}function Ue(e,n=1){T(e,e.v+n)}const Kn={defineProperty(e,n,t){if(t.value){const s=e[S],i=s.s.get(n);i!==void 0&&T(i,ae(t.value,s.i,s.o))}return Reflect.defineProperty(e,n,t)},deleteProperty(e,n){const t=e[S],s=t.s.get(n),i=t.a,f=delete e[n];if(i&&f){const l=t.s.get("length"),a=e.length-1;l!==void 0&&l.v!==a&&T(l,a)}return s!==void 0&&T(s,X),f&&Ue(t.v),f},get(e,n,t){var f;if(n===S)return Reflect.get(e,S);const s=e[S];let i=s.s.get(n);if(i===void 0&&(Oe()||mn)&&(!(n in e)||(f=_e(e,n))!=null&&f.writable)&&(i=(s.i?te:de)(ae(e[n],s.i,s.o)),s.s.set(n,i)),i!==void 0){const l=M(i);return l===X?void 0:l}return Reflect.get(e,n,t)},getOwnPropertyDescriptor(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);if(t&&"value"in t){const i=e[S].s.get(n);i&&(t.value=M(i))}return t},has(e,n){var f;if(n===S)return!0;const t=e[S],s=Reflect.has(e,n);let i=t.s.get(n);return(i!==void 0||Oe()&&(!s||(f=_e(e,n))!=null&&f.writable))&&(i===void 0&&(i=(t.i?te:de)(s?ae(e[n],t.i,t.o):X),t.s.set(n,i)),M(i)===X)?!1:s},set(e,n,t,s){const i=e[S];let f=i.s.get(n);f===void 0&&Oe()&&(re(()=>s[n]),f=i.s.get(n)),f!==void 0&&T(f,ae(t,i.i,i.o));const l=i.a,a=!(n in e);if(l&&n==="length")for(let r=t;r<e.length;r+=1){const d=i.s.get(r+"");d!==void 0&&T(d,X)}if(e[n]=t,a){if(l){const r=i.s.get("length"),d=e.length;r!==void 0&&r.v!==d&&T(r,d)}Ue(i.v)}return!0},ownKeys(e){const n=e[S];return M(n.v),Reflect.ownKeys(e)}},De=-1,Re=99999999,ln=-2;function bn(e,n){return{a:n,d:null,f:e,v:[],e:null,p:me,r:null,s:[],t:Qe}}function Bn(e,n,t){return{a:null,d:null,e:null,i:n,k:t,v:e,p:me,r:null,s:null,t:Be}}function rn(e,n,t,s,i,f,l){const a=(t&W)!==0,r=bn(t,e);let d=null;tn(e,a);let u,p=null,o=null,m=!1;r.r=h=>{const c=d,w=c.s;w.add(h),h.f(()=>{w.delete(h),w.size===0&&c.e!==null&&(c.d!==null&&(R(c.d),c.d=null),P(c.e),c.e=null)})};const _=()=>{const h={d:null,e:null,s:new Set,p:d},c=Y(()=>{const w=r.d;w!==null&&(R(w),r.d=null);let A=r.a;(r.f&W)!==0&&(ie?A=A.firstChild:(A=sn(),r.a.appendChild(A))),f(A),h.d=r.d,r.d=null},r,!0);h.e=c,d=h},E=h=>{const c=h.f,w=(c&W)!==0,A=h.a;l(u,h,A,w,i,c,!0,p)},v=Y(()=>{var w,A;const h=n();u=le(h)?h:h==null?[]:Array.from(h),s!==null?p=u.map(s):t&en||u.map(Je);const c=u.length;if(ie){const x=((A=(w=B)==null?void 0:w[0])==null?void 0:A.data)==="ssr:each_else";x&&c||!x&&!c?(R(B),K(null),m=!0):x&&B.shift()}if(f!==null){if(c===0){if(r.v.length!==0||o===null){E(r),_();return}}else if(r.v.length===0&&d!==null){const x=d,g=x.s;g.size===0?x.d!==null&&(R(x.d),x.d=null):q(g,"out")}}o!==null&&z(o)},r,!1);o=Y(E,r,!0),m&&K([]),v.ondestroy=()=>{const h=r.f,c=r.a,w=(h&W)!==0;let A=d;for(;A!==null;){const x=A.d;x!==null&&R(x);const g=A.e;g!==null&&P(g),A=A.p}l([],r,c,w,i,h,!1,p),P(o)},r.e=v}function lt(e,n,t,s,i,f){rn(e,n,t,s,i,f,Mn)}function rt(e,n,t,s,i){rn(e,n,t,null,s,i,Nn)}function Nn(e,n,t,s,i,f,l){f&se&&!be(e)&&!(S in e)&&(f^=se);var a=n.v,r=n.s,d=a.length,u=e.length,p=Math.max(d,u),o=0,m,_;if(r.length!==0&&cn(r),u===0)for(m=[],s&&d!==0&&nn(t);o<p;)_=a[o++],V(_,r,l,s);else{var E;let w=!1;if(m=Array(u),ie){for(var v=B,h=v[0];o<p;o++){var c=fn(h);if(K(c),!c){w=!0;break}E=e[o],_=$(E,null,o,i,f),m[o]=_,h=c[c.length-1].nextSibling.nextSibling}on(v,h)}for(;o<p;o++)o>=d?(E=e[o],_=$(E,null,o,i,f),m[o]=_,he(_,t,s,null)):o>=u?(_=a[o],V(_,r,l)):(E=e[o],_=a[o],m[o]=_,Z(_,E,o,f));w&&K([])}n.v=m}function Mn(e,n,t,s,i,f,l,a){f&se&&!be(e)&&!(S in e)&&(f^=se,f&ne||(f^=ne));var r=n.v;const d=a!==null;var u=n.s,p=r.length,o=e.length,m,_;if(u.length!==0&&cn(u),o===0)for(m=[],s&&p!==0&&nn(t);p>0;)_=r[--p],V(_,u,l,s);else{var E=p-1,v=o-1,h,c,w;let qe=!1;if(m=Array(o),ie){for(var A,x=B,g=x[0];o>0;){if(A=fn(g),K(A),!A){qe=!0;break}w=v- --o,c=e[w],h=d?a[w]:c,_=$(c,h,w,i,f),m[w]=_,g=(A[A.length-1]||g).nextSibling.nextSibling}on(x,g)}if(p===0)for(;o>0;)w=v- --o,c=e[w],h=d?a[w]:c,_=$(c,h,w,i,f),m[w]=_,he(_,t,s,null);else{var we=(f&Te)!==0,ye=(f&(ne|Ne))!==0||we,C=0,J=null;c=e[v],h=d?a[v]:c;e:for(;;){for(;r[E].k===h;){if(_=r[E--],c=e[v],ye&&Z(_,c,v,f),J=Fe(_),m[v]=_,C>--v||C>E)break e;h=d?a[v]:c}for(c=e[C],h=d?a[C]:c;C<=E&&C<=v&&r[C].k===h;)c=e[C],_=r[C],ye&&Z(_,c,C,f),m[C]=_,++C,h=d?a[C]:e[C];break}if(C>E)for(;v>=C;)c=e[v],h=d?a[v]:c,_=$(c,h,v,i,f),m[v--]=_,J=he(_,t,s,J);else if(C>v){o=C;do(_=r[o++])!==null&&V(_,u,l);while(o<=E)}else{var oe=0,Q=v-C+1,ce=new Int32Array(Q),Ee=new Map;for(o=0;o<Q;++o)p=o+C,ce[o]=De,c=e[p],h=d?a[p]:c,yn(Ee,h,p);if(we)for(o=C;o<=E;++o)p=He(Ee,r[o].k),p!==void 0&&(c=e[p],_=r[o],Z(_,c,p,f));for(o=C;o<=E;++o)p=He(Ee,r[o].k),_=r[o],p!==void 0?(oe=oe<p?p:Re,ce[p-C]=o,m[p]=_):_!==null&&V(_,u,l);oe===Re&&zn(ce);for(var Ce,ze,Ae;Q-- >0;)v=Q+C,p=ce[Q],Ae=p===-1,c=e[v],Ae?(h=d?a[v]:c,_=$(c,h,v,i,f)):(_=m[v],!we&&ye&&Z(_,c,v,f)),(Ae||oe===Re&&p!==ln)&&(ze=Ce===void 0?J:Fe(Ce),J=he(_,t,s,ze)),m[v]=_,Ce=_}}qe&&K([])}n.v=m}function on(e,n){if(n!==null){var t=e.indexOf(n);t!==-1&&e.length>t+1&&R(e.slice(t))}}function zn(e){for(var n=e.length,t=new Int32Array(n),s=new Int32Array(n),i=0,f=0,l,a,r,d;e[f]===De;++f);for(s[0]=f++;f<n;++f)if(a=e[f],a!==De)if(l=s[i],e[l]<a)t[f]=l,s[++i]=f;else{for(r=0,d=i;r<d;)l=r+d>>1,e[s[l]]<a?r=l+1:d=l;a<e[s[r]]&&(r>0&&(t[f]=s[r-1]),s[r]=f)}for(l=s[i];i-->=0;)e[l]=ln,l=t[l]}function he(e,n,t,s){var i=e.d;return s===null?t?ke(i,n,null):ke(i,n.parentNode,n):ke(i,null,s)}function Fe(e){var n=e.d;return le(n)?n[0]:n}function cn(e){var n=e.length;if(n>0){for(var t=0,s,i;t<n;t++)s=e[t],i=s.r,i!==null&&(s.r=null,V(s,null,!1));e.length=0}}function qn(e){const n=e.d;if(le(n))for(let t=0;t<n.length;t++){const s=n[t];if(s.nodeType!==8)return s}return n}function Z(e,n,t,s){const i=e.v;s&ne&&T(i,n);const f=e.s,l=(s&Ne)!==0,a=e.a;f!==null&&s&en&&a!==null&&a(e,f),l?T(e.i,t):e.i=t}function V(e,n,t,s=!1){const i=e.s;if(t&&i!==null){for(let l of i)l.r==="key"&&i.delete(l);if(i.size===0)e.s=null;else{q(i,"out"),n!==null&&n.push(e);return}}const f=e.d;!s&&f!==null&&R(f),P(e.e)}function $(e,n,t,s,i){const l=(i&ne)===0?e:i&se?te(e):de(e),a=i&Ne?te(t):t,r=Bn(l,a,n),d=Y(u=>{s(null,u.v,u.i)},r,!0);return r.e=d,r}const un=typeof window<"u",Hn=un?requestAnimationFrame:Je,jn=un?()=>performance.now():()=>Date.now(),Pe={tick:e=>Hn(e),now:()=>jn()},N=new Set,Ye=Number.MIN_SAFE_INTEGER;let pe;function ot(e,n,t,s=!1){Me(e,n,t,"both",s)}function ct(e,n,t,s=!1){Me(e,n,t,"in",s)}function ut(e,n,t,s=!1){Me(e,n,t,"out",s)}function Un(e,n,{bubbles:t=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t,s,n),i}function ge(e,n){e.dispatchEvent(Un(n))}function Fn(e){const n=e.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Yn(e){const n={},t=e.split(";");for(const s of t){const[i,f]=s.split(":");if(!i||f===void 0)break;const l=Fn(i.trim());n[l]=f.trim()}return n}var H,j,D,U,F,k,O,b,fe,Ke;class Vn{constructor(n,t,s,i){L(this,fe);Ie(this,"onfinish");L(this,H,void 0);L(this,j,void 0);L(this,D,void 0);L(this,U,void 0);L(this,F,void 0);Ie(this,"paused");L(this,k,void 0);L(this,O,void 0);L(this,b,void 0);I(this,j,t),I(this,U,s),this.paused=!1,I(this,H,n),I(this,k,i),I(this,O,s),I(this,D,i?t:0),I(this,F,0),I(this,b,!1),this.onfinish=null,y(this,U)&&(i||y(this,H).call(this,0,1))}pause(){this.paused=!0}play(){this.paused=!1,N.has(this)||(I(this,F,Pe.now()),pe===void 0&&(pe=Pe.tick(an)),N.add(this))}reverse(){y(this,U)===0?Se(this,fe,Ke).call(this):(I(this,O,y(this,U)),I(this,b,!0))}cancel(){N.delete(this);const n=y(this,D)/y(this,j);if(n>0&&n<1){const t=y(this,k)?1:0;y(this,H).call(this,t,1-t)}}finish(){N.delete(this),this.onfinish&&this.onfinish()}_update(n){let t=n-y(this,F);if(I(this,F,n),y(this,O)!==0){const i=y(this,O)===Ye;let f=!y(this,b);if(I(this,O,y(this,O)-t),y(this,O)<0||i||y(this,O)===0&&y(this,k)){const l=i?0:-y(this,O);I(this,O,0),y(this,b)?(I(this,b,!1),Se(this,fe,Ke).call(this)):(l!==0||y(this,k))&&(t=l),f=!1}else y(this,O)===0&&I(this,O,Ye);if(f)return}I(this,D,y(this,D)+(y(this,k)?-t:t));let s=y(this,D)/y(this,j);s<0?s=0:s>1&&(s=1),(y(this,k)&&s<=0||!y(this,k)&&s>=1)&&(s=y(this,k)?0:1,y(this,O)===0&&(N.delete(this),this.onfinish&&(this.paused=!0,this.onfinish()))),y(this,H).call(this,s,1-s)}}H=new WeakMap,j=new WeakMap,D=new WeakMap,U=new WeakMap,F=new WeakMap,k=new WeakMap,O=new WeakMap,b=new WeakMap,fe=new WeakSet,Ke=function(){I(this,k,!y(this,k)),this.paused&&(y(this,D)===0&&I(this,D,y(this,j)),this.play())};function an(e){for(const n of N)n.paused||n._update(e);N.size!==0?pe=Pe.tick(an):pe=void 0}function Ve(e,n,t,s,i){const f=[],a=Math.max(t,16.666);for(let r=0;r<=a;r+=16.666){let d;r+16.666>a?d=1:r===0?d=0:d=r/a;let u=e(d);i&&(u=1-u),f.push(Yn(n(u,1-u)))}return(s==="out"||i)&&f.reverse(),f}const Ge=e=>e;function Gn(e,n,t,s){let i="in",f=[],l=null,a=!1;const r=()=>{let u=d.p;if(typeof u=="function"&&(u=u({direction:i})),u==null)return;const p=u.duration??300,o=u.delay??0,m=u.css,_=u.tick,E=u.easing||Ge;if(typeof _=="function")l=new Vn(_,p,o,t==="out");else{const v=typeof m=="function"?Ve(E,m,p,t,!1):[];l=e.animate(v,{duration:p,endDelay:o,delay:o,fill:"both"})}l.pause(),l.onfinish=()=>{const v=i==="out";l.cancel(),v&&(Le(f),f=[]),ge(e,v?"outroend":"introend")}},d={e:s,i:n,p:null,f(u){f.push(u)},in(){const u=i!=="in";i="in",(l===null||a)&&(a=!1,r()),l===null?d.x():(ge(e,"introstart"),u&&l.reverse(),l.play())},o(){if(e.__animate){const o=getComputedStyle(e),m=o.position;if(m!=="absolute"&&m!=="fixed"){const{width:_,height:E}=o,v=e.getBoundingClientRect();e.style.position="absolute",e.style.width=_,e.style.height=E;const h=e.getBoundingClientRect();if(v.left!==h.left||v.top!==h.top){const c=`translate(${v.left-h.left}px, ${v.top-h.top}px)`,w=o.transform;if(w==="none")e.style.transform=c;else{const x={transform:w.startsWith("matrix(1,")?c:"matrix(1,0,0,1,0,0)"};e.animate([x,x],{duration:1}).pause()}}}}const p=t==="both"&&i!=="out";if(i="out",(l===null||a)&&(a=!1,r()),l===null)d.x();else if(ge(e,"outrostart"),p){const o=d.p,m=l;if(o!==null&&o.css!==void 0&&m.playState==="idle"){const _=o.duration??300,E=o.css,v=o.easing||Ge,h=Ve(v,E,_,t,!0),c=m.effect;c!==null&&c.setKeyframes(h)}l.reverse()}else l.play()},c(){l!==null&&l.cancel(),a=!0},x(){Le(f),f=[]},r:t,d:e};return d}function We(e){const n=e.t;return n===G||n===Be||n===An||n===Xe||n===In||n===Qe&&e.v.length===0}function Me(e,n,t,s,i){const f=Sn,l=me,a=s==="key";let r=!0,d=!1;a&&(e.__animate=!0);let u=l;e:for(;u!==null;){if(We(u)){if(u.t===Be)u.r=$n,u.a=Jn,u=u.p;else if(u.t===Xe&&u.n)r=!0;else if(u.t===G&&(u.r=Wn,r)){let o=u;for(;o.t===G;){if(o.e!==null&&!o.v){r=!0;break e}o=o.p}}!d&&r&&(r=u.e!==null),(r||!i)&&(d=!0)}else u.t===En&&!d&&(r=u.e!==null||u.i);u=u.p}let p;ve(()=>{let o=!1;p!==void 0&&(o=!0,p.x());const m=n();p=Gn(e,c=>re(()=>{const w=t===null?{}:t();return a?m(e,{from:c,to:e.getBoundingClientRect()},w,{}):m(e,w,{direction:s})}),s,f);const E=s==="in",v=r&&(E||s==="both");v&&!o&&(p.p=p.i());const h=Ze(()=>{P(h),e.inert=!1,v&&!o&&p.in();let c=l;for(;!E&&c!==null;){const w=c.p;if(We(c)&&(c.r!==null&&c.r(p),w===null||!i&&(c.t!==G||w.t!==G||w.v)))break;c=w}})}),s==="key"&&ve(()=>()=>{p.x()})}function q(e,n,t){const s=[];for(const i of e){const f=i.r,l=i.e;n==="in"?(f==="in"||f==="both"?i.in():i.c(),i.d.inert=!1,je(l,!1)):n==="key"?f==="key"&&(i.p||(i.p=i.i(t)),i.in()):((f==="out"||f==="both")&&(i.p||(i.p=i.i()),s.push(i.o)),i.d.inert=!0,je(l,!0))}if(s.length>0){const i=Ze(()=>{P(i);const f=xn(()=>{P(f),Le(s)})})}}function Wn(e){const n=this;if(n.v){const t=n.c??(n.c=new Set);t.add(e),e.f(()=>{const s=t;if(s.delete(e),!n.v&&s.size===0){const i=n.ce;z(i)}})}else{const t=n.a??(n.a=new Set);t.add(e),e.f(()=>{const s=t;if(s.delete(e),n.v&&s.size===0){const i=n.ae;z(i)}})}}function $n(e){const n=this,t=n.p;if((t.f&W)!==0){const f=sn();t.f^=W,gn(t.a,f),t.a=f}e.r==="key"&&!(t.f&Te)&&(t.f|=Te);const i=n.s??(n.s=new Set);e.f(()=>{if(i.delete(e),e.r!=="key"){for(let f of i){const l=f.r;(l==="key"||l==="in")&&i.delete(f)}i.size===0&&(n.s=null,V(n,null,!0))}}),i.add(e)}function Jn(e,n){const s=qn(e).getBoundingClientRect();for(const i of n)i.r==="key"&&i.c();Cn(()=>{q(n,"key",s)})}function Qn(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:me,r:null,t:G,v:!1}}function at(e,n,t,s){const i=Qn();tn(e);let f=!1,l=null,a=null,r=!1,d=null,u,p;const o=Y(()=>{var _,E;const m=!!n();if(i.v!==m||!r){if(i.v=m,r){const v=i.c,h=i.a;m?(h===null||h.size===0?z(p):q(h,"out"),v===null||v.size===0?z(u):q(v,"in")):(v===null||v.size===0?z(u):q(v,"out"),h===null||h.size===0?z(p):q(h,"in"))}else if(ie){const v=(E=(_=B)==null?void 0:_[0])==null?void 0:E.data;!v||v==="ssr:if:true"&&!m||v==="ssr:if:false"&&m?(R(B),K(null),f=!0):B.shift()}r=!0}u??(u=Y((v,h)=>{const c=i.v;!c&&l!==null&&(R(l),l=null),c&&d!==h&&(t(e),f&&d===null&&K([]),d=h,l=i.d),i.d=null},i,!0)),i.ce=u,p??(p=Y((v,h)=>{const c=i.v;c&&a!==null&&(R(a),a=null),!c&&d!==h&&(s!==null&&s(e),f&&d===null&&K([]),d=h,a=i.d),i.d=null},i,!0)),i.ae=p},i);o.ondestroy=()=>{l!==null&&R(l),a!==null&&R(a),P(u),P(p)},i.e=o}function $e(e,n){var s;var t=e&&((s=e[S])==null?void 0:s.t);return e===n||t===n}function ht(e,n,t,s){var i,f,l=ve(()=>{i=f,f=(s==null?void 0:s())||[],re(()=>{e!==t(...f)&&(n(e,...f),i&&$e(t(...i),e)&&n(null,...i))})});l.ondestroy=()=>{ve(()=>{f&&$e(t(...f),e)&&n(null,...f)})}}const Xn={get(e,n){if(!e.exclude.includes(n))return e.props[n]},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function _t(e,n){return new Proxy({props:e,exclude:n},Xn)}const Zn={get(e,n){let t=e.props.length;for(;t--;){let s=e.props[t];if(ue(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let s=e.props[t];if(ue(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return _e(s,n)}},has(e,n){for(let t of e.props)if(ue(t)&&(t=t()),n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){ue(t)&&(t=t());for(const s in t)n.includes(s)||n.push(s)}return n}};function dt(...e){return new Proxy({props:e},Zn)}function vt(e,n,t,s){var o;var i=(t&Dn)!==0,f=(t&Pn)!==0,l=e[n],a=(o=_e(e,n))==null?void 0:o.set;if(l===void 0&&s!==void 0){if(a&&f)throw new Error("ERR_SVELTE_BINDING_FALLBACK");t&Ln&&(s=s()),l=s,a&&a(l)}var r=()=>{var m=e[n];return m!==void 0&&(s=void 0),m===void 0?s:m};if(!(t&Tn))return r;if(a)return function(m){return arguments.length===1?(a(m),m):r()};var d=!1,u=de(l),p=kn(()=>{var m=r(),_=M(u);return d?(d=!1,_):u.v=m});return i||(p.equals=On),function(m){var _=M(p);return arguments.length>0?(p.equals(m)||(d=!0,T(u,m),M(p)),m):_}}function et(e){if(ee===null)throw new Error("onMount can only be used during component initialisation.");ee.r?Rn(()=>{const n=re(e);if(typeof n=="function")return n}):tt(ee).m.push(e)}function pt(e){if(ee===null)throw new Error("onDestroy can only be used during component initialisation.");et(()=>()=>re(e))}function nt(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function mt(){const e=ee;if(e===null)throw new Error("createEventDispatcher can only be used during component initialisation.");return(n,t,s)=>{var f;const i=(f=e.s.$$events)==null?void 0:f[n];if(i){const l=le(i)?i.slice():[i],a=nt(n,t,s);for(const r of l)r.call(e.x,a);return!a.defaultPrevented}return!0}}function tt(e){return e.u??(e.u={a:[],b:[],m:[]})}export{vt as a,ht as b,lt as c,pt as d,rt as e,mt as f,ot as g,ct as h,at as i,ut as j,et as o,ae as p,_t as r,dt as s,q as t};
