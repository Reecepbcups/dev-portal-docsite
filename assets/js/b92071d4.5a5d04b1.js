"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[85346],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={title:"Hermes Packet Filtering by Fee",sidebar_label:"Hermes Packet Filtering by Fee (Optional)",sidebar_position:8,slug:"/fee/packet-filter"},l="Hermes Packet Filtering by Fee",o={unversionedId:"tutorials/fee/packet-filter",id:"tutorials/fee/packet-filter",title:"Hermes Packet Filtering by Fee",description:"Hermes provides a way for relayers to only relay packets that have a fee greater than a certain amount.",source:"@site/ibc-go/tutorials/01-fee/08-packet-filter.md",sourceDirName:"tutorials/01-fee",slug:"/fee/packet-filter",permalink:"/ibc-go/next/fee/packet-filter",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Hermes Packet Filtering by Fee",sidebar_label:"Hermes Packet Filtering by Fee (Optional)",sidebar_position:8,slug:"/fee/packet-filter"},sidebar:"defaultSidebar",previous:{title:"Testing the React App",permalink:"/ibc-go/next/fee/test-react"},next:{title:"Introduction",permalink:"/ibc-go/next/channel-upgrades/intro"}},c={},s=[{value:"Configure Hermes",id:"configure-hermes",level:2},{value:"Test the Application",id:"test-the-application",level:2}],p={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hermes-packet-filtering-by-fee"},"Hermes Packet Filtering by Fee"),(0,a.yg)("p",null,"Hermes provides a way for relayers to only relay packets that have a fee greater than a certain amount.\nIn this section, we will configure this option to only relay packets that have a fee greater than 30 ",(0,a.yg)("inlineCode",{parentName:"p"},"token"),".\nCurrently, Hermes only supports filtering by the receive packet fee.\nFiltering by acknowledgement packet fee or timeout packet fee is not supported."),(0,a.yg)("h2",{id:"configure-hermes"},"Configure Hermes"),(0,a.yg)("p",null,"To configure Hermes to filter packets by fee, we need to add the following to the ",(0,a.yg)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml"},"[chains.packet_filter]\npolicy = 'allow'\nlist = [\n  ['ica*', '*'],\n  ['transfer', '*'],\n]\n\n[chains.packet_filter.min_fees.'*']\nrecv = [ { amount = 30, denom = 'token' } ]\n")),(0,a.yg)("p",null,"Here is a full example of the ",(0,a.yg)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml",metastring:'reference title="hermes/filtered_config.toml"',reference:!0,title:'"hermes/filtered_config.toml"'},"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/1ddac03efdf6d403126c3f5ad067fd708e2e410a/hermes/filtered_config.toml\n")),(0,a.yg)("p",null,"You can copy this using the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cp hermes/filtered_config.toml ~/.hermes/config.toml\n")),(0,a.yg)("h2",{id:"test-the-application"},"Test the Application"),(0,a.yg)("p",null,"To test the application, we launch the chains and the relayer as we did in the previous sections.\nThis requires four terminals, run the following commands in each of the first three:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 1"',title:'"Terminal','1"':!0},"ignite chain serve -c earth.yml --reset-once\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 2"',title:'"Terminal','2"':!0},"ignite chain serve -c mars.yml --reset-once\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 3"',title:'"Terminal','3"':!0},"cd react\nnpm run dev\n")),(0,a.yg)("p",null,"The last terminal will be used to run the relayer. First, we will create the client, connection, and channel between the two chains by running:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 4"',title:'"Terminal','4"':!0},'hermes create channel --channel-version \'{"fee_version":"ics29-1","app_version":"ics20-1"}\' \\\n--a-chain earth --b-chain mars \\\n--a-port transfer --b-port transfer \\\n--new-client-connection --yes\n')),(0,a.yg)("p",null,"Once the operation above is completed, we can run the relayer with the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 4"',title:'"Terminal','4"':!0},"hermes start\n")),(0,a.yg)("p",null,"To test the application, you can now send packets from the Earth chain to the Mars chain.\nIf the fee is less than 30 ",(0,a.yg)("inlineCode",{parentName:"p"},"token"),", the relayer will not relay the packet, and it will eventually timeout.\nNote that due to our frontend implementation, the amount of fee that needs to be entered to the frontend is at least 60 ",(0,a.yg)("inlineCode",{parentName:"p"},"token"),".\nDon't forget to quit all the processes after the test is done."))}f.isMDXComponent=!0}}]);