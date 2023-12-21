import{d as s,e,t as o,F as C,g as A,o as r,p as S,j as N}from"./vue.esm-bundler-5a9141cb.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const H={name:"Breadcrumb",props:{items:{type:Array,required:!0}},computed:{breadcrumbs(){return this.items.map((a,x)=>({label:a.label,path:a.path}))}},methods:{navigate(a){this.$emit("navigate",a)}}},i=a=>(S("data-v-b6bb6b95"),a=a(),N(),a),I={class:"breadcrumb"},D={class:"small"},F={class:"namet font"},M=i(()=>e("svg",{class:"back-icon",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"black"},[e("path",{d:"M21.4062 4.21875L19.9496 2.78125L7.28292 15.2812L6.58625 16L7.28292 16.7188L19.9496 29.2188L21.4062 27.7812L9.46792 16L21.4062 4.21875Z",fill:"black"})],-1)),O={key:0},Z={key:1},E={class:"breadcrumb-one"},T=i(()=>e("svg",{class:"home-icon",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12 1.94531L11.4609 2.46094L1.71094 12.2109L2.78906 13.2891L3.75 12.3281V21H10.5V13.5H13.5V21H20.25V12.3281L21.2109 13.2891L22.2891 12.2109L12.5391 2.46094L12 1.94531ZM12 4.07812L18.75 10.8281V19.5H15V12H9V19.5H5.25V10.8281L12 4.07812Z",width:"32",height:"32",viewBox:"0 0 32 32",fill:"black"})],-1)),q={class:"namet"},j=i(()=>e("svg",{class:"next-icon",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M5.39062 13.8906L6.10938 14.6094L12.3594 8.35938L12.7031 8L12.3594 7.64063L6.10938 1.39062L5.39063 2.10938L11.2813 8L5.39062 13.8906Z",width:"32",height:"32",viewBox:"0 0 32 32",fill:"black"})],-1)),G=["onClick"],K={key:1};function R(a,x,Y,z,J,t){return r(),s("div",null,[e("ol",I,[e("div",D,[e("div",F,[M,e("div",null,[t.breadcrumbs.length===1?(r(),s("span",O,o("Back to Home"))):(r(),s("span",Z,o("Back to "+t.breadcrumbs[t.breadcrumbs.length-2].label),1))])])]),e("div",E,[T,(r(!0),s(C,null,A(t.breadcrumbs,(d,h)=>(r(),s("li",{key:h,class:"breadcrumb-item"},[e("div",q,[j,h<t.breadcrumbs.length-1?(r(),s("a",{key:0,onClick:P=>t.navigate(h)},o(d.label),9,G)):(r(),s("span",K,o(d.label),1))])]))),128))])])])}const U=V(H,[["render",R],["__scopeId","data-v-b6bb6b95"]]);H.__docgenInfo={displayName:"Breadcrumb",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"array"},required:!0}],events:[{name:"navigate",type:{names:["undefined"]}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/Breadcrumb.vue"]};const X={title:"Components/Breadcrumb",component:U,tags:["autodocs"]},n={args:{items:[{label:"Course Areas",path:"/courseareas"}]}},c={args:{items:[{label:"Course Areas",path:"/courseareas"},{label:"Healthcare",path:"/courseareas/healthcare"}]}},l={args:{items:[{label:"Course Areas",path:"/courseareas"},{label:"Healthcare",path:"/courseareas/healthcare"},{label:"Nursing",path:"/courseareas/healthcare/nursing"}]}},u={args:{items:[{label:"Course Areas",path:"/courseareas"},{label:"Healthcare",path:"/courseareas/healthcare"},{label:"Nursing",path:"/courseareas/healthcare/nursing"},{label:"Diploma of Nursing",path:"/courseareas/healthcare/nursing/dp"}]}};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Course Areas',
      path: '/courseareas'
    }]
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var _,g,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Course Areas',
      path: '/courseareas'
    }, {
      label: 'Healthcare',
      path: '/courseareas/healthcare'
    }]
  }
}`,...(L=(g=c.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var v,w,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Course Areas',
      path: '/courseareas'
    }, {
      label: 'Healthcare',
      path: '/courseareas/healthcare'
    }, {
      label: 'Nursing',
      path: '/courseareas/healthcare/nursing'
    }]
  }
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,y,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Course Areas',
      path: '/courseareas'
    }, {
      label: 'Healthcare',
      path: '/courseareas/healthcare'
    }, {
      label: 'Nursing',
      path: '/courseareas/healthcare/nursing'
    }, {
      label: 'Diploma of Nursing',
      path: '/courseareas/healthcare/nursing/dp'
    }]
  }
}`,...(B=(y=u.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const $=["Level_one","Level_two","Level_three","Level_four"];export{u as Level_four,n as Level_one,l as Level_three,c as Level_two,$ as __namedExportsOrder,X as default};
