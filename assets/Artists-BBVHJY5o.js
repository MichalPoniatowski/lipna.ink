import{j as t}from"./index-qRwIQYuj.js";import{G}from"./iconBase-w010J016.js";import{l}from"./leafLogo-GRlULLhS.js";import{g as S,S as J,a as U}from"./pagination-HioZSUEB.js";function q(f){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"}}]})(f)}const Q="_wrapper_ykn8w_1",Z="_wrapperContent_ykn8w_7",K="_headContainer_ykn8w_12",X="_titleMain_ykn8w_22",Y="_title_ykn8w_22",$="_photo_ykn8w_44",ee="_photo2_ykn8w_67",te="_containerHorizontal_ykn8w_78",ae="_containerVertical_ykn8w_93",se="_text_ykn8w_113",ie="_titleSecound_ykn8w_122",ne="_textList_ykn8w_127",re="_containerVertical2_ykn8w_152",oe="_carousel_ykn8w_161",s={wrapper:Q,wrapperContent:Z,headContainer:K,titleMain:X,title:Y,photo:$,photo2:ee,containerHorizontal:te,containerVertical:ae,text:se,titleSecound:ie,textList:ne,containerVertical2:re,carousel:oe},le="/assets/jagoda-profile2-fWrxy24_.jpg",ce="/assets/moon_women-CebuLRUu.jpg",ue="/assets/panda-GHeu2OH_.jpg",pe="/assets/otter-z6x4Q_cw.JPG",de="/assets/aura1-HhcOEUG0.jpg",me="/assets/aura2-f61BZcon.jpg",ye="/assets/aura3-oN2xtLzP.jpg",fe="/assets/aura4-OgDrMDOI.jpg",ge="/assets/aura5-Da01fidu.jpg",F="/assets/holidays1-54_gfLR6.jpg",he="/assets/painting1-UwJBgO6H.jpg";function je(f){let{swiper:e,extendParams:g,on:c,emit:r,params:d}=f;e.autoplay={running:!1,paused:!1,timeLeft:0},g({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let h,k,N=d&&d.autoplay?d.autoplay.delay:3e3,_=d&&d.autoplay?d.autoplay.delay:3e3,n,j=new Date().getTime(),T,v,m,M,L,u,E;function b(a){!e||e.destroyed||!e.wrapperEl||a.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",b),!E&&p())}const D=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&(_=n,T=!1);const a=e.autoplay.paused?n:j+_-new Date().getTime();e.autoplay.timeLeft=a,r("autoplayTimeLeft",a,a/N),k=requestAnimationFrame(()=>{D()})},H=()=>{let a;return e.virtual&&e.params.virtual.enabled?a=e.slides.filter(i=>i.classList.contains("swiper-slide-active"))[0]:a=e.slides[e.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},z=a=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(k),D();let o=typeof a>"u"?e.params.autoplay.delay:a;N=e.params.autoplay.delay,_=e.params.autoplay.delay;const i=H();!Number.isNaN(i)&&i>0&&typeof a>"u"&&(o=i,N=i,_=i),n=o;const x=e.params.speed,A=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(x,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,x,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(x,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,x,!0,!0),r("autoplay")),e.params.cssMode&&(j=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return o>0?(clearTimeout(h),h=setTimeout(()=>{A()},o)):requestAnimationFrame(()=>{A()}),o},O=()=>{j=new Date().getTime(),e.autoplay.running=!0,z(),r("autoplayStart")},w=()=>{e.autoplay.running=!1,clearTimeout(h),cancelAnimationFrame(k),r("autoplayStop")},y=(a,o)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(h),a||(u=!0);const i=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",b):p()};if(e.autoplay.paused=!0,o){L&&(n=e.params.autoplay.delay),L=!1,i();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-j),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),i())},p=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(j=new Date().getTime(),u?(u=!1,z(n)):z(),e.autoplay.paused=!1,r("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const a=S();a.visibilityState==="hidden"&&(u=!0,y(!0)),a.visibilityState==="visible"&&p()},P=a=>{a.pointerType==="mouse"&&(u=!0,E=!0,!(e.animating||e.autoplay.paused)&&y(!0))},I=a=>{a.pointerType==="mouse"&&(E=!1,e.autoplay.paused&&p())},V=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",P),e.el.addEventListener("pointerleave",I))},B=()=>{e.el.removeEventListener("pointerenter",P),e.el.removeEventListener("pointerleave",I)},R=()=>{S().addEventListener("visibilitychange",C)},W=()=>{S().removeEventListener("visibilitychange",C)};c("init",()=>{e.params.autoplay.enabled&&(V(),R(),O())}),c("destroy",()=>{B(),W(),e.autoplay.running&&w()}),c("_freeModeStaticRelease",()=>{(m||u)&&p()}),c("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?w():y(!0,!0)}),c("beforeTransitionStart",(a,o,i)=>{e.destroyed||!e.autoplay.running||(i||!e.params.autoplay.disableOnInteraction?y(!0,!0):w())}),c("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){w();return}v=!0,m=!1,u=!1,M=setTimeout(()=>{u=!0,m=!0,y(!0)},200)}}),c("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(M),clearTimeout(h),e.params.autoplay.disableOnInteraction){m=!1,v=!1;return}m&&e.params.cssMode&&p(),m=!1,v=!1}}),c("slideChange",()=>{e.destroyed||!e.autoplay.running||(L=!0)}),Object.assign(e.autoplay,{start:O,stop:w,pause:y,resume:p})}const we=({photos:f})=>{const e=()=>f.map(g=>t.jsx(U,{className:"swiper-slide",children:t.jsx("img",{src:g.src,alt:g.alt,className:"swiper-slide img",loading:"lazy"})},g.alt));return t.jsx("div",{children:t.jsx(J,{slidesPerView:"auto",spaceBetween:20,lazy:"true",className:"artist-swiper",autoplay:{delay:2500,disableOnInteraction:!1},modules:[je],children:e()})})},xe=[{src:de,alt:"aura_1"},{src:me,alt:"aura_2"},{src:ye,alt:"aura_3"},{src:fe,alt:"aura_4"},{src:ge,alt:"aura_5"},{src:F,alt:"holidays1"},{src:F,alt:"holidays2"},{src:he,alt:"painting1"}],Ne=()=>t.jsx("div",{className:s.wrapper,children:t.jsxs("div",{className:s.wrapperContent,children:[t.jsx("h2",{className:s.titleMain,children:"O mnie"}),t.jsxs("div",{className:s.headContainer,children:[t.jsx("div",{className:s.photo2,children:t.jsx("img",{src:le,alt:"Jagoda profile photo"})}),t.jsx("div",{className:s.photo,children:t.jsx("img",{src:ce,alt:"Moon women graphic"})})]}),t.jsxs("div",{className:s.containerHorizontal,children:[t.jsx("p",{className:s.text,children:"Cześć! Mam na imię Jagoda i jestem tatuatorką z pięcioletnim doświadczeniem. Prowadzę swoje studio we Wrocławiu o wdzięcznej nazwie „Lipna tattoo studio”"}),t.jsx("p",{className:s.text,children:"Czemu Lipna? Trochę zaczepnie, trochę z przekory. Jeśli chodzi o tatuaże jestem raczej perfekcjonistką. W moim poprzednim studiu zwykło się mówić, że kiedy w studiu jest lipna, to ”nie ma lipy” ;-). Mój styl charakteryzuje się precyzyjnym lineartem i cieniowaniem. Nazywam go ilustracyjnym, graficznym."})]}),t.jsxs("div",{className:s.containerVertical,children:[t.jsxs("div",{children:[t.jsx("h3",{className:s.titleSecound,children:"Tatuuję:"}),t.jsxs("ul",{className:s.textList,children:[t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Freehand"]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Indywidualne projekty"]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Uwielbiam kobiece graficzne portrety"," "]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Fauna i flora"]})]})]}),t.jsx("div",{className:s.photo,children:t.jsx("img",{src:pe,alt:"otter graphic"})}),t.jsx("div",{className:s.photo,children:t.jsx("img",{src:ue,alt:"panda graphic"})}),t.jsxs("div",{children:[t.jsx("h3",{className:s.titleSecound,children:"Nie tatuuję:"}),t.jsxs("ul",{className:s.textList,children:[t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Palców"]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Dłoni"]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Warg"]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Męskich miejsc intymnych"]}),t.jsxs("li",{children:[t.jsx("img",{src:l,alt:"logo lipna.ink"}),"Nie kopiuje czyichś wzorów"]})]})]})]}),t.jsxs("div",{className:s.containerHorizontal,children:[t.jsxs("p",{className:s.text,children:["W wolnym czasie jestem typową psią matką ",t.jsx(q,{}),", chodzę na długie spacery z moją psią córką, ćwiczę jogę, maluje obrazy, czytam książki i podróżuje"]}),t.jsx("div",{className:s.carousel,children:t.jsx(we,{photos:xe})})]})]})});export{Ne as default};
