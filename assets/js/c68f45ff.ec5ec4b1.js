"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[587],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(58168),o=(n(96540),n(15680));const i={sidebar_position:1},l="PreBlocker",a={unversionedId:"docs/build/building-modules/preblock",id:"docs/build/building-modules/preblock",title:"PreBlocker",description:"PreBlocker is optional method module developers can implement in their module. They will be triggered before BeginBlock.",source:"@site/cosmos-sdk/docs/build/building-modules/17-preblock.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/preblock",permalink:"/cosmos-sdk/next/docs/build/building-modules/preblock",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Testing",permalink:"/cosmos-sdk/next/docs/build/building-modules/testing"},next:{title:"Hooks",permalink:"/cosmos-sdk/next/docs/build/building-modules/define-hooks"}},s={},d=[{value:"PreBlocker",id:"preblocker-1",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"preblocker"},"PreBlocker"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"PreBlocker")," is optional method module developers can implement in their module. They will be triggered before ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/learn/advanced/baseapp#beginblock"},(0,o.yg)("inlineCode",{parentName:"a"},"BeginBlock")),".")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/build/building-modules/module-manager"},"Module Manager")))),(0,o.yg)("h2",{id:"preblocker-1"},"PreBlocker"),(0,o.yg)("p",null,"There are two semantics around the new lifecycle method:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It runs before the ",(0,o.yg)("inlineCode",{parentName:"li"},"BeginBlocker")," of all modules"),(0,o.yg)("li",{parentName:"ul"},"It can modify consensus parameters in storage, and signal the caller through the return value.")),(0,o.yg)("p",null,"Modules are required to get the consensus params from the consensus module. Consensus params located in ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Context")," were deprecated and should be treated as unsafe. ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Context")," is deprecated due to it being a global state within the entire state machine, it has been replaced with ",(0,o.yg)("inlineCode",{parentName:"p"},"appmodule.Environment"),"."))}p.isMDXComponent=!0}}]);