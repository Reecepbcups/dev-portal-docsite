"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[62761],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(t),u=i,g=h["".concat(a,".").concat(u)]||h[u]||d[u]||r;return t?o.createElement(g,c(c({ref:n},p),{},{components:t})):o.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=u;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[h]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<r;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(58168),i=(t(96540),t(15680));const r={title:"Connection",sidebar_label:"Connection",sidebar_position:4,slug:"/ibc/light-clients/localhost/connection"},c="Localhost connections",l={unversionedId:"light-clients/localhost/connection",id:"version-v8.5.x/light-clients/localhost/connection",title:"Connection",description:"The 09-localhost light client module integrates with core IBC through a single sentinel localhost connection.",source:"@site/ibc-go_versioned_docs/version-v8.5.x/03-light-clients/02-localhost/04-connection.md",sourceDirName:"03-light-clients/02-localhost",slug:"/ibc/light-clients/localhost/connection",permalink:"/ibc-go/v8.5.x/ibc/light-clients/localhost/connection",draft:!1,tags:[],version:"v8.5.x",sidebarPosition:4,frontMatter:{title:"Connection",sidebar_label:"Connection",sidebar_position:4,slug:"/ibc/light-clients/localhost/connection"},sidebar:"defaultSidebar",previous:{title:"ClientState",permalink:"/ibc-go/v8.5.x/ibc/light-clients/localhost/client-state"},next:{title:"State Verification",permalink:"/ibc-go/v8.5.x/ibc/light-clients/localhost/state-verification"}},a={},s=[],p={toc:s},h="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(h,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"localhost-connections"},"Localhost connections"),(0,i.yg)("p",null,"The 09-localhost light client module integrates with core IBC through a single sentinel localhost connection.\nThe sentinel ",(0,i.yg)("inlineCode",{parentName:"p"},"ConnectionEnd")," is stored by default in the core IBC store."),(0,i.yg)("p",null,"This enables channel handshakes to be initiated out of the box by supplying the localhost connection identifier (",(0,i.yg)("inlineCode",{parentName:"p"},"connection-localhost"),") in the ",(0,i.yg)("inlineCode",{parentName:"p"},"connectionHops")," parameter of ",(0,i.yg)("inlineCode",{parentName:"p"},"MsgChannelOpenInit"),"."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ConnectionEnd")," is created and set in store via the ",(0,i.yg)("inlineCode",{parentName:"p"},"InitGenesis")," handler of the 03-connection submodule in core IBC.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"ConnectionEnd")," and its ",(0,i.yg)("inlineCode",{parentName:"p"},"Counterparty")," both reference the ",(0,i.yg)("inlineCode",{parentName:"p"},"09-localhost")," client identifier, and share the localhost connection identifier ",(0,i.yg)("inlineCode",{parentName:"p"},"connection-localhost"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// CreateSentinelLocalhostConnection creates and sets the sentinel localhost connection end in the IBC store.\nfunc (k Keeper) CreateSentinelLocalhostConnection(ctx sdk.Context) {\n  counterparty := types.NewCounterparty(exported.LocalhostClientID, exported.LocalhostConnectionID, commitmenttypes.NewMerklePrefix(k.GetCommitmentPrefix().Bytes()))\n  connectionEnd := types.NewConnectionEnd(types.OPEN, exported.LocalhostClientID, counterparty, types.GetCompatibleVersions(), 0)\n\n  k.SetConnection(ctx, exported.LocalhostConnectionID, connectionEnd)\n}\n")),(0,i.yg)("p",null,"Note that connection handshakes are disallowed when using the ",(0,i.yg)("inlineCode",{parentName:"p"},"09-localhost")," client type."))}d.isMDXComponent=!0}}]);