"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[70652],{14193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(74848),r=n(28453);const s={title:"Block Patterns",description:"Intro to block patterns and examples how to use them",slug:"block-patterns",authors:"obradovic",date:new Date("2023-03-01T00:00:00.000Z"),tags:["eightshift","boilerplate","block","patterns"],hide_table_of_contents:!1},o=void 0,i={permalink:"/buanarchery.github.io/blog/block-patterns",source:"@site/blog/2022-12-22-block-patterns.md",title:"Block Patterns",description:"Intro to block patterns and examples how to use them",date:"2023-03-01T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/buanarchery.github.io/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/buanarchery.github.io/blog/tags/boilerplate"},{inline:!0,label:"block",permalink:"/buanarchery.github.io/blog/tags/block"},{inline:!0,label:"patterns",permalink:"/buanarchery.github.io/blog/tags/patterns"}],readingTime:3.95,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Block Patterns",description:"Intro to block patterns and examples how to use them",slug:"block-patterns",authors:"obradovic",date:"2023-03-01T00:00:00.000Z",tags:["eightshift","boilerplate","block","patterns"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Using multiple same components",permalink:"/buanarchery.github.io/blog/multiple-same-components"},nextItem:{title:"Using Custom Post Types and Taxonomies",permalink:"/buanarchery.github.io/blog/using-cpts-and-taxonomies"}},l={authorsImageUrls:[void 0]},c=[{value:"What are Block Patterns and why use them?",id:"what-are-block-patterns-and-why-use-them",level:2},{value:"Technical differences",id:"technical-differences",level:2},{value:"Registering Block Patterns",id:"registering-block-patterns",level:2},{value:"Managing Pattern Categories",id:"managing-pattern-categories",level:3},{value:"Things to keep in mind",id:"things-to-keep-in-mind",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Although Block Patterns may be similar to Block Variations, there are some differences between the two. This blog post will cover what Block Patterns are and how to use them."}),"\n",(0,a.jsx)(t.h2,{id:"what-are-block-patterns-and-why-use-them",children:"What are Block Patterns and why use them?"}),"\n",(0,a.jsx)(t.p,{children:"Block Patterns are predefined block layouts which allow you to add content faster and make it look more consistent. The basic idea is to have a ready-made template which consists of multiple blocks, that have options predefined, and all you have to do is add content to these blocks."}),"\n",(0,a.jsx)(t.p,{children:"They can be used in multiple ways. You can create sections composed of few blocks which you can then easily insert anywhere on the site. You can also create complex page layouts which could be used for writing blog posts, for example."}),"\n",(0,a.jsx)(t.h2,{id:"technical-differences",children:"Technical differences"}),"\n",(0,a.jsxs)(t.p,{children:["As explained in the ",(0,a.jsx)(t.a,{href:"https://eightshift.com/docs/basics/blocks-patterns",children:"Eightshift Development kit documentation"}),", the main difference between variations and patterns are:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["variations provide data using ",(0,a.jsx)(t.code,{children:"manifest.json"}),", while patterns are registered using PHP"]}),"\n",(0,a.jsx)(t.li,{children:"variations appear in the editor in the same tab as blocks, while patterns appear in their own tab"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"registering-block-patterns",children:"Registering Block Patterns"}),"\n",(0,a.jsxs)(t.p,{children:["To make registering new block patterns easier, there is a WP-CLI command which will help you create a new block pattern. For this example, the block pattern we're making is called ",(0,a.jsx)(t.strong,{children:"Intro"}),". To get started, run this WP-CLI command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"wp boilerplate blocks create-block-pattern --title=intro\n"})}),"\n",(0,a.jsx)(t.p,{children:"After generating the block pattern class, there are a few more adjustments you should make to it. For starters, you should update these methods:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getName()"})," - change the return value to ",(0,a.jsx)(t.code,{children:"eightshift-boilerplate/intro-pattern"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"getDescription()"})," - add any description you like"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Once these values are updated, you can make the layout you'll use as a Block Pattern. The easiest way to do it is to build your layout in the editor, switch to ",(0,a.jsx)(t.code,{children:"Code Editor"}),", copy the code and paste in inside your ",(0,a.jsx)(t.code,{children:"getContent()"})," method. Your pattern should now be available to use. For this example, we can create a simple pattern which consists of a Heading block and a Paragraph block."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Option to switch to Code Editor",src:n(11236).A+"",width:"364",height:"422"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:'protected function getContent(): string\n{\n\treturn \'\x3c!-- wp:eightshift-boilerplate/heading {"headingHeadingContent":"Post title goes here","headingHeadingSize":"big"} /--\x3e\n\t\x3c!-- wp:eightshift-boilerplate/paragraph {"paragraphParagraphContent":"\\u003cem\\u003ePost intro goes here\\u003c/em\\u003e"} /--\x3e\';\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"managing-pattern-categories",children:"Managing Pattern Categories"}),"\n",(0,a.jsx)(t.p,{children:"To make managing block patterns easier, we can group them into categories. To start, we need a service class. This class will be used to register our custom categories and remove core categories. The fastest way to add it to our project is by using the following WP-CLI command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"wp boilerplate create service-example --folder=BlockPatterns --file_name=ManagePatternCategories\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now that we have our service class, we'll add methods for removing core patterns and pattern categories. First, the method for removing core categories."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"/**\n * Unregisters core block pattern categories.\n *\n * @return void\n */\npublic function removeCoreCategories()\n{\n\t\\unregister_block_pattern_category('buttons');\n\t\\unregister_block_pattern_category('columns');\n\t\\unregister_block_pattern_category('gallery');\n\t\\unregister_block_pattern_category('header');\n\t\\unregister_block_pattern_category('text');\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The second method will remove all core patterns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"/**\n * Removes support for core block patterns.\n *\n * @return void\n */\npublic function removeBlockPatternsCore()\n{\n\t\\remove_theme_support('core-block-patterns');\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For these methods to work, we need to add them to the ",(0,a.jsx)(t.code,{children:"register()"})," method of our service class. Add the following actions:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"\\add_action('init', [$this, 'removeCoreCategories'], 40);\n\\add_action('after_setup_theme', [$this, 'removeBlockPatternsCore'], 20);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you try searching for patterns in your editor, you'll notice they are no longer available. Now we can move on to adding our block pattern categories. The best approach is to define the pattern category names as constants inside your class. In this example, we will add two categories: ",(0,a.jsx)(t.strong,{children:"Templates"})," and ",(0,a.jsx)(t.strong,{children:"Sections"}),". We can add the following code inside our class:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"class ManagePatternCategories implements ServiceInterface\n{\n\tpublic const TEMPLATES_CATEGORY = 'templates-category';\n\tpublic const SECTIONS_CATEGORY = 'sections-category';\n\n\t// Removed parts of code for better readability.\n\n\t/**\n\t * Registers new pattern categories.\n\t *\n\t * @return void\n\t */\n\tpublic function addCategories()\n\t{\n\t\t\\register_block_pattern_category(self::TEMPLATES_CATEGORY, [\n\t\t\t'label' =>  \\esc_html__('Templates', 'es-blog'),\n\t\t]);\n\n\t\t\\register_block_pattern_category(self::SECTIONS_CATEGORY, [\n\t\t\t'label' => \\esc_html__('Sections', 'es-blog'),\n\t\t]);\n\t}\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, return to your Intro Pattern class and update the ",(0,a.jsx)(t.code,{children:"getCategories()"})," method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"protected function getCategories(): array\n{\n\treturn [\n\t\tManagePatternCategories::SECTIONS_CATEGORY\n\t];\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"In editor, in the Pattern tab, you should now see your new pattern category and the Intro Pattern."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"New pattern category and block pattern",src:n(49616).A+"",width:"349",height:"323"})}),"\n",(0,a.jsx)(t.h2,{id:"things-to-keep-in-mind",children:"Things to keep in mind"}),"\n",(0,a.jsx)(t.p,{children:"Block patterns add layout and content which you can then modify at will per instance. These instances are not synchronised with the codebase so it becomes an issue if you've already used a pattern on multiple places on the site and then notice you've missed something in the pattern configuration phase. Fixing the pattern in the codebase will apply the changes on all newly added instances, but you will have to fix the misconfigured instances manually."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},49616:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/webp;base64,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"},11236:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/code-editor-0f0cd8e07f7d3262475ca4cc8b7b2176.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);