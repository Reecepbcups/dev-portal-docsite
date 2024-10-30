"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[25205],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>u});var i=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),c=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return i.createElement(o.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=n,u=m["".concat(o,".").concat(p)]||m[p]||g[p]||r;return t?i.createElement(u,s(s({ref:a},d),{},{components:t})):i.createElement(u,s({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74182:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(58168),n=(t(96540),t(15680));const r={title:"Gas Management",sidebar_label:"Gas Management",sidebar_position:6,slug:"/middleware/callbacks/gas"},s="Gas Management",l={unversionedId:"docs/middleware/callbacks/gas",id:"docs/middleware/callbacks/gas",title:"Gas Management",description:"Overview",source:"@site/ibc-go/docs/04-middleware/02-callbacks/06-gas.md",sourceDirName:"docs/04-middleware/02-callbacks",slug:"/middleware/callbacks/gas",permalink:"/ibc-go/next/middleware/callbacks/gas",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Gas Management",sidebar_label:"Gas Management",sidebar_position:6,slug:"/middleware/callbacks/gas"},sidebar:"defaultSidebar",previous:{title:"End Users",permalink:"/ibc-go/next/middleware/callbacks/end-users"},next:{title:"Support transfer of coins whose base denom contains slashes",permalink:"/ibc-go/next/migrations/support-denoms-with-slashes"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Chain Wide Gas Limit",id:"chain-wide-gas-limit",level:3},{value:"User Defined Gas Limit",id:"user-defined-gas-limit",level:3},{value:"Gas Limit Enforcement",id:"gas-limit-enforcement",level:2}],d={toc:c},m="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,i.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"gas-management"},"Gas Management"),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Executing arbitrary code on a chain can be arbitrarily expensive. In general, a callback may consume infinite gas (think of a callback that loops forever). This is problematic for a few reasons:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It can block the packet lifecycle."),(0,n.yg)("li",{parentName:"ul"},"It can be used to consume all of the relayer's funds and gas."),(0,n.yg)("li",{parentName:"ul"},"A relayer can DOS the callback execution by sending a packet with a low amount of gas.")),(0,n.yg)("p",null,"To prevent these, the callbacks middleware introduces two gas limits: a chain wide gas limit (",(0,n.yg)("inlineCode",{parentName:"p"},"maxCallbackGas"),") and a user defined gas limit."),(0,n.yg)("h3",{id:"chain-wide-gas-limit"},"Chain Wide Gas Limit"),(0,n.yg)("p",null,"Since the callbacks middleware does not have a keeper, it does not use a governance parameter to set the chain wide gas limit. Instead, the chain wide gas limit is passed in as a parameter to the callbacks middleware during initialization."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"// app.go\n\nmaxCallbackGas := uint64(1_000_000)\n\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\ntransferStack = ibccallbacks.NewIBCMiddleware(transferStack, app.IBCFeeKeeper, app.MockContractKeeper, maxCallbackGas)\n// Since the callbacks middleware itself is an ics4wrapper, it needs to be passed to the transfer keeper\napp.TransferKeeper.WithICS4Wrapper(transferStack.(porttypes.ICS4Wrapper))\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n")),(0,n.yg)("h3",{id:"user-defined-gas-limit"},"User Defined Gas Limit"),(0,n.yg)("p",null,"The user defined gas limit is set by the IBC Actor during packet creation. The user defined gas limit is set in the packet memo. If the user defined gas limit is not set or if the user defined gas limit is greater than the chain wide gas limit, then the chain wide gas limit is used as the user defined gas limit."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  },\n  "dest_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n')),(0,n.yg)("h2",{id:"gas-limit-enforcement"},"Gas Limit Enforcement"),(0,n.yg)("p",null,"During a callback execution, there are three types of gas limits that are enforced:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"User defined gas limit"),(0,n.yg)("li",{parentName:"ul"},"Chain wide gas limit"),(0,n.yg)("li",{parentName:"ul"},"Context gas limit (amount of gas that the relayer has left for this execution)")),(0,n.yg)("p",null,"Chain wide gas limit is used as a maximum to the user defined gas limit as explained in the ",(0,n.yg)("a",{parentName:"p",href:"#user-defined-gas-limit"},"previous section"),". It may also be used as a default value if no user gas limit is provided. Therefore, we can ignore the chain wide gas limit for the rest of this section and work with the minimum of the chain wide gas limit and user defined gas limit. This minimum is called the commit gas limit."),(0,n.yg)("p",null,"The gas limit enforcement is done by executing the callback inside a cached context with a new gas meter. The gas meter is initialized with the minimum of the commit gas limit and the context gas limit. This minimum is called the execution gas limit. We say that retries are allowed if ",(0,n.yg)("inlineCode",{parentName:"p"},"context gas limit < commit gas limit"),". Otherwise, we say that retries are not allowed."),(0,n.yg)("p",null,"If the callback execution fails due to an out of gas error, then the middleware checks if retries are allowed. If retries are not allowed, then it recovers from the out of gas error, consumes execution gas limit from the original context, and continues with the packet life cycle. If retries are allowed, then it panics with an out of gas error to revert the entire tx. The packet can then be submitted again with a higher gas limit. The out of gas panic descriptor is shown below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},'fmt.Sprintf("ibc %s callback out of gas; commitGasLimit: %d", callbackType, callbackData.CommitGasLimit)}\n')),(0,n.yg)("p",null,"If the callback execution does not fail due to an out of gas error then the callbacks middleware does not block the packet life cycle regardless of whether retries are allowed or not."))}g.isMDXComponent=!0}}]);