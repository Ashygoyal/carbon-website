"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[31367],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(88650),o=a.n(r),s=a(1597),l=a(64905),i=a(81151),c=a(75900),m=a.n(c);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:i}=a||r,c=`${o}/edit/${i}${l}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===r,i=new RegExp(`${r}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var h=b,k=a(17680),f=a(75387),y=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:b}=t,{tabs:y,title:w,theme:A,description:v,keywords:E,date:C}=m,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:T}}=(0,s.useStaticQuery)("2456312558"),P=T?r.pathname.replace(T,""):r.pathname,B=y?P.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",I=A||x;return n.createElement(i.Z,{tabs:y,homepage:!1,theme:I,pageTitle:w,pageDescription:v,pageKeywords:E,titleType:b},n.createElement(p,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:I}),y&&n.createElement(h,{title:w,slug:P,tabs:y,currentTab:B}),n.createElement(k.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(N,{date:C})),n.createElement(d.Z,{pageContext:t,location:r,slug:P,tabs:y,currentTab:B}),n.createElement(l.Z,null))}},24851:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return k}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const s=["components"],l={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("PageDescription"),m=i("InlineNotification"),p=i("Row"),u=i("Column"),d=i("ResourceCard"),g=i("MdxIcon"),b={_frontmatter:l},h=o.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,r.kt)(h,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The library provides front-end developers & engineers a collection of reusable\nAngular components to build websites and user interfaces. Adopting the library\nenables developers to use consistent markup, styles, and behavior in prototype\nand production work.")),(0,r.kt)(m,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"The Angular library is maintained by members of the Carbon community. For\nsupport, contact the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/carbon-components-angular/issues/new"},"Carbon Angular team"),"."),(0,r.kt)("p",null,"v11 upgrade for Carbon Angular is coming soon.")),(0,r.kt)("h2",null,"Resources"),(0,r.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(d,{subTitle:"Carbon Components Angular",href:"https://angular.carbondesignsystem.com/?path=/story/components-welcome--to-carbon-angular",mdxType:"ResourceCard"},(0,r.kt)("img",{src:"/6bb010137a452235973d3a00782b8150/storybook.svg",alt:"Storybook icon"}))),(0,r.kt)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(d,{subTitle:"Try Angular components with CodeSandbox",href:"https://codesandbox.io/s/0129r494ql",mdxType:"ResourceCard"},(0,r.kt)(g,{name:"codesandbox",mdxType:"MdxIcon"})))),(0,r.kt)("h2",null,"Install"),(0,r.kt)("p",null,"Assuming we’re starting with a new @angular/cli project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @angular/cli new my-project --style=scss\ncd my-project\nnpm i --save carbon-components-angular carbon-components\n")),(0,r.kt)("p",null,"Then we need to include carbon-components in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/styles.scss"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@import '~carbon-components/scss/globals/scss/styles.scss';\n")),(0,r.kt)("p",null,"That’s it! Now start the server and start building."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: This isn’t the only way to bootstrap a")," ",(0,r.kt)("inlineCode",{parentName:"p"},"carbon-components-angular"),"\n",(0,r.kt)("em",{parentName:"p"},"application, but the combination of")," ",(0,r.kt)("inlineCode",{parentName:"p"},"@angular/cli")," ",(0,r.kt)("em",{parentName:"p"},"and the"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"carbon-components")," ",(0,r.kt)("em",{parentName:"p"},"scss is our recommended setup.")),(0,r.kt)("h3",null,"Using our starter app"),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABgklEQVQoz4WTWY+CQBCE/f8/x0SjgvrkfSU+eKFogosgGK9FQMDaVO+y0ewSO6nM/XVNpifX7XZBtVotVKtVUb1e/yNVVUXpHiodt9ttdDodDIdD5Njp9/uoVCoyoWkaBoOBaDQaSTK2uq5jtVphPp+LZrMZNpsNms0marUaer3eN5AHCCyXy3BdF77vYzKZYDqdYjwewzAM3G43ZAUTKYoijBeHBJqmiSRJcLlccL1epQ2CAPf7HWEY4vF4iLiHYiwWC7l6JpAH6PRwOOB4PEqf0NPpJIe5vl6vZS0FZjrc7XaI4xiO4wiQkPP5LA4J3W63iKJI3Hue9x5Ih4xPz4fvBwiDQABMkl6RLV1y7l/g86PQYRQn0HQDlu3CdRy5Gl1SdJy6phisCgJ/X5kOWSIsG8uyJLtpfsC2bez3e2k5n47ZZxI+GGO5XL4+Ch2yMIvFIgqFgiyyT5VKJUlE989K51h/+XxexvwYrFcBNhoN+Q2Kqop99ad9J4K4l2fJIPALiTgH2yUb/DIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"carbon-angular-starter screenshot",title:"carbon-angular-starter screenshot",src:"/static/44856f61219a5c0e5256c1ffa9a40420/3cbba/carbon-angular-starter.png",srcSet:["/static/44856f61219a5c0e5256c1ffa9a40420/7fc1e/carbon-angular-starter.png 288w","/static/44856f61219a5c0e5256c1ffa9a40420/a5df1/carbon-angular-starter.png 576w","/static/44856f61219a5c0e5256c1ffa9a40420/3cbba/carbon-angular-starter.png 1152w","/static/44856f61219a5c0e5256c1ffa9a40420/0b124/carbon-angular-starter.png 1728w","/static/44856f61219a5c0e5256c1ffa9a40420/99571/carbon-angular-starter.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("p",null,"We recommend using the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-angular-starter"},"carbon-angular-starter"),"\nfor bootstrapping applications with Carbon components. Within five minutes your\napp will be running with the following already configured:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Angular-cli"),(0,r.kt)("li",{parentName:"ul"},"Build process"),(0,r.kt)("li",{parentName:"ul"},"Code styles and editor configs"),(0,r.kt)("li",{parentName:"ul"},"Folder structure"),(0,r.kt)("li",{parentName:"ul"},"Lazy loading"),(0,r.kt)("li",{parentName:"ul"},"Routing"),(0,r.kt)("li",{parentName:"ul"},"Service workers"),(0,r.kt)("li",{parentName:"ul"},"Test framework")),(0,r.kt)("p",null,"Check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-angular-starter"},"readme")," for\ninstallation instructions."),(0,r.kt)("h2",null,"Development"),(0,r.kt)("p",null,"Please refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IBM/carbon-components-angular/blob/master/README.md#contributing"},"contributing guidelines"),"\nbefore starting any work."))}k.isMDXComponent=!0}}]);