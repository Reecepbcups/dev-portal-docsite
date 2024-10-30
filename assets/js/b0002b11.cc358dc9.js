"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[22187],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},87879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(58168),r=(n(96540),n(15680));const a={},o="ADR 007: Solo machine sign bytes",s={unversionedId:"architecture/adr-007-solomachine-signbytes",id:"version-v4.6.x/architecture/adr-007-solomachine-signbytes",title:"ADR 007: Solo machine sign bytes",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v4.6.x/architecture/adr-007-solomachine-signbytes.md",sourceDirName:"architecture",slug:"/architecture/adr-007-solomachine-signbytes",permalink:"/ibc-go/v4.6.x/architecture/adr-007-solomachine-signbytes",draft:!1,tags:[],version:"v4.6.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 006: ICS-02 client refactor",permalink:"/ibc-go/v4.6.x/architecture/adr-006-02-client-refactor"},next:{title:"ADR 008: Callback to IBC Actors",permalink:"/ibc-go/v4.6.x/architecture/adr-008-app-caller-cbs"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-007-solo-machine-sign-bytes"},"ADR 007: Solo machine sign bytes"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2022-08-02: Initial draft")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"Accepted, applied in v7"),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"06-solomachine")," implementation up until ibc-go v7 constructed sign bytes using a ",(0,r.yg)("inlineCode",{parentName:"p"},"DataType")," which described what type of data was being signed.\nThis design decision arose from a misunderstanding of the security implications.\nIt was noted that the proto definitions do not ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/7237#discussion_r484264573"},"provide uniqueness")," which is a necessity for ensuring two signatures over different data types can never be the same.\nWhat was missed is that the uniqueness is not provided by the proto definition, but by the usage of the proto definition.\nThe path provided by core IBC will be unique and is already encoded into the signature data.\nThus two different paths with the same data values will encode differently which provides signature uniqueness."),(0,r.yg)("p",null,"Furthermore, the current construction does not support the proposed changes in the spec repo to support ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/issues/684"},"Generic Verification functions"),".\nThis is because in order to verify a new path, a new ",(0,r.yg)("inlineCode",{parentName:"p"},"DataType")," must be added for that path."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("p",null,"Remove ",(0,r.yg)("inlineCode",{parentName:"p"},"DataType")," and change the ",(0,r.yg)("inlineCode",{parentName:"p"},"DataType")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"SignBytes")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SignatureAndData")," to be ",(0,r.yg)("inlineCode",{parentName:"p"},"Path"),".\nThe new ",(0,r.yg)("inlineCode",{parentName:"p"},"Path")," field should be bytes.\nRemove all ",(0,r.yg)("inlineCode",{parentName:"p"},"...Data")," proto definitions except for ",(0,r.yg)("inlineCode",{parentName:"p"},"HeaderData"),"\nThese ",(0,r.yg)("inlineCode",{parentName:"p"},"...Data")," definitions were created previously for each ",(0,r.yg)("inlineCode",{parentName:"p"},"DataType"),".\nThe proto version of the solo machine proto definitions should be bumped to ",(0,r.yg)("inlineCode",{parentName:"p"},"v3"),"."),(0,r.yg)("p",null,"This removes an extra layer of complexity from signature construction and allows for support of generic verification."),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Simplification of solo machine signature construction"),(0,r.yg)("li",{parentName:"ul"},"Support for generic verification")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Breaks existing signature construction in a non-backwards compatible way"),(0,r.yg)("li",{parentName:"ul"},"Solo machines must update to handle the new format"),(0,r.yg)("li",{parentName:"ul"},"Migration required for solo machine client and consensus states")),(0,r.yg)("h3",{id:"neutral"},"Neutral"),(0,r.yg)("p",null,"No notable consequences"),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/1141"},"#1141"))))}d.isMDXComponent=!0}}]);