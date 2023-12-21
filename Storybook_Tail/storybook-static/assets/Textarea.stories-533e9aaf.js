import{d as a,t as l,e as x,n as f,o as r}from"./vue.esm-bundler-5a9141cb.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const b={props:{label:String,placeholder:String,isInvalid:String,errorMessage:String}},y={key:0,for:"input",class:"block text-base font-bold mt-4 text-tafe-status-red"},v={key:1,for:"input",class:"block text-base font-bold mt-4"},I=["placeholder"],S={key:2,class:"text-tafe-status-red"},T={key:3,class:"text-tafe-grey-500"};function k(B,L,e,M,O,P){return r(),a("div",null,[e.isInvalid?(r(),a("label",y,l(e.label),1)):(r(),a("label",v,l(e.label),1)),x("textarea",{required:"",id:"input",name:"input",placeholder:e.placeholder,rows:"1",class:f(["w-full max-w-xl px-4 py-[0.81rem] mt-2 border border-tafe-grey-500 shadow bg-white focus:outline-none focus:border-tafe-blue-300 focus:ring-1 focus:ring-tafe-blue-300",e.isInvalid])},null,10,I),e.isInvalid?(r(),a("div",S," 0 words (minimum 250 words) ")):(r(),a("div",T,"0 words (minimum 250 words)"))])}const w=h(b,[["render",k],["__scopeId","data-v-aacf1222"]]);b.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"placeholder",type:{name:"string"}},{name:"isInvalid",type:{name:"string"}},{name:"errorMessage",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/Textarea.vue"]};const N={title:"Forms and Tables/Textarea",component:w,tags:["autodocs"]},s={args:{label:"Label",placeholder:"Placeholder text"}},t={args:{label:"Label",placeholder:"Placeholder text",isInvalid:!0,isInvalid:"invalid",errorMessage:"Inline error message."}},o={args:{label:"Where do you see yourself in 5-10 years time?",placeholder:"Start typing"}};var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder text'
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    isInvalid: true,
    isInvalid: 'invalid',
    errorMessage: 'Inline error message.'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,_,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Where do you see yourself in 5-10 years time?',
    placeholder: 'Start typing'
  }
}`,...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const D=["textarea","error","example"];export{D as __namedExportsOrder,N as default,t as error,o as example,s as textarea};
