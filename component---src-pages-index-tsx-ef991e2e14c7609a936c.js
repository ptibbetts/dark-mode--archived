(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8Jkq":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t("q1tI"),l=t.n(r),n=t("qJmN"),c=function(e){var a=e.author,t=e.content,r=e.image,c=e.tags,s=e.title,m=e.url;return l.a.createElement("div",{className:"max-w-md rounded overflow-hidden shadow bg-gray-100 dark:bg-gray-700"},l.a.createElement("div",{className:"flex flex-col h-full"},r&&l.a.createElement("a",{href:m},l.a.createElement("img",{className:"w-full",src:r,alt:s})),l.a.createElement("div",{className:"text-gray-800 dark:text-gray-200 flex flex-col h-full px-4 py-2"},a&&l.a.createElement("div",{className:"text-gray-700 dark:text-gray-400 uppercase text-xs mb-4 font-mono"},a),l.a.createElement("div",{className:"flex-1"},l.a.createElement("a",{href:m,className:"font-bold text-xl mb-4 block visited:text-gray-500"},s),t&&l.a.createElement("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:t}})),c&&c.length>0&&l.a.createElement("div",{className:"flex items-end align-start flex-wrap"},c.map((function(e,a){return l.a.createElement("div",{key:a,className:"inline-block mr-2"},l.a.createElement(n.a,{name:e}))}))))))}},PWCa:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t("q1tI"),l=t.n(r),n=function(e){return l.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-900 px-4 py-12"},l.a.createElement("div",{className:"max-w-screen-xl mx-auto"},l.a.createElement("div",{className:"dark:text-white text-xl md:text-center"},e.children)))}},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return d}));var r=t("q1tI"),l=t.n(r),n=t("9Dj+"),c=t("H8eV"),s=t("Wbzz"),m=t("8Jkq"),o=t("PWCa");a.default=function(e){var a=e.data,t={article:[],podcast:[],tool:[],example:[]},r=a.allMarkdownRemark,d=r.edges;r.totalCount;return d.map((function(e,a){var r=e.node,n=r.frontmatter,c=r.html;n.featured&&t[n.type].push(l.a.createElement("div",{className:"flex",key:a},l.a.createElement(m.a,{title:n.title,tags:n.tags,url:n.url,image:n.image,author:n.author,content:c})))})),l.a.createElement(n.a,null,l.a.createElement(c.a,{title:"Dark Mode Resources"}),l.a.createElement(o.a,null,"A collection of Dark Mode ",l.a.createElement(s.Link,{to:"/articles",className:"underline"},"articles"),", ",l.a.createElement(s.Link,{to:"/tools",className:"underline"},"tools"),", ",l.a.createElement(s.Link,{to:"/examples",className:"underline"},"examples"),", ",l.a.createElement(s.Link,{to:"/tweets",className:"underline"},"tweets")," and even a ",l.a.createElement(s.Link,{to:"/podcasts",className:"underline whitespace-no-wrap"},"podcast")),l.a.createElement("div",{className:"p-4"},l.a.createElement("div",{className:"max-w-screen-xl mx-auto"},l.a.createElement("div",{className:"mb-4"},l.a.createElement("h2",{className:"font-bold mb-4 dark:text-gray-100"},"Featured Articles"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},t.article)),l.a.createElement("div",{className:"mb-4"},l.a.createElement("h2",{className:"font-bold mb-4 text-gray-800 dark:text-gray-100"},"Featured Tools"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},t.tool)),l.a.createElement("div",{className:"mb-4"},l.a.createElement("h2",{className:"font-bold mb-4 text-gray-800 dark:text-gray-100"},"Featured Examples"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},t.example)),l.a.createElement("div",{className:"mb-4"},l.a.createElement("h2",{className:"font-bold mb-4 text-gray-800 dark:text-gray-100"},"Featured Podcast"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},t.podcast)))))};var d="1839534318"},qJmN:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));t("f3/d");var r=t("q1tI"),l=t.n(r),n=function(e){var a=e.active,t=void 0!==a&&a,r=e.name,n=e.onClick,c="inline-block text-white rounded-md px-3 py-1 text-xs mb-1 font-mono";return c+=t?" bg-gray-700 dark:bg-gray-900":" bg-gray-600 dark:bg-gray-600",n&&(c+=" cursor-pointer"),l.a.createElement("span",{className:c,onClick:n},r)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ef991e2e14c7609a936c.js.map