"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[28782],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={title:"Events",sidebar_label:"Events",sidebar_position:6,slug:"/ibc/light-clients/wasm/events"},i="Events",o={unversionedId:"light-clients/wasm/events",id:"version-v7.8.x/light-clients/wasm/events",title:"Events",description:"The 08-wasm module emits the following events:",source:"@site/ibc-go_versioned_docs/version-v7.8.x/03-light-clients/04-wasm/06-events.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/events",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/events",draft:!1,tags:[],version:"v7.8.x",sidebarPosition:6,frontMatter:{title:"Events",sidebar_label:"Events",sidebar_position:6,slug:"/ibc/light-clients/wasm/events"},sidebar:"defaultSidebar",previous:{title:"Governance",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/governance"},next:{title:"Contracts",permalink:"/ibc-go/v7.8.x/ibc/light-clients/wasm/contracts"}},c={},s=[{value:"<code>MsgStoreCode</code>",id:"msgstorecode",level:2},{value:"<code>MsgMigrateContract</code>",id:"msgmigratecontract",level:2}],g={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"events"},"Events"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"08-wasm")," module emits the following events:"),(0,a.yg)("h2",{id:"msgstorecode"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgStoreCode")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,a.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"store_wasm_code"),(0,a.yg)("td",{parentName:"tr",align:null},"wasm_checksum"),(0,a.yg)("td",{parentName:"tr",align:null},"{","hex.Encode(checksum)","}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"message"),(0,a.yg)("td",{parentName:"tr",align:null},"module"),(0,a.yg)("td",{parentName:"tr",align:null},"08-wasm")))),(0,a.yg)("h2",{id:"msgmigratecontract"},(0,a.yg)("inlineCode",{parentName:"h2"},"MsgMigrateContract")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Attribute Key"),(0,a.yg)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"migrate_contract"),(0,a.yg)("td",{parentName:"tr",align:null},"client_id"),(0,a.yg)("td",{parentName:"tr",align:null},"{","clientId","}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"migrate_contract"),(0,a.yg)("td",{parentName:"tr",align:null},"wasm_checksum"),(0,a.yg)("td",{parentName:"tr",align:null},"{","hex.Encode(checksum)","}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"migrate_contract"),(0,a.yg)("td",{parentName:"tr",align:null},"new_checksum"),(0,a.yg)("td",{parentName:"tr",align:null},"{","hex.Encode(newChecksum)","}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"message"),(0,a.yg)("td",{parentName:"tr",align:null},"module"),(0,a.yg)("td",{parentName:"tr",align:null},"08-wasm")))))}p.isMDXComponent=!0}}]);