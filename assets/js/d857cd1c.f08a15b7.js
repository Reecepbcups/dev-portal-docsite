"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[3926],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},85329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const o={title:"Client",sidebar_label:"Client",sidebar_position:8,slug:"/apps/interchain-accounts/client"},l="Client",i={unversionedId:"apps/interchain-accounts/client",id:"version-v8.5.x/apps/interchain-accounts/client",title:"Client",description:"CLI",source:"@site/ibc-go_versioned_docs/version-v8.5.x/02-apps/02-interchain-accounts/08-client.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/client",permalink:"/ibc-go/v8.5.x/apps/interchain-accounts/client",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:8,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:8,slug:"/apps/interchain-accounts/client"},sidebar:"defaultSidebar",previous:{title:"Transaction Encoding",permalink:"/ibc-go/v8.5.x/apps/interchain-accounts/tx-encoding"},next:{title:"Active Channels",permalink:"/ibc-go/v8.5.x/apps/interchain-accounts/active-channels"}},c={},s=[{value:"CLI",id:"cli",level:2},{value:"Controller",id:"controller",level:3},{value:"Query",id:"query",level:4},{value:"Transactions",id:"transactions",level:4},{value:"<code>register</code>",id:"register",level:4},{value:"<code>send-tx</code>",id:"send-tx",level:4},{value:"Host",id:"host",level:3},{value:"Query",id:"query-1",level:4},{value:"Transactions",id:"transactions-1",level:4},{value:"<code>generate-packet-data</code>",id:"generate-packet-data",level:5},{value:"gRPC",id:"grpc",level:2},{value:"Controller",id:"controller-1",level:3},{value:"<code>InterchainAccount</code>",id:"interchainaccount",level:4},{value:"<code>Params</code>",id:"params",level:4},{value:"Host",id:"host-1",level:3},{value:"<code>Params</code>",id:"params-1",level:4}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"client"},"Client"),(0,r.yg)("h2",{id:"cli"},"CLI"),(0,r.yg)("p",null,"A user can query and interact with the Interchain Accounts module using the CLI. Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--help")," flag to discover the available commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd query interchain-accounts --help\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please not that this section does not document all the available commands, but only the ones that deserved extra documentation that was not possible to fit in the command line documentation.")),(0,r.yg)("h3",{id:"controller"},"Controller"),(0,r.yg)("p",null,"A user can query and interact with the controller submodule."),(0,r.yg)("h4",{id:"query"},"Query"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," commands allow users to query the controller submodule."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd query interchain-accounts controller --help\n")),(0,r.yg)("h4",{id:"transactions"},"Transactions"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the controller submodule."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts controller --help\n")),(0,r.yg)("h4",{id:"register"},(0,r.yg)("inlineCode",{parentName:"h4"},"register")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," command allows users to register an interchain account on a host chain on the provided connection."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts controller register [connection-id] [flags]\n")),(0,r.yg)("p",null,"During registration a new channel is set up between controller and host. There are two flags available that influence the channel that is created:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--version")," to specify the (JSON-formatted) version string of the channel. For example: ",(0,r.yg)("inlineCode",{parentName:"li"},'{\\"version\\":\\"ics27-1\\",\\"encoding\\":\\"proto3\\",\\"tx_type\\":\\"sdk_multi_msg\\",\\"controller_connection_id\\":\\"connection-0\\",\\"host_connection_id\\":\\"connection-0\\"}'),". Passing a custom version string is useful if you want to specify, for example, the encoding format of the interchain accounts packet data (either ",(0,r.yg)("inlineCode",{parentName:"li"},"proto3")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"proto3json"),"). If not specified the controller submodule will generate a default version string."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--ordering")," to specify the ordering of the channel. Available options are ",(0,r.yg)("inlineCode",{parentName:"li"},"order_ordered")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"order_unordered")," (default if not specified).")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts controller register connection-0 --ordering order_ordered --from cosmos1..\n")),(0,r.yg)("h4",{id:"send-tx"},(0,r.yg)("inlineCode",{parentName:"h4"},"send-tx")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"send-tx")," command allows users to send a transaction on the provided connection to be executed using an interchain account on the host chain."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts controller send-tx [connection-id] [path/to/packet_msg.json]\n")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts controller send-tx connection-0 packet-data.json --from cosmos1..\n")),(0,r.yg)("p",null,"See below for example contents of ",(0,r.yg)("inlineCode",{parentName:"p"},"packet-data.json"),". The CLI handler will unmarshal the following into ",(0,r.yg)("inlineCode",{parentName:"p"},"InterchainAccountPacketData")," appropriately."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"TYPE_EXECUTE_TX",\n  "data":"CqIBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEoEBCkFjb3Ntb3MxNWNjc2hobXAwZ3N4MjlxcHFxNmc0em1sdG5udmdteXU5dWV1YWRoOXkybmM1emowc3psczVndGRkehItY29zbW9zMTBoOXN0YzV2Nm50Z2V5Z2Y1eGY5NDVuanFxNWgzMnI1M3VxdXZ3Gg0KBXN0YWtlEgQxMDAw",\n  "memo":""\n}\n')),(0,r.yg)("p",null,"Note the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," field is a base64 encoded byte string as per the tx encoding agreed upon during the channel handshake."),(0,r.yg)("p",null,"A helper CLI is provided in the host submodule which can be used to generate the packet data JSON using the counterparty chain's binary. See the ",(0,r.yg)("a",{parentName:"p",href:"#generate-packet-data"},(0,r.yg)("inlineCode",{parentName:"a"},"generate-packet-data")," command")," for an example."),(0,r.yg)("h3",{id:"host"},"Host"),(0,r.yg)("p",null,"A user can query and interact with the host submodule."),(0,r.yg)("h4",{id:"query-1"},"Query"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"query")," commands allow users to query the host submodule."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd query interchain-accounts host --help\n")),(0,r.yg)("h4",{id:"transactions-1"},"Transactions"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the controller submodule."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts host --help\n")),(0,r.yg)("h5",{id:"generate-packet-data"},(0,r.yg)("inlineCode",{parentName:"h5"},"generate-packet-data")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"generate-packet-data")," command allows users to generate protobuf or proto3 JSON encoded interchain accounts packet data for input message(s). The packet data can then be used with the controller submodule's ",(0,r.yg)("a",{parentName:"p",href:"#send-tx"},(0,r.yg)("inlineCode",{parentName:"a"},"send-tx")," command"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"--encoding")," flag can be used to specify the encoding format (value must be either ",(0,r.yg)("inlineCode",{parentName:"p"},"proto3")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"proto3json"),"); if not specified, the default will be ",(0,r.yg)("inlineCode",{parentName:"p"},"proto3"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"--memo")," flag can be used to include a memo string in the interchain accounts packet data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx interchain-accounts host generate-packet-data [message]\n")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'simd tx interchain-accounts host generate-packet-data \'[{\n  "@type":"/cosmos.bank.v1beta1.MsgSend",\n  "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n  "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n  "amount": [\n    {\n      "denom": "stake",\n      "amount": "1000"\n    }\n  ]\n}]\' --memo memo\n')),(0,r.yg)("p",null,"The command accepts a single ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," or a list of ",(0,r.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s that will be encoded into the outputs ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," field."),(0,r.yg)("p",null,"Example output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"TYPE_EXECUTE_TX",\n  "data":"CqIBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEoEBCkFjb3Ntb3MxNWNjc2hobXAwZ3N4MjlxcHFxNmc0em1sdG5udmdteXU5dWV1YWRoOXkybmM1emowc3psczVndGRkehItY29zbW9zMTBoOXN0YzV2Nm50Z2V5Z2Y1eGY5NDVuanFxNWgzMnI1M3VxdXZ3Gg0KBXN0YWtlEgQxMDAw",\n  "memo":"memo"\n}\n')),(0,r.yg)("h2",{id:"grpc"},"gRPC"),(0,r.yg)("p",null,"A user can query the interchain account module using gRPC endpoints."),(0,r.yg)("h3",{id:"controller-1"},"Controller"),(0,r.yg)("p",null,"A user can query the controller submodule using gRPC endpoints."),(0,r.yg)("h4",{id:"interchainaccount"},(0,r.yg)("inlineCode",{parentName:"h4"},"InterchainAccount")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"InterchainAccount")," endpoint allows users to query the controller submodule for the interchain account address for a given owner on a particular connection."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount\n")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n  -d \'{"owner":"cosmos1..","connection_id":"connection-0"}\' \\\n  localhost:9090 \\\n  ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount\n')),(0,r.yg)("h4",{id:"params"},(0,r.yg)("inlineCode",{parentName:"h4"},"Params")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Params")," endpoint users to query the current controller submodule parameters."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ibc.applications.interchain_accounts.controller.v1.Query/Params\n")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext \\\n  localhost:9090 \\\n  ibc.applications.interchain_accounts.controller.v1.Query/Params\n")),(0,r.yg)("h3",{id:"host-1"},"Host"),(0,r.yg)("p",null,"A user can query the host submodule using gRPC endpoints."),(0,r.yg)("h4",{id:"params-1"},(0,r.yg)("inlineCode",{parentName:"h4"},"Params")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Params")," endpoint users to query the current host submodule parameters."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ibc.applications.interchain_accounts.host.v1.Query/Params\n")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext \\\n  localhost:9090 \\\n  ibc.applications.interchain_accounts.host.v1.Query/Params\n")))}d.isMDXComponent=!0}}]);