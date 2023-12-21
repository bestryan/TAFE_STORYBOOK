import{P as N}from"./Pills-96a44863.js";import{A as h}from"./Attribute-a977f02b.js";import{H as A}from"./Heart-e5342a55.js";import{b as r,d as x,e as o,t as i,f as e,o as T}from"./vue.esm-bundler-5a9141cb.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Tooltip-8f1c935c.js";const y={components:{Pills:N,Attribute:h,Heart:A},props:{type:String,label:String,location:String,code:String,content:String,selectedSvgName:String}},P={class:"containerCard"},C={class:"row1"},R={class:"row2"},k={class:"location"},B={class:"grid"},K={class:"subtitle"};function O(H,W,t,w,F,L){const v=r("Pills"),S=r("Heart"),n=r("Attribute");return T(),x("div",P,[o("div",C,[o("div",R,[o("div",k,i(t.location),1),e(v,{type:t.type,label:t.label,class:"att-pill"},null,8,["type","label"])]),e(S)]),o("div",B,[e(n,{title:"Delivery",tooltip:"Method of course delivery.",content:"On campus",selectedSvgName:"onCampus"}),e(n,{title:"Schedule",tooltip:"Pace and number of hours.",content:"Part Time",selectedSvgName:"schedule"}),e(n,{title:"Duration",tooltip:"Total time required to complete a course.",content:"6 months",selectedSvgName:"duration"}),e(n,{title:"Start date",tooltip:"First day of attendance online or on campus.",content:"Next intake",selectedSvgName:"startDate"}),e(n,{tooltip:"This is an indicative fee. The course fee depends on the subjects you choose to study.",title:"Fee Range",content:t.content,selectedSvgName:t.selectedSvgName},null,8,["content","selectedSvgName"])]),o("div",K,i(t.code),1)])}const D=E(y,[["render",O],["__scopeId","data-v-bb076937"]]);y.__docgenInfo={description:"The attribute offerings card displays course offerings at a specific location, including related course information.",tags:{},exportName:"default",displayName:"AttributeTile",props:[{name:"type",type:{name:"string"}},{name:"label",type:{name:"string"}},{name:"location",type:{name:"string"}},{name:"code",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"selectedSvgName",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/AttributeTile.vue"]};const M={title:"Components/Attribute Card/Attribute Offerings Card",component:D,tags:["autodocs"]},s={args:{type:"green",label:"Enrolment open",location:"Kingscliff",code:"23KCL-051",selectedSvgName:"feeRange",content:"$0 - $7,790"}},a={args:{type:"pink",label:"Register interest",location:"Wollongbar",code:"23WLB-050",selectedSvgName:"feePending",content:"Pending"}};var c,l,d,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'green',
    label: 'Enrolment open',
    location: 'Kingscliff',
    code: '23KCL-051',
    selectedSvgName: 'feeRange',
    content: '$0 - $7,790'
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"An example course offering at Kingscliff - Enrollment is open",...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var g,u,_,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'pink',
    label: 'Register interest',
    location: 'Wollongbar',
    code: '23WLB-050',
    selectedSvgName: 'feePending',
    content: 'Pending'
  }
}`,...(_=(u=a.parameters)==null?void 0:u.docs)==null?void 0:_.source},description:{story:"An example course offering at Wollongbar - Register your interest",...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};const U=["Example_one","Example_two"];export{s as Example_one,a as Example_two,U as __namedExportsOrder,M as default};
