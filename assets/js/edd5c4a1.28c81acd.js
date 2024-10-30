"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[67466],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=i,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return a?t.createElement(m,r(r({ref:n},d),{},{components:a})):t.createElement(m,r({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},29051:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(58168),i=(a(96540),a(15680));const o={},r="ADR 023: Protocol Buffer Naming and Versioning Conventions",s={unversionedId:"build/architecture/adr-023-protobuf-naming",id:"version-0.52/build/architecture/adr-023-protobuf-naming",title:"ADR 023: Protocol Buffer Naming and Versioning Conventions",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-023-protobuf-naming.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-023-protobuf-naming",permalink:"/cosmos-sdk/build/architecture/adr-023-protobuf-naming",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 022: Custom BaseApp panic handling",permalink:"/cosmos-sdk/build/architecture/adr-022-custom-panic-handling"},next:{title:"ADR 024: Coin Metadata",permalink:"/cosmos-sdk/build/architecture/adr-024-coin-metadata"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Adoption of <code>Any</code>",id:"adoption-of-any",level:3},{value:"Current Directory Organization",id:"current-directory-organization",level:3},{value:"Adoption of gRPC Queries",id:"adoption-of-grpc-queries",level:3},{value:"Decision",id:"decision",level:2},{value:"Principles",id:"principles",level:3},{value:"Concise and Descriptive Names",id:"concise-and-descriptive-names",level:4},{value:"Names are for Clients First",id:"names-are-for-clients-first",level:4},{value:"Plan for Longevity",id:"plan-for-longevity",level:4},{value:"Versioning",id:"versioning",level:3},{value:"Guidelines on Stable Package Versions",id:"guidelines-on-stable-package-versions",level:4},{value:"Guidelines on unstable (alpha and beta) package versions",id:"guidelines-on-unstable-alpha-and-beta-package-versions",level:4},{value:"Omit v1 suffix",id:"omit-v1-suffix",level:4},{value:"Package Naming",id:"package-naming",level:3},{value:"Adopt a short, unique top-level package name",id:"adopt-a-short-unique-top-level-package-name",level:4},{value:"Limit sub-package depth",id:"limit-sub-package-depth",level:4},{value:"Message Naming",id:"message-naming",level:3},{value:"Service and RPC Naming",id:"service-and-rpc-naming",level:3},{value:"Use just <code>Query</code> for the query service",id:"use-just-query-for-the-query-service",level:4},{value:"Omit <code>Get</code> and <code>Query</code> from query service RPC names",id:"omit-get-and-query-from-query-service-rpc-names",level:4},{value:"Future Improvements",id:"future-improvements",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:p},u="wrapper";function c(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-023-protocol-buffer-naming-and-versioning-conventions"},"ADR 023: Protocol Buffer Naming and Versioning Conventions"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2020 April 27: Initial Draft"),(0,i.yg)("li",{parentName:"ul"},"2020 August 5: Update guidelines")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Accepted"),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"Protocol Buffers provide a basic ",(0,i.yg)("a",{parentName:"p",href:"https://protobuf.dev/programming-guides/style/"},"style guide"),"\nand ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/docs/style-guide"},"Buf")," builds upon that. To the\nextent possible, we want to follow industry accepted guidelines and wisdom for\nthe effective usage of protobuf, deviating from those only when there is clear\nrationale for our use case."),(0,i.yg)("h3",{id:"adoption-of-any"},"Adoption of ",(0,i.yg)("inlineCode",{parentName:"h3"},"Any")),(0,i.yg)("p",null,"The adoption of ",(0,i.yg)("inlineCode",{parentName:"p"},"google.protobuf.Any")," as the recommended approach for encoding\ninterface types (as opposed to ",(0,i.yg)("inlineCode",{parentName:"p"},"oneof"),") makes package naming a central part\nof the encoding as fully-qualified message names now appear in encoded\nmessages."),(0,i.yg)("h3",{id:"current-directory-organization"},"Current Directory Organization"),(0,i.yg)("p",null,"Thus far we have mostly followed ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build"},"Buf's")," ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/docs/lint-checkers#default"},"DEFAULT"),"\nrecommendations, with the minor deviation of disabling ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/docs/lint-checkers#file_layout"},(0,i.yg)("inlineCode",{parentName:"a"},"PACKAGE_DIRECTORY_MATCH")),"\nwhich although being convenient for developing code comes with the warning\nfrom Buf that:"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"you will have a very bad time with many Protobuf plugins across various languages if you do not do this")),(0,i.yg)("h3",{id:"adoption-of-grpc-queries"},"Adoption of gRPC Queries"),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-021-protobuf-query-encoding"},"ADR 021"),", gRPC was adopted for Protobuf\nnative queries. The full gRPC service path thus becomes a key part of ABCI query\npath. In the future, gRPC queries may be allowed from within persistent scripts\nby technologies such as CosmWasm and these query routes would be stored within\nscript binaries."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"The goal of this ADR is to provide thoughtful naming conventions that:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"encourage a good user experience for when users interact directly with\n.proto files and fully-qualified protobuf names"),(0,i.yg)("li",{parentName:"ul"},"balance conciseness against the possibility of either over-optimizing (making\nnames too short and cryptic) or under-optimizing (just accepting bloated names\nwith lots of redundant information)")),(0,i.yg)("p",null,"These guidelines are meant to act as a style guide for both the Cosmos SDK and\nthird-party modules."),(0,i.yg)("p",null,"As a starting point, we should adopt all of the ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/docs/lint-checkers#default"},"DEFAULT"),"\ncheckers in ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build"},"Buf's")," including ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/docs/lint-checkers#file_layout"},(0,i.yg)("inlineCode",{parentName:"a"},"PACKAGE_DIRECTORY_MATCH")),",\nexcept:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://buf.build/docs/lint-checkers#package_version_suffix"},"PACKAGE_VERSION_SUFFIX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://buf.build/docs/lint-checkers#service_suffix"},"SERVICE_SUFFIX"))),(0,i.yg)("p",null,"Further guidelines to be described below."),(0,i.yg)("h3",{id:"principles"},"Principles"),(0,i.yg)("h4",{id:"concise-and-descriptive-names"},"Concise and Descriptive Names"),(0,i.yg)("p",null,"Names should be descriptive enough to convey their meaning and distinguish\nthem from other names."),(0,i.yg)("p",null,"Given that we are using fully-qualifed names within\n",(0,i.yg)("inlineCode",{parentName:"p"},"google.protobuf.Any")," as well as within gRPC query routes, we should aim to\nkeep names concise, without going overboard. The general rule of thumb should\nbe if a shorter name would convey more or else the same thing, pick the shorter\nname."),(0,i.yg)("p",null,"For instance, ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.MsgSend")," (19 bytes) conveys roughly the same information\nas ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos_sdk.x.bank.v1.MsgSend")," (28 bytes) but is more concise."),(0,i.yg)("p",null,"Such conciseness makes names both more pleasant to work with and take up less\nspace within transactions and on the wire."),(0,i.yg)("p",null,"We should also resist the temptation to over-optimize, by making names\ncryptically short with abbreviations. For instance, we shouldn't try to\nreduce ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.MsgSend")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"csm.bk.MSnd")," just to save a few bytes."),(0,i.yg)("p",null,"The goal is to make names ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"concise but not cryptic")),"."),(0,i.yg)("h4",{id:"names-are-for-clients-first"},"Names are for Clients First"),(0,i.yg)("p",null,"Package and type names should be chosen for the benefit of users, not\nnecessarily because of legacy concerns related to the go code-base."),(0,i.yg)("h4",{id:"plan-for-longevity"},"Plan for Longevity"),(0,i.yg)("p",null,"In the interests of long-term support, we should plan on the names we do\nchoose to be in usage for a long time, so now is the opportunity to make\nthe best choices for the future."),(0,i.yg)("h3",{id:"versioning"},"Versioning"),(0,i.yg)("h4",{id:"guidelines-on-stable-package-versions"},"Guidelines on Stable Package Versions"),(0,i.yg)("p",null,"In general, schema evolution is the way to update protobuf schemas. That means that new fields,\nmessages, and RPC methods are ",(0,i.yg)("em",{parentName:"p"},"added")," to existing schemas and old fields, messages and RPC methods\nare maintained as long as possible."),(0,i.yg)("p",null,"Breaking things is often unacceptable in a blockchain scenario. For instance, immutable smart contracts\nmay depend on certain data schemas on the host chain. If the host chain breaks those schemas, the smart\ncontract may be irreparably broken. Even when things can be fixed (for instance in client software),\nthis often comes at a high cost."),(0,i.yg)("p",null,"Instead of breaking things, we should make every effort to evolve schemas rather than just breaking them.\n",(0,i.yg)("a",{parentName:"p",href:"https://buf.build"},"Buf")," breaking change detection should be used on all stable (non-alpha or beta) packages\nto prevent such breakage."),(0,i.yg)("p",null,"With that in mind, different stable versions (i.e. ",(0,i.yg)("inlineCode",{parentName:"p"},"v1")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"v2"),") of a package should more or less be considered\ndifferent packages and this should be last resort approach for upgrading protobuf schemas. Scenarios where creating\na ",(0,i.yg)("inlineCode",{parentName:"p"},"v2")," may make sense are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"we want to create a new module with similar functionality to an existing module and adding ",(0,i.yg)("inlineCode",{parentName:"li"},"v2")," is the most natural\nway to do this. In that case, there are really just two different, but similar modules with different APIs."),(0,i.yg)("li",{parentName:"ul"},"we want to add a new revamped API for an existing module and it's just too cumbersome to add it to the existing package,\nso putting it in ",(0,i.yg)("inlineCode",{parentName:"li"},"v2")," is cleaner for users. In this case, care should be made to not deprecate support for\n",(0,i.yg)("inlineCode",{parentName:"li"},"v1")," if it is actively used in immutable smart contracts.")),(0,i.yg)("h4",{id:"guidelines-on-unstable-alpha-and-beta-package-versions"},"Guidelines on unstable (alpha and beta) package versions"),(0,i.yg)("p",null,"The following guidelines are recommended for marking packages as alpha or beta:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"marking something as ",(0,i.yg)("inlineCode",{parentName:"li"},"alpha")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"beta")," should be a last resort and just putting something in the\nstable package (i.e. ",(0,i.yg)("inlineCode",{parentName:"li"},"v1")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"v2"),") should be preferred"),(0,i.yg)("li",{parentName:"ul"},"a package ",(0,i.yg)("em",{parentName:"li"},"should")," be marked as ",(0,i.yg)("inlineCode",{parentName:"li"},"alpha")," ",(0,i.yg)("em",{parentName:"li"},"if and only if")," there are active discussions to remove\nor significantly alter the package in the near future"),(0,i.yg)("li",{parentName:"ul"},"a package ",(0,i.yg)("em",{parentName:"li"},"should")," be marked as ",(0,i.yg)("inlineCode",{parentName:"li"},"beta")," ",(0,i.yg)("em",{parentName:"li"},"if and only if")," there is an active discussion to\nsignificantly refactor/rework the functionality in the near future but not remove it"),(0,i.yg)("li",{parentName:"ul"},"modules ",(0,i.yg)("em",{parentName:"li"},"can and should")," have types in both stable (i.e. ",(0,i.yg)("inlineCode",{parentName:"li"},"v1")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"v2"),") and unstable (",(0,i.yg)("inlineCode",{parentName:"li"},"alpha")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"beta"),") packages.")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"em"},"alpha")," and ",(0,i.yg)("inlineCode",{parentName:"em"},"beta")," should not be used to avoid responsibility for maintaining compatibility."),"\nWhenever code is released into the wild, especially on a blockchain, there is a high cost to changing things. In some\ncases, for instance with immutable smart contracts, a breaking change may be impossible to fix."),(0,i.yg)("p",null,"When marking something as ",(0,i.yg)("inlineCode",{parentName:"p"},"alpha")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"beta"),", maintainers should ask the questions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"what is the cost of asking others to change their code vs the benefit of us maintaining the optionality to change it?"),(0,i.yg)("li",{parentName:"ul"},"what is the plan for moving this to ",(0,i.yg)("inlineCode",{parentName:"li"},"v1")," and how will that affect users?")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"alpha")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"beta"),' should really be used to communicate "changes are planned".'),(0,i.yg)("p",null,"As a case study, gRPC reflection is in the package ",(0,i.yg)("inlineCode",{parentName:"p"},"grpc.reflection.v1alpha"),". It hasn't been changed since\n2017 and it is now used in other widely used software like gRPCurl. Some folks probably use it in production services\nand so if they actually went and changed the package to ",(0,i.yg)("inlineCode",{parentName:"p"},"grpc.reflection.v1"),", some software would break and\nthey probably don't want to do that... So now the ",(0,i.yg)("inlineCode",{parentName:"p"},"v1alpha")," package is more or less the de-facto ",(0,i.yg)("inlineCode",{parentName:"p"},"v1"),". Let's not do that."),(0,i.yg)("p",null,"The following are guidelines for working with non-stable packages:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://buf.build/docs/lint-checkers#package_version_suffix"},"Buf's recommended version suffix"),"\n(ex. ",(0,i.yg)("inlineCode",{parentName:"li"},"v1alpha1"),") ",(0,i.yg)("em",{parentName:"li"},"should")," be used for non-stable packages"),(0,i.yg)("li",{parentName:"ul"},"non-stable packages should generally be excluded from breaking change detection"),(0,i.yg)("li",{parentName:"ul"},"immutable smart contract modules (i.e. CosmWasm) ",(0,i.yg)("em",{parentName:"li"},"should")," block smart contracts/persistent\nscripts from interacting with ",(0,i.yg)("inlineCode",{parentName:"li"},"alpha"),"/",(0,i.yg)("inlineCode",{parentName:"li"},"beta")," packages")),(0,i.yg)("h4",{id:"omit-v1-suffix"},"Omit v1 suffix"),(0,i.yg)("p",null,"Instead of using ",(0,i.yg)("a",{parentName:"p",href:"https://buf.build/docs/lint-checkers#package_version_suffix"},"Buf's recommended version suffix"),",\nwe can omit ",(0,i.yg)("inlineCode",{parentName:"p"},"v1")," for packages that don't actually have a second version. This\nallows for more concise names for common use cases like ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank.Send"),".\nPackages that do have a second or third version can indicate that with ",(0,i.yg)("inlineCode",{parentName:"p"},".v2"),"\nor ",(0,i.yg)("inlineCode",{parentName:"p"},".v3"),"."),(0,i.yg)("h3",{id:"package-naming"},"Package Naming"),(0,i.yg)("h4",{id:"adopt-a-short-unique-top-level-package-name"},"Adopt a short, unique top-level package name"),(0,i.yg)("p",null,"Top-level packages should adopt a short name that is known to not collide with\nother names in common usage within the Cosmos ecosystem. In the near future, a\nregistry should be created to reserve and index top-level package names used\nwithin the Cosmos ecosystem. Because the Cosmos SDK is intended to provide\nthe top-level types for the Cosmos project, the top-level package name ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos"),"\nis recommended for usage within the Cosmos SDK instead of the longer ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos_sdk"),".\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ics"},"ICS")," specifications could consider a\nshort top-level package like ",(0,i.yg)("inlineCode",{parentName:"p"},"ics23")," based upon the standard number."),(0,i.yg)("h4",{id:"limit-sub-package-depth"},"Limit sub-package depth"),(0,i.yg)("p",null,"Sub-package depth should be increased with caution. Generally a single\nsub-package is needed for a module or a library. Even though ",(0,i.yg)("inlineCode",{parentName:"p"},"x")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"modules"),"\nis used in source code to denote modules, this is often unnecessary for .proto\nfiles as modules are the primary thing sub-packages are used for. Only items which\nare known to be used infrequently should have deep sub-package depths."),(0,i.yg)("p",null,"For the Cosmos SDK, it is recommended that we simply write ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank"),",\n",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.gov"),", etc. rather than ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.x.bank"),". In practice, most non-module\ntypes can go straight in the ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos")," package or we can introduce a\n",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.base")," package if needed. Note that this naming ",(0,i.yg)("em",{parentName:"p"},"will not")," change\ngo package names, i.e. the ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.bank")," protobuf package will still live in\n",(0,i.yg)("inlineCode",{parentName:"p"},"x/bank"),"."),(0,i.yg)("h3",{id:"message-naming"},"Message Naming"),(0,i.yg)("p",null,"Message type names should be as concise possible without losing clarity. ",(0,i.yg)("inlineCode",{parentName:"p"},"sdk.Msg"),"\ntypes which are used in transactions will retain the ",(0,i.yg)("inlineCode",{parentName:"p"},"Msg")," prefix as that provides\nhelpful context."),(0,i.yg)("h3",{id:"service-and-rpc-naming"},"Service and RPC Naming"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-021-protobuf-query-encoding"},"ADR 021")," specifies that modules should\nimplement a gRPC query service. We should consider the principle of conciseness\nfor query service and RPC names as these may be called from persistent script\nmodules such as CosmWasm. Also, users may use these query paths from tools like\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"gRPCurl"),". As an example, we can shorten\n",(0,i.yg)("inlineCode",{parentName:"p"},"/cosmos_sdk.x.bank.v1.QueryService/QueryBalance")," to\n",(0,i.yg)("inlineCode",{parentName:"p"},"/cosmos.bank.Query/Balance")," without losing much useful information."),(0,i.yg)("p",null,"RPC request and response types ",(0,i.yg)("em",{parentName:"p"},"should")," follow the ",(0,i.yg)("inlineCode",{parentName:"p"},"ServiceNameMethodNameRequest"),"/\n",(0,i.yg)("inlineCode",{parentName:"p"},"ServiceNameMethodNameResponse")," naming convention. i.e. for an RPC method named ",(0,i.yg)("inlineCode",{parentName:"p"},"Balance"),"\non the ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," service, the request and response types would be ",(0,i.yg)("inlineCode",{parentName:"p"},"QueryBalanceRequest"),"\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"QueryBalanceResponse"),". This will be more self-explanatory than ",(0,i.yg)("inlineCode",{parentName:"p"},"BalanceRequest"),"\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"BalanceResponse"),"."),(0,i.yg)("h4",{id:"use-just-query-for-the-query-service"},"Use just ",(0,i.yg)("inlineCode",{parentName:"h4"},"Query")," for the query service"),(0,i.yg)("p",null,"Instead of ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/6033"},"Buf's default service suffix recommendation"),",\nwe should simply use the shorter ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," for query services."),(0,i.yg)("p",null,"For other types of gRPC services, we should consider sticking with Buf's\ndefault recommendation."),(0,i.yg)("h4",{id:"omit-get-and-query-from-query-service-rpc-names"},"Omit ",(0,i.yg)("inlineCode",{parentName:"h4"},"Get")," and ",(0,i.yg)("inlineCode",{parentName:"h4"},"Query")," from query service RPC names"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Get")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," should be omitted from ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," service names because they are\nredundant in the fully-qualified name. For instance, ",(0,i.yg)("inlineCode",{parentName:"p"},"/cosmos.bank.Query/QueryBalance"),"\njust says ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," twice without any new information."),(0,i.yg)("h2",{id:"future-improvements"},"Future Improvements"),(0,i.yg)("p",null,"A registry of top-level package names should be created to coordinate naming\nacross the ecosystem, prevent collisions, and also help developers discover\nuseful schemas. A simple starting point would be a git repository with\ncommunity-based governance."),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"names will be more concise and easier to read and type"),(0,i.yg)("li",{parentName:"ul"},"all transactions using ",(0,i.yg)("inlineCode",{parentName:"li"},"Any")," will be at shorter (",(0,i.yg)("inlineCode",{parentName:"li"},"_sdk.x")," and ",(0,i.yg)("inlineCode",{parentName:"li"},".v1")," will be removed)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},".proto")," file imports will be more standard (without ",(0,i.yg)("inlineCode",{parentName:"li"},'"third_party/proto"')," in\nthe path)"),(0,i.yg)("li",{parentName:"ul"},"code generation will be easier for clients because .proto files will be\nin a single ",(0,i.yg)("inlineCode",{parentName:"li"},"proto/")," directory which can be copied rather than scattered\nthroughout the Cosmos SDK")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},".proto"),"  files will need to be reorganized and refactored"),(0,i.yg)("li",{parentName:"ul"},"some modules may need to be marked as alpha or beta")),(0,i.yg)("h2",{id:"references"},"References"))}c.isMDXComponent=!0}}]);