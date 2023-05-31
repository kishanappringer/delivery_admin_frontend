"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1508,9209,8376,5605,6750],{99587:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1413),r=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=n(17469),c=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="TableOutlined";var i=r.forwardRef(c)},83371:function(e,t,n){n.d(t,{K:function(){return C},Z:function(){return x}});var a=n(4942),r=n(29439),o=n(71002),l=n(47313),c=n(46123),i=n.n(c),s=n(14903),u=n(82324),d=n(91964),f=n(87462);function v(e){return void 0!==e&&null!==e}var p=function(e){var t,n=e.itemPrefixCls,r=e.component,o=e.span,c=e.className,s=e.style,u=e.labelStyle,d=e.contentStyle,f=e.bordered,p=e.label,m=e.content,h=e.colon,y=r;return f?l.createElement(y,{className:i()((t={},(0,a.Z)(t,"".concat(n,"-item-label"),v(p)),(0,a.Z)(t,"".concat(n,"-item-content"),v(m)),t),c),style:s,colSpan:o},v(p)&&l.createElement("span",{style:u},p),v(m)&&l.createElement("span",{style:d},m)):l.createElement(y,{className:i()("".concat(n,"-item"),c),style:s,colSpan:o},l.createElement("div",{className:"".concat(n,"-item-container")},(p||0===p)&&l.createElement("span",{className:i()("".concat(n,"-item-label"),(0,a.Z)({},"".concat(n,"-item-no-colon"),!h)),style:u},p),(m||0===m)&&l.createElement("span",{className:i()("".concat(n,"-item-content")),style:d},m)))};function m(e,t,n){var a=t.colon,r=t.prefixCls,o=t.bordered,c=n.component,i=n.type,s=n.showLabel,u=n.showContent,d=n.labelStyle,v=n.contentStyle;return e.map((function(e,t){var n=e.props,m=n.label,h=n.children,y=n.prefixCls,b=void 0===y?r:y,C=n.className,Z=n.style,g=n.labelStyle,w=n.contentStyle,x=n.span,E=void 0===x?1:x,k=e.key;return"string"===typeof c?l.createElement(p,{key:"".concat(i,"-").concat(k||t),className:C,style:Z,labelStyle:(0,f.Z)((0,f.Z)({},d),g),contentStyle:(0,f.Z)((0,f.Z)({},v),w),span:E,colon:a,component:c,itemPrefixCls:b,bordered:o,label:s?m:null,content:u?h:null}):[l.createElement(p,{key:"label-".concat(k||t),className:C,style:(0,f.Z)((0,f.Z)((0,f.Z)({},d),Z),g),span:1,colon:a,component:c[0],itemPrefixCls:b,bordered:o,label:m}),l.createElement(p,{key:"content-".concat(k||t),className:C,style:(0,f.Z)((0,f.Z)((0,f.Z)({},v),Z),w),span:2*E-1,component:c[1],itemPrefixCls:b,bordered:o,content:h})]}))}var h=function(e){var t=l.useContext(C),n=e.prefixCls,a=e.vertical,r=e.row,o=e.index,c=e.bordered;return a?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(o),className:"".concat(n,"-row")},m(r,e,(0,f.Z)({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:"content-".concat(o),className:"".concat(n,"-row")},m(r,e,(0,f.Z)({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:o,className:"".concat(n,"-row")},m(r,e,(0,f.Z)({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},y=function(e){return e.children},b=n(48138),C=l.createContext({}),Z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function g(e,t,n){var a=e;return(void 0===t||t>n)&&(a=(0,b.Tm)(e,{span:n})),a}function w(e){var t,n=e.prefixCls,c=e.title,f=e.extra,v=e.column,p=void 0===v?Z:v,m=e.colon,y=void 0===m||m,b=e.bordered,w=e.layout,x=e.children,E=e.className,k=e.style,N=e.size,S=e.labelStyle,V=e.contentStyle,H=l.useContext(d.E_),O=H.getPrefixCls,D=H.direction,P=O("descriptions",n),R=l.useState({}),z=(0,r.Z)(R,2),L=z[0],I=z[1],M=function(e,t){if("number"===typeof e)return e;if("object"===(0,o.Z)(e))for(var n=0;n<u.c4.length;n++){var a=u.c4[n];if(t[a]&&void 0!==e[a])return e[a]||Z[a]}return 3}(p,L);l.useEffect((function(){var e=u.ZP.subscribe((function(e){"object"===(0,o.Z)(p)&&I(e)}));return function(){u.ZP.unsubscribe(e)}}),[]);var T=function(e,t){var n=(0,s.Z)(e).filter((function(e){return e})),a=[],r=[],o=t;return n.forEach((function(e,l){var c,i=null===(c=e.props)||void 0===c?void 0:c.span,s=i||1;if(l===n.length-1)return r.push(g(e,i,o)),void a.push(r);s<o?(o-=s,r.push(e)):(r.push(g(e,s,o)),a.push(r),o=t,r=[])})),a}(x,M),j=l.useMemo((function(){return{labelStyle:S,contentStyle:V}}),[S,V]);return l.createElement(C.Provider,{value:j},l.createElement("div",{className:i()(P,(t={},(0,a.Z)(t,"".concat(P,"-").concat(N),N&&"default"!==N),(0,a.Z)(t,"".concat(P,"-bordered"),!!b),(0,a.Z)(t,"".concat(P,"-rtl"),"rtl"===D),t),E),style:k},(c||f)&&l.createElement("div",{className:"".concat(P,"-header")},c&&l.createElement("div",{className:"".concat(P,"-title")},c),f&&l.createElement("div",{className:"".concat(P,"-extra")},f)),l.createElement("div",{className:"".concat(P,"-view")},l.createElement("table",null,l.createElement("tbody",null,T.map((function(e,t){return l.createElement(h,{key:t,index:t,colon:y,prefixCls:P,vertical:"vertical"===w,bordered:b,row:e})})))))))}w.Item=y;var x=w},55613:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(87462),r=n(47313),o=n(1413),l=n(4942),c=n(15671),i=n(43144),s=n(60136),u=n(29388),d=n(53879),f=n(46123),v=n.n(f),p=n(49242);var m=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,a=n.onClick,r=n.index;13===t.keyCode&&a(t,r)},e}return(0,i.Z)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,a=e.value,r=e.allowHalf,o=e.focused,l=n+1,c=t;return 0===a&&0===n&&o?c+=" ".concat(t,"-focused"):r&&a+.5>=l&&a<l?(c+=" ".concat(t,"-half ").concat(t,"-active"),o&&(c+=" ".concat(t,"-focused"))):(c+=" ".concat(t,l<=a?"-full":"-zero"),l===a&&o&&(c+=" ".concat(t,"-focused"))),c}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,a=this.props,o=a.disabled,l=a.prefixCls,c=a.character,i=a.characterRender,s=a.index,u=a.count,d=a.value,f="function"===typeof c?c(this.props):c,v=r.createElement("li",{className:this.getClassName()},r.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":d>s?"true":"false","aria-posinset":s+1,"aria-setsize":u,tabIndex:o?-1:0},r.createElement("div",{className:"".concat(l,"-first")},f),r.createElement("div",{className:"".concat(l,"-second")},f)));return i&&(v=i(v,this.props)),v}}]),n}(r.Component);function h(){}var y=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,c.Z)(this,n),(a=t.call(this,e)).stars=void 0,a.rate=void 0,a.onHover=function(e,t){var n=a.props.onHoverChange,r=a.getStarValue(t,e.pageX);r!==a.state.cleanedValue&&a.setState({hoverValue:r,cleanedValue:null}),n(r)},a.onMouseLeave=function(){var e=a.props.onHoverChange;a.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},a.onClick=function(e,t){var n=a.props.allowClear,r=a.state.value,o=a.getStarValue(t,e.pageX),l=!1;n&&(l=o===r),a.onMouseLeave(),a.changeValue(l?0:o),a.setState({cleanedValue:l?o:null})},a.onFocus=function(){var e=a.props.onFocus;a.setState({focused:!0}),e&&e()},a.onBlur=function(){var e=a.props.onBlur;a.setState({focused:!1}),e&&e()},a.onKeyDown=function(e){var t=e.keyCode,n=a.props,r=n.count,o=n.allowHalf,l=n.onKeyDown,c="rtl"===n.direction,i=a.state.value;t===p.Z.RIGHT&&i<r&&!c?(i+=o?.5:1,a.changeValue(i),e.preventDefault()):t===p.Z.LEFT&&i>0&&!c||t===p.Z.RIGHT&&i>0&&c?(i-=o?.5:1,a.changeValue(i),e.preventDefault()):t===p.Z.LEFT&&i<r&&c&&(i+=o?.5:1,a.changeValue(i),e.preventDefault()),l&&l(e)},a.saveRef=function(e){return function(t){a.stars[e]=t}},a.saveRate=function(e){a.rate=e};var r=e.value;return void 0===r&&(r=e.defaultValue),a.stars={},a.state={value:r,focused:!1,cleanedValue:null},a}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,a=n.allowHalf,r="rtl"===n.direction,o=e+1;if(a){var l=this.getStarDOM(e),c=function(e){var t=function(e){var t,n,a=e.ownerDocument,r=a.body,o=a&&a.documentElement,l=e.getBoundingClientRect();return t=l.left,n=l.top,{left:t-=o.clientLeft||r.clientLeft||0,top:n-=o.clientTop||r.clientTop||0}}(e),n=e.ownerDocument,a=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var a=e.document;"number"!==typeof(t=a.documentElement[n])&&(t=a.body[n])}return t}(a),t.left}(l),i=l.clientWidth;(r&&t-c>i/2||!r&&t-c<i/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,a=e.style,o=e.prefixCls,c=e.disabled,i=e.className,s=e.character,u=e.characterRender,d=e.tabIndex,f=e.direction,p=this.state,h=p.value,y=p.hoverValue,b=p.focused,C=[],Z=c?"".concat(o,"-disabled"):"",g=0;g<t;g+=1)C.push(r.createElement(m,{ref:this.saveRef(g),index:g,count:t,disabled:c,prefixCls:"".concat(o,"-star"),allowHalf:n,value:void 0===y?h:y,onClick:this.onClick,onHover:this.onHover,key:g,character:s,characterRender:u,focused:b}));var w=v()(o,Z,i,(0,l.Z)({},"".concat(o,"-rtl"),"rtl"===f));return r.createElement("ul",{className:w,style:a,onMouseLeave:c?null:this.onMouseLeave,tabIndex:c?-1:d,onFocus:c?null:this.onFocus,onBlur:c?null:this.onBlur,onKeyDown:c?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},C)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,o.Z)((0,o.Z)({},t),{},{value:e.value}):t}}]),n}(r.Component);y.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:h,character:"\u2605",onHoverChange:h,tabIndex:0,direction:"ltr"};var b=y,C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},Z=n(17469),g=function(e,t){return r.createElement(Z.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:C}))};g.displayName="StarFilled";var w=r.forwardRef(g),x=n(37388),E=n(91964),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},N=r.forwardRef((function(e,t){var n=e.prefixCls,o=e.tooltips,l=k(e,["prefixCls","tooltips"]),c=r.useContext(E.E_),i=c.getPrefixCls,s=c.direction,u=i("rate",n);return r.createElement(b,(0,a.Z)({ref:t,characterRender:function(e,t){var n=t.index;return o?r.createElement(x.Z,{title:o[n]},e):e}},l,{prefixCls:u,direction:s}))}));N.displayName="Rate",N.defaultProps={character:r.createElement(w,null)};var S=N},86345:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(87462),r=n(4942),o=n(47313),l=n(29439),c=n(45987),i=n(46123),s=n.n(i),u=n(10288),d=n(49242),f=o.forwardRef((function(e,t){var n,a=e.prefixCls,i=void 0===a?"rc-switch":a,f=e.className,v=e.checked,p=e.defaultChecked,m=e.disabled,h=e.loadingIcon,y=e.checkedChildren,b=e.unCheckedChildren,C=e.onClick,Z=e.onChange,g=e.onKeyDown,w=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),x=(0,u.Z)(!1,{value:v,defaultValue:p}),E=(0,l.Z)(x,2),k=E[0],N=E[1];function S(e,t){var n=k;return m||(N(n=e),null===Z||void 0===Z||Z(n,t)),n}var V=s()(i,f,(n={},(0,r.Z)(n,"".concat(i,"-checked"),k),(0,r.Z)(n,"".concat(i,"-disabled"),m),n));return o.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":k,disabled:m,className:V,ref:t,onKeyDown:function(e){e.which===d.Z.LEFT?S(!1,e):e.which===d.Z.RIGHT&&S(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var t=S(!k,e);null===C||void 0===C||C(t,e)}}),h,o.createElement("span",{className:"".concat(i,"-inner")},k?y:b))}));f.displayName="Switch";var v=f,p=n(82508),m=n(46479),h=n(91964),y=n(21631),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=o.forwardRef((function(e,t){var n,l=e.prefixCls,c=e.size,i=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,C=b(e,["prefixCls","size","loading","className","disabled"]),Z=o.useContext(h.E_),g=Z.getPrefixCls,w=Z.direction,x=o.useContext(y.Z),E=g("switch",l),k=o.createElement("div",{className:"".concat(E,"-handle")},i&&o.createElement(p.Z,{className:"".concat(E,"-loading-icon")})),N=s()((n={},(0,r.Z)(n,"".concat(E,"-small"),"small"===(c||x)),(0,r.Z)(n,"".concat(E,"-loading"),i),(0,r.Z)(n,"".concat(E,"-rtl"),"rtl"===w),n),d);return o.createElement(m.Z,{insertExtraNode:!0},o.createElement(v,(0,a.Z)({},C,{prefixCls:E,className:N,disabled:f||i,ref:t,loadingIcon:k})))}));C.__ANT_SWITCH=!0,C.displayName="Switch";var Z=C}}]);