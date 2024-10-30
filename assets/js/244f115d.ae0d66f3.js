"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[6046],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const o={},l="ADR 062: Collections, a simplified storage layer for cosmos-sdk modules.",r={unversionedId:"build/architecture/adr-062-collections-state-layer",id:"version-0.47/build/architecture/adr-062-collections-state-layer",title:"ADR 062: Collections, a simplified storage layer for cosmos-sdk modules.",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/architecture/adr-062-collections-state-layer.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-062-collections-state-layer",permalink:"/cosmos-sdk/0.47/build/architecture/adr-062-collections-state-layer",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR ADR-061: Liquid Staking",permalink:"/cosmos-sdk/0.47/build/architecture/adr-061-liquid-staking"},next:{title:"ADR 063: Core Module API",permalink:"/cosmos-sdk/0.47/build/architecture/adr-063-core-module-api"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Current Solution: ORM",id:"current-solution-orm",level:3},{value:"CosmWasm Solution: cw-storage-plus",id:"cosmwasm-solution-cw-storage-plus",level:3},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-062-collections-a-simplified-storage-layer-for-cosmos-sdk-modules"},"ADR 062: Collections, a simplified storage layer for cosmos-sdk modules."),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"30/11/2022: PROPOSED")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"PROPOSED - Implemented"),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,"We propose a simplified module storage layer which leverages golang generics to allow module developers to handle module\nstorage in a simple and straightforward manner, whilst offering safety, extensibility and standardisation."),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"Module developers are forced into manually implementing storage functionalities in their modules, those functionalities include\nbut are not limited to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Defining key to bytes formats."),(0,i.yg)("li",{parentName:"ul"},"Defining value to bytes formats."),(0,i.yg)("li",{parentName:"ul"},"Defining secondary indexes."),(0,i.yg)("li",{parentName:"ul"},"Defining query methods to expose outside to deal with storage."),(0,i.yg)("li",{parentName:"ul"},"Defining local methods to deal with storage writing."),(0,i.yg)("li",{parentName:"ul"},"Dealing with genesis imports and exports."),(0,i.yg)("li",{parentName:"ul"},"Writing tests for all the above.")),(0,i.yg)("p",null,"This brings in a lot of problems:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"It blocks developers from focusing on the most important part: writing business logic."),(0,i.yg)("li",{parentName:"ul"},"Key to bytes formats are complex and their definition is error-prone, for example:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"how do I format time to bytes in such a way that bytes are sorted?"),(0,i.yg)("li",{parentName:"ul"},"how do I ensure when I don't have namespace collisions when dealing with secondary indexes?"))),(0,i.yg)("li",{parentName:"ul"},"The lack of standardisation makes life hard for clients, and the problem is exacerbated when it comes to providing proofs for objects present in state. Clients are forced to maintain a list of object paths to gather proofs.")),(0,i.yg)("h3",{id:"current-solution-orm"},"Current Solution: ORM"),(0,i.yg)("p",null,"The current SDK proposed solution to this problem is ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-055-orm.md"},"ORM"),".\nWhilst ORM offers a lot of good functionality aimed at solving these specific problems, it has some downsides:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"It requires migrations."),(0,i.yg)("li",{parentName:"ul"},"It uses the newest protobuf golang API, whilst the SDK still mainly uses gogoproto. "),(0,i.yg)("li",{parentName:"ul"},"Integrating ORM into a module would require the developer to deal with two different golang frameworks (golang protobuf + gogoproto) representing the same API objects."),(0,i.yg)("li",{parentName:"ul"},"It has a high learning curve, even for simple storage layers as it requires developers to have knowledge around protobuf options, custom cosmos-sdk storage extensions, and tooling download. Then after this they still need to learn the code-generated API.")),(0,i.yg)("h3",{id:"cosmwasm-solution-cw-storage-plus"},"CosmWasm Solution: cw-storage-plus"),(0,i.yg)("p",null,"The collections API takes inspiration from ",(0,i.yg)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/smart-contracts/state/cw-plus/"},"cw-storage-plus"),",\nwhich has demonstrated to be a powerful tool for dealing with storage in CosmWasm contracts.\nIt's simple, does not require extra tooling, it makes it easy to deal with complex storage structures (indexes, snapshot, etc).\nThe API is straightforward and explicit."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"We propose to port the ",(0,i.yg)("inlineCode",{parentName:"p"},"collections")," API, whose implementation lives in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/NibiruChain/collections"},"NibiruChain/collections")," to cosmos-sdk."),(0,i.yg)("p",null,"Collections implements four different storage handlers types:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Map"),": which deals with simple ",(0,i.yg)("inlineCode",{parentName:"li"},"key=>object")," mappings."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"KeySet"),": which acts as a ",(0,i.yg)("inlineCode",{parentName:"li"},"Set")," and only retains keys and no object (usecase: allow-lists)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Item"),": which always contains only one object (usecase: Params)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Sequence"),": which implements a simple always increasing number (usecase: Nonces)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"IndexedMap"),": builds on top of ",(0,i.yg)("inlineCode",{parentName:"li"},"Map")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"KeySet")," and allows to create relationships with ",(0,i.yg)("inlineCode",{parentName:"li"},"Objects")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Objects")," secondary keys.")),(0,i.yg)("p",null,"All the collection APIs build on top of the simple ",(0,i.yg)("inlineCode",{parentName:"p"},"Map")," type."),(0,i.yg)("p",null,"Collections is fully generic, meaning that anything can be used as ",(0,i.yg)("inlineCode",{parentName:"p"},"Key")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Value"),". It can be a protobuf object or not."),(0,i.yg)("p",null,"Collections types, in fact, delegate the duty of serialisation of keys and values to a secondary collections API component called ",(0,i.yg)("inlineCode",{parentName:"p"},"ValueEncoders")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"KeyEncoders"),"."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ValueEncoders")," take care of converting a value to bytes (relevant only for ",(0,i.yg)("inlineCode",{parentName:"p"},"Map"),"). And offers a plug and play layer which allows us to change how we encode objects,\nwhich is relevant for swapping serialisation frameworks and enhancing performance.\n",(0,i.yg)("inlineCode",{parentName:"p"},"Collections")," already comes in with default ",(0,i.yg)("inlineCode",{parentName:"p"},"ValueEncoders"),", specifically for: protobuf objects, special SDK types (sdk.Int, sdk.Dec)."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"KeyEncoders")," take care of converting keys to bytes, ",(0,i.yg)("inlineCode",{parentName:"p"},"collections")," already comes in with some default ",(0,i.yg)("inlineCode",{parentName:"p"},"KeyEncoders")," for some privimite golang types\n(uint64, string, time.Time, ...) and some widely used sdk types (sdk.Acc/Val/ConsAddress, sdk.Int/Dec, ...).\nThese default implementations also offer safety around proper lexicographic ordering and namespace-collision."),(0,i.yg)("p",null,"Examples of the collections API can be found here:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"introduction: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/NibiruChain/collections/tree/main/examples"},"https://github.com/NibiruChain/collections/tree/main/examples")),(0,i.yg)("li",{parentName:"ul"},"usage in nibiru: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/NibiruChain/nibiru/blob/master/x/oracle/keeper/keeper.go#L32"},"x/oracle"),", ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/NibiruChain/nibiru/blob/master/x/perp/keeper/keeper.go#L31"},"x/perp")),(0,i.yg)("li",{parentName:"ul"},"cosmos-sdk's x/staking migrated: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/testinginprod/cosmos-sdk/pull/22"},"https://github.com/testinginprod/cosmos-sdk/pull/22"))),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.yg)("p",null,"The design of ",(0,i.yg)("inlineCode",{parentName:"p"},"ValueEncoders")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"KeyEncoders")," allows modules to retain the same ",(0,i.yg)("inlineCode",{parentName:"p"},"byte(key)=>byte(value)")," mappings, making\nthe upgrade to the new storage layer non-state breaking."),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ADR aimed at removing code from the SDK rather than adding it. Migrating just ",(0,i.yg)("inlineCode",{parentName:"li"},"x/staking")," to collections would yield to a net decrease in LOC (even considering the addition of collections itself)."),(0,i.yg)("li",{parentName:"ul"},"Simplifies and standardises storage layers across modules in the SDK."),(0,i.yg)("li",{parentName:"ul"},"Does not require to have to deal with protobuf."),(0,i.yg)("li",{parentName:"ul"},"It's pure golang code."),(0,i.yg)("li",{parentName:"ul"},"Generalisation over ",(0,i.yg)("inlineCode",{parentName:"li"},"KeyEncoders")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"ValueEncoders")," allows us to not tie ourself to the data serialisation framework."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"KeyEncoders")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"ValueEncoders")," can be extended to provide schema reflection.")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Golang generics are not as battle-tested as other Golang features, despite being used in production right now."),(0,i.yg)("li",{parentName:"ul"},"Collection types instantiation needs to be improved.")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("p",null,"{neutral consequences}"),(0,i.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Automatic genesis import/export (not implemented because of API breakage)"),(0,i.yg)("li",{parentName:"ul"},"Schema reflection")),(0,i.yg)("h2",{id:"references"},"References"))}u.isMDXComponent=!0}}]);