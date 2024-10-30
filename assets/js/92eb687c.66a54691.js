"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[80503],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},54679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const i={title:"IBC-Go v1 to v2",sidebar_label:"IBC-Go v1 to v2",sidebar_position:3,slug:"/migrations/v1-to-v2"},a="Migrating from ibc-go v1 to v2",s={unversionedId:"docs/migrations/v1-to-v2",id:"docs/migrations/v1-to-v2",title:"IBC-Go v1 to v2",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/ibc-go/docs/05-migrations/03-v1-to-v2.md",sourceDirName:"docs/05-migrations",slug:"/migrations/v1-to-v2",permalink:"/ibc-go/next/migrations/v1-to-v2",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"IBC-Go v1 to v2",sidebar_label:"IBC-Go v1 to v2",sidebar_position:3,slug:"/migrations/v1-to-v2"},sidebar:"defaultSidebar",previous:{title:"SDK v0.43 to IBC-Go v1",permalink:"/ibc-go/next/migrations/sdk-to-v1"},next:{title:"IBC-Go v2 to v3",permalink:"/ibc-go/next/migrations/v2-to-v3"}},l={},c=[{value:"Chains",id:"chains",level:2},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"<code>sdk.Result</code> removed",id:"sdkresult-removed",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"migrating-from-ibc-go-v1-to-v2"},"Migrating from ibc-go v1 to v2"),(0,o.yg)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,o.yg)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Chains"),(0,o.yg)("li",{parentName:"ul"},"IBC Apps"),(0,o.yg)("li",{parentName:"ul"},"Relayers"),(0,o.yg)("li",{parentName:"ul"},"IBC Light Clients")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"github.com/cosmos/ibc-go -> github.com/cosmos/ibc-go/v2\n")),(0,o.yg)("h2",{id:"chains"},"Chains"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")),(0,o.yg)("h2",{id:"ibc-apps"},"IBC Apps"),(0,o.yg)("p",null,"A new function has been added to the app module interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"// NegotiateAppVersion performs application version negotiation given the provided channel ordering, connectionID, portID, counterparty and proposed version.\n// An error is returned if version negotiation cannot be performed. For example, an application module implementing this interface\n// may decide to return an error in the event of the proposed version being incompatible with it's own\nNegotiateAppVersion(\n  ctx sdk.Context,\n  order channeltypes.Order,\n  connectionID string,\n  portID string,\n  counterparty channeltypes.Counterparty,\n  proposedVersion string,\n) (version string, err error)\n")),(0,o.yg)("p",null,"This function should perform application version negotiation and return the negotiated version. If the version cannot be negotiated, an error should be returned. This function is only used on the client side."),(0,o.yg)("h3",{id:"sdkresult-removed"},(0,o.yg)("inlineCode",{parentName:"h3"},"sdk.Result")," removed"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"sdk.Result")," has been removed as a return value in the application callbacks. Previously it was being discarded by core IBC and was thus unused."),(0,o.yg)("h2",{id:"relayers"},"Relayers"),(0,o.yg)("p",null,"A new gRPC has been added to 05-port, ",(0,o.yg)("inlineCode",{parentName:"p"},"AppVersion"),". It returns the negotiated app version. This function should be used for the ",(0,o.yg)("inlineCode",{parentName:"p"},"ChanOpenTry")," channel handshake step to decide upon the application version which should be set in the channel."),(0,o.yg)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"No relevant changes were made in this release.")))}d.isMDXComponent=!0}}]);