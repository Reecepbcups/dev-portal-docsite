"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[26155],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(58168),r=(n(96540),n(15680));const a={},s="ADR 011: ICS-20 transfer state entry for total amount of tokens in escrow",i={unversionedId:"architecture/adr-011-transfer-total-escrow-state-entry",id:"version-v7.8.x/architecture/adr-011-transfer-total-escrow-state-entry",title:"ADR 011: ICS-20 transfer state entry for total amount of tokens in escrow",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v7.8.x/architecture/adr-011-transfer-total-escrow-state-entry.md",sourceDirName:"architecture",slug:"/architecture/adr-011-transfer-total-escrow-state-entry",permalink:"/ibc-go/v7.8.x/architecture/adr-011-transfer-total-escrow-state-entry",draft:!1,tags:[],version:"v7.8.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 010: IBC light clients as SDK modules",permalink:"/ibc-go/v7.8.x/architecture/adr-010-light-clients-as-sdk-modules"},next:{title:"ADR 015: IBC Packet Receiver",permalink:"/ibc-go/v7.8.x/architecture/adr-015-ibc-packet-receiver"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"State entry denom -&gt; amount",id:"state-entry-denom---amount",level:3},{value:"Panic if amount is negative",id:"panic-if-amount-is-negative",level:3},{value:"Delete state entry if amount is zero",id:"delete-state-entry-if-amount-is-zero",level:3},{value:"Bundle escrow/unescrow with setting state entry",id:"bundle-escrowunescrow-with-setting-state-entry",level:3},{value:"gRPC query endpoint and CLI to retrieve amount",id:"grpc-query-endpoint-and-cli-to-retrieve-amount",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-011-ics-20-transfer-state-entry-for-total-amount-of-tokens-in-escrow"},"ADR 011: ICS-20 transfer state entry for total amount of tokens in escrow"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2023-05-24: Initial draft")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Accepted and applied in v7.1 of ibc-go"),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"Every ICS-20 transfer channel has its own escrow bank account. This account is used to lock tokens that are transferred out of a chain that acts as the source of the tokens (i.e. when the tokens being transferred have not returned to the originating chain). This design makes it easy to query the balance of the escrow accounts and find out the total amount of tokens in escrow in a particular channel. However, there are use cases where it would be useful to determine the total escrowed amount of a given denomination across all channels where those tokens have been transferred out."),(0,r.yg)("p",null,"For example: assuming that there are three channels between Cosmos Hub to Osmosis and 10 ATOM have been transferred from the Cosmos Hub to Osmosis on each of those channels, then we would like to know that 30 ATOM have been transferred (i.e. are locked in the escrow accounts of each channel) without needing to iterate over each escrow account to add up the balances of each."),(0,r.yg)("p",null,"For a sample use case where this feature would be useful, please refer to Osmosis' rate limiting use case described in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/issues/2664"},"#2664"),"."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("h3",{id:"state-entry-denom---amount"},"State entry denom -> amount"),(0,r.yg)("p",null,"The total amount of tokens in escrow (across all transfer channels) for a given denomination is stored in state in an entry keyed by the denomination: ",(0,r.yg)("inlineCode",{parentName:"p"},"totalEscrowForDenom/{denom}"),"."),(0,r.yg)("h3",{id:"panic-if-amount-is-negative"},"Panic if amount is negative"),(0,r.yg)("p",null,"If a negative amount is ever attempted to be stored, then the keeper function will panic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'if coin.Amount.IsNegative() {\n  panic(fmt.Sprintf("amount cannot be negative: %s", coin.Amount))\n}\n')),(0,r.yg)("h3",{id:"delete-state-entry-if-amount-is-zero"},"Delete state entry if amount is zero"),(0,r.yg)("p",null,"When setting the amount for a particular denomination, the value might be zero if all tokens that were transferred out of the chain have been transferred back. If this happens, then the state entry for this particular denomination will be deleted, since Cosmos SDK's ",(0,r.yg)("inlineCode",{parentName:"p"},"x/bank")," module prunes any non-zero balances:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"if coin.Amount.IsZero() {\n  store.Delete(key) // delete the key since Cosmos SDK x/bank module will prune any non-zero balances\n  return\n}\n")),(0,r.yg)("h3",{id:"bundle-escrowunescrow-with-setting-state-entry"},"Bundle escrow/unescrow with setting state entry"),(0,r.yg)("p",null,"Two new functions are implemented that bundle together the operations of escrowing/unescrowing and setting the total escrow amount in state, since these operations need to be executed together. "),(0,r.yg)("p",null,"For escrowing tokens:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"// escrowToken will send the given token from the provided sender to the escrow address. It will also\n// update the total escrowed amount by adding the escrowed token to the current total escrow.\nfunc (k Keeper) escrowToken(ctx sdk.Context, sender, escrowAddress sdk.AccAddress, token sdk.Coin) error {\n  if err := k.bankKeeper.SendCoins(ctx, sender, escrowAddress, sdk.NewCoins(token)); err != nil {\n    // failure is expected for insufficient balances\n    return err\n  }\n\n  // track the total amount in escrow keyed by denomination to allow for efficient iteration\n  currentTotalEscrow := k.GetTotalEscrowForDenom(ctx, token.GetDenom())\n  newTotalEscrow := currentTotalEscrow.Add(token)\n  k.SetTotalEscrowForDenom(ctx, newTotalEscrow)\n\n  return nil\n}\n")),(0,r.yg)("p",null,"For unescrowing tokens:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'// unescrowToken will send the given token from the escrow address to the provided receiver. It will also\n// update the total escrow by deducting the unescrowed token from the current total escrow.\nfunc (k Keeper) unescrowToken(ctx sdk.Context, escrowAddress, receiver sdk.AccAddress, token sdk.Coin) error {\n  if err := k.bankKeeper.SendCoins(ctx, escrowAddress, receiver, sdk.NewCoins(token)); err != nil {\n    // NOTE: this error is only expected to occur given an unexpected bug or a malicious\n    // counterparty module. The bug may occur in bank or any part of the code that allows\n    // the escrow address to be drained. A malicious counterparty module could drain the\n    // escrow address by allowing more tokens to be sent back then were escrowed.\n    return errorsmod.Wrap(err, "unable to unescrow tokens, this may be caused by a malicious counterparty module or a bug: please open an issue on counterparty module")\n  }\n\n  // track the total amount in escrow keyed by denomination to allow for efficient iteration\n  currentTotalEscrow := k.GetTotalEscrowForDenom(ctx, token.GetDenom())\n  newTotalEscrow := currentTotalEscrow.Sub(token)\n  k.SetTotalEscrowForDenom(ctx, newTotalEscrow)\n\n  return nil\n}\n')),(0,r.yg)("p",null,"When tokens need to be escrowed in ",(0,r.yg)("inlineCode",{parentName:"p"},"sendTransfer"),", then ",(0,r.yg)("inlineCode",{parentName:"p"},"escrowToken")," is called; when tokens need to be unescrowed on execution of the ",(0,r.yg)("inlineCode",{parentName:"p"},"OnRecvPacket"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"OnTimeoutPacket")," callbacks, then ",(0,r.yg)("inlineCode",{parentName:"p"},"unescrowToken")," is called."),(0,r.yg)("h3",{id:"grpc-query-endpoint-and-cli-to-retrieve-amount"},"gRPC query endpoint and CLI to retrieve amount"),(0,r.yg)("p",null,"A gRPC query endpoint is added so that it is possible to retrieve the total amount for a given denomination:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-proto"},'// TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom.\nrpc TotalEscrowForDenom(QueryTotalEscrowForDenomRequest) returns (QueryTotalEscrowForDenomResponse) {\n  option (google.api.http).get = "/ibc/apps/transfer/v1/denoms/{denom=**}/total_escrow";\n}\n\n// QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method.\nmessage QueryTotalEscrowForDenomRequest {\n  string denom = 1;\n}\n\n// QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method.\nmessage QueryTotalEscrowForDenomResponse {\n  cosmos.base.v1beta1.Coin amount = 1 [(gogoproto.nullable) = false];\n}\n')),(0,r.yg)("p",null,"And a CLI query is also available to retrieve the total amount via the command line:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"query ibc-transfer total-escrow [denom]\n")),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Possibility to retrieve the total amount of a particular denomination in escrow across all transfer channels without iteration.")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("p",null,"No notable consequences"),(0,r.yg)("h3",{id:"neutral"},"Neutral"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A new entry is added to state for every denomination that is transferred out of the chain.")),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("p",null,"Issues:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/2664"},"#2664"))),(0,r.yg)("p",null,"PRs:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3019"},"#3019")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3558"},"#3558"))))}p.isMDXComponent=!0}}]);