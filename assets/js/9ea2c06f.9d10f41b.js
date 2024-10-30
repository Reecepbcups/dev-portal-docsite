"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[89341],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>h});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,r(r({ref:t},l),{},{components:a})):n.createElement(h,r({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const i={title:"Define packets and acks",sidebar_label:"Define packets and acks",sidebar_position:5,slug:"/ibc/apps/packets_acks"},r="Define packets and acks",c={unversionedId:"ibc/apps/packets_acks",id:"version-v7.8.x/ibc/apps/packets_acks",title:"Define packets and acks",description:"Learn how to define custom packet and acknowledgement structs and how to encode and decode them.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/01-ibc/03-apps/05-packets_acks.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/packets_acks",permalink:"/ibc-go/v7.8.x/ibc/apps/packets_acks",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:5,frontMatter:{title:"Define packets and acks",sidebar_label:"Define packets and acks",sidebar_position:5,slug:"/ibc/apps/packets_acks"},sidebar:"defaultSidebar",previous:{title:"Keeper",permalink:"/ibc-go/v7.8.x/ibc/apps/keeper"},next:{title:"Routing",permalink:"/ibc-go/v7.8.x/ibc/apps/routing"}},s={},p=[{value:"Custom packets",id:"custom-packets",level:2},{value:"Optional interfaces",id:"optional-interfaces",level:3},{value:"PacketData interface",id:"packetdata-interface",level:4},{value:"PacketDataProvider interface",id:"packetdataprovider-interface",level:4},{value:"Acknowledgements",id:"acknowledgements",level:2}],l={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"define-packets-and-acks"},"Define packets and acks"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Learn how to define custom packet and acknowledgement structs and how to encode and decode them. ")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("h2",{parentName:"admonition",id:"pre-requisites-readings"},"Pre-requisites Readings"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/overview"},"IBC Overview"),")"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/integration"},"IBC default integration")))),(0,o.yg)("h2",{id:"custom-packets"},"Custom packets"),(0,o.yg)("p",null,"Modules connected by a channel must agree on what application data they are sending over the\nchannel, as well as how they will encode/decode it. This process is not specified by IBC as it is up\nto each application module to determine how to implement this agreement. However, for most\napplications this will happen as a version negotiation during the channel handshake. While more\ncomplex version negotiation is possible to implement inside the channel opening handshake, a very\nsimple version negotiation is implemented in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/transfer/module.go"},"ibc-transfer module"),"."),(0,o.yg)("p",null,"Thus, a module must define its custom packet data structure, along with a well-defined way to\nencode and decode it to and from ",(0,o.yg)("inlineCode",{parentName:"p"},"[]byte"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Custom packet data defined in application module\ntype CustomPacketData struct {\n    // Custom fields ...\n}\n\nEncodePacketData(packetData CustomPacketData) []byte {\n    // encode packetData to bytes\n}\n\nDecodePacketData(encoded []byte) (CustomPacketData) {\n    // decode from bytes to packet data\n}\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note that the ",(0,o.yg)("inlineCode",{parentName:"p"},"CustomPacketData")," struct is defined in the proto definition and then compiled by the protobuf compiler.")),(0,o.yg)("p",null,"Then a module must encode its packet data before sending it through IBC."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// retrieve the dynamic capability for this channel\nchannelCap := scopedKeeper.GetCapability(ctx, channelCapName)\n// Sending custom application packet data\ndata := EncodePacketData(customPacketData)\n// Send packet to IBC, authenticating with channelCap\nsequence, err := IBCChannelKeeper.SendPacket(\n    ctx, \n    channelCap, \n    sourcePort, \n    sourceChannel, \n    timeoutHeight, \n    timeoutTimestamp, \n    data,\n)\n")),(0,o.yg)("p",null,"A module receiving a packet must decode the ",(0,o.yg)("inlineCode",{parentName:"p"},"PacketData")," into a structure it expects so that it can\nact on it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Receiving custom application packet data (in OnRecvPacket)\npacketData := DecodePacketData(packet.Data)\n// handle received custom packet data\n")),(0,o.yg)("h3",{id:"optional-interfaces"},"Optional interfaces"),(0,o.yg)("p",null,"The following interfaces are optional and MAY be implemented by a custom packet type.\nThey allow middlewares such as callbacks to access information stored within the packet data. "),(0,o.yg)("h4",{id:"packetdata-interface"},"PacketData interface"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"PacketData")," interface is defined as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// PacketData defines an optional interface which an application's packet data structure may implement.\ntype PacketData interface {\n    // GetPacketSender returns the sender address of the packet data.\n    // If the packet sender is unknown or undefined, an empty string should be returned.\n    GetPacketSender(sourcePortID string) string\n}\n")),(0,o.yg)("p",null,"The implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"GetPacketSender")," should return the sender of the packet data.\nIf the packet sender is unknown or undefined, an empty string should be returned."),(0,o.yg)("p",null,"This interface is intended to give IBC middlewares access to the packet sender of a packet data type. "),(0,o.yg)("h4",{id:"packetdataprovider-interface"},"PacketDataProvider interface"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"PacketDataProvider")," interface is defined as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// PacketDataProvider defines an optional interfaces for retrieving custom packet data stored on behalf of another application.\n// An existing problem in the IBC middleware design is the inability for a middleware to define its own packet data type and insert packet sender provided information.\n// A short term solution was introduced into several application's packet data to utilize a memo field to carry this information on behalf of another application.\n// This interfaces standardizes that behaviour. Upon realization of the ability for middleware's to define their own packet data types, this interface will be deprecated and removed with time.\ntype PacketDataProvider interface {\n    // GetCustomPacketData returns the packet data held on behalf of another application.\n    // The name the information is stored under should be provided as the key.\n    // If no custom packet data exists for the key, nil should be returned.\n    GetCustomPacketData(key string) interface{}\n}\n")),(0,o.yg)("p",null,"The implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"GetCustomPacketData")," should return packet data held on behalf of another application (if present and supported).\nIf this functionality is not supported, it should return nil. Otherwise it should return the packet data associated with the provided key. "),(0,o.yg)("p",null,"This interface gives IBC applications access to the packet data information embedded into the base packet data type.\nWithin transfer and interchain accounts, the embedded packet data is stored within the Memo field. "),(0,o.yg)("p",null,"Once all IBC applications within an IBC stack are capable of creating/maintaining their own packet data type's, this interface function will be deprecated and removed. "),(0,o.yg)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.yg)("p",null,"Modules may commit an acknowledgement upon receiving and processing a packet in the case of synchronous packet processing.\nIn the case where a packet is processed at some later point after the packet has been received (asynchronous execution), the acknowledgement\nwill be written once the packet has been processed by the application which may be well after the packet receipt."),(0,o.yg)("p",null,"NOTE: Most blockchain modules will want to use the synchronous execution model in which the module processes and writes the acknowledgement\nfor a packet as soon as it has been received from the IBC module."),(0,o.yg)("p",null,"This acknowledgement can then be relayed back to the original sender chain, which can take action\ndepending on the contents of the acknowledgement."),(0,o.yg)("p",null,"Just as packet data was opaque to IBC, acknowledgements are similarly opaque. Modules must pass and\nreceive acknowledegments with the IBC modules as byte strings."),(0,o.yg)("p",null,"Thus, modules must agree on how to encode/decode acknowledgements. The process of creating an\nacknowledgement struct along with encoding and decoding it, is very similar to the packet data\nexample above. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope"},"ICS 04"),"\nspecifies a recommended format for acknowledgements. This acknowledgement type can be imported from\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/04-channel/types"},"channel types"),"."),(0,o.yg)("p",null,"While modules may choose arbitrary acknowledgement structs, a default acknowledgement types is provided by IBC ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/channel/v1/channel.proto"},"here"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// Acknowledgement is the recommended acknowledgement format to be used by\n// app-specific protocols.\n// NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental\n// conflicts with other protobuf message formats used for acknowledgements.\n// The first byte of any message with this format will be the non-ASCII values\n// `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:\n// https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope\nmessage Acknowledgement {\n  // response contains either a result or an error and must be non-empty\n  oneof response {\n    bytes  result = 21;\n    string error  = 22;\n  }\n}\n")))}m.isMDXComponent=!0}}]);