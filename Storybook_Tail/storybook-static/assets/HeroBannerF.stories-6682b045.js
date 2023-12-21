import{B as S}from"./ButtonIcon-bcb9e3c4.js";import{P as h}from"./Pills-96a44863.js";import{b as r,d as y,e as t,t as i,u as l,m as c,f as d,o as s}from"./vue.esm-bundler-5a9141cb.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const v={components:{ButtonIcon:S,Pills:h},props:{heading:String,location:String,selectedSvgName:String,buttonLabel:String,button_visible:Boolean}},N={class:"min-w-[90rem] flex justify-between py-2 px-20 bg-tafe-grey-700"},x={class:"flex gap-2"},H={class:"text-white text-4xl font-bold"},L={class:"text-tafe-aqua-300 text-4xl font-bold"},F={class:"flex gap-2 items-center"};function k(T,E,e,I,O,P){const f=r("Pills"),a=r("ButtonIcon");return s(),y("div",N,[t("div",x,[t("div",H,i(e.heading),1),t("div",L,i(e.location),1)]),t("div",F,[e.button_visible?(s(),l(f,{key:0,label:"Enrolment open",type:"green"})):c("",!0),e.button_visible?(s(),l(a,{key:1,dark:"",label:"Add to shortlist",selectedSvgName:"heart"})):c("",!0),d(a,{dark:"",label:"Add to question",selectedSvgName:"help"}),d(a,{primary:"",label:e.buttonLabel,selectedSvgName:e.selectedSvgName},null,8,["label","selectedSvgName"])])])}const w=B(v,[["render",k]]);v.__docgenInfo={exportName:"default",displayName:"HeroBannerF",description:"",tags:{},props:[{name:"heading",type:{name:"string"}},{name:"location",type:{name:"string"}},{name:"selectedSvgName",type:{name:"string"}},{name:"buttonLabel",type:{name:"string"}},{name:"button_visible",type:{name:"boolean"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/HeroBannerF.vue"]};const D={title:"Components/Hero Banner/Banner F",component:w,tags:["autodocs"]},n={args:{heading:"Heading h2 Large",location:"location",selectedSvgName:"action",buttonLabel:"Start enrolment",button_visible:!0}},o={args:{location:"Heading H2 Large",selectedSvgName:"find",buttonLabel:"Find a location to enrol",button_visible:!1}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    heading: 'Heading h2 Large',
    location: 'location',
    selectedSvgName: 'action',
    buttonLabel: 'Start enrolment',
    button_visible: true
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,_,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    location: 'Heading H2 Large',
    selectedSvgName: 'find',
    buttonLabel: 'Find a location to enrol',
    button_visible: false
  }
}`,...(p=(_=o.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};const j=["variation_one","variation_Two"];export{j as __namedExportsOrder,D as default,o as variation_Two,n as variation_one};
