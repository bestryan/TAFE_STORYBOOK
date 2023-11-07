import{b as l,F as B,d as E,o as d,e,t as i,n as u,w as m,v as p,s as g,p as N,f as W}from"./vue.esm-bundler-2168e16a.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const F={name:"Accordion",props:{items:{type:Array,required:!0}},data(){return{activeItem:null}},methods:{toggleItem(t){this.activeItem===t?this.activeItem=null:this.activeItem=t}}},P=t=>(N("data-v-e0657728"),t=t(),W(),t),V={class:"accordion"},z=["onClick"],G={class:"inline-flex"},Z={class:"courseCode"},J=P(()=>e("path",{d:"M3.16406 8.08594L2.08594 9.16406L11.4609 18.5391L12 19.0547L12.5391 18.5391L21.9141 9.16406L20.8359 8.08594L12 16.9219L3.16406 8.08594Z",fill:"black"},null,-1)),K=[J],Q={class:"accordion-content"},R={class:"courseCodeTwo"},X={class:"location"};function Y(t,ee,M,te,c,j){return d(),l("div",V,[(d(!0),l(B,null,E(M.items,(o,n)=>(d(),l("div",{key:n,class:"accordion-item"},[e("div",{class:u(["accordion-header",{active:c.activeItem===n}]),onClick:oe=>j.toggleItem(n)},[e("div",null,i(o.title),1),e("div",G,[e("span",Z,i(o.courseCode),1),e("span",null,[(d(),l("svg",{class:u(["arrow",{rotate:c.activeItem===n}]),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},K,2))])])],10,z),m(e("div",Q,[e("div",R,i(o.courseCode),1),g(" "+i(o.content),1)],512),[[p,c.activeItem===n]]),m(e("div",X,[g(i(o.locationTitle)+" ",1),e("b",null,[e("u",null,i(o.location),1)])],512),[[p,c.activeItem===n]])]))),128))])}const $=D(F,[["render",Y],["__scopeId","data-v-e0657728"]]);F.__docgenInfo={displayName:"Accordion",description:"An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.",tags:{},exportName:"default",props:[{name:"items",type:{name:"array"},required:!0}],sourceFiles:["/Users/ryan/Documents/GitHub/Storybook_Tail/src/components/Accordion.vue"]};const se={title:"Components/Accordion",component:$,tags:["autodocs"]},s={args:{items:[{title:"Title #1",content:"This is the contents for Accordion item #1"}]}},r={args:{items:[{title:"Title #1",content:"This is the contents for Accordion item #1"},{title:"Title #2",content:"This is the contents for Accordion item #2"},{title:"Title #3",content:"This is the contents for Accordion item #3"}]}},a={args:{items:[{title:"Title #1",courseCode:"Subtitle #1",content:"This is the contents for Accordion item #1"},{title:"Title #2",courseCode:"Subtitle #2",content:"This is the contents for Accordion item #2"},{title:"Title #3",courseCode:"Subtitle #3",content:"This is the contents for Accordion item #3"}]}},h={args:{items:[{title:"Manage personal stressors in the work environment",courseCode:"HLTWHS006",content:"This unit describes the skills and knowledge required to maintain health and wellbeing by preventing and managing personal stress. This unit applies to work in a range of health and community services settings, in particular work roles that operate in high stress situations and circumstances. ",locationTitle:"Offered at 3 locations: ",location:"Ultimo, Orange, St Leonards"},{title:"Follow safe work practices for direct client care",courseCode:"HLTWHS002",content:"This unit describes the skills and knowledge required for a worker to participate in safe work practices to ensure their own health and safety, and that of others in work environments that involve caring directly for clients. It has a focus on maintaining safety of the worker, the people being supported and other community members",locationTitle:"Offered at 2 locations: ",location:"Ultimo, St Leonards"},{title:"Confirm physical health status",courseCode:"HLTAAP002",content:"This unit describes the skills and knowledge required to obtain and interpret information about client health status and to check a client’s physical health. It requires a detailed knowledge of anatomy and physiology. It applies to individuals working directly with clients and who assist in the provision of health care services. Some disciplines may be subject to state/territory regulatory determination regarding delegation and supervision.",locationTitle:"Offered at 3 locations: ",location:"Ultimo, Orange, St Leonards"}]}};var f,_,v,w,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Title #1',
      content: 'This is the contents for Accordion item #1'
    }]
  }
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:"Only one section can be open at the time",...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var y,k,b,S,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Title #1',
      content: 'This is the contents for Accordion item #1'
    }, {
      title: 'Title #2',
      content: 'This is the contents for Accordion item #2'
    }, {
      title: 'Title #3',
      content: 'This is the contents for Accordion item #3'
    }]
  }
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:"Each section can be expanded without closing the others",...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var C,I,L,O,H;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Title #1',
      courseCode: 'Subtitle #1',
      content: 'This is the contents for Accordion item #1'
    }, {
      title: 'Title #2',
      courseCode: 'Subtitle #2',
      content: 'This is the contents for Accordion item #2'
    }, {
      title: 'Title #3',
      courseCode: 'Subtitle #3',
      content: 'This is the contents for Accordion item #3'
    }]
  }
}`,...(L=(I=a.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"Each section can be expanded without closing the others with subtitle",...(H=(O=a.parameters)==null?void 0:O.docs)==null?void 0:H.description}}};var q,x,U;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Manage personal stressors in the work environment',
      courseCode: 'HLTWHS006',
      content: 'This unit describes the skills and knowledge required to maintain health and wellbeing by preventing and managing personal stress. This unit applies to work in a range of health and community services settings, in particular work roles that operate in high stress situations and circumstances. ',
      locationTitle: 'Offered at 3 locations: ',
      location: 'Ultimo, Orange, St Leonards'
    }, {
      title: 'Follow safe work practices for direct client care',
      courseCode: 'HLTWHS002',
      content: 'This unit describes the skills and knowledge required for a worker to participate in safe work practices to ensure their own health and safety, and that of others in work environments that involve caring directly for clients. It has a focus on maintaining safety of the worker, the people being supported and other community members',
      locationTitle: 'Offered at 2 locations: ',
      location: 'Ultimo, St Leonards'
    }, {
      title: 'Confirm physical health status',
      courseCode: 'HLTAAP002',
      content: 'This unit describes the skills and knowledge required to obtain and interpret information about client health status and to check a client’s physical health. It requires a detailed knowledge of anatomy and physiology. It applies to individuals working directly with clients and who assist in the provision of health care services. Some disciplines may be subject to state/territory regulatory determination regarding delegation and supervision.',
      locationTitle: 'Offered at 3 locations: ',
      location: 'Ultimo, Orange, St Leonards'
    }]
  }
}`,...(U=(x=h.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};const re=["Single_Accordion","Multi_Accordion","variation_with_subtitle","example_Subjects"];export{r as Multi_Accordion,s as Single_Accordion,re as __namedExportsOrder,se as default,h as example_Subjects,a as variation_with_subtitle};
//# sourceMappingURL=Accordion.stories-6b1cc920.js.map
