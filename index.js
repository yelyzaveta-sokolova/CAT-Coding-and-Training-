import{A as g,S as y,N as T,K as R,i as p,a as A}from"./assets/vendor-BoIuhpoi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const E of s.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&m(E)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const w=document.querySelector(".btn-scroll-top");window.addEventListener("scroll",()=>{window.scrollY>300?w.classList.remove("is-btnshow-hide"):w.classList.add("is-btnshow-hide")});w.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})};const h=new g(".about-me-accord-list",{duration:350,elementClass:"about-me-accord-item",triggerClass:"about-me-accord-trigger",panelClass:"about-me-accord-panel",showMultiple:!0,onOpen:b,onClose:N});h.open(0);setTimeout(()=>{h.attachEvents()},1e3);function b(e){const t=e.getBoundingClientRect(),o=Math.max(document.documentElement.clientHeight,window.innerHeight);t.bottom>o&&window.scrollTo({top:t.top+window.scrollY-(o-t.height)/2,behavior:"smooth"})}function N(e){}const l=new y(".skills-me-swiper",{modules:[T,R],navigation:{nextEl:".swiper-button-wrap .skills-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0,speed:400}),I=document.querySelector(".swiper-button-wrap .skills-swiper-btn");I.addEventListener("click",()=>{window.innerWidth>=1440&&(l.slides[l.activeIndex].parentNode.appendChild(l.slides[l.activeIndex]),l.update())});const C=document.querySelector(".prj-n"),P=document.querySelector(".prj-p");function M(){try{const e=new y(".prj-swiper",{slidesPerView:1,spaceBetween:30,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:C,prevEl:P},speed:900})}catch(e){console.log(e)}}M();document.addEventListener("DOMContentLoaded",function(){new g(".faq-accordion-container",{duration:600,showMultiple:!0,triggerClass:"faq-ac-trigger",elementClass:"faq-ac",panelClass:"faq-ac-panel",activeClass:"faq-is-active"})});const q=document.querySelector(".js-observered"),D={root:null,rootMargin:"0px 0px 0px 0px",threshold:.5},V=e=>{if(e[0].isIntersecting){const t=document.getElementsByClassName("marquee-line");Array.from(t).forEach(o=>o.style.animationName="marqueeLine")}else{const t=document.getElementsByClassName("marquee-line");Array.from(t).forEach(o=>o.style.animationName="none")}},U=new IntersectionObserver(V,D);U.observe(q);const f=document.querySelector(".js-review-cards"),B=document.querySelector(".rev-n"),j=document.querySelector(".rev-p"),x="https://portfolio-js.b.goit.study/api",F=async()=>{const e={method:"GET"};try{const t=await fetch(`${x}/reviews`,e);if(!t.ok)throw new Error(t.status);return await t.json()}catch(t){return t}};F().then(e=>{H(e),K()}).catch(e=>{p.error({title:"Error",message:"Sorry, something went wrong with reviews.",position:"center"}),k()});function H(e){f.innerHTML="";const t=e.map(({author:o,avatar_url:m,review:r})=>`<li class="review-posts swiper-slide">
            <img class="review-avatar" src="${m}" alt="Avatar of ${o}">
            <h2 class="review-author">${o}</h2>
            <p class="review-post-body">${r}</p>
        </li>`).join("");f.insertAdjacentHTML("beforeend",t)}function k(){const e=document.querySelector(".error");e&&e.remove(),f.insertAdjacentHTML("beforebegin",'<p class="review-error">Not Found</p>')}function K(){try{const e=new y(".swiper",{direction:"horizontal",autoHeight:!1,observer:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:B,prevEl:j},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}catch{p.error({title:"Error",message:"Sorry, something went wrong with reviews.",position:"center"})}}const W=document.querySelector("footer"),d=document.querySelector(".modal-window"),a=document.querySelector(".modal-overlay"),O=document.querySelector(".close-modal-btn"),v=document.querySelector(".js-footer-form"),G=document.querySelector(".modal-heading"),z=document.querySelector(".modal-text"),$=(e,t)=>{G.textContent=e,z.textContent=t,d.style.display="block",a.style.display="block",d.classList.add("show"),a.classList.add("show")};O.onclick=function(){L()};window.onclick=function(e){e.target==a&&(L(),v.reset())};window.addEventListener("keydown",e=>{e.key==="Escape"&&L()});O.addEventListener("click",()=>{v.reset()});const L=()=>{d.classList.remove("show"),a.classList.remove("show"),d.style.display="none",a.style.display="none"},X=()=>{W.getBoundingClientRect().top<window.innerHeight&&(d.style.display="none",a.style.display="none")};window.addEventListener("scroll",X);const u=document.querySelector(".js-footer-form"),n=document.querySelector(".js-footer-form-input"),J=document.querySelector(".js-comment"),i=document.querySelector(".js-message");let c={email:"",comment:""};const S=(e,t,o)=>{n.classList.remove("error","success"),n.classList.add(t),i.textContent=e,i.classList.remove("error","success"),i.classList.add(o),i.classList.remove("is-hidden")},_=()=>{n.value.trim()===""?(n.classList.remove("error","success"),i.textContent="",i.classList.add("is-hidden")):n.checkValidity()?S("Success!","success","success"):S("Invalid email, try again!","error","error")};n.addEventListener("input",_);const Y=()=>{c=JSON.parse(localStorage.getItem("comment-form")||"{}"),Object.keys(c).forEach(t=>{u.elements[t]&&(u.elements[t].value=c[t])}),_()};Y();const Q=e=>{const{name:t,value:o}=e.target;c[t]=o.trim(),localStorage.setItem("comment-form",JSON.stringify(c))};u.addEventListener("input",Q);const Z=async e=>{if(e.preventDefault(),n.value.trim()===""||J.value.trim()===""){p.error({title:"Error:",message:"Please fill in the input fields"});return}const t="https://portfolio-js.b.goit.study/api/requests/";try{const o=await A.post(t,{email:c.email,comment:c.comment});console.log(o),u.reset(),localStorage.removeItem("comment-form"),$(o.data.title,o.data.message),n.classList.remove("error","success"),i.classList.add("is-hidden")}catch{p.error({title:"Error:",message:"Error sending request. Try again."})}};u.addEventListener("submit",Z);
//# sourceMappingURL=index.js.map
