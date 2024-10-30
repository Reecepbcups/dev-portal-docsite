"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[84733],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,y=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={},o="ADR 025: IBC Passive Channels",s={unversionedId:"architecture/adr-025-ibc-passive-channels",id:"version-v4.6.x/architecture/adr-025-ibc-passive-channels",title:"ADR 025: IBC Passive Channels",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v4.6.x/architecture/adr-025-ibc-passive-channels.md",sourceDirName:"architecture",slug:"/architecture/adr-025-ibc-passive-channels",permalink:"/ibc-go/v4.6.x/architecture/adr-025-ibc-passive-channels",draft:!1,tags:[],version:"v4.6.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 015: IBC Packet Receiver",permalink:"/ibc-go/v4.6.x/architecture/adr-015-ibc-packet-receiver"},next:{title:"ADR 026: IBC Client Recovery Mechanisms",permalink:"/ibc-go/v4.6.x/architecture/adr-026-ibc-client-recovery-mechanisms"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Handling Channel Open Attempts",id:"handling-channel-open-attempts",level:3},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-025-ibc-passive-channels"},"ADR 025: IBC Passive Channels"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'2021-04-23: Change status to "deprecated"'),(0,a.yg)("li",{parentName:"ul"},"2020-05-23: Provide sample Go code and more details"),(0,a.yg)("li",{parentName:"ul"},"2020-05-18: Initial Draft")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"deprecated")),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,'The current "naive" IBC Relayer strategy currently establishes a single predetermined IBC channel atop a single connection between two clients (each potentially of a different chain).  This strategy then detects packets to be relayed by watching for ',(0,a.yg)("inlineCode",{parentName:"p"},"send_packet")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"recv_packet")," events matching that channel, and sends the necessary transactions to relay those packets."),(0,a.yg)("p",null,'We wish to expand this "naive" strategy to a "passive" one which detects and relays both channel handshake messages and packets on a given connection, without the need to know each channel in advance of relaying it.'),(0,a.yg)("p",null,"In order to accomplish this, we propose adding more comprehensive events to expose channel metadata for each transaction sent from the ",(0,a.yg)("inlineCode",{parentName:"p"},"x/ibc/core/04-channel/keeper/handshake.go")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"x/ibc/core/04-channel/keeper/packet.go")," modules."),(0,a.yg)("p",null,"Here is an example of what would be in ",(0,a.yg)("inlineCode",{parentName:"p"},"ChanOpenInit"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'const (\n  EventTypeChannelMeta = "channel_meta"\n  AttributeKeyAction = "action"\n  AttributeKeyHops = "hops"\n  AttributeKeyOrder = "order"\n  AttributeKeySrcPort = "src_port"\n  AttributeKeySrcChannel = "src_channel"\n  AttributeKeySrcVersion = "src_version"\n  AttributeKeyDstPort = "dst_port"\n  AttributeKeyDstChannel = "dst_channel"\n  AttributeKeyDstVersion = "dst_version"\n)\n// ...\n// Emit Event with Channel metadata for the relayer to pick up and\n// relay to the other chain\n// This appears immediately before the successful return statement.\nctx.EventManager().EmitEvents(sdk.Events{\n  sdk.NewEvent(\n    types.EventTypeChannelMeta,\n    sdk.NewAttribute(types.AttributeKeyAction, "open_init"),\n    sdk.NewAttribute(types.AttributeKeySrcConnection, connectionHops[0]),\n    sdk.NewAttribute(types.AttributeKeyHops, strings.Join(connectionHops, ",")),\n    sdk.NewAttribute(types.AttributeKeyOrder, order.String()),\n    sdk.NewAttribute(types.AttributeKeySrcPort, portID),\n    sdk.NewAttribute(types.AttributeKeySrcChannel, channelID),\n    sdk.NewAttribute(types.AttributeKeySrcVersion, version),\n    sdk.NewAttribute(types.AttributeKeyDstPort, counterparty.GetPortID()),\n    sdk.NewAttribute(types.AttributeKeyDstChannel, counterparty.GetChannelID()),\n    // The destination version is not yet known, but a value is necessary to pad\n    // the event attribute offsets\n    sdk.NewAttribute(types.AttributeKeyDstVersion, ""),\n  ),\n})\n')),(0,a.yg)("p",null,'These metadata events capture all the "header" information needed to route IBC channel handshake transactions without requiring the client to query any data except that of the connection ID that it is willing to relay.  It is intended that ',(0,a.yg)("inlineCode",{parentName:"p"},"channel_meta.src_connection")," is the only event key that needs to be indexed for a passive relayer to function."),(0,a.yg)("h3",{id:"handling-channel-open-attempts"},"Handling Channel Open Attempts"),(0,a.yg)("p",null,"In the case of the passive relayer, when one chain sends a ",(0,a.yg)("inlineCode",{parentName:"p"},"ChanOpenInit"),', the relayer should inform the other chain of this open attempt and allow that chain to decide how (and if) it continues the handshake.  Once both chains have actively approved the channel opening, then the rest of the handshake can happen as it does with the current "naive" relayer.'),(0,a.yg)("p",null,"To implement this behavior, we propose replacing the ",(0,a.yg)("inlineCode",{parentName:"p"},"cbs.OnChanOpenTry")," callback with a new ",(0,a.yg)("inlineCode",{parentName:"p"},"cbs.OnAttemptChanOpenTry")," callback which explicitly handles the ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgChannelOpenTry"),", usually by resulting in a call to ",(0,a.yg)("inlineCode",{parentName:"p"},"keeper.ChanOpenTry"),".  The typical implementation, in ",(0,a.yg)("inlineCode",{parentName:"p"},"x/ibc-transfer/module.go"),' would be compatible with the current "naive" relayer, as follows:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'func (am AppModule) OnAttemptChanOpenTry(\n  ctx sdk.Context,\n  chanKeeper channel.Keeper,\n  portCap *capability.Capability,\n  msg channel.MsgChannelOpenTry,\n) (*sdk.Result, error) {\n  // Require portID is the portID transfer module is bound to\n  boundPort := am.keeper.GetPort(ctx)\n  if boundPort != msg.PortID {\n    return nil, sdkerrors.Wrapf(porttypes.ErrInvalidPort, "invalid port: %s, expected %s", msg.PortID, boundPort)\n  }\n\n  // BEGIN NEW CODE\n  // Assert our protocol version, overriding the relayer\'s suggestion.\n  msg.Version = types.Version\n  // Continue the ChanOpenTry.\n  res, chanCap, err := channel.HandleMsgChannelOpenTry(ctx, chanKeeper, portCap, msg)\n  if err != nil {\n    return nil, err\n  }\n  // END OF NEW CODE\n\n  // ... the rest of the callback is similar to the existing OnChanOpenTry\n  // but uses msg.* directly.\n')),(0,a.yg)("p",null,"Here is how this callback would be used, in the implementation of ",(0,a.yg)("inlineCode",{parentName:"p"},"x/ibc/handler.go"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// ...\ncase channel.MsgChannelOpenTry:\n  // Lookup module by port capability\n  module, portCap, err := k.PortKeeper.LookupModuleByPort(ctx, msg.PortID)\n  if err != nil {\n    return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")\n  }\n  // Retrieve callbacks from router\n  cbs, ok := k.Router.GetRoute(module)\n  if !ok {\n    return nil, sdkerrors.Wrapf(port.ErrInvalidRoute, "route not found to module: %s", module)\n  }\n  // Delegate to the module\'s OnAttemptChanOpenTry.\n  return cbs.OnAttemptChanOpenTry(ctx, k.ChannelKeeper, portCap, msg)\n')),(0,a.yg)("p",null,"The reason we do not have a more structured interaction between ",(0,a.yg)("inlineCode",{parentName:"p"},"x/ibc/handler.go")," and the port's module (to explicitly negotiate versions, etc) is that we do not wish to constrain the app module to have to finish handling the ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgChannelOpenTry")," during this transaction or even this block."),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Expose events to allow "passive" connection relayers.'),(0,a.yg)("li",{parentName:"ul"},"Enable application-initiated channels via such passive relayers."),(0,a.yg)("li",{parentName:"ul"},"Allow port modules to control how to handle open-try messages.")),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("p",null,"Makes channels into a complete\xa0application-level abstraction."),(0,a.yg)("p",null,"Applications have full control over initiating and accepting channels, rather than expecting a relayer to tell them when to do so."),(0,a.yg)("p",null,"A passive relayer does not have to know what kind of channel (version string, ordering constraints, firewalling logic) the application supports.  These are negotiated directly between applications."),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("p",null,"Increased event size for IBC messages."),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("p",null,"More IBC events are exposed."),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Agoric VM's IBC handler currently ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Agoric/agoric-sdk/blob/904b3a0423222a1b32893453e44bbde598473960/packages/cosmic-swingset/lib/ag-solo/vats/ibc.js#L546"},"accommodates ",(0,a.yg)("inlineCode",{parentName:"a"},"attemptChanOpenTry")))))}d.isMDXComponent=!0}}]);