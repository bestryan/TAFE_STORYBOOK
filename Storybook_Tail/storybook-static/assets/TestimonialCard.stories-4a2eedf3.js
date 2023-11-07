import{b as _,e,g as y,t as s,o as b}from"./vue.esm-bundler-2168e16a.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const r=""+new URL("testimonial-d5198e47.png",import.meta.url).href,S=""+new URL("Eun-Ah-Kung-a38b10bb.jpg",import.meta.url).href;const u={props:{heading:String,subheading:String,content:String,image:String},methods:{getImageUrlByName(o){return{lady1:r,lady2:S}[o]||r}}},v={class:"test-card"},w={class:"content-card"},T={class:"heading"},N={class:"subheading"},k={class:"content-content"};function x(o,p,a,I,E,h){return b(),_("div",v,[e("div",{style:y({background:`url(${h.getImageUrlByName(a.image)}) no-repeat center top/cover`}),class:"testimonial-img"},null,4),e("div",w,[e("div",T,s(a.heading),1),e("div",N,s(a.subheading),1),e("div",k,s(a.content),1)])])}const C=f(u,[["render",x],["__scopeId","data-v-6c9695df"]]);u.__docgenInfo={exportName:"default",displayName:"TestimonialCard",description:"",tags:{},props:[{name:"heading",type:{name:"string"}},{name:"subheading",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"image",type:{name:"string"}}],sourceFiles:["/Users/ryan/Documents/GitHub/Storybook_Tail/src/components/TestimonialCard.vue"]};const K={title:"Components/Card/Testimonial Card",component:C,tags:["autodocs"],argTypes:{image:{options:["lady1","lady2"],control:{type:"radio"}}}},n={args:{heading:"Heading",subheading:"Subheading",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.",image:"lady1"}},t={args:{heading:"Eunah Kyung",subheading:"Korea",content:"I find myself well-prepared and informed, confident and capable. I highly recommend taking courses at TAFE NSW to people like me, who want to start a new career or a dream job at the right place.",image:"lady2"}};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.',
    image: 'lady1'
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    heading: 'Eunah Kyung',
    subheading: 'Korea',
    content: 'I find myself well-prepared and informed, confident and capable. I highly recommend taking courses at TAFE NSW to people like me, who want to start a new career or a dream job at the right place.',
    image: 'lady2'
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const L=["default_card","example"];export{L as __namedExportsOrder,K as default,n as default_card,t as example};
//# sourceMappingURL=TestimonialCard.stories-4a2eedf3.js.map
