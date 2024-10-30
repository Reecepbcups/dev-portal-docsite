"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[84362],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));const r={sidebar_position:1},o="Running a Testnet",s={unversionedId:"validate/run-testnet",id:"version-0.47/validate/run-testnet",title:"Running a Testnet",description:"The simd testnet subcommand makes it easy to initialize and start a simulated test network for testing purposes.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/validate/05-run-testnet.md",sourceDirName:"validate",slug:"/validate/run-testnet",permalink:"/cosmos-sdk/0.47/validate/run-testnet",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1}},l={},d=[{value:"Initialize Files",id:"initialize-files",level:2},{value:"gentxs",id:"gentxs",level:3},{value:"nodes",id:"nodes",level:3},{value:"Start Testnet",id:"start-testnet",level:2},{value:"Testnet Options",id:"testnet-options",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"running-a-testnet"},"Running a Testnet"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"simd testnet")," subcommand makes it easy to initialize and start a simulated test network for testing purposes.")),(0,i.yg)("p",null,"In addition to the commands for ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/user/run-node/run-node"},"running a node"),", the ",(0,i.yg)("inlineCode",{parentName:"p"},"simd")," binary also includes a ",(0,i.yg)("inlineCode",{parentName:"p"},"testnet")," command that allows you to start a simulated test network in-process or to initialize files for a simulated test network that runs in a separate process."),(0,i.yg)("h2",{id:"initialize-files"},"Initialize Files"),(0,i.yg)("p",null,"First, let's take a look at the ",(0,i.yg)("inlineCode",{parentName:"p"},"init-files")," subcommand."),(0,i.yg)("p",null,"This is similar to the ",(0,i.yg)("inlineCode",{parentName:"p"},"init")," command when initializing a single node, but in this case we are initializing multiple nodes, generating the genesis transactions for each node, and then collecting those transactions."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"init-files")," subcommand initializes the necessary files to run a test network in a separate process (i.e. using a Docker container). Running this command is not a prerequisite for the ",(0,i.yg)("inlineCode",{parentName:"p"},"start")," subcommand (",(0,i.yg)("a",{parentName:"p",href:"#start-testnet"},"see below"),")."),(0,i.yg)("p",null,"In order to initialize the files for a test network, run the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"simd testnet init-files\n")),(0,i.yg)("p",null,"You should see the following output in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"Successfully initialized 4 node directories\n")),(0,i.yg)("p",null,"The default output directory is a relative ",(0,i.yg)("inlineCode",{parentName:"p"},".testnets")," directory. Let's take a look at the files created within the ",(0,i.yg)("inlineCode",{parentName:"p"},".testnets")," directory."),(0,i.yg)("h3",{id:"gentxs"},"gentxs"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"gentxs")," directory includes a genesis transaction for each validator node. Each file includes a JSON encoded genesis transaction used to register a validator node at the time of genesis. The genesis transactions are added to the ",(0,i.yg)("inlineCode",{parentName:"p"},"genesis.json")," file within each node directory during the initilization process."),(0,i.yg)("h3",{id:"nodes"},"nodes"),(0,i.yg)("p",null,"A node directory is created for each validator node. Within each node directory is a ",(0,i.yg)("inlineCode",{parentName:"p"},"simd")," directory. The ",(0,i.yg)("inlineCode",{parentName:"p"},"simd")," directory is the home directory for each node, which includes the configuration and data files for that node (i.e. the same files included in the default ",(0,i.yg)("inlineCode",{parentName:"p"},"~/.simapp")," directory when running a single node)."),(0,i.yg)("h2",{id:"start-testnet"},"Start Testnet"),(0,i.yg)("p",null,"Now, let's take a look at the ",(0,i.yg)("inlineCode",{parentName:"p"},"start")," subcommand."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"start")," subcommand both initializes and starts an in-process test network. This is the fastest way to spin up a local test network for testing purposes."),(0,i.yg)("p",null,"You can start the local test network by running the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"simd testnet start\n")),(0,i.yg)("p",null,"You should see something similar to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'acquiring test network lock\npreparing test network with chain-id "chain-mtoD9v"\n\n\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n++       THIS MNEMONIC IS FOR TESTING PURPOSES ONLY        ++\n++                DO NOT USE IN PRODUCTION                 ++\n++                                                         ++\n++  sustain know debris minute gate hybrid stereo custom   ++\n++  divorce cross spoon machine latin vibrant term oblige  ++\n++   moment beauty laundry repeat grab game bronze truly   ++\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n\nstarting test network...\nstarted test network\npress the Enter Key to terminate\n')),(0,i.yg)("p",null,"The first validator node is now running in-process, which means the test network will terminate once you either close the terminal window or you press the Enter key. In the output, the mnemonic phrase for the first validator node is provided for testing purposes. The validator node is using the same default addresses being used when initializing and starting a single node (no need to provide a ",(0,i.yg)("inlineCode",{parentName:"p"},"--node")," flag)."),(0,i.yg)("p",null,"Check the status of the first validator node:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd status\n")),(0,i.yg)("p",null,"Import the key from the provided mnemonic:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd keys add test --recover --keyring-backend test\n")),(0,i.yg)("p",null,"Check the balance of the account address:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd q bank balances [address]\n")),(0,i.yg)("p",null,"Use this test account to manually test against the test network."),(0,i.yg)("h2",{id:"testnet-options"},"Testnet Options"),(0,i.yg)("p",null,"You can customize the configuration of the test network with flags. In order to see all flag options, append the ",(0,i.yg)("inlineCode",{parentName:"p"},"--help")," flag to each command."))}u.isMDXComponent=!0}}]);