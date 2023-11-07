import{B as f}from"./Badge-fc095e68.js";import{k as T,b as t,e as c,F as i,d as u,o as n,n as v,s as y,t as l,l as g,w as C,v as U}from"./vue.esm-bundler-2168e16a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const p={components:{Badge:f},props:["tabs"],data(){return{selectedTab:0}}},S={class:"tab-buttons"},B=["onClick"],h={class:"tab-content"};function N(w,D,r,F,a,V){const b=T("Badge");return n(),t("div",null,[c("div",S,[(n(!0),t(i,null,u(r.tabs,(s,e)=>(n(),t("button",{key:e,onClick:E=>a.selectedTab=e,class:v({"active-tab":e===a.selectedTab})},[y(l(s.name)+" ",1),g(b,{number:s.units},null,8,["number"])],10,B))),128))]),c("div",h,[(n(!0),t(i,null,u(r.tabs,(s,e)=>C((n(),t("div",{key:e},l(s.content),1)),[[U,e===a.selectedTab]])),128))])])}const x=k(p,[["render",N],["__scopeId","data-v-c98e83b6"]]);p.__docgenInfo={exportName:"default",displayName:"UnitTabs",description:"",tags:{},props:[{name:"tabs",type:{name:"undefined"}}],sourceFiles:["/Users/ryan/Documents/GitHub/Storybook_Tail/src/components/UnitTabs.vue"]};const H={title:"Components/Tab/Unit Tabs",component:x,tags:["autodocs"]},o={args:{tabs:[{name:"Core units",content:"content for Core units",units:11},{name:"Specialty units",content:"content for Specialty units",units:21}]}};var _,d,m;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const L=["Unit_Tabs"];export{o as Unit_Tabs,L as __namedExportsOrder,H as default};
//# sourceMappingURL=UnitTabs.stories-eee3a39a.js.map
