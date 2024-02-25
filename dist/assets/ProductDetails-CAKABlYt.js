import{g as L,r as j,b as C,c as P,u as S,d as b,j as e,S as w,C as g,R as h,a as p,m as z,N as _,O as E,e as O,B as R}from"./index-D6uHHCIV.js";import{H as k}from"./HeroSection-CjQapwhP.js";import{E as D,S as I,P as F}from"./ErrorMessage-CnPStq0p.js";const $="_info_18geu_1",A="_title_18geu_1",M="_rating_18geu_5",U="_priceCategory_18geu_16",B="_price_18geu_16",H="_category_18geu_25",T="_desc_18geu_28",W="_description_18geu_31",Y="_btn_18geu_34",q="_links_18geu_40",G="_active_18geu_46",J="_recommended_18geu_50",K="_icon_18geu_54",r={info:$,title:A,rating:M,priceCategory:U,price:B,category:H,desc:T,description:W,btn:Y,links:q,active:G,recommended:J,icon:K};var Q=j;function V(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var u=V(Q),X=Object.assign||function(t){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Z=function(t,c){var i={};for(var s in t)c.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s]);return i},f=function(c){var i=c.color,s=i===void 0?"currentColor":i,o=c.size,a=o===void 0?24:o;c.children;var l=Z(c,["color","size","children"]),d="remixicon-icon "+(l.className||"");return u.default.createElement("svg",X({},l,{className:d,width:a,height:a,fill:s,viewBox:"0 0 24 24"}),u.default.createElement("path",{d:"M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"}))},ee=u.default.memo?u.default.memo(f):f,se=ee;const te=L(se);function ne(){var x;const{id:t}=C(),c=P(),{products:i,currentProduct:s,isLoading:o,error:a}=S(n=>n.product);if(j.useEffect(function(){c(b(t))},[t]),o)return e.jsx(w,{});if(a)return e.jsx(D,{children:a});const l=i.filter(n=>n.category===s.category),d=Math.floor(s==null?void 0:s.avgRating),v=Array.from({length:d||0},(n,m)=>e.jsx(I,{className:r.icon,size:20},m)),N=Array.from({length:5-d||0},(n,m)=>e.jsx(te,{className:r.icon,size:20},m));function y(){c(O({id:s.id,productName:s.productName,price:s.price,imgUrl:s.imgUrl})),R.success("Product added to cart")}return e.jsxs("div",{children:[e.jsx(k,{title:s.productName}),e.jsx("section",{children:e.jsx(g,{children:e.jsxs(h,{children:[e.jsx(p,{lg:"6",md:"6",className:"mb-5",children:e.jsx("div",{children:e.jsx("img",{src:s.imgUrl})})}),e.jsx(p,{children:e.jsxs("div",{className:r.info,children:[e.jsx("h1",{className:r.title,children:s.productName}),e.jsxs("div",{className:r.rating,children:[e.jsxs("span",{children:[v,N]}),e.jsxs("p",{children:["(",s.avgRating," rating)"]})]}),e.jsxs("div",{className:r.priceCategory,children:[e.jsxs("span",{className:r.price,children:["$",s.price]}),e.jsxs("span",{className:r.category,children:["Category: ",s.category]})]}),e.jsx("div",{className:r.desc,children:e.jsx("p",{className:r.description,children:s.shortDesc})}),e.jsx(z.button,{whileTap:{scale:1.2},className:r.btn,onClick:y,children:"Add to Cart"})]})})]})})}),e.jsx("section",{children:e.jsx(g,{children:e.jsxs(h,{children:[e.jsxs("div",{className:r.links,children:[e.jsx(_,{to:"description",className:({isActive:n})=>n?r.active:"",children:"Description"}),e.jsxs(_,{to:"reviews",className:({isActive:n})=>n?r.active:"",children:["Reviews (",(x=s==null?void 0:s.reviews)==null?void 0:x.length,")"]})]}),e.jsx(E,{})]})})}),e.jsx("section",{className:r.recommended,children:e.jsx(g,{children:e.jsxs(h,{children:[e.jsx(p,{lg:"12",className:"text-center",children:e.jsx("h2",{className:"section_title",children:"You might also Like"})}),e.jsx(F,{products:l})]})})})]})}export{ne as default};
