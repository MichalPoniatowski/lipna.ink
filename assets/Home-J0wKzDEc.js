import{j as A,L as G,b as p,r,_ as d}from"./index-QI__P1a7.js";import{c as W}from"./styled-components.browser.esm-51dUZxvv.js";import{c as y}from"./Loader.module-nKKkJS5m.js";import"./iconBase-ZKDIgU5E.js";const O="_wrapper_s2kud_1",z="_title_s2kud_8",H="_wrapperContent_s2kud_20",_={wrapper:O,title:z,wrapperContent:H},b=({children:s,title:o,color:l})=>{const a={backgroundColor:`var(--${l})`};return A.jsxs("div",{className:_.wrapper,children:[A.jsx("h2",{className:_.title,children:o}),A.jsx("div",{className:_.wrapperContent,style:a,children:s})]})},B=({path:s,text:o})=>A.jsx("div",{className:y.buttonWrapper,children:A.jsx(G,{to:`/${s}`,children:A.jsxs("button",{className:y.button,children:[`${o} `,A.jsx(W,{size:"1rem",className:y.buttonArrow})]})})}),L="_wrapper_rc7fn_1",X="_title_rc7fn_5",Y="_wrapperContent_rc7fn_17",u={wrapper:L,title:X,wrapperContent:Y},v=({children:s,title:o,color:l})=>{const a={backgroundColor:`var(--${l})`};return A.jsxs("div",{className:u.wrapper,children:[A.jsx("h2",{className:u.title,children:o}),A.jsx("div",{className:u.wrapperContent,style:a,children:s})]})},V=p.createContext({}),S=!0;function U({baseColor:s,highlightColor:o,width:l,height:a,borderRadius:w,circle:Q,direction:h,duration:g,enableAnimation:E=S}){const t={};return h==="rtl"&&(t["--animation-direction"]="reverse"),typeof g=="number"&&(t["--animation-duration"]=`${g}s`),E||(t["--pseudo-element-display"]="none"),(typeof l=="string"||typeof l=="number")&&(t.width=l),(typeof a=="string"||typeof a=="number")&&(t.height=a),(typeof w=="string"||typeof w=="number")&&(t.borderRadius=w),Q&&(t.borderRadius="50%"),typeof s<"u"&&(t["--base-color"]=s),typeof o<"u"&&(t["--highlight-color"]=o),t}function n({count:s=1,wrapper:o,className:l,containerClassName:a,containerTestId:w,circle:Q=!1,style:h,...g}){var E,t,k;const P=p.useContext(V),I={...g};for(const[i,c]of Object.entries(g))typeof c>"u"&&delete I[i];const C={...P,...I,circle:Q},F={...h,...U(C)};let f="react-loading-skeleton";l&&(f+=` ${l}`);const R=(E=C.inline)!==null&&E!==void 0?E:!1,x=[],m=Math.ceil(s);for(let i=0;i<m;i++){let c=F;if(m>s&&i===m-1){const j=(t=c.width)!==null&&t!==void 0?t:"100%",N=s%1,J=typeof j=="number"?j*N:`calc(${j} * ${N})`;c={...c,width:J}}const D=p.createElement("span",{className:f,style:c,key:i},"‌");R?x.push(D):x.push(p.createElement(p.Fragment,{key:i},D,p.createElement("br",null)))}return p.createElement("span",{className:a,"data-testid":w,"aria-live":"polite","aria-busy":(k=C.enableAnimation)!==null&&k!==void 0?k:S},o?x.map((i,c)=>p.createElement(o,{key:c},i)):x)}const Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSGEQAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSG/8IAEQgAQgAyAwEiAAIRAQMRAf/EAC4AAAIDAQAAAAAAAAAAAAAAAAADAQIEBQEBAQEBAAAAAAAAAAAAAAAAAQACA//aAAwDAQACEAMQAAAA1Wi1mSqQZF4pRI6ZNbTjVXTnpLcmvXOAKum+XRlfnvz6t24NrmwDmV1muZoXe03UpxBA5XATnWAx0gSAI//EACYQAAICAQMDAwUAAAAAAAAAAAECABEDEBIxBCFBUVJhEyIjMnH/2gAIAQEAAT8ACkzYfSBRXcTapm0+kKmuNFNTcY2RVFmgIOqxE1N/xC16DR6fMqnidSiBRtEwOXxjVeNGcLmDeATMv6t7Ss6M/aw+dRwf5DkBNXHoEzANybTBeLOFTvugN6E/jMcW9VW0UI/YnzFy/TN1cwOcmcufbE4OiG7EzAbGPmqjKQeYMPm5iTbvPrAKAGiFlN2DYhLMPHePje+yGYiwtXNCIylgNRwsycCWY0BM8af/xAAWEQEBAQAAAAAAAAAAAAAAAAABMBH/2gAIAQIBAT8AgGjT/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAEQESBRIf/aAAgBAwEBPwAp8PcOLposfcOFDj//2Q==",K="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSGEQAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSG/8IAEQgASwAyAwEiAAIRAQMRAf/EAC0AAAIDAQAAAAAAAAAAAAAAAAEDAAIEBQEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAC+OozXaMTEOXpYKpDAGpCySZLs8utcrNMlLiUEvi6mZrGS0V+bbEz7ByzfOU46cxRUPLkGVfROYylh8MP/xAAkEAACAgICAgICAwAAAAAAAAABAgADESESMQQQEyJBYUJSU//aAAgBAQABPwC24IIbd5IgZc5xFIYYMs8dBPiI6M42f2MJJbJmoHA7MVz3AwdSIeQYgzc2PzADjuEZmGUbHUD8NwgWYInxLMGKcEQv+pzJ3iFuQOFil6yAROcY40J3B3uF966lVQUczGcOxHp0IM1CVJxgCUU5PJpfaBoSvs+mUOIPHtJPFSYnh2DbiCvkMBsCNRQG+90Q+Ev7nzeN/lD5NQ/hEuIH1Md245Yyy0sSATPzKu29EEsMT4rEXMRhYmJZSUmZT23rxQCTLyQsRiH0YdpuOMMZT23r/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEgMDH/2gAIAQIBAT8AbMirv//EABYRAAMAAAAAAAAAAAAAAAAAACAiMP/aAAgBAwEBPwAWv//Z",$="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSGEQAsACwALAAsAC8ALAAyADcANwAyAEUASwBCAEsARQBmAF4AVgBWAF4AZgCbAG8AdwBvAHcAbwCbAOsAkwCsAJMAkwCsAJMA6wDQAPwAzQC/AM0A/ADQAXYBJgEEAQQBJgF2AbABawFXAWsBsAIMAdQB1AIMApMCcgKTA10DXQSG/8IAEQgAMgAyAwEiAAIRAQMRAf/EAC4AAAIDAQAAAAAAAAAAAAAAAAAFAQIDBAEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAAA2jo4JerKYDmt5Q5CDToWN0irytNg6RS9C06jRigeolmOvPsHG+ejFCxTdAEXf0AGbh05QBd//8QAJhAAAgIBAgUEAwAAAAAAAAAAAAECEQMSIQQTMlFhEDFygTNBQv/aAAgBAQABPwChpI095ErUjGt5RJx8lFUczn5qXRES2/VjTXstiHvB/RkloV0cyZx06hFEJuE1JESbdEdq8SM81pLl2OJxc3Ht1IZF9O/UOtAm3lcb2oyY040cpefTJ+SfyZjjrwRfgjK4pVVEI3KUu9D3KRZl65/JnDO8JqbctS+jHTQyl6dzgzL/AEYOhev/xAAaEQACAgMAAAAAAAAAAAAAAAABEAAxESEw/9oACAECAQE/AEK4AamEbgpf/8QAGhEBAAIDAQAAAAAAAAAAAAAAARAxABEgIf/aAAgBAwEBPwCG+Hhfc3BWNsf/2Q==",q="_skeltonHeroWrapper_rc3ke_1",AA="_skeltonHeroWrapperBgr_rc3ke_12",eA="_skeltonHeroText_rc3ke_19",sA="_skeltonTitle_rc3ke_25",tA="_skeltonWrapper_rc3ke_30",rA="_skeltonImage_rc3ke_37",nA="_skeltonGalleryImage_rc3ke_46",oA="_skeltonText_rc3ke_58",lA="_skeltonButtonWrapper_rc3ke_62",aA="_skeltonButton_rc3ke_62",iA="_skeltonGalleryWrapper_rc3ke_56",cA="_skeltonGalleryPosition_rc3ke_94",pA="_skeltonText2_rc3ke_100",e={skeltonHeroWrapper:q,skeltonHeroWrapperBgr:AA,skeltonHeroText:eA,skeltonTitle:sA,skeltonWrapper:tA,skeltonImage:rA,skeltonGalleryImage:nA,skeltonText:oA,skeltonButtonWrapper:lA,skeltonButton:aA,skeltonGalleryWrapper:iA,skeltonGalleryPosition:cA,skeltonText2:pA},dA=()=>A.jsxs("div",{className:e.skeltonHeroWrapper,children:[A.jsx("div",{className:e.skeltonHeroWrapperBgr,children:A.jsx(n,{baseColor:"rgb(205, 210, 214)",height:"100vh",width:"100vw"})}),A.jsxs("div",{className:e.skeltonHeroText,children:[A.jsx(n,{baseColor:"grey",height:"14vw",width:"60vw"}),A.jsx("br",{}),A.jsx(n,{baseColor:"grey",height:"14vw",width:"80vw"}),A.jsx("br",{}),A.jsx(n,{baseColor:"grey",height:"14vw",width:"10vw"}),A.jsx("br",{}),A.jsx(n,{baseColor:"grey",height:"14vw",width:"50vw"})]})]}),T=({previePath:s})=>A.jsxs(A.Fragment,{children:[A.jsx("div",{className:e.skeltonTitle,children:A.jsx(n,{baseColor:"grey",height:40,width:200})}),A.jsxs("div",{className:e.skeltonWrapper,children:[A.jsx("div",{className:e.skeltonImage,children:A.jsx("img",{src:s,alt:"preview image"})}),A.jsx("div",{className:e.skeltonText,children:A.jsx(n,{baseColor:"grey",height:16,count:4})}),A.jsx("div",{className:e.skeltonButtonWrapper,children:A.jsx("div",{className:e.skeltonButton,children:A.jsx(n,{baseColor:"grey",height:70,width:500})})})]})]}),wA=({previePath:s})=>A.jsxs(A.Fragment,{children:[A.jsx("div",{className:e.skeltonTitle,children:A.jsx(n,{baseColor:"grey",height:40,width:200})}),A.jsxs("div",{className:e.skeltonGalleryWrapper,children:[A.jsx("div",{className:e.skeltonGalleryPosition,children:A.jsx("div",{className:e.skeltonGalleryImage,children:A.jsx("img",{src:s,alt:"preview image"})})}),A.jsx("div",{className:e.skeltonButtonWrapper,children:A.jsx("div",{className:e.skeltonButton,children:A.jsx(n,{baseColor:"grey",height:70,width:500})})})]})]}),M=()=>A.jsxs(A.Fragment,{children:[A.jsx("div",{className:e.skeltonTitle,children:A.jsx(n,{baseColor:"grey",height:40,width:200})}),A.jsxs("div",{className:e.skeltonWrapper,children:[A.jsxs("div",{className:e.skeltonText2,children:[A.jsx("h3",{children:A.jsx(n,{baseColor:"grey",height:40,width:250})}),A.jsx(n,{baseColor:"grey",height:16,count:10})]}),A.jsx("div",{className:e.skeltonButtonWrapper,children:A.jsx("div",{className:e.skeltonButton,children:A.jsx(n,{baseColor:"grey",height:70,width:500})})})]})]}),gA=r.lazy(()=>d(()=>import("./Reviews-rfu63dm5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),EA=r.lazy(()=>d(()=>import("./ArtistsPreview-jSfkwadE.js"),__vite__mapDeps([8,1,2,9]))),xA=r.lazy(()=>d(()=>import("./ContactPreview-T1G0kRQo.js"),__vite__mapDeps([10,1,2,11,5,12,13,14]))),BA=r.lazy(()=>d(()=>import("./FAQPreview-zaogZo6R.js"),__vite__mapDeps([15,1,2,3,4,6,16,17,18]))),QA=r.lazy(()=>d(()=>import("./GalleryPreview-U1w1ji_2.js"),__vite__mapDeps([19,1,2,3,4,6,20,21,22]))),hA=r.lazy(()=>d(()=>import("./StudioPreview-G-AoFwxJ.js"),__vite__mapDeps([23,1,2,24,25,3,4,6,26]))),kA=r.lazy(()=>d(()=>import("./Hero-BSZYf3ni.js"),__vite__mapDeps([27,1,2,28]))),_A=()=>A.jsxs("main",{children:[A.jsx(r.Suspense,{fallback:A.jsx(dA,{}),children:A.jsx(kA,{})}),A.jsx(r.Suspense,{fallback:A.jsx(T,{previePath:Z}),children:A.jsxs(v,{title:"O Mnie",color:"beige",children:[A.jsx(EA,{}),A.jsx(B,{path:"artist",text:"Dowiedz sie więcej"})]})}),A.jsx(r.Suspense,{fallback:A.jsx(wA,{previePath:$}),children:A.jsxs(b,{title:"Galeria",color:"light-green",children:[A.jsx(QA,{}),A.jsx(B,{path:"gallery",text:"Zobacz pełną galerie"})]})}),A.jsx(r.Suspense,{fallback:A.jsx(T,{previePath:K}),children:A.jsxs(v,{title:"Studio",color:"beige",children:[A.jsx(hA,{}),A.jsx(B,{path:"studio",text:"Studio i lokazlizacja"})]})}),A.jsx(r.Suspense,{fallback:A.jsx(M,{}),children:A.jsx(v,{title:"Kontakt",color:"beige",children:A.jsx(xA,{})})}),A.jsx(r.Suspense,{fallback:A.jsx(M,{}),children:A.jsxs(b,{title:"FAQ",color:"middle-green",children:[A.jsx(BA,{}),A.jsx(B,{path:"faq",text:"Przejżyj wszytskie Q & A"})]})}),A.jsx(r.Suspense,{fallback:A.jsx(M,{}),children:A.jsx(b,{title:"Opinie",color:"light-green",children:A.jsx(gA,{})})})]});export{_A as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Reviews-rfu63dm5.js","assets/index-QI__P1a7.js","assets/index-Xb-5qz1D.css","assets/pagination-xTcjG_jA.js","assets/pagination-zI1bHqUV.css","assets/iconBase-ZKDIgU5E.js","assets/pagination-bGI0N_zF.js","assets/Reviews-k4SYMELU.css","assets/ArtistsPreview-jSfkwadE.js","assets/ArtistsPreview-0A84E6Pg.css","assets/ContactPreview-T1G0kRQo.js","assets/styled-components.browser.esm-51dUZxvv.js","assets/Icons.module-lmEn_exg.js","assets/Icons-57hI0VYO.css","assets/ContactPreview-w_PZ2NR-.css","assets/FAQPreview-zaogZo6R.js","assets/FAQ.module-yDncJmeQ.js","assets/FAQ-16VxfJ5c.css","assets/FAQPreview-qnwfElij.css","assets/GalleryPreview-U1w1ji_2.js","assets/selectors-gallery-r6DFbkZd.js","assets/selectors-gallery-wXoTnYbN.css","assets/GalleryPreview-rjX839Ve.css","assets/StudioPreview-G-AoFwxJ.js","assets/StudioImages-sgGSSvrg.js","assets/StudioImages-ApqNiN9Y.css","assets/StudioPreview-qhtmp-2b.css","assets/Hero-BSZYf3ni.js","assets/Hero-HCMS4x4r.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}