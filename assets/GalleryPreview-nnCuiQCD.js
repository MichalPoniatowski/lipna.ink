import{r,u as m,e as a,j as s,f as p}from"./index-Qk3m4cWU.js";import{S as f,a as w}from"./pagination-EZz7TMoT.js";import{P as h}from"./pagination-Wk83ynZ-.js";import{s as x,a as v,e as E,b as j,c as I,d as P}from"./selectors-gallery-r6DFbkZd.js";const b=()=>{const t=r.useRef(null),o=m(),c=a(x),d=a(v);a(E);const n=a(j),u=a(I),i=async()=>{if(n&&!d)o(p(u+1));else return console.log("No more results"),null};r.useEffect(()=>{const e=l=>{};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),r.useEffect(()=>{const e=t.current.swiper,l=()=>{e.slides.length-e.activeIndex<3&&n&&i()};if(e)return e.on("slideChange",l),()=>{e.off("slideChange",l)}},[t,i]);const g=()=>c.map(e=>s.jsx(w,{className:"swiper-slide",children:s.jsx("img",{src:e.imageUrl,alt:e.alt,className:"swiper-slide img",loading:"lazy"})},e.id));return s.jsx("div",{className:P.galleryBgr,children:s.jsx(r.Suspense,{fallback:s.jsx("div",{children:"LOADING"}),children:s.jsx(f,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0,clickable:!0},modules:[h],lazy:"true",className:"gallery-swiper",ref:t,children:g()})})})};export{b as default};