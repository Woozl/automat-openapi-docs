"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[2321],{52991:(e,t,a)=>{a.d(t,{Z:()=>k});var o=a(67294),n=a(86010),r=a(53438),c=a(39960),i=a(13919),s=a(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:a}=e;return o.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},a)}function u(e){let{href:t,icon:a,title:r,description:c}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,n.Z)("text--truncate",d),title:r},a," ",r),c&&o.createElement("p",{className:(0,n.Z)("text--truncate",m),title:c},c))}function g(e){let{item:t}=e;const a=(0,r.Wl)(t);return a?o.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:a,title:t.label,description:n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const a=(0,r.jA)();return o.createElement(k,{items:a.items,className:t})}function k(e){const{items:t,className:a}=e;if(!t)return o.createElement(b,e);const c=(0,r.MN)(t);return o.createElement("section",{className:(0,n.Z)("row",a)},c.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},46275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=a(87462),n=(a(67294),a(3905)),r=a(52991),c=a(53438);const i={id:"gtopdb",title:"gtopdb",description:"gtopdb",custom_edit_url:null},s=void 0,l={unversionedId:"automat/gtopdb",id:"automat/gtopdb",title:"gtopdb",description:"gtopdb",source:"@site/docs/automat/gtopdb.tag.mdx",sourceDirName:"automat",slug:"/automat/gtopdb",permalink:"/automat-openapi-docs/docs/automat/gtopdb",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"gtopdb",title:"gtopdb",description:"gtopdb",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-c-936-cd-2-f-6-c-07-4-e-5-a-a-672-36-ac-35-e-95-a-53"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/automat-openapi-docs/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-b-98725-c-4-275-b-404-a-8-c-4-e-9-ed-8-ea-7154-f-4"}},d={},m=[],p={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Operations for gtopdb."),(0,n.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);