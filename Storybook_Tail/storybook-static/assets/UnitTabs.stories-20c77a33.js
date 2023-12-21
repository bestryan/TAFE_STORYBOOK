import{B as T}from"./Badge-830b89f9.js";import{b as f,d as t,e as c,F as i,g as u,o as n,n as v,s as g,t as l,f as y,w as C,v as S}from"./vue.esm-bundler-5a9141cb.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const p={components:{Badge:T},props:["tabs"],data(){return{selectedTab:0}}},B={class:"tab-buttons"},k=["onClick"],h={class:"tab-content"};function N(F,O,r,w,a,D){const b=f("Badge");return n(),t("div",null,[c("div",B,[(n(!0),t(i,null,u(r.tabs,(s,e)=>(n(),t("button",{key:e,onClick:E=>a.selectedTab=e,class:v({"active-tab":e===a.selectedTab})},[g(l(s.name)+" ",1),y(b,{number:s.units},null,8,["number"])],10,k))),128))]),c("div",h,[(n(!0),t(i,null,u(r.tabs,(s,e)=>C((n(),t("div",{key:e},l(s.content),1)),[[S,e===a.selectedTab]])),128))])])}const x=U(p,[["render",N],["__scopeId","data-v-c98e83b6"]]);p.__docgenInfo={exportName:"default",displayName:"UnitTabs",description:"",tags:{},props:[{name:"tabs",type:{name:"undefined"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/UnitTabs.vue"]};const A={title:"Components/Tab/Unit Tabs",component:x,tags:["autodocs"]},o={args:{tabs:[{name:"Core units",content:"content for Core units",units:11},{name:"Specialty units",content:"content for Specialty units",units:21}]}};var _,d,m;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tabs: [{
      name: 'Core units',
      content: 'content for Core units',
      units: 11
    }, {
      name: 'Specialty units',
      content: 'content for Specialty units',
      units: 21
    }]
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const G=["Unit_Tabs"];export{o as Unit_Tabs,G as __namedExportsOrder,A as default};
