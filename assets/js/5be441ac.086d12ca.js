"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[35512],{70076:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(74848),n=t(28453);const i={id:"blocks-wrapper",title:"Wrapper"},r=void 0,a={id:"legacy/v8/basics/blocks-wrapper",title:"Wrapper",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-wrapper.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-wrapper",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-wrapper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-wrapper",title:"Wrapper"},sidebar:"docs",previous:{title:"Component in a Block",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-component-in-block"},next:{title:"Variations",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-variations"}},p={},l=[{value:"Where can I find wrapper options?",id:"where-can-i-find-wrapper-options",level:2},{value:"Additional development options",id:"additional-development-options",level:2},{value:"wrapperUse",id:"wrapperuse",level:3},{value:"wrapperUseShowControl",id:"wrapperuseshowcontrol",level:3},{value:"wrapperUseSimple",id:"wrapperusesimple",level:3},{value:"wrapperUseSimpleShowControl",id:"wrapperusesimpleshowcontrol",level:3},{value:"wrapperDisable",id:"wrapperdisable",level:3},{value:"wrapperParentClass",id:"wrapperparentclass",level:3},{value:"Wrapper limitations",id:"wrapper-limitations",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,s.jsx)(o.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsx)(o.p,{children:"The wrapper is our best and most powerful feature. In a nutshell, the wrapper is nothing more than a high order component (parent component)."}),"\n",(0,s.jsx)(o.p,{children:"When setting up block registration, we made it so that every block view (PHP part) passes through the wrapper component before it is registered. This gives us the ability to set multiple shared attributes in one component."}),"\n",(0,s.jsx)(o.p,{children:"The wrapper is designed to be the ultimate top-level component that controls how your block behaves in the website layout. The wrapper is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an ability to add your custom attributes and fine-tune the wrapper to your project's needs."}),"\n",(0,s.jsx)(o.h2,{id:"where-can-i-find-wrapper-options",children:"Where can I find wrapper options?"}),"\n",(0,s.jsxs)(o.p,{children:["When you open your block editor in the sidebar before every blocks options you will see a ",(0,s.jsx)(o.code,{children:"layout"})," panel that controls the wrapper options:"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Wrapper Closed",src:t(63532).A+"",width:"770",height:"664"})}),"\n",(0,s.jsx)(o.p,{children:"We also made a helper button that describes what each wrapper options does when the layout panel is open:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Wrapper Help Button",src:t(67535).A+"",width:"315",height:"187"})}),"\n",(0,s.jsxs)(o.p,{children:["Here are some of the descriptions that we created but you can add your own icons and options to this modal by providing the additions properties to the ",(0,s.jsx)(o.code,{children:"HelpModal"})," component:"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Wrapper Modal",src:t(91513).A+"",width:"764",height:"740"})}),"\n",(0,s.jsx)(o.h2,{id:"additional-development-options",children:"Additional development options"}),"\n",(0,s.jsxs)(o.p,{children:["Along with the provided details and descriptions for the standard options in the ",(0,s.jsx)(o.code,{children:"HelpModal"})," we have some development specific options for you to check."]}),"\n",(0,s.jsx)(o.h3,{id:"wrapperuse",children:"wrapperUse"}),"\n",(0,s.jsxs)(o.p,{children:["This attribute controls the usage of the wrapper component. It behaves the same way as described in ",(0,s.jsx)(o.a,{href:"blocks-component-in-block#i-dont-need-all-the-component-options-in-my-block",children:"this chapter"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"wrapperuseshowcontrol",children:"wrapperUseShowControl"}),"\n",(0,s.jsxs)(o.p,{children:["This attribute controls whether you will see the options for block use in the block editor. It behaves the same way as described in ",(0,s.jsx)(o.a,{href:"blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-component-options-in-my-block",children:"this chapter"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"wrapperusesimple",children:"wrapperUseSimple"}),"\n",(0,s.jsxs)(o.p,{children:["We wrapped some options in a specific condition and we call it ",(0,s.jsx)(o.code,{children:"wrapperUseSimple"}),". In general, this attribute is set to ",(0,s.jsx)(o.code,{children:"true"})," when you only want the simplified options on your block. Natively, it is used inside all the inner blocks in the column block because we don't need wrappers inside wrappers inside wrappers (and so on). It's a good rule of thumb to use a simple wrapper in all the inner blocks."]}),"\n",(0,s.jsx)(o.h3,{id:"wrapperusesimpleshowcontrol",children:"wrapperUseSimpleShowControl"}),"\n",(0,s.jsxs)(o.p,{children:["This attribute controls whether you are going to see options in the block editor to use the simple option. It behaves the same way as described in ",(0,s.jsx)(o.a,{href:"blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-component-options-in-my-block",children:"this chapter"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"wrapperdisable",children:"wrapperDisable"}),"\n",(0,s.jsxs)(o.p,{children:["This attribute disables the wrapper completely. When this attribute is set to ",(0,s.jsx)(o.code,{children:"true"}),", you will not have any wrapper options in your block."]}),"\n",(0,s.jsx)(o.h3,{id:"wrapperparentclass",children:"wrapperParentClass"}),"\n",(0,s.jsx)(o.p,{children:"This attribute is interesting to use if, for example, you have a carousel block with inner blocks. To provide the markup necessary for the carousel script to work, you need to add some items selector (a div). With this key, you can pass a parent item class, and all of your items will be wrapped with this selector and a class."}),"\n",(0,s.jsx)(o.h2,{id:"wrapper-limitations",children:"Wrapper limitations"}),"\n",(0,s.jsxs)(o.p,{children:["In wrapper you ",(0,s.jsx)(o.strong,{children:"can't"})," use ",(0,s.jsx)(o.code,{children:"components"})," key in the manifest to automaticity add additional components like you can in the blocks or components. If you want to add component to a wrapper you must manually add it the old fashion way."]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},63532:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/wrapper-closed-6d555371a14a7f0576d2334e591904f4.webp"},67535:(e,o,t)=>{t.d(o,{A:()=>s});const s="data:image/webp;base64,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"},91513:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/wrapper-modal-7e522af5e936b203331d1ab5808fb70d.webp"},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var s=t(96540);const n={},i=s.createContext(n);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);