"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[80480],{29251:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>b,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=s(74848),i=s(28453);const n={id:"blocks-attributes",title:"Attributes",sidebar_label:"Attributes"},r=void 0,c={id:"legacy/v5/basics/blocks-attributes",title:"Attributes",description:"docs-source",source:"@site/docs/legacy/v5/basics/blocks-attributes.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/blocks-attributes",permalink:"/buanarchery.github.io/docs/legacy/v5/basics/blocks-attributes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-attributes",title:"Attributes",sidebar_label:"Attributes"},sidebar:"docs",previous:{title:"Component Manifest",permalink:"/buanarchery.github.io/docs/legacy/v5/basics/blocks-component-manifest"},next:{title:"Component in a Block",permalink:"/buanarchery.github.io/docs/legacy/v5/basics/blocks-component-in-block"}},a={},l=[];function u(t){const e={a:"a",code:"code",img:"img",p:"p",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/",children:(0,o.jsx)(e.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsxs)(e.p,{children:["If you were to reference the native ",(0,o.jsx)(e.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/",children:"WordPress documentation"})," about attributes in blocks, you can see that they support different types of attributes. In this chapter, we want to point out that you should avoid using objects for your attributes."]}),"\n",(0,o.jsxs)(e.p,{children:["The reason for this is that you can't control what key of that object is stored in the database once the attribute changes. When you change one key, the ",(0,o.jsx)(e.code,{children:"setAttributes"})," method will store the entire object in the database and you'll lose the best feature of block editor - the default attributes."]}),"\n",(0,o.jsx)(e.p,{children:"You can also look at this from the Reacts perspective: setting the entire object every time the key changes is bad for performance."}),"\n",(0,o.jsx)(e.p,{children:"Yes, you can use objects, but we recommend using them only when you want to store multiple keys simultaneously."})]})}function b(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var o=s(96540);const i={},n=o.createContext(i);function r(t){const e=o.useContext(n);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(n.Provider,{value:e},t.children)}}}]);