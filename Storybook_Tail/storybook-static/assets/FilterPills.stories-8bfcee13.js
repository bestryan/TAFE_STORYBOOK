import{w as L,v as C,d as n,e as h,t as w,n as F,o as c,p as x,j as P}from"./vue.esm-bundler-5a9141cb.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const v={props:{label:String,type:String},data(){return{visible:!0}},methods:{handleClick(){this.visible=!1}}},I=e=>(x("data-v-a0097f9f"),e=e(),P(),e),B={class:"message"},O=I(()=>h("path",{d:"M6.53906 5.46094L5.46094 6.53906L10.9219 12L5.46094 17.4609L6.53906 18.5391L12 13.0781L17.4609 18.5391L18.5391 17.4609L13.0781 12L18.5391 6.53906L17.4609 5.46094L12 10.9219L6.53906 5.46094Z",fill:"currentColor"},null,-1)),T=[O];function D(e,r,l,N,S,o){return L((c(),n("div",{class:F(["filterPills",l.type])},[h("div",B,w(l.label),1),(c(),n("svg",{onClick:r[0]||(r[0]=(...b)=>o.handleClick&&o.handleClick(...b)),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},T))],2)),[[C,S.visible]])}const E=k(v,[["render",D],["__scopeId","data-v-a0097f9f"]]);v.__docgenInfo={exportName:"default",displayName:"FilterPills",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"type",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/FilterPills.vue"]};const A={title:"Components/Pills/Filter Pill",component:E,tags:["autodocs"],argTypes:{type:{options:["select","clear"],control:{type:"radio"}}}},s={args:{type:"select",label:"Full-time"}},t={args:{type:"clear",label:"Clear all"}},a={args:{type:"icon"}};var i,p,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'select',
    label: 'Full-time'
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,_,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'clear',
    label: 'Clear all'
  }
}`,...(u=(_=t.parameters)==null?void 0:_.docs)==null?void 0:u.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'icon'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const G=["Select","Clear","Icon"];export{t as Clear,a as Icon,s as Select,G as __namedExportsOrder,A as default};
