"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[1527],{15680:(e,n,o)=>{o.d(n,{xA:()=>p,yg:()=>u});var t=o(96540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=t.createContext({}),s=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),g=a,u=c["".concat(d,".").concat(g)]||c[g]||m[g]||r;return o?t.createElement(u,i(i({ref:n},p),{},{components:o})):t.createElement(u,i({ref:n},p))}));function u(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},61181:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=o(58168),a=(o(96540),o(15680));const r={sidebar_position:1},i="BeginBlocker and EndBlocker",l={unversionedId:"docs/build/building-modules/beginblock-endblock",id:"docs/build/building-modules/beginblock-endblock",title:"BeginBlocker and EndBlocker",description:"BeginBlocker and EndBlocker are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the BeginBlock and EndBlock ABCI messages are received from the underlying consensus engine.",source:"@site/cosmos-sdk/docs/build/building-modules/06-beginblock-endblock.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/beginblock-endblock",permalink:"/cosmos-sdk/next/docs/build/building-modules/beginblock-endblock",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"ProtocolBuffer Annotations",permalink:"/cosmos-sdk/next/docs/build/building-modules/protobuf-annotations"},next:{title:"Keepers",permalink:"/cosmos-sdk/next/docs/build/building-modules/keeper"}},d={},s=[{value:"BeginBlocker and EndBlocker",id:"beginblocker-and-endblocker-1",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...o}=e;return(0,a.yg)(c,(0,t.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"beginblocker-and-endblocker"},"BeginBlocker and EndBlocker"),(0,a.yg)("admonition",{title:"Synopsis",type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/learn/advanced/baseapp#beginblock"},(0,a.yg)("inlineCode",{parentName:"a"},"BeginBlock"))," and ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/learn/advanced/baseapp#endblock"},(0,a.yg)("inlineCode",{parentName:"a"},"EndBlock"))," ABCI messages are received from the underlying consensus engine.")),(0,a.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/build/building-modules/module-manager"},"Module Manager")))),(0,a.yg)("h2",{id:"beginblocker-and-endblocker-1"},"BeginBlocker and EndBlocker"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," are a way for module developers to add automatic execution of logic to their module. This is a powerful tool that should be used carefully, as complex automatic functions can slow down or even halt the chain. "),(0,a.yg)("p",null,"In 0.47.0, Prepare and Process Proposal were added that allow app developers to do arbitrary work at those phases, but they do not influence the work that will be done in BeginBlock. If an application required ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlock")," to execute prior to any sort of work is done then this is not possible today (0.50.0). "),(0,a.yg)("p",null,"When needed, ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," are implemented as part of the ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/building-modules/module-manager#appmodule"},(0,a.yg)("inlineCode",{parentName:"a"},"HasBeginBlocker"),", ",(0,a.yg)("inlineCode",{parentName:"a"},"HasABCIEndBlocker")," and ",(0,a.yg)("inlineCode",{parentName:"a"},"EndBlocker")," interfaces"),". This means either can be left-out if not required. The ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlock")," methods of the interface implemented in ",(0,a.yg)("inlineCode",{parentName:"p"},"module.go")," generally defer to ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," methods respectively, which are usually implemented in ",(0,a.yg)("inlineCode",{parentName:"p"},"abci.go"),"."),(0,a.yg)("p",null,"The actual implementation of ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"abci.go")," are very similar to that of a ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/building-modules/msg-services"},(0,a.yg)("inlineCode",{parentName:"a"},"Msg")," service"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"They generally use the ",(0,a.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/build/building-modules/keeper"},(0,a.yg)("inlineCode",{parentName:"a"},"keeper"))," and ",(0,a.yg)("a",{parentName:"li",href:"https://pkg.go.dev/context"},(0,a.yg)("inlineCode",{parentName:"a"},"ctx"))," to retrieve information about the latest state."),(0,a.yg)("li",{parentName:"ul"},"If needed, they use the ",(0,a.yg)("inlineCode",{parentName:"li"},"keeper")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"ctx")," to trigger state-transitions."),(0,a.yg)("li",{parentName:"ul"},"If needed, they can emit ",(0,a.yg)("a",{parentName:"li",href:"/cosmos-sdk/next/docs/learn/advanced/events"},(0,a.yg)("inlineCode",{parentName:"a"},"events"))," via the ",(0,a.yg)("inlineCode",{parentName:"li"},"environments"),"'s ",(0,a.yg)("inlineCode",{parentName:"li"},"EventManager"),".")),(0,a.yg)("p",null,"A specific method (",(0,a.yg)("inlineCode",{parentName:"p"},"UpdateValidators"),") is available to return validator updates to the underlying consensus engine in the form of an ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/07151304e2ec6a185243d083f59a2d543253cb15/core/appmodule/v2/module.go#L87-L101"},(0,a.yg)("inlineCode",{parentName:"a"},"[]appmodule.ValidatorUpdates")),". This is the preferred way to implement custom validator changes."),(0,a.yg)("p",null,"It is possible for developers to define the order of execution between the ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," functions of each of their application's modules via the module's manager ",(0,a.yg)("inlineCode",{parentName:"p"},"SetOrderBeginBlocker"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"SetOrderEndBlocker")," methods. For more on the module manager, click ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/next/docs/build/building-modules/module-manager#manager"},"here"),"."),(0,a.yg)("p",null,"See an example implementation of ",(0,a.yg)("inlineCode",{parentName:"p"},"BeginBlocker")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"distribution")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/distribution/keeper/abci.go#L13-L40\n")),(0,a.yg)("p",null,"and an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"gov")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/gov/keeper/abci.go#L22\n")),(0,a.yg)("p",null,"and an example implementation of ",(0,a.yg)("inlineCode",{parentName:"p"},"EndBlocker")," with validator updates from the ",(0,a.yg)("inlineCode",{parentName:"p"},"staking")," module:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.52.0-beta.1/x/staking/keeper/abci.go#L12-L17\n")))}m.isMDXComponent=!0}}]);