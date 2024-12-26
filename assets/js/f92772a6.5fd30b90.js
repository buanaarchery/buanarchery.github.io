"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[86207],{34432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453);const o={id:"blocks-structure-manifest",title:"Manifest Structure"},i=void 0,c={id:"legacy/v4/guides/blocks-structure-manifest",title:"Manifest Structure",description:"This file contains all the configuration required for a block to work. It's used in WordPress registerBlockType method to register a block. Using manifest.json we can provide a configuration in JavaScript and PHP part of the block in one file.",source:"@site/docs/legacy/v4/guides/blocks-structure-manifest.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-structure-manifest",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/blocks-structure-manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-structure-manifest",title:"Manifest Structure"},sidebar:"docs",previous:{title:"Component Structure",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/blocks-structure-component"},next:{title:"Creating Block from Components",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/blocks-block-from-components"}},a={},l=[{value:"Example",id:"example",level:3},{value:"attributes",id:"attributes",level:3},{value:"hasInnerBlocks",id:"hasinnerblocks",level:3},{value:"hasWrapper",id:"haswrapper",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This file contains all the configuration required for a block to work. It's used in WordPress ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/",children:(0,s.jsx)(t.code,{children:"registerBlockType"})})," method to register a block. Using ",(0,s.jsx)(t.code,{children:"manifest.json"})," we can provide a configuration in JavaScript and PHP part of the block in one file."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "blockName": "heading",\n  "title": "Heading",\n  "description" : "Heading block with custom settings.",\n  "category": "common",\n  "icon": {\n    "src": "heading"\n  },\n  "keywords": [\n    "Header",\n    "Title"\n  ],\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "level": {\n      "type": "number",\n      "default": 2\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Most of the keys are the same as ",(0,s.jsx)(t.code,{children:"registerBlockType"})," method, but we also have some custom attributes here:"]}),"\n",(0,s.jsx)(t.h3,{id:"attributes",children:"attributes"}),"\n",(0,s.jsxs)(t.p,{children:["Attributes key is an object of attributes that you define and where you set up default values for a block. These attributes are then provided for you in the editor as props, and the PHP view part in the ",(0,s.jsx)(t.code,{children:"$attributes"})," variable.\nWe are using the same structure as described in ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/",children:"Block Editor documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"hasinnerblocks",children:"hasInnerBlocks"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"default: false"})}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"hasInnerBlocks"})," key is set to true, blocks ",(0,s.jsx)(t.code,{children:"save"})," method for inner blocks will be used. This method is used if the block has ",(0,s.jsx)(t.a,{href:"https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks",children:(0,s.jsx)(t.code,{children:"InnerBlocks"})}),". In PHP you now have ",(0,s.jsx)(t.code,{children:"$inner_block_content"})," variable available. Here is an example of what happens in the back:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"  save = () => createElement(InnerBlocks.Content);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"haswrapper",children:"hasWrapper"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"default: true"})}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"hasWrapper"})," key is set to false, blocks PHP render method will not be passed to the wrapper component."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);