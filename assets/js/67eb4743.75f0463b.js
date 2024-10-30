"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[49179],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52537:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(58168),a=(r(96540),r(15680));const o={sidebar_position:1},i="Query Services",s={unversionedId:"docs/build/building-modules/query-services",id:"docs/build/building-modules/query-services",title:"Query Services",description:"A Protobuf Query service processes queries. Query services are specific to the module in which they are defined, and only process queries defined within said module. They are called from BaseApp's Query method.",source:"@site/cosmos-sdk/docs/build/building-modules/04-query-services.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/query-services",permalink:"/cosmos-sdk/next/docs/build/building-modules/query-services",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Msg Services",permalink:"/cosmos-sdk/next/docs/build/building-modules/msg-services"},next:{title:"ProtocolBuffer Annotations",permalink:"/cosmos-sdk/next/docs/build/building-modules/protobuf-annotations"}},l={},u=[{value:"Implementation of a module query service",id:"implementation-of-a-module-query-service",level:2},{value:"gRPC Service",id:"grpc-service",level:3},{value:"Calling queries from the State Machine",id:"calling-queries-from-the-state-machine",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"query-services"},"Query Services"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"A Protobuf Query service processes ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/building-modules/messages-and-queries#queries"},(0,a.yg)("inlineCode",{parentName:"a"},"queries")),". Query services are specific to the module in which they are defined, and only process ",(0,a.yg)("inlineCode",{parentName:"p"},"queries")," defined within said module. They are called from ",(0,a.yg)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/learn/advanced/baseapp#query"},(0,a.yg)("inlineCode",{parentName:"a"},"Query")," method"),".")),(0,a.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/build/building-modules/module-manager"},"Module Manager")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/build/building-modules/messages-and-queries"},"Messages and Queries")))),(0,a.yg)("h2",{id:"implementation-of-a-module-query-service"},"Implementation of a module query service"),(0,a.yg)("h3",{id:"grpc-service"},"gRPC Service"),(0,a.yg)("p",null,"When defining a Protobuf ",(0,a.yg)("inlineCode",{parentName:"p"},"Query")," service, a ",(0,a.yg)("inlineCode",{parentName:"p"},"QueryServer")," interface is generated for each module with all the service methods:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"type QueryServer interface {\n    QueryBalance(context.Context, *QueryBalanceParams) (*types.Coin, error)\n    QueryAllBalances(context.Context, *QueryAllBalancesParams) (*QueryAllBalancesResponse, error)\n}\n")),(0,a.yg)("p",null,"These custom queries methods should be implemented by a module's keeper, typically in ",(0,a.yg)("inlineCode",{parentName:"p"},"./keeper/grpc_query.go"),". The first parameter of these methods is a generic ",(0,a.yg)("inlineCode",{parentName:"p"},"context.Context"),". Therefore, the Cosmos SDK provides a function ",(0,a.yg)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext")," to retrieve the ",(0,a.yg)("inlineCode",{parentName:"p"},"context.Context")," from the provided\n",(0,a.yg)("inlineCode",{parentName:"p"},"context.Context"),"."),(0,a.yg)("p",null,"Here's an example implementation for the bank module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/grpc_query.go\n")),(0,a.yg)("h3",{id:"calling-queries-from-the-state-machine"},"Calling queries from the State Machine"),(0,a.yg)("p",null,"The Cosmos SDK v0.47 introduces a new ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.query.v1.module_query_safe")," Protobuf annotation which is used to state that a query that is safe to be called from within the state machine, for example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a Keeper's query function can be called from another module's Keeper,"),(0,a.yg)("li",{parentName:"ul"},"ADR-033 intermodule query calls,"),(0,a.yg)("li",{parentName:"ul"},"CosmWasm contracts can also directly interact with these queries.")),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"module_query_safe")," annotation set to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", it means:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The query is deterministic: given a block height it will return the same response upon multiple calls, and doesn't introduce any state-machine breaking changes across SDK patch versions."),(0,a.yg)("li",{parentName:"ul"},"Gas consumption never fluctuates across calls and across patch versions.")),(0,a.yg)("p",null,"If you are a module developer and want to use ",(0,a.yg)("inlineCode",{parentName:"p"},"module_query_safe")," annotation for your own query, you have to ensure the following things:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the query is deterministic and won't introduce state-machine-breaking changes without coordinated upgrades"),(0,a.yg)("li",{parentName:"ul"},"it has its gas tracked, to avoid the attack vector where no gas is accounted for\non potentially high-computation queries.")))}p.isMDXComponent=!0}}]);