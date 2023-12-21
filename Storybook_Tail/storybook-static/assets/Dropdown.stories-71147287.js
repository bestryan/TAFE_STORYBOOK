import{d as s,e as o,s as f,t as c,F as D,g as k,m as x,o as a,n as y,p as L,j as S}from"./vue.esm-bundler-5a9141cb.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const w={props:{options:Array},data(){return{isDropdownOpen:!1,selectedOption:null}},methods:{toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},selectOption(e){this.selectedOption=e,this.isDropdownOpen=!0,this.$emit("change",e)}}},g=e=>(L("data-v-256c0a0b"),e=e(),S(),e),C=g(()=>o("div",{class:"text-base font-bold mb-2"},"Label",-1)),F={class:"selected-option flex justify-between"},I=g(()=>o("span",null,[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",class:"w-6 h-6"},[o("path",{d:"M3.16406 8.08594L2.08594 9.16406L11.4609 18.5391L12 19.0547L12.5391 18.5391L21.9141 9.16406L20.8359 8.08594L12 16.9219L3.16406 8.08594Z",fill:"black"})])],-1)),N={key:0,class:"dropdown-options show"},T=["onClick"];function E(e,i,O,R,n,r){return a(),s("div",null,[C,o("div",{class:"dropdown",onClick:i[0]||(i[0]=(...t)=>r.toggleDropdown&&r.toggleDropdown(...t))},[o("div",F,[f(c(n.selectedOption?n.selectedOption.label:"Please select")+" ",1),I]),n.isDropdownOpen?(a(),s("div",N,[(a(!0),s(D,null,k(O.options,(t,h)=>(a(),s("div",{key:h,onClick:U=>r.selectOption(t),class:y({selected:n.selectedOption&&n.selectedOption.value===t.value})},c(t.label),11,T))),128))])):x("",!0)])])}const G=B(w,[["render",E],["__scopeId","data-v-256c0a0b"]]);w.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"options",type:{name:"array"}}],events:[{name:"change",type:{names:["undefined"]}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/Dropdown.vue"]};const A={title:"Forms and Tables/Dropdown",component:G,tags:["autodocs"]},l={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"}]}},p={args:{options:[{label:"Ultimo",value:"option1"},{label:"St George",value:"option2"},{label:"Rankwick",value:"option3"},{label:"Liverpool",value:"option4"}]}};var d,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }, {
      label: 'Option 4',
      value: 'option4'
    }]
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,_,b;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Ultimo',
      value: 'option1'
    }, {
      label: 'St George',
      value: 'option2'
    }, {
      label: 'Rankwick',
      value: 'option3'
    }, {
      label: 'Liverpool',
      value: 'option4'
    }]
  }
}`,...(b=(_=p.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const z=["dropdown","example"];export{z as __namedExportsOrder,A as default,l as dropdown,p as example};
