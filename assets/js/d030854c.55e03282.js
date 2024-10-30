"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[53988],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>c});var r=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,l=function(e,n){if(null==e)return{};var a,r,l={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,l=e.mdxType,t=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(a),m=l,c=g["".concat(o,".").concat(m)]||g[m]||u[m]||t;return a?r.createElement(c,i(i({ref:n},d),{},{components:a})):r.createElement(c,i({ref:n},d))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=a.length,i=new Array(t);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[g]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<t;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85324:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var r=a(58168),l=(a(96540),a(15680));const t={sidebar_position:1},i="x/upgrade",s={unversionedId:"build/modules/upgrade/README",id:"version-0.50/build/modules/upgrade/README",title:"x/upgrade",description:"Abstract",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/modules/upgrade/README.md",sourceDirName:"build/modules/upgrade",slug:"/build/modules/upgrade/",permalink:"/cosmos-sdk/0.50/build/modules/upgrade/",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/staking",permalink:"/cosmos-sdk/0.50/build/modules/staking/"},next:{title:"x/circuit",permalink:"/cosmos-sdk/0.50/build/modules/circuit/"}},o={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Plan",id:"plan",level:3},{value:"Sidecar Process",id:"sidecar-process",level:4},{value:"Handler",id:"handler",level:3},{value:"StoreLoader",id:"storeloader",level:3},{value:"Proposal",id:"proposal",level:3},{value:"Cancelling Upgrade Proposals",id:"cancelling-upgrade-proposals",level:4},{value:"State",id:"state",level:2},{value:"Events",id:"events",level:2},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"applied",id:"applied",level:5},{value:"module versions",id:"module-versions",level:5},{value:"plan",id:"plan-1",level:5},{value:"Transactions",id:"transactions",level:4},{value:"REST",id:"rest",level:3},{value:"Applied Plan",id:"applied-plan",level:4},{value:"Current Plan",id:"current-plan",level:4},{value:"Module versions",id:"module-versions-1",level:4},{value:"gRPC",id:"grpc",level:3},{value:"Applied Plan",id:"applied-plan-1",level:4},{value:"Current Plan",id:"current-plan-1",level:4},{value:"Module versions",id:"module-versions-2",level:4},{value:"Resources",id:"resources",level:2}],d={toc:p},g="wrapper";function u(e){let{components:n,...a}=e;return(0,l.yg)(g,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"xupgrade"},(0,l.yg)("inlineCode",{parentName:"h1"},"x/upgrade")),(0,l.yg)("h2",{id:"abstract"},"Abstract"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," is an implementation of a Cosmos SDK module that facilitates smoothly\nupgrading a live Cosmos chain to a new (breaking) software version. It accomplishes this by\nproviding a ",(0,l.yg)("inlineCode",{parentName:"p"},"PreBlocker")," hook that prevents the blockchain state machine from\nproceeding once a pre-defined upgrade block height has been reached."),(0,l.yg)("p",null,"The module does not prescribe anything regarding how governance decides to do an\nupgrade, but just the mechanism for coordinating the upgrade safely. Without software\nsupport for upgrades, upgrading a live chain is risky because all of the validators\nneed to pause their state machines at exactly the same point in the process. If\nthis is not done correctly, there can be state inconsistencies which are hard to\nrecover from."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#concepts"},"Concepts")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#state"},"State")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#events"},"Events")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#client"},"Client"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#cli"},"CLI")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rest"},"REST")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#grpc"},"gRPC")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#resources"},"Resources"))),(0,l.yg)("h2",{id:"concepts"},"Concepts"),(0,l.yg)("h3",{id:"plan"},"Plan"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module defines a ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," type in which a live upgrade is scheduled\nto occur. A ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," can be scheduled at a specific block height.\nA ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," is created once a (frozen) release candidate along with an appropriate upgrade\n",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," (see below) is agreed upon, where the ",(0,l.yg)("inlineCode",{parentName:"p"},"Name")," of a ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," corresponds to a\nspecific ",(0,l.yg)("inlineCode",{parentName:"p"},"Handler"),". Typically, a ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," is created through a governance proposal\nprocess, where if voted upon and passed, will be scheduled. The ",(0,l.yg)("inlineCode",{parentName:"p"},"Info")," of a ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan"),"\nmay contain various metadata about the upgrade, typically application specific\nupgrade info to be included on-chain such as a git commit that validators could\nautomatically upgrade to."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"type Plan struct {\n  Name   string\n  Height int64\n  Info   string\n}\n")),(0,l.yg)("h4",{id:"sidecar-process"},"Sidecar Process"),(0,l.yg)("p",null,"If an operator running the application binary also runs a sidecar process to assist\nin the automatic download and upgrade of a binary, the ",(0,l.yg)("inlineCode",{parentName:"p"},"Info")," allows this process to\nbe seamless. This tool is ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/tools/cosmovisor#readme"},"Cosmovisor"),"."),(0,l.yg)("h3",{id:"handler"},"Handler"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module facilitates upgrading from major version X to major version Y. To\naccomplish this, node operators must first upgrade their current binary to a new\nbinary that has a corresponding ",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," for the new version Y. It is assumed that\nthis version has fully been tested and approved by the community at large. This\n",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," defines what state migrations need to occur before the new binary Y\ncan successfully run the chain. Naturally, this ",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," is application specific\nand not defined on a per-module basis. Registering a ",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," is done via\n",(0,l.yg)("inlineCode",{parentName:"p"},"Keeper#SetUpgradeHandler")," in the application."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"type UpgradeHandler func(Context, Plan, VersionMap) (VersionMap, error)\n")),(0,l.yg)("p",null,"During each ",(0,l.yg)("inlineCode",{parentName:"p"},"EndBlock")," execution, the ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module checks if there exists a\n",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," that should execute (is scheduled at that height). If so, the corresponding\n",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," is executed. If the ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," is expected to execute but no ",(0,l.yg)("inlineCode",{parentName:"p"},"Handler")," is registered\nor if the binary was upgraded too early, the node will gracefully panic and exit."),(0,l.yg)("h3",{id:"storeloader"},"StoreLoader"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module also facilitates store migrations as part of the upgrade. The\n",(0,l.yg)("inlineCode",{parentName:"p"},"StoreLoader")," sets the migrations that need to occur before the new binary can\nsuccessfully run the chain. This ",(0,l.yg)("inlineCode",{parentName:"p"},"StoreLoader")," is also application specific and\nnot defined on a per-module basis. Registering this ",(0,l.yg)("inlineCode",{parentName:"p"},"StoreLoader")," is done via\n",(0,l.yg)("inlineCode",{parentName:"p"},"app#SetStoreLoader")," in the application."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},"func UpgradeStoreLoader (upgradeHeight int64, storeUpgrades *store.StoreUpgrades) baseapp.StoreLoader\n")),(0,l.yg)("p",null,"If there's a planned upgrade and the upgrade height is reached, the old binary writes ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," to the disk before panicking."),(0,l.yg)("p",null,"This information is critical to ensure the ",(0,l.yg)("inlineCode",{parentName:"p"},"StoreUpgrades")," happens smoothly at correct height and\nexpected upgrade. It eliminiates the chances for the new binary to execute ",(0,l.yg)("inlineCode",{parentName:"p"},"StoreUpgrades")," multiple\ntimes everytime on restart. Also if there are multiple upgrades planned on same height, the ",(0,l.yg)("inlineCode",{parentName:"p"},"Name"),"\nwill ensure these ",(0,l.yg)("inlineCode",{parentName:"p"},"StoreUpgrades")," takes place only in planned upgrade handler."),(0,l.yg)("h3",{id:"proposal"},"Proposal"),(0,l.yg)("p",null,"Typically, a ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," is proposed and submitted through governance via a proposal\ncontaining a ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgSoftwareUpgrade")," message.\nThis proposal prescribes to the standard governance process. If the proposal passes,\nthe ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan"),", which targets a specific ",(0,l.yg)("inlineCode",{parentName:"p"},"Handler"),", is persisted and scheduled. The\nupgrade can be delayed or hastened by updating the ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan.Height")," in a new proposal."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/upgrade/v1beta1/tx.proto#L29-L41\n")),(0,l.yg)("h4",{id:"cancelling-upgrade-proposals"},"Cancelling Upgrade Proposals"),(0,l.yg)("p",null,"Upgrade proposals can be cancelled. There exists a gov-enabled ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgCancelUpgrade"),"\nmessage type, which can be embedded in a proposal, voted on and, if passed, will\nremove the scheduled upgrade ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan"),".\nOf course this requires that the upgrade was known to be a bad idea well before the\nupgrade itself, to allow time for a vote."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/upgrade/v1beta1/tx.proto#L48-L57\n")),(0,l.yg)("p",null,"If such a possibility is desired, the upgrade height is to be\n",(0,l.yg)("inlineCode",{parentName:"p"},"2 * (VotingPeriod + DepositPeriod) + (SafetyDelta)")," from the beginning of the\nupgrade proposal. The ",(0,l.yg)("inlineCode",{parentName:"p"},"SafetyDelta")," is the time available from the success of an\nupgrade proposal and the realization it was a bad idea (due to external social consensus)."),(0,l.yg)("p",null,"A ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgCancelUpgrade")," proposal can also be made while the original\n",(0,l.yg)("inlineCode",{parentName:"p"},"MsgSoftwareUpgrade")," proposal is still being voted upon, as long as the ",(0,l.yg)("inlineCode",{parentName:"p"},"VotingPeriod"),"\nends after the ",(0,l.yg)("inlineCode",{parentName:"p"},"MsgSoftwareUpgrade")," proposal."),(0,l.yg)("h2",{id:"state"},"State"),(0,l.yg)("p",null,"The internal state of the ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module is relatively minimal and simple. The\nstate contains the currently active upgrade ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan")," (if one exists) by key\n",(0,l.yg)("inlineCode",{parentName:"p"},"0x0")," and if a ",(0,l.yg)("inlineCode",{parentName:"p"},"Plan"),' is marked as "done" by key ',(0,l.yg)("inlineCode",{parentName:"p"},"0x1"),". The state\ncontains the consensus versions of all app modules in the application. The versions\nare stored as big endian ",(0,l.yg)("inlineCode",{parentName:"p"},"uint64"),", and can be accessed with prefix ",(0,l.yg)("inlineCode",{parentName:"p"},"0x2")," appended\nby the corresponding module name of type ",(0,l.yg)("inlineCode",{parentName:"p"},"string"),". The state maintains a\n",(0,l.yg)("inlineCode",{parentName:"p"},"Protocol Version")," which can be accessed by key ",(0,l.yg)("inlineCode",{parentName:"p"},"0x3"),"."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Plan: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x0 -> Plan")),(0,l.yg)("li",{parentName:"ul"},"Done: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x1 | byte(plan name)  -> BigEndian(Block Height)")),(0,l.yg)("li",{parentName:"ul"},"ConsensusVersion: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x2 | byte(module name)  -> BigEndian(Module Consensus Version)")),(0,l.yg)("li",{parentName:"ul"},"ProtocolVersion: ",(0,l.yg)("inlineCode",{parentName:"li"},"0x3 -> BigEndian(Protocol Version)"))),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module contains no genesis state."),(0,l.yg)("h2",{id:"events"},"Events"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," does not emit any events by itself. Any and all proposal related\nevents are emitted through the ",(0,l.yg)("inlineCode",{parentName:"p"},"x/gov")," module."),(0,l.yg)("h2",{id:"client"},"Client"),(0,l.yg)("h3",{id:"cli"},"CLI"),(0,l.yg)("p",null,"A user can query and interact with the ",(0,l.yg)("inlineCode",{parentName:"p"},"upgrade")," module using the CLI."),(0,l.yg)("h4",{id:"query"},"Query"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.yg)("inlineCode",{parentName:"p"},"upgrade")," state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"simd query upgrade --help\n")),(0,l.yg)("h5",{id:"applied"},"applied"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"applied")," command allows users to query the block header for height at which a completed upgrade was applied."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"simd query upgrade applied [upgrade-name] [flags]\n")),(0,l.yg)("p",null,"If upgrade-name was previously executed on the chain, this returns the header for the block at which it was applied.\nThis helps a client determine which binary was valid over a given range of blocks, as well as more context to understand past migrations."),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'simd query upgrade applied "test-upgrade"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'"block_id": {\n    "hash": "A769136351786B9034A5F196DC53F7E50FCEB53B48FA0786E1BFC45A0BB646B5",\n    "parts": {\n      "total": 1,\n      "hash": "B13CBD23011C7480E6F11BE4594EE316548648E6A666B3575409F8F16EC6939E"\n    }\n  },\n  "block_size": "7213",\n  "header": {\n    "version": {\n      "block": "11"\n    },\n    "chain_id": "testnet-2",\n    "height": "455200",\n    "time": "2021-04-10T04:37:57.085493838Z",\n    "last_block_id": {\n      "hash": "0E8AD9309C2DC411DF98217AF59E044A0E1CCEAE7C0338417A70338DF50F4783",\n      "parts": {\n        "total": 1,\n        "hash": "8FE572A48CD10BC2CBB02653CA04CA247A0F6830FF19DC972F64D339A355E77D"\n      }\n    },\n    "last_commit_hash": "DE890239416A19E6164C2076B837CC1D7F7822FC214F305616725F11D2533140",\n    "data_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n    "validators_hash": "A31047ADE54AE9072EE2A12FF260A8990BA4C39F903EAF5636B50D58DBA72582",\n    "next_validators_hash": "A31047ADE54AE9072EE2A12FF260A8990BA4C39F903EAF5636B50D58DBA72582",\n    "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",\n    "app_hash": "28ECC486AFC332BA6CC976706DBDE87E7D32441375E3F10FD084CD4BAF0DA021",\n    "last_results_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n    "evidence_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n    "proposer_address": "2ABC4854B1A1C5AA8403C4EA853A81ACA901CC76"\n  },\n  "num_txs": "0"\n}\n')),(0,l.yg)("h5",{id:"module-versions"},"module versions"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"module_versions")," command gets a list of module names and their respective consensus versions."),(0,l.yg)("p",null,"Following the command with a specific module name will return only\nthat module's information."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"simd query upgrade module_versions [optional module_name] [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"simd query upgrade module_versions\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'module_versions:\n- name: auth\n  version: "2"\n- name: authz\n  version: "1"\n- name: bank\n  version: "2"\n- name: crisis\n  version: "1"\n- name: distribution\n  version: "2"\n- name: evidence\n  version: "1"\n- name: feegrant\n  version: "1"\n- name: genutil\n  version: "1"\n- name: gov\n  version: "2"\n- name: ibc\n  version: "2"\n- name: mint\n  version: "1"\n- name: params\n  version: "1"\n- name: slashing\n  version: "2"\n- name: staking\n  version: "2"\n- name: transfer\n  version: "1"\n- name: upgrade\n  version: "1"\n- name: vesting\n  version: "1"\n')),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"regen query upgrade module_versions ibc\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'module_versions:\n- name: ibc\n  version: "2"\n')),(0,l.yg)("h5",{id:"plan-1"},"plan"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"plan")," command gets the currently scheduled upgrade plan, if one exists."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"regen query upgrade plan [flags]\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"simd query upgrade plan\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'height: "130"\ninfo: ""\nname: test-upgrade\ntime: "0001-01-01T00:00:00Z"\nupgraded_client_state: null\n')),(0,l.yg)("h4",{id:"transactions"},"Transactions"),(0,l.yg)("p",null,"The upgrade module supports the following transactions:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"software-proposal")," - submits an upgrade proposal:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'simd tx upgrade software-upgrade v2 --title="Test Proposal" --summary="testing" --deposit="100000000stake" --upgrade-height 1000000 \\\n--upgrade-info \'{ "binaries": { "linux/amd64":"https://example.com/simd.zip?checksum=sha256:aec070645fe53ee3b3763059376134f058cc337247c978add178b6ccdfb0019f" } }\' --from cosmos1..\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"cancel-software-upgrade")," - cancels a previously submitted upgrade proposal:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'simd tx upgrade cancel-software-upgrade --title="Test Proposal" --summary="testing" --deposit="100000000stake" --from cosmos1..\n')),(0,l.yg)("h3",{id:"rest"},"REST"),(0,l.yg)("p",null,"A user can query the ",(0,l.yg)("inlineCode",{parentName:"p"},"upgrade")," module using REST endpoints."),(0,l.yg)("h4",{id:"applied-plan"},"Applied Plan"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"AppliedPlan")," queries a previously applied upgrade plan by its name."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"/cosmos/upgrade/v1beta1/applied_plan/{name}\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:1317/cosmos/upgrade/v1beta1/applied_plan/v2.0-upgrade" -H "accept: application/json"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "height": "30"\n}\n')),(0,l.yg)("h4",{id:"current-plan"},"Current Plan"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"CurrentPlan")," queries the current upgrade plan."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"/cosmos/upgrade/v1beta1/current_plan\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:1317/cosmos/upgrade/v1beta1/current_plan" -H "accept: application/json"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "plan": "v2.1-upgrade"\n}\n')),(0,l.yg)("h4",{id:"module-versions-1"},"Module versions"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ModuleVersions")," queries the list of module versions from state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"/cosmos/upgrade/v1beta1/module_versions\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:1317/cosmos/upgrade/v1beta1/module_versions" -H "accept: application/json"\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "module_versions": [\n    {\n      "name": "auth",\n      "version": "2"\n    },\n    {\n      "name": "authz",\n      "version": "1"\n    },\n    {\n      "name": "bank",\n      "version": "2"\n    },\n    {\n      "name": "crisis",\n      "version": "1"\n    },\n    {\n      "name": "distribution",\n      "version": "2"\n    },\n    {\n      "name": "evidence",\n      "version": "1"\n    },\n    {\n      "name": "feegrant",\n      "version": "1"\n    },\n    {\n      "name": "genutil",\n      "version": "1"\n    },\n    {\n      "name": "gov",\n      "version": "2"\n    },\n    {\n      "name": "ibc",\n      "version": "2"\n    },\n    {\n      "name": "mint",\n      "version": "1"\n    },\n    {\n      "name": "params",\n      "version": "1"\n    },\n    {\n      "name": "slashing",\n      "version": "2"\n    },\n    {\n      "name": "staking",\n      "version": "2"\n    },\n    {\n      "name": "transfer",\n      "version": "1"\n    },\n    {\n      "name": "upgrade",\n      "version": "1"\n    },\n    {\n      "name": "vesting",\n      "version": "1"\n    }\n  ]\n}\n')),(0,l.yg)("h3",{id:"grpc"},"gRPC"),(0,l.yg)("p",null,"A user can query the ",(0,l.yg)("inlineCode",{parentName:"p"},"upgrade")," module using gRPC endpoints."),(0,l.yg)("h4",{id:"applied-plan-1"},"Applied Plan"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"AppliedPlan")," queries a previously applied upgrade plan by its name."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cosmos.upgrade.v1beta1.Query/AppliedPlan\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n    -d \'{"name":"v2.0-upgrade"}\' \\\n    localhost:9090 \\\n    cosmos.upgrade.v1beta1.Query/AppliedPlan\n')),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "height": "30"\n}\n')),(0,l.yg)("h4",{id:"current-plan-1"},"Current Plan"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"CurrentPlan")," queries the current upgrade plan."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cosmos.upgrade.v1beta1.Query/CurrentPlan\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 cosmos.slashing.v1beta1.Query/CurrentPlan\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "plan": "v2.1-upgrade"\n}\n')),(0,l.yg)("h4",{id:"module-versions-2"},"Module versions"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ModuleVersions")," queries the list of module versions from state."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cosmos.upgrade.v1beta1.Query/ModuleVersions\n")),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 cosmos.slashing.v1beta1.Query/ModuleVersions\n")),(0,l.yg)("p",null,"Example Output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "module_versions": [\n    {\n      "name": "auth",\n      "version": "2"\n    },\n    {\n      "name": "authz",\n      "version": "1"\n    },\n    {\n      "name": "bank",\n      "version": "2"\n    },\n    {\n      "name": "crisis",\n      "version": "1"\n    },\n    {\n      "name": "distribution",\n      "version": "2"\n    },\n    {\n      "name": "evidence",\n      "version": "1"\n    },\n    {\n      "name": "feegrant",\n      "version": "1"\n    },\n    {\n      "name": "genutil",\n      "version": "1"\n    },\n    {\n      "name": "gov",\n      "version": "2"\n    },\n    {\n      "name": "ibc",\n      "version": "2"\n    },\n    {\n      "name": "mint",\n      "version": "1"\n    },\n    {\n      "name": "params",\n      "version": "1"\n    },\n    {\n      "name": "slashing",\n      "version": "2"\n    },\n    {\n      "name": "staking",\n      "version": "2"\n    },\n    {\n      "name": "transfer",\n      "version": "1"\n    },\n    {\n      "name": "upgrade",\n      "version": "1"\n    },\n    {\n      "name": "vesting",\n      "version": "1"\n    }\n  ]\n}\n')),(0,l.yg)("h2",{id:"resources"},"Resources"),(0,l.yg)("p",null,"A list of (external) resources to learn more about the ",(0,l.yg)("inlineCode",{parentName:"p"},"x/upgrade")," module."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://medium.com/web3-surfers/cosmos-dev-series-cosmos-sdk-based-blockchain-upgrade-b5e99181554c"},"Cosmos Dev Series: Cosmos Blockchain Upgrade")," - The blog post that explains how software upgrades work in detail.")))}u.isMDXComponent=!0}}]);