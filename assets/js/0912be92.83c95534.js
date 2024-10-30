"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[55453],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>u});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),s=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(a),m=o,u=g["".concat(d,".").concat(m)]||g[m]||p[m]||l;return a?t.createElement(u,r(r({ref:n},c),{},{components:a})):t.createElement(u,r({ref:n},c))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[g]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81515:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=a(58168),o=(a(96540),a(15680));const l={sidebar_position:1},r="x/auth/tx",i={unversionedId:"build/modules/auth/tx",id:"version-0.52/build/modules/auth/tx",title:"x/auth/tx",description:"* Transactions",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/modules/auth/2-tx.md",sourceDirName:"build/modules/auth",slug:"/build/modules/auth/tx",permalink:"/cosmos-sdk/build/modules/auth/tx",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/auth/vesting",permalink:"/cosmos-sdk/build/modules/auth/vesting"},next:{title:"x/authz",permalink:"/cosmos-sdk/build/modules/authz/"}},d={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Transactions",id:"transactions",level:2},{value:"<code>TxConfig</code>",id:"txconfig",level:3},{value:"<code>TxBuilder</code>",id:"txbuilder",level:3},{value:"<code>TxEncoder</code>/ <code>TxDecoder</code>",id:"txencoder-txdecoder",level:3},{value:"<code>x/auth/tx/config</code>",id:"xauthtxconfig",level:2},{value:"Storage",id:"storage",level:3},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"Transactions",id:"transactions-1",level:4},{value:"<code>encode</code>",id:"encode",level:4},{value:"<code>decode</code>",id:"decode",level:4},{value:"gRPC",id:"grpc",level:3},{value:"<code>TxDecode</code>",id:"txdecode",level:4},{value:"<code>TxEncode</code>",id:"txencode",level:4},{value:"<code>TxDecodeAmino</code>",id:"txdecodeamino",level:4},{value:"<code>TxEncodeAmino</code>",id:"txencodeamino",level:4}],c={toc:s},g="wrapper";function p(e){let{components:n,...a}=e;return(0,o.yg)(g,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"xauthtx"},(0,o.yg)("inlineCode",{parentName:"h1"},"x/auth/tx")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/transactions#transaction-generation"},"Transactions")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/encoding#transaction-encoding"},"Encoding")))),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"This document specifies the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx")," package of the Cosmos SDK."),(0,o.yg)("p",null,"This package represents the Cosmos SDK implementation of the ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxConfig"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxBuilder"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxEncoder")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxDecoder")," interfaces."),(0,o.yg)("h2",{id:"contents"},"Contents"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#xauthtx"},(0,o.yg)("inlineCode",{parentName:"a"},"x/auth/tx")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#abstract"},"Abstract")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#contents"},"Contents")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#transactions"},"Transactions"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txconfig"},(0,o.yg)("inlineCode",{parentName:"a"},"TxConfig"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txbuilder"},(0,o.yg)("inlineCode",{parentName:"a"},"TxBuilder"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txencoder-txdecoder"},(0,o.yg)("inlineCode",{parentName:"a"},"TxEncoder"),"/ ",(0,o.yg)("inlineCode",{parentName:"a"},"TxDecoder"))))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#xauthtxconfig"},(0,o.yg)("inlineCode",{parentName:"a"},"x/auth/tx/config")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#storage"},"Storage")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#client"},"Client"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#cli"},"CLI"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#query"},"Query")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#transactions-1"},"Transactions")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#encode"},(0,o.yg)("inlineCode",{parentName:"a"},"encode"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#decode"},(0,o.yg)("inlineCode",{parentName:"a"},"decode"))))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#grpc"},"gRPC"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txdecode"},(0,o.yg)("inlineCode",{parentName:"a"},"TxDecode"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txencode"},(0,o.yg)("inlineCode",{parentName:"a"},"TxEncode"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txdecodeamino"},(0,o.yg)("inlineCode",{parentName:"a"},"TxDecodeAmino"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#txencodeamino"},(0,o.yg)("inlineCode",{parentName:"a"},"TxEncodeAmino")))))))))),(0,o.yg)("h2",{id:"transactions"},"Transactions"),(0,o.yg)("h3",{id:"txconfig"},(0,o.yg)("inlineCode",{parentName:"h3"},"TxConfig")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"client.TxConfig")," defines an interface a client can utilize to generate an application-defined concrete transaction type.\nThe interface defines a set of methods for creating a ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxBuilder"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx_config.go#L25-L31\n")),(0,o.yg)("p",null,"The default implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxConfig")," is instantiated by ",(0,o.yg)("inlineCode",{parentName:"p"},"NewTxConfig")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx")," module."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/tx/config.go#L22-L28\n")),(0,o.yg)("h3",{id:"txbuilder"},(0,o.yg)("inlineCode",{parentName:"h3"},"TxBuilder")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx_config.go#L33-L50\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/transactions#transaction-generation"},(0,o.yg)("inlineCode",{parentName:"a"},"client.TxBuilder"))," interface is as well implemented by ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx"),".\nA ",(0,o.yg)("inlineCode",{parentName:"p"},"client.TxBuilder")," can be accessed with ",(0,o.yg)("inlineCode",{parentName:"p"},"TxConfig.NewTxBuilder()"),".  "),(0,o.yg)("h3",{id:"txencoder-txdecoder"},(0,o.yg)("inlineCode",{parentName:"h3"},"TxEncoder"),"/ ",(0,o.yg)("inlineCode",{parentName:"h3"},"TxDecoder")),(0,o.yg)("p",null,"More information about ",(0,o.yg)("inlineCode",{parentName:"p"},"TxEncoder")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"TxDecoder")," can be found ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/encoding#transaction-encoding"},"here"),"."),(0,o.yg)("h2",{id:"xauthtxconfig"},(0,o.yg)("inlineCode",{parentName:"h2"},"x/auth/tx/config")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx/config")," contains a depinject module.\nThe depinject module is to outputs the ",(0,o.yg)("inlineCode",{parentName:"p"},"TxConfig")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"TxConfigOptions")," for the app."),(0,o.yg)("h3",{id:"storage"},"Storage"),(0,o.yg)("p",null,"This module has no store key. Do not forget to add the module name in the ",(0,o.yg)("inlineCode",{parentName:"p"},"SkipStoreKeys")," runtime config present in the app config."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"SkipStoreKeys: []string{\n    authtxconfig.DepinjectModuleName,\n    validate.ModuleName,\n},\n")),(0,o.yg)("h2",{id:"client"},"Client"),(0,o.yg)("h3",{id:"cli"},"CLI"),(0,o.yg)("h4",{id:"query"},"Query"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx")," module provides a CLI command to query any transaction, given its hash, transaction sequence or signature."),(0,o.yg)("p",null,"Without any argument, the command will query the transaction using the transaction hash."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query tx DFE87B78A630C0EFDF76C80CD24C997E252792E0317502AE1A02B9809F0D8685\n")),(0,o.yg)("p",null,"When querying a transaction from an account given its sequence, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--type=acc_seq")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query tx --type=acc_seq cosmos1u69uyr6v9qwe6zaaeaqly2h6wnedac0xpxq325/1\n")),(0,o.yg)("p",null,"When querying a transaction given its signature, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--type=signature")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query tx --type=signature Ofjvgrqi8twZfqVDmYIhqwRLQjZZ40XbxEamk/veH3gQpRF0hL2PH4ejRaDzAX+2WChnaWNQJQ41ekToIi5Wqw==\n")),(0,o.yg)("p",null,"When querying a transaction given its events, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--type=events")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query txs --events 'message.sender=cosmos...' --page 1 --limit 30\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/block")," module provides a CLI command to query any block, given its hash, height, or events."),(0,o.yg)("p",null,"When querying a block by its hash, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--type=hash")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query block --type=hash DFE87B78A630C0EFDF76C80CD24C997E252792E0317502AE1A02B9809F0D8685\n")),(0,o.yg)("p",null,"When querying a block by its height, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--type=height")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query block --type=height 1357\n")),(0,o.yg)("p",null,"When querying a block by its events, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--query")," flag:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"simd query blocks --query 'message.sender=cosmos...' --page 1 --limit 30\n")),(0,o.yg)("h4",{id:"transactions-1"},"Transactions"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx")," module provides a convenient CLI command for decoding and encoding transactions."),(0,o.yg)("h4",{id:"encode"},(0,o.yg)("inlineCode",{parentName:"h4"},"encode")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"encode")," command encodes a transaction created with the ",(0,o.yg)("inlineCode",{parentName:"p"},"--generate-only")," flag or signed with the sign command.\nThe transaction is serialized it to Protobuf and returned as base64."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ simd tx encode tx.json\nCo8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA==\n$ simd tx encode tx.signed.json\n")),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"encode")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx encode --help"),"."),(0,o.yg)("h4",{id:"decode"},(0,o.yg)("inlineCode",{parentName:"h4"},"decode")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"decode")," commands decodes a transaction encoded with the ",(0,o.yg)("inlineCode",{parentName:"p"},"encode")," command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx decode Co8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA==\n")),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"decode")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx decode --help"),"."),(0,o.yg)("h3",{id:"grpc"},"gRPC"),(0,o.yg)("p",null,"A user can query the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth/tx")," module using gRPC endpoints."),(0,o.yg)("h4",{id:"txdecode"},(0,o.yg)("inlineCode",{parentName:"h4"},"TxDecode")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"TxDecode")," endpoint allows to decode a transaction."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxDecode\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"tx_bytes":"Co8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA=="}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxDecode\n')),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "tx": {\n    "body": {\n      "messages": [\n        {"@type":"/cosmos.bank.v1beta1.MsgSend","amount":[{"denom":"stake","amount":"100"}],"fromAddress":"cosmos1l6vsqhh7rnwsyr2kyz3jjg3qduaz8gwgyl8275","toAddress":"cosmos158saldyg8pmxu7fwvt0d6x7jeswp4gwyklk6y3"}\n      ]\n    },\n    "authInfo": {\n      "fee": {\n        "gasLimit": "200000"\n      }\n    }\n  }\n}\n')),(0,o.yg)("h4",{id:"txencode"},(0,o.yg)("inlineCode",{parentName:"h4"},"TxEncode")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"TxEncode")," endpoint allows to encode a transaction."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxEncode\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"tx": {\n    "body": {\n      "messages": [\n        {"@type":"/cosmos.bank.v1beta1.MsgSend","amount":[{"denom":"stake","amount":"100"}],"fromAddress":"cosmos1l6vsqhh7rnwsyr2kyz3jjg3qduaz8gwgyl8275","toAddress":"cosmos158saldyg8pmxu7fwvt0d6x7jeswp4gwyklk6y3"}\n      ]\n    },\n    "authInfo": {\n      "fee": {\n        "gasLimit": "200000"\n      }\n    }\n  }}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxEncode\n')),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "txBytes": "Co8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA=="\n}\n')),(0,o.yg)("h4",{id:"txdecodeamino"},(0,o.yg)("inlineCode",{parentName:"h4"},"TxDecodeAmino")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"TxDecode")," endpoint allows to decode an amino transaction."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxDecodeAmino\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"amino_binary": "KCgWqQpvqKNhmgotY29zbW9zMXRzeno3cDJ6Z2Q3dnZrYWh5ZnJlNHduNXh5dTgwcnB0ZzZ2OWg1Ei1jb3Ntb3MxdHN6ejdwMnpnZDd2dmthaHlmcmU0d241eHl1ODBycHRnNnY5aDUaCwoFc3Rha2USAjEwEhEKCwoFc3Rha2USAjEwEMCaDCIGZm9vYmFy"}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxDecodeAmino\n')),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "aminoJson": "{\\"type\\":\\"cosmos-sdk/StdTx\\",\\"value\\":{\\"msg\\":[{\\"type\\":\\"cosmos-sdk/MsgSend\\",\\"value\\":{\\"from_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"to_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}]}}],\\"fee\\":{\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}],\\"gas\\":\\"200000\\"},\\"signatures\\":null,\\"memo\\":\\"foobar\\",\\"timeout_height\\":\\"0\\"}}"\n}\n')),(0,o.yg)("h4",{id:"txencodeamino"},(0,o.yg)("inlineCode",{parentName:"h4"},"TxEncodeAmino")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"TxEncodeAmino")," endpoint allows to encode an amino transaction."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxEncodeAmino\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"amino_json":"{\\"type\\":\\"cosmos-sdk/StdTx\\",\\"value\\":{\\"msg\\":[{\\"type\\":\\"cosmos-sdk/MsgSend\\",\\"value\\":{\\"from_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"to_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}]}}],\\"fee\\":{\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}],\\"gas\\":\\"200000\\"},\\"signatures\\":null,\\"memo\\":\\"foobar\\",\\"timeout_height\\":\\"0\\"}}"}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxEncodeAmino\n')),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "amino_binary": "KCgWqQpvqKNhmgotY29zbW9zMXRzeno3cDJ6Z2Q3dnZrYWh5ZnJlNHduNXh5dTgwcnB0ZzZ2OWg1Ei1jb3Ntb3MxdHN6ejdwMnpnZDd2dmthaHlmcmU0d241eHl1ODBycHRnNnY5aDUaCwoFc3Rha2USAjEwEhEKCwoFc3Rha2USAjEwEMCaDCIGZm9vYmFy"\n}\n')))}p.isMDXComponent=!0}}]);