"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[32046],{84464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(74848),i=t(28453);const r={id:"blocks-render-block-view-helper",title:"Render Block View Helper"},o=void 0,c={id:"legacy/v4/guides/blocks-render-block-view-helper",title:"Render Block View Helper",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-render-block-view-helper.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-render-block-view-helper",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/blocks-render-block-view-helper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-render-block-view-helper",title:"Render Block View Helper"},sidebar:"docs",previous:{title:"Creating Block from Components",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/blocks-block-from-components"},next:{title:"GetActions Helper",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/blocks-get-actions-helper"}},l={},a=[{value:"Usage",id:"usage",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/blocks/class-blocks.php",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsx)(n.p,{children:"Locate and return template part with passed attributes for a block."}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Inside your block view PHP file you'd write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$this->render_block_view(\n  '/components/heading/heading.php',\n  [\n    'blockClass' => $attributes['blockClass'] ?? '',\n    'heading'    => $attributes['heading'] ?? [],\n  ]\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the case you are using libs with dependency injection container, this should be handled by the library and the ",(0,s.jsx)(n.code,{children:"render_block_view"})," method is provided in block view by default."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);