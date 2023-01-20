"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[8713],{26423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>v,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var i=a(87462),r=(a(67294),a(3905)),o=a(26389),s=a(94891),n=a(75190),d=a(47507),p=a(24310),l=a(63303),c=(a(75035),a(85162));const m={id:"get-order-by-id",title:"Find purchase order by ID",description:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",sidebar_label:"Find purchase order by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",operationId:"getOrderById",parameters:[{name:"orderId",in:"path",description:"ID of pet that needs to be fetched",required:!0,schema:{type:"integer",format:"int64",minimum:1,maximum:5}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}},"application/xml":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}}}},400:{description:"Invalid ID supplied"},404:{description:"Order not found"}},method:"get",path:"/store/order/{orderId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Find purchase order by ID",description:{content:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",type:"text/plain"},url:{path:["store","order",":orderId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet that needs to be fetched",type:"text/plain"},type:"any",value:"",key:"orderId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml",custom_edit_url:null},u=void 0,h={unversionedId:"petstore/get-order-by-id",id:"petstore/get-order-by-id",title:"Find purchase order by ID",description:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",source:"@site/docs/petstore/get-order-by-id.api.mdx",sourceDirName:"petstore",slug:"/petstore/get-order-by-id",permalink:"/docs/petstore/get-order-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-order-by-id",title:"Find purchase order by ID",description:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",sidebar_label:"Find purchase order by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",operationId:"getOrderById",parameters:[{name:"orderId",in:"path",description:"ID of pet that needs to be fetched",required:!0,schema:{type:"integer",format:"int64",minimum:1,maximum:5}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}},"application/xml":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}}}},400:{description:"Invalid ID supplied"},404:{description:"Order not found"}},method:"get",path:"/store/order/{orderId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Find purchase order by ID",description:{content:"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions",type:"text/plain"},url:{path:["store","order",":orderId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet that needs to be fetched",type:"text/plain"},type:"any",value:"",key:"orderId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/petstore/swagger-petstore-yaml",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Returns pet inventories by status",permalink:"/docs/petstore/get-inventory"},next:{title:"Find pet by ID",permalink:"/docs/petstore/get-pet-by-id"}},y={},g=[{value:"Find purchase order by ID",id:"find-purchase-order-by-id",level:2}],f={toc:g};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"find-purchase-order-by-id"},"Find purchase order by ID"),(0,r.kt)("p",null,"For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"orderId",in:"path",description:"ID of pet that needs to be fetched",required:!0,schema:{type:"integer",format:"int64",minimum:1,maximum:5}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"successful operation")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"petId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"quantity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"shipDate",required:!1,deprecated:void 0,schemaDescription:"Estimated ship date",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"Order Status",schemaName:"string",qualifierMessage:"**Possible values:** [`placed`, `approved`, `delivered`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"complete",required:!1,deprecated:void 0,schemaDescription:"Indicates whenever order was completed or not",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "id": 0,\n  "petId": 0,\n  "quantity": 1,\n  "shipDate": "2022-12-16",\n  "status": "placed",\n  "complete": false\n}',language:"json",mdxType:"ResponseSamples"})))),(0,r.kt)(c.Z,{label:"application/xml",value:"application/xml",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"petId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"quantity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"shipDate",required:!1,deprecated:void 0,schemaDescription:"Estimated ship date",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"Order Status",schemaName:"string",qualifierMessage:"**Possible values:** [`placed`, `approved`, `delivered`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"complete",required:!1,deprecated:void 0,schemaDescription:"Indicates whenever order was completed or not",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:"<root>\n  <id>0</id>\n  <petId>0</petId>\n  <quantity>1</quantity>\n  <shipDate>2022-12-16</shipDate>\n  <status>placed</status>\n  <complete>false</complete>\n</root>",language:"xml",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Invalid ID supplied")),(0,r.kt)("div",null)),(0,r.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Order not found")),(0,r.kt)("div",null)))))}v.isMDXComponent=!0}}]);