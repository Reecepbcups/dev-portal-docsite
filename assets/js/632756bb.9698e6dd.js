"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[40190],{15680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>m});var a=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=s,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(58168),s=(n(96540),n(15680));const o={},i="ADR 049: State Sync Hooks",r={unversionedId:"build/architecture/adr-049-state-sync-hooks",id:"version-0.52/build/architecture/adr-049-state-sync-hooks",title:"ADR 049: State Sync Hooks",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.52/build/architecture/adr-049-state-sync-hooks.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-049-state-sync-hooks",permalink:"/cosmos-sdk/build/architecture/adr-049-state-sync-hooks",draft:!1,tags:[],version:"0.52",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 048: Multi Tire Gas Price System",permalink:"/cosmos-sdk/build/architecture/adr-048-consensus-fees"},next:{title:"ADR 050: SIGN_MODE_TEXTUAL: Annex 1 Value Renderers",permalink:"/cosmos-sdk/build/architecture/adr-050-sign-mode-textual-annex1"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Test Cases optional",id:"test-cases-optional",level:2},{value:"References",id:"references",level:2}],h={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.yg)(d,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"adr-049-state-sync-hooks"},"ADR 049: State Sync Hooks"),(0,s.yg)("h2",{id:"changelog"},"Changelog"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Jan 19, 2022: Initial Draft"),(0,s.yg)("li",{parentName:"ul"},"Apr 29, 2022: Safer extension snapshotter interface")),(0,s.yg)("h2",{id:"status"},"Status"),(0,s.yg)("p",null,"Implemented"),(0,s.yg)("h2",{id:"abstract"},"Abstract"),(0,s.yg)("p",null,"This ADR outlines a hooks-based mechanism for application modules to provide additional state (outside of the IAVL tree) to be used\nduring state sync."),(0,s.yg)("h2",{id:"context"},"Context"),(0,s.yg)("p",null,"New clients use state-sync to download snapshots of module state from peers. Currently, the snapshot consists of a\nstream of ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotStoreItem")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotIAVLItem"),", which means that application modules that define their state outside of the IAVL\ntree cannot include their state as part of the state-sync process."),(0,s.yg)("p",null,"Note, Even though the module state data is outside of the tree, for determinism we require that the hash of the external data should\nbe posted in the IAVL tree."),(0,s.yg)("h2",{id:"decision"},"Decision"),(0,s.yg)("p",null,"A simple proposal based on our existing implementation is that, we can add two new message types: ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotExtensionMeta"),"\nand ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotExtensionPayload"),", and they are appended to the existing multi-store stream with ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotExtensionMeta"),"\nacting as a delimiter between extensions. As the chunk hashes should be able to ensure data integrity, we don't need\na delimiter to mark the end of the snapshot stream."),(0,s.yg)("p",null,"Besides, we provide ",(0,s.yg)("inlineCode",{parentName:"p"},"Snapshotter")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter")," interface for modules to implement snapshotters, which will handle both taking\nsnapshot and the restoration. Each module could have multiple snapshotters, and for modules with additional state, they should\nimplement ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter")," as extension snapshotters. When setting up the application, the snapshot ",(0,s.yg)("inlineCode",{parentName:"p"},"Manager")," should call\n",(0,s.yg)("inlineCode",{parentName:"p"},"RegisterExtensions([]ExtensionSnapshotter\u2026)")," to register all the extension snapshotters."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-protobuf"},'// SnapshotItem is an item contained in a rootmulti.Store snapshot.\n// On top of the existing SnapshotStoreItem and SnapshotIAVLItem, we add two new options for the item.\nmessage SnapshotItem {\n  // item is the specific type of snapshot item.\n  oneof item {\n    SnapshotStoreItem        store             = 1;\n    SnapshotIAVLItem         iavl              = 2 [(gogoproto.customname) = "IAVL"];\n    SnapshotExtensionMeta    extension         = 3;\n    SnapshotExtensionPayload extension_payload = 4;\n  }\n}\n\n// SnapshotExtensionMeta contains metadata about an external snapshotter.\n// One module may need multiple snapshotters, so each module may have multiple SnapshotExtensionMeta.\nmessage SnapshotExtensionMeta {\n  // the name of the ExtensionSnapshotter, and it is registered to snapshotter manager when setting up the application\n  // name should be unique for each ExtensionSnapshotter as we need to alphabetically order their snapshots to get\n  // deterministic snapshot stream.\n  string name   = 1;\n  // this is used by each ExtensionSnapshotter to decide the format of payloads included in SnapshotExtensionPayload message\n  // it is used within the snapshotter/namespace, not global one for all modules\n  uint32 format = 2;\n}\n\n// SnapshotExtensionPayload contains payloads of an external snapshotter.\nmessage SnapshotExtensionPayload {\n  bytes payload = 1;\n}\n')),(0,s.yg)("p",null,"When we create a snapshot stream, the ",(0,s.yg)("inlineCode",{parentName:"p"},"multistore")," snapshot is always placed at the beginning of the binary stream, and other extension snapshots are alphabetically ordered by the name of the corresponding ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter"),". "),(0,s.yg)("p",null,"The snapshot stream would look like as follows:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"// multi-store snapshot\n{SnapshotStoreItem | SnapshotIAVLItem, ...}\n// extension1 snapshot\nSnapshotExtensionMeta\n{SnapshotExtensionPayload, ...}\n// extension2 snapshot\nSnapshotExtensionMeta\n{SnapshotExtensionPayload, ...}\n")),(0,s.yg)("p",null,"We add an ",(0,s.yg)("inlineCode",{parentName:"p"},"extensions")," field to snapshot ",(0,s.yg)("inlineCode",{parentName:"p"},"Manager")," for extension snapshotters. The ",(0,s.yg)("inlineCode",{parentName:"p"},"multistore")," snapshotter is a special one and it doesn't need a name because it is always placed at the beginning of the binary stream."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"type Manager struct {\n    store      *Store\n    multistore types.Snapshotter\n    extensions map[string]types.ExtensionSnapshotter\n    mtx                sync.Mutex\n    operation          operation\n    chRestore          chan<- io.ReadCloser\n    chRestoreDone      <-chan restoreDone\n    restoreChunkHashes [][]byte\n    restoreChunkIndex  uint32\n}\n")),(0,s.yg)("p",null,"For extension snapshotters that implement the ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter")," interface, their names should be registered to the snapshot ",(0,s.yg)("inlineCode",{parentName:"p"},"Manager")," by\ncalling ",(0,s.yg)("inlineCode",{parentName:"p"},"RegisterExtensions")," when setting up the application. The snapshotters will handle both taking snapshot and restoration."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"// RegisterExtensions register extension snapshotters to manager\nfunc (m *Manager) RegisterExtensions(extensions ...types.ExtensionSnapshotter) error \n")),(0,s.yg)("p",null,"On top of the existing ",(0,s.yg)("inlineCode",{parentName:"p"},"Snapshotter")," interface for the ",(0,s.yg)("inlineCode",{parentName:"p"},"multistore"),", we add ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter")," interface for the extension snapshotters. Three more function signatures: ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotFormat()"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"SupportedFormats()")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"SnapshotName()")," are added to ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-go"},"// ExtensionPayloadReader read extension payloads,\n// it returns io.EOF when reached either end of stream or the extension boundaries.\ntype ExtensionPayloadReader = func() ([]byte, error)\n\n// ExtensionPayloadWriter is a helper to write extension payloads to underlying stream.\ntype ExtensionPayloadWriter = func([]byte) error\n\n// ExtensionSnapshotter is an extension Snapshotter that is appended to the snapshot stream.\n// ExtensionSnapshotter has an unique name and manages it's own internal formats.\ntype ExtensionSnapshotter interface {\n    // SnapshotName returns the name of snapshotter, it should be unique in the manager.\n    SnapshotName() string\n\n    // SnapshotFormat returns the default format used to take a snapshot.\n    SnapshotFormat() uint32\n\n    // SupportedFormats returns a list of formats it can restore from.\n    SupportedFormats() []uint32\n\n    // SnapshotExtension writes extension payloads into the underlying protobuf stream.\n    SnapshotExtension(height uint64, payloadWriter ExtensionPayloadWriter) error\n\n    // RestoreExtension restores an extension state snapshot,\n    // the payload reader returns `io.EOF` when reached the extension boundaries.\n    RestoreExtension(height uint64, format uint32, payloadReader ExtensionPayloadReader) error\n\n}\n")),(0,s.yg)("h2",{id:"consequences"},"Consequences"),(0,s.yg)("p",null,"As a result of this implementation, we are able to create snapshots of binary chunk stream for the state that we maintain outside of the IAVL Tree, CosmWasm blobs for example. And new clients are able to fetch snapshots of state for all modules that have implemented the corresponding interface from peer nodes."),(0,s.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,s.yg)("p",null,"This ADR introduces new proto message types, add an ",(0,s.yg)("inlineCode",{parentName:"p"},"extensions")," field in snapshot ",(0,s.yg)("inlineCode",{parentName:"p"},"Manager"),", and add new ",(0,s.yg)("inlineCode",{parentName:"p"},"ExtensionSnapshotter")," interface, so this is not backwards compatible if we have extensions."),(0,s.yg)("p",null,"But for applications that does not have the state data outside of the IAVL tree for any module, the snapshot stream is backwards-compatible."),(0,s.yg)("h3",{id:"positive"},"Positive"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"State maintained outside of IAVL tree like CosmWasm blobs can create snapshots by implementing extension snapshotters, and being fetched by new clients via state-sync.")),(0,s.yg)("h3",{id:"negative"},"Negative"),(0,s.yg)("h3",{id:"neutral"},"Neutral"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"All modules that maintain state outside of IAVL tree need to implement ",(0,s.yg)("inlineCode",{parentName:"li"},"ExtensionSnapshotter")," and the snapshot ",(0,s.yg)("inlineCode",{parentName:"li"},"Manager")," need to call ",(0,s.yg)("inlineCode",{parentName:"li"},"RegisterExtensions")," when setting up the application.")),(0,s.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,s.yg)("p",null,"While an ADR is in the DRAFT or PROPOSED stage, this section should contain a summary of issues to be solved in future iterations (usually referencing comments from a pull-request discussion).\nLater, this section can optionally list ideas or improvements the author or reviewers found during the analysis of this ADR."),(0,s.yg)("h2",{id:"test-cases-optional"},"Test Cases ","[optional]"),(0,s.yg)("p",null,"Test cases for an implementation are mandatory for ADRs that are affecting consensus changes. Other ADRs can choose to include links to test cases if applicable."),(0,s.yg)("h2",{id:"references"},"References"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10961"},"https://github.com/cosmos/cosmos-sdk/pull/10961")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/7340"},"https://github.com/cosmos/cosmos-sdk/issues/7340"))))}u.isMDXComponent=!0}}]);