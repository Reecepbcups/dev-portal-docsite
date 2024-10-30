"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[27183],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(58168),r=(n(96540),n(15680));const a={title:"Best Practices",sidebar_label:"Best Practices",sidebar_position:13,slug:"/ibc/best-practices"},o="Best practices",c={unversionedId:"ibc/best-practices",id:"version-v9.0.x/ibc/best-practices",title:"Best Practices",description:"Identifying legitimate channels",source:"@site/ibc-go_versioned_docs/version-v9.0.x/01-ibc/13-best-practices.md",sourceDirName:"01-ibc",slug:"/ibc/best-practices",permalink:"/ibc-go/ibc/best-practices",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:13,frontMatter:{title:"Best Practices",sidebar_label:"Best Practices",sidebar_position:13,slug:"/ibc/best-practices"},sidebar:"defaultSidebar",previous:{title:"Troubleshooting",permalink:"/ibc-go/ibc/troubleshooting"},next:{title:"Permissioning",permalink:"/ibc-go/ibc/permissioning"}},s={},l=[{value:"Identifying legitimate channels",id:"identifying-legitimate-channels",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"best-practices"},"Best practices"),(0,r.yg)("h2",{id:"identifying-legitimate-channels"},"Identifying legitimate channels"),(0,r.yg)("p",null,"Identifying which channel to use can be difficult as it requires verifying information about the chains you want to connect to.\nChannels are based on a light client. A chain can be uniquely identified by its chain ID, validator set pairing. It is unsafe to rely only on the chain ID.\nAny user can create a client with any chain ID, but only the chain with correct validator set and chain ID can produce headers which would update that client. "),(0,r.yg)("p",null,"Which channel to use is based on social consensus. The desired channel should have the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"based on a valid client (can only be updated by the chain it connects to)"),(0,r.yg)("li",{parentName:"ul"},"has sizable activity"),(0,r.yg)("li",{parentName:"ul"},"the underlying client is active")),(0,r.yg)("p",null,"To verify if a client is valid. You will need to obtain a header from the chain you want to connect to. This can be done by running a full node for that chain or relying on a trusted rpc address.\nThen you should query the light client you want to verify and obtain its latest consensus state. All consensus state fields must match the header queried for at same height as the consensus state (root, timestamp, next validator set hash).  "),(0,r.yg)("p",null,"Explorers and wallets are highly encouraged to follow this practice. It is unsafe to algorithmically add new channels without following this process."))}d.isMDXComponent=!0}}]);