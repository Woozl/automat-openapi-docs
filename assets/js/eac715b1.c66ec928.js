"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[94],{52991:(e,t,o)=>{o.d(t,{Z:()=>k});var a=o(67294),r=o(86010),i=o(53438),n=o(39960),c=o(13919),l=o(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:o}=e;return a.createElement(n.Z,{href:t,className:(0,r.Z)("card padding--lg",s)},o)}function h(e){let{href:t,icon:o,title:i,description:n}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},o," ",i),n&&a.createElement("p",{className:(0,r.Z)("text--truncate",d),title:n},n))}function p(e){let{item:t}=e;const o=(0,i.Wl)(t);return o?a.createElement(h,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const o=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(h,{href:t.href,icon:o,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const o=(0,i.jA)();return a.createElement(k,{items:o.items,className:t})}function k(e){const{items:t,className:o}=e;if(!t)return a.createElement(y,e);const n=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",o)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},50031:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=o(87462),r=(o(67294),o(3905)),i=o(52991),n=o(53438);const c={id:"ontological-hierarchy",title:"ontological-hierarchy",description:"ontological-hierarchy",custom_edit_url:null},l=void 0,s={unversionedId:"automat/ontological-hierarchy",id:"automat/ontological-hierarchy",title:"ontological-hierarchy",description:"ontological-hierarchy",source:"@site/docs/automat/ontological-hierarchy.tag.mdx",sourceDirName:"automat",slug:"/automat/ontological-hierarchy",permalink:"/docs/automat/ontological-hierarchy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ontological-hierarchy",title:"ontological-hierarchy",description:"ontological-hierarchy",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one-hop connection schema",permalink:"/docs/automat/simple-spec-simple-spec-get-0-ec-1-c-3-b-7-eb-9-f-4101-93-e-0-dcec-12-fd-4-b-28"},next:{title:"Meta knowledge graph representation of this TRAPI web service.",permalink:"/docs/automat/get-meta-knowledge-graph-1-3-meta-knowledge-graph-get-25-e-8337-b-bb-1-e-44-f-4-a-492-8-a-5-e-184-ad-643"}},m={},d=[],u={toc:d};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operations for ontological-hierarchy."),(0,r.kt)(i.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);