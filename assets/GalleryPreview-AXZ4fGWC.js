import{r,j as t}from"./index-yIgHh02j.js";import{S as f,P as u,a as w}from"./pagination-cZ2ZkyWT.js";import{a as h,G as g}from"./api.URLs-Dadu8NzS.js";const x="_galleryBgr_dzjof_1",y={galleryBgr:x},I=g;let o=1,P=10,c=!1;const R=()=>{const[m,n]=r.useState([]),l=r.useRef(null),i=async()=>{try{const e=await h.get(I,{params:{page:o,per_page:P}}),s=e.data.images.docs.map(a=>({id:a._id,imageUrl:`${g+a._id}`,alt:a.image_name}));return c=e.data.images.hasNextPage,s}catch(e){return console.log("Error with fetching images from API: ",e.message),[]}};r.useEffect(()=>{i().then(e=>{n(e)})},[]),r.useEffect(()=>{const e=l.current.swiper,s=()=>{e.slides.length-e.activeIndex<3&&d()};if(e)return e.on("slideChange",s),()=>{e.off("slideChange",s)}},[]);const d=async()=>{if(c){o++;const e=await i();n(s=>[...s,...e])}else return console.log("No more results"),null},p=()=>m.map(e=>t.jsx(w,{className:"swiper-slide",children:t.jsx("img",{src:e.imageUrl,alt:e.alt,className:"swiper-slide img"})},e.id));return t.jsx("div",{className:y.galleryBgr,children:t.jsx(f,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0,clickable:!0},modules:[u],className:"gallery-swiper",ref:l,children:p()})})};export{R as default};
