(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7975],{33834:function(t,n,e){"use strict";e.d(n,{K:function(){return s}});var a=e(4942),r=e(1413),i=e(58467),c=e(74776),u=e.n(c),s=function(){var t=(0,i.s0)(),n=(0,i.TH)(),e=u().parse(n.search,{ignoreQueryPrefix:!0});return{values:e,set:function(n,i){return t({search:u().stringify((0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,i)))})},reset:function(n){var a=(0,r.Z)({},e);a[n]&&delete a[n],t({search:u().stringify((0,r.Z)({},a))})},clear:function(){return t({search:u().stringify({})})},merge:function(n){return t({search:u().stringify((0,r.Z)((0,r.Z)({},e),n))})}}}},61492:function(t,n,e){"use strict";e.r(n);var a=e(93433),r=e(4942),i=e(1413),c=e(29439),u=e(47313),s=e(43205),o=e(83999),l=e(77181),d=e(72652),f=e(74911),v=e(39088),p=e(18325),h=e(73431),Z=e(58467),g=e(17101),x=e(2717),m=e(90954),y=e(24511),j=e(33834),b=e(46417),k=o.Z.Step;n.default=function(){var t,n=(0,y.$)().t,e=(0,Z.UO)().uuid,S=(0,j.K)(),w=(0,x.v9)((function(t){return t.menu}),x.wU).activeMenu,N=(0,x.v9)((function(t){return t.formLang}),x.wU).languages,C=(0,x.I0)(),M=Number((null===(t=S.values)||void 0===t?void 0:t.step)||0),O=(0,u.useState)(w.refetch),U=(0,c.Z)(O,2),_=U[0],F=U[1],I=function(){var t=M+1;S.set("step",t)},K=function(){var t=M-1;S.set("step",t)},T=function(t){return t?{label:t.translation?t.translation.title:t.title,value:t.id}:null};function z(t){F(!0),g.Z.getById(t).then((function(t){var n,e=(0,i.Z)((0,i.Z)((0,i.Z)({},t.data),function(t){if(null===t||void 0===t||!t.translations)return{};var n=t.translations,e=N.map((function(t){var e,a,i;return i={},(0,r.Z)(i,"title[".concat(t.locale,"]"),null===(e=n.find((function(n){return n.locale===t.locale})))||void 0===e?void 0:e.title),(0,r.Z)(i,"description[".concat(t.locale,"]"),null===(a=n.find((function(n){return n.locale===t.locale})))||void 0===a?void 0:a.description),i}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(e)))}(t.data)),{},{shop:T(t.data.shop),category:T(t.data.category),brand:T(t.data.brand),unit:T(t.data.unit),images:(n=t.data.galleries,n.map((function(t){return{uid:t.id,name:t.path,url:t.path}}))),properties:t.data.properties.map((function(t,n){var e;return e={id:n},(0,r.Z)(e,"key[".concat(t.locale,"]"),t.key),(0,r.Z)(e,"value[".concat(t.locale,"]"),t.value),e})),translation:void 0,translations:void 0});C((0,m.nc)({activeMenu:w,data:e}))})).finally((function(){F(!1),C((0,m.A_)(w))}))}(0,u.useEffect)((function(){w.refetch&&z(e)}),[w.refetch]);return(0,b.jsxs)(l.Z,{title:n("clone.product"),extra:(0,b.jsx)(h.Z,{}),children:[(0,b.jsx)(o.Z,{current:M,onChange:function(t){C((0,m.nc)({activeMenu:w,data:(0,i.Z)((0,i.Z)({},w.data),{},{step:t})})),S.set("step",t)},children:s.S.map((function(t){return(0,b.jsx)(k,{title:n(t.title)},t.title)}))}),_?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(d.Z,{size:"large",className:"py-5"})}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===s.S[M].content&&(0,b.jsx)(p.Z,{next:I}),"Third-content"===s.S[M].content&&(0,b.jsx)(f.Z,{next:I,prev:K,current:M}),"Finish-content"===s.S[M].content&&(0,b.jsx)(v.Z,{prev:K})]})]})}},24654:function(){}}]);