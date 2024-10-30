"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[81318],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,u=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(u,s(s({ref:t},m),{},{components:n})):a.createElement(u,s({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=g;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(58168),i=(n(96540),n(15680));const o={title:"Integration",sidebar_label:"Integration",sidebar_position:3,slug:"/ibc/light-clients/wasm/integration"},s="Integration",r={unversionedId:"docs/light-clients/wasm/integration",id:"docs/light-clients/wasm/integration",title:"Integration",description:"Learn how to integrate the 08-wasm module in a chain binary and about the recommended approaches depending on whether the x/wasm module is already used in the chain. The following document only applies for Cosmos SDK chains.",source:"@site/ibc-go/docs/03-light-clients/04-wasm/03-integration.md",sourceDirName:"docs/03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/integration",permalink:"/ibc-go/next/ibc/light-clients/wasm/integration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:3,slug:"/ibc/light-clients/wasm/integration"},sidebar:"defaultSidebar",previous:{title:"Concepts",permalink:"/ibc-go/next/ibc/light-clients/wasm/concepts"},next:{title:"Messages",permalink:"/ibc-go/next/ibc/light-clients/wasm/messages"}},p={},l=[{value:"Importing the <code>08-wasm</code> module",id:"importing-the-08-wasm-module",level:2},{value:"<code>app.go</code> setup",id:"appgo-setup",level:2},{value:"Keeper instantiation",id:"keeper-instantiation",level:2},{value:"If <code>x/wasm</code> is present",id:"if-xwasm-is-present",level:3},{value:"If <code>x/wasm</code> is not present",id:"if-xwasm-is-not-present",level:3},{value:"Options",id:"options",level:3},{value:"<code>WithQueryPlugins</code>",id:"withqueryplugins",level:4},{value:"Updating <code>AllowedClients</code>",id:"updating-allowedclients",level:2},{value:"Adding the module to the store",id:"adding-the-module-to-the-store",level:2},{value:"Adding snapshot support",id:"adding-snapshot-support",level:2},{value:"Pin byte codes at start",id:"pin-byte-codes-at-start",level:2}],m={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"integration"},"Integration"),(0,i.yg)("p",null,"Learn how to integrate the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module in a chain binary and about the recommended approaches depending on whether the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm"},(0,i.yg)("inlineCode",{parentName:"a"},"x/wasm")," module")," is already used in the chain. The following document only applies for Cosmos SDK chains. "),(0,i.yg)("h2",{id:"importing-the-08-wasm-module"},"Importing the ",(0,i.yg)("inlineCode",{parentName:"h2"},"08-wasm")," module"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," has no stable releases yet. To use it, you need to import the git commit that contains the module with the compatible versions of ",(0,i.yg)("inlineCode",{parentName:"p"},"ibc-go")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"wasmvm"),". To do so, run the following command with the desired git commit in your project:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"go get github.com/cosmos/ibc-go/modules/light-clients/08-wasm@7ee2a2452b79d0bc8316dc622a1243afa058e8cb\n")),(0,i.yg)("p",null,"The following table shows the compatibility matrix between the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module, ",(0,i.yg)("inlineCode",{parentName:"p"},"ibc-go"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"wasmvm"),"."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"center"},(0,i.yg)("strong",{parentName:"th"},"Version")),(0,i.yg)("th",{parentName:"tr",align:"center"},(0,i.yg)("strong",{parentName:"th"},"Git commit to import")))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("inlineCode",{parentName:"td"},"v0.4.1+ibc-go-v8.4-wasmvm-v2.0")),(0,i.yg)("td",{parentName:"tr",align:"center"},"ccd4dc278e720be87418028026ebd93a80fa5ac0")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("inlineCode",{parentName:"td"},"v0.3.1+ibc-go-v7.4-wasmvm-v1.5")),(0,i.yg)("td",{parentName:"tr",align:"center"},"13c071f0b34d67342f0b7a8874d84d2e68b887e1")))),(0,i.yg)("h2",{id:"appgo-setup"},(0,i.yg)("inlineCode",{parentName:"h2"},"app.go")," setup"),(0,i.yg)("p",null,"The sample code below shows the relevant integration points in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," required to set up the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module in a chain binary. Since ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," is a light client module itself, please check out as well the section ",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/next/ibc/integration#integrating-light-clients"},"Integrating light clients")," for more information:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  cmtos "github.com/cometbft/cometbft/libs/os"\n\n  ibcwasm "github.com/cosmos/ibc-go/modules/light-clients/08-wasm"\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// Register the AppModule for the 08-wasm module\nModuleBasics = module.NewBasicManager(\n  ...\n  ibcwasm.AppModuleBasic{},\n  ...\n)\n\n// Add 08-wasm Keeper\ntype SimApp struct {\n  ...\n  WasmClientKeeper ibcwasmkeeper.Keeper\n  ...\n}\n\nfunc NewSimApp(\n  logger log.Logger,\n  db dbm.DB,\n  traceStore io.Writer,\n  loadLatest bool,\n  appOpts servertypes.AppOptions,\n  baseAppOptions ...func(*baseapp.BaseApp),\n) *SimApp {\n  ...\n  keys := sdk.NewKVStoreKeys(\n    ...\n    ibcwasmtypes.StoreKey,\n  )\n\n  // Instantiate 08-wasm\'s keeper\n  // This sample code uses a constructor function that\n  // accepts a pointer to an existing instance of Wasm VM.\n  // This is the recommended approach when the chain\n  // also uses `x/wasm`, and then the Wasm VM instance\n  // can be shared.\n  app.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n    appCodec,\n    runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n    app.IBCKeeper.ClientKeeper,\n    authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    wasmVM,\n    app.GRPCQueryRouter(),\n  )\n\n  wasmLightClientModule := wasm.NewLightClientModule(app.WasmClientKeeper)\n  app.IBCKeeper.ClientKeeper.AddRoute(ibcwasmtypes.ModuleName, &wasmLightClientModule)\n\n  app.ModuleManager = module.NewManager(\n    // SDK app modules\n    ...\n    ibcwasm.NewAppModule(app.WasmClientKeeper),\n  )\n  app.ModuleManager.SetOrderBeginBlockers(\n    ...\n    ibcwasmtypes.ModuleName,\n    ...\n  )\n  app.ModuleManager.SetOrderEndBlockers(\n    ...\n    ibcwasmtypes.ModuleName,\n    ...\n  )\n  genesisModuleOrder := []string{\n    ...\n    ibcwasmtypes.ModuleName,\n    ...\n  }\n  app.ModuleManager.SetOrderInitGenesis(genesisModuleOrder...)\n  app.ModuleManager.SetOrderExportGenesis(genesisModuleOrder...)\n  ...\n\n  // initialize BaseApp\n  app.SetInitChainer(app.InitChainer)\n  ...\n\n  // must be before Loading version\n  if manager := app.SnapshotManager(); manager != nil {\n    err := manager.RegisterExtensions(\n      ibcwasmkeeper.NewWasmSnapshotter(app.CommitMultiStore(), &app.WasmClientKeeper),\n    )\n    if err != nil {\n      panic(fmt.Errorf("failed to register snapshot extension: %s", err))\n    }\n  }\n  ...\n\n  if loadLatest {\n    ...\n\n    ctx := app.BaseApp.NewUncachedContext(true, cmtproto.Header{})\n\n    // Initialize pinned codes in wasmvm as they are not persisted there\n    if err := app.WasmClientKeeper.InitializePinnedCodes(ctx); err != nil {\n      cmtos.Exit(fmt.Sprintf("failed initialize pinned codes %s", err))\n    }\n  }\n}\n')),(0,i.yg)("h2",{id:"keeper-instantiation"},"Keeper instantiation"),(0,i.yg)("p",null,"When it comes to instantiating ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm"),"'s keeper, there are two recommended ways of doing it. Choosing one or the other will depend on whether the chain already integrates ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm"},(0,i.yg)("inlineCode",{parentName:"a"},"x/wasm"))," or not."),(0,i.yg)("h3",{id:"if-xwasm-is-present"},"If ",(0,i.yg)("inlineCode",{parentName:"h3"},"x/wasm")," is present"),(0,i.yg)("p",null,"If the chain where the module is integrated uses ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm")," then we recommend that both ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm")," share the same Wasm VM instance. Having two separate Wasm VM instances is still possible, but care should be taken to make sure that both instances do not share the directory when the VM stores blobs and various caches, otherwise unexpected behaviour is likely to happen (from ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm")," v0.51 and ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," v0.2.0+ibc-go-v8.3-wasmvm-v2.0 this will be forbidden anyway, since wasmvm v2.0.0 and above will not allow two different Wasm VM instances to shared the same data folder)."),(0,i.yg)("p",null,"In order to share the Wasm VM instance, please follow the guideline below. Please note that this requires ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm")," v0.41 or above."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Instantiate the Wasm VM in ",(0,i.yg)("inlineCode",{parentName:"li"},"app.go")," with the parameters of your choice."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/db93d7b6c7bb6f4a340d74b96a02cec885729b59/x/wasm/keeper/options.go#L21-L25"},"Create an ",(0,i.yg)("inlineCode",{parentName:"a"},"Option")," with this Wasm VM instance"),"."),(0,i.yg)("li",{parentName:"ul"},"Add the option created in the previous step to a slice and ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/db93d7b6c7bb6f4a340d74b96a02cec885729b59/x/wasm/keeper/keeper_cgo.go#L36"},"pass it to the ",(0,i.yg)("inlineCode",{parentName:"a"},"x/wasm NewKeeper")," constructor function"),"."),(0,i.yg)("li",{parentName:"ul"},"Pass the pointer to the Wasm VM instance to ",(0,i.yg)("inlineCode",{parentName:"li"},"08-wasm")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L39-L47"},(0,i.yg)("inlineCode",{parentName:"a"},"NewKeeperWithVM")," constructor function"),".")),(0,i.yg)("p",null,"The code to set this up would look something like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  wasmvm "github.com/CosmWasm/wasmvm/v2"\n  wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"\n  wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"\n\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// instantiate the Wasm VM with the chosen parameters\nwasmer, err := wasmvm.NewVM(\n  dataDir,\n  availableCapabilities,\n  contractMemoryLimit, // default of 32\n  contractDebugMode,\n  memoryCacheSize,\n)\nif err != nil {\n  panic(err)\n}\n\n// create an Option slice (or append to an existing one)\n// with the option to use a custom Wasm VM instance\nwasmOpts = []wasmkeeper.Option{\n  wasmkeeper.WithWasmEngine(wasmer),\n}\n\n// the keeper will use the provided Wasm VM instance,\n// instead of instantiating a new one\napp.WasmKeeper = wasmkeeper.NewKeeper(\n  appCodec,\n  keys[wasmtypes.StoreKey],\n  app.AccountKeeper,\n  app.BankKeeper,\n  app.StakingKeeper,\n  distrkeeper.NewQuerier(app.DistrKeeper),\n  app.IBCFeeKeeper, // ISC4 Wrapper: fee IBC middleware\n  app.IBCKeeper.ChannelKeeper,\n  &app.IBCKeeper.PortKeeper,\n  scopedWasmKeeper,\n  app.TransferKeeper,\n  app.MsgServiceRouter(),\n  app.GRPCQueryRouter(),\n  wasmDir,\n  wasmConfig,\n  availableCapabilities,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmOpts...,\n)\n\napp.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmer, // pass the Wasm VM instance to `08-wasm` keeper constructor\n  app.GRPCQueryRouter(),\n)\n...\n')),(0,i.yg)("h3",{id:"if-xwasm-is-not-present"},"If ",(0,i.yg)("inlineCode",{parentName:"h3"},"x/wasm")," is not present"),(0,i.yg)("p",null,"If the chain does not use ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm"},(0,i.yg)("inlineCode",{parentName:"a"},"x/wasm")),", even though it is still possible to use the method above from the previous section\n(e.g. instantiating a Wasm VM in app.go an pass it to 08-wasm's ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L39-L47"},(0,i.yg)("inlineCode",{parentName:"a"},"NewKeeperWithVM")," constructor function"),", since there would be no need in this case to share the Wasm VM instance with another module, you can use the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L88-L96"},(0,i.yg)("inlineCode",{parentName:"a"},"NewKeeperWithConfig")," constructor function")," and provide the Wasm VM configuration parameters of your choice instead. A Wasm VM instance will be created in ",(0,i.yg)("inlineCode",{parentName:"p"},"NewKeeperWithConfig"),". The parameters that can set are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DataDir")," is the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L25"},"directory for Wasm blobs and various caches"),". As an example, in ",(0,i.yg)("inlineCode",{parentName:"li"},"wasmd")," this is set to the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L578"},(0,i.yg)("inlineCode",{parentName:"a"},"wasm")," folder under the home directory"),". In the code snippet below we set this field to the ",(0,i.yg)("inlineCode",{parentName:"li"},"ibc_08-wasm_client_data")," folder under the home directory."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SupportedCapabilities")," is a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L26"},"list of capabilities supported by the chain"),". ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L586"},(0,i.yg)("inlineCode",{parentName:"a"},"wasmd")," sets this to all the available capabilities"),", but 08-wasm only requires ",(0,i.yg)("inlineCode",{parentName:"li"},"iterator"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"MemoryCacheSize")," sets ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L29C16-L29C104"},"the size in MiB of an in-memory cache for e.g. module caching"),". It is not consensus-critical and should be defined on a per-node basis, often in the range 100 to 1000 MB. ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L579"},(0,i.yg)("inlineCode",{parentName:"a"},"wasmd")," reads this value of"),". Default value is 256."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ContractDebugMode")," is a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L28"},"flag to enable/disable printing debug logs from the contract to STDOUT"),". This should be false in production environments. Default value is false.")),(0,i.yg)("p",null,"Another configuration parameter of the Wasm VM is the contract memory limit (in MiB), which is ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/config.go#L8"},"set to 32"),", ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/x/wasm/keeper/keeper.go#L32-L34"},"following the example of ",(0,i.yg)("inlineCode",{parentName:"a"},"wasmd")),". This parameter is not configurable by users of ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm"),"."),(0,i.yg)("p",null,"The following sample code shows how the keeper would be constructed using this method:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// homePath is the path to the directory where the data\n// directory for Wasm blobs and caches will be created\nwasmConfig := ibcwasmtypes.WasmConfig{\n  DataDir:               filepath.Join(homePath, "ibc_08-wasm_client_data"),\n  SupportedCapabilities: []string{"iterator"},\n  ContractDebugMode:     false,\n}\napp.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithConfig(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmConfig,\n  app.GRPCQueryRouter(),\n)\n')),(0,i.yg)("p",null,"Check out also the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/config.go#L21-L31"},(0,i.yg)("inlineCode",{parentName:"a"},"WasmConfig")," type definition")," for more information on each of the configurable parameters. Some parameters allow node-level configurations. There is additionally the function ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/config.go#L36-L42"},(0,i.yg)("inlineCode",{parentName:"a"},"DefaultWasmConfig"))," available that returns a configuration with the default values."),(0,i.yg)("h3",{id:"options"},"Options"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module comes with an options API inspired by the one in ",(0,i.yg)("inlineCode",{parentName:"p"},"x/wasm"),".\nCurrently the only option available is the ",(0,i.yg)("inlineCode",{parentName:"p"},"WithQueryPlugins")," option, which allows registration of custom query plugins for the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module. The use of this API is optional and it is only required if the chain wants to register custom query plugins for the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module."),(0,i.yg)("h4",{id:"withqueryplugins"},(0,i.yg)("inlineCode",{parentName:"h4"},"WithQueryPlugins")),(0,i.yg)("p",null,"By default, the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module does not configure any querier options for light client contracts. However, it is possible to register custom query plugins for ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v2.0.1/packages/std/src/query/mod.rs#L48"},(0,i.yg)("inlineCode",{parentName:"a"},"QueryRequest::Custom"))," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v2.0.1/packages/std/src/query/mod.rs#L57-L65"},(0,i.yg)("inlineCode",{parentName:"a"},"QueryRequest::Stargate")),"."),(0,i.yg)("p",null,"Assuming that the keeper is not yet instantiated, the following sample code shows how to register query plugins for the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module."),(0,i.yg)("p",null,"We first construct a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/querier.go#L78-L87"},(0,i.yg)("inlineCode",{parentName:"a"},"QueryPlugins"))," object with the desired query plugins:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"queryPlugins := ibcwasmtypes.QueryPlugins {\n  Custom: MyCustomQueryPlugin(),\n  // `myAcceptList` is a `[]string` containing the list of gRPC query paths that the chain wants to allow for the `08-wasm` module to query.\n  // These queries must be registered in the chain's gRPC query router, be deterministic, and track their gas usage.\n  // The `AcceptListStargateQuerier` function will return a query plugin that will only allow queries for the paths in the `myAcceptList`.\n  // The query responses are encoded in protobuf unlike the implementation in `x/wasm`.\n  Stargate: ibcwasmtypes.AcceptListStargateQuerier(myAcceptList),\n}\n")),(0,i.yg)("p",null,"Note that the ",(0,i.yg)("inlineCode",{parentName:"p"},"Stargate")," querier appends the user defined accept list of query routes to a default list defined by the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"defaultAcceptList")," defines a single query route: ",(0,i.yg)("inlineCode",{parentName:"p"},'"/ibc.core.client.v1.Query/VerifyMembership"'),". This allows for light client smart contracts to delegate parts of their workflow to other light clients for auxiliary proof verification. For example, proof of inclusion of block and tx data by a data availability provider."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// defaultAcceptList defines a set of default allowed queries made available to the Querier.\nvar defaultAcceptList = []string{\n  "/ibc.core.client.v1.Query/VerifyMembership",\n}\n')),(0,i.yg)("p",null,"You may leave any of the fields in the ",(0,i.yg)("inlineCode",{parentName:"p"},"QueryPlugins")," object as ",(0,i.yg)("inlineCode",{parentName:"p"},"nil")," if you do not want to register a query plugin for that query type."),(0,i.yg)("p",null,"Then, we pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"QueryPlugins")," object to the ",(0,i.yg)("inlineCode",{parentName:"p"},"WithQueryPlugins")," option:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"querierOption := ibcwasmkeeper.WithQueryPlugins(&queryPlugins)\n")),(0,i.yg)("p",null,"Finally, we pass the option to the ",(0,i.yg)("inlineCode",{parentName:"p"},"NewKeeperWithConfig")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"NewKeeperWithVM")," constructor function during ",(0,i.yg)("a",{parentName:"p",href:"#keeper-instantiation"},"Keeper instantiation"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"app.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithConfig(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmConfig,\n  app.GRPCQueryRouter(),\n+ querierOption,\n)\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-diff"},"app.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmer, // pass the Wasm VM instance to `08-wasm` keeper constructor\n  app.GRPCQueryRouter(),\n+ querierOption,\n)\n")),(0,i.yg)("h2",{id:"updating-allowedclients"},"Updating ",(0,i.yg)("inlineCode",{parentName:"h2"},"AllowedClients")),(0,i.yg)("p",null,"If the chain's 02-client submodule parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"AllowedClients")," contains the single wildcard ",(0,i.yg)("inlineCode",{parentName:"p"},'"*"')," element, then it is not necessary to do anything in order to allow the creation of ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," clients. However, if the parameter contains a list of client types (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},'["06-solomachine", "07-tendermint"]'),"), then in order to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module chains must update the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v8.0.0/proto/ibc/core/client/v1/client.proto#L64"},(0,i.yg)("inlineCode",{parentName:"a"},"AllowedClients")," parameter")," of core IBC. This can be configured directly in the application upgrade handler with the sample code below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import (\n  ...\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\nfunc CreateWasmUpgradeHandler(\n  mm *module.Manager,\n  configurator module.Configurator,\n  clientKeeper clientkeeper.Keeper,\n) upgradetypes.UpgradeHandler {\n  return func(ctx context.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {\n    sdkCtx := sdk.UnwrapSDKContext(ctx)\n    // explicitly update the IBC 02-client params, adding the wasm client type\n    params := clientKeeper.GetParams(ctx)\n    params.AllowedClients = append(params.AllowedClients, ibcwasmtypes.Wasm)\n    clientKeeper.SetParams(ctx, params)\n\n    return mm.RunMigrations(ctx, configurator, vm)\n  }\n}\n')),(0,i.yg)("p",null,"Or alternatively the parameter can be updated via a governance proposal (see at the bottom of section ",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/next/ibc/light-clients/setup#creating-clients"},(0,i.yg)("inlineCode",{parentName:"a"},"Creating clients"))," for an example of how to do this)."),(0,i.yg)("h2",{id:"adding-the-module-to-the-store"},"Adding the module to the store"),(0,i.yg)("p",null,"As part of the upgrade migration you must also add the module to the upgrades store."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (app SimApp) RegisterUpgradeHandlers() {\n\n  ...\n\n  if upgradeInfo.Name == UpgradeName && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {\n    storeUpgrades := storetypes.StoreUpgrades{\n      Added: []string{\n        ibcwasmtypes.ModuleName,\n      },\n    }\n\n    // configure store loader that checks if version == upgradeHeight and applies store upgrades\n    app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))\n  }\n}\n")),(0,i.yg)("h2",{id:"adding-snapshot-support"},"Adding snapshot support"),(0,i.yg)("p",null,"In order to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"08-wasm")," module chains are required to register the ",(0,i.yg)("inlineCode",{parentName:"p"},"WasmSnapshotter")," extension in the snapshot manager. This snapshotter takes care of persisting the external state, in the form of contract code, of the Wasm VM instance to disk when the chain is snapshotted. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/testing/simapp/app.go#L775-L782"},"This code")," should be placed in ",(0,i.yg)("inlineCode",{parentName:"p"},"NewSimApp")," function in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go"),"."),(0,i.yg)("h2",{id:"pin-byte-codes-at-start"},"Pin byte codes at start"),(0,i.yg)("p",null,"Wasm byte codes should be pinned to the WasmVM cache on every application start, therefore ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/testing/simapp/app.go#L825-L830"},"this code")," should be placed in ",(0,i.yg)("inlineCode",{parentName:"p"},"NewSimApp")," function in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go"),"."))}c.isMDXComponent=!0}}]);