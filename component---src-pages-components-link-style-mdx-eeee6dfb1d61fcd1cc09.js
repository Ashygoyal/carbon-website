"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[93823],{28399:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(67294),l=a(88650),i=a.n(l),r=a(1597),s=a(64905),m=a(81151),d=a(75900),o=a.n(d);var c=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var p=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:s,branch:m}=a||l,d=`${i}/edit/${m}${s}/src/pages${e}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},g=a(56328),k=a(51721);let u=function(t){function e(){return t.apply(this,arguments)||this}return(0,k.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],s=e.map((t=>{const e=i()(t,{lower:!0,strict:!0}),s=e===l,m=new RegExp(`${l}/?(#.*)?$`),d=a.replace(m,e);return n.createElement("li",{key:t,className:o()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},e}(n.Component);var b=u,A=a(17680),N=a(75387),y=a(50041);var f=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=t=>{let{pageContext:e,children:a,location:l,Title:d}=t;const{frontmatter:o={},relativePagePath:k,titleType:u}=e,{tabs:y,title:h,theme:w,description:x,keywords:v,date:E}=o,{interiorTheme:C}=(0,N.Z)(),{site:{pathPrefix:z}}=(0,r.useStaticQuery)("2456312558"),P=z?l.pathname.replace(z,""):l.pathname,D=y?P.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",B=w||C;return n.createElement(m.Z,{tabs:y,homepage:!1,theme:B,pageTitle:h,pageDescription:x,pageKeywords:v,titleType:u},n.createElement(c,{title:d?n.createElement(d,null):h,label:"label",tabs:y,theme:B}),y&&n.createElement(b,{title:h,slug:P,tabs:y,currentTab:D}),n.createElement(A.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(f,{date:E})),n.createElement(g.Z,{pageContext:e,location:l,slug:P,tabs:y,currentTab:D}),n.createElement(s.Z,null))}},7522:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return s},default:function(){return k}});var n=a(45987),l=(a(67294),a(64983)),i=a(28399);const r=["components"],s={},m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},d=m("Row"),o=m("Column"),c=m("Caption"),p={_frontmatter:s},g=i.Z;function k(t){let{components:e}=t,a=(0,n.Z)(t,r);return(0,l.kt)(g,Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Link"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$link-primary"))))),(0,l.kt)(d,{mdxType:"Row"},(0,l.kt)(o,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA10lEQVQoz82STQ4BQRBGP4KwoCRCnMQFXITiJk5g4wosJfbOgfnpthExYSERsdAtPWbGjImRWKnkpbo71S9V6QYyQkoZUgzw9z/HT0JiBRoEcBJv50JKASFCocDZc1J11H/ml9Ac9NLC6XIPxzVdCV9oORKTxSEt5DdhbXgPOywRq3KQC4DGce9GHV5PNtDSpi5PrCpBbVoYo0qsGsSqbi6go6Evm0io9Qro+sICsWoTqyaxymUJE4znHsyY4chrW2I0O34f+RP6bGEbexSz1rd1tvDv/+EDWvoHnMdnaPwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of link and inline link",title:"Examples of link and inline link",src:"/static/f6897c386b166bd2787b2c9a11c97772/3cbba/link-style-1.png",srcSet:["/static/f6897c386b166bd2787b2c9a11c97772/7fc1e/link-style-1.png 288w","/static/f6897c386b166bd2787b2c9a11c97772/a5df1/link-style-1.png 576w","/static/f6897c386b166bd2787b2c9a11c97772/3cbba/link-style-1.png 1152w","/static/f6897c386b166bd2787b2c9a11c97772/92c65/link-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$link-primary-hover"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Visited"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$link-visited"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)(d,{mdxType:"Row"},(0,l.kt)(o,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADkElEQVQ4y1WUXWgcVRTHz97Zmdk11WRZtxgraIsUHwQf+iCkPqpBsPiBIg1RiWikgkFjlyLSlnVNJFREKCI0WKEvxo8XoaFbjArJrJnWNibSjbs7cz9mv5Ld7EdW0jZN3D1yZzcbfDgDM+c/597fPf9zgXMOiBnoQoTY2X44/OoFCH/4Mbzx7hggIsg851wVQqg25fDtZQaBI38A9CK8NnoOwuEwRKNROPL8K64WhBCAmIfHP0IAQM+Bl37e/87xiQNHR84BdB9z85xzrwxsOnBwyALtmUQAniiHnnzrx0c+OB4OjX86AQCaq5UPT8ringK75mkgwosjUz2RT848BABw9doSYYxJjcY51+LXJY3jefbEkgb9qI5GvtkXiUT29vX1gRH/nchaUqzvhG3bPkT0IiJJpiyf4wifLCaE2NMKrlEmfJv/ZHXEZU3qpD6VSvkcx3FrtJGXYfT8OsBh9OqDzYfhhdv+N7+sAeKfbl4IoXAulDs1G97/ugbKAN6vDuJ+bbDxAHSXyeTFHOBNu4NMLCrIzQojU7/klKdPrfpPX8h4sck8SUu4GHJlzoW+nBKerTojA5+VtP6TOf9z0Zw+c0WQUoETylwt6SDblOmVUl5HRAWxobWQXYwOsuMIzbKoPBa1jauUigWdUtY5Nneb29vbMDk5KfvgCQZD9wGAOjY+7tpGCN5G5srGxgaMjY1D1557uoP37u0NBIIh+VMsFoN6fX0X2bZtUqvVyPT0tDJ4dMj/+Zmz7g7SqbQ8uzYy15N/Jz2bd26T0ZET+sDLQ3e9PvC2/7eZWaVUKhJK6f+RGWN6Pt9CbmBZs1JUF47M8d0uO0KzLabvOEFGsZLRqM13kaW7V6oUrsYK0tgQeawRfK8HtZnzJVhvWi6yxJVdXl2ncPmrMpx+tNETPfRvb/RQo/cpQDI7VYS1W3ZrUlwxE0omx5XkX47y00TFN/vdilqsU8KoaxeJ4uNc+KglyGqVKhe/KOvfn6z5fzhV9V//NestrLG2livQ7qKcBD2TdTTEVaW+ueJltIMh57irHar83sSCF7FCEG+RtWpBZYzvuKE1f7lcDhKJBFy6FCOGEQ8ZhtFz40YC8vn8ziy7q2ezWVhaXAJjzggYRnxf3Ig/ODdn3L24uAjVarXTZaCUuhZZWFgA0zS9pmkq8r09xzJUeeM4jgNbW1tSo8zPz6syTNMkw8PDkE6n3YL/AV1luaKV5FC1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of link and inline link states",title:"Examples of link and inline link states",src:"/static/2429919858fb04e404eb28457a3d2c0f/3cbba/link-style-2.png",srcSet:["/static/2429919858fb04e404eb28457a3d2c0f/7fc1e/link-style-2.png 288w","/static/2429919858fb04e404eb28457a3d2c0f/a5df1/link-style-2.png 576w","/static/2429919858fb04e404eb28457a3d2c0f/3cbba/link-style-2.png 1152w","/static/2429919858fb04e404eb28457a3d2c0f/92c65/link-style-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"There are three size variants for the link component: small, medium, and large."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$helper-text-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-02"))))),(0,l.kt)(d,{mdxType:"Row"},(0,l.kt)(o,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABRElEQVQoz2NgQAP3799nePDgAYjmgNJgPjIbWY4goNhA/qR/KHjl/hcMd+6CFD/gePH0HgMDw38GweR/YPz//zGGZ4/vg+Vu3nnAEN77GUM/poD8f4b/X28xPHhwn2P9oecMqvm/4XL2dd8Zdp18Cpb7//8yA0Pkf7wGsvAn/WOVz/nD0L/+NciVHCDXccX/Z+ZP+sfOn/SPjTHyP+P//wwMd+494Cia+4FBKOUvSA8XSA6bgdz8Sf/4RNP+MUX1f2a4fushB4P2fwbeRLBhIvxJ/wQ44/4zM3D/Z7h26yGHZfUPBoFksB5J/qR/PHw4vez2n+H//ysMDx/c55i59RWDXPYfuJxeyS+GZXtfgOX+/9/IwBaL8DJOA/PnfGC4cuMhOOB/vr8DDlOBpH9gDAqCT6/vguWOXXjMoF/6E9PAQZ8OAdlUT0TJPzOZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of link sizes",title:"Examples of link sizes",src:"/static/51cebcec446cda09c600c408ed420a24/3cbba/link-style-3.png",srcSet:["/static/51cebcec446cda09c600c408ed420a24/7fc1e/link-style-3.png 288w","/static/51cebcec446cda09c600c408ed420a24/a5df1/link-style-3.png 576w","/static/51cebcec446cda09c600c408ed420a24/3cbba/link-style-3.png 1152w","/static/51cebcec446cda09c600c408ed420a24/92c65/link-style-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("h3",null,"Recommended"),(0,l.kt)("p",null,"Links can be grouped horizontally or vertically. The following specs are not\nbuilt into the link component but are recommended by design as the proper\ndistance between grouped links."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Link"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABm0lEQVQoz2NgoCW4oJ7KwPD/PwPD0f8MVfZLGKrtVzD8l8hm+CxTxfBMwYvhl4QDQ5HTaoYmt00M5a6bGGpcNxAyMAVi4LL/DN1W0xm6rOYyvJRrYLir1MPwScaK4b+gAUOh8zqGdt+DDNVeuxkavHYTMFANauCm/wzt1rO4OqzncX+XLmB4K1cLduFvcTuGMseV3B0e27hq3DYzNLptwm/gRZiXr/9nSHPdqJHmutf0qsoS1iOaWxj+CzAx/OeUZkpy36Ff6XfEIM/7IEOR934iDXz0nyHKY5dmlMdhk6/STSz3FKcz/BeVY/jPLspU4Lxer93/qHmd9z6GRu99jIQjZe5/BobkDwwbDapYVxt2su/Q3cyw3PA/ww9pJ4b/vEqMwV4HxZK9DwhH+hxmiPM6QIQLH/5nYJj1n2GqeR/DRMv5DHt0djCsNvjG8EfKhuE/jyJDlOdehiyvfQwJXvsZUj33EmHgrf8MDJ3/GWaY9zJMNZ/GcE1lEsNtpaMMX2VcGf7zqTIEex9iSPE+yBDhc4QhzvsgA80BADy6m0hMPMwnAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Link structure and spacing measurements",title:"Link structure and spacing measurements",src:"/static/a3a55def7648c73b635332e84bdcf56a/3cbba/link-style-4.png",srcSet:["/static/a3a55def7648c73b635332e84bdcf56a/7fc1e/link-style-4.png 288w","/static/a3a55def7648c73b635332e84bdcf56a/a5df1/link-style-4.png 576w","/static/a3a55def7648c73b635332e84bdcf56a/3cbba/link-style-4.png 1152w","/static/a3a55def7648c73b635332e84bdcf56a/392b1/link-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(c,{mdxType:"Caption"},"Structure and spacing measurements for Link | px / rem"),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAr0lEQVQoz2NgoDe4qJ6KFZMM+JP+gTF73n8GDYcXDAz//zP8Z2CAY7IN5Mv8zyDs85WB4QTEQIZj2xkYXtxnYKitJM9A+dQvzAxh/5krCnfy7HRrF80s7mWozZ1IvoHCad85GIL+cxs1nZRyqJirwJAfxcrgzUC+gaIp/xkYYr4wVHT/Z2CYycAg0NTMJNvSS6GBsZ8Z2lr/MzDMYmDgb2xikG7qIt1AOABpxIXpAQCRKlTEIaKRSQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Link with icon structure and spacing measurements",title:"Link with icon structure and spacing measurements",src:"/static/4748ea6f2c3d7a3a87553f6326050892/3cbba/link-style-5.png",srcSet:["/static/4748ea6f2c3d7a3a87553f6326050892/7fc1e/link-style-5.png 288w","/static/4748ea6f2c3d7a3a87553f6326050892/a5df1/link-style-5.png 576w","/static/4748ea6f2c3d7a3a87553f6326050892/3cbba/link-style-5.png 1152w","/static/4748ea6f2c3d7a3a87553f6326050892/392b1/link-style-5.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(c,{mdxType:"Caption"},"Structure and spacing measurements for Link with icon | px / rem"))}k.isMDXComponent=!0}}]);