"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6089],{36089:function(e,r,a){a.r(r),a.d(r,{default:function(){return F}});var i=a(1413),n=a(93433),t=a(4942),l=a(29439),s=a(18197),d=a(77181),c=a(45705),u=a(59491),o=a(68197),m=a(59624),f=a(66672),p=a(6289),Z=a(99096),x=a(49080),h=a(70816),v=a.n(h),g=a(47313),b=a(24511),j=a(2717),_=a(34491),q=a(90954),w=a(34344),y={get:function(e){return w.Z.get("dashboard/admin/referrals",{params:e})},update:function(e){return w.Z.post("dashboard/admin/referrals",{},{params:e})}},I=a(99638),N=a(73431),S=a(37889),k=a(46417),F=function(){var e,r,a=(0,b.$)().t,h=s.Z.useForm(),w=(0,l.Z)(h,1)[0],F=(0,j.v9)((function(e){return e.menu}),j.wU).activeMenu,L=(0,j.I0)(),M=(0,j.v9)((function(e){return e.globalSettings})).settings,O=Number(M.referral_active),Y=(0,g.useState)(!1),C=(0,l.Z)(Y,2),D=C[0],V=C[1],A=(0,g.useState)(!1),E=(0,l.Z)(A,2),H=E[0],J=E[1],U=(0,j.v9)((function(e){return e.formLang}),j.wU),$=U.defaultLang,z=U.languages,B=(0,g.useState)(null!==(e=F.data)&&void 0!==e&&e.logo_img?[null===(r=F.data)||void 0===r?void 0:r.logo_img]:[]),G=(0,l.Z)(B,2),K=G[0],P=G[1];function Q(){V(!0),y.get().then((function(e){var r=e.data[0],a=(0,i.Z)((0,i.Z)({},function(e){if(null===e||void 0===e||!e.translations)return{};var r=e.translations,a=z.map((function(e){var a,i,n,l;return l={},(0,t.Z)(l,"title[".concat(e.locale,"]"),null===(a=r.find((function(r){return r.locale===e.locale})))||void 0===a?void 0:a.title),(0,t.Z)(l,"description[".concat(e.locale,"]"),null===(i=r.find((function(r){return r.locale===e.locale})))||void 0===i?void 0:i.description),(0,t.Z)(l,"faq[".concat(e.locale,"]"),null===(n=r.find((function(r){return r.locale===e.locale})))||void 0===n?void 0:n.faq),l}));return Object.assign.apply(Object,[{}].concat((0,n.Z)(a)))}(r)),{},{price_from:r.price_from,price_to:r.price_to,expired_at:r.expired_at?v()(r.expired_at):void 0,active:r.active,image:[R(r.img)]});w.setFieldsValue(a),P([R(r.img)])})).finally((function(){V(!1),L((0,q.A_)(F))}))}(0,g.useEffect)((function(){return function(){var e=w.getFieldsValue(!0);e.expired_at=JSON.stringify(null===e||void 0===e?void 0:e.expired_at),L((0,q.nc)({activeMenu:F,data:e}))}}),[]);var R=function(e){return{items:e,uid:e,url:e,name:e}};return(0,g.useEffect)((function(){F.refetch&&Q()}),[F.refetch]),(0,k.jsx)(d.Z,{title:a("referral.settings"),loading:D,extra:(0,k.jsxs)(c.Z,{children:[(0,k.jsx)(N.Z,{}),(0,k.jsx)(u.Z,{type:"primary",onClick:function(){return w.submit()},loading:H,disabled:1!==O,children:a("save")})]}),children:(0,k.jsx)(s.Z,{layout:"vertical",initialValues:(0,i.Z)((0,i.Z)({},F.data),{},{active:!0},function(){var e,r;if(null===(e=F.data)||void 0===e||!e.expired_at)return{};var a=JSON.parse(null===(r=F.data)||void 0===r?void 0:r.expired_at);return{expired_at:v()(a,"HH:mm:ss")}}()),form:w,onFinish:function(e){var r=(0,i.Z)((0,i.Z)({},e),{},{expired_at:v()(e.expired_at).format("YYYY-MM-DD"),img:K[0].name});J(!0),y.update(r).then((function(){_.Am.success(a("successfully.updated")),L((0,I.wv)())})).finally((function(){return J(!1)}))},name:"referral-settings",children:(0,k.jsxs)(o.Z,{gutter:24,children:[(0,k.jsx)(m.Z,{span:24,children:1!==O?(0,k.jsx)("h3",{className:"text-center mt-2 mb-4",children:a("no.active.referral")}):null}),(0,k.jsx)(m.Z,{span:12,children:z.map((function(e,r){return(0,k.jsx)(s.Z.Item,{label:a("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===$,message:a("required")},{min:2,message:a("title.requared")}],hidden:e.locale!==$,children:(0,k.jsx)(f.Z,{disabled:1!==O})},"title"+r)}))}),(0,k.jsx)(m.Z,{span:12,children:z.map((function(e,r){return(0,k.jsx)(s.Z.Item,{label:a("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===$,message:a("required")}],hidden:e.locale!==$,children:(0,k.jsx)(x.Z,{rows:3,disabled:1!==O})},"description"+r)}))}),(0,k.jsx)(m.Z,{span:12,children:(0,k.jsx)(s.Z.Item,{name:"price_from",label:a("sender.price"),rules:[{required:!0,message:a("required")}],children:(0,k.jsx)(p.Z,{className:"w-100",disabled:1!==O})})}),(0,k.jsx)(m.Z,{span:12,children:z.map((function(e,r){return(0,k.jsx)(s.Z.Item,{label:a("terms"),name:"faq[".concat(e.locale,"]"),rules:[{required:e.locale===$,message:a("required")}],hidden:e.locale!==$,children:(0,k.jsx)(x.Z,{rows:3,disabled:1!==O})},"terms"+r)}))}),(0,k.jsx)(m.Z,{span:12,children:(0,k.jsx)(s.Z.Item,{name:"price_to",label:a("distribution.price"),rules:[{required:!0,message:a("required")}],children:(0,k.jsx)(p.Z,{className:"w-100",disabled:1!==O})})}),(0,k.jsx)(m.Z,{span:12,children:(0,k.jsx)(s.Z.Item,{name:"expired_at",label:a("expired.at"),rules:[{required:!0,message:a("required")}],children:(0,k.jsx)(Z.Z,{className:"w-100",disabledDate:function(e){return v()().add(-1,"days")>=e},disabled:1!==O})})}),(0,k.jsx)(m.Z,{span:12,disabled:1!==O,children:(0,k.jsx)(s.Z.Item,{label:a("image"),disabled:1!==O,children:(0,k.jsx)(S.Z,{type:"referral",imageList:K,setImageList:P,form:w,multiple:!1,name:"referral",disabled:1!==O})})})]})})})}}}]);