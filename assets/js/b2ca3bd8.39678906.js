"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[96248],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),p=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),g=t,u=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return a?r.createElement(u,l(l({ref:n},d),{},{components:a})):r.createElement(u,l({ref:n},d))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85061:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(58168),t=(a(96540),a(15680));const o={title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},l="Parameters",i={unversionedId:"apps/transfer/params",id:"version-v7.8.x/apps/transfer/params",title:"Params",description:"The IBC transfer application module contains the following parameters:",source:"@site/ibc-go_versioned_docs/version-v7.8.x/02-apps/01-transfer/07-params.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/params",permalink:"/ibc-go/v7.8.x/apps/transfer/params",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:7,frontMatter:{title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},sidebar:"defaultSidebar",previous:{title:"Metrics",permalink:"/ibc-go/v7.8.x/apps/transfer/metrics"},next:{title:"Authorizations",permalink:"/ibc-go/v7.8.x/apps/transfer/authorizations"}},s={},p=[{value:"<code>SendEnabled</code>",id:"sendenabled",level:2},{value:"<code>ReceiveEnabled</code>",id:"receiveenabled",level:2}],d={toc:p},m="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"parameters"},"Parameters"),(0,t.yg)("p",null,"The IBC transfer application module contains the following parameters:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Key"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"),(0,t.yg)("th",{parentName:"tr",align:null},"Default Value"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"SendEnabled")),(0,t.yg)("td",{parentName:"tr",align:null},"bool"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"true"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"ReceiveEnabled")),(0,t.yg)("td",{parentName:"tr",align:null},"bool"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"true"))))),(0,t.yg)("h2",{id:"sendenabled"},(0,t.yg)("inlineCode",{parentName:"h2"},"SendEnabled")),(0,t.yg)("p",null,"The transfers enabled parameter controls send cross-chain transfer capabilities for all fungible tokens."),(0,t.yg)("p",null,"To prevent a single token from being transferred from the chain, set the ",(0,t.yg)("inlineCode",{parentName:"p"},"SendEnabled")," parameter to ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," and then, depending on the Cosmos SDK version, do one of the following:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled"},(0,t.yg)("inlineCode",{parentName:"a"},"SendEnabled")," parameter")," for the denomination to ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),"."),(0,t.yg)("li",{parentName:"ul"},"For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,t.yg)("inlineCode",{parentName:"li"},"SendEnabled")," entry for the denomination to ",(0,t.yg)("inlineCode",{parentName:"li"},"false")," using ",(0,t.yg)("inlineCode",{parentName:"li"},"MsgSetSendEnabled")," as a governance proposal.")),(0,t.yg)("h2",{id:"receiveenabled"},(0,t.yg)("inlineCode",{parentName:"h2"},"ReceiveEnabled")),(0,t.yg)("p",null,"The transfers enabled parameter controls receive cross-chain transfer capabilities for all fungible tokens."),(0,t.yg)("p",null,"To prevent a single token from being transferred to the chain, set the ",(0,t.yg)("inlineCode",{parentName:"p"},"ReceiveEnabled")," parameter to ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," and then, depending on the Cosmos SDK version, do one of the following:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled"},(0,t.yg)("inlineCode",{parentName:"a"},"SendEnabled")," parameter")," for the denomination to ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),"."),(0,t.yg)("li",{parentName:"ul"},"For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,t.yg)("inlineCode",{parentName:"li"},"SendEnabled")," entry for the denomination to ",(0,t.yg)("inlineCode",{parentName:"li"},"false")," using ",(0,t.yg)("inlineCode",{parentName:"li"},"MsgSetSendEnabled")," as a governance proposal.")))}c.isMDXComponent=!0}}]);