"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[5351],{15680:(e,o,n)=>{n.d(o,{xA:()=>c,yg:()=>u});var t=n(96540);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function i(e,o){if(null==e)return{};var n,t,a=function(e,o){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),l=function(e){var o=t.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},c=function(e){var o=l(e.components);return t.createElement(d.Provider,{value:o},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},g=t.forwardRef((function(e,o){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,u=m["".concat(d,".").concat(g)]||m[g]||p[g]||r;return n?t.createElement(u,s(s({ref:o},c),{},{components:n})):t.createElement(u,s({ref:o},c))}));function u(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86920:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(58168),a=(n(96540),n(15680));const r={sidebar_position:1},s="ProtocolBuffer Annotations",i={unversionedId:"build/building-modules/protobuf-annotations",id:"version-0.50/build/building-modules/protobuf-annotations",title:"ProtocolBuffer Annotations",description:"This document explains the various protobuf scalars that have been added to make working with protobuf easier for Cosmos SDK application developers",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/building-modules/05-protobuf-annotations.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/protobuf-annotations",permalink:"/cosmos-sdk/0.50/build/building-modules/protobuf-annotations",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Query Services",permalink:"/cosmos-sdk/0.50/build/building-modules/query-services"},next:{title:"BeginBlocker and EndBlocker",permalink:"/cosmos-sdk/0.50/build/building-modules/beginblock-endblock"}},d={},l=[{value:"Signer",id:"signer",level:2},{value:"Scalar",id:"scalar",level:2},{value:"Implements_Interface",id:"implements_interface",level:2},{value:"Method,Field,Message Added In",id:"methodfieldmessage-added-in",level:2},{value:"Amino",id:"amino",level:2},{value:"Name",id:"name",level:3},{value:"Field_Name",id:"field_name",level:3},{value:"Dont_OmitEmpty",id:"dont_omitempty",level:3},{value:"Encoding",id:"encoding",level:3}],c={toc:l},m="wrapper";function p(e){let{components:o,...n}=e;return(0,a.yg)(m,(0,t.A)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"protocolbuffer-annotations"},"ProtocolBuffer Annotations"),(0,a.yg)("p",null,"This document explains the various protobuf scalars that have been added to make working with protobuf easier for Cosmos SDK application developers"),(0,a.yg)("h2",{id:"signer"},"Signer"),(0,a.yg)("p",null,"Signer specifies which field should be used to determine the signer of a message for the Cosmos SDK. This field can be used for clients as well to infer which field should be used to determine the signer of a message."),(0,a.yg)("p",null,"Read more about the signer field ",(0,a.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.50/build/building-modules/messages-and-queries"},"here"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e6848d99b55a65d014375b295bdd7f9641aac95e/proto/cosmos/bank/v1beta1/tx.proto#L40\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'option (cosmos.msg.v1.signer) = "from_address";\n')),(0,a.yg)("h2",{id:"scalar"},"Scalar"),(0,a.yg)("p",null,"The scalar type defines a way for clients to understand how to construct protobuf messages according to what is expected by the module and sdk."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'(cosmos_proto.scalar) = "cosmos.AddressString"\n')),(0,a.yg)("p",null,"Example of account address string scalar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e6848d99b55a65d014375b295bdd7f9641aac95e/proto/cosmos/bank/v1beta1/tx.proto#L46\n")),(0,a.yg)("p",null,"Example of validator address string scalar: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/distribution/v1beta1/query.proto#L87\n")),(0,a.yg)("p",null,"Example of Decimals scalar: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/distribution/v1beta1/distribution.proto#L26\n")),(0,a.yg)("p",null,"Example of Int scalar: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/gov/v1/gov.proto#L137\n")),(0,a.yg)("p",null,"There are a few options for what can be provided as a scalar: ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.AddressString"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.ValidatorAddressString"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.ConsensusAddressString"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.Int"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.Dec"),". "),(0,a.yg)("h2",{id:"implements_interface"},"Implements_Interface"),(0,a.yg)("p",null,"Implement interface is used to provide information to client tooling like ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmology-tech/telescope"},"telescope")," on how to encode and decode protobuf messages. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'option (cosmos_proto.implements_interface) = "cosmos.auth.v1beta1.AccountI";\n')),(0,a.yg)("h2",{id:"methodfieldmessage-added-in"},"Method,Field,Message Added In"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"method_added_in"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"field_added_in")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"message_added_in")," are annotations to denotate to clients that a field has been supported in a later version. This is useful when new methods or fields are added in later versions and that the client needs to be aware of what it can call."),(0,a.yg)("p",null,"The annotation should be worded as follow:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'option (cosmos_proto.method_added_in) = "cosmos-sdk v0.50.1";\noption (cosmos_proto.method_added_in) = "x/epochs v1.0.0";\noption (cosmos_proto.method_added_in) = "simapp v24.0.0";\n')),(0,a.yg)("h2",{id:"amino"},"Amino"),(0,a.yg)("p",null,"The amino codec was removed in ",(0,a.yg)("inlineCode",{parentName:"p"},"v0.50+"),", this means there is not a need register ",(0,a.yg)("inlineCode",{parentName:"p"},"legacyAminoCodec"),". To replace the amino codec, Amino protobuf annotations are used to provide information to the amino codec on how to encode and decode protobuf messages. "),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Amino annotations are only used for backwards compatibility with amino. New modules are not required use amino annotations.")),(0,a.yg)("p",null,"The below annotations are used to provide information to the amino codec on how to encode and decode protobuf messages in a backwards compatible manner. "),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"Name specifies the amino name that would show up for the user in order for them see which message they are signing."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'option (amino.name) = "cosmos-sdk/BaseAccount";\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/bank/v1beta1/tx.proto#L41\n")),(0,a.yg)("h3",{id:"field_name"},"Field_Name"),(0,a.yg)("p",null,"Field name specifies the amino name that would show up for the user in order for them see which field they are signing."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'uint64 height = 1 [(amino.field_name) = "public_key"];\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/distribution/v1beta1/distribution.proto#L166\n")),(0,a.yg)("h3",{id:"dont_omitempty"},"Dont_OmitEmpty"),(0,a.yg)("p",null,"Dont omitempty specifies that the field should not be omitted when encoding to amino. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},"repeated cosmos.base.v1beta1.Coin amount = 3 [(amino.dont_omitempty)   = true];\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/bank/v1beta1/bank.proto#L56\n")),(0,a.yg)("h3",{id:"encoding"},"Encoding"),(0,a.yg)("p",null,"Encoding instructs the amino json marshaler how to encode certain fields that may differ from the standard encoding behaviour. The most common example of this is how ",(0,a.yg)("inlineCode",{parentName:"p"},"repeated cosmos.base.v1beta1.Coin")," is encoded when using the amino json encoding format. The ",(0,a.yg)("inlineCode",{parentName:"p"},"legacy_coins")," option tells the json marshaler ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/x/tx/signing/aminojson/json_marshal.go#L65"},"how to encode a null slice")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"cosmos.base.v1beta1.Coin"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto"},'(amino.encoding)         = "legacy_coins",\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/bank/v1beta1/genesis.proto#L23\n")))}p.isMDXComponent=!0}}]);