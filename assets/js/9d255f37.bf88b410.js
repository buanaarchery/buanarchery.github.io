"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[44152],{29781:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>a});var s=r(74848),o=r(28453);const n={id:"result-output-items",title:"Result output items"},u=void 0,i={id:"php/filters/block/form/result-output-items",title:"Result output items",description:"Allows modifying Form result output parts using an API to change which block is shown on the frontend, based on the user input.",source:"@site/forms/php/filters/block/form/result-output-items.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/result-output-items",permalink:"/buanarchery.github.io/forms/php/filters/block/form/result-output-items",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"result-output-items",title:"Result output items"},sidebar:"forms",previous:{title:"Additional hidden fields",permalink:"/buanarchery.github.io/forms/php/filters/block/form/additional-hidden-fields"},next:{title:"Result output parts",permalink:"/buanarchery.github.io/forms/php/filters/block/form/result-output-parts"}},l={},a=[];function p(t){const e={code:"code",em:"em",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Allows modifying ",(0,s.jsx)(e.em,{children:"Form result output parts"})," using an API to change which block is shown on the frontend, based on the user input."]}),"\n",(0,s.jsxs)(e.p,{children:["Used by the ",(0,s.jsx)(e.code,{children:"result-output-item"})," block."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-php",children:"add_filter('es_forms_block_form_result_output_items', 'getFormResultOutputItems', 10, 3);\n\n/**\n * Populate Result output items in the API response data used in 'result-output-item' block.\n *\n * @param array<string, mixed> $output Output data.\n * @param array<string, mixed> $formDetails Data passed from the 'getFormDetailsApi' function.\n * @param string $formId Form ID.\n *\n * @return array<string, mixed>\n */\nfunction getFormResultOutputItems(array $output, array $formDetails, string $formId): array\n{\n\t$output['testKeys'] = 'testValue';\n\n\treturn $output;\n}\n"})})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},28453:(t,e,r)=>{r.d(e,{R:()=>u,x:()=>i});var s=r(96540);const o={},n=s.createContext(o);function u(t){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:u(t.components),s.createElement(n.Provider,{value:e},t.children)}}}]);