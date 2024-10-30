"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[67050],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=o,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(58168),o=(n(96540),n(15680));const a={title:"Setup",sidebar_label:"Setup",sidebar_position:9,slug:"/ibc/light-clients/setup"},r="Setup",l={unversionedId:"light-clients/developer-guide/setup",id:"version-v8.5.x/light-clients/developer-guide/setup",title:"Setup",description:"Learn how to configure light client modules and create clients using core IBC and the 02-client submodule.",source:"@site/ibc-go_versioned_docs/version-v8.5.x/03-light-clients/01-developer-guide/09-setup.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/setup",permalink:"/ibc-go/v8.5.x/ibc/light-clients/setup",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:9,frontMatter:{title:"Setup",sidebar_label:"Setup",sidebar_position:9,slug:"/ibc/light-clients/setup"},sidebar:"defaultSidebar",previous:{title:"Handling Genesis",permalink:"/ibc-go/v8.5.x/ibc/light-clients/genesis"},next:{title:"Overview",permalink:"/ibc-go/v8.5.x/ibc/light-clients/localhost/overview"}},s={},c=[{value:"Configuring a light client module",id:"configuring-a-light-client-module",level:2},{value:"Creating clients",id:"creating-clients",level:2}],p={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"setup"},"Setup"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Learn how to configure light client modules and create clients using core IBC and the ",(0,o.yg)("inlineCode",{parentName:"p"},"02-client")," submodule.")),(0,o.yg)("p",null,"A last step to finish the development of the light client, is to implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," interface to allow it to be added to the chain's ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go")," alongside other light client types the chain enables."),(0,o.yg)("p",null,"Finally, a succinct rundown is given of the remaining steps to make the light client operational, getting the light client type passed through governance and creating the clients."),(0,o.yg)("h2",{id:"configuring-a-light-client-module"},"Configuring a light client module"),(0,o.yg)("p",null,"An IBC light client module must implement the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/types/module/module.go#L50"},(0,o.yg)("inlineCode",{parentName:"a"},"AppModuleBasic"))," interface in order to register its concrete types against the core IBC interfaces defined in ",(0,o.yg)("inlineCode",{parentName:"p"},"modules/core/exported"),". This is accomplished via the ",(0,o.yg)("inlineCode",{parentName:"p"},"RegisterInterfaces")," method which provides the light client module with the opportunity to register codec types using the chain's ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry"),". Please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/codec.go#L11"},(0,o.yg)("inlineCode",{parentName:"a"},"07-tendermint")," codec registration"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," interface may also be leveraged to install custom CLI handlers for light client module users. Light client modules can safely no-op for interface methods which it does not wish to implement."),(0,o.yg)("p",null,"Please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/ibc-go/v8.5.x/ibc/integration#integrating-light-clients"},"core IBC documentation")," for how to configure additional light client modules alongside ",(0,o.yg)("inlineCode",{parentName:"p"},"07-tendermint")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go"),"."),(0,o.yg)("p",null,"See below for an example of the ",(0,o.yg)("inlineCode",{parentName:"p"},"07-tendermint")," implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"AppModuleBasic"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"var _ module.AppModuleBasic = AppModuleBasic{}\n\n// AppModuleBasic defines the basic application module used by the tendermint light client.\n// Only the RegisterInterfaces function needs to be implemented. All other function perform\n// a no-op.\ntype AppModuleBasic struct{}\n\n// Name returns the tendermint module name.\nfunc (AppModuleBasic) Name() string {\n  return ModuleName\n}\n\n// RegisterLegacyAminoCodec performs a no-op. The Tendermint client does not support amino.\nfunc (AppModuleBasic) RegisterLegacyAminoCodec(*codec.LegacyAmino) {}\n\n// RegisterInterfaces registers module concrete types into protobuf Any. This allows core IBC\n// to unmarshal tendermint light client types.\nfunc (AppModuleBasic) RegisterInterfaces(registry codectypes.InterfaceRegistry) {\n  RegisterInterfaces(registry)\n}\n\n// DefaultGenesis performs a no-op. Genesis is not supported for the tendermint light client.\nfunc (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {\n  return nil\n}\n\n// ValidateGenesis performs a no-op. Genesis is not supported for the tendermint light client.\nfunc (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, config client.TxEncodingConfig, bz json.RawMessage) error {\n  return nil\n}\n\n// RegisterGRPCGatewayRoutes performs a no-op.\nfunc (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {}\n\n// GetTxCmd performs a no-op. Please see the 02-client cli commands.\nfunc (AppModuleBasic) GetTxCmd() *cobra.Command {\n  return nil\n}\n\n// GetQueryCmd performs a no-op. Please see the 02-client cli commands.\nfunc (AppModuleBasic) GetQueryCmd() *cobra.Command {\n  return nil\n}\n")),(0,o.yg)("h2",{id:"creating-clients"},"Creating clients"),(0,o.yg)("p",null,"A client is created by executing a new ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgCreateClient")," transaction composed with a valid ",(0,o.yg)("inlineCode",{parentName:"p"},"ClientState")," and initial ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsensusState")," encoded as protobuf ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),"s.\nGenerally, this is performed by an off-chain process known as an ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/relayer/ics-018-relayer-algorithms"},"IBC relayer")," however, this is not a strict requirement."),(0,o.yg)("p",null,"See below for a list of IBC relayer implementations:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"cosmos/relayer")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/informalsystems/hermes"},"informalsystems/hermes")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/confio/ts-relayer"},"confio/ts-relayer"))),(0,o.yg)("p",null,"Stateless checks are performed within the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/types/msgs.go#L48"},(0,o.yg)("inlineCode",{parentName:"a"},"ValidateBasic"))," method of ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgCreateClient"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'// MsgCreateClient defines a message to create an IBC client\nmessage MsgCreateClient {\n  option (gogoproto.goproto_getters) = false;\n\n  // light client state\n  google.protobuf.Any client_state = 1 [(gogoproto.moretags) = "yaml:\\"client_state\\""];\n  // consensus state associated with the client that corresponds to a given\n  // height.\n  google.protobuf.Any consensus_state = 2 [(gogoproto.moretags) = "yaml:\\"consensus_state\\""];\n  // signer address\n  string signer = 3;\n}\n')),(0,o.yg)("p",null,"Leveraging protobuf ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," encoding allows core IBC to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/keeper/msg_server.go#L28-L36"},"unpack")," both the ",(0,o.yg)("inlineCode",{parentName:"p"},"ClientState")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsensusState")," into their respective interface types registered previously using the light client module's ",(0,o.yg)("inlineCode",{parentName:"p"},"RegisterInterfaces")," method."),(0,o.yg)("p",null,"Within the ",(0,o.yg)("inlineCode",{parentName:"p"},"02-client")," submodule, the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L30-L32"},(0,o.yg)("inlineCode",{parentName:"a"},"ClientState")," is then initialized")," with its own isolated key-value store, namespaced using a unique client identifier."),(0,o.yg)("p",null,"In order to successfully create an IBC client using a new client type, it ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L19-L25"},"must be supported"),". Light client support in IBC is gated by on-chain governance. The allow list may be updated by submitting a new governance proposal to update the ",(0,o.yg)("inlineCode",{parentName:"p"},"02-client")," parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"AllowedClients"),"."),(0,o.yg)("p",null,"See below for example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"%s tx gov submit-proposal <path/to/proposal.json> --from <key_or_address>\n")),(0,o.yg)("p",null,"where ",(0,o.yg)("inlineCode",{parentName:"p"},"proposal.json")," contains:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "IBC Clients Param Change",\n  "summary": "Update allowed clients",\n  "messages": [\n    {\n      "@type": "/ibc.core.client.v1.MsgUpdateParams",\n      "signer": "cosmos1...", // The gov module account address\n      "params": {\n        "allowed_clients": ["06-solomachine", "07-tendermint", "0x-new-client"]\n      }\n    }\n  ],\n  "metadata": "AQ==",\n  "deposit": "100stake"\n}\n')),(0,o.yg)("p",null,"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"AllowedClients")," list contains a single element that is equal to the wildcard ",(0,o.yg)("inlineCode",{parentName:"p"},'"*"'),", then all client types are allowed and it is thus not necessary to submit a governance proposal to update the parameter."))}d.isMDXComponent=!0}}]);