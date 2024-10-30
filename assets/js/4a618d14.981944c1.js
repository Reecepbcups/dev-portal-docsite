"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[30190],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(58168),r=(t(96540),t(15680));const a={sidebar_position:1},i="Hooks",s={unversionedId:"docs/build/building-modules/define-hooks",id:"docs/build/building-modules/define-hooks",title:"Hooks",description:"Hooks are functions that are called before and/or after certain events in the module's lifecycle.",source:"@site/cosmos-sdk/docs/build/building-modules/18-define-hooks.md",sourceDirName:"docs/build/building-modules",slug:"/docs/build/building-modules/define-hooks",permalink:"/cosmos-sdk/next/docs/build/building-modules/define-hooks",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"PreBlocker",permalink:"/cosmos-sdk/next/docs/build/building-modules/preblock"},next:{title:"Introduction",permalink:"/cosmos-sdk/next/docs/build/abci/introduction"}},p={},l=[{value:"Defining Hooks",id:"defining-hooks",level:2},{value:"Examples in the SDK",id:"examples-in-the-sdk",level:2}],c={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hooks"},"Hooks"),(0,r.yg)("p",null,"Hooks are functions that are called before and/or after certain events in the module's lifecycle."),(0,r.yg)("h2",{id:"defining-hooks"},"Defining Hooks"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Define the hook interface and a wrapper implementing ",(0,r.yg)("inlineCode",{parentName:"p"},"depinject.OnePerModuleType"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/71c603a2a5a103df00f216d78ec8b108ed64ae28/testutil/x/counter/types/expected_keepers.go#L5-L12\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add a ",(0,r.yg)("inlineCode",{parentName:"p"},"CounterHooks")," field to the keeper:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/71c603a2a5a103df00f216d78ec8b108ed64ae28/testutil/x/counter/keeper/keeper.go#L25\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a ",(0,r.yg)("inlineCode",{parentName:"p"},"depinject")," invoker function"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/71c603a2a5a103df00f216d78ec8b108ed64ae28/testutil/x/counter/depinject.go#L53-L75   \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Inject the hooks during app initialization:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-go"},'appConfig = appconfig.Compose(&appv1alpha1.Config{\n    Modules: []*appv1alpha1.ModuleConfig{\n        // ....\n        {\n            Name:   types.ModuleName,\n            Config: appconfig.WrapAny(&types.Module{}),\n        },\n    }\n})\nappConfig = depinject.Configs(\n    AppConfig(),\n    runtime.DefaultServiceBindings(),\n    depinject.Supply(\n        logger,\n        viper,\n        map[string]types.CounterHooksWrapper{\n            "counter": types.CounterHooksWrapper{&types.Hooks{}},\n        },\n))\n')))),(0,r.yg)("h2",{id:"examples-in-the-sdk"},"Examples in the SDK"),(0,r.yg)("p",null,"For examples of hooks implementation in the Cosmos SDK, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/modules/epochs#hooks"},"Epochs Hooks documentation")," and ",(0,r.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/modules/distribution#hooks"},"Distribution Hooks Documentation"),"."))}u.isMDXComponent=!0}}]);