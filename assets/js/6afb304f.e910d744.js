"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[79867],{70686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(74848),s=t(28453);const o={id:"dependency-blocks-frontend",title:"Dependency blocks frontend"},c=void 0,i={id:"php/filters/scripts/dependency-blocks-frontend",title:"Dependency blocks frontend",description:"Allows changing the order in which the block frontend scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners).",source:"@site/forms/php/filters/scripts/dependency-blocks-frontend.md",sourceDirName:"php/filters/scripts",slug:"/php/filters/scripts/dependency-blocks-frontend",permalink:"/buanarchery.github.io/forms/php/filters/scripts/dependency-blocks-frontend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dependency-blocks-frontend",title:"Dependency blocks frontend"},sidebar:"forms",previous:{title:"Dependency blocks editor",permalink:"/buanarchery.github.io/forms/php/filters/scripts/dependency-blocks-editor"},next:{title:"Routes public",permalink:"/buanarchery.github.io/forms/php/filters/scripts/routes-public"}},d={},p=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Allows changing the order in which the block frontend scripts are loaded. Useful when creating a Forms add-on plugin, and your script needs to be loaded before the Forms scripts (e.g. for adding custom event listeners)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"\\add_filter('es_forms_scripts_dependency_blocks_frontend', [$this, 'getScriptsDependency']);\n\n/**\n * Load add-on scripts before the Forms scripts.\n *\n * @return array<int, string>\n */\npublic function getScriptsDependency(): array\n{\n\treturn [\n\t\t'<script-handle-name>',\n\t];\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);