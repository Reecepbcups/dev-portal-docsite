"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[84239],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>h});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||g[m]||i;return a?t.createElement(h,r(r({ref:n},d),{},{components:a})):t.createElement(h,r({ref:n},d))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94577:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(58168),o=(a(96540),a(15680));const i={},r="Transactions",s={unversionedId:"learn/advanced/transactions",id:"version-0.47/learn/advanced/transactions",title:"Transactions",description:"Transactions are objects created by end-users to trigger state changes in the application.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/learn/advanced/01-transactions.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/transactions",permalink:"/cosmos-sdk/0.47/learn/advanced/transactions",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{},sidebar:"learnSidebar",previous:{title:"BaseApp",permalink:"/cosmos-sdk/0.47/learn/advanced/baseapp"},next:{title:"Context",permalink:"/cosmos-sdk/0.47/learn/advanced/context"}},l={},c=[{value:"Transactions",id:"transactions-1",level:2},{value:"Type Definition",id:"type-definition",level:2},{value:"Signing Transactions",id:"signing-transactions",level:3},{value:"<code>SIGN_MODE_DIRECT</code> (preferred)",id:"sign_mode_direct-preferred",level:4},{value:"<code>SIGN_MODE_LEGACY_AMINO_JSON</code>",id:"sign_mode_legacy_amino_json",level:4},{value:"Other Sign Modes",id:"other-sign-modes",level:4},{value:"<code>SIGN_MODE_DIRECT_AUX</code>",id:"sign_mode_direct_aux",level:4},{value:"<code>SIGN_MODE_TEXTUAL</code>",id:"sign_mode_textual",level:4},{value:"Custom Sign modes",id:"custom-sign-modes",level:4},{value:"Transaction Process",id:"transaction-process",level:2},{value:"Messages",id:"messages",level:3},{value:"Transaction Generation",id:"transaction-generation",level:3},{value:"Broadcasting the Transaction",id:"broadcasting-the-transaction",level:3},{value:"CLI",id:"cli",level:4},{value:"gRPC",id:"grpc",level:4},{value:"REST",id:"rest",level:4},{value:"CometBFT RPC",id:"cometbft-rpc",level:4}],d={toc:c},p="wrapper";function g(e){let{components:n,...a}=e;return(0,o.yg)(p,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"transactions"},"Transactions"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"Transactions")," are objects created by end-users to trigger state changes in the application.")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cosmos-sdk/0.47/learn/beginner/overview-app"},"Anatomy of a Cosmos SDK Application")))),(0,o.yg)("h2",{id:"transactions-1"},"Transactions"),(0,o.yg)("p",null,"Transactions are comprised of metadata held in ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/context"},"contexts")," and ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/messages-and-queries"},(0,o.yg)("inlineCode",{parentName:"a"},"sdk.Msg"),"s")," that trigger state changes within a module through the module's Protobuf ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/msg-services"},(0,o.yg)("inlineCode",{parentName:"a"},"Msg")," service"),"."),(0,o.yg)("p",null,"When users want to interact with an application and make state changes (e.g. sending coins), they create transactions. Each of a transaction's ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," must be signed using the private key associated with the appropriate account(s), before the transaction is broadcasted to the network. A transaction must then be included in a block, validated, and approved by the network through the consensus process. To read more about the lifecycle of a transaction, click ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/beginner/tx-lifecycle"},"here"),"."),(0,o.yg)("h2",{id:"type-definition"},"Type Definition"),(0,o.yg)("p",null,"Transaction objects are Cosmos SDK types that implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," interface"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/types/tx_msg.go#L42-L50\n")),(0,o.yg)("p",null,"It contains the following methods:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"GetMsgs:")," unwraps the transaction and returns a list of contained ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s - one transaction may have one or multiple messages, which are defined by module developers.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"ValidateBasic:")," lightweight, ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/beginner/tx-lifecycle#types-of-checks"},(0,o.yg)("em",{parentName:"a"},"stateless"))," checks used by ABCI messages ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/baseapp#checktx"},(0,o.yg)("inlineCode",{parentName:"a"},"CheckTx"))," and ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/baseapp#delivertx"},(0,o.yg)("inlineCode",{parentName:"a"},"DeliverTx"))," to make sure transactions are not invalid. For example, the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/auth"},(0,o.yg)("inlineCode",{parentName:"a"},"auth"))," module's ",(0,o.yg)("inlineCode",{parentName:"p"},"ValidateBasic")," function checks that its transactions are signed by the correct number of signers and that the fees do not exceed what the user's maximum. When ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/baseapp#runtx"},(0,o.yg)("inlineCode",{parentName:"a"},"runTx"))," is checking a transaction created from the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/auth/spec"},(0,o.yg)("inlineCode",{parentName:"a"},"auth"))," module, it first runs ",(0,o.yg)("inlineCode",{parentName:"p"},"ValidateBasic")," on each message, then runs the ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," module AnteHandler which calls ",(0,o.yg)("inlineCode",{parentName:"p"},"ValidateBasic")," for the transaction itself."),(0,o.yg)("p",{parentName:"li"},"  :::note\nThis function is different from the deprecated ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/beginner/tx-lifecycle#ValidateBasic"},(0,o.yg)("inlineCode",{parentName:"a"},"ValidateBasic"))," methods, which was performing basic validity checks on messages only.\n:::"))),(0,o.yg)("p",null,"As a developer, you should rarely manipulate ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," directly, as ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," is really an intermediate type used for transaction generation. Instead, developers should prefer the ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder")," interface, which you can learn more about ",(0,o.yg)("a",{parentName:"p",href:"#transaction-generation"},"below"),"."),(0,o.yg)("h3",{id:"signing-transactions"},"Signing Transactions"),(0,o.yg)("p",null,"Every message in a transaction must be signed by the addresses specified by its ",(0,o.yg)("inlineCode",{parentName:"p"},"GetSigners"),". The Cosmos SDK currently allows signing transactions in two different ways."),(0,o.yg)("h4",{id:"sign_mode_direct-preferred"},(0,o.yg)("inlineCode",{parentName:"h4"},"SIGN_MODE_DIRECT")," (preferred)"),(0,o.yg)("p",null,"The most used implementation of the ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," interface is the Protobuf ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," message, which is used in ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L13-L26\n")),(0,o.yg)("p",null,"Because Protobuf serialization is not deterministic, the Cosmos SDK uses an additional ",(0,o.yg)("inlineCode",{parentName:"p"},"TxRaw")," type to denote the pinned bytes over which a transaction is signed. Any user can generate a valid ",(0,o.yg)("inlineCode",{parentName:"p"},"body")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"auth_info")," for a transaction, and serialize these two messages using Protobuf. ",(0,o.yg)("inlineCode",{parentName:"p"},"TxRaw")," then pins the user's exact binary representation of ",(0,o.yg)("inlineCode",{parentName:"p"},"body")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"auth_info"),", called respectively ",(0,o.yg)("inlineCode",{parentName:"p"},"body_bytes")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"auth_info_bytes"),". The document that is signed by all signers of the transaction is ",(0,o.yg)("inlineCode",{parentName:"p"},"SignDoc")," (deterministically serialized using ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/architecture/adr-027-deterministic-protobuf-serialization"},"ADR-027"),"):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L48-L65\n")),(0,o.yg)("p",null,"Once signed by all signers, the ",(0,o.yg)("inlineCode",{parentName:"p"},"body_bytes"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"auth_info_bytes")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"signatures")," are gathered into ",(0,o.yg)("inlineCode",{parentName:"p"},"TxRaw"),", whose serialized bytes are broadcasted over the network."),(0,o.yg)("h4",{id:"sign_mode_legacy_amino_json"},(0,o.yg)("inlineCode",{parentName:"h4"},"SIGN_MODE_LEGACY_AMINO_JSON")),(0,o.yg)("p",null,"The legacy implementation of the ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," interface is the ",(0,o.yg)("inlineCode",{parentName:"p"},"StdTx")," struct from ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/migrations/legacytx/stdtx.go#L83-L93\n")),(0,o.yg)("p",null,"The document signed by all signers is ",(0,o.yg)("inlineCode",{parentName:"p"},"StdSignDoc"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/migrations/legacytx/stdsign.go#L38-L52\n")),(0,o.yg)("p",null,"which is encoded into bytes using Amino JSON. Once all signatures are gathered into ",(0,o.yg)("inlineCode",{parentName:"p"},"StdTx"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"StdTx")," is serialized using Amino JSON, and these bytes are broadcasted over the network."),(0,o.yg)("h4",{id:"other-sign-modes"},"Other Sign Modes"),(0,o.yg)("p",null,"The Cosmos SDK also provides a couple of other sign modes for particular use cases."),(0,o.yg)("h4",{id:"sign_mode_direct_aux"},(0,o.yg)("inlineCode",{parentName:"h4"},"SIGN_MODE_DIRECT_AUX")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX")," is a sign mode released in the Cosmos SDK v0.46 which targets transactions with multiple signers. Whereas ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," expects each signer to sign over both ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBody")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"AuthInfo")," (which includes all other signers' signer infos, i.e. their account sequence, public key and mode info), ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX")," allows N-1 signers to only sign over ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBody")," and ",(0,o.yg)("em",{parentName:"p"},"their own")," signer info. Morever, each auxiliary signer (i.e. a signer using ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX"),") doesn't\nneed to sign over the fees:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L67-L97\n")),(0,o.yg)("p",null,"The use case is a multi-signer transaction, where one of the signers is appointed to gather all signatures, broadcast the signature and pay for fees, and the others only care about the transaction body. This generally allows for a better multi-signing UX. If Alice, Bob and Charlie are part of a 3-signer transaction, then Alice and Bob can both use ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX")," to sign over the ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBody")," and their own signer info (no need an additional step to gather other signers' ones, like in ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),"), without specifying a fee in their SignDoc. Charlie can then gather both signatures from Alice and Bob, and\ncreate the final transaction by appending a fee. Note that the fee payer of the transaction (in our case Charlie) must sign over the fees, so must use ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_LEGACY_AMINO_JSON"),"."),(0,o.yg)("h4",{id:"sign_mode_textual"},(0,o.yg)("inlineCode",{parentName:"h4"},"SIGN_MODE_TEXTUAL")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," is a new sign mode for delivering a better signing experience on hardware wallets, it is currently still under implementation. If you wish to learn more, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/10701"},"ADR-050"),"."),(0,o.yg)("h4",{id:"custom-sign-modes"},"Custom Sign modes"),(0,o.yg)("p",null,"There is the the opportunity to add your own custom sign mode to the Cosmos-SDK.  While we can not accept the implementation of the sign mode to the repository, we can accept a pull request to add the custom signmode to the SignMode enum located ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/signing/v1beta1/signing.proto#L17"},"here")),(0,o.yg)("h2",{id:"transaction-process"},"Transaction Process"),(0,o.yg)("p",null,"The process of an end-user sending a transaction is:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"decide on the messages to put into the transaction,"),(0,o.yg)("li",{parentName:"ul"},"generate the transaction using the Cosmos SDK's ",(0,o.yg)("inlineCode",{parentName:"li"},"TxBuilder"),","),(0,o.yg)("li",{parentName:"ul"},"broadcast the transaction using one of the available interfaces.")),(0,o.yg)("p",null,"The next paragraphs will describe each of these components, in this order."),(0,o.yg)("h3",{id:"messages"},"Messages"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Module ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s are not to be confused with ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/abci/"},"ABCI Messages")," which define interactions between the CometBFT and application layers.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Messages")," (or ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s) are module-specific objects that trigger state transitions within the scope of the module they belong to. Module developers define the messages for their module by adding methods to the Protobuf ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/msg-services"},(0,o.yg)("inlineCode",{parentName:"a"},"Msg")," service"),", and also implement the corresponding ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgServer"),"."),(0,o.yg)("p",null,"Each ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s is related to exactly one Protobuf ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/msg-services"},(0,o.yg)("inlineCode",{parentName:"a"},"Msg")," service")," RPC, defined inside each module's ",(0,o.yg)("inlineCode",{parentName:"p"},"tx.proto")," file. A SDK app router automatically maps every ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," to a corresponding RPC. Protobuf generates a ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgServer")," interface for each module ",(0,o.yg)("inlineCode",{parentName:"p"},"Msg")," service, and the module developer needs to implement this interface.\nThis design puts more responsibility on module developers, allowing application developers to reuse common functionalities without having to implement state transition logic repetitively."),(0,o.yg)("p",null,"To learn more about Protobuf ",(0,o.yg)("inlineCode",{parentName:"p"},"Msg")," services and how to implement ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgServer"),", click ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/msg-services"},"here"),"."),(0,o.yg)("p",null,"While messages contain the information for state transition logic, a transaction's other metadata and relevant information are stored in the ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Context"),"."),(0,o.yg)("h3",{id:"transaction-generation"},"Transaction Generation"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder")," interface contains data closely related with the generation of transactions, which an end-user can freely set to generate the desired transaction:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx_config.go#L33-L50\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Msg"),"s, the array of ",(0,o.yg)("a",{parentName:"li",href:"#messages"},"messages")," included in the transaction."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"GasLimit"),", option chosen by the users for how to calculate how much gas they will need to pay."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Memo"),", a note or comment to send with the transaction."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"FeeAmount"),", the maximum amount the user is willing to pay in fees."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"TimeoutHeight"),", block height until which the transaction is valid."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Signatures"),", the array of signatures from all signers of the transaction.")),(0,o.yg)("p",null,"As there are currently two sign modes for signing transactions, there are also two implementations of ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/tx/builder.go#L18-L34"},"wrapper")," for creating transactions for ",(0,o.yg)("inlineCode",{parentName:"li"},"SIGN_MODE_DIRECT"),","),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/migrations/legacytx/stdtx_builder.go#L15-L21"},"StdTxBuilder")," for ",(0,o.yg)("inlineCode",{parentName:"li"},"SIGN_MODE_LEGACY_AMINO_JSON"),".")),(0,o.yg)("p",null,"However, the two implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder")," should be hidden away from end-users, as they should prefer using the overarching ",(0,o.yg)("inlineCode",{parentName:"p"},"TxConfig")," interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx_config.go#L22-L31\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TxConfig")," is an app-wide configuration for managing transactions. Most importantly, it holds the information about whether to sign each transaction with ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_LEGACY_AMINO_JSON"),". By calling ",(0,o.yg)("inlineCode",{parentName:"p"},"txBuilder := txConfig.NewTxBuilder()"),", a new ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder")," will be created with the appropriate sign mode."),(0,o.yg)("p",null,"Once ",(0,o.yg)("inlineCode",{parentName:"p"},"TxBuilder")," is correctly populated with the setters exposed above, ",(0,o.yg)("inlineCode",{parentName:"p"},"TxConfig")," will also take care of correctly encoding the bytes (again, either using ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"SIGN_MODE_LEGACY_AMINO_JSON"),"). Here's a pseudo-code snippet of how to generate and encode a transaction, using the ",(0,o.yg)("inlineCode",{parentName:"p"},"TxEncoder()")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"txBuilder := txConfig.NewTxBuilder()\ntxBuilder.SetMsgs(...) // and other setters on txBuilder\n\nbz, err := txConfig.TxEncoder()(txBuilder.GetTx())\n// bz are bytes to be broadcasted over the network\n")),(0,o.yg)("h3",{id:"broadcasting-the-transaction"},"Broadcasting the Transaction"),(0,o.yg)("p",null,"Once the transaction bytes are generated, there are currently three ways of broadcasting it."),(0,o.yg)("h4",{id:"cli"},"CLI"),(0,o.yg)("p",null,"Application developers create entry points to the application by creating a ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/cli"},"command-line interface"),", ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/grpc_rest"},"gRPC and/or REST interface"),", typically found in the application's ",(0,o.yg)("inlineCode",{parentName:"p"},"./cmd")," folder. These interfaces allow users to interact with the application through command-line."),(0,o.yg)("p",null,"For the ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/module-interfaces#cli"},"command-line interface"),", module developers create subcommands to add as children to the application top-level transaction command ",(0,o.yg)("inlineCode",{parentName:"p"},"TxCmd"),". CLI commands actually bundle all the steps of transaction processing into one simple command: creating messages, generating transactions and broadcasting. For concrete examples, see the ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/user/run-node/interact-node"},"Interacting with a Node")," section. An example transaction made using CLI looks like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx send $MY_VALIDATOR_ADDRESS $RECIPIENT 1000stake\n")),(0,o.yg)("h4",{id:"grpc"},"gRPC"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://grpc.io"},"gRPC")," is the main component for the Cosmos SDK's RPC layer. Its principal usage is in the context of modules' ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/query-services"},(0,o.yg)("inlineCode",{parentName:"a"},"Query")," services"),". However, the Cosmos SDK also exposes a few other module-agnostic gRPC services, one of them being the ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," service:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/service.proto\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Tx")," service exposes a handful of utility functions, such as simulating a transaction or querying a transaction, and also one method to broadcast transactions."),(0,o.yg)("p",null,"Examples of broadcasting and simulating a transaction are shown ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/user/run-node/txs#programmatically-with-go"},"here"),"."),(0,o.yg)("h4",{id:"rest"},"REST"),(0,o.yg)("p",null,"Each gRPC method has its corresponding REST endpoint, generated using ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/grpc-ecosystem/grpc-gateway"},"gRPC-gateway"),". Therefore, instead of using gRPC, you can also use HTTP to broadcast the same transaction, on the ",(0,o.yg)("inlineCode",{parentName:"p"},"POST /cosmos/tx/v1beta1/txs")," endpoint."),(0,o.yg)("p",null,"An example can be seen ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/user/run-node/txs#using-rest"},"here")),(0,o.yg)("h4",{id:"cometbft-rpc"},"CometBFT RPC"),(0,o.yg)("p",null,"The three methods presented above are actually higher abstractions over the CometBFT RPC ",(0,o.yg)("inlineCode",{parentName:"p"},"/broadcast_tx_{async,sync,commit}")," endpoints, documented ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/core/rpc"},"here"),". This means that you can use the CometBFT RPC endpoints directly to broadcast the transaction, if you wish so."))}g.isMDXComponent=!0}}]);