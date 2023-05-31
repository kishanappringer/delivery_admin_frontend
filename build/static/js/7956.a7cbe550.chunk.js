"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7956],{52008:function(e,a,l){l(47313);a.Z=l.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},89802:function(e,a,l){l.d(a,{q:function(){return o}});var n=l(1413),r=l(29439),t=l(45987),i=l(47313),s=l(74294),c=l(72652),d=l(46417),u=["fetchOptions","refetch"],o=function(e){var a=e.fetchOptions,l=e.refetch,o=void 0!==l&&l,p=(0,t.Z)(e,u),m=(0,i.useState)(!1),h=(0,r.Z)(m,2),f=h[0],x=h[1],y=(0,i.useState)([]),Z=(0,r.Z)(y,2),v=Z[0],j=Z[1];return(0,d.jsx)(s.Z,(0,n.Z)((0,n.Z)({labelInValue:!0,filterOption:!1,notFoundContent:f?(0,d.jsx)(c.Z,{size:"small"}):"no results"},p),{},{options:f?[]:v,onFocus:function(){v.length&&!o||(x(!0),a().then((function(e){j(e),x(!1)})))}}))}},67956:function(e,a,l){l.r(a);var n=l(1413),r=l(29439),t=l(47313),i=l(58467),s=l(34491),c=l(18197),d=l(77181),u=l(68197),o=l(59624),p=l(74294),m=l(72652),h=l(66672),f=l(86345),x=l(59491),y=l(2717),Z=l(90954),v=l(24511),j=l(52008),b=l(26672),g=l(92709),_=l(91260),q=l(89802),k=l(30554),I=l(95231),C=l(79053),w=l(46417);a.default=function(){var e,a=(0,v.$)().t,l=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,N=(0,y.I0)(),O=c.Z.useForm(),z=(0,r.Z)(O,1)[0],F=(0,i.s0)(),E=(0,i.UO)().id,S=(0,t.useState)(!1),P=(0,r.Z)(S,2),V=P[0],A=P[1],T=(0,t.useState)(!1),U=(0,r.Z)(T,2),D=U[0],K=U[1],R=(0,y.v9)((function(e){return e.formLang}),y.wU).languages,B=(0,t.useState)(null),H=(0,r.Z)(B,2),L=H[0],M=H[1],G=(0,y.v9)((function(e){return e.currency}),y.wU).defaultCurrency;(0,t.useEffect)((function(){return function(){var e=z.getFieldsValue(!0);N((0,Z.nc)({activeMenu:l,data:e}))}}),[]);(0,t.useEffect)((function(){l.refetch&&function(e){K(!0),_.x.getById(e).then((function(e){var a=e.data;M({label:a.payment.tag,value:a.payment.id}),z.setFieldsValue((0,n.Z)((0,n.Z)({},a.payload),{},{payment_id:a.payment.tag,paypal_validate_ssl:Boolean(a.payload.paypal_validate_ssl)}))})).finally((function(){K(!1),N((0,Z.A_)(l))}))}(E)}),[l.refetch]);return(0,w.jsx)(d.Z,{title:a("edit.payment.payloads"),className:"h-100",children:D?(0,w.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,w.jsx)(m.Z,{size:"large",className:"py-5"})}):(0,w.jsxs)(c.Z,{name:"edit.payment.payloads",layout:"vertical",onFinish:function(e){delete e.payment_id,A(!0);var r={payment_id:L.value,payload:(0,n.Z)((0,n.Z)({},e),{},{paypal_validate_ssl:null!==e&&void 0!==e&&e.paypal_validate_ssl?Number(e.paypal_validate_ssl):void 0})};_.x.update(E,r).then((function(){var e="payment-payloads";s.Am.success(a("successfully.updated")),N((0,Z.ph)((0,n.Z)((0,n.Z)({},l),{},{nextUrl:e}))),F("/".concat(e)),N((0,C.j)())})).finally((function(){return A(!1)}))},form:z,initialValues:(0,n.Z)({},l.data),className:"d-flex flex-column h-100",children:[(0,w.jsxs)(u.Z,{gutter:12,children:[(0,w.jsx)(o.Z,{span:"cash"===(null===L||void 0===L?void 0:L.label)||"wallet"===(null===L||void 0===L?void 0:L.label)?12:24,children:(0,w.jsx)(c.Z.Item,{label:a("payment"),name:"payment_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(p.Z,{notFoundContent:D?(0,w.jsx)(m.Z,{size:"small"}):"no results",allowClear:!0,disabled:!0})})}),"cash"===(null===L||void 0===L?void 0:L.label)||"wallet"===(null===L||void 0===L?void 0:L.label)?"":(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.Z,{span:24,offset:10,children:(0,w.jsx)(w.Fragment,{children:function(e){switch(e){case"Paypal":return(0,w.jsx)(b.kD0,{size:80});case"Stripe":return(0,w.jsx)(g.K6C,{size:80});case"Razorpay":return(0,w.jsx)(g.r98,{size:80});case"Paystack":return(0,w.jsx)("img",{src:j.Z,alt:"img",width:"80",height:"80"});default:return null}}(null===L||void 0===L?void 0:L.label)})}),"paystack"===(null===L||void 0===L?void 0:L.label)?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})})," ",(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("currency"),name:"currency",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(q.q,{placeholder:a("select.currency"),valuePropName:"label",defaultValue:{value:G.id,label:G.title},fetchOptions:function(){return k.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"paypal"===(null===L||void 0===L?void 0:L.label)?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(p.Z,{options:[{value:"live",label:a("live")},{value:"sandbox",label:a("sandbox")}]})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(p.Z,{options:[{value:"Sale",label:a("sale")},{value:"Order",label:a("order")},{value:"Authorization",label:a("authorization")}]})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(q.q,{placeholder:a("select.currency"),fetchOptions:function(){return k.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title," (").concat(e.symbol||"",")"),key:e.id}}))}))}})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:a("required")}],valuePropName:"value",children:(0,w.jsx)(p.Z,{placeholder:a("select.locale"),defaultValue:{label:null===(e=R.find((function(e){return e.locale===I.Z.language})))||void 0===e?void 0:e.title,value:I.Z.language},options:null===R||void 0===R?void 0:R.map((function(e){return{value:e.locale,label:e.title}}))})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,w.jsx)(f.Z,{})})})]}):"stripe"===(null===L||void 0===L?void 0:L.label)?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})})," ",(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("currency"),name:"currency",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(q.q,{placeholder:a("select.currency"),valuePropName:"label",defaultValue:{value:G.id,label:G.title},fetchOptions:function(){return k.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"razorpay"===(null===L||void 0===L?void 0:L.label)?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})}),(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(h.Z,{})})})," ",(0,w.jsx)(o.Z,{span:12,children:(0,w.jsx)(c.Z.Item,{label:a("currency"),name:"currency",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(q.q,{placeholder:a("select.currency"),valuePropName:"label",defaultValue:{value:G.id,label:G.title},fetchOptions:function(){return k.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):null]})]}),(0,w.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,w.jsx)("div",{className:"pb-5",children:(0,w.jsx)(x.Z,{type:"primary",htmlType:"submit",loading:V,disabled:V,children:a("submit")})})})]})})}},86345:function(e,a,l){l.d(a,{Z:function(){return j}});var n=l(87462),r=l(4942),t=l(47313),i=l(29439),s=l(45987),c=l(46123),d=l.n(c),u=l(10288),o=l(49242),p=t.forwardRef((function(e,a){var l,n=e.prefixCls,c=void 0===n?"rc-switch":n,p=e.className,m=e.checked,h=e.defaultChecked,f=e.disabled,x=e.loadingIcon,y=e.checkedChildren,Z=e.unCheckedChildren,v=e.onClick,j=e.onChange,b=e.onKeyDown,g=(0,s.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),_=(0,u.Z)(!1,{value:m,defaultValue:h}),q=(0,i.Z)(_,2),k=q[0],I=q[1];function C(e,a){var l=k;return f||(I(l=e),null===j||void 0===j||j(l,a)),l}var w=d()(c,p,(l={},(0,r.Z)(l,"".concat(c,"-checked"),k),(0,r.Z)(l,"".concat(c,"-disabled"),f),l));return t.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":k,disabled:f,className:w,ref:a,onKeyDown:function(e){e.which===o.Z.LEFT?C(!1,e):e.which===o.Z.RIGHT&&C(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var a=C(!k,e);null===v||void 0===v||v(a,e)}}),x,t.createElement("span",{className:"".concat(c,"-inner")},k?y:Z))}));p.displayName="Switch";var m=p,h=l(82508),f=l(46479),x=l(91964),y=l(21631),Z=function(e,a){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]])}return l},v=t.forwardRef((function(e,a){var l,i=e.prefixCls,s=e.size,c=e.loading,u=e.className,o=void 0===u?"":u,p=e.disabled,v=Z(e,["prefixCls","size","loading","className","disabled"]),j=t.useContext(x.E_),b=j.getPrefixCls,g=j.direction,_=t.useContext(y.Z),q=b("switch",i),k=t.createElement("div",{className:"".concat(q,"-handle")},c&&t.createElement(h.Z,{className:"".concat(q,"-loading-icon")})),I=d()((l={},(0,r.Z)(l,"".concat(q,"-small"),"small"===(s||_)),(0,r.Z)(l,"".concat(q,"-loading"),c),(0,r.Z)(l,"".concat(q,"-rtl"),"rtl"===g),l),o);return t.createElement(f.Z,{insertExtraNode:!0},t.createElement(m,(0,n.Z)({},v,{prefixCls:q,className:I,disabled:p||c,ref:a,loadingIcon:k})))}));v.__ANT_SWITCH=!0,v.displayName="Switch";var j=v}}]);