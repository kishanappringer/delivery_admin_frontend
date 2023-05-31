"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3341],{8846:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),o=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},a=n(17469),l=function(e,t){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};l.displayName="MinusOutlined";var u=o.forwardRef(l)},83371:function(e,t,n){n.d(t,{K:function(){return O},Z:function(){return h}});var r=n(4942),o=n(29439),c=n(71002),a=n(47313),l=n(46123),u=n.n(l),i=n(14903),s=n(82324),f=n(91964),p=n(87462);function d(e){return void 0!==e&&null!==e}var m=function(e){var t,n=e.itemPrefixCls,o=e.component,c=e.span,l=e.className,i=e.style,s=e.labelStyle,f=e.contentStyle,p=e.bordered,m=e.label,y=e.content,b=e.colon,v=o;return p?a.createElement(v,{className:u()((t={},(0,r.Z)(t,"".concat(n,"-item-label"),d(m)),(0,r.Z)(t,"".concat(n,"-item-content"),d(y)),t),l),style:i,colSpan:c},d(m)&&a.createElement("span",{style:s},m),d(y)&&a.createElement("span",{style:f},y)):a.createElement(v,{className:u()("".concat(n,"-item"),l),style:i,colSpan:c},a.createElement("div",{className:"".concat(n,"-item-container")},(m||0===m)&&a.createElement("span",{className:u()("".concat(n,"-item-label"),(0,r.Z)({},"".concat(n,"-item-no-colon"),!b)),style:s},m),(y||0===y)&&a.createElement("span",{className:u()("".concat(n,"-item-content")),style:f},y)))};function y(e,t,n){var r=t.colon,o=t.prefixCls,c=t.bordered,l=n.component,u=n.type,i=n.showLabel,s=n.showContent,f=n.labelStyle,d=n.contentStyle;return e.map((function(e,t){var n=e.props,y=n.label,b=n.children,v=n.prefixCls,g=void 0===v?o:v,O=n.className,P=n.style,w=n.labelStyle,E=n.contentStyle,h=n.span,S=void 0===h?1:h,_=e.key;return"string"===typeof l?a.createElement(m,{key:"".concat(u,"-").concat(_||t),className:O,style:P,labelStyle:(0,p.Z)((0,p.Z)({},f),w),contentStyle:(0,p.Z)((0,p.Z)({},d),E),span:S,colon:r,component:l,itemPrefixCls:g,bordered:c,label:i?y:null,content:s?b:null}):[a.createElement(m,{key:"label-".concat(_||t),className:O,style:(0,p.Z)((0,p.Z)((0,p.Z)({},f),P),w),span:1,colon:r,component:l[0],itemPrefixCls:g,bordered:c,label:y}),a.createElement(m,{key:"content-".concat(_||t),className:O,style:(0,p.Z)((0,p.Z)((0,p.Z)({},d),P),E),span:2*S-1,component:l[1],itemPrefixCls:g,bordered:c,content:b})]}))}var b=function(e){var t=a.useContext(O),n=e.prefixCls,r=e.vertical,o=e.row,c=e.index,l=e.bordered;return r?a.createElement(a.Fragment,null,a.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},y(o,e,(0,p.Z)({component:"th",type:"label",showLabel:!0},t))),a.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},y(o,e,(0,p.Z)({component:"td",type:"content",showContent:!0},t)))):a.createElement("tr",{key:c,className:"".concat(n,"-row")},y(o,e,(0,p.Z)({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},v=function(e){return e.children},g=n(48138),O=a.createContext({}),P={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function w(e,t,n){var r=e;return(void 0===t||t>n)&&(r=(0,g.Tm)(e,{span:n})),r}function E(e){var t,n=e.prefixCls,l=e.title,p=e.extra,d=e.column,m=void 0===d?P:d,y=e.colon,v=void 0===y||y,g=e.bordered,E=e.layout,h=e.children,S=e.className,_=e.style,j=e.size,M=e.labelStyle,C=e.contentStyle,Z=a.useContext(f.E_),x=Z.getPrefixCls,k=Z.direction,L=x("descriptions",n),A=a.useState({}),R=(0,o.Z)(A,2),N=R[0],B=R[1],T=function(e,t){if("number"===typeof e)return e;if("object"===(0,c.Z)(e))for(var n=0;n<s.c4.length;n++){var r=s.c4[n];if(t[r]&&void 0!==e[r])return e[r]||P[r]}return 3}(m,N);a.useEffect((function(){var e=s.ZP.subscribe((function(e){"object"===(0,c.Z)(m)&&B(e)}));return function(){s.ZP.unsubscribe(e)}}),[]);var G=function(e,t){var n=(0,i.Z)(e).filter((function(e){return e})),r=[],o=[],c=t;return n.forEach((function(e,a){var l,u=null===(l=e.props)||void 0===l?void 0:l.span,i=u||1;if(a===n.length-1)return o.push(w(e,u,c)),void r.push(o);i<c?(c-=i,o.push(e)):(o.push(w(e,i,c)),r.push(o),c=t,o=[])})),r}(h,T),I=a.useMemo((function(){return{labelStyle:M,contentStyle:C}}),[M,C]);return a.createElement(O.Provider,{value:I},a.createElement("div",{className:u()(L,(t={},(0,r.Z)(t,"".concat(L,"-").concat(j),j&&"default"!==j),(0,r.Z)(t,"".concat(L,"-bordered"),!!g),(0,r.Z)(t,"".concat(L,"-rtl"),"rtl"===k),t),S),style:_},(l||p)&&a.createElement("div",{className:"".concat(L,"-header")},l&&a.createElement("div",{className:"".concat(L,"-title")},l),p&&a.createElement("div",{className:"".concat(L,"-extra")},p)),a.createElement("div",{className:"".concat(L,"-view")},a.createElement("table",null,a.createElement("tbody",null,G.map((function(e,t){return a.createElement(b,{key:t,index:t,colon:v,prefixCls:L,vertical:"vertical"===E,bordered:g,row:e})})))))))}E.Item=v;var h=E},2337:function(e,t){t.Z=void 0;var n=function(e){return null};t.Z=n},47168:function(e,t,n){e.exports=n(34317)},91318:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=c?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(47313)),c=l(n(75192)),a=l(n(93754));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){var t=e.onPlaceSelected,n=e.apiKey,r=e.libraries,c=e.inputAutocompleteValue,l=e.options,u=e.googleMapsScriptBaseUrl,f=e.refProp,p=e.language,d=s(e,["onPlaceSelected","apiKey","libraries","inputAutocompleteValue","options","googleMapsScriptBaseUrl","refProp","language"]),m=(0,a.default)({ref:f,googleMapsScriptBaseUrl:u,onPlaceSelected:t,apiKey:n,libraries:r,inputAutocompleteValue:c,options:l,language:p}).ref;return o.default.createElement("input",i({ref:m},d))}f.propTypes={apiKey:c.default.string,libraries:c.default.arrayOf(c.default.string),ref:c.default.oneOfType([c.default.func,c.default.shape({current:c.default.any})]),googleMapsScriptBaseUrl:c.default.string,onPlaceSelected:c.default.func,inputAutocompleteValue:c.default.string,options:c.default.shape({componentRestrictions:c.default.object,bounds:c.default.object,location:c.default.object,offset:c.default.number,origin:c.default.object,radius:c.default.number,sessionToken:c.default.object,types:c.default.arrayOf(c.default.string)}),language:c.default.string};var p=(0,o.forwardRef)((function(e,t){return o.default.createElement(f,i({},e,{refProp:t}))}));t.default=p},56236:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.GOOGLE_MAP_SCRIPT_BASE_URL=void 0;t.GOOGLE_MAP_SCRIPT_BASE_URL="https://maps.googleapis.com/maps/api/js"},34317:function(e,t,n){Object.defineProperty(t,"usePlacesWidget",{enumerable:!0,get:function(){return o.default}});var r=c(n(91318)),o=c(n(93754));function c(e){return e&&e.__esModule?e:{default:e}}},93754:function(e,t,n){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.ref,n=e.onPlaceSelected,r=e.apiKey,l=e.libraries,u=void 0===l?"places":l,s=e.inputAutocompleteValue,f=void 0===s?"new-password":s,p=e.options,d=(p=void 0===p?{}:p).types,m=void 0===d?["(cities)"]:d,y=p.componentRestrictions,b=p.fields,v=void 0===b?["address_components","geometry.location","place_id","formatted_address"]:b,g=p.bounds,O=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(p,["types","componentRestrictions","fields","bounds"]),P=e.googleMapsScriptBaseUrl,w=void 0===P?a.GOOGLE_MAP_SCRIPT_BASE_URL:P,E=e.language,h=(0,o.useRef)(null),S=(0,o.useRef)(null),_=(0,o.useRef)(null),j=(0,o.useRef)(null),M=E?"&language=".concat(E):"",C="".concat(w,"?libraries=").concat(u,"&key=").concat(r).concat(M),Z=(0,o.useCallback)((function(){return(0,c.loadGoogleMapScript)(w,C)}),[w,C]);return(0,o.useEffect)((function(){var e=i(i({},O),{},{fields:v,types:m,bounds:g});if(y&&(e.componentRestrictions=y),!_.current&&h.current&&c.isBrowser){t&&!t.current&&(t.current=h.current);var o=function(){var t;return"undefined"===typeof google?console.error("Google has not been found. Make sure your provide apiKey prop."):null!==(t=google.maps)&&void 0!==t&&t.places?!h.current instanceof HTMLInputElement?console.error("Input ref must be HTMLInputElement."):(_.current=new google.maps.places.Autocomplete(h.current,e),void(_.current&&(S.current=_.current.addListener("place_changed",(function(){n&&_&&_.current&&n(_.current.getPlace(),h.current,_.current)}))))):console.error("Google maps places API must be loaded.")};return r?Z().then((function(){return o()})):o(),function(){return S.current?S.current.remove():void 0}}}),[]),(0,o.useEffect)((function(){var e;(null===o.default||void 0===o.default||null===(e=o.default.version)||void 0===e||!e.startsWith("18"))&&c.isBrowser&&window.MutationObserver&&h.current&&h.current instanceof HTMLInputElement&&(j.current=new MutationObserver((function(){j.current.disconnect(),h.current&&(h.current.autocomplete=f)})),j.current.observe(h.current,{attributes:!0,attributeFilter:["autocomplete"]}))}),[f]),(0,o.useEffect)((function(){_.current&&_.current.setFields(v)}),[v]),(0,o.useEffect)((function(){_.current&&_.current.setBounds(g)}),[g]),(0,o.useEffect)((function(){_.current&&_.current.setComponentRestrictions(y)}),[y]),(0,o.useEffect)((function(){_.current&&_.current.setOptions(O)}),[O]),{ref:h,autocompleteRef:_}};var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var o={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=c?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(47313)),c=n(39003),a=n(56236);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},39003:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.loadGoogleMapScript=t.isBrowser=void 0;var n="undefined"!==typeof window&&window.document;t.isBrowser=n;t.loadGoogleMapScript=function(e,t){if(!n)return Promise.resolve();if("undefined"!==typeof google&&google.maps&&google.maps.api)return Promise.resolve();var r=document.querySelectorAll('script[src*="'.concat(e,'"]'));if(r&&r.length)return new Promise((function(e){if("undefined"!==typeof google)return e();r[0].addEventListener("load",(function(){return e()}))}));var o=new URL(t);o.searchParams.set("callback","__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__");var c=document.createElement("script");return c.src=o.toString(),new Promise((function(e){window.__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__=e,document.body.appendChild(c)}))}}}]);