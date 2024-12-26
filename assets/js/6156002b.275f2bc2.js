"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[62625],{62495:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=n(74848),o=n(28453);const t={id:"block-structure",title:"Block Structure"},r=void 0,l={id:"legacy/v8/basics/block-structure",title:"Block Structure",description:"docs-source",source:"@site/docs/legacy/v8/basics/block-structure.md",sourceDirName:"legacy/v8/basics",slug:"/legacy/v8/basics/block-structure",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/block-structure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"block-structure",title:"Block Structure"},sidebar:"docs",previous:{title:"Global Manifest",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-global-manifest"},next:{title:"Component Structure",permalink:"/buanarchery.github.io/docs/legacy/v8/basics/blocks-component-structure"}},d={},c=[{value:"assets",id:"assets",level:3},{value:"components",id:"components",level:3},{value:"docs",id:"docs",level:3},{value:"heading-block.js",id:"heading-blockjs",level:3},{value:"heading.php",id:"headingphp",level:3},{value:"heading-editor.scss",id:"heading-editorscss",level:3},{value:"heading-style.scss",id:"heading-stylescss",level:3},{value:"heading-hooks.js",id:"heading-hooksjs",level:3},{value:"heading-transforms.js",id:"heading-transformsjs",level:3},{value:"manifest.json",id:"manifestjson",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsxs)(s.p,{children:["Your custom blocks are placed in the ",(0,i.jsx)(s.code,{children:"src/Blocks/custom"})," folder."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, let's take the heading block (just replace ",(0,i.jsx)(s.code,{children:"heading"})," with your block name)."]}),"\n",(0,i.jsxs)(s.p,{children:["We suggest you always use the full name and never abbreviate the block name. If your block has multiple words, you should separate them by a dash, for example, ",(0,i.jsx)(s.code,{children:"featured-post-block.js"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Block structure should look like this:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["heading","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["assets","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"index.js"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["components","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"heading-editor.js"}),"\n",(0,i.jsx)(s.li,{children:"heading-options.js"}),"\n",(0,i.jsx)(s.li,{children:"heading-toolbar.js"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["docs","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"story.js"}),"\n",(0,i.jsx)(s.li,{children:"readme.mdx"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"heading-block.js"}),"\n",(0,i.jsx)(s.li,{children:"heading.php"}),"\n",(0,i.jsx)(s.li,{children:"heading-editor.scss"}),"\n",(0,i.jsx)(s.li,{children:"heading-style.scss"}),"\n",(0,i.jsx)(s.li,{children:"heading-hooks.js"}),"\n",(0,i.jsx)(s.li,{children:"heading-transforms.js"}),"\n",(0,i.jsx)(s.li,{children:"manifest.json"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"assets",children:"assets"}),"\n",(0,i.jsxs)(s.p,{children:["In this folder, you'll define all the custom JavaScript functionality for your block that will only be used on the front end of the application. You must provide the ",(0,i.jsx)(s.code,{children:"index.js"})," file in this folder, as a starting point, and the rest is up to you. We recommend using ",(0,i.jsx)(s.a,{href:"dynamic-import",children:"JavaScript dynamic imports"})," for all your front-end scripts. This ensures that the JavaScript is only loaded in the application when it is used and not before. By using dynamic import, you optimize your application and make it load faster."]}),"\n",(0,i.jsx)(s.h3,{id:"components",children:"components"}),"\n",(0,i.jsxs)(s.p,{children:["The components folder holds three files: ",(0,i.jsx)(s.code,{children:"heading-options.js"}),", ",(0,i.jsx)(s.code,{children:"heading-editor.js"}),", and ",(0,i.jsx)(s.code,{children:"heading-toolbars.js"}),". Each of these files represents a part of the block editor block that is used in the editor. We have separated options, editor, and toolbar into separate components for readability and reusing components in different projects."]}),"\n",(0,i.jsx)(s.h3,{id:"docs",children:"docs"}),"\n",(0,i.jsx)(s.p,{children:"Contains everything a block needs to be run inside the Storybook. This part is optional. However, it will speed up your development time and provide you with much-needed documentation."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"story.js"})," - Storybook entry point for your block. All blocks have the exact same story."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"readme.mdx"})," - README document that describes your block and provides the documentation."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"heading-blockjs",children:"heading-block.js"}),"\n",(0,i.jsxs)(s.p,{children:["This file represents the ",(0,i.jsx)(s.code,{children:"edit"})," callback method used in WordPress ",(0,i.jsx)(s.code,{children:"registerBlockType"})," method.\nWe are not using the ",(0,i.jsx)(s.code,{children:"save"})," callback method because we are creating dynamic blocks. The ",(0,i.jsx)(s.code,{children:"edit"})," method describes how your block will be rendered in the editor once the block is used. In this file, you can use more advanced stuff like hooks and all the top-level block features."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"heading-options.js"})," - must be wrapped with the ",(0,i.jsx)(s.code,{children:"InspectorControls"})," component from the core. This will ensure that options are shown in the proper place in the block editor (sidebar)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"heading-toolbar.js"})," - must be wrapped with the ",(0,i.jsx)(s.code,{children:"BlockControls"})," component from the core. This will ensure that the toolbar is shown in the proper place in the block editor (floating or fixed toolbar)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"heading-editor.js"})," - must ",(0,i.jsx)(s.strong,{children:"not"})," be wrapped with any top-level component. This will ensure that the editor component is shown in the proper place in the block editor (editor)."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"headingphp",children:"heading.php"}),"\n",(0,i.jsxs)(s.p,{children:["This file is the front-end representation of a block. In this file, you will have all the attributes you defined in the ",(0,i.jsx)(s.code,{children:"manifest.json"})," file."]}),"\n",(0,i.jsx)(s.p,{children:"In the blocks PHP part, you always have these two properties (props) available:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$attributes"})," - This prop contains all the attributes you defined in the ",(0,i.jsx)(s.code,{children:"manifest.json"})," and all the attributes saved in the database."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$innerBlockContent"})," - This prop contains all the inner block details when you set your block to contain inner blocks."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"heading-editorscss",children:"heading-editor.scss"}),"\n",(0,i.jsx)(s.p,{children:"Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any column layout like a grid, flex, etc., you may need to add some corrections."}),"\n",(0,i.jsx)(s.p,{children:"Corrections in the grid layout are necessary because the block editor adds additional HTML and we can't change it."}),"\n",(0,i.jsxs)(s.p,{children:["Please read the ",(0,i.jsx)(s.a,{href:"blocks-styles",children:"block styles"})," chapter for more details."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"This file is optional"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"heading-stylescss",children:"heading-style.scss"}),"\n",(0,i.jsx)(s.p,{children:"Holds all the front-end and editor styling for the component."}),"\n",(0,i.jsxs)(s.p,{children:["Please read the ",(0,i.jsx)(s.a,{href:"blocks-styles",children:"block styles"})," chapter for more details."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"This file is optional"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"heading-hooksjs",children:"heading-hooks.js"}),"\n",(0,i.jsxs)(s.p,{children:["Here you can provide any custom block editor hook you need. For documentation, please refer to ",(0,i.jsx)(s.a,{href:"https://developer.wordpress.org/block-editor/developers/filters/block-filters/",children:"this link"}),". This file is going to be merged in the ",(0,i.jsx)(s.code,{children:"registerBlockType"})," method."]}),"\n",(0,i.jsx)(s.h3,{id:"heading-transformsjs",children:"heading-transforms.js"}),"\n",(0,i.jsxs)(s.p,{children:["Here you can provide any custom block transformation you need. For documentation, please refer to ",(0,i.jsx)(s.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-transforms/",children:"this link"}),". This file is going to be merged in the ",(0,i.jsx)(s.code,{children:"registerBlockType"})," method."]}),"\n",(0,i.jsx)(s.h3,{id:"manifestjson",children:"manifest.json"}),"\n",(0,i.jsxs)(s.p,{children:["This file contains all the configuration required for a block to work. It's used in WordPress ",(0,i.jsx)(s.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/",children:(0,i.jsx)(s.code,{children:"registerBlockType"})})," method to register a block."]}),"\n",(0,i.jsxs)(s.p,{children:["For more details, check the ",(0,i.jsx)(s.a,{href:"block-manifest",children:"block manifest"})," chapter."]})]})}function a(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var i=n(96540);const o={},t=i.createContext(o);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);