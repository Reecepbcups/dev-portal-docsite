"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[27263],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),g=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=g(r),s=a,m=p["".concat(o,".").concat(s)]||p[s]||u[s]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var g=2;g<l;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=r(58168),a=(r(96540),r(15680));const l={sidebar_position:1},i="Architecture Decision Records (ADR)",c={unversionedId:"architecture/README",id:"architecture/README",title:"Architecture Decision Records (ADR)",description:"This is a location to record all high-level architecture decisions in the ibc-go project.",source:"@site/ibc-go/architecture/README.md",sourceDirName:"architecture",slug:"/architecture/",permalink:"/ibc-go/next/architecture/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"ADR 001: Coin Source Tracing",permalink:"/ibc-go/next/architecture/adr-001-coin-source-tracing"}},o={},g=[{value:"Table of Contents",id:"table-of-contents",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"architecture-decision-records-adr"},"Architecture Decision Records (ADR)"),(0,a.yg)("p",null,"This is a location to record all high-level architecture decisions in the ibc-go project."),(0,a.yg)("p",null,"You can read more about the ADR concept in this ",(0,a.yg)("a",{parentName:"p",href:"https://product.reverb.com/documenting-architecture-decisions-the-reverb-way-a3563bb24bd0#.78xhdix6t"},"blog post"),"."),(0,a.yg)("p",null,"An ADR should provide:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Context on the relevant goals and the current state"),(0,a.yg)("li",{parentName:"ul"},"Proposed changes to achieve the goals"),(0,a.yg)("li",{parentName:"ul"},"Summary of pros and cons"),(0,a.yg)("li",{parentName:"ul"},"References"),(0,a.yg)("li",{parentName:"ul"},"Changelog")),(0,a.yg)("p",null,"Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit is or should be."),(0,a.yg)("p",null,"If recorded decisions turned out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match."),(0,a.yg)("p",null,"Note the context/background should be written in the present tense."),(0,a.yg)("p",null,"To suggest an ADR, please make use of the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/docs/architecture/adr.template.md"},"ADR template")," provided."),(0,a.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"ADR ","#"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Status"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-001-coin-source-tracing"},"001")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS-20 coin denomination format"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted, Implemented")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-002-go-module-versioning"},"002")),(0,a.yg)("td",{parentName:"tr",align:null},"Go module versioning"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-003-ics27-acknowledgement"},"003")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS27 acknowledgement format"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-004-ics29-lock-fee-module"},"004")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS29 module locking upon escrow out of balance"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-005-consensus-height-events"},"005")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"UpdateClient")," events - ",(0,a.yg)("inlineCode",{parentName:"td"},"ClientState")," consensus heights"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-006-02-client-refactor"},"006")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS02 client refactor"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-007-solomachine-signbytes"},"007")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS06 Solo machine sign bytes"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-008-app-caller-cbs"},"008")),(0,a.yg)("td",{parentName:"tr",align:null},"Callback to IBC Actors"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-009-v6-ics27-msgserver"},"009")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS27 message server addition"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-010-light-clients-as-sdk-modules"},"010")),(0,a.yg)("td",{parentName:"tr",align:null},"IBC light clients as SDK modules"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-011-transfer-total-escrow-state-entry"},"011")),(0,a.yg)("td",{parentName:"tr",align:null},"ICS20 state entry for total amount of tokens in escrow"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-015-ibc-packet-receiver"},"015")),(0,a.yg)("td",{parentName:"tr",align:null},"IBC Packet Routing"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-025-ibc-passive-channels"},"025")),(0,a.yg)("td",{parentName:"tr",align:null},"IBC passive channels"),(0,a.yg)("td",{parentName:"tr",align:null},"Deprecated")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-026-ibc-client-recovery-mechanisms"},"026")),(0,a.yg)("td",{parentName:"tr",align:null},"IBC client recovery mechanisms"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/ibc-go/next/architecture/adr-027-ibc-wasm"},"027")),(0,a.yg)("td",{parentName:"tr",align:null},"Wasm based light clients"),(0,a.yg)("td",{parentName:"tr",align:null},"Accepted")))))}u.isMDXComponent=!0}}]);