"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[88071],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>m});var n=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),g=a,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},55598:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(58168),a=(o(96540),o(15680));const i={},r="ADR 042: Group Module",s={unversionedId:"build/architecture/adr-042-group-module",id:"version-0.50/build/architecture/adr-042-group-module",title:"ADR 042: Group Module",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-042-group-module.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-042-group-module",permalink:"/cosmos-sdk/0.50/build/architecture/adr-042-group-module",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 041: In-Place Store Migrations",permalink:"/cosmos-sdk/0.50/build/architecture/adr-041-in-place-store-migrations"},next:{title:"ADR 43: NFT Module",permalink:"/cosmos-sdk/0.50/build/architecture/adr-043-nft-module"}},l={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Group",id:"group",level:3},{value:"Group Account",id:"group-account",level:3},{value:"Decision Policy",id:"decision-policy",level:3},{value:"Threshold decision policy",id:"threshold-decision-policy",level:4},{value:"Proposal",id:"proposal",level:3},{value:"Voting",id:"voting",level:3},{value:"Executing Proposals",id:"executing-proposals",level:3},{value:"Changing Group Membership",id:"changing-group-membership",level:4},{value:"Notes on current implementation",id:"notes-on-current-implementation",level:3},{value:"ORM",id:"orm",level:4},{value:"ADR-033 to route proposal messages",id:"adr-033-to-route-proposal-messages",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(c,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-042-group-module"},"ADR 042: Group Module"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"2020/04/09: Initial Draft")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Draft"),(0,a.yg)("h2",{id:"abstract"},"Abstract"),(0,a.yg)("p",null,"This ADR defines the ",(0,a.yg)("inlineCode",{parentName:"p"},"x/group")," module which allows the creation and management of on-chain multi-signature accounts and enables voting for message execution based on configurable decision policies."),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"The legacy amino multi-signature mechanism of the Cosmos SDK has certain limitations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Key rotation is not possible, although this can be solved with ",(0,a.yg)("a",{parentName:"li",href:"/cosmos-sdk/0.50/build/architecture/adr-034-account-rekeying"},"account rekeying"),"."),(0,a.yg)("li",{parentName:"ul"},"Thresholds can't be changed."),(0,a.yg)("li",{parentName:"ul"},"UX is cumbersome for non-technical users (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/5661"},"#5661"),")."),(0,a.yg)("li",{parentName:"ul"},"It requires ",(0,a.yg)("inlineCode",{parentName:"li"},"legacy_amino")," sign mode (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/8141"},"#8141"),").")),(0,a.yg)("p",null,"While the group module is not meant to be a total replacement for the current multi-signature accounts, it provides a solution to the limitations described above, with a more flexible key management system where keys can be added, updated or removed, as well as configurable thresholds.\nIt's meant to be used with other access control modules such as ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.50/build/architecture/adr-029-fee-grant-module"},(0,a.yg)("inlineCode",{parentName:"a"},"x/feegrant"))," ans ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.50/build/architecture/adr-030-authz-module"},(0,a.yg)("inlineCode",{parentName:"a"},"x/authz"))," to simplify key management for individuals and organizations."),(0,a.yg)("p",null,"The proof of concept of the group module can be found in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/tree/master/proto/regen/group/v1alpha1"},"https://github.com/regen-network/regen-ledger/tree/master/proto/regen/group/v1alpha1")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/tree/master/x/group"},"https://github.com/regen-network/regen-ledger/tree/master/x/group"),"."),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,"We propose merging the ",(0,a.yg)("inlineCode",{parentName:"p"},"x/group")," module with its supporting ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/tree/master/orm"},"ORM/Table Store package")," (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/7098"},"#7098"),") into the Cosmos SDK and continuing development here. There will be a dedicated ADR for the ORM package."),(0,a.yg)("h3",{id:"group"},"Group"),(0,a.yg)("p",null,"A group is a composition of accounts with associated weights. It is not\nan account and doesn't have a balance. It doesn't in and of itself have any\nsort of voting or decision weight.\nGroup members can create proposals and vote on them through group accounts using different decision policies."),(0,a.yg)("p",null,"It has an ",(0,a.yg)("inlineCode",{parentName:"p"},"admin")," account which can manage members in the group, update the group\nmetadata and set a new admin."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message GroupInfo {\n\n    // group_id is the unique ID of this group.\n    uint64 group_id = 1;\n\n    // admin is the account address of the group's admin.\n    string admin = 2;\n\n    // metadata is any arbitrary metadata to attached to the group.\n    bytes metadata = 3;\n\n    // version is used to track changes to a group's membership structure that\n    // would break existing proposals. Whenever a member weight has changed,\n    // or any member is added or removed, the version is incremented and will\n    // invalidate all proposals from older versions.\n    uint64 version = 4;\n\n    // total_weight is the sum of the group members' weights.\n    string total_weight = 5;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message GroupMember {\n\n    // group_id is the unique ID of the group.\n    uint64 group_id = 1;\n\n    // member is the member data.\n    Member member = 2;\n}\n\n// Member represents a group member with an account address,\n// non-zero weight and metadata.\nmessage Member {\n\n    // address is the member's account address.\n    string address = 1;\n\n    // weight is the member's voting weight that should be greater than 0.\n    string weight = 2;\n\n    // metadata is any arbitrary metadata to attached to the member.\n    bytes metadata = 3;\n}\n")),(0,a.yg)("h3",{id:"group-account"},"Group Account"),(0,a.yg)("p",null,"A group account is an account associated with a group and a decision policy.\nA group account does have a balance."),(0,a.yg)("p",null,'Group accounts are abstracted from groups because a single group may have\nmultiple decision policies for different types of actions. Managing group\nmembership separately from decision policies results in the least overhead\nand keeps membership consistent across different policies. The pattern that\nis recommended is to have a single master group account for a given group,\nand then to create separate group accounts with different decision policies\nand delegate the desired permissions from the master account to\nthose "sub-accounts" using the ',(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.50/build/architecture/adr-030-authz-module"},(0,a.yg)("inlineCode",{parentName:"a"},"x/authz")," module"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message GroupAccountInfo {\n\n    // address is the group account address.\n    string address = 1;\n\n    // group_id is the ID of the Group the GroupAccount belongs to.\n    uint64 group_id = 2;\n\n    // admin is the account address of the group admin.\n    string admin = 3;\n\n    // metadata is any arbitrary metadata of this group account.\n    bytes metadata = 4;\n\n    // version is used to track changes to a group's GroupAccountInfo structure that\n    // invalidates active proposal from old versions.\n    uint64 version = 5;\n\n    // decision_policy specifies the group account's decision policy.\n    google.protobuf.Any decision_policy = 6 [(cosmos_proto.accepts_interface) = \"cosmos.group.v1.DecisionPolicy\"];\n}\n")),(0,a.yg)("p",null,"Similarly to a group admin, a group account admin can update its metadata, decision policy or set a new group account admin."),(0,a.yg)("p",null,'A group account can also be an admin or a member of a group.\nFor instance, a group admin could be another group account which could "elects" the members or it could be the same group that elects itself.'),(0,a.yg)("h3",{id:"decision-policy"},"Decision Policy"),(0,a.yg)("p",null,"A decision policy is the mechanism by which members of a group can vote on\nproposals."),(0,a.yg)("p",null,"All decision policies should have a minimum and maximum voting window.\nThe minimum voting window is the minimum duration that must pass in order\nfor a proposal to potentially pass, and it may be set to 0. The maximum voting\nwindow is the maximum time that a proposal may be voted on and executed if\nit reached enough support before it is closed.\nBoth of these values must be less than a chain-wide max voting window parameter."),(0,a.yg)("p",null,"We define the ",(0,a.yg)("inlineCode",{parentName:"p"},"DecisionPolicy")," interface that all decision policies must implement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type DecisionPolicy interface {\n    codec.ProtoMarshaler\n\n    ValidateBasic() error\n    GetTimeout() types.Duration\n    Allow(tally Tally, totalPower string, votingDuration time.Duration) (DecisionPolicyResult, error)\n    Validate(g GroupInfo) error\n}\n\ntype DecisionPolicyResult struct {\n    Allow bool\n    Final bool\n}\n")),(0,a.yg)("h4",{id:"threshold-decision-policy"},"Threshold decision policy"),(0,a.yg)("p",null,"A threshold decision policy defines a minimum support votes (",(0,a.yg)("em",{parentName:"p"},"yes"),"), based on a tally\nof voter weights, for a proposal to pass. For\nthis decision policy, abstain and veto are treated as no support (",(0,a.yg)("em",{parentName:"p"},"no"),")."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"message ThresholdDecisionPolicy {\n\n    // threshold is the minimum weighted sum of support votes for a proposal to succeed.\n    string threshold = 1;\n\n    // voting_period is the duration from submission of a proposal to the end of voting period\n    // Within this period, votes and exec messages can be submitted.\n    google.protobuf.Duration voting_period = 2 [(gogoproto.nullable) = false];\n}\n")),(0,a.yg)("h3",{id:"proposal"},"Proposal"),(0,a.yg)("p",null,"Any member of a group can submit a proposal for a group account to decide upon.\nA proposal consists of a set of ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s that will be executed if the proposal\npasses as well as any metadata associated with the proposal. These ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s get validated as part of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg/CreateProposal")," request validation. They should also have their signer set as the group account."),(0,a.yg)("p",null,"Internally, a proposal also tracks:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"its current ",(0,a.yg)("inlineCode",{parentName:"li"},"Status"),": submitted, closed or aborted"),(0,a.yg)("li",{parentName:"ul"},"its ",(0,a.yg)("inlineCode",{parentName:"li"},"Result"),": unfinalized, accepted or rejected"),(0,a.yg)("li",{parentName:"ul"},"its ",(0,a.yg)("inlineCode",{parentName:"li"},"VoteState")," in the form of a ",(0,a.yg)("inlineCode",{parentName:"li"},"Tally"),", which is calculated on new votes and when executing the proposal.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf"},"// Tally represents the sum of weighted votes.\nmessage Tally {\n    option (gogoproto.goproto_getters) = false;\n\n    // yes_count is the weighted sum of yes votes.\n    string yes_count = 1;\n\n    // no_count is the weighted sum of no votes.\n    string no_count = 2;\n\n    // abstain_count is the weighted sum of abstainers.\n    string abstain_count = 3;\n\n    // veto_count is the weighted sum of vetoes.\n    string veto_count = 4;\n}\n")),(0,a.yg)("h3",{id:"voting"},"Voting"),(0,a.yg)("p",null,"Members of a group can vote on proposals. There are four choices to choose while voting - yes, no, abstain and veto. Not\nall decision policies will support them. Votes can contain some optional metadata.\nIn the current implementation, the voting window begins as soon as a proposal\nis submitted."),(0,a.yg)("p",null,"Voting internally updates the proposal ",(0,a.yg)("inlineCode",{parentName:"p"},"VoteState")," as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"Status")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Result")," if needed."),(0,a.yg)("h3",{id:"executing-proposals"},"Executing Proposals"),(0,a.yg)("p",null,"Proposals will not be automatically executed by the chain in this current design,\nbut rather a user must submit a ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg/Exec")," transaction to attempt to execute the\nproposal based on the current votes and decision policy. A future upgrade could\nautomate this and have the group account (or a fee granter) pay."),(0,a.yg)("h4",{id:"changing-group-membership"},"Changing Group Membership"),(0,a.yg)("p",null,"In the current implementation, updating a group or a group account after submitting a proposal will make it invalid. It will simply fail if someone calls ",(0,a.yg)("inlineCode",{parentName:"p"},"Msg/Exec")," and will eventually be garbage collected."),(0,a.yg)("h3",{id:"notes-on-current-implementation"},"Notes on current implementation"),(0,a.yg)("p",null,"This section outlines the current implementation used in the proof of concept of the group module but this could be subject to changes and iterated on."),(0,a.yg)("h4",{id:"orm"},"ORM"),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9156"},"ORM package")," defines tables, sequences and secondary indexes which are used in the group module."),(0,a.yg)("p",null,"Groups are stored in state as part of a ",(0,a.yg)("inlineCode",{parentName:"p"},"groupTable"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"group_id")," being an auto-increment integer. Group members are stored in a ",(0,a.yg)("inlineCode",{parentName:"p"},"groupMemberTable"),"."),(0,a.yg)("p",null,"Group accounts are stored in a ",(0,a.yg)("inlineCode",{parentName:"p"},"groupAccountTable"),". The group account address is generated based on an auto-increment integer which is used to derive the group module ",(0,a.yg)("inlineCode",{parentName:"p"},"RootModuleKey")," into a ",(0,a.yg)("inlineCode",{parentName:"p"},"DerivedModuleKey"),", as stated in ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.50/build/architecture/adr-033-protobuf-inter-module-comm#modulekeys-and-moduleids"},"ADR-033"),". The group account is added as a new ",(0,a.yg)("inlineCode",{parentName:"p"},"ModuleAccount")," through ",(0,a.yg)("inlineCode",{parentName:"p"},"x/auth"),"."),(0,a.yg)("p",null,"Proposals are stored as part of the ",(0,a.yg)("inlineCode",{parentName:"p"},"proposalTable")," using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Proposal")," type. The ",(0,a.yg)("inlineCode",{parentName:"p"},"proposal_id")," is an auto-increment integer."),(0,a.yg)("p",null,"Votes are stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"voteTable"),". The primary key is based on the vote's ",(0,a.yg)("inlineCode",{parentName:"p"},"proposal_id")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"voter")," account address."),(0,a.yg)("h4",{id:"adr-033-to-route-proposal-messages"},"ADR-033 to route proposal messages"),(0,a.yg)("p",null,"Inter-module communication introduced by ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.50/build/architecture/adr-033-protobuf-inter-module-comm"},"ADR-033")," can be used to route a proposal's messages using the ",(0,a.yg)("inlineCode",{parentName:"p"},"DerivedModuleKey")," corresponding to the proposal's group account."),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Improved UX for multi-signature accounts allowing key rotation and custom decision policies.")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It uses ADR 033 so it will need to be implemented within the Cosmos SDK, but this doesn't imply necessarily any large refactoring of existing Cosmos SDK modules."),(0,a.yg)("li",{parentName:"ul"},"The current implementation of the group module uses the ORM package.")),(0,a.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Convergence of ",(0,a.yg)("inlineCode",{parentName:"li"},"/group")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"x/gov")," as both support proposals and voting: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/9066"},"https://github.com/cosmos/cosmos-sdk/discussions/9066")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"x/group")," possible future improvements:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Execute proposals on submission (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/regen-network/regen-ledger/issues/288"},"https://github.com/regen-network/regen-ledger/issues/288"),")"),(0,a.yg)("li",{parentName:"ul"},"Withdraw a proposal (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/regen-network/cosmos-modules/issues/41"},"https://github.com/regen-network/cosmos-modules/issues/41"),")"),(0,a.yg)("li",{parentName:"ul"},"Make ",(0,a.yg)("inlineCode",{parentName:"li"},"Tally")," more flexible and support non-binary choices")))),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Initial specification:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#group-module"},"https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#group-module")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/5236"},"#5236")))),(0,a.yg)("li",{parentName:"ul"},"Proposal to add ",(0,a.yg)("inlineCode",{parentName:"li"},"x/group")," into the Cosmos SDK: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/7633"},"#7633"))))}d.isMDXComponent=!0}}]);