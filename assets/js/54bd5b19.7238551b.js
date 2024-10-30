"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[63861],{15680:(e,a,s)=>{s.d(a,{xA:()=>u,yg:()=>h});var t=s(96540);function n(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function i(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?i(Object(s),!0).forEach((function(a){n(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function r(e,a){if(null==e)return{};var s,t,n=function(e,a){if(null==e)return{};var s,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=t.createContext({}),d=function(e){var a=t.useContext(l),s=a;return e&&(s="function"==typeof e?e(a):o(o({},a),e)),s},u=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var s=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(s),y=n,h=p["".concat(l,".").concat(y)]||p[y]||c[y]||i;return s?t.createElement(h,o(o({ref:a},u),{},{components:s})):t.createElement(h,o({ref:a},u))}));function h(e,a){var s=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=s.length,o=new Array(i);o[0]=y;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[p]="string"==typeof e?e:n,o[1]=r;for(var d=2;d<i;d++)o[d]=s[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}y.displayName="MDXCreateElement"},90270:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(58168),n=(s(96540),s(15680));const i={},o="ADR 028: Public Key Addresses",r={unversionedId:"build/architecture/adr-028-public-key-addresses",id:"version-0.50/build/architecture/adr-028-public-key-addresses",title:"ADR 028: Public Key Addresses",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-028-public-key-addresses.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-028-public-key-addresses",permalink:"/cosmos-sdk/0.50/build/architecture/adr-028-public-key-addresses",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 027: Deterministic Protobuf Serialization",permalink:"/cosmos-sdk/0.50/build/architecture/adr-027-deterministic-protobuf-serialization"},next:{title:"ADR 029: Fee Grant Module",permalink:"/cosmos-sdk/0.50/build/architecture/adr-029-fee-grant-module"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Problem",id:"problem",level:3},{value:"Initial proposals",id:"initial-proposals",level:3},{value:"Review and Discussions",id:"review-and-discussions",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Scope",id:"scope",level:3},{value:"Decision",id:"decision",level:2},{value:"Legacy Public Key Addresses Don&#39;t Change",id:"legacy-public-key-addresses-dont-change",level:3},{value:"Hash Function Choice",id:"hash-function-choice",level:3},{value:"Basic Address",id:"basic-address",level:3},{value:"Composed Addresses",id:"composed-addresses",level:3},{value:"Multisig Addresses",id:"multisig-addresses",level:4},{value:"Derived Addresses",id:"derived-addresses",level:3},{value:"Module Account Addresses",id:"module-account-addresses",level:3},{value:"Schema Types",id:"schema-types",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Appendix: Consulting session",id:"appendix-consulting-session",level:2},{value:"References",id:"references",level:3}],u={toc:d},p="wrapper";function c(e){let{components:a,...s}=e;return(0,n.yg)(p,(0,t.A)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"adr-028-public-key-addresses"},"ADR 028: Public Key Addresses"),(0,n.yg)("h2",{id:"changelog"},"Changelog"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"2020/08/18: Initial version"),(0,n.yg)("li",{parentName:"ul"},"2021/01/15: Analysis and algorithm update")),(0,n.yg)("h2",{id:"status"},"Status"),(0,n.yg)("p",null,"Proposed"),(0,n.yg)("h2",{id:"abstract"},"Abstract"),(0,n.yg)("p",null,"This ADR defines an address format for all addressable Cosmos SDK accounts. That includes: new public key algorithms, multisig public keys, and module accounts."),(0,n.yg)("h2",{id:"context"},"Context"),(0,n.yg)("p",null,"Issue ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/3685"},"#","3685")," identified that public key\naddress spaces are currently overlapping. We confirmed that it significantly decreases security of Cosmos SDK."),(0,n.yg)("h3",{id:"problem"},"Problem"),(0,n.yg)("p",null,"An attacker can control an input for an address generation function. This leads to a birthday attack, which significantly decreases the security space.\nTo overcome this, we need to separate the inputs for different kind of account types:\na security break of one account type shouldn't impact the security of other account types."),(0,n.yg)("h3",{id:"initial-proposals"},"Initial proposals"),(0,n.yg)("p",null,"One initial proposal was extending the address length and\nadding prefixes for different types of addresses."),(0,n.yg)("p",null,"@ethanfrey explained an alternate approach originally used in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/iov-one/weave"},"https://github.com/iov-one/weave"),":"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"I spent quite a bit of time thinking about this issue while building weave... The other cosmos Sdk.\nBasically I define a condition to be a type and format as human readable string with some binary data appended. This condition is hashed into an Address (again at 20 bytes). The use of this prefix makes it impossible to find a preimage for a given address with a different condition (eg ed25519 vs secp256k1).\nThis is explained in depth here ",(0,n.yg)("a",{parentName:"p",href:"https://weave.readthedocs.io/en/latest/design/permissions.html"},"https://weave.readthedocs.io/en/latest/design/permissions.html"),"\nAnd the code is here, look mainly at the top where we process conditions. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/iov-one/weave/blob/master/conditions.go"},"https://github.com/iov-one/weave/blob/master/conditions.go"))),(0,n.yg)("p",null,"And explained how this approach should be sufficiently collision resistant:"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Yeah, AFAIK, 20 bytes should be collision resistance when the preimages are unique and not malleable. A space of 2^160 would expect some collision to be likely around 2^80 elements (birthday paradox). And if you want to find a collision for some existing element in the database, it is still 2^160. 2^80 only is if all these elements are written to state.\nThe good example you brought up was eg. a public key bytes being a valid public key on two algorithms supported by the codec. Meaning if either was broken, you would break accounts even if they were secured with the safer variant. This is only as the issue when no differentiating type info is present in the preimage (before hashing into an address).\nI would like to hear an argument if the 20 bytes space is an actual issue for security, as I would be happy to increase my address sizes in weave. I just figured cosmos and ethereum and bitcoin all use 20 bytes, it should be good enough. And the arguments above which made me feel it was secure. But I have not done a deeper analysis.")),(0,n.yg)("p",null,"This led to the first proposal (which we proved to be not good enough):\nwe concatenate a key type with a public key, hash it and take the first 20 bytes of that hash, summarized as ",(0,n.yg)("inlineCode",{parentName:"p"},"sha256(keyTypePrefix || keybytes)[:20]"),"."),(0,n.yg)("h3",{id:"review-and-discussions"},"Review and Discussions"),(0,n.yg)("p",null,"In ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/5694"},"#","5694")," we discussed various solutions.\nWe agreed that 20 bytes it's not future proof, and extending the address length is the only way to allow addresses of different types, various signature types, etc.\nThis disqualifies the initial proposal."),(0,n.yg)("p",null,"In the issue we discussed various modifications:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Choice of the hash function."),(0,n.yg)("li",{parentName:"ul"},"Move the prefix out of the hash function: ",(0,n.yg)("inlineCode",{parentName:"li"},"keyTypePrefix + sha256(keybytes)[:20]")," ","[post-hash-prefix-proposal]","."),(0,n.yg)("li",{parentName:"ul"},"Use double hashing: ",(0,n.yg)("inlineCode",{parentName:"li"},"sha256(keyTypePrefix + sha256(keybytes)[:20])"),"."),(0,n.yg)("li",{parentName:"ul"},"Increase to keybytes hash slice from 20 byte to 32 or 40 bytes. We concluded that 32 bytes, produced by a good hash functions is future secure.")),(0,n.yg)("h3",{id:"requirements"},"Requirements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Support currently used tools - we don't want to break an ecosystem, or add a long adaptation period. Ref: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/8041"},"https://github.com/cosmos/cosmos-sdk/issues/8041")),(0,n.yg)("li",{parentName:"ul"},"Try to keep the address length small - addresses are widely used in state, both as part of a key and object value.")),(0,n.yg)("h3",{id:"scope"},"Scope"),(0,n.yg)("p",null,"This ADR only defines a process for the generation of address bytes. For end-user interactions with addresses (through the API, or CLI, etc.), we still use bech32 to format these addresses as strings. This ADR doesn't change that.\nUsing Bech32 for string encoding gives us support for checksum error codes and handling of user typos."),(0,n.yg)("h2",{id:"decision"},"Decision"),(0,n.yg)("p",null,"We define the following account types, for which we define the address function:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"simple accounts: represented by a regular public key (ie: secp256k1, sr25519)"),(0,n.yg)("li",{parentName:"ol"},"naive multisig: accounts composed by other addressable objects (ie: naive multisig)"),(0,n.yg)("li",{parentName:"ol"},"composed accounts with a native address key (ie: bls, group module accounts)"),(0,n.yg)("li",{parentName:"ol"},"module accounts: basically any accounts which cannot sign transactions and which are managed internally by modules")),(0,n.yg)("h3",{id:"legacy-public-key-addresses-dont-change"},"Legacy Public Key Addresses Don't Change"),(0,n.yg)("p",null,"Currently (Jan 2021), the only officially supported Cosmos SDK user accounts are ",(0,n.yg)("inlineCode",{parentName:"p"},"secp256k1")," basic accounts and legacy amino multisig.\nThey are used in existing Cosmos SDK zones. They use the following address formats:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"secp256k1: ",(0,n.yg)("inlineCode",{parentName:"li"},"ripemd160(sha256(pk_bytes))[:20]")),(0,n.yg)("li",{parentName:"ul"},"legacy amino multisig: ",(0,n.yg)("inlineCode",{parentName:"li"},"sha256(aminoCdc.Marshal(pk))[:20]"))),(0,n.yg)("p",null,"We don't want to change existing addresses. So the addresses for these two key types will remain the same."),(0,n.yg)("p",null,'The current multisig public keys use amino serialization to generate the address. We will retain\nthose public keys and their address formatting, and call them "legacy amino" multisig public keys\nin protobuf. We will also create multisig public keys without amino addresses to be described below.'),(0,n.yg)("h3",{id:"hash-function-choice"},"Hash Function Choice"),(0,n.yg)("p",null,"As in other parts of the Cosmos SDK, we will use ",(0,n.yg)("inlineCode",{parentName:"p"},"sha256"),"."),(0,n.yg)("h3",{id:"basic-address"},"Basic Address"),(0,n.yg)("p",null,"We start with defining a base algorithm for generating addresses which we will call ",(0,n.yg)("inlineCode",{parentName:"p"},"Hash"),". Notably, it's used for accounts represented by a single key pair. For each public key schema we have to have an associated ",(0,n.yg)("inlineCode",{parentName:"p"},"typ")," string, explained in the next section. ",(0,n.yg)("inlineCode",{parentName:"p"},"hash")," is the cryptographic hash function defined in the previous section."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"const A_LEN = 32\n\nfunc Hash(typ string, key []byte) []byte {\n    return hash(hash(typ) + key)[:A_LEN]\n}\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"+")," is bytes concatenation, which doesn't use any separator."),(0,n.yg)("p",null,"This algorithm is the outcome of a consultation session with a professional cryptographer.\nMotivation: this algorithm keeps the address relatively small (length of the ",(0,n.yg)("inlineCode",{parentName:"p"},"typ")," doesn't impact the length of the final address)\nand it's more secure than ","[post-hash-prefix-proposal]"," (which uses the first 20 bytes of a pubkey hash, significantly reducing the address space).\nMoreover the cryptographer motivated the choice of adding ",(0,n.yg)("inlineCode",{parentName:"p"},"typ")," in the hash to protect against a switch table attack."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"address.Hash")," is a low level function to generate ",(0,n.yg)("em",{parentName:"p"},"base")," addresses for new key types. Example:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"BLS: ",(0,n.yg)("inlineCode",{parentName:"li"},'address.Hash("bls", pubkey)'))),(0,n.yg)("h3",{id:"composed-addresses"},"Composed Addresses"),(0,n.yg)("p",null,"For simple composed accounts (like a new naive multisig) we generalize the ",(0,n.yg)("inlineCode",{parentName:"p"},"address.Hash"),". The address is constructed by recursively creating addresses for the sub accounts, sorting the addresses and composing them into a single address. It ensures that the ordering of keys doesn't impact the resulting address."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"// We don't need a PubKey interface - we need anything which is addressable.\ntype Addressable interface {\n    Address() []byte\n}\n\nfunc Composed(typ string, subaccounts []Addressable) []byte {\n    addresses = map(subaccounts, \\a -> LengthPrefix(a.Address()))\n    addresses = sort(addresses)\n    return address.Hash(typ, addresses[0] + ... + addresses[n])\n}\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"typ")," parameter should be a schema descriptor, containing all significant attributes with deterministic serialization (eg: utf8 string).\n",(0,n.yg)("inlineCode",{parentName:"p"},"LengthPrefix")," is a function which prepends 1 byte to the address. The value of that byte is the length of the address bits before prepending. The address must be at most 255 bits long.\nWe are using ",(0,n.yg)("inlineCode",{parentName:"p"},"LengthPrefix")," to eliminate conflicts - it assures, that for 2 lists of addresses: ",(0,n.yg)("inlineCode",{parentName:"p"},"as = {a1, a2, ..., an}")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"bs = {b1, b2, ..., bm}")," such that every ",(0,n.yg)("inlineCode",{parentName:"p"},"bi")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"ai")," is at most 255 long, ",(0,n.yg)("inlineCode",{parentName:"p"},"concatenate(map(as, (a) => LengthPrefix(a))) = map(bs, (b) => LengthPrefix(b))")," if ",(0,n.yg)("inlineCode",{parentName:"p"},"as = bs"),"."),(0,n.yg)("p",null,"Implementation Tip: account implementations should cache addresses."),(0,n.yg)("h4",{id:"multisig-addresses"},"Multisig Addresses"),(0,n.yg)("p",null,"For a new multisig public keys, we define the ",(0,n.yg)("inlineCode",{parentName:"p"},"typ")," parameter not based on any encoding scheme (amino or protobuf). This avoids issues with non-determinism in the encoding scheme."),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"package cosmos.crypto.multisig;\n\nmessage PubKey {\n  uint32 threshold = 1;\n  repeated google.protobuf.Any pubkeys = 2;\n}\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},'func (multisig PubKey) Address() {\n    // first gather all nested pub keys\n    var keys []address.Addressable  // cryptotypes.PubKey implements Addressable\n    for _, _key := range multisig.Pubkeys {\n        keys = append(keys, key.GetCachedValue().(cryptotypes.PubKey))\n    }\n\n    // form the type from the message name (cosmos.crypto.multisig.PubKey) and the threshold joined together\n    prefix := fmt.Sprintf("%s/%d", proto.MessageName(multisig), multisig.Threshold)\n\n    // use the Composed function defined above\n    return address.Composed(prefix, keys)\n}\n')),(0,n.yg)("h3",{id:"derived-addresses"},"Derived Addresses"),(0,n.yg)("p",null,"We must be able to cryptographically derive one address from another one. The derivation process must guarantee hash properties, hence we use the already defined ",(0,n.yg)("inlineCode",{parentName:"p"},"Hash")," function:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"func Derive(address, derivationKey []byte) []byte {\n    return Hash(addres, derivationKey)\n}\n")),(0,n.yg)("h3",{id:"module-account-addresses"},"Module Account Addresses"),(0,n.yg)("p",null,"A module account will have ",(0,n.yg)("inlineCode",{parentName:"p"},'"module"')," type. Module accounts can have sub accounts. The submodule account will be created based on module name, and sequence of derivation keys. Typically, the first derivation key should be a class of the derived accounts. The derivation process has a defined order: module name, submodule key, subsubmodule key... An example module account is created using:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"address.Module(moduleName, key)\n")),(0,n.yg)("p",null,"An example sub-module account is created using:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},"groupPolicyAddresses := []byte{1}\naddress.Module(moduleName, groupPolicyAddresses, policyID)\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"address.Module")," function is using ",(0,n.yg)("inlineCode",{parentName:"p"},"address.Hash")," with ",(0,n.yg)("inlineCode",{parentName:"p"},'"module"'),' as the type argument, and byte representation of the module name concatenated with submodule key. The two last component must be uniquely separated to avoid potential clashes (example: modulename="ab" & submodulekey="bc" will have the same derivation key as modulename="a" & submodulekey="bbc").\nWe use a null byte (',(0,n.yg)("inlineCode",{parentName:"p"},"'\\x00'"),") to separate module name from the submodule key. This works, because null byte is not a part of a valid module name. Finally, the sub-submodule accounts are created by applying the ",(0,n.yg)("inlineCode",{parentName:"p"},"Derive")," function recursively.\nWe could use ",(0,n.yg)("inlineCode",{parentName:"p"},"Derive")," function also in the first step (rather than concatenating module name with zero byte and the submodule key). We decided to do concatenation to avoid one level of derivation and speed up computation."),(0,n.yg)("p",null,"For backward compatibility with the existing ",(0,n.yg)("inlineCode",{parentName:"p"},"authtypes.NewModuleAddress"),", we add a special case in ",(0,n.yg)("inlineCode",{parentName:"p"},"Module"),' function: when no derivation key is provided, we fallback to the "legacy" implementation. '),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},'func Module(moduleName string, derivationKeys ...[]byte) []byte{\n    if len(derivationKeys) == 0 {\n        return authtypes.NewModuleAddress(modulenName)  // legacy case\n    }\n    submoduleAddress := Hash("module", []byte(moduleName) + 0 + key)\n    return fold((a, k) => Derive(a, k), subsubKeys, submoduleAddress)\n}\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example 1"),"  A lending BTC pool address would be:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},'btcPool := address.Module("lending", btc.Address()})\n')),(0,n.yg)("p",null,"If we want to create an address for a module account depending on more than one key, we can concatenate them:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},'btcAtomAMM := address.Module("amm", btc.Address() + atom.Address()})\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example 2"),"  a smart-contract address could be constructed by:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-go"},'smartContractAddr = Module("mySmartContractVM", smartContractsNamespace, smartContractKey})\n\n// which equals to:\nsmartContractAddr = Derived(\n    Module("mySmartContractVM", smartContractsNamespace), \n    []{smartContractKey})\n')),(0,n.yg)("h3",{id:"schema-types"},"Schema Types"),(0,n.yg)("p",null,"A ",(0,n.yg)("inlineCode",{parentName:"p"},"typ")," parameter used in ",(0,n.yg)("inlineCode",{parentName:"p"},"Hash")," function SHOULD be unique for each account type.\nSince all Cosmos SDK account types are serialized in the state, we propose to use the protobuf message name string."),(0,n.yg)("p",null,"Example: all public key types have a unique protobuf message type similar to:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-protobuf"},"package cosmos.crypto.sr25519;\n\nmessage PubKey {\n    bytes key = 1;\n}\n")),(0,n.yg)("p",null,"All protobuf messages have unique fully qualified names, in this example ",(0,n.yg)("inlineCode",{parentName:"p"},"cosmos.crypto.sr25519.PubKey"),".\nThese names are derived directly from .proto files in a standardized way and used\nin other places such as the type URL in ",(0,n.yg)("inlineCode",{parentName:"p"},"Any"),"s. We can easily obtain the name using\n",(0,n.yg)("inlineCode",{parentName:"p"},"proto.MessageName(msg)"),"."),(0,n.yg)("h2",{id:"consequences"},"Consequences"),(0,n.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,n.yg)("p",null,"This ADR is compatible with what was committed and directly supported in the Cosmos SDK repository."),(0,n.yg)("h3",{id:"positive"},"Positive"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"a simple algorithm for generating addresses for new public keys, complex accounts and modules"),(0,n.yg)("li",{parentName:"ul"},"the algorithm generalizes ",(0,n.yg)("em",{parentName:"li"},"native composed keys")),(0,n.yg)("li",{parentName:"ul"},"increased security and collision resistance of addresses"),(0,n.yg)("li",{parentName:"ul"},"the approach is extensible for future use-cases - one can use other address types, as long as they don't conflict with the address length specified here (20 or 32 bytes)."),(0,n.yg)("li",{parentName:"ul"},"support new account types.")),(0,n.yg)("h3",{id:"negative"},"Negative"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"addresses do not communicate key type, a prefixed approach would have done this"),(0,n.yg)("li",{parentName:"ul"},"addresses are 60% longer and will consume more storage space"),(0,n.yg)("li",{parentName:"ul"},"requires a refactor of KVStore store keys to handle variable length addresses")),(0,n.yg)("h3",{id:"neutral"},"Neutral"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"protobuf message names are used as key type prefixes")),(0,n.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,n.yg)("p",null,"Some accounts can have a fixed name or may be constructed in other way (eg: modules). We were discussing an idea of an account with a predefined name (eg: ",(0,n.yg)("inlineCode",{parentName:"p"},"me.regen"),"), which could be used by institutions.\nWithout going into details, these kinds of addresses are compatible with the hash based addresses described here as long as they don't have the same length.\nMore specifically, any special account address must not have a length equal to 20 or 32 bytes."),(0,n.yg)("h2",{id:"appendix-consulting-session"},"Appendix: Consulting session"),(0,n.yg)("p",null,"End of Dec 2020 we had a session with ",(0,n.yg)("a",{parentName:"p",href:"https://scholar.google.be/citations?user=4LyZn8oAAAAJ&hl=en"},"Alan Szepieniec")," to consult the approach presented above."),(0,n.yg)("p",null,"Alan general observations:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"we don\u2019t need 2-preimage resistance"),(0,n.yg)("li",{parentName:"ul"},"we need 32bytes address space for collision resistance"),(0,n.yg)("li",{parentName:"ul"},"when an attacker can control an input for object with an address then we have a problem with birthday attack"),(0,n.yg)("li",{parentName:"ul"},"there is an issue with smart-contracts for hashing"),(0,n.yg)("li",{parentName:"ul"},"sha2 mining can be use to breaking address pre-image")),(0,n.yg)("p",null,"Hashing algorithm"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"any attack breaking blake3 will break blake2"),(0,n.yg)("li",{parentName:"ul"},"Alan is pretty confident about the current security analysis of the blake hash algorithm. It was a finalist, and the author is well known in security analysis.")),(0,n.yg)("p",null,"Algorithm:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Alan recommends to hash the prefix: ",(0,n.yg)("inlineCode",{parentName:"li"},"address(pub_key) = hash(hash(key_type) + pub_key)[:32]"),", main benefits:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"we are free to user arbitrary long prefix names"),(0,n.yg)("li",{parentName:"ul"},"we still don\u2019t risk collisions"),(0,n.yg)("li",{parentName:"ul"},"switch tables"))),(0,n.yg)("li",{parentName:"ul"},"discussion about penalization -> about adding prefix post hash"),(0,n.yg)("li",{parentName:"ul"},"Aaron asked about post hash prefixes (",(0,n.yg)("inlineCode",{parentName:"li"},"address(pub_key) = key_type + hash(pub_key)"),") and differences. Alan noted that this approach has longer address space and it\u2019s stronger.")),(0,n.yg)("p",null,"Algorithm for complex / composed keys:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"merging tree like addresses with same algorithm are fine")),(0,n.yg)("p",null,"Module addresses: Should module addresses have different size to differentiate it?"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"we will need to set a pre-image prefix for module addresse to keept them in 32-byte space: ",(0,n.yg)("inlineCode",{parentName:"li"},"hash(hash('module') + module_key)")),(0,n.yg)("li",{parentName:"ul"},"Aaron observation: we already need to deal with variable length (to not break secp256k1 keys).")),(0,n.yg)("p",null,"Discssion about arithmetic hash function for ZKP"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Posseidon / Rescue"),(0,n.yg)("li",{parentName:"ul"},"Problem: much bigger risk because we don\u2019t know much techniques and history of crypto-analysis of arithmetic constructions. It\u2019s still a new ground and area of active research.")),(0,n.yg)("p",null,"Post quantum signature size"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Alan suggestion: Falcon: speed / size ration - very good."),(0,n.yg)("li",{parentName:"ul"},"Aaron - should we think about it?\nAlan: based on early extrapolation this thing will get able to break EC cryptography in 2050 . But that\u2019s a lot of uncertainty. But there is magic happening with recurions / linking / simulation and that can speedup the progress.")),(0,n.yg)("p",null,"Other ideas"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Let\u2019s say we use same key and two different address algorithms for 2 different use cases. Is it still safe to use it? Alan: if we want to hide the public key (which is not our use case), then it\u2019s less secure but there are fixes.")),(0,n.yg)("h3",{id:"references"},"References"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://hackmd.io/_NGWI4xZSbKzj1BkCqyZMw"},"Notes"))))}c.isMDXComponent=!0}}]);