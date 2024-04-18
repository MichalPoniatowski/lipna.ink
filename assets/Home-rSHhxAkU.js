import{j as e,L as g,r,_ as o}from"./index-V5RgCB8q.js";import{d as k,u as l,h as j}from"./styled-components.browser.esm-jI5VSfd4.js";const w="_wrapper_1ggg7_1",y="_title_1ggg7_7",$="_wrapperContent_1ggg7_14",p={wrapper:w,title:y,wrapperContent:$},h=({children:s,title:a,color:c})=>{const t={backgroundColor:`var(--${c})`};return e.jsxs("div",{className:p.wrapper,children:[e.jsx("h2",{className:p.title,children:a}),e.jsx("div",{className:p.wrapperContent,style:t,children:s})]})},v="_buttonWrapper_khgek_1",C="_button_khgek_1",S="_buttonArrow_khgek_26",x={buttonWrapper:v,button:C,buttonArrow:S},d=({path:s,text:a})=>e.jsx("div",{className:x.buttonWrapper,children:e.jsx(g,{to:`/${s}`,children:e.jsxs("button",{className:x.button,children:[`${a} `,e.jsx(k,{size:"1rem",className:x.buttonArrow})]})})}),z="_wrapper_1of4i_1",A="_title_1of4i_5",N="_wrapperContent_1of4i_12",u={wrapper:z,title:A,wrapperContent:N},f=({children:s,title:a,color:c})=>{const t={backgroundColor:`var(--${c})`};return e.jsxs("div",{className:u.wrapper,children:[e.jsx("h2",{className:u.title,children:a}),e.jsx("div",{className:u.wrapperContent,style:t,children:s})]})},P={"aria-busy":!0,role:"progressbar"};l.div`
  display: ${s=>s.$visible?"flex":"none"};
`;const i=242.776657104492,E=1.6,T=j`
12.5% {
  stroke-dasharray: ${i*.14}px, ${i}px;
  stroke-dashoffset: -${i*.11}px;
}
43.75% {
  stroke-dasharray: ${i*.35}px, ${i}px;
  stroke-dashoffset: -${i*.35}px;
}
100% {
  stroke-dasharray: ${i*.01}px, ${i}px;
  stroke-dashoffset: -${i*.99}px;
}
`;l.path`
  stroke-dasharray: ${i*.01}px, ${i};
  stroke-dashoffset: 0;
  animation: ${T} ${E}s linear infinite;
`;const L=j`
to {
   transform: rotate(360deg);
 }
`;l.svg`
  animation: ${L} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;l.polyline`
  stroke-width: ${s=>s.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const O=j`
to {
   stroke-dashoffset: 136;
 }
`;l.polygon`
  stroke-dasharray: 17;
  animation: ${O} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;l.svg`
  transform-origin: 50% 65%;
`;const R=({visible:s=!0,width:a="80",height:c="80",colors:t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"],wrapperClass:b="",wrapperStyle:_={},ariaLabel:m="color-ring-loading"})=>s?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:a,height:c,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:b,style:_,"aria-label":m,"data-testid":"color-ring-svg",...P,children:[e.jsx("defs",{children:e.jsx("mask",{id:"ldio-4offds5dlws-mask",children:e.jsx("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})})})}),e.jsxs("g",{mask:"url(#ldio-4offds5dlws-mask)",children:[e.jsx("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:t[0],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})}),e.jsx("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:t[1],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})}),e.jsx("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:t[2],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})}),e.jsx("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:t[3],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})}),e.jsx("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:t[4],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})})]})]}):null,n=()=>e.jsx("div",{children:e.jsx(R,{className:"loader",visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),D=r.lazy(()=>o(()=>import("./Reviews-d4Y7jSA3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),I=r.lazy(()=>o(()=>import("./ArtistsPreview-bQrk-I_0.js"),__vite__mapDeps([9,1,2,10]))),V=r.lazy(()=>o(()=>import("./ContactPreview-7-NkYHmO.js"),__vite__mapDeps([11,1,2,7,5,6,12,13]))),W=r.lazy(()=>o(()=>import("./FAQPreview-Nmp_NR81.js"),__vite__mapDeps([14,1,2,3,4,15]))),H=r.lazy(()=>o(()=>import("./GalleryPreview-W1jovuBP.js"),__vite__mapDeps([16,1,2,3,4,5,6,17]))),M=r.lazy(()=>o(()=>import("./StudioPreview-t66rUUyW.js"),__vite__mapDeps([18,1,2,3,4,19]))),F=r.lazy(()=>o(()=>import("./Hero-f1gyzPaI.js"),__vite__mapDeps([20,1,2,7,21]))),Q=()=>e.jsxs("main",{children:[e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsx(F,{})}),e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsxs(f,{title:"O Mnie",color:"beige",children:[e.jsx(I,{}),e.jsx(d,{path:"artist",text:"Dowiedz sie więcej"})]})}),e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsxs(h,{title:"Galeria",color:"light-green",children:[e.jsx(H,{}),e.jsx(d,{path:"gallery",text:"Zobacz pełną galerie"})]})}),e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsxs(f,{title:"Studio",color:"beige",children:[e.jsx(M,{}),e.jsx(d,{path:"studio",text:"Studio i lokazlizacja"})]})}),e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsxs(f,{title:"Kontakt",color:"beige",children:[e.jsx(V,{}),e.jsx(d,{path:"contact",text:"Wypełnij formularz kontaktowy"})]})}),e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsxs(h,{title:"FAQ",color:"deep-green",children:[e.jsx(W,{}),e.jsx(d,{path:"faq",text:"Przejżyj wszytskie Q & A"})]})}),e.jsx(r.Suspense,{fallback:e.jsx(n,{}),children:e.jsx(h,{title:"Opinie",color:"light-green",children:e.jsx(D,{})})})]}),q=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{q as H,n as L,x as c};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Reviews-d4Y7jSA3.js","assets/index-V5RgCB8q.js","assets/index-7mmJoMP6.css","assets/pagination-BxoRSkfb.js","assets/pagination-zI1bHqUV.css","assets/Toasts-ILVbRHg7.js","assets/Toasts-mIr2F93V.css","assets/styled-components.browser.esm-jI5VSfd4.js","assets/Reviews-DPioO_hQ.css","assets/ArtistsPreview-bQrk-I_0.js","assets/ArtistsPreview-KJSNKbSH.css","assets/ContactPreview-7-NkYHmO.js","assets/index.esm-hHKcXAFp.js","assets/ContactPreview-4lDnqV5w.css","assets/FAQPreview-Nmp_NR81.js","assets/FAQPreview-SUYmVCsY.css","assets/GalleryPreview-W1jovuBP.js","assets/GalleryPreview-UbBaBRG2.css","assets/StudioPreview-t66rUUyW.js","assets/StudioPreview-Kv4NlEOI.css","assets/Hero-f1gyzPaI.js","assets/Hero-yo_ohIe-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
