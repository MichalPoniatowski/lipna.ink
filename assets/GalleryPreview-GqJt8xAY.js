import{r,j as t}from"./index-wDaf91uT.js";import{S as u,P as f,a as w}from"./pagination-_p5IdvvV.js";import{a as h,G as g,t as x}from"./Toasts-npyUh_9k.js";const y="_galleryBgr_dzjof_1",P={galleryBgr:y},j=g;let o=1,E=10,c=!1;const R=()=>{const[d,l]=r.useState([]),n=r.useRef(null),i=async()=>{try{const e=await h.get(j,{params:{page:o,per_page:E}}),s=e.data.images.docs.map(a=>({id:a._id,imageUrl:`${g+a._id}`,alt:a.image_name}));return c=e.data.images.hasNextPage,s}catch(e){return console.log("Error with fetching images from API: ",e.message),x("Bład podczas pobierania galerii. Przełąduj stronę lub spróbuj za chwilę."),[]}};r.useEffect(()=>{i().then(e=>{l(e)})},[]),r.useEffect(()=>{const e=n.current.swiper,s=()=>{e.slides.length-e.activeIndex<3&&m()};if(e)return e.on("slideChange",s),()=>{e.off("slideChange",s)}},[]);const m=async()=>{if(c){o++;const e=await i();l(s=>[...s,...e])}else return console.log("No more results"),null},p=()=>d.map(e=>t.jsx(w,{className:"swiper-slide",children:t.jsx("img",{src:e.imageUrl,alt:e.alt,className:"swiper-slide img"})},e.id));return t.jsx("div",{className:P.galleryBgr,children:t.jsx(u,{slidesPerView:"auto",spaceBetween:20,pagination:{dynamicBullets:!0,clickable:!0},modules:[f],className:"gallery-swiper",ref:n,children:p()})})};export{R as default};
