"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3774],{53233:function(e,n,t){var i=t(1413),l=t(29439),a=t(47313),r=t(56140),o=t(67251),s=t(45705),d=t(86345),u=t(78267),c=t(37388),v=t(59491),g=t(99587),m=t(24511),f=t(46417),h=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,Z=e.style,p=e.size,x=void 0===p?"":p,y=e.iconOnly,j=(0,m.$)().t,b=(0,a.useState)(!1),_=(0,l.Z)(b,2),k=_[0],w=_[1],C=(0,f.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,f.jsx)(o.Z.Item,{children:(0,f.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,f.jsx)(h,{children:e.title}),(0,f.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)}})]})},e+n)}))});return(0,f.jsx)(u.Z,{overlay:C,trigger:["click"],onVisibleChange:function(e){w(e)},visible:k,children:(0,f.jsx)(c.Z,{title:j("change.columns"),children:(0,f.jsx)(v.Z,{style:(0,i.Z)({},Z),size:x,icon:(0,f.jsx)(g.Z,{}),children:y?null:j("Columns")})})})}},97388:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(74165),l=t(15861),a=t(29439),r=t(47313),o=t(16609),s=t(97421),d=t.p+"static/media/pin.0e41858db80c699cd8a2.png",u=t(31881),c=t.n(u);function v(e){return g.apply(this,arguments)}function g(){return g=(0,l.Z)((0,i.Z)().mark((function e(n){var t,l,a=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"AIzaSyDI0dNtJchqNdUbml5PyVGrUqJDSuJLMdg",l={latlng:"".concat(null===n||void 0===n?void 0:n.lat,",").concat(null===n||void 0===n?void 0:n.lng),key:t},e.abrupt("return",c().get("https://maps.googleapis.com/maps/api/geocode/json",{params:l}).then((function(e){var n;return null===(n=e.data.results[0])||void 0===n?void 0:n.formatted_address})).catch((function(e){return"not found"})));case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var m=t(5958),f=t(46417);var h=(0,o.GoogleApiWrapper)({apiKey:s.kr})((function(e){var n=(0,r.useState)(),t=(0,a.Z)(n,2),u=t[0],c=t[1],g=function(){var n=(0,l.Z)((0,i.Z)().mark((function n(t,l,a){var r,o,d;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.latLng,o={lat:r.lat(),lng:r.lng()},e.setLocation(o),n.next=5,v(o,s.kr);case 5:d=n.sent,e.setAddress(d);case 7:case"end":return n.stop()}}),n)})));return function(e,t,i){return n.apply(this,arguments)}}(),h=function(){var n=(0,l.Z)((0,i.Z)().mark((function n(t){var l,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={lat:null===t||void 0===t?void 0:t.lat,lng:null===t||void 0===t?void 0:t.lng},e.setLocation(l),n.next=4,v(l,s.kr);case 4:a=n.sent,e.setAddress(a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){var n={lat:e.coords.latitude,lng:e.coords.longitude};c(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){Z()}),[]);for(var p=[{lat:Number(e.location.lat)||0,lng:Number(e.location.lng)||0}],x=new e.google.maps.LatLngBounds,y=0;y<p.length;y++)x.extend(p[y]);return(0,f.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,f.jsx)("button",{className:"map-button",type:"button",onClick:function(){Z(),h(u)},children:(0,f.jsx)(m.nDs,{})}),(0,f.jsx)(o.Map,{cursor:"pointer",onClick:g,google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,f.jsx)(o.Marker,{position:e.location,icon:{url:d,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},50756:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var i=t(4942),l=t(93433),a=t(1413),r=t(29439),o=t(55768),s=t(12019),d=t(66461),u=t(47515),c=t(55613),v=t(59491),g=t(45705),m=t(77181),f=t(74294),h=t(78508),Z=t(47313),p=t(24511),x=t(2717),y=t(58467),j=t(34491),b=t(55940),_=t(53233),k=t(74580),w=t(81566),C=t(90954),I=t(45321),S=t(69658),q=t(84017),z=t(5958),L=t(84697),M=t(84695),N=t(97421),U=t(18478),B=(t(84618),t(17649)),F=t(46417),W=function(){return(0,F.jsx)("img",{src:U,width:"50",alt:"Pin"})},A=function(e){var n,t,i,l,a=e.id,r=e.handleCancel,o=(0,p.$)().t,s=(0,x.v9)((function(e){return e.globalSettings}),x.wU).settings,d=(0,B.Z)(s),u={lat:null===a||void 0===a||null===(n=a.delivery_man_setting)||void 0===n||null===(t=n.location)||void 0===t?void 0:t.latitude,lng:null===a||void 0===a||null===(i=a.delivery_man_setting)||void 0===i||null===(l=i.location)||void 0===l?void 0:l.longitude},c=(0,x.v9)((function(e){return e.globalSettings.settings}),x.wU).google_map_key;return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(M.Z,{visible:!!a,title:o("show.locations"),closable:!1,style:{minWidth:"80vw"},footer:[(0,F.jsx)(v.Z,{type:"default",onClick:r,children:o("cancel")},"cancelBtn")],children:(0,F.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,F.jsx)(L.ZP,{bootstrapURLKeys:{key:void 0===c?N.kr:c},defaultZoom:10,center:d,options:{fullscreenControl:!1},children:null!==(null===a||void 0===a?void 0:a.delivery_man_setting)?(0,F.jsx)(W,{lat:null===u||void 0===u?void 0:u.lat,lng:null===u||void 0===u?void 0:u.lng}):null})})})})},D=t(18197),P=t(68197),V=t(59624),E=t(66672),G=t(51282),K=t(37889),$=t(97388),J=[{label:"Benzine",value:"benzine"},{label:"Diesel",value:"diesel"},{label:"Gas",value:"gas"},{label:"Motorbike",value:"motorbike"},{label:"Bike",value:"bike"},{label:"Foot",value:"foot"},{label:"Electric",value:"electric"}],O=function(e){var n=e.data,t=e.handleCancel,i=(0,p.$)().t,l=D.Z.useForm(),o=(0,r.Z)(l,1)[0],s=(0,x.I0)(),d=(0,Z.useState)(!1),u=(0,r.Z)(d,2),c=u[0],m=u[1],h=(0,Z.useState)(!1),y=(0,r.Z)(h,2),j=y[0],b=y[1],_=(0,Z.useState)([]),k=(0,r.Z)(_,2),C=k[0],S=k[1],q=(0,x.v9)((function(e){return e.globalSettings}),x.wU).settings,z=(0,Z.useState)((0,B.Z)(q)),L=(0,r.Z)(z,2),N=L[0],U=L[1],W=function(e){return e.map((function(e){return{uid:e.id,name:e.path,url:e.path}}))};return(0,Z.useEffect)((function(){var e;n.settingsId&&(e=n.settingsId,b(!0),I.Z.getById(e).then((function(e){var n,t,i,l,r,s,d,u,c=(0,a.Z)((0,a.Z)({},e.data),{},{user_id:{label:e.data.deliveryMan.firstname+" "+e.data.deliveryMan.firstname,value:e.data.deliveryMan.id,images:W(e.data.galleries),location:{lat:null===(n=e.data)||void 0===n||null===(t=n.location)||void 0===t?void 0:t.latitude,lng:null===(i=e.data)||void 0===i||null===(l=i.location)||void 0===l?void 0:l.longitude}}});U({lat:null===(r=e.data)||void 0===r||null===(s=r.location)||void 0===s?void 0:s.latitude,lng:null===(d=e.data)||void 0===d||null===(u=d.location)||void 0===u?void 0:u.longitude}),S(W(e.data.galleries)),o.setFieldsValue(c)})).finally((function(){return b(!1)})))}),[]),(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(M.Z,{visible:!!n,title:n.id?i("edit.delivery.setting"):i("add.delivery.setting"),closable:!1,style:{minWidth:"80vw"},footer:[(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(v.Z,{type:"primary",htmlType:"submit",onClick:function(){return o.submit()},loading:c,children:i("submit")},"submit"),(0,F.jsx)(v.Z,{type:"default",onClick:t,children:i("cancel")},"cancelBtn")]})],children:(0,F.jsx)(D.Z,{name:"basic",layout:"vertical",onFinish:function(e){m(!0);var i=(0,a.Z)((0,a.Z)({},e),{},{user_id:n.id,images:C.map((function(e){return e.name})),location:{latitude:N.lat,longitude:N.lng}});n.settingsId?I.Z.update(n.settingsId,i).then((function(){t(),s((0,w.W)())})).finally((function(){return m(!0)})):I.Z.create(i).then((function(){t(),s((0,w.W)())})).finally((function(){return m(!0)}))},form:o,children:j?(0,F.jsx)(G.Z,{}):(0,F.jsxs)(P.Z,{gutter:12,children:[(0,F.jsx)(V.Z,{span:12,children:(0,F.jsx)(D.Z.Item,{label:i("brand"),name:"brand",rules:[{required:!0,message:i("required")}],children:(0,F.jsx)(E.Z,{})})}),(0,F.jsx)(V.Z,{span:12,children:(0,F.jsx)(D.Z.Item,{label:i("model"),name:"model",rules:[{required:!0,message:i("required")}],children:(0,F.jsx)(E.Z,{})})}),(0,F.jsx)(V.Z,{span:12,children:(0,F.jsx)(D.Z.Item,{label:i("type.of.technique"),name:"type_of_technique",rules:[{required:!0,message:i("required")}],children:(0,F.jsx)(f.Z,{options:J})})}),(0,F.jsx)(V.Z,{span:12,children:(0,F.jsx)(D.Z.Item,{label:i("car.number"),name:"number",rules:[{required:!0,message:i("required")}],children:(0,F.jsx)(E.Z,{})})}),(0,F.jsx)(V.Z,{span:12,children:(0,F.jsx)(D.Z.Item,{label:i("car.color"),name:"color",rules:[{required:!0,message:i("required")}],children:(0,F.jsx)(E.Z,{})})}),(0,F.jsx)(V.Z,{span:12,children:(0,F.jsx)(D.Z.Item,{label:i("image"),name:"images",children:(0,F.jsx)(K.Z,{type:"deliveryman/settings",imageList:C,setImageList:S,form:o,length:"1",multiple:!0})})}),(0,F.jsx)(V.Z,{span:24,children:(0,F.jsx)(D.Z.Item,{label:i("map"),name:"location",children:(0,F.jsx)($.Z,{location:N,setLocation:U})})})]})})})})},T=t(41481),R=t(80314),H=t(13945),Y=[{label:"Benzine",value:"benzine"},{label:"Diesel",value:"diesel"},{label:"Gas",value:"gas"},{label:"Motorbike",value:"motorbike"},{label:"Bike",value:"bike"},{label:"Foot",value:"foot"}],Q=function(){var e,n,t,L=(0,p.$)().t,M=(0,x.I0)(),N=(0,y.s0)(),U=(0,Z.useContext)(k._).setIsModalVisible,B=(0,Z.useState)(null),W=(0,r.Z)(B,2),D=W[0],P=W[1],V=(0,Z.useState)(!1),E=(0,r.Z)(V,2),G=E[0],K=E[1],$=(0,Z.useState)(null),J=(0,r.Z)($,2),Q=J[0],X=J[1],ee=(0,Z.useState)(null),ne=(0,r.Z)(ee,2),te=ne[0],ie=ne[1],le=(0,Z.useState)(null),ae=(0,r.Z)(le,2),re=ae[0],oe=ae[1],se=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,de=null===se||void 0===se?void 0:se.data,ue={search:null!==de&&void 0!==de&&de.search?de.search:void 0,type_of_technique:null===de||void 0===de?void 0:de.type,sort:null===de||void 0===de?void 0:de.sort,column:null===de||void 0===de?void 0:de.column,pageSize:null===de||void 0===de?void 0:de.per_page,page:(null===de||void 0===de?void 0:de.page)||1},ce=(0,x.v9)((function(e){return e.deliveries}),x.wU),ve=ce.delivery,ge=ce.loading,me=ce.meta,fe=(0,x.v9)((function(e){return e.currency}),x.wU).defaultCurrency,he=function(){ie(null),oe(null)},Ze=(0,Z.useState)([{title:L("id"),dataIndex:"id",key:"id",is_show:!0},{title:L("name"),dataIndex:"name",key:"name",is_show:!0,render:function(e,n){return(null===n||void 0===n?void 0:n.firstname)+" "+(null===n||void 0===n?void 0:n.lastname)}},{title:L("orders"),dataIndex:"count",key:"count",is_show:!0,sorter:!0,render:function(e,n){return null===n||void 0===n?void 0:n.deliveryman_orders.length}},{title:L("rate"),dataIndex:"rating",key:"rating",is_show:!0,sorter:!0,render:function(e,n){return(0,F.jsx)(c.Z,{className:"mt-3 ml-3",disabled:!0,allowHalf:!0,value:void 0!==(null===n||void 0===n?void 0:n.assign_reviews_avg_rating)?null===n||void 0===n?void 0:n.assign_reviews_avg_rating:0})}},{title:L("wallet"),dataIndex:"wallet_sum",key:"wallet_sum",is_show:!0,sorter:!0,render:function(e,n){var t;return(0,q.Z)(null===n||void 0===n||null===(t=n.wallet)||void 0===t?void 0:t.price,fe.symbol)}},{title:L("delivery.man.setting"),dataIndex:"setting",key:"setting",is_show:!0,render:function(e,n){return null===(null===n||void 0===n?void 0:n.delivery_man_setting)?(0,F.jsx)(v.Z,{icon:(0,F.jsx)(o.Z,{}),onClick:function(){return oe({id:null===n||void 0===n?void 0:n.id})},children:L("add.settings")}):(0,F.jsxs)(g.Z,{children:[(0,F.jsxs)("span",{children:[L("brand"),": ",null===n||void 0===n?void 0:n.delivery_man_setting.brand,(0,F.jsx)("br",{}),L("model"),": ",null===n||void 0===n?void 0:n.delivery_man_setting.model,(0,F.jsx)("br",{}),L("number"),": ",null===n||void 0===n?void 0:n.delivery_man_setting.number,(0,F.jsx)("br",{}),L("color"),": ",null===n||void 0===n?void 0:n.delivery_man_setting.color]}),null!==(null===n||void 0===n?void 0:n.delivery_man_setting)?(0,F.jsx)(s.Z,{onClick:function(){var e;return oe({settingsId:null===n||void 0===n||null===(e=n.delivery_man_setting)||void 0===e?void 0:e.id,id:null===n||void 0===n?void 0:n.id})}}):""]})}},{title:L("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(v.Z,{icon:(0,F.jsx)(z.Y4r,{}),onClick:function(){return ie(n)}}),(0,F.jsx)(v.Z,{icon:(0,F.jsx)(d.Z,{}),onClick:function(){return function(e){M((0,C.bL)({name:"delivery.orders",id:"delivery_orders",url:"delivery/orders/".concat(e.id)})),N("/delivery/orders/".concat(e.id))}(n)}}),(0,F.jsx)(v.Z,{type:"primary",icon:(0,F.jsx)(s.Z,{}),onClick:function(){return function(e){M((0,C.bL)({url:"user/delivery/".concat(e.uuid),id:"delivery_edit",name:L("delivery.edit")})),N("/user/delivery/".concat(e.uuid))}(n)}}),(0,F.jsx)(b.Z,{icon:(0,F.jsx)(u.Z,{}),onClick:function(){P([n.id]),U(!0),X(!0)}})]})}}]),pe=(0,r.Z)(Ze,2),xe=pe[0],ye=pe[1];(0,Z.useEffect)((function(){se.refetch&&(M((0,w.W)(ue)),M((0,C.A_)(se)))}),[se.refetch]),(0,R.Z)((function(){M((0,w.W)(ue))}),[se.data]);var je={selectedRowKeys:D,onChange:function(e){P(e)}},be=function(e,n){M((0,C.nc)({activeMenu:se,data:(0,a.Z)((0,a.Z)({},se.data),{},(0,i.Z)({},n,e))}))};return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(m.Z,{title:L("delivery"),extra:(0,F.jsxs)(g.Z,{children:[(0,F.jsx)(f.Z,{placeholder:L("type.of.technique"),style:{width:"150px"},options:Y,onChange:function(e){return be(e,"type")},allowClear:!0}),(0,F.jsx)(b.Z,{size:"",onClick:function(){null===D||0===D.length?j.Am.warning(L("select.the.product")):(U(!0),X(!1))},children:L("delete.selected")}),(0,F.jsx)(v.Z,{type:"primary",icon:(0,F.jsx)(o.Z,{}),onClick:function(){M((0,C.bL)({id:"user-add-role",url:"add/user/delivery/".concat("deliveryman"),name:L("add.".concat("deliveryman"))})),N("/add/user/delivery/".concat("deliveryman"))},children:L("add.delivery")}),(0,F.jsx)(_.Z,{columns:xe,setColumns:ye})]}),children:[(0,F.jsx)(T.Z,{placeholder:L("search"),className:"w-25",handleChange:function(e){return be(e,"search")},resetSearch:!(null!==(e=se.data)&&void 0!==e&&e.search),defaultValue:null===(n=se.data)||void 0===n?void 0:n.search}),(0,F.jsx)(h.Z,{scroll:{x:!0},rowSelection:je,columns:null===xe||void 0===xe?void 0:xe.filter((function(e){return e.is_show})),dataSource:ve,pagination:{pageSize:me.per_page,page:(null===de||void 0===de?void 0:de.page)||1,total:me.total,defaultCurrent:null===de||void 0===de?void 0:de.page,current:null===(t=se.data)||void 0===t?void 0:t.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,l=e.current,r=t.field,o=t.order,s=(0,H.Z)(o);M((0,C.nc)({activeMenu:se,data:(0,a.Z)((0,a.Z)({},de),{},{perPage:i,page:l,column:r,sort:s})}))},loading:ge}),(0,F.jsx)(S.Z,{click:function(){K(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,l.Z)(D.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));I.Z.delete(e).then((function(){j.Am.success(L("successfully.deleted")),M((0,w.W)(ue)),U(!1),X(null)})).finally((function(){return K(!1)}))},text:L(Q?"delete":"all.delete"),setText:P,loading:G}),te&&(0,F.jsx)(A,{id:te,handleCancel:he}),re&&(0,F.jsx)(O,{data:re,handleCancel:he})]})})}}}]);