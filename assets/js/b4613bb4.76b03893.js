"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[7018],{52991:(e,t,r)=>{r.d(t,{Z:()=>k});var o=r(67294),a=r(86010),i=r(53438),n=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return o.createElement(n.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function u(e){let{href:t,icon:r,title:i,description:n}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},r," ",i),n&&o.createElement("p",{className:(0,a.Z)("text--truncate",d),title:n},n))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?o.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:r,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,i.jA)();return o.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return o.createElement(v,e);const n=(0,i.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",r)},n.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}},75193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var o=r(87462),a=(r(67294),r(3905)),i=r(52991),n=r(53438);const c={id:"viral-proteome",title:"viral-proteome",description:"viral-proteome",custom_edit_url:null},l=void 0,s={unversionedId:"automat/viral-proteome",id:"automat/viral-proteome",title:"viral-proteome",description:"viral-proteome",source:"@site/docs/automat/viral-proteome.tag.mdx",sourceDirName:"automat",slug:"/automat/viral-proteome",permalink:"/docs/automat/viral-proteome",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"viral-proteome",title:"viral-proteome",description:"viral-proteome",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/docs/automat/simple-spec-simple-spec-get-de-47-b-987-19-ab-4-ead-9582-8-d-32-bb-878-e-72"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-3019184-a-6-c-06-445-a-9425-5-b-2989-cdd-149"}},m={},d=[],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operations for viral-proteome."),(0,a.kt)(i.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);