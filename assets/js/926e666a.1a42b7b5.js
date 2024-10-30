"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[61934],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(t),m=r,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63234:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const l={title:"Parameters",sidebar_label:"Parameters",sidebar_position:6,slug:"/apps/interchain-accounts/parameters"},o="Parameters",i={unversionedId:"apps/interchain-accounts/parameters",id:"version-v7.8.x/apps/interchain-accounts/parameters",title:"Parameters",description:"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:",source:"@site/ibc-go_versioned_docs/version-v7.8.x/02-apps/02-interchain-accounts/06-parameters.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/parameters",permalink:"/ibc-go/v7.8.x/apps/interchain-accounts/parameters",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:6,frontMatter:{title:"Parameters",sidebar_label:"Parameters",sidebar_position:6,slug:"/apps/interchain-accounts/parameters"},sidebar:"defaultSidebar",previous:{title:"Messages",permalink:"/ibc-go/v7.8.x/apps/interchain-accounts/messages"},next:{title:"Transaction Encoding",permalink:"/ibc-go/v7.8.x/apps/interchain-accounts/tx-encoding"}},s={},p=[{value:"Controller Submodule Parameters",id:"controller-submodule-parameters",level:2},{value:"ControllerEnabled",id:"controllerenabled",level:3},{value:"Host Submodule Parameters",id:"host-submodule-parameters",level:2},{value:"HostEnabled",id:"hostenabled",level:3},{value:"AllowMessages",id:"allowmessages",level:3}],c={toc:p},g="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"The Interchain Accounts module contains the following on-chain parameters, logically separated for each distinct submodule:"),(0,r.yg)("h2",{id:"controller-submodule-parameters"},"Controller Submodule Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ControllerEnabled")),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))))),(0,r.yg)("h3",{id:"controllerenabled"},"ControllerEnabled"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ControllerEnabled")," parameter controls a chains ability to service ICS-27 controller specific logic. This includes the sending of Interchain Accounts packet data as well as the following ICS-26 callback handlers:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnChanOpenInit")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnChanOpenAck")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnChanCloseConfirm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnAcknowledgementPacket")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnTimeoutPacket"))),(0,r.yg)("h2",{id:"host-submodule-parameters"},"Host Submodule Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HostEnabled")),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AllowMessages")),(0,r.yg)("td",{parentName:"tr",align:null},"[]string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},'["*"]'))))),(0,r.yg)("h3",{id:"hostenabled"},"HostEnabled"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"HostEnabled")," parameter controls a chains ability to service ICS-27 host specific logic. This includes the following ICS-26 callback handlers:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnChanOpenTry")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnChanOpenConfirm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnChanCloseConfirm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"OnRecvPacket"))),(0,r.yg)("h3",{id:"allowmessages"},"AllowMessages"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"AllowMessages")," parameter provides the ability for a chain to limit the types of messages or transactions that hosted interchain accounts are authorized to execute by defining an allowlist using the Protobuf message type URL format."),(0,r.yg)("p",null,"For example, a Cosmos SDK-based chain that elects to provide hosted Interchain Accounts with the ability of governance voting and staking delegations will define its parameters as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"params": {\n    "host_enabled": true,\n    "allow_messages": ["/cosmos.staking.v1beta1.MsgDelegate", "/cosmos.gov.v1beta1.MsgVote"]\n}\n')),(0,r.yg)("p",null,"There is also a special wildcard ",(0,r.yg)("inlineCode",{parentName:"p"},'"*"')," value which allows any type of message to be executed by the interchain account. This must be the only value in the ",(0,r.yg)("inlineCode",{parentName:"p"},"allow_messages")," array."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"params": {\n    "host_enabled": true,\n    "allow_messages": ["*"]\n}\n')))}u.isMDXComponent=!0}}]);