"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[99096],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),g=o,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return a?t.createElement(u,r(r({ref:n},p),{},{components:a})):t.createElement(u,r({ref:n},p))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},29438:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(58168),o=(a(96540),a(15680));const i={},r="ORM",l={unversionedId:"docs/build/packages/orm",id:"docs/build/packages/orm",title:"ORM",description:"The Cosmos SDK ORM is a state management library that provides a rich, but opinionated set of tools for managing a",source:"@site/cosmos-sdk/docs/build/packages/03-orm.md",sourceDirName:"docs/build/packages",slug:"/docs/build/packages/orm",permalink:"/cosmos-sdk/next/docs/build/packages/orm",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Collections",permalink:"/cosmos-sdk/next/docs/build/packages/collections"},next:{title:"Tools",permalink:"/cosmos-sdk/next/docs/build/tooling/"}},s={},d=[{value:"Design and Philosophy",id:"design-and-philosophy",level:2},{value:"Defining Tables",id:"defining-tables",level:2},{value:"Auto-incrementing Primary Keys",id:"auto-incrementing-primary-keys",level:3},{value:"Unique Indexes",id:"unique-indexes",level:3},{value:"Singletons",id:"singletons",level:3},{value:"Running Codegen",id:"running-codegen",level:2},{value:"Using the ORM in a module",id:"using-the-orm-in-a-module",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Using the generated code",id:"using-the-generated-code",level:3}],p={toc:d},c="wrapper";function m(e){let{components:n,...a}=e;return(0,o.yg)(c,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"orm"},"ORM"),(0,o.yg)("p",null,"The Cosmos SDK ORM is a state management library that provides a rich, but opinionated set of tools for managing a\nmodule's state. It provides support for:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"type safe management of state"),(0,o.yg)("li",{parentName:"ul"},"multipart keys"),(0,o.yg)("li",{parentName:"ul"},"secondary indexes"),(0,o.yg)("li",{parentName:"ul"},"unique indexes"),(0,o.yg)("li",{parentName:"ul"},"easy prefix and range queries"),(0,o.yg)("li",{parentName:"ul"},"automatic genesis import/export"),(0,o.yg)("li",{parentName:"ul"},"automatic query services for clients, including support for light client proofs (still in development)"),(0,o.yg)("li",{parentName:"ul"},"indexing state data in external databases (still in development)")),(0,o.yg)("h2",{id:"design-and-philosophy"},"Design and Philosophy"),(0,o.yg)("p",null,"The ORM's data model is inspired by the relational data model found in SQL databases. The core abstraction is a table\nwith a primary key and optional secondary indexes."),(0,o.yg)("p",null,"Because the Cosmos SDK uses protobuf as its encoding layer, ORM tables are defined directly in .proto files using\nprotobuf options. Each table is defined by a single protobuf ",(0,o.yg)("inlineCode",{parentName:"p"},"message")," type and a schema of multiple tables is\nrepresented by a single .proto file."),(0,o.yg)("p",null,"Table structure is specified in the same file where messages are defined in order to make it easy to focus on better\ndesign of the state layer. Because blockchain state layout is part of the public API for clients (TODO: link to docs on\nlight client proofs), it is important to think about the state layout as being part of the public API of a module.\nChanging the state layout actually breaks clients, so it is ideal to think through it carefully up front and to aim for\na design that will eliminate or minimize breaking changes down the road. Also, good design of state enables building\nmore performant and sophisticated applications. Providing users with a set of tools inspired by relational databases\nwhich have a long history of database design best practices and allowing schema to be specified declaratively in a\nsingle place are design choices the ORM makes to enable better design and more durable APIs."),(0,o.yg)("p",null,"Also, by only supporting the table abstraction as opposed to key-value pair maps, it is easy to add to new\ncolumns/fields to any data structure without causing a breaking change and the data structures can easily be indexed in\nany off-the-shelf SQL database for more sophisticated queries."),(0,o.yg)("p",null,"The encoding of fields in keys is designed to support ordered iteration for all protobuf primitive field types\nexcept for ",(0,o.yg)("inlineCode",{parentName:"p"},"bytes")," as well as the well-known types ",(0,o.yg)("inlineCode",{parentName:"p"},"google.protobuf.Timestamp")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"google.protobuf.Duration"),". Encodings\nare optimized for storage space when it makes sense (see the documentation in ",(0,o.yg)("inlineCode",{parentName:"p"},"cosmos/orm/v1/orm.proto")," for more details)\nand table rows do not use extra storage space to store key fields in the value."),(0,o.yg)("p",null,"We recommend that users of the ORM attempt to follow database design best practices such as\n",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Database_normalization"},"normalization")," (at least 1NF).\nFor instance, defining ",(0,o.yg)("inlineCode",{parentName:"p"},"repeated")," fields in a table is considered an anti-pattern because breaks first normal form (1NF).\nAlthough we support ",(0,o.yg)("inlineCode",{parentName:"p"},"repeated")," fields in tables, they cannot be used as key fields for this reason. This may seem\nrestrictive but years of best practice (and also experience in the SDK) have shown that following this pattern\nleads to easier to maintain schemas."),(0,o.yg)("p",null,"To illustrate the motivation for these principles with an example from the SDK, historically balances were stored\nas a mapping from account -> map of denom to amount. This did not scale well because an account with 100 token balances\nneeded to be encoded/decoded every time a single coin balance changed. Now balances are stored as account,denom -> amount\nas in the example above. With the ORM's data model, if we wanted to add a new field to ",(0,o.yg)("inlineCode",{parentName:"p"},"Balance")," such as\n",(0,o.yg)("inlineCode",{parentName:"p"},"unlocked_balance")," (if vesting accounts were redesigned in this way), it would be easy to add it to this table without\nrequiring a data migration. Because of the ORM's optimizations, the account and denom are only stored in the key part\nof storage and not in the value leading to both a flexible data model and efficient usage of storage."),(0,o.yg)("h2",{id:"defining-tables"},"Defining Tables"),(0,o.yg)("p",null,"To define a table:"),(0,o.yg)("p",null,"1) create a .proto file to describe the module's state (naming it ",(0,o.yg)("inlineCode",{parentName:"p"},"state.proto"),' is recommended for consistency),\nand import "cosmos/orm/v1/orm.proto", ex:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\npackage bank_example;\n\nimport "cosmos/orm/v1/orm.proto";\n')),(0,o.yg)("p",null,"2) define a ",(0,o.yg)("inlineCode",{parentName:"p"},"message")," for the table, ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Balance {\n  bytes account = 1;\n  string denom = 2;\n  uint64 balance = 3;\n}\n")),(0,o.yg)("p",null,"3) add the ",(0,o.yg)("inlineCode",{parentName:"p"},"cosmos.orm.v1.table")," option to the table and give the table an ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," unique within this .proto file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Balance {\n  option (cosmos.orm.v1.table) = {\n    id: 1\n  };\n  \n  bytes account = 1;\n  string denom = 2;\n  uint64 balance = 3;\n}\n")),(0,o.yg)("p",null,"4) define the primary key field or fields, as a comma-separated list of the fields from the message which should make\nup the primary key:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'message Balance {\n  option (cosmos.orm.v1.table) = {\n    id: 1\n    primary_key: { fields: "account,denom" }\n  };\n\n  bytes account = 1;\n  string denom = 2;\n  uint64 balance = 3;\n}\n')),(0,o.yg)("p",null,"5) add any desired secondary indexes by specifying an ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," unique within the table and a comma-separate list of the\nindex fields:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'message Balance {\n  option (cosmos.orm.v1.table) = {\n    id: 1;\n    primary_key: { fields: "account,denom" }\n    index: { id: 1 fields: "denom" } // this allows querying for the accounts which own a denom\n  };\n\n  bytes account = 1;\n  string denom   = 2;\n  uint64 amount  = 3;\n}\n')),(0,o.yg)("h3",{id:"auto-incrementing-primary-keys"},"Auto-incrementing Primary Keys"),(0,o.yg)("p",null,"A common pattern in SDK modules and in database design is to define tables with a single integer ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," field with an\nautomatically generated primary key. In the ORM we can do this by setting the ",(0,o.yg)("inlineCode",{parentName:"p"},"auto_increment")," option to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," on the\nprimary key, ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'message Account {\n  option (cosmos.orm.v1.table) = {\n    id: 2;\n    primary_key: { fields: "id", auto_increment: true }\n  };\n\n  uint64 id = 1;\n  bytes address = 2;\n}\n')),(0,o.yg)("h3",{id:"unique-indexes"},"Unique Indexes"),(0,o.yg)("p",null,"A unique index can be added by setting the ",(0,o.yg)("inlineCode",{parentName:"p"},"unique")," option to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," on an index, ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},'message Account {\n  option (cosmos.orm.v1.table) = {\n    id: 2;\n    primary_key: { fields: "id", auto_increment: true }\n    index: {id: 1, fields: "address", unique: true}\n  };\n\n  uint64 id = 1;\n  bytes address = 2;\n}\n')),(0,o.yg)("h3",{id:"singletons"},"Singletons"),(0,o.yg)("p",null,"The ORM also supports a special type of table with only one row called a ",(0,o.yg)("inlineCode",{parentName:"p"},"singleton"),". This can be used for storing\nmodule parameters. Singletons only need to define a unique ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," and that cannot conflict with the id of other\ntables or singletons in the same .proto file. Ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Params {\n  option (cosmos.orm.v1.singleton) = {\n    id: 3;\n  };\n  \n  google.protobuf.Duration voting_period = 1;\n  uint64 min_threshold = 2;\n}\n")),(0,o.yg)("h2",{id:"running-codegen"},"Running Codegen"),(0,o.yg)("p",null,"NOTE: the ORM will only work with protobuf code that implements the ",(0,o.yg)("a",{parentName:"p",href:"https://pkg.go.dev/google.golang.org/protobuf"},"google.golang.org/protobuf"),"\nAPI. That means it will not work with code generated using gogo-proto."),(0,o.yg)("p",null,"To install the ORM's code generator, run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"go install cosmossdk.io/orm/cmd/protoc-gen-go-cosmos-orm@latest\n")),(0,o.yg)("p",null,"The recommended way to run the code generator is to use ",(0,o.yg)("a",{parentName:"p",href:"https://docs.buf.build/build/usage"},"buf build"),".\nThis is an example ",(0,o.yg)("inlineCode",{parentName:"p"},"buf.gen.yaml")," that runs ",(0,o.yg)("inlineCode",{parentName:"p"},"protoc-gen-go"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"protoc-gen-go-grpc")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"protoc-gen-go-cosmos-orm"),"\nusing buf managed mode:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"version: v1\nmanaged:\n  enabled: true\n  go_package_prefix:\n    default: foo.bar/api # the go package prefix of your package\n    override:\n      buf.build/cosmos/cosmos-sdk: cosmossdk.io/api # required to import the Cosmos SDK api module\nplugins:\n  - name: go\n    out: .\n    opt: paths=source_relative\n  - name: go-grpc\n    out: .\n    opt: paths=source_relative\n  - name: go-cosmos-orm\n    out: .\n    opt: paths=source_relative\n")),(0,o.yg)("h2",{id:"using-the-orm-in-a-module"},"Using the ORM in a module"),(0,o.yg)("h3",{id:"initialization"},"Initialization"),(0,o.yg)("p",null,"To use the ORM in a module, first create a ",(0,o.yg)("inlineCode",{parentName:"p"},"ModuleSchemaDescriptor"),". This tells the ORM which .proto files have defined\nan ORM schema and assigns them all a unique non-zero id. Ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"var MyModuleSchema = &ormv1alpha1.ModuleSchemaDescriptor{\n    SchemaFile: []*ormv1alpha1.ModuleSchemaDescriptor_FileEntry{\n        {\n            Id:            1,\n            ProtoFileName: mymodule.File_my_module_state_proto.Path(),\n        },\n    },\n}\n")),(0,o.yg)("p",null,"In the ORM generated code for a file named ",(0,o.yg)("inlineCode",{parentName:"p"},"state.proto"),", there should be an interface ",(0,o.yg)("inlineCode",{parentName:"p"},"StateStore")," that got generated\nwith a constructor ",(0,o.yg)("inlineCode",{parentName:"p"},"NewStateStore")," that takes a parameter of type ",(0,o.yg)("inlineCode",{parentName:"p"},"ormdb.ModuleDB"),". Add a reference to ",(0,o.yg)("inlineCode",{parentName:"p"},"StateStore"),"\nto your module's keeper struct. Ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type Keeper struct {\n    db StateStore\n}\n")),(0,o.yg)("p",null,"Then instantiate the ",(0,o.yg)("inlineCode",{parentName:"p"},"StateStore")," instance via an ",(0,o.yg)("inlineCode",{parentName:"p"},"ormdb.ModuleDB")," that is instantiated from the ",(0,o.yg)("inlineCode",{parentName:"p"},"SchemaDescriptor"),"\nabove and one or more store services from ",(0,o.yg)("inlineCode",{parentName:"p"},"cosmossdk.io/core/store"),". Ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"func NewKeeper(storeService store.KVStoreService) (*Keeper, error) {\n    modDb, err := ormdb.NewModuleDB(MyModuleSchema, ormdb.ModuleDBOptions{KVStoreService: storeService})\n    if err != nil {\n        return nil, err\n    }\n    db, err := NewStateStore(modDb)\n    if err != nil {\n        return nil, err\n    }\n    return Keeper{db: db}, nil\n}\n")),(0,o.yg)("h3",{id:"using-the-generated-code"},"Using the generated code"),(0,o.yg)("p",null,"The generated code for the ORM contains methods for inserting, updating, deleting and querying table entries.\nFor each table in a .proto file, there is a type-safe table interface implemented in generated code. For instance,\nfor a table named ",(0,o.yg)("inlineCode",{parentName:"p"},"Balance")," there should be a ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceTable")," interface that looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type BalanceTable interface {\n    Insert(ctx context.Context, balance *Balance) error\n    Update(ctx context.Context, balance *Balance) error\n    Save(ctx context.Context, balance *Balance) error\n    Delete(ctx context.Context, balance *Balance) error\n    Has(ctx context.Context, account []byte, denom string) (found bool, err error)\n    // Get returns nil and an error which responds true to ormerrors.IsNotFound() if the record was not found.\n    Get(ctx context.Context, account []byte, denom string) (*Balance, error)\n    List(ctx context.Context, prefixKey BalanceIndexKey, opts ...ormlist.Option) (BalanceIterator, error)\n    ListRange(ctx context.Context, from, to BalanceIndexKey, opts ...ormlist.Option) (BalanceIterator, error)\n    DeleteBy(ctx context.Context, prefixKey BalanceIndexKey) error\n    DeleteRange(ctx context.Context, from, to BalanceIndexKey) error\n\n    doNotImplement()\n}\n")),(0,o.yg)("p",null,"This ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceTable")," should be accessible from the ",(0,o.yg)("inlineCode",{parentName:"p"},"StateStore")," interface (assuming our file is named ",(0,o.yg)("inlineCode",{parentName:"p"},"state.proto"),")\nvia a ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceTable()")," accessor method. If all the above example tables/singletons were in the same ",(0,o.yg)("inlineCode",{parentName:"p"},"state.proto"),",\nthen ",(0,o.yg)("inlineCode",{parentName:"p"},"StateStore")," would get generated like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"type BankStore interface {\n    BalanceTable() BalanceTable\n    AccountTable() AccountTable\n    ParamsTable() ParamsTable\n\n    doNotImplement()\n}\n")),(0,o.yg)("p",null,"So to work with the ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceTable")," in a keeper method we could use code like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"func (k keeper) AddBalance(ctx context.Context, acct []byte, denom string, amount uint64) error {\n    balance, err := k.db.BalanceTable().Get(ctx, acct, denom)\n    if err != nil && !ormerrors.IsNotFound(err) {\n        return err\n    }\n\n    if balance == nil {\n        balance = &Balance{\n            Account: acct,\n            Denom:   denom,\n            Amount:  amount,\n        }\n    } else {\n        balance.Amount = balance.Amount + amount\n    }\n\n    return k.db.BalanceTable().Save(ctx, balance)\n}\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"List")," methods take ",(0,o.yg)("inlineCode",{parentName:"p"},"IndexKey")," parameters. For instance, ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceTable.List")," takes ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceIndexKey"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceIndexKey"),"\nlet's represent index keys for the different indexes (primary and secondary) on the ",(0,o.yg)("inlineCode",{parentName:"p"},"Balance")," table. The primary key\nin the ",(0,o.yg)("inlineCode",{parentName:"p"},"Balance")," table gets a struct ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceAccountDenomIndexKey")," and the first index gets an index key ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceDenomIndexKey"),".\nIf we wanted to list all the denoms and amounts that an account holds, we would use ",(0,o.yg)("inlineCode",{parentName:"p"},"BalanceAccountDenomIndexKey"),"\nwith a ",(0,o.yg)("inlineCode",{parentName:"p"},"List")," query just on the account prefix. Ex:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},"it, err := keeper.db.BalanceTable().List(ctx, BalanceAccountDenomIndexKey{}.WithAccount(acct))\n")))}m.isMDXComponent=!0}}]);