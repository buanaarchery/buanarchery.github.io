"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[64955],{85398:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=o(74848),t=o(28453);const s={id:"fonts-icon",title:"Icon font"},a=void 0,c={id:"legacy/v4/guides/fonts-icon",title:"Icon font",description:"Icons can be added as icon font and will be added in a similar way that the custom fonts are added. The process of file preparation is a bit different.",source:"@site/docs/legacy/v4/guides/fonts-icon.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/fonts-icon",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/fonts-icon",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"fonts-icon",title:"Icon font"},sidebar:"docs",previous:{title:"Custom fonts",permalink:"/buanarchery.github.io/docs/legacy/v4/guides/fonts-custom"},next:{title:"Sass",permalink:"/buanarchery.github.io/docs/legacy/v4/advanced/docs-sass"}},r={},l=[{value:"Icon font files setup",id:"icon-font-files-setup",level:2},{value:"Font Magician configuration for icon font",id:"font-magician-configuration-for-icon-font",level:2},{value:"Using the icon font",id:"using-the-icon-font",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Icons can be added as icon font and will be added in a similar way that the ",(0,i.jsx)(e.a,{href:"fonts-custom",children:"custom fonts"})," are added. The process of file preparation is a bit different."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"While icon font is the easiest method of managing and using a large library of icons, there are a number of reasons why it should not be used. Poor accessiblity, really noticable FOUT and styling inconsistencies are major downsides to icon fonts. There are a lot more benefits that come with using SVG components like: more styling options, usage flexibility and no impact to accessiblity of the website."})}),"\n",(0,i.jsx)(e.h2,{id:"icon-font-files-setup",children:"Icon font files setup"}),"\n",(0,i.jsxs)(e.p,{children:["For generating icon font files we recommend using ",(0,i.jsx)(e.a,{href:"https://icomoon.io/app/",children:"Icomoon"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Icons, exported as ",(0,i.jsx)(e.code,{children:".svg"}),", will need to be imported in a new set. Once all SVG icons are present in a set and named properly, the icon font can be generated. It is also recommended that before downloading an icon font the option for generating preprocessor variables is selected."]}),"\n",(0,i.jsx)(e.p,{children:"Downloaded package will contain a few important files:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"selection.json"})," - contains a snapshot of the whole icon font set and can be imported to update the whole icon set"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"variables.scss"})," - contains SCSS variables that map the name of the icon to it's character code."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"style.scss"})," - contains helper classes to access specific icons."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fonts/icon-set-name.*"})," - Actual font files with multiple formats."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Place font files in ",(0,i.jsx)(e.code,{children:"theme-name/assets/fonts"})," directory and import them the same way as other fonts. Recommended formats for icon fonts are ",(0,i.jsx)(e.code,{children:".svg"})," and ",(0,i.jsx)(e.code,{children:".woff"}),". Place the ",(0,i.jsx)(e.code,{children:"selection.json"})," file in the same directory just as a reference for updating icon font set (no need to import it)."]}),"\n",(0,i.jsxs)(e.p,{children:["Variables and class names need to be included in some form of global SCSS file e.g. ",(0,i.jsx)(e.code,{children:"theme-name/assets/styles/parts/shared"})," and you can change or rename them to fit your needs. The definition of the ",(0,i.jsx)(e.code,{children:"@font-face"})," can be removed because we will be generating it using the ",(0,i.jsx)(e.a,{href:"https://github.com/jonathantneal/postcss-font-magician",children:"Font Magician"}),", so we will get back to that later."]}),"\n",(0,i.jsx)(e.h2,{id:"font-magician-configuration-for-icon-font",children:"Font Magician configuration for icon font"}),"\n",(0,i.jsxs)(e.p,{children:["Icon font will be just another font family in Font Magician configuration. So give it a specific name that will be referenced in ",(0,i.jsx)(e.code,{children:"font-family"})," rule and add the names of the font files."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"...\nconst postcssFontMagician = require('postcss-font-magician');\n\nmodule.exports = {\n  plugins: [\n    ... // other postCss configs\n    postcssFontMagician({\n      custom: {\n        ... // other font-family declarations and config\n        'IconFontName': { // font-family declaration\n          variants: {\n            normal: {\n              400: {\n                url: {\n                  woff: 'icon-font-name.woff',\n                  svg: 'icon-font-name.svg',\n                },\n              },\n            },\n          },\n        },\n        ... // other font-family declarations\n      },\n   }),\n  ],\n};\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Restart the build process to generate new ",(0,i.jsx)(e.code,{children:"@font-face"})," rules."]}),"\n",(0,i.jsx)(e.h2,{id:"using-the-icon-font",children:"Using the icon font"}),"\n",(0,i.jsxs)(e.p,{children:["Once Font Magician configuration is done new ",(0,i.jsx)(e.code,{children:"font-family"})," definition will need to be added."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-scss",children:"// Variable declared in a global variables .scss file.\n$base-icon-family: `IconFontName`,\n\n// Using the variable in .scss partial\n.icon {\n  font-family: $base-font-family;\n  ...\n}\n"})})]})}function f(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>c});var i=o(96540);const t={},s=i.createContext(t);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);