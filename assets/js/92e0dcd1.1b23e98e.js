"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[34399],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=o(t),d=l,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||r;return t?a.createElement(u,c(c({ref:n},p),{},{components:t})):a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,c=new Array(r);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[g]="string"==typeof e?e:l,c[1]=i;for(var o=2;o<r;o++)c[o]=t[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={title:"Client",sidebar_label:"Client",sidebar_position:7,slug:"/ibc/light-clients/wasm/client"},c="Client",i={unversionedId:"light-clients/wasm/client",id:"version-v8.5.x/light-clients/wasm/client",title:"Client",description:"CLI",source:"@site/ibc-go_versioned_docs/version-v8.5.x/03-light-clients/04-wasm/08-client.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/client",permalink:"/ibc-go/v8.5.x/ibc/light-clients/wasm/client",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:7,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:7,slug:"/ibc/light-clients/wasm/client"},sidebar:"defaultSidebar",previous:{title:"Contracts",permalink:"/ibc-go/v8.5.x/ibc/light-clients/wasm/contracts"},next:{title:"Migrations",permalink:"/ibc-go/v8.5.x/ibc/light-clients/wasm/migrations"}},s={},o=[{value:"CLI",id:"cli",level:2},{value:"Transactions",id:"transactions",level:3},{value:"<code>store-code</code>",id:"store-code",level:4},{value:"<code>migrate-contract</code>",id:"migrate-contract",level:4},{value:"Query",id:"query",level:3},{value:"<code>checksums</code>",id:"checksums",level:4},{value:"<code>code</code>",id:"code",level:4},{value:"gRPC",id:"grpc",level:2},{value:"<code>Checksums</code>",id:"checksums-1",level:3},{value:"<code>Code</code>",id:"code-1",level:3}],p={toc:o},g="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"client"},"Client"),(0,l.yg)("h2",{id:"cli"},"CLI"),(0,l.yg)("p",null,"A user can query and interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"08-wasm")," module using the CLI. Use the ",(0,l.yg)("inlineCode",{parentName:"p"},"--help")," flag to discover the available commands:"),(0,l.yg)("h3",{id:"transactions"},"Transactions"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"08-wasm")," submodule."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx ibc-wasm --help\n")),(0,l.yg)("h4",{id:"store-code"},(0,l.yg)("inlineCode",{parentName:"h4"},"store-code")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"store-code")," command allows users to submit a governance proposal with a ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," to store the byte code of a Wasm light client contract."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx ibc-wasm store-code [path/to/wasm-file] [flags]\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"path/to/wasm-file")," is the path to the ",(0,l.yg)("inlineCode",{parentName:"p"},".wasm")," or ",(0,l.yg)("inlineCode",{parentName:"p"},".wasm.gz")," file."),(0,l.yg)("h4",{id:"migrate-contract"},(0,l.yg)("inlineCode",{parentName:"h4"},"migrate-contract")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"migrate-contract")," command allows users to broadcast a transaction with a ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgMigrateContract")," to migrate the contract for a given light client to a new byte code denoted by the given checksum."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx ibc-wasm migrate-contract [client-id] [checksum] [migrate-msg]\n")),(0,l.yg)("p",null,"The migrate message must not be empty and is expected to be a JSON-encoded string."),(0,l.yg)("h3",{id:"query"},"Query"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.yg)("inlineCode",{parentName:"p"},"08-wasm")," state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm --help\n")),(0,l.yg)("h4",{id:"checksums"},(0,l.yg)("inlineCode",{parentName:"h4"},"checksums")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"checksums")," command allows users to query the list of checksums of Wasm light client contracts stored in the Wasm VM via the ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgStoreCode"),". The checksums are hex-encoded."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm checksums [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm checksums\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'checksums:\n- c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64\npagination:\n  next_key: null\n  total: "1"\n')),(0,l.yg)("h4",{id:"code"},(0,l.yg)("inlineCode",{parentName:"h4"},"code")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"code")," command allows users to query the Wasm byte code of a light client contract given the provided input checksum."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./simd q ibc-wasm code\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm code c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"code: AGFzb...AqBBE=\n")),(0,l.yg)("h2",{id:"grpc"},"gRPC"),(0,l.yg)("p",null,"A user can query the ",(0,l.yg)("inlineCode",{parentName:"p"},"08-wasm")," module using gRPC endpoints."),(0,l.yg)("h3",{id:"checksums-1"},(0,l.yg)("inlineCode",{parentName:"h3"},"Checksums")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Checksums")," endpoint allows users to query the list of checksums of Wasm light client contracts stored in the Wasm VM via the ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgStoreCode"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"ibc.lightclients.wasm.v1.Query/Checksums\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext \\\n  -d '{}' \\\n  localhost:9090 \\\n  ibc.lightclients.wasm.v1.Query/Checksums\n")),(0,l.yg)("p",null,"Example output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'{\n  "checksums": [\n    "c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64"\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,l.yg)("h3",{id:"code-1"},(0,l.yg)("inlineCode",{parentName:"h3"},"Code")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"Code")," endpoint allows users to query the Wasm byte code of a light client contract given the provided input checksum."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"ibc.lightclients.wasm.v1.Query/Code\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n  -d \'{"checksum":"c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64"}\' \\\n  localhost:9090 \\\n  ibc.lightclients.wasm.v1.Query/Code\n')),(0,l.yg)("p",null,"Example output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'{\n  "code": AGFzb...AqBBE=\n}\n')))}m.isMDXComponent=!0}}]);