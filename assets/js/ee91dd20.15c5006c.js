"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[16441],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?t.createElement(y,o(o({ref:r},c),{},{components:n})):t.createElement(y,o({ref:r},c))}));function y(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53762:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=n(58168),i=(n(96540),n(15680));const a={sidebar_position:1},o="Query Services",s={unversionedId:"build/building-modules/query-services",id:"version-0.47/build/building-modules/query-services",title:"Query Services",description:"A Protobuf Query service processes queries. Query services are specific to the module in which they are defined, and only process queries defined within said module. They are called from BaseApp's Query method.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/building-modules/04-query-services.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/query-services",permalink:"/cosmos-sdk/0.47/build/building-modules/query-services",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Msg Services",permalink:"/cosmos-sdk/0.47/build/building-modules/msg-services"},next:{title:"BeginBlocker and EndBlocker",permalink:"/cosmos-sdk/0.47/build/building-modules/beginblock-endblock"}},l={},u=[{value:"Implementation of a module query service",id:"implementation-of-a-module-query-service",level:2},{value:"gRPC Service",id:"grpc-service",level:3},{value:"Calling queries from the State Machine",id:"calling-queries-from-the-state-machine",level:3}],c={toc:u},d="wrapper";function p(e){let{components:r,...n}=e;return(0,i.yg)(d,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"query-services"},"Query Services"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"A Protobuf Query service processes ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/build/building-modules/messages-and-queries#queries"},(0,i.yg)("inlineCode",{parentName:"a"},"queries")),". Query services are specific to the module in which they are defined, and only process ",(0,i.yg)("inlineCode",{parentName:"p"},"queries")," defined within said module. They are called from ",(0,i.yg)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/advanced/baseapp#query"},(0,i.yg)("inlineCode",{parentName:"a"},"Query")," method"),".")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/cosmos-sdk/0.47/build/building-modules/module-manager"},"Module Manager")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/cosmos-sdk/0.47/build/building-modules/messages-and-queries"},"Messages and Queries")))),(0,i.yg)("h2",{id:"implementation-of-a-module-query-service"},"Implementation of a module query service"),(0,i.yg)("h3",{id:"grpc-service"},"gRPC Service"),(0,i.yg)("p",null,"When defining a Protobuf ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," service, a ",(0,i.yg)("inlineCode",{parentName:"p"},"QueryServer")," interface is generated for each module with all the service methods:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type QueryServer interface {\n    QueryBalance(context.Context, *QueryBalanceParams) (*types.Coin, error)\n    QueryAllBalances(context.Context, *QueryAllBalancesParams) (*QueryAllBalancesResponse, error)\n}\n")),(0,i.yg)("p",null,"These custom queries methods should be implemented by a module's keeper, typically in ",(0,i.yg)("inlineCode",{parentName:"p"},"./keeper/grpc_query.go"),". The first parameter of these methods is a generic ",(0,i.yg)("inlineCode",{parentName:"p"},"context.Context"),". Therefore, the Cosmos SDK provides a function ",(0,i.yg)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext")," to retrieve the ",(0,i.yg)("inlineCode",{parentName:"p"},"sdk.Context")," from the provided\n",(0,i.yg)("inlineCode",{parentName:"p"},"context.Context"),"."),(0,i.yg)("p",null,"Here's an example implementation for the bank module:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/keeper/grpc_query.go\n")),(0,i.yg)("h3",{id:"calling-queries-from-the-state-machine"},"Calling queries from the State Machine"),(0,i.yg)("p",null,"The Cosmos SDK v0.47 introduces a new ",(0,i.yg)("inlineCode",{parentName:"p"},"cosmos.query.v1.module_query_safe")," Protobuf annotation which is used to state that a query that is safe to be called from within the state machine, for example:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"a Keeper's query function can be called from another module's Keeper,"),(0,i.yg)("li",{parentName:"ul"},"ADR-033 intermodule query calls,"),(0,i.yg)("li",{parentName:"ul"},"CosmWasm contracts can also directly interact with these queries.")),(0,i.yg)("p",null,"If the ",(0,i.yg)("inlineCode",{parentName:"p"},"module_query_safe")," annotation set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", it means:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The query is deterministic: given a block height it will return the same response upon multiple calls, and doesn't introduce any state-machine breaking changes across SDK patch versions."),(0,i.yg)("li",{parentName:"ul"},"Gas consumption never fluctuates across calls and across patch versions.")),(0,i.yg)("p",null,"If you are a module developer and want to use ",(0,i.yg)("inlineCode",{parentName:"p"},"module_query_safe")," annotation for your own query, you have to ensure the following things:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the query is deterministic and won't introduce state-machine-breaking changes without coordinated upgrades"),(0,i.yg)("li",{parentName:"ul"},"it has its gas tracked, to avoid the attack vector where no gas is accounted for\non potentially high-computation queries.")))}p.isMDXComponent=!0}}]);