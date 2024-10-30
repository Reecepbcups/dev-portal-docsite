"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[48828],{15680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=n(58168),a=(n(96540),n(15680)),l=n(35719);const i={title:"Testing the React App",sidebar_label:"Testing the React App",sidebar_position:7,slug:"/fee/test-react"},c="Testing the React app",o={unversionedId:"tutorials/fee/test-app",id:"tutorials/fee/test-app",title:"Testing the React App",description:"In this section, you will:",source:"@site/ibc-go/tutorials/01-fee/07-test-app.md",sourceDirName:"tutorials/01-fee",slug:"/fee/test-react",permalink:"/ibc-go/next/fee/test-react",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Testing the React App",sidebar_label:"Testing the React App",sidebar_position:7,slug:"/fee/test-react"},sidebar:"defaultSidebar",previous:{title:"Wire up ICS-29 Fees to the React App",permalink:"/ibc-go/next/fee/fee-react"},next:{title:"Hermes Packet Filtering by Fee (Optional)",permalink:"/ibc-go/next/fee/packet-filter"}},s={},h=[{value:"Run two chains locally",id:"run-two-chains-locally",level:2},{value:"Configure Hermes",id:"configure-hermes",level:2},{value:"Test the app",id:"test-the-app",level:2}],m={toc:h},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,r.A)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"testing-the-react-app"},"Testing the React app"),(0,a.yg)(l.A,{type:"learning",title:"Learning Goals",mdxType:"HighlightBox"},(0,a.yg)("p",null,"In this section, you will:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Run two chains locally."),(0,a.yg)("li",{parentName:"ul"},"Configure and run a relayer."),(0,a.yg)("li",{parentName:"ul"},"Make an incentivized IBC transfer between the two chains."))),(0,a.yg)("p",null,"In this section, we will test the React app we created in the previous section. We will run two chains locally, configure and run a relayer, and make an incentivized IBC transfer between the two chains.\nYou can find the React app we created in the previous section ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo"},"here")),(0,a.yg)("h2",{id:"run-two-chains-locally"},"Run two chains locally"),(0,a.yg)("p",null,"Ignite supports running multiple chains locally with different configs. The source chain will be called earth and the destination chain will be called mars.\nAdd the following config files to the root of the project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'reference title="earth.yml"',reference:!0,title:'"earth.yml"'},"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/96cb63bf2e60b4613a89841416066551dd666c0d/earth.yml\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'reference title="mars.yml"',reference:!0,title:'"mars.yml"'},"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/96cb63bf2e60b4613a89841416066551dd666c0d/mars.yml\n")),(0,a.yg)("p",null,"To run the chains, use the following commands and quit with ",(0,a.yg)("inlineCode",{parentName:"p"},"q"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ignite chain serve -c earth.yml --reset-once\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ignite chain serve -c mars.yml --reset-once\n")),(0,a.yg)("h2",{id:"configure-hermes"},"Configure Hermes"),(0,a.yg)("p",null,"We first need to create a relayer configuration file. Add the following file to the root of the project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-toml",metastring:'reference title="hermes/config.toml"',reference:!0,title:'"hermes/config.toml"'},"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/0186b9ee979c288efbe3fe5fd071169d9dbcf91e/hermes/config.toml\n")),(0,a.yg)("p",null,"We can move this file to the ",(0,a.yg)("inlineCode",{parentName:"p"},"~/.hermes")," directory to avoid having to specify the path to the config file every time we run the relayer:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.hermes\ncp hermes/config.toml ~/.hermes/config.toml\n")),(0,a.yg)("p",null,"Otherwise, we can specify the path to the config file with the ",(0,a.yg)("inlineCode",{parentName:"p"},"--config")," flag in each command. Next, we need to add keys to hermes.\nWe will add ",(0,a.yg)("inlineCode",{parentName:"p"},"charlie")," key to the ",(0,a.yg)("inlineCode",{parentName:"p"},"earth")," chain and ",(0,a.yg)("inlineCode",{parentName:"p"},"damian")," key to the ",(0,a.yg)("inlineCode",{parentName:"p"},"mars")," chain. Add the following files to the project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text",metastring:'reference title="hermes/charlie.mnemonic"',reference:!0,title:'"hermes/charlie.mnemonic"'},"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/960d8b7e148cbe2207c3a743bac7c0985a5b653a/hermes/charlie.mnemonic\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text",metastring:'reference title="hermes/damian.mnemonic"',reference:!0,title:'"hermes/damian.mnemonic"'},"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/960d8b7e148cbe2207c3a743bac7c0985a5b653a/hermes/damian.mnemonic\n")),(0,a.yg)("p",null,"We can add these keys to the chains with the following commands:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"hermes keys add --key-name charlie --chain earth --mnemonic-file hermes/charlie.mnemonic\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"hermes keys add --key-name damian --chain mars --mnemonic-file hermes/damian.mnemonic\n")),(0,a.yg)("h2",{id:"test-the-app"},"Test the app"),(0,a.yg)("p",null,"Prepare 4 terminal windows and run the following commands in each of the first three:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 1"',title:'"Terminal','1"':!0},"ignite chain serve -c earth.yml --reset-once\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 2"',title:'"Terminal','2"':!0},"ignite chain serve -c mars.yml --reset-once\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 3"',title:'"Terminal','3"':!0},"cd react\nnpm run dev\n")),(0,a.yg)("p",null,"The last terminal will be used to run the relayer. First, we will create the client, connection, and channel between the two chains by running:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 4"',title:'"Terminal','4"':!0},'hermes create channel --channel-version \'{"fee_version":"ics29-1","app_version":"ics20-1"}\' --a-chain earth --b-chain mars --a-port transfer --b-port transfer --new-client-connection --yes\n')),(0,a.yg)("p",null,"This will create an incentivized IBC transfer channel between the two chains with the channel id ",(0,a.yg)("inlineCode",{parentName:"p"},"channel-0"),", and channel version ",(0,a.yg)("inlineCode",{parentName:"p"},'{"fee_version":"ics29-1","app_version":"ics20-1"}'),"."),(0,a.yg)("p",null,"Next recall that the Fee Middleware only pays fees on the source chain. That's why we should register ",(0,a.yg)("inlineCode",{parentName:"p"},"damian")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"charlie")," as each other's counterparty on both chains.\nLuckily, the relayer does this for us under the hood because we've enabled the ",(0,a.yg)("inlineCode",{parentName:"p"},"auto_register_counterparty_payee")," option in the config file."),(0,a.yg)("p",null,"Now we can run the relayer with the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal 4"',title:'"Terminal','4"':!0},"hermes start\n")),(0,a.yg)("p",null,"We can now use the react app to make an incentivized IBC transfer from ",(0,a.yg)("inlineCode",{parentName:"p"},"anna")," on the ",(0,a.yg)("inlineCode",{parentName:"p"},"earth")," chain to ",(0,a.yg)("inlineCode",{parentName:"p"},"bo")," on the ",(0,a.yg)("inlineCode",{parentName:"p"},"mars")," chain. After which, we can use the frontend to view the balance of ",(0,a.yg)("inlineCode",{parentName:"p"},"charlie")," to see if they've received the fee.\nDon't forget to quit all the processes after the test is done."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"React Demo",src:n(21692).A,width:"3840",height:"1950"})))}d.isMDXComponent=!0},35719:(e,t,n)=>{n.d(t,{A:()=>F});var r,a=n(96540);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return a.createElement("svg",l({width:21,height:23,viewBox:"0 0 21 23",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M9.302 22.2c-.1 0-.3 0-.4-.1-.4-.2-.6-.6-.6-1l.9-6.9h-7.9c-.4 0-.7-.2-.9-.6-.2-.4-.1-.8.1-1.1l10-12c.3-.3.8-.5 1.2-.3.4.2.6.6.6 1l-.9 6.9h7.9c.4 0 .7.2.9.6.2.4.1.8-.1 1.1l-10 12c-.2.3-.5.4-.8.4Zm-5.9-10h6.9c.3 0 .6.1.7.3.2.2.3.5.2.8l-.6 4.6 6.4-7.7h-6.9c-.3 0-.6-.1-.7-.3-.2-.2-.3-.5-.2-.8l.6-4.6-6.4 7.7Z",fill:"#fff"})))};var c;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(null,arguments)}const s=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",o({width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,c||(c=a.createElement("path",{d:"M8.3 9.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1Zm-6-2h5v-5h-5v5ZM19.3 9.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1Zm-6-2h5v-5h-5v5ZM19.3 20.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1Zm-6-2h5v-5h-5v5ZM8.3 20.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1Zm-6-2h5v-5h-5v5Z",fill:"#200F31"})))};var h;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}const p=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",m({width:23,height:23,viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,h||(h=a.createElement("path",{d:"M11.3.2C5.2.2.3 5.1.3 11.2s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11Zm1 19.9v-2.9c0-.6-.4-1-1-1s-1 .4-1 1v2.9c-4.2-.5-7.5-3.8-7.9-7.9h2.9c.6 0 1-.4 1-1s-.4-1-1-1H2.4c.5-4.2 3.8-7.5 7.9-7.9v2.9c0 .6.4 1 1 1s1-.4 1-1V2.3c4.2.5 7.5 3.8 7.9 7.9h-2.9c-.6 0-1 .4-1 1s.4 1 1 1h2.9c-.4 4.2-3.7 7.5-7.9 7.9Z",fill:"#fff"})))};var d;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(null,arguments)}const u=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",g({width:23,height:22,viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,d||(d=a.createElement("path",{d:"M17.503 21.2c-.2 0-.3 0-.5-.1l-5.7-3-5.7 3c-.3.2-.7.1-1.1-.1-.3-.2-.5-.6-.4-1l1.1-6.4-4.6-4.5c-.3-.3-.4-.7-.3-1 .1-.4.4-.6.8-.7l6.4-.9 2.9-5.8c.3-.7 1.5-.7 1.8 0l2.9 5.8 6.4.9c.4.1.7.3.8.7.1.4 0 .8-.3 1l-4.6 4.5 1.1 6.4c.1.4-.1.8-.4 1-.2.1-.4.2-.6.2ZM3.403 9.1l3.5 3.5c.2.2.3.6.3.9l-.8 4.9 4.4-2.3c.3-.2.6-.2.9 0l4.4 2.3-.8-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5l-2.2-4.4-2.2 4.4c-.1.3-.4.5-.8.5l-4.8.7Z",fill:"#fff"})))};var f;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}const v=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,f||(f=a.createElement("path",{d:"M14.5 21.2H11m7.7-12.5a6 6 0 0 0-12 0c0 2.3 2.4 4.4 3 5.8 1 1.8 1 3.2 1 3.2h4s0-1.4 1-3.2c.7-1.4 3-3.2 3-5.8Z",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))};var b;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(null,arguments)}const k=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",w({width:17,height:21,viewBox:"0 0 17 21",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,b||(b=a.createElement("path",{d:"M5.3 14.5h6c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1Zm0-4h6c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1Zm5-10h-8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12l-6-6Zm4 18h-12v-16h7v3c0 1.1.9 2 2 2h3v11Z",fill:"#1A1A1A"})))};var N;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(null,arguments)}const O=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",E({width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,N||(N=a.createElement("path",{d:"M18.203 7.2h-17c-.6 0-1 .4-1 1v9c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5 2.8 0 5-2.2 5-5s-2.3-5-5-5Zm-2 10c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8h14v8Zm2-2v-6c1.7 0 3 1.3 3 3 0 1.6-1.4 3-3 3ZM5.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1ZM9.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1ZM13.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1Z",fill:"#fff"})))};var x;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(null,arguments)}const j=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",M({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,x||(x=a.createElement("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 16v-4M12 8h.01",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))};var C;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(null,arguments)}const Z=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,C||(C=a.createElement("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0v0ZM12 9v4M12 17h.01",stroke:"#000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},P={tip:{color1:"#336667",color2:"#00B067",icon:a.createElement(v,null),darkMode:!0},reading:{color1:"#F46800",color2:"#F24CF4",icon:a.createElement(i,null),darkMode:!1},info:{color1:"#336667",color2:"#00B067",icon:a.createElement(j,null),darkMode:!0},warn:{color1:"#00B067",color2:"#FFD303",icon:a.createElement(Z,null),darkMode:!1},warning:{color1:"#00B067",color2:"#FFD303",icon:a.createElement(Z,null),darkMode:!1},synopsis:{color1:"#1c1c1c",color2:"#1c1c1c",icon:null,darkMode:!0},prerequisite:{color1:"lightgray",color2:"lightgray",icon:a.createElement(s,null),darkMode:!1},learning:{color1:"#6836D0",color2:"#05BDFC",icon:a.createElement(p,null),darkMode:!0},"best-practice":{color1:"#6836D0",color2:"#6836D0",icon:a.createElement(u,null),darkMode:!0},remember:{color1:"#6D0000",color2:"#F66800",icon:a.createElement(v,null),darkMode:!0},note:{color1:"#F69900",color2:"#FFCE15",icon:a.createElement(k,null),darkMode:!1},docs:{color1:"#6836D0",color2:"#F44CF6",icon:a.createElement(O,null),darkMode:!0}},B=e=>{let{color1:t,color2:n}=e;return{background:`linear-gradient(78.06deg, ${t} 1.14%, ${n} 98.88%)`,border:0,borderRadius:16,padding:"0 30px",display:"flex",width:"100%",justifyContent:"start",marginBottom:20,fontSize:21,flexWrap:"wrap",flexDirection:"column"}};const F=function(e){let{type:t,title:n,children:r}=e;const l=P[t]||P.info,i={backgroundColor:"var(--docusaurus-highlighted-code-line-bg)"},c={alignSelf:"center",marginTop:"10px",filter:l.darkMode?"brightness(0) invert(1)":"brightness(0)"},o={marginTop:"10px",marginLeft:"10px",color:l.darkMode?"#e6e6e6":"black"},s={color:l.darkMode?"#e6e6e6":"black",marginBottom:"10px"},h=a.Children.map(r,(e=>"a"===e.type?a.cloneElement(e,{style:anchorStyle}):"code"===e.type?a.cloneElement(e,{style:i}):e));return a.createElement("div",{style:B(l),className:"highlightBox"},a.createElement("style",null,`\n          .highlightBox a {\n            color: ${l.darkMode?"blue":"#85c1e9"} !important;\n          }\n        `),a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"}},a.createElement("div",{style:c},l.icon),a.createElement("h3",{style:o},n)),a.createElement("div",{style:s},h))}},21692:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/react-fee-demo-e39b5090f18144c6d835524486c1324a.png"}}]);