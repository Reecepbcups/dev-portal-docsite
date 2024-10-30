"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[95237],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=i,u=c["".concat(p,".").concat(h)]||c[h]||g[h]||r;return a?t.createElement(u,o(o({ref:n},d),{},{components:a})):t.createElement(u,o({ref:n},d))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93494:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=a(58168),i=(a(96540),a(15680));const r={title:"Channel Upgrades",sidebar_label:"Channel Upgrades",sidebar_position:6,slug:"/ibc/channel-upgrades"},o="Channel Upgrades",l={unversionedId:"ibc/channel-upgrades",id:"version-v9.0.x/ibc/channel-upgrades",title:"Channel Upgrades",description:"Learn how to upgrade existing IBC channels.",source:"@site/ibc-go_versioned_docs/version-v9.0.x/01-ibc/06-channel-upgrades.md",sourceDirName:"01-ibc",slug:"/ibc/channel-upgrades",permalink:"/ibc-go/ibc/channel-upgrades",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:6,frontMatter:{title:"Channel Upgrades",sidebar_label:"Channel Upgrades",sidebar_position:6,slug:"/ibc/channel-upgrades"},sidebar:"defaultSidebar",previous:{title:"Genesis Restart Upgrades",permalink:"/ibc-go/ibc/upgrades/genesis-restart"},next:{title:"Governance Proposals",permalink:"/ibc-go/ibc/proposals"}},p={},s=[{value:"Channel Upgrade Handshake",id:"channel-upgrade-handshake",level:2},{value:"Initializing a Channel Upgrade",id:"initializing-a-channel-upgrade",level:2},{value:"Governance gating on <code>ChanUpgradeInit</code>",id:"governance-gating-on-chanupgradeinit",level:3},{value:"Channel State and Packet Flushing",id:"channel-state-and-packet-flushing",level:2},{value:"Cancelling a Channel Upgrade",id:"cancelling-a-channel-upgrade",level:2},{value:"Timing Out a Channel Upgrade",id:"timing-out-a-channel-upgrade",level:2},{value:"Pruning Acknowledgements",id:"pruning-acknowledgements",level:2},{value:"CLI Usage",id:"cli-usage",level:3},{value:"IBC App Recommendations",id:"ibc-app-recommendations",level:2},{value:"Upgrade an existing transfer application stack to use 29-fee middleware",id:"upgrade-an-existing-transfer-application-stack-to-use-29-fee-middleware",level:2},{value:"Wire up the transfer stack and middleware in app.go",id:"wire-up-the-transfer-stack-and-middleware-in-appgo",level:3},{value:"Submit a governance proposal to execute a MsgChannelUpgradeInit message",id:"submit-a-governance-proposal-to-execute-a-msgchannelupgradeinit-message",level:3},{value:"Submit the proposal",id:"submit-the-proposal",level:3},{value:"Upgrading channels with the CLI",id:"upgrading-channels-with-the-cli",level:2}],d={toc:s},c="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"channel-upgrades"},"Channel Upgrades"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Learn how to upgrade existing IBC channels.")),(0,i.yg)("p",null,"Channel upgradability is an IBC-level protocol that allows chains to leverage new application and channel features without having to create new channels or perform a network-wide upgrade. "),(0,i.yg)("p",null,"Prior to this feature, developers who wanted to update an application module or add a middleware to their application flow would need to create a new channel in order to use the updated application feature/middleware, resulting in a loss of the accumulated state/liquidity, token fungibility (as the channel ID is encoded in the IBC denom), and any other larger network effects of losing usage of the existing channel from relayers monitoring, etc."),(0,i.yg)("p",null,"With channel upgradability, applications will be able to implement features such as but not limited to: potentially adding ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/discussions/719"},"denom metadata to tokens"),", or utilizing the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/app/ics-029-fee-payment"},"fee middleware"),", all while maintaining the channels on which they currently operate."),(0,i.yg)("p",null,"This document outlines the channel upgrade feature, and the multiple steps used in the upgrade process."),(0,i.yg)("h2",{id:"channel-upgrade-handshake"},"Channel Upgrade Handshake"),(0,i.yg)("p",null,"Channel upgrades will be achieved using a handshake process that is designed to be similar to the standard connection/channel opening handshake."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'type Channel struct {\n  // current state of the channel end\n  State State `protobuf:"varint,1,opt,name=state,proto3,enum=ibc.core.channel.v1.State" json:"state,omitempty"`\n  // whether the channel is ordered or unordered\n  Ordering Order `protobuf:"varint,2,opt,name=ordering,proto3,enum=ibc.core.channel.v1.Order" json:"ordering,omitempty"`\n  // counterparty channel end\n  Counterparty Counterparty `protobuf:"bytes,3,opt,name=counterparty,proto3" json:"counterparty"`\n  // list of connection identifiers, in order, along which packets sent on\n  // this channel will travel\n  ConnectionHops []string `protobuf:"bytes,4,rep,name=connection_hops,json=connectionHops,proto3" json:"connection_hops,omitempty"`\n  // opaque channel version, which is agreed upon during the handshake\n  Version string `protobuf:"bytes,5,opt,name=version,proto3" json:"version,omitempty"`\n  // upgrade sequence indicates the latest upgrade attempt performed by this channel\n  // the value of 0 indicates the channel has never been upgraded\n  UpgradeSequence uint64 `protobuf:"varint,6,opt,name=upgrade_sequence,json=upgradeSequence,proto3" json:"upgrade_sequence,omitempty"`\n}\n')),(0,i.yg)("p",null,"The version, connection hops, and channel ordering are fields in this channel struct which can be changed. For example, the fee middleware can be added to an application module by updating the version string ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v8.1.0/modules/apps/29-fee/types/metadata.pb.go#L29"},"shown here"),". However, although connection hops can change in a channel upgrade, both sides must still be each other's counterparty. This is enforced by the upgrade protocol and upgrade attempts which try to alter an expected counterparty will fail."),(0,i.yg)("p",null,"On a high level, successful handshake process for channel upgrades works as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The chain initiating the upgrade process will propose an upgrade."),(0,i.yg)("li",{parentName:"ol"},"If the counterparty agrees with the proposal, it will block sends and begin flushing any in-flight packets on its channel end. This flushing process will be covered in more detail below."),(0,i.yg)("li",{parentName:"ol"},"Upon successful completion of the previous step, the initiating chain will also block packet sends and begin flushing any in-flight packets on its channel end. "),(0,i.yg)("li",{parentName:"ol"},"Once both channel ends have completed flushing packets within the upgrade timeout window, both channel ends can be opened and upgraded to the new channel fields. ")),(0,i.yg)("p",null,"Each handshake step will be documented below in greater detail."),(0,i.yg)("h2",{id:"initializing-a-channel-upgrade"},"Initializing a Channel Upgrade"),(0,i.yg)("p",null,"A channel upgrade is initialised by submitting the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit")," message, which can be submitted only by the chain itself upon governance authorization. It is possible to upgrade the channel ordering, the channel connection hops, and the channel version, which can be found in the ",(0,i.yg)("inlineCode",{parentName:"p"},"UpgradeFields"),". "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type MsgChannelUpgradeInit struct {\n  PortId    string\n  ChannelId string\n  Fields    UpgradeFields\n  Signer    string\n}\n")),(0,i.yg)("p",null,"As part of the handling of the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit")," message, the application's ",(0,i.yg)("inlineCode",{parentName:"p"},"OnChanUpgradeInit")," callback will be triggered as well."),(0,i.yg)("p",null,"After this message is handled successfully, the channel's upgrade sequence will be incremented. This upgrade sequence will serve as a nonce for the upgrade process to provide replay protection."),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Initiating an upgrade in the same block as opening a channel may potentially prevent the counterparty channel from also opening. ")),(0,i.yg)("h3",{id:"governance-gating-on-chanupgradeinit"},"Governance gating on ",(0,i.yg)("inlineCode",{parentName:"h3"},"ChanUpgradeInit")),(0,i.yg)("p",null,"The message signer for ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit")," must be the address which has been designated as the ",(0,i.yg)("inlineCode",{parentName:"p"},"authority")," of the ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCKeeper"),". If this proposal passes, the counterparty's channel will upgrade by default."),(0,i.yg)("p",null,"If chains want to initiate the upgrade of many channels, they will need to submit a governance proposal with multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit"),"  messages, one for each channel they would like to upgrade, again with message signer as the designated ",(0,i.yg)("inlineCode",{parentName:"p"},"authority")," of the ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCKeeper"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"upgrade-channels")," CLI command can be used to submit a proposal that initiates the upgrade of multiple channels; see section ",(0,i.yg)("a",{parentName:"p",href:"#upgrading-channels-with-the-cli"},"Upgrading channels with the CLI")," below for more information."),(0,i.yg)("h2",{id:"channel-state-and-packet-flushing"},"Channel State and Packet Flushing"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE")," are additional channel states which have been added to enable the upgrade feature."),(0,i.yg)("p",null,"These states may consist of: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"const (\n  // Default State\n  UNINITIALIZED State = 0\n  // A channel has just started the opening handshake.\n  INIT State = 1\n  // A channel has acknowledged the handshake step on the counterparty chain.\n  TRYOPEN State = 2\n  // A channel has completed the handshake. Open channels are\n  // ready to send and receive packets.\n  OPEN State = 3\n  // A channel has been closed and can no longer be used to send or receive\n  // packets.\n  CLOSED State = 4\n  // A channel has just accepted the upgrade handshake attempt and is flushing in-flight packets.\n  FLUSHING State = 5\n  // A channel has just completed flushing any in-flight packets.\n  FLUSHCOMPLETE State = 6\n)\n")),(0,i.yg)("p",null,"These are found in ",(0,i.yg)("inlineCode",{parentName:"p"},"State")," on the ",(0,i.yg)("inlineCode",{parentName:"p"},"Channel")," struct:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'type Channel struct {\n  // current state of the channel end\n  State State `protobuf:"varint,1,opt,name=state,proto3,enum=ibc.core.channel.v1.State" json:"state,omitempty"`\n  // whether the channel is ordered or unordered\n  Ordering Order `protobuf:"varint,2,opt,name=ordering,proto3,enum=ibc.core.channel.v1.Order" json:"ordering,omitempty"`\n  // counterparty channel end\n  Counterparty Counterparty `protobuf:"bytes,3,opt,name=counterparty,proto3" json:"counterparty"`\n  // list of connection identifiers, in order, along which packets sent on\n  // this channel will travel\n  ConnectionHops []string `protobuf:"bytes,4,rep,name=connection_hops,json=connectionHops,proto3" json:"connection_hops,omitempty"`\n  // opaque channel version, which is agreed upon during the handshake\n  Version string `protobuf:"bytes,5,opt,name=version,proto3" json:"version,omitempty"`\n  // upgrade sequence indicates the latest upgrade attempt performed by this channel\n  // the value of 0 indicates the channel has never been upgraded\n  UpgradeSequence uint64 `protobuf:"varint,6,opt,name=upgrade_sequence,json=upgradeSequence,proto3" json:"upgrade_sequence,omitempty"`\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"startFlushing")," is the specific method which is called in ",(0,i.yg)("inlineCode",{parentName:"p"},"ChanUpgradeTry")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ChanUpgradeAck")," to update the state on the channel end. This will set the timeout on the upgrade and update the channel state to ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING")," which will block the upgrade from continuing until all in-flight packets have been flushed. "),(0,i.yg)("p",null,"This will also set the upgrade timeout for the counterparty (i.e. the timeout before which the counterparty chain must move from ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE"),"; if it doesn't then the chain will cancel the upgrade and write an error receipt). The timeout is a relative time duration in nanoseconds that can be changed with ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgUpdateParams")," and by default is 10 minutes."),(0,i.yg)("p",null,"The state will change to ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE")," once there are no in-flight packets left and the channel end is ready to move to ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN"),". This flush state will also have an impact on how a channel upgrade can be cancelled, as detailed below."),(0,i.yg)("p",null,"All other parameters will remain the same during the upgrade handshake until the upgrade handshake completes. When the channel is reset to ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN")," on a successful upgrade handshake, the relevant fields on the channel end will be switched over to the ",(0,i.yg)("inlineCode",{parentName:"p"},"UpgradeFields")," specified in the upgrade."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"When transitioning a channel from UNORDERED to ORDERED, new packet sends from the channel end which upgrades first will be incapable of being timed out until the counterparty has finished upgrading. ")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Due to the addition of new channel states, packets can still be received and processed in both ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE")," states.\nPackets can also be acknowledged in the ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING")," state. Acknowledging will ",(0,i.yg)("strong",{parentName:"p"},"not")," be possible when the channel is in the ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE")," state, since all packets sent from that channel end have been flushed.\nApplication developers should consider these new states when implementing application logic that relies on the channel state.\nIt is still only possible to send packets when the channel is in the ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN")," state, but sending is disallowed when the channel enters ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE"),". When the channel reopens, sending will be possible again.")),(0,i.yg)("h2",{id:"cancelling-a-channel-upgrade"},"Cancelling a Channel Upgrade"),(0,i.yg)("p",null,"Channel upgrade cancellation is performed by submitting a ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeCancel")," message."),(0,i.yg)("p",null,"It is possible for the authority to cancel an in-progress channel upgrade if the following are true:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The signer is the authority"),(0,i.yg)("li",{parentName:"ul"},"The channel state has not reached FLUSHCOMPLETE"),(0,i.yg)("li",{parentName:"ul"},"If the channel state has reached FLUSHCOMPLETE, an existence proof of an ",(0,i.yg)("inlineCode",{parentName:"li"},"ErrorReceipt")," on the counterparty chain is provided at our upgrade sequence or greater")),(0,i.yg)("p",null,"It is possible for a relayer to cancel an in-progress channel upgrade if the following are true:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"An existence proof of an ",(0,i.yg)("inlineCode",{parentName:"li"},"ErrorReceipt")," on the counterparty chain is provided at our upgrade sequence or greater")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: if the signer is the authority, e.g. the ",(0,i.yg)("inlineCode",{parentName:"p"},"gov")," address, no ",(0,i.yg)("inlineCode",{parentName:"p"},"ErrorReceipt")," or proof is required if the current channel state is not in FLUSHCOMPLETE.\nThese can be left empty in the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeCancel")," message in that case.")),(0,i.yg)("p",null,"Upon cancelling a channel upgrade, an ",(0,i.yg)("inlineCode",{parentName:"p"},"ErrorReceipt")," will be written with the channel's current upgrade sequence, and\nthe channel will move back to ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN")," state keeping its original parameters."),(0,i.yg)("p",null,"It will then be possible to re-initiate an upgrade by sending a ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelOpenInit")," message."),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Performing sequentially an upgrade cancellation, upgrade initialization, and another upgrade cancellation in a single block while the counterparty is in ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE")," will lead to corrupted state.\nThe counterparty will be unable to cancel its upgrade attempt and will require a manual migration.\nWhen the counterparty is in ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHCOMPLETE"),", it requires a proof that the counterparty cancelled its current upgrade attempt.\nWhen this cancellation is succeeded by an initialization and cancellation in the same block, it results in the proof of cancellation existing only for the next upgrade attempt, not the current. ")),(0,i.yg)("h2",{id:"timing-out-a-channel-upgrade"},"Timing Out a Channel Upgrade"),(0,i.yg)("p",null,"Timing out an outstanding channel upgrade may be necessary during the flushing packet stage of the channel upgrade process. As stated above, with ",(0,i.yg)("inlineCode",{parentName:"p"},"ChanUpgradeTry")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"ChanUpgradeAck"),", the channel state has been changed from ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"FLUSHING"),", so no new packets will be allowed to be sent over this channel while flushing. If upgrades cannot be performed in a timely manner (due to unforeseen flushing issues), upgrade timeouts allow the channel to avoid blocking packet sends indefinitely. If flushing exceeds the time limit set in the ",(0,i.yg)("inlineCode",{parentName:"p"},"UpgradeTimeout")," channel ",(0,i.yg)("inlineCode",{parentName:"p"},"Params"),", the upgrade process will need to be timed out to abort the upgrade attempt and resume normal channel processing."),(0,i.yg)("p",null,"Channel upgrades require setting a valid timeout value in the channel ",(0,i.yg)("inlineCode",{parentName:"p"},"Params")," before submitting a ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeTry")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeAck")," message (by default, 10 minutes): "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Params struct {\n  UpgradeTimeout Timeout \n}\n")),(0,i.yg)("p",null,"A valid Timeout contains either one or both of a timestamp and block height (sequence)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Timeout struct {\n  // block height after which the packet or upgrade times out\n  Height types.Height\n  // block timestamp (in nanoseconds) after which the packet or upgrade times out\n  Timestamp uint64\n}\n")),(0,i.yg)("p",null,"This timeout will then be set as a field on the ",(0,i.yg)("inlineCode",{parentName:"p"},"Upgrade")," struct itself when flushing is started."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Upgrade struct {\n  Fields           UpgradeFields \n  Timeout          Timeout       \n  NextSequenceSend uint64        \n}\n")),(0,i.yg)("p",null,"If the timeout has been exceeded during flushing, a chain can then submit the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeTimeout")," to timeout the channel upgrade process:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type MsgChannelUpgradeTimeout struct {\n  PortId              string    \n  ChannelId           string\n  CounterpartyChannel Channel \n  ProofChannel        []byte\n  ProofHeight         types.Height\n  Signer              string \n}\n")),(0,i.yg)("p",null,"An ",(0,i.yg)("inlineCode",{parentName:"p"},"ErrorReceipt")," will be written with the channel's current upgrade sequence, and the channel will move back to ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN")," state keeping its original parameters."),(0,i.yg)("p",null,"Note that timing out a channel upgrade will end the upgrade process, and a new ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit")," will have to be submitted via governance in order to restart the upgrade process."),(0,i.yg)("h2",{id:"pruning-acknowledgements"},"Pruning Acknowledgements"),(0,i.yg)("p",null,"Acknowledgements can be pruned by broadcasting the ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgPruneAcknowledgements")," message."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: It is only possible to prune acknowledgements after a channel has been upgraded, so pruning will fail\nif the channel has not yet been upgraded.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},'// MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc.\nmessage MsgPruneAcknowledgements {\n  option (cosmos.msg.v1.signer)      = "signer";\n  option (gogoproto.goproto_getters) = false;\n\n  string port_id    = 1;\n  string channel_id = 2;\n  uint64 limit      = 3;\n  string signer     = 4;\n}\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"port_id")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"channel_id")," specify the port and channel to act on, and the ",(0,i.yg)("inlineCode",{parentName:"p"},"limit")," specifies the upper bound for the number\nof acknowledgements and packet receipts to prune."),(0,i.yg)("h3",{id:"cli-usage"},"CLI Usage"),(0,i.yg)("p",null,"Acknowledgements can be pruned via the cli with the ",(0,i.yg)("inlineCode",{parentName:"p"},"prune-acknowledgements")," command."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx ibc channel prune-acknowledgements [port] [channel] [limit]\n")),(0,i.yg)("h2",{id:"ibc-app-recommendations"},"IBC App Recommendations"),(0,i.yg)("p",null,"IBC application callbacks should be primarily used to validate data fields and do compatibility checks. Application developers\nshould be aware that callbacks will be invoked before any core ibc state changes are written."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"OnChanUpgradeInit")," should validate the proposed version, order, and connection hops, and should return the application version to upgrade to."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"OnChanUpgradeTry")," should validate the proposed version (provided by the counterparty), order, and connection hops. The desired upgrade version should be returned."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"OnChanUpgradeAck")," should validate the version proposed by the counterparty."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"OnChanUpgradeOpen")," should perform any logic associated with changing of the channel fields."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"IBC applications should not attempt to process any packet data under the new conditions until after ",(0,i.yg)("inlineCode",{parentName:"p"},"OnChanUpgradeOpen"),"\nhas been executed, as up until this point it is still possible for the upgrade handshake to fail and for the channel\nto remain in the pre-upgraded state. ")),(0,i.yg)("h2",{id:"upgrade-an-existing-transfer-application-stack-to-use-29-fee-middleware"},"Upgrade an existing transfer application stack to use 29-fee middleware"),(0,i.yg)("h3",{id:"wire-up-the-transfer-stack-and-middleware-in-appgo"},"Wire up the transfer stack and middleware in app.go"),(0,i.yg)("p",null,"In app.go, the existing transfer stack must be wrapped with the fee middleware."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-golang"},'\nimport (\n  // ... \n  ibcfee "github.com/cosmos/ibc-go/v9/modules/apps/29-fee"\n  ibctransferkeeper "github.com/cosmos/ibc-go/v9/modules/apps/transfer/keeper"\n  transfer "github.com/cosmos/ibc-go/v9/modules/apps/transfer"\n  porttypes "github.com/cosmos/ibc-go/v9/modules/core/05-port/types"\n  // ...\n)\n\ntype App struct {\n  // ...\n  TransferKeeper        ibctransferkeeper.Keeper\n  IBCFeeKeeper          ibcfeekeeper.Keeper\n  // ..\n}\n\n// ...\n\napp.IBCFeeKeeper = ibcfeekeeper.NewKeeper(\n  appCodec, keys[ibcfeetypes.StoreKey],\n  app.IBCKeeper.ChannelKeeper, // may be replaced with IBC middleware\n  app.IBCKeeper.ChannelKeeper,\n  app.IBCKeeper.PortKeeper, app.AccountKeeper, app.BankKeeper,\n)\n\n// Create Transfer Keeper and pass IBCFeeKeeper as expected Channel and PortKeeper\n// since fee middleware will wrap the IBCKeeper for underlying application.\napp.TransferKeeper = ibctransferkeeper.NewKeeper(\n  appCodec, keys[ibctransfertypes.StoreKey], app.GetSubspace(ibctransfertypes.ModuleName),\n  app.IBCFeeKeeper, // ISC4 Wrapper: fee IBC middleware\n  app.IBCKeeper.ChannelKeeper, app.IBCKeeper.PortKeeper,\n  app.AccountKeeper, app.BankKeeper, scopedTransferKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n)\n\n\nibcRouter := porttypes.NewRouter()\n\n// create IBC module from bottom to top of stack\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n')),(0,i.yg)("h3",{id:"submit-a-governance-proposal-to-execute-a-msgchannelupgradeinit-message"},"Submit a governance proposal to execute a MsgChannelUpgradeInit message"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"This process can be performed with the new CLI that has been added\noutlined ",(0,i.yg)("a",{parentName:"p",href:"#upgrading-channels-with-the-cli"},"here"),".")),(0,i.yg)("p",null,"Only the configured authority for the ibc module is able to initiate a channel upgrade by submitting a ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit")," message."),(0,i.yg)("p",null,"Execute a governance proposal specifying the relevant fields to perform a channel upgrade."),(0,i.yg)("p",null,"Update the following json sample, and copy the contents into ",(0,i.yg)("inlineCode",{parentName:"p"},"proposal.json"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Channel upgrade init",\n  "summary": "Channel upgrade init",\n  "messages": [\n    {\n      "@type": "/ibc.core.channel.v1.MsgChannelUpgradeInit",\n      "signer": "<gov-address>",\n      "port_id": "transfer",\n      "channel_id": "channel-...",\n      "fields": {\n        "ordering": "ORDER_UNORDERED",\n        "connection_hops": ["connection-0"],\n        "version": "{\\"fee_version\\":\\"ics29-1\\",\\"app_version\\":\\"ics20-1\\"}"\n      }\n    }\n  ],\n  "metadata": "<metadata>",\n  "deposit": "10stake"\n}\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: ensure the correct fields.version is specified. This is the new version that the channels will be upgraded to.")),(0,i.yg)("h3",{id:"submit-the-proposal"},"Submit the proposal"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd tx submit-proposal proposal.json --from <key_or_address>\n")),(0,i.yg)("h2",{id:"upgrading-channels-with-the-cli"},"Upgrading channels with the CLI"),(0,i.yg)("p",null,"A new cli has been added which enables either"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"- submitting a governance proposal which contains a `MsgChannelUpgradeInit` for every channel to be upgraded.\n- generating a `proposal.json` file which contains the proposal contents to be edited/submitted at a later date.\n")),(0,i.yg)("p",null,"The following example, would submit a governance proposal with the specified deposit, title and summary which would\ncontain a ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelUpgradeInit")," for all ",(0,i.yg)("inlineCode",{parentName:"p"},"OPEN")," channels whose port matches the regular expression ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer"),"."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: by adding the ",(0,i.yg)("inlineCode",{parentName:"p"},"--json")," flag, the command would instead output the contents of the proposal which could be\nstored in a ",(0,i.yg)("inlineCode",{parentName:"p"},"proposal.json")," file to be edited and submitted at a later date.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'simd tx ibc channel upgrade-channels "{\\"fee_version\\":\\"ics29-1\\",\\"app_version\\":\\"ics20-1\\"}" \\\n  --deposit "10stake" \\\n  --title "Channel Upgrades Governance Proposal" \\\n  --summary "Upgrade all transfer channels to be fee enabled" \\\n  --port-pattern "transfer"\n')),(0,i.yg)("p",null,"It is also possible to explicitly list a comma separated string of channel IDs. It is important to note that the\nregular expression matching specified by ",(0,i.yg)("inlineCode",{parentName:"p"},"--port-pattern")," (which defaults to ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer"),") still applies."),(0,i.yg)("p",null,"For example the following command would generate the contents of a ",(0,i.yg)("inlineCode",{parentName:"p"},"proposal.json")," file which would attempt to upgrade\nchannels with a port ID of ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer")," and a channelID of ",(0,i.yg)("inlineCode",{parentName:"p"},"channel-0"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"channel-1")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"channel-2"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'simd tx ibc channel upgrade-channels "{\\"fee_version\\":\\"ics29-1\\",\\"app_version\\":\\"ics20-1\\"}" \\\n  --deposit "10stake" \\\n  --title "Channel Upgrades Governance Proposal" \\\n  --summary "Upgrade all transfer channels to be fee enabled" \\\n  --port-pattern "transfer" \\\n  --channel-ids "channel-0,channel-1,channel-2" \\\n  --json\n')))}g.isMDXComponent=!0}}]);