import{r as s,u as j,f,c as v,j as e,C as y,R as _,a as F,h as C,L as E,i as S}from"./index-SlN3sRGd.js";import{F as b,a}from"./Form-Dckt5UPm.js";const R="_title_1higx_1",w="_authForm_1higx_7",N="_btn_1higx_28",n={title:R,authForm:w,btn:N};function U(){const[r,l]=s.useState(""),[i,c]=s.useState(""),[o,u]=s.useState(""),[h,g]=s.useState(null),{isLoading:p}=j(t=>t.user),x=f(),m=v();async function d(t){t.preventDefault(),m(S({email:r,password:i,files:h,username:o,navigate:x}))}return s.useEffect(()=>{},[]),e.jsx("div",{children:e.jsx("section",{children:e.jsx(y,{children:e.jsx(_,{children:e.jsxs(F,{lg:"6",className:"m-auto text-center",children:[e.jsx("h1",{className:n.title,children:"Register"}),p?e.jsx(C,{}):e.jsxs(b,{className:n.authForm,onSubmit:d,children:[e.jsx(a,{children:e.jsx("input",{type:"text",placeholder:"Enter your username",value:o,onChange:t=>u(t.target.value)})}),e.jsx(a,{children:e.jsx("input",{type:"email",placeholder:"Enter your email",value:r,onChange:t=>l(t.target.value)})}),e.jsx(a,{children:e.jsx("input",{type:"password",placeholder:"Enter your password",value:i,onChange:t=>c(t.target.value)})}),e.jsx(a,{children:e.jsx("input",{type:"file",onChange:t=>g(t.target.files[0]),accept:"image/png, image/gif, image/jpeg"})}),e.jsx("button",{className:n.btn,children:"Register"}),e.jsxs("p",{children:["Already have an account?"," ",e.jsx(E,{to:"/login",children:"Login into account"})]})]})]})})})})})}export{U as default};
