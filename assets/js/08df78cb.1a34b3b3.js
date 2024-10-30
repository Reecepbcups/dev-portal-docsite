"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[38051],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||r;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const r={title:"Run 2 Cosmos SDK Blockchains Locally",sidebar_label:"Run 2 Cosmos SDK Blockchains Locally",sidebar_position:3,slug:"/channel-upgrades/run-chains"},i="Run 2 Cosmos SDK blockchains locally",s={unversionedId:"tutorials/channel-upgrades/run-chains",id:"tutorials/channel-upgrades/run-chains",title:"Run 2 Cosmos SDK Blockchains Locally",description:"The gm tool uses a configuration file. This tutorial uses the following configuration file for gm:",source:"@site/ibc-go/tutorials/02-channel-upgrades/03-run-chains.md",sourceDirName:"tutorials/02-channel-upgrades",slug:"/channel-upgrades/run-chains",permalink:"/ibc-go/next/channel-upgrades/run-chains",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Run 2 Cosmos SDK Blockchains Locally",sidebar_label:"Run 2 Cosmos SDK Blockchains Locally",sidebar_position:3,slug:"/channel-upgrades/run-chains"},sidebar:"defaultSidebar",previous:{title:"Set Up Your Work Environment",permalink:"/ibc-go/next/channel-upgrades/setup-env"},next:{title:"Open transfer channel",permalink:"/ibc-go/next/channel-upgrades/open-channel"}},l={},c=[],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"run-2-cosmos-sdk-blockchains-locally"},"Run 2 Cosmos SDK blockchains locally"),(0,o.yg)("p",null,"The gm tool uses a ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/informalsystems/gm/blob/master/gm.toml"},"configuration file"),". This tutorial uses the following configuration file for gm:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gm.toml"',title:'"gm.toml"'},'[global]\nadd_to_hermes=true\nhome_dir="~/testing/gm"\n\n[global.hermes]\nbinary="~/testing/hermes/hermes"\nconfig="~/testing/hermes/config.toml"\n\n[chain1]\n  gaiad_binary="~/testing/bin/chain1/simd"  \n  ports_start_at=27000\n\n[chain2]\n  gaiad_binary="~/testing/bin/chain2/simd" \n  ports_start_at=27010\n')),(0,o.yg)("p",null,"The configuration file needs to be placed in ",(0,o.yg)("inlineCode",{parentName:"p"},"$HOME/.gm"),". This configuration file sets up 2 blockchains (",(0,o.yg)("inlineCode",{parentName:"p"},"chain1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"chain2"),"), each with 2 accounts (1 validator, 1 wallet). The ports where the CometBFT RPC interface for each chain is 27000 for ",(0,o.yg)("inlineCode",{parentName:"p"},"chain1")," and 27010 for ",(0,o.yg)("inlineCode",{parentName:"p"},"chain2"),"."),(0,o.yg)("p",null,"In order to shorten the voting period of governance proposal, we are going to change some of the ",(0,o.yg)("inlineCode",{parentName:"p"},"x/gov")," module parameters in the ",(0,o.yg)("inlineCode",{parentName:"p"},"genesis.json")," file, so that we can complete the upgrade faster. These are the changes needed in the ",(0,o.yg)("inlineCode",{parentName:"p"},"genesis.json")," of ",(0,o.yg)("inlineCode",{parentName:"p"},"chain1"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="genesis.json"',title:'"genesis.json"'},'"gov": {\n  "starting_proposal_id": "1",\n  "deposits": [],\n  "votes": [],\n  "proposals": [],\n  "deposit_params": null,\n  "voting_params": null,\n  "tally_params": null,\n  "params": {\n    "min_deposit": [\n      {\n        "denom": "stake",\n// minus-diff-line\n-       "amount": "10000000"\n// plus-diff-line\n+       "amount": "100"\n      }\n    ],\n    "max_deposit_period": "172800s",\n// minus-diff-line\n-   "voting_period": "172800s",\n// plus-diff-line\n+   "voting_period": "180s",\n    "quorum": "0.334000000000000000",\n// minus-diff-line\n-   "threshold": "0.500000000000000000",\n// plus-diff-line\n+   "threshold": "0.300000000000000000",\n    "veto_threshold": "0.334000000000000000",\n    "min_initial_deposit_ratio": "0.000000000000000000",\n    "proposal_cancel_ratio": "0.500000000000000000",\n    "proposal_cancel_dest": "",\n    "expedited_voting_period": "86400s",\n    "expedited_threshold": "0.667000000000000000",\n    "expedited_min_deposit": [\n      {\n        "denom": "stake",\n        "amount": "50000000"\n      }\n    ],\n    "burn_vote_quorum": false,\n    "burn_proposal_deposit_prevote": false,\n    "burn_vote_veto": true,\n    "min_deposit_ratio": "0.010000000000000000"\n  },\n  "constitution": ""\n}\n')),(0,o.yg)("p",null,"We start both blockchains by running the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"gm start\n")),(0,o.yg)("p",null,"For convenience, we are going to store a few account addresses as variables in the current shell environment. Execute the following commands to store the relayer addresses on chains ",(0,o.yg)("inlineCode",{parentName:"p"},"chain1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"chain2"),", respectively:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export RLY_CHAIN1=$(simd keys show wallet -a \\\n--keyring-backend test \\\n--home ../../gm/chain1) && echo $RLY_CHAIN1;\nexport RLY_CHAIN2=$(simd keys show wallet -a \\\n--keyring-backend test \\\n--home ../../gm/chain2) && echo $RLY_CHAIN2;\n")),(0,o.yg)("p",null,"And execute also the following commands to store the validator account addresses on chains ",(0,o.yg)("inlineCode",{parentName:"p"},"chain1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"chain2")," that we will use throughout this tutorial:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export VALIDATOR_CHAIN1=$(simd keys show validator -a \\\n--keyring-backend test \\\n--home ../../gm/chain1) && echo $VALIDATOR_CHAIN1;\nexport VALIDATOR_CHAIN2=$(simd keys show validator -a \\\n--keyring-backend test \\\n--home ../../gm/chain2) && echo $VALIDATOR_CHAIN2;\n")))}g.isMDXComponent=!0}}]);