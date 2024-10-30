"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[45049],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const o={title:"Handling Proposals",sidebar_label:"Handling Proposals",sidebar_position:7,slug:"/ibc/light-clients/proposals"},a="Handling proposals",l={unversionedId:"light-clients/developer-guide/proposals",id:"version-v7.8.x/light-clients/developer-guide/proposals",title:"Handling Proposals",description:"It is possible to update the client with the state of the substitute client through a governance proposal. This type of governance proposal is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. CheckSubstituteAndUpdateState should be implemented to handle the proposal.",source:"@site/ibc-go_versioned_docs/version-v7.8.x/03-light-clients/01-developer-guide/07-proposals.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/proposals",permalink:"/ibc-go/v7.8.x/ibc/light-clients/proposals",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:7,frontMatter:{title:"Handling Proposals",sidebar_label:"Handling Proposals",sidebar_position:7,slug:"/ibc/light-clients/proposals"},sidebar:"defaultSidebar",previous:{title:"Existence/Non-Existence Proofs",permalink:"/ibc-go/v7.8.x/ibc/light-clients/proofs"},next:{title:"Handling Genesis",permalink:"/ibc-go/v7.8.x/ibc/light-clients/genesis"}},s={},c=[{value:"Implementing <code>CheckSubstituteAndUpdateState</code>",id:"implementing-checksubstituteandupdatestate",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"handling-proposals"},"Handling proposals"),(0,i.yg)("p",null,"It is possible to update the client with the state of the substitute client through a governance proposal. ",(0,i.yg)("a",{parentName:"p",href:"/ibc-go/v7.8.x/ibc/proposals"},"This type of governance proposal")," is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. ",(0,i.yg)("inlineCode",{parentName:"p"},"CheckSubstituteAndUpdateState")," should be implemented to handle the proposal."),(0,i.yg)("h2",{id:"implementing-checksubstituteandupdatestate"},"Implementing ",(0,i.yg)("inlineCode",{parentName:"h2"},"CheckSubstituteAndUpdateState")),(0,i.yg)("p",null,"In the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/e650be91614ced7be687c30eb42714787a3bbc59/modules/core/exported/client.go"},(0,i.yg)("inlineCode",{parentName:"a"},"ClientState"),"interface"),", we find:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// CheckSubstituteAndUpdateState must verify that the provided substitute may be used to update the subject client.\n// The light client must set the updated client and consensus states within the clientStore for the subject client.\nCheckSubstituteAndUpdateState(\n  ctx sdk.Context, \n  cdc codec.BinaryCodec, \n  subjectClientStore, \n  substituteClientStore sdk.KVStore, \n  substituteClient ClientState) \n  error\n")),(0,i.yg)("p",null,"Prior to updating, this function must verify that:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the substitute client is the same type as the subject client. For a reference implementation, please see the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/light-clients/07-tendermint/proposal_handle.go#L32"},"Tendermint light client"),"."),(0,i.yg)("li",{parentName:"ul"},"the provided substitute may be used to update the subject client. This may mean that certain parameters must remain unaltered. For example, a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/light-clients/07-tendermint/proposal_handle.go#L84"},"valid substitute Tendermint light client")," must NOT change the chain ID, trust level, max clock drift, unbonding period, proof specs or upgrade path. Please note that ",(0,i.yg)("inlineCode",{parentName:"li"},"AllowUpdateAfterMisbehaviour")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"AllowUpdateAfterExpiry")," have been deprecated (see ADR 026 for more information).")),(0,i.yg)("p",null,"After these checks are performed, the function must ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/light-clients/07-tendermint/proposal_handle.go#L77"},"set the updated client and consensus states")," within the client store for the subject client."),(0,i.yg)("p",null,"Please refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/light-clients/07-tendermint/proposal_handle.go#L27"},"Tendermint light client implementation")," for reference."))}d.isMDXComponent=!0}}]);