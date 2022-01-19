var yi=Object.defineProperty,bi=Object.defineProperties;var wi=Object.getOwnPropertyDescriptors;var Pr=Object.getOwnPropertySymbols;var _i=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable;var Ir=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t)=>{for(var n in t||(t={}))_i.call(t,n)&&Ir(e,n,t[n]);if(Pr)for(var n of Pr(t))xi.call(t,n)&&Ir(e,n,t[n]);return e},An=(e,t)=>bi(e,wi(t));const fa={};function ha(e,t){const n=Object.create(null),a=e.split(",");for(let r=0;r<a.length;r++)n[a[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Si="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ei=ha(Si);function Lr(e){return!!e||e===""}function Qt(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],r=he(a)?Ti(a):Qt(a);if(r)for(const s in r)t[s]=r[s]}return t}else{if(he(e))return e;if(ve(e))return e}}const ki=/;(?![^(]*\))/g,Ci=/:(.+)/;function Ti(e){const t={};return e.split(ki).forEach(n=>{if(n){const a=n.split(Ci);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function ft(e){let t="";if(he(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const a=ft(e[n]);a&&(t+=a+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pa=e=>e==null?"":G(e)||ve(e)&&(e.toString===Nr||!Q(e.toString))?JSON.stringify(e,Or,2):String(e),Or=(e,t)=>t&&t.__v_isRef?Or(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,r])=>(n[`${a} =>`]=r,n),{})}:Mr(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!G(t)&&!Hr(t)?String(t):t,de={},Pt=[],$e=()=>{},Ri=()=>!1,Ai=/^on[^a-z]/,en=e=>Ai.test(e),ma=e=>e.startsWith("onUpdate:"),xe=Object.assign,ga=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pi=Object.prototype.hasOwnProperty,ae=(e,t)=>Pi.call(e,t),G=Array.isArray,It=e=>Pn(e)==="[object Map]",Mr=e=>Pn(e)==="[object Set]",Q=e=>typeof e=="function",he=e=>typeof e=="string",va=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Dr=e=>ve(e)&&Q(e.then)&&Q(e.catch),Nr=Object.prototype.toString,Pn=e=>Nr.call(e),Ii=e=>Pn(e).slice(8,-1),Hr=e=>Pn(e)==="[object Object]",ya=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tn=ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Li=/-(\w)/g,Ve=In(e=>e.replace(Li,(t,n)=>n?n.toUpperCase():"")),Oi=/\B([A-Z])/g,Lt=In(e=>e.replace(Oi,"-$1").toLowerCase()),Ln=In(e=>e.charAt(0).toUpperCase()+e.slice(1)),ba=In(e=>e?`on${Ln(e)}`:""),nn=(e,t)=>!Object.is(e,t),wa=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},On=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let jr;const Mi=()=>jr||(jr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;const Mn=[];class Di{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(Mn.push(this),Ye=this)}off(){this.active&&(Mn.pop(),Ye=Mn[Mn.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ni(e,t){t=t||Ye,t&&t.active&&t.effects.push(e)}function Hi(){return Ye}function Fi(e){Ye&&Ye.cleanups.push(e)}const _a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},zr=e=>(e.w&nt)>0,Br=e=>(e.n&nt)>0,ji=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},zi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let a=0;a<t.length;a++){const r=t[a];zr(r)&&!Br(r)?r.delete(e):t[n++]=r,r.w&=~nt,r.n&=~nt}t.length=n}},xa=new WeakMap;let an=0,nt=1;const Sa=30,rn=[];let ht;const pt=Symbol(""),Ea=Symbol("");class ka{constructor(t,n=null,a){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Ni(this,a)}run(){if(!this.active)return this.fn();if(!rn.includes(this))try{return rn.push(ht=this),Bi(),nt=1<<++an,an<=Sa?ji(this):$r(this),this.fn()}finally{an<=Sa&&zi(this),nt=1<<--an,mt(),rn.pop();const t=rn.length;ht=t>0?rn[t-1]:void 0}}stop(){this.active&&($r(this),this.onStop&&this.onStop(),this.active=!1)}}function $r(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ot=!0;const Ca=[];function Mt(){Ca.push(Ot),Ot=!1}function Bi(){Ca.push(Ot),Ot=!0}function mt(){const e=Ca.pop();Ot=e===void 0?!0:e}function Ie(e,t,n){if(!qr())return;let a=xa.get(e);a||xa.set(e,a=new Map);let r=a.get(n);r||a.set(n,r=_a()),Ur(r)}function qr(){return Ot&&ht!==void 0}function Ur(e,t){let n=!1;an<=Sa?Br(e)||(e.n|=nt,n=!zr(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e))}function Je(e,t,n,a,r,s){const o=xa.get(e);if(!o)return;let i=[];if(t==="clear")i=[...o.values()];else if(n==="length"&&G(e))o.forEach((l,c)=>{(c==="length"||c>=a)&&i.push(l)});else switch(n!==void 0&&i.push(o.get(n)),t){case"add":G(e)?ya(n)&&i.push(o.get("length")):(i.push(o.get(pt)),It(e)&&i.push(o.get(Ea)));break;case"delete":G(e)||(i.push(o.get(pt)),It(e)&&i.push(o.get(Ea)));break;case"set":It(e)&&i.push(o.get(pt));break}if(i.length===1)i[0]&&Ta(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);Ta(_a(l))}}function Ta(e,t){for(const n of G(e)?e:[...e])(n!==ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const $i=ha("__proto__,__v_isRef,__isVue"),Wr=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(va)),qi=Ra(),Ui=Ra(!1,!0),Wi=Ra(!0),Kr=Ki();function Ki(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const a=re(this);for(let s=0,o=this.length;s<o;s++)Ie(a,"get",s+"");const r=a[t](...n);return r===-1||r===!1?a[t](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const a=re(this)[t].apply(this,n);return mt(),a}}),e}function Ra(e=!1,t=!1){return function(a,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&s===(e?t?ll:ts:t?es:Qr).get(a))return a;const o=G(a);if(!e&&o&&ae(Kr,r))return Reflect.get(Kr,r,s);const i=Reflect.get(a,r,s);return(va(r)?Wr.has(r):$i(r))||(e||Ie(a,"get",r),t)?i:Se(i)?!o||!ya(r)?i.value:i:ve(i)?e?Ia(i):sn(i):i}}const Vi=Vr(),Yi=Vr(!0);function Vr(e=!1){return function(n,a,r,s){let o=n[a];if(!e&&!Oa(r)&&(r=re(r),o=re(o),!G(n)&&Se(o)&&!Se(r)))return o.value=r,!0;const i=G(n)&&ya(a)?Number(a)<n.length:ae(n,a),l=Reflect.set(n,a,r,s);return n===re(s)&&(i?nn(r,o)&&Je(n,"set",a,r):Je(n,"add",a,r)),l}}function Gi(e,t){const n=ae(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&n&&Je(e,"delete",t,void 0),a}function Xi(e,t){const n=Reflect.has(e,t);return(!va(t)||!Wr.has(t))&&Ie(e,"has",t),n}function Ji(e){return Ie(e,"iterate",G(e)?"length":pt),Reflect.ownKeys(e)}const Yr={get:qi,set:Vi,deleteProperty:Gi,has:Xi,ownKeys:Ji},Zi={get:Wi,set(e,t){return!0},deleteProperty(e,t){return!0}},Qi=xe({},Yr,{get:Ui,set:Yi}),Aa=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,a=!1){e=e.__v_raw;const r=re(e),s=re(t);t!==s&&!n&&Ie(r,"get",t),!n&&Ie(r,"get",s);const{has:o}=Dn(r),i=a?Aa:n?Ma:on;if(o.call(r,t))return i(e.get(t));if(o.call(r,s))return i(e.get(s));e!==r&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,a=re(n),r=re(e);return e!==r&&!t&&Ie(a,"has",e),!t&&Ie(a,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Ie(re(e),"iterate",pt),Reflect.get(e,"size",e)}function Gr(e){e=re(e);const t=re(this);return Dn(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function Xr(e,t){t=re(t);const n=re(this),{has:a,get:r}=Dn(n);let s=a.call(n,e);s||(e=re(e),s=a.call(n,e));const o=r.call(n,e);return n.set(e,t),s?nn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function Jr(e){const t=re(this),{has:n,get:a}=Dn(t);let r=n.call(t,e);r||(e=re(e),r=n.call(t,e)),a&&a.call(t,e);const s=t.delete(e);return r&&Je(t,"delete",e,void 0),s}function Zr(){const e=re(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function jn(e,t){return function(a,r){const s=this,o=s.__v_raw,i=re(o),l=t?Aa:e?Ma:on;return!e&&Ie(i,"iterate",pt),o.forEach((c,u)=>a.call(r,l(c),l(u),s))}}function zn(e,t,n){return function(...a){const r=this.__v_raw,s=re(r),o=It(s),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...a),u=n?Aa:t?Ma:on;return!t&&Ie(s,"iterate",l?Ea:pt),{next(){const{value:m,done:f}=c.next();return f?{value:m,done:f}:{value:i?[u(m[0]),u(m[1])]:u(m),done:f}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function el(){const e={get(s){return Nn(this,s)},get size(){return Fn(this)},has:Hn,add:Gr,set:Xr,delete:Jr,clear:Zr,forEach:jn(!1,!1)},t={get(s){return Nn(this,s,!1,!0)},get size(){return Fn(this)},has:Hn,add:Gr,set:Xr,delete:Jr,clear:Zr,forEach:jn(!1,!0)},n={get(s){return Nn(this,s,!0)},get size(){return Fn(this,!0)},has(s){return Hn.call(this,s,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:jn(!0,!1)},a={get(s){return Nn(this,s,!0,!0)},get size(){return Fn(this,!0)},has(s){return Hn.call(this,s,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zn(s,!1,!1),n[s]=zn(s,!0,!1),t[s]=zn(s,!1,!0),a[s]=zn(s,!0,!0)}),[e,n,t,a]}const[tl,nl,al,rl]=el();function Pa(e,t){const n=t?e?rl:al:e?nl:tl;return(a,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(ae(n,r)&&r in a?n:a,r,s)}const sl={get:Pa(!1,!1)},ol={get:Pa(!1,!0)},il={get:Pa(!0,!1)},Qr=new WeakMap,es=new WeakMap,ts=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Ii(e))}function sn(e){return e&&e.__v_isReadonly?e:La(e,!1,Yr,sl,Qr)}function ul(e){return La(e,!1,Qi,ol,es)}function Ia(e){return La(e,!0,Zi,il,ts)}function La(e,t,n,a,r){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=dl(e);if(o===0)return e;const i=new Proxy(e,o===2?a:n);return r.set(e,i),i}function Dt(e){return Oa(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Oa(e){return!!(e&&e.__v_isReadonly)}function ns(e){return Dt(e)||Oa(e)}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function as(e){return On(e,"__v_skip",!0),e}const on=e=>ve(e)?sn(e):e,Ma=e=>ve(e)?Ia(e):e;function rs(e){qr()&&(e=re(e),e.dep||(e.dep=_a()),Ur(e.dep))}function ss(e,t){e=re(e),e.dep&&Ta(e.dep)}function Se(e){return Boolean(e&&e.__v_isRef===!0)}function ye(e){return is(e,!1)}function os(e){return is(e,!0)}function is(e,t){return Se(e)?e:new fl(e,t)}class fl{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:re(t),this._value=n?t:on(t)}get value(){return rs(this),this._value}set value(t){t=this._shallow?t:re(t),nn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:on(t),ss(this))}}function Ze(e){return Se(e)?e.value:e}const hl={get:(e,t,n)=>Ze(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,a)}};function ls(e){return Dt(e)?e:new Proxy(e,hl)}function pl(e){const t=G(e)?new Array(e.length):{};for(const n in e)t[n]=gl(e,n);return t}class ml{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function gl(e,t,n){const a=e[t];return Se(a)?a:new ml(e,t,n)}class vl{constructor(t,n,a){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ka(t,()=>{this._dirty||(this._dirty=!0,ss(this))}),this.__v_isReadonly=a}get value(){const t=re(this);return rs(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function pe(e,t){let n,a;const r=Q(e);return r?(n=e,a=$e):(n=e.get,a=e.set),new vl(n,a,r||!a)}Promise.resolve();function yl(e,t,...n){const a=e.vnode.props||de;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in a){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:f}=a[u]||de;f?r=n.map(w=>w.trim()):m&&(r=n.map(Fr))}let i,l=a[i=ba(t)]||a[i=ba(Ve(t))];!l&&s&&(l=a[i=ba(Lt(t))]),l&&je(l,e,6,r);const c=a[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,je(c,e,6,r)}}function cs(e,t,n=!1){const a=t.emitsCache,r=a.get(e);if(r!==void 0)return r;const s=e.emits;let o={},i=!1;if(!Q(e)){const l=c=>{const u=cs(c,t,!0);u&&(i=!0,xe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!i?(a.set(e,null),null):(G(s)?s.forEach(l=>o[l]=null):xe(o,s),a.set(e,o),o)}function Da(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Lt(t))||ae(e,t))}let Le=null,Bn=null;function $n(e){const t=Le;return Le=e,Bn=e&&e.type.__scopeId||null,t}function bl(e){Bn=e}function wl(){Bn=null}function ds(e,t=Le,n){if(!t||e._n)return e;const a=(...r)=>{a._d&&Hs(-1);const s=$n(t),o=e(...r);return $n(s),a._d&&Hs(1),o};return a._n=!0,a._c=!0,a._d=!0,a}function Na(e){const{type:t,vnode:n,proxy:a,withProxy:r,props:s,propsOptions:[o],slots:i,attrs:l,emit:c,render:u,renderCache:m,data:f,setupState:w,ctx:h,inheritAttrs:b}=e;let g,v;const x=$n(e);try{if(n.shapeFlag&4){const A=r||a;g=Ue(u.call(A,A,m,s,w,f,h)),v=l}else{const A=t;g=Ue(A.length>1?A(s,{attrs:l,slots:i,emit:c}):A(s,null)),v=t.props?l:_l(l)}}catch(A){fn.length=0,pn(A,e,1),g=ge(He)}let k=g;if(v&&b!==!1){const A=Object.keys(v),{shapeFlag:H}=k;A.length&&H&(1|6)&&(o&&A.some(ma)&&(v=xl(v,o)),k=Ht(k,v))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),g=k,$n(x),g}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const a in e)(!ma(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Sl(e,t,n){const{props:a,children:r,component:s}=e,{props:o,children:i,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?us(a,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(o[f]!==a[f]&&!Da(c,f))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?us(a,o,c):!0:!!o;return!1}function us(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const s=a[r];if(t[s]!==e[s]&&!Da(n,s))return!0}return!1}function El({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kl=e=>e.__isSuspense;function fs(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):_c(e)}function gt(e,t){if(we){let n=we.provides;const a=we.parent&&we.parent.provides;a===n&&(n=we.provides=Object.create(a)),n[e]=t}}function _e(e,t,n=!1){const a=we||Le;if(a){const r=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Q(t)?t.call(a.proxy):t}}function Cl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{e.isMounted=!0}),cn(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],Tl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(e,{slots:t}){const n=$s(),a=Cl();let r;return()=>{const s=t.default&&gs(t.default(),!0);if(!s||!s.length)return;const o=re(e),{mode:i}=o,l=s[0];if(a.isLeaving)return Fa(l);const c=ms(l);if(!c)return Fa(l);const u=Ha(c,o,a,n);ja(c,u);const m=n.subTree,f=m&&ms(m);let w=!1;const{getTransitionKey:h}=c.type;if(h){const b=h();r===void 0?r=b:b!==r&&(r=b,w=!0)}if(f&&f.type!==He&&(!xt(c,f)||w)){const b=Ha(f,o,a,n);if(ja(f,b),i==="out-in")return a.isLeaving=!0,b.afterLeave=()=>{a.isLeaving=!1,n.update()},Fa(l);i==="in-out"&&c.type!==He&&(b.delayLeave=(g,v,x)=>{const k=ps(a,f);k[String(f.key)]=f,g._leaveCb=()=>{v(),g._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return l}}},hs=Tl;function ps(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Ha(e,t,n,a){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:m,onLeave:f,onAfterLeave:w,onLeaveCancelled:h,onBeforeAppear:b,onAppear:g,onAfterAppear:v,onAppearCancelled:x}=t,k=String(e.key),A=ps(n,e),H=(C,S)=>{C&&je(C,a,9,S)},j={mode:s,persisted:o,beforeEnter(C){let S=i;if(!n.isMounted)if(r)S=b||i;else return;C._leaveCb&&C._leaveCb(!0);const V=A[k];V&&xt(e,V)&&V.el._leaveCb&&V.el._leaveCb(),H(S,[C])},enter(C){let S=l,V=c,q=u;if(!n.isMounted)if(r)S=g||l,V=v||c,q=x||u;else return;let Y=!1;const _=C._enterCb=D=>{Y||(Y=!0,D?H(q,[C]):H(V,[C]),j.delayedLeave&&j.delayedLeave(),C._enterCb=void 0)};S?(S(C,_),S.length<=1&&_()):_()},leave(C,S){const V=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return S();H(m,[C]);let q=!1;const Y=C._leaveCb=_=>{q||(q=!0,S(),_?H(h,[C]):H(w,[C]),C._leaveCb=void 0,A[V]===e&&delete A[V])};A[V]=e,f?(f(C,Y),f.length<=1&&Y()):Y()},clone(C){return Ha(C,t,n,a)}};return j}function Fa(e){if(ln(e))return e=Ht(e),e.children=null,e}function ms(e){return ln(e)?e.children?e.children[0]:void 0:e}function ja(e,t){e.shapeFlag&6&&e.component?ja(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gs(e,t=!1){let n=[],a=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Re?(s.patchFlag&128&&a++,n=n.concat(gs(s.children,t))):(t||s.type!==He)&&n.push(s)}if(a>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Ne(e){return Q(e)?{setup:e,name:e.name}:e}const qn=e=>!!e.type.__asyncLoader;function vt(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:a,delay:r=200,timeout:s,suspensible:o=!0,onError:i}=e;let l=null,c,u=0;const m=()=>(u++,l=null,f()),f=()=>{let w;return l||(w=l=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),i)return new Promise((b,g)=>{i(h,()=>b(m()),()=>g(h),u+1)});throw h}).then(h=>w!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return Ne({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const w=we;if(c)return()=>za(c,w);const h=x=>{l=null,pn(x,w,13,!a)};if(o&&w.suspense||hn)return f().then(x=>()=>za(x,w)).catch(x=>(h(x),()=>a?ge(a,{error:x}):null));const b=ye(!1),g=ye(),v=ye(!!r);return r&&setTimeout(()=>{v.value=!1},r),s!=null&&setTimeout(()=>{if(!b.value&&!g.value){const x=new Error(`Async component timed out after ${s}ms.`);h(x),g.value=x}},s),f().then(()=>{b.value=!0,w.parent&&ln(w.parent.vnode)&&nr(w.parent.update)}).catch(x=>{h(x),g.value=x}),()=>{if(b.value&&c)return za(c,w);if(g.value&&a)return ge(a,{error:g.value});if(n&&!v.value)return ge(n)}}})}function za(e,{vnode:{ref:t,props:n,children:a}}){const r=ge(e,n,a);return r.ref=t,r}const ln=e=>e.type.__isKeepAlive;function Rl(e,t){vs(e,"a",t)}function Al(e,t){vs(e,"da",t)}function vs(e,t,n=we){const a=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Un(t,a,n),n){let r=n.parent;for(;r&&r.parent;)ln(r.parent.vnode)&&Pl(a,t,n,r),r=r.parent}}function Pl(e,t,n,a){const r=Un(t,e,a,!0);Ba(()=>{ga(a[t],r)},n)}function Un(e,t,n=we,a=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),Ft(n);const i=je(t,n,e,o);return St(),mt(),i});return a?r.unshift(s):r.push(s),s}}const Qe=e=>(t,n=we)=>(!hn||e==="sp")&&Un(e,t,n),Il=Qe("bm"),qe=Qe("m"),Ll=Qe("bu"),ys=Qe("u"),cn=Qe("bum"),Ba=Qe("um"),Ol=Qe("sp"),Ml=Qe("rtg"),Dl=Qe("rtc");function Nl(e,t=we){Un("ec",e,t)}let $a=!0;function Hl(e){const t=_s(e),n=e.proxy,a=e.ctx;$a=!1,t.beforeCreate&&bs(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:i,provide:l,inject:c,created:u,beforeMount:m,mounted:f,beforeUpdate:w,updated:h,activated:b,deactivated:g,beforeDestroy:v,beforeUnmount:x,destroyed:k,unmounted:A,render:H,renderTracked:j,renderTriggered:C,errorCaptured:S,serverPrefetch:V,expose:q,inheritAttrs:Y,components:_,directives:D,filters:K}=t;if(c&&Fl(c,a,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const te=o[Z];Q(te)&&(a[Z]=te.bind(n))}if(r){const Z=r.call(n,n);ve(Z)&&(e.data=sn(Z))}if($a=!0,s)for(const Z in s){const te=s[Z],be=Q(te)?te.bind(n,n):Q(te.get)?te.get.bind(n,n):$e,Ee=!Q(te)&&Q(te.set)?te.set.bind(n):$e,Ae=pe({get:be,set:Ee});Object.defineProperty(a,Z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Me=>Ae.value=Me})}if(i)for(const Z in i)ws(i[Z],a,n,Z);if(l){const Z=Q(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(te=>{gt(te,Z[te])})}u&&bs(u,e,"c");function $(Z,te){G(te)?te.forEach(be=>Z(be.bind(n))):te&&Z(te.bind(n))}if($(Il,m),$(qe,f),$(Ll,w),$(ys,h),$(Rl,b),$(Al,g),$(Nl,S),$(Dl,j),$(Ml,C),$(cn,x),$(Ba,A),$(Ol,V),G(q))if(q.length){const Z=e.exposed||(e.exposed={});q.forEach(te=>{Object.defineProperty(Z,te,{get:()=>n[te],set:be=>n[te]=be})})}else e.exposed||(e.exposed={});H&&e.render===$e&&(e.render=H),Y!=null&&(e.inheritAttrs=Y),_&&(e.components=_),D&&(e.directives=D)}function Fl(e,t,n=$e,a=!1){G(e)&&(e=qa(e));for(const r in e){const s=e[r];let o;ve(s)?"default"in s?o=_e(s.from||r,s.default,!0):o=_e(s.from||r):o=_e(s),Se(o)&&a?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function bs(e,t,n){je(G(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function ws(e,t,n,a){const r=a.includes(".")?Qs(n,a):()=>n[a];if(he(e)){const s=t[e];Q(s)&&Xe(r,s)}else if(Q(e))Xe(r,e.bind(n));else if(ve(e))if(G(e))e.forEach(s=>ws(s,t,n,a));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&Xe(r,s,e)}}function _s(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,i=s.get(t);let l;return i?l=i:!r.length&&!n&&!a?l=t:(l={},r.length&&r.forEach(c=>Wn(l,c,o,!0)),Wn(l,t,o)),s.set(t,l),l}function Wn(e,t,n,a=!1){const{mixins:r,extends:s}=t;s&&Wn(e,s,n,!0),r&&r.forEach(o=>Wn(e,o,n,!0));for(const o in t)if(!(a&&o==="expose")){const i=jl[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const jl={data:xs,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:yt,directives:yt,watch:Bl,provide:xs,inject:zl};function xs(e,t){return t?e?function(){return xe(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function zl(e,t){return yt(qa(e),qa(t))}function qa(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?xe(xe(Object.create(null),e),t):t}function Bl(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const a in t)n[a]=ke(e[a],t[a]);return n}function $l(e,t,n,a=!1){const r={},s={};On(s,Jn,1),e.propsDefaults=Object.create(null),Ss(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=a?r:ul(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function ql(e,t,n,a){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,i=re(r),[l]=e.propsOptions;let c=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];const w=t[f];if(l)if(ae(s,f))w!==s[f]&&(s[f]=w,c=!0);else{const h=Ve(f);r[h]=Ua(l,i,h,w,e,!1)}else w!==s[f]&&(s[f]=w,c=!0)}}}else{Ss(e,t,r,s)&&(c=!0);let u;for(const m in i)(!t||!ae(t,m)&&((u=Lt(m))===m||!ae(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(r[m]=Ua(l,i,m,void 0,e,!0)):delete r[m]);if(s!==i)for(const m in s)(!t||!ae(t,m))&&(delete s[m],c=!0)}c&&Je(e,"set","$attrs")}function Ss(e,t,n,a){const[r,s]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(tn(l))continue;const c=t[l];let u;r&&ae(r,u=Ve(l))?!s||!s.includes(u)?n[u]=c:(i||(i={}))[u]=c:Da(e.emitsOptions,l)||(!(l in a)||c!==a[l])&&(a[l]=c,o=!0)}if(s){const l=re(n),c=i||de;for(let u=0;u<s.length;u++){const m=s[u];n[m]=Ua(r,l,m,c[m],e,!ae(c,m))}}return o}function Ua(e,t,n,a,r,s){const o=e[n];if(o!=null){const i=ae(o,"default");if(i&&a===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=r;n in c?a=c[n]:(Ft(r),a=c[n]=l.call(null,t),St())}else a=l}o[0]&&(s&&!i?a=!1:o[1]&&(a===""||a===Lt(n))&&(a=!0))}return a}function Es(e,t,n=!1){const a=t.propsCache,r=a.get(e);if(r)return r;const s=e.props,o={},i=[];let l=!1;if(!Q(e)){const u=m=>{l=!0;const[f,w]=Es(m,t,!0);xe(o,f),w&&i.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return a.set(e,Pt),Pt;if(G(s))for(let u=0;u<s.length;u++){const m=Ve(s[u]);ks(m)&&(o[m]=de)}else if(s)for(const u in s){const m=Ve(u);if(ks(m)){const f=s[u],w=o[m]=G(f)||Q(f)?{type:f}:f;if(w){const h=Rs(Boolean,w.type),b=Rs(String,w.type);w[0]=h>-1,w[1]=b<0||h<b,(h>-1||ae(w,"default"))&&i.push(m)}}}const c=[o,i];return a.set(e,c),c}function ks(e){return e[0]!=="$"}function Cs(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ts(e,t){return Cs(e)===Cs(t)}function Rs(e,t){return G(t)?t.findIndex(n=>Ts(n,e)):Q(t)&&Ts(t,e)?0:-1}const As=e=>e[0]==="_"||e==="$stable",Wa=e=>G(e)?e.map(Ue):[Ue(e)],Ul=(e,t,n)=>{const a=ds((...r)=>Wa(t(...r)),n);return a._c=!1,a},Ps=(e,t,n)=>{const a=e._ctx;for(const r in e){if(As(r))continue;const s=e[r];if(Q(s))t[r]=Ul(r,s,a);else if(s!=null){const o=Wa(s);t[r]=()=>o}}},Is=(e,t)=>{const n=Wa(t);e.slots.default=()=>n},Wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=re(t),On(t,"_",n)):Ps(t,e.slots={})}else e.slots={},t&&Is(e,t);On(e.slots,Jn,1)},Kl=(e,t,n)=>{const{vnode:a,slots:r}=e;let s=!0,o=de;if(a.shapeFlag&32){const i=t._;i?n&&i===1?s=!1:(xe(r,t),!n&&i===1&&delete r._):(s=!t.$stable,Ps(t,r)),o=t}else t&&(Is(e,t),o={default:1});if(s)for(const i in r)!As(i)&&!(i in o)&&delete r[i]};function kh(e,t){const n=Le;if(n===null)return e;const a=n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,l,c=de]=t[s];Q(o)&&(o={mounted:o,updated:o}),o.deep&&Et(i),r.push({dir:o,instance:a,value:i,oldValue:void 0,arg:l,modifiers:c})}return e}function Ge(e,t,n,a){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const i=r[o];s&&(i.oldValue=s[o].value);let l=i.dir[a];l&&(Mt(),je(l,n,8,[e.el,i,e,t]),mt())}}function Ls(){return{app:null,config:{isNativeTag:Ri,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Yl(e,t){return function(a,r=null){r!=null&&!ve(r)&&(r=null);const s=Ls(),o=new Set;let i=!1;const l=s.app={_uid:Vl++,_component:a,_props:r,_container:null,_context:s,_instance:null,version:Sc,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,m){if(!i){const f=ge(a,r);return f.appContext=s,u&&t?t(f,c):e(f,c,m),i=!0,l._container=c,c.__vue_app__=l,Ja(f.component)||f.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Kn(e,t,n,a,r=!1){if(G(e)){e.forEach((f,w)=>Kn(f,t&&(G(t)?t[w]:t),n,a,r));return}if(qn(a)&&!r)return;const s=a.shapeFlag&4?Ja(a.component)||a.component.proxy:a.el,o=r?null:s,{i,r:l}=e,c=t&&t.r,u=i.refs===de?i.refs={}:i.refs,m=i.setupState;if(c!=null&&c!==l&&(he(c)?(u[c]=null,ae(m,c)&&(m[c]=null)):Se(c)&&(c.value=null)),Q(l))ot(l,i,12,[o,u]);else{const f=he(l),w=Se(l);if(f||w){const h=()=>{if(e.f){const b=f?u[l]:l.value;r?G(b)&&ga(b,s):G(b)?b.includes(s)||b.push(s):f?u[l]=[s]:(l.value=[s],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,ae(m,l)&&(m[l]=o)):Se(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(h.id=-1,Te(h,n)):h()}}}let rt=!1;const Vn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Ka=e=>e.nodeType===8;function Gl(e){const{mt:t,p:n,o:{patchProp:a,nextSibling:r,parentNode:s,remove:o,insert:i,createComment:l}}=e,c=(g,v)=>{if(!v.hasChildNodes()){n(null,g,v),ta();return}rt=!1,u(v.firstChild,g,null,null,null),ta(),rt&&console.error("Hydration completed but contains mismatches.")},u=(g,v,x,k,A,H=!1)=>{const j=Ka(g)&&g.data==="[",C=()=>h(g,v,x,k,A,j),{type:S,ref:V,shapeFlag:q}=v,Y=g.nodeType;v.el=g;let _=null;switch(S){case dn:Y!==3?_=C():(g.data!==v.children&&(rt=!0,g.data=v.children),_=r(g));break;case He:Y!==8||j?_=C():_=r(g);break;case un:if(Y!==1)_=C();else{_=g;const D=!v.children.length;for(let K=0;K<v.staticCount;K++)D&&(v.children+=_.outerHTML),K===v.staticCount-1&&(v.anchor=_),_=r(_);return _}break;case Re:j?_=w(g,v,x,k,A,H):_=C();break;default:if(q&1)Y!==1||v.type.toLowerCase()!==g.tagName.toLowerCase()?_=C():_=m(g,v,x,k,A,H);else if(q&6){v.slotScopeIds=A;const D=s(g);if(t(v,D,null,x,k,Vn(D),H),_=j?b(g):r(g),qn(v)){let K;j?(K=ge(Re),K.anchor=_?_.previousSibling:D.lastChild):K=g.nodeType===3?Ya(""):ge("div"),K.el=g,v.component.subTree=K}}else q&64?Y!==8?_=C():_=v.type.hydrate(g,v,x,k,A,H,e,f):q&128&&(_=v.type.hydrate(g,v,x,k,Vn(s(g)),A,H,e,u))}return V!=null&&Kn(V,null,k,v),_},m=(g,v,x,k,A,H)=>{H=H||!!v.dynamicChildren;const{type:j,props:C,patchFlag:S,shapeFlag:V,dirs:q}=v,Y=j==="input"&&q||j==="option";if(Y||S!==-1){if(q&&Ge(v,null,x,"created"),C)if(Y||!H||S&(16|32))for(const D in C)(Y&&D.endsWith("value")||en(D)&&!tn(D))&&a(g,D,null,C[D],!1,void 0,x);else C.onClick&&a(g,"onClick",null,C.onClick,!1,void 0,x);let _;if((_=C&&C.onVnodeBeforeMount)&&Fe(_,x,v),q&&Ge(v,null,x,"beforeMount"),((_=C&&C.onVnodeMounted)||q)&&fs(()=>{_&&Fe(_,x,v),q&&Ge(v,null,x,"mounted")},k),V&16&&!(C&&(C.innerHTML||C.textContent))){let D=f(g.firstChild,v,g,x,k,A,H);for(;D;){rt=!0;const K=D;D=D.nextSibling,o(K)}}else V&8&&g.textContent!==v.children&&(rt=!0,g.textContent=v.children)}return g.nextSibling},f=(g,v,x,k,A,H,j)=>{j=j||!!v.dynamicChildren;const C=v.children,S=C.length;for(let V=0;V<S;V++){const q=j?C[V]:C[V]=Ue(C[V]);if(g)g=u(g,q,k,A,H,j);else{if(q.type===dn&&!q.children)continue;rt=!0,n(null,q,x,null,k,A,Vn(x),H)}}return g},w=(g,v,x,k,A,H)=>{const{slotScopeIds:j}=v;j&&(A=A?A.concat(j):j);const C=s(g),S=f(r(g),v,C,x,k,A,H);return S&&Ka(S)&&S.data==="]"?r(v.anchor=S):(rt=!0,i(v.anchor=l("]"),C,S),S)},h=(g,v,x,k,A,H)=>{if(rt=!0,v.el=null,H){const S=b(g);for(;;){const V=r(g);if(V&&V!==S)o(V);else break}}const j=r(g),C=s(g);return o(g),n(null,v,C,j,x,k,Vn(C),A),j},b=g=>{let v=0;for(;g;)if(g=r(g),g&&Ka(g)&&(g.data==="["&&v++,g.data==="]")){if(v===0)return r(g);v--}return g};return[c,u]}const Te=fs;function Xl(e){return Os(e)}function Jl(e){return Os(e,Gl)}function Os(e,t){const n=Mi();n.__VUE__=!0;const{insert:a,remove:r,patchProp:s,createElement:o,createText:i,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:f,setScopeId:w=$e,cloneNode:h,insertStaticContent:b}=e,g=(d,p,y,R=null,T=null,I=null,N=!1,L=null,M=!!p.dynamicChildren)=>{if(d===p)return;d&&!xt(d,p)&&(R=z(d),Ce(d,T,I,!0),d=null),p.patchFlag===-2&&(M=!1,p.dynamicChildren=null);const{type:P,ref:U,shapeFlag:B}=p;switch(P){case dn:v(d,p,y,R);break;case He:x(d,p,y,R);break;case un:d==null&&k(p,y,R,N);break;case Re:D(d,p,y,R,T,I,N,L,M);break;default:B&1?j(d,p,y,R,T,I,N,L,M):B&6?K(d,p,y,R,T,I,N,L,M):(B&64||B&128)&&P.process(d,p,y,R,T,I,N,L,M,ie)}U!=null&&T&&Kn(U,d&&d.ref,I,p||d,!p)},v=(d,p,y,R)=>{if(d==null)a(p.el=i(p.children),y,R);else{const T=p.el=d.el;p.children!==d.children&&c(T,p.children)}},x=(d,p,y,R)=>{d==null?a(p.el=l(p.children||""),y,R):p.el=d.el},k=(d,p,y,R)=>{[d.el,d.anchor]=b(d.children,p,y,R)},A=({el:d,anchor:p},y,R)=>{let T;for(;d&&d!==p;)T=f(d),a(d,y,R),d=T;a(p,y,R)},H=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},j=(d,p,y,R,T,I,N,L,M)=>{N=N||p.type==="svg",d==null?C(p,y,R,T,I,N,L,M):q(d,p,T,I,N,L,M)},C=(d,p,y,R,T,I,N,L)=>{let M,P;const{type:U,props:B,shapeFlag:W,transition:X,patchFlag:ne,dirs:me}=d;if(d.el&&h!==void 0&&ne===-1)M=d.el=h(d.el);else{if(M=d.el=o(d.type,I,B&&B.is,B),W&8?u(M,d.children):W&16&&V(d.children,M,null,R,T,I&&U!=="foreignObject",N,L),me&&Ge(d,null,R,"created"),B){for(const fe in B)fe!=="value"&&!tn(fe)&&s(M,fe,null,B[fe],I,d.children,R,T,O);"value"in B&&s(M,"value",null,B.value),(P=B.onVnodeBeforeMount)&&Fe(P,R,d)}S(M,d,d.scopeId,N,R)}me&&Ge(d,null,R,"beforeMount");const ce=(!T||T&&!T.pendingBranch)&&X&&!X.persisted;ce&&X.beforeEnter(M),a(M,p,y),((P=B&&B.onVnodeMounted)||ce||me)&&Te(()=>{P&&Fe(P,R,d),ce&&X.enter(M),me&&Ge(d,null,R,"mounted")},T)},S=(d,p,y,R,T)=>{if(y&&w(d,y),R)for(let I=0;I<R.length;I++)w(d,R[I]);if(T){let I=T.subTree;if(p===I){const N=T.vnode;S(d,N,N.scopeId,N.slotScopeIds,T.parent)}}},V=(d,p,y,R,T,I,N,L,M=0)=>{for(let P=M;P<d.length;P++){const U=d[P]=L?st(d[P]):Ue(d[P]);g(null,U,p,y,R,T,I,N,L)}},q=(d,p,y,R,T,I,N)=>{const L=p.el=d.el;let{patchFlag:M,dynamicChildren:P,dirs:U}=p;M|=d.patchFlag&16;const B=d.props||de,W=p.props||de;let X;y&&bt(y,!1),(X=W.onVnodeBeforeUpdate)&&Fe(X,y,p,d),U&&Ge(p,d,y,"beforeUpdate"),y&&bt(y,!0);const ne=T&&p.type!=="foreignObject";if(P?Y(d.dynamicChildren,P,L,y,R,ne,I):N||be(d,p,L,null,y,R,ne,I,!1),M>0){if(M&16)_(L,p,B,W,y,R,T);else if(M&2&&B.class!==W.class&&s(L,"class",null,W.class,T),M&4&&s(L,"style",B.style,W.style,T),M&8){const me=p.dynamicProps;for(let ce=0;ce<me.length;ce++){const fe=me[ce],Be=B[fe],At=W[fe];(At!==Be||fe==="value")&&s(L,fe,Be,At,T,d.children,y,R,O)}}M&1&&d.children!==p.children&&u(L,p.children)}else!N&&P==null&&_(L,p,B,W,y,R,T);((X=W.onVnodeUpdated)||U)&&Te(()=>{X&&Fe(X,y,p,d),U&&Ge(p,d,y,"updated")},R)},Y=(d,p,y,R,T,I,N)=>{for(let L=0;L<p.length;L++){const M=d[L],P=p[L],U=M.el&&(M.type===Re||!xt(M,P)||M.shapeFlag&(6|64))?m(M.el):y;g(M,P,U,null,R,T,I,N,!0)}},_=(d,p,y,R,T,I,N)=>{if(y!==R){for(const L in R){if(tn(L))continue;const M=R[L],P=y[L];M!==P&&L!=="value"&&s(d,L,P,M,N,p.children,T,I,O)}if(y!==de)for(const L in y)!tn(L)&&!(L in R)&&s(d,L,y[L],null,N,p.children,T,I,O);"value"in R&&s(d,"value",y.value,R.value)}},D=(d,p,y,R,T,I,N,L,M)=>{const P=p.el=d?d.el:i(""),U=p.anchor=d?d.anchor:i("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:X}=p;X&&(L=L?L.concat(X):X),d==null?(a(P,y,R),a(U,y,R),V(p.children,y,U,T,I,N,L,M)):B>0&&B&64&&W&&d.dynamicChildren?(Y(d.dynamicChildren,W,y,T,I,N,L),(p.key!=null||T&&p===T.subTree)&&Ms(d,p,!0)):be(d,p,y,U,T,I,N,L,M)},K=(d,p,y,R,T,I,N,L,M)=>{p.slotScopeIds=L,d==null?p.shapeFlag&512?T.ctx.activate(p,y,R,N,M):se(p,y,R,T,I,N,M):$(d,p,M)},se=(d,p,y,R,T,I,N)=>{const L=d.component=dc(d,R,T);if(ln(d)&&(L.ctx.renderer=ie),uc(L),L.asyncDep){if(T&&T.registerDep(L,Z),!d.el){const M=L.subTree=ge(He);x(null,M,p,y)}return}Z(L,d,p,y,T,I,N)},$=(d,p,y)=>{const R=p.component=d.component;if(Sl(d,p,y))if(R.asyncDep&&!R.asyncResolved){te(R,p,y);return}else R.next=p,bc(R.update),R.update();else p.component=d.component,p.el=d.el,R.vnode=p},Z=(d,p,y,R,T,I,N)=>{const L=()=>{if(d.isMounted){let{next:U,bu:B,u:W,parent:X,vnode:ne}=d,me=U,ce;bt(d,!1),U?(U.el=ne.el,te(d,U,N)):U=ne,B&&wa(B),(ce=U.props&&U.props.onVnodeBeforeUpdate)&&Fe(ce,X,U,ne),bt(d,!0);const fe=Na(d),Be=d.subTree;d.subTree=fe,g(Be,fe,m(Be.el),z(Be),d,T,I),U.el=fe.el,me===null&&El(d,fe.el),W&&Te(W,T),(ce=U.props&&U.props.onVnodeUpdated)&&Te(()=>Fe(ce,X,U,ne),T)}else{let U;const{el:B,props:W}=p,{bm:X,m:ne,parent:me}=d,ce=qn(p);if(bt(d,!1),X&&wa(X),!ce&&(U=W&&W.onVnodeBeforeMount)&&Fe(U,me,p),bt(d,!0),B&&J){const fe=()=>{d.subTree=Na(d),J(B,d.subTree,d,T,null)};ce?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=Na(d);g(null,fe,y,R,d,T,I),p.el=fe.el}if(ne&&Te(ne,T),!ce&&(U=W&&W.onVnodeMounted)){const fe=p;Te(()=>Fe(U,me,fe),T)}p.shapeFlag&256&&d.a&&Te(d.a,T),d.isMounted=!0,p=y=R=null}},M=d.effect=new ka(L,()=>nr(d.update),d.scope),P=d.update=M.run.bind(M);P.id=d.uid,bt(d,!0),P()},te=(d,p,y)=>{p.component=d;const R=d.vnode.props;d.vnode=p,d.next=null,ql(d,p.props,R,y),Kl(d,p.children,y),Mt(),ar(void 0,d.update),mt()},be=(d,p,y,R,T,I,N,L,M=!1)=>{const P=d&&d.children,U=d?d.shapeFlag:0,B=p.children,{patchFlag:W,shapeFlag:X}=p;if(W>0){if(W&128){Ae(P,B,y,R,T,I,N,L,M);return}else if(W&256){Ee(P,B,y,R,T,I,N,L,M);return}}X&8?(U&16&&O(P,T,I),B!==P&&u(y,B)):U&16?X&16?Ae(P,B,y,R,T,I,N,L,M):O(P,T,I,!0):(U&8&&u(y,""),X&16&&V(B,y,R,T,I,N,L,M))},Ee=(d,p,y,R,T,I,N,L,M)=>{d=d||Pt,p=p||Pt;const P=d.length,U=p.length,B=Math.min(P,U);let W;for(W=0;W<B;W++){const X=p[W]=M?st(p[W]):Ue(p[W]);g(d[W],X,y,null,T,I,N,L,M)}P>U?O(d,T,I,!0,!1,B):V(p,y,R,T,I,N,L,M,B)},Ae=(d,p,y,R,T,I,N,L,M)=>{let P=0;const U=p.length;let B=d.length-1,W=U-1;for(;P<=B&&P<=W;){const X=d[P],ne=p[P]=M?st(p[P]):Ue(p[P]);if(xt(X,ne))g(X,ne,y,null,T,I,N,L,M);else break;P++}for(;P<=B&&P<=W;){const X=d[B],ne=p[W]=M?st(p[W]):Ue(p[W]);if(xt(X,ne))g(X,ne,y,null,T,I,N,L,M);else break;B--,W--}if(P>B){if(P<=W){const X=W+1,ne=X<U?p[X].el:R;for(;P<=W;)g(null,p[P]=M?st(p[P]):Ue(p[P]),y,ne,T,I,N,L,M),P++}}else if(P>W)for(;P<=B;)Ce(d[P],T,I,!0),P++;else{const X=P,ne=P,me=new Map;for(P=ne;P<=W;P++){const Pe=p[P]=M?st(p[P]):Ue(p[P]);Pe.key!=null&&me.set(Pe.key,P)}let ce,fe=0;const Be=W-ne+1;let At=!1,Tr=0;const Zt=new Array(Be);for(P=0;P<Be;P++)Zt[P]=0;for(P=X;P<=B;P++){const Pe=d[P];if(fe>=Be){Ce(Pe,T,I,!0);continue}let We;if(Pe.key!=null)We=me.get(Pe.key);else for(ce=ne;ce<=W;ce++)if(Zt[ce-ne]===0&&xt(Pe,p[ce])){We=ce;break}We===void 0?Ce(Pe,T,I,!0):(Zt[We-ne]=P+1,We>=Tr?Tr=We:At=!0,g(Pe,p[We],y,null,T,I,N,L,M),fe++)}const Rr=At?Zl(Zt):Pt;for(ce=Rr.length-1,P=Be-1;P>=0;P--){const Pe=ne+P,We=p[Pe],Ar=Pe+1<U?p[Pe+1].el:R;Zt[P]===0?g(null,We,y,Ar,T,I,N,L,M):At&&(ce<0||P!==Rr[ce]?Me(We,y,Ar,2):ce--)}}},Me=(d,p,y,R,T=null)=>{const{el:I,type:N,transition:L,children:M,shapeFlag:P}=d;if(P&6){Me(d.component.subTree,p,y,R);return}if(P&128){d.suspense.move(p,y,R);return}if(P&64){N.move(d,p,y,ie);return}if(N===Re){a(I,p,y);for(let B=0;B<M.length;B++)Me(M[B],p,y,R);a(d.anchor,p,y);return}if(N===un){A(d,p,y);return}if(R!==2&&P&1&&L)if(R===0)L.beforeEnter(I),a(I,p,y),Te(()=>L.enter(I),T);else{const{leave:B,delayLeave:W,afterLeave:X}=L,ne=()=>a(I,p,y),me=()=>{B(I,()=>{ne(),X&&X()})};W?W(I,ne,me):me()}else a(I,p,y)},Ce=(d,p,y,R=!1,T=!1)=>{const{type:I,props:N,ref:L,children:M,dynamicChildren:P,shapeFlag:U,patchFlag:B,dirs:W}=d;if(L!=null&&Kn(L,null,y,d,!0),U&256){p.ctx.deactivate(d);return}const X=U&1&&W,ne=!qn(d);let me;if(ne&&(me=N&&N.onVnodeBeforeUnmount)&&Fe(me,p,d),U&6)F(d.component,y,R);else{if(U&128){d.suspense.unmount(y,R);return}X&&Ge(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,y,T,ie,R):P&&(I!==Re||B>0&&B&64)?O(P,p,y,!1,!0):(I===Re&&B&(128|256)||!T&&U&16)&&O(M,p,y),R&&Jt(d)}(ne&&(me=N&&N.onVnodeUnmounted)||X)&&Te(()=>{me&&Fe(me,p,d),X&&Ge(d,null,p,"unmounted")},y)},Jt=d=>{const{type:p,el:y,anchor:R,transition:T}=d;if(p===Re){E(y,R);return}if(p===un){H(d);return}const I=()=>{r(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:N,delayLeave:L}=T,M=()=>N(y,I);L?L(d.el,I,M):M()}else I()},E=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},F=(d,p,y)=>{const{bum:R,scope:T,update:I,subTree:N,um:L}=d;R&&wa(R),T.stop(),I&&(I.active=!1,Ce(N,d,p,y)),L&&Te(L,p),Te(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(d,p,y,R=!1,T=!1,I=0)=>{for(let N=I;N<d.length;N++)Ce(d[N],p,y,R,T)},z=d=>d.shapeFlag&6?z(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),oe=(d,p,y)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):g(p._vnode||null,d,p,null,null,null,y),ta(),p._vnode=d},ie={p:g,um:Ce,m:Me,r:Jt,mt:se,mc:V,pc:be,pbc:Y,n:z,o:e};let ee,J;return t&&([ee,J]=t(ie)),{render:oe,hydrate:ee,createApp:Yl(oe,ee)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ms(e,t,n=!1){const a=e.children,r=t.children;if(G(a)&&G(r))for(let s=0;s<a.length;s++){const o=a[s];let i=r[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[s]=st(r[s]),i.el=o.el),n||Ms(o,i))}}function Zl(e){const t=e.slice(),n=[0];let a,r,s,o,i;const l=e.length;for(a=0;a<l;a++){const c=e[a];if(c!==0){if(r=n[n.length-1],e[r]<c){t[a]=r,n.push(a);continue}for(s=0,o=n.length-1;s<o;)i=s+o>>1,e[n[i]]<c?s=i+1:o=i;c<e[n[s]]&&(s>0&&(t[a]=n[s-1]),n[s]=a)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Ql=e=>e.__isTeleport,Ds="components";function ec(e,t){return nc(Ds,e,!0,t)||e}const tc=Symbol();function nc(e,t,n=!0,a=!1){const r=Le||we;if(r){const s=r.type;if(e===Ds){const i=mc(s);if(i&&(i===t||i===Ve(t)||i===Ln(Ve(t))))return s}const o=Ns(r[e]||s[e],t)||Ns(r.appContext[e],t);return!o&&a?s:o}}function Ns(e,t){return e&&(e[t]||e[Ve(t)]||e[Ln(Ve(t))])}const Re=Symbol(void 0),dn=Symbol(void 0),He=Symbol(void 0),un=Symbol(void 0),fn=[];let wt=null;function _t(e=!1){fn.push(wt=e?null:[])}function ac(){fn.pop(),wt=fn[fn.length-1]||null}let Yn=1;function Hs(e){Yn+=e}function Fs(e){return e.dynamicChildren=Yn>0?wt||Pt:null,ac(),Yn>0&&wt&&wt.push(e),e}function Gn(e,t,n,a,r,s){return Fs(Nt(e,t,n,a,r,s,!0))}function Va(e,t,n,a,r){return Fs(ge(e,t,n,a,r,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",js=({key:e})=>e!=null?e:null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||Se(e)||Q(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function Nt(e,t=null,n=null,a=0,r=null,s=e===Re?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&js(t),ref:t&&Zn(t),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Ga(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Yn>0&&!o&&wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wt.push(l),l}const ge=rc;function rc(e,t=null,n=null,a=0,r=null,s=!1){if((!e||e===tc)&&(e=He),Xn(e)){const i=Ht(e,t,!0);return n&&Ga(i,n),i}if(gc(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:i,style:l}=t;i&&!he(i)&&(t.class=ft(i)),ve(l)&&(ns(l)&&!G(l)&&(l=xe({},l)),t.style=Qt(l))}const o=he(e)?1:kl(e)?128:Ql(e)?64:ve(e)?4:Q(e)?2:0;return Nt(e,t,n,a,r,o,s,!0)}function sc(e){return e?ns(e)||Jn in e?xe({},e):e:null}function Ht(e,t,n=!1){const{props:a,ref:r,patchFlag:s,children:o}=e,i=t?oc(a||{},t):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&js(i),ref:t&&t.ref?n&&r?G(r)?r.concat(Zn(t)):[r,Zn(t)]:Zn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor}}function Ya(e=" ",t=0){return ge(dn,null,e,t)}function Ch(e,t){const n=ge(un,null,e);return n.staticCount=t,n}function Th(e="",t=!1){return t?(_t(),Va(He,null,e)):ge(He,null,e)}function Ue(e){return e==null||typeof e=="boolean"?ge(He):G(e)?ge(Re,null,e.slice()):typeof e=="object"?st(e):ge(dn,null,String(e))}function st(e){return e.el===null||e.memo?e:Ht(e)}function Ga(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(a&(1|64)){const r=t.default;r&&(r._c&&(r._d=!1),Ga(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Jn in t)?t._ctx=Le:r===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),a&64?(n=16,t=[Ya(t)]):n=8);e.children=t,e.shapeFlag|=n}function oc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const r in a)if(r==="class")t.class!==a.class&&(t.class=ft([t.class,a.class]));else if(r==="style")t.style=Qt([t.style,a.style]);else if(en(r)){const s=t[r],o=a[r];s!==o&&!(G(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=a[r])}return t}function Fe(e,t,n,a=null){je(e,t,7,[n,a])}function Rh(e,t,n,a){let r;const s=n&&n[a];if(G(e)||he(e)){r=new Array(e.length);for(let o=0,i=e.length;o<i;o++)r[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s&&s[o])}else if(ve(e))if(e[Symbol.iterator])r=Array.from(e,(o,i)=>t(o,i,void 0,s&&s[i]));else{const o=Object.keys(e);r=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const c=o[i];r[i]=t(e[c],c,i,s&&s[i])}}else r=[];return n&&(n[a]=r),r}function zs(e,t,n={},a,r){if(Le.isCE)return ge("slot",t==="default"?null:{name:t},a&&a());let s=e[t];s&&s._c&&(s._d=!1),_t();const o=s&&Bs(s(n)),i=Va(Re,{key:n.key||`_${t}`},o||(a?a():[]),o&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),s&&s._c&&(s._d=!0),i}function Bs(e){return e.some(t=>Xn(t)?!(t.type===He||t.type===Re&&!Bs(t.children)):!0)?e:null}const Xa=e=>e?qs(e)?Ja(e)||e.proxy:Xa(e.parent):null,Qn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xa(e.parent),$root:e=>Xa(e.root),$emit:e=>e.emit,$options:e=>_s(e),$forceUpdate:e=>()=>nr(e.update),$nextTick:e=>tr.bind(e.proxy),$watch:e=>xc.bind(e)}),ic={get({_:e},t){const{ctx:n,setupState:a,data:r,props:s,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return a[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(a!==de&&ae(a,t))return o[t]=1,a[t];if(r!==de&&ae(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&ae(c,t))return o[t]=3,s[t];if(n!==de&&ae(n,t))return o[t]=4,n[t];$a&&(o[t]=0)}}const u=Qn[t];let m,f;if(u)return t==="$attrs"&&Ie(e,"get",t),u(e);if((m=i.__cssModules)&&(m=m[t]))return m;if(n!==de&&ae(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,ae(f,t))return f[t]},set({_:e},t,n){const{data:a,setupState:r,ctx:s}=e;if(r!==de&&ae(r,t))r[t]=n;else if(a!==de&&ae(a,t))a[t]=n;else if(ae(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:r,propsOptions:s}},o){let i;return!!n[o]||e!==de&&ae(e,o)||t!==de&&ae(t,o)||(i=s[0])&&ae(i,o)||ae(a,o)||ae(Qn,o)||ae(r.config.globalProperties,o)}},lc=Ls();let cc=0;function dc(e,t,n){const a=e.type,r=(t?t.appContext:e.appContext)||lc,s={uid:cc++,vnode:e,type:a,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Es(a,r),emitsOptions:cs(a,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:a.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=yl.bind(null,s),e.ce&&e.ce(s),s}let we=null;const $s=()=>we||Le,Ft=e=>{we=e,e.scope.on()},St=()=>{we&&we.scope.off(),we=null};function qs(e){return e.vnode.shapeFlag&4}let hn=!1;function uc(e,t=!1){hn=t;const{props:n,children:a}=e.vnode,r=qs(e);$l(e,n,r,t),Wl(e,a);const s=r?fc(e,t):void 0;return hn=!1,s}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=as(new Proxy(e.ctx,ic));const{setup:a}=n;if(a){const r=e.setupContext=a.length>1?pc(e):null;Ft(e),Mt();const s=ot(a,e,0,[e.props,r]);if(mt(),St(),Dr(s)){if(s.then(St,St),t)return s.then(o=>{Us(e,o,t)}).catch(o=>{pn(o,e,0)});e.asyncDep=s}else Us(e,s,t)}else Ks(e,t)}function Us(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=ls(t)),Ks(e,n)}let Ws;function Ks(e,t,n){const a=e.type;if(!e.render){if(!t&&Ws&&!a.render){const r=a.template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=a,c=xe(xe({isCustomElement:s,delimiters:i},o),l);a.render=Ws(r,c)}}e.render=a.render||$e}Ft(e),Mt(),Hl(e),mt(),St()}function hc(e){return new Proxy(e.attrs,{get(t,n){return Ie(e,"get","$attrs"),t[n]}})}function pc(e){const t=a=>{e.exposed=a||{}};let n;return{get attrs(){return n||(n=hc(e))},slots:e.slots,emit:e.emit,expose:t}}function Ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ls(as(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)}}))}function mc(e){return Q(e)&&e.displayName||e.name}function gc(e){return Q(e)&&"__vccOpts"in e}function ot(e,t,n,a){let r;try{r=a?e(...a):e()}catch(s){pn(s,t,n)}return r}function je(e,t,n,a){if(Q(e)){const s=ot(e,t,n,a);return s&&Dr(s)&&s.catch(o=>{pn(o,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(je(e[s],t,n,a));return r}function pn(e,t,n,a=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,i=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,i)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,i]);return}}vc(e,n,r,a)}function vc(e,t,n,a=!0){console.error(e)}let ea=!1,Za=!1;const Oe=[];let et=0;const mn=[];let gn=null,jt=0;const vn=[];let it=null,zt=0;const Vs=Promise.resolve();let Qa=null,er=null;function tr(e){const t=Qa||Vs;return e?t.then(this?e.bind(this):e):t}function yc(e){let t=et+1,n=Oe.length;for(;t<n;){const a=t+n>>>1;yn(Oe[a])<e?t=a+1:n=a}return t}function nr(e){(!Oe.length||!Oe.includes(e,ea&&e.allowRecurse?et+1:et))&&e!==er&&(e.id==null?Oe.push(e):Oe.splice(yc(e.id),0,e),Ys())}function Ys(){!ea&&!Za&&(Za=!0,Qa=Vs.then(Xs))}function bc(e){const t=Oe.indexOf(e);t>et&&Oe.splice(t,1)}function Gs(e,t,n,a){G(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?a+1:a))&&n.push(e),Ys()}function wc(e){Gs(e,gn,mn,jt)}function _c(e){Gs(e,it,vn,zt)}function ar(e,t=null){if(mn.length){for(er=t,gn=[...new Set(mn)],mn.length=0,jt=0;jt<gn.length;jt++)gn[jt]();gn=null,jt=0,er=null,ar(e,t)}}function ta(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,it){it.push(...t);return}for(it=t,it.sort((n,a)=>yn(n)-yn(a)),zt=0;zt<it.length;zt++)it[zt]();it=null,zt=0}}const yn=e=>e.id==null?1/0:e.id;function Xs(e){Za=!1,ea=!0,ar(e),Oe.sort((n,a)=>yn(n)-yn(a));const t=$e;try{for(et=0;et<Oe.length;et++){const n=Oe[et];n&&n.active!==!1&&ot(n,null,14)}}finally{et=0,Oe.length=0,ta(),ea=!1,Qa=null,(Oe.length||mn.length||vn.length)&&Xs(e)}}const Js={};function Xe(e,t,n){return Zs(e,t,n)}function Zs(e,t,{immediate:n,deep:a,flush:r,onTrack:s,onTrigger:o}=de){const i=we;let l,c=!1,u=!1;if(Se(e)?(l=()=>e.value,c=!!e._shallow):Dt(e)?(l=()=>e,a=!0):G(e)?(u=!0,c=e.some(Dt),l=()=>e.map(v=>{if(Se(v))return v.value;if(Dt(v))return Et(v);if(Q(v))return ot(v,i,2)})):Q(e)?t?l=()=>ot(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),je(e,i,3,[f])}:l=$e,t&&a){const v=l;l=()=>Et(v())}let m,f=v=>{m=g.onStop=()=>{ot(v,i,4)}};if(hn)return f=$e,t?n&&je(t,i,3,[l(),u?[]:void 0,f]):l(),$e;let w=u?[]:Js;const h=()=>{if(!!g.active)if(t){const v=g.run();(a||c||(u?v.some((x,k)=>nn(x,w[k])):nn(v,w)))&&(m&&m(),je(t,i,3,[v,w===Js?void 0:w,f]),w=v)}else g.run()};h.allowRecurse=!!t;let b;r==="sync"?b=h:r==="post"?b=()=>Te(h,i&&i.suspense):b=()=>{!i||i.isMounted?wc(h):h()};const g=new ka(l,b);return t?n?h():w=g.run():r==="post"?Te(g.run.bind(g),i&&i.suspense):g.run(),()=>{g.stop(),i&&i.scope&&ga(i.scope.effects,g)}}function xc(e,t,n){const a=this.proxy,r=he(e)?e.includes(".")?Qs(a,e):()=>a[e]:e.bind(a,a);let s;Q(t)?s=t:(s=t.handler,n=t);const o=we;Ft(this);const i=Zs(r,s.bind(a),n);return o?Ft(o):St(),i}function Qs(e,t){const n=t.split(".");return()=>{let a=e;for(let r=0;r<n.length&&a;r++)a=a[n[r]];return a}}function Et(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))Et(e.value,t);else if(G(e))for(let n=0;n<e.length;n++)Et(e[n],t);else if(Mr(e)||It(e))e.forEach(n=>{Et(n,t)});else if(Hr(e))for(const n in e)Et(e[n],t);return e}function le(e,t,n){const a=arguments.length;return a===2?ve(t)&&!G(t)?Xn(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Xn(n)&&(n=[n]),ge(e,t,n))}const Sc="3.2.26",Ec="http://www.w3.org/2000/svg",Bt=typeof document!="undefined"?document:null,eo=new Map,kc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const r=t?Bt.createElementNS(Ec,e):Bt.createElement(e,n?{is:n}:void 0);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,a){const r=n?n.previousSibling:t.lastChild;let s=eo.get(e);if(!s){const o=Bt.createElement("template");if(o.innerHTML=a?`<svg>${e}</svg>`:e,s=o.content,a){const i=s.firstChild;for(;i.firstChild;)s.appendChild(i.firstChild);s.removeChild(i)}eo.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cc(e,t,n){const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Tc(e,t,n){const a=e.style,r=he(n);if(n&&!r){for(const s in n)rr(a,s,n[s]);if(t&&!he(t))for(const s in t)n[s]==null&&rr(a,s,"")}else{const s=a.display;r?t!==n&&(a.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(a.display=s)}}const to=/\s*!important$/;function rr(e,t,n){if(G(n))n.forEach(a=>rr(e,t,a));else if(t.startsWith("--"))e.setProperty(t,n);else{const a=Rc(e,t);to.test(n)?e.setProperty(Lt(a),n.replace(to,""),"important"):e[a]=n}}const no=["Webkit","Moz","ms"],sr={};function Rc(e,t){const n=sr[t];if(n)return n;let a=Ve(t);if(a!=="filter"&&a in e)return sr[t]=a;a=Ln(a);for(let r=0;r<no.length;r++){const s=no[r]+a;if(s in e)return sr[t]=s}return t}const ao="http://www.w3.org/1999/xlink";function Ac(e,t,n,a,r){if(a&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ao,t.slice(6,t.length)):e.setAttributeNS(ao,t,n);else{const s=Ei(t);n==null||s&&!Lr(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Pc(e,t,n,a,r,s,o){if(t==="innerHTML"||t==="textContent"){a&&o(a,r,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n==null?"":n;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const i=typeof e[t];if(i==="boolean"){e[t]=Lr(n);return}else if(n==null&&i==="string"){e[t]="",e.removeAttribute(t);return}else if(i==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let na=Date.now,ro=!1;if(typeof window!="undefined"){na()>document.createEvent("Event").timeStamp&&(na=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ro=!!(e&&Number(e[1])<=53)}let or=0;const Ic=Promise.resolve(),Lc=()=>{or=0},Oc=()=>or||(Ic.then(Lc),or=na());function Mc(e,t,n,a){e.addEventListener(t,n,a)}function Dc(e,t,n,a){e.removeEventListener(t,n,a)}function Nc(e,t,n,a,r=null){const s=e._vei||(e._vei={}),o=s[t];if(a&&o)o.value=a;else{const[i,l]=Hc(t);if(a){const c=s[t]=Fc(a,r);Mc(e,i,c,l)}else o&&(Dc(e,i,o,l),s[t]=void 0)}}const so=/(?:Once|Passive|Capture)$/;function Hc(e){let t;if(so.test(e)){t={};let n;for(;n=e.match(so);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Lt(e.slice(2)),t]}function Fc(e,t){const n=a=>{const r=a.timeStamp||na();(ro||r>=n.attached-1)&&je(jc(a,n.value),t,5,[a])};return n.value=e,n.attached=Oc(),n}function jc(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>r=>!r._stopped&&a(r))}else return t}const oo=/^on[a-z]/,zc=(e,t,n,a,r=!1,s,o,i,l)=>{t==="class"?Cc(e,a,r):t==="style"?Tc(e,n,a):en(t)?ma(t)||Nc(e,t,n,a,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bc(e,t,a,r))?Pc(e,t,a,s,o,i,l):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Ac(e,t,a,r))};function Bc(e,t,n,a){return a?!!(t==="innerHTML"||t==="textContent"||t in e&&oo.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oo.test(t)&&he(n)?!1:t in e}const lt="transition",bn="animation",ir=(e,{slots:t})=>le(hs,$c(e),t);ir.displayName="Transition";const io={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ir.props=xe({},hs.props,io);const kt=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},lo=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function $c(e){const t={};for(const _ in e)_ in io||(t[_]=e[_]);if(e.css===!1)return t;const{name:n="v",type:a,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=i,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,h=qc(r),b=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:k,onLeave:A,onLeaveCancelled:H,onBeforeAppear:j=v,onAppear:C=x,onAppearCancelled:S=k}=t,V=(_,D,K)=>{$t(_,D?u:i),$t(_,D?c:o),K&&K()},q=(_,D)=>{$t(_,w),$t(_,f),D&&D()},Y=_=>(D,K)=>{const se=_?C:x,$=()=>V(D,_,K);kt(se,[D,$]),co(()=>{$t(D,_?l:s),ct(D,_?u:i),lo(se)||uo(D,a,b,$)})};return xe(t,{onBeforeEnter(_){kt(v,[_]),ct(_,s),ct(_,o)},onBeforeAppear(_){kt(j,[_]),ct(_,l),ct(_,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(_,D){const K=()=>q(_,D);ct(_,m),Kc(),ct(_,f),co(()=>{$t(_,m),ct(_,w),lo(A)||uo(_,a,g,K)}),kt(A,[_,K])},onEnterCancelled(_){V(_,!1),kt(k,[_])},onAppearCancelled(_){V(_,!0),kt(S,[_])},onLeaveCancelled(_){q(_),kt(H,[_])}})}function qc(e){if(e==null)return null;if(ve(e))return[lr(e.enter),lr(e.leave)];{const t=lr(e);return[t,t]}}function lr(e){return Fr(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function $t(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uc=0;function uo(e,t,n,a){const r=e._endId=++Uc,s=()=>{r===e._endId&&a()};if(n)return setTimeout(s,n);const{type:o,timeout:i,propCount:l}=Wc(e,t);if(!o)return a();const c=o+"end";let u=0;const m=()=>{e.removeEventListener(c,f),s()},f=w=>{w.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},i+1),e.addEventListener(c,f)}function Wc(e,t){const n=window.getComputedStyle(e),a=h=>(n[h]||"").split(", "),r=a(lt+"Delay"),s=a(lt+"Duration"),o=fo(r,s),i=a(bn+"Delay"),l=a(bn+"Duration"),c=fo(i,l);let u=null,m=0,f=0;t===lt?o>0&&(u=lt,m=o,f=s.length):t===bn?c>0&&(u=bn,m=c,f=l.length):(m=Math.max(o,c),u=m>0?o>c?lt:bn:null,f=u?u===lt?s.length:l.length:0);const w=u===lt&&/\b(transform|all)(,|$)/.test(n[lt+"Property"]);return{type:u,timeout:m,propCount:f,hasTransform:w}}function fo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>ho(n)+ho(e[a])))}function ho(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Kc(){return document.body.offsetHeight}const Ah={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):wn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:a}){!t!=!n&&(a?t?(a.beforeEnter(e),wn(e,!0),a.enter(e)):a.leave(e,()=>{wn(e,!1)}):wn(e,t))},beforeUnmount(e,{value:t}){wn(e,t)}};function wn(e,t){e.style.display=t?e._vod:"none"}const po=xe({patchProp:zc},kc);let _n,mo=!1;function Vc(){return _n||(_n=Xl(po))}function Yc(){return _n=mo?_n:Jl(po),mo=!0,_n}const Gc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=a=>{const r=go(a);if(!r)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t},Xc=(...e)=>{const t=Yc().createApp(...e),{mount:n}=t;return t.mount=a=>{const r=go(a);if(r)return n(r,!0,r instanceof SVGElement)},t};function go(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const vo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qt=e=>vo?Symbol(e):"_vr_"+e,Jc=qt("rvlm"),yo=qt("rvd"),aa=qt("r"),cr=qt("rl"),dr=qt("rvl"),Ut=typeof window!="undefined";function Zc(e){return e.__esModule||vo&&e[Symbol.toStringTag]==="Module"}const ue=Object.assign;function ur(e,t){const n={};for(const a in t){const r=t[a];n[a]=Array.isArray(r)?r.map(e):e(r)}return n}const xn=()=>{},Qc=/\/$/,ed=e=>e.replace(Qc,"");function fr(e,t,n="/"){let a,r={},s="",o="";const i=t.indexOf("?"),l=t.indexOf("#",i>-1?i:0);return i>-1&&(a=t.slice(0,i),s=t.slice(i+1,l>-1?l:t.length),r=e(s)),l>-1&&(a=a||t.slice(0,l),o=t.slice(l,t.length)),a=rd(a!=null?a:t,n),{fullPath:a+(s&&"?")+s+o,path:a,query:r,hash:o}}function td(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nd(e,t,n){const a=t.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&Wt(t.matched[a],n.matched[r])&&wo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ad(e[n],t[n]))return!1;return!0}function ad(e,t){return Array.isArray(e)?_o(e,t):Array.isArray(t)?_o(t,e):e===t}function _o(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function rd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/");let r=n.length-1,s,o;for(s=0;s<a.length;s++)if(o=a[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var En;(function(e){e.back="back",e.forward="forward",e.unknown=""})(En||(En={}));function sd(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ed(e)}const od=/^[^#]+#/;function id(e,t){return e.replace(od,"#")+t}function ld(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function cd(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=ld(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xo(e,t){return(history.state?history.state.position-t:-1)+e}const hr=new Map;function dd(e,t){hr.set(e,t)}function ud(e){const t=hr.get(e);return hr.delete(e),t}let fd=()=>location.protocol+"//"+location.host;function So(e,t){const{pathname:n,search:a,hash:r}=t,s=e.indexOf("#");if(s>-1){let i=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(i);return l[0]!=="/"&&(l="/"+l),bo(l,"")}return bo(n,e)+a+r}function hd(e,t,n,a){let r=[],s=[],o=null;const i=({state:f})=>{const w=So(e,location),h=n.value,b=t.value;let g=0;if(f){if(n.value=w,t.value=f,o&&o===h){o=null;return}g=b?f.position-b.position:0}else a(w);r.forEach(v=>{v(n.value,h,{delta:g,type:Sn.pop,direction:g?g>0?En.forward:En.back:En.unknown})})};function l(){o=n.value}function c(f){r.push(f);const w=()=>{const h=r.indexOf(f);h>-1&&r.splice(h,1)};return s.push(w),w}function u(){const{history:f}=window;!f.state||f.replaceState(ue({},f.state,{scroll:ra()}),"")}function m(){for(const f of s)f();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:m}}function Eo(e,t,n,a=!1,r=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:r?ra():null}}function pd(e){const{history:t,location:n}=window,a={value:So(e,n)},r={value:t.state};r.value||s(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const m=e.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:fd()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(w){console.error(w),n[u?"replace":"assign"](f)}}function o(l,c){const u=ue({},t.state,Eo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),a.value=l}function i(l,c){const u=ue({},r.value,t.state,{forward:l,scroll:ra()});s(u.current,u,!0);const m=ue({},Eo(a.value,l,null),{position:u.position+1},c);s(l,m,!1),a.value=l}return{location:a,state:r,push:i,replace:o}}function md(e){e=sd(e);const t=pd(e),n=hd(e,t.state,t.location,t.replace);function a(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ue({location:"",base:e,go:a,createHref:id.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function gd(e){return typeof e=="string"||e&&typeof e=="object"}function ko(e){return typeof e=="string"||typeof e=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Co=qt("nf");var To;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(To||(To={}));function Kt(e,t){return ue(new Error,{type:e,[Co]:!0},t)}function Ct(e,t){return e instanceof Error&&Co in e&&(t==null||!!(e.type&t))}const Ro="[^/]+?",vd={sensitive:!1,strict:!1,start:!0,end:!0},yd=/[.+*?^${}()[\]/\\]/g;function bd(e,t){const n=ue({},vd,t),a=[];let r=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let m=0;m<c.length;m++){const f=c[m];let w=40+(n.sensitive?.25:0);if(f.type===0)m||(r+="/"),r+=f.value.replace(yd,"\\$&"),w+=40;else if(f.type===1){const{value:h,repeatable:b,optional:g,regexp:v}=f;s.push({name:h,repeatable:b,optional:g});const x=v||Ro;if(x!==Ro){w+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+A.message)}}let k=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(k=g&&c.length<2?`(?:/${k})`:"/"+k),g&&(k+="?"),r+=k,w+=20,g&&(w+=-8),b&&(w+=-20),x===".*"&&(w+=-50)}u.push(w)}a.push(u)}if(n.strict&&n.end){const c=a.length-1;a[c][a[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function i(c){const u=c.match(o),m={};if(!u)return null;for(let f=1;f<u.length;f++){const w=u[f]||"",h=s[f-1];m[h.name]=w&&h.repeatable?w.split("/"):w}return m}function l(c){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const w of f)if(w.type===0)u+=w.value;else if(w.type===1){const{value:h,repeatable:b,optional:g}=w,v=h in c?c[h]:"";if(Array.isArray(v)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(v)?v.join("/"):v;if(!x)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${h}"`);u+=x}}return u}return{re:o,score:a,keys:s,parse:i,stringify:l}}function wd(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _d(e,t){let n=0;const a=e.score,r=t.score;for(;n<a.length&&n<r.length;){const s=wd(a[n],r[n]);if(s)return s;n++}return r.length-a.length}const xd={type:0,value:""},Sd=/[a-zA-Z0-9_]/;function Ed(e){if(!e)return[[]];if(e==="/")return[[xd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${c}": ${w}`)}let n=0,a=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let i=0,l,c="",u="";function m(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:l==="/"?(c&&m(),o()):l===":"?(m(),n=1):f();break;case 4:f(),n=a;break;case 1:l==="("?n=2:Sd.test(l)?f():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),m(),o(),r}function kd(e,t,n){const a=bd(Ed(e.path),n),r=ue(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Cd(e,t){const n=[],a=new Map;t=Po({strict:!1,end:!0,sensitive:!1},t);function r(u){return a.get(u)}function s(u,m,f){const w=!f,h=Rd(u);h.aliasOf=f&&f.record;const b=Po(t,u),g=[h];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of k)g.push(ue({},h,{components:f?f.record.components:h.components,path:A,aliasOf:f?f.record:h}))}let v,x;for(const k of g){const{path:A}=k;if(m&&A[0]!=="/"){const H=m.record.path,j=H[H.length-1]==="/"?"":"/";k.path=m.record.path+(A&&j+A)}if(v=kd(k,m,b),f?f.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),w&&u.name&&!Ao(v)&&o(u.name)),"children"in h){const H=h.children;for(let j=0;j<H.length;j++)s(H[j],v,f&&f.children[j])}f=f||v,l(v)}return x?()=>{o(x)}:xn}function o(u){if(ko(u)){const m=a.get(u);m&&(a.delete(u),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(u);m>-1&&(n.splice(m,1),u.record.name&&a.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return n}function l(u){let m=0;for(;m<n.length&&_d(u,n[m])>=0;)m++;n.splice(m,0,u),u.record.name&&!Ao(u)&&a.set(u.record.name,u)}function c(u,m){let f,w={},h,b;if("name"in u&&u.name){if(f=a.get(u.name),!f)throw Kt(1,{location:u});b=f.record.name,w=ue(Td(m.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),h=f.stringify(w)}else if("path"in u)h=u.path,f=n.find(x=>x.re.test(h)),f&&(w=f.parse(h),b=f.record.name);else{if(f=m.name?a.get(m.name):n.find(x=>x.re.test(m.path)),!f)throw Kt(1,{location:u,currentLocation:m});b=f.record.name,w=ue({},m.params,u.params),h=f.stringify(w)}const g=[];let v=f;for(;v;)g.unshift(v.record),v=v.parent;return{name:b,path:h,params:w,matched:g,meta:Pd(g)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:i,getRecordMatcher:r}}function Td(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Rd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ad(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Ad(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="boolean"?n:n[a];return t}function Ao(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pd(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function Po(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const Io=/#/g,Id=/&/g,Ld=/\//g,Od=/=/g,Md=/\?/g,Lo=/\+/g,Dd=/%5B/g,Nd=/%5D/g,Oo=/%5E/g,Hd=/%60/g,Mo=/%7B/g,Fd=/%7C/g,Do=/%7D/g,jd=/%20/g;function pr(e){return encodeURI(""+e).replace(Fd,"|").replace(Dd,"[").replace(Nd,"]")}function zd(e){return pr(e).replace(Mo,"{").replace(Do,"}").replace(Oo,"^")}function mr(e){return pr(e).replace(Lo,"%2B").replace(jd,"+").replace(Io,"%23").replace(Id,"%26").replace(Hd,"`").replace(Mo,"{").replace(Do,"}").replace(Oo,"^")}function Bd(e){return mr(e).replace(Od,"%3D")}function $d(e){return pr(e).replace(Io,"%23").replace(Md,"%3F")}function qd(e){return e==null?"":$d(e).replace(Ld,"%2F")}function sa(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ud(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const s=a[r].replace(Lo," "),o=s.indexOf("="),i=sa(o<0?s:s.slice(0,o)),l=o<0?null:sa(s.slice(o+1));if(i in t){let c=t[i];Array.isArray(c)||(c=t[i]=[c]),c.push(l)}else t[i]=l}return t}function No(e){let t="";for(let n in e){const a=e[n];if(n=Bd(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(a)?a.map(s=>s&&mr(s)):[a&&mr(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Wd(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=Array.isArray(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}function kn(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,a,r){const s=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((o,i)=>{const l=m=>{m===!1?i(Kt(4,{from:n,to:t})):m instanceof Error?i(m):gd(m)?i(Kt(2,{from:t,to:m})):(s&&a.enterCallbacks[r]===s&&typeof m=="function"&&s.push(m),o())},c=e.call(a&&a.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(m=>i(m))})}function gr(e,t,n,a){const r=[];for(const s of e)for(const o in s.components){let i=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Kd(i)){const c=(i.__vccOpts||i)[t];c&&r.push(dt(c,n,a,s,o))}else{let l=i();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Zc(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&dt(f,n,a,s,o)()}))}}return r}function Kd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ho(e){const t=_e(aa),n=_e(cr),a=pe(()=>t.resolve(Ze(e.to))),r=pe(()=>{const{matched:l}=a.value,{length:c}=l,u=l[c-1],m=n.matched;if(!u||!m.length)return-1;const f=m.findIndex(Wt.bind(null,u));if(f>-1)return f;const w=Fo(l[c-2]);return c>1&&Fo(u)===w&&m[m.length-1].path!==w?m.findIndex(Wt.bind(null,l[c-2])):f}),s=pe(()=>r.value>-1&&Xd(n.params,a.value.params)),o=pe(()=>r.value>-1&&r.value===n.matched.length-1&&wo(n.params,a.value.params));function i(l={}){return Gd(l)?t[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(xn):Promise.resolve()}return{route:a,href:pe(()=>a.value.href),isActive:s,isExactActive:o,navigate:i}}const Vd=Ne({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ho,setup(e,{slots:t}){const n=sn(Ho(e)),{options:a}=_e(aa),r=pe(()=>({[jo(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[jo(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:le("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Yd=Vd;function Gd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xd(e,t){for(const n in t){const a=t[n],r=e[n];if(typeof a=="string"){if(a!==r)return!1}else if(!Array.isArray(r)||r.length!==a.length||a.some((s,o)=>s!==r[o]))return!1}return!0}function Fo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jo=(e,t,n)=>e!=null?e:t!=null?t:n,Jd=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const a=_e(dr),r=pe(()=>e.route||a.value),s=_e(yo,0),o=pe(()=>r.value.matched[s]);gt(yo,s+1),gt(Jc,o),gt(dr,r);const i=ye();return Xe(()=>[i.value,o.value,e.name],([l,c,u],[m,f,w])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===m&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Wt(c,f)||!m)&&(c.enterCallbacks[u]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[e.name],m=e.name;if(!u)return zo(n.default,{Component:u,route:l});const f=c.props[e.name],w=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=le(u,ue({},w,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(c.instances[m]=null)},ref:i}));return zo(n.default,{Component:b,route:l})||b}}});function zo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Bo=Jd;function Zd(e){const t=Cd(e.routes,e),n=e.parseQuery||Ud,a=e.stringifyQuery||No,r=e.history,s=kn(),o=kn(),i=kn(),l=os(tt);let c=tt;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ur.bind(null,E=>""+E),m=ur.bind(null,qd),f=ur.bind(null,sa);function w(E,F){let O,z;return ko(E)?(O=t.getRecordMatcher(E),z=F):z=E,t.addRoute(z,O)}function h(E){const F=t.getRecordMatcher(E);F&&t.removeRoute(F)}function b(){return t.getRoutes().map(E=>E.record)}function g(E){return!!t.getRecordMatcher(E)}function v(E,F){if(F=ue({},F||l.value),typeof E=="string"){const J=fr(n,E,F.path),d=t.resolve({path:J.path},F),p=r.createHref(J.fullPath);return ue(J,d,{params:f(d.params),hash:sa(J.hash),redirectedFrom:void 0,href:p})}let O;if("path"in E)O=ue({},E,{path:fr(n,E.path,F.path).path});else{const J=ue({},E.params);for(const d in J)J[d]==null&&delete J[d];O=ue({},E,{params:m(E.params)}),F.params=m(F.params)}const z=t.resolve(O,F),oe=E.hash||"";z.params=u(f(z.params));const ie=td(a,ue({},E,{hash:zd(oe),path:z.path})),ee=r.createHref(ie);return ue({fullPath:ie,hash:oe,query:a===No?Wd(E.query):E.query||{}},z,{redirectedFrom:void 0,href:ee})}function x(E){return typeof E=="string"?fr(n,E,l.value.path):ue({},E)}function k(E,F){if(c!==E)return Kt(8,{from:F,to:E})}function A(E){return C(E)}function H(E){return A(ue(x(E),{replace:!0}))}function j(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let z=typeof O=="function"?O(E):O;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=x(z):{path:z},z.params={}),ue({query:E.query,hash:E.hash,params:E.params},z)}}function C(E,F){const O=c=v(E),z=l.value,oe=E.state,ie=E.force,ee=E.replace===!0,J=j(O);if(J)return C(ue(x(J),{state:oe,force:ie,replace:ee}),F||O);const d=O;d.redirectedFrom=F;let p;return!ie&&nd(a,z,O)&&(p=Kt(16,{to:d,from:z}),Ee(z,z,!0,!1)),(p?Promise.resolve(p):V(d,z)).catch(y=>Ct(y)?y:Z(y,d,z)).then(y=>{if(y){if(Ct(y,2))return C(ue(x(y.to),{state:oe,force:ie,replace:ee}),F||d)}else y=Y(d,z,!0,ee,oe);return q(d,z,y),y})}function S(E,F){const O=k(E,F);return O?Promise.reject(O):Promise.resolve()}function V(E,F){let O;const[z,oe,ie]=Qd(E,F);O=gr(z.reverse(),"beforeRouteLeave",E,F);for(const J of z)J.leaveGuards.forEach(d=>{O.push(dt(d,E,F))});const ee=S.bind(null,E,F);return O.push(ee),Vt(O).then(()=>{O=[];for(const J of s.list())O.push(dt(J,E,F));return O.push(ee),Vt(O)}).then(()=>{O=gr(oe,"beforeRouteUpdate",E,F);for(const J of oe)J.updateGuards.forEach(d=>{O.push(dt(d,E,F))});return O.push(ee),Vt(O)}).then(()=>{O=[];for(const J of E.matched)if(J.beforeEnter&&!F.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)O.push(dt(d,E,F));else O.push(dt(J.beforeEnter,E,F));return O.push(ee),Vt(O)}).then(()=>(E.matched.forEach(J=>J.enterCallbacks={}),O=gr(ie,"beforeRouteEnter",E,F),O.push(ee),Vt(O))).then(()=>{O=[];for(const J of o.list())O.push(dt(J,E,F));return O.push(ee),Vt(O)}).catch(J=>Ct(J,8)?J:Promise.reject(J))}function q(E,F,O){for(const z of i.list())z(E,F,O)}function Y(E,F,O,z,oe){const ie=k(E,F);if(ie)return ie;const ee=F===tt,J=Ut?history.state:{};O&&(z||ee?r.replace(E.fullPath,ue({scroll:ee&&J&&J.scroll},oe)):r.push(E.fullPath,oe)),l.value=E,Ee(E,F,O,ee),be()}let _;function D(){_=r.listen((E,F,O)=>{const z=v(E),oe=j(z);if(oe){C(ue(oe,{replace:!0}),z).catch(xn);return}c=z;const ie=l.value;Ut&&dd(xo(ie.fullPath,O.delta),ra()),V(z,ie).catch(ee=>Ct(ee,4|8)?ee:Ct(ee,2)?(C(ee.to,z).then(J=>{Ct(J,4|16)&&!O.delta&&O.type===Sn.pop&&r.go(-1,!1)}).catch(xn),Promise.reject()):(O.delta&&r.go(-O.delta,!1),Z(ee,z,ie))).then(ee=>{ee=ee||Y(z,ie,!1),ee&&(O.delta?r.go(-O.delta,!1):O.type===Sn.pop&&Ct(ee,4|16)&&r.go(-1,!1)),q(z,ie,ee)}).catch(xn)})}let K=kn(),se=kn(),$;function Z(E,F,O){be(E);const z=se.list();return z.length?z.forEach(oe=>oe(E,F,O)):console.error(E),Promise.reject(E)}function te(){return $&&l.value!==tt?Promise.resolve():new Promise((E,F)=>{K.add([E,F])})}function be(E){$||($=!0,D(),K.list().forEach(([F,O])=>E?O(E):F()),K.reset())}function Ee(E,F,O,z){const{scrollBehavior:oe}=e;if(!Ut||!oe)return Promise.resolve();const ie=!O&&ud(xo(E.fullPath,0))||(z||!O)&&history.state&&history.state.scroll||null;return tr().then(()=>oe(E,F,ie)).then(ee=>ee&&cd(ee)).catch(ee=>Z(ee,E,F))}const Ae=E=>r.go(E);let Me;const Ce=new Set;return{currentRoute:l,addRoute:w,removeRoute:h,hasRoute:g,getRoutes:b,resolve:v,options:e,push:A,replace:H,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:s.add,beforeResolve:o.add,afterEach:i.add,onError:se.add,isReady:te,install(E){const F=this;E.component("RouterLink",Yd),E.component("RouterView",Bo),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(l)}),Ut&&!Me&&l.value===tt&&(Me=!0,A(r.location).catch(oe=>{}));const O={};for(const oe in tt)O[oe]=pe(()=>l.value[oe]);E.provide(aa,F),E.provide(cr,sn(O)),E.provide(dr,l);const z=E.unmount;Ce.add(E),E.unmount=function(){Ce.delete(E),Ce.size<1&&(c=tt,_&&_(),l.value=tt,Me=!1,$=!1),z()}}}}function Vt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Qd(e,t){const n=[],a=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const i=t.matched[o];i&&(e.matched.find(c=>Wt(c,i))?a.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Wt(c,l))||r.push(l))}return[n,a,r]}function oa(){return _e(aa)}function vr(){return _e(cr)}const eu=Ne({setup(e,t){const n=ye(!1);return qe(()=>{n.value=!0}),()=>{var a,r;return n.value?(r=(a=t.slots).default)===null||r===void 0?void 0:r.call(a):null}}}),tu="modulepreload",$o={},nu="/",ze=function(t,n){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=`${nu}${a}`,a in $o)return;$o[a]=!0;const r=a.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":tu,r||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),r)return new Promise((i,l)=>{o.addEventListener("load",i),o.addEventListener("error",l)})})).then(()=>t())},qo={"v-8daa1a0e":vt(()=>ze(()=>import("./index.html.882cc590.js"),[])),"v-77f0ef68":vt(()=>ze(()=>import("./index.html.c2b70fba.js"),[])),"v-1c385113":vt(()=>ze(()=>import("./index.html.333b1b93.js"),[])),"v-37b893e5":vt(()=>ze(()=>import("./index.html.5960c31c.js"),[])),"v-3706649a":vt(()=>ze(()=>import("./404.html.b4a2b7e3.js"),[]))},au={"v-8daa1a0e":()=>ze(()=>import("./index.html.eedf7cac.js"),[]).then(({data:e})=>e),"v-77f0ef68":()=>ze(()=>import("./index.html.303b8dec.js"),[]).then(({data:e})=>e),"v-1c385113":()=>ze(()=>import("./index.html.2b5b5fd5.js"),[]).then(({data:e})=>e),"v-37b893e5":()=>ze(()=>import("./index.html.5dbd17c9.js"),[]).then(({data:e})=>e),"v-3706649a":()=>ze(()=>import("./404.html.e275e9a9.js"),[]).then(({data:e})=>e)},Uo=ye(au),yr=Ia({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),ut=ye(yr),Yt=()=>ut,ru=async e=>{const t=Uo.value[e];if(!t)return yr;const n=await t();return n!=null?n:yr};fa.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=e=>{Uo.value[e.key]=()=>Promise.resolve(e),e.key===ut.value.key&&(ut.value=e)});const Wo=Symbol(""),su=()=>{const e=_e(Wo);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},ou=e=>e.frontmatter,iu=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),lu=e=>{const t=new Set,n=[];return e.forEach(a=>{const r=iu(a);t.has(r)||(t.add(r),n.push(a))}),n},cu=e=>/^(https?:)?\/\//.test(e),Ph=e=>/^mailto:/.test(e),Ih=e=>/^tel:/.test(e),Ko=e=>Object.prototype.toString.call(e)==="[object Object]",du=e=>e.replace(/\/$/,""),uu=e=>e.replace(/^\//,""),Vo=(e,t)=>{const n=Object.keys(e).sort((a,r)=>{const s=r.split("/").length-a.split("/").length;return s!==0?s:r.length-a.length});for(const a of n)if(t.startsWith(a))return a;return"/"},Yo=Symbol(""),fu=()=>{const e=_e(Yo);if(!e)throw new Error("usePageHead() is called without provider.");return e},hu=(e,t,n)=>{const a=he(t.description)?t.description:n.description,r=[...G(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:a}]];return lu(r)},pu=Symbol(""),mu=(e,t)=>`${e.title?`${e.title} | `:""}${t.title}`,Go=Symbol(""),gu=()=>{const e=_e(Go);if(!e)throw new Error("usePageLang() is called without provider.");return e},vu=e=>e.lang||"en",br=Symbol(""),yu=()=>{const e=_e(br);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},bu=(e,t)=>Vo(e,t),wu={base:"/",lang:"en-US",title:"Stata2R",description:"",head:[["link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}]],locales:{}},Tt=ye(wu),_u=()=>Tt;fa.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=e=>{Tt.value=e});const Xo=Symbol(""),Lh=()=>{const e=_e(Xo);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},xu=(e,t)=>Ke(Ke({},e),e.locales[t]),Su=Symbol(""),Eu=()=>{const e=vr(),t=fu(),n=gu(),a=ye([]),r=()=>{t.value.forEach(o=>{const i=ku(o);i&&a.value.push(i)})},s=()=>{document.documentElement.lang=n.value,a.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),a.value.splice(0,a.value.length),t.value.forEach(o=>{const i=Cu(o);i!==null&&(document.head.appendChild(i),a.value.push(i))})};gt(Su,s),qe(()=>{r(),s(),Xe(()=>e.path,()=>s())})},ku=([e,t,n=""])=>{const a=Object.entries(t).map(([i,l])=>he(l)?`[${i}="${l}"]`:l===!0?`[${i}]`:"").join(""),r=`head > ${e}${a}`;return Array.from(document.querySelectorAll(r)).find(i=>i.innerText===n)||null},Cu=([e,t,n])=>{if(!he(e))return null;const a=document.createElement(e);return Ko(t)&&Object.entries(t).forEach(([r,s])=>{he(s)?a.setAttribute(r,s):s===!0&&a.setAttribute(r,"")}),he(n)&&a.appendChild(document.createTextNode(n)),a},wr=e=>{let t;e.pageKey?t=e.pageKey:t=Yt().value.key;const n=qo[t];return n?le(n):le("div","404 Not Found")};wr.displayName="Content";wr.props={pageKey:{type:String,required:!1}};const Tu={"404":vt(()=>ze(()=>import("./404.2752110f.js"),[])),Layout:vt(()=>ze(()=>import("./Layout.bddd235c.js"),[]))},Jo=Ne({name:"Vuepress",setup(){const e=Yt(),t=pe(()=>{let n;if(e.value.path){const a=e.value.frontmatter.layout;he(a)?n=a:n="Layout"}else n="404";return Tu[n]||ec(n,!1)});return()=>le(t.value)}}),Gt=e=>e,ia=e=>e,Ru=e=>cu(e)?e:`${_u().value.base}${uu(e)}`;const Au=le("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[le("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),le("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),_r=(e,{slots:t})=>{var n;return le("span",[Au,(n=t.default)===null||n===void 0?void 0:n.call(t)])};_r.displayName="ExternalLinkIcon";var Pu=Gt(({app:e})=>{e.component("ExternalLinkIcon",_r)});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},la=function(t){return t.tagName==="IMG"},Iu=function(t){return NodeList.prototype.isPrototypeOf(t)},ca=function(t){return t&&t.nodeType===1},Zo=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Qo=function(t){try{return Array.isArray(t)?t.filter(la):Iu(t)?[].slice.call(t).filter(la):ca(t)?[t].filter(la):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(la):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Lu=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Ou=function(t){var n=t.getBoundingClientRect(),a=n.top,r=n.left,s=n.width,o=n.height,i=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=a+l+"px",i.style.left=r+c+"px",i.style.width=s+"px",i.style.height=o+"px",i.style.transform="",i},Xt=function(t,n){var a=Rt({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,a);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),r},Mu=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(_){function D(){}_(D,D)},r=function(_){var D=_.target;if(D===V){h();return}k.indexOf(D)!==-1&&b({target:D})},s=function(){if(!(H||!S.original)){var _=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(j-_)>C.scrollOffset&&setTimeout(h,150)}},o=function(_){var D=_.key||_.keyCode;(D==="Escape"||D==="Esc"||D===27)&&h()},i=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_;if(_.background&&(V.style.background=_.background),_.container&&_.container instanceof Object&&(D.container=Rt({},C.container,_.container)),_.template){var K=ca(_.template)?_.template:document.querySelector(_.template);D.template=K}return C=Rt({},C,D),k.forEach(function(se){se.dispatchEvent(Xt("medium-zoom:update",{detail:{zoom:q}}))}),q},l=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Rt({},C,_))},c=function(){for(var _=arguments.length,D=Array(_),K=0;K<_;K++)D[K]=arguments[K];var se=D.reduce(function($,Z){return[].concat($,Qo(Z))},[]);return se.filter(function($){return k.indexOf($)===-1}).forEach(function($){k.push($),$.classList.add("medium-zoom-image")}),A.forEach(function($){var Z=$.type,te=$.listener,be=$.options;se.forEach(function(Ee){Ee.addEventListener(Z,te,be)})}),q},u=function(){for(var _=arguments.length,D=Array(_),K=0;K<_;K++)D[K]=arguments[K];S.zoomed&&h();var se=D.length>0?D.reduce(function($,Z){return[].concat($,Qo(Z))},[]):k;return se.forEach(function($){$.classList.remove("medium-zoom-image"),$.dispatchEvent(Xt("medium-zoom:detach",{detail:{zoom:q}}))}),k=k.filter(function($){return se.indexOf($)===-1}),q},m=function(_,D){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(se){se.addEventListener("medium-zoom:"+_,D,K)}),A.push({type:"medium-zoom:"+_,listener:D,options:K}),q},f=function(_,D){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(se){se.removeEventListener("medium-zoom:"+_,D,K)}),A=A.filter(function(se){return!(se.type==="medium-zoom:"+_&&se.listener.toString()===D.toString())}),q},w=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_.target,K=function(){var $={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},Z=void 0,te=void 0;if(C.container)if(C.container instanceof Object)$=Rt({},$,C.container),Z=$.width-$.left-$.right-C.margin*2,te=$.height-$.top-$.bottom-C.margin*2;else{var be=ca(C.container)?C.container:document.querySelector(C.container),Ee=be.getBoundingClientRect(),Ae=Ee.width,Me=Ee.height,Ce=Ee.left,Jt=Ee.top;$=Rt({},$,{width:Ae,height:Me,left:Ce,top:Jt})}Z=Z||$.width-C.margin*2,te=te||$.height-C.margin*2;var E=S.zoomedHd||S.original,F=Zo(E)?Z:E.naturalWidth||Z,O=Zo(E)?te:E.naturalHeight||te,z=E.getBoundingClientRect(),oe=z.top,ie=z.left,ee=z.width,J=z.height,d=Math.min(F,Z)/ee,p=Math.min(O,te)/J,y=Math.min(d,p),R=(-ie+(Z-ee)/2+C.margin+$.left)/y,T=(-oe+(te-J)/2+C.margin+$.top)/y,I="scale("+y+") translate3d("+R+"px, "+T+"px, 0)";S.zoomed.style.transform=I,S.zoomedHd&&(S.zoomedHd.style.transform=I)};return new a(function(se){if(D&&k.indexOf(D)===-1){se(q);return}var $=function Ae(){H=!1,S.zoomed.removeEventListener("transitionend",Ae),S.original.dispatchEvent(Xt("medium-zoom:opened",{detail:{zoom:q}})),se(q)};if(S.zoomed){se(q);return}if(D)S.original=D;else if(k.length>0){var Z=k;S.original=Z[0]}else{se(q);return}if(S.original.dispatchEvent(Xt("medium-zoom:open",{detail:{zoom:q}})),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,S.zoomed=Ou(S.original),document.body.appendChild(V),C.template){var te=ca(C.template)?C.template:document.querySelector(C.template);S.template=document.createElement("div"),S.template.appendChild(te.content.cloneNode(!0)),document.body.appendChild(S.template)}if(document.body.appendChild(S.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),S.original.classList.add("medium-zoom-image--hidden"),S.zoomed.classList.add("medium-zoom-image--opened"),S.zoomed.addEventListener("click",h),S.zoomed.addEventListener("transitionend",$),S.original.getAttribute("data-zoom-src")){S.zoomedHd=S.zoomed.cloneNode(),S.zoomedHd.removeAttribute("srcset"),S.zoomedHd.removeAttribute("sizes"),S.zoomedHd.src=S.zoomed.getAttribute("data-zoom-src"),S.zoomedHd.onerror=function(){clearInterval(be),console.warn("Unable to reach the zoom image target "+S.zoomedHd.src),S.zoomedHd=null,K()};var be=setInterval(function(){S.zoomedHd.complete&&(clearInterval(be),S.zoomedHd.classList.add("medium-zoom-image--opened"),S.zoomedHd.addEventListener("click",h),document.body.appendChild(S.zoomedHd),K())},10)}else if(S.original.hasAttribute("srcset")){S.zoomedHd=S.zoomed.cloneNode(),S.zoomedHd.removeAttribute("sizes"),S.zoomedHd.removeAttribute("loading");var Ee=S.zoomedHd.addEventListener("load",function(){S.zoomedHd.removeEventListener("load",Ee),S.zoomedHd.classList.add("medium-zoom-image--opened"),S.zoomedHd.addEventListener("click",h),document.body.appendChild(S.zoomedHd),K()})}else K()})},h=function(){return new a(function(_){if(H||!S.original){_(q);return}var D=function K(){S.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(S.zoomed),S.zoomedHd&&document.body.removeChild(S.zoomedHd),document.body.removeChild(V),S.zoomed.classList.remove("medium-zoom-image--opened"),S.template&&document.body.removeChild(S.template),H=!1,S.zoomed.removeEventListener("transitionend",K),S.original.dispatchEvent(Xt("medium-zoom:closed",{detail:{zoom:q}})),S.original=null,S.zoomed=null,S.zoomedHd=null,S.template=null,_(q)};H=!0,document.body.classList.remove("medium-zoom--opened"),S.zoomed.style.transform="",S.zoomedHd&&(S.zoomedHd.style.transform=""),S.template&&(S.template.style.transition="opacity 150ms",S.template.style.opacity=0),S.original.dispatchEvent(Xt("medium-zoom:close",{detail:{zoom:q}})),S.zoomed.addEventListener("transitionend",D)})},b=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_.target;return S.original?h():w({target:D})},g=function(){return C},v=function(){return k},x=function(){return S.original},k=[],A=[],H=!1,j=0,C=n,S={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?C=t:(t||typeof t=="string")&&c(t),C=Rt({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},C);var V=Lu(C.background);document.addEventListener("click",r),document.addEventListener("keyup",o),document.addEventListener("scroll",s),window.addEventListener("resize",h);var q={open:w,close:h,toggle:b,update:i,clone:l,attach:c,detach:u,on:m,off:f,getOptions:g,getImages:v,getZoomedImage:x};return q};function Du(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Nu=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Du(Nu);var Hu=Mu;const Fu=Symbol("mediumZoom");const ju=".theme-default-content > img, .theme-default-content :not(a) > img",zu={},Bu=400;var $u=Gt(({app:e,router:t})=>{const n=Hu(zu);n.refresh=(a=ju)=>{n.detach(),n.attach(a)},e.provide(Fu,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),Bu)})});const qu={repo:"stata2r/stata2r.github.io",docsRepo:"https://github.com/stata2r/stata2r.github.io",docsBranch:"main",docsDir:"src",contributors:!1,editLinkPattern:":repo/edit/:branch/:path",editLinks:!0,search:!0,sidebarDepth:1,sidebar:[{text:"data.table",link:"/data.table/"},{text:"fixest",link:"/fixest/"},{text:"extras",link:"/extras/"}],locales:{"/":{selectLanguageName:"English"}},navbar:[],logo:null,darkMode:!0,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"},ei=ye(qu),Uu=()=>ei;fa.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=e=>{ei.value=e});const ti=Symbol(""),Wu=()=>{const e=_e(ti);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Ku=(e,t)=>{var n;return Ke(Ke({},e),(n=e.locales)===null||n===void 0?void 0:n[t])};var Vu=Gt(({app:e})=>{const t=Uu(),n=e._context.provides[br],a=pe(()=>Ku(t.value,n.value));e.provide(ti,a),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return a.value}}})});const Yu=Ne({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(_t(),Gn("span",{class:ft(["badge",e.type]),style:Qt({verticalAlign:e.vertical})},[zs(t.$slots,"default",{},()=>[Ya(pa(e.text),1)])],6))}});var Gu=Ne({name:"CodeGroup",setup(e,{slots:t}){const n=ye(-1),a=ye([]),r=(i=n.value)=>{i<a.value.length-1?n.value=i+1:n.value=0,a.value[n.value].focus()},s=(i=n.value)=>{i>0?n.value=i-1:n.value=a.value.length-1,a.value[n.value].focus()},o=(i,l)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),n.value=l):i.key==="ArrowRight"?(i.preventDefault(),r(l)):i.key==="ArrowLeft"&&(i.preventDefault(),s(l))};return()=>{var i;const l=(((i=t.default)===null||i===void 0?void 0:i.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return l.length===0?null:(n.value<0||n.value>l.length-1?(n.value=l.findIndex(c=>c.props.active===""||c.props.active===!0),n.value===-1&&(n.value=0)):l.forEach((c,u)=>{c.props.active=u===n.value}),le("div",{class:"code-group"},[le("div",{class:"code-group__nav"},le("ul",{class:"code-group__ul"},l.map((c,u)=>{const m=u===n.value;return le("li",{class:"code-group__li"},le("button",{ref:f=>{f&&(a.value[u]=f)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":m},ariaPressed:m,ariaExpanded:m,onClick:()=>n.value=u,onKeydown:f=>o(f,u)},c.props.title))}))),l]))}}});const Xu=["aria-selected"],Ju=Ne({name:"CodeGroupItem"}),Zu=Ne(An(Ke({},Ju),{props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(_t(),Gn("div",{class:ft(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[zs(t.$slots,"default")],10,Xu))}}));function ni(e){return Hi()?(Fi(e),!0):!1}const Cn=typeof window!="undefined",Qu=e=>typeof e=="string",xr=()=>{};function ef(e,t){function n(...a){e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})}return n}const tf=e=>e();var ai=Object.getOwnPropertySymbols,nf=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,rf=(e,t)=>{var n={};for(var a in e)nf.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&ai)for(var a of ai(e))t.indexOf(a)<0&&af.call(e,a)&&(n[a]=e[a]);return n};function sf(e,t,n={}){const a=n,{eventFilter:r=tf}=a,s=rf(a,["eventFilter"]);return Xe(e,ef(r,t),s)}function of(e,t=!0){$s()?qe(e):t?e():tr(e)}const da=Cn?window:void 0;Cn&&window.document;Cn&&window.navigator;Cn&&window.location;function lf(...e){let t,n,a,r;if(Qu(e[0])?([n,a,r]=e,t=da):[t,n,a,r]=e,!t)return xr;let s=xr;const o=Xe(()=>Ze(t),l=>{s(),!!l&&(l.addEventListener(n,a,r),s=()=>{l.removeEventListener(n,a,r),s=xr})},{immediate:!0,flush:"post"}),i=()=>{o(),s()};return ni(i),i}function cf(e,t={}){const{window:n=da}=t;let a;const r=ye(!1),s=()=>{!n||(a||(a=n.matchMedia(e)),r.value=a.matches)};return of(()=>{s(),!!a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),ni(()=>{"removeEventListener"in s?a.removeEventListener("change",s):a.removeListener(s)}))}),r}const Sr="__vueuse_ssr_handlers__";globalThis[Sr]=globalThis[Sr]||{};const df=globalThis[Sr];function uf(e,t){return df[e]||t}function ff(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const hf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function pf(e,t,n,a={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,shallow:c,window:u=da,eventFilter:m,onError:f=x=>{console.error(x)}}=a,w=Ze(t),h=ff(w),b=(c?os:ye)(t),g=(r=a.serializer)!=null?r:hf[h];if(!n)try{n=uf("getDefaultStorage",()=>{var x;return(x=da)==null?void 0:x.localStorage})()}catch(x){f(x)}function v(x){if(!(!n||x&&x.key!==e))try{const k=x?x.newValue:n.getItem(e);k==null?(b.value=w,l&&w!==null&&n.setItem(e,g.write(w))):typeof k!="string"?b.value=k:b.value=g.read(k)}catch(k){f(k)}}return v(),u&&i&&lf(u,"storage",x=>setTimeout(()=>v(x),0)),n&&sf(b,()=>{try{b.value==null?n.removeItem(e):n.setItem(e,g.write(b.value))}catch(x){f(x)}},{flush:s,deep:o,eventFilter:m}),b}function mf(e){return cf("(prefers-color-scheme: dark)",e)}var ri,si;Cn&&(window==null?void 0:window.navigator)&&((ri=window==null?void 0:window.navigator)==null?void 0:ri.platform)&&/iP(ad|hone|od)/.test((si=window==null?void 0:window.navigator)==null?void 0:si.platform);var gf=Object.defineProperty,oi=Object.getOwnPropertySymbols,vf=Object.prototype.hasOwnProperty,yf=Object.prototype.propertyIsEnumerable,ii=(e,t,n)=>t in e?gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bf=(e,t)=>{for(var n in t||(t={}))vf.call(t,n)&&ii(e,n,t[n]);if(oi)for(var n of oi(t))yf.call(t,n)&&ii(e,n,t[n]);return e};const wf={top:0,left:0,bottom:0,right:0,height:0,width:0};bf({text:""},wf);const li=Symbol(""),Oh=()=>{const e=_e(li);if(!e)throw new Error("useDarkMode() is called without provider.");return e},_f=()=>{const e=Cr(),t=mf(),n=pf("vuepress-color-scheme","auto"),a=pe({get(){return e.value.darkMode?n.value==="auto"?t.value:n.value==="dark":!1},set(r){r===t.value?n.value="auto":n.value=r?"dark":"light"}});gt(li,a),xf(a)},xf=e=>{const t=(n=e.value)=>{const a=window==null?void 0:window.document.querySelector("html");a==null||a.classList.toggle("dark",n)};qe(()=>{Xe(e,t,{immediate:!0})}),Ba(()=>t())},ci=(...e)=>{const n=oa().resolve(...e),a=n.matched[n.matched.length-1];if(!(a==null?void 0:a.redirect))return n;const{redirect:r}=a,s=Q(r)?r(n):r,o=he(s)?{path:s}:s;return ci(Ke({hash:n.hash,query:n.query,params:n.params},o))},Sf=e=>{const t=ci(e);return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Er=null,Tn=null;const Ef={wait:()=>Er,pending:()=>{Er=new Promise(e=>Tn=e)},resolve:()=>{Tn==null||Tn(),Er=null,Tn=null}},kf=()=>Ef,di=Symbol("sidebarItems"),Mh=()=>{const e=_e(di);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Cf=()=>{const e=Cr(),t=su(),n=pe(()=>Tf(t.value,e.value));gt(di,n)},Tf=(e,t)=>{var n,a,r,s;const o=(a=(n=e.sidebar)!==null&&n!==void 0?n:t.sidebar)!==null&&a!==void 0?a:"auto",i=(s=(r=e.sidebarDepth)!==null&&r!==void 0?r:t.sidebarDepth)!==null&&s!==void 0?s:2;return e.home||o===!1?[]:o==="auto"?Af(i):G(o)?ui(o,i):Ko(o)?Pf(o,i):[]},Rf=(e,t)=>({text:e.title,link:`#${e.slug}`,children:kr(e.children,t)}),kr=(e,t)=>t>0?e.map(n=>Rf(n,t-1)):[],Af=e=>{const t=Yt();return[{text:t.value.title,children:kr(t.value.headers,e)}]},ui=(e,t)=>{const n=vr(),a=Yt(),r=s=>{var o;let i;if(he(s)?i=Sf(s):i=s,i.children)return An(Ke({},i),{children:i.children.map(l=>r(l))});if(i.link===n.path){const l=((o=a.value.headers[0])===null||o===void 0?void 0:o.level)===1?a.value.headers[0].children:a.value.headers;return An(Ke({},i),{children:kr(l,t)})}return i};return e.map(s=>r(s))},Pf=(e,t)=>{var n;const a=vr(),r=Vo(e,a.path),s=(n=e[r])!==null&&n!==void 0?n:[];return ui(s,t)},Cr=()=>Wu(),If={class:"sr-only"},Lf=Ne({setup(e){const t=Cr();return(n,a)=>(_t(),Va(Ze(_r),null,{default:ds(()=>[Nt("span",If,pa(Ze(t).openInNewWindow),1)]),_:1}))}});var Of=Gt(({app:e,router:t})=>{e.component("Badge",Yu),e.component("CodeGroup",Gu),e.component("CodeGroupItem",Zu),delete e._context.components.ExternalLinkIcon,e.component("ExternalLinkIcon",Lf),e.component("NavbarSearch",()=>{const a=e.component("Docsearch")||e.component("SearchBox");return a?le(a):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...a)=>(await kf().wait(),n(...a))});var Mf=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n};const Df={name:"CodeCopy",props:{parent:Object,code:String,options:{align:String,color:String,backgroundTransition:Boolean,backgroundTransitionColor:String,successText:String,successTextColor:String,staticIcon:Boolean}},data(){return{success:!1,originalBackground:null,originalTransition:null}},computed:{alignClass(){return this.options.align},iconClass(){return this.options.staticIcon?"":"hover"}},mounted(){this.originalTransition=this.parent.style.transition,this.originalBackground=this.parent.style.background},beforeDestroy(){this.parent.style.transition=this.originalTransition,this.parent.style.background=this.originalBackground},methods:{hexToRgb(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},copyToClipboard(e){if(navigator.clipboard)navigator.clipboard.writeText(this.code).then(()=>{this.setSuccessTransitions()},()=>{});else{let t=document.createElement("textarea");document.body.appendChild(t),t.value=this.code,t.select(),document.execCommand("Copy"),t.remove(),this.setSuccessTransitions()}},setSuccessTransitions(){if(clearTimeout(this.successTimeout),this.options.backgroundTransition){this.parent.style.transition="background 350ms";let e=this.options.backgroundTransitionColor;e=e.indexOf("#")!==-1?e:"#282c34";let t=this.hexToRgb(e);this.parent.style.background=`rgba(${t.r}, ${t.g}, ${t.b}, 0.7)`}this.success=!0,this.successTimeout=setTimeout(()=>{this.options.backgroundTransition&&(this.parent.style.background=this.originalBackground,this.parent.style.transition=this.originalTransition),this.success=!1},500)}}},Nf=e=>(bl("data-v-39936cf2"),e=e(),wl(),e),Hf={class:"code-copy"},Ff=Nf(()=>Nt("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1)),jf=["fill"];function zf(e,t,n,a,r,s){return _t(),Gn("div",Hf,[(_t(),Gn("svg",{onClick:t[0]||(t[0]=(...o)=>s.copyToClipboard&&s.copyToClipboard(...o)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:ft([s.iconClass,s.alignClass])},[Ff,Nt("path",{fill:n.options.color,d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"},null,8,jf)],2)),Nt("span",{class:ft([r.success?"success":"",s.alignClass]),style:Qt({color:n.options.successTextColor})},pa(n.options.successText),7)])}var fi=Mf(Df,[["render",zf],["__scopeId","data-v-39936cf2"]]),Bf=Gt(({app:e})=>{e.component("CodeCopy",fi)});const $f=({input:e,hotKeys:t})=>{const n=a=>{!e.value||t.value.length===0||a.target===document.body&&t.value.includes(a.key)&&(e.value.focus(),a.preventDefault())};qe(()=>{document.addEventListener("keydown",n)}),cn(()=>{document.removeEventListener("keydown",n)})},qf=[{title:"intro",headers:[],path:"/",pathLocale:"/",extraFields:[`
# Translating Stata to R

Welcome. This website is for Stata users who are interested in learning R. 
But it could also be useful for those going the other way around. We
provide side-by-side code snippets for common tasks in both Stata and R, so that
users have a dictionary for navigating across the two languages.

There are two main pages (\u270C\uFE0F\u{1F4C4}) on the site:

1. Data wrangling (\u{1F5C4}\u{1F9F9}) with [**data.table**](/data.table/)
2. Regression analysis (\u{1F4BB}\u{1F4C8}) with [**fixest**](/fixest/)

There are [**other great packages**](/extras/) that work well and are easy to
use, but **data.table** and **fixest** are blazingly fast (\u{1F3C3}\u{1F3FB}\u{1F4A8}) and highly
powerful (\u{1F4AA}\u{1F3FB}\u{1F60E}). Plus, they are flexible (\u{1F44C}\u2728) and can help you avoid R's
"package overload". Depending on what you do in Stata, you might even be able to
cut back, going from three packages\u2014**reghdfe**, **estout**, and **gtools**\u2014to
just two.

See the icons in the top right corner for various site options. You can search
for keywords or commands, change the theme to light or dark mode to suit your
preferences, and go to the underlying [GitHub
repo](https://github.com/stata2r/stata2r.github.io) where all the source code is
located. Please let us know if you have suggestions or spot any errors.`]},{title:"data.table",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Data I/O",slug:"data-i-o",children:[{level:3,title:"Read and write .csv",slug:"read-and-write-csv",children:[]},{level:3,title:"Read and write .dta",slug:"read-and-write-dta",children:[]},{level:3,title:"Read and write .parquet",slug:"read-and-write-parquet",children:[]}]},{level:2,title:"Order",slug:"order",children:[{level:3,title:"Sort rows",slug:"sort-rows",children:[]},{level:3,title:"Sort columns",slug:"sort-columns",children:[]},{level:3,title:"Rename columns",slug:"rename-columns",children:[]}]},{level:2,title:"Subset",slug:"subset",children:[{level:3,title:"Subset rows",slug:"subset-rows",children:[]},{level:3,title:"Subset columns",slug:"subset-columns",children:[]},{level:3,title:"Subset rows and columns",slug:"subset-rows-and-columns",children:[]},{level:3,title:"Drop duplicates",slug:"drop-duplicates",children:[]},{level:3,title:"Drop missing",slug:"drop-missing",children:[]}]},{level:2,title:"Modify",slug:"modify",children:[{level:3,title:"Create new variables",slug:"create-new-variables",children:[]},{level:3,title:"Create new variables within groups",slug:"create-new-variables-within-groups",children:[]},{level:3,title:"Work with dates",slug:"work-with-dates",children:[]},{level:3,title:"Modify existing variables",slug:"modify-existing-variables",children:[]},{level:3,title:"Using Booleans & control-flow",slug:"using-booleans-control-flow",children:[]},{level:3,title:"Row-wise calculations",slug:"row-wise-calculations",children:[]},{level:3,title:"Fill in Time Series/Panel Data",slug:"fill-in-time-series-panel-data",children:[]}]},{level:2,title:"Collapse",slug:"collapse",children:[{level:3,title:"Collapse with no grouping",slug:"collapse-with-no-grouping",children:[]},{level:3,title:"Collapse by group",slug:"collapse-by-group",children:[]},{level:3,title:"Count rows",slug:"count-rows",children:[]},{level:3,title:"Advanced collapse (tips and tricks)",slug:"advanced-collapse-tips-and-tricks",children:[]}]},{level:2,title:"Reshape",slug:"reshape",children:[{level:3,title:"Reshape prep (this dataset only)",slug:"reshape-prep-this-dataset-only",children:[]},{level:3,title:"Reshape long",slug:"reshape-long",children:[]},{level:3,title:"Reshape wide",slug:"reshape-wide",children:[]}]},{level:2,title:"Merge",slug:"merge",children:[{level:3,title:"Import and prep secondary dataset",slug:"import-and-prep-secondary-dataset",children:[]},{level:3,title:"Inner merge",slug:"inner-merge",children:[]},{level:3,title:"Full merge",slug:"full-merge",children:[]},{level:3,title:"Left merge",slug:"left-merge",children:[]},{level:3,title:"Right merge",slug:"right-merge",children:[]},{level:3,title:"Anti merge",slug:"anti-merge",children:[]},{level:3,title:"Appending data",slug:"appending-data",children:[]},{level:3,title:"Advanced merges (tips and tricks)",slug:"advanced-merges-tips-and-tricks",children:[]}]}],path:"/data.table/",pathLocale:"/",extraFields:[`
# Data wrangling with data.table

[**data.table**](https://rdatatable.gitlab.io/data.table) (by Matt Dowle, Arun
Srinivasan _et. al._) is a package written in C to make high-performance data 
wrangling tasks a breeze. Despite being incredibly powerful, it is dependency 
free and has a rock-solid API. **data.table** code reliably works decades apart.

## Installation

Before continuing, make sure that you have installed **data.table**. You only 
have to do this once (or as often as you want to update the package).

\`\`\`r
# Install from CRAN (recommended)
install.packages('data.table')

# Install the development version from GitHub (advanced)
# Requires Rtools and the remotes package
# remotes::install_github('Rdatatable/data.table')
\`\`\`

Once **data.table** is installed, don't forget to load it whenever you want to 
use it. Unlike Stata, you have to re-load a package every time you start a new R 
session.

\`\`\`r
# Load data.table into our current R session
library(data.table)
\`\`\`

All of the examples in this section will use real-life 2014 New York air traffic 
data. You can use the following commands to import the dataset into both Stata 
and R.

<div class='code--container'>
<div>

\`\`\`stata
import delimited using \\\\\\
    "https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv", clear
\`\`\`
</div>
<div>

\`\`\`r
# library(data.table) ## Don't forget to load the library
dat = fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')
\`\`\`
</div>
</div>

## Introduction

The [**data.table**](https://rdatatable.gitlab.io/data.table) package centers
around _data.tables_, which are highly efficient data frames that can be
manipulated using the package's concise syntax. For example, say we have a
data.table called \`dat\` (you can call it whatever you want). Then we can
manipulate it by putting arguments into its square brackets, i.e. \`dat[]\`. The
three main components of a **data.table** operation are \`i\`, \`j\`, and \`by\`,
which go in the order **\`dat[i, j, by]\`**. Note you don't have to specify the
latter two if you're not currently using them.

- **\`i\`**, the first component, selects the rows of the data.table that you'll be working with, like how in Stata the \`if\` or \`in\` command options let you refer to certain rows.
- **\`j\`**, the second component, both selects and operates on the columns of the data.table, like how in Stata the \`keep\` or \`drop\` commands select specific columns of your data, or how \`generate\` or \`replace\` create or modify columns in your data.
- **\`by\`**, the third component, gives the variable(s) designating groups that you'll be doing your calculations within, like how in Stata you can precede a command with \`bysort\`.

**data.table** uses these simple components very flexibly. The upshot is that 
you can perform complicated operations in a single line of concise **data.table** 
code, which may have required multiple commands in other languages or libraries 
to accomplish. But even if you aren't doing anything fancy, **data.table** has 
you covered with a stable set of functions that can be deployed on virtually 
any data wrangling task.

Like Stata, **data.table** also provides some special shortcut symbols for 
common operations. For example, \`_N\` in Stata is equivalent to \`.N\` in 
**data.table**, while \`.(x1, x2)\` is short for \`list(x1, x2)\`. We'll see more 
examples in cheatsheat that follows. But we do want to quickly highlight one 
special symbol in particular: **\`.SD\`** refers to the (**S**)ubset of (**D**)ata you're 
working with. This can be used to do complex within-group calculations when you 
have \`by\` specified. But more generally it's a way to perform operations on lots 
of columns with one line of code. By default, \`.SD\` refers to all columns in the
dataset (excepting those in \`by\`). But you can specify the columns you want with 
the \`.SDcols\` argument. Again, we'll see a bunch of examples below.

Finally, **data.table** is extremely fast. It has long set the standard for 
in-memory data wrangling [benchmarks](https://h2oai.github.io/db-benchmark) 
across a variety of libraries and languages. You will likely see an order(s) of 
magnitude performance difference as you compare the code chunks below. As a 
bonus for Stata users, who are used to operations changing a single dataset in 
memory, many **data.table** operations can be done _in-place_. This means that 
you don't have to (re)assign the result to a new **data.table**. In-place 
modifications are also very efficient, since they will only affect the parts 
you're actually changing, without wasting memory and time on the parts that 
aren't being changed. Any time in the below cheat sheet you see a function with 
the word \`set\` in it, or the \`:=\` operator, that's an in-place operation.

                     
## Data I/O

Like Stata's \`.dta\` file format, R has its own native \`.rds\` storage format.
(See also the [**fst**](http://www.fstpackage.org/) package.) However,
we generally recommend that users avoid native\u2014especially proprietary\u2014data types
since they hamper interoperability and reproducibility. We'll hence concentrate
on common open-source file types below. We'll make an exception for \`.dta\` given
our target audience, but we still recommend avoiding it if possible.

           
### Read and write .csv

<div class='code--container'>
<div>

\`\`\`stata
import delimited using "https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv", clear 
export delimited using "flightdata.csv", replace
\`\`\`
</div>
<div>

\`\`\`r
dat = fread('https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv')
fwrite(dat, 'flightdata.csv')
\`\`\`
</div>
</div>
           
### Read and write .dta

<div class='code--container'>
<div>

\`\`\`stata
* .dta is Stata's native (proprietary) filetype 
use "filename.dta", clear 


save "filename.dta", replace
\`\`\`
</div>
<div>

\`\`\`r
# These commands require the \`haven\` package 
dat = haven::read_dta('filename.dta') 
setDT(dat) # Or: dat = as.data.table(dat) 
 
haven::write_dta(dat, 'filename.dta')
\`\`\`
</div>
</div>
                     
### Read and write .parquet

<div class='code--container'>
<div>

\`\`\`stata
* Stata currently has limited support for parquet files 
* (and Linux/Unix only). 
* See: https://github.com/mcaceresb/stata-parquet
\`\`\`
</div>
<div>

\`\`\`r
# These commands require the \`arrow\` package 
pfiles = dir(pattern = ".parquet") 
rbindlist(lapply(pfiles, arrow::read_parquet)) 
rbindlist(lapply(pfiles, arrow::read_parquet, col_select=1:10))
\`\`\`
</div>
</div>
           
                     
## Order

           
### Sort rows

<div class='code--container'>
<div>

\`\`\`stata
sort air_time 
sort air_time dest 
gsort -air_time
\`\`\`
</div>
<div>

\`\`\`r
setorder(dat, air_time) 
setorder(dat, air_time, dest) 
setorder(dat, -air_time)
\`\`\`
</div>
</div>
           
### Sort columns

<div class='code--container'>
<div>

\`\`\`stata
order month day
\`\`\`
</div>
<div>

\`\`\`r
setcolorder(dat, c('month','day'))
\`\`\`
</div>
</div>
           
### Rename columns

<div class='code--container'>
<div>

\`\`\`stata
* rename (old) (new) 

rename arr_delay arrival_delay 
rename (carrier origin) (carrier_code origin_code) 
rename arr_* arrival_*
\`\`\`
</div>
<div>

\`\`\`r
# setnames(dat, old = ..., new = ...) 

setnames(dat, 'arr_delay', 'arrival_delay') 
setnames(dat, c('carrier','origin'), c('carrier_code','origin_code')) 
setnames(dat, gsub('arr_', 'arrival_', names(dat)))
\`\`\`
</div>
</div>
                     
                     
## Subset

In newer versions of Stata, it's possible to keep multiple datasets in memory,
or "frames" as Stata calls them. However, this still requires extra steps that
would be unusual to users of other languages. It's also not the typical way that
most peope use Stata. In contrast, keeping multiple datasets in memory is
extremely common in R. Moreover, subsetting and collapsing operations don't
overwrite your original dataset. The upshot is that you don't need to wrap 
everything in \`preserve/restore\`. However, it also means that you'll need to 
(re)assign your subsetted/collapsed data if you want to use it again later. E.g.
\`dat1 = dat[origin=='LGA']\`.

           
### Subset rows

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
keep in 1/200 
keep if day > 5 & day < 10
keep if inrange(day,5,10)
keep if origin == "LGA"
keep if regex(origin,"LGA") 
keep if inlist(month,3,4,11,12) 
keep if inlist(origin,"JFK","LGA") 
drop if month == 1
\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
dat[1:200] 
dat[day > 5 & day < 10] 
dat[between(day,5,10)] # Or: dat[day %in% 5:10] 
dat[origin=='LGA']
dat[origin %like% 'LGA'] 
dat[month %in% c(3,4,11,12)] 
dat[origin %chin% c("JFK","LGA")] # %chin% is a faster %in% for (ch)aracter strings 
dat[month!=1]
\`\`\`
</div>
</div>
           
### Subset columns

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the 
original dataset in the examples that follow._

\`\`\`stata
keep month day carrier


\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
dat[, .(month, day, carrier)] 
dat[, list(month, day, carrier)]    # another option
dat[, c('month', 'day', 'carrier')] # and another
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
keep year-arr_delay
keep *_delay 
\`\`\`
</div>
<div>

\`\`\`r
dat[, year:arr_delay] 
dat[, .SD, .SDcols=patterns('*_delay')]
\`\`\`
</div>
</div>


<div class='code--container'>
<div>

\`\`\`stata
drop origin dest 


ds, has(type string) 
drop \`r(varlist)' 

ds, has(type int) 
keep \`r(varlist)'
\`\`\`
</div>
<div>

\`\`\`r
dat[, -c('origin', 'dest')]
dat[, c('origin', 'dest') := NULL] # same, but in-place 

# Matches the two lines on the left:
dat[, .SD, .SDcols=!is.character] 

# Matches the two lines on the left: 
dat[, .SD, .SDcols=is.integer]
\`\`\`
</div>
</div>
           
          
### Subset rows and columns

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
keep if origin == "LGA"
keep month day carrier
\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
# Matches the two lines on the left:
dat[origin=="LGA", .(month, day, carrier)]
\`\`\`
</div>
</div>
           
### Drop duplicates

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
duplicates drop
duplicates drop month day carrier, force
\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
unique(dat) 
unique(dat, by = c('month', 'day', 'carrier'))
\`\`\`
</div>
</div>
           
### Drop missing

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
keep if !missing(dest)

* Requires: ssc inst missings
missings dropvars, force 
missings air_time dest, force 

\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
dat[!is.na(dest)]


na.omit(dat) 
na.omit(dat, cols = c('air_time', 'dest')) 
# dat[!is.na(air_time) & !is.na(dest)] # same
\`\`\`
</div>
</div>
                     
                     
## Modify

### Create new variables

<div class='code--container'>
<div>

\`\`\`stata
gen dist_sq = distance^2 
gen tot_delay = dep_delay + arr_delay 
gen first_letter = substr(origin, 1,1) 
gen flight_path = origin + '_' + dest 
\`\`\`
</div>
<div>

\`\`\`r
dat[, dist_sq := distance^2] 
dat[, tot_delay := dep_delay + arr_delay] 
dat[, first_letter := substr(origin,1,1)] 
dat[, flight_path := paste(origin, dest, sep='_')] 
\`\`\`
</div>
</div>

Here are some **data.table** modifying operations that don't have direct Stata 
equivalents (although you could implement a loop).

\`\`\`r
# Multiple variables can be created at once. These next few lines all do the 
# same thing. Just pick your favourite. 

dat[, c('dist_sq', 'dist_cu') := .(distance^2, distance^3)] 
dat[, ':=' (dist_sq=distance^2, dist_cu=distance^3)]        # "functional" equivalent 
dat[, let(dist_sq=distance^2, dist_cu=distance^3)]          # dev version only

# We can also chain back-to-back with "dat[...][...]" (this holds for any 
# data.table operation) 

dat[, dist_sq := distance^2][
    , dist_cu := distance*dist_sq]
\`\`\`


### Create new variables within groups

**Aside:** In R, any missing (i.e. "NA") values will propagate during
aggregating functions. If you have \`NA\` values in your real-life dataset\u2014we
don't in this example dataset\u2014you probably want to add \`na.rm=TRUE\` to remove
these on the fly. E.g. \`mean(var1, na.rm=TRUE)\` or 
\`lapply(.SD, mean, na.rm=TRUE)\`.

<div class='code--container'>
<div>

\`\`\`stata
bysort origin: egen mean_dep_delay = mean(dep_delay) 
bysort origin dest: egen mean_dep_delay2 = mean(dep_delay) 
\`\`\`
</div>
<div>

\`\`\`r
dat[, mean_dep_delay := mean(dep_delay), by=origin] 
dat[, mean_dep_delay2 := mean(dep_delay), by=.(origin,dest)] 
\`\`\`
</div>
</div>

Some shortcut symbols.

<div class='code--container'>
<div>

\`\`\`stata
bysort carrier: g rows_per_carrier = _N 
bysort carrier: g index_within_carrier = _n 
egen origin_index = group(origin)
\`\`\`
</div>
<div>

\`\`\`r
dat[, rows_per_carrier := .N, by = carrier] 
dat[, index_within_carrier := .I, by = carrier] 
dat[, origin_index := .GRP, by = origin]
\`\`\`
</div>
</div>
  
Multiple grouped variables (manual demean example).

<div class='code--container'>
<div>

\`\`\`stata
foreach x of varlist dep_delay arr_delay air_time {
    egen mean_\`x'=mean(\`x'), by(origin) 
    gen \`x'_dm = \`x\` - mean_\`x' 
    drop mean* 
}




\`\`\`
</div>
<div>

\`\`\`r
dmcols = c('dep_delay', 'arr_delay', 'air_time') 
dat[,
    paste0(dmcols,'_dm') := lapply(.SD, \\(x) x-mean(x)),
    .SDcols = dmcols,
    by = origin] 

# Note: \`\\(x)\` is a shorthand for \`function(x)\`, introduced 
# in R 4.1.1. You'll need to use the latter if you're still 
# on an older version of R.
\`\`\`
</div>
</div>

Refer to other rows (uses generic data set)

<div class='code--container'>
<div>

\`\`\`stata
sort group time
by group: gen growth = X/X[_n-1]
by group: gen growth_since_first = X/X[1]
\`\`\`
</div>
<div>

\`\`\`r
setorder(dat, group, time)
dat[, growth := X/shift(X, 1), by = group]
dat[, growth_since_first := X/first(X), by = group]
\`\`\`
</div>
</div>

### Work with dates

<div class='code--container'>
<div>

\`\`\`stata
* Make a date variable
tostring year month day, replace
gen day_string = year + "/" + month + "/" + day
gen date = date(day_string, "YMD")
format date %td

* Pull out year (quarter, month, etc. work too)
gen the_year = year(date)

* Shift forward 7 days
replace date = date + 7
\`\`\`
</div>
<div>

\`\`\`r
# Make a date variable
dat[, date := as.IDate(paste(year, month, day, sep='-'))] 




# Pull out year (quarter, month, etc. work too)
dat[, the_year := year(date)]

# Shift forward 7 days
dat[, date := date + 7]
\`\`\`
</div>
</div>
           
### Modify existing variables

**Aside:** We don't normally use a gen -> replace workflow in R, the way we do in 
Stata. See the [Using Booleans & control-flow](#using-booleans-control-flow) 
section below for a more idiomatic approach.

<div class='code--container'>
<div>

\`\`\`stata
replace tot_delay = dep_delay + arr_delay 

* Conditional modification 
replace distance = distance + 1 if month==9
replace distance = 0 in 1 

* Modify multiple variables (same function) 
foreach x of varlist origin dest {
    replace \`x' = \`x' + " Airport"
}
\`\`\`
</div>
<div>

\`\`\`r
dat[, tot_delay := dep_delay + arr_delay] 

# Conditional modification 
dat[month==9, distance := distance + 1]
dat[1, distance := 0]

# Modify multiple variables (same function) 
cols = c('origin','dest')
dat[, (cols) := lapply(.SD, \\(x) paste(x,'Airport')), 
    .SDcols = cols] 
\`\`\`
</div>
</div>
           
### Using Booleans & control-flow

<div class='code--container'>
<div>

\`\`\`stata
gen long_flight = air_time>500 & !missing(air_time) 

gen flight_length = "Long" if air_time>500 & !missing(air_time)
replace flight_length = "Short" if missing(flight_length) & !missing(air_time) 


gen flight_length2 = "Long" if !missing(air_time) 
replace flight_length2 = "Med" if air_time<=500  
replace flight_length2 = "Short" if air_time<=120
\`\`\`
</div>
<div>

\`\`\`r
dat[, long_flight := air_time>500] 

dat[, flight_length := fifelse(air_time>500, 'Long', 'Short')] 
# fifelse is like base-R ifelse, but (f)aster! 

# for nested ifelse, easier to use fcase 
dat[, flight_length2 := fcase(air_time<=120, 'Short', 
                              air_time<=500, 'Med', 
                              default = 'Long')]
\`\`\`
</div>
</div>
           
### Row-wise calculations

<div class='code--container'>
<div>

\`\`\`stata
* Pre-packaged row calculations: 
egen tot_delay = rowtotal(*_delay)
egen any_delay = rowfirst(*_delay)

* Custom row calculations:
* ?

\`\`\`
</div>
<div>

\`\`\`r
# Pre-packaged row calculations: 
dat[, tot_delay := rowSums(.SD), .SDcols=patterns('*_delay')]
dat[, any_delay := fcoalesce(.SD), .SDcols=patterns('*_delay')] 

# Custom row calculations: 
dat[, new_var := mapply(custom_func, var1, var2)] 
dat[, new_var := custom_func(var1, var2), by=.I] # dev version only
\`\`\`
</div>
</div>
           
### Fill in Time Series/Panel Data

<div class='code--container'>
<div>

\`\`\`stata
* Carry forward the last-known observation
sort id time
by id: replace x = x[_n-1] if missing(x)

* Carry back the next-known observation
gsort id -time
by id: replace x = x[_n-1] if missing(x)
\`\`\`
</div>
<div>

\`\`\`r
# Carry forward the last-known observation
setorder(dat, id, time)
dat[, x := nafill(x, type = 'locf'), by = id]

# Carry back the next-known observation
dat[, x := nafill(x, type = 'nocb'), by = id]

\`\`\`
</div>
</div>
                     
                     
## Collapse

In newer versions of Stata, it's possible to keep multiple datasets in memory,
or "frames" as Stata calls them. However, this still requires extra steps that
would be unusual to users of other languages. It's also not the typical way that
most peope use Stata. In contrast, keeping multiple datasets in memory is
extremely common in R. Moreover, subsetting and collapsing operations don't
overwrite your original dataset. The upshot is that you don't need to wrap 
everything in \`preserve/restore\`. However, it also means that you'll need to 
(re)assign your subsetted/collapsed data if you want to use it again later. E.g.
\`dat1 = dat[, mean(var1)]\`. Finally, remember our earlier note about aggregating
functions on columns that have missing values: Use \`na.rm=TRUE\` to remove these
on the fly. E.g. \`dat[, mean(var1, na.rm=TRUE)]\`.

           
### Collapse with no grouping

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
collapse (mean) dep_delay 
\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
dat[, mean(dep_delay)] # returns a scalar
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) mean_ddel = dep_delay 
\`\`\`
</div>
<div>

\`\`\`r
dat[, .(mean_ddel = mean(dep_delay))] # returns a data.table
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) mean_ddel=dep_delay mean_adel=arr_delay 
\`\`\`
</div>
<div>

\`\`\`r
# These lines all do the same thing. Just pick your favourite.
dat[, .(mean_ddel=mean(dep_delay), mean_adel=mean(arr_delay))]
dat[, lapply(.SD, mean), .SDcols=c('arr_delay','dep_delay')]
dat[, lapply(.SD, mean), .SDcols=arr_delay:dep_delay]
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) *delay 
\`\`\`
</div>
<div>

\`\`\`r
dat[, lapply(.SD, mean), .SDcols=patterns('delay')] 
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
ds, has(type long)
collapse (mean) \`r(varlist)'
\`\`\`
</div>
<div>

\`\`\`r
 # Matches the two lines on the left
dat[, lapply(.SD, mean), .SDcols=is.numeric]
\`\`\`
</div>
</div>

### Collapse by group

<div class='code--container'>
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) arr_delay, by(carrier) 
* collapse (mean) V1 = arr_delay, by(carrier)
\`\`\`
</div>
<div>

\`\`\`r
dat[, .(arr_delay = mean(arr_delay)), by=carrier] 
# dat[, mean(arr_delay), by=carrier] 
\`\`\`
</div>
</div>


<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) arr_delay, by(carrier month) 
\`\`\`
</div>
<div>

\`\`\`r
dat[, .(arr_delay = mean(arr_delay)), by=.(carrier, month)] 
\`\`\`
</div>
</div>


<div class='code--container'>
<div>

\`\`\`stata
collapse (min) min_d=distance (max) max_d=distance, by(origin) 
\`\`\`
</div>
<div>

\`\`\`r
dat[, .(min_d=min(distance), max_d=max(distance)), by=origin] 
\`\`\`
</div>
</div>


<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) *_delay, by(origin) 
\`\`\`
</div>
<div>

\`\`\`r
dat[, lapply(.SD, mean), .SDcols=patterns('_delay'), by=origin] 
\`\`\`
</div>
</div>


<div class='code--container'>
<div>

\`\`\`stata
ds, has(type long)
collapse (mean) \`r(varlist)', by(origin) 
\`\`\`
</div>
<div>

\`\`\`r
# matches the two lines on the left
dat[, lapply(.SD, mean), .SDcols=is.numeric, by=origin] 
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) dep_delay arr_delay air_time distance, by(origin) 
\`\`\`
</div>
<div>

\`\`\`r
dat[, lapply(.SD, mean), .SDcols=c('dep_delay','arr_delay','air_time','distance'), by=origin] 
#dat[, lapply(.SD, mean), .SDcols = c(4,5,9,10), by=origin] # same 
\`\`\`
</div>
</div>

<div class='code--container'>
<div>

\`\`\`stata
egen unique_dest = tag(dest origin) 
collapse (sum) unique_dest, by(origin)
\`\`\`
</div>
<div>

\`\`\`r
# Matches the final two lines on the left: 
dat[, .(unique_dest = uniqueN(dest)), by = origin]
\`\`\`
</div>
</div>

### Count rows

<div class='code--container'>
<div>

\`\`\`stata
count
count if month==10

* Count rows by group:
tabulate origin
\`\`\`
</div>
<div>

\`\`\`r
dat[, .N] # Or: nrow(dat) 
dat[month==10, .N] # Or: nrow(dat[month==10]

# Count rows by group:
dat[, .N, by = origin]
\`\`\`
</div>
</div>

### Advanced collapse (tips and tricks)

These next few examples are meant to highlight some specific **data.table**
collapse tricks. They don't really have good Stata equivalents (that we're aware
of).


#### Use keys for even faster grouped operations

The **data.table** website 
[describes](https://rdatatable.gitlab.io/data.table/articles/datatable-keys-fast-subset.html)
keys as "supercharged rownames". Essentially, _setting a key_ means ordering 
your data in a way that makes it very efficient to do subsetting or aggregating 
operations. **data.table** is already highly performant, but setting keys can 
give a valuable speed boost for big data tasks.

\`\`\`r
## Set keys. You normally want whatever you're grouping by
setkey(dat, month, origin)

## Same collapse syntax as before, just faster
dat[, mean(dep_delay), by = .(month, origin)]

## Tip: Turn on automatic printing of keys. The dev version
## of data.table (v1.14.3) does this by default.
options(datatable.print.class = TRUE, datatable.print.keys = TRUE)
dat

## Turn keys back off
setkey(dat, NULL)
\`\`\`

#### Grouped calculations and complex objects inside a data.table

**data.table** supports list columns, so you can have complex objects like
regression models inside a data.table. Among many other things, this means you
can nest simulations inside a data.table as easily as you would perform any
other (grouped) operation. Here we illustrate with a simple grouped regression,
i.e. a separate regression for each month of our dataset.

\`\`\`r 
# Let's run a separate regression of arrival delay on 
# departure delay for each month _inside_ our data.table

# Just get the coefficients
dat[,
    .(beta = coef(lm(arr_delay ~ dep_delay, .SD))['dep_delay']),
    by = month]

# As above, but now keep the whole model for each month
# in a dedicated "mod" column
mods = dat[,
           .(mod = list(lm(arr_delay ~ dep_delay, .SD))),
           by = month] 

# Now you can do things like put all 10 models in a 
# regression table or coefficient plot. Here we use the
# modelsummary package to do that.
modelsummary::msummary(mods$mod) 
modelsummary::modelplot(mods$mod, coef_omit = 'Inter')
\`\`\`
                     
#### Grouped aggregations when reshaping

You can do complicated (grouped) aggregations as part of a \`data.table::dcast()\`
(i.e. reshape wide) call. Here's an example where we summarise both the
departure and arrival delays\u2014getting the minimum, mean, and maximum
values\u2014by origin airport.

\`\`\`r
dcast(dat, origin~., fun = list(min, mean, max),
      value.var = c('dep_delay', 'arr_delay'))
\`\`\`


## Reshape

### Reshape prep (this dataset only)

_Note: We need to do a bit of prep to our air-traffic dataset to better
demonstrate the reshape examples in this section. You probably don't need to do
this for your own dataset._

<div class='code--container'>
<div>

\`\`\`stata
* We'll generate row IDs to avoid the (reshape) ambiguity 
* of repeated entries per date 
gen id = _n 

* For the Stata reshape, it's also going to prove 
* convenient to rename the delay vars. 
rename (dep_delay arr_delay) (delay_dep delay_arr)
\`\`\`
</div>
<div>

\`\`\`r
# We'll generate row IDs to avoid the (reshape) ambiguity 
# of repeated entries per date 
dat[, id := .I] 
\`\`\`
</div>
</div>
           
### Reshape long

<div class='code--container'>
<div>

\`\`\`stata
reshape long delay_, i(id) j(delay_type) s
\`\`\`
</div>
<div>

\`\`\`r
ldat = melt(dat, measure=patterns('_delay'))

# Aside: you can also choose different names for your
# new reshaped columns if you'd like, e.g. 
melt(dat, measure=patterns('_delay'), variable='d_type')
\`\`\`
</div>
</div>
           
### Reshape wide

<div class='code--container'>
<div>

\`\`\`stata
* This starts with the reshaped-long data from above
reshape wide delay_, i(id) j(delay_type) s
\`\`\`
</div>
<div>

\`\`\`r
# This starts with the reshaped-long data from above
wdat = dcast(ldat, ... ~ variable)

# Aside 1: If you only want to keep the id & *_delay cols
dcast(ldat, id ~ variable)

# Aside 2: It's also possible to perform complex and 
# powerful data aggregating tasks as part of the dcast 
# (i.e. reshape wide) call.
dcast(dat, origin~., fun=list(min,mean,max),
      value.var=c('dep_delay','arr_delay'))
\`\`\`
</div>
</div>
                     
                     
## Merge

### Import and prep secondary dataset

**Note:** Our secondary dataset for demonstrating the merges in this section
will be one on airport characteristics.

<div class='code--container'>
<div>

\`\`\`stata
import delimited using "https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv", clear
* Stata requires that merge ID variables have the same 
* name across datasets. 
rename faa dest 
save dat2.dta, replace
import delimited using "https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv", clear
\`\`\`
</div>
<div>

\`\`\`r
dat2 = fread("https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv") 
# R _doesn't_ require that merge ID variables share the 
# same name across datasets. But we'll add this anyway.
dat2[, dest := faa]
\`\`\`
</div>
</div>
           
### Inner merge

_Only keep the matched rows across both datasets._

<div class='code--container'>
<div>

\`\`\`stata
merge m:1 dest using dat2.dta, keep(3) nogen
\`\`\`
</div>
<div>

\`\`\`r
mdat = merge(dat, dat2, by='dest') 
\`\`\`
</div>
</div>
           
### Full merge

_Keep all rows of both datasets, regardless of whether matched._

<div class='code--container'>
<div>

\`\`\`stata
merge m:1 dest using dat2.dta, nogen
\`\`\`
</div>
<div>

\`\`\`r
mdat = merge(dat, dat2, by='dest', all=TRUE)
\`\`\`
</div>
</div>
           
### Left merge

_Keep all rows from the "main" dataset._

<div class='code--container'>
<div>

\`\`\`stata
merge m:1 dest using dat2.dta, keep(1 3) nogen
\`\`\`
</div>
<div>

\`\`\`r
mdat = merge(dat, dat2, by='dest', all.x=TRUE)
\`\`\`
</div>
</div>
           
### Right merge

_Keep all rows from the "secondary" dataset._

<div class='code--container'>
<div>

\`\`\`stata
merge m:1 dest using dat2.dta, keep(2 3) nogen
\`\`\`
</div>
<div>

\`\`\`r
mdat = merge(dat, dat2, by='dest', all.y=TRUE)
\`\`\`
</div>
</div>
           
### Anti merge

_Keep non-matched rows only._

<div class='code--container'>
<div>

\`\`\`stata
merge m:1 dest using dat2.dta, keep(1 2) nogen
\`\`\`
</div>
<div>

\`\`\`r
mdat = dat[!dat2, on='dest']
\`\`\`
</div>
</div>

### Appending data

<div class='code--container'>
<div>

\`\`\`stata
* This just appends the flights data to itself
save data_to_append.dta, replace
append using data_to_append.dta
\`\`\`
</div>
<div>

\`\`\`r
# This just appends the flights data to itself
rbindlist(list(dat, dat)) # Or rbind(dat, dat)
# The fill = TRUE option is handy if the one data set has columns the other doesn't
\`\`\`
</div>
</div>

### Advanced merges (tips and tricks)

These next few examples are meant to highlight some specific **data.table**
merge tricks. They don't really have good Stata equivalents (that we're aware
of).

#### Merge on different ID names 

<div class='code--container grid-cols-1'>
<div>

\`\`\`r
mdat = merge(dat, dat2, by.x='dest', by.y='faa') 
\`\`\`
</div>
</div>

#### Set keys for even faster merges and syntax shortcuts 

<div class='code--container grid-cols-1'>
<div>

\`\`\`r
setkey(dat, dest); setkey(dat2, dest) 
mdat = merge(dat, dat2) ## note: don't need 'by' 
\`\`\`
</div>
</div>

#### Non-equi joins

Non-equi joins are a bit hard to understand if you've never seen them before.
But they are incredibly powerful and solve a surprisingly common problem:
Merging datasets over a range (e.g. start to end dates), rather than exact
matches. Here's a simple example where we want to subset the 1st quarter flights
for American Airlines and the 2nd quarter flights for United Airlines:

<div class='code--container grid-cols-1'>
<div>

\`\`\`r
# The things we want to match on. Note the different start and
# end months for AA and UA.
dat3 = data.table(carrier     = c('AA', 'UA'),
                  start_month = c(1, 4),
                  end_month   = c(3, 6)) 

# Rolling join that catches everything between the distinct
# start and end dates for each carrier.
dat[dat3, on = .(carrier,
                 month >= start_month,
                 month <= end_month)] 
\`\`\`
</div>
</div>

#### Rolling Joins

Rolling joins are similar and allow you to match a set of dates forwards or
backwards. For example, our \`dat\`  dataset ends in October. Let's say we want to
carry the last known entries for American and United Airlines  forward to
(random) future dates.

<div class='code--container grid-cols-1'>
<div>

\`\`\`r
# Make sure we have a date variable
dat[, date := as.IDate(paste(year, month, day, sep='-'))] 

# New DT with the (random) target dates
dat4 = data.table(carrier  = c('AA', 'UA'),
                  new_date = as.IDate(c('2014-11-01', '2014-11-15'))) 

# Join on these target dates, so they take the last known value 
dat[dat4, on = .(carrier, date=new_date), roll='nearest']
\`\`\`
</div>
</div>
`]},{title:"extras",headers:[{level:2,title:"ggplot2",slug:"ggplot2",children:[]},{level:2,title:"tidyverse",slug:"tidyverse",children:[]},{level:2,title:"collapse",slug:"collapse",children:[]},{level:2,title:"sandwich",slug:"sandwich",children:[]},{level:2,title:"modelsummary",slug:"modelsummary",children:[]},{level:2,title:"lme4",slug:"lme4",children:[]},{level:2,title:"marginaleffects",slug:"marginaleffects",children:[]},{level:2,title:"multcomp / nlWaldTest",slug:"multcomp-nlwaldtest",children:[]},{level:2,title:"sf",slug:"sf",children:[]}],path:"/extras/",pathLocale:"/",extraFields:[`
# Other Packages

While we think you can get really far in R with just **data.table** and 
**fixest**, of course these two packages don't cover everything.

This page covers a small list of packages you may find especially useful when 
getting started with R. We won't try to cover everything under the sun here. 
Just a few places to get going. For the rest, well, that's what StackOverflow
or your favourite search engine is for.

All of the below packages have far more applications than is shown here. We'll 
just provide one or two examples of how each can be used. Finally, don't forget 
to install them with \`install.packages('PKGNAME')\` and load them with 
\`library(PKGNAME)\`. The former command you only have to run once per package (or 
as often as you want to update it); the latter whenever you want to use a 
package in a new R session.

## ggplot2

_Beautiful and customizable plots_

[**ggplot2**](https://ggplot2.tidyverse.org/) is widely considered one of the 
preeminent plotting libraries available in any language. It provides an 
intuitive syntax that applies in the same way across many, many different kinds 
of visualizations, and with a deep level of customization. Plus, endless 
additional plugins to do what you want, including easy interactivity, animation, 
maps, etc. We thought about giving **ggplot2** its own dedicated page like 
**data.table** and **fixest**. But instead we'll point you to the 
[Figures](https://lost-stats.github.io/Presentation/Figures/Figures.html) 
section of the _Library of Statistical Techniques_, which already shows how to 
do many different graphing tasks in both Stata and **ggplot2**. For a more 
in-depth overview you can always consult the excellent 
[package documentation](https://ggplot2.tidyverse.org/), or Kieran Healy's 
wonderful [_Data Visualization_](https://socviz.co/) book.

#### Basic scatterplot(s)

<div class="code--container">
<div>

\`\`\`stata
twoway scatter yvar xvar

twoway (scatter yvar xvar if group == 1, mc(blue)) \\\\\\
        (scatter yvar xvar if group == 2, mc(red))
\`\`\`
</div>
<div>

\`\`\`r
ggplot(dat, aes(x = xvar, y = yvar)) + geom_point()

ggplot(dat, aes(x = xvar, y = yvar, color = group)) + 
  geom_point()
\`\`\`
</div>
</div>


## tidyverse

_A family of data science tools_

The [**tidyverse**](https://www.tidyverse.org/) provides an extremely popular
framework for data science tasks in R. This meta-package is actually a
collection of smaller packages that are all designed to work together, based on
a shared philosophy and syntax. We've already covered **ggplot2** above, but
there are plenty more. These include **dplyr** and **tidyr**, which offer an
alternative syntax and approach to data wrangling tasks. While we personally
recommend **data.table**, these **tidyverse** packages have many ardent fans
too. You may find that you prefer their modular design and verbal syntax. But
don't feel bound either way: it's totally fine to combine them. Some other
**tidyverse** packages worth knowing about include **purrr**, which contains a suite
of functions for automating and looping your work, **lubridate** which makes
working with date-based data easy, and **stringr** which offers functions with
straightforward syntax for working with string variables.

#### Data wrangling with dplyr

_Note: **dplyr** doesn't modify data in place. So you'll need to (re)assign if you want to keep your changes. E.g. \`dat = dat %>% group_by...\`_

<div class="code--container">
<div>

\`\`\`stata
* Subset by rows and then columns
keep if var1=="value"
keep var1 var2 var3
* Create a new variable by group
bysort group1: egen mean_var1 = mean(var1)
* Collapse by group
collapse (mean) arr_delay, by(carrier)
\`\`\`
</div>
<div>

\`\`\`r
# Subset by rows and then columns
dat %>%   # \`%>%\` is the tidyverse "pipe" operator
   filter(var1=="value") %>%
   select(var1, var2, var3)
# Create a new variable by group
dat %>%
  group_by(group1) %>%
  mutate(mean_var1 = mean(var1))
# Collapse by group
dat %>%
  group_by(group1) %>%
  summarise(mean_var1 = mean(var1))
\`\`\`
</div>
</div>

#### Manipulating dates with lubridate

<div class="code--container">
<div>

\`\`\`stata
* Shift a date forward one month (not 30 days, one month)
* ???
\`\`\`
</div>
<div>

\`\`\`r
# Shift a date forward one month (not 30 days, one month)
shifted_date = date + months(1)
\`\`\`
</div>
</div>

#### Iterating with purrr 

<div class="code--container">
<div>

\`\`\`stata
* Read in many files and append them together
local filelist: dir "Data/" files "*.dta"
local firsttime = 1
foreach f in filelist {
    use \`f', clear
    if \`firsttime' == 0 {
        append using compiled_data.dta
    }
    save compiled_data.dta, replace
}
\`\`\`
</div>
<div>

\`\`\`r
# Read in many files and append them together
# (this combines purrr with the data.table function fread)
filelist = list.files('Data/', pattern = '.csv')
dat = filelist %>%
    map_df(fread)
\`\`\`
</div>
</div>

#### String operations with stringr 

<div class="code--container">
<div>

\`\`\`stata
subinstr(string, "remove", "replace", .)
substr(string, start, length)
regex(string, "regex")
\`\`\`
</div>
<div>

\`\`\`r
str_replace_all(string, "remove", "replace")
str_sub(string, start, end)
str_detect(string, "regex")
# Note all the stringr functions accept regex input
\`\`\`
</div>
</div>

  

## collapse

_Extra convenience functions and super fast aggregations_

Sure, we've gone on and on about how fast **data.table** is compared to just
about everything else. But there is another R package that can boast even faster
computation times for certain grouped calculations and transformations, and
that's 
[collapse](https://sebkrantz.github.io/collapse/index.html). 
The **collapse** package doesn't try to do everything that **data.table** does. 
But the two 
[play very well together](https://sebkrantz.github.io/collapse/articles/collapse_and_data.table.html) 
and the former offers some convenience functions like \`descr\` and \`collap\`,
which essentially mimic the equivalent functions in Stata and might be
particularly appealing to readers of this guide. (P.S. If you'd like to load
**data.table** and **collapse** at the same time, plus some other 
high-performance packages, check out the 
[**fastverse**](https://sebkrantz.github.io/fastverse/index.html).)



#### Quick Summaries

<div class='code--container'>
<div>

\`\`\`stata
summarize
describe
\`\`\`
</div>
<div>

\`\`\`r
qsu(dat)
descr(dat)
\`\`\`
</div>
</div>

#### Multiple grouped aggregations

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) var1, by(group1)
collapse (min) min_var1=var1 min_var2=var2 (max) max_var1=var1 max_var2=var2, by(group1 group2)
\`\`\`
</div>
<div>

\`\`\`r
collap(dat, var1 ~ group1, fmean) # 'fmean' => fast mean
collap(dat, var1 + var2 ~ group1 + group2, FUN = list(fmin, fmax))
\`\`\`
</div>
</div>

                     
## sandwich

_More standard error adjustments_

**fixest** package comes with plenty of shortcuts for accessing standard error
adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West,
Driscoll-Kraay, clustered standard errors, etc. But of course there are still
more than that. A host of additional options are covered by the
[**sandwich**](https://sandwich.r-forge.r-project.org/) package, which comes
with a long list of functions like \`vcovBS()\` for bootstrapped standard errors,
or \`vcovHC()\` for HC1-5. **sandwich** supports nearly every model class in R, so
it shouldn't surprise that these can slot right into \`fixest\` estimates, too. 
You shouldn't be using those \`, robust\` errors for smaller samples anyway... but 
you [knew that](http://datacolada.org/99), right?

#### Linear Model Adjustments

<div class='code--container'>
<div>

\`\`\`stata
* ", robust" uses hc1 which isn't great for small samples
regress Y X Z, vce(hc3)
\`\`\`
</div>
<div>

\`\`\`r
# sandwich's vcovHC uses HC3 by default
feols(Y ~ X + Z, dat, vcov = sandwich::vcovHC) 

# Aside: Remember that you can also adjust the SEs 
# for existing models on the fly 
m = feols(Y ~ X + Z, dat) 
summary(m, vcov = sandwich::vcovHC)
\`\`\`
</div>
</div>


## modelsummary

_Summary tables, regression tables, and more_

The **fixest** package already has the \`etable()\` function for generating
regression tables. However, it is only really intended to work with models from
the same package. So we also recommend checking out the fantastic
[**modelsummary**](https://vincentarelbundock.github.io/modelsummary) package.
It works with all sorts of model objects, including those not from **fixest**,
is incredibly customizable, and outputs to a bunch of different formats (PDF,
HTML, DOCX, etc.) Similarly, **modelsummary** has a wealth of options for
producing publication-ready summary tables. Oh, and it produces coefficient
plots too. Check out the [package
website](https://vincentarelbundock.github.io/modelsummary/) for more.


#### Summary tables

<div class='code--container'>
<div>

\`\`\`stata
* Summary stats table 
estpost summarize 
esttab, cells("count mean sd min max") nomtitle nonumber 

* Balance table 
by treat_var: eststo: estpost summarize 
esttab, cells("mean sd") label nodepvar
\`\`\`
</div>
<div>

\`\`\`r
# Summary stats table 
datasummary_skim(dat) 


# Balance table 
datasummary_balance(~treat_var, dat)
\`\`\`
</div>
</div>


#### Regression tables

**Aside:** Here we'll use the base R \`lm()\` (linear model) function, rather than
\`feols()\`, to emphasize that **modelsummary** works with many different model 
classes.

<div class='code--container'>
<div>

\`\`\`stata
reg Y X Z 
eststo est1 
esttab est1b

reg Y X Z, vce(hc3) 
eststo est1b 
esttab est1b 

esttab est1 est1b

reg Y X Z A, vce(hc3)
eststo est2
esttab est1 est1b est2
\`\`\`
</div>
<div>

\`\`\`r
est1 = lm(Y ~ X + Z, dat) 
msummary(est1) # msummary() = alias for modelsummary()

# Like fixest::etable(), SEs for existing models can
# be adjusted on-the-fly 
msummary(est1, vcov='hc3')

# Multiple SEs for the same model
msummary(est1, vcov=list('iid', 'hc3')) 

est3 = lm(Y ~ X + Z + A, dat) 
msummary(list(est1, est1, est3),
         vcov = list('iid', 'hc3', 'hc3'))
\`\`\`
</div>
</div>


## lme4

_Random effects and mixed models_

**fixest** can do a lot, but it can't do everything. This site isn't even going
to attempt to go into how to translate every single model into R. But we'll
quick highlight random-effects and mixed models. The
[**lme4**](https://cran.r-project.org/web/packages/lme4/index.html) and its
\`lmer()\` function covers not just random-intercept models but also hierarchical
models where slope coefficients follow random distributions. (**Aside:** If you
prefer Bayesian models for this kind of thing, check out 
[**brms**](https://paul-buerkner.github.io/brms/).)

           
#### Random effects and mixed models

<div class='code--container'>
<div>

\`\`\`stata
xtset group time
xtreg Y X, re
mixed lifeexp || countryn: gdppercap
\`\`\`
</div>
<div>

\`\`\`r
# No need for an xtset equivalent
m = lmer(Y~(1|group) + X, data = dat)
nm = lmer(Y~(1+x|group) + X, data = dat)
\`\`\`
</div>
</div>



## marginaleffects

_Marginal effects, constrasts, etc._

 
The Stata \`margins\` command is great. To replicate it in R, we highly recommend
the [**marginaleffects**](https://vincentarelbundock.github.io/marginaleffects/)
package. Individual marginal effects or average marginal effects for nonlinear
models, or models with interactions or transformations, etc. It's also very
fast.


#### Basic logit marginal effects

<div class='code--container'>
<div>

\`\`\`stata
* A logit:
logit Y X Z
margins, dydx(*)
\`\`\`
</div>
<div>

\`\`\`r
# This example incorporates the fixest function feglm()
m = feglm(Y ~ X + Z, family = binomial, data = mtcars)
summary(marginaleffects(m))
\`\`\`
</div>
</div>



## multcomp / nlWaldTest

_Joint coefficient tests_

Stata provides a number of inbuilt commands for (potentially complex)
postestimation coefficient tests. We've already seen the \`testparm\` command
equivalent with \`fixest::wald()\`. But what about combinations of coefficients _a
la_ Stata's \`lincom\` and \`nlcom\` commands? The
[**multcomp**](http://multcomp.r-forge.r-project.org/) package handles a variety
of linear tests and combinations, while
[**nlWaldTest**](https://cran.r-project.org/web/packages/nlWaldTest/index.html)
has you covered for nonlinear combinations.


#### Test other null hypotheses and coefficient combinations

<div class='code--container'>
<div>

\`\`\`stata
regress y x z 

* One-sided test 
test _b[x]=0 
local sign_wgt = sign(_b[x]) 
display "H0: coef <= 0  p-value = " ttail(r(df_r),\`sign_wgt'*sqrt(r(F))) 

* Test linear combination of coefficients 
lincom x + z 


* Test nonlinear combination of coefficients 
nlcom _b[x]/_b[z]
\`\`\`
</div>
<div>

\`\`\`r
m = feols(y ~ x + z, dat)

# One-sided test 
m2 = multcomp::ghlt(m, '<=0')
summary(m2) 


# Test linear combination of coefficients 
m3 = multcomp::glht(m, 'x + z = 0') 
summary(m3) # or confint(m3) 

# Test nonlinear combination of coefficients 
nlWaldtest::nlWaldtest(m, 'b[2]/b[3]') # or nlWaldtest::nlConfint()
\`\`\`
</div>
</div>


## sf

_Geospatial operations_

R has outstanding support for geospatial computation and mapping. There are a
variety of packages to choose from here, depending on what you want (e.g. vector
vs raster data, interactive maps, high-dimensional data cubes, etc.) But the
workhorse geospatial tool for most R users is the incredibly versatile
[**sf**](https://r-spatial.github.io/sf/) package. We'll only provide a simple
mapping example below. The **sf** [website](https://r-spatial.github.io/sf/) has
several in-depth tutorials, and we also recommend the [_Geocomputation with
R_](https://geocompr.robinlovelace.net/) book by Robin Lovelace, Jakub Nowosad,
and Jannes Muenchow.

#### Simple Map

<div class='code--container'>
<div>

\`\`\`stata
* Mapping in Stata requires the spmap and shp2dta 
* commands, and also that you convert your (say) 
* shapefile to .dta format first. We won't go through 
* all that here, but see: 
* https://www.stata.com/support/faqs/graphics/spmap-and-maps/
\`\`\`
</div>
<div>

\`\`\`r
# This example uses the North Carolina shapefile that is
# bundled with the sf package. 
nc = st_read(system.file("shape/nc.shp", package = "sf")) 
plot(nc[, 'BIR74'])
# Or, if you have ggplot2 loaded: 
ggplot(nc, aes(fill=BIR74)) + geom_sf()
\`\`\`
</div>
</div>





                     

`]},{title:"fixest",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Models",slug:"models",children:[{level:3,title:"Simple model",slug:"simple-model",children:[]},{level:3,title:"Categorical variables",slug:"categorical-variables",children:[]},{level:3,title:"Fixed effects",slug:"fixed-effects",children:[]},{level:3,title:"Instrumental variables",slug:"instrumental-variables",children:[]},{level:3,title:"Nonlinear models",slug:"nonlinear-models",children:[]},{level:3,title:"Macros, wildcards and shortcuts",slug:"macros-wildcards-and-shortcuts",children:[]},{level:3,title:"Multi-model estimations (advanced)",slug:"multi-model-estimations-advanced",children:[]}]},{level:2,title:"Interactions",slug:"interactions",children:[{level:3,title:"Interact continuous variables",slug:"interact-continuous-variables",children:[]},{level:3,title:"Interact categorical variables",slug:"interact-categorical-variables",children:[]},{level:3,title:"Interact categorical with continuous variables",slug:"interact-categorical-with-continuous-variables",children:[]},{level:3,title:"Difference-in-differences",slug:"difference-in-differences",children:[]},{level:3,title:"Interact fixed effects",slug:"interact-fixed-effects",children:[]}]},{level:2,title:"Standard errors",slug:"standard-errors",children:[{level:3,title:"HC",slug:"hc",children:[]},{level:3,title:"HAC",slug:"hac",children:[]},{level:3,title:"Clustered",slug:"clustered",children:[]},{level:3,title:"Conley standard errors",slug:"conley-standard-errors",children:[]},{level:3,title:"On-the-fly SE adjustment",slug:"on-the-fly-se-adjustment",children:[]}]},{level:2,title:"Presentation",slug:"presentation",children:[{level:3,title:"Regression table",slug:"regression-table",children:[]},{level:3,title:"Joint test of coefficients",slug:"joint-test-of-coefficients",children:[]},{level:3,title:"Coefficient plot",slug:"coefficient-plot",children:[]},{level:3,title:"Interaction Plot",slug:"interaction-plot",children:[]}]},{level:2,title:"Panel",slug:"panel",children:[{level:3,title:"Lag variables",slug:"lag-variables",children:[]},{level:3,title:"Lead variables",slug:"lead-variables",children:[]},{level:3,title:"First difference",slug:"first-difference",children:[]}]}],path:"/fixest/",pathLocale:"/",extraFields:[`
# Regression analysis with fixest

[**fixest**](https://lrberge.github.io/fixest) (by Laurent Berg\xE9) is a package 
designed from the ground up in C++ to make running regressions fast and 
incredibly easy. It provides in-built support for a variety of linear and 
non-linear models, as well as regression tables and plotting methods. 

## Installation

Before continuing, make sure that you have installed **fixest**. You only 
have to do this once (or as often as you want to update the package).

<div class="code--container grid-cols-1">
<div>

\`\`\`r
# Install from CRAN (recommended) 
install.packages(fixest)

# Install the development version from GitHub (advanced) 
# Requires Rtools and the remotes package 
# remotes::install_github('lrberge/fixest')
\`\`\`
</div>
</div>

Once **fixest** is installed, don't forget to load it whenever you want to 
use it. Unlike Stata, you have to re-load a package every time you start a new R 
session.

<div class="code--container grid-cols-1">
<div>

\`\`\`r
# Load fixest into our current R session
library(fixest)
\`\`\`
</div>
</div>

All of the examples in this section will use a modified dataset from the CPS
with some added variables for demonstration purposes. To load the data run the
following:

<div class="code--container">
<div>

\`\`\`stata
import delimited using \\\\\\
    "https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv", clear
\`\`\`
</div>
<div>

\`\`\`r
# Base R reads CSVs too, but we'll use data.table here
dat = data.table::fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')
\`\`\`
</div>
</div>


## Introduction

The [**fixest**](https://lrberge.github.io/fixest/index.html) package contains a highly flexible set of tools that allow you to estimate a fairly large set of standard regression models. While the package certainly doesn't cover *every* model that exists, there is a non-negligible subset of Stata users for whom every model they've ever needed to run is covered by **fixest**.

This includes regular ol' linear regression in the \`feols()\` function, which builds off of the Base R standard regression function \`lm(),\` but also includes things like instrumental variables via 2SLS, and of course support for as many fixed effects as you'd like. **fixest** isn't limited to linear regression either, covering IV and fixed-effects support for a wide range of GLM models like logit, probit, Poisson, negative binomial, and so on in \`feglm()\` and \`fepois().\`

**fixest** covers all of this while being _very_ fast. If you felt a speed boost going from Stata's \`xtreg\` to \`reghdfe,\` get ready for another significant improvement when moving to **fixest**.

You also get a fair amount of convenience. Adjusting your standard errors to be heteroskedasticity-robust or clustered can be a pain in other R regression functions, but it is easy in **fixest** with the \`vcov\` option. Regression tables, coefficient and interaction-margin plots, selecting long lists of controls without having to type them all in, lagged variables, retrieving estimated fixed effects, Wald tests, and the choice of reference for categorical variables are all made easy. You even get some stuff that's rather tricky in Stata, like automatically iterating over a bunch of model specifications, basic and staggered difference-in-difference support, or Conley standard errors.

Using **fixest** for regression starts with writing a formula. While there are plenty of bells and whistles to add, at its core regression formulas take the form **\`y ~ x1 + x2 | fe1 + fe2\`**, where \`y\` is the outcome, \`x1\` and \`x2\` are predictors, and \`fe1\` and \`fe2\` are your sets of fixed effects.

                     
## Models

Unlike Stata, which only ever has one active dataset in memory, remember that
having multiple datasets in your global environment is the norm in R. We
highlight this difference to head off a very common error for new Stata R users:
_you need to specify which dataset you're using in your model calls_, e.g.
\`feols(..., data = dat)\`. We'll see lots of examples below. At the same time,
note that **fixest** allows you to set various [global
options](https://lrberge.github.io/fixest/reference/index.html#section-default-values),
including which dataset you want to use for all of your regressions. Again,
we'll see examples below.

           
### Simple model

<div class='code--container'>
<div>

\`\`\`stata
reg wage educ 
reg wage educ age
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, data = dat) 
feols(wage ~ educ + age, data = dat)

# Aside 1: \`data = ...\` is always the first argument 
# after the model formula. So many R users would just 
# write: 
feols(wage ~ educ, dat) 

# Aside 2: You can also set your dataset globally so 
# that you don't have to reference it each time. 
setFixest_estimation(data = dat) 
feols(wage ~ educ) 
feols(wage ~ educ + age) 
# etc.
\`\`\`
</div>
</div>
           
### Categorical variables

<div class='code--container'>
<div>

\`\`\`stata
reg wage educ i.treat 

* Specifying a baseline:
reg wage educ ib1.treat
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + i(treat), dat) 

# Specifying a baseline:
feols(wage ~ educ + i(treat, ref = 1), dat)
\`\`\`
</div>
</div>
           
### Fixed effects

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ, absorb(countyfips) cluster(countyfips) 





reghdfe wage educ, absorb(countyfips)  

* Add more fixed effects... 
reghdfe wage educ, absorb(countyfips year) \\\\\\ 
                   vce(cluster countyfips year) 
reghdfe wage educ, absorb(countyfips#year) \\\\\\ 
                   vce(cluster countyfips#year)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ | countyfips, dat) 

# Aside: fixest automatically clusters SEs by the first 
# fixed effect (if there are any). We'll get to SEs 
# later, but if you just want iid errors for a fixed 
# effect model: 
feols(wage ~ educ | countyfips, dat, vcov = 'iid') 

# Add more fixed effects... 
feols(wage ~ educ | countyfips + year, 
      dat, vcov = ~countyfips + year) 
feols(wage ~ educ | countyfips^year, 
      dat) # defaults to vcov = ~countyfips^year
\`\`\`
</div>
</div>
           
### Instrumental variables

<div class='code--container'>
<div>

\`\`\`stata
ivreg 2sls wage (educ = age) 
ivreg 2sls wage marr (educ = age) 

* With fixed effects 
ivreghdfe 2sls wage marr (educ = age), absorb(countyfips)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ 1 | educ ~ age, dat)  
feols(wage ~ marr | educ ~ age, dat) 

# With fixed effects (IV 1st stage always comes last) 
feols(wage ~ marr | countyfips | educ ~ age, dat)
\`\`\`
</div>
</div>
           
### Nonlinear models

While we don't really show it here, note that all of the functionality that
this page demonstrates w.r.t. \`feols()\` carries over to **fixest's** non-linear 
estimation functions too (\`feglm()\`, \`fepois()\`, etc.). This include IV, SE 
adjustment, and so forth.

<div class='code--container'>
<div>

\`\`\`stata
xtset statefips
logit marr age black hisp

* Note: Attempting to replicate the feglm() model with fixed
* effects at right using xtlogit or xtprobit leads to 
* numerical overflow or matsize issues


xtpoisson educ age black hisp i.year, fe
\`\`\`
</div>
<div>

\`\`\`r
feglm(marr ~ age + black + hisp, 
      dat, family = binomial(link = 'logit'))

# Add fixed effects (probit this time)
feglm(marr ~ age + black + hisp | statefips + year, 
      dat, family = binomial(link = 'probit'))

# fepois() is there for Poisson regression
fepois(educ ~ age + black + hisp | statefips + year, dat)
\`\`\`
</div>
</div>	  


### Macros, wildcards and shortcuts

<div class='code--container'>
<div>

\`\`\`stata
local ctrls age black hisp marr 
reg wage educ \`ctrls' 

reg wage educ x* 
reg wage educ *sp  
reg wage educ *ac*
\`\`\`
</div>
<div>

\`\`\`r
ctrls = c("age", "black", "hisp", "marr") 
feols(wage ~ educ + .[ctrls], dat) 

feols(wage ~ educ + ..('^x'), dat) # ^ = starts with 
feols(wage ~ educ + ..('sp$'), dat) # $ = ends with 
feols(wage ~ educ + ..('ac'), dat) 

# Many more macro options. See \`?setFixest_fml\` and
# \`?setFixest_estimation\`. Example (reminder) where 
# you set your dataset globally, so you don't have to 
# retype \`data = ...\` anymore. 
setFixest_estimation(data = dat) 
feols(wage ~ educ) 
feols(wage ~ educ + .[ctrls] | statefips) 
# Etc.
\`\`\`
</div>
</div>
          

### Multi-model estimations (advanced)

**fixest** supports a variety of
[multi-model](https://lrberge.github.io/fixest/articles/multiple_estimations.html) 
capabilities. Not only are these efficient from a coding perspective (you can get 
away with much less typing), but they are also highly optimized. For example, 
if you run a multi-model estimation with the same group of fixed-effects then 
**fixest** will only compute those fixed-effects _once_ for all models. The next
group of examples are meant to highlight some specific examples of this
functionality. They don't necessarily have direct Stata equivalents that we are 
aware of. Moreover, while we don't show it here, please note that all of these
options can be combined (e.g. split sample with stepwise regression). 
Multi-model objects can also be sent directly to [presentation](#presentation) 
functions like \`etable()\` and \`coefplot()\`.

#### Split sample

\`\`\`r
## Separate regressions for hispanic and non-hispanic
feols(wage ~ educ | countyfips, dat, split = ~hisp)

# As above, but now includes the full sample as a 3rd reg
feols(wage ~ educ | countyfips, dat, fsplit = ~hisp)
\`\`\`

#### Multiple dependent variables

\`\`\`r
# Regress wage & educ separately on the same dep. vars & FEs
feols(c(wage, educ) ~ age + marr | countyfips + year, dat) 
\`\`\`

#### Stepwise regression

\`\`\`r
# Stepwise. First reg doesn't include "marr", second reg
# doesn't include "age"
feols(wage ~ educ + sw(age, marr), dat) 

# Cumulative stepwise. As above, except now the second reg
# includes "age".
feols(wage ~ educ + csw(age, marr), dat)

# Stepwise operators work in the FE slot too
feols(wage ~ educ | csw(year, statefips), dat)

# Aside: You have also use "sw0()" and "csw0()", in which 
# case you'll get an extra regression at the start that 
# doesn't include the stepwise components. 
\`\`\`


## Interactions

           
### Interact continuous variables

<div class='code--container'>
<div>

\`\`\`stata
reg wage c.educ#c.age 
reg wage c.educ##c.age 

* Polynomials 
reg wage c.age#c.age 
reg wage c.age##c.age 
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ:age, dat) 
feols(wage ~ educ*age, dat) 

# Polynomials 
feols(wage ~ I(age^2), dat) 
feols(wage ~ poly(age, 2, raw = TRUE))
\`\`\`
</div>
</div>
           
### Interact categorical variables

<div class='code--container'>
<div>

\`\`\`stata
reg wage i.treat#i.hisp 




reg wage i.treat i.treat#i.hisp
reg wage i.treat##i.hisp
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ i(treat, i.hisp), dat) 

# Aside: i() is a fixest-specific shortcut that also 
# has synergies with some other fixest functions. But 
# base R interaction operators all still work, e.g. 
feols(wage ~ factor(treat)/factor(hisp), dat) 
feols(wage ~ factor(treat)*factor(hisp), dat)
\`\`\`
</div>
</div>
           
### Interact categorical with continuous variables

<div class='code--container'>
<div>

\`\`\`stata
reg wage i.treat#c.age 




reg wage i.treat#c.age 
reg wage i.treat i.treat#c.age 
reg wage i.treat##c.age
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ i(treat, age), dat) 

# Aside: i() is a fixest-specific shortcut that also 
# has synergies with some other fixest functions. But 
# base R interaction operators all still work, e.g. 
feols(wage ~ factor(treat):age, dat) 
feols(wage ~ factor(treat)/age, dat) 
feols(wage ~ factor(treat)*age, dat)
\`\`\`
</div>
</div>

### Difference-in-differences

In addition to the ability to estimate a difference-in-differences design using
two-way fixed effects (if the design is appropriate for that; no staggered
treatment, for instance), **fixest** offers several other DID-specific tools.
The below examples use generic data sets, since the CPS data used in the rest of
this page is not appropriate for DID.

<div class='code--container'>
<div>

\`\`\`stata
* No immediate Stata equivalent to did_means that we know of,
* although you could replicate much of it by hand with an 
* elaborate call to table

* Sun and Abraham can be estimated using the 
* eventstudyinteract package on ssc
\`\`\`
</div>
<div>

\`\`\`r
# did_means() provides tables of means, SEs, and treatment/
# control and pre/post differences for 2x2 DID
did_means(outcome + control ~ treat | post)

# sunab() produces interactions of the type that allow you to
# estimate the Sun & Abraham model for staggered treatment 
# timing, and automatically get average treatment effects for
# each relative period
feols(y ~ control + sunab(year_treated, year))
\`\`\`
</div>
</div>	  
           
### Interact fixed effects

<div class='code--container'>
<div>

\`\`\`stata
* Combine fixed effects 
reghdfe wage educ, absorb(statefips#year) 

* Varying slopes (e.g. time trend for each state) 
* ?
\`\`\`
</div>
<div>

\`\`\`r
# Combine fixed effects 
feols(wage ~ educ | statefips^year, dat) 

# Varying slopes (e.g. time trend for each state) 
feols(wage ~ educ | statefips[year], dat)
\`\`\`
</div>
</div>
                     
                     
## Standard errors

While you can specify standard errors inside the original **fixest** model call
(just like Stata), a unique feature of R is that you can adjust errors for an
existing model _on-the-fly_. This has [several
benefits](https://grantmcdermott.com/better-way-adjust-SEs), including being
much more efficient since you don't have to re-estimate your whole model. We'll
try to highlight examples of both approaches below.

           
### HC

<div class='code--container'>
<div>

\`\`\`stata
reg wage educ, vce(robust) 
reg wage educ, vce(hc3)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, dat, vcov = 'hc1') 
feols(wage ~ educ, dat, vcov = sandwich::vcovHC) 

# Note: You can also adjust the SEs of an existing model 
m = feols(wage ~ educ, dat) # iid
summary(m, vcov = 'hc1')    # switch to HC1
\`\`\`
</div>
</div>
           
### HAC

<div class='code--container'>
<div>

\`\`\`stata
xtset id year
ivreghdfe wage educ, bw(auto) vce(robust)
\`\`\`
</div>
<div>

\`\`\`r
feols(y ~ x, dat, vcov = 'NW', panel.id = ~unit + time)
# feols(y ~ x, dat, vcov = 'NW') # if panel id already set (see below)
\`\`\`
</div>
</div>
           
### Clustered

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ, absorb(countyfips) \\\\\\ 
                   vce(cluster countyfips) 

* Twoway clustering etc. 
reghdfe wage educ, absorb(countyfips year) \\\\\\ 
                   vce(cluster countyfips year) 



reghdfe wage educ, absorb(countyfips#year) \\\\\\ 
                   vce(cluster countyfips#year)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ | countyfips, dat) # Auto clusters by FE 
# feols(wage ~ educ | countyfips, dat, vcov = ~countyfips) # ofc can be explicit too 

# Twoway clustering etc. 
feols(wage ~ educ | countyfips + year, 
      dat, vcov = ~countyfips + year) 
# feols(wage ~ educ | countyfips + year, 
#      dat, vcov = 'twoway') ## same as above

feols(wage ~ educ | countyfips^year, 
      dat, vcov = ~countyfips^year) 
\`\`\`
</div>
</div>
           
### Conley standard errors

<div class='code--container'>
<div>

\`\`\`stata
* See: http://www.trfetzer.com/conley-spatial-hac-errors-with-fixed-effects/
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, dat, vcov = conley("25 mi"))
\`\`\`
</div>
</div>

### On-the-fly SE adjustment

We're belabouring the point now, but one last reminder that you can adjust the
standard errors for existing models "on the fly" by passing the \`vcov = ...\`
argument. There's no performance penalty, since the adjustment is done 
instantaneously and it therefore has the virtue of separating the mechanical
_computation_ stage of model estimation from the _inference_ stage. As we'll see 
below, on-the-fly SE adjustment works for a variety of other **fixest** 
functions, e.g. \`etable()\`. But here is a quick example using \`summary()\`:

\`\`\`r
m = feols(wage ~ educ | countyfips + year, dat) 
m                                    # Clustered by countyfips (default)
summary(m, vcov = 'iid')             # Switch to iid errors
summary(m, vcov = 'twoway')          # Cluster by countyfips and year 
summary(m, vcov = ~countyfips^year)  # Cluster by countyfips*year interaction
\`\`\`
              
## Presentation

           
### Regression table

<div class='code--container'>
<div>

\`\`\`stata
reg wage educ age 
eststo est1 
esttab est1

reg wage educ age black hisp
eststo est2
esttab est1 est2 

* There aren't great Stata equivalents for these next 
* examples. You could mimic with a loop, but that will 
* require more code and be slower (since your whole 
* model has to be reestimated each time).
\`\`\`
</div>
<div>

\`\`\`r
est1 = feols(wage ~ educ + age, dat) 
etable(est1)


est2 = feols(wage ~ educ + age + black + hisp, dat) 
etable(est1, est2) 


# SEs for existing models can be adjusted on-the-fly 
etable(est1, vcov = 'hc1') 

# Report multiple SEs for the same model 
etable(est1, vcov = list('iid', 'hc1', ~id, ~countyfips)) 

# Multi-model example: Two dep. vars, stepwise coefs, 
# varying slopes, split sample, etc. (18 models in total!)
est_mult = feols(c(wage, age) ~ educ + csw0(hisp, black) | 
                     statefips[year], 
                 dat, fsplit = ~marr) 
etable(est_mult, vcov = ~statefips^year)
\`\`\`
</div>
</div>

### Joint test of coefficients

<div class='code--container'>
<div>

\`\`\`stata
* Rename so we can use the wildcard later
rename (black hisp) (raceeth_black raceeth_hisp)
regress wage educ age raceeth_* marr 
testparm raceeth_black raceeth_hisp
testparm raceeth_*
\`\`\`
</div>
<div>

\`\`\`r
# Rename so we can use a regular expression later
data.table::setnames(dat, c('black','hisp'), c('raceeth_black','raceeth_hisp'))
est1 = feols(wage ~ educ + age + ..('raceeth_') + marr, dat)
wald(est1, c('raceeth_black','raceeth_hisp'))
wald(est1, 'raceeth_')
\`\`\`
</div>
</div>
           
### Coefficient plot

<div class='code--container'>
<div>

\`\`\`stata
* Assume we have est1 and est2 from above 
coefplot est1 
coefplot est1 est2
\`\`\`
</div>
<div>

\`\`\`r
# Assume we have est1 and est2 from above 
coefplot(est1) 
coefplot(list(est1, est2))
\`\`\`
</div>
</div>
                     
### Interaction Plot

<div class='code--container'>
<div>

\`\`\`stata
regress wage hisp##c.age

* Show how effect differs by group
margins hisp, dydx(age)
marginsplot
\`\`\`
</div>
<div>

\`\`\`r
est1 = feols(wage ~ i(hisp, age), dat) 

# Show how effect differs by group
iplot(est1)
\`\`\`
</div>
</div>        
		
## Panel

Note you don't need to specify panel.vars if you make your data a panel dataset before running the regression using the \`panel\` function. For example, you can use \`panel(dat, ~ id + var)\`.

           
### Lag variables

<div class='code--container'>
<div>

\`\`\`stata
xtset id year 
 reg wage educ l1.wage
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + l(wage, 1), dat, panel.id = ~id+year)
\`\`\`
</div>
</div>
           
### Lead variables

<div class='code--container'>
<div>

\`\`\`stata
xtset id year 
reg wage educ f1.wage
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + l(wage, -1), dat, panel.id = ~id+year)
\`\`\`
</div>
</div>
           
### First difference

<div class='code--container'>
<div>

\`\`\`stata
xtset id year 
reg wage educ D.x
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + d(wage), dat, panel.id = ~id+year)
\`\`\`
</div>
</div>
`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[""]}],hi=ye(qf),Uf=()=>hi;fa.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=e=>{hi.value=e});const Wf=/[^\x00-\x7F]/,Kf=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),pi=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),mi=(e,t)=>{const n=t.join(" "),a=Kf(e);if(Wf.test(e))return a.some(o=>n.toLowerCase().indexOf(o)>-1);const r=e.endsWith(" ");return new RegExp(a.map((o,i)=>a.length===i+1&&!r?`(?=.*\\b${pi(o)})`:`(?=.*\\b${pi(o)}\\b)`).join("")+".+","gi").test(n)},Vf=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:a})=>{const r=pe(()=>e.value.filter(s=>s.pathLocale===t.value));return pe(()=>{const s=n.value.trim().toLowerCase();if(!s)return[];const o=[],i=(l,c)=>{mi(s,[c.title])&&o.push({link:`${l.path}#${c.slug}`,title:l.title,header:c.title});for(const u of c.children){if(o.length>=a.value)return;i(l,u)}};for(const l of r.value){if(o.length>=a.value)break;if(mi(s,[l.title,...l.extraFields])){o.push({link:l.path,title:l.title});continue}for(const c of l.headers){if(o.length>=a.value)break;i(l,c)}}return o})},Yf=e=>{const t=ye(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Gf=Ne({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:a}=pl(e),r=oa(),s=yu(),o=Uf(),i=ye(null),l=ye(!1),c=ye(""),u=pe(()=>{var k;return(k=t.value[s.value])!==null&&k!==void 0?k:{}}),m=Vf({searchIndex:o,routeLocale:s,query:c,maxSuggestions:a}),{focusIndex:f,focusNext:w,focusPrev:h}=Yf(m);$f({input:i,hotKeys:n});const b=pe(()=>l.value&&!!m.value.length),g=()=>{!b.value||h()},v=()=>{!b.value||w()},x=k=>{if(!b.value)return;const A=m.value[k];!A||r.push(A.link).then(()=>{c.value="",f.value=0})};return()=>le("form",{class:"search-box",role:"search"},[le("input",{ref:i,type:"search",placeholder:u.value.placeholder,autocomplete:"off",spellcheck:!1,value:c.value,onFocus:()=>l.value=!0,onBlur:()=>l.value=!1,onInput:k=>c.value=k.target.value,onKeydown:k=>{switch(k.key){case"ArrowUp":{g();break}case"ArrowDown":{v();break}case"Enter":{k.preventDefault(),x(f.value);break}}}}),b.value&&le("ul",{class:"suggestions",onMouseleave:()=>f.value=-1},m.value.map(({link:k,title:A,header:H},j)=>le("li",{class:["suggestion",{focus:f.value===j}],onMouseenter:()=>f.value=j,onMousedown:()=>x(j)},le("a",{href:k,onClick:C=>C.preventDefault()},[le("span",{class:"page-title"},A),H&&le("span",{class:"page-header"},`> ${H}`)]))))])}});const Xf={},Jf=["s","/"],Zf=5;var Qf=Gt(({app:e})=>{e.component("SearchBox",t=>le(Gf,Ke({locales:Xf,hotKeys:Jf,maxSuggestions:Zf},t)))});const eh=[Pu,$u,Vu,Of,Bf,Qf];function gi(e,t,n){var a,r,s;t===void 0&&(t=50),n===void 0&&(n={});var o=(a=n.isImmediate)!=null&&a,i=(r=n.callback)!=null&&r,l=n.maxWait,c=Date.now(),u=[];function m(){if(l!==void 0){var w=Date.now()-c;if(w+t>=l)return l-w}return t}var f=function(){var w=[].slice.call(arguments),h=this;return new Promise(function(b,g){var v=o&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,c=Date.now(),!o){var k=e.apply(h,w);i&&i(k),u.forEach(function(A){return(0,A.resolve)(k)}),u=[]}},m()),v){var x=e.apply(h,w);return i&&i(x),b(x)}u.push({resolve:b,reject:g})})};return f.cancel=function(w){s!==void 0&&clearTimeout(s),u.forEach(function(h){return(0,h.reject)(w)}),u=[]},f}const vi=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,th=()=>window.scrollTo({top:0,behavior:"smooth"});const nh=Ne({name:"BackToTop",setup(){const e=ye(0),t=pe(()=>e.value>300),n=gi(()=>{e.value=vi()},100);qe(()=>{e.value=vi(),window.addEventListener("scroll",()=>n())});const a=le("div",{class:"back-to-top",onClick:th});return()=>le(ir,{name:"back-to-top"},{default:()=>t.value?a:null})}}),ah=[nh],rh=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:a=5})=>{const r=oa(),s=Yt(),o=gi(()=>{var l,c,u,m;const f=Array.from(document.querySelectorAll(e)),h=Array.from(document.querySelectorAll(t)).filter(k=>f.some(A=>A.hash===k.hash)),b=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),g=window.innerHeight+b,v=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),x=Math.abs(v-g)<a;for(let k=0;k<h.length;k++){const A=h[k],H=h[k+1],j=k===0&&b===0,C=b>=((c=(l=A.parentElement)===null||l===void 0?void 0:l.offsetTop)!==null&&c!==void 0?c:0)-a,S=!H||b<((m=(u=H.parentElement)===null||u===void 0?void 0:u.offsetTop)!==null&&m!==void 0?m:0)-a;if(!(j||C&&S))continue;const q=decodeURIComponent(r.currentRoute.value.hash),Y=decodeURIComponent(A.hash);if(q===Y)return;if(x){for(let _=k+1;_<h.length;_++)if(q===decodeURIComponent(h[_].hash))return}sh(r,{hash:Y,force:!0});return}},n),i=()=>o();qe(()=>{o(),window.addEventListener("scroll",i)}),cn(()=>{window.removeEventListener("scroll",i)}),Xe(()=>s.value.path,()=>i())},sh=async(e,...t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace(...t).finally(()=>e.options.scrollBehavior=n)},oh="a.sidebar-item",ih=".header-anchor",lh=200,ch=5;var dh=ia(()=>{rh({headerLinkSelector:oh,headerAnchorSelector:ih,delay:lh,offset:ch})}),uh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ua={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,a){e.exports=a()})(uh,function(){var n={};n.version="0.2.0";var a=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(h){var b,g;for(b in h)g=h[b],g!==void 0&&h.hasOwnProperty(b)&&(a[b]=g);return this},n.status=null,n.set=function(h){var b=n.isStarted();h=r(h,a.minimum,1),n.status=h===1?null:h;var g=n.render(!b),v=g.querySelector(a.barSelector),x=a.speed,k=a.easing;return g.offsetWidth,i(function(A){a.positionUsing===""&&(a.positionUsing=n.getPositioningCSS()),l(v,o(h,x,k)),h===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){n.remove(),A()},x)},x)):setTimeout(A,x)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var h=function(){setTimeout(function(){!n.status||(n.trickle(),h())},a.trickleSpeed)};return a.trickle&&h(),this},n.done=function(h){return!h&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(h){var b=n.status;return b?(typeof h!="number"&&(h=(1-b)*r(Math.random()*b,.1,.95)),b=r(b+h,0,.994),n.set(b)):n.start()},n.trickle=function(){return n.inc(Math.random()*a.trickleRate)},function(){var h=0,b=0;n.promise=function(g){return!g||g.state()==="resolved"?this:(b===0&&n.start(),h++,b++,g.always(function(){b--,b===0?(h=0,n.done()):n.set((h-b)/h)}),this)}}(),n.render=function(h){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var b=document.createElement("div");b.id="nprogress",b.innerHTML=a.template;var g=b.querySelector(a.barSelector),v=h?"-100":s(n.status||0),x=document.querySelector(a.parent),k;return l(g,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),a.showSpinner||(k=b.querySelector(a.spinnerSelector),k&&w(k)),x!=document.body&&u(x,"nprogress-custom-parent"),x.appendChild(b),b},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(a.parent),"nprogress-custom-parent");var h=document.getElementById("nprogress");h&&w(h)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var h=document.body.style,b="WebkitTransform"in h?"Webkit":"MozTransform"in h?"Moz":"msTransform"in h?"ms":"OTransform"in h?"O":"";return b+"Perspective"in h?"translate3d":b+"Transform"in h?"translate":"margin"};function r(h,b,g){return h<b?b:h>g?g:h}function s(h){return(-1+h)*100}function o(h,b,g){var v;return a.positionUsing==="translate3d"?v={transform:"translate3d("+s(h)+"%,0,0)"}:a.positionUsing==="translate"?v={transform:"translate("+s(h)+"%,0)"}:v={"margin-left":s(h)+"%"},v.transition="all "+b+"ms "+g,v}var i=function(){var h=[];function b(){var g=h.shift();g&&g(b)}return function(g){h.push(g),h.length==1&&b()}}(),l=function(){var h=["Webkit","O","Moz","ms"],b={};function g(A){return A.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(H,j){return j.toUpperCase()})}function v(A){var H=document.body.style;if(A in H)return A;for(var j=h.length,C=A.charAt(0).toUpperCase()+A.slice(1),S;j--;)if(S=h[j]+C,S in H)return S;return A}function x(A){return A=g(A),b[A]||(b[A]=v(A))}function k(A,H,j){H=x(H),A.style[H]=j}return function(A,H){var j=arguments,C,S;if(j.length==2)for(C in H)S=H[C],S!==void 0&&H.hasOwnProperty(C)&&k(A,C,S);else k(A,j[1],j[2])}}();function c(h,b){var g=typeof h=="string"?h:f(h);return g.indexOf(" "+b+" ")>=0}function u(h,b){var g=f(h),v=g+b;c(g,b)||(h.className=v.substring(1))}function m(h,b){var g=f(h),v;!c(h,b)||(v=g.replace(" "+b+" "," "),h.className=v.substring(1,v.length-1))}function f(h){return(" "+(h.className||"")+" ").replace(/\s+/gi," ")}function w(h){h&&h.parentNode&&h.parentNode.removeChild(h)}return n})})(ua);const fh=()=>{qe(()=>{const e=oa(),t=new Set;t.add(e.currentRoute.value.path),ua.exports.configure({showSpinner:!1}),e.beforeEach(n=>{t.has(n.path)||ua.exports.start()}),e.afterEach(n=>{t.add(n.path),ua.exports.done()})})};var hh=ia(()=>{fh()}),ph=ia(()=>{_f(),Cf()});const Rn={staticIcon:!1,align:"bottom",selector:'div[class*="language-"]',delay:400,color:"var(--c-brand)",backgroundTransition:!0,backgroundTransitionColor:"var(--code-bg-color)",successTextColor:"var(--c-brand-light)",successText:"Copied!"};var mh=ia(()=>{const e=Yt(),t=()=>{setTimeout(()=>{document.querySelectorAll(Rn.selector).forEach(n=>{if(n.classList.contains(`code-copy-added-${Rn.align}`)||n.querySelector("pre, code[class*='pre-']")===null)return;const a=n.querySelector("pre, code[class*='pre-']"),r=Gc(fi,{parent:n,code:a.innerText,options:Rn}),s=document.createElement("div");n.appendChild(s),r.mount(s),n.classList.add(`code-copy-added-${Rn.align}`)})},Rn.delay+100)};return qe(()=>{t(),window.addEventListener("vuepress-plugin-clipboard-update-event",t)}),cn(()=>{window.removeEventListener("vuepress-plugin-clipboard-update-event",t)}),ys(()=>{t()}),Xe(()=>e.value.path,t),t});const gh=[dh,hh,ph,mh],vh=[["v-8daa1a0e","/",{title:"intro"},["/index.html","/index.md"]],["v-77f0ef68","/data.table/",{title:"data.table"},["/data.table/index.html","/data.table/README.md"]],["v-1c385113","/extras/",{title:"extras"},["/extras/index.html","/extras/README.md"]],["v-37b893e5","/fixest/",{title:"fixest"},["/fixest/index.html","/fixest/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]],yh=vh.reduce((e,[t,n,a,r])=>(e.push({name:t,path:n,component:Jo,meta:a},...r.map(s=>({path:s,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Jo}]),bh=(e,t)=>{const n=pe(()=>bu(Tt.value.locales,t.currentRoute.value.path)),a=pe(()=>xu(Tt.value,n.value)),r=pe(()=>ou(ut.value)),s=pe(()=>mu(ut.value,a.value)),o=pe(()=>hu(s.value,r.value,a.value)),i=pe(()=>vu(ut.value));e.provide(br,n),e.provide(Xo,a),e.provide(Wo,r),e.provide(pu,s),e.provide(Yo,o),e.provide(Go,i),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>r.value},$headTitle:{get:()=>s.value},$lang:{get:()=>i.value},$page:{get:()=>ut.value},$routeLocale:{get:()=>n.value},$site:{get:()=>Tt.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>Ru}})},wh=e=>{e.component("ClientOnly",eu),e.component("Content",wr)},_h=Xc,xh=md,Sh=async()=>{const e=_h({name:"VuepressApp",setup(){Eu();for(const n of gh)n();return()=>[le(Bo),...ah.map(n=>le(n))]}}),t=Zd({history:xh(du(Tt.value.base)),routes:yh,scrollBehavior:(n,a,r)=>r||(n.hash?{el:n.hash}:{top:0})});t.beforeResolve(async(n,a)=>{var r;(n.path!==a.path||a===tt)&&([ut.value]=await Promise.all([ru(n.name),(r=qo[n.name])===null||r===void 0?void 0:r.__asyncLoader()]))}),bh(e,t),wh(e);for(const n of eh)await n({app:e,router:t,siteData:Tt});return e.use(t),{app:e,router:t}};Sh().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{_u as A,Lh as B,Oh as C,le as D,Ru as E,Re as F,eu as G,ft as H,ye as I,Xe as J,kh as K,Ah as L,uu as M,du as N,oa as O,he as P,Sf as Q,qe as R,Qt as S,ir as T,Yt as U,Mh as V,Ko as W,Ba as X,kf as Y,Mf as _,Nt as a,ge as b,Gn as c,Sh as createVueApp,Ya as d,Ch as e,Ne as f,Cr as g,Ze as h,su as i,pe as j,G as k,Rh as l,Th as m,vr as n,_t as o,pl as p,Va as q,ec as r,oc as s,pa as t,yu as u,zs as v,ds as w,cu as x,Ph as y,Ih as z};
