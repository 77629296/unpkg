'use strict';(function(m,z,c){function A(){A=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var d=arguments[b],f;for(f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};return A.apply(this,arguments)}function pa(a,b){b||(b=a.slice(0));a.raw=b;return a}function O(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a["default"]:a}function C(a,b){return b={exports:{}},a(b,b.exports),b.exports}function H(a,b,d,f,c){for(var e in a)if(qa(a,e)){try{if("function"!==
typeof a[e]){var g=Error((f||"React class")+": "+d+" type `"+e+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[e]+"`.");g.name="Invariant Violation";throw g;}var h=a[e](b,e,f,d,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(p){h=p}!h||h instanceof Error||I((f||"React class")+": type specification of "+d+" `"+e+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof h+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
if(h instanceof Error&&!(h.message in J)){J[h.message]=!0;var k=c?c():"";I("Failed "+d+" type: "+h.message+(null!=k?k:""))}}}function D(){return null}function ra(a,b){if(null===b)return null;var d;if(0===a.length)return a=new Date(0),a.setUTCFullYear(b),a;if(d=sa.exec(a)){a=new Date(0);var f=parseInt(d[1],10)-1;a.setUTCFullYear(b,f);return a}return(d=ta.exec(a))?(a=new Date(0),d=parseInt(d[1],10),a.setUTCFullYear(b,0,d),a):(d=ua.exec(a))?(a=new Date(0),f=parseInt(d[1],10)-1,d=parseInt(d[2],10),a.setUTCFullYear(b,
f,d),a):(d=va.exec(a))?(a=parseInt(d[1],10)-1,P(b,a)):(d=wa.exec(a))?(a=parseInt(d[1],10)-1,d=parseInt(d[2],10)-1,P(b,a,d)):null}function xa(a){var b;if(b=ya.exec(a))return a=parseFloat(b[1].replace(",",".")),a%24*36E5;if(b=za.exec(a)){a=parseInt(b[1],10);var d=parseFloat(b[2].replace(",","."));return a%24*36E5+6E4*d}return(b=Aa.exec(a))?(a=parseInt(b[1],10),d=parseInt(b[2],10),b=parseFloat(b[3].replace(",",".")),a%24*36E5+6E4*d+1E3*b):null}function Ba(a){var b;return(b=Ca.exec(a))?0:(b=Da.exec(a))?
(a=60*parseInt(b[2],10),"+"===b[1]?-a:a):(b=Ea.exec(a))?(a=60*parseInt(b[2],10)+parseInt(b[3],10),"+"===b[1]?-a:a):0}function P(a,b,d){b=b||0;d=d||0;var f=new Date(0);f.setUTCFullYear(a,0,4);a=f.getUTCDay()||7;b=7*b+d+1-a;f.setUTCDate(f.getUTCDate()+b);return f}function Fa(a){var b=a%100;if(20<b||10>b)switch(b%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"}function Ga(a,b,d){var f=a.match(d),c=f.length;for(a=0;a<c;a++)d=b[f[a]]||K[f[a]],f[a]=d?d:Ha(f[a]);return function(a){for(var b=
"",d=0;d<c;d++)b=f[d]instanceof Function?b+f[d](a,K):b+f[d];return b}}function Ha(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,"")}function Q(a,b){b=b||"";var d=Math.abs(a),c=d%60;return(0<a?"-":"+")+r(Math.floor(d/60),2)+b+r(c,2)}function r(a,b){for(a=Math.abs(a).toString();a.length<b;)a="0"+a;return a}function L(a){a=String(a).split("");for(var b=[];a.length;)b.unshift(a.splice(-3).join(""));return b.join(",")}function Ia(a,b){void 0===b&&(b=1);return(100*a).toPrecision(b+
2)}function R(a){return a&&a.map(function(a,d){return m.createElement(a.tag,y({key:d},a.attr),R(a.child))})}function S(a){return function(b){return m.createElement(Ja,y({attr:y({},a.attr)},b),R(a.child))}}function Ja(a){var b=function(b){var d=a.size||b.size||"1em";if(b.className)var c=b.className;a.className&&(c=(c?c+" ":"")+a.className);var l=a.attr,g=a.title,h=Ka(a,["attr","title"]);return m.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,l,h,{className:c,
style:y({color:a.color||b.color},b.style,a.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),g&&m.createElement("title",null,g),a.children)};return void 0!==T?m.createElement(T.Consumer,null,function(a){return b(a)}):b(U)}function V(a,b){var d=b.css;var f=["css"];if(null==b)b={};else{var e={},l=Object.keys(b),g;for(g=0;g<l.length;g++){var h=l[g];0<=f.indexOf(h)||(e[h]=b[h])}b=e}return c.jsx(a,A({css:A({},d,{verticalAlign:"text-bottom"})},b))}function La(a){return V(W,a)}function Ma(a){return V(X,
a)}function Y(){var a=pa(["\n  html {\n    box-sizing: border-box;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n    margin: 0;\n  }\n\n  body {\n    ","\n    font-size: 16px;\n    line-height: 1.5;\n    overflow-wrap: break-word;\n    background: white;\n    color: black;\n  }\n\n  code {\n    ","\n    font-size: 1rem;\n    padding: 0 3px;\n    background-color: #eee;\n  }\n\n  dd,\n  ul {\n    margin-left: 0;\n    padding-left: 25px;\n  }\n"]);
Y=function(){return a};return a}function k(a){return c.jsx("a",A({},a,{css:{color:"#0076ff",textDecoration:"none",":hover":{textDecoration:"underline"}}}))}function Z(a){return c.jsx("div",{css:{textAlign:"center",flex:"1"}},a.children)}function aa(a){return c.jsx("img",A({},a,{css:{maxWidth:"90%"}}))}function Na(a){a=a.data.totals;var b=v(a.since),d=v(a.until);return c.jsx("p",null,"From ",c.jsx("strong",null,ba(b,"MMM D"))," to"," ",c.jsx("strong",null,ba(d,"MMM D"))," unpkg served"," ",c.jsx("strong",
null,L(a.requests.all))," requests and a total of ",c.jsx("strong",null,ca(a.bandwidth.all))," of data to"," ",c.jsx("strong",null,L(a.uniques.all))," unique visitors,"," ",c.jsx("strong",null,Ia(a.requests.cached/a.requests.all,2),"%")," ","of which were served from the cache.")}function da(){var a=m.useState("object"===typeof window&&window.localStorage&&window.localStorage.savedStats?JSON.parse(window.localStorage.savedStats):null),b=a[0],d=a[1];a=!(!b||b.error);var f=JSON.stringify(b);m.useEffect(function(){window.localStorage.savedStats=
f},[f]);m.useEffect(function(){fetch("/api/stats?period=last-month").then(function(a){return a.json()}).then(d)},[]);return c.jsx(m.Fragment,null,c.jsx(c.Global,{styles:Oa}),c.jsx("div",{css:{maxWidth:740,margin:"0 auto"}},c.jsx("div",{css:{padding:"0 20px"}},c.jsx("header",null,c.jsx("h1",{css:{textAlign:"center",fontSize:"4.5em",letterSpacing:"0.05em","@media (min-width: 700px)":{marginTop:"1.5em"}}},"UNPKG"),c.jsx("p",null,"unpkg is a fast, global content delivery network for everything on"," ",
c.jsx(k,{href:"https://www.npmjs.com/"},"npm"),". Use it to quickly and easily load any file from any package using a URL like:"),c.jsx("div",{css:{textAlign:"center",backgroundColor:"#eee",margin:"2em 0",padding:"5px 0"}},"unpkg.com/:package@:version/:file"),a&&c.jsx(Na,{data:b})),c.jsx("h3",{css:{fontSize:"1.6em"},id:"examples"},"Examples"),c.jsx("p",null,"Using a fixed version:"),c.jsx("ul",null,c.jsx("li",null,c.jsx(k,{href:"/react@16.7.0/umd/react.production.min.js"},"unpkg.com/react@16.7.0/umd/react.production.min.js")),
c.jsx("li",null,c.jsx(k,{href:"/react-dom@16.7.0/umd/react-dom.production.min.js"},"unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"))),c.jsx("p",null,"You may also use a"," ",c.jsx(k,{href:"https://docs.npmjs.com/misc/semver"},"semver range")," ","or a ",c.jsx(k,{href:"https://docs.npmjs.com/cli/dist-tag"},"tag")," ","instead of a fixed version number, or omit the version/tag entirely to use the ",c.jsx("code",null,"latest")," tag."),c.jsx("ul",null,c.jsx("li",null,c.jsx(k,{href:"/react@^16/umd/react.production.min.js"},
"unpkg.com/react@^16/umd/react.production.min.js")),c.jsx("li",null,c.jsx(k,{href:"/react/umd/react.production.min.js"},"unpkg.com/react/umd/react.production.min.js"))),c.jsx("p",null,"If you omit the file path (i.e. use a \u201cbare\u201d URL), unpkg will serve the file specified by the ",c.jsx("code",null,"unpkg")," field in"," ",c.jsx("code",null,"package.json"),", or fall back to ",c.jsx("code",null,"main"),"."),c.jsx("ul",null,c.jsx("li",null,c.jsx(k,{href:"/jquery"},"unpkg.com/jquery")),c.jsx("li",
null,c.jsx(k,{href:"/three"},"unpkg.com/three"))),c.jsx("p",null,"Append a ",c.jsx("code",null,"/")," at the end of a URL to view a listing of all the files in a package."),c.jsx("ul",null,c.jsx("li",null,c.jsx(k,{href:"/react/"},"unpkg.com/react/")),c.jsx("li",null,c.jsx(k,{href:"/react-router/"},"unpkg.com/react-router/"))),c.jsx("h3",{css:{fontSize:"1.6em"},id:"query-params"},"Query Parameters"),c.jsx("dl",null,c.jsx("dt",null,c.jsx("code",null,"?meta")),c.jsx("dd",null,"Return metadata about any file in a package as JSON (e.g.",
c.jsx("code",null,"/any/file?meta"),")"),c.jsx("dt",null,c.jsx("code",null,"?module")),c.jsx("dd",null,"Expands all"," ",c.jsx(k,{href:"https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier"},"\u201cbare\u201d ",c.jsx("code",null,"import")," specifiers")," ","in JavaScript modules to unpkg URLs. This feature is"," ",c.jsx("em",null,"very experimental"))),c.jsx("h3",{css:{fontSize:"1.6em"},id:"cache-behavior"},"Cache Behavior"),c.jsx("p",null,"The CDN caches files based on their permanent URL, which includes the npm package version. This works because npm does not allow package authors to overwrite a package that has already been published with a different one at the same version number."),
c.jsx("p",null,"Browsers are instructed (via the ",c.jsx("code",null,"Cache-Control")," header) to cache assets indefinitely (1 year)."),c.jsx("p",null,"URLs that do not specify a package version number redirect to one that does. This is the ",c.jsx("code",null,"latest")," version when no version is specified, or the ",c.jsx("code",null,"maxSatisfying")," version when a"," ",c.jsx(k,{href:"https://github.com/npm/node-semver"},"semver version")," ","is given. Redirects are cached for 10 minutes at the CDN, 1 minute in browsers."),
c.jsx("p",null,"If you want users to be able to use the latest version when you cut a new release, the best policy is to put the version number in the URL directly in your installation instructions. This will also load more quickly because we won't have to resolve the latest version and redirect them."),c.jsx("h3",{css:{fontSize:"1.6em"},id:"workflow"},"Workflow"),c.jsx("p",null,"For npm package authors, unpkg relieves the burden of publishing your code to a CDN in addition to the npm registry. All you need to do is include your",
" ",c.jsx(k,{href:"https://github.com/umdjs/umd"},"UMD")," build in your npm package (not your repo, that's different!)."),c.jsx("p",null,"You can do this easily using the following setup:"),c.jsx("ul",null,c.jsx("li",null,"Add the ",c.jsx("code",null,"umd")," (or ",c.jsx("code",null,"dist"),") directory to your"," ",c.jsx("code",null,".gitignore")," file"),c.jsx("li",null,"Add the ",c.jsx("code",null,"umd")," directory to your"," ",c.jsx(k,{href:"https://docs.npmjs.com/files/package.json#files"},
"files array")," ","in ",c.jsx("code",null,"package.json")),c.jsx("li",null,"Use a build script to generate your UMD build in the"," ",c.jsx("code",null,"umd")," directory when you publish")),c.jsx("p",null,"That's it! Now when you ",c.jsx("code",null,"npm publish")," you'll have a version available on unpkg as well."),c.jsx("h3",{css:{fontSize:"1.6em"},id:"about"},"About"),c.jsx("p",null,"unpkg is an"," ",c.jsx(k,{href:"https://github.com/mjackson/unpkg"},"open source")," ","project built and maintained by",
" ",c.jsx(k,{href:"https://twitter.com/mjackson"},"Michael Jackson"),". unpkg is not affiliated with or supported by npm, Inc. in any way. Please do not contact npm for help with unpkg. Instead, please reach out to ",c.jsx(k,{href:"https://twitter.com/unpkg"},"@unpkg")," with any questions or concerns."),c.jsx("p",null,"The unpkg CDN is powered by"," ",c.jsx(k,{href:"https://www.cloudflare.com"},"Cloudflare"),", one of the world's largest and fastest cloud network platforms."," ",a&&c.jsx("span",
null,"In the past month, Cloudflare served over"," ",c.jsx("strong",null,ca(b.totals.bandwidth.all))," to"," ",c.jsx("strong",null,L(b.totals.uniques.all))," unique unpkg users all over the world.")),c.jsx("div",{css:{margin:"4em 0",display:"flex",justifyContent:"center"}},c.jsx(Z,null,c.jsx("a",{href:"https://www.cloudflare.com"},c.jsx(aa,{alt:"Cloudflare",src:"/_client/46bc46bc8accec6a.png",height:"100"})))),c.jsx("p",null,"The origin servers run on world-class auto-scaling infrastructure provided by",
" ",c.jsx(k,{href:"https://cloud.google.com/"},"Google Cloud")," which dynamically adjusts the number of available servers to meet the current demand for maximum efficiency and uptime."),c.jsx("div",{css:{margin:"4em 0 0",display:"flex",justifyContent:"center"}},c.jsx(Z,null,c.jsx("a",{href:"https://cloud.google.com"},c.jsx(aa,{alt:"Google Cloud",src:"/_client/842e885028f6900b.png",width:"320"})))))),c.jsx("footer",{css:{marginTop:"5rem",background:"black",color:"#aaa"}},c.jsx("div",{css:{maxWidth:740,
padding:"10px 20px",margin:"0 auto",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}},c.jsx("p",null,c.jsx("span",null,"Build: ","9f44cbf")),c.jsx("p",null,c.jsx("span",null,"\u00a9 ",(new Date).getFullYear()," UNPKG")),c.jsx("p",{css:{fontSize:"1.5rem"}},c.jsx("a",{href:"https://twitter.com/unpkg",css:{color:"#aaa",display:"inline-block",":hover":{color:"white"}}},c.jsx(La,null)),c.jsx("a",{href:"https://github.com/mjackson/unpkg",css:{color:"#aaa",display:"inline-block",
marginLeft:"1rem",":hover":{color:"white"}}},c.jsx(Ma,null))))))}var Pa="default"in m?m["default"]:m;z=z&&z.hasOwnProperty("default")?z["default"]:z;var F=C(function(a,b){function d(a){if("object"===typeof a&&null!==a){var b=a.$$typeof;switch(b){case e:switch(a=a.type,a){case t:case q:case g:case k:case h:case n:return a;default:switch(a=a&&a.$$typeof,a){case m:case u:case p:return a;default:return b}}case w:case x:case l:return b}}}function c(a){return d(a)===q}Object.defineProperty(b,"__esModule",
{value:!0});var e=(a="function"===typeof Symbol&&Symbol.for)?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,g=a?Symbol.for("react.fragment"):60107,h=a?Symbol.for("react.strict_mode"):60108,k=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,m=a?Symbol.for("react.context"):60110,t=a?Symbol.for("react.async_mode"):60111,q=a?Symbol.for("react.concurrent_mode"):60111,u=a?Symbol.for("react.forward_ref"):60112,n=a?Symbol.for("react.suspense"):60113,x=a?
Symbol.for("react.memo"):60115,w=a?Symbol.for("react.lazy"):60116;b.typeOf=d;b.AsyncMode=t;b.ConcurrentMode=q;b.ContextConsumer=m;b.ContextProvider=p;b.Element=e;b.ForwardRef=u;b.Fragment=g;b.Lazy=w;b.Memo=x;b.Portal=l;b.Profiler=k;b.StrictMode=h;b.Suspense=n;b.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===g||a===q||a===k||a===h||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===w||a.$$typeof===x||a.$$typeof===p||a.$$typeof===m||a.$$typeof===u)};b.isAsyncMode=
function(a){return c(a)||d(a)===t};b.isConcurrentMode=c;b.isContextConsumer=function(a){return d(a)===m};b.isContextProvider=function(a){return d(a)===p};b.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===e};b.isForwardRef=function(a){return d(a)===u};b.isFragment=function(a){return d(a)===g};b.isLazy=function(a){return d(a)===w};b.isMemo=function(a){return d(a)===x};b.isPortal=function(a){return d(a)===l};b.isProfiler=function(a){return d(a)===k};b.isStrictMode=function(a){return d(a)===
h};b.isSuspense=function(a){return d(a)===n}});O(F);var fa=C(function(a,b){(function(){function a(a){if("object"===typeof a&&null!==a){var b=a.$$typeof;switch(b){case l:switch(a=a.type,a){case q:case u:case h:case p:case k:case x:return a;default:switch(a=a&&a.$$typeof,a){case t:case n:case m:return a;default:return b}}case E:case w:case g:return b}}}function c(b){return a(b)===u}Object.defineProperty(b,"__esModule",{value:!0});var e="function"===typeof Symbol&&Symbol.for,l=e?Symbol.for("react.element"):
60103,g=e?Symbol.for("react.portal"):60106,h=e?Symbol.for("react.fragment"):60107,k=e?Symbol.for("react.strict_mode"):60108,p=e?Symbol.for("react.profiler"):60114,m=e?Symbol.for("react.provider"):60109,t=e?Symbol.for("react.context"):60110,q=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,n=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.memo"):60115,E=e?Symbol.for("react.lazy"):60116;e=function(){};var Qa=function(a){for(var b=
arguments.length,d=Array(1<b?b-1:0),c=1;c<b;c++)d[c-1]=arguments[c];var f=0;b="Warning: "+a.replace(/%s/g,function(){return d[f++]});"undefined"!==typeof console&&console.warn(b);try{throw Error(b);}catch(fb){}},Ra=e=function(a,b){if(void 0===b)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!a){for(var d=arguments.length,c=Array(2<d?d-2:0),f=2;f<d;f++)c[f-2]=arguments[f];Qa.apply(void 0,[b].concat(c))}},ea=!1;b.typeOf=a;b.AsyncMode=q;b.ConcurrentMode=
u;b.ContextConsumer=t;b.ContextProvider=m;b.Element=l;b.ForwardRef=n;b.Fragment=h;b.Lazy=E;b.Memo=w;b.Portal=g;b.Profiler=p;b.StrictMode=k;b.Suspense=x;b.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===h||a===u||a===p||a===k||a===x||"object"===typeof a&&null!==a&&(a.$$typeof===E||a.$$typeof===w||a.$$typeof===m||a.$$typeof===t||a.$$typeof===n)};b.isAsyncMode=function(b){ea||(ea=!0,Ra(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."));
return c(b)||a(b)===q};b.isConcurrentMode=c;b.isContextConsumer=function(b){return a(b)===t};b.isContextProvider=function(b){return a(b)===m};b.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===l};b.isForwardRef=function(b){return a(b)===n};b.isFragment=function(b){return a(b)===h};b.isLazy=function(b){return a(b)===E};b.isMemo=function(b){return a(b)===w};b.isPortal=function(b){return a(b)===g};b.isProfiler=function(b){return a(b)===p};b.isStrictMode=function(b){return a(b)===
k};b.isSuspense=function(b){return a(b)===x}})()});O(fa);var ha=C(function(a){a.exports=fa}),ia=Object.getOwnPropertySymbols,Sa=Object.prototype.hasOwnProperty,Ta=Object.prototype.propertyIsEnumerable,Ua=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=0;10>a;a++)b["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return!1;var d={};"abcdefghijklmnopqrst".split("").forEach(function(a){d[a]=
a});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},d)).join("")?!1:!0}catch(f){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var d=Object(a);for(var c,e=1;e<arguments.length;e++){var l=Object(arguments[e]);for(var g in l)Sa.call(l,g)&&(d[g]=l[g]);if(ia){c=ia(l);for(var h=0;h<c.length;h++)Ta.call(l,c[h])&&(d[c[h]]=l[c[h]])}}return d},I=function(){},J={},qa=Function.call.bind(Object.prototype.hasOwnProperty);
I=function(a){a="Warning: "+a;"undefined"!==typeof console&&console.error(a);try{throw Error(a);}catch(b){}};H.resetWarningCache=function(){J={}};var Va=Function.call.bind(Object.prototype.hasOwnProperty),B=function(){};B=function(a){a="Warning: "+a;"undefined"!==typeof console&&console.error(a);try{throw Error(a);}catch(b){}};var Wa=function(a,b){function d(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}function c(a){this.message=a;this.stack=""}function e(a){function d(d,u,e,n,h,g,l){n=n||"<<anonymous>>";
g=g||e;if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==l){if(b)throw d=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),d.name="Invariant Violation",d;"undefined"!==typeof console&&(l=n+":"+e,!f[l]&&3>q&&(B("You are manually calling a React.PropTypes validation function for the `"+g+"` prop on `"+n+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),
f[l]=!0,q++))}return null==u[e]?d?null===u[e]?new c("The "+h+" `"+g+"` is marked as required "+("in `"+n+"`, but its value is `null`.")):new c("The "+h+" `"+g+"` is marked as required in "+("`"+n+"`, but its value is `undefined`.")):null:a(u,e,n,h,g)}var f={},q=0,e=d.bind(null,!1);e.isRequired=d.bind(null,!0);return e}function l(a){return e(function(b,d,f,q,e,g){b=b[d];return h(b)!==a?(b=k(b),new c("Invalid "+q+" `"+e+"` of type "+("`"+b+"` supplied to `"+f+"`, expected ")+("`"+a+"`."))):null})}function g(b){switch(typeof b){case "number":case "string":case "undefined":return!0;
case "boolean":return!b;case "object":if(Array.isArray(b))return b.every(g);if(null===b||a(b))return!0;var c=b&&(m&&b[m]||b["@@iterator"]);var d="function"===typeof c?c:void 0;if(d)if(c=d.call(b),d!==b.entries)for(;!(b=c.next()).done;){if(!g(b.value))return!1}else for(;!(b=c.next()).done;){if((b=b.value)&&!g(b[1]))return!1}else return!1;return!0;default:return!1}}function h(a){var b=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":"symbol"===b||a&&("Symbol"===a["@@toStringTag"]||
"function"===typeof Symbol&&a instanceof Symbol)?"symbol":b}function k(a){if("undefined"===typeof a||null===a)return""+a;var b=h(a);if("object"===b){if(a instanceof Date)return"date";if(a instanceof RegExp)return"regexp"}return b}function p(a){a=k(a);switch(a){case "array":case "object":return"an "+a;case "boolean":case "date":case "regexp":return"a "+a;default:return a}}var m="function"===typeof Symbol&&Symbol.iterator,t={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),
string:l("string"),symbol:l("symbol"),any:e(D),arrayOf:function(a){return e(function(b,d,f,e,q){if("function"!==typeof a)return new c("Property `"+q+"` of component `"+f+"` has invalid PropType notation inside arrayOf.");b=b[d];if(!Array.isArray(b))return b=h(b),new c("Invalid "+e+" `"+q+"` of type "+("`"+b+"` supplied to `"+f+"`, expected an array."));for(d=0;d<b.length;d++){var n=a(b,d,f,e,q+"["+d+"]","SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");if(n instanceof Error)return n}return null})},
element:function(){return e(function(b,d,f,e,g){b=b[d];return a(b)?null:(b=h(b),new c("Invalid "+e+" `"+g+"` of type "+("`"+b+"` supplied to `"+f+"`, expected a single ReactElement.")))})}(),elementType:function(){return e(function(a,b,d,f,e){a=a[b];return ha.isValidElementType(a)?null:(a=h(a),new c("Invalid "+f+" `"+e+"` of type "+("`"+a+"` supplied to `"+d+"`, expected a single ReactElement type.")))})}(),instanceOf:function(a){return e(function(b,d,f,e,g){if(!(b[d]instanceof a)){var n=a.name||
"<<anonymous>>";b=b[d];b=b.constructor&&b.constructor.name?b.constructor.name:"<<anonymous>>";return new c("Invalid "+e+" `"+g+"` of type "+("`"+b+"` supplied to `"+f+"`, expected ")+("instance of `"+n+"`."))}return null})},node:function(){return e(function(a,b,d,f,e){return g(a[b])?null:new c("Invalid "+f+" `"+e+"` supplied to "+("`"+d+"`, expected a ReactNode."))})}(),objectOf:function(a){return e(function(b,d,f,e,g){if("function"!==typeof a)return new c("Property `"+g+"` of component `"+f+"` has invalid PropType notation inside objectOf.");
b=b[d];d=h(b);if("object"!==d)return new c("Invalid "+e+" `"+g+"` of type "+("`"+d+"` supplied to `"+f+"`, expected an object."));for(var n in b)if(Va(b,n)&&(d=a(b,n,f,e,g+"."+n,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),d instanceof Error))return d;return null})},oneOf:function(a){return Array.isArray(a)?e(function(b,f,e,g,h){b=b[f];for(f=0;f<a.length;f++)if(d(b,a[f]))return null;f=JSON.stringify(a,function(a,b){return"symbol"===k(b)?String(b):b});return new c("Invalid "+g+" `"+h+"` of value `"+
String(b)+"` "+("supplied to `"+e+"`, expected one of "+f+"."))}):(1<arguments.length?B("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):B("Invalid argument supplied to oneOf, expected an array."),D)},oneOfType:function(a){if(!Array.isArray(a))return B("Invalid argument supplied to oneOfType, expected an instance of array."),D;for(var b=0;b<a.length;b++){var d=a[b];if("function"!==
typeof d)return B("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(d)+" at index "+b+"."),D}return e(function(b,d,f,e,g){for(var h=0;h<a.length;h++)if(null==(0,a[h])(b,d,f,e,g,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return null;return new c("Invalid "+e+" `"+g+"` supplied to "+("`"+f+"`."))})},shape:function(a){return e(function(b,d,f,e,g){b=b[d];d=h(b);if("object"!==d)return new c("Invalid "+e+" `"+g+"` of type `"+d+"` "+("supplied to `"+f+"`, expected `object`."));
for(var l in a)if(d=a[l])if(d=d(b,l,f,e,g+"."+l,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return d;return null})},exact:function(a){return e(function(b,d,f,e,g){var l=b[d],k=h(l);if("object"!==k)return new c("Invalid "+e+" `"+g+"` of type `"+k+"` "+("supplied to `"+f+"`, expected `object`."));k=Ua({},b[d],a);for(var p in k){k=a[p];if(!k)return new c("Invalid "+e+" `"+g+"` key `"+p+"` supplied to `"+f+"`.\nBad object: "+JSON.stringify(b[d],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(a),
null,"  "));if(k=k(l,p,f,e,g+"."+p,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))return k}return null})}};c.prototype=Error.prototype;t.checkPropTypes=H;t.resetWarningCache=H.resetWarningCache;return t.PropTypes=t};F=C(function(a){a.exports=Wa(ha.isElement,!0)});let ja="B kB MB GB TB PB EB ZB YB".split(" "),ka=(a,b)=>{let d=a;"string"===typeof b?d=a.toLocaleString(b):!0===b&&(d=a.toLocaleString());return d};var ca=(a,b)=>{if(!Number.isFinite(a))throw new TypeError(`Expected a finite number, got ${typeof a}: ${a}`);
b=Object.assign({},b);if(b.signed&&0===a)return" 0 B";var d=0>a;let c=d?"-":b.signed?"+":"";d&&(a=-a);if(1>a)return a=ka(a,b.locale),c+a+" B";d=Math.min(Math.floor(Math.log10(a)/3),ja.length-1);a=Number((a/Math.pow(1E3,d)).toPrecision(3));a=ka(a,b.locale);return c+a+" "+ja[d]},M=function(a){var b=new Date(a.getTime());a=b.getTimezoneOffset();b.setSeconds(0,0);b=b.getTime()%6E4;return 6E4*a+b},Xa=/[T ]/,Ya=/:/,Za=/^(\d{2})$/,$a=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],ab=/^(\d{4})/,bb=[/^([+-]\d{4})/,
/^([+-]\d{5})/,/^([+-]\d{6})/],sa=/^-(\d{2})$/,ta=/^-?(\d{3})$/,ua=/^-?(\d{2})-?(\d{2})$/,va=/^-?W(\d{2})$/,wa=/^-?W(\d{2})-?(\d{1})$/,ya=/^(\d{2}([.,]\d*)?)$/,za=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,Aa=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,cb=/([Z+-].*)$/,Ca=/^(Z)$/,Da=/^([+-])(\d{2})$/,Ea=/^([+-])(\d{2}):?(\d{2})$/,v=function(a,b){if(a instanceof Date)return new Date(a.getTime());if("string"!==typeof a)return new Date(a);var d=(b||{}).additionalDigits;d=null==d?2:Number(d);var c=a.split(Xa);Ya.test(c[0])?
(b=null,c=c[0]):(b=c[0],c=c[1]);if(c){var e=cb.exec(c);if(e){var l=c.replace(e[1],"");var g=e[1]}else l=c}c=$a[d];d=bb[d];(d=ab.exec(b)||d.exec(b))?(c=d[1],d=parseInt(c,10),b=b.slice(c.length)):(d=Za.exec(b)||c.exec(b))?(c=d[1],d=100*parseInt(c,10),b=b.slice(c.length)):(d=null,b=void 0);return(b=ra(b,d))?(a=b.getTime(),b=0,l&&(b=xa(l)),g?l=6E4*Ba(g):(d=a+b,g=new Date(d),l=M(g),d=new Date(d),d.setDate(g.getDate()+1),g=M(d)-M(g),0<g&&(l+=g)),new Date(a+b+l)):new Date(a)},la=function(a){a=v(a);a.setHours(0,
0,0,0);return a},ma=function(a){var b=v(a),d=v(b);a=new Date(0);a.setFullYear(d.getFullYear(),0,1);a.setHours(0,0,0,0);b=la(b);a=la(a);b=b.getTime()-6E4*b.getTimezoneOffset();a=a.getTime()-6E4*a.getTimezoneOffset();return Math.round((b-a)/864E5)+1},G=function(a){var b={weekStartsOn:1};b=b?Number(b.weekStartsOn)||0:0;a=v(a);var d=a.getDay();b=(d<b?7:0)+d-b;a.setDate(a.getDate()-b);a.setHours(0,0,0,0);return a},N=function(a){a=v(a);var b=a.getFullYear(),d=new Date(0);d.setFullYear(b+1,0,4);d.setHours(0,
0,0,0);d=G(d);var c=new Date(0);c.setFullYear(b,0,4);c.setHours(0,0,0,0);c=G(c);return a.getTime()>=d.getTime()?b+1:a.getTime()>=c.getTime()?b:b-1},na=function(a){var b=v(a);a=G(b).getTime();b=N(b);var d=new Date(0);d.setFullYear(b,0,4);d.setHours(0,0,0,0);b=G(d);a-=b.getTime();return Math.round(a/6048E5)+1},db="M MM Q D DD DDD DDDD d E W WW YY YYYY GG GGGG H HH h hh m mm s ss S SS SSS Z ZZ X x".split(" "),eb=function(a){var b=[],d;for(d in a)a.hasOwnProperty(d)&&b.push(d);a=db.concat(b).sort().reverse();
return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+a.join("|")+"|.)","g")};(function(){var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",
other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(b,d,c){c=c||{};b="string"===typeof a[b]?a[b]:1===d?a[b].one:a[b].other.replace("{{count}}",d);return c.addSuffix?
0<c.comparison?"in "+b:b+" ago":b}}})();var oa=function(){var a="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),b="January February March April May June July August September October November December".split(" "),d="Su Mo Tu We Th Fr Sa".split(" "),c="Sun Mon Tue Wed Thu Fri Sat".split(" "),e="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),l=["AM","PM"],g=["am","pm"],h=["a.m.","p.m."],k={MMM:function(b){return a[b.getMonth()]},MMMM:function(a){return b[a.getMonth()]},
dd:function(a){return d[a.getDay()]},ddd:function(a){return c[a.getDay()]},dddd:function(a){return e[a.getDay()]},A:function(a){return 1<=a.getHours()/12?l[1]:l[0]},a:function(a){return 1<=a.getHours()/12?g[1]:g[0]},aa:function(a){return 1<=a.getHours()/12?h[1]:h[0]}};"M D DDD d Q W".split(" ").forEach(function(a){k[a+"o"]=function(b,c){return Fa(c[a](b))}});return{formatters:k,formattingTokensRegExp:eb(k)}}(),K={M:function(a){return a.getMonth()+1},MM:function(a){return r(a.getMonth()+1,2)},Q:function(a){return Math.ceil((a.getMonth()+
1)/3)},D:function(a){return a.getDate()},DD:function(a){return r(a.getDate(),2)},DDD:function(a){return ma(a)},DDDD:function(a){return r(ma(a),3)},d:function(a){return a.getDay()},E:function(a){return a.getDay()||7},W:function(a){return na(a)},WW:function(a){return r(na(a),2)},YY:function(a){return r(a.getFullYear(),4).substr(2)},YYYY:function(a){return r(a.getFullYear(),4)},GG:function(a){return String(N(a)).substr(2)},GGGG:function(a){return N(a)},H:function(a){return a.getHours()},HH:function(a){return r(a.getHours(),
2)},h:function(a){a=a.getHours();return 0===a?12:12<a?a%12:a},hh:function(a){return r(K.h(a),2)},m:function(a){return a.getMinutes()},mm:function(a){return r(a.getMinutes(),2)},s:function(a){return a.getSeconds()},ss:function(a){return r(a.getSeconds(),2)},S:function(a){return Math.floor(a.getMilliseconds()/100)},SS:function(a){return r(Math.floor(a.getMilliseconds()/10),2)},SSS:function(a){return r(a.getMilliseconds(),3)},Z:function(a){return Q(a.getTimezoneOffset(),":")},ZZ:function(a){return Q(a.getTimezoneOffset())},
X:function(a){return Math.floor(a.getTime()/1E3)},x:function(a){return a.getTime()}},ba=function(a,b,c){b=b?String(b):"YYYY-MM-DDTHH:mm:ss.SSSZ";var d=(c||{}).locale;c=oa.formatters;var e=oa.formattingTokensRegExp;d&&d.format&&d.format.formatters&&(c=d.format.formatters,d.format.formattingTokensRegExp&&(e=d.format.formattingTokensRegExp));a=v(a);if(a instanceof Date)d=!isNaN(a);else throw new TypeError(toString.call(a)+" is not an instance of Date");return d?Ga(b,c,e)(a):"Invalid Date"},U={color:void 0,
size:void 0,className:void 0,style:void 0,attr:void 0},T=m.createContext&&m.createContext(U),y=window&&window.__assign||function(){y=Object.assign||function(a){for(var b,c=1,f=arguments.length;c<f;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return y.apply(this,arguments)},Ka=window&&window.__rest||function(a,b){var c={},f;for(f in a)Object.prototype.hasOwnProperty.call(a,f)&&0>b.indexOf(f)&&(c[f]=a[f]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var e=
0;for(f=Object.getOwnPropertySymbols(a);e<f.length;e++)0>b.indexOf(f[e])&&(c[f[e]]=a[f[e]])}return c},X=function(a){return S({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(a)};
X.displayName="FaGithub";var W=function(a){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(a)};
W.displayName="FaTwitter";var Oa=c.css(Y(),'\nfont-family: -apple-system,\n  BlinkMacSystemFont,\n  "Segoe UI",\n  "Roboto",\n  "Oxygen",\n  "Ubuntu",\n  "Cantarell",\n  "Fira Sans",\n  "Droid Sans",\n  "Helvetica Neue",\n  sans-serif;\n',"\nfont-family: Menlo,\n  Monaco,\n  Lucida Console,\n  Liberation Mono,\n  DejaVu Sans Mono,\n  Bitstream Vera Sans Mono,\n  Courier New,\n  monospace;\n");da.propTypes={location:F.object,children:F.node};z.render(Pa.createElement(da,null),document.getElementById("root"))})(React,
ReactDOM,emotionCore);
