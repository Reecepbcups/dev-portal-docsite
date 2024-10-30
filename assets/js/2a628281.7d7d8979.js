"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[31639],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,u=d["".concat(l,".").concat(m)]||d[m]||g[m]||i;return t?a.createElement(u,r(r({ref:n},p),{},{components:t})):a.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const i={},r="ADR 019: Protocol Buffer State Encoding",s={unversionedId:"build/architecture/adr-019-protobuf-state-encoding",id:"version-0.52/build/architecture/adr-019-protobuf-state-encoding",title:"ADR 019: Protocol Buffer State Encoding",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-019-protobuf-state-encoding.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-019-protobuf-state-encoding",permalink:"/cosmos-sdk/build/architecture/adr-019-protobuf-state-encoding",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 18: Extendable Voting Periods",permalink:"/cosmos-sdk/build/architecture/adr-018-extendable-voting-period"},next:{title:"ADR 020: Protocol Buffer Transaction Encoding",permalink:"/cosmos-sdk/build/architecture/adr-020-protobuf-transaction-encoding"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Module Codecs",id:"module-codecs",level:3},{value:"Usage of <code>Any</code> to encode interfaces",id:"usage-of-any-to-encode-interfaces",level:3},{value:"Safe usage of <code>Any</code>",id:"safe-usage-of-any",level:3},{value:"Using <code>Any</code> to encode state",id:"using-any-to-encode-state",level:3},{value:"Using <code>Any</code> in <code>sdk.Msg</code>s",id:"using-any-in-sdkmsgs",level:3},{value:"Unpacking Interfaces",id:"unpacking-interfaces",level:3},{value:"Amino Compatibility",id:"amino-compatibility",level:3},{value:"Why Wasn&#39;t X Chosen Instead",id:"why-wasnt-x-chosen-instead",level:3},{value:"Cap&#39;n Proto",id:"capn-proto",level:3},{value:"FlatBuffers",id:"flatbuffers",level:3},{value:"Future Improvements &amp; Roadmap",id:"future-improvements--roadmap",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-019-protocol-buffer-state-encoding"},"ADR 019: Protocol Buffer State Encoding"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"2020 Feb 15: Initial Draft"),(0,o.yg)("li",{parentName:"ul"},"2020 Feb 24: Updates to handle messages with interface fields"),(0,o.yg)("li",{parentName:"ul"},"2020 Apr 27: Convert usages of ",(0,o.yg)("inlineCode",{parentName:"li"},"oneof")," for interfaces to ",(0,o.yg)("inlineCode",{parentName:"li"},"Any")),(0,o.yg)("li",{parentName:"ul"},"2020 May 15: Describe ",(0,o.yg)("inlineCode",{parentName:"li"},"cosmos_proto")," extensions and amino compatibility"),(0,o.yg)("li",{parentName:"ul"},"2020 Dec 4: Move and rename ",(0,o.yg)("inlineCode",{parentName:"li"},"MarshalAny")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"UnmarshalAny")," into the ",(0,o.yg)("inlineCode",{parentName:"li"},"codec.Codec")," interface."),(0,o.yg)("li",{parentName:"ul"},"2021 Feb 24: Remove mentions of ",(0,o.yg)("inlineCode",{parentName:"li"},"HybridCodec"),", which has been abandoned in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/6843"},"#6843"),".")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"Accepted"),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"Currently, the Cosmos SDK utilizes ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/tendermint/go-amino/"},"go-amino")," for binary\nand JSON object encoding over the wire bringing parity between logical objects and persistence objects."),(0,o.yg)("p",null,"From the Amino docs:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Amino is an object encoding specification. It is a subset of Proto3 with an extension for interface\nsupport. See the ",(0,o.yg)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/proto3/"},"Proto3 spec")," for more\ninformation on Proto3, which Amino is largely compatible with (but not with Proto2)."),(0,o.yg)("p",{parentName:"blockquote"},"The goal of the Amino encoding protocol is to bring parity into logic objects and persistence objects.")),(0,o.yg)("p",null,"Amino also aims to have the following goals (not a complete list):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Binary bytes must be decode-able with a schema."),(0,o.yg)("li",{parentName:"ul"},"Schema must be upgradeable."),(0,o.yg)("li",{parentName:"ul"},"The encoder and decoder logic must be reasonably simple.")),(0,o.yg)("p",null,"However, we believe that Amino does not fulfill these goals completely and does not fully meet the\nneeds of a truly flexible cross-language and multi-client compatible encoding protocol in the Cosmos SDK.\nNamely, Amino has proven to be a big pain-point in regards to supporting object serialization across\nclients written in various languages while providing virtually little in the way of true backwards\ncompatibility and upgradeability. Furthermore, through profiling and various benchmarks, Amino has\nbeen shown to be an extremely large performance bottleneck in the Cosmos SDK ",(0,o.yg)("sup",null,"1"),". This is\nlargely reflected in the performance of simulations and application transaction throughput."),(0,o.yg)("p",null,"Thus, we need to adopt an encoding protocol that meets the following criteria for state serialization:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Language agnostic"),(0,o.yg)("li",{parentName:"ul"},"Platform agnostic"),(0,o.yg)("li",{parentName:"ul"},"Rich client support and thriving ecosystem"),(0,o.yg)("li",{parentName:"ul"},"High performance"),(0,o.yg)("li",{parentName:"ul"},"Minimal encoded message size"),(0,o.yg)("li",{parentName:"ul"},"Codegen-based over reflection-based"),(0,o.yg)("li",{parentName:"ul"},"Supports backward and forward compatibility")),(0,o.yg)("p",null,"Note, migrating away from Amino should be viewed as a two-pronged approach, state and client encoding.\nThis ADR focuses on state serialization in the Cosmos SDK state machine. A corresponding ADR will be\nmade to address client-side encoding."),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("p",null,"We will adopt ",(0,o.yg)("a",{parentName:"p",href:"https://protobuf.dev"},"Protocol Buffers")," for serializing\npersisted structured data in the Cosmos SDK while providing a clean mechanism and developer UX for\napplications wishing to continue to use Amino. We will provide this mechanism by updating modules to\naccept a codec interface, ",(0,o.yg)("inlineCode",{parentName:"p"},"Marshaler"),", instead of a concrete Amino codec. Furthermore, the Cosmos SDK\nwill provide two concrete implementations of the ",(0,o.yg)("inlineCode",{parentName:"p"},"Marshaler")," interface: ",(0,o.yg)("inlineCode",{parentName:"p"},"AminoCodec")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ProtoCodec"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"AminoCodec"),": Uses Amino for both binary and JSON encoding."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ProtoCodec"),": Uses Protobuf for both binary and JSON encoding.")),(0,o.yg)("p",null,"Modules will use whichever codec that is instantiated in the app. By default, the Cosmos SDK's ",(0,o.yg)("inlineCode",{parentName:"p"},"simapp"),"\ninstantiates a ",(0,o.yg)("inlineCode",{parentName:"p"},"ProtoCodec")," as the concrete implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"Marshaler"),", inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"MakeTestEncodingConfig"),"\nfunction. This can be easily overwritten by app developers if they so desire."),(0,o.yg)("p",null,"The ultimate goal will be to replace Amino JSON encoding with Protobuf encoding and thus have\nmodules accept and/or extend ",(0,o.yg)("inlineCode",{parentName:"p"},"ProtoCodec"),". Until then, Amino JSON is still provided for legacy use-cases.\nA handful of places in the Cosmos SDK still have Amino JSON hardcoded, such as the Legacy API REST endpoints\nand the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/params")," store. They are planned to be converted to Protobuf in a gradual manner."),(0,o.yg)("h3",{id:"module-codecs"},"Module Codecs"),(0,o.yg)("p",null,"Modules that do not require the ability to work with and serialize interfaces, the path to Protobuf\nmigration is pretty straightforward. These modules are to simply migrate any existing types that\nare encoded and persisted via their concrete Amino codec to Protobuf and have their keeper accept a\n",(0,o.yg)("inlineCode",{parentName:"p"},"Marshaler")," that will be a ",(0,o.yg)("inlineCode",{parentName:"p"},"ProtoCodec"),". This migration is simple as things will just work as-is."),(0,o.yg)("p",null,"Note, any business logic that needs to encode primitive types like ",(0,o.yg)("inlineCode",{parentName:"p"},"bool")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"int64")," should use\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gogoproto"},"gogoprotobuf")," Value types."),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"  ts, err := gogotypes.TimestampProto(completionTime)\n  if err != nil {\n    // ...\n  }\n\n  bz := cdc.MustMarshal(ts)\n")),(0,o.yg)("p",null,"However, modules can vary greatly in purpose and design and so we must support the ability for modules\nto be able to encode and work with interfaces (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"Account")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Content"),"). For these modules, they\nmust define their own codec interface that extends ",(0,o.yg)("inlineCode",{parentName:"p"},"Marshaler"),". These specific interfaces are unique\nto the module and will contain method contracts that know how to serialize the needed interfaces."),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// x/auth/types/codec.go\n\ntype Codec interface {\n  codec.Codec\n\n  MarshalAccount(acc exported.Account) ([]byte, error)\n  UnmarshalAccount(bz []byte) (exported.Account, error)\n\n  MarshalAccountJSON(acc exported.Account) ([]byte, error)\n  UnmarshalAccountJSON(bz []byte) (exported.Account, error)\n}\n")),(0,o.yg)("h3",{id:"usage-of-any-to-encode-interfaces"},"Usage of ",(0,o.yg)("inlineCode",{parentName:"h3"},"Any")," to encode interfaces"),(0,o.yg)("p",null,"In general, module-level .proto files should define messages which encode interfaces\nusing ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto"},(0,o.yg)("inlineCode",{parentName:"a"},"google.protobuf.Any")),".\nAfter ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6030"},"extension discussion"),",\nthis was chosen as the preferred alternative to application-level ",(0,o.yg)("inlineCode",{parentName:"p"},"oneof"),"s\nas in our original protobuf design. The arguments in favor of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," can be\nsummarized as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Any")," provides a simpler, more consistent client UX for dealing with\ninterfaces than app-level ",(0,o.yg)("inlineCode",{parentName:"li"},"oneof"),"s that will need to be coordinated more\ncarefully across applications. Creating a generic transaction\nsigning library using ",(0,o.yg)("inlineCode",{parentName:"li"},"oneof"),"s may be cumbersome and critical logic may need\nto be reimplemented for each chain"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Any")," provides more resistance against human error than ",(0,o.yg)("inlineCode",{parentName:"li"},"oneof")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Any")," is generally simpler to implement for both modules and apps")),(0,o.yg)("p",null,"The main counter-argument to using ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," centers around its additional space\nand possibly performance overhead. The space overhead could be dealt with using\ncompression at the persistence layer in the future and the performance impact\nis likely to be small. Thus, not using ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," is seem as a pre-mature optimization,\nwith user experience as the higher order concern."),(0,o.yg)("p",null,"Note, that given the Cosmos SDK's decision to adopt the ",(0,o.yg)("inlineCode",{parentName:"p"},"Codec")," interfaces described\nabove, apps can still choose to use ",(0,o.yg)("inlineCode",{parentName:"p"},"oneof")," to encode state and transactions\nbut it is not the recommended approach. If apps do choose to use ",(0,o.yg)("inlineCode",{parentName:"p"},"oneof"),"s\ninstead of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," they will likely lose compatibility with client apps that\nsupport multiple chains. Thus developers should think carefully about whether\nthey care more about what is possibly a pre-mature optimization or end-user\nand client developer UX."),(0,o.yg)("h3",{id:"safe-usage-of-any"},"Safe usage of ",(0,o.yg)("inlineCode",{parentName:"h3"},"Any")),(0,o.yg)("p",null,"By default, the ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/gogoproto/types"},"gogo protobuf implementation of ",(0,o.yg)("inlineCode",{parentName:"a"},"Any")),"\nuses ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gogoproto/blob/master/proto/properties.go#L540"},"global type registration"),"\nto decode values packed in ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," into concrete\ngo types. This introduces a vulnerability where any malicious module\nin the dependency tree could register a type with the global protobuf registry\nand cause it to be loaded and unmarshaled by a transaction that referenced\nit in the ",(0,o.yg)("inlineCode",{parentName:"p"},"type_url")," field."),(0,o.yg)("p",null,"To prevent this, we introduce a type registration mechanism for decoding ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),"\nvalues into concrete types through the ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry")," interface which\nbears some similarity to type registration with Amino:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'type InterfaceRegistry interface {\n    // RegisterInterface associates protoName as the public name for the\n    // interface passed in as iface\n    // Ex:\n    //   registry.RegisterInterface("cosmos_sdk.Msg", (*sdk.Msg)(nil))\n    RegisterInterface(protoName string, iface interface{})\n\n    // RegisterImplementations registers impls as a concrete implementations of\n    // the interface iface\n    // Ex:\n    //  registry.RegisterImplementations((*sdk.Msg)(nil), &MsgSend{}, &MsgMultiSend{})\n    RegisterImplementations(iface interface{}, impls ...proto.Message)\n\n}\n')),(0,o.yg)("p",null,"In addition to serving as a whitelist, ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry")," can also serve\nto communicate the list of concrete types that satisfy an interface to clients."),(0,o.yg)("p",null,"In .proto files:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"fields which accept interfaces should be annotated with ",(0,o.yg)("inlineCode",{parentName:"li"},"cosmos_proto.accepts_interface"),"\nusing the same full-qualified name passed as ",(0,o.yg)("inlineCode",{parentName:"li"},"protoName")," to ",(0,o.yg)("inlineCode",{parentName:"li"},"InterfaceRegistry.RegisterInterface")),(0,o.yg)("li",{parentName:"ul"},"interface implementations should be annotated with ",(0,o.yg)("inlineCode",{parentName:"li"},"cosmos_proto.implements_interface"),"\nusing the same full-qualified name passed as ",(0,o.yg)("inlineCode",{parentName:"li"},"protoName")," to ",(0,o.yg)("inlineCode",{parentName:"li"},"InterfaceRegistry.RegisterInterface"))),(0,o.yg)("p",null,"In the future, ",(0,o.yg)("inlineCode",{parentName:"p"},"protoName"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"cosmos_proto.accepts_interface"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"cosmos_proto.implements_interface"),"\nmay be used via code generation, reflection &/or static linting."),(0,o.yg)("p",null,"The same struct that implements ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry")," will also implement an\ninterface ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceUnpacker")," to be used for unpacking ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),"s:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type InterfaceUnpacker interface {\n    // UnpackAny unpacks the value in any to the interface pointer passed in as\n    // iface. Note that the type in any must have been registered with\n    // RegisterImplementations as a concrete type for that interface\n    // Ex:\n    //    var msg sdk.Msg\n    //    err := ctx.UnpackAny(any, &msg)\n    //    ...\n    UnpackAny(any *Any, iface interface{}) error\n}\n")),(0,o.yg)("p",null,"Note that ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry")," usage does not deviate from standard protobuf\nusage of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),", it just introduces a security and introspection layer for\ngolang usage."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry")," will be a member of ",(0,o.yg)("inlineCode",{parentName:"p"},"ProtoCodec"),"\ndescribed above. In order for modules to register interface types, app modules\ncan optionally implement the following interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type InterfaceModule interface {\n    RegisterInterfaceTypes(InterfaceRegistry)\n}\n")),(0,o.yg)("p",null,"The module manager will include a method to call ",(0,o.yg)("inlineCode",{parentName:"p"},"RegisterInterfaceTypes")," on\nevery module that implements it in order to populate the ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry"),"."),(0,o.yg)("h3",{id:"using-any-to-encode-state"},"Using ",(0,o.yg)("inlineCode",{parentName:"h3"},"Any")," to encode state"),(0,o.yg)("p",null,"The Cosmos SDK will provide support methods ",(0,o.yg)("inlineCode",{parentName:"p"},"MarshalInterface")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"UnmarshalInterface")," to hide a complexity of wrapping interface types into ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," and allow easy serialization."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'import "github.com/cosmos/cosmos-sdk/codec"\n\n// note: eviexported.Evidence is an interface type\nfunc MarshalEvidence(cdc codec.BinaryCodec, e eviexported.Evidence) ([]byte, error) {\n    return cdc.MarshalInterface(e)\n}\n\nfunc UnmarshalEvidence(cdc codec.BinaryCodec, bz []byte) (eviexported.Evidence, error) {\n    var evi eviexported.Evidence\n    err := cdc.UnmarshalInterface(&evi, bz)\n    return err, nil\n}\n')),(0,o.yg)("h3",{id:"using-any-in-sdkmsgs"},"Using ",(0,o.yg)("inlineCode",{parentName:"h3"},"Any")," in ",(0,o.yg)("inlineCode",{parentName:"h3"},"sdk.Msg"),"s"),(0,o.yg)("p",null,"A similar concept is to be applied for messages that contain interfaces fields.\nFor example, we can define ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgSubmitEvidence")," as follows where ",(0,o.yg)("inlineCode",{parentName:"p"},"Evidence")," is\nan interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'// x/evidence/types/types.proto\n\nmessage MsgSubmitEvidence {\n  bytes submitter = 1\n    [\n      (gogoproto.casttype) = "github.com/cosmos/cosmos-sdk/types.AccAddress"\n    ];\n  google.protobuf.Any evidence = 2;\n}\n')),(0,o.yg)("p",null,"Note that in order to unpack the evidence from ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," we do need a reference to\n",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry"),". In order to reference evidence in methods like\n",(0,o.yg)("inlineCode",{parentName:"p"},"ValidateBasic")," which shouldn't have to know about the ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry"),", we\nintroduce an ",(0,o.yg)("inlineCode",{parentName:"p"},"UnpackInterfaces")," phase to deserialization which unpacks\ninterfaces before they're needed."),(0,o.yg)("h3",{id:"unpacking-interfaces"},"Unpacking Interfaces"),(0,o.yg)("p",null,"To implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"UnpackInterfaces")," phase of deserialization which unpacks\ninterfaces wrapped in ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," before they're needed, we create an interface\nthat ",(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"s and other types can implement:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type UnpackInterfacesMessage interface {\n  UnpackInterfaces(InterfaceUnpacker) error\n}\n")),(0,o.yg)("p",null,"We also introduce a private ",(0,o.yg)("inlineCode",{parentName:"p"},"cachedValue interface{}")," field onto the ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),"\nstruct itself with a public getter ",(0,o.yg)("inlineCode",{parentName:"p"},"GetCachedValue() interface{}"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"UnpackInterfaces")," method is to be invoked during message deserialization right\nafter ",(0,o.yg)("inlineCode",{parentName:"p"},"Unmarshal")," and any interface values packed in ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),"s will be decoded\nand stored in ",(0,o.yg)("inlineCode",{parentName:"p"},"cachedValue")," for reference later."),(0,o.yg)("p",null,"Then unpacked interface values can safely be used in any code afterwards\nwithout knowledge of the ",(0,o.yg)("inlineCode",{parentName:"p"},"InterfaceRegistry"),"\nand messages can introduce a simple getter to cast the cached value to the\ncorrect interface type."),(0,o.yg)("p",null,"This has the added benefit that unmarshaling of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," values only happens once\nduring initial deserialization rather than every time the value is read. Also,\nwhen ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," values are first packed (for instance in a call to\n",(0,o.yg)("inlineCode",{parentName:"p"},"NewMsgSubmitEvidence"),"), the original interface value is cached so that\nunmarshaling isn't needed to read it again."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"MsgSubmitEvidence")," could implement ",(0,o.yg)("inlineCode",{parentName:"p"},"UnpackInterfaces"),", plus a convenience getter\n",(0,o.yg)("inlineCode",{parentName:"p"},"GetEvidence")," as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"func (msg MsgSubmitEvidence) UnpackInterfaces(ctx sdk.InterfaceRegistry) error {\n  var evi eviexported.Evidence\n  return ctx.UnpackAny(msg.Evidence, *evi)\n}\n\nfunc (msg MsgSubmitEvidence) GetEvidence() eviexported.Evidence {\n  return msg.Evidence.GetCachedValue().(eviexported.Evidence)\n}\n")),(0,o.yg)("h3",{id:"amino-compatibility"},"Amino Compatibility"),(0,o.yg)("p",null,"Our custom implementation of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," can be used transparently with Amino if used\nwith the proper codec instance. What this means is that interfaces packed within\n",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),"s will be amino marshaled like regular Amino interfaces (assuming they\nhave been registered properly with Amino)."),(0,o.yg)("p",null,"In order for this functionality to work:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"all legacy code must use ",(0,o.yg)("inlineCode",{parentName:"strong"},"*codec.LegacyAmino")," instead of ",(0,o.yg)("inlineCode",{parentName:"strong"},"*amino.Codec")," which is\nnow a wrapper which properly handles ",(0,o.yg)("inlineCode",{parentName:"strong"},"Any"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"all new code should use ",(0,o.yg)("inlineCode",{parentName:"strong"},"Marshaler")," which is compatible with both amino and\nprotobuf")),(0,o.yg)("li",{parentName:"ul"},"Also, before v0.39, ",(0,o.yg)("inlineCode",{parentName:"li"},"codec.LegacyAmino")," will be renamed to ",(0,o.yg)("inlineCode",{parentName:"li"},"codec.LegacyAmino"),".")),(0,o.yg)("h3",{id:"why-wasnt-x-chosen-instead"},"Why Wasn't X Chosen Instead"),(0,o.yg)("p",null,"For a more complete comparison to alternative protocols, see ",(0,o.yg)("a",{parentName:"p",href:"https://codeburst.io/json-vs-protocol-buffers-vs-flatbuffers-a4247f8bda6f"},"here"),"."),(0,o.yg)("h3",{id:"capn-proto"},"Cap'n Proto"),(0,o.yg)("p",null,"While ",(0,o.yg)("a",{parentName:"p",href:"https://capnproto.org/"},"Cap\u2019n Proto")," does seem like an advantageous alternative to Protobuf\ndue to it's native support for interfaces/generics and built in canonicalization, it does lack the\nrich client ecosystem compared to Protobuf and is a bit less mature."),(0,o.yg)("h3",{id:"flatbuffers"},"FlatBuffers"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://google.github.io/flatbuffers/"},"FlatBuffers")," is also a potentially viable alternative, with the\nprimary difference being that FlatBuffers does not need a parsing/unpacking step to a secondary\nrepresentation before you can access data, often coupled with per-object memory allocation."),(0,o.yg)("p",null,"However, it would require great efforts into research and full understanding the scope of the migration\nand path forward -- which isn't immediately clear. In addition, FlatBuffers aren't designed for\nuntrusted inputs."),(0,o.yg)("h2",{id:"future-improvements--roadmap"},"Future Improvements & Roadmap"),(0,o.yg)("p",null,"In the future we may consider a compression layer right above the persistence\nlayer which doesn't change tx or merkle tree hashes, but reduces the storage\noverhead of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any"),". In addition, we may adopt protobuf naming conventions which\nmake type URLs a bit more concise while remaining descriptive."),(0,o.yg)("p",null,"Additional code generation support around the usage of ",(0,o.yg)("inlineCode",{parentName:"p"},"Any")," is something that\ncould also be explored in the future to make the UX for go developers more\nseamless."),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Significant performance gains."),(0,o.yg)("li",{parentName:"ul"},"Supports backward and forward type compatibility."),(0,o.yg)("li",{parentName:"ul"},"Better support for cross-language clients.")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Learning curve required to understand and implement Protobuf messages."),(0,o.yg)("li",{parentName:"ul"},"Slightly larger message size due to use of ",(0,o.yg)("inlineCode",{parentName:"li"},"Any"),", although this could be offset\nby a compression layer in the future")),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4977"},"https://github.com/cosmos/cosmos-sdk/issues/4977")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/5444"},"https://github.com/cosmos/cosmos-sdk/issues/5444"))))}g.isMDXComponent=!0}}]);