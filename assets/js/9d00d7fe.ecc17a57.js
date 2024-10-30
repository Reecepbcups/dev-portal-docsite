"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[51360],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,g=d["".concat(o,".").concat(m)]||d[m]||y[m]||l;return a?t.createElement(g,r(r({ref:n},u),{},{components:a})):t.createElement(g,r({ref:n},u))}));function g(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60118:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=a(58168),i=(a(96540),a(15680));const l={sidebar_position:1},r="x/nft",s={unversionedId:"build/modules/nft/README",id:"version-0.52/build/modules/nft/README",title:"x/nft",description:"Contents",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/modules/nft/README.md",sourceDirName:"build/modules/nft",slug:"/build/modules/nft/",permalink:"/cosmos-sdk/build/modules/nft/",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/mint",permalink:"/cosmos-sdk/build/modules/mint/"},next:{title:"x/params",permalink:"/cosmos-sdk/build/modules/params/"}},o={},p=[{value:"Contents",id:"contents",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Class",id:"class",level:3},{value:"NFT",id:"nft",level:3},{value:"State",id:"state",level:2},{value:"Class",id:"class-1",level:3},{value:"NFT",id:"nft-1",level:3},{value:"NFTOfClassByOwner",id:"nftofclassbyowner",level:3},{value:"Owner",id:"owner",level:3},{value:"TotalSupply",id:"totalsupply",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgSend",id:"msgsend",level:3},{value:"Events",id:"events",level:2},{value:"Queries",id:"queries",level:2},{value:"Keeper Functions",id:"keeper-functions",level:2}],u={toc:p},d="wrapper";function y(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"xnft"},(0,i.yg)("inlineCode",{parentName:"h1"},"x/nft")),(0,i.yg)("h2",{id:"contents"},"Contents"),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," is an implementation of a Cosmos SDK module, per ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-043-nft-module.md"},"ADR 43"),", that allows you to create nft classification, create nft, transfer nft, update nft, and support various queries by integrating the module. It is fully compatible with the ERC721 specification."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#class"},"Class")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#nft"},"NFT")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#state"},"State"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#class-1"},"Class")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#nft-1"},"NFT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#nftofclassbyowner"},"NFTOfClassByOwner")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#owner"},"Owner")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#totalsupply"},"TotalSupply")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#messages"},"Messages"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#msgsend"},"MsgSend")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#events"},"Events")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#queries"},"Queries")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#keeper-functions"},"Keeper Functions"))),(0,i.yg)("h2",{id:"concepts"},"Concepts"),(0,i.yg)("h3",{id:"class"},"Class"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," module defines a struct ",(0,i.yg)("inlineCode",{parentName:"p"},"Class")," to describe the common characteristics of a class of nft, under this class, you can create a variety of nft, which is equivalent to an erc721 contract for Ethereum. The design is defined in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-043-nft-module.md"},"ADR 043"),"."),(0,i.yg)("h3",{id:"nft"},"NFT"),(0,i.yg)("p",null,"The full name of NFT is Non-Fungible Tokens. Because of the irreplaceable nature of NFT, it means that it can be used to represent unique things. The nft implemented by this module is fully compatible with Ethereum ERC721 standard."),(0,i.yg)("h2",{id:"state"},"State"),(0,i.yg)("h3",{id:"class-1"},"Class"),(0,i.yg)("p",null,"Class is mainly composed of ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"symbol"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri_hash"),",",(0,i.yg)("inlineCode",{parentName:"p"},"data")," where ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," is the unique identifier of the class, similar to the Ethereum ERC721 contract address, the others are optional."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Class: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x01 | classID | -> ProtocolBuffer(Class)"))),(0,i.yg)("h3",{id:"nft-1"},"NFT"),(0,i.yg)("p",null,"NFT is mainly composed of ",(0,i.yg)("inlineCode",{parentName:"p"},"class_id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"uri_hash")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"data"),". Among them, ",(0,i.yg)("inlineCode",{parentName:"p"},"class_id")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," are two-tuples that identify the uniqueness of nft, ",(0,i.yg)("inlineCode",{parentName:"p"},"uri")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"uri_hash")," is optional, which identifies the off-chain storage location of the nft, and ",(0,i.yg)("inlineCode",{parentName:"p"},"data")," is an Any type. Use Any chain of ",(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," modules can be customized by extending this field"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"NFT: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x02 | classID | 0x00 | nftID |-> ProtocolBuffer(NFT)"))),(0,i.yg)("h3",{id:"nftofclassbyowner"},"NFTOfClassByOwner"),(0,i.yg)("p",null,"NFTOfClassByOwner is mainly to realize the function of querying all nfts using classID and owner, without other redundant functions."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"NFTOfClassByOwner: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x03 | owner | 0x00 | classID | 0x00 | nftID |-> 0x01"))),(0,i.yg)("h3",{id:"owner"},"Owner"),(0,i.yg)("p",null,"Since there is no extra field in NFT to indicate the owner of nft, an additional key-value pair is used to save the ownership of nft. With the transfer of nft, the key-value pair is updated synchronously."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OwnerKey: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x04 | classID | 0x00  | nftID |-> owner"))),(0,i.yg)("h3",{id:"totalsupply"},"TotalSupply"),(0,i.yg)("p",null,"TotalSupply is responsible for tracking the number of all nfts under a certain class. Mint operation is performed under the changed class, supply increases by one, burn operation, and supply decreases by one."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OwnerKey: ",(0,i.yg)("inlineCode",{parentName:"li"},"0x05 | classID |-> totalSupply"))),(0,i.yg)("h2",{id:"messages"},"Messages"),(0,i.yg)("p",null,"In this section we describe the processing of messages for the NFT module."),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"The validation of ",(0,i.yg)("inlineCode",{parentName:"p"},"ClassID")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"NftID")," is left to the app developer.",(0,i.yg)("br",{parentName:"p"}),"\n","The SDK does not provide any validation for these fields.")),(0,i.yg)("h3",{id:"msgsend"},"MsgSend"),(0,i.yg)("p",null,"You can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSend")," message to transfer the ownership of nft. This is a function provided by the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," module. Of course, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Transfer")," method to implement your own transfer logic, but you need to pay extra attention to the transfer permissions."),(0,i.yg)("p",null,"The message handling should fail if:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"provided ",(0,i.yg)("inlineCode",{parentName:"li"},"ClassID")," does not exist."),(0,i.yg)("li",{parentName:"ul"},"provided ",(0,i.yg)("inlineCode",{parentName:"li"},"Id")," does not exist."),(0,i.yg)("li",{parentName:"ul"},"provided ",(0,i.yg)("inlineCode",{parentName:"li"},"Sender")," does not the owner of nft.")),(0,i.yg)("h2",{id:"events"},"Events"),(0,i.yg)("p",null,"The NFT module emits proto events defined in ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.nft.v1beta1"},"the Protobuf reference"),"."),(0,i.yg)("h2",{id:"queries"},"Queries"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," module provides several queries to retrieve information about NFTs and classes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Balance"),": Returns the number of NFTs of a given class owned by the owner."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Owner"),": Returns the owner of an NFT based on its class and ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Supply"),": Returns the number of NFTs from the given class."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"NFTs"),": Queries all NFTs of a given class or owner."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"NFT"),": Returns an NFT based on its class and ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Class"),": Returns an NFT class based on its ID."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Classes"),": Returns all NFT classes.")),(0,i.yg)("h2",{id:"keeper-functions"},"Keeper Functions"),(0,i.yg)("p",null,"The Keeper of the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/nft")," module provides several functions to manage NFTs:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Mint"),": Mints a new NFT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Burn"),": Burns an existing NFT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Update"),": Updates an existing NFT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Transfer"),": Transfers an NFT from one owner to another."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetNFT"),": Retrieves information about a specific NFT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetNFTsOfClass"),": Retrieves all NFTs of a specific class."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetNFTsOfClassByOwner"),": Retrieves all NFTs of a specific class belonging to an owner."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetBalance"),": Retrieves the balance of NFTs of a specific class for an owner."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"GetTotalSupply"),": Retrieves the total supply of NFTs of a specific class.")))}y.isMDXComponent=!0}}]);