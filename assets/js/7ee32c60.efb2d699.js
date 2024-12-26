"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[51212],{98619:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var i=t(74848),n=t(28453);const o={id:"manifest",title:"Manifest"},a=void 0,c={id:"legacy/v4/guides/manifest",title:"Manifest",description:"docs-source",source:"@site/docs/legacy/v4/guides/manifest.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/manifest",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/manifest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"manifest",title:"Manifest"},sidebar:"docs",previous:{title:"Project Config",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/config"},next:{title:"Enqueue",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/enqueue"}},l={},r=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"Example",id:"example",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/manifest",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsxs)(s.p,{children:["Manifest class is located in ",(0,i.jsx)(s.code,{children:"Eightshift Libs"}),". To extend it, use ",(0,i.jsx)(s.code,{children:"Eightshift_Libs\\Manifest\\Manifest"})," class."]}),"\n",(0,i.jsxs)(s.p,{children:["In the build process, Webpack creates all static files and also ",(0,i.jsx)(s.code,{children:"manifest.json"})," inside the ",(0,i.jsx)(s.code,{children:"public"})," folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."]}),"\n",(0,i.jsxs)(s.p,{children:["This class is used to provide ",(0,i.jsx)(s.code,{children:"manifest.json"})," file location and helpers to return the full path for a specific asset."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,i.jsxs)(s.p,{children:["The manifest class provides a filter name that is defined in the lib as a class constant. To apply/call this filter you need to provide ",(0,i.jsx)(s.code,{children:"Manifest::MANIFEST_ITEM_FILTER_NAME"})," filter name inside the project config helper. ",(0,i.jsx)(s.a,{href:"config",children:"Config helper"})," is used to append project prefix to a filter name."]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.p,{children:"Manifest.json:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "logo.svg": "/wp-content/themes/eightshift-boilerplate/public/logo.svg"\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"Usage:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"use Eightshift_Libs\\Manifest\\Manifest;\n\n$logo_img = apply_filters( Config::get_config( Manifest::MANIFEST_ITEM_FILTER_NAME ), 'logo.svg' );\n"})}),"\n",(0,i.jsx)(s.p,{children:"Output:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"https://domain.com/wp-content/themes/eightshift-boilerplate/public/logo.svg\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var i=t(96540);const n={},o=i.createContext(n);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);