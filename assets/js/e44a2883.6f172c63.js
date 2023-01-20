"use strict";(self.webpackChunkautomat_openapi_docs=self.webpackChunkautomat_openapi_docs||[]).push([[6755],{80740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const l={sidebar_position:2,tags:["test"]},r="Translate your site",s={unversionedId:"tutorial-extras/translate-your-site",id:"tutorial-extras/translate-your-site",title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/tutorial-extras/translate-your-site.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/translate-your-site",permalink:"/automat-openapi-docs/docs/tutorial-extras/translate-your-site",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/translate-your-site.md",tags:[{label:"test",permalink:"/automat-openapi-docs/docs/tags/test"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["test"]},sidebar:"tutorialSidebar",previous:{title:"Manage Docs Versions",permalink:"/automat-openapi-docs/docs/tutorial-extras/manage-docs-versions"},next:{title:"JSON about dataset",permalink:"/automat-openapi-docs/docs/automat/about-about-get-0-c-774-ea-5-29-fd-4-e-71-abd-6-388-a-1-cc-589-bb"}},i={},u=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],d={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"translate-your-site"},"Translate your site"),(0,n.kt)("p",null,"Let's translate ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,n.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,n.kt)("p",null,"Modify ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,n.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,n.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,n.kt)("p",null,"Copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,n.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,n.kt)("p",null,"Translate ",(0,n.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,n.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,n.kt)("p",null,"Start your site on the French locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,n.kt)("p",null,"Your localized site is accessible at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,n.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,n.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,n.kt)("p",null,"Modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,n.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(43371).Z,width:"418",height:"344"})),(0,n.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,n.kt)("p",null,"Build your site for a specific locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,n.kt)("p",null,"Or build your site to include all the locales at once:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}c.isMDXComponent=!0},43371:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);