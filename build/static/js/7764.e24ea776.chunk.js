"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7764],{57764:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(74165),a=n(15861),s=n(1413),i=n(29439),u=n(47313),d=n(58467),l=n(34491),c=n(18197),o=n(77181),m=n(68197),p=n(59624),f=n(74294),h=n(6289),Z=n(99096),v=n(59491),x=n(70816),g=n.n(x),j=n(2717),y=n(90954),Y=n(57409),b=n(69660),D=n(89281),M=n(18333),q=n(24511),w=n(8550),I=n(37889),N=n(51282),S=n(46417);function k(){var e,t,n=(0,q.$)().t,x=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu,k=(0,j.I0)(),O=(0,d.UO)().id,F=c.Z.useForm(),U=(0,i.Z)(F,1)[0],_=(0,d.s0)(),A=(0,u.useState)(!1),V=(0,i.Z)(A,2),C=V[0],E=V[1],J=(0,u.useState)(!1),L=(0,i.Z)(J,2),B=L[0],T=L[1],$=(0,j.v9)((function(e){return e.myShop}),j.wU).myShop,z=(0,u.useState)(null!==(e=x.data)&&void 0!==e&&e.images?[null===(t=x.data)||void 0===t?void 0:t.images[0]]:[]),G=(0,i.Z)(z,2),H=G[0],K=G[1];(0,u.useEffect)((function(){return function(){var e=U.getFieldsValue(!0),t=JSON.stringify(e.start),n=JSON.stringify(e.end),r=(0,s.Z)((0,s.Z)({},e),{},{start:t,end:n});k((0,y.nc)({activeMenu:x,data:r}))}}),[]),(0,u.useEffect)((function(){x.refetch&&(T(!0),Y.Z.getById(O).then((function(e){var t=e.data,n={price:t.price,type:t.type,products:t.products.map((function(e){var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}})),start:g()(t.start,"YYYY-MM-DD"),end:g()(t.end,"YYYY-MM-DD"),image:[(0,w.Z)(t.img)]};U.setFieldsValue(n),K([(0,w.Z)(t.img)])})).finally((function(){T(!1),k((0,y.A_)(x))})))}),[x.refetch]);function P(){return(P=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:t,shop_id:$.id,status:"published",active:1,rest:1},e.abrupt("return",M.Z.getAll(n).then((function(e){return e.data.map((function(e){var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,S.jsx)(o.Z,{title:n("edit.discount"),className:"h-100",children:B?(0,S.jsx)(N.Z,{}):(0,S.jsxs)(c.Z,{name:"discount-add",layout:"vertical",onFinish:function(e){var t,r={price:e.price,type:e.type,products:e.products.map((function(e){return e.value})),start:e.start?g()(e.start).format("YYYY-MM-DD"):void 0,end:e.end?g()(e.end).format("YYYY-MM-DD"):void 0,images:[null===(t=H[0])||void 0===t?void 0:t.name]};E(!0);var a="seller/discounts";Y.Z.update(O,r).then((function(){l.Am.success(n("successfully.updated")),k((0,y.ph)((0,s.Z)((0,s.Z)({},x),{},{nextUrl:a}))),_("/".concat(a)),k((0,b.k)({}))})).finally((function(){return E(!1)}))},form:U,initialValues:(0,s.Z)({},function(){var e,t=x.data;if(null===(e=x.data)||void 0===e||!e.start)return t;var n=x.data.start,r=x.data.end;return(0,s.Z)((0,s.Z)({},t),{},{start:g()(n,"YYYY-MM-DD"),end:g()(r,"YYYY-MM-DD")})}()),className:"d-flex flex-column h-100",children:[(0,S.jsxs)(m.Z,{gutter:12,children:[(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:n("type"),name:"type",rules:[{required:!0,message:n("required")}],children:(0,S.jsxs)(f.Z,{children:[(0,S.jsx)(f.Z.Option,{value:"fix",children:n("fix")}),(0,S.jsx)(f.Z.Option,{value:"percent",children:n("percent")})]})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:n("price"),name:"price",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(h.Z,{min:0,className:"w-100"})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:n("start.date"),name:"start",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(Z.Z,{className:"w-100",placeholder:"",disabledDate:function(e){return g()().add(-1,"days")>=e}})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:n("end.date"),name:"end",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(Z.Z,{className:"w-100",placeholder:"",disabledDate:function(e){return g()().add(-1,"days")>=e}})})}),(0,S.jsx)(p.Z,{span:24,children:(0,S.jsx)(c.Z.Item,{label:n("products"),name:"products",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(D.h,{fetchOptions:function(e){return P.apply(this,arguments)},mode:"multiple"})})}),(0,S.jsx)(p.Z,{span:24,children:(0,S.jsx)(c.Z.Item,{label:n("image"),name:"image",rules:[{required:!H.length,message:n("required")}],children:(0,S.jsx)(I.Z,{type:"discounts",imageList:H,setImageList:K,form:U,multiple:!1,name:"image"})})})]}),(0,S.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,S.jsx)("div",{className:"pb-5",children:(0,S.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:C,children:n("submit")})})})]})})}}}]);