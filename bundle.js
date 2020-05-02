var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach(n=>{n.c(t)||(a.delete(n),n.f())}),0!==a.size&&u(f)}function d(t){let n;return 0===a.size&&u(f),{promise:new Promise(e=>{a.add(n={c:t,f:e})}),abort(){a.delete(n)}}}function p(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.data!==n&&(t.data=n)}function _(t,n){(null!=n||t.value)&&(t.value=n)}const w=new Set;let k,C=0;function E(t,n,e,o,r,i,s,l=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=n+(e-n)*i(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${l}`,d=t.ownerDocument;w.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,C+=1,f}function L(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),(C-=r)||u(()=>{C||(w.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),w.clear())}))}function A(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,function(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}(t,r)}}function R(t){k=t}function S(){if(!k)throw new Error("Function called outside component initialization");return k}const F=[],M=[],B=[],U=[],D=Promise.resolve();let N=!1;function q(t){B.push(t)}let O=!1;const T=new Set;function j(){if(!O){O=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];R(n),z(n.$$)}for(F.length=0;M.length;)M.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];T.has(n)||(T.add(n),n())}B.length=0}while(F.length);for(;U.length;)U.pop()();N=!1,O=!1,T.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}let I;function P(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const W=new Set;let H;function V(t,n){t&&t.i&&(W.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),H.c.push(()=>{W.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const G={duration:0};function J(e,o,s,l){let u=o(e,s),a=l?0:1,f=null,p=null,h=null;function m(){h&&L(e,h)}function g(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function $(o){const{delay:i=0,duration:s=300,easing:l=n,tick:$=t,css:y}=u||G,b={start:c()+i,b:o};o||(b.group=H,H.r+=1),f?p=b:(y&&(m(),h=E(e,a,o,s,i,l,y)),o&&$(0,1),f=g(b,s),q(()=>P(e,o,"start")),d(t=>{if(p&&t>p.start&&(f=g(p,s),p=null,P(e,f.b,"start"),y&&(m(),h=E(e,a,f.b,f.duration,0,l,u.css))),f)if(t>=f.end)$(a=f.b,1-a),P(e,f.b,"end"),p||(f.b?m():--f.group.r||r(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*l(n/f.duration),$(a,1-a)}return!(!f&&!p)}))}return{run(t){i(u)?(I||(I=Promise.resolve()).then(()=>{I=null}),I).then(()=>{u=u(),$(t)}):$(t)},end(){m(),f=p=null}}}function K(t,n){t.f(),function(t,n){t.d(1),n.delete(t.key)}(t,n)}function Q(t){t&&t.c()}function Y(t,n,o){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,o),q(()=>{const n=l.map(e).filter(i);c?c.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(q)}function Z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(t,n){-1===t.$$.dirty[0]&&(F.push(t),N||(N=!0,D.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nt(n,e,i,s,l,c,u=[-1]){const a=k;R(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:u};let p=!1;if(d.ctx=i?i(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&tt(n,t)),e}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=(h=e.target,Array.from(h.childNodes));d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();e.intro&&V(n.$$.fragment),Y(n,e.target,e.anchor),j()}var h;R(a)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const ot=t=>!!t&&/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(t),rt=t=>{const n=t.match(/(id=|d\/)([^\/]+)(\/|$)/);return n&&n.length>2?`https://docs.google.com/uc?export=download&id=${n[2]}`:null};function it(t){const n=t-1;return n*n*n+1}function st(t,{delay:n=0,duration:e=400,easing:o=it}){const r=getComputedStyle(t),i=+r.opacity,s=parseFloat(r.height),l=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),a=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:n,duration:e,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*i};`+`height: ${t*s}px;`+`padding-top: ${t*l}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*u}px;`+`margin-bottom: ${t*a}px;`+`border-top-width: ${t*f}px;`+`border-bottom-width: ${t*d}px;`}}function lt(t){let n,e,o,r;return{c(){n=g("div"),e=$(t[1]),x(n,"class","svelte-i60lxe")},m(t,o){h(t,n,o),p(n,e),r=!0},p(t,n){(!r||2&n)&&v(e,t[1])},i(t){r||(q(()=>{o||(o=J(n,st,{},!0)),o.run(1)}),r=!0)},o(t){o||(o=J(n,st,{},!1)),o.run(0),r=!1},d(t){t&&m(n),t&&o&&o.end()}}}function ct(t){let n,e,o,i,s,l,c,u,a,f=!!t[1]&&lt(t);return{c(){n=g("div"),(e=g("label")).textContent="URL",o=y(),i=g("input"),s=y(),(l=g("button")).textContent="Expose",c=y(),f&&f.c(),x(e,"for","link-input"),x(i,"id","link-input"),x(i,"type","text"),x(n,"class","svelte-i60lxe")},m(d,m,g){h(d,n,m),p(n,e),p(n,o),p(n,i),_(i,t[0]),p(n,s),p(n,l),p(n,c),f&&f.m(n,null),u=!0,g&&r(a),a=[b(i,"input",t[4]),b(l,"click",t[2])]},p(t,[e]){1&e&&i.value!==t[0]&&_(i,t[0]),t[1]?f?(f.p(t,e),2&e&&V(f,1)):((f=lt(t)).c(),V(f,1),f.m(n,null)):f&&(H={r:0,c:[],p:H},X(f,1,1,()=>{f=null}),H.r||r(H.c),H=H.p)},i(t){u||(V(f),u=!0)},o(t){X(f),u=!1},d(t){t&&m(n),f&&f.d(),r(a)}}}function ut(t,n,e){let{onAddLink:o}=n,r="",i="";return t.$set=(t=>{"onAddLink"in t&&e(3,o=t.onAddLink)}),[r,i,()=>{e(1,i=""),ot(r)?o(r):e(1,i="Invalid URL")},o,function(){r=this.value,e(0,r)}]}class at extends et{constructor(t){super(),nt(this,t,ut,ct,s,{onAddLink:3})}}function ft(t,n,e){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,s=n.from.width/t.clientWidth,l=n.from.height/t.clientHeight,c=(n.from.left-n.to.left)/s,u=(n.from.top-n.to.top)/l,a=Math.sqrt(c*c+u*u),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:p=it}=e;return{delay:f,duration:i(d)?d(a):d,easing:p,css:(t,n)=>`transform: ${r} translate(${n*c}px, ${n*u}px);`}}function dt(t,n,e){const o=t.slice();return o[3]=n[e],o}function pt(n){let e;return{c(){(e=g("button")).textContent="INVALID",x(e,"type","button"),e.disabled=!0,x(e,"aria-disabled","download button is disabled")},m(t,n){h(t,e,n)},p:t,d(t){t&&m(e)}}}function ht(t){let n,e,o;return{c(){n=g("a"),(e=g("button")).textContent="Download",x(n,"target","_blank"),x(n,"href",o=t[3].directUrl)},m(t,o){h(t,n,o),p(n,e)},p(t,e){1&e&&o!==(o=t[3].directUrl)&&x(n,"href",o)},d(t){t&&m(n)}}}function mt(e,o){let r,s,l,u,a,f,_,w,k,C,R=o[3].url+"",S=t;function F(t,n){return t[3].directUrl?ht:pt}let M=F(o),B=M(o);return{key:e,first:null,c(){r=g("li"),s=g("a"),l=$(R),a=y(),B.c(),f=y(),(_=g("button")).textContent="X",w=y(),x(s,"target","_blank"),x(s,"href",u=o[3].url),x(_,"title","delete"),this.first=r},m(t,n,e){var c;h(t,r,n),p(r,s),p(s,l),p(r,a),B.m(r,null),p(r,f),p(r,_),p(r,w),e&&C(),C=b(_,"click",(c=function(){i(o[1](o[3].id))&&o[1](o[3].id).apply(this,arguments)},function(t){return t.preventDefault(),c.call(this,t)}))},p(t,n){o=t,1&n&&R!==(R=o[3].url+"")&&v(l,R),1&n&&u!==(u=o[3].url)&&x(s,"href",u),M===(M=F(o))&&B?B.p(o,n):(B.d(1),(B=M(o))&&(B.c(),B.m(r,f)))},r(){k=r.getBoundingClientRect()},f(){A(r),S()},a(){S(),S=function(e,o,r,i){if(!o)return t;const s=e.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:l=0,duration:u=300,easing:a=n,start:f=c()+l,end:p=f+u,tick:h=t,css:m}=r(e,{from:o,to:s},i);let g,$=!0,y=!1;function b(){m&&L(e,g),$=!1}return d(t=>{if(!y&&t>=f&&(y=!0),y&&t>=p&&(h(1,0),b()),!$)return!1;if(y){const n=0+1*a((t-f)/u);h(n,1-n)}return!0}),m&&(g=E(e,0,1,u,l,a,m)),l||(y=!0),h(0,1),b}(r,k,ft,{})},d(t){t&&m(r),B.d(),C()}}}function gt(n){let e,o=[],r=new Map,i=n[0];const s=t=>t[3].id;for(let t=0;t<i.length;t+=1){let e=dt(n,i,t),l=s(e);r.set(l,o[t]=mt(l,e))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=$("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);h(t,e,n)},p(t,[n]){if(3&n){const i=t[0];for(let t=0;t<o.length;t+=1)o[t].r();o=function(t,n,e,o,r,i,s,l,c,u,a,f){let d=t.length,p=i.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=p;h--;){const t=f(r,i,h),l=e(t);let c=s.get(l);c?o&&c.p(t,n):(c=u(l,t)).c(),$.set(l,g[h]=c),l in m&&y.set(l,Math.abs(h-m[l]))}const b=new Set,x=new Set;function v(t){V(t,1),t.m(l,a,s.has(t.key)),s.set(t.key,t),a=t.first,p--}for(;d&&p;){const n=g[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(a=n.first,d--,p--):$.has(r)?!s.has(o)||b.has(o)?v(n):x.has(r)?d--:y.get(o)>y.get(r)?(x.add(o),v(n)):(b.add(r),d--):(c(e,s),d--)}for(;d--;){const n=t[d];$.has(n.key)||c(n,s)}for(;p;)v(g[p-1]);return g}(o,n,s,1,t,i,r,e.parentNode,K,mt,e,dt);for(let t=0;t<o.length;t+=1)o[t].a()}},i:t,o:t,d(t){for(let n=0;n<o.length;n+=1)o[n].d(t);t&&m(e)}}}function $t(t,n,e){const{onRemoveLink:o}=(r="Links",S().$$.context.get(r));var r;let{links:i}=n;return t.$set=(t=>{"links"in t&&e(0,i=t.links)}),[i,t=>()=>{o(t)}]}class yt extends et{constructor(t){super(),nt(this,t,$t,gt,s,{links:0})}}function bt(t){let n,e,o,r;const i=new at({props:{onAddLink:t[1]}});function s(n){t[4].call(null,n)}let l={};void 0!==t[0]&&(l.links=t[0]);const c=new yt({props:l});return M.push(()=>(function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))})(c,"links",s)),{c(){n=g("div"),Q(i.$$.fragment),e=y(),Q(c.$$.fragment)},m(t,o){h(t,n,o),Y(i,n,null),p(n,e),Y(c,n,null),r=!0},p(t,[n]){const e={};var r;!o&&1&n&&(o=!0,e.links=t[0],r=(()=>o=!1),U.push(r)),c.$set(e)},i(t){r||(V(i.$$.fragment,t),V(c.$$.fragment,t),r=!0)},o(t){X(i.$$.fragment,t),X(c.$$.fragment,t),r=!1},d(t){t&&m(n),Z(i),Z(c)}}}function xt(t,n,e){let o=[],r=0;const i=t=>{e(0,o=o.filter(n=>n.id!==t))};var s,l;return s="Links",l={onRemoveLink:i},S().$$.context.set(s,l),[o,t=>{t&&e(0,o=[{id:r++,url:t,directUrl:rt(t)},...o])},r,i,function(t){e(0,o=t)}]}class vt extends et{constructor(t){super(),nt(this,t,xt,bt,s,{})}}function _t(n){let e,o;const r=new vt({});return{c(){e=g("main"),Q(r.$$.fragment),x(e,"class","svelte-1na4wt1")},m(t,n){h(t,e,n),Y(r,e,null),o=!0},p:t,i(t){o||(V(r.$$.fragment,t),o=!0)},o(t){X(r.$$.fragment,t),o=!1},d(t){t&&m(e),Z(r)}}}return new class extends et{constructor(t){super(),nt(this,t,null,_t,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map