"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[76695],{28399:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(67294),o=n(88650),l=n.n(o),r=n(1597),s=n(64905),i=n(81151),c=n(75900),m=n.n(c);var p=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:i}=n||o,c=`${l}/edit/${i}${s}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=n(56328),b=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===o,i=new RegExp(`${o}/?(#.*)?$`),c=n.replace(i,t);return a.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component);var h=g,k=n(17680),v=n(75387),y=n(50041);var f=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:m={},relativePagePath:b,titleType:g}=t,{tabs:y,title:N,theme:w,description:x,keywords:C,date:E}=m,{interiorTheme:T}=(0,v.Z)(),{site:{pathPrefix:P}}=(0,r.useStaticQuery)("2456312558"),V=P?o.pathname.replace(P,""):o.pathname,L=y?V.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",D=w||T;return a.createElement(i.Z,{tabs:y,homepage:!1,theme:D,pageTitle:N,pageDescription:x,pageKeywords:C,titleType:g},a.createElement(p,{title:c?a.createElement(c,null):N,label:"label",tabs:y,theme:D}),y&&a.createElement(h,{title:N,slug:V,tabs:y,currentTab:L}),a.createElement(k.Z,{padded:!0},n,a.createElement(u,{relativePagePath:b}),a.createElement(f,{date:E})),a.createElement(d.Z,{pageContext:t,location:o,slug:V,tabs:y,currentTab:L}),a.createElement(s.Z,null))}},58090:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return k}});var a=n(45987),o=(n(67294),n(64983)),l=n(28399);const r=["components"],s={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=i("PageDescription"),m=i("InlineNotification"),p=i("Row"),u=i("Column"),d=i("ResourceCard"),b=i("MdxIcon"),g={_frontmatter:s},h=l.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,o.kt)(h,Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"The library provides front-end developers & engineers a collection of reusable\nVue components to build websites and user interfaces. Adopting the library\nenables developers to use consistent markup, styles, and behavior in prototype\nand production work.")),(0,o.kt)(m,{mdxType:"InlineNotification"},(0,o.kt)("p",null,"The Vue library is maintained by members of the Carbon community. For support,\ncontact the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-components-vue/issues/new/choose"},"Carbon Vue team"),".")),(0,o.kt)("h2",null,"Resources"),(0,o.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(d,{subTitle:"Carbon Components Vue",href:"https://vue.carbondesignsystem.com",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/6bb010137a452235973d3a00782b8150/storybook.svg",alt:"Storybook icon"}))),(0,o.kt)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(d,{subTitle:"Try Vue components with CodeSandbox",href:"https://codesandbox.io/s/5zk452o9jp",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"codesandbox",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Getting started"),(0,o.kt)("p",null,"Assuming we’re starting with a new Vue CLI project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vue create --default my-project\ncd my-project\n")),(0,o.kt)("p",null,"Using Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @carbon/vue\n")),(0,o.kt)("p",null,"Or npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @carbon/vue\n")),(0,o.kt)("p",null,"In src/main.js, after “import Vue from ‘vue’”, add the following to include the\ncarbon styles and components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'carbon-components/css/carbon-components.css';\nimport CarbonComponentsVue from '@carbon/vue';\nVue.use(CarbonComponentsVue);\n")),(0,o.kt)("p",null,"Replace the contents of src/components/HelloWorld.vue with the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div class="sample">\n    <h1>Example use of @carbon/vue</h1>\n    <cv-text-input\n      label="Who are you?"\n      v-model="yourName"\n      placeholder="your name"\n    />\n    <cv-button @click="onClick">Hello {{yourName}}</cv-button>\n    <cv-modal :visible="visible" @modal-hidden="modalClosed">\n      <template slot="title">Welcome to @carbon/vue {{yourName}}</template>\n      <template slot="content">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat.\n        </p>\n      </template>\n    </cv-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'HelloWorld\',\n    data() {\n      return {\n        yourName: \'\',\n        visible: false,\n      };\n    },\n    methods: {\n      onClick() {\n        this.visible = true;\n      },\n      modalClosed() {\n        this.visible = false;\n      },\n    },\n  };\n<\/script>\n\n<style>\n  .sample {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 600px;\n    margin: 5% auto;\n  }\n\n  .cv-text-input {\n    margin: 30px 0;\n  }\n</style>\n')),(0,o.kt)("p",null,"That’s it! Now start the server and start building."),(0,o.kt)("p",null,"Using Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn serve\n")),(0,o.kt)("p",null,"Or npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: This isn’t the only way to bootstrap a")," ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components-vue"),"\n",(0,o.kt)("em",{parentName:"p"},"application, but the combination of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Vue CLI")," ",(0,o.kt)("em",{parentName:"p"},"and the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"carbon-components"),"\n",(0,o.kt)("em",{parentName:"p"},"scss is our recommended setup.")),(0,o.kt)("h3",null,"List of available components"),(0,o.kt)("p",null,"View available Vue Components ",(0,o.kt)("a",{parentName:"p",href:"http://vue.carbondesignsystem.com"},"here"),". Usage\ninformation is available in the notes provided with each story."),(0,o.kt)("h2",null,"Troubleshooting"),(0,o.kt)("p",null,"If you experience any issues while getting set up with Carbon Components Vue,\nplease head over to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-components-vue"},"GitHub repo")," for\nmore guidelines and support. Please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-components-vue/issues"},"create an issue"),"\nif your issue does not already exist."))}k.isMDXComponent=!0}}]);