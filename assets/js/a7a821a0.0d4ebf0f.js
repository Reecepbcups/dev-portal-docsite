"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45860],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"IBC-Go v7 to v7.1",sidebar_label:"IBC-Go v7 to v7.1",sidebar_position:9,slug:"/migrations/v7-to-v7_1"},i="Migrating from v7 to v7.1",l={unversionedId:"migrations/v7-to-v7_1",id:"version-v7.8.x/migrations/v7-to-v7_1",title:"IBC-Go v7 to v7.1",description:"This guide provides instructions for migrating to version v7.1.0 of ibc-go.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/05-migrations/09-v7-to-v7_1.md",sourceDirName:"05-migrations",slug:"/migrations/v7-to-v7_1",permalink:"/ibc-go/v7.8.x/migrations/v7-to-v7_1",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:9,frontMatter:{title:"IBC-Go v7 to v7.1",sidebar_label:"IBC-Go v7 to v7.1",sidebar_position:9,slug:"/migrations/v7-to-v7_1"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v6 to v7",permalink:"/ibc-go/v7.8.x/migrations/v6-to-v7"},next:{title:"IBC-Go v7.2 to v7.3",permalink:"/ibc-go/v7.8.x/migrations/v7_2-to-v7_3"}},s={},p=[{value:"Chains",id:"chains",level:2},{value:"09-localhost migration",id:"09-localhost-migration",level:3},{value:"Transfer migration",id:"transfer-migration",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}],c={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"migrating-from-v7-to-v71"},"Migrating from v7 to v7.1"),(0,a.yg)("p",null,"This guide provides instructions for migrating to version ",(0,a.yg)("inlineCode",{parentName:"p"},"v7.1.0")," of ibc-go."),(0,a.yg)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#migrating-from-v7-to-v71"},"Migrating from v7 to v7.1"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#chains"},"Chains")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#ibc-apps"},"IBC Apps")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#relayers"},"Relayers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#ibc-light-clients"},"IBC Light Clients"))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated on major version releases."),(0,a.yg)("h2",{id:"chains"},"Chains"),(0,a.yg)("h3",{id:"09-localhost-migration"},"09-localhost migration"),(0,a.yg)("p",null,"In the previous release of ibc-go, the localhost ",(0,a.yg)("inlineCode",{parentName:"p"},"v1")," light client module was deprecated and removed. The ibc-go ",(0,a.yg)("inlineCode",{parentName:"p"},"v7.1.0")," release introduces ",(0,a.yg)("inlineCode",{parentName:"p"},"v2")," of the 09-localhost light client module."),(0,a.yg)("p",null,"An ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/core/module.go#L127-L145"},"automatic migration handler")," is configured in the core IBC module to set the localhost ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," and sentinel ",(0,a.yg)("inlineCode",{parentName:"p"},"ConnectionEnd")," in state."),(0,a.yg)("p",null,"In order to use the 09-localhost client chains must update the ",(0,a.yg)("inlineCode",{parentName:"p"},"AllowedClients")," parameter in the 02-client submodule of core IBC. This can be configured directly in the application upgrade handler or alternatively updated via the legacy governance parameter change proposal.\nWe ",(0,a.yg)("strong",{parentName:"p"},"strongly")," recommend chains to perform this action so that intra-ledger communication can be carried out using the familiar IBC interfaces."),(0,a.yg)("p",null,"See the upgrade handler code sample provided below or ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/testing/simapp/upgrades/upgrades.go#L85"},"follow this link")," for the upgrade handler used by the ibc-go simapp."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func CreateV7LocalhostUpgradeHandler(\n  mm *module.Manager,\n  configurator module.Configurator,\n  clientKeeper clientkeeper.Keeper,\n) upgradetypes.UpgradeHandler {\n  return func(ctx sdk.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {\n    // explicitly update the IBC 02-client params, adding the localhost client type\n    params := clientKeeper.GetParams(ctx)\n    params.AllowedClients = append(params.AllowedClients, exported.Localhost)\n    clientKeeper.SetParams(ctx, params)\n\n    return mm.RunMigrations(ctx, configurator, vm)\n  }\n}\n")),(0,a.yg)("h3",{id:"transfer-migration"},"Transfer migration"),(0,a.yg)("p",null,"An ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/modules/apps/transfer/module.go#L111-L113"},"automatic migration handler")," is configured in the transfer module to set the total amount in escrow for all denominations of coins that have been sent out. For each denomination a state entry is added with the total amount of coins in escrow regardless of the channel from which they were transferred."),(0,a.yg)("h2",{id:"ibc-apps"},"IBC Apps"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")),(0,a.yg)("h2",{id:"relayers"},"Relayers"),(0,a.yg)("p",null,"The event attribute ",(0,a.yg)("inlineCode",{parentName:"p"},"packet_connection")," (",(0,a.yg)("inlineCode",{parentName:"p"},"connectiontypes.AttributeKeyConnection"),") has been deprecated.\nPlease use the ",(0,a.yg)("inlineCode",{parentName:"p"},"connection_id")," attribute (",(0,a.yg)("inlineCode",{parentName:"p"},"connectiontypes.AttributeKeyConnectionID"),") which is emitted by all channel events.\nOnly send packet, receive packet, write acknowledgement, and acknowledge packet events used ",(0,a.yg)("inlineCode",{parentName:"p"},"packet_connection")," previously."),(0,a.yg)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")))}m.isMDXComponent=!0}}]);