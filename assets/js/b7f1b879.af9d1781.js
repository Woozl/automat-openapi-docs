"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[4045],{52991:(e,t,o)=>{o.d(t,{Z:()=>h});var a=o(67294),r=o(86010),n=o(53438),i=o(39960),c=o(13919),s=o(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:o}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},o)}function u(e){let{href:t,icon:o,title:n,description:i}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:n},o," ",n),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:i},i))}function k(e){let{item:t}=e;const o=(0,n.Wl)(t);return o?a.createElement(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const o=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:o,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const o=(0,n.jA)();return a.createElement(h,{items:o.items,className:t})}function h(e){const{items:t,className:o}=e;if(!t)return a.createElement(b,e);const i=(0,n.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",o)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},31274:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=o(87462),r=(o(67294),o(3905)),n=o(52991),i=o(53438);const c={id:"robokopkg",title:"robokopkg",description:"robokopkg",custom_edit_url:null},s=void 0,l={unversionedId:"automat/robokopkg",id:"automat/robokopkg",title:"robokopkg",description:"robokopkg",source:"@site/docs/automat/robokopkg.tag.mdx",sourceDirName:"automat",slug:"/automat/robokopkg",permalink:"/automat-openapi-docs/docs/automat/robokopkg",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"robokopkg",title:"robokopkg",description:"robokopkg",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-8-f-642-a-5-d-341-b-495-b-9078-5-ed-0-e-28-d-3-b-30"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-a-02-aab-54-15-b-7-4813-8-d-70-31-c-1-aa-01-a-088"}},m={},p=[],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operations for robokopkg."),(0,r.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);