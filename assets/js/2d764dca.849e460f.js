"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[26294],{99236:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=o(74848),n=o(28453);const i={id:"blocks",title:"Blocks"},a=void 0,r={id:"legacy/v6/basics/blocks",title:"Blocks",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks",permalink:"/buanarchery.github.io/docs/legacy/v6/basics/blocks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks",title:"Blocks"},sidebar:"docs",previous:{title:"Dynamic Import",permalink:"/buanarchery.github.io/docs/legacy/v6/basics/dynamic-import"},next:{title:"Important",permalink:"/buanarchery.github.io/docs/legacy/v6/basics/blocks-important"}},c={},l=[{value:"Types of blocks",id:"types-of-blocks",level:2},{value:"Static blocks",id:"static-blocks",level:3},{value:"Dynamic blocks",id:"dynamic-blocks",level:3},{value:"Eightshift blocks",id:"eightshift-blocks",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsx)(t.p,{children:"Since WordPress 5.0, we were introduced to the new editing experience using the so-called Gutenberg blocks. With blocks, the idea is to have the same look and feel in the editor as on the front end. As a developer, you just got a new technology that you should know if you want to build a great project on WordPress. That new technology is React because everything regarding blocks is done using React."}),"\n",(0,s.jsx)(t.p,{children:"Don't get discouraged just yet, because the WordPress team has made the process of creating blocks relatively easy. But we are not here to talk about the simple stuff. We want to do more complex projects with custom blocks, so follow along and see what we have prepared here."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["You can read everything regarding blocks in the ",(0,s.jsx)(t.a,{href:"https://developer.wordpress.org/block-editor/tutorials/block-tutorial/",children:"WordPress documentation"}),". We will not be explaining how everything natively works in this documentation. Instead, we will only describe how to use our setup and how it correlates with the native one. Everything that you can't find here, please look up in the WordPress Handbook."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"types-of-blocks",children:"Types of blocks"}),"\n",(0,s.jsx)(t.p,{children:"WordPress Core Editor team has provided us with two different kinds of blocks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Static blocks"}),"\n",(0,s.jsx)(t.li,{children:"Dynamic blocks"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"static-blocks",children:"Static blocks"}),"\n",(0,s.jsx)(t.p,{children:"These are the blocks that you can see in the core. Almost every block from WordPress comes this way. With static blocks, you have the same content on the front end as you do in the editor. This was accomplished by providing the same layout in the save callback as in the edit callback."}),"\n",(0,s.jsx)(t.p,{children:"The drawback of building blocks this way is that you must also provide the HTML markup that you will use on the front-end, inside the save callback. That method saves everything to the database, and you can't just change the HTML markup without some transformations or deprecation methods. If you change the markup while working on it, you'll get an error in the editor screen, and you'll have to add the content again."}),"\n",(0,s.jsx)(t.p,{children:"We don't like this approach because of how it stores the HTML content in the database. Lucky for us, WordPress has provided a different kind of blocks for this matter. They are called dynamic blocks."}),"\n",(0,s.jsx)(t.h3,{id:"dynamic-blocks",children:"Dynamic blocks"}),"\n",(0,s.jsx)(t.p,{children:"As you already saw in the previous chapter, the main difference between static and dynamic blocks is storing content in the database. For many dynamic blocks, the save callback function should be returned as null, which tells the editor to save only the block attributes to the database. These attributes are then passed into the server-side rendering callback, so you can decide how to display the block on the front end of your site."}),"\n",(0,s.jsx)(t.p,{children:"This means that you write code using React and JSX in the editor, and you must provide the same code in the PHP for the front-end. Yes, it is a lot of work because you must switch technologies and do the same thing multiple times, but we tried to make this process as simple as possible."}),"\n",(0,s.jsx)(t.p,{children:"Follow along and see what we prepared. From now on, we'll be talking only about dynamic blocks in this documentation."}),"\n",(0,s.jsx)(t.h2,{id:"eightshift-blocks",children:"Eightshift blocks"}),"\n",(0,s.jsx)(t.p,{children:"Our setup's main advantage is that you don't need to do a bunch of boilerplate every time you want to create a new block for your project. Also, we have a bunch of cool features we think you might like:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Separated blocks from components."}),"\n",(0,s.jsx)(t.li,{children:"You have a predefined structure for everything."}),"\n",(0,s.jsx)(t.li,{children:"If you follow the structure we provided, everything is registered and called automatically."}),"\n",(0,s.jsx)(t.li,{children:'You don\'t have to worry: "did I register this the right way?", "what style goes where?", etc.'}),"\n",(0,s.jsx)(t.li,{children:"Storybook for your project."}),"\n",(0,s.jsx)(t.li,{children:"A dozen of the pre-created blocks from our end. Once we create a new block in some of our projects, we make it available in the libs."}),"\n",(0,s.jsxs)(t.li,{children:["Easy usage of blocks and components with our ",(0,s.jsx)(t.a,{href:"wp-cli",children:"WP-CLI"})," commands."]}),"\n",(0,s.jsx)(t.li,{children:"Setup that shares configuration between JS, PHP, and SCSS files."}),"\n",(0,s.jsx)(t.li,{children:"Wrapper that comes with every block and allows you to control how a block behaves in the layout entirely."}),"\n",(0,s.jsx)(t.li,{children:"Everything is responsive. Yes, you read that correctly; we created options that you can control on multiple breakpoints."}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Everything is configurable and editable from your project."})}),"\n",(0,s.jsx)(t.li,{children:"Linting standards."}),"\n",(0,s.jsx)(t.li,{children:"Multiple helpers work the same on JS and PHP side, so it is easy to copy code from one language to another."}),"\n",(0,s.jsx)(t.li,{children:"And much, much more."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var s=o(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);