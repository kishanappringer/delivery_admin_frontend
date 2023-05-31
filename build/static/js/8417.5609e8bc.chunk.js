"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8417],{53233:function(e,n,t){var i=t(1413),a=t(29439),c=t(47313),l=t(56140),o=t(67251),r=t(45705),d=t(86345),s=t(78267),u=t(37388),h=t(59491),f=t(99587),v=t(24511),p=t(46417),m=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,Z=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,b=(0,v.$)().t,w=(0,c.useState)(!1),C=(0,a.Z)(w,2),j=C[0],k=C[1],_=(0,p.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(o.Z.Item,{children:(0,p.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)}})]})},e+n)}))});return(0,p.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,p.jsx)(u.Z,{title:b("change.columns"),children:(0,p.jsx)(h.Z,{style:(0,i.Z)({},Z),size:g,icon:(0,p.jsx)(f.Z,{}),children:y?null:b("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},28417:function(e,n,t){t.r(n);var i=t(4942),a=t(93433),c=t(1413),l=t(29439),o=t(47313),r=t(12019),d=t(47515),s=t(55768),u=t(73591),h=t(45705),f=t(78891),v=t(56140),p=t(59491),m=t(77181),Z=t(78508),x=t(34491),g=t(69658),y=t(74580),b=t(2717),w=t(58467),C=t(90954),j=t(24511),k=t(55940),_=t(53233),N=t(80314),I=t(13945),z=t(84017),S=t(64441),V=t(97421),O=t(12545),E=t(46417),H=["published","deleted_at"],T=u.Z.TabPane;n.default=function(){var e,n=(0,j.$)().t,t=(0,b.I0)(),P=(0,w.s0)(),K=(0,o.useContext)(y._).setIsModalVisible,M=(0,o.useState)(null),R=(0,l.Z)(M,2),A=R[0],L=R[1],D=(0,o.useState)(!1),U=(0,l.Z)(D,2),F=U[0],$=U[1],B=(0,o.useState)(null),G=(0,l.Z)(B,2),W=G[0],q=G[1],J=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,Q=(0,o.useState)("published"),X=(0,l.Z)(Q,2),Y=X[0],ee=X[1],ne=(null===(e=J.data)||void 0===e?void 0:e.role)||Y,te=null===J||void 0===J?void 0:J.data,ie=(0,b.v9)((function(e){return e.currency}),b.wU).defaultCurrency,ae={sort:null===te||void 0===te?void 0:te.sort,column:null===te||void 0===te?void 0:te.column,search:null!==te&&void 0!==te&&te.search?te.search:void 0,perPage:null===te||void 0===te?void 0:te.perPage,page:null===te||void 0===te?void 0:te.page,deleted_at:"deleted_at"===(null===te||void 0===te?void 0:te.role)?null===te||void 0===te?void 0:te.role:null},ce=(0,b.v9)((function(e){return e.reciept}),b.wU),le=ce.recepts,oe=ce.meta,re=ce.loading,de=(0,o.useState)([{title:n("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:n("title"),dataIndex:"title",key:"title",render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title},is_show:!0},{title:n("shop/restaurant"),dataIndex:"shop",key:"shop",is_show:!0,render:function(e,i){var a,c;return(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(f.Z,{width:100,src:i.deleted_at?"https://fakeimg.pl/640x360":V.bV+e.logo_img,alt:null===(a=e.translation)||void 0===a?void 0:a.title,preview:!0,placeholder:!0,className:"rounded"}),(0,E.jsx)(v.Z.Text,{className:"text-hover",onClick:function(){return function(e){t((0,C.bL)({id:"edit-shop",url:"shop/".concat(e.uuid),name:n("edit.shop")})),P("/shop/".concat(e.uuid))}(e)},children:null===(c=e.translation)||void 0===c?void 0:c.title})]})}},{title:n("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,n){return(0,E.jsx)(f.Z,{width:100,src:n.deleted_at?"https://fakeimg.pl/640x360":V.bV+e,preview:!0,placeholder:!0,className:"rounded"})}},{title:n("recipe.category"),dataIndex:"category",key:"category",is_show:!0,render:function(e){var n;return null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title}},{title:n("discount"),dataIndex:"discount",key:"discount",is_show:!0,render:function(e,n){return"fix"===n.discount_type?(0,z.Z)(n.discount_price,ie.symbol):"".concat(n.discount_price," %")}},{title:n("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,i){return(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(p.Z,{type:"primary",icon:(0,E.jsx)(r.Z,{}),onClick:function(){return function(e){t((0,C.bL)({url:"recept/edit/".concat(e.id),id:"recepe_edit",name:n("edit.recepe")})),P("/recept/edit/".concat(e.id),{state:"edit"})}(i)},disabled:i.deleted_at}),(0,E.jsx)(k.Z,{disabled:i.deleted_at,icon:(0,E.jsx)(d.Z,{}),onClick:function(){L([i.id]),K(!0),q(!0)}})]})}}]),se=(0,l.Z)(de,2),ue=se[0],he=se[1];(0,N.Z)((function(){t((0,S.Tc)(ae))}),[J.data]),(0,o.useEffect)((function(){J.refetch&&(t((0,S.Tc)(ae)),t((0,C.A_)(J)))}),[J.refetch]);var fe={selectedRowKeys:A,onChange:function(e){L(e)}};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(m.Z,{className:"p-0",children:(0,E.jsxs)(h.Z,{wrap:!0,className:"justify-content-end w-100",children:[(0,E.jsx)(k.Z,{size:"",onClick:function(){null===A||0===A.length?x.Am.warning(n("select.the.product")):(K(!0),q(!1))},children:n("delete.selected")}),(0,E.jsx)(p.Z,{type:"primary",icon:(0,E.jsx)(s.Z,{}),onClick:function(){t((0,C.bL)({id:"recepe_add",url:"recept/add",name:n("add.recepe")})),P("/recept/add")},children:n("add.recepe")}),(0,E.jsx)(_.Z,{columns:ue,setColumns:he})]})}),(0,E.jsxs)(m.Z,{title:n("recepes"),children:[(0,E.jsx)(u.Z,{className:"mt-3",activeKey:ne,onChange:function(e){!function(e){var n=J.data;t((0,C.nc)({activeMenu:J,data:(0,c.Z)((0,c.Z)({},n),e)}))}({role:e,page:1}),ee(e)},type:"card",children:H.map((function(e){return(0,E.jsx)(T,{tab:n(e)},e)}))}),(0,E.jsx)(Z.Z,{scroll:{x:!0},rowSelection:fe,columns:null===ue||void 0===ue?void 0:ue.filter((function(e){return e.is_show})),dataSource:le,pagination:{pageSize:oe.per_page,page:oe.current_page,total:oe.total},rowKey:function(e){return e.id},onChange:function(e,n,i){var a=e.pageSize,l=e.current,o=i.field,r=i.order,d=(0,I.Z)(r);t((0,C.nc)({activeMenu:J,data:(0,c.Z)((0,c.Z)({},te),{},{perPage:a,page:l,column:o,sort:d})}))},loading:re})]}),(0,E.jsx)(g.Z,{click:function(){$(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(A.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));O.Z.delete(e).then((function(){x.Am.success(n("successfully.deleted")),t((0,S.Tc)(ae)),K(!1),q(null)})).finally((function(){return $(!1)}))},text:n(W?"delete":"all.delete"),setText:L,loading:F})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),a=t(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),o=function(e,n){return a.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:c}))};o.displayName="TableOutlined";var r=a.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(87462),a=t(4942),c=t(47313),l=t(29439),o=t(45987),r=t(46123),d=t.n(r),s=t(10288),u=t(49242),h=c.forwardRef((function(e,n){var t,i=e.prefixCls,r=void 0===i?"rc-switch":i,h=e.className,f=e.checked,v=e.defaultChecked,p=e.disabled,m=e.loadingIcon,Z=e.checkedChildren,x=e.unCheckedChildren,g=e.onClick,y=e.onChange,b=e.onKeyDown,w=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,s.Z)(!1,{value:f,defaultValue:v}),j=(0,l.Z)(C,2),k=j[0],_=j[1];function N(e,n){var t=k;return p||(_(t=e),null===y||void 0===y||y(t,n)),t}var I=d()(r,h,(t={},(0,a.Z)(t,"".concat(r,"-checked"),k),(0,a.Z)(t,"".concat(r,"-disabled"),p),t));return c.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":k,disabled:p,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?N(!1,e):e.which===u.Z.RIGHT&&N(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var n=N(!k,e);null===g||void 0===g||g(n,e)}}),m,c.createElement("span",{className:"".concat(r,"-inner")},k?Z:x))}));h.displayName="Switch";var f=h,v=t(82508),p=t(46479),m=t(91964),Z=t(21631),x=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},g=c.forwardRef((function(e,n){var t,l=e.prefixCls,o=e.size,r=e.loading,s=e.className,u=void 0===s?"":s,h=e.disabled,g=x(e,["prefixCls","size","loading","className","disabled"]),y=c.useContext(m.E_),b=y.getPrefixCls,w=y.direction,C=c.useContext(Z.Z),j=b("switch",l),k=c.createElement("div",{className:"".concat(j,"-handle")},r&&c.createElement(v.Z,{className:"".concat(j,"-loading-icon")})),_=d()((t={},(0,a.Z)(t,"".concat(j,"-small"),"small"===(o||C)),(0,a.Z)(t,"".concat(j,"-loading"),r),(0,a.Z)(t,"".concat(j,"-rtl"),"rtl"===w),t),u);return c.createElement(p.Z,{insertExtraNode:!0},c.createElement(f,(0,i.Z)({},g,{prefixCls:j,className:_,disabled:h||r,ref:n,loadingIcon:k})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var y=g}}]);