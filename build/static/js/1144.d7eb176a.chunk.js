"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1144],{48008:function(e,n,t){t(47313);var i=t(84695),a=t(87569),l=t(59491),r=t(24511),o=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,d=e.text,s=e.click,c=e.loading,u=e.subTitle,v=(0,r.$)().t;return(0,o.jsxs)(i.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,o.jsx)(a.ZP,{status:"warning",title:d,subTitle:u}),(0,o.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,o.jsx)(l.Z,{type:"primary",className:"mr-2",onClick:s,loading:c,children:v("yes")}),(0,o.jsx)(l.Z,{onClick:function(){return t()},children:v("no")})]})]})}},91144:function(e,n,t){t.r(n),t.d(n,{default:function(){return ne}});var i=t(4942),a=t(93433),l=t(1413),r=t(29439),o=t(47313),d=t(99096),s=t(73591),c=t(66204),u=t(59491),v=t(45705),f=t(77181),h=t(78508),m=t(58467),x=t(12019),Z=t(31741),p=t(47515),y=t(6986),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},g=t(17469),_=function(e,n){return o.createElement(g.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:j}))};_.displayName="UploadOutlined";var k=o.forwardRef(_),w=t(15386),C=t(2717),b=t(90954),S=t(24511),M=t(89281),A=t(80314),Y=t(22054),I=t(13945),U=t(41481),D=t(84017),P=t(7920),T=t(24077),z=t(53233),N=t(5958),V=t(80355),O=t(24391),K=t(34491),R=t(55940),E=t(7370),H=t(74580),L=t(69658),W=t(97421),$=t(51282),B=t(50402),q=t(45321),F=t(70816),G=t.n(F),J=t(48008),Q=t(46417),X=d.Z.RangePicker,ee=s.Z.TabPane;function ne(){var e,n,t,d,j=(0,C.I0)(),g=(0,m.s0)(),_=(0,S.$)().t,F=(0,C.v9)((function(e){return e.currency}),C.wU).defaultCurrency,ne=(0,o.useState)(),te=(0,r.Z)(ne,2),ie=te[0],ae=te[1],le=(0,o.useState)(null),re=(0,r.Z)(le,2),oe=re[0],de=re[1],se=(0,o.useState)(null),ce=(0,r.Z)(se,2),ue=ce[0],ve=ce[1],fe=(0,o.useState)(null),he=(0,r.Z)(fe,2),me=he[0],xe=he[1],Ze=(0,o.useState)(null),pe=(0,r.Z)(Ze,2),ye=pe[0],je=pe[1],ge=[{id:7,name:"all"},{id:8,name:"un_assigned_order"},{id:3,name:"ready"},{id:4,name:"on_a_way"},{id:5,name:"delivered"},{id:6,name:"canceled"}],_e=(0,o.useState)([{title:_("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:_("client"),is_show:!0,dataIndex:"user",key:"user",render:function(e){return(0,Q.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})}},{title:_("number.of.products"),is_show:!0,dataIndex:"order_details_count",key:"order_details_count",render:function(e){return(0,Q.jsxs)("div",{className:"text-lowercase",children:[e||0," ",_("products")]})}},{title:_("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,Q.jsxs)("div",{children:["new"===e?(0,Q.jsx)(c.Z,{color:"blue",children:_(e)}):"canceled"===e?(0,Q.jsx)(c.Z,{color:"error",children:_(e)}):(0,Q.jsx)(c.Z,{color:"cyan",children:_(e)}),"delivered"!==e&&"canceled"!==e?(0,Q.jsx)(x.Z,{onClick:function(){return de(n)}}):""]})}},{title:_("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:function(e,n){return(0,Q.jsx)("div",{children:"ready"===n.status&&"pickup"!==n.delivery_type?(0,Q.jsx)(u.Z,{type:"link",onClick:function(){return je(n)},children:(0,Q.jsxs)(v.Z,{children:[e?"".concat(e.firstname," ").concat(e.lastname):_("add.deliveryman"),(0,Q.jsx)(x.Z,{})]})}):(0,Q.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})})}},{title:_("amount"),is_show:!0,dataIndex:"total_price",key:"total_price",render:function(e){return(0,D.Z)(e,F.symbol)}},{title:_("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var n;return _(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:_("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:_("options"),is_show:!0,key:"options",render:function(e,n){return(0,Q.jsxs)(v.Z,{children:[(0,Q.jsx)(u.Z,{icon:(0,Q.jsx)(N.Y4r,{}),onClick:function(){return ve(n.id)}}),(0,Q.jsx)(u.Z,{icon:(0,Q.jsx)(Z.Z,{}),onClick:function(){return function(e){j((0,b.bL)({url:"order/details/".concat(e.id),id:"order_details",name:_("order.details")})),g("/order/details/".concat(e.id))}(n)}}),(0,Q.jsx)(R.Z,{icon:(0,Q.jsx)(p.Z,{}),onClick:function(){Ke([n.id]),be(!0),Le(!0)}}),(0,Q.jsx)(u.Z,{icon:(0,Q.jsx)(y.Z,{}),onClick:function(){return xe(n.id)}})]})}}]),ke=(0,r.Z)(_e,2),we=ke[0],Ce=ke[1],be=(0,o.useContext)(H._).setIsModalVisible,Se=(0,o.useState)(!1),Me=(0,r.Z)(Se,2),Ae=Me[0],Ye=Me[1],Ie=(0,C.v9)((function(e){return e.menu}),C.wU).activeMenu,Ue=(0,o.useState)("all"),De=(0,r.Z)(Ue,2),Pe=De[0],Te=De[1],ze=(null===(e=Ie.data)||void 0===e?void 0:e.role)||Pe,Ne=(0,o.useState)(null),Ve=(0,r.Z)(Ne,2),Oe=Ve[0],Ke=Ve[1],Re=(0,o.useState)(null),Ee=(0,r.Z)(Re,2),He=Ee[0],Le=Ee[1],We=(0,o.useState)(!1),$e=(0,r.Z)(We,2),Be=$e[0],qe=$e[1],Fe=(0,C.v9)((function(e){return e.orders}),C.wU),Ge=Fe.orders,Je=Fe.meta,Qe=Fe.loading,Xe=Fe.params,en=Fe.statistic,nn=null===Ie||void 0===Ie?void 0:Ie.data;(0,A.Z)((function(){var e,n={search:null===nn||void 0===nn?void 0:nn.search,sort:null===nn||void 0===nn?void 0:nn.sort,column:null===nn||void 0===nn?void 0:nn.column,perPage:null===nn||void 0===nn?void 0:nn.perPage,page:null===nn||void 0===nn?void 0:nn.page,deliveryman:null===nn||void 0===nn||null===(e=nn.deliveryman)||void 0===e?void 0:e.value,date_from:null===nn||void 0===nn?void 0:nn.date_from,date_to:null===nn||void 0===nn?void 0:nn.date_to,status:"un_assigned_order"===(null===nn||void 0===nn?void 0:nn.status)||null===nn||void 0===nn?void 0:nn.status,"isset-deliveryman":"un_assigned_order"===(null===nn||void 0===nn?void 0:nn.status)?1:0};j((0,Y.AU)(n))}),[null===Ie||void 0===Ie?void 0:Ie.data]);var tn=function(e){var n=Ie.data;j((0,b.nc)({activeMenu:Ie,data:(0,l.Z)((0,l.Z)({},n),e)}))},an=function(){de(null),je(null),ve(null),xe(null)};(0,o.useEffect)((function(){if(null!==Ie&&void 0!==Ie&&Ie.refetch){var e={status:null===nn||void 0===nn?void 0:nn.status,page:null===nn||void 0===nn?void 0:nn.page,perPage:10,type:"delivery"};j((0,Y.AU)(e)),j((0,b.A_)(Ie))}}),[null===Ie||void 0===Ie?void 0:Ie.refetch]);var ln={selectedRowKeys:Oe,onChange:function(e){Ke(e)}};return(0,Q.jsxs)("div",{children:[(0,Q.jsx)("div",{children:Qe?(0,Q.jsx)($.Z,{}):(0,Q.jsx)(B.Z,{data:en,orders:Ge})}),(0,Q.jsx)(f.Z,{className:"p-0",children:(0,Q.jsxs)(v.Z,{wrap:!0,size:[12,20],children:[(0,Q.jsx)(U.Z,{placeholder:_("search"),handleChange:function(e){return tn({search:e})},defaultValue:null===(n=Ie.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=Ie.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,Q.jsx)(X,{format:"YYYY-MM-DD",onChange:function(e){return n=e,void j((0,b.nc)({activeMenu:Ie,data:(0,l.Z)((0,l.Z)({},nn),{},{date_from:n?G()(null===n||void 0===n?void 0:n[0]).format("YYYY-MM-DD").toString():void 0,date_to:n?G()(null===n||void 0===n?void 0:n[1]).format("YYYY-MM-DD").toString():void 0})}));var n}}),(0,Q.jsx)(M.h,{className:"w-100",debounceTimeout:500,placeholder:_("select.deliveryman"),fetchOptions:function(e){var n={search:e};return q.Z.getAll(n).then((function(e){return e.data.map((function(e){return{label:e.firstname+" "+e.lastname,value:e.id}}))}))},allowClear:!0,onChange:function(e){return tn({deliveryman:e})},value:null===(d=Ie.data)||void 0===d?void 0:d.deliveryman}),(0,Q.jsxs)(u.Z,{onClick:function(){Ye(!0),E.Z.export().then((function(e){var n=W.S0+e.data.file_name;window.location.href=n})).finally((function(){return Ye(!1)}))},loading:Ae,children:[(0,Q.jsx)(k,{}),_("export")]}),(0,Q.jsx)(R.Z,{size:"",onClick:function(){null===Oe||0===Oe.length?K.Am.warning(_("select.the.product")):(be(!0),Le(!1))},children:_("delete.selected")}),(0,Q.jsx)(u.Z,{icon:(0,Q.jsx)(w.Z,{}),onClick:function(){j((0,b.nc)({activeMenu:Ie,data:void 0}))},disabled:!Ie.data,style:{minWidth:100}}),(0,Q.jsx)(z.Z,{setColumns:Ce,columns:we})]})}),(0,Q.jsxs)(f.Z,{title:_("orders"),children:[(0,Q.jsx)(s.Z,{onChange:function(e){tn({role:e,page:1}),Te(e)},type:"card",activeKey:ze,children:ge.map((function(e){return(0,Q.jsx)(ee,{tab:_(e.name)},e.name)}))}),(0,Q.jsx)(h.Z,{scroll:{x:!0},rowSelection:ln,columns:null===we||void 0===we?void 0:we.filter((function(e){return e.is_show})),dataSource:Ge,loading:Qe,pagination:{pageSize:Xe.perPage,page:Xe.page,total:Je.total,defaultCurrent:Xe.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,a=e.current,r=t.field,o=t.order,d=(0,I.Z)(o);j((0,b.nc)({activeMenu:Ie,data:(0,l.Z)((0,l.Z)({},Ie.data),{},{perPage:i,page:a,column:r,sort:d})}))}})]}),(0,Q.jsx)(L.Z,{click:function(){qe(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(Oe.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));E.Z.delete(e).then((function(){K.Am.success(_("successfully.deleted")),be(!1),j((0,Y.AU)()),Le(null)})).finally((function(){return qe(!1)}))},text:_(He?"delete":"all.delete"),loading:Be,setText:Ke}),ie&&(0,Q.jsx)(J.Z,{open:ie,handleCancel:function(){return ae(null)},click:ie.restore?function(){qe(!0),E.Z.restoreAll().then((function(){K.Am.success(_("successfully.restored")),j((0,Y.AU)()),ae(null)})).finally((function(){return qe(!1)}))}:function(){qe(!0),E.Z.dropAll().then((function(){K.Am.success(_("successfully.deleted")),j((0,Y.AU)()),ae(null)})).finally((function(){return qe(!1)}))},text:ie.restore?_("restore.modal.text"):_("read.carefully"),subTitle:ie.restore?"":_("confirm.deletion"),loading:Be,setText:Ke}),oe&&(0,Q.jsx)(P.Z,{orderDetails:oe,handleCancel:an,status:ge}),ye&&(0,Q.jsx)(T.Z,{orderDetails:ye,handleCancel:an}),ue&&(0,Q.jsx)(V.Z,{id:ue,handleCancel:an}),me&&(0,Q.jsx)(O.Z,{id:me,handleCancel:an})]})}}}]);