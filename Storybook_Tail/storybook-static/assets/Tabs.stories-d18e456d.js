import{d as n,e as c,F as i,g as b,o as t,n as d,t as T,w as f,v as p}from"./vue.esm-bundler-5a9141cb.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const u={props:["tabs"],data(){return{selectedTab:0}}},C={class:"tab-buttons"},F=["onClick"],g={class:"tab-content"};function h(S,O,r,k,a,w){return t(),n("div",null,[c("div",C,[(t(!0),n(i,null,b(r.tabs,(s,e)=>(t(),n("button",{key:e,onClick:x=>a.selectedTab=e,class:d({"active-tab":e===a.selectedTab})},T(s.name),11,F))),128))]),c("div",g,[(t(!0),n(i,null,b(r.tabs,(s,e)=>f((t(),n("div",{key:e},T(s.content),1)),[[p,e===a.selectedTab]])),128))])])}const y=v(u,[["render",h],["__scopeId","data-v-0750d5ee"]]);u.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",type:{name:"undefined"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/Tabs.vue"]};const E={title:"Components/Tab/Default Tabs",component:y,tags:["autodocs"]},o={args:{tabs:[{name:"One",content:"Content for Tab One"},{name:"Two",content:"Content for Tab Two"},{name:"Three",content:"Content for Tab Three"},{name:"Four",content:"Content for Tab Four"},{name:"Five",content:"Content for Tab Five"},{name:"Six",content:"Content for Tab Six"}]}};var _,m,l;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tabs: [{
      name: 'One',
      content: 'Content for Tab One'
    }, {
      name: 'Two',
      content: 'Content for Tab Two'
    }, {
      name: 'Three',
      content: 'Content for Tab Three'
    }, {
      name: 'Four',
      content: 'Content for Tab Four'
    }, {
      name: 'Five',
      content: 'Content for Tab Five'
    }, {
      name: 'Six',
      content: 'Content for Tab Six'
    }]
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const N=["Default_Tabs"];export{o as Default_Tabs,N as __namedExportsOrder,E as default};
