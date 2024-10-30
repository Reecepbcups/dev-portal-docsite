"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[11688],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const r={title:"Authorizations",sidebar_label:"Authorizations",sidebar_position:8,slug:"/apps/transfer/ics20-v1/authorizations"},o=void 0,l={unversionedId:"apps/transfer/ICS20-v1/authorizations",id:"version-v9.0.x/apps/transfer/ICS20-v1/authorizations",title:"Authorizations",description:"This document is relevant only for fungible token transfers over channels on v1 of the ICS-20 protocol.",source:"@site/ibc-go_versioned_docs/version-v9.0.x/02-apps/01-transfer/10-ICS20-v1/08-authorizations.md",sourceDirName:"02-apps/01-transfer/10-ICS20-v1",slug:"/apps/transfer/ics20-v1/authorizations",permalink:"/ibc-go/apps/transfer/ics20-v1/authorizations",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:8,frontMatter:{title:"Authorizations",sidebar_label:"Authorizations",sidebar_position:8,slug:"/apps/transfer/ics20-v1/authorizations"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/ibc-go/apps/transfer/ics20-v1/params"},next:{title:"Client",permalink:"/ibc-go/apps/transfer/ics20-v1/client"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"This document is relevant only for fungible token transfers over channels on v1 of the ICS-20 protocol.")),(0,i.yg)("h1",{id:"transferauthorization"},(0,i.yg)("inlineCode",{parentName:"h1"},"TransferAuthorization")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"TransferAuthorization")," implements the ",(0,i.yg)("inlineCode",{parentName:"p"},"Authorization")," interface for ",(0,i.yg)("inlineCode",{parentName:"p"},"ibc.applications.transfer.v1.MsgTransfer"),". It allows a granter to grant a grantee the privilege to submit ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgTransfer")," on its behalf. Please see the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/modules/authz"},"Cosmos SDK docs")," for more details on granting privileges via the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/authz")," module."),(0,i.yg)("p",null,"More specifically, the granter allows the grantee to transfer funds that belong to the granter over a specified channel."),(0,i.yg)("p",null,"For the specified channel, the granter must be able to specify a spend limit of a specific denomination they wish to allow the grantee to be able to transfer."),(0,i.yg)("p",null,"The granter may be able to specify the list of addresses that they allow to receive funds. If empty, then all addresses are allowed."),(0,i.yg)("p",null,"It takes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"a ",(0,i.yg)("inlineCode",{parentName:"li"},"SourcePort")," and a ",(0,i.yg)("inlineCode",{parentName:"li"},"SourceChannel")," which together comprise the unique transfer channel identifier over which authorized funds can be transferred."),(0,i.yg)("li",{parentName:"ul"},"a ",(0,i.yg)("inlineCode",{parentName:"li"},"SpendLimit")," that specifies the maximum amount of tokens the grantee can transfer. The ",(0,i.yg)("inlineCode",{parentName:"li"},"SpendLimit")," is updated as the tokens are transferred, unless the sentinel value of the maximum value for a 256-bit unsigned integer (i.e. 2^256 - 1) is used for the amount, in which case the ",(0,i.yg)("inlineCode",{parentName:"li"},"SpendLimit")," will not be updated (please be aware that using this sentinel value will grant the grantee the privilege to transfer ",(0,i.yg)("strong",{parentName:"li"},"all")," the tokens of a given denomination available at the granter's account). The helper function ",(0,i.yg)("inlineCode",{parentName:"li"},"UnboundedSpendLimit")," in the ",(0,i.yg)("inlineCode",{parentName:"li"},"types")," package of the ",(0,i.yg)("inlineCode",{parentName:"li"},"transfer")," module provides the sentinel value that can be used. This ",(0,i.yg)("inlineCode",{parentName:"li"},"SpendLimit")," may also be updated to increase or decrease the limit as the granter wishes."),(0,i.yg)("li",{parentName:"ul"},"an ",(0,i.yg)("inlineCode",{parentName:"li"},"AllowList")," list that specifies the list of addresses that are allowed to receive funds. If this list is empty, then all addresses are allowed to receive funds from the ",(0,i.yg)("inlineCode",{parentName:"li"},"TransferAuthorization"),"."),(0,i.yg)("li",{parentName:"ul"},"an ",(0,i.yg)("inlineCode",{parentName:"li"},"AllowedPacketData")," list that specifies the list of memo strings that are allowed to be included in the memo field of the packet. If this list is empty, then only an empty memo is allowed (a ",(0,i.yg)("inlineCode",{parentName:"li"},"memo")," field with non-empty content will be denied). If this list includes a single element equal to ",(0,i.yg)("inlineCode",{parentName:"li"},'"*"'),", then any content in ",(0,i.yg)("inlineCode",{parentName:"li"},"memo")," field will be allowed.")),(0,i.yg)("p",null,"Setting a ",(0,i.yg)("inlineCode",{parentName:"p"},"TransferAuthorization")," is expected to fail if:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the spend limit is nil"),(0,i.yg)("li",{parentName:"ul"},"the denomination of the spend limit is an invalid coin type"),(0,i.yg)("li",{parentName:"ul"},"the source port ID is invalid"),(0,i.yg)("li",{parentName:"ul"},"the source channel ID is invalid"),(0,i.yg)("li",{parentName:"ul"},"there are duplicate entries in the ",(0,i.yg)("inlineCode",{parentName:"li"},"AllowList")),(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"memo")," field is not allowed by ",(0,i.yg)("inlineCode",{parentName:"li"},"AllowedPacketData"))),(0,i.yg)("p",null,"Below is the ",(0,i.yg)("inlineCode",{parentName:"p"},"TransferAuthorization")," message:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func NewTransferAuthorization(allocations ...Allocation) *TransferAuthorization {\n  return &TransferAuthorization{\n    Allocations: allocations,\n  }\n}\n\ntype Allocation struct {\n  // the port on which the packet will be sent\n  SourcePort string \n  // the channel by which the packet will be sent\n  SourceChannel string \n  // spend limitation on the channel\n  SpendLimit sdk.Coins  \n  // allow list of receivers, an empty allow list permits any receiver address\n  AllowList []string \n  // allow list of memo strings, an empty list prohibits all memo strings;\n  // a list only with "*" permits any memo string\n  AllowedPacketData []string \n}\n')))}u.isMDXComponent=!0}}]);