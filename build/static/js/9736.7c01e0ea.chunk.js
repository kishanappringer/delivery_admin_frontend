"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9736],{53233:function(e,n,t){var l=t(1413),i=t(29439),a=t(47313),o=t(56140),d=t(67251),r=t(45705),c=t(86345),s=t(78267),u=t(37388),h=t(59491),f=t(99587),v=t(24511),p=t(46417),Z=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,m=e.style,x=e.size,j=void 0===x?"":x,b=e.iconOnly,g=(0,v.$)().t,y=(0,a.useState)(!1),C=(0,i.Z)(y,2),w=C[0],k=C[1],_=(0,p.jsx)(d.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(d.Z.Item,{children:(0,p.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)}})]})},e+n)}))});return(0,p.jsx)(s.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,p.jsx)(u.Z,{title:g("change.columns"),children:(0,p.jsx)(h.Z,{style:(0,l.Z)({},m),size:j,icon:(0,p.jsx)(f.Z,{}),children:b?null:g("Columns")})})})}},48008:function(e,n,t){t(47313);var l=t(84695),i=t(87569),a=t(59491),o=t(24511),d=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,r=e.text,c=e.click,s=e.loading,u=e.subTitle,h=(0,o.$)().t;return(0,d.jsxs)(l.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,d.jsx)(i.ZP,{status:"warning",title:r,subTitle:u}),(0,d.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,d.jsx)(a.Z,{type:"primary",className:"mr-2",onClick:c,loading:s,children:h("yes")}),(0,d.jsx)(a.Z,{onClick:function(){return t()},children:h("no")})]})]})}},51988:function(e,n,t){t.d(n,{Z:function(){return c}});t(47313);var l=t(24511),i=t(66188),a=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",o=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",d=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",r=t(46417);var c=function(e){var n=e.id,t=void 0===n?"noresult":n,c=e.text,s=void 0===c?"":c,u=(0,l.$)().t,h={src:{noproductsfound:a,noresult:o,nosell:d}[t],artboard:"New Artboard",autoplay:!0},f=(0,i.useRive)(h).RiveComponent;return(0,r.jsxs)("div",{className:"animation-canvas",children:[(0,r.jsx)("div",{style:{width:"100%",height:200},children:(0,r.jsx)(f,{})}),(0,r.jsx)("div",{className:"text",children:u(s)})]})}},13945:function(e,n,t){function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return l}})},33316:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var l=t(74165),i=t(15861),a=t(4942),o=t(93433),d=t(1413),r=t(29439),c=t(47313),s=t(12019),u=t(66407),h=t(47515),f=t(15386),v=t(55768),p=t(73591),Z=t(66204),m=t(45705),x=t(86345),j=t(59491),b=t(77181),g=t(78508),y=t(58467),C=t(34491),w=t(97421),k=t(74580),_=t(69658),N=t(2717),S=t(90954),I=t(17101),A=t(80314),z=t(89281),O=t(53149),V=t(41481),T=t(13945),E=t(24511),H=t(55940),P=t(18197),M=t(84695),Q=t(68197),R=t(59624),K=t(74294),L=t(81890),D=t(46417),$=["published","pending","unpublished"];function F(e){var n=e.orderDetails,t=e.handleCancel,l=(0,N.v9)((function(e){return e.menu}),N.wU).activeMenu,i=P.Z.useForm(),a=(0,r.Z)(i,1)[0],o=(0,N.I0)(),s=(0,E.$)().t,u=(0,c.useState)(!1),h=(0,r.Z)(u,2),f=h[0],v=h[1];return(0,D.jsx)(M.Z,{visible:!!n,title:n.title,onCancel:t,footer:[(0,D.jsx)(j.Z,{type:"primary",onClick:function(){return a.submit()},loading:f,children:s("save")}),(0,D.jsx)(j.Z,{type:"default",onClick:t,children:s("cancel")})],children:(0,D.jsx)(P.Z,{form:a,layout:"vertical",onFinish:function(e){v(!0);var i=(0,d.Z)({},e);I.Z.updateStatus(n.uuid,i).then((function(){t();var e=l.data,n={status:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null:(null===e||void 0===e?void 0:e.role)||"published",deleted_at:"deleted_at"===(null===e||void 0===e?void 0:e.role)?e.role:null,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};o((0,L.QA)(n)),o((0,S.xo)(l))})).finally((function(){return v(!1)}))},initialValues:{status:n.status},children:(0,D.jsx)(Q.Z,{gutter:12,children:(0,D.jsx)(R.Z,{span:24,children:(0,D.jsx)(P.Z.Item,{label:s("status"),name:"status",rules:[{required:!0,message:s("required")}],children:(0,D.jsx)(K.Z,{children:$.map((function(e,n){return(0,D.jsx)(K.Z.Option,{value:e,children:s(e)},n)}))})})})})})})}var W=t(53233),U=t(51988),q=t(48008),B=t(26672),G=t(3925),J=p.Z.TabPane,X=["blue","red","gold","volcano","cyan","lime"],Y=["all","published","pending","unpublished","deleted_at"],ee=function(){var e,n,t,P,M,Q,R,K,$,ee,ne=(0,E.$)().t,te=(0,N.I0)(),le=(0,y.s0)(),ie=(0,c.useState)(null),ae=(0,r.Z)(ie,2),oe=ae[0],de=ae[1],re=(0,N.v9)((function(e){return e.menu}),N.wU).activeMenu,ce=(0,c.useState)("published"),se=(0,r.Z)(ce,2),ue=se[0],he=se[1],fe=(0,c.useState)([{title:ne("id"),dataIndex:"id",is_show:!0,sorter:function(e,n){return e.id-n.id}},{title:ne("name"),dataIndex:"name",is_show:!0,render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title}},{title:ne("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e){return(0,D.jsx)("div",{children:"published"===e?(0,D.jsx)(Z.Z,{color:"blue",children:ne(e)}):"unpublished"===e?(0,D.jsx)(Z.Z,{color:"error",children:ne(e)}):(0,D.jsx)(Z.Z,{color:"cyan",children:ne(e)})})}},{title:ne("translations"),dataIndex:"locales",is_show:!0,render:function(e,n){var t;return(0,D.jsx)(m.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,D.jsx)(Z.Z,{className:"text-uppercase",color:[X[n]],children:e},n+"_locales")}))})}},{title:ne("shop"),dataIndex:"shop_id",is_show:!0,render:function(e,n){var t,l;return null===(t=n.shop)||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title}},{title:ne("active"),dataIndex:"active",is_show:!0,render:function(e,n){return(0,D.jsx)(x.Z,{onChange:function(){ge(!0),be(n.uuid),ke(!0)},disabled:n.deleted_at,checked:e})}},{title:ne("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,D.jsxs)("div",{children:["new"===e?(0,D.jsx)(Z.Z,{color:"blue",children:ne(e)}):"canceled"===e?(0,D.jsx)(Z.Z,{color:"error",children:ne(e)}):(0,D.jsx)(Z.Z,{color:"cyan",children:ne(e)}),n.deleted_at?"":(0,D.jsx)(s.Z,{onClick:function(){return de(n)}})]})}},{title:ne("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(j.Z,{type:"primary",icon:(0,D.jsx)(s.Z,{}),onClick:function(){return Je(n.uuid)},disabled:n.deleted_at}),(0,D.jsx)(j.Z,{icon:(0,D.jsx)(u.Z,{}),onClick:function(){return Xe(n.uuid)},disabled:n.deleted_at}),(0,D.jsx)(H.Z,{icon:(0,D.jsx)(h.Z,{}),onClick:function(){ge(!0),be([n.id]),Pe(!0),ke(!1)},disabled:n.deleted_at})]})}}]),ve=(0,r.Z)(fe,2),pe=ve[0],Ze=ve[1],me=(0,c.useState)(null),xe=(0,r.Z)(me,2),je=xe[0],be=xe[1],ge=(0,c.useContext)(k._).setIsModalVisible,ye=(0,c.useState)(null),Ce=(0,r.Z)(ye,2),we=Ce[0],ke=Ce[1],_e=(0,c.useState)(!1),Ne=(0,r.Z)(_e,2),Se=Ne[0],Ie=Ne[1],Ae=(0,c.useState)(!1),ze=(0,r.Z)(Ae,2),Oe=ze[0],Ve=ze[1],Te=(0,c.useState)(null),Ee=(0,r.Z)(Te,2),He=Ee[0],Pe=Ee[1],Me=(0,c.useState)(null),Qe=(0,r.Z)(Me,2),Re=Qe[0],Ke=Qe[1],Le=(null===(e=re.data)||void 0===e?void 0:e.role)||ue,De=re.data,$e={search:null===De||void 0===De?void 0:De.search,brand_id:null===De||void 0===De||null===(n=De.brand)||void 0===n?void 0:n.value,category_id:null===De||void 0===De||null===(t=De.category)||void 0===t?void 0:t.value,shop_id:null===De||void 0===De||null===(P=De.shop)||void 0===P?void 0:P.value,sort:null===De||void 0===De?void 0:De.sort,status:"deleted_at"===Le||"all"===Le?void 0:Le,deleted_at:"deleted_at"===Le?Le:null,column:null===De||void 0===De?void 0:De.column,perPage:null===De||void 0===De?void 0:De.perPage,page:null===De||void 0===De?void 0:De.page},Fe=(0,N.v9)((function(e){return e.addons}),N.wU),We=Fe.addonsList,Ue=Fe.meta,qe=Fe.loading,Be=Fe.params,Ge=function(){te((0,S.nc)({activeMenu:re,data:null}))};(0,A.Z)((function(){te((0,L.QA)($e))}),[re.data]),(0,c.useEffect)((function(){re.refetch&&(te((0,L.QA)($e)),te((0,S.A_)(re)),he("published"))}),[re.refetch]);var Je=function(e){te((0,S.bL)({id:"addon-edit",url:"addon/".concat(e),name:ne("edit.addon")})),Ge(),le("/addon/".concat(e))},Xe=function(e){te((0,S.bL)({id:"addon-clone",url:"addon-clone/".concat(e),name:ne("clone.addon")})),Ge(),le("/addon-clone/".concat(e))};function Ye(){return Ye=(0,i.Z)((0,l.Z)().mark((function e(n){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:0===n.length?null:n},e.abrupt("return",O.Z.search(t).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),Ye.apply(this,arguments)}var en=function(e){var n=re.data;te((0,S.nc)({activeMenu:re,data:(0,d.Z)((0,d.Z)({},n),e)}))},nn={selectedRowKeys:je,onChange:function(e){be(e)}};return(0,D.jsxs)(c.Fragment,{children:[(0,D.jsx)(b.Z,{className:"p-0",children:(0,D.jsxs)(m.Z,{wrap:!0,size:[14,20],children:[(0,D.jsx)(V.Z,{placeholder:ne("search"),handleChange:function(e){return en({search:e})},defaultValue:null===(M=re.data)||void 0===M?void 0:M.search,resetSearch:!(null!==(Q=re.data)&&void 0!==Q&&Q.search),style:{minWidth:300}}),(0,D.jsx)(z.h,{placeholder:ne("select.shop"),fetchOptions:function(e){return Ye.apply(this,arguments)},style:{minWidth:180},onChange:function(e){return en({shop:e})},value:null===(R=re.data)||void 0===R?void 0:R.shop}),(0,D.jsxs)(j.Z,{onClick:function(){te((0,S.bL)({id:"addon-import",url:"catalog/addon/import",name:ne("addon.import")})),le("/catalog/addon/import")},children:[(0,D.jsx)(G.o5r,{className:"mr-2"}),ne("import")]}),(0,D.jsxs)(j.Z,{loading:Oe,onClick:function(){Ve(!0);I.Z.export({params:{addon:1}}).then((function(e){var n=w.S0+e.data.file_name;window.location.href=n})).finally((function(){return Ve(!1)}))},children:[(0,D.jsx)(G.bwQ,{className:"mr-2"}),ne("export")]}),"deleted_at"!==ue?(0,D.jsxs)(m.Z,{wrap:!0,children:[(0,D.jsx)(H.Z,{size:"",onClick:function(){null===je||0===je.length?C.Am.warning(ne("select.the.product")):(ge(!0),Pe(!1))},children:ne("delete.selected")}),(0,D.jsx)(H.Z,{size:"",onClick:function(){return Ke({delete:!0})},children:ne("delete.all")})]}):(0,D.jsx)(H.Z,{icon:(0,D.jsx)(B.uOc,{className:"mr-2"}),onClick:function(){return Ke({restore:!0})},children:ne("restore.all")}),(0,D.jsx)(j.Z,{icon:(0,D.jsx)(f.Z,{}),onClick:function(){te((0,S.nc)({activeMenu:re,data:void 0}))},disabled:!re.data,style:{minWidth:100}}),(0,D.jsx)(j.Z,{type:"primary",icon:(0,D.jsx)(v.Z,{}),onClick:function(){te((0,S.bL)({id:"addon-add",url:"addon/add",name:ne("add.addon")})),Ge(),le("/addon/add")},children:ne("add.food")}),(0,D.jsx)(W.Z,{columns:pe,setColumns:Ze})]})}),(0,D.jsxs)(b.Z,{title:ne("addons"),children:[(0,D.jsx)(p.Z,{className:"mt-3",activeKey:Le,onChange:function(e){en({role:e,page:1}),he(e)},type:"card",children:Y.map((function(e){return(0,D.jsx)(J,{tab:ne(e)},e)}))}),(0,D.jsx)(g.Z,{locale:{emptyText:(0,D.jsx)(U.Z,{id:"nosell"})},scroll:{x:!0},rowSelection:nn,loading:qe,columns:null===pe||void 0===pe?void 0:pe.filter((function(e){return e.is_show})),dataSource:We,pagination:{pageSize:Be.perPage,page:(null===(K=re.data)||void 0===K?void 0:K.page)||1,total:Ue.total,defaultCurrent:null===($=re.data)||void 0===$?void 0:$.page,current:null===(ee=re.data)||void 0===ee?void 0:ee.page},onChange:function(e,n,t){var l=e.pageSize,i=e.current,a=t.field,o=t.order,r=(0,T.Z)(o);te((0,S.nc)({activeMenu:re,data:(0,d.Z)((0,d.Z)({},re.data),{},{perPage:l,page:i,column:a,sort:r})}))},rowKey:function(e){return e.id}})]}),oe&&(0,D.jsx)(F,{orderDetails:oe,handleCancel:function(){return de(null)}}),(0,D.jsx)(_.Z,{click:we?function(){Ie(!0),I.Z.setActive(je).then((function(){ge(!1),te((0,L.QA)($e)),C.Am.success(ne("successfully.updated")),ke(!1)})).finally((function(){return Ie(!1)}))}:function(){Ie(!0);var e=(0,d.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(je.map((function(e,n){return(0,a.Z)({},"ids[".concat(n,"]"),e)}))))));I.Z.delete(e).then((function(){ge(!1),C.Am.success(ne("successfully.deleted")),te((0,L.QA)($e))})).finally((function(){return Ie(!1)}))},text:ne(we?"set.active.food":He?"delete":"all.delete"),loading:Se,setText:be,setActive:ke}),Re&&(0,D.jsx)(q.Z,{open:Re,handleCancel:function(){return Ke(null)},click:Re.restore?function(){Ie(!0),I.Z.restoreAll().then((function(){C.Am.success(ne("successfully.deleted")),te((0,L.QA)($e)),Ke(null)})).finally((function(){return Ie(!1)}))}:function(){Ie(!0),I.Z.dropAll().then((function(){C.Am.success(ne("successfully.deleted")),te((0,L.QA)()),Ke(null)})).finally((function(){return Ie(!1)}))},text:Re.restore?ne("restore.modal.text"):ne("read.carefully"),subTitle:Re.restore?"":ne("confirm.deletion"),loading:Se,setText:be,setActive:ke})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var l=t(1413),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),d=function(e,n){return i.createElement(o.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:a}))};d.displayName="TableOutlined";var r=i.forwardRef(d)},86345:function(e,n,t){t.d(n,{Z:function(){return b}});var l=t(87462),i=t(4942),a=t(47313),o=t(29439),d=t(45987),r=t(46123),c=t.n(r),s=t(10288),u=t(49242),h=a.forwardRef((function(e,n){var t,l=e.prefixCls,r=void 0===l?"rc-switch":l,h=e.className,f=e.checked,v=e.defaultChecked,p=e.disabled,Z=e.loadingIcon,m=e.checkedChildren,x=e.unCheckedChildren,j=e.onClick,b=e.onChange,g=e.onKeyDown,y=(0,d.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,s.Z)(!1,{value:f,defaultValue:v}),w=(0,o.Z)(C,2),k=w[0],_=w[1];function N(e,n){var t=k;return p||(_(t=e),null===b||void 0===b||b(t,n)),t}var S=c()(r,h,(t={},(0,i.Z)(t,"".concat(r,"-checked"),k),(0,i.Z)(t,"".concat(r,"-disabled"),p),t));return a.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":k,disabled:p,className:S,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?N(!1,e):e.which===u.Z.RIGHT&&N(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var n=N(!k,e);null===j||void 0===j||j(n,e)}}),Z,a.createElement("span",{className:"".concat(r,"-inner")},k?m:x))}));h.displayName="Switch";var f=h,v=t(82508),p=t(46479),Z=t(91964),m=t(21631),x=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)n.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(t[l[i]]=e[l[i]])}return t},j=a.forwardRef((function(e,n){var t,o=e.prefixCls,d=e.size,r=e.loading,s=e.className,u=void 0===s?"":s,h=e.disabled,j=x(e,["prefixCls","size","loading","className","disabled"]),b=a.useContext(Z.E_),g=b.getPrefixCls,y=b.direction,C=a.useContext(m.Z),w=g("switch",o),k=a.createElement("div",{className:"".concat(w,"-handle")},r&&a.createElement(v.Z,{className:"".concat(w,"-loading-icon")})),_=c()((t={},(0,i.Z)(t,"".concat(w,"-small"),"small"===(d||C)),(0,i.Z)(t,"".concat(w,"-loading"),r),(0,i.Z)(t,"".concat(w,"-rtl"),"rtl"===y),t),u);return a.createElement(p.Z,{insertExtraNode:!0},a.createElement(f,(0,l.Z)({},j,{prefixCls:w,className:_,disabled:h||r,ref:n,loadingIcon:k})))}));j.__ANT_SWITCH=!0,j.displayName="Switch";var b=j}}]);