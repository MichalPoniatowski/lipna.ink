import{r as s,m as p,j as o}from"./index-BtNw_cuC.js";const d="_overlay_yp0pq_1",h="_childrenWrapper_yp0pq_15",u="_show_yp0pq_24",_="_hide_yp0pq_29",e={overlay:d,childrenWrapper:h,show:u,hide:_},y=({portal:l,children:c,open:t})=>{const[i,r]=s.useState(!1),[n,a]=s.useState(!1);return s.useEffect(()=>{t?(a(!0),setTimeout(()=>r(!0),5)):(r(!1),setTimeout(()=>a(!1),500))},[t]),n?p.createPortal(o.jsx("div",{className:`${e.overlay} ${i?e.show:e.hide}`,children:o.jsx("div",{className:e.childrenWrapper,children:c})}),document.getElementById(l)):null};export{y as M};
