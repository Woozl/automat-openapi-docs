"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[8610],{39058:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(67294),n=a(86010),r=a(40025),s=a(87524),m=a(39960),i=a(95999);const o="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var h=a(13102);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return l.createElement(h.Zo,{component:b,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(f,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...m}=e,i=t&&t.items.length>0;return l.createElement(r.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},99703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(95999),r=a(32244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},30390:(e,t,a)=>{a.d(t,{Z:()=>F});var l=a(67294),n=a(86010),r=a(9460),s=a(44996);function m(e){let{children:t,className:a}=e;const{frontMatter:n,assets:m}=(0,r.C)(),{withBaseUrl:i}=(0,s.C)(),o=m.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},o&&l.createElement("meta",{itemProp:"image",content:i(o,{absolute:!0})}),t)}var i=a(39960);const o="title_f1Hy";function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:m,title:c}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(o,t),itemProp:"headline"},s?c:l.createElement(i.Z,{itemProp:"url",to:m},c))}var u=a(95999),g=a(88824);const d="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:m,readingTime:i}=a;return l.createElement("div",{className:(0,n.Z)(d,"margin-vert--md",t)},l.createElement(E,{date:s,formattedDate:m}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(p,{readingTime:i})))}function f(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:s,url:m,imageURL:i,email:o}=t,c=m||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const N="authorCol_Hf19",Z="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function P(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const m=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",m?Z:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!m&&"col col--6",m?_:N),key:t},l.createElement(v,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function k(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(P,null))}var T=a(18780),w=a(55203);function I(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return l.createElement("div",{id:s?T.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(w.Z,null,t))}var y=a(84881),C=a(71526),L=a(87462);function A(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,L.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(A,null))}const x="blogPostFooterDetailsFull_mRVl";function R(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:m,hasTruncateMarker:i}=e,o=!t&&i,c=a.length>0;return c||o||m?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&x)},c&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":o})},l.createElement(C.Z,{tags:a})),t&&m&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:m})),o&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":c})},l.createElement(B,{blogPostTitle:s,to:e.permalink}))):null}function F(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(m,{className:(0,n.Z)(s,a)},l.createElement(k,null),l.createElement(I,null,t),l.createElement(R,null))}},79985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(9460),r=a(30390);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},41714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(86010),r=a(95999),s=a(88824),m=a(10833),i=a(35281),o=a(39960),c=a(39058),u=a(99703),g=a(90197),d=a(79985);function p(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=p(t);return l.createElement(l.Fragment,null,l.createElement(m.d,{title:a}),l.createElement(g.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const m=p(t);return l.createElement(c.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,m),l.createElement(o.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(d.Z,{items:a}),l.createElement(u.Z,{metadata:s}))}function b(e){return l.createElement(m.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},l.createElement(E,e),l.createElement(h,e))}}}]);