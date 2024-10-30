"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[12283],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(58168),a=(n(96540),n(15680));const r={sidebar_position:1},i="Object-Capability Model",c={unversionedId:"learn/advanced/ocap",id:"version-0.47/learn/advanced/ocap",title:"Object-Capability Model",description:"Intro",source:"@site/cosmos-sdk_versioned_docs/version-0.47/learn/advanced/10-ocap.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/ocap",permalink:"/cosmos-sdk/0.47/learn/advanced/ocap",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"gRPC, REST, and CometBFT Endpoints",permalink:"/cosmos-sdk/0.47/learn/advanced/grpc_rest"},next:{title:"Telemetry",permalink:"/cosmos-sdk/0.47/learn/advanced/telemetry"}},s={},l=[{value:"Intro",id:"intro",level:2},{value:"Ocaps in practice",id:"ocaps-in-practice",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"object-capability-model"},"Object-Capability Model"),(0,a.yg)("h2",{id:"intro"},"Intro"),(0,a.yg)("p",null,"When thinking about security, it is good to start with a specific threat model. Our threat model is the following:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"We assume that a thriving ecosystem of Cosmos SDK modules that are easy to compose into a blockchain application will contain faulty or malicious modules.")),(0,a.yg)("p",null,"The Cosmos SDK is designed to address this threat by being the\nfoundation of an object capability system."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The structural properties of object capability systems favor\nmodularity in code design and ensure reliable encapsulation in\ncode implementation."),(0,a.yg)("p",{parentName:"blockquote"},"These structural properties facilitate the analysis of some\nsecurity properties of an object-capability program or operating\nsystem. Some of these \u2014 in particular, information flow properties\n\u2014 can be analyzed at the level of object references and\nconnectivity, independent of any knowledge or analysis of the code\nthat determines the behavior of the objects."),(0,a.yg)("p",{parentName:"blockquote"},"As a consequence, these security properties can be established\nand maintained in the presence of new objects that contain unknown\nand possibly malicious code."),(0,a.yg)("p",{parentName:"blockquote"},"These structural properties stem from the two rules governing\naccess to existing objects:"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"An object A can send a message to B only if object A holds a\nreference to B."),(0,a.yg)("li",{parentName:"ol"},'An object A can obtain a reference to C only\nif object A receives a message containing a reference to C. As a\nconsequence of these two rules, an object can obtain a reference\nto another object only through a preexisting chain of references.\nIn short, "Only connectivity begets connectivity."'))),(0,a.yg)("p",null,"For an introduction to object-capabilities, see this ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-capability_model"},"Wikipedia article"),"."),(0,a.yg)("h2",{id:"ocaps-in-practice"},"Ocaps in practice"),(0,a.yg)("p",null,"The idea is to only reveal what is necessary to get the work done."),(0,a.yg)("p",null,"For example, the following code snippet violates the object capabilities\nprinciple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'type AppAccount struct {...}\naccount := &AppAccount{\n    Address: pub.Address(),\n    Coins: sdk.Coins{sdk.NewInt64Coin("ATM", 100)},\n}\nsumValue := externalModule.ComputeSumValue(account)\n')),(0,a.yg)("p",null,"The method ",(0,a.yg)("inlineCode",{parentName:"p"},"ComputeSumValue")," implies a pure function, yet the implied\ncapability of accepting a pointer value is the capability to modify that\nvalue. The preferred method signature should take a copy instead."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"sumValue := externalModule.ComputeSumValue(*account)\n")),(0,a.yg)("p",null,"In the Cosmos SDK, you can see the application of this principle in simapp."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/app.go#L294-L318\n")),(0,a.yg)("p",null,"The following diagram shows the current dependencies between keepers."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cosmos/cosmos-sdk/release/v0.46.x/docs/uml/svg/keeper_dependencies.svg",alt:"Keeper dependencies"})))}d.isMDXComponent=!0}}]);