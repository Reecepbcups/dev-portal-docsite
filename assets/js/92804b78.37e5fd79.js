"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[93485],{15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),y=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},o=function(e){var t=y(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=y(n),d=r,c=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(c,g(g({ref:t},o),{},{components:n})):a.createElement(c,g({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,g[1]=p;for(var y=2;y<l;y++)g[y]=n[y];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var a=n(58168),r=(n(96540),n(15680));const l={title:"Events",sidebar_label:"Events",sidebar_position:5,slug:"/apps/transfer/events"},g="Events",p={unversionedId:"apps/transfer/events",id:"version-v6.3.x/apps/transfer/events",title:"Events",description:"MsgTransfer",source:"@site/ibc-go_versioned_docs/version-v6.3.x/02-apps/01-transfer/05-events.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/events",permalink:"/ibc-go/v6.3.x/apps/transfer/events",draft:!1,tags:[],version:"v6.3.x",sidebarPosition:5,frontMatter:{title:"Events",sidebar_label:"Events",sidebar_position:5,slug:"/apps/transfer/events"},sidebar:"defaultSidebar",previous:{title:"Messages",permalink:"/ibc-go/v6.3.x/apps/transfer/messages"},next:{title:"Metrics",permalink:"/ibc-go/v6.3.x/apps/transfer/metrics"}},i={},y=[{value:"<code>MsgTransfer</code>",id:"msgtransfer",level:2},{value:"<code>OnRecvPacket</code> callback",id:"onrecvpacket-callback",level:2},{value:"<code>OnAcknowledgePacket</code> callback",id:"onacknowledgepacket-callback",level:2},{value:"<code>OnTimeoutPacket</code> callback",id:"ontimeoutpacket-callback",level:2}],o={toc:y},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"events"},"Events"),(0,r.yg)("h2",{id:"msgtransfer"},(0,r.yg)("inlineCode",{parentName:"h2"},"MsgTransfer")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ibc_transfer"),(0,r.yg)("td",{parentName:"tr",align:null},"sender"),(0,r.yg)("td",{parentName:"tr",align:null},"{","sender","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ibc_transfer"),(0,r.yg)("td",{parentName:"tr",align:null},"receiver"),(0,r.yg)("td",{parentName:"tr",align:null},"{","receiver","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"module"),(0,r.yg)("td",{parentName:"tr",align:null},"transfer")))),(0,r.yg)("h2",{id:"onrecvpacket-callback"},(0,r.yg)("inlineCode",{parentName:"h2"},"OnRecvPacket")," callback"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"module"),(0,r.yg)("td",{parentName:"tr",align:null},"transfer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"sender"),(0,r.yg)("td",{parentName:"tr",align:null},"{","sender","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"receiver"),(0,r.yg)("td",{parentName:"tr",align:null},"{","receiver","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"denom"),(0,r.yg)("td",{parentName:"tr",align:null},"{","denom","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"amount"),(0,r.yg)("td",{parentName:"tr",align:null},"{","amount","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"memo"),(0,r.yg)("td",{parentName:"tr",align:null},"{","memo","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"success"),(0,r.yg)("td",{parentName:"tr",align:null},"{","ackSuccess","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"error"),(0,r.yg)("td",{parentName:"tr",align:null},"{","ackError","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"denomination_trace"),(0,r.yg)("td",{parentName:"tr",align:null},"trace_hash"),(0,r.yg)("td",{parentName:"tr",align:null},"{","hex_hash","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"denomination_trace"),(0,r.yg)("td",{parentName:"tr",align:null},"denom"),(0,r.yg)("td",{parentName:"tr",align:null},"{","voucherDenom","}")))),(0,r.yg)("h2",{id:"onacknowledgepacket-callback"},(0,r.yg)("inlineCode",{parentName:"h2"},"OnAcknowledgePacket")," callback"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"module"),(0,r.yg)("td",{parentName:"tr",align:null},"transfer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"sender"),(0,r.yg)("td",{parentName:"tr",align:null},"{","sender","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"receiver"),(0,r.yg)("td",{parentName:"tr",align:null},"{","receiver","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"denom"),(0,r.yg)("td",{parentName:"tr",align:null},"{","denom","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"amount"),(0,r.yg)("td",{parentName:"tr",align:null},"{","amount","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"memo"),(0,r.yg)("td",{parentName:"tr",align:null},"{","memo","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"acknowledgement"),(0,r.yg)("td",{parentName:"tr",align:null},"{","ack.String()","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"success / error"),(0,r.yg)("td",{parentName:"tr",align:null},"{","ack.Response","}")))),(0,r.yg)("h2",{id:"ontimeoutpacket-callback"},(0,r.yg)("inlineCode",{parentName:"h2"},"OnTimeoutPacket")," callback"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"module"),(0,r.yg)("td",{parentName:"tr",align:null},"transfer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"refund_receiver"),(0,r.yg)("td",{parentName:"tr",align:null},"{","receiver","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"denom"),(0,r.yg)("td",{parentName:"tr",align:null},"{","denom","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"amount"),(0,r.yg)("td",{parentName:"tr",align:null},"{","amount","}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fungible_token_packet"),(0,r.yg)("td",{parentName:"tr",align:null},"memo"),(0,r.yg)("td",{parentName:"tr",align:null},"{","memo","}")))))}u.isMDXComponent=!0}}]);