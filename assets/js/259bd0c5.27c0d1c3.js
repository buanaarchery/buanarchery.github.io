"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[14097],{32959:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>m});var s=o(74848),i=o(28453);const l={id:"hide-global-msg-timeout",title:"Global message timeout"},r=void 0,n={id:"php/filters/block/form/hide-global-msg-timeout",title:"Global message timeout",description:"This filter allows you to change the timeout of all global messages (e.g. after successful form submission), in milliseconds.",source:"@site/forms/php/filters/block/form/hide-global-msg-timeout.md",sourceDirName:"php/filters/block/form",slug:"/php/filters/block/form/hide-global-msg-timeout",permalink:"/forms/php/filters/block/form/hide-global-msg-timeout",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hide-global-msg-timeout",title:"Global message timeout"},sidebar:"forms",previous:{title:"Redirect timeout",permalink:"/forms/php/filters/block/form/redirect-timeout"},next:{title:"Success redirect URL",permalink:"/forms/php/filters/block/form/success-redirect-url"}},c={},m=[];function a(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This filter allows you to change the timeout of all global messages (e.g. after successful form submission), in milliseconds."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_block_form_hide_global_msg_timeout', [$this, 'getBlockFormHideGlobalMsgTimeout']);\n\n/**\n * Changing the default success hide global message wait time.\n *\n * This filter will override our default wait time before the global message is removed. The time is calculated in milliseconds. *Example: 1000ms = 1s*.\n *\n * @return string\n */\npublic function getBlockFormHideGlobalMsgTimeout(): string\n{\n\treturn '10000'; // 10 seconds.\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>n});var s=o(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);