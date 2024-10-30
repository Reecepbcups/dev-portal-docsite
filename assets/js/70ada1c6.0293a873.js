"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[97304],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(58168),i=(n(96540),n(15680));const r={},a="Testing the Oracle Module",l={unversionedId:"tutorials/vote-extensions/oracle/testing-oracle",id:"version-0.52/tutorials/vote-extensions/oracle/testing-oracle",title:"Testing the Oracle Module",description:"We will guide you through the process of testing the Oracle module in your application. The Oracle module uses vote extensions to provide current price data. If you would like to see the complete working oracle module please see here.",source:"@site/cosmos-sdk_versioned_docs/version-0.52/tutorials/vote-extensions/oracle/03-testing-oracle.md",sourceDirName:"tutorials/vote-extensions/oracle",slug:"/tutorials/vote-extensions/oracle/testing-oracle",permalink:"/cosmos-sdk/tutorials/vote-extensions/oracle/testing-oracle",draft:!1,tags:[],version:"0.52",sidebarPosition:3,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Implementing Vote Extensions",permalink:"/cosmos-sdk/tutorials/vote-extensions/oracle/implementing-vote-extensions"}},s={},c=[{value:"Step 1: Compile and Install the Application",id:"step-1-compile-and-install-the-application",level:2},{value:"Step 2: Initialise the Application",id:"step-2-initialise-the-application",level:2},{value:"Step 3: Start the Application",id:"step-3-start-the-application",level:2},{value:"Step 4: Query the Oracle Prices",id:"step-4-query-the-oracle-prices",level:2},{value:"Understanding Vote Extensions in Oracle",id:"understanding-vote-extensions-in-oracle",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"testing-the-oracle-module"},"Testing the Oracle Module"),(0,i.yg)("p",null,"We will guide you through the process of testing the Oracle module in your application. The Oracle module uses vote extensions to provide current price data. If you would like to see the complete working oracle module please see ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/sdk-tutorials/blob/master/tutorials/oracle/base/x/oracle"},"here"),"."),(0,i.yg)("h2",{id:"step-1-compile-and-install-the-application"},"Step 1: Compile and Install the Application"),(0,i.yg)("p",null,"First, we need to compile and install the application. Please ensure you are in the ",(0,i.yg)("inlineCode",{parentName:"p"},"tutorials/oracle/base")," directory. Run the following command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"make install\n")),(0,i.yg)("p",null,"This command compiles the application and moves the resulting binary to a location in your system's PATH."),(0,i.yg)("h2",{id:"step-2-initialise-the-application"},"Step 2: Initialise the Application"),(0,i.yg)("p",null,"Next, we need to initialise the application. Run the following command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"make init\n")),(0,i.yg)("p",null,"This command runs the script ",(0,i.yg)("inlineCode",{parentName:"p"},"tutorials/oracle/base/scripts/init.sh"),", which sets up the necessary configuration for your application to run. This includes creating the ",(0,i.yg)("inlineCode",{parentName:"p"},"app.toml")," configuration file and initialising the blockchain with a genesis block."),(0,i.yg)("h2",{id:"step-3-start-the-application"},"Step 3: Start the Application"),(0,i.yg)("p",null,"Now, we can start the application. Run the following command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"exampled start\n")),(0,i.yg)("p",null,"This command starts your application, begins the blockchain node, and starts processing transactions."),(0,i.yg)("h2",{id:"step-4-query-the-oracle-prices"},"Step 4: Query the Oracle Prices"),(0,i.yg)("p",null,"Finally, we can query the current prices from the Oracle module. Run the following command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"exampled q oracle prices\n")),(0,i.yg)("p",null,"This command queries the current prices from the Oracle module. The expected output shows that the vote extensions were successfully included in the block and the Oracle module was able to retrieve the price data."),(0,i.yg)("h2",{id:"understanding-vote-extensions-in-oracle"},"Understanding Vote Extensions in Oracle"),(0,i.yg)("p",null,"In the Oracle module, the ",(0,i.yg)("inlineCode",{parentName:"p"},"ExtendVoteHandler")," function is responsible for creating the vote extensions. This function fetches the current prices from the provider, creates a ",(0,i.yg)("inlineCode",{parentName:"p"},"OracleVoteExtension")," struct with these prices, and then marshals this struct into bytes. These bytes are then set as the vote extension."),(0,i.yg)("p",null,"In the context of testing, the Oracle module uses a mock provider to simulate the behavior of a real price provider. This mock provider is defined in the mockprovider package and is used to return predefined prices for specific currency pairs."),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"In this tutorial, we've delved into the concept of Oracle's in blockchain technology, focusing on their role in providing external data to a blockchain network. We've explored vote extensions, a powerful feature of ABCI++, and integrated them into a Cosmos SDK application to create a price oracle module."),(0,i.yg)("p",null,"Through hands-on exercises, you've implemented vote extensions, and tested their effectiveness in providing timely and accurate asset price information. You've gained practical insights by setting up a mock provider for testing and analysing the process of extending votes, verifying vote extensions, and preparing and processing proposals."),(0,i.yg)("p",null,"Keep experimenting with these concepts, engage with the community, and stay updated on new advancements. The knowledge you've acquired here is crucial for developing robust and reliable blockchain applications that can interact with real-world data."))}d.isMDXComponent=!0}}]);