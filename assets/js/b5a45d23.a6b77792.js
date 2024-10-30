"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45825],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>w});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,w=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(w,o(o({ref:t},l),{},{components:r})):n.createElement(w,o({ref:t},l))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={title:"Integrating IBC middleware into a chain",sidebar_label:"Integrating IBC middleware into a chain",sidebar_position:3,slug:"/ibc/middleware/integration"},o="Integrating IBC middleware into a chain",d={unversionedId:"ibc/middleware/integration",id:"version-v9.0.x/ibc/middleware/integration",title:"Integrating IBC middleware into a chain",description:"Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains.",source:"@site/ibc-go_versioned_docs/version-v9.0.x/01-ibc/04-middleware/03-integration.md",sourceDirName:"01-ibc/04-middleware",slug:"/ibc/middleware/integration",permalink:"/ibc-go/ibc/middleware/integration",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:3,frontMatter:{title:"Integrating IBC middleware into a chain",sidebar_label:"Integrating IBC middleware into a chain",sidebar_position:3,slug:"/ibc/middleware/integration"},sidebar:"defaultSidebar",previous:{title:"Create a custom IBC middleware",permalink:"/ibc-go/ibc/middleware/develop"},next:{title:"Overview",permalink:"/ibc-go/ibc/upgrades/intro"}},s={},p=[{value:"Example integration",id:"example-integration",level:2}],l={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"integrating-ibc-middleware-into-a-chain"},"Integrating IBC middleware into a chain"),(0,a.yg)("p",null,"Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains."),(0,a.yg)("p",null,"If the middleware is maintaining its own state and/or processing SDK messages, then it should create and register its SDK module with the module manager in ",(0,a.yg)("inlineCode",{parentName:"p"},"app.go"),"."),(0,a.yg)("p",null,"All middleware must be connected to the IBC router and wrap over an underlying base IBC application. An IBC application may be wrapped by many layers of middleware, only the top layer middleware should be hooked to the IBC router, with all underlying middlewares and application getting wrapped by it."),(0,a.yg)("p",null,"The order of middleware ",(0,a.yg)("strong",{parentName:"p"},"matters"),", function calls from IBC to the application travel from top-level middleware to the bottom middleware and then to the application. Function calls from the application to IBC goes through the bottom middleware in order to the top middleware and then to core IBC handlers. Thus the same set of middleware put in different orders may produce different effects."),(0,a.yg)("h2",{id:"example-integration"},"Example integration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// app.go pseudocode\n\n// middleware 1 and middleware 3 are stateful middleware, \n// perhaps implementing separate sdk.Msg and Handlers\nmw1Keeper := mw1.NewKeeper(storeKey1, ..., ics4Wrapper: channelKeeper, ...) // in stack 1 & 3\n// middleware 2 is stateless\nmw3Keeper1 := mw3.NewKeeper(storeKey3,..., ics4Wrapper: mw1Keeper, ...) //  in stack 1\nmw3Keeper2 := mw3.NewKeeper(storeKey3,..., ics4Wrapper: channelKeeper, ...) //  in stack 2\n\n// Only create App Module **once** and register in app module\n// if the module maintains independent state and/or processes sdk.Msgs\napp.moduleManager = module.NewManager(\n  ...\n  mw1.NewAppModule(mw1Keeper),\n  mw3.NewAppModule(mw3Keeper1),\n  mw3.NewAppModule(mw3Keeper2),\n  transfer.NewAppModule(transferKeeper),\n  custom.NewAppModule(customKeeper)\n)\n\nscopedKeeperTransfer := capabilityKeeper.NewScopedKeeper("transfer")\nscopedKeeperCustom1 := capabilityKeeper.NewScopedKeeper("custom1")\nscopedKeeperCustom2 := capabilityKeeper.NewScopedKeeper("custom2")\n\n// NOTE: IBC Modules may be initialized any number of times provided they use a separate\n// scopedKeeper and underlying port.\n\ncustomKeeper1 := custom.NewKeeper(..., scopedKeeperCustom1, ...)\ncustomKeeper2 := custom.NewKeeper(..., scopedKeeperCustom2, ...)\n\n// initialize base IBC applications\n// if you want to create two different stacks with the same base application,\n// they must be given different scopedKeepers and assigned different ports.\ntransferIBCModule := transfer.NewIBCModule(transferKeeper)\ncustomIBCModule1 := custom.NewIBCModule(customKeeper1, "portCustom1")\ncustomIBCModule2 := custom.NewIBCModule(customKeeper2, "portCustom2")\n\n// create IBC stacks by combining middleware with base application\n// NOTE: since middleware2 is stateless it does not require a Keeper\n// stack 1 contains mw1 -> mw3 -> transfer\nstack1 := mw1.NewIBCMiddleware(mw3.NewIBCMiddleware(transferIBCModule, mw3Keeper1), mw1Keeper)\n// stack 2 contains mw3 -> mw2 -> custom1\nstack2 := mw3.NewIBCMiddleware(mw2.NewIBCMiddleware(customIBCModule1), mw3Keeper2)\n// stack 3 contains mw2 -> mw1 -> custom2\nstack3 := mw2.NewIBCMiddleware(mw1.NewIBCMiddleware(customIBCModule2, mw1Keeper))\n\n// associate each stack with the moduleName provided by the underlying scopedKeeper\nibcRouter := porttypes.NewRouter()\nibcRouter.AddRoute("transfer", stack1)\nibcRouter.AddRoute("custom1", stack2)\nibcRouter.AddRoute("custom2", stack3)\napp.IBCKeeper.SetRouter(ibcRouter)\n')))}m.isMDXComponent=!0}}]);