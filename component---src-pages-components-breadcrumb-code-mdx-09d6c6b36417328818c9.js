"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[8827],{28399:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(67294),n=a(88650),o=a.n(n),m=a(1597),c=a(64905),s=a(81151),l=a(75900),d=a.n(l);var u=e=>{let{title:t,theme:a,tabs:n=[]}=e;return r.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var i=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,m.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:c,branch:s}=a||n,l=`${o}/edit/${s}${c}/src/pages${t}`;return o?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},b=a(56328),p=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),c=t===n,s=new RegExp(`${n}/?(#.*)?$`),l=a.replace(s,t);return r.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},r.createElement(m.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(r.Component);var h=g,y=a(17680),f=a(75387),k=a(50041);var v=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(k.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:a,location:n,Title:l}=e;const{frontmatter:d={},relativePagePath:p,titleType:g}=t,{tabs:k,title:E,theme:T,description:x,keywords:C,date:B}=d,{interiorTheme:w}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,m.useStaticQuery)("2456312558"),N=P?n.pathname.replace(P,""):n.pathname,I=k?N.split("/").filter(Boolean).slice(-1)[0]||o()(k[0],{lower:!0}):"",D=T||w;return r.createElement(s.Z,{tabs:k,homepage:!1,theme:D,pageTitle:E,pageDescription:x,pageKeywords:C,titleType:g},r.createElement(u,{title:l?r.createElement(l,null):E,label:"label",tabs:k,theme:D}),k&&r.createElement(h,{title:E,slug:N,tabs:k,currentTab:I}),r.createElement(y.Z,{padded:!0},a,r.createElement(i,{relativePagePath:p}),r.createElement(v,{date:B})),r.createElement(b.Z,{pageContext:t,location:n,slug:N,tabs:k,currentTab:I}),r.createElement(c.Z,null))}},64540:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return f}});var r=a(45987),n=(a(67294),a(64983)),o=a(28399);const m=["components"],c={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},l=s("PageDescription"),d=s("Row"),u=s("Column"),i=s("ResourceCard"),b=s("MdxIcon"),p=s("ComponentDemo"),g=s("ComponentVariant"),h={_frontmatter:c},y=o.Z;function f(e){let{components:t}=e,a=(0,r.Z)(e,m);return(0,n.kt)(y,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Preview the breadcrumb component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,n.kt)("h2",null,"Documentation"),(0,n.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,n.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-breadcrumb--breadcrumb",mdxType:"ResourceCard"},(0,n.kt)(b,{name:"react",mdxType:"MdxIcon"}))),(0,n.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-breadcrumb--basic",mdxType:"ResourceCard"},(0,n.kt)(b,{name:"angular",mdxType:"MdxIcon"}))),(0,n.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvbreadcrumb--default",mdxType:"ResourceCard"},(0,n.kt)(b,{name:"vue",mdxType:"MdxIcon"}))),(0,n.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-breadcrumb--default",mdxType:"ResourceCard"},(0,n.kt)(b,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,n.kt)("h2",null,"Live demo"),(0,n.kt)(p,{components:[{id:"breadcrumb",label:"Breadcrumb"},{id:"currentPage",label:"Current page breadcrumb"}],mdxType:"ComponentDemo"},(0,n.kt)(g,{id:"currentPage",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-breadcrumb--breadcrumb",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-breadcrumb--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbreadcrumb--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-breadcrumb--default"},mdxType:"ComponentVariant"},'\n<Breadcrumb noTrailingSlash>\n  <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>\n  <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>\n  <BreadcrumbItem isCurrentPage href="/">Breadcrumb 3</BreadcrumbItem>\n</Breadcrumb>\n'),(0,n.kt)(g,{id:"breadcrumb",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-breadcrumb--breadcrumb",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-breadcrumb--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbreadcrumb--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-breadcrumb--default"},mdxType:"ComponentVariant"},'\n<Breadcrumb>\n  <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>\n  <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>\n  <BreadcrumbItem href="/">Breadcrumb 3</BreadcrumbItem>\n</Breadcrumb>\n')))}f.isMDXComponent=!0}}]);