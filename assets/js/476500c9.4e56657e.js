"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[3353],{52991:(e,t,a)=>{a.d(t,{Z:()=>k});var o=a(67294),n=a(86010),c=a(53438),r=a(39960),i=a(13919),s=a(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:a}=e;return o.createElement(r.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},a)}function p(e){let{href:t,icon:a,title:c,description:r}=e;return o.createElement(u,{href:t},o.createElement("h2",{className:(0,n.Z)("text--truncate",m),title:c},a," ",c),r&&o.createElement("p",{className:(0,n.Z)("text--truncate",d),title:r},r))}function g(e){let{item:t}=e;const a=(0,c.Wl)(t);return a?o.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return o.createElement(p,{href:t.href,icon:a,title:t.label,description:n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const a=(0,c.jA)();return o.createElement(k,{items:a.items,className:t})}function k(e){const{items:t,className:a}=e;if(!t)return o.createElement(w,e);const r=(0,c.MN)(t);return o.createElement("section",{className:(0,n.Z)("row",a)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},60301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(87462),n=(a(67294),a(3905)),c=a(52991),r=a(53438);const i={id:"gwas-catalog",title:"gwas-catalog",description:"gwas-catalog",custom_edit_url:null},s=void 0,l={unversionedId:"automat/gwas-catalog",id:"automat/gwas-catalog",title:"gwas-catalog",description:"gwas-catalog",source:"@site/docs/automat/gwas-catalog.tag.mdx",sourceDirName:"automat",slug:"/automat/gwas-catalog",permalink:"/automat-openapi-docs/docs/automat/gwas-catalog",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"gwas-catalog",title:"gwas-catalog",description:"gwas-catalog",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-f-35-b-67-f-3-4-bc-2-44-b-9-a-9-ac-3-b-5-ae-5-c-76-a-88"}},m={},d=[],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Operations for gwas-catalog."),(0,n.kt)(c.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);