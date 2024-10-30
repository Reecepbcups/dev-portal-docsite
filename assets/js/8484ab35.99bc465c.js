"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[64478],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?t.createElement(g,r(r({ref:n},u),{},{components:a})):t.createElement(g,r({ref:n},u))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62094:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=a(58168),o=(a(96540),a(15680));const s={sidebar_position:1},r="x/auth",i={unversionedId:"build/modules/auth/README",id:"version-0.47/build/modules/auth/README",title:"x/auth",description:"Abstract",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/modules/auth/README.md",sourceDirName:"build/modules/auth",slug:"/build/modules/auth/",permalink:"/cosmos-sdk/0.47/build/modules/auth/",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Module Summary",permalink:"/cosmos-sdk/0.47/build/modules/"},next:{title:"x/auth/vesting",permalink:"/cosmos-sdk/0.47/build/modules/auth/vesting"}},l={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Gas &amp; Fees",id:"gas--fees",level:3},{value:"State",id:"state",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Account Interface",id:"account-interface",level:4},{value:"Base Account",id:"base-account",level:5},{value:"Vesting Account",id:"vesting-account",level:3},{value:"AnteHandlers",id:"antehandlers",level:2},{value:"Decorators",id:"decorators",level:3},{value:"Keepers",id:"keepers",level:2},{value:"Account Keeper",id:"account-keeper",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:3},{value:"account",id:"account",level:4},{value:"accounts",id:"accounts-1",level:4},{value:"params",id:"params",level:4},{value:"Transactions",id:"transactions",level:3},{value:"<code>sign</code>",id:"sign",level:4},{value:"<code>sign-batch</code>",id:"sign-batch",level:4},{value:"<code>multi-sign</code>",id:"multi-sign",level:4},{value:"<code>multisign-batch</code>",id:"multisign-batch",level:4},{value:"<code>validate-signatures</code>",id:"validate-signatures",level:4},{value:"<code>broadcast</code>",id:"broadcast",level:4},{value:"<code>aux-to-fee</code>",id:"aux-to-fee",level:4},{value:"gRPC",id:"grpc",level:3},{value:"Account",id:"account-1",level:4},{value:"Accounts",id:"accounts-2",level:4},{value:"Params",id:"params-1",level:4},{value:"REST",id:"rest",level:3},{value:"Account",id:"account-2",level:4},{value:"Accounts",id:"accounts-3",level:4},{value:"Params",id:"params-2",level:4}],u={toc:c},p="wrapper";function d(e){let{components:n,...a}=e;return(0,o.yg)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"xauth"},(0,o.yg)("inlineCode",{parentName:"h1"},"x/auth")),(0,o.yg)("h2",{id:"abstract"},"Abstract"),(0,o.yg)("p",null,"This document specifies the auth module of the Cosmos SDK."),(0,o.yg)("p",null,"The auth module is responsible for specifying the base transaction and account types\nfor an application, since the SDK itself is agnostic to these particulars. It contains\nthe middlewares, where all basic transaction validity checks (signatures, nonces, auxiliary fields)\nare performed, and exposes the account keeper, which allows other modules to read, write, and modify accounts."),(0,o.yg)("p",null,"This module is used in the Cosmos Hub."),(0,o.yg)("h2",{id:"contents"},"Contents"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#gas--fees"},"Gas & Fees")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#state"},"State"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#accounts"},"Accounts")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#antehandlers"},"AnteHandlers")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#keepers"},"Keepers"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#account-keeper"},"Account Keeper")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#parameters"},"Parameters")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#client"},"Client"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#cli"},"CLI")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#grpc"},"gRPC")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#rest"},"REST"))))),(0,o.yg)("h2",{id:"concepts"},"Concepts"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," The auth module is different from the ",(0,o.yg)("a",{parentName:"p",href:"../modules/authz/"},"authz module"),"."),(0,o.yg)("p",null,"The differences are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"auth")," - authentication of accounts and transactions for Cosmos SDK applications and is responsible for specifying the base transaction and account types."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"authz")," - authorization for accounts to perform actions on behalf of other accounts and enables a granter to grant authorizations to a grantee that allows the grantee to execute messages on behalf of the granter.")),(0,o.yg)("h3",{id:"gas--fees"},"Gas & Fees"),(0,o.yg)("p",null,"Fees serve two purposes for an operator of the network."),(0,o.yg)("p",null,"Fees limit the growth of the state stored by every full node and allow for\ngeneral purpose censorship of transactions of little economic value. Fees\nare best suited as an anti-spam mechanism where validators are disinterested in\nthe use of the network and identities of users."),(0,o.yg)("p",null,"Fees are determined by the gas limits and gas prices transactions provide, where\n",(0,o.yg)("inlineCode",{parentName:"p"},"fees = ceil(gasLimit * gasPrices)"),". Txs incur gas costs for all state reads/writes,\nsignature verification, as well as costs proportional to the tx size. Operators\nshould set minimum gas prices when starting their nodes. They must set the unit\ncosts of gas in each token denomination they wish to support:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"simd start ... --minimum-gas-prices=0.00001stake;0.05photinos")),(0,o.yg)("p",null,"When adding transactions to mempool or gossipping transactions, validators check\nif the transaction's gas prices, which are determined by the provided fees, meet\nany of the validator's minimum gas prices. In other words, a transaction must\nprovide a fee of at least one denomination that matches a validator's minimum\ngas price."),(0,o.yg)("p",null,"CometBFT does not currently provide fee based mempool prioritization, and fee\nbased mempool filtering is local to node and not part of consensus. But with\nminimum gas prices set, such a mechanism could be implemented by node operators."),(0,o.yg)("p",null,"Because the market value for tokens will fluctuate, validators are expected to\ndynamically adjust their minimum gas prices to a level that would encourage the\nuse of the network.\t\t"),(0,o.yg)("h2",{id:"state"},"State"),(0,o.yg)("h3",{id:"accounts"},"Accounts"),(0,o.yg)("p",null,"Accounts contain authentication information for a uniquely identified external user of an SDK blockchain,\nincluding public key, address, and account number / sequence number for replay protection. For efficiency,\nsince account balances must also be fetched to pay fees, account structs also store the balance of a user\nas ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Coins"),"."),(0,o.yg)("p",null,"Accounts are exposed externally as an interface, and stored internally as\neither a base account or vesting account. Module clients wishing to add more\naccount types may do so."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"0x01 | Address -> ProtocolBuffer(account)"))),(0,o.yg)("h4",{id:"account-interface"},"Account Interface"),(0,o.yg)("p",null,"The account interface exposes methods to read and write standard account information.\nNote that all of these methods operate on an account struct conforming to the\ninterface - in order to write the account to the store, the account keeper will\nneed to be used."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// AccountI is an interface used to store coins at a given address within state.\n// It presumes a notion of sequence numbers for replay protection,\n// a notion of account numbers for replay protection for previously pruned accounts,\n// and a pubkey for authentication purposes.\n//\n// Many complex conditions can be used in the concrete struct which implements AccountI.\ntype AccountI interface {\n    proto.Message\n\n    GetAddress() sdk.AccAddress\n    SetAddress(sdk.AccAddress) error // errors if already set.\n\n    GetPubKey() crypto.PubKey // can return nil.\n    SetPubKey(crypto.PubKey) error\n\n    GetAccountNumber() uint64\n    SetAccountNumber(uint64) error\n\n    GetSequence() uint64\n    SetSequence(uint64) error\n\n    // Ensure that account implements stringer\n    String() string\n}\n")),(0,o.yg)("h5",{id:"base-account"},"Base Account"),(0,o.yg)("p",null,"A base account is the simplest and most common account type, which just stores all requisite\nfields directly in a struct."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"// BaseAccount defines a base account type. It contains all the necessary fields\n// for basic account functionality. Any custom account type should extend this\n// type for additional functionality (e.g. vesting).\nmessage BaseAccount {\n  string address = 1;\n  google.protobuf.Any pub_key = 2;\n  uint64 account_number = 3;\n  uint64 sequence       = 4;\n}\n")),(0,o.yg)("h3",{id:"vesting-account"},"Vesting Account"),(0,o.yg)("p",null,"See ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules/auth/vesting/"},"Vesting"),"."),(0,o.yg)("h2",{id:"antehandlers"},"AnteHandlers"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"x/auth")," module presently has no transaction handlers of its own, but does expose the special ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteHandler"),", used for performing basic validity checks on a transaction, such that it could be thrown out of the mempool.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteHandler")," can be seen as a set of decorators that check transactions within the current context, per ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-010-modular-antehandler.md"},"ADR 010"),"."),(0,o.yg)("p",null,"Note that the ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteHandler")," is called on both ",(0,o.yg)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"DeliverTx"),", as CometBFT proposers presently have the ability to include in their proposed block transactions which fail ",(0,o.yg)("inlineCode",{parentName:"p"},"CheckTx"),"."),(0,o.yg)("h3",{id:"decorators"},"Decorators"),(0,o.yg)("p",null,"The auth module provides ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteDecorator"),"s that are recursively chained together into a single ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteHandler")," in the following order:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"SetUpContextDecorator"),": Sets the ",(0,o.yg)("inlineCode",{parentName:"p"},"GasMeter")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Context")," and wraps the next ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteHandler")," with a defer clause to recover from any downstream ",(0,o.yg)("inlineCode",{parentName:"p"},"OutOfGas")," panics in the ",(0,o.yg)("inlineCode",{parentName:"p"},"AnteHandler")," chain to return an error with information on gas provided and gas used.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"RejectExtensionOptionsDecorator"),": Rejects all extension options which can optionally be included in protobuf transactions.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"MempoolFeeDecorator"),": Checks if the ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," fee is above local mempool ",(0,o.yg)("inlineCode",{parentName:"p"},"minFee")," parameter during ",(0,o.yg)("inlineCode",{parentName:"p"},"CheckTx"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"ValidateBasicDecorator"),": Calls ",(0,o.yg)("inlineCode",{parentName:"p"},"tx.ValidateBasic")," and returns any non-nil error.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"TxTimeoutHeightDecorator"),": Check for a ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," height timeout.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"ValidateMemoDecorator"),": Validates ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," memo with application parameters and returns any non-nil error.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"ConsumeGasTxSizeDecorator"),": Consumes gas proportional to the ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," size based on application parameters.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"DeductFeeDecorator"),": Deducts the ",(0,o.yg)("inlineCode",{parentName:"p"},"FeeAmount")," from first signer of the ",(0,o.yg)("inlineCode",{parentName:"p"},"tx"),". If the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/feegrant")," module is enabled and a fee granter is set, it deducts fees from the fee granter account.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"SetPubKeyDecorator"),": Sets the pubkey from a ",(0,o.yg)("inlineCode",{parentName:"p"},"tx"),"'s signers that does not already have its corresponding pubkey saved in the state machine and in the current context.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"ValidateSigCountDecorator"),": Validates the number of signatures in ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," based on app-parameters.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"SigGasConsumeDecorator"),": Consumes parameter-defined amount of gas for each signature. This requires pubkeys to be set in context for all signers as part of ",(0,o.yg)("inlineCode",{parentName:"p"},"SetPubKeyDecorator"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"SigVerificationDecorator"),": Verifies all signatures are valid. This requires pubkeys to be set in context for all signers as part of ",(0,o.yg)("inlineCode",{parentName:"p"},"SetPubKeyDecorator"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"IncrementSequenceDecorator"),": Increments the account sequence for each signer to prevent replay attacks."))),(0,o.yg)("h2",{id:"keepers"},"Keepers"),(0,o.yg)("p",null,"The auth module only exposes one keeper, the account keeper, which can be used to read and write accounts."),(0,o.yg)("h3",{id:"account-keeper"},"Account Keeper"),(0,o.yg)("p",null,"Presently only one fully-permissioned account keeper is exposed, which has the ability to both read and write\nall fields of all accounts, and to iterate over all stored accounts."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// AccountKeeperI is the interface contract that x/auth's keeper implements.\ntype AccountKeeperI interface {\n    // Return a new account with the next account number and the specified address. Does not save the new account to the store.\n    NewAccountWithAddress(sdk.Context, sdk.AccAddress) types.AccountI\n\n    // Return a new account with the next account number. Does not save the new account to the store.\n    NewAccount(sdk.Context, types.AccountI) types.AccountI\n\n    // Check if an account exists in the store.\n    HasAccount(sdk.Context, sdk.AccAddress) bool\n\n    // Retrieve an account from the store.\n    GetAccount(sdk.Context, sdk.AccAddress) types.AccountI\n\n    // Set an account in the store.\n    SetAccount(sdk.Context, types.AccountI)\n\n    // Remove an account from the store.\n    RemoveAccount(sdk.Context, types.AccountI)\n\n    // Iterate over all accounts, calling the provided function. Stop iteration when it returns true.\n    IterateAccounts(sdk.Context, func(types.AccountI) bool)\n\n    // Fetch the public key of an account at a specified address\n    GetPubKey(sdk.Context, sdk.AccAddress) (crypto.PubKey, error)\n\n    // Fetch the sequence of an account at a specified address.\n    GetSequence(sdk.Context, sdk.AccAddress) (uint64, error)\n\n    // Fetch the next account number, and increment the internal counter.\n    NextAccountNumber(sdk.Context) uint64\n}\n")),(0,o.yg)("h2",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,"The auth module contains the following parameters:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Key"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Example"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"MaxMemoCharacters"),(0,o.yg)("td",{parentName:"tr",align:null},"uint64"),(0,o.yg)("td",{parentName:"tr",align:null},"256")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"TxSigLimit"),(0,o.yg)("td",{parentName:"tr",align:null},"uint64"),(0,o.yg)("td",{parentName:"tr",align:null},"7")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"TxSizeCostPerByte"),(0,o.yg)("td",{parentName:"tr",align:null},"uint64"),(0,o.yg)("td",{parentName:"tr",align:null},"10")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"SigVerifyCostED25519"),(0,o.yg)("td",{parentName:"tr",align:null},"uint64"),(0,o.yg)("td",{parentName:"tr",align:null},"590")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"SigVerifyCostSecp256k1"),(0,o.yg)("td",{parentName:"tr",align:null},"uint64"),(0,o.yg)("td",{parentName:"tr",align:null},"1000")))),(0,o.yg)("h2",{id:"client"},"Client"),(0,o.yg)("h3",{id:"cli"},"CLI"),(0,o.yg)("p",null,"A user can query and interact with the ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," module using the CLI."),(0,o.yg)("h3",{id:"query"},"Query"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," state."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth --help\n")),(0,o.yg)("h4",{id:"account"},"account"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"account")," command allow users to query for an account by it's address."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth account [address] [flags]\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth account cosmos1...\n")),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"'@type': /cosmos.auth.v1beta1.BaseAccount\naccount_number: \"0\"\naddress: cosmos1zwg6tpl8aw4rawv8sgag9086lpw5hv33u5ctr2\npub_key:\n  '@type': /cosmos.crypto.secp256k1.PubKey\n  key: ApDrE38zZdd7wLmFS9YmqO684y5DG6fjZ4rVeihF/AQD\nsequence: \"1\"\n")),(0,o.yg)("h4",{id:"accounts-1"},"accounts"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"accounts")," command allow users to query all the available accounts."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth accounts [flags]\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth accounts\n")),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'accounts:\n- \'@type\': /cosmos.auth.v1beta1.BaseAccount\n  account_number: "0"\n  address: cosmos1zwg6tpl8aw4rawv8sgag9086lpw5hv33u5ctr2\n  pub_key:\n    \'@type\': /cosmos.crypto.secp256k1.PubKey\n    key: ApDrE38zZdd7wLmFS9YmqO684y5DG6fjZ4rVeihF/AQD\n  sequence: "1"\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "8"\n    address: cosmos1yl6hdjhmkf37639730gffanpzndzdpmhwlkfhr\n    pub_key: null\n    sequence: "0"\n  name: transfer\n  permissions:\n  - minter\n  - burner\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "4"\n    address: cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh\n    pub_key: null\n    sequence: "0"\n  name: bonded_tokens_pool\n  permissions:\n  - burner\n  - staking\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "5"\n    address: cosmos1tygms3xhhs3yv487phx3dw4a95jn7t7lpm470r\n    pub_key: null\n    sequence: "0"\n  name: not_bonded_tokens_pool\n  permissions:\n  - burner\n  - staking\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "6"\n    address: cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn\n    pub_key: null\n    sequence: "0"\n  name: gov\n  permissions:\n  - burner\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "3"\n    address: cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl\n    pub_key: null\n    sequence: "0"\n  name: distribution\n  permissions: []\n- \'@type\': /cosmos.auth.v1beta1.BaseAccount\n  account_number: "1"\n  address: cosmos147k3r7v2tvwqhcmaxcfql7j8rmkrlsemxshd3j\n  pub_key: null\n  sequence: "0"\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "7"\n    address: cosmos1m3h30wlvsf8llruxtpukdvsy0km2kum8g38c8q\n    pub_key: null\n    sequence: "0"\n  name: mint\n  permissions:\n  - minter\n- \'@type\': /cosmos.auth.v1beta1.ModuleAccount\n  base_account:\n    account_number: "2"\n    address: cosmos17xpfvakm2amg962yls6f84z3kell8c5lserqta\n    pub_key: null\n    sequence: "0"\n  name: fee_collector\n  permissions: []\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.yg)("h4",{id:"params"},"params"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"params")," command allow users to query the current auth parameters."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth params [flags]\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd query auth params\n")),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'max_memo_characters: "256"\nsig_verify_cost_ed25519: "590"\nsig_verify_cost_secp256k1: "1000"\ntx_sig_limit: "7"\ntx_size_cost_per_byte: "10"\n')),(0,o.yg)("h3",{id:"transactions"},"Transactions"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," module supports transactions commands to help you with signing and more. Compared to other modules you can access directly the ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," module transactions commands using the only ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," command."),(0,o.yg)("p",null,"Use directly the ",(0,o.yg)("inlineCode",{parentName:"p"},"--help")," flag to get more information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"tx")," command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx --help\n")),(0,o.yg)("h4",{id:"sign"},(0,o.yg)("inlineCode",{parentName:"h4"},"sign")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"sign")," command allows users to sign transactions that was generated offline."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx sign tx.json --from $ALICE > tx.signed.json\n")),(0,o.yg)("p",null,"The result is a signed transaction that can be broadcasted to the network thanks to the broadcast command."),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"sign")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx sign --help"),"."),(0,o.yg)("h4",{id:"sign-batch"},(0,o.yg)("inlineCode",{parentName:"h4"},"sign-batch")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"sign-batch")," command allows users to sign multiples offline generated transactions.\nThe transactions can be in one file, with one tx per line, or in multiple files."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx sign txs.json --from $ALICE > tx.signed.json\n")),(0,o.yg)("p",null,"or"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx sign tx1.json tx2.json tx3.json --from $ALICE > tx.signed.json\n")),(0,o.yg)("p",null,"The result is multiples signed transactions. For combining the signed transactions into one transactions, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"--append")," flag."),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"sign-batch")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx sign-batch --help"),"."),(0,o.yg)("h4",{id:"multi-sign"},(0,o.yg)("inlineCode",{parentName:"h4"},"multi-sign")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"multi-sign")," command allows users to sign transactions that was generated offline by a multisig account."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx multisign transaction.json k1k2k3 k1sig.json k2sig.json k3sig.json\n")),(0,o.yg)("p",null,"Where ",(0,o.yg)("inlineCode",{parentName:"p"},"k1k2k3")," is the multisig account address, ",(0,o.yg)("inlineCode",{parentName:"p"},"k1sig.json")," is the signature of the first signer, ",(0,o.yg)("inlineCode",{parentName:"p"},"k2sig.json")," is the signature of the second signer, and ",(0,o.yg)("inlineCode",{parentName:"p"},"k3sig.json")," is the signature of the third signer."),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"multi-sign")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx multi-sign --help"),"."),(0,o.yg)("h4",{id:"multisign-batch"},(0,o.yg)("inlineCode",{parentName:"h4"},"multisign-batch")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"multisign-batch")," works the same way as ",(0,o.yg)("inlineCode",{parentName:"p"},"sign-batch"),", but for multisig accounts.\nWith the difference that the ",(0,o.yg)("inlineCode",{parentName:"p"},"multisign-batch")," command requires all transactions to be in one file, and the ",(0,o.yg)("inlineCode",{parentName:"p"},"--append")," flag does not exist."),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"multisign-batch")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx multisign-batch --help"),"."),(0,o.yg)("h4",{id:"validate-signatures"},(0,o.yg)("inlineCode",{parentName:"h4"},"validate-signatures")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"validate-signatures")," command allows users to validate the signatures of a signed transaction."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ simd tx validate-signatures tx.signed.json\nSigners:\n  0: cosmos1l6vsqhh7rnwsyr2kyz3jjg3qduaz8gwgyl8275\n\nSignatures:\n  0: cosmos1l6vsqhh7rnwsyr2kyz3jjg3qduaz8gwgyl8275                      [OK]\n")),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"validate-signatures")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx validate-signatures --help"),"."),(0,o.yg)("h4",{id:"broadcast"},(0,o.yg)("inlineCode",{parentName:"h4"},"broadcast")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"broadcast")," command allows users to broadcast a signed transaction to the network."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd tx broadcast tx.signed.json\n")),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"broadcast")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx broadcast --help"),"."),(0,o.yg)("h4",{id:"aux-to-fee"},(0,o.yg)("inlineCode",{parentName:"h4"},"aux-to-fee")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"aux-to-fee")," comamnds includes the aux signer data in the tx, broadcast the tx, and sends the tip amount to the broadcaster.\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/tips"},"Learn more about tip transaction"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# simd tx bank send <from> <to> <amount> --aux (optional: --tip <tipAmt> --tipper <tipper>)\nsimd tx aux-to-fee tx.aux.signed.json\n")),(0,o.yg)("p",null,"More information about the ",(0,o.yg)("inlineCode",{parentName:"p"},"aux-to-fee")," command can be found running ",(0,o.yg)("inlineCode",{parentName:"p"},"simd tx aux-to-fee --help"),"."),(0,o.yg)("h3",{id:"grpc"},"gRPC"),(0,o.yg)("p",null,"A user can query the ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," module using gRPC endpoints."),(0,o.yg)("h4",{id:"account-1"},"Account"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"account")," endpoint allow users to query for an account by it's address."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cosmos.auth.v1beta1.Query/Account\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n    -d \'{"address":"cosmos1.."}\' \\\n    localhost:9090 \\\n    cosmos.auth.v1beta1.Query/Account\n')),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "account":{\n    "@type":"/cosmos.auth.v1beta1.BaseAccount",\n    "address":"cosmos1zwg6tpl8aw4rawv8sgag9086lpw5hv33u5ctr2",\n    "pubKey":{\n      "@type":"/cosmos.crypto.secp256k1.PubKey",\n      "key":"ApDrE38zZdd7wLmFS9YmqO684y5DG6fjZ4rVeihF/AQD"\n    },\n    "sequence":"1"\n  }\n}\n')),(0,o.yg)("h4",{id:"accounts-2"},"Accounts"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"accounts")," endpoint allow users to query all the available accounts."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cosmos.auth.v1beta1.Query/Accounts\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext \\\n    localhost:9090 \\\n    cosmos.auth.v1beta1.Query/Accounts\n")),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'{\n   "accounts":[\n      {\n         "@type":"/cosmos.auth.v1beta1.BaseAccount",\n         "address":"cosmos1zwg6tpl8aw4rawv8sgag9086lpw5hv33u5ctr2",\n         "pubKey":{\n            "@type":"/cosmos.crypto.secp256k1.PubKey",\n            "key":"ApDrE38zZdd7wLmFS9YmqO684y5DG6fjZ4rVeihF/AQD"\n         },\n         "sequence":"1"\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos1yl6hdjhmkf37639730gffanpzndzdpmhwlkfhr",\n            "accountNumber":"8"\n         },\n         "name":"transfer",\n         "permissions":[\n            "minter",\n            "burner"\n         ]\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos1fl48vsnmsdzcv85q5d2q4z5ajdha8yu34mf0eh",\n            "accountNumber":"4"\n         },\n         "name":"bonded_tokens_pool",\n         "permissions":[\n            "burner",\n            "staking"\n         ]\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos1tygms3xhhs3yv487phx3dw4a95jn7t7lpm470r",\n            "accountNumber":"5"\n         },\n         "name":"not_bonded_tokens_pool",\n         "permissions":[\n            "burner",\n            "staking"\n         ]\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn",\n            "accountNumber":"6"\n         },\n         "name":"gov",\n         "permissions":[\n            "burner"\n         ]\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos1jv65s3grqf6v6jl3dp4t6c9t9rk99cd88lyufl",\n            "accountNumber":"3"\n         },\n         "name":"distribution"\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.BaseAccount",\n         "accountNumber":"1",\n         "address":"cosmos147k3r7v2tvwqhcmaxcfql7j8rmkrlsemxshd3j"\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos1m3h30wlvsf8llruxtpukdvsy0km2kum8g38c8q",\n            "accountNumber":"7"\n         },\n         "name":"mint",\n         "permissions":[\n            "minter"\n         ]\n      },\n      {\n         "@type":"/cosmos.auth.v1beta1.ModuleAccount",\n         "baseAccount":{\n            "address":"cosmos17xpfvakm2amg962yls6f84z3kell8c5lserqta",\n            "accountNumber":"2"\n         },\n         "name":"fee_collector"\n      }\n   ],\n   "pagination":{\n      "total":"9"\n   }\n}\n')),(0,o.yg)("h4",{id:"params-1"},"Params"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"params")," endpoint allow users to query the current auth parameters."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cosmos.auth.v1beta1.Query/Params\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext \\\n    localhost:9090 \\\n    cosmos.auth.v1beta1.Query/Params\n")),(0,o.yg)("p",null,"Example Output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "params": {\n    "maxMemoCharacters": "256",\n    "txSigLimit": "7",\n    "txSizeCostPerByte": "10",\n    "sigVerifyCostEd25519": "590",\n    "sigVerifyCostSecp256k1": "1000"\n  }\n}\n')),(0,o.yg)("h3",{id:"rest"},"REST"),(0,o.yg)("p",null,"A user can query the ",(0,o.yg)("inlineCode",{parentName:"p"},"auth")," module using REST endpoints."),(0,o.yg)("h4",{id:"account-2"},"Account"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"account")," endpoint allow users to query for an account by it's address."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"/cosmos/auth/v1beta1/account?address={address}\n")),(0,o.yg)("h4",{id:"accounts-3"},"Accounts"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"accounts")," endpoint allow users to query all the available accounts."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"/cosmos/auth/v1beta1/accounts\n")),(0,o.yg)("h4",{id:"params-2"},"Params"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"params")," endpoint allow users to query the current auth parameters."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"/cosmos/auth/v1beta1/params\n")))}d.isMDXComponent=!0}}]);