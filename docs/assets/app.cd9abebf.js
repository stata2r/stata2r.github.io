var yi=Object.defineProperty,bi=Object.defineProperties;var wi=Object.getOwnPropertyDescriptors;var Pa=Object.getOwnPropertySymbols;var _i=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable;var La=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ke=(e,t)=>{for(var n in t||(t={}))_i.call(t,n)&&La(e,n,t[n]);if(Pa)for(var n of Pa(t))xi.call(t,n)&&La(e,n,t[n]);return e},An=(e,t)=>bi(e,wi(t));const fr={};function hr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ei="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Si=hr(Ei);function Ia(e){return!!e||e===""}function Qt(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?Ti(r):Qt(r);if(a)for(const s in a)t[s]=a[s]}return t}else{if(he(e))return e;if(ve(e))return e}}const ki=/;(?![^(]*\))/g,Ci=/:(.+)/;function Ti(e){const t={};return e.split(ki).forEach(n=>{if(n){const r=n.split(Ci);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ft(e){let t="";if(he(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const r=ft(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pr=e=>e==null?"":G(e)||ve(e)&&(e.toString===Na||!Q(e.toString))?JSON.stringify(e,Oa,2):String(e),Oa=(e,t)=>t&&t.__v_isRef?Oa(e,t.value):Lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ma(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!G(t)&&!Ha(t)?String(t):t,de={},Pt=[],$e=()=>{},Ri=()=>!1,Ai=/^on[^a-z]/,en=e=>Ai.test(e),mr=e=>e.startsWith("onUpdate:"),xe=Object.assign,gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pi=Object.prototype.hasOwnProperty,re=(e,t)=>Pi.call(e,t),G=Array.isArray,Lt=e=>Pn(e)==="[object Map]",Ma=e=>Pn(e)==="[object Set]",Q=e=>typeof e=="function",he=e=>typeof e=="string",vr=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Da=e=>ve(e)&&Q(e.then)&&Q(e.catch),Na=Object.prototype.toString,Pn=e=>Na.call(e),Li=e=>Pn(e).slice(8,-1),Ha=e=>Pn(e)==="[object Object]",yr=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tn=hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ii=/-(\w)/g,Ve=Ln(e=>e.replace(Ii,(t,n)=>n?n.toUpperCase():"")),Oi=/\B([A-Z])/g,It=Ln(e=>e.replace(Oi,"-$1").toLowerCase()),In=Ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),br=Ln(e=>e?`on${In(e)}`:""),nn=(e,t)=>!Object.is(e,t),wr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},On=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ja;const Mi=()=>ja||(ja=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;const Mn=[];class Di{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(Mn.push(this),Ye=this)}off(){this.active&&(Mn.pop(),Ye=Mn[Mn.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ni(e,t){t=t||Ye,t&&t.active&&t.effects.push(e)}function Hi(){return Ye}function Fi(e){Ye&&Ye.cleanups.push(e)}const _r=e=>{const t=new Set(e);return t.w=0,t.n=0,t},za=e=>(e.w&nt)>0,Ba=e=>(e.n&nt)>0,ji=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},zi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];za(a)&&!Ba(a)?a.delete(e):t[n++]=a,a.w&=~nt,a.n&=~nt}t.length=n}},xr=new WeakMap;let rn=0,nt=1;const Er=30,an=[];let ht;const pt=Symbol(""),Sr=Symbol("");class kr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Ni(this,r)}run(){if(!this.active)return this.fn();if(!an.includes(this))try{return an.push(ht=this),Bi(),nt=1<<++rn,rn<=Er?ji(this):$a(this),this.fn()}finally{rn<=Er&&zi(this),nt=1<<--rn,mt(),an.pop();const t=an.length;ht=t>0?an[t-1]:void 0}}stop(){this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ot=!0;const Cr=[];function Mt(){Cr.push(Ot),Ot=!1}function Bi(){Cr.push(Ot),Ot=!0}function mt(){const e=Cr.pop();Ot=e===void 0?!0:e}function Le(e,t,n){if(!qa())return;let r=xr.get(e);r||xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=_r()),Ua(a)}function qa(){return Ot&&ht!==void 0}function Ua(e,t){let n=!1;rn<=Er?Ba(e)||(e.n|=nt,n=!za(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e))}function Je(e,t,n,r,a,s){const o=xr.get(e);if(!o)return;let i=[];if(t==="clear")i=[...o.values()];else if(n==="length"&&G(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&i.push(l)});else switch(n!==void 0&&i.push(o.get(n)),t){case"add":G(e)?yr(n)&&i.push(o.get("length")):(i.push(o.get(pt)),Lt(e)&&i.push(o.get(Sr)));break;case"delete":G(e)||(i.push(o.get(pt)),Lt(e)&&i.push(o.get(Sr)));break;case"set":Lt(e)&&i.push(o.get(pt));break}if(i.length===1)i[0]&&Tr(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);Tr(_r(l))}}function Tr(e,t){for(const n of G(e)?e:[...e])(n!==ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const $i=hr("__proto__,__v_isRef,__isVue"),Wa=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(vr)),qi=Rr(),Ui=Rr(!1,!0),Wi=Rr(!0),Ka=Ki();function Ki(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ae(this);for(let s=0,o=this.length;s<o;s++)Le(r,"get",s+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(ae)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=ae(this)[t].apply(this,n);return mt(),r}}),e}function Rr(e=!1,t=!1){return function(r,a,s){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_raw"&&s===(e?t?ll:ts:t?es:Qa).get(r))return r;const o=G(r);if(!e&&o&&re(Ka,a))return Reflect.get(Ka,a,s);const i=Reflect.get(r,a,s);return(vr(a)?Wa.has(a):$i(a))||(e||Le(r,"get",a),t)?i:Ee(i)?!o||!yr(a)?i.value:i:ve(i)?e?Lr(i):sn(i):i}}const Vi=Va(),Yi=Va(!0);function Va(e=!1){return function(n,r,a,s){let o=n[r];if(!e&&!Or(a)&&(a=ae(a),o=ae(o),!G(n)&&Ee(o)&&!Ee(a)))return o.value=a,!0;const i=G(n)&&yr(r)?Number(r)<n.length:re(n,r),l=Reflect.set(n,r,a,s);return n===ae(s)&&(i?nn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),l}}function Gi(e,t){const n=re(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Xi(e,t){const n=Reflect.has(e,t);return(!vr(t)||!Wa.has(t))&&Le(e,"has",t),n}function Ji(e){return Le(e,"iterate",G(e)?"length":pt),Reflect.ownKeys(e)}const Ya={get:qi,set:Vi,deleteProperty:Gi,has:Xi,ownKeys:Ji},Zi={get:Wi,set(e,t){return!0},deleteProperty(e,t){return!0}},Qi=xe({},Ya,{get:Ui,set:Yi}),Ar=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,r=!1){e=e.__v_raw;const a=ae(e),s=ae(t);t!==s&&!n&&Le(a,"get",t),!n&&Le(a,"get",s);const{has:o}=Dn(a),i=r?Ar:n?Mr:on;if(o.call(a,t))return i(e.get(t));if(o.call(a,s))return i(e.get(s));e!==a&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,r=ae(n),a=ae(e);return e!==a&&!t&&Le(r,"has",e),!t&&Le(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Le(ae(e),"iterate",pt),Reflect.get(e,"size",e)}function Ga(e){e=ae(e);const t=ae(this);return Dn(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function Xa(e,t){t=ae(t);const n=ae(this),{has:r,get:a}=Dn(n);let s=r.call(n,e);s||(e=ae(e),s=r.call(n,e));const o=a.call(n,e);return n.set(e,t),s?nn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function Ja(e){const t=ae(this),{has:n,get:r}=Dn(t);let a=n.call(t,e);a||(e=ae(e),a=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return a&&Je(t,"delete",e,void 0),s}function Za(){const e=ae(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function jn(e,t){return function(r,a){const s=this,o=s.__v_raw,i=ae(o),l=t?Ar:e?Mr:on;return!e&&Le(i,"iterate",pt),o.forEach((c,u)=>r.call(a,l(c),l(u),s))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,s=ae(a),o=Lt(s),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?Ar:t?Mr:on;return!t&&Le(s,"iterate",l?Sr:pt),{next(){const{value:m,done:f}=c.next();return f?{value:m,done:f}:{value:i?[u(m[0]),u(m[1])]:u(m),done:f}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:this}}function el(){const e={get(s){return Nn(this,s)},get size(){return Fn(this)},has:Hn,add:Ga,set:Xa,delete:Ja,clear:Za,forEach:jn(!1,!1)},t={get(s){return Nn(this,s,!1,!0)},get size(){return Fn(this)},has:Hn,add:Ga,set:Xa,delete:Ja,clear:Za,forEach:jn(!1,!0)},n={get(s){return Nn(this,s,!0)},get size(){return Fn(this,!0)},has(s){return Hn.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:jn(!0,!1)},r={get(s){return Nn(this,s,!0,!0)},get size(){return Fn(this,!0)},has(s){return Hn.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zn(s,!1,!1),n[s]=zn(s,!0,!1),t[s]=zn(s,!1,!0),r[s]=zn(s,!0,!0)}),[e,n,t,r]}const[tl,nl,rl,al]=el();function Pr(e,t){const n=t?e?al:rl:e?nl:tl;return(r,a,s)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(re(n,a)&&a in r?n:r,a,s)}const sl={get:Pr(!1,!1)},ol={get:Pr(!1,!0)},il={get:Pr(!0,!1)},Qa=new WeakMap,es=new WeakMap,ts=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Li(e))}function sn(e){return e&&e.__v_isReadonly?e:Ir(e,!1,Ya,sl,Qa)}function ul(e){return Ir(e,!1,Qi,ol,es)}function Lr(e){return Ir(e,!0,Zi,il,ts)}function Ir(e,t,n,r,a){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=a.get(e);if(s)return s;const o=dl(e);if(o===0)return e;const i=new Proxy(e,o===2?r:n);return a.set(e,i),i}function Dt(e){return Or(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Or(e){return!!(e&&e.__v_isReadonly)}function ns(e){return Dt(e)||Or(e)}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function rs(e){return On(e,"__v_skip",!0),e}const on=e=>ve(e)?sn(e):e,Mr=e=>ve(e)?Lr(e):e;function as(e){qa()&&(e=ae(e),e.dep||(e.dep=_r()),Ua(e.dep))}function ss(e,t){e=ae(e),e.dep&&Tr(e.dep)}function Ee(e){return Boolean(e&&e.__v_isRef===!0)}function ye(e){return is(e,!1)}function os(e){return is(e,!0)}function is(e,t){return Ee(e)?e:new fl(e,t)}class fl{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ae(t),this._value=n?t:on(t)}get value(){return as(this),this._value}set value(t){t=this._shallow?t:ae(t),nn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:on(t),ss(this))}}function Ze(e){return Ee(e)?e.value:e}const hl={get:(e,t,n)=>Ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Ee(a)&&!Ee(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ls(e){return Dt(e)?e:new Proxy(e,hl)}function pl(e){const t=G(e)?new Array(e.length):{};for(const n in e)t[n]=gl(e,n);return t}class ml{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function gl(e,t,n){const r=e[t];return Ee(r)?r:new ml(e,t,n)}class vl{constructor(t,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new kr(t,()=>{this._dirty||(this._dirty=!0,ss(this))}),this.__v_isReadonly=r}get value(){const t=ae(this);return as(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function pe(e,t){let n,r;const a=Q(e);return a?(n=e,r=$e):(n=e.get,r=e.set),new vl(n,r,a||!r)}Promise.resolve();function yl(e,t,...n){const r=e.vnode.props||de;let a=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:f}=r[u]||de;f?a=n.map(w=>w.trim()):m&&(a=n.map(Fa))}let i,l=r[i=br(t)]||r[i=br(Ve(t))];!l&&s&&(l=r[i=br(It(t))]),l&&je(l,e,6,a);const c=r[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,je(c,e,6,a)}}function cs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const s=e.emits;let o={},i=!1;if(!Q(e)){const l=c=>{const u=cs(c,t,!0);u&&(i=!0,xe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!i?(r.set(e,null),null):(G(s)?s.forEach(l=>o[l]=null):xe(o,s),r.set(e,o),o)}function Dr(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,It(t))||re(e,t))}let Ie=null,Bn=null;function $n(e){const t=Ie;return Ie=e,Bn=e&&e.type.__scopeId||null,t}function bl(e){Bn=e}function wl(){Bn=null}function ds(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Hs(-1);const s=$n(t),o=e(...a);return $n(s),r._d&&Hs(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:s,propsOptions:[o],slots:i,attrs:l,emit:c,render:u,renderCache:m,data:f,setupState:w,ctx:h,inheritAttrs:b}=e;let g,v;const x=$n(e);try{if(n.shapeFlag&4){const A=a||r;g=Ue(u.call(A,A,m,s,w,f,h)),v=l}else{const A=t;g=Ue(A.length>1?A(s,{attrs:l,slots:i,emit:c}):A(s,null)),v=t.props?l:_l(l)}}catch(A){fn.length=0,pn(A,e,1),g=ge(He)}let k=g;if(v&&b!==!1){const A=Object.keys(v),{shapeFlag:H}=k;A.length&&H&(1|6)&&(o&&A.some(mr)&&(v=xl(v,o)),k=Ht(k,v))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),g=k,$n(x),g}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const r in e)(!mr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function El(e,t,n){const{props:r,children:a,component:s}=e,{props:o,children:i,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?us(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const f=u[m];if(o[f]!==r[f]&&!Dr(c,f))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:r===o?!1:r?o?us(r,o,c):!0:!!o;return!1}function us(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const s=r[a];if(t[s]!==e[s]&&!Dr(n,s))return!0}return!1}function Sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kl=e=>e.__isSuspense;function fs(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):_c(e)}function gt(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function _e(e,t,n=!1){const r=we||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&Q(t)?t.call(r.proxy):t}}function Cl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{e.isMounted=!0}),cn(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],Tl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(e,{slots:t}){const n=$s(),r=Cl();let a;return()=>{const s=t.default&&gs(t.default(),!0);if(!s||!s.length)return;const o=ae(e),{mode:i}=o,l=s[0];if(r.isLeaving)return Fr(l);const c=ms(l);if(!c)return Fr(l);const u=Hr(c,o,r,n);jr(c,u);const m=n.subTree,f=m&&ms(m);let w=!1;const{getTransitionKey:h}=c.type;if(h){const b=h();a===void 0?a=b:b!==a&&(a=b,w=!0)}if(f&&f.type!==He&&(!xt(c,f)||w)){const b=Hr(f,o,r,n);if(jr(f,b),i==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},Fr(l);i==="in-out"&&c.type!==He&&(b.delayLeave=(g,v,x)=>{const k=ps(r,f);k[String(f.key)]=f,g._leaveCb=()=>{v(),g._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return l}}},hs=Tl;function ps(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Hr(e,t,n,r){const{appear:a,mode:s,persisted:o=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:m,onLeave:f,onAfterLeave:w,onLeaveCancelled:h,onBeforeAppear:b,onAppear:g,onAfterAppear:v,onAppearCancelled:x}=t,k=String(e.key),A=ps(n,e),H=(C,E)=>{C&&je(C,r,9,E)},j={mode:s,persisted:o,beforeEnter(C){let E=i;if(!n.isMounted)if(a)E=b||i;else return;C._leaveCb&&C._leaveCb(!0);const V=A[k];V&&xt(e,V)&&V.el._leaveCb&&V.el._leaveCb(),H(E,[C])},enter(C){let E=l,V=c,q=u;if(!n.isMounted)if(a)E=g||l,V=v||c,q=x||u;else return;let Y=!1;const _=C._enterCb=D=>{Y||(Y=!0,D?H(q,[C]):H(V,[C]),j.delayedLeave&&j.delayedLeave(),C._enterCb=void 0)};E?(E(C,_),E.length<=1&&_()):_()},leave(C,E){const V=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return E();H(m,[C]);let q=!1;const Y=C._leaveCb=_=>{q||(q=!0,E(),_?H(h,[C]):H(w,[C]),C._leaveCb=void 0,A[V]===e&&delete A[V])};A[V]=e,f?(f(C,Y),f.length<=1&&Y()):Y()},clone(C){return Hr(C,t,n,r)}};return j}function Fr(e){if(ln(e))return e=Ht(e),e.children=null,e}function ms(e){return ln(e)?e.children?e.children[0]:void 0:e}function jr(e,t){e.shapeFlag&6&&e.component?jr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gs(e,t=!1){let n=[],r=0;for(let a=0;a<e.length;a++){const s=e[a];s.type===Re?(s.patchFlag&128&&r++,n=n.concat(gs(s.children,t))):(t||s.type!==He)&&n.push(s)}if(r>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function Ne(e){return Q(e)?{setup:e,name:e.name}:e}const qn=e=>!!e.type.__asyncLoader;function vt(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:a=200,timeout:s,suspensible:o=!0,onError:i}=e;let l=null,c,u=0;const m=()=>(u++,l=null,f()),f=()=>{let w;return l||(w=l=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),i)return new Promise((b,g)=>{i(h,()=>b(m()),()=>g(h),u+1)});throw h}).then(h=>w!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return Ne({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const w=we;if(c)return()=>zr(c,w);const h=x=>{l=null,pn(x,w,13,!r)};if(o&&w.suspense||hn)return f().then(x=>()=>zr(x,w)).catch(x=>(h(x),()=>r?ge(r,{error:x}):null));const b=ye(!1),g=ye(),v=ye(!!a);return a&&setTimeout(()=>{v.value=!1},a),s!=null&&setTimeout(()=>{if(!b.value&&!g.value){const x=new Error(`Async component timed out after ${s}ms.`);h(x),g.value=x}},s),f().then(()=>{b.value=!0,w.parent&&ln(w.parent.vnode)&&na(w.parent.update)}).catch(x=>{h(x),g.value=x}),()=>{if(b.value&&c)return zr(c,w);if(g.value&&r)return ge(r,{error:g.value});if(n&&!v.value)return ge(n)}}})}function zr(e,{vnode:{ref:t,props:n,children:r}}){const a=ge(e,n,r);return a.ref=t,a}const ln=e=>e.type.__isKeepAlive;function Rl(e,t){vs(e,"a",t)}function Al(e,t){vs(e,"da",t)}function vs(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Un(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ln(a.parent.vnode)&&Pl(r,t,n,a),a=a.parent}}function Pl(e,t,n,r){const a=Un(t,e,r,!0);Br(()=>{gr(r[t],a)},n)}function Un(e,t,n=we,r=!1){if(n){const a=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),Ft(n);const i=je(t,n,e,o);return Et(),mt(),i});return r?a.unshift(s):a.push(s),s}}const Qe=e=>(t,n=we)=>(!hn||e==="sp")&&Un(e,t,n),Ll=Qe("bm"),qe=Qe("m"),Il=Qe("bu"),ys=Qe("u"),cn=Qe("bum"),Br=Qe("um"),Ol=Qe("sp"),Ml=Qe("rtg"),Dl=Qe("rtc");function Nl(e,t=we){Un("ec",e,t)}let $r=!0;function Hl(e){const t=_s(e),n=e.proxy,r=e.ctx;$r=!1,t.beforeCreate&&bs(t.beforeCreate,e,"bc");const{data:a,computed:s,methods:o,watch:i,provide:l,inject:c,created:u,beforeMount:m,mounted:f,beforeUpdate:w,updated:h,activated:b,deactivated:g,beforeDestroy:v,beforeUnmount:x,destroyed:k,unmounted:A,render:H,renderTracked:j,renderTriggered:C,errorCaptured:E,serverPrefetch:V,expose:q,inheritAttrs:Y,components:_,directives:D,filters:K}=t;if(c&&Fl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const te=o[Z];Q(te)&&(r[Z]=te.bind(n))}if(a){const Z=a.call(n,n);ve(Z)&&(e.data=sn(Z))}if($r=!0,s)for(const Z in s){const te=s[Z],be=Q(te)?te.bind(n,n):Q(te.get)?te.get.bind(n,n):$e,Se=!Q(te)&&Q(te.set)?te.set.bind(n):$e,Ae=pe({get:be,set:Se});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Me=>Ae.value=Me})}if(i)for(const Z in i)ws(i[Z],r,n,Z);if(l){const Z=Q(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(te=>{gt(te,Z[te])})}u&&bs(u,e,"c");function $(Z,te){G(te)?te.forEach(be=>Z(be.bind(n))):te&&Z(te.bind(n))}if($(Ll,m),$(qe,f),$(Il,w),$(ys,h),$(Rl,b),$(Al,g),$(Nl,E),$(Dl,j),$(Ml,C),$(cn,x),$(Br,A),$(Ol,V),G(q))if(q.length){const Z=e.exposed||(e.exposed={});q.forEach(te=>{Object.defineProperty(Z,te,{get:()=>n[te],set:be=>n[te]=be})})}else e.exposed||(e.exposed={});H&&e.render===$e&&(e.render=H),Y!=null&&(e.inheritAttrs=Y),_&&(e.components=_),D&&(e.directives=D)}function Fl(e,t,n=$e,r=!1){G(e)&&(e=qr(e));for(const a in e){const s=e[a];let o;ve(s)?"default"in s?o=_e(s.from||a,s.default,!0):o=_e(s.from||a):o=_e(s),Ee(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[a]=o}}function bs(e,t,n){je(G(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ws(e,t,n,r){const a=r.includes(".")?Qs(n,r):()=>n[r];if(he(e)){const s=t[e];Q(s)&&Xe(a,s)}else if(Q(e))Xe(a,e.bind(n));else if(ve(e))if(G(e))e.forEach(s=>ws(s,t,n,r));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&Xe(a,s,e)}}function _s(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,i=s.get(t);let l;return i?l=i:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Wn(l,c,o,!0)),Wn(l,t,o)),s.set(t,l),l}function Wn(e,t,n,r=!1){const{mixins:a,extends:s}=t;s&&Wn(e,s,n,!0),a&&a.forEach(o=>Wn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const i=jl[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const jl={data:xs,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:yt,directives:yt,watch:Bl,provide:xs,inject:zl};function xs(e,t){return t?e?function(){return xe(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function zl(e,t){return yt(qr(e),qr(t))}function qr(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?xe(xe(Object.create(null),e),t):t}function Bl(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=ke(e[r],t[r]);return n}function $l(e,t,n,r=!1){const a={},s={};On(s,Jn,1),e.propsDefaults=Object.create(null),Es(e,t,a,s);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ul(a):e.type.props?e.props=a:e.props=s,e.attrs=s}function ql(e,t,n,r){const{props:a,attrs:s,vnode:{patchFlag:o}}=e,i=ae(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let f=u[m];const w=t[f];if(l)if(re(s,f))w!==s[f]&&(s[f]=w,c=!0);else{const h=Ve(f);a[h]=Ur(l,i,h,w,e,!1)}else w!==s[f]&&(s[f]=w,c=!0)}}}else{Es(e,t,a,s)&&(c=!0);let u;for(const m in i)(!t||!re(t,m)&&((u=It(m))===m||!re(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Ur(l,i,m,void 0,e,!0)):delete a[m]);if(s!==i)for(const m in s)(!t||!re(t,m))&&(delete s[m],c=!0)}c&&Je(e,"set","$attrs")}function Es(e,t,n,r){const[a,s]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(tn(l))continue;const c=t[l];let u;a&&re(a,u=Ve(l))?!s||!s.includes(u)?n[u]=c:(i||(i={}))[u]=c:Dr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ae(n),c=i||de;for(let u=0;u<s.length;u++){const m=s[u];n[m]=Ur(a,l,m,c[m],e,!re(c,m))}}return o}function Ur(e,t,n,r,a,s){const o=e[n];if(o!=null){const i=re(o,"default");if(i&&r===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),Et())}else r=l}o[0]&&(s&&!i?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function Ss(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const s=e.props,o={},i=[];let l=!1;if(!Q(e)){const u=m=>{l=!0;const[f,w]=Ss(m,t,!0);xe(o,f),w&&i.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return r.set(e,Pt),Pt;if(G(s))for(let u=0;u<s.length;u++){const m=Ve(s[u]);ks(m)&&(o[m]=de)}else if(s)for(const u in s){const m=Ve(u);if(ks(m)){const f=s[u],w=o[m]=G(f)||Q(f)?{type:f}:f;if(w){const h=Rs(Boolean,w.type),b=Rs(String,w.type);w[0]=h>-1,w[1]=b<0||h<b,(h>-1||re(w,"default"))&&i.push(m)}}}const c=[o,i];return r.set(e,c),c}function ks(e){return e[0]!=="$"}function Cs(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ts(e,t){return Cs(e)===Cs(t)}function Rs(e,t){return G(t)?t.findIndex(n=>Ts(n,e)):Q(t)&&Ts(t,e)?0:-1}const As=e=>e[0]==="_"||e==="$stable",Wr=e=>G(e)?e.map(Ue):[Ue(e)],Ul=(e,t,n)=>{const r=ds((...a)=>Wr(t(...a)),n);return r._c=!1,r},Ps=(e,t,n)=>{const r=e._ctx;for(const a in e){if(As(a))continue;const s=e[a];if(Q(s))t[a]=Ul(a,s,r);else if(s!=null){const o=Wr(s);t[a]=()=>o}}},Ls=(e,t)=>{const n=Wr(t);e.slots.default=()=>n},Wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ae(t),On(t,"_",n)):Ps(t,e.slots={})}else e.slots={},t&&Ls(e,t);On(e.slots,Jn,1)},Kl=(e,t,n)=>{const{vnode:r,slots:a}=e;let s=!0,o=de;if(r.shapeFlag&32){const i=t._;i?n&&i===1?s=!1:(xe(a,t),!n&&i===1&&delete a._):(s=!t.$stable,Ps(t,a)),o=t}else t&&(Ls(e,t),o={default:1});if(s)for(const i in a)!As(i)&&!(i in o)&&delete a[i]};function kh(e,t){const n=Ie;if(n===null)return e;const r=n.proxy,a=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,i,l,c=de]=t[s];Q(o)&&(o={mounted:o,updated:o}),o.deep&&St(i),a.push({dir:o,instance:r,value:i,oldValue:void 0,arg:l,modifiers:c})}return e}function Ge(e,t,n,r){const a=e.dirs,s=t&&t.dirs;for(let o=0;o<a.length;o++){const i=a[o];s&&(i.oldValue=s[o].value);let l=i.dir[r];l&&(Mt(),je(l,n,8,[e.el,i,e,t]),mt())}}function Is(){return{app:null,config:{isNativeTag:Ri,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Yl(e,t){return function(r,a=null){a!=null&&!ve(a)&&(a=null);const s=Is(),o=new Set;let i=!1;const l=s.app={_uid:Vl++,_component:r,_props:a,_container:null,_context:s,_instance:null,version:Ec,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,m){if(!i){const f=ge(r,a);return f.appContext=s,u&&t?t(f,c):e(f,c,m),i=!0,l._container=c,c.__vue_app__=l,Jr(f.component)||f.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Kn(e,t,n,r,a=!1){if(G(e)){e.forEach((f,w)=>Kn(f,t&&(G(t)?t[w]:t),n,r,a));return}if(qn(r)&&!a)return;const s=r.shapeFlag&4?Jr(r.component)||r.component.proxy:r.el,o=a?null:s,{i,r:l}=e,c=t&&t.r,u=i.refs===de?i.refs={}:i.refs,m=i.setupState;if(c!=null&&c!==l&&(he(c)?(u[c]=null,re(m,c)&&(m[c]=null)):Ee(c)&&(c.value=null)),Q(l))ot(l,i,12,[o,u]);else{const f=he(l),w=Ee(l);if(f||w){const h=()=>{if(e.f){const b=f?u[l]:l.value;a?G(b)&&gr(b,s):G(b)?b.includes(s)||b.push(s):f?u[l]=[s]:(l.value=[s],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,re(m,l)&&(m[l]=o)):Ee(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(h.id=-1,Te(h,n)):h()}}}let at=!1;const Vn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Kr=e=>e.nodeType===8;function Gl(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:a,parentNode:s,remove:o,insert:i,createComment:l}}=e,c=(g,v)=>{if(!v.hasChildNodes()){n(null,g,v),tr();return}at=!1,u(v.firstChild,g,null,null,null),tr(),at&&console.error("Hydration completed but contains mismatches.")},u=(g,v,x,k,A,H=!1)=>{const j=Kr(g)&&g.data==="[",C=()=>h(g,v,x,k,A,j),{type:E,ref:V,shapeFlag:q}=v,Y=g.nodeType;v.el=g;let _=null;switch(E){case dn:Y!==3?_=C():(g.data!==v.children&&(at=!0,g.data=v.children),_=a(g));break;case He:Y!==8||j?_=C():_=a(g);break;case un:if(Y!==1)_=C();else{_=g;const D=!v.children.length;for(let K=0;K<v.staticCount;K++)D&&(v.children+=_.outerHTML),K===v.staticCount-1&&(v.anchor=_),_=a(_);return _}break;case Re:j?_=w(g,v,x,k,A,H):_=C();break;default:if(q&1)Y!==1||v.type.toLowerCase()!==g.tagName.toLowerCase()?_=C():_=m(g,v,x,k,A,H);else if(q&6){v.slotScopeIds=A;const D=s(g);if(t(v,D,null,x,k,Vn(D),H),_=j?b(g):a(g),qn(v)){let K;j?(K=ge(Re),K.anchor=_?_.previousSibling:D.lastChild):K=g.nodeType===3?Yr(""):ge("div"),K.el=g,v.component.subTree=K}}else q&64?Y!==8?_=C():_=v.type.hydrate(g,v,x,k,A,H,e,f):q&128&&(_=v.type.hydrate(g,v,x,k,Vn(s(g)),A,H,e,u))}return V!=null&&Kn(V,null,k,v),_},m=(g,v,x,k,A,H)=>{H=H||!!v.dynamicChildren;const{type:j,props:C,patchFlag:E,shapeFlag:V,dirs:q}=v,Y=j==="input"&&q||j==="option";if(Y||E!==-1){if(q&&Ge(v,null,x,"created"),C)if(Y||!H||E&(16|32))for(const D in C)(Y&&D.endsWith("value")||en(D)&&!tn(D))&&r(g,D,null,C[D],!1,void 0,x);else C.onClick&&r(g,"onClick",null,C.onClick,!1,void 0,x);let _;if((_=C&&C.onVnodeBeforeMount)&&Fe(_,x,v),q&&Ge(v,null,x,"beforeMount"),((_=C&&C.onVnodeMounted)||q)&&fs(()=>{_&&Fe(_,x,v),q&&Ge(v,null,x,"mounted")},k),V&16&&!(C&&(C.innerHTML||C.textContent))){let D=f(g.firstChild,v,g,x,k,A,H);for(;D;){at=!0;const K=D;D=D.nextSibling,o(K)}}else V&8&&g.textContent!==v.children&&(at=!0,g.textContent=v.children)}return g.nextSibling},f=(g,v,x,k,A,H,j)=>{j=j||!!v.dynamicChildren;const C=v.children,E=C.length;for(let V=0;V<E;V++){const q=j?C[V]:C[V]=Ue(C[V]);if(g)g=u(g,q,k,A,H,j);else{if(q.type===dn&&!q.children)continue;at=!0,n(null,q,x,null,k,A,Vn(x),H)}}return g},w=(g,v,x,k,A,H)=>{const{slotScopeIds:j}=v;j&&(A=A?A.concat(j):j);const C=s(g),E=f(a(g),v,C,x,k,A,H);return E&&Kr(E)&&E.data==="]"?a(v.anchor=E):(at=!0,i(v.anchor=l("]"),C,E),E)},h=(g,v,x,k,A,H)=>{if(at=!0,v.el=null,H){const E=b(g);for(;;){const V=a(g);if(V&&V!==E)o(V);else break}}const j=a(g),C=s(g);return o(g),n(null,v,C,j,x,k,Vn(C),A),j},b=g=>{let v=0;for(;g;)if(g=a(g),g&&Kr(g)&&(g.data==="["&&v++,g.data==="]")){if(v===0)return a(g);v--}return g};return[c,u]}const Te=fs;function Xl(e){return Os(e)}function Jl(e){return Os(e,Gl)}function Os(e,t){const n=Mi();n.__VUE__=!0;const{insert:r,remove:a,patchProp:s,createElement:o,createText:i,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:f,setScopeId:w=$e,cloneNode:h,insertStaticContent:b}=e,g=(d,p,y,R=null,T=null,L=null,N=!1,I=null,M=!!p.dynamicChildren)=>{if(d===p)return;d&&!xt(d,p)&&(R=z(d),Ce(d,T,L,!0),d=null),p.patchFlag===-2&&(M=!1,p.dynamicChildren=null);const{type:P,ref:U,shapeFlag:B}=p;switch(P){case dn:v(d,p,y,R);break;case He:x(d,p,y,R);break;case un:d==null&&k(p,y,R,N);break;case Re:D(d,p,y,R,T,L,N,I,M);break;default:B&1?j(d,p,y,R,T,L,N,I,M):B&6?K(d,p,y,R,T,L,N,I,M):(B&64||B&128)&&P.process(d,p,y,R,T,L,N,I,M,ie)}U!=null&&T&&Kn(U,d&&d.ref,L,p||d,!p)},v=(d,p,y,R)=>{if(d==null)r(p.el=i(p.children),y,R);else{const T=p.el=d.el;p.children!==d.children&&c(T,p.children)}},x=(d,p,y,R)=>{d==null?r(p.el=l(p.children||""),y,R):p.el=d.el},k=(d,p,y,R)=>{[d.el,d.anchor]=b(d.children,p,y,R)},A=({el:d,anchor:p},y,R)=>{let T;for(;d&&d!==p;)T=f(d),r(d,y,R),d=T;r(p,y,R)},H=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),a(d),d=y;a(p)},j=(d,p,y,R,T,L,N,I,M)=>{N=N||p.type==="svg",d==null?C(p,y,R,T,L,N,I,M):q(d,p,T,L,N,I,M)},C=(d,p,y,R,T,L,N,I)=>{let M,P;const{type:U,props:B,shapeFlag:W,transition:X,patchFlag:ne,dirs:me}=d;if(d.el&&h!==void 0&&ne===-1)M=d.el=h(d.el);else{if(M=d.el=o(d.type,L,B&&B.is,B),W&8?u(M,d.children):W&16&&V(d.children,M,null,R,T,L&&U!=="foreignObject",N,I),me&&Ge(d,null,R,"created"),B){for(const fe in B)fe!=="value"&&!tn(fe)&&s(M,fe,null,B[fe],L,d.children,R,T,O);"value"in B&&s(M,"value",null,B.value),(P=B.onVnodeBeforeMount)&&Fe(P,R,d)}E(M,d,d.scopeId,N,R)}me&&Ge(d,null,R,"beforeMount");const ce=(!T||T&&!T.pendingBranch)&&X&&!X.persisted;ce&&X.beforeEnter(M),r(M,p,y),((P=B&&B.onVnodeMounted)||ce||me)&&Te(()=>{P&&Fe(P,R,d),ce&&X.enter(M),me&&Ge(d,null,R,"mounted")},T)},E=(d,p,y,R,T)=>{if(y&&w(d,y),R)for(let L=0;L<R.length;L++)w(d,R[L]);if(T){let L=T.subTree;if(p===L){const N=T.vnode;E(d,N,N.scopeId,N.slotScopeIds,T.parent)}}},V=(d,p,y,R,T,L,N,I,M=0)=>{for(let P=M;P<d.length;P++){const U=d[P]=I?st(d[P]):Ue(d[P]);g(null,U,p,y,R,T,L,N,I)}},q=(d,p,y,R,T,L,N)=>{const I=p.el=d.el;let{patchFlag:M,dynamicChildren:P,dirs:U}=p;M|=d.patchFlag&16;const B=d.props||de,W=p.props||de;let X;y&&bt(y,!1),(X=W.onVnodeBeforeUpdate)&&Fe(X,y,p,d),U&&Ge(p,d,y,"beforeUpdate"),y&&bt(y,!0);const ne=T&&p.type!=="foreignObject";if(P?Y(d.dynamicChildren,P,I,y,R,ne,L):N||be(d,p,I,null,y,R,ne,L,!1),M>0){if(M&16)_(I,p,B,W,y,R,T);else if(M&2&&B.class!==W.class&&s(I,"class",null,W.class,T),M&4&&s(I,"style",B.style,W.style,T),M&8){const me=p.dynamicProps;for(let ce=0;ce<me.length;ce++){const fe=me[ce],Be=B[fe],At=W[fe];(At!==Be||fe==="value")&&s(I,fe,Be,At,T,d.children,y,R,O)}}M&1&&d.children!==p.children&&u(I,p.children)}else!N&&P==null&&_(I,p,B,W,y,R,T);((X=W.onVnodeUpdated)||U)&&Te(()=>{X&&Fe(X,y,p,d),U&&Ge(p,d,y,"updated")},R)},Y=(d,p,y,R,T,L,N)=>{for(let I=0;I<p.length;I++){const M=d[I],P=p[I],U=M.el&&(M.type===Re||!xt(M,P)||M.shapeFlag&(6|64))?m(M.el):y;g(M,P,U,null,R,T,L,N,!0)}},_=(d,p,y,R,T,L,N)=>{if(y!==R){for(const I in R){if(tn(I))continue;const M=R[I],P=y[I];M!==P&&I!=="value"&&s(d,I,P,M,N,p.children,T,L,O)}if(y!==de)for(const I in y)!tn(I)&&!(I in R)&&s(d,I,y[I],null,N,p.children,T,L,O);"value"in R&&s(d,"value",y.value,R.value)}},D=(d,p,y,R,T,L,N,I,M)=>{const P=p.el=d?d.el:i(""),U=p.anchor=d?d.anchor:i("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:X}=p;X&&(I=I?I.concat(X):X),d==null?(r(P,y,R),r(U,y,R),V(p.children,y,U,T,L,N,I,M)):B>0&&B&64&&W&&d.dynamicChildren?(Y(d.dynamicChildren,W,y,T,L,N,I),(p.key!=null||T&&p===T.subTree)&&Ms(d,p,!0)):be(d,p,y,U,T,L,N,I,M)},K=(d,p,y,R,T,L,N,I,M)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?T.ctx.activate(p,y,R,N,M):se(p,y,R,T,L,N,M):$(d,p,M)},se=(d,p,y,R,T,L,N)=>{const I=d.component=dc(d,R,T);if(ln(d)&&(I.ctx.renderer=ie),uc(I),I.asyncDep){if(T&&T.registerDep(I,Z),!d.el){const M=I.subTree=ge(He);x(null,M,p,y)}return}Z(I,d,p,y,T,L,N)},$=(d,p,y)=>{const R=p.component=d.component;if(El(d,p,y))if(R.asyncDep&&!R.asyncResolved){te(R,p,y);return}else R.next=p,bc(R.update),R.update();else p.component=d.component,p.el=d.el,R.vnode=p},Z=(d,p,y,R,T,L,N)=>{const I=()=>{if(d.isMounted){let{next:U,bu:B,u:W,parent:X,vnode:ne}=d,me=U,ce;bt(d,!1),U?(U.el=ne.el,te(d,U,N)):U=ne,B&&wr(B),(ce=U.props&&U.props.onVnodeBeforeUpdate)&&Fe(ce,X,U,ne),bt(d,!0);const fe=Nr(d),Be=d.subTree;d.subTree=fe,g(Be,fe,m(Be.el),z(Be),d,T,L),U.el=fe.el,me===null&&Sl(d,fe.el),W&&Te(W,T),(ce=U.props&&U.props.onVnodeUpdated)&&Te(()=>Fe(ce,X,U,ne),T)}else{let U;const{el:B,props:W}=p,{bm:X,m:ne,parent:me}=d,ce=qn(p);if(bt(d,!1),X&&wr(X),!ce&&(U=W&&W.onVnodeBeforeMount)&&Fe(U,me,p),bt(d,!0),B&&J){const fe=()=>{d.subTree=Nr(d),J(B,d.subTree,d,T,null)};ce?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=Nr(d);g(null,fe,y,R,d,T,L),p.el=fe.el}if(ne&&Te(ne,T),!ce&&(U=W&&W.onVnodeMounted)){const fe=p;Te(()=>Fe(U,me,fe),T)}p.shapeFlag&256&&d.a&&Te(d.a,T),d.isMounted=!0,p=y=R=null}},M=d.effect=new kr(I,()=>na(d.update),d.scope),P=d.update=M.run.bind(M);P.id=d.uid,bt(d,!0),P()},te=(d,p,y)=>{p.component=d;const R=d.vnode.props;d.vnode=p,d.next=null,ql(d,p.props,R,y),Kl(d,p.children,y),Mt(),ra(void 0,d.update),mt()},be=(d,p,y,R,T,L,N,I,M=!1)=>{const P=d&&d.children,U=d?d.shapeFlag:0,B=p.children,{patchFlag:W,shapeFlag:X}=p;if(W>0){if(W&128){Ae(P,B,y,R,T,L,N,I,M);return}else if(W&256){Se(P,B,y,R,T,L,N,I,M);return}}X&8?(U&16&&O(P,T,L),B!==P&&u(y,B)):U&16?X&16?Ae(P,B,y,R,T,L,N,I,M):O(P,T,L,!0):(U&8&&u(y,""),X&16&&V(B,y,R,T,L,N,I,M))},Se=(d,p,y,R,T,L,N,I,M)=>{d=d||Pt,p=p||Pt;const P=d.length,U=p.length,B=Math.min(P,U);let W;for(W=0;W<B;W++){const X=p[W]=M?st(p[W]):Ue(p[W]);g(d[W],X,y,null,T,L,N,I,M)}P>U?O(d,T,L,!0,!1,B):V(p,y,R,T,L,N,I,M,B)},Ae=(d,p,y,R,T,L,N,I,M)=>{let P=0;const U=p.length;let B=d.length-1,W=U-1;for(;P<=B&&P<=W;){const X=d[P],ne=p[P]=M?st(p[P]):Ue(p[P]);if(xt(X,ne))g(X,ne,y,null,T,L,N,I,M);else break;P++}for(;P<=B&&P<=W;){const X=d[B],ne=p[W]=M?st(p[W]):Ue(p[W]);if(xt(X,ne))g(X,ne,y,null,T,L,N,I,M);else break;B--,W--}if(P>B){if(P<=W){const X=W+1,ne=X<U?p[X].el:R;for(;P<=W;)g(null,p[P]=M?st(p[P]):Ue(p[P]),y,ne,T,L,N,I,M),P++}}else if(P>W)for(;P<=B;)Ce(d[P],T,L,!0),P++;else{const X=P,ne=P,me=new Map;for(P=ne;P<=W;P++){const Pe=p[P]=M?st(p[P]):Ue(p[P]);Pe.key!=null&&me.set(Pe.key,P)}let ce,fe=0;const Be=W-ne+1;let At=!1,Ta=0;const Zt=new Array(Be);for(P=0;P<Be;P++)Zt[P]=0;for(P=X;P<=B;P++){const Pe=d[P];if(fe>=Be){Ce(Pe,T,L,!0);continue}let We;if(Pe.key!=null)We=me.get(Pe.key);else for(ce=ne;ce<=W;ce++)if(Zt[ce-ne]===0&&xt(Pe,p[ce])){We=ce;break}We===void 0?Ce(Pe,T,L,!0):(Zt[We-ne]=P+1,We>=Ta?Ta=We:At=!0,g(Pe,p[We],y,null,T,L,N,I,M),fe++)}const Ra=At?Zl(Zt):Pt;for(ce=Ra.length-1,P=Be-1;P>=0;P--){const Pe=ne+P,We=p[Pe],Aa=Pe+1<U?p[Pe+1].el:R;Zt[P]===0?g(null,We,y,Aa,T,L,N,I,M):At&&(ce<0||P!==Ra[ce]?Me(We,y,Aa,2):ce--)}}},Me=(d,p,y,R,T=null)=>{const{el:L,type:N,transition:I,children:M,shapeFlag:P}=d;if(P&6){Me(d.component.subTree,p,y,R);return}if(P&128){d.suspense.move(p,y,R);return}if(P&64){N.move(d,p,y,ie);return}if(N===Re){r(L,p,y);for(let B=0;B<M.length;B++)Me(M[B],p,y,R);r(d.anchor,p,y);return}if(N===un){A(d,p,y);return}if(R!==2&&P&1&&I)if(R===0)I.beforeEnter(L),r(L,p,y),Te(()=>I.enter(L),T);else{const{leave:B,delayLeave:W,afterLeave:X}=I,ne=()=>r(L,p,y),me=()=>{B(L,()=>{ne(),X&&X()})};W?W(L,ne,me):me()}else r(L,p,y)},Ce=(d,p,y,R=!1,T=!1)=>{const{type:L,props:N,ref:I,children:M,dynamicChildren:P,shapeFlag:U,patchFlag:B,dirs:W}=d;if(I!=null&&Kn(I,null,y,d,!0),U&256){p.ctx.deactivate(d);return}const X=U&1&&W,ne=!qn(d);let me;if(ne&&(me=N&&N.onVnodeBeforeUnmount)&&Fe(me,p,d),U&6)F(d.component,y,R);else{if(U&128){d.suspense.unmount(y,R);return}X&&Ge(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,y,T,ie,R):P&&(L!==Re||B>0&&B&64)?O(P,p,y,!1,!0):(L===Re&&B&(128|256)||!T&&U&16)&&O(M,p,y),R&&Jt(d)}(ne&&(me=N&&N.onVnodeUnmounted)||X)&&Te(()=>{me&&Fe(me,p,d),X&&Ge(d,null,p,"unmounted")},y)},Jt=d=>{const{type:p,el:y,anchor:R,transition:T}=d;if(p===Re){S(y,R);return}if(p===un){H(d);return}const L=()=>{a(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:N,delayLeave:I}=T,M=()=>N(y,L);I?I(d.el,L,M):M()}else L()},S=(d,p)=>{let y;for(;d!==p;)y=f(d),a(d),d=y;a(p)},F=(d,p,y)=>{const{bum:R,scope:T,update:L,subTree:N,um:I}=d;R&&wr(R),T.stop(),L&&(L.active=!1,Ce(N,d,p,y)),I&&Te(I,p),Te(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(d,p,y,R=!1,T=!1,L=0)=>{for(let N=L;N<d.length;N++)Ce(d[N],p,y,R,T)},z=d=>d.shapeFlag&6?z(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),oe=(d,p,y)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):g(p._vnode||null,d,p,null,null,null,y),tr(),p._vnode=d},ie={p:g,um:Ce,m:Me,r:Jt,mt:se,mc:V,pc:be,pbc:Y,n:z,o:e};let ee,J;return t&&([ee,J]=t(ie)),{render:oe,hydrate:ee,createApp:Yl(oe,ee)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ms(e,t,n=!1){const r=e.children,a=t.children;if(G(r)&&G(a))for(let s=0;s<r.length;s++){const o=r[s];let i=a[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[s]=st(a[s]),i.el=o.el),n||Ms(o,i))}}function Zl(e){const t=e.slice(),n=[0];let r,a,s,o,i;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(s=0,o=n.length-1;s<o;)i=s+o>>1,e[n[i]]<c?s=i+1:o=i;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Ql=e=>e.__isTeleport,Ds="components";function ec(e,t){return nc(Ds,e,!0,t)||e}const tc=Symbol();function nc(e,t,n=!0,r=!1){const a=Ie||we;if(a){const s=a.type;if(e===Ds){const i=mc(s);if(i&&(i===t||i===Ve(t)||i===In(Ve(t))))return s}const o=Ns(a[e]||s[e],t)||Ns(a.appContext[e],t);return!o&&r?s:o}}function Ns(e,t){return e&&(e[t]||e[Ve(t)]||e[In(Ve(t))])}const Re=Symbol(void 0),dn=Symbol(void 0),He=Symbol(void 0),un=Symbol(void 0),fn=[];let wt=null;function _t(e=!1){fn.push(wt=e?null:[])}function rc(){fn.pop(),wt=fn[fn.length-1]||null}let Yn=1;function Hs(e){Yn+=e}function Fs(e){return e.dynamicChildren=Yn>0?wt||Pt:null,rc(),Yn>0&&wt&&wt.push(e),e}function Gn(e,t,n,r,a,s){return Fs(Nt(e,t,n,r,a,s,!0))}function Vr(e,t,n,r,a){return Fs(ge(e,t,n,r,a,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",js=({key:e})=>e!=null?e:null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||Ee(e)||Q(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function Nt(e,t=null,n=null,r=0,a=null,s=e===Re?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&js(t),ref:t&&Zn(t),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return i?(Gr(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Yn>0&&!o&&wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wt.push(l),l}const ge=ac;function ac(e,t=null,n=null,r=0,a=null,s=!1){if((!e||e===tc)&&(e=He),Xn(e)){const i=Ht(e,t,!0);return n&&Gr(i,n),i}if(gc(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:i,style:l}=t;i&&!he(i)&&(t.class=ft(i)),ve(l)&&(ns(l)&&!G(l)&&(l=xe({},l)),t.style=Qt(l))}const o=he(e)?1:kl(e)?128:Ql(e)?64:ve(e)?4:Q(e)?2:0;return Nt(e,t,n,r,a,o,s,!0)}function sc(e){return e?ns(e)||Jn in e?xe({},e):e:null}function Ht(e,t,n=!1){const{props:r,ref:a,patchFlag:s,children:o}=e,i=t?oc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&js(i),ref:t&&t.ref?n&&a?G(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor}}function Yr(e=" ",t=0){return ge(dn,null,e,t)}function Ch(e,t){const n=ge(un,null,e);return n.staticCount=t,n}function Th(e="",t=!1){return t?(_t(),Vr(He,null,e)):ge(He,null,e)}function Ue(e){return e==null||typeof e=="boolean"?ge(He):G(e)?ge(Re,null,e.slice()):typeof e=="object"?st(e):ge(dn,null,String(e))}function st(e){return e.el===null||e.memo?e:Ht(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(r&(1|64)){const a=t.default;a&&(a._c&&(a._d=!1),Gr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Yr(t)]):n=8);e.children=t,e.shapeFlag|=n}function oc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ft([t.class,r.class]));else if(a==="style")t.style=Qt([t.style,r.style]);else if(en(a)){const s=t[a],o=r[a];s!==o&&!(G(s)&&s.includes(o))&&(t[a]=s?[].concat(s,o):o)}else a!==""&&(t[a]=r[a])}return t}function Fe(e,t,n,r=null){je(e,t,7,[n,r])}function Rh(e,t,n,r){let a;const s=n&&n[r];if(G(e)||he(e)){a=new Array(e.length);for(let o=0,i=e.length;o<i;o++)a[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,s&&s[o])}else if(ve(e))if(e[Symbol.iterator])a=Array.from(e,(o,i)=>t(o,i,void 0,s&&s[i]));else{const o=Object.keys(e);a=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const c=o[i];a[i]=t(e[c],c,i,s&&s[i])}}else a=[];return n&&(n[r]=a),a}function zs(e,t,n={},r,a){if(Ie.isCE)return ge("slot",t==="default"?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),_t();const o=s&&Bs(s(n)),i=Vr(Re,{key:n.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),s&&s._c&&(s._d=!0),i}function Bs(e){return e.some(t=>Xn(t)?!(t.type===He||t.type===Re&&!Bs(t.children)):!0)?e:null}const Xr=e=>e?qs(e)?Jr(e)||e.proxy:Xr(e.parent):null,Qn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>_s(e),$forceUpdate:e=>()=>na(e.update),$nextTick:e=>ta.bind(e.proxy),$watch:e=>xc.bind(e)}),ic={get({_:e},t){const{ctx:n,setupState:r,data:a,props:s,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return s[t]}else{if(r!==de&&re(r,t))return o[t]=1,r[t];if(a!==de&&re(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&re(c,t))return o[t]=3,s[t];if(n!==de&&re(n,t))return o[t]=4,n[t];$r&&(o[t]=0)}}const u=Qn[t];let m,f;if(u)return t==="$attrs"&&Le(e,"get",t),u(e);if((m=i.__cssModules)&&(m=m[t]))return m;if(n!==de&&re(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,re(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:s}=e;if(a!==de&&re(a,t))a[t]=n;else if(r!==de&&re(r,t))r[t]=n;else if(re(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:s}},o){let i;return!!n[o]||e!==de&&re(e,o)||t!==de&&re(t,o)||(i=s[0])&&re(i,o)||re(r,o)||re(Qn,o)||re(a.config.globalProperties,o)}},lc=Is();let cc=0;function dc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lc,s={uid:cc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ss(r,a),emitsOptions:cs(r,a),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=yl.bind(null,s),e.ce&&e.ce(s),s}let we=null;const $s=()=>we||Ie,Ft=e=>{we=e,e.scope.on()},Et=()=>{we&&we.scope.off(),we=null};function qs(e){return e.vnode.shapeFlag&4}let hn=!1;function uc(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,a=qs(e);$l(e,n,a,t),Wl(e,r);const s=a?fc(e,t):void 0;return hn=!1,s}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=rs(new Proxy(e.ctx,ic));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pc(e):null;Ft(e),Mt();const s=ot(r,e,0,[e.props,a]);if(mt(),Et(),Da(s)){if(s.then(Et,Et),t)return s.then(o=>{Us(e,o,t)}).catch(o=>{pn(o,e,0)});e.asyncDep=s}else Us(e,s,t)}else Ks(e,t)}function Us(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=ls(t)),Ks(e,n)}let Ws;function Ks(e,t,n){const r=e.type;if(!e.render){if(!t&&Ws&&!r.render){const a=r.template;if(a){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=r,c=xe(xe({isCustomElement:s,delimiters:i},o),l);r.render=Ws(a,c)}}e.render=r.render||$e}Ft(e),Mt(),Hl(e),mt(),Et()}function hc(e){return new Proxy(e.attrs,{get(t,n){return Le(e,"get","$attrs"),t[n]}})}function pc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=hc(e))},slots:e.slots,emit:e.emit,expose:t}}function Jr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ls(rs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)}}))}function mc(e){return Q(e)&&e.displayName||e.name}function gc(e){return Q(e)&&"__vccOpts"in e}function ot(e,t,n,r){let a;try{a=r?e(...r):e()}catch(s){pn(s,t,n)}return a}function je(e,t,n,r){if(Q(e)){const s=ot(e,t,n,r);return s&&Da(s)&&s.catch(o=>{pn(o,t,n)}),s}const a=[];for(let s=0;s<e.length;s++)a.push(je(e[s],t,n,r));return a}function pn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,i=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,i)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){ot(l,null,10,[e,o,i]);return}}vc(e,n,a,r)}function vc(e,t,n,r=!0){console.error(e)}let er=!1,Zr=!1;const Oe=[];let et=0;const mn=[];let gn=null,jt=0;const vn=[];let it=null,zt=0;const Vs=Promise.resolve();let Qr=null,ea=null;function ta(e){const t=Qr||Vs;return e?t.then(this?e.bind(this):e):t}function yc(e){let t=et+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;yn(Oe[r])<e?t=r+1:n=r}return t}function na(e){(!Oe.length||!Oe.includes(e,er&&e.allowRecurse?et+1:et))&&e!==ea&&(e.id==null?Oe.push(e):Oe.splice(yc(e.id),0,e),Ys())}function Ys(){!er&&!Zr&&(Zr=!0,Qr=Vs.then(Xs))}function bc(e){const t=Oe.indexOf(e);t>et&&Oe.splice(t,1)}function Gs(e,t,n,r){G(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ys()}function wc(e){Gs(e,gn,mn,jt)}function _c(e){Gs(e,it,vn,zt)}function ra(e,t=null){if(mn.length){for(ea=t,gn=[...new Set(mn)],mn.length=0,jt=0;jt<gn.length;jt++)gn[jt]();gn=null,jt=0,ea=null,ra(e,t)}}function tr(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,it){it.push(...t);return}for(it=t,it.sort((n,r)=>yn(n)-yn(r)),zt=0;zt<it.length;zt++)it[zt]();it=null,zt=0}}const yn=e=>e.id==null?1/0:e.id;function Xs(e){Zr=!1,er=!0,ra(e),Oe.sort((n,r)=>yn(n)-yn(r));const t=$e;try{for(et=0;et<Oe.length;et++){const n=Oe[et];n&&n.active!==!1&&ot(n,null,14)}}finally{et=0,Oe.length=0,tr(),er=!1,Qr=null,(Oe.length||mn.length||vn.length)&&Xs(e)}}const Js={};function Xe(e,t,n){return Zs(e,t,n)}function Zs(e,t,{immediate:n,deep:r,flush:a,onTrack:s,onTrigger:o}=de){const i=we;let l,c=!1,u=!1;if(Ee(e)?(l=()=>e.value,c=!!e._shallow):Dt(e)?(l=()=>e,r=!0):G(e)?(u=!0,c=e.some(Dt),l=()=>e.map(v=>{if(Ee(v))return v.value;if(Dt(v))return St(v);if(Q(v))return ot(v,i,2)})):Q(e)?t?l=()=>ot(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),je(e,i,3,[f])}:l=$e,t&&r){const v=l;l=()=>St(v())}let m,f=v=>{m=g.onStop=()=>{ot(v,i,4)}};if(hn)return f=$e,t?n&&je(t,i,3,[l(),u?[]:void 0,f]):l(),$e;let w=u?[]:Js;const h=()=>{if(!!g.active)if(t){const v=g.run();(r||c||(u?v.some((x,k)=>nn(x,w[k])):nn(v,w)))&&(m&&m(),je(t,i,3,[v,w===Js?void 0:w,f]),w=v)}else g.run()};h.allowRecurse=!!t;let b;a==="sync"?b=h:a==="post"?b=()=>Te(h,i&&i.suspense):b=()=>{!i||i.isMounted?wc(h):h()};const g=new kr(l,b);return t?n?h():w=g.run():a==="post"?Te(g.run.bind(g),i&&i.suspense):g.run(),()=>{g.stop(),i&&i.scope&&gr(i.scope.effects,g)}}function xc(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?Qs(r,e):()=>r[e]:e.bind(r,r);let s;Q(t)?s=t:(s=t.handler,n=t);const o=we;Ft(this);const i=Zs(a,s.bind(r),n);return o?Ft(o):Et(),i}function Qs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function St(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))St(e.value,t);else if(G(e))for(let n=0;n<e.length;n++)St(e[n],t);else if(Ma(e)||Lt(e))e.forEach(n=>{St(n,t)});else if(Ha(e))for(const n in e)St(e[n],t);return e}function le(e,t,n){const r=arguments.length;return r===2?ve(t)&&!G(t)?Xn(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),ge(e,t,n))}const Ec="3.2.26",Sc="http://www.w3.org/2000/svg",Bt=typeof document!="undefined"?document:null,eo=new Map,kc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Bt.createElementNS(Sc,e):Bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const a=n?n.previousSibling:t.lastChild;let s=eo.get(e);if(!s){const o=Bt.createElement("template");if(o.innerHTML=r?`<svg>${e}</svg>`:e,s=o.content,r){const i=s.firstChild;for(;i.firstChild;)s.appendChild(i.firstChild);s.removeChild(i)}eo.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Tc(e,t,n){const r=e.style,a=he(n);if(n&&!a){for(const s in n)aa(r,s,n[s]);if(t&&!he(t))for(const s in t)n[s]==null&&aa(r,s,"")}else{const s=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const to=/\s*!important$/;function aa(e,t,n){if(G(n))n.forEach(r=>aa(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Rc(e,t);to.test(n)?e.setProperty(It(r),n.replace(to,""),"important"):e[r]=n}}const no=["Webkit","Moz","ms"],sa={};function Rc(e,t){const n=sa[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return sa[t]=r;r=In(r);for(let a=0;a<no.length;a++){const s=no[a]+r;if(s in e)return sa[t]=s}return t}const ro="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ro,t.slice(6,t.length)):e.setAttributeNS(ro,t,n);else{const s=Si(t);n==null||s&&!Ia(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Pc(e,t,n,r,a,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n==null?"":n;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const i=typeof e[t];if(i==="boolean"){e[t]=Ia(n);return}else if(n==null&&i==="string"){e[t]="",e.removeAttribute(t);return}else if(i==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let nr=Date.now,ao=!1;if(typeof window!="undefined"){nr()>document.createEvent("Event").timeStamp&&(nr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ao=!!(e&&Number(e[1])<=53)}let oa=0;const Lc=Promise.resolve(),Ic=()=>{oa=0},Oc=()=>oa||(Lc.then(Ic),oa=nr());function Mc(e,t,n,r){e.addEventListener(t,n,r)}function Dc(e,t,n,r){e.removeEventListener(t,n,r)}function Nc(e,t,n,r,a=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[i,l]=Hc(t);if(r){const c=s[t]=Fc(r,a);Mc(e,i,c,l)}else o&&(Dc(e,i,o,l),s[t]=void 0)}}const so=/(?:Once|Passive|Capture)$/;function Hc(e){let t;if(so.test(e)){t={};let n;for(;n=e.match(so);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[It(e.slice(2)),t]}function Fc(e,t){const n=r=>{const a=r.timeStamp||nr();(ao||a>=n.attached-1)&&je(jc(r,n.value),t,5,[r])};return n.value=e,n.attached=Oc(),n}function jc(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r(a))}else return t}const oo=/^on[a-z]/,zc=(e,t,n,r,a=!1,s,o,i,l)=>{t==="class"?Cc(e,r,a):t==="style"?Tc(e,n,r):en(t)?mr(t)||Nc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bc(e,t,r,a))?Pc(e,t,r,s,o,i,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,a))};function Bc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oo.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oo.test(t)&&he(n)?!1:t in e}const lt="transition",bn="animation",ia=(e,{slots:t})=>le(hs,$c(e),t);ia.displayName="Transition";const io={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ia.props=xe({},hs.props,io);const kt=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},lo=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function $c(e){const t={};for(const _ in e)_ in io||(t[_]=e[_]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=i,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,h=qc(a),b=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:k,onLeave:A,onLeaveCancelled:H,onBeforeAppear:j=v,onAppear:C=x,onAppearCancelled:E=k}=t,V=(_,D,K)=>{$t(_,D?u:i),$t(_,D?c:o),K&&K()},q=(_,D)=>{$t(_,w),$t(_,f),D&&D()},Y=_=>(D,K)=>{const se=_?C:x,$=()=>V(D,_,K);kt(se,[D,$]),co(()=>{$t(D,_?l:s),ct(D,_?u:i),lo(se)||uo(D,r,b,$)})};return xe(t,{onBeforeEnter(_){kt(v,[_]),ct(_,s),ct(_,o)},onBeforeAppear(_){kt(j,[_]),ct(_,l),ct(_,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(_,D){const K=()=>q(_,D);ct(_,m),Kc(),ct(_,f),co(()=>{$t(_,m),ct(_,w),lo(A)||uo(_,r,g,K)}),kt(A,[_,K])},onEnterCancelled(_){V(_,!1),kt(k,[_])},onAppearCancelled(_){V(_,!0),kt(E,[_])},onLeaveCancelled(_){q(_),kt(H,[_])}})}function qc(e){if(e==null)return null;if(ve(e))return[la(e.enter),la(e.leave)];{const t=la(e);return[t,t]}}function la(e){return Fa(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function $t(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uc=0;function uo(e,t,n,r){const a=e._endId=++Uc,s=()=>{a===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:i,propCount:l}=Wc(e,t);if(!o)return r();const c=o+"end";let u=0;const m=()=>{e.removeEventListener(c,f),s()},f=w=>{w.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},i+1),e.addEventListener(c,f)}function Wc(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),a=r(lt+"Delay"),s=r(lt+"Duration"),o=fo(a,s),i=r(bn+"Delay"),l=r(bn+"Duration"),c=fo(i,l);let u=null,m=0,f=0;t===lt?o>0&&(u=lt,m=o,f=s.length):t===bn?c>0&&(u=bn,m=c,f=l.length):(m=Math.max(o,c),u=m>0?o>c?lt:bn:null,f=u?u===lt?s.length:l.length:0);const w=u===lt&&/\b(transform|all)(,|$)/.test(n[lt+"Property"]);return{type:u,timeout:m,propCount:f,hasTransform:w}}function fo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ho(n)+ho(e[r])))}function ho(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Kc(){return document.body.offsetHeight}const Ah={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):wn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),wn(e,!0),r.enter(e)):r.leave(e,()=>{wn(e,!1)}):wn(e,t))},beforeUnmount(e,{value:t}){wn(e,t)}};function wn(e,t){e.style.display=t?e._vod:"none"}const po=xe({patchProp:zc},kc);let _n,mo=!1;function Vc(){return _n||(_n=Xl(po))}function Yc(){return _n=mo?_n:Jl(po),mo=!0,_n}const Gc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=go(r);if(!a)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t},Xc=(...e)=>{const t=Yc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=go(r);if(a)return n(a,!0,a instanceof SVGElement)},t};function go(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const vo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qt=e=>vo?Symbol(e):"_vr_"+e,Jc=qt("rvlm"),yo=qt("rvd"),rr=qt("r"),ca=qt("rl"),da=qt("rvl"),Ut=typeof window!="undefined";function Zc(e){return e.__esModule||vo&&e[Symbol.toStringTag]==="Module"}const ue=Object.assign;function ua(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const xn=()=>{},Qc=/\/$/,ed=e=>e.replace(Qc,"");function fa(e,t,n="/"){let r,a={},s="",o="";const i=t.indexOf("?"),l=t.indexOf("#",i>-1?i:0);return i>-1&&(r=t.slice(0,i),s=t.slice(i+1,l>-1?l:t.length),a=e(s)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=ad(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:a,hash:o}}function td(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nd(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Wt(t.matched[r],n.matched[a])&&wo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rd(e[n],t[n]))return!1;return!0}function rd(e,t){return Array.isArray(e)?_o(e,t):Array.isArray(t)?_o(t,e):e===t}function _o(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ad(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var Sn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Sn||(Sn={}));function sd(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ed(e)}const od=/^[^#]+#/;function id(e,t){return e.replace(od,"#")+t}function ld(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function cd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=ld(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xo(e,t){return(history.state?history.state.position-t:-1)+e}const ha=new Map;function dd(e,t){ha.set(e,t)}function ud(e){const t=ha.get(e);return ha.delete(e),t}let fd=()=>location.protocol+"//"+location.host;function Eo(e,t){const{pathname:n,search:r,hash:a}=t,s=e.indexOf("#");if(s>-1){let i=a.includes(e.slice(s))?e.slice(s).length:1,l=a.slice(i);return l[0]!=="/"&&(l="/"+l),bo(l,"")}return bo(n,e)+r+a}function hd(e,t,n,r){let a=[],s=[],o=null;const i=({state:f})=>{const w=Eo(e,location),h=n.value,b=t.value;let g=0;if(f){if(n.value=w,t.value=f,o&&o===h){o=null;return}g=b?f.position-b.position:0}else r(w);a.forEach(v=>{v(n.value,h,{delta:g,type:En.pop,direction:g?g>0?Sn.forward:Sn.back:Sn.unknown})})};function l(){o=n.value}function c(f){a.push(f);const w=()=>{const h=a.indexOf(f);h>-1&&a.splice(h,1)};return s.push(w),w}function u(){const{history:f}=window;!f.state||f.replaceState(ue({},f.state,{scroll:ar()}),"")}function m(){for(const f of s)f();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:m}}function So(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?ar():null}}function pd(e){const{history:t,location:n}=window,r={value:Eo(e,n)},a={value:t.state};a.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const m=e.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:fd()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),a.value=c}catch(w){console.error(w),n[u?"replace":"assign"](f)}}function o(l,c){const u=ue({},t.state,So(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});s(l,u,!0),r.value=l}function i(l,c){const u=ue({},a.value,t.state,{forward:l,scroll:ar()});s(u.current,u,!0);const m=ue({},So(r.value,l,null),{position:u.position+1},c);s(l,m,!1),r.value=l}return{location:r,state:a,push:i,replace:o}}function md(e){e=sd(e);const t=pd(e),n=hd(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const a=ue({location:"",base:e,go:r,createHref:id.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function gd(e){return typeof e=="string"||e&&typeof e=="object"}function ko(e){return typeof e=="string"||typeof e=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Co=qt("nf");var To;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(To||(To={}));function Kt(e,t){return ue(new Error,{type:e,[Co]:!0},t)}function Ct(e,t){return e instanceof Error&&Co in e&&(t==null||!!(e.type&t))}const Ro="[^/]+?",vd={sensitive:!1,strict:!1,start:!0,end:!0},yd=/[.+*?^${}()[\]/\\]/g;function bd(e,t){const n=ue({},vd,t),r=[];let a=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let m=0;m<c.length;m++){const f=c[m];let w=40+(n.sensitive?.25:0);if(f.type===0)m||(a+="/"),a+=f.value.replace(yd,"\\$&"),w+=40;else if(f.type===1){const{value:h,repeatable:b,optional:g,regexp:v}=f;s.push({name:h,repeatable:b,optional:g});const x=v||Ro;if(x!==Ro){w+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+A.message)}}let k=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(k=g&&c.length<2?`(?:/${k})`:"/"+k),g&&(k+="?"),a+=k,w+=20,g&&(w+=-8),b&&(w+=-20),x===".*"&&(w+=-50)}u.push(w)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function i(c){const u=c.match(o),m={};if(!u)return null;for(let f=1;f<u.length;f++){const w=u[f]||"",h=s[f-1];m[h.name]=w&&h.repeatable?w.split("/"):w}return m}function l(c){let u="",m=!1;for(const f of e){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const w of f)if(w.type===0)u+=w.value;else if(w.type===1){const{value:h,repeatable:b,optional:g}=w,v=h in c?c[h]:"";if(Array.isArray(v)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(v)?v.join("/"):v;if(!x)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${h}"`);u+=x}}return u}return{re:o,score:r,keys:s,parse:i,stringify:l}}function wd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _d(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const s=wd(r[n],a[n]);if(s)return s;n++}return a.length-r.length}const xd={type:0,value:""},Ed=/[a-zA-Z0-9_]/;function Sd(e){if(!e)return[[]];if(e==="/")return[[xd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${c}": ${w}`)}let n=0,r=n;const a=[];let s;function o(){s&&a.push(s),s=[]}let i=0,l,c="",u="";function m(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&m(),o()):l===":"?(m(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Ed.test(l)?f():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),m(),o(),a}function kd(e,t,n){const r=bd(Sd(e.path),n),a=ue(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Cd(e,t){const n=[],r=new Map;t=Po({strict:!1,end:!0,sensitive:!1},t);function a(u){return r.get(u)}function s(u,m,f){const w=!f,h=Rd(u);h.aliasOf=f&&f.record;const b=Po(t,u),g=[h];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of k)g.push(ue({},h,{components:f?f.record.components:h.components,path:A,aliasOf:f?f.record:h}))}let v,x;for(const k of g){const{path:A}=k;if(m&&A[0]!=="/"){const H=m.record.path,j=H[H.length-1]==="/"?"":"/";k.path=m.record.path+(A&&j+A)}if(v=kd(k,m,b),f?f.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),w&&u.name&&!Ao(v)&&o(u.name)),"children"in h){const H=h.children;for(let j=0;j<H.length;j++)s(H[j],v,f&&f.children[j])}f=f||v,l(v)}return x?()=>{o(x)}:xn}function o(u){if(ko(u)){const m=r.get(u);m&&(r.delete(u),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(u);m>-1&&(n.splice(m,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return n}function l(u){let m=0;for(;m<n.length&&_d(u,n[m])>=0;)m++;n.splice(m,0,u),u.record.name&&!Ao(u)&&r.set(u.record.name,u)}function c(u,m){let f,w={},h,b;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Kt(1,{location:u});b=f.record.name,w=ue(Td(m.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),h=f.stringify(w)}else if("path"in u)h=u.path,f=n.find(x=>x.re.test(h)),f&&(w=f.parse(h),b=f.record.name);else{if(f=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!f)throw Kt(1,{location:u,currentLocation:m});b=f.record.name,w=ue({},m.params,u.params),h=f.stringify(w)}const g=[];let v=f;for(;v;)g.unshift(v.record),v=v.parent;return{name:b,path:h,params:w,matched:g,meta:Pd(g)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:i,getRecordMatcher:a}}function Td(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Rd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ad(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Ad(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ao(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pd(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function Po(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Lo=/#/g,Ld=/&/g,Id=/\//g,Od=/=/g,Md=/\?/g,Io=/\+/g,Dd=/%5B/g,Nd=/%5D/g,Oo=/%5E/g,Hd=/%60/g,Mo=/%7B/g,Fd=/%7C/g,Do=/%7D/g,jd=/%20/g;function pa(e){return encodeURI(""+e).replace(Fd,"|").replace(Dd,"[").replace(Nd,"]")}function zd(e){return pa(e).replace(Mo,"{").replace(Do,"}").replace(Oo,"^")}function ma(e){return pa(e).replace(Io,"%2B").replace(jd,"+").replace(Lo,"%23").replace(Ld,"%26").replace(Hd,"`").replace(Mo,"{").replace(Do,"}").replace(Oo,"^")}function Bd(e){return ma(e).replace(Od,"%3D")}function $d(e){return pa(e).replace(Lo,"%23").replace(Md,"%3F")}function qd(e){return e==null?"":$d(e).replace(Id,"%2F")}function sr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ud(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const s=r[a].replace(Io," "),o=s.indexOf("="),i=sr(o<0?s:s.slice(0,o)),l=o<0?null:sr(s.slice(o+1));if(i in t){let c=t[i];Array.isArray(c)||(c=t[i]=[c]),c.push(l)}else t[i]=l}return t}function No(e){let t="";for(let n in e){const r=e[n];if(n=Bd(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&ma(s)):[r&&ma(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Wd(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function kn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,a){const s=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,i)=>{const l=m=>{m===!1?i(Kt(4,{from:n,to:t})):m instanceof Error?i(m):gd(m)?i(Kt(2,{from:t,to:m})):(s&&r.enterCallbacks[a]===s&&typeof m=="function"&&s.push(m),o())},c=e.call(r&&r.instances[a],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(m=>i(m))})}function ga(e,t,n,r){const a=[];for(const s of e)for(const o in s.components){let i=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Kd(i)){const c=(i.__vccOpts||i)[t];c&&a.push(dt(c,n,r,s,o))}else{let l=i();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Zc(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&dt(f,n,r,s,o)()}))}}return a}function Kd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ho(e){const t=_e(rr),n=_e(ca),r=pe(()=>t.resolve(Ze(e.to))),a=pe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],m=n.matched;if(!u||!m.length)return-1;const f=m.findIndex(Wt.bind(null,u));if(f>-1)return f;const w=Fo(l[c-2]);return c>1&&Fo(u)===w&&m[m.length-1].path!==w?m.findIndex(Wt.bind(null,l[c-2])):f}),s=pe(()=>a.value>-1&&Xd(n.params,r.value.params)),o=pe(()=>a.value>-1&&a.value===n.matched.length-1&&wo(n.params,r.value.params));function i(l={}){return Gd(l)?t[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(xn):Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:s,isExactActive:o,navigate:i}}const Vd=Ne({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ho,setup(e,{slots:t}){const n=sn(Ho(e)),{options:r}=_e(rr),a=pe(()=>({[jo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:le("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},s)}}}),Yd=Vd;function Gd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xd(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((s,o)=>s!==a[o]))return!1}return!0}function Fo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jo=(e,t,n)=>e!=null?e:t!=null?t:n,Jd=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=_e(da),a=pe(()=>e.route||r.value),s=_e(yo,0),o=pe(()=>a.value.matched[s]);gt(yo,s+1),gt(Jc,o),gt(da,a);const i=ye();return Xe(()=>[i.value,o.value,e.name],([l,c,u],[m,f,w])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===m&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Wt(c,f)||!m)&&(c.enterCallbacks[u]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,u=c&&c.components[e.name],m=e.name;if(!u)return zo(n.default,{Component:u,route:l});const f=c.props[e.name],w=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=le(u,ue({},w,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(c.instances[m]=null)},ref:i}));return zo(n.default,{Component:b,route:l})||b}}});function zo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Bo=Jd;function Zd(e){const t=Cd(e.routes,e),n=e.parseQuery||Ud,r=e.stringifyQuery||No,a=e.history,s=kn(),o=kn(),i=kn(),l=os(tt);let c=tt;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ua.bind(null,S=>""+S),m=ua.bind(null,qd),f=ua.bind(null,sr);function w(S,F){let O,z;return ko(S)?(O=t.getRecordMatcher(S),z=F):z=S,t.addRoute(z,O)}function h(S){const F=t.getRecordMatcher(S);F&&t.removeRoute(F)}function b(){return t.getRoutes().map(S=>S.record)}function g(S){return!!t.getRecordMatcher(S)}function v(S,F){if(F=ue({},F||l.value),typeof S=="string"){const J=fa(n,S,F.path),d=t.resolve({path:J.path},F),p=a.createHref(J.fullPath);return ue(J,d,{params:f(d.params),hash:sr(J.hash),redirectedFrom:void 0,href:p})}let O;if("path"in S)O=ue({},S,{path:fa(n,S.path,F.path).path});else{const J=ue({},S.params);for(const d in J)J[d]==null&&delete J[d];O=ue({},S,{params:m(S.params)}),F.params=m(F.params)}const z=t.resolve(O,F),oe=S.hash||"";z.params=u(f(z.params));const ie=td(r,ue({},S,{hash:zd(oe),path:z.path})),ee=a.createHref(ie);return ue({fullPath:ie,hash:oe,query:r===No?Wd(S.query):S.query||{}},z,{redirectedFrom:void 0,href:ee})}function x(S){return typeof S=="string"?fa(n,S,l.value.path):ue({},S)}function k(S,F){if(c!==S)return Kt(8,{from:F,to:S})}function A(S){return C(S)}function H(S){return A(ue(x(S),{replace:!0}))}function j(S){const F=S.matched[S.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let z=typeof O=="function"?O(S):O;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=x(z):{path:z},z.params={}),ue({query:S.query,hash:S.hash,params:S.params},z)}}function C(S,F){const O=c=v(S),z=l.value,oe=S.state,ie=S.force,ee=S.replace===!0,J=j(O);if(J)return C(ue(x(J),{state:oe,force:ie,replace:ee}),F||O);const d=O;d.redirectedFrom=F;let p;return!ie&&nd(r,z,O)&&(p=Kt(16,{to:d,from:z}),Se(z,z,!0,!1)),(p?Promise.resolve(p):V(d,z)).catch(y=>Ct(y)?y:Z(y,d,z)).then(y=>{if(y){if(Ct(y,2))return C(ue(x(y.to),{state:oe,force:ie,replace:ee}),F||d)}else y=Y(d,z,!0,ee,oe);return q(d,z,y),y})}function E(S,F){const O=k(S,F);return O?Promise.reject(O):Promise.resolve()}function V(S,F){let O;const[z,oe,ie]=Qd(S,F);O=ga(z.reverse(),"beforeRouteLeave",S,F);for(const J of z)J.leaveGuards.forEach(d=>{O.push(dt(d,S,F))});const ee=E.bind(null,S,F);return O.push(ee),Vt(O).then(()=>{O=[];for(const J of s.list())O.push(dt(J,S,F));return O.push(ee),Vt(O)}).then(()=>{O=ga(oe,"beforeRouteUpdate",S,F);for(const J of oe)J.updateGuards.forEach(d=>{O.push(dt(d,S,F))});return O.push(ee),Vt(O)}).then(()=>{O=[];for(const J of S.matched)if(J.beforeEnter&&!F.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)O.push(dt(d,S,F));else O.push(dt(J.beforeEnter,S,F));return O.push(ee),Vt(O)}).then(()=>(S.matched.forEach(J=>J.enterCallbacks={}),O=ga(ie,"beforeRouteEnter",S,F),O.push(ee),Vt(O))).then(()=>{O=[];for(const J of o.list())O.push(dt(J,S,F));return O.push(ee),Vt(O)}).catch(J=>Ct(J,8)?J:Promise.reject(J))}function q(S,F,O){for(const z of i.list())z(S,F,O)}function Y(S,F,O,z,oe){const ie=k(S,F);if(ie)return ie;const ee=F===tt,J=Ut?history.state:{};O&&(z||ee?a.replace(S.fullPath,ue({scroll:ee&&J&&J.scroll},oe)):a.push(S.fullPath,oe)),l.value=S,Se(S,F,O,ee),be()}let _;function D(){_=a.listen((S,F,O)=>{const z=v(S),oe=j(z);if(oe){C(ue(oe,{replace:!0}),z).catch(xn);return}c=z;const ie=l.value;Ut&&dd(xo(ie.fullPath,O.delta),ar()),V(z,ie).catch(ee=>Ct(ee,4|8)?ee:Ct(ee,2)?(C(ee.to,z).then(J=>{Ct(J,4|16)&&!O.delta&&O.type===En.pop&&a.go(-1,!1)}).catch(xn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),Z(ee,z,ie))).then(ee=>{ee=ee||Y(z,ie,!1),ee&&(O.delta?a.go(-O.delta,!1):O.type===En.pop&&Ct(ee,4|16)&&a.go(-1,!1)),q(z,ie,ee)}).catch(xn)})}let K=kn(),se=kn(),$;function Z(S,F,O){be(S);const z=se.list();return z.length?z.forEach(oe=>oe(S,F,O)):console.error(S),Promise.reject(S)}function te(){return $&&l.value!==tt?Promise.resolve():new Promise((S,F)=>{K.add([S,F])})}function be(S){$||($=!0,D(),K.list().forEach(([F,O])=>S?O(S):F()),K.reset())}function Se(S,F,O,z){const{scrollBehavior:oe}=e;if(!Ut||!oe)return Promise.resolve();const ie=!O&&ud(xo(S.fullPath,0))||(z||!O)&&history.state&&history.state.scroll||null;return ta().then(()=>oe(S,F,ie)).then(ee=>ee&&cd(ee)).catch(ee=>Z(ee,S,F))}const Ae=S=>a.go(S);let Me;const Ce=new Set;return{currentRoute:l,addRoute:w,removeRoute:h,hasRoute:g,getRoutes:b,resolve:v,options:e,push:A,replace:H,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:s.add,beforeResolve:o.add,afterEach:i.add,onError:se.add,isReady:te,install(S){const F=this;S.component("RouterLink",Yd),S.component("RouterView",Bo),S.config.globalProperties.$router=F,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(l)}),Ut&&!Me&&l.value===tt&&(Me=!0,A(a.location).catch(oe=>{}));const O={};for(const oe in tt)O[oe]=pe(()=>l.value[oe]);S.provide(rr,F),S.provide(ca,sn(O)),S.provide(da,l);const z=S.unmount;Ce.add(S),S.unmount=function(){Ce.delete(S),Ce.size<1&&(c=tt,_&&_(),l.value=tt,Me=!1,$=!1),z()}}}}function Vt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Qd(e,t){const n=[],r=[],a=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const i=t.matched[o];i&&(e.matched.find(c=>Wt(c,i))?r.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Wt(c,l))||a.push(l))}return[n,r,a]}function or(){return _e(rr)}function va(){return _e(ca)}const eu=Ne({setup(e,t){const n=ye(!1);return qe(()=>{n.value=!0}),()=>{var r,a;return n.value?(a=(r=t.slots).default)===null||a===void 0?void 0:a.call(r):null}}}),tu="modulepreload",$o={},nu="/",ze=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${nu}${r}`,r in $o)return;$o[r]=!0;const a=r.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":tu,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((i,l)=>{o.addEventListener("load",i),o.addEventListener("error",l)})})).then(()=>t())},qo={"v-8daa1a0e":vt(()=>ze(()=>import("./index.html.a8d473d2.js"),[])),"v-37b893e5":vt(()=>ze(()=>import("./index.html.fd1bff97.js"),[])),"v-1c385113":vt(()=>ze(()=>import("./index.html.0aeef264.js"),[])),"v-77f0ef68":vt(()=>ze(()=>import("./index.html.bf79d6e2.js"),[])),"v-3706649a":vt(()=>ze(()=>import("./404.html.8fc9c84e.js"),[]))},ru={"v-8daa1a0e":()=>ze(()=>import("./index.html.b32377ac.js"),[]).then(({data:e})=>e),"v-37b893e5":()=>ze(()=>import("./index.html.569233e0.js"),[]).then(({data:e})=>e),"v-1c385113":()=>ze(()=>import("./index.html.49ee6d8e.js"),[]).then(({data:e})=>e),"v-77f0ef68":()=>ze(()=>import("./index.html.1af5d4b5.js"),[]).then(({data:e})=>e),"v-3706649a":()=>ze(()=>import("./404.html.e275e9a9.js"),[]).then(({data:e})=>e)},Uo=ye(ru),ya=Lr({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),ut=ye(ya),Yt=()=>ut,au=async e=>{const t=Uo.value[e];if(!t)return ya;const n=await t();return n!=null?n:ya};fr.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=e=>{Uo.value[e.key]=()=>Promise.resolve(e),e.key===ut.value.key&&(ut.value=e)});const Wo=Symbol(""),su=()=>{const e=_e(Wo);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},ou=e=>e.frontmatter,iu=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),lu=e=>{const t=new Set,n=[];return e.forEach(r=>{const a=iu(r);t.has(a)||(t.add(a),n.push(r))}),n},cu=e=>/^(https?:)?\/\//.test(e),Ph=e=>/^mailto:/.test(e),Lh=e=>/^tel:/.test(e),Ko=e=>Object.prototype.toString.call(e)==="[object Object]",du=e=>e.replace(/\/$/,""),uu=e=>e.replace(/^\//,""),Vo=(e,t)=>{const n=Object.keys(e).sort((r,a)=>{const s=a.split("/").length-r.split("/").length;return s!==0?s:a.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"},Yo=Symbol(""),fu=()=>{const e=_e(Yo);if(!e)throw new Error("usePageHead() is called without provider.");return e},hu=(e,t,n)=>{const r=he(t.description)?t.description:n.description,a=[...G(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return lu(a)},pu=Symbol(""),mu=(e,t)=>`${e.title?`${e.title} | `:""}${t.title}`,Go=Symbol(""),gu=()=>{const e=_e(Go);if(!e)throw new Error("usePageLang() is called without provider.");return e},vu=e=>e.lang||"en",ba=Symbol(""),yu=()=>{const e=_e(ba);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},bu=(e,t)=>Vo(e,t),wu={base:"/",lang:"en-US",title:"Stata2R",description:"",head:[["link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}]],locales:{}},Tt=ye(wu),_u=()=>Tt;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=e=>{Tt.value=e});const Xo=Symbol(""),Ih=()=>{const e=_e(Xo);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},xu=(e,t)=>Ke(Ke({},e),e.locales[t]),Eu=Symbol(""),Su=()=>{const e=va(),t=fu(),n=gu(),r=ye([]),a=()=>{t.value.forEach(o=>{const i=ku(o);i&&r.value.push(i)})},s=()=>{document.documentElement.lang=n.value,r.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),r.value.splice(0,r.value.length),t.value.forEach(o=>{const i=Cu(o);i!==null&&(document.head.appendChild(i),r.value.push(i))})};gt(Eu,s),qe(()=>{a(),s(),Xe(()=>e.path,()=>s())})},ku=([e,t,n=""])=>{const r=Object.entries(t).map(([i,l])=>he(l)?`[${i}="${l}"]`:l===!0?`[${i}]`:"").join(""),a=`head > ${e}${r}`;return Array.from(document.querySelectorAll(a)).find(i=>i.innerText===n)||null},Cu=([e,t,n])=>{if(!he(e))return null;const r=document.createElement(e);return Ko(t)&&Object.entries(t).forEach(([a,s])=>{he(s)?r.setAttribute(a,s):s===!0&&r.setAttribute(a,"")}),he(n)&&r.appendChild(document.createTextNode(n)),r},wa=e=>{let t;e.pageKey?t=e.pageKey:t=Yt().value.key;const n=qo[t];return n?le(n):le("div","404 Not Found")};wa.displayName="Content";wa.props={pageKey:{type:String,required:!1}};const Tu={"404":vt(()=>ze(()=>import("./404.eb0986a6.js"),[])),Layout:vt(()=>ze(()=>import("./Layout.5df060a3.js"),[]))},Jo=Ne({name:"Vuepress",setup(){const e=Yt(),t=pe(()=>{let n;if(e.value.path){const r=e.value.frontmatter.layout;he(r)?n=r:n="Layout"}else n="404";return Tu[n]||ec(n,!1)});return()=>le(t.value)}}),Gt=e=>e,ir=e=>e,Ru=e=>cu(e)?e:`${_u().value.base}${uu(e)}`;const Au=le("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[le("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),le("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),_a=(e,{slots:t})=>{var n;return le("span",[Au,(n=t.default)===null||n===void 0?void 0:n.call(t)])};_a.displayName="ExternalLinkIcon";var Pu=Gt(({app:e})=>{e.component("ExternalLinkIcon",_a)});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr=function(t){return t.tagName==="IMG"},Lu=function(t){return NodeList.prototype.isPrototypeOf(t)},cr=function(t){return t&&t.nodeType===1},Zo=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Qo=function(t){try{return Array.isArray(t)?t.filter(lr):Lu(t)?[].slice.call(t).filter(lr):cr(t)?[t].filter(lr):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(lr):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Iu=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Ou=function(t){var n=t.getBoundingClientRect(),r=n.top,a=n.left,s=n.width,o=n.height,i=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=r+l+"px",i.style.left=a+c+"px",i.style.width=s+"px",i.style.height=o+"px",i.style.transform="",i},Xt=function(t,n){var r=Rt({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,r);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),a},Mu=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(_){function D(){}_(D,D)},a=function(_){var D=_.target;if(D===V){h();return}k.indexOf(D)!==-1&&b({target:D})},s=function(){if(!(H||!E.original)){var _=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(j-_)>C.scrollOffset&&setTimeout(h,150)}},o=function(_){var D=_.key||_.keyCode;(D==="Escape"||D==="Esc"||D===27)&&h()},i=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_;if(_.background&&(V.style.background=_.background),_.container&&_.container instanceof Object&&(D.container=Rt({},C.container,_.container)),_.template){var K=cr(_.template)?_.template:document.querySelector(_.template);D.template=K}return C=Rt({},C,D),k.forEach(function(se){se.dispatchEvent(Xt("medium-zoom:update",{detail:{zoom:q}}))}),q},l=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Rt({},C,_))},c=function(){for(var _=arguments.length,D=Array(_),K=0;K<_;K++)D[K]=arguments[K];var se=D.reduce(function($,Z){return[].concat($,Qo(Z))},[]);return se.filter(function($){return k.indexOf($)===-1}).forEach(function($){k.push($),$.classList.add("medium-zoom-image")}),A.forEach(function($){var Z=$.type,te=$.listener,be=$.options;se.forEach(function(Se){Se.addEventListener(Z,te,be)})}),q},u=function(){for(var _=arguments.length,D=Array(_),K=0;K<_;K++)D[K]=arguments[K];E.zoomed&&h();var se=D.length>0?D.reduce(function($,Z){return[].concat($,Qo(Z))},[]):k;return se.forEach(function($){$.classList.remove("medium-zoom-image"),$.dispatchEvent(Xt("medium-zoom:detach",{detail:{zoom:q}}))}),k=k.filter(function($){return se.indexOf($)===-1}),q},m=function(_,D){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(se){se.addEventListener("medium-zoom:"+_,D,K)}),A.push({type:"medium-zoom:"+_,listener:D,options:K}),q},f=function(_,D){var K=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return k.forEach(function(se){se.removeEventListener("medium-zoom:"+_,D,K)}),A=A.filter(function(se){return!(se.type==="medium-zoom:"+_&&se.listener.toString()===D.toString())}),q},w=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_.target,K=function(){var $={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},Z=void 0,te=void 0;if(C.container)if(C.container instanceof Object)$=Rt({},$,C.container),Z=$.width-$.left-$.right-C.margin*2,te=$.height-$.top-$.bottom-C.margin*2;else{var be=cr(C.container)?C.container:document.querySelector(C.container),Se=be.getBoundingClientRect(),Ae=Se.width,Me=Se.height,Ce=Se.left,Jt=Se.top;$=Rt({},$,{width:Ae,height:Me,left:Ce,top:Jt})}Z=Z||$.width-C.margin*2,te=te||$.height-C.margin*2;var S=E.zoomedHd||E.original,F=Zo(S)?Z:S.naturalWidth||Z,O=Zo(S)?te:S.naturalHeight||te,z=S.getBoundingClientRect(),oe=z.top,ie=z.left,ee=z.width,J=z.height,d=Math.min(F,Z)/ee,p=Math.min(O,te)/J,y=Math.min(d,p),R=(-ie+(Z-ee)/2+C.margin+$.left)/y,T=(-oe+(te-J)/2+C.margin+$.top)/y,L="scale("+y+") translate3d("+R+"px, "+T+"px, 0)";E.zoomed.style.transform=L,E.zoomedHd&&(E.zoomedHd.style.transform=L)};return new r(function(se){if(D&&k.indexOf(D)===-1){se(q);return}var $=function Ae(){H=!1,E.zoomed.removeEventListener("transitionend",Ae),E.original.dispatchEvent(Xt("medium-zoom:opened",{detail:{zoom:q}})),se(q)};if(E.zoomed){se(q);return}if(D)E.original=D;else if(k.length>0){var Z=k;E.original=Z[0]}else{se(q);return}if(E.original.dispatchEvent(Xt("medium-zoom:open",{detail:{zoom:q}})),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,E.zoomed=Ou(E.original),document.body.appendChild(V),C.template){var te=cr(C.template)?C.template:document.querySelector(C.template);E.template=document.createElement("div"),E.template.appendChild(te.content.cloneNode(!0)),document.body.appendChild(E.template)}if(document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",h),E.zoomed.addEventListener("transitionend",$),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(be),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,K()};var be=setInterval(function(){E.zoomedHd.complete&&(clearInterval(be),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),K())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading");var Se=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",Se),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),K()})}else K()})},h=function(){return new r(function(_){if(H||!E.original){_(q);return}var D=function K(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(V),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),H=!1,E.zoomed.removeEventListener("transitionend",K),E.original.dispatchEvent(Xt("medium-zoom:closed",{detail:{zoom:q}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,_(q)};H=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(Xt("medium-zoom:close",{detail:{zoom:q}})),E.zoomed.addEventListener("transitionend",D)})},b=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=_.target;return E.original?h():w({target:D})},g=function(){return C},v=function(){return k},x=function(){return E.original},k=[],A=[],H=!1,j=0,C=n,E={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?C=t:(t||typeof t=="string")&&c(t),C=Rt({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},C);var V=Iu(C.background);document.addEventListener("click",a),document.addEventListener("keyup",o),document.addEventListener("scroll",s),window.addEventListener("resize",h);var q={open:w,close:h,toggle:b,update:i,clone:l,attach:c,detach:u,on:m,off:f,getOptions:g,getImages:v,getZoomedImage:x};return q};function Du(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Nu=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Du(Nu);var Hu=Mu;const Fu=Symbol("mediumZoom");const ju=".theme-default-content > img, .theme-default-content :not(a) > img",zu={},Bu=400;var $u=Gt(({app:e,router:t})=>{const n=Hu(zu);n.refresh=(r=ju)=>{n.detach(),n.attach(r)},e.provide(Fu,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),Bu)})});const qu={repo:"stata2r/stata2r.github.io",docsRepo:"https://github.com/stata2r/stata2r.github.io",docsBranch:"main",docsDir:"docs",contributors:!1,editLinkPattern:":repo/edit/:branch/:path",editLinks:!0,search:!0,sidebarDepth:1,sidebar:[{text:"data.table",link:"/data.table/"},{text:"fixest",link:"/fixest/"},{text:"extras",link:"/extras/"}],locales:{"/":{selectLanguageName:"English"}},navbar:[],logo:null,darkMode:!0,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"},ei=ye(qu),Uu=()=>ei;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=e=>{ei.value=e});const ti=Symbol(""),Wu=()=>{const e=_e(ti);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Ku=(e,t)=>{var n;return Ke(Ke({},e),(n=e.locales)===null||n===void 0?void 0:n[t])};var Vu=Gt(({app:e})=>{const t=Uu(),n=e._context.provides[ba],r=pe(()=>Ku(t.value,n.value));e.provide(ti,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})});const Yu=Ne({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(_t(),Gn("span",{class:ft(["badge",e.type]),style:Qt({verticalAlign:e.vertical})},[zs(t.$slots,"default",{},()=>[Yr(pr(e.text),1)])],6))}});var Gu=Ne({name:"CodeGroup",setup(e,{slots:t}){const n=ye(-1),r=ye([]),a=(i=n.value)=>{i<r.value.length-1?n.value=i+1:n.value=0,r.value[n.value].focus()},s=(i=n.value)=>{i>0?n.value=i-1:n.value=r.value.length-1,r.value[n.value].focus()},o=(i,l)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),n.value=l):i.key==="ArrowRight"?(i.preventDefault(),a(l)):i.key==="ArrowLeft"&&(i.preventDefault(),s(l))};return()=>{var i;const l=(((i=t.default)===null||i===void 0?void 0:i.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return l.length===0?null:(n.value<0||n.value>l.length-1?(n.value=l.findIndex(c=>c.props.active===""||c.props.active===!0),n.value===-1&&(n.value=0)):l.forEach((c,u)=>{c.props.active=u===n.value}),le("div",{class:"code-group"},[le("div",{class:"code-group__nav"},le("ul",{class:"code-group__ul"},l.map((c,u)=>{const m=u===n.value;return le("li",{class:"code-group__li"},le("button",{ref:f=>{f&&(r.value[u]=f)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":m},ariaPressed:m,ariaExpanded:m,onClick:()=>n.value=u,onKeydown:f=>o(f,u)},c.props.title))}))),l]))}}});const Xu=["aria-selected"],Ju=Ne({name:"CodeGroupItem"}),Zu=Ne(An(Ke({},Ju),{props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(_t(),Gn("div",{class:ft(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[zs(t.$slots,"default")],10,Xu))}}));function ni(e){return Hi()?(Fi(e),!0):!1}const Cn=typeof window!="undefined",Qu=e=>typeof e=="string",xa=()=>{};function ef(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const tf=e=>e();var ri=Object.getOwnPropertySymbols,nf=Object.prototype.hasOwnProperty,rf=Object.prototype.propertyIsEnumerable,af=(e,t)=>{var n={};for(var r in e)nf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ri)for(var r of ri(e))t.indexOf(r)<0&&rf.call(e,r)&&(n[r]=e[r]);return n};function sf(e,t,n={}){const r=n,{eventFilter:a=tf}=r,s=af(r,["eventFilter"]);return Xe(e,ef(a,t),s)}function of(e,t=!0){$s()?qe(e):t?e():ta(e)}const dr=Cn?window:void 0;Cn&&window.document;Cn&&window.navigator;Cn&&window.location;function lf(...e){let t,n,r,a;if(Qu(e[0])?([n,r,a]=e,t=dr):[t,n,r,a]=e,!t)return xa;let s=xa;const o=Xe(()=>Ze(t),l=>{s(),!!l&&(l.addEventListener(n,r,a),s=()=>{l.removeEventListener(n,r,a),s=xa})},{immediate:!0,flush:"post"}),i=()=>{o(),s()};return ni(i),i}function cf(e,t={}){const{window:n=dr}=t;let r;const a=ye(!1),s=()=>{!n||(r||(r=n.matchMedia(e)),a.value=r.matches)};return of(()=>{s(),!!r&&("addEventListener"in r?r.addEventListener("change",s):r.addListener(s),ni(()=>{"removeEventListener"in s?r.removeEventListener("change",s):r.removeListener(s)}))}),a}const Ea="__vueuse_ssr_handlers__";globalThis[Ea]=globalThis[Ea]||{};const df=globalThis[Ea];function uf(e,t){return df[e]||t}function ff(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const hf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function pf(e,t,n,r={}){var a;const{flush:s="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,shallow:c,window:u=dr,eventFilter:m,onError:f=x=>{console.error(x)}}=r,w=Ze(t),h=ff(w),b=(c?os:ye)(t),g=(a=r.serializer)!=null?a:hf[h];if(!n)try{n=uf("getDefaultStorage",()=>{var x;return(x=dr)==null?void 0:x.localStorage})()}catch(x){f(x)}function v(x){if(!(!n||x&&x.key!==e))try{const k=x?x.newValue:n.getItem(e);k==null?(b.value=w,l&&w!==null&&n.setItem(e,g.write(w))):typeof k!="string"?b.value=k:b.value=g.read(k)}catch(k){f(k)}}return v(),u&&i&&lf(u,"storage",x=>setTimeout(()=>v(x),0)),n&&sf(b,()=>{try{b.value==null?n.removeItem(e):n.setItem(e,g.write(b.value))}catch(x){f(x)}},{flush:s,deep:o,eventFilter:m}),b}function mf(e){return cf("(prefers-color-scheme: dark)",e)}var ai,si;Cn&&(window==null?void 0:window.navigator)&&((ai=window==null?void 0:window.navigator)==null?void 0:ai.platform)&&/iP(ad|hone|od)/.test((si=window==null?void 0:window.navigator)==null?void 0:si.platform);var gf=Object.defineProperty,oi=Object.getOwnPropertySymbols,vf=Object.prototype.hasOwnProperty,yf=Object.prototype.propertyIsEnumerable,ii=(e,t,n)=>t in e?gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bf=(e,t)=>{for(var n in t||(t={}))vf.call(t,n)&&ii(e,n,t[n]);if(oi)for(var n of oi(t))yf.call(t,n)&&ii(e,n,t[n]);return e};const wf={top:0,left:0,bottom:0,right:0,height:0,width:0};bf({text:""},wf);const li=Symbol(""),Oh=()=>{const e=_e(li);if(!e)throw new Error("useDarkMode() is called without provider.");return e},_f=()=>{const e=Ca(),t=mf(),n=pf("vuepress-color-scheme","auto"),r=pe({get(){return e.value.darkMode?n.value==="auto"?t.value:n.value==="dark":!1},set(a){a===t.value?n.value="auto":n.value=a?"dark":"light"}});gt(li,r),xf(r)},xf=e=>{const t=(n=e.value)=>{const r=window==null?void 0:window.document.querySelector("html");r==null||r.classList.toggle("dark",n)};qe(()=>{Xe(e,t,{immediate:!0})}),Br(()=>t())},ci=(...e)=>{const n=or().resolve(...e),r=n.matched[n.matched.length-1];if(!(r==null?void 0:r.redirect))return n;const{redirect:a}=r,s=Q(a)?a(n):a,o=he(s)?{path:s}:s;return ci(Ke({hash:n.hash,query:n.query,params:n.params},o))},Ef=e=>{const t=ci(e);return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Sa=null,Tn=null;const Sf={wait:()=>Sa,pending:()=>{Sa=new Promise(e=>Tn=e)},resolve:()=>{Tn==null||Tn(),Sa=null,Tn=null}},kf=()=>Sf,di=Symbol("sidebarItems"),Mh=()=>{const e=_e(di);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Cf=()=>{const e=Ca(),t=su(),n=pe(()=>Tf(t.value,e.value));gt(di,n)},Tf=(e,t)=>{var n,r,a,s;const o=(r=(n=e.sidebar)!==null&&n!==void 0?n:t.sidebar)!==null&&r!==void 0?r:"auto",i=(s=(a=e.sidebarDepth)!==null&&a!==void 0?a:t.sidebarDepth)!==null&&s!==void 0?s:2;return e.home||o===!1?[]:o==="auto"?Af(i):G(o)?ui(o,i):Ko(o)?Pf(o,i):[]},Rf=(e,t)=>({text:e.title,link:`#${e.slug}`,children:ka(e.children,t)}),ka=(e,t)=>t>0?e.map(n=>Rf(n,t-1)):[],Af=e=>{const t=Yt();return[{text:t.value.title,children:ka(t.value.headers,e)}]},ui=(e,t)=>{const n=va(),r=Yt(),a=s=>{var o;let i;if(he(s)?i=Ef(s):i=s,i.children)return An(Ke({},i),{children:i.children.map(l=>a(l))});if(i.link===n.path){const l=((o=r.value.headers[0])===null||o===void 0?void 0:o.level)===1?r.value.headers[0].children:r.value.headers;return An(Ke({},i),{children:ka(l,t)})}return i};return e.map(s=>a(s))},Pf=(e,t)=>{var n;const r=va(),a=Vo(e,r.path),s=(n=e[a])!==null&&n!==void 0?n:[];return ui(s,t)},Ca=()=>Wu(),Lf={class:"sr-only"},If=Ne({setup(e){const t=Ca();return(n,r)=>(_t(),Vr(Ze(_a),null,{default:ds(()=>[Nt("span",Lf,pr(Ze(t).openInNewWindow),1)]),_:1}))}});var Of=Gt(({app:e,router:t})=>{e.component("Badge",Yu),e.component("CodeGroup",Gu),e.component("CodeGroupItem",Zu),delete e._context.components.ExternalLinkIcon,e.component("ExternalLinkIcon",If),e.component("NavbarSearch",()=>{const r=e.component("Docsearch")||e.component("SearchBox");return r?le(r):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...r)=>(await kf().wait(),n(...r))});var Mf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Df={name:"CodeCopy",props:{parent:Object,code:String,options:{align:String,color:String,backgroundTransition:Boolean,backgroundTransitionColor:String,successText:String,successTextColor:String,staticIcon:Boolean}},data(){return{success:!1,originalBackground:null,originalTransition:null}},computed:{alignClass(){return this.options.align},iconClass(){return this.options.staticIcon?"":"hover"}},mounted(){this.originalTransition=this.parent.style.transition,this.originalBackground=this.parent.style.background},beforeDestroy(){this.parent.style.transition=this.originalTransition,this.parent.style.background=this.originalBackground},methods:{hexToRgb(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},copyToClipboard(e){if(navigator.clipboard)navigator.clipboard.writeText(this.code).then(()=>{this.setSuccessTransitions()},()=>{});else{let t=document.createElement("textarea");document.body.appendChild(t),t.value=this.code,t.select(),document.execCommand("Copy"),t.remove(),this.setSuccessTransitions()}},setSuccessTransitions(){if(clearTimeout(this.successTimeout),this.options.backgroundTransition){this.parent.style.transition="background 350ms";let e=this.options.backgroundTransitionColor;e=e.indexOf("#")!==-1?e:"#282c34";let t=this.hexToRgb(e);this.parent.style.background=`rgba(${t.r}, ${t.g}, ${t.b}, 0.7)`}this.success=!0,this.successTimeout=setTimeout(()=>{this.options.backgroundTransition&&(this.parent.style.background=this.originalBackground,this.parent.style.transition=this.originalTransition),this.success=!1},500)}}},Nf=e=>(bl("data-v-39936cf2"),e=e(),wl(),e),Hf={class:"code-copy"},Ff=Nf(()=>Nt("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1)),jf=["fill"];function zf(e,t,n,r,a,s){return _t(),Gn("div",Hf,[(_t(),Gn("svg",{onClick:t[0]||(t[0]=(...o)=>s.copyToClipboard&&s.copyToClipboard(...o)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:ft([s.iconClass,s.alignClass])},[Ff,Nt("path",{fill:n.options.color,d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"},null,8,jf)],2)),Nt("span",{class:ft([a.success?"success":"",s.alignClass]),style:Qt({color:n.options.successTextColor})},pr(n.options.successText),7)])}var fi=Mf(Df,[["render",zf],["__scopeId","data-v-39936cf2"]]),Bf=Gt(({app:e})=>{e.component("CodeCopy",fi)});const $f=({input:e,hotKeys:t})=>{const n=r=>{!e.value||t.value.length===0||r.target===document.body&&t.value.includes(r.key)&&(e.value.focus(),r.preventDefault())};qe(()=>{document.addEventListener("keydown",n)}),cn(()=>{document.removeEventListener("keydown",n)})},qf=[{title:"intro",headers:[],path:"/",pathLocale:"/",extraFields:[`
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
`]},{title:"fixest",headers:[{level:2,title:"Introduction to Fixest",slug:"introduction-to-fixest",children:[]},{level:2,title:"Models",slug:"models",children:[{level:3,title:"Simple model",slug:"simple-model",children:[]},{level:3,title:"Categorical variables",slug:"categorical-variables",children:[]},{level:3,title:"Fixed effects",slug:"fixed-effects",children:[]},{level:3,title:"Instrumental variables",slug:"instrumental-variables",children:[]},{level:3,title:"Macros, wildcards and shortcuts",slug:"macros-wildcards-and-shortcuts",children:[]},{level:3,title:"Nonlinear models",slug:"nonlinear-models",children:[]},{level:3,title:"Difference-in-differences",slug:"difference-in-differences",children:[]}]},{level:2,title:"Interactions",slug:"interactions",children:[{level:3,title:"Interact continuous variables",slug:"interact-continuous-variables",children:[]},{level:3,title:"Interact categorical variables",slug:"interact-categorical-variables",children:[]},{level:3,title:"Interact categorical with continuous variables",slug:"interact-categorical-with-continuous-variables",children:[]},{level:3,title:"Interact fixed effects",slug:"interact-fixed-effects",children:[]}]},{level:2,title:"Standard errors",slug:"standard-errors",children:[{level:3,title:"HC",slug:"hc",children:[]},{level:3,title:"HAC",slug:"hac",children:[]},{level:3,title:"Clustered",slug:"clustered",children:[]},{level:3,title:"Conley standard errors",slug:"conley-standard-errors",children:[]}]},{level:2,title:"Presentation",slug:"presentation",children:[{level:3,title:"Regression table",slug:"regression-table",children:[]},{level:3,title:"Joint test of coefficients",slug:"joint-test-of-coefficients",children:[]},{level:3,title:"Coefficient plot",slug:"coefficient-plot",children:[]},{level:3,title:"Interaction Plot",slug:"interaction-plot",children:[]}]},{level:2,title:"Panel",slug:"panel",children:[{level:3,title:"Lag variables",slug:"lag-variables",children:[]},{level:3,title:"Lead variables",slug:"lead-variables",children:[]},{level:3,title:"First difference",slug:"first-difference",children:[]}]}],path:"/fixest/",pathLocale:"/",extraFields:[`
# Regression analysis with fixest

[**fixest**](https://lrberge.github.io/fixest) (by Laurent Berg\xE9) is a package 
designed from the ground up in C++ to make running regressions fast and 
incredibly easy. It provides in-built support for a variety of linear and 
non-linear models, as well as regression tables and plotting methods. 

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

## Introduction to Fixest

The <a href="https://lrberge.github.io/fixest/index.html">fixest</a> package contains a highly flexible set of tools that allow you to estimate a fairly large set of standard regression models. While the package certainly doesn't cover *every* model that exists, there is a non-negligible subset of Stata users for whom every model they've ever needed to run is covered by \`fixest.\`

This includes regular ol' linear regression in the \`feols()\` function, which builds off of the Base R standard regression function \`lm(),\` but also includes things like instrumental variables via 2SLS, and of course support for as many fixed effects as you'd like. \`fixest\` isn't limited to linear regression either, covering IV and fixed-effects support for a wide range of GLM models like logit, probit, Poisson, negative binomial, and so on in \`feglm()\` and \`fepois().\`

\`fixest\` covers all of this while being very fast. If you felt a speed boost going from Stata's \`xtreg\` to \`reghdfe,\` get ready for another significant improvement when moving to \`fixest.\`

You also get a fair amount of convenience. Adjusting your standard errors to be heteroskedasticity-robust or clustered can be a pain in other R regression functions, but it is easy in \`fixest\` with the \`vcov\` option. Regression tables, coefficient and interaction-margin plots, selecting long lists of controls without having to type them all in, lagged variables, retrieving estimated fixed effects, Wald tests, and the choice of reference for categorical variables are all made easy. You even get some stuff that's rather tricky in Stata, like automatically iterating over a bunch of model specifications, basic and staggered difference-in-difference support, or Conley standard errors.

Using \`fixest\` for regression starts with writing a formula. While there are plenty of bells and whistles to ad d, at its core regression formulas take the form \`y ~ x1 + x2 | fe1 + fe2\` where y is the outcome, x1 and x2 are predictors, and fe1 and fe2 are your sets of fixed effects.

To begin, we will use a modified dataset from the CPS with some added variables for demonstration purposes. To load the data run the following:

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


                     
                     
                     
## Models

<p>Unike Stata, which only ever has one active dataset in memory, remember that having multiple datasets in your global environment is the norm in R. We highlight this difference to head off a very common error for new Stata R users: you need to specify <i>which</i> dataset you're using in your model calls, e.g. \`feols(..., data = dat)\`. We'll see lots of examples below. At the same time, note that <span class="font-semibold">fixest</span> allows you to set various <span class="text-[#4c807b] underline"><a href="https://lrberge.github.io/fixest/reference/index.html#section-default-values">global options</a></span>, including which dataset you want to use for all of your regressions. Again, we'll see examples below.</p>

           
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
ivreg 2sls wage mar (educ = age) 

* With fixed effects 
ivreghdfe 2sls wage mar (educ = age), absorb(countyfips)
\`\`\`
</div>
<div>

\`\`\`r
feols(wage ~ 1 | educ ~ age, dat)  
feols(wage ~ mar | educ ~ age, dat) 

# With fixed effects (IV 1st stage always comes last) 
feols(wage ~ mar | countyfips | educ ~ age, dat)
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
setFixed_estimation(data = dat) 
feols(wage ~ educ) 
feols(wage ~ educ + .[ctrls] | statefips) 
# Etc.
\`\`\`
</div>
</div>
          
### Nonlinear models

<div class='code--container'>
<div>

\`\`\`stata
xtset statefips
logit marr age black hisp
* Attempting to replicate the feglm() model with fixed effects
* at right using xtlogit or xtprobit leads to numerical overflow or matsize issues

xtpoisson educ age black hisp i.year, fe
\`\`\`
</div>
<div>

\`\`\`r
# feglm() runs all sorts of GLM models, with the same FE features as feols()!
est1 = feglm(marr ~ age + black + hisp, data = dat, family = binomial(link = 'logit'))
est2 = feglm(marr ~ age + black + hisp | statefips + year, data = dat, family = binomial(link = 'probit'))

# fepois() is there for Poisson regression
est3 = fepois(educ ~ age + black + hisp | statefips + year, data = dat)
\`\`\`
</div>
</div>	  

### Difference-in-differences

<p>In addition to the ability to estimate a difference-in-differences design using two-way fixed effects (if the design is appropriate for that - no staggered treatment, for instance), \`fixest\` offers several other DID-specific tools. The below examples use generic data sets, since the CPS data used in the rest of this page is not appropriate for DID.</p>

<div class='code--container'>
<div>

\`\`\`stata
* No immediate Stata equivalent to did_means that we know of,
* although you could replicate much of it by hand with an elaborate call to table

* Sun and Abraham can be estimated using the 
* eventstudyinteract package on ssc
\`\`\`
</div>
<div>

\`\`\`r
# did_means provides tables of means, SEs, and treatment/control and pre/post differences for 2x2 DID
did_means(outcome + control ~ treat | post)

# sunab() produces interactions of the type that allow you to estimate the Sun & Abraham model
# for staggered treatment timing, and automatically get average treatment effects for each relative period
sunab_model = feols(y ~ control + sunab(year_treated, year))
etable(sunab_model)
\`\`\`
</div>
</div>	  
                     
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
           
### Interact fixed effects

<div class='code--container'>
<div>

\`\`\`stata
* Combine fixed effects 
reghdfe wage educ, absorb(statefips#year) 

* Varying slopes (e.g. time trend for each state) 
? 
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

While you can specify standard errors inside the original \`fixest\` model call (just like Stata), a unique feature of R is that you can adjust errors for an exisiting model *on the fly*. This has <a href = "https://grantmcdermott.com/better-way-adjust-SEs">several benefits</a>, including being much more efficient since you don't have to re-estimate your whole model. We'll try to highlight examples of both approaches below.

           
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
feols(wage ~ educ, dat, vcov = sandwich:vcovHC) 

# Note: You can also adjust the SEs of an existing model 
m = feols(wage ~ educ, dat) 
summary(m, vcov = 'hc1')
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
feols(wage ~ educ, dat, vcov = 'NW') # if panel id is already set (see below)
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

# Reminder that you can adjust the SEs of existing 
# fixest models on-the-fly. 
m = feols(wage ~ educ | countyfips + year, dat) 
m # Clustered by countyfips (default) 
summary(m, vcov = 'twoway') 
summmary(m, vcov = ~countyfips^year) 
# etc.
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

# Multi-model example 
# (Two dep. vars, stepwise coefs, varying slopes, etc.) 
est_mult = feols(c(wage, age) ~ educ + csw(hisp, black) | 
                     statefips[year], 
                 dat, vcov = ~statefips^year) 
etable(est_mult)
\`\`\`
</div>
</div>

### Joint test of coefficients

<div class='code--container'>
<div>

\`\`\`stata
* Rename so we can use the wildcard later
rename (black hisp) (raceeth_black raceeth_hisp)
regress wage educ age raceeth_black raceeth_hisp marr 
testparm raceeth_black raceeth_hisp
testparm raceeth_*
\`\`\`
</div>
<div>

\`\`\`r
# Rename so we can use a regular expression later
setnames(dat, c('black','hisp'),c('raceeth_black','raceeth_hisp'))
est1 = feols(wage ~ educ + age + raceeth_black + raceeth_hisp + marr, dat) 
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
`]},{title:"extras",headers:[{level:2,title:"ggplot2: Beautiful and customizable plots",slug:"ggplot2-beautiful-and-customizable-plots",children:[{level:3,title:"Basic scatterplot",slug:"basic-scatterplot",children:[]}]},{level:2,title:"tidyverse",slug:"tidyverse",children:[{level:3,title:"Data wrangling with dplyr",slug:"data-wrangling-with-dplyr",children:[]},{level:3,title:"Manipulating dates with lubridate",slug:"manipulating-dates-with-lubridate",children:[]},{level:3,title:"Iterating with purrr",slug:"iterating-with-purrr",children:[]},{level:3,title:"String operations with stringr",slug:"string-operations-with-stringr",children:[]}]},{level:2,title:"collapse: Extra convenience functions and super fast aggregations",slug:"collapse-extra-convenience-functions-and-super-fast-aggregations",children:[{level:3,title:"Quick Summaries",slug:"quick-summaries",children:[]},{level:3,title:"Multiple grouped aggregations",slug:"multiple-grouped-aggregations",children:[]}]},{level:2,title:"sandwich: More Standard Error Adjustments",slug:"sandwich-more-standard-error-adjustments",children:[{level:3,title:"Linear Model Adjustments",slug:"linear-model-adjustments",children:[]}]},{level:2,title:"modelsummary: Summary tables, regression tables, and more",slug:"modelsummary-summary-tables-regression-tables-and-more",children:[{level:3,title:"Summary Table",slug:"summary-table",children:[]},{level:3,title:"Regression Table",slug:"regression-table",children:[]}]},{level:2,title:"lme4: Random effects and mixed models",slug:"lme4-random-effects-and-mixed-models",children:[{level:3,title:"Random Effects and Mixed Models",slug:"random-effects-and-mixed-models",children:[]}]},{level:2,title:"marginaleffects: Marginal effects, constrasts, etc.",slug:"marginaleffects-marginal-effects-constrasts-etc",children:[{level:3,title:"Basic Logit Marginal Effects",slug:"basic-logit-marginal-effects",children:[]}]},{level:2,title:"multcomp and nlWaldTest: Joint coefficient tests",slug:"multcomp-and-nlwaldtest-joint-coefficient-tests",children:[{level:3,title:"Test other null hypotheses and coefficient combinations",slug:"test-other-null-hypotheses-and-coefficient-combinations",children:[]}]},{level:2,title:"sf: Geospatial operations",slug:"sf-geospatial-operations",children:[{level:3,title:"Simple Map",slug:"simple-map",children:[]}]}],path:"/extras/",pathLocale:"/",extraFields:[`
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

  

## collapse: Extra convenience functions and super fast aggregations

p>Sure, we've gone on and on about how fast \`data.table\` is compared to just about everything else. But there is another R package that can boast even faster computation times for certain grouped calculations and transformations, and that's <a href = "https://sebkrantz.github.io/collapse/index.html" >collapse</a>. The \`collapse\` package doesn't try to do everything that \`data.table\` does. But the two <span ><a href="https://sebkrantz.github.io/collapse/articles/collapse_and_data.table.html">play very well together</a></span> and the former offers some convenience functions like \`descr\` and \`collap\`, which essentially mimic the equivalent functions in Stata and might be particularly appealing to readers of this guide. (P.S. If you'd like to load \`data.table\` and \`collapse\` at the same time, plus some other high-performance packages, check out the <a href = "https://sebkrantz.github.io/fastverse/index.html" >fastverse</a>.)



### Quick Summaries

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

### Multiple grouped aggregations

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

                     
## sandwich: More Standard Error Adjustments

The \`fixest\` package comes with plenty of shortcuts for accessing standard-error adjustments like HC1 heteroskedasticity-robust standard errors, Newey-West, Driscoll-Kraay, or clustered standard errors. But there is, of course, more than that! Many additional options are covered by the \`sandwich\` package, which comes with a long list of functions like \`vcovBS()\` for bootstrapped standard errors, or \`vcovHAC()\` for HAC. These can slot right into \`fixest\` estimates, too! You shouldn't be using those ", robust" errors for smaller samples anyway... but you <a href = "http://datacolada.org/99">knew that</a>, right?

           
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
# sandwich's vcovHC uses HC3 by default
feols(Y ~ X + Z, dat,vcov = sandwich::vcovHC) 

# Aside: Remember that you can also adjust the SEs 
# for existing models on the fly 
m = feols(Y ~ X + Z, dat) 
summary(m, vcov = sandwich::vcovHC)
\`\`\`
</div>
</div>


## modelsummary: Summary tables, regression tables, and more

The \`fixest\` package already has the \`etable()\` function for generating regression tables. However, it is only really intended to work with models from the same package. So we also recommend checking out the fantastic <a href = "https://vincentarelbundock.github.io/modelsummary/">modelsummary</a> package. It works with all sorts of model objects, including those not from \`fixest\`, is incredibly customizable, and outputs to a bunch of different formats (PDF, HTML, DOCX, etc). Similarly, \`modelsummary\` has a wealth of options for producing publication-ready summary tables. Oh, and it produces coefficient plots too. Check out the <a href = "https://vincentarelbundock.github.io/modelsummary/">package website</a> for more.


### Summary Table

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


### Regression Table

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
msummary(est1, vcov='HC3')

# Multiple SEs for the same model
msummary(est1, vcov=list('iid', 'HC3')) 

est3 = lm(Y ~ X + Z + A, dat) 
msummary(list(est1, est1, est3),
         vcov = list('iid', 'HC3', 'HC3'))
\`\`\`
</div>
</div>


## lme4: Random effects and mixed models

\`fixest\` can do a lot, but it can't do everything. This site isn't even going to attempt to go into how to translate every single model into R. But we'll quick highlight random-effects and mixed models. The <a href = "https://cran.r-project.org/web/packages/lme4/index.html">lme4</a> package and its \`lmer()\` function covers not just random-intercept models but also hierarchical models where slope coefficients follow random distributions. (**Aside:** If you prefer Bayesian models for this kind of thing, check out the <a href = "https://paul-buerkner.github.io/brms/">brms</a> package.)

           
### Random Effects and Mixed Models

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



## marginaleffects: Marginal effects, constrasts, etc.

 
The Stata \`margins\` command is great. To replicate it in R, we recommend the <a href = "https://vincentarelbundock.github.io/marginaleffects/">marginaleffects</a> package. Individual marginal effects or average marginal effects for nonlinear models, or models with interactions or transformations, etc. It's also very fast.


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



## multcomp and nlWaldTest: Joint coefficient tests

Stata provides a number of inbuilt commands for (potentially complex) postestimation coefficient tests like \`testparm\`, \`lincom\`, and \`nlcom\`. We've already seen that \`fixest\` covers the \`testparm\` equivalent with its \`wald()\` function. But what about combinations of coefficients? The <a href = "http://multcomp.r-forge.r-project.org/">multcomp</a> package handles a variety of linear tests and combinations, while <a href = "https://cran.r-project.org/web/packages/nlWaldTest/index.html">nlWaldTest</a> has you covered for nonlinear combinations.


### Test other null hypotheses and coefficient combinations

<div class='code--container'>
<div>

\`\`\`stata
regress y x z 




* One-sided test 
test _b[x]=0 
local sign_wgt = sign(_b[x]) 
display "H0: coef &lt;= 0  p-value = " ttail(r(df_r),\`sign_wgt'*sqrt(r(F))) 

* Test linear combination of coefficients 
lincom x + z 


* Test nonlinear combination of coefficients 
nlcom _b[x]/_b[z]
\`\`\`
</div>
<div>

\`\`\`r
m = feols(y ~ x + z, dat)

# Note: we recommend the dev version of multcomp 
# install.packages("multcomp", repos="http://R-Forge.R-project.org") 

# One-sided test 
m2 = multcomp::ghlt(m, 'x&lt;=0')
summary(m2) 


# Test linear combination of coefficients 
m3 = multcomp::glht(m, 'x + z = 0') 
summary(m3) # or confint(m3) 

# Test nonlinear combination of coefficients 
nlWaldtest::nlWaldtest(m, 'b[2]/b[3]') # or nlWaldtest::nlConfint()
\`\`\`
</div>
</div>


## sf: Geospatial operations

R has outstanding support for geospatial computation and mapping. There are a variety of packages to choose from here, depending on what you want (e.g. interactive maps, high-dimensional data cubes, etc.) But the workhorse geospatial tool for most R users is the incredibly versatile <a href = "https://r-spatial.github.io/sf/">sf</a> package. We'll only provide a simple mapping example below. The \`sf\` <a href = "https://r-spatial.github.io/sf/">website</a> has several in-depth tutorials, and we also recommend the <a href = "https://geocompr.robinlovelace.net/">Geocomputation with R</a> book by Robin Lovelace, Jakub Nowosad, and Jannes Muenchow.

### Simple Map

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





                     

`]},{title:"data.table",headers:[{level:2,title:"Introduction to data.table",slug:"introduction-to-data-table",children:[]},{level:2,title:"Data I/O",slug:"data-i-o",children:[{level:3,title:"Read and write .csv",slug:"read-and-write-csv",children:[]},{level:3,title:"Read and write .parquet",slug:"read-and-write-parquet",children:[]},{level:3,title:"Read and write .dta",slug:"read-and-write-dta",children:[]}]},{level:2,title:"Order",slug:"order",children:[{level:3,title:"Sort rows",slug:"sort-rows",children:[]},{level:3,title:"Sort columns",slug:"sort-columns",children:[]},{level:3,title:"Rename columns",slug:"rename-columns",children:[]}]},{level:2,title:"Subset",slug:"subset",children:[{level:3,title:"Subset rows",slug:"subset-rows",children:[]},{level:3,title:"Subset columns",slug:"subset-columns",children:[]},{level:3,title:"Subset rows and columns",slug:"subset-rows-and-columns",children:[]},{level:3,title:"Drop duplicates",slug:"drop-duplicates",children:[]},{level:3,title:"Drop missing",slug:"drop-missing",children:[]}]},{level:2,title:"Modify",slug:"modify",children:[{level:3,title:"Create new variables",slug:"create-new-variables",children:[]},{level:3,title:"Create new variables within groups",slug:"create-new-variables-within-groups",children:[]},{level:3,title:"Work with dates",slug:"work-with-dates",children:[]},{level:3,title:"Modify existing variables",slug:"modify-existing-variables",children:[]},{level:3,title:"Using Booleans & control-flow",slug:"using-booleans-control-flow",children:[]},{level:3,title:"Row-wise calculations",slug:"row-wise-calculations",children:[]},{level:3,title:"Fill in Time Series/Panel Data",slug:"fill-in-time-series-panel-data",children:[]}]},{level:2,title:"Collapse",slug:"collapse",children:[{level:3,title:"Collapse with no grouping",slug:"collapse-with-no-grouping",children:[]},{level:3,title:"Collapse by group",slug:"collapse-by-group",children:[]},{level:3,title:"Count rows",slug:"count-rows",children:[]},{level:3,title:"Grouped calculations and complex objects inside a data.table",slug:"grouped-calculations-and-complex-objects-inside-a-data-table",children:[]}]},{level:2,title:"Reshape",slug:"reshape",children:[{level:3,title:"Reshape prep (this dataset only)",slug:"reshape-prep-this-dataset-only",children:[]},{level:3,title:"Reshape long",slug:"reshape-long",children:[]},{level:3,title:"Reshape wide",slug:"reshape-wide",children:[]}]},{level:2,title:"Merge",slug:"merge",children:[{level:3,title:"Import and prep secondary dataset on airport characterists",slug:"import-and-prep-secondary-dataset-on-airport-characterists",children:[]},{level:3,title:"Inner merge (i.e. keep row matches only)",slug:"inner-merge-i-e-keep-row-matches-only",children:[]},{level:3,title:"Full merge (i.e. keep all rows)",slug:"full-merge-i-e-keep-all-rows",children:[]},{level:3,title:'Left merge (i.e. keep all rows from "main" dataset)',slug:"left-merge-i-e-keep-all-rows-from-main-dataset",children:[]},{level:3,title:'Right merge (i.e. keep all rows from "secondary" dataset)',slug:"right-merge-i-e-keep-all-rows-from-secondary-dataset",children:[]},{level:3,title:"Anti merge (i.e. keep non-matched rows only)",slug:"anti-merge-i-e-keep-non-matched-rows-only",children:[]},{level:3,title:"Advanced merges (tips and tricks)",slug:"advanced-merges-tips-and-tricks",children:[]},{level:3,title:"Appending data",slug:"appending-data",children:[]}]}],path:"/data.table/",pathLocale:"/",extraFields:[`
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

Like Stata's ".dta" format, R has its own native ".rds" binary file storage type. (See also the <a href = "http://www.fstpackage.org/">fst</a> package.) However, we generally recommend that users avoid native\u2014especially proprietary\u2014data types since they hamper interoperability and reproducibility. We'll hence concentrate on common open-source file types below. We'll make an exception for .dta given our target audience, but we still recommend avoiding it if possible.

           
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
rbindlist(lapply(pfiles, arrow::read_parquet, col_select=1:10)
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

While it takes some doing in Stata to work with multiple data sets at once (and most people do not use Stata this way, and it doesn't work in old versions), using multiple datasets at once is standard in R, and **subsetting operations won't overwrite your original dataset**. That means you don't need to wrap everything in \`preserve/restore\`. However, it also means that you'll need to (re)assign your subsetted data if you want to use it again later. E.g. \`dat1 = dat[origin=='LGA']\`.

           
### Subset rows

<div class='code--container'>
<div>

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

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

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat1 = dat[1:200] 

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

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

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

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat1 = dat[, .(month, day, carrier)] 

dat[, .(month, day, carrier)] 
dat[, list(month, day, carrier)] # same as above 
dat[, c('month', 'day', 'carrier')] # ditto 

dat[, year:arr_delay] 
dat[, .SD, .SDcols=patterns('*_delay')] 

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

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

keep if origin == "LGA"
keep month day carrier
\`\`\`
</div>
<div>

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat1 = dat[origin=="LGA", .(month, day, carrier)] 

# Matches the two lines on the left:
dat[origin=="LGA", .(month, day, carrier)]
\`\`\`
</div>
</div>
           
### Drop duplicates

<div class='code--container'>
<div>

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

duplicates drop
duplicates drop month day carrier, force

\`\`\`
</div>
<div>

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat1 = unique(dat) 

unique(dat) 
unique(dat, by = c('month', 'day', 'carrier'))
\`\`\`
</div>
</div>
           
### Drop missing

<div class='code--container'>
<div>

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

keep if !missing(dest)
* Requires: ssc inst missings
missings dropvars, force 
missings air_time dest, force 

\`\`\`
</div>
<div>

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat = dat[!is.na(dest)] 

dat[!is.na(dest)]

na.omit(dat) 
na.omit(dat, cols = c('air_time', 'dest')) 
dat[!is.na(air_time) & !is.na(dest)] # Same as above
\`\`\`
</div>
</div>
                     
                     
## Modify

In R, any missing (i.e. "NA") values will propagate during aggregating functions. If you have NA values in your real-life dataset \u2014 we don't in this example dataset \u2014 you probably want to add "na.rm=TRUE" to remove these on the fly. E.g. "mean(var1, na.rm=TRUE)" or "lapply(.SD, mean, na.rm=TRUE)".

           
### Create new variables

<div class='code--container'>
<div>

\`\`\`stata
gen dist_sq = distance^2 
gen tot_delay = dep_delay + arr_delay 
gen first_letter = substr(origin, 1,1) 
gen flight_path = origin + '_' + dest 

* These next operations don't have a great Stata 
* equivalent, although you could implement a loop.
\`\`\`
</div>
<div>

\`\`\`r
dat[, dist_sq := distance^2] 
dat[, tot_delay := dep_delay + arr_delay] 
dat[, first_letter := substr(origin,1,1)] 
dat[, flight_path := paste(origin, dest, sep='_')] 

# Multiple variables can be created at once.
# These next few lines all do the same thing.
# Just pick your favourite. 
dat[, c('dist_sq', 'dist_cu') := .(distance^2, distance^3)] 
dat[, ':=' (dist_sq=distance^2, dist_cu=distance^3)] # "functional" equivalent 
dat[, let(dist_sq=distance^2, dist_cu=distance^3)] # dev version only

# We can also chain back-to-back dat[...][...] 
# (this holds for any data.table operation) 
dat[, dist_sq := distance^2][
    , dist_cu := distance*dist_sq)]
\`\`\`
</div>
</div>
           
### Create new variables within groups

**Aside:** In R, any missing (i.e. "NA") values will propagate during aggregating functions. If you have \`NA\` values in your real-life dataset \u2014 we don't in this example dataset \u2014 you probably want to add \`na.rm=TRUE\` to remove these on the fly. E.g. \`mean(var1, na.rm=TRUE)\` or \`lapply(.SD, mean, na.rm=TRUE)\`.

<div class='code--container'>
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

# Multiple grouped variables (manual demean example) 
dmcols = c('dep_delay', 'arr_delay', 'air_time') 
dat[,
    paste0(dmcols,'_dm') := lapply(.SD, \\(x) x-mean(x)),  # before R 4.1 you'll need function(x) instead of the \\(x) shorthand
    .SDcols = dmcols,
    by = origin] 

# Some short-cut symbols 
dat[, rows_per_carrier := .N, by = carrier] 
dat[, index_within_carrier := .I, by = carrier] 
dat[, origin_index := .GRP, by = origin]

# Refer to other rows (uses generic data set)
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
# Make ourselves a date variable
dat[, date := as.IDate(paste(year, month, day, sep='-'))] 




# Pull out year (quarter, month, etc. work too)
dat[, the_year := year(date)]

# Shift forward 7 days
dat[, date := date + 7]
\`\`\`
</div>
</div>
           
### Modify existing variables

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
dat[, (cols) := lapply(.SD, \\(x) paste(x,'Airport')),  ## Note: before R 4.1 you need function(x) instead of the \\(x) shorthand 
    .SDcols = cols] 

# Aside: We don't normally use a gen -> replace 
# workflow in R, the way we do in Stata. See the 
# 'Using Booleans & control-flow' section below.
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
dat[, tot_delay := rowSums(.SD), .SDcols = patterns('*_delay')]
dat[, any_delay := fcoalesce(.SD), .SDcols = patterns('*_delay')] 

# Custom row calculations: 
dat[, new_var := mapply(custom_func, var1, var2)] 
dat[, new_var := custom_func(var1, var2)), by=.I] # dev version only


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

While it takes some doing in Stata to work with multiple data sets at once (and most people do not use Stata this way, and it doesn't work in old versions), using multiple datasets at once is standard in R. That means you don't need to wrap everything in \`preserve/restore\`. However, it also means that you'll need to (re)assign your collapsed data if you want to use it again later. E.g. \`dat1 = dat[, mean(var1)]\`. Also remember our earlier note about aggregating functions on columns that have missing values: Use \`na.rm=TRUE\` to remove these on the fly. E.g. \`dat[, mean(var1, na.rm=TRUE)]\`.

           
### Collapse with no grouping

<div class='code--container'>
<div>

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

collapse (mean) dep_delay 
collapse (mean) mean_ddel=dep_delay 

collapse (mean) mean_ddel=dep_delay mean_adel=arr_delay 



collapse (mean) *delay 

ds, has(type long)
collapse (mean) \`r(varlist)'
\`\`\`
</div>
<div>

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat1 = dat[, mean(dep_delay)] 

dat[, mean(dep_delay)] # Just give me the number! As a scalar. 
dat[, .(mean_ddel=mean(dep_delay))] # Give me back a data.table (note the .() here, that's what does it) 

dat[, .(mean_ddel=mean(dep_delay), mean_adel=mean(arr_delay))]
dat[, lapply(.SD, mean), .SDcols=c('arr_delay','dep_delay')] # same 
dat[, lapply(.SD, mean), .SDcols=arr_delay:dep_delay] # ditto 

dat[, lapply(.SD, mean), .SDcols=patterns('delay')] 

 # Matches the two lines on the left
dat[, lapply(.SD, mean), .SDcols=is.numeric]
\`\`\`
</div>
</div>
           
### Collapse by group

<div class='code--container'>
<div>

\`\`\`stata
* Reminder: You'll need to use preserve/restore
* if you want to retain the original dataset in 
* the examples that follow. 

collapse (mean) arr_delay, by(carrier) 
collapse (mean) mean_adel = arr_delay, by(carrier) 

collapse (mean) arr_delay, by(carrier month) 

collapse (min) min_d = distance (max) max_d = distance, by(origin) 

collapse (mean) *_delay, by(origin) 
collapse (mean) dep_delay arr_delay air_time distance, by(origin) 


egen unique_dest = tag(dest origin) 
collapse (sum) unique_dest, by(origin)
\`\`\`
</div>
<div>

\`\`\`r
# Reminder: You'll need to (re)assign the 
# collapsed dataset if you want to use it later,
# e.g. dat1 = dat[, mean(dep_delay), by=origin] 

dat[, .(arr_delay = mean(arr_delay)), by=carrier] 
dat[, .(mean_adel = mean(arr_delay)), by=carrier] 

dat[, .(arr_delay = mean(arr_delay)), by=.(carrier, month)] 

dat[, .(min_d = min(distance), max_d = max(distance)), by=origin] 

dat[, lapply(.SD, mean), .SDcols=patterns('_delay'), by=origin] 
dat[, lapply(.SD, mean), .SDcols=c('dep_delay','arr_delay','air_time','distance'), by=origin] 
dat[, lapply(.SD, mean), .SDcols = c(4,5,9,10), by=origin] # same as above 

# Matches the final two lines on the left: 
dat[, .(unique_dest = uniqueN(dest)), by = origin] 

# Bonus: You can also do complicated (grouped)
# aggregations as part of a dcast (i.e. reshape 
# wide) call. E.g. Get the min, mean and max
# departure and arrival delays, by origin airport.
dcast(dat, origin~., fun=list(min,mean,max),
      value.var=c('dep_delay','arr_delay'))
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
dat[, .N, by = origin])
\`\`\`
</div>
</div>
           
### Grouped calculations and complex objects inside a data.table

data.tables support list columns, so you can have complex objects like regression models inside a data.table. Among many other things, this means you can nest simulations inside a data.table as easily as you would perform any other (grouped) operation.

<div class='code--container'>
<div>

\`\`\`stata
* ??
\`\`\`
</div>
<div>

\`\`\`r 
# Example: Grouped regression 

# Let's run a separate regression of arrival delay on 
# departure delay for each month, inside our dataset 

# Just the coefficients
dat[,
    .(beta = coef(lm(arr_delay ~ dep_delay, .SD))[2]),
    by = month]

# Keep the whole model for each month
mods = dat[,
           .(mod = list(lm(arr_delay ~ dep_delay, .SD))),
           by = month] 
# Now you can do things like put all 10 models in a 
# regression table or coefficient plot 
modelsummary::msummary(mods$mod) 
modelsummary::modelplot(mods$mod, coef_omit = 'Inter')
\`\`\`
</div>
</div>
                     
                     
## Reshape

           
### Reshape prep (this dataset only)

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

           
### Import and prep secondary dataset on airport characterists

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
           
### Inner merge (i.e. keep row matches only)

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
           
### Full merge (i.e. keep all rows)

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
           
### Left merge (i.e. keep all rows from "main" dataset)

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
           
### Right merge (i.e. keep all rows from "secondary" dataset)

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
           
### Anti merge (i.e. keep non-matched rows only)

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
           
### Advanced merges (tips and tricks)

These next few examples are meant to highlight some specific data.table merge tricks. They don't really have good Stata equivalents (that we're aware of).

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

Non-equi joins are a bit hard to understand if you've never seen them before. But they are incredibly powerful and solve a suprisingly common problem: Merging datasets over a range (e.g. start to end dates), rather than exact matches. Simple example where we want to subset the 1st qtr flights for American Airlines and 2nd qtr flights for United Airlines: 

<div class='code--container grid-cols-1'>
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
</div>

#### Rolling Joins

Rolling joins are similar and allow you to match a set of dates forwards or backwards. For example, our \`dat\`  datset ends in October. Let's say we want to carry the  last known entries for American and United Airlines  forward to (random) future dates. 

<div class='code--container grid-cols-1'>
<div>

\`\`\`r
dat4 = data.table(carrier  = c('AA', 'UA'),
                  new_date = as.IDate(c('2014-11-01',
                                        '2014-11-15'))) 
dat[, date := as.IDate(paste(year, month, day, sep='-'))] 
dat[dat4, on = .(carrier, date=new_date), roll='nearest']
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
`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[""]}],hi=ye(qf),Uf=()=>hi;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=e=>{hi.value=e});const Wf=/[^\x00-\x7F]/,Kf=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),pi=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),mi=(e,t)=>{const n=t.join(" "),r=Kf(e);if(Wf.test(e))return r.some(o=>n.toLowerCase().indexOf(o)>-1);const a=e.endsWith(" ");return new RegExp(r.map((o,i)=>r.length===i+1&&!a?`(?=.*\\b${pi(o)})`:`(?=.*\\b${pi(o)}\\b)`).join("")+".+","gi").test(n)},Vf=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:r})=>{const a=pe(()=>e.value.filter(s=>s.pathLocale===t.value));return pe(()=>{const s=n.value.trim().toLowerCase();if(!s)return[];const o=[],i=(l,c)=>{mi(s,[c.title])&&o.push({link:`${l.path}#${c.slug}`,title:l.title,header:c.title});for(const u of c.children){if(o.length>=r.value)return;i(l,u)}};for(const l of a.value){if(o.length>=r.value)break;if(mi(s,[l.title,...l.extraFields])){o.push({link:l.path,title:l.title});continue}for(const c of l.headers){if(o.length>=r.value)break;i(l,c)}}return o})},Yf=e=>{const t=ye(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Gf=Ne({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:r}=pl(e),a=or(),s=yu(),o=Uf(),i=ye(null),l=ye(!1),c=ye(""),u=pe(()=>{var k;return(k=t.value[s.value])!==null&&k!==void 0?k:{}}),m=Vf({searchIndex:o,routeLocale:s,query:c,maxSuggestions:r}),{focusIndex:f,focusNext:w,focusPrev:h}=Yf(m);$f({input:i,hotKeys:n});const b=pe(()=>l.value&&!!m.value.length),g=()=>{!b.value||h()},v=()=>{!b.value||w()},x=k=>{if(!b.value)return;const A=m.value[k];!A||a.push(A.link).then(()=>{c.value="",f.value=0})};return()=>le("form",{class:"search-box",role:"search"},[le("input",{ref:i,type:"search",placeholder:u.value.placeholder,autocomplete:"off",spellcheck:!1,value:c.value,onFocus:()=>l.value=!0,onBlur:()=>l.value=!1,onInput:k=>c.value=k.target.value,onKeydown:k=>{switch(k.key){case"ArrowUp":{g();break}case"ArrowDown":{v();break}case"Enter":{k.preventDefault(),x(f.value);break}}}}),b.value&&le("ul",{class:"suggestions",onMouseleave:()=>f.value=-1},m.value.map(({link:k,title:A,header:H},j)=>le("li",{class:["suggestion",{focus:f.value===j}],onMouseenter:()=>f.value=j,onMousedown:()=>x(j)},le("a",{href:k,onClick:C=>C.preventDefault()},[le("span",{class:"page-title"},A),H&&le("span",{class:"page-header"},`> ${H}`)]))))])}});const Xf={},Jf=["s","/"],Zf=5;var Qf=Gt(({app:e})=>{e.component("SearchBox",t=>le(Gf,Ke({locales:Xf,hotKeys:Jf,maxSuggestions:Zf},t)))});const eh=[Pu,$u,Vu,Of,Bf,Qf];function gi(e,t,n){var r,a,s;t===void 0&&(t=50),n===void 0&&(n={});var o=(r=n.isImmediate)!=null&&r,i=(a=n.callback)!=null&&a,l=n.maxWait,c=Date.now(),u=[];function m(){if(l!==void 0){var w=Date.now()-c;if(w+t>=l)return l-w}return t}var f=function(){var w=[].slice.call(arguments),h=this;return new Promise(function(b,g){var v=o&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,c=Date.now(),!o){var k=e.apply(h,w);i&&i(k),u.forEach(function(A){return(0,A.resolve)(k)}),u=[]}},m()),v){var x=e.apply(h,w);return i&&i(x),b(x)}u.push({resolve:b,reject:g})})};return f.cancel=function(w){s!==void 0&&clearTimeout(s),u.forEach(function(h){return(0,h.reject)(w)}),u=[]},f}const vi=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,th=()=>window.scrollTo({top:0,behavior:"smooth"});const nh=Ne({name:"BackToTop",setup(){const e=ye(0),t=pe(()=>e.value>300),n=gi(()=>{e.value=vi()},100);qe(()=>{e.value=vi(),window.addEventListener("scroll",()=>n())});const r=le("div",{class:"back-to-top",onClick:th});return()=>le(ia,{name:"back-to-top"},{default:()=>t.value?r:null})}}),rh=[nh],ah=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const a=or(),s=Yt(),o=gi(()=>{var l,c,u,m;const f=Array.from(document.querySelectorAll(e)),h=Array.from(document.querySelectorAll(t)).filter(k=>f.some(A=>A.hash===k.hash)),b=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),g=window.innerHeight+b,v=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),x=Math.abs(v-g)<r;for(let k=0;k<h.length;k++){const A=h[k],H=h[k+1],j=k===0&&b===0,C=b>=((c=(l=A.parentElement)===null||l===void 0?void 0:l.offsetTop)!==null&&c!==void 0?c:0)-r,E=!H||b<((m=(u=H.parentElement)===null||u===void 0?void 0:u.offsetTop)!==null&&m!==void 0?m:0)-r;if(!(j||C&&E))continue;const q=decodeURIComponent(a.currentRoute.value.hash),Y=decodeURIComponent(A.hash);if(q===Y)return;if(x){for(let _=k+1;_<h.length;_++)if(q===decodeURIComponent(h[_].hash))return}sh(a,{hash:Y,force:!0});return}},n),i=()=>o();qe(()=>{o(),window.addEventListener("scroll",i)}),cn(()=>{window.removeEventListener("scroll",i)}),Xe(()=>s.value.path,()=>i())},sh=async(e,...t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace(...t).finally(()=>e.options.scrollBehavior=n)},oh="a.sidebar-item",ih=".header-anchor",lh=200,ch=5;var dh=ir(()=>{ah({headerLinkSelector:oh,headerAnchorSelector:ih,delay:lh,offset:ch})}),uh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ur={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(uh,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(h){var b,g;for(b in h)g=h[b],g!==void 0&&h.hasOwnProperty(b)&&(r[b]=g);return this},n.status=null,n.set=function(h){var b=n.isStarted();h=a(h,r.minimum,1),n.status=h===1?null:h;var g=n.render(!b),v=g.querySelector(r.barSelector),x=r.speed,k=r.easing;return g.offsetWidth,i(function(A){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(v,o(h,x,k)),h===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){n.remove(),A()},x)},x)):setTimeout(A,x)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var h=function(){setTimeout(function(){!n.status||(n.trickle(),h())},r.trickleSpeed)};return r.trickle&&h(),this},n.done=function(h){return!h&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(h){var b=n.status;return b?(typeof h!="number"&&(h=(1-b)*a(Math.random()*b,.1,.95)),b=a(b+h,0,.994),n.set(b)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var h=0,b=0;n.promise=function(g){return!g||g.state()==="resolved"?this:(b===0&&n.start(),h++,b++,g.always(function(){b--,b===0?(h=0,n.done()):n.set((h-b)/h)}),this)}}(),n.render=function(h){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var b=document.createElement("div");b.id="nprogress",b.innerHTML=r.template;var g=b.querySelector(r.barSelector),v=h?"-100":s(n.status||0),x=document.querySelector(r.parent),k;return l(g,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(k=b.querySelector(r.spinnerSelector),k&&w(k)),x!=document.body&&u(x,"nprogress-custom-parent"),x.appendChild(b),b},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(r.parent),"nprogress-custom-parent");var h=document.getElementById("nprogress");h&&w(h)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var h=document.body.style,b="WebkitTransform"in h?"Webkit":"MozTransform"in h?"Moz":"msTransform"in h?"ms":"OTransform"in h?"O":"";return b+"Perspective"in h?"translate3d":b+"Transform"in h?"translate":"margin"};function a(h,b,g){return h<b?b:h>g?g:h}function s(h){return(-1+h)*100}function o(h,b,g){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+s(h)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+s(h)+"%,0)"}:v={"margin-left":s(h)+"%"},v.transition="all "+b+"ms "+g,v}var i=function(){var h=[];function b(){var g=h.shift();g&&g(b)}return function(g){h.push(g),h.length==1&&b()}}(),l=function(){var h=["Webkit","O","Moz","ms"],b={};function g(A){return A.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(H,j){return j.toUpperCase()})}function v(A){var H=document.body.style;if(A in H)return A;for(var j=h.length,C=A.charAt(0).toUpperCase()+A.slice(1),E;j--;)if(E=h[j]+C,E in H)return E;return A}function x(A){return A=g(A),b[A]||(b[A]=v(A))}function k(A,H,j){H=x(H),A.style[H]=j}return function(A,H){var j=arguments,C,E;if(j.length==2)for(C in H)E=H[C],E!==void 0&&H.hasOwnProperty(C)&&k(A,C,E);else k(A,j[1],j[2])}}();function c(h,b){var g=typeof h=="string"?h:f(h);return g.indexOf(" "+b+" ")>=0}function u(h,b){var g=f(h),v=g+b;c(g,b)||(h.className=v.substring(1))}function m(h,b){var g=f(h),v;!c(h,b)||(v=g.replace(" "+b+" "," "),h.className=v.substring(1,v.length-1))}function f(h){return(" "+(h.className||"")+" ").replace(/\s+/gi," ")}function w(h){h&&h.parentNode&&h.parentNode.removeChild(h)}return n})})(ur);const fh=()=>{qe(()=>{const e=or(),t=new Set;t.add(e.currentRoute.value.path),ur.exports.configure({showSpinner:!1}),e.beforeEach(n=>{t.has(n.path)||ur.exports.start()}),e.afterEach(n=>{t.add(n.path),ur.exports.done()})})};var hh=ir(()=>{fh()}),ph=ir(()=>{_f(),Cf()});const Rn={staticIcon:!1,align:"bottom",selector:'div[class*="language-"]',delay:400,color:"var(--c-brand)",backgroundTransition:!0,backgroundTransitionColor:"var(--code-bg-color)",successTextColor:"var(--c-brand-light)",successText:"Copied!"};var mh=ir(()=>{const e=Yt(),t=()=>{setTimeout(()=>{document.querySelectorAll(Rn.selector).forEach(n=>{if(n.classList.contains(`code-copy-added-${Rn.align}`)||n.querySelector("pre, code[class*='pre-']")===null)return;const r=n.querySelector("pre, code[class*='pre-']"),a=Gc(fi,{parent:n,code:r.innerText,options:Rn}),s=document.createElement("div");n.appendChild(s),a.mount(s),n.classList.add(`code-copy-added-${Rn.align}`)})},Rn.delay+100)};return qe(()=>{t(),window.addEventListener("vuepress-plugin-clipboard-update-event",t)}),cn(()=>{window.removeEventListener("vuepress-plugin-clipboard-update-event",t)}),ys(()=>{t()}),Xe(()=>e.value.path,t),t});const gh=[dh,hh,ph,mh],vh=[["v-8daa1a0e","/",{title:"intro"},["/index.html","/index.md"]],["v-37b893e5","/fixest/",{title:"fixest"},["/fixest/index.html","/fixest/README.md"]],["v-1c385113","/extras/",{title:"extras"},["/extras/index.html","/extras/README.md"]],["v-77f0ef68","/data.table/",{title:"data.table"},["/data.table/index.html","/data.table/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]],yh=vh.reduce((e,[t,n,r,a])=>(e.push({name:t,path:n,component:Jo,meta:r},...a.map(s=>({path:s,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Jo}]),bh=(e,t)=>{const n=pe(()=>bu(Tt.value.locales,t.currentRoute.value.path)),r=pe(()=>xu(Tt.value,n.value)),a=pe(()=>ou(ut.value)),s=pe(()=>mu(ut.value,r.value)),o=pe(()=>hu(s.value,a.value,r.value)),i=pe(()=>vu(ut.value));e.provide(ba,n),e.provide(Xo,r),e.provide(Wo,a),e.provide(pu,s),e.provide(Yo,o),e.provide(Go,i),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>a.value},$headTitle:{get:()=>s.value},$lang:{get:()=>i.value},$page:{get:()=>ut.value},$routeLocale:{get:()=>n.value},$site:{get:()=>Tt.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>Ru}})},wh=e=>{e.component("ClientOnly",eu),e.component("Content",wa)},_h=Xc,xh=md,Eh=async()=>{const e=_h({name:"VuepressApp",setup(){Su();for(const n of gh)n();return()=>[le(Bo),...rh.map(n=>le(n))]}}),t=Zd({history:xh(du(Tt.value.base)),routes:yh,scrollBehavior:(n,r,a)=>a||(n.hash?{el:n.hash}:{top:0})});t.beforeResolve(async(n,r)=>{var a;(n.path!==r.path||r===tt)&&([ut.value]=await Promise.all([au(n.name),(a=qo[n.name])===null||a===void 0?void 0:a.__asyncLoader()]))}),bh(e,t),wh(e);for(const n of eh)await n({app:e,router:t,siteData:Tt});return e.use(t),{app:e,router:t}};Eh().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{_u as A,Ih as B,Oh as C,le as D,Ru as E,Re as F,eu as G,ft as H,ye as I,Xe as J,kh as K,Ah as L,uu as M,du as N,or as O,he as P,Ef as Q,qe as R,Qt as S,ia as T,Yt as U,Mh as V,Ko as W,Br as X,kf as Y,Mf as _,Nt as a,ge as b,Gn as c,Eh as createVueApp,Yr as d,Ch as e,Ne as f,Ca as g,Ze as h,su as i,pe as j,G as k,Rh as l,Th as m,va as n,_t as o,pl as p,Vr as q,ec as r,oc as s,pr as t,yu as u,zs as v,ds as w,cu as x,Ph as y,Lh as z};