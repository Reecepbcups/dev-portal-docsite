"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[2193],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||g[u]||r;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(58168),a=(n(96540),n(15680));const r={},s="ADR 27: Add support for Wasm based light client",o={unversionedId:"architecture/adr-027-ibc-wasm",id:"version-v6.3.x/architecture/adr-027-ibc-wasm",title:"ADR 27: Add support for Wasm based light client",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v6.3.x/architecture/adr-027-ibc-wasm.md",sourceDirName:"architecture",slug:"/architecture/adr-027-ibc-wasm",permalink:"/ibc-go/v6.3.x/architecture/adr-027-ibc-wasm",draft:!1,tags:[],version:"v6.3.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 026: IBC Client Recovery Mechanisms",permalink:"/ibc-go/v6.3.x/architecture/adr-026-ibc-client-recovery-mechanisms"},next:{title:"Overview",permalink:"/ibc-go/v6.3.x/apps/transfer/overview"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"How light client proxy works?",id:"how-light-client-proxy-works",level:3},{value:"Global Wasm VM variable",id:"global-wasm-vm-variable",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3}],d={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-27-add-support-for-wasm-based-light-client"},"ADR 27: Add support for Wasm based light client"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"26/11/2020: Initial Draft"),(0,a.yg)("li",{parentName:"ul"},"26/05/2023: Update after 02-client refactor and re-implementation by Strangelove"),(0,a.yg)("li",{parentName:"ul"},"13/12/2023: Update after upstreaming of module to ibc-go")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Accepted and applied in v0.1.0 of 08-wasm")),(0,a.yg)("h2",{id:"abstract"},"Abstract"),(0,a.yg)("p",null,"In the Cosmos SDK light clients are currently hardcoded in Go. This makes upgrading existing IBC light clients or\nadding support for new light client a multi step process involving on-chain governance which is time-consuming."),(0,a.yg)("p",null,"To remedy this, we are proposing a Wasm VM to host light client bytecode, which allows easier upgrading of\nexisting IBC light clients as well as adding support for new IBC light clients without requiring a code release and\ncorresponding hard-fork event."),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"Currently in ibc-go light clients are defined as part of the codebase and are implemented as modules under\n",(0,a.yg)("inlineCode",{parentName:"p"},"modules/light-clients"),". Adding support for new light clients or updating an existing light client in the event\nof a security issue or consensus update is a multi-step process which is both time-consuming and error-prone.\nIn order to enable new IBC light client implementations it is necessary to modify the codebase of ibc-go (if the light\nclient is part of its codebase), re-build chains' binaries, pass a governance proposal and validators upgrade their nodes."),(0,a.yg)("p",null,"Another problem stemming from the above process is that if a chain wants to upgrade its own consensus, it will\nneed to convince every chain or hub connected to it to upgrade its light client in order to stay connected. Due\nto the time-consuming process required to upgrade a light client, a chain with lots of connections needs to be\ndisconnected for quite some time after upgrading its consensus, which can be very expensive in terms of time and effort."),(0,a.yg)("p",null,"We are proposing simplifying this workflow by integrating a Wasm light client module that makes adding support for\nnew light clients a simple governance-gated transaction. The light client bytecode, written in Wasm-compilable Rust,\nruns inside a Wasm VM. The Wasm light client submodule exposes a proxy light client interface that routes incoming\nmessages to the appropriate handler function, inside the Wasm VM for execution."),(0,a.yg)("p",null,"With the Wasm light client module, anybody can add new IBC light client in the form of Wasm bytecode (provided they are\nable to submit the governance proposal transaction and that it passes) as well as instantiate clients using any created\nclient type. This allows any chain to update its own light client in other chains without going through the steps outlined above."),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("p",null,"We decided to implement the Wasm light client module as a light client proxy that will interface with the actual light client\nuploaded as Wasm bytecode. To enable usage of the Wasm light client module, users need to add it to the list of allowed clients\nby updating the ",(0,a.yg)("inlineCode",{parentName:"p"},"AllowedClients")," parameter in the 02-client submodule of core IBC."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"params := clientKeeper.GetParams(ctx)\nparams.AllowedClients = append(params.AllowedClients, exported.Wasm)\nclientKeeper.SetParams(ctx, params)\n")),(0,a.yg)("p",null,"Adding a new light client contract is governance-gated. To upload a new light client users need to submit\na ",(0,a.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules/gov#proposals"},"governance v1 proposal")," that contains the ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.Msg")," for storing\nthe Wasm contract's bytecode. The required message is ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," and the bytecode is provided in the field ",(0,a.yg)("inlineCode",{parentName:"p"},"wasm_byte_code"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"// MsgStoreCode defines the request type for the StoreCode rpc.\nmessage MsgStoreCode {\n  // signer address\n  string signer = 1;\n  // wasm byte code of light client contract. It can be raw or gzip compressed\n  bytes wasm_byte_code = 2;\n}\n")),(0,a.yg)("p",null,"The RPC handler processing ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgStoreCode")," will make sure that the signer of the message matches the address of authority allowed to\nsubmit this message (which is normally the address of the governance module)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// StoreCode defines a rpc handler method for MsgStoreCode\nfunc (k Keeper) StoreCode(goCtx context.Context, msg *types.MsgStoreCode) (*types.MsgStoreCodeResponse, error) {\n  if k.GetAuthority() != msg.Signer {\n    return nil, errorsmod.Wrapf(ibcerrors.ErrUnauthorized, "expected %s, got %s", k.GetAuthority(), msg.Signer)\n  }\n\n  ctx := sdk.UnwrapSDKContext(goCtx)\n  checksum, err := k.storeWasmCode(ctx, msg.WasmByteCode, ibcwasm.GetVM().StoreCode)\n  if err != nil {\n    return nil, errorsmod.Wrap(err, "failed to store wasm bytecode")\n  }\n\n  emitStoreWasmCodeEvent(ctx, checksum)\n\n  return &types.MsgStoreCodeResponse{\n    Checksum: checksum,\n  }, nil\n}\n')),(0,a.yg)("p",null,"The contract's bytecode is not stored in state (it is actually unnecessary and wasteful to store it, since\nthe Wasm VM already stores it and can be queried back, if needed). The checksum is simply the hash of the bytecode\nof the contract and it is stored in state in an entry with key ",(0,a.yg)("inlineCode",{parentName:"p"},"checksums")," that contains the checksums for the bytecodes that have been stored."),(0,a.yg)("h3",{id:"how-light-client-proxy-works"},"How light client proxy works?"),(0,a.yg)("p",null,"The light client proxy behind the scenes will call a CosmWasm smart contract instance with incoming arguments serialized\nin JSON format with appropriate environment information. Data returned by the smart contract is deserialized and\nreturned to the caller."),(0,a.yg)("p",null,"Consider the example of the ",(0,a.yg)("inlineCode",{parentName:"p"},"VerifyClientMessage")," function of ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," interface. Incoming arguments are\npackaged inside a payload object that is then JSON serialized and passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"queryContract"),", which executes ",(0,a.yg)("inlineCode",{parentName:"p"},"WasmVm.Query"),"\nand returns the slice of bytes returned by the smart contract. This data is deserialized and passed as return argument."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'type QueryMsg struct {\n  Status               *StatusMsg               `json:"status,omitempty"`\n  ExportMetadata       *ExportMetadataMsg       `json:"export_metadata,omitempty"`\n  TimestampAtHeight    *TimestampAtHeightMsg    `json:"timestamp_at_height,omitempty"`\n  VerifyClientMessage  *VerifyClientMessageMsg  `json:"verify_client_message,omitempty"`\n  CheckForMisbehaviour *CheckForMisbehaviourMsg `json:"check_for_misbehaviour,omitempty"`\n}\n\ntype verifyClientMessageMsg struct {\n  ClientMessage *ClientMessage `json:"client_message"`\n}\n\n// VerifyClientMessage must verify a ClientMessage. \n// A ClientMessage could be a Header, Misbehaviour, or batch update.\n// It must handle each type of ClientMessage appropriately. \n// Calls to CheckForMisbehaviour, UpdateSta\xe5te, and UpdateStateOnMisbehaviour\n// will assume that the content of the ClientMessage has been verified\n// and can be trusted. An error should be returned\n// if the ClientMessage fails to verify.\nfunc (cs ClientState) VerifyClientMessage(\n  ctx sdk.Context,\n  _ codec.BinaryCodec,\n  clientStore storetypes.KVStore,\n  clientMsg exported.ClientMessage\n) error {\n  clientMessage, ok := clientMsg.(*ClientMessage)\n  if !ok {\n    return errorsmod.Wrapf(ibcerrors.ErrInvalidType, "expected type: %T, got: %T", &ClientMessage{}, clientMsg)\n  }\n\n  payload := QueryMsg{\n    VerifyClientMessage: &VerifyClientMessageMsg{ClientMessage: clientMessage.Data},\n  }\n  _, err := wasmQuery[EmptyResult](ctx, clientStore, &cs, payload)\n  return err\n}\n')),(0,a.yg)("h3",{id:"global-wasm-vm-variable"},"Global Wasm VM variable"),(0,a.yg)("p",null,"The 08-wasm keeper structure keeps a reference to the Wasm VM instantiated in the keeper constructor function. The keeper uses\nthe Wasm VM to store the bytecode of light client contracts. However, the Wasm VM is also needed in the 08-wasm implementations of\nsome of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," interface functions to initialise a contract, execute calls on the contract and query the contract. Since\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," functions do not have access to the 08-wasm keeper, then it has been decided to keep a global pointer variable that\npoints to the same instance as the one in the 08-wasm keeper. This global pointer variable is then used in the implementations of\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," functions. "),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Adding support for new light client or upgrading existing light client is way easier than before and only requires single transaction instead of a hard-fork."),(0,a.yg)("li",{parentName:"ul"},"Improves maintainability of ibc-go, since no change in codebase is required to support new client or upgrade it."),(0,a.yg)("li",{parentName:"ul"},"The existence of support for Rust dependencies in light clients which may not exist in Go.")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Light clients written in Rust need to be written in a subset of Rust which could compile in Wasm."),(0,a.yg)("li",{parentName:"ul"},"Introspecting light client code is difficult as only compiled bytecode exists in the blockchain.")))}g.isMDXComponent=!0}}]);