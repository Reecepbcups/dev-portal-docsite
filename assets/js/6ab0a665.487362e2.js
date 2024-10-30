"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[85084],{15680:(e,n,o)=>{o.d(n,{xA:()=>l,yg:()=>m});var a=o(96540);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,a,r=function(e,n){if(null==e)return{};var o,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var o=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(o),c=r,m=u["".concat(d,".").concat(c)]||u[c]||g[c]||t;return o?a.createElement(m,i(i({ref:n},l),{},{components:o})):a.createElement(m,i({ref:n},l))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=o.length,i=new Array(t);i[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<t;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},82226:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var a=o(58168),r=(o(96540),o(15680));const t={sidebar_position:1},i="In-Place Store Migrations",s={unversionedId:"docs/learn/advanced/upgrade",id:"docs/learn/advanced/upgrade",title:"In-Place Store Migrations",description:"Read and understand all the in-place store migration documentation before you run a migration on a live chain.",source:"@site/cosmos-sdk/docs/learn/advanced/15-upgrade.md",sourceDirName:"docs/learn/advanced",slug:"/docs/learn/advanced/upgrade",permalink:"/cosmos-sdk/next/docs/learn/advanced/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Protobuf Documentation",permalink:"/cosmos-sdk/next/docs/learn/advanced/proto-docs"},next:{title:"Configuration",permalink:"/cosmos-sdk/next/docs/learn/advanced/config"}},d={},p=[{value:"Tracking Module Versions",id:"tracking-module-versions",level:2},{value:"Consensus Version",id:"consensus-version",level:3},{value:"Version Map",id:"version-map",level:3},{value:"Upgrade Handlers",id:"upgrade-handlers",level:2},{value:"Running Migrations",id:"running-migrations",level:2},{value:"Order Of Migrations",id:"order-of-migrations",level:3},{value:"Adding New Modules During Upgrades",id:"adding-new-modules-during-upgrades",level:2},{value:"Add StoreUpgrades for New Modules",id:"add-storeupgrades-for-new-modules",level:3},{value:"Genesis State",id:"genesis-state",level:2},{value:"Overwriting Genesis Functions",id:"overwriting-genesis-functions",level:3},{value:"Syncing a Full Node to an Upgraded Blockchain",id:"syncing-a-full-node-to-an-upgraded-blockchain",level:2}],l={toc:p},u="wrapper";function g(e){let{components:n,...o}=e;return(0,r.yg)(u,(0,a.A)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"in-place-store-migrations"},"In-Place Store Migrations"),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"Read and understand all the in-place store migration documentation before you run a migration on a live chain.")),(0,r.yg)("admonition",{title:"Synopsis",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Upgrade your app modules smoothly with custom in-place store migration logic.")),(0,r.yg)("p",null,"The Cosmos SDK uses two methods to perform upgrades:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Exporting the entire application state to a JSON file using the ",(0,r.yg)("inlineCode",{parentName:"p"},"export")," CLI command, making changes, and then starting a new binary with the changed JSON file as the genesis file.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Perform upgrades in place, which significantly decrease the upgrade time for chains with a larger state. Use the ",(0,r.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/building-modules/upgrade"},"Module Upgrade Guide")," to set up your application modules to take advantage of in-place upgrades."))),(0,r.yg)("p",null,"This document provides steps to use the In-Place Store Migrations upgrade method."),(0,r.yg)("h2",{id:"tracking-module-versions"},"Tracking Module Versions"),(0,r.yg)("p",null,"Each module gets assigned a consensus version by the module developer. The consensus version serves as the breaking change version of the module. The Cosmos SDK keeps track of all module consensus versions in the x/upgrade ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," store. During an upgrade, the difference between the old ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," stored in state and the new ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," is calculated by the Cosmos SDK. For each identified difference, the module-specific migrations are run and the respective consensus version of each upgraded module is incremented."),(0,r.yg)("h3",{id:"consensus-version"},"Consensus Version"),(0,r.yg)("p",null,'The consensus version is defined on each app module by the module developer and serves as the breaking change version of the module. The consensus version informs the Cosmos SDK on which modules need to be upgraded. For example, if the bank module was version 2 and an upgrade introduces bank module 3, the Cosmos SDK upgrades the bank module and runs the "version 2 to 3" migration script.'),(0,r.yg)("h3",{id:"version-map"},"Version Map"),(0,r.yg)("p",null,"The version map is a mapping of module names to consensus versions. The map is persisted to x/upgrade's state for use during in-place migrations. When migrations finish, the updated version map is persisted in the state."),(0,r.yg)("h2",{id:"upgrade-handlers"},"Upgrade Handlers"),(0,r.yg)("p",null,"Upgrades use an ",(0,r.yg)("inlineCode",{parentName:"p"},"UpgradeHandler")," to facilitate migrations. The ",(0,r.yg)("inlineCode",{parentName:"p"},"UpgradeHandler")," functions implemented by the app developer must conform to the following function signature. These functions retrieve the ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," from x/upgrade's state and return the new ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," to be stored in x/upgrade after the upgrade. The diff between the two ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap"),"s determines which modules need upgrading."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type UpgradeHandler func(ctx sdk.Context, plan Plan, fromVM VersionMap) (VersionMap, error)\n")),(0,r.yg)("p",null,"Inside these functions, you must perform any upgrade logic to include in the provided ",(0,r.yg)("inlineCode",{parentName:"p"},"plan"),". All upgrade handler functions must end with the following line of code:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"  return app.mm.RunMigrations(ctx, cfg, fromVM)\n")),(0,r.yg)("h2",{id:"running-migrations"},"Running Migrations"),(0,r.yg)("p",null,"Migrations are run inside of an ",(0,r.yg)("inlineCode",{parentName:"p"},"UpgradeHandler")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"app.mm.RunMigrations(ctx, cfg, vm)"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"UpgradeHandler")," functions describe the functionality to occur during an upgrade. The ",(0,r.yg)("inlineCode",{parentName:"p"},"RunMigration")," function loops through the ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," argument and runs the migration scripts for all versions that are less than the versions of the new binary app module. After the migrations are finished, a new ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," is returned to persist the upgraded module versions to state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'cfg := module.NewConfigurator(...)\napp.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n\n    // ...\n    // additional upgrade logic\n    // ...\n\n    // returns a VersionMap with the updated module ConsensusVersions\n    return app.mm.RunMigrations(ctx, fromVM)\n})\n')),(0,r.yg)("p",null,"To learn more about configuring migration scripts for your modules, see the ",(0,r.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/building-modules/upgrade"},"Module Upgrade Guide"),"."),(0,r.yg)("h3",{id:"order-of-migrations"},"Order Of Migrations"),(0,r.yg)("p",null,"By default, all migrations are run in module name alphabetical ascending order, except ",(0,r.yg)("inlineCode",{parentName:"p"},"x/auth")," which is run last. The reason is state dependencies between x/auth and other modules (you can read more in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/10606"},"issue #10606"),")."),(0,r.yg)("p",null,"If you want to change the order of migration, then you should call ",(0,r.yg)("inlineCode",{parentName:"p"},"app.mm.SetOrderMigrations(module1, module2, ...)")," in your app.go file. The function will panic if you forget to include a module in the argument list."),(0,r.yg)("h2",{id:"adding-new-modules-during-upgrades"},"Adding New Modules During Upgrades"),(0,r.yg)("p",null,"You can introduce entirely new modules to the application during an upgrade. New modules are recognized because they have not yet been registered in ",(0,r.yg)("inlineCode",{parentName:"p"},"x/upgrade"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"VersionMap")," store. In this case, ",(0,r.yg)("inlineCode",{parentName:"p"},"RunMigrations")," calls the ",(0,r.yg)("inlineCode",{parentName:"p"},"InitGenesis")," function from the corresponding module to set up its initial state."),(0,r.yg)("h3",{id:"add-storeupgrades-for-new-modules"},"Add StoreUpgrades for New Modules"),(0,r.yg)("p",null,"All chains preparing to run in-place store migrations will need to manually add store upgrades for new modules and then configure the store loader to apply those upgrades. This ensures that the new module's stores are added to the multistore before the migrations begin."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()\nif err != nil {\n    panic(err)\n}\n\nif upgradeInfo.Name == "my-plan" && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {\n    storeUpgrades := storetypes.StoreUpgrades{\n        // add store upgrades for new modules\n        // Example:\n        //    Added: []string{"foo", "bar"},\n        // ...\n    }\n\n    // configure store loader that checks if version == upgradeHeight and applies store upgrades\n    app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))\n}\n')),(0,r.yg)("h2",{id:"genesis-state"},"Genesis State"),(0,r.yg)("p",null,"When starting a new chain, the consensus version of each module MUST be saved to state during the application's genesis. To save the consensus version, add the following line to the ",(0,r.yg)("inlineCode",{parentName:"p"},"InitChainer")," method in ",(0,r.yg)("inlineCode",{parentName:"p"},"app.go"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-diff"},"func (app *MyApp) InitChainer(ctx sdk.Context, req abci.InitChainRequest) abci.InitChainResponse {\n  ...\n+ app.UpgradeKeeper.SetModuleVersionMap(ctx, app.mm.GetVersionMap())\n  ...\n}\n")),(0,r.yg)("p",null,"This information is used by the Cosmos SDK to detect when modules with newer versions are introduced to the app."),(0,r.yg)("p",null,"For a new module ",(0,r.yg)("inlineCode",{parentName:"p"},"foo"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"InitGenesis")," is called by ",(0,r.yg)("inlineCode",{parentName:"p"},"RunMigration")," only when ",(0,r.yg)("inlineCode",{parentName:"p"},"foo")," is registered in the module manager but it's not set in the ",(0,r.yg)("inlineCode",{parentName:"p"},"fromVM"),". Therefore, if you want to skip ",(0,r.yg)("inlineCode",{parentName:"p"},"InitGenesis")," when a new module is added to the app, then you should set its module version in ",(0,r.yg)("inlineCode",{parentName:"p"},"fromVM")," to the module consensus version:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n    // ...\n\n    // Set foo\'s version to the latest ConsensusVersion in the VersionMap.\n    // This will skip running InitGenesis on Foo\n    fromVM[foo.ModuleName] = foo.AppModule{}.ConsensusVersion()\n\n    return app.mm.RunMigrations(ctx, fromVM)\n})\n')),(0,r.yg)("h3",{id:"overwriting-genesis-functions"},"Overwriting Genesis Functions"),(0,r.yg)("p",null,"The Cosmos SDK offers modules that the application developer can import in their app. These modules often have an ",(0,r.yg)("inlineCode",{parentName:"p"},"InitGenesis")," function already defined."),(0,r.yg)("p",null,"You can write your own ",(0,r.yg)("inlineCode",{parentName:"p"},"InitGenesis")," function for an imported module. To do this, manually trigger your custom genesis function in the upgrade handler."),(0,r.yg)("admonition",{type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"You MUST manually set the consensus version in the version map passed to the ",(0,r.yg)("inlineCode",{parentName:"p"},"UpgradeHandler")," function. Without this, the SDK will run the Module's existing ",(0,r.yg)("inlineCode",{parentName:"p"},"InitGenesis")," code even if you triggered your custom function in the ",(0,r.yg)("inlineCode",{parentName:"p"},"UpgradeHandler"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import foo "github.com/my/module/foo"\n\napp.UpgradeKeeper.SetUpgradeHandler("my-plan", func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap)  (module.VersionMap, error) {\n\n    // Register the consensus version in the version map\n    // to avoid the SDK from triggering the default\n    // InitGenesis function.\n    fromVM["foo"] = foo.AppModule{}.ConsensusVersion()\n\n    // Run custom InitGenesis for foo\n    app.mm["foo"].InitGenesis(ctx, app.appCodec, myCustomGenesisState)\n\n    return app.mm.RunMigrations(ctx, cfg, fromVM)\n})\n')),(0,r.yg)("h2",{id:"syncing-a-full-node-to-an-upgraded-blockchain"},"Syncing a Full Node to an Upgraded Blockchain"),(0,r.yg)("p",null,"You can sync a full node to an existing blockchain which has been upgraded using Cosmovisor"),(0,r.yg)("p",null,"To successfully sync, you must start with the initial binary that the blockchain started with at genesis. If all Software Upgrade Plans contain binary instruction, then you can run Cosmovisor with auto-download option to automatically handle downloading and switching to the binaries associated with each sequential upgrade. Otherwise, you need to manually provide all binaries to Cosmovisor."),(0,r.yg)("p",null,"To learn more about Cosmovisor, see the ",(0,r.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/tooling/cosmovisor"},"Cosmovisor Quick Start"),"."))}g.isMDXComponent=!0}}]);