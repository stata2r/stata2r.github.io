var yi=Object.defineProperty,bi=Object.defineProperties;var wi=Object.getOwnPropertyDescriptors;var Ps=Object.getOwnPropertySymbols;var _i=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable;var Ls=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t)=>{for(var n in t||(t={}))_i.call(t,n)&&Ls(e,n,t[n]);if(Ps)for(var n of Ps(t))xi.call(t,n)&&Ls(e,n,t[n]);return e},An=(e,t)=>bi(e,wi(t));const fr={};function hr(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ei="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Si=hr(Ei);function Is(e){return!!e||e===""}function Qt(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=he(r)?Ti(r):Qt(r);if(s)for(const a in s)t[a]=s[a]}return t}else{if(he(e))return e;if(ve(e))return e}}const Ci=/;(?![^(]*\))/g,ki=/:(.+)/;function Ti(e){const t={};return e.split(Ci).forEach(n=>{if(n){const r=n.split(ki);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ft(e){let t="";if(he(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const r=ft(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pr=e=>e==null?"":G(e)||ve(e)&&(e.toString===Ns||!Q(e.toString))?JSON.stringify(e,Os,2):String(e),Os=(e,t)=>t&&t.__v_isRef?Os(e,t.value):Lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ms(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!G(t)&&!Hs(t)?String(t):t,de={},Pt=[],je=()=>{},Ri=()=>!1,Ai=/^on[^a-z]/,en=e=>Ai.test(e),mr=e=>e.startsWith("onUpdate:"),xe=Object.assign,gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pi=Object.prototype.hasOwnProperty,re=(e,t)=>Pi.call(e,t),G=Array.isArray,Lt=e=>Pn(e)==="[object Map]",Ms=e=>Pn(e)==="[object Set]",Q=e=>typeof e=="function",he=e=>typeof e=="string",vr=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Ds=e=>ve(e)&&Q(e.then)&&Q(e.catch),Ns=Object.prototype.toString,Pn=e=>Ns.call(e),Li=e=>Pn(e).slice(8,-1),Hs=e=>Pn(e)==="[object Object]",yr=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tn=hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ii=/-(\w)/g,Ve=Ln(e=>e.replace(Ii,(t,n)=>n?n.toUpperCase():"")),Oi=/\B([A-Z])/g,It=Ln(e=>e.replace(Oi,"-$1").toLowerCase()),In=Ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),br=Ln(e=>e?`on${In(e)}`:""),nn=(e,t)=>!Object.is(e,t),wr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},On=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let zs;const Mi=()=>zs||(zs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;const Mn=[];class Di{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(Mn.push(this),Ye=this)}off(){this.active&&(Mn.pop(),Ye=Mn[Mn.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ni(e,t){t=t||Ye,t&&t.active&&t.effects.push(e)}function Hi(){return Ye}function Fi(e){Ye&&Ye.cleanups.push(e)}const _r=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bs=e=>(e.w&nt)>0,$s=e=>(e.n&nt)>0,zi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Bi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Bs(s)&&!$s(s)?s.delete(e):t[n++]=s,s.w&=~nt,s.n&=~nt}t.length=n}},xr=new WeakMap;let rn=0,nt=1;const Er=30,sn=[];let ht;const pt=Symbol(""),Sr=Symbol("");class Cr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Ni(this,r)}run(){if(!this.active)return this.fn();if(!sn.includes(this))try{return sn.push(ht=this),$i(),nt=1<<++rn,rn<=Er?zi(this):js(this),this.fn()}finally{rn<=Er&&Bi(this),nt=1<<--rn,mt(),sn.pop();const t=sn.length;ht=t>0?sn[t-1]:void 0}}stop(){this.active&&(js(this),this.onStop&&this.onStop(),this.active=!1)}}function js(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ot=!0;const kr=[];function Mt(){kr.push(Ot),Ot=!1}function $i(){kr.push(Ot),Ot=!0}function mt(){const e=kr.pop();Ot=e===void 0?!0:e}function Le(e,t,n){if(!qs())return;let r=xr.get(e);r||xr.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=_r()),Us(s)}function qs(){return Ot&&ht!==void 0}function Us(e,t){let n=!1;rn<=Er?$s(e)||(e.n|=nt,n=!Bs(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e))}function Je(e,t,n,r,s,a){const o=xr.get(e);if(!o)return;let i=[];if(t==="clear")i=[...o.values()];else if(n==="length"&&G(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&i.push(l)});else switch(n!==void 0&&i.push(o.get(n)),t){case"add":G(e)?yr(n)&&i.push(o.get("length")):(i.push(o.get(pt)),Lt(e)&&i.push(o.get(Sr)));break;case"delete":G(e)||(i.push(o.get(pt)),Lt(e)&&i.push(o.get(Sr)));break;case"set":Lt(e)&&i.push(o.get(pt));break}if(i.length===1)i[0]&&Tr(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);Tr(_r(l))}}function Tr(e,t){for(const n of G(e)?e:[...e])(n!==ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ji=hr("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(vr)),qi=Rr(),Ui=Rr(!1,!0),Wi=Rr(!0),Ks=Ki();function Ki(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=se(this);for(let a=0,o=this.length;a<o;a++)Le(r,"get",a+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(se)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=se(this)[t].apply(this,n);return mt(),r}}),e}function Rr(e=!1,t=!1){return function(r,s,a){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_raw"&&a===(e?t?ll:ta:t?ea:Qs).get(r))return r;const o=G(r);if(!e&&o&&re(Ks,s))return Reflect.get(Ks,s,a);const i=Reflect.get(r,s,a);return(vr(s)?Ws.has(s):ji(s))||(e||Le(r,"get",s),t)?i:Ee(i)?!o||!yr(s)?i.value:i:ve(i)?e?Lr(i):an(i):i}}const Vi=Vs(),Yi=Vs(!0);function Vs(e=!1){return function(n,r,s,a){let o=n[r];if(!e&&!Or(s)&&(s=se(s),o=se(o),!G(n)&&Ee(o)&&!Ee(s)))return o.value=s,!0;const i=G(n)&&yr(r)?Number(r)<n.length:re(n,r),l=Reflect.set(n,r,s,a);return n===se(a)&&(i?nn(s,o)&&Je(n,"set",r,s):Je(n,"add",r,s)),l}}function Gi(e,t){const n=re(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Xi(e,t){const n=Reflect.has(e,t);return(!vr(t)||!Ws.has(t))&&Le(e,"has",t),n}function Ji(e){return Le(e,"iterate",G(e)?"length":pt),Reflect.ownKeys(e)}const Ys={get:qi,set:Vi,deleteProperty:Gi,has:Xi,ownKeys:Ji},Zi={get:Wi,set(e,t){return!0},deleteProperty(e,t){return!0}},Qi=xe({},Ys,{get:Ui,set:Yi}),Ar=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,r=!1){e=e.__v_raw;const s=se(e),a=se(t);t!==a&&!n&&Le(s,"get",t),!n&&Le(s,"get",a);const{has:o}=Dn(s),i=r?Ar:n?Mr:on;if(o.call(s,t))return i(e.get(t));if(o.call(s,a))return i(e.get(a));e!==s&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,r=se(n),s=se(e);return e!==s&&!t&&Le(r,"has",e),!t&&Le(r,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Le(se(e),"iterate",pt),Reflect.get(e,"size",e)}function Gs(e){e=se(e);const t=se(this);return Dn(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function Xs(e,t){t=se(t);const n=se(this),{has:r,get:s}=Dn(n);let a=r.call(n,e);a||(e=se(e),a=r.call(n,e));const o=s.call(n,e);return n.set(e,t),a?nn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function Js(e){const t=se(this),{has:n,get:r}=Dn(t);let s=n.call(t,e);s||(e=se(e),s=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return s&&Je(t,"delete",e,void 0),a}function Zs(){const e=se(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function zn(e,t){return function(r,s){const a=this,o=a.__v_raw,i=se(o),l=t?Ar:e?Mr:on;return!e&&Le(i,"iterate",pt),o.forEach((c,u)=>r.call(s,l(c),l(u),a))}}function Bn(e,t,n){return function(...r){const s=this.__v_raw,a=se(s),o=Lt(a),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?Ar:t?Mr:on;return!t&&Le(a,"iterate",l?Sr:pt),{next(){const{value:m,done:f}=c.next();return f?{value:m,done:f}:{value:i?[u(m[0]),u(m[1])]:u(m),done:f}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:this}}function el(){const e={get(a){return Nn(this,a)},get size(){return Fn(this)},has:Hn,add:Gs,set:Xs,delete:Js,clear:Zs,forEach:zn(!1,!1)},t={get(a){return Nn(this,a,!1,!0)},get size(){return Fn(this)},has:Hn,add:Gs,set:Xs,delete:Js,clear:Zs,forEach:zn(!1,!0)},n={get(a){return Nn(this,a,!0)},get size(){return Fn(this,!0)},has(a){return Hn.call(this,a,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:zn(!0,!1)},r={get(a){return Nn(this,a,!0,!0)},get size(){return Fn(this,!0)},has(a){return Hn.call(this,a,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Bn(a,!1,!1),n[a]=Bn(a,!0,!1),t[a]=Bn(a,!1,!0),r[a]=Bn(a,!0,!0)}),[e,n,t,r]}const[tl,nl,rl,sl]=el();function Pr(e,t){const n=t?e?sl:rl:e?nl:tl;return(r,s,a)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,a)}const al={get:Pr(!1,!1)},ol={get:Pr(!1,!0)},il={get:Pr(!0,!1)},Qs=new WeakMap,ea=new WeakMap,ta=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Li(e))}function an(e){return e&&e.__v_isReadonly?e:Ir(e,!1,Ys,al,Qs)}function ul(e){return Ir(e,!1,Qi,ol,ea)}function Lr(e){return Ir(e,!0,Zi,il,ta)}function Ir(e,t,n,r,s){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=s.get(e);if(a)return a;const o=dl(e);if(o===0)return e;const i=new Proxy(e,o===2?r:n);return s.set(e,i),i}function Dt(e){return Or(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Or(e){return!!(e&&e.__v_isReadonly)}function na(e){return Dt(e)||Or(e)}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function ra(e){return On(e,"__v_skip",!0),e}const on=e=>ve(e)?an(e):e,Mr=e=>ve(e)?Lr(e):e;function sa(e){qs()&&(e=se(e),e.dep||(e.dep=_r()),Us(e.dep))}function aa(e,t){e=se(e),e.dep&&Tr(e.dep)}function Ee(e){return Boolean(e&&e.__v_isRef===!0)}function ye(e){return ia(e,!1)}function oa(e){return ia(e,!0)}function ia(e,t){return Ee(e)?e:new fl(e,t)}class fl{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:se(t),this._value=n?t:on(t)}get value(){return sa(this),this._value}set value(t){t=this._shallow?t:se(t),nn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:on(t),aa(this))}}function Ze(e){return Ee(e)?e.value:e}const hl={get:(e,t,n)=>Ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function la(e){return Dt(e)?e:new Proxy(e,hl)}function pl(e){const t=G(e)?new Array(e.length):{};for(const n in e)t[n]=gl(e,n);return t}class ml{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function gl(e,t,n){const r=e[t];return Ee(r)?r:new ml(e,t,n)}class vl{constructor(t,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Cr(t,()=>{this._dirty||(this._dirty=!0,aa(this))}),this.__v_isReadonly=r}get value(){const t=se(this);return sa(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function pe(e,t){let n,r;const s=Q(e);return s?(n=e,r=je):(n=e.get,r=e.set),new vl(n,r,s||!r)}Promise.resolve();function yl(e,t,...n){const r=e.vnode.props||de;let s=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:f}=r[u]||de;f?s=n.map(w=>w.trim()):m&&(s=n.map(Fs))}let i,l=r[i=br(t)]||r[i=br(Ve(t))];!l&&a&&(l=r[i=br(It(t))]),l&&ze(l,e,6,s);const c=r[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ze(c,e,6,s)}}function ca(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const a=e.emits;let o={},i=!1;if(!Q(e)){const l=c=>{const u=ca(c,t,!0);u&&(i=!0,xe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!i?(r.set(e,null),null):(G(a)?a.forEach(l=>o[l]=null):xe(o,a),r.set(e,o),o)}function Dr(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,It(t))||re(e,t))}let Ie=null,$n=null;function jn(e){const t=Ie;return Ie=e,$n=e&&e.type.__scopeId||null,t}function bl(e){$n=e}function wl(){$n=null}function da(e,t=Ie,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ha(-1);const a=jn(t),o=e(...s);return jn(a),r._d&&Ha(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:a,propsOptions:[o],slots:i,attrs:l,emit:c,render:u,renderCache:m,data:f,setupState:w,ctx:h,inheritAttrs:b}=e;let g,v;const x=jn(e);try{if(n.shapeFlag&4){const A=s||r;g=Ue(u.call(A,A,m,a,w,f,h)),v=l}else{const A=t;g=Ue(A.length>1?A(a,{attrs:l,slots:i,emit:c}):A(a,null)),v=t.props?l:_l(l)}}catch(A){fn.length=0,pn(A,e,1),g=ge(He)}let C=g;if(v&&b!==!1){const A=Object.keys(v),{shapeFlag:H}=C;A.length&&H&(1|6)&&(o&&A.some(mr)&&(v=xl(v,o)),C=Ht(C,v))}return n.dirs&&(C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),g=C,jn(x),g}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const r in e)(!mr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function El(e,t,n){const{props:r,children:s,component:a}=e,{props:o,children:i,patchFlag:l}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ua(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(o[f]!==r[f]&&!Dr(c,f))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?ua(r,o,c):!0:!!o;return!1}function ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const a=r[s];if(t[a]!==e[a]&&!Dr(n,a))return!0}return!1}function Sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cl=e=>e.__isSuspense;function fa(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):_c(e)}function gt(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function _e(e,t,n=!1){const r=we||Ie;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r.proxy):t}}function kl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{e.isMounted=!0}),cn(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],Tl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(e,{slots:t}){const n=ja(),r=kl();let s;return()=>{const a=t.default&&ga(t.default(),!0);if(!a||!a.length)return;const o=se(e),{mode:i}=o,l=a[0];if(r.isLeaving)return Fr(l);const c=ma(l);if(!c)return Fr(l);const u=Hr(c,o,r,n);zr(c,u);const m=n.subTree,f=m&&ma(m);let w=!1;const{getTransitionKey:h}=c.type;if(h){const b=h();s===void 0?s=b:b!==s&&(s=b,w=!0)}if(f&&f.type!==He&&(!xt(c,f)||w)){const b=Hr(f,o,r,n);if(zr(f,b),i==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},Fr(l);i==="in-out"&&c.type!==He&&(b.delayLeave=(g,v,x)=>{const C=pa(r,f);C[String(f.key)]=f,g._leaveCb=()=>{v(),g._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return l}}},ha=Tl;function pa(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Hr(e,t,n,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:m,onLeave:f,onAfterLeave:w,onLeaveCancelled:h,onBeforeAppear:b,onAppear:g,onAfterAppear:v,onAppearCancelled:x}=t,C=String(e.key),A=pa(n,e),H=(k,E)=>{k&&ze(k,r,9,E)},z={mode:a,persisted:o,beforeEnter(k){let E=i;if(!n.isMounted)if(s)E=b||i;else return;k._leaveCb&&k._leaveCb(!0);const V=A[C];V&&xt(e,V)&&V.el._leaveCb&&V.el._leaveCb(),H(E,[k])},enter(k){let E=l,V=c,q=u;if(!n.isMounted)if(s)E=g||l,V=v||c,q=x||u;else return;let Y=!1;const _=k._enterCb=D=>{Y||(Y=!0,D?H(q,[k]):H(V,[k]),z.delayedLeave&&z.delayedLeave(),k._enterCb=void 0)};E?(E(k,_),E.length<=1&&_()):_()},leave(k,E){const V=String(e.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return E();H(m,[k]);let q=!1;const Y=k._leaveCb=_=>{q||(q=!0,E(),_?H(h,[k]):H(w,[k]),k._leaveCb=void 0,A[V]===e&&delete A[V])};A[V]=e,f?(f(k,Y),f.length<=1&&Y()):Y()},clone(k){return Hr(k,t,n,r)}};return z}function Fr(e){if(ln(e))return e=Ht(e),e.children=null,e}function ma(e){return ln(e)?e.children?e.children[0]:void 0:e}function zr(e,t){e.shapeFlag&6&&e.component?zr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ga(e,t=!1){let n=[],r=0;for(let s=0;s<e.length;s++){const a=e[s];a.type===Re?(a.patchFlag&128&&r++,n=n.concat(ga(a.children,t))):(t||a.type!==He)&&n.push(a)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Ne(e){return Q(e)?{setup:e,name:e.name}:e}const qn=e=>!!e.type.__asyncLoader;function vt(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:a,suspensible:o=!0,onError:i}=e;let l=null,c,u=0;const m=()=>(u++,l=null,f()),f=()=>{let w;return l||(w=l=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),i)return new Promise((b,g)=>{i(h,()=>b(m()),()=>g(h),u+1)});throw h}).then(h=>w!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return Ne({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const w=we;if(c)return()=>Br(c,w);const h=x=>{l=null,pn(x,w,13,!r)};if(o&&w.suspense||hn)return f().then(x=>()=>Br(x,w)).catch(x=>(h(x),()=>r?ge(r,{error:x}):null));const b=ye(!1),g=ye(),v=ye(!!s);return s&&setTimeout(()=>{v.value=!1},s),a!=null&&setTimeout(()=>{if(!b.value&&!g.value){const x=new Error(`Async component timed out after ${a}ms.`);h(x),g.value=x}},a),f().then(()=>{b.value=!0,w.parent&&ln(w.parent.vnode)&&ns(w.parent.update)}).catch(x=>{h(x),g.value=x}),()=>{if(b.value&&c)return Br(c,w);if(g.value&&r)return ge(r,{error:g.value});if(n&&!v.value)return ge(n)}}})}function Br(e,{vnode:{ref:t,props:n,children:r}}){const s=ge(e,n,r);return s.ref=t,s}const ln=e=>e.type.__isKeepAlive;function Rl(e,t){va(e,"a",t)}function Al(e,t){va(e,"da",t)}function va(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Un(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ln(s.parent.vnode)&&Pl(r,t,n,s),s=s.parent}}function Pl(e,t,n,r){const s=Un(t,e,r,!0);$r(()=>{gr(r[t],s)},n)}function Un(e,t,n=we,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),Ft(n);const i=ze(t,n,e,o);return Et(),mt(),i});return r?s.unshift(a):s.push(a),a}}const Qe=e=>(t,n=we)=>(!hn||e==="sp")&&Un(e,t,n),Ll=Qe("bm"),qe=Qe("m"),Il=Qe("bu"),ya=Qe("u"),cn=Qe("bum"),$r=Qe("um"),Ol=Qe("sp"),Ml=Qe("rtg"),Dl=Qe("rtc");function Nl(e,t=we){Un("ec",e,t)}let jr=!0;function Hl(e){const t=_a(e),n=e.proxy,r=e.ctx;jr=!1,t.beforeCreate&&ba(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:o,watch:i,provide:l,inject:c,created:u,beforeMount:m,mounted:f,beforeUpdate:w,updated:h,activated:b,deactivated:g,beforeDestroy:v,beforeUnmount:x,destroyed:C,unmounted:A,render:H,renderTracked:z,renderTriggered:k,errorCaptured:E,serverPrefetch:V,expose:q,inheritAttrs:Y,components:_,directives:D,filters:K}=t;if(c&&Fl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const te=o[Z];Q(te)&&(r[Z]=te.bind(n))}if(s){const Z=s.call(n,n);ve(Z)&&(e.data=an(Z))}if(jr=!0,a)for(const Z in a){const te=a[Z],be=Q(te)?te.bind(n,n):Q(te.get)?te.get.bind(n,n):je,Se=!Q(te)&&Q(te.set)?te.set.bind(n):je,Ae=pe({get:be,set:Se});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Me=>Ae.value=Me})}if(i)for(const Z in i)wa(i[Z],r,n,Z);if(l){const Z=Q(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(te=>{gt(te,Z[te])})}u&&ba(u,e,"c");function j(Z,te){G(te)?te.forEach(be=>Z(be.bind(n))):te&&Z(te.bind(n))}if(j(Ll,m),j(qe,f),j(Il,w),j(ya,h),j(Rl,b),j(Al,g),j(Nl,E),j(Dl,z),j(Ml,k),j(cn,x),j($r,A),j(Ol,V),G(q))if(q.length){const Z=e.exposed||(e.exposed={});q.forEach(te=>{Object.defineProperty(Z,te,{get:()=>n[te],set:be=>n[te]=be})})}else e.exposed||(e.exposed={});H&&e.render===je&&(e.render=H),Y!=null&&(e.inheritAttrs=Y),_&&(e.components=_),D&&(e.directives=D)}function Fl(e,t,n=je,r=!1){G(e)&&(e=qr(e));for(const s in e){const a=e[s];let o;ve(a)?"default"in a?o=_e(a.from||s,a.default,!0):o=_e(a.from||s):o=_e(a),Ee(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function ba(e,t,n){ze(G(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function wa(e,t,n,r){const s=r.includes(".")?Qa(n,r):()=>n[r];if(he(e)){const a=t[e];Q(a)&&Xe(s,a)}else if(Q(e))Xe(s,e.bind(n));else if(ve(e))if(G(e))e.forEach(a=>wa(a,t,n,r));else{const a=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(a)&&Xe(s,a,e)}}function _a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,i=a.get(t);let l;return i?l=i:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>Wn(l,c,o,!0)),Wn(l,t,o)),a.set(t,l),l}function Wn(e,t,n,r=!1){const{mixins:s,extends:a}=t;a&&Wn(e,a,n,!0),s&&s.forEach(o=>Wn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const i=zl[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const zl={data:xa,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:yt,directives:yt,watch:$l,provide:xa,inject:Bl};function xa(e,t){return t?e?function(){return xe(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Bl(e,t){return yt(qr(e),qr(t))}function qr(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?xe(xe(Object.create(null),e),t):t}function $l(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function jl(e,t,n,r=!1){const s={},a={};On(a,Jn,1),e.propsDefaults=Object.create(null),Ea(e,t,s,a);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ul(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function ql(e,t,n,r){const{props:s,attrs:a,vnode:{patchFlag:o}}=e,i=se(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];const w=t[f];if(l)if(re(a,f))w!==a[f]&&(a[f]=w,c=!0);else{const h=Ve(f);s[h]=Ur(l,i,h,w,e,!1)}else w!==a[f]&&(a[f]=w,c=!0)}}}else{Ea(e,t,s,a)&&(c=!0);let u;for(const m in i)(!t||!re(t,m)&&((u=It(m))===m||!re(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(s[m]=Ur(l,i,m,void 0,e,!0)):delete s[m]);if(a!==i)for(const m in a)(!t||!re(t,m))&&(delete a[m],c=!0)}c&&Je(e,"set","$attrs")}function Ea(e,t,n,r){const[s,a]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(tn(l))continue;const c=t[l];let u;s&&re(s,u=Ve(l))?!a||!a.includes(u)?n[u]=c:(i||(i={}))[u]=c:Dr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=se(n),c=i||de;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Ur(s,l,m,c[m],e,!re(c,m))}}return o}function Ur(e,t,n,r,s,a){const o=e[n];if(o!=null){const i=re(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Ft(s),r=c[n]=l.call(null,t),Et())}else r=l}o[0]&&(a&&!i?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function Sa(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const a=e.props,o={},i=[];let l=!1;if(!Q(e)){const u=m=>{l=!0;const[f,w]=Sa(m,t,!0);xe(o,f),w&&i.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return r.set(e,Pt),Pt;if(G(a))for(let u=0;u<a.length;u++){const m=Ve(a[u]);Ca(m)&&(o[m]=de)}else if(a)for(const u in a){const m=Ve(u);if(Ca(m)){const f=a[u],w=o[m]=G(f)||Q(f)?{type:f}:f;if(w){const h=Ra(Boolean,w.type),b=Ra(String,w.type);w[0]=h>-1,w[1]=b<0||h<b,(h>-1||re(w,"default"))&&i.push(m)}}}const c=[o,i];return r.set(e,c),c}function Ca(e){return e[0]!=="$"}function ka(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ta(e,t){return ka(e)===ka(t)}function Ra(e,t){return G(t)?t.findIndex(n=>Ta(n,e)):Q(t)&&Ta(t,e)?0:-1}const Aa=e=>e[0]==="_"||e==="$stable",Wr=e=>G(e)?e.map(Ue):[Ue(e)],Ul=(e,t,n)=>{const r=da((...s)=>Wr(t(...s)),n);return r._c=!1,r},Pa=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Aa(s))continue;const a=e[s];if(Q(a))t[s]=Ul(s,a,r);else if(a!=null){const o=Wr(a);t[s]=()=>o}}},La=(e,t)=>{const n=Wr(t);e.slots.default=()=>n},Wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=se(t),On(t,"_",n)):Pa(t,e.slots={})}else e.slots={},t&&La(e,t);On(e.slots,Jn,1)},Kl=(e,t,n)=>{const{vnode:r,slots:s}=e;let a=!0,o=de;if(r.shapeFlag&32){const i=t._;i?n&&i===1?a=!1:(xe(s,t),!n&&i===1&&delete s._):(a=!t.$stable,Pa(t,s)),o=t}else t&&(La(e,t),o={default:1});if(a)for(const i in s)!Aa(i)&&!(i in o)&&delete s[i]};function Ch(e,t){const n=Ie;if(n===null)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,i,l,c=de]=t[a];Q(o)&&(o={mounted:o,updated:o}),o.deep&&St(i),s.push({dir:o,instance:r,value:i,oldValue:void 0,arg:l,modifiers:c})}return e}function Ge(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let o=0;o<s.length;o++){const i=s[o];a&&(i.oldValue=a[o].value);let l=i.dir[r];l&&(Mt(),ze(l,n,8,[e.el,i,e,t]),mt())}}function Ia(){return{app:null,config:{isNativeTag:Ri,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Yl(e,t){return function(r,s=null){s!=null&&!ve(s)&&(s=null);const a=Ia(),o=new Set;let i=!1;const l=a.app={_uid:Vl++,_component:r,_props:s,_container:null,_context:a,_instance:null,version:Ec,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,m){if(!i){const f=ge(r,s);return f.appContext=a,u&&t?t(f,c):e(f,c,m),i=!0,l._container=c,c.__vue_app__=l,Jr(f.component)||f.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l}};return l}}function Kn(e,t,n,r,s=!1){if(G(e)){e.forEach((f,w)=>Kn(f,t&&(G(t)?t[w]:t),n,r,s));return}if(qn(r)&&!s)return;const a=r.shapeFlag&4?Jr(r.component)||r.component.proxy:r.el,o=s?null:a,{i,r:l}=e,c=t&&t.r,u=i.refs===de?i.refs={}:i.refs,m=i.setupState;if(c!=null&&c!==l&&(he(c)?(u[c]=null,re(m,c)&&(m[c]=null)):Ee(c)&&(c.value=null)),Q(l))ot(l,i,12,[o,u]);else{const f=he(l),w=Ee(l);if(f||w){const h=()=>{if(e.f){const b=f?u[l]:l.value;s?G(b)&&gr(b,a):G(b)?b.includes(a)||b.push(a):f?u[l]=[a]:(l.value=[a],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,re(m,l)&&(m[l]=o)):Ee(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(h.id=-1,Te(h,n)):h()}}}let st=!1;const Vn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Kr=e=>e.nodeType===8;function Gl(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:s,parentNode:a,remove:o,insert:i,createComment:l}}=e,c=(g,v)=>{if(!v.hasChildNodes()){n(null,g,v),tr();return}st=!1,u(v.firstChild,g,null,null,null),tr(),st&&console.error("Hydration completed but contains mismatches.")},u=(g,v,x,C,A,H=!1)=>{const z=Kr(g)&&g.data==="[",k=()=>h(g,v,x,C,A,z),{type:E,ref:V,shapeFlag:q}=v,Y=g.nodeType;v.el=g;let _=null;switch(E){case dn:Y!==3?_=k():(g.data!==v.children&&(st=!0,g.data=v.children),_=s(g));break;case He:Y!==8||z?_=k():_=s(g);break;case un:if(Y!==1)_=k();else{_=g;const D=!v.children.length;for(let K=0;K<v.staticCount;K++)D&&(v.children+=_.outerHTML),K===v.staticCount-1&&(v.anchor=_),_=s(_);return _}break;case Re:z?_=w(g,v,x,C,A,H):_=k();break;default:if(q&1)Y!==1||v.type.toLowerCase()!==g.tagName.toLowerCase()?_=k():_=m(g,v,x,C,A,H);else if(q&6){v.slotScopeIds=A;const D=a(g);if(t(v,D,null,x,C,Vn(D),H),_=z?b(g):s(g),qn(v)){let K;z?(K=ge(Re),K.anchor=_?_.previousSibling:D.lastChild):K=g.nodeType===3?Yr(""):ge("div"),K.el=g,v.component.subTree=K}}else q&64?Y!==8?_=k():_=v.type.hydrate(g,v,x,C,A,H,e,f):q&128&&(_=v.type.hydrate(g,v,x,C,Vn(a(g)),A,H,e,u))}return V!=null&&Kn(V,null,C,v),_},m=(g,v,x,C,A,H)=>{H=H||!!v.dynamicChildren;const{type:z,props:k,patchFlag:E,shapeFlag:V,dirs:q}=v,Y=z==="input"&&q||z==="option";if(Y||E!==-1){if(q&&Ge(v,null,x,"created"),k)if(Y||!H||E&(16|32))for(const D in k)(Y&&D.endsWith("value")||en(D)&&!tn(D))&&r(g,D,null,k[D],!1,void 0,x);else k.onClick&&r(g,"onClick",null,k.onClick,!1,void 0,x);let _;if((_=k&&k.onVnodeBeforeMount)&&Fe(_,x,v),q&&Ge(v,null,x,"beforeMount"),((_=k&&k.onVnodeMounted)||q)&&fa(()=>{_&&Fe(_,x,v),q&&Ge(v,null,x,"mounted")},C),V&16&&!(k&&(k.innerHTML||k.textContent))){let D=f(g.firstChild,v,g,x,C,A,H);for(;D;){st=!0;const K=D;D=D.nextSibling,o(K)}}else V&8&&g.textContent!==v.children&&(st=!0,g.textContent=v.children)}return g.nextSibling},f=(g,v,x,C,A,H,z)=>{z=z||!!v.dynamicChildren;const k=v.children,E=k.length;for(let V=0;V<E;V++){const q=z?k[V]:k[V]=Ue(k[V]);if(g)g=u(g,q,C,A,H,z);else{if(q.type===dn&&!q.children)continue;st=!0,n(null,q,x,null,C,A,Vn(x),H)}}return g},w=(g,v,x,C,A,H)=>{const{slotScopeIds:z}=v;z&&(A=A?A.concat(z):z);const k=a(g),E=f(s(g),v,k,x,C,A,H);return E&&Kr(E)&&E.data==="]"?s(v.anchor=E):(st=!0,i(v.anchor=l("]"),k,E),E)},h=(g,v,x,C,A,H)=>{if(st=!0,v.el=null,H){const E=b(g);for(;;){const V=s(g);if(V&&V!==E)o(V);else break}}const z=s(g),k=a(g);return o(g),n(null,v,k,z,x,C,Vn(k),A),z},b=g=>{let v=0;for(;g;)if(g=s(g),g&&Kr(g)&&(g.data==="["&&v++,g.data==="]")){if(v===0)return s(g);v--}return g};return[c,u]}const Te=fa;function Xl(e){return Oa(e)}function Jl(e){return Oa(e,Gl)}function Oa(e,t){const n=Mi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:a,createElement:o,createText:i,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:f,setScopeId:w=je,cloneNode:h,insertStaticContent:b}=e,g=(d,p,y,R=null,T=null,L=null,N=!1,I=null,M=!!p.dynamicChildren)=>{if(d===p)return;d&&!xt(d,p)&&(R=B(d),ke(d,T,L,!0),d=null),p.patchFlag===-2&&(M=!1,p.dynamicChildren=null);const{type:P,ref:U,shapeFlag:$}=p;switch(P){case dn:v(d,p,y,R);break;case He:x(d,p,y,R);break;case un:d==null&&C(p,y,R,N);break;case Re:D(d,p,y,R,T,L,N,I,M);break;default:$&1?z(d,p,y,R,T,L,N,I,M):$&6?K(d,p,y,R,T,L,N,I,M):($&64||$&128)&&P.process(d,p,y,R,T,L,N,I,M,ie)}U!=null&&T&&Kn(U,d&&d.ref,L,p||d,!p)},v=(d,p,y,R)=>{if(d==null)r(p.el=i(p.children),y,R);else{const T=p.el=d.el;p.children!==d.children&&c(T,p.children)}},x=(d,p,y,R)=>{d==null?r(p.el=l(p.children||""),y,R):p.el=d.el},C=(d,p,y,R)=>{[d.el,d.anchor]=b(d.children,p,y,R)},A=({el:d,anchor:p},y,R)=>{let T;for(;d&&d!==p;)T=f(d),r(d,y,R),d=T;r(p,y,R)},H=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),s(d),d=y;s(p)},z=(d,p,y,R,T,L,N,I,M)=>{N=N||p.type==="svg",d==null?k(p,y,R,T,L,N,I,M):q(d,p,T,L,N,I,M)},k=(d,p,y,R,T,L,N,I)=>{let M,P;const{type:U,props:$,shapeFlag:W,transition:X,patchFlag:ne,dirs:me}=d;if(d.el&&h!==void 0&&ne===-1)M=d.el=h(d.el);else{if(M=d.el=o(d.type,L,$&&$.is,$),W&8?u(M,d.children):W&16&&V(d.children,M,null,R,T,L&&U!=="foreignObject",N,I),me&&Ge(d,null,R,"created"),$){for(const fe in $)fe!=="value"&&!tn(fe)&&a(M,fe,null,$[fe],L,d.children,R,T,O);"value"in $&&a(M,"value",null,$.value),(P=$.onVnodeBeforeMount)&&Fe(P,R,d)}E(M,d,d.scopeId,N,R)}me&&Ge(d,null,R,"beforeMount");const ce=(!T||T&&!T.pendingBranch)&&X&&!X.persisted;ce&&X.beforeEnter(M),r(M,p,y),((P=$&&$.onVnodeMounted)||ce||me)&&Te(()=>{P&&Fe(P,R,d),ce&&X.enter(M),me&&Ge(d,null,R,"mounted")},T)},E=(d,p,y,R,T)=>{if(y&&w(d,y),R)for(let L=0;L<R.length;L++)w(d,R[L]);if(T){let L=T.subTree;if(p===L){const N=T.vnode;E(d,N,N.scopeId,N.slotScopeIds,T.parent)}}},V=(d,p,y,R,T,L,N,I,M=0)=>{for(let P=M;P<d.length;P++){const U=d[P]=I?at(d[P]):Ue(d[P]);g(null,U,p,y,R,T,L,N,I)}},q=(d,p,y,R,T,L,N)=>{const I=p.el=d.el;let{patchFlag:M,dynamicChildren:P,dirs:U}=p;M|=d.patchFlag&16;const $=d.props||de,W=p.props||de;let X;y&&bt(y,!1),(X=W.onVnodeBeforeUpdate)&&Fe(X,y,p,d),U&&Ge(p,d,y,"beforeUpdate"),y&&bt(y,!0);const ne=T&&p.type!=="foreignObject";if(P?Y(d.dynamicChildren,P,I,y,R,ne,L):N||be(d,p,I,null,y,R,ne,L,!1),M>0){if(M&16)_(I,p,$,W,y,R,T);else if(M&2&&$.class!==W.class&&a(I,"class",null,W.class,T),M&4&&a(I,"style",$.style,W.style,T),M&8){const me=p.dynamicProps;for(let ce=0;ce<me.length;ce++){const fe=me[ce],$e=$[fe],At=W[fe];(At!==$e||fe==="value")&&a(I,fe,$e,At,T,d.children,y,R,O)}}M&1&&d.children!==p.children&&u(I,p.children)}else!N&&P==null&&_(I,p,$,W,y,R,T);((X=W.onVnodeUpdated)||U)&&Te(()=>{X&&Fe(X,y,p,d),U&&Ge(p,d,y,"updated")},R)},Y=(d,p,y,R,T,L,N)=>{for(let I=0;I<p.length;I++){const M=d[I],P=p[I],U=M.el&&(M.type===Re||!xt(M,P)||M.shapeFlag&(6|64))?m(M.el):y;g(M,P,U,null,R,T,L,N,!0)}},_=(d,p,y,R,T,L,N)=>{if(y!==R){for(const I in R){if(tn(I))continue;const M=R[I],P=y[I];M!==P&&I!=="value"&&a(d,I,P,M,N,p.children,T,L,O)}if(y!==de)for(const I in y)!tn(I)&&!(I in R)&&a(d,I,y[I],null,N,p.children,T,L,O);"value"in R&&a(d,"value",y.value,R.value)}},D=(d,p,y,R,T,L,N,I,M)=>{const P=p.el=d?d.el:i(""),U=p.anchor=d?d.anchor:i("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:X}=p;X&&(I=I?I.concat(X):X),d==null?(r(P,y,R),r(U,y,R),V(p.children,y,U,T,L,N,I,M)):$>0&&$&64&&W&&d.dynamicChildren?(Y(d.dynamicChildren,W,y,T,L,N,I),(p.key!=null||T&&p===T.subTree)&&Ma(d,p,!0)):be(d,p,y,U,T,L,N,I,M)},K=(d,p,y,R,T,L,N,I,M)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?T.ctx.activate(p,y,R,N,M):ae(p,y,R,T,L,N,M):j(d,p,M)},ae=(d,p,y,R,T,L,N)=>{const I=d.component=dc(d,R,T);if(ln(d)&&(I.ctx.renderer=ie),uc(I),I.asyncDep){if(T&&T.registerDep(I,Z),!d.el){const M=I.subTree=ge(He);x(null,M,p,y)}return}Z(I,d,p,y,T,L,N)},j=(d,p,y)=>{const R=p.component=d.component;if(El(d,p,y))if(R.asyncDep&&!R.asyncResolved){te(R,p,y);return}else R.next=p,bc(R.update),R.update();else p.component=d.component,p.el=d.el,R.vnode=p},Z=(d,p,y,R,T,L,N)=>{const I=()=>{if(d.isMounted){let{next:U,bu:$,u:W,parent:X,vnode:ne}=d,me=U,ce;bt(d,!1),U?(U.el=ne.el,te(d,U,N)):U=ne,$&&wr($),(ce=U.props&&U.props.onVnodeBeforeUpdate)&&Fe(ce,X,U,ne),bt(d,!0);const fe=Nr(d),$e=d.subTree;d.subTree=fe,g($e,fe,m($e.el),B($e),d,T,L),U.el=fe.el,me===null&&Sl(d,fe.el),W&&Te(W,T),(ce=U.props&&U.props.onVnodeUpdated)&&Te(()=>Fe(ce,X,U,ne),T)}else{let U;const{el:$,props:W}=p,{bm:X,m:ne,parent:me}=d,ce=qn(p);if(bt(d,!1),X&&wr(X),!ce&&(U=W&&W.onVnodeBeforeMount)&&Fe(U,me,p),bt(d,!0),$&&J){const fe=()=>{d.subTree=Nr(d),J($,d.subTree,d,T,null)};ce?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=Nr(d);g(null,fe,y,R,d,T,L),p.el=fe.el}if(ne&&Te(ne,T),!ce&&(U=W&&W.onVnodeMounted)){const fe=p;Te(()=>Fe(U,me,fe),T)}p.shapeFlag&256&&d.a&&Te(d.a,T),d.isMounted=!0,p=y=R=null}},M=d.effect=new Cr(I,()=>ns(d.update),d.scope),P=d.update=M.run.bind(M);P.id=d.uid,bt(d,!0),P()},te=(d,p,y)=>{p.component=d;const R=d.vnode.props;d.vnode=p,d.next=null,ql(d,p.props,R,y),Kl(d,p.children,y),Mt(),rs(void 0,d.update),mt()},be=(d,p,y,R,T,L,N,I,M=!1)=>{const P=d&&d.children,U=d?d.shapeFlag:0,$=p.children,{patchFlag:W,shapeFlag:X}=p;if(W>0){if(W&128){Ae(P,$,y,R,T,L,N,I,M);return}else if(W&256){Se(P,$,y,R,T,L,N,I,M);return}}X&8?(U&16&&O(P,T,L),$!==P&&u(y,$)):U&16?X&16?Ae(P,$,y,R,T,L,N,I,M):O(P,T,L,!0):(U&8&&u(y,""),X&16&&V($,y,R,T,L,N,I,M))},Se=(d,p,y,R,T,L,N,I,M)=>{d=d||Pt,p=p||Pt;const P=d.length,U=p.length,$=Math.min(P,U);let W;for(W=0;W<$;W++){const X=p[W]=M?at(p[W]):Ue(p[W]);g(d[W],X,y,null,T,L,N,I,M)}P>U?O(d,T,L,!0,!1,$):V(p,y,R,T,L,N,I,M,$)},Ae=(d,p,y,R,T,L,N,I,M)=>{let P=0;const U=p.length;let $=d.length-1,W=U-1;for(;P<=$&&P<=W;){const X=d[P],ne=p[P]=M?at(p[P]):Ue(p[P]);if(xt(X,ne))g(X,ne,y,null,T,L,N,I,M);else break;P++}for(;P<=$&&P<=W;){const X=d[$],ne=p[W]=M?at(p[W]):Ue(p[W]);if(xt(X,ne))g(X,ne,y,null,T,L,N,I,M);else break;$--,W--}if(P>$){if(P<=W){const X=W+1,ne=X<U?p[X].el:R;for(;P<=W;)g(null,p[P]=M?at(p[P]):Ue(p[P]),y,ne,T,L,N,I,M),P++}}else if(P>W)for(;P<=$;)ke(d[P],T,L,!0),P++;else{const X=P,ne=P,me=new Map;for(P=ne;P<=W;P++){const Pe=p[P]=M?at(p[P]):Ue(p[P]);Pe.key!=null&&me.set(Pe.key,P)}let ce,fe=0;const $e=W-ne+1;let At=!1,Ts=0;const Zt=new Array($e);for(P=0;P<$e;P++)Zt[P]=0;for(P=X;P<=$;P++){const Pe=d[P];if(fe>=$e){ke(Pe,T,L,!0);continue}let We;if(Pe.key!=null)We=me.get(Pe.key);else for(ce=ne;ce<=W;ce++)if(Zt[ce-ne]===0&&xt(Pe,p[ce])){We=ce;break}We===void 0?ke(Pe,T,L,!0):(Zt[We-ne]=P+1,We>=Ts?Ts=We:At=!0,g(Pe,p[We],y,null,T,L,N,I,M),fe++)}const Rs=At?Zl(Zt):Pt;for(ce=Rs.length-1,P=$e-1;P>=0;P--){const Pe=ne+P,We=p[Pe],As=Pe+1<U?p[Pe+1].el:R;Zt[P]===0?g(null,We,y,As,T,L,N,I,M):At&&(ce<0||P!==Rs[ce]?Me(We,y,As,2):ce--)}}},Me=(d,p,y,R,T=null)=>{const{el:L,type:N,transition:I,children:M,shapeFlag:P}=d;if(P&6){Me(d.component.subTree,p,y,R);return}if(P&128){d.suspense.move(p,y,R);return}if(P&64){N.move(d,p,y,ie);return}if(N===Re){r(L,p,y);for(let $=0;$<M.length;$++)Me(M[$],p,y,R);r(d.anchor,p,y);return}if(N===un){A(d,p,y);return}if(R!==2&&P&1&&I)if(R===0)I.beforeEnter(L),r(L,p,y),Te(()=>I.enter(L),T);else{const{leave:$,delayLeave:W,afterLeave:X}=I,ne=()=>r(L,p,y),me=()=>{$(L,()=>{ne(),X&&X()})};W?W(L,ne,me):me()}else r(L,p,y)},ke=(d,p,y,R=!1,T=!1)=>{const{type:L,props:N,ref:I,children:M,dynamicChildren:P,shapeFlag:U,patchFlag:$,dirs:W}=d;if(I!=null&&Kn(I,null,y,d,!0),U&256){p.ctx.deactivate(d);return}const X=U&1&&W,ne=!qn(d);let me;if(ne&&(me=N&&N.onVnodeBeforeUnmount)&&Fe(me,p,d),U&6)F(d.component,y,R);else{if(U&128){d.suspense.unmount(y,R);return}X&&Ge(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,y,T,ie,R):P&&(L!==Re||$>0&&$&64)?O(P,p,y,!1,!0):(L===Re&&$&(128|256)||!T&&U&16)&&O(M,p,y),R&&Jt(d)}(ne&&(me=N&&N.onVnodeUnmounted)||X)&&Te(()=>{me&&Fe(me,p,d),X&&Ge(d,null,p,"unmounted")},y)},Jt=d=>{const{type:p,el:y,anchor:R,transition:T}=d;if(p===Re){S(y,R);return}if(p===un){H(d);return}const L=()=>{s(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:N,delayLeave:I}=T,M=()=>N(y,L);I?I(d.el,L,M):M()}else L()},S=(d,p)=>{let y;for(;d!==p;)y=f(d),s(d),d=y;s(p)},F=(d,p,y)=>{const{bum:R,scope:T,update:L,subTree:N,um:I}=d;R&&wr(R),T.stop(),L&&(L.active=!1,ke(N,d,p,y)),I&&Te(I,p),Te(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(d,p,y,R=!1,T=!1,L=0)=>{for(let N=L;N<d.length;N++)ke(d[N],p,y,R,T)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),oe=(d,p,y)=>{d==null?p._vnode&&ke(p._vnode,null,null,!0):g(p._vnode||null,d,p,null,null,null,y),tr(),p._vnode=d},ie={p:g,um:ke,m:Me,r:Jt,mt:ae,mc:V,pc:be,pbc:Y,n:B,o:e};let ee,J;return t&&([ee,J]=t(ie)),{render:oe,hydrate:ee,createApp:Yl(oe,ee)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ma(e,t,n=!1){const r=e.children,s=t.children;if(G(r)&&G(s))for(let a=0;a<r.length;a++){const o=r[a];let i=s[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[a]=at(s[a]),i.el=o.el),n||Ma(o,i))}}function Zl(e){const t=e.slice(),n=[0];let r,s,a,o,i;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(a=0,o=n.length-1;a<o;)i=a+o>>1,e[n[i]]<c?a=i+1:o=i;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Ql=e=>e.__isTeleport,Da="components";function ec(e,t){return nc(Da,e,!0,t)||e}const tc=Symbol();function nc(e,t,n=!0,r=!1){const s=Ie||we;if(s){const a=s.type;if(e===Da){const i=mc(a);if(i&&(i===t||i===Ve(t)||i===In(Ve(t))))return a}const o=Na(s[e]||a[e],t)||Na(s.appContext[e],t);return!o&&r?a:o}}function Na(e,t){return e&&(e[t]||e[Ve(t)]||e[In(Ve(t))])}const Re=Symbol(void 0),dn=Symbol(void 0),He=Symbol(void 0),un=Symbol(void 0),fn=[];let wt=null;function _t(e=!1){fn.push(wt=e?null:[])}function rc(){fn.pop(),wt=fn[fn.length-1]||null}let Yn=1;function Ha(e){Yn+=e}function Fa(e){return e.dynamicChildren=Yn>0?wt||Pt:null,rc(),Yn>0&&wt&&wt.push(e),e}function Gn(e,t,n,r,s,a){return Fa(Nt(e,t,n,r,s,a,!0))}function Vr(e,t,n,r,s){return Fa(ge(e,t,n,r,s,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",za=({key:e})=>e!=null?e:null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||Ee(e)||Q(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function Nt(e,t=null,n=null,r=0,s=null,a=e===Re?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&za(t),ref:t&&Zn(t),scopeId:$n,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return i?(Gr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Yn>0&&!o&&wt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&wt.push(l),l}const ge=sc;function sc(e,t=null,n=null,r=0,s=null,a=!1){if((!e||e===tc)&&(e=He),Xn(e)){const i=Ht(e,t,!0);return n&&Gr(i,n),i}if(gc(e)&&(e=e.__vccOpts),t){t=ac(t);let{class:i,style:l}=t;i&&!he(i)&&(t.class=ft(i)),ve(l)&&(na(l)&&!G(l)&&(l=xe({},l)),t.style=Qt(l))}const o=he(e)?1:Cl(e)?128:Ql(e)?64:ve(e)?4:Q(e)?2:0;return Nt(e,t,n,r,s,o,a,!0)}function ac(e){return e?na(e)||Jn in e?xe({},e):e:null}function Ht(e,t,n=!1){const{props:r,ref:s,patchFlag:a,children:o}=e,i=t?oc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&za(i),ref:t&&t.ref?n&&s?G(s)?s.concat(Zn(t)):[s,Zn(t)]:Zn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor}}function Yr(e=" ",t=0){return ge(dn,null,e,t)}function kh(e,t){const n=ge(un,null,e);return n.staticCount=t,n}function Th(e="",t=!1){return t?(_t(),Vr(He,null,e)):ge(He,null,e)}function Ue(e){return e==null||typeof e=="boolean"?ge(He):G(e)?ge(Re,null,e.slice()):typeof e=="object"?at(e):ge(dn,null,String(e))}function at(e){return e.el===null||e.memo?e:Ht(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(r&(1|64)){const s=t.default;s&&(s._c&&(s._d=!1),Gr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Jn in t)?t._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Yr(t)]):n=8);e.children=t,e.shapeFlag|=n}function oc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ft([t.class,r.class]));else if(s==="style")t.style=Qt([t.style,r.style]);else if(en(s)){const a=t[s],o=r[s];a!==o&&!(G(a)&&a.includes(o))&&(t[s]=a?[].concat(a,o):o)}else s!==""&&(t[s]=r[s])}return t}function Fe(e,t,n,r=null){ze(e,t,7,[n,r])}function Rh(e,t,n,r){let s;const a=n&&n[r];if(G(e)||he(e)){s=new Array(e.length);for(let o=0,i=e.length;o<i;o++)s[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,a&&a[o])}else if(ve(e))if(e[Symbol.iterator])s=Array.from(e,(o,i)=>t(o,i,void 0,a&&a[i]));else{const o=Object.keys(e);s=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const c=o[i];s[i]=t(e[c],c,i,a&&a[i])}}else s=[];return n&&(n[r]=s),s}function Ba(e,t,n={},r,s){if(Ie.isCE)return ge("slot",t==="default"?null:{name:t},r&&r());let a=e[t];a&&a._c&&(a._d=!1),_t();const o=a&&$a(a(n)),i=Vr(Re,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function $a(e){return e.some(t=>Xn(t)?!(t.type===He||t.type===Re&&!$a(t.children)):!0)?e:null}const Xr=e=>e?qa(e)?Jr(e)||e.proxy:Xr(e.parent):null,Qn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>_a(e),$forceUpdate:e=>()=>ns(e.update),$nextTick:e=>ts.bind(e.proxy),$watch:e=>xc.bind(e)}),ic={get({_:e},t){const{ctx:n,setupState:r,data:s,props:a,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(r!==de&&re(r,t))return o[t]=1,r[t];if(s!==de&&re(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&re(c,t))return o[t]=3,a[t];if(n!==de&&re(n,t))return o[t]=4,n[t];jr&&(o[t]=0)}}const u=Qn[t];let m,f;if(u)return t==="$attrs"&&Le(e,"get",t),u(e);if((m=i.__cssModules)&&(m=m[t]))return m;if(n!==de&&re(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,re(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:a}=e;if(s!==de&&re(s,t))s[t]=n;else if(r!==de&&re(r,t))r[t]=n;else if(re(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:a}},o){let i;return!!n[o]||e!==de&&re(e,o)||t!==de&&re(t,o)||(i=a[0])&&re(i,o)||re(r,o)||re(Qn,o)||re(s.config.globalProperties,o)}},lc=Ia();let cc=0;function dc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||lc,a={uid:cc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(r,s),emitsOptions:ca(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=yl.bind(null,a),e.ce&&e.ce(a),a}let we=null;const ja=()=>we||Ie,Ft=e=>{we=e,e.scope.on()},Et=()=>{we&&we.scope.off(),we=null};function qa(e){return e.vnode.shapeFlag&4}let hn=!1;function uc(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,s=qa(e);jl(e,n,s,t),Wl(e,r);const a=s?fc(e,t):void 0;return hn=!1,a}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ra(new Proxy(e.ctx,ic));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?pc(e):null;Ft(e),Mt();const a=ot(r,e,0,[e.props,s]);if(mt(),Et(),Ds(a)){if(a.then(Et,Et),t)return a.then(o=>{Ua(e,o,t)}).catch(o=>{pn(o,e,0)});e.asyncDep=a}else Ua(e,a,t)}else Ka(e,t)}function Ua(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=la(t)),Ka(e,n)}let Wa;function Ka(e,t,n){const r=e.type;if(!e.render){if(!t&&Wa&&!r.render){const s=r.template;if(s){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=r,c=xe(xe({isCustomElement:a,delimiters:i},o),l);r.render=Wa(s,c)}}e.render=r.render||je}Ft(e),Mt(),Hl(e),mt(),Et()}function hc(e){return new Proxy(e.attrs,{get(t,n){return Le(e,"get","$attrs"),t[n]}})}function pc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=hc(e))},slots:e.slots,emit:e.emit,expose:t}}function Jr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(la(ra(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)}}))}function mc(e){return Q(e)&&e.displayName||e.name}function gc(e){return Q(e)&&"__vccOpts"in e}function ot(e,t,n,r){let s;try{s=r?e(...r):e()}catch(a){pn(a,t,n)}return s}function ze(e,t,n,r){if(Q(e)){const a=ot(e,t,n,r);return a&&Ds(a)&&a.catch(o=>{pn(o,t,n)}),a}const s=[];for(let a=0;a<e.length;a++)s.push(ze(e[a],t,n,r));return s}function pn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,i=n;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,i)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,i]);return}}vc(e,n,s,r)}function vc(e,t,n,r=!0){console.error(e)}let er=!1,Zr=!1;const Oe=[];let et=0;const mn=[];let gn=null,zt=0;const vn=[];let it=null,Bt=0;const Va=Promise.resolve();let Qr=null,es=null;function ts(e){const t=Qr||Va;return e?t.then(this?e.bind(this):e):t}function yc(e){let t=et+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;yn(Oe[r])<e?t=r+1:n=r}return t}function ns(e){(!Oe.length||!Oe.includes(e,er&&e.allowRecurse?et+1:et))&&e!==es&&(e.id==null?Oe.push(e):Oe.splice(yc(e.id),0,e),Ya())}function Ya(){!er&&!Zr&&(Zr=!0,Qr=Va.then(Xa))}function bc(e){const t=Oe.indexOf(e);t>et&&Oe.splice(t,1)}function Ga(e,t,n,r){G(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ya()}function wc(e){Ga(e,gn,mn,zt)}function _c(e){Ga(e,it,vn,Bt)}function rs(e,t=null){if(mn.length){for(es=t,gn=[...new Set(mn)],mn.length=0,zt=0;zt<gn.length;zt++)gn[zt]();gn=null,zt=0,es=null,rs(e,t)}}function tr(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,it){it.push(...t);return}for(it=t,it.sort((n,r)=>yn(n)-yn(r)),Bt=0;Bt<it.length;Bt++)it[Bt]();it=null,Bt=0}}const yn=e=>e.id==null?1/0:e.id;function Xa(e){Zr=!1,er=!0,rs(e),Oe.sort((n,r)=>yn(n)-yn(r));const t=je;try{for(et=0;et<Oe.length;et++){const n=Oe[et];n&&n.active!==!1&&ot(n,null,14)}}finally{et=0,Oe.length=0,tr(),er=!1,Qr=null,(Oe.length||mn.length||vn.length)&&Xa(e)}}const Ja={};function Xe(e,t,n){return Za(e,t,n)}function Za(e,t,{immediate:n,deep:r,flush:s,onTrack:a,onTrigger:o}=de){const i=we;let l,c=!1,u=!1;if(Ee(e)?(l=()=>e.value,c=!!e._shallow):Dt(e)?(l=()=>e,r=!0):G(e)?(u=!0,c=e.some(Dt),l=()=>e.map(v=>{if(Ee(v))return v.value;if(Dt(v))return St(v);if(Q(v))return ot(v,i,2)})):Q(e)?t?l=()=>ot(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),ze(e,i,3,[f])}:l=je,t&&r){const v=l;l=()=>St(v())}let m,f=v=>{m=g.onStop=()=>{ot(v,i,4)}};if(hn)return f=je,t?n&&ze(t,i,3,[l(),u?[]:void 0,f]):l(),je;let w=u?[]:Ja;const h=()=>{if(!!g.active)if(t){const v=g.run();(r||c||(u?v.some((x,C)=>nn(x,w[C])):nn(v,w)))&&(m&&m(),ze(t,i,3,[v,w===Ja?void 0:w,f]),w=v)}else g.run()};h.allowRecurse=!!t;let b;s==="sync"?b=h:s==="post"?b=()=>Te(h,i&&i.suspense):b=()=>{!i||i.isMounted?wc(h):h()};const g=new Cr(l,b);return t?n?h():w=g.run():s==="post"?Te(g.run.bind(g),i&&i.suspense):g.run(),()=>{g.stop(),i&&i.scope&&gr(i.scope.effects,g)}}function xc(e,t,n){const r=this.proxy,s=he(e)?e.includes(".")?Qa(r,e):()=>r[e]:e.bind(r,r);let a;Q(t)?a=t:(a=t.handler,n=t);const o=we;Ft(this);const i=Za(s,a.bind(r),n);return o?Ft(o):Et(),i}function Qa(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function St(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))St(e.value,t);else if(G(e))for(let n=0;n<e.length;n++)St(e[n],t);else if(Ms(e)||Lt(e))e.forEach(n=>{St(n,t)});else if(Hs(e))for(const n in e)St(e[n],t);return e}function le(e,t,n){const r=arguments.length;return r===2?ve(t)&&!G(t)?Xn(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),ge(e,t,n))}const Ec="3.2.26",Sc="http://www.w3.org/2000/svg",$t=typeof document!="undefined"?document:null,eo=new Map,Cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?$t.createElementNS(Sc,e):$t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>$t.createTextNode(e),createComment:e=>$t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const s=n?n.previousSibling:t.lastChild;let a=eo.get(e);if(!a){const o=$t.createElement("template");if(o.innerHTML=r?`<svg>${e}</svg>`:e,a=o.content,r){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}eo.set(e,a)}return t.insertBefore(a.cloneNode(!0),n),[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function kc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Tc(e,t,n){const r=e.style,s=he(n);if(n&&!s){for(const a in n)ss(r,a,n[a]);if(t&&!he(t))for(const a in t)n[a]==null&&ss(r,a,"")}else{const a=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const to=/\s*!important$/;function ss(e,t,n){if(G(n))n.forEach(r=>ss(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Rc(e,t);to.test(n)?e.setProperty(It(r),n.replace(to,""),"important"):e[r]=n}}const no=["Webkit","Moz","ms"],as={};function Rc(e,t){const n=as[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return as[t]=r;r=In(r);for(let s=0;s<no.length;s++){const a=no[s]+r;if(a in e)return as[t]=a}return t}const ro="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ro,t.slice(6,t.length)):e.setAttributeNS(ro,t,n);else{const a=Si(t);n==null||a&&!Is(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Pc(e,t,n,r,s,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n==null?"":n;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const i=typeof e[t];if(i==="boolean"){e[t]=Is(n);return}else if(n==null&&i==="string"){e[t]="",e.removeAttribute(t);return}else if(i==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let nr=Date.now,so=!1;if(typeof window!="undefined"){nr()>document.createEvent("Event").timeStamp&&(nr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);so=!!(e&&Number(e[1])<=53)}let os=0;const Lc=Promise.resolve(),Ic=()=>{os=0},Oc=()=>os||(Lc.then(Ic),os=nr());function Mc(e,t,n,r){e.addEventListener(t,n,r)}function Dc(e,t,n,r){e.removeEventListener(t,n,r)}function Nc(e,t,n,r,s=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[i,l]=Hc(t);if(r){const c=a[t]=Fc(r,s);Mc(e,i,c,l)}else o&&(Dc(e,i,o,l),a[t]=void 0)}}const ao=/(?:Once|Passive|Capture)$/;function Hc(e){let t;if(ao.test(e)){t={};let n;for(;n=e.match(ao);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[It(e.slice(2)),t]}function Fc(e,t){const n=r=>{const s=r.timeStamp||nr();(so||s>=n.attached-1)&&ze(zc(r,n.value),t,5,[r])};return n.value=e,n.attached=Oc(),n}function zc(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r(s))}else return t}const oo=/^on[a-z]/,Bc=(e,t,n,r,s=!1,a,o,i,l)=>{t==="class"?kc(e,r,s):t==="style"?Tc(e,n,r):en(t)?mr(t)||Nc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$c(e,t,r,s))?Pc(e,t,r,a,o,i,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,s))};function $c(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oo.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oo.test(t)&&he(n)?!1:t in e}const lt="transition",bn="animation",is=(e,{slots:t})=>le(ha,jc(e),t);is.displayName="Transition";const io={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};is.props=xe({},ha.props,io);const Ct=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},lo=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function jc(e){const t={};for(const _ in e)_ in io||(t[_]=e[_]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:c=o,appearToClass:u=i,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,h=qc(s),b=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:C,onLeave:A,onLeaveCancelled:H,onBeforeAppear:z=v,onAppear:k=x,onAppearCancelled:E=C}=t,V=(_,D,K)=>{jt(_,D?u:i),jt(_,D?c:o),K&&K()},q=(_,D)=>{jt(_,w),jt(_,f),D&&D()},Y=_=>(D,K)=>{const ae=_?k:x,j=()=>V(D,_,K);Ct(ae,[D,j]),co(()=>{jt(D,_?l:a),ct(D,_?u:i),lo(ae)||uo(D,r,b,j)})};return xe(t,{onBeforeEnter(_){Ct(v,[_]),ct(_,a),ct(_,o)},onBeforeAppear(_){Ct(z,[_]),ct(_,l),ct(_,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(_,D){const K=()=>q(_,D);ct(_,m),Kc(),ct(_,f),co(()=>{jt(_,m),ct(_,w),lo(A)||uo(_,r,g,K)}),Ct(A,[_,K])},onEnterCancelled(_){V(_,!1),Ct(C,[_])},onAppearCancelled(_){V(_,!0),Ct(E,[_])},onLeaveCancelled(_){q(_),Ct(H,[_])}})}function qc(e){if(e==null)return null;if(ve(e))return[ls(e.enter),ls(e.leave)];{const t=ls(e);return[t,t]}}function ls(e){return Fs(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uc=0;function uo(e,t,n,r){const s=e._endId=++Uc,a=()=>{s===e._endId&&r()};if(n)return setTimeout(a,n);const{type:o,timeout:i,propCount:l}=Wc(e,t);if(!o)return r();const c=o+"end";let u=0;const m=()=>{e.removeEventListener(c,f),a()},f=w=>{w.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},i+1),e.addEventListener(c,f)}function Wc(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),s=r(lt+"Delay"),a=r(lt+"Duration"),o=fo(s,a),i=r(bn+"Delay"),l=r(bn+"Duration"),c=fo(i,l);let u=null,m=0,f=0;t===lt?o>0&&(u=lt,m=o,f=a.length):t===bn?c>0&&(u=bn,m=c,f=l.length):(m=Math.max(o,c),u=m>0?o>c?lt:bn:null,f=u?u===lt?a.length:l.length:0);const w=u===lt&&/\b(transform|all)(,|$)/.test(n[lt+"Property"]);return{type:u,timeout:m,propCount:f,hasTransform:w}}function fo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ho(n)+ho(e[r])))}function ho(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Kc(){return document.body.offsetHeight}const Ah={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):wn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),wn(e,!0),r.enter(e)):r.leave(e,()=>{wn(e,!1)}):wn(e,t))},beforeUnmount(e,{value:t}){wn(e,t)}};function wn(e,t){e.style.display=t?e._vod:"none"}const po=xe({patchProp:Bc},Cc);let _n,mo=!1;function Vc(){return _n||(_n=Xl(po))}function Yc(){return _n=mo?_n:Jl(po),mo=!0,_n}const Gc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=go(r);if(!s)return;const a=t._component;!Q(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},Xc=(...e)=>{const t=Yc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=go(r);if(s)return n(s,!0,s instanceof SVGElement)},t};function go(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const vo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qt=e=>vo?Symbol(e):"_vr_"+e,Jc=qt("rvlm"),yo=qt("rvd"),rr=qt("r"),cs=qt("rl"),ds=qt("rvl"),Ut=typeof window!="undefined";function Zc(e){return e.__esModule||vo&&e[Symbol.toStringTag]==="Module"}const ue=Object.assign;function us(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const xn=()=>{},Qc=/\/$/,ed=e=>e.replace(Qc,"");function fs(e,t,n="/"){let r,s={},a="",o="";const i=t.indexOf("?"),l=t.indexOf("#",i>-1?i:0);return i>-1&&(r=t.slice(0,i),a=t.slice(i+1,l>-1?l:t.length),s=e(a)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=sd(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:s,hash:o}}function td(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nd(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wt(t.matched[r],n.matched[s])&&wo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rd(e[n],t[n]))return!1;return!0}function rd(e,t){return Array.isArray(e)?_o(e,t):Array.isArray(t)?_o(t,e):e===t}function _o(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function sd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var Sn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Sn||(Sn={}));function ad(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ed(e)}const od=/^[^#]+#/;function id(e,t){return e.replace(od,"#")+t}function ld(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function cd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ld(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xo(e,t){return(history.state?history.state.position-t:-1)+e}const hs=new Map;function dd(e,t){hs.set(e,t)}function ud(e){const t=hs.get(e);return hs.delete(e),t}let fd=()=>location.protocol+"//"+location.host;function Eo(e,t){const{pathname:n,search:r,hash:s}=t,a=e.indexOf("#");if(a>-1){let i=s.includes(e.slice(a))?e.slice(a).length:1,l=s.slice(i);return l[0]!=="/"&&(l="/"+l),bo(l,"")}return bo(n,e)+r+s}function hd(e,t,n,r){let s=[],a=[],o=null;const i=({state:f})=>{const w=Eo(e,location),h=n.value,b=t.value;let g=0;if(f){if(n.value=w,t.value=f,o&&o===h){o=null;return}g=b?f.position-b.position:0}else r(w);s.forEach(v=>{v(n.value,h,{delta:g,type:En.pop,direction:g?g>0?Sn.forward:Sn.back:Sn.unknown})})};function l(){o=n.value}function c(f){s.push(f);const w=()=>{const h=s.indexOf(f);h>-1&&s.splice(h,1)};return a.push(w),w}function u(){const{history:f}=window;!f.state||f.replaceState(ue({},f.state,{scroll:sr()}),"")}function m(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:m}}function So(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?sr():null}}function pd(e){const{history:t,location:n}=window,r={value:Eo(e,n)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,c,u){const m=e.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:fd()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(w){console.error(w),n[u?"replace":"assign"](f)}}function o(l,c){const u=ue({},t.state,So(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});a(l,u,!0),r.value=l}function i(l,c){const u=ue({},s.value,t.state,{forward:l,scroll:sr()});a(u.current,u,!0);const m=ue({},So(r.value,l,null),{position:u.position+1},c);a(l,m,!1),r.value=l}return{location:r,state:s,push:i,replace:o}}function md(e){e=ad(e);const t=pd(e),n=hd(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const s=ue({location:"",base:e,go:r,createHref:id.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function gd(e){return typeof e=="string"||e&&typeof e=="object"}function Co(e){return typeof e=="string"||typeof e=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ko=qt("nf");var To;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(To||(To={}));function Kt(e,t){return ue(new Error,{type:e,[ko]:!0},t)}function kt(e,t){return e instanceof Error&&ko in e&&(t==null||!!(e.type&t))}const Ro="[^/]+?",vd={sensitive:!1,strict:!1,start:!0,end:!0},yd=/[.+*?^${}()[\]/\\]/g;function bd(e,t){const n=ue({},vd,t),r=[];let s=n.start?"^":"";const a=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let m=0;m<c.length;m++){const f=c[m];let w=40+(n.sensitive?.25:0);if(f.type===0)m||(s+="/"),s+=f.value.replace(yd,"\\$&"),w+=40;else if(f.type===1){const{value:h,repeatable:b,optional:g,regexp:v}=f;a.push({name:h,repeatable:b,optional:g});const x=v||Ro;if(x!==Ro){w+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+A.message)}}let C=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(C=g&&c.length<2?`(?:/${C})`:"/"+C),g&&(C+="?"),s+=C,w+=20,g&&(w+=-8),b&&(w+=-20),x===".*"&&(w+=-50)}u.push(w)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function i(c){const u=c.match(o),m={};if(!u)return null;for(let f=1;f<u.length;f++){const w=u[f]||"",h=a[f-1];m[h.name]=w&&h.repeatable?w.split("/"):w}return m}function l(c){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const w of f)if(w.type===0)u+=w.value;else if(w.type===1){const{value:h,repeatable:b,optional:g}=w,v=h in c?c[h]:"";if(Array.isArray(v)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(v)?v.join("/"):v;if(!x)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${h}"`);u+=x}}return u}return{re:o,score:r,keys:a,parse:i,stringify:l}}function wd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _d(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const a=wd(r[n],s[n]);if(a)return a;n++}return s.length-r.length}const xd={type:0,value:""},Ed=/[a-zA-Z0-9_]/;function Sd(e){if(!e)return[[]];if(e==="/")return[[xd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${c}": ${w}`)}let n=0,r=n;const s=[];let a;function o(){a&&s.push(a),a=[]}let i=0,l,c="",u="";function m(){!c||(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&m(),o()):l===":"?(m(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Ed.test(l)?f():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),m(),o(),s}function Cd(e,t,n){const r=bd(Sd(e.path),n),s=ue(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function kd(e,t){const n=[],r=new Map;t=Po({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function a(u,m,f){const w=!f,h=Rd(u);h.aliasOf=f&&f.record;const b=Po(t,u),g=[h];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of C)g.push(ue({},h,{components:f?f.record.components:h.components,path:A,aliasOf:f?f.record:h}))}let v,x;for(const C of g){const{path:A}=C;if(m&&A[0]!=="/"){const H=m.record.path,z=H[H.length-1]==="/"?"":"/";C.path=m.record.path+(A&&z+A)}if(v=Cd(C,m,b),f?f.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),w&&u.name&&!Ao(v)&&o(u.name)),"children"in h){const H=h.children;for(let z=0;z<H.length;z++)a(H[z],v,f&&f.children[z])}f=f||v,l(v)}return x?()=>{o(x)}:xn}function o(u){if(Co(u)){const m=r.get(u);m&&(r.delete(u),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(u);m>-1&&(n.splice(m,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return n}function l(u){let m=0;for(;m<n.length&&_d(u,n[m])>=0;)m++;n.splice(m,0,u),u.record.name&&!Ao(u)&&r.set(u.record.name,u)}function c(u,m){let f,w={},h,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Kt(1,{location:u});b=f.record.name,w=ue(Td(m.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),h=f.stringify(w)}else if("path"in u)h=u.path,f=n.find(x=>x.re.test(h)),f&&(w=f.parse(h),b=f.record.name);else{if(f=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!f)throw Kt(1,{location:u,currentLocation:m});b=f.record.name,w=ue({},m.params,u.params),h=f.stringify(w)}const g=[];let v=f;for(;v;)g.unshift(v.record),v=v.parent;return{name:b,path:h,params:w,matched:g,meta:Pd(g)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:c,removeRoute:o,getRoutes:i,getRecordMatcher:s}}function Td(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Rd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ad(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Ad(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ao(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pd(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function Po(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Lo=/#/g,Ld=/&/g,Id=/\//g,Od=/=/g,Md=/\?/g,Io=/\+/g,Dd=/%5B/g,Nd=/%5D/g,Oo=/%5E/g,Hd=/%60/g,Mo=/%7B/g,Fd=/%7C/g,Do=/%7D/g,zd=/%20/g;function ps(e){return encodeURI(""+e).replace(Fd,"|").replace(Dd,"[").replace(Nd,"]")}function Bd(e){return ps(e).replace(Mo,"{").replace(Do,"}").replace(Oo,"^")}function ms(e){return ps(e).replace(Io,"%2B").replace(zd,"+").replace(Lo,"%23").replace(Ld,"%26").replace(Hd,"`").replace(Mo,"{").replace(Do,"}").replace(Oo,"^")}function $d(e){return ms(e).replace(Od,"%3D")}function jd(e){return ps(e).replace(Lo,"%23").replace(Md,"%3F")}function qd(e){return e==null?"":jd(e).replace(Id,"%2F")}function ar(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ud(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(Io," "),o=a.indexOf("="),i=ar(o<0?a:a.slice(0,o)),l=o<0?null:ar(a.slice(o+1));if(i in t){let c=t[i];Array.isArray(c)||(c=t[i]=[c]),c.push(l)}else t[i]=l}return t}function No(e){let t="";for(let n in e){const r=e[n];if(n=$d(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(a=>a&&ms(a)):[r&&ms(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Wd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function Cn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,s){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,i)=>{const l=m=>{m===!1?i(Kt(4,{from:n,to:t})):m instanceof Error?i(m):gd(m)?i(Kt(2,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),o())},c=e.call(r&&r.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(m=>i(m))})}function gs(e,t,n,r){const s=[];for(const a of e)for(const o in a.components){let i=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(Kd(i)){const c=(i.__vccOpts||i)[t];c&&s.push(dt(c,n,r,a,o))}else{let l=i();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const u=Zc(c)?c.default:c;a.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&dt(f,n,r,a,o)()}))}}return s}function Kd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ho(e){const t=_e(rr),n=_e(cs),r=pe(()=>t.resolve(Ze(e.to))),s=pe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],m=n.matched;if(!u||!m.length)return-1;const f=m.findIndex(Wt.bind(null,u));if(f>-1)return f;const w=Fo(l[c-2]);return c>1&&Fo(u)===w&&m[m.length-1].path!==w?m.findIndex(Wt.bind(null,l[c-2])):f}),a=pe(()=>s.value>-1&&Xd(n.params,r.value.params)),o=pe(()=>s.value>-1&&s.value===n.matched.length-1&&wo(n.params,r.value.params));function i(l={}){return Gd(l)?t[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(xn):Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:a,isExactActive:o,navigate:i}}const Vd=Ne({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ho,setup(e,{slots:t}){const n=an(Ho(e)),{options:r}=_e(rr),s=pe(()=>({[zo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:le("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),Yd=Vd;function Gd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xd(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((a,o)=>a!==s[o]))return!1}return!0}function Fo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zo=(e,t,n)=>e!=null?e:t!=null?t:n,Jd=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=_e(ds),s=pe(()=>e.route||r.value),a=_e(yo,0),o=pe(()=>s.value.matched[a]);gt(yo,a+1),gt(Jc,o),gt(ds,s);const i=ye();return Xe(()=>[i.value,o.value,e.name],([l,c,u],[m,f,w])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===m&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Wt(c,f)||!m)&&(c.enterCallbacks[u]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=s.value,c=o.value,u=c&&c.components[e.name],m=e.name;if(!u)return Bo(n.default,{Component:u,route:l});const f=c.props[e.name],w=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=le(u,ue({},w,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(c.instances[m]=null)},ref:i}));return Bo(n.default,{Component:b,route:l})||b}}});function Bo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const $o=Jd;function Zd(e){const t=kd(e.routes,e),n=e.parseQuery||Ud,r=e.stringifyQuery||No,s=e.history,a=Cn(),o=Cn(),i=Cn(),l=oa(tt);let c=tt;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=us.bind(null,S=>""+S),m=us.bind(null,qd),f=us.bind(null,ar);function w(S,F){let O,B;return Co(S)?(O=t.getRecordMatcher(S),B=F):B=S,t.addRoute(B,O)}function h(S){const F=t.getRecordMatcher(S);F&&t.removeRoute(F)}function b(){return t.getRoutes().map(S=>S.record)}function g(S){return!!t.getRecordMatcher(S)}function v(S,F){if(F=ue({},F||l.value),typeof S=="string"){const J=fs(n,S,F.path),d=t.resolve({path:J.path},F),p=s.createHref(J.fullPath);return ue(J,d,{params:f(d.params),hash:ar(J.hash),redirectedFrom:void 0,href:p})}let O;if("path"in S)O=ue({},S,{path:fs(n,S.path,F.path).path});else{const J=ue({},S.params);for(const d in J)J[d]==null&&delete J[d];O=ue({},S,{params:m(S.params)}),F.params=m(F.params)}const B=t.resolve(O,F),oe=S.hash||"";B.params=u(f(B.params));const ie=td(r,ue({},S,{hash:Bd(oe),path:B.path})),ee=s.createHref(ie);return ue({fullPath:ie,hash:oe,query:r===No?Wd(S.query):S.query||{}},B,{redirectedFrom:void 0,href:ee})}function x(S){return typeof S=="string"?fs(n,S,l.value.path):ue({},S)}function C(S,F){if(c!==S)return Kt(8,{from:F,to:S})}function A(S){return k(S)}function H(S){return A(ue(x(S),{replace:!0}))}function z(S){const F=S.matched[S.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let B=typeof O=="function"?O(S):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=x(B):{path:B},B.params={}),ue({query:S.query,hash:S.hash,params:S.params},B)}}function k(S,F){const O=c=v(S),B=l.value,oe=S.state,ie=S.force,ee=S.replace===!0,J=z(O);if(J)return k(ue(x(J),{state:oe,force:ie,replace:ee}),F||O);const d=O;d.redirectedFrom=F;let p;return!ie&&nd(r,B,O)&&(p=Kt(16,{to:d,from:B}),Se(B,B,!0,!1)),(p?Promise.resolve(p):V(d,B)).catch(y=>kt(y)?y:Z(y,d,B)).then(y=>{if(y){if(kt(y,2))return k(ue(x(y.to),{state:oe,force:ie,replace:ee}),F||d)}else y=Y(d,B,!0,ee,oe);return q(d,B,y),y})}function E(S,F){const O=C(S,F);return O?Promise.reject(O):Promise.resolve()}function V(S,F){let O;const[B,oe,ie]=Qd(S,F);O=gs(B.reverse(),"beforeRouteLeave",S,F);for(const J of B)J.leaveGuards.forEach(d=>{O.push(dt(d,S,F))});const ee=E.bind(null,S,F);return O.push(ee),Vt(O).then(()=>{O=[];for(const J of a.list())O.push(dt(J,S,F));return O.push(ee),Vt(O)}).then(()=>{O=gs(oe,"beforeRouteUpdate",S,F);for(const J of oe)J.updateGuards.forEach(d=>{O.push(dt(d,S,F))});return O.push(ee),Vt(O)}).then(()=>{O=[];for(const J of S.matched)if(J.beforeEnter&&!F.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)O.push(dt(d,S,F));else O.push(dt(J.beforeEnter,S,F));return O.push(ee),Vt(O)}).then(()=>(S.matched.forEach(J=>J.enterCallbacks={}),O=gs(ie,"beforeRouteEnter",S,F),O.push(ee),Vt(O))).then(()=>{O=[];for(const J of o.list())O.push(dt(J,S,F));return O.push(ee),Vt(O)}).catch(J=>kt(J,8)?J:Promise.reject(J))}function q(S,F,O){for(const B of i.list())B(S,F,O)}function Y(S,F,O,B,oe){const ie=C(S,F);if(ie)return ie;const ee=F===tt,J=Ut?history.state:{};O&&(B||ee?s.replace(S.fullPath,ue({scroll:ee&&J&&J.scroll},oe)):s.push(S.fullPath,oe)),l.value=S,Se(S,F,O,ee),be()}let _;function D(){_=s.listen((S,F,O)=>{const B=v(S),oe=z(B);if(oe){k(ue(oe,{replace:!0}),B).catch(xn);return}c=B;const ie=l.value;Ut&&dd(xo(ie.fullPath,O.delta),sr()),V(B,ie).catch(ee=>kt(ee,4|8)?ee:kt(ee,2)?(k(ee.to,B).then(J=>{kt(J,4|16)&&!O.delta&&O.type===En.pop&&s.go(-1,!1)}).catch(xn),Promise.reject()):(O.delta&&s.go(-O.delta,!1),Z(ee,B,ie))).then(ee=>{ee=ee||Y(B,ie,!1),ee&&(O.delta?s.go(-O.delta,!1):O.type===En.pop&&kt(ee,4|16)&&s.go(-1,!1)),q(B,ie,ee)}).catch(xn)})}let K=Cn(),ae=Cn(),j;function Z(S,F,O){be(S);const B=ae.list();return B.length?B.forEach(oe=>oe(S,F,O)):console.error(S),Promise.reject(S)}function te(){return j&&l.value!==tt?Promise.resolve():new Promise((S,F)=>{K.add([S,F])})}function be(S){j||(j=!0,D(),K.list().forEach(([F,O])=>S?O(S):F()),K.reset())}function Se(S,F,O,B){const{scrollBehavior:oe}=e;if(!Ut||!oe)return Promise.resolve();const ie=!O&&ud(xo(S.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return ts().then(()=>oe(S,F,ie)).then(ee=>ee&&cd(ee)).catch(ee=>Z(ee,S,F))}const Ae=S=>s.go(S);let Me;const ke=new Set;return{currentRoute:l,addRoute:w,removeRoute:h,hasRoute:g,getRoutes:b,resolve:v,options:e,push:A,replace:H,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:a.add,beforeResolve:o.add,afterEach:i.add,onError:ae.add,isReady:te,install(S){const F=this;S.component("RouterLink",Yd),S.component("RouterView",$o),S.config.globalProperties.$router=F,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(l)}),Ut&&!Me&&l.value===tt&&(Me=!0,A(s.location).catch(oe=>{}));const O={};for(const oe in tt)O[oe]=pe(()=>l.value[oe]);S.provide(rr,F),S.provide(cs,an(O)),S.provide(ds,l);const B=S.unmount;ke.add(S),S.unmount=function(){ke.delete(S),ke.size<1&&(c=tt,_&&_(),l.value=tt,Me=!1,j=!1),B()}}}}function Vt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Qd(e,t){const n=[],r=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const i=t.matched[o];i&&(e.matched.find(c=>Wt(c,i))?r.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Wt(c,l))||s.push(l))}return[n,r,s]}function or(){return _e(rr)}function vs(){return _e(cs)}const eu=Ne({setup(e,t){const n=ye(!1);return qe(()=>{n.value=!0}),()=>{var r,s;return n.value?(s=(r=t.slots).default)===null||s===void 0?void 0:s.call(r):null}}}),tu="modulepreload",jo={},nu="/docstest.github.io/",Be=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${nu}${r}`,r in jo)return;jo[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":tu,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((i,l)=>{o.addEventListener("load",i),o.addEventListener("error",l)})})).then(()=>t())},qo={"v-8daa1a0e":vt(()=>Be(()=>import("./index.html.76acaaa2.js"),[])),"v-77f0ef68":vt(()=>Be(()=>import("./index.html.58b532c6.js"),[])),"v-1c385113":vt(()=>Be(()=>import("./index.html.03819b62.js"),[])),"v-37b893e5":vt(()=>Be(()=>import("./index.html.c5c51227.js"),[])),"v-3706649a":vt(()=>Be(()=>import("./404.html.68507e42.js"),[]))},ru={"v-8daa1a0e":()=>Be(()=>import("./index.html.40fda39a.js"),[]).then(({data:e})=>e),"v-77f0ef68":()=>Be(()=>import("./index.html.cb152c7d.js"),[]).then(({data:e})=>e),"v-1c385113":()=>Be(()=>import("./index.html.56a3a1b8.js"),[]).then(({data:e})=>e),"v-37b893e5":()=>Be(()=>import("./index.html.c87db889.js"),[]).then(({data:e})=>e),"v-3706649a":()=>Be(()=>import("./404.html.e275e9a9.js"),[]).then(({data:e})=>e)},Uo=ye(ru),ys=Lr({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),ut=ye(ys),Yt=()=>ut,su=async e=>{const t=Uo.value[e];if(!t)return ys;const n=await t();return n!=null?n:ys};fr.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=e=>{Uo.value[e.key]=()=>Promise.resolve(e),e.key===ut.value.key&&(ut.value=e)});const Wo=Symbol(""),au=()=>{const e=_e(Wo);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},ou=e=>e.frontmatter,iu=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),lu=e=>{const t=new Set,n=[];return e.forEach(r=>{const s=iu(r);t.has(s)||(t.add(s),n.push(r))}),n},cu=e=>/^(https?:)?\/\//.test(e),Ph=e=>/^mailto:/.test(e),Lh=e=>/^tel:/.test(e),Ko=e=>Object.prototype.toString.call(e)==="[object Object]",du=e=>e.replace(/\/$/,""),uu=e=>e.replace(/^\//,""),Vo=(e,t)=>{const n=Object.keys(e).sort((r,s)=>{const a=s.split("/").length-r.split("/").length;return a!==0?a:s.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"},Yo=Symbol(""),fu=()=>{const e=_e(Yo);if(!e)throw new Error("usePageHead() is called without provider.");return e},hu=(e,t,n)=>{const r=he(t.description)?t.description:n.description,s=[...G(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return lu(s)},pu=Symbol(""),mu=(e,t)=>`${e.title?`${e.title} | `:""}${t.title}`,Go=Symbol(""),gu=()=>{const e=_e(Go);if(!e)throw new Error("usePageLang() is called without provider.");return e},vu=e=>e.lang||"en",bs=Symbol(""),yu=()=>{const e=_e(bs);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},bu=(e,t)=>Vo(e,t),wu={base:"/docstest.github.io/",lang:"en-US",title:"Stata2R",description:"",head:[["link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}]],locales:{}},Tt=ye(wu),_u=()=>Tt;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=e=>{Tt.value=e});const Xo=Symbol(""),Ih=()=>{const e=_e(Xo);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},xu=(e,t)=>Ke(Ke({},e),e.locales[t]),Eu=Symbol(""),Su=()=>{const e=vs(),t=fu(),n=gu(),r=ye([]),s=()=>{t.value.forEach(o=>{const i=Cu(o);i&&r.value.push(i)})},a=()=>{document.documentElement.lang=n.value,r.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),r.value.splice(0,r.value.length),t.value.forEach(o=>{const i=ku(o);i!==null&&(document.head.appendChild(i),r.value.push(i))})};gt(Eu,a),qe(()=>{s(),a(),Xe(()=>e.path,()=>a())})},Cu=([e,t,n=""])=>{const r=Object.entries(t).map(([i,l])=>he(l)?`[${i}="${l}"]`:l===!0?`[${i}]`:"").join(""),s=`head > ${e}${r}`;return Array.from(document.querySelectorAll(s)).find(i=>i.innerText===n)||null},ku=([e,t,n])=>{if(!he(e))return null;const r=document.createElement(e);return Ko(t)&&Object.entries(t).forEach(([s,a])=>{he(a)?r.setAttribute(s,a):a===!0&&r.setAttribute(s,"")}),he(n)&&r.appendChild(document.createTextNode(n)),r},ws=e=>{let t;e.pageKey?t=e.pageKey:t=Yt().value.key;const n=qo[t];return n?le(n):le("div","404 Not Found")};ws.displayName="Content";ws.props={pageKey:{type:String,required:!1}};const Tu={"404":vt(()=>Be(()=>import("./404.595b8ba4.js"),[])),Layout:vt(()=>Be(()=>import("./Layout.b02ae4fd.js"),[]))},Jo=Ne({name:"Vuepress",setup(){const e=Yt(),t=pe(()=>{let n;if(e.value.path){const r=e.value.frontmatter.layout;he(r)?n=r:n="Layout"}else n="404";return Tu[n]||ec(n,!1)});return()=>le(t.value)}}),Gt=e=>e,ir=e=>e,Ru=e=>cu(e)?e:`${_u().value.base}${uu(e)}`;const Au=le("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[le("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),le("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),_s=(e,{slots:t})=>{var n;return le("span",[Au,(n=t.default)===null||n===void 0?void 0:n.call(t)])};_s.displayName="ExternalLinkIcon";var Pu=Gt(({app:e})=>{e.component("ExternalLinkIcon",_s)});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr=function(t){return t.tagName==="IMG"},Lu=function(t){return NodeList.prototype.isPrototypeOf(t)},cr=function(t){return t&&t.nodeType===1},Zo=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Qo=function(t){try{return Array.isArray(t)?t.filter(lr):Lu(t)?[].slice.call(t).filter(lr):cr(t)?[t].filter(lr):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(lr):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Iu=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Ou=function(t){var n=t.getBoundingClientRect(),r=n.top,s=n.left,a=n.width,o=n.height,i=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=r+l+"px",i.style.left=s+c+"px",i.style.width=a+"px",i.style.height=o+"px",i.style.transform="",i},Xt=function(t,n){var r=Rt({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,r);var s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s},Mu=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(_){function D(){}_(D,D)},s=function(_){var D=_.target;if(D===V){h();return}C.indexOf(D)!==-1&&b({target:D})},a=function(){if(!(H||!E.original)){var _=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(z-_)>k.scrollOffset&&setTimeout(h,150)}},o=function(_){var D=_.key||_.keyCode;(D==="Escape"||D==="Esc"||D===27)&&h()},i=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_;if(_.background&&(V.style.background=_.background),_.container&&_.container instanceof Object&&(D.container=Rt({},k.container,_.container)),_.template){var K=cr(_.template)?_.template:document.querySelector(_.template);D.template=K}return k=Rt({},k,D),C.forEach(function(ae){ae.dispatchEvent(Xt("medium-zoom:update",{detail:{zoom:q}}))}),q},l=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Rt({},k,_))},c=function(){for(var _=arguments.length,D=Array(_),K=0;K<_;K++)D[K]=arguments[K];var ae=D.reduce(function(j,Z){return[].concat(j,Qo(Z))},[]);return ae.filter(function(j){return C.indexOf(j)===-1}).forEach(function(j){C.push(j),j.classList.add("medium-zoom-image")}),A.forEach(function(j){var Z=j.type,te=j.listener,be=j.options;ae.forEach(function(Se){Se.addEventListener(Z,te,be)})}),q},u=function(){for(var _=arguments.length,D=Array(_),K=0;K<_;K++)D[K]=arguments[K];E.zoomed&&h();var ae=D.length>0?D.reduce(function(j,Z){return[].concat(j,Qo(Z))},[]):C;return ae.forEach(function(j){j.classList.remove("medium-zoom-image"),j.dispatchEvent(Xt("medium-zoom:detach",{detail:{zoom:q}}))}),C=C.filter(function(j){return ae.indexOf(j)===-1}),q},m=function(_,D){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C.forEach(function(ae){ae.addEventListener("medium-zoom:"+_,D,K)}),A.push({type:"medium-zoom:"+_,listener:D,options:K}),q},f=function(_,D){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C.forEach(function(ae){ae.removeEventListener("medium-zoom:"+_,D,K)}),A=A.filter(function(ae){return!(ae.type==="medium-zoom:"+_&&ae.listener.toString()===D.toString())}),q},w=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_.target,K=function(){var j={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},Z=void 0,te=void 0;if(k.container)if(k.container instanceof Object)j=Rt({},j,k.container),Z=j.width-j.left-j.right-k.margin*2,te=j.height-j.top-j.bottom-k.margin*2;else{var be=cr(k.container)?k.container:document.querySelector(k.container),Se=be.getBoundingClientRect(),Ae=Se.width,Me=Se.height,ke=Se.left,Jt=Se.top;j=Rt({},j,{width:Ae,height:Me,left:ke,top:Jt})}Z=Z||j.width-k.margin*2,te=te||j.height-k.margin*2;var S=E.zoomedHd||E.original,F=Zo(S)?Z:S.naturalWidth||Z,O=Zo(S)?te:S.naturalHeight||te,B=S.getBoundingClientRect(),oe=B.top,ie=B.left,ee=B.width,J=B.height,d=Math.min(F,Z)/ee,p=Math.min(O,te)/J,y=Math.min(d,p),R=(-ie+(Z-ee)/2+k.margin+j.left)/y,T=(-oe+(te-J)/2+k.margin+j.top)/y,L="scale("+y+") translate3d("+R+"px, "+T+"px, 0)";E.zoomed.style.transform=L,E.zoomedHd&&(E.zoomedHd.style.transform=L)};return new r(function(ae){if(D&&C.indexOf(D)===-1){ae(q);return}var j=function Ae(){H=!1,E.zoomed.removeEventListener("transitionend",Ae),E.original.dispatchEvent(Xt("medium-zoom:opened",{detail:{zoom:q}})),ae(q)};if(E.zoomed){ae(q);return}if(D)E.original=D;else if(C.length>0){var Z=C;E.original=Z[0]}else{ae(q);return}if(E.original.dispatchEvent(Xt("medium-zoom:open",{detail:{zoom:q}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,E.zoomed=Ou(E.original),document.body.appendChild(V),k.template){var te=cr(k.template)?k.template:document.querySelector(k.template);E.template=document.createElement("div"),E.template.appendChild(te.content.cloneNode(!0)),document.body.appendChild(E.template)}if(document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",h),E.zoomed.addEventListener("transitionend",j),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(be),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,K()};var be=setInterval(function(){E.zoomedHd.complete&&(clearInterval(be),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),K())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading");var Se=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",Se),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),K()})}else K()})},h=function(){return new r(function(_){if(H||!E.original){_(q);return}var D=function K(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(V),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),H=!1,E.zoomed.removeEventListener("transitionend",K),E.original.dispatchEvent(Xt("medium-zoom:closed",{detail:{zoom:q}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,_(q)};H=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(Xt("medium-zoom:close",{detail:{zoom:q}})),E.zoomed.addEventListener("transitionend",D)})},b=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_.target;return E.original?h():w({target:D})},g=function(){return k},v=function(){return C},x=function(){return E.original},C=[],A=[],H=!1,z=0,k=n,E={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?k=t:(t||typeof t=="string")&&c(t),k=Rt({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},k);var V=Iu(k.background);document.addEventListener("click",s),document.addEventListener("keyup",o),document.addEventListener("scroll",a),window.addEventListener("resize",h);var q={open:w,close:h,toggle:b,update:i,clone:l,attach:c,detach:u,on:m,off:f,getOptions:g,getImages:v,getZoomedImage:x};return q};function Du(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Nu=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Du(Nu);var Hu=Mu;const Fu=Symbol("mediumZoom");const zu=".theme-default-content > img, .theme-default-content :not(a) > img",Bu={},$u=400;var ju=Gt(({app:e,router:t})=>{const n=Hu(Bu);n.refresh=(r=zu)=>{n.detach(),n.attach(r)},e.provide(Fu,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),$u)})});const qu={repo:"stata2r/stata2r.github.io",docsRepo:"https://github.com/stata2r/stata2r.github.io",docsBranch:"main",docsDir:"docs",editLinkPattern:":repo/edit/:branch/:path",editLinks:!0,search:!0,sidebarDepth:1,sidebar:[{text:"data.table",link:"/data.table/"},{text:"fixest",link:"/fixest/"},{text:"extras",link:"/extras/"}],locales:{"/":{selectLanguageName:"English"}},navbar:[],logo:null,darkMode:!0,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributors:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"},ei=ye(qu),Uu=()=>ei;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=e=>{ei.value=e});const ti=Symbol(""),Wu=()=>{const e=_e(ti);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Ku=(e,t)=>{var n;return Ke(Ke({},e),(n=e.locales)===null||n===void 0?void 0:n[t])};var Vu=Gt(({app:e})=>{const t=Uu(),n=e._context.provides[bs],r=pe(()=>Ku(t.value,n.value));e.provide(ti,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})});const Yu=Ne({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(_t(),Gn("span",{class:ft(["badge",e.type]),style:Qt({verticalAlign:e.vertical})},[Ba(t.$slots,"default",{},()=>[Yr(pr(e.text),1)])],6))}});var Gu=Ne({name:"CodeGroup",setup(e,{slots:t}){const n=ye(-1),r=ye([]),s=(i=n.value)=>{i<r.value.length-1?n.value=i+1:n.value=0,r.value[n.value].focus()},a=(i=n.value)=>{i>0?n.value=i-1:n.value=r.value.length-1,r.value[n.value].focus()},o=(i,l)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),n.value=l):i.key==="ArrowRight"?(i.preventDefault(),s(l)):i.key==="ArrowLeft"&&(i.preventDefault(),a(l))};return()=>{var i;const l=(((i=t.default)===null||i===void 0?void 0:i.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return l.length===0?null:(n.value<0||n.value>l.length-1?(n.value=l.findIndex(c=>c.props.active===""||c.props.active===!0),n.value===-1&&(n.value=0)):l.forEach((c,u)=>{c.props.active=u===n.value}),le("div",{class:"code-group"},[le("div",{class:"code-group__nav"},le("ul",{class:"code-group__ul"},l.map((c,u)=>{const m=u===n.value;return le("li",{class:"code-group__li"},le("button",{ref:f=>{f&&(r.value[u]=f)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":m},ariaPressed:m,ariaExpanded:m,onClick:()=>n.value=u,onKeydown:f=>o(f,u)},c.props.title))}))),l]))}}});const Xu=["aria-selected"],Ju=Ne({name:"CodeGroupItem"}),Zu=Ne(An(Ke({},Ju),{props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(_t(),Gn("div",{class:ft(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[Ba(t.$slots,"default")],10,Xu))}}));function ni(e){return Hi()?(Fi(e),!0):!1}const kn=typeof window!="undefined",Qu=e=>typeof e=="string",xs=()=>{};function ef(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const tf=e=>e();var ri=Object.getOwnPropertySymbols,nf=Object.prototype.hasOwnProperty,rf=Object.prototype.propertyIsEnumerable,sf=(e,t)=>{var n={};for(var r in e)nf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ri)for(var r of ri(e))t.indexOf(r)<0&&rf.call(e,r)&&(n[r]=e[r]);return n};function af(e,t,n={}){const r=n,{eventFilter:s=tf}=r,a=sf(r,["eventFilter"]);return Xe(e,ef(s,t),a)}function of(e,t=!0){ja()?qe(e):t?e():ts(e)}const dr=kn?window:void 0;kn&&window.document;kn&&window.navigator;kn&&window.location;function lf(...e){let t,n,r,s;if(Qu(e[0])?([n,r,s]=e,t=dr):[t,n,r,s]=e,!t)return xs;let a=xs;const o=Xe(()=>Ze(t),l=>{a(),!!l&&(l.addEventListener(n,r,s),a=()=>{l.removeEventListener(n,r,s),a=xs})},{immediate:!0,flush:"post"}),i=()=>{o(),a()};return ni(i),i}function cf(e,t={}){const{window:n=dr}=t;let r;const s=ye(!1),a=()=>{!n||(r||(r=n.matchMedia(e)),s.value=r.matches)};return of(()=>{a(),!!r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),ni(()=>{"removeEventListener"in a?r.removeEventListener("change",a):r.removeListener(a)}))}),s}const Es="__vueuse_ssr_handlers__";globalThis[Es]=globalThis[Es]||{};const df=globalThis[Es];function uf(e,t){return df[e]||t}function ff(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const hf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function pf(e,t,n,r={}){var s;const{flush:a="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,shallow:c,window:u=dr,eventFilter:m,onError:f=x=>{console.error(x)}}=r,w=Ze(t),h=ff(w),b=(c?oa:ye)(t),g=(s=r.serializer)!=null?s:hf[h];if(!n)try{n=uf("getDefaultStorage",()=>{var x;return(x=dr)==null?void 0:x.localStorage})()}catch(x){f(x)}function v(x){if(!(!n||x&&x.key!==e))try{const C=x?x.newValue:n.getItem(e);C==null?(b.value=w,l&&w!==null&&n.setItem(e,g.write(w))):typeof C!="string"?b.value=C:b.value=g.read(C)}catch(C){f(C)}}return v(),u&&i&&lf(u,"storage",x=>setTimeout(()=>v(x),0)),n&&af(b,()=>{try{b.value==null?n.removeItem(e):n.setItem(e,g.write(b.value))}catch(x){f(x)}},{flush:a,deep:o,eventFilter:m}),b}function mf(e){return cf("(prefers-color-scheme: dark)",e)}var si,ai;kn&&(window==null?void 0:window.navigator)&&((si=window==null?void 0:window.navigator)==null?void 0:si.platform)&&/iP(ad|hone|od)/.test((ai=window==null?void 0:window.navigator)==null?void 0:ai.platform);var gf=Object.defineProperty,oi=Object.getOwnPropertySymbols,vf=Object.prototype.hasOwnProperty,yf=Object.prototype.propertyIsEnumerable,ii=(e,t,n)=>t in e?gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bf=(e,t)=>{for(var n in t||(t={}))vf.call(t,n)&&ii(e,n,t[n]);if(oi)for(var n of oi(t))yf.call(t,n)&&ii(e,n,t[n]);return e};const wf={top:0,left:0,bottom:0,right:0,height:0,width:0};bf({text:""},wf);const li=Symbol(""),Oh=()=>{const e=_e(li);if(!e)throw new Error("useDarkMode() is called without provider.");return e},_f=()=>{const e=ks(),t=mf(),n=pf("vuepress-color-scheme","auto"),r=pe({get(){return e.value.darkMode?n.value==="auto"?t.value:n.value==="dark":!1},set(s){s===t.value?n.value="auto":n.value=s?"dark":"light"}});gt(li,r),xf(r)},xf=e=>{const t=(n=e.value)=>{const r=window==null?void 0:window.document.querySelector("html");r==null||r.classList.toggle("dark",n)};qe(()=>{Xe(e,t,{immediate:!0})}),$r(()=>t())},ci=(...e)=>{const n=or().resolve(...e),r=n.matched[n.matched.length-1];if(!(r==null?void 0:r.redirect))return n;const{redirect:s}=r,a=Q(s)?s(n):s,o=he(a)?{path:a}:a;return ci(Ke({hash:n.hash,query:n.query,params:n.params},o))},Ef=e=>{const t=ci(e);return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Ss=null,Tn=null;const Sf={wait:()=>Ss,pending:()=>{Ss=new Promise(e=>Tn=e)},resolve:()=>{Tn==null||Tn(),Ss=null,Tn=null}},Cf=()=>Sf,di=Symbol("sidebarItems"),Mh=()=>{const e=_e(di);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},kf=()=>{const e=ks(),t=au(),n=pe(()=>Tf(t.value,e.value));gt(di,n)},Tf=(e,t)=>{var n,r,s,a;const o=(r=(n=e.sidebar)!==null&&n!==void 0?n:t.sidebar)!==null&&r!==void 0?r:"auto",i=(a=(s=e.sidebarDepth)!==null&&s!==void 0?s:t.sidebarDepth)!==null&&a!==void 0?a:2;return e.home||o===!1?[]:o==="auto"?Af(i):G(o)?ui(o,i):Ko(o)?Pf(o,i):[]},Rf=(e,t)=>({text:e.title,link:`#${e.slug}`,children:Cs(e.children,t)}),Cs=(e,t)=>t>0?e.map(n=>Rf(n,t-1)):[],Af=e=>{const t=Yt();return[{text:t.value.title,children:Cs(t.value.headers,e)}]},ui=(e,t)=>{const n=vs(),r=Yt(),s=a=>{var o;let i;if(he(a)?i=Ef(a):i=a,i.children)return An(Ke({},i),{children:i.children.map(l=>s(l))});if(i.link===n.path){const l=((o=r.value.headers[0])===null||o===void 0?void 0:o.level)===1?r.value.headers[0].children:r.value.headers;return An(Ke({},i),{children:Cs(l,t)})}return i};return e.map(a=>s(a))},Pf=(e,t)=>{var n;const r=vs(),s=Vo(e,r.path),a=(n=e[s])!==null&&n!==void 0?n:[];return ui(a,t)},ks=()=>Wu(),Lf={class:"sr-only"},If=Ne({setup(e){const t=ks();return(n,r)=>(_t(),Vr(Ze(_s),null,{default:da(()=>[Nt("span",Lf,pr(Ze(t).openInNewWindow),1)]),_:1}))}});var Of=Gt(({app:e,router:t})=>{e.component("Badge",Yu),e.component("CodeGroup",Gu),e.component("CodeGroupItem",Zu),delete e._context.components.ExternalLinkIcon,e.component("ExternalLinkIcon",If),e.component("NavbarSearch",()=>{const r=e.component("Docsearch")||e.component("SearchBox");return r?le(r):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...r)=>(await Cf().wait(),n(...r))});var Mf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};const Df={name:"CodeCopy",props:{parent:Object,code:String,options:{align:String,color:String,backgroundTransition:Boolean,backgroundTransitionColor:String,successText:String,successTextColor:String,staticIcon:Boolean}},data(){return{success:!1,originalBackground:null,originalTransition:null}},computed:{alignClass(){return this.options.align},iconClass(){return this.options.staticIcon?"":"hover"}},mounted(){this.originalTransition=this.parent.style.transition,this.originalBackground=this.parent.style.background},beforeDestroy(){this.parent.style.transition=this.originalTransition,this.parent.style.background=this.originalBackground},methods:{hexToRgb(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},copyToClipboard(e){if(navigator.clipboard)navigator.clipboard.writeText(this.code).then(()=>{this.setSuccessTransitions()},()=>{});else{let t=document.createElement("textarea");document.body.appendChild(t),t.value=this.code,t.select(),document.execCommand("Copy"),t.remove(),this.setSuccessTransitions()}},setSuccessTransitions(){if(clearTimeout(this.successTimeout),this.options.backgroundTransition){this.parent.style.transition="background 350ms";let e=this.options.backgroundTransitionColor;e=e.indexOf("#")!==-1?e:"#282c34";let t=this.hexToRgb(e);this.parent.style.background=`rgba(${t.r}, ${t.g}, ${t.b}, 0.7)`}this.success=!0,this.successTimeout=setTimeout(()=>{this.options.backgroundTransition&&(this.parent.style.background=this.originalBackground,this.parent.style.transition=this.originalTransition),this.success=!1},500)}}},Nf=e=>(bl("data-v-39936cf2"),e=e(),wl(),e),Hf={class:"code-copy"},Ff=Nf(()=>Nt("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1)),zf=["fill"];function Bf(e,t,n,r,s,a){return _t(),Gn("div",Hf,[(_t(),Gn("svg",{onClick:t[0]||(t[0]=(...o)=>a.copyToClipboard&&a.copyToClipboard(...o)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:ft([a.iconClass,a.alignClass])},[Ff,Nt("path",{fill:n.options.color,d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"},null,8,zf)],2)),Nt("span",{class:ft([s.success?"success":"",a.alignClass]),style:Qt({color:n.options.successTextColor})},pr(n.options.successText),7)])}var fi=Mf(Df,[["render",Bf],["__scopeId","data-v-39936cf2"]]),$f=Gt(({app:e})=>{e.component("CodeCopy",fi)});const jf=({input:e,hotKeys:t})=>{const n=r=>{!e.value||t.value.length===0||r.target===document.body&&t.value.includes(r.key)&&(e.value.focus(),r.preventDefault())};qe(()=>{document.addEventListener("keydown",n)}),cn(()=>{document.removeEventListener("keydown",n)})},qf=[{title:"intro",headers:[],path:"/",pathLocale:"/",extraFields:[`
# Translating Stata to R

The goal of this site is to provide a simple 'on-ramp' to R for Stata users.
There are two main pages (\u270C\uFE0F\u{1F4C4}) on this site:

1. Data wrangling (\u{1F5C4}\u{1F9F9}) with [**data.table**](/data.table/)
2. Regression analysis (\u{1F4BB}\u{1F4C8}) with [**fixest**](/fixest/)

There are [**other great packages**](/extras/) 
that work well and are easy to use, but **data.table** and **fixest** are 
blazingly fast (\u{1F3C3}\u{1F3FB}\u{1F4A8}) and highly powerful (\u{1F4AA}\u{1F3FB}\u{1F60E}).

Plus, they are flexible (\u{1F44C}\u2728) and can help you avoid R's "package overload".
Depending on what you do in Stata, you might even be able to cut back, going 
from three packages\u2014**reghdfe**, **estout** and **gtools**\u2014to just two.
`]},{title:"data.table",headers:[{level:2,title:"Introduction to data.table",slug:"introduction-to-data-table",children:[]},{level:2,title:"Data I/O",slug:"data-i-o",children:[{level:3,title:"Read and write .csv",slug:"read-and-write-csv",children:[]},{level:3,title:"Read and write .parquet",slug:"read-and-write-parquet",children:[]},{level:3,title:"Read and write .dta",slug:"read-and-write-dta",children:[]}]},{level:2,title:"Order",slug:"order",children:[{level:3,title:"Sort rows",slug:"sort-rows",children:[]},{level:3,title:"Sort columns",slug:"sort-columns",children:[]},{level:3,title:"Rename columns",slug:"rename-columns",children:[]}]},{level:2,title:"Subset",slug:"subset",children:[{level:3,title:"Subset rows",slug:"subset-rows",children:[]},{level:3,title:"Subset columns",slug:"subset-columns",children:[]},{level:3,title:"Subset rows and columns",slug:"subset-rows-and-columns",children:[]},{level:3,title:"Drop duplicates",slug:"drop-duplicates",children:[]},{level:3,title:"Drop missing",slug:"drop-missing",children:[]}]},{level:2,title:"Modify",slug:"modify",children:[{level:3,title:"Create new variables",slug:"create-new-variables",children:[]},{level:3,title:"Create new variables within groups",slug:"create-new-variables-within-groups",children:[]},{level:3,title:"Work with dates",slug:"work-with-dates",children:[]},{level:3,title:"Modify existing variables",slug:"modify-existing-variables",children:[]},{level:3,title:"Using Booleans & control-flow",slug:"using-booleans-control-flow",children:[]},{level:3,title:"Row-wise calculations",slug:"row-wise-calculations",children:[]},{level:3,title:"Fill in Time Series/Panel Data",slug:"fill-in-time-series-panel-data",children:[]}]},{level:2,title:"Collapse",slug:"collapse",children:[{level:3,title:"Collapse with no grouping",slug:"collapse-with-no-grouping",children:[]},{level:3,title:"Collapse by group",slug:"collapse-by-group",children:[]},{level:3,title:"Count rows",slug:"count-rows",children:[]},{level:3,title:"Grouped calculations and complex objects inside a data.table",slug:"grouped-calculations-and-complex-objects-inside-a-data-table",children:[]}]},{level:2,title:"Reshape",slug:"reshape",children:[{level:3,title:"Reshape prep (this dataset only)",slug:"reshape-prep-this-dataset-only",children:[]},{level:3,title:"Reshape long",slug:"reshape-long",children:[]},{level:3,title:"Reshape wide",slug:"reshape-wide",children:[]}]},{level:2,title:"Merge",slug:"merge",children:[{level:3,title:"Import and prep secondary dataset",slug:"import-and-prep-secondary-dataset",children:[]},{level:3,title:"Inner merge",slug:"inner-merge",children:[]},{level:3,title:"Full merge",slug:"full-merge",children:[]},{level:3,title:"Left merge",slug:"left-merge",children:[]},{level:3,title:"Right merge",slug:"right-merge",children:[]},{level:3,title:"Anti merge",slug:"anti-merge",children:[]},{level:3,title:"Appending data",slug:"appending-data",children:[]},{level:3,title:"Advanced data.table merges (tips and tricks)",slug:"advanced-data-table-merges-tips-and-tricks",children:[]}]}],path:"/data.table/",pathLocale:"/",extraFields:[`
## Introduction to data.table

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
special symbol in particular: \`.SD\` refers to the (S)ubset of (D)ata you're 
working with. This can be used to do complex within-group calculations when you 
have by specified, but more generally it's a way to perform operations on lots 
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

Like Stata's \`.dta\` format, R has its own native \`.rds\` binary file storage
type. (See also the [**fst**](http://www.fstpackage.org/) package.) However, we
generally recommend that users avoid native\u2014especially proprietary\u2014data types
since they hamper interoperability and reproducibility. We'll hence concentrate
on common open-source file types below. We'll make an exception for \`.dta\` given
our target audience, but we still recommend avoiding it if possible.

### Read and write .csv

<div class="code--container">
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


### Read and write .parquet

<div class="code--container">
<div>

\`\`\`stata
* Stata currently has limited support for parquet files
* (and Linux/Unix only).
* See: https://github.com/mcaceresb/stata-parquet

\`\`\`
</div>
<div>

\`\`\`r
## These commands require the \`arrow\` package
pfiles = dir(pattern = ".parquet")
rbindlist(lapply(pfiles, arrow::read_parquet))
rbindlist(lapply(pfiles, arrow::read_parquet, col_select=1:10))
\`\`\`
</div>
</div>


### Read and write .dta

<div class="code--container">
<div>

\`\`\`stata
* .dta is Stata's native (proprietary) file format
use "filename.dta", clear

save "filename.dta", replace
\`\`\`
</div>
<div>

\`\`\`r
## These commands require the \`haven\` package
dat = haven::read_dta('filename.dta')
setDT(dat) ## Or: dat = as.data.table(dat)
haven::write_dta(dat, 'filename.dta')
\`\`\`
</div>
</div>



## Order

### Sort rows

<div class="code--container">
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

<div class="code--container">
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

<div class="code--container">
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
## setnames(dat, old = ..., new = ...)

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

<div class="code--container">
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
keep in 1/200
keep if day > 5 & day < 10
keep if inrange(day,5,10)
keep if origin=="LGA"
keep if regex(origin,"LGA")
keep if inlist(month,3,4,11,12)
keep if inlist(origin,"JFK","LGA")
drop if month==1
\`\`\`
</div>
<div>
  
_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[1:200]\`._

\`\`\`r
dat[1:200]
dat[day > 5 & day < 10]
dat[between(day,5,10)] ## Or: dat[day %in% 5:10]
dat[origin=='LGA']
dat[origin %like% 'LGA']
dat[month %in% c(3,4,11,12)]
dat[origin %chin% c("JFK","LGA")] ## %chin% is a fast %in% for (ch)aracter strings
dat[month!=1]
\`\`\`
</div>
</div>

### Subset columns

<div class="code--container">
<div>
  
_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
keep month day carrier



keep year-arr_delay
keep *_delay

drop origin dest


ds, has(type string)
drop \`r(varlist)'

ds, has(type int)
keep \`r(varlist)'
\`\`\`
</div>
<div>
  
_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[, .(month)]\`._

\`\`\`r
dat[, .(month, day, carrier)]
dat[, list(month, day, carrier)] ## same as above
dat[, c('month', 'day', 'carrier')] ## ditto

dat[, year:arr_delay]
dat[, .SD, .SDcols=patterns('*_delay')]

dat[, -c('origin', 'dest')]
dat[, c('origin', 'dest') := NULL] ## same, but in-place

## Matches the two lines on the left:
dat[, .SD, .SDcols=!is.character]

## Matches the two lines on the left:
dat[, .SD, .SDcols=is.integer]
\`\`\`
</div>
</div>


### Subset rows and columns

<div class="code--container">
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._
  
\`\`\`stata
keep if origin=="LGA"
keep month day carrier
\`\`\`
</div>
<div>

_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[...]\`._

\`\`\`r
## Matches the two lines on the left:
dat[origin=="LGA", .(month, day, carrier)]
\`\`\`
</div>
</div>


### Drop duplicates

<div class="code--container">
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
later, e.g. \`dat1 = unique(dat)\`._

\`\`\`r
unique(dat)
unique(dat, by = c('month', 'day', 'carrier'))
\`\`\`
</div>
</div>


### Drop missing

<div class="code--container">
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
later, e.g. \`dat = dat[!is.na(dest)]\`._
  
\`\`\`r
dat[!is.na(dest)]


na.omit(dat)
na.omit(dat, cols = c('air_time', 'dest'))
dat[!is.na(air_time) & !is.na(dest)] ## Same as above
\`\`\`
</div>
</div>



## Modify

### Create new variables

<div class="code--container">
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

_Aside: These next operations don't have a great Stata equivalent, although you could 
implement a loop._

<div class="code--container">
<div>

\`\`\`stata
*?
\`\`\`
</div>
<div>
  
\`\`\`r
## Multiple variables can be created at once.
## These next three lines all do the same thing.
## Just pick your favourite.
dat[, c('dist_sq', 'dist_cu') := .(distance^2, distance^3)]
dat[, ':=' (dist_sq=distance^2, dist_cu=distance^3)]
dat[, let(dist_sq=distance^2, dist_cu=distance^3)] ## dev version only

## We can also chain back-to-back dat[...][...]
## (this holds for any data.table operation)
dat[, dist_sq := distance^2][
    , dist_cu := distance*dist_sq)]
\`\`\`
</div>
</div>

### Create new variables within groups

_Aside: In R, any missing (i.e. "NA") values will propagate during aggregating
functions. If you have NA values in your real-life dataset \u2014 we don't in this
example dataset \u2014 you probably want to add \`na.rm=TRUE\` to remove these on the
fly. E.g. \`mean(var1, na.rm=TRUE)\` or \`lapply(.SD, mean, na.rm=TRUE)\`._

<div class="code--container">
<div>

\`\`\`stata
bysort origin: egen mean_dep_delay = mean(dep_delay)
bysort origin dest: egen mean_dep_delay2 = mean(dep_delay)

* Multiple grouped variables (manual demean example)
foreach x of varlist dep_delay arr_delay air_time {
    egen mean_\`x'=mean(\`x'), by(origin)
    gen \`x'_dm = \`x\` - mean_\`x'
    drop mean*
}

* Some short-cut symbols
bysort carrier: g rows_per_carrier = _N
bysort carrier: g index_within_carrier = _n
egen origin_index = group(origin)

* Refer to other rows (uses generic data set)
sort group time
by group: gen growth = X/X[_n-1]
by group: gen growth_since_first = X/X[1]
\`\`\`
</div>
<div>
  
\`\`\`r
dat[, mean_dep_delay := mean(dep_delay), by=origin]
dat[, mean_dep_delay2 := mean(dep_delay), by=.(origin, dest)]

## Multiple grouped variables (manual demean example)
dmcols = c('dep_delay', 'arr_delay', 'air_time')
dat[,
    paste0(dmcols,'_dm') := lapply(.SD, \\(x) x-mean(x)),  ## before R 4.1 you'll need function(x) instead of the \\(x) shorthand
    .SDcols = dmcols,
    by = origin]

## Some short-cut symbols
dat[, rows_per_carrier := .N, by = carrier]
dat[, index_within_carrier := .I, by = carrier]
dat[, origin_index := .GRP, by = origin]

## Refer to other rows (uses generic data set)
setorder(dat, group, time)
dat[, growth := X/shift(X, 1), by = group]
dat[, growth_since_first := X/first(X), by = group]
\`\`\`
</div>
</div>


### Work with dates

<div class="code--container">
<div>

\`\`\`stata
* Give ourselves a date variable to work with
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
## Make ourselves a date variable
dat[, date := as.IDate(paste(year, month, day, sep='-'))]




## Pull out year (quarter, month, etc. work too)
dat[, the_year := year(date)]

## Shift forward 7 days
dat[, date := date + 7]
\`\`\`
</div>
</div>


### Modify existing variables

_Aside: We don't normally use a gen -> replace workflow in R, the way we do in Stata. See the 'Using Booleans & control-flow' section below for a more idiomatic approach._

<div class="code--container">
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

## Conditional modification
dat[month==9, distance := distance + 1]
dat[1, distance := 0]

## Modify multiple variables (same function)
cols = c('origin','dest')
dat[, (cols) := lapply(.SD, \\(x) paste(x,'Airport')),  ### Note: before R 4.1 you need function(x) instead of the \\(x) shorthand
    .SDcols = cols]
\`\`\`
</div>
</div>


### Using Booleans & control-flow

<div class="code--container">
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
## fifelse is like base-R ifelse, but (f)aster!

## for nested ifelse, easier to use fcase
dat[, flight_length2 := fcase(air_time<=120, 'Short',
                              air_time<=500, 'Med',
                              default = 'Long')]
\`\`\`
</div>
</div>

### Row-wise calculations

<div class="code--container">
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
## Pre-packaged row calculations:
dat[, tot_delay := rowSums(.SD), .SDcols = patterns('*_delay')]
dat[, any_delay := fcoalesce(.SD), .SDcols = patterns('*_delay')]

## Custom row calculations:
dat[, new_var := mapply(custom_func, var1, var2)]
dat[, new_var := custom_func(var1, var2)), by=.I] ## dev version only
\`\`\`
</div>
</div>

### Fill in Time Series/Panel Data

<div class="code--container">
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
## Carry forward the last-known observation
setorder(dat, id, time)
dat[, x := nafill(x, type = 'locf'), by = id]
## Carry back the next-known observation
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

<div class="code--container">
<div>

_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._
  
\`\`\`stata
collapse (mean) dep_delay
collapse (mean) mean_ddel=dep_delay



collapse (mean) mean_ddel=dep_delay mean_adel=arr_delay



collapse (mean) *delay

ds, has(type long)
collapse (mean) \`r(varlist)'
\`\`\`
</div>
<div>
  
_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[, mean(dep_delay)]\`._

\`\`\`r
dat[, mean(dep_delay)] ## Just give me the number! As a scalar.
dat[, .(mean_ddel=mean(dep_delay))] ## Give me back a data.table (note the .() here, that's what does it)

## These next three lines all do the same thing.
## Just pick your favourite.
dat[, .(mean_ddel=mean(dep_delay), mean_adel=mean(arr_delay))]
dat[, lapply(.SD, mean), .SDcols=c('arr_delay','dep_delay')] 
dat[, lapply(.SD, mean), .SDcols=arr_delay:dep_delay]

dat[, lapply(.SD, mean), .SDcols=patterns('delay')]

 ## Matches the two lines on the left
dat[, lapply(.SD, mean), .SDcols=is.numeric]
\`\`\`
</div>
</div>

### Collapse by group

<div class="code--container">
<div>
  
_Reminder: You'll need to use \`preserve/restore\` if you want to retain the
original dataset in the examples that follow._

\`\`\`stata
collapse (mean) arr_delay, by(carrier)
collapse (mean) mean_adel = arr_delay, by(carrier)

collapse (mean) arr_delay, by(carrier month)

collapse \\\\\\ 
   (min) min_d = distance (max) max_d = distance, \\\\\\
   by(origin)

collapse (mean) *_delay, \\\\\\
   by(origin)

collapse \\\\\\
   (mean) dep_delay arr_delay air_time distance, \\\\\\
   by(origin)


egen unique_dest = tag(dest origin)
collapse (sum) unique_dest, by(origin)
\`\`\`
</div>
<div>
  
_Reminder: You'll need to (re)assign the subsetted dataset if you want to use it
later, e.g. \`dat1 = dat[, ...]\`._

\`\`\`r
dat[, .(arr_delay = mean(arr_delay)), by=carrier]
dat[, .(mean_adel = mean(arr_delay)), by=carrier]

dat[, .(arr_delay = mean(arr_delay)), by=.(carrier, month)]

dat[, 
    .(min_d = min(distance), max_d = max(distance)), 
    by = origin]

dat[, lapply(.SD, mean), .SDcols=patterns('_delay'), 
    by = origin]

dat[, 
    lapply(.SD, mean), 
    .SDcols=c('dep_delay','arr_delay','air_time','distance'),
    by = origin]

## Matches the final two lines on the left:
dat[, .(unique_dest = uniqueN(dest)), by = origin]
\`\`\`
</div>
</div>



<div class="code--container">
<div>

\`\`\`stata


\`\`\`
</div>
<div>
<i>Bonus: You can also do complicated (grouped) aggregations as part of a \`dcast\`
(i.e. reshape wide) call. E.g. Get the min, mean and max departure and arrival
delays, by origin airport.</i>

\`\`\`r
dcast(dat, origin~., fun=list(min,mean,max),
      value.var=c('dep_delay','arr_delay'))
\`\`\`
</div>
</div>

### Count rows

<div class="code--container">
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
dat[, .N] ## Or: nrow(dat)
dat[month==10, .N] ## Or: nrow(dat[month==10]

## Count rows by group:
dat[, .N, by = origin])
\`\`\`
</div>
</div>


### Grouped calculations and complex objects inside a data.table

_Note: data.tables support list columns, so you can have complex objects like regression models inside a data.table. Among many other things, this means you can nest simulations inside a data.table as easily as you would perform any other (grouped) operation._

\`\`\`r
## Example: Grouped regression

## Let's run a separate regression of arrival delay on
## departure delay for each month, inside our dataset

## Just the coefficients
dat[,
    .(beta = coef(lm(arr_delay ~ dep_delay, .SD))[2]),
    by = month]

## Keep the whole model for each month
mods = dat[,
           .(mod = list(lm(arr_delay ~ dep_delay, .SD))),
           by = month]
## Now you can do things like put all 10 models in a
## regression table or coefficient plot
modelsummary::msummary(mods$mod)
modelsummary::modelplot(mods$mod, coef_omit = 'Inter')
\`\`\`



## Reshape

### Reshape prep (this dataset only)

_Note: We need to do a bit of prep to our air-traffic dataset to better demonstrate the reshape examples in this section. You probably don't need to do this for your own dataset._

<div class="code--container">
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
## We'll generate row IDs to avoid the (reshape) ambiguity
## of repeated entries per date
dat[, id := .I]
\`\`\`
</div>
</div>

### Reshape long

<div class="code--container">
<div>

\`\`\`stata
reshape long delay_, i(id) j(delay_type) s
\`\`\`
</div>
<div>
  
\`\`\`r
ldat = melt(dat, measure=patterns('_delay'))

## Aside: you can also choose different names for your
## new reshaped columns if you'd like, e.g.
melt(dat, measure=patterns('_delay'), variable='d_type')
\`\`\`
</div>
</div>


### Reshape wide

_Note: These examples use the reshaped-long data from above._

<div class="code--container">
<div>

\`\`\`stata
reshape wide delay_, i(id) j(delay_type) s
\`\`\`
</div>
<div>
  
\`\`\`r
wdat = dcast(ldat, ... ~ variable)

## Aside 1: If you only want to keep the id & *_delay cols
dcast(ldat, id ~ variable)

## Aside 2: It's also possible to perform complex and
## powerful data aggregating tasks as part of the dcast
## (i.e. reshape wide) call.
dcast(dat, origin~., fun=list(min,mean,max),
      value.var=c('dep_delay','arr_delay'))
\`\`\`
</div>
</div>


## Merge

### Import and prep secondary dataset

_Note: Our secondary dataset for demonstrating the merges in this section will be one on airport characteristics._

<div class="code--container">
<div>

\`\`\`stata
import delimited using "https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv", clear

* Stata requires that merge ID variables have the same name  
* across datasets. Let's do that before saving to disk.
rename faa dest
save dat2.dta, replace

* Now bring our original dataset back into memory
import delimited using "https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv", clear
\`\`\`
</div>
<div>
  
\`\`\`r
dat2 = fread("https://vincentarelbundock.github.io/Rdatasets/csv/nycflights13/airports.csv")

## R doesn't require that merge ID variables share the same
## same name across datasets. But we'll add this anyway.
dat2[, dest := faa]
\`\`\`
</div>
</div>

### Inner merge

_Only keep the matched rows across both datasets._

<div class="code--container">
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

<div class="code--container">
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

<div class="code--container">
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

_Keep all rows from the "seconday" dataset._

<div class="code--container">
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

<div class="code--container">
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

_This example just appends the flights data to itself. But the same principle would carry over to appending multiple, different datasets._

<div class="code--container">
<div>

\`\`\`stata
save data_to_append.dta, replace
append using data_to_append.dta
\`\`\`
</div>
<div>
  
\`\`\`r
rbindlist(list(dat, dat)) ## Or rbind(dat, dat)
\`\`\`
</div>
</div>

### Advanced data.table merges (tips and tricks)

_These next few examples are meant to highlight some specific data.table merge tricks. They don't really have good Stata equivalents (that we're aware of)._

##### Merge on different ID names

<div class="code--container">
<div>

\`\`\`r
mdat = merge(dat, dat2, by.x='dest', by.y='faa')
\`\`\`
</div>
<div>
</div>
</div>


##### Set keys for even faster merges and syntax shortcuts

<div class="code--container">
<div>

\`\`\`r
setkey(dat, dest); setkey(dat2, dest)
mdat = merge(dat, dat2) ### note: don't need 'by'
\`\`\`
</div>
<div>
</div>
</div>

##### Non-equi joins

Non-equi joins are a bit hard to understand if you've never seen them before.
But they are incredibly powerful and solve a suprisingly common problem: Merging
datasets over a range (e.g. start to end dates), rather than exact matches.
Here follows a simple example where we want to subset the first quarter flights
for American Airlines and second quarter flights for United Airlines:

<div class="code--container">
<div>

\`\`\`r
dat3 = data.table(carrier     = c('AA', 'UA'),
                  start_month = c(1, 4),
                  end_month   = c(3, 6))
                  
dat[dat3, on = .(carrier,
                 month >= start_month,
                 month <= end_month)]
\`\`\`
</div>
<div>
</div>
</div>

##### Rolling joins 

Rolling join are similar and allow you to match a set of dates forwards or
backwards. For example, our \`dat\` datset ends in October. So let's say we want
to carry the last known entries for American and United Airlines forward to
(random) future dates.

<div class="code--container">
<div>

\`\`\`r
dat4 = data.table(carrier  = c('AA', 'UA'),
                  new_date = as.IDate(c('2014-11-01', '2014-11-15')))
                  
dat[, date := as.IDate(paste(year, month, day, sep='-'))]

dat[dat4, on = .(carrier, date=new_date), roll='nearest']
\`\`\`
</div>
</div>
<div>
</div>



`]},{title:"extras",headers:[{level:2,title:"ggplot2: Beautiful and customizable plots",slug:"ggplot2-beautiful-and-customizable-plots",children:[{level:3,title:"Basic scatterplot",slug:"basic-scatterplot",children:[]}]},{level:2,title:"tidyverse",slug:"tidyverse",children:[{level:3,title:"Data wrangling with dplyr",slug:"data-wrangling-with-dplyr",children:[]},{level:3,title:"Manipulating dates with lubridate",slug:"manipulating-dates-with-lubridate",children:[]},{level:3,title:"Iterating with purrr",slug:"iterating-with-purrr",children:[]},{level:3,title:"String operations with stringr",slug:"string-operations-with-stringr",children:[]}]},{level:2,title:"car and nlWaldTest for Coefficient Combinations",slug:"car-and-nlwaldtest-for-coefficient-combinations",children:[{level:3,title:"Basic Combinations",slug:"basic-combinations",children:[]}]},{level:2,title:"modelsummary for Regression Tables",slug:"modelsummary-for-regression-tables",children:[{level:3,title:"Regression Table",slug:"regression-table",children:[]}]},{level:2,title:"marginaleffects for Marginal Effects",slug:"marginaleffects-for-marginal-effects",children:[{level:3,title:"Basic Logit Marginal Effects",slug:"basic-logit-marginal-effects",children:[]}]},{level:2,title:"sandwich for Additional Standard Error Adjustments",slug:"sandwich-for-additional-standard-error-adjustments",children:[{level:3,title:"Linear Model Adjustments",slug:"linear-model-adjustments",children:[]}]},{level:2,title:"lme4 for Random Effects",slug:"lme4-for-random-effects",children:[{level:3,title:"Random Effects Models",slug:"random-effects-models",children:[]}]},{level:2,title:"collapse for Even Faster Grouped Calculations",slug:"collapse-for-even-faster-grouped-calculations",children:[{level:3,title:"Means of Everything",slug:"means-of-everything",children:[]}]}],path:"/extras/",pathLocale:"/",extraFields:[`
# Other Packages

While we think you can get pretty darn far in R with just **data.table** and 
**fixest**, of course those two don't cover everything.

This page covers a small list of packages you may find especially useful when 
getting started with R. We won't try to cover everything under the sun here. 
Just a few places to get going. For the rest, well, that's what Google is for 
(or, indeed, to learn about each of these in more detail).

All of the below packages have far more applications than is shown here. We'll 
just provide one or two examples of how each can be used. Finally, don't forget 
to install them with \`install.packages('PKGNAME')\` and load them with 
\`library(PKGNAME)\`. The former command you only have to run once per package (or 
as often as you want to update it); the latter whenever you want to use a 
package in a new R session.

## ggplot2: Beautiful and customizable plots

[**ggplot2**](https://ggplot2.tidyverse.org/) is widely considered one of the 
preeminent plotting libraries available in any language. It provides an 
intuitive syntax that applies in the same way across many, many different kinds 
of vizualisations, and with a deep level of customization. Plus, endless 
additional plugins to do what you want, including easy interactivity, animation, 
maps, etc. We thought about giving **ggplot2** its own dedicated page like 
**data.table** and **fixest**. But instead we'll point you to the 
[Figures](https://lost-stats.github.io/Presentation/Figures/Figures.html) 
section of the _Library of Statistical Techniques_, which already shows how to 
do many different graphing tasks in both Stata and **ggplot2**. For a more 
in-depth overview you can always consult the excellent 
[package documentation](https://ggplot2.tidyverse.org/), or a book like Kieran 
Healy's wonderful [_Data Visualization_](https://socviz.co/).

### Basic scatterplot

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

### Data wrangling with dplyr

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

### Manipulating dates with lubridate

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

### Iterating with purrr 

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

### String operations with stringr 

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

                     
## car and nlWaldTest for Coefficient Combinations

One deficiency in R that can be surprising for Stata switchers is the lack of immediate access to complex postestimation coefficient tests like <span class="font-semibold">testparm</span>, <span class="font-semibold">lincom</span>, and <span class="font-semibold">nlcom</span> in Stata. <span class="font-semibold">fixest</span> already covers the <span class="font-semibold">testparm</span> equivalent with its <span class="font-semibold">wald()</span> function. But what about combinations of coefficients? <span class="font-semibold">multcomp</span> is a nice package that does both with <span class="font-semibold">glht()</span>, but isn't yet compatible with <span class="font-semibold">fixest</span>. So instead we have the <span class="font-semibold">car</span> package with <span class="font-semibold">linearHypothesis()</span> for tests of linear combinations of coefficients (although not confidence intervals), and <span class="font-semibold">nlWaldTest</span> for nonlinear combinations and confidence intervals.

           
### Basic Combinations

<div class='code--container'>
<div>

\`\`\`stata

regress y x z
lincom x + z
nlcom _b[x]/_b[z]
\`\`\`
</div>
<div>

\`\`\`r
# This example incorporates the fixest function feols()
m = feols(y ~ x + z, data = dat)
linearHypothesis(m, 'x + z')
nlWaldtest(m, 'b[2]/b[3]') # or nlConfint() instead for the confidence interval
\`\`\`
</div>
</div>
                     
                     
## modelsummary for Regression Tables

The <span class="font-semibold">fixest</span> package already has the <span class="font-semibold">etable()</span> function for generating regression tables. However, it only exports to text or LaTeX, and isn't intended to be highly customizable. That's where <span class="font-semibold">modelsummary</span> comes in! It works with all sorts of models, including those not from <span class="font-semibold">fixest</span>, it's highly customizable, and outputs in all sorts of formats. It also has a <span class="font-semibold">datasummary</span> function which works in similar ways to Stata's <span class="font-semibold">table</span>. How about for summary statistics tables? There's a wealth of options (which is nice; Stata makes exporting summary statistics tables a pain). Check out <a href = "https://lost-stats.github.io/Presentation/Tables/Summary_Statistics_Tables.html" class="font-semibold">this page</a> for an overview of some of them.

           
### Regression Table

<div class='code--container'>
<div>

\`\`\`stata

reghdfe Y X Z 
eststore est1 
esttab est1

reghdfe Y X Z A
eststore est2
esttab est1 est2
\`\`\`
</div>
<div>

\`\`\`r
# This example incorporates the fixest function feols()
est1 = feols(Y ~ X + Z, dat) 
etable(est1)


est2 = feols(Y ~ X + Z + A, dat) 
modelsummary(list(est1,est2))
\`\`\`
</div>
</div>
                     
                     
## marginaleffects for Marginal Effects

The Stata <span class="font-semibold">margins</span> command is an impressive piece of work! How can you replicate it in R? Well, there's the <span class="font-semibold">marginaleffects</span> package for that. Individual marginal effects or average marginal effects for nonlinear models, or models with interactions or transformations. Done!

           
### Basic Logit Marginal Effects

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
                     
                     
## sandwich for Additional Standard Error Adjustments

The <span class="font-semibold">fixest</span> package comes with plenty of shortcuts for accessing standard-error adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West, Driscoll-Kraay, or clustered standard errors. But there is, of course, more than that! Many additional options are covered by the <span class="font-semibold">sandwich</span> package, which comes with a long list of functions like <span class="font-semibold">vcovBS()</span> for bootstrapped standard errors, or <span class="font-semibold">vcovHAC()</span> for HAc. These can slot right into <span class="font-semibold">fixest</span> estimates, too! You shouldn't be using those ", robust" errors for smaller samples anyway... you knew that right?

           
### Linear Model Adjustments

<div class='code--container'>
<div>

\`\`\`stata
* ", robust" uses hc1 which isn't great for small samples
regress Y X Z, vce(hc3)
\`\`\`
</div>
<div>

\`\`\`r
# vcov = 'hetero' uses hc1 which isn't great for small samples, but sandwich's vcovHC uses HC3 by default
m = feols(Y ~ X + Z, vcov = vcovHC)
\`\`\`
</div>
</div>
                     
                     
## lme4 for Random Effects

<span class="font-semibold">fixest</span> can do a lot, but it can't do everything. This site isn't even going to attempt to go into how to translate every single model into R. But we'll cover one class of models: random-effects models with <span class="font-semibold">lme4</span> (there's also  <span class="font-semibold">Rstan</span> if that floats your boat, in which case the translation from  <span class="font-semibold">statastan</span> is pretty straightforward).  <span class="font-semibold">lme4</span> and its <span class="font-semibold">lmer()</span> function covers not just random-intercept models but also hierarchical models where slope coefficients follow random distributions.

           
### Random Effects Models

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
                     
                     
## collapse for Even Faster Grouped Calculations

Sure, we've gone on and on about how fast <span class="font-semibold">data.table</span> is compared to just about everything besides, like, learning C yourself (and sometimes even then). But there is one package that can boast even faster times than <span class="font-semibold">data.table</span>, at least at some tasks, and that's <span class="font-semibold">collapse</span>, which is just about as fast as it gets at computing by-group calculations like means or standard deviations.

           
### Means of Everything

<div class='code--container'>
<div>

\`\`\`stata
collapse (mean) varlist, by(group)
\`\`\`
</div>
<div>

\`\`\`r
fmean(dat, dat$group)
\`\`\`
</div>
</div>
`]},{title:"fixest",headers:[{level:2,title:"Formula Creation",slug:"formula-creation",children:[{level:3,title:"Fixed Effects",slug:"fixed-effects",children:[]},{level:3,title:"Categorical Variables",slug:"categorical-variables",children:[]},{level:3,title:"Interact Categoricals",slug:"interact-categoricals",children:[]},{level:3,title:"Interact Categorical and Continuous",slug:"interact-categorical-and-continuous",children:[]},{level:3,title:"Macros",slug:"macros",children:[]},{level:3,title:"Wildcard",slug:"wildcard",children:[]},{level:3,title:"Variables x1 ... x4",slug:"variables-x1-x4",children:[]},{level:3,title:"Regex",slug:"regex",children:[]}]},{level:2,title:"Standard Errors",slug:"standard-errors",children:[{level:3,title:"HC",slug:"hc",children:[]},{level:3,title:"HAC",slug:"hac",children:[]},{level:3,title:"Cluster",slug:"cluster",children:[]},{level:3,title:"Two-way",slug:"two-way",children:[]},{level:3,title:"Conley Standard Errors",slug:"conley-standard-errors",children:[]}]},{level:2,title:"Postestimation",slug:"postestimation",children:[{level:3,title:"Regression Table",slug:"regression-table",children:[]},{level:3,title:"Coefficient Plot",slug:"coefficient-plot",children:[]}]},{level:2,title:"Panel Data",slug:"panel-data",children:[{level:3,title:"Lag Variables",slug:"lag-variables",children:[]},{level:3,title:"Lead Variables",slug:"lead-variables",children:[]},{level:3,title:"First Difference",slug:"first-difference",children:[]}]},{level:2,title:"Instrumental Variables",slug:"instrumental-variables",children:[{level:3,title:"Instrumental Variables",slug:"instrumental-variables-1",children:[]},{level:3,title:"with Fixed Effects",slug:"with-fixed-effects",children:[]}]}],path:"/fixest/",pathLocale:"/",extraFields:[`
# Regression analysis with fixest

[**fixest**](https://lrberge.github.io/fixest) (by Laurent Berg\xE9) is a package 
designed from the ground up in C++ to make running regressions fast and 
incredibly easy. It provides in-built support for a variety of linear and 
non-linear models, as well as regression tables and plotting methods. 
While the package certainly doesn't cover every
model that exists, there is a non-negligible subset of Stata users for whom
every model they've ever needed to run is covered by **fixest**.

This includes regular ol' linear regression in the \`feols()\` function, which
builds off of the Base R standard regression function \`lm()\`, but also includes
things like instrumental variables via 2SLS, and of course support for as many
fixed effects as you'd like. **fixest** isn't limited to linear regression
either, covering IV and fixed-effects support for a wide range of GLM models
like logit, probit, Poisson, negative binomial, and so on in \`feglm()\` and
\`fepois()\`.

**fixest** covers all of this while being very fast. If you felt a speed boost
going from Stata's \`xtreg\` to \`reghdfe\`, get ready for another significant 
improvement when moving to **fixest**.

You also get a _lot_ of convenience features. **fixest** makes it easy to 
produce publication-ready regression tables, as well as coefficient and
interaction-margin plots. You can select long lists of controls without having
to type them all in, adjust standard errors for existings model on-the-fly,
retrieve estimated fixed effects from your high-dimensional models, conduct Wald
tests, adjust reference categories for factor variables, etc. etc.  You even get
some stuff that's rather tricky in Stata, like multi-model estimations, basic
and staggered difference-in-difference support, or Conley standard errors.

Using fixest for regression starts with writing a formula. While there are
plenty of bells and whistles to add, at its core regression formulas take the
form \`y ~ x1 + x2 | fe1 + fe2\` where \`y\` is the outcome, \`x1\` and \`x2\` are
predictors, and \`fe1\` and \`fe2\` are fixed effects.

Before continuing, make sure that you have installed **fixest**. You only 
have to do this once (or as often as you want to update the package).
<div class="code--container">
<div>

\`\`\`r
# Install from CRAN (recommended)
install.packages('fixest')
\`\`\`
</div>
<div>
</div>
</div>

Once **fixest** is installed, don't forget to load it whenever you want to 
use it. Unlike Stata, you have to re-load a package every time you start a new R 
session.

<div class="code--container">
<div>

\`\`\`r
# Load fixest into our current R session
library(fixest)
\`\`\`
</div>
<div>
</div>
</div>


In the examples that follow, we will use a modified dataset from the CPS (plus
some added variables for demonstration purposes). To load the data run the 
following:

<div class="code--container">
<div>

\`\`\`stata

import delimited using "https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv", clear
\`\`\`
</div>
<div>

\`\`\`r
# Base R reads CSVs too, but we'll use data.table here
dat = data.table::fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')
\`\`\`
</div>
</div>


                     
                     
## Formula Creation

           
### Fixed Effects

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ i.fe
reghdfe wage educ, absorb(fe)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + factor(countyfips), data = dat)
feols(wage ~ educ | countyfips, dat)
\`\`\`
</div>
</div>
           
### Categorical Variables

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ i.treat
* Specifying a baseline:
reghdfe wage educ ib1.treat
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + factor(treat), dat)
# Specifying a baseline:
feols(wage ~ educ + i(treat, ref = 1), dat)
\`\`\`
</div>
</div>
           
### Interact Categoricals

<div class='code--container'>
<div>

\`\`\`stata


reghdfe wage educ i.treat#i.hisp
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + treat*hisp, data = dat) # base-R approach
# Approach specific to fixest that makes iplot() work later if desired:
feols(wage ~ educ + i(treat, i.hisp), dat)
\`\`\`
</div>
</div>
           
### Interact Categorical and Continuous

<div class='code--container'>
<div>

\`\`\`stata

reghdfe wage educ c.age#i.treat

\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educt + treat*age, data = dat) # base-R approach
# Approach specific to fixest that makes iplot() work later if desired:
feols(wage ~ educ + i(treat, age), dat)
\`\`\`
</div>
</div>
           
### Macros

<div class='code--container'>
<div>

\`\`\`stata
local vars age black hisp marr 
reghdfe wage educ \`vars'
\`\`\`
</div>
<div>

\`\`\`r
vars = c("age", "black", "hisp", "marr") 
feols(wage ~ educ + .[vars], dat)
\`\`\`
</div>
</div>
           
### Wildcard

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ x*
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + ..('x'), dat)
\`\`\`
</div>
</div>
           
### Variables x1 ... x4

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ x1-x4
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + x.[1:4], dat)
\`\`\`
</div>
</div>
           
### Regex

<div class='code--container'>
<div>

\`\`\`stata
 
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ + ..('regex_exp'), dat)
\`\`\`
</div>
</div>
                     
                     
## Standard Errors

           
### HC

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ, vce(hc1)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, dat, vcov = 'hc1')
\`\`\`
</div>
</div>
           
### HAC

<div class='code--container'>
<div>

\`\`\`stata
xtset id year
ivreghdfe wage educ, bw(auto) robust
\`\`\`
</div>
<div>

\`\`\`r
feols(y ~ x, dat, vcov = 'NW', panel.id = ~unit + time)
feols(wage ~ educ, dat, vcov = 'NW') # if panel id is already set (see below)
\`\`\`
</div>
</div>
           
### Cluster

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ, cluster(countyfips)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, dat, vcov = ~countyfips)
\`\`\`
</div>
</div>
           
### Two-way

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ, cluster(countyfips year)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, dat, vcov = ~countyfips + year)
\`\`\`
</div>
</div>
           
### Conley Standard Errors

<div class='code--container'>
<div>

\`\`\`stata
* Figuring this out: http://www.trfetzer.com/conley-spatial-hac-errors-with-fixed-effects/
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ educ, dat, vcov = conley("25 mi"))
\`\`\`
</div>
</div>
                     
                     
## Postestimation

           
### Regression Table

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ age black hisp marr 
eststore est1 
esttab est1

reghdfe wage educ age black hisp
eststore est2
esttab est1 est2
\`\`\`
</div>
<div>

\`\`\`r
est1 = feols(wage ~ educ + age + black + hisp + marr, dat) 
etable(est1)


est2 = feols(wage ~ educ + age + black + hisp, dat) 
etable(est1,est2)
\`\`\`
</div>
</div>
           
### Coefficient Plot

<div class='code--container'>
<div>

\`\`\`stata
reghdfe wage educ age black hisp marr  
eststore est1 
coefplot ...
\`\`\`
</div>
<div>

\`\`\`r
est1 = feols(wage ~ educ + age + black + hisp + marr, dat) 
coefplot(est1)
\`\`\`
</div>
</div>
                     
                     
## Panel Data

Note you don't need to specify panel.vars if you make your data a panel dataset before running the regression using the \`panel\` function. For example, you can use \`panel(dat, ~ id + var)\`.

           
### Lag Variables

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
           
### Lead Variables

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
           
### First Difference

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
                     
                     
## Instrumental Variables

           
### Instrumental Variables

<div class='code--container'>
<div>

\`\`\`stata
ivreghdfe 2sls wage (educ = age)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ 1 | educ ~ age, dat)
\`\`\`
</div>
</div>
           
### with Fixed Effects

<div class='code--container'>
<div>

\`\`\`stata
ivreghdfe 2sls wage (educ = age), absorb(countyfips)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ 1 | countyfips | educ ~ age, dat)
\`\`\`
</div>
</div>
`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[""]}],hi=ye(qf),Uf=()=>hi;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=e=>{hi.value=e});const Wf=/[^\x00-\x7F]/,Kf=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),pi=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),mi=(e,t)=>{const n=t.join(" "),r=Kf(e);if(Wf.test(e))return r.some(o=>n.toLowerCase().indexOf(o)>-1);const s=e.endsWith(" ");return new RegExp(r.map((o,i)=>r.length===i+1&&!s?`(?=.*\\b${pi(o)})`:`(?=.*\\b${pi(o)}\\b)`).join("")+".+","gi").test(n)},Vf=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:r})=>{const s=pe(()=>e.value.filter(a=>a.pathLocale===t.value));return pe(()=>{const a=n.value.trim().toLowerCase();if(!a)return[];const o=[],i=(l,c)=>{mi(a,[c.title])&&o.push({link:`${l.path}#${c.slug}`,title:l.title,header:c.title});for(const u of c.children){if(o.length>=r.value)return;i(l,u)}};for(const l of s.value){if(o.length>=r.value)break;if(mi(a,[l.title,...l.extraFields])){o.push({link:l.path,title:l.title});continue}for(const c of l.headers){if(o.length>=r.value)break;i(l,c)}}return o})},Yf=e=>{const t=ye(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Gf=Ne({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:r}=pl(e),s=or(),a=yu(),o=Uf(),i=ye(null),l=ye(!1),c=ye(""),u=pe(()=>{var C;return(C=t.value[a.value])!==null&&C!==void 0?C:{}}),m=Vf({searchIndex:o,routeLocale:a,query:c,maxSuggestions:r}),{focusIndex:f,focusNext:w,focusPrev:h}=Yf(m);jf({input:i,hotKeys:n});const b=pe(()=>l.value&&!!m.value.length),g=()=>{!b.value||h()},v=()=>{!b.value||w()},x=C=>{if(!b.value)return;const A=m.value[C];!A||s.push(A.link).then(()=>{c.value="",f.value=0})};return()=>le("form",{class:"search-box",role:"search"},[le("input",{ref:i,type:"search",placeholder:u.value.placeholder,autocomplete:"off",spellcheck:!1,value:c.value,onFocus:()=>l.value=!0,onBlur:()=>l.value=!1,onInput:C=>c.value=C.target.value,onKeydown:C=>{switch(C.key){case"ArrowUp":{g();break}case"ArrowDown":{v();break}case"Enter":{C.preventDefault(),x(f.value);break}}}}),b.value&&le("ul",{class:"suggestions",onMouseleave:()=>f.value=-1},m.value.map(({link:C,title:A,header:H},z)=>le("li",{class:["suggestion",{focus:f.value===z}],onMouseenter:()=>f.value=z,onMousedown:()=>x(z)},le("a",{href:C,onClick:k=>k.preventDefault()},[le("span",{class:"page-title"},A),H&&le("span",{class:"page-header"},`> ${H}`)]))))])}});const Xf={},Jf=["s","/"],Zf=5;var Qf=Gt(({app:e})=>{e.component("SearchBox",t=>le(Gf,Ke({locales:Xf,hotKeys:Jf,maxSuggestions:Zf},t)))});const eh=[Pu,ju,Vu,Of,$f,Qf];function gi(e,t,n){var r,s,a;t===void 0&&(t=50),n===void 0&&(n={});var o=(r=n.isImmediate)!=null&&r,i=(s=n.callback)!=null&&s,l=n.maxWait,c=Date.now(),u=[];function m(){if(l!==void 0){var w=Date.now()-c;if(w+t>=l)return l-w}return t}var f=function(){var w=[].slice.call(arguments),h=this;return new Promise(function(b,g){var v=o&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,c=Date.now(),!o){var C=e.apply(h,w);i&&i(C),u.forEach(function(A){return(0,A.resolve)(C)}),u=[]}},m()),v){var x=e.apply(h,w);return i&&i(x),b(x)}u.push({resolve:b,reject:g})})};return f.cancel=function(w){a!==void 0&&clearTimeout(a),u.forEach(function(h){return(0,h.reject)(w)}),u=[]},f}const vi=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,th=()=>window.scrollTo({top:0,behavior:"smooth"});const nh=Ne({name:"BackToTop",setup(){const e=ye(0),t=pe(()=>e.value>300),n=gi(()=>{e.value=vi()},100);qe(()=>{e.value=vi(),window.addEventListener("scroll",()=>n())});const r=le("div",{class:"back-to-top",onClick:th});return()=>le(is,{name:"back-to-top"},{default:()=>t.value?r:null})}}),rh=[nh],sh=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const s=or(),a=Yt(),o=gi(()=>{var l,c,u,m;const f=Array.from(document.querySelectorAll(e)),h=Array.from(document.querySelectorAll(t)).filter(C=>f.some(A=>A.hash===C.hash)),b=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),g=window.innerHeight+b,v=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),x=Math.abs(v-g)<r;for(let C=0;C<h.length;C++){const A=h[C],H=h[C+1],z=C===0&&b===0,k=b>=((c=(l=A.parentElement)===null||l===void 0?void 0:l.offsetTop)!==null&&c!==void 0?c:0)-r,E=!H||b<((m=(u=H.parentElement)===null||u===void 0?void 0:u.offsetTop)!==null&&m!==void 0?m:0)-r;if(!(z||k&&E))continue;const q=decodeURIComponent(s.currentRoute.value.hash),Y=decodeURIComponent(A.hash);if(q===Y)return;if(x){for(let _=C+1;_<h.length;_++)if(q===decodeURIComponent(h[_].hash))return}ah(s,{hash:Y,force:!0});return}},n),i=()=>o();qe(()=>{o(),window.addEventListener("scroll",i)}),cn(()=>{window.removeEventListener("scroll",i)}),Xe(()=>a.value.path,()=>i())},ah=async(e,...t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace(...t).finally(()=>e.options.scrollBehavior=n)},oh="a.sidebar-item",ih=".header-anchor",lh=200,ch=5;var dh=ir(()=>{sh({headerLinkSelector:oh,headerAnchorSelector:ih,delay:lh,offset:ch})}),uh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ur={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(uh,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(h){var b,g;for(b in h)g=h[b],g!==void 0&&h.hasOwnProperty(b)&&(r[b]=g);return this},n.status=null,n.set=function(h){var b=n.isStarted();h=s(h,r.minimum,1),n.status=h===1?null:h;var g=n.render(!b),v=g.querySelector(r.barSelector),x=r.speed,C=r.easing;return g.offsetWidth,i(function(A){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(v,o(h,x,C)),h===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){n.remove(),A()},x)},x)):setTimeout(A,x)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var h=function(){setTimeout(function(){!n.status||(n.trickle(),h())},r.trickleSpeed)};return r.trickle&&h(),this},n.done=function(h){return!h&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(h){var b=n.status;return b?(typeof h!="number"&&(h=(1-b)*s(Math.random()*b,.1,.95)),b=s(b+h,0,.994),n.set(b)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var h=0,b=0;n.promise=function(g){return!g||g.state()==="resolved"?this:(b===0&&n.start(),h++,b++,g.always(function(){b--,b===0?(h=0,n.done()):n.set((h-b)/h)}),this)}}(),n.render=function(h){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var b=document.createElement("div");b.id="nprogress",b.innerHTML=r.template;var g=b.querySelector(r.barSelector),v=h?"-100":a(n.status||0),x=document.querySelector(r.parent),C;return l(g,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(C=b.querySelector(r.spinnerSelector),C&&w(C)),x!=document.body&&u(x,"nprogress-custom-parent"),x.appendChild(b),b},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(r.parent),"nprogress-custom-parent");var h=document.getElementById("nprogress");h&&w(h)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var h=document.body.style,b="WebkitTransform"in h?"Webkit":"MozTransform"in h?"Moz":"msTransform"in h?"ms":"OTransform"in h?"O":"";return b+"Perspective"in h?"translate3d":b+"Transform"in h?"translate":"margin"};function s(h,b,g){return h<b?b:h>g?g:h}function a(h){return(-1+h)*100}function o(h,b,g){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+a(h)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+a(h)+"%,0)"}:v={"margin-left":a(h)+"%"},v.transition="all "+b+"ms "+g,v}var i=function(){var h=[];function b(){var g=h.shift();g&&g(b)}return function(g){h.push(g),h.length==1&&b()}}(),l=function(){var h=["Webkit","O","Moz","ms"],b={};function g(A){return A.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(H,z){return z.toUpperCase()})}function v(A){var H=document.body.style;if(A in H)return A;for(var z=h.length,k=A.charAt(0).toUpperCase()+A.slice(1),E;z--;)if(E=h[z]+k,E in H)return E;return A}function x(A){return A=g(A),b[A]||(b[A]=v(A))}function C(A,H,z){H=x(H),A.style[H]=z}return function(A,H){var z=arguments,k,E;if(z.length==2)for(k in H)E=H[k],E!==void 0&&H.hasOwnProperty(k)&&C(A,k,E);else C(A,z[1],z[2])}}();function c(h,b){var g=typeof h=="string"?h:f(h);return g.indexOf(" "+b+" ")>=0}function u(h,b){var g=f(h),v=g+b;c(g,b)||(h.className=v.substring(1))}function m(h,b){var g=f(h),v;!c(h,b)||(v=g.replace(" "+b+" "," "),h.className=v.substring(1,v.length-1))}function f(h){return(" "+(h.className||"")+" ").replace(/\s+/gi," ")}function w(h){h&&h.parentNode&&h.parentNode.removeChild(h)}return n})})(ur);const fh=()=>{qe(()=>{const e=or(),t=new Set;t.add(e.currentRoute.value.path),ur.exports.configure({showSpinner:!1}),e.beforeEach(n=>{t.has(n.path)||ur.exports.start()}),e.afterEach(n=>{t.add(n.path),ur.exports.done()})})};var hh=ir(()=>{fh()}),ph=ir(()=>{_f(),kf()});const Rn={staticIcon:!1,align:"bottom",selector:'div[class*="language-"]',delay:400,color:"var(--c-brand)",backgroundTransition:!0,backgroundTransitionColor:"var(--code-bg-color)",successTextColor:"var(--c-brand-light)",successText:"Copied!"};var mh=ir(()=>{const e=Yt(),t=()=>{setTimeout(()=>{document.querySelectorAll(Rn.selector).forEach(n=>{if(n.classList.contains(`code-copy-added-${Rn.align}`)||n.querySelector("pre, code[class*='pre-']")===null)return;const r=n.querySelector("pre, code[class*='pre-']"),s=Gc(fi,{parent:n,code:r.innerText,options:Rn}),a=document.createElement("div");n.appendChild(a),s.mount(a),n.classList.add(`code-copy-added-${Rn.align}`)})},Rn.delay+100)};return qe(()=>{t(),window.addEventListener("vuepress-plugin-clipboard-update-event",t)}),cn(()=>{window.removeEventListener("vuepress-plugin-clipboard-update-event",t)}),ya(()=>{t()}),Xe(()=>e.value.path,t),t});const gh=[dh,hh,ph,mh],vh=[["v-8daa1a0e","/",{title:"intro"},["/index.html","/index.md"]],["v-77f0ef68","/data.table/",{title:"data.table"},["/data.table/index.html","/data.table/README.md"]],["v-1c385113","/extras/",{title:"extras"},["/extras/index.html","/extras/README.md"]],["v-37b893e5","/fixest/",{title:"fixest"},["/fixest/index.html","/fixest/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]],yh=vh.reduce((e,[t,n,r,s])=>(e.push({name:t,path:n,component:Jo,meta:r},...s.map(a=>({path:a,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Jo}]),bh=(e,t)=>{const n=pe(()=>bu(Tt.value.locales,t.currentRoute.value.path)),r=pe(()=>xu(Tt.value,n.value)),s=pe(()=>ou(ut.value)),a=pe(()=>mu(ut.value,r.value)),o=pe(()=>hu(a.value,s.value,r.value)),i=pe(()=>vu(ut.value));e.provide(bs,n),e.provide(Xo,r),e.provide(Wo,s),e.provide(pu,a),e.provide(Yo,o),e.provide(Go,i),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>s.value},$headTitle:{get:()=>a.value},$lang:{get:()=>i.value},$page:{get:()=>ut.value},$routeLocale:{get:()=>n.value},$site:{get:()=>Tt.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>Ru}})},wh=e=>{e.component("ClientOnly",eu),e.component("Content",ws)},_h=Xc,xh=md,Eh=async()=>{const e=_h({name:"VuepressApp",setup(){Su();for(const n of gh)n();return()=>[le($o),...rh.map(n=>le(n))]}}),t=Zd({history:xh(du(Tt.value.base)),routes:yh,scrollBehavior:(n,r,s)=>s||(n.hash?{el:n.hash}:{top:0})});t.beforeResolve(async(n,r)=>{var s;(n.path!==r.path||r===tt)&&([ut.value]=await Promise.all([su(n.name),(s=qo[n.name])===null||s===void 0?void 0:s.__asyncLoader()]))}),bh(e,t),wh(e);for(const n of eh)await n({app:e,router:t,siteData:Tt});return e.use(t),{app:e,router:t}};Eh().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{_u as A,Ih as B,Oh as C,le as D,Ru as E,Re as F,eu as G,ft as H,ye as I,Xe as J,Ch as K,Ah as L,uu as M,du as N,or as O,he as P,Ef as Q,qe as R,Qt as S,is as T,Yt as U,Mh as V,Ko as W,$r as X,Cf as Y,Mf as _,Nt as a,ge as b,Gn as c,Eh as createVueApp,Yr as d,kh as e,Ne as f,ks as g,Ze as h,au as i,pe as j,G as k,Rh as l,Th as m,vs as n,_t as o,pl as p,Vr as q,ec as r,oc as s,pr as t,yu as u,Ba as v,da as w,cu as x,Ph as y,Lh as z};
