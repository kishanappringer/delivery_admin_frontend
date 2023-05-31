"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9732],{52917:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),a=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},l=n(17469),o=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};o.displayName="ArrowLeftOutlined";var s=a.forwardRef(o)},83371:function(e,t,n){n.d(t,{K:function(){return E},Z:function(){return x}});var r=n(4942),a=n(29439),c=n(71002),l=n(47313),o=n(46123),s=n.n(o),i=n(14903),u=n(82324),m=n(91964),d=n(87462);function f(e){return void 0!==e&&null!==e}var p=function(e){var t,n=e.itemPrefixCls,a=e.component,c=e.span,o=e.className,i=e.style,u=e.labelStyle,m=e.contentStyle,d=e.bordered,p=e.label,v=e.content,b=e.colon,y=a;return d?l.createElement(y,{className:s()((t={},(0,r.Z)(t,"".concat(n,"-item-label"),f(p)),(0,r.Z)(t,"".concat(n,"-item-content"),f(v)),t),o),style:i,colSpan:c},f(p)&&l.createElement("span",{style:u},p),f(v)&&l.createElement("span",{style:m},v)):l.createElement(y,{className:s()("".concat(n,"-item"),o),style:i,colSpan:c},l.createElement("div",{className:"".concat(n,"-item-container")},(p||0===p)&&l.createElement("span",{className:s()("".concat(n,"-item-label"),(0,r.Z)({},"".concat(n,"-item-no-colon"),!b)),style:u},p),(v||0===v)&&l.createElement("span",{className:s()("".concat(n,"-item-content")),style:m},v)))};function v(e,t,n){var r=t.colon,a=t.prefixCls,c=t.bordered,o=n.component,s=n.type,i=n.showLabel,u=n.showContent,m=n.labelStyle,f=n.contentStyle;return e.map((function(e,t){var n=e.props,v=n.label,b=n.children,y=n.prefixCls,h=void 0===y?a:y,E=n.className,Z=n.style,N=n.labelStyle,g=n.contentStyle,x=n.span,C=void 0===x?1:x,w=e.key;return"string"===typeof o?l.createElement(p,{key:"".concat(s,"-").concat(w||t),className:E,style:Z,labelStyle:(0,d.Z)((0,d.Z)({},m),N),contentStyle:(0,d.Z)((0,d.Z)({},f),g),span:C,colon:r,component:o,itemPrefixCls:h,bordered:c,label:i?v:null,content:u?b:null}):[l.createElement(p,{key:"label-".concat(w||t),className:E,style:(0,d.Z)((0,d.Z)((0,d.Z)({},m),Z),N),span:1,colon:r,component:o[0],itemPrefixCls:h,bordered:c,label:v}),l.createElement(p,{key:"content-".concat(w||t),className:E,style:(0,d.Z)((0,d.Z)((0,d.Z)({},f),Z),g),span:2*C-1,component:o[1],itemPrefixCls:h,bordered:c,content:b})]}))}var b=function(e){var t=l.useContext(E),n=e.prefixCls,r=e.vertical,a=e.row,c=e.index,o=e.bordered;return r?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},v(a,e,(0,d.Z)({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},v(a,e,(0,d.Z)({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:c,className:"".concat(n,"-row")},v(a,e,(0,d.Z)({component:o?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},y=function(e){return e.children},h=n(48138),E=l.createContext({}),Z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function N(e,t,n){var r=e;return(void 0===t||t>n)&&(r=(0,h.Tm)(e,{span:n})),r}function g(e){var t,n=e.prefixCls,o=e.title,d=e.extra,f=e.column,p=void 0===f?Z:f,v=e.colon,y=void 0===v||v,h=e.bordered,g=e.layout,x=e.children,C=e.className,w=e.style,k=e.size,O=e.labelStyle,P=e.contentStyle,S=l.useContext(m.E_),j=S.getPrefixCls,R=S.direction,_=j("descriptions",n),L=l.useState({}),A=(0,a.Z)(L,2),B=A[0],I=A[1],T=function(e,t){if("number"===typeof e)return e;if("object"===(0,c.Z)(e))for(var n=0;n<u.c4.length;n++){var r=u.c4[n];if(t[r]&&void 0!==e[r])return e[r]||Z[r]}return 3}(p,B);l.useEffect((function(){var e=u.ZP.subscribe((function(e){"object"===(0,c.Z)(p)&&I(e)}));return function(){u.ZP.unsubscribe(e)}}),[]);var M=function(e,t){var n=(0,i.Z)(e).filter((function(e){return e})),r=[],a=[],c=t;return n.forEach((function(e,l){var o,s=null===(o=e.props)||void 0===o?void 0:o.span,i=s||1;if(l===n.length-1)return a.push(N(e,s,c)),void r.push(a);i<c?(c-=i,a.push(e)):(a.push(N(e,i,c)),r.push(a),c=t,a=[])})),r}(x,T),H=l.useMemo((function(){return{labelStyle:O,contentStyle:P}}),[O,P]);return l.createElement(E.Provider,{value:H},l.createElement("div",{className:s()(_,(t={},(0,r.Z)(t,"".concat(_,"-").concat(k),k&&"default"!==k),(0,r.Z)(t,"".concat(_,"-bordered"),!!h),(0,r.Z)(t,"".concat(_,"-rtl"),"rtl"===R),t),C),style:w},(o||d)&&l.createElement("div",{className:"".concat(_,"-header")},o&&l.createElement("div",{className:"".concat(_,"-title")},o),d&&l.createElement("div",{className:"".concat(_,"-extra")},d)),l.createElement("div",{className:"".concat(_,"-view")},l.createElement("table",null,l.createElement("tbody",null,M.map((function(e,t){return l.createElement(b,{key:t,index:t,colon:y,prefixCls:_,vertical:"vertical"===g,bordered:h,row:e})})))))))}g.Item=y;var x=g},256:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4942),a=n(29439),c=n(47313),l=n(46123),o=n.n(l),s=n(51114),i=n(52917),u=n(1413),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},d=n(17469),f=function(e,t){return c.createElement(d.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:m}))};f.displayName="ArrowRightOutlined";var p=c.forwardRef(f),v=n(25172),b=n(91964),y=n(87462),h=n(93433),E=n(14903),Z=n(67440),N=n(37142),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=function(e){var t,n,r=e.prefixCls,a=e.separator,l=void 0===a?"/":a,o=e.children,s=e.overlay,i=e.dropdownProps,u=g(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,c.useContext(b.E_).getPrefixCls)("breadcrumb",r);return t="href"in u?c.createElement("a",(0,y.Z)({className:"".concat(m,"-link")},u),o):c.createElement("span",(0,y.Z)({className:"".concat(m,"-link")},u),o),n=t,t=s?c.createElement(N.Z,(0,y.Z)({overlay:s,placement:"bottom"},i),c.createElement("span",{className:"".concat(m,"-overlay-link")},n,c.createElement(Z.Z,null))):n,o?c.createElement("li",null,t,l&&c.createElement("span",{className:"".concat(m,"-separator")},l)):null};x.__ANT_BREADCRUMB_ITEM=!0;var C=x,w=function(e){var t=e.children,n=(0,c.useContext(b.E_).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(n,"-separator")},t||"/")};w.__ANT_BREADCRUMB_SEPARATOR=!0;var k=w,O=n(67251),P=n(48138),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function j(e,t,n,r){var a=n.indexOf(e)===n.length-1,l=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?c.createElement("span",null,l):c.createElement("a",{href:"#/".concat(r.join("/"))},l)}var R=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},_=function(e,t,n){var r=(0,h.Z)(e),a=R(t||"",n);return a&&r.push(a),r},L=function(e){var t,n=e.prefixCls,a=e.separator,l=void 0===a?"/":a,s=e.style,i=e.className,u=e.routes,m=e.children,d=e.itemRender,f=void 0===d?j:d,p=e.params,v=void 0===p?{}:p,h=S(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),Z=c.useContext(b.E_),N=Z.getPrefixCls,g=Z.direction,x=N("breadcrumb",n);if(u&&u.length>0){var w=[];t=u.map((function(e){var t,n=R(e.path,v);return n&&w.push(n),e.children&&e.children.length&&(t=c.createElement(O.Z,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:f(e,v,u,_(w,e.path,v))}}))})),c.createElement(C,{overlay:t,separator:l,key:n||e.breadcrumbName},f(e,v,u,w))}))}else m&&(t=(0,E.Z)(m).map((function(e,t){return e?(0,P.Tm)(e,{separator:l,key:t}):e})));var k=o()(x,(0,r.Z)({},"".concat(x,"-rtl"),"rtl"===g),i);return c.createElement("nav",(0,y.Z)({className:k,style:s},h),c.createElement("ol",null,t))};L.Item=C,L.Separator=k;var A=L,B=n(45334),I=n(45705),T=n(97484),M=n(3267),H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=t.title,a=t.avatar,l=t.subTitle,o=t.tags,s=t.extra,u=t.onBack,m="".concat(e,"-heading"),d=r||l||o||s;if(!d)return null;var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?c.createElement(p,null):c.createElement(i.Z,null)}(t,n),v=function(e,t,n){return t&&n?c.createElement(M.Z,{componentName:"PageHeader"},(function(r){var a=r.back;return c.createElement("div",{className:"".concat(e,"-back")},c.createElement(T.Z,{onClick:function(e){null===n||void 0===n||n(e)},className:"".concat(e,"-back-button"),"aria-label":a},t))})):null}(e,f,u),b=v||a||d;return c.createElement("div",{className:m},b&&c.createElement("div",{className:"".concat(m,"-left")},v,a&&c.createElement(B.C,a),r&&c.createElement("span",{className:"".concat(m,"-title"),title:"string"===typeof r?r:void 0},r),l&&c.createElement("span",{className:"".concat(m,"-sub-title"),title:"string"===typeof l?l:void 0},l),o&&c.createElement("span",{className:"".concat(m,"-tags")},o)),s&&c.createElement("span",{className:"".concat(m,"-extra")},c.createElement(I.Z,null,s)))},z=function(e){var t=(0,s.Z)(!1),n=(0,a.Z)(t,2),l=n[0],i=n[1],u=function(e){var t=e.width;i(t<768,!0)};return c.createElement(b.C,null,(function(t){var n,a,s=t.getPrefixCls,i=t.pageHeader,m=t.direction,d=e.prefixCls,f=e.style,p=e.footer,b=e.children,y=e.breadcrumb,h=e.breadcrumbRender,E=e.className,Z=!0;"ghost"in e?Z=e.ghost:i&&"ghost"in i&&(Z=i.ghost);var N=s("page-header",d),g=(null===y||void 0===y?void 0:y.routes)?function(e){return c.createElement(A,e)}(y):null,x=y&&"props"in y,C=null!==(a=null===h||void 0===h?void 0:h(e,g))&&void 0!==a?a:g,w=x?y:C,k=o()(N,E,(n={"has-breadcrumb":!!w,"has-footer":!!p},(0,r.Z)(n,"".concat(N,"-ghost"),Z),(0,r.Z)(n,"".concat(N,"-rtl"),"rtl"===m),(0,r.Z)(n,"".concat(N,"-compact"),l),n));return c.createElement(v.Z,{onResize:u},c.createElement("div",{className:k,style:f},w,H(N,e,m),b&&function(e,t){return c.createElement("div",{className:"".concat(e,"-content")},t)}(N,b),function(e,t){return t?c.createElement("div",{className:"".concat(e,"-footer")},t):null}(N,p)))}))}}}]);