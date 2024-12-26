/*! For license information please see 1dc7e5de.e6ba6348.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[37697],{66693:(e,l,o)=>{o.r(l),o.d(l,{assets:()=>j,contentTitle:()=>f,default:()=>y,frontMatter:()=>b,metadata:()=>v,toc:()=>C});var n=o(74848),r=o(28453),s=o(34842),t=o(6314),i=o(56570),a=o(75053),c=o(54754),u=o(23338),d=o(49189),h=o(13731);const g=e=>{var l,o;const{icon:r,label:s,subtitle:g,labelClassName:p,value:m,onChange:x,colors:b,showColorCode:f,noColorGroups:v,type:j="default",stacked:C,clearable:k,hidden:y,tooltip:w,...F}=e;if(y)return null;const N=null==(l=null==b?void 0:b.find((({slug:e})=>e===m)))?void 0:l.color,P=/(?!^.+)(-?(?:50|100|200|300|400|500|600|700|800|900|950|10|20|30|40|50|60|70|80|90){1})$/gi,$=!v&&(null==b?void 0:b.some((({slug:e})=>P.test(e))));let _;const D={generic:(0,t._)("Other colors","eightshift-ui-components")};$&&(_=b.reduce(((e,l)=>{var o;if(void 0===l||void 0===(null==l?void 0:l.name)||void 0===(null==l?void 0:l.slug))return e;if(null==(o=l.slug.match(P))?void 0:o.length){const o=l.slug.replace(P,"").trim();e[o]||(e[o]=[],D[o]=l.name.replace(P,"").trim()),e[o]=[...e[o],{...l,shade:l.slug.match(P)[0].replace("-","")}]}else e.generic=[...e.generic,l];return e}),{generic:[]}));const R=({name:e,slug:l,color:o,...r})=>(0,n.jsxs)(i.Dr,{...r,endIcon:(0,n.jsx)(a.q,{className:"!es-uic-size-5.5",color:o}),onClick:()=>{x(k&&m===l?void 0:l)},checked:k?m===l:null,selected:k?null:m===l,children:[!f&&e,f&&(0,n.jsx)(c.b,{label:e,subtitle:o.toUpperCase()})]});let S,B;"default"===j?S=(0,t._)("Color","eightshift-ui-components"):"fillColor"===j?(S=(0,t._)("Fill color","eightshift-ui-components"),B=h.Pt.colorPickerFill):"textColor"===j?(S=(0,t._)("Text color","eightshift-ui-components"),B=h.Pt.colorPickerText):"textHighlightColor"===j?(S=(0,t._)("Text highlight color","eightshift-ui-components"),B=h.Pt.colorPickerTextHighlight):"listMarkerColor"===j&&(S=(0,t._)("List marker color","eightshift-ui-components"),B=h.Pt.colorPickerListMarker);const T=null==(o=null==b?void 0:b.find((e=>(null==e?void 0:e.slug)===m)))?void 0:o.name;return!s&&S?S=(0,n.jsx)(c.b,{label:S,subtitle:T,noColor:!0}):!s&&w?S=(0,n.jsx)(c.b,{label:w,subtitle:T,noColor:!0}):s&&(S=T),(0,n.jsx)(u.p,{icon:r,label:s,subtitle:g,className:(0,d.c)("es-uic-w-full",p),inline:!C,children:(0,n.jsxs)(i.W1,{triggerIcon:(0,n.jsxs)(n.Fragment,{children:[("default"===j||r)&&(0,n.jsx)(a.q,{color:N,className:"!es-uic-size-6 !es-uic-shadow-none"}),!r&&"default"!==j&&(0,n.jsxs)("div",{className:"es-uic-relative es-uic-size-6 [&>svg]:es-uic-absolute [&>svg]:es-uic-inset-0 [&>svg]:es-uic-size-full",children:[B,(0,n.jsx)(a.q,{color:N,className:"es-uic-absolute -es-uic-bottom-0.5 es-uic-left-0 !es-uic-h-2 !es-uic-shadow-none"})]})]}),keepOpen:!0,tooltip:S,triggerProps:{...F.triggerProps,"aria-label":void 0!==s?null:null==e?void 0:e["aria-label"]},...F,children:[(v||!$)&&b.map((e=>(0,n.jsx)(R,{...e},e.slug))),$&&(0,n.jsxs)(n.Fragment,{children:[Object.entries(_).map((([e,l])=>"generic"===e?null:(0,n.jsx)(i.H9,{label:D[e],children:l.map((e=>(0,n.jsx)(R,{...e},e.slug)))},e))),_.generic.length>0&&(0,n.jsx)(i.H9,{"aria-label":D.generic,children:_.generic.map((e=>(0,n.jsx)(R,{...e},e.slug)))})]})]})})};var p=o(69314);const m=[{name:"Red",slug:"red",color:"#FF0000"},{name:"Green",slug:"green",color:"#00FF00"},{name:"Blue",slug:"blue",color:"#0000FF"},{name:"Yellow",slug:"yellow",color:"#FFFF00"},{name:"Black",slug:"black",color:"#000000"},{name:"White",slug:"white",color:"#FFFFFF"}],x=[{name:"Red 50",slug:"red-50",color:"#fef2f2"},{name:"Red 500",slug:"red-500",color:"#ef4444"},{name:"Red 800",slug:"red-800",color:"#991b1b"},{name:"Blue 100",slug:"blue100",color:"#dbeafe"},{name:"Blue 500",slug:"blue500",color:"#3b82f6"},{name:"Blue 700",slug:"blue700",color:"#1d4ed8"},{name:"Green 500",slug:"green-500",color:"#22c55e"},{name:"Black",slug:"black",color:"#000000"},{name:"White",slug:"white",color:"#FFFFFF"}],b={},f="Color picker",v={id:"es-ui-components/color-picker",title:"Color picker",description:"{(data, setData) => {",source:"@site/ui-components/es-ui-components/color-picker.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/color-picker",permalink:"/buanarchery.github.io/components/es-ui-components/color-picker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Customization",permalink:"/buanarchery.github.io/components/es-ui-components/select-customization"},next:{title:"Solid color picker",permalink:"/buanarchery.github.io/components/es-ui-components/solid-color-picker"}},j={},C=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Allow deselecting a color",id:"allow-deselecting-a-color",level:3},{value:"Disable color grouping",id:"disable-color-grouping",level:3},{value:"Show color hex code in the dropdown",id:"show-color-hex-code-in-the-dropdown",level:3},{value:"Picker type",id:"picker-type",level:3}];function k(e){const l={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"color-picker",children:"Color picker"}),"\n","\n",(0,n.jsx)(s.d,{defaultValue:"blue",children:(e,l)=>(0,n.jsx)(g,{value:e,onChange:l,"aria-label":"Color picker",colors:m})}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-jsx",children:"const defaultColors = [\n\t{\n\t\tname: 'Red',\n\t\tslug: 'red',\n\t\tcolor: '#FF0000',\n\t},\n\t{\n\t\tname: 'Green',\n\t\tslug: 'green',\n\t\tcolor: '#00FF00',\n\t},\n\t{\n\t\tname: 'Blue',\n\t\tslug: 'blue',\n\t\tcolor: '#0000FF',\n\t},\n\t...\n];\n\n<ColorPicker\n\tvalue={value}\n\tonChange={(value) => setData(value)}\n\tcolors={myColors}\n/>\n"})}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsxs)(l.p,{children:["In Frontend libs and Frontend libs Tailwind you can use the ",(0,n.jsx)(l.code,{children:"getOption"})," helper to fetch the color data based on the list in the manifes."]})}),"\n",(0,n.jsx)(l.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,n.jsx)(l.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,n.jsx)(l.h3,{id:"allow-deselecting-a-color",children:"Allow deselecting a color"}),"\n",(0,n.jsx)(s.d,{defaultValue:"blue500",children:(e,l)=>(0,n.jsx)(g,{value:e,onChange:l,"aria-label":"Color picker",colors:x,clearable:!0})}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-jsx",children:"<ColorPicker\n\tvalue={value}\n\tonChange={(value) => setData(value)}\n\tcolors={myColors}\n\t// highlight-next-line\n\tclearable\n/>\n"})}),"\n",(0,n.jsx)(l.h3,{id:"disable-color-grouping",children:"Disable color grouping"}),"\n",(0,n.jsxs)(l.p,{children:["By default, colors are grouped by their names, e.g. ",(0,n.jsx)(l.code,{children:"red-100"}),", ",(0,n.jsx)(l.code,{children:"red-200"}),", ",(0,n.jsx)(l.code,{children:"red-300"}),"..."]}),"\n",(0,n.jsx)(s.d,{defaultValue:"blue500",children:(e,l)=>(0,n.jsx)(g,{value:e,onChange:l,"aria-label":"Color picker",colors:x,noColorGroups:!0})}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-jsx",children:"<ColorPicker\n\tvalue={value}\n\tonChange={(value) => setData(value)}\n\tcolors={myColors}\n\t// highlight-next-line\n\tnoColorGroups\n/>\n"})}),"\n",(0,n.jsx)(l.h3,{id:"show-color-hex-code-in-the-dropdown",children:"Show color hex code in the dropdown"}),"\n",(0,n.jsx)(s.d,{defaultValue:"blue500",children:(e,l)=>(0,n.jsx)(g,{value:e,onChange:l,"aria-label":"Color picker",colors:x,showColorCode:!0})}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-jsx",children:"<ColorPicker\n\tvalue={value}\n\tonChange={(value) => setData(value)}\n\tcolors={myColors}\n\t// highlight-next-line\n\tshowColorCode\n/>\n"})}),"\n",(0,n.jsx)(l.h3,{id:"picker-type",children:"Picker type"}),"\n",(0,n.jsx)(s.d,{defaultValue:{color:"blue500",type:"default"},preContent:(e,o)=>(0,n.jsx)(p.w,{label:"Type",value:e.type,onChange:l=>o({...e,type:l}),options:[{value:"default",label:"Default",subtitle:(0,n.jsx)(l.span,{className:"es-uic-font-mono",children:"default"})},{value:"fillColor",label:"Fill color",subtitle:(0,n.jsx)(l.span,{className:"es-uic-font-mono",children:"fillColor"})},{value:"textColor",label:"Text color",subtitle:(0,n.jsx)(l.span,{className:"es-uic-font-mono",children:"textColor"})},{value:"textHighlightColor",label:"Text highlight color",subtitle:(0,n.jsx)(l.span,{className:"es-uic-font-mono",children:"textHighlightColor"})},{value:"listMarkerColor",label:"List marker color",subtitle:(0,n.jsx)(l.span,{className:"es-uic-font-mono",children:"listMarkerColor"})}],type:"menu"}),children:(e,l)=>(0,n.jsx)(g,{value:e.color,onChange:o=>l({...e,color:o}),"aria-label":"Color picker",colors:x,type:e.type})}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-jsx",children:"<ColorPicker\n\tvalue={value}\n\tonChange={(value) => setData(value)}\n\tcolors={myColors}\n\t// highlight-next-line\n\ttype='textColor'\n/>\n"})})]})}function y(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},34842:(e,l,o)=>{o.d(l,{d:()=>a});var n=o(96540),r=o(82972),s=o(34164),t=o(78478),i=o(74848);const a=e=>{let{children:l,defaultValue:o,className:a,fitWidth:c=!1,resettable:u=!1,preContent:d}=e;const[h,g]=(0,n.useState)(o),p=(0,n.useRef)();return(0,i.jsx)(t.A,{children:()=>(0,i.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,i.jsxs)("div",{className:(0,s.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",c?"es-uic-w-fit":"es-uic-w-96",a),children:["function"==typeof l&&l(h,g),"function"!=typeof l&&l]}),(0,i.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[d&&d(h,g,p),u&&(0,i.jsx)(r.$,{size:"small",onPress:()=>g(o),disabled:h===o,children:"Reset"})]})]})})}},4323:(e,l,o)=>{o.d(l,{$:()=>d});var n=o(67680),r=o(27699),s=o(35971),t=o(96540),i=o(29116),a=o(97854);const c=(0,t.createContext)(null);function u(e,l){[e,l]=(0,n.a)(e,l,c);let{colorSwatchProps:o,color:u}=function(e){let{color:l,colorName:o}=e,c=l||"#fff0",u=(0,t.useMemo)((()=>"string"==typeof c?(0,r.$)(c):c),[c]),{locale:d}=(0,i.$)(),h=(0,s.$)(e,{labelable:!0}),g=(0,a.$)((p=r.a)&&p.__esModule?p.default:p,"@react-aria/color");var p;let m=(0,n.e)(e.id);return o||(o=0===u.getChannelValue("alpha")?g.format("transparent"):u.getColorName(d)),{colorSwatchProps:{...h,role:"img","aria-roledescription":g.format("colorSwatch"),"aria-label":[o,e["aria-label"]||""].filter(Boolean).join(", "),"aria-labelledby":e["aria-labelledby"]?`${m} ${e["aria-labelledby"]}`:void 0,id:m,style:{backgroundColor:u.toString("css"),forcedColorAdjust:"none"}},color:u||null}}(e),d=(0,n.b)({...e,defaultClassName:"react-aria-ColorSwatch",defaultStyle:o.style,values:{color:u}});return t.createElement("div",{...o,...d,slot:e.slot||void 0,ref:l})}const d=(0,t.forwardRef)(u)},75053:(e,l,o)=>{o.d(l,{q:()=>a});var n=o(74848),r=o(4323),s=o(27699),t=o(49189),i=o(6314);const a=e=>{const{color:l,gradient:o,className:a,colorName:c}=e,u="repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 0.75rem 0.75rem";let d;if(l&&!o)try{d="transparent"===l?"rgba(0, 0, 0, 0)":(0,s.$)(l)}catch(g){d=null}const h=o?`${o}, ${u}`:`linear-gradient(${d}, ${d}), ${u}`;return(0,n.jsx)(r.$,{...e,style:{background:(d||o)&&h},className:()=>(0,t.c)("es-uic-size-6 es-uic-rounded es-uic-border es-uic-border-gray-300 es-uic-shadow-sm",!d&&!o&&"es-uic-bg-white",a),colorName:d||o?c:(0,i._)("No color","eightshift-ui-components"),color:d,children:!d&&!o&&(0,n.jsx)("div",{className:"es-uic-m-auto es-uic-h-full es-uic-w-px es-uic-rotate-45 es-uic-rounded es-uic-bg-red-500"})})}}}]);