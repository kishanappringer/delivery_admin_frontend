"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8505],{48505:function(e,n,a){a.r(n);var t=a(1413),i=a(29439),c=a(47313),l=a(58467),r=a(34491),s=a(18197),o=a(77181),d=a(68197),u=a(59624),f=a(66672),m=a(86345),h=a(59491),Z=a(72652),v=a(97421),p=a(2717),b=a(90954),g=a(11216),x=a(73253),y=a(24511),C=a(37889),j=a(46417);n.default=function(){var e,n,a=(0,y.$)().t,k=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,w=(0,l.UO)().id,N=(0,p.I0)(),E=(0,c.useState)(null!==(e=k.data)&&void 0!==e&&e.image?[null===(n=k.data)||void 0===n?void 0:n.image]:[]),I=(0,i.Z)(E,2),O=I[0],S=I[1],_=s.Z.useForm(),T=(0,i.Z)(_,1)[0],F=(0,l.s0)(),P=((0,l.TH)(),(0,c.useState)(!1)),V=(0,i.Z)(P,2),z=V[0],A=V[1],D=(0,c.useState)(!1),H=(0,i.Z)(D,2),K=H[0],L=H[1];(0,c.useEffect)((function(){return function(){var e=T.getFieldsValue(!0);N((0,b.nc)({activeMenu:k,data:e}))}}),[]);var R=function(e){return{name:e,url:v.bV+e}};return(0,c.useEffect)((function(){k.refetch&&function(e){A(!0),g.Z.getById(e).then((function(e){var n=e.data;T.setFieldsValue((0,t.Z)((0,t.Z)({},n),{},{image:[R(n.img)]})),S([R(n.img)])})).finally((function(){A(!1),N((0,b.A_)(k))}))}(w)}),[k.refetch]),(0,j.jsx)(o.Z,{title:a("clone.brand"),children:z?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,j.jsx)(Z.Z,{size:"large",className:"py-5"})}):(0,j.jsxs)(s.Z,{name:"basic",layout:"vertical",onFinish:function(e){var n,i=(0,t.Z)((0,t.Z)({},e),{},{active:e.active?1:0,"images[0]":null===(n=O[0])||void 0===n?void 0:n.name});L(!0);var c="catalog/brands";g.Z.create(i).then((function(){r.Am.success(a("successfully.updated")),N((0,b.ph)((0,t.Z)((0,t.Z)({},k),{},{nextUrl:c}))),F("/".concat(c)),N((0,x.S0)({}))})).finally((function(){return L(!1)}))},form:T,initialValues:(0,t.Z)({},k.data),children:[(0,j.jsxs)(d.Z,{gutter:12,children:[(0,j.jsx)(u.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:a("title"),name:"title",rules:[{required:!0,message:a("required")}],children:(0,j.jsx)(f.Z,{})})}),(0,j.jsx)(u.Z,{span:6,children:(0,j.jsx)(s.Z.Item,{label:a("image"),children:(0,j.jsx)(C.Z,{type:"brands",imageList:O,setImageList:S,form:T,multiple:!1})})}),(0,j.jsx)(u.Z,{span:6,children:(0,j.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,j.jsx)(s.Z.Item,{label:a("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(m.Z,{})})})})]}),(0,j.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:K,children:a("submit")})]})})}},86345:function(e,n,a){a.d(n,{Z:function(){return x}});var t=a(87462),i=a(4942),c=a(47313),l=a(29439),r=a(45987),s=a(46123),o=a.n(s),d=a(10288),u=a(49242),f=c.forwardRef((function(e,n){var a,t=e.prefixCls,s=void 0===t?"rc-switch":t,f=e.className,m=e.checked,h=e.defaultChecked,Z=e.disabled,v=e.loadingIcon,p=e.checkedChildren,b=e.unCheckedChildren,g=e.onClick,x=e.onChange,y=e.onKeyDown,C=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,d.Z)(!1,{value:m,defaultValue:h}),k=(0,l.Z)(j,2),w=k[0],N=k[1];function E(e,n){var a=w;return Z||(N(a=e),null===x||void 0===x||x(a,n)),a}var I=o()(s,f,(a={},(0,i.Z)(a,"".concat(s,"-checked"),w),(0,i.Z)(a,"".concat(s,"-disabled"),Z),a));return c.createElement("button",Object.assign({},C,{type:"button",role:"switch","aria-checked":w,disabled:Z,className:I,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?E(!1,e):e.which===u.Z.RIGHT&&E(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=E(!w,e);null===g||void 0===g||g(n,e)}}),v,c.createElement("span",{className:"".concat(s,"-inner")},w?p:b))}));f.displayName="Switch";var m=f,h=a(82508),Z=a(46479),v=a(91964),p=a(21631),b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]])}return a},g=c.forwardRef((function(e,n){var a,l=e.prefixCls,r=e.size,s=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,g=b(e,["prefixCls","size","loading","className","disabled"]),x=c.useContext(v.E_),y=x.getPrefixCls,C=x.direction,j=c.useContext(p.Z),k=y("switch",l),w=c.createElement("div",{className:"".concat(k,"-handle")},s&&c.createElement(h.Z,{className:"".concat(k,"-loading-icon")})),N=o()((a={},(0,i.Z)(a,"".concat(k,"-small"),"small"===(r||j)),(0,i.Z)(a,"".concat(k,"-loading"),s),(0,i.Z)(a,"".concat(k,"-rtl"),"rtl"===C),a),u);return c.createElement(Z.Z,{insertExtraNode:!0},c.createElement(m,(0,t.Z)({},g,{prefixCls:k,className:N,disabled:f||s,ref:n,loadingIcon:w})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";var x=g}}]);