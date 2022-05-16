"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[60627],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),i=a(88650),o=a.n(i),s=a(1597),r=a(64905),c=a(81151),l=a(75900),d=a.n(l);var p=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:r,branch:c}=a||i,l=`${o}/edit/${c}${r}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},m=a(56328),h=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),r=t===i,c=new RegExp(`${i}/?(#.*)?$`),l=a.replace(c,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var A=u,b=a(17680),f=a(75387),y=a(50041);var k=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:i,Title:l}=e;const{frontmatter:d={},relativePagePath:h,titleType:u}=t,{tabs:y,title:w,theme:v,description:x,keywords:C,date:T}=d,{interiorTheme:N}=(0,f.Z)(),{site:{pathPrefix:E}}=(0,s.useStaticQuery)("2456312558"),B=E?i.pathname.replace(E,""):i.pathname,R=y?B.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",S=v||N;return n.createElement(c.Z,{tabs:y,homepage:!1,theme:S,pageTitle:w,pageDescription:x,pageKeywords:C,titleType:u},n.createElement(p,{title:l?n.createElement(l,null):w,label:"label",tabs:y,theme:S}),y&&n.createElement(A,{title:w,slug:B,tabs:y,currentTab:R}),n.createElement(b.Z,{padded:!0},a,n.createElement(g,{relativePagePath:h}),n.createElement(k,{date:T})),n.createElement(m.Z,{pageContext:t,location:i,slug:B,tabs:y,currentTab:R}),n.createElement(r.Z,null))}},57522:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return y}});var n=a(45987),i=(a(67294),a(64983)),o=a(28399);const s=["components"],r={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},l=c("PageDescription"),d=c("AnchorLinks"),p=c("AnchorLink"),g=c("Row"),m=c("Column"),h=c("Caption"),u=c("Video"),A=c("ResourceCard"),b={_frontmatter:r},f=o.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,i.kt)(f,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Learn about how the IBM.com team adopted Carbon for the design and development\nof the new self-service purchase experience on IBM.com.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(p,{mdxType:"AnchorLink"},"The challenge"),(0,i.kt)(p,{mdxType:"AnchorLink"},"The proposed solution"),(0,i.kt)(p,{mdxType:"AnchorLink"},"The approach"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Benefits"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Positive outcomes"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Next steps"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Resources")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"The IBM.com Commerce Platform team spent three months transitioning their\ncheckout flow to implement Carbon and improve their conversion rate and overall\nproduct experience. They took an iterative approach, starting first with small,\nisolated features to get comfortable designing and developing with Carbon. Next,\nthey replaced existing elements with Carbon components. Once all the components\nhad been transitioned, the team focused on updating page structures and layouts."),(0,i.kt)("p",null,"Since the Carbon implementation, the team’s delivery cycle has sped up and\nthey spend less time on quality assurance. Their product is now aligned with the\nother IBM.com experiences that use Carbon, creating a consistency of experience.\nTheir conversion rate increased by 5% and more than 50% of customers are\nconverting to purchase, which puts them on par with industry benchmarks."),(0,i.kt)("h2",null,"The challenge"),(0,i.kt)("h3",null,"Project goals"),(0,i.kt)("p",null,"The IBM.com Commerce Platform team had a mission — to improve the completion\nrate for their checkout flow. They knew there were usability issues in the\ncheckout process but they also wanted to add new features."),(0,i.kt)("p",null,"By aligning their checkout flow with the Carbon Design System, they could add\nnew features in a consistent way and make a lot of small improvements, which\nwould have a large impact on the completion rate and therefore revenue."),(0,i.kt)("p",null,"The team aimed to do this by decreasing clicks, increasing device compatibility,\nintroducing high-value features, and fixing existing bugs. An additional goal\nwas to reduce the amount of time IBM support was spending manually identifying\nand resolving order issues."),(0,i.kt)("h3",null,"Analytics and research"),(0,i.kt)("p",null,"Site analytics helped identify existing issues in the checkout process. There\nwere key issues to address during the transition to Carbon:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There was a lack of visual and information hierarchy on the page."),(0,i.kt)("li",{parentName:"ul"},"Critical information was missing when users encountered an error, and this\nblocked them from moving forward."),(0,i.kt)("li",{parentName:"ul"},"Customers felt the checkout experience was unreliable, and couldn’t quickly\nfind what they wanted, so they abandoned the flow.")),(0,i.kt)("h3",null,"Competitors"),(0,i.kt)("p",null,"The Commerce team knew their eCommerce marketplace was falling behind\ncompetitors, in both market share and user experience. Competitors had been\nmoving to a more modern experience that used data given by customers to\npre-populate fields, which significantly reduced the number of clicks. The team\nused this project to strategically update their product to be able to better\ncompete in the marketplace."),(0,i.kt)("h2",null,"The proposed solution"),(0,i.kt)("h3",null,"Transitioning to Carbon"),(0,i.kt)("p",null,"Implementing Carbon would make the interface more clear, meaning users would no\nlonger get lost in the flow and would be able to find what they needed. It would\nalso align key pages before, during, and after the checkout process, creating a\nsense of continuity. The team hypothesized that as a result, users would be less\nlikely to defect."),(0,i.kt)("p",null,"The team mapped out their transition to Carbon, focusing at first on a core set\nof pages. While implementing Carbon components and aligning to the IBM Design\nLanguage, they took the opportunity to reevaluate their typography and\nillustrations. By improving their type hierarchy and illustrations they hoped to\ntransform a somewhat dry experience to something delightful, while building more\nconfidence and trust in the interface itself."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:6,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y51U246CMBT0//9nP2M1+mzwhpcYBSktlNIym6lbFtFos02GA7SdzpmedrJer7FarcAYwO9YDOcwTsLLcrnEdDrFbDbDYrGIxnw+R5IkPekkvKRpirIsUdc1rLU9OufQdZ2Hcw5u0MdvrTV2u92fQj64wvF4xLgZ2yETNXJRQQiFQmpY1z2Ne0l4OBx8J1dtmsbDGINaayipYJREaxpYqnTWK2ZjfEvYti2yLEOW35BlOZRS/p8hjIH5XYwLRxHSmzzPvZ/0p6qqJ9Bn9gVvPyo8n8+4Xq+43W4e/DfcKCqNJuQEpiyE8ErcYJcDOIZpRxFy4Gaz6dMmMeMY9Daa8HK5eHWv/CNIxhhNSA/pW0z7SEizmTJTHXs3RhQhFZ5OJxRFgUqph3r7FyEVbrdb7yPJw6TX6fJkRdQh1RWiRKUNrHUv1Tl/pu94ezlwMHewaQx0096P2aCowy3DJjWwzzqk6Q7JmHC/3/elEupMSeljuCwClKrQWY3k1OLr23hCf+EGwnAfhqPmUy6K/n1c1KyAgiepkjBaeM8fUg6EVCOljEZZSghRPhD+ACTU8EDoB55KAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Order confirmation page prior to the redesign",title:"Order confirmation page prior to the redesign",src:"/static/154cefe945d0fd0c1670e11b81b88d78/6e9cd/checkout-before.png",srcSet:["/static/154cefe945d0fd0c1670e11b81b88d78/7fc1e/checkout-before.png 288w","/static/154cefe945d0fd0c1670e11b81b88d78/a5df1/checkout-before.png 576w","/static/154cefe945d0fd0c1670e11b81b88d78/6e9cd/checkout-before.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},(0,i.kt)("span",{className:"cds--type-semibold"},"Before:")," Order confirmation page prior to the redesign.")),(0,i.kt)(m,{colLg:6,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACGUlEQVQ4y51USa7aQBD9B2GSEIOADSzYcJYcIjfJDbLJMktglwQh2EQMESgKC2ZsiBn8mdw2nl5ULdpMPwFS0pO729WvXlV39ctwOARhMBhAjMX8GYg9L2LS6/XQaDTQbDY52u02Wq3WXZBfv98/EdKAFmRZxm63g67r2G63sCyLw7Zt70twHAe241z8G4/HnkqPcDabQRgRE+l+v+fjzWYDy7b5P1nZQlY2ni8FmEwmt4TT6ZQ7UFRFUXgAVVU5IRGbpoVXVYWy2uHX1MVitYbOGPd/k1AopIiUNpGQSpGm67owDAPt9k+8e/8BHz99hixJ0HUDkiTdIWSM10YYkZENxit8/yHh29cv6A9kL6O7Kf9WFpgvlliv1x4Y07DZamC6yf0YO8Cy7L/XUCgkNZYNmDapdfmc4BxViiwA99+Hcp4yY4zDPp6sIL3Gw6e8XC4xn8/5daHD0TTtqOpUz6cI6aoQCZGd2znZXcLzlDXGsNdtMN26SfFhhdc1PBwMfu900wUzqMXM51N2jj1qmqbXu/dAvm/2MrXb/xp1inhx+PM1Go3Q6XRQrVZRqVRQKpUeRrlcRrfbPT1fon75fB65XA7ZbBZ+vx/BYBCBQOACtCYQCoXg8/mQSCRQq9U8lR5hsVhENBrlDoRkMnmBVCqFeDyOWCzGv4RIJIJMJoN6vX5LWCgUEA6HvU3XoHUKeA7yT6fTF4R/ANJufGx88RB2AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Order confirmation page after the redesign",title:"Order confirmation page after the redesign",src:"/static/f3d609858a016d3e159dbfca7ae31175/6e9cd/checkout-after.png",srcSet:["/static/f3d609858a016d3e159dbfca7ae31175/7fc1e/checkout-after.png 288w","/static/f3d609858a016d3e159dbfca7ae31175/a5df1/checkout-after.png 576w","/static/f3d609858a016d3e159dbfca7ae31175/6e9cd/checkout-after.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},(0,i.kt)("span",{className:"cds--type-semibold"},"After:")," Order confirmation page after the redesign."))),(0,i.kt)("h3",null,"Identifying high value features"),(0,i.kt)("p",null,"The second part of the solution was identifying high impact features they could\nimplement in tandem with the Carbon transition. Many of these features were\nself-contained and so they paired well with the overall transition to Carbon, as\nthe team learned to design and develop with the design system."),(0,i.kt)("p",null,"The global address form was one of these features. The new form validated\naddresses as users entered them, giving users confidence that they’d input the\ncorrect address. Additionally, the support team no longer had to manually follow\nup on invalid addresses, making the experience better for everyone."),(0,i.kt)("h2",null,"The approach"),(0,i.kt)("p",null,"The transition to Carbon was an iterative process. Rather than updating the\nentire interface at one time, the Commerce Platform team transitioned their\nproduct slowly and tactically. By adopting Carbon iteratively, they were able to\nsee which changes made substantial impacts and use that to inform their roadmap\nand subsequent changes."),(0,i.kt)("h3",null,"Learning the design system"),(0,i.kt)("p",null,"Before jumping into adopting Carbon, it was important to spend time learning\nabout and getting comfortable with Carbon. Shixie Shi Trofimov, the design lead\nof the transition project, led the developers through a crash course to align on\ndefinitions and terminology. She wanted designers and developers to speak the\nsame language as they worked through a set of design specifications."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACwUlEQVQ4y62VTU8aURSG/TEu1EgVUMCBqDEmoI6hC4GFC/+FiRvYaiLd+ReEuKgfsTuTbtRWYCiDn6jowCATEauCrlTe5hwZFfxq0k7y5p4LyZNz733mTkOlUgE9NN7e3uLu7q4m+m/0/3vRGQ168a+Pzmi4v7/nQlVVTE5OIhgMYmpqCtPT0zwGAgHMzMygoOU5p/kTFDQNF8Uz/D4r4PL8HDqDO9Qn8Xgcg4ODGB0dhdvths/n49psNsPlckKORRH9sY5fkQ0kpRgyhwdQ04c4UY55S14Ak8kkAwnk8Xjg9XoxNjYGcXgYPq8XybiEeGQDshTDZlyCcrDPME3Nvg6UZRlGoxE2mw1WqxUWi4XH9vZ2eEZGsJOUIcdiDKZkqbvjI2jZzPvArq6ux9jtdl6yxzPCsEQsyl0e7u5wd7mPgATo6emBIAhcOxwOdHZ28pIJcpRKIb23y6B8RnkA1i9Zn0iSBKfTyaCmpia0trbCYDCgsbERAy4XjvdTD10dpfkwKLzsjFIL1P0pFAqYm5vjhEIhhMJhhMNhzM7O4tvyMkqXF7gpl3Bdekj56grlq0uuK69pk1EUTExMsHd+vx8Bv5/H8fFxfAkGoeVU5FUVJ9kstFwO54VTDvlY46HeLnn4yWCAzWqF2WSC1WKBQxDQ0tKCgQEXEtEIoutrjx6SNh962NfXB3FoCJ/dbt7P/v5+2AWBD2VrfQOJ76vYWv2J7bUIlOQ2cokdaIry9il3d3czSBRF9Pb2spNGk+nJw6rUm7qHJHa9NvqEgG1tbTVSkz4mAtZ5SOo8eZh9v0Pq7LmHHR0dvOR0ao/3jfQh0CPwrVePDoUuBQKSg/TK0ZvT3NyMYVFkUL4KUcnFqo/5tzwsFotYWFjA0tISFhcXOVR/nZ/HysoKSlXn6nNzXa718L9fsM+v7/rr/3n+9hPwB2mFJycVZsD2AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Carbon token quiz",title:"Carbon token quiz",src:"/static/88881f70256e94afad1de01b9187e8c3/3cbba/token-quiz.png",srcSet:["/static/88881f70256e94afad1de01b9187e8c3/7fc1e/token-quiz.png 288w","/static/88881f70256e94afad1de01b9187e8c3/a5df1/token-quiz.png 576w","/static/88881f70256e94afad1de01b9187e8c3/3cbba/token-quiz.png 1152w","/static/88881f70256e94afad1de01b9187e8c3/92c65/token-quiz.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"A Carbon token quiz helped get developers comfortable with Carbon token naming conventions."))),(0,i.kt)("h3",null,"Starting small"),(0,i.kt)("p",null,"The adoption process started with one modal. Instead of redesigning an existing\nfeature, they identified a high value, self-contained, new feature to develop\nfrom scratch. The modal solved an important usability issue by allowing users to\nchange their country during checkout, but it also provided the developers a\nsimple and non-disruptive entry point into adopting Carbon. It also meant they\ndidn’t have to worry about breaking existing functionality in production and had\na safe place to experiment and ship."),(0,i.kt)("p",null,"The process of designing to shipping the modal with Carbon took about a month\nbecause it was the team’s first experience with using Carbon and they were\ngetting up to speed."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACF0lEQVQ4y52TzW8SQRiH+eO8ajx40sTEqydjTIxA94v93gVL4aRpk6ZpDwR2WaztsZReemnCVYHy0erRlJaERJs8ZkYgpeXkJE9+O+/M/mbmnXdSnU6H8/NzhsMhg8HgvxD/9no9hFdKmJ2enpIkCYeHhxwcHKxEjM1ZxGa6v79Pu92WpqnRaESlUiGdTuM4DpZlSWzbXjCP3cU0TUypFqqm0Ww25W5TYrtxHJPJrqFqujTwfR9d18nlcrLvui6e5y3h+wGKYbNm2CiGw3GrtWxoGCae588m++TzeQqFgvwOgoD19XWKxaJUgYh/UAwymsWa4dA8vmcojhGGodTNrS36gxHfvnfp9vp0uj2ZH5Ge8XgstbixwfuMSlo1yer2Q0ORE2EodG93B26vuZ3+gj9j+H3N1dUVNzcTRJtMJpTKZUzLxnE9qa3WCsMgCPFdE6+0i9OA8CvYDfh8xFKbTqeUy2Vc1yEMAnmZKw1FosPAJWuWePr2C8/eJTx+k/Ay06Bai0mSOo1Gg1qtJnPszvJt2/cM6/W6vM0wDBampVClnNcp5TU++jqKoqBpmsQwjMVlCUQVLBmKFVVVxZJ1Z6FoFk9eWTx6bvHitag7e4a1ErHAog77/T4nJydUq1V59DiOqNYiNnciPm1HbO9FRFFMFEWz8X+I/jwmNnR2diafcOruW77Lj4shPy+HXF4MH4ytYv6W/wLd1hgyNGD42gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"New modal using Carbon",title:"New modal using Carbon",src:"/static/ad4f64e2a1d99c93b548d8e54b589208/3cbba/carbon-modal.png",srcSet:["/static/ad4f64e2a1d99c93b548d8e54b589208/7fc1e/carbon-modal.png 288w","/static/ad4f64e2a1d99c93b548d8e54b589208/a5df1/carbon-modal.png 576w","/static/ad4f64e2a1d99c93b548d8e54b589208/3cbba/carbon-modal.png 1152w","/static/ad4f64e2a1d99c93b548d8e54b589208/92c65/carbon-modal.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"New modal for switching countries"))),(0,i.kt)("h3",null,"Mixing new with old"),(0,i.kt)("p",null,"The first new Carbon modal was placed on an existing page. It was an easy way\nfor the team to get started and begin shipping new pieces. Mixing new with old\nwasn’t disruptive for users. Because the changes were implemented in small\npasses, users may not have even noticed that the experience had changed and\nreturning users did not have to relearn the interface. Also, mixing the\nexperiences meant that got the team to their final result faster."),(0,i.kt)(u,{vimeoId:"488148768",mdxType:"Video"}),(0,i.kt)(h,{mdxType:"Caption"},"New modal sitting on the original page"),(0,i.kt)("h3",null,"Iterating, iterating, iterating"),(0,i.kt)("p",null,"Rather than updating all of the pages at once, the team took an iterative\napproach. By starting with fresh features that integrated with the old\ninterface, the team could ship pieces iteratively."),(0,i.kt)("p",null,"The first stage involved switching individual components to their Carbon\nversion, starting with input fields then buttons. After transitioning the\nindividual components, the page structure and layout was updated."),(0,i.kt)("p",null,"With this approach, the Commerce team was able to refresh their product’s\nexperience, set the stage for larger future changes, and complete the project in\nonly three months."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB1UlEQVQoz4WSS47aQBCGuSeaSGEQm2yyywU4QqIcglPAIGWByIIkS4yxM4wGY7vb/fKr+4+qACtRIqWkcrW7qK/+KjM6HA6Ioj0o/s+jKBoieRzHQ+4YX+OIHlVVoWkaaKVgjUHbtiiKAoc4QZZdIEQJKSW01siyDKfTC5TSEELAGANjLJ4ziSRJMKIuBCMIGZ3ruuHin88nFGUJay2ccwghoCxLdrL7XQiAch3SNL0CqYAAAeColIKsKlZD71obbuK95waknozUtV3H5+A90vSmkDrVdc3d+r7nwuoGpCKlKs7XziHPc5Rlwc2lqNB1PQOpblBIYwrl4BpKBv7BHWiNxjlXkLpF7Swul8swcm01+q5nIZ4Vphgd4xjGOuTSor0l78BzlqF2BsmrwUveIPiOxyWFvQdehUcI/m+gNg7KOFb3B/B85pGFyCGl4H3eR+59QFZq9L0fVjWM3HXtAPsdSGpoHbRjV9fX1QgBIST+ZQOQVNBXVFrBOoe2MZDFAR8/fcabhwdMp1M8Pj5iPB5jPp9jsVhgMplgNpuxTyZv8e79B3z7/uP6xyYojc7xeLx5gu12i9VqhfV6zU7nzWaD3W6H5XLJd09PdL/E+stX7PcRfgGEnDAILlQvjgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkout screen in January 2020, April 2020, and the future design",title:"Checkout screen in January 2020, April 2020, and the future design",src:"/static/c323cbe7e2465cf923797436c51e558e/3cbba/iterate.png",srcSet:["/static/c323cbe7e2465cf923797436c51e558e/7fc1e/iterate.png 288w","/static/c323cbe7e2465cf923797436c51e558e/a5df1/iterate.png 576w","/static/c323cbe7e2465cf923797436c51e558e/3cbba/iterate.png 1152w","/static/c323cbe7e2465cf923797436c51e558e/0b124/iterate.png 1728w","/static/c323cbe7e2465cf923797436c51e558e/0c3f5/iterate.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"From left to right: The checkout screen in January 2020 before the transition, in April 2020 after the transition, and the future design."))),(0,i.kt)("h2",null,"Benefits"),(0,i.kt)("p",null,"There have been several benefits from the transition to Carbon for both the\nCommerce team’s own workflow and process, and the user experience. The team\nespecially found value in the impact of their delivery speed and need for\nquality assurance."),(0,i.kt)("h3",null,"Faster delivery"),(0,i.kt)("p",null,"The entire process for implementing Carbon took only three months and since the\ntransition, the team’s development cycle has sped up. By using Carbon, the\ndevelopers are placing pre-built components and can therefore focus on more\nimportant issues instead of taking the time to build out each element and\ncomponent."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:6,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACKElEQVQ4y51UyY4aMRDlW1gFJzhy4yvyAfmIfE0OueWSK5xziEYKi2AgyoWwiHWY7umNXtzddr/IFcw0YRk0Jb12yV1+flVlOzOfzzGbzSDHNOTcvUhzZJQzmUzQ7/cJg8EAo9EIw+HwDI8HpOem0+mRNKOc9XoNz/OOiOP4BIJzcM4BJATpCyEQRREWi8WrQvmRO2y3W0hLkgSWZcG2bTiOA9M0yVdm7xmsPTvEgkiXy+U54WazoSCpRtM02sAwDPi+jzAMabG05dMe8+3+uIEUcFGhIpSpuK5LYIwhbbIsm+0O335s8f1hgPV6Bdf1sFqtjnW8SKjrGtVRKguCgFRyHoOFHA8/H/Hh4yd8/vIVtiyN41wj/FdDLgQM24dhe6RSEu9dF0g4Br8W+P3HgKE/QdMcHKpwO2UhODzXhe97h44iVS8BwWPyGQsRye6/3RSOnfaCZ92EadkIAh9+ENDxSDdC2VVCdWyESOAFIbwgIl8uvoabhOmmGMYLLNOkI5RWlFZ2N6FMTdd1mKZFI9TdSKm6i/A1ZQHGYgQRwML4LMX/x7cVcobV85yuXxQLsCg53JR3EMomRHEIx7PoWMhgfngULuHm47Db7fBeO7kpink8HqPX6xHa7TY6nc5d6Ha79JYe30PVkFarhUajgXq9jlwuh0KhgHw+fwI5p1AsFpHNZlGtVolUqTwSNptNCqpUKiiXywTlq1H+VyiVSrRxrVajrBThXxbwoRBoTSvBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Order confirmation page design",title:"Order confirmation page design",src:"/static/c2f22b7b015a42d9ce03848e8979798f/6e9cd/delivery.png",srcSet:["/static/c2f22b7b015a42d9ce03848e8979798f/7fc1e/delivery.png 288w","/static/c2f22b7b015a42d9ce03848e8979798f/a5df1/delivery.png 576w","/static/c2f22b7b015a42d9ce03848e8979798f/6e9cd/delivery.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},(0,i.kt)("span",{className:"cds--type-semibold"},"Before:")," The order confirmation screen design that was handed off to developers.")),(0,i.kt)(m,{colLg:6,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACC0lEQVQ4y51UWY7aQBCds7AKvuCTPy6QG+QaOc385QL5giuMFFbBSMkEsQgwiMUYG+9t+0VVonvMTMI4KenJ3e7yq1dd5XpYLBaYz+egZxr07l8gv3mQm+l0isFgwBgOhxiPxxiNRu/wPL7dk99sNnsllAtN0+A4jkIYhhBCKMRxjCiKcHFDBKHgNYHOlsulUsmEFGG73YIsSRKcTicYhoHz+Qxd13kvbfxrhyhWWw60Wq3eE242G3agiPv9HrvdDqZpwvM8+L4PPwihrZdY6TGefpo47Onc+juhVEgOlK7rukyWNss84/HrN3z6/AXfOx0OTALuKqR7oTR931PkQkRwXQdP/Q1+vMwx6PdhO+HVP/6Y8HgycTIsWNYrgiCAadlKrW27HPDDlJMEEDFuLj5tVDRC5qJEkcDxcICuH/kOCZR2mixNmqnK3DKGAdu+cIXThG9VZiK0HQcXJ4DnBTepvk39LmG6bTzPh+cL7r1AJBB8oQnfb1plJoV+6GGhzeA6Llc8FAmiKEkRZlS42V6LEkewXZv76/qpqr5cZ1bIfUVECdQwuAfZ+H8cDvTv/q+t12s1wtQ8nEwm6PV6jE6nkxndbpdnqZqHssLtdhvNZhONRgP5fB7FYhGFQuEG9E6iVCohl8uhVqsxqVSpCFutFjtVq1VUKhWGXMsnnUuUy2UOXK/XOStJ+BvaXKJPOh/9GAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Order confirmation page in production",title:"Order confirmation page in production",src:"/static/37556f773547cd6087f0c1feae6cdd59/6e9cd/in-prod.png",srcSet:["/static/37556f773547cd6087f0c1feae6cdd59/7fc1e/in-prod.png 288w","/static/37556f773547cd6087f0c1feae6cdd59/a5df1/in-prod.png 576w","/static/37556f773547cd6087f0c1feae6cdd59/6e9cd/in-prod.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},(0,i.kt)("span",{className:"cds--type-semibold"},"After:")," The order confirmation screen in production at the end of the sprint."))),(0,i.kt)("h3",null,"Minimal quality assurance testing"),(0,i.kt)("p",null,"Once the team had been fully onboarded to Carbon, delivery required only minimal\nquality assurance testing because they were using components straight out of the\nbox."),(0,i.kt)("h3",null,"Continuity in user experience"),(0,i.kt)("p",null,"The project vastly improved the continuity in user experience with other IBM\ntouchpoints, including Support and My IBM. These experiences now feel continuous\nand intuitive for users."),(0,i.kt)("p",null,"Within the Commerce Platform flow, pages are also unified and organized in the\nsame way, providing familiarity and a feeling of dependability."),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABFElEQVQoz5VR0W6DMAzk/38vGX1YRwtpgAgaSgkUWsFN5xVaaS9bpJNtfL6cQxTHMbRS0FpDawWl9DP/O5RS2O12OB6PiPZfCczJoqrPqKoKdV1L/A84Y63F4XBA5JsWVdMLujCg7wNut5tgGFj3EsdxxDRNgvecPNaXywVJkiBK01RWjeMP7PefyLIMXdchhCCRRIryLMsiWPN5nqVHnvf+R7AoClDUGCNvQAGKkchVnHOyTtu2mxv27ve7iNI9+ZtgnueweSFvGEK/OeMQwZqgwOPxkMhVmYvgk7MJet/g7BswXq+vVXkzHcqFbw7XldfzyyHJHFoHX8hhzAmZMUizTHJ+L8oSpXMoSyfRPufY51/+BhMjWJil4hgPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Product configuration page",title:"Product configuration page",src:"/static/6c055bece0867d87f851e848cd295757/3cbba/continuity-1.png",srcSet:["/static/6c055bece0867d87f851e848cd295757/7fc1e/continuity-1.png 288w","/static/6c055bece0867d87f851e848cd295757/a5df1/continuity-1.png 576w","/static/6c055bece0867d87f851e848cd295757/3cbba/continuity-1.png 1152w","/static/6c055bece0867d87f851e848cd295757/92c65/continuity-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQoz51R2W6DMBDk/z+voEQ8hGCCr4DBCZhLSababUlD06daGvnY8ezObrTb7ZDEMZIk+TfiOMZ+v0ee54gOhwxFqVDVDlVVvaGua97P5/Of8ZUjpcTxeETkGg/rOjjfYxgGjOO4QQiB92VZMM/zGyg2TRO898iyDJExGuWpgBA5mqZhgev1ir7v0XUd2rbl8+12w/1+3+DxeDCfePSXBbUxyEWBUkoopThAAgQSXqsga1Tl70WuiPsUFKXFRyphbAXvW1wuF864ZiYr9OnV+ivofSOotIY2lq1RU+neh/C07px76+0wjpyM4iwYwo8gjVoIASEKpGnKj1IpnprWGtZaGGNArTHfoDMXojWk/OKeTiVP+RNpaFjuz0pVdwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkout page",title:"Checkout page",src:"/static/83943b12b8f35af12cdafbdef1762d9c/3cbba/continuity-2.png",srcSet:["/static/83943b12b8f35af12cdafbdef1762d9c/7fc1e/continuity-2.png 288w","/static/83943b12b8f35af12cdafbdef1762d9c/a5df1/continuity-2.png 576w","/static/83943b12b8f35af12cdafbdef1762d9c/3cbba/continuity-2.png 1152w","/static/83943b12b8f35af12cdafbdef1762d9c/92c65/continuity-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABRElEQVQoz51RXWuDMBT1//+nPexl7GEbK0q7YlutNVniR6omJrbWnnHjWhgMBrtwSEzu+bgxWC6XCMMQURT9G8RfrVZI0xTBdrsFYwxVVaEsyx8oiuJPUB9xSSNJEgRd18E5B2sdrHN+f8M4jrher7/icrl4DMPg0TQNdrsdgrZtobWBsx1s36HrNLSeMU0TrLXo+94b0BmR6YzEqOhOGw2l1CzYNC3OQ4+nqMLDy8GLkgGRKQk5r9drZFnmR6zrGkIInE4nL0ji1FvXah5ZNQbjecBi0+JxoTCdDYwx94SUgHPuVyoymWsenRKXRYm31xDpPkVQHw1EoVAWEoukx0d2xLHVXpQItNLDy+90ZHR791tC6pFSzgn32QFxvPEfYZzj+T1GnDBwxvxolO6Q58jzHJx/QkgJIaS/oz3jHIzx+1/+AhDHWITUs9r2AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Order confirmation page",title:"Order confirmation page",src:"/static/89bc76ce4596e2462a7eae7adacbf0bb/3cbba/continuity-3.png",srcSet:["/static/89bc76ce4596e2462a7eae7adacbf0bb/7fc1e/continuity-3.png 288w","/static/89bc76ce4596e2462a7eae7adacbf0bb/a5df1/continuity-3.png 576w","/static/89bc76ce4596e2462a7eae7adacbf0bb/3cbba/continuity-3.png 1152w","/static/89bc76ce4596e2462a7eae7adacbf0bb/92c65/continuity-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQoz32R2a6DMBBD+f/fA8RbgUJYyl4S9taVB2iv1Ks+WE4mmRMnsTzPg23bcBwHruse2sesOcfaL7GfnCAIYCmlcLlckCSJFOI4hh8qhGGEPM9RliWKovgp7iPH931Ybdui6zporUXGGPTaQGuDYRhkTp/n+V+N44hpmkAOg1lZlkuypml2WN+LjNFyEOt0Ni/LIr6uKx6Ph/gZpK7rHVhWDbIsQ1VVsvABGtzvd2kiiAk45xoTPZ9P8S8gQbw/35CbTyidV9227Q3kIUxGGJ3174RlKcBbUUjTDtTyhgS3XYe6bgS+HnCm3rXJIdqYDzCKIoTXqyRUlFJvsZYctTRNkec3+dG/OnuiKJZffgFfPln1iJRqiQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Profile page",title:"Profile page",src:"/static/7824f7019ba7528e7f2a5d01aeebb1b1/3cbba/continuity-4.png",srcSet:["/static/7824f7019ba7528e7f2a5d01aeebb1b1/7fc1e/continuity-4.png 288w","/static/7824f7019ba7528e7f2a5d01aeebb1b1/a5df1/continuity-4.png 576w","/static/7824f7019ba7528e7f2a5d01aeebb1b1/3cbba/continuity-4.png 1152w","/static/7824f7019ba7528e7f2a5d01aeebb1b1/92c65/continuity-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(h,{mdxType:"Caption"},"From top to bottom: Product configuration, Checkout, Confirmation, and Profile. These pages illustrate the continuity in experience gained by using Carbon for IBM.com."))),(0,i.kt)("h2",null,"Positive outcomes"),(0,i.kt)("p",null,"After the Carbon transition, more than 50% of customers are converting to\npurchase, which is on par with industry benchmarks. The conversion rate was\nraised by 5% which has led to a large increase in orders and revenue."),(0,i.kt)("h2",null,"Next steps"),(0,i.kt)("p",null,"The Commerce Team is currently working on improvements experience of their\nconfiguration page. The next round of visual design improvements will focus on\nbetter aligning their interface with the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/standards/web/carbon-for-ibm-dotcom//"},"Carbon for IBM.com"),"\nstyle models."),(0,i.kt)("h2",null,"Resources"),(0,i.kt)(g,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(A,{subTitle:"Carbon for IBM.com",href:"https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/",mdxType:"ResourceCard"},(0,i.kt)("img",{src:"/861b9a29a58f4581b945d88efdf050f6/bee.svg",alt:"Bee icon"})))))}y.isMDXComponent=!0}}]);