"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[4473],{52991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),a=r(86010),o=r(53438),i=r(39960),c=r(13919),s=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:i},i))}function h(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},2606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(52991),i=r(53438);const c={id:"uberongraph",title:"uberongraph",description:"uberongraph",custom_edit_url:null},s=void 0,l={unversionedId:"automat/uberongraph",id:"automat/uberongraph",title:"uberongraph",description:"uberongraph",source:"@site/docs/automat/uberongraph.tag.mdx",sourceDirName:"automat",slug:"/automat/uberongraph",permalink:"/docs/automat/uberongraph",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"uberongraph",title:"uberongraph",description:"uberongraph",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/docs/automat/simple-spec-simple-spec-get-911-c-22-b-4-5-f-96-4172-8497-963024514586"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-9-e-99-ec-22-9644-4-b-8-b-887-c-f-345-ffea-827-b"}},u={},m=[],p={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operations for uberongraph."),(0,a.kt)(o.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);