"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[9675],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),y=i,g=c["".concat(l,".").concat(y)]||c[y]||m[y]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},78809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const r={sidebar_position:1},o="Setting up the keyring",s={unversionedId:"user/run-node/keyring",id:"version-0.47/user/run-node/keyring",title:"Setting up the keyring",description:"This document describes how to configure and use the keyring and its various backends for an application.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/user/run-node/00-keyring.md",sourceDirName:"user/run-node",slug:"/user/run-node/keyring",permalink:"/cosmos-sdk/0.47/user/run-node/keyring",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"User Guides",permalink:"/cosmos-sdk/0.47/user/"},next:{title:"Running a Node",permalink:"/cosmos-sdk/0.47/user/run-node/run-node"}},l={},p=[{value:"Available backends for the keyring",id:"available-backends-for-the-keyring",level:2},{value:"The <code>os</code> backend",id:"the-os-backend",level:3},{value:"The <code>file</code> backend",id:"the-file-backend",level:3},{value:"The <code>pass</code> backend",id:"the-pass-backend",level:3},{value:"The <code>kwallet</code> backend",id:"the-kwallet-backend",level:3},{value:"The <code>test</code> backend",id:"the-test-backend",level:3},{value:"The <code>memory</code> backend",id:"the-memory-backend",level:3},{value:"Setting backend using the env variable",id:"setting-backend-using-the-env-variable",level:3},{value:"Adding keys to the keyring",id:"adding-keys-to-the-keyring",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"setting-up-the-keyring"},"Setting up the keyring"),(0,i.yg)("admonition",{title:"Synopsis",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"This document describes how to configure and use the keyring and its various backends for an ",(0,i.yg)("a",{parentName:"p",href:"/cosmos-sdk/0.47/learn/beginner/overview-app"},(0,i.yg)("strong",{parentName:"a"},"application")),".")),(0,i.yg)("p",null,'The keyring holds the private/public keypairs used to interact with a node. For instance, a validator key needs to be set up before running the blockchain node, so that blocks can be correctly signed. The private key can be stored in different locations, called "backends", such as a file or the operating system\'s own key storage.'),(0,i.yg)("h2",{id:"available-backends-for-the-keyring"},"Available backends for the keyring"),(0,i.yg)("p",null,"Starting with the v0.38.0 release, Cosmos SDK comes with a new keyring implementation\nthat provides a set of commands to manage cryptographic keys in a secure fashion. The\nnew keyring supports multiple storage backends, some of which may not be available on\nall operating systems."),(0,i.yg)("h3",{id:"the-os-backend"},"The ",(0,i.yg)("inlineCode",{parentName:"h3"},"os")," backend"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"os")," backend relies on operating system-specific defaults to handle key storage\nsecurely. Typically, an operating system's credential sub-system handles password prompts,\nprivate keys storage, and user sessions according to the user's password policies. Here\nis a list of the most popular operating systems and their respective passwords manager:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"macOS: ",(0,i.yg)("a",{parentName:"li",href:"https://support.apple.com/en-gb/guide/keychain-access/welcome/mac"},"Keychain")),(0,i.yg)("li",{parentName:"ul"},"Windows: ",(0,i.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/win32/secauthn/credentials-management"},"Credentials Management API")),(0,i.yg)("li",{parentName:"ul"},"GNU/Linux:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://gitlab.gnome.org/GNOME/libsecret"},"libsecret")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://api.kde.org/frameworks/kwallet/html/index.html"},"kwallet"))))),(0,i.yg)("p",null,"GNU/Linux distributions that use GNOME as default desktop environment typically come with\n",(0,i.yg)("a",{parentName:"p",href:"https://wiki.gnome.org/Apps/Seahorse"},"Seahorse"),". Users of KDE based distributions are\ncommonly provided with ",(0,i.yg)("a",{parentName:"p",href:"https://userbase.kde.org/KDE_Wallet_Manager"},"KDE Wallet Manager"),".\nWhilst the former is in fact a ",(0,i.yg)("inlineCode",{parentName:"p"},"libsecret")," convenient frontend, the latter is a ",(0,i.yg)("inlineCode",{parentName:"p"},"kwallet"),"\nclient."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"os")," is the default option since operating system's default credentials managers are\ndesigned to meet users' most common needs and provide them with a comfortable\nexperience without compromising on security."),(0,i.yg)("p",null,"The recommended backends for headless environments are ",(0,i.yg)("inlineCode",{parentName:"p"},"file")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"pass"),"."),(0,i.yg)("h3",{id:"the-file-backend"},"The ",(0,i.yg)("inlineCode",{parentName:"h3"},"file")," backend"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"file")," backend more closely resembles the keybase implementation used prior to\nv0.38.1. It stores the keyring encrypted within the app's configuration directory. This\nkeyring will request a password each time it is accessed, which may occur multiple\ntimes in a single command resulting in repeated password prompts. If using bash scripts\nto execute commands using the ",(0,i.yg)("inlineCode",{parentName:"p"},"file")," option you may want to utilize the following format\nfor multiple prompts:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# assuming that KEYPASSWD is set in the environment\n$ gaiacli config keyring-backend file                             # use file backend\n$ (echo $KEYPASSWD; echo $KEYPASSWD) | gaiacli keys add me        # multiple prompts\n$ echo $KEYPASSWD | gaiacli keys show me                          # single prompt\n")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"The first time you add a key to an empty keyring, you will be prompted to type the password twice.")),(0,i.yg)("h3",{id:"the-pass-backend"},"The ",(0,i.yg)("inlineCode",{parentName:"h3"},"pass")," backend"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"pass")," backend uses the ",(0,i.yg)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"pass")," utility to manage on-disk\nencryption of keys' sensitive data and metadata. Keys are stored inside ",(0,i.yg)("inlineCode",{parentName:"p"},"gpg")," encrypted files\nwithin app-specific directories. ",(0,i.yg)("inlineCode",{parentName:"p"},"pass")," is available for the most popular UNIX\noperating systems as well as GNU/Linux distributions. Please refer to its manual page for\ninformation on how to download and install it."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"pass")," uses ",(0,i.yg)("a",{parentName:"p",href:"https://gnupg.org/"},"GnuPG")," for encryption. ",(0,i.yg)("inlineCode",{parentName:"p"},"gpg")," automatically invokes the ",(0,i.yg)("inlineCode",{parentName:"p"},"gpg-agent"),"\ndaemon upon execution, which handles the caching of GnuPG credentials. Please refer to ",(0,i.yg)("inlineCode",{parentName:"p"},"gpg-agent"),"\nman page for more information on how to configure cache parameters such as credentials TTL and\npassphrase expiration.")),(0,i.yg)("p",null,"The password store must be set up prior to first use:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"pass init <GPG_KEY_ID>\n")),(0,i.yg)("p",null,"Replace ",(0,i.yg)("inlineCode",{parentName:"p"},"<GPG_KEY_ID>")," with your GPG key ID. You can use your personal GPG key or an alternative\none you may want to use specifically to encrypt the password store."),(0,i.yg)("h3",{id:"the-kwallet-backend"},"The ",(0,i.yg)("inlineCode",{parentName:"h3"},"kwallet")," backend"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"kwallet")," backend uses ",(0,i.yg)("inlineCode",{parentName:"p"},"KDE Wallet Manager"),", which comes installed by default on the\nGNU/Linux distributions that ships KDE as default desktop environment. Please refer to\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.kde.org/stable5/en/kdeutils/kwallet5/index.html"},"KWallet Handbook")," for more\ninformation."),(0,i.yg)("h3",{id:"the-test-backend"},"The ",(0,i.yg)("inlineCode",{parentName:"h3"},"test")," backend"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," backend is a password-less variation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"file")," backend. Keys are stored\nunencrypted on disk."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Provided for testing purposes only. The ",(0,i.yg)("inlineCode",{parentName:"strong"},"test")," backend is not recommended for use in production environments"),"."),(0,i.yg)("h3",{id:"the-memory-backend"},"The ",(0,i.yg)("inlineCode",{parentName:"h3"},"memory")," backend"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"memory")," backend stores keys in memory. The keys are immediately deleted after the program has exited."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Provided for testing purposes only. The ",(0,i.yg)("inlineCode",{parentName:"strong"},"memory")," backend is not recommended for use in production environments"),"."),(0,i.yg)("h3",{id:"setting-backend-using-the-env-variable"},"Setting backend using the env variable"),(0,i.yg)("p",null,"You can set the keyring-backend using env variable: ",(0,i.yg)("inlineCode",{parentName:"p"},"BINNAME_KEYRING_BACKEND"),". For example, if you binary name is ",(0,i.yg)("inlineCode",{parentName:"p"},"gaia-v5")," then set: ",(0,i.yg)("inlineCode",{parentName:"p"},"export GAIA_V5_KEYRING_BACKEND=pass")),(0,i.yg)("h2",{id:"adding-keys-to-the-keyring"},"Adding keys to the keyring"),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Make sure you can build your own binary, and replace ",(0,i.yg)("inlineCode",{parentName:"p"},"simd")," with the name of your binary in the snippets.")),(0,i.yg)("p",null,"Applications developed using the Cosmos SDK come with the ",(0,i.yg)("inlineCode",{parentName:"p"},"keys")," subcommand. For the purpose of this tutorial, we're running the ",(0,i.yg)("inlineCode",{parentName:"p"},"simd")," CLI, which is an application built using the Cosmos SDK for testing and educational purposes. For more information, see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/simapp"},(0,i.yg)("inlineCode",{parentName:"a"},"simapp")),"."),(0,i.yg)("p",null,"You can use ",(0,i.yg)("inlineCode",{parentName:"p"},"simd keys")," for help about the keys command and ",(0,i.yg)("inlineCode",{parentName:"p"},"simd keys [command] --help")," for more information about a particular subcommand."),(0,i.yg)("p",null,"To create a new key in the keyring, run the ",(0,i.yg)("inlineCode",{parentName:"p"},"add")," subcommand with a ",(0,i.yg)("inlineCode",{parentName:"p"},"<key_name>")," argument. For the purpose of this tutorial, we will solely use the ",(0,i.yg)("inlineCode",{parentName:"p"},"test")," backend, and call our new key ",(0,i.yg)("inlineCode",{parentName:"p"},"my_validator"),". This key will be used in the next section."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"$ simd keys add my_validator --keyring-backend test\n\n# Put the generated address in a variable for later use.\nMY_VALIDATOR_ADDRESS=$(simd keys show my_validator -a --keyring-backend test)\n")),(0,i.yg)("p",null,"This command generates a new 24-word mnemonic phrase, persists it to the relevant backend, and outputs information about the keypair. If this keypair will be used to hold value-bearing tokens, be sure to write down the mnemonic phrase somewhere safe!"),(0,i.yg)("p",null,"By default, the keyring generates a ",(0,i.yg)("inlineCode",{parentName:"p"},"secp256k1")," keypair. The keyring also supports ",(0,i.yg)("inlineCode",{parentName:"p"},"ed25519")," keys, which may be created by passing the ",(0,i.yg)("inlineCode",{parentName:"p"},"--algo ed25519")," flag. A keyring can of course hold both types of keys simultaneously, and the Cosmos SDK's ",(0,i.yg)("inlineCode",{parentName:"p"},"x/auth")," module supports natively these two public key algorithms."))}m.isMDXComponent=!0}}]);