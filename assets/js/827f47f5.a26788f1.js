"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[2835],{52991:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(67294),o=a(86010),n=a(53438),i=a(39960),c=a(13919),s=a(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},a)}function u(e){let{href:t,icon:a,title:n,description:i}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:n},a," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function h(e){let{item:t}=e;const a=(0,n.Wl)(t);return a?r.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:a,title:t.label,description:o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const a=(0,n.jA)();return r.createElement(b,{items:a.items,className:t})}function b(e){const{items:t,className:a}=e;if(!t)return r.createElement(k,e);const i=(0,n.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",a)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},15103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905)),n=a(52991),i=a(53438);const c={id:"pharos",title:"pharos",description:"pharos",custom_edit_url:null},s=void 0,l={unversionedId:"automat/pharos",id:"automat/pharos",title:"pharos",description:"pharos",source:"@site/docs/automat/pharos.tag.mdx",sourceDirName:"automat",slug:"/automat/pharos",permalink:"/automat-openapi-docs/docs/automat/pharos",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pharos",title:"pharos",description:"pharos",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-c-24-fbefa-9503-43-e-8-b-345-42-e-83-cc-20784"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-5-bb-55445-bf-57-416-e-a-011-6-faf-75-cefd-64"}},m={},p=[],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Operations for pharos."),(0,o.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);