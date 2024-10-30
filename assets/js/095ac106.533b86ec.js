"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[282],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,p(p({ref:t},l),{},{components:n})):r.createElement(y,p({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const a={title:"Keeper",sidebar_label:"Keeper",sidebar_position:4,slug:"/ibc/apps/keeper"},p="Keeper",i={unversionedId:"ibc/apps/keeper",id:"version-v6.3.x/ibc/apps/keeper",title:"Keeper",description:"Learn how to implement the IBC Module keeper.",source:"@site/ibc-go_versioned_docs/version-v6.3.x/01-ibc/03-apps/04-keeper.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/keeper",permalink:"/ibc-go/v6.3.x/ibc/apps/keeper",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:4,frontMatter:{title:"Keeper",sidebar_label:"Keeper",sidebar_position:4,slug:"/ibc/apps/keeper"},sidebar:"defaultSidebar",previous:{title:"Bind ports",permalink:"/ibc-go/v6.3.x/ibc/apps/bindports"},next:{title:"Define packets and acks",permalink:"/ibc-go/v6.3.x/ibc/apps/packets_acks"}},c={},s=[],l={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"keeper"},"Keeper"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Learn how to implement the IBC Module keeper.")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/ibc-go/v6.3.x/ibc/overview"},"IBC Overview")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/ibc-go/v6.3.x/ibc/integration"},"IBC default integration")))),(0,o.yg)("p",null,"In the previous sections, on channel handshake callbacks and port binding in ",(0,o.yg)("inlineCode",{parentName:"p"},"InitGenesis"),", a reference was made to keeper methods that need to be implemented when creating a custom IBC module. Below is an overview of how to define an IBC module's keeper."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note that some code has been left out for clarity, to get a full code overview, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/keeper.go"},"the transfer module's keeper in the ibc-go repo"),".")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// Keeper defines the IBC app module keeper\ntype Keeper struct {\n    storeKey   sdk.StoreKey\n    cdc        codec.BinaryCodec\n    paramSpace paramtypes.Subspace\n\n    channelKeeper types.ChannelKeeper\n    portKeeper    types.PortKeeper\n    scopedKeeper  capabilitykeeper.ScopedKeeper\n\n    // ... additional according to custom logic\n}\n\n// NewKeeper creates a new IBC app module Keeper instance\nfunc NewKeeper(\n    // args\n) Keeper {\n    // ...\n\n    return Keeper{\n        cdc:           cdc,\n        storeKey:      key,\n        paramSpace:    paramSpace,\n\n        channelKeeper: channelKeeper,\n        portKeeper:    portKeeper,\n        scopedKeeper:  scopedKeeper,\n\n        // ... additional according to custom logic\n    }\n}\n\n// IsBound checks if the IBC app module is already bound to the desired port\nfunc (k Keeper) IsBound(ctx sdk.Context, portID string) bool {\n    _, ok := k.scopedKeeper.GetCapability(ctx, host.PortPath(portID))\n    return ok\n}\n\n// BindPort defines a wrapper function for the port Keeper's function in\n// order to expose it to module's InitGenesis function\nfunc (k Keeper) BindPort(ctx sdk.Context, portID string) error {\n    cap := k.portKeeper.BindPort(ctx, portID)\n    return k.ClaimCapability(ctx, cap, host.PortPath(portID))\n}\n\n// GetPort returns the portID for the IBC app module. Used in ExportGenesis\nfunc (k Keeper) GetPort(ctx sdk.Context) string {\n    store := ctx.KVStore(k.storeKey)\n    return string(store.Get(types.PortKey))\n}\n\n// SetPort sets the portID for the IBC app module. Used in InitGenesis\nfunc (k Keeper) SetPort(ctx sdk.Context, portID string) {\n    store := ctx.KVStore(k.storeKey)\n    store.Set(types.PortKey, []byte(portID))\n}\n\n// AuthenticateCapability wraps the scopedKeeper's AuthenticateCapability function\nfunc (k Keeper) AuthenticateCapability(ctx sdk.Context, cap *capabilitytypes.Capability, name string) bool {\n    return k.scopedKeeper.AuthenticateCapability(ctx, cap, name)\n}\n\n// ClaimCapability allows the IBC app module to claim a capability that core IBC\n// passes to it\nfunc (k Keeper) ClaimCapability(ctx sdk.Context, cap *capabilitytypes.Capability, name string) error {\n    return k.scopedKeeper.ClaimCapability(ctx, cap, name)\n}\n\n// ... additional according to custom logic\n")))}u.isMDXComponent=!0}}]);