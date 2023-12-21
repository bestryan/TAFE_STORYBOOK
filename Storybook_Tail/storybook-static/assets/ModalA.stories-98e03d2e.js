import{B as g}from"./Button-5ed09710.js";import{R as C}from"./Radio-ee50baad.js";import{b as d,d as s,e as t,F as m,g as p,t as e,f as l,x as v,o as a}from"./vue.esm-bundler-5a9141cb.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const _={components:{Button:g,Radio:C},props:{lists:Array,items:Array,content_one:String,content_two:String,options:Array}},b={class:"w-[25.5rem] h-[57rem] shadow-xl"},x={class:"border-t-8 border-tafe-controls-green"},B=v('<div class="my-6 py-2 px-8 text-center leading-7 text-[1.375rem] font-bold text-tafe-controls-green"> Payment successful </div><div class="flex justify-center mb-8"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><g clip-path="url(#clip0_2871_15151)"><path d="M4.03446e-06 28.9944C0.00835737 12.9783 12.9672 0.0167227 28.9889 1.60188e-05C45.0161 -0.0166907 58.0557 13.0368 58 29.039C57.9443 45.0858 44.9744 58.0279 28.9777 58C12.956 57.9694 -0.0083493 44.9939 4.03446e-06 28.9944ZM29.0473 3.24111C14.8133 3.21048 3.27173 14.713 3.24388 28.9527C3.21882 43.1895 14.713 54.7255 28.9555 54.7561C43.1923 54.7868 54.7283 43.2898 54.7561 29.0446C54.784 14.7993 43.2981 3.27452 29.0473 3.24389V3.24111Z" fill="#12924D"></path><path d="M24.2665 37.7236C24.8011 37.1612 25.2772 36.66 25.7506 36.1532C31.7316 29.774 37.7125 23.3949 43.688 17.0101C44.1195 16.5507 44.579 16.1804 45.2417 16.2416C45.8598 16.3001 46.3443 16.6064 46.5949 17.1939C46.8622 17.8232 46.7843 18.433 46.3276 18.9481C45.7262 19.6247 45.0969 20.2735 44.4787 20.9334C38.2277 27.6022 31.9794 34.2681 25.7283 40.9341C24.7231 42.0061 23.8237 42.0145 22.8352 40.9592C19.2322 37.1194 19.3046 37.2726 15.7098 33.4244C15.4453 33.1404 15.178 32.8258 15.0332 32.4722C14.7631 31.8095 15.0527 31.0326 15.6375 30.6289C16.2389 30.214 16.9963 30.2363 17.5754 30.704C17.7536 30.8488 17.9096 31.027 18.0683 31.1941C21.1479 34.4742 20.552 33.7642 23.6316 37.047C23.8209 37.2475 24.0131 37.448 24.272 37.7181L24.2665 37.7236Z" fill="#12924D"></path></g><defs><clipPath id="clip0_2871_15151"><rect width="58" height="58" fill="white"></rect></clipPath></defs></svg></div>',2),M={class:"mt-4 mx-8"},k=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"344",height:"2",viewBox:"0 0 344 2",fill:"none",class:"my-4"},[t("path",{d:"M0 1H345",stroke:"black"})],-1),A={class:"my-6 px-8 text-center"},S={class:"mb-4"},F={class:"flex justify-center gap-6 my-6"},T={class:"flex justify-center mb-12"};function D(V,R,n,E,L,N){const c=d("Button"),f=d("Radio");return a(),s("div",b,[t("div",x,[B,t("div",M,[(a(!0),s(m,null,p(n.lists,(o,r)=>(a(),s("div",{key:r,class:"flex justify-between py-2"},[t("div",null,e(o.title),1),t("div",null,[t("b",null,e(o.content),1)])]))),128)),k,(a(!0),s(m,null,p(n.items,(o,r)=>(a(),s("div",{key:r,class:"flex justify-between py-2"},[t("div",null,e(o.title),1),t("div",null,[t("b",null,e(o.content),1)])]))),128))]),t("div",A,[t("div",S,e(n.content_one),1),t("div",null,e(n.content_two),1)]),t("div",F,[l(c,{class:"w-[6.8rem]",secondary:"",label:"Print"}),l(c,{class:"w-[6.8rem]",primary:"",label:"Next step"})]),t("div",T,[l(f,{name:"name",options:n.options},null,8,["options"])])])])}const P=w(_,[["render",D]]);_.__docgenInfo={exportName:"default",displayName:"ModalA",description:"",tags:{},props:[{name:"lists",type:{name:"array"}},{name:"items",type:{name:"array"}},{name:"content_one",type:{name:"string"}},{name:"content_two",type:{name:"string"}},{name:"options",type:{name:"array"}}],sourceFiles:["/Users/ryan/Documents/GitHub/TAFE_STORYBOOK/Storybook_Tail/src/components/ModalA.vue"]};const Z={title:"Enrol Modals/Modal A",component:P,tags:["autodocs"]},i={args:{lists:[{title:"Date",content:"00/00/2023"},{title:"Student",content:"First Last"},{title:"Course",content:"Bachelor of Property Valuation"}],items:[{title:"Card holder",content:"First Last"},{title:"Company name",content:"The Chocolate Factory"},{title:"Payment type",content:"Mastercard"},{title:"Amount paid",content:"$31,440.00"},{title:"Receipt number",content:"HE20507V02"}],content_one:"This transaction is still being processed. We are waiting for your bank to authorise payment from your nominated card.",content_two:"This may take up to 2 business days. You will be notified via email on the outcome of this transaction.",options:[{label:"Don’t show again",value:"no"}]}};var u,h,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    lists: [{
      title: 'Date',
      content: '00/00/2023'
    }, {
      title: 'Student',
      content: 'First Last'
    }, {
      title: 'Course',
      content: 'Bachelor of Property Valuation'
    }],
    items: [{
      title: 'Card holder',
      content: 'First Last'
    }, {
      title: 'Company name',
      content: 'The Chocolate Factory'
    }, {
      title: 'Payment type',
      content: 'Mastercard'
    }, {
      title: 'Amount paid',
      content: '$31,440.00'
    }, {
      title: 'Receipt number',
      content: 'HE20507V02'
    }],
    content_one: 'This transaction is still being processed. We are waiting for your bank to authorise payment from your nominated card.',
    content_two: 'This may take up to 2 business days. You will be notified via email on the outcome of this transaction.',
    options: [{
      label: 'Don’t show again',
      value: 'no'
    }]
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const W=["Successful"];export{i as Successful,W as __namedExportsOrder,Z as default};
