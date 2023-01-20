"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[5390],{36255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),l=a(26389),r=a(94891),o=a(75190),p=a(47507),n=a(24310),c=a(63303),m=(a(75035),a(85162));const d={id:"simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e",title:"Get one-hop connection schema",description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",sidebar_label:"Get one-hop connection schema",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",operationId:"simple_spec_simple_spec_get-75356780-1d79-4d5c-b456-abcde968786e",parameters:[{required:!1,schema:{title:"Source",type:"string"},name:"source",in:"query"},{required:!1,schema:{title:"Target",type:"string"},name:"target",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Simple Spec Simple Spec Get",type:"array",items:{title:"SimpleSpecElement",required:["source_type","target_type","edge_type"],type:"object",properties:{source_type:{title:"Source Type",type:"string"},target_type:{title:"Target Type",type:"string"},edge_type:{title:"Edge Type",type:"string"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["gtopdb"],method:"get",path:"/gtopdb/simple_spec",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Get one-hop connection schema",description:{content:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",type:"text/plain"},url:{path:["gtopdb","simple_spec"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"source",value:""},{disabled:!1,key:"target",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},u=void 0,y={unversionedId:"automat/simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e",id:"automat/simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e",title:"Get one-hop connection schema",description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",source:"@site/docs/automat/simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e.api.mdx",sourceDirName:"automat",slug:"/automat/simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"simple-spec-simple-spec-get-75356780-1-d-79-4-d-5-c-b-456-abcde-968786-e",title:"Get one-hop connection schema",description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",sidebar_label:"Get one-hop connection schema",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",operationId:"simple_spec_simple_spec_get-75356780-1d79-4d5c-b456-abcde968786e",parameters:[{required:!1,schema:{title:"Source",type:"string"},name:"source",in:"query"},{required:!1,schema:{title:"Target",type:"string"},name:"target",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Simple Spec Simple Spec Get",type:"array",items:{title:"SimpleSpecElement",required:["source_type","target_type","edge_type"],type:"object",properties:{source_type:{title:"Source Type",type:"string"},target_type:{title:"Target Type",type:"string"},edge_type:{title:"Edge Type",type:"string"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["gtopdb"],method:"get",path:"/gtopdb/simple_spec",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Get one-hop connection schema",description:{content:"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types.",type:"text/plain"},url:{path:["gtopdb","simple_spec"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"source",value:""},{disabled:!1,key:"target",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Find `node` by `curie`",permalink:"/automat-openapi-docs/docs/automat/node-node-type-curie-get-af-3-a-0-b-28-2400-4885-95-d-8-25479-e-54210-e"},next:{title:"gwas-catalog",permalink:"/automat-openapi-docs/docs/automat/gwas-catalog"}},g={},h=[{value:"Get one-hop connection schema",id:"get-one-hop-connection-schema",level:2}],b={toc:h};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-one-hop-connection-schema"},"Get one-hop connection schema"),(0,i.kt)("p",null,"Returns a list of available predicates when choosing a single source or target curie. Calling this endpoint with no query parameters will return all possible hops for all types."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{required:!1,schema:{title:"Source",type:"string"},name:"source",in:"query"},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{required:!1,schema:{title:"Target",type:"string"},name:"target",in:"query"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"source_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Source Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"target_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Target Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"edge_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Edge Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'[\n  {\n    "source_type": "string",\n    "target_type": "string",\n    "edge_type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Validation Error")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"detail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"loc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"anyOf"),(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"integer")))))))))),(0,i.kt)(n.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);