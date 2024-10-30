"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[80357],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||s;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(58168),i=(a(96540),a(15680));const s={},o="ADR 036: Arbitrary Message Signature Specification",r={unversionedId:"build/architecture/adr-036-arbitrary-signature",id:"version-0.50/build/architecture/adr-036-arbitrary-signature",title:"ADR 036: Arbitrary Message Signature Specification",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-036-arbitrary-signature.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-036-arbitrary-signature",permalink:"/cosmos-sdk/0.50/build/architecture/adr-036-arbitrary-signature",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 035: Rosetta API Support",permalink:"/cosmos-sdk/0.50/build/architecture/adr-035-rosetta-api-support"},next:{title:"ADR 037: Governance split votes",permalink:"/cosmos-sdk/0.50/build/architecture/adr-037-gov-split-vote"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Authors",id:"authors",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Further discussion",id:"further-discussion",level:2},{value:"References",id:"references",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-036-arbitrary-message-signature-specification"},"ADR 036: Arbitrary Message Signature Specification"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"28/10/2020 - Initial draft")),(0,i.yg)("h2",{id:"authors"},"Authors"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Antoine Herzog (@antoineherzog)"),(0,i.yg)("li",{parentName:"ul"},"Zaki Manian (@zmanian)"),(0,i.yg)("li",{parentName:"ul"},"Aleksandr Bezobchuk (alexanderbez) ","[1]"),(0,i.yg)("li",{parentName:"ul"},"Frojdi Dymylja (@fdymylja)")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Draft"),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,"Currently, in the Cosmos SDK, there is no convention to sign arbitrary message like on Ethereum. We propose with this specification, for Cosmos SDK ecosystem, a way to sign and validate off-chain arbitrary messages."),(0,i.yg)("p",null,"This specification serves the purpose of covering every use case, this means that cosmos-sdk applications developers decide how to serialize and represent ",(0,i.yg)("inlineCode",{parentName:"p"},"Data")," to users."),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"Having the ability to sign messages off-chain has proven to be a fundamental aspect of nearly any blockchain. The notion of signing messages off-chain has many added benefits such as saving on computational costs and reducing transaction throughput and overhead. Within the context of the Cosmos, some of the major applications of signing such data includes, but is not limited to, providing a cryptographic secure and verifiable means of proving validator identity and possibly associating it with some other framework or organization. In addition, having the ability to sign Cosmos messages with a Ledger or similar HSM device."),(0,i.yg)("p",null,"Further context and use cases can be found in the references links."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"The aim is being able to sign arbitrary messages, even using Ledger or similar HSM devices."),(0,i.yg)("p",null,"As a result signed messages should look roughly like Cosmos SDK messages but ",(0,i.yg)("strong",{parentName:"p"},"must not")," be a valid on-chain transaction. ",(0,i.yg)("inlineCode",{parentName:"p"},"chain-id"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"account_number")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"sequence")," can all be assigned invalid values."),(0,i.yg)("p",null,"Cosmos SDK 0.40 also introduces a concept of \u201cauth_info\u201d this can specify SIGN_MODES."),(0,i.yg)("p",null,"A spec should include an ",(0,i.yg)("inlineCode",{parentName:"p"},"auth_info")," that supports SIGN_MODE_DIRECT and SIGN_MODE_LEGACY_AMINO."),(0,i.yg)("p",null,"Create the ",(0,i.yg)("inlineCode",{parentName:"p"},"offchain")," proto definitions, we extend the auth module with ",(0,i.yg)("inlineCode",{parentName:"p"},"offchain")," package to offer functionalities to verify and sign offline messages."),(0,i.yg)("p",null,"An offchain transaction follows these rules:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the memo must be empty"),(0,i.yg)("li",{parentName:"ul"},"nonce, sequence number must be equal to 0"),(0,i.yg)("li",{parentName:"ul"},"chain-id must be equal to \u201c\u201d"),(0,i.yg)("li",{parentName:"ul"},"fee gas must be equal to 0"),(0,i.yg)("li",{parentName:"ul"},"fee amount must be an empty array")),(0,i.yg)("p",null,"Verification of an offchain transaction follows the same rules as an onchain one, except for the spec differences highlighted above."),(0,i.yg)("p",null,"The first message added to the ",(0,i.yg)("inlineCode",{parentName:"p"},"offchain")," package is ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgSignData"),"."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"MsgSignData")," allows developers to sign arbitrary bytes valid offchain only. Where ",(0,i.yg)("inlineCode",{parentName:"p"},"Signer")," is the account address of the signer. ",(0,i.yg)("inlineCode",{parentName:"p"},"Data")," is arbitrary bytes which can represent ",(0,i.yg)("inlineCode",{parentName:"p"},"text"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"files"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"object"),"s. It's applications developers decision how ",(0,i.yg)("inlineCode",{parentName:"p"},"Data")," should be deserialized, serialized and the object it can represent in their context."),(0,i.yg)("p",null,"It's applications developers decision how ",(0,i.yg)("inlineCode",{parentName:"p"},"Data")," should be treated, by treated we mean the serialization and deserialization process and the Object ",(0,i.yg)("inlineCode",{parentName:"p"},"Data")," should represent."),(0,i.yg)("p",null,"Proto definition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},'// MsgSignData defines an arbitrary, general-purpose, off-chain message\nmessage MsgSignData {\n    // Signer is the sdk.AccAddress of the message signer\n    bytes Signer = 1 [(gogoproto.jsontag) = "signer", (gogoproto.casttype) = "github.com/cosmos/cosmos-sdk/types.AccAddress"];\n    // Data represents the raw bytes of the content that is signed (text, json, etc)\n    bytes Data = 2 [(gogoproto.jsontag) = "data"];\n}\n')),(0,i.yg)("p",null,"Signed MsgSignData json example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cosmos-sdk/StdTx",\n  "value": {\n    "msg": [\n      {\n        "type": "sign/MsgSignData",\n        "value": {\n          "signer": "cosmos1hftz5ugqmpg9243xeegsqqav62f8hnywsjr4xr",\n          "data": "cmFuZG9t"\n        }\n      }\n    ],\n    "fee": {\n      "amount": [],\n      "gas": "0"\n    },\n    "signatures": [\n      {\n        "pub_key": {\n          "type": "tendermint/PubKeySecp256k1",\n          "value": "AqnDSiRoFmTPfq97xxEb2VkQ/Hm28cPsqsZm9jEVsYK9"\n        },\n        "signature": "8y8i34qJakkjse9pOD2De+dnlc4KvFgh0wQpes4eydN66D9kv7cmCEouRrkka9tlW9cAkIL52ErB+6ye7X5aEg=="\n      }\n    ],\n    "memo": ""\n  }\n}\n')),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("p",null,"There is a specification on how messages, that are not meant to be broadcast to a live chain, should be formed."),(0,i.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.yg)("p",null,"Backwards compatibility is maintained as this is a new message spec definition."),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A common format that can be used by multiple applications to sign and verify off-chain messages."),(0,i.yg)("li",{parentName:"ul"},"The specification is primitive which means it can cover every use case without limiting what is possible to fit inside it."),(0,i.yg)("li",{parentName:"ul"},"It gives room for other off-chain messages specifications that aim to target more specific and common use cases such as off-chain-based authN/authZ layers ","[2]",".")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Current proposal requires a fixed relationship between an account address and a public key."),(0,i.yg)("li",{parentName:"ul"},"Doesn't work with multisig accounts.")),(0,i.yg)("h2",{id:"further-discussion"},"Further discussion"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Regarding security in ",(0,i.yg)("inlineCode",{parentName:"li"},"MsgSignData"),", the developer using ",(0,i.yg)("inlineCode",{parentName:"li"},"MsgSignData")," is in charge of making the content laying in ",(0,i.yg)("inlineCode",{parentName:"li"},"Data")," non-replayable when, and if, needed."),(0,i.yg)("li",{parentName:"ul"},"the offchain package will be further extended with extra messages that target specific use cases such as, but not limited to, authentication in applications, payment channels, L2 solutions in general.")),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ics/pull/33"},"https://github.com/cosmos/ics/pull/33")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/7727#discussion_r515668204"},"https://github.com/cosmos/cosmos-sdk/pull/7727#discussion_r515668204")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/7727#issuecomment-722478477"},"https://github.com/cosmos/cosmos-sdk/pull/7727#issuecomment-722478477")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/7727#issuecomment-721062923"},"https://github.com/cosmos/cosmos-sdk/pull/7727#issuecomment-721062923"))))}g.isMDXComponent=!0}}]);