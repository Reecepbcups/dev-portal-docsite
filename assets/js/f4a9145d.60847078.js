"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[62375],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),o=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=o(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(t),m=l,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(g,i(i({ref:a},d),{},{components:t})):n.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54339:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=t(58168),l=(t(96540),t(15680));const r={title:"End Users",sidebar_label:"End Users",sidebar_position:5,slug:"/middleware/callbacks/end-users"},i="Usage",s={unversionedId:"middleware/callbacks/end-users",id:"version-v8.5.x/middleware/callbacks/end-users",title:"End Users",description:"This section explains how to use the callbacks middleware from the perspective of an IBC Actor. Callbacks middleware provides two types of callbacks:",source:"@site/ibc-go_versioned_docs/version-v8.5.x/04-middleware/02-callbacks/05-end-users.md",sourceDirName:"04-middleware/02-callbacks",slug:"/middleware/callbacks/end-users",permalink:"/ibc-go/v8.5.x/middleware/callbacks/end-users",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:5,frontMatter:{title:"End Users",sidebar_label:"End Users",sidebar_position:5,slug:"/middleware/callbacks/end-users"},sidebar:"defaultSidebar",previous:{title:"Events",permalink:"/ibc-go/v8.5.x/middleware/callbacks/events"},next:{title:"Gas Management",permalink:"/ibc-go/v8.5.x/middleware/callbacks/gas"}},c={},o=[{value:"Source Callbacks",id:"source-callbacks",level:2},{value:"Destination Callbacks",id:"destination-callbacks",level:2}],d={toc:o},p="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(p,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"usage"},"Usage"),(0,l.yg)("p",null,"This section explains how to use the callbacks middleware from the perspective of an IBC Actor. Callbacks middleware provides two types of callbacks:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Source callbacks:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SendPacket")," callback"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"OnAcknowledgementPacket")," callback"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"OnTimeoutPacket")," callback"))),(0,l.yg)("li",{parentName:"ul"},"Destination callbacks:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ReceivePacket")," callback")))),(0,l.yg)("p",null,"For a given channel, the source callbacks are supported if the source chain has the callbacks middleware wired up in the channel's IBC stack. Similarly, the destination callbacks are supported if the destination chain has the callbacks middleware wired up in the channel's IBC stack."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Callbacks are always executed after the packet has been processed by the underlying IBC module.")),(0,l.yg)("admonition",{type:"warning"},(0,l.yg)("p",{parentName:"admonition"},"If the underlying application module is doing an asynchronous acknowledgement on packet receive (for example, if the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-apps/tree/main/middleware/packet-forward-middleware"},"packet forward middleware")," is in the stack, and is being used by this packet), then the callbacks middleware will execute the ",(0,l.yg)("inlineCode",{parentName:"p"},"ReceivePacket")," callback after the acknowledgement has been received.")),(0,l.yg)("h2",{id:"source-callbacks"},"Source Callbacks"),(0,l.yg)("p",null,"Source callbacks are natively supported in the following ibc modules (if they are wrapped by the callbacks middleware):"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"transfer")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"icacontroller"))),(0,l.yg)("p",null,"To have your source callbacks be processed by the callbacks middleware, you must set the memo in the application's packet data to the following format:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n')),(0,l.yg)("h2",{id:"destination-callbacks"},"Destination Callbacks"),(0,l.yg)("p",null,"Destination callbacks are natively only supported in the transfer module. Note that wrapping icahost is not supported. This is because icahost should be able to execute an arbitrary transaction anyway, and can call contracts or modules directly."),(0,l.yg)("p",null,"To have your destination callbacks processed by the callbacks middleware, you must set the memo in the application's packet data to the following format:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "dest_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n')),(0,l.yg)("p",null,"Note that a packet can have both a source and destination callback."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  },\n  "dest_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n')),(0,l.yg)("h1",{id:"user-defined-gas-limit"},"User Defined Gas Limit"),(0,l.yg)("p",null,"User defined gas limit was added for the following reasons:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"To prevent callbacks from blocking packet lifecycle."),(0,l.yg)("li",{parentName:"ul"},"To prevent relayers from being able to DOS the callback execution by sending a packet with a low amount of gas.")),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"There is a chain wide parameter that sets the maximum gas limit that a user can set for a callback. This is to prevent a user from setting a gas limit that is too high for relayers. If the ",(0,l.yg)("inlineCode",{parentName:"p"},'"gas_limit"')," is not set in the packet memo, then the maximum gas limit is used.")),(0,l.yg)("p",null,"These goals are achieved by creating a minimum gas amount required for callback execution. If the relayer provides at least the minimum gas limit for the callback execution, then the packet lifecycle will not be blocked if the callback runs out of gas during execution, and the callback cannot be retried. If the relayer does not provided the minimum amount of gas and the callback executions runs out of gas, the entire tx is reverted and it may be executed again."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},(0,l.yg)("inlineCode",{parentName:"p"},"SendPacket")," callback is always reverted if the callback execution fails or returns an error for any reason. This is so that the packet is not sent if the callback execution fails.")))}u.isMDXComponent=!0}}]);