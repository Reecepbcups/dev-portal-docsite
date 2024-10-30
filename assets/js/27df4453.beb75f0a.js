"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[43028],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>b});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const i={title:"State",sidebar_label:"State",sidebar_position:3,slug:"/ibc/light-clients/solomachine/state"},a="State",l={unversionedId:"light-clients/solomachine/state",id:"version-v7.8.x/light-clients/solomachine/state",title:"State",description:"The solo machine light client will only store consensus states for each update by a header",source:"@site/ibc-go_versioned_docs/version-v7.8.x/03-light-clients/02-solomachine/03-state.md",sourceDirName:"03-light-clients/02-solomachine",slug:"/ibc/light-clients/solomachine/state",permalink:"/ibc-go/v7.8.x/ibc/light-clients/solomachine/state",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:3,frontMatter:{title:"State",sidebar_label:"State",sidebar_position:3,slug:"/ibc/light-clients/solomachine/state"},sidebar:"defaultSidebar",previous:{title:"Concepts",permalink:"/ibc-go/v7.8.x/ibc/light-clients/solomachine/concepts"},next:{title:"State Transitions",permalink:"/ibc-go/v7.8.x/ibc/light-clients/solomachine/state_transitions"}},s={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"state"},"State"),(0,o.yg)("p",null,"The solo machine light client will only store consensus states for each update by a header\nor a governance proposal. The latest client state is also maintained in the store."))}f.isMDXComponent=!0}}]);