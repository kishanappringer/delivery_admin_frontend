"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[351],{90351:function(e,n,t){t.r(n);var a=t(1413),i=t(29439),c=t(47313),l=t(58467),r=t(34491),s=t(18197),d=t(77181),o=t(68197),u=t(59624),f=t(66672),m=t(86345),h=t(59491),Z=t(72652),v=t(97421),p=t(2717),b=t(90954),g=t(11216),x=t(73253),y=t(24511),C=t(37889),j=t(46417);n.default=function(){var e,n,t=(0,y.$)().t,k=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,w=(0,l.UO)().id,N=(0,p.I0)(),E=(0,c.useState)(null!==(e=k.data)&&void 0!==e&&e.image?[null===(n=k.data)||void 0===n?void 0:n.image]:[]),I=(0,i.Z)(E,2),O=I[0],S=I[1],_=s.Z.useForm(),T=(0,i.Z)(_,1)[0],F=(0,l.s0)(),P=(0,l.TH)(),V=(0,c.useState)(!1),A=(0,i.Z)(V,2),U=A[0],z=A[1],D=(0,c.useState)(!1),H=(0,i.Z)(D,2),K=H[0],L=H[1];(0,c.useEffect)((function(){return function(){var e=T.getFieldsValue(!0);N((0,b.nc)({activeMenu:k,data:e}))}}),[]);var R=function(e){return{name:e,url:v.bV+e}};return(0,c.useEffect)((function(){k.refetch&&function(e){z(!0),g.Z.getById(e).then((function(e){var n=e.data;T.setFieldsValue((0,a.Z)((0,a.Z)({},n),{},{image:[R(n.img)]})),S([R(n.img)])})).finally((function(){z(!1),N((0,b.A_)(k))}))}(w)}),[k.refetch]),(0,j.jsx)(d.Z,{title:t("edit.brand"),children:U?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,j.jsx)(Z.Z,{size:"large",className:"py-5"})}):(0,j.jsxs)(s.Z,{name:"basic",layout:"vertical",onFinish:function(e){var n,i=(0,a.Z)((0,a.Z)({},e),{},{active:e.active?1:0,"images[0]":null===(n=O[0])||void 0===n?void 0:n.name});L(!0);var c="catalog/brands";"edit"===P.state?g.Z.update(w,i).then((function(){r.Am.success(t("successfully.updated")),N((0,b.ph)((0,a.Z)((0,a.Z)({},k),{},{nextUrl:c}))),F("/".concat(c)),N((0,x.S0)({}))})).finally((function(){return L(!1)})):g.Z.create(i).then((function(){r.Am.success(t("successfully.updated")),N((0,b.ph)((0,a.Z)((0,a.Z)({},k),{},{nextUrl:c}))),F("/".concat(c)),N((0,x.S0)({}))})).finally((function(){return L(!1)}))},form:T,initialValues:(0,a.Z)({},k.data),children:[(0,j.jsxs)(o.Z,{gutter:12,children:[(0,j.jsx)(u.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:t("title"),name:"title",rules:[{required:!0,message:t("required")}],children:(0,j.jsx)(f.Z,{})})}),(0,j.jsx)(u.Z,{span:6,children:(0,j.jsx)(s.Z.Item,{label:t("image"),children:(0,j.jsx)(C.Z,{type:"brands",imageList:O,setImageList:S,form:T,multiple:!1})})}),(0,j.jsx)(u.Z,{span:6,children:(0,j.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,j.jsx)(s.Z.Item,{label:t("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(m.Z,{})})})})]}),(0,j.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:K,children:t("submit")})]})})}},86345:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(87462),i=t(4942),c=t(47313),l=t(29439),r=t(45987),s=t(46123),d=t.n(s),o=t(10288),u=t(49242),f=c.forwardRef((function(e,n){var t,a=e.prefixCls,s=void 0===a?"rc-switch":a,f=e.className,m=e.checked,h=e.defaultChecked,Z=e.disabled,v=e.loadingIcon,p=e.checkedChildren,b=e.unCheckedChildren,g=e.onClick,x=e.onChange,y=e.onKeyDown,C=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,o.Z)(!1,{value:m,defaultValue:h}),k=(0,l.Z)(j,2),w=k[0],N=k[1];function E(e,n){var t=w;return Z||(N(t=e),null===x||void 0===x||x(t,n)),t}var I=d()(s,f,(t={},(0,i.Z)(t,"".concat(s,"-checked"),w),(0,i.Z)(t,"".concat(s,"-disabled"),Z),t));return c.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":w,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?E(!1,e):e.which===u.Z.RIGHT&&E(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=E(!w,e);null===g||void 0===g||g(n,e)}}),v,c.createElement("span",{className:"".concat(s,"-inner")},w?p:b))}));f.displayName="Switch";var m=f,h=t(82508),Z=t(46479),v=t(91964),p=t(21631),b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},g=c.forwardRef((function(e,n){var t,l=e.prefixCls,r=e.size,s=e.loading,o=e.className,u=void 0===o?"":o,f=e.disabled,g=b(e,["prefixCls","size","loading","className","disabled"]),x=c.useContext(v.E_),y=x.getPrefixCls,C=x.direction,j=c.useContext(p.Z),k=y("switch",l),w=c.createElement("div",{className:"".concat(k,"-handle")},s&&c.createElement(h.Z,{className:"".concat(k,"-loading-icon")})),N=d()((t={},(0,i.Z)(t,"".concat(k,"-small"),"small"===(r||j)),(0,i.Z)(t,"".concat(k,"-loading"),s),(0,i.Z)(t,"".concat(k,"-rtl"),"rtl"===C),t),u);return c.createElement(Z.Z,{insertExtraNode:!0},c.createElement(m,(0,a.Z)({},g,{prefixCls:k,className:N,disabled:f||s,ref:n,loadingIcon:w})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var x=g}}]);