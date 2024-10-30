"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[35556],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>c});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,c=u["".concat(s,".").concat(m)]||u[m]||y[m]||l;return t?a.createElement(c,r(r({ref:n},d),{},{components:t})):a.createElement(c,r({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const l={sidebar_position:1},r="x/nft",o={unversionedId:"build/modules/nft/README",id:"version-0.47/build/modules/nft/README",title:"x/nft",description:"Contents",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/modules/nft/README.md",sourceDirName:"build/modules/nft",slug:"/build/modules/nft/",permalink:"/cosmos-sdk/0.47/build/modules/nft/",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/mint",permalink:"/cosmos-sdk/0.47/build/modules/mint/"},next:{title:"x/params",permalink:"/cosmos-sdk/0.47/build/modules/params/"}},s={},p=[{value:"Contents",id:"contents",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Class",id:"class",level:3},{value:"NFT",id:"nft",level:3},{value:"State",id:"state",level:2},{value:"Class",id:"class-1",level:3},{value:"NFT",id:"nft-1",level:3},{value:"NFTOfClassByOwner",id:"nftofclassbyowner",level:3},{value:"Owner",id:"owner",level:3},{value:"TotalSupply",id:"totalsupply",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgSend",id:"msgsend",level:3},{value:"Events",id:"events",level:2}],d={toc:p},u="wrapper";function y(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"xnft"},(0,i.yg)("inlineCode",{parentName:"h1"},"x/nft")),(0,i.yg)("h2",{id:"contents"},"Contents"),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," is an implementation of a Cosmos SDK module, per ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-043-nft-module.md"},"ADR 43"),", that allows you to create nft classification, create nft, transfer nft, update nft, and support various queries by integrating the module. It is fully compatible with the ERC721 specification."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#class"},"Class")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#nft"},"NFT")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#state"},"State"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#class-1"},"Class")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#nft-1"},"NFT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#nftofclassbyowner"},"NFTOfClassByOwner")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#owner"},"Owner")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#totalsupply"},"TotalSupply")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#messages"},"Messages"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#msgsend"},"MsgSend")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#events"},"Events"))),(0,i.yg)("h2",{id:"concepts"},"Concepts"),(0,i.yg)("h3",{id:"class"},"Class"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," module defines a struct ",(0,i.yg)("inlineCode",{parentName:"p"},"Class")," to describe the common characteristics of a class of nft, under this class, you can create a variety of nft, which is equivalent to an erc721 contract for Ethereum. The design is defined in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-043-nft-module.md"},"ADR 043"),"."),(0,i.yg)("h3",{id:"nft"},"NFT"),(0,i.yg)("p",null,"The full name of NFT is Non-Fungible Tokens. Because of the irreplaceable nature of NFT, it means that it can be used to represent unique things. The nft implemented by this module is fully compatible with Ethereum ERC721 standard."),(0,i.yg)("h2",{id:"state"},"State"),(0,i.yg)("h3",{id:"class-1"},"Class"),(0,i.yg)("p",null,"Class is mainly composed of ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"symbol"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri_hash"),",",(0,i.yg)("inlineCode",{parentName:"p"},"data")," where ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," is the unique identifier of the class, similar to the Ethereum ERC721 contract address, the others are optional."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Class: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x01 | classID | -> ProtocolBuffer(Class)"))),(0,i.yg)("h3",{id:"nft-1"},"NFT"),(0,i.yg)("p",null,"NFT is mainly composed of ",(0,i.yg)("inlineCode",{parentName:"p"},"class_id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri_hash")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"data"),". Among them, ",(0,i.yg)("inlineCode",{parentName:"p"},"class_id")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," are two-tuples that identify the uniqueness of nft, ",(0,i.yg)("inlineCode",{parentName:"p"},"uri")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"uri_hash")," is optional, which identifies the off-chain storage location of the nft, and ",(0,i.yg)("inlineCode",{parentName:"p"},"data")," is an Any type. Use Any chain of ",(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," modules can be customized by extending this field"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"NFT: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x02 | classID | 0x00 | nftID |-> ProtocolBuffer(NFT)"))),(0,i.yg)("h3",{id:"nftofclassbyowner"},"NFTOfClassByOwner"),(0,i.yg)("p",null,"NFTOfClassByOwner is mainly to realize the function of querying all nfts using classID and owner, without other redundant functions."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"NFTOfClassByOwner: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x03 | owner | 0x00 | classID | 0x00 | nftID |-> 0x01"))),(0,i.yg)("h3",{id:"owner"},"Owner"),(0,i.yg)("p",null,"Since there is no extra field in NFT to indicate the owner of nft, an additional key-value pair is used to save the ownership of nft. With the transfer of nft, the key-value pair is updated synchronously."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OwnerKey: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x04 | classID | 0x00  | nftID |-> owner"))),(0,i.yg)("h3",{id:"totalsupply"},"TotalSupply"),(0,i.yg)("p",null,"TotalSupply is responsible for tracking the number of all nfts under a certain class. Mint operation is performed under the changed class, supply increases by one, burn operation, and supply decreases by one."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OwnerKey: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x05 | classID |-> totalSupply"))),(0,i.yg)("h2",{id:"messages"},"Messages"),(0,i.yg)("p",null,"In this section we describe the processing of messages for the NFT module."),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"The validation of ",(0,i.yg)("inlineCode",{parentName:"p"},"ClassID")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"NftID")," is left to the app developer.",(0,i.yg)("br",{parentName:"p"}),"\n","The SDK does not provide any validation for these fields.")),(0,i.yg)("h3",{id:"msgsend"},"MsgSend"),(0,i.yg)("p",null,"You can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSend")," message to transfer the ownership of nft. This is a function provided by the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," module. Of course, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Transfer")," method to implement your own transfer logic, but you need to pay extra attention to the transfer permissions."),(0,i.yg)("p",null,"The message handling should fail if:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"provided ",(0,i.yg)("inlineCode",{parentName:"li"},"ClassID")," does not exist."),(0,i.yg)("li",{parentName:"ul"},"provided ",(0,i.yg)("inlineCode",{parentName:"li"},"Id")," does not exist."),(0,i.yg)("li",{parentName:"ul"},"provided ",(0,i.yg)("inlineCode",{parentName:"li"},"Sender")," does not the owner of nft.")),(0,i.yg)("h2",{id:"events"},"Events"),(0,i.yg)("p",null,"The nft module emits proto events defined in ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.nft.v1beta1"},"the Protobuf reference"),"."))}y.isMDXComponent=!0}}]);