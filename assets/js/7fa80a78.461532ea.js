"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[57955],{61257:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var l=s(74848),n=s(28453);const o={id:"style-classes",title:"Custom field classes"},i=void 0,r={id:"php/filters/block/field/style-classes",title:"Custom field classes",description:"This filter allows you to add custom CSS classes to the field element. You can use this filter to provide custom styles based on some attributes of the field.",source:"@site/forms/php/filters/block/field/style-classes.md",sourceDirName:"php/filters/block/field",slug:"/php/filters/block/field/style-classes",permalink:"/buanarchery.github.io/forms/php/filters/block/field/style-classes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"style-classes",title:"Custom field classes"},sidebar:"forms",previous:{title:"Custom field styles",permalink:"/buanarchery.github.io/forms/php/filters/block/field/style-options"},next:{title:"Additional content",permalink:"/buanarchery.github.io/forms/php/filters/block/field/additional-content"}},c={},a=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"This filter allows you to add custom CSS classes to the field element. You can use this filter to provide custom styles based on some attributes of the field."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_field_style_classes', [$this, 'getBlockFieldStyleClasses']);\n\n/**\n * Add additional style classes to field block.\n *\n * @param array<string, mixed> $attributes Block attributes.\n *\n * @return array<string, mixed>\n */\npublic function getBlockFieldStyleClasses(array $attributes): array\n{\n\treturn [\n\t\t'input' => [\n\t\t\t'custom-style'.\n\t\t],\n\t\t'select' => [\n\t\t\t'default',\n\t\t]\n\t];\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var l=s(96540);const n={},o=l.createContext(n);function i(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);