"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[55229],{46291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),s=n(28453);const o={id:"helpers",title:"Helpers"},l=void 0,r={id:"tailwind/helpers",title:"Helpers",description:"Frontend libs Tailwind includes many useful helpers.",source:"@site/docs/tailwind/helpers.md",sourceDirName:"tailwind",slug:"/tailwind/helpers",permalink:"/buanarchery.github.io/docs/tailwind/helpers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"helpers",title:"Helpers"},sidebar:"docs",previous:{title:"Manifest",permalink:"/buanarchery.github.io/docs/tailwind/manifest"},next:{title:"Intro",permalink:"/buanarchery.github.io/docs/tutorials/intro"}},a={},d=[{value:"General helpers",id:"general-helpers",level:2},{value:"<code>getHiddenOptions</code>",id:"gethiddenoptions",level:3},{value:"<code>GutenbergBlock</code>",id:"gutenbergblock",level:3},{value:"Fetch helpers",id:"fetch-helpers",level:2},{value:"<code>fetchFromWpRest</code>",id:"fetchfromwprest",level:3},{value:"<code>wpSearchRoute</code>",id:"wpsearchroute",level:3},{value:"Responsive helpers",id:"responsive-helpers",level:2},{value:"<code>generateOptionsFromValue</code>",id:"generateoptionsfromvalue",level:3},{value:"Tailwind config helpers",id:"tailwind-config-helpers",level:2},{value:"<code>processEightshiftClasses</code>",id:"processeightshiftclasses",level:3},{value:"<code>getScreens</code>",id:"getscreens",level:3}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Frontend libs Tailwind includes many useful helpers."}),"\n",(0,i.jsx)(t.p,{children:"Here are a few featured:"}),"\n",(0,i.jsx)(t.h2,{id:"general-helpers",children:"General helpers"}),"\n",(0,i.jsx)(t.h3,{id:"gethiddenoptions",children:(0,i.jsx)(t.code,{children:"getHiddenOptions"})}),"\n",(0,i.jsxs)(t.p,{children:["In order to simplify hiding parts of component options, the ",(0,i.jsx)(t.code,{children:"getHiddenOptions"})," helper was created."]}),"\n",(0,i.jsx)(t.p,{children:"To use, first in your component add:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"export const DemoOptions = (attributes) => {\n\tconst {\n\t\tsetAttributes,\n\t\t// highlight-next-line\n\t\thideOptions,\n\t\tadditionalControls,\n\t\t...rest\n\t} = attributes;\n\n\t...\n\n\t// highlight-next-line\n\tconst hiddenOptions = getHiddenOptions(hideOptions);\n\n\t...\n\n\treturn (\n\t\t<>\n\t\t\t<Toggle\n\t\t\t\tlabel={__('My option', 'fe-libs-tailwind')}\n\t\t\t\tchecked={myOption}\n\t\t\t\tonChange={(value) => setAttributes({ [getAttrKey('myOption', attributes, manifest)]: value })}\n\t\t\t\t// highlight-next-line\n\t\t\t\thidden={hiddenOptions?.myOption}\n\t\t\t/>\n\t\t</>\n\t);\n};\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"hidden"})," property is included in all Eightshift UI components.\nIf using something external, conditionally render it just as with any other React component."]})}),"\n",(0,i.jsx)(t.p,{children:"Then, in a different component/block:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<DemoOptions\n\t{...props('demo', attributes)}\n\t// highlight-next-line\n\thideOptions='myOption'\n/>\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you want to hide multiple options:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<DemoOptions\n\t{...props('demo', attributes)}\n\t// highlight-next-line\n\thideOptions='myOption,myOtherOption,loremIpsumOption'\n/>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"gutenbergblock",children:(0,i.jsx)(t.code,{children:"GutenbergBlock"})}),"\n",(0,i.jsx)(t.p,{children:"Simplifies block creation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<GutenbergBlock\n\t{...props}\n\toptions={MyBlockOptions}\n\teditor={MyBlockEditor}\n\ttoolbar={MyBlockToolbar}\n/>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"fetch-helpers",children:"Fetch helpers"}),"\n",(0,i.jsx)(t.h3,{id:"fetchfromwprest",children:(0,i.jsx)(t.code,{children:"fetchFromWpRest"})}),"\n",(0,i.jsxs)(t.p,{children:["Replaces the ",(0,i.jsx)(t.code,{children:"getFetchWpApi"})," function from standard Frontend libs."]}),"\n",(0,i.jsx)(t.p,{children:"Props are mostly the same, with a few differences:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["option labels will automatically have HTML entities unescaped (can be disabled with ",(0,i.jsx)(t.code,{children:"noUnescapeTitle"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["by default the labels are truncated to 32 characters (can be changed with ",(0,i.jsx)(t.code,{children:"truncateTitle"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"wpsearchroute",children:(0,i.jsx)(t.code,{children:"wpSearchRoute"})}),"\n",(0,i.jsx)(t.p,{children:"A pre-configured fetch function that simplifies adding an URL picker with WP search autocomplete."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<LinkInput\n\ticon={buttonIsAnchor ? icons.globeAnchor : icons.globe}\n\turl={buttonUrl}\n\tonChange={({ url, isAnchor }) => {\n\t\tsetAttributes({\n\t\t\t[getAttrKey('buttonUrl', attributes, manifest)]: url,\n\t\t\t[getAttrKey('buttonIsAnchor', attributes, manifest)]: isAnchor ?? false,\n\t\t});\n\t}}\n\t// highlight-next-line\n\tfetchSuggestions={wpSearchRoute}\n\thidden={hiddenOptions?.link}\n/>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"responsive-helpers",children:"Responsive helpers"}),"\n",(0,i.jsx)(t.h3,{id:"generateoptionsfromvalue",children:(0,i.jsx)(t.code,{children:"generateOptionsFromValue"})}),"\n",(0,i.jsxs)(t.p,{children:["If you're using a ",(0,i.jsx)(t.code,{children:"Responsive"})," component with an attribute that doesn't have any obvious options, you can use this helper to generate options that you can pass to Responsive to ensure user-friendly per-breakpoint value preview."]}),"\n",(0,i.jsx)(t.p,{children:"You can provide a function to the second argument if you want to customize the value output."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<Responsive\n\tvalue={imageData}\n\tonChange={(value) => setAttributes({ [getAttrKey('imageData', attributes, manifest)]: value })}\n\ticon={icons.imageFile}\n\tlabel={__('Image', 'eightshift-ui-components')}\n\t// highlight-next-line\n\toptions={generateOptionsFromValue(imageData)}\n\t{...responsiveData}\n>\n\t{({ breakpoint, currentValue, handleChange }) => (\n\t\t<MediaPicker\n\t\t\tonChange={({ id, url }) => handleChange({ id: id, url: url })}\n\t\t\timageId={currentValue?.id}\n\t\t\timageUrl={currentValue?.url}\n\t\t\tnoDelete={breakpoint !== '_default'}\n\t\t/>\n\t)}\n</Responsive>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"tailwind-config-helpers",children:"Tailwind config helpers"}),"\n",(0,i.jsx)(t.h3,{id:"processeightshiftclasses",children:(0,i.jsx)(t.code,{children:"processEightshiftClasses"})}),"\n",(0,i.jsx)(t.p,{children:"Used within the Tailwind config to help process all the manifests and keep all the needed classes in the output."}),"\n",(0,i.jsx)(t.p,{children:"You won't have to add this manually, it will be included in the default setup."}),"\n",(0,i.jsx)(t.h3,{id:"getscreens",children:(0,i.jsx)(t.code,{children:"getScreens"})}),"\n",(0,i.jsx)(t.p,{children:"Used within the Tailwind config to generate breakpoint data from the global manifest."}),"\n",(0,i.jsx)(t.p,{children:"You won't have to add this manually, it will be included in the default setup."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);