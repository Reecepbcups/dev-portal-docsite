"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[28436],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>p});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,p=m["".concat(l,".").concat(h)]||m[h]||d[h]||s;return n?i.createElement(p,o(o({ref:t},g),{},{components:n})):i.createElement(p,o({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(58168),a=(n(96540),n(15680));const s={title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/ibc/light-clients/wasm/messages"},o="Messages",r={unversionedId:"light-clients/wasm/messages",id:"version-v7.8.x/light-clients/wasm/messages",title:"Messages",description:"MsgStoreCode",source:"@site/ibc-go_versioned_docs/version-v7.8.x/03-light-clients/04-wasm/04-messages.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/messages",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/messages",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:4,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/ibc/light-clients/wasm/messages"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/integration"},next:{title:"Governance",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/governance"}},l={},c=[{value:"<code>MsgStoreCode</code>",id:"msgstorecode",level:2},{value:"<code>MsgMigrateContract</code>",id:"msgmigratecontract",level:2},{value:"<code>MsgRemoveChecksum</code>",id:"msgremovechecksum",level:2}],g={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,i.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"messages"},"Messages"),(0,a.yg)("h2",{id:"msgstorecode"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgStoreCode")),(0,a.yg)("p",null,"Uploading the Wasm light client contract to the Wasm VM storage is achieved by means of ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgStoreCode"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type MsgStoreCode struct {\n  // signer address\n  Signer string\n  // wasm byte code of light client contract. It can be raw or gzip compressed\n  WasmByteCode []byte\n}\n")),(0,a.yg)("p",null,"This message is expected to fail if:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Signer")," is an invalid Bech32 address, or it does not match the designated authority address."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"WasmByteCode")," is empty or it exceeds the maximum size, currently set to 3MB.")),(0,a.yg)("p",null,"Only light client contracts stored using ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," are allowed to be instantiated. An attempt to create a light client from contracts uploaded via other means (e.g. through ",(0,a.yg)("inlineCode",{parentName:"p"},"x/wasm")," if the module shares the same Wasm VM instance with 08-wasm) will fail. Due to the idempotent nature of the Wasm VM's ",(0,a.yg)("inlineCode",{parentName:"p"},"StoreCode")," function, it is possible to store the same byte code multiple times."),(0,a.yg)("p",null,"When execution of ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," succeeds, the checksum of the contract (i.e. the sha256 hash of the contract's byte code) is stored in an allow list. When a relayer submits ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/proto/ibc/core/client/v1/tx.proto#L25-L37"},(0,a.yg)("inlineCode",{parentName:"a"},"MsgCreateClient"))," with 08-wasm's ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState"),", the client state includes the checksum of the Wasm byte code that should be called. Then 02-client calls ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/02-client/keeper/client.go#L34"},"08-wasm's implementation of ",(0,a.yg)("inlineCode",{parentName:"a"},"Initialize")," function")," (which is an interface function part of ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState"),"), and it will check that the checksum in the client state matches one of the checksums in the allow list. If a match is found, the light client is initialized; otherwise, the transaction is aborted."),(0,a.yg)("h2",{id:"msgmigratecontract"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgMigrateContract")),(0,a.yg)("p",null,"Migrating a contract to a new Wasm byte code is achieved by means of ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgMigrateContract"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type MsgMigrateContract struct {\n  // signer address\n  Signer string\n  // the client id of the contract\n  ClientId string\n  // the SHA-256 hash of the new wasm byte code for the contract\n  Checksum []byte\n  // the json-encoded migrate msg to be passed to the contract on migration\n  Msg []byte\n}\n")),(0,a.yg)("p",null,"This message is expected to fail if:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Signer")," is an invalid Bech32 address, or it does not match the designated authority address."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ClientId")," is not a valid identifier prefixed by ",(0,a.yg)("inlineCode",{parentName:"li"},"08-wasm"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Checksum")," is not exactly 32 bytes long or it is not found in the list of allowed checksums (a new checksum is added to the list when executing ",(0,a.yg)("inlineCode",{parentName:"li"},"MsgStoreCode"),"), or it matches the current checksum of the contract.")),(0,a.yg)("p",null,"When a Wasm light client contract is migrated to a new Wasm byte code the checksum for the contract will be updated with the new checksum."),(0,a.yg)("h2",{id:"msgremovechecksum"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgRemoveChecksum")),(0,a.yg)("p",null,"Removing a checksum from the list of allowed checksums is achieved by means of ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgRemoveChecksum"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type MsgRemoveChecksum struct {\n  // signer address\n  Signer string\n  // Wasm byte code checksum to be removed from the store\n  Checksum []byte\n}\n")),(0,a.yg)("p",null,"This message is expected to fail if:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Signer")," is an invalid Bech32 address, or it does not match the designated authority address."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Checksum")," is not exactly 32 bytes long or it is not found in the list of allowed checksums (a new checksum is added to the list when executing ",(0,a.yg)("inlineCode",{parentName:"li"},"MsgStoreCode"),").")),(0,a.yg)("p",null,"When a checksum is removed from the list of allowed checksums, then the corresponding Wasm byte code will not be available for instantiation in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/02-client/keeper/client.go#L34"},"08-wasm's implementation of ",(0,a.yg)("inlineCode",{parentName:"a"},"Initialize")," function"),"."))}d.isMDXComponent=!0}}]);