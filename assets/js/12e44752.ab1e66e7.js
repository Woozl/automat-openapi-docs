"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[3172],{43643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var r=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),n=(a(75190),a(47507)),l=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post-c53cd684-f87e-4ef5-ada3-def19d9d6b1b",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["gtex"],method:"post",path:"/gtex/cypher",servers:[{url:"https://automat.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["gtex","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},m=void 0,u={unversionedId:"automat/cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b",id:"automat/cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",source:"@site/docs/automat/cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b.api.mdx",sourceDirName:"automat",slug:"/automat/cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b",permalink:"/docs/automat/cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cypher-cypher-post-c-53-cd-684-f-87-e-4-ef-5-ada-3-def-19-d-9-d-6-b-1-b",title:"Run cypher query",description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",sidebar_label:"Run cypher query",hide_title:!0,hide_table_of_contents:!0,api:{description:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",operationId:"cypher_cypher_post-c53cd684-f87e-4ef5-ada3-def19d9d6b1b",requestBody:{content:{"application/json":{schema:{title:"CypherRequest",required:["query"],type:"object",properties:{query:{title:"Query",type:"string"}}},example:{query:"MATCH (n) RETURN count(n)"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"CypherResponse",required:["results","errors"],type:"object",properties:{results:{title:"Results",type:"array",items:{title:"CypherResult",required:["columns","data"],type:"object",properties:{columns:{title:"Columns",type:"array",items:{type:"string"}},data:{title:"Data",type:"array",items:{title:"CypherDatum",required:["row","meta"],type:"object",properties:{row:{title:"Row",type:"array",items:{}},meta:{title:"Meta",type:"array",items:{}}}}}}}},errors:{title:"Errors",type:"array",items:{title:"CypherError",required:["code","message"],type:"object",properties:{code:{title:"Code",type:"string"},message:{title:"Message",type:"string"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["gtex"],method:"post",path:"/gtex/cypher",servers:[{url:"https://automat.renci.org"}],jsonRequestBodyExample:{query:"string"},info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Run cypher query",description:{content:"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (https://neo4j.com/docs/rest-docs/current/).",type:"text/plain"},url:{path:["gtex","cypher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Query reasoner via one of several inputs.",permalink:"/docs/automat/reasoner-api-1-3-query-post-32149-ba-9-2-abb-44-cb-9-e-09-a-986499-bceba"},next:{title:"Overlay results with available connections between each node.",permalink:"/docs/automat/overlay-overlay-post-42-faa-3-f-9-eeb-9-433-e-a-354-a-1-dcaf-47116-d"}},y={},h=[{value:"Run cypher query",id:"run-cypher-query",level:2}],g={toc:h};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"run-cypher-query"},"Run cypher query"),(0,s.kt)("p",null,"Runs cypher query against the Neo4j instance, and returns an equivalent response expected from a Neo4j HTTP endpoint (",(0,s.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/rest-docs/current/"},"https://neo4j.com/docs/rest-docs/current/"),")."),(0,s.kt)(i.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"query",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"Query",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"results"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"columns",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"row",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"meta",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Code",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "results": [\n    {\n      "columns": [\n        "string"\n      ],\n      "data": [\n        {\n          "row": [\n            null\n          ],\n          "meta": [\n            null\n          ]\n        }\n      ]\n    }\n  ],\n  "errors": [\n    {\n      "code": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))))))),(0,s.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);