"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7398],{4014:function(e,n,t){function i(e){var n,t,i=null===e||void 0===e?void 0:e.slice(0,1),a=null===e||void 0===e?void 0:e.lastIndexOf("@"),r=null===e||void 0===e?void 0:e.slice(1,a-1);r=null===(n=r)||void 0===n?void 0:n.replace(/./g,"*");var o=null===e||void 0===e?void 0:e.slice(a-1,e.length);return null===i||void 0===i||null===(t=i.concat(r))||void 0===t?void 0:t.concat(o)}t.d(n,{Z:function(){return i}})},27398:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(29439),a=t(47313),r=t(86345),o=t(45705),c=t(59491),l=t(77181),d=t(78508),s=t(24511),u=t(2717),f=t(69658),v=t(84926),m=t(38758),h=t(34491),p=t(74580),x=t(90954),Z=t(70816),g=t.n(Z),C=t(12019),b=t(55768),y=t(58467),k=t(4014),_=t(79492),w=t(46417);function j(){var e=(0,s.$)().t,n=(0,a.useState)(!1),t=(0,i.Z)(n,2),Z=t[0],j=t[1],I=(0,u.v9)((function(e){return e.menu}),u.wU).activeMenu,N=(0,u.I0)(),E=(0,y.s0)(),O=(0,a.useState)(null),P=(0,i.Z)(O,2),S=P[0],D=P[1],z=(0,a.useContext)(p._).setIsModalVisible,A=(0,_.Z)().isDemo,K=(0,u.v9)((function(e){return e.emailProvider}),u.wU),M=K.emailProvider,T=K.loading;var Y=[{title:e("from_site"),dataIndex:"from_site",key:"from_site"},{title:e("from.to"),dataIndex:"from_to",key:"from_to",render:function(e){return A?(0,k.Z)(e):e}},{title:e("active"),dataIndex:"active",render:function(e,n){return(0,w.jsx)(r.Z,{onChange:function(){z(!0),D(n.id)},disabled:n.deleted_at,checked:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",render:function(e){return g()(e).format("YYYY-MM-DD")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(n,t){return(0,w.jsx)(o.Z,{children:(0,w.jsx)(c.Z,{type:"primary",icon:(0,w.jsx)(C.Z,{}),onClick:function(){return function(n){N((0,x.bL)({url:"settings/emailProviders/".concat(n.id),id:"edit_email_providers",name:e("edit.email.providers")})),E("/settings/emailProviders/".concat(n.id),{state:"edit"})}(t)}})})}}];return(0,a.useEffect)((function(){I.refetch&&(N((0,v.z)()),N((0,x.A_)(I)))}),[I.refetch]),(0,w.jsxs)(l.Z,{title:e("email.provider"),extra:(0,w.jsx)(o.Z,{children:(0,w.jsx)(c.Z,{icon:(0,w.jsx)(b.Z,{}),type:"primary",onClick:function(){N((0,x.bL)({id:"add_email_providers",url:"settings/emailProviders/add",name:e("add_email_providers")})),E("/settings/emailProviders/add")},children:e("add.email.provider")})}),children:[(0,w.jsx)(d.Z,{scroll:{x:!0},columns:Y,dataSource:M,rowKey:function(e){return e.id},loading:T,pagination:!1}),(0,w.jsx)(f.Z,{click:function(){j(!0),m.Z.setActive(S).then((function(){h.Am.success(e("successfully.updated")),z(!1),N((0,v.z)())})).finally((function(){return j(!1)}))},text:e("change.default.language"),loading:Z})]})}},86345:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(87462),a=t(4942),r=t(47313),o=t(29439),c=t(45987),l=t(46123),d=t.n(l),s=t(10288),u=t(49242),f=r.forwardRef((function(e,n){var t,i=e.prefixCls,l=void 0===i?"rc-switch":i,f=e.className,v=e.checked,m=e.defaultChecked,h=e.disabled,p=e.loadingIcon,x=e.checkedChildren,Z=e.unCheckedChildren,g=e.onClick,C=e.onChange,b=e.onKeyDown,y=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,s.Z)(!1,{value:v,defaultValue:m}),_=(0,o.Z)(k,2),w=_[0],j=_[1];function I(e,n){var t=w;return h||(j(t=e),null===C||void 0===C||C(t,n)),t}var N=d()(l,f,(t={},(0,a.Z)(t,"".concat(l,"-checked"),w),(0,a.Z)(t,"".concat(l,"-disabled"),h),t));return r.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":w,disabled:h,className:N,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?I(!1,e):e.which===u.Z.RIGHT&&I(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var n=I(!w,e);null===g||void 0===g||g(n,e)}}),p,r.createElement("span",{className:"".concat(l,"-inner")},w?x:Z))}));f.displayName="Switch";var v=f,m=t(82508),h=t(46479),p=t(91964),x=t(21631),Z=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},g=r.forwardRef((function(e,n){var t,o=e.prefixCls,c=e.size,l=e.loading,s=e.className,u=void 0===s?"":s,f=e.disabled,g=Z(e,["prefixCls","size","loading","className","disabled"]),C=r.useContext(p.E_),b=C.getPrefixCls,y=C.direction,k=r.useContext(x.Z),_=b("switch",o),w=r.createElement("div",{className:"".concat(_,"-handle")},l&&r.createElement(m.Z,{className:"".concat(_,"-loading-icon")})),j=d()((t={},(0,a.Z)(t,"".concat(_,"-small"),"small"===(c||k)),(0,a.Z)(t,"".concat(_,"-loading"),l),(0,a.Z)(t,"".concat(_,"-rtl"),"rtl"===y),t),u);return r.createElement(h.Z,{insertExtraNode:!0},r.createElement(v,(0,i.Z)({},g,{prefixCls:_,className:j,disabled:f||l,ref:n,loadingIcon:w})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var C=g}}]);