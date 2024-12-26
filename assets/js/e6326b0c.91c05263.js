"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[44390],{74802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(74848),o=n(28453);const i={id:"blocks-attributes",title:"Attributes"},r=void 0,a={id:"legacy/v8/basics/blocks-attributes",title:"Attributes",description:"docs-source",source:"@site/docs/legacy/v8/basics/blocks-attributes.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/blocks-attributes",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-attributes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-attributes",title:"Attributes"},sidebar:"docs",previous:{title:"Component Manifest",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-component-manifest"},next:{title:"Component in a Block",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-component-in-block"}},c={},l=[{value:"Structure",id:"structure",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsxs)(t.p,{children:["If you were to reference the native ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/",children:"WordPress documentation"})," about attributes in blocks, you can see that they support different types of attributes. In this chapter, we want to point out that you should avoid using objects for your attributes."]}),"\n",(0,s.jsxs)(t.p,{children:["The reason for this is that you can't control what key of that object is stored in the database once the attribute changes. When you change one key, the ",(0,s.jsx)(t.code,{children:"setAttributes"})," method will store the entire object in the database and you'll lose the best feature of block editor - the default attributes."]}),"\n",(0,s.jsx)(t.p,{children:"You can also look at this from the Reacts perspective: setting the entire object every time the key changes is bad for performance."}),"\n",(0,s.jsx)(t.p,{children:"Yes, you can use objects, but we recommend using them only when you want to store multiple keys simultaneously."}),"\n",(0,s.jsx)(t.h3,{id:"structure",children:"Structure"}),"\n",(0,s.jsxs)(t.p,{children:["All attributes in the block/component must begin with the exact same prefix as it is defined in the ",(0,s.jsx)(t.code,{children:"blockName"})," or ",(0,s.jsx)(t.code,{children:"componentName"}),". The reason behind this naming standard is that our helpers can automatically resolve and know what prefix to use when renaming the component name in the dependency tree. For more details about this feature please check ",(0,s.jsx)(t.a,{href:"blocks-component-in-block",children:"this chapter"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Block example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "blockName": "heading",\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"or"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "blockName": "intro",\n  "attributes": {\n    "introContent": {\n      "type": "string"\n    },\n    "introLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Component example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "componentName": "heading",\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"or"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "componentName": "description",\n  "attributes": {\n    "descriptionContent": {\n      "type": "string"\n    },\n    "descriptionLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If you have a block/component that contains multiple words you should name it with a dash just like the block/component folder name, but the attributes must follow the ",(0,s.jsx)(t.code,{children:"camelCase"})," naming standard like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "componentName": "intro-heading",\n  "attributes": {\n    "introHeadingContent": {\n      "type": "string"\n    },\n    "introHeadingLevel": {\n      "type": "integer",\n      "default": 2\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);