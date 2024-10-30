"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[48929],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,h=m["".concat(l,".").concat(c)]||m[c]||g[c]||i;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[m]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const i={sidebar_position:1},s="Running a Node",r={unversionedId:"user/run-node/run-node",id:"version-0.52/user/run-node/run-node",title:"Running a Node",description:"Now that the application is ready and the keyring populated, it's time to see how to run the blockchain node. In this section, the application we are running is called simapp, and its corresponding CLI binary simd.",source:"@site/cosmos-sdk_versioned_docs/version-0.52/user/run-node/01-run-node.md",sourceDirName:"user/run-node",slug:"/user/run-node/run-node",permalink:"/cosmos-sdk/user/run-node/run-node",draft:!1,tags:[],version:"0.52",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Setting up the keyring",permalink:"/cosmos-sdk/user/run-node/keyring"},next:{title:"Interacting with the Node",permalink:"/cosmos-sdk/user/run-node/interact-node"}},l={},p=[{value:"Initialize the Chain",id:"initialize-the-chain",level:2},{value:"Updating Some Default Settings",id:"updating-some-default-settings",level:2},{value:"Client Interaction",id:"client-interaction",level:3},{value:"Adding Genesis Accounts",id:"adding-genesis-accounts",level:2},{value:"Configuring the Node Using <code>app.toml</code> and <code>config.toml</code>",id:"configuring-the-node-using-apptoml-and-configtoml",level:2},{value:"Run a Localnet",id:"run-a-localnet",level:2},{value:"Standalone App/CometBFT",id:"standalone-appcometbft",level:3},{value:"Logging",id:"logging",level:2},{value:"State Sync",id:"state-sync",level:2},{value:"Local State Sync",id:"local-state-sync",level:3},{value:"Snapshots Commands",id:"snapshots-commands",level:3}],d={toc:p},m="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"running-a-node"},"Running a Node"),(0,o.yg)("admonition",{title:"Synopsis",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Now that the application is ready and the keyring populated, it's time to see how to run the blockchain node. In this section, the application we are running is called ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/simapp"},(0,o.yg)("inlineCode",{parentName:"a"},"simapp")),", and its corresponding CLI binary ",(0,o.yg)("inlineCode",{parentName:"p"},"simd"),".")),(0,o.yg)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cosmos-sdk/learn/beginner/app-anatomy"},"Anatomy of a Cosmos SDK Application")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cosmos-sdk/user/run-node/keyring"},"Setting up the keyring")))),(0,o.yg)("h2",{id:"initialize-the-chain"},"Initialize the Chain"),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"Make sure you can build your own binary, and replace ",(0,o.yg)("inlineCode",{parentName:"p"},"simd")," with the name of your binary in the snippets.")),(0,o.yg)("p",null,"Before actually running the node, we need to initialize the chain, and most importantly its genesis file. This is done with the ",(0,o.yg)("inlineCode",{parentName:"p"},"init")," subcommand:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# The argument <moniker> is the custom username of your node, it should be human-readable.\nsimd init <moniker> --chain-id my-test-chain\n")),(0,o.yg)("p",null,"The command above creates all the configuration files needed for your node to run, as well as a default genesis file, which defines the initial state of the network."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"All these configuration files are in ",(0,o.yg)("inlineCode",{parentName:"p"},"~/.simapp")," by default, but you can overwrite the location of this folder by passing the ",(0,o.yg)("inlineCode",{parentName:"p"},"--home")," flag to each commands,\nor set an ",(0,o.yg)("inlineCode",{parentName:"p"},"$APPD_HOME")," environment variable (where ",(0,o.yg)("inlineCode",{parentName:"p"},"APPD")," is the name of the binary).")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"~/.simapp")," folder has the following structure:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},".                                   # ~/.simapp\n  |- data                           # Contains the databases used by the node.\n  |- config/\n      |- app.toml                   # Application-related configuration file.\n      |- config.toml                # CometBFT-related configuration file.\n      |- genesis.json               # The genesis file.\n      |- node_key.json              # Private key to use for node authentication in the p2p protocol.\n      |- priv_validator_key.json    # Private key to use as a validator in the consensus protocol.\n")),(0,o.yg)("h2",{id:"updating-some-default-settings"},"Updating Some Default Settings"),(0,o.yg)("p",null,"If you want to change any field values in configuration files (for ex: genesis.json) you can use ",(0,o.yg)("inlineCode",{parentName:"p"},"jq")," (",(0,o.yg)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"installation")," & ",(0,o.yg)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/#Assignment"},"docs"),") & ",(0,o.yg)("inlineCode",{parentName:"p"},"sed")," commands to do that. Few examples are listed here."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# to change the chain-id\njq '.chain_id = \"testing\"' genesis.json > temp.json && mv temp.json genesis.json\n\n# to enable the api server\nsed -i '/\\[api\\]/,+3 s/enable = false/enable = true/' app.toml\n\n# to change the voting_period\njq '.app_state.gov.voting_params.voting_period = \"600s\"' genesis.json > temp.json && mv temp.json genesis.json\n\n# to change the inflation\njq '.app_state.mint.minter.inflation = \"0.300000000000000000\"' genesis.json > temp.json && mv temp.json genesis.json\n")),(0,o.yg)("h3",{id:"client-interaction"},"Client Interaction"),(0,o.yg)("p",null,"When instantiating a node, GRPC and REST are defaulted to localhost to avoid unknown exposure of your node to the public. It is recommended to not expose these endpoints without a proxy that can handle load balancing or authentication is setup between your node and the public. "),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"A commonly used tool for this is ",(0,o.yg)("a",{parentName:"p",href:"https://nginx.org"},"nginx"),".")),(0,o.yg)("h2",{id:"adding-genesis-accounts"},"Adding Genesis Accounts"),(0,o.yg)("p",null,"Before starting the chain, you need to populate the state with at least one account. To do so, first ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/user/run-node/keyring#adding-keys-to-the-keyring"},"create a new account in the keyring")," named ",(0,o.yg)("inlineCode",{parentName:"p"},"my_validator")," under the ",(0,o.yg)("inlineCode",{parentName:"p"},"test")," keyring backend (feel free to choose another name and another backend)."),(0,o.yg)("p",null,"Now that you have created a local account, go ahead and grant it some ",(0,o.yg)("inlineCode",{parentName:"p"},"stake")," tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd genesis add-genesis-account $MY_VALIDATOR_ADDRESS 100000000000stake\n")),(0,o.yg)("p",null,"Recall that ",(0,o.yg)("inlineCode",{parentName:"p"},"$MY_VALIDATOR_ADDRESS")," is a variable that holds the address of the ",(0,o.yg)("inlineCode",{parentName:"p"},"my_validator")," key in the ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/user/run-node/keyring#adding-keys-to-the-keyring"},"keyring"),". Also note that the tokens in the Cosmos SDK have the ",(0,o.yg)("inlineCode",{parentName:"p"},"{amount}{denom}")," format: ",(0,o.yg)("inlineCode",{parentName:"p"},"amount")," is an 18-digit-precision decimal number, and ",(0,o.yg)("inlineCode",{parentName:"p"},"denom")," is the unique token identifier with its denomination key (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"atom")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"uatom"),"). Here, we are granting ",(0,o.yg)("inlineCode",{parentName:"p"},"stake")," tokens, as ",(0,o.yg)("inlineCode",{parentName:"p"},"stake")," is the token identifier used for staking in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/simapp"},(0,o.yg)("inlineCode",{parentName:"a"},"simapp")),". For your own chain with its own staking denom, that token identifier should be used instead."),(0,o.yg)("p",null,"Now that your account has some tokens, you need to add a validator to your chain. Validators are special full-nodes that participate in the consensus process (implemented in the ",(0,o.yg)("a",{parentName:"p",href:"/cosmos-sdk/learn/intro/sdk-app-architecture#cometbft"},"underlying consensus engine"),") in order to add new blocks to the chain. Any account can declare its intention to become a validator operator, but only those with sufficient delegation get to enter the active set (for example, only the top 125 validator candidates with the most delegation get to be validators in the Cosmos Hub). For this guide, you will add your local node (created via the ",(0,o.yg)("inlineCode",{parentName:"p"},"init")," command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a ",(0,o.yg)("inlineCode",{parentName:"p"},"gentx"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# Create a gentx.\nsimd genesis gentx my_validator 100000000stake --chain-id my-test-chain --keyring-backend test\n\n# Add the gentx to the genesis file.\nsimd genesis collect-gentxs\n")),(0,o.yg)("p",null,"A ",(0,o.yg)("inlineCode",{parentName:"p"},"gentx")," does three things:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Registers the ",(0,o.yg)("inlineCode",{parentName:"li"},"validator")," account you created as a validator operator account (i.e. the account that controls the validator)."),(0,o.yg)("li",{parentName:"ol"},"Self-delegates the provided ",(0,o.yg)("inlineCode",{parentName:"li"},"amount")," of staking tokens."),(0,o.yg)("li",{parentName:"ol"},"Link the operator account with a CometBFT node pubkey that will be used for signing blocks. If no ",(0,o.yg)("inlineCode",{parentName:"li"},"--pubkey")," flag is provided, it defaults to the local node pubkey created via the ",(0,o.yg)("inlineCode",{parentName:"li"},"simd init")," command above.")),(0,o.yg)("p",null,"For more information on ",(0,o.yg)("inlineCode",{parentName:"p"},"gentx"),", use the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd genesis gentx --help\n")),(0,o.yg)("h2",{id:"configuring-the-node-using-apptoml-and-configtoml"},"Configuring the Node Using ",(0,o.yg)("inlineCode",{parentName:"h2"},"app.toml")," and ",(0,o.yg)("inlineCode",{parentName:"h2"},"config.toml")),(0,o.yg)("p",null,"The Cosmos SDK automatically generates two configuration files inside ",(0,o.yg)("inlineCode",{parentName:"p"},"~/.simapp/config"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"config.toml"),": used to configure the CometBFT, learn more on ",(0,o.yg)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/core/configuration"},"CometBFT's documentation"),","),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"app.toml"),": generated by the Cosmos SDK, and used to configure your app, such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync...")),(0,o.yg)("p",null,"Both files are heavily commented, please refer to them directly to tweak your node."),(0,o.yg)("p",null,"One example config to tweak is the ",(0,o.yg)("inlineCode",{parentName:"p"},"minimum-gas-prices")," field inside ",(0,o.yg)("inlineCode",{parentName:"p"},"app.toml"),", which defines the minimum gas prices the validator node is willing to accept for processing a transaction. Depending on the chain, it might be an empty string or not. If it's empty, make sure to edit the field with some value, for example ",(0,o.yg)("inlineCode",{parentName:"p"},"10token"),", or else the node will halt on startup. For the purpose of this tutorial, let's set the minimum gas price to 0:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-toml"},' # The minimum gas prices a validator is willing to accept for processing a\n # transaction. A transaction\'s fees must meet the minimum of any denomination\n # specified in this config (e.g. 0.25token1;0.0001token2).\n minimum-gas-prices = "0stake"\n')),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"When running a node (not a validator!) and not wanting to run the application mempool, set the ",(0,o.yg)("inlineCode",{parentName:"p"},"max-txs")," field to ",(0,o.yg)("inlineCode",{parentName:"p"},"-1"),"."),(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre",className:"language-toml"},'[mempool]\n# Setting max-txs to 0 will allow for a unbounded amount of transactions in the mempool.\n# Setting max_txs to negative 1 (-1) will disable transactions from being inserted into the mempool.\n# Setting max_txs to a positive number (> 0) will limit the number of transactions in the mempool, by the specified amount.\n#\n# Note, this configuration only applies to SDK built-in app-side mempool\n# implementations.\nmax-txs = "-1"\n'))),(0,o.yg)("h2",{id:"run-a-localnet"},"Run a Localnet"),(0,o.yg)("p",null,"Now that everything is set up, you can finally start your node:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"simd start\n")),(0,o.yg)("p",null,"You should see blocks come in."),(0,o.yg)("p",null,"The previous command allow you to run a single node. This is enough for the next section on interacting with this node, but you may wish to run multiple nodes at the same time, and see how consensus happens between them."),(0,o.yg)("p",null,"The naive way would be to run the same commands again in separate terminal windows. This is possible, however in the Cosmos SDK, we leverage the power of ",(0,o.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," to run a localnet. If you need inspiration on how to set up your own localnet with Docker Compose, you can have a look at the Cosmos SDK's ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/docker-compose.yml"},(0,o.yg)("inlineCode",{parentName:"a"},"docker-compose.yml")),"."),(0,o.yg)("h3",{id:"standalone-appcometbft"},"Standalone App/CometBFT"),(0,o.yg)("p",null,"By default, the Cosmos SDK runs CometBFT in-process with the application\nIf you want to run the application and CometBFT in separate processes,\nstart the application with the ",(0,o.yg)("inlineCode",{parentName:"p"},"--with-comet=false")," flag\nand set ",(0,o.yg)("inlineCode",{parentName:"p"},"rpc.laddr")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"config.toml")," to the CometBFT node's RPC address."),(0,o.yg)("h2",{id:"logging"},"Logging"),(0,o.yg)("p",null,"Logging provides a way to see what is going on with a node. By default the ",(0,o.yg)("inlineCode",{parentName:"p"},"info")," level is set. This is a global level and all info logs will be outputted to the terminal."),(0,o.yg)("p",null,"If you would like to filter specific logs to the terminal instead of all, then setting ",(0,o.yg)("inlineCode",{parentName:"p"},"<module>:<log_level>")," is how this can work.\nExample: "),(0,o.yg)("p",null,"In ",(0,o.yg)("inlineCode",{parentName:"p"},"config.toml"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-toml"},'log_level: "state:info,p2p:info,consensus:info,x/staking:info,x/ibc:info,*:error"\n')),(0,o.yg)("p",null,"Or directly in the command line:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'<appd> start --log_level "state:info,p2p:info,consensus:info,x/staking:info,x/ibc:info,*:error"\n')),(0,o.yg)("p",null,"The above will show info logs for the state, p2p, consensus, staking, and ibc modules, and error logs for all other modules.\nWhen no log filtering is required, simply use one of the supported global log levels: ",(0,o.yg)("inlineCode",{parentName:"p"},"trace"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"info"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"error"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"fatal"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"panic")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"disabled"),"."),(0,o.yg)("h2",{id:"state-sync"},"State Sync"),(0,o.yg)("p",null,"State sync is the act in which a node syncs the latest or close to the latest state of a blockchain. This is useful for users who don't want to sync all the blocks in history. Read more in ",(0,o.yg)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/core/state-sync"},"CometBFT documentation"),"."),(0,o.yg)("p",null,"State sync works thanks to snapshots. Read how the SDK handles snapshots ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/825245d/store/snapshots/README.md"},"here"),"."),(0,o.yg)("h3",{id:"local-state-sync"},"Local State Sync"),(0,o.yg)("p",null,"Local state sync work similar to normal state sync except that it works off a local snapshot of state instead of one provided via the p2p network. The steps to start local state sync are similar to normal state sync with a few different designs. "),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"As mentioned in ",(0,o.yg)("a",{parentName:"li",href:"https://docs.cometbft.com/v0.37/core/state-sync"},"https://docs.cometbft.com/v0.37/core/state-sync"),", one must set a height and hash in the config.toml along with a few rpc servers (the afromentioned link has instructions on how to do this). "),(0,o.yg)("li",{parentName:"ol"},"Run ",(0,o.yg)("inlineCode",{parentName:"li"},"<appd snapshot restore <height> <format>")," to restore a local snapshot (note: first load it from a file with the ",(0,o.yg)("em",{parentName:"li"},"load")," command). "),(0,o.yg)("li",{parentName:"ol"},"Bootsrapping Comet state in order to start the node after the snapshot has been ingested. This can be done with the bootstrap command ",(0,o.yg)("inlineCode",{parentName:"li"},"<app> comet bootstrap-state"))),(0,o.yg)("h3",{id:"snapshots-commands"},"Snapshots Commands"),(0,o.yg)("p",null,"The Cosmos SDK provides commands for managing snapshots.\nThese commands can be added in an app with the following snippet in ",(0,o.yg)("inlineCode",{parentName:"p"},"cmd/<app>/root.go"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/cosmos/cosmos-sdk/client/snapshot"\n)\n\nfunc initRootCmd(/* ... */) {\n  // ...\n  rootCmd.AddCommand(\n    snapshot.Cmd(appCreator),\n  )\n}\n')),(0,o.yg)("p",null,"Then following commands are available at ",(0,o.yg)("inlineCode",{parentName:"p"},"<appd> snapshots [command]"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"list"),": list local snapshots"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"load"),": Load a snapshot archive file into snapshot store"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"restore"),": Restore app state from local snapshot"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"export"),":  Export app state to snapshot store"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"dump"),": Dump the snapshot as portable archive format"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"delete"),": Delete a local snapshot")))}g.isMDXComponent=!0}}]);