"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[25108],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),y=i,u=d["".concat(p,".").concat(y)]||d[y]||m[y]||r;return t?n.createElement(u,l(l({ref:a},s),{},{components:t})):n.createElement(u,l({ref:a},s))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},55702:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(58168),i=(t(96540),t(15680));const r={},l="ADR 3: Dynamic Capability Store",o={unversionedId:"docs/build/architecture/adr-003-dynamic-capability-store",id:"docs/build/architecture/adr-003-dynamic-capability-store",title:"ADR 3: Dynamic Capability Store",description:"Changelog",source:"@site/cosmos-sdk/docs/build/architecture/adr-003-dynamic-capability-store.md",sourceDirName:"docs/build/architecture",slug:"/docs/build/architecture/adr-003-dynamic-capability-store",permalink:"/cosmos-sdk/next/docs/build/architecture/adr-003-dynamic-capability-store",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 002: SDK Documentation Structure",permalink:"/cosmos-sdk/next/docs/build/architecture/adr-002-docs-structure"},next:{title:"ADR 004: Split Denomination Keys",permalink:"/cosmos-sdk/next/docs/build/architecture/adr-004-split-denomination-keys"}},p={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Usage patterns",id:"usage-patterns",level:3},{value:"Initialisation",id:"initialisation",level:4},{value:"Creating, passing, claiming and using capabilities",id:"creating-passing-claiming-and-using-capabilities",level:4},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],s={toc:c},d="wrapper";function m(e){let{components:a,...t}=e;return(0,i.yg)(d,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-3-dynamic-capability-store"},"ADR 3: Dynamic Capability Store"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"12 December 2019: Initial version"),(0,i.yg)("li",{parentName:"ul"},"02 April 2020: Memory Store Revisions")),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"Full implementation of the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc"},"IBC specification")," requires the ability to create and authenticate object-capability keys at runtime (i.e., during transaction execution),\nas described in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-005-port-allocation#technical-specification"},"ICS 5"),". In the IBC specification, capability keys are created for each newly initialised\nport & channel, and are used to authenticate future usage of the port or channel. Since channels and potentially ports can be initialised during transaction execution, the state machine must be able to create\nobject-capability keys at this time."),(0,i.yg)("p",null,"At present, the Cosmos SDK does not have the ability to do this. Object-capability keys are currently pointers (memory addresses) of ",(0,i.yg)("inlineCode",{parentName:"p"},"StoreKey")," structs created at application initialisation in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go")," (",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/blob/dcbddd9f04b3086c0ad07ee65de16e7adedc7da4/app/app.go#L132"},"example"),")\nand passed to Keepers as fixed arguments (",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/blob/dcbddd9f04b3086c0ad07ee65de16e7adedc7da4/app/app.go#L160"},"example"),"). Keepers cannot create or store capability keys during transaction execution \u2014 although they could call ",(0,i.yg)("inlineCode",{parentName:"p"},"NewKVStoreKey")," and take the memory address\nof the returned struct, storing this in the Merklised store would result in a consensus fault, since the memory address will be different on each machine (this is intentional \u2014 were this not the case, the keys would be predictable and couldn't serve as object capabilities)."),(0,i.yg)("p",null,"Keepers need a way to keep a private map of store keys which can be altered during transaction execution, along with a suitable mechanism for regenerating the unique memory addresses (capability keys) in this map whenever the application is started or restarted, along with a mechanism to revert capability creation on tx failure.\nThis ADR proposes such an interface & mechanism."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"The Cosmos SDK will include a new ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper")," abstraction, which is responsible for provisioning,\ntracking, and authenticating capabilities at runtime. During application initialisation in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go"),",\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper")," will be hooked up to modules through unique function references\n(by calling ",(0,i.yg)("inlineCode",{parentName:"p"},"ScopeToModule"),", defined below) so that it can identify the calling module when later\ninvoked."),(0,i.yg)("p",null,"When the initial state is loaded from disk, the ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper"),"'s ",(0,i.yg)("inlineCode",{parentName:"p"},"Initialise")," function will create\nnew capability keys for all previously allocated capability identifiers (allocated during execution of\npast transactions and assigned to particular modes), and keep them in a memory-only store while the\nchain is running."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper")," will include a persistent ",(0,i.yg)("inlineCode",{parentName:"p"},"KVStore"),", a ",(0,i.yg)("inlineCode",{parentName:"p"},"MemoryStore"),", and an in-memory map.\nThe persistent ",(0,i.yg)("inlineCode",{parentName:"p"},"KVStore")," tracks which capability is owned by which modules.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"MemoryStore")," stores a forward mapping that maps from module name, capability tuples to capability names and\na reverse mapping that maps from module name, capability name to the capability index.\nSince we cannot marshal the capability into a ",(0,i.yg)("inlineCode",{parentName:"p"},"KVStore")," and unmarshal without changing the memory location of the capability,\nthe reverse mapping in the KVStore will simply map to an index. This index can then be used as a key in the ephemeral\ngo-map to retrieve the capability at the original memory location."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper")," will define the following types & functions:"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Capability")," is similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"StoreKey"),", but has a globally unique ",(0,i.yg)("inlineCode",{parentName:"p"},"Index()")," instead of\na name. A ",(0,i.yg)("inlineCode",{parentName:"p"},"String()")," method is provided for debugging."),(0,i.yg)("p",null,"A ",(0,i.yg)("inlineCode",{parentName:"p"},"Capability")," is simply a struct, the address of which is taken for the actual capability."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type Capability struct {\n  index uint64\n}\n")),(0,i.yg)("p",null,"A ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper")," contains a persistent store key, memory store key, and mapping of allocated module names."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type CapabilityKeeper struct {\n  persistentKey StoreKey\n  memKey        StoreKey\n  capMap        map[uint64]*Capability\n  moduleNames   map[string]interface{}\n  sealed        bool\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"CapabilityKeeper")," provides the ability to create ",(0,i.yg)("em",{parentName:"p"},"scoped")," sub-keepers which are tied to a\nparticular module name. These ",(0,i.yg)("inlineCode",{parentName:"p"},"ScopedCapabilityKeeper"),"s must be created at application initialisation\nand passed to modules, which can then use them to claim capabilities they receive and retrieve\ncapabilities which they own by name, in addition to creating new capabilities & authenticating capabilities\npassed by other modules."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type ScopedCapabilityKeeper struct {\n  persistentKey StoreKey\n  memKey        StoreKey\n  capMap        map[uint64]*Capability\n  moduleName    string\n}\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ScopeToModule")," is used to create a scoped sub-keeper with a particular name, which must be unique.\nIt MUST be called before ",(0,i.yg)("inlineCode",{parentName:"p"},"InitialiseAndSeal"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (ck CapabilityKeeper) ScopeToModule(moduleName string) ScopedCapabilityKeeper {\n    if ck.sealed {\n        panic("cannot scope to module via a sealed capability keeper")\n    }\n\n    if _, ok := ck.scopedModules[moduleName]; ok {\n        panic(fmt.Sprintf("cannot create multiple scoped keepers for the same module name: %s", moduleName))\n    }\n\n    ck.scopedModules[moduleName] = struct{}{}\n\n    return ScopedKeeper{\n        cdc:      ck.cdc,\n        storeKey: ck.storeKey,\n        memKey:   ck.memKey,\n        capMap:   ck.capMap,\n        module:   moduleName,\n    }\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"InitialiseAndSeal")," MUST be called exactly once, after loading the initial state and creating all\nnecessary ",(0,i.yg)("inlineCode",{parentName:"p"},"ScopedCapabilityKeeper"),"s, in order to populate the memory store with newly-created\ncapability keys in accordance with the keys previously claimed by particular modules and prevent the\ncreation of any new ",(0,i.yg)("inlineCode",{parentName:"p"},"ScopedCapabilityKeeper"),"s."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (ck CapabilityKeeper) InitialiseAndSeal(ctx Context) {\n  if ck.sealed {\n    panic("capability keeper is sealed")\n  }\n\n  persistentStore := ctx.KVStore(ck.persistentKey)\n  map := ctx.KVStore(ck.memKey)\n  \n  // initialise memory store for all names in persistent store\n  for index, value := range persistentStore.Iter() {\n    capability = &CapabilityKey{index: index}\n\n    for moduleAndCapability := range value {\n      moduleName, capabilityName := moduleAndCapability.Split("/")\n      memStore.Set(moduleName + "/fwd/" + capability, capabilityName)\n      memStore.Set(moduleName + "/rev/" + capabilityName, index)\n\n      ck.capMap[index] = capability\n    }\n  }\n\n  ck.sealed = true\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"NewCapability")," can be called by any module to create a new unique, unforgeable object-capability\nreference. The newly created capability is automatically persisted; the calling module need not\ncall ",(0,i.yg)("inlineCode",{parentName:"p"},"ClaimCapability"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (sck ScopedCapabilityKeeper) NewCapability(ctx Context, name string) (Capability, error) {\n  // check name not taken in memory store\n  if capStore.Get("rev/" + name) != nil {\n    return nil, errors.New("name already taken")\n  }\n\n  // fetch the current index\n  index := persistentStore.Get("index")\n  \n  // create a new capability\n  capability := &CapabilityKey{index: index}\n  \n  // set persistent store\n  persistentStore.Set(index, Set.singleton(sck.moduleName + "/" + name))\n  \n  // update the index\n  index++\n  persistentStore.Set("index", index)\n  \n  // set forward mapping in memory store from capability to name\n  memStore.Set(sck.moduleName + "/fwd/" + capability, name)\n  \n  // set reverse mapping in memory store from name to index\n  memStore.Set(sck.moduleName + "/rev/" + name, index)\n\n  // set the in-memory mapping from index to capability pointer\n  capMap[index] = capability\n  \n  // return the newly created capability\n  return capability\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"AuthenticateCapability")," can be called by any module to check that a capability\ndoes in fact correspond to a particular name (the name can be untrusted user input)\nwith which the calling module previously associated it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (sck ScopedCapabilityKeeper) AuthenticateCapability(name string, capability Capability) bool {\n  // return whether forward mapping in memory store matches name\n  return memStore.Get(sck.moduleName + "/fwd/" + capability) === name\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ClaimCapability")," allows a module to claim a capability key which it has received from another module\nso that future ",(0,i.yg)("inlineCode",{parentName:"p"},"GetCapability")," calls will succeed."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ClaimCapability")," MUST be called if a module which receives a capability wishes to access it by name\nin the future. Capabilities are multi-owner, so if multiple modules have a single ",(0,i.yg)("inlineCode",{parentName:"p"},"Capability")," reference,\nthey will all own it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (sck ScopedCapabilityKeeper) ClaimCapability(ctx Context, capability Capability, name string) error {\n  persistentStore := ctx.KVStore(sck.persistentKey)\n\n  // set forward mapping in memory store from capability to name\n  memStore.Set(sck.moduleName + "/fwd/" + capability, name)\n\n  // set reverse mapping in memory store from name to capability\n  memStore.Set(sck.moduleName + "/rev/" + name, capability)\n\n  // update owner set in persistent store\n  owners := persistentStore.Get(capability.Index())\n  owners.add(sck.moduleName + "/" + name)\n  persistentStore.Set(capability.Index(), owners)\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GetCapability")," allows a module to fetch a capability which it has previously claimed by name.\nThe module is not allowed to retrieve capabilities which it does not own."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (sck ScopedCapabilityKeeper) GetCapability(ctx Context, name string) (Capability, error) {\n  // fetch the index of capability using reverse mapping in memstore\n  index := memStore.Get(sck.moduleName + "/rev/" + name)\n\n  // fetch capability from go-map using index\n  capability := capMap[index]\n\n  // return the capability\n  return capability\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ReleaseCapability")," allows a module to release a capability which it had previously claimed. If no\nmore owners exist, the capability will be deleted globally."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (sck ScopedCapabilityKeeper) ReleaseCapability(ctx Context, capability Capability) err {\n  persistentStore := ctx.KVStore(sck.persistentKey)\n\n  name := capStore.Get(sck.moduleName + "/fwd/" + capability)\n  if name == nil {\n    return error("capability not owned by module")\n  }\n\n  // delete forward mapping in memory store\n  memoryStore.Delete(sck.moduleName + "/fwd/" + capability, name)\n\n  // delete reverse mapping in memory store\n  memoryStore.Delete(sck.moduleName + "/rev/" + name, capability)\n\n  // update owner set in persistent store\n  owners := persistentStore.Get(capability.Index())\n  owners.remove(sck.moduleName + "/" + name)\n  if owners.size() > 0 {\n    // there are still other owners, keep the capability around\n    persistentStore.Set(capability.Index(), owners)\n  } else {\n    // no more owners, delete the capability\n    persistentStore.Delete(capability.Index())\n    delete(capMap[capability.Index()])\n  }\n}\n')),(0,i.yg)("h3",{id:"usage-patterns"},"Usage patterns"),(0,i.yg)("h4",{id:"initialisation"},"Initialisation"),(0,i.yg)("p",null,"Any modules which use dynamic capabilities must be provided a ",(0,i.yg)("inlineCode",{parentName:"p"},"ScopedCapabilityKeeper")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.go"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'ck := NewCapabilityKeeper(persistentKey, memoryKey)\nmod1Keeper := NewMod1Keeper(ck.ScopeToModule("mod1"), ....)\nmod2Keeper := NewMod2Keeper(ck.ScopeToModule("mod2"), ....)\n\n// other initialisation logic ...\n\n// load initial state...\n\nck.InitialiseAndSeal(initialContext)\n')),(0,i.yg)("h4",{id:"creating-passing-claiming-and-using-capabilities"},"Creating, passing, claiming and using capabilities"),(0,i.yg)("p",null,"Consider the case where ",(0,i.yg)("inlineCode",{parentName:"p"},"mod1")," wants to create a capability, associate it with a resource (e.g. an IBC channel) by name, and then pass it to ",(0,i.yg)("inlineCode",{parentName:"p"},"mod2")," which will use it later:"),(0,i.yg)("p",null,"Module 1 would have the following code:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'capability := scopedCapabilityKeeper.NewCapability(ctx, "resourceABC")\nmod2Keeper.SomeFunction(ctx, capability, args...)\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"SomeFunction"),", running in module 2, could then claim the capability:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (k Mod2Keeper) SomeFunction(ctx Context, capability Capability) {\n  k.sck.ClaimCapability(ctx, capability, "resourceABC")\n  // other logic...\n}\n')),(0,i.yg)("p",null,"Later on, module 2 can retrieve that capability by name and pass it to module 1, which will authenticate it against the resource:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (k Mod2Keeper) SomeOtherFunction(ctx Context, name string) {\n  capability := k.sck.GetCapability(ctx, name)\n  mod1.UseResource(ctx, capability, "resourceABC")\n}\n')),(0,i.yg)("p",null,"Module 1 will then check that this capability key is authenticated to use the resource before allowing module 2 to use it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'func (k Mod1Keeper) UseResource(ctx Context, capability Capability, resource string) {\n  if !k.sck.AuthenticateCapability(name, capability) {\n    return errors.New("unauthenticated")\n  }\n  // do something with the resource\n}\n')),(0,i.yg)("p",null,"If module 2 passed the capability key to module 3, module 3 could then claim it and call module 1 just like module 2 did\n(in which case module 1, module 2, and module 3 would all be able to use this capability)."),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Proposed."),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Dynamic capability support."),(0,i.yg)("li",{parentName:"ul"},"Allows CapabilityKeeper to return the same capability pointer from go-map while reverting any writes to the persistent ",(0,i.yg)("inlineCode",{parentName:"li"},"KVStore")," and in-memory ",(0,i.yg)("inlineCode",{parentName:"li"},"MemoryStore")," on tx failure.")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Requires an additional keeper."),(0,i.yg)("li",{parentName:"ul"},"Some overlap with the existing ",(0,i.yg)("inlineCode",{parentName:"li"},"StoreKey")," system (in the future they could be combined, since this is a superset functionality-wise)."),(0,i.yg)("li",{parentName:"ul"},"Requires an extra level of indirection in the reverse mapping, since MemoryStore must map to index which must then be used as key in a go map to retrieve the actual capability")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("p",null,"(none known)"),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/5230#discussion_r343978513"},"Original discussion"))))}m.isMDXComponent=!0}}]);