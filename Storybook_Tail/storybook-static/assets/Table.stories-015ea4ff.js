import{d as o,e,F as u,g as c,o as n,t as a,n as $}from"./vue.esm-bundler-5a9141cb.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const g={props:{courses:Array,headers:Array,striped:{type:Boolean,default:!1}}},y={class:"table"};function T(N,v,i,x,F,L){return n(),o("div",null,[e("table",y,[e("thead",null,[e("tr",null,[(n(!0),o(u,null,c(i.headers,(t,l)=>(n(),o("th",{key:l},a(t),1))),128))])]),e("tbody",null,[(n(!0),o(u,null,c(i.courses,(t,l)=>(n(),o("tr",{key:t.id,class:$({"striped-row":i.striped&&l%2===1})},[e("td",null,a(t.title),1),e("td",null,a(t.location),1),e("td",null,a(t.duration),1),e("td",null,a(t.fee),1)],2))),128))])])])}const D=b(g,[["render",T],["__scopeId","data-v-6e8c5712"]]);g.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"courses",type:{name:"array"}},{name:"headers",type:{name:"array"}},{name:"striped",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/Table.vue"]};const k={title:"Forms and Tables/Table",component:D,tags:["autodocs"]},r={args:{headers:["Course title","Location","Duration","Fees"],courses:[{title:"Lorem ipsum dolor sit amet",location:"Ultimo",duration:"6 months",fee:"$0-$3,000"},{title:"Donec ac hendrerit velit",location:"Wollongong West",duration:"12 months",fee:"$0-$6,000"},{title:"Nullam nex orci ut ipsum feugiat interdum",location:"Nowra",duration:"3 months",fee:"$0-$1,230"}]}},s={args:{striped:!0,headers:["Course title","Location","Duration","Fees"],courses:[{title:"Lorem ipsum dolor sit amet",location:"Ultimo",duration:"6 months",fee:"$0-$3,000"},{title:"Donec ac hendrerit velit",location:"Wollongong West",duration:"12 months",fee:"$0-$6,000"},{title:"Nullam nex orci ut ipsum feugiat interdum",location:"Nowra",duration:"3 months",fee:"$0-$1,230"}]}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headers: ['Course title', 'Location', 'Duration', 'Fees'],
    courses: [{
      title: 'Lorem ipsum dolor sit amet',
      location: 'Ultimo',
      duration: '6 months',
      fee: '$0-$3,000'
    }, {
      title: 'Donec ac hendrerit velit',
      location: 'Wollongong West',
      duration: '12 months',
      fee: '$0-$6,000'
    }, {
      title: 'Nullam nex orci ut ipsum feugiat interdum',
      location: 'Nowra',
      duration: '3 months',
      fee: '$0-$1,230'
    }]
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,_,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    striped: true,
    headers: ['Course title', 'Location', 'Duration', 'Fees'],
    courses: [{
      title: 'Lorem ipsum dolor sit amet',
      location: 'Ultimo',
      duration: '6 months',
      fee: '$0-$3,000'
    }, {
      title: 'Donec ac hendrerit velit',
      location: 'Wollongong West',
      duration: '12 months',
      fee: '$0-$6,000'
    }, {
      title: 'Nullam nex orci ut ipsum feugiat interdum',
      location: 'Nowra',
      duration: '3 months',
      fee: '$0-$1,230'
    }]
  }
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const w=["Default_Table","Table_Striped"];export{r as Default_Table,s as Table_Striped,w as __namedExportsOrder,k as default};
