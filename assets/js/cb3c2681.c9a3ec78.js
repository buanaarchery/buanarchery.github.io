"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[94835],{72271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(74848),t=s(28453);const o={id:"dynamic-import",title:"Dynamic Import"},r=void 0,l={id:"legacy/v6/basics/dynamic-import",title:"Dynamic Import",description:"docs-source",source:"@site/docs/legacy/v6/basics/dynamic-import.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/dynamic-import",permalink:"/buanarchery.github.io/docs/legacy/v6/basics/dynamic-import",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dynamic-import",title:"Dynamic Import"},sidebar:"docs",previous:{title:"Browsersync",permalink:"/buanarchery.github.io/docs/legacy/v6/basics/browser-sync"},next:{title:"Blocks",permalink:"/buanarchery.github.io/docs/legacy/v6/basics/blocks"}},a={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Example",id:"example",level:2},{value:"index.js",id:"indexjs",level:3},{value:"carousel-slider.js",id:"carousel-sliderjs",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsxs)(n.p,{children:["As JavaScript code runs on the visitor's device, it's crucial that it's as fast and optimized as possible. A powerful tool from Webpack called ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",children:"dynamic imports"})," helps with that."]}),"\n",(0,i.jsx)(n.p,{children:"Dynamic imports provide us the ability to load our JavaScript code only when it's used."}),"\n",(0,i.jsx)(n.p,{children:"By writing all JavaScript code using dynamic imports, we can reap significant benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"optimize loading time"}),"\n",(0,i.jsx)(n.li,{children:"reduce the size of finished bundled JavaScript code"}),"\n",(0,i.jsx)(n.li,{children:"have websites that are fast, which can positively impact your SEO rating"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,i.jsxs)(n.p,{children:["In a nutshell, you load all your code using JavaScript promises. Webpack splits all these promises into separate file chunks. Once the condition to resolve the promise is set (generally, if a selector is present in the DOM), Webpack automatically injects your chunk in the DOM and loads it up. This is why you will see a bunch of smaller files (",(0,i.jsx)(n.code,{children:"0.js"}),", ",(0,i.jsx)(n.code,{children:"1.js"}),", ",(0,i.jsx)(n.code,{children:"2.js"}),", etc) in your public folder instead of a single large file."]}),"\n",(0,i.jsx)(n.p,{children:"You don't need to think about this. Webpack just does it for you."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"For example, let's make a carousel. An Eightshift convention is to write JavaScript code using classes, so we'll provide an example for that. However, you can use this approach with functions as well."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"We have two files:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"index.js"})," - the main entry point for your JavaScript feature."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"className.js"})," - class with your JavaScript features that you can reuse."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"indexjs",children:"index.js"}),"\n",(0,i.jsx)(n.p,{children:"This is a version where you have multiple instances of a feature on one page. If you are creating a feature for your block/component, you'll use something along these lines."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import domReady from '@wordpress/dom-ready';\nimport { blockJsClass, blockName } from '../manifest.json';\n\n// Use this helper to make sure this code is executed when everything in DOM is set.\ndomReady(() => {\n\n  // Provide selectors to check.\n  const selector = `.${blockJsClass}`;\n  const elements = document.querySelectorAll(selector);\n\n  // This is the important part - if this condition is true, this promise will resolve and your chunk will be loaded in the DOM.\n  if (!elements.length) {\n    return;\n  }\n\n  // Normally load and resolve a promise on file import.\n  const { CarouselSlider } = await import('./carousel-slider');\n\n  // Loop possible multiple iterations.\n  [...elements].forEach((element) => {\n    const carouselSlider = new CarouselSlider({\n      element,\n      nextElement: `${selector}-next-arrow`,\n      prevElement: `${selector}-prev-arrow`,\n    });\n\n    // Run and init function that starts everything in your class.\n    carouselSlider.init();\n  });\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are sure you will have only one instance of this feature on one-page, you can use the following code in your ",(0,i.jsx)(n.code,{children:"index.js"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import domReady from '@wordpress/dom-ready';\nimport { blockJsClass, blockName } from '../manifest.json';\n\n// Use this helper to make sure this code is executed when everything in DOM is set.\ndomReady(() => {\n\n  // Provide selectors to check.\n  const selector = `.${blockJsClass}`;\n  const element = document.querySelector(selector);\n\n  // This is the important part. Because of it, your code will only be imported when there's an element on the page that uses it.\n  if (!element) {\n    return;\n  }\n\n  // Normally load and resolve a promise on file import.\n  const { CarouselSlider } = await import('./carousel-slider');\n\n  const carouselSlider = new CarouselSlider({\n    element,\n    nextElement: `${selector}-next-arrow`,\n    prevElement: `${selector}-prev-arrow`,\n  });\n\n  // Run and init function that starts everything in your class.\n  carouselSlider.init();\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"carousel-sliderjs",children:"carousel-slider.js"}),"\n",(0,i.jsx)(n.p,{children:"This is a normal class with some JavaScript functionality."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import Swiper from 'swiper';\n\nexport class CarouselSlider {\n  constructor(options) {\n    this.element = options.element;\n    this.nextElement = options.nextElement;\n    this.prevElement = options.prevElement;\n  }\n\n  init() {\n    new Swiper(\n      this.element,\n      {\n        // ...\n        navigation: {\n          nextEl: this.nextElement,\n          prevEl: this.prevElement,\n        },\n        // ...\n      }\n    );\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);