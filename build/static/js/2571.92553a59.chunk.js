"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2571],{13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},62571:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(1413),r=t(47313),o=t(55613),l=t(68197),i=t(59624),c=t(77181),u=t(78508),s=t(2717),d=t(90954),f=t(24511),v=t(13945),p=t(84017),h=t(21941),y=t(46417);function g(){var e=(0,s.I0)(),n=(0,f.$)().t,t=(0,s.v9)((function(e){return e.currency}),s.wU).defaultCurrency,g=[{title:n("id"),dataIndex:"id",key:"id"},{title:n("name"),dataIndex:"name",key:"name",render:function(e,n){return(null===n||void 0===n?void 0:n.firstname)+" "+(null===n||void 0===n?void 0:n.lastname)}},{title:n("rate"),dataIndex:"rating",key:"rating",render:function(e,n){return(0,y.jsx)(o.Z,{className:"mt-3 ml-3",disabled:!0,allowHalf:!0,value:void 0!==(null===n||void 0===n?void 0:n.assign_reviews_avg_rating)?null===n||void 0===n?void 0:n.assign_reviews_avg_rating:0})}}],m=[{title:n("id"),dataIndex:"id",key:"id"},{title:n("name"),dataIndex:"name",key:"name",render:function(e,n){return(null===n||void 0===n?void 0:n.firstname)+" "+(null===n||void 0===n?void 0:n.lastname)}},{title:n("orders"),dataIndex:"count",key:"count",render:function(e,n){return null===n||void 0===n?void 0:n.deliveryman_orders.length}}],x=[{title:n("id"),dataIndex:"id",key:"id"},{title:n("name"),dataIndex:"name",key:"name",render:function(e,n){return(null===n||void 0===n?void 0:n.firstname)+" "+(null===n||void 0===n?void 0:n.lastname)}},{title:n("wallet"),dataIndex:"wallet_sum",key:"wallet_sum",render:function(e,n){var a;return(0,p.Z)(null===n||void 0===n||null===(a=n.wallet)||void 0===a?void 0:a.price,t.symbol)}}],w=(0,s.v9)((function(e){return e.menu}),s.wU).activeMenu,Z=(0,s.v9)((function(e){return e.deliveryStatistics}),s.wU),C=Z.topRating,k=Z.lowRating,b=Z.topOrder,j=Z.lowOrder,S=Z.topMoney,V=Z.lowMoney,H=Z.loading;function E(n,t,r){var o=n.pageSize,l=n.current,i=r.field,c=r.order,u=(0,v.Z)(c);e((0,d.nc)({activeMenu:w,data:(0,a.Z)((0,a.Z)({},w.data),{},{perPage:o,page:l,column:i,sort:u})}))}return(0,r.useEffect)((function(){if(null!==w&&void 0!==w&&w.refetch){e((0,h.lv)({type:"delivery",sort:"desc",column:"rating",by_rating:"top"})),e((0,h.v4)({type:"delivery",sort:"asc",column:"rating",by_rating:"low"})),e((0,h.gP)({type:"delivery",sort:"desc",column:"count"})),e((0,h.NF)({type:"delivery",sort:"asc",column:"count"})),e((0,h.kQ)({type:"delivery",sort:"desc",column:"count"})),e((0,h.M3)({type:"delivery",sort:"asc",column:"count"})),e((0,d.A_)(w))}}),[null===w||void 0===w?void 0:w.refetch]),(0,y.jsxs)(l.Z,{gutter:12,children:[(0,y.jsx)(i.Z,{span:12,children:(0,y.jsx)(c.Z,{title:n("top.rating"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},columns:g,dataSource:C,loading:H,pagination:!1,rowKey:function(e){return e.id},onChange:E})})}),(0,y.jsx)(i.Z,{span:12,children:(0,y.jsx)(c.Z,{title:n("lowest.rating"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},columns:g,dataSource:k,loading:H,pagination:!1,rowKey:function(e){return e.id},onChange:E})})}),(0,y.jsx)(i.Z,{span:12,children:(0,y.jsx)(c.Z,{title:n("top.orders"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},columns:m,dataSource:b,loading:H,pagination:!1,rowKey:function(e){return e.id},onChange:E})})}),(0,y.jsx)(i.Z,{span:12,children:(0,y.jsx)(c.Z,{title:n("lowest.orders"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},columns:m,dataSource:j,loading:H,pagination:!1,rowKey:function(e){return e.id},onChange:E})})}),(0,y.jsx)(i.Z,{span:12,children:(0,y.jsx)(c.Z,{title:n("top.earner"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},columns:x,dataSource:S,loading:H,pagination:!1,rowKey:function(e){return e.id},onChange:E})})}),(0,y.jsx)(i.Z,{span:12,children:(0,y.jsx)(c.Z,{title:n("lowest.earner"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},columns:x,dataSource:V,loading:H,pagination:!1,rowKey:function(e){return e.id},onChange:E})})})]})}},55613:function(e,n,t){t.d(n,{Z:function(){return V}});var a=t(87462),r=t(47313),o=t(1413),l=t(4942),i=t(15671),c=t(43144),u=t(60136),s=t(29388),d=t(53879),f=t(46123),v=t.n(f),p=t(49242);var h=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).onHover=function(n){var t=e.props;(0,t.onHover)(n,t.index)},e.onClick=function(n){var t=e.props;(0,t.onClick)(n,t.index)},e.onKeyDown=function(n){var t=e.props,a=t.onClick,r=t.index;13===n.keyCode&&a(n,r)},e}return(0,c.Z)(t,[{key:"getClassName",value:function(){var e=this.props,n=e.prefixCls,t=e.index,a=e.value,r=e.allowHalf,o=e.focused,l=t+1,i=n;return 0===a&&0===t&&o?i+=" ".concat(n,"-focused"):r&&a+.5>=l&&a<l?(i+=" ".concat(n,"-half ").concat(n,"-active"),o&&(i+=" ".concat(n,"-focused"))):(i+=" ".concat(n,l<=a?"-full":"-zero"),l===a&&o&&(i+=" ".concat(n,"-focused"))),i}},{key:"render",value:function(){var e=this.onHover,n=this.onClick,t=this.onKeyDown,a=this.props,o=a.disabled,l=a.prefixCls,i=a.character,c=a.characterRender,u=a.index,s=a.count,d=a.value,f="function"===typeof i?i(this.props):i,v=r.createElement("li",{className:this.getClassName()},r.createElement("div",{onClick:o?null:n,onKeyDown:o?null:t,onMouseMove:o?null:e,role:"radio","aria-checked":d>u?"true":"false","aria-posinset":u+1,"aria-setsize":s,tabIndex:o?-1:0},r.createElement("div",{className:"".concat(l,"-first")},f),r.createElement("div",{className:"".concat(l,"-second")},f)));return c&&(v=c(v,this.props)),v}}]),t}(r.Component);function y(){}var g=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var a;(0,i.Z)(this,t),(a=n.call(this,e)).stars=void 0,a.rate=void 0,a.onHover=function(e,n){var t=a.props.onHoverChange,r=a.getStarValue(n,e.pageX);r!==a.state.cleanedValue&&a.setState({hoverValue:r,cleanedValue:null}),t(r)},a.onMouseLeave=function(){var e=a.props.onHoverChange;a.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},a.onClick=function(e,n){var t=a.props.allowClear,r=a.state.value,o=a.getStarValue(n,e.pageX),l=!1;t&&(l=o===r),a.onMouseLeave(),a.changeValue(l?0:o),a.setState({cleanedValue:l?o:null})},a.onFocus=function(){var e=a.props.onFocus;a.setState({focused:!0}),e&&e()},a.onBlur=function(){var e=a.props.onBlur;a.setState({focused:!1}),e&&e()},a.onKeyDown=function(e){var n=e.keyCode,t=a.props,r=t.count,o=t.allowHalf,l=t.onKeyDown,i="rtl"===t.direction,c=a.state.value;n===p.Z.RIGHT&&c<r&&!i?(c+=o?.5:1,a.changeValue(c),e.preventDefault()):n===p.Z.LEFT&&c>0&&!i||n===p.Z.RIGHT&&c>0&&i?(c-=o?.5:1,a.changeValue(c),e.preventDefault()):n===p.Z.LEFT&&c<r&&i&&(c+=o?.5:1,a.changeValue(c),e.preventDefault()),l&&l(e)},a.saveRef=function(e){return function(n){a.stars[e]=n}},a.saveRate=function(e){a.rate=e};var r=e.value;return void 0===r&&(r=e.defaultValue),a.stars={},a.state={value:r,focused:!1,cleanedValue:null},a}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.autoFocus,t=e.disabled;n&&!t&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,n){var t=this.props,a=t.allowHalf,r="rtl"===t.direction,o=e+1;if(a){var l=this.getStarDOM(e),i=function(e){var n=function(e){var n,t,a=e.ownerDocument,r=a.body,o=a&&a.documentElement,l=e.getBoundingClientRect();return n=l.left,t=l.top,{left:n-=o.clientLeft||r.clientLeft||0,top:t-=o.clientTop||r.clientTop||0}}(e),t=e.ownerDocument,a=t.defaultView||t.parentWindow;return n.left+=function(e){var n=e.pageXOffset,t="scrollLeft";if("number"!==typeof n){var a=e.document;"number"!==typeof(n=a.documentElement[t])&&(n=a.body[t])}return n}(a),n.left}(l),c=l.clientWidth;(r&&n-i>c/2||!r&&n-i<c/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var n=this.props.onChange;"value"in this.props||this.setState({value:e}),n(e)}},{key:"render",value:function(){for(var e=this.props,n=e.count,t=e.allowHalf,a=e.style,o=e.prefixCls,i=e.disabled,c=e.className,u=e.character,s=e.characterRender,d=e.tabIndex,f=e.direction,p=this.state,y=p.value,g=p.hoverValue,m=p.focused,x=[],w=i?"".concat(o,"-disabled"):"",Z=0;Z<n;Z+=1)x.push(r.createElement(h,{ref:this.saveRef(Z),index:Z,count:n,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:t,value:void 0===g?y:g,onClick:this.onClick,onHover:this.onHover,key:Z,character:u,characterRender:s,focused:m}));var C=v()(o,w,c,(0,l.Z)({},"".concat(o,"-rtl"),"rtl"===f));return r.createElement("ul",{className:C,style:a,onMouseLeave:i?null:this.onMouseLeave,tabIndex:i?-1:d,onFocus:i?null:this.onFocus,onBlur:i?null:this.onBlur,onKeyDown:i?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},x)}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"value"in e&&void 0!==e.value?(0,o.Z)((0,o.Z)({},n),{},{value:e.value}):n}}]),t}(r.Component);g.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:y,character:"\u2605",onHoverChange:y,tabIndex:0,direction:"ltr"};var m=g,x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},w=t(17469),Z=function(e,n){return r.createElement(w.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:x}))};Z.displayName="StarFilled";var C=r.forwardRef(Z),k=t(37388),b=t(91964),j=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},S=r.forwardRef((function(e,n){var t=e.prefixCls,o=e.tooltips,l=j(e,["prefixCls","tooltips"]),i=r.useContext(b.E_),c=i.getPrefixCls,u=i.direction,s=c("rate",t);return r.createElement(m,(0,a.Z)({ref:n,characterRender:function(e,n){var t=n.index;return o?r.createElement(k.Z,{title:o[t]},e):e}},l,{prefixCls:s,direction:u}))}));S.displayName="Rate",S.defaultProps={character:r.createElement(C,null)};var V=S}}]);