/*! For license information please see 6732659c.976aa952.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[86958],{96033:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>U,contentTitle:()=>W,default:()=>B,frontMatter:()=>z,metadata:()=>_,toc:()=>H});var s=i(74848),a=i(28453),l=i(34842),n=i(62993),r=i(67680),u=i(36273),c=i(35971),o=i(96540),d=i(12732),m=i(93677),b=i(37368),p=i(29116),h=i(74702),g=i(1234),f=i(60099),v=i(6314),x=i(49189),y=i(47996),j=i(54754);const T=new WeakMap;function K(e,t,i){return"string"==typeof t&&(t=t.replace(/\s+/g,"")),`${T.get(e)}-${i}-${t}`}class N{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}isDisabled(e){var t,i;return this.disabledKeys.has(e)||!!(null===(i=this.collection.getItem(e))||void 0===i||null===(t=i.props)||void 0===t?void 0:t.isDisabled)}getFirstKey(){let e=this.collection.getFirstKey();return null!=e&&this.isDisabled(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return null!=e&&this.isDisabled(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do{null==(e=this.collection.getKeyAfter(e))&&(e=this.collection.getFirstKey())}while(this.isDisabled(e));return e}getPreviousKey(e){do{null==(e=this.collection.getKeyBefore(e))&&(e=this.collection.getLastKey())}while(this.isDisabled(e));return e}constructor(e,t,i,s=new Set){this.collection=e,this.flipDirection="rtl"===t&&"horizontal"===i,this.disabledKeys=s}}function P(e,t){let i=null;if(e){var s,a,l,n;for(i=e.getFirstKey();(t.has(i)||(null===(a=e.getItem(i))||void 0===a||null===(s=a.props)||void 0===s?void 0:s.isDisabled))&&i!==e.getLastKey();)i=e.getKeyAfter(i);(t.has(i)||(null===(n=e.getItem(i))||void 0===n||null===(l=n.props)||void 0===l?void 0:l.isDisabled))&&i===e.getLastKey()&&(i=e.getFirstKey())}return i}const w=(0,o.createContext)(null),q=(0,o.createContext)(null);function M(e,t){[e,t]=(0,r.a)(e,t,w);let{children:i,orientation:s="horizontal"}=e;return i=(0,o.useMemo)((()=>"function"==typeof i?i({orientation:s,defaultChildren:null}):i),[i,s]),o.createElement(n.e,{content:i},(i=>o.createElement(C,{props:e,collection:i,tabsRef:t})))}function C({props:e,tabsRef:t,collection:i}){let{orientation:s="horizontal"}=e,a=function(e){var t;let i=(0,f.$)({...e,suppressTextValueWarning:!0,defaultSelectedKey:null!==(t=e.defaultSelectedKey)&&void 0!==t?t:P(e.collection,e.disabledKeys?new Set(e.disabledKeys):new Set)}),{selectionManager:s,collection:a,selectedKey:l}=i,n=(0,o.useRef)(l);return(0,o.useEffect)((()=>{let e=l;!s.isEmpty&&a.getItem(e)||(e=P(a,i.disabledKeys),null!=e&&s.setSelectedKeys([e])),(null!=e&&null==s.focusedKey||!s.isFocused&&e!==n.current)&&s.setFocusedKey(e),n.current=e})),{...i,isDisabled:e.isDisabled||!1}}({...e,collection:i,children:void 0}),{focusProps:l,isFocused:n,isFocusVisible:u}=(0,h.$)({within:!0}),d=(0,o.useMemo)((()=>({orientation:s,isFocusWithin:n,isFocusVisible:u})),[s,n,u]),m=(0,r.b)({...e,defaultClassName:"react-aria-Tabs",values:d});return o.createElement("div",{...(0,c.$)(e),...l,...m,ref:t,slot:e.slot||void 0,"data-focused":n||void 0,"data-orientation":s,"data-focus-visible":u||void 0,"data-disabled":a.isDisabled||void 0},o.createElement(r.j,{values:[[w,e],[q,a]]},m.children))}const k=(0,o.forwardRef)(M);function D(e,t){return(0,o.useContext)(q)?o.createElement(I,{props:e,forwardedRef:t}):o.createElement(n.f,e)}function I({props:e,forwardedRef:t}){let i=(0,o.useContext)(q),{CollectionRoot:s}=(0,o.useContext)(n.g),{orientation:a="horizontal",keyboardActivation:l="automatic"}=(0,r.$)(w),u=(0,r.l)(t),{tabListProps:d}=function(e,t,i){let{orientation:s="horizontal",keyboardActivation:a="automatic"}=e,{collection:l,selectionManager:u,disabledKeys:c}=t,{direction:d}=(0,p.$)(),b=(0,o.useMemo)((()=>new N(l,d,s,c)),[l,c,s,d]),{collectionProps:h}=(0,n.i)({ref:i,selectionManager:u,keyboardDelegate:b,selectOnFocus:"automatic"===a,disallowEmptySelection:!0,scrollRef:i,linkBehavior:"selection"}),g=(0,r.e)();T.set(t,g);let f=(0,m.$)({...e,id:g});return{tabListProps:{...(0,r.c)(h,f),role:"tablist","aria-orientation":s,tabIndex:void 0}}}({...e,orientation:a,keyboardActivation:l},i,u),b=(0,r.b)({...e,children:null,defaultClassName:"react-aria-TabList",values:{orientation:a,state:i}}),h=(0,c.$)(e);return delete h.id,o.createElement("div",{...h,...d,ref:u,...b,"data-orientation":a||void 0},o.createElement(s,{collection:i.collection,persistedKeys:(0,n.j)(i.selectionManager.focusedKey)}))}const F=(0,o.forwardRef)(D),$=(0,n.d)("item",((e,t,i)=>{let s=(0,o.useContext)(q),a=(0,r.l)(t),{tabProps:l,isSelected:u,isDisabled:m,isPressed:b}=function(e,t,i){let{key:s,isDisabled:a,shouldSelectOnPressUp:l}=e,{selectionManager:u,selectedKey:o}=t,m=s===o,b=a||t.isDisabled||t.selectionManager.isDisabled(s),{itemProps:p,isPressed:h}=(0,n.c)({selectionManager:u,key:s,ref:i,isDisabled:b,shouldSelectOnPressUp:l,linkBehavior:"selection"}),g=K(t,s,"tab"),f=K(t,s,"tabpanel"),{tabIndex:v}=p,x=t.collection.getItem(s),y=(0,c.$)(null==x?void 0:x.props,{labelable:!0});delete y.id;let j=(0,d.a)(null==x?void 0:x.props);return{tabProps:(0,r.c)(y,j,p,{id:g,"aria-selected":m,"aria-disabled":b||void 0,"aria-controls":m?f:void 0,tabIndex:b?void 0:v,role:"tab"}),isSelected:m,isDisabled:b,isPressed:h}}({key:i.key,...e},s,a),{focusProps:p,isFocused:f,isFocusVisible:v}=(0,h.$)(),{hoverProps:x,isHovered:y}=(0,g.$)({isDisabled:m}),j=(0,r.b)({...e,id:void 0,defaultClassName:"react-aria-Tab",values:{isSelected:u,isDisabled:m,isFocused:f,isFocusVisible:v,isPressed:b,isHovered:y}}),T=i.props.href?"a":"div";return o.createElement(T,{...(0,r.c)(l,p,x,j),ref:a,"data-selected":u||void 0,"data-disabled":m||void 0,"data-focused":f||void 0,"data-focus-visible":v||void 0,"data-pressed":b||void 0,"data-hovered":y||void 0})}));function S(e,t){const i=(0,o.useContext)(q);let s=(0,r.l)(t),{tabPanelProps:a}=function(e,t,i){let s=(0,b.$)(i)?void 0:0;var a;const l=K(t,null!==(a=e.id)&&void 0!==a?a:null==t?void 0:t.selectedKey,"tabpanel"),n=(0,m.$)({...e,id:l,"aria-labelledby":K(t,null==t?void 0:t.selectedKey,"tab")});return{tabPanelProps:(0,r.c)(n,{tabIndex:s,role:"tabpanel","aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]})}}(e,i,s),{focusProps:l,isFocused:n,isFocusVisible:u}=(0,h.$)(),d=i.selectedKey===e.id,p=(0,r.b)({...e,defaultClassName:"react-aria-TabPanel",values:{isFocused:n,isFocusVisible:u,isInert:!d,state:i}});if(!d&&!e.shouldForceMount)return null;let g=(0,c.$)(e);delete g.id;let f=d?(0,r.c)(g,a,l,p):p;return o.createElement("div",{...f,ref:s,"data-focused":n||void 0,"data-focus-visible":u||void 0,inert:d?void 0:"true","data-inert":d?void 0:"true"},o.createElement(r.j,{values:[[w,null],[q,null]]},p.children))}const E=(0,u.$)(S),V=e=>{const{children:t,vertical:i,className:a,hidden:l,...n}=e,r=(0,o.useId)();if(l)return null;let u=1,c=1;const d=(Array.isArray(t)?t:[t]).reduce(((e,t,s)=>{var a,l,n;if("TabList"===t.type.displayName){const u=Array.isArray(null==(a=null==t?void 0:t.props)?void 0:a.children)?null==(l=null==t?void 0:t.props)?void 0:l.children:[null==(n=null==t?void 0:t.props)?void 0:n.children].filter(Boolean);return c=((null==u?void 0:u.length)??0)+1,u.length<1?e:[...e,(0,o.cloneElement)(t,{key:s},null==u?void 0:u.map(((e,t)=>(0,o.cloneElement)(e,{id:`tab-${r}-${t+1}`,key:t,isParentVertical:i}))))]}return"TabPanel"===t.type.displayName?[...e,(0,o.cloneElement)(t,{id:`tab-${r}-${u++}`,key:s,className:(0,x.c)(t.props.className,i&&"es-uic-border-l es-uic-border-l-gray-300 es-uic-pl-3")})]:e}),[]);return c!==u?(0,s.jsx)(y.$,{type:"error",label:(0,v._)("Component is not configured correctly. Skipping render to prevent errors.","eightshift-ui-components"),subtitle:(0,v.s)((0,v._)("Number of <Tab>s (%s) and <TabPanel>s (%s) should be the same. <Tab>s should be within a <TabList>.","eightshift-ui-components"),c-1,u-1),alignIconToTitle:!0}):(0,s.jsx)(k,{...n,orientation:i?"vertical":"horizontal",className:(0,x.c)(i?"es-uic-grid es-uic-size-full es-uic-min-h-40 es-uic-grid-cols-[minmax(0,_15rem),_2fr] es-uic-gap-4":"es-uic-flex-col",a),children:d})};V.displayName="Tabs";const A=e=>{const{children:t,"aria-label":i,className:a,...l}=e;return(0,s.jsx)(F,{"aria-label":i??(0,v._)("tabs","eightshift-ui-components"),className:({orientation:e})=>(0,x.c)("es-uic-flex","vertical"===e&&"es-uic-h-full es-uic-flex-col es-uic-gap-px es-uic-pr-1.5","horizontal"===e&&"es-uic-w-full es-uic-items-end es-uic-gap-1 es-uic-border-b es-uic-border-b-gray-300",a),...l,children:t})};A.displayName="TabList";const L=e=>{const{children:t,disabled:i,isParentVertical:a,className:l,icon:n,label:r,subtitle:u,...c}=e;return(0,s.jsxs)($,{...c,isDisabled:i,className:({isSelected:e,isDisabled:t})=>(0,x.c)("es-uic-relative es-uic-flex es-uic-select-none es-uic-items-center es-uic-rounded es-uic-p-1.5 es-uic-text-sm es-uic-transition","focus:es-uic-outline-none focus-visible:es-uic-outline-none focus-visible:es-uic-ring focus-visible:es-uic-ring-teal-500 focus-visible:es-uic-ring-opacity-50",'after:es-uic-absolute after:es-uic-rounded-full after:es-uic-bg-teal-600 after:es-uic-shadow-sm after:es-uic-shadow-teal-500/25 after:es-uic-transition after:es-uic-duration-300 after:es-uic-content-[""]',!a&&"after:es-uic-inset-x-0 after:-es-uic-bottom-px after:es-uic-h-0.5",e&&"es-uic-border-b-teal-600 es-uic-text-teal-900 after:es-uic-opacity-100",e&&a&&"after:es-uic-scale-y-100",e&&!a&&"after:es-uic-scale-x-100",!e&&!t&&"es-uic-text-gray-800 after:es-uic-opacity-0 hover:es-uic-bg-gray-100",!e&&!t&&a&&"after:es-uic-scale-y-75",!e&&!t&&!a&&"after:es-uic-scale-x-75",t&&"es-uic-text-gray-300 after:es-uic-hidden",a&&"es-uic-min-h-9 es-uic-pl-3 after:es-uic-inset-y-0 after:es-uic-left-px after:es-uic-right-auto after:es-uic-my-auto after:es-uic-h-7 after:es-uic-w-[0.1875rem]",l),children:[(n||u)&&(0,s.jsx)(j.b,{icon:n,label:r??t,subtitle:u}),!(n||u)&&(r??t)]})};L.displayName="Tab";const R=e=>{const{children:t,className:i,...a}=e;return(0,s.jsx)(E,{...a,className:(0,x.c)("es-uic-mt-1.5 es-uic-space-y-2.5 es-uic-text-sm focus:es-uic-outline-none",i),children:t})};R.displayName="TabPanel";const z={},W="Tabs",_={id:"es-ui-components/tabs",title:"Tabs",description:"Tab 1",source:"@site/ui-components/es-ui-components/tabs.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/tabs",permalink:"/buanarchery.github.io/components/es-ui-components/tabs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Horizontal and vertical stacks",permalink:"/buanarchery.github.io/components/es-ui-components/stacks"},next:{title:"Repeater",permalink:"/buanarchery.github.io/components/es-ui-components/repeater"}},U={},H=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Vertical tabs",id:"vertical-tabs",level:3},{value:"Misconfiguration alert",id:"misconfiguration-alert",level:2}];function O(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tabs",children:"Tabs"}),"\n","\n",(0,s.jsx)(l.d,{children:(0,s.jsxs)(V,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(L,{children:"Tab 1"}),(0,s.jsx)(L,{children:"Tab 2"})]}),(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta turpis laoreet elit eleifend, eu malesuada\nenim rhoncus. Ut non sollicitudin lectus. Aliquam luctus a mi et vulputate. Maecenas non euismod erat, sed\nscelerisque nisl. Ut eu malesuada velit, quis convallis metus. Pellentesque vel enim vel arcu tempor congue.\nMorbi tristique ante at leo pretium, eget mollis nulla lobortis."})}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"In pharetra blandit cursus. Aliquam luctus augue non enim finibus, suscipit consequat nunc auctor. Mauris\nsagittis placerat augue, ac pretium orci vestibulum sit amet. Vivamus tincidunt malesuada volutpat. Proin non\nluctus ante, non sodales urna. Maecenas volutpat massa in neque tincidunt, sit amet dictum elit faucibus. Cras\nvitae sapien ac risus auctor tincidunt a ut nunc. Vestibulum lacinia auctor sapien nec ultricies. Mauris in\ntortor leo. Nam aliquam turpis in hendrerit pulvinar. Integer eleifend auctor egestas. Proin vitae massa felis.\nPellentesque vel mollis mauris. Integer vehicula massa egestas, molestie odio vel, blandit purus. Duis tincidunt\net massa at consequat."})})]}),(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Aliquam velit tortor, mollis a ligula sed, efficitur porta nisl. Fusce sollicitudin mi vel felis fringilla\nlaoreet. Fusce id elementum nulla, ac commodo diam. Aliquam est elit, scelerisque id ex sed, semper luctus erat.\nSed urna neque, blandit vel arcu nec, ultrices laoreet orci. Etiam a ex ante. Vivamus convallis facilisis nibh,\neget venenatis sapien volutpat non. Aliquam tincidunt lacinia neque quis cursus. Fusce sit amet purus eget metus\nvolutpat vulputate. Aliquam id metus dignissim, commodo leo sed, tincidunt ante. Proin felis mauris, vulputate\nquis justo sed, placerat bibendum nulla. Phasellus rhoncus sem ac sapien blandit vulputate faucibus eu dolor. In\npellentesque fringilla purus et sodales. Nam blandit dolor urna, nec feugiat odio hendrerit nec. Integer\nbibendum magna id orci dapibus, et sollicitudin velit porttitor."})}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Phasellus egestas tellus ut nunc sagittis, a viverra mi lobortis. Maecenas leo diam, semper a erat a, pharetra\nvolutpat turpis. Pellentesque fringilla neque eget venenatis tempor. Vestibulum ac laoreet arcu. Nullam nibh\njusto, efficitur vel arcu ut, tincidunt ultricies ex. Nunc vel vehicula quam. Nullam dictum, massa sit amet\nultricies sagittis, nisi augue cursus metus, et venenatis purus purus vulputate risus. Vivamus malesuada\naccumsan mauris sit amet ornare. Integer nec lorem ut mi mattis dapibus nec nec odio. Ut a ultrices est. Donec\nvehicula, tortor vel faucibus pulvinar, orci nisl facilisis augue, ut mattis sapien sapien et tellus. Etiam\nluctus lorem tincidunt, commodo ipsum sed, suscipit tellus. Phasellus congue nibh quam, eget sagittis enim\nfringilla vitae. Donec volutpat feugiat turpis, laoreet eleifend odio auctor quis."})})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Tabs>\n\t<TabList>\n\t\t<Tab>Tab 1</Tab>\n\t\t<Tab>Tab 2</Tab>\n\t</TabList>\n\t<TabPanel>Tab 1 content</TabPanel>\n\t<TabPanel>Tab 2 content</TabPanel>\n</Tabs>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,s.jsx)(t.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,s.jsx)(t.h3,{id:"vertical-tabs",children:"Vertical tabs"}),"\n",(0,s.jsx)(l.d,{fitWidth:!0,children:(0,s.jsxs)(V,{vertical:!0,children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(L,{children:"Tab 1"}),(0,s.jsx)(L,{children:"Tab 2"})]}),(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta turpis laoreet elit eleifend, eu malesuada\nenim rhoncus. Ut non sollicitudin lectus. Aliquam luctus a mi et vulputate. Maecenas non euismod erat, sed\nscelerisque nisl. Ut eu malesuada velit, quis convallis metus. Pellentesque vel enim vel arcu tempor congue.\nMorbi tristique ante at leo pretium, eget mollis nulla lobortis."})}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"In pharetra blandit cursus. Aliquam luctus augue non enim finibus, suscipit consequat nunc auctor. Mauris\nsagittis placerat augue, ac pretium orci vestibulum sit amet. Vivamus tincidunt malesuada volutpat. Proin non\nluctus ante, non sodales urna. Maecenas volutpat massa in neque tincidunt, sit amet dictum elit faucibus. Cras\nvitae sapien ac risus auctor tincidunt a ut nunc. Vestibulum lacinia auctor sapien nec ultricies. Mauris in\ntortor leo. Nam aliquam turpis in hendrerit pulvinar. Integer eleifend auctor egestas. Proin vitae massa felis.\nPellentesque vel mollis mauris. Integer vehicula massa egestas, molestie odio vel, blandit purus. Duis tincidunt\net massa at consequat."})})]}),(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Aliquam velit tortor, mollis a ligula sed, efficitur porta nisl. Fusce sollicitudin mi vel felis fringilla\nlaoreet. Fusce id elementum nulla, ac commodo diam. Aliquam est elit, scelerisque id ex sed, semper luctus erat.\nSed urna neque, blandit vel arcu nec, ultrices laoreet orci. Etiam a ex ante. Vivamus convallis facilisis nibh,\neget venenatis sapien volutpat non. Aliquam tincidunt lacinia neque quis cursus. Fusce sit amet purus eget metus\nvolutpat vulputate. Aliquam id metus dignissim, commodo leo sed, tincidunt ante. Proin felis mauris, vulputate\nquis justo sed, placerat bibendum nulla. Phasellus rhoncus sem ac sapien blandit vulputate faucibus eu dolor. In\npellentesque fringilla purus et sodales. Nam blandit dolor urna, nec feugiat odio hendrerit nec. Integer\nbibendum magna id orci dapibus, et sollicitudin velit porttitor."})}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Phasellus egestas tellus ut nunc sagittis, a viverra mi lobortis. Maecenas leo diam, semper a erat a, pharetra\nvolutpat turpis. Pellentesque fringilla neque eget venenatis tempor. Vestibulum ac laoreet arcu. Nullam nibh\njusto, efficitur vel arcu ut, tincidunt ultricies ex. Nunc vel vehicula quam. Nullam dictum, massa sit amet\nultricies sagittis, nisi augue cursus metus, et venenatis purus purus vulputate risus. Vivamus malesuada\naccumsan mauris sit amet ornare. Integer nec lorem ut mi mattis dapibus nec nec odio. Ut a ultrices est. Donec\nvehicula, tortor vel faucibus pulvinar, orci nisl facilisis augue, ut mattis sapien sapien et tellus. Etiam\nluctus lorem tincidunt, commodo ipsum sed, suscipit tellus. Phasellus congue nibh quam, eget sagittis enim\nfringilla vitae. Donec volutpat feugiat turpis, laoreet eleifend odio auctor quis."})})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Tabs\n\t// highlight-next-line\n\tvertical\n>\n\t<TabList>\n\t\t<Tab>Tab 1</Tab>\n\t\t<Tab>Tab 2</Tab>\n\t</TabList>\n\t<TabPanel>Tab 1 content</TabPanel>\n\t<TabPanel>Tab 2 content</TabPanel>\n</Tabs>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"misconfiguration-alert",children:"Misconfiguration alert"}),"\n",(0,s.jsxs)(t.p,{children:["If the number of ",(0,s.jsx)(t.code,{children:"Tab"})," elements and ",(0,s.jsx)(t.code,{children:"TabPanel"})," elements doesn't match, an alert will be shown."]}),"\n",(0,s.jsx)(l.d,{children:(0,s.jsxs)(V,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(L,{children:"Tab 1"}),(0,s.jsx)(L,{children:"Tab 2"})]}),(0,s.jsx)(R,{children:"Tab 1 content"})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<Tabs>\n\t<TabList>\n\t\t<Tab>Tab 1</Tab>\n\t\t<Tab>Tab 2</Tab>\n\t</TabList>\n\t<TabPanel>Tab 1 content</TabPanel>\n\t// Missing Tab 2 content\n</Tabs>\n"})})]})}function B(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(O,{...e})}):O(e)}},34842:(e,t,i)=>{i.d(t,{d:()=>u});var s=i(96540),a=i(82972),l=i(34164),n=i(78478),r=i(74848);const u=e=>{let{children:t,defaultValue:i,className:u,fitWidth:c=!1,resettable:o=!1,preContent:d}=e;const[m,b]=(0,s.useState)(i),p=(0,s.useRef)();return(0,r.jsx)(n.A,{children:()=>(0,r.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,r.jsxs)("div",{className:(0,l.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",c?"es-uic-w-fit":"es-uic-w-96",u),children:["function"==typeof t&&t(m,b),"function"!=typeof t&&t]}),(0,r.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[d&&d(m,b,p),o&&(0,r.jsx)(a.$,{size:"small",onPress:()=>b(i),disabled:m===i,children:"Reset"})]})]})})}},47996:(e,t,i)=>{i.d(t,{$:()=>n});var s=i(74848),a=i(49189),l=i(13731);const n=e=>{const{icon:t,label:i,subtitle:n,className:r,type:u="default",alignIconToTitle:c=!1,hidden:o}=e;if(o)return null;const d={info:{icon:l.Pt.infoCircle,className:"es-uic-border-blue-400 es-uic-shadow-blue-500/15 es-uic-bg-blue-100/5",iconColor:"es-uic-text-blue-400",textColor:"es-uic-text-blue-900",subtitleColor:"es-uic-text-blue-950/60"},success:{icon:l.Pt.checkSquare,className:"es-uic-border-green-500 es-uic-shadow-green-500/15 es-uic-bg-green-100/5",iconColor:"es-uic-text-green-500",textColor:"es-uic-text-green-900",subtitleColor:"es-uic-text-green-950/60"},warning:{icon:l.Pt.warning,className:"es-uic-border-amber-500 es-uic-shadow-amber-500/15 es-uic-bg-amber-100/5",iconColor:"es-uic-text-amber-500",textColor:"es-uic-text-amber-900",subtitleColor:"es-uic-text-amber-950/60"},error:{icon:l.Pt.errorCircle,className:"es-uic-border-red-400 es-uic-shadow-red-500/15 es-uic-bg-red-100/5",iconColor:"es-uic-text-red-400",textColor:"es-uic-text-red-900",subtitleColor:"es-uic-text-red-950/60"},placeholder:{icon:l.Pt.componentGeneric,className:"es-uic-border-slate-300 es-uic-shadow-slate-300/25 es-uic-border-dashed es-uic-bg-slate-200/5",iconColor:"es-uic-text-slate-400",textColor:"es-uic-text-slate-900",subtitleColor:"es-uic-text-slate-500"},default:{className:"es-uic-border-gray-300 es-uic-shadow-gray-300/25 es-uic-bg-gray-200/5",iconColor:"es-uic-text-gray-400",textColor:"es-uic-text-gray-900",subtitleColor:"es-uic-text-gray-500"}};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:(0,a.c)("es-uic-grid es-uic-grid-cols-[auto,_1fr] es-uic-grid-rows-[auto,_auto] es-uic-rounded-md es-uic-border es-uic-bg-gradient-to-tr es-uic-shadow-sm",d[u].className,t||d[u].icon?"es-uic-gap-x-1.5 es-uic-p-1.5":"es-uic-px-2 es-uic-py-1.5",r),children:[(t||d[u].icon)&&(0,s.jsx)("span",{className:(0,a.c)("es-uic-col-span-1 es-uic-col-start-1 es-uic-row-span-2 es-uic-row-start-1 es-uic-shrink-0 es-uic-self-center [&>svg]:es-uic-size-7",c?"es-uic-self-baseline":"es-uic-self-center",d[u].iconColor),children:t??d[u].icon}),i&&(0,s.jsx)("span",{className:(0,a.c)("es-uic-col-span-2 es-uic-col-start-2 es-uic-text-balance es-uic-text-sm es-uic-leading-tight",n?"es-uic-self-end":"es-uic-row-span-2 es-uic-self-center",d[u].textColor),children:i}),n&&(0,s.jsx)("span",{className:(0,a.c)("es-uic-col-span-2 es-uic-col-start-2 es-uic-text-balance es-uic-text-xs es-uic-leading-tight",d[u].subtitleColor,i?"es-uic-self-start":"es-uic-row-span-2 es-uic-self-center"),children:n})]})})}},54754:(e,t,i)=>{i.d(t,{b:()=>l});var s=i(74848),a=i(49189);const l=e=>{const{icon:t,label:i,subtitle:l,as:n,className:r,fullWidth:u=!1,contentsOnly:c,hidden:o,noColor:d}=e;if(o)return null;const m=n??"div";return c?(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)("span",{className:(0,a.c)("[&>svg]:es-uic-size-5.5",!d&&"es-uic-text-slate-500"),children:t}),i&&(0,s.jsx)("span",{className:(0,a.c)("es-uic-text-balance",!d&&"es-uic-text-gray-800"),children:i}),l&&(0,s.jsx)("span",{className:(0,a.c)("es-uic-text-balance es-uic-text-xs es-uic-opacity-65",!d&&"es-uic-text-gray-800"),children:l})]}):(0,s.jsxs)(m,{className:(0,a.c)("es-uic-flex es-uic-items-center es-uic-gap-1.5 es-uic-text-sm",!d&&"es-uic-text-gray-800 [&>span>svg]:es-uic-text-slate-500",d&&"[&>span>svg]:es-uic-opacity-80",u&&"es-uic-grow",r),children:[t&&(0,s.jsx)("span",{className:"[&>svg]:es-uic-size-5.5",children:t}),(i||l)&&(0,s.jsxs)("div",{className:"es-uic-flex es-uic-flex-col es-uic-items-start es-uic-text-balance es-uic-text-start",children:[i&&(0,s.jsx)("span",{children:i}),l&&(0,s.jsx)("span",{className:"es-uic-text-xs es-uic-opacity-65",children:l})]})]})}},29096:(e,t,i)=>{function s(e,t){let i=window.getComputedStyle(e),s=/(auto|scroll)/.test(i.overflow+i.overflowX+i.overflowY);return s&&t&&(s=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),s}i.d(t,{$:()=>s})},37368:(e,t,i)=>{i.d(t,{$:()=>n});var s=i(20152),a=i(67680),l=i(96540);function n(e,t){let i=null==t?void 0:t.isDisabled,[n,r]=(0,l.useState)(!1);return(0,a.g)((()=>{if((null==e?void 0:e.current)&&!i){let t=()=>{if(e.current){let t=(0,s.a)(e.current,{tabbable:!0});r(!!t.nextNode())}};t();let i=new MutationObserver(t);return i.observe(e.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{i.disconnect()}}})),!i&&n}},93677:(e,t,i)=>{i.d(t,{$:()=>a});var s=i(67680);function a(e,t){let{id:i,"aria-label":a,"aria-labelledby":l}=e;if(i=(0,s.e)(i),l&&a){let e=new Set([i,...l.trim().split(/\s+/)]);l=[...e].join(" ")}else l&&(l=l.trim().split(/\s+/).join(" "));return a||l||!t||(a=t),{id:i,"aria-label":a,"aria-labelledby":l}}},56859:(e,t,i)=>{i.d(t,{$:()=>n,a:()=>l});var s=i(62993),a=i(96540);class l{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){this.keyMap=new Map,this.iterable=e;let t,i=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)i(t)};for(let a of e)i(a);let s=0;for(let[a,l]of this.keyMap)t?(t.nextKey=a,l.prevKey=t.key):(this.firstKey=a,l.prevKey=void 0),"item"===l.type&&(l.index=s++),t=l,t.nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function n(e){let{filter:t}=e,i=(0,s.$)(e),n=(0,a.useMemo)((()=>e.disabledKeys?new Set(e.disabledKeys):new Set),[e.disabledKeys]),r=(0,a.useCallback)((e=>new l(t?t(e):e)),[t]),u=(0,a.useMemo)((()=>({suppressTextValueWarning:e.suppressTextValueWarning})),[e.suppressTextValueWarning]),c=(0,s.a)(e,r,u),o=(0,a.useMemo)((()=>new s.b(c,i)),[c,i]);const d=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(null!=i.focusedKey&&!c.getItem(i.focusedKey)){const e=d.current.getItem(i.focusedKey),t=[...d.current.getKeys()].map((e=>{const t=d.current.getItem(e);return"item"===t.type?t:null})).filter((e=>null!==e)),s=[...c.getKeys()].map((e=>{const t=c.getItem(e);return"item"===t.type?t:null})).filter((e=>null!==e)),a=t.length-s.length;let l,n=Math.min(a>1?Math.max(e.index-a+1,0):e.index,s.length-1),r=!1;for(;n>=0;){if(!o.isDisabled(s[n].key)){l=s[n];break}n<s.length-1&&!r?n++:(r=!0,n>e.index&&(n=e.index),n--)}i.setFocusedKey(l?l.key:null)}d.current=c}),[c,o,i,i.focusedKey]),{collection:c,disabledKeys:n,selectionManager:o}}},60099:(e,t,i)=>{i.d(t,{$:()=>n});var s=i(56859),a=i(1234),l=i(96540);function n(e){var t;let[i,n]=(0,a.e)(e.selectedKey,null!==(t=e.defaultSelectedKey)&&void 0!==t?t:null,e.onSelectionChange),r=(0,l.useMemo)((()=>null!=i?[i]:[]),[i]),{collection:u,disabledKeys:c,selectionManager:o}=(0,s.$)({...e,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:r,onSelectionChange:t=>{var s;let a=null!==(s=t.values().next().value)&&void 0!==s?s:null;a===i&&e.onSelectionChange&&e.onSelectionChange(a),n(a)}}),d=null!=i?u.getItem(i):null;return{collection:u,disabledKeys:c,selectionManager:o,selectedKey:i,setSelectedKey:n,selectedItem:d}}}}]);