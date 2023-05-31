"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9338],{53233:function(e,n,t){var r=t(1413),i=t(29439),l=t(47313),u=t(56140),a=t(67251),s=t(45705),c=t(86345),o=t(78267),d=t(37388),x=t(59491),f=t(99587),h=t(24511),p=t(46417),v=u.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,u=e.setColumns,Z=e.style,m=e.size,j=void 0===m?"":m,g=e.iconOnly,y=(0,h.$)().t,C=(0,l.useState)(!1),b=(0,i.Z)(C,2),w=b[0],k=b[1],_=(0,p.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(a.Z.Item,{children:(0,p.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(v,{children:e.title}),(0,p.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));u(n)}(e)}})]})},e+n)}))});return(0,p.jsx)(o.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,p.jsx)(d.Z,{title:y("change.columns"),children:(0,p.jsx)(x.Z,{style:(0,r.Z)({},Z),size:j,icon:(0,p.jsx)(f.Z,{}),children:g?null:y("Columns")})})})}},29338:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(4942),i=t(93433),l=t(1413),u=t(29439),a=t(47313),s=t(45705),c=t(78891),o=t(59491),d=t(77181),x=t(78508),f=t(12019),h=t(47515),p=t(55768),v=t(34491),Z=t(24511),m=t(2717),j=t(34319),g=t(22307),y=t(18197),C=t(66672),b=t(84695),w=t(74294),k=t(36202),_=t(81503),I=t(8550),S=t(46417);function V(e){var n=e.modal,t=e.handleCancel,r=y.Z.useForm(),i=(0,u.Z)(r,1)[0],l=(0,Z.$)().t,s=(0,m.I0)(),c=(0,a.useState)(!1),d=(0,u.Z)(c,2),x=d[0],f=d[1],h=(0,a.useState)("text"),p=(0,u.Z)(h,2),V=p[0],N=p[1],A=(0,a.useState)(null),F=(0,u.Z)(A,2),G=F[0],O=F[1],U=(0,a.useState)(""),$=(0,u.Z)(U,2),q=$[0],z=$[1],E=(0,m.v9)((function(e){return e.extraGroup}),m.wU).extraGroups;(0,a.useEffect)((function(){if(n.id){switch(N(n.group.type),n.group.type){case"color":z(n.value);break;case"image":O((0,I.Z)(n.value))}i.setFieldsValue(n)}}),[n]);function K(e,n){switch(e){case"color":return n.hex;case"text":return n;case"image":return n.name;default:return""}}return(0,S.jsx)(b.Z,{title:n.id?l("edit.extra"):l("add.extra"),visible:!!n,onCancel:t,footer:[(0,S.jsx)(o.Z,{type:"primary",onClick:function(){return i.submit()},loading:x,children:l("save")}),(0,S.jsx)(o.Z,{type:"default",onClick:t,children:l("cancel")})],children:(0,S.jsxs)(y.Z,{name:"extra-form",layout:"vertical",form:i,onFinish:function(e){var r={extra_group_id:e.extra_group_id,value:K(V,e.value)};n.id?function(e,n){f(!0),g.Z.updateValue(e,n).then((function(){v.Am.success(l("successfully.updated")),t(),s((0,j.is)())})).finally((function(){return f(!1)}))}(n.id,r):function(e){f(!0),g.Z.createValue(e).then((function(){v.Am.success(l("successfully.created")),t(),s((0,j.is)())})).finally((function(){return f(!1)}))}(r)},children:[(0,S.jsx)(y.Z.Item,{name:"extra_group_id",label:l("extra.group"),rules:[{required:!0,message:""}],children:(0,S.jsx)(w.Z,{style:{width:"100%"},placeholder:l("select.extra.group"),onChange:function(e){var n=E.find((function(n){return n.id===e}));i.setFieldsValue({value:""}),N(n.type)},children:E.map((function(e){var n;return(0,S.jsx)(w.Z.Option,{value:e.id,children:null===(n=e.translation)||void 0===n?void 0:n.title},e.id)}))})}),(0,S.jsx)(y.Z.Item,{name:"value",label:l("value"),rules:[{required:!0,message:""}],children:function(e){switch(e){case"color":return(0,S.jsx)(k.xS,{onChangeComplete:function(e){return z(e.hex)},color:q,disableAlpha:!0});case"text":return(0,S.jsx)(C.Z,{placeholder:l("enter.extra.value")});case"image":return(0,S.jsx)(_.Z,{type:"extras",image:G,setImage:O,form:i,name:"value"});default:return""}}(V)})]})})}function N(e){var n=e.id,t=e.loading,r=e.handleClose,i=e.text,l=e.click,u=(0,Z.$)().t;return(0,S.jsxs)(b.Z,{closable:!1,visible:!!n,footer:null,centered:!0,children:[(0,S.jsx)("p",{children:i}),(0,S.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,S.jsx)(o.Z,{type:"primary",className:"mr-2",onClick:l,loading:t,children:u("yes")}),(0,S.jsx)(o.Z,{onClick:r,children:u("no")})]})]})}var A=t(55940),F=t(97421),G=t(90954),O=t(53233);function U(){var e=(0,Z.$)().t,n=(0,m.I0)(),t=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,y=((0,m.v9)((function(e){return e.extraGroup}),m.wU).extraGroups,(0,m.v9)((function(e){return e.extraValue}),m.wU)),C=y.extraValues,b=y.loading,w=(0,a.useState)(null),k=(0,u.Z)(w,2),_=k[0],I=k[1],U=(0,a.useState)(null),$=(0,u.Z)(U,2),q=$[0],z=$[1],E=(0,a.useState)(!1),K=(0,u.Z)(E,2),M=K[0],R=K[1],T=(0,a.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("title"),dataIndex:"extra_group_id",key:"extra_group_id",is_show:!0,render:function(e,n){var t,r;return null===(t=n.group)||void 0===t||null===(r=t.translation)||void 0===r?void 0:r.title}},{title:e("value"),dataIndex:"value",key:"value",is_show:!0,render:function(e,n){return(0,S.jsxs)(s.Z,{className:"extras",children:["color"===n.group.type?(0,S.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:n.value}}):null,"image"===n.group.type?(0,S.jsx)(c.Z,{width:100,src:F.bV+n.value,className:"borderRadius"}):null,"image"===n.group.type?null:(0,S.jsx)("span",{children:n.value})]})}},{title:e("options"),is_show:!0,render:function(e){return(0,S.jsxs)(s.Z,{children:[(0,S.jsx)(o.Z,{type:"primary",icon:(0,S.jsx)(f.Z,{}),onClick:function(){return z(e)}}),(0,S.jsx)(A.Z,{type:"primary",danger:!0,icon:(0,S.jsx)(h.Z,{}),onClick:function(){return I([e.id])}})]})}}]),B=(0,u.Z)(T,2),D=B[0],H=B[1];return(0,a.useEffect)((function(){t.refetch&&(n((0,j.is)()),n((0,G.A_)(t)))}),[t.refetch]),(0,S.jsxs)(d.Z,{title:e("extra.value"),extra:(0,S.jsxs)(s.Z,{wrap:!0,children:[(0,S.jsx)(o.Z,{type:"primary",icon:(0,S.jsx)(p.Z,{}),onClick:function(){return z({})},children:e("add.extra")}),(0,S.jsx)(O.Z,{columns:D,setColumns:H})]}),children:[(0,S.jsx)(x.Z,{scroll:{x:!0},loading:b,columns:null===D||void 0===D?void 0:D.filter((function(e){return e.is_show})),dataSource:C,rowKey:function(e){return e.id},pagination:!1}),q&&(0,S.jsx)(V,{modal:q,handleCancel:function(){return z(null)}}),_&&(0,S.jsx)(N,{id:_,click:function(){R(!0);var t=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(_.map((function(e,n){return(0,r.Z)({},"ids[".concat(n,"]"),e)}))))));g.Z.deleteValue(t).then((function(){v.Am.success(e("successfully.deleted")),I(null),n((0,j.is)())})).finally((function(){return R(!1)}))},text:e("delete.extra"),loading:M,handleClose:function(){return I(null)}})]})}}}]);