"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[1533],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(67294),r=n(86010),c=n(53438),i=n(39960),o=n(13919),s=n(95999);const m="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",m)},n)}function p(e){let{href:t,icon:n,title:c,description:i}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",l),title:c},n," ",c),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",d),title:i},i))}function h(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,c.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return a.createElement(g,e);const i=(0,c.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},49172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),c=n(52991),i=n(53438);const o={id:"hmdb",title:"hmdb",description:"hmdb",custom_edit_url:null},s=void 0,m={unversionedId:"automat/hmdb",id:"automat/hmdb",title:"hmdb",description:"hmdb",source:"@site/docs/automat/hmdb.tag.mdx",sourceDirName:"automat",slug:"/automat/hmdb",permalink:"/docs/automat/hmdb",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"hmdb",title:"hmdb",description:"hmdb",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/docs/automat/simple-spec-simple-spec-get-c-844-b-4-a-4-13-e-5-4-bfa-a-3-c-0-cb-009-e-3642-d-2"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-57-f-2-f-039-cd-04-45-e-3-8032-d-73-fc-961-c-51-b"}},l={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operations for hmdb."),(0,r.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);