"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[60912],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>p});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return t?a.createElement(p,i(i({ref:n},d),{},{components:t})):a.createElement(p,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},96555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={},i="ADR 070: Unordered Transactions",s={unversionedId:"build/architecture/adr-070-unordered-transactions",id:"version-0.52/build/architecture/adr-070-unordered-transactions",title:"ADR 070: Unordered Transactions",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-070-unordered-transactions.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-070-unordered-transactions",permalink:"/cosmos-sdk/build/architecture/adr-070-unordered-transactions",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 069: x/gov modularity, multiple choice and optimistic proposals",permalink:"/cosmos-sdk/build/architecture/adr-069-gov-improvements"},next:{title:"ADR 073: Built-in In-process Indexer",permalink:"/cosmos-sdk/build/architecture/adr-073-indexer"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Transaction Format",id:"transaction-format",level:3},{value:"Replay Protection",id:"replay-protection",level:3},{value:"AnteHandler Decorator",id:"antehandler-decorator",level:3},{value:"Transaction Hashes",id:"transaction-hashes",level:3},{value:"State Management",id:"state-management",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"References",id:"references",level:2}],d={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"adr-070-unordered-transactions"},"ADR 070: Unordered Transactions"),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Dec 4, 2023: Initial Draft (@yihuang, @tac0turtle, @alexanderbez)"),(0,r.yg)("li",{parentName:"ul"},"Jan 30, 2024: Include section on deterministic transaction encoding")),(0,r.yg)("h2",{id:"status"},"Status"),(0,r.yg)("p",null,"ACCEPTED"),(0,r.yg)("h2",{id:"abstract"},"Abstract"),(0,r.yg)("p",null,"We propose a way to do replay-attack protection without enforcing the order of\ntransactions, without requiring the use of nonces. In this way, we can support\nun-ordered transaction inclusion."),(0,r.yg)("h2",{id:"context"},"Context"),(0,r.yg)("p",null,"As of today, the nonce value (account sequence number) prevents replay-attack and\nensures the transactions from the same sender are included into blocks and executed\nin sequential order. However it makes it tricky to send many transactions from the\nsame sender concurrently in a reliable way. IBC relayer and crypto exchanges are\ntypical examples of such use cases."),(0,r.yg)("h2",{id:"decision"},"Decision"),(0,r.yg)("p",null,"We propose to add a boolean field ",(0,r.yg)("inlineCode",{parentName:"p"},"unordered"),' to transaction body to mark "un-ordered"\ntransactions.'),(0,r.yg)("p",null,"Un-ordered transactions will bypass the nonce rules and follow the rules described\nbelow instead, in contrary, the default ordered transactions are not impacted by\nthis proposal, they'll follow the nonce rules the same as before."),(0,r.yg)("p",null,"When an un-ordered transaction is included into a block, the transaction hash is\nrecorded in a dictionary. New transactions are checked against this dictionary for\nduplicates, and to prevent the dictionary grow indefinitely, the transaction must\nspecify ",(0,r.yg)("inlineCode",{parentName:"p"},"timeout_timestamp")," for expiration, so it's safe to removed it from the\ndictionary after it's expired."),(0,r.yg)("p",null,"The dictionary can be simply implemented as an in-memory golang map, a preliminary\nanalysis shows that the memory consumption won't be too big, for example ",(0,r.yg)("inlineCode",{parentName:"p"},"32M = 32 * 1024 * 1024"),"\ncan support 1024 blocks where each block contains 1024 unordered transactions. For\nsafety, we should limit the range of ",(0,r.yg)("inlineCode",{parentName:"p"},"timeout_timestamp")," to prevent very long expiration,\nand limit the size of the dictionary."),(0,r.yg)("h3",{id:"transaction-format"},"Transaction Format"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf"},"message TxBody {\n  ...\n\n  bool unordered = 4;\n}\n")),(0,r.yg)("h3",{id:"replay-protection"},"Replay Protection"),(0,r.yg)("p",null,"In order to provide replay protection, a user should ensure that the transaction's\nTTL value is relatively short-lived but long enough to provide enough time to be\nincluded in a block, e.g. ~10 minutes."),(0,r.yg)("p",null,"We facilitate this by storing the transaction's hash in a durable map, ",(0,r.yg)("inlineCode",{parentName:"p"},"UnorderedTxManager"),",\nto prevent duplicates, i.e. replay attacks. Upon transaction ingress during ",(0,r.yg)("inlineCode",{parentName:"p"},"CheckTx"),",\nwe check if the transaction's hash exists in this map or if the TTL value is stale,\ni.e. before the current block time. If so, we reject it. Upon inclusion in a block\nduring ",(0,r.yg)("inlineCode",{parentName:"p"},"DeliverTx"),", the transaction's hash is set in the map along with it's TTL\nvalue."),(0,r.yg)("p",null,"This map is evaluated at the end of each block, e.g. ABCI ",(0,r.yg)("inlineCode",{parentName:"p"},"Commit"),", and all stale\ntransactions, i.e. transactions's TTL value who's now beyond the committed block,\nare purged from the map."),(0,r.yg)("p",null,"An important point to note is that in theory, it may be possible to submit an unordered\ntransaction twice, or multiple times, before the transaction is included in a block.\nHowever, we'll note a few important layers of protection and mitigation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Assuming CometBFT is used as the underlying consensus engine and a non-noop mempool\nis used, CometBFT will reject the duplicate for you."),(0,r.yg)("li",{parentName:"ul"},"For applications that leverage ABCI++, ",(0,r.yg)("inlineCode",{parentName:"li"},"ProcessProposal")," should evaluate and reject\nmalicious proposals with duplicate transactions."),(0,r.yg)("li",{parentName:"ul"},"For applications that leverage their own application mempool, their mempool should\nreject the duplicate for you."),(0,r.yg)("li",{parentName:"ul"},"Finally, worst case if the duplicate transaction is somehow selected for a block\nproposal, 2nd and all further attempts to evaluate it, will fail during ",(0,r.yg)("inlineCode",{parentName:"li"},"DeliverTx"),",\nso worst case you just end up filling up block space with a duplicate transaction.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-golang"},"type TxHash [32]byte\n\nconst PurgeLoopSleepMS = 500\n\n// UnorderedTxManager contains the tx hash dictionary for duplicates checking,\n// and expire them when block production progresses.\ntype UnorderedTxManager struct {\n  // blockCh defines a channel to receive newly committed block time\n  blockCh chan time.Time\n\n  mu sync.RWMutex\n    // txHashes defines a map from tx hash -> TTL value, which is used for duplicate\n    // checking and replay protection, as well as purging the map when the TTL is\n    // expired.\n    txHashes map[TxHash]time.Time\n}\n\nfunc NewUnorderedTxManager() *UnorderedTxManager {\n  m := &UnorderedTxManager{\n        blockCh:  make(chan time.Time, 16),\n        txHashes: make(map[TxHash]time.Time),\n  }\n\n return m\n}\n\nfunc (m *UnorderedTxManager) Start() {\n  go m.purgeLoop()\n}\n\nfunc (m *UnorderedTxManager) Close() error {\n  close(m.blockCh)\n  m.blockCh = nil\n  return nil\n}\n\nfunc (m *UnorderedTxManager) Contains(hash TxHash)  bool{\n  m.mu.RLock()\n  defer m.mu.RUnlock()\n\n  _, ok := m.txHashes[hash]\n  return ok\n}\n\nfunc (m *UnorderedTxManager) Size() int {\n  m.mu.RLock()\n  defer m.mu.RUnlock()\n\n  return len(m.txHashes)\n}\n\nfunc (m *UnorderedTxManager) Add(hash TxHash, expire time.Time) {\n  m.mu.Lock()\n  defer m.mu.Unlock()\n\n  m.txHashes[hash] = expire\n}\n\n// OnNewBlock send the latest block time to the background purge loop, which\n// should be called in ABCI Commit event.\nfunc (m *UnorderedTxManager) OnNewBlock(blockTime time.Time) {\n  m.blockCh <- blockTime\n}\n\n// expiredTxs returns expired tx hashes based on the provided block time.\nfunc (m *UnorderedTxManager) expiredTxs(blockTime time.Time) []TxHash {\n  m.mu.RLock()\n  defer m.mu.RUnlock()\n\n  var result []TxHash\n  for txHash, expire := range m.txHashes {\n    if blockTime.After(expire) {\n      result = append(result, txHash)\n    }\n  }\n\n  return result\n}\n\nfunc (m *UnorderedTxManager) purge(txHashes []TxHash) {\n  m.mu.Lock()\n  defer m.mu.Unlock()\n\n  for _, txHash := range txHashes {\n    delete(m.txHashes, txHash)\n  }\n}\n\n\n// purgeLoop removes expired tx hashes in the background\nfunc (m *UnorderedTxManager) purgeLoop() error {\n  for {\n        latestTime, ok := m.batchReceive()\n        if !ok {\n            // channel closed\n            return\n        }\n\n        hashes := m.expiredTxs(latestTime)\n        if len(hashes) > 0 {\n            m.purge(hashes)\n        }\n    }\n}\n\n\n// channelBatchRecv try to exhaust the channel buffer when it's not empty,\n// and block when it's empty.\nfunc channelBatchRecv[T any](ch <-chan *T) []*T {\n    item := <-ch  // block if channel is empty\n    if item == nil {\n        // channel is closed\n        return nil\n    }\n\n    remaining := len(ch)\n    result := make([]*T, 0, remaining+1)\n    result = append(result, item)\n    for i := 0; i < remaining; i++ {\n        result = append(result, <-ch)\n    }\n\n    return result\n}\n")),(0,r.yg)("h3",{id:"antehandler-decorator"},"AnteHandler Decorator"),(0,r.yg)("p",null,"In order to facilitate bypassing nonce verification, we have to modify the existing\n",(0,r.yg)("inlineCode",{parentName:"p"},"IncrementSequenceDecorator")," AnteHandler decorator to skip the nonce verification\nwhen the transaction is marked as un-ordered."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-golang"},"func (isd IncrementSequenceDecorator) AnteHandle(ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler) (sdk.Context, error) {\n  if tx.UnOrdered() {\n    return next(ctx, tx, simulate)\n  }\n\n  // ...\n}\n")),(0,r.yg)("p",null,"In addition, we need to introduce a new decorator to perform the un-ordered transaction\nverification and map lookup."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-golang"},'const (\n    // DefaultMaxTimeoutDuration defines the default maximum duration an un-ordered transaction\n    // can set.\n    DefaultMaxTimeoutDuration = time.Minute * 40\n)\n\ntype DedupTxDecorator struct {\n  m *UnorderedTxManager\n  maxTimeoutDuration time.Time\n}\n\nfunc (d *DedupTxDecorator) AnteHandle(ctx sdk.Context, tx sdk.Tx, simulate bool, next sdk.AnteHandler) (sdk.Context, error) {\n  // only apply to un-ordered transactions\n  if !tx.UnOrdered() {\n    return next(ctx, tx, simulate)\n  }\n\n  headerInfo := d.env.HeaderService.HeaderInfo(ctx)\n    timeoutTimestamp := unorderedTx.GetTimeoutTimeStamp()\n    if timeoutTimestamp.IsZero() || timeoutTimestamp.Unix() == 0 {\n        return ctx, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "unordered transaction must have timeout_timestamp set")\n    }\n    if timeoutTimestamp.Before(headerInfo.Time) {\n        return ctx, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "unordered transaction has a timeout_timestamp that has already passed")\n    }\n    if timeoutTimestamp.After(headerInfo.Time.Add(d.maxTimeoutDuration)) {\n        return ctx, errorsmod.Wrapf(sdkerrors.ErrInvalidRequest, "unordered tx ttl exceeds %s", d.maxTimeoutDuration.String())\n    }\n\n    // in order to create a deterministic hash based on the tx, we need to hash the contents of the tx with signature\n    // Get a Buffer from the pool\n    buf := bufPool.Get().(*bytes.Buffer)\n    // Make sure to reset the buffer\n    buf.Reset()\n\n    // Use the buffer\n    for _, msg := range tx.GetMsgs() {\n        // loop through the messages and write them to the buffer\n        // encoding the msg to bytes makes it deterministic within the state machine.\n        // Malleability is not a concern here because the state machine will encode the transaction deterministically.\n        bz, err := proto.Marshal(msg)\n        if err != nil {\n            return ctx, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "failed to marshal message")\n        }\n\n        buf.Write(bz)\n    }\n\n  // check for duplicates\n    // check for duplicates\n    if d.txManager.Contains(txHash) {\n        return ctx, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "tx %X is duplicated")\n    }\n\n    if d.env.TransactionService.ExecMode(ctx) == transaction.ExecModeFinalize {\n        // a new tx included in the block, add the hash to the unordered tx manager\n        d.txManager.Add(txHash, ttl)\n    }\n\n  return next(ctx, tx, simulate)\n}\n')),(0,r.yg)("h3",{id:"transaction-hashes"},"Transaction Hashes"),(0,r.yg)("p",null,"It is absolutely vital that transaction hashes are deterministic, i.e. transaction\nencoding is not malleable. If a given transaction, which is otherwise valid, can\nbe encoded to produce different hashes, which reflect the same valid transaction,\nthen a duplicate unordered transaction can be submitted and included in a block."),(0,r.yg)("p",null,"In order to prevent this, the decoded transaction contents is taken. Starting with the content of the transaction we marshal the transaction in order to prevent a client reordering the transaction. Next we include the gas and timeout timestamp as part of the identifier. All these fields are signed over in the transaction payload. If one of them changes the signature will not match the transaction. "),(0,r.yg)("h3",{id:"state-management"},"State Management"),(0,r.yg)("p",null,"On start up, the node needs to ensure the TxManager's state contains all un-expired\ntransactions that have been committed to the chain. This is critical since if the\nstate is not properly initialized, the node will not reject duplicate transactions\nand thus will not provide replay protection, and will likely get an app hash mismatch error."),(0,r.yg)("p",null,"We propose to write all un-expired unordered transactions from the TxManager's to\nfile on disk. On start up, the node will read this file and re-populate the TxManager's\nmap. The write to file will happen when the node gracefully shuts down on ",(0,r.yg)("inlineCode",{parentName:"p"},"Close()"),"."),(0,r.yg)("p",null,"Note, this is not a perfect solution, in the context of store v1. With store v2,\nwe can omit explicit file handling altogether and simply write the all the transactions\nto non-consensus state, i.e State Storage (SS)."),(0,r.yg)("p",null,"Alternatively, we can write all the transactions to consensus state."),(0,r.yg)("h2",{id:"consequences"},"Consequences"),(0,r.yg)("h3",{id:"positive"},"Positive"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support un-ordered and concurrent transaction inclusion.")),(0,r.yg)("h3",{id:"negative"},"Negative"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Requires additional storage overhead and management of processed unordered\ntransactions that exist outside of consensus state.")),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/13009"},"https://github.com/cosmos/cosmos-sdk/issues/13009"))))}m.isMDXComponent=!0}}]);