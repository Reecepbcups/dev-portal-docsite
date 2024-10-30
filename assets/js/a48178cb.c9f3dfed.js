"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[39159],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:1},i="Configuration",c={unversionedId:"learn/advanced/config",id:"version-0.50/learn/advanced/config",title:"Configuration",description:"This documentation refers to the app.toml, if you'd like to read about the config.toml please visit CometBFT docs.",source:"@site/cosmos-sdk_versioned_docs/version-0.50/learn/advanced/16-config.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/config",permalink:"/cosmos-sdk/0.50/learn/advanced/config",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"In-Place Store Migrations",permalink:"/cosmos-sdk/0.50/learn/advanced/upgrade"},next:{title:"AutoCLI",permalink:"/cosmos-sdk/0.50/learn/advanced/autocli"}},l={},s=[{value:"inter-block-cache",id:"inter-block-cache",level:2},{value:"iavl-cache-size",id:"iavl-cache-size",level:2},{value:"iavl-lazy-loading",id:"iavl-lazy-loading",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"This documentation refers to the app.toml, if you'd like to read about the config.toml please visit ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/"},"CometBFT docs"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/tools/confix/data/v0.47-app.toml \n")),(0,o.yg)("h2",{id:"inter-block-cache"},"inter-block-cache"),(0,o.yg)("p",null,"This feature will consume more ram than a normal node, if enabled."),(0,o.yg)("h2",{id:"iavl-cache-size"},"iavl-cache-size"),(0,o.yg)("p",null,"Using this feature will increase ram consumption"),(0,o.yg)("h2",{id:"iavl-lazy-loading"},"iavl-lazy-loading"),(0,o.yg)("p",null,"This feature is to be used for archive nodes, allowing them to have a faster start up time."))}u.isMDXComponent=!0}}]);