"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[35191],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const i={},o="ADR Creation Process",l={unversionedId:"build/architecture/PROCESS",id:"version-0.52/build/architecture/PROCESS",title:"ADR Creation Process",description:"1. Copy the adr-template.md file. Use the following filename pattern: adr-next_number-title.md",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/PROCESS.md",sourceDirName:"build/architecture",slug:"/build/architecture/PROCESS",permalink:"/cosmos-sdk/build/architecture/PROCESS",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Architecture Decision Records (ADR)",permalink:"/cosmos-sdk/build/architecture/"},next:{title:"ADR 002: SDK Documentation Structure",permalink:"/cosmos-sdk/build/architecture/adr-002-docs-structure"}},s={},c=[{value:"What is an ADR?",id:"what-is-an-adr",level:2},{value:"ADR life cycle",id:"adr-life-cycle",level:2},{value:"ADR status",id:"adr-status",level:3},{value:"Consensus Status",id:"consensus-status",level:4},{value:"Language used in ADR",id:"language-used-in-adr",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-creation-process"},"ADR Creation Process"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Copy the ",(0,r.yg)("inlineCode",{parentName:"li"},"adr-template.md")," file. Use the following filename pattern: ",(0,r.yg)("inlineCode",{parentName:"li"},"adr-next_number-title.md")),(0,r.yg)("li",{parentName:"ol"},"Create a draft Pull Request if you want to get early feedback."),(0,r.yg)("li",{parentName:"ol"},"Make sure the context and solution are clear and well documented."),(0,r.yg)("li",{parentName:"ol"},"Add an entry to a list in the ",(0,r.yg)("a",{parentName:"li",href:"/cosmos-sdk/build/architecture/"},"README")," file."),(0,r.yg)("li",{parentName:"ol"},"Create a Pull Request to propose a new ADR.")),(0,r.yg)("h2",{id:"what-is-an-adr"},"What is an ADR?"),(0,r.yg)("p",null,"An ADR is a document to document an implementation and design that may or may not have been discussed in an RFC. While an RFC is meant to replace synchronous communication in a distributed environment, an ADR is meant to document an already made decision. An ADR won't come with much of a communication overhead because the discussion was recorded in an RFC or a synchronous discussion. If the consensus came from a synchronous discussion then a short excerpt should be added to the ADR to explain the goals. "),(0,r.yg)("h2",{id:"adr-life-cycle"},"ADR life cycle"),(0,r.yg)("p",null,"ADR creation is an ",(0,r.yg)("strong",{parentName:"p"},"iterative")," process. Instead of having a high amount of communication overhead, an ADR is used when there is already a decision made and implementation details need to be added. The ADR should document what the collective consensus for the specific issue is and how to solve it. "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Every ADR should start with either an RFC or a discussion where consensus has been met. ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once consensus is met, a GitHub Pull Request (PR) is created with a new document based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"adr-template.md"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If a ",(0,r.yg)("em",{parentName:"p"},"proposed")," ADR is merged, then it should clearly document outstanding issues either in ADR document notes or in a GitHub Issue.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The PR SHOULD always be merged. In the case of a faulty ADR, we still prefer to  merge it with a ",(0,r.yg)("em",{parentName:"p"},"rejected")," status. The only time the ADR SHOULD NOT be merged is if the author abandons it.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Merged ADRs SHOULD NOT be pruned."))),(0,r.yg)("h3",{id:"adr-status"},"ADR status"),(0,r.yg)("p",null,"Status has two components:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"{CONSENSUS STATUS} {IMPLEMENTATION STATUS}\n")),(0,r.yg)("p",null,"IMPLEMENTATION STATUS is either ",(0,r.yg)("inlineCode",{parentName:"p"},"Implemented")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Not Implemented"),"."),(0,r.yg)("h4",{id:"consensus-status"},"Consensus Status"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"DRAFT -> PROPOSED -> LAST CALL yyyy-mm-dd -> ACCEPTED | REJECTED -> SUPERSEDED by ADR-xxx\n                  \\        |\n                   \\       |\n                    v      v\n                     ABANDONED\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DRAFT"),": ","[optional]"," an ADR which is a work in progress, not being ready for a general review. This is to present an early work and get early feedback in a Draft Pull Request form."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PROPOSED"),": an ADR covering a full solution architecture and still in the review - project stakeholders haven't reached an agreement yet."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LAST CALL <date for the last call>"),": ","[optional]"," Notify that we are close to accepting updates. Changing a status to ",(0,r.yg)("inlineCode",{parentName:"li"},"LAST CALL")," means that social consensus (of Cosmos SDK maintainers) has been reached and we still want to give it a time to let the community react or analyze."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ACCEPTED"),": ADR which will represent a currently implemented or to be implemented architecture design."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"REJECTED"),": ADR can go from PROPOSED or ACCEPTED to rejected if the consensus among project stakeholders will decide so."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SUPERSEDED by ADR-xxx"),": ADR which has been superseded by a new ADR."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ABANDONED"),": the ADR is no longer pursued by the original authors.")),(0,r.yg)("h2",{id:"language-used-in-adr"},"Language used in ADR"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The context/background should be written in the present tense."),(0,r.yg)("li",{parentName:"ul"},"Avoid using a first, personal form.")))}p.isMDXComponent=!0}}]);