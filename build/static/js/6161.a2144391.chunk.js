"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6161],{48567:function(e,n,t){var l=t(1413),a=t(29439),i=t(18197),r=t(75649),o=t(68197),c=t(59624),s=t(59491),d=t(74294),u=(t(47313),t(24511)),h=t(2717),f=t(46417);n.Z=function(e){var n,t=e.handleClose,v=e.openDrower,Z=e.setMenuData,m=(0,u.$)().t,p=(0,h.v9)((function(e){return e.theme.theme}),h.wU).direction,x=(0,h.v9)((function(e){return e.formLang}),h.wU).languages,j=i.Z.useForm(),g=(0,a.Z)(j,1)[0],b=(0,h.I0)(),w=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu;return(0,f.jsx)(r.Z,{title:m("filter"),placement:"rtl"===p?"left":"right",closable:!0,onClose:t,visible:v,footer:(0,f.jsxs)(o.Z,{gutter:12,children:[(0,f.jsx)(c.Z,{span:12,children:(0,f.jsx)(s.Z,{className:"w-100",type:"primary",onClick:function(){return g.submit()},children:m("result")})}),(0,f.jsx)(c.Z,{span:12,children:(0,f.jsx)(s.Z,{className:"w-100",onClick:function(){return function(){var e=w.data;b(Z({activeMenu:w,data:(0,l.Z)((0,l.Z)({},e),{},{filter:void 0})})),t()}()},children:m("clear")})})]}),children:(0,f.jsxs)(i.Z,{form:g,name:"basic",layout:"vertical",onFinish:function(e){var n=w.data;b(Z({activeMenu:w,data:(0,l.Z)((0,l.Z)({},n),{},{filter:e})})),t()},initialValues:(0,l.Z)({},null===(n=w.data)||void 0===n?void 0:n.filter),children:[(0,f.jsx)(i.Z.Item,{label:m("language"),rules:[{required:!0,message:m("requared")}],name:"equal",children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(d.Z.Option,{value:"equal",children:m("equal")}),(0,f.jsx)(d.Z.Option,{value:"not_equal",children:m("not.equal")})]})}),(0,f.jsx)(i.Z.Item,{label:m("locale"),rules:[{required:!0,message:m("requared")}],name:"lang",children:(0,f.jsx)(d.Z,{children:x.map((function(e,n){return(0,f.jsx)(d.Z.Option,{value:e.locale,children:e.title},e.locale+n)}))})})]})},"left")}},53233:function(e,n,t){var l=t(1413),a=t(29439),i=t(47313),r=t(56140),o=t(67251),c=t(45705),s=t(86345),d=t(78267),u=t(37388),h=t(59491),f=t(99587),v=t(24511),Z=t(46417),m=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,p=e.style,x=e.size,j=void 0===x?"":x,g=e.iconOnly,b=(0,v.$)().t,w=(0,i.useState)(!1),y=(0,a.Z)(w,2),C=y[0],k=y[1],_=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:C,children:(0,Z.jsx)(u.Z,{title:b("change.columns"),children:(0,Z.jsx)(h.Z,{style:(0,l.Z)({},p),size:j,icon:(0,Z.jsx)(f.Z,{}),children:g?null:b("Columns")})})})}},48008:function(e,n,t){t(47313);var l=t(84695),a=t(87569),i=t(59491),r=t(24511),o=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,c=e.text,s=e.click,d=e.loading,u=e.subTitle,h=(0,r.$)().t;return(0,o.jsxs)(l.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,o.jsx)(a.ZP,{status:"warning",title:c,subTitle:u}),(0,o.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,o.jsx)(i.Z,{type:"primary",className:"mr-2",onClick:s,loading:d,children:h("yes")}),(0,o.jsx)(i.Z,{onClick:function(){return t()},children:h("no")})]})]})}},13945:function(e,n,t){function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return l}})},56161:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var l=t(4942),a=t(93433),i=t(1413),r=t(29439),o=t(47313),c=t(12019),s=t(66407),d=t(47515),u=t(55768),h=t(73591),f=t(45705),v=t(66204),Z=t(78891),m=t(59491),p=t(77181),x=t(78508),j=t(58467),g=t(34491),b=t(74580),w=t(69658),y=t(2717),C=t(90954),k=t(49067),_=t(44528),N=t(24511),I=t(18197),O=t(84695),S=t(68197),z=t(59624),V=t(74294),q=t(46417),E=["new","approved","rejected"];function H(e){var n=e.data,t=e.handleCancel,l=e.paramsData,a=(0,N.$)().t,c=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,s=I.Z.useForm(),d=(0,r.Z)(s,1)[0],u=(0,y.I0)(),h=(0,o.useState)(!1),f=(0,r.Z)(h,2),v=f[0],Z=f[1];return(0,q.jsx)(O.Z,{visible:!!n,title:n.name,onCancel:t,footer:[(0,q.jsx)(m.Z,{type:"primary",onClick:function(){return d.submit()},loading:v,children:a("save")}),(0,q.jsx)(m.Z,{type:"default",onClick:t,children:a("cancel")})],children:(0,q.jsx)(I.Z,{form:d,layout:"vertical",onFinish:function(e){Z(!0);var a=(0,i.Z)({},e);k.Z.statusChange(n.uuid,a).then((function(){t(),u((0,_.N)(l)),u((0,C.A_)(c))})).finally((function(){return Z(!1)}))},initialValues:{status:n.status},children:(0,q.jsx)(S.Z,{gutter:12,children:(0,q.jsx)(z.Z,{span:24,children:(0,q.jsx)(I.Z.Item,{label:a("status"),name:"status",rules:[{required:!0,message:a("required")}],children:(0,q.jsx)(V.Z,{children:E.map((function(e,n){return(0,q.jsx)(V.Z.Option,{value:e,children:a(e)},e+n)}))})})})})})})}var M=t(55940),T=t(41481),P=t(80314),A=t(48567),D=t(95231),U=t(5958),K=t(53233),$=t(26672),F=t(48008),L=t(13945),R=h.Z.TabPane,B=["blue","red","gold","volcano","cyan","lime"],G=["all","new","approved","rejected","deleted_at"],W=function(){var e,n,t,I,O,S,z,V,E,W,J=(0,N.$)().t,Q=(0,y.I0)(),X=(0,j.s0)(),Y=(0,o.useState)(null),ee=(0,r.Z)(Y,2),ne=ee[0],te=ee[1],le=(0,y.v9)((function(e){return e.auth}),y.wU).user,ae=(0,o.useState)(!1),ie=(0,r.Z)(ae,2),re=ie[0],oe=ie[1],ce=(0,o.useState)(null),se=(0,r.Z)(ce,2),de=se[0],ue=se[1],he=(0,o.useState)(null),fe=(0,r.Z)(he,2),ve=fe[0],Ze=fe[1],me=(0,o.useState)("all"),pe=(0,r.Z)(me,2),xe=pe[0],je=pe[1],ge=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,be=(null===(e=ge.data)||void 0===e?void 0:e.role)||xe,we=(0,o.useState)([{title:J("id"),dataIndex:"id",is_show:!0,sorter:!0,key:"id"},{title:J("title"),dataIndex:"name",is_show:!0,key:"title"},{title:J("translations"),dataIndex:"locales",is_show:!0,key:"locales",render:function(e,n){var t;return(0,q.jsx)(f.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,q.jsx)(v.Z,{className:"text-uppercase",color:[B[n]],children:e})}))})}},{title:J("logo"),dataIndex:"logo_img",is_show:!0,key:"logo",render:function(e){return(0,q.jsx)(Z.Z,{alt:"images",className:"img rounded",src:e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:J("background"),dataIndex:"back",is_show:!0,render:function(e,n){return(0,q.jsx)(Z.Z,{alt:"images background",className:"img rounded",src:n.deleted_at?"https://via.placeholder.com/150":e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:J("seller"),dataIndex:"seller",is_show:!0,key:"seller"},{title:J("open.time"),dataIndex:"open",is_show:!0,key:"open.time",render:function(e,n){return n.open?(0,q.jsxs)(v.Z,{color:"blue",children:[" ",J("open")," "]}):(0,q.jsxs)(v.Z,{color:"red",children:[" ",J("closed")," "]})}},{title:J("tax"),is_show:!0,dataIndex:"tax",key:"tax",render:function(e){return"".concat(e," %")}},{title:J("status"),dataIndex:"status",key:"status",is_show:!0,render:function(e,n){return(0,q.jsxs)("div",{children:["new"===e?(0,q.jsx)(v.Z,{color:"blue",children:J(e)}):"rejected"===e?(0,q.jsx)(v.Z,{color:"error",children:J(e)}):(0,q.jsx)(v.Z,{color:"cyan",children:J(e)}),!n.deleted_at&&(0,q.jsx)(c.Z,{onClick:function(){return te(n)}})]})}},{title:J("options"),dataIndex:"options",key:"options",is_show:!0,render:function(e,n){return(0,q.jsxs)(f.Z,{children:[(0,q.jsx)(m.Z,{type:"primary",icon:(0,q.jsx)(c.Z,{}),disabled:null===n||void 0===n?void 0:n.deleted_at,onClick:function(){return function(e){Q((0,C.bL)({id:"edit-shop",url:"shop/".concat(e.uuid),name:J("edit.shop")})),X("/shop/".concat(e.uuid),{state:"edit"})}(n)}}),(0,q.jsx)(m.Z,{icon:(0,q.jsx)(s.Z,{}),onClick:function(){return function(e){Q((0,C.bL)({id:"shop-clone",url:"shop-clone/".concat(e.uuid),name:J("shop.clone")})),X("/shop-clone/".concat(e.uuid),{state:"clone"})}(n)},disabled:n.deleted_at}),"manager"!==(null===le||void 0===le?void 0:le.role)?(0,q.jsx)(M.Z,{disabled:n.deleted_at,icon:(0,q.jsx)(d.Z,{}),onClick:function(){Se([n.id]),_e(!0),ue(!0)}}):""]})}}]),ye=(0,r.Z)(we,2),Ce=ye[0],ke=ye[1],_e=(0,o.useContext)(b._).setIsModalVisible,Ne=(0,o.useState)(null),Ie=(0,r.Z)(Ne,2),Oe=Ie[0],Se=Ie[1],ze=(0,o.useState)(!1),Ve=(0,r.Z)(ze,2),qe=Ve[0],Ee=Ve[1],He=(0,y.v9)((function(e){return e.shop}),y.wU),Me=He.shops,Te=He.meta,Pe=He.loading,Ae=He.params,De=null===ge||void 0===ge?void 0:ge.data,Ue={search:null===De||void 0===De?void 0:De.search,lang:"equal"===(null===De||void 0===De||null===(n=De.filter)||void 0===n?void 0:n.equal)?null===De||void 0===De||null===(t=De.filter)||void 0===t?void 0:t.lang:D.Z.language,not_lang:"not_equal"===(null===De||void 0===De||null===(I=De.filter)||void 0===I?void 0:I.equal)?null===De||void 0===De||null===(O=De.filter)||void 0===O?void 0:O.lang:null,status:"deleted_at"===be||"all"===be?void 0:be,deleted_at:"deleted_at"===be?be:void 0,page:null===De||void 0===De?void 0:De.page,perPage:null===De||void 0===De?void 0:De.perPage,sort:null===De||void 0===De?void 0:De.sort,column:null===De||void 0===De?void 0:De.column};(0,o.useEffect)((function(){ge.refetch&&(Q((0,_.N)(Ue)),Q((0,C.A_)(ge)))}),[ge.refetch]),(0,P.Z)((function(){Q((0,_.N)(Ue))}),[De]);var Ke=function(e){var n=ge.data;Q((0,C.nc)({activeMenu:ge,data:(0,i.Z)((0,i.Z)({},n),e)}))},$e={selectedRowKeys:Oe,onChange:function(e){Se(e)}};return(0,q.jsxs)(p.Z,{title:J("shops"),extra:(0,q.jsxs)(f.Z,{wrap:!0,children:[(0,q.jsx)(m.Z,{icon:(0,q.jsx)(u.Z,{}),type:"primary",onClick:function(){Q((0,C.bL)({id:"add-shop",url:"shop/add",name:J("add.shop")})),X("/shop/add")},children:J("add.shop")}),"deleted_at"!==be?(0,q.jsxs)(f.Z,{wrap:!0,children:[(0,q.jsx)(M.Z,{size:"",onClick:function(){null===Oe||0===Oe.length?g.Am.warning(J("select.the.product")):(_e(!0),ue(!1))},children:J("delete.selected")}),(0,q.jsx)(M.Z,{size:"",onClick:function(){return Ze({delete:!0})},children:J("delete.all")})]}):(0,q.jsx)(M.Z,{icon:(0,q.jsx)($.uOc,{className:"mr-2"}),onClick:function(){return Ze({restore:!0})},children:J("restore.all")}),(0,q.jsx)(m.Z,{className:"settings-button",onClick:function(){return oe(!0)},children:(0,q.jsx)(U.Ol$,{className:"icon"})}),(0,q.jsx)(K.Z,{columns:Ce,setColumns:ke})]}),children:[(0,q.jsx)("div",{className:"d-flex justify-content-between",children:(0,q.jsx)(T.Z,{placeholder:J("search"),handleChange:function(e){return Ke({search:e})},defaultValue:null===(S=ge.data)||void 0===S?void 0:S.search,resetSearch:!(null!==(z=ge.data)&&void 0!==z&&z.search),className:"w-25"})}),(0,q.jsx)(h.Z,{className:"mt-3",activeKey:be,onChange:function(e){Ke({role:e,page:1}),je(e)},type:"card",children:G.map((function(e){return(0,q.jsx)(R,{tab:J(e)},e)}))}),(0,q.jsx)(x.Z,{scroll:{x:!0},rowSelection:$e,columns:null===Ce||void 0===Ce?void 0:Ce.filter((function(e){return e.is_show})),dataSource:Me,loading:Pe,pagination:{pageSize:Ae.perPage,page:(null===(V=ge.data)||void 0===V?void 0:V.page)||1,total:Te.total,defaultCurrent:null===(E=ge.data)||void 0===E?void 0:E.page,current:null===(W=ge.data)||void 0===W?void 0:W.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var l=e.pageSize,a=e.current,r=t.field,o=t.order,c=(0,L.Z)(o);Q((0,C.nc)({activeMenu:ge,data:(0,i.Z)((0,i.Z)({},ge.data),{},{perPage:l,page:a,column:r,sort:c})}))}}),ne&&(0,q.jsx)(H,{data:ne,handleCancel:function(){return te(null)},paramsData:Ue}),(0,q.jsx)(w.Z,{click:function(){Ee(!0);var e=(0,i.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(Oe.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));k.Z.delete(e).then((function(){g.Am.success(J("successfully.deleted")),_e(!1),Q((0,_.N)(Ue)),ue(null)})).finally((function(){return Ee(!1)}))},text:J(de?"delete":"all.delete"),loading:qe,setText:Se}),re&&(0,q.jsx)(A.Z,{handleClose:function(){return oe(!1)},openDrower:re,setMenuData:C.nc}),ve&&(0,q.jsx)(F.Z,{open:ve,handleCancel:function(){return Ze(null)},click:ve.restore?function(){Ee(!0),k.Z.restoreAll().then((function(){g.Am.success(J("successfully.restored")),Q((0,_.N)(Ue)),Ze(null)})).finally((function(){return Ee(!1)}))}:function(){Ee(!0),k.Z.dropAll().then((function(){g.Am.success(J("successfully.deleted")),Q((0,_.N)()),Ze(null)})).finally((function(){return Ee(!1)}))},text:ve.restore?J("restore.modal.text"):J("read.carefully"),subTitle:ve.restore?"":J("confirm.deletion"),loading:qe,setText:Se})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return c}});var l=t(1413),a=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return a.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:i}))};o.displayName="TableOutlined";var c=a.forwardRef(o)},86345:function(e,n,t){t.d(n,{Z:function(){return g}});var l=t(87462),a=t(4942),i=t(47313),r=t(29439),o=t(45987),c=t(46123),s=t.n(c),d=t(10288),u=t(49242),h=i.forwardRef((function(e,n){var t,l=e.prefixCls,c=void 0===l?"rc-switch":l,h=e.className,f=e.checked,v=e.defaultChecked,Z=e.disabled,m=e.loadingIcon,p=e.checkedChildren,x=e.unCheckedChildren,j=e.onClick,g=e.onChange,b=e.onKeyDown,w=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),y=(0,d.Z)(!1,{value:f,defaultValue:v}),C=(0,r.Z)(y,2),k=C[0],_=C[1];function N(e,n){var t=k;return Z||(_(t=e),null===g||void 0===g||g(t,n)),t}var I=s()(c,h,(t={},(0,a.Z)(t,"".concat(c,"-checked"),k),(0,a.Z)(t,"".concat(c,"-disabled"),Z),t));return i.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":k,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?N(!1,e):e.which===u.Z.RIGHT&&N(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var n=N(!k,e);null===j||void 0===j||j(n,e)}}),m,i.createElement("span",{className:"".concat(c,"-inner")},k?p:x))}));h.displayName="Switch";var f=h,v=t(82508),Z=t(46479),m=t(91964),p=t(21631),x=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t},j=i.forwardRef((function(e,n){var t,r=e.prefixCls,o=e.size,c=e.loading,d=e.className,u=void 0===d?"":d,h=e.disabled,j=x(e,["prefixCls","size","loading","className","disabled"]),g=i.useContext(m.E_),b=g.getPrefixCls,w=g.direction,y=i.useContext(p.Z),C=b("switch",r),k=i.createElement("div",{className:"".concat(C,"-handle")},c&&i.createElement(v.Z,{className:"".concat(C,"-loading-icon")})),_=s()((t={},(0,a.Z)(t,"".concat(C,"-small"),"small"===(o||y)),(0,a.Z)(t,"".concat(C,"-loading"),c),(0,a.Z)(t,"".concat(C,"-rtl"),"rtl"===w),t),u);return i.createElement(Z.Z,{insertExtraNode:!0},i.createElement(f,(0,l.Z)({},j,{prefixCls:C,className:_,disabled:h||c,ref:n,loadingIcon:k})))}));j.__ANT_SWITCH=!0,j.displayName="Switch";var g=j}}]);