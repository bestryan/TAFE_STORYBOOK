import{B as y}from"./Button-5ed09710.js";import{L}from"./List-f1a92aa0.js";import{b as r,d as a,e as t,t as n,f as m,m as q,n as N,o as u,p as h,j as w}from"./vue.esm-bundler-5a9141cb.js";import{_ as B}from"./DCE-Showcase-Facilities-485765d5.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const g={components:{Button:y,List:L},props:{type:String,overview:String,title:String,content:String,items:Array,isNumbered:Boolean,button_visible:Boolean}},S=o=>(h("data-v-79819cfd"),o=o(),w(),o),x=S(()=>t("img",{class:"object-cover object-center lg:w-1/2",src:B,alt:"DCE-Showcase-Facilities"},null,-1)),O={class:"lg:p-12 lg:w-1/2 py-6"},I={class:"text-base font-bold text-tafe-grey-600 mb-2"},M={class:"text-2xl font-bold mb-5 lg:mb-6"},H={class:"mb-5 lg:mb-6"},k={class:"mb-4 lg:mb-6"},E={key:0};function T(o,D,e,F,R,V){const b=r("List"),f=r("Button");return u(),a("div",{class:N(["lg:flex",e.type])},[x,t("div",O,[t("div",I,n(e.overview),1),t("div",M,n(e.title),1),t("div",H,n(e.content),1),t("div",k,[m(b,{isNumbered:e.isNumbered,items:e.items},null,8,["isNumbered","items"])]),e.button_visible?(u(),a("div",E,[m(f,{primary:"",label:"Button"})])):q("",!0)])],2)}const j=C(g,[["render",T],["__scopeId","data-v-79819cfd"]]);g.__docgenInfo={exportName:"default",displayName:"ContentModulesB",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"overview",type:{name:"string"}},{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"items",type:{name:"array"}},{name:"isNumbered",type:{name:"boolean"}},{name:"button_visible",type:{name:"boolean"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/ContentModulesB.vue"]};const Y={title:"Content Modules/List with Image",component:j,tags:["autodocs"],argTypes:{type:{options:["right","left"],control:{type:"radio"}}}},s={args:{overview:"Overview",title:"Heading 3 large",content:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",items:["Lorem ipsum","Lorem ipsum","Lorem ipsum","Lorem ipsum"],isNumbered:!1,button_visible:!0}},i={args:{type:"right",overview:"Overview",title:"Heading 3 large",content:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",items:["Lorem ipsum","Lorem ipsum","Lorem ipsum","Lorem ipsum"],isNumbered:!1,button_visible:!0}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    overview: 'Overview',
    title: 'Heading 3 large',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: false,
    button_visible: true
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,_,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'right',
    overview: 'Overview',
    title: 'Heading 3 large',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: false,
    button_visible: true
  }
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const J=["Content_Left","Content_Right"];export{s as Content_Left,i as Content_Right,J as __namedExportsOrder,Y as default};
