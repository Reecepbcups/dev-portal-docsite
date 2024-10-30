"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[31528],{15680:(e,n,t)=>{t.d(n,{xA:()=>h,yg:()=>u});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},h=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?i.createElement(u,r(r({ref:n},h),{},{components:t})):i.createElement(u,r({ref:n},h))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(58168),a=(t(96540),t(15680));const o={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/transfer/ics20-v1/overview"},r=void 0,l={unversionedId:"docs/apps/transfer/ICS20-v1/overview",id:"docs/apps/transfer/ICS20-v1/overview",title:"Overview",description:"This document is relevant only for fungible token transfers over channels on v1 of the ICS-20 protocol.",source:"@site/ibc-go/docs/02-apps/01-transfer/10-ICS20-v1/01-overview.md",sourceDirName:"docs/02-apps/01-transfer/10-ICS20-v1",slug:"/apps/transfer/ics20-v1/overview",permalink:"/ibc-go/next/apps/transfer/ics20-v1/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/transfer/ics20-v1/overview"},sidebar:"defaultSidebar",previous:{title:"Client",permalink:"/ibc-go/next/apps/transfer/client"},next:{title:"State",permalink:"/ibc-go/next/apps/transfer/ics20-v1/state"}},s={},c=[{value:"What is the Transfer module?",id:"what-is-the-transfer-module",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Acknowledgements",id:"acknowledgements",level:3},{value:"Denomination trace",id:"denomination-trace",level:3},{value:"UX suggestions for clients",id:"ux-suggestions-for-clients",level:2},{value:"Direct connection",id:"direct-connection",level:3},{value:"Multiple hops",id:"multiple-hops",level:3},{value:"Locked funds",id:"locked-funds",level:2},{value:"Security considerations",id:"security-considerations",level:2},{value:"Channel Closure",id:"channel-closure",level:2}],h={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,i.A)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"This document is relevant only for fungible token transfers over channels on v1 of the ICS-20 protocol.")),(0,a.yg)("h1",{id:"overview"},"Overview"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Learn about what the token Transfer module is")),(0,a.yg)("h2",{id:"what-is-the-transfer-module"},"What is the Transfer module?"),(0,a.yg)("p",null,"Transfer is the Cosmos SDK implementation of the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer"},"ICS-20")," protocol, which enables cross-chain fungible token transfers."),(0,a.yg)("h2",{id:"concepts"},"Concepts"),(0,a.yg)("h3",{id:"acknowledgements"},"Acknowledgements"),(0,a.yg)("p",null,"ICS20 uses the recommended acknowledgement format as specified by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope"},"ICS 04"),"."),(0,a.yg)("p",null,"A successful receive of a transfer packet will result in a Result Acknowledgement being written\nwith the value ",(0,a.yg)("inlineCode",{parentName:"p"},"[]byte{byte(1)}")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," field."),(0,a.yg)("p",null,"An unsuccessful receive of a transfer packet will result in an Error Acknowledgement being written\nwith the error message in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Response")," field."),(0,a.yg)("h3",{id:"denomination-trace"},"Denomination trace"),(0,a.yg)("p",null,"The denomination trace corresponds to the information that allows a token to be traced back to its\norigin chain. It contains a sequence of port and channel identifiers ordered from the most recent to\nthe oldest in the timeline of transfers."),(0,a.yg)("p",null,"This information is included on the token's base denomination field in the form of a hash to prevent an\nunbounded denomination length. For example, the token ",(0,a.yg)("inlineCode",{parentName:"p"},"transfer/channelToA/uatom")," will be displayed\nas ",(0,a.yg)("inlineCode",{parentName:"p"},"ibc/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2"),". The human readable denomination\nis stored using ",(0,a.yg)("inlineCode",{parentName:"p"},"x/bank")," module's ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/modules/bank#denom-metadata"},"denom metadata"),"\nfeature. You may display the human readable denominations by querying balances with the ",(0,a.yg)("inlineCode",{parentName:"p"},"--resolve-denom")," flag, as in:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"simd query bank balances [address] --resolve-denom\n")),(0,a.yg)("p",null,'Each send to any chain other than the one it was previously received from is a movement forwards in\nthe token\'s timeline. This causes trace to be added to the token\'s history and the destination port\nand destination channel to be prefixed to the denomination. In these instances the sender chain is\nacting as the "source zone". When the token is sent back to the chain it previously received from, the\nprefix is removed. This is a backwards movement in the token\'s timeline and the sender chain is\nacting as the "sink zone".'),(0,a.yg)("p",null,"It is strongly recommended to read the full details of ",(0,a.yg)("a",{parentName:"p",href:"/ibc-go/architecture/adr-001-coin-source-tracing"},"ADR 001: Coin Source Tracing")," to understand the implications and context of the IBC token representations."),(0,a.yg)("h2",{id:"ux-suggestions-for-clients"},"UX suggestions for clients"),(0,a.yg)("p",null,"For clients (wallets, exchanges, applications, block explorers, etc) that want to display the source of the token, it is recommended to use the following alternatives for each of the cases below:"),(0,a.yg)("h3",{id:"direct-connection"},"Direct connection"),(0,a.yg)("p",null,"If the denomination trace contains a single identifier prefix pair (as in the example above), then\nthe easiest way to retrieve the chain and light client identifier is to map the trace information\ndirectly. In summary, this requires querying the channel from the denomination trace identifiers,\nand then the counterparty client state using the counterparty port and channel identifiers from the\nretrieved channel."),(0,a.yg)("p",null,"A general pseudo algorithm would look like the following:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Query the full denomination trace."),(0,a.yg)("li",{parentName:"ol"},"Query the channel with the ",(0,a.yg)("inlineCode",{parentName:"li"},"portID/channelID")," pair, which corresponds to the first destination of the\ntoken."),(0,a.yg)("li",{parentName:"ol"},"Query the client state using the identifiers pair. Note that this query will return a ",(0,a.yg)("inlineCode",{parentName:"li"},'"Not\nFound"')," response if the current chain is not connected to this channel."),(0,a.yg)("li",{parentName:"ol"},"Retrieve the client identifier or chain identifier from the client state (eg: on\nTendermint clients) and store it locally.")),(0,a.yg)("p",null,"Using the gRPC gateway client service the steps above would be, with a given IBC token ",(0,a.yg)("inlineCode",{parentName:"p"},"ibc/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2")," stored on ",(0,a.yg)("inlineCode",{parentName:"p"},"chainB"),":"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"GET /ibc/apps/transfer/v1/denom_traces/7F1D3FCF4AE79E1554D670D1AD949A9BA4E4A3C76C63093E17E446A46061A7A2")," -> ",(0,a.yg)("inlineCode",{parentName:"li"},'{"path": "transfer/channelToA", "base_denom": "uatom"}')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},'GET /ibc/apps/transfer/v1/channels/channelToA/ports/transfer/client_state"')," -> ",(0,a.yg)("inlineCode",{parentName:"li"},'{"client_id": "clientA", "chain-id": "chainA", ...}')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},'GET /ibc/apps/transfer/v1/channels/channelToA/ports/transfer"')," -> ",(0,a.yg)("inlineCode",{parentName:"li"},'{"channel_id": "channelToA", port_id": "transfer", counterparty: {"channel_id": "channelToB", port_id": "transfer"}, ...}')),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},'GET /ibc/apps/transfer/v1/channels/channelToB/ports/transfer/client_state" -> {"client_id": "clientB", "chain-id": "chainB", ...}'))),(0,a.yg)("p",null,"Then, the token transfer chain path for the ",(0,a.yg)("inlineCode",{parentName:"p"},"uatom")," denomination would be: ",(0,a.yg)("inlineCode",{parentName:"p"},"chainA")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"chainB"),"."),(0,a.yg)("h3",{id:"multiple-hops"},"Multiple hops"),(0,a.yg)("p",null,"The multiple channel hops case applies when the token has passed through multiple chains between the original source and final destination chains."),(0,a.yg)("p",null,"The IBC protocol doesn't know the topology of the overall network (i.e connections between chains and identifier names between them). For this reason, in the multiple hops case, a particular chain in the timeline of the individual transfers can't query the chain and client identifiers of the other chains."),(0,a.yg)("p",null,"Take for example the following sequence of transfers ",(0,a.yg)("inlineCode",{parentName:"p"},"A -> B -> C")," for an IBC token, with a final prefix path (trace info) of ",(0,a.yg)("inlineCode",{parentName:"p"},"transfer/channelChainC/transfer/channelChainB"),". What the paragraph above means is that even in the case that chain ",(0,a.yg)("inlineCode",{parentName:"p"},"C")," is directly connected to chain ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),", querying the port and channel identifiers that chain ",(0,a.yg)("inlineCode",{parentName:"p"},"B")," uses to connect to chain ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," (eg: ",(0,a.yg)("inlineCode",{parentName:"p"},"transfer/channelChainA"),") can be completely different from the one that chain ",(0,a.yg)("inlineCode",{parentName:"p"},"C")," uses to connect to chain ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," (eg: ",(0,a.yg)("inlineCode",{parentName:"p"},"transfer/channelToChainA"),")."),(0,a.yg)("p",null,"Thus the proposed solution for clients that the IBC team recommends are the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Connect to all chains"),": Connecting to all the chains in the timeline would allow clients to\nperform the queries outlined in the ",(0,a.yg)("a",{parentName:"li",href:"#direct-connection"},"direct connection")," section to each\nrelevant chain. By repeatedly following the port and channel denomination trace transfer timeline,\nclients should always be able to find all the relevant identifiers. This comes at the tradeoff\nthat the client must connect to nodes on each of the chains in order to perform the queries."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Relayer as a Service (RaaS)"),": A longer term solution is to use/create a relayer service that\ncould map the denomination trace to the chain path timeline for each token (i.e ",(0,a.yg)("inlineCode",{parentName:"li"},"origin chain ->\nchain #1 -> ... -> chain #(n-1) -> final chain"),"). These services could provide merkle proofs in\norder to allow clients to optionally verify the path timeline correctness for themselves by\nrunning light clients. If the proofs are not verified, they should be considered as trusted third\nparties services. Additionally, client would be advised in the future to use RaaS that support the\nlargest number of connections between chains in the ecosystem. Unfortunately, none of the existing\npublic relayers (in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"Golang")," and\n",(0,a.yg)("a",{parentName:"li",href:"https://github.com/informalsystems/ibc-rs"},"Rust"),"), provide this service to clients.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The only viable alternative for clients (at the time of writing) to tokens with multiple connection hops, is to connect to all chains directly and perform relevant queries to each of them in the sequence.")),(0,a.yg)("h2",{id:"locked-funds"},"Locked funds"),(0,a.yg)("p",null,"In some ",(0,a.yg)("a",{parentName:"p",href:"/ibc-go/architecture/adr-026-ibc-client-recovery-mechanisms#exceptional-cases"},"exceptional cases"),", a client state associated with a given channel cannot be updated. This causes that funds from fungible tokens in that channel will be permanently locked and thus can no longer be transferred."),(0,a.yg)("p",null,"To mitigate this, a client update governance proposal can be submitted to update the frozen client\nwith a new valid header. Once the proposal passes the client state will be unfrozen and the funds\nfrom the associated channels will then be unlocked. This mechanism only applies to clients that\nallow updates via governance, such as Tendermint clients."),(0,a.yg)("p",null,"In addition to this, it's important to mention that a token must be sent back along the exact route\nthat it took originally in order to return it to its original form on the source chain (eg: the\nCosmos Hub for the ",(0,a.yg)("inlineCode",{parentName:"p"},"uatom"),"). Sending a token back to the same chain across a different channel will\n",(0,a.yg)("strong",{parentName:"p"},"not")," move the token back across its timeline. If a channel in the chain history closes before the\ntoken can be sent back across that channel, then the token will not be returnable to its original\nform."),(0,a.yg)("h2",{id:"security-considerations"},"Security considerations"),(0,a.yg)("p",null,"For safety, no other module must be capable of minting tokens with the ",(0,a.yg)("inlineCode",{parentName:"p"},"ibc/")," prefix. The IBC\ntransfer module needs a subset of the denomination space that only it can create tokens in."),(0,a.yg)("h2",{id:"channel-closure"},"Channel Closure"),(0,a.yg)("p",null,"The IBC transfer module does not support channel closure."))}d.isMDXComponent=!0}}]);