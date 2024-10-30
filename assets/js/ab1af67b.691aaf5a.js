"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[37195],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,g=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={title:"Troubleshooting",sidebar_label:"Troubleshooting",sidebar_position:11,slug:"/ibc/troubleshooting"},a="Troubleshooting",l={unversionedId:"ibc/troubleshooting",id:"version-v8.5.x/ibc/troubleshooting",title:"Troubleshooting",description:"Unauthorized client states",source:"@site/ibc-go_versioned_docs/version-v8.5.x/01-ibc/11-troubleshooting.md",sourceDirName:"01-ibc",slug:"/ibc/troubleshooting",permalink:"/ibc-go/v8.5.x/ibc/troubleshooting",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:11,frontMatter:{title:"Troubleshooting",sidebar_label:"Troubleshooting",sidebar_position:11,slug:"/ibc/troubleshooting"},sidebar:"defaultSidebar",previous:{title:"Roadmap",permalink:"/ibc-go/v8.5.x/ibc/roadmap"},next:{title:"Capability Module",permalink:"/ibc-go/v8.5.x/ibc/capability-module"}},s={},c=[{value:"Unauthorized client states",id:"unauthorized-client-states",level:2}],u={toc:c},p="wrapper";function b(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("h2",{id:"unauthorized-client-states"},"Unauthorized client states"),(0,o.yg)("p",null,"If it is being reported that a client state is unauthorized, this is due to the client type not being present\nin the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/modules/core/02-client/types/client.pb.go#L345"},(0,o.yg)("inlineCode",{parentName:"a"},"AllowedClients"))," array."),(0,o.yg)("p",null,"Unless the client type is present in this array or the ",(0,o.yg)("inlineCode",{parentName:"p"},"AllowAllClients")," wildcard (",(0,o.yg)("inlineCode",{parentName:"p"},'"*"'),") is used, all usage of clients of this type will be prevented."))}b.isMDXComponent=!0}}]);