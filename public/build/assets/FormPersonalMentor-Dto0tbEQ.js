import{j as e}from"./app-CvMzo3A8.js";import h from"./FormWrap-T3MDzNsh.js";import c from"./InputText-CjtBBuiW.js";import p from"./InputSelection-BP3WIkKq.js";import g from"./InputArea-tsVkJz8t.js";import u from"./InputFile-BtANs1x4.js";import{c as r}from"./createLucideIcon-j4482EcZ.js";import{C as x}from"./calendar-BqWPYjwI.js";/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],f=r("camera",v);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9",key:"flvdwo"}],["path",{d:"M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14",key:"a5i0n2"}]],m=r("church",k);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],s=r("map-pin",y);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],C=r("user",_);function P({data:a,setData:d,errors:o}){const n=t=>{const{name:i,value:l}=t.target;d(i,l)};return e.jsx(h,{title:"Tentang Kamu",subtitle:"Ceritain tentang diri kamu",icon:C,children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(c,{label:"Tempat Lahir",type:"text",name:"place_birth",value:a.place_birth,onChange:n,placeholder:"Contoh: Jakarta",icon:s}),e.jsx(c,{label:"Tanggal Lahir",type:"date",name:"date_born",value:a.date_born,onChange:n,icon:x})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(p,{label:"Gender",name:"gender",value:a.gender,onChange:n,options:["Laki-laki","Perempuan"],icon:m}),e.jsx(p,{label:"Agama",name:"religion",value:a.religion,onChange:n,options:["Islam","Kristen","Katolik","Budha","Hindu","Konghucu"],icon:m})]}),e.jsx(g,{name:"address",value:a.address,onChange:n,label:"Alamat",icon:s,placeholder:"Contoh: Jl. Merdeka No. 123"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(c,{label:"No HP",type:"tel",name:"phone_number",value:a.phone_number,onChange:n,placeholder:"Contoh: 0812-3456-7890",icon:s}),e.jsx(u,{label:"Foto Profile",name:"profile_picture",onChange:t=>{var l;const i=(l=t.target.files)==null?void 0:l[0];i&&d("profile_picture",i)},icon:f})]}),(o==null?void 0:o.profile_picture)&&e.jsx("p",{className:"text-red-500 text-sm",children:o.profile_picture})]})})}export{P as default};
