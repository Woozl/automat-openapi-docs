"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[9993],{52991:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),i=r(86010),a=r(53438),c=r(39960),o=r(13919),s=r(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:i?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},1474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905)),a=r(52991),c=r(53438);const o={id:"sri-reference-kg",title:"sri-reference-kg",description:"sri-reference-kg",custom_edit_url:null},s=void 0,l={unversionedId:"automat/sri-reference-kg",id:"automat/sri-reference-kg",title:"sri-reference-kg",description:"sri-reference-kg",source:"@site/docs/automat/sri-reference-kg.tag.mdx",sourceDirName:"automat",slug:"/automat/sri-reference-kg",permalink:"/automat-openapi-docs/docs/automat/sri-reference-kg",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sri-reference-kg",title:"sri-reference-kg",description:"sri-reference-kg",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-fd-65-e-883-87-de-43-d-1-99-c-1-ec-614-a-0-c-52-b-4"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-1854-bed-8-7746-416-a-9-dee-9822228-d-13-a-3"}},m={},d=[],u={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Operations for sri-reference-kg."),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);