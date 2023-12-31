import{d as o,e,n as a,t as r,s as A,o as l}from"./vue.esm-bundler-5a9141cb.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const S={props:{type:String,message:String,title:String,link:String,icon:String}},I={class:"icon"},q=["d"],B={class:"title"},C={class:"message"};function E(N,O,t,R,D,V){return l(),o("div",{class:a(["alert",t.type])},[e("div",I,[(l(),o("svg",{class:a(["icon-svg",t.type]),xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},[e("path",{d:t.icon,fill:"currentColor"},null,8,q)],2))]),e("div",null,[e("div",B,r(t.title),1),e("div",C,[A(r(t.message)+" ",1),e("b",null,[e("u",null,r(t.link),1)])])])],2)}const T=F(S,[["render",E],["__scopeId","data-v-4ea65f9a"]]);S.__docgenInfo={description:"In-page notifications are used to contextually inform users of important information or status of an interaction.",tags:{},exportName:"default",displayName:"Alert",props:[{name:"type",type:{name:"string"}},{name:"message",type:{name:"string"}},{name:"title",type:{name:"string"}},{name:"link",type:{name:"string"}},{name:"icon",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/Alert.vue"]};const H={title:"Components/Alert/In-page Alert",component:T,tags:["autodocs"],argTypes:{type:{options:["information","success","error"],control:{type:"radio"}}}},s={args:{type:"information",title:"Instruction to aid progress/ provide confidence",message:"Further explanation if required with next steps for user to action or seek assistance with",link:"links if available"}},i={args:{type:"success",title:"Confirmation of successful action",message:"Further explanation if required with next steps for user to action with",link:"links if available"}},n={args:{type:"error",title:"Reason for hard stop",message:"Further explanation if required with next steps for user to action or seek assistance with",link:"links if available"}};var c,u,d,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'information',
    title: 'Instruction to aid progress/ provide confidence',
    message: 'Further explanation if required with next steps for user to action or seek assistance with',
    link: 'links if available'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:`<ul>
<li>use for information the user should know, but is not critical</li>
<li>use for tips or information which the user can benefit from</li>
<li>use for messages which don't require too much attention or action</li>
<li>don't use in response to a user action</li>
</ul>`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var f,h,g,_,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Confirmation of successful action',
    message: 'Further explanation if required with next steps for user to action with',
    link: 'links if available'
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`<ul>
<li>use to inform the user that an action was performed successfully (e.g. submitting a form or registering an account).
</li>
</ul>`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.description}}};var v,w,k,x,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Reason for hard stop',
    message: 'Further explanation if required with next steps for user to action or seek assistance with',
    link: 'links if available'
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:`<ul>
<li>use where a system event has failed</li>
<li>use when the user has made an error</li>
<li>use where the user is blocked until the issue is resolved, or the issue needs resolving immediately</li>
<li>provide sufficient information on the issue and resolution to fix the issue</li>
<li>don't use for validation or validation summary.</li>
</ul>`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};const K=["Information_alert","Success_alert","Error_alert"];export{n as Error_alert,s as Information_alert,i as Success_alert,K as __namedExportsOrder,H as default};
