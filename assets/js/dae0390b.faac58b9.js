"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[15203],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={},l="ADR 012: State Accessors",o={unversionedId:"build/architecture/adr-012-state-accessors",id:"version-0.50/build/architecture/adr-012-state-accessors",title:"ADR 012: State Accessors",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-012-state-accessors.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-012-state-accessors",permalink:"/cosmos-sdk/0.50/build/architecture/adr-012-state-accessors",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 011: Generalize Genesis Accounts",permalink:"/cosmos-sdk/0.50/build/architecture/adr-011-generalize-genesis-accounts"},next:{title:"ADR 013: Observability",permalink:"/cosmos-sdk/0.50/build/architecture/adr-013-metrics"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-012-state-accessors"},"ADR 012: State Accessors"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2019 Sep 04: Initial draft")),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"Cosmos SDK modules currently use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KVStore")," interface and ",(0,r.yg)("inlineCode",{parentName:"p"},"Codec")," to access their respective state. While\nthis provides a large degree of freedom to module developers, it is hard to modularize and the UX is\nmediocre."),(0,r.yg)("p",null,"First, each time a module tries to access the state, it has to marshal the value and set or get the\nvalue and finally unmarshal. Usually this is done by declaring ",(0,r.yg)("inlineCode",{parentName:"p"},"Keeper.GetXXX")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Keeper.SetXXX")," functions,\nwhich are repetitive and hard to maintain."),(0,r.yg)("p",null,"Second, this makes it harder to align with the object capability theorem: the right to access the\nstate is defined as a ",(0,r.yg)("inlineCode",{parentName:"p"},"StoreKey"),", which gives full access on the entire Merkle tree, so a module cannot\nsend the access right to a specific key-value pair (or a set of key-value pairs) to another module safely."),(0,r.yg)("p",null,"Finally, because the getter/setter functions are defined as methods of a module's ",(0,r.yg)("inlineCode",{parentName:"p"},"Keeper"),", the reviewers\nhave to consider the whole Merkle tree space when they reviewing a function accessing any part of the state.\nThere is no static way to know which part of the state that the function is accessing (and which is not)."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("p",null,"We will define a type named ",(0,r.yg)("inlineCode",{parentName:"p"},"Value"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type Value struct {\n  m   Mapping\n  key []byte\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Value")," works as a reference for a key-value pair in the state, where ",(0,r.yg)("inlineCode",{parentName:"p"},"Value.m")," defines the key-value\nspace it will access and ",(0,r.yg)("inlineCode",{parentName:"p"},"Value.key")," defines the exact key for the reference."),(0,r.yg)("p",null,"We will define a type named ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type Mapping struct {\n  storeKey sdk.StoreKey\n  cdc      *codec.LegacyAmino\n  prefix   []byte\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping")," works as a reference for a key-value space in the state, where ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping.storeKey")," defines\nthe IAVL (sub-)tree and ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping.prefix")," defines the optional subspace prefix."),(0,r.yg)("p",null,"We will define the following core methods for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Value")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"// Get and unmarshal stored data, noop if not exists, panic if cannot unmarshal\nfunc (Value) Get(ctx Context, ptr interface{}) {}\n\n// Get and unmarshal stored data, return error if not exists or cannot unmarshal\nfunc (Value) GetSafe(ctx Context, ptr interface{}) {}\n\n// Get stored data as raw byte slice\nfunc (Value) GetRaw(ctx Context) []byte {}\n\n// Marshal and set a raw value\nfunc (Value) Set(ctx Context, o interface{}) {}\n\n// Check if a raw value exists\nfunc (Value) Exists(ctx Context) bool {}\n\n// Delete a raw value value\nfunc (Value) Delete(ctx Context) {}\n")),(0,r.yg)("p",null,"We will define the following core methods for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"// Constructs key-value pair reference corresponding to the key argument in the Mapping space\nfunc (Mapping) Value(key []byte) Value {}\n\n// Get and unmarshal stored data, noop if not exists, panic if cannot unmarshal\nfunc (Mapping) Get(ctx Context, key []byte, ptr interface{}) {}\n\n// Get and unmarshal stored data, return error if not exists or cannot unmarshal\nfunc (Mapping) GetSafe(ctx Context, key []byte, ptr interface{})\n\n// Get stored data as raw byte slice\nfunc (Mapping) GetRaw(ctx Context, key []byte) []byte {}\n\n// Marshal and set a raw value\nfunc (Mapping) Set(ctx Context, key []byte, o interface{}) {}\n\n// Check if a raw value exists\nfunc (Mapping) Has(ctx Context, key []byte) bool {}\n\n// Delete a raw value value\nfunc (Mapping) Delete(ctx Context, key []byte) {}\n")),(0,r.yg)("p",null,"Each method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping")," type that is passed the arguments ",(0,r.yg)("inlineCode",{parentName:"p"},"ctx"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"key"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"args...")," will proxy\nthe call to ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping.Value(key)")," with arguments ",(0,r.yg)("inlineCode",{parentName:"p"},"ctx")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"args..."),"."),(0,r.yg)("p",null,"In addition, we will define and provide a common set of types derived from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Value")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type Boolean struct { Value }\ntype Enum struct { Value }\ntype Integer struct { Value; enc IntEncoding }\ntype String struct { Value }\n// ...\n")),(0,r.yg)("p",null,"Where the encoding schemes can be different, ",(0,r.yg)("inlineCode",{parentName:"p"},"o")," arguments in core methods are typed, and ",(0,r.yg)("inlineCode",{parentName:"p"},"ptr")," arguments\nin core methods are replaced by explicit return types."),(0,r.yg)("p",null,"Finally, we will define a family of types derived from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Mapping")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type Indexer struct {\n  m   Mapping\n  enc IntEncoding\n}\n")),(0,r.yg)("p",null,"Where the ",(0,r.yg)("inlineCode",{parentName:"p"},"key")," argument in core method is typed."),(0,r.yg)("p",null,"Some of the properties of the accessor types are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"State access happens only when a function which takes a ",(0,r.yg)("inlineCode",{parentName:"li"},"Context")," as an argument is invoked"),(0,r.yg)("li",{parentName:"ul"},"Accessor type structs give rights to access the state only that the struct is referring, no other"),(0,r.yg)("li",{parentName:"ul"},"Marshalling/Unmarshalling happens implicitly within the core methods")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Proposed"),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Serialization will be done automatically"),(0,r.yg)("li",{parentName:"ul"},"Shorter code size, less boilerplate, better UX"),(0,r.yg)("li",{parentName:"ul"},"References to the state can be transferred safely"),(0,r.yg)("li",{parentName:"ul"},"Explicit scope of accessing")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Serialization format will be hidden"),(0,r.yg)("li",{parentName:"ul"},"Different architecture from the current, but the use of accessor types can be opt-in"),(0,r.yg)("li",{parentName:"ul"},"Type-specific types (e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},"Boolean")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"Integer"),") have to be defined manually")),(0,r.yg)("h3",{id:"neutral"},"Neutral"),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4554"},"#4554"))))}d.isMDXComponent=!0}}]);