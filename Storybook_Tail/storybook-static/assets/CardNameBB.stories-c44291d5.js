import{T as v}from"./Tooltip-8f1c935c.js";import{B as x}from"./ButtonIcon-bcb9e3c4.js";import{d as a,e,t as s,F as B,g as b,o}from"./vue.esm-bundler-5a9141cb.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const g={components:{Tooltip:v,ButtonIcon:x},props:{title:String,content:String,items:Array}},w={class:"max-w-md border border-gray-200 shadow bg-white"},E={class:"bg-gray-100 px-5 py-4 border-b border-gray-200"},k={class:"flex items-center justify-between mb-2"},L={class:"text-xl font-bold"},N={class:"text-tafe-grey-600 text-base font-bold"},A={key:0},I={key:1},M={class:"p-5"},D={class:"flex justify-between gap-4 mb-4 underline cursor-pointer"},F={class:"text-base"},H=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M14.0391 5.08594L12.9609 6.16406L18.0469 11.25H3V12.75H18.0469L12.9609 17.8359L14.0391 18.9141L20.4141 12.5391L20.9297 12L20.4141 11.4609L14.0391 5.08594Z",fill:"black"})])],-1);function T(P,V,t,G,R,j){return o(),a("div",w,[e("div",E,[e("div",k,[e("div",L,s(t.title),1),e("div",N,[t.items.length<2?(o(),a("div",A,s(t.items.length)+" Course",1)):(o(),a("div",I,s(t.items.length)+" Courses",1))])]),e("div",null,s(t.content),1)]),e("div",M,[e("ul",null,[(o(!0),a(B,null,b(t.items,(f,C)=>(o(),a("li",{key:C},[e("div",D,[e("div",F,s(f),1),H])]))),128))])])])}const O=S(g,[["render",T]]);g.__docgenInfo={exportName:"default",displayName:"CardNameBB",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"items",type:{name:"array"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/CardNameBB.vue"]};const q={title:"Components/Card/Card BB",component:O,tags:["autodocs"]},r={args:{title:"Further study",content:"Advance your skills to take your career to the next level",items:["Diploma of Practice Management","Graduate Certificate in Client Assessment and Case Management","Bachelor of Nursing"]}},n={args:{title:"Previous Study",content:"Alternative pathways into this course",items:["Certificate Ill in Early Childhood Education and Care","Certificate Ill in School Based Education Support","Diploma of Early Childhood Education and Care"]}},i={args:{title:"Related Study",content:"Strengthen your expertise and expand your employability",items:["Certificate IV in Mental Health"]}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Further study',
    content: 'Advance your skills to take your career to the next level',
    items: ['Diploma of Practice Management', 'Graduate Certificate in Client Assessment and Case Management', 'Bachelor of Nursing']
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Previous Study',
    content: 'Alternative pathways into this course',
    items: ['Certificate Ill in Early Childhood Education and Care', 'Certificate Ill in School Based Education Support', 'Diploma of Early Childhood Education and Care']
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,h,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Related Study',
    content: 'Strengthen your expertise and expand your employability',
    items: ['Certificate IV in Mental Health']
  }
}`,...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const z=["further_study","previous_study","related_study"];export{z as __namedExportsOrder,q as default,r as further_study,n as previous_study,i as related_study};
