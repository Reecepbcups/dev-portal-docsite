"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45486],{15680:(e,n,o)=>{o.d(n,{xA:()=>d,yg:()=>m});var t=o(96540);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),g=i,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return o?t.createElement(m,r(r({ref:n},d),{},{components:o})):t.createElement(m,r({ref:n},d))}));function m(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=o[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},5724:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=o(58168),i=(o(96540),o(15680));const a={},r="ADR 057: App Wiring",l={unversionedId:"build/architecture/adr-057-app-wiring",id:"version-0.52/build/architecture/adr-057-app-wiring",title:"ADR 057: App Wiring",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-057-app-wiring.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-057-app-wiring",permalink:"/cosmos-sdk/build/architecture/adr-057-app-wiring",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 055: ORM",permalink:"/cosmos-sdk/build/architecture/adr-055-orm"},next:{title:"ADR 058: Auto-Generated CLI",permalink:"/cosmos-sdk/build/architecture/adr-058-auto-generated-cli"}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Dependency Injection",id:"dependency-injection",level:3},{value:"Declarative App Config",id:"declarative-app-config",level:3},{value:"Module &amp; Protobuf Registration",id:"module--protobuf-registration",level:3},{value:"New <code>app.go</code>",id:"new-appgo",level:3},{value:"Application to existing SDK modules",id:"application-to-existing-sdk-modules",level:3},{value:"Registration of Inter-Module Hooks",id:"registration-of-inter-module-hooks",level:3},{value:"Code Generation",id:"code-generation",level:3},{value:"Module Semantic Versioning",id:"module-semantic-versioning",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],d={toc:p},u="wrapper";function c(e){let{components:n,...o}=e;return(0,i.yg)(u,(0,t.A)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-057-app-wiring"},"ADR 057: App Wiring"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2022-05-04: Initial Draft"),(0,i.yg)("li",{parentName:"ul"},"2022-08-19: Updates"),(0,i.yg)("li",{parentName:"ul"},"2024-01-12: Updates")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"PROPOSED Implemented"),(0,i.yg)("h2",{id:"abstract"},"Abstract"),(0,i.yg)("p",null,"In order to make it easier to build Cosmos SDK modules and apps, we propose a new app wiring system based on\ndependency injection and declarative app configurations to replace the current ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," code."),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"A number of factors have made the SDK and SDK apps in their current state hard to maintain. A symptom of the current\nstate of complexity is ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/c3edbb22cab8678c35e21fe0253919996b780c01/simapp/app.go"},(0,i.yg)("inlineCode",{parentName:"a"},"simapp/app.go")),"\nwhich contains almost 100 lines of imports and is otherwise over 600 lines of mostly boilerplate code that is\ngenerally copied to each new project. (Not to mention the additional boilerplate which gets copied in ",(0,i.yg)("inlineCode",{parentName:"p"},"simapp/simd"),".)"),(0,i.yg)("p",null,"The large amount of boilerplate needed to bootstrap an app has made it hard to release independently versioned go\nmodules for Cosmos SDK modules as described in ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-053-go-module-refactoring"},"ADR 053: Go Module Refactoring"),"."),(0,i.yg)("p",null,"In addition to being very verbose and repetitive, ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," also exposes a large surface area for breaking changes\nas most modules instantiate themselves with positional parameters which forces breaking changes anytime a new parameter\n(even an optional one) is needed."),(0,i.yg)("p",null,"Several attempts were made to improve the current situation including ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033: Internal-Module Communication"),"\nand ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/allinbits/cosmos-sdk-poc"},"a proof-of-concept of a new SDK"),". The discussions around these\ndesigns led to the current solution described here."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,'In order to improve the current situation, a new "app wiring" paradigm has been designed to replace ',(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," which\ninvolves:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"declaration configuration of the modules in an app which can be serialized to JSON or YAML"),(0,i.yg)("li",{parentName:"ul"},"a dependency-injection (DI) framework for instantiating apps from the that configuration")),(0,i.yg)("h3",{id:"dependency-injection"},"Dependency Injection"),(0,i.yg)("p",null,"When examining the code in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," most of the code simply instantiates modules with dependencies provided either\nby the framework (such as store keys) or by other modules (such as keepers). It is generally pretty obvious given\nthe context what the correct dependencies actually should be, so dependency-injection is an obvious solution. Rather\nthan making developers manually resolve dependencies, a module will tell the DI container what dependency it needs\nand the container will figure out how to provide it."),(0,i.yg)("p",null,"We explored several existing DI solutions in golang and felt that the reflection-based approach in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/uber-go/dig"},"uber/dig"),"\nwas closest to what we needed but not quite there. Assessing what we needed for the SDK, we designed and built\nthe Cosmos SDK ",(0,i.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/depinject"},"depinject module"),", which has the following\nfeatures:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"dependency resolution and provision through functional constructors, ex: ",(0,i.yg)("inlineCode",{parentName:"li"},"func(need SomeDep) (AnotherDep, error)")),(0,i.yg)("li",{parentName:"ul"},"dependency injection ",(0,i.yg)("inlineCode",{parentName:"li"},"In")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"Out")," structs which support ",(0,i.yg)("inlineCode",{parentName:"li"},"optional")," dependencies"),(0,i.yg)("li",{parentName:"ul"},"grouped-dependencies (many-per-container) through the ",(0,i.yg)("inlineCode",{parentName:"li"},"ManyPerContainerType")," tag interface"),(0,i.yg)("li",{parentName:"ul"},"module-scoped dependencies via ",(0,i.yg)("inlineCode",{parentName:"li"},"ModuleKey"),"s (where each module gets a unique dependency)"),(0,i.yg)("li",{parentName:"ul"},"one-per-module dependencies through the ",(0,i.yg)("inlineCode",{parentName:"li"},"OnePerModuleType")," tag interface"),(0,i.yg)("li",{parentName:"ul"},"sophisticated debugging information and container visualization via GraphViz")),(0,i.yg)("p",null,"Here are some examples of how these would be used in an SDK module:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"StoreKey")," could be a module-scoped dependency which is unique per module"),(0,i.yg)("li",{parentName:"ul"},"a module's ",(0,i.yg)("inlineCode",{parentName:"li"},"AppModule")," instance (or the equivalent) could be a ",(0,i.yg)("inlineCode",{parentName:"li"},"OnePerModuleType")),(0,i.yg)("li",{parentName:"ul"},"CLI commands could be provided with ",(0,i.yg)("inlineCode",{parentName:"li"},"ManyPerContainerType"),"s")),(0,i.yg)("p",null,"Note that even though dependency resolution is dynamic and based on reflection, which could be considered a pitfall\nof this approach, the entire dependency graph should be resolved immediately on app startup and only gets resolved\nonce (except in the case of dynamic config reloading which is a separate topic). This means that if there are any\nerrors in the dependency graph, they will get reported immediately on startup so this approach is only slightly worse\nthan fully static resolution in terms of error reporting and much better in terms of code complexity."),(0,i.yg)("h3",{id:"declarative-app-config"},"Declarative App Config"),(0,i.yg)("p",null,"In order to compose modules into an app, a declarative app configuration will be used. This configuration is based off\nof protobuf and its basic structure is very simple:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-protobuf"},"package cosmos.app.v1;\nmessage Config {\n  repeated ModuleConfig modules = 1;\n}\n\nmessage ModuleConfig {\n  string name = 1;\n  google.protobuf.Any config = 2;\n}\n")),(0,i.yg)("p",null,"The configuration for every module is a protobuf message and modules will be identified and loaded based\non the protobuf type URL of their config object (ex. ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.module.v1.Module"),"). Modules are given a unique short ",(0,i.yg)("inlineCode",{parentName:"p"},"name"),"\nto share resources across different versions of the same module which might have a different protobuf package\nversions (ex. ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.module.v2.Module"),"). All module config objects should define the ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.app.v1alpha1.module"),"\ndescriptor option which will provide additional useful metadata for the framework and which can also be indexed\nin module registries."),(0,i.yg)("p",null,"An example app config in YAML might look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  - name: baseapp\n    config:\n      "@type": cosmos.baseapp.module.v1.Module\n      begin_blockers: [staking, auth, bank]\n      end_blockers: [bank, auth, staking]\n      init_genesis: [bank, auth, staking]\n  - name: auth\n    config:\n      "@type": cosmos.auth.module.v1.Module\n      bech32_prefix: "foo"\n  - name: bank\n    config:\n      "@type": cosmos.bank.module.v1.Module\n  - name: staking\n    config:\n      "@type": cosmos.staking.module.v1.Module\n')),(0,i.yg)("p",null,"In the above example, there is a hypothetical ",(0,i.yg)("inlineCode",{parentName:"p"},"baseapp")," module which contains the information around ordering of\nbegin blockers, end blockers, and init genesis. Rather than lifting these concerns up to the module config layer,\nthey are themselves handled by a module which could allow a convenient way of swapping out different versions of\nbaseapp (for instance to target different versions of tendermint), without needing to change the rest of the config.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"baseapp")," module would then provide to the server framework (which sort of sits outside the ABCI app) an instance\nof ",(0,i.yg)("inlineCode",{parentName:"p"},"abci.Application"),"."),(0,i.yg)("p",null,"In this model, an app is ",(0,i.yg)("em",{parentName:"p"},"modules all the way down")," and the dependency injection/app config layer is very much\nprotocol-agnostic and can adapt to even major breaking changes at the protocol layer."),(0,i.yg)("h3",{id:"module--protobuf-registration"},"Module & Protobuf Registration"),(0,i.yg)("p",null,"In order for the two components of dependency injection and declarative configuration to work together as described,\nwe need a way for modules to actually register themselves and provide dependencies to the container."),(0,i.yg)("p",null,"One additional complexity that needs to be handled at this layer is protobuf registry initialization. Recall that\nin both the current SDK ",(0,i.yg)("inlineCode",{parentName:"p"},"codec")," and the proposed ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/11802"},"ADR 054: Protobuf Semver Compatible Codegen"),",\nprotobuf types need to be explicitly registered. Given that the app config itself is based on protobuf and\nuses protobuf ",(0,i.yg)("inlineCode",{parentName:"p"},"Any")," types, protobuf registration needs to happen before the app config itself can be decoded. Because\nwe don't know which protobuf ",(0,i.yg)("inlineCode",{parentName:"p"},"Any")," types will be needed a priori and modules themselves define those types, we need\nto decode the app config in separate phases:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"parse app config JSON/YAML as raw JSON and collect required module type URLs (without doing proto JSON decoding)"),(0,i.yg)("li",{parentName:"ol"},"build a ",(0,i.yg)("a",{parentName:"li",href:"https://pkg.go.dev/google.golang.org/protobuf@v1.28.0/reflect/protoregistry"},"protobuf type registry")," based\non file descriptors and types provided by each required module"),(0,i.yg)("li",{parentName:"ol"},"decode the app config as proto JSON using the protobuf type registry")),(0,i.yg)("p",null,"Because in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/11802"},"ADR 054: Protobuf Semver Compatible Codegen"),", each module\nmight use ",(0,i.yg)("inlineCode",{parentName:"p"},"internal")," generated code which is not registered with the global protobuf registry, this code should provide\nan alternate way to register protobuf types with a type registry. In the same way that ",(0,i.yg)("inlineCode",{parentName:"p"},".pb.go")," files currently have a\n",(0,i.yg)("inlineCode",{parentName:"p"},"var File_foo_proto protoreflect.FileDescriptor")," for the file ",(0,i.yg)("inlineCode",{parentName:"p"},"foo.proto"),", generated code should have a new member\n",(0,i.yg)("inlineCode",{parentName:"p"},"var Types_foo_proto TypeInfo")," where ",(0,i.yg)("inlineCode",{parentName:"p"},"TypeInfo")," is an interface or struct with all the necessary info to register both\nthe protobuf generated types and file descriptor."),(0,i.yg)("p",null,"So a module must provide dependency injection providers and protobuf types, and takes as input its module\nconfig object which uniquely identifies the module based on its type URL."),(0,i.yg)("p",null,"With this in mind, we define a global module register which allows module implementations to register themselves\nwith the following API:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// Register registers a module with the provided type name (ex. cosmos.bank.module.v1.Module)\n// and the provided options.\nfunc Register(configTypeName protoreflect.FullName, option ...Option) { ... }\n\ntype Option { /* private methods */ }\n\n// Provide registers dependency injection provider functions which work with the\n// cosmos-sdk container module. These functions can also accept an additional\n// parameter for the module's config object.\nfunc Provide(providers ...interface{}) Option { ... }\n\n// Types registers protobuf TypeInfo's with the protobuf registry.\nfunc Types(types ...TypeInfo) Option { ... }\n")),(0,i.yg)("p",null,"Ex:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func init() {\n    appconfig.Register("cosmos.bank.module.v1.Module",\n        appconfig.Types(\n            types.Types_tx_proto,\n            types.Types_query_proto,\n            types.Types_types_proto,\n        ),\n        appconfig.Provide(\n            provideBankModule,\n        )\n    )\n}\n\ntype Inputs struct {\n    container.In\n    \n    AuthKeeper auth.Keeper\n    DB ormdb.ModuleDB\n}\n\ntype Outputs struct {\n    Keeper bank.Keeper\n    AppModule appmodule.AppModule\n}\n\nfunc ProvideBankModule(config *bankmodulev1.Module, Inputs) (Outputs, error) { ... }\n')),(0,i.yg)("p",null,"Note that in this module, a module configuration object ",(0,i.yg)("em",{parentName:"p"},"cannot")," register different dependency providers at runtime\nbased on the configuration. This is intentional because it allows us to know globally which modules provide which\ndependencies, and it will also allow us to do code generation of the whole app initialization. This\ncan help us figure out issues with missing dependencies in an app config if the needed modules are loaded at runtime.\nIn cases where required modules are not loaded at runtime, it may be possible to guide users to the correct module if\nthrough a global Cosmos SDK module registry."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"*appmodule.Handler")," type referenced above is a replacement for the legacy ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModule")," framework, and\ndescribed in ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-063-core-module-api"},"ADR 063: Core Module API"),"."),(0,i.yg)("h3",{id:"new-appgo"},"New ",(0,i.yg)("inlineCode",{parentName:"h3"},"app.go")),(0,i.yg)("p",null,"With this setup, ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," might now look something like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    // Each go package which registers a module must be imported just for side-effects\n    // so that module implementations are registered.\n    _ "github.com/cosmos/cosmos-sdk/x/auth/module"\n    _ "cosmossdk.io/x/bank/module"\n    _ "cosmossdk.io/x/staking/module"\n    "github.com/cosmos/cosmos-sdk/core/app"\n)\n\n// go:embed app.yaml\nvar appConfigYAML []byte\n\nfunc main() {\n    app.Run(app.LoadYAML(appConfigYAML))\n}\n')),(0,i.yg)("h3",{id:"application-to-existing-sdk-modules"},"Application to existing SDK modules"),(0,i.yg)("p",null,"So far we have described a system which is largely agnostic to the specifics of the SDK such as store keys, ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModule"),",\n",(0,i.yg)("inlineCode",{parentName:"p"},"BaseApp"),", etc. Improvements to these parts of the framework that integrate with the general app wiring framework\ndefined here are described in ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-063-core-module-api"},"ADR 063: Core Module API"),"."),(0,i.yg)("h3",{id:"registration-of-inter-module-hooks"},"Registration of Inter-Module Hooks"),(0,i.yg)("p",null,"Some modules define a hooks interface (ex. ",(0,i.yg)("inlineCode",{parentName:"p"},"StakingHooks"),") which allows one module to call back into another module\nwhen certain events happen."),(0,i.yg)("p",null,"With the app wiring framework, these hooks interfaces can be defined as a ",(0,i.yg)("inlineCode",{parentName:"p"},"OnePerModuleType"),"s and then the module\nwhich consumes these hooks can collect these hooks as a map of module name to hook type (ex. ",(0,i.yg)("inlineCode",{parentName:"p"},"map[string]FooHooks"),"). Ex:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func init() {\n    appconfig.RegisterModule(\n        &foomodulev1.Module{},\n        appconfig.Invoke(InvokeSetFooHooks),\n        ...\n    )\n}\nfunc InvokeSetFooHooks(\n    keeper *keeper.Keeper,\n    fooHooks map[string]FooHooks,\n) error {\n    for k in sort.Strings(maps.Keys(fooHooks)) {\n        keeper.AddFooHooks(fooHooks[k])\n    }\n}\n")),(0,i.yg)("p",null,"Optionally, the module consuming hooks can allow app's to define an order for calling these hooks based on module name\nin its config object."),(0,i.yg)("p",null,"An alternative way for registering hooks via reflection was considered where all keeper types are inspected to see if\nthey implement the hook interface by the modules exposing hooks. This has the downsides of:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"needing to expose all the keepers of all modules to the module providing hooks,"),(0,i.yg)("li",{parentName:"ul"},"not allowing for encapsulating hooks on a different type which doesn't expose all keeper methods,"),(0,i.yg)("li",{parentName:"ul"},"harder to know statically which module expose hooks or are checking for them.")),(0,i.yg)("p",null,"With the approach proposed here, hooks registration will be obviously observable in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," if ",(0,i.yg)("inlineCode",{parentName:"p"},"depinject")," codegen\n(described below) is used."),(0,i.yg)("h3",{id:"code-generation"},"Code Generation"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Not yet implemented")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"depinject")," framework will optionally allow the app configuration and dependency injection wiring to be code\ngenerated. This will allow:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"dependency injection wiring to be inspected as regular go code just like the existing ",(0,i.yg)("inlineCode",{parentName:"li"},"app.go"),","),(0,i.yg)("li",{parentName:"ul"},"dependency injection to be opt-in with manual wiring 100% still possible.")),(0,i.yg)("p",null,"Code generation requires that all providers and invokers and their parameters are exported and in non-internal packages."),(0,i.yg)("h3",{id:"module-semantic-versioning"},"Module Semantic Versioning"),(0,i.yg)("p",null,"When we start creating semantically versioned SDK modules that are in standalone go modules, a state machine breaking\nchange to a module should be handled as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the semantic major version should be incremented, and"),(0,i.yg)("li",{parentName:"ul"},"a new semantically versioned module config protobuf type should be created.")),(0,i.yg)("p",null,"For instance, if we have the SDK module for bank in the go module ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmossdk.io/x/bank")," with the module config type\n",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.module.v1.Module"),", and we want to make a state machine breaking change to the module, we would:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"create a new go module ",(0,i.yg)("inlineCode",{parentName:"li"},"cosmossdk.io/x/bank/v2"),","),(0,i.yg)("li",{parentName:"ul"},"with the module config protobuf type ",(0,i.yg)("inlineCode",{parentName:"li"},"cosmos.bank.module.v2.Module"),".")),(0,i.yg)("p",null,"This ",(0,i.yg)("em",{parentName:"p"},"does not")," mean that we need to increment the protobuf API version for bank. Both modules can support\n",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.v1"),", but ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmossdk.io/x/bank/v2")," will be a separate go module with a separate module config type."),(0,i.yg)("p",null,"This practice will eventually allow us to use appconfig to load new versions of a module via a configuration change."),(0,i.yg)("p",null,"Effectively, there should be a 1:1 correspondence between a semantically versioned go module and a\nversioned module config protobuf type, and major versioning bumps should occur whenever state machine breaking changes\nare made to a module."),(0,i.yg)("p",null,"NOTE: SDK modules that are standalone go modules ",(0,i.yg)("em",{parentName:"p"},"should not")," adopt semantic versioning until the concerns described in\n",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-054-semver-compatible-modules"},"ADR 054: Module Semantic Versioning")," are\naddressed. The short-term solution for this issue was left somewhat unresolved. However, the easiest tactic is\nlikely to use a standalone API go module and follow the guidelines described in this comment: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/11802#issuecomment-1406815181"},"https://github.com/cosmos/cosmos-sdk/pull/11802#issuecomment-1406815181"),". For the time-being, it is recommended that\nCosmos SDK modules continue to follow tried and true ",(0,i.yg)("a",{parentName:"p",href:"https://0ver.org"},"0-based versioning")," until an officially\nrecommended solution is provided. This section of the ADR will be updated when that happens and for now, this section\nshould be considered as a design recommendation for future adoption of semantic versioning."),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,i.yg)("p",null,"Modules which work with the new app wiring system do not need to drop their existing ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModule")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"NewKeeper"),"\nregistration paradigms. These two methods can live side-by-side for as long as is needed."),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"wiring up new apps will be simpler, more succinct and less error-prone"),(0,i.yg)("li",{parentName:"ul"},"it will be easier to develop and test standalone SDK modules without needing to replicate all of simapp"),(0,i.yg)("li",{parentName:"ul"},"it may be possible to dynamically load modules and upgrade chains without needing to do a coordinated stop and binary\nupgrade using this mechanism"),(0,i.yg)("li",{parentName:"ul"},"easier plugin integration"),(0,i.yg)("li",{parentName:"ul"},"dependency injection framework provides more automated reasoning about dependencies in the project, with a graph visualization.")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"it may be confusing when a dependency is missing although error messages, the GraphViz visualization, and global\nmodule registration may help with that")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"it will require work and education")),(0,i.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,i.yg)("p",null,"The protobuf type registration system described in this ADR has not been implemented and may need to be reconsidered in\nlight of code generation. It may be better to do this type registration with a DI provider."),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/c3edbb22cab8678c35e21fe0253919996b780c01/simapp/app.go"},"https://github.com/cosmos/cosmos-sdk/blob/c3edbb22cab8678c35e21fe0253919996b780c01/simapp/app.go")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/allinbits/cosmos-sdk-poc"},"https://github.com/allinbits/cosmos-sdk-poc")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/uber-go/dig"},"https://github.com/uber-go/dig")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/container"},"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/container")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/11802"},"https://github.com/cosmos/cosmos-sdk/pull/11802")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/cosmos-sdk/build/architecture/adr-063-core-module-api"},"ADR 063: Core Module API"))))}c.isMDXComponent=!0}}]);