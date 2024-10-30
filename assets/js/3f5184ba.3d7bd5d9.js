"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[99529],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>v});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,v=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?t.createElement(v,o(o({ref:r},p),{},{components:n})):t.createElement(v,o({ref:r},p))}));function v(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69820:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(58168),i=(n(96540),n(15680));const a={title:"Upgrading IBC Chains Overview",sidebar_label:"Overview",sidebar_position:0,slug:"/ibc/upgrades/intro"},o=void 0,c={unversionedId:"ibc/upgrades/intro",id:"version-v4.6.x/ibc/upgrades/intro",title:"Upgrading IBC Chains Overview",description:"Upgrading IBC Chains Overview",source:"@site/ibc-go_versioned_docs/version-v4.6.x/01-ibc/05-upgrades/00-intro.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/intro",permalink:"/ibc-go/v4.6.x/ibc/upgrades/intro",draft:!1,tags:[],version:"v4.6.x",sidebarPosition:0,frontMatter:{title:"Upgrading IBC Chains Overview",sidebar_label:"Overview",sidebar_position:0,slug:"/ibc/upgrades/intro"},sidebar:"defaultSidebar",previous:{title:"Integrating IBC middleware into a chain",permalink:"/ibc-go/v4.6.x/ibc/middleware/integration"},next:{title:"How to Upgrade IBC Chains and their Clients",permalink:"/ibc-go/v4.6.x/ibc/upgrades/quick-guide"}},s={},l=[{value:"Upgrading IBC Chains Overview",id:"upgrading-ibc-chains-overview",level:3}],p={toc:l},u="wrapper";function d(e){let{components:r,...n}=e;return(0,i.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"upgrading-ibc-chains-overview"},"Upgrading IBC Chains Overview"),(0,i.yg)("p",null,"This directory contains information on how to upgrade an IBC chain without breaking counterparty clients and connections."),(0,i.yg)("p",null,"IBC-connnected chains must be able to upgrade without breaking connections to other chains. Otherwise there would be a massive disincentive towards upgrading and disrupting high-value IBC connections, thus preventing chains in the IBC ecosystem from evolving and improving. Many chain upgrades may be irrelevant to IBC, however some upgrades could potentially break counterparty clients if not handled correctly. Thus, any IBC chain that wishes to perform a IBC-client-breaking upgrade must perform an IBC upgrade in order to allow counterparty clients to securely upgrade to the new light client."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v4.6.x/ibc/upgrades/quick-guide"},"quick-guide")," describes how IBC-connected chains can perform client-breaking upgrades and how relayers can securely upgrade counterparty clients using the SDK."),(0,i.yg)("li",{parentName:"ol"},"The ",(0,i.yg)("a",{parentName:"li",href:"/ibc-go/v4.6.x/ibc/upgrades/developer-guide"},"developer-guide")," is a guide for developers intending to develop IBC client implementations with upgrade functionality.")))}d.isMDXComponent=!0}}]);