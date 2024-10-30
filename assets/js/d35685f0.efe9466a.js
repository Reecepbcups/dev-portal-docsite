"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45846],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return t?r.createElement(u,s(s({ref:n},c),{},{components:t})):r.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},87296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const i={title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},s="Messages",o={unversionedId:"apps/transfer/messages",id:"version-v7.8.x/apps/transfer/messages",title:"Messages",description:"MsgTransfer",source:"@site/ibc-go_versioned_docs/version-v7.8.x/02-apps/01-transfer/04-messages.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/messages",permalink:"/ibc-go/v7.8.x/apps/transfer/messages",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:4,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},sidebar:"defaultSidebar",previous:{title:"State Transitions",permalink:"/ibc-go/v7.8.x/apps/transfer/state-transitions"},next:{title:"Events",permalink:"/ibc-go/v7.8.x/apps/transfer/events"}},l={},p=[{value:"<code>MsgTransfer</code>",id:"msgtransfer",level:2},{value:"Memo",id:"memo",level:3}],c={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"messages"},"Messages"),(0,a.yg)("h2",{id:"msgtransfer"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgTransfer")),(0,a.yg)("p",null,"A fungible token cross chain transfer is achieved by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"MsgTransfer"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type MsgTransfer struct {\n  SourcePort        string\n  SourceChannel     string\n  Token             sdk.Coin\n  Sender            string\n  Receiver          string\n  TimeoutHeight     ibcexported.Height\n  TimeoutTimestamp  uint64\n  Memo              string\n}\n")),(0,a.yg)("p",null,"This message is expected to fail if:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SourcePort")," is invalid (see ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SourceChannel")," is invalid (see ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Token")," is invalid (denom is invalid or amount is negative)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Token.Amount")," is not positive."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Token.Denom")," is not a valid IBC denomination as per ",(0,a.yg)("a",{parentName:"li",href:"/ibc-go/architecture/adr-001-coin-source-tracing"},"ADR 001 - Coin Source Tracing"),"."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Sender")," is empty."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Receiver")," is empty or contains more than 2048 bytes."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Memo")," contains more than 32768 bytes."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TimeoutHeight")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"TimeoutTimestamp")," are both zero.")),(0,a.yg)("p",null,"This message will send a fungible token to the counterparty chain represented by the counterparty Channel End connected to the Channel End with the identifiers ",(0,a.yg)("inlineCode",{parentName:"p"},"SourcePort")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"SourceChannel"),"."),(0,a.yg)("p",null,"The denomination provided for transfer should correspond to the same denomination represented on this chain. The prefixes will be added as necessary upon by the receiving chain."),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"Amount")," is set to the maximum value for a 256-bit unsigned integer (i.e. 2^256 - 1), then the whole balance of the corresponding denomination will be transferred. The helper function ",(0,a.yg)("inlineCode",{parentName:"p"},"UnboundedSpendLimit")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"types")," package of the ",(0,a.yg)("inlineCode",{parentName:"p"},"transfer")," module provides the sentinel value that can be used."),(0,a.yg)("h3",{id:"memo"},"Memo"),(0,a.yg)("p",null,"The memo field was added to allow applications and users to attach metadata to transfer packets. The field is optional and may be left empty. When it is used to attach metadata for a particular middleware, the memo field should be represented as a json object where different middlewares use different json keys."),(0,a.yg)("p",null,"For example, the following memo field is used by the ",(0,a.yg)("a",{parentName:"p",href:"/ibc-go/v7.8.x/middleware/callbacks/overview"},"callbacks middleware")," to attach a source callback to a transfer packet:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n')),(0,a.yg)("p",null,"You can find more information about other applications that use the memo field in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry/blob/master/_memo_keys/ICS20_memo_keys.json"},"chain registry"),"."))}d.isMDXComponent=!0}}]);