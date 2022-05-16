"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[83518],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),l=a.n(i),o=a(1597),s=a(64905),r=a(81151),c=a(75900),d=a.n(c);var u=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:r}=a||i,c=`${l}/edit/${r}${s}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===i,r=new RegExp(`${i}/?(#.*)?$`),c=a.replace(r,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var k=h,b=a(17680),y=a(75387),f=a(50041);var A=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:h}=t,{tabs:f,title:w,theme:v,description:N,keywords:x,date:C}=d,{interiorTheme:T}=(0,y.Z)(),{site:{pathPrefix:E}}=(0,o.useStaticQuery)("2456312558"),R=E?i.pathname.replace(E,""):i.pathname,I=f?R.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",M=v||T;return n.createElement(r.Z,{tabs:f,homepage:!1,theme:M,pageTitle:w,pageDescription:N,pageKeywords:x,titleType:h},n.createElement(u,{title:c?n.createElement(c,null):w,label:"label",tabs:f,theme:M}),f&&n.createElement(k,{title:w,slug:R,tabs:f,currentTab:I}),n.createElement(b.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(A,{date:C})),n.createElement(p.Z,{pageContext:t,location:i,slug:R,tabs:f,currentTab:I}),n.createElement(s.Z,null))}},7273:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return y}});var n=a(45987),i=(a(67294),a(64983)),l=a(28399);const o=["components"],s={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=r("PageDescription"),d=r("AnchorLinks"),u=r("AnchorLink"),m=r("Title"),p=r("Row"),g=r("Column"),h=r("ResourceCard"),k={_frontmatter:s},b=l.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,i.kt)(b,Object.assign({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"IBM firmly believes that web and software experiences should be accessible for\neveryone. Carbon is committed to following and complying with accessibility best\npractices.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Carbon and accessibility"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Global accessibility standards"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Tools"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Resources")),(0,i.kt)("h2",null,"Carbon and accessibility"),(0,i.kt)("p",null,"Accessible design not only helps users with disabilities; it provides better\nuser experiences for everyone."),(0,i.kt)("p",null,"An accessible product should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Give all users the same quality of experience"),(0,i.kt)("li",{parentName:"ul"},"Adapt to users and situations")),(0,i.kt)("p",null,"Carbon components follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Checklist"),"\nwhich is based on WCAG AA, Section 508, and European standards. The Carbon team\nstrives to write perceivable, operable, and understandable patterns for all\nusers—including those employing a screen reader or other assistive technology."),(0,i.kt)("p",null,"Individually accessible elements and components are part of building accessible\nproducts. Use this guide to design and build products that anyone can use."),(0,i.kt)("h3",null,"Blind users"),(0,i.kt)("h4",null,"How they experience an interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May use a screen reader to experience interfaces"),(0,i.kt)("li",{parentName:"ul"},"May rely on Braille output"),(0,i.kt)("li",{parentName:"ul"},"Cannot be expected to use a pointer or mouse for input")),(0,i.kt)("h4",null,"What designers should think about"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is visual information translated effectively into text? Can the image be\nunderstood through its metadata alone?"),(0,i.kt)("li",{parentName:"ul"},"When possible, test all designs through a screen reader.")),(0,i.kt)("h4",null,"How this applies to everyone"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As audio-only interfaces gain popularity through devices like AI assistants,\nusers are expecting more and more from the audio representations of\nexperiences.")),(0,i.kt)("h3",null,"Low-vision users"),(0,i.kt)("p",null,"Low vision can include partial sight in one or both eyes and can range from mild\nto severe. It affects approximately 4% of the world’s population."),(0,i.kt)("h4",null,"How they experience an interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May use screen readers, screen magnifiers, high-contrast modes, and/or\nmonochrome displays"),(0,i.kt)("li",{parentName:"ul"},"May have their browser font size adjusted to a larger setting"),(0,i.kt)("li",{parentName:"ul"},"May not use adaptive technology at all")),(0,i.kt)("h4",null,"What designers should think about"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maximize the readability and visual clarity of content."),(0,i.kt)("li",{parentName:"ul"},"Consider how the relative proximity of information changes when a page is\nmagnified."),(0,i.kt)("li",{parentName:"ul"},"Follow\n",(0,i.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/keyboard-accessibility/"},"keyboard guidelines"),"\nand test with a screen reader to ensure the page is read to the user in a\nlogical order.")),(0,i.kt)("h4",null,"How this applies to everyone"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users without disabilities sometimes need to view screens in poor lighting\nconditions. For example, it’s difficult to see a screen outside on a bright\nday. A higher-contrast design will make the screen more usable for everyone."),(0,i.kt)("li",{parentName:"ul"},"Vision worsens gradually starting around age 40, and good contrast helps this\nvery large demographic use your interface.")),(0,i.kt)("h3",null,"Color-blind users"),(0,i.kt)("p",null,"Color-blindness affects 8% of all men and 0.4% of women."),(0,i.kt)("h4",null,"How they experience an interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Will not be able to differentiate between some colors on an interface"),(0,i.kt)("li",{parentName:"ul"},"Rely on non-color information to use an interface")),(0,i.kt)("h4",null,"What designers should think about"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carbon color themes strive to comply with the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/cognitive/"},"WCAG 2.1 AA guidelines for contrast"),". The\ncolor palette should ensure you avoid contrast issues when used correctly. If\nyou’re working in Sketch, we recommend the ",(0,i.kt)("a",{parentName:"li",href:"http://www.getstark.co/"},"Stark"),"\nplugin.")),(0,i.kt)("h3",null,"Low vision"),(0,i.kt)("p",null,"Low vision can include partial sight in one or both eyes and can range from mild\nto severe. It affects about 4% of the world’s population."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Visual deficiency"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Low acuity")),(0,i.kt)("td",{parentName:"tr",align:null},"Also known as “blurred vision”. Can make text difficult to read, since it appears fuzzy.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Low contrast sensitivity")),(0,i.kt)("td",{parentName:"tr",align:null},"Decreased ability to determine fine detail and distinguish one object from another")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Obstructed visual field")),(0,i.kt)("td",{parentName:"tr",align:null},"The user’s view is partially obstructed. Can include central vision and spotty vision.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Retinitis Pigmentosa")),(0,i.kt)("td",{parentName:"tr",align:null},"Also known as “tunnel vision”. The user is only able to see central elements.")))),(0,i.kt)(m,{mdxType:"Title"},"Low vision disabilities"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVQoz6WSva4BQRiGFTSiF5VEQ9QKhVLPXWhcgKgkbkAhwU1QmkM0KjZMyK6fZBObKDc2mx1jzc/uzMlaEac4inOeYpovT953vpmIlFL8wueRlDIi/0HEsixVVXe7nfaGqqrH45Fzvt/vIYSr1Wq5XC4WC0VRIITr9do0zUA2DGM2m43HYwDA14PJZAIAmM/ntm3ncrlUKlWpVJrNZrvdrtVqhUIhGo32er1A5pwLIRhj733CWyGEMplMsVgcjUau6/q+r+t6o9GIx+PdbjeQb7cbxthxHMYYpZQ/YIwJIRBC2Wy2Wq1uNhvOued5GOPBYJBMJp/y/X4nhGCMKaXX6zVcpu/7r+RSqQQAME2TEHI+n1utViKReMph1Cs5PMMKCKF8Pp9Op+v1+nA4nE6nnU6nXC7HYrF+vx/IrutaloUxJj+hlHqeByFUFOVwOJxOJ8MwdF3XNG273V4ul0B+lfzLO38ef/5h3/t8M+DqDKC1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Blurred vision and tunnel vision example on Google website",title:"Blurred vision and tunnel vision example on Google website",src:"/static/cac4d2304193cd2215ca6b53d9579852/3cbba/color-accessibility-2.png",srcSet:["/static/cac4d2304193cd2215ca6b53d9579852/7fc1e/color-accessibility-2.png 288w","/static/cac4d2304193cd2215ca6b53d9579852/a5df1/color-accessibility-2.png 576w","/static/cac4d2304193cd2215ca6b53d9579852/3cbba/color-accessibility-2.png 1152w","/static/cac4d2304193cd2215ca6b53d9579852/8aaee/color-accessibility-2.png 1680w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("h4",null,"Designing for low vision"),(0,i.kt)("p",null,"Low vision users may be using a screen reader to preview your website or\nexperience, so be sure to follow\n",(0,i.kt)("a",{parentName:"p",href:"/guidelines/accessibility/keyboard"},"keyboard guidelines")," to ensure the page is\nread to the user in a logical order."),(0,i.kt)("h3",null,"Deaf and hard-of-hearing users"),(0,i.kt)("h4",null,"How they experience an interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May rely on closed captioning and other alternative representations of audio")),(0,i.kt)("h4",null,"What designers should think about"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find an alternative way to convey information exclusively with sound."),(0,i.kt)("li",{parentName:"ul"},"Transcribe and caption all videos and animations that have meaningful audio.")),(0,i.kt)("h4",null,"How this applies to everyone"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All users can benefit from closed captioning. Imagine using your device in a\nloud environment or, alternatively, in a quiet environment when it wouldn’t be\nappropriate to turn your sound on.")),(0,i.kt)("h3",null,"Physical disabilities"),(0,i.kt)("h4",null,"How users with physical disabilities experience an interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May rely on keyboards, track balls, voice recognition, and other assistive\ntechnologies to interact with an interface"),(0,i.kt)("li",{parentName:"ul"},"May not be able to use a keyboard, mouse, or other pointer")),(0,i.kt)("h4",null,"What designers should think about"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design for keyboard interaction"),(0,i.kt)("li",{parentName:"ul"},"Learn how to navigate using a\n",(0,i.kt)("a",{parentName:"li",href:"https://help.gnome.org/users/gnome-help/stable/keyboard-nav.html.en"},"keyboard"),"\nand spend some time navigating the web and digital products like email using\nonly the keyboard.")),(0,i.kt)("h4",null,"How this applies to everyone"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many users prefer to navigate interfaces with a keyboard and no mouse for\nefficiency. Good keyboard navigation can help everyone be more productive.")),(0,i.kt)("h3",null,"Users with cognitive disabilities"),(0,i.kt)("p",null,"Functional cognitive disabilities can result in difficulties with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory"),(0,i.kt)("li",{parentName:"ul"},"Problem solving"),(0,i.kt)("li",{parentName:"ul"},"Attention"),(0,i.kt)("li",{parentName:"ul"},"Reading, linguistic, and verbal comprehension"),(0,i.kt)("li",{parentName:"ul"},"Mathematics"),(0,i.kt)("li",{parentName:"ul"},"Visual comprehension")),(0,i.kt)("h4",null,"How they experience an interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"May have limited working memory and need information to remain visible\nthroughout the completion of a task"),(0,i.kt)("li",{parentName:"ul"},"May experience seizures when exposed to flashing content due to epilepsy")),(0,i.kt)("h4",null,"What designers should think about"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Designers should avoid complex language, autoplaying animations and videos,\nand flashing animations. Designs should pass usability heuristics, such as\ncognitive walkthroughs, to ensure users do not feel overloaded when completing\ntasks."),(0,i.kt)("li",{parentName:"ul"},"Design in as linear a fashion as possible and focus on design heuristics that\nhave to do with cognitive load and memory.")),(0,i.kt)("h4",null,"How this applies to everyone"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Best practices for cognitive disabilities benefit all users. Busy environments\ncan tax your cognitive load. Aging adults may also experience a decline in\ncognitive abilities. Placing a low cognitive load on users reduces mistakes\nand improves effectiveness, regardless of their abilities.")),(0,i.kt)("h2",null,"Global accessibility standards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/"},"World Wide Web Consortium")," (W3C)‘s Web Accessibility\nInitiative (WAI) provides resources to improve the accessibility of the World\nWide Web."),(0,i.kt)("li",{parentName:"ul"},"Web Accessibility Initiative (WAI) contributors create and maintain the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/"},"Web Content Accessibility Guidelines")," (WCAG),\nthe global accessibility standard.")),(0,i.kt)("h2",null,"Tools"),(0,i.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"IBM Equal Access Toolkit",href:"https://www.ibm.com/able/toolkit",mdxType:"ResourceCard"},(0,i.kt)("img",{src:"/237d16bc5d7ef7c9bf32234004d20968/a11ybee.svg",alt:"IBM bee icon"}))),(0,i.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"High Contrast Chrome plugin",href:"https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en",mdxType:"ResourceCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"128px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELUlEQVQ4y22UwUsbWxTGT2aaliIVMRbzqNAqNtGYLmoUpdSpFIQSLcYkExe6kVeJ1o3YbhrqwlXp3r/gvbfrtruuY24mahKhr41dSHTjG904IsXcmXMeZ0x8yuuBj+/Mhfub79w7DMCVun//PvT29kJPTw+Ew2Ho6upS+vv71bdv36q2bauIqDqOoyAiXNUvy+/3X/Z37txR2Lu7u+Hx48ewsrICtm27mx3H4d6DiAr3rP9BGRaJRICIwOPxqM3Nze56X1/f05GRkcybN2/WbdteR8SM4ziDDUg9Mezs7PwHffjwoesMAwA3WVtb25Pbt29v+P1+GhoaokwmQ47jECI2/Asi9l2FXo7P53Xz1i24ccOrer1eaGpqmlEUhTweD/l8Pnt4eFiura1Jx3EacurQn4j4vAG9BPaGeqG1tVXx+XzQ3t7+zHvzJjHQ6/XWWltbsb+/n1ZXV9FxHBYnREQ8r0PPEDFQh7mXBaFQCP768w8e2ePz+YrNzc3U0tJSa2lpod/8fgyHw7i8vEy2bTPgKrgB/VwHenh06OzsVDo7OyEQCLzo6Oige/fuSfaOjg588OABdXd30+zsLNVqtatneK2IKNxICYFgUA0Eg/zdfQwGg9QTDErXe3owFAq5wHg8Tufn5y5QSslpkRPLiyJZqy1KKUFKqcLAwIA6MDDA/ikSiVAkEpGRSAS5HxwcpEePHlEymaSTkxM6Ozuj09PThtA6taRlWWRZ1gfLssCyLBU0TVM1TYORkZFPmqaRpmlS0zTkfnR0lIaHh2lmZoYODw/p+PiYjo5MOjo6YqFpmtI0TTL/MT+YpgmmaaoQjUbVaDTK/jEajVI0GpV1x4mJCRobG6PfX72ivb09Ojg4oP39fRbWXVarVapWq4vVahWq1aoKiURCSSQS7C94NF3Xpa7r7JhKpSgWi9HS0hJ9+/aNfvz4QZXKLu3u7mKlUrnU98r3cKVSgUqlosDU1BSPDXfvtnt0XS/WYTX26elpnJqawtevX1OxWKSdnR0sl8ssKpfL56VSiUrl0udSqQTlctmztbUFnAySyaSSTCYhHo8/45R1MRQ54cLCAgohsFAokGEYaBjGuWEY3J8ZRj5gGAYUDEPJizy4CVOpFENVhsfj8Zn66JRKpexYLCYXFhZkLpeThmFIIYSTz+cpn8//FEI8z+fzUCgU1GKxCF+//g0MgHfv3rk/iOnpaUXXdV57kkgkNhg6OTlJ6XSastksQ0gIwfoihOjL5XJgGIa6ubkJxe1t2N7evvjjMHR8fNztdV1X+XlxcZFTP52YmMjMz8+vZ7PZdSFEZmNjY5BTCSFYquu5HPDateLR5+bmoH6Wyvv3791+cnIS0uk0ZLNZF5K72OwRQih1qKtfFp8hA16+fOmKLysWi6npdFrNZrOcRs3lctdA/IKr9S+1oz22r/aaRwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"high-contrast icon",title:"high-contrast icon",src:"/static/bcd5aa10efbf7395cf7f4e4402333371/79bda/high-contrast.png",srcSet:["/static/bcd5aa10efbf7395cf7f4e4402333371/79bda/high-contrast.png 128w"],sizes:"(max-width: 128px) 100vw, 128px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"Stark Sketch plugin",href:"http://www.getstark.co/",mdxType:"ResourceCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"60px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACCElEQVQ4y72VTa7aQAzH/+EjG7gDCLhPi4r6cQUQEuJDQrBiwyK8LBBC7FhVBXoIYIU4QctLhYArvLabV15ceTSDnGlod7U0mnFi/2bGdhwgKgk9pwF8APAZwAnATz14vdLvXMsnIo5YVwAEAOgfI9C2cYybjITDM4BfAF4cxwkB8HjRz56FnYc71/S0ATtceZ1IJAzIOEv9qm0lNGmgrwUsdBzHOFMymaRcLkeZTEZeV9oY6CsDSwH4anaVsGq1SofDgVgqlQrpU6thnZTnL5qF9yJmN8P5fK5Au92OBoMBlUolBRyPx7RYLGQIpC+z8MlcV8eMarWagvX7/UhmR6MRGWk0GiTibK79kYGPWuEMhhyzIAhov9/Hwnher9d0Pp/JdV0S2ef1gYE/WNGloRIQhmHkdJ7nKdh0OlV6q9VSeqFQIOkL4ImB320gS7fbVca+7yt9MpncNmi32+pZsViMBX6TV06lUnQ8Hmm73dJwOPwDxoPfXS6XuCszS32bkaTU6/Vb8DmrEtbpdNTzZrMZl5TV3bJZLpc0m82UUz6fp16vR5vNRsG4bGS9Ct93prM8WkUacvFyxlkvl8sKdDqd1MkMTM9XkeG0+Vreip1Ca3fKZrOqsHXM7n16b+zm4NvNwWoG5uRxzcG/1xsf4tqXAMW1r4f/2mBNP3N1m1/95ReQtnsgy28tir6raOu1KAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Stark logo",title:"Stark logo",src:"/static/f158f56cddc2d2c23e32af1b122a6ae3/2fa9e/stark.png",srcSet:["/static/f158f56cddc2d2c23e32af1b122a6ae3/2fa9e/stark.png 60w"],sizes:"(max-width: 60px) 100vw, 60px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"Color contrast tool",href:"",mdxType:"ResourceCard"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVQ4ywXBf1DXhR3H8Tff71eD7xd28UP/mHaaDOmP4PYPYMvSoivTtLtNuC+htDZp1QSGXrZC7xabeIonP5ztx4G6AL0mZExQw9CssBEy9RRoU/GLaLRAnSSifD6f13OPh7VPBaxr0qxjwuw0Cb77ns+Grlq0M+bP965GN+vfwYjOxE7pVOyUPglF1Brdon3+VfqrRVPlN1Uk+rTejLeijHUBs4ZJs0N3LYpfmF0gaHcdf653L3hZtxJgZBYMzoO+FOiZDyfnQfss9EEiqgsNqsofVnnIWGFGiUXxepTZhxNma54yayPeetxpVd/qQeTNgYlHHY1lOrq20NN/FknnFkmnFno6lulwMM1h7xzYEY82Ta/VxhlGmhlrzWwXCb4/EbTd7rSqIyTQx3xnnAyXqafR+HLpvyulSFj0h8XpHPHpculQNno/01V1qkNZInpjei1vhIziJJ+tdX32myl/boUepIn5zmdaoAjPM6WwmFyDbhbB9XXo0jo4VwRdhXA4TzQsherHpI2pDoXxkBPIY6XfLHnYonO84OVS5lCrDPcjnqdXqzRKEXLL0J3NaLQShipRfwV0l8HRImhcLaqXQlmmyy/nworQFdItxlKmfPmPK4ECHnU26WnqFFaHivhav2OCarhfj/7XCN80oov1cLoGjr4LjcWwI0+8lQ2vpDs8lwRZgQILecG/JzObZ5XhFPICFVqjfZTRpRqu0YjrtcHdTjTWCVfaUG8THK2Bv22EbYVi/QqUn+Vo8WxIi2mxoFIuzCWDx7XEzVG+SimhSps5qDrO6BC3+Cc4feh2PxrqhtPtqH0Pqt8CfyiBtbniZ096LEiGeXH9FqfsSAorWaxfeWHeppRKtqmOBg5yXJ9xUQPcYwwmbqDBPtT1CWpuhJ2V6J1SeCWMlizySEuBGXFDFqeCoRRKWKRyL6w/sk77qeRjGtVDpy7Rxy1GHY/7NzwYuAnH+1DTMbT9fVi/FeWVoMW5HvMXwg9+NGQhvX1hHltZqDo3Ry0q4gQVOke9rtLGHbrvQ/8IRAbg9lfgHnZgz3ew5SwqOYJyd4snKzwl/xrF5vRbtGoPzGIvmWpzlquLQvWrjG+p0T2aJqD9uug8K06dEAPtYmQf3KkFb9MkvDosvdiNslodPfQexJR/aH41r0rUEdL0lZOti+RxQ8Wew7u3oSYidp8RTR1wYJ84vkf8q1ZcKhejJTD5EtIz30P6ZYekk2ha68tmXlt0SGcH53CFTMbdpVNi9Rgqvig29ogtH0Nlg6jeIRq2iPZN8EWJOF8gRZaJm1m4Uw97KPbmEHYqaH6um18j4XhNkHoP57ERtHRA5H2JCg9DcYNYvx02bICtxVD3qmh+STq2DLp/Ig08IudaAowHWHU74JklDn/jC42O2/TvqU0cFqnn5WR+jpv9D7Fir5S7HeW9ifILUFGOVP4i2vkMNGTJbX1Ezokk6H1AuwZisd6Zt3xmI5iBzfgOm35WtfHHYW6LSK+Xk7UN54k35S0ukJ56Fv30CbzXFuC8k46z9WH4c4L44AHtOvlD2UnDPjWZRY26ZoNulHVioV5ZoEV5ob9wJWkzzC6F5AJIfQ5S0yEzGZY9BKuToDSWoc0B8vfHYjsN6zCivvTJLBDBos5j9rUsqQdf4ABmvyUmsIGCmJ9zMHYJw3E/xombiTM7pGsZMXz0QoCXlxvB3wdk+2fiazWs2Yd1TMP+D6lROFXIUQ5nAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"color contrast icon",title:"color contrast icon",src:"/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png",srcSet:["/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,i.kt)("h2",null,"Resources"),(0,i.kt)(p,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(h,{subTitle:"IBM Accessibility Checklist",href:"https://www.ibm.com/able/requirements/requirements/",mdxType:"ResourceCard"},(0,i.kt)("img",{src:"/2a7ef6c341581a6ceee69391700f13f0/bee.svg",alt:"IBM bee icon"})))))}y.isMDXComponent=!0}}]);