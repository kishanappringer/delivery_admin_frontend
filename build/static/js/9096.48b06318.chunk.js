"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9096],{9096:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(93433),a=n(4942),c=n(1413),l=n(29439),r=n(47313),s=n(58467),o=n(34491),u=n(18197),d=n(77181),f=n(68197),h=n(59624),Z=n(66672),p=n(45705),m=n(59491),v=n(72652),g=n(2717),j=n(90954),x=n(80337),y=n(56078),b=n(73431),_=n(75336),F=n(24511),k=n(21074),q=n(46417);function w(){var e=(0,F.$)().t,t=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,n=(0,g.v9)((function(e){return e.formLang}),g.wU),w=n.languages,I=n.defaultLang,U=(0,g.I0)(),L=u.Z.useForm(),O=(0,l.Z)(L,1)[0],V=(0,s.s0)(),A=(0,s.UO)().uuid,C=(0,r.useState)(!1),E=(0,l.Z)(C,2),M=E[0],N=E[1],S=(0,r.useState)(!1),z=(0,l.Z)(S,2),B=z[0],T=z[1];(0,r.useEffect)((function(){return function(){var e=O.getFieldsValue(!0);U((0,j.nc)({activeMenu:t,data:e}))}}),[]);function $(e){if(!e)return{};var t=e.translations,n=w.map((function(e){var n,i,c,l;return l={},(0,a.Z)(l,"title[".concat(e.locale,"]"),null===(n=t.find((function(t){return t.locale===e.locale})))||void 0===n?void 0:n.title),(0,a.Z)(l,"description[".concat(e.locale,"]"),null===(i=t.find((function(t){return t.locale===e.locale})))||void 0===i?void 0:i.description),(0,a.Z)(l,"short_desc[".concat(e.locale,"]"),null===(c=t.find((function(t){return t.locale===e.locale})))||void 0===c?void 0:c.short_desc),l}));return Object.assign.apply(Object,[{}].concat((0,i.Z)(n)))}return(0,r.useEffect)((function(){t.refetch&&function(e){T(!0),y.Z.getById(e).then((function(e){var t=e.data;O.setFieldsValue((0,c.Z)((0,c.Z)({},t),$(t)))})).finally((function(){T(!1),U((0,j.A_)(t))}))}(A)}),[t.refetch]),(0,q.jsx)(d.Z,{title:e("edit.notification"),extra:(0,q.jsx)(b.Z,{}),children:B?(0,q.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,q.jsx)(v.Z,{size:"large",className:"py-5"})}):(0,q.jsxs)(u.Z,{name:"notification-edit",layout:"vertical",onFinish:function(n){var i={type:"notification",title:(0,_.Z)(w,n),description:(0,_.Z)(w,n,"description"),short_desc:(0,_.Z)(w,n,"short_desc")};N(!0);var a="notifications";y.Z.update(A,i).then((function(){o.Am.success(e("successfully.updated")),U((0,j.ph)((0,c.Z)((0,c.Z)({},t),{},{nextUrl:a}))),V("/".concat(a)),U((0,x.n)({}))})).finally((function(){return N(!1)}))},form:O,initialValues:(0,c.Z)({active:!0},t.data),children:[(0,q.jsxs)(f.Z,{gutter:12,children:[(0,q.jsx)(h.Z,{span:12,children:w.map((function(t){return(0,q.jsx)(u.Z.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===I,message:e("required")}],hidden:t.locale!==I,children:(0,q.jsx)(Z.Z,{})},"title"+t.locale)}))}),(0,q.jsx)(h.Z,{span:24,children:w.map((function(t){return(0,q.jsx)(u.Z.Item,{label:e("short.description"),name:"short_desc[".concat(t.locale,"]"),rules:[{required:t.locale===I,message:e("required")}],hidden:t.locale!==I,children:(0,q.jsx)(Z.Z,{})},"short_desc"+t.locale)}))}),(0,q.jsx)(h.Z,{span:24,children:(0,q.jsx)(k.Z,{form:O,lang:I,languages:w,getLanguageFields:$})})]}),(0,q.jsx)(p.Z,{children:(0,q.jsx)(m.Z,{type:"primary",htmlType:"submit",loading:M,children:e("save")})})]})})}}}]);