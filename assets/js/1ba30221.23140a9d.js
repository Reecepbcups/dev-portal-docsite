"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[98703],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(58168),i=(n(96540),n(15680));const r={},o="ADR 008: Decentralized Computer Emergency Response Team (dCERT) Group",s={unversionedId:"build/architecture/adr-008-dCERT-group",id:"version-0.52/build/architecture/adr-008-dCERT-group",title:"ADR 008: Decentralized Computer Emergency Response Team (dCERT) Group",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-008-dCERT-group.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-008-dCERT-group",permalink:"/cosmos-sdk/build/architecture/adr-008-dCERT-group",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 007: Specialization Groups",permalink:"/cosmos-sdk/build/architecture/adr-007-specialization-groups"},next:{title:"ADR 009: Evidence Module",permalink:"/cosmos-sdk/build/architecture/adr-009-evidence-module"}},l={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Continuous Voting Electionator",id:"continuous-voting-electionator",level:3},{value:"Staking/Slashing",id:"stakingslashing",level:3},{value:"dCERT membership transactions",id:"dcert-membership-transactions",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"adr-008-decentralized-computer-emergency-response-team-dcert-group"},"ADR 008: Decentralized Computer Emergency Response Team (dCERT) Group"),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2019 Jul 31: Initial Draft")),(0,i.yg)("h2",{id:"context"},"Context"),(0,i.yg)("p",null,"In order to reduce the number of parties involved with handling sensitive\ninformation in an emergency scenario, we propose the creation of a\nspecialization group named The Decentralized Computer Emergency Response Team\n(dCERT).  Initially this group's role is intended to serve as coordinators\nbetween various actors within a blockchain community such as validators,\nbug-hunters, and developers.  During a time of crisis, the dCERT group would\naggregate and relay input from a variety of stakeholders to the developers who\nare actively devising a patch to the software, this way sensitive information\ndoes not need to be publicly disclosed while some input from the community can\nstill be gained."),(0,i.yg)("p",null,'Additionally, a special privilege is proposed for the dCERT group: the capacity\nto "circuit-break" (aka. temporarily disable)  a particular message path. Note\nthat this privilege should be enabled/disabled globally with a governance\nparameter such that this privilege could start disabled and later be enabled\nthrough a parameter change proposal, once a dCERT group has been established.'),(0,i.yg)("p",null,'In the future it is foreseeable that the community may wish to expand the roles\nof dCERT with further responsibilities such as the capacity to "pre-approve" a\nsecurity update on behalf of the community prior to a full community\nwide vote whereby the sensitive information would be revealed prior to a\nvulnerability being patched on the live network.  '),(0,i.yg)("h2",{id:"decision"},"Decision"),(0,i.yg)("p",null,"The dCERT group is proposed to include an implementation of a ",(0,i.yg)("inlineCode",{parentName:"p"},"SpecializationGroup"),"\nas defined in ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-007-specialization-groups"},"ADR 007"),". This will include the\nimplementation of:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"continuous voting"),(0,i.yg)("li",{parentName:"ul"},"slashing due to breach of soft contract"),(0,i.yg)("li",{parentName:"ul"},"revoking a member due to breach of soft contract"),(0,i.yg)("li",{parentName:"ul"},"emergency disband of the entire dCERT group (ex. for colluding maliciously)"),(0,i.yg)("li",{parentName:"ul"},"compensation stipend from the community pool or other means decided by\ngovernance")),(0,i.yg)("p",null,"This system necessitates the following new parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"blockly stipend allowance per dCERT member"),(0,i.yg)("li",{parentName:"ul"},"maximum number of dCERT members"),(0,i.yg)("li",{parentName:"ul"},"required staked slashable tokens for each dCERT member"),(0,i.yg)("li",{parentName:"ul"},"quorum for suspending a particular member"),(0,i.yg)("li",{parentName:"ul"},"proposal wager for disbanding the dCERT group"),(0,i.yg)("li",{parentName:"ul"},"stabilization period for dCERT member transition"),(0,i.yg)("li",{parentName:"ul"},"circuit break dCERT privileges enabled")),(0,i.yg)("p",null,"These parameters are expected to be implemented through the param keeper such\nthat governance may change them at any given point."),(0,i.yg)("h3",{id:"continuous-voting-electionator"},"Continuous Voting Electionator"),(0,i.yg)("p",null,"An ",(0,i.yg)("inlineCode",{parentName:"p"},"Electionator")," object is to be implemented as continuous voting and with the\nfollowing specifications:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"All delegation addresses may submit votes at any point which updates their\npreferred representation on the dCERT group."),(0,i.yg)("li",{parentName:"ul"},"Preferred representation may be arbitrarily split between addresses (ex. 50%\nto John, 25% to Sally, 25% to Carol)"),(0,i.yg)("li",{parentName:"ul"},"In order for a new member to be added to the dCERT group they must\nsend a transaction accepting their admission at which point the validity of\ntheir admission is to be confirmed.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"A sequence number is assigned when a member is added to dCERT group.\nIf a member leaves the dCERT group and then enters back, a new sequence number\nis assigned.  "))),(0,i.yg)("li",{parentName:"ul"},"Addresses which control the greatest amount of preferred-representation are\neligible to join the dCERT group (up the ",(0,i.yg)("em",{parentName:"li"},"maximum number of dCERT members"),").\nIf the dCERT group is already full and new member is admitted, the existing\ndCERT member with the lowest amount of votes is kicked from the dCERT group.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"In the split situation where the dCERT group is full but a vying candidate\nhas the same amount of vote as an existing dCERT member, the existing\nmember should maintain its position."),(0,i.yg)("li",{parentName:"ul"},"In the split situation where somebody must be kicked out but the two\naddresses with the smallest number of votes have the same number of votes,\nthe address with the smallest sequence number maintains its position.  "))),(0,i.yg)("li",{parentName:"ul"},'A stabilization period can be optionally included to reduce the\n"flip-flopping" of the dCERT membership tail members. If a stabilization\nperiod is provided which is greater than 0, when members are kicked due to\ninsufficient support, a queue entry is created which documents which member is\nto replace which other member. While this entry is in the queue, no new entries\nto kick that same dCERT member can be made. When the entry matures at the\nduration of the  stabilization period, the new member is instantiated, and old\nmember kicked.')),(0,i.yg)("h3",{id:"stakingslashing"},"Staking/Slashing"),(0,i.yg)("p",null,"All members of the dCERT group must stake tokens ",(0,i.yg)("em",{parentName:"p"},"specifically")," to maintain\neligibility as a dCERT member. These tokens can be staked directly by the vying\ndCERT member or out of the good will of a 3rd party (who shall gain no on-chain\nbenefits for doing so). This staking mechanism should use the existing global\nunbonding time of tokens staked for network validator security. A dCERT member\ncan ",(0,i.yg)("em",{parentName:"p"},"only be")," a member if it has the required tokens staked under this\nmechanism. If those tokens are unbonded then the dCERT member must be\nautomatically kicked from the group.  "),(0,i.yg)("p",null,"Slashing of a particular dCERT member due to soft-contract breach should be\nperformed by governance on a per member basis based on the magnitude of the\nbreach.  The process flow is anticipated to be that a dCERT member is suspended\nby the dCERT group prior to being slashed by governance.  "),(0,i.yg)("p",null,"Membership suspension by the dCERT group takes place through a voting procedure\nby the dCERT group members. After this suspension has taken place, a governance\nproposal to slash the dCERT member must be submitted, if the proposal is not\napproved by the time the rescinding member has completed unbonding their\ntokens, then the tokens are no longer staked and unable to be slashed."),(0,i.yg)("p",null,"Additionally in the case of an emergency situation of a colluding and malicious\ndCERT group, the community needs the capability to disband the entire dCERT\ngroup and likely fully slash them. This could be achieved through a special new\nproposal type (implemented as a general governance proposal) which would halt\nthe functionality of the dCERT group until the proposal was concluded. This\nspecial proposal type would likely need to also have a fairly large wager which\ncould be slashed if the proposal creator was malicious. The reason a large\nwager should be required is because as soon as the proposal is made, the\ncapability of the dCERT group to halt message routes is put on temporarily\nsuspended, meaning that a malicious actor who created such a proposal could\nthen potentially exploit a bug during this period of time, with no dCERT group\ncapable of shutting down the exploitable message routes."),(0,i.yg)("h3",{id:"dcert-membership-transactions"},"dCERT membership transactions"),(0,i.yg)("p",null,"Active dCERT members"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"change of the description of the dCERT group"),(0,i.yg)("li",{parentName:"ul"},"circuit break a message route"),(0,i.yg)("li",{parentName:"ul"},"vote to suspend a dCERT member.")),(0,i.yg)("p",null,'Here circuit-breaking refers to the capability to disable a groups of messages,\nThis could for instance mean: "disable all staking-delegation messages", or\n"disable all distribution messages". This could be accomplished by verifying\nthat the message route has not been "circuit-broken" at CheckTx time (in\n',(0,i.yg)("inlineCode",{parentName:"p"},"baseapp/baseapp.go"),")."),(0,i.yg)("p",null,'"unbreaking" a circuit is anticipated only to occur during a hard fork upgrade\nmeaning that no capability to unbreak a message route on a live chain is\nrequired.'),(0,i.yg)("p",null,"Note also, that if there was a problem with governance voting (for instance a\ncapability to vote many times) then governance would be broken and should be\nhalted with this mechanism, it would be then up to the validator set to\ncoordinate and hard-fork upgrade to a patched version of the software where\ngovernance is re-enabled (and fixed). If the dCERT group abuses this privilege\nthey should all be severely slashed."),(0,i.yg)("h2",{id:"status"},"Status"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Proposed")),(0,i.yg)("h2",{id:"consequences"},"Consequences"),(0,i.yg)("h3",{id:"positive"},"Positive"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Potential to reduces the number of parties to coordinate with during an emergency"),(0,i.yg)("li",{parentName:"ul"},"Reduction in possibility of disclosing sensitive information to malicious parties")),(0,i.yg)("h3",{id:"negative"},"Negative"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Centralization risks")),(0,i.yg)("h3",{id:"neutral"},"Neutral"),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("p",null,"  ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/build/architecture/adr-007-specialization-groups"},"Specialization Groups ADR")))}c.isMDXComponent=!0}}]);