"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[7294],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(58168),a=(n(96540),n(15680));const o={},r="ADR 005: UpdateClient Events - ClientState Consensus Heights",s={unversionedId:"architecture/adr-005-consensus-height-events",id:"version-v9.0.x/architecture/adr-005-consensus-height-events",title:"ADR 005: UpdateClient Events - ClientState Consensus Heights",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v9.0.x/architecture/adr-005-consensus-height-events.md",sourceDirName:"architecture",slug:"/architecture/adr-005-consensus-height-events",permalink:"/ibc-go/architecture/adr-005-consensus-height-events",draft:!1,tags:[],version:"v9.0.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 004: Lock fee module upon escrow out of balance",permalink:"/ibc-go/architecture/adr-004-ics29-lock-fee-module"},next:{title:"ADR 006: ICS-02 client refactor",permalink:"/ibc-go/architecture/adr-006-02-client-refactor"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],c={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-005-updateclient-events---clientstate-consensus-heights"},"ADR 005: UpdateClient Events - ClientState Consensus Heights"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"25/04/2022: initial draft")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Accepted"),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ibc-go")," implementation leverages the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/docs/core/events.md#EventManager"},"Cosmos-SDK's EventManager")," to provide subscribers a method of reacting to application specific events.\nSome IBC relayers depend on the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/core/02-client/keeper/events.go#L33"},(0,a.yg)("inlineCode",{parentName:"a"},"consensus_height"))," attribute emitted as part of ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateClient")," events in order to run ",(0,a.yg)("inlineCode",{parentName:"p"},"07-tendermint")," misbehaviour detection by cross-checking the details of the ",(0,a.yg)("em",{parentName:"p"},"Header")," emitted at a given consensus height against those of the ",(0,a.yg)("em",{parentName:"p"},"Header")," from the originating chain. This includes such details as:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"SignedHeader")," containing the commitment root."),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"ValidatorSet")," that signed the ",(0,a.yg)("em",{parentName:"li"},"Header"),"."),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"TrustedHeight")," seen by the client at less than or equal to the height of ",(0,a.yg)("em",{parentName:"li"},"Header"),"."),(0,a.yg)("li",{parentName:"ul"},"The last ",(0,a.yg)("inlineCode",{parentName:"li"},"TrustedValidatorSet")," at the trusted height.")),(0,a.yg)("p",null,"Following the refactor of the ",(0,a.yg)("inlineCode",{parentName:"p"},"02-client")," submodule and associated ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," interfaces, it will now be possible for\nlight client implementations to perform such actions as batch updates, inserting ",(0,a.yg)("inlineCode",{parentName:"p"},"N")," number of ",(0,a.yg)("inlineCode",{parentName:"p"},"ConsensusState"),"s into the application state tree with a single ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateClient")," message. This flexibility is provided in ",(0,a.yg)("inlineCode",{parentName:"p"},"ibc-go")," by the usage of the ",(0,a.yg)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3#any"},"Protobuf ",(0,a.yg)("inlineCode",{parentName:"a"},"Any"))," field contained within the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/proto/ibc/core/client/v1/tx.proto#L44"},(0,a.yg)("inlineCode",{parentName:"a"},"UpdateClient"))," message.\nFor example, a batched client update message serialized as a Protobuf ",(0,a.yg)("inlineCode",{parentName:"p"},"Any")," type for the ",(0,a.yg)("inlineCode",{parentName:"p"},"07-tendermint")," lightclient implementation could be defined as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message BatchedHeaders {\n  repeated Header headers = 1;\n}\n")),(0,a.yg)("p",null,"To complement this flexibility, the ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateClient")," handler will now support the submission of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics#misbehaviour"},"client misbehaviour")," by consolidating the ",(0,a.yg)("inlineCode",{parentName:"p"},"Header")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," interfaces into a single ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientMessage")," interface type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// ClientMessage is an interface used to update an IBC client.\n// The update may be done by a single header, a batch of headers, misbehaviour, or any type which when verified produces\n// a change to state of the IBC client\ntype ClientMessage interface {\n  proto.Message\n\n  ClientType() string\n  ValidateBasic() error\n}\n")),(0,a.yg)("p",null,"To support this functionality the ",(0,a.yg)("inlineCode",{parentName:"p"},"GetHeight()")," method has been omitted from the new ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientMessage")," interface.\nEmission of standardised events from the ",(0,a.yg)("inlineCode",{parentName:"p"},"02-client")," submodule now becomes problematic and is two-fold:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"02-client")," submodule previously depended upon the ",(0,a.yg)("inlineCode",{parentName:"li"},"GetHeight()")," method of ",(0,a.yg)("inlineCode",{parentName:"li"},"Header")," types in order to ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/core/02-client/keeper/client.go#L90"},"retrieve the updated consensus height"),"."),(0,a.yg)("li",{parentName:"ol"},"Emitting a single ",(0,a.yg)("inlineCode",{parentName:"li"},"consensus_height")," event attribute is not sufficient in the case of a batched client update containing multiple ",(0,a.yg)("em",{parentName:"li"},"Headers"),".")),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,"The following decisions have been made in order to provide flexibility to consumers of ",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateClient")," events in a non-breaking fashion:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Return a list of updated consensus heights ",(0,a.yg)("inlineCode",{parentName:"li"},"[]exported.Height")," from the new ",(0,a.yg)("inlineCode",{parentName:"li"},"UpdateState")," method of the ",(0,a.yg)("inlineCode",{parentName:"li"},"ClientState")," interface.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// UpdateState updates and stores as necessary any associated information for an IBC client, such as the ClientState and corresponding ConsensusState.\n// Upon successful update, a list of consensus heights is returned. It assumes the ClientMessage has already been verified.\nUpdateState(sdk.Context, codec.BinaryCodec, sdk.KVStore, ClientMessage) []Height\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Maintain the ",(0,a.yg)("inlineCode",{parentName:"p"},"consensus_height")," event attribute emitted from the ",(0,a.yg)("inlineCode",{parentName:"p"},"02-client")," update handler, but mark as deprecated for future removal. For example, with tendermint lightclients this will simply be ",(0,a.yg)("inlineCode",{parentName:"p"},"consensusHeights[0]")," following a successful update using a single ",(0,a.yg)("em",{parentName:"p"},"Header"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add an additional ",(0,a.yg)("inlineCode",{parentName:"p"},"consensus_heights")," event attribute, containing a comma separated list of updated heights. This provides flexibility for emitting a single consensus height or multiple consensus heights in the example use-case of batched header updates."))),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Subscribers of IBC core events can act upon ",(0,a.yg)("inlineCode",{parentName:"li"},"UpdateClient")," events containing one or more consensus heights."),(0,a.yg)("li",{parentName:"ul"},"Deprecation of the existing ",(0,a.yg)("inlineCode",{parentName:"li"},"consensus_height")," attribute allows consumers to continue to process ",(0,a.yg)("inlineCode",{parentName:"li"},"UpdateClient")," events as normal, with a path to upgrade to using the ",(0,a.yg)("inlineCode",{parentName:"li"},"consensus_heights")," attribute moving forward.")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Consumers of IBC core ",(0,a.yg)("inlineCode",{parentName:"li"},"UpdateClient")," events are forced to make future code changes.")),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("p",null,"Discussions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/1208#discussion_r839691927"},"#1208"))),(0,a.yg)("p",null,"Issues:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/594"},"#594"))),(0,a.yg)("p",null,"PRs:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/1285"},"#1285"))))}d.isMDXComponent=!0}}]);