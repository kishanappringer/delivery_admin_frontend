"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2469],{13944:function(A,e,t){var r=t(1413),n=t(47313),s=t(77181),i=t(58446),l=t(27834),o=t(33533),a=t(46417),c={position:"absolute",zIndex:"1"},d={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=function(A){var e=A.title,t=A.series,u=A.width,h=A.height,x=A.xAxis,v=A.customOptions,m=A.card,f=A.type,j=A.extra,p=A.direction,Z=A.bodyClass,g=JSON.parse(JSON.stringify(function(A){switch(A){case"line":default:return o.jd;case"bar":return o.B0;case"area":return o.fT;case"pie":return o.LB}}(f))),w=window.innerWidth<768,b=function(){if(N.current){var A,e=N.current.querySelectorAll("div.apexcharts-legend")[0];e.style.marginRight="".concat(w?0:null===(A=y.current)||void 0===A?void 0:A.offsetWidth,"px"),"rtl"===p&&(e.style.right="auto",e.style.left="0"),w&&(e.style.position="relative",e.style.top=0,e.style.justifyContent="start",e.style.padding=0)}};(0,n.useEffect)((function(){b()}),[]);var y=(0,n.useRef)(null),N=(0,n.useRef)();g.xaxis={categories:x},v&&(g=(0,r.Z)((0,r.Z)({},g),v));var E=function(){return(0,a.jsx)(l.ZP,{onResize:void setTimeout((function(){b()}),600),children:(0,a.jsx)("div",{style:"rtl"===p?{direction:"ltr"}:{},className:"chartRef",ref:N,children:(0,a.jsx)(i.Z,{options:g,type:f,series:t,width:u,height:h})})})};return(0,a.jsx)(a.Fragment,{children:m?(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"position-relative ".concat(Z),children:[(0,a.jsx)("div",{style:w?{}:c,children:e})&&(0,a.jsx)("h4",{className:"font-weight-bold",style:w?{}:c,children:e}),j&&(0,a.jsx)("div",{ref:y,style:w?{}:d,children:j}),E()]})}):E()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"},e.Z=u},51988:function(A,e,t){t.d(e,{Z:function(){return a}});t(47313);var r=t(24511),n=t(66188),s=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",i=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",l=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",o=t(46417);var a=function(A){var e=A.id,t=void 0===e?"noresult":e,a=A.text,c=void 0===a?"":a,d=(0,r.$)().t,u={src:{noproductsfound:s,noresult:i,nosell:l}[t],artboard:"New Artboard",autoplay:!0},h=(0,n.useRive)(u).RiveComponent;return(0,o.jsxs)("div",{className:"animation-canvas",children:[(0,o.jsx)("div",{style:{width:"100%",height:200},children:(0,o.jsx)(h,{})}),(0,o.jsx)("div",{className:"text",children:d(c)})]})}},33533:function(A,e,t){t.d(e,{B0:function(){return l},DM:function(){return n},LB:function(){return o},fT:function(){return i},jd:function(){return s}});var r=t(1413),n=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],s={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(n),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(A,e){return A+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},i=(0,r.Z)({},s),l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(n),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(A,e){return A+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(A){return"".concat(A)}}}},o={colors:[].concat(n),plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(A){return A.globals.seriesTotals.reduce((function(A,e){return A+e}),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},45464:function(A,e,t){t.d(e,{Z:function(){return n}});var r="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";function n(A){return A||r}},58051:function(A,e,t){t.r(e),t.d(e,{default:function(){return dA}});var r=t(47313),n=t(2717),s=t(90954),i=t(19072),l=t(94024),o=t(32442),a=t(51282),c=t(12380),d=t(32714),u=t(68197),h=t(59624),x=t(24511),v=t(58467),m=t(77181),f=t(74294),j=t(72652),p=t(41068),Z=t(70816),g=t.n(Z),w=t(13944),b=t(33533),y=t(46417);function N(){var A=(0,x.$)().t,e=(0,n.I0)(),t=(0,n.v9)((function(A){return A.orderCounts}),n.wU),s=t.counts,i=t.params,l=t.loading,o=(0,n.v9)((function(A){return A.auth.user}),n.wU).role,a=(0,n.v9)((function(A){return A.theme.theme}),n.wU).direction,d=(0,r.useMemo)((function(){return s.map((function(A){return g()(A.date).format("D MMM")}))}),[s]),u=(0,r.useMemo)((function(){return[{name:A("orders"),data:s.map((function(A){return A.count}))}]}),[s]);return(0,y.jsxs)(m.Z,{title:A("orders"),extra:(0,y.jsxs)(f.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:function(A){var t={time:A};switch(e((0,c.KJ)(t)),o){case"admin":e((0,c.n8)(t));break;case"seller":e((0,c._I)(t))}},defaultValue:"subWeek",children:[(0,y.jsx)(f.Z.Option,{value:"subWeek",children:A("this.week")}),(0,y.jsx)(f.Z.Option,{value:"subMonth",children:A("this.month")}),(0,y.jsx)(f.Z.Option,{value:"subYear",children:A("this.year")})]}),children:[l&&(0,y.jsx)("div",{className:"loader",children:(0,y.jsx)(j.Z,{})}),(0,y.jsx)("div",{className:"d-flex",children:(0,y.jsxs)("div",{className:"mr-5",children:[(0,y.jsx)("h2",{className:"font-weight-bold mb-1",children:s.reduce((function(A,e){return A+(null===e||void 0===e?void 0:e.count)}),0)}),(0,y.jsxs)("p",{children:[(0,y.jsx)(p.Z,{color:b.DM[6]}),A("total.orders.count")]})]})}),(0,y.jsx)("div",{children:(0,y.jsx)(w.Z,{card:!1,series:u,xAxis:d,height:280,customOptions:{colors:[b.DM[6],b.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:a})})]})}var E=t(84017);function M(){var A=(0,x.$)().t,e=(0,n.I0)(),t=(0,n.v9)((function(A){return A.currency}),n.wU).defaultCurrency,s=(0,n.v9)((function(A){return A.orderSales}),n.wU),i=s.sales,l=s.params,o=s.loading,a=(0,n.v9)((function(A){return A.auth.user}),n.wU).role,c=(0,n.v9)((function(A){return A.theme.theme}),n.wU).direction,u=(0,r.useMemo)((function(){return i.map((function(A){return g()(A.date).format("D MMM")}))}),[i]),h=(0,r.useMemo)((function(){return[{name:A("sales"),data:i.map((function(A){return A.total_price.toFixed(2)}))}]}),[i]);return(0,y.jsxs)(m.Z,{title:A("sales"),extra:(0,y.jsxs)(f.Z,{value:l.time,size:"small",style:{minWidth:110},onSelect:function(A){var t={time:A};switch(e((0,d.wJ)(t)),a){case"admin":e((0,d.yS)(t));break;case"seller":e((0,d.xe)(t))}},defaultValue:0,children:[(0,y.jsx)(f.Z.Option,{value:"subWeek",children:A("this.week")}),(0,y.jsx)(f.Z.Option,{value:"subMonth",children:A("this.month")}),(0,y.jsx)(f.Z.Option,{value:"subYear",children:A("this.year")})]}),children:[o&&(0,y.jsx)("div",{className:"loader",children:(0,y.jsx)(j.Z,{})}),(0,y.jsx)("div",{className:"d-flex",children:(0,y.jsxs)("div",{className:"mr-5",children:[(0,y.jsx)("h2",{className:"font-weight-bold mb-1",children:(0,E.Z)(i.reduce((function(A,e){return A+e.total_price}),0),null===t||void 0===t?void 0:t.symbol)}),(0,y.jsxs)("p",{children:[(0,y.jsx)(p.Z,{color:b.DM[0]}),A("total.sales.amount")]})]})}),(0,y.jsx)("div",{children:(0,y.jsx)(w.Z,{card:!1,type:"area",series:h,xAxis:u,height:280,customOptions:{colors:b.DM,legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:c})})]})}var O=t(14637);function Y(A){var e=A.title,t=void 0===e?"Orders":e,r=A.value,s=void 0===r?0:r,i=A.subtitle,l=(0,n.v9)((function(A){return A.currency}),n.wU).defaultCurrency;return(0,y.jsxs)(m.Z,{children:[t&&(0,y.jsx)("h4",{className:"mb-0",children:t}),(0,y.jsx)("div",{className:"".concat(t?"mt-3":""),children:(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"d-flex align-items-center",children:(0,y.jsx)("h1",{className:"mb-0 font-weight-bold",children:(0,E.Z)(s,null===l||void 0===l?void 0:l.symbol)})}),i&&(0,y.jsx)("div",{className:"text-gray-light mt-1",children:i})]})})]})}function z(){var A=(0,x.$)().t,e=(0,n.v9)((function(A){return A.auth}),n.wU).user;return(0,y.jsxs)(m.Z,{children:[(0,y.jsxs)("h2",{children:[A("hello"),", ",e.fullName," \ud83d\udc4b"]}),(0,y.jsx)("p",{children:A("hello.text")})]})}var C=t(4942),U=t(1413),T=t(45705),D=t(78891),k=t(85711),B=t(51988);function Q(){var A=(0,x.$)().t,e=(0,n.I0)(),t=(0,n.v9)((function(A){return A.topCustomers}),n.wU),r=t.topCustomers,s=t.loading,i=t.params,o=(0,n.v9)((function(A){return A.currency}),n.wU).defaultCurrency,a=(0,n.v9)((function(A){return A.auth.user}),n.wU).role,c=function(A,t){var r=(0,U.Z)((0,U.Z)({},i),{},(0,C.Z)({},A,t));switch(e((0,l.Ww)(r)),a){case"admin":e((0,l.sl)(r));break;case"seller":e((0,l.n)(r))}};return(0,y.jsxs)(m.Z,{title:A("top.customers"),extra:(0,y.jsxs)(T.Z,{children:[(0,y.jsxs)(f.Z,{value:i.perPage,size:"small",style:{minWidth:110},onSelect:function(A){return c("perPage",A)},children:[(0,y.jsx)(f.Z.Option,{value:5,children:"5 / ".concat(A("page"))}),(0,y.jsx)(f.Z.Option,{value:10,children:"10 / ".concat(A("page"))}),(0,y.jsx)(f.Z.Option,{value:50,children:"50 / ".concat(A("page"))}),(0,y.jsx)(f.Z.Option,{value:100,children:"100 / ".concat(A("page"))})]}),(0,y.jsxs)(f.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:function(A){return c("time",A)},defaultValue:"subWeek",children:[(0,y.jsx)(f.Z.Option,{value:"subWeek",children:A("this.week")}),(0,y.jsx)(f.Z.Option,{value:"subMonth",children:A("this.month")}),(0,y.jsx)(f.Z.Option,{value:"subYear",children:A("this.year")})]})]}),children:[s&&(0,y.jsx)("div",{className:"loader",children:(0,y.jsx)(j.Z,{})}),(0,y.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:r.length?r.map((function(e,t){return(0,y.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,y.jsxs)("div",{className:"d-flex avatar",children:[(0,y.jsx)(D.Z,{src:(0,k.Z)(e.img),width:40,height:40,preview:!1,className:"rounded"}),(0,y.jsxs)("div",{className:"ml-2 avatar-text",children:[(0,y.jsx)("h5",{className:"title",children:e.firstname+" "+e.lastname}),(0,y.jsx)("div",{className:"text-muted",children:e.phone})]})]}),(0,y.jsx)("div",{className:"d-flex",children:(0,y.jsxs)("div",{className:"mr-3 text-right",children:[(0,y.jsxs)("span",{className:"text-muted",children:[e.count," ",A("orders")]}),(0,y.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:(0,E.Z)(e.total_price,o.symbol)})]})})]},t)})):(0,y.jsx)(u.Z,{children:(0,y.jsx)(h.Z,{span:24,children:(0,y.jsx)(B.Z,{id:"nosell"})})})})]})}var S=t(45464);function I(){var A=(0,x.$)().t,e=(0,n.I0)(),t=(0,n.v9)((function(A){return A.topProducts}),n.wU),r=t.topProducts,s=t.loading,i=t.params,l=(0,n.v9)((function(A){return A.auth.user}),n.wU).role,a=function(A,t){var r=(0,U.Z)((0,U.Z)({},i),{},(0,C.Z)({},A,t));switch(e((0,o.ut)(r)),l){case"admin":e((0,o.hT)(r));break;case"seller":e((0,o.t3)(r))}};return(0,y.jsxs)(m.Z,{title:A("top.selled.products"),extra:(0,y.jsxs)(T.Z,{children:[(0,y.jsxs)(f.Z,{value:i.perPage,size:"small",style:{minWidth:110},onSelect:function(A){return a("perPage",A)},children:[(0,y.jsx)(f.Z.Option,{value:5,children:"5 / ".concat(A("page"))}),(0,y.jsx)(f.Z.Option,{value:10,children:"10 / ".concat(A("page"))}),(0,y.jsx)(f.Z.Option,{value:50,children:"50 / ".concat(A("page"))}),(0,y.jsx)(f.Z.Option,{value:100,children:"100 / ".concat(A("page"))})]}),(0,y.jsxs)(f.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:function(A){return a("time",A)},defaultValue:"subWeek",children:[(0,y.jsx)(f.Z.Option,{value:"subWeek",children:A("this.week")}),(0,y.jsx)(f.Z.Option,{value:"subMonth",children:A("this.month")}),(0,y.jsx)(f.Z.Option,{value:"subYear",children:A("this.year")})]})]}),children:[s&&(0,y.jsx)("div",{className:"loader",children:(0,y.jsx)(j.Z,{})}),(0,y.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:null!==r&&void 0!==r&&r.length?r.map((function(e,t){return(0,y.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,y.jsxs)("div",{className:"d-flex avatar",children:[(0,y.jsx)(D.Z,{src:(0,S.Z)(null===e||void 0===e?void 0:e.img),width:40,height:40,preview:!1}),(0,y.jsx)("div",{className:"ml-2 avatar-text",children:(0,y.jsx)("h5",{className:"title",children:null===e||void 0===e?void 0:e.title})})]}),(0,y.jsx)("div",{className:"d-flex",children:(0,y.jsxs)("div",{className:"mr-3 text-right",children:[(0,y.jsx)("span",{className:"text-muted",children:A("sales")}),(0,y.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:null===e||void 0===e?void 0:e.count})]})})]},t)})):(0,y.jsx)(u.Z,{children:(0,y.jsx)(h.Z,{span:24,children:(0,y.jsx)(B.Z,{id:"nosell"})})})})]})}var R=t(59491),P=t(29439),F=t(18197),J=t(66672),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},W=t(17469),_=function(A,e){return r.createElement(W.Z,(0,U.Z)((0,U.Z)({},A),{},{ref:e,icon:H}))};_.displayName="PlusCircleFilled";var q=r.forwardRef(_),L=function(A){var e=A.onFormSubmit,t=F.Z.useForm(),r=(0,P.Z)(t,1)[0],n=(0,x.$)().t;return(0,y.jsx)(F.Z,{form:r,onFinish:function(A){e(A),r.resetFields()},layout:"horizontal",className:"todo-form",children:(0,y.jsxs)(u.Z,{gutter:20,children:[(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,lg:14,xl:18,children:(0,y.jsx)(F.Z.Item,{name:"name",rules:[{required:!0,message:"This field is required"}],children:(0,y.jsx)(J.Z,{placeholder:n("todo.placeholder")})})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:12,lg:10,xl:6,children:(0,y.jsxs)(R.Z,{type:"primary",htmlType:"submit",block:!0,children:[(0,y.jsx)(q,{}),n("todo.add")]})})]})})},V=t(56140),G=t(42346),K=t(32697),X=function(A){var e=A.todos,t=A.onTodoToggle,r=(0,x.$)().t;return(0,y.jsxs)(y.Fragment,{children:[0===e.length||(0,y.jsxs)(V.Z.Text,{children:[e.filter((function(A){return A.isComplete})).length," of ",e.length," ",r("remaining")]}),(0,y.jsx)("div",{style:{maxHeight:"280px",overflowY:"auto"},children:(0,y.jsx)(G.ZP,{locale:{emptyText:r("todo.empty")},dataSource:e,renderItem:function(A){return(0,y.jsx)(G.ZP.Item,{style:{paddingRight:0,paddingLeft:0},onClick:function(){return t(A.id)},children:(0,y.jsxs)(T.Z,{className:"w-100 justify-content-between",children:[(0,y.jsxs)(T.Z,{className:"align-items-end",children:[(0,y.jsx)(K.Z,{checked:A.isComplete}),(0,y.jsx)(V.Z.Text,{delete:A.isComplete,children:A.name})]}),(0,y.jsx)(V.Z.Text,{children:g()(A.date).format("MMM DD YYYY hh:mm a")})]})},A.id)}})})]})},$=t(17777),AA=function(){var A=(0,n.v9)((function(A){return A.todo.todos})),e=(0,x.$)().t,t=(0,n.I0)();return(0,y.jsxs)(m.Z,{title:e("todo.list"),style:{height:"calc(100% - 20px)"},extra:(0,y.jsx)(R.Z,{danger:!0,type:"primary",disabled:0===A.filter((function(A){return A.isComplete})).length,onClick:function(){t((0,$.Xd)(A.filter((function(A){return A.isComplete})).map((function(A){return A.id}))))},children:e("archive")}),children:[(0,y.jsx)(L,{onFormSubmit:function(A){t((0,$.rk)(A))}}),(0,y.jsx)(X,{todos:A,onTodoToggle:function(A){t((0,$.wv)(A))}})]})},eA=function(A){var e=A.counts,t=(0,x.$)().t;return(0,y.jsx)(m.Z,{title:t("orders"),children:(0,y.jsx)(w.Z,{type:"pie",series:[e.progress_orders_count,e.delivered_orders_count,e.cancel_orders_count],xAxis:[t("in.progress.orders"),t("delivered.orders"),t("canceled.orders")],customOptions:{labels:[t("in.progress.orders"),t("delivered.orders"),t("canceled.orders")]}})})};function tA(){var A=(0,x.$)().t,e=(0,v.s0)(),t=(0,n.I0)(),r=(0,n.v9)((function(A){return A.auth}),n.wU).user,i=(0,n.v9)((function(A){return A.statisticsCount}),n.wU).counts,l=function(A,r){t((0,s.K0)({id:A,url:A,name:r,refetch:!0})),e("/".concat(A))};return(0,y.jsxs)("div",{children:[(0,y.jsx)(z,{}),(0,y.jsxs)(u.Z,{gutter:16,className:"mt-3",children:[(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:A("in.progress.orders"),value:null===i||void 0===i?void 0:i.progress_orders_count,color:"purple",onClick:function(){return l("seller"===(null===r||void 0===r?void 0:r.role)?"seller/orders?status=new":"orders?status=new",A("in.progress.orders"))}})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:A("cancelled.orders"),value:null===i||void 0===i?void 0:i.cancel_orders_count,color:"red",onClick:function(){return l("seller"===(null===r||void 0===r?void 0:r.role)?"seller/orders?status=canceled":"orders?status=canceled",A("cancelled.orders"))}})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:A("delivered.orders"),value:null===i||void 0===i?void 0:i.delivered_orders_count,color:"green",onClick:function(){return l("seller"===(null===r||void 0===r?void 0:r.role)?"seller/orders?status=delivered":"orders?status=delivered",A("delivered.orders"))}})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:A("out.of.stock.products"),value:null===i||void 0===i?void 0:i.products_out_of_count,color:"red"})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:A("total.products"),value:null===i||void 0===i?void 0:i.products_count,color:"grey"})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:A("order.reviews"),value:null===i||void 0===i?void 0:i.reviews_count,color:"purple",onClick:function(){return l("seller"===(null===r||void 0===r?void 0:r.role)?"seller/reviews/order":"reviews/order",A("order.reviews"))}})})]}),(0,y.jsxs)(u.Z,{gutter:16,children:[(0,y.jsx)(h.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,y.jsx)(Y,{title:A("total.earned"),value:null===i||void 0===i?void 0:i.total_earned,subtitle:A("last.30.days")})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,y.jsx)(Y,{title:A("delivery.earning"),value:null===i||void 0===i?void 0:i.delivery_earned,subtitle:A("last.30.days")})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,y.jsx)(Y,{title:A("total.order.tax"),value:null===i||void 0===i?void 0:i.tax_earned,subtitle:A("last.30.days")})}),(0,y.jsx)(h.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,y.jsx)(Y,{title:A("total.comission"),value:null===i||void 0===i?void 0:i.commission_earned,subtitle:A("last.30.days")})})]}),(0,y.jsxs)(u.Z,{gutter:24,children:[(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(N,{})}),(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(AA,{})}),(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(I,{})}),(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(M,{})}),(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(Q,{})}),(0,y.jsx)(h.Z,{span:12,children:(0,y.jsx)(eA,{counts:i})})]})]})}var rA=t(49986);function nA(){var A,e=(0,x.$)().t,t=(0,r.useState)(null),s=(0,P.Z)(t,2),i=s[0],l=s[1],o=(0,n.v9)((function(A){return A.statisticsCount}),n.wU).counts;return(0,r.useEffect)((function(){rA.Z.profileShow().then((function(A){var e=A.data;return l(e)}))}),[]),(0,y.jsxs)("div",{children:[(0,y.jsxs)(u.Z,{gutter:16,className:"mt-3",children:[(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:e("total.orders"),value:o.orders_count})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:e("in.progress.orders"),value:o.progress_orders_count})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:e("cancelled.orders"),value:o.cancel_orders_count})}),(0,y.jsx)(h.Z,{flex:"0 0 16.6%",children:(0,y.jsx)(O.Z,{title:e("delivered.orders"),value:o.delivered_orders_count})})]}),(0,y.jsx)(u.Z,{gutter:16,children:(0,y.jsx)(h.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,y.jsx)(Y,{title:e("balance"),value:null===i||void 0===i||null===(A=i.wallet)||void 0===A?void 0:A.price})})})]})}var sA=t(87569),iA={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},lA=function(A,e){return r.createElement(W.Z,(0,U.Z)((0,U.Z)({},A),{},{ref:e,icon:iA}))};lA.displayName="SmileOutlined";var oA=r.forwardRef(lA);function aA(){var A=(0,x.$)().t,e=(0,n.I0)(),t=(0,v.s0)(),r=(0,n.v9)((function(A){return A.auth}),n.wU).user;return(0,y.jsx)(m.Z,{children:(0,y.jsx)(sA.ZP,{icon:(0,y.jsx)(oA,{}),title:"".concat(A("welcome"),", ").concat(null===r||void 0===r?void 0:r.fullName),subTitle:A("welcome.manager"),extra:(0,y.jsx)(R.Z,{type:"primary",onClick:function(){e((0,s.bL)({id:"orders",url:"orders",name:A("orders")})),t("/orders")},children:A("get.started")})})})}function cA(){var A=(0,x.$)().t,e=(0,n.I0)(),t=(0,v.s0)(),r=(0,n.v9)((function(A){return A.auth}),n.wU).user;return(0,y.jsx)(m.Z,{children:(0,y.jsx)(sA.ZP,{icon:(0,y.jsx)(oA,{}),title:"".concat(A("welcome"),", ").concat(null===r||void 0===r?void 0:r.fullName),subTitle:A("welcome.manager"),extra:(0,y.jsx)(R.Z,{type:"primary",onClick:function(){e((0,s.bL)({id:"orders",url:"seller/orders",name:A("orders")})),t("/seller/orders")},children:A("get.started")})})})}function dA(){var A=(0,n.I0)(),e=(0,n.v9)((function(A){return A.menu}),n.wU).activeMenu,t=(0,n.v9)((function(A){return A.auth}),n.wU).user,u=(0,n.v9)((function(A){return A.statisticsCount}),n.wU).loading;(0,r.useEffect)((function(){e.refetch&&(!function(){var e={time:"subWeek"};switch(null===t||void 0===t?void 0:t.role){case"admin":A((0,i.dL)(e)),A((0,l.sl)(e)),A((0,o.hT)(e)),A((0,c.n8)(e)),A((0,d.yS)(e));break;case"manager":A((0,l.sl)(e)),A((0,o.hT)(e));break;case"seller":A((0,i.gm)(e)),A((0,l.n)(e)),A((0,o.t3)()),A((0,c._I)()),A((0,d.xe)());break;case"moderator":default:break;case"deliveryman":A((0,i.Hq)())}}(),A((0,s.A_)(e)))}),[e.refetch]);return(0,y.jsx)("div",{className:"h-100",children:u?(0,y.jsx)(a.Z,{size:"large"}):function(){switch(t.role){case"admin":case"seller":return(0,y.jsx)(tA,{});case"manager":return(0,y.jsx)(aA,{});case"moderator":return(0,y.jsx)(cA,{});case"deliveryman":return(0,y.jsx)(nA,{});default:return null}}()})}},14637:function(A,e,t){t.d(e,{Z:function(){return s}});t(47313);var r=t(77181),n=t(46417);function s(A){var e=A.title,t=void 0===e?"Orders":e,s=A.value,i=void 0===s?0:s,l=A.color,o=void 0===l?"grey":l,a=A.onClick;return(0,n.jsx)(r.Z,{className:"statistics-card",hoverable:!!a,onClick:a,children:(0,n.jsxs)("div",{className:"card-wrapper",children:[(0,n.jsx)("div",{className:"space"}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("h1",{className:"number",children:i})}),(0,n.jsx)("span",{className:"highlighter ".concat(o)}),t&&(0,n.jsx)("h4",{className:"title",children:t})]})})}}}]);