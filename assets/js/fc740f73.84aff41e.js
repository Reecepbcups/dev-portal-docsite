"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[6583],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>h});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(58168),i=(n(96540),n(15680));const a={title:"Authentication Modules",sidebar_label:"Authentication Modules",sidebar_position:3,slug:"/apps/interchain-accounts/auth-modules"},r="Building an authentication module",c={unversionedId:"apps/interchain-accounts/auth-modules",id:"version-v6.3.x/apps/interchain-accounts/auth-modules",title:"Authentication Modules",description:"Authentication modules enable application developers to perform custom logic when interacting with the Interchain Accounts controller sumbmodule's MsgServer.",source:"@site/ibc-go_versioned_docs/version-v6.3.x/02-apps/02-interchain-accounts/03-auth-modules.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/auth-modules",permalink:"/ibc-go/v6.3.x/apps/interchain-accounts/auth-modules",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:3,frontMatter:{title:"Authentication Modules",sidebar_label:"Authentication Modules",sidebar_position:3,slug:"/apps/interchain-accounts/auth-modules"},sidebar:"defaultSidebar",previous:{title:"Development Use Cases",permalink:"/ibc-go/v6.3.x/apps/interchain-accounts/development"},next:{title:"Integration",permalink:"/ibc-go/v6.3.x/apps/interchain-accounts/integration"}},l={},u=[{value:"Integration into <code>app.go</code> file",id:"integration-into-appgo-file",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"building-an-authentication-module"},"Building an authentication module"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Authentication modules enable application developers to perform custom logic when interacting with the Interchain Accounts controller sumbmodule's ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgServer"),". ")),(0,i.yg)("p",null,"The controller submodule is used for account registration and packet sending. It executes only logic required of all controllers of interchain accounts. The type of authentication used to manage the interchain accounts remains unspecified. There may exist many different types of authentication which are desirable for different use cases. Thus the purpose of the authentication module is to wrap the controller submodule with custom authentication logic."),(0,i.yg)("p",null,"In ibc-go, authentication modules can communicate with the controller submodule by passing messages through ",(0,i.yg)("inlineCode",{parentName:"p"},"baseapp"),"'s ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgServiceRouter"),". To implement an authentication module, the ",(0,i.yg)("inlineCode",{parentName:"p"},"IBCModule")," interface need not be fulfilled; it is only required to fulfill Cosmos SDK's ",(0,i.yg)("inlineCode",{parentName:"p"},"AppModuleBasic")," interface, just like any regular Cosmos SDK application module."),(0,i.yg)("p",null,"The authentication module must:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authenticate interchain account owners."),(0,i.yg)("li",{parentName:"ul"},"Track the associated interchain account address for an owner."),(0,i.yg)("li",{parentName:"ul"},"Send packets on behalf of an owner (after authentication).")),(0,i.yg)("h2",{id:"integration-into-appgo-file"},"Integration into ",(0,i.yg)("inlineCode",{parentName:"h2"},"app.go")," file"),(0,i.yg)("p",null,"To integrate the authentication module into your chain, please follow the steps outlined in ",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/v6.3.x/apps/interchain-accounts/integration#example-integration"},(0,i.yg)("inlineCode",{parentName:"a"},"app.go")," integration"),"."))}d.isMDXComponent=!0}}]);