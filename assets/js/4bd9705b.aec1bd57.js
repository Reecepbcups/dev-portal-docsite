"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[81368],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),g=o,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(f,p(p({ref:r},c),{},{components:t})):n.createElement(f,p({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=g;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[d]="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},70450:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(58168),o=(t(96540),t(15680));const i={sidebar_position:1},p="Overview of app.go",a={unversionedId:"build/building-apps/app-go",id:"version-0.50/build/building-apps/app-go",title:"Overview of app.go",description:"This section is intended to provide an overview of the SimApp app.go file and is still a work in progress.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-apps/00-app-go.md",sourceDirName:"build/building-apps",slug:"/build/building-apps/app-go",permalink:"/cosmos-sdk/0.50/build/building-apps/app-go",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Build",permalink:"/cosmos-sdk/0.50/build/"},next:{title:"Overview of app_v2.go",permalink:"/cosmos-sdk/0.50/build/building-apps/app-go-v2"}},s={},l=[{value:"Complete <code>app.go</code>",id:"complete-appgo",level:2}],c={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"overview-of-appgo"},"Overview of ",(0,o.yg)("inlineCode",{parentName:"h1"},"app.go")),(0,o.yg)("p",null,"This section is intended to provide an overview of the ",(0,o.yg)("inlineCode",{parentName:"p"},"SimApp")," ",(0,o.yg)("inlineCode",{parentName:"p"},"app.go")," file and is still a work in progress.\nFor now please instead read the ",(0,o.yg)("a",{parentName:"p",href:"https://tutorials.cosmos.network"},"tutorials")," for a deep dive on how to build a chain."),(0,o.yg)("h2",{id:"complete-appgo"},"Complete ",(0,o.yg)("inlineCode",{parentName:"h2"},"app.go")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/simapp/app.go\n")))}u.isMDXComponent=!0}}]);