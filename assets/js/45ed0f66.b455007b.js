"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[70335],{15680:(e,o,n)=>{n.d(o,{xA:()=>g,yg:()=>m});var t=n(96540);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),u=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},g=function(e){var o=u(e.components);return t.createElement(l.Provider,{value:o},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return n?t.createElement(m,s(s({ref:o},g),{},{components:n})):t.createElement(m,s({ref:o},g))}));function m(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<r;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33794:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=n(58168),i=(n(96540),n(15680));const r={},s="ADR 002: Go module versioning",a={unversionedId:"architecture/adr-002-go-module-versioning",id:"version-v7.8.x/architecture/adr-002-go-module-versioning",title:"ADR 002: Go module versioning",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v7.8.x/architecture/adr-002-go-module-versioning.md",sourceDirName:"architecture",slug:"/architecture/adr-002-go-module-versioning",permalink:"/ibc-go/v7.8.x/architecture/adr-002-go-module-versioning",draft:!1,tags:[],version:"v7.8.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 001: Coin Source Tracing",permalink:"/ibc-go/v7.8.x/architecture/adr-001-coin-source-tracing"},next:{title:"ADR 003: ICS27 Acknowledgement Format",permalink:"/ibc-go/v7.8.x/architecture/adr-003-ics27-acknowledgement"}},l={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Problems",id:"problems",level:3},{value:"Go module version must be incremented",id:"go-module-version-must-be-incremented",level:4},{value:"Attempting to import multiple go module versions for ibc-go",id:"attempting-to-import-multiple-go-module-versions-for-ibc-go",level:4},{value:"Potential solutions",id:"potential-solutions",level:3},{value:"Changing the protobuf definition version",id:"changing-the-protobuf-definition-version",level:4},{value:"Moving protobuf definitions to their own go module",id:"moving-protobuf-definitions-to-their-own-go-module",level:4},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}],g={toc:u},c="wrapper";function p(e){let{components:o,...n}=e;return(0,i.yg)(c,(0,t.A)({},g,n,{components:o,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-002-go-module-versioning"},"ADR 002: Go module versioning"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"05/01/2022: initial draft")),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Accepted"),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"The IBC module was originally developed in the Cosmos SDK and released during the Stargate release series (v0.42).\nIt was subsequently migrated to its own repository, ibc-go.\nThe first official release on ibc-go was v1.0.0.\nv1.0.0 was decided to be used instead of v0.1.0 primarily for the following reasons:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Maintaining compatibility with the IBC specification v1 requires stronger support/guarantees."),(0,i.yg)("li",{parentName:"ul"},"Using the major, minor, and patch numbers allows for easier communication of what breaking changes are included in a release."),(0,i.yg)("li",{parentName:"ul"},"The IBC module is being used by numerous high value projects which require stability.")),(0,i.yg)("h3",{id:"problems"},"Problems"),(0,i.yg)("h4",{id:"go-module-version-must-be-incremented"},"Go module version must be incremented"),(0,i.yg)("p",null,"When a Go module is released under v1.0.0, all following releases must follow Go semantic versioning.\nThus when the go API is broken, the Go module major version ",(0,i.yg)("strong",{parentName:"p"},"must")," be incremented.\nFor example, changing the go package version from ",(0,i.yg)("inlineCode",{parentName:"p"},"v2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"v3")," bumps the import from ",(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v2")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v3"),"."),(0,i.yg)("p",null,"If the Go module version is not incremented then attempting to go get a module @v3.0.0 without the suffix results in:\n",(0,i.yg)("inlineCode",{parentName:"p"},"invalid version: module contains a go.mod file, so major version must be compatible: should be v0 or v1, not v3")),(0,i.yg)("p",null,"Version validation was added in Go 1.13. This means that in order to release a v3.0.0 git tag without a /v3 suffix on the module definition, the tag must explicitly ",(0,i.yg)("strong",{parentName:"p"},"not")," contain a go.mod file.\nNot including a go.mod in our release is not a viable option."),(0,i.yg)("h4",{id:"attempting-to-import-multiple-go-module-versions-for-ibc-go"},"Attempting to import multiple go module versions for ibc-go"),(0,i.yg)("p",null,"Attempting to import two versions of ibc-go, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v2")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v3"),", will result in multiple issues."),(0,i.yg)("p",null,"The Cosmos SDK does global registration of error and governance proposal types.\nThe errors and proposals used in ibc-go would need to now register their naming based on the go module version."),(0,i.yg)("p",null,"The more concerning problem is that protobuf definitions will also reach a namespace collision.\nibc-go and the Cosmos SDK in general rely heavily on using extended functions for go structs generated from protobuf definitions.\nThis requires the go structs to be defined in the same package as the extended functions.\nThus, bumping the import versioning causes the protobuf definitions to be generated in two places (in v2 and v3).\nWhen registering these types at compile time, the go compiler will panic.\nThe generated types need to be registered against the proto codec, but there exist two definitions for the same name."),(0,i.yg)("p",null,"The protobuf conflict policy can be overridden via the environment variable ",(0,i.yg)("inlineCode",{parentName:"p"},"GOLANG_PROTOBUF_REGISTRATION_CONFLICT"),", but it is possible this could lead to various runtime errors or unexpected behaviour (see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf-go/blob/master/reflect/protoregistry/registry.go#L46"},"here"),").\nMore information ",(0,i.yg)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/reference/go/faq#namespace-conflict"},"here")," on namespace conflicts for protobuf versioning."),(0,i.yg)("h3",{id:"potential-solutions"},"Potential solutions"),(0,i.yg)("h4",{id:"changing-the-protobuf-definition-version"},"Changing the protobuf definition version"),(0,i.yg)("p",null,"The protobuf definitions all have a type URL containing the protobuf version for this type.\nChanging the protobuf version would solve the namespace collision which arise from importing multiple versions of ibc-go, but it leads to new issues."),(0,i.yg)("p",null,"In the Cosmos SDK, ",(0,i.yg)("inlineCode",{parentName:"p"},"Any"),"s are unpacked and decoded using the type URL.\nChanging the type URL thus is creating a distinctly different type.\nThe same registration on the proto codec cannot be used to unpack the new type.\nFor example:"),(0,i.yg)("p",null,"All Cosmos SDK messages are packed into ",(0,i.yg)("inlineCode",{parentName:"p"},"Any"),"s. If we incremented the protobuf version for our IBC messages, clients which submitted the v1 of our Cosmos SDK messages would now be rejected since the old type is not registered on the codec.\nThe clients must know to submit the v2 of these messages. This pushes the burden of versioning onto relayers and wallets."),(0,i.yg)("p",null,"A more serious problem is that the ",(0,i.yg)("inlineCode",{parentName:"p"},"ClientState")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ConsensusState")," are packed as ",(0,i.yg)("inlineCode",{parentName:"p"},"Any"),"s. Changing the protobuf versioning of these types would break compatibility with IBC specification v1."),(0,i.yg)("h4",{id:"moving-protobuf-definitions-to-their-own-go-module"},"Moving protobuf definitions to their own go module"),(0,i.yg)("p",null,"The protobuf definitions could be moved to their own go module which uses 0.x versioning and will never go to 1.0.\nThis prevents the Go module version from being incremented with breaking changes.\nIt also requires all extended functions to live in the same Go module, disrupting the existing code structure."),(0,i.yg)("p",null,"The version that implements this change will still be incompatible with previous versions, but future versions could be imported together without namespace collisions.\nFor example, let's say this solution is implemented in v3. Then"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v2")," cannot be imported with any other ibc-go version"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v3")," cannot be imported with any previous ibc-go versions"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v4")," may be imported with ibc-go versions v3+"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"github.com/cosmos/ibc-go/v5")," may be imported with ibc-go versions v3+"),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"Supporting importing multiple versions of ibc-go requires a non-trivial amount of complexity.\nIt is unclear when a user of the ibc-go code would need multiple versions of ibc-go.\nUntil there is an overwhelming reason to support importing multiple versions of ibc-go:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Major releases cannot be imported simultaneously"),".\nReleases should focus on keeping backwards compatibility for go code clients, within reason.\nOld functionality should be marked as deprecated and there should exist upgrade paths between major versions.\nDeprecated functionality may be removed when no clients rely on that functionality.\nHow this is determined is to be decided."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Error and proposal type registration will not be changed between go module version increments"),".\nThis explicitly stops external clients from trying to import two major versions (potentially risking a bug due to the instability of proto name collisions override)."),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("p",null,"This only affects clients relying directly on the go code."),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("p",null,"Multiple ibc-go versions cannot be imported."),(0,i.yg)("h3",{id:"neutral"},"Neutral"))}p.isMDXComponent=!0}}]);