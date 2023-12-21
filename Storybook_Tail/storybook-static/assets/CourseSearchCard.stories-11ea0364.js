import{B as f}from"./ButtonNext-fe396848.js";import{A as v}from"./Attribute-a977f02b.js";import{b as i,d as b,e,t as o,f as r,o as _}from"./vue.esm-bundler-5a9141cb.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./Tooltip-8f1c935c.js";const g={components:{ButtonNext:f,Attribute:v},props:{type:String,level:String,subject:String,code:String,content:String}},x={class:"max-w-3xl border border-neutral-300 shadow-md h-full transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease"},C={class:"p-6 border-t-4 border-tafe-pink-300"},S={class:"text-sm font-bold text-tafe-grey-600 leading-tight mb-1"},w={class:"block text-xl font-bold leading-tight mb-3"},A={class:"text-base font-bold text-tafe-grey-600 mb-4"},N={class:"text-base mb-4"},j={class:"my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},T={class:"flex flex-row-reverse"};function k(I,E,t,F,O,D){const n=i("Attribute"),h=i("ButtonNext");return _(),b("div",x,[e("div",C,[e("div",S,o(t.level),1),e("div",w,o(t.subject),1),e("div",A,o(t.code),1),e("div",N,o(t.content),1),e("div",j,[r(n,{title:"Delivery",tooltip:"Method of course delivery.",content:"On campus and Combination",selectedSvgName:"onCampus"}),r(n,{title:"Schedule",tooltip:"Pace and number of hours.",content:"Full Time, Part Time and Self paced",selectedSvgName:"schedule"}),r(n,{title:"Career pathways",tooltip:"Career pathways",content:"trainee seamstress, trainee pattern maker and junior design assistant.",selectedSvgName:"duration"})]),e("div",T,[r(h,{light:"",label:"View Course"})])])])}const B=y(g,[["render",k]]);g.__docgenInfo={exportName:"default",displayName:"CourseSearchCard",description:"",tags:{},props:[{name:"type",type:{name:"string"}},{name:"level",type:{name:"string"}},{name:"subject",type:{name:"string"}},{name:"code",type:{name:"string"}},{name:"content",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/CourseSearchCard.vue"]};const P={title:"Components/Card/Course Search Card",component:B,tags:["autodocs"]},s={args:{level:"Qualification Level",subject:"Subject",code:"National Code",content:"A brief overview of the course. A brief overview of the course. A brief overview of the course. A brief overview of the course."}},a={args:{level:"Certificate III",subject:"Apparel, Fashion and Textiles",code:"MST31022-01",content:"Kickstart your career in the fashion industry with this entry-level course in fashion and garment creation. Construct a designer garment by aligning and sewing patterns. Apply more complex techniques such as creating darts or pleats."}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    level: 'Qualification Level',
    subject: 'Subject',
    code: 'National Code',
    content: 'A brief overview of the course. A brief overview of the course. A brief overview of the course. A brief overview of the course.'
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 'Certificate III',
    subject: 'Apparel, Fashion and Textiles',
    code: 'MST31022-01',
    content: 'Kickstart your career in the fashion industry with this entry-level course in fashion and garment creation. Construct a designer garment by aligning and sewing patterns. Apply more complex techniques such as creating darts or pleats.'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Q=["default_card","Example"];export{a as Example,Q as __namedExportsOrder,P as default,s as default_card};