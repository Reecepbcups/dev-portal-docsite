"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[48997],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>m});var t=i(96540);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(i),g=o,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||a;return i?t.createElement(m,r(r({ref:n},u),{},{components:i})):t.createElement(m,r({ref:n},u))}));function m(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=i[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},45192:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=i(58168),o=(i(96540),i(15680));const a={},r="ADR 044: Guidelines for Updating Protobuf Definitions",s={unversionedId:"build/architecture/adr-044-protobuf-updates-guidelines",id:"version-0.47/build/architecture/adr-044-protobuf-updates-guidelines",title:"ADR 044: Guidelines for Updating Protobuf Definitions",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/architecture/adr-044-protobuf-updates-guidelines.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-044-protobuf-updates-guidelines",permalink:"/cosmos-sdk/0.47/build/architecture/adr-044-protobuf-updates-guidelines",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 43: NFT Module",permalink:"/cosmos-sdk/0.47/build/architecture/adr-043-nft-module"},next:{title:"ADR 045: BaseApp {Check,Deliver}Tx as Middlewares",permalink:"/cosmos-sdk/0.47/build/architecture/adr-045-check-delivertx-middlewares"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Updating Protobuf Definition Without Bumping Version",id:"updating-protobuf-definition-without-bumping-version",level:3},{value:"1. Module developers MAY add new Protobuf definitions",id:"1-module-developers-may-add-new-protobuf-definitions",level:4},{value:"2. Fields MAY be marked as <code>deprecated</code>, and nodes MAY implement a protocol-breaking change for handling these fields",id:"2-fields-may-be-marked-as-deprecated-and-nodes-may-implement-a-protocol-breaking-change-for-handling-these-fields",level:4},{value:"3. Fields MUST NOT be renamed",id:"3-fields-must-not-be-renamed",level:4},{value:"Incrementing Protobuf Package Version",id:"incrementing-protobuf-package-version",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Test Cases optional",id:"test-cases-optional",level:2},{value:"References",id:"references",level:2}],u={toc:d},p="wrapper";function c(e){let{components:n,...i}=e;return(0,o.yg)(p,(0,t.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-044-guidelines-for-updating-protobuf-definitions"},"ADR 044: Guidelines for Updating Protobuf Definitions"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"28.06.2021: Initial Draft"),(0,o.yg)("li",{parentName:"ul"},"02.12.2021: Add ",(0,o.yg)("inlineCode",{parentName:"li"},"Since:")," comment for new fields"),(0,o.yg)("li",{parentName:"ul"},"21.07.2022: Remove the rule of no new ",(0,o.yg)("inlineCode",{parentName:"li"},"Msg")," in the same proto version.")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"Draft"),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"This ADR provides guidelines and recommended practices when updating Protobuf definitions. These guidelines are targeting module developers."),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"The Cosmos SDK maintains a set of ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/proto/cosmos"},"Protobuf definitions"),". It is important to correctly design Protobuf definitions to avoid any breaking changes within the same version. The reasons are to not break tooling (including indexers and explorers), wallets and other third-party integrations."),(0,o.yg)("p",null,"When making changes to these Protobuf definitions, the Cosmos SDK currently only follows ",(0,o.yg)("a",{parentName:"p",href:"https://docs.buf.build/"},"Buf's")," recommendations. We noticed however that Buf's recommendations might still result in breaking changes in the SDK in some cases. For example:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Adding fields to ",(0,o.yg)("inlineCode",{parentName:"li"},"Msg"),"s. Adding fields is a not a Protobuf spec-breaking operation. However, when adding new fields to ",(0,o.yg)("inlineCode",{parentName:"li"},"Msg"),"s, the unknown field rejection will throw an error when sending the new ",(0,o.yg)("inlineCode",{parentName:"li"},"Msg")," to an older node."),(0,o.yg)("li",{parentName:"ul"},"Marking fields as ",(0,o.yg)("inlineCode",{parentName:"li"},"reserved"),". Protobuf proposes the ",(0,o.yg)("inlineCode",{parentName:"li"},"reserved")," keyword for removing fields without the need to bump the package version. However, by doing so, client backwards compatibility is broken as Protobuf doesn't generate anything for ",(0,o.yg)("inlineCode",{parentName:"li"},"reserved")," fields. See ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9446"},"#9446")," for more details on this issue.")),(0,o.yg)("p",null,'Moreover, module developers often face other questions around Protobuf definitions such as "Can I rename a field?" or "Can I deprecate a field?" This ADR aims to answer all these questions by providing clear guidelines about allowed updates for Protobuf definitions.'),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("p",null,"We decide to keep ",(0,o.yg)("a",{parentName:"p",href:"https://docs.buf.build/"},"Buf's")," recommendations with the following exceptions:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"UNARY_RPC"),": the Cosmos SDK currently does not support streaming RPCs."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"COMMENT_FIELD"),": the Cosmos SDK allows fields with no comments."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"SERVICE_SUFFIX"),": we use the ",(0,o.yg)("inlineCode",{parentName:"li"},"Query")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"Msg")," service naming convention, which doesn't use the ",(0,o.yg)("inlineCode",{parentName:"li"},"-Service")," suffix."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"PACKAGE_VERSION_SUFFIX"),": some packages, such as ",(0,o.yg)("inlineCode",{parentName:"li"},"cosmos.crypto.ed25519"),", don't use a version suffix."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"RPC_REQUEST_STANDARD_NAME"),": Requests for the ",(0,o.yg)("inlineCode",{parentName:"li"},"Msg")," service don't have the ",(0,o.yg)("inlineCode",{parentName:"li"},"-Request")," suffix to keep backwards compatibility.")),(0,o.yg)("p",null,"On top of Buf's recommendations we add the following guidelines that are specific to the Cosmos SDK."),(0,o.yg)("h3",{id:"updating-protobuf-definition-without-bumping-version"},"Updating Protobuf Definition Without Bumping Version"),(0,o.yg)("h4",{id:"1-module-developers-may-add-new-protobuf-definitions"},"1. Module developers MAY add new Protobuf definitions"),(0,o.yg)("p",null,"Module developers MAY add new ",(0,o.yg)("inlineCode",{parentName:"p"},"message"),"s, new ",(0,o.yg)("inlineCode",{parentName:"p"},"Service"),"s, new ",(0,o.yg)("inlineCode",{parentName:"p"},"rpc")," endpoints, and new fields to existing messages. This recommendation follows the Protobuf specification, but is added in this document for clarity, as the SDK requires one additional change."),(0,o.yg)("p",null,"The SDK requires the Protobuf comment of the new addition to contain one line with the following format:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// Since: cosmos-sdk <version>{, <version>...}\n")),(0,o.yg)("p",null,"Where each ",(0,o.yg)("inlineCode",{parentName:"p"},"version"),' denotes a minor ("0.45") or patch ("0.44.5") version from which the field is available. This will greatly help client libraries, who can optionally use reflection or custom code generation to show/hide these fields depending on the targetted node version.'),(0,o.yg)("p",null,"As examples, the following comments are valid:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// Since: cosmos-sdk 0.44\n\n// Since: cosmos-sdk 0.42.11, 0.44.5\n")),(0,o.yg)("p",null,"and the following ones are NOT valid:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// Since cosmos-sdk v0.44\n\n// since: cosmos-sdk 0.44\n\n// Since: cosmos-sdk 0.42.11 0.44.5\n\n// Since: Cosmos SDK 0.42.11, 0.44.5\n")),(0,o.yg)("h4",{id:"2-fields-may-be-marked-as-deprecated-and-nodes-may-implement-a-protocol-breaking-change-for-handling-these-fields"},"2. Fields MAY be marked as ",(0,o.yg)("inlineCode",{parentName:"h4"},"deprecated"),", and nodes MAY implement a protocol-breaking change for handling these fields"),(0,o.yg)("p",null,"Protobuf supports the ",(0,o.yg)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto#options"},(0,o.yg)("inlineCode",{parentName:"a"},"deprecated")," field option"),", and this option MAY be used on any field, including ",(0,o.yg)("inlineCode",{parentName:"p"},"Msg")," fields. If a node handles a Protobuf message with a non-empty deprecated field, the node MAY change its behavior upon processing it, even in a protocol-breaking way. When possible, the node MUST handle backwards compatibility without breaking the consensus (unless we increment the proto version)."),(0,o.yg)("p",null,"As an example, the Cosmos SDK v0.42 to v0.43 update contained two Protobuf-breaking changes, listed below. Instead of bumping the package versions from ",(0,o.yg)("inlineCode",{parentName:"p"},"v1beta1")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"v1"),", the SDK team decided to follow this guideline, by reverting the breaking changes, marking those changes as deprecated, and modifying the node implementation when processing messages with deprecated fields. More specifically:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The Cosmos SDK recently removed support for ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/8849"},"time-based software upgrades"),". As such, the ",(0,o.yg)("inlineCode",{parentName:"li"},"time")," field has been marked as deprecated in ",(0,o.yg)("inlineCode",{parentName:"li"},"cosmos.upgrade.v1beta1.Plan"),". Moreover, the node will reject any proposal containing an upgrade Plan whose ",(0,o.yg)("inlineCode",{parentName:"li"},"time")," field is non-empty."),(0,o.yg)("li",{parentName:"ul"},"The Cosmos SDK now supports ",(0,o.yg)("a",{parentName:"li",href:"/cosmos-sdk/0.47/build/architecture/adr-037-gov-split-vote"},"governance split votes"),". When querying for votes, the returned ",(0,o.yg)("inlineCode",{parentName:"li"},"cosmos.gov.v1beta1.Vote")," message has its ",(0,o.yg)("inlineCode",{parentName:"li"},"option")," field (used for 1 vote option) deprecated in favor of its ",(0,o.yg)("inlineCode",{parentName:"li"},"options")," field (allowing multiple vote options). Whenever possible, the SDK still populates the deprecated ",(0,o.yg)("inlineCode",{parentName:"li"},"option")," field, that is, if and only if the ",(0,o.yg)("inlineCode",{parentName:"li"},"len(options) == 1")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"options[0].Weight == 1.0"),".")),(0,o.yg)("h4",{id:"3-fields-must-not-be-renamed"},"3. Fields MUST NOT be renamed"),(0,o.yg)("p",null,"Whereas the official Protobuf recommendations do not prohibit renaming fields, as it does not break the Protobuf binary representation, the SDK explicitly forbids renaming fields in Protobuf structs. The main reason for this choice is to avoid introducing breaking changes for clients, which often rely on hard-coded fields from generated types. Moreover, renaming fields will lead to client-breaking JSON representations of Protobuf definitions, used in REST endpoints and in the CLI."),(0,o.yg)("h3",{id:"incrementing-protobuf-package-version"},"Incrementing Protobuf Package Version"),(0,o.yg)("p",null,"TODO, needs architecture review. Some topics:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Bumping versions frequency"),(0,o.yg)("li",{parentName:"ul"},"When bumping versions, should the Cosmos SDK support both versions?",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"i.e. v1beta1 -> v1, should we have two folders in the Cosmos SDK, and handlers for both versions?"))),(0,o.yg)("li",{parentName:"ul"},"mention ADR-023 Protobuf naming")),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.')),(0,o.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"All ADRs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The ADR must explain how the author proposes to deal with these incompatibilities. ADR submissions without a sufficient backwards compatibility treatise may be rejected outright.")),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"less pain to tool developers"),(0,o.yg)("li",{parentName:"ul"},"more compatibility in the ecosystem"),(0,o.yg)("li",{parentName:"ul"},"...")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("p",null,"{negative consequences}"),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"more rigor in Protobuf review")),(0,o.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,o.yg)("p",null,'This ADR is still in the DRAFT stage, and the "Incrementing Protobuf Package Version" will be filled in once we make a decision on how to correctly do it.'),(0,o.yg)("h2",{id:"test-cases-optional"},"Test Cases ","[optional]"),(0,o.yg)("p",null,"Test cases for an implementation are mandatory for ADRs that are affecting consensus changes. Other ADRs can choose to include links to test cases if applicable."),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9445"},"#9445")," Release proto definitions v1"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/9446"},"#9446")," Address v1beta1 proto breaking changes")))}c.isMDXComponent=!0}}]);