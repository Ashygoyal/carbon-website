"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[90957,44171,66095,420,69602],{87022:function(e,t,r){var n=r(66604),c=r(45697),o=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(c),u=i(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],g=["tabindex"],O=u.default.forwardRef((function(e,t){var r=e.className,c=e.children,o=e.tabIndex,i=b(e,p),a=n.getAttributes(f(f({},i),{},{tabindex:o})),l=a.tabindex,s=b(a,g);return r&&(s.className=r),null!=l&&(s.tabIndex=l),t&&(s.ref=t),u.default.createElement("svg",s,c)}));O.displayName="Icon",O.propTypes={"aria-hidden":a.default.string,"aria-label":a.default.string,"aria-labelledby":a.default.string,children:a.default.node,className:a.default.string,height:a.default.oneOfType([a.default.number,a.default.string]),preserveAspectRatio:a.default.string,tabIndex:a.default.string,viewBox:a.default.string,width:a.default.oneOfType([a.default.number,a.default.string]),xmlns:a.default.string},O.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=O,t._extends=d,t._objectWithoutProperties=b},21692:function(e,t,r){var n=r(87022),c=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(66604),r(45697);var i,a=o(c),u=["children"],l=a.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,u);return a.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),i||(i=a.default.createElement("path",{d:"M19,30.36c-1.853,0-3.36-1.508-3.36-3.36c0-1.142,0.572-2.152,1.445-2.76l-2.801-5.135\tc-0.792,0.328-1.776,0.328-2.567,0L8.915,24.24c0.873,0.607,1.445,1.618,1.445,2.76c0,1.853-1.507,3.36-3.36,3.36\tS3.64,28.853,3.64,27S5.147,23.64,7,23.64c0.454,0,0.888,0.091,1.283,0.255l2.802-5.135C10.212,18.152,9.64,17.142,9.64,16\tc0-1.853,1.507-3.36,3.36-3.36c0.455,0,0.888,0.09,1.284,0.255l2.801-5.136C16.212,7.152,15.64,6.142,15.64,5\tc0-1.853,1.507-3.36,3.36-3.36S22.36,3.147,22.36,5c0,1.141-0.572,2.151-1.444,2.759l2.801,5.136\tC24.112,12.73,24.546,12.64,25,12.64c1.853,0,3.36,1.507,3.36,3.36s-1.508,3.36-3.36,3.36s-3.36-1.508-3.36-3.36\tc0-1.142,0.572-2.152,1.445-2.76l-2.801-5.135c-0.791,0.328-1.775,0.33-2.567,0l-2.801,5.136c0.872,0.607,1.444,1.618,1.444,2.759\ts-0.572,2.151-1.444,2.759l2.801,5.136C18.112,23.73,18.546,23.64,19,23.64c1.853,0,3.36,1.508,3.36,3.36S20.853,30.36,19,30.36z M19,24.36c-1.456,0-2.64,1.184-2.64,2.64s1.184,2.64,2.64,2.64s2.64-1.184,2.64-2.64S20.456,24.36,19,24.36z M7,24.36\tc-1.456,0-2.64,1.184-2.64,2.64S5.544,29.64,7,29.64S9.64,28.456,9.64,27S8.456,24.36,7,24.36z M25,13.36\tc-1.456,0-2.64,1.185-2.64,2.64c0,1.456,1.184,2.64,2.64,2.64s2.64-1.184,2.64-2.64S26.456,13.36,25,13.36z M13,13.36\tc-1.456,0-2.64,1.185-2.64,2.64c0,1.456,1.185,2.64,2.64,2.64s2.64-1.184,2.64-2.64S14.456,13.36,13,13.36z M19,2.36\tc-1.456,0-2.64,1.185-2.64,2.64S17.544,7.64,19,7.64S21.64,6.456,21.64,5S20.456,2.36,19,2.36z"})),r)}));e.exports=l},66604:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return d},getAttributes:function(){return f},toSVG:function(){return b},toString:function(){return s}});var a=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,o=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=i(e,a),s=f.tabindex,d=i(f,u),b=c(c(c({},l),d),{},{width:t,height:r,viewBox:o});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(d(c),">").concat(i,"</").concat(r,">"):"<".concat(r," ").concat(d(f(c)),">").concat(i,"</").concat(r,">")}function d(e){return Object.keys(e).reduce((function(t,r,n){var c="".concat(r,'="').concat(e[r],'"');return 0===n?c:t+" "+c}),"")}function b(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=void 0===o?[]:o,a=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?c:f(c);Object.keys(u).forEach((function(e){a.setAttribute(e,c[e])}));for(var l=0;l<i.length;l++)a.appendChild(b(i[l]));return a}}}]);