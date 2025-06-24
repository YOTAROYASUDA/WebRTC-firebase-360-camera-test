(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const y_=()=>{};var Sh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},E_=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],l=i[e++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,l=o?i[r+1]:0,c=r+2<i.length,u=c?i[r+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let p=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(p=64)),n.push(e[h],e[d],e[p],e[_])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Df(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):E_(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],l=r<i.length?e[i.charAt(r)]:0;++r;const u=r<i.length?e[i.charAt(r)]:64;++r;const d=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||l==null||u==null||d==null)throw new T_;const p=s<<2|l>>4;if(n.push(p),u!==64){const _=l<<4&240|u>>2;if(n.push(_),d!==64){const x=u<<6&192|d;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class T_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x_=function(i){const t=Df(i);return Lf.encodeByteArray(t,!0)},ca=function(i){return x_(i).replace(/\./g,"")},S_=function(i){try{return Lf.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=()=>M_().__FIREBASE_DEFAULTS__,w_=()=>{if(typeof process>"u"||typeof Sh>"u")return;const i=Sh.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},b_=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&S_(i[1]);return t&&JSON.parse(t)},nu=()=>{try{return y_()||A_()||w_()||b_()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},R_=i=>{var t,e;return(e=(t=nu())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},C_=i=>{const t=R_(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Nf=()=>{var i;return(i=nu())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(i){return i.endsWith(".cloudworkstations.dev")}async function P_(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[ca(JSON.stringify(e)),ca(JSON.stringify(o)),""].join(".")}const Ns={};function L_(){const i={prod:[],emulator:[]};for(const t of Object.keys(Ns))Ns[t]?i.emulator.push(t):i.prod.push(t);return i}function N_(i){let t=document.getElementById(i),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",i),e=!0),{created:e,element:t}}let Mh=!1;function U_(i,t){if(typeof window>"u"||typeof document>"u"||!iu(window.location.host)||Ns[i]===t||Ns[i]||Mh)return;Ns[i]=t;function e(p){return`__firebase__banner__${p}`}const n="__firebase__banner",s=L_().prod.length>0;function o(){const p=document.getElementById(n);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,_){p.setAttribute("width","24"),p.setAttribute("id",_),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Mh=!0,o()},p}function h(p,_){p.setAttribute("id",_),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=N_(n),_=e("text"),x=document.getElementById(_)||document.createElement("span"),b=e("learnmore"),g=document.getElementById(b)||document.createElement("a"),m=e("preprendIcon"),N=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const D=p.element;l(D),h(g,b);const I=u();c(N,m),D.append(N,x,g,I),document.body.appendChild(D)}s?(x.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F_(){var i;const t=(i=nu())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function V_(){return!F_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function B_(){try{return typeof indexedDB=="object"}catch{return!1}}function k_(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="FirebaseError";class ls extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=z_,Object.setPrototypeOf(this,ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uf.prototype.create)}}class Uf{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?H_(s,n):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ls(r,l,n)}}function H_(i,t){return i.replace(G_,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const G_=/\{\$([^}]+)}/g;function ua(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(Ah(s)&&Ah(o)){if(!ua(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function Ah(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(i){return i&&i._delegate?i._delegate:i}class ks{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new I_;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(q_(t))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=nr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nr){return this.instances.has(t)}getOptions(t=nr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:X_(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=nr){return this.component?this.component.multipleInstances?t:nr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X_(i){return i===nr?void 0:i}function q_(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new W_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const $_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Y_=ue.INFO,K_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Q_=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=K_[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Of{constructor(t){this.name=t,this._logLevel=Y_,this._logHandler=Q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const Z_=(i,t)=>t.some(e=>i instanceof e);let wh,bh;function J_(){return wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return bh||(bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ff=new WeakMap,Hl=new WeakMap,Vf=new WeakMap,el=new WeakMap,ru=new WeakMap;function eg(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Pi(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Ff.set(e,i)}).catch(()=>{}),ru.set(t,i),t}function ng(i){if(Hl.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Hl.set(i,t)}let Gl={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Hl.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Vf.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Pi(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function ig(i){Gl=i(Gl)}function rg(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(nl(this),t,...e);return Vf.set(n,t.sort?t.sort():[t]),Pi(n)}:tg().includes(i)?function(...t){return i.apply(nl(this),t),Pi(Ff.get(this))}:function(...t){return Pi(i.apply(nl(this),t))}}function sg(i){return typeof i=="function"?rg(i):(i instanceof IDBTransaction&&ng(i),Z_(i,J_())?new Proxy(i,Gl):i)}function Pi(i){if(i instanceof IDBRequest)return eg(i);if(el.has(i))return el.get(i);const t=sg(i);return t!==i&&(el.set(i,t),ru.set(t,i)),t}const nl=i=>ru.get(i);function og(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),l=Pi(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Pi(o.result),c.oldVersion,c.newVersion,Pi(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ag=["get","getKey","getAll","getAllKeys","count"],lg=["put","add","delete","clear"],il=new Map;function Rh(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(il.get(t))return il.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=lg.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||ag.includes(e)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[e](...l),r&&c.done]))[0]};return il.set(t,s),s}ig(i=>({...i,get:(t,e,n)=>Rh(t,e)||i.get(t,e,n),has:(t,e)=>!!Rh(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ug(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function ug(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wl="@firebase/app",Ch="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Of("@firebase/app"),hg="@firebase/app-compat",dg="@firebase/analytics-compat",fg="@firebase/analytics",pg="@firebase/app-check-compat",mg="@firebase/app-check",_g="@firebase/auth",gg="@firebase/auth-compat",vg="@firebase/database",yg="@firebase/data-connect",Eg="@firebase/database-compat",Tg="@firebase/functions",xg="@firebase/functions-compat",Sg="@firebase/installations",Mg="@firebase/installations-compat",Ag="@firebase/messaging",wg="@firebase/messaging-compat",bg="@firebase/performance",Rg="@firebase/performance-compat",Cg="@firebase/remote-config",Ig="@firebase/remote-config-compat",Pg="@firebase/storage",Dg="@firebase/storage-compat",Lg="@firebase/firestore",Ng="@firebase/ai",Ug="@firebase/firestore-compat",Og="firebase",Fg="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="[DEFAULT]",Vg={[Wl]:"fire-core",[hg]:"fire-core-compat",[fg]:"fire-analytics",[dg]:"fire-analytics-compat",[mg]:"fire-app-check",[pg]:"fire-app-check-compat",[_g]:"fire-auth",[gg]:"fire-auth-compat",[vg]:"fire-rtdb",[yg]:"fire-data-connect",[Eg]:"fire-rtdb-compat",[Tg]:"fire-fn",[xg]:"fire-fn-compat",[Sg]:"fire-iid",[Mg]:"fire-iid-compat",[Ag]:"fire-fcm",[wg]:"fire-fcm-compat",[bg]:"fire-perf",[Rg]:"fire-perf-compat",[Cg]:"fire-rc",[Ig]:"fire-rc-compat",[Pg]:"fire-gcs",[Dg]:"fire-gcs-compat",[Lg]:"fire-fst",[Ug]:"fire-fst-compat",[Ng]:"fire-vertex","fire-js":"fire-js",[Og]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map,Bg=new Map,ql=new Map;function Ih(i,t){try{i.container.addComponent(t)}catch(e){fi.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function da(i){const t=i.name;if(ql.has(t))return fi.debug(`There were multiple attempts to register component ${t}.`),!1;ql.set(t,i);for(const e of ha.values())Ih(e,i);for(const e of Bg.values())Ih(e,i);return!0}function kg(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function zg(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new Uf("app","Firebase",Hg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=Fg;function Bf(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Xl,automaticDataCollectionEnabled:!0},t),r=n.name;if(typeof r!="string"||!r)throw Di.create("bad-app-name",{appName:String(r)});if(e||(e=Nf()),!e)throw Di.create("no-options");const s=ha.get(r);if(s){if(ua(e,s.options)&&ua(n,s.config))return s;throw Di.create("duplicate-app",{appName:r})}const o=new j_(r);for(const c of ql.values())o.addComponent(c);const l=new Gg(e,n,o);return ha.set(r,l),l}function Xg(i=Xl){const t=ha.get(i);if(!t&&i===Xl&&Nf())return Bf();if(!t)throw Di.create("no-app",{appName:i});return t}function Wr(i,t,e){var n;let r=(n=Vg[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fi.warn(l.join(" "));return}da(new ks(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebase-heartbeat-database",jg=1,zs="firebase-heartbeat-store";let rl=null;function kf(){return rl||(rl=og(qg,jg,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(zs)}catch(e){console.warn(e)}}}}).catch(i=>{throw Di.create("idb-open",{originalErrorMessage:i.message})})),rl}async function $g(i){try{const e=(await kf()).transaction(zs),n=await e.objectStore(zs).get(zf(i));return await e.done,n}catch(t){if(t instanceof ls)fi.warn(t.message);else{const e=Di.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fi.warn(e.message)}}}async function Ph(i,t){try{const n=(await kf()).transaction(zs,"readwrite");await n.objectStore(zs).put(t,zf(i)),await n.done}catch(e){if(e instanceof ls)fi.warn(e.message);else{const n=Di.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});fi.warn(n.message)}}}function zf(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=1024,Kg=30;class Qg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jg(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Kg){const o=tv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){fi.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dh(),{heartbeatsToSend:n,unsentEntries:r}=Zg(this._heartbeatsCache.heartbeats),s=ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return fi.warn(e),""}}}function Dh(){return new Date().toISOString().substring(0,10)}function Zg(i,t=Yg){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Lh(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Lh(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Jg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B_()?k_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $g(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Lh(i){return ca(JSON.stringify({version:2,heartbeats:i})).length}function tv(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let n=1;n<i.length;n++)i[n].date<e&&(e=i[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(i){da(new ks("platform-logger",t=>new cg(t),"PRIVATE")),da(new ks("heartbeat",t=>new Qg(t),"PRIVATE")),Wr(Wl,Ch,i),Wr(Wl,Ch,"esm2017"),Wr("fire-js","")}ev("");var nv="firebase",iv="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wr(nv,iv,"app");var Nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,Hf;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,T){function y(){}y.prototype=T.prototype,S.D=T.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(v,M,P){for(var w=Array(arguments.length-2),J=2;J<arguments.length;J++)w[J-2]=arguments[J];return T.prototype[M].apply(v,w)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,T,y){y||(y=0);var v=Array(16);if(typeof T=="string")for(var M=0;16>M;++M)v[M]=T.charCodeAt(y++)|T.charCodeAt(y++)<<8|T.charCodeAt(y++)<<16|T.charCodeAt(y++)<<24;else for(M=0;16>M;++M)v[M]=T[y++]|T[y++]<<8|T[y++]<<16|T[y++]<<24;T=S.g[0],y=S.g[1],M=S.g[2];var P=S.g[3],w=T+(P^y&(M^P))+v[0]+3614090360&4294967295;T=y+(w<<7&4294967295|w>>>25),w=P+(M^T&(y^M))+v[1]+3905402710&4294967295,P=T+(w<<12&4294967295|w>>>20),w=M+(y^P&(T^y))+v[2]+606105819&4294967295,M=P+(w<<17&4294967295|w>>>15),w=y+(T^M&(P^T))+v[3]+3250441966&4294967295,y=M+(w<<22&4294967295|w>>>10),w=T+(P^y&(M^P))+v[4]+4118548399&4294967295,T=y+(w<<7&4294967295|w>>>25),w=P+(M^T&(y^M))+v[5]+1200080426&4294967295,P=T+(w<<12&4294967295|w>>>20),w=M+(y^P&(T^y))+v[6]+2821735955&4294967295,M=P+(w<<17&4294967295|w>>>15),w=y+(T^M&(P^T))+v[7]+4249261313&4294967295,y=M+(w<<22&4294967295|w>>>10),w=T+(P^y&(M^P))+v[8]+1770035416&4294967295,T=y+(w<<7&4294967295|w>>>25),w=P+(M^T&(y^M))+v[9]+2336552879&4294967295,P=T+(w<<12&4294967295|w>>>20),w=M+(y^P&(T^y))+v[10]+4294925233&4294967295,M=P+(w<<17&4294967295|w>>>15),w=y+(T^M&(P^T))+v[11]+2304563134&4294967295,y=M+(w<<22&4294967295|w>>>10),w=T+(P^y&(M^P))+v[12]+1804603682&4294967295,T=y+(w<<7&4294967295|w>>>25),w=P+(M^T&(y^M))+v[13]+4254626195&4294967295,P=T+(w<<12&4294967295|w>>>20),w=M+(y^P&(T^y))+v[14]+2792965006&4294967295,M=P+(w<<17&4294967295|w>>>15),w=y+(T^M&(P^T))+v[15]+1236535329&4294967295,y=M+(w<<22&4294967295|w>>>10),w=T+(M^P&(y^M))+v[1]+4129170786&4294967295,T=y+(w<<5&4294967295|w>>>27),w=P+(y^M&(T^y))+v[6]+3225465664&4294967295,P=T+(w<<9&4294967295|w>>>23),w=M+(T^y&(P^T))+v[11]+643717713&4294967295,M=P+(w<<14&4294967295|w>>>18),w=y+(P^T&(M^P))+v[0]+3921069994&4294967295,y=M+(w<<20&4294967295|w>>>12),w=T+(M^P&(y^M))+v[5]+3593408605&4294967295,T=y+(w<<5&4294967295|w>>>27),w=P+(y^M&(T^y))+v[10]+38016083&4294967295,P=T+(w<<9&4294967295|w>>>23),w=M+(T^y&(P^T))+v[15]+3634488961&4294967295,M=P+(w<<14&4294967295|w>>>18),w=y+(P^T&(M^P))+v[4]+3889429448&4294967295,y=M+(w<<20&4294967295|w>>>12),w=T+(M^P&(y^M))+v[9]+568446438&4294967295,T=y+(w<<5&4294967295|w>>>27),w=P+(y^M&(T^y))+v[14]+3275163606&4294967295,P=T+(w<<9&4294967295|w>>>23),w=M+(T^y&(P^T))+v[3]+4107603335&4294967295,M=P+(w<<14&4294967295|w>>>18),w=y+(P^T&(M^P))+v[8]+1163531501&4294967295,y=M+(w<<20&4294967295|w>>>12),w=T+(M^P&(y^M))+v[13]+2850285829&4294967295,T=y+(w<<5&4294967295|w>>>27),w=P+(y^M&(T^y))+v[2]+4243563512&4294967295,P=T+(w<<9&4294967295|w>>>23),w=M+(T^y&(P^T))+v[7]+1735328473&4294967295,M=P+(w<<14&4294967295|w>>>18),w=y+(P^T&(M^P))+v[12]+2368359562&4294967295,y=M+(w<<20&4294967295|w>>>12),w=T+(y^M^P)+v[5]+4294588738&4294967295,T=y+(w<<4&4294967295|w>>>28),w=P+(T^y^M)+v[8]+2272392833&4294967295,P=T+(w<<11&4294967295|w>>>21),w=M+(P^T^y)+v[11]+1839030562&4294967295,M=P+(w<<16&4294967295|w>>>16),w=y+(M^P^T)+v[14]+4259657740&4294967295,y=M+(w<<23&4294967295|w>>>9),w=T+(y^M^P)+v[1]+2763975236&4294967295,T=y+(w<<4&4294967295|w>>>28),w=P+(T^y^M)+v[4]+1272893353&4294967295,P=T+(w<<11&4294967295|w>>>21),w=M+(P^T^y)+v[7]+4139469664&4294967295,M=P+(w<<16&4294967295|w>>>16),w=y+(M^P^T)+v[10]+3200236656&4294967295,y=M+(w<<23&4294967295|w>>>9),w=T+(y^M^P)+v[13]+681279174&4294967295,T=y+(w<<4&4294967295|w>>>28),w=P+(T^y^M)+v[0]+3936430074&4294967295,P=T+(w<<11&4294967295|w>>>21),w=M+(P^T^y)+v[3]+3572445317&4294967295,M=P+(w<<16&4294967295|w>>>16),w=y+(M^P^T)+v[6]+76029189&4294967295,y=M+(w<<23&4294967295|w>>>9),w=T+(y^M^P)+v[9]+3654602809&4294967295,T=y+(w<<4&4294967295|w>>>28),w=P+(T^y^M)+v[12]+3873151461&4294967295,P=T+(w<<11&4294967295|w>>>21),w=M+(P^T^y)+v[15]+530742520&4294967295,M=P+(w<<16&4294967295|w>>>16),w=y+(M^P^T)+v[2]+3299628645&4294967295,y=M+(w<<23&4294967295|w>>>9),w=T+(M^(y|~P))+v[0]+4096336452&4294967295,T=y+(w<<6&4294967295|w>>>26),w=P+(y^(T|~M))+v[7]+1126891415&4294967295,P=T+(w<<10&4294967295|w>>>22),w=M+(T^(P|~y))+v[14]+2878612391&4294967295,M=P+(w<<15&4294967295|w>>>17),w=y+(P^(M|~T))+v[5]+4237533241&4294967295,y=M+(w<<21&4294967295|w>>>11),w=T+(M^(y|~P))+v[12]+1700485571&4294967295,T=y+(w<<6&4294967295|w>>>26),w=P+(y^(T|~M))+v[3]+2399980690&4294967295,P=T+(w<<10&4294967295|w>>>22),w=M+(T^(P|~y))+v[10]+4293915773&4294967295,M=P+(w<<15&4294967295|w>>>17),w=y+(P^(M|~T))+v[1]+2240044497&4294967295,y=M+(w<<21&4294967295|w>>>11),w=T+(M^(y|~P))+v[8]+1873313359&4294967295,T=y+(w<<6&4294967295|w>>>26),w=P+(y^(T|~M))+v[15]+4264355552&4294967295,P=T+(w<<10&4294967295|w>>>22),w=M+(T^(P|~y))+v[6]+2734768916&4294967295,M=P+(w<<15&4294967295|w>>>17),w=y+(P^(M|~T))+v[13]+1309151649&4294967295,y=M+(w<<21&4294967295|w>>>11),w=T+(M^(y|~P))+v[4]+4149444226&4294967295,T=y+(w<<6&4294967295|w>>>26),w=P+(y^(T|~M))+v[11]+3174756917&4294967295,P=T+(w<<10&4294967295|w>>>22),w=M+(T^(P|~y))+v[2]+718787259&4294967295,M=P+(w<<15&4294967295|w>>>17),w=y+(P^(M|~T))+v[9]+3951481745&4294967295,S.g[0]=S.g[0]+T&4294967295,S.g[1]=S.g[1]+(M+(w<<21&4294967295|w>>>11))&4294967295,S.g[2]=S.g[2]+M&4294967295,S.g[3]=S.g[3]+P&4294967295}n.prototype.u=function(S,T){T===void 0&&(T=S.length);for(var y=T-this.blockSize,v=this.B,M=this.h,P=0;P<T;){if(M==0)for(;P<=y;)r(this,S,P),P+=this.blockSize;if(typeof S=="string"){for(;P<T;)if(v[M++]=S.charCodeAt(P++),M==this.blockSize){r(this,v),M=0;break}}else for(;P<T;)if(v[M++]=S[P++],M==this.blockSize){r(this,v),M=0;break}}this.h=M,this.o+=T},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var T=1;T<S.length-8;++T)S[T]=0;var y=8*this.o;for(T=S.length-8;T<S.length;++T)S[T]=y&255,y/=256;for(this.u(S),S=Array(16),T=y=0;4>T;++T)for(var v=0;32>v;v+=8)S[y++]=this.g[T]>>>v&255;return S};function s(S,T){var y=l;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=T(S)}function o(S,T){this.h=T;for(var y=[],v=!0,M=S.length-1;0<=M;M--){var P=S[M]|0;v&&P==T||(y[M]=P,v=!1)}this.g=y}var l={};function c(S){return-128<=S&&128>S?s(S,function(T){return new o([T|0],0>T?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return g(u(-S));for(var T=[],y=1,v=0;S>=y;v++)T[v]=S/y|0,y*=4294967296;return new o(T,0)}function h(S,T){if(S.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S.charAt(0)=="-")return g(h(S.substring(1),T));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(T,8)),v=d,M=0;M<S.length;M+=8){var P=Math.min(8,S.length-M),w=parseInt(S.substring(M,M+P),T);8>P?(P=u(Math.pow(T,P)),v=v.j(P).add(u(w))):(v=v.j(y),v=v.add(u(w)))}return v}var d=c(0),p=c(1),_=c(16777216);i=o.prototype,i.m=function(){if(b(this))return-g(this).m();for(var S=0,T=1,y=0;y<this.g.length;y++){var v=this.i(y);S+=(0<=v?v:4294967296+v)*T,T*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(b(this))return"-"+g(this).toString(S);for(var T=u(Math.pow(S,6)),y=this,v="";;){var M=I(y,T).g;y=m(y,M.j(T));var P=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=M,x(y))return P+v;for(;6>P.length;)P="0"+P;v=P+v}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var T=0;T<S.g.length;T++)if(S.g[T]!=0)return!1;return!0}function b(S){return S.h==-1}i.l=function(S){return S=m(this,S),b(S)?-1:x(S)?0:1};function g(S){for(var T=S.g.length,y=[],v=0;v<T;v++)y[v]=~S.g[v];return new o(y,~S.h).add(p)}i.abs=function(){return b(this)?g(this):this},i.add=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0,M=0;M<=T;M++){var P=v+(this.i(M)&65535)+(S.i(M)&65535),w=(P>>>16)+(this.i(M)>>>16)+(S.i(M)>>>16);v=w>>>16,P&=65535,w&=65535,y[M]=w<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function m(S,T){return S.add(g(T))}i.j=function(S){if(x(this)||x(S))return d;if(b(this))return b(S)?g(this).j(g(S)):g(g(this).j(S));if(b(S))return g(this.j(g(S)));if(0>this.l(_)&&0>S.l(_))return u(this.m()*S.m());for(var T=this.g.length+S.g.length,y=[],v=0;v<2*T;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var M=0;M<S.g.length;M++){var P=this.i(v)>>>16,w=this.i(v)&65535,J=S.i(M)>>>16,nt=S.i(M)&65535;y[2*v+2*M]+=w*nt,N(y,2*v+2*M),y[2*v+2*M+1]+=P*nt,N(y,2*v+2*M+1),y[2*v+2*M+1]+=w*J,N(y,2*v+2*M+1),y[2*v+2*M+2]+=P*J,N(y,2*v+2*M+2)}for(v=0;v<T;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=T;v<2*T;v++)y[v]=0;return new o(y,0)};function N(S,T){for(;(S[T]&65535)!=S[T];)S[T+1]+=S[T]>>>16,S[T]&=65535,T++}function D(S,T){this.g=S,this.h=T}function I(S,T){if(x(T))throw Error("division by zero");if(x(S))return new D(d,d);if(b(S))return T=I(g(S),T),new D(g(T.g),g(T.h));if(b(T))return T=I(S,g(T)),new D(g(T.g),T.h);if(30<S.g.length){if(b(S)||b(T))throw Error("slowDivide_ only works with positive integers.");for(var y=p,v=T;0>=v.l(S);)y=k(y),v=k(v);var M=O(y,1),P=O(v,1);for(v=O(v,2),y=O(y,2);!x(v);){var w=P.add(v);0>=w.l(S)&&(M=M.add(y),P=w),v=O(v,1),y=O(y,1)}return T=m(S,M.j(T)),new D(M,T)}for(M=d;0<=S.l(T);){for(y=Math.max(1,Math.floor(S.m()/T.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),P=u(y),w=P.j(T);b(w)||0<w.l(S);)y-=v,P=u(y),w=P.j(T);x(P)&&(P=p),M=M.add(P),S=m(S,w)}return new D(M,S)}i.A=function(S){return I(this,S).h},i.and=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0;v<T;v++)y[v]=this.i(v)&S.i(v);return new o(y,this.h&S.h)},i.or=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0;v<T;v++)y[v]=this.i(v)|S.i(v);return new o(y,this.h|S.h)},i.xor=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0;v<T;v++)y[v]=this.i(v)^S.i(v);return new o(y,this.h^S.h)};function k(S){for(var T=S.g.length+1,y=[],v=0;v<T;v++)y[v]=S.i(v)<<1|S.i(v-1)>>>31;return new o(y,S.h)}function O(S,T){var y=T>>5;T%=32;for(var v=S.g.length-y,M=[],P=0;P<v;P++)M[P]=0<T?S.i(P+y)>>>T|S.i(P+y+1)<<32-T:S.i(P+y);return new o(M,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Hf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Li=o}).apply(typeof Nh<"u"?Nh:typeof self<"u"?self:typeof window<"u"?window:{});var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gf,Cs,Wf,Ko,jl,Xf,qf,jf;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,E){return a==Array.prototype||a==Object.prototype||(a[f]=E.value),a};function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eo=="object"&&Eo];for(var f=0;f<a.length;++f){var E=a[f];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=e(this);function r(a,f){if(f)t:{var E=n;a=a.split(".");for(var C=0;C<a.length-1;C++){var z=a[C];if(!(z in E))break t;E=E[z]}a=a[a.length-1],C=E[a],f=f(C),f!=C&&f!=null&&t(E,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var E=0,C=!1,z={next:function(){if(!C&&E<a.length){var q=E++;return{value:f(q,a[q]),done:!1}}return C=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}r("Array.prototype.values",function(a){return a||function(){return s(this,function(f,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,E){return a.call.apply(a.bind,arguments)}function d(a,f,E){if(!a)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,C),a.apply(f,z)}}return function(){return a.apply(f,arguments)}}function p(a,f,E){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function _(a,f){var E=Array.prototype.slice.call(arguments,1);return function(){var C=E.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function x(a,f){function E(){}E.prototype=f.prototype,a.aa=f.prototype,a.prototype=new E,a.prototype.constructor=a,a.Qb=function(C,z,q){for(var ut=Array(arguments.length-2),we=2;we<arguments.length;we++)ut[we-2]=arguments[we];return f.prototype[z].apply(C,ut)}}function b(a){const f=a.length;if(0<f){const E=Array(f);for(let C=0;C<f;C++)E[C]=a[C];return E}return[]}function g(a,f){for(let E=1;E<arguments.length;E++){const C=arguments[E];if(c(C)){const z=a.length||0,q=C.length||0;a.length=z+q;for(let ut=0;ut<q;ut++)a[z+ut]=C[ut]}else a.push(C)}}class m{constructor(f,E){this.i=f,this.j=E,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function N(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function I(a){return I[" "](a),a}I[" "]=function(){};var k=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function O(a,f,E){for(const C in a)f.call(E,a[C],C,a)}function S(a,f){for(const E in a)f.call(void 0,a[E],E,a)}function T(a){const f={};for(const E in a)f[E]=a[E];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,f){let E,C;for(let z=1;z<arguments.length;z++){C=arguments[z];for(E in C)a[E]=C[E];for(let q=0;q<y.length;q++)E=y[q],Object.prototype.hasOwnProperty.call(C,E)&&(a[E]=C[E])}}function M(a){var f=1;a=a.split(":");const E=[];for(;0<f&&a.length;)E.push(a.shift()),f--;return a.length&&E.push(a.join(":")),E}function P(a){l.setTimeout(()=>{throw a},0)}function w(){var a=pt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class J{constructor(){this.h=this.g=null}add(f,E){const C=nt.get();C.set(f,E),this.h?this.h.next=C:this.g=C,this.h=C}}var nt=new m(()=>new et,a=>a.reset());class et{constructor(){this.next=this.g=this.h=null}set(f,E){this.h=f,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let it,j=!1,pt=new J,xt=()=>{const a=l.Promise.resolve(void 0);it=()=>{a.then(Lt)}};var Lt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(E){P(E)}var f=nt;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}j=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function jt(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var Z=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const E=()=>{};l.addEventListener("test",E,f),l.removeEventListener("test",E,f)}catch{}return a}();function ct(a,f){if(jt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var E=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(k){t:{try{I(f.nodeName);var z=!0;break t}catch{}z=!1}z||(f=null)}}else E=="mouseover"?f=a.fromElement:E=="mouseout"&&(f=a.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ct.aa.h.call(this)}}x(ct,jt);var Ct={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),Pt=0;function he(a,f,E,C,z){this.listener=a,this.proxy=null,this.src=f,this.type=E,this.capture=!!C,this.ha=z,this.key=++Pt,this.da=this.fa=!1}function Ot(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,f,E,C,z){var q=a.toString();a=this.g[q],a||(a=this.g[q]=[],this.h++);var ut=re(a,f,C,z);return-1<ut?(f=a[ut],E||(f.fa=!1)):(f=new he(f,this.src,q,!!C,z),f.fa=E,a.push(f)),f};function Me(a,f){var E=f.type;if(E in a.g){var C=a.g[E],z=Array.prototype.indexOf.call(C,f,void 0),q;(q=0<=z)&&Array.prototype.splice.call(C,z,1),q&&(Ot(f),a.g[E].length==0&&(delete a.g[E],a.h--))}}function re(a,f,E,C){for(var z=0;z<a.length;++z){var q=a[z];if(!q.da&&q.listener==f&&q.capture==!!E&&q.ha==C)return z}return-1}var U="closure_lm_"+(1e6*Math.random()|0),Be={};function le(a,f,E,C,z){if(Array.isArray(f)){for(var q=0;q<f.length;q++)le(a,f[q],E,C,z);return null}return E=H(E),a&&a[gt]?a.K(f,E,u(C)?!!C.capture:!1,z):ye(a,f,E,!1,C,z)}function ye(a,f,E,C,z,q){if(!f)throw Error("Invalid event type");var ut=u(z)?!!z.capture:!!z,we=L(a);if(we||(a[U]=we=new ve(a)),E=we.add(f,E,C,ut,q),E.proxy)return E;if(C=bt(),E.proxy=C,C.src=a,C.listener=E,a.addEventListener)Z||(z=ut),z===void 0&&(z=!1),a.addEventListener(f.toString(),C,z);else if(a.attachEvent)a.attachEvent(Yt(f.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return E}function bt(){function a(E){return f.call(a.src,a.listener,E)}const f=De;return a}function se(a,f,E,C,z){if(Array.isArray(f))for(var q=0;q<f.length;q++)se(a,f[q],E,C,z);else C=u(C)?!!C.capture:!!C,E=H(E),a&&a[gt]?(a=a.i,f=String(f).toString(),f in a.g&&(q=a.g[f],E=re(q,E,C,z),-1<E&&(Ot(q[E]),Array.prototype.splice.call(q,E,1),q.length==0&&(delete a.g[f],a.h--)))):a&&(a=L(a))&&(f=a.g[f.toString()],a=-1,f&&(a=re(f,E,C,z)),(E=-1<a?f[a]:null)&&Nt(E))}function Nt(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[gt])Me(f.i,a);else{var E=a.type,C=a.proxy;f.removeEventListener?f.removeEventListener(E,C,a.capture):f.detachEvent?f.detachEvent(Yt(E),C):f.addListener&&f.removeListener&&f.removeListener(C),(E=L(f))?(Me(E,a),E.h==0&&(E.src=null,f[U]=null)):Ot(a)}}}function Yt(a){return a in Be?Be[a]:Be[a]="on"+a}function De(a,f){if(a.da)a=!0;else{f=new ct(f,this);var E=a.listener,C=a.ha||a.src;a.fa&&Nt(a),a=E.call(C,f)}return a}function L(a){return a=a[U],a instanceof ve?a:null}var A="__closure_events_fn_"+(1e9*Math.random()>>>0);function H(a){return typeof a=="function"?a:(a[A]||(a[A]=function(f){return a.handleEvent(f)}),a[A])}function $(){Xt.call(this),this.i=new ve(this),this.M=this,this.F=null}x($,Xt),$.prototype[gt]=!0,$.prototype.removeEventListener=function(a,f,E,C){se(this,a,f,E,C)};function K(a,f){var E,C=a.F;if(C)for(E=[];C;C=C.F)E.push(C);if(a=a.M,C=f.type||f,typeof f=="string")f=new jt(f,a);else if(f instanceof jt)f.target=f.target||a;else{var z=f;f=new jt(C,a),v(f,z)}if(z=!0,E)for(var q=E.length-1;0<=q;q--){var ut=f.g=E[q];z=Y(ut,C,!0,f)&&z}if(ut=f.g=a,z=Y(ut,C,!0,f)&&z,z=Y(ut,C,!1,f)&&z,E)for(q=0;q<E.length;q++)ut=f.g=E[q],z=Y(ut,C,!1,f)&&z}$.prototype.N=function(){if($.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var E=a.g[f],C=0;C<E.length;C++)Ot(E[C]);delete a.g[f],a.h--}}this.F=null},$.prototype.K=function(a,f,E,C){return this.i.add(String(a),f,!1,E,C)},$.prototype.L=function(a,f,E,C){return this.i.add(String(a),f,!0,E,C)};function Y(a,f,E,C){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var z=!0,q=0;q<f.length;++q){var ut=f[q];if(ut&&!ut.da&&ut.capture==E){var we=ut.listener,Qe=ut.ha||ut.src;ut.fa&&Me(a.i,ut),z=we.call(Qe,C)!==!1&&z}}return z&&!C.defaultPrevented}function Rt(a,f,E){if(typeof a=="function")E&&(a=p(a,E));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function dt(a){a.g=Rt(()=>{a.g=null,a.i&&(a.i=!1,dt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class wt extends Xt{constructor(f,E){super(),this.m=f,this.l=E,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(a){Xt.call(this),this.h=a,this.g={}}x(At,Xt);var rt=[];function Et(a){O(a.g,function(f,E){this.g.hasOwnProperty(E)&&Nt(f)},a),a.g={}}At.prototype.N=function(){At.aa.N.call(this),Et(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ft=l.JSON.stringify,Vt=l.JSON.parse,ft=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Gt(){}Gt.prototype.h=null;function F(a){return a.h||(a.h=a.i())}function mt(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function St(){jt.call(this,"d")}x(St,jt);function at(){jt.call(this,"c")}x(at,jt);var Q={},Mt=null;function Wt(){return Mt=Mt||new $}Q.La="serverreachability";function Ee(a){jt.call(this,Q.La,a)}x(Ee,jt);function oe(a){const f=Wt();K(f,new Ee(f))}Q.STAT_EVENT="statevent";function pn(a,f){jt.call(this,Q.STAT_EVENT,a),this.stat=f}x(pn,jt);function be(a){const f=Wt();K(f,new pn(f,a))}Q.Ma="timingevent";function ps(a,f){jt.call(this,Q.Ma,a),this.size=f}x(ps,jt);function vi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function ms(a,f,E,C,z,q){a.info(function(){if(a.g)if(q)for(var ut="",we=q.split("&"),Qe=0;Qe<we.length;Qe++){var pe=we[Qe].split("=");if(1<pe.length){var en=pe[0];pe=pe[1];var nn=en.split("_");ut=2<=nn.length&&nn[1]=="type"?ut+(en+"="+pe+"&"):ut+(en+"=redacted&")}}else ut=null;else ut=q;return"XMLHTTP REQ ("+C+") [attempt "+z+"]: "+f+`
`+E+`
`+ut})}function ao(a,f,E,C,z,q,ut){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+z+"]: "+f+`
`+E+`
`+q+" "+ut})}function Zn(a,f,E,C){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+lo(a,E)+(C?" "+C:"")})}function vr(a,f){a.info(function(){return"TIMEOUT: "+f})}xn.prototype.info=function(){};function lo(a,f){if(!a.g)return f;if(!f)return null;try{var E=JSON.parse(f);if(E){for(a=0;a<E.length;a++)if(Array.isArray(E[a])){var C=E[a];if(!(2>C.length)){var z=C[1];if(Array.isArray(z)&&!(1>z.length)){var q=z[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ut=1;ut<z.length;ut++)z[ut]=""}}}}return Ft(E)}catch{return f}}var Jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_s={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yr;function Er(){}x(Er,Gt),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},yr=new Er;function Hn(a,f,E,C){this.j=a,this.i=f,this.l=E,this.R=C||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new co}function co(){this.i=null,this.g="",this.h=!1}var uo={},gs={};function vs(a,f,E){a.L=1,a.v=ze(cn(f)),a.m=E,a.P=!0,R(a,null)}function R(a,f){a.F=Date.now(),W(a),a.A=cn(a.v);var E=a.A,C=a.R;Array.isArray(C)||(C=[String(C)]),eh(E.i,"t",C),a.C=0,E=a.j.J,a.h=new co,a.g=yh(a.j,E?f:null,!a.m),0<a.O&&(a.M=new wt(p(a.Y,a,a.g),a.O)),f=a.U,E=a.g,C=a.ca;var z="readystatechange";Array.isArray(z)||(z&&(rt[0]=z.toString()),z=rt);for(var q=0;q<z.length;q++){var ut=le(E,z[q],C||f.handleEvent,!1,f.h||f);if(!ut)break;f.g[ut.key]=ut}f=a.H?T(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),oe(),ms(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const f=this.M;f&&ei(a)==3?f.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)t:{const nn=ei(this.g);var f=this.g.Ba();const Sr=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||nn!=4||f==7||(f==8||0>=Sr?oe(3):oe(2)),lt(this);var E=this.g.Z();this.X=E;e:if(V(this)){var C=lh(this.g);a="";var z=C.length,q=ei(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vt(this),ht(this);var ut="";break e}this.h.i=new l.TextDecoder}for(f=0;f<z;f++)this.h.h=!0,a+=this.h.i.decode(C[f],{stream:!(q&&f==z-1)});C.length=0,this.h.g+=a,this.C=0,ut=this.h.g}else ut=this.g.oa();if(this.o=E==200,ao(this.i,this.u,this.A,this.l,this.R,nn,E),this.o){if(this.T&&!this.K){e:{if(this.g){var we,Qe=this.g;if((we=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(we)){var pe=we;break e}}pe=null}if(E=pe)Zn(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yt(this,E);else{this.o=!1,this.s=3,be(12),vt(this),ht(this);break t}}if(this.P){E=!0;let Ln;for(;!this.J&&this.C<ut.length;)if(Ln=X(this,ut),Ln==gs){nn==4&&(this.s=4,be(14),E=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ln==uo){this.s=4,be(15),Zn(this.i,this.l,ut,"[Invalid Chunk]"),E=!1;break}else Zn(this.i,this.l,Ln,null),yt(this,Ln);if(V(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||ut.length!=0||this.h.h||(this.s=1,be(16),E=!1),this.o=this.o&&E,!E)Zn(this.i,this.l,ut,"[Invalid Chunked Response]"),vt(this),ht(this);else if(0<ut.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+ut.length),Ja(en),en.M=!0,be(11))}}else Zn(this.i,this.l,ut,null),yt(this,ut);nn==4&&vt(this),this.o&&!this.J&&(nn==4?mh(this.j,this):(this.o=!1,W(this)))}else g_(this.g),E==400&&0<ut.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),vt(this),ht(this)}}}catch{}finally{}};function V(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function X(a,f){var E=a.C,C=f.indexOf(`
`,E);return C==-1?gs:(E=Number(f.substring(E,C)),isNaN(E)?uo:(C+=1,C+E>f.length?gs:(f=f.slice(C,C+E),a.C=C+E,f)))}Hn.prototype.cancel=function(){this.J=!0,vt(this)};function W(a){a.S=Date.now()+a.I,B(a,a.I)}function B(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vi(p(a.ba,a),f)}function lt(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(vr(this.i,this.A),this.L!=2&&(oe(),be(17)),vt(this),this.s=2,ht(this)):B(this,this.S-a)};function ht(a){a.j.G==0||a.J||mh(a.j,a)}function vt(a){lt(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Et(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function yt(a,f){try{var E=a.j;if(E.G!=0&&(E.g==a||de(E.h,a))){if(!a.K&&de(E.h,a)&&E.G==3){try{var C=E.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var z=C;if(z[0]==0){t:if(!E.u){if(E.g)if(E.g.F+3e3<a.F)go(E),mo(E);else break t;Za(E),be(18)}}else E.za=z[1],0<E.za-E.T&&37500>z[2]&&E.F&&E.v==0&&!E.C&&(E.C=vi(p(E.Za,E),6e3));if(1>=te(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Yi(E,11)}else if((a.K||E.g==a)&&go(E),!N(f))for(z=E.Da.g.parse(f),f=0;f<z.length;f++){let pe=z[f];if(E.T=pe[0],pe=pe[1],E.G==2)if(pe[0]=="c"){E.K=pe[1],E.ia=pe[2];const en=pe[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const nn=pe[4];nn!=null&&(E.Aa=nn,E.j.info("SVER="+E.Aa));const Sr=pe[5];Sr!=null&&typeof Sr=="number"&&0<Sr&&(C=1.5*Sr,E.L=C,E.j.info("backChannelRequestTimeoutMs_="+C)),C=E;const Ln=a.g;if(Ln){const yo=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var q=C.h;q.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ae(q,q.h),q.h=null))}if(C.D){const tl=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(C.ya=tl,Kt(C.I,C.D,tl))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-a.F,E.j.info("Handshake RTT: "+E.R+"ms")),C=E;var ut=a;if(C.qa=vh(C,C.J?C.ia:null,C.W),ut.K){Re(C.h,ut);var we=ut,Qe=C.L;Qe&&(we.I=Qe),we.B&&(lt(we),W(we)),C.g=ut}else fh(C);0<E.i.length&&_o(E)}else pe[0]!="stop"&&pe[0]!="close"||Yi(E,7);else E.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Yi(E,7):Qa(E):pe[0]!="noop"&&E.l&&E.l.ta(pe),E.v=0)}}oe(4)}catch{}}var kt=class{constructor(a,f){this.g=a,this.map=f}};function zt(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function It(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function te(a){return a.h?1:a.g?a.g.size:0}function de(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ae(a,f){a.g?a.g.add(f):a.h=f}function Re(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}zt.prototype.cancel=function(){if(this.i=ae(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ae(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const E of a.g.values())f=f.concat(E.D);return f}return b(a.i)}function Ut(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],E=a.length,C=0;C<E;C++)f.push(a[C]);return f}f=[],E=0;for(C in a)f[E++]=a[C];return f}function ke(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var E=0;E<a;E++)f.push(E);return f}f=[],E=0;for(const C in a)f[E++]=C;return f}}}function fe(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var E=ke(a),C=Ut(a),z=C.length,q=0;q<z;q++)f.call(void 0,C[q],E&&E[q],a)}var mn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yi(a,f){if(a){a=a.split("&");for(var E=0;E<a.length;E++){var C=a[E].indexOf("="),z=null;if(0<=C){var q=a[E].substring(0,C);z=a[E].substring(C+1)}else q=a[E];f(q,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Le(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Le){this.h=a.h,ge(this,a.j),this.o=a.o,this.g=a.g,Ke(this,a.s),this.l=a.l;var f=a.i,E=new ys;E.i=f.i,f.g&&(E.g=new Map(f.g),E.h=f.h),un(this,E),this.m=a.m}else a&&(f=String(a).match(mn))?(this.h=!1,ge(this,f[1]||"",!0),this.o=ti(f[2]||""),this.g=ti(f[3]||"",!0),Ke(this,f[4]),this.l=ti(f[5]||"",!0),un(this,f[6]||"",!0),this.m=ti(f[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}Le.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Sn(f,Zu,!0),":");var E=this.g;return(E||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Sn(f,Zu,!0),"@"),a.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&a.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&a.push("/"),a.push(Sn(E,E.charAt(0)=="/"?a_:o_,!0))),(E=this.i.toString())&&a.push("?",E),(E=this.m)&&a.push("#",Sn(E,c_)),a.join("")};function cn(a){return new Le(a)}function ge(a,f,E){a.j=E?ti(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ke(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function un(a,f,E){f instanceof ys?(a.i=f,u_(a.i,a.h)):(E||(f=Sn(f,l_)),a.i=new ys(f,a.h))}function Kt(a,f,E){a.i.set(f,E)}function ze(a){return Kt(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Sn(a,f,E){return typeof a=="string"?(a=encodeURI(a).replace(f,s_),E&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function s_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zu=/[#\/\?@]/g,o_=/[#\?:]/g,a_=/[#\?]/g,l_=/[#\?@]/g,c_=/#/g;function ys(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Ei(a){a.g||(a.g=new Map,a.h=0,a.i&&yi(a.i,function(f,E){a.add(decodeURIComponent(f.replace(/\+/g," ")),E)}))}i=ys.prototype,i.add=function(a,f){Ei(this),this.i=null,a=Tr(this,a);var E=this.g.get(a);return E||this.g.set(a,E=[]),E.push(f),this.h+=1,this};function Ju(a,f){Ei(a),f=Tr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function th(a,f){return Ei(a),f=Tr(a,f),a.g.has(f)}i.forEach=function(a,f){Ei(this),this.g.forEach(function(E,C){E.forEach(function(z){a.call(f,z,C,this)},this)},this)},i.na=function(){Ei(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),E=[];for(let C=0;C<f.length;C++){const z=a[C];for(let q=0;q<z.length;q++)E.push(f[C])}return E},i.V=function(a){Ei(this);let f=[];if(typeof a=="string")th(this,a)&&(f=f.concat(this.g.get(Tr(this,a))));else{a=Array.from(this.g.values());for(let E=0;E<a.length;E++)f=f.concat(a[E])}return f},i.set=function(a,f){return Ei(this),this.i=null,a=Tr(this,a),th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},i.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function eh(a,f,E){Ju(a,f),0<E.length&&(a.i=null,a.g.set(Tr(a,f),b(E)),a.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var E=0;E<f.length;E++){var C=f[E];const q=encodeURIComponent(String(C)),ut=this.V(C);for(C=0;C<ut.length;C++){var z=q;ut[C]!==""&&(z+="="+encodeURIComponent(String(ut[C]))),a.push(z)}}return this.i=a.join("&")};function Tr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function u_(a,f){f&&!a.j&&(Ei(a),a.i=null,a.g.forEach(function(E,C){var z=C.toLowerCase();C!=z&&(Ju(this,C),eh(this,z,E))},a)),a.j=f}function h_(a,f){const E=new xn;if(l.Image){const C=new Image;C.onload=_(Ti,E,"TestLoadImage: loaded",!0,f,C),C.onerror=_(Ti,E,"TestLoadImage: error",!1,f,C),C.onabort=_(Ti,E,"TestLoadImage: abort",!1,f,C),C.ontimeout=_(Ti,E,"TestLoadImage: timeout",!1,f,C),l.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else f(!1)}function d_(a,f){const E=new xn,C=new AbortController,z=setTimeout(()=>{C.abort(),Ti(E,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:C.signal}).then(q=>{clearTimeout(z),q.ok?Ti(E,"TestPingServer: ok",!0,f):Ti(E,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(z),Ti(E,"TestPingServer: error",!1,f)})}function Ti(a,f,E,C,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),C(E)}catch{}}function f_(){this.g=new ft}function p_(a,f,E){const C=E||"";try{fe(a,function(z,q){let ut=z;u(z)&&(ut=Ft(z)),f.push(C+q+"="+encodeURIComponent(ut))})}catch(z){throw f.push(C+"type="+encodeURIComponent("_badmap")),z}}function ho(a){this.l=a.Ub||null,this.j=a.eb||!1}x(ho,Gt),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(a){return function(){return a}}({});function fo(a,f){$.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(fo,$),i=fo.prototype,i.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ts(this)},i.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},i.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}i.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Es(this):Ts(this),this.readyState==3&&nh(this)}},i.Ra=function(a){this.g&&(this.response=this.responseText=a,Es(this))},i.Qa=function(a){this.g&&(this.response=a,Es(this))},i.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ts(a)}i.setRequestHeader=function(a,f){this.u.append(a,f)},i.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var E=f.next();!E.done;)E=E.value,a.push(E[0]+": "+E[1]),E=f.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ih(a){let f="";return O(a,function(E,C){f+=C,f+=":",f+=E,f+=`\r
`}),f}function Ka(a,f,E){t:{for(C in E){var C=!1;break t}C=!0}C||(E=ih(E),typeof a=="string"?E!=null&&encodeURIComponent(String(E)):Kt(a,f,E))}function Pe(a){$.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Pe,$);var m_=/^https?$/i,__=["POST","PUT"];i=Pe.prototype,i.Ha=function(a){this.J=a},i.ea=function(a,f,E,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yr.g(),this.v=this.o?F(this.o):F(yr),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(q){rh(this,q);return}if(a=E||"",E=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var z in C)E.set(z,C[z]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const q of C.keys())E.set(q,C.get(q));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(E.keys()).find(q=>q.toLowerCase()=="content-type"),z=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(__,f,void 0))||C||z||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ut]of E)this.g.setRequestHeader(q,ut);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ah(this),this.u=!0,this.g.send(a),this.u=!1}catch(q){rh(this,q)}};function rh(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,sh(a),po(a)}function sh(a){a.A||(a.A=!0,K(a,"complete"),K(a,"error"))}i.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,K(this,"complete"),K(this,"abort"),po(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),Pe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?oh(this):this.bb())},i.bb=function(){oh(this)};function oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ei(a)!=4||a.Z()!=2)){if(a.u&&ei(a)==4)Rt(a.Ea,0,a);else if(K(a,"readystatechange"),ei(a)==4){a.h=!1;try{const ut=a.Z();t:switch(ut){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var E;if(!(E=f)){var C;if(C=ut===0){var z=String(a.D).match(mn)[1]||null;!z&&l.self&&l.self.location&&(z=l.self.location.protocol.slice(0,-1)),C=!m_.test(z?z.toLowerCase():"")}E=C}if(E)K(a,"complete"),K(a,"success");else{a.m=6;try{var q=2<ei(a)?a.g.statusText:""}catch{q=""}a.l=q+" ["+a.Z()+"]",sh(a)}}finally{po(a)}}}}function po(a,f){if(a.g){ah(a);const E=a.g,C=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||K(a,"ready");try{E.onreadystatechange=C}catch{}}}function ah(a){a.I&&(l.clearTimeout(a.I),a.I=null)}i.isActive=function(){return!!this.g};function ei(a){return a.g?a.g.readyState:0}i.Z=function(){try{return 2<ei(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Vt(f)}};function lh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function g_(a){const f={};a=(a.g&&2<=ei(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(N(a[C]))continue;var E=M(a[C]);const z=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const q=f[z]||[];f[z]=q,q.push(E)}S(f,function(C){return C.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(a,f,E){return E&&E.internalChannelParams&&E.internalChannelParams[a]||f}function ch(a){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,a),this.cb=xs("retryDelaySeedMs",1e4,a),this.Wa=xs("forwardChannelMaxRetries",2,a),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zt(a&&a.concurrentRequestLimit),this.Da=new f_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ch.prototype,i.la=8,i.G=1,i.connect=function(a,f,E,C){be(0),this.W=a,this.H=f||{},E&&C!==void 0&&(this.H.OSID=E,this.H.OAID=C),this.F=this.X,this.I=vh(this,null,this.W),_o(this)};function Qa(a){if(uh(a),a.G==3){var f=a.U++,E=cn(a.I);if(Kt(E,"SID",a.K),Kt(E,"RID",f),Kt(E,"TYPE","terminate"),Ss(a,E),f=new Hn(a,a.j,f),f.L=2,f.v=ze(cn(E)),E=!1,l.navigator&&l.navigator.sendBeacon)try{E=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!E&&l.Image&&(new Image().src=f.v,E=!0),E||(f.g=yh(f.j,null),f.g.ea(f.v)),f.F=Date.now(),W(f)}gh(a)}function mo(a){a.g&&(Ja(a),a.g.cancel(),a.g=null)}function uh(a){mo(a),a.u&&(l.clearTimeout(a.u),a.u=null),go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _o(a){if(!It(a.h)&&!a.s){a.s=!0;var f=a.Ga;it||xt(),j||(it(),j=!0),pt.add(f,a),a.B=0}}function v_(a,f){return te(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vi(p(a.Ga,a,f),_h(a,a.B)),a.B++,!0)}i.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const z=new Hn(this,this.j,a);let q=this.o;if(this.S&&(q?(q=T(q),v(q,this.S)):q=this.S),this.m!==null||this.O||(z.H=q,q=null),this.P)t:{for(var f=0,E=0;E<this.i.length;E++){e:{var C=this.i[E];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break e}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=E;break t}if(f===4096||E===this.i.length-1){f=E+1;break t}}f=1e3}else f=1e3;f=dh(this,z,f),E=cn(this.I),Kt(E,"RID",a),Kt(E,"CVER",22),this.D&&Kt(E,"X-HTTP-Session-Id",this.D),Ss(this,E),q&&(this.O?f="headers="+encodeURIComponent(String(ih(q)))+"&"+f:this.m&&Ka(E,this.m,q)),Ae(this.h,z),this.Ua&&Kt(E,"TYPE","init"),this.P?(Kt(E,"$req",f),Kt(E,"SID","null"),z.T=!0,vs(z,E,null)):vs(z,E,f),this.G=2}}else this.G==3&&(a?hh(this,a):this.i.length==0||It(this.h)||hh(this))};function hh(a,f){var E;f?E=f.l:E=a.U++;const C=cn(a.I);Kt(C,"SID",a.K),Kt(C,"RID",E),Kt(C,"AID",a.T),Ss(a,C),a.m&&a.o&&Ka(C,a.m,a.o),E=new Hn(a,a.j,E,a.B+1),a.m===null&&(E.H=a.o),f&&(a.i=f.D.concat(a.i)),f=dh(a,E,1e3),E.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ae(a.h,E),vs(E,C,f)}function Ss(a,f){a.H&&O(a.H,function(E,C){Kt(f,C,E)}),a.l&&fe({},function(E,C){Kt(f,C,E)})}function dh(a,f,E){E=Math.min(a.i.length,E);var C=a.l?p(a.l.Na,a.l,a):null;t:{var z=a.i;let q=-1;for(;;){const ut=["count="+E];q==-1?0<E?(q=z[0].g,ut.push("ofs="+q)):q=0:ut.push("ofs="+q);let we=!0;for(let Qe=0;Qe<E;Qe++){let pe=z[Qe].g;const en=z[Qe].map;if(pe-=q,0>pe)q=Math.max(0,z[Qe].g-100),we=!1;else try{p_(en,ut,"req"+pe+"_")}catch{C&&C(en)}}if(we){C=ut.join("&");break t}}}return a=a.i.splice(0,E),f.D=a,C}function fh(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;it||xt(),j||(it(),j=!0),pt.add(f,a),a.v=0}}function Za(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vi(p(a.Fa,a),_h(a,a.v)),a.v++,!0)}i.Fa=function(){if(this.u=null,ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vi(p(this.ab,this),a)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),mo(this),ph(this))};function Ja(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ph(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=cn(a.qa);Kt(f,"RID","rpc"),Kt(f,"SID",a.K),Kt(f,"AID",a.T),Kt(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Kt(f,"TO",a.ja),Kt(f,"TYPE","xmlhttp"),Ss(a,f),a.m&&a.o&&Ka(f,a.m,a.o),a.L&&(a.g.I=a.L);var E=a.g;a=a.ia,E.L=1,E.v=ze(cn(f)),E.m=null,E.P=!0,R(E,a)}i.Za=function(){this.C!=null&&(this.C=null,mo(this),Za(this),be(19))};function go(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function mh(a,f){var E=null;if(a.g==f){go(a),Ja(a),a.g=null;var C=2}else if(de(a.h,f))E=f.D,Re(a.h,f),C=1;else return;if(a.G!=0){if(f.o)if(C==1){E=f.m?f.m.length:0,f=Date.now()-f.F;var z=a.B;C=Wt(),K(C,new ps(C,E)),_o(a)}else fh(a);else if(z=f.s,z==3||z==0&&0<f.X||!(C==1&&v_(a,f)||C==2&&Za(a)))switch(E&&0<E.length&&(f=a.h,f.i=f.i.concat(E)),z){case 1:Yi(a,5);break;case 4:Yi(a,10);break;case 3:Yi(a,6);break;default:Yi(a,2)}}}function _h(a,f){let E=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(E*=2),E*f}function Yi(a,f){if(a.j.info("Error code "+f),f==2){var E=p(a.fb,a),C=a.Xa;const z=!C;C=new Le(C||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ge(C,"https"),ze(C),z?h_(C.toString(),E):d_(C.toString(),E)}else be(2);a.G=0,a.l&&a.l.sa(f),gh(a),uh(a)}i.fb=function(a){a?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function gh(a){if(a.G=0,a.ka=[],a.l){const f=ae(a.h);(f.length!=0||a.i.length!=0)&&(g(a.ka,f),g(a.ka,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.ra()}}function vh(a,f,E){var C=E instanceof Le?cn(E):new Le(E);if(C.g!="")f&&(C.g=f+"."+C.g),Ke(C,C.s);else{var z=l.location;C=z.protocol,f=f?f+"."+z.hostname:z.hostname,z=+z.port;var q=new Le(null);C&&ge(q,C),f&&(q.g=f),z&&Ke(q,z),E&&(q.l=E),C=q}return E=a.D,f=a.ya,E&&f&&Kt(C,E,f),Kt(C,"VER",a.la),Ss(a,C),C}function yh(a,f,E){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Pe(new ho({eb:E})):new Pe(a.pa),f.Ha(a.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eh(){}i=Eh.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function vo(){}vo.prototype.g=function(a,f){return new Mn(a,f)};function Mn(a,f){$.call(this),this.g=new ch(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!N(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!N(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new xr(this)}x(Mn,$),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){Qa(this.g)},Mn.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var E={};E.__data__=a,a=E}else this.u&&(E={},E.__data__=Ft(a),a=E);f.i.push(new kt(f.Ya++,a)),f.G==3&&_o(f)},Mn.prototype.N=function(){this.g.l=null,delete this.j,Qa(this.g),delete this.g,Mn.aa.N.call(this)};function Th(a){St.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){t:{for(const E in f){a=E;break t}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}x(Th,St);function xh(){at.call(this),this.status=1}x(xh,at);function xr(a){this.g=a}x(xr,Eh),xr.prototype.ua=function(){K(this.g,"a")},xr.prototype.ta=function(a){K(this.g,new Th(a))},xr.prototype.sa=function(a){K(this.g,new xh)},xr.prototype.ra=function(){K(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,jf=function(){return new vo},qf=function(){return Wt()},Xf=Q,jl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jn.NO_ERROR=0,Jn.TIMEOUT=8,Jn.HTTP_ERROR=6,Ko=Jn,_s.COMPLETE="complete",Wf=_s,mt.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",$.prototype.listen=$.prototype.K,Cs=mt,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,Gf=Pe}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});const Uh="@firebase/firestore",Oh="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Of("@firebase/firestore");function Vr(){return cr.logLevel}function Tt(i,...t){if(cr.logLevel<=ue.DEBUG){const e=t.map(su);cr.debug(`Firestore (${cs}): ${i}`,...e)}}function pi(i,...t){if(cr.logLevel<=ue.ERROR){const e=t.map(su);cr.error(`Firestore (${cs}): ${i}`,...e)}}function Kr(i,...t){if(cr.logLevel<=ue.WARN){const e=t.map(su);cr.warn(`Firestore (${cs}): ${i}`,...e)}}function su(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(i,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,$f(i,n,e)}function $f(i,t,e){let n=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw pi(n),new Error(n)}function _e(i,t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,i||$f(t,r,n)}function $t(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Dt extends ls{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(an.UNAUTHENTICATED))}shutdown(){}}class sv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ov{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){_e(this.o===void 0,42304);let n=this.i;const r=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ni,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{Tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ni)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(Tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(_e(typeof n.accessToken=="string",31837,{l:n}),new Yf(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _e(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class av{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lv{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new av(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cv{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zg(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){_e(this.o===void 0,3512);const n=s=>{s.error!=null&&Tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Tt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{Tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Fh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(_e(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Fh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=uv(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function Jt(i,t){return i<t?-1:i>t?1:0}function $l(i,t){let e=0;for(;e<i.length&&e<t.length;){const n=i.codePointAt(e),r=t.codePointAt(e);if(n!==r){if(n<128&&r<128)return Jt(n,r);{const s=Kf(),o=hv(s.encode(Vh(i,e)),s.encode(Vh(t,e)));return o!==0?o:Jt(n,r)}}e+=n>65535?2:1}return Jt(i.length,t.length)}function Vh(i,t){return i.codePointAt(t)>65535?i.substring(t,t+2):i.substring(t,t+1)}function hv(i,t){for(let e=0;e<i.length&&e<t.length;++e)if(i[e]!==t[e])return Jt(i[e],t[e]);return Jt(i.length,t.length)}function Qr(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=-62135596800,kh=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(t){return We.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*kh);return new We(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Dt(ot.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Dt(ot.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Bh)throw new Dt(ot.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Dt(ot.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kh}_compareTo(t){return this.seconds===t.seconds?Jt(this.nanoseconds,t.nanoseconds):Jt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Bh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{static fromTimestamp(t){return new qt(t)}static min(){return new qt(new We(0,0))}static max(){return new qt(new We(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="__name__";class Gn{constructor(t,e,n){e===void 0?e=0:e>t.length&&Ht(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&Ht(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Gn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=Gn.compareSegments(t.get(r),e.get(r));if(s!==0)return s}return Jt(t.length,e.length)}static compareSegments(t,e){const n=Gn.isNumericId(t),r=Gn.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Gn.extractNumericId(t).compare(Gn.extractNumericId(e)):$l(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Li.fromString(t.substring(4,t.length-2))}}class Ce extends Gn{construct(t,e,n){return new Ce(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Dt(ot.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Ce(e)}static emptyPath(){return new Ce([])}}const dv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Gn{construct(t,e,n){return new Je(t,e,n)}static isValidIdentifier(t){return dv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zh}static keyField(){return new Je([zh])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new Dt(ot.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new Dt(ot.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Dt(ot.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(n+=l,r++):(s(),r++)}if(s(),o)throw new Dt(ot.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Je(e)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.path=t}static fromPath(t){return new Bt(Ce.fromString(t))}static fromName(t){return new Bt(Ce.fromString(t).popFirst(5))}static empty(){return new Bt(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ce.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ce.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bt(new Ce(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=-1;function fv(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=qt.fromTimestamp(n===1e9?new We(e+1,0):new We(e,n));return new Vi(r,Bt.empty(),t)}function pv(i){return new Vi(i.readTime,i.key,Hs)}class Vi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Vi(qt.min(),Bt.empty(),Hs)}static max(){return new Vi(qt.max(),Bt.empty(),Hs)}}function mv(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Bt.comparator(i.documentKey,t.documentKey),e!==0?e:Jt(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(i){if(i.code!==ot.FAILED_PRECONDITION||i.message!==_v)throw i;Tt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ht(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new tt((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof tt?e:tt.resolve(e)}catch(e){return tt.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):tt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):tt.reject(e)}static resolve(t){return new tt((e,n)=>{e(t)})}static reject(t){return new tt((e,n)=>{n(t)})}static waitFor(t){return new tt((e,n)=>{let r=0,s=0,o=!1;t.forEach(l=>{++r,l.next(()=>{++s,o&&s===r&&e()},c=>n(c))}),o=!0,s===r&&e()})}static or(t){let e=tt.resolve(!1);for(const n of t)e=e.next(r=>r?tt.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new tt((n,r)=>{const s=t.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(h=>{o[u]=h,++l,l===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new tt((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function vv(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function hs(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Ra.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=-1;function Ca(i){return i==null}function fa(i){return i===0&&1/i==-1/0}function yv(i){return typeof i=="number"&&Number.isInteger(i)&&!fa(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="";function Ev(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=Hh(t)),t=Tv(i.get(e),t);return Hh(t)}function Tv(i,t){let e=t;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":e+="";break;case Zf:e+="";break;default:e+=s}}return e}function Hh(i){return i+Zf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function qi(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Jf(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.comparator=t,this.root=e||Ze.EMPTY}insert(t,e){return new Ie(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(t){return new Ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new To(this.root,t,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new To(this.root,t,this.comparator,!0)}}class To{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ze{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??Ze.RED,this.left=r??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ze(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return Ze.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ht(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ht(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Ht(27949);return t+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Ht(57766)}get value(){throw Ht(16141)}get color(){throw Ht(16727)}get left(){throw Ht(29726)}get right(){throw Ht(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.comparator=t,this.data=new Ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wh(this.data.getIterator())}getIteratorFrom(t){return new Wh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Xe)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Xe(this.comparator);return e.data=t,e}}class Wh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.fields=t,t.sort(Je.comparator)}static empty(){return new Rn([])}unionWith(t){let e=new Xe(Je.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qr(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tp("Invalid base64 string: "+s):s}}(t);return new tn(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new tn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Jt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const xv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bi(i){if(_e(!!i,39018),typeof i=="string"){let t=0;const e=xv.exec(i);if(_e(!!e,46558,{timestamp:i}),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Ne(i.seconds),nanos:Ne(i.nanos)}}function Ne(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ki(i){return typeof i=="string"?tn.fromBase64String(i):tn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="server_timestamp",np="__type__",ip="__previous_value__",rp="__local_write_time__";function au(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[np])===null||e===void 0?void 0:e.stringValue)===ep}function Ia(i){const t=i.mapValue.fields[ip];return au(t)?Ia(t):t}function Gs(i){const t=Bi(i.mapValue.fields[rp].timestampValue);return new We(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(t,e,n,r,s,o,l,c,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const pa="(default)";class Ws{constructor(t,e){this.projectId=t,this.database=e||pa}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database===pa}isEqual(t){return t instanceof Ws&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="__type__",Mv="__max__",xo={mapValue:{}},op="__vector__",ma="value";function zi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?au(i)?4:wv(i)?9007199254740991:Av(i)?10:11:Ht(28295,{value:i})}function Kn(i,t){if(i===t)return!0;const e=zi(i);if(e!==zi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Gs(i).isEqual(Gs(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Bi(r.timestampValue),l=Bi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return ki(r.bytesValue).isEqual(ki(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Ne(r.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ne(r.integerValue)===Ne(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Ne(r.doubleValue),l=Ne(s.doubleValue);return o===l?fa(o)===fa(l):isNaN(o)&&isNaN(l)}return!1}(i,t);case 9:return Qr(i.arrayValue.values||[],t.arrayValue.values||[],Kn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},l=s.mapValue.fields||{};if(Gh(o)!==Gh(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Kn(o[c],l[c])))return!1;return!0}(i,t);default:return Ht(52216,{left:i})}}function Xs(i,t){return(i.values||[]).find(e=>Kn(e,t))!==void 0}function Zr(i,t){if(i===t)return 0;const e=zi(i),n=zi(t);if(e!==n)return Jt(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return Jt(i.booleanValue,t.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),c=Ne(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(i,t);case 3:return Xh(i.timestampValue,t.timestampValue);case 4:return Xh(Gs(i),Gs(t));case 5:return $l(i.stringValue,t.stringValue);case 6:return function(s,o){const l=ki(s),c=ki(o);return l.compareTo(c)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Jt(l[u],c[u]);if(h!==0)return h}return Jt(l.length,c.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const l=Jt(Ne(s.latitude),Ne(o.latitude));return l!==0?l:Jt(Ne(s.longitude),Ne(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return qh(i.arrayValue,t.arrayValue);case 10:return function(s,o){var l,c,u,h;const d=s.fields||{},p=o.fields||{},_=(l=d[ma])===null||l===void 0?void 0:l.arrayValue,x=(c=p[ma])===null||c===void 0?void 0:c.arrayValue,b=Jt(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:qh(_,x)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===xo.mapValue&&o===xo.mapValue)return 0;if(s===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=$l(c[d],h[d]);if(p!==0)return p;const _=Zr(l[c[d]],u[h[d]]);if(_!==0)return _}return Jt(c.length,h.length)}(i.mapValue,t.mapValue);default:throw Ht(23264,{Pe:e})}}function Xh(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return Jt(i,t);const e=Bi(i),n=Bi(t),r=Jt(e.seconds,n.seconds);return r!==0?r:Jt(e.nanos,n.nanos)}function qh(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=Zr(e[r],n[r]);if(s)return s}return Jt(e.length,n.length)}function Jr(i){return Yl(i)}function Yl(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=Bi(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ki(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Bt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=Yl(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${Yl(e.fields[o])}`;return r+"}"}(i.mapValue):Ht(61005,{value:i})}function Qo(i){switch(zi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ia(i);return t?16+Qo(t):16;case 5:return 2*i.stringValue.length;case 6:return ki(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,s)=>r+Qo(s),0)}(i.arrayValue);case 10:case 11:return function(n){let r=0;return qi(n.fields,(s,o)=>{r+=s.length+Qo(o)}),r}(i.mapValue);default:throw Ht(13486,{value:i})}}function Kl(i){return!!i&&"integerValue"in i}function lu(i){return!!i&&"arrayValue"in i}function jh(i){return!!i&&"nullValue"in i}function $h(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Zo(i){return!!i&&"mapValue"in i}function Av(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[sp])===null||e===void 0?void 0:e.stringValue)===op}function Us(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return qi(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Us(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Us(i.arrayValue.values[e]);return t}return Object.assign({},i)}function wv(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Mv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.value=t}static empty(){return new En({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Us(e)}setAll(t){let e=Je.emptyPath(),n={},r=[];t.forEach((o,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,n,r),n={},r=[],e=l.popLast()}o?n[l.lastSegment()]=Us(o):r.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Zo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Zo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){qi(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new En(Us(this.value))}}function ap(i){const t=[];return qi(i.fields,(e,n)=>{const r=new Je([e]);if(Zo(n)){const s=ap(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new Rn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,r,s,o,l){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new ln(t,0,qt.min(),qt.min(),qt.min(),En.empty(),0)}static newFoundDocument(t,e,n,r){return new ln(t,1,e,qt.min(),n,r,0)}static newNoDocument(t,e){return new ln(t,2,e,qt.min(),qt.min(),En.empty(),0)}static newUnknownDocument(t,e){return new ln(t,3,e,qt.min(),qt.min(),En.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(qt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ln&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e){this.position=t,this.inclusive=e}}function Yh(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Bt.comparator(Bt.fromName(o.referenceValue),e.key):n=Zr(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Kh(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Kn(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e="asc"){this.field=t,this.dir=e}}function bv(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{}class Ge extends lp{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Cv(t,e,n):e==="array-contains"?new Dv(t,n):e==="in"?new Lv(t,n):e==="not-in"?new Nv(t,n):e==="array-contains-any"?new Uv(t,n):new Ge(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Iv(t,n):new Pv(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Zr(e,this.value)):e!==null&&zi(this.value)===zi(e)&&this.matchesComparison(Zr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ht(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends lp{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Qn(t,e)}matches(t){return cp(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function cp(i){return i.op==="and"}function up(i){return Rv(i)&&cp(i)}function Rv(i){for(const t of i.filters)if(t instanceof Qn)return!1;return!0}function Ql(i){if(i instanceof Ge)return i.field.canonicalString()+i.op.toString()+Jr(i.value);if(up(i))return i.filters.map(t=>Ql(t)).join(",");{const t=i.filters.map(e=>Ql(e)).join(",");return`${i.op}(${t})`}}function hp(i,t){return i instanceof Ge?function(n,r){return r instanceof Ge&&n.op===r.op&&n.field.isEqual(r.field)&&Kn(n.value,r.value)}(i,t):i instanceof Qn?function(n,r){return r instanceof Qn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,l)=>s&&hp(o,r.filters[l]),!0):!1}(i,t):void Ht(19439)}function dp(i){return i instanceof Ge?function(e){return`${e.field.canonicalString()} ${e.op} ${Jr(e.value)}`}(i):i instanceof Qn?function(e){return e.op.toString()+" {"+e.getFilters().map(dp).join(" ,")+"}"}(i):"Filter"}class Cv extends Ge{constructor(t,e,n){super(t,e,n),this.key=Bt.fromName(n.referenceValue)}matches(t){const e=Bt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Iv extends Ge{constructor(t,e){super(t,"in",e),this.keys=fp("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pv extends Ge{constructor(t,e){super(t,"not-in",e),this.keys=fp("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fp(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>Bt.fromName(n.referenceValue))}class Dv extends Ge{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lu(e)&&Xs(e.arrayValue,this.value)}}class Lv extends Ge{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Xs(this.value.arrayValue,e)}}class Nv extends Ge{constructor(t,e){super(t,"not-in",e)}matches(t){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Xs(this.value.arrayValue,e)}}class Uv extends Ge{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Xs(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t,e=null,n=[],r=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=l,this.Ie=null}}function Qh(i,t=null,e=[],n=[],r=null,s=null,o=null){return new Ov(i,t,e,n,r,s,o)}function cu(i){const t=$t(i);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Ql(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ca(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Jr(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Jr(n)).join(",")),t.Ie=e}return t.Ie}function uu(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!bv(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!hp(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Kh(i.startAt,t.startAt)&&Kh(i.endAt,t.endAt)}function Zl(i){return Bt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e=null,n=[],r=[],s=null,o="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Fv(i,t,e,n,r,s,o,l){return new Pa(i,t,e,n,r,s,o,l)}function Da(i){return new Pa(i)}function Zh(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Vv(i){return i.collectionGroup!==null}function Os(i){const t=$t(i);if(t.Ee===null){t.Ee=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ee.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(Je.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ee.push(new ga(s,n))}),e.has(Je.keyField().canonicalString())||t.Ee.push(new ga(Je.keyField(),n))}return t.Ee}function qn(i){const t=$t(i);return t.de||(t.de=Bv(t,Os(i))),t.de}function Bv(i,t){if(i.limitType==="F")return Qh(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new ga(r.field,s)});const e=i.endAt?new _a(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new _a(i.startAt.position,i.startAt.inclusive):null;return Qh(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Jl(i,t,e){return new Pa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function La(i,t){return uu(qn(i),qn(t))&&i.limitType===t.limitType}function pp(i){return`${cu(qn(i))}|lt:${i.limitType}`}function Br(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>dp(r)).join(", ")}]`),Ca(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),`Target(${n})`}(qn(i))}; limitType=${i.limitType})`}function Na(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Bt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Os(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,l,c){const u=Yh(o,l,c);return o.inclusive?u<=0:u<0}(n.startAt,Os(n),r)||n.endAt&&!function(o,l,c){const u=Yh(o,l,c);return o.inclusive?u>=0:u>0}(n.endAt,Os(n),r))}(i,t)}function kv(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function mp(i){return(t,e)=>{let n=!1;for(const r of Os(i)){const s=zv(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function zv(i,t,e){const n=i.field.isKeyField()?Bt.comparator(t.key,e.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?Zr(c,u):Ht(42886)}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return Ht(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){qi(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return Jf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Ie(Bt.comparator);function mi(){return Hv}const _p=new Ie(Bt.comparator);function Is(...i){let t=_p;for(const e of i)t=t.insert(e.key,e);return t}function gp(i){let t=_p;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function or(){return Fs()}function vp(){return Fs()}function Fs(){return new mr(i=>i.toString(),(i,t)=>i.isEqual(t))}const Gv=new Ie(Bt.comparator),Wv=new Xe(Bt.comparator);function ie(...i){let t=Wv;for(const e of i)t=t.add(e);return t}const Xv=new Xe(Jt);function qv(){return Xv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(t)?"-0":t}}function yp(i){return{integerValue:""+i}}function jv(i,t){return yv(t)?yp(t):hu(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this._=void 0}}function $v(i,t,e){return i instanceof va?function(r,s){const o={fields:{[np]:{stringValue:ep},[rp]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&au(s)&&(s=Ia(s)),s&&(o.fields[ip]=s),{mapValue:o}}(e,t):i instanceof qs?Tp(i,t):i instanceof js?xp(i,t):function(r,s){const o=Ep(r,s),l=Jh(o)+Jh(r.Re);return Kl(o)&&Kl(r.Re)?yp(l):hu(r.serializer,l)}(i,t)}function Yv(i,t,e){return i instanceof qs?Tp(i,t):i instanceof js?xp(i,t):e}function Ep(i,t){return i instanceof ya?function(n){return Kl(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class va extends Ua{}class qs extends Ua{constructor(t){super(),this.elements=t}}function Tp(i,t){const e=Sp(t);for(const n of i.elements)e.some(r=>Kn(r,n))||e.push(n);return{arrayValue:{values:e}}}class js extends Ua{constructor(t){super(),this.elements=t}}function xp(i,t){let e=Sp(t);for(const n of i.elements)e=e.filter(r=>!Kn(r,n));return{arrayValue:{values:e}}}class ya extends Ua{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Jh(i){return Ne(i.integerValue||i.doubleValue)}function Sp(i){return lu(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Kv(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof qs&&r instanceof qs||n instanceof js&&r instanceof js?Qr(n.elements,r.elements,Kn):n instanceof ya&&r instanceof ya?Kn(n.Re,r.Re):n instanceof va&&r instanceof va}(i.transform,t.transform)}class Qv{constructor(t,e){this.version=t,this.transformResults=e}}class Bn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bn}static exists(t){return new Bn(void 0,t)}static updateTime(t){return new Bn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jo(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Oa{}function Mp(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new wp(i.key,Bn.none()):new Js(i.key,i.data,Bn.none());{const e=i.data,n=En.empty();let r=new Xe(Je.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new ji(i.key,n,new Rn(r.toArray()),Bn.none())}}function Zv(i,t,e){i instanceof Js?function(r,s,o){const l=r.value.clone(),c=ed(r.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):i instanceof ji?function(r,s,o){if(!Jo(r.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ed(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ap(r)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Vs(i,t,e,n){return i instanceof Js?function(s,o,l,c){if(!Jo(s.precondition,o))return l;const u=s.value.clone(),h=nd(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(i,t,e,n):i instanceof ji?function(s,o,l,c){if(!Jo(s.precondition,o))return l;const u=nd(s.fieldTransforms,c,o),h=o.data;return h.setAll(Ap(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(i,t,e,n):function(s,o,l){return Jo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(i,t,e)}function Jv(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=Ep(n.transform,r||null);s!=null&&(e===null&&(e=En.empty()),e.set(n.field,s))}return e||null}function td(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qr(n,r,(s,o)=>Kv(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class Js extends Oa{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ji extends Oa{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ap(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function ed(i,t,e){const n=new Map;_e(i.length===e.length,32656,{Ve:e.length,me:i.length});for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,l=t.data.field(s.field);n.set(s.field,Yv(o,l,e[r]))}return n}function nd(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,$v(s,o,t))}return n}class wp extends Oa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ty extends Oa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&Zv(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Vs(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Vs(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=vp();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=e.has(r.key)?null:l;const c=Mp(o,l);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(qt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ie())}isEqual(t){return this.batchId===t.batchId&&Qr(this.mutations,t.mutations,(e,n)=>td(e,n))&&Qr(this.baseMutations,t.baseMutations,(e,n)=>td(e,n))}}class du{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){_e(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let r=function(){return Gv}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new du(t,e,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ce;function ry(i){switch(i){case ot.OK:return Ht(64938);case ot.CANCELLED:case ot.UNKNOWN:case ot.DEADLINE_EXCEEDED:case ot.RESOURCE_EXHAUSTED:case ot.INTERNAL:case ot.UNAVAILABLE:case ot.UNAUTHENTICATED:return!1;case ot.INVALID_ARGUMENT:case ot.NOT_FOUND:case ot.ALREADY_EXISTS:case ot.PERMISSION_DENIED:case ot.FAILED_PRECONDITION:case ot.ABORTED:case ot.OUT_OF_RANGE:case ot.UNIMPLEMENTED:case ot.DATA_LOSS:return!0;default:return Ht(15467,{code:i})}}function bp(i){if(i===void 0)return pi("GRPC error has no .code"),ot.UNKNOWN;switch(i){case Fe.OK:return ot.OK;case Fe.CANCELLED:return ot.CANCELLED;case Fe.UNKNOWN:return ot.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return ot.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return ot.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return ot.INTERNAL;case Fe.UNAVAILABLE:return ot.UNAVAILABLE;case Fe.UNAUTHENTICATED:return ot.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return ot.INVALID_ARGUMENT;case Fe.NOT_FOUND:return ot.NOT_FOUND;case Fe.ALREADY_EXISTS:return ot.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return ot.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return ot.FAILED_PRECONDITION;case Fe.ABORTED:return ot.ABORTED;case Fe.OUT_OF_RANGE:return ot.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return ot.UNIMPLEMENTED;case Fe.DATA_LOSS:return ot.DATA_LOSS;default:return Ht(39323,{code:i})}}(ce=Fe||(Fe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Li([4294967295,4294967295],0);function id(i){const t=Kf().encode(i),e=new Hf;return e.update(t),new Uint8Array(e.digest())}function rd(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Li([e,n],0),new Li([r,s],0)]}class fu{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ps(`Invalid padding: ${e}`);if(n<0)throw new Ps(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Li.fromNumber(this.pe)}we(t,e,n){let r=t.add(e.multiply(Li.fromNumber(n)));return r.compare(sy)===1&&(r=new Li([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=id(t),[n,r]=rd(e);for(let s=0;s<this.hashCount;s++){const o=this.we(n,r,s);if(!this.Se(o))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new fu(s,r,e);return n.forEach(l=>o.insert(l)),o}insert(t){if(this.pe===0)return;const e=id(t),[n,r]=rd(e);for(let s=0;s<this.hashCount;s++){const o=this.we(n,r,s);this.be(o)}}be(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,to.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Fa(qt.min(),r,new Ie(Jt),mi(),ie())}}class to{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new to(n,e,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e,n,r){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=r}}class Rp{constructor(t,e){this.targetId=t,this.Ce=e}}class Cp{constructor(t,e,n=tn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class sd{constructor(){this.Fe=0,this.Me=od(),this.xe=tn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=ie(),e=ie(),n=ie();return this.Me.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ht(38017,{changeType:s})}}),new to(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=od()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,_e(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class oy{constructor(t){this.ze=t,this.je=new Map,this.He=mi(),this.Je=So(),this.Ye=So(),this.Ze=new Ie(Jt)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:Ht(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,r)=>{this.it(r)&&e(r)})}ot(t){const e=t.targetId,n=t.Ce.count,r=this._t(e);if(r){const s=r.target;if(Zl(s))if(n===0){const o=new Bt(s.path);this.tt(e,o,ln.newNoDocument(o,qt.min()))}else _e(n===1,20013,{expectedCount:n});else{const o=this.ut(e);if(o!==n){const l=this.ct(t),c=l?this.lt(l,t,o):1;if(c!==0){this.st(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,u)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let o,l;try{o=ki(n).toUint8Array()}catch(c){if(c instanceof tp)return Kr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new fu(o,r,s)}catch(c){return Kr(c instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let r=0;return n.forEach(s=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,s,null),r++)}),r}It(t){const e=new Map;this.je.forEach((s,o)=>{const l=this._t(o);if(l){if(s.current&&Zl(l.target)){const c=new Bt(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ln.newNoDocument(c,t))}s.Le&&(e.set(o,s.qe()),s.Qe())}});let n=ie();this.Ye.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.He.forEach((s,o)=>o.setReadTime(t));const r=new Fa(t,e,this.Ze,this.He,n);return this.He=mi(),this.Je=So(),this.Ye=So(),this.Ze=new Ie(Jt),r}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const r=this.rt(t);this.dt(t,e)?r.$e(e,1):r.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new sd,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new Xe(Jt),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new Xe(Jt),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||Tt("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new sd),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function So(){return new Ie(Bt.comparator)}function od(){return new Ie(Bt.comparator)}const ay={asc:"ASCENDING",desc:"DESCENDING"},ly={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cy={and:"AND",or:"OR"};class uy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function tc(i,t){return i.useProto3Json||Ca(t)?t:{value:t}}function Ea(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ip(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function hy(i,t){return Ea(i,t.toTimestamp())}function jn(i){return _e(!!i,49232),qt.fromTimestamp(function(e){const n=Bi(e);return new We(n.seconds,n.nanos)}(i))}function pu(i,t){return ec(i,t).canonicalString()}function ec(i,t){const e=function(r){return new Ce(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function Pp(i){const t=Ce.fromString(i);return _e(Op(t),10190,{key:t.toString()}),t}function nc(i,t){return pu(i.databaseId,t.path)}function sl(i,t){const e=Pp(t);if(e.get(1)!==i.databaseId.projectId)throw new Dt(ot.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new Dt(ot.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Bt(Lp(e))}function Dp(i,t){return pu(i.databaseId,t)}function dy(i){const t=Pp(i);return t.length===4?Ce.emptyPath():Lp(t)}function ic(i){return new Ce(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Lp(i){return _e(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function ad(i,t,e){return{name:nc(i,t),fields:e.value.mapValue.fields}}function fy(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ht(39313,{state:u})}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(_e(h===void 0||typeof h=="string",58123),tn.fromBase64String(h||"")):(_e(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),tn.fromUint8Array(h||new Uint8Array))}(i,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(u){const h=u.code===void 0?ot.UNKNOWN:bp(u.code);return new Dt(h,u.message||"")}(o);e=new Cp(n,r,s,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=sl(i,n.document.name),s=jn(n.document.updateTime),o=n.document.createTime?jn(n.document.createTime):qt.min(),l=new En({mapValue:{fields:n.document.fields}}),c=ln.newFoundDocument(r,s,o,l),u=n.targetIds||[],h=n.removedTargetIds||[];e=new ta(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=sl(i,n.document),s=n.readTime?jn(n.readTime):qt.min(),o=ln.newNoDocument(r,s),l=n.removedTargetIds||[];e=new ta([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=sl(i,n.document),s=n.removedTargetIds||[];e=new ta([],s,r,null)}else{if(!("filter"in t))return Ht(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new iy(r,s),l=n.targetId;e=new Rp(l,o)}}return e}function py(i,t){let e;if(t instanceof Js)e={update:ad(i,t.key,t.value)};else if(t instanceof wp)e={delete:nc(i,t.key)};else if(t instanceof ji)e={update:ad(i,t.key,t.data),updateMask:Sy(t.fieldMask)};else{if(!(t instanceof ty))return Ht(16599,{ft:t.type});e={verify:nc(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof js)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw Ht(20930,{transform:o.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:hy(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ht(27497)}(i,t.precondition)),e}function my(i,t){return i&&i.length>0?(_e(t!==void 0,14353),i.map(e=>function(r,s){let o=r.updateTime?jn(r.updateTime):jn(s);return o.isEqual(qt.min())&&(o=jn(s)),new Qv(o,r.transformResults||[])}(e,t))):[]}function _y(i,t){return{documents:[Dp(i,t.path)]}}function gy(i,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Dp(i,r);const s=function(u){if(u.length!==0)return Up(Qn.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:kr(p.field),direction:Ey(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const l=tc(i,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{gt:e,parent:r}}function vy(i){let t=dy(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){_e(n===1,65062);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(d){const p=Np(d);return p instanceof Qn&&up(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(p=>function(x){return new ga(zr(x.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(e.orderBy));let l=null;e.limit&&(l=function(d){let p;return p=typeof d=="object"?d.value:d,Ca(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(d){const p=!!d.before,_=d.values||[];return new _a(_,p)}(e.startAt));let u=null;return e.endAt&&(u=function(d){const p=!d.before,_=d.values||[];return new _a(_,p)}(e.endAt)),Fv(t,r,o,s,l,"F",c,u)}function yy(i,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ht(28987,{purpose:r})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Np(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=zr(e.unaryFilter.field);return Ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=zr(e.unaryFilter.field);return Ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zr(e.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zr(e.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ht(61313);default:return Ht(60726)}}(i):i.fieldFilter!==void 0?function(e){return Ge.create(zr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ht(58110);default:return Ht(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Qn.create(e.compositeFilter.filters.map(n=>Np(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ht(1026)}}(e.compositeFilter.op))}(i):Ht(30097,{filter:i})}function Ey(i){return ay[i]}function Ty(i){return ly[i]}function xy(i){return cy[i]}function kr(i){return{fieldPath:i.canonicalString()}}function zr(i){return Je.fromServerFormat(i.fieldPath)}function Up(i){return i instanceof Ge?function(e){if(e.op==="=="){if($h(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NAN"}};if(jh(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($h(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NOT_NAN"}};if(jh(e.value))return{unaryFilter:{field:kr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(e.field),op:Ty(e.op),value:e.value}}}(i):i instanceof Qn?function(e){const n=e.getFilters().map(r=>Up(r));return n.length===1?n[0]:{compositeFilter:{op:xy(e.op),filters:n}}}(i):Ht(54877,{filter:i})}function Sy(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Op(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,n,r,s=qt.min(),o=qt.min(),l=tn.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Ii(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t){this.wt=t}}function Ay(i){const t=vy({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Jl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.Cn=new by}addToCollectionParentIndex(t,e){return this.Cn.add(e),tt.resolve()}getCollectionParents(t,e){return tt.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return tt.resolve()}deleteFieldIndex(t,e){return tt.resolve()}deleteAllFieldIndexes(t){return tt.resolve()}createTargetIndexes(t,e){return tt.resolve()}getDocumentsMatchingTarget(t,e){return tt.resolve(null)}getIndexType(t,e){return tt.resolve(0)}getFieldIndexes(t,e){return tt.resolve([])}getNextCollectionGroupToUpdate(t){return tt.resolve(null)}getMinOffset(t,e){return tt.resolve(Vi.min())}getMinOffsetFromCollectionGroup(t,e){return tt.resolve(Vi.min())}updateCollectionGroup(t,e,n){return tt.resolve()}updateIndexEntries(t,e){return tt.resolve()}}class by{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Xe(Ce.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Xe(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fp=41943040;class vn{static withCacheSize(t){return new vn(t,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(Fp,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new ts(0)}static lr(){return new ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="LruGarbageCollector",Ry=1048576;function ud([i,t],[e,n]){const r=Jt(i,e);return r===0?Jt(t,n):r}class Cy{constructor(t){this.Er=t,this.buffer=new Xe(ud),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();ud(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Iy{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){Tt(cd,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){hs(e)?Tt(cd,"Ignoring IndexedDB error during garbage collection: ",e):await us(e)}await this.mr(3e5)})}}class Py{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return tt.resolve(Ra.le);const n=new Cy(e);return this.gr.forEachTarget(t,r=>n.Rr(r.sequenceNumber)).next(()=>this.gr.yr(t,r=>n.Rr(r))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.gr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(Tt("LruGarbageCollector","Garbage collection skipped; disabled"),tt.resolve(ld)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(Tt("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ld):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let n,r,s,o,l,c,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Tt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(t,r))).next(d=>(n=d,l=Date.now(),this.removeTargets(t,n,e))).next(d=>(s=d,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(d=>(u=Date.now(),Vr()<=ue.DEBUG&&Tt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),tt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d})))}}function Dy(i,t){return new Py(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.changes=new mr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ln.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?tt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Vs(n.mutation,r,Rn.empty(),We.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,ie()).next(()=>n))}getLocalViewOfDocuments(t,e,n=ie()){const r=or();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=Is();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=or();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,ie()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,l)=>{e.set(o,l)})})}computeViews(t,e,n,r){let s=mi();const o=Fs(),l=function(){return Fs()}();return e.forEach((c,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof ji)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Vs(h.mutation,u,h.mutation.getFieldMask(),We.now())):o.set(u.key,Rn.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var d;return l.set(u,new Ny(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(t,e){const n=Fs();let r=new Ie((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let h=n.get(c)||Rn.empty();h=l.applyToLocalView(u,h),n.set(c,h);const d=(r.get(l.batchId)||ie()).add(c);r=r.insert(l.batchId,d)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=vp();h.forEach(p=>{if(!s.has(p)){const _=Mp(e.get(p),n.get(p));_!==null&&d.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return tt.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return Bt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vv(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):tt.resolve(or());let l=Hs,c=s;return o.next(u=>tt.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(h)?tt.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,ie())).next(h=>({batchId:l,changes:gp(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Bt(e)).next(n=>{let r=Is();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(t,s).next(l=>tt.forEach(l,c=>{const u=function(d,p){return new Pa(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,n,r).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ln.newInvalidDocument(h)))});let l=Is();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Vs(h.mutation,u,Rn.empty(),We.now()),Na(e,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return tt.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:jn(r.createTime)}}(e)),tt.resolve()}getNamedQuery(t,e){return tt.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(r){return{name:r.name,query:Ay(r.bundledQuery),readTime:jn(r.readTime)}}(e)),tt.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.overlays=new Ie(Bt.comparator),this.Qr=new Map}getOverlay(t,e){return tt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=or();return tt.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.bt(t,e,s)}),tt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Qr.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(n)),tt.resolve()}getOverlaysForCollection(t,e,n){const r=or(),s=e.length+1,o=new Bt(e.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return tt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Ie((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=or(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=or(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=r)););return tt.resolve(l)}bt(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Qr.get(r.largestBatchId).delete(n.key);this.Qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ny(e,n));let s=this.Qr.get(e);s===void 0&&(s=ie(),this.Qr.set(e,s)),this.Qr.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(t){return tt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,tt.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.$r=new Xe(Ye.Ur),this.Kr=new Xe(Ye.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new Ye(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.zr(new Ye(t,e))}jr(t,e){t.forEach(n=>this.removeReference(n,e))}Hr(t){const e=new Bt(new Ce([])),n=new Ye(e,t),r=new Ye(e,t+1),s=[];return this.Kr.forEachInRange([n,r],o=>{this.zr(o),s.push(o.key)}),s}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new Bt(new Ce([])),n=new Ye(e,t),r=new Ye(e,t+1);let s=ie();return this.Kr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new Ye(t,0),n=this.$r.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Ye{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return Bt.comparator(t.key,e.key)||Jt(t.Zr,e.Zr)}static Wr(t,e){return Jt(t.Zr,e.Zr)||Bt.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new Xe(Ye.Ur)}checkEmpty(t){return tt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ey(s,e,n,r);this.mutationQueue.push(o);for(const l of r)this.Xr=this.Xr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return tt.resolve(o)}lookupMutationBatch(t,e){return tt.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ti(n),s=r<0?0:r;return tt.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return tt.resolve(this.mutationQueue.length===0?ou:this.nr-1)}getAllMutationBatches(t){return tt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ye(e,0),r=new Ye(e,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([n,r],o=>{const l=this.ei(o.Zr);s.push(l)}),tt.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Xe(Jt);return e.forEach(r=>{const s=new Ye(r,0),o=new Ye(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,o],l=>{n=n.add(l.Zr)})}),tt.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Bt.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new Bt(s),0);let l=new Xe(Jt);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Zr)),!0)},o),tt.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(n=>{const r=this.ei(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){_e(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return tt.forEach(e.mutations,r=>{const s=new Ye(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Xr=n})}sr(t){}containsKey(t,e){const n=new Ye(e,0),r=this.Xr.firstAfterOrEqual(n);return tt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,tt.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t){this.ii=t,this.docs=function(){return new Ie(Bt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return tt.resolve(n?n.document.mutableCopy():ln.newInvalidDocument(e))}getEntries(t,e){let n=mi();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():ln.newInvalidDocument(r))}),tt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=mi();const o=e.path,l=new Bt(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||mv(pv(h),n)<=0||(r.has(h.key)||Na(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return tt.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Ht(9500)}si(t,e){return tt.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new zy(this)}getSize(t){return tt.resolve(this.size)}}class zy extends Ly{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Br.addEntry(t,r)):this.Br.removeEntry(n)}),tt.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t){this.persistence=t,this.oi=new mr(e=>cu(e),uu),this.lastRemoteSnapshotVersion=qt.min(),this.highestTargetId=0,this._i=0,this.ai=new mu,this.targetCount=0,this.ui=ts.cr()}forEachTarget(t,e){return this.oi.forEach((n,r)=>e(r)),tt.resolve()}getLastRemoteSnapshotVersion(t){return tt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return tt.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),tt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),tt.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new ts(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,tt.resolve()}updateTargetData(t,e){return this.Tr(e),tt.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,tt.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.oi.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),tt.waitFor(s).next(()=>r)}getTargetCount(t){return tt.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return tt.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),tt.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),tt.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),tt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return tt.resolve(n)}containsKey(t,e){return tt.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e){this.ci={},this.overlays={},this.li=new Ra(0),this.hi=!1,this.hi=!0,this.Pi=new Vy,this.referenceDelegate=t(this),this.Ti=new Hy(this),this.indexManager=new wy,this.remoteDocumentCache=function(r){return new ky(r)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new My(e),this.Ei=new Oy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new By(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){Tt("MemoryPersistence","Starting transaction:",t);const r=new Gy(this.li.next());return this.referenceDelegate.di(),n(r).next(s=>this.referenceDelegate.Ai(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ri(t,e){return tt.or(Object.values(this.ci).map(n=>()=>n.containsKey(t,e)))}}class Gy extends gv{constructor(t){super(),this.currentSequenceNumber=t}}class _u{constructor(t){this.persistence=t,this.Vi=new mu,this.mi=null}static fi(t){return new _u(t)}get gi(){if(this.mi)return this.mi;throw Ht(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),tt.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),tt.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),tt.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(r=>this.gi.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.gi.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tt.forEach(this.gi,n=>{const r=Bt.fromPath(n);return this.pi(t,r).next(s=>{s||e.removeEntry(r,qt.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(n=>{n?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return tt.or([()=>tt.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Ta{constructor(t,e){this.persistence=t,this.yi=new mr(n=>Ev(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=Dy(this,e)}static fi(t,e){return new Ta(t,e)}di(){}Ai(t){return tt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(r=>n+r))}Sr(t){let e=0;return this.yr(t,n=>{e++}).next(()=>e)}yr(t,e){return tt.forEach(this.yi,(n,r)=>this.Dr(t,n,r).next(s=>s?tt.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.si(t,o=>this.Dr(t,o,e).next(l=>{l||(n++,s.removeEntry(o,qt.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),tt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),tt.resolve()}removeReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),tt.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),tt.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Qo(t.data.value)),e}Dr(t,e,n){return tt.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const r=this.yi.get(e);return tt.resolve(r!==void 0&&r>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ds=n,this.As=r}static Rs(t,e){let n=ie(),r=ie();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new gu(t,e.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return V_()?8:vv(O_())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.ws(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ss(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Wy;return this.bs(t,e,o).next(l=>{if(s.result=l,this.fs)return this.Ds(t,e,o,l.size)})}).next(()=>s.result)}Ds(t,e,n,r){return n.documentReadCount<this.gs?(Vr()<=ue.DEBUG&&Tt("QueryEngine","SDK will not create cache indexes for query:",Br(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),tt.resolve()):(Vr()<=ue.DEBUG&&Tt("QueryEngine","Query:",Br(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ps*r?(Vr()<=ue.DEBUG&&Tt("QueryEngine","The SDK decides to create cache indexes for query:",Br(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qn(e))):tt.resolve())}ws(t,e){if(Zh(e))return tt.resolve(null);let n=qn(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Jl(e,null,"F"),n=qn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=ie(...s);return this.ys.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,n).next(c=>{const u=this.vs(e,l);return this.Cs(e,u,o,c.readTime)?this.ws(t,Jl(e,null,"F")):this.Fs(t,u,e,c)}))})))}Ss(t,e,n,r){return Zh(e)||r.isEqual(qt.min())?tt.resolve(null):this.ys.getDocuments(t,n).next(s=>{const o=this.vs(e,s);return this.Cs(e,o,n,r)?tt.resolve(null):(Vr()<=ue.DEBUG&&Tt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Br(e)),this.Fs(t,o,e,fv(r,Hs)).next(l=>l))})}vs(t,e){let n=new Xe(mp(t));return e.forEach((r,s)=>{Na(t,s)&&(n=n.add(s))}),n}Cs(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}bs(t,e,n){return Vr()<=ue.DEBUG&&Tt("QueryEngine","Using full collection scan to execute query:",Br(e)),this.ys.getDocumentsMatchingQuery(t,e,Vi.min(),n)}Fs(t,e,n,r){return this.ys.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="LocalStore",qy=3e8;class jy{constructor(t,e,n,r){this.persistence=t,this.Ms=e,this.serializer=r,this.xs=new Ie(Jt),this.Os=new mr(s=>cu(s),uu),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Uy(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function $y(i,t,e,n){return new jy(i,t,e,n)}async function Bp(i,t){const e=$t(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let c=ie();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(n,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function Yy(i,t){const e=$t(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,p=d.keys();let _=tt.resolve();return p.forEach(x=>{_=_.next(()=>h.getEntry(c,x)).next(b=>{const g=u.docVersions.get(x);_e(g!==null,48541),b.version.compareTo(g)<0&&(d.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),h.addEntry(b)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function kp(i){const t=$t(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Ky(i,t){const e=$t(i),n=t.snapshotVersion;let r=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Bs.newChangeBuffer({trackRemovals:!0});r=e.xs;const l=[];t.targetChanges.forEach((h,d)=>{const p=r.get(d);if(!p)return;l.push(e.Ti.removeMatchingKeys(s,h.removedDocuments,d).next(()=>e.Ti.addMatchingKeys(s,h.addedDocuments,d)));let _=p.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?_=_.withResumeToken(tn.EMPTY_BYTE_STRING,qt.min()).withLastLimboFreeSnapshotVersion(qt.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,n)),r=r.insert(d,_),function(b,g,m){return b.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=qy?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(p,_,h)&&l.push(e.Ti.updateTargetData(s,_))});let c=mi(),u=ie();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,h))}),l.push(Qy(s,o,t.documentUpdates).next(h=>{c=h.qs,u=h.Qs})),!n.isEqual(qt.min())){const h=e.Ti.getLastRemoteSnapshotVersion(s).next(d=>e.Ti.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(h)}return tt.waitFor(l).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.xs=r,s))}function Qy(i,t,e){let n=ie(),r=ie();return e.forEach(s=>n=n.add(s)),t.getEntries(i,n).next(s=>{let o=mi();return e.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(qt.min())?(t.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(l,c)):Tt(vu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:r}})}function Zy(i,t){const e=$t(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=ou),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Jy(i,t){const e=$t(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.Ti.getTargetData(n,t).next(s=>s?(r=s,tt.resolve(r)):e.Ti.allocateTargetId(n).next(o=>(r=new Ii(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.Ti.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.xs.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.xs=e.xs.insert(n.targetId,n),e.Os.set(t,n.targetId)),n})}async function rc(i,t,e){const n=$t(i),r=n.xs.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!hs(o))throw o;Tt(vu,`Failed to update sequence numbers for target ${t}: ${o}`)}n.xs=n.xs.remove(t),n.Os.delete(r.target)}function hd(i,t,e){const n=$t(i);let r=qt.min(),s=ie();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=$t(c),p=d.Os.get(h);return p!==void 0?tt.resolve(d.xs.get(p)):d.Ti.getTargetData(u,h)}(n,o,qn(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>n.Ms.getDocumentsMatchingQuery(o,t,e?r:qt.min(),e?s:ie())).next(l=>(tE(n,kv(t),l),{documents:l,$s:s})))}function tE(i,t,e){let n=i.Ns.get(t)||qt.min();e.forEach((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),i.Ns.set(t,n)}class dd{constructor(){this.activeTargetIds=qv()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eE{constructor(){this.xo=new dd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new dd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="ConnectivityMonitor";class pd{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Tt(fd,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){Tt(fd,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=null;function sc(){return Mo===null?Mo=function(){return 268435456+Math.round(2147483648*Math.random())}():Mo++,"0x"+Mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="RestConnection",iE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rE{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${r}`,this.Go=this.databaseId.database===pa?`project_id=${n}`:`project_id=${n}&database_id=${r}`}zo(t,e,n,r,s){const o=sc(),l=this.jo(t,e.toUriEncodedString());Tt(ol,`Sending RPC '${t}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,r,s);const{host:u}=new URL(l),h=iu(u);return this.Jo(t,l,c,n,h).then(d=>(Tt(ol,`Received RPC '${t}' ${o}: `,d),d),d=>{throw Kr(ol,`RPC '${t}' ${o} failed with error: `,d,"url: ",l,"request:",n),d})}Yo(t,e,n,r,s,o){return this.zo(t,e,n,r,s)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((r,s)=>t[s]=r),n&&n.headers.forEach((r,s)=>t[s]=r)}jo(t,e){const n=iE[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class oE extends rE{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,r,s){const o=sc();return new Promise((l,c)=>{const u=new Gf;u.setWithCredentials(!0),u.listenOnce(Wf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const d=u.getResponseJson();Tt(rn,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),l(d);break;case Ko.TIMEOUT:Tt(rn,`RPC '${t}' ${o} timed out`),c(new Dt(ot.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const p=u.getStatus();if(Tt(rn,`RPC '${t}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const x=_==null?void 0:_.error;if(x&&x.status&&x.message){const b=function(m){const N=m.toLowerCase().replace(/_/g,"-");return Object.values(ot).indexOf(N)>=0?N:ot.UNKNOWN}(x.status);c(new Dt(b,x.message))}else c(new Dt(ot.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Dt(ot.UNAVAILABLE,"Connection failed."));break;default:Ht(9055,{l_:t,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Tt(rn,`RPC '${t}' ${o} completed.`)}});const h=JSON.stringify(r);Tt(rn,`RPC '${t}' ${o} sending request:`,r),u.send(e,"POST",h,n,15)})}T_(t,e,n){const r=sc(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=jf(),l=qf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const h=s.join("");Tt(rn,`Creating RPC '${t}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);let p=!1,_=!1;const x=new sE({Zo:g=>{_?Tt(rn,`Not sending because RPC '${t}' stream ${r} is closed:`,g):(p||(Tt(rn,`Opening RPC '${t}' stream ${r} transport.`),d.open(),p=!0),Tt(rn,`RPC '${t}' stream ${r} sending:`,g),d.send(g))},Xo:()=>d.close()}),b=(g,m,N)=>{g.listen(m,D=>{try{N(D)}catch(I){setTimeout(()=>{throw I},0)}})};return b(d,Cs.EventType.OPEN,()=>{_||(Tt(rn,`RPC '${t}' stream ${r} transport opened.`),x.__())}),b(d,Cs.EventType.CLOSE,()=>{_||(_=!0,Tt(rn,`RPC '${t}' stream ${r} transport closed`),x.u_())}),b(d,Cs.EventType.ERROR,g=>{_||(_=!0,Kr(rn,`RPC '${t}' stream ${r} transport errored. Name:`,g.name,"Message:",g.message),x.u_(new Dt(ot.UNAVAILABLE,"The operation could not be completed")))}),b(d,Cs.EventType.MESSAGE,g=>{var m;if(!_){const N=g.data[0];_e(!!N,16349);const D=N,I=(D==null?void 0:D.error)||((m=D[0])===null||m===void 0?void 0:m.error);if(I){Tt(rn,`RPC '${t}' stream ${r} received error:`,I);const k=I.status;let O=function(y){const v=Fe[y];if(v!==void 0)return bp(v)}(k),S=I.message;O===void 0&&(O=ot.INTERNAL,S="Unknown error status: "+k+" with message "+I.message),_=!0,x.u_(new Dt(O,S)),d.close()}else Tt(rn,`RPC '${t}' stream ${r} received:`,N),x.c_(N)}}),b(l,Xf.STAT_EVENT,g=>{g.stat===jl.PROXY?Tt(rn,`RPC '${t}' stream ${r} detected buffering proxy`):g.stat===jl.NOPROXY&&Tt(rn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.a_()},0),x}}function al(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(i){return new uy(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,e,n=1e3,r=1.5,s=6e4){this.xi=t,this.timerId=e,this.I_=n,this.E_=r,this.d_=s,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),n=Math.max(0,Date.now()-this.V_),r=Math.max(0,e-n);r>0&&Tt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="PersistentStream";class Hp{constructor(t,e,n,r,s,o,l,c){this.xi=t,this.y_=n,this.w_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new zp(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===ot.RESOURCE_EXHAUSTED?(pi(e.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===ot.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.S_===e&&this.K_(n,r)},n=>{t(()=>{const r=new Dt(ot.UNKNOWN,"Fetching auth token failed: "+n.message);return this.W_(r)})})}K_(t,e){const n=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{n(()=>this.W_(r))}),this.stream.onMessage(r=>{n(()=>++this.v_==1?this.z_(r):this.onNext(r))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return Tt(md,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(Tt(md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aE extends Hp{constructor(t,e,n,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}G_(t,e){return this.connection.T_("Listen",t,e)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const e=fy(this.serializer,t),n=function(s){if(!("targetChange"in s))return qt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?qt.min():o.readTime?jn(o.readTime):qt.min()}(t);return this.listener.j_(e,n)}H_(t){const e={};e.database=ic(this.serializer),e.addTarget=function(s,o){let l;const c=o.target;if(l=Zl(c)?{documents:_y(s,c)}:{query:gy(s,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Ip(s,o.resumeToken);const u=tc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(qt.min())>0){l.readTime=Ea(s,o.snapshotVersion.toTimestamp());const u=tc(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,t);const n=yy(this.serializer,t);n&&(e.labels=n),this.L_(e)}J_(t){const e={};e.database=ic(this.serializer),e.removeTarget=t,this.L_(e)}}class lE extends Hp{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return _e(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,_e(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){_e(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=my(t.writeResults,t.commitTime),n=jn(t.commitTime);return this.listener.ea(n,e)}ta(){const t={};t.database=ic(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>py(this.serializer,n))};this.L_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{}class uE extends cE{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.na=!1}ra(){if(this.na)throw new Dt(ot.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,r){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.zo(t,ec(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ot.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Dt(ot.UNKNOWN,s.toString())})}Yo(t,e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(t,ec(e,n),r,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ot.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Dt(ot.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class hE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(pi(e),this.oa=!1):Tt("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="RemoteStore";class dE{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=s,this.Ea.No(o=>{n.enqueueAndForget(async()=>{_r(this)&&(Tt(ur,"Restarting streams for network reachability change."),await async function(c){const u=$t(c);u.Ta.add(4),await eo(u),u.da.set("Unknown"),u.Ta.delete(4),await Ba(u)}(this))})}),this.da=new hE(n,r)}}async function Ba(i){if(_r(i))for(const t of i.Ia)await t(!0)}async function eo(i){for(const t of i.Ia)await t(!1)}function Gp(i,t){const e=$t(i);e.Pa.has(t.targetId)||(e.Pa.set(t.targetId,t),xu(e)?Tu(e):ds(e).M_()&&Eu(e,t))}function yu(i,t){const e=$t(i),n=ds(e);e.Pa.delete(t),n.M_()&&Wp(e,t),e.Pa.size===0&&(n.M_()?n.N_():_r(e)&&e.da.set("Unknown"))}function Eu(i,t){if(i.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(qt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ds(i).H_(t)}function Wp(i,t){i.Aa.Ke(t),ds(i).J_(t)}function Tu(i){i.Aa=new oy({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>i.Pa.get(t)||null,Pt:()=>i.datastore.serializer.databaseId}),ds(i).start(),i.da._a()}function xu(i){return _r(i)&&!ds(i).F_()&&i.Pa.size>0}function _r(i){return $t(i).Ta.size===0}function Xp(i){i.Aa=void 0}async function fE(i){i.da.set("Online")}async function pE(i){i.Pa.forEach((t,e)=>{Eu(i,t)})}async function mE(i,t){Xp(i),xu(i)?(i.da.ca(t),Tu(i)):i.da.set("Unknown")}async function _E(i,t,e){if(i.da.set("Online"),t instanceof Cp&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const l of s.targetIds)r.Pa.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Pa.delete(l),r.Aa.removeTarget(l))}(i,t)}catch(n){Tt(ur,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await xa(i,n)}else if(t instanceof ta?i.Aa.Xe(t):t instanceof Rp?i.Aa.ot(t):i.Aa.nt(t),!e.isEqual(qt.min()))try{const n=await kp(i.localStore);e.compareTo(n)>=0&&await function(s,o){const l=s.Aa.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.Pa.get(u);h&&s.Pa.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=s.Pa.get(c);if(!h)return;s.Pa.set(c,h.withResumeToken(tn.EMPTY_BYTE_STRING,h.snapshotVersion)),Wp(s,c);const d=new Ii(h.target,c,u,h.sequenceNumber);Eu(s,d)}),s.remoteSyncer.applyRemoteEvent(l)}(i,e)}catch(n){Tt(ur,"Failed to raise snapshot:",n),await xa(i,n)}}async function xa(i,t,e){if(!hs(t))throw t;i.Ta.add(1),await eo(i),i.da.set("Offline"),e||(e=()=>kp(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Tt(ur,"Retrying IndexedDB access"),await e(),i.Ta.delete(1),await Ba(i)})}function qp(i,t){return t().catch(e=>xa(i,e,t))}async function ka(i){const t=$t(i),e=Hi(t);let n=t.ha.length>0?t.ha[t.ha.length-1].batchId:ou;for(;gE(t);)try{const r=await Zy(t.localStore,n);if(r===null){t.ha.length===0&&e.N_();break}n=r.batchId,vE(t,r)}catch(r){await xa(t,r)}jp(t)&&$p(t)}function gE(i){return _r(i)&&i.ha.length<10}function vE(i,t){i.ha.push(t);const e=Hi(i);e.M_()&&e.Y_&&e.Z_(t.mutations)}function jp(i){return _r(i)&&!Hi(i).F_()&&i.ha.length>0}function $p(i){Hi(i).start()}async function yE(i){Hi(i).ta()}async function EE(i){const t=Hi(i);for(const e of i.ha)t.Z_(e.mutations)}async function TE(i,t,e){const n=i.ha.shift(),r=du.from(n,t,e);await qp(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await ka(i)}async function xE(i,t){t&&Hi(i).Y_&&await async function(n,r){if(function(o){return ry(o)&&o!==ot.ABORTED}(r.code)){const s=n.ha.shift();Hi(n).O_(),await qp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ka(n)}}(i,t),jp(i)&&$p(i)}async function _d(i,t){const e=$t(i);e.asyncQueue.verifyOperationInProgress(),Tt(ur,"RemoteStore received new credentials");const n=_r(e);e.Ta.add(3),await eo(e),n&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await Ba(e)}async function SE(i,t){const e=$t(i);t?(e.Ta.delete(2),await Ba(e)):t||(e.Ta.add(2),await eo(e),e.da.set("Unknown"))}function ds(i){return i.Ra||(i.Ra=function(e,n,r){const s=$t(e);return s.ra(),new aE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{e_:fE.bind(null,i),n_:pE.bind(null,i),i_:mE.bind(null,i),j_:_E.bind(null,i)}),i.Ia.push(async t=>{t?(i.Ra.O_(),xu(i)?Tu(i):i.da.set("Unknown")):(await i.Ra.stop(),Xp(i))})),i.Ra}function Hi(i){return i.Va||(i.Va=function(e,n,r){const s=$t(e);return s.ra(),new lE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:yE.bind(null,i),i_:xE.bind(null,i),X_:EE.bind(null,i),ea:TE.bind(null,i)}),i.Ia.push(async t=>{t?(i.Va.O_(),await ka(i)):(await i.Va.stop(),i.ha.length>0&&(Tt(ur,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,l=new Su(t,e,o,r,s);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Dt(ot.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mu(i,t){if(pi("AsyncQueue",`${t}: ${i}`),hs(i))return new Dt(ot.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static emptySet(t){return new Xr(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Bt.comparator(e.key,n.key):(e,n)=>Bt.comparator(e.key,n.key),this.keyedMap=Is(),this.sortedSet=new Ie(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Xr;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.ma=new Ie(Bt.comparator)}track(t){const e=t.doc.key,n=this.ma.get(e);n?t.type!==0&&n.type===3?this.ma=this.ma.insert(e,t):t.type===3&&n.type!==1?this.ma=this.ma.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ma=this.ma.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ma=this.ma.remove(e):t.type===1&&n.type===2?this.ma=this.ma.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):Ht(63341,{Vt:t,fa:n}):this.ma=this.ma.insert(e,t)}ga(){const t=[];return this.ma.inorderTraversal((e,n)=>{t.push(n)}),t}}class es{constructor(t,e,n,r,s,o,l,c,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,s){const o=[];return e.forEach(l=>{o.push({type:0,doc:l})}),new es(t,e,Xr.emptySet(e),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&La(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class AE{constructor(){this.queries=vd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,n){const r=$t(e),s=r.queries;r.queries=vd(),s.forEach((o,l)=>{for(const c of l.ya)c.onError(n)})})(this,new Dt(ot.ABORTED,"Firestore shutting down"))}}function vd(){return new mr(i=>pp(i),La)}async function Yp(i,t){const e=$t(i);let n=3;const r=t.query;let s=e.queries.get(r);s?!s.wa()&&t.Sa()&&(n=2):(s=new ME,n=t.Sa()?0:1);try{switch(n){case 0:s.pa=await e.onListen(r,!0);break;case 1:s.pa=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const l=Mu(o,`Initialization of query '${Br(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.ya.push(t),t.Da(e.onlineState),s.pa&&t.va(s.pa)&&Au(e)}async function Kp(i,t){const e=$t(i),n=t.query;let r=3;const s=e.queries.get(n);if(s){const o=s.ya.indexOf(t);o>=0&&(s.ya.splice(o,1),s.ya.length===0?r=t.Sa()?0:1:!s.wa()&&t.Sa()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function wE(i,t){const e=$t(i);let n=!1;for(const r of t){const s=r.query,o=e.queries.get(s);if(o){for(const l of o.ya)l.va(r)&&(n=!0);o.pa=r}}n&&Au(e)}function bE(i,t,e){const n=$t(i),r=n.queries.get(t);if(r)for(const s of r.ya)s.onError(e);n.queries.delete(t)}function Au(i){i.ba.forEach(t=>{t.next()})}var oc,yd;(yd=oc||(oc={})).Ca="default",yd.Cache="cache";class Qp{constructor(t,e,n){this.query=t,this.Fa=e,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=n||{}}va(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new es(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),e=!0):this.Na(t,this.onlineState)&&(this.Ba(t),e=!0),this.xa=t,e}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let e=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),e=!0),e}Na(t,e){if(!t.fromCache||!this.Sa())return!0;const n=e!=="Offline";return(!this.options.La||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const e=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ba(t){t=es.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==oc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t){this.key=t}}class Jp{constructor(t){this.key=t}}class RE{constructor(t,e){this.query=t,this.Ga=e,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=ie(),this.mutatedKeys=ie(),this.Ha=mp(t),this.Ja=new Xr(this.Ha)}get Ya(){return this.Ga}Za(t,e){const n=e?e.Xa:new gd,r=e?e.Ja:this.Ja;let s=e?e.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,d)=>{const p=r.get(h),_=Na(this.query,d)?d:null,x=!!p&&this.mutatedKeys.has(p.key),b=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let g=!1;p&&_?p.data.isEqual(_.data)?x!==b&&(n.track({type:3,doc:_}),g=!0):this.eu(p,_)||(n.track({type:2,doc:_}),g=!0,(c&&this.Ha(_,c)>0||u&&this.Ha(_,u)<0)&&(l=!0)):!p&&_?(n.track({type:0,doc:_}),g=!0):p&&!_&&(n.track({type:1,doc:p}),g=!0,(c||u)&&(l=!0)),g&&(_?(o=o.add(_),s=b?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{Ja:o,Xa:n,Cs:l,mutatedKeys:s}}eu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const o=t.Xa.ga();o.sort((h,d)=>function(_,x){const b=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ht(20277,{Vt:g})}};return b(_)-b(x)}(h.type,d.type)||this.Ha(h.doc,d.doc)),this.tu(n),r=r!=null&&r;const l=e&&!r?this.nu():[],c=this.ja.size===0&&this.current&&!r?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new es(this.query,t.Ja,s,o,t.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new gd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(e=>this.Ga=this.Ga.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ga=this.Ga.delete(e)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=ie(),this.Ja.forEach(n=>{this.iu(n.key)&&(this.ja=this.ja.add(n.key))});const e=[];return t.forEach(n=>{this.ja.has(n)||e.push(new Jp(n))}),this.ja.forEach(n=>{t.has(n)||e.push(new Zp(n))}),e}su(t){this.Ga=t.$s,this.ja=ie();const e=this.Za(t.documents);return this.applyChanges(e,!0)}ou(){return es.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const wu="SyncEngine";class CE{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class IE{constructor(t){this.key=t,this._u=!1}}class PE{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new mr(l=>pp(l),La),this.cu=new Map,this.lu=new Set,this.hu=new Ie(Bt.comparator),this.Pu=new Map,this.Tu=new mu,this.Iu={},this.Eu=new Map,this.du=ts.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function DE(i,t,e=!0){const n=sm(i);let r;const s=n.uu.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ou()):r=await tm(n,t,e,!0),r}async function LE(i,t){const e=sm(i);await tm(e,t,!0,!1)}async function tm(i,t,e,n){const r=await Jy(i.localStore,qn(t)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,e);let l;return n&&(l=await NE(i,t,s,o==="current",r.resumeToken)),i.isPrimaryClient&&e&&Gp(i.remoteStore,r),l}async function NE(i,t,e,n,r){i.Ru=(d,p,_)=>async function(b,g,m,N){let D=g.view.Za(m);D.Cs&&(D=await hd(b.localStore,g.query,!1).then(({documents:S})=>g.view.Za(S,D)));const I=N&&N.targetChanges.get(g.targetId),k=N&&N.targetMismatches.get(g.targetId)!=null,O=g.view.applyChanges(D,b.isPrimaryClient,I,k);return Td(b,g.targetId,O.ru),O.snapshot}(i,d,p,_);const s=await hd(i.localStore,t,!0),o=new RE(t,s.$s),l=o.Za(s.documents),c=to.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",r),u=o.applyChanges(l,i.isPrimaryClient,c);Td(i,e,u.ru);const h=new CE(t,e,o);return i.uu.set(t,h),i.cu.has(e)?i.cu.get(e).push(t):i.cu.set(e,[t]),u.snapshot}async function UE(i,t,e){const n=$t(i),r=n.uu.get(t),s=n.cu.get(r.targetId);if(s.length>1)return n.cu.set(r.targetId,s.filter(o=>!La(o,t))),void n.uu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&yu(n.remoteStore,r.targetId),ac(n,r.targetId)}).catch(us)):(ac(n,r.targetId),await rc(n.localStore,r.targetId,!0))}async function OE(i,t){const e=$t(i),n=e.uu.get(t),r=e.cu.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),yu(e.remoteStore,n.targetId))}async function FE(i,t,e){const n=WE(i);try{const r=await function(o,l){const c=$t(o),u=We.now(),h=l.reduce((_,x)=>_.add(x.key),ie());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let x=mi(),b=ie();return c.Bs.getEntries(_,h).next(g=>{x=g,x.forEach((m,N)=>{N.isValidDocument()||(b=b.add(m))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,x)).next(g=>{d=g;const m=[];for(const N of l){const D=Jv(N,d.get(N.key).overlayedDocument);D!=null&&m.push(new ji(N.key,D,ap(D.value.mapValue),Bn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,m,l)}).next(g=>{p=g;const m=g.applyToLocalDocumentSet(d,b);return c.documentOverlayCache.saveOverlays(_,g.batchId,m)})}).then(()=>({batchId:p.batchId,changes:gp(d)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new Ie(Jt)),u=u.insert(l,c),o.Iu[o.currentUser.toKey()]=u}(n,r.batchId,e),await no(n,r.changes),await ka(n.remoteStore)}catch(r){const s=Mu(r,"Failed to persist write");e.reject(s)}}async function em(i,t){const e=$t(i);try{const n=await Ky(e.localStore,t);t.targetChanges.forEach((r,s)=>{const o=e.Pu.get(s);o&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o._u=!0:r.modifiedDocuments.size>0?_e(o._u,14607):r.removedDocuments.size>0&&(_e(o._u,42227),o._u=!1))}),await no(e,n,t)}catch(n){await us(n)}}function Ed(i,t,e){const n=$t(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.uu.forEach((s,o)=>{const l=o.view.Da(t);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=$t(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.ya)p.Da(l)&&(u=!0)}),u&&Au(c)}(n.eventManager,t),r.length&&n.au.j_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function VE(i,t,e){const n=$t(i);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n.Pu.get(t),s=r&&r.key;if(s){let o=new Ie(Bt.comparator);o=o.insert(s,ln.newNoDocument(s,qt.min()));const l=ie().add(s),c=new Fa(qt.min(),new Map,new Ie(Jt),o,l);await em(n,c),n.hu=n.hu.remove(s),n.Pu.delete(t),bu(n)}else await rc(n.localStore,t,!1).then(()=>ac(n,t,e)).catch(us)}async function BE(i,t){const e=$t(i),n=t.batch.batchId;try{const r=await Yy(e.localStore,t);im(e,n,null),nm(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await no(e,r)}catch(r){await us(r)}}async function kE(i,t,e){const n=$t(i);try{const r=await function(o,l){const c=$t(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(_e(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,t);im(n,t,e),nm(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await no(n,r)}catch(r){await us(r)}}function nm(i,t){(i.Eu.get(t)||[]).forEach(e=>{e.resolve()}),i.Eu.delete(t)}function im(i,t,e){const n=$t(i);let r=n.Iu[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.Iu[n.currentUser.toKey()]=r}}function ac(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.cu.get(t))i.uu.delete(n),e&&i.au.Vu(n,e);i.cu.delete(t),i.isPrimaryClient&&i.Tu.Hr(t).forEach(n=>{i.Tu.containsKey(n)||rm(i,n)})}function rm(i,t){i.lu.delete(t.path.canonicalString());const e=i.hu.get(t);e!==null&&(yu(i.remoteStore,e),i.hu=i.hu.remove(t),i.Pu.delete(e),bu(i))}function Td(i,t,e){for(const n of e)n instanceof Zp?(i.Tu.addReference(n.key,t),zE(i,n)):n instanceof Jp?(Tt(wu,"Document no longer in limbo: "+n.key),i.Tu.removeReference(n.key,t),i.Tu.containsKey(n.key)||rm(i,n.key)):Ht(19791,{mu:n})}function zE(i,t){const e=t.key,n=e.path.canonicalString();i.hu.get(e)||i.lu.has(n)||(Tt(wu,"New document in limbo: "+e),i.lu.add(n),bu(i))}function bu(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const t=i.lu.values().next().value;i.lu.delete(t);const e=new Bt(Ce.fromString(t)),n=i.du.next();i.Pu.set(n,new IE(e)),i.hu=i.hu.insert(e,n),Gp(i.remoteStore,new Ii(qn(Da(e.path)),n,"TargetPurposeLimboResolution",Ra.le))}}async function no(i,t,e){const n=$t(i),r=[],s=[],o=[];n.uu.isEmpty()||(n.uu.forEach((l,c)=>{o.push(n.Ru(c,t,e).then(u=>{var h;if((u||e)&&n.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=gu.Rs(c.targetId,u);s.push(d)}}))}),await Promise.all(o),n.au.j_(r),await async function(c,u){const h=$t(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>tt.forEach(u,p=>tt.forEach(p.ds,_=>h.persistence.referenceDelegate.addReference(d,p.targetId,_)).next(()=>tt.forEach(p.As,_=>h.persistence.referenceDelegate.removeReference(d,p.targetId,_)))))}catch(d){if(!hs(d))throw d;Tt(vu,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const _=h.xs.get(p),x=_.snapshotVersion,b=_.withLastLimboFreeSnapshotVersion(x);h.xs=h.xs.insert(p,b)}}}(n.localStore,s))}async function HE(i,t){const e=$t(i);if(!e.currentUser.isEqual(t)){Tt(wu,"User change. New user:",t.toKey());const n=await Bp(e.localStore,t);e.currentUser=t,function(s,o){s.Eu.forEach(l=>{l.forEach(c=>{c.reject(new Dt(ot.CANCELLED,o))})}),s.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await no(e,n.ks)}}function GE(i,t){const e=$t(i),n=e.Pu.get(t);if(n&&n._u)return ie().add(n.key);{let r=ie();const s=e.cu.get(t);if(!s)return r;for(const o of s){const l=e.uu.get(o);r=r.unionWith(l.view.Ya)}return r}}function sm(i){const t=$t(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=em.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=GE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=VE.bind(null,t),t.au.j_=wE.bind(null,t.eventManager),t.au.Vu=bE.bind(null,t.eventManager),t}function WE(i){const t=$t(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=BE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kE.bind(null,t),t}class Sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Va(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return $y(this.persistence,new Xy,t.initialUser,this.serializer)}yu(t){return new Vp(_u.fi,this.serializer)}pu(t){return new eE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sa.provider={build:()=>new Sa};class XE extends Sa{constructor(t){super(),this.cacheSizeBytes=t}Su(t,e){_e(this.persistence.referenceDelegate instanceof Ta,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Iy(n,t.asyncQueue,e)}yu(t){const e=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new Vp(n=>Ta.fi(n,e),this.serializer)}}class lc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ed(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=HE.bind(null,this.syncEngine),await SE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new AE}()}createDatastore(t){const e=Va(t.databaseInfo.databaseId),n=function(s){return new oE(s)}(t.databaseInfo);return function(s,o,l,c){return new uE(s,o,l,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,l){return new dE(n,r,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ed(this.syncEngine,e,0),function(){return pd.C()?new pd:new nE}())}createSyncEngine(t,e){return function(r,s,o,l,c,u,h){const d=new PE(r,s,o,l,c,u);return h&&(d.Au=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=$t(r);Tt(ur,"RemoteStore shutting down."),s.Ta.add(5),await eo(s),s.Ea.shutdown(),s.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}lc.provider={build:()=>new lc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):pi("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="FirestoreClient";class qE{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=an.UNAUTHENTICATED,this.clientId=Qf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{Tt(Gi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(Tt(Gi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Mu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ll(i,t){i.asyncQueue.verifyOperationInProgress(),Tt(Gi,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Bp(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function xd(i,t){i.asyncQueue.verifyOperationInProgress();const e=await jE(i);Tt(Gi,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>_d(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>_d(t.remoteStore,r)),i._onlineComponents=t}async function jE(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Tt(Gi,"Using user provided OfflineComponentProvider");try{await ll(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===ot.FAILED_PRECONDITION||r.code===ot.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Kr("Error using user provided cache. Falling back to memory cache: "+e),await ll(i,new Sa)}}else Tt(Gi,"Using default OfflineComponentProvider"),await ll(i,new XE(void 0));return i._offlineComponents}async function am(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Tt(Gi,"Using user provided OnlineComponentProvider"),await xd(i,i._uninitializedComponentsProvider._online)):(Tt(Gi,"Using default OnlineComponentProvider"),await xd(i,new lc))),i._onlineComponents}function $E(i){return am(i).then(t=>t.syncEngine)}async function cc(i){const t=await am(i),e=t.eventManager;return e.onListen=DE.bind(null,t.syncEngine),e.onUnlisten=UE.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=LE.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=OE.bind(null,t.syncEngine),e}function YE(i,t,e={}){const n=new Ni;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const h=new om({next:p=>{h.Cu(),o.enqueueAndForget(()=>Kp(s,d));const _=p.docs.has(l);!_&&p.fromCache?u.reject(new Dt(ot.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&c&&c.source==="server"?u.reject(new Dt(ot.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Qp(Da(l.path),h,{includeMetadataChanges:!0,La:!0});return Yp(s,d)}(await cc(i),i.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(i,t,e){if(!e)throw new Dt(ot.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function KE(i,t,e,n){if(t===!0&&n===!0)throw new Dt(ot.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Md(i){if(!Bt.isDocumentKey(i))throw new Dt(ot.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ad(i){if(Bt.isDocumentKey(i))throw new Dt(ot.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ru(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Ht(12329,{type:typeof i})}function kn(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new Dt(ot.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ru(i);throw new Dt(ot.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firestore.googleapis.com",wd=!0;class bd{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new Dt(ot.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=um,this.ssl=wd}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:wd;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Fp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ry)throw new Dt(ot.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}KE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lm((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Dt(ot.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Dt(ot.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Dt(ot.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class za{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Dt(ot.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Dt(ot.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bd(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rv;switch(n.type){case"firstParty":return new lv(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Dt(ot.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Sd.get(e);n&&(Tt("ComponentProvider","Removing Datastore"),Sd.delete(e),n.terminate())}(this),Promise.resolve()}}function QE(i,t,e,n={}){var r;i=kn(i,za);const s=iu(t),o=i._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:i._getEmulatorOptions()}),c=`${t}:${e}`;s&&(P_(`https://${c}`),U_("Firestore",!0)),o.host!==um&&o.host!==c&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:n});if(!ua(u,l)&&(i._setSettings(u),n.mockUserToken)){let h,d;if(typeof n.mockUserToken=="string")h=n.mockUserToken,d=an.MOCK_USER;else{h=D_(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new Dt(ot.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new an(p)}i._authCredentials=new sv(new Yf(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ha(this.firestore,t,this._query)}}class dn{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dn(this.firestore,t,this._key)}}class Ui extends Ha{constructor(t,e,n){super(t,e,Da(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dn(this.firestore,null,new Bt(t))}withConverter(t){return new Ui(this.firestore,t,this._path)}}function Bs(i,t,...e){if(i=di(i),cm("collection","path",t),i instanceof za){const n=Ce.fromString(t,...e);return Ad(n),new Ui(i,null,n)}{if(!(i instanceof dn||i instanceof Ui))throw new Dt(ot.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ce.fromString(t,...e));return Ad(n),new Ui(i.firestore,null,n)}}function Cu(i,t,...e){if(i=di(i),arguments.length===1&&(t=Qf.newId()),cm("doc","path",t),i instanceof za){const n=Ce.fromString(t,...e);return Md(n),new dn(i,null,new Bt(n))}{if(!(i instanceof dn||i instanceof Ui))throw new Dt(ot.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ce.fromString(t,...e));return Md(n),new dn(i.firestore,i instanceof Ui?i.converter:null,new Bt(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="AsyncQueue";class Cd{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new zp(this,"async_queue_retry"),this.ec=()=>{const n=al();n&&Tt(Rd,"Visibility state changed to "+n.visibilityState),this.C_.p_()},this.tc=t;const e=al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=al();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new Ni;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!hs(t))throw t;Tt(Rd,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(n=>{throw this.Ju=n,this.Yu=!1,pi("INTERNAL UNHANDLED ERROR: ",Id(n)),n}).then(n=>(this.Yu=!1,n))));return this.tc=e,e}enqueueAfterDelay(t,e,n){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const r=Su.createAndSchedule(this,t,e,n,s=>this.oc(s));return this.Hu.push(r),r}nc(){this.Ju&&Ht(47125,{_c:Id(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function Id(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(i){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(i,["next","error","complete"])}class hr extends za{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Cd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Cd(t),this._firestoreClient=void 0,await t}}}function ZE(i,t){const e=typeof i=="object"?i:Xg(),n=typeof i=="string"?i:pa,r=kg(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=C_("firestore");s&&QE(r,...s)}return r}function Iu(i){if(i._terminated)throw new Dt(ot.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||JE(i),i._firestoreClient}function JE(i){var t,e,n;const r=i._freezeSettings(),s=function(l,c,u,h){return new Sv(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,lm(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new qE(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ns(tn.fromBase64String(t))}catch(e){throw new Dt(ot.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ns(tn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new Dt(ot.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Dt(ot.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Dt(ot.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Jt(this._lat,t._lat)||Jt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=/^__.*__$/;class e0{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ji(t,this.data,this.fieldMask,e,this.fieldTransforms):new Js(t,this.data,e,this.fieldTransforms)}}class hm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ji(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function dm(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ht(40011,{hc:i})}}class Nu{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.Pc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new Nu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Tc({path:n,Ec:!1});return r.dc(t),r}Ac(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Tc({path:n,Ec:!1});return r.Pc(),r}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return Ma(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(dm(this.hc)&&t0.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class n0{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Va(t)}gc(t,e,n,r=!1){return new Nu({hc:t,methodName:e,fc:n,path:Je.emptyPath(),Ec:!1,mc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uu(i){const t=i._freezeSettings(),e=Va(i._databaseId);return new n0(i._databaseId,!!t.ignoreUndefinedProperties,e)}function fm(i,t,e,n,r,s={}){const o=i.gc(s.merge||s.mergeFields?2:0,t,e,r);Ou("Data must be an object, but it was:",o,n);const l=pm(n,o);let c,u;if(s.merge)c=new Rn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=uc(t,d,e);if(!o.contains(p))throw new Dt(ot.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);_m(h,p)||h.push(p)}c=new Rn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new e0(new En(l),c,u)}class Wa extends Pu{_toFieldTransform(t){if(t.hc!==2)throw t.hc===1?t.Vc(`${this._methodName}() can only appear at the top level of your update data`):t.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Wa}}function i0(i,t,e,n){const r=i.gc(1,t,e);Ou("Data must be an object, but it was:",r,n);const s=[],o=En.empty();qi(n,(c,u)=>{const h=Fu(t,c,e);u=di(u);const d=r.Ac(h);if(u instanceof Wa)s.push(h);else{const p=Xa(u,d);p!=null&&(s.push(h),o.set(h,p))}});const l=new Rn(s);return new hm(o,l,r.fieldTransforms)}function r0(i,t,e,n,r,s){const o=i.gc(1,t,e),l=[uc(t,n,e)],c=[r];if(s.length%2!=0)throw new Dt(ot.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(uc(t,s[p])),c.push(s[p+1]);const u=[],h=En.empty();for(let p=l.length-1;p>=0;--p)if(!_m(u,l[p])){const _=l[p];let x=c[p];x=di(x);const b=o.Ac(_);if(x instanceof Wa)u.push(_);else{const g=Xa(x,b);g!=null&&(u.push(_),h.set(_,g))}}const d=new Rn(u);return new hm(h,d,o.fieldTransforms)}function Xa(i,t){if(mm(i=di(i)))return Ou("Unsupported field value:",t,i),pm(i,t);if(i instanceof Pu)return function(n,r){if(!dm(r.hc))throw r.Vc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Vc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const l of n){let c=Xa(l,r.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=di(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jv(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=We.fromDate(n);return{timestampValue:Ea(r.serializer,s)}}if(n instanceof We){const s=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ea(r.serializer,s)}}if(n instanceof Du)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ns)return{bytesValue:Ip(r.serializer,n._byteString)};if(n instanceof dn){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pu(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof Lu)return function(o,l){return{mapValue:{fields:{[sp]:{stringValue:op},[ma]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return hu(l.serializer,u)})}}}}}}(n,r);throw r.Vc(`Unsupported field value: ${Ru(n)}`)}(i,t)}function pm(i,t){const e={};return Jf(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qi(i,(n,r)=>{const s=Xa(r,t.Ic(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function mm(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof We||i instanceof Du||i instanceof ns||i instanceof dn||i instanceof Pu||i instanceof Lu)}function Ou(i,t,e){if(!mm(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=Ru(e);throw n==="an object"?t.Vc(i+" a custom object"):t.Vc(i+" "+n)}}function uc(i,t,e){if((t=di(t))instanceof Ga)return t._internalPath;if(typeof t=="string")return Fu(i,t);throw Ma("Field path arguments must be of type string or ",i,!1,void 0,e)}const s0=new RegExp("[~\\*/\\[\\]]");function Fu(i,t,e){if(t.search(s0)>=0)throw Ma(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Ga(...t.split("."))._internalPath}catch{throw Ma(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Ma(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new Dt(ot.INVALID_ARGUMENT,l+i+c)}function _m(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new o0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(vm("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class o0 extends gm{data(){return super.data()}}function vm(i,t){return typeof t=="string"?Fu(i,t):t instanceof Ga?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Dt(ot.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l0{convertValue(t,e="none"){switch(zi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ne(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ki(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Ht(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return qi(t,(r,s)=>{n[r]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,r;const s=(r=(n=(e=t.fields)===null||e===void 0?void 0:e[ma].arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(o=>Ne(o.doubleValue));return new Lu(s)}convertGeoPoint(t){return new Du(Ne(t.latitude),Ne(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ia(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Gs(t));default:return null}}convertTimestamp(t){const e=Bi(t);return new We(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ce.fromString(t);_e(Op(n),9688,{name:t});const r=new Ws(n.get(1),n.get(3)),s=new Bt(n.popFirst(5));return r.isEqual(e)||pi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(i,t,e){let n;return n=i?i.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Em extends gm{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(vm("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ea extends Em{data(t={}){return super.data(t)}}class c0{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ds(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ea(this._firestore,this._userDataWriter,n.key,n,new Ds(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Dt(ot.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ds(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ds(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:u0(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function u0(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ht(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(i){i=kn(i,dn);const t=kn(i.firestore,hr);return YE(Iu(t),i._key).then(e=>Sm(t,i,e))}class Tm extends l0{constructor(t){super(),this.firestore=t}convertBytes(t){return new ns(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dn(this.firestore,null,e)}}function d0(i,t,e){i=kn(i,dn);const n=kn(i.firestore,hr),r=ym(i.converter,t);return Vu(n,[fm(Uu(n),"setDoc",i._key,r,i.converter!==null,e).toMutation(i._key,Bn.none())])}function f0(i,t,e,...n){i=kn(i,dn);const r=kn(i.firestore,hr),s=Uu(r);let o;return o=typeof(t=di(t))=="string"||t instanceof Ga?r0(s,"updateDoc",i._key,t,e,n):i0(s,"updateDoc",i._key,t),Vu(r,[o.toMutation(i._key,Bn.exists(!0))])}function xm(i,t){const e=kn(i.firestore,hr),n=Cu(i),r=ym(i.converter,t);return Vu(e,[fm(Uu(i.firestore),"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,Bn.exists(!1))]).then(()=>n)}function hc(i,...t){var e,n,r;i=di(i);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Pd(t[o])||(s=t[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Pd(t[o])){const d=t[o];t[o]=(e=d.next)===null||e===void 0?void 0:e.bind(d),t[o+1]=(n=d.error)===null||n===void 0?void 0:n.bind(d),t[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(i instanceof dn)u=kn(i.firestore,hr),h=Da(i._key.path),c={next:d=>{t[o]&&t[o](Sm(u,i,d))},error:t[o+1],complete:t[o+2]};else{const d=kn(i,Ha);u=kn(d.firestore,hr),h=d._query;const p=new Tm(u);c={next:_=>{t[o]&&t[o](new c0(u,p,d,_))},error:t[o+1],complete:t[o+2]},a0(i._query)}return function(p,_,x,b){const g=new om(b),m=new Qp(_,g,x);return p.asyncQueue.enqueueAndForget(async()=>Yp(await cc(p),m)),()=>{g.Cu(),p.asyncQueue.enqueueAndForget(async()=>Kp(await cc(p),m))}}(Iu(u),h,l,c)}function Vu(i,t){return function(n,r){const s=new Ni;return n.asyncQueue.enqueueAndForget(async()=>FE(await $E(n),r,s)),s.promise}(Iu(i),t)}function Sm(i,t,e){const n=e.docs.get(t._key),r=new Tm(i);return new Em(i,r,t._key,n,new Ds(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){cs=r})(Wg),da(new ks("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new hr(new ov(n.getProvider("auth-internal")),new cv(o,n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Dt(ot.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(u.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wr(Uh,Oh,t),Wr(Uh,Oh,"esm2017")})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="177",qr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},p0=0,Dd=1,m0=2,Mm=1,_0=2,ai=3,Wi=0,Tn=1,li=2,Oi=0,jr=1,Ld=2,Nd=3,Ud=4,g0=5,rr=100,v0=101,y0=102,E0=103,T0=104,x0=200,S0=201,M0=202,A0=203,dc=204,fc=205,w0=206,b0=207,R0=208,C0=209,I0=210,P0=211,D0=212,L0=213,N0=214,pc=0,mc=1,_c=2,is=3,gc=4,vc=5,yc=6,Ec=7,Am=0,U0=1,O0=2,Fi=0,F0=1,V0=2,B0=3,k0=4,z0=5,H0=6,G0=7,wm=300,rs=301,ss=302,Tc=303,xc=304,qa=306,Sc=1e3,ar=1001,Mc=1002,zn=1003,W0=1004,Ao=1005,Dn=1006,cl=1007,lr=1008,_i=1009,bm=1010,Rm=1011,$s=1012,ku=1013,dr=1014,ci=1015,io=1016,zu=1017,Hu=1018,Ys=1020,Cm=35902,Im=1021,Pm=1022,Vn=1023,Ks=1026,Qs=1027,Dm=1028,Gu=1029,Lm=1030,Wu=1031,Xu=1033,na=33776,ia=33777,ra=33778,sa=33779,Ac=35840,wc=35841,bc=35842,Rc=35843,Cc=36196,Ic=37492,Pc=37496,Dc=37808,Lc=37809,Nc=37810,Uc=37811,Oc=37812,Fc=37813,Vc=37814,Bc=37815,kc=37816,zc=37817,Hc=37818,Gc=37819,Wc=37820,Xc=37821,oa=36492,qc=36494,jc=36495,Nm=36283,$c=36284,Yc=36285,Kc=36286,X0=3200,q0=3201,j0=0,$0=1,Ci="",bn="srgb",os="srgb-linear",Aa="linear",Te="srgb",Mr=7680,Od=519,Y0=512,K0=513,Q0=514,Um=515,Z0=516,J0=517,tT=518,eT=519,Fd=35044,Vd="300 es",ui=2e3,wa=2001;class gr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,Qc=180/Math.PI;function ro(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function nT(i,t){return(i%t+t)%t}function ul(i,t,e){return(1-e)*i+e*t}function Ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const iT={DEG2RAD:aa};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,l){let c=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3];const p=s[o+0],_=s[o+1],x=s[o+2],b=s[o+3];if(l===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(l===1){t[e+0]=p,t[e+1]=_,t[e+2]=x,t[e+3]=b;return}if(d!==b||c!==p||u!==_||h!==x){let g=1-l;const m=c*p+u*_+h*x+d*b,N=m>=0?1:-1,D=1-m*m;if(D>Number.EPSILON){const k=Math.sqrt(D),O=Math.atan2(k,m*N);g=Math.sin(g*O)/k,l=Math.sin(l*O)/k}const I=l*N;if(c=c*g+p*I,u=u*g+_*I,h=h*g+x*I,d=d*g+b*I,g===1-l){const k=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=k,u*=k,h*=k,d*=k}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const l=n[r],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o],p=s[o+1],_=s[o+2],x=s[o+3];return t[e]=l*x+h*d+c*_-u*p,t[e+1]=c*x+h*p+u*d-l*_,t[e+2]=u*x+h*_+l*p-c*d,t[e+3]=h*x-l*d-c*p-u*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,l=Math.cos,c=Math.sin,u=l(n/2),h=l(r/2),d=l(s/2),p=c(n/2),_=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*h*d+u*_*x,this._y=u*_*d-p*h*x,this._z=u*h*x+p*_*d,this._w=u*h*d-p*_*x;break;case"YXZ":this._x=p*h*d+u*_*x,this._y=u*_*d-p*h*x,this._z=u*h*x-p*_*d,this._w=u*h*d+p*_*x;break;case"ZXY":this._x=p*h*d-u*_*x,this._y=u*_*d+p*h*x,this._z=u*h*x+p*_*d,this._w=u*h*d-p*_*x;break;case"ZYX":this._x=p*h*d-u*_*x,this._y=u*_*d+p*h*x,this._z=u*h*x-p*_*d,this._w=u*h*d+p*_*x;break;case"YZX":this._x=p*h*d+u*_*x,this._y=u*_*d+p*h*x,this._z=u*h*x-p*_*d,this._w=u*h*d-p*_*x;break;case"XZY":this._x=p*h*d-u*_*x,this._y=u*_*d-p*h*x,this._z=u*h*x+p*_*d,this._w=u*h*d+p*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],l=e[5],c=e[9],u=e[2],h=e[6],d=e[10],p=n+l+d;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(h-c)*_,this._y=(s-u)*_,this._z=(o-r)*_}else if(n>l&&n>d){const _=2*Math.sqrt(1+n-l-d);this._w=(h-c)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+u)/_}else if(l>d){const _=2*Math.sqrt(1+l-n-d);this._w=(s-u)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(c+h)/_}else{const _=2*Math.sqrt(1+d-n-l);this._w=(o-r)/_,this._x=(s+u)/_,this._y=(c+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,l=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*l+r*u-s*c,this._y=r*h+o*c+s*l-n*u,this._z=s*h+o*u+n*c-r*l,this._w=o*h-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*t._w+n*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*r+e*this._y,this._z=_*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),d=Math.sin((1-e)*h)/u,p=Math.sin(e*h)/u;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,l=t.z,c=t.w,u=2*(o*r-l*n),h=2*(l*e-s*r),d=2*(s*n-o*e);return this.x=e+c*u+o*d-l*h,this.y=n+c*h+l*u-s*d,this.z=r+c*d+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,l=e.y,c=e.z;return this.x=r*c-s*l,this.y=s*o-n*c,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new G,Bd=new fr;class Qt{constructor(t,e,n,r,s,o,l,c,u){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,u)}set(t,e,n,r,s,o,l,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=l,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],h=n[4],d=n[7],p=n[2],_=n[5],x=n[8],b=r[0],g=r[3],m=r[6],N=r[1],D=r[4],I=r[7],k=r[2],O=r[5],S=r[8];return s[0]=o*b+l*N+c*k,s[3]=o*g+l*D+c*O,s[6]=o*m+l*I+c*S,s[1]=u*b+h*N+d*k,s[4]=u*g+h*D+d*O,s[7]=u*m+h*I+d*S,s[2]=p*b+_*N+x*k,s[5]=p*g+_*D+x*O,s[8]=p*m+_*I+x*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*l*u-n*s*h+n*l*c+r*s*u-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=h*o-l*u,p=l*c-h*s,_=u*s-o*c,x=e*d+n*p+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return t[0]=d*b,t[1]=(r*u-h*n)*b,t[2]=(l*n-r*o)*b,t[3]=p*b,t[4]=(h*e-r*c)*b,t[5]=(r*s-l*e)*b,t[6]=_*b,t[7]=(n*c-u*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*l)+o+t,-r*u,r*c,-r*(-u*o+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new Qt;function Om(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rT(){const i=ba("canvas");return i.style.display="block",i}const kd={};function $r(i){i in kd||(kd[i]=!0,console.warn(i))}function sT(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function oT(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function aT(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zd=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lT(){const i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Te&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?Aa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:t,whitePoint:n,transfer:Aa,toXYZ:zd,fromXYZ:Hd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:zd,fromXYZ:Hd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const me=lT();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ar;class cT{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ar===void 0&&(Ar=ba("canvas")),Ar.width=t.width,Ar.height=t.height;const r=Ar.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ar}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ba("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uT=0;class qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=ro(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(fl(r[o].image)):s.push(fl(r[o]))}else s=fl(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cT.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hT=0;const pl=new G;class fn extends gr{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=ar,r=ar,s=Dn,o=lr,l=Vn,c=_i,u=fn.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=ro(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sc:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sc:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=wm;fn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,r=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],h=c[4],d=c[8],p=c[1],_=c[5],x=c[9],b=c[2],g=c[6],m=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+b)<.1&&Math.abs(x+g)<.1&&Math.abs(u+_+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(u+1)/2,I=(_+1)/2,k=(m+1)/2,O=(h+p)/4,S=(d+b)/4,T=(x+g)/4;return D>I&&D>k?D<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(D),r=O/n,s=S/n):I>k?I<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(I),n=O/r,s=T/r):k<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),n=S/s,r=T/s),this.set(n,r,s,e),this}let N=Math.sqrt((g-x)*(g-x)+(d-b)*(d-b)+(p-h)*(p-h));return Math.abs(N)<.001&&(N=1),this.x=(g-x)/N,this.y=(d-b)/N,this.z=(p-h)/N,this.w=Math.acos((u+_+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dT extends gr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new fn(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new qu(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends dT{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fm extends fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fT extends fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class so{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),bo.subVectors(this.max,As),wr.subVectors(t.a,As),br.subVectors(t.b,As),Rr.subVectors(t.c,As),xi.subVectors(br,wr),Si.subVectors(Rr,br),Ki.subVectors(wr,Rr);let e=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-Ki.z,Ki.y,xi.z,0,-xi.x,Si.z,0,-Si.x,Ki.z,0,-Ki.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-Ki.y,Ki.x,0];return!ml(e,wr,br,Rr,bo)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,wr,br,Rr,bo))?!1:(Ro.crossVectors(xi,Si),e=[Ro.x,Ro.y,Ro.z],ml(e,wr,br,Rr,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ni=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,wo=new so,wr=new G,br=new G,Rr=new G,xi=new G,Si=new G,Ki=new G,As=new G,bo=new G,Ro=new G,Qi=new G;function ml(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qi.fromArray(i,s);const l=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),c=t.dot(Qi),u=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const pT=new so,ws=new G,_l=new G;class ju{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pT.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ws,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(_l)),this.expandByPoint(ws.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ii=new G,gl=new G,Co=new G,Mi=new G,vl=new G,Io=new G,yl=new G;class Vm{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){gl.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(gl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Co),l=Mi.dot(this.direction),c=-Mi.dot(Co),u=Mi.lengthSq(),h=Math.abs(1-o*o);let d,p,_,x;if(h>0)if(d=o*c-l,p=o*l-c,x=s*h,d>=0)if(p>=-x)if(p<=x){const b=1/h;d*=b,p*=b,_=d*(d+o*p+2*l)+p*(o*d+p+2*c)+u}else p=s,d=Math.max(0,-(o*p+l)),_=-d*d+p*(p+2*c)+u;else p=-s,d=Math.max(0,-(o*p+l)),_=-d*d+p*(p+2*c)+u;else p<=-x?(d=Math.max(0,-(-o*s+l)),p=d>0?-s:Math.min(Math.max(-s,-c),s),_=-d*d+p*(p+2*c)+u):p<=x?(d=0,p=Math.min(Math.max(-s,-c),s),_=p*(p+2*c)+u):(d=Math.max(0,-(o*s+l)),p=d>0?s:Math.min(Math.max(-s,-c),s),_=-d*d+p*(p+2*c)+u);else p=o>0?-s:s,d=Math.max(0,-(o*p+l)),_=-d*d+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gl).addScaledVector(Co,p),_}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),r=ii.dot(ii)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,l,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(l=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,r,s){vl.subVectors(e,t),Io.subVectors(n,t),yl.crossVectors(vl,Io);let o=this.direction.dot(yl),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const c=l*this.direction.dot(Io.crossVectors(Mi,Io));if(c<0)return null;const u=l*this.direction.dot(vl.cross(Mi));if(u<0||c+u>o)return null;const h=-l*Mi.dot(yl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,e,n,r,s,o,l,c,u,h,d,p,_,x,b,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,u,h,d,p,_,x,b,g)}set(t,e,n,r,s,o,l,c,u,h,d,p,_,x,b,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=l,m[13]=c,m[2]=u,m[6]=h,m[10]=d,m[14]=p,m[3]=_,m[7]=x,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Cr.setFromMatrixColumn(t,0).length(),s=1/Cr.setFromMatrixColumn(t,1).length(),o=1/Cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=o*h,_=o*d,x=l*h,b=l*d;e[0]=c*h,e[4]=-c*d,e[8]=u,e[1]=_+x*u,e[5]=p-b*u,e[9]=-l*c,e[2]=b-p*u,e[6]=x+_*u,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,_=c*d,x=u*h,b=u*d;e[0]=p+b*l,e[4]=x*l-_,e[8]=o*u,e[1]=o*d,e[5]=o*h,e[9]=-l,e[2]=_*l-x,e[6]=b+p*l,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,_=c*d,x=u*h,b=u*d;e[0]=p-b*l,e[4]=-o*d,e[8]=x+_*l,e[1]=_+x*l,e[5]=o*h,e[9]=b-p*l,e[2]=-o*u,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,_=o*d,x=l*h,b=l*d;e[0]=c*h,e[4]=x*u-_,e[8]=p*u+b,e[1]=c*d,e[5]=b*u+p,e[9]=_*u-x,e[2]=-u,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,_=o*u,x=l*c,b=l*u;e[0]=c*h,e[4]=b-p*d,e[8]=x*d+_,e[1]=d,e[5]=o*h,e[9]=-l*h,e[2]=-u*h,e[6]=_*d+x,e[10]=p-b*d}else if(t.order==="XZY"){const p=o*c,_=o*u,x=l*c,b=l*u;e[0]=c*h,e[4]=-d,e[8]=u*h,e[1]=p*d+b,e[5]=o*h,e[9]=_*d-x,e[2]=x*d-_,e[6]=l*h,e[10]=b*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mT,t,_T)}lookAt(t,e,n){const r=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ai.crossVectors(n,An),Ai.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ai.crossVectors(n,An)),Ai.normalize(),Po.crossVectors(An,Ai),r[0]=Ai.x,r[4]=Po.x,r[8]=An.x,r[1]=Ai.y,r[5]=Po.y,r[9]=An.y,r[2]=Ai.z,r[6]=Po.z,r[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],h=n[1],d=n[5],p=n[9],_=n[13],x=n[2],b=n[6],g=n[10],m=n[14],N=n[3],D=n[7],I=n[11],k=n[15],O=r[0],S=r[4],T=r[8],y=r[12],v=r[1],M=r[5],P=r[9],w=r[13],J=r[2],nt=r[6],et=r[10],it=r[14],j=r[3],pt=r[7],xt=r[11],Lt=r[15];return s[0]=o*O+l*v+c*J+u*j,s[4]=o*S+l*M+c*nt+u*pt,s[8]=o*T+l*P+c*et+u*xt,s[12]=o*y+l*w+c*it+u*Lt,s[1]=h*O+d*v+p*J+_*j,s[5]=h*S+d*M+p*nt+_*pt,s[9]=h*T+d*P+p*et+_*xt,s[13]=h*y+d*w+p*it+_*Lt,s[2]=x*O+b*v+g*J+m*j,s[6]=x*S+b*M+g*nt+m*pt,s[10]=x*T+b*P+g*et+m*xt,s[14]=x*y+b*w+g*it+m*Lt,s[3]=N*O+D*v+I*J+k*j,s[7]=N*S+D*M+I*nt+k*pt,s[11]=N*T+D*P+I*et+k*xt,s[15]=N*y+D*w+I*it+k*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],l=t[5],c=t[9],u=t[13],h=t[2],d=t[6],p=t[10],_=t[14],x=t[3],b=t[7],g=t[11],m=t[15];return x*(+s*c*d-r*u*d-s*l*p+n*u*p+r*l*_-n*c*_)+b*(+e*c*_-e*u*p+s*o*p-r*o*_+r*u*h-s*c*h)+g*(+e*u*d-e*l*_-s*o*d+n*o*_+s*l*h-n*u*h)+m*(-r*l*h-e*c*d+e*l*p+r*o*d-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],d=t[9],p=t[10],_=t[11],x=t[12],b=t[13],g=t[14],m=t[15],N=d*g*u-b*p*u+b*c*_-l*g*_-d*c*m+l*p*m,D=x*p*u-h*g*u-x*c*_+o*g*_+h*c*m-o*p*m,I=h*b*u-x*d*u+x*l*_-o*b*_-h*l*m+o*d*m,k=x*d*c-h*b*c-x*l*p+o*b*p+h*l*g-o*d*g,O=e*N+n*D+r*I+s*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/O;return t[0]=N*S,t[1]=(b*p*s-d*g*s-b*r*_+n*g*_+d*r*m-n*p*m)*S,t[2]=(l*g*s-b*c*s+b*r*u-n*g*u-l*r*m+n*c*m)*S,t[3]=(d*c*s-l*p*s-d*r*u+n*p*u+l*r*_-n*c*_)*S,t[4]=D*S,t[5]=(h*g*s-x*p*s+x*r*_-e*g*_-h*r*m+e*p*m)*S,t[6]=(x*c*s-o*g*s-x*r*u+e*g*u+o*r*m-e*c*m)*S,t[7]=(o*p*s-h*c*s+h*r*u-e*p*u-o*r*_+e*c*_)*S,t[8]=I*S,t[9]=(x*d*s-h*b*s-x*n*_+e*b*_+h*n*m-e*d*m)*S,t[10]=(o*b*s-x*l*s+x*n*u-e*b*u-o*n*m+e*l*m)*S,t[11]=(h*l*s-o*d*s-h*n*u+e*d*u+o*n*_-e*l*_)*S,t[12]=k*S,t[13]=(h*b*r-x*d*r+x*n*p-e*b*p-h*n*g+e*d*g)*S,t[14]=(x*l*r-o*b*r-x*n*c+e*b*c+o*n*g-e*l*g)*S,t[15]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*p+e*l*p)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,l=t.y,c=t.z,u=s*o,h=s*l;return this.set(u*o+n,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+n,h*c-r*o,0,u*c-r*l,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,l=e._z,c=e._w,u=s+s,h=o+o,d=l+l,p=s*u,_=s*h,x=s*d,b=o*h,g=o*d,m=l*d,N=c*u,D=c*h,I=c*d,k=n.x,O=n.y,S=n.z;return r[0]=(1-(b+m))*k,r[1]=(_+I)*k,r[2]=(x-D)*k,r[3]=0,r[4]=(_-I)*O,r[5]=(1-(p+m))*O,r[6]=(g+N)*O,r[7]=0,r[8]=(x+D)*S,r[9]=(g-N)*S,r[10]=(1-(p+b))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),l=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Un.copy(this);const u=1/s,h=1/o,d=1/l;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,o,l=ui){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let _,x;if(l===ui)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(l===wa)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,l=ui){const c=this.elements,u=1/(e-t),h=1/(n-r),d=1/(o-s),p=(e+t)*u,_=(n+r)*h;let x,b;if(l===ui)x=(o+s)*d,b=-2*d;else if(l===wa)x=s*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=b,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Cr=new G,Un=new Ve,mT=new G(0,0,0),_T=new G(1,1,1),Ai=new G,Po=new G,An=new G,Gd=new Ve,Wd=new fr;class gi{constructor(t=0,e=0,n=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],h=r[9],d=r[2],p=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gT=0;const Xd=new G,Ir=new fr,ri=new Ve,Do=new G,bs=new G,vT=new G,yT=new fr,qd=new G(1,0,0),jd=new G(0,1,0),$d=new G(0,0,1),Yd={type:"added"},ET={type:"removed"},Pr={type:"childadded",child:null},El={type:"childremoved",child:null};class Cn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new G,e=new gi,n=new fr,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Qt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(qd,t)}rotateY(t){return this.rotateOnAxis(jd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return Xd.copy(t).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qd,t)}translateY(t){return this.translateOnAxis(jd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(bs,Do,this.up):ri.lookAt(Do,bs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(ri),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yd),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ET),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yd),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,vT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,yT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(t.animations,c))}}if(e){const l=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),_=o(t.animations),x=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new G(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new G,si=new G,Tl=new G,oi=new G,Dr=new G,Lr=new G,Kd=new G,xl=new G,Sl=new G,Ml=new G,Al=new Ue,wl=new Ue,bl=new Ue;class Fn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),On.subVectors(t,e),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){On.subVectors(r,e),si.subVectors(n,e),Tl.subVectors(t,e);const o=On.dot(On),l=On.dot(si),c=On.dot(Tl),u=si.dot(si),h=si.dot(Tl),d=o*u-l*l;if(d===0)return s.set(0,0,0),null;const p=1/d,_=(u*c-l*h)*p,x=(o*h-l*c)*p;return s.set(1-_-x,x,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,r,s,o,l,c){return this.getBarycoord(t,e,n,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(l,oi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Al.setScalar(0),wl.setScalar(0),bl.setScalar(0),Al.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),bl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Al,s.x),o.addScaledVector(wl,s.y),o.addScaledVector(bl,s.z),o}static isFrontFacing(t,e,n,r){return On.subVectors(n,e),si.subVectors(t,e),On.cross(si).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),si.subVectors(this.a,this.b),On.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Fn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,l;Dr.subVectors(r,n),Lr.subVectors(s,n),xl.subVectors(t,n);const c=Dr.dot(xl),u=Lr.dot(xl);if(c<=0&&u<=0)return e.copy(n);Sl.subVectors(t,r);const h=Dr.dot(Sl),d=Lr.dot(Sl);if(h>=0&&d<=h)return e.copy(r);const p=c*d-h*u;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Dr,o);Ml.subVectors(t,s);const _=Dr.dot(Ml),x=Lr.dot(Ml);if(x>=0&&_<=x)return e.copy(s);const b=_*u-c*x;if(b<=0&&u>=0&&x<=0)return l=u/(u-x),e.copy(n).addScaledVector(Lr,l);const g=h*x-_*d;if(g<=0&&d-h>=0&&_-x>=0)return Kd.subVectors(s,r),l=(d-h)/(d-h+(_-x)),e.copy(r).addScaledVector(Kd,l);const m=1/(g+b+p);return o=b*m,l=p*m,e.copy(n).addScaledVector(Dr,o).addScaledVector(Lr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=nT(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Rl(o,s,t+1/3),this.g=Rl(o,s,t),this.b=Rl(o,s,t-1/3)}return me.colorSpaceToWorking(this,r),this}setStyle(t,e=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const n=km[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return me.workingToColorSpace(on.copy(this),t),Math.round(ne(on.r*255,0,255))*65536+Math.round(ne(on.g*255,0,255))*256+Math.round(ne(on.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(on.copy(this),e);const n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const h=(l+o)/2;if(l===o)c=0,u=0;else{const d=o-l;switch(u=h<=.5?d/(o+l):d/(2-o-l),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=bn){me.workingToColorSpace(on.copy(this),t);const e=on.r,n=on.g,r=on.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Lo);const n=ul(wi.h,Lo.h,e),r=ul(wi.s,Lo.s,e),s=ul(wi.l,Lo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Se;Se.NAMES=km;let TT=0;class ja extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=jr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $u extends ja{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new G,No=new ee;let xT=0;class $n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xT++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fd,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fd&&(t.usage=this.usage),t}}class zm extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hm extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yn extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ST=0;const In=new Ve,Cl=new Cn,Nr=new G,wn=new so,Rs=new so,$e=new G;class $i extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Om(t)?Hm:zm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ju);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const l=e[s];Rs.setFromBufferAttribute(l),this.morphTargetsRelative?($e.addVectors(wn.min,Rs.min),wn.expandByPoint($e),$e.addVectors(wn.max,Rs.max),wn.expandByPoint($e)):(wn.expandByPoint(Rs.min),wn.expandByPoint(Rs.max))}wn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const l=e[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)$e.fromBufferAttribute(l,u),c&&(Nr.fromBufferAttribute(t,u),$e.add(Nr)),r=Math.max(r,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let T=0;T<n.count;T++)l[T]=new G,c[T]=new G;const u=new G,h=new G,d=new G,p=new ee,_=new ee,x=new ee,b=new G,g=new G;function m(T,y,v){u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),x.fromBufferAttribute(s,v),h.sub(u),d.sub(u),_.sub(p),x.sub(p);const M=1/(_.x*x.y-x.x*_.y);isFinite(M)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(d,-_.y).multiplyScalar(M),g.copy(d).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(M),l[T].add(b),l[y].add(b),l[v].add(b),c[T].add(g),c[y].add(g),c[v].add(g))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let T=0,y=N.length;T<y;++T){const v=N[T],M=v.start,P=v.count;for(let w=M,J=M+P;w<J;w+=3)m(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const D=new G,I=new G,k=new G,O=new G;function S(T){k.fromBufferAttribute(r,T),O.copy(k);const y=l[T];D.copy(y),D.sub(k.multiplyScalar(k.dot(y))).normalize(),I.crossVectors(O,y);const M=I.dot(c[T])<0?-1:1;o.setXYZW(T,D.x,D.y,D.z,M)}for(let T=0,y=N.length;T<y;++T){const v=N[T],M=v.start,P=v.count;for(let w=M,J=M+P;w<J;w+=3)S(t.getX(w+0)),S(t.getX(w+1)),S(t.getX(w+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const r=new G,s=new G,o=new G,l=new G,c=new G,u=new G,h=new G,d=new G;if(t)for(let p=0,_=t.count;p<_;p+=3){const x=t.getX(p+0),b=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),l.add(h),c.add(h),u.add(h),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,_=e.count;p<_;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(l,c){const u=l.array,h=l.itemSize,d=l.normalized,p=new u.constructor(c.length*h);let _=0,x=0;for(let b=0,g=c.length;b<g;b++){l.isInterleavedBufferAttribute?_=c[b]*l.data.stride+l.offset:_=c[b]*h;for(let m=0;m<h;m++)p[x++]=u[_++]}return new $n(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $i,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=t(c,n);e.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,d=u.length;h<d;h++){const p=u[h],_=t(p,n);c.push(_)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,p=u.length;d<p;d++){const _=u[d];h.push(_.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let p=0,_=d.length;p<_;p++)h.push(d[p].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new Ve,Zi=new Vm,Uo=new ju,Zd=new G,Oo=new G,Fo=new G,Vo=new G,Il=new G,Bo=new G,Jd=new G,ko=new G;class Xn extends Cn{constructor(t=new $i,e=new $u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Bo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],d=s[c];h!==0&&(Il.fromBufferAttribute(d,t),o?Bo.addScaledVector(Il,h):Bo.addScaledVector(Il.sub(e),h))}e.add(Bo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Zi.copy(t.ray).recast(t.near),!(Uo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Uo,Zd)===null||Zi.origin.distanceToSquared(Zd)>(t.far-t.near)**2))&&(Qd.copy(s).invert(),Zi.copy(t.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,b=p.length;x<b;x++){const g=p[x],m=o[g.materialIndex],N=Math.max(g.start,_.start),D=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let I=N,k=D;I<k;I+=3){const O=l.getX(I),S=l.getX(I+1),T=l.getX(I+2);r=zo(this,m,t,n,u,h,d,O,S,T),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let g=x,m=b;g<m;g+=3){const N=l.getX(g),D=l.getX(g+1),I=l.getX(g+2);r=zo(this,o,t,n,u,h,d,N,D,I),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,b=p.length;x<b;x++){const g=p[x],m=o[g.materialIndex],N=Math.max(g.start,_.start),D=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let I=N,k=D;I<k;I+=3){const O=I,S=I+1,T=I+2;r=zo(this,m,t,n,u,h,d,O,S,T),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,_.start),b=Math.min(c.count,_.start+_.count);for(let g=x,m=b;g<m;g+=3){const N=g,D=g+1,I=g+2;r=zo(this,o,t,n,u,h,d,N,D,I),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function MT(i,t,e,n,r,s,o,l){let c;if(t.side===Tn?c=n.intersectTriangle(o,s,r,!0,l):c=n.intersectTriangle(r,s,o,t.side===Wi,l),c===null)return null;ko.copy(l),ko.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(ko);return u<e.near||u>e.far?null:{distance:u,point:ko.clone(),object:i}}function zo(i,t,e,n,r,s,o,l,c,u){i.getVertexPosition(l,Oo),i.getVertexPosition(c,Fo),i.getVertexPosition(u,Vo);const h=MT(i,t,e,n,Oo,Fo,Vo,Jd);if(h){const d=new G;Fn.getBarycoord(Jd,Oo,Fo,Vo,d),r&&(h.uv=Fn.getInterpolatedAttribute(r,l,c,u,d,new ee)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,l,c,u,d,new ee)),o&&(h.normal=Fn.getInterpolatedAttribute(o,l,c,u,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new G,materialIndex:0};Fn.getNormal(Oo,Fo,Vo,p.normal),h.face=p,h.barycoord=d}return h}class oo extends $i{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],d=[];let p=0,_=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Yn(u,3)),this.setAttribute("normal",new Yn(h,3)),this.setAttribute("uv",new Yn(d,2));function x(b,g,m,N,D,I,k,O,S,T,y){const v=I/S,M=k/T,P=I/2,w=k/2,J=O/2,nt=S+1,et=T+1;let it=0,j=0;const pt=new G;for(let xt=0;xt<et;xt++){const Lt=xt*M-w;for(let Xt=0;Xt<nt;Xt++){const jt=Xt*v-P;pt[b]=jt*N,pt[g]=Lt*D,pt[m]=J,u.push(pt.x,pt.y,pt.z),pt[b]=0,pt[g]=0,pt[m]=O>0?1:-1,h.push(pt.x,pt.y,pt.z),d.push(Xt/S),d.push(1-xt/T),it+=1}}for(let xt=0;xt<T;xt++)for(let Lt=0;Lt<S;Lt++){const Xt=p+Lt+nt*xt,jt=p+Lt+nt*(xt+1),Z=p+(Lt+1)+nt*(xt+1),ct=p+(Lt+1)+nt*xt;c.push(Xt,jt,ct),c.push(jt,Z,ct),j+=6}l.addGroup(_,j,y),_+=j,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const r in n)t[r]=n[r]}return t}function AT(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const wT={clone:as,merge:hn};var bT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ja{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=AT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wm extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new G,tf=new ee,ef=new ee;class Pn extends Wm{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,tf,ef),e.subVectors(ef,tf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(aa*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ur=-90,Or=1;class CT extends Cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Ur,Or,t,e);r.layers=this.layers,this.add(r);const s=new Pn(Ur,Or,t,e);s.layers=this.layers,this.add(s);const o=new Pn(Ur,Or,t,e);o.layers=this.layers,this.add(o);const l=new Pn(Ur,Or,t,e);l.layers=this.layers,this.add(l);const c=new Pn(Ur,Or,t,e);c.layers=this.layers,this.add(c);const u=new Pn(Ur,Or,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,l,c]=e;for(const u of e)this.remove(u);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,p,_),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Xm extends fn{constructor(t=[],e=rs,n,r,s,o,l,c,u,h){super(t,e,n,r,s,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IT extends pr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Xm(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oo(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Oi});s.uniforms.tEquirect.value=e;const o=new Xn(r,s),l=e.minFilter;return e.minFilter===lr&&(e.minFilter=Dn),new CT(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Ho extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const b of t.hand.values()){const g=e.getJointPose(b,n),m=this._getHandJoint(u,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=h.position.distanceTo(d.position),_=.02,x=.005;u.inputState.pinching&&p>_+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=_-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ho;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class DT extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Dl=new G,LT=new G,NT=new Qt;class Ri{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Dl.subVectors(n,e).cross(LT.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||NT.getNormalMatrix(t),r=this.coplanarPoint(Dl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ju,Go=new G;class qm{constructor(t=new Ri,e=new Ri,n=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],_=r[8],x=r[9],b=r[10],g=r[11],m=r[12],N=r[13],D=r[14],I=r[15];if(n[0].setComponents(c-s,p-u,g-_,I-m).normalize(),n[1].setComponents(c+s,p+u,g+_,I+m).normalize(),n[2].setComponents(c+o,p+h,g+x,I+N).normalize(),n[3].setComponents(c-o,p-h,g-x,I-N).normalize(),n[4].setComponents(c-l,p-d,g-b,I-D).normalize(),e===ui)n[5].setComponents(c+l,p+d,g+b,I+D).normalize();else if(e===wa)n[5].setComponents(l,d,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Go.x=r.normal.x>0?t.max.x:t.min.x,Go.y=r.normal.y>0?t.max.y:t.min.y,Go.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class UT extends fn{constructor(t,e,n,r,s=Dn,o=Dn,l,c,u){super(t,e,n,r,s,o,l,c,u),this.isVideoTexture=!0,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class jm extends fn{constructor(t,e,n=dr,r,s,o,l=zn,c=zn,u,h=Ks,d=1){if(h!==Ks&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:d};super(p,r,s,o,l,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $a extends $i{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,l=Math.floor(n),c=Math.floor(r),u=l+1,h=c+1,d=t/l,p=e/c,_=[],x=[],b=[],g=[];for(let m=0;m<h;m++){const N=m*p-o;for(let D=0;D<u;D++){const I=D*d-s;x.push(I,-N,0),b.push(0,0,1),g.push(D/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let N=0;N<l;N++){const D=N+u*m,I=N+u*(m+1),k=N+1+u*(m+1),O=N+1+u*m;_.push(D,I,O),_.push(I,k,O)}this.setIndex(_),this.setAttribute("position",new Yn(x,3)),this.setAttribute("normal",new Yn(b,3)),this.setAttribute("uv",new Yn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yu extends $i{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let u=0;const h=[],d=new G,p=new G,_=[],x=[],b=[],g=[];for(let m=0;m<=n;m++){const N=[],D=m/n;let I=0;m===0&&o===0?I=.5/e:m===n&&c===Math.PI&&(I=-.5/e);for(let k=0;k<=e;k++){const O=k/e;d.x=-t*Math.cos(r+O*s)*Math.sin(o+D*l),d.y=t*Math.cos(o+D*l),d.z=t*Math.sin(r+O*s)*Math.sin(o+D*l),x.push(d.x,d.y,d.z),p.copy(d).normalize(),b.push(p.x,p.y,p.z),g.push(O+I,1-D),N.push(u++)}h.push(N)}for(let m=0;m<n;m++)for(let N=0;N<e;N++){const D=h[m][N+1],I=h[m][N],k=h[m+1][N],O=h[m+1][N+1];(m!==0||o>0)&&_.push(D,I,O),(m!==n-1||c<Math.PI)&&_.push(I,k,O)}this.setIndex(_),this.setAttribute("position",new Yn(x,3)),this.setAttribute("normal",new Yn(b,3)),this.setAttribute("uv",new Yn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class OT extends ja{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FT extends ja{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class VT extends Wm{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class BT extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class nf{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kT extends gr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rf(i,t,e,n){const r=zT(n);switch(e){case Im:return i*t;case Dm:return i*t/r.components*r.byteLength;case Gu:return i*t/r.components*r.byteLength;case Lm:return i*t*2/r.components*r.byteLength;case Wu:return i*t*2/r.components*r.byteLength;case Pm:return i*t*3/r.components*r.byteLength;case Vn:return i*t*4/r.components*r.byteLength;case Xu:return i*t*4/r.components*r.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:case Rc:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case bc:return Math.max(i,8)*Math.max(t,8)/2;case Cc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case qc:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nm:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yc:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zT(i){switch(i){case _i:case bm:return{byteLength:1,components:1};case $s:case Rm:case io:return{byteLength:2,components:1};case zu:case Hu:return{byteLength:2,components:4};case dr:case ku:case ci:return{byteLength:4,components:1};case Cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $m(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function HT(i){const t=new WeakMap;function e(l,c){const u=l.array,h=l.usage,d=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,h),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,u){const h=c.array,d=c.updateRanges;if(i.bindBuffer(u,l),d.length===0)i.bufferSubData(u,0,h);else{d.sort((_,x)=>_.start-x.start);let p=0;for(let _=1;_<d.length;_++){const x=d[p],b=d[_];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++p,d[p]=b)}d.length=p+1;for(let _=0,x=d.length;_<x;_++){const b=d[_];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=t.get(l);if(u===void 0)t.set(l,e(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:o}}var GT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:GT,alphahash_pars_fragment:WT,alphamap_fragment:XT,alphamap_pars_fragment:qT,alphatest_fragment:jT,alphatest_pars_fragment:$T,aomap_fragment:YT,aomap_pars_fragment:KT,batching_pars_vertex:QT,batching_vertex:ZT,begin_vertex:JT,beginnormal_vertex:tx,bsdfs:ex,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:hx,common:dx,cube_uv_reflection_fragment:fx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:_x,emissivemap_fragment:gx,emissivemap_pars_fragment:vx,colorspace_fragment:yx,colorspace_pars_fragment:Ex,envmap_fragment:Tx,envmap_common_pars_fragment:xx,envmap_pars_fragment:Sx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Ux,envmap_vertex:Ax,fog_vertex:wx,fog_pars_vertex:bx,fog_fragment:Rx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Px,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Lx,lights_pars_begin:Nx,lights_toon_fragment:Ox,lights_toon_pars_fragment:Fx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Bx,lights_physical_fragment:kx,lights_physical_pars_fragment:zx,lights_fragment_begin:Hx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:$x,map_fragment:Yx,map_pars_fragment:Kx,map_particle_fragment:Qx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:tS,morphinstance_vertex:eS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:oS,normal_fragment_maps:aS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:dS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:_S,packing:gS,premultiplied_alpha_fragment:vS,project_vertex:yS,dithering_fragment:ES,dithering_pars_fragment:TS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:MS,shadowmap_pars_vertex:AS,shadowmap_vertex:wS,shadowmask_pars_fragment:bS,skinbase_vertex:RS,skinning_pars_vertex:CS,skinning_vertex:IS,skinnormal_vertex:PS,specularmap_fragment:DS,specularmap_pars_fragment:LS,tonemapping_fragment:NS,tonemapping_pars_fragment:US,transmission_fragment:OS,transmission_pars_fragment:FS,uv_pars_fragment:VS,uv_pars_vertex:BS,uv_vertex:kS,worldpos_vertex:zS,background_vert:HS,background_frag:GS,backgroundCube_vert:WS,backgroundCube_frag:XS,cube_vert:qS,cube_frag:jS,depth_vert:$S,depth_frag:YS,distanceRGBA_vert:KS,distanceRGBA_frag:QS,equirect_vert:ZS,equirect_frag:JS,linedashed_vert:tM,linedashed_frag:eM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:hM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:_M,points_frag:gM,shadow_vert:vM,shadow_frag:yM,sprite_vert:EM,sprite_frag:TM},_t={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Wn={basic:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Se(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:hn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:hn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Se(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:hn([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:hn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:hn([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:hn([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:hn([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:hn([_t.lights,_t.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Wn.physical={uniforms:hn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Wo={r:0,b:0,g:0},tr=new gi,xM=new Ve;function SM(i,t,e,n,r,s,o){const l=new Se(0);let c=s===!0?0:1,u,h,d=null,p=0,_=null;function x(D){let I=D.isScene===!0?D.background:null;return I&&I.isTexture&&(I=(D.backgroundBlurriness>0?e:t).get(I)),I}function b(D){let I=!1;const k=x(D);k===null?m(l,c):k&&k.isColor&&(m(k,1),I=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(D,I){const k=x(I);k&&(k.isCubeTexture||k.mapping===qa)?(h===void 0&&(h=new Xn(new oo(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:as(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),tr.copy(I.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),h.material.uniforms.envMap.value=k,h.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(tr)),h.material.toneMapped=me.getTransfer(k.colorSpace)!==Te,(d!==k||p!==k.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=k,p=k.version,_=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):k&&k.isTexture&&(u===void 0&&(u=new Xn(new $a(2,2),new Xi({name:"BackgroundMaterial",uniforms:as(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=k,u.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,u.material.toneMapped=me.getTransfer(k.colorSpace)!==Te,k.matrixAutoUpdate===!0&&k.updateMatrix(),u.material.uniforms.uvTransform.value.copy(k.matrix),(d!==k||p!==k.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=k,p=k.version,_=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function m(D,I){D.getRGB(Wo,Gm(i)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,I,o)}function N(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(D,I=1){l.set(D),c=I,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(D){c=D,m(l,c)},render:b,addToRenderList:g,dispose:N}}function MM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function l(v,M,P,w,J){let nt=!1;const et=d(w,P,M);s!==et&&(s=et,u(s.object)),nt=_(v,w,P,J),nt&&x(v,w,P,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,I(v,M,P,w),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return i.createVertexArray()}function u(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,M,P){const w=P.wireframe===!0;let J=n[v.id];J===void 0&&(J={},n[v.id]=J);let nt=J[M.id];nt===void 0&&(nt={},J[M.id]=nt);let et=nt[w];return et===void 0&&(et=p(c()),nt[w]=et),et}function p(v){const M=[],P=[],w=[];for(let J=0;J<e;J++)M[J]=0,P[J]=0,w[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:w,object:v,attributes:{},index:null}}function _(v,M,P,w){const J=s.attributes,nt=M.attributes;let et=0;const it=P.getAttributes();for(const j in it)if(it[j].location>=0){const xt=J[j];let Lt=nt[j];if(Lt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(Lt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(Lt=v.instanceColor)),xt===void 0||xt.attribute!==Lt||Lt&&xt.data!==Lt.data)return!0;et++}return s.attributesNum!==et||s.index!==w}function x(v,M,P,w){const J={},nt=M.attributes;let et=0;const it=P.getAttributes();for(const j in it)if(it[j].location>=0){let xt=nt[j];xt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor));const Lt={};Lt.attribute=xt,xt&&xt.data&&(Lt.data=xt.data),J[j]=Lt,et++}s.attributes=J,s.attributesNum=et,s.index=w}function b(){const v=s.newAttributes;for(let M=0,P=v.length;M<P;M++)v[M]=0}function g(v){m(v,0)}function m(v,M){const P=s.newAttributes,w=s.enabledAttributes,J=s.attributeDivisors;P[v]=1,w[v]===0&&(i.enableVertexAttribArray(v),w[v]=1),J[v]!==M&&(i.vertexAttribDivisor(v,M),J[v]=M)}function N(){const v=s.newAttributes,M=s.enabledAttributes;for(let P=0,w=M.length;P<w;P++)M[P]!==v[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function D(v,M,P,w,J,nt,et){et===!0?i.vertexAttribIPointer(v,M,P,J,nt):i.vertexAttribPointer(v,M,P,w,J,nt)}function I(v,M,P,w){b();const J=w.attributes,nt=P.getAttributes(),et=M.defaultAttributeValues;for(const it in nt){const j=nt[it];if(j.location>=0){let pt=J[it];if(pt===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){const xt=pt.normalized,Lt=pt.itemSize,Xt=t.get(pt);if(Xt===void 0)continue;const jt=Xt.buffer,Z=Xt.type,ct=Xt.bytesPerElement,Ct=Z===i.INT||Z===i.UNSIGNED_INT||pt.gpuType===ku;if(pt.isInterleavedBufferAttribute){const gt=pt.data,Pt=gt.stride,he=pt.offset;if(gt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<j.locationSize;Ot++)m(j.location+Ot,gt.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ot=0;Ot<j.locationSize;Ot++)g(j.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Ot=0;Ot<j.locationSize;Ot++)D(j.location+Ot,Lt/j.locationSize,Z,xt,Pt*ct,(he+Lt/j.locationSize*Ot)*ct,Ct)}else{if(pt.isInstancedBufferAttribute){for(let gt=0;gt<j.locationSize;gt++)m(j.location+gt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let gt=0;gt<j.locationSize;gt++)g(j.location+gt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let gt=0;gt<j.locationSize;gt++)D(j.location+gt,Lt/j.locationSize,Z,xt,Lt*ct,Lt/j.locationSize*gt*ct,Ct)}}else if(et!==void 0){const xt=et[it];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(j.location,xt);break;case 3:i.vertexAttrib3fv(j.location,xt);break;case 4:i.vertexAttrib4fv(j.location,xt);break;default:i.vertexAttrib1fv(j.location,xt)}}}}N()}function k(){T();for(const v in n){const M=n[v];for(const P in M){const w=M[P];for(const J in w)h(w[J].object),delete w[J];delete M[P]}delete n[v]}}function O(v){if(n[v.id]===void 0)return;const M=n[v.id];for(const P in M){const w=M[P];for(const J in w)h(w[J].object),delete w[J];delete M[P]}delete n[v.id]}function S(v){for(const M in n){const P=n[M];if(P[v.id]===void 0)continue;const w=P[v.id];for(const J in w)h(w[J].object),delete w[J];delete P[v.id]}}function T(){y(),o=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:T,resetDefaultState:y,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:g,disableUnusedAttributes:N}}function AM(i,t,e){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function l(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];e.update(_,n,1)}function c(u,h,d,p){if(d===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<u.length;x++)o(u[x],h[x],p[x]);else{_.multiDrawArraysInstancedWEBGL(n,u,0,h,0,p,0,d);let x=0;for(let b=0;b<d;b++)x+=h[b]*p[b];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function wM(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Vn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(S){const T=S===io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==_i&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ci&&!T)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=x>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:_,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:I,vertexTextures:k,maxSamples:O}}function bM(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Ri,l=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const _=d.length!==0||p||n!==0||r;return r=p,n=d.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,_){const x=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const N=s?0:n,D=N*4;let I=m.clippingState||null;c.value=I,I=h(x,p,D,_);for(let k=0;k!==D;++k)I[k]=e[k];m.clippingState=I,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,_,x){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=c.value,x!==!0||g===null){const m=_+b*4,N=p.matrixWorldInverse;l.getNormalMatrix(N),(g===null||g.length<m)&&(g=new Float32Array(m));for(let D=0,I=_;D!==b;++D,I+=4)o.copy(d[D]).applyMatrix4(N,l),o.normal.toArray(g,I),g[I+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function RM(i){let t=new WeakMap;function e(o,l){return l===Tc?o.mapping=rs:l===xc&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Tc||l===xc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new IT(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Gr=4,sf=[.125,.215,.35,.446,.526,.582],sr=20,Ll=new VT,of=new Se;let Nl=null,Ul=0,Ol=0,Fl=!1;const ir=(1+Math.sqrt(5))/2,Fr=1/ir,af=[new G(-ir,Fr,0),new G(ir,Fr,0),new G(-Fr,0,ir),new G(Fr,0,ir),new G(0,ir,-Fr),new G(0,ir,Fr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],CM=new G;class lf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:l=CM}=s;Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nl,Ul,Ol),this._renderer.xr.enabled=Fl,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:io,format:Vn,colorSpace:os,depthBuffer:!1},r=cf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(s)),this._blurMaterial=PM(s,t,e)}return r}_compileMaterial(t){const e=new Xn(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,r,s){const c=new Pn(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,_=d.toneMapping;d.getClearColor(of),d.toneMapping=Fi,d.autoClear=!1;const x=new $u({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),b=new Xn(new oo,x);let g=!1;const m=t.background;m?m.isColor&&(x.color.copy(m),t.background=null,g=!0):(x.color.copy(of),g=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(c.up.set(0,u[N],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[N],s.y,s.z)):D===1?(c.up.set(0,0,u[N]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[N],s.z)):(c.up.set(0,u[N],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[N]));const I=this._cubeSize;Xo(r,D*I,N>2?I:0,I,I),d.setRenderTarget(r),g&&d.render(b,c),d.render(t,c)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=_,d.autoClear=p,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===rs||t.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const c=this._cubeSize;Xo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=af[(r-s-1)%af.length];this._blur(t,s-1,s,o,l)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xn(this._lodPlanes[r],u),p=u.uniforms,_=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*sr-1),b=s/x,g=isFinite(s)?1+Math.floor(h*b):sr;g>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const m=[];let N=0;for(let S=0;S<sr;++S){const T=S/b,y=Math.exp(-T*T/2);m.push(y),S===0?N+=y:S<g&&(N+=2*y)}for(let S=0;S<m.length;S++)m[S]=m[S]/N;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:D}=this;p.dTheta.value=x,p.mipInt.value=D-n;const I=this._sizeLods[r],k=3*I*(r>D-Gr?r-D+Gr:0),O=4*(this._cubeSize-I);Xo(e,k,O,3*I,2*I),c.setRenderTarget(e),c.render(d,Ll)}}function IM(i){const t=[],e=[],n=[];let r=i;const s=i-Gr+1+sf.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let c=1/l;o>i-Gr?c=sf[o-i+Gr-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,d=1+u,p=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,x=6,b=3,g=2,m=1,N=new Float32Array(b*x*_),D=new Float32Array(g*x*_),I=new Float32Array(m*x*_);for(let O=0;O<_;O++){const S=O%3*2/3-1,T=O>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];N.set(y,b*x*O),D.set(p,g*x*O);const v=[O,O,O,O,O,O];I.set(v,m*x*O)}const k=new $i;k.setAttribute("position",new $n(N,b)),k.setAttribute("uv",new $n(D,g)),k.setAttribute("faceIndex",new $n(I,m)),t.push(k),r>Gr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cf(i,t,e){const n=new pr(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function PM(i,t,e){const n=new Float32Array(sr),r=new G(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function uf(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hf(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DM(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===Tc||c===xc,h=c===rs||c===ss;if(u||h){let d=t.get(l);const p=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return e===null&&(e=new lf(i)),d=u?e.fromEquirectangular(l,d):e.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const _=l.image;return u&&_&&_.height>0||h&&_&&r(_)?(e===null&&(e=new lf(i)),d=u?e.fromEquirectangular(l):e.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function LM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&$r("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function NM(i,t,e,n){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];const _=s.get(p);_&&(t.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER)}function u(d){const p=[],_=d.index,x=d.attributes.position;let b=0;if(_!==null){const N=_.array;b=_.version;for(let D=0,I=N.length;D<I;D+=3){const k=N[D+0],O=N[D+1],S=N[D+2];p.push(k,O,O,S,S,k)}}else if(x!==void 0){const N=x.array;b=x.version;for(let D=0,I=N.length/3-1;D<I;D+=3){const k=D+0,O=D+1,S=D+2;p.push(k,O,O,S,S,k)}}else return;const g=new(Om(p)?Hm:zm)(p,1);g.version=b;const m=s.get(d);m&&t.remove(m),s.set(d,g)}function h(d){const p=s.get(d);if(p){const _=d.index;_!==null&&p.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function UM(i,t,e){let n;function r(p){n=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function c(p,_){i.drawElements(n,_,s,p*o),e.update(_,n,1)}function u(p,_,x){x!==0&&(i.drawElementsInstanced(n,_,s,p*o,x),e.update(_,n,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,p,0,x);let g=0;for(let m=0;m<x;m++)g+=_[m];e.update(g,n,1)}function d(p,_,x,b){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)u(p[m]/o,_[m],b[m]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,p,0,b,0,x);let m=0;for(let N=0;N<x;N++)m+=_[N]*b[N];e.update(m,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function OM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function FM(i,t,e){const n=new WeakMap,r=new Ue;function s(o,l,c){const u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==d){let v=function(){T.dispose(),n.delete(l),l.removeEventListener("dispose",v)};var _=v;p!==void 0&&p.texture.dispose();const x=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],N=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let I=0;x===!0&&(I=1),b===!0&&(I=2),g===!0&&(I=3);let k=l.attributes.position.count*I,O=1;k>t.maxTextureSize&&(O=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const S=new Float32Array(k*O*4*d),T=new Fm(S,k,O,d);T.type=ci,T.needsUpdate=!0;const y=I*4;for(let M=0;M<d;M++){const P=m[M],w=N[M],J=D[M],nt=k*O*4*M;for(let et=0;et<P.count;et++){const it=et*y;x===!0&&(r.fromBufferAttribute(P,et),S[nt+it+0]=r.x,S[nt+it+1]=r.y,S[nt+it+2]=r.z,S[nt+it+3]=0),b===!0&&(r.fromBufferAttribute(w,et),S[nt+it+4]=r.x,S[nt+it+5]=r.y,S[nt+it+6]=r.z,S[nt+it+7]=0),g===!0&&(r.fromBufferAttribute(J,et),S[nt+it+8]=r.x,S[nt+it+9]=r.y,S[nt+it+10]=r.z,S[nt+it+11]=J.itemSize===4?r.w:1)}}p={count:d,texture:T,size:new ee(k,O)},n.set(l,p),l.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const b=l.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function VM(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const Ym=new fn,df=new jm(1,1),Km=new Fm,Qm=new fT,Zm=new Xm,ff=[],pf=[],mf=new Float32Array(16),_f=new Float32Array(9),gf=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ff[r];if(s===void 0&&(s=new Float32Array(r),ff[r]=s),t!==0){n.toArray(s,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(s,l)}return s}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ya(i,t){let e=pf[t];e===void 0&&(e=new Int32Array(t),pf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function BM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function zM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function HM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function GM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;gf.set(n),i.uniformMatrix2fv(this.addr,!1,gf),je(e,n)}}function WM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),je(e,n)}}function XM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(qe(e,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),je(e,n)}}function qM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function $M(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function YM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function KM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function QM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function ZM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function JM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function tA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=Um,s=df):s=Ym,e.setTexture2D(t||s,r)}function eA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Qm,r)}function nA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Zm,r)}function iA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Km,r)}function rA(i){switch(i){case 5126:return BM;case 35664:return kM;case 35665:return zM;case 35666:return HM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return jM;case 35668:case 35672:return $M;case 35669:case 35673:return YM;case 5125:return KM;case 36294:return QM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function sA(i,t){i.uniform1fv(this.addr,t)}function oA(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function aA(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function lA(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function cA(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function uA(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hA(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dA(i,t){i.uniform1iv(this.addr,t)}function fA(i,t){i.uniform2iv(this.addr,t)}function pA(i,t){i.uniform3iv(this.addr,t)}function mA(i,t){i.uniform4iv(this.addr,t)}function _A(i,t){i.uniform1uiv(this.addr,t)}function gA(i,t){i.uniform2uiv(this.addr,t)}function vA(i,t){i.uniform3uiv(this.addr,t)}function yA(i,t){i.uniform4uiv(this.addr,t)}function EA(i,t,e){const n=this.cache,r=t.length,s=Ya(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ym,s[o])}function TA(i,t,e){const n=this.cache,r=t.length,s=Ya(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Qm,s[o])}function xA(i,t,e){const n=this.cache,r=t.length,s=Ya(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Zm,s[o])}function SA(i,t,e){const n=this.cache,r=t.length,s=Ya(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Km,s[o])}function MA(i){switch(i){case 5126:return sA;case 35664:return oA;case 35665:return aA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return hA;case 5124:case 35670:return dA;case 35667:case 35671:return fA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return _A;case 36294:return gA;case 36295:return vA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}class AA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rA(e.type)}}class wA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=MA(e.type)}}class bA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function vf(i,t){i.seq.push(t),i.map[t.id]=t}function RA(i,t,e){const n=i.name,r=n.length;for(Vl.lastIndex=0;;){const s=Vl.exec(n),o=Vl.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){vf(e,u===void 0?new AA(l,i,t):new wA(l,i,t));break}else{let d=e.map[l];d===void 0&&(d=new bA(l),vf(e,d)),e=d}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);RA(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const l=e[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function yf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const CA=37297;let IA=0;function PA(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const Ef=new Qt;function DA(i){me._getMatrix(Ef,me.workingColorSpace,i);const t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Aa:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+PA(i.getShaderSource(t),o)}else return r}function LA(i,t){const e=DA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function NA(i,t){let e;switch(t){case F0:e="Linear";break;case V0:e="Reinhard";break;case B0:e="Cineon";break;case k0:e="ACESFilmic";break;case H0:e="AgX";break;case G0:e="Neutral";break;case z0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new G;function UA(){me.getLuminanceCoefficients(qo);const i=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function FA(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function VA(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Ls(i){return i!==""}function xf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(BA,zA)}const kA=new Map;function zA(i,t){let e=Zt[t];if(e===void 0){const n=kA.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zc(e)}const HA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(HA,GA)}function GA(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Af(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WA(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function XA(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case ss:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function jA(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Am:t="ENVMAP_BLENDING_MULTIPLY";break;case U0:t="ENVMAP_BLENDING_MIX";break;case O0:t="ENVMAP_BLENDING_ADD";break}return t}function $A(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function YA(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,l=e.fragmentShader;const c=WA(e),u=XA(e),h=qA(e),d=jA(e),p=$A(e),_=OA(e),x=FA(s),b=r.createProgram();let g,m,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ls).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(g=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?NA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,LA("linearToOutputTexel",e.outputColorSpace),UA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Zc(o),o=xf(o,e),o=Sf(o,e),l=Zc(l),l=xf(l,e),l=Sf(l,e),o=Mf(o),l=Mf(l),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const D=N+g+o,I=N+m+l,k=yf(r,r.VERTEX_SHADER,D),O=yf(r,r.FRAGMENT_SHADER,I);r.attachShader(b,k),r.attachShader(b,O),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function S(M){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(b).trim(),w=r.getShaderInfoLog(k).trim(),J=r.getShaderInfoLog(O).trim();let nt=!0,et=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,k,O);else{const it=Tf(r,k,"vertex"),j=Tf(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+P+`
`+it+`
`+j)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(w===""||J==="")&&(et=!1);et&&(M.diagnostics={runnable:nt,programLog:P,vertexShader:{log:w,prefix:g},fragmentShader:{log:J,prefix:m}})}r.deleteShader(k),r.deleteShader(O),T=new la(r,b),y=VA(r,b)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(b,CA)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=IA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=O,this}let KA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ZA(t),e.set(t,n)),n}}class ZA{constructor(t){this.id=KA++,this.code=t,this.usedTimes=0}}function JA(i,t,e,n,r,s,o){const l=new Bm,c=new QA,u=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return u.add(y),y===0?"uv":`uv${y}`}function g(y,v,M,P,w){const J=P.fog,nt=w.geometry,et=y.isMeshStandardMaterial?P.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||et),j=it&&it.mapping===qa?it.image.height:null,pt=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const xt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Lt=xt!==void 0?xt.length:0;let Xt=0;nt.morphAttributes.position!==void 0&&(Xt=1),nt.morphAttributes.normal!==void 0&&(Xt=2),nt.morphAttributes.color!==void 0&&(Xt=3);let jt,Z,ct,Ct;if(pt){const oe=Wn[pt];jt=oe.vertexShader,Z=oe.fragmentShader}else jt=y.vertexShader,Z=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),Ct=c.getFragmentShaderID(y);const gt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),he=w.isInstancedMesh===!0,Ot=w.isBatchedMesh===!0,ve=!!y.map,Me=!!y.matcap,re=!!it,U=!!y.aoMap,Be=!!y.lightMap,le=!!y.bumpMap,ye=!!y.normalMap,bt=!!y.displacementMap,se=!!y.emissiveMap,Nt=!!y.metalnessMap,Yt=!!y.roughnessMap,De=y.anisotropy>0,L=y.clearcoat>0,A=y.dispersion>0,H=y.iridescence>0,$=y.sheen>0,K=y.transmission>0,Y=De&&!!y.anisotropyMap,Rt=L&&!!y.clearcoatMap,dt=L&&!!y.clearcoatNormalMap,wt=L&&!!y.clearcoatRoughnessMap,At=H&&!!y.iridescenceMap,rt=H&&!!y.iridescenceThicknessMap,Et=$&&!!y.sheenColorMap,Ft=$&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,ft=!!y.specularColorMap,Gt=!!y.specularIntensityMap,F=K&&!!y.transmissionMap,mt=K&&!!y.thicknessMap,st=!!y.gradientMap,St=!!y.alphaMap,at=y.alphaTest>0,Q=!!y.alphaHash,Mt=!!y.extensions;let Wt=Fi;y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const Ee={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:Z,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:Ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ot,batchingColor:Ot&&w._colorsTexture!==null,instancing:he,instancingColor:he&&w.instanceColor!==null,instancingMorph:he&&w.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Me,envMap:re,envMapMode:re&&it.mapping,envMapCubeUVHeight:j,aoMap:U,lightMap:Be,bumpMap:le,normalMap:ye,displacementMap:p&&bt,emissiveMap:se,normalMapObjectSpace:ye&&y.normalMapType===$0,normalMapTangentSpace:ye&&y.normalMapType===j0,metalnessMap:Nt,roughnessMap:Yt,anisotropy:De,anisotropyMap:Y,clearcoat:L,clearcoatMap:Rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:wt,dispersion:A,iridescence:H,iridescenceMap:At,iridescenceThicknessMap:rt,sheen:$,sheenColorMap:Et,sheenRoughnessMap:Ft,specularMap:Vt,specularColorMap:ft,specularIntensityMap:Gt,transmission:K,transmissionMap:F,thicknessMap:mt,gradientMap:st,opaque:y.transparent===!1&&y.blending===jr&&y.alphaToCoverage===!1,alphaMap:St,alphaTest:at,alphaHash:Q,combine:y.combine,mapUv:ve&&b(y.map.channel),aoMapUv:U&&b(y.aoMap.channel),lightMapUv:Be&&b(y.lightMap.channel),bumpMapUv:le&&b(y.bumpMap.channel),normalMapUv:ye&&b(y.normalMap.channel),displacementMapUv:bt&&b(y.displacementMap.channel),emissiveMapUv:se&&b(y.emissiveMap.channel),metalnessMapUv:Nt&&b(y.metalnessMap.channel),roughnessMapUv:Yt&&b(y.roughnessMap.channel),anisotropyMapUv:Y&&b(y.anisotropyMap.channel),clearcoatMapUv:Rt&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&b(y.sheenRoughnessMap.channel),specularMapUv:Vt&&b(y.specularMap.channel),specularColorMapUv:ft&&b(y.specularColorMap.channel),specularIntensityMapUv:Gt&&b(y.specularIntensityMap.channel),transmissionMapUv:F&&b(y.transmissionMap.channel),thicknessMapUv:mt&&b(y.thicknessMap.channel),alphaMapUv:St&&b(y.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ye||De),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!nt.attributes.uv&&(ve||St),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:w.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Xt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Te,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&me.getTransfer(y.emissiveMap.colorSpace)===Te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===li,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=u.has(1),Ee.vertexUv2s=u.has(2),Ee.vertexUv3s=u.has(3),u.clear(),Ee}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const M in y.defines)v.push(M),v.push(y.defines[M]);return y.isRawShaderMaterial===!1&&(N(v,y),D(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function N(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function D(y,v){l.disableAll(),v.supportsVertexTextures&&l.enable(0),v.instancing&&l.enable(1),v.instancingColor&&l.enable(2),v.instancingMorph&&l.enable(3),v.matcap&&l.enable(4),v.envMap&&l.enable(5),v.normalMapObjectSpace&&l.enable(6),v.normalMapTangentSpace&&l.enable(7),v.clearcoat&&l.enable(8),v.iridescence&&l.enable(9),v.alphaTest&&l.enable(10),v.vertexColors&&l.enable(11),v.vertexAlphas&&l.enable(12),v.vertexUv1s&&l.enable(13),v.vertexUv2s&&l.enable(14),v.vertexUv3s&&l.enable(15),v.vertexTangents&&l.enable(16),v.anisotropy&&l.enable(17),v.alphaHash&&l.enable(18),v.batching&&l.enable(19),v.dispersion&&l.enable(20),v.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),v.fog&&l.enable(0),v.useFog&&l.enable(1),v.flatShading&&l.enable(2),v.logarithmicDepthBuffer&&l.enable(3),v.reverseDepthBuffer&&l.enable(4),v.skinning&&l.enable(5),v.morphTargets&&l.enable(6),v.morphNormals&&l.enable(7),v.morphColors&&l.enable(8),v.premultipliedAlpha&&l.enable(9),v.shadowMapEnabled&&l.enable(10),v.doubleSided&&l.enable(11),v.flipSided&&l.enable(12),v.useDepthPacking&&l.enable(13),v.dithering&&l.enable(14),v.transmission&&l.enable(15),v.sheen&&l.enable(16),v.opaque&&l.enable(17),v.pointsUvs&&l.enable(18),v.decodeVideoTexture&&l.enable(19),v.decodeVideoTextureEmissive&&l.enable(20),v.alphaToCoverage&&l.enable(21),y.push(l.mask)}function I(y){const v=x[y.type];let M;if(v){const P=Wn[v];M=wT.clone(P.uniforms)}else M=y.uniforms;return M}function k(y,v){let M;for(let P=0,w=h.length;P<w;P++){const J=h[P];if(J.cacheKey===v){M=J,++M.usedTimes;break}}return M===void 0&&(M=new YA(i,v,y,s),h.push(M)),M}function O(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function S(y){c.remove(y)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:I,acquireProgram:k,releaseProgram:O,releaseShaderCache:S,programs:h,dispose:T}}function tw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ew(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bf(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,p,_,x,b,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:p,material:_,groupOrder:x,renderOrder:d.renderOrder,z:b,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=_,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=b,m.group=g),t++,m}function l(d,p,_,x,b,g){const m=o(d,p,_,x,b,g);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):e.push(m)}function c(d,p,_,x,b,g){const m=o(d,p,_,x,b,g);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):e.unshift(m)}function u(d,p){e.length>1&&e.sort(d||ew),n.length>1&&n.sort(p||wf),r.length>1&&r.sort(p||wf)}function h(){for(let d=t,p=i.length;d<p;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function nw(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new bf,i.set(n,[o])):r>=s.length?(o=new bf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Se};break;case"SpotLight":e={position:new G,direction:new G,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function rw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sw=0;function ow(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function aw(i){const t=new iw,e=rw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);const r=new G,s=new Ve,o=new Ve;function l(u){let h=0,d=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let _=0,x=0,b=0,g=0,m=0,N=0,D=0,I=0,k=0,O=0,S=0;u.sort(ow);for(let y=0,v=u.length;y<v;y++){const M=u[y],P=M.color,w=M.intensity,J=M.distance,nt=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=P.r*w,d+=P.g*w,p+=P.b*w;else if(M.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(M.sh.coefficients[et],w);S++}else if(M.isDirectionalLight){const et=t.get(M);if(et.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const it=M.shadow,j=e.get(M);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.directionalShadow[_]=j,n.directionalShadowMap[_]=nt,n.directionalShadowMatrix[_]=M.shadow.matrix,N++}n.directional[_]=et,_++}else if(M.isSpotLight){const et=t.get(M);et.position.setFromMatrixPosition(M.matrixWorld),et.color.copy(P).multiplyScalar(w),et.distance=J,et.coneCos=Math.cos(M.angle),et.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),et.decay=M.decay,n.spot[b]=et;const it=M.shadow;if(M.map&&(n.spotLightMap[k]=M.map,k++,it.updateMatrices(M),M.castShadow&&O++),n.spotLightMatrix[b]=it.matrix,M.castShadow){const j=e.get(M);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=nt,I++}b++}else if(M.isRectAreaLight){const et=t.get(M);et.color.copy(P).multiplyScalar(w),et.halfWidth.set(M.width*.5,0,0),et.halfHeight.set(0,M.height*.5,0),n.rectArea[g]=et,g++}else if(M.isPointLight){const et=t.get(M);if(et.color.copy(M.color).multiplyScalar(M.intensity),et.distance=M.distance,et.decay=M.decay,M.castShadow){const it=M.shadow,j=e.get(M);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,j.shadowCameraNear=it.camera.near,j.shadowCameraFar=it.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=nt,n.pointShadowMatrix[x]=M.shadow.matrix,D++}n.point[x]=et,x++}else if(M.isHemisphereLight){const et=t.get(M);et.skyColor.copy(M.color).multiplyScalar(w),et.groundColor.copy(M.groundColor).multiplyScalar(w),n.hemi[m]=et,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const T=n.hash;(T.directionalLength!==_||T.pointLength!==x||T.spotLength!==b||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==N||T.numPointShadows!==D||T.numSpotShadows!==I||T.numSpotMaps!==k||T.numLightProbes!==S)&&(n.directional.length=_,n.spot.length=b,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=I+k-O,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=S,T.directionalLength=_,T.pointLength=x,T.spotLength=b,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=N,T.numPointShadows=D,T.numSpotShadows=I,T.numSpotMaps=k,T.numLightProbes=S,n.version=sw++)}function c(u,h){let d=0,p=0,_=0,x=0,b=0;const g=h.matrixWorldInverse;for(let m=0,N=u.length;m<N;m++){const D=u[m];if(D.isDirectionalLight){const I=n.directional[d];I.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(g),d++}else if(D.isSpotLight){const I=n.spot[_];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(g),_++}else if(D.isRectAreaLight){const I=n.rectArea[x];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(g),o.identity(),s.copy(D.matrixWorld),s.premultiply(g),o.extractRotation(s),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(D.isPointLight){const I=n.point[p];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(g),p++}else if(D.isHemisphereLight){const I=n.hemi[b];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(g),b++}}}return{setup:l,setupView:c,state:n}}function Rf(i){const t=new aw(i),e=[],n=[];function r(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function l(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function lw(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Rf(i),t.set(r,[l])):s>=o.length?(l=new Rf(i),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hw(i,t,e){let n=new qm;const r=new ee,s=new ee,o=new Ue,l=new OT({depthPacking:q0}),c=new FT,u={},h=e.maxTextureSize,d={[Wi]:Tn,[Tn]:Wi,[li]:li},p=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:cw,fragmentShader:uw}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const x=new $i;x.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Xn(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let m=this.type;this.render=function(O,S,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Oi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const w=m!==ai&&this.type===ai,J=m===ai&&this.type!==ai;for(let nt=0,et=O.length;nt<et;nt++){const it=O[nt],j=it.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const pt=j.getFrameExtents();if(r.multiply(pt),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/pt.x),r.x=s.x*pt.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/pt.y),r.y=s.y*pt.y,j.mapSize.y=s.y)),j.map===null||w===!0||J===!0){const Lt=this.type!==ai?{minFilter:zn,magFilter:zn}:{};j.map!==null&&j.map.dispose(),j.map=new pr(r.x,r.y,Lt),j.map.texture.name=it.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const xt=j.getViewportCount();for(let Lt=0;Lt<xt;Lt++){const Xt=j.getViewport(Lt);o.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),P.viewport(o),j.updateMatrices(it,Lt),n=j.getFrustum(),I(S,T,j.camera,it,this.type)}j.isPointLightShadow!==!0&&this.type===ai&&N(j,T),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,v,M)};function N(O,S){const T=t.update(b);p.defines.VSM_SAMPLES!==O.blurSamples&&(p.defines.VSM_SAMPLES=O.blurSamples,_.defines.VSM_SAMPLES=O.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new pr(r.x,r.y)),p.uniforms.shadow_pass.value=O.map.texture,p.uniforms.resolution.value=O.mapSize,p.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(S,null,T,p,b,null),_.uniforms.shadow_pass.value=O.mapPass.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(S,null,T,_,b,null)}function D(O,S,T,y){let v=null;const M=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(M!==void 0)v=M;else if(v=T.isPointLight===!0?c:l,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const P=v.uuid,w=S.uuid;let J=u[P];J===void 0&&(J={},u[P]=J);let nt=J[w];nt===void 0&&(nt=v.clone(),J[w]=nt,S.addEventListener("dispose",k)),v=nt}if(v.visible=S.visible,v.wireframe=S.wireframe,y===ai?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:d[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=i.properties.get(v);P.light=T}return v}function I(O,S,T,y,v){if(O.visible===!1)return;if(O.layers.test(S.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&v===ai)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const w=t.update(O),J=O.material;if(Array.isArray(J)){const nt=w.groups;for(let et=0,it=nt.length;et<it;et++){const j=nt[et],pt=J[j.materialIndex];if(pt&&pt.visible){const xt=D(O,pt,y,v);O.onBeforeShadow(i,O,S,T,w,xt,j),i.renderBufferDirect(T,null,w,xt,O,j),O.onAfterShadow(i,O,S,T,w,xt,j)}}}else if(J.visible){const nt=D(O,J,y,v);O.onBeforeShadow(i,O,S,T,w,nt,null),i.renderBufferDirect(T,null,w,nt,O,null),O.onAfterShadow(i,O,S,T,w,nt,null)}}const P=O.children;for(let w=0,J=P.length;w<J;w++)I(P[w],S,T,y,v)}function k(O){O.target.removeEventListener("dispose",k);for(const T in u){const y=u[T],v=O.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const dw={[pc]:mc,[_c]:yc,[gc]:Ec,[is]:vc,[mc]:pc,[yc]:_c,[Ec]:gc,[vc]:is};function fw(i,t){function e(){let F=!1;const mt=new Ue;let st=null;const St=new Ue(0,0,0,0);return{setMask:function(at){st!==at&&!F&&(i.colorMask(at,at,at,at),st=at)},setLocked:function(at){F=at},setClear:function(at,Q,Mt,Wt,Ee){Ee===!0&&(at*=Wt,Q*=Wt,Mt*=Wt),mt.set(at,Q,Mt,Wt),St.equals(mt)===!1&&(i.clearColor(at,Q,Mt,Wt),St.copy(mt))},reset:function(){F=!1,st=null,St.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,st=null,St=null,at=null;return{setReversed:function(Q){if(mt!==Q){const Mt=t.get("EXT_clip_control");Q?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),mt=Q;const Wt=at;at=null,this.setClear(Wt)}},getReversed:function(){return mt},setTest:function(Q){Q?gt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Q){st!==Q&&!F&&(i.depthMask(Q),st=Q)},setFunc:function(Q){if(mt&&(Q=dw[Q]),St!==Q){switch(Q){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Q}},setLocked:function(Q){F=Q},setClear:function(Q){at!==Q&&(mt&&(Q=1-Q),i.clearDepth(Q),at=Q)},reset:function(){F=!1,st=null,St=null,at=null,mt=!1}}}function r(){let F=!1,mt=null,st=null,St=null,at=null,Q=null,Mt=null,Wt=null,Ee=null;return{setTest:function(oe){F||(oe?gt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!F&&(i.stencilMask(oe),mt=oe)},setFunc:function(oe,pn,be){(st!==oe||St!==pn||at!==be)&&(i.stencilFunc(oe,pn,be),st=oe,St=pn,at=be)},setOp:function(oe,pn,be){(Q!==oe||Mt!==pn||Wt!==be)&&(i.stencilOp(oe,pn,be),Q=oe,Mt=pn,Wt=be)},setLocked:function(oe){F=oe},setClear:function(oe){Ee!==oe&&(i.clearStencil(oe),Ee=oe)},reset:function(){F=!1,mt=null,st=null,St=null,at=null,Q=null,Mt=null,Wt=null,Ee=null}}}const s=new e,o=new n,l=new r,c=new WeakMap,u=new WeakMap;let h={},d={},p=new WeakMap,_=[],x=null,b=!1,g=null,m=null,N=null,D=null,I=null,k=null,O=null,S=new Se(0,0,0),T=0,y=!1,v=null,M=null,P=null,w=null,J=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,it=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(j)[1]),et=it>=1):j.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),et=it>=2);let pt=null,xt={};const Lt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),jt=new Ue().fromArray(Lt),Z=new Ue().fromArray(Xt);function ct(F,mt,st,St){const at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(F,Q),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<st;Mt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(mt+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}const Ct={};Ct[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),gt(i.DEPTH_TEST),o.setFunc(is),le(!1),ye(Dd),gt(i.CULL_FACE),U(Oi);function gt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Pt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function he(F,mt){return d[F]!==mt?(i.bindFramebuffer(F,mt),d[F]=mt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ot(F,mt){let st=_,St=!1;if(F){st=p.get(mt),st===void 0&&(st=[],p.set(mt,st));const at=F.textures;if(st.length!==at.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Mt=at.length;Q<Mt;Q++)st[Q]=i.COLOR_ATTACHMENT0+Q;st.length=at.length,St=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,St=!0);St&&i.drawBuffers(st)}function ve(F){return x!==F?(i.useProgram(F),x=F,!0):!1}const Me={[rr]:i.FUNC_ADD,[v0]:i.FUNC_SUBTRACT,[y0]:i.FUNC_REVERSE_SUBTRACT};Me[E0]=i.MIN,Me[T0]=i.MAX;const re={[x0]:i.ZERO,[S0]:i.ONE,[M0]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[I0]:i.SRC_ALPHA_SATURATE,[R0]:i.DST_COLOR,[w0]:i.DST_ALPHA,[A0]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[C0]:i.ONE_MINUS_DST_COLOR,[b0]:i.ONE_MINUS_DST_ALPHA,[P0]:i.CONSTANT_COLOR,[D0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[N0]:i.ONE_MINUS_CONSTANT_ALPHA};function U(F,mt,st,St,at,Q,Mt,Wt,Ee,oe){if(F===Oi){b===!0&&(Pt(i.BLEND),b=!1);return}if(b===!1&&(gt(i.BLEND),b=!0),F!==g0){if(F!==g||oe!==y){if((m!==rr||I!==rr)&&(i.blendEquation(i.FUNC_ADD),m=rr,I=rr),oe)switch(F){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.ONE,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ud:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ud:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}N=null,D=null,k=null,O=null,S.set(0,0,0),T=0,g=F,y=oe}return}at=at||mt,Q=Q||st,Mt=Mt||St,(mt!==m||at!==I)&&(i.blendEquationSeparate(Me[mt],Me[at]),m=mt,I=at),(st!==N||St!==D||Q!==k||Mt!==O)&&(i.blendFuncSeparate(re[st],re[St],re[Q],re[Mt]),N=st,D=St,k=Q,O=Mt),(Wt.equals(S)===!1||Ee!==T)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Ee),S.copy(Wt),T=Ee),g=F,y=!1}function Be(F,mt){F.side===li?Pt(i.CULL_FACE):gt(i.CULL_FACE);let st=F.side===Tn;mt&&(st=!st),le(st),F.blending===jr&&F.transparent===!1?U(Oi):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const St=F.stencilWrite;l.setTest(St),St&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function ye(F){F!==p0?(gt(i.CULL_FACE),F!==M&&(F===Dd?i.cullFace(i.BACK):F===m0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),M=F}function bt(F){F!==P&&(et&&i.lineWidth(F),P=F)}function se(F,mt,st){F?(gt(i.POLYGON_OFFSET_FILL),(w!==mt||J!==st)&&(i.polygonOffset(mt,st),w=mt,J=st)):Pt(i.POLYGON_OFFSET_FILL)}function Nt(F){F?gt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Yt(F){F===void 0&&(F=i.TEXTURE0+nt-1),pt!==F&&(i.activeTexture(F),pt=F)}function De(F,mt,st){st===void 0&&(pt===null?st=i.TEXTURE0+nt-1:st=pt);let St=xt[st];St===void 0&&(St={type:void 0,texture:void 0},xt[st]=St),(St.type!==F||St.texture!==mt)&&(pt!==st&&(i.activeTexture(st),pt=st),i.bindTexture(F,mt||Ct[F]),St.type=F,St.texture=mt)}function L(){const F=xt[pt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(F){jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function Ft(F){Z.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function Vt(F,mt){let st=u.get(mt);st===void 0&&(st=new WeakMap,u.set(mt,st));let St=st.get(F);St===void 0&&(St=i.getUniformBlockIndex(mt,F.name),st.set(F,St))}function ft(F,mt){const St=u.get(mt).get(F);c.get(mt)!==St&&(i.uniformBlockBinding(mt,St,F.__bindingPointIndex),c.set(mt,St))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,xt={},d={},p=new WeakMap,_=[],x=null,b=!1,g=null,m=null,N=null,D=null,I=null,k=null,O=null,S=new Se(0,0,0),T=0,y=!1,v=null,M=null,P=null,w=null,J=null,jt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:gt,disable:Pt,bindFramebuffer:he,drawBuffers:Ot,useProgram:ve,setBlending:U,setMaterial:Be,setFlipSided:le,setCullFace:ye,setLineWidth:bt,setPolygonOffset:se,setScissorTest:Nt,activeTexture:Yt,bindTexture:De,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:H,texImage2D:At,texImage3D:rt,updateUBOMapping:Vt,uniformBlockBinding:ft,texStorage2D:dt,texStorage3D:wt,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:Rt,scissor:Et,viewport:Ft,reset:Gt}}function pw(i,t,e,n,r,s,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ee,h=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return _?new OffscreenCanvas(L,A):ba("canvas")}function b(L,A,H){let $=1;const K=De(L);if((K.width>H||K.height>H)&&($=H/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Y=Math.floor($*K.width),Rt=Math.floor($*K.height);d===void 0&&(d=x(Y,Rt));const dt=A?x(Y,Rt):d;return dt.width=Y,dt.height=Rt,dt.getContext("2d").drawImage(L,0,0,Y,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Rt+")."),dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(L,A,H,$,K=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=A;if(A===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),A===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),A===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),A===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),A===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),A===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),A===i.RGBA){const Rt=K?Aa:me.getTransfer($);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=Rt===Te?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function I(L,A){let H;return L?A===null||A===dr||A===Ys?H=i.DEPTH24_STENCIL8:A===ci?H=i.DEPTH32F_STENCIL8:A===$s&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===dr||A===Ys?H=i.DEPTH_COMPONENT24:A===ci?H=i.DEPTH_COMPONENT32F:A===$s&&(H=i.DEPTH_COMPONENT16),H}function k(L,A){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==zn&&L.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),T(A),A.isVideoTexture&&h.delete(A)}function S(L){const A=L.target;A.removeEventListener("dispose",S),v(A)}function T(L){const A=n.get(L);if(A.__webglInit===void 0)return;const H=L.source,$=p.get(H);if($){const K=$[A.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(L),Object.keys($).length===0&&p.delete(H)}n.remove(L)}function y(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const H=L.source,$=p.get(H);delete $[A.__cacheKey],o.memory.textures--}function v(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let K=0;K<A.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(A.__webglFramebuffer[$][K]);else i.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)i.deleteFramebuffer(A.__webglFramebuffer[$]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=L.textures;for(let $=0,K=H.length;$<K;$++){const Y=n.get(H[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(L)}let M=0;function P(){M=0}function w(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function J(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function nt(L,A){const H=n.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(H,L,A);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function et(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Ct(H,L,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function it(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Ct(H,L,A);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function j(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){gt(H,L,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}const pt={[Sc]:i.REPEAT,[ar]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},xt={[zn]:i.NEAREST,[W0]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},Lt={[Y0]:i.NEVER,[eT]:i.ALWAYS,[K0]:i.LESS,[Um]:i.LEQUAL,[Q0]:i.EQUAL,[tT]:i.GEQUAL,[Z0]:i.GREATER,[J0]:i.NOTEQUAL};function Xt(L,A){if(A.type===ci&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===cl||A.magFilter===Ao||A.magFilter===lr||A.minFilter===Dn||A.minFilter===cl||A.minFilter===Ao||A.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,pt[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,pt[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,pt[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,xt[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,xt[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Lt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==Ao&&A.minFilter!==lr||A.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function jt(L,A){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const $=A.source;let K=p.get($);K===void 0&&(K={},p.set($,K));const Y=J(A);if(Y!==L.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[Y].usedTimes++;const Rt=K[L.__cacheKey];Rt!==void 0&&(K[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&y(A)),L.__cacheKey=Y,L.__webglTexture=K[Y].texture}return H}function Z(L,A,H){return Math.floor(Math.floor(L/H)/A)}function ct(L,A,H,$){const Y=L.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,H,$,A.data);else{Y.sort((rt,Et)=>rt.start-Et.start);let Rt=0;for(let rt=1;rt<Y.length;rt++){const Et=Y[Rt],Ft=Y[rt],Vt=Et.start+Et.count,ft=Z(Ft.start,A.width,4),Gt=Z(Et.start,A.width,4);Ft.start<=Vt+1&&ft===Gt&&Z(Ft.start+Ft.count-1,A.width,4)===ft?Et.count=Math.max(Et.count,Ft.start+Ft.count-Et.start):(++Rt,Y[Rt]=Ft)}Y.length=Rt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let rt=0,Et=Y.length;rt<Et;rt++){const Ft=Y[rt],Vt=Math.floor(Ft.start/4),ft=Math.ceil(Ft.count/4),Gt=Vt%A.width,F=Math.floor(Vt/A.width),mt=ft,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Gt,F,mt,st,H,$,A.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Ct(L,A,H){let $=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=i.TEXTURE_3D);const K=jt(L,A),Y=A.source;e.bindTexture($,L.__webglTexture,i.TEXTURE0+H);const Rt=n.get(Y);if(Y.version!==Rt.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const dt=me.getPrimaries(me.workingColorSpace),wt=A.colorSpace===Ci?null:me.getPrimaries(A.colorSpace),At=A.colorSpace===Ci||dt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let rt=b(A.image,!1,r.maxTextureSize);rt=Yt(A,rt);const Et=s.convert(A.format,A.colorSpace),Ft=s.convert(A.type);let Vt=D(A.internalFormat,Et,Ft,A.colorSpace,A.isVideoTexture);Xt($,A);let ft;const Gt=A.mipmaps,F=A.isVideoTexture!==!0,mt=Rt.__version===void 0||K===!0,st=Y.dataReady,St=k(A,rt);if(A.isDepthTexture)Vt=I(A.format===Qs,A.type),mt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Vt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,rt.width,rt.height,0,Et,Ft,null));else if(A.isDataTexture)if(Gt.length>0){F&&mt&&e.texStorage2D(i.TEXTURE_2D,St,Vt,Gt[0].width,Gt[0].height);for(let at=0,Q=Gt.length;at<Q;at++)ft=Gt[at],F?st&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ft.width,ft.height,Et,Ft,ft.data):e.texImage2D(i.TEXTURE_2D,at,Vt,ft.width,ft.height,0,Et,Ft,ft.data);A.generateMipmaps=!1}else F?(mt&&e.texStorage2D(i.TEXTURE_2D,St,Vt,rt.width,rt.height),st&&ct(A,rt,Et,Ft)):e.texImage2D(i.TEXTURE_2D,0,Vt,rt.width,rt.height,0,Et,Ft,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){F&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Vt,Gt[0].width,Gt[0].height,rt.depth);for(let at=0,Q=Gt.length;at<Q;at++)if(ft=Gt[at],A.format!==Vn)if(Et!==null)if(F){if(st)if(A.layerUpdates.size>0){const Mt=rf(ft.width,ft.height,A.format,A.type);for(const Wt of A.layerUpdates){const Ee=ft.data.subarray(Wt*Mt/ft.data.BYTES_PER_ELEMENT,(Wt+1)*Mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Wt,ft.width,ft.height,1,Et,Ee)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,rt.depth,Et,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Vt,ft.width,ft.height,rt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,rt.depth,Et,Ft,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Vt,ft.width,ft.height,rt.depth,0,Et,Ft,ft.data)}else{F&&mt&&e.texStorage2D(i.TEXTURE_2D,St,Vt,Gt[0].width,Gt[0].height);for(let at=0,Q=Gt.length;at<Q;at++)ft=Gt[at],A.format!==Vn?Et!==null?F?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,ft.width,ft.height,Et,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?st&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ft.width,ft.height,Et,Ft,ft.data):e.texImage2D(i.TEXTURE_2D,at,Vt,ft.width,ft.height,0,Et,Ft,ft.data)}else if(A.isDataArrayTexture)if(F){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Vt,rt.width,rt.height,rt.depth),st)if(A.layerUpdates.size>0){const at=rf(rt.width,rt.height,A.format,A.type);for(const Q of A.layerUpdates){const Mt=rt.data.subarray(Q*at/rt.data.BYTES_PER_ELEMENT,(Q+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,Et,Ft,Mt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Ft,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,rt.width,rt.height,rt.depth,0,Et,Ft,rt.data);else if(A.isData3DTexture)F?(mt&&e.texStorage3D(i.TEXTURE_3D,St,Vt,rt.width,rt.height,rt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Ft,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,rt.width,rt.height,rt.depth,0,Et,Ft,rt.data);else if(A.isFramebufferTexture){if(mt)if(F)e.texStorage2D(i.TEXTURE_2D,St,Vt,rt.width,rt.height);else{let at=rt.width,Q=rt.height;for(let Mt=0;Mt<St;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Vt,at,Q,0,Et,Ft,null),at>>=1,Q>>=1}}else if(Gt.length>0){if(F&&mt){const at=De(Gt[0]);e.texStorage2D(i.TEXTURE_2D,St,Vt,at.width,at.height)}for(let at=0,Q=Gt.length;at<Q;at++)ft=Gt[at],F?st&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Et,Ft,ft):e.texImage2D(i.TEXTURE_2D,at,Vt,Et,Ft,ft);A.generateMipmaps=!1}else if(F){if(mt){const at=De(rt);e.texStorage2D(i.TEXTURE_2D,St,Vt,at.width,at.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,rt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Et,Ft,rt);g(A)&&m($),Rt.__version=Y.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function gt(L,A,H){if(A.image.length!==6)return;const $=jt(L,A),K=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+H);const Y=n.get(K);if(K.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+H);const Rt=me.getPrimaries(me.workingColorSpace),dt=A.colorSpace===Ci?null:me.getPrimaries(A.colorSpace),wt=A.colorSpace===Ci||Rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const At=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,Et=[];for(let Q=0;Q<6;Q++)!At&&!rt?Et[Q]=b(A.image[Q],!0,r.maxCubemapSize):Et[Q]=rt?A.image[Q].image:A.image[Q],Et[Q]=Yt(A,Et[Q]);const Ft=Et[0],Vt=s.convert(A.format,A.colorSpace),ft=s.convert(A.type),Gt=D(A.internalFormat,Vt,ft,A.colorSpace),F=A.isVideoTexture!==!0,mt=Y.__version===void 0||$===!0,st=K.dataReady;let St=k(A,Ft);Xt(i.TEXTURE_CUBE_MAP,A);let at;if(At){F&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Gt,Ft.width,Ft.height);for(let Q=0;Q<6;Q++){at=Et[Q].mipmaps;for(let Mt=0;Mt<at.length;Mt++){const Wt=at[Mt];A.format!==Vn?Vt!==null?F?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,Wt.width,Wt.height,Vt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,Gt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,Wt.width,Wt.height,Vt,ft,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,Gt,Wt.width,Wt.height,0,Vt,ft,Wt.data)}}}else{if(at=A.mipmaps,F&&mt){at.length>0&&St++;const Q=De(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Gt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Et[Q].width,Et[Q].height,Vt,ft,Et[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,Et[Q].width,Et[Q].height,0,Vt,ft,Et[Q].data);for(let Mt=0;Mt<at.length;Mt++){const Ee=at[Mt].image[Q].image;F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,Ee.width,Ee.height,Vt,ft,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,Gt,Ee.width,Ee.height,0,Vt,ft,Ee.data)}}else{F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Vt,ft,Et[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,Vt,ft,Et[Q]);for(let Mt=0;Mt<at.length;Mt++){const Wt=at[Mt];F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,Vt,ft,Wt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,Gt,Vt,ft,Wt.image[Q])}}}g(A)&&m(i.TEXTURE_CUBE_MAP),Y.__version=K.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Pt(L,A,H,$,K,Y){const Rt=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),wt=D(H.internalFormat,Rt,dt,H.colorSpace),At=n.get(A),rt=n.get(H);if(rt.__renderTarget=A,!At.__hasExternalTextures){const Et=Math.max(1,A.width>>Y),Ft=Math.max(1,A.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,wt,Et,Ft,A.depth,0,Rt,dt,null):e.texImage2D(K,Y,wt,Et,Ft,0,Rt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),se(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,rt.__webglTexture,0,bt(A)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,rt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(L,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){const $=A.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=I(A.stencilBuffer,K),Rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=bt(A);se(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Y,A.width,A.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Y,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Y,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,L)}else{const $=A.textures;for(let K=0;K<$.length;K++){const Y=$[K],Rt=s.convert(Y.format,Y.colorSpace),dt=s.convert(Y.type),wt=D(Y.internalFormat,Rt,dt,Y.colorSpace),At=bt(A);H&&se(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,wt,A.width,A.height):se(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,wt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,wt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(A.depthTexture);$.__renderTarget=A,(!$.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),nt(A.depthTexture,0);const K=$.__webglTexture,Y=bt(A);if(A.depthTexture.format===Ks)se(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(A.depthTexture.format===Qs)se(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ve(L){const A=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const K=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),A.__depthDisposeCallback=K}A.__boundDepthTexture=$}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=L.texture.mipmaps;$&&$.length>0?Ot(A.__webglFramebuffer[0],L):Ot(A.__webglFramebuffer,L)}else if(H){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=i.createRenderbuffer(),he(A.__webglDepthbuffer[$],L,!1);else{const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=A.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else{const $=L.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),he(A.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(L,A,H){const $=n.get(L);A!==void 0&&Pt($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ve(L)}function re(L){const A=L.texture,H=n.get(L),$=n.get(A);L.addEventListener("dispose",S);const K=L.textures,Y=L.isWebGLCubeRenderTarget===!0,Rt=K.length>1;if(Rt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=A.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)H.__webglFramebuffer[dt][wt]=i.createFramebuffer()}else H.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<A.mipmaps.length;dt++)H.__webglFramebuffer[dt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let dt=0,wt=K.length;dt<wt;dt++){const At=n.get(K[dt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&se(L)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<K.length;dt++){const wt=K[dt];H.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const At=s.convert(wt.format,wt.colorSpace),rt=s.convert(wt.type),Et=D(wt.internalFormat,At,rt,wt.colorSpace,L.isXRRenderTarget===!0),Ft=bt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),he(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,A);for(let dt=0;dt<6;dt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)Pt(H.__webglFramebuffer[dt][wt],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,wt);else Pt(H.__webglFramebuffer[dt],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(A)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,wt=K.length;dt<wt;dt++){const At=K[dt],rt=n.get(At);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Xt(i.TEXTURE_2D,At),Pt(H.__webglFramebuffer,L,At,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(At)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(dt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),Xt(dt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)Pt(H.__webglFramebuffer[wt],L,A,i.COLOR_ATTACHMENT0,dt,wt);else Pt(H.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,dt,0);g(A)&&m(dt),e.unbindTexture()}L.depthBuffer&&ve(L)}function U(L){const A=L.textures;for(let H=0,$=A.length;H<$;H++){const K=A[H];if(g(K)){const Y=N(L),Rt=n.get(K).__webglTexture;e.bindTexture(Y,Rt),m(Y),e.unbindTexture()}}}const Be=[],le=[];function ye(L){if(L.samples>0){if(se(L)===!1){const A=L.textures,H=L.width,$=L.height;let K=i.COLOR_BUFFER_BIT;const Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(L),dt=A.length>1;if(dt)for(let At=0;At<A.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const wt=L.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let At=0;At<A.length;At++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);const rt=n.get(A[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,K,i.NEAREST),c===!0&&(Be.length=0,le.length=0,Be.push(i.COLOR_ATTACHMENT0+At),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Be.push(Y),le.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let At=0;At<A.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);const rt=n.get(A[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function bt(L){return Math.min(r.maxSamples,L.samples)}function se(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Nt(L){const A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function Yt(L,A){const H=L.colorSpace,$=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==os&&H!==Ci&&(me.getTransfer(H)===Te?($!==Vn||K!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=w,this.resetTextureUnits=P,this.setTexture2D=nt,this.setTexture2DArray=et,this.setTexture3D=it,this.setTextureCube=j,this.rebindTextures=Me,this.setupRenderTarget=re,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=se}function mw(i,t){function e(n,r=Ci){let s;const o=me.getTransfer(r);if(n===_i)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bm)return i.BYTE;if(n===Rm)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===ku)return i.INT;if(n===dr)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===io)return i.HALF_FLOAT;if(n===Im)return i.ALPHA;if(n===Pm)return i.RGB;if(n===Vn)return i.RGBA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===Dm)return i.RED;if(n===Gu)return i.RED_INTEGER;if(n===Lm)return i.RG;if(n===Wu)return i.RG_INTEGER;if(n===Xu)return i.RGBA_INTEGER;if(n===na||n===ia||n===ra||n===sa)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===wc||n===bc||n===Rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Ic||n===Pc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cc||n===Ic)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dc||n===Lc||n===Nc||n===Uc||n===Oc||n===Fc||n===Vc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Wc||n===Xc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===qc||n===jc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nm||n===$c||n===Yc||n===Kc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new fn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:_w,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xn(new $a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends gr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,h=null,d=null,p=null,_=null,x=null;const b=new vw,g=e.getContextAttributes();let m=null,N=null;const D=[],I=[],k=new ee;let O=null;const S=new Pn;S.viewport=new Ue;const T=new Pn;T.viewport=new Ue;const y=[S,T],v=new BT;let M=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=D[Z];return ct===void 0&&(ct=new Pl,D[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=D[Z];return ct===void 0&&(ct=new Pl,D[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=D[Z];return ct===void 0&&(ct=new Pl,D[Z]=ct),ct.getHandSpace()};function w(Z){const ct=I.indexOf(Z.inputSource);if(ct===-1)return;const Ct=D[ct];Ct!==void 0&&(Ct.update(Z.inputSource,Z.frame,u||o),Ct.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<D.length;Z++){const ct=I[Z];ct!==null&&(I[Z]=null,D[Z].disconnect(ct))}M=null,P=null,b.reset(),t.setRenderTarget(m),_=null,p=null,d=null,r=null,N=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",J),r.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,gt=null,Pt=null;g.depth&&(Pt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=g.stencil?Qs:Ks,gt=g.stencil?Ys:dr);const he={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(he),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),N=new pr(p.textureWidth,p.textureHeight,{format:Vn,type:_i,depthTexture:new jm(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Ct={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,Ct),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),N=new pr(_.framebufferWidth,_.framebufferHeight,{format:Vn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),jt.setContext(r),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function nt(Z){for(let ct=0;ct<Z.removed.length;ct++){const Ct=Z.removed[ct],gt=I.indexOf(Ct);gt>=0&&(I[gt]=null,D[gt].disconnect(Ct))}for(let ct=0;ct<Z.added.length;ct++){const Ct=Z.added[ct];let gt=I.indexOf(Ct);if(gt===-1){for(let he=0;he<D.length;he++)if(he>=I.length){I.push(Ct),gt=he;break}else if(I[he]===null){I[he]=Ct,gt=he;break}if(gt===-1)break}const Pt=D[gt];Pt&&Pt.connect(Ct)}}const et=new G,it=new G;function j(Z,ct,Ct){et.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(Ct.matrixWorld);const gt=et.distanceTo(it),Pt=ct.projectionMatrix.elements,he=Ct.projectionMatrix.elements,Ot=Pt[14]/(Pt[10]-1),ve=Pt[14]/(Pt[10]+1),Me=(Pt[9]+1)/Pt[5],re=(Pt[9]-1)/Pt[5],U=(Pt[8]-1)/Pt[0],Be=(he[8]+1)/he[0],le=Ot*U,ye=Ot*Be,bt=gt/(-U+Be),se=bt*-U;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(se),Z.translateZ(bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pt[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Nt=Ot+bt,Yt=ve+bt,De=le-se,L=ye+(gt-se),A=Me*ve/Yt*Nt,H=re*ve/Yt*Nt;Z.projectionMatrix.makePerspective(De,L,A,H,Nt,Yt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pt(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ct=Z.near,Ct=Z.far;b.texture!==null&&(b.depthNear>0&&(ct=b.depthNear),b.depthFar>0&&(Ct=b.depthFar)),v.near=T.near=S.near=ct,v.far=T.far=S.far=Ct,(M!==v.near||P!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,P=v.far),S.layers.mask=Z.layers.mask|2,T.layers.mask=Z.layers.mask|4,v.layers.mask=S.layers.mask|T.layers.mask;const gt=Z.parent,Pt=v.cameras;pt(v,gt);for(let he=0;he<Pt.length;he++)pt(Pt[he],gt);Pt.length===2?j(v,S,T):v.projectionMatrix.copy(S.projectionMatrix),xt(Z,v,gt)};function xt(Z,ct,Ct){Ct===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Ct.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let Lt=null;function Xt(Z,ct){if(h=ct.getViewerPose(u||o),x=ct,h!==null){const Ct=h.views;_!==null&&(t.setRenderTargetFramebuffer(N,_.framebuffer),t.setRenderTarget(N));let gt=!1;Ct.length!==v.cameras.length&&(v.cameras.length=0,gt=!0);for(let Ot=0;Ot<Ct.length;Ot++){const ve=Ct[Ot];let Me=null;if(_!==null)Me=_.getViewport(ve);else{const U=d.getViewSubImage(p,ve);Me=U.viewport,Ot===0&&(t.setRenderTargetTextures(N,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(N))}let re=y[Ot];re===void 0&&(re=new Pn,re.layers.enable(Ot),re.viewport=new Ue,y[Ot]=re),re.matrix.fromArray(ve.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ve.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Me.x,Me.y,Me.width,Me.height),Ot===0&&(v.matrix.copy(re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),gt===!0&&v.cameras.push(re)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ot=d.getDepthInformation(Ct[0]);Ot&&Ot.isValid&&Ot.texture&&b.init(t,Ot,r.renderState)}}for(let Ct=0;Ct<D.length;Ct++){const gt=I[Ct],Pt=D[Ct];gt!==null&&Pt!==void 0&&Pt.update(gt,ct,u||o)}Lt&&Lt(Z,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),x=null}const jt=new $m;jt.setAnimationLoop(Xt),this.setAnimationLoop=function(Z){Lt=Z},this.dispose=function(){}}}const er=new gi,Ew=new Ve;function Tw(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Gm(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,N,D,I){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),p(g,m),m.isMeshPhysicalMaterial&&_(g,m,I)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,N,D):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const N=t.get(m),D=N.envMap,I=N.envMapRotation;D&&(g.envMap.value=D,er.copy(I),er.x*=-1,er.y*=-1,er.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),g.envMapRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(er)),g.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,N,D){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*N,g.scale.value=D*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,N){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=N.texture,g.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){const N=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(N.matrixWorld),g.nearDistance.value=N.shadow.camera.near,g.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xw(i,t,e,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(N,D){const I=D.program;n.uniformBlockBinding(N,I)}function u(N,D){let I=r[N.id];I===void 0&&(x(N),I=h(N),r[N.id]=I,N.addEventListener("dispose",g));const k=D.program;n.updateUBOMapping(N,k);const O=t.render.frame;s[N.id]!==O&&(p(N),s[N.id]=O)}function h(N){const D=d();N.__bindingPointIndex=D;const I=i.createBuffer(),k=N.__size,O=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,k,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,I),I}function d(){for(let N=0;N<l;N++)if(o.indexOf(N)===-1)return o.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(N){const D=r[N.id],I=N.uniforms,k=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let O=0,S=I.length;O<S;O++){const T=Array.isArray(I[O])?I[O]:[I[O]];for(let y=0,v=T.length;y<v;y++){const M=T[y];if(_(M,O,y,k)===!0){const P=M.__offset,w=Array.isArray(M.value)?M.value:[M.value];let J=0;for(let nt=0;nt<w.length;nt++){const et=w[nt],it=b(et);typeof et=="number"||typeof et=="boolean"?(M.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,P+J,M.__data)):et.isMatrix3?(M.__data[0]=et.elements[0],M.__data[1]=et.elements[1],M.__data[2]=et.elements[2],M.__data[3]=0,M.__data[4]=et.elements[3],M.__data[5]=et.elements[4],M.__data[6]=et.elements[5],M.__data[7]=0,M.__data[8]=et.elements[6],M.__data[9]=et.elements[7],M.__data[10]=et.elements[8],M.__data[11]=0):(et.toArray(M.__data,J),J+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(N,D,I,k){const O=N.value,S=D+"_"+I;if(k[S]===void 0)return typeof O=="number"||typeof O=="boolean"?k[S]=O:k[S]=O.clone(),!0;{const T=k[S];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return k[S]=O,!0}else if(T.equals(O)===!1)return T.copy(O),!0}return!1}function x(N){const D=N.uniforms;let I=0;const k=16;for(let S=0,T=D.length;S<T;S++){const y=Array.isArray(D[S])?D[S]:[D[S]];for(let v=0,M=y.length;v<M;v++){const P=y[v],w=Array.isArray(P.value)?P.value:[P.value];for(let J=0,nt=w.length;J<nt;J++){const et=w[J],it=b(et),j=I%k,pt=j%it.boundary,xt=j+pt;I+=pt,xt!==0&&k-xt<it.storage&&(I+=k-xt),P.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=I,I+=it.storage}}}const O=I%k;return O>0&&(I+=k-O),N.__size=I,N.__cache={},this}function b(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function g(N){const D=N.target;D.removeEventListener("dispose",g);const I=o.indexOf(D.__bindingPointIndex);o.splice(I,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete s[D.id]}function m(){for(const N in r)i.deleteBuffer(r[N]);o=[],r={},s={}}return{bind:c,update:u,dispose:m}}class Sw{constructor(t={}){const{canvas:e=rT(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const x=new Uint32Array(4),b=new Int32Array(4);let g=null,m=null;const N=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let k=!1;this._outputColorSpace=bn;let O=0,S=0,T=null,y=-1,v=null;const M=new Ue,P=new Ue;let w=null;const J=new Se(0);let nt=0,et=e.width,it=e.height,j=1,pt=null,xt=null;const Lt=new Ue(0,0,et,it),Xt=new Ue(0,0,et,it);let jt=!1;const Z=new qm;let ct=!1,Ct=!1;const gt=new Ve,Pt=new Ve,he=new G,Ot=new Ue,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function re(){return T===null?j:1}let U=n;function Be(R,V){return e.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bu}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",Q,!1),U===null){const V="webgl2";if(U=Be(V,R),U===null)throw Be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,ye,bt,se,Nt,Yt,De,L,A,H,$,K,Y,Rt,dt,wt,At,rt,Et,Ft,Vt,ft,Gt,F;function mt(){le=new LM(U),le.init(),ft=new mw(U,le),ye=new wM(U,le,t,ft),bt=new fw(U,le),ye.reverseDepthBuffer&&p&&bt.buffers.depth.setReversed(!0),se=new OM(U),Nt=new tw,Yt=new pw(U,le,bt,Nt,ye,ft,se),De=new RM(I),L=new DM(I),A=new HT(U),Gt=new MM(U,A),H=new NM(U,A,se,Gt),$=new VM(U,H,A,se),Et=new FM(U,ye,Yt),wt=new bM(Nt),K=new JA(I,De,L,le,ye,Gt,wt),Y=new Tw(I,Nt),Rt=new nw,dt=new lw(le),rt=new SM(I,De,L,bt,$,_,c),At=new hw(I,$,ye),F=new xw(U,se,ye,bt),Ft=new AM(U,le,se),Vt=new UM(U,le,se),se.programs=K.programs,I.capabilities=ye,I.extensions=le,I.properties=Nt,I.renderLists=Rt,I.shadowMap=At,I.state=bt,I.info=se}mt();const st=new yw(I,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(et,it,!1))},this.getSize=function(R){return R.set(et,it)},this.setSize=function(R,V,X=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=R,it=V,e.width=Math.floor(R*j),e.height=Math.floor(V*j),X===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(et*j,it*j).floor()},this.setDrawingBufferSize=function(R,V,X){et=R,it=V,j=X,e.width=Math.floor(R*X),e.height=Math.floor(V*X),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(Lt)},this.setViewport=function(R,V,X,W){R.isVector4?Lt.set(R.x,R.y,R.z,R.w):Lt.set(R,V,X,W),bt.viewport(M.copy(Lt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Xt)},this.setScissor=function(R,V,X,W){R.isVector4?Xt.set(R.x,R.y,R.z,R.w):Xt.set(R,V,X,W),bt.scissor(P.copy(Xt).multiplyScalar(j).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(R){bt.setScissorTest(jt=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,X=!0){let W=0;if(R){let B=!1;if(T!==null){const lt=T.texture.format;B=lt===Xu||lt===Wu||lt===Gu}if(B){const lt=T.texture.type,ht=lt===_i||lt===dr||lt===$s||lt===Ys||lt===zu||lt===Hu,vt=rt.getClearColor(),yt=rt.getClearAlpha(),kt=vt.r,zt=vt.g,It=vt.b;ht?(x[0]=kt,x[1]=zt,x[2]=It,x[3]=yt,U.clearBufferuiv(U.COLOR,0,x)):(b[0]=kt,b[1]=zt,b[2]=It,b[3]=yt,U.clearBufferiv(U.COLOR,0,b))}else W|=U.COLOR_BUFFER_BIT}V&&(W|=U.DEPTH_BUFFER_BIT),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),rt.dispose(),Rt.dispose(),dt.dispose(),Nt.dispose(),De.dispose(),L.dispose(),$.dispose(),Gt.dispose(),F.dispose(),K.dispose(),st.dispose(),st.removeEventListener("sessionstart",ps),st.removeEventListener("sessionend",vi),xn.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const R=se.autoReset,V=At.enabled,X=At.autoUpdate,W=At.needsUpdate,B=At.type;mt(),se.autoReset=R,At.enabled=V,At.autoUpdate=X,At.needsUpdate=W,At.type=B}function Q(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const V=R.target;V.removeEventListener("dispose",Mt),Wt(V)}function Wt(R){Ee(R),Nt.remove(R)}function Ee(R){const V=Nt.get(R).programs;V!==void 0&&(V.forEach(function(X){K.releaseProgram(X)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,X,W,B,lt){V===null&&(V=ve);const ht=B.isMesh&&B.matrixWorld.determinant()<0,vt=Er(R,V,X,W,B);bt.setMaterial(W,ht);let yt=X.index,kt=1;if(W.wireframe===!0){if(yt=H.getWireframeAttribute(X),yt===void 0)return;kt=2}const zt=X.drawRange,It=X.attributes.position;let te=zt.start*kt,de=(zt.start+zt.count)*kt;lt!==null&&(te=Math.max(te,lt.start*kt),de=Math.min(de,(lt.start+lt.count)*kt)),yt!==null?(te=Math.max(te,0),de=Math.min(de,yt.count)):It!=null&&(te=Math.max(te,0),de=Math.min(de,It.count));const Ae=de-te;if(Ae<0||Ae===1/0)return;Gt.setup(B,W,vt,X,yt);let Re,ae=Ft;if(yt!==null&&(Re=A.get(yt),ae=Vt,ae.setIndex(Re)),B.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*re()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(B.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),bt.setLineWidth(Ut*re()),B.isLineSegments?ae.setMode(U.LINES):B.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else B.isPoints?ae.setMode(U.POINTS):B.isSprite&&ae.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ut=B._multiDrawStarts,ke=B._multiDrawCounts,fe=B._multiDrawCount,mn=yt?A.get(yt).bytesPerElement:1,yi=Nt.get(W).currentProgram.getUniforms();for(let Le=0;Le<fe;Le++)yi.setValue(U,"_gl_DrawID",Le),ae.render(Ut[Le]/mn,ke[Le])}else if(B.isInstancedMesh)ae.renderInstances(te,Ae,B.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ke=Math.min(X.instanceCount,Ut);ae.renderInstances(te,Ae,ke)}else ae.render(te,Ae)};function oe(R,V,X){R.transparent===!0&&R.side===li&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Jn(R,V,X),R.side=Wi,R.needsUpdate=!0,Jn(R,V,X),R.side=li):Jn(R,V,X)}this.compile=function(R,V,X=null){X===null&&(X=R),m=dt.get(X),m.init(V),D.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),R!==X&&R.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const W=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const lt=B.material;if(lt)if(Array.isArray(lt))for(let ht=0;ht<lt.length;ht++){const vt=lt[ht];oe(vt,X,B),W.add(vt)}else oe(lt,X,B),W.add(lt)}),m=D.pop(),W},this.compileAsync=function(R,V,X=null){const W=this.compile(R,V,X);return new Promise(B=>{function lt(){if(W.forEach(function(ht){Nt.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){B(R);return}setTimeout(lt,10)}le.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let pn=null;function be(R){pn&&pn(R)}function ps(){xn.stop()}function vi(){xn.start()}const xn=new $m;xn.setAnimationLoop(be),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(R){pn=R,st.setAnimationLoop(R),R===null?xn.stop():xn.start()},st.addEventListener("sessionstart",ps),st.addEventListener("sessionend",vi),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(V),V=st.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,V,T),m=dt.get(R,D.length),m.init(V),D.push(m),Pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(Pt),Ct=this.localClippingEnabled,ct=wt.init(this.clippingPlanes,Ct),g=Rt.get(R,N.length),g.init(),N.push(g),st.enabled===!0&&st.isPresenting===!0){const lt=I.xr.getDepthSensingMesh();lt!==null&&ms(lt,V,-1/0,I.sortObjects)}ms(R,V,0,I.sortObjects),g.finish(),I.sortObjects===!0&&g.sort(pt,xt),Me=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Me&&rt.addToRenderList(g,R),this.info.render.frame++,ct===!0&&wt.beginShadows();const X=m.state.shadowsArray;At.render(X,R,V),ct===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(m.setupLights(),V.isArrayCamera){const lt=V.cameras;if(B.length>0)for(let ht=0,vt=lt.length;ht<vt;ht++){const yt=lt[ht];Zn(W,B,R,yt)}Me&&rt.render(R);for(let ht=0,vt=lt.length;ht<vt;ht++){const yt=lt[ht];ao(g,R,yt,yt.viewport)}}else B.length>0&&Zn(W,B,R,V),Me&&rt.render(R),ao(g,R,V);T!==null&&S===0&&(Yt.updateMultisampleRenderTarget(T),Yt.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(I,R,V),Gt.resetDefaultState(),y=-1,v=null,D.pop(),D.length>0?(m=D[D.length-1],ct===!0&&wt.setGlobalState(I.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?g=N[N.length-1]:g=null};function ms(R,V,X,W){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){W&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const ht=$.update(R),vt=R.material;vt.visible&&g.push(R,ht,vt,X,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const ht=$.update(R),vt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ot.copy(ht.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(vt)){const yt=ht.groups;for(let kt=0,zt=yt.length;kt<zt;kt++){const It=yt[kt],te=vt[It.materialIndex];te&&te.visible&&g.push(R,ht,te,X,Ot.z,It)}}else vt.visible&&g.push(R,ht,vt,X,Ot.z,null)}}const lt=R.children;for(let ht=0,vt=lt.length;ht<vt;ht++)ms(lt[ht],V,X,W)}function ao(R,V,X,W){const B=R.opaque,lt=R.transmissive,ht=R.transparent;m.setupLightsView(X),ct===!0&&wt.setGlobalState(I.clippingPlanes,X),W&&bt.viewport(M.copy(W)),B.length>0&&vr(B,V,X),lt.length>0&&vr(lt,V,X),ht.length>0&&vr(ht,V,X),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Zn(R,V,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new pr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?io:_i,minFilter:lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const lt=m.state.transmissionRenderTarget[W.id],ht=W.viewport||M;lt.setSize(ht.z*I.transmissionResolutionScale,ht.w*I.transmissionResolutionScale);const vt=I.getRenderTarget();I.setRenderTarget(lt),I.getClearColor(J),nt=I.getClearAlpha(),nt<1&&I.setClearColor(16777215,.5),I.clear(),Me&&rt.render(X);const yt=I.toneMapping;I.toneMapping=Fi;const kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),ct===!0&&wt.setGlobalState(I.clippingPlanes,W),vr(R,X,W),Yt.updateMultisampleRenderTarget(lt),Yt.updateRenderTargetMipmap(lt),le.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let It=0,te=V.length;It<te;It++){const de=V[It],Ae=de.object,Re=de.geometry,ae=de.material,Ut=de.group;if(ae.side===li&&Ae.layers.test(W.layers)){const ke=ae.side;ae.side=Tn,ae.needsUpdate=!0,lo(Ae,X,W,Re,ae,Ut),ae.side=ke,ae.needsUpdate=!0,zt=!0}}zt===!0&&(Yt.updateMultisampleRenderTarget(lt),Yt.updateRenderTargetMipmap(lt))}I.setRenderTarget(vt),I.setClearColor(J,nt),kt!==void 0&&(W.viewport=kt),I.toneMapping=yt}function vr(R,V,X){const W=V.isScene===!0?V.overrideMaterial:null;for(let B=0,lt=R.length;B<lt;B++){const ht=R[B],vt=ht.object,yt=ht.geometry,kt=ht.group;let zt=ht.material;zt.allowOverride===!0&&W!==null&&(zt=W),vt.layers.test(X.layers)&&lo(vt,V,X,yt,zt,kt)}}function lo(R,V,X,W,B,lt){R.onBeforeRender(I,V,X,W,B,lt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(I,V,X,W,R,lt),B.transparent===!0&&B.side===li&&B.forceSinglePass===!1?(B.side=Tn,B.needsUpdate=!0,I.renderBufferDirect(X,V,W,B,R,lt),B.side=Wi,B.needsUpdate=!0,I.renderBufferDirect(X,V,W,B,R,lt),B.side=li):I.renderBufferDirect(X,V,W,B,R,lt),R.onAfterRender(I,V,X,W,B,lt)}function Jn(R,V,X){V.isScene!==!0&&(V=ve);const W=Nt.get(R),B=m.state.lights,lt=m.state.shadowsArray,ht=B.state.version,vt=K.getParameters(R,B.state,lt,V,X),yt=K.getProgramCacheKey(vt);let kt=W.programs;W.environment=R.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(R.isMeshStandardMaterial?L:De).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Mt),kt=new Map,W.programs=kt);let zt=kt.get(yt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===ht)return yr(R,vt),zt}else vt.uniforms=K.getUniforms(R),R.onBeforeCompile(vt,I),zt=K.acquireProgram(vt,yt),kt.set(yt,zt),W.uniforms=vt.uniforms;const It=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=wt.uniform),yr(R,vt),W.needsLights=co(R),W.lightsStateVersion=ht,W.needsLights&&(It.ambientLightColor.value=B.state.ambient,It.lightProbe.value=B.state.probe,It.directionalLights.value=B.state.directional,It.directionalLightShadows.value=B.state.directionalShadow,It.spotLights.value=B.state.spot,It.spotLightShadows.value=B.state.spotShadow,It.rectAreaLights.value=B.state.rectArea,It.ltc_1.value=B.state.rectAreaLTC1,It.ltc_2.value=B.state.rectAreaLTC2,It.pointLights.value=B.state.point,It.pointLightShadows.value=B.state.pointShadow,It.hemisphereLights.value=B.state.hemi,It.directionalShadowMap.value=B.state.directionalShadowMap,It.directionalShadowMatrix.value=B.state.directionalShadowMatrix,It.spotShadowMap.value=B.state.spotShadowMap,It.spotLightMatrix.value=B.state.spotLightMatrix,It.spotLightMap.value=B.state.spotLightMap,It.pointShadowMap.value=B.state.pointShadowMap,It.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function _s(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=la.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function yr(R,V){const X=Nt.get(R);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function Er(R,V,X,W,B){V.isScene!==!0&&(V=ve),Yt.resetTextureUnits();const lt=V.fog,ht=W.isMeshStandardMaterial?V.environment:null,vt=T===null?I.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:os,yt=(W.isMeshStandardMaterial?L:De).get(W.envMap||ht),kt=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,de=!!X.morphAttributes.color;let Ae=Fi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ae=I.toneMapping);const Re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=Re!==void 0?Re.length:0,Ut=Nt.get(W),ke=m.state.lights;if(ct===!0&&(Ct===!0||R!==v)){const Kt=R===v&&W.id===y;wt.setState(W,R,Kt)}let fe=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ke.state.version||Ut.outputColorSpace!==vt||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==yt||W.fog===!0&&Ut.fog!==lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==wt.numPlanes||Ut.numIntersection!==wt.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==zt||Ut.morphTargets!==It||Ut.morphNormals!==te||Ut.morphColors!==de||Ut.toneMapping!==Ae||Ut.morphTargetsCount!==ae)&&(fe=!0):(fe=!0,Ut.__version=W.version);let mn=Ut.currentProgram;fe===!0&&(mn=Jn(W,V,B));let yi=!1,Le=!1,cn=!1;const ge=mn.getUniforms(),Ke=Ut.uniforms;if(bt.useProgram(mn.program)&&(yi=!0,Le=!0,cn=!0),W.id!==y&&(y=W.id,Le=!0),yi||v!==R){bt.buffers.depth.getReversed()?(gt.copy(R.projectionMatrix),oT(gt),aT(gt),ge.setValue(U,"projectionMatrix",gt)):ge.setValue(U,"projectionMatrix",R.projectionMatrix),ge.setValue(U,"viewMatrix",R.matrixWorldInverse);const ze=ge.map.cameraPosition;ze!==void 0&&ze.setValue(U,he.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,Le=!0,cn=!0)}if(B.isSkinnedMesh){ge.setOptional(U,B,"bindMatrix"),ge.setOptional(U,B,"bindMatrixInverse");const Kt=B.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ge.setValue(U,"boneTexture",Kt.boneTexture,Yt))}B.isBatchedMesh&&(ge.setOptional(U,B,"batchingTexture"),ge.setValue(U,"batchingTexture",B._matricesTexture,Yt),ge.setOptional(U,B,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",B._indirectTexture,Yt),ge.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",B._colorsTexture,Yt));const un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Et.update(B,X,mn),(Le||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,ge.setValue(U,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ke.envMap.value=yt,Ke.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&V.environment!==null&&(Ke.envMapIntensity.value=V.environmentIntensity),Le&&(ge.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ut.needsLights&&Hn(Ke,cn),lt&&W.fog===!0&&Y.refreshFogUniforms(Ke,lt),Y.refreshMaterialUniforms(Ke,W,j,it,m.state.transmissionRenderTarget[R.id]),la.upload(U,_s(Ut),Ke,Yt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(la.upload(U,_s(Ut),Ke,Yt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(U,"center",B.center),ge.setValue(U,"modelViewMatrix",B.modelViewMatrix),ge.setValue(U,"normalMatrix",B.normalMatrix),ge.setValue(U,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Kt=W.uniformsGroups;for(let ze=0,ti=Kt.length;ze<ti;ze++){const Sn=Kt[ze];F.update(Sn,mn),F.bind(Sn,mn)}}return mn}function Hn(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function co(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,V,X){const W=Nt.get(R);W.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Nt.get(R.texture).__webglTexture=V,Nt.get(R.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const X=Nt.get(R);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};const uo=U.createFramebuffer();this.setRenderTarget=function(R,V=0,X=0){T=R,O=V,S=X;let W=!0,B=null,lt=!1,ht=!1;if(R){const yt=Nt.get(R);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(yt.__webglFramebuffer===void 0)Yt.setupRenderTarget(R);else if(yt.__hasExternalTextures)Yt.rebindTextures(R,Nt.get(R.texture).__webglTexture,Nt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const It=R.depthTexture;if(yt.__boundDepthTexture!==It){if(It!==null&&Nt.has(It)&&(R.width!==It.image.width||R.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(ht=!0);const zt=Nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[V])?B=zt[V][X]:B=zt[V],lt=!0):R.samples>0&&Yt.useMultisampledRTT(R)===!1?B=Nt.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[X]:B=zt,M.copy(R.viewport),P.copy(R.scissor),w=R.scissorTest}else M.copy(Lt).multiplyScalar(j).floor(),P.copy(Xt).multiplyScalar(j).floor(),w=jt;if(X!==0&&(B=uo),bt.bindFramebuffer(U.FRAMEBUFFER,B)&&W&&bt.drawBuffers(R,B),bt.viewport(M),bt.scissor(P),bt.setScissorTest(w),lt){const yt=Nt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,yt.__webglTexture,X)}else if(ht){const yt=Nt.get(R.texture),kt=V;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,X,kt)}else if(R!==null&&X!==0){const yt=Nt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(R,V,X,W,B,lt,ht,vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){bt.bindFramebuffer(U.FRAMEBUFFER,yt);try{const kt=R.textures[vt],zt=kt.format,It=kt.type;if(!ye.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-W&&X>=0&&X<=R.height-B&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt),U.readPixels(V,X,W,B,ft.convert(zt),ft.convert(It),lt))}finally{const kt=T!==null?Nt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,V,X,W,B,lt,ht,vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt)if(V>=0&&V<=R.width-W&&X>=0&&X<=R.height-B){bt.bindFramebuffer(U.FRAMEBUFFER,yt);const kt=R.textures[vt],zt=kt.format,It=kt.type;if(!ye.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.bufferData(U.PIXEL_PACK_BUFFER,lt.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt),U.readPixels(V,X,W,B,ft.convert(zt),ft.convert(It),0);const de=T!==null?Nt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,de);const Ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sT(U,Ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,lt),U.deleteBuffer(te),U.deleteSync(Ae),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,X=0){const W=Math.pow(2,-X),B=Math.floor(R.image.width*W),lt=Math.floor(R.image.height*W),ht=V!==null?V.x:0,vt=V!==null?V.y:0;Yt.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ht,vt,B,lt),bt.unbindTexture()};const gs=U.createFramebuffer(),vs=U.createFramebuffer();this.copyTextureToTexture=function(R,V,X=null,W=null,B=0,lt=null){lt===null&&(B!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=B,B=0):lt=0);let ht,vt,yt,kt,zt,It,te,de,Ae;const Re=R.isCompressedTexture?R.mipmaps[lt]:R.image;if(X!==null)ht=X.max.x-X.min.x,vt=X.max.y-X.min.y,yt=X.isBox3?X.max.z-X.min.z:1,kt=X.min.x,zt=X.min.y,It=X.isBox3?X.min.z:0;else{const un=Math.pow(2,-B);ht=Math.floor(Re.width*un),vt=Math.floor(Re.height*un),R.isDataArrayTexture?yt=Re.depth:R.isData3DTexture?yt=Math.floor(Re.depth*un):yt=1,kt=0,zt=0,It=0}W!==null?(te=W.x,de=W.y,Ae=W.z):(te=0,de=0,Ae=0);const ae=ft.convert(V.format),Ut=ft.convert(V.type);let ke;V.isData3DTexture?(Yt.setTexture3D(V,0),ke=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Yt.setTexture2DArray(V,0),ke=U.TEXTURE_2D_ARRAY):(Yt.setTexture2D(V,0),ke=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const fe=U.getParameter(U.UNPACK_ROW_LENGTH),mn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yi=U.getParameter(U.UNPACK_SKIP_PIXELS),Le=U.getParameter(U.UNPACK_SKIP_ROWS),cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It);const ge=R.isDataArrayTexture||R.isData3DTexture,Ke=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const un=Nt.get(R),Kt=Nt.get(V),ze=Nt.get(un.__renderTarget),ti=Nt.get(Kt.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,ze.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Sn=0;Sn<yt;Sn++)ge&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.get(R).__webglTexture,B,It+Sn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.get(V).__webglTexture,lt,Ae+Sn)),U.blitFramebuffer(kt,zt,ht,vt,te,de,ht,vt,U.DEPTH_BUFFER_BIT,U.NEAREST);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||Nt.has(R)){const un=Nt.get(R),Kt=Nt.get(V);bt.bindFramebuffer(U.READ_FRAMEBUFFER,gs),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,vs);for(let ze=0;ze<yt;ze++)ge?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,un.__webglTexture,B,It+ze):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,un.__webglTexture,B),Ke?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,lt,Ae+ze):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,lt),B!==0?U.blitFramebuffer(kt,zt,ht,vt,te,de,ht,vt,U.COLOR_BUFFER_BIT,U.NEAREST):Ke?U.copyTexSubImage3D(ke,lt,te,de,Ae+ze,kt,zt,ht,vt):U.copyTexSubImage2D(ke,lt,te,de,kt,zt,ht,vt);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ke?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(ke,lt,te,de,Ae,ht,vt,yt,ae,Ut,Re.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(ke,lt,te,de,Ae,ht,vt,yt,ae,Re.data):U.texSubImage3D(ke,lt,te,de,Ae,ht,vt,yt,ae,Ut,Re):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,lt,te,de,ht,vt,ae,Ut,Re.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,lt,te,de,Re.width,Re.height,ae,Re.data):U.texSubImage2D(U.TEXTURE_2D,lt,te,de,ht,vt,ae,Ut,Re);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),lt===0&&V.generateMipmaps&&U.generateMipmap(ke),bt.unbindTexture()},this.copyTextureToTexture3D=function(R,V,X=null,W=null,B=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,X,W,B)},this.initRenderTarget=function(R){Nt.get(R).__webglFramebuffer===void 0&&Yt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Yt.setTextureCube(R,0):R.isData3DTexture?Yt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Yt.setTexture2DArray(R,0):Yt.setTexture2D(R,0),bt.unbindTexture()},this.resetState=function(){O=0,S=0,T=null,bt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Cf={type:"change"},Qu={type:"start"},Jm={type:"end"},jo=new Vm,If=new Ri,Mw=Math.cos(70*iT.DEG2RAD),He=new G,gn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class Aw extends kT{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new fr,this._lastTargetPosition=new G,this._quat=new fr().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nf,this._sphericalDelta=new nf,this._scale=1,this._panOffset=new G,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new G,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bw.bind(this),this._onPointerDown=ww.bind(this),this._onPointerUp=Rw.bind(this),this._onContextMenu=Uw.bind(this),this._onMouseWheel=Pw.bind(this),this._onKeyDown=Dw.bind(this),this._onTouchStart=Lw.bind(this),this._onTouchMove=Nw.bind(this),this._onMouseDown=Cw.bind(this),this._onMouseMove=Iw.bind(this),this._interceptControlDown=Ow.bind(this),this._interceptControlUp=Fw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cf),this.update(),this.state=xe.NONE}update(t=null){const e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=He.length();o=this._clampDistance(l*this._scale);const c=l-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new G(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),o=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jo.origin.copy(this.object.position),jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jo.direction))<Mw?this.object.lookAt(this.target):(If.setFromNormalAndCoplanarPoint(this.object.up,this.target),jo.intersectPlane(If,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;He.copy(r).sub(this.target);let s=He.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,l=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ee,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ww(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function bw(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Rw(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jm),this.state=xe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Cw(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case qr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case qr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Qu)}function Iw(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Pw(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent(Qu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jm))}function Dw(i){this.enabled!==!1&&this._handleKeyDown(i)}function Lw(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Qu)}function Nw(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function Uw(i){this.enabled!==!1&&i.preventDefault()}function Ow(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fw(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vw={apiKey:"AIzaSyCa2RAbKoz1Yq7MxFH2mC6aORNYoPq8FEM",authDomain:"test-5339c.firebaseapp.com",projectId:"test-5339c",storageBucket:"test-5339c.appspot.com",messagingSenderId:"906135165534",appId:"1:906135165534:web:0489a1620e90f1613732cf",measurementId:"G-Y58LXZJ671"},Bw=Bf(Vw),t_=ZE(Bw),kw={iceServers:[{urls:"stun:stun.relay.metered.ca:80"},{urls:"turn:a.relay.metered.ca:80",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"},{urls:"turn:a.relay.metered.ca:80?transport=tcp",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"},{urls:"turn:a.relay.metered.ca:443",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"},{urls:"turn:a.relay.metered.ca:443?transport=tcp",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"}],iceCandidatePoolSize:10},yn=new RTCPeerConnection(kw);let $o=null,kl=null;const zl=document.getElementById("webcamButton"),Pf=document.getElementById("webcamVideo"),Jc=document.getElementById("callButton"),e_=document.getElementById("callInput"),tu=document.getElementById("answerButton"),Yo=document.getElementById("remoteVideo"),Zs=document.getElementById("hangupButton"),n_=document.getElementById("senderButton"),i_=document.getElementById("receiverButton"),zw=document.getElementById("locStream"),Hw=document.getElementById("remStream");let eu=!0;function Gw(){eu=!eu}n_.onclick=()=>{i_.disabled=!0};i_.onclick=()=>{Gw(),n_.disabled=!0};zl.onclick=async()=>{eu?($o=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),$o.getTracks().forEach(i=>{yn.addTrack(i,$o)}),Pf.srcObject=$o,Jc.disabled=!1,tu.disabled=!0,zl.disabled=!0,Zs.disabled=!1,Yo.style.display="none",Hw.style.display="none"):(kl=new MediaStream,yn.ontrack=i=>{i.streams[0].getTracks().forEach(t=>{kl.addTrack(t)})},Yo.srcObject=kl,Yo.onloadedmetadata=()=>{Yo.play().catch(i=>console.warn("video play error:",i))},Jc.disabled=!0,tu.disabled=!1,zl.disabled=!0,Zs.disabled=!1,Pf.style.display="none",zw.style.display="none",Ww(),r_())};Jc.onclick=async()=>{const i=Cu(Bs(t_,"calls")),t=Bs(i,"offerCandidates"),e=Bs(i,"answerCandidates");e_.value=i.id,yn.onicecandidate=async s=>{s.candidate&&await xm(t,s.candidate.toJSON())};const n=await yn.createOffer();await yn.setLocalDescription(n);const r={sdp:n.sdp,type:n.type};await d0(i,{offer:r}),hc(i,s=>{const o=s.data();if(!yn.currentRemoteDescription&&(o!=null&&o.answer)){const l=new RTCSessionDescription(o.answer);yn.setRemoteDescription(l)}}),hc(e,s=>{s.docChanges().forEach(o=>{if(o.type==="added"){const l=new RTCIceCandidate(o.doc.data());yn.addIceCandidate(l)}})}),Zs.disabled=!1};tu.onclick=async()=>{const i=e_.value,t=Cu(t_,"calls",i),e=Bs(t,"answerCandidates"),n=Bs(t,"offerCandidates");yn.onicecandidate=async c=>{c.candidate&&await xm(e,c.candidate.toJSON())};const s=(await h0(t)).data().offer;await yn.setRemoteDescription(new RTCSessionDescription(s));const o=await yn.createAnswer();await yn.setLocalDescription(o);const l={type:o.type,sdp:o.sdp};await f0(t,{answer:l}),hc(n,c=>{c.docChanges().forEach(u=>{if(u.type==="added"){const h=u.doc.data();yn.addIceCandidate(new RTCIceCandidate(h))}})})};Zs.onclick=()=>{yn.close(),Zs.textContent="CLOSED!!!",console.log("datachannel closed")};function Ww(){camera=new Pn(60,window.innerWidth/window.innerHeight,1,1e3),camera.position.set(0,0,.1),scene=new DT,video=document.getElementById("remoteVideo");const i=new UT(video);i.colorSpace=bn;const t=new Yu(100,32,32,0);t.scale(-1,1,1);const e=new $u({map:i}),n=new Xn(t,e);scene.add(n),renderer=new Sw,renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(renderer.domElement);const r=new Aw(camera,renderer.domElement);r.enableZoom=!0,r.enablePan=!0;const s=(o,l,c)=>Math.max(l,Math.min(o,c));renderer.domElement.addEventListener("wheel",o=>{camera.fov=s(camera.fov+o.deltaY/10,10,120),camera.updateProjectionMatrix()}),window.addEventListener("resize",Xw),video.play().catch(o=>console.warn("video play error:",o))}function Xw(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function r_(){requestAnimationFrame(r_),renderer.render(scene,camera)}
