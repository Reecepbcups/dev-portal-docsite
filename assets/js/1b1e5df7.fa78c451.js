"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[75670],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),c=o,m=p["".concat(s,".").concat(c)]||p[c]||y[c]||i;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},75048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(58168),o=(t(96540),t(15680));const i={},r="ADR 016: Validator Consensus Key Rotation",l={unversionedId:"build/architecture/adr-016-validator-consensus-key-rotation",id:"version-0.50/build/architecture/adr-016-validator-consensus-key-rotation",title:"ADR 016: Validator Consensus Key Rotation",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-016-validator-consensus-key-rotation.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-016-validator-consensus-key-rotation",permalink:"/cosmos-sdk/0.50/build/architecture/adr-016-validator-consensus-key-rotation",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 14: Proportional Slashing",permalink:"/cosmos-sdk/0.50/build/architecture/adr-014-proportional-slashing"},next:{title:"ADR 17: Historical Header Module",permalink:"/cosmos-sdk/0.50/build/architecture/adr-017-historical-header-module"}},s={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Pseudo procedure for consensus key rotation",id:"pseudo-procedure-for-consensus-key-rotation",level:3},{value:"Considerations",id:"considerations",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:d},p="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"adr-016-validator-consensus-key-rotation"},"ADR 016: Validator Consensus Key Rotation"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"2019 Oct 23: Initial draft"),(0,o.yg)("li",{parentName:"ul"},"2019 Nov 28: Add key rotation fee")),(0,o.yg)("h2",{id:"context"},"Context"),(0,o.yg)("p",null,"Validator consensus key rotation feature has been discussed and requested for a long time, for the sake of safer validator key management policy (e.g. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/issues/1136"},"https://github.com/tendermint/tendermint/issues/1136"),"). So, we suggest one of the simplest form of validator consensus key rotation implementation mostly onto Cosmos SDK."),(0,o.yg)("p",null,"We don't need to make any update on consensus logic in Tendermint because Tendermint does not have any mapping information of consensus key and validator operator key, meaning that from Tendermint point of view, a consensus key rotation of a validator is simply a replacement of a consensus key to another."),(0,o.yg)("p",null,"Also, it should be noted that this ADR includes only the simplest form of consensus key rotation without considering multiple consensus keys concept. Such multiple consensus keys concept shall remain a long term goal of Tendermint and Cosmos SDK."),(0,o.yg)("h2",{id:"decision"},"Decision"),(0,o.yg)("h3",{id:"pseudo-procedure-for-consensus-key-rotation"},"Pseudo procedure for consensus key rotation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"create new random consensus key."),(0,o.yg)("li",{parentName:"ul"},"create and broadcast a transaction with a ",(0,o.yg)("inlineCode",{parentName:"li"},"MsgRotateConsPubKey")," that states the new consensus key is now coupled with the validator operator with signature from the validator's operator key."),(0,o.yg)("li",{parentName:"ul"},"old consensus key becomes unable to participate on consensus immediately after the update of key mapping state on-chain."),(0,o.yg)("li",{parentName:"ul"},"start validating with new consensus key."),(0,o.yg)("li",{parentName:"ul"},"validators using HSM and KMS should update the consensus key in HSM to use the new rotated key after the height ",(0,o.yg)("inlineCode",{parentName:"li"},"h")," when ",(0,o.yg)("inlineCode",{parentName:"li"},"MsgRotateConsPubKey")," committed to the blockchain.")),(0,o.yg)("h3",{id:"considerations"},"Considerations"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"consensus key mapping information management strategy",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"store history of each key mapping changes in the kvstore."),(0,o.yg)("li",{parentName:"ul"},"the state machine can search corresponding consensus key paired with given validator operator for any arbitrary height in a recent unbonding period."),(0,o.yg)("li",{parentName:"ul"},"the state machine does not need any historical mapping information which is past more than unbonding period."))),(0,o.yg)("li",{parentName:"ul"},"key rotation costs related to LCD and IBC",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"LCD and IBC will have traffic/computation burden when there exists frequent power changes"),(0,o.yg)("li",{parentName:"ul"},"In current Tendermint design, consensus key rotations are seen as power changes from LCD or IBC perspective"),(0,o.yg)("li",{parentName:"ul"},"Therefore, to minimize unnecessary frequent key rotation behavior, we limited maximum number of rotation in recent unbonding period and also applied exponentially increasing rotation fee"))),(0,o.yg)("li",{parentName:"ul"},"limits",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"a validator cannot rotate its consensus key more than ",(0,o.yg)("inlineCode",{parentName:"li"},"MaxConsPubKeyRotations")," time for any unbonding period, to prevent spam."),(0,o.yg)("li",{parentName:"ul"},"parameters can be decided by governance and stored in genesis file."))),(0,o.yg)("li",{parentName:"ul"},"key rotation fee",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"a validator should pay ",(0,o.yg)("inlineCode",{parentName:"li"},"KeyRotationFee")," to rotate the consensus key which is calculated as below"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"KeyRotationFee")," = (max(",(0,o.yg)("inlineCode",{parentName:"li"},"VotingPowerPercentage")," ",(0,o.yg)("em",{parentName:"li"},"100, 1)")," ",(0,o.yg)("inlineCode",{parentName:"li"},"InitialKeyRotationFee"),") * 2^(number of rotations in ",(0,o.yg)("inlineCode",{parentName:"li"},"ConsPubKeyRotationHistory")," in recent unbonding period)"))),(0,o.yg)("li",{parentName:"ul"},"evidence module",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"evidence module can search corresponding consensus key for any height from slashing keeper so that it can decide which consensus key is supposed to be used for given height."))),(0,o.yg)("li",{parentName:"ul"},"abci.ValidatorUpdate",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"tendermint already has ability to change a consensus key by ABCI communication(",(0,o.yg)("inlineCode",{parentName:"li"},"ValidatorUpdate"),")."),(0,o.yg)("li",{parentName:"ul"},"validator consensus key update can be done via creating new + delete old by change the power to zero."),(0,o.yg)("li",{parentName:"ul"},"therefore, we expect we even do not need to change tendermint codebase at all to implement this feature."))),(0,o.yg)("li",{parentName:"ul"},"new genesis parameters in ",(0,o.yg)("inlineCode",{parentName:"li"},"staking")," module",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"MaxConsPubKeyRotations")," : maximum number of rotation can be executed by a validator in recent unbonding period. default value 10 is suggested(11th key rotation will be rejected)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"InitialKeyRotationFee")," : the initial key rotation fee when no key rotation has happened in recent unbonding period. default value 1atom is suggested(1atom fee for the first key rotation in recent unbonding period)")))),(0,o.yg)("h3",{id:"workflow"},"Workflow"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The validator generates a new consensus keypair.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The validator generates and signs a ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgRotateConsPubKey")," tx with their operator key and new ConsPubKey"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type MsgRotateConsPubKey struct {\n    ValidatorAddress  sdk.ValAddress\n    NewPubKey         crypto.PubKey\n}\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"handleMsgRotateConsPubKey")," gets ",(0,o.yg)("inlineCode",{parentName:"p"},"MsgRotateConsPubKey"),", calls ",(0,o.yg)("inlineCode",{parentName:"p"},"RotateConsPubKey")," with emits event")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"RotateConsPubKey")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"checks if ",(0,o.yg)("inlineCode",{parentName:"li"},"NewPubKey")," is not duplicated on ",(0,o.yg)("inlineCode",{parentName:"li"},"ValidatorsByConsAddr")),(0,o.yg)("li",{parentName:"ul"},"checks if the validator is does not exceed parameter ",(0,o.yg)("inlineCode",{parentName:"li"},"MaxConsPubKeyRotations")," by iterating ",(0,o.yg)("inlineCode",{parentName:"li"},"ConsPubKeyRotationHistory")),(0,o.yg)("li",{parentName:"ul"},"checks if the signing account has enough balance to pay ",(0,o.yg)("inlineCode",{parentName:"li"},"KeyRotationFee")),(0,o.yg)("li",{parentName:"ul"},"pays ",(0,o.yg)("inlineCode",{parentName:"li"},"KeyRotationFee")," to community fund"),(0,o.yg)("li",{parentName:"ul"},"overwrites ",(0,o.yg)("inlineCode",{parentName:"li"},"NewPubKey")," in ",(0,o.yg)("inlineCode",{parentName:"li"},"validator.ConsPubKey")),(0,o.yg)("li",{parentName:"ul"},"deletes old ",(0,o.yg)("inlineCode",{parentName:"li"},"ValidatorByConsAddr")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"SetValidatorByConsAddr")," for ",(0,o.yg)("inlineCode",{parentName:"li"},"NewPubKey")),(0,o.yg)("li",{parentName:"ul"},"Add ",(0,o.yg)("inlineCode",{parentName:"li"},"ConsPubKeyRotationHistory")," for tracking rotation")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type ConsPubKeyRotationHistory struct {\n    OperatorAddress         sdk.ValAddress\n    OldConsPubKey           crypto.PubKey\n    NewConsPubKey           crypto.PubKey\n    RotatedHeight           int64\n}\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"ApplyAndReturnValidatorSetUpdates")," checks if there is ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsPubKeyRotationHistory")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsPubKeyRotationHistory.RotatedHeight == ctx.BlockHeight()")," and if so, generates 2 ",(0,o.yg)("inlineCode",{parentName:"p"},"ValidatorUpdate")," , one for a remove validator and one for create new validator"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-go"},"abci.ValidatorUpdate{\n    PubKey: cmttypes.TM2PB.PubKey(OldConsPubKey),\n    Power:  0,\n}\n\nabci.ValidatorUpdate{\n    PubKey: cmttypes.TM2PB.PubKey(NewConsPubKey),\n    Power:  v.ConsensusPower(),\n}\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"at ",(0,o.yg)("inlineCode",{parentName:"p"},"previousVotes")," Iteration logic of ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocateTokens"),",  ",(0,o.yg)("inlineCode",{parentName:"p"},"previousVote")," using ",(0,o.yg)("inlineCode",{parentName:"p"},"OldConsPubKey")," match up with ",(0,o.yg)("inlineCode",{parentName:"p"},"ConsPubKeyRotationHistory"),", and replace validator for token allocation")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Migrate ",(0,o.yg)("inlineCode",{parentName:"p"},"ValidatorSigningInfo")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ValidatorMissedBlockBitArray")," from ",(0,o.yg)("inlineCode",{parentName:"p"},"OldConsPubKey")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"NewConsPubKey")))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Note : All above features shall be implemented in ",(0,o.yg)("inlineCode",{parentName:"li"},"staking")," module.")),(0,o.yg)("h2",{id:"status"},"Status"),(0,o.yg)("p",null,"Proposed"),(0,o.yg)("h2",{id:"consequences"},"Consequences"),(0,o.yg)("h3",{id:"positive"},"Positive"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Validators can immediately or periodically rotate their consensus key to have better security policy"),(0,o.yg)("li",{parentName:"ul"},"improved security against Long-Range attacks (",(0,o.yg)("a",{parentName:"li",href:"https://nearprotocol.com/blog/long-range-attacks-and-a-new-fork-choice-rule"},"https://nearprotocol.com/blog/long-range-attacks-and-a-new-fork-choice-rule"),") given a validator throws away the old consensus key(s)")),(0,o.yg)("h3",{id:"negative"},"Negative"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Slash module needs more computation because it needs to lookup corresponding consensus key of validators for each height"),(0,o.yg)("li",{parentName:"ul"},"frequent key rotations will make light client bisection less efficient")),(0,o.yg)("h3",{id:"neutral"},"Neutral"),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"on tendermint repo : ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/1136"},"https://github.com/tendermint/tendermint/issues/1136")),(0,o.yg)("li",{parentName:"ul"},"on cosmos-sdk repo : ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/5231"},"https://github.com/cosmos/cosmos-sdk/issues/5231")),(0,o.yg)("li",{parentName:"ul"},"about multiple consensus keys : ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/1758#issuecomment-545291698"},"https://github.com/tendermint/tendermint/issues/1758#issuecomment-545291698"))))}y.isMDXComponent=!0}}]);