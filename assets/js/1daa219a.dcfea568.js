"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[19467],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?i.createElement(g,s(s({ref:t},d),{},{components:n})):i.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(58168),a=(n(96540),n(15680));const o={},s="ADR 006: ICS-02 client refactor",r={unversionedId:"architecture/adr-006-02-client-refactor",id:"version-v8.5.x/architecture/adr-006-02-client-refactor",title:"ADR 006: ICS-02 client refactor",description:"Changelog",source:"@site/ibc-go_versioned_docs/version-v8.5.x/architecture/adr-006-02-client-refactor.md",sourceDirName:"architecture",slug:"/architecture/adr-006-02-client-refactor",permalink:"/ibc-go/v8.5.x/architecture/adr-006-02-client-refactor",draft:!1,tags:[],version:"v8.5.x",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 005: UpdateClient Events - ClientState Consensus Heights",permalink:"/ibc-go/v8.5.x/architecture/adr-005-consensus-height-events"},next:{title:"ADR 007: Solo machine sign bytes",permalink:"/ibc-go/v8.5.x/architecture/adr-007-solomachine-signbytes"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Tendermint non-zero height upgrades",id:"tendermint-non-zero-height-upgrades",level:3},{value:"Tendermint requires misbehaviour detection during updates",id:"tendermint-requires-misbehaviour-detection-during-updates",level:3},{value:"Localhost requires access to the entire client store",id:"localhost-requires-access-to-the-entire-client-store",level:3},{value:"Solomachine doesn&#39;t set consensus states",id:"solomachine-doesnt-set-consensus-states",level:3},{value:"New clients may want to do batch updates",id:"new-clients-may-want-to-do-batch-updates",level:3},{value:"Decision",id:"decision",level:2},{value:"Require light clients to set client and consensus states",id:"require-light-clients-to-set-client-and-consensus-states",level:3},{value:"Merge <code>Header</code>/<code>Misbehaviour</code> interface and rename to <code>ClientMessage</code>",id:"merge-headermisbehaviour-interface-and-rename-to-clientmessage",level:3},{value:"Split <code>CheckHeaderAndUpdateState</code> into 4 functions",id:"split-checkheaderandupdatestate-into-4-functions",level:3},{value:"Add <code>GetTimestampAtHeight</code> to the client state interface",id:"add-gettimestampatheight-to-the-client-state-interface",level:3},{value:"Add generic verification functions",id:"add-generic-verification-functions",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"adr-006-ics-02-client-refactor"},"ADR 006: ICS-02 client refactor"),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"2022-08-01: Initial Draft")),(0,a.yg)("h2",{id:"status"},"Status"),(0,a.yg)("p",null,"Accepted and applied in v7 of ibc-go"),(0,a.yg)("h2",{id:"context"},"Context"),(0,a.yg)("p",null,"During the initial development of the 02-client submodule, each light client supported (06-solomachine, 07-tendermint, 09-localhost) was referenced through hardcoding.\nHere is an example of the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/commit/b93300288e3a04faef9c0774b75c13b24450ba1c#diff-c5f6b956947375f28d611f18d0e670cf28f8f305300a89c5a9b239b0eeec5064R83"},"code")," that existed in the 02-client submodule:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) UpdateClient(ctx sdk.Context, clientID string, header exported.Header) (exported.ClientState, error) {\n  ...\n\n  switch clientType {\n  case exported.Tendermint:\n    clientState, consensusState, err = tendermint.CheckValidityAndUpdateState(\n    clientState, header, ctx.BlockTime(),\n    )\n  case exported.Localhost:\n    // override client state and update the block height\n    clientState = localhosttypes.NewClientState(\n    ctx.ChainID(), // use the chain ID from context since the client is from the running chain (i.e self).\n    ctx.BlockHeight(),\n    )\n  default:\n    err = types.ErrInvalidClientType\n  }\n")),(0,a.yg)("p",null,"To add additional light clients, code would need to be added directly to the 02-client submodule.\nEvidently, this would likely become problematic as IBC scaled to many chains using consensus mechanisms beyond the initial supported light clients.\nIssue ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/6064"},"#6064")," on the SDK addressed this problem by creating a more modular 02-client submodule.\nThe 02-client submodule would now interact with each light client via an interface.\nWhile, this change was positive in development, increasing the flexibility and adoptability of IBC, it also opened the door to new problems."),(0,a.yg)("p",null,"The difficulty of generalizing light clients became apparent once changes to those light clients were required.\nEach light client represents a different consensus algorithm which may contain a host of complexity and nuances.\nHere are some examples of issues which arose for light clients that are not applicable to all the light clients supported (06-solomachine, 07-tendermint, 09-localhost):"),(0,a.yg)("h3",{id:"tendermint-non-zero-height-upgrades"},"Tendermint non-zero height upgrades"),(0,a.yg)("p",null,"Before the launch of IBC, it was determined that the golang implementation of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint"},"tendermint")," would not be capable of supporting non-zero height upgrades.\nThis implies that any upgrade would require changing of the chain ID and resetting the height to 0.\nA chain is uniquely identified by its chain-id and validator set.\nTwo different chain ID's can be viewed as different chains and thus a normal update produced by a validator set cannot change the chain ID.\nTo work around the lack of support for non-zero height upgrades, an abstract height type was created along with an upgrade mechanism.\nThis type would indicate the revision number (the number of times the chain ID has been changed) and revision height (the current height of the blockchain)."),(0,a.yg)("p",null,"Refs:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Issue ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/issues/439"},"#439")," on IBC specification repository."),(0,a.yg)("li",{parentName:"ul"},"Specification changes in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/pull/447"},"#447")),(0,a.yg)("li",{parentName:"ul"},"Implementation changes for the abstract height type, ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/7211"},"SDK#7211"))),(0,a.yg)("h3",{id:"tendermint-requires-misbehaviour-detection-during-updates"},"Tendermint requires misbehaviour detection during updates"),(0,a.yg)("p",null,"The initial release of the IBC module and the 07-tendermint light client implementation did not support misbehaviour detection during update nor did it prevent overwriting of previous updates.\nDespite the fact that we designed the ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientState")," interface and developed the 07-tendermint client, we failed to detect even a duplicate update that constituted misbehaviour and thus should freeze the client.\nThis was fixed in PR ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/141"},"#141")," which required light client implementations to be aware that they must handle duplicate updates and misbehaviour detection.\nMisbehaviour detection during updates is not applicable to the solomachine nor localhost.\nIt is also not obvious that ",(0,a.yg)("inlineCode",{parentName:"p"},"CheckHeaderAndUpdateState")," should be performing this functionality."),(0,a.yg)("h3",{id:"localhost-requires-access-to-the-entire-client-store"},"Localhost requires access to the entire client store"),(0,a.yg)("p",null,"The localhost has been broken since the initial version of the IBC module.\nThe localhost tried to be developed underneath the 02-client interfaces without special exception, but this proved to be impossible.\nThe issues were outlined in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/issues/27"},"#27")," and further discussed in the attempted ADR in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/75"},"#75"),".\nUnlike all other clients, the localhost requires access to the entire IBC store and not just the prefixed client store."),(0,a.yg)("h3",{id:"solomachine-doesnt-set-consensus-states"},"Solomachine doesn't set consensus states"),(0,a.yg)("p",null,"The 06-solomachine does not set the consensus states within the prefixed client store.\nIt has a single consensus state that is stored within the client state.\nThis causes setting of the consensus state at the 02-client level to use unnecessary storage.\nIt also causes timeouts to fail with solo machines.\nPreviously, the timeout logic within IBC would obtain the consensus state at the height a timeout is being proved.\nThis is problematic for the solo machine as no consensus state is set.\nSee issue ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/issues/562"},"#562")," on the IBC specification repo."),(0,a.yg)("h3",{id:"new-clients-may-want-to-do-batch-updates"},"New clients may want to do batch updates"),(0,a.yg)("p",null,"New light clients may not function in a similar fashion to 06-solomachine and 07-tendermint.\nThey may require setting many consensus states in a single update.\nAs @seunlanlege ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/issues/284#issuecomment-1005583679"},"states"),":"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"I'm in support of these changes for 2 reasons:"),(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"This would allow light clients to handle batch header updates in CheckHeaderAndUpdateState, for the special case of 11-beefy proving the finality for a batch of headers is much more space and time efficient than the space/time complexity of proving each individual headers in that batch, combined.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"This also allows for a single light client instance of 11-beefy be used to prove finality for every parachain connected to the relay chain (Polkadot/Kusama). We achieve this by setting the appropriate ConsensusState for individual parachain headers in CheckHeaderAndUpdateState")))),(0,a.yg)("h2",{id:"decision"},"Decision"),(0,a.yg)("h3",{id:"require-light-clients-to-set-client-and-consensus-states"},"Require light clients to set client and consensus states"),(0,a.yg)("p",null,"The IBC specification states:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If the provided header was valid, the client MUST also mutate internal state to store now-finalised consensus roots and update any necessary signature authority tracking (e.g. changes to the validator set) for future calls to the validity predicate.")),(0,a.yg)("p",null,'The initial version of the IBC go SDK based module did not fulfill this requirement.\nInstead, the 02-client submodule required each light client to return the client and consensus state which should be updated in the client prefixed store.\nThis decision lead to the issues "Solomachine doesn\'t set consensus states" and "New clients may want to do batch updates".'),(0,a.yg)("p",null,"Each light client should be required to set its own client and consensus states on any update necessary.\nThe go implementation should be changed to match the specification requirements.\nThis will allow more flexibility for light clients to manage their own internal storage and do batch updates."),(0,a.yg)("h3",{id:"merge-headermisbehaviour-interface-and-rename-to-clientmessage"},"Merge ",(0,a.yg)("inlineCode",{parentName:"h3"},"Header"),"/",(0,a.yg)("inlineCode",{parentName:"h3"},"Misbehaviour")," interface and rename to ",(0,a.yg)("inlineCode",{parentName:"h3"},"ClientMessage")),(0,a.yg)("p",null,"Remove ",(0,a.yg)("inlineCode",{parentName:"p"},"GetHeight()")," from the header interface (as light clients now set the client/consensus states).\nThis results in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Header"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," interfaces being the same.\nTo reduce complexity of the codebase, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Header"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"Misbehaviour")," interfaces should be merged into ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientMessage"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"ClientMessage")," will provide the client with some authenticated information which may result in regular updates, misbehaviour detection, batch updates, or other custom functionality a light client requires."),(0,a.yg)("h3",{id:"split-checkheaderandupdatestate-into-4-functions"},"Split ",(0,a.yg)("inlineCode",{parentName:"h3"},"CheckHeaderAndUpdateState")," into 4 functions"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/issues/668"},"#668"),"."),(0,a.yg)("p",null,"Split ",(0,a.yg)("inlineCode",{parentName:"p"},"CheckHeaderAndUpdateState")," into 4 functions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"VerifyClientMessage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CheckForMisbehaviour")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UpdateStateOnMisbehaviour")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UpdateState"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VerifyClientMessage")," checks the that the structure of a ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientMessage")," is correct and that all authentication data provided is valid."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"CheckForMisbehaviour")," checks to see if a ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientMessage")," is evidence of misbehaviour."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour")," freezes the client and updates its state accordingly."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"UpdateState")," performs a regular update or a no-op on duplicate updates."),(0,a.yg)("p",null,"The code roughly looks like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) UpdateClient(ctx sdk.Context, clientID string, header exported.Header) error {\n  ...\n\n  if err := clientState.VerifyClientMessage(clientMessage); err != nil {\n    return err\n  }\n  \n  foundMisbehaviour := clientState.CheckForMisbehaviour(clientMessage)\n  if foundMisbehaviour {\n    clientState.UpdateStateOnMisbehaviour(header)\n    // emit misbehaviour event\n    return \n  }\n  \n  clientState.UpdateState(clientMessage) // expects no-op on duplicate header\n  // emit update event\n  return\n}\n")),(0,a.yg)("h3",{id:"add-gettimestampatheight-to-the-client-state-interface"},"Add ",(0,a.yg)("inlineCode",{parentName:"h3"},"GetTimestampAtHeight")," to the client state interface"),(0,a.yg)("p",null,"By adding ",(0,a.yg)("inlineCode",{parentName:"p"},"GetTimestampAtHeight")," to the ClientState interface, we allow light clients which do non-traditional consensus state/timestamp storage to process timeouts correctly.\nThis fixes the issues outlined for the solo machine client."),(0,a.yg)("h3",{id:"add-generic-verification-functions"},"Add generic verification functions"),(0,a.yg)("p",null,"As the complexity and the functionality grows, new verification functions will be required for additional paths.\nThis was explained in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/issues/684"},"#684")," on the specification repo.\nThese generic verification functions would be immediately useful for the new paths added in connection/channel upgradability as well as for custom paths defined by IBC applications such as Interchain Queries.\nThe old verification functions (",(0,a.yg)("inlineCode",{parentName:"p"},"VerifyClientState"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"VerifyConnection"),", etc) should be removed in favor of the generic verification functions."),(0,a.yg)("h2",{id:"consequences"},"Consequences"),(0,a.yg)("h3",{id:"positive"},"Positive"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Flexibility for light client implementations"),(0,a.yg)("li",{parentName:"ul"},"Well defined interfaces and their required functionality"),(0,a.yg)("li",{parentName:"ul"},"Generic verification functions"),(0,a.yg)("li",{parentName:"ul"},"Applies changes necessary for future client/connection/channel upgrabability features"),(0,a.yg)("li",{parentName:"ul"},"Timeout processing for solo machines"),(0,a.yg)("li",{parentName:"ul"},"Reduced code complexity")),(0,a.yg)("h3",{id:"negative"},"Negative"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The refactor touches on sensitive areas of the ibc-go codebase"),(0,a.yg)("li",{parentName:"ul"},"Changing of established naming (",(0,a.yg)("inlineCode",{parentName:"li"},"Header"),"/",(0,a.yg)("inlineCode",{parentName:"li"},"Misbehaviour")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"ClientMessage"),")")),(0,a.yg)("h3",{id:"neutral"},"Neutral"),(0,a.yg)("p",null,"No notable consequences"),(0,a.yg)("h2",{id:"references"},"References"),(0,a.yg)("p",null,"Issues:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/284"},"#284"))),(0,a.yg)("p",null,"PRs:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/1871"},"#1871"))))}u.isMDXComponent=!0}}]);