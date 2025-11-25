import{j as e}from"./app-5fGJYEJs.js";import{c as s}from"./createLucideIcon-DDKrHHNZ.js";/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],r=s("image",i);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],l=s("upload",c);function d({onChange:a,previewImage:t}){return e.jsxs("div",{children:[e.jsxs("label",{className:"flex items-center gap-2 text-purple-900 font-bold mb-2 text-lg",children:[e.jsx(r,{className:"w-6 h-6 text-pink-500"}),"Foto Kelas"]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:a,className:"hidden",id:"imageUpload"}),e.jsx("label",{htmlFor:"imageUpload",className:"flex flex-col items-center justify-center w-full h-48 border-4 border-dashed border-pink-300 rounded-2xl cursor-pointer bg-gradient-to-br from-pink-50 to-purple-50 hover:border-pink-400 hover:bg-pink-100 transition-all",children:t?e.jsxs("div",{className:"relative w-full h-full rounded-2xl overflow-hidden",children:[e.jsx("img",{src:t,alt:"Preview",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity",children:e.jsx(l,{className:"w-12 h-12 text-white"})})]}):e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(l,{className:"w-16 h-16 text-pink-400"}),e.jsx("p",{className:"text-lg font-semibold text-pink-600",children:"Klik untuk upload foto"}),e.jsx("p",{className:"text-sm text-pink-400",children:"PNG, JPG maksimal 5MB"})]})})]})]})}export{d as default};
