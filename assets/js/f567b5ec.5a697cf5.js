"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[53382],{15680:(e,t,o)=>{o.d(t,{xA:()=>h,yg:()=>m});var a=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(o),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||n;return o?a.createElement(m,s(s({ref:t},h),{},{components:o})):a.createElement(m,s({ref:t},h))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<n;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9711:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var a=o(58168),i=(o(96540),o(15680));const n={sidebar_position:1},s="High-level Overview",r={unversionedId:"docs/learn/intro/overview",id:"docs/learn/intro/overview",title:"High-level Overview",description:"What is the Cosmos SDK",source:"@site/cosmos-sdk/docs/learn/intro/00-overview.md",sourceDirName:"docs/learn/intro",slug:"/docs/learn/intro/overview",permalink:"/cosmos-sdk/next/docs/learn/intro/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Learn",permalink:"/cosmos-sdk/next/docs/learn/"},next:{title:"Application-Specific Blockchains",permalink:"/cosmos-sdk/next/docs/learn/intro/why-app-specific"}},l={},c=[{value:"What is the Cosmos SDK",id:"what-is-the-cosmos-sdk",level:2},{value:"What are Application-Specific Blockchains",id:"what-are-application-specific-blockchains",level:2},{value:"What is Modularity",id:"what-is-modularity",level:2},{value:"Why the Cosmos SDK",id:"why-the-cosmos-sdk",level:2},{value:"Getting started with the Cosmos SDK",id:"getting-started-with-the-cosmos-sdk",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,a.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"high-level-overview"},"High-level Overview"),(0,i.yg)("h2",{id:"what-is-the-cosmos-sdk"},"What is the Cosmos SDK"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," is an open-source toolkit for building multi-asset public Proof-of-Stake (PoS) ",(0,i.yg)("df",{value:"blockchain"},"blockchains"),", like the Cosmos Hub, as well as permissioned Proof-of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as ",(0,i.yg)("strong",{parentName:"p"},"application-specific blockchains"),"."),(0,i.yg)("p",null,"The goal of the Cosmos SDK is to allow developers to easily create custom blockchains from scratch that can natively interoperate with other blockchains.\nWe further this modular approach by allowing developers to plug and play with different consensus engines this can range from ",(0,i.yg)("a",{parentName:"p",href:"https://cometbft.com/"},"CometBFT")," or ",(0,i.yg)("a",{parentName:"p",href:"https://rollkit.dev/"},"Rollkit"),". "),(0,i.yg)("p",null,"SDK-based blockchains have the choice to use the predefined modules or to build their own modules. What this means is that developers can build a blockchain that is tailored to their specific use case, without having to worry about the low-level details of building a blockchain from scratch. Predefined modules include staking, governance, and token issuance, among others."),(0,i.yg)("p",null,"What's more, the Cosmos SDK is a capabilities-based system that allows developers to better reason about the security of interactions between modules. For a deeper look at capabilities, jump to ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/learn/advanced/ocap"},"Object-Capability Model"),"."),(0,i.yg)("p",null,"You can think of the SDK as a lego kit. You can choose to build the basic house from the instructions, or you can choose to modify your house and add more floors, more doors, more windows. The choice is yours."),(0,i.yg)("h2",{id:"what-are-application-specific-blockchains"},"What are Application-Specific Blockchains"),(0,i.yg)("p",null,"One development paradigm in the blockchain world today is that of virtual-machine blockchains like Ethereum, where development generally revolves around building decentralized applications on top of an existing blockchain as a set of smart contracts. While smart contracts can be very good for some use cases like single-use applications (e.g. ICOs), they often fall short for building complex decentralized platforms. More generally, smart contracts can be limiting in terms of flexibility, sovereignty and performance."),(0,i.yg)("p",null,"Application-specific blockchains offer a radically different development paradigm than virtual-machine blockchains. An application-specific blockchain is a blockchain customized to operate a single application: developers have all the freedom to make the design decisions required for the application to run optimally. They can also provide better sovereignty, security and performance."),(0,i.yg)("p",null,"Learn more about ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/learn/intro/why-app-specific"},"application-specific blockchains"),"."),(0,i.yg)("h2",{id:"what-is-modularity"},"What is Modularity"),(0,i.yg)("p",null,"Today, there is a lot of talk around modularity and discussions between monolithic and modular. Originally, the Cosmos SDK was built with a vision of modularity in mind. Modularity is derived from splitting a blockchain into customizable layers of execution, consensus, settlement and data availability, which is what the Cosmos SDK enables. This means that developers can plug and play, making their blockchain customizable by using different software for different layers. For example, you can choose to build a vanilla chain and use the Cosmos SDK with CometBFT. CometBFT will be your consensus layer and the chain itself would be the settlement and execution layer. Another route could be to use the SDK with Rollkit and ",(0,i.yg)("a",{parentName:"p",href:"https://celestia.org/"},"Celestia")," as your consensus and data availability layer. The benefit of modularity is that you can customize your chain to your specific use case."),(0,i.yg)("h2",{id:"why-the-cosmos-sdk"},"Why the Cosmos SDK"),(0,i.yg)("p",null,"The Cosmos SDK is the most advanced framework for building custom modular application-specific blockchains today. Here are a few reasons why you might want to consider building your decentralized application with the Cosmos SDK:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"It allows you to plug and play and customize your consensus layer. As mentioned above, you can use Rollkit and Celestia as your consensus and data availability layer. This offers a lot of flexibility and customization. "),(0,i.yg)("li",{parentName:"ul"},"Previously the default consensus engine available within the Cosmos SDK is ",(0,i.yg)("a",{parentName:"li",href:"https://cometbft.com/"},"CometBFT"),". CometBFT is the most (and only) mature BFT consensus engine in existence. It is widely used across the industry and is considered the gold standard consensus engine for building Proof-of-Stake systems."),(0,i.yg)("li",{parentName:"ul"},"The Cosmos SDK is open-source and designed to make it easy to build blockchains out of composable ",(0,i.yg)("a",{parentName:"li",href:"../../build/modules"},"modules"),". As the ecosystem of open-source Cosmos SDK modules grows, it will become increasingly easier to build complex decentralized platforms with it."),(0,i.yg)("li",{parentName:"ul"},"The Cosmos SDK is inspired by capabilities-based security, and informed by years of wrestling with blockchain state-machines. This makes the Cosmos SDK a very secure environment to build blockchains."),(0,i.yg)("li",{parentName:"ul"},"Most importantly, the Cosmos SDK has already been used to build many application-specific blockchains that are already in production. Among others, we can cite ",(0,i.yg)("a",{parentName:"li",href:"https://hub.cosmos.network"},"Cosmos Hub"),", ",(0,i.yg)("a",{parentName:"li",href:"https://osmosis.zone/"},"Osmosis"),", ",(0,i.yg)("a",{parentName:"li",href:"https://docs.binance.org/"},"Binance Chain"),", ",(0,i.yg)("a",{parentName:"li",href:"https://terra.money/"},"Terra")," or ",(0,i.yg)("a",{parentName:"li",href:"https://dydx.exchange/"},"Dydx"),". ",(0,i.yg)("a",{parentName:"li",href:"https://cosmos.network/ecosystem"},"Many more")," are building on the Cosmos SDK.")),(0,i.yg)("h2",{id:"getting-started-with-the-cosmos-sdk"},"Getting started with the Cosmos SDK"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Learn more about the ",(0,i.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/learn/intro/sdk-app-architecture"},"architecture of a Cosmos SDK application")),(0,i.yg)("li",{parentName:"ul"},"Learn how to build an application-specific blockchain from scratch with the ",(0,i.yg)("a",{parentName:"li",href:"https://cosmos.network/docs/tutorial"},"Cosmos SDK Tutorial"))))}p.isMDXComponent=!0}}]);