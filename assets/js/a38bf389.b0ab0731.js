"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[9692],{41928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),n=(a(75190),a(47507)),l=a(24310),p=a(63303),c=(a(75035),a(85162));const m={id:"cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post-2a48ce09-260a-466a-8794-8800116e5cbf",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["mychem"],method:"post",path:"/mychem/cypher",servers:[{url:"https://automat.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["mychem","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},d=void 0,y={unversionedId:"automat/cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf",id:"automat/cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",source:"@site/docs/automat/cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf.api.mdx",sourceDirName:"automat",slug:"/automat/cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf",permalink:"/docs/automat/cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cypher-cypher-post-2-a-48-ce-09-260-a-466-a-8794-8800116-e-5-cbf",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post-2a48ce09-260a-466a-8794-8800116e5cbf",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["mychem"],method:"post",path:"/mychem/cypher",servers:[{url:"https://automat.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["mychem","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query reasoner via one of several inputs.",permalink:"/docs/automat/reasoner-api-1-3-query-post-ffebf-938-f-177-4261-81-a-3-22507-de-9-c-202"},next:{title:"Overlay results with available connections between each node.",permalink:"/docs/automat/overlay-overlay-post-e-9-d-2-c-514-211-d-4437-8953-8-a-6-b-78476-da-2"}},u={},h=[{value:"Run cypher query",id:"run-cypher-query",level:2}],g={toc:h};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"run-cypher-query"},"Run cypher query"),(0,s.kt)("p",null,"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (",(0,s.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/rest-docs/current/"},"https://neo4j.com/docs/rest-docs/current/"),")."),(0,s.kt)(i.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"query",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"Query",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"results"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"columns",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"row",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"meta",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Code",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "results": [\n    {\n      "columns": [\n        "string"\n      ],\n      "data": [\n        {\n          "row": [\n            null\n          ],\n          "meta": [\n            null\n          ]\n        }\n      ]\n    }\n  ],\n  "errors": [\n    {\n      "code": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))))))),(0,s.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);