"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[51166],{82957:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var i=s(74848),t=s(28453);const c={id:"enqueue",title:"Enqueue"},l=void 0,o={id:"legacy/v4/guides/enqueue",title:"Enqueue",description:"docs-source",source:"@site/docs/legacy/v4/guides/enqueue.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/enqueue",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/enqueue",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"enqueue",title:"Enqueue"},sidebar:"docs",previous:{title:"Manifest",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/manifest"},next:{title:"Post Type",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/post-type"}},d={},r=[{value:"Enqueue_Admin",id:"enqueue_admin",level:2},{value:"Enqueue_Blocks",id:"enqueue_blocks",level:2},{value:"Enqueue_Theme",id:"enqueue_theme",level:2},{value:"Additional",id:"additional",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsx)(n.p,{children:"When enqueuing assets you can either use ready made classes from the libs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Eightshift_Libs\\Enqueue\\Enqueue_Admin"})," class."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Eightshift_Libs\\Enqueue\\Enqueue_Blocks"})," class."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Eightshift_Libs\\Enqueue\\Enqueue_Theme"})," class."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"or you can modify their functionalities by extending them."}),"\n",(0,i.jsx)(n.p,{children:"These classes will handle JavaScript and CSS files of the project for different parts like: Admin area, Block Editor area of Theme area (front end)."}),"\n",(0,i.jsx)(n.p,{children:"The usage of any of these classes is optional, and you can use only what you need. Eightshift Boilerplate comes with all three classes already implemented."}),"\n",(0,i.jsxs)(n.p,{children:["Each of these classes implement actions that can be deregistered using the standard ",(0,i.jsx)(n.a,{href:"https://developer.wordpress.org/reference/functions/remove_action/",children:"WordPress way"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Enqueue classes work in combination with ",(0,i.jsx)(n.a,{href:"/docs/legacy/v4/advanced/webpack",children:"webpack build"})," of your project."]}),"\n",(0,i.jsx)(n.p,{children:"File names are defined inside class constants that can be changed by extending the class and providing the overrides for the constants. If you change the file names, you must provide changes to the webpack build process as well."}),"\n",(0,i.jsx)(n.h2,{id:"enqueue_admin",children:"Enqueue_Admin"}),"\n",(0,i.jsxs)(n.p,{children:["This class provides way to enqueue assets for the ",(0,i.jsx)(n.strong,{children:"Admin"})," part of the project."]}),"\n",(0,i.jsx)(n.p,{children:"It implements these hooks in the register method:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\n// Login only style.\nadd_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );\n\n// Admin only style.\nadd_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );\n\n// Admin only script.\nadd_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );\n"})}),"\n",(0,i.jsx)(n.p,{children:"Class constants:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\n  const ADMIN_SCRIPT_URI = 'applicationAdmin.js';\n\n  const ADMIN_STYLE_URI  = 'applicationAdmin.css';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enqueue_blocks",children:"Enqueue_Blocks"}),"\n",(0,i.jsxs)(n.p,{children:["This class provides assets for ",(0,i.jsx)(n.strong,{children:"Block Editor"})," part of the project."]}),"\n",(0,i.jsx)(n.p,{children:"It implements these hooks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\n// Editor only script.\nadd_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_script' ] );\n\n// Editor only style.\nadd_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_style' ], 50 );\n\n// Editor and front-end style.\nadd_action( 'enqueue_block_assets', [ $this, 'enqueue_block_style' ], 50 );\n\n// Frontend only script.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_block_script' ] );\n"})}),"\n",(0,i.jsx)(n.p,{children:"Class constants:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\n  const BLOCKS_EDITOR_SCRIPT_URI = 'applicationBlocksEditor.js';\n  const BLOCKS_EDITOR_STYLE_URI  = 'applicationBlocksEditor.css';\n\n  const BLOCKS_STYLE_URI  = 'applicationBlocks.css';\n  const BLOCKS_SCRIPT_URI = 'applicationBlocks.js';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enqueue_theme",children:"Enqueue_Theme"}),"\n",(0,i.jsxs)(n.p,{children:["This class provides assets for ",(0,i.jsx)(n.strong,{children:"Theme"})," part of the project."]}),"\n",(0,i.jsx)(n.p,{children:"It implements these hooks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\n// Theme only style.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 10 );\n\n// Theme only script.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );\n"})}),"\n",(0,i.jsx)(n.p,{children:"Class constants:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\n  const THEME_SCRIPT_URI = 'application.js';\n  const THEME_STYLE_URI  = 'application.css';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"additional",children:"Additional"}),"\n",(0,i.jsxs)(n.p,{children:["Each of these 3 classes extends ",(0,i.jsx)(n.code,{children:"Eightshift_Libs\\Enqueue\\Assets"})," class that holds some useful methods that you can extend. These methods can be used in all enqueue classes."]}),"\n",(0,i.jsxs)(n.p,{children:["You can find the Assets class ",(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/enqueue",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Provided methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"get_frontend_script_dependencies()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"get_admin_script_dependencies()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"get_localizations()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"get_frontend_style_dependencies()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"get_admin_style_dependencies()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"get_media()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"script_in_footer()"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(96540);const t={},c=i.createContext(t);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);