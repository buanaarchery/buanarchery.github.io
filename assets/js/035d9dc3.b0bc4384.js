"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[33418],{41367:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(74848),s=i(28453);const r={id:"intro",title:"Intro"},o=void 0,d={id:"addons/premium/computed-fields/intro",title:"Intro",description:"Computed Fields add-on provides the ability to do more advanced calculations and complex logic using a custom, PHP-based programming language. Multiple output variables can be set to further customize the output.",source:"@site/forms/addons/premium/computed-fields/intro.md",sourceDirName:"addons/premium/computed-fields",slug:"/addons/premium/computed-fields/intro",permalink:"/buanarchery.github.io/forms/addons/premium/computed-fields/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"intro",title:"Intro"},sidebar:"forms",previous:{title:"Intro",permalink:"/buanarchery.github.io/forms/addons/premium/intro"},next:{title:"How to use?",permalink:"/buanarchery.github.io/forms/addons/premium/computed-fields/how-to-use"}},c={},a=[{value:"What are Computed Fields?",id:"what-are-computed-fields",level:2},{value:"Supported features and tokens",id:"supported-features-and-tokens",level:2},{value:"Notably missing or different",id:"notably-missing-or-different",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Computed Fields add-on provides the ability to do more advanced calculations and complex logic using a custom, PHP-based programming language. Multiple output variables can be set to further customize the output."}),"\n",(0,t.jsx)(n.h2,{id:"what-are-computed-fields",children:"What are Computed Fields?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Forms computed language"})," (FCL) is a subset of PHP designed to be safe to execute when the code entered is arbitrary user input, while allowing users to manipulate variables, use flow control features and run functions."]}),"\n",(0,t.jsxs)(n.p,{children:["It relies on ",(0,t.jsx)(n.code,{children:"@nikic/php-parser"})," to produce an abstract syntax tree, and implements a ",(0,t.jsx)(n.code,{children:"virtual machine"})," for evaluating a subset of PHP tokens in a safe manner in PHP."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-features-and-tokens",children:"Supported features and tokens"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Basic variables (numeric, boolean and string types)"}),"\n",(0,t.jsx)(n.li,{children:"Fetching constants from PHP"}),"\n",(0,t.jsxs)(n.li,{children:["Arithmetic and logical operators (",(0,t.jsx)(n.code,{children:"+, -, /, *, !, &&, ||"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Assignment operators (",(0,t.jsx)(n.code,{children:"+=, .= etc."}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Comparison operators (",(0,t.jsx)(n.code,{children:"<, <=, =="}),"), string concatenation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"if/elseif/else"})," blocks"]}),"\n",(0,t.jsxs)(n.li,{children:["The ternary ",(0,t.jsx)(n.code,{children:"if ? then : else"})," operator"]}),"\n",(0,t.jsxs)(n.li,{children:["Unary plus and minus (e.g. ",(0,t.jsx)(n.code,{children:"-1, +1"})," are valid)"]}),"\n",(0,t.jsxs)(n.li,{children:["Function calls to FCL-provided functions (",(0,t.jsx)(n.code,{children:"currently"}),", ",(0,t.jsx)(n.code,{children:"countSelectedItems"}),", ",(0,t.jsx)(n.code,{children:"round"})," and ",(0,t.jsx)(n.code,{children:"isSelected"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notably-missing-or-different",children:"Notably missing or different"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Arrays can't be defined or manipulated with using FCL, apart from arrays that are defined during VM initialization (which can be counted and checked to see if an entry exists)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"++"}),", ",(0,t.jsx)(n.code,{children:"--"})," and ",(0,t.jsx)(n.code,{children:"==="})," operators"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"switch"})," and ",(0,t.jsx)(n.code,{children:"match"})," blocks"]}),"\n",(0,t.jsx)(n.li,{children:"User-defined functions"}),"\n",(0,t.jsx)(n.li,{children:"OOP and namespaces"}),"\n",(0,t.jsx)(n.li,{children:"References and unpacking"}),"\n",(0,t.jsxs)(n.li,{children:["Superglobals (",(0,t.jsx)(n.code,{children:"$_GET"})," etc.)"]}),"\n",(0,t.jsxs)(n.li,{children:["Output to ",(0,t.jsx)(n.code,{children:"stdout"}),", files etc. (you can not echo anything)"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);