var yi=Object.defineProperty,bi=Object.defineProperties;var _i=Object.getOwnPropertyDescriptors;var Lo=Object.getOwnPropertySymbols;var wi=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable;var Io=(e,t,n)=>t in e?yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,We=(e,t)=>{for(var n in t||(t={}))wi.call(t,n)&&Io(e,n,t[n]);if(Lo)for(var n of Lo(t))xi.call(t,n)&&Io(e,n,t[n]);return e},An=(e,t)=>bi(e,_i(t));const fr={};function hr(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ei="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Si=hr(Ei);function Oo(e){return!!e||e===""}function Zt(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=he(r)?ki(r):Zt(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(he(e))return e;if(ve(e))return e}}const Ci=/;(?![^(]*\))/g,Ti=/:(.+)/;function ki(e){const t={};return e.split(Ci).forEach(n=>{if(n){const r=n.split(Ti);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ft(e){let t="";if(he(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const r=ft(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pr=e=>e==null?"":G(e)||ve(e)&&(e.toString===Ho||!Z(e.toString))?JSON.stringify(e,Mo,2):String(e),Mo=(e,t)=>t&&t.__v_isRef?Mo(e,t.value):Lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Do(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!G(t)&&!Fo(t)?String(t):t,ue={},Pt=[],je=()=>{},Ri=()=>!1,Ai=/^on[^a-z]/,en=e=>Ai.test(e),mr=e=>e.startsWith("onUpdate:"),xe=Object.assign,gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pi=Object.prototype.hasOwnProperty,re=(e,t)=>Pi.call(e,t),G=Array.isArray,Lt=e=>Pn(e)==="[object Map]",Do=e=>Pn(e)==="[object Set]",Z=e=>typeof e=="function",he=e=>typeof e=="string",vr=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",No=e=>ve(e)&&Z(e.then)&&Z(e.catch),Ho=Object.prototype.toString,Pn=e=>Ho.call(e),Li=e=>Pn(e).slice(8,-1),Fo=e=>Pn(e)==="[object Object]",yr=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tn=hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ii=/-(\w)/g,Ve=Ln(e=>e.replace(Ii,(t,n)=>n?n.toUpperCase():"")),Oi=/\B([A-Z])/g,It=Ln(e=>e.replace(Oi,"-$1").toLowerCase()),In=Ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),br=Ln(e=>e?`on${In(e)}`:""),nn=(e,t)=>!Object.is(e,t),_r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},On=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$o=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let zo;const Mi=()=>zo||(zo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ye;const Mn=[];class Di{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(Mn.push(this),Ye=this)}off(){this.active&&(Mn.pop(),Ye=Mn[Mn.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ni(e,t){t=t||Ye,t&&t.active&&t.effects.push(e)}function Hi(){return Ye}function Fi(e){Ye&&Ye.cleanups.push(e)}const wr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bo=e=>(e.w&nt)>0,jo=e=>(e.n&nt)>0,$i=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},zi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Bo(o)&&!jo(o)?o.delete(e):t[n++]=o,o.w&=~nt,o.n&=~nt}t.length=n}},xr=new WeakMap;let rn=0,nt=1;const Er=30,on=[];let ht;const pt=Symbol(""),Sr=Symbol("");class Cr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Ni(this,r)}run(){if(!this.active)return this.fn();if(!on.includes(this))try{return on.push(ht=this),Bi(),nt=1<<++rn,rn<=Er?$i(this):qo(this),this.fn()}finally{rn<=Er&&zi(this),nt=1<<--rn,mt(),on.pop();const t=on.length;ht=t>0?on[t-1]:void 0}}stop(){this.active&&(qo(this),this.onStop&&this.onStop(),this.active=!1)}}function qo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ot=!0;const Tr=[];function Mt(){Tr.push(Ot),Ot=!1}function Bi(){Tr.push(Ot),Ot=!0}function mt(){const e=Tr.pop();Ot=e===void 0?!0:e}function Le(e,t,n){if(!Uo())return;let r=xr.get(e);r||xr.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=wr()),Ko(o)}function Uo(){return Ot&&ht!==void 0}function Ko(e,t){let n=!1;rn<=Er?jo(e)||(e.n|=nt,n=!Bo(e)):n=!e.has(ht),n&&(e.add(ht),ht.deps.push(e))}function Xe(e,t,n,r,o,s){const a=xr.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&G(e))a.forEach((l,c)=>{(c==="length"||c>=r)&&i.push(l)});else switch(n!==void 0&&i.push(a.get(n)),t){case"add":G(e)?yr(n)&&i.push(a.get("length")):(i.push(a.get(pt)),Lt(e)&&i.push(a.get(Sr)));break;case"delete":G(e)||(i.push(a.get(pt)),Lt(e)&&i.push(a.get(Sr)));break;case"set":Lt(e)&&i.push(a.get(pt));break}if(i.length===1)i[0]&&kr(i[0]);else{const l=[];for(const c of i)c&&l.push(...c);kr(wr(l))}}function kr(e,t){for(const n of G(e)?e:[...e])(n!==ht||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ji=hr("__proto__,__v_isRef,__isVue"),Wo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(vr)),qi=Rr(),Ui=Rr(!1,!0),Ki=Rr(!0),Vo=Wi();function Wi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=oe(this);for(let s=0,a=this.length;s<a;s++)Le(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(oe)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=oe(this)[t].apply(this,n);return mt(),r}}),e}function Rr(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_raw"&&s===(e?t?ll:ns:t?ts:es).get(r))return r;const a=G(r);if(!e&&a&&re(Vo,o))return Reflect.get(Vo,o,s);const i=Reflect.get(r,o,s);return(vr(o)?Wo.has(o):ji(o))||(e||Le(r,"get",o),t)?i:Ee(i)?!a||!yr(o)?i.value:i:ve(i)?e?Lr(i):sn(i):i}}const Vi=Yo(),Yi=Yo(!0);function Yo(e=!1){return function(n,r,o,s){let a=n[r];if(!e&&!Or(o)&&(o=oe(o),a=oe(a),!G(n)&&Ee(a)&&!Ee(o)))return a.value=o,!0;const i=G(n)&&yr(r)?Number(r)<n.length:re(n,r),l=Reflect.set(n,r,o,s);return n===oe(s)&&(i?nn(o,a)&&Xe(n,"set",r,o):Xe(n,"add",r,o)),l}}function Gi(e,t){const n=re(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function Ji(e,t){const n=Reflect.has(e,t);return(!vr(t)||!Wo.has(t))&&Le(e,"has",t),n}function Xi(e){return Le(e,"iterate",G(e)?"length":pt),Reflect.ownKeys(e)}const Go={get:qi,set:Vi,deleteProperty:Gi,has:Ji,ownKeys:Xi},Qi={get:Ki,set(e,t){return!0},deleteProperty(e,t){return!0}},Zi=xe({},Go,{get:Ui,set:Yi}),Ar=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,r=!1){e=e.__v_raw;const o=oe(e),s=oe(t);t!==s&&!n&&Le(o,"get",t),!n&&Le(o,"get",s);const{has:a}=Dn(o),i=r?Ar:n?Mr:an;if(a.call(o,t))return i(e.get(t));if(a.call(o,s))return i(e.get(s));e!==o&&e.get(t)}function Hn(e,t=!1){const n=this.__v_raw,r=oe(n),o=oe(e);return e!==o&&!t&&Le(r,"has",e),!t&&Le(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Le(oe(e),"iterate",pt),Reflect.get(e,"size",e)}function Jo(e){e=oe(e);const t=oe(this);return Dn(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function Xo(e,t){t=oe(t);const n=oe(this),{has:r,get:o}=Dn(n);let s=r.call(n,e);s||(e=oe(e),s=r.call(n,e));const a=o.call(n,e);return n.set(e,t),s?nn(t,a)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function Qo(e){const t=oe(this),{has:n,get:r}=Dn(t);let o=n.call(t,e);o||(e=oe(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Xe(t,"delete",e,void 0),s}function Zo(){const e=oe(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,o){const s=this,a=s.__v_raw,i=oe(a),l=t?Ar:e?Mr:an;return!e&&Le(i,"iterate",pt),a.forEach((c,d)=>r.call(o,l(c),l(d),s))}}function zn(e,t,n){return function(...r){const o=this.__v_raw,s=oe(o),a=Lt(s),i=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=o[e](...r),d=n?Ar:t?Mr:an;return!t&&Le(s,"iterate",l?Sr:pt),{next(){const{value:m,done:f}=c.next();return f?{value:m,done:f}:{value:i?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:this}}function el(){const e={get(s){return Nn(this,s)},get size(){return Fn(this)},has:Hn,add:Jo,set:Xo,delete:Qo,clear:Zo,forEach:$n(!1,!1)},t={get(s){return Nn(this,s,!1,!0)},get size(){return Fn(this)},has:Hn,add:Jo,set:Xo,delete:Qo,clear:Zo,forEach:$n(!1,!0)},n={get(s){return Nn(this,s,!0)},get size(){return Fn(this,!0)},has(s){return Hn.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:$n(!0,!1)},r={get(s){return Nn(this,s,!0,!0)},get size(){return Fn(this,!0)},has(s){return Hn.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zn(s,!1,!1),n[s]=zn(s,!0,!1),t[s]=zn(s,!1,!0),r[s]=zn(s,!0,!0)}),[e,n,t,r]}const[tl,nl,rl,ol]=el();function Pr(e,t){const n=t?e?ol:rl:e?nl:tl;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(re(n,o)&&o in r?n:r,o,s)}const sl={get:Pr(!1,!1)},al={get:Pr(!1,!0)},il={get:Pr(!0,!1)},es=new WeakMap,ts=new WeakMap,ns=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ul(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Li(e))}function sn(e){return e&&e.__v_isReadonly?e:Ir(e,!1,Go,sl,es)}function dl(e){return Ir(e,!1,Zi,al,ts)}function Lr(e){return Ir(e,!0,Qi,il,ns)}function Ir(e,t,n,r,o){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const a=ul(e);if(a===0)return e;const i=new Proxy(e,a===2?r:n);return o.set(e,i),i}function Dt(e){return Or(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Or(e){return!!(e&&e.__v_isReadonly)}function rs(e){return Dt(e)||Or(e)}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function os(e){return On(e,"__v_skip",!0),e}const an=e=>ve(e)?sn(e):e,Mr=e=>ve(e)?Lr(e):e;function ss(e){Uo()&&(e=oe(e),e.dep||(e.dep=wr()),Ko(e.dep))}function as(e,t){e=oe(e),e.dep&&kr(e.dep)}function Ee(e){return Boolean(e&&e.__v_isRef===!0)}function ye(e){return ls(e,!1)}function is(e){return ls(e,!0)}function ls(e,t){return Ee(e)?e:new fl(e,t)}class fl{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:oe(t),this._value=n?t:an(t)}get value(){return ss(this),this._value}set value(t){t=this._shallow?t:oe(t),nn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:an(t),as(this))}}function Qe(e){return Ee(e)?e.value:e}const hl={get:(e,t,n)=>Qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Ee(o)&&!Ee(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function cs(e){return Dt(e)?e:new Proxy(e,hl)}function pl(e){const t=G(e)?new Array(e.length):{};for(const n in e)t[n]=gl(e,n);return t}class ml{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function gl(e,t,n){const r=e[t];return Ee(r)?r:new ml(e,t,n)}class vl{constructor(t,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Cr(t,()=>{this._dirty||(this._dirty=!0,as(this))}),this.__v_isReadonly=r}get value(){const t=oe(this);return ss(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function pe(e,t){let n,r;const o=Z(e);return o?(n=e,r=je):(n=e.get,r=e.set),new vl(n,r,o||!r)}Promise.resolve();function yl(e,t,...n){const r=e.vnode.props||ue;let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:f}=r[d]||ue;f?o=n.map(_=>_.trim()):m&&(o=n.map($o))}let i,l=r[i=br(t)]||r[i=br(Ve(t))];!l&&s&&(l=r[i=br(It(t))]),l&&$e(l,e,6,o);const c=r[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,$e(c,e,6,o)}}function us(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let a={},i=!1;if(!Z(e)){const l=c=>{const d=us(c,t,!0);d&&(i=!0,xe(a,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!i?(r.set(e,null),null):(G(s)?s.forEach(l=>a[l]=null):xe(a,s),r.set(e,a),a)}function Dr(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,It(t))||re(e,t))}let Ie=null,Bn=null;function jn(e){const t=Ie;return Ie=e,Bn=e&&e.type.__scopeId||null,t}function bl(e){Bn=e}function _l(){Bn=null}function ds(e,t=Ie,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Fs(-1);const s=jn(t),a=e(...o);return jn(s),r._d&&Fs(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[a],slots:i,attrs:l,emit:c,render:d,renderCache:m,data:f,setupState:_,ctx:h,inheritAttrs:b}=e;let g,v;const x=jn(e);try{if(n.shapeFlag&4){const A=o||r;g=Ue(d.call(A,A,m,s,_,f,h)),v=l}else{const A=t;g=Ue(A.length>1?A(s,{attrs:l,slots:i,emit:c}):A(s,null)),v=t.props?l:wl(l)}}catch(A){fn.length=0,pn(A,e,1),g=ge(He)}let C=g;if(v&&b!==!1){const A=Object.keys(v),{shapeFlag:H}=C;A.length&&H&(1|6)&&(a&&A.some(mr)&&(v=xl(v,a)),C=Ht(C,v))}return n.dirs&&(C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),g=C,jn(x),g}const wl=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const r in e)(!mr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function El(e,t,n){const{props:r,children:o,component:s}=e,{props:a,children:i,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fs(r,a,c):!!a;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(a[f]!==r[f]&&!Dr(c,f))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:r===a?!1:r?a?fs(r,a,c):!0:!!a;return!1}function fs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Dr(n,s))return!0}return!1}function Sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cl=e=>e.__isSuspense;function hs(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):wc(e)}function gt(e,t){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[e]=t}}function we(e,t,n=!1){const r=_e||Ie;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Z(t)?t.call(r.proxy):t}}function Tl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{e.isMounted=!0}),cn(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],kl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(e,{slots:t}){const n=qs(),r=Tl();let o;return()=>{const s=t.default&&vs(t.default(),!0);if(!s||!s.length)return;const a=oe(e),{mode:i}=a,l=s[0];if(r.isLeaving)return Fr(l);const c=gs(l);if(!c)return Fr(l);const d=Hr(c,a,r,n);$r(c,d);const m=n.subTree,f=m&&gs(m);let _=!1;const{getTransitionKey:h}=c.type;if(h){const b=h();o===void 0?o=b:b!==o&&(o=b,_=!0)}if(f&&f.type!==He&&(!xt(c,f)||_)){const b=Hr(f,a,r,n);if($r(f,b),i==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},Fr(l);i==="in-out"&&c.type!==He&&(b.delayLeave=(g,v,x)=>{const C=ms(r,f);C[String(f.key)]=f,g._leaveCb=()=>{v(),g._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=x})}return l}}},ps=kl;function ms(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Hr(e,t,n,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:_,onLeaveCancelled:h,onBeforeAppear:b,onAppear:g,onAfterAppear:v,onAppearCancelled:x}=t,C=String(e.key),A=ms(n,e),H=(T,E)=>{T&&$e(T,r,9,E)},$={mode:s,persisted:a,beforeEnter(T){let E=i;if(!n.isMounted)if(o)E=b||i;else return;T._leaveCb&&T._leaveCb(!0);const V=A[C];V&&xt(e,V)&&V.el._leaveCb&&V.el._leaveCb(),H(E,[T])},enter(T){let E=l,V=c,q=d;if(!n.isMounted)if(o)E=g||l,V=v||c,q=x||d;else return;let Y=!1;const w=T._enterCb=D=>{Y||(Y=!0,D?H(q,[T]):H(V,[T]),$.delayedLeave&&$.delayedLeave(),T._enterCb=void 0)};E?(E(T,w),E.length<=1&&w()):w()},leave(T,E){const V=String(e.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return E();H(m,[T]);let q=!1;const Y=T._leaveCb=w=>{q||(q=!0,E(),w?H(h,[T]):H(_,[T]),T._leaveCb=void 0,A[V]===e&&delete A[V])};A[V]=e,f?(f(T,Y),f.length<=1&&Y()):Y()},clone(T){return Hr(T,t,n,r)}};return $}function Fr(e){if(ln(e))return e=Ht(e),e.children=null,e}function gs(e){return ln(e)?e.children?e.children[0]:void 0:e}function $r(e,t){e.shapeFlag&6&&e.component?$r(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vs(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const s=e[o];s.type===Re?(s.patchFlag&128&&r++,n=n.concat(vs(s.children,t))):(t||s.type!==He)&&n.push(s)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function Ne(e){return Z(e)?{setup:e,name:e.name}:e}const qn=e=>!!e.type.__asyncLoader;function vt(e){Z(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:o=200,timeout:s,suspensible:a=!0,onError:i}=e;let l=null,c,d=0;const m=()=>(d++,l=null,f()),f=()=>{let _;return l||(_=l=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),i)return new Promise((b,g)=>{i(h,()=>b(m()),()=>g(h),d+1)});throw h}).then(h=>_!==l&&l?l:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),c=h,h)))};return Ne({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const _=_e;if(c)return()=>zr(c,_);const h=x=>{l=null,pn(x,_,13,!r)};if(a&&_.suspense||hn)return f().then(x=>()=>zr(x,_)).catch(x=>(h(x),()=>r?ge(r,{error:x}):null));const b=ye(!1),g=ye(),v=ye(!!o);return o&&setTimeout(()=>{v.value=!1},o),s!=null&&setTimeout(()=>{if(!b.value&&!g.value){const x=new Error(`Async component timed out after ${s}ms.`);h(x),g.value=x}},s),f().then(()=>{b.value=!0,_.parent&&ln(_.parent.vnode)&&no(_.parent.update)}).catch(x=>{h(x),g.value=x}),()=>{if(b.value&&c)return zr(c,_);if(g.value&&r)return ge(r,{error:g.value});if(n&&!v.value)return ge(n)}}})}function zr(e,{vnode:{ref:t,props:n,children:r}}){const o=ge(e,n,r);return o.ref=t,o}const ln=e=>e.type.__isKeepAlive;function Rl(e,t){ys(e,"a",t)}function Al(e,t){ys(e,"da",t)}function ys(e,t,n=_e){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Un(t,r,n),n){let o=n.parent;for(;o&&o.parent;)ln(o.parent.vnode)&&Pl(r,t,n,o),o=o.parent}}function Pl(e,t,n,r){const o=Un(t,e,r,!0);Br(()=>{gr(r[t],o)},n)}function Un(e,t,n=_e,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Mt(),Ft(n);const i=$e(t,n,e,a);return Et(),mt(),i});return r?o.unshift(s):o.push(s),s}}const Ze=e=>(t,n=_e)=>(!hn||e==="sp")&&Un(e,t,n),Ll=Ze("bm"),qe=Ze("m"),Il=Ze("bu"),bs=Ze("u"),cn=Ze("bum"),Br=Ze("um"),Ol=Ze("sp"),Ml=Ze("rtg"),Dl=Ze("rtc");function Nl(e,t=_e){Un("ec",e,t)}let jr=!0;function Hl(e){const t=xs(e),n=e.proxy,r=e.ctx;jr=!1,t.beforeCreate&&_s(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:i,provide:l,inject:c,created:d,beforeMount:m,mounted:f,beforeUpdate:_,updated:h,activated:b,deactivated:g,beforeDestroy:v,beforeUnmount:x,destroyed:C,unmounted:A,render:H,renderTracked:$,renderTriggered:T,errorCaptured:E,serverPrefetch:V,expose:q,inheritAttrs:Y,components:w,directives:D,filters:W}=t;if(c&&Fl(c,r,null,e.appContext.config.unwrapInjectedRef),a)for(const Q in a){const te=a[Q];Z(te)&&(r[Q]=te.bind(n))}if(o){const Q=o.call(n,n);ve(Q)&&(e.data=sn(Q))}if(jr=!0,s)for(const Q in s){const te=s[Q],be=Z(te)?te.bind(n,n):Z(te.get)?te.get.bind(n,n):je,Se=!Z(te)&&Z(te.set)?te.set.bind(n):je,Ae=pe({get:be,set:Se});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Me=>Ae.value=Me})}if(i)for(const Q in i)ws(i[Q],r,n,Q);if(l){const Q=Z(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(te=>{gt(te,Q[te])})}d&&_s(d,e,"c");function j(Q,te){G(te)?te.forEach(be=>Q(be.bind(n))):te&&Q(te.bind(n))}if(j(Ll,m),j(qe,f),j(Il,_),j(bs,h),j(Rl,b),j(Al,g),j(Nl,E),j(Dl,$),j(Ml,T),j(cn,x),j(Br,A),j(Ol,V),G(q))if(q.length){const Q=e.exposed||(e.exposed={});q.forEach(te=>{Object.defineProperty(Q,te,{get:()=>n[te],set:be=>n[te]=be})})}else e.exposed||(e.exposed={});H&&e.render===je&&(e.render=H),Y!=null&&(e.inheritAttrs=Y),w&&(e.components=w),D&&(e.directives=D)}function Fl(e,t,n=je,r=!1){G(e)&&(e=qr(e));for(const o in e){const s=e[o];let a;ve(s)?"default"in s?a=we(s.from||o,s.default,!0):a=we(s.from||o):a=we(s),Ee(a)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[o]=a}}function _s(e,t,n){$e(G(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ws(e,t,n,r){const o=r.includes(".")?ea(n,r):()=>n[r];if(he(e)){const s=t[e];Z(s)&&Je(o,s)}else if(Z(e))Je(o,e.bind(n));else if(ve(e))if(G(e))e.forEach(s=>ws(s,t,n,r));else{const s=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(s)&&Je(o,s,e)}}function xs(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,i=s.get(t);let l;return i?l=i:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(c=>Kn(l,c,a,!0)),Kn(l,t,a)),s.set(t,l),l}function Kn(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Kn(e,s,n,!0),o&&o.forEach(a=>Kn(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const i=$l[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const $l={data:Es,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:yt,directives:yt,watch:Bl,provide:Es,inject:zl};function Es(e,t){return t?e?function(){return xe(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function zl(e,t){return yt(qr(e),qr(t))}function qr(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?xe(xe(Object.create(null),e),t):t}function Bl(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function jl(e,t,n,r=!1){const o={},s={};On(s,Xn,1),e.propsDefaults=Object.create(null),Ss(e,t,o,s);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=r?o:dl(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function ql(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,i=oe(o),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];const _=t[f];if(l)if(re(s,f))_!==s[f]&&(s[f]=_,c=!0);else{const h=Ve(f);o[h]=Ur(l,i,h,_,e,!1)}else _!==s[f]&&(s[f]=_,c=!0)}}}else{Ss(e,t,o,s)&&(c=!0);let d;for(const m in i)(!t||!re(t,m)&&((d=It(m))===m||!re(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(o[m]=Ur(l,i,m,void 0,e,!0)):delete o[m]);if(s!==i)for(const m in s)(!t||!re(t,m))&&(delete s[m],c=!0)}c&&Xe(e,"set","$attrs")}function Ss(e,t,n,r){const[o,s]=e.propsOptions;let a=!1,i;if(t)for(let l in t){if(tn(l))continue;const c=t[l];let d;o&&re(o,d=Ve(l))?!s||!s.includes(d)?n[d]=c:(i||(i={}))[d]=c:Dr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=oe(n),c=i||ue;for(let d=0;d<s.length;d++){const m=s[d];n[m]=Ur(o,l,m,c[m],e,!re(c,m))}}return a}function Ur(e,t,n,r,o,s){const a=e[n];if(a!=null){const i=re(a,"default");if(i&&r===void 0){const l=a.default;if(a.type!==Function&&Z(l)){const{propsDefaults:c}=o;n in c?r=c[n]:(Ft(o),r=c[n]=l.call(null,t),Et())}else r=l}a[0]&&(s&&!i?r=!1:a[1]&&(r===""||r===It(n))&&(r=!0))}return r}function Cs(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},i=[];let l=!1;if(!Z(e)){const d=m=>{l=!0;const[f,_]=Cs(m,t,!0);xe(a,f),_&&i.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!l)return r.set(e,Pt),Pt;if(G(s))for(let d=0;d<s.length;d++){const m=Ve(s[d]);Ts(m)&&(a[m]=ue)}else if(s)for(const d in s){const m=Ve(d);if(Ts(m)){const f=s[d],_=a[m]=G(f)||Z(f)?{type:f}:f;if(_){const h=As(Boolean,_.type),b=As(String,_.type);_[0]=h>-1,_[1]=b<0||h<b,(h>-1||re(_,"default"))&&i.push(m)}}}const c=[a,i];return r.set(e,c),c}function Ts(e){return e[0]!=="$"}function ks(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Rs(e,t){return ks(e)===ks(t)}function As(e,t){return G(t)?t.findIndex(n=>Rs(n,e)):Z(t)&&Rs(t,e)?0:-1}const Ps=e=>e[0]==="_"||e==="$stable",Kr=e=>G(e)?e.map(Ue):[Ue(e)],Ul=(e,t,n)=>{const r=ds((...o)=>Kr(t(...o)),n);return r._c=!1,r},Ls=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Ps(o))continue;const s=e[o];if(Z(s))t[o]=Ul(o,s,r);else if(s!=null){const a=Kr(s);t[o]=()=>a}}},Is=(e,t)=>{const n=Kr(t);e.slots.default=()=>n},Kl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=oe(t),On(t,"_",n)):Ls(t,e.slots={})}else e.slots={},t&&Is(e,t);On(e.slots,Xn,1)},Wl=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=ue;if(r.shapeFlag&32){const i=t._;i?n&&i===1?s=!1:(xe(o,t),!n&&i===1&&delete o._):(s=!t.$stable,Ls(t,o)),a=t}else t&&(Is(e,t),a={default:1});if(s)for(const i in o)!Ps(i)&&!(i in a)&&delete o[i]};function Ch(e,t){const n=Ie;if(n===null)return e;const r=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,i,l,c=ue]=t[s];Z(a)&&(a={mounted:a,updated:a}),a.deep&&St(i),o.push({dir:a,instance:r,value:i,oldValue:void 0,arg:l,modifiers:c})}return e}function Ge(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let a=0;a<o.length;a++){const i=o[a];s&&(i.oldValue=s[a].value);let l=i.dir[r];l&&(Mt(),$e(l,n,8,[e.el,i,e,t]),mt())}}function Os(){return{app:null,config:{isNativeTag:Ri,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Yl(e,t){return function(r,o=null){o!=null&&!ve(o)&&(o=null);const s=Os(),a=new Set;let i=!1;const l=s.app={_uid:Vl++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Ec,get config(){return s.config},set config(c){},use(c,...d){return a.has(c)||(c&&Z(c.install)?(a.add(c),c.install(l,...d)):Z(c)&&(a.add(c),c(l,...d))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,d){return d?(s.components[c]=d,l):s.components[c]},directive(c,d){return d?(s.directives[c]=d,l):s.directives[c]},mount(c,d,m){if(!i){const f=ge(r,o);return f.appContext=s,d&&t?t(f,c):e(f,c,m),i=!0,l._container=c,c.__vue_app__=l,Xr(f.component)||f.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return s.provides[c]=d,l}};return l}}function Wn(e,t,n,r,o=!1){if(G(e)){e.forEach((f,_)=>Wn(f,t&&(G(t)?t[_]:t),n,r,o));return}if(qn(r)&&!o)return;const s=r.shapeFlag&4?Xr(r.component)||r.component.proxy:r.el,a=o?null:s,{i,r:l}=e,c=t&&t.r,d=i.refs===ue?i.refs={}:i.refs,m=i.setupState;if(c!=null&&c!==l&&(he(c)?(d[c]=null,re(m,c)&&(m[c]=null)):Ee(c)&&(c.value=null)),Z(l))at(l,i,12,[a,d]);else{const f=he(l),_=Ee(l);if(f||_){const h=()=>{if(e.f){const b=f?d[l]:l.value;o?G(b)&&gr(b,s):G(b)?b.includes(s)||b.push(s):f?d[l]=[s]:(l.value=[s],e.k&&(d[e.k]=l.value))}else f?(d[l]=a,re(m,l)&&(m[l]=a)):Ee(l)&&(l.value=a,e.k&&(d[e.k]=a))};a?(h.id=-1,ke(h,n)):h()}}}let ot=!1;const Vn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Wr=e=>e.nodeType===8;function Gl(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:o,parentNode:s,remove:a,insert:i,createComment:l}}=e,c=(g,v)=>{if(!v.hasChildNodes()){n(null,g,v),tr();return}ot=!1,d(v.firstChild,g,null,null,null),tr(),ot&&console.error("Hydration completed but contains mismatches.")},d=(g,v,x,C,A,H=!1)=>{const $=Wr(g)&&g.data==="[",T=()=>h(g,v,x,C,A,$),{type:E,ref:V,shapeFlag:q}=v,Y=g.nodeType;v.el=g;let w=null;switch(E){case un:Y!==3?w=T():(g.data!==v.children&&(ot=!0,g.data=v.children),w=o(g));break;case He:Y!==8||$?w=T():w=o(g);break;case dn:if(Y!==1)w=T();else{w=g;const D=!v.children.length;for(let W=0;W<v.staticCount;W++)D&&(v.children+=w.outerHTML),W===v.staticCount-1&&(v.anchor=w),w=o(w);return w}break;case Re:$?w=_(g,v,x,C,A,H):w=T();break;default:if(q&1)Y!==1||v.type.toLowerCase()!==g.tagName.toLowerCase()?w=T():w=m(g,v,x,C,A,H);else if(q&6){v.slotScopeIds=A;const D=s(g);if(t(v,D,null,x,C,Vn(D),H),w=$?b(g):o(g),qn(v)){let W;$?(W=ge(Re),W.anchor=w?w.previousSibling:D.lastChild):W=g.nodeType===3?Yr(""):ge("div"),W.el=g,v.component.subTree=W}}else q&64?Y!==8?w=T():w=v.type.hydrate(g,v,x,C,A,H,e,f):q&128&&(w=v.type.hydrate(g,v,x,C,Vn(s(g)),A,H,e,d))}return V!=null&&Wn(V,null,C,v),w},m=(g,v,x,C,A,H)=>{H=H||!!v.dynamicChildren;const{type:$,props:T,patchFlag:E,shapeFlag:V,dirs:q}=v,Y=$==="input"&&q||$==="option";if(Y||E!==-1){if(q&&Ge(v,null,x,"created"),T)if(Y||!H||E&(16|32))for(const D in T)(Y&&D.endsWith("value")||en(D)&&!tn(D))&&r(g,D,null,T[D],!1,void 0,x);else T.onClick&&r(g,"onClick",null,T.onClick,!1,void 0,x);let w;if((w=T&&T.onVnodeBeforeMount)&&Fe(w,x,v),q&&Ge(v,null,x,"beforeMount"),((w=T&&T.onVnodeMounted)||q)&&hs(()=>{w&&Fe(w,x,v),q&&Ge(v,null,x,"mounted")},C),V&16&&!(T&&(T.innerHTML||T.textContent))){let D=f(g.firstChild,v,g,x,C,A,H);for(;D;){ot=!0;const W=D;D=D.nextSibling,a(W)}}else V&8&&g.textContent!==v.children&&(ot=!0,g.textContent=v.children)}return g.nextSibling},f=(g,v,x,C,A,H,$)=>{$=$||!!v.dynamicChildren;const T=v.children,E=T.length;for(let V=0;V<E;V++){const q=$?T[V]:T[V]=Ue(T[V]);if(g)g=d(g,q,C,A,H,$);else{if(q.type===un&&!q.children)continue;ot=!0,n(null,q,x,null,C,A,Vn(x),H)}}return g},_=(g,v,x,C,A,H)=>{const{slotScopeIds:$}=v;$&&(A=A?A.concat($):$);const T=s(g),E=f(o(g),v,T,x,C,A,H);return E&&Wr(E)&&E.data==="]"?o(v.anchor=E):(ot=!0,i(v.anchor=l("]"),T,E),E)},h=(g,v,x,C,A,H)=>{if(ot=!0,v.el=null,H){const E=b(g);for(;;){const V=o(g);if(V&&V!==E)a(V);else break}}const $=o(g),T=s(g);return a(g),n(null,v,T,$,x,C,Vn(T),A),$},b=g=>{let v=0;for(;g;)if(g=o(g),g&&Wr(g)&&(g.data==="["&&v++,g.data==="]")){if(v===0)return o(g);v--}return g};return[c,d]}const ke=hs;function Jl(e){return Ms(e)}function Xl(e){return Ms(e,Gl)}function Ms(e,t){const n=Mi();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:a,createText:i,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:f,setScopeId:_=je,cloneNode:h,insertStaticContent:b}=e,g=(u,p,y,R=null,k=null,L=null,N=!1,I=null,M=!!p.dynamicChildren)=>{if(u===p)return;u&&!xt(u,p)&&(R=z(u),Te(u,k,L,!0),u=null),p.patchFlag===-2&&(M=!1,p.dynamicChildren=null);const{type:P,ref:U,shapeFlag:B}=p;switch(P){case un:v(u,p,y,R);break;case He:x(u,p,y,R);break;case dn:u==null&&C(p,y,R,N);break;case Re:D(u,p,y,R,k,L,N,I,M);break;default:B&1?$(u,p,y,R,k,L,N,I,M):B&6?W(u,p,y,R,k,L,N,I,M):(B&64||B&128)&&P.process(u,p,y,R,k,L,N,I,M,ie)}U!=null&&k&&Wn(U,u&&u.ref,L,p||u,!p)},v=(u,p,y,R)=>{if(u==null)r(p.el=i(p.children),y,R);else{const k=p.el=u.el;p.children!==u.children&&c(k,p.children)}},x=(u,p,y,R)=>{u==null?r(p.el=l(p.children||""),y,R):p.el=u.el},C=(u,p,y,R)=>{[u.el,u.anchor]=b(u.children,p,y,R)},A=({el:u,anchor:p},y,R)=>{let k;for(;u&&u!==p;)k=f(u),r(u,y,R),u=k;r(p,y,R)},H=({el:u,anchor:p})=>{let y;for(;u&&u!==p;)y=f(u),o(u),u=y;o(p)},$=(u,p,y,R,k,L,N,I,M)=>{N=N||p.type==="svg",u==null?T(p,y,R,k,L,N,I,M):q(u,p,k,L,N,I,M)},T=(u,p,y,R,k,L,N,I)=>{let M,P;const{type:U,props:B,shapeFlag:K,transition:J,patchFlag:ne,dirs:me}=u;if(u.el&&h!==void 0&&ne===-1)M=u.el=h(u.el);else{if(M=u.el=a(u.type,L,B&&B.is,B),K&8?d(M,u.children):K&16&&V(u.children,M,null,R,k,L&&U!=="foreignObject",N,I),me&&Ge(u,null,R,"created"),B){for(const fe in B)fe!=="value"&&!tn(fe)&&s(M,fe,null,B[fe],L,u.children,R,k,O);"value"in B&&s(M,"value",null,B.value),(P=B.onVnodeBeforeMount)&&Fe(P,R,u)}E(M,u,u.scopeId,N,R)}me&&Ge(u,null,R,"beforeMount");const ce=(!k||k&&!k.pendingBranch)&&J&&!J.persisted;ce&&J.beforeEnter(M),r(M,p,y),((P=B&&B.onVnodeMounted)||ce||me)&&ke(()=>{P&&Fe(P,R,u),ce&&J.enter(M),me&&Ge(u,null,R,"mounted")},k)},E=(u,p,y,R,k)=>{if(y&&_(u,y),R)for(let L=0;L<R.length;L++)_(u,R[L]);if(k){let L=k.subTree;if(p===L){const N=k.vnode;E(u,N,N.scopeId,N.slotScopeIds,k.parent)}}},V=(u,p,y,R,k,L,N,I,M=0)=>{for(let P=M;P<u.length;P++){const U=u[P]=I?st(u[P]):Ue(u[P]);g(null,U,p,y,R,k,L,N,I)}},q=(u,p,y,R,k,L,N)=>{const I=p.el=u.el;let{patchFlag:M,dynamicChildren:P,dirs:U}=p;M|=u.patchFlag&16;const B=u.props||ue,K=p.props||ue;let J;y&&bt(y,!1),(J=K.onVnodeBeforeUpdate)&&Fe(J,y,p,u),U&&Ge(p,u,y,"beforeUpdate"),y&&bt(y,!0);const ne=k&&p.type!=="foreignObject";if(P?Y(u.dynamicChildren,P,I,y,R,ne,L):N||be(u,p,I,null,y,R,ne,L,!1),M>0){if(M&16)w(I,p,B,K,y,R,k);else if(M&2&&B.class!==K.class&&s(I,"class",null,K.class,k),M&4&&s(I,"style",B.style,K.style,k),M&8){const me=p.dynamicProps;for(let ce=0;ce<me.length;ce++){const fe=me[ce],Be=B[fe],At=K[fe];(At!==Be||fe==="value")&&s(I,fe,Be,At,k,u.children,y,R,O)}}M&1&&u.children!==p.children&&d(I,p.children)}else!N&&P==null&&w(I,p,B,K,y,R,k);((J=K.onVnodeUpdated)||U)&&ke(()=>{J&&Fe(J,y,p,u),U&&Ge(p,u,y,"updated")},R)},Y=(u,p,y,R,k,L,N)=>{for(let I=0;I<p.length;I++){const M=u[I],P=p[I],U=M.el&&(M.type===Re||!xt(M,P)||M.shapeFlag&(6|64))?m(M.el):y;g(M,P,U,null,R,k,L,N,!0)}},w=(u,p,y,R,k,L,N)=>{if(y!==R){for(const I in R){if(tn(I))continue;const M=R[I],P=y[I];M!==P&&I!=="value"&&s(u,I,P,M,N,p.children,k,L,O)}if(y!==ue)for(const I in y)!tn(I)&&!(I in R)&&s(u,I,y[I],null,N,p.children,k,L,O);"value"in R&&s(u,"value",y.value,R.value)}},D=(u,p,y,R,k,L,N,I,M)=>{const P=p.el=u?u.el:i(""),U=p.anchor=u?u.anchor:i("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:J}=p;J&&(I=I?I.concat(J):J),u==null?(r(P,y,R),r(U,y,R),V(p.children,y,U,k,L,N,I,M)):B>0&&B&64&&K&&u.dynamicChildren?(Y(u.dynamicChildren,K,y,k,L,N,I),(p.key!=null||k&&p===k.subTree)&&Ds(u,p,!0)):be(u,p,y,U,k,L,N,I,M)},W=(u,p,y,R,k,L,N,I,M)=>{p.slotScopeIds=I,u==null?p.shapeFlag&512?k.ctx.activate(p,y,R,N,M):se(p,y,R,k,L,N,M):j(u,p,M)},se=(u,p,y,R,k,L,N)=>{const I=u.component=uc(u,R,k);if(ln(u)&&(I.ctx.renderer=ie),dc(I),I.asyncDep){if(k&&k.registerDep(I,Q),!u.el){const M=I.subTree=ge(He);x(null,M,p,y)}return}Q(I,u,p,y,k,L,N)},j=(u,p,y)=>{const R=p.component=u.component;if(El(u,p,y))if(R.asyncDep&&!R.asyncResolved){te(R,p,y);return}else R.next=p,bc(R.update),R.update();else p.component=u.component,p.el=u.el,R.vnode=p},Q=(u,p,y,R,k,L,N)=>{const I=()=>{if(u.isMounted){let{next:U,bu:B,u:K,parent:J,vnode:ne}=u,me=U,ce;bt(u,!1),U?(U.el=ne.el,te(u,U,N)):U=ne,B&&_r(B),(ce=U.props&&U.props.onVnodeBeforeUpdate)&&Fe(ce,J,U,ne),bt(u,!0);const fe=Nr(u),Be=u.subTree;u.subTree=fe,g(Be,fe,m(Be.el),z(Be),u,k,L),U.el=fe.el,me===null&&Sl(u,fe.el),K&&ke(K,k),(ce=U.props&&U.props.onVnodeUpdated)&&ke(()=>Fe(ce,J,U,ne),k)}else{let U;const{el:B,props:K}=p,{bm:J,m:ne,parent:me}=u,ce=qn(p);if(bt(u,!1),J&&_r(J),!ce&&(U=K&&K.onVnodeBeforeMount)&&Fe(U,me,p),bt(u,!0),B&&X){const fe=()=>{u.subTree=Nr(u),X(B,u.subTree,u,k,null)};ce?p.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=Nr(u);g(null,fe,y,R,u,k,L),p.el=fe.el}if(ne&&ke(ne,k),!ce&&(U=K&&K.onVnodeMounted)){const fe=p;ke(()=>Fe(U,me,fe),k)}p.shapeFlag&256&&u.a&&ke(u.a,k),u.isMounted=!0,p=y=R=null}},M=u.effect=new Cr(I,()=>no(u.update),u.scope),P=u.update=M.run.bind(M);P.id=u.uid,bt(u,!0),P()},te=(u,p,y)=>{p.component=u;const R=u.vnode.props;u.vnode=p,u.next=null,ql(u,p.props,R,y),Wl(u,p.children,y),Mt(),ro(void 0,u.update),mt()},be=(u,p,y,R,k,L,N,I,M=!1)=>{const P=u&&u.children,U=u?u.shapeFlag:0,B=p.children,{patchFlag:K,shapeFlag:J}=p;if(K>0){if(K&128){Ae(P,B,y,R,k,L,N,I,M);return}else if(K&256){Se(P,B,y,R,k,L,N,I,M);return}}J&8?(U&16&&O(P,k,L),B!==P&&d(y,B)):U&16?J&16?Ae(P,B,y,R,k,L,N,I,M):O(P,k,L,!0):(U&8&&d(y,""),J&16&&V(B,y,R,k,L,N,I,M))},Se=(u,p,y,R,k,L,N,I,M)=>{u=u||Pt,p=p||Pt;const P=u.length,U=p.length,B=Math.min(P,U);let K;for(K=0;K<B;K++){const J=p[K]=M?st(p[K]):Ue(p[K]);g(u[K],J,y,null,k,L,N,I,M)}P>U?O(u,k,L,!0,!1,B):V(p,y,R,k,L,N,I,M,B)},Ae=(u,p,y,R,k,L,N,I,M)=>{let P=0;const U=p.length;let B=u.length-1,K=U-1;for(;P<=B&&P<=K;){const J=u[P],ne=p[P]=M?st(p[P]):Ue(p[P]);if(xt(J,ne))g(J,ne,y,null,k,L,N,I,M);else break;P++}for(;P<=B&&P<=K;){const J=u[B],ne=p[K]=M?st(p[K]):Ue(p[K]);if(xt(J,ne))g(J,ne,y,null,k,L,N,I,M);else break;B--,K--}if(P>B){if(P<=K){const J=K+1,ne=J<U?p[J].el:R;for(;P<=K;)g(null,p[P]=M?st(p[P]):Ue(p[P]),y,ne,k,L,N,I,M),P++}}else if(P>K)for(;P<=B;)Te(u[P],k,L,!0),P++;else{const J=P,ne=P,me=new Map;for(P=ne;P<=K;P++){const Pe=p[P]=M?st(p[P]):Ue(p[P]);Pe.key!=null&&me.set(Pe.key,P)}let ce,fe=0;const Be=K-ne+1;let At=!1,Ro=0;const Qt=new Array(Be);for(P=0;P<Be;P++)Qt[P]=0;for(P=J;P<=B;P++){const Pe=u[P];if(fe>=Be){Te(Pe,k,L,!0);continue}let Ke;if(Pe.key!=null)Ke=me.get(Pe.key);else for(ce=ne;ce<=K;ce++)if(Qt[ce-ne]===0&&xt(Pe,p[ce])){Ke=ce;break}Ke===void 0?Te(Pe,k,L,!0):(Qt[Ke-ne]=P+1,Ke>=Ro?Ro=Ke:At=!0,g(Pe,p[Ke],y,null,k,L,N,I,M),fe++)}const Ao=At?Ql(Qt):Pt;for(ce=Ao.length-1,P=Be-1;P>=0;P--){const Pe=ne+P,Ke=p[Pe],Po=Pe+1<U?p[Pe+1].el:R;Qt[P]===0?g(null,Ke,y,Po,k,L,N,I,M):At&&(ce<0||P!==Ao[ce]?Me(Ke,y,Po,2):ce--)}}},Me=(u,p,y,R,k=null)=>{const{el:L,type:N,transition:I,children:M,shapeFlag:P}=u;if(P&6){Me(u.component.subTree,p,y,R);return}if(P&128){u.suspense.move(p,y,R);return}if(P&64){N.move(u,p,y,ie);return}if(N===Re){r(L,p,y);for(let B=0;B<M.length;B++)Me(M[B],p,y,R);r(u.anchor,p,y);return}if(N===dn){A(u,p,y);return}if(R!==2&&P&1&&I)if(R===0)I.beforeEnter(L),r(L,p,y),ke(()=>I.enter(L),k);else{const{leave:B,delayLeave:K,afterLeave:J}=I,ne=()=>r(L,p,y),me=()=>{B(L,()=>{ne(),J&&J()})};K?K(L,ne,me):me()}else r(L,p,y)},Te=(u,p,y,R=!1,k=!1)=>{const{type:L,props:N,ref:I,children:M,dynamicChildren:P,shapeFlag:U,patchFlag:B,dirs:K}=u;if(I!=null&&Wn(I,null,y,u,!0),U&256){p.ctx.deactivate(u);return}const J=U&1&&K,ne=!qn(u);let me;if(ne&&(me=N&&N.onVnodeBeforeUnmount)&&Fe(me,p,u),U&6)F(u.component,y,R);else{if(U&128){u.suspense.unmount(y,R);return}J&&Ge(u,null,p,"beforeUnmount"),U&64?u.type.remove(u,p,y,k,ie,R):P&&(L!==Re||B>0&&B&64)?O(P,p,y,!1,!0):(L===Re&&B&(128|256)||!k&&U&16)&&O(M,p,y),R&&Xt(u)}(ne&&(me=N&&N.onVnodeUnmounted)||J)&&ke(()=>{me&&Fe(me,p,u),J&&Ge(u,null,p,"unmounted")},y)},Xt=u=>{const{type:p,el:y,anchor:R,transition:k}=u;if(p===Re){S(y,R);return}if(p===dn){H(u);return}const L=()=>{o(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(u.shapeFlag&1&&k&&!k.persisted){const{leave:N,delayLeave:I}=k,M=()=>N(y,L);I?I(u.el,L,M):M()}else L()},S=(u,p)=>{let y;for(;u!==p;)y=f(u),o(u),u=y;o(p)},F=(u,p,y)=>{const{bum:R,scope:k,update:L,subTree:N,um:I}=u;R&&_r(R),k.stop(),L&&(L.active=!1,Te(N,u,p,y)),I&&ke(I,p),ke(()=>{u.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(u,p,y,R=!1,k=!1,L=0)=>{for(let N=L;N<u.length;N++)Te(u[N],p,y,R,k)},z=u=>u.shapeFlag&6?z(u.component.subTree):u.shapeFlag&128?u.suspense.next():f(u.anchor||u.el),ae=(u,p,y)=>{u==null?p._vnode&&Te(p._vnode,null,null,!0):g(p._vnode||null,u,p,null,null,null,y),tr(),p._vnode=u},ie={p:g,um:Te,m:Me,r:Xt,mt:se,mc:V,pc:be,pbc:Y,n:z,o:e};let ee,X;return t&&([ee,X]=t(ie)),{render:ae,hydrate:ee,createApp:Yl(ae,ee)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ds(e,t,n=!1){const r=e.children,o=t.children;if(G(r)&&G(o))for(let s=0;s<r.length;s++){const a=r[s];let i=o[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[s]=st(o[s]),i.el=a.el),n||Ds(a,i))}}function Ql(e){const t=e.slice(),n=[0];let r,o,s,a,i;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(s=0,a=n.length-1;s<a;)i=s+a>>1,e[n[i]]<c?s=i+1:a=i;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Zl=e=>e.__isTeleport,Ns="components";function ec(e,t){return nc(Ns,e,!0,t)||e}const tc=Symbol();function nc(e,t,n=!0,r=!1){const o=Ie||_e;if(o){const s=o.type;if(e===Ns){const i=mc(s);if(i&&(i===t||i===Ve(t)||i===In(Ve(t))))return s}const a=Hs(o[e]||s[e],t)||Hs(o.appContext[e],t);return!a&&r?s:a}}function Hs(e,t){return e&&(e[t]||e[Ve(t)]||e[In(Ve(t))])}const Re=Symbol(void 0),un=Symbol(void 0),He=Symbol(void 0),dn=Symbol(void 0),fn=[];let _t=null;function wt(e=!1){fn.push(_t=e?null:[])}function rc(){fn.pop(),_t=fn[fn.length-1]||null}let Yn=1;function Fs(e){Yn+=e}function $s(e){return e.dynamicChildren=Yn>0?_t||Pt:null,rc(),Yn>0&&_t&&_t.push(e),e}function Gn(e,t,n,r,o,s){return $s(Nt(e,t,n,r,o,s,!0))}function Vr(e,t,n,r,o){return $s(ge(e,t,n,r,o,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Xn="__vInternal",zs=({key:e})=>e!=null?e:null,Qn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||Ee(e)||Z(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function Nt(e,t=null,n=null,r=0,o=null,s=e===Re?0:1,a=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zs(t),ref:t&&Qn(t),scopeId:Bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return i?(Gr(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),Yn>0&&!a&&_t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_t.push(l),l}const ge=oc;function oc(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===tc)&&(e=He),Jn(e)){const i=Ht(e,t,!0);return n&&Gr(i,n),i}if(gc(e)&&(e=e.__vccOpts),t){t=sc(t);let{class:i,style:l}=t;i&&!he(i)&&(t.class=ft(i)),ve(l)&&(rs(l)&&!G(l)&&(l=xe({},l)),t.style=Zt(l))}const a=he(e)?1:Cl(e)?128:Zl(e)?64:ve(e)?4:Z(e)?2:0;return Nt(e,t,n,r,o,a,s,!0)}function sc(e){return e?rs(e)||Xn in e?xe({},e):e:null}function Ht(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,i=t?ac(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&zs(i),ref:t&&t.ref?n&&o?G(o)?o.concat(Qn(t)):[o,Qn(t)]:Qn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor}}function Yr(e=" ",t=0){return ge(un,null,e,t)}function Th(e,t){const n=ge(dn,null,e);return n.staticCount=t,n}function kh(e="",t=!1){return t?(wt(),Vr(He,null,e)):ge(He,null,e)}function Ue(e){return e==null||typeof e=="boolean"?ge(He):G(e)?ge(Re,null,e.slice()):typeof e=="object"?st(e):ge(un,null,String(e))}function st(e){return e.el===null||e.memo?e:Ht(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(r&(1|64)){const o=t.default;o&&(o._c&&(o._d=!1),Gr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Xn in t)?t._ctx=Ie:o===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Yr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ac(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=ft([t.class,r.class]));else if(o==="style")t.style=Zt([t.style,r.style]);else if(en(o)){const s=t[o],a=r[o];s!==a&&!(G(s)&&s.includes(a))&&(t[o]=s?[].concat(s,a):a)}else o!==""&&(t[o]=r[o])}return t}function Fe(e,t,n,r=null){$e(e,t,7,[n,r])}function Rh(e,t,n,r){let o;const s=n&&n[r];if(G(e)||he(e)){o=new Array(e.length);for(let a=0,i=e.length;a<i;a++)o[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s&&s[a])}else if(ve(e))if(e[Symbol.iterator])o=Array.from(e,(a,i)=>t(a,i,void 0,s&&s[i]));else{const a=Object.keys(e);o=new Array(a.length);for(let i=0,l=a.length;i<l;i++){const c=a[i];o[i]=t(e[c],c,i,s&&s[i])}}else o=[];return n&&(n[r]=o),o}function Bs(e,t,n={},r,o){if(Ie.isCE)return ge("slot",t==="default"?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),wt();const a=s&&js(s(n)),i=Vr(Re,{key:n.key||`_${t}`},a||(r?r():[]),a&&e._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),s&&s._c&&(s._d=!0),i}function js(e){return e.some(t=>Jn(t)?!(t.type===He||t.type===Re&&!js(t.children)):!0)?e:null}const Jr=e=>e?Us(e)?Xr(e)||e.proxy:Jr(e.parent):null,Zn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$emit:e=>e.emit,$options:e=>xs(e),$forceUpdate:e=>()=>no(e.update),$nextTick:e=>to.bind(e.proxy),$watch:e=>xc.bind(e)}),ic={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:a,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const _=a[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(r!==ue&&re(r,t))return a[t]=1,r[t];if(o!==ue&&re(o,t))return a[t]=2,o[t];if((c=e.propsOptions[0])&&re(c,t))return a[t]=3,s[t];if(n!==ue&&re(n,t))return a[t]=4,n[t];jr&&(a[t]=0)}}const d=Zn[t];let m,f;if(d)return t==="$attrs"&&Le(e,"get",t),d(e);if((m=i.__cssModules)&&(m=m[t]))return m;if(n!==ue&&re(n,t))return a[t]=4,n[t];if(f=l.config.globalProperties,re(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;if(o!==ue&&re(o,t))o[t]=n;else if(r!==ue&&re(r,t))r[t]=n;else if(re(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let i;return!!n[a]||e!==ue&&re(e,a)||t!==ue&&re(t,a)||(i=s[0])&&re(i,a)||re(r,a)||re(Zn,a)||re(o.config.globalProperties,a)}},lc=Os();let cc=0;function uc(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||lc,s={uid:cc++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cs(r,o),emitsOptions:us(r,o),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=yl.bind(null,s),e.ce&&e.ce(s),s}let _e=null;const qs=()=>_e||Ie,Ft=e=>{_e=e,e.scope.on()},Et=()=>{_e&&_e.scope.off(),_e=null};function Us(e){return e.vnode.shapeFlag&4}let hn=!1;function dc(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,o=Us(e);jl(e,n,o,t),Kl(e,r);const s=o?fc(e,t):void 0;return hn=!1,s}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=os(new Proxy(e.ctx,ic));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?pc(e):null;Ft(e),Mt();const s=at(r,e,0,[e.props,o]);if(mt(),Et(),No(s)){if(s.then(Et,Et),t)return s.then(a=>{Ks(e,a,t)}).catch(a=>{pn(a,e,0)});e.asyncDep=s}else Ks(e,s,t)}else Vs(e,t)}function Ks(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=cs(t)),Vs(e,n)}let Ws;function Vs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ws&&!r.render){const o=r.template;if(o){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:l}=r,c=xe(xe({isCustomElement:s,delimiters:i},a),l);r.render=Ws(o,c)}}e.render=r.render||je}Ft(e),Mt(),Hl(e),mt(),Et()}function hc(e){return new Proxy(e.attrs,{get(t,n){return Le(e,"get","$attrs"),t[n]}})}function pc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=hc(e))},slots:e.slots,emit:e.emit,expose:t}}function Xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(cs(os(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zn)return Zn[n](e)}}))}function mc(e){return Z(e)&&e.displayName||e.name}function gc(e){return Z(e)&&"__vccOpts"in e}function at(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){pn(s,t,n)}return o}function $e(e,t,n,r){if(Z(e)){const s=at(e,t,n,r);return s&&No(s)&&s.catch(a=>{pn(a,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push($e(e[s],t,n,r));return o}function pn(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,i=n;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,a,i)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,a,i]);return}}vc(e,n,o,r)}function vc(e,t,n,r=!0){console.error(e)}let er=!1,Qr=!1;const Oe=[];let et=0;const mn=[];let gn=null,$t=0;const vn=[];let it=null,zt=0;const Ys=Promise.resolve();let Zr=null,eo=null;function to(e){const t=Zr||Ys;return e?t.then(this?e.bind(this):e):t}function yc(e){let t=et+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;yn(Oe[r])<e?t=r+1:n=r}return t}function no(e){(!Oe.length||!Oe.includes(e,er&&e.allowRecurse?et+1:et))&&e!==eo&&(e.id==null?Oe.push(e):Oe.splice(yc(e.id),0,e),Gs())}function Gs(){!er&&!Qr&&(Qr=!0,Zr=Ys.then(Xs))}function bc(e){const t=Oe.indexOf(e);t>et&&Oe.splice(t,1)}function Js(e,t,n,r){G(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Gs()}function _c(e){Js(e,gn,mn,$t)}function wc(e){Js(e,it,vn,zt)}function ro(e,t=null){if(mn.length){for(eo=t,gn=[...new Set(mn)],mn.length=0,$t=0;$t<gn.length;$t++)gn[$t]();gn=null,$t=0,eo=null,ro(e,t)}}function tr(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,it){it.push(...t);return}for(it=t,it.sort((n,r)=>yn(n)-yn(r)),zt=0;zt<it.length;zt++)it[zt]();it=null,zt=0}}const yn=e=>e.id==null?1/0:e.id;function Xs(e){Qr=!1,er=!0,ro(e),Oe.sort((n,r)=>yn(n)-yn(r));const t=je;try{for(et=0;et<Oe.length;et++){const n=Oe[et];n&&n.active!==!1&&at(n,null,14)}}finally{et=0,Oe.length=0,tr(),er=!1,Zr=null,(Oe.length||mn.length||vn.length)&&Xs(e)}}const Qs={};function Je(e,t,n){return Zs(e,t,n)}function Zs(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:a}=ue){const i=_e;let l,c=!1,d=!1;if(Ee(e)?(l=()=>e.value,c=!!e._shallow):Dt(e)?(l=()=>e,r=!0):G(e)?(d=!0,c=e.some(Dt),l=()=>e.map(v=>{if(Ee(v))return v.value;if(Dt(v))return St(v);if(Z(v))return at(v,i,2)})):Z(e)?t?l=()=>at(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),$e(e,i,3,[f])}:l=je,t&&r){const v=l;l=()=>St(v())}let m,f=v=>{m=g.onStop=()=>{at(v,i,4)}};if(hn)return f=je,t?n&&$e(t,i,3,[l(),d?[]:void 0,f]):l(),je;let _=d?[]:Qs;const h=()=>{if(!!g.active)if(t){const v=g.run();(r||c||(d?v.some((x,C)=>nn(x,_[C])):nn(v,_)))&&(m&&m(),$e(t,i,3,[v,_===Qs?void 0:_,f]),_=v)}else g.run()};h.allowRecurse=!!t;let b;o==="sync"?b=h:o==="post"?b=()=>ke(h,i&&i.suspense):b=()=>{!i||i.isMounted?_c(h):h()};const g=new Cr(l,b);return t?n?h():_=g.run():o==="post"?ke(g.run.bind(g),i&&i.suspense):g.run(),()=>{g.stop(),i&&i.scope&&gr(i.scope.effects,g)}}function xc(e,t,n){const r=this.proxy,o=he(e)?e.includes(".")?ea(r,e):()=>r[e]:e.bind(r,r);let s;Z(t)?s=t:(s=t.handler,n=t);const a=_e;Ft(this);const i=Zs(o,s.bind(r),n);return a?Ft(a):Et(),i}function ea(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function St(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))St(e.value,t);else if(G(e))for(let n=0;n<e.length;n++)St(e[n],t);else if(Do(e)||Lt(e))e.forEach(n=>{St(n,t)});else if(Fo(e))for(const n in e)St(e[n],t);return e}function le(e,t,n){const r=arguments.length;return r===2?ve(t)&&!G(t)?Jn(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jn(n)&&(n=[n]),ge(e,t,n))}const Ec="3.2.26",Sc="http://www.w3.org/2000/svg",Bt=typeof document!="undefined"?document:null,ta=new Map,Cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?Bt.createElementNS(Sc,e):Bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const o=n?n.previousSibling:t.lastChild;let s=ta.get(e);if(!s){const a=Bt.createElement("template");if(a.innerHTML=r?`<svg>${e}</svg>`:e,s=a.content,r){const i=s.firstChild;for(;i.firstChild;)s.appendChild(i.firstChild);s.removeChild(i)}ta.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Tc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function kc(e,t,n){const r=e.style,o=he(n);if(n&&!o){for(const s in n)oo(r,s,n[s]);if(t&&!he(t))for(const s in t)n[s]==null&&oo(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const na=/\s*!important$/;function oo(e,t,n){if(G(n))n.forEach(r=>oo(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Rc(e,t);na.test(n)?e.setProperty(It(r),n.replace(na,""),"important"):e[r]=n}}const ra=["Webkit","Moz","ms"],so={};function Rc(e,t){const n=so[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return so[t]=r;r=In(r);for(let o=0;o<ra.length;o++){const s=ra[o]+r;if(s in e)return so[t]=s}return t}const oa="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(oa,t.slice(6,t.length)):e.setAttributeNS(oa,t,n);else{const s=Si(t);n==null||s&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Pc(e,t,n,r,o,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,o,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n==null?"":n;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const i=typeof e[t];if(i==="boolean"){e[t]=Oo(n);return}else if(n==null&&i==="string"){e[t]="",e.removeAttribute(t);return}else if(i==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let nr=Date.now,sa=!1;if(typeof window!="undefined"){nr()>document.createEvent("Event").timeStamp&&(nr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);sa=!!(e&&Number(e[1])<=53)}let ao=0;const Lc=Promise.resolve(),Ic=()=>{ao=0},Oc=()=>ao||(Lc.then(Ic),ao=nr());function Mc(e,t,n,r){e.addEventListener(t,n,r)}function Dc(e,t,n,r){e.removeEventListener(t,n,r)}function Nc(e,t,n,r,o=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[i,l]=Hc(t);if(r){const c=s[t]=Fc(r,o);Mc(e,i,c,l)}else a&&(Dc(e,i,a,l),s[t]=void 0)}}const aa=/(?:Once|Passive|Capture)$/;function Hc(e){let t;if(aa.test(e)){t={};let n;for(;n=e.match(aa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[It(e.slice(2)),t]}function Fc(e,t){const n=r=>{const o=r.timeStamp||nr();(sa||o>=n.attached-1)&&$e($c(r,n.value),t,5,[r])};return n.value=e,n.attached=Oc(),n}function $c(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r(o))}else return t}const ia=/^on[a-z]/,zc=(e,t,n,r,o=!1,s,a,i,l)=>{t==="class"?Tc(e,r,o):t==="style"?kc(e,n,r):en(t)?mr(t)||Nc(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bc(e,t,r,o))?Pc(e,t,r,s,a,i,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,o))};function Bc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ia.test(t)&&Z(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ia.test(t)&&he(n)?!1:t in e}const lt="transition",bn="animation",io=(e,{slots:t})=>le(ps,jc(e),t);io.displayName="Transition";const la={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};io.props=xe({},ps.props,la);const Ct=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},ca=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function jc(e){const t={};for(const w in e)w in la||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:d=i,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,h=qc(o),b=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:C,onLeave:A,onLeaveCancelled:H,onBeforeAppear:$=v,onAppear:T=x,onAppearCancelled:E=C}=t,V=(w,D,W)=>{jt(w,D?d:i),jt(w,D?c:a),W&&W()},q=(w,D)=>{jt(w,_),jt(w,f),D&&D()},Y=w=>(D,W)=>{const se=w?T:x,j=()=>V(D,w,W);Ct(se,[D,j]),ua(()=>{jt(D,w?l:s),ct(D,w?d:i),ca(se)||da(D,r,b,j)})};return xe(t,{onBeforeEnter(w){Ct(v,[w]),ct(w,s),ct(w,a)},onBeforeAppear(w){Ct($,[w]),ct(w,l),ct(w,c)},onEnter:Y(!1),onAppear:Y(!0),onLeave(w,D){const W=()=>q(w,D);ct(w,m),Wc(),ct(w,f),ua(()=>{jt(w,m),ct(w,_),ca(A)||da(w,r,g,W)}),Ct(A,[w,W])},onEnterCancelled(w){V(w,!1),Ct(C,[w])},onAppearCancelled(w){V(w,!0),Ct(E,[w])},onLeaveCancelled(w){q(w),Ct(H,[w])}})}function qc(e){if(e==null)return null;if(ve(e))return[lo(e.enter),lo(e.leave)];{const t=lo(e);return[t,t]}}function lo(e){return $o(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ua(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uc=0;function da(e,t,n,r){const o=e._endId=++Uc,s=()=>{o===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:i,propCount:l}=Kc(e,t);if(!a)return r();const c=a+"end";let d=0;const m=()=>{e.removeEventListener(c,f),s()},f=_=>{_.target===e&&++d>=l&&m()};setTimeout(()=>{d<l&&m()},i+1),e.addEventListener(c,f)}function Kc(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),o=r(lt+"Delay"),s=r(lt+"Duration"),a=fa(o,s),i=r(bn+"Delay"),l=r(bn+"Duration"),c=fa(i,l);let d=null,m=0,f=0;t===lt?a>0&&(d=lt,m=a,f=s.length):t===bn?c>0&&(d=bn,m=c,f=l.length):(m=Math.max(a,c),d=m>0?a>c?lt:bn:null,f=d?d===lt?s.length:l.length:0);const _=d===lt&&/\b(transform|all)(,|$)/.test(n[lt+"Property"]);return{type:d,timeout:m,propCount:f,hasTransform:_}}function fa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ha(n)+ha(e[r])))}function ha(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Wc(){return document.body.offsetHeight}const Ah={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):_n(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),_n(e,!0),r.enter(e)):r.leave(e,()=>{_n(e,!1)}):_n(e,t))},beforeUnmount(e,{value:t}){_n(e,t)}};function _n(e,t){e.style.display=t?e._vod:"none"}const pa=xe({patchProp:zc},Cc);let wn,ma=!1;function Vc(){return wn||(wn=Jl(pa))}function Yc(){return wn=ma?wn:Xl(pa),ma=!0,wn}const Gc=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=ga(r);if(!o)return;const s=t._component;!Z(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t},Jc=(...e)=>{const t=Yc().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=ga(r);if(o)return n(o,!0,o instanceof SVGElement)},t};function ga(e){return he(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const va=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",qt=e=>va?Symbol(e):"_vr_"+e,Xc=qt("rvlm"),ya=qt("rvd"),rr=qt("r"),co=qt("rl"),uo=qt("rvl"),Ut=typeof window!="undefined";function Qc(e){return e.__esModule||va&&e[Symbol.toStringTag]==="Module"}const de=Object.assign;function fo(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const xn=()=>{},Zc=/\/$/,eu=e=>e.replace(Zc,"");function ho(e,t,n="/"){let r,o={},s="",a="";const i=t.indexOf("?"),l=t.indexOf("#",i>-1?i:0);return i>-1&&(r=t.slice(0,i),s=t.slice(i+1,l>-1?l:t.length),o=e(s)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=ou(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:o,hash:a}}function tu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ba(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nu(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Kt(t.matched[r],n.matched[o])&&_a(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _a(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ru(e[n],t[n]))return!1;return!0}function ru(e,t){return Array.isArray(e)?wa(e,t):Array.isArray(t)?wa(t,e):e===t}function wa(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ou(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],!(o===1||a==="."))if(a==="..")o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var Sn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Sn||(Sn={}));function su(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),eu(e)}const au=/^[^#]+#/;function iu(e,t){return e.replace(au,"#")+t}function lu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function cu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=lu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xa(e,t){return(history.state?history.state.position-t:-1)+e}const po=new Map;function uu(e,t){po.set(e,t)}function du(e){const t=po.get(e);return po.delete(e),t}let fu=()=>location.protocol+"//"+location.host;function Ea(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let i=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(i);return l[0]!=="/"&&(l="/"+l),ba(l,"")}return ba(n,e)+r+o}function hu(e,t,n,r){let o=[],s=[],a=null;const i=({state:f})=>{const _=Ea(e,location),h=n.value,b=t.value;let g=0;if(f){if(n.value=_,t.value=f,a&&a===h){a=null;return}g=b?f.position-b.position:0}else r(_);o.forEach(v=>{v(n.value,h,{delta:g,type:En.pop,direction:g?g>0?Sn.forward:Sn.back:Sn.unknown})})};function l(){a=n.value}function c(f){o.push(f);const _=()=>{const h=o.indexOf(f);h>-1&&o.splice(h,1)};return s.push(_),_}function d(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:or()}),"")}function m(){for(const f of s)f();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:m}}function Sa(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?or():null}}function pu(e){const{history:t,location:n}=window,r={value:Ea(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const m=e.indexOf("#"),f=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:fu()+e+l;try{t[d?"replaceState":"pushState"](c,"",f),o.value=c}catch(_){console.error(_),n[d?"replace":"assign"](f)}}function a(l,c){const d=de({},t.state,Sa(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});s(l,d,!0),r.value=l}function i(l,c){const d=de({},o.value,t.state,{forward:l,scroll:or()});s(d.current,d,!0);const m=de({},Sa(r.value,l,null),{position:d.position+1},c);s(l,m,!1),r.value=l}return{location:r,state:o,push:i,replace:a}}function mu(e){e=su(e);const t=pu(e),n=hu(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const o=de({location:"",base:e,go:r,createHref:iu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function gu(e){return typeof e=="string"||e&&typeof e=="object"}function Ca(e){return typeof e=="string"||typeof e=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ta=qt("nf");var ka;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ka||(ka={}));function Wt(e,t){return de(new Error,{type:e,[Ta]:!0},t)}function Tt(e,t){return e instanceof Error&&Ta in e&&(t==null||!!(e.type&t))}const Ra="[^/]+?",vu={sensitive:!1,strict:!1,start:!0,end:!0},yu=/[.+*?^${}()[\]/\\]/g;function bu(e,t){const n=de({},vu,t),r=[];let o=n.start?"^":"";const s=[];for(const c of e){const d=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let m=0;m<c.length;m++){const f=c[m];let _=40+(n.sensitive?.25:0);if(f.type===0)m||(o+="/"),o+=f.value.replace(yu,"\\$&"),_+=40;else if(f.type===1){const{value:h,repeatable:b,optional:g,regexp:v}=f;s.push({name:h,repeatable:b,optional:g});const x=v||Ra;if(x!==Ra){_+=10;try{new RegExp(`(${x})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+A.message)}}let C=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(C=g&&c.length<2?`(?:/${C})`:"/"+C),g&&(C+="?"),o+=C,_+=20,g&&(_+=-8),b&&(_+=-20),x===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function i(c){const d=c.match(a),m={};if(!d)return null;for(let f=1;f<d.length;f++){const _=d[f]||"",h=s[f-1];m[h.name]=_&&h.repeatable?_.split("/"):_}return m}function l(c){let d="",m=!1;for(const f of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const _ of f)if(_.type===0)d+=_.value;else if(_.type===1){const{value:h,repeatable:b,optional:g}=_,v=h in c?c[h]:"";if(Array.isArray(v)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(v)?v.join("/"):v;if(!x)if(g)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${h}"`);d+=x}}return d}return{re:a,score:r,keys:s,parse:i,stringify:l}}function _u(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function wu(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=_u(r[n],o[n]);if(s)return s;n++}return o.length-r.length}const xu={type:0,value:""},Eu=/[a-zA-Z0-9_]/;function Su(e){if(!e)return[[]];if(e==="/")return[[xu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,r=n;const o=[];let s;function a(){s&&o.push(s),s=[]}let i=0,l,c="",d="";function m(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&m(),a()):l===":"?(m(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Eu.test(l)?f():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),m(),a(),o}function Cu(e,t,n){const r=bu(Su(e.path),n),o=de(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Tu(e,t){const n=[],r=new Map;t=Pa({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function s(d,m,f){const _=!f,h=Ru(d);h.aliasOf=f&&f.record;const b=Pa(t,d),g=[h];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of C)g.push(de({},h,{components:f?f.record.components:h.components,path:A,aliasOf:f?f.record:h}))}let v,x;for(const C of g){const{path:A}=C;if(m&&A[0]!=="/"){const H=m.record.path,$=H[H.length-1]==="/"?"":"/";C.path=m.record.path+(A&&$+A)}if(v=Cu(C,m,b),f?f.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),_&&d.name&&!Aa(v)&&a(d.name)),"children"in h){const H=h.children;for(let $=0;$<H.length;$++)s(H[$],v,f&&f.children[$])}f=f||v,l(v)}return x?()=>{a(x)}:xn}function a(d){if(Ca(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return n}function l(d){let m=0;for(;m<n.length&&wu(d,n[m])>=0;)m++;n.splice(m,0,d),d.record.name&&!Aa(d)&&r.set(d.record.name,d)}function c(d,m){let f,_={},h,b;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw Wt(1,{location:d});b=f.record.name,_=de(ku(m.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),d.params),h=f.stringify(_)}else if("path"in d)h=d.path,f=n.find(x=>x.re.test(h)),f&&(_=f.parse(h),b=f.record.name);else{if(f=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!f)throw Wt(1,{location:d,currentLocation:m});b=f.record.name,_=de({},m.params,d.params),h=f.stringify(_)}const g=[];let v=f;for(;v;)g.unshift(v.record),v=v.parent;return{name:b,path:h,params:_,matched:g,meta:Pu(g)}}return e.forEach(d=>s(d)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:i,getRecordMatcher:o}}function ku(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ru(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Au(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Au(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Aa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pu(e){return e.reduce((t,n)=>de(t,n.meta),{})}function Pa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const La=/#/g,Lu=/&/g,Iu=/\//g,Ou=/=/g,Mu=/\?/g,Ia=/\+/g,Du=/%5B/g,Nu=/%5D/g,Oa=/%5E/g,Hu=/%60/g,Ma=/%7B/g,Fu=/%7C/g,Da=/%7D/g,$u=/%20/g;function mo(e){return encodeURI(""+e).replace(Fu,"|").replace(Du,"[").replace(Nu,"]")}function zu(e){return mo(e).replace(Ma,"{").replace(Da,"}").replace(Oa,"^")}function go(e){return mo(e).replace(Ia,"%2B").replace($u,"+").replace(La,"%23").replace(Lu,"%26").replace(Hu,"`").replace(Ma,"{").replace(Da,"}").replace(Oa,"^")}function Bu(e){return go(e).replace(Ou,"%3D")}function ju(e){return mo(e).replace(La,"%23").replace(Mu,"%3F")}function qu(e){return e==null?"":ju(e).replace(Iu,"%2F")}function sr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Uu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Ia," "),a=s.indexOf("="),i=sr(a<0?s:s.slice(0,a)),l=a<0?null:sr(s.slice(a+1));if(i in t){let c=t[i];Array.isArray(c)||(c=t[i]=[c]),c.push(l)}else t[i]=l}return t}function Na(e){let t="";for(let n in e){const r=e[n];if(n=Bu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&go(s)):[r&&go(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ku(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}function Cn(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ut(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,i)=>{const l=m=>{m===!1?i(Wt(4,{from:n,to:t})):m instanceof Error?i(m):gu(m)?i(Wt(2,{from:t,to:m})):(s&&r.enterCallbacks[o]===s&&typeof m=="function"&&s.push(m),a())},c=e.call(r&&r.instances[o],t,n,l);let d=Promise.resolve(c);e.length<3&&(d=d.then(l)),d.catch(m=>i(m))})}function vo(e,t,n,r){const o=[];for(const s of e)for(const a in s.components){let i=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(Wu(i)){const c=(i.__vccOpts||i)[t];c&&o.push(ut(c,n,r,s,a))}else{let l=i();o.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const d=Qc(c)?c.default:c;s.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&ut(f,n,r,s,a)()}))}}return o}function Wu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ha(e){const t=we(rr),n=we(co),r=pe(()=>t.resolve(Qe(e.to))),o=pe(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],m=n.matched;if(!d||!m.length)return-1;const f=m.findIndex(Kt.bind(null,d));if(f>-1)return f;const _=Fa(l[c-2]);return c>1&&Fa(d)===_&&m[m.length-1].path!==_?m.findIndex(Kt.bind(null,l[c-2])):f}),s=pe(()=>o.value>-1&&Ju(n.params,r.value.params)),a=pe(()=>o.value>-1&&o.value===n.matched.length-1&&_a(n.params,r.value.params));function i(l={}){return Gu(l)?t[Qe(e.replace)?"replace":"push"](Qe(e.to)).catch(xn):Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:s,isExactActive:a,navigate:i}}const Vu=Ne({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ha,setup(e,{slots:t}){const n=sn(Ha(e)),{options:r}=we(rr),o=pe(()=>({[$a(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$a(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:le("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Yu=Vu;function Gu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ju(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((s,a)=>s!==o[a]))return!1}return!0}function Fa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $a=(e,t,n)=>e!=null?e:t!=null?t:n,Xu=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=we(uo),o=pe(()=>e.route||r.value),s=we(ya,0),a=pe(()=>o.value.matched[s]);gt(ya,s+1),gt(Xc,a),gt(uo,o);const i=ye();return Je(()=>[i.value,a.value,e.name],([l,c,d],[m,f,_])=>{c&&(c.instances[d]=l,f&&f!==c&&l&&l===m&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Kt(c,f)||!m)&&(c.enterCallbacks[d]||[]).forEach(h=>h(l))},{flush:"post"}),()=>{const l=o.value,c=a.value,d=c&&c.components[e.name],m=e.name;if(!d)return za(n.default,{Component:d,route:l});const f=c.props[e.name],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,b=le(d,de({},_,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(c.instances[m]=null)},ref:i}));return za(n.default,{Component:b,route:l})||b}}});function za(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ba=Xu;function Qu(e){const t=Tu(e.routes,e),n=e.parseQuery||Uu,r=e.stringifyQuery||Na,o=e.history,s=Cn(),a=Cn(),i=Cn(),l=is(tt);let c=tt;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=fo.bind(null,S=>""+S),m=fo.bind(null,qu),f=fo.bind(null,sr);function _(S,F){let O,z;return Ca(S)?(O=t.getRecordMatcher(S),z=F):z=S,t.addRoute(z,O)}function h(S){const F=t.getRecordMatcher(S);F&&t.removeRoute(F)}function b(){return t.getRoutes().map(S=>S.record)}function g(S){return!!t.getRecordMatcher(S)}function v(S,F){if(F=de({},F||l.value),typeof S=="string"){const X=ho(n,S,F.path),u=t.resolve({path:X.path},F),p=o.createHref(X.fullPath);return de(X,u,{params:f(u.params),hash:sr(X.hash),redirectedFrom:void 0,href:p})}let O;if("path"in S)O=de({},S,{path:ho(n,S.path,F.path).path});else{const X=de({},S.params);for(const u in X)X[u]==null&&delete X[u];O=de({},S,{params:m(S.params)}),F.params=m(F.params)}const z=t.resolve(O,F),ae=S.hash||"";z.params=d(f(z.params));const ie=tu(r,de({},S,{hash:zu(ae),path:z.path})),ee=o.createHref(ie);return de({fullPath:ie,hash:ae,query:r===Na?Ku(S.query):S.query||{}},z,{redirectedFrom:void 0,href:ee})}function x(S){return typeof S=="string"?ho(n,S,l.value.path):de({},S)}function C(S,F){if(c!==S)return Wt(8,{from:F,to:S})}function A(S){return T(S)}function H(S){return A(de(x(S),{replace:!0}))}function $(S){const F=S.matched[S.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let z=typeof O=="function"?O(S):O;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=x(z):{path:z},z.params={}),de({query:S.query,hash:S.hash,params:S.params},z)}}function T(S,F){const O=c=v(S),z=l.value,ae=S.state,ie=S.force,ee=S.replace===!0,X=$(O);if(X)return T(de(x(X),{state:ae,force:ie,replace:ee}),F||O);const u=O;u.redirectedFrom=F;let p;return!ie&&nu(r,z,O)&&(p=Wt(16,{to:u,from:z}),Se(z,z,!0,!1)),(p?Promise.resolve(p):V(u,z)).catch(y=>Tt(y)?y:Q(y,u,z)).then(y=>{if(y){if(Tt(y,2))return T(de(x(y.to),{state:ae,force:ie,replace:ee}),F||u)}else y=Y(u,z,!0,ee,ae);return q(u,z,y),y})}function E(S,F){const O=C(S,F);return O?Promise.reject(O):Promise.resolve()}function V(S,F){let O;const[z,ae,ie]=Zu(S,F);O=vo(z.reverse(),"beforeRouteLeave",S,F);for(const X of z)X.leaveGuards.forEach(u=>{O.push(ut(u,S,F))});const ee=E.bind(null,S,F);return O.push(ee),Vt(O).then(()=>{O=[];for(const X of s.list())O.push(ut(X,S,F));return O.push(ee),Vt(O)}).then(()=>{O=vo(ae,"beforeRouteUpdate",S,F);for(const X of ae)X.updateGuards.forEach(u=>{O.push(ut(u,S,F))});return O.push(ee),Vt(O)}).then(()=>{O=[];for(const X of S.matched)if(X.beforeEnter&&!F.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const u of X.beforeEnter)O.push(ut(u,S,F));else O.push(ut(X.beforeEnter,S,F));return O.push(ee),Vt(O)}).then(()=>(S.matched.forEach(X=>X.enterCallbacks={}),O=vo(ie,"beforeRouteEnter",S,F),O.push(ee),Vt(O))).then(()=>{O=[];for(const X of a.list())O.push(ut(X,S,F));return O.push(ee),Vt(O)}).catch(X=>Tt(X,8)?X:Promise.reject(X))}function q(S,F,O){for(const z of i.list())z(S,F,O)}function Y(S,F,O,z,ae){const ie=C(S,F);if(ie)return ie;const ee=F===tt,X=Ut?history.state:{};O&&(z||ee?o.replace(S.fullPath,de({scroll:ee&&X&&X.scroll},ae)):o.push(S.fullPath,ae)),l.value=S,Se(S,F,O,ee),be()}let w;function D(){w=o.listen((S,F,O)=>{const z=v(S),ae=$(z);if(ae){T(de(ae,{replace:!0}),z).catch(xn);return}c=z;const ie=l.value;Ut&&uu(xa(ie.fullPath,O.delta),or()),V(z,ie).catch(ee=>Tt(ee,4|8)?ee:Tt(ee,2)?(T(ee.to,z).then(X=>{Tt(X,4|16)&&!O.delta&&O.type===En.pop&&o.go(-1,!1)}).catch(xn),Promise.reject()):(O.delta&&o.go(-O.delta,!1),Q(ee,z,ie))).then(ee=>{ee=ee||Y(z,ie,!1),ee&&(O.delta?o.go(-O.delta,!1):O.type===En.pop&&Tt(ee,4|16)&&o.go(-1,!1)),q(z,ie,ee)}).catch(xn)})}let W=Cn(),se=Cn(),j;function Q(S,F,O){be(S);const z=se.list();return z.length?z.forEach(ae=>ae(S,F,O)):console.error(S),Promise.reject(S)}function te(){return j&&l.value!==tt?Promise.resolve():new Promise((S,F)=>{W.add([S,F])})}function be(S){j||(j=!0,D(),W.list().forEach(([F,O])=>S?O(S):F()),W.reset())}function Se(S,F,O,z){const{scrollBehavior:ae}=e;if(!Ut||!ae)return Promise.resolve();const ie=!O&&du(xa(S.fullPath,0))||(z||!O)&&history.state&&history.state.scroll||null;return to().then(()=>ae(S,F,ie)).then(ee=>ee&&cu(ee)).catch(ee=>Q(ee,S,F))}const Ae=S=>o.go(S);let Me;const Te=new Set;return{currentRoute:l,addRoute:_,removeRoute:h,hasRoute:g,getRoutes:b,resolve:v,options:e,push:A,replace:H,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:s.add,beforeResolve:a.add,afterEach:i.add,onError:se.add,isReady:te,install(S){const F=this;S.component("RouterLink",Yu),S.component("RouterView",Ba),S.config.globalProperties.$router=F,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),Ut&&!Me&&l.value===tt&&(Me=!0,A(o.location).catch(ae=>{}));const O={};for(const ae in tt)O[ae]=pe(()=>l.value[ae]);S.provide(rr,F),S.provide(co,sn(O)),S.provide(uo,l);const z=S.unmount;Te.add(S),S.unmount=function(){Te.delete(S),Te.size<1&&(c=tt,w&&w(),l.value=tt,Me=!1,j=!1),z()}}}}function Vt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Zu(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const i=t.matched[a];i&&(e.matched.find(c=>Kt(c,i))?r.push(i):n.push(i));const l=e.matched[a];l&&(t.matched.find(c=>Kt(c,l))||o.push(l))}return[n,r,o]}function ar(){return we(rr)}function yo(){return we(co)}const ed=Ne({setup(e,t){const n=ye(!1);return qe(()=>{n.value=!0}),()=>{var r,o;return n.value?(o=(r=t.slots).default)===null||o===void 0?void 0:o.call(r):null}}}),td="modulepreload",ja={},nd="/",ze=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${nd}${r}`,r in ja)return;ja[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":td,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((i,l)=>{a.addEventListener("load",i),a.addEventListener("error",l)})})).then(()=>t())},qa={"v-8daa1a0e":vt(()=>ze(()=>import("./index.html.d0b7189b.js"),[])),"v-77f0ef68":vt(()=>ze(()=>import("./index.html.81949845.js"),[])),"v-1c385113":vt(()=>ze(()=>import("./index.html.3815e686.js"),[])),"v-37b893e5":vt(()=>ze(()=>import("./index.html.9e595774.js"),[])),"v-3706649a":vt(()=>ze(()=>import("./404.html.9b5b4965.js"),[]))},rd={"v-8daa1a0e":()=>ze(()=>import("./index.html.b15cccfc.js"),[]).then(({data:e})=>e),"v-77f0ef68":()=>ze(()=>import("./index.html.2da4dde2.js"),[]).then(({data:e})=>e),"v-1c385113":()=>ze(()=>import("./index.html.9c239bd7.js"),[]).then(({data:e})=>e),"v-37b893e5":()=>ze(()=>import("./index.html.00130a0f.js"),[]).then(({data:e})=>e),"v-3706649a":()=>ze(()=>import("./404.html.beaa804c.js"),[]).then(({data:e})=>e)},Ua=ye(rd),bo=Lr({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),dt=ye(bo),Yt=()=>dt,od=async e=>{const t=Ua.value[e];if(!t)return bo;const n=await t();return n!=null?n:bo};fr.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=e=>{Ua.value[e.key]=()=>Promise.resolve(e),e.key===dt.value.key&&(dt.value=e)});const Ka=Symbol(""),sd=()=>{const e=we(Ka);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},ad=e=>e.frontmatter,id=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),ld=e=>{const t=new Set,n=[];return e.forEach(r=>{const o=id(r);t.has(o)||(t.add(o),n.push(r))}),n},cd=e=>/^(https?:)?\/\//.test(e),Ph=e=>/^mailto:/.test(e),Lh=e=>/^tel:/.test(e),Wa=e=>Object.prototype.toString.call(e)==="[object Object]",ud=e=>e.replace(/\/$/,""),dd=e=>e.replace(/^\//,""),Va=(e,t)=>{const n=Object.keys(e).sort((r,o)=>{const s=o.split("/").length-r.split("/").length;return s!==0?s:o.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"},Ya=Symbol(""),fd=()=>{const e=we(Ya);if(!e)throw new Error("usePageHead() is called without provider.");return e},hd=(e,t,n)=>{const r=he(t.description)?t.description:n.description,o=[...G(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return ld(o)},pd=Symbol(""),md=(e,t)=>`${e.title?`${e.title} | `:""}${t.title}`,Ga=Symbol(""),gd=()=>{const e=we(Ga);if(!e)throw new Error("usePageLang() is called without provider.");return e},vd=e=>e.lang||"en",_o=Symbol(""),yd=()=>{const e=we(_o);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},bd=(e,t)=>Va(e,t),_d={base:"/",lang:"en-US",title:"Stata2R",description:"",head:[["link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Code+Pro"}]],locales:{}},kt=ye(_d),wd=()=>kt;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=e=>{kt.value=e});const Ja=Symbol(""),Ih=()=>{const e=we(Ja);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},xd=(e,t)=>We(We({},e),e.locales[t]),Ed=Symbol(""),Sd=()=>{const e=yo(),t=fd(),n=gd(),r=ye([]),o=()=>{t.value.forEach(a=>{const i=Cd(a);i&&r.value.push(i)})},s=()=>{document.documentElement.lang=n.value,r.value.forEach(a=>{a.parentNode===document.head&&document.head.removeChild(a)}),r.value.splice(0,r.value.length),t.value.forEach(a=>{const i=Td(a);i!==null&&(document.head.appendChild(i),r.value.push(i))})};gt(Ed,s),qe(()=>{o(),s(),Je(()=>e.path,()=>s())})},Cd=([e,t,n=""])=>{const r=Object.entries(t).map(([i,l])=>he(l)?`[${i}="${l}"]`:l===!0?`[${i}]`:"").join(""),o=`head > ${e}${r}`;return Array.from(document.querySelectorAll(o)).find(i=>i.innerText===n)||null},Td=([e,t,n])=>{if(!he(e))return null;const r=document.createElement(e);return Wa(t)&&Object.entries(t).forEach(([o,s])=>{he(s)?r.setAttribute(o,s):s===!0&&r.setAttribute(o,"")}),he(n)&&r.appendChild(document.createTextNode(n)),r},wo=e=>{let t;e.pageKey?t=e.pageKey:t=Yt().value.key;const n=qa[t];return n?le(n):le("div","404 Not Found")};wo.displayName="Content";wo.props={pageKey:{type:String,required:!1}};const kd={"404":vt(()=>ze(()=>import("./404.26566666.js"),[])),Layout:vt(()=>ze(()=>import("./Layout.a3035300.js"),[]))},Xa=Ne({name:"Vuepress",setup(){const e=Yt(),t=pe(()=>{let n;if(e.value.path){const r=e.value.frontmatter.layout;he(r)?n=r:n="Layout"}else n="404";return kd[n]||ec(n,!1)});return()=>le(t.value)}}),Gt=e=>e,ir=e=>e,Rd=e=>cd(e)?e:`${wd().value.base}${dd(e)}`;const Ad=le("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[le("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),le("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),xo=(e,{slots:t})=>{var n;return le("span",[Ad,(n=t.default)===null||n===void 0?void 0:n.call(t)])};xo.displayName="ExternalLinkIcon";var Pd=Gt(({app:e})=>{e.component("ExternalLinkIcon",xo)});/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */var Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr=function(t){return t.tagName==="IMG"},Ld=function(t){return NodeList.prototype.isPrototypeOf(t)},cr=function(t){return t&&t.nodeType===1},Qa=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Za=function(t){try{return Array.isArray(t)?t.filter(lr):Ld(t)?[].slice.call(t).filter(lr):cr(t)?[t].filter(lr):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(lr):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Id=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Od=function(t){var n=t.getBoundingClientRect(),r=n.top,o=n.left,s=n.width,a=n.height,i=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=r+l+"px",i.style.left=o+c+"px",i.style.width=s+"px",i.style.height=a+"px",i.style.transform="",i},Jt=function(t,n){var r=Rt({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,r);var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),o},Md=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(w){function D(){}w(D,D)},o=function(w){var D=w.target;if(D===V){h();return}C.indexOf(D)!==-1&&b({target:D})},s=function(){if(!(H||!E.original)){var w=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs($-w)>T.scrollOffset&&setTimeout(h,150)}},a=function(w){var D=w.key||w.keyCode;(D==="Escape"||D==="Esc"||D===27)&&h()},i=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=w;if(w.background&&(V.style.background=w.background),w.container&&w.container instanceof Object&&(D.container=Rt({},T.container,w.container)),w.template){var W=cr(w.template)?w.template:document.querySelector(w.template);D.template=W}return T=Rt({},T,D),C.forEach(function(se){se.dispatchEvent(Jt("medium-zoom:update",{detail:{zoom:q}}))}),q},l=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(Rt({},T,w))},c=function(){for(var w=arguments.length,D=Array(w),W=0;W<w;W++)D[W]=arguments[W];var se=D.reduce(function(j,Q){return[].concat(j,Za(Q))},[]);return se.filter(function(j){return C.indexOf(j)===-1}).forEach(function(j){C.push(j),j.classList.add("medium-zoom-image")}),A.forEach(function(j){var Q=j.type,te=j.listener,be=j.options;se.forEach(function(Se){Se.addEventListener(Q,te,be)})}),q},d=function(){for(var w=arguments.length,D=Array(w),W=0;W<w;W++)D[W]=arguments[W];E.zoomed&&h();var se=D.length>0?D.reduce(function(j,Q){return[].concat(j,Za(Q))},[]):C;return se.forEach(function(j){j.classList.remove("medium-zoom-image"),j.dispatchEvent(Jt("medium-zoom:detach",{detail:{zoom:q}}))}),C=C.filter(function(j){return se.indexOf(j)===-1}),q},m=function(w,D){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C.forEach(function(se){se.addEventListener("medium-zoom:"+w,D,W)}),A.push({type:"medium-zoom:"+w,listener:D,options:W}),q},f=function(w,D){var W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C.forEach(function(se){se.removeEventListener("medium-zoom:"+w,D,W)}),A=A.filter(function(se){return!(se.type==="medium-zoom:"+w&&se.listener.toString()===D.toString())}),q},_=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=w.target,W=function(){var j={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},Q=void 0,te=void 0;if(T.container)if(T.container instanceof Object)j=Rt({},j,T.container),Q=j.width-j.left-j.right-T.margin*2,te=j.height-j.top-j.bottom-T.margin*2;else{var be=cr(T.container)?T.container:document.querySelector(T.container),Se=be.getBoundingClientRect(),Ae=Se.width,Me=Se.height,Te=Se.left,Xt=Se.top;j=Rt({},j,{width:Ae,height:Me,left:Te,top:Xt})}Q=Q||j.width-T.margin*2,te=te||j.height-T.margin*2;var S=E.zoomedHd||E.original,F=Qa(S)?Q:S.naturalWidth||Q,O=Qa(S)?te:S.naturalHeight||te,z=S.getBoundingClientRect(),ae=z.top,ie=z.left,ee=z.width,X=z.height,u=Math.min(F,Q)/ee,p=Math.min(O,te)/X,y=Math.min(u,p),R=(-ie+(Q-ee)/2+T.margin+j.left)/y,k=(-ae+(te-X)/2+T.margin+j.top)/y,L="scale("+y+") translate3d("+R+"px, "+k+"px, 0)";E.zoomed.style.transform=L,E.zoomedHd&&(E.zoomedHd.style.transform=L)};return new r(function(se){if(D&&C.indexOf(D)===-1){se(q);return}var j=function Ae(){H=!1,E.zoomed.removeEventListener("transitionend",Ae),E.original.dispatchEvent(Jt("medium-zoom:opened",{detail:{zoom:q}})),se(q)};if(E.zoomed){se(q);return}if(D)E.original=D;else if(C.length>0){var Q=C;E.original=Q[0]}else{se(q);return}if(E.original.dispatchEvent(Jt("medium-zoom:open",{detail:{zoom:q}})),$=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,E.zoomed=Od(E.original),document.body.appendChild(V),T.template){var te=cr(T.template)?T.template:document.querySelector(T.template);E.template=document.createElement("div"),E.template.appendChild(te.content.cloneNode(!0)),document.body.appendChild(E.template)}if(document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",h),E.zoomed.addEventListener("transitionend",j),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(be),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,W()};var be=setInterval(function(){E.zoomedHd.complete&&(clearInterval(be),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),W())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading");var Se=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",Se),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),W()})}else W()})},h=function(){return new r(function(w){if(H||!E.original){w(q);return}var D=function W(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(V),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),H=!1,E.zoomed.removeEventListener("transitionend",W),E.original.dispatchEvent(Jt("medium-zoom:closed",{detail:{zoom:q}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,w(q)};H=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(Jt("medium-zoom:close",{detail:{zoom:q}})),E.zoomed.addEventListener("transitionend",D)})},b=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=w.target;return E.original?h():_({target:D})},g=function(){return T},v=function(){return C},x=function(){return E.original},C=[],A=[],H=!1,$=0,T=n,E={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?T=t:(t||typeof t=="string")&&c(t),T=Rt({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},T);var V=Id(T.background);document.addEventListener("click",o),document.addEventListener("keyup",a),document.addEventListener("scroll",s),window.addEventListener("resize",h);var q={open:_,close:h,toggle:b,update:i,clone:l,attach:c,detach:d,on:m,off:f,getOptions:g,getImages:v,getZoomedImage:x};return q};function Dd(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Nd=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Dd(Nd);var Hd=Md;const Fd=Symbol("mediumZoom");const $d=".theme-default-content > img, .theme-default-content :not(a) > img",zd={},Bd=400;var jd=Gt(({app:e,router:t})=>{const n=Hd(zd);n.refresh=(r=$d)=>{n.detach(),n.attach(r)},e.provide(Fd,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),Bd)})});const qd={repo:"stata2r/stata2r.github.io",docsRepo:"https://github.com/stata2r/stata2r.github.io",docsBranch:"main",docsDir:"docs",editLinkPattern:":repo/edit/:branch/:path",editLinks:!0,search:!0,sidebarDepth:1,sidebar:[{text:"data.table",link:"/data.table/"},{text:"fixest",link:"/fixest/"},{text:"extras",link:"/extras/"}],locales:{"/":{selectLanguageName:"English"}},navbar:[],logo:null,darkMode:!0,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributors:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"},ei=ye(qd),Ud=()=>ei;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=e=>{ei.value=e});const ti=Symbol(""),Kd=()=>{const e=we(ti);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Wd=(e,t)=>{var n;return We(We({},e),(n=e.locales)===null||n===void 0?void 0:n[t])};var Vd=Gt(({app:e})=>{const t=Ud(),n=e._context.provides[_o],r=pe(()=>Wd(t.value,n.value));e.provide(ti,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})});const Yd=Ne({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup(e){return(t,n)=>(wt(),Gn("span",{class:ft(["badge",e.type]),style:Zt({verticalAlign:e.vertical})},[Bs(t.$slots,"default",{},()=>[Yr(pr(e.text),1)])],6))}});var Gd=Ne({name:"CodeGroup",setup(e,{slots:t}){const n=ye(-1),r=ye([]),o=(i=n.value)=>{i<r.value.length-1?n.value=i+1:n.value=0,r.value[n.value].focus()},s=(i=n.value)=>{i>0?n.value=i-1:n.value=r.value.length-1,r.value[n.value].focus()},a=(i,l)=>{i.key===" "||i.key==="Enter"?(i.preventDefault(),n.value=l):i.key==="ArrowRight"?(i.preventDefault(),o(l)):i.key==="ArrowLeft"&&(i.preventDefault(),s(l))};return()=>{var i;const l=(((i=t.default)===null||i===void 0?void 0:i.call(t))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return l.length===0?null:(n.value<0||n.value>l.length-1?(n.value=l.findIndex(c=>c.props.active===""||c.props.active===!0),n.value===-1&&(n.value=0)):l.forEach((c,d)=>{c.props.active=d===n.value}),le("div",{class:"code-group"},[le("div",{class:"code-group__nav"},le("ul",{class:"code-group__ul"},l.map((c,d)=>{const m=d===n.value;return le("li",{class:"code-group__li"},le("button",{ref:f=>{f&&(r.value[d]=f)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":m},ariaPressed:m,ariaExpanded:m,onClick:()=>n.value=d,onKeydown:f=>a(f,d)},c.props.title))}))),l]))}}});const Jd=["aria-selected"],Xd=Ne({name:"CodeGroupItem"}),Qd=Ne(An(We({},Xd),{props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(wt(),Gn("div",{class:ft(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[Bs(t.$slots,"default")],10,Jd))}}));function ni(e){return Hi()?(Fi(e),!0):!1}const Tn=typeof window!="undefined",Zd=e=>typeof e=="string",Eo=()=>{};function ef(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const tf=e=>e();var ri=Object.getOwnPropertySymbols,nf=Object.prototype.hasOwnProperty,rf=Object.prototype.propertyIsEnumerable,of=(e,t)=>{var n={};for(var r in e)nf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ri)for(var r of ri(e))t.indexOf(r)<0&&rf.call(e,r)&&(n[r]=e[r]);return n};function sf(e,t,n={}){const r=n,{eventFilter:o=tf}=r,s=of(r,["eventFilter"]);return Je(e,ef(o,t),s)}function af(e,t=!0){qs()?qe(e):t?e():to(e)}const ur=Tn?window:void 0;Tn&&window.document;Tn&&window.navigator;Tn&&window.location;function lf(...e){let t,n,r,o;if(Zd(e[0])?([n,r,o]=e,t=ur):[t,n,r,o]=e,!t)return Eo;let s=Eo;const a=Je(()=>Qe(t),l=>{s(),!!l&&(l.addEventListener(n,r,o),s=()=>{l.removeEventListener(n,r,o),s=Eo})},{immediate:!0,flush:"post"}),i=()=>{a(),s()};return ni(i),i}function cf(e,t={}){const{window:n=ur}=t;let r;const o=ye(!1),s=()=>{!n||(r||(r=n.matchMedia(e)),o.value=r.matches)};return af(()=>{s(),!!r&&("addEventListener"in r?r.addEventListener("change",s):r.addListener(s),ni(()=>{"removeEventListener"in s?r.removeEventListener("change",s):r.removeListener(s)}))}),o}const So="__vueuse_ssr_handlers__";globalThis[So]=globalThis[So]||{};const uf=globalThis[So];function df(e,t){return uf[e]||t}function ff(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const hf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function pf(e,t,n,r={}){var o;const{flush:s="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,shallow:c,window:d=ur,eventFilter:m,onError:f=x=>{console.error(x)}}=r,_=Qe(t),h=ff(_),b=(c?is:ye)(t),g=(o=r.serializer)!=null?o:hf[h];if(!n)try{n=df("getDefaultStorage",()=>{var x;return(x=ur)==null?void 0:x.localStorage})()}catch(x){f(x)}function v(x){if(!(!n||x&&x.key!==e))try{const C=x?x.newValue:n.getItem(e);C==null?(b.value=_,l&&_!==null&&n.setItem(e,g.write(_))):typeof C!="string"?b.value=C:b.value=g.read(C)}catch(C){f(C)}}return v(),d&&i&&lf(d,"storage",x=>setTimeout(()=>v(x),0)),n&&sf(b,()=>{try{b.value==null?n.removeItem(e):n.setItem(e,g.write(b.value))}catch(x){f(x)}},{flush:s,deep:a,eventFilter:m}),b}function mf(e){return cf("(prefers-color-scheme: dark)",e)}var oi,si;Tn&&(window==null?void 0:window.navigator)&&((oi=window==null?void 0:window.navigator)==null?void 0:oi.platform)&&/iP(ad|hone|od)/.test((si=window==null?void 0:window.navigator)==null?void 0:si.platform);var gf=Object.defineProperty,ai=Object.getOwnPropertySymbols,vf=Object.prototype.hasOwnProperty,yf=Object.prototype.propertyIsEnumerable,ii=(e,t,n)=>t in e?gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bf=(e,t)=>{for(var n in t||(t={}))vf.call(t,n)&&ii(e,n,t[n]);if(ai)for(var n of ai(t))yf.call(t,n)&&ii(e,n,t[n]);return e};const _f={top:0,left:0,bottom:0,right:0,height:0,width:0};bf({text:""},_f);const li=Symbol(""),Oh=()=>{const e=we(li);if(!e)throw new Error("useDarkMode() is called without provider.");return e},wf=()=>{const e=ko(),t=mf(),n=pf("vuepress-color-scheme","auto"),r=pe({get(){return e.value.darkMode?n.value==="auto"?t.value:n.value==="dark":!1},set(o){o===t.value?n.value="auto":n.value=o?"dark":"light"}});gt(li,r),xf(r)},xf=e=>{const t=(n=e.value)=>{const r=window==null?void 0:window.document.querySelector("html");r==null||r.classList.toggle("dark",n)};qe(()=>{Je(e,t,{immediate:!0})}),Br(()=>t())},ci=(...e)=>{const n=ar().resolve(...e),r=n.matched[n.matched.length-1];if(!(r==null?void 0:r.redirect))return n;const{redirect:o}=r,s=Z(o)?o(n):o,a=he(s)?{path:s}:s;return ci(We({hash:n.hash,query:n.query,params:n.params},a))},Ef=e=>{const t=ci(e);return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}};let Co=null,kn=null;const Sf={wait:()=>Co,pending:()=>{Co=new Promise(e=>kn=e)},resolve:()=>{kn==null||kn(),Co=null,kn=null}},Cf=()=>Sf,ui=Symbol("sidebarItems"),Mh=()=>{const e=we(ui);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Tf=()=>{const e=ko(),t=sd(),n=pe(()=>kf(t.value,e.value));gt(ui,n)},kf=(e,t)=>{var n,r,o,s;const a=(r=(n=e.sidebar)!==null&&n!==void 0?n:t.sidebar)!==null&&r!==void 0?r:"auto",i=(s=(o=e.sidebarDepth)!==null&&o!==void 0?o:t.sidebarDepth)!==null&&s!==void 0?s:2;return e.home||a===!1?[]:a==="auto"?Af(i):G(a)?di(a,i):Wa(a)?Pf(a,i):[]},Rf=(e,t)=>({text:e.title,link:`#${e.slug}`,children:To(e.children,t)}),To=(e,t)=>t>0?e.map(n=>Rf(n,t-1)):[],Af=e=>{const t=Yt();return[{text:t.value.title,children:To(t.value.headers,e)}]},di=(e,t)=>{const n=yo(),r=Yt(),o=s=>{var a;let i;if(he(s)?i=Ef(s):i=s,i.children)return An(We({},i),{children:i.children.map(l=>o(l))});if(i.link===n.path){const l=((a=r.value.headers[0])===null||a===void 0?void 0:a.level)===1?r.value.headers[0].children:r.value.headers;return An(We({},i),{children:To(l,t)})}return i};return e.map(s=>o(s))},Pf=(e,t)=>{var n;const r=yo(),o=Va(e,r.path),s=(n=e[o])!==null&&n!==void 0?n:[];return di(s,t)},ko=()=>Kd(),Lf={class:"sr-only"},If=Ne({setup(e){const t=ko();return(n,r)=>(wt(),Vr(Qe(xo),null,{default:ds(()=>[Nt("span",Lf,pr(Qe(t).openInNewWindow),1)]),_:1}))}});var Of=Gt(({app:e,router:t})=>{e.component("Badge",Yd),e.component("CodeGroup",Gd),e.component("CodeGroupItem",Qd),delete e._context.components.ExternalLinkIcon,e.component("ExternalLinkIcon",If),e.component("NavbarSearch",()=>{const r=e.component("Docsearch")||e.component("SearchBox");return r?le(r):null});const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...r)=>(await Cf().wait(),n(...r))});var Mf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const Df={name:"CodeCopy",props:{parent:Object,code:String,options:{align:String,color:String,backgroundTransition:Boolean,backgroundTransitionColor:String,successText:String,successTextColor:String,staticIcon:Boolean}},data(){return{success:!1,originalBackground:null,originalTransition:null}},computed:{alignClass(){return this.options.align},iconClass(){return this.options.staticIcon?"":"hover"}},mounted(){this.originalTransition=this.parent.style.transition,this.originalBackground=this.parent.style.background},beforeDestroy(){this.parent.style.transition=this.originalTransition,this.parent.style.background=this.originalBackground},methods:{hexToRgb(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},copyToClipboard(e){if(navigator.clipboard)navigator.clipboard.writeText(this.code).then(()=>{this.setSuccessTransitions()},()=>{});else{let t=document.createElement("textarea");document.body.appendChild(t),t.value=this.code,t.select(),document.execCommand("Copy"),t.remove(),this.setSuccessTransitions()}},setSuccessTransitions(){if(clearTimeout(this.successTimeout),this.options.backgroundTransition){this.parent.style.transition="background 350ms";let e=this.options.backgroundTransitionColor;e=e.indexOf("#")!==-1?e:"#282c34";let t=this.hexToRgb(e);this.parent.style.background=`rgba(${t.r}, ${t.g}, ${t.b}, 0.7)`}this.success=!0,this.successTimeout=setTimeout(()=>{this.options.backgroundTransition&&(this.parent.style.background=this.originalBackground,this.parent.style.transition=this.originalTransition),this.success=!1},500)}}},Nf=e=>(bl("data-v-39936cf2"),e=e(),_l(),e),Hf={class:"code-copy"},Ff=Nf(()=>Nt("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1)),$f=["fill"];function zf(e,t,n,r,o,s){return wt(),Gn("div",Hf,[(wt(),Gn("svg",{onClick:t[0]||(t[0]=(...a)=>s.copyToClipboard&&s.copyToClipboard(...a)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:ft([s.iconClass,s.alignClass])},[Ff,Nt("path",{fill:n.options.color,d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"},null,8,$f)],2)),Nt("span",{class:ft([o.success?"success":"",s.alignClass]),style:Zt({color:n.options.successTextColor})},pr(n.options.successText),7)])}var fi=Mf(Df,[["render",zf],["__scopeId","data-v-39936cf2"]]),Bf=Gt(({app:e})=>{e.component("CodeCopy",fi)});const jf=({input:e,hotKeys:t})=>{const n=r=>{!e.value||t.value.length===0||r.target===document.body&&t.value.includes(r.key)&&(e.value.focus(),r.preventDefault())};qe(()=>{document.addEventListener("keydown",n)}),cn(()=>{document.removeEventListener("keydown",n)})},qf=[{title:"intro",headers:[],path:"/",pathLocale:"/",extraFields:[`
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
\`\`\`r
mdat = merge(dat, dat2, by.x='dest', by.y='faa')
\`\`\`

##### Set keys for even faster merges and syntax shortcuts

\`\`\`r
setkey(dat, dest); setkey(dat2, dest)
mdat = merge(dat, dat2) ### note: don't need 'by'
\`\`\`

##### Non-equi joins

Non-equi joins are a bit hard to understand if you've never seen them before.
But they are incredibly powerful and solve a suprisingly common problem: Merging
datasets over a range (e.g. start to end dates), rather than exact matches.
Here follows a simple example where we want to subset the first quarter flights
for American Airlines and second quarter flights for United Airlines:

\`\`\`r
dat3 = data.table(carrier     = c('AA', 'UA'),
                  start_month = c(1, 4),
                  end_month   = c(3, 6))
                  
dat[dat3, on = .(carrier,
                 month >= start_month,
                 month <= end_month)]
\`\`\`

##### Rolling joins 

Rolling join are similar and allow you to match a set of dates forwards or
backwards. For example, our \`dat\` datset ends in October. So let's say we want
to carry the last known entries for American and United Airlines forward to
(random) future dates.

\`\`\`r
dat4 = data.table(carrier  = c('AA', 'UA'),
                  new_date = as.IDate(c('2014-11-01', '2014-11-15')))
                  
dat[, date := as.IDate(paste(year, month, day, sep='-'))]

dat[dat4, on = .(carrier, date=new_date), roll='nearest']
\`\`\`




`]},{title:"extras",headers:[{level:2,title:"ggplot2: Beautiful and customizable plots",slug:"ggplot2-beautiful-and-customizable-plots",children:[{level:3,title:"Basic scatterplot",slug:"basic-scatterplot",children:[]}]},{level:2,title:"tidyverse",slug:"tidyverse",children:[{level:3,title:"Data wrangling with dplyr",slug:"data-wrangling-with-dplyr",children:[]},{level:3,title:"Manipulating dates with lubridate",slug:"manipulating-dates-with-lubridate",children:[]},{level:3,title:"Iterating with purrr",slug:"iterating-with-purrr",children:[]},{level:3,title:"String operations with stringr",slug:"string-operations-with-stringr",children:[]}]}],path:"/extras/",pathLocale:"/",extraFields:[`
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
`]},{title:"fixest",headers:[{level:2,title:"Introduction to fixest",slug:"introduction-to-fixest",children:[]}],path:"/fixest/",pathLocale:"/",extraFields:[`
# Regression analysis with fixest

[**fixest**](https://lrberge.github.io/fixest) (by Laurent Berg\xE9) is a package 
designed from the ground up in C++ to make running regressions fast and 
incredibly easy. It provides in-built support for a variety of linear and 
non-linear models, as well as regression tables and plotting methods.

Before continuing, make sure that you have installed **fixest**. You only 
have to do this once (or as often as you want to update the package).

\`\`\`r
# Install from CRAN (recommended)
install.packages('fixest')
# Install the development version from GitHub (advanced)
# Requires Rtools and the remotes package
# remotes::install_github('lrberge/fixest')
\`\`\`

Once **fixest** is installed, don't forget to load it whenever you want to 
use it. Unlike Stata, you have to re-load a package every time you start a new R 
session.

\`\`\`r
# Load fixest into our current R session
library(fixest)
\`\`\`

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


## Introduction to fixest

The [**fixest**](https://lrberge.github.io/fixest/index.html) package contains a
highly flexible set of tools that allow you to estimate a fairly large set of
standard regression models. While the package certainly doesn't cover every
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


`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[""]}],hi=ye(qf),Uf=()=>hi;fr.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=e=>{hi.value=e});const Kf=/[^\x00-\x7F]/,Wf=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),pi=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),mi=(e,t)=>{const n=t.join(" "),r=Wf(e);if(Kf.test(e))return r.some(a=>n.toLowerCase().indexOf(a)>-1);const o=e.endsWith(" ");return new RegExp(r.map((a,i)=>r.length===i+1&&!o?`(?=.*\\b${pi(a)})`:`(?=.*\\b${pi(a)}\\b)`).join("")+".+","gi").test(n)},Vf=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:r})=>{const o=pe(()=>e.value.filter(s=>s.pathLocale===t.value));return pe(()=>{const s=n.value.trim().toLowerCase();if(!s)return[];const a=[],i=(l,c)=>{mi(s,[c.title])&&a.push({link:`${l.path}#${c.slug}`,title:l.title,header:c.title});for(const d of c.children){if(a.length>=r.value)return;i(l,d)}};for(const l of o.value){if(a.length>=r.value)break;if(mi(s,[l.title,...l.extraFields])){a.push({link:l.path,title:l.title});continue}for(const c of l.headers){if(a.length>=r.value)break;i(l,c)}}return a})},Yf=e=>{const t=ye(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Gf=Ne({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:r}=pl(e),o=ar(),s=yd(),a=Uf(),i=ye(null),l=ye(!1),c=ye(""),d=pe(()=>{var C;return(C=t.value[s.value])!==null&&C!==void 0?C:{}}),m=Vf({searchIndex:a,routeLocale:s,query:c,maxSuggestions:r}),{focusIndex:f,focusNext:_,focusPrev:h}=Yf(m);jf({input:i,hotKeys:n});const b=pe(()=>l.value&&!!m.value.length),g=()=>{!b.value||h()},v=()=>{!b.value||_()},x=C=>{if(!b.value)return;const A=m.value[C];!A||o.push(A.link).then(()=>{c.value="",f.value=0})};return()=>le("form",{class:"search-box",role:"search"},[le("input",{ref:i,type:"search",placeholder:d.value.placeholder,autocomplete:"off",spellcheck:!1,value:c.value,onFocus:()=>l.value=!0,onBlur:()=>l.value=!1,onInput:C=>c.value=C.target.value,onKeydown:C=>{switch(C.key){case"ArrowUp":{g();break}case"ArrowDown":{v();break}case"Enter":{C.preventDefault(),x(f.value);break}}}}),b.value&&le("ul",{class:"suggestions",onMouseleave:()=>f.value=-1},m.value.map(({link:C,title:A,header:H},$)=>le("li",{class:["suggestion",{focus:f.value===$}],onMouseenter:()=>f.value=$,onMousedown:()=>x($)},le("a",{href:C,onClick:T=>T.preventDefault()},[le("span",{class:"page-title"},A),H&&le("span",{class:"page-header"},`> ${H}`)]))))])}});const Jf={},Xf=["s","/"],Qf=5;var Zf=Gt(({app:e})=>{e.component("SearchBox",t=>le(Gf,We({locales:Jf,hotKeys:Xf,maxSuggestions:Qf},t)))});const eh=[Pd,jd,Vd,Of,Bf,Zf];function gi(e,t,n){var r,o,s;t===void 0&&(t=50),n===void 0&&(n={});var a=(r=n.isImmediate)!=null&&r,i=(o=n.callback)!=null&&o,l=n.maxWait,c=Date.now(),d=[];function m(){if(l!==void 0){var _=Date.now()-c;if(_+t>=l)return l-_}return t}var f=function(){var _=[].slice.call(arguments),h=this;return new Promise(function(b,g){var v=a&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,c=Date.now(),!a){var C=e.apply(h,_);i&&i(C),d.forEach(function(A){return(0,A.resolve)(C)}),d=[]}},m()),v){var x=e.apply(h,_);return i&&i(x),b(x)}d.push({resolve:b,reject:g})})};return f.cancel=function(_){s!==void 0&&clearTimeout(s),d.forEach(function(h){return(0,h.reject)(_)}),d=[]},f}const vi=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,th=()=>window.scrollTo({top:0,behavior:"smooth"});const nh=Ne({name:"BackToTop",setup(){const e=ye(0),t=pe(()=>e.value>300),n=gi(()=>{e.value=vi()},100);qe(()=>{e.value=vi(),window.addEventListener("scroll",()=>n())});const r=le("div",{class:"back-to-top",onClick:th});return()=>le(io,{name:"back-to-top"},{default:()=>t.value?r:null})}}),rh=[nh],oh=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const o=ar(),s=Yt(),a=()=>{var l,c,d,m;const f=Array.from(document.querySelectorAll(e)),h=Array.from(document.querySelectorAll(t)).filter(C=>f.some(A=>A.hash===C.hash)),b=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),g=window.innerHeight+b,v=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),x=Math.abs(v-g)<r;for(let C=0;C<h.length;C++){const A=h[C],H=h[C+1],$=C===0&&b===0,T=b>=((c=(l=A.parentElement)===null||l===void 0?void 0:l.offsetTop)!==null&&c!==void 0?c:0)-r,E=!H||b<((m=(d=H.parentElement)===null||d===void 0?void 0:d.offsetTop)!==null&&m!==void 0?m:0)-r;if(!($||T&&E))continue;const q=decodeURIComponent(o.currentRoute.value.hash),Y=decodeURIComponent(A.hash);if(q===Y)return;if(x){for(let w=C+1;w<h.length;w++)if(q===decodeURIComponent(h[w].hash))return}sh(o,{hash:Y,force:!0});return}},i=gi(()=>a(),n);qe(()=>{i(),window.addEventListener("scroll",()=>i())}),cn(()=>{window.removeEventListener("scroll",()=>i())}),Je(()=>s.value.path,()=>i())},sh=async(e,...t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace(...t).finally(()=>e.options.scrollBehavior=n)},ah="a.sidebar-item",ih=".header-anchor",lh=200,ch=5;var uh=ir(()=>{oh({headerLinkSelector:ah,headerAnchorSelector:ih,delay:lh,offset:ch})}),dh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},dr={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(dh,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(h){var b,g;for(b in h)g=h[b],g!==void 0&&h.hasOwnProperty(b)&&(r[b]=g);return this},n.status=null,n.set=function(h){var b=n.isStarted();h=o(h,r.minimum,1),n.status=h===1?null:h;var g=n.render(!b),v=g.querySelector(r.barSelector),x=r.speed,C=r.easing;return g.offsetWidth,i(function(A){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(v,a(h,x,C)),h===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){n.remove(),A()},x)},x)):setTimeout(A,x)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var h=function(){setTimeout(function(){!n.status||(n.trickle(),h())},r.trickleSpeed)};return r.trickle&&h(),this},n.done=function(h){return!h&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(h){var b=n.status;return b?(typeof h!="number"&&(h=(1-b)*o(Math.random()*b,.1,.95)),b=o(b+h,0,.994),n.set(b)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var h=0,b=0;n.promise=function(g){return!g||g.state()==="resolved"?this:(b===0&&n.start(),h++,b++,g.always(function(){b--,b===0?(h=0,n.done()):n.set((h-b)/h)}),this)}}(),n.render=function(h){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var b=document.createElement("div");b.id="nprogress",b.innerHTML=r.template;var g=b.querySelector(r.barSelector),v=h?"-100":s(n.status||0),x=document.querySelector(r.parent),C;return l(g,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(C=b.querySelector(r.spinnerSelector),C&&_(C)),x!=document.body&&d(x,"nprogress-custom-parent"),x.appendChild(b),b},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(r.parent),"nprogress-custom-parent");var h=document.getElementById("nprogress");h&&_(h)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var h=document.body.style,b="WebkitTransform"in h?"Webkit":"MozTransform"in h?"Moz":"msTransform"in h?"ms":"OTransform"in h?"O":"";return b+"Perspective"in h?"translate3d":b+"Transform"in h?"translate":"margin"};function o(h,b,g){return h<b?b:h>g?g:h}function s(h){return(-1+h)*100}function a(h,b,g){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+s(h)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+s(h)+"%,0)"}:v={"margin-left":s(h)+"%"},v.transition="all "+b+"ms "+g,v}var i=function(){var h=[];function b(){var g=h.shift();g&&g(b)}return function(g){h.push(g),h.length==1&&b()}}(),l=function(){var h=["Webkit","O","Moz","ms"],b={};function g(A){return A.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(H,$){return $.toUpperCase()})}function v(A){var H=document.body.style;if(A in H)return A;for(var $=h.length,T=A.charAt(0).toUpperCase()+A.slice(1),E;$--;)if(E=h[$]+T,E in H)return E;return A}function x(A){return A=g(A),b[A]||(b[A]=v(A))}function C(A,H,$){H=x(H),A.style[H]=$}return function(A,H){var $=arguments,T,E;if($.length==2)for(T in H)E=H[T],E!==void 0&&H.hasOwnProperty(T)&&C(A,T,E);else C(A,$[1],$[2])}}();function c(h,b){var g=typeof h=="string"?h:f(h);return g.indexOf(" "+b+" ")>=0}function d(h,b){var g=f(h),v=g+b;c(g,b)||(h.className=v.substring(1))}function m(h,b){var g=f(h),v;!c(h,b)||(v=g.replace(" "+b+" "," "),h.className=v.substring(1,v.length-1))}function f(h){return(" "+(h.className||"")+" ").replace(/\s+/gi," ")}function _(h){h&&h.parentNode&&h.parentNode.removeChild(h)}return n})})(dr);const fh=()=>{qe(()=>{const e=ar(),t=new Set;t.add(e.currentRoute.value.path),dr.exports.configure({showSpinner:!1}),e.beforeEach(n=>{t.has(n.path)||dr.exports.start()}),e.afterEach(n=>{t.add(n.path),dr.exports.done()})})};var hh=ir(()=>{fh()}),ph=ir(()=>{wf(),Tf()});const Rn={staticIcon:!1,align:"bottom",selector:'div[class*="language-"]',delay:400,color:"var(--c-brand)",backgroundTransition:!0,backgroundTransitionColor:"var(--code-bg-color)",successTextColor:"var(--c-brand-light)",successText:"Copied!"};var mh=ir(()=>{const e=Yt(),t=()=>{setTimeout(()=>{document.querySelectorAll(Rn.selector).forEach(n=>{if(n.classList.contains(`code-copy-added-${Rn.align}`)||n.querySelector("pre, code[class*='pre-']")===null)return;const r=n.querySelector("pre, code[class*='pre-']"),o=Gc(fi,{parent:n,code:r.innerText,options:Rn}),s=document.createElement("div");n.appendChild(s),o.mount(s),n.classList.add(`code-copy-added-${Rn.align}`)})},Rn.delay+100)};return qe(()=>{t(),window.addEventListener("vuepress-plugin-clipboard-update-event",t)}),cn(()=>{window.removeEventListener("vuepress-plugin-clipboard-update-event",t)}),bs(()=>{t()}),Je(()=>e.value.path,t),t});const gh=[uh,hh,ph,mh],vh=[["v-8daa1a0e","/",{title:"intro"},["/index.html","/README.md"]],["v-77f0ef68","/data.table/",{title:"data.table"},["/data.table/index.html","/data.table/README.md"]],["v-1c385113","/extras/",{title:"extras"},["/extras/index.html","/extras/README.md"]],["v-37b893e5","/fixest/",{title:"fixest"},["/fixest/index.html","/fixest/README.md"]],["v-3706649a","/404.html",{},["/404"]]],yh=vh.reduce((e,[t,n,r,o])=>(e.push({name:t,path:n,component:Xa,meta:r},...o.map(s=>({path:s,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:Xa}]),bh=(e,t)=>{const n=pe(()=>bd(kt.value.locales,t.currentRoute.value.path)),r=pe(()=>xd(kt.value,n.value)),o=pe(()=>ad(dt.value)),s=pe(()=>md(dt.value,r.value)),a=pe(()=>hd(s.value,o.value,r.value)),i=pe(()=>vd(dt.value));e.provide(_o,n),e.provide(Ja,r),e.provide(Ka,o),e.provide(pd,s),e.provide(Ya,a),e.provide(Ga,i),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>o.value},$headTitle:{get:()=>s.value},$lang:{get:()=>i.value},$page:{get:()=>dt.value},$routeLocale:{get:()=>n.value},$site:{get:()=>kt.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>Rd}})},_h=e=>{e.component("ClientOnly",ed),e.component("Content",wo)},wh=Jc,xh=mu,Eh=async()=>{const e=wh({name:"VuepressApp",setup(){Sd();for(const n of gh)n();return()=>[le(Ba),...rh.map(n=>le(n))]}}),t=Qu({history:xh(ud(kt.value.base)),routes:yh,scrollBehavior:(n,r,o)=>o||(n.hash?{el:n.hash}:{top:0})});t.beforeResolve(async(n,r)=>{var o;(n.path!==r.path||r===tt)&&([dt.value]=await Promise.all([od(n.name),(o=qa[n.name])===null||o===void 0?void 0:o.__asyncLoader()]))}),bh(e,t),_h(e);for(const n of eh)await n({app:e,router:t,siteData:kt});return e.use(t),{app:e,router:t}};Eh().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{wd as A,Ih as B,Oh as C,le as D,Rd as E,Re as F,ed as G,ft as H,dd as I,ud as J,ye as K,Je as L,Ch as M,Ah as N,ar as O,he as P,Ef as Q,qe as R,Zt as S,io as T,Yt as U,Mh as V,Wa as W,Br as X,Cf as Y,Mf as _,Nt as a,ge as b,Gn as c,Eh as createVueApp,Yr as d,Th as e,Ne as f,ko as g,Qe as h,sd as i,pe as j,G as k,Rh as l,kh as m,yo as n,wt as o,pl as p,Vr as q,ec as r,ac as s,pr as t,yd as u,Bs as v,ds as w,cd as x,Ph as y,Lh as z};
