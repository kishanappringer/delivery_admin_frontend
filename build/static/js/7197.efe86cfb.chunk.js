"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7197],{57197:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t=r(1413),i=r(29439),d=r(47313),a=r(18197),l=r(256),u=r(59491),o=r(68197),s=r(59624),c=r(3250),v=r(26363),f=r(51835),y=r(44653),m=r(2717),_=r(7370),p=r(70816),h=r.n(p),Z=r(73270),b=r(58467),x=r(90954),g=r(22054),j=r(1003),w=r(24511),D=r(34491),Y=r(46417);function k(){var e,n=(0,w.$)().t,r=a.Z.useForm(),p=(0,i.Z)(r,1)[0],k=(0,m.I0)(),H=(0,b.s0)(),U=(0,d.useState)(!1),F=(0,i.Z)(U,2),M=F[0],C=F[1],A=(0,d.useState)(null),S=(0,i.Z)(A,2),I=S[0],V=S[1],q=(0,m.v9)((function(e){return e.order}),m.wU),E=q.orderProducts,L=q.data,N=q.total,P=q.coupon,T=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,$=(0,m.v9)((function(e){return e.currency}),m.wU).currencies,z=(0,m.v9)((function(e){return e.allShops}),m.wU).allShops;(0,d.useEffect)((function(){return function(){var e=p.getFieldsValue(!0),n=(0,t.Z)((0,t.Z)({},e),{},{delivery_date:e.delivery_date?h()(e.delivery_date).format("YYYY-MM-DD"):void 0});k((0,Z.oM)(n))}}),[]),(0,d.useEffect)((function(){if(T.refetch){var e=$.find((function(e){return e.default}));k((0,Z.HL)(function(e){var n;return e.length?{label:null===(n=e[0].translation)||void 0===n?void 0:n.title,value:e[0].id}:null}(z))),k((0,Z.dY)(e)),p.setFieldsValue({currency_id:e.id}),k((0,x.A_)(T))}}),[T.refetch]);var B=function(e,n){var r,t={payment_sys_id:null===(r=L.paymentType)||void 0===r?void 0:r.value};C(!0),_.Z.create(e).then((function(e){!function(e,n){j.Z.create(e,n).then((function(e){V(e.data.id),k((0,Z.bn)()),p.resetFields()})).finally((function(){return C(!1)}))}(e.data.id,t)})).catch((function(){return C(!1)}))};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(l.Z,{title:n("new.order"),extra:(0,Y.jsx)(u.Z,{type:"primary",loading:M,onClick:function(){return function(){var e=h()(L.delivery_time).format("HH:mm");L.userUuid?e?p.submit():D.Am.warning(n("shop.closed")):D.Am.warning(n("please.select.client"))}()},disabled:!E.length,children:n("create")})}),(0,Y.jsxs)(a.Z,{name:"order-form",form:p,layout:"vertical",onFinish:function(e){var n,r,t,i,d,a,l,u,o={user_id:null===(n=L.user)||void 0===n?void 0:n.value,currency_id:e.currency_id,rate:null===(r=$.find((function(n){return n.id===e.currency_id})))||void 0===r?void 0:r.rate,shop_id:L.shop.value,delivery_id:e.delivery.label,delivery_fee:L.delivery_fee,coupon:P.coupon,tax:N.order_tax,payment_type:null===(t=e.payment_type)||void 0===t?void 0:t.label,note:e.note,delivery_date:h()(e.delivery_date).format("YYYY-MM-DD"),delivery_address_id:null===(i=T.data.addressData)||void 0===i?void 0:i.address,address:{address:null===(d=T.data.addressData)||void 0===d?void 0:d.address,office:null,house:null,floor:null},location:{latitude:null===(a=T.data.addressData)||void 0===a?void 0:a.lat,longitude:null===(l=T.data.addressData)||void 0===l?void 0:l.lng},delivery_time:h()(L.delivery_time,"HH:mm").format("HH:mm"),delivery_type:null===(u=e.delivery.label)||void 0===u?void 0:u.toLowerCase(),delivery_type_id:e.delivery.value,products:E.map((function(e){return{stock_id:e.stockID.id,quantity:e.quantity,bonus:e.bonus}}))};B(o,e.payment_type)},className:"order-add",initialValues:{user:(null===L||void 0===L?void 0:L.user)||null,currency_id:null===L||void 0===L||null===(e=L.currency)||void 0===e?void 0:e.id},children:[(0,Y.jsxs)(o.Z,{gutter:24,children:[(0,Y.jsx)(s.Z,{span:16,children:(0,Y.jsx)(f.Z,{form:p})}),(0,Y.jsxs)(s.Z,{span:8,children:[(0,Y.jsx)(c.Z,{form:p}),(0,Y.jsx)(v.Z,{form:p})]})]}),I?(0,Y.jsx)(y.Z,{orderId:I,handleClose:function(){V(null);var e="orders";k((0,x.ph)((0,t.Z)((0,t.Z)({},T),{},{nextUrl:e}))),H("/".concat(e)),k((0,g.AU)())}}):""]})]})}}}]);