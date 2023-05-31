"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9387],{59387:function(e,n,t){t.r(n);var a=t(1413),i=t(29439),s=t(47313),r=t(58467),l=t(34491),d=t(18197),u=t(77181),c=t(68197),o=t(59624),f=t(66672),m=t(74294),h=t(37388),Z=t(99096),g=t(59491),x=t(2717),b=t(90954),j=t(24511),p=t(7004),v=t(70816),_=t.n(v),y=t(71274),q=t(51282),Y=t(18929),w=t(38758),D=t(89281),F=t(46417);n.default=function(){var e,n=(0,j.$)().t,t=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,v=(0,x.I0)(),N=d.Z.useForm(),I=(0,i.Z)(N,1)[0],M=(0,r.s0)(),O=(0,s.useState)(null===(e=t.data)||void 0===e?void 0:e.has_date),V=(0,i.Z)(O,2),E=(V[0],V[1]),U=(0,s.useState)(!1),k=(0,i.Z)(U,2),C=k[0],H=k[1],S=(0,s.useState)(!1),A=(0,i.Z)(S,2),P=A[0],B=A[1],L=(0,r.UO)().id,T=(0,x.v9)((function(e){return e.formLang}),x.wU),$=T.defaultLang,J=T.languages;(0,s.useEffect)((function(){return function(){var e=I.getFieldsValue(!0),n=JSON.stringify(e.send_to),i=(0,a.Z)((0,a.Z)({},e),{},{send_to:n});v((0,b.nc)({activeMenu:t,data:i}))}}),[]);(0,s.useEffect)((function(){t.refetch&&function(e){B(!0),y.Z.getById(e).then((function(e){E(!0);var n=(0,a.Z)((0,a.Z)({},e.data),{},{send_to:_()(e.data.send_to,"YYYY-MM-DD HH:mm:ss"),has_date:!0,email_setting_id:{label:e.data.email_setting.host,value:e.data.email_setting.id}});I.setFieldsValue(n)})).finally((function(){B(!1),v((0,b.A_)(t))}))}(L)}),[t.refetch]);return(0,F.jsx)(F.Fragment,{children:P?(0,F.jsx)(q.Z,{}):(0,F.jsx)(u.Z,{title:n("edit.subscriber"),className:"h-100",children:(0,F.jsxs)(d.Z,{name:"subscriber-add",layout:"vertical",onFinish:function(e){var i=(0,a.Z)((0,a.Z)({},e),{},{send_to:_()(e.send_to).format("YYYY-MM-DD HH:mm:ss"),email_setting_id:e.email_setting_id.value});H(!0);var s="message/subscriber";y.Z.update(L,i).then((function(){l.Am.success(n("successfully.created")),v((0,b.ph)((0,a.Z)((0,a.Z)({},t),{},{nextUrl:s}))),M("/".concat(s)),v((0,Y.F)())})).finally((function(){return H(!1)}))},form:I,initialValues:(0,a.Z)((0,a.Z)({type:"order"},t.data),function(){var e=t.data;if(null===e||void 0===e||!e.send_to)return e;var n=e.send_to;return(0,a.Z)((0,a.Z)({},e),{},{send_to:_()(n,"YYYY-MM-DD")})}()),className:"d-flex flex-column h-100",children:[(0,F.jsxs)(c.Z,{gutter:12,children:[(0,F.jsx)(o.Z,{span:12,children:(0,F.jsx)(d.Z.Item,{label:n("subject"),name:"subject",rules:[{required:!0,message:n("required")}],children:(0,F.jsx)(f.Z,{})})}),(0,F.jsx)(o.Z,{span:12,children:(0,F.jsx)(d.Z.Item,{label:n("type"),name:"type",rules:[{required:!0,message:n("required")}],children:(0,F.jsxs)(m.Z,{children:[(0,F.jsx)(m.Z.Option,{value:"order",children:(0,F.jsx)(h.Z,{title:n("order.information"),children:n("order")})}),(0,F.jsx)(m.Z.Option,{value:"subscribe",children:(0,F.jsx)(h.Z,{title:n("subscribe.information"),children:n("subscribe")})}),(0,F.jsx)(m.Z.Option,{value:"verify",children:(0,F.jsx)(h.Z,{title:n("verify.information"),children:n("verify")})})]})})}),(0,F.jsx)(o.Z,{span:12,children:(0,F.jsx)(d.Z.Item,{label:n("email.setting.id"),name:"email_setting_id",rules:[{required:!0,message:n("required")}],children:(0,F.jsx)(D.h,{fetchOptions:function(){return w.Z.get().then((function(e){return e.data.map((function(e){return{label:e.host,value:e.id}}))}))},className:"w-100",placeholder:n("email.setting.id")})})}),(0,F.jsx)(o.Z,{span:24,children:(0,F.jsx)(p.Z,{languages:J,form:I,lang:$})}),(0,F.jsx)(o.Z,{span:12,children:(0,F.jsx)(d.Z.Item,{label:n("alt.body"),name:"alt_body",rules:[{required:!0,message:n("required")}],children:(0,F.jsx)(f.Z,{})})}),(0,F.jsx)(o.Z,{span:6,children:(0,F.jsx)(d.Z.Item,{label:n("send.to"),name:"send_to",rules:[{required:!0,message:n("required")}],children:(0,F.jsx)(Z.Z,{showTime:!0,className:"w-100",disabledDate:function(e){return _()().add(-1,"days")>=e}})})})]}),(0,F.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,F.jsx)("div",{className:"pb-5",children:(0,F.jsx)(g.Z,{type:"primary",htmlType:"submit",loading:C,children:n("send")})})})]})})})}},7004:function(e,n,t){t.d(n,{Z:function(){return o}});t(47313);var a=t(18197),i=t(24511),s=t(68144),r=t(76733),l=t.n(r),d=t(97421),u=t(36104),c=t(46417);function o(e){var n=e.form,t=(e.lang,e.languages,(0,i.$)().t);return(0,c.jsx)("div",{className:"textEditor",children:(0,c.jsx)(a.Z.Item,{label:t("newsletter.content"),name:"body",valuePropName:"data",getValueFromEvent:function(e,n){return n.getData()},rules:[{required:!0,message:t("required")}],className:"description-editor",children:(0,c.jsx)(s.CKEditor,{editor:l(),config:{extraPlugins:[function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return function(e){return{upload:function(){return new Promise((function(n,t){var a=new FormData;e.file.then((function(e){a.append("image",e),a.append("type","blogs"),u.Z.upload(a).then((function(e){var t=e.data;n({default:"".concat(d.bV+t.title)})})).catch((function(e){t(e)}))}))}))}}}(e)}}]},onChange:function(e,n){n.getData()},onBlur:function(e,t){var a=t.getData();n.setFieldsValue({body:a})}})})})}}}]);