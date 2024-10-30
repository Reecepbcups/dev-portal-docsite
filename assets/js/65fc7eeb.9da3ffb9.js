"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[15172],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,y=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(58168),r=(n(96540),n(15680));const a={title:"State Transitions",sidebar_label:"State Transitions",sidebar_position:4,slug:"/ibc/light-clients/solomachine/state_transitions"},o="State Transitions",s={unversionedId:"light-clients/solomachine/state_transitions",id:"version-v9.0.x/light-clients/solomachine/state_transitions",title:"State Transitions",description:"Client State Verification Functions",source:"@site/ibc-go_versioned_docs/version-v9.0.x/03-light-clients/03-solomachine/04-state_transitions.md",sourceDirName:"03-light-clients/03-solomachine",slug:"/ibc/light-clients/solomachine/state_transitions",permalink:"/ibc-go/ibc/light-clients/solomachine/state_transitions",draft:!1,tags:[],version:"v9.0.x",sidebarPosition:4,frontMatter:{title:"State Transitions",sidebar_label:"State Transitions",sidebar_position:4,slug:"/ibc/light-clients/solomachine/state_transitions"},sidebar:"defaultSidebar",previous:{title:"State",permalink:"/ibc-go/ibc/light-clients/solomachine/state"},next:{title:"Overview",permalink:"/ibc-go/ibc/light-clients/wasm/overview"}},l={},c=[{value:"Client State Verification Functions",id:"client-state-verification-functions",level:2},{value:"Update By Header",id:"update-by-header",level:2},{value:"Update By Governance Proposal",id:"update-by-governance-proposal",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Misbehaviour",id:"misbehaviour",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"state-transitions"},"State Transitions"),(0,r.yg)("h2",{id:"client-state-verification-functions"},"Client State Verification Functions"),(0,r.yg)("p",null,"Successful state verification by a solo machine light client will result in:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the sequence being incremented by 1.")),(0,r.yg)("h2",{id:"update-by-header"},"Update By Header"),(0,r.yg)("p",null,"A successful update of a solo machine light client by a header will result in:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the public key being updated to the new public key provided by the header."),(0,r.yg)("li",{parentName:"ul"},"the diversifier being updated to the new diviersifier provided by the header."),(0,r.yg)("li",{parentName:"ul"},"the timestamp being updated to the new timestamp provided by the header."),(0,r.yg)("li",{parentName:"ul"},"the sequence being incremented by 1"),(0,r.yg)("li",{parentName:"ul"},"the consensus state being updated (consensus state stores the public key, diversifier, and timestamp)")),(0,r.yg)("h2",{id:"update-by-governance-proposal"},"Update By Governance Proposal"),(0,r.yg)("p",null,"A successful update of a solo machine light client by a governance proposal will result in:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the client state being updated to the substitute client state"),(0,r.yg)("li",{parentName:"ul"},"the consensus state being updated to the substitute consensus state (consensus state stores the public key, diversifier, and timestamp)"),(0,r.yg)("li",{parentName:"ul"},"the frozen sequence being set to zero (client is unfrozen if it was previously frozen).")),(0,r.yg)("h2",{id:"upgrade"},"Upgrade"),(0,r.yg)("p",null,"Client udgrades are not supported for the solo machine light client. No state transition occurs."),(0,r.yg)("h2",{id:"misbehaviour"},"Misbehaviour"),(0,r.yg)("p",null,"Successful misbehaviour processing of a solo machine light client will result in:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the frozen sequence being set to the sequence the misbehaviour occurred at")))}d.isMDXComponent=!0}}]);