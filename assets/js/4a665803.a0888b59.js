"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[31782],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},77877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(58168),i=(t(96540),t(15680));const r={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/integration"},o="Integration",p={unversionedId:"ibc/integration",id:"version-v7.8.x/ibc/integration",title:"Integration",description:"Learn how to integrate IBC to your application and send data packets to other chains.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/01-ibc/02-integration.md",sourceDirName:"01-ibc",slug:"/ibc/integration",permalink:"/ibc-go/v7.8.x/ibc/integration",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/ibc-go/v7.8.x/ibc/overview"},next:{title:"IBC Applications",permalink:"/ibc-go/v7.8.x/ibc/apps/apps"}},l={},s=[{value:"Integrating the IBC module",id:"integrating-the-ibc-module",level:2},{value:"Module <code>BasicManager</code> and <code>ModuleAccount</code> permissions",id:"module-basicmanager-and-moduleaccount-permissions",level:3},{value:"Integrating light clients",id:"integrating-light-clients",level:3},{value:"Application fields",id:"application-fields",level:3},{value:"Configure the <code>Keepers</code>",id:"configure-the-keepers",level:3},{value:"Register <code>Routers</code>",id:"register-routers",level:3},{value:"Module Managers",id:"module-managers",level:3},{value:"Application ABCI Ordering",id:"application-abci-ordering",level:3}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"integration"},"Integration"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Learn how to integrate IBC to your application and send data packets to other chains. ")),(0,i.yg)("p",null,"This document outlines the required steps to integrate and configure the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/main/modules/core"},"IBC\nmodule")," to your Cosmos SDK application and\nsend fungible token transfers to other chains."),(0,i.yg)("h2",{id:"integrating-the-ibc-module"},"Integrating the IBC module"),(0,i.yg)("p",null,"Integrating the IBC module to your SDK-based application is straightforward. The general changes can be summarized in the following steps:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add required modules to the ",(0,i.yg)("inlineCode",{parentName:"li"},"module.BasicManager")),(0,i.yg)("li",{parentName:"ul"},"Define additional ",(0,i.yg)("inlineCode",{parentName:"li"},"Keeper")," fields for the new modules on the ",(0,i.yg)("inlineCode",{parentName:"li"},"App")," type"),(0,i.yg)("li",{parentName:"ul"},"Add the module's ",(0,i.yg)("inlineCode",{parentName:"li"},"StoreKey"),"s and initialize their ",(0,i.yg)("inlineCode",{parentName:"li"},"Keeper"),"s"),(0,i.yg)("li",{parentName:"ul"},"Set up corresponding routers and routes for the ",(0,i.yg)("inlineCode",{parentName:"li"},"ibc")," module"),(0,i.yg)("li",{parentName:"ul"},"Add the modules to the module ",(0,i.yg)("inlineCode",{parentName:"li"},"Manager")),(0,i.yg)("li",{parentName:"ul"},"Add modules to ",(0,i.yg)("inlineCode",{parentName:"li"},"Begin/EndBlockers")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"InitGenesis")),(0,i.yg)("li",{parentName:"ul"},"Update the module ",(0,i.yg)("inlineCode",{parentName:"li"},"SimulationManager")," to enable simulations")),(0,i.yg)("h3",{id:"module-basicmanager-and-moduleaccount-permissions"},"Module ",(0,i.yg)("inlineCode",{parentName:"h3"},"BasicManager")," and ",(0,i.yg)("inlineCode",{parentName:"h3"},"ModuleAccount")," permissions"),(0,i.yg)("p",null,"The first step is to add the following modules to the ",(0,i.yg)("inlineCode",{parentName:"p"},"BasicManager"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"x/capability"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"x/ibc"),",\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"x/ibc-transfer"),". After that, we need to grant ",(0,i.yg)("inlineCode",{parentName:"p"},"Minter")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Burner")," permissions to\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"ibc-transfer")," ",(0,i.yg)("inlineCode",{parentName:"p"},"ModuleAccount")," to mint and burn relayed tokens."),(0,i.yg)("h3",{id:"integrating-light-clients"},"Integrating light clients"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note that from v7 onwards, all light clients have to be explicitly registered in a chain's app.go and follow the steps listed below.\nThis is in contrast to earlier versions of ibc-go when ",(0,i.yg)("inlineCode",{parentName:"p"},"07-tendermint")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"06-solomachine")," were added out of the box.")),(0,i.yg)("p",null,"All light clients must be registered with ",(0,i.yg)("inlineCode",{parentName:"p"},"module.BasicManager")," in a chain's app.go file."),(0,i.yg)("p",null,"The following code example shows how to register the existing ",(0,i.yg)("inlineCode",{parentName:"p"},"ibctm.AppModuleBasic{}")," light client implementation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},'\nimport (\n  ...\n+ ibctm "github.com/cosmos/ibc-go/v6/modules/light-clients/07-tendermint"\n  ...\n)\n\n// app.go\nvar (\n\n  ModuleBasics = module.NewBasicManager(\n    // ...\n    capability.AppModuleBasic{},\n    ibc.AppModuleBasic{},\n    transfer.AppModuleBasic{}, // i.e ibc-transfer module\n\n    // register light clients on IBC\n+   ibctm.AppModuleBasic{},\n  )\n\n  // module account permissions\n  maccPerms = map[string][]string{\n    // other module accounts permissions\n    // ...\n    ibctransfertypes.ModuleName:    {authtypes.Minter, authtypes.Burner},\n  }\n)\n')),(0,i.yg)("h3",{id:"application-fields"},"Application fields"),(0,i.yg)("p",null,"Then, we need to register the ",(0,i.yg)("inlineCode",{parentName:"p"},"Keepers")," as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\ntype App struct {\n  // baseapp, keys and subspaces definitions\n\n  // other keepers\n  // ...\n  IBCKeeper        *ibckeeper.Keeper // IBC Keeper must be a pointer in the app, so we can SetRouter on it correctly\n  TransferKeeper   ibctransferkeeper.Keeper // for cross-chain fungible token transfers\n\n  // make scoped keepers public for test purposes\n  ScopedIBCKeeper      capabilitykeeper.ScopedKeeper\n  ScopedTransferKeeper capabilitykeeper.ScopedKeeper\n\n  /// ...\n  /// module and simulation manager definitions\n}\n")),(0,i.yg)("h3",{id:"configure-the-keepers"},"Configure the ",(0,i.yg)("inlineCode",{parentName:"h3"},"Keepers")),(0,i.yg)("p",null,"During initialization, besides initializing the IBC ",(0,i.yg)("inlineCode",{parentName:"p"},"Keepers")," (for the ",(0,i.yg)("inlineCode",{parentName:"p"},"x/ibc"),", and\n",(0,i.yg)("inlineCode",{parentName:"p"},"x/ibc-transfer")," modules), we need to grant specific capabilities through the capability module\n",(0,i.yg)("inlineCode",{parentName:"p"},"ScopedKeepers")," so that we can authenticate the object-capability permissions for each of the IBC\nchannels."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func NewApp(...args) *App {\n  // define codecs and baseapp\n\n  // add capability keeper and ScopeToModule for ibc module\n  app.CapabilityKeeper = capabilitykeeper.NewKeeper(appCodec, keys[capabilitytypes.StoreKey], memKeys[capabilitytypes.MemStoreKey])\n\n  // grant capabilities for the ibc and ibc-transfer modules\n  scopedIBCKeeper := app.CapabilityKeeper.ScopeToModule(ibcexported.ModuleName)\n  scopedTransferKeeper := app.CapabilityKeeper.ScopeToModule(ibctransfertypes.ModuleName)\n\n  // ... other modules keepers\n\n  // Create IBC Keeper\n  app.IBCKeeper = ibckeeper.NewKeeper(\n    appCodec, keys[ibcexported.StoreKey], app.GetSubspace(ibcexported.ModuleName), app.StakingKeeper, app.UpgradeKeeper, scopedIBCKeeper,\n  )\n\n  // Create Transfer Keepers\n  app.TransferKeeper = ibctransferkeeper.NewKeeper(\n    appCodec, keys[ibctransfertypes.StoreKey], app.GetSubspace(ibctransfertypes.ModuleName),\n    app.IBCKeeper.ChannelKeeper, app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n    app.AccountKeeper, app.BankKeeper, scopedTransferKeeper,\n  )\n  transferModule := transfer.NewAppModule(app.TransferKeeper)\n\n  // .. continues\n}\n")),(0,i.yg)("h3",{id:"register-routers"},"Register ",(0,i.yg)("inlineCode",{parentName:"h3"},"Routers")),(0,i.yg)("p",null,"IBC needs to know which module is bound to which port so that it can route packets to the\nappropriate module and call the appropriate callbacks. The port to module name mapping is handled by\nIBC's port ",(0,i.yg)("inlineCode",{parentName:"p"},"Keeper"),". However, the mapping from module name to the relevant callbacks is accomplished\nby the port\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/router.go"},(0,i.yg)("inlineCode",{parentName:"a"},"Router"))," on the\nIBC module."),(0,i.yg)("p",null,"Adding the module routes allows the IBC handler to call the appropriate callback when processing a\nchannel handshake or a packet."),(0,i.yg)("p",null,"Currently, a ",(0,i.yg)("inlineCode",{parentName:"p"},"Router")," is static so it must be initialized and set correctly on app initialization.\nOnce the ",(0,i.yg)("inlineCode",{parentName:"p"},"Router")," has been set, no new routes can be added."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\nfunc NewApp(...args) *App {\n  // .. continuation from above\n\n  // Create static IBC router, add ibc-transfer module route, then set and seal it\n  ibcRouter := port.NewRouter()\n  ibcRouter.AddRoute(ibctransfertypes.ModuleName, transferModule)\n  // Setting Router will finalize all routes by sealing router\n  // No more routes can be added\n  app.IBCKeeper.SetRouter(ibcRouter)\n\n  // .. continues\n")),(0,i.yg)("h3",{id:"module-managers"},"Module Managers"),(0,i.yg)("p",null,"In order to use IBC, we need to add the new modules to the module ",(0,i.yg)("inlineCode",{parentName:"p"},"Manager")," and to the ",(0,i.yg)("inlineCode",{parentName:"p"},"SimulationManager")," in case your application supports ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/build/building-modules/14-simulator.md"},"simulations"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\nfunc NewApp(...args) *App {\n  // .. continuation from above\n\n  app.mm = module.NewManager(\n    // other modules\n    // ...\n    capability.NewAppModule(appCodec, *app.CapabilityKeeper),\n    ibc.NewAppModule(app.IBCKeeper),\n    transferModule,\n  )\n\n  // ...\n\n  app.sm = module.NewSimulationManager(\n    // other modules\n    // ...\n    capability.NewAppModule(appCodec, *app.CapabilityKeeper),\n    ibc.NewAppModule(app.IBCKeeper),\n    transferModule,\n  )\n\n  // .. continues\n")),(0,i.yg)("h3",{id:"application-abci-ordering"},"Application ABCI Ordering"),(0,i.yg)("p",null,"One addition from IBC is the concept of ",(0,i.yg)("inlineCode",{parentName:"p"},"HistoricalEntries")," which are stored on the staking module.\nEach entry contains the historical information for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Header")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ValidatorSet")," of this chain which is stored\nat each height during the ",(0,i.yg)("inlineCode",{parentName:"p"},"BeginBlock")," call. The historical info is required to introspect the\npast historical info at any given height in order to verify the light client ",(0,i.yg)("inlineCode",{parentName:"p"},"ConsensusState")," during the\nconnection handshake."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\nfunc NewApp(...args) *App {\n  // .. continuation from above\n\n  // add staking and ibc modules to BeginBlockers\n  app.mm.SetOrderBeginBlockers(\n    // other modules ...\n    stakingtypes.ModuleName, ibcexported.ModuleName,\n  )\n\n  // ...\n\n  // NOTE: Capability module must occur first so that it can initialize any capabilities\n  // so that other modules that want to create or claim capabilities afterwards in InitChain\n  // can do so safely.\n  app.mm.SetOrderInitGenesis(\n    capabilitytypes.ModuleName,\n    // other modules ...\n    ibcexported.ModuleName, ibctransfertypes.ModuleName,\n  )\n\n  // .. continues\n")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"IMPORTANT"),": The capability module ",(0,i.yg)("strong",{parentName:"p"},"must")," be declared first in ",(0,i.yg)("inlineCode",{parentName:"p"},"SetOrderInitGenesis"))),(0,i.yg)("p",null,"That's it! You have now wired up the IBC module and are now able to send fungible tokens across\ndifferent chains. If you want to have a broader view of the changes take a look into the SDK's\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/testing/simapp/app.go"},(0,i.yg)("inlineCode",{parentName:"a"},"SimApp")),"."))}u.isMDXComponent=!0}}]);