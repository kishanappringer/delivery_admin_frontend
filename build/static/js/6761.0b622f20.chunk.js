"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6761],{36761:function(e,n,t){t.r(n);var l=t(1413),a=t(93433),i=t(4942),c=t(29439),r=t(47313),o=t(58467),s=t(34491),u=t(18197),d=t(77181),f=t(68197),m=t(59624),h=t(66672),p=t(86345),v=t(59491),Z=t(72652),x=t(2717),b=t(90954),g=t(32447),j=t(89281),y=t(54872),C=t(24511),k=t(73431),w=t(75336),N=t(53149),I=t(37889),O=t(46417);n.default=function(){var e,n,t=(0,C.$)().t,_=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,q=(0,x.I0)(),E=u.Z.useForm(),S=(0,c.Z)(E,1)[0],P=(0,o.s0)(),T=(0,o.UO)().id,F=(0,r.useState)(null!==(e=_.data)&&void 0!==e&&e.img?null===(n=_.data)||void 0===n?void 0:n.img:[]),L=(0,c.Z)(F,2),A=L[0],U=L[1],V=(0,r.useState)(!1),z=(0,c.Z)(V,2),D=z[0],K=z[1],M=(0,r.useState)(!1),R=(0,c.Z)(M,2),H=R[0],B=R[1],G=(0,x.v9)((function(e){return e.formLang}),x.wU),W=G.languages,$=G.defaultLang;(0,r.useEffect)((function(){return function(){var e=S.getFieldsValue(!0);q((0,b.nc)({activeMenu:_,data:e}))}}),[]);var J=function(e){return e.map((function(e){return{uid:e.id,name:e.path,url:e.path}}))};var Q=function(e){B(!0),y.Z.getById(e).then((function(e){var n,t=e.data,c=(0,l.Z)((0,l.Z)({},t),{},{img:J(t.galleries),shops:null===t||void 0===t||null===(n=t.shops)||void 0===n?void 0:n.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))},function(e){if(!e)return{};var n=e.translations,t=W.map((function(e){var t,l,a,c;return c={},(0,i.Z)(c,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,i.Z)(c,"description[".concat(e.locale,"]"),null===(l=n.find((function(n){return n.locale===e.locale})))||void 0===l?void 0:l.description),(0,i.Z)(c,"button_text[".concat(e.locale,"]"),null===(a=n.find((function(n){return n.locale===e.locale})))||void 0===a?void 0:a.button_text),c}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(t)))}(t));S.setFieldsValue(c),U(J(t.galleries)),q((0,b.nc)({activeMenu:_,data:c}))})).finally((function(){q((0,b.A_)(_)),B(!1)}))};return(0,r.useEffect)((function(){_.refetch&&Q(T)}),[_.refetch]),(0,O.jsx)(d.Z,{title:t("edit.banner"),className:"h-100",extra:(0,O.jsx)(k.Z,{}),children:H?(0,O.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,O.jsx)(Z.Z,{size:"large",className:"py-5"})}):(0,O.jsxs)(u.Z,{name:"banner-add",layout:"vertical",onFinish:function(e){var n;K(!0);var a={url:e.url,shops:null===e||void 0===e||null===(n=e.shops)||void 0===n?void 0:n.map((function(e){return e.value})),images:null===A||void 0===A?void 0:A.map((function(e){return e.name})),clickable:e.clickable,title:(0,w.Z)(W,e,"title"),description:(0,w.Z)(W,e,"description"),button_text:(0,w.Z)(W,e,"button_text")};y.Z.update(T,a).then((function(){var e="banners";s.Am.success(t("successfully.updated")),q((0,b.ph)((0,l.Z)((0,l.Z)({},_),{},{nextUrl:e}))),P("/".concat(e)),q((0,g.f)())})).finally((function(){return K(!1)}))},form:S,initialValues:(0,l.Z)({active:!0},_.data),className:"d-flex flex-column h-100",children:[(0,O.jsxs)(f.Z,{gutter:12,children:[(0,O.jsx)(m.Z,{span:12,children:W.map((function(e){return(0,O.jsx)(u.Z.Item,{label:t("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===$,message:t("required")}],hidden:e.locale!==$,children:(0,O.jsx)(h.Z,{})},"title"+e.locale)}))}),(0,O.jsx)(m.Z,{span:12,children:W.map((function(e){return(0,O.jsx)(u.Z.Item,{label:t("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===$,message:t("required")}],hidden:e.locale!==$,children:(0,O.jsx)(h.Z,{})},"description"+e.locale)}))}),(0,O.jsx)(m.Z,{span:12,children:W.map((function(e){return(0,O.jsx)(u.Z.Item,{label:t("button_text"),name:"button_text[".concat(e.locale,"]"),rules:[{required:e.locale===$,message:t("required")}],hidden:e.locale!==$,children:(0,O.jsx)(h.Z,{})},"button_text"+e.locale)}))}),(0,O.jsx)(m.Z,{span:12,children:(0,O.jsx)(u.Z.Item,{rules:[{required:!0,message:t("required")}],label:t("url"),name:"url",children:(0,O.jsx)(h.Z,{})})}),(0,O.jsx)(m.Z,{span:12,children:(0,O.jsx)(u.Z.Item,{label:t("shop"),name:"shops",rules:[{required:!0,message:t("required")}],children:(0,O.jsx)(j.h,{mode:"multiple",fetchOptions:function(e){var n={search:e,perPage:10,status:"approved"};return N.Z.getAll(n).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))}))},debounceTimeout:200})})}),(0,O.jsx)(m.Z,{span:12,children:(0,O.jsx)(u.Z.Item,{label:t("clickable"),name:"clickable",valuePropName:"checked",children:(0,O.jsx)(p.Z,{})})}),(0,O.jsx)(m.Z,{span:24,children:(0,O.jsx)(u.Z.Item,{label:t("image"),name:"img",rules:[{required:!A.length,message:t("required")}],children:(0,O.jsx)(I.Z,{type:"products",imageList:A,setImageList:U,form:S,length:"1",multiple:!1})})})]}),(0,O.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,O.jsx)("div",{className:"pb-5",children:(0,O.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:D,disabled:D,children:t("submit")})})})]})})}},86345:function(e,n,t){t.d(n,{Z:function(){return g}});var l=t(87462),a=t(4942),i=t(47313),c=t(29439),r=t(45987),o=t(46123),s=t.n(o),u=t(10288),d=t(49242),f=i.forwardRef((function(e,n){var t,l=e.prefixCls,o=void 0===l?"rc-switch":l,f=e.className,m=e.checked,h=e.defaultChecked,p=e.disabled,v=e.loadingIcon,Z=e.checkedChildren,x=e.unCheckedChildren,b=e.onClick,g=e.onChange,j=e.onKeyDown,y=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,u.Z)(!1,{value:m,defaultValue:h}),k=(0,c.Z)(C,2),w=k[0],N=k[1];function I(e,n){var t=w;return p||(N(t=e),null===g||void 0===g||g(t,n)),t}var O=s()(o,f,(t={},(0,a.Z)(t,"".concat(o,"-checked"),w),(0,a.Z)(t,"".concat(o,"-disabled"),p),t));return i.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":w,disabled:p,className:O,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?I(!1,e):e.which===d.Z.RIGHT&&I(!0,e),null===j||void 0===j||j(e)},onClick:function(e){var n=I(!w,e);null===b||void 0===b||b(n,e)}}),v,i.createElement("span",{className:"".concat(o,"-inner")},w?Z:x))}));f.displayName="Switch";var m=f,h=t(82508),p=t(46479),v=t(91964),Z=t(21631),x=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t},b=i.forwardRef((function(e,n){var t,c=e.prefixCls,r=e.size,o=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,b=x(e,["prefixCls","size","loading","className","disabled"]),g=i.useContext(v.E_),j=g.getPrefixCls,y=g.direction,C=i.useContext(Z.Z),k=j("switch",c),w=i.createElement("div",{className:"".concat(k,"-handle")},o&&i.createElement(h.Z,{className:"".concat(k,"-loading-icon")})),N=s()((t={},(0,a.Z)(t,"".concat(k,"-small"),"small"===(r||C)),(0,a.Z)(t,"".concat(k,"-loading"),o),(0,a.Z)(t,"".concat(k,"-rtl"),"rtl"===y),t),d);return i.createElement(p.Z,{insertExtraNode:!0},i.createElement(m,(0,l.Z)({},b,{prefixCls:k,className:N,disabled:f||o,ref:n,loadingIcon:w})))}));b.__ANT_SWITCH=!0,b.displayName="Switch";var g=b}}]);