"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7141],{52008:function(e,n,a){a(47313);n.Z=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},57141:function(e,n,a){a.r(n);var t=a(74165),l=a(15861),i=a(1413),s=a(29439),r=a(47313),c=a(58467),d=a(34491),u=a(18197),o=a(77181),m=a(68197),h=a(59624),f=a(74294),p=a(72652),Z=a(66672),x=a(86345),v=a(59491),y=a(2717),b=a(90954),j=a(24511),g=a(78520),C=a(42111),w=a(52008),k=a(26672),N=a(92709),I=a(46417);n.default=function(){var e=(0,j.$)().t,n=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,a=(0,y.I0)(),_=u.Z.useForm(),E=(0,s.Z)(_,1)[0],O=(0,c.s0)(),q=(0,c.UO)().id,S=(0,r.useState)(!1),F=(0,s.Z)(S,2),P=F[0],z=F[1],T=(0,r.useState)(!1),D=(0,s.Z)(T,2),K=D[0],R=D[1],U=(0,r.useState)([]),V=(0,s.Z)(U,2),A=(V[0],V[1]),B=(0,r.useState)(null),H=(0,s.Z)(B,2),M=H[0],G=H[1];(0,r.useEffect)((function(){return function(){var e=E.getFieldsValue(!0);a((0,b.nc)({activeMenu:n,data:e}))}}),[]);function L(){return(L=(0,l.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.abrupt("return",g.Z.allPayment().then((function(e){var n=e.data.map((function(e){return{label:e.tag[0].toUpperCase()+e.tag.substring(1),value:e.id,key:e.id}}));A(n)})).finally((function(){return R(!1)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,r.useEffect)((function(){n.refetch&&(function(e){R(!0),g.Z.getById(e).then((function(e){var n=e.data;G({label:n.payment.tag,value:n.payment.id}),E.setFieldsValue((0,i.Z)((0,i.Z)({},n),{},{payment_id:n.payment.tag}))})).finally((function(){return a((0,b.A_)(n))}))}(q),function(){L.apply(this,arguments)}())}),[n.refetch]);return(0,I.jsx)(o.Z,{title:e("edit.payment"),className:"h-100",children:K?(0,I.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,I.jsx)(p.Z,{size:"large",className:"py-5"})}):(0,I.jsxs)(u.Z,{name:"edit.payment",layout:"vertical",onFinish:function(t){z(!0);var l=(0,i.Z)((0,i.Z)({},t),{},{payment_id:M.value});g.Z.update(q,l).then((function(){var t="seller/payments";d.Am.success(e("successfully.updated")),a((0,b.ph)((0,i.Z)((0,i.Z)({},n),{},{nextUrl:t}))),O("/".concat(t)),a((0,C.BN)())})).finally((function(){return z(!1)}))},form:E,initialValues:(0,i.Z)({status:!0},n.data),className:"d-flex flex-column h-100",children:[(0,I.jsxs)(m.Z,{gutter:12,children:[(0,I.jsx)(h.Z,{span:"cash"===(null===M||void 0===M?void 0:M.label)||"wallet"===(null===M||void 0===M?void 0:M.label)?12:24,children:(0,I.jsx)(u.Z.Item,{label:e("payment"),name:"payment_id",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(f.Z,{notFoundContent:K?(0,I.jsx)(p.Z,{size:"small"}):"no results",allowClear:!0,disabled:!0})})}),"cash"===(null===M||void 0===M?void 0:M.label)||"wallet"===(null===M||void 0===M?void 0:M.label)?"":(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h.Z,{span:24,offset:10,children:(0,I.jsx)(I.Fragment,{children:function(e){switch(e){case"Paypal":return(0,I.jsx)(k.kD0,{size:80});case"Stripe":return(0,I.jsx)(N.K6C,{size:80});case"Razorpay":return(0,I.jsx)(N.r98,{size:80});case"Paystack":return(0,I.jsx)("img",{src:w.Z,alt:"img",width:"80",height:"80"})}}(null===M||void 0===M?void 0:M.label)})}),(0,I.jsx)(h.Z,{span:12,children:(0,I.jsx)(u.Z.Item,{label:e("client.id"),name:"client_id",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(Z.Z,{})})}),(0,I.jsx)(h.Z,{span:12,children:(0,I.jsx)(u.Z.Item,{label:e("secret.id"),name:"secret_id",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(Z.Z,{})})}),"Paystack"===(null===M||void 0===M?void 0:M.label)?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h.Z,{span:12,children:(0,I.jsx)(u.Z.Item,{label:e("payment.id"),name:"payment_key",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(Z.Z,{})})}),(0,I.jsx)(h.Z,{span:12,children:(0,I.jsx)(u.Z.Item,{label:e("merchant.email"),name:"merchant_email",rules:[{required:!0,message:e("required")}],children:(0,I.jsx)(Z.Z,{type:"email"})})})]}):""]}),(0,I.jsx)(h.Z,{span:12,children:(0,I.jsx)(u.Z.Item,{label:e("status"),name:"status",valuePropName:"checked",children:(0,I.jsx)(x.Z,{})})})]}),(0,I.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,I.jsx)("div",{className:"pb-5",children:(0,I.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:P,disabled:P,children:e("submit")})})})]})})}},86345:function(e,n,a){a.d(n,{Z:function(){return b}});var t=a(87462),l=a(4942),i=a(47313),s=a(29439),r=a(45987),c=a(46123),d=a.n(c),u=a(10288),o=a(49242),m=i.forwardRef((function(e,n){var a,t=e.prefixCls,c=void 0===t?"rc-switch":t,m=e.className,h=e.checked,f=e.defaultChecked,p=e.disabled,Z=e.loadingIcon,x=e.checkedChildren,v=e.unCheckedChildren,y=e.onClick,b=e.onChange,j=e.onKeyDown,g=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,u.Z)(!1,{value:h,defaultValue:f}),w=(0,s.Z)(C,2),k=w[0],N=w[1];function I(e,n){var a=k;return p||(N(a=e),null===b||void 0===b||b(a,n)),a}var _=d()(c,m,(a={},(0,l.Z)(a,"".concat(c,"-checked"),k),(0,l.Z)(a,"".concat(c,"-disabled"),p),a));return i.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":k,disabled:p,className:_,ref:n,onKeyDown:function(e){e.which===o.Z.LEFT?I(!1,e):e.which===o.Z.RIGHT&&I(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=I(!k,e);null===y||void 0===y||y(n,e)}}),Z,i.createElement("span",{className:"".concat(c,"-inner")},k?x:v))}));m.displayName="Switch";var h=m,f=a(82508),p=a(46479),Z=a(91964),x=a(21631),v=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]])}return a},y=i.forwardRef((function(e,n){var a,s=e.prefixCls,r=e.size,c=e.loading,u=e.className,o=void 0===u?"":u,m=e.disabled,y=v(e,["prefixCls","size","loading","className","disabled"]),b=i.useContext(Z.E_),j=b.getPrefixCls,g=b.direction,C=i.useContext(x.Z),w=j("switch",s),k=i.createElement("div",{className:"".concat(w,"-handle")},c&&i.createElement(f.Z,{className:"".concat(w,"-loading-icon")})),N=d()((a={},(0,l.Z)(a,"".concat(w,"-small"),"small"===(r||C)),(0,l.Z)(a,"".concat(w,"-loading"),c),(0,l.Z)(a,"".concat(w,"-rtl"),"rtl"===g),a),o);return i.createElement(p.Z,{insertExtraNode:!0},i.createElement(h,(0,t.Z)({},y,{prefixCls:w,className:N,disabled:m||c,ref:n,loadingIcon:k})))}));y.__ANT_SWITCH=!0,y.displayName="Switch";var b=y}}]);