"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[3384],{76926:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),o=a(26389),r=a(94891),s=a(75190),l=a(47507),p=a(24310),d=a(63303),c=(a(75035),a(85162));const m={id:"node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120",title:"Find `node` by `curie`",description:"Returns `node` matching `curie`.",sidebar_label:"Find `node` by `curie`",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns `node` matching `curie`.",operationId:"node__node_type___curie__get-495b5659-778d-4570-82ca-8cf639bf8120",parameters:[{required:!0,schema:{title:"Node Type",type:"string"},name:"node_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Node  Node Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["robokopkg"],method:"get",path:"/robokopkg/{node_type}/{curie}",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Find `node` by `curie`",description:{content:"Returns `node` matching `curie`.",type:"text/plain"},url:{path:["robokopkg",":node_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"node_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},u=void 0,y={unversionedId:"automat/node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120",id:"automat/node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120",title:"Find `node` by `curie`",description:"Returns `node` matching `curie`.",source:"@site/docs/automat/node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120.api.mdx",sourceDirName:"automat",slug:"/automat/node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120",permalink:"/automat-openapi-docs/docs/automat/node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"node-node-type-curie-get-495-b-5659-778-d-4570-82-ca-8-cf-639-bf-8120",title:"Find `node` by `curie`",description:"Returns `node` matching `curie`.",sidebar_label:"Find `node` by `curie`",hide_title:!0,hide_table_of_contents:!0,api:{description:"Returns `node` matching `curie`.",operationId:"node__node_type___curie__get-495b5659-778d-4570-82ca-8cf639bf8120",parameters:[{required:!0,schema:{title:"Node Type",type:"string"},name:"node_type",in:"path"},{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Node  Node Type   Curie  Get",type:"array",items:{}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},tags:["robokopkg"],method:"get",path:"/robokopkg/{node_type}/{curie}",servers:[{url:"https://automat.renci.org"}],info:{title:"Automat",version:"2.0",termsOfService:"http://loading"},postman:{name:"Find `node` by `curie`",description:{content:"Returns `node` matching `curie`.",type:"text/plain"},url:{path:["robokopkg",":node_type",":curie"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"node_type"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"curie"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/automat/automat",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get one hop results from source type to target type. Note: Please GET /predicates to determine what target goes with a source",permalink:"/automat-openapi-docs/docs/automat/one-hop-source-type-target-type-curie-get-b-1-bc-6-b-59-d-171-4-c-85-8836-1-ae-8184730-f-4"},next:{title:"Get one-hop connection schema",permalink:"/automat-openapi-docs/docs/automat/simple-spec-simple-spec-get-fd-65-e-883-87-de-43-d-1-99-c-1-ec-614-a-0-c-52-b-4"}},k={},b=[{value:"Find <code>node</code> by <code>curie</code>",id:"find-node-by-curie",level:2}],g={toc:b};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"find-node-by-curie"},"Find ",(0,n.kt)("inlineCode",{parentName:"h2"},"node")," by ",(0,n.kt)("inlineCode",{parentName:"h2"},"curie")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"node")," matching ",(0,n.kt)("inlineCode",{parentName:"p"},"curie"),"."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Node Type",type:"string"},name:"node_type",in:"path"},mdxType:"ParamsItem"}),(0,n.kt)(s.Z,{className:"paramsItem",param:{required:!0,schema:{title:"Curie",type:"string"},name:"curie",in:"path"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}}))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:"[\n  null\n]",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"detail"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"loc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"anyOf"),(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))),(0,n.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"integer")))))))))),(0,n.kt)(p.Z,{collapsible:!1,name:"msg",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Message",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"Error Type",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);