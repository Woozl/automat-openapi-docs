"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[5314],{52991:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(67294),c=a(86010),r=a(53438),o=a(39960),i=a(13919),s=a(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:a}=e;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},a)}function p(e){let{href:t,icon:a,title:r,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",d),title:r},a," ",r),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const a=(0,r.Wl)(t);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const a=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:c?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const a=(0,r.jA)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(k,e);const o=(0,r.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",a)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},37010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),c=(a(67294),a(3905)),r=a(52991),o=a(53438);const i={id:"ctd",title:"ctd",description:"ctd",custom_edit_url:null},s=void 0,l={unversionedId:"automat/ctd",id:"automat/ctd",title:"ctd",description:"ctd",source:"@site/docs/automat/ctd.tag.mdx",sourceDirName:"automat",slug:"/automat/ctd",permalink:"/automat-openapi-docs/docs/automat/ctd",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ctd",title:"ctd",description:"ctd",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-8352-f-216-5-aba-48-f-4-a-7-cc-e-0-b-074665938"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-6-df-9-b-599-9558-468-b-a-233-23-ff-9-c-13-c-854"}},d={},m=[],u={toc:m};function p(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Operations for ctd."),(0,c.kt)(r.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);