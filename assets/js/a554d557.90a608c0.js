"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[94487],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={title:"State Transitions",sidebar_label:"State Transitions",sidebar_position:3,slug:"/apps/transfer/state-transitions"},s="State transitions",o={unversionedId:"apps/transfer/state-transitions",id:"version-v9.0.x/apps/transfer/state-transitions",title:"State Transitions",description:"Send fungible tokens",source:"@site/ibc-go_versioned_docs/version-v9.0.x/02-apps/01-transfer/03-state-transitions.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/state-transitions",permalink:"/ibc-go/apps/transfer/state-transitions",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:3,frontMatter:{title:"State Transitions",sidebar_label:"State Transitions",sidebar_position:3,slug:"/apps/transfer/state-transitions"},sidebar:"defaultSidebar",previous:{title:"State",permalink:"/ibc-go/apps/transfer/state"},next:{title:"Messages",permalink:"/ibc-go/apps/transfer/messages"}},l={},c=[{value:"Send fungible tokens",id:"send-fungible-tokens",level:2},{value:"Receive fungible tokens",id:"receive-fungible-tokens",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"state-transitions"},"State transitions"),(0,i.yg)("h2",{id:"send-fungible-tokens"},"Send fungible tokens"),(0,i.yg)("p",null,"A successful fungible token send has two state transitions depending if the transfer is a movement forward or backwards in the token's timeline:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Sender chain is the source chain, ",(0,i.yg)("em",{parentName:"p"},"i.e")," a transfer to any chain other than the one it was previously received from is a movement forwards in the token's timeline. This results in the following state transitions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The coins are transferred to an escrow address (i.e locked) on the sender chain."),(0,i.yg)("li",{parentName:"ul"},"The coins are transferred to the receiving chain through IBC TAO logic."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Sender chain is the sink chain, ",(0,i.yg)("em",{parentName:"p"},"i.e")," the token is sent back to the chain it previously received from. This is a backwards movement in the token's timeline. This results in the following state transitions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The coins (vouchers) are burned on the sender chain."),(0,i.yg)("li",{parentName:"ul"},"The coins are transferred to the receiving chain through IBC TAO logic.")))),(0,i.yg)("h2",{id:"receive-fungible-tokens"},"Receive fungible tokens"),(0,i.yg)("p",null,"A successful fungible token receive has two state transitions depending if the transfer is a movement forward or backwards in the token's timeline:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Receiver chain is the source chain. This is a backwards movement in the token's timeline. This results in the following state transitions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The leftmost port and channel identifier pair is removed from the token denomination prefix."),(0,i.yg)("li",{parentName:"ul"},"The tokens are unescrowed and sent to the receiving address."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Receiver chain is the sink chain. This is a movement forwards in the token's timeline. This results in the following state transitions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Token vouchers are minted by prefixing the destination port and channel identifiers to the trace information."),(0,i.yg)("li",{parentName:"ul"},"The receiving chain stores the new trace information in the store (if not set already)."),(0,i.yg)("li",{parentName:"ul"},"The vouchers are sent to the receiving address.")))))}f.isMDXComponent=!0}}]);