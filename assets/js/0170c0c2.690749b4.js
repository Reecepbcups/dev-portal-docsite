"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[23749],{15680:(e,o,t)=>{t.d(o,{xA:()=>p,yg:()=>u});var a=t(96540);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,a,i=function(e,o){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var o=a.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):n(n({},o),e)),t},p=function(e){var o=c(e.components);return a.createElement(l.Provider,{value:o},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},d=a.forwardRef((function(e,o){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||r;return t?a.createElement(u,n(n({ref:o},p),{},{components:t})):a.createElement(u,n({ref:o},p))}));function u(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=d;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[m]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=t[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44110:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(58168),i=(t(96540),t(15680));const r={sidebar_position:0},n="What is the Cosmos SDK",s={unversionedId:"learn/intro/overview",id:"version-0.47/learn/intro/overview",title:"What is the Cosmos SDK",description:"The Cosmos SDK is an open-source framework for building multi-asset public Proof-of-Stake (PoS) blockchains, like the Cosmos Hub, as well as permissioned Proof-of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as application-specific blockchains.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/learn/intro/00-overview.md",sourceDirName:"learn/intro",slug:"/learn/intro/overview",permalink:"/cosmos-sdk/0.47/learn/intro/overview",draft:!1,tags:[],version:"0.47",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"learnSidebar",previous:{title:"Learn",permalink:"/cosmos-sdk/0.47/learn/"},next:{title:"Application-Specific Blockchains",permalink:"/cosmos-sdk/0.47/learn/intro/why-app-specific"}},l={},c=[{value:"What are Application-Specific Blockchains",id:"what-are-application-specific-blockchains",level:2},{value:"Why the Cosmos SDK",id:"why-the-cosmos-sdk",level:2},{value:"Getting started with the Cosmos SDK",id:"getting-started-with-the-cosmos-sdk",level:2}],p={toc:c},m="wrapper";function h(e){let{components:o,...t}=e;return(0,i.yg)(m,(0,a.A)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"what-is-the-cosmos-sdk"},"What is the Cosmos SDK"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," is an open-source framework for building multi-asset public Proof-of-Stake (PoS) ",(0,i.yg)("df",{value:"blockchain"},"blockchains"),", like the Cosmos Hub, as well as permissioned Proof-of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as ",(0,i.yg)("strong",{parentName:"p"},"application-specific blockchains"),"."),(0,i.yg)("p",null,"The goal of the Cosmos SDK is to allow developers to easily create custom blockchains from scratch that can natively interoperate with other blockchains. We envision the Cosmos SDK as the npm-like framework to build secure blockchain applications on top of ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft"},"CometBFT"),". SDK-based blockchains are built out of composable ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/intro"},"modules"),", most of which are open-source and readily available for any developers to use. Anyone can create a module for the Cosmos SDK, and integrating already-built modules is as simple as importing them into your blockchain application. What's more, the Cosmos SDK is a capabilities-based system that allows developers to better reason about the security of interactions between modules. For a deeper look at capabilities, jump to ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/ocap"},"Object-Capability Model"),"."),(0,i.yg)("h2",{id:"what-are-application-specific-blockchains"},"What are Application-Specific Blockchains"),(0,i.yg)("p",null,"One development paradigm in the blockchain world today is that of virtual-machine blockchains like Ethereum, where development generally revolves around building decentralized applications on top of an existing blockchain as a set of smart contracts. While smart contracts can be very good for some use cases like single-use applications (e.g. ICOs), they often fall short for building complex decentralized platforms. More generally, smart contracts can be limiting in terms of flexibility, sovereignty and performance."),(0,i.yg)("p",null,"Application-specific blockchains offer a radically different development paradigm than virtual-machine blockchains. An application-specific blockchain is a blockchain customized to operate a single application: developers have all the freedom to make the design decisions required for the application to run optimally. They can also provide better sovereignty, security and performance."),(0,i.yg)("p",null,"Learn more about ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/intro/why-app-specific"},"application-specific blockchains"),"."),(0,i.yg)("h2",{id:"why-the-cosmos-sdk"},"Why the Cosmos SDK"),(0,i.yg)("p",null,"The Cosmos SDK is the most advanced framework for building custom application-specific blockchains today. Here are a few reasons why you might want to consider building your decentralized application with the Cosmos SDK:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The default consensus engine available within the Cosmos SDK is ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cometbft/cometbft"},"CometBFT"),". CometBFT is the most (and only) mature BFT consensus engine in existence. It is widely used across the industry and is considered the gold standard consensus engine for building Proof-of-Stake systems."),(0,i.yg)("li",{parentName:"ul"},"The Cosmos SDK is open-source and designed to make it easy to build blockchains out of composable ",(0,i.yg)("a",{parentName:"li",href:"../../build/modules"},"modules"),". As the ecosystem of open-source Cosmos SDK modules grows, it will become increasingly easier to build complex decentralized platforms with it."),(0,i.yg)("li",{parentName:"ul"},"The Cosmos SDK is inspired by capabilities-based security, and informed by years of wrestling with blockchain state-machines. This makes the Cosmos SDK a very secure environment to build blockchains."),(0,i.yg)("li",{parentName:"ul"},"Most importantly, the Cosmos SDK has already been used to build many application-specific blockchains that are already in production. Among others, we can cite ",(0,i.yg)("a",{parentName:"li",href:"https://hub.cosmos.network"},"Cosmos Hub"),", ",(0,i.yg)("a",{parentName:"li",href:"https://irisnet.org"},"IRIS Hub"),", ",(0,i.yg)("a",{parentName:"li",href:"https://docs.binance.org/"},"Binance Chain"),", ",(0,i.yg)("a",{parentName:"li",href:"https://terra.money/"},"Terra")," or ",(0,i.yg)("a",{parentName:"li",href:"https://www.kava.io/"},"Kava"),". ",(0,i.yg)("a",{parentName:"li",href:"https://cosmos.network/ecosystem"},"Many more")," are building on the Cosmos SDK.")),(0,i.yg)("h2",{id:"getting-started-with-the-cosmos-sdk"},"Getting started with the Cosmos SDK"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Learn more about the ",(0,i.yg)("a",{parentName:"li",href:"/cosmos-sdk/0.47/learn/intro/sdk-app-architecture"},"architecture of a Cosmos SDK application")),(0,i.yg)("li",{parentName:"ul"},"Learn how to build an application-specific blockchain from scratch with the ",(0,i.yg)("a",{parentName:"li",href:"https://cosmos.network/docs/tutorial"},"Cosmos SDK Tutorial"))))}h.isMDXComponent=!0}}]);