import{P as N}from"./Pills-96a44863.js";import{B as x}from"./ButtonIcon-bcb9e3c4.js";import{b as i,d as k,e,f as r,t as q,o as E}from"./vue.esm-bundler-5a9141cb.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";const w={components:{Pills:N,ButtonIcon:x},props:{content:String,status:String,type:String,selectedSvgName:String,label:String}},A={class:"m-4 border border-gray-200 shadow bg-white p-4 gap-3 lg:p-6 lg:flex items-center"},B={class:"flex flex-col gap-3 mb-4 lg:mb-0 lg:flex lg:flex-row lg:flex-1 lg:items-center"},P={class:"md:flex md:flex-row md:gap-3"},C={class:"mb-2 md:mb-0"};function O(T,F,t,I,J,G){const h=i("Pills"),l=i("ButtonIcon");return E(),k("div",A,[e("div",B,[e("div",null,[r(h,{label:t.status,type:t.type},null,8,["label","type"])]),e("div",null,q(t.content),1)]),e("div",P,[e("div",C,[r(l,{dark:"",label:"Ask a question",selectedSvgName:"help",class:"lg:w-auto w-full"})]),e("div",null,[r(l,{primary:"",label:t.label,selectedSvgName:t.selectedSvgName,class:"lg:w-auto w-full"},null,8,["label","selectedSvgName"])])])])}const W=R(w,[["render",O]]);w.__docgenInfo={exportName:"default",displayName:"ContentStatus",description:"",tags:{},props:[{name:"content",type:{name:"string"}},{name:"status",type:{name:"string"}},{name:"type",type:{name:"string"}},{name:"selectedSvgName",type:{name:"string"}},{name:"label",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/ContentStatus.vue"]};const H={title:"Content Modules/Content Status",component:W,tags:["autodocs"]},n={args:{type:"green",status:"Enrolment open",content:"Places are available, you can enrol now.",label:"Start enrolment",selectedSvgName:"enrol"}},a={args:{type:"purple",status:"Application required",content:"Some courses have entry requirements you need to meet before you can enrol. Our course information outlines what these requirements are and how you can apply.",label:"Start application",selectedSvgName:"enrol"}},o={args:{type:"blue",status:"Waitlist open",content:"Places in this course are full. Join the waitlist and we'll contact you if a place becomes available. Go back to view available study options.",label:"Jolin waitlist",selectedSvgName:"waitList"}},s={args:{type:"pink",status:"Register interest",content:"Register your interest today and we'll be in touch shortly to support you as you begin your journey with TAFE NSW.",label:"Register interest",selectedSvgName:"info"}};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'green',
    status: 'Enrolment open',
    content: 'Places are available, you can enrol now.',
    label: 'Start enrolment',
    selectedSvgName: 'enrol'
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'purple',
    status: 'Application required',
    content: 'Some courses have entry requirements you need to meet before you can enrol. Our course information outlines what these requirements are and how you can apply.',
    label: 'Start application',
    selectedSvgName: 'enrol'
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,b,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'blue',
    status: 'Waitlist open',
    content: "Places in this course are full. Join the waitlist and we'll contact you if a place becomes available. Go back to view available study options.",
    label: 'Jolin waitlist',
    selectedSvgName: 'waitList'
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var _,v,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'pink',
    status: 'Register interest',
    content: "Register your interest today and we'll be in touch shortly to support you as you begin your journey with TAFE NSW.",
    label: 'Register interest',
    selectedSvgName: 'info'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const K=["Enrolment_open","Application_required","Waitlist_open","Register_interest"];export{a as Application_required,n as Enrolment_open,s as Register_interest,o as Waitlist_open,K as __namedExportsOrder,H as default};
