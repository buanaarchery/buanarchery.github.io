"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[67587],{31203:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var n=t(74848),i=t(28453);const l={title:"Adding components and blocks with WP-CLI",description:"This blog post covers how to use our WP CLI commands for adding components and blocks into your project.",slug:"adding-blocks-wpcli",authors:"obradovic",date:new Date("2022-03-14T00:00:00.000Z"),tags:["eightshift","boilerplate","wpcli","components","blocks"],hide_table_of_contents:!1},s=void 0,a={permalink:"/blog/adding-blocks-wpcli",source:"@site/blog/2022-03-03-adding-blocks-wpcli.md",title:"Adding components and blocks with WP-CLI",description:"This blog post covers how to use our WP CLI commands for adding components and blocks into your project.",date:"2022-03-14T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/blog/tags/boilerplate"},{inline:!0,label:"wpcli",permalink:"/blog/tags/wpcli"},{inline:!0,label:"components",permalink:"/blog/tags/components"},{inline:!0,label:"blocks",permalink:"/blog/tags/blocks"}],readingTime:2.785,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Adding components and blocks with WP-CLI",description:"This blog post covers how to use our WP CLI commands for adding components and blocks into your project.",slug:"adding-blocks-wpcli",authors:"obradovic",date:"2022-03-14T00:00:00.000Z",tags:["eightshift","boilerplate","wpcli","components","blocks"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Modifying blocks - Color Theme",permalink:"/blog/modifying-blocks-color-theme"},nextItem:{title:"Components and blocks",permalink:"/blog/components-and-blocks"}},c={authorsImageUrls:[void 0]},r=[{value:"Storybook",id:"storybook",level:2},{value:"WP-CLI commands",id:"wp-cli-commands",level:2},{value:"Adding new component and block in our project",id:"adding-new-component-and-block-in-our-project",level:2},{value:"Using Example block",id:"using-example-block",level:2},{value:"Further reading",id:"further-reading",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Although there are a few basic blocks available after creating a project, there are a lot more blocks available in the dev kit. However, you have to add them to your project using WP-CLI (the simplest method). To see the complete list of available components and blocks, visit our ",(0,n.jsx)(o.a,{href:"/components/legacy-component-docs",children:"Storybook"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"These can be used out-of-the-box, but also as a good starting point if you need similar blocks in your projects. It will also speed up your development time since you don't have to build everything from scratch."}),"\n",(0,n.jsx)(o.admonition,{title:"Last update",type:"info",children:(0,n.jsx)(o.p,{children:"August 23, 2022"})}),"\n",(0,n.jsx)(o.h2,{id:"storybook",children:"Storybook"}),"\n",(0,n.jsx)(o.p,{children:"Storybook allows you to preview how the components and blocks look and which options they have available. Since Storybook is interactive, you can try out most of the options. Think of it as a catalog with all custom blocks we've built and made ready for public use."}),"\n",(0,n.jsxs)(o.p,{children:["Each entry in Storybook should have documentation that explains the block in more detail, along with implementation instructions. Before using any block, be sure to check ",(0,n.jsx)(o.code,{children:"Dependencies"})," section. Although ",(0,n.jsx)(o.code,{children:"Implementation"})," section lists all the necessary WP-CLI commands required to use a specific block or a component, it is recommended to check if you have the required dependencies ready in your theme."]}),"\n",(0,n.jsx)(o.h2,{id:"wp-cli-commands",children:"WP-CLI commands"}),"\n",(0,n.jsxs)(o.p,{children:["If you've read our ",(0,n.jsx)(o.a,{href:"/blog/initial-setup",children:"Initial Setup"})," post, you're already familiar with our custom WP-CLI commands. For implementing additional components, we have ",(0,n.jsx)(o.code,{children:"wp boilerplate blocks use-component --name="})," command. For blocks, we have ",(0,n.jsx)(o.code,{children:"wp boilerplate blocks use-block --name="})," command."]}),"\n",(0,n.jsx)(o.h2,{id:"adding-new-component-and-block-in-our-project",children:"Adding new component and block in our project"}),"\n",(0,n.jsx)(o.p,{children:"Let's say we need a Quote block in our project. After going through the documentation of the Quote block, we see that we have one dependency, and that is the Quote component. So, to make Quote block available in our project, we need two WP-CLI commands:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"wp boilerplate blocks use-block --name=quote\nwp boilerplate blocks use-component --name=quote\n"})}),"\n",(0,n.jsxs)(o.p,{children:["When entering the ",(0,n.jsx)(o.code,{children:"wp boilerplate blocks use-block --name='quote'"})," command, you'll notice the note about a block dependency on the Quote component. So you should run the second command as well."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Setup - instructions",src:t(23538).A+"",width:"1014",height:"447"})}),"\n",(0,n.jsxs)(o.p,{children:["After entering these commands, run ",(0,n.jsx)(o.code,{children:"npm start"})," again to make sure everything works properly."]}),"\n",(0,n.jsx)(o.p,{children:"The Quote block is now ready to use and available in your blocks list. You may use it as-is, or you may want to expand its functionalities with some additional attributes. More about that will be covered in the next blog post."}),"\n",(0,n.jsx)(o.h2,{id:"using-example-block",children:"Using Example block"}),"\n",(0,n.jsx)(o.p,{children:"If you want to build a block almost from scratch, you can use our Example block. This is a very simple block that generates all necessary files with some example options. To add an Example block to your project, use the following WP-CLI command:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"wp boilerplate blocks use-block --name=example\n"})}),"\n",(0,n.jsx)(o.p,{children:'Since our blocks use a predefined structure to make everything register automatically, adding Example block with WP-CLI will generate all required files. After it\'s added, feel free to rename the folder, as well as files with the name of your block and start modifying all the files. Simply replace "example" with the name of your block.'}),"\n",(0,n.jsx)(o.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsx)(o.p,{children:"Our documentation has all this covered in a lot more detail, so if you would like to better understand the structure of our blocks and components, here are some chapters covering these topics:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/basics/architecture-concepts",children:"Architecture concepts"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/basics/block-structure",children:"Block Structure"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/basics/blocks-component-structure",children:"Component Structure"})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},23538:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/wpcli-1-121561b87c2462841e12b91f09172d69.webp"},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(96540);const i={},l=n.createContext(i);function s(e){const o=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:o},e.children)}}}]);