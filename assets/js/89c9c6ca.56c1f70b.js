"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[99601],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,y=f["".concat(s,".").concat(h)]||f[h]||d[h]||o;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(58168),r=(n(96540),n(15680));const o={title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},a="State verification",l={unversionedId:"light-clients/localhost/state-verification",id:"version-v9.0.x/light-clients/localhost/state-verification",title:"State Verification",description:"The localhost client handles state verification through the LightClientModule interface methods VerifyMembership and VerifyNonMembership by performing read-only operations directly on the core IBC store.",source:"@site/ibc-go_versioned_docs/version-v9.0.x/03-light-clients/02-localhost/05-state-verification.md",sourceDirName:"03-light-clients/02-localhost",slug:"/ibc/light-clients/localhost/state-verification",permalink:"/ibc-go/ibc/light-clients/localhost/state-verification",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:5,frontMatter:{title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},sidebar:"defaultSidebar",previous:{title:"Connection",permalink:"/ibc-go/ibc/light-clients/localhost/connection"},next:{title:"Solomachine",permalink:"/ibc-go/ibc/light-clients/solomachine/solomachine"}},s={},c=[],p={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(f,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"state-verification"},"State verification"),(0,r.yg)("p",null,"The localhost client handles state verification through the ",(0,r.yg)("inlineCode",{parentName:"p"},"LightClientModule")," interface methods ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership")," by performing read-only operations directly on the core IBC store."),(0,r.yg)("p",null,"When verifying channel state in handshakes or processing packets the ",(0,r.yg)("inlineCode",{parentName:"p"},"09-localhost")," client can simply compare bytes stored under the standardized key paths defined by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS-24"),"."),(0,r.yg)("p",null,"For existence proofs via ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," the 09-localhost client will retrieve the value stored under the provided key path and compare it against the value provided by the caller. In contrast, non-existence proofs via ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership")," assert the absence of a value at the provided key path."),(0,r.yg)("p",null,"Relayers are expected to provide a sentinel proof when sending IBC messages. Submission of nil or empty proofs is disallowed in core IBC messaging.\nThe 09-localhost light client module defines a ",(0,r.yg)("inlineCode",{parentName:"p"},"SentinelProof")," as a single byte. Localhost client state verification will fail if the sentinel proof value is not provided."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"var SentinelProof = []byte{0x01}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ClientState")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"09-localhost")," is stateless, so it is not directly provable with ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),"."))}d.isMDXComponent=!0}}]);