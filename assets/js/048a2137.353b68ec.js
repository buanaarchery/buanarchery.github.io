"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[45307],{31114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),o=t(28453);const r={id:"webpack",title:"Webpack"},s=void 0,a={id:"basics/webpack",title:"Webpack",description:"docs-source",source:"@site/docs/basics/webpack.md",sourceDirName:"basics",slug:"/basics/webpack",permalink:"/buanarchery.github.io/docs/basics/webpack",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"webpack",title:"Webpack"},sidebar:"docs",previous:{title:"General",permalink:"/buanarchery.github.io/docs/basics/frontend"},next:{title:"SCSS Library",permalink:"/buanarchery.github.io/docs/basics/library"}},c={},l=[{value:"Override built-in functionality",id:"override-built-in-functionality",level:2},{value:"Add new custom functionality",id:"add-new-custom-functionality",level:2},{value:"Change the default config",id:"change-the-default-config",level:2},{value:"Add a new entrypoint",id:"add-a-new-entrypoint",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-frontend-libs",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsxs)(n.p,{children:["At its core, Webpack is a static module bundler for modern JavaScript applications. When Webpack processes your application, it builds an internal dependency graph that maps every module your project needs and generates one or more bundles. ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/concepts/",children:"Learn more about Webpack"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To put it simply, Webpack takes your development files and creates a production-ready version of them based on the config."}),"\n",(0,i.jsxs)(n.p,{children:["Eightshift Development Kit comes with everything set up out of the box. In the root of your project, you will find a file called ",(0,i.jsx)(n.code,{children:"webpack.config.js"}),". If you open it, you will see that the configuration is pulled from the Eightshift Frontend Libs library."]}),"\n",(0,i.jsx)(n.p,{children:"You can remove this config and write everything from scratch (keep in mind that this is a lot of work), or you can use our config and extend/remove whatever you need."}),"\n",(0,i.jsx)(n.h2,{id:"override-built-in-functionality",children:"Override built-in functionality"}),"\n",(0,i.jsxs)(n.p,{children:["To remove built-in functionality, add a new array to the config called ",(0,i.jsx)(n.code,{children:"overrides"}),".\nIf you provide any of the ",(0,i.jsx)(n.code,{children:"overrides"})," keys, it will remove that config from the feature from the build."]}),"\n",(0,i.jsx)(n.p,{children:"You can't change our config; you can only remove it and make your own."}),"\n",(0,i.jsx)(n.p,{children:"Here is a list of all the features that we use and how to remove them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"\nconst projectConfig = {\n  config: {\n    ... everything from default setup\n  },\n  overrides: [\n    // Located in project.js\n    'application',\n    'applicationAdmin',\n    'applicationBlocks',\n    'applicationBlocksEditor',\n    'filename',\n\n    // Located in base.js\n    'cleanWebpackPlugin',\n    'providePlugin',\n    'definePlugin',\n    'miniCssExtractPlugin',\n    'webpackManifestPlugin',\n    'dependencyExtractionWebpackPlugin',\n    'runtimeChunk',\n    'js',\n    'images',\n    'fonts',\n    'scss',\n\n    // Located in development.js\n    'browserSyncPlugin',\n\n    // Located in production.js\n    'terserPlugin',\n    'cssMinimizerPlugin',\n  ],\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"add-new-custom-functionality",children:"Add new custom functionality"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you want to add a custom ",(0,i.jsx)(n.code,{children:"html-webpack-plugin"})," to the build. You can simply use all the native ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/guides/",children:"webpack features"}),", like in this example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = (env, argv) => {\n\n  ...\n\n  return {\n    // Load all projects config from eightshift-frontend-libs.\n    ...project,\n\n    plugins: [\n      // Load all plugins config from eightshift-frontend-libs.\n      ...project.plugins,\n\n      // Add your custom implementation.\n      new HtmlWebpackPlugin(),\n    ],\n  };\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"change-the-default-config",children:"Change the default config"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you want to change what we made and adjust it to your specific needs. In that case, you should remove our functionality by providing the ",(0,i.jsx)(n.code,{children:"overrides"})," array and create your implementation. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const BrowserSyncPlugin = require('browser-sync-webpack-plugin');\n\nmodule.exports = (env, argv) => {\n\n  const projectConfig = {\n    config: {\n      // ... everything from default setup\n    },\n    overrides: [\n      'browserSyncPlugin', // this removes our configuration.\n    ],\n  };\n\n  // Generate Webpack config for this project using options object.\n  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n\n  return {\n    // Load all projects config from eightshift-frontend-libs.\n    ...project,\n\n    plugins: [\n      // Load all plugins config from eightshift-frontend-libs.\n      ...project.plugins,\n\n      // This provides your configuration.\n      new BrowserSyncPlugin({\n        host: 'localhost',\n        port: 3000,\n        https: true,\n      }),\n    ],\n  };\n"})}),"\n",(0,i.jsx)(n.h2,{id:"add-a-new-entrypoint",children:"Add a new entrypoint"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you want to add a new, separate JS and/or CSS build for some specific functionality. This functionality may or may not have anything to do with your WordPress theme or plugin, but it needs to be in separate files. To do that you'd need to add a new entrypoint for Webpack to build in ",(0,i.jsx)(n.code,{children:"webpack.config.js"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = (env, argv) => {\n\n  ...\n\n  return {\n    // Load all projects config from eightshift-frontend-libs.\n    ...project,\n\n    entry: {\n      // Load all entry points config from eightshift-frontend-libs.\n      ...project.entry,\n\n      // Your custom build entrypoint.\n      newBuild: path.resolve(projectConfig.config.projectDir, 'assets', 'application-newBuild.js'),\n    },\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next thing you'd do is create ",(0,i.jsx)(n.code,{children:"application-newBuild.js"})," in ",(0,i.jsx)(n.code,{children:"assets/"})," directory, in which you'd import and JS or SCSS partials. After restarting the build process, the results should be visible in ",(0,i.jsx)(n.code,{children:"public/"})," directory as new JS or CSS files."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);