import{b as o,F as A,d as E,n as F,o as i,e,w as n,v as m,t as l,g as T}from"./vue.esm-bundler-2168e16a.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const S={props:{items:{type:Array,required:!0},isNumbered:{type:Boolean,default:!0},colour:{type:String,default:"#3b80d0"}},computed:{listStyleClass(){return this.isNumbered?"numbered-list":"dotted-list"}}},h={class:"box"},x={class:"list-marker square"},C={class:"list-text"};function k(w,D,s,q,V,f){return i(),o("ul",{class:F(f.listStyleClass)},[(i(!0),o(A,null,E(s.items,(v,u)=>(i(),o("li",{key:u},[e("div",h,[n(e("div",{class:"list-marker number"},l(u+1+"."),513),[[m,s.isNumbered]]),n(e("span",x,[e("div",{class:"sq",style:T({background:s.colour})},null,4)],512),[[m,!s.isNumbered]]),e("div",C,l(v),1)])]))),128))],2)}const B=W(S,[["render",k],["__scopeId","data-v-8c9877e3"]]);S.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0},{name:"isNumbered",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"colour",type:{name:"string"},defaultValue:{func:!1,value:"'#3b80d0'"}}],sourceFiles:["/Users/ryan/Documents/GitHub/Storybook_Tail/src/components/List.vue"]};const P={title:"Components/List",component:B,tags:["autodocs"],argTypes:{colour:{control:"color"}}},r={args:{items:["Lorem ipsum","Lorem ipsum","Lorem ipsum"],isNumbered:!1}},t={args:{items:["Lorem ipsum","Lorem ipsum","Lorem ipsum"],isNumbered:!0}},a={args:{items:["TAFE NSW Disability Support Service","TAFE NSW Language, Literacy and Numeracy (LLN) support","TAFE NSW Aboriginal Support; Learner support (ABE)","TAFE NSW Careers, Counselling and Pathways Service","TAFE NSW Libraries"],isNumbered:!1}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: false
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var _,b,L;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: true
  }
}`,...(L=(b=t.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var g,y,N;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: ['TAFE NSW Disability Support Service', 'TAFE NSW Language, Literacy and Numeracy (LLN) support', 'TAFE NSW Aboriginal Support; Learner support (ABE)', 'TAFE NSW Careers, Counselling and Pathways Service', 'TAFE NSW Libraries'],
    isNumbered: false
  }
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const G=["bullet_list","number_list","example"];export{G as __namedExportsOrder,r as bullet_list,P as default,a as example,t as number_list};
//# sourceMappingURL=List.stories-bed57eff.js.map
