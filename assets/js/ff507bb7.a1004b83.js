"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[44986],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||a;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(58168),r=(t(96540),t(15680));const a={sidebar_position:1},i=void 0,s={unversionedId:"docs/build/building-apps/app-go-genesis",id:"docs/build/building-apps/app-go-genesis",title:"app-go-genesis",description:"Modifying the DefaultGenesis",source:"@site/cosmos-sdk/docs/build/building-apps/06-app-go-genesis.md",sourceDirName:"docs/build/building-apps",slug:"/docs/build/building-apps/app-go-genesis",permalink:"/cosmos-sdk/next/docs/build/building-apps/app-go-genesis",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Application Testnets",permalink:"/cosmos-sdk/next/docs/build/building-apps/app-testnet"},next:{title:"System Tests",permalink:"/cosmos-sdk/next/docs/build/building-apps/system-tests"}},p={},l=[{value:"Modifying the <code>DefaultGenesis</code>",id:"modifying-the-defaultgenesis",level:3}],d={toc:l},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"modifying-the-defaultgenesis"},"Modifying the ",(0,r.yg)("inlineCode",{parentName:"h3"},"DefaultGenesis")),(0,r.yg)("p",null,"It is possible to modify the DefaultGenesis parameters for modules by wrapping the module, providing it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"*module.Manager")," and injecting it with ",(0,r.yg)("inlineCode",{parentName:"p"},"depinject"),"."),(0,r.yg)("p",null,"Example ( staking ) :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'type CustomStakingModule struct {\n    staking.AppModule\n    cdc codec.Codec\n}\n\n// DefaultGenesis will override the Staking module DefaultGenesis AppModuleBasic method.\nfunc (cm CustomStakingModule) DefaultGenesis() json.RawMessage {\n    params := stakingtypes.DefaultParams()\n    params.BondDenom = "mydenom"\n\n    return cm.cdc.MustMarshalJSON(&stakingtypes.GenesisState{\n        Params: params,\n    })\n}\n\n// option 1 ( for depinject users ): override previous module manager\ndepinject.Inject(\n// ... provider/invoker/supplier\n&moduleManager,\n)\n\noldStakingModule,_ := moduleManager.Modules()[stakingtypes.ModuleName].(staking.AppModule)\nmoduleManager.Modules()[stakingtypes.ModuleName] = CustomStakingModule{\n    AppModule: oldStakingModule,\n    cdc: appCodec,\n}\n\n// option 2 ( for non depinject users ): use new module manager\nmoduleManager := module.NewManagerFromMap(map[string]appmodule.AppModule{\nstakingtypes.ModuleName: CustomStakingModule{cdc: appCodec, AppModule: staking.NewAppModule(...)},\n// other modules ...\n})\n\n// set the module manager\napp.ModuleManager = moduleManager\n')))}c.isMDXComponent=!0}}]);