"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[74178],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(58168),a=(n(96540),n(15680));const i={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/interchain-accounts/overview"},r="Overview",c={unversionedId:"apps/interchain-accounts/overview",id:"version-v5.4.x/apps/interchain-accounts/overview",title:"Overview",description:"Learn about what the Interchain Accounts module is, and how to build custom modules that utilize Interchain Accounts functionality",source:"@site/ibc-go_versioned_docs/version-v5.4.x/02-apps/02-interchain-accounts/01-overview.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/overview",permalink:"/ibc-go/v5.4.x/apps/interchain-accounts/overview",draft:!1,tags:[],version:"v5.4.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/interchain-accounts/overview"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/ibc-go/v5.4.x/apps/transfer/params"},next:{title:"Authentication Modules",permalink:"/ibc-go/v5.4.x/apps/interchain-accounts/auth-modules"}},s={},l=[{value:"What is the Interchain Accounts module?",id:"what-is-the-interchain-accounts-module",level:2},{value:"Concepts",id:"concepts",level:2},{value:"SDK Security Model",id:"sdk-security-model",level:2}],u={toc:l},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"overview"},"Overview"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Learn about what the Interchain Accounts module is, and how to build custom modules that utilize Interchain Accounts functionality ")),(0,a.yg)("h2",{id:"what-is-the-interchain-accounts-module"},"What is the Interchain Accounts module?"),(0,a.yg)("p",null,"Interchain Accounts is the Cosmos SDK implementation of the ICS-27 protocol, which enables cross-chain account management built upon IBC. Chains using the Interchain Accounts module can programmatically create accounts on other chains and control these accounts via IBC transactions. "),(0,a.yg)("p",null,"Interchain Accounts exposes a simple-to-use API which means IBC application developers do not require an in-depth knowledge of the underlying low-level details of IBC or the ICS-27 protocol. "),(0,a.yg)("p",null,"Developers looking to build upon Interchain Accounts must write custom logic in their own IBC application module, called authentication modules."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"How is an interchain account different than a regular account?")),(0,a.yg)("p",null,"Regular accounts use a private key to sign transactions on-chain. Interchain Accounts are instead controlled programmatically by separate chains via IBC transactions. Interchain Accounts are implemented as sub-accounts of the interchain accounts module account. "),(0,a.yg)("h2",{id:"concepts"},"Concepts"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Host Chain"),": The chain where the interchain account is registered. The host chain listens for IBC packets from a controller chain which should contain instructions (e.g. cosmos SDK messages) for which the interchain account will execute."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Controller Chain"),": The chain registering and controlling an account on a host chain. The controller chain sends IBC packets to the host chain to control the account. A controller chain must have at least one interchain accounts authentication module in order to act as a controller chain. "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Authentication Module"),": A custom IBC application module on the controller chain that uses the Interchain Accounts module API to build custom logic for the creation & management of interchain accounts. For a controller chain to utilize the interchain accounts module functionality, an authentication module is required."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Interchain Account"),": An account on a host chain. An interchain account has all the capabilities of a normal account. However, rather than signing transactions with a private key, a controller chain's authentication module will send IBC packets to the host chain which signals what transactions the interchain account should execute."),(0,a.yg)("h2",{id:"sdk-security-model"},"SDK Security Model"),(0,a.yg)("p",null,"SDK modules on a chain are assumed to be trustworthy.  For example, there are no checks to prevent an untrustworthy module from accessing the bank keeper."),(0,a.yg)("p",null,"The implementation of ICS27 on ibc-go uses this assumption in its security considerations. The implementation assumes the authentication module will not try to open channels on owner addresses it does not control. "),(0,a.yg)("p",null,"The implementation assumes other IBC application modules will not bind to ports within the ICS27 namespace."))}p.isMDXComponent=!0}}]);