import{r as n,f as m,c as x,j as e,C as p,R as j,a as g,h as f,L as v,B as _,l as F}from"./index-SlN3sRGd.js";import{F as b,a as o}from"./Form-Dckt5UPm.js";const y="_title_qh8ke_1",C="_authForm_qh8ke_7",L="_btn_qh8ke_24",r={title:y,authForm:C,btn:L};function S(){const[s,i]=n.useState(""),[a,l]=n.useState(""),[c,w]=n.useState(!1),h=m(),u=x();async function d(t){if(t.preventDefault(),!s||!a){_.error("Please fill in all the fields");return}u(F({email:s,password:a,navigate:h}))}return e.jsx("div",{children:e.jsx("section",{children:e.jsx(p,{children:e.jsx(j,{children:e.jsxs(g,{lg:"6",className:"m-auto text-center",children:[e.jsx("h1",{className:r.title,children:"Login"}),e.jsx(b,{className:r.authForm,onSubmit:d,children:c?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx("input",{type:"email",placeholder:"Enter your email",value:s,onChange:t=>i(t.target.value)})}),e.jsx(o,{children:e.jsx("input",{type:"password",placeholder:"Enter your password",value:a,onChange:t=>l(t.target.value)})}),e.jsx("button",{className:r.btn,children:"Login"}),e.jsxs("p",{children:["Don't have an account?"," ",e.jsx(v,{to:"/register",children:"Create an account"})]})]})})]})})})})})}export{S as default};
