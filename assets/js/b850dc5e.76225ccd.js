"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[59359],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),f=i,m=h["".concat(c,".").concat(f)]||h[f]||d[f]||r;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(58168),i=(n(96540),n(15680));const r={title:"Existence/Non-Existence Proofs",sidebar_label:"Existence/Non-Existence Proofs",sidebar_position:7,slug:"/ibc/light-clients/proofs"},a="Existence and non-existence proofs",s={unversionedId:"docs/light-clients/developer-guide/proofs",id:"docs/light-clients/developer-guide/proofs",title:"Existence/Non-Existence Proofs",description:"IBC uses merkle proofs in order to verify the state of a remote counterparty state machine given a trusted root, and ICS-23 is a general approach for verifying merkle trees which is used in ibc-go.",source:"@site/ibc-go/docs/03-light-clients/01-developer-guide/07-proofs.md",sourceDirName:"docs/03-light-clients/01-developer-guide",slug:"/ibc/light-clients/proofs",permalink:"/ibc-go/next/ibc/light-clients/proofs",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Existence/Non-Existence Proofs",sidebar_label:"Existence/Non-Existence Proofs",sidebar_position:7,slug:"/ibc/light-clients/proofs"},sidebar:"defaultSidebar",previous:{title:"Handling Upgrades",permalink:"/ibc-go/next/ibc/light-clients/upgrades"},next:{title:"Handling Proposals",permalink:"/ibc-go/next/ibc/light-clients/proposals"}},c={},p=[{value:"Existence proofs",id:"existence-proofs",level:2},{value:"Non-existence proofs",id:"non-existence-proofs",level:2},{value:"State verification methods: <code>VerifyMembership</code> and <code>VerifyNonMembership</code>",id:"state-verification-methods-verifymembership-and-verifynonmembership",level:2}],l={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(h,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"existence-and-non-existence-proofs"},"Existence and non-existence proofs"),(0,i.yg)("p",null,"IBC uses merkle proofs in order to verify the state of a remote counterparty state machine given a trusted root, and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ics23/tree/master/go"},"ICS-23")," is a general approach for verifying merkle trees which is used in ibc-go."),(0,i.yg)("p",null,"Currently, all Cosmos SDK modules contain their own stores, which maintain the state of the application module in an IAVL (immutable AVL) binary merkle tree format. Specifically with regard to IBC, core IBC maintains its own IAVL store, and IBC apps (e.g. transfer) maintain their own dedicated stores. The Cosmos SDK multistore therefore creates a simple merkle tree of all of these IAVL trees, and from each of these individual IAVL tree root hashes it derives a root hash for the application state tree as a whole (the ",(0,i.yg)("inlineCode",{parentName:"p"},"AppHash"),")."),(0,i.yg)("p",null,'For the purposes of ibc-go, there are two types of proofs which are important: existence and non-existence proofs, terms which have been used interchangeably with membership and non-membership proofs. For the purposes of this guide, we will stick with "existence" and "non-existence".'),(0,i.yg)("h2",{id:"existence-proofs"},"Existence proofs"),(0,i.yg)("p",null,"Existence proofs are used in IBC transactions which involve verification of counterparty state for transactions which will result in the writing of provable state. For example, this includes verification of IBC store state for handshakes and packets."),(0,i.yg)("p",null,"Put simply, existence proofs prove that a particular key and value exists in the tree. Under the hood, an IBC existence proof is comprised of two proofs: an IAVL proof that the key exists in IBC store/IBC root hash, and a proof that the IBC root hash exists in the multistore root hash."),(0,i.yg)("h2",{id:"non-existence-proofs"},"Non-existence proofs"),(0,i.yg)("p",null,"Non-existence proofs verify the absence of data stored within counterparty state and are used to prove that a key does NOT exist in state. As stated above, these types of proofs can be used to timeout packets by proving that the counterparty has not written a packet receipt into the store, meaning that a token transfer has NOT successfully occurred."),(0,i.yg)("p",null,"Some trees (e.g. SMT) may have a sentinel empty child for non-existent keys. In this case, the ICS-23 proof spec should include this ",(0,i.yg)("inlineCode",{parentName:"p"},"EmptyChild")," so that ICS-23 handles the non-existence proof correctly."),(0,i.yg)("p",null,'In some cases, there is a necessity to "mock" non-existence proofs if the counterparty does not have ability to prove absence. Since the verification method is designed to give complete control to client implementations, clients can support chains that do not provide absence proofs by verifying the existence of a non-empty sentinel ',(0,i.yg)("inlineCode",{parentName:"p"},"ABSENCE")," value. In these special cases, the proof provided will be an ICS-23 ",(0,i.yg)("inlineCode",{parentName:"p"},"Existence")," proof, and the client will verify that the ",(0,i.yg)("inlineCode",{parentName:"p"},"ABSENCE")," value is stored under the given path for the given height."),(0,i.yg)("h2",{id:"state-verification-methods-verifymembership-and-verifynonmembership"},"State verification methods: ",(0,i.yg)("inlineCode",{parentName:"h2"},"VerifyMembership")," and ",(0,i.yg)("inlineCode",{parentName:"h2"},"VerifyNonMembership")),(0,i.yg)("p",null,"The state verification functions for all IBC data types have been consolidated into two generic methods, ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),"."),(0,i.yg)("p",null,"From the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/exported/client.go#L56"},(0,i.yg)("inlineCode",{parentName:"a"},"LightClientModule")," interface definition"),", we find:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// VerifyMembership is a generic proof verification method which verifies \n// a proof of the existence of a value at a given CommitmentPath at the \n// specified height. The caller is expected to construct the full CommitmentPath\n// from a CommitmentPrefix and a standardized path (as defined in ICS 24).\nVerifyMembership(\n  ctx sdk.Context,\n  clientID string,\n  height Height,\n  delayTimePeriod uint64,\n  delayBlockPeriod uint64,\n  proof []byte,\n  path Path,\n  value []byte,\n) error\n\n// VerifyNonMembership is a generic proof verification method which verifies\n// the absence of a given CommitmentPath at a specified height. The caller is\n// expected to construct the full CommitmentPath from a CommitmentPrefix and \n// a standardized path (as defined in ICS 24).\nVerifyNonMembership(\n  ctx sdk.Context,\n  clientStore sdk.KVStore,\n  cdc codec.BinaryCodec,\n  height Height,\n  delayTimePeriod uint64,\n  delayBlockPeriod uint64,\n  proof []byte,\n  path Path,\n) error\n")),(0,i.yg)("p",null,"Both are expected to be provided with a standardised key path, ",(0,i.yg)("inlineCode",{parentName:"p"},"exported.Path"),", as defined in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS-24 host requirements"),". Membership verification requires callers to provide the value marshalled as ",(0,i.yg)("inlineCode",{parentName:"p"},"[]byte"),". Delay period values should be zero for non-packet processing verification. A zero proof height is now allowed by core IBC and may be passed into ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"VerifyNonMembership"),". Light clients are responsible for returning an error if a zero proof height is invalid behaviour."),(0,i.yg)("p",null,"Please refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/23-commitment/types/merkle.go#L131-L205"},"ICS-23 implementation")," for a concrete example."))}d.isMDXComponent=!0}}]);