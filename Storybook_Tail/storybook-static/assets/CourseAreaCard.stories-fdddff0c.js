import{B}from"./Button-5ed09710.js";import{H}from"./Heart-e5342a55.js";import{b as c,d,e,t as i,u as x,m as u,f as N,o as r,p as k,j as A}from"./vue.esm-bundler-5a9141cb.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const C={components:{Button:B,Heart:H},props:{heading:String,subheading:String,content:String,button_visible:Boolean,heart_visible:Boolean}},w=n=>(k("data-v-590c835a"),n=n(),A(),n),I={class:"border"},T=w(()=>e("div",{class:"course-img"},null,-1)),F={class:"course-container"},L={class:"course-box"},O={class:"heading"},V={class:"subheading"},q={class:"content-content"},D={key:0};function j(n,K,a,R,U,Y){const S=c("Heart"),y=c("Button");return r(),d("div",I,[T,e("div",F,[e("div",L,[e("div",null,[e("div",O,i(a.heading),1),e("div",V,i(a.subheading),1)]),a.heart_visible?(r(),x(S,{key:0})):u("",!0)]),e("div",q,i(a.content),1),a.button_visible?(r(),d("div",D,[N(y,{label:"Button",primary:""})])):u("",!0)])])}const G=E(C,[["render",j],["__scopeId","data-v-590c835a"]]);C.__docgenInfo={exportName:"default",displayName:"CourseAreaCard",description:"",tags:{},props:[{name:"heading",type:{name:"string"}},{name:"subheading",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"button_visible",type:{name:"boolean"}},{name:"heart_visible",type:{name:"boolean"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/CourseAreaCard.vue"]};const Q={title:"Components/Card/Course Area Card",component:G,tags:["autodocs"]},t={args:{heading:"Heading",subheading:"Subheading",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.",button_visible:!0,heart_visible:!0}},s={args:{heading:"Heading",subheading:"Subheading",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.",button_visible:!1,heart_visible:!1}},o={args:{heading:"Education and Training",subheading:"10 Courses",content:"Focus on your love of learning and knowledge with an education and training qualification. Help nurt...",button_visible:!1,heart_visible:!1}};var l,m,_;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.',
    button_visible: true,
    heart_visible: true
  }
}`,...(_=(m=t.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var g,b,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.',
    button_visible: false,
    heart_visible: false
  }
}`,...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var h,v,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    heading: 'Education and Training',
    subheading: '10 Courses',
    content: 'Focus on your love of learning and knowledge with an education and training qualification. Help nurt...',
    button_visible: false,
    heart_visible: false
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const W=["default_card","Current_course_area_card","Example"];export{s as Current_course_area_card,o as Example,W as __namedExportsOrder,Q as default,t as default_card};
