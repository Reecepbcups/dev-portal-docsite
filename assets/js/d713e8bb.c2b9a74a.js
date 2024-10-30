"use strict";(self.webpackChunkdev_portal_docsite=self.webpackChunkdev_portal_docsite||[]).push([[2411],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>c});var i=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=i.createContext({}),d=function(e){var n=i.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=t,c=m["".concat(s,".").concat(u)]||m[u]||g[u]||r;return a?i.createElement(c,o(o({ref:n},p),{},{components:a})):i.createElement(c,o({ref:n},p))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:t,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91550:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(58168),t=(a(96540),a(15680));const r={},o="ADR 047: Extend Upgrade Plan",l={unversionedId:"build/architecture/adr-047-extend-upgrade-plan",id:"version-0.50/build/architecture/adr-047-extend-upgrade-plan",title:"ADR 047: Extend Upgrade Plan",description:"Changelog",source:"@site/cosmos-sdk_versioned_docs/version-0.50/build/architecture/adr-047-extend-upgrade-plan.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-047-extend-upgrade-plan",permalink:"/cosmos-sdk/0.50/build/architecture/adr-047-extend-upgrade-plan",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 046: Module Params",permalink:"/cosmos-sdk/0.50/build/architecture/adr-046-module-params"},next:{title:"ADR 048: Multi Tire Gas Price System",permalink:"/cosmos-sdk/0.50/build/architecture/adr-048-consensus-fees"}},s={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Protobuf Updates",id:"protobuf-updates",level:3},{value:"Upgrade Module Updates",id:"upgrade-module-updates",level:3},{value:"Cosmovisor Updates",id:"cosmovisor-updates",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Forwards Compatibility",id:"forwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],p={toc:d},m="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,i.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"adr-047-extend-upgrade-plan"},"ADR 047: Extend Upgrade Plan"),(0,t.yg)("h2",{id:"changelog"},"Changelog"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Nov, 23, 2021: Initial Draft"),(0,t.yg)("li",{parentName:"ul"},"May, 16, 2023: Proposal ABANDONED. ",(0,t.yg)("inlineCode",{parentName:"li"},"pre_run")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"post_run")," are not necessary anymore and adding the ",(0,t.yg)("inlineCode",{parentName:"li"},"artifacts")," brings minor benefits.")),(0,t.yg)("h2",{id:"status"},"Status"),(0,t.yg)("p",null,"ABANDONED"),(0,t.yg)("h2",{id:"abstract"},"Abstract"),(0,t.yg)("p",null,"This ADR expands the existing x/upgrade ",(0,t.yg)("inlineCode",{parentName:"p"},"Plan")," proto message to include new fields for defining pre-run and post-run processes within upgrade tooling.\nIt also defines a structure for providing downloadable artifacts involved in an upgrade."),(0,t.yg)("h2",{id:"context"},"Context"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"upgrade")," module in conjunction with Cosmovisor are designed to facilitate and automate a blockchain's transition from one version to another."),(0,t.yg)("p",null,"Users submit a software upgrade governance proposal containing an upgrade ",(0,t.yg)("inlineCode",{parentName:"p"},"Plan"),".\nThe ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/proto/cosmos/upgrade/v1beta1/upgrade.proto#L12"},"Plan")," currently contains the following fields:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": A short string identifying the new version."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"height"),": The chain height at which the upgrade is to be performed."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"info"),": A string containing information about the upgrade.")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," string can be anything.\nHowever, Cosmovisor will try to use the ",(0,t.yg)("inlineCode",{parentName:"p"},"info"),' field to automatically download a new version of the blockchain executable.\nFor the auto-download to work, Cosmovisor expects it to be either a stringified JSON object (with a specific structure defined through documentation), or a URL that will return such JSON.\nThe JSON object identifies URLs used to download the new blockchain executable for different platforms (OS and Architecture, e.g. "linux/amd64").\nSuch a URL can either return the executable file directly or can return an archive containing the executable and possibly other assets.'),(0,t.yg)("p",null,"If the URL returns an archive, it is decompressed into ",(0,t.yg)("inlineCode",{parentName:"p"},"{DAEMON_HOME}/cosmovisor/{upgrade name}"),".\nThen, if ",(0,t.yg)("inlineCode",{parentName:"p"},"{DAEMON_HOME}/cosmovisor/{upgrade name}/bin/{DAEMON_NAME}")," does not exist, but ",(0,t.yg)("inlineCode",{parentName:"p"},"{DAEMON_HOME}/cosmovisor/{upgrade name}/{DAEMON_NAME}")," does, the latter is copied to the former.\nIf the URL returns something other than an archive, it is downloaded to ",(0,t.yg)("inlineCode",{parentName:"p"},"{DAEMON_HOME}/cosmovisor/{upgrade name}/bin/{DAEMON_NAME}"),"."),(0,t.yg)("p",null,"If an upgrade height is reached and the new version of the executable version isn't available, Cosmovisor will stop running."),(0,t.yg)("p",null,"Both ",(0,t.yg)("inlineCode",{parentName:"p"},"DAEMON_HOME")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"DAEMON_NAME")," are ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/cosmovisor/v1.0.0/cosmovisor/README.md#command-line-arguments-and-environment-variables"},"environment variables used to configure Cosmovisor"),"."),(0,t.yg)("p",null,"Currently, there is no mechanism that makes Cosmovisor run a command after the upgraded chain has been restarted."),(0,t.yg)("p",null,"The current upgrade process has this timeline:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"An upgrade governance proposal is submitted and approved."),(0,t.yg)("li",{parentName:"ol"},"The upgrade height is reached."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"x/upgrade")," module writes the ",(0,t.yg)("inlineCode",{parentName:"li"},"upgrade_info.json")," file."),(0,t.yg)("li",{parentName:"ol"},"The chain halts."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor backs up the data directory (if set up to do so)."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor downloads the new executable (if not already in place)."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor executes the ",(0,t.yg)("inlineCode",{parentName:"li"},"${DAEMON_NAME} pre-upgrade"),"."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor restarts the app using the new version and same args originally provided.")),(0,t.yg)("h2",{id:"decision"},"Decision"),(0,t.yg)("h3",{id:"protobuf-updates"},"Protobuf Updates"),(0,t.yg)("p",null,"We will update the ",(0,t.yg)("inlineCode",{parentName:"p"},"x/upgrade.Plan")," message for providing upgrade instructions.\nThe upgrade instructions will contain a list of artifacts available for each platform.\nIt allows for the definition of a pre-run and post-run commands.\nThese commands are not consensus guaranteed; they will be executed by Cosmosvisor (or other) during its upgrade handling."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Plan {\n  // ... (existing fields)\n\n  UpgradeInstructions instructions = 6;\n}\n")),(0,t.yg)("p",null,"The new ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions instructions")," field MUST be optional."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message UpgradeInstructions {\n  string pre_run              = 1;\n  string post_run             = 2;\n  repeated Artifact artifacts = 3;\n  string description          = 4;\n}\n")),(0,t.yg)("p",null,"All fields in the ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions")," are optional."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"pre_run")," is a command to run prior to the upgraded chain restarting.\nIf defined, it will be executed after halting and downloading the new artifact but before restarting the upgraded chain.\nThe working directory this command runs from MUST be ",(0,t.yg)("inlineCode",{parentName:"p"},"{DAEMON_HOME}/cosmovisor/{upgrade name}"),".\nThis command MUST behave the same as the current ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/docs/migrations/pre-upgrade.md"},"pre-upgrade")," command.\nIt does not take in any command-line arguments and is expected to terminate with the following exit codes:"),(0,t.yg)("table",{parentName:"li"},(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Exit status code"),(0,t.yg)("th",{parentName:"tr",align:null},"How it is handled in Cosmosvisor"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"0")),(0,t.yg)("td",{parentName:"tr",align:null},"Assumes ",(0,t.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command executed successfully and continues the upgrade.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"1")),(0,t.yg)("td",{parentName:"tr",align:null},"Default exit code when ",(0,t.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command has not been implemented.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"30")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. This fails the entire upgrade.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"31")),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"pre-upgrade")," command was executed but failed. But the command is retried until exit code ",(0,t.yg)("inlineCode",{parentName:"td"},"1")," or ",(0,t.yg)("inlineCode",{parentName:"td"},"30")," are returned.")))),(0,t.yg)("p",{parentName:"li"},"If defined, then the app supervisors (e.g. Cosmovisor) MUST NOT run ",(0,t.yg)("inlineCode",{parentName:"p"},"app pre-run"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"post_run")," is a command to run after the upgraded chain has been started. If defined, this command MUST be only executed at most once by an upgrading node.\nThe output and exit code SHOULD be logged but SHOULD NOT affect the running of the upgraded chain.\nThe working directory this command runs from MUST be ",(0,t.yg)("inlineCode",{parentName:"p"},"{DAEMON_HOME}/cosmovisor/{upgrade name}"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"artifacts")," define items to be downloaded.\nIt SHOULD have only one entry per platform.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"description")," contains human-readable information about the upgrade and might contain references to external resources.\nIt SHOULD NOT be used for structured processing information."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-protobuf"},"message Artifact {\n  string platform      = 1;\n  string url           = 2;\n  string checksum      = 3;\n  string checksum_algo = 4;\n}\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"platform")," is a required string that SHOULD be in the format ",(0,t.yg)("inlineCode",{parentName:"li"},"{OS}/{CPU}"),", e.g. ",(0,t.yg)("inlineCode",{parentName:"li"},'"linux/amd64"'),".\nThe string ",(0,t.yg)("inlineCode",{parentName:"li"},'"any"')," SHOULD also be allowed.\nAn ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact")," with a ",(0,t.yg)("inlineCode",{parentName:"li"},"platform")," of ",(0,t.yg)("inlineCode",{parentName:"li"},'"any"')," SHOULD be used as a fallback when a specific ",(0,t.yg)("inlineCode",{parentName:"li"},"{OS}/{CPU}")," entry is not found.\nThat is, if an ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact")," exists with a ",(0,t.yg)("inlineCode",{parentName:"li"},"platform")," that matches the system's OS and CPU, that should be used;\notherwise, if an ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact")," exists with a ",(0,t.yg)("inlineCode",{parentName:"li"},"platform")," of ",(0,t.yg)("inlineCode",{parentName:"li"},"any"),", that should be used;\notherwise no artifact should be downloaded."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"url")," is a required URL string that MUST conform to ",(0,t.yg)("a",{parentName:"li",href:"https://www.ietf.org/rfc/rfc1738.txt"},"RFC 1738: Uniform Resource Locators"),".\nA request to this ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," MUST return either an executable file or an archive containing either ",(0,t.yg)("inlineCode",{parentName:"li"},"bin/{DAEMON_NAME}")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"{DAEMON_NAME}"),".\nThe URL should not contain checksum - it should be specified by the ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," attribute."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," is a checksum of the expected result of a request to the ",(0,t.yg)("inlineCode",{parentName:"li"},"url"),".\nIt is not required, but is recommended.\nIf provided, it MUST be a hex encoded checksum string.\nTools utilizing these ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," MUST fail if a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," is provided but is different from the checksum of the result returned by the ",(0,t.yg)("inlineCode",{parentName:"li"},"url"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"checksum_algo")," is a string identify the algorithm used to generate the ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum"),".\nRecommended algorithms: ",(0,t.yg)("inlineCode",{parentName:"li"},"sha256"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"sha512"),".\nAlgorithms also supported (but not recommended): ",(0,t.yg)("inlineCode",{parentName:"li"},"sha1"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"md5"),".\nIf a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," is provided, a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum_algo")," MUST also be provided.")),(0,t.yg)("p",null,"A ",(0,t.yg)("inlineCode",{parentName:"p"},"url")," is not required to contain a ",(0,t.yg)("inlineCode",{parentName:"p"},"checksum")," query parameter.\nIf the ",(0,t.yg)("inlineCode",{parentName:"p"},"url")," does contain a ",(0,t.yg)("inlineCode",{parentName:"p"},"checksum")," query parameter, the ",(0,t.yg)("inlineCode",{parentName:"p"},"checksum")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"checksum_algo")," fields MUST also be populated, and their values MUST match the value of the query parameter.\nFor example, if the ",(0,t.yg)("inlineCode",{parentName:"p"},"url")," is ",(0,t.yg)("inlineCode",{parentName:"p"},'"https://example.com?checksum=md5:d41d8cd98f00b204e9800998ecf8427e"'),", then the ",(0,t.yg)("inlineCode",{parentName:"p"},"checksum")," field must be ",(0,t.yg)("inlineCode",{parentName:"p"},'"d41d8cd98f00b204e9800998ecf8427e"')," and the ",(0,t.yg)("inlineCode",{parentName:"p"},"checksum_algo")," field must be ",(0,t.yg)("inlineCode",{parentName:"p"},'"md5"'),"."),(0,t.yg)("h3",{id:"upgrade-module-updates"},"Upgrade Module Updates"),(0,t.yg)("p",null,"If an upgrade ",(0,t.yg)("inlineCode",{parentName:"p"},"Plan")," does not use the new ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions")," field, existing functionality will be maintained.\nThe parsing of the ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," field as either a URL or ",(0,t.yg)("inlineCode",{parentName:"p"},"binaries")," JSON will be deprecated.\nDuring validation, if the ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," field is used as such, a warning will be issued, but not an error."),(0,t.yg)("p",null,"We will update the creation of the ",(0,t.yg)("inlineCode",{parentName:"p"},"upgrade-info.json")," file to include the ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions"),"."),(0,t.yg)("p",null,"We will update the optional validation available via CLI to account for the new ",(0,t.yg)("inlineCode",{parentName:"p"},"Plan")," structure.\nWe will add the following validation:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"If ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," are provided:",(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},"There MUST be at least one entry in ",(0,t.yg)("inlineCode",{parentName:"li"},"artifacts"),"."),(0,t.yg)("li",{parentName:"ol"},"All of the ",(0,t.yg)("inlineCode",{parentName:"li"},"artifacts")," MUST have a unique ",(0,t.yg)("inlineCode",{parentName:"li"},"platform"),"."),(0,t.yg)("li",{parentName:"ol"},"For each ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact"),", if the ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," contains a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," query parameter:",(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," query parameter value MUST be in the format of ",(0,t.yg)("inlineCode",{parentName:"li"},"{checksum_algo}:{checksum}"),"."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"{checksum}")," from the query parameter MUST equal the ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," provided in the ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact"),"."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"{checksum_algo}")," from the query parameter MUST equal the ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum_algo")," provided in the ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact"),"."))))),(0,t.yg)("li",{parentName:"ol"},"The following validation is currently done using the ",(0,t.yg)("inlineCode",{parentName:"li"},"info")," field. We will apply similar validation to the ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions"),".\nFor each ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact"),":",(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"platform")," MUST have the format ",(0,t.yg)("inlineCode",{parentName:"li"},"{OS}/{CPU}")," or be ",(0,t.yg)("inlineCode",{parentName:"li"},'"any"'),"."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," field MUST NOT be empty."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," field MUST be a proper URL."),(0,t.yg)("li",{parentName:"ol"},"A ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," MUST be provided either in the ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," field or as a query parameter in the ",(0,t.yg)("inlineCode",{parentName:"li"},"url"),"."),(0,t.yg)("li",{parentName:"ol"},"If the ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," field has a value and the ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," also has a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," query parameter, the two values MUST be equal."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," MUST return either a file or an archive containing either ",(0,t.yg)("inlineCode",{parentName:"li"},"bin/{DAEMON_NAME}")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"{DAEMON_NAME}"),"."),(0,t.yg)("li",{parentName:"ol"},"If a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," is provided (in the field or as a query param), the checksum of the result of the ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," MUST equal the provided checksum.")))),(0,t.yg)("p",null,"Downloading of an ",(0,t.yg)("inlineCode",{parentName:"p"},"Artifact")," will happen the same way that URLs from ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," are currently downloaded."),(0,t.yg)("h3",{id:"cosmovisor-updates"},"Cosmovisor Updates"),(0,t.yg)("p",null,"If the ",(0,t.yg)("inlineCode",{parentName:"p"},"upgrade-info.json")," file does not contain any ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions"),", existing functionality will be maintained."),(0,t.yg)("p",null,"We will update Cosmovisor to look for and handle the new ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"upgrade-info.json"),".\nIf the ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions")," are provided, we will do the following:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"info")," field will be ignored."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"artifacts")," field will be used to identify the artifact to download based on the ",(0,t.yg)("inlineCode",{parentName:"li"},"platform")," that Cosmovisor is running in."),(0,t.yg)("li",{parentName:"ol"},"If a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum")," is provided (either in the field or as a query param in the ",(0,t.yg)("inlineCode",{parentName:"li"},"url"),"), and the downloaded artifact has a different checksum, the upgrade process will be interrupted and Cosmovisor will exit with an error."),(0,t.yg)("li",{parentName:"ol"},"If a ",(0,t.yg)("inlineCode",{parentName:"li"},"pre_run")," command is defined, it will be executed at the same point in the process where the ",(0,t.yg)("inlineCode",{parentName:"li"},"app pre-upgrade")," command would have been executed.\nIt will be executed using the same environment as other commands run by Cosmovisor."),(0,t.yg)("li",{parentName:"ol"},"If a ",(0,t.yg)("inlineCode",{parentName:"li"},"post_run")," command is defined, it will be executed after executing the command that restarts the chain.\nIt will be executed in a background process using the same environment as the other commands.\nAny output generated by the command will be logged.\nOnce complete, the exit code will be logged.")),(0,t.yg)("p",null,"We will deprecate the use of the ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," field for anything other than human readable information.\nA warning will be logged if the ",(0,t.yg)("inlineCode",{parentName:"p"},"info")," field is used to define the assets (either by URL or JSON)."),(0,t.yg)("p",null,"The new upgrade timeline is very similar to the current one. Changes are in bold:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"An upgrade governance proposal is submitted and approved."),(0,t.yg)("li",{parentName:"ol"},"The upgrade height is reached."),(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"x/upgrade")," module writes the ",(0,t.yg)("inlineCode",{parentName:"li"},"upgrade_info.json")," file ",(0,t.yg)("strong",{parentName:"li"},"(now possibly with ",(0,t.yg)("inlineCode",{parentName:"strong"},"UpgradeInstructions"),")"),"."),(0,t.yg)("li",{parentName:"ol"},"The chain halts."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor backs up the data directory (if set up to do so)."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor downloads the new executable (if not already in place)."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor executes ",(0,t.yg)("strong",{parentName:"li"},"the ",(0,t.yg)("inlineCode",{parentName:"strong"},"pre_run")," command if provided"),", or else the ",(0,t.yg)("inlineCode",{parentName:"li"},"${DAEMON_NAME} pre-upgrade")," command."),(0,t.yg)("li",{parentName:"ol"},"Cosmovisor restarts the app using the new version and same args originally provided."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"Cosmovisor immediately runs the ",(0,t.yg)("inlineCode",{parentName:"strong"},"post_run")," command in a detached process."))),(0,t.yg)("h2",{id:"consequences"},"Consequences"),(0,t.yg)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,t.yg)("p",null,"Since the only change to existing definitions is the addition of the ",(0,t.yg)("inlineCode",{parentName:"p"},"instructions")," field to the ",(0,t.yg)("inlineCode",{parentName:"p"},"Plan")," message, and that field is optional, there are no backwards incompatibilities with respects to the proto messages.\nAdditionally, current behavior will be maintained when no ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions")," are provided, so there are no backwards incompatibilities with respects to either the upgrade module or Cosmovisor."),(0,t.yg)("h3",{id:"forwards-compatibility"},"Forwards Compatibility"),(0,t.yg)("p",null,"In order to utilize the ",(0,t.yg)("inlineCode",{parentName:"p"},"UpgradeInstructions")," as part of a software upgrade, both of the following must be true:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The chain must already be using a sufficiently advanced version of the Cosmos SDK."),(0,t.yg)("li",{parentName:"ol"},"The chain's nodes must be using a sufficiently advanced version of Cosmovisor.")),(0,t.yg)("h3",{id:"positive"},"Positive"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The structure for defining artifacts is clearer since it is now defined in the proto instead of in documentation."),(0,t.yg)("li",{parentName:"ol"},"Availability of a pre-run command becomes more obvious."),(0,t.yg)("li",{parentName:"ol"},"A post-run command becomes possible.")),(0,t.yg)("h3",{id:"negative"},"Negative"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"Plan")," message becomes larger. This is negligible because A) the ",(0,t.yg)("inlineCode",{parentName:"li"},"x/upgrades")," module only stores at most one upgrade plan, and B) upgrades are rare enough that the increased gas cost isn't a concern."),(0,t.yg)("li",{parentName:"ol"},"There is no option for providing a URL that will return the ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions"),"."),(0,t.yg)("li",{parentName:"ol"},"The only way to provide multiple assets (executables and other files) for a platform is to use an archive as the platform's artifact.")),(0,t.yg)("h3",{id:"neutral"},"Neutral"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Existing functionality of the ",(0,t.yg)("inlineCode",{parentName:"li"},"info")," field is maintained when the ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," aren't provided.")),(0,t.yg)("h2",{id:"further-discussions"},"Further Discussions"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r698708349"},"Draft PR #10032 Comment"),":\nConsider different names for ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions instructions")," (either the message type or field name)."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r754655072"},"Draft PR #10032 Comment"),":",(0,t.yg)("ol",{parentName:"li"},(0,t.yg)("li",{parentName:"ol"},"Consider putting the ",(0,t.yg)("inlineCode",{parentName:"li"},"string platform")," field inside ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," and make ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," a repeated field in ",(0,t.yg)("inlineCode",{parentName:"li"},"Plan"),"."),(0,t.yg)("li",{parentName:"ol"},"Consider using a ",(0,t.yg)("inlineCode",{parentName:"li"},"oneof")," field in the ",(0,t.yg)("inlineCode",{parentName:"li"},"Plan")," which could either be ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," or else a URL that should return the ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions"),"."),(0,t.yg)("li",{parentName:"ol"},"Consider allowing ",(0,t.yg)("inlineCode",{parentName:"li"},"info")," to either be a JSON serialized version of ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," or else a URL that returns that."))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r755462876"},"Draft PR #10032 Comment"),":\nConsider not including the ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions.description")," field, using the ",(0,t.yg)("inlineCode",{parentName:"li"},"info")," field for that purpose instead."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10032/files?authenticity_token=pLtzpnXJJB%2Fif2UWiTp9Td3MvRrBF04DvjSuEjf1azoWdLF%2BSNymVYw9Ic7VkqHgNLhNj6iq9bHQYnVLzMXd4g%3D%3D&file-filters%5B%5D=.go&file-filters%5B%5D=.proto#r754643691"},"Draft PR #10032 Comment"),":\nConsider allowing multiple artifacts to be downloaded for any given ",(0,t.yg)("inlineCode",{parentName:"li"},"platform")," by adding a ",(0,t.yg)("inlineCode",{parentName:"li"},"name")," field to the ",(0,t.yg)("inlineCode",{parentName:"li"},"Artifact")," message."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10602#discussion_r781438288"},"PR #10502 Comment"),"\nAllow the new ",(0,t.yg)("inlineCode",{parentName:"li"},"UpgradeInstructions")," to be provided via URL."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10602#discussion_r781438288"},"PR #10502 Comment"),"\nAllow definition of a ",(0,t.yg)("inlineCode",{parentName:"li"},"signer")," for assets (as an alternative to using a ",(0,t.yg)("inlineCode",{parentName:"li"},"checksum"),").")),(0,t.yg)("h2",{id:"references"},"References"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/proto/cosmos/upgrade/v1beta1/upgrade.proto"},"Current upgrade.proto")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/x/upgrade/spec/README.md"},"Upgrade Module README")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/cosmovisor/v1.0.0/cosmovisor/README.md"},"Cosmovisor README")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.44.5/docs/migrations/pre-upgrade.md"},"Pre-upgrade README")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10032"},"Draft/POC PR #10032")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://www.ietf.org/rfc/rfc1738.txt"},"RFC 1738: Uniform Resource Locators"))))}g.isMDXComponent=!0}}]);