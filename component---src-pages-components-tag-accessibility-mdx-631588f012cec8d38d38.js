"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[21748],{28399:function(e,t,r){r.d(t,{Z:function(){return b}});var s=r(67294),i=r(88650),a=r.n(i),n=r(1597),l=r(64905),o=r(81151),u=r(75900),d=r.n(u);var c=e=>{let{title:t,theme:r,tabs:i=[]}=e;return s.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:i}}}=(0,n.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:l,branch:o}=r||i,u=`${a}/edit/${o}${l}/src/pages${t}`;return a?s.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=r(56328),k=r(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,i=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),l=t===i,o=new RegExp(`${i}/?(#.*)?$`),u=r.replace(o,t);return s.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},s.createElement(n.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":e},s.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(s.Component);var y=h,L=r(17680),S=r(75387),g=r(50041);var w=e=>{let{date:t}=e;const r=new Date(t);return t?s.createElement(g.X2,{className:"last-modified-date-module--row--XJoYQ"},s.createElement(g.sg,null,s.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var b=e=>{let{pageContext:t,children:r,location:i,Title:u}=e;const{frontmatter:d={},relativePagePath:k,titleType:h}=t,{tabs:g,title:b,theme:T,description:x,keywords:C,date:f}=d,{interiorTheme:v}=(0,S.Z)(),{site:{pathPrefix:A}}=(0,n.useStaticQuery)("2456312558"),N=A?i.pathname.replace(A,""):i.pathname,E=g?N.split("/").filter(Boolean).slice(-1)[0]||a()(g[0],{lower:!0}):"",R=T||v;return s.createElement(o.Z,{tabs:g,homepage:!1,theme:R,pageTitle:b,pageDescription:x,pageKeywords:C,titleType:h},s.createElement(c,{title:u?s.createElement(u,null):b,label:"label",tabs:g,theme:R}),g&&s.createElement(y,{title:b,slug:N,tabs:g,currentTab:E}),s.createElement(L.Z,{padded:!0},r,s.createElement(m,{relativePagePath:k}),s.createElement(w,{date:f})),s.createElement(p.Z,{pageContext:t,location:i,slug:N,tabs:g,currentTab:E}),s.createElement(l.Z,null))}},34184:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return o},default:function(){return y}});var s=r(45987),i=(r(67294),r(64983)),a=r(28399),n=r(9009);const l=["components"],o={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=u("AnchorLinks"),c=u("AnchorLink"),m=u("Row"),p=u("Column"),k={_frontmatter:o},h=a.Z;function y(e){let{components:t}=e,r=(0,s.Z)(e,l);return(0,i.kt)(h,Object.assign({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"How it works"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Resources"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Accessibility testing")),(0,i.kt)("h2",null,"How it works"),(0,i.kt)("p",null,"Tags are used for web content that needs to be labeled, categorized, or\norganized using keywords that describe them. Tags are often used as a filter\nwhere all tags are in the same color, or used when content is mapped to multiple\ncategories, where color is used to differentiate between categories."),(0,i.kt)("h2",null,"Accessibility considerations"),(0,i.kt)("p",null,"This component has been validated to meet the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,i.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Be sure the tag text is clear and concise."),(0,i.kt)("li",{parentName:"ol"},"Color should not be used as the only means to differentiate tag categories."),(0,i.kt)("li",{parentName:"ol"},"When using custom colors be sure the minimum contrast requirements are met."),(0,i.kt)("li",{parentName:"ol"},"Tags that are modified as a link to filter content should also follow the\nlink Carbon Component guidance.")),(0,i.kt)("h2",null,"Resources"),(0,i.kt)("h4",null,"Helpful resources for creating customized accessible implementations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_4_1"},"1.4.1 Use of Color"),"\n(WCAG Success Criteria\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"},"1.4.1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_4_3"},"1.4.3 Contrast (Minimum)"),"\n(WCAG Success Criteria\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum"},"1.4.3"),")")))),(0,i.kt)("h2",null,"Accessibility testing"),(0,i.kt)("p",null,"Accessibility issues are tracked in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+tag%22+"},"Carbon Component GitHub repository")),(0,i.kt)("h3",null,"Automated test"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(n.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(n.StructuredListHead,{mdxType:"StructuredListHead"},(0,i.kt)(n.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,i.kt)(n.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(n.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,i.kt)("br",null),"- Chrome version 77.0.3865.90",(0,i.kt)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"DAP test"),(0,i.kt)("br",null),"- Violations")))))),(0,i.kt)("h3",null,"macOS Screen reader tests"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(n.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(n.StructuredListHead,{mdxType:"StructuredListHead"},(0,i.kt)(n.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,i.kt)(n.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(n.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,i.kt)("br",null),"- Safari Version 13.0.2",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"VoiceOver(VO) test:"),(0,i.kt)(n.OrderedList,{mdxType:"OrderedList"},(0,i.kt)(n.ListItem,{mdxType:"ListItem"},"Control-Option-Shift-Down Arrow to enter the Web area."),(0,i.kt)(n.ListItem,{mdxType:"ListItem"},"Press Control-Option-Right Arrow key. VO announces the label and that it is a text element."),(0,i.kt)(n.ListItem,{mdxType:"ListItem"},'Navigate to the tag with filter. VO announces, "Clear Filter, you are currently on a group. To interact with items in this group press Control-Option-Shift-Down Arrow." (Note: There is an open issue. VO does not announce the "X" clear filter when Tab is pressed immediately after the Tag text is read.)')))))))),(0,i.kt)("h3",null,"Windows screen reader tests"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(n.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(n.StructuredListHead,{mdxType:"StructuredListHead"},(0,i.kt)(n.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,i.kt)(n.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(n.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,i.kt)("br",null),"- Firefox version 68",(0,i.kt)("br",null),"- JAWS 18",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"JAWS test:"),(0,i.kt)(n.OrderedList,{mdxType:"OrderedList"},(0,i.kt)(n.ListItem,{mdxType:"ListItem"},"Navigate to the Tag. JAWS announces the tag text."),(0,i.kt)(n.ListItem,{mdxType:"ListItem"},"Navigate to the Tag with Filter. JAWS announces the tag text and clear filter.")))))))),(0,i.kt)("h3",null,"iOS screen reader tests"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(n.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(n.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,i.kt)(n.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,i.kt)(n.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(n.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 12.2 with VoiceOver",(0,i.kt)("br",null),"- Safari version 12.2",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(n.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"VoiceOver test:"),(0,i.kt)(n.OrderedList,{mdxType:"OrderedList"},(0,i.kt)(n.ListItem,{mdxType:"ListItem"},"Swipe Right to the tag. VO announces the tag text and main landmark."),(0,i.kt)(n.ListItem,{mdxType:"ListItem"},'Navigate to the tag with filter. Swipe Right to the "X". VO announces "Clear Filter Image. Possibly very sharp close." (Note: There is an open issue. VO should announce this as a clear filter button.)')))))))))}y.isMDXComponent=!0}}]);