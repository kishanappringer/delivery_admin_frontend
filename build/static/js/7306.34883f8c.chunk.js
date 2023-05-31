"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7306],{57306:function(t,e,n){n.r(e);var o=n(29439),r=n(56140),i=n(99096),l=n(72652),a=n(68197),u=n(59624),c=n(45705),d=n(77181),s=n(59491),v=n(78508),h=n(47313),f=n(41481),p=n(63243),g=n(26441),y=n(90954),x=n(2717),Z=n(22133),_=n(70816),m=n.n(_),j=n(93131),b=n(53233),w=n(22206),C=n(80314),k=n(58467),q=n(2135),S=n(24511),N=n(84017),I=n(46417),z=r.Z.Text,D=r.Z.Title,O=i.Z.RangePicker;e.default=function(){var t,e,n,r=(0,x.I0)(),i=(0,k.s0)(),_=(0,S.$)().t,R=(0,h.useContext)(j.G),M=R.date_from,U=R.date_to,V=R.by_time,E=R.chart,H=R.handleChart,T=R.handleDateRange,K=(0,x.v9)((function(t){return t.menu}),x.wU).activeMenu,L=(0,x.v9)((function(t){return t.categoryReport}),x.wU),A=L.loading,B=L.chartData,G=L.productList,P=(0,x.v9)((function(t){return t.currency}),x.wU).defaultCurrency,$=(0,h.useState)([]),F=(0,o.Z)($,2),J=F[0],Q=F[1],W=(0,h.useState)(),X=(0,o.Z)(W,2),Y=X[0],tt=X[1],et=(0,h.useState)(!1),nt=(0,o.Z)(et,2),ot=nt[0],rt=nt[1],it=(0,h.useState)([{title:_("category"),key:"category",dataIndex:"category",render:function(t,e){var n;console.log("data => ",e);var o=null===e||void 0===e||null===(n=e.title)||void 0===n?void 0:n.split("-");return null===o||void 0===o?void 0:o.map((function(t,n){return n===(null===o||void 0===o?void 0:o.length)-1?(0,I.jsx)(q.rU,{to:"/report/products?category_id=".concat(null===e||void 0===e?void 0:e.id),children:t}):t}))},sorter:function(t,e){var n;return null===t||void 0===t||null===(n=t.title)||void 0===n?void 0:n.localeCompare(null===e||void 0===e?void 0:e.title)},is_show:!0},{title:_("item.sold"),dataIndex:"quantity",key:"quantity",is_show:!0,sorter:function(t,e){return(null===t||void 0===t?void 0:t.quantity)-(null===e||void 0===e?void 0:e.quantity)}},{title:_("price"),dataIndex:"price",key:"price",is_show:!0,sorter:function(t,e){return(null===t||void 0===t?void 0:t.price)-(null===e||void 0===e?void 0:e.price)},render:function(t,e){return(0,N.Z)(null===e||void 0===e?void 0:e.price,null===P||void 0===P?void 0:P.symbol)}},{title:_("products"),key:"products_count",dataIndex:"products_count",sorter:function(t,e){return(null===t||void 0===t?void 0:t.products_count)-(null===e||void 0===e?void 0:e.products_count)},render:function(t,e){return(0,I.jsx)("a",{onClick:function(){return t=e,r((0,y.bL)({url:"report/products",id:"report.products",name:_("report.products")})),void i("/report/products?category_id=".concat(t.id));var t},children:null===e||void 0===e?void 0:e.products_count})},is_show:!0},{title:_("orders"),key:"count",dataIndex:"count",is_show:!0,sorter:function(t,e){return(null===t||void 0===t?void 0:t.count)-(null===e||void 0===e?void 0:e.count)}}]),lt=(0,o.Z)(it,2),at=lt[0],ut=lt[1],ct=(0,h.useMemo)((function(){return[{value:"quantity",label:"Item sold",qty:"total_quantity"},{value:"price",label:"Net Sales",qty:"total_price"},{value:"count",label:"Orders",qty:"total_count"},{value:"total_products_count",label:"Order products",qty:"total_products_count"}]}),[]),dt=function(){ct.find((function(t){return t.value===E}))&&r((0,w.VT)({date_from:M,date_to:U,type:V,chart:E,search:Y}))};(0,h.useEffect)((function(){ct.every((function(t){return t.value!==E}))&&H(ct[0].value)}),[]),(0,h.useEffect)((function(){K.refetch&&(dt(),r((0,y.A_)(K)))}),[K.refetch]),(0,C.Z)((function(){dt()}),[U,V,E,Y,M]);var st={selectedRowKeys:J,onChange:function(t){Q(t)}};return console.log("tableData",Object.keys(G)),(0,I.jsxs)(l.Z,{size:"large",spinning:A,children:[(0,I.jsx)(a.Z,{gutter:24,className:"mb-3",children:(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(c.Z,{size:"large",children:(0,I.jsx)(O,{defaultValue:[m()(M),m()(U)],onChange:T})})})}),(0,I.jsx)(a.Z,{gutter:24,className:"report-products",children:null===ct||void 0===ct?void 0:ct.map((function(t){return(0,I.jsx)(u.Z,{span:6,onClick:function(){return H(t.value)},children:(0,I.jsxs)(d.Z,{className:E===t.value&&"active",children:[(0,I.jsx)(a.Z,{className:"mb-5",children:(0,I.jsx)(u.Z,{children:(0,I.jsx)(z,{children:t.label})})}),(0,I.jsx)(a.Z,{gutter:24,children:(0,I.jsx)(u.Z,{span:12,children:(0,I.jsx)(D,{level:2,children:"total_price"===t.qty?(0,N.Z)(B[t.qty]):B[t.qty]})})})]})},t.label)}))}),(0,I.jsx)(Z.Z,{reportData:B,chart_data:"quantities_sum"}),(0,I.jsxs)(d.Z,{children:[(0,I.jsxs)(c.Z,{className:"align-items-center justify-content-between mb-4 w-100",children:[(0,I.jsx)(D,{level:2,className:"mb-0",children:_("categories")}),(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(f.Z,{style:{width:"100%"},handleChange:function(t){return tt(t)},defaultValue:null===(t=K.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(e=K.data)&&void 0!==e&&e.search)}),(0,I.jsx)(s.Z,{icon:(0,I.jsx)(p.Z,{}),loading:ot,disabled:0===(null===G||void 0===G||null===(n=G.data)||void 0===n?void 0:n.length),onClick:function(){rt(!0),g.Z.getCategoriesChart({date_from:M,date_to:U,type:V,export:"excel"}).then((function(t){var e=t.data.link;e&&(window.location.href=e)})).finally((function(){return rt(!1)}))},children:_("download")}),(0,I.jsx)(b.Z,{columns:at,setColumns:ut})]})]}),(0,I.jsx)(v.Z,{scroll:{x:!0},rowSelection:st,columns:null===at||void 0===at?void 0:at.filter((function(t){return t.is_show})),dataSource:Object.values(G)||[],rowKey:function(t){return t.id},loading:A,pagination:{pageSize:null===G||void 0===G?void 0:G.per_page,page:(null===G||void 0===G?void 0:G.current_page)||1,total:null===G||void 0===G?void 0:G.total,defaultCurrent:1}})]})]})}},63243:function(t,e,n){n.d(e,{Z:function(){return u}});var o=n(1413),r=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"},l=n(17469),a=function(t,e){return r.createElement(l.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:e,icon:i}))};a.displayName="CloudDownloadOutlined";var u=r.forwardRef(a)}}]);