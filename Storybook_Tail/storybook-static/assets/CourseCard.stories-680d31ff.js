import{L as j}from"./ListOnCourse-d54bd5db.js";import{k as v,o as a,b as c,e,t as l,n as y,l as u,u as N,p as O,f as I}from"./vue.esm-bundler-2168e16a.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{B as T}from"./ButtonNext-b8a4d08b.js";const k={components:{ListOnCourse:j},props:{title:String,items:Array},data(){return{isContentVisible:!1}},methods:{toggleContent(){this.isContentVisible=!this.isContentVisible}}},q={class:"text-neutral-500 font-bold"},M=e("path",{d:"M3.16406 8.08594L2.08594 9.16406L11.4609 18.5391L12 19.0547L12.5391 18.5391L21.9141 9.16406L20.8359 8.08594L12 16.9219L3.16406 8.08594Z",fill:"black"},null,-1),R=[M],V={key:0,class:"mt-2"};function E(s,m,t,H,d,p){const o=v("ListOnCourse");return a(),c("div",null,[e("div",{class:"flex justify-between",onClick:m[0]||(m[0]=(...f)=>p.toggleContent&&p.toggleContent(...f))},[e("h3",q,l(t.title),1),(a(),c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:y({"rotate-180 transition-transform":d.isContentVisible})},R,2))]),d.isContentVisible?(a(),c("div",V,[u(o,{items:t.items},null,8,["items"])])):N("",!0)])}const D=L(k,[["render",E]]);k.__docgenInfo={exportName:"default",displayName:"AccordionCourse",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"items",type:{name:"array"}}],sourceFiles:["/Users/ryan/Documents/GitHub/Storybook_Tail/src/components/AccordionCourse.vue"]};const A={components:{AccordionCourse:D,ButtonNext:T},props:{type:String,level:String,subject:String,code:String,content:String,listOne:Array,listTwo:Array}},G=s=>(O("data-v-ee70b1ef"),s=s(),I(),s),P={class:"text-sm font-bold text-gray-800 leading-tight"},F={class:"block text-xl font-bold leading-tight mb-3"},Q=G(()=>e("div",{class:"text-base font-bold text-gray-700 mb-4"},"National Code",-1)),U={class:"text-base mb-4"},z={class:"flex flex-row-reverse"};function Z(s,m,t,H,d,p){const o=v("AccordionCourse"),f=v("ButtonNext");return a(),c("div",{class:y(["m-4 border border-neutral-300 shadow-md h-full transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease",t.type])},[e("div",{class:y(["p-6 border-t-4 border-violet-500",t.type])},[e("div",P,l(t.level),1),e("div",F,l(t.subject),1),Q,e("div",U,l(t.content),1),e("div",null,[u(o,{title:"Entry Requirements",items:t.listOne,class:"cursor-pointer mb-2"},null,8,["items"])]),e("div",null,[u(o,{title:"Career Pathways",items:t.listTwo,class:"cursor-pointer mb-6"},null,8,["items"])]),e("div",z,[u(f,{light:"",label:"View Course"})])],2)],2)}const $=L(A,[["render",Z],["__scopeId","data-v-ee70b1ef"]]);A.__docgenInfo={exportName:"default",displayName:"CourseCard",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"level",type:{name:"string"}},{name:"subject",type:{name:"string"}},{name:"code",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"listOne",type:{name:"array"}},{name:"listTwo",type:{name:"array"}}],sourceFiles:["/Users/ryan/Documents/GitHub/Storybook_Tail/src/components/CourseCard.vue"]};const Y={title:"Components/Card/Course Card",component:$,tags:["autodocs"],argTypes:{type:{options:["desktop","mobile"],control:{type:"radio"}}}},n={args:{type:"mobile",level:"Qualification Level",subject:"Subject",code:"National Code",content:"A brief overview of the course. A brief overview of the course. A brief overview of the course. A brief overview of the course.",listOne:["Lorem ipsum one","Lorem ipsum one","Lorem ipsum one"],listTwo:["Lorem ipsum two","Lorem ipsum two","Lorem ipsum two"]}},r={args:{type:"mobile",level:"Certificate III",subject:"Business",code:"BSB30120-01",content:"Become an administrative assistant and more in the exciting business world. This is a highly regarded qualification and a great starting point for your business services journey. Get a taste of different business areas and be ready to join the workforce or continue your business studies.",listOne:["No entry requirements for this course"],listTwo:["administrative assistant","customer service representative","receptionist","general clerk"]}},i={args:{type:"desktop",level:"Diploma",subject:"Human Resource Management",code:"BSB50320-01",content:"Progress your career as a human resources professional. Learn how to use empathy and resilience to maintain the engagement and performance of employees. Help businesses successfully adapt to rapidly changing environments.",listOne:["Completion of four units from the Certificate IV in Human Resource Management: BSBHRM411 (Administer performance development processes)","BSBHRM412 (Support employee and industrial relations), BSBHRM415 (Coordinate recruitment and onboarding)","BSBHRM417 (Support human resource functions and processes), or equivalent competencies, as evidenced by a copy of your transcript","or Equivalent competencies are predecessors to these units, which have been mapped as equivalent. Or","Have two years equivalent full-time relevant work experience, as evidenced by a copy of your resume"],listTwo:["administrative assistant","customer service representative","receptionist","general clerk"]}};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'mobile',
    level: 'Qualification Level',
    subject: 'Subject',
    code: 'National Code',
    content: 'A brief overview of the course. A brief overview of the course. A brief overview of the course. A brief overview of the course.',
    listOne: ['Lorem ipsum one', 'Lorem ipsum one', 'Lorem ipsum one'],
    listTwo: ['Lorem ipsum two', 'Lorem ipsum two', 'Lorem ipsum two']
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var _,w,C;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'mobile',
    level: 'Certificate III',
    subject: 'Business',
    code: 'BSB30120-01',
    content: 'Become an administrative assistant and more in the exciting business world. This is a highly regarded qualification and a great starting point for your business services journey. Get a taste of different business areas and be ready to join the workforce or continue your business studies.',
    listOne: ['No entry requirements for this course'],
    listTwo: ['administrative assistant', 'customer service representative', 'receptionist', 'general clerk']
  }
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,S,x;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'desktop',
    level: 'Diploma',
    subject: 'Human Resource Management',
    code: 'BSB50320-01',
    content: 'Progress your career as a human resources professional. Learn how to use empathy and resilience to maintain the engagement and performance of employees. Help businesses successfully adapt to rapidly changing environments.',
    listOne: ['Completion of four units from the Certificate IV in Human Resource Management: BSBHRM411 (Administer performance development processes)', 'BSBHRM412 (Support employee and industrial relations), BSBHRM415 (Coordinate recruitment and onboarding)', 'BSBHRM417 (Support human resource functions and processes), or equivalent competencies, as evidenced by a copy of your transcript', 'or Equivalent competencies are predecessors to these units, which have been mapped as equivalent. Or', 'Have two years equivalent full-time relevant work experience, as evidenced by a copy of your resume'],
    listTwo: ['administrative assistant', 'customer service representative', 'receptionist', 'general clerk']
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const ee=["default_card","Example_business","Example_management"];export{r as Example_business,i as Example_management,ee as __namedExportsOrder,Y as default,n as default_card};
//# sourceMappingURL=CourseCard.stories-680d31ff.js.map
