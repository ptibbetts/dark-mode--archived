(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8Jkq":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r.n(n),o=r("qJmN"),c=function(e){var t=e.author,r=e.content,n=e.image,c=e.tags,i=e.title,s=e.url;return a.a.createElement("div",{className:"max-w-md rounded overflow-hidden shadow bg-gray-100 dark:bg-gray-700"},a.a.createElement("div",{className:"flex flex-col h-full"},n&&a.a.createElement("a",{href:s},a.a.createElement("img",{className:"w-full",src:n,alt:i})),a.a.createElement("div",{className:"text-gray-800 dark:text-gray-200 flex flex-col h-full px-4 py-2"},t&&a.a.createElement("div",{className:"text-gray-700 dark:text-gray-400 uppercase text-xs mb-4 font-mono"},t),a.a.createElement("div",{className:"flex-1"},a.a.createElement("a",{href:s,className:"font-bold text-xl mb-4 block visited:text-gray-500"},i),r&&a.a.createElement("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:r}})),c&&c.length>0&&a.a.createElement("div",{className:"flex items-end align-start flex-wrap"},c.map((function(e,t){return a.a.createElement("div",{key:t,className:"inline-block mr-2"},a.a.createElement(o.a,{name:e}))}))))))}},GsBC:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return N}));r("L9s1"),r("91GP"),r("Z2Ku");var n=r("q1tI"),a=r.n(n),o=r("9Dj+"),c=r("H8eV"),i=r("8Jkq"),s=(r("f3/d"),r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("Vd3H"),r("qJmN"));function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(e){var t=e.tags,r=e.filters,n=e.onFiltersChange,o=function(t){if("all"===t)n(["all"]);else if(r.includes(t)){var a=r.filter((function(e){return e!==t}));0===r.length?n(["all"]):n(a)}else{var o=l(e.filters);(o=o.filter((function(e){return"all"!==e}))).push(t),n(o)}};return a.a.createElement("div",{className:"mb-4"},a.a.createElement("span",{className:"mr-2"},a.a.createElement(s.a,{name:"Show all",active:"all"===e.filters[0],onClick:function(){return o("all")}})),t.sort().map((function(t,r){return a.a.createElement("span",{className:"mr-2",key:r},a.a.createElement(s.a,{name:t,active:e.filters.includes(t),onClick:function(){return o(t)}}))})))};r("V+eJ"),r("hHhE"),r("Oyvg"),r("LK8F"),r("2Spj"),r("yt8O"),r("RW0V"),r("KKXr"),r("8+KV"),r("bWfx"),r("pIFo"),r("HAE/");function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function m(e,t){return e(t={exports:{}},t.exports),t.exports}var d=m((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case o:case i:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case s:return e;default:return t}}case y:case d:case a:return t}}}function b(e){return g(e)===f}t.typeOf=g,t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=o,t.Lazy=y,t.Memo=d,t.Portal=a,t.Profiler=i,t.StrictMode=c,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===i||e===c||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===s||e.$$typeof===l||e.$$typeof===p)},t.isAsyncMode=function(e){return b(e)||g(e)===u},t.isConcurrentMode=b,t.isContextConsumer=function(e){return g(e)===l},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===p},t.isFragment=function(e){return g(e)===o},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===d},t.isPortal=function(e){return g(e)===a},t.isProfiler=function(e){return g(e)===i},t.isStrictMode=function(e){return g(e)===c},t.isSuspense=function(e){return g(e)===m}}));p(d),p(m((function(e,t){})));m((function(e){e.exports=d}));var y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}})()&&Object.assign;function h(e,t,r,n,a){}h.resetWarningCache=function(){};Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function w(){}w.resetWarningCache=v;var E=m((function(e){e.exports=function(){function e(e,t,r,n,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:w,resetWarningCache:v};return r.PropTypes=r,r}()})),x=[],O=function(e){function t(){e.apply(this,arguments),this.state={isLoading:!0}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.loadTweetForProps=function(e){var t=this,r=function(){window.twttr.ready().then((function(r){var n=r.widgets;t._div&&(t._div.innerHTML="");var a=e.onTweetLoadSuccess,o=e.onTweetLoadError;n.createTweetEmbed(t.props.id,t._div,e.options).then((function(e){t.setState({isLoading:!1}),a&&a(e)})).catch(o)}))},n=window.twttr;n&&n.ready?r():function(e,t){if(0===x.length){x.push(t);var r=document.createElement("script");r.setAttribute("src",e),r.onload=function(){return x.forEach((function(e){return e()}))},document.body.appendChild(r)}else x.push(t)}((window.location.protocol.indexOf("file")>=0?this.props.protocol:"")+"//platform.twitter.com/widgets.js",r)},t.prototype.componentDidMount=function(){this.loadTweetForProps(this.props)},t.prototype.shouldComponentUpdate=function(e,t){return this.props.id!==e.id||this.props.className!==e.className},t.prototype.componentWillUpdate=function(e,t){this.props.id!==e.id&&this.loadTweetForProps(e)},t.prototype.render=function(){var e=this;return a.a.createElement("div",{className:this.props.className,ref:function(t){e._div=t}},this.state.isLoading&&this.props.placeholder)},t}(a.a.Component);O.propTypes={id:E.string,options:E.object,protocol:E.string,onTweetLoadSuccess:E.func,onTweetLoadError:E.func,className:E.string},O.defaultProps={protocol:"https:",options:{},className:null};var S=O,k=r("PWCa"),N=(t.default=function(e){var t=e.pageContext,r=e.data,s=t.category,l=t.description,u=r.allMarkdownRemark.edges,p=[],m=Object(n.useState)(["all"]),d=m[0],y=m[1],g=u.map((function(e){var t=e.node,r=t.id,n=t.frontmatter,a=t.html;if(n.type===s)return n.tags.forEach((function(e){p.includes(e)||p.push(e)})),Object.assign({},r,n,{content:a})})),b="light";"undefined"!=typeof document&&document.documentElement.classList.contains("mode-dark")&&(b="dark");var h=3;"tweet"===s&&(h=2);var v,w="grid grid-cols-1 sm:grid-cols-"+(h-1)+" md:grid-cols-"+h+" gap-4";return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:(v=s,v.charAt(0).toUpperCase()+v.slice(1)+"s")}),l&&a.a.createElement(k.a,null,a.a.createElement("p",null,l)),a.a.createElement("div",{className:"p-4"},a.a.createElement("div",{className:"max-w-screen-xl mx-auto"},p.length>1&&a.a.createElement(f,{tags:p,filters:d,onFiltersChange:function(e){0===e.length?y(["all"]):y(e)}}),a.a.createElement("div",{className:w},g.filter((function(e){return"all"===d[0]?e:!!e&&d.every((function(t){return e.tags.includes(t)}))})).map((function(e,t){return a.a.createElement("div",{className:"md:flex",key:t},"tweet"===e.type&&a.a.createElement(S,{id:e.tweetid,options:{theme:b}}),"tweet"!==e.type&&a.a.createElement(i.a,{title:e.title,tags:e.tags,url:e.url,content:e.content,author:e.author,image:e.image}))}))))))},"3796628341")},PWCa:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("q1tI"),a=r.n(n),o=function(e){return a.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-900 px-4 py-12"},a.a.createElement("div",{className:"max-w-screen-xl mx-auto"},a.a.createElement("div",{className:"dark:text-white text-xl md:text-center"},e.children)))}},qJmN:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("f3/d");var n=r("q1tI"),a=r.n(n),o=function(e){var t=e.active,r=void 0!==t&&t,n=e.name,o=e.onClick,c="inline-block text-white rounded-md px-3 py-1 text-xs mb-1 font-mono";return c+=r?" bg-gray-700 dark:bg-gray-900":" bg-gray-600 dark:bg-gray-600",o&&(c+=" cursor-pointer"),a.a.createElement("span",{className:c,onClick:o},n)}}}]);
//# sourceMappingURL=component---src-templates-category-tsx-69ac4066e4a4eeeec687.js.map