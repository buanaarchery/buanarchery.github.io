"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[63166],{96413:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(74848),i=s(28453);const r={id:"6-7",title:"Version 6 to 7"},o=void 0,l={id:"migrations/6-7",title:"Version 6 to 7",description:"This migration guide is represents migration for:",source:"@site/docs/migrations/6-7.md",sourceDirName:"migrations",slug:"/migrations/6-7",permalink:"/buanarchery.github.io/docs/migrations/6-7",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"6-7",title:"Version 6 to 7"},sidebar:"docs",previous:{title:"Version 7 to 8",permalink:"/buanarchery.github.io/docs/migrations/7-8"},next:{title:"Version 5 to 6",permalink:"/buanarchery.github.io/docs/migrations/5-6"}},a={},c=[{value:"Required changes",id:"required-changes",level:2},{value:"Improvement changes:",id:"improvement-changes",level:2},{value:"Optional changes:",id:"optional-changes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This migration guide is represents migration for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-boilerplate/releases/tag/7.0.0",children:"eightshift/boilerplate"})," - ",(0,t.jsx)(n.strong,{children:"6+ --\x3e 7.0.0"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/releases/tag/6.0.0",children:"eightshift/frontend-libs"})," - ",(0,t.jsx)(n.strong,{children:"5+ --\x3e 6.0.0"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/releases/tag/5.0.0",children:"eightshift/libs"})," - ",(0,t.jsx)(n.strong,{children:"4+ --\x3e 5.0.0"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"required-changes",children:"Required changes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Migration time: ~30min."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that all editor scripts are loaded from ",(0,t.jsx)(n.code,{children:"@eightshift/frontend-libs/scripts"}),";"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure that all frontend JS scripts that use frontend helper load ony from ",(0,t.jsx)(n.code,{children:"@eightshift/frontend-libs/scripts/helpers"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["We have removed PHP class ",(0,t.jsx)(n.code,{children:"LabelGenerator"})," and added it in the helper Traits so it you are using it in you project you should refactor it like in the example provided ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/pull/277",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src>Blocks>Blocks.php"})," remove ",(0,t.jsx)(n.code,{children:"getBlocksPath"})," method because we are not using it anymore."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src>Blocks>Blocks.php"})," replace all instances of ",(0,t.jsx)(n.code,{children:"$this->getSettings()['namespace']"})," with ",(0,t.jsx)(n.code,{children:"Components::getSettingsNamespace()"}),". Generally every place that you use ",(0,t.jsx)(n.code,{children:"$this->getSettings()"})," use Component store instead."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src>Blocks>Blocks.php"})," add new filter ",(0,t.jsx)(n.code,{children:"\\add_action('wp_footer', [$this, 'outputCssVariablesInline']);"})," to be able to output one style tag styles."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src>Blocks>manifest.json"})," add config keys used to trigger different behaviour of the boilerplate."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"config": {\n\t"outputCssGlobally": true,\n\t"outputCssOptimize": true,\n\t"outputCssSelectorName": "esCssVariables",\n\t"outputCssGloballyAdditionalStyles": [\n\t\t":root {--es-loaded-opacity: 1;}"\n\t],\n\t"useWrapper": true\n},\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"src>Blocks>assets"})," folder and compare it with our new layout and files located ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/feature/variables/blocks/init/src/Blocks/assets",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src>Enqueue>Blocks>EnqueueBlocks.php"})," add a new action to output new frontend-only styles:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"\\add_action('wp_enqueue_scripts', [$this, 'enqueueBlockFrontendStyle'], 50);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"src>Enqueue>Blocks>EnqueueBlocks.php"})," rename filter callback ",(0,t.jsx)(n.code,{children:"enqueueBlockScript"})," to ",(0,t.jsx)(n.code,{children:"enqueueBlockFrontendScript"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Find all usage of ",(0,t.jsx)(n.code,{children:"ServerSideRender"})," component in JS part. Then in PHP part wherever you use render method you must pass a new attribute ",(0,t.jsx)(n.code,{children:"blockSsr"}),". Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$featuredContentServerSideRender = Components::checkAttr('featuredContentServerSideRender', $attributes, $manifest);\n\necho Components::render(\n\t'card-article',\n\tComponents::props(\n\t\t'cardArticle',\n\t\t$props,\n\t\t[\n\t\t\t'blockSsr' => $featuredContentServerSideRender,\n\t\t]\n\t),\n);\n\necho Components::render(\n\t'layout',\n\tComponents::props('layout', $attributes, [\n\t\t'blockClass' => $blockClass,\n\t\t'blockSsr' => $featuredContentServerSideRender,\n\t]),\n);\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"improvement-changes",children:"Improvement changes:"}),"\n",(0,t.jsxs)(n.p,{children:["You should replace all instances where you are getting the data directly from the array like ",(0,t.jsx)(n.code,{children:"$globalManifest['globalVariables']"}),", this can be replaced with ",(0,t.jsx)(n.code,{children:"Components::getSettings()"}),".\nOr for examle getting the breakpoints ",(0,t.jsx)(n.code,{children:"$globalManifest['globalVariables']['breakpoints']"})," can be replaced with ",(0,t.jsx)(n.code,{children:"Components::setSettingsGlobalVariablesBreakpoints()"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Here are all the links for all of the Store helpers that you can use in ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/blob/feature/variables/src/Helpers/StoreTrait.php",children:"PHP"})," and in ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/blob/feature/variables/scripts/editor/store.js",children:"JS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"PHP example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$globalManifest = Components::getManifest(dirname(__DIR__, 2));\n\necho $globalManifest['namespace'];\n\n// replace with\n\necho Components::getSettingsNamespace();\n"})}),"\n",(0,t.jsx)(n.p,{children:"JS example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { globalManifest } from '../../manifest.json';\n\nconst {\n\tnamespace,\n} = globalManifest;\n\n// replace with\nimport { select } from '@wordpress/data';\nimport { STORE_NAME } from '@eightshift/frontend-libs/scripts';\n\nconst namespace = select(STORE_NAME).getSettingsNamespace();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"optional-changes",children:"Optional changes:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Migration time: ~5min."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Find all ",(0,t.jsx)(n.code,{children:"outputCssVariables"})," function usage (JS and PHP) and remove 4th parameter ",(0,t.jsx)(n.code,{children:"globalManifest"})," because it is not in use anymore."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"At this point this parameter will not cause any error but it will be removed in the next major release and then it will cause a fatal error so you should remove it."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Find ",(0,t.jsx)(n.code,{children:"outputCssVariablesGlobal"})," function usage (JS and PHP) and remove the parameter ",(0,t.jsx)(n.code,{children:"globalManifest"})," because it is not in use anymore."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"At this point this parameter will not cause any error but it will be removed in the next major release and then it will cause a fatal error so you should remove it."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Add style changes to ",(0,t.jsx)(n.code,{children:"src>assets>styles>parts>utils>_core.scss"})," file in the ",(0,t.jsx)(n.code,{children:"body"})," selector to provide content flickering on render. Here is an example:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:"body {\n\t//...\n\topacity: var(--es-loaded-opacity, 0);\n\n\ttransition: {\n\t\tproperty: opacity;\n\t\tduration: 0.5s;\n\t\tdelay: 0.6s;\n\t};\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);