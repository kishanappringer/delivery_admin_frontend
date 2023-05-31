"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4063],{84063:function(e,a,t){t.r(a);var n=t(1413),s=t(29439),r=t(47313),l=t(58467),c=t(34491),i=t(18197),d=t(77181),o=t(68197),u=t(59624),m=t(66672),h=t(6289),f=t(86345),p=t(59491),Z=t(2717),x=t(90954),v=t(32447),b=t(24511),j=t(38758),g=t(51282),w=t(46417);a.default=function(){var e=(0,b.$)().t,a=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,t=(0,Z.I0)(),y=i.Z.useForm(),C=(0,s.Z)(y,1)[0],_=(0,l.s0)(),N=(0,l.UO)().id,k=(0,r.useState)(!1),I=(0,s.Z)(k,2),E=I[0],O=I[1],P=(0,r.useState)(!1),q=(0,s.Z)(P,2),S=q[0],F=q[1];(0,r.useEffect)((function(){return function(){var e=C.getFieldsValue(!0);t((0,x.nc)({activeMenu:a,data:e}))}}),[]);return(0,r.useEffect)((function(){var e;a.refetch&&(e=N,F(!0),j.Z.getById(e).then((function(e){var s=e.data,r=(0,n.Z)({},s);C.setFieldsValue(r),t((0,x.nc)({activeMenu:a,data:r}))})).finally((function(){t((0,x.A_)(a)),F(!1)})))}),[a.refetch]),(0,w.jsx)(d.Z,{title:e("edit.email.provider"),className:"h-100",children:S?(0,w.jsx)(g.Z,{}):(0,w.jsxs)(i.Z,{name:"email-provider-add",layout:"vertical",onFinish:function(s){var r={smtp_auth:s.smtp_auth,smtp_debug:s.smtp_debug,port:s.port,password:s.password,from_to:s.from_to,host:s.host,active:s.active,from_site:s.from_site};O(!0);var l="settings/emailProviders";j.Z.update(N,r).then((function(){c.Am.success(e("successfully.created")),t((0,x.ph)((0,n.Z)((0,n.Z)({},a),{},{nextUrl:l}))),_("/".concat(l)),t((0,v.f)())})).finally((function(){return O(!1)}))},form:C,initialValues:(0,n.Z)({smtp_debug:!0,smtp_auth:!0,active:!0},a.data),className:"d-flex flex-column h-100",children:[(0,w.jsxs)(o.Z,{gutter:12,children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{rules:[{required:!0,type:"email",message:e("required.email")}],label:e("email"),name:"from_to",children:(0,w.jsx)(m.Z,{placeholder:"Email"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{rules:[{required:!0,message:e("required")}],label:e("password"),name:"password",children:(0,w.jsx)(m.Z.Password,{})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{rules:[{required:!0,message:e("required")}],label:e("host"),name:"host",children:(0,w.jsx)(m.Z,{})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{rules:[{required:!0,message:e("required")}],label:e("port"),name:"port",children:(0,w.jsx)(h.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:8,children:(0,w.jsx)(i.Z.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,w.jsx)(f.Z,{})})}),(0,w.jsx)(u.Z,{span:8,children:(0,w.jsx)(i.Z.Item,{valuePropName:"checked",label:e("smtp_debug"),name:"smtp_debug",children:(0,w.jsx)(f.Z,{})})}),(0,w.jsx)(u.Z,{span:8,children:(0,w.jsx)(i.Z.Item,{valuePropName:"checked",label:e("smtp_auth"),name:"smtp_auth",children:(0,w.jsx)(f.Z,{})})})]}),(0,w.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,w.jsx)("div",{className:"pb-5",children:(0,w.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:E,children:e("submit")})})})]})})}},86345:function(e,a,t){t.d(a,{Z:function(){return j}});var n=t(87462),s=t(4942),r=t(47313),l=t(29439),c=t(45987),i=t(46123),d=t.n(i),o=t(10288),u=t(49242),m=r.forwardRef((function(e,a){var t,n=e.prefixCls,i=void 0===n?"rc-switch":n,m=e.className,h=e.checked,f=e.defaultChecked,p=e.disabled,Z=e.loadingIcon,x=e.checkedChildren,v=e.unCheckedChildren,b=e.onClick,j=e.onChange,g=e.onKeyDown,w=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),y=(0,o.Z)(!1,{value:h,defaultValue:f}),C=(0,l.Z)(y,2),_=C[0],N=C[1];function k(e,a){var t=_;return p||(N(t=e),null===j||void 0===j||j(t,a)),t}var I=d()(i,m,(t={},(0,s.Z)(t,"".concat(i,"-checked"),_),(0,s.Z)(t,"".concat(i,"-disabled"),p),t));return r.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":_,disabled:p,className:I,ref:a,onKeyDown:function(e){e.which===u.Z.LEFT?k(!1,e):e.which===u.Z.RIGHT&&k(!0,e),null===g||void 0===g||g(e)},onClick:function(e){var a=k(!_,e);null===b||void 0===b||b(a,e)}}),Z,r.createElement("span",{className:"".concat(i,"-inner")},_?x:v))}));m.displayName="Switch";var h=m,f=t(82508),p=t(46479),Z=t(91964),x=t(21631),v=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)a.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]])}return t},b=r.forwardRef((function(e,a){var t,l=e.prefixCls,c=e.size,i=e.loading,o=e.className,u=void 0===o?"":o,m=e.disabled,b=v(e,["prefixCls","size","loading","className","disabled"]),j=r.useContext(Z.E_),g=j.getPrefixCls,w=j.direction,y=r.useContext(x.Z),C=g("switch",l),_=r.createElement("div",{className:"".concat(C,"-handle")},i&&r.createElement(f.Z,{className:"".concat(C,"-loading-icon")})),N=d()((t={},(0,s.Z)(t,"".concat(C,"-small"),"small"===(c||y)),(0,s.Z)(t,"".concat(C,"-loading"),i),(0,s.Z)(t,"".concat(C,"-rtl"),"rtl"===w),t),u);return r.createElement(p.Z,{insertExtraNode:!0},r.createElement(h,(0,n.Z)({},b,{prefixCls:C,className:N,disabled:m||i,ref:a,loadingIcon:_})))}));b.__ANT_SWITCH=!0,b.displayName="Switch";var j=b}}]);