"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[7680],{52991:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(67294),c=n(86010),r=n(53438),o=n(39960),i=n(13919),s=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:r,description:o}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",m),title:r},n," ",r),o&&a.createElement("p",{className:(0,c.Z)("text--truncate",d),title:o},o))}function h(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,r.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,r.jA)();return a.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return a.createElement(k,e);const o=(0,r.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",n)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},88374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),c=(n(67294),n(3905)),r=n(52991),o=n(53438);const i={id:"hgnc",title:"hgnc",description:"hgnc",custom_edit_url:null},s=void 0,l={unversionedId:"automat/hgnc",id:"automat/hgnc",title:"hgnc",description:"hgnc",source:"@site/docs/automat/hgnc.tag.mdx",sourceDirName:"automat",slug:"/automat/hgnc",permalink:"/automat-openapi-docs/docs/automat/hgnc",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"hgnc",title:"hgnc",description:"hgnc",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-45-de-37-b-7-7-d-62-499-c-a-3-fc-36631839-fc-50"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-808949-b-9-96-de-41-dd-ac-58-684-db-6-f-3-d-012"}},m={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Operations for hgnc."),(0,c.kt)(r.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);