import{r as o,j as e}from"./index-7GBg1-sM.js";const n="_wrapper_n89ve_1",c="_title_n89ve_15",d="_backgroundVideo_n89ve_28",t={wrapper:n,title:c,backgroundVideo:d},i="/lipna.ink/assets/Hero_movie-cvt6Jct-.mp4",p=()=>{const[u,a]=o.useState(!1);return o.useEffect(()=>{const r=document.querySelector(`.${t.backgroundVideo}`),s=()=>{a(!0)};return r.addEventListener("canplaythrough",s),()=>{r.removeEventListener("canplaythrough",s)}},[]),e.jsxs("div",{className:t.wrapper,children:[e.jsxs("h2",{className:t.title,children:["Sztuka",e.jsx("br",{}),"zapisana",e.jsx("br",{}),"na",e.jsx("br",{}),"skórze"]}),e.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:t.backgroundVideo,children:[e.jsx("source",{src:i,type:"video/mp4"}),"Twoja przeglądarka nie obsługujue tego formatu"]})]})};export{p as default};
