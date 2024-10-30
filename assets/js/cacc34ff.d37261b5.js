"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[94796],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=m(t),c=i,g=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return t?n.createElement(g,s(s({ref:a},u),{},{components:t})):n.createElement(g,s({ref:a},u))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=c;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[p]="string"==typeof e?e:i,s[1]=r;for(var m=2;m<o;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},59189:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var n=t(58168),i=(t(96540),t(15680));const o={sidebar_position:1},s="Cosmos Blockchain Simulator",r={unversionedId:"learn/advanced/simulation",id:"version-0.52/learn/advanced/simulation",title:"Cosmos Blockchain Simulator",description:"The Cosmos SDK offers a full fledged simulation framework to fuzz test every",source:"@site/cosmos-sdk_versioned_docs/version-0.52/learn/advanced/12-simulation.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/simulation",permalink:"/cosmos-sdk/learn/advanced/simulation",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"RunTx recovery middleware",permalink:"/cosmos-sdk/learn/advanced/runtx_middleware"},next:{title:"Protobuf Documentation",permalink:"/cosmos-sdk/learn/advanced/proto-docs"}},l={},m=[{value:"Goals",id:"goals",level:2},{value:"Simulation commands",id:"simulation-commands",level:2},{value:"Simulator Modes",id:"simulator-modes",level:2},{value:"Usage",id:"usage",level:2},{value:"Debugging Tips",id:"debugging-tips",level:2},{value:"Use simulation in your Cosmos SDK-based application",id:"use-simulation-in-your-cosmos-sdk-based-application",level:2}],u={toc:m},p="wrapper";function d(e){let{components:a,...t}=e;return(0,i.yg)(p,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"cosmos-blockchain-simulator"},"Cosmos Blockchain Simulator"),(0,i.yg)("p",null,"The Cosmos SDK offers a full fledged simulation framework to ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fuzzing"},"fuzz test")," every\nmessage defined by a module."),(0,i.yg)("p",null,"On the Cosmos SDK, this functionality is provided by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/simapp/app_v2.go"},(0,i.yg)("inlineCode",{parentName:"a"},"SimApp")),", which is a ",(0,i.yg)("inlineCode",{parentName:"p"},"Baseapp")," application that is used for running the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/23cf89cce1882ba9c8280e64735ae200504bfdce/simsx/README.md#L1"},(0,i.yg)("inlineCode",{parentName:"a"},"simulation"))," package. This package defines all the simulation logic as well as the operations for randomized parameters like accounts, balances etc."),(0,i.yg)("h2",{id:"goals"},"Goals"),(0,i.yg)("p",null,"The blockchain simulator tests how the blockchain application would behave under real life circumstances by generating and sending randomized messages. The goal of this is to detect and debug failures that could halt a live chain, by providing logs and statistics about the operations run by the simulator as well as exporting the latest application state when a failure was found."),(0,i.yg)("p",null,"Its main difference with integration testing is that the simulator app allows you to pass parameters to customize the chain that's being simulated. This comes in handy when trying to reproduce bugs that were generated in the provided operations (randomized or not)."),(0,i.yg)("h2",{id:"simulation-commands"},"Simulation commands"),(0,i.yg)("p",null,"The simulation test setup has different scenarios, each of which tests a different\nfailure type:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AppImportExport"),": The simulator exports the initial app state and then it creates a new app with the exported ",(0,i.yg)("inlineCode",{parentName:"li"},"genesis.json")," as an input, checking for inconsistencies between the stores."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AppSimulationAfterImport"),": Queues two simulations together. The first one provides the app state (",(0,i.yg)("em",{parentName:"li"},"i.e")," genesis) to the second. Useful to test software upgrades or hard-forks from a live chain."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AppStateDeterminism"),": Runs a few seeds many times to test that the apphash is deterministic across the runs."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"BenchmarkInvariants"),": Analysis of the performance of running all modules' invariants (",(0,i.yg)("em",{parentName:"li"},"i.e")," sequentially runs a ",(0,i.yg)("a",{parentName:"li",href:"https://pkg.go.dev/testing/#hdr-Benchmarks"},"benchmark")," test). An invariant checks for differences between the values that are on the store and the passive tracker. Eg: total coins held by accounts vs total supply tracker."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"FullAppSimulation"),": General simulation mode. Runs the chain and the specified operations for a given number of blocks. Tests that there're no ",(0,i.yg)("inlineCode",{parentName:"li"},"panics")," on the simulation. It does also run invariant checks on every ",(0,i.yg)("inlineCode",{parentName:"li"},"Period")," but they are not benchmarked."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"FuzzFullAppSimulation"),": Runs general simulation mode with the ",(0,i.yg)("a",{parentName:"li",href:"https://go.dev/doc/security/fuzz/"},"go fuzzer")," to find panics.")),(0,i.yg)("p",null,"Each simulation must receive a set of inputs (",(0,i.yg)("em",{parentName:"p"},"i.e")," flags) such as the number of\nblocks that the simulation is run, seed, block size, etc.\nCheck the full list of flags ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/simulation/client/cli/flags.go#L35-L59"},"here"),"."),(0,i.yg)("h2",{id:"simulator-modes"},"Simulator Modes"),(0,i.yg)("p",null,"In addition to the various inputs and commands, the simulator runs in three modes:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Completely random where the initial state, module parameters and simulation parameters are ",(0,i.yg)("strong",{parentName:"li"},"pseudo-randomly generated"),"."),(0,i.yg)("li",{parentName:"ol"},"From a ",(0,i.yg)("inlineCode",{parentName:"li"},"genesis.json")," file where the initial state and the module parameters are defined. This mode is helpful for running simulations on a known state such as a live network export where a new (mostly likely breaking) version of the application needs to be tested."),(0,i.yg)("li",{parentName:"ol"},"From a ",(0,i.yg)("inlineCode",{parentName:"li"},"params.json")," file where the initial state is pseudo-randomly generated but the module and simulation parameters can be provided manually. This allows for a more controlled and deterministic simulation setup while allowing the state space to still be pseudo-randomly simulated. All available parameters are listed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/simulation/client/cli/flags.go#L59-L78"},"here"),".")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"These modes are not mutually exclusive. So you can for example run a randomly generated genesis state (",(0,i.yg)("inlineCode",{parentName:"p"},"1"),") with manually generated simulation params (",(0,i.yg)("inlineCode",{parentName:"p"},"3"),").")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"This is a general example of how simulations are run. For more specific examples\ncheck the Cosmos SDK ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/23cf89cce1882ba9c8280e64735ae200504bfdce/scripts/build/simulations.mk#L1-L104"},"Makefile"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"}," $ go test -mod=readonly github.com/cosmos/cosmos-sdk/simapp \\\n  -run=TestApp<simulation_command> \\\n  ...<flags>\n  -v -timeout 24h\n")),(0,i.yg)("h2",{id:"debugging-tips"},"Debugging Tips"),(0,i.yg)("p",null,"Here are some suggestions when encountering a simulation failure:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Export the app state at the height where the failure was found. You can do this\nby passing the ",(0,i.yg)("inlineCode",{parentName:"li"},"-ExportStatePath")," flag to the simulator."),(0,i.yg)("li",{parentName:"ul"},"Use ",(0,i.yg)("inlineCode",{parentName:"li"},"-Verbose")," logs. They could give you a better hint on all the operations\ninvolved."),(0,i.yg)("li",{parentName:"ul"},"Reduce the simulation ",(0,i.yg)("inlineCode",{parentName:"li"},"-Period"),". This will run the invariants checks more\nfrequently."),(0,i.yg)("li",{parentName:"ul"},"Try using another ",(0,i.yg)("inlineCode",{parentName:"li"},"-Seed"),". If it can reproduce the same error and if it fails\nsooner, you will spend less time running the simulations."),(0,i.yg)("li",{parentName:"ul"},"Reduce the ",(0,i.yg)("inlineCode",{parentName:"li"},"-NumBlocks")," . How's the app state at the height previous to the\nfailure?"),(0,i.yg)("li",{parentName:"ul"},"Try adding logs to operations that are not logged. You will have to define a\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/staking/keeper/keeper.go#L65-L68"},"Logger")," on your ",(0,i.yg)("inlineCode",{parentName:"li"},"Keeper"),".")),(0,i.yg)("h2",{id:"use-simulation-in-your-cosmos-sdk-based-application"},"Use simulation in your Cosmos SDK-based application"),(0,i.yg)("p",null,"Learn how you can build the simulation into your Cosmos SDK-based application:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Application Simulation Manager"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/cosmos-sdk/build/building-modules/simulator"},"Building modules: Simulator")),(0,i.yg)("li",{parentName:"ul"},"Simulator tests")))}d.isMDXComponent=!0}}]);