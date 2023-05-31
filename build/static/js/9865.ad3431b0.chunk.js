"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9865],{53233:function(e,n,t){var a=t(1413),r=t(29439),i=t(47313),o=t(56140),c=t(67251),l=t(45705),d=t(86345),s=t(78267),u=t(37388),v=t(59491),h=t(99587),f=t(24511),m=t(46417),p=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,Z=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,w=(0,f.$)().t,C=(0,i.useState)(!1),b=(0,r.Z)(C,2),k=b[0],j=b[1],_=(0,m.jsx)(c.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(c.Z.Item,{children:(0,m.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(p,{children:e.title}),(0,m.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)}})]})},e+n)}))});return(0,m.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){j(e)},visible:k,children:(0,m.jsx)(u.Z,{title:w("change.columns"),children:(0,m.jsx)(v.Z,{style:(0,a.Z)({},Z),size:g,icon:(0,m.jsx)(h.Z,{}),children:y?null:w("Columns")})})})}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},99865:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(1413),r=t(29439),i=t(47313),o=t(73591),c=t(45705),l=t(59491),d=t(77181),s=t(78508),u=t(58467),v=t(31741),h=t(2717),f=t(90954),m=t(24511),p=t(80314),Z=t(22054),x=t(13945),g=t(41481),y=t(84017),w=t(53233),C=t(46417),b=o.Z.TabPane,k=["accepted","ready","on_a_way","delivered","canceled"];function j(){var e,n,t,j=(0,h.I0)(),_=(0,u.s0)(),I=(0,m.$)().t,z=(0,h.v9)((function(e){return e.currency}),h.wU).defaultCurrency,N=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu,V=(0,i.useState)("accepted"),E=(0,r.Z)(V,2),H=E[0],O=E[1],S=(null===(e=N.data)||void 0===e?void 0:e.role)||H,P=null===N||void 0===N?void 0:N.data,T={search:null===P||void 0===P?void 0:P.search,sort:null===P||void 0===P?void 0:P.sort,column:null===P||void 0===P?void 0:P.column,perPage:null===P||void 0===P?void 0:P.perPage,page:null===P||void 0===P?void 0:P.page,user_id:null===P||void 0===P?void 0:P.userId,status:S},K=(0,i.useState)([{title:I("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:I("client"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,C.jsxs)("div",{children:[e.firstname," ",e.lastname]})}},{title:I("number.of.products"),dataIndex:"order_details_count",key:"rate",is_show:!0,render:function(e){return(0,C.jsxs)("div",{className:"text-lowercase",children:[e||0," ",I("products")]})}},{title:I("amount"),dataIndex:"details",key:"price",is_show:!0,render:function(e,n){return(0,y.Z)(null===n||void 0===n?void 0:n.total_price,z.symbol)}},{title:I("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:function(e){var n;return I(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:I("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:I("options"),key:"options",is_show:!0,render:function(e,n){return(0,C.jsx)(c.Z,{children:(0,C.jsx)(l.Z,{icon:(0,C.jsx)(v.Z,{}),onClick:function(){return function(e){j((0,f.bL)({url:"deliveryman/order/details/".concat(e.id),id:"order_details",name:I("order.details")})),_("/deliveryman/order/details/".concat(e.id))}(n)}})})}}]),M=(0,r.Z)(K,2),R=M[0],B=M[1],D=(0,h.v9)((function(e){return e.orders}),h.wU),U=D.orders,A=D.meta,L=D.loading,$=D.params;(0,p.Z)((function(){j((0,Z.Bu)(T))}),[null===N||void 0===N?void 0:N.data]),(0,i.useEffect)((function(){null!==N&&void 0!==N&&N.refetch&&(j((0,Z.Bu)(T)),j((0,f.A_)(N)))}),[null===N||void 0===N?void 0:N.refetch]);var F=function(e){var n=N.data;j((0,f.nc)({activeMenu:N,data:(0,a.Z)((0,a.Z)({},n),e)}))};return(0,C.jsxs)(d.Z,{title:I("orders"),extra:(0,C.jsxs)(c.Z,{wrap:!0,children:[(0,C.jsx)(g.Z,{placeholder:I("search"),handleChange:function(e){return F({search:e})},defaultValue:null===(n=N.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=N.data)&&void 0!==t&&t.search)}),(0,C.jsx)(w.Z,{columns:R,setColumns:B})]}),children:[(0,C.jsx)(o.Z,{onChange:function(e){F({role:e,page:1}),O(e)},type:"card",activeKey:S,children:k.map((function(e){return(0,C.jsx)(b,{tab:I(e)},e)}))}),(0,C.jsx)(s.Z,{scroll:{x:!0},columns:null===R||void 0===R?void 0:R.filter((function(e){return e.is_show})),dataSource:U,loading:L,pagination:{pageSize:$.perPage,page:$.page,total:A.total,defaultCurrent:$.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var r=e.pageSize,i=e.current,o=t.field,c=t.order,l=(0,x.Z)(c);j((0,f.nc)({activeMenu:N,data:(0,a.Z)((0,a.Z)({},N.data),{},{perPage:r,page:i,column:o,sort:l})}))}})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(1413),r=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),c=function(e,n){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};c.displayName="TableOutlined";var l=r.forwardRef(c)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(87462),r=t(4942),i=t(47313),o=t(29439),c=t(45987),l=t(46123),d=t.n(l),s=t(10288),u=t(49242),v=i.forwardRef((function(e,n){var t,a=e.prefixCls,l=void 0===a?"rc-switch":a,v=e.className,h=e.checked,f=e.defaultChecked,m=e.disabled,p=e.loadingIcon,Z=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,w=e.onKeyDown,C=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),b=(0,s.Z)(!1,{value:h,defaultValue:f}),k=(0,o.Z)(b,2),j=k[0],_=k[1];function I(e,n){var t=j;return m||(_(t=e),null===y||void 0===y||y(t,n)),t}var z=d()(l,v,(t={},(0,r.Z)(t,"".concat(l,"-checked"),j),(0,r.Z)(t,"".concat(l,"-disabled"),m),t));return i.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":j,disabled:m,className:z,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?I(!1,e):e.which===u.Z.RIGHT&&I(!0,e),null===w||void 0===w||w(e)},onClick:function(e){var n=I(!j,e);null===g||void 0===g||g(n,e)}}),p,i.createElement("span",{className:"".concat(l,"-inner")},j?Z:x))}));v.displayName="Switch";var h=v,f=t(82508),m=t(46479),p=t(91964),Z=t(21631),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},g=i.forwardRef((function(e,n){var t,o=e.prefixCls,c=e.size,l=e.loading,s=e.className,u=void 0===s?"":s,v=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=i.useContext(p.E_),w=y.getPrefixCls,C=y.direction,b=i.useContext(Z.Z),k=w("switch",o),j=i.createElement("div",{className:"".concat(k,"-handle")},l&&i.createElement(f.Z,{className:"".concat(k,"-loading-icon")})),_=d()((t={},(0,r.Z)(t,"".concat(k,"-small"),"small"===(c||b)),(0,r.Z)(t,"".concat(k,"-loading"),l),(0,r.Z)(t,"".concat(k,"-rtl"),"rtl"===C),t),u);return i.createElement(m.Z,{insertExtraNode:!0},i.createElement(h,(0,a.Z)({},g,{prefixCls:k,className:_,disabled:v||l,ref:n,loadingIcon:j})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);