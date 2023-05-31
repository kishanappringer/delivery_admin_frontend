"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2099],{53233:function(e,t,n){var a=n(1413),r=n(29439),l=n(47313),c=n(56140),o=n(67251),i=n(45705),s=n(86345),d=n(78267),u=n(37388),m=n(59491),f=n(99587),v=n(24511),p=n(46417),h=c.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,c=e.setColumns,Z=e.style,y=e.size,x=void 0===y?"":y,b=e.iconOnly,g=(0,v.$)().t,C=(0,l.useState)(!1),j=(0,r.Z)(C,2),w=j[0],k=j[1],E=(0,p.jsx)(o.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(o.Z.Item,{children:(0,p.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(h,{children:e.title}),(0,p.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));c(t)}(e)}})]})},e+t)}))});return(0,p.jsx)(d.Z,{overlay:E,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,p.jsx)(u.Z,{title:g("change.columns"),children:(0,p.jsx)(m.Z,{style:(0,a.Z)({},Z),size:x,icon:(0,p.jsx)(f.Z,{}),children:b?null:g("Columns")})})})}},13945:function(e,t,n){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return a}})},72099:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(74165),r=n(15861),l=n(1413),c=n(29439),o=n(47313),i=n(73591),s=n(66204),d=n(59491),u=n(77181),m=n(45705),f=n(78508),v=n(31741),p=n(2717),h=n(90954),Z=n(24511),y=n(80314),x=n(13945),b=n(89281),g=n(58328),C=n(93655),j=n(84695),w=n(83371),k=n(51282),E=n(93161),N=n(84017),I=n(46417);function S(e){var t,n,a,r,l,i,u=e.id,m=e.handleCancel,f=(0,o.useState)({}),v=(0,c.Z)(f,2),p=v[0],h=v[1],y=(0,o.useState)(!1),x=(0,c.Z)(y,2),b=x[0],g=x[1],C=(0,Z.$)().t;return(0,o.useEffect)((function(){!function(e){g(!0),E.Z.getById(e).then((function(e){return h(e.data)})).finally((function(){return g(!1)}))}(u)}),[u]),(0,I.jsx)(j.Z,{visible:!!u,title:C("transaction"),onCancel:m,footer:(0,I.jsx)(d.Z,{type:"default",onClick:m,children:C("cancel")}),children:b?(0,I.jsx)(k.Z,{}):(0,I.jsxs)(w.Z,{bordered:!0,children:[(0,I.jsx)(w.Z.Item,{span:3,label:C("transaction.id"),children:p.id}),(0,I.jsxs)(w.Z.Item,{span:3,label:C("client"),children:[null===(t=p.user)||void 0===t?void 0:t.firstname," ",null===(n=p.user)||void 0===n?void 0:n.lastname]}),(0,I.jsx)(w.Z.Item,{span:3,label:C("price"),children:(0,N.Z)(p.price,null===(a=p.payable)||void 0===a||null===(r=a.order)||void 0===r||null===(l=r.currency)||void 0===l?void 0:l.symbol)}),(0,I.jsx)(w.Z.Item,{span:3,label:C("payment.type"),children:C(null===(i=p.payment_system)||void 0===i?void 0:i.tag)}),(0,I.jsx)(w.Z.Item,{span:3,label:C("created.at"),children:p.created_at}),(0,I.jsx)(w.Z.Item,{span:3,label:C("status"),children:"progress"===p.status?(0,I.jsx)(s.Z,{color:"gold",children:C(p.status)}):"rejected"===p.status?(0,I.jsx)(s.Z,{color:"error",children:C(p.status)}):(0,I.jsx)(s.Z,{color:"cyan",children:C(p.status)})}),(0,I.jsx)(w.Z.Item,{span:3,label:C("status.description"),children:p.status_description}),(0,I.jsx)(w.Z.Item,{span:3,label:C("note"),children:p.note})]})})}var _=n(53233),P=i.Z.TabPane,z=["all","progress","paid","rejected"];function O(){var e,t,n,j,w=(0,p.I0)(),k=(0,Z.$)().t,E=(0,o.useState)(null),O=(0,c.Z)(E,2),H=O[0],V=O[1],T=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,K=(0,o.useState)("all"),M=(0,c.Z)(K,2),D=M[0],L=M[1],R=(null===(e=T.data)||void 0===e?void 0:e.role)||D,A=(0,o.useState)([{title:k("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:k("client"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,I.jsxs)("div",{children:[e.firstname," ",e.lastname||""]})}},{title:k("amount"),dataIndex:"price",key:"price",is_show:!0,render:function(e,t){var n,a,r;return(0,N.Z)(e,null===(n=t.payable)||void 0===n||null===(a=n.order)||void 0===a||null===(r=a.currency)||void 0===r?void 0:r.symbol)}},{title:k("payment.type"),dataIndex:"payment_system",key:"payment_system",is_show:!0,render:function(e){return null===e||void 0===e?void 0:e.tag}},{title:k("status"),dataIndex:"status",key:"status",is_show:!0,render:function(e){return(0,I.jsx)("div",{children:"progress"===e?(0,I.jsx)(s.Z,{color:"gold",children:k(e)}):"rejected"===e?(0,I.jsx)(s.Z,{color:"error",children:k(e)}):(0,I.jsx)(s.Z,{color:"cyan",children:k(e)})})}},{title:k("status.note"),dataIndex:"status_description",key:"status_description",is_show:!0},{title:k("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:k("options"),key:"options",is_show:!0,render:function(e,t){return(0,I.jsx)(d.Z,{icon:(0,I.jsx)(v.Z,{}),onClick:function(){return function(e){V(e.id)}(t)}})}}]),$=(0,c.Z)(A,2),B=$[0],F=$[1],J=(0,p.v9)((function(e){return e.transaction}),p.wU),U=J.transactions,W=J.meta,G=J.loading,q=J.params,Q=T.data,X={sort:null===Q||void 0===Q?void 0:Q.sort,column:null===Q||void 0===Q?void 0:Q.column,perPage:null===Q||void 0===Q?void 0:Q.perPage,page:null===Q||void 0===Q?void 0:Q.page,user_id:null===Q||void 0===Q?void 0:Q.userId,status:"all"===R?void 0:R,model:"orders"};(0,y.Z)((function(){w((0,C.J1)(X))}),[T.data]),(0,o.useEffect)((function(){T.refetch&&(w((0,C.J1)(X)),w((0,h.A_)(T)))}),[T.refetch]);var Y=function(e){var t=T.data;w((0,h.nc)({activeMenu:T,data:(0,l.Z)((0,l.Z)({},t),e)}))};function ee(){return ee=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:t,perPage:10},e.abrupt("return",g.Z.getAll(n).then((function(e){return e.data.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}return(0,I.jsxs)(u.Z,{title:k("transactions"),extra:(0,I.jsxs)(m.Z,{children:[(0,I.jsx)(b.h,{placeholder:k("select.client"),fetchOptions:function(e){return ee.apply(this,arguments)},onSelect:function(e){return Y({userId:e.value})},onDeselect:function(){return Y({userId:null})},style:{minWidth:200}}),(0,I.jsx)(_.Z,{columns:B,setColumns:F})]}),children:[(0,I.jsx)(i.Z,{onChange:function(e){Y({role:e,page:1}),L(e)},type:"card",activeKey:R,children:z.map((function(e){return(0,I.jsx)(P,{tab:k(e)},e)}))}),(0,I.jsx)(f.Z,{scroll:{x:!0},columns:null===B||void 0===B?void 0:B.filter((function(e){return e.is_show})),dataSource:U,loading:G,pagination:{pageSize:q.perPage,page:(null===(t=T.data)||void 0===t?void 0:t.page)||1,total:W.total,defaultCurrent:null===(n=T.data)||void 0===n?void 0:n.page,current:null===(j=T.data)||void 0===j?void 0:j.page},rowKey:function(e){return e.id},onChange:function(e,t,n){var a=e.pageSize,r=e.current,c=n.field,o=n.order,i=(0,x.Z)(o);w((0,h.nc)({activeMenu:T,data:(0,l.Z)((0,l.Z)({},Q),{},{perPage:a,page:r,column:c,sort:i})}))}}),H&&(0,I.jsx)(S,{id:H,handleCancel:function(){return V(null)}})]})}},99587:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1413),r=n(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=n(17469),o=function(e,t){return r.createElement(c.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};o.displayName="TableOutlined";var i=r.forwardRef(o)},83371:function(e,t,n){n.d(t,{K:function(){return x},Z:function(){return j}});var a=n(4942),r=n(29439),l=n(71002),c=n(47313),o=n(46123),i=n.n(o),s=n(14903),d=n(82324),u=n(91964),m=n(87462);function f(e){return void 0!==e&&null!==e}var v=function(e){var t,n=e.itemPrefixCls,r=e.component,l=e.span,o=e.className,s=e.style,d=e.labelStyle,u=e.contentStyle,m=e.bordered,v=e.label,p=e.content,h=e.colon,Z=r;return m?c.createElement(Z,{className:i()((t={},(0,a.Z)(t,"".concat(n,"-item-label"),f(v)),(0,a.Z)(t,"".concat(n,"-item-content"),f(p)),t),o),style:s,colSpan:l},f(v)&&c.createElement("span",{style:d},v),f(p)&&c.createElement("span",{style:u},p)):c.createElement(Z,{className:i()("".concat(n,"-item"),o),style:s,colSpan:l},c.createElement("div",{className:"".concat(n,"-item-container")},(v||0===v)&&c.createElement("span",{className:i()("".concat(n,"-item-label"),(0,a.Z)({},"".concat(n,"-item-no-colon"),!h)),style:d},v),(p||0===p)&&c.createElement("span",{className:i()("".concat(n,"-item-content")),style:u},p)))};function p(e,t,n){var a=t.colon,r=t.prefixCls,l=t.bordered,o=n.component,i=n.type,s=n.showLabel,d=n.showContent,u=n.labelStyle,f=n.contentStyle;return e.map((function(e,t){var n=e.props,p=n.label,h=n.children,Z=n.prefixCls,y=void 0===Z?r:Z,x=n.className,b=n.style,g=n.labelStyle,C=n.contentStyle,j=n.span,w=void 0===j?1:j,k=e.key;return"string"===typeof o?c.createElement(v,{key:"".concat(i,"-").concat(k||t),className:x,style:b,labelStyle:(0,m.Z)((0,m.Z)({},u),g),contentStyle:(0,m.Z)((0,m.Z)({},f),C),span:w,colon:a,component:o,itemPrefixCls:y,bordered:l,label:s?p:null,content:d?h:null}):[c.createElement(v,{key:"label-".concat(k||t),className:x,style:(0,m.Z)((0,m.Z)((0,m.Z)({},u),b),g),span:1,colon:a,component:o[0],itemPrefixCls:y,bordered:l,label:p}),c.createElement(v,{key:"content-".concat(k||t),className:x,style:(0,m.Z)((0,m.Z)((0,m.Z)({},f),b),C),span:2*w-1,component:o[1],itemPrefixCls:y,bordered:l,content:h})]}))}var h=function(e){var t=c.useContext(x),n=e.prefixCls,a=e.vertical,r=e.row,l=e.index,o=e.bordered;return a?c.createElement(c.Fragment,null,c.createElement("tr",{key:"label-".concat(l),className:"".concat(n,"-row")},p(r,e,(0,m.Z)({component:"th",type:"label",showLabel:!0},t))),c.createElement("tr",{key:"content-".concat(l),className:"".concat(n,"-row")},p(r,e,(0,m.Z)({component:"td",type:"content",showContent:!0},t)))):c.createElement("tr",{key:l,className:"".concat(n,"-row")},p(r,e,(0,m.Z)({component:o?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},Z=function(e){return e.children},y=n(48138),x=c.createContext({}),b={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function g(e,t,n){var a=e;return(void 0===t||t>n)&&(a=(0,y.Tm)(e,{span:n})),a}function C(e){var t,n=e.prefixCls,o=e.title,m=e.extra,f=e.column,v=void 0===f?b:f,p=e.colon,Z=void 0===p||p,y=e.bordered,C=e.layout,j=e.children,w=e.className,k=e.style,E=e.size,N=e.labelStyle,I=e.contentStyle,S=c.useContext(u.E_),_=S.getPrefixCls,P=S.direction,z=_("descriptions",n),O=c.useState({}),H=(0,r.Z)(O,2),V=H[0],T=H[1],K=function(e,t){if("number"===typeof e)return e;if("object"===(0,l.Z)(e))for(var n=0;n<d.c4.length;n++){var a=d.c4[n];if(t[a]&&void 0!==e[a])return e[a]||b[a]}return 3}(v,V);c.useEffect((function(){var e=d.ZP.subscribe((function(e){"object"===(0,l.Z)(v)&&T(e)}));return function(){d.ZP.unsubscribe(e)}}),[]);var M=function(e,t){var n=(0,s.Z)(e).filter((function(e){return e})),a=[],r=[],l=t;return n.forEach((function(e,c){var o,i=null===(o=e.props)||void 0===o?void 0:o.span,s=i||1;if(c===n.length-1)return r.push(g(e,i,l)),void a.push(r);s<l?(l-=s,r.push(e)):(r.push(g(e,s,l)),a.push(r),l=t,r=[])})),a}(j,K),D=c.useMemo((function(){return{labelStyle:N,contentStyle:I}}),[N,I]);return c.createElement(x.Provider,{value:D},c.createElement("div",{className:i()(z,(t={},(0,a.Z)(t,"".concat(z,"-").concat(E),E&&"default"!==E),(0,a.Z)(t,"".concat(z,"-bordered"),!!y),(0,a.Z)(t,"".concat(z,"-rtl"),"rtl"===P),t),w),style:k},(o||m)&&c.createElement("div",{className:"".concat(z,"-header")},o&&c.createElement("div",{className:"".concat(z,"-title")},o),m&&c.createElement("div",{className:"".concat(z,"-extra")},m)),c.createElement("div",{className:"".concat(z,"-view")},c.createElement("table",null,c.createElement("tbody",null,M.map((function(e,t){return c.createElement(h,{key:t,index:t,colon:Z,prefixCls:z,vertical:"vertical"===C,bordered:y,row:e})})))))))}C.Item=Z;var j=C},86345:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(87462),r=n(4942),l=n(47313),c=n(29439),o=n(45987),i=n(46123),s=n.n(i),d=n(10288),u=n(49242),m=l.forwardRef((function(e,t){var n,a=e.prefixCls,i=void 0===a?"rc-switch":a,m=e.className,f=e.checked,v=e.defaultChecked,p=e.disabled,h=e.loadingIcon,Z=e.checkedChildren,y=e.unCheckedChildren,x=e.onClick,b=e.onChange,g=e.onKeyDown,C=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,d.Z)(!1,{value:f,defaultValue:v}),w=(0,c.Z)(j,2),k=w[0],E=w[1];function N(e,t){var n=k;return p||(E(n=e),null===b||void 0===b||b(n,t)),n}var I=s()(i,m,(n={},(0,r.Z)(n,"".concat(i,"-checked"),k),(0,r.Z)(n,"".concat(i,"-disabled"),p),n));return l.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":k,disabled:p,className:I,ref:t,onKeyDown:function(e){e.which===u.Z.LEFT?N(!1,e):e.which===u.Z.RIGHT&&N(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var t=N(!k,e);null===x||void 0===x||x(t,e)}}),h,l.createElement("span",{className:"".concat(i,"-inner")},k?Z:y))}));m.displayName="Switch";var f=m,v=n(82508),p=n(46479),h=n(91964),Z=n(21631),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=l.forwardRef((function(e,t){var n,c=e.prefixCls,o=e.size,i=e.loading,d=e.className,u=void 0===d?"":d,m=e.disabled,x=y(e,["prefixCls","size","loading","className","disabled"]),b=l.useContext(h.E_),g=b.getPrefixCls,C=b.direction,j=l.useContext(Z.Z),w=g("switch",c),k=l.createElement("div",{className:"".concat(w,"-handle")},i&&l.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),E=s()((n={},(0,r.Z)(n,"".concat(w,"-small"),"small"===(o||j)),(0,r.Z)(n,"".concat(w,"-loading"),i),(0,r.Z)(n,"".concat(w,"-rtl"),"rtl"===C),n),u);return l.createElement(p.Z,{insertExtraNode:!0},l.createElement(f,(0,a.Z)({},x,{prefixCls:w,className:E,disabled:m||i,ref:t,loadingIcon:k})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var b=x}}]);