"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[9588],{60369:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=o(87462),s=(o(67294),o(3905)),i=o(26389),r=o(94891),n=o(75190),p=(o(47507),o(24310)),d=(o(63303),o(75035),o(85162));const c={id:"update-pet-with-form",title:"Updates a pet in the store with form data",description:"",sidebar_label:"Updates a pet in the store with form data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"updatePetWithForm",parameters:[{name:"petId",in:"path",description:"ID of pet that needs to be updated",required:!0,schema:{type:"integer",format:"int64"}}],responses:{405:{description:"Invalid input"}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{name:{description:"Updated name of the pet",type:"string"},status:{description:"Updated status of the pet",type:"string"}}}}}},method:"post",path:"/pet/{petId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Updates a pet in the store with form data",description:{content:"",type:"text/plain"},url:{path:["pet",":petId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet that needs to be updated",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"POST",body:{mode:"urlencoded",urlencoded:[]},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/petstore/swagger-petstore-yaml",custom_edit_url:null},l=void 0,u={unversionedId:"petstore/update-pet-with-form",id:"petstore/update-pet-with-form",title:"Updates a pet in the store with form data",description:"",source:"@site/docs/petstore/update-pet-with-form.api.mdx",sourceDirName:"petstore",slug:"/petstore/update-pet-with-form",permalink:"/docs/petstore/update-pet-with-form",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-pet-with-form",title:"Updates a pet in the store with form data",description:"",sidebar_label:"Updates a pet in the store with form data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"updatePetWithForm",parameters:[{name:"petId",in:"path",description:"ID of pet that needs to be updated",required:!0,schema:{type:"integer",format:"int64"}}],responses:{405:{description:"Invalid input"}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{name:{description:"Updated name of the pet",type:"string"},status:{description:"Updated status of the pet",type:"string"}}}}}},method:"post",path:"/pet/{petId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Updates a pet in the store with form data",description:{content:"",type:"text/plain"},url:{path:["pet",":petId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet that needs to be updated",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"POST",body:{mode:"urlencoded",urlencoded:[]},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/petstore/swagger-petstore-yaml",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Subscribe to the Store events",permalink:"/docs/petstore/subscribe-to-the-store-events"},next:{title:"Update an existing pet",permalink:"/docs/petstore/update-pet"}},h={},m=[{value:"Updates a pet in the store with form data",id:"updates-a-pet-in-the-store-with-form-data",level:2}],g={toc:m};function w(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"updates-a-pet-in-the-store-with-form-data"},"Updates a pet in the store with form data"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"petId",in:"path",description:"ID of pet that needs to be updated",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"Updated name of the pet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"Updated status of the pet",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Invalid input")),(0,s.kt)("div",null)))))}w.isMDXComponent=!0}}]);