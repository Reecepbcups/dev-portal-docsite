"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[66003],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||g[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={title:"Metrics",sidebar_label:"Metrics",sidebar_position:6,slug:"/apps/transfer/metrics"},o="Metrics",s={unversionedId:"apps/transfer/metrics",id:"version-v4.6.x/apps/transfer/metrics",title:"Metrics",description:"The IBC transfer application module exposes the following set of metrics.",source:"@site/ibc-go_versioned_docs/version-v4.6.x/02-apps/01-transfer/06-metrics.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/metrics",permalink:"/ibc-go/v4.6.x/apps/transfer/metrics",draft:!1,tags:[],version:"v4.6.x",sidebarPosition:6,frontMatter:{title:"Metrics",sidebar_label:"Metrics",sidebar_position:6,slug:"/apps/transfer/metrics"},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/ibc-go/v4.6.x/apps/transfer/events"},next:{title:"Params",permalink:"/ibc-go/v4.6.x/apps/transfer/params"}},l={},p=[],c={toc:p},f="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(f,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"metrics"},"Metrics"),(0,a.yg)("p",null,"The IBC transfer application module exposes the following set of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/advanced/09-telemetry.md"},"metrics"),"."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Metric"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Unit"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"tx_msg_ibc_transfer")),(0,a.yg)("td",{parentName:"tr",align:"left"},"The total amount of tokens transferred via IBC in a ",(0,a.yg)("inlineCode",{parentName:"td"},"MsgTransfer")," (source or sink chain)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"token"),(0,a.yg)("td",{parentName:"tr",align:"left"},"gauge")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"ibc_transfer_packet_receive")),(0,a.yg)("td",{parentName:"tr",align:"left"},"The total amount of tokens received in a ",(0,a.yg)("inlineCode",{parentName:"td"},"FungibleTokenPacketData")," (source or sink chain)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"token"),(0,a.yg)("td",{parentName:"tr",align:"left"},"gauge")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"ibc_transfer_send")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Total number of IBC transfers sent from a chain (source or sink)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"transfer"),(0,a.yg)("td",{parentName:"tr",align:"left"},"counter")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"ibc_transfer_receive")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Total number of IBC transfers received to a chain (source or sink)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"transfer"),(0,a.yg)("td",{parentName:"tr",align:"left"},"counter")))))}g.isMDXComponent=!0}}]);