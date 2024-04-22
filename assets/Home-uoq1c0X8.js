import{j as e,L as O,b as p,r as n,_ as g}from"./index-qRwIQYuj.js";import{c as z,u as w,h as T}from"./styled-components.browser.esm-5AAMuNrI.js";const H="_wrapper_1ggg7_1",L="_title_1ggg7_7",X="_wrapperContent_1ggg7_14",C={wrapper:H,title:L,wrapperContent:X},Q=({children:A,title:a,color:o})=>{const t={backgroundColor:`var(--${o})`};return e.jsxs("div",{className:C.wrapper,children:[e.jsx("h2",{className:C.title,children:a}),e.jsx("div",{className:C.wrapperContent,style:t,children:A})]})},Y="_buttonWrapper_khgek_1",V="_button_khgek_1",U="_buttonArrow_khgek_26",v={buttonWrapper:Y,button:V,buttonArrow:U},E=({path:A,text:a})=>e.jsx("div",{className:v.buttonWrapper,children:e.jsx(O,{to:`/${A}`,children:e.jsxs("button",{className:v.button,children:[`${a} `,e.jsx(z,{size:"1rem",className:v.buttonArrow})]})})}),Z="_wrapper_1of4i_1",K="_title_1of4i_5",q="_wrapperContent_1of4i_12",_={wrapper:Z,title:K,wrapperContent:q},M=({children:A,title:a,color:o})=>{const t={backgroundColor:`var(--${o})`};return e.jsxs("div",{className:_.wrapper,children:[e.jsx("h2",{className:_.title,children:a}),e.jsx("div",{className:_.wrapperContent,style:t,children:A})]})},ee={"aria-busy":!0,role:"progressbar"};w.div`
  display: ${A=>A.$visible?"flex":"none"};
`;const l=242.776657104492,Ae=1.6,te=T`
12.5% {
  stroke-dasharray: ${l*.14}px, ${l}px;
  stroke-dashoffset: -${l*.11}px;
}
43.75% {
  stroke-dasharray: ${l*.35}px, ${l}px;
  stroke-dashoffset: -${l*.35}px;
}
100% {
  stroke-dasharray: ${l*.01}px, ${l}px;
  stroke-dashoffset: -${l*.99}px;
}
`;w.path`
  stroke-dasharray: ${l*.01}px, ${l};
  stroke-dashoffset: 0;
  animation: ${te} ${Ae}s linear infinite;
`;const se=T`
to {
   transform: rotate(360deg);
 }
`;w.svg`
  animation: ${se} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;w.polyline`
  stroke-width: ${A=>A.width}px;
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
`;const re=T`
to {
   stroke-dashoffset: 136;
 }
`;w.polygon`
  stroke-dasharray: 17;
  animation: ${re} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;w.svg`
  transform-origin: 50% 65%;
`;const De=({visible:A=!0,width:a="80",height:o="80",colors:t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"],wrapperClass:h="",wrapperStyle:x={},ariaLabel:k="color-ring-loading"})=>A?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:a,height:o,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:h,style:x,"aria-label":k,"data-testid":"color-ring-svg",...ee,children:[e.jsx("defs",{children:e.jsx("mask",{id:"ldio-4offds5dlws-mask",children:e.jsx("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})})})}),e.jsxs("g",{mask:"url(#ldio-4offds5dlws-mask)",children:[e.jsx("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:t[0],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})}),e.jsx("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:t[1],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})}),e.jsx("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:t[2],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})}),e.jsx("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:t[3],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})}),e.jsx("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:t[4],children:e.jsx("animate",{attributeName:"fill",values:t.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})})]})]}):null,ne=p.createContext({}),F=!0;function ie({baseColor:A,highlightColor:a,width:o,height:t,borderRadius:h,circle:x,direction:k,duration:m,enableAnimation:j=F}){const r={};return k==="rtl"&&(r["--animation-direction"]="reverse"),typeof m=="number"&&(r["--animation-duration"]=`${m}s`),j||(r["--pseudo-element-display"]="none"),(typeof o=="string"||typeof o=="number")&&(r.width=o),(typeof t=="string"||typeof t=="number")&&(r.height=t),(typeof h=="string"||typeof h=="number")&&(r.borderRadius=h),x&&(r.borderRadius="50%"),typeof A<"u"&&(r["--base-color"]=A),typeof a<"u"&&(r["--highlight-color"]=a),r}function i({count:A=1,wrapper:a,className:o,containerClassName:t,containerTestId:h,circle:x=!1,style:k,...m}){var j,r,y;const W=p.useContext(ne),N={...m};for(const[c,d]of Object.entries(m))typeof d>"u"&&delete N[c];const u={...W,...N,circle:x},R={...k,...ie(u)};let S="react-loading-skeleton";o&&(S+=` ${o}`);const J=(j=u.inline)!==null&&j!==void 0?j:!1,b=[],f=Math.ceil(A);for(let c=0;c<f;c++){let d=R;if(f>A&&c===f-1){const B=(r=d.width)!==null&&r!==void 0?r:"100%",P=A%1,G=typeof B=="number"?B*P:`calc(${B} * ${P})`;d={...d,width:G}}const D=p.createElement("span",{className:S,style:d,key:c},"‌");J?b.push(D):b.push(p.createElement(p.Fragment,{key:c},D,p.createElement("br",null)))}return p.createElement("span",{className:t,"data-testid":h,"aria-live":"polite","aria-busy":(y=u.enableAnimation)!==null&&y!==void 0?y:F},a?b.map((c,d)=>p.createElement(a,{key:d},c)):b)}const ae="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSGEQAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSG/8IAEQgAQgAyAwEiAAIRAQMRAf/EAC4AAAIDAQAAAAAAAAAAAAAAAAADAQIEBQEBAQEBAAAAAAAAAAAAAAAAAQACA//aAAwDAQACEAMQAAAA1Wi1mSqQZF4pRI6ZNbTjVXTnpLcmvXOAKum+XRlfnvz6t24NrmwDmV1muZoXe03UpxBA5XATnWAx0gSAI//EACYQAAICAQMDAwUAAAAAAAAAAAECABEDEBIxBCFBUVJhEyIjMnH/2gAIAQEAAT8ACkzYfSBRXcTapm0+kKmuNFNTcY2RVFmgIOqxE1N/xC16DR6fMqnidSiBRtEwOXxjVeNGcLmDeATMv6t7Ss6M/aw+dRwf5DkBNXHoEzANybTBeLOFTvugN6E/jMcW9VW0UI/YnzFy/TN1cwOcmcufbE4OiG7EzAbGPmqjKQeYMPm5iTbvPrAKAGiFlN2DYhLMPHePje+yGYiwtXNCIylgNRwsycCWY0BM8af/xAAWEQEBAQAAAAAAAAAAAAAAAAABMBH/2gAIAQIBAT8AgGjT/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAEQESBRIf/aAAgBAwEBPwAp8PcOLposfcOFDj//2Q==",oe="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSGEQAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSG/8IAEQgASwAyAwEiAAIRAQMRAf/EAC0AAAIDAQAAAAAAAAAAAAAAAAEDAAIEBQEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAC+OozXaMTEOXpYKpDAGpCySZLs8utcrNMlLiUEvi6mZrGS0V+bbEz7ByzfOU46cxRUPLkGVfROYylh8MP/xAAkEAACAgICAgICAwAAAAAAAAABAgADESESMQQQEyJBYUJSU//aAAgBAQABPwC24IIbd5IgZc5xFIYYMs8dBPiI6M42f2MJJbJmoHA7MVz3AwdSIeQYgzc2PzADjuEZmGUbHUD8NwgWYInxLMGKcEQv+pzJ3iFuQOFil6yAROcY40J3B3uF966lVQUczGcOxHp0IM1CVJxgCUU5PJpfaBoSvs+mUOIPHtJPFSYnh2DbiCvkMBsCNRQG+90Q+Ev7nzeN/lD5NQ/hEuIH1Md245Yyy0sSATPzKu29EEsMT4rEXMRhYmJZSUmZT23rxQCTLyQsRiH0YdpuOMMZT23r/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEgMDH/2gAIAQIBAT8AbMirv//EABYRAAMAAAAAAAAAAAAAAAAAACAiMP/aAAgBAwEBPwAWv//Z",le="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSGEQAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSG/8IAEQgAMgAyAwEiAAIRAQMRAf/EAC4AAAIDAQAAAAAAAAAAAAAAAAAFAQIDBAEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAAA2jo4JerKYDmt5Q5CDToWN0irytNg6RS9C06jRigeolmOvPsHG+ejFCxTdAEXf0AGbh05QBd//8QAJhAAAgIBAgUEAwAAAAAAAAAAAAECEQMSIQQTMlFhEDFygTNBQv/aAAgBAQABPwChpI095ErUjGt5RJx8lFUczn5qXRES2/VjTXstiHvB/RkloV0cyZx06hFEJuE1JESbdEdq8SM81pLl2OJxc3Ht1IZF9O/UOtAm3lcb2oyY040cpefTJ+SfyZjjrwRfgjK4pVVEI3KUu9D3KRZl65/JnDO8JqbctS+jHTQyl6dzgzL/AEYOhev/xAAaEQACAgMAAAAAAAAAAAAAAAABEAAxESEw/9oACAECAQE/AEK4AamEbgpf/8QAGhEBAAIDAQAAAAAAAAAAAAAAARAxABEgIf/aAAgBAwEBPwCG+Hhfc3BWNsf/2Q==",ce="_skeltonHeroWrapper_rc3ke_1",de="_skeltonHeroWrapperBgr_rc3ke_12",pe="_skeltonHeroText_rc3ke_19",he="_skeltonTitle_rc3ke_25",ge="_skeltonWrapper_rc3ke_30",we="_skeltonImage_rc3ke_37",xe="_skeltonGalleryImage_rc3ke_46",ke="_skeltonText_rc3ke_58",me="_skeltonButtonWrapper_rc3ke_62",je="_skeltonButton_rc3ke_62",Ee="_skeltonGalleryWrapper_rc3ke_56",be="_skeltonGalleryPosition_rc3ke_94",ye="_skeltonText2_rc3ke_100",s={skeltonHeroWrapper:ce,skeltonHeroWrapperBgr:de,skeltonHeroText:pe,skeltonTitle:he,skeltonWrapper:ge,skeltonImage:we,skeltonGalleryImage:xe,skeltonText:ke,skeltonButtonWrapper:me,skeltonButton:je,skeltonGalleryWrapper:Ee,skeltonGalleryPosition:be,skeltonText2:ye},ue=()=>e.jsxs("div",{className:s.skeltonHeroWrapper,children:[e.jsx("div",{className:s.skeltonHeroWrapperBgr,children:e.jsx(i,{baseColor:"rgb(205, 210, 214)",height:"100vh",width:"100vw"})}),e.jsxs("div",{className:s.skeltonHeroText,children:[e.jsx(i,{baseColor:"grey",height:"14vw",width:"60vw"}),e.jsx("br",{}),e.jsx(i,{baseColor:"grey",height:"14vw",width:"80vw"}),e.jsx("br",{}),e.jsx(i,{baseColor:"grey",height:"14vw",width:"10vw"}),e.jsx("br",{}),e.jsx(i,{baseColor:"grey",height:"14vw",width:"50vw"})]})]}),$=({previePath:A})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.skeltonTitle,children:e.jsx(i,{baseColor:"grey",height:40,width:200})}),e.jsxs("div",{className:s.skeltonWrapper,children:[e.jsx("div",{className:s.skeltonImage,children:e.jsx("img",{src:A,alt:"preview image"})}),e.jsx("div",{className:s.skeltonText,children:e.jsx(i,{baseColor:"grey",height:16,count:4})}),e.jsx("div",{className:s.skeltonButtonWrapper,children:e.jsx("div",{className:s.skeltonButton,children:e.jsx(i,{baseColor:"grey",height:70,width:500})})})]})]}),fe=({previePath:A})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.skeltonTitle,children:e.jsx(i,{baseColor:"grey",height:40,width:200})}),e.jsxs("div",{className:s.skeltonGalleryWrapper,children:[e.jsx("div",{className:s.skeltonGalleryPosition,children:e.jsx("div",{className:s.skeltonGalleryImage,children:e.jsx("img",{src:A,alt:"preview image"})})}),e.jsx("div",{className:s.skeltonButtonWrapper,children:e.jsx("div",{className:s.skeltonButton,children:e.jsx(i,{baseColor:"grey",height:70,width:500})})})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.skeltonTitle,children:e.jsx(i,{baseColor:"grey",height:40,width:200})}),e.jsxs("div",{className:s.skeltonWrapper,children:[e.jsxs("div",{className:s.skeltonText2,children:[e.jsx("h3",{children:e.jsx(i,{baseColor:"grey",height:40,width:250})}),e.jsx(i,{baseColor:"grey",height:16,count:10})]}),e.jsx("div",{className:s.skeltonButtonWrapper,children:e.jsx("div",{className:s.skeltonButton,children:e.jsx(i,{baseColor:"grey",height:70,width:500})})})]})]}),Be=n.lazy(()=>g(()=>import("./Reviews-DXp6xioS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),Ce=n.lazy(()=>g(()=>import("./ArtistsPreview-FtEN4vdK.js"),__vite__mapDeps([10,1,2,11]))),Qe=n.lazy(()=>g(()=>import("./ContactPreview-ifzRSaWL.js"),__vite__mapDeps([12,1,2,13,8,5,6,14,15]))),ve=n.lazy(()=>g(()=>import("./FAQPreview-PX6yiue7.js"),__vite__mapDeps([16,1,2,3,4,7,17]))),_e=n.lazy(()=>g(()=>import("./GalleryPreview-l-R8_1Mg.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,19]))),Me=n.lazy(()=>g(()=>import("./StudioPreview-dx_00CzY.js"),__vite__mapDeps([20,1,2,3,4,7,21]))),Ie=n.lazy(()=>g(()=>import("./Hero-p53xCeS-.js"),__vite__mapDeps([22,1,2,23]))),Te=()=>e.jsxs("main",{children:[e.jsx(n.Suspense,{fallback:e.jsx(ue,{}),children:e.jsx(Ie,{})}),e.jsx(n.Suspense,{fallback:e.jsx($,{previePath:ae}),children:e.jsxs(M,{title:"O Mnie",color:"beige",children:[e.jsx(Ce,{}),e.jsx(E,{path:"artist",text:"Dowiedz sie więcej"})]})}),e.jsx(n.Suspense,{fallback:e.jsx(fe,{previePath:le}),children:e.jsxs(Q,{title:"Galeria",color:"light-green",children:[e.jsx(_e,{}),e.jsx(E,{path:"gallery",text:"Zobacz pełną galerie"})]})}),e.jsx(n.Suspense,{fallback:e.jsx($,{previePath:oe}),children:e.jsxs(M,{title:"Studio",color:"beige",children:[e.jsx(Me,{}),e.jsx(E,{path:"studio",text:"Studio i lokazlizacja"})]})}),e.jsx(n.Suspense,{fallback:e.jsx(I,{}),children:e.jsxs(M,{title:"Kontakt",color:"beige",children:[e.jsx(Qe,{}),e.jsx(E,{path:"contact",text:"Wypełnij formularz kontaktowy"})]})}),e.jsx(n.Suspense,{fallback:e.jsx(I,{}),children:e.jsxs(Q,{title:"FAQ",color:"deep-green",children:[e.jsx(ve,{}),e.jsx(E,{path:"faq",text:"Przejżyj wszytskie Q & A"})]})}),e.jsx(n.Suspense,{fallback:e.jsx(I,{}),children:e.jsx(Q,{title:"Opinie",color:"light-green",children:e.jsx(Be,{})})})]}),Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));export{De as $,Pe as H,v as c};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Reviews-DXp6xioS.js","assets/index-qRwIQYuj.js","assets/index-Y5VQQpbM.css","assets/pagination-HioZSUEB.js","assets/pagination-zI1bHqUV.css","assets/Toasts-dbxhIJgO.js","assets/Toasts-mIr2F93V.css","assets/pagination-nrHgvG5Q.js","assets/iconBase-w010J016.js","assets/Reviews-DPioO_hQ.css","assets/ArtistsPreview-FtEN4vdK.js","assets/ArtistsPreview-KJSNKbSH.css","assets/ContactPreview-ifzRSaWL.js","assets/styled-components.browser.esm-5AAMuNrI.js","assets/index.esm-zToFDbhu.js","assets/ContactPreview-4lDnqV5w.css","assets/FAQPreview-PX6yiue7.js","assets/FAQPreview-SUYmVCsY.css","assets/GalleryPreview-l-R8_1Mg.js","assets/GalleryPreview-UbBaBRG2.css","assets/StudioPreview-dx_00CzY.js","assets/StudioPreview-Kv4NlEOI.css","assets/Hero-p53xCeS-.js","assets/Hero-yo_ohIe-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
