"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[63943],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),g=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=g(r),s=n,m=p["".concat(o,".").concat(s)]||p[s]||u[s]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var g=2;g<i;g++)l[g]=r[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=r(58168),n=(r(96540),r(15680));const i={sidebar_position:1},l="Architecture Decision Records (ADR)",c={unversionedId:"architecture/README",id:"version-v5.4.x/architecture/README",title:"Architecture Decision Records (ADR)",description:"This is a location to record all high-level architecture decisions in the ibc-go project.",source:"@site/ibc-go_versioned_docs/version-v5.4.x/architecture/README.md",sourceDirName:"architecture",slug:"/architecture/",permalink:"/ibc-go/v5.4.x/architecture/",draft:!1,tags:[],version:"v5.4.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Roadmap",permalink:"/ibc-go/v5.4.x/roadmap/roadmap"},next:{title:"ADR 001: Coin Source Tracing",permalink:"/ibc-go/v5.4.x/architecture/adr-001-coin-source-tracing"}},o={},g=[{value:"Table of Contents",id:"table-of-contents",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"architecture-decision-records-adr"},"Architecture Decision Records (ADR)"),(0,n.yg)("p",null,"This is a location to record all high-level architecture decisions in the ibc-go project."),(0,n.yg)("p",null,"You can read more about the ADR concept in this ",(0,n.yg)("a",{parentName:"p",href:"https://product.reverb.com/documenting-architecture-decisions-the-reverb-way-a3563bb24bd0#.78xhdix6t"},"blog post"),"."),(0,n.yg)("p",null,"An ADR should provide:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Context on the relevant goals and the current state"),(0,n.yg)("li",{parentName:"ul"},"Proposed changes to achieve the goals"),(0,n.yg)("li",{parentName:"ul"},"Summary of pros and cons"),(0,n.yg)("li",{parentName:"ul"},"References"),(0,n.yg)("li",{parentName:"ul"},"Changelog")),(0,n.yg)("p",null,"Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit is or should be."),(0,n.yg)("p",null,"If recorded decisions turned out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match."),(0,n.yg)("p",null,"Note the context/background should be written in the present tense."),(0,n.yg)("p",null,"To suggest an ADR, please make use of the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/docs/architecture/adr.template.md"},"ADR template")," provided."),(0,n.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"ADR ","#"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-001-coin-source-tracing"},"001")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS-20 coin denomination format"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted, Implemented")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-002-go-module-versioning"},"002")),(0,n.yg)("td",{parentName:"tr",align:null},"Go module versioning"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-003-ics27-acknowledgement"},"003")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS27 acknowledgement format"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-004-ics29-lock-fee-module"},"004")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS29 module locking upon escrow out of balance"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-005-consensus-height-events"},"005")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"UpdateClient")," events - ",(0,n.yg)("inlineCode",{parentName:"td"},"ClientState")," consensus heights"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-006-02-client-refactor"},"006")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS02 client refactor"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-007-solomachine-signbytes"},"007")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS06 Solo machine sign bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-008-app-caller-cbs"},"008")),(0,n.yg)("td",{parentName:"tr",align:null},"Callback to IBC Actors"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-009-v6-ics27-msgserver"},"009")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS27 message server addition"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-010-light-clients-as-sdk-modules"},"010")),(0,n.yg)("td",{parentName:"tr",align:null},"IBC light clients as SDK modules"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-011-transfer-total-escrow-state-entry"},"011")),(0,n.yg)("td",{parentName:"tr",align:null},"ICS20 state entry for total amount of tokens in escrow"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-015-ibc-packet-receiver"},"015")),(0,n.yg)("td",{parentName:"tr",align:null},"IBC Packet Routing"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-025-ibc-passive-channels"},"025")),(0,n.yg)("td",{parentName:"tr",align:null},"IBC passive channels"),(0,n.yg)("td",{parentName:"tr",align:null},"Deprecated")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-026-ibc-client-recovery-mechanisms"},"026")),(0,n.yg)("td",{parentName:"tr",align:null},"IBC client recovery mechanisms"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/ibc-go/v5.4.x/architecture/adr-027-ibc-wasm"},"027")),(0,n.yg)("td",{parentName:"tr",align:null},"Wasm based light clients"),(0,n.yg)("td",{parentName:"tr",align:null},"Accepted")))))}u.isMDXComponent=!0}}]);