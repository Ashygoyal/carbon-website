"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[54149,44171,66095,420,69602],{87022:function(e,t,r){var n=r(66604),c=r(45697),o=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(c),u=i(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],v=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,c=e.children,o=e.tabIndex,i=b(e,p),a=n.getAttributes(f(f({},i),{},{tabindex:o})),l=a.tabindex,s=b(a,v);return r&&(s.className=r),null!=l&&(s.tabIndex=l),t&&(s.ref=t),u.default.createElement("svg",s,c)}));g.displayName="Icon",g.propTypes={"aria-hidden":a.default.string,"aria-label":a.default.string,"aria-labelledby":a.default.string,children:a.default.node,className:a.default.string,height:a.default.oneOfType([a.default.number,a.default.string]),preserveAspectRatio:a.default.string,tabIndex:a.default.string,viewBox:a.default.string,width:a.default.oneOfType([a.default.number,a.default.string]),xmlns:a.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=g,t._extends=d,t._objectWithoutProperties=b},71030:function(e,t,r){var n=r(87022),c=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(66604),r(45697);var i,a=o(c),u=["children"],l=a.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,u);return a.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),i||(i=a.default.createElement("path",{d:"M31,16.64h-4.64V5c0-0.199-0.161-0.36-0.36-0.36H16c-0.163,0-0.306,0.109-0.348,0.267l-4,14.967\tl0.009,0.002C11.647,19.915,11.64,19.957,11.64,20v2.701c-0.772-0.148-1.617-0.006-2.28,0.367V8.36H12V7.64H9\tC8.801,7.64,8.64,7.801,8.64,8v15.61c-0.617,0.609-1,1.456-1,2.39c0,1.853,1.507,3.36,3.36,3.36c1.731,0,3.161-1.316,3.341-3h8.318\tc0.18,1.684,1.609,3,3.341,3s3.161-1.316,3.341-3H31c0.199,0,0.36-0.161,0.36-0.36v-9C31.36,16.801,31.199,16.64,31,16.64z M11,28.64c-1.456,0-2.64-1.184-2.64-2.64s1.185-2.64,2.64-2.64s2.64,1.184,2.64,2.64S12.456,28.64,11,28.64z M16.64,25.64h-2.299\tc-0.13-1.213-0.908-2.235-1.981-2.712V20.36h4.28V25.64z M12.46,19.64l1.176-4.4l3.894-2.248l0.57,0.988\tc0.066,0.115,0.188,0.18,0.312,0.18c0.062,0,0.123-0.015,0.18-0.048c0.173-0.1,0.231-0.32,0.132-0.492l-1.499-2.598\tc-0.1-0.172-0.319-0.231-0.492-0.132c-0.172,0.1-0.231,0.32-0.132,0.492l0.57,0.987L13.9,14.257l2.378-8.897h9.363v11.28H19\tc-0.12,0-0.232,0.06-0.3,0.16l-1.893,2.839L12.46,19.64L12.46,19.64z M26,28.64c-1.456,0-2.64-1.184-2.64-2.64s1.184-2.64,2.64-2.64\ts2.64,1.184,2.64,2.64S27.456,28.64,26,28.64z M30.64,25.64h-1.299c-0.18-1.684-1.609-3-3.341-3s-3.161,1.316-3.341,3H17.36v-5.53\tl1.832-2.749H30.64V25.64z M5.64,13h0.72v14c0,0.199-0.161,0.36-0.36,0.36H1v-0.72h4.64V13z"})),r)}));e.exports=l},66604:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return d},getAttributes:function(){return f},toSVG:function(){return b},toString:function(){return s}});var a=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,o=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=i(e,a),s=f.tabindex,d=i(f,u),b=c(c(c({},l),d),{},{width:t,height:r,viewBox:o});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(d(c),">").concat(i,"</").concat(r,">"):"<".concat(r," ").concat(d(f(c)),">").concat(i,"</").concat(r,">")}function d(e){return Object.keys(e).reduce((function(t,r,n){var c="".concat(r,'="').concat(e[r],'"');return 0===n?c:t+" "+c}),"")}function b(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=void 0===o?[]:o,a=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?c:f(c);Object.keys(u).forEach((function(e){a.setAttribute(e,c[e])}));for(var l=0;l<i.length;l++)a.appendChild(b(i[l]));return a}}}]);