"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[57211],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=i,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(58168),i=(a(96540),a(15680));const r={title:"Interfaces",sidebar_label:"Interfaces",sidebar_position:3,slug:"/middleware/callbacks/interfaces"},o="Interfaces",c={unversionedId:"middleware/callbacks/interfaces",id:"version-v9.0.x/middleware/callbacks/interfaces",title:"Interfaces",description:"The callbacks middleware requires certain interfaces to be implemented by the underlying IBC applications and the secondary application. If you're simply wiring up the callbacks middleware to an existing IBC application stack and a secondary application such as icacontroller and x/wasm, you can skip this section.",source:"@site/ibc-go_versioned_docs/version-v9.0.x/04-middleware/02-callbacks/03-interfaces.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/interfaces",permalink:"/ibc-go/middleware/callbacks/interfaces",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:3,frontMatter:{title:"Interfaces",sidebar_label:"Interfaces",sidebar_position:3,slug:"/middleware/callbacks/interfaces"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/ibc-go/middleware/callbacks/integration"},next:{title:"Events",permalink:"/ibc-go/middleware/callbacks/events"}},s={},l=[{value:"Interfaces for developing the Underlying IBC Application",id:"interfaces-for-developing-the-underlying-ibc-application",level:2},{value:"<code>PacketDataUnmarshaler</code>",id:"packetdataunmarshaler",level:3},{value:"<code>PacketDataProvider</code>",id:"packetdataprovider",level:3},{value:"<code>PacketData</code>",id:"packetdata",level:3},{value:"Interfaces for developing the Secondary Application",id:"interfaces-for-developing-the-secondary-application",level:2},{value:"<code>ContractKeeper</code>",id:"contractkeeper",level:3}],d={toc:l},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"interfaces"},"Interfaces"),(0,i.yg)("p",null,"The callbacks middleware requires certain interfaces to be implemented by the underlying IBC applications and the secondary application. If you're simply wiring up the callbacks middleware to an existing IBC application stack and a secondary application such as ",(0,i.yg)("inlineCode",{parentName:"p"},"icacontroller")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm"),", you can skip this section."),(0,i.yg)("h2",{id:"interfaces-for-developing-the-underlying-ibc-application"},"Interfaces for developing the Underlying IBC Application"),(0,i.yg)("h3",{id:"packetdataunmarshaler"},(0,i.yg)("inlineCode",{parentName:"h3"},"PacketDataUnmarshaler")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// PacketDataUnmarshaler defines an optional interface which allows a middleware to\n// request the packet data to be unmarshaled by the base application.\ntype PacketDataUnmarshaler interface {\n  // UnmarshalPacketData unmarshals the packet data into a concrete type\n  // ctx, portID, channelID are provided as arguments, so that (if needed)\n  // the packet data can be unmarshaled based on the channel version.\n  // The version of the underlying app is also returned.\n  UnmarshalPacketData(ctx sdk.Context, portID, channelID string, bz []byte) (interface{}, string, error)\n}\n")),(0,i.yg)("p",null,"The callbacks middleware ",(0,i.yg)("strong",{parentName:"p"},"requires")," the underlying ibc application to implement the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/05-port/types/module.go#L142-L147"},(0,i.yg)("inlineCode",{parentName:"a"},"PacketDataUnmarshaler"))," interface so that it can unmarshal the packet data bytes into the appropriate packet data type. This allows usage of interface functions implemented by the packet data type. The packet data type is expected to implement the ",(0,i.yg)("inlineCode",{parentName:"p"},"PacketDataProvider")," interface (see section below), which is used to parse the callback data that is currently stored in the packet memo field for ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ica")," packets as a JSON string. See its implementation in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/transfer/ibc_module.go#L303-L313"},(0,i.yg)("inlineCode",{parentName:"a"},"transfer"))," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/27-interchain-accounts/controller/ibc_middleware.go#L258-L268"},(0,i.yg)("inlineCode",{parentName:"a"},"icacontroller"))," modules for reference."),(0,i.yg)("p",null,"If the underlying application is a middleware itself, then it can implement this interface by simply passing the function call to its underlying application. See its implementation in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/29-fee/ibc_middleware.go#L368-L378"},(0,i.yg)("inlineCode",{parentName:"a"},"fee middleware"))," for reference."),(0,i.yg)("h3",{id:"packetdataprovider"},(0,i.yg)("inlineCode",{parentName:"h3"},"PacketDataProvider")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// PacketDataProvider defines an optional interfaces for retrieving custom packet data stored on behalf of another application.\n// An existing problem in the IBC middleware design is the inability for a middleware to define its own packet data type and insert packet sender provided information.\n// A short term solution was introduced into several application's packet data to utilize a memo field to carry this information on behalf of another application.\n// This interfaces standardizes that behaviour. Upon realization of the ability for middleware's to define their own packet data types, this interface will be deprecated and removed with time.\ntype PacketDataProvider interface {\n  // GetCustomPacketData returns the packet data held on behalf of another application.\n  // The name the information is stored under should be provided as the key.\n  // If no custom packet data exists for the key, nil should be returned.\n  GetCustomPacketData(key string) interface{}\n}\n")),(0,i.yg)("p",null,"The callbacks middleware also ",(0,i.yg)("strong",{parentName:"p"},"requires")," the underlying ibc application's packet data type to implement the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/exported/packet.go#L43-L52"},(0,i.yg)("inlineCode",{parentName:"a"},"PacketDataProvider"))," interface. This interface is used to retrieve the callback data from the packet data (using the memo field in the case of ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ica"),"). For example, see its implementation in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/transfer/types/packet.go#L85-L105"},(0,i.yg)("inlineCode",{parentName:"a"},"transfer"))," module."),(0,i.yg)("p",null,"Since middlewares do not have packet types, they do not need to implement this interface."),(0,i.yg)("h3",{id:"packetdata"},(0,i.yg)("inlineCode",{parentName:"h3"},"PacketData")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// PacketData defines an optional interface which an application's packet data structure may implement.\ntype PacketData interface {\n  // GetPacketSender returns the sender address of the packet data.\n  // If the packet sender is unknown or undefined, an empty string should be returned.\n  GetPacketSender(sourcePortID string) string\n}\n")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/exported/packet.go#L36-L41"},(0,i.yg)("inlineCode",{parentName:"a"},"PacketData"))," is an optional interface that can be implemented by the underlying ibc application's packet data type. It is used to retrieve the packet sender address from the packet data. The callbacks middleware uses this interface to retrieve the packet sender address and pass it to the callback function during a source callback. If this interface is not implemented, then the callbacks middleware passes and empty string as the sender address. For example, see its implementation in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/transfer/types/packet.go#L74-L83"},(0,i.yg)("inlineCode",{parentName:"a"},"transfer"))," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/27-interchain-accounts/types/packet.go#L78-L92"},(0,i.yg)("inlineCode",{parentName:"a"},"ica"))," module."),(0,i.yg)("p",null,"This interface was added so that secondary applications can retrieve the packet sender address to perform custom authorization logic if needed."),(0,i.yg)("p",null,"Since middlewares do not have packet types, they do not need to implement this interface."),(0,i.yg)("h2",{id:"interfaces-for-developing-the-secondary-application"},"Interfaces for developing the Secondary Application"),(0,i.yg)("h3",{id:"contractkeeper"},(0,i.yg)("inlineCode",{parentName:"h3"},"ContractKeeper")),(0,i.yg)("p",null,"The callbacks middleware requires the secondary application to implement the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/apps/callbacks/types/expected_keepers.go#L11-L83"},(0,i.yg)("inlineCode",{parentName:"a"},"ContractKeeper"))," interface. The contract keeper will be invoked at each step of the packet lifecycle. When a packet is sent, if callback information is provided, the contract keeper will be invoked via the ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCSendPacketCallback"),". This allows the contract keeper to prevent packet sends when callback information is provided, for example if the sender is unauthorized to perform callbacks on the given information. If the packet send is successful, the contract keeper on the destination (if present) will be invoked when a packet has been received and the acknowledgement is written, this will occur via ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCReceivePacketCallback"),". At the end of the packet lifecycle, when processing acknowledgements or timeouts, the source contract keeper will be invoked either via ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCOnAcknowledgementPacket")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCOnTimeoutPacket"),". Once a packet has been sent, each step of the packet lifecycle can be processed given that a relayer sets the gas limit to be more than or equal to the required ",(0,i.yg)("inlineCode",{parentName:"p"},"CommitGasLimit"),". State changes performed in the callback will only be committed upon successful execution."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// ContractKeeper defines the entry points exposed to the VM module which invokes a smart contract\ntype ContractKeeper interface {\n    // IBCSendPacketCallback is called in the source chain when a PacketSend is executed. The\n    // packetSenderAddress is determined by the underlying module, and may be empty if the sender is\n    // unknown or undefined. The contract is expected to handle the callback within the user defined\n    // gas limit, and handle any errors, or panics gracefully.\n    // This entry point is called with a cached context. If an error is returned, then the changes in\n    // this context will not be persisted, and the error will be propagated to the underlying IBC\n    // application, resulting in a packet send failure.\n    //\n    // Implementations are provided with the packetSenderAddress and MAY choose to use this to perform\n    // validation on the origin of a given packet. It is recommended to perform the same validation\n    // on all source chain callbacks (SendPacket, AcknowledgementPacket, TimeoutPacket). This\n    // defensively guards against exploits due to incorrectly wired SendPacket ordering in IBC stacks.\n    //\n    // The version provided is the base application version for the given packet send. This allows\n    // contracts to determine how to unmarshal the packetData.\n    IBCSendPacketCallback(\n        cachedCtx sdk.Context,\n        sourcePort string,\n        sourceChannel string,\n        timeoutHeight clienttypes.Height,\n        timeoutTimestamp uint64,\n        packetData []byte,\n        contractAddress,\n        packetSenderAddress string,\n        version string,\n    ) error\n    // IBCOnAcknowledgementPacketCallback is called in the source chain when a packet acknowledgement\n    // is received. The packetSenderAddress is determined by the underlying module, and may be empty if\n    // the sender is unknown or undefined. The contract is expected to handle the callback within the\n    // user defined gas limit, and handle any errors, or panics gracefully.\n    // This entry point is called with a cached context. If an error is returned, then the changes in\n    // this context will not be persisted, but the packet lifecycle will not be blocked.\n    //\n    // Implementations are provided with the packetSenderAddress and MAY choose to use this to perform\n    // validation on the origin of a given packet. It is recommended to perform the same validation\n    // on all source chain callbacks (SendPacket, AcknowledgementPacket, TimeoutPacket). This\n    // defensively guards against exploits due to incorrectly wired SendPacket ordering in IBC stacks.\n    //\n    // The version provided is the base application version for the given packet send. This allows\n    // contracts to determine how to unmarshal the packetData.\n    IBCOnAcknowledgementPacketCallback(\n        cachedCtx sdk.Context,\n        packet channeltypes.Packet,\n        acknowledgement []byte,\n        relayer sdk.AccAddress,\n        contractAddress,\n        packetSenderAddress string,\n        version string,\n    ) error\n    // IBCOnTimeoutPacketCallback is called in the source chain when a packet is not received before\n    // the timeout height. The packetSenderAddress is determined by the underlying module, and may be\n    // empty if the sender is unknown or undefined. The contract is expected to handle the callback\n    // within the user defined gas limit, and handle any error, out of gas, or panics gracefully.\n    // This entry point is called with a cached context. If an error is returned, then the changes in\n    // this context will not be persisted, but the packet lifecycle will not be blocked.\n    //\n    // Implementations are provided with the packetSenderAddress and MAY choose to use this to perform\n    // validation on the origin of a given packet. It is recommended to perform the same validation\n    // on all source chain callbacks (SendPacket, AcknowledgementPacket, TimeoutPacket). This\n    // defensively guards against exploits due to incorrectly wired SendPacket ordering in IBC stacks.\n    //\n    // The version provided is the base application version for the given packet send. This allows\n    // contracts to determine how to unmarshal the packetData.\n    IBCOnTimeoutPacketCallback(\n        cachedCtx sdk.Context,\n        packet channeltypes.Packet,\n        relayer sdk.AccAddress,\n        contractAddress,\n        packetSenderAddress string,\n        version string,\n    ) error\n    // IBCReceivePacketCallback is called in the destination chain when a packet acknowledgement is written.\n    // The contract is expected to handle the callback within the user defined gas limit, and handle any errors,\n    // out of gas, or panics gracefully.\n    // This entry point is called with a cached context. If an error is returned, then the changes in\n    // this context will not be persisted, but the packet lifecycle will not be blocked.\n    //\n    // The version provided is the base application version for the given packet send. This allows\n    // contracts to determine how to unmarshal the packetData.\n    IBCReceivePacketCallback(\n        cachedCtx sdk.Context,\n        packet ibcexported.PacketI,\n        ack ibcexported.Acknowledgement,\n        contractAddress string,\n        version string,\n    ) error\n}\n")),(0,i.yg)("p",null,"These are the callback entry points exposed to the secondary application. The secondary application is expected to execute its custom logic within these entry points. The callbacks middleware will handle the execution of these callbacks and revert the state if needed."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Note that the source callback entry points are provided with the ",(0,i.yg)("inlineCode",{parentName:"p"},"packetSenderAddress")," and MAY choose to use this to perform validation on the origin of a given packet. It is recommended to perform the same validation on all source chain callbacks (SendPacket, AcknowledgePacket, TimeoutPacket). This defensively guards against exploits due to incorrectly wired SendPacket ordering in IBC stacks.")))}h.isMDXComponent=!0}}]);