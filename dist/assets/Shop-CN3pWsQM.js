import{g as N,r as i,u as L,j as e,S,C as p,R as j,a as f}from"./index-D6uHHCIV.js";import{H as _}from"./HeroSection-CjQapwhP.js";import{E as y,P}from"./ErrorMessage-CnPStq0p.js";const b="_searchBox_qwpbh_1",R="_iconContainer_qwpbh_19",F="_filter_qwpbh_23",z="_notFound_qwpbh_39",l={searchBox:b,iconContainer:R,filter:F,notFound:z};var E=i;function O(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var g=O(E),A=Object.assign||function(r){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},I=function(r,s){var n={};for(var t in r)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);return n},v=function(s){var n=s.color,t=n===void 0?"currentColor":n,u=s.size,o=u===void 0?24:u;s.children;var d=I(s,["color","size","children"]),h="remixicon-icon "+(d.className||"");return g.default.createElement("svg",A({},d,{className:h,width:o,height:o,fill:t,viewBox:"0 0 24 24"}),g.default.createElement("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"}))},q=g.default.memo?g.default.memo(v):v,B=q;const H=N(B);function J(){const{products:r,isLoading:s,error:n}=L(a=>a.product),[t,u]=i.useState(""),[o,d]=i.useState(""),[h,w]=i.useState(""),x=i.useMemo(()=>r.reduce((a,m)=>a.includes(m.category)?a:[...a,m.category],[]),[r]),C=i.useMemo(()=>x.map(a=>e.jsx("option",{value:a,children:a},a)),[x]);if(s)return e.jsx(S,{});if(n)return e.jsx(y,{children:"error"});let c=M(r,t,h);return c=D(c,o),e.jsxs("div",{children:[e.jsx(_,{title:"Products"}),e.jsx("section",{children:e.jsx(p,{children:e.jsxs(j,{className:"justify-content-cente",children:[e.jsx(f,{lg:"3",md:"3",className:"mb-4 text-center",children:e.jsx("div",{className:l.filter,children:e.jsxs("select",{value:t,onChange:a=>u(a.target.value),children:[e.jsx("option",{value:"",children:"Filter by Category"}),C]})})}),e.jsx(f,{className:"mb-4 text-center",children:e.jsx("div",{className:l.filter,children:e.jsxs("select",{value:o,onChange:a=>d(a.target.value),children:[e.jsx("option",{value:"",children:"Sort By"}),e.jsx("option",{value:"ascending",children:"Alphabetically Ascending"}),e.jsx("option",{value:"descending",children:"Alphabetically Descending"}),e.jsx("option",{value:"rating-high",children:"Highest Rating"}),e.jsx("option",{value:"rating-low",children:"Lowest Rating"}),e.jsx("option",{value:"price-high",children:"Highest Price"}),e.jsx("option",{value:"price-low",children:"Lowest Price"})]})})}),e.jsx(f,{lg:"6",md:"6",className:"text-center",children:e.jsxs("div",{className:l.searchBox,children:[e.jsx("input",{type:"text",placeholder:"Search...",value:h,onChange:a=>w(a.target.value)}),e.jsx("div",{className:l.iconContainer,children:e.jsx(H,{size:15})})]})})]})})}),e.jsx("section",{className:"pt-0",children:e.jsx(p,{children:e.jsxs(j,{children:[c.length===0&&e.jsx("h1",{className:l.notFound,children:"No Products found!"}),c.length>0&&e.jsx(P,{products:c})]})})})]})}function M(r,s,n){return!s&&!n?r:r.filter(t=>{if(s)return n?t.category===s&&t.productName.toLowerCase().includes(n.toLowerCase()):t.category===s;if(n)return t.productName.toLowerCase().includes(n.toLowerCase())})}function D(r,s){return s===""?r:s==="ascending"?r.slice().sort((n,t)=>n.productName.toLowerCase().localeCompare(t.productName.toLowerCase())):s==="descending"?r.slice().sort((n,t)=>t.productName.toLowerCase().localeCompare(n.productName.toLowerCase())):s==="rating-high"?r.slice().sort((n,t)=>t.avgRating-n.avgRating):s==="rating-low"?r.slice().sort((n,t)=>n.avgRating-t.avgRating):s==="price-high"?r.slice().sort((n,t)=>t.price-n.price):s==="price-low"?r.slice().sort((n,t)=>n.price-t.price):r}export{J as default};
