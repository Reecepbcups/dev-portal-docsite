"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[6968],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={},o="ADR 17: Historical Header Module",l={unversionedId:"build/architecture/adr-017-historical-header-module",id:"version-0.52/build/architecture/adr-017-historical-header-module",title:"ADR 17: Historical Header Module",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-017-historical-header-module.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-017-historical-header-module",permalink:"/cosmos-sdk/build/architecture/adr-017-historical-header-module",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 016: Validator Consensus Key Rotation",permalink:"/cosmos-sdk/build/architecture/adr-016-validator-consensus-key-rotation"},next:{title:"ADR 18: Extendable Voting Periods",permalink:"/cosmos-sdk/build/architecture/adr-018-extendable-voting-period"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-17-historical-header-module"},"ADR 17: Historical Header Module"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"26 November 2019: Start of first version"),(0,i.yg)("li",{parentName:"ul"},"2 December 2019: Final draft of first version"),(0,i.yg)("li",{parentName:"ul"},"7 September 2023: Reduce HistoricalInfo type")),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"In order for the Cosmos SDK to implement the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ics"},"IBC specification"),", modules within the Cosmos SDK must have the ability to introspect recent consensus states (validator sets & commitment roots) as proofs of these values on other chains must be checked during the handshakes."),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"The application MUST store the most recent ",(0,i.yg)("inlineCode",{parentName:"p"},"n")," headers in a persistent store. At first, this store MAY be the current Merklised store. A non-Merklised store MAY be used later as no proofs are necessary."),(0,i.yg)("p",null,"The application MUST store this information by storing new headers immediately when handling ",(0,i.yg)("inlineCode",{parentName:"p"},"abci.RequestBeginBlock"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func BeginBlock(ctx sdk.Context, keeper HistoricalHeaderKeeper) error {\n  info := HistoricalInfo{\n    apphash: ctx.HeaderInfo().AppHash,\n    Time: ctx.HeaderInfo().Time,\n    NextValidatorsHash: ctx.CometInfo().NextValidatorsHash,\n  }\n  keeper.SetHistoricalInfo(ctx, ctx.BlockHeight(), info)\n  n := keeper.GetParamRecentHeadersToStore()\n  keeper.PruneHistoricalInfo(ctx, ctx.BlockHeight() - n)\n  // continue handling request\n}\n")),(0,i.yg)("p",null,"Alternatively, the application MAY store only the hash of the validator set."),(0,i.yg)("p",null,"The application MUST make these past ",(0,i.yg)("inlineCode",{parentName:"p"},"n")," committed headers available for querying by Cosmos SDK modules through the ",(0,i.yg)("inlineCode",{parentName:"p"},"Keeper"),"'s ",(0,i.yg)("inlineCode",{parentName:"p"},"GetHistoricalInfo")," function. This MAY be implemented in a new module, or it MAY also be integrated into an existing one (likely ",(0,i.yg)("inlineCode",{parentName:"p"},"x/staking")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"x/ibc"),")."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"n")," MAY be configured as a parameter store parameter, in which case it could be changed by ",(0,i.yg)("inlineCode",{parentName:"p"},"ParameterChangeProposal"),"s, although it will take some blocks for the stored information to catch up if ",(0,i.yg)("inlineCode",{parentName:"p"},"n")," is increased."),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("p",null,"Proposed."),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("p",null,"Implementation of this ADR will require changes to the Cosmos SDK. It will not require changes to Tendermint."),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Easy retrieval of headers & state roots for recent past heights by modules anywhere in the Cosmos SDK."),(0,i.yg)("li",{parentName:"ul"},"No RPC calls to Tendermint required."),(0,i.yg)("li",{parentName:"ul"},"No ABCI alterations required.")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Duplicates ",(0,i.yg)("inlineCode",{parentName:"li"},"n")," headers data in Tendermint & the application (additional disk usage) - in the long term, an approach such as ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/4210"},"this")," might be preferable.")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("p",null,"(none known)"),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics#consensus-state-introspection"},'ICS 2: "Consensus state introspection"'))))}p.isMDXComponent=!0}}]);