"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[24682],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(58168),a=(n(96540),n(15680));const r={},i="Rosetta",s={unversionedId:"user/run-node/rosetta",id:"version-0.50/user/run-node/rosetta",title:"Rosetta",description:"The rosetta project implements Coinbase's Rosetta API. This document provides instructions on how to use the Rosetta API integration. For information about the motivation and design choices, refer to ADR 035.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/user/run-node/04-rosetta.md",sourceDirName:"user/run-node",slug:"/user/run-node/rosetta",permalink:"/cosmos-sdk/0.50/user/run-node/rosetta",draft:!1,tags:[],version:"0.50",sidebarPosition:4,frontMatter:{},sidebar:"userSidebar",previous:{title:"Guide to On-Chain Multisig transactions",permalink:"/cosmos-sdk/0.50/user/run-node/onchain-multisig"},next:{title:"User Guides",permalink:"/cosmos-sdk/0.50/user/"}},l={},d=[{value:"Installing Rosetta",id:"installing-rosetta",level:2},{value:"Standalone",id:"standalone",level:3},{value:"Native - As a node command",id:"native---as-a-node-command",level:3},{value:"Use Rosetta Command",id:"use-rosetta-command",level:2},{value:"Plugins - Multi chain connections",id:"plugins---multi-chain-connections",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Message extension",id:"message-extension",level:3},{value:"Client interface override",id:"client-interface-override",level:3},{value:"Error extension",id:"error-extension",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"rosetta"},"Rosetta"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"rosetta")," project implements Coinbase's ",(0,a.yg)("a",{parentName:"p",href:"https://www.rosetta-api.org"},"Rosetta API"),". This document provides instructions on how to use the Rosetta API integration. For information about the motivation and design choices, refer to ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/architecture/adr-035-rosetta-api-support"},"ADR 035"),"."),(0,a.yg)("h2",{id:"installing-rosetta"},"Installing Rosetta"),(0,a.yg)("p",null,"The Rosetta API server is a stand-alone server that connects to a node of a chain developed with Cosmos SDK."),(0,a.yg)("p",null,"Rosetta can be added to any cosmos chain node. standalone or natively."),(0,a.yg)("h3",{id:"standalone"},"Standalone"),(0,a.yg)("p",null,"Rosetta can be executed as a standalone service, it connects to the node endpoints and expose the required endpoints."),(0,a.yg)("p",null,"Install Rosetta standalone server with the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"go install github.com/cosmos/rosetta\n")),(0,a.yg)("p",null,"Alternatively, for building from source, simply run ",(0,a.yg)("inlineCode",{parentName:"p"},"make build"),". The binary will be located in the root folder."),(0,a.yg)("h3",{id:"native---as-a-node-command"},"Native - As a node command"),(0,a.yg)("p",null,"To enable Native Rosetta API support, it's required to add the ",(0,a.yg)("inlineCode",{parentName:"p"},"RosettaCommand")," to your application's root command file (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"simd/cmd/root.go"),")."),(0,a.yg)("p",null,"Import the ",(0,a.yg)("inlineCode",{parentName:"p"},"rosettaCmd")," package:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'import "github.com/cosmos/rosetta/cmd"\n')),(0,a.yg)("p",null,"Find the following line:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"initRootCmd(rootCmd, encodingConfig)\n")),(0,a.yg)("p",null,"After that line, add the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n  rosettaCmd.RosettaCommand(encodingConfig.InterfaceRegistry, encodingConfig.Codec)\n)\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"RosettaCommand")," function builds the ",(0,a.yg)("inlineCode",{parentName:"p"},"rosetta")," root command and is defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},"rosettaCmd")," package (",(0,a.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/rosetta/cmd"),")."),(0,a.yg)("p",null,"Since we\u2019ve updated the Cosmos SDK to work with the Rosetta API, updating the application's root command file is all you need to do."),(0,a.yg)("p",null,"An implementation example can be found in ",(0,a.yg)("inlineCode",{parentName:"p"},"simapp")," package."),(0,a.yg)("h2",{id:"use-rosetta-command"},"Use Rosetta Command"),(0,a.yg)("p",null,"To run Rosetta in your application CLI, use the following command:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note:")," if using the native approach, add your node name before any rosetta comand.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"rosetta --help\n")),(0,a.yg)("p",null,"To test and run Rosetta API endpoints for applications that are running and exposed, use the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'rosetta\n     --blockchain "your application name (ex: gaia)"\n     --network "your chain identifier (ex: testnet-1)"\n     --tendermint "tendermint endpoint (ex: localhost:26657)"\n     --grpc "gRPC endpoint (ex: localhost:9090)"\n     --addr "rosetta binding address (ex: :8080)"\n     --grpc-types-server (optional) "gRPC endpoint for message descriptor types"\n')),(0,a.yg)("h2",{id:"plugins---multi-chain-connections"},"Plugins - Multi chain connections"),(0,a.yg)("p",null,"Rosetta will try to reflect the node types trough reflection over the node gRPC endpoints, there may be cases were this approach is not enough. It is possible to extend or implement the required types easily trough plugins."),(0,a.yg)("p",null,"To use Rosetta over any chain, it is required to set up prefixes and registering zone specific interfaces through plugins."),(0,a.yg)("p",null,"Each plugin is a minimalist implementation of ",(0,a.yg)("inlineCode",{parentName:"p"},"InitZone")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"RegisterInterfaces")," which allow Rosetta to parse chain specific data. There is an example for cosmos-hub chain under ",(0,a.yg)("inlineCode",{parentName:"p"},"plugins/cosmos-hun/")," folder"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"InitZone"),": An empty method that is executed first and defines prefixes, parameters and other settings."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"RegisterInterfaces"),": This method receives an interface registry which is were the zone specific types and interfaces will be loaded")),(0,a.yg)("p",null,"In order to add a new plugin: "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create a folder over ",(0,a.yg)("inlineCode",{parentName:"li"},"plugins")," folder with the name of the desired zone"),(0,a.yg)("li",{parentName:"ol"},"Add a ",(0,a.yg)("inlineCode",{parentName:"li"},"main.go")," file with the mentioned methods above."),(0,a.yg)("li",{parentName:"ol"},"Build the code binary through ",(0,a.yg)("inlineCode",{parentName:"li"},"go build -buildmode=plugin -o main.so main.go")," ")),(0,a.yg)("p",null,"The plugin folder is selected through the cli ",(0,a.yg)("inlineCode",{parentName:"p"},"--plugin")," flag and loaded into the Rosetta server."),(0,a.yg)("h2",{id:"extensions"},"Extensions"),(0,a.yg)("p",null,"There are two ways in which you can customize and extend the implementation with your custom settings."),(0,a.yg)("h3",{id:"message-extension"},"Message extension"),(0,a.yg)("p",null,"In order to make an ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," understandable by rosetta the only thing which is required is adding the methods to your messages that satisfy the ",(0,a.yg)("inlineCode",{parentName:"p"},"rosetta.Msg")," interface. Examples on how to do so can be found in the staking types such as ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgDelegate"),", or in bank types such as ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgSend"),"."),(0,a.yg)("h3",{id:"client-interface-override"},"Client interface override"),(0,a.yg)("p",null,"In case more customization is required, it's possible to embed the Client type and override the methods which require customizations."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package custom_client\nimport (\n\n"context"\n"github.com/coinbase/rosetta-sdk-go/types"\n"github.com/cosmos/rosetta/lib"\n)\n\n// CustomClient embeds the standard cosmos client\n// which means that it implements the cosmos-rosetta-gateway Client\n// interface while at the same time allowing to customize certain methods\ntype CustomClient struct {\n    *rosetta.Client\n}\n\nfunc (c *CustomClient) ConstructionPayload(_ context.Context, request *types.ConstructionPayloadsRequest) (resp *types.ConstructionPayloadsResponse, err error) {\n    // provide custom signature bytes\n    panic("implement me")\n}\n')),(0,a.yg)("p",null,"NOTE: when using a customized client, the command cannot be used as the constructors required ",(0,a.yg)("strong",{parentName:"p"},"may")," differ, so it's required to create a new one. We intend to provide a way to init a customized client without writing extra code in the future."),(0,a.yg)("h3",{id:"error-extension"},"Error extension"),(0,a.yg)("p",null,"Since rosetta requires to provide 'returned' errors to network options. In order to declare a new rosetta error, we use the ",(0,a.yg)("inlineCode",{parentName:"p"},"errors")," package in cosmos-rosetta-gateway."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package custom_errors\nimport crgerrs "github.com/cosmos/rosetta/lib/errors"\n\nvar customErrRetriable = true\nvar CustomError = crgerrs.RegisterError(100, "custom message", customErrRetriable, "description")\n')),(0,a.yg)("p",null,"Note: errors must be registered before cosmos-rosetta-gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"Server"),".",(0,a.yg)("inlineCode",{parentName:"p"},"Start")," method is called. Otherwise the registration will be ignored. Errors with same code will be ignored too."))}u.isMDXComponent=!0}}]);