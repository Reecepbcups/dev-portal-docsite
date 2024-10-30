"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[75455],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),g=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return o.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=g(t),m=i,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?o.createElement(f,l(l({ref:n},p),{},{components:t})):o.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[s]="string"==typeof e?e:i,l[1]=r;for(var g=2;g<a;g++)l[g]=t[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>g});var o=t(58168),i=(t(96540),t(15680));const a={sidebar_position:1},l="Confix",r={unversionedId:"build/tooling/confix",id:"version-0.47/build/tooling/confix",title:"Confix",description:"Confix is a configuration management tool that allows you to manage your configuration via CLI.",source:"@site/cosmos-sdk_versioned_docs/version-0.47/build/tooling/02-confix.md",sourceDirName:"build/tooling",slug:"/build/tooling/confix",permalink:"/cosmos-sdk/0.47/build/tooling/confix",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Cosmovisor",permalink:"/cosmos-sdk/0.47/build/tooling/cosmovisor"},next:{title:"AutoCLI",permalink:"/cosmos-sdk/0.47/build/tooling/autocli"}},c={},g=[{value:"Installation",id:"installation",level:2},{value:"Add Config Command",id:"add-config-command",level:3},{value:"Using Confix Standalone",id:"using-confix-standalone",level:3},{value:"Usage",id:"usage",level:2},{value:"Get",id:"get",level:3},{value:"Set",id:"set",level:3},{value:"Migrate",id:"migrate",level:3},{value:"Diff",id:"diff",level:3},{value:"Maintainer",id:"maintainer",level:3},{value:"Credits",id:"credits",level:2}],p={toc:g},s="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(s,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"confix"},"Confix"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Confix")," is a configuration management tool that allows you to manage your configuration via CLI."),(0,i.yg)("p",null,"It is based on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/5013bc3f4a6d64dcc2bf02ccc002ebc9881c62e4/docs/rfc/rfc-019-config-version.md"},"CometBFT RFC 019"),"."),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("h3",{id:"add-config-command"},"Add Config Command"),(0,i.yg)("p",null,"To add the confix tool, it's required to add the ",(0,i.yg)("inlineCode",{parentName:"p"},"ConfigCommand")," to your application's root command file (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"simd/cmd/root.go"),")."),(0,i.yg)("p",null,"Import the ",(0,i.yg)("inlineCode",{parentName:"p"},"confixCmd")," package:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'import "cosmossdk.io/tools/confix/cmd"\n')),(0,i.yg)("p",null,"Find the following line:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"initRootCmd(rootCmd, encodingConfig)\n")),(0,i.yg)("p",null,"After that line, add the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"rootCmd.AddCommand(\n    confixcmd.ConfigCommand(),\n)\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ConfixCommand")," function builds the ",(0,i.yg)("inlineCode",{parentName:"p"},"config")," root command and is defined in the ",(0,i.yg)("inlineCode",{parentName:"p"},"confixCmd")," package (",(0,i.yg)("inlineCode",{parentName:"p"},"cosmossdk.io/tools/confix/cmd"),").\nAn implementation example can be found in ",(0,i.yg)("inlineCode",{parentName:"p"},"simapp"),"."),(0,i.yg)("p",null,"The command will be available as ",(0,i.yg)("inlineCode",{parentName:"p"},"simd config"),"."),(0,i.yg)("h3",{id:"using-confix-standalone"},"Using Confix Standalone"),(0,i.yg)("p",null,"To use Confix standalone, without having to add it in your application, install it with the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"go install cosmossdk.io/tools/confix/cmd/confix@latest\n")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Currently, due to the replace directive in the Confix go.mod, it is not possible to use ",(0,i.yg)("inlineCode",{parentName:"p"},"go install"),".\nBuilding from source or importing in an application is required until that replace directive is removed.")),(0,i.yg)("p",null,"Alternatively, for building from source, simply run ",(0,i.yg)("inlineCode",{parentName:"p"},"make confix"),". The binary will be located in ",(0,i.yg)("inlineCode",{parentName:"p"},"tools/confix"),"."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"Use standalone:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"confix --help\n")),(0,i.yg)("p",null,"Use in simd:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd config fix --help\n")),(0,i.yg)("h3",{id:"get"},"Get"),(0,i.yg)("p",null,"Get a configuration value, e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd config get app pruning # gets the value pruning from app.toml\nsimd config get client chain-id # gets the value chain-id from client.toml\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"confix get ~/.simapp/config/app.toml pruning # gets the value pruning from app.toml\nconfix get ~/.simapp/config/client.toml chain-id # gets the value chain-id from client.toml\n")),(0,i.yg)("h3",{id:"set"},"Set"),(0,i.yg)("p",null,"Set a configuration value, e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'simd config set app pruning "enabled" # sets the value pruning from app.toml\nsimd config set client chain-id "foo-1" # sets the value chain-id from client.toml\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'confix set ~/.simapp/config/app.toml pruning "enabled" # sets the value pruning from app.toml\nconfix set ~/.simapp/config/client.toml chain-id "foo-1" # sets the value chain-id from client.toml\n')),(0,i.yg)("h3",{id:"migrate"},"Migrate"),(0,i.yg)("p",null,"Migrate a configuration file to a new version, e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd config migrate v0.47 # migrates defaultHome/config/app.toml to the latest v0.47 config\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"confix migrate v0.47 ~/.simapp/config/app.toml # migrate ~/.simapp/config/app.toml to the latest v0.47 config\n")),(0,i.yg)("h3",{id:"diff"},"Diff"),(0,i.yg)("p",null,"Get the diff between a given configuration file and the default configuration file, e.g.:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"simd config diff v0.47 # gets the diff between defaultHome/config/app.toml and the latest v0.47 config\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"confix diff v0.47 ~/.simapp/config/app.toml # gets the diff between ~/.simapp/config/app.toml and the latest v0.47 config\n")),(0,i.yg)("h3",{id:"maintainer"},"Maintainer"),(0,i.yg)("p",null,"At each SDK modification of the default configuration, add the default SDK config under ",(0,i.yg)("inlineCode",{parentName:"p"},"data/v0.XX-app.toml"),".\nThis allows users to use the tool standalone."),(0,i.yg)("h2",{id:"credits"},"Credits"),(0,i.yg)("p",null,"This project is based on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/5013bc3f4a6d64dcc2bf02ccc002ebc9881c62e4/docs/rfc/rfc-019-config-version.md"},"CometBFT RFC 019")," and their own implementation of ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/v0.36.x/scripts/confix/confix.go"},"confix"),"."))}d.isMDXComponent=!0}}]);