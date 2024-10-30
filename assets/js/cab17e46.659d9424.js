"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[60058],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const o={},s="The Cosmos Security Handbook: Part 1 - Core Chain",r={unversionedId:"docs/build/building-apps/security-part-1",id:"docs/build/building-apps/security-part-1",title:"The Cosmos Security Handbook: Part 1 - Core Chain",description:"Thank you to Roman Akhtariev and Alpin Yukseloglu for authoring this post. The original post can be found here.",source:"@site/cosmos-sdk/docs/build/building-apps/04-security-part-1.md",sourceDirName:"docs/build/building-apps",slug:"/docs/build/building-apps/security-part-1",permalink:"/cosmos-sdk/next/docs/build/building-apps/security-part-1",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"buildSidebar",previous:{title:"System Tests",permalink:"/cosmos-sdk/next/docs/build/building-apps/system-tests"},next:{title:"Introduction to Cosmos SDK Modules",permalink:"/cosmos-sdk/next/docs/build/building-modules/intro"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Non-Determinism",id:"non-determinism",level:2},{value:"Randomness",id:"randomness",level:3},{value:"Go map internals",id:"go-map-internals",level:3},{value:"Invalid Time Handling",id:"invalid-time-handling",level:3},{value:"API calls",id:"api-calls",level:3},{value:"Concurrency And Multithreading",id:"concurrency-and-multithreading",level:3},{value:"Cross-Platform Floats",id:"cross-platform-floats",level:3},{value:"In-Protocol Panics",id:"in-protocol-panics",level:2},{value:"Math Overflow",id:"math-overflow",level:3},{value:"Bulk Coin Sends",id:"bulk-coin-sends",level:3},{value:"Unmetered Computation",id:"unmetered-computation",level:2},{value:"Unmetered Execution in Hooks",id:"unmetered-execution-in-hooks",level:3},{value:"Poorly Chosen Loop/Recursion Exit Condition",id:"poorly-chosen-looprecursion-exit-condition",level:3},{value:"Slow Convergence in Math Operations",id:"slow-convergence-in-math-operations",level:3},{value:"Key Malleability and Prefix Iteration",id:"key-malleability-and-prefix-iteration",level:2},{value:"Store Prefix Ending In Serialized ID",id:"store-prefix-ending-in-serialized-id",level:3},{value:"Key Uniqueness",id:"key-uniqueness",level:3},{value:"Iterator Bounds",id:"iterator-bounds",level:3},{value:"Fee Market and Gas Issues",id:"fee-market-and-gas-issues",level:2},{value:"Mispriced State Writes",id:"mispriced-state-writes",level:3},{value:"Fees on Contract-called Functions",id:"fees-on-contract-called-functions",level:3},{value:"Broken or Missing Fee Market",id:"broken-or-missing-fee-market",level:3},{value:"Transaction Simulation and Execution Gas Consistency",id:"transaction-simulation-and-execution-gas-consistency",level:3},{value:"Closing Remarks",id:"closing-remarks",level:2},{value:"Appendix",id:"appendix",level:2},{value:"State-machine Scope",id:"state-machine-scope",level:3},{value:"Key Malleability and Prefix Iteration Attack Example",id:"key-malleability-and-prefix-iteration-attack-example",level:3}],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(h,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"the-cosmos-security-handbook-part-1---core-chain"},"The Cosmos Security Handbook: Part 1 - Core Chain"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Thank you to ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://twitter.com/akhtariev"},"Roman Akhtariev")," and ",(0,i.yg)("a",{parentName:"strong",href:"https://twitter.com/0xalpo"},"Alpin Yukseloglu"))," for authoring this post. The original post can be found ",(0,i.yg)("a",{parentName:"p",href:"https://www.faulttolerant.xyz/2024-01-16-cosmos-security-1/"},"here"),".")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("a",{parentName:"p",href:"https://www.trailofbits.com/"},"Trail of bits")," hosts another set of guidelines ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/crytic/building-secure-contracts/tree/master/not-so-smart-contracts/cosmos"},"here"))),(0,i.yg)("p",null,"The defining property of the Cosmos stack is that it is unconstrained. The layers of the stack are porous, and, to a sufficiently motivated developer, nothing is off-limits. From a security standpoint, this freedom can be terrifying."),(0,i.yg)("p",null,"In this post, we aim to shed some light on the security landscape for the Cosmos stack.  We will emphasize areas that are particularly unintuitive, either because they are unique to Cosmos or because they are areas that developers who have not built appchains before are unlikely to have encountered."),(0,i.yg)("p",null,"Since the surface of new risks that come with developing appchains is vast, we cannot possibly fit everything into a single post. Thus, this article will be focused only on the security surface of the core chain. We are reserving CosmWasm and IBC-related risks for a future post."),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"Application logic in Cosmos-based appchains can affect all parts of the stack. This level of expressivity necessitates important guardrails to be removed, which introduces certain risks that would otherwise be protected against. To a developer who is accustomed to building on general-purpose chains, the protections in place are often invisible to the point of going unnoticed. Thus, when faced with ultimate control, it can be difficult to differentiate between what is a new tool and what is an unmarked danger zone."),(0,i.yg)("p",null,"In the sections that follow, we break down the common ways developers can shoot themselves in the foot when building appchains. Some of these risks are more severe than others, but almost all are relatively unique to building appchains with the Cosmos SDK."),(0,i.yg)("p",null,"Specifically, we will cover the following areas with multiple concrete examples for each:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Non-determinism"),(0,i.yg)("li",{parentName:"ul"},"In-protocol panics"),(0,i.yg)("li",{parentName:"ul"},"Unmetered/unbounded computation"),(0,i.yg)("li",{parentName:"ul"},"Prefix iteration & key malleability"),(0,i.yg)("li",{parentName:"ul"},"Fee market & gas Issues")),(0,i.yg)("h2",{id:"non-determinism"},"Non-Determinism"),(0,i.yg)("p",null,"One of the consequences of opening up the consensus layer to app developers is that the code they write must not break critical properties required to reach consensus. Determinism is one such property that is particularly easy to compromise."),(0,i.yg)("p",null,"At a high level, determinism means that for the same input, all nodes in the network always produce the same output. It is an inherent requirement of blockchains. Without it, it is unclear what the nodes in the network are trying to agree on."),(0,i.yg)("p",null,"Simply put, non-determinism in the executed code can trigger the chain to fork or for honest validators to be unfairly slashed."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"As a brief side-note: while non-determinism should generally be avoided, we have provided a list in the appendix covering exactly which parts of the Cosmos SDK where the code needs to be deterministic. In general, anything that touches the state machine must be.")),(0,i.yg)("h3",{id:"randomness"},"Randomness"),(0,i.yg)("p",null,"Trivially, any use of randomness should be prohibited in the state machine. Keep an eye on the use of the Go ",(0,i.yg)("inlineCode",{parentName:"p"},"rand")," package. It should not be used within the state-machine scope, including the imported dependencies."),(0,i.yg)("p",null,"In general, if randomness is used, it should be accessed in a deterministic way (much like ",(0,i.yg)("a",{parentName:"p",href:"https://chain.link/vrf"},"Chainlink's VRF"),")."),(0,i.yg)("h3",{id:"go-map-internals"},"Go map internals"),(0,i.yg)("p",null,"Under the hood, Go maps are implemented as a hash map of buckets where each bucket contains up to 8 key-value pairs. Since some key-value pairs within the bucket can be empty, Go uses randomness to select the starting element within the bucket. See ",(0,i.yg)("a",{parentName:"p",href:"https://medium.com/i0exception/map-iteration-in-go-275abb76f721"},"this article")," for the breakdown."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"When building on the Cosmos SDK, you should never iterate over a Go map"),". Doing so results in non-determinism. Instead, if ",(0,i.yg)("inlineCode",{parentName:"p"},"map")," usage is inevitable, it is necessary to convert it to a ",(0,i.yg)("inlineCode",{parentName:"p"},"slice")," and sort it. See an example ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/osmoutils/partialord/internal/dag/dag.go#L290-L302"},"here"),"."),(0,i.yg)("h3",{id:"invalid-time-handling"},"Invalid Time Handling"),(0,i.yg)("p",null,"Avoid using ",(0,i.yg)("inlineCode",{parentName:"p"},"time.Now()")," since nodes are unlikely to process messages at the same point in time even if they are in the same timezone. Instead, always rely on ",(0,i.yg)("inlineCode",{parentName:"p"},"ctx.BlockTime()"),' which should be the canonical definition of what "now" is.'),(0,i.yg)("h3",{id:"api-calls"},"API calls"),(0,i.yg)("p",null,"Network requests are generally non-deterministic. As a result, they should be avoided in the state machine."),(0,i.yg)("h3",{id:"concurrency-and-multithreading"},"Concurrency And Multithreading"),(0,i.yg)("p",null,"Thread or goroutine pre-emption is likely to lack determinism. As a result, one should generally avoid using goroutines to be used anywhere within the state-machine scope. There are, of course, exceptions where we may process data concurrently for aggregation/counting which would be deterministic. However, such use cases are rare enough to consider the general use of goroutines in the app chain code as a red flag."),(0,i.yg)("h3",{id:"cross-platform-floats"},"Cross-Platform Floats"),(0,i.yg)("p",null,"For reasons that could easily take up a ",(0,i.yg)("a",{parentName:"p",href:"https://randomascii.wordpress.com/2013/07/16/floating-point-determinism/"},"separate article"),", it is safe to claim that float arithmetic is non-deterministic across platforms. Therefore, they must never be used in the app chain state-machine scope."),(0,i.yg)("h2",{id:"in-protocol-panics"},"In-Protocol Panics"),(0,i.yg)("p",null,"One of the most unintuitive differences between developing a general-purpose chain and building one's own appchain is that code can be run in-protocol without being triggered by a specific transaction."),(0,i.yg)("p",null,"While this feature unlocks an incredible amount of expressivity for developers (such as custom precompiles and in-protocol arbitrage/liquidations), it also exposes various ways for the chain to be halted. One of the common ways this happens is through panics."),(0,i.yg)("p",null,"There are of course times when panics are appropriate to use instead of errors, but it is important to keep in mind that ",(0,i.yg)("strong",{parentName:"p"},"panics in module-executed code (",(0,i.yg)("inlineCode",{parentName:"strong"},"Begin/EndBlock"),") will cause the chain to halt"),"."),(0,i.yg)("p",null,"While these halts are generally not difficult to recover when isolated, they still pose a valid attack vector, especially if the panics can be triggered repeatedly. They also result in expensive social coordination and reputation costs stemming from downtime."),(0,i.yg)("p",null,"Thus, ",(0,i.yg)("strong",{parentName:"p"},"we should be cognizant of when we use panics and ensure that we avoid them with behavior that could be handled well with an error.")," Of course, it is still okay to guardrail unexpected flows with panics when needed, especially if the behavior is such that a chain halt ",(0,i.yg)("em",{parentName:"p"},"would")," be appropriate."),(0,i.yg)("p",null,"Cosmos SDK takes care of catching and recovering from panics in all of ",(0,i.yg)("inlineCode",{parentName:"p"},"PrepareProposal")," , ",(0,i.yg)("inlineCode",{parentName:"p"},"ProcessProposal"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DeliverTx")," , leaving only ",(0,i.yg)("inlineCode",{parentName:"p"},"Begin/EndBlock")," for this class of vulnerabilities."),(0,i.yg)("p",null,"For reference, the Osmosis codebase catches and silently logs most panics stemming from ",(0,i.yg)("inlineCode",{parentName:"p"},"Begin/EndBlock")," with ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/osmoutils/cache_ctx.go#L13-L44"},"this")," helper. In almost all cases, it is most productive to understand the reason behind panic and reconcile it without halting the chain entirely."),(0,i.yg)("h3",{id:"math-overflow"},"Math Overflow"),(0,i.yg)("p",null,"By default, all SDK math operations panic on overflows. This means that any math that is done in functions that get called in ",(0,i.yg)("inlineCode",{parentName:"p"},"Begin/EndBlock")," should make sure to catch overflow panics using a helper similar to the one linked above."),(0,i.yg)("p",null,"For example, let's say a chain adds a feature that involves checking the spot price of arbitrary assets in ",(0,i.yg)("inlineCode",{parentName:"p"},"BeginBlock"),". If the overflow panic is not caught, an attacker could create a market for a new asset and manipulate the price such that the spot price calculation overflows, triggering a panic at the top of each block. Since this is an easily repeatable attack, the attacker could presumably halt the chain in perpetuity until a hard fork patches the issue by catching overflow panics."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The solution to this problem is to catch panics whenever there is SDK math run in ",(0,i.yg)("inlineCode",{parentName:"strong"},"Begin/EndBlock"),".")),(0,i.yg)("h3",{id:"bulk-coin-sends"},"Bulk Coin Sends"),(0,i.yg)("p",null,"If a chain supports custom token transfer logic (e.g. blacklists for USDC), it needs to make sure all token transfers in ",(0,i.yg)("inlineCode",{parentName:"p"},"Begin/EndBlock")," properly catch panics. While this is generally quite straightforward to do, it is commonly missed in one context: bulk coin sends."),(0,i.yg)("p",null,"Specifically, the Cosmos SDK allows for multiple coins to be transferred in one function call through its ",(0,i.yg)("inlineCode",{parentName:"p"},"[SendCoins](https://github.com/cosmos/cosmos-sdk/blob/d55985637e1484309b09e76d29f04f2c7258c3de/x/bank/keeper/send.go#L202)")," function. This is a black-box function that does not allow for individual validation of each token transfer, which often leads to it being overlooked. A single panic trigger in a call to ",(0,i.yg)("inlineCode",{parentName:"p"},"SendCoins")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"Begin/EndBlock")," can trigger a chain halt."),(0,i.yg)("p",null,"While one can catch the panic on the entire ",(0,i.yg)("inlineCode",{parentName:"p"},"SendCoins")," call, this would mean that an attacker can DoS all transfers in the batch. Thus, ",(0,i.yg)("strong",{parentName:"p"},"the solution for these situations is to transfer coins one by one with ",(0,i.yg)("inlineCode",{parentName:"strong"},"SendCoin")," and verify each transfer so that problematic ones can be skipped.")),(0,i.yg)("h2",{id:"unmetered-computation"},"Unmetered Computation"),(0,i.yg)("p",null,"In the standard Cosmos stack, only stateful operations are gas-metered. This implies that out-of-block compute that is not triggered by messages has no notion of a gas limit. Thus, any form of unbounded execution in such a context can be used to halt the chain."),(0,i.yg)("h3",{id:"unmetered-execution-in-hooks"},"Unmetered Execution in Hooks"),(0,i.yg)("p",null,"Whenever one implements functionality involving hooks to arbitrary CosmWasm contracts, it is crucial to check whether this logic can be triggered by module-executed code. If it is, then an attacker can simply upload a contract that runs an infinite loop to halt the chain."),(0,i.yg)("p",null,"For instance, if a chain allows for arbitrary token transfer hooks and triggers them in ",(0,i.yg)("inlineCode",{parentName:"p"},"Begin/EndBlock"),", then an attacker can create a token that executes an infinitely looping CosmWasm contract. Once this token is transferred in the next block's ",(0,i.yg)("inlineCode",{parentName:"p"},"BeginBlock"),", the chain will halt."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The solution to this problem is to ",(0,i.yg)("a",{parentName:"strong",href:"https://github.com/osmosis-labs/osmosis/blob/2a64b0b6171478b81b017a001f5179b199a38628/x/tokenfactory/keeper/before_send.go#L121-L128"},"wrap risky function calls")," in a separate Context that has a gas limit.")," This assigns a gas budget to such calls that prevent them from running unboundedly and halting the chain."),(0,i.yg)("h3",{id:"poorly-chosen-looprecursion-exit-condition"},"Poorly Chosen Loop/Recursion Exit Condition"),(0,i.yg)("p",null,"This is a consideration that seems trivial but comes up much more frequently than one might expect. If a loop in unmetered code is never exited or a recursion base case is never hit, it might lead to an expensive chain halt."),(0,i.yg)("h3",{id:"slow-convergence-in-math-operations"},"Slow Convergence in Math Operations"),(0,i.yg)("p",null,"A few months ago, a security researcher ",(0,i.yg)("a",{parentName:"p",href:"https://blog.trailofbits.com/2023/10/23/numbers-turned-weapons-dos-in-osmosis-math-library/"},"reported a vulnerability")," in the Osmosis codebase stemming from ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/44a6a100a92f2984a760b41b7486fb9000ac670e/osmomath/math.go#L86"},"PowApprox function"),". The crux of the issue was centered around long-lasting convergence for certain input values. A determined attacker could in theory use such edge cases to temporarily halt the chain. ",(0,i.yg)("strong",{parentName:"p"},"The solution in these cases is simple - ",(0,i.yg)("a",{parentName:"strong",href:"https://github.com/osmosis-labs/osmosis/pull/6627"},"introduce a constant loop bound"),".")),(0,i.yg)("p",null,"As a side note, from our experience, rational approximation is a more accurate and performant substitute to Taylor expansion which is used in ",(0,i.yg)("inlineCode",{parentName:"p"},"PowApprox")," of the above example. See ",(0,i.yg)("a",{parentName:"p",href:"https://xn--2-umb.com/22/approximation/"},"this article")," for details."),(0,i.yg)("h2",{id:"key-malleability-and-prefix-iteration"},"Key Malleability and Prefix Iteration"),(0,i.yg)("p",null,"When onboarding onto the Cosmos stack, developers must familiarize themselves with its ",(0,i.yg)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.46/core/store.html"},"key/value stores"),". One particularly insidious class of bugs is related to how one sets keys when writing to these stores. Even slight mistakes in this process can lead to critical vulnerabilities that are usually simple to detect and exploit."),(0,i.yg)("h3",{id:"store-prefix-ending-in-serialized-id"},"Store Prefix Ending In Serialized ID"),(0,i.yg)("p",null,"To guarantee uniqueness, it is common to serialize IDs in a store key. However, since these IDs are often in the control of potential attackers (e.g. triggering higher pool IDs by creating more pools), some portion of the keys in these cases can be malleable."),(0,i.yg)("p",null,"One way that this frequently surfaces is when developers run a prefix iterator over keys that end in a malleable component (e.g. the pool's ID, which an attacker can increase by creating empty pools). In these cases, the iterator might include objects that were not supposed to be in the loop in the first place, meaning that an attacker can trigger unintended behavior. For instance, the prefix iteration on a key that ends with ",(0,i.yg)("inlineCode",{parentName:"p"},"42")," would also loop over ID ",(0,i.yg)("inlineCode",{parentName:"p"},"421"),", etc. A more involved example covering a concrete attack vector can be found in the appendix."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"This bug can be resolved in one of two ways:")),(0,i.yg)("p",null,"a) Add a key separator suffix to the prefix as done ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/450f7570a34876b14c61e883f2bf2ea81944f9c7/x/concentrated-liquidity/types/keys.go#L191-L195"},"here"),"."),(0,i.yg)("p",null,"b) Convert malleable numbers in keys to big-endian as done ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/450f7570a34876b14c61e883f2bf2ea81944f9c7/x/gamm/types/key.go#L60-L62"},"here"),"."),(0,i.yg)("h3",{id:"key-uniqueness"},"Key Uniqueness"),(0,i.yg)("p",null,"In many instances, it might be tempting to identify a data structure by a collection of their fields. For instance, one might want to key liquidity pools in the following way:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// KeyPool returns the key for the given pool\nfunc KeyPool(pool Pool) []byte {\n    return []byte(fmt.Sprintf("%s%s%s%s", PoolPrefix, pool.GetToken0(), pool.GetToken1(), pool.GetSpreadFactor()))\n}\n\n')),(0,i.yg)("p",null,"However, note that there can be multiple pools with the same tokens and spread factor. As a result, an existing entry could be completely overwritten. While the example above is somewhat trivial and would be easily caught by unit tests, more complex instances of this issue come up frequently enough to justify mentioning it. ",(0,i.yg)("strong",{parentName:"p"},"The solution here is to ensure that keys are unique, usually through the addition of an ID component or some equivalent.")),(0,i.yg)("h3",{id:"iterator-bounds"},"Iterator Bounds"),(0,i.yg)("p",null,"This is another simple example that sometimes catches even the most seasoned Cosmos developers. Prefix iteration is inclusive of the start byte but exclusive of the end byte."),(0,i.yg)("p",null,"As a result, iterating forwards requires initializing the iterator with the given start value. See this example from the Osmosis concentrated liquidity module:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// <https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/x/concentrated-liquidity/swapstrategy/one_for_zero.go#L204-L205>\nstartKey := types.TickIndexToBytes(currentTickIndex)\niter := prefixStore.Iterator(startKey, nil)\n\n")),(0,i.yg)("p",null,"On the other hand, iterating in reverse requires adding one more byte to the end byte of the reverse iterator:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// <https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/x/concentrated-liquidity/swapstrategy/zero_for_one.go#L202-L204>\nstartKey := types.TickIndexToBytes(currentTickIndex + 1)\niter := prefixStore.ReverseIterator(nil, startKey)\n\n")),(0,i.yg)("p",null,"Being off by one on such iterators is a frequent cause of critical vulnerabilities that are difficult to catch through testing."),(0,i.yg)("h2",{id:"fee-market-and-gas-issues"},"Fee Market and Gas Issues"),(0,i.yg)("p",null,"For developers on general-purpose chains, fees are usually treated as a black box. Thus, fee-related issues can be particularly unintuitive for those who are not used to thinking about fees as an abstraction. Regardless of whether one is implementing ",(0,i.yg)("a",{parentName:"p",href:"https://www.faulttolerant.xyz/2023-11-17-fee-credits/"},"novel fee mechanisms")," or simply running something out-of-the-box, appchain developers generally have to grapple with risks that arise from having more control over gas."),(0,i.yg)("h3",{id:"mispriced-state-writes"},"Mispriced State Writes"),(0,i.yg)("p",null,"If a data structure is written to the state during a user-executed message flow, the creation of this data structure must be bounded by a high enough fee to deter spam. If this is not done properly (i.e. either there are insufficient or no fees), then an attacker can DoS the chain similar to how they would be able to through large/unbounded compute in unmetered flows."),(0,i.yg)("p",null,"While this might seem trivial in simple cases, there are many scenarios where pricing state writes is nontrivial. This complexity generally surfaces in actions that create externalities for other users."),(0,i.yg)("p",null,"For instance, if the protocol includes logic where an arbitrary number of tokens are iterated through linearly, then each new token can potentially push an increasing cost onto the system. In such cases, additional (and scaling) gas ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/x/tokenfactory/keeper/createdenom.go#L19-L22"},"must be charged")," to ensure the protocol is not vulnerable to DoS attacks."),(0,i.yg)("h3",{id:"fees-on-contract-called-functions"},"Fees on Contract-called Functions"),(0,i.yg)("p",null,"Charging fixed fees distinct from gas is a relatively common design pattern (for instance, Osmosis charges a governance-set fee denominated in OSMO for creating pools). However, introducing such fees often results in risks in scenarios where contracts act on behalf of users. Specifically, this design pattern can cause the fees to be charged incorrectly or, in some cases, even prevent the contract from being used at all."),(0,i.yg)("p",null,"In such cases, it often makes sense to simply ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/x/tokenfactory/keeper/createdenom.go#L95-L98"},"charge the fee as additional gas")," so that it gets floated up to the caller. If this is not possible due to the fee being too high, then the fee charge needs to be factored into the design of the contract(s) triggering it."),(0,i.yg)("h3",{id:"broken-or-missing-fee-market"},"Broken or Missing Fee Market"),(0,i.yg)("p",null,"During periods of high network usage, it is critical to ensure that high-value transactions have a priority for getting on-chain. For example, liquidations can continue to happen to ensure the health of the market as long as a higher fee is provided. To achieve this, there has to be a proxy for demand. ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=62UI3Js30Io"},"EIP-1559")," is a protocol that incorporates a variable base fee that increases or decreases based on historic block sizes. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/b0aee0006ce55d0851773084bd7880db7e32ad70/x/txfees/keeper/mempool-1559"},"Osmosis recently implemented")," this directly in the mempool."),(0,i.yg)("p",null,"However, the superior long-term solution is to integrate the fee market directly into consensus by leveraging ",(0,i.yg)("inlineCode",{parentName:"p"},"ABCI 2.0"),". The Skip team has been spearheading ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/skip-mev/feemarket"},"the implementation")," of this initiative which will be released as a pluggable component that chains can integrate."),(0,i.yg)("h3",{id:"transaction-simulation-and-execution-gas-consistency"},"Transaction Simulation and Execution Gas Consistency"),(0,i.yg)("p",null,"Before submitting a transaction on-chain, clients attempt to simulate its execution to determine how much gas to provide. There is a separate execution mode for simulation that does not commit state but attempts to estimate gas."),(0,i.yg)("p",null,"Due to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/18834"},"challenges with how Cosmos SDK gas estimation works"),", the gas estimate often ends up being inconsistent with the actual execution. Many clients get around this today by multiplying their gas estimates by a constant multiplier."),(0,i.yg)("p",null,"If the chain increases gas usage in ways that are not included in simulation logic, this could break many clients at chain upgrade time until they increase their gas multipliers."),(0,i.yg)("p",null,"The specific area to pay attention to on this front is the ",(0,i.yg)("inlineCode",{parentName:"p"},"simulate")," parameter in the ",(0,i.yg)("inlineCode",{parentName:"p"},"AnteHandler")," API. An example that could cause issues might look like the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"func (mfd MyMemPoolDecorator) AnteHandle(ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler) (newCtx sdk.Context, err error) {\n    if !simulate {\n    // Do some gas intensive logic such as many store reads/writes\n    // This will lead to inconsistencies between transaction simulation and execution\n    }\n}\n\n")),(0,i.yg)("p",null,"While this does not affect chain security, it can cause severe client instability until clients update their gas estimation logic. If your appchain supports high-value and time-sensitive transactions such as ones related to collateral and leverage, such issues could be quite problematic."),(0,i.yg)("h2",{id:"closing-remarks"},"Closing Remarks"),(0,i.yg)("p",null,"Over the past few months, Cosmos has seen an influx of liquidity and users. If we as an ecosystem want to thrive and compete with centralized entities, there has to be a shared focus on security and the desire to share insights on best practices around our stack."),(0,i.yg)("p",null,"Our hope with this post was to lay the groundwork from a security standpoint for engineers onboarding onto the Cosmos SDK and appchains more broadly. While this is far from being exhaustive, it is a distillation of years of experience and scar tissue accumulated over many multi-million dollar war rooms."),(0,i.yg)("p",null,"As an ecosystem, we cannot afford recklessness or lack of security awareness. ",(0,i.yg)("strong",{parentName:"p"},"If you have any feedback or contributions you would like to see added to this post (or one of our future posts on CosmWasm and IBC), please reach out to us on Twitter/X @0xalpo and @akhtariev!")),(0,i.yg)("h2",{id:"appendix"},"Appendix"),(0,i.yg)("h3",{id:"state-machine-scope"},"State-machine Scope"),(0,i.yg)("p",null,"The state-machine scope includes the following areas:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"All messages supported by the chain, including:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Every msg's ",(0,i.yg)("inlineCode",{parentName:"li"},"ValidateBasic")," method"),(0,i.yg)("li",{parentName:"ul"},"Every msg's ",(0,i.yg)("inlineCode",{parentName:"li"},"MsgServer")," method"),(0,i.yg)("li",{parentName:"ul"},"Net gas usage, in all execution paths"),(0,i.yg)("li",{parentName:"ul"},"Errors (assuming use of Cosmos-SDK errors)"),(0,i.yg)("li",{parentName:"ul"},"State changes (namely every store write)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AnteHandler"),"s in ",(0,i.yg)("inlineCode",{parentName:"li"},"execModeFinalize")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"PostHandler"),"s in ",(0,i.yg)("inlineCode",{parentName:"li"},"execModeFinalize")),(0,i.yg)("li",{parentName:"ul"},"Cosmwasm-whitelisted queries"))),(0,i.yg)("li",{parentName:"ul"},"All BeginBlock/EndBlock logic"),(0,i.yg)("li",{parentName:"ul"},"ABCI 2.0 ",(0,i.yg)("inlineCode",{parentName:"li"},"ProcessProposal")),(0,i.yg)("li",{parentName:"ul"},"ABCI 2.0 ",(0,i.yg)("inlineCode",{parentName:"li"},"VerifyVoteExtensions"))),(0,i.yg)("p",null,"The following are NOT in the state-machine scope:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Events"),(0,i.yg)("li",{parentName:"ul"},"Queries that are not Cosmwasm-whitelisted"),(0,i.yg)("li",{parentName:"ul"},"CLI interfaces"),(0,i.yg)("li",{parentName:"ul"},"Errors (assuming use of Go-native errors)"),(0,i.yg)("li",{parentName:"ul"},"ABCI 2.0 ",(0,i.yg)("inlineCode",{parentName:"li"},"PrepareProposal")),(0,i.yg)("li",{parentName:"ul"},"ABCI 2.0 ",(0,i.yg)("inlineCode",{parentName:"li"},"ExtendVote")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"AnteHandler"),"s in any mode other than ",(0,i.yg)("inlineCode",{parentName:"li"},"execModeFinalize")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"PostHandler"),"s in any mode other than ",(0,i.yg)("inlineCode",{parentName:"li"},"execModeFinalize"))),(0,i.yg)("h3",{id:"key-malleability-and-prefix-iteration-attack-example"},"Key Malleability and Prefix Iteration Attack Example"),(0,i.yg)("p",null,"Consider the code below that checks whether the given address is the owner of a given position ID via an",(0,i.yg)("inlineCode",{parentName:"p"},"IsPositionOwner")," function. The ",(0,i.yg)("inlineCode",{parentName:"p"},"KeyAddressPoolIdPositionId")," formats the key ending with a pool ID as a string. ",(0,i.yg)("inlineCode",{parentName:"p"},"HasAnyAtPrefix")," function checks if there exists an entry at a given prefix."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// KeyAddressPoolIdPositionId returns the full key needed to store the position id for given addr + pool id + position id combination.\nfunc KeyAddressPoolIdPositionId(addr sdk.AccAddress, poolId uint64, positionId uint64) []byte {\n    return []byte(fmt.Sprintf("%s%s%x%s%d%s%d", PositionPrefix, KeySeparator, addr.Bytes(), KeySeparator, poolId, KeySeparator, positionId))\n}\n\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"IsPositionOwner(address sdk.AccAddress, positionID uint64) bool")," function checks if there exists an entry in the key-value store with the given prefix formatted per ",(0,i.yg)("inlineCode",{parentName:"p"},"KeyAddressPoolIdPositionId")," structure."),(0,i.yg)("p",null,"To achieve that, it might be tempting to use a store helper such as ",(0,i.yg)("inlineCode",{parentName:"p"},"HasAnyAtPrefix"),". Unfortunately, this would be fatal."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"// HasAnyAtPrefix returns true if there is at least one value in the given prefix.\nfunc HasAnyAtPrefix[T any](storeObj store.KVStore, prefix []byte, parseValue func([]byte) (T, error)) (bool, error) {\n    _, err := GetFirstValueInRange(storeObj, prefix, sdk.PrefixEndBytes(prefix), false, parseValue)\n    if err != nil {\n        if err == ErrNoValuesInRange {\n            return false, nil\n        }\n        return false, err\n    }\n\n    return true, nil\n}\n\n// GetFirstValueInRange returns the first value between [keyStart, keyEnd)\nfunc GetFirstValueInRange[T any](storeObj store.KVStore, keyStart []byte, keyEnd []byte, reverseIterate bool, parseValue func([]byte) (T, error)) (T, error) {\n    iterator := makeIterator(storeObj, keyStart, keyEnd, reverseIterate)\n    defer iterator.Close()\n\n    if !iterator.Valid() {\n        var blankValue T\n        return blankValue, ErrNoValuesInRange\n    }\n\n    return parseValue(iterator.Value())\n}\n\n")),(0,i.yg)("p",null,"To fully grasp the root of the issue, consider the following snapshot:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// <https://go.dev/play/p/Uzl3cqYPtG1>\nfunc test(poolId uint64) {\n    formattedString := fmt.Sprintf("%d", poolId)\n    byteSlice := []byte(formattedString)\n    fmt.Printf("Original String: %s\\\\n", formattedString)\n    fmt.Printf("Byte Slice: %v\\\\n", byteSlice)\n}\n\nfunc main() {\n    poolIDOne := uint64(42)\n    poolIDTwo := uint64(421)\n\n    // Prints:\n    // Original String: 42\n    // Byte Slice: [52 50]\n    test(poolIDOne)\n\n    // Prints:\n    // Original String: 421\n    // Byte Slice: [52 50 49]\n    test(poolIDTwo)\n}\n\n')),(0,i.yg)("p",null,"Both ",(0,i.yg)("inlineCode",{parentName:"p"},"poolIDOne")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"poolIDTwo")," have the same prefix."),(0,i.yg)("p",null,"Now, our original position existence check with ",(0,i.yg)("inlineCode",{parentName:"p"},"HasAnyAtPrefix")," would pass if it was run on ",(0,i.yg)("inlineCode",{parentName:"p"},"poolID")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"42")," when the user only owned a position ID ",(0,i.yg)("inlineCode",{parentName:"p"},"421"),". This can result in malicious users getting access to positions that they do not own."))}u.isMDXComponent=!0}}]);