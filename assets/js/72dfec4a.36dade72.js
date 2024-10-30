"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[31875],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,s(s({ref:t},g),{},{components:n})):a.createElement(d,s({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const r={title:"Contracts",sidebar_label:"Contracts",sidebar_position:7,slug:"/ibc/light-clients/wasm/contracts"},s="Contracts",o={unversionedId:"light-clients/wasm/contracts",id:"version-v7.8.x/light-clients/wasm/contracts",title:"Contracts",description:"Learn about the expected behaviour of Wasm light client contracts and the between with 08-wasm.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/03-light-clients/04-wasm/07-contracts.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/contracts",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/contracts",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:7,frontMatter:{title:"Contracts",sidebar_label:"Contracts",sidebar_position:7,slug:"/ibc/light-clients/wasm/contracts"},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/events"},next:{title:"Client",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/client"}},l={},c=[{value:"API",id:"api",level:2},{value:"<code>InstantiateMessage</code>",id:"instantiatemessage",level:2},{value:"<code>QueryMsg</code>",id:"querymsg",level:2},{value:"<code>SudoMsg</code>",id:"sudomsg",level:2},{value:"Migration",id:"migration",level:3},{value:"Expected behaviour",id:"expected-behaviour",level:2}],g={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"contracts"},"Contracts"),(0,i.yg)("p",null,"Learn about the expected behaviour of Wasm light client contracts and the between with ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm"),". "),(0,i.yg)("h2",{id:"api"},"API"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," light client proxy performs calls to the Wasm light client via the Wasm VM. The calls require as input JSON-encoded payload messages that fall in the three categories described in the next sections. "),(0,i.yg)("h2",{id:"instantiatemessage"},(0,i.yg)("inlineCode",{parentName:"h2"},"InstantiateMessage")),(0,i.yg)("p",null,"This is the message sent to the contract's ",(0,i.yg)("inlineCode",{parentName:"p"},"instantiate")," entry point. It contains the bytes of the protobuf-encoded client and consensus states of the underlying light client, both provided in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/proto/ibc/core/client/v1/tx.proto#L44-L54"},(0,i.yg)("inlineCode",{parentName:"a"},"MsgCreateClient")),". Please note that the bytes contained within the JSON message are represented as base64-encoded strings."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'type InstantiateMessage struct {\n    ClientState    []byte `json:"client_state"`\n    ConsensusState []byte `json:"consensus_state"`\n    Checksum       []byte `json:"checksum"\n}\n')),(0,i.yg)("p",null,"The Wasm light client contract is expected to store the client and consensus state in the corresponding keys of the client-prefixed store."),(0,i.yg)("h2",{id:"querymsg"},(0,i.yg)("inlineCode",{parentName:"h2"},"QueryMsg")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"QueryMsg")," acts as a discriminated union type that is used to encode the messages that are sent to the contract's ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," entry point. Only one of the fields of the type should be set at a time, so that the other fields are omitted in the encoded JSON and the payload can be correctly translated to the corresponding element of the enumeration in Rust."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'type QueryMsg struct {\n  Status               *StatusMsg               `json:"status,omitempty"`\n  ExportMetadata       *ExportMetadataMsg       `json:"export_metadata,omitempty"`\n  TimestampAtHeight    *TimestampAtHeightMsg    `json:"timestamp_at_height,omitempty"`\n  VerifyClientMessage  *VerifyClientMessageMsg  `json:"verify_client_message,omitempty"`\n  CheckForMisbehaviour *CheckForMisbehaviourMsg `json:"check_for_misbehaviour,omitempty"`\n}\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"#[cw_serde]\npub enum QueryMsg {\n  Status(StatusMsg),\n  ExportMetadata(ExportMetadataMsg),\n  TimestampAtHeight(TimestampAtHeightMsg),\n  VerifyClientMessage(VerifyClientMessageRaw),\n  CheckForMisbehaviour(CheckForMisbehaviourMsgRaw),\n}\n")),(0,i.yg)("p",null,"To learn what it is expected from the Wasm light client contract when processing each message, please read the corresponding section of the ",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/v7.8.x/ibc/light-clients/overview"},"Light client developer guide"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"StatusMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/client-state#status-method"},(0,i.yg)("inlineCode",{parentName:"a"},"Status")," method"),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"ExportMetadataMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/genesis#genesis-metadata"},"Genesis metadata"),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"TimestampAtHeightMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/client-state#gettimestampatheight-method"},(0,i.yg)("inlineCode",{parentName:"a"},"GetTimestampAtHeight")," method"),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"VerifyClientMessageMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/updates-and-misbehaviour#verifyclientmessage"},(0,i.yg)("inlineCode",{parentName:"a"},"VerifyClientMessage")),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"CheckForMisbehaviourMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/client-state#checkformisbehaviour-method"},(0,i.yg)("inlineCode",{parentName:"a"},"CheckForMisbehaviour")," method"),".")),(0,i.yg)("h2",{id:"sudomsg"},(0,i.yg)("inlineCode",{parentName:"h2"},"SudoMsg")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"SudoMsg")," acts as a discriminated union type that is used to encode the messages that are sent to the contract's ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo")," entry point. Only one of the fields of the type should be set at a time, so that the other fields are omitted in the encoded JSON and the payload can be correctly translated to the corresponding element of the enumeration in Rust."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo")," entry point is able to perform state-changing writes in the client-prefixed store."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'type SudoMsg struct {\n  UpdateState                 *UpdateStateMsg                 `json:"update_state,omitempty"`\n  UpdateStateOnMisbehaviour   *UpdateStateOnMisbehaviourMsg   `json:"update_state_on_misbehaviour,omitempty"`\n  VerifyUpgradeAndUpdateState *VerifyUpgradeAndUpdateStateMsg `json:"verify_upgrade_and_update_state,omitempty"`\n  VerifyMembership            *VerifyMembershipMsg            `json:"verify_membership,omitempty"`\n  VerifyNonMembership         *VerifyNonMembershipMsg         `json:"verify_non_membership,omitempty"`\n  MigrateClientStore          *MigrateClientStoreMsg          `json:"migrate_client_store,omitempty"`\n}\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},"#[cw_serde]\npub enum SudoMsg {\n  UpdateState(UpdateStateMsgRaw),\n  UpdateStateOnMisbehaviour(UpdateStateOnMisbehaviourMsgRaw),\n  VerifyUpgradeAndUpdateState(VerifyUpgradeAndUpdateStateMsgRaw),\n  VerifyMembership(VerifyMembershipMsgRaw),\n  VerifyNonMembership(VerifyNonMembershipMsgRaw),\n  MigrateClientStore(MigrateClientStoreMsgRaw),\n}\n")),(0,i.yg)("p",null,"To learn what it is expected from the Wasm light client contract when processing each message, please read the corresponding section of the ",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/v7.8.x/ibc/light-clients/overview"},"Light client developer guide"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"UpdateStateMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/updates-and-misbehaviour#updatestate"},(0,i.yg)("inlineCode",{parentName:"a"},"UpdateState")),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"UpdateStateOnMisbehaviourMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/updates-and-misbehaviour#updatestateonmisbehaviour"},(0,i.yg)("inlineCode",{parentName:"a"},"UpdateStateOnMisbehaviour")),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"VerifyUpgradeAndUpdateStateMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/upgrades#implementing-verifyupgradeandupdatestate"},(0,i.yg)("inlineCode",{parentName:"a"},"GetTimestampAtHeight")," method"),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"VerifyMembershipMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/client-state#verifymembership-method"},(0,i.yg)("inlineCode",{parentName:"a"},"VerifyMembership")," method"),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"VerifyNonMembershipMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/client-state#verifynonmembership-method"},(0,i.yg)("inlineCode",{parentName:"a"},"VerifyNonMembership")," method"),"."),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"MigrateClientStoreMsg"),", see the section ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v7.8.x/ibc/light-clients/proposals#implementing-checksubstituteandupdatestate"},"Implementing ",(0,i.yg)("inlineCode",{parentName:"a"},"CheckSubstituteAndUpdateState")),".")),(0,i.yg)("h3",{id:"migration"},"Migration"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," proxy light client exposes the ",(0,i.yg)("inlineCode",{parentName:"p"},"MigrateContract")," RPC endpoint that can be used to migrate a given Wasm light client contract (specified by the client identifier) to a new Wasm byte code (specified by the hash of the byte code). The expected use case for this RPC endpoint is to enable contracts to migrate to new byte code in case the current byte code is found to have a bug or vulnerability. The Wasm byte code that contracts are migrated have to be uploaded beforehand using ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," and must implement the ",(0,i.yg)("inlineCode",{parentName:"p"},"migrate")," entry point. See section",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/v7.8.x/ibc/light-clients/wasm/messages#msgmigratecontract"},(0,i.yg)("inlineCode",{parentName:"a"},"MsgMigrateContract"))," for information about the request message for this RPC endpoint. "),(0,i.yg)("h2",{id:"expected-behaviour"},"Expected behaviour"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," proxy light client modules expects the following behaviour from the Wasm light client contracts when executing messages that perform state-changing writes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The contract must not delete the client state from the store."),(0,i.yg)("li",{parentName:"ul"},"The contract must not change the client state to a client state of another type."),(0,i.yg)("li",{parentName:"ul"},"The contract must not change the checksum in the client state.")),(0,i.yg)("p",null,"Any violation of these rules will result in an error returned from ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," that will abort the transaction."))}m.isMDXComponent=!0}}]);