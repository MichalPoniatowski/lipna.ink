import{r as s,m as d,j as a}from"./index-b0rU9tEk.js";const u="_overlay_uvno3_1",h="_childrenWrapper_uvno3_15",_="_show_uvno3_24",p="_hide_uvno3_29",e={overlay:u,childrenWrapper:h,show:_,hide:p},v=({portal:l,children:n,open:t})=>{const[c,r]=s.useState(!1),[i,o]=s.useState(!1);return s.useEffect(()=>{t?(o(!0),setTimeout(()=>r(!0),5)):(r(!1),setTimeout(()=>o(!1),500))},[t]),i?d.createPortal(a.jsx("div",{className:`${e.overlay} ${c?e.show:e.hide}`,children:a.jsx("div",{className:e.childrenWrapper,children:n})}),document.getElementById(l)):null};export{v as M};
