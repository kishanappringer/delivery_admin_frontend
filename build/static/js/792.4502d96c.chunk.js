(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[792],{75049:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4942),i=n(18197),a=(n(47313),n(47168)),s=n(24511),l=n(2717),o=n(97421),d=n(46417);function c(e){var t=e.setLocation,n=e.form,c=e.item,u=e.idx,m=e.defaultLang,p=(0,s.$)().t,h=(0,l.v9)((function(e){return e.globalSettings.settings}),l.wU).google_map_key,f=(0,a.usePlacesWidget)({apiKey:h||o.kr,onPlaceSelected:function(e){var i={lat:null===e||void 0===e?void 0:e.geometry.location.lat(),lng:null===e||void 0===e?void 0:e.geometry.location.lng()};t(i),n.setFieldsValue((0,r.Z)({},"address[".concat(m,"]"),null===e||void 0===e?void 0:e.formatted_address))}}).ref;return(0,d.jsx)(i.Z.Item,{label:p("address"),name:"address[".concat(c.locale,"]"),rules:[{required:c.locale===m,message:p("required")}],hidden:c.locale!==m,children:(0,d.jsx)("input",{className:"address-input",ref:f,placeholder:""})},"address"+u)}},10823:function(e,t,n){"use strict";var r=n(93433),i=n(29439),a=n(16609),s=n(47313),l=n(97421),o=n(5958),d=n(46417);t.Z=(0,a.GoogleApiWrapper)({apiKey:l.kr,libraries:["places"]})((function(e){var t,n,l=(0,s.useState)({lat:38.58799374569842,lng:-98.47949767583457}),c=(0,i.Z)(l,2),u=c[0],m=c[1],p=(0,s.useState)(e.triangleCoords?e.triangleCoords:[]),h=(0,i.Z)(p,2),f=h[0],g=h[1],Z=(0,s.useState)(!!e.triangleCoords),v=(0,i.Z)(Z,2),x=v[0],j=v[1],y=(0,s.useState)(null),b=(0,i.Z)(y,2),k=b[0],w=b[1];e.setMerge(x);(0,s.useEffect)((function(){w(!0)}),[]);for(var _=e.triangleCoords.map((function(e){return{lat:Number(e.lat||"0"),lng:Number(e.lng||"0")}})),S=new e.google.maps.LatLngBounds,C=0;C<_.length;C++)S.extend(_[C]);return(0,d.jsxs)("div",{className:"map-container",style:{height:500,width:"100%"},children:[(0,d.jsx)("button",{className:"map-button",type:"button",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){m({lat:e.coords.latitude,lng:e.coords.longitude})}))},children:(0,d.jsx)(o.nDs,{})}),(0,d.jsxs)(a.Map,{options:{minZoom:15,maxZoom:15},cursor:"pointer",onClick:function(t,n,i){w(!1);var a=i.latLng,s=a.lat(),l=a.lng();x?(g([]),e.settriangleCoords([{lat:s,lng:l}]),m({lat:s,lng:l}),j(!1)):e.settriangleCoords((function(e){return[].concat((0,r.Z)(e),[{lat:s,lng:l}])}))},maxZoom:16,minZoom:2,google:e.google,initialCenter:u,center:u,onReady:function(e,t){t.setOptions({draggableCursor:"crosshair",draggingCursor:"grab"})},bounds:k&&S,className:"clickable",children:[null===(t=e.triangleCoords)||void 0===t?void 0:t.map((function(t,n){return(0,d.jsx)(a.Marker,{onClick:function(t){return function(t){var n,r;j(!!e.triangleCoords),(null===(n=e.triangleCoords[0])||void 0===n?void 0:n.lat)===(null===(r=t.position)||void 0===r?void 0:r.lat)&&e.triangleCoords.length>1&&(g(e.triangleCoords),e.setLocation(e.triangleCoords),j(!0),w(!0))}(t)},position:t,icon:{url:"https://upload.wikimedia.org/wikipedia/commons/9/94/Circle-image.svg",scaledSize:new e.google.maps.Size(10,10)},className:"marker"},n)})),null!==f&&void 0!==f&&f.length?(0,d.jsx)(a.Polygon,{path:e.triangleCoords,strokeColor:"black",strokeOpacity:.8,strokeWeight:3,fillColor:"black",fillOpacity:.35},null===f||void 0===f?void 0:f.length):(0,d.jsx)(a.Polyline,{path:e.triangleCoords,strokeColor:"black",strokeOpacity:.8,strokeWeight:3,fillColor:"black",fillOpacity:.35},null===(n=e.triangleCoords)||void 0===n?void 0:n.length)]})]})}))},97388:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(74165),i=n(15861),a=n(29439),s=n(47313),l=n(16609),o=n(97421),d=n.p+"static/media/pin.0e41858db80c699cd8a2.png",c=n(31881),u=n.n(c);function m(e){return p.apply(this,arguments)}function p(){return p=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"AIzaSyDI0dNtJchqNdUbml5PyVGrUqJDSuJLMdg",i={latlng:"".concat(null===t||void 0===t?void 0:t.lat,",").concat(null===t||void 0===t?void 0:t.lng),key:n},e.abrupt("return",u().get("https://maps.googleapis.com/maps/api/geocode/json",{params:i}).then((function(e){var t;return null===(t=e.data.results[0])||void 0===t?void 0:t.formatted_address})).catch((function(e){return"not found"})));case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var h=n(5958),f=n(46417);var g=(0,l.GoogleApiWrapper)({apiKey:o.kr})((function(e){var t=(0,s.useState)(),n=(0,a.Z)(t,2),c=n[0],u=n[1],p=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i,a){var s,l,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=a.latLng,l={lat:s.lat(),lng:s.lng()},e.setLocation(l),t.next=5,m(l,o.kr);case 5:d=t.sent,e.setAddress(d);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),g=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var i,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={lat:null===n||void 0===n?void 0:n.lat,lng:null===n||void 0===n?void 0:n.lng},e.setLocation(i),t.next=4,m(i,o.kr);case 4:a=t.sent,e.setAddress(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};u(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){Z()}),[]);for(var v=[{lat:Number(e.location.lat)||0,lng:Number(e.location.lng)||0}],x=new e.google.maps.LatLngBounds,j=0;j<v.length;j++)x.extend(v[j]);return(0,f.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,f.jsx)("button",{className:"map-button",type:"button",onClick:function(){Z(),g(c)},children:(0,f.jsx)(h.nDs,{})}),(0,f.jsx)(l.Map,{cursor:"pointer",onClick:p,google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,f.jsx)(l.Marker,{position:e.location,icon:{url:d,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},21429:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});var r=[{title:"monday",disabled:!1},{title:"tuesday",disabled:!1},{title:"wednesday",disabled:!1},{title:"thursday",disabled:!1},{title:"friday",disabled:!1},{title:"saturday",disabled:!1},{title:"sunday",disabled:!1}]},33834:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n(4942),i=n(1413),a=n(58467),s=n(74776),l=n.n(s),o=function(){var e=(0,a.s0)(),t=(0,a.TH)(),n=l().parse(t.search,{ignoreQueryPrefix:!0});return{values:n,set:function(t,a){return e({search:l().stringify((0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},t,a)))})},reset:function(t){var r=(0,i.Z)({},n);r[t]&&delete r[t],e({search:l().stringify((0,i.Z)({},r))})},clear:function(){return e({search:l().stringify({})})},merge:function(t){return e({search:l().stringify((0,i.Z)((0,i.Z)({},n),t))})}}}},73980:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return oe},steps:function(){return le}});var r=n(93433),i=n(4942),a=n(1413),s=n(29439),l=n(47313),o=n(83999),d=n(77181),c=n(2717),u=n(90954),m=n(73431),p=n(92102),h=n(24511),f=n(33834),g=n(18197),Z=n(45705),v=n(59491),x=n(74165),j=n(15861),y=n(68197),b=n(59624),k=n(66672),w=n(86345),_=n(6289),S=n(74294),C=n(89281),I=n(52421),q=n(49986),N=n(97388),L=n(75049),M=n(47647),F=n(37889),D=n(79492),U=n(46417),z=function(e){var t=e.logoImage,n=e.setLogoImage,r=e.backImage,a=e.setBackImage,s=e.form,l=e.location,o=e.setLocation,u=(0,h.$)().t,m=(0,c.v9)((function(e){return e.formLang}),c.wU),p=m.defaultLang,f=m.languages,Z=(0,D.Z)().isDemo;function v(){return v=(0,j.Z)((0,x.Z)().mark((function e(t){var n;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:t,"roles[0]":"user"},e.abrupt("return",q.Z.search(n).then((function(e){return e.data.map((function(e){return{label:e.firstname+" "+(e.lastname||""),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function z(){return(z=(0,j.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.Z.getAll({type:"shop"}).then((function(e){return e.data.map((function(e){var t;return{label:(null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:e.id}}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsxs)(b.Z,{span:24,children:[(0,U.jsx)(d.Z,{children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:12,children:(0,U.jsx)(g.Z.Item,{label:u("logo.image"),children:(0,U.jsx)(F.Z,{type:"shops/logo",imageList:t,setImageList:n,form:s,multiple:!1,name:"logo_img"})})}),(0,U.jsx)(b.Z,{span:12,children:(0,U.jsx)(g.Z.Item,{label:u("background.image"),children:(0,U.jsx)(F.Z,{type:"shops/background",imageList:r,setImageList:a,form:s,multiple:!1,name:"background_img"})})}),(0,U.jsx)(b.Z,{span:10,children:(0,U.jsx)(g.Z.Item,{label:u("status.note"),name:"status_note",children:(0,U.jsx)(I.Z,{rows:4})})}),(0,U.jsx)(b.Z,{span:10,children:(0,U.jsx)(g.Z.Item,{name:"status",label:u("status"),children:(0,U.jsx)(k.Z,{disabled:!0})})}),(0,U.jsx)(b.Z,{span:4,children:(0,U.jsx)(g.Z.Item,{label:u("visibility"),name:"visibility",valuePropName:"checked",children:(0,U.jsx)(w.Z,{disabled:!0})})})]})}),(0,U.jsx)(d.Z,{title:u("delivery"),children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:12,children:(0,U.jsx)(g.Z.Item,{name:"price",label:u("min.price"),rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{className:"w-100"})})}),(0,U.jsx)(b.Z,{span:12,children:(0,U.jsx)(g.Z.Item,{name:"price_per_km",label:u("price.per.km"),rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{className:"w-100"})})})]})})]}),(0,U.jsxs)(b.Z,{span:24,children:[(0,U.jsx)(d.Z,{title:u("general"),children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:8,children:f.map((function(e,t){return(0,U.jsx)(g.Z.Item,{label:u("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===p,message:u("required")},{min:2,message:u("title.requared")}],hidden:e.locale!==p,children:(0,U.jsx)(k.Z,{})},"title"+t)}))}),(0,U.jsx)(b.Z,{span:8,hidden:!Z,children:(0,U.jsx)(g.Z.Item,{label:u("seller"),name:"user",rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(C.h,{fetchOptions:function(e){return v.apply(this,arguments)}})})}),(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{label:u("categories"),name:"categories",rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(C.h,{mode:"multiple",placeholder:"Select categories",fetchOptions:function(){return z.apply(this,arguments)},style:{minWidth:150}})})}),(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{label:u("phone"),name:"phone",rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{min:0,className:"w-100"})})}),(0,U.jsx)(b.Z,{span:16,children:f.map((function(e,t){return(0,U.jsx)(g.Z.Item,{label:u("description"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===p,message:u("required")},{min:2,message:u("title.requared")}],hidden:e.locale!==p,children:(0,U.jsx)(I.Z,{rows:4})},"desc"+t)}))})]})}),(0,U.jsx)(d.Z,{title:u("order.info"),children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{label:u("min.amount"),name:"min_amount",rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{min:0,className:"w-100"})})}),(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{label:u("tax"),name:"tax",rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{min:0,addonAfter:"%",className:"w-100"})})}),(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{label:u("admin.comission"),name:"percentage",rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{min:0,className:"w-100",addonAfter:"%"})})})]})}),(0,U.jsx)(d.Z,{title:u("delivery.time"),children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{name:"delivery_time_type",label:u("delivery_time_type"),rules:[{required:!0,message:u("required")}],children:(0,U.jsxs)(S.Z,{className:"w-100",children:[(0,U.jsx)(S.Z.Option,{value:"minute",label:u("minute")}),(0,U.jsx)(S.Z.Option,{value:"day",label:u("day")}),(0,U.jsx)(S.Z.Option,{value:"month",label:u("month")})]})})}),(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{name:"delivery_time_from",label:u("delivery_time_from"),rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{className:"w-100"})})}),(0,U.jsx)(b.Z,{span:8,children:(0,U.jsx)(g.Z.Item,{name:"delivery_time_to",label:u("delivery_time_to"),rules:[{required:!0,message:u("required")}],children:(0,U.jsx)(_.Z,{className:"w-100"})})})]})})]}),(0,U.jsx)(b.Z,{span:24,children:(0,U.jsx)(d.Z,{title:u("address"),children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:12,children:f.map((function(e,t){return(0,U.jsx)(L.Z,{setLocation:o,form:s,item:e,idx:t,defaultLang:p},t)}))}),(0,U.jsx)(b.Z,{span:24,children:(0,U.jsx)(N.Z,{location:l,setLocation:o,setAddress:function(e){return s.setFieldsValue((0,i.Z)({},"address[".concat(p,"]"),e))}})})]})})})]})},O=n(17649),P=function(e){var t,n,r,i,o,d,m,f,x,j=e.next,y=(0,h.$)().t,b=g.Z.useForm(),k=(0,s.Z)(b,1)[0],w=(0,c.I0)(),_=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,S=(0,c.v9)((function(e){return e.globalSettings}),c.wU).settings,C=(0,l.useState)(null!==_&&void 0!==_&&null!==(t=_.data)&&void 0!==t&&t.location?{lat:parseFloat(null===_||void 0===_||null===(n=_.data)||void 0===n||null===(r=n.location)||void 0===r?void 0:r.latitude),lng:parseFloat(null===_||void 0===_||null===(i=_.data)||void 0===i||null===(o=i.location)||void 0===o?void 0:o.longitude)}:(0,O.Z)(S)),I=(0,s.Z)(C,2),q=I[0],N=I[1],L=(0,l.useState)(!1),M=(0,s.Z)(L,2),F=M[0],D=M[1],P=(0,c.v9)((function(e){return e.myShop}),c.wU).myShop,A=(0,l.useState)(null!==(d=_.data)&&void 0!==d&&d.logo_img?[null===(m=_.data)||void 0===m?void 0:m.logo_img]:[]),B=(0,s.Z)(A,2),Y=B[0],T=B[1],H=(0,l.useState)(null!==(f=_.data)&&void 0!==f&&f.background_img?[null===(x=_.data)||void 0===x?void 0:x.background_img]:[]),V=(0,s.Z)(H,2),W=V[0],E=V[1];(0,l.useEffect)((function(){return function(){var e=k.getFieldsValue(!0);e.open_time=JSON.stringify(null===e||void 0===e?void 0:e.open_time),e.close_time=JSON.stringify(null===e||void 0===e?void 0:e.close_time),w((0,u.nc)({activeMenu:_,data:(0,a.Z)((0,a.Z)({},_.data),e)}))}}),[]);return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(g.Z,{form:k,name:"basic",layout:"vertical",onFinish:function(e){var t,n;D(!0);var r=(0,a.Z)((0,a.Z)({},e),{},{"images[0]":null===(t=Y[0])||void 0===t?void 0:t.name,"images[1]":null===(n=W[0])||void 0===n?void 0:n.name,delivery_time_type:e.delivery_time_type,delivery_time_to:e.delivery_time_to,delivery_time_from:e.delivery_time_from,categories:e.categories.map((function(e){return e.value})),user_id:e.user.value,visibility:Number(e.visibility),"location[latitude]":q.lat,"location[longitude]":q.lng,user:void 0,delivery_time:0,type:"shop"===P.type?"shop":"restaurant"});!function(e,t){p.Z.update(t).then((function(){w((0,u.nc)({activeMenu:_,data:e})),j()})).finally((function(){return D(!1)}))}(e,r)},initialValues:(0,a.Z)({visibility:!0,status:"new"},_.data),children:[(0,U.jsx)(z,{logoImage:Y,setLogoImage:T,backImage:W,setBackImage:E,form:k,location:q,setLocation:N}),(0,U.jsx)(Z.Z,{children:(0,U.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:F,children:y("next")})})]})})},A=n(66204),B=n(99096),Y=n(51282),T=n(70816),H=n.n(T),V=n(34344),W={getById:function(e){return V.Z.get("dashboard/seller/shop-working-days/".concat(e))},create:function(e){return V.Z.post("dashboard/seller/shop-working-day",e,{})},update:function(e,t){return V.Z.put("dashboard/seller/shop-working-days/".concat(e),t,{})},delete:function(e){return V.Z.delete("dashboard/seller/shop-working-days",{params:e})}},E={getById:function(e){return V.Z.get("dashboard/seller/shop-closed-dates/".concat(e))},create:function(e){return V.Z.post("dashboard/seller/shop-closed-dates",e,{})},update:function(e,t){return V.Z.put("dashboard/seller/shop-closed-dates/".concat(e),t,{})},delete:function(e){return V.Z.delete("dashboard/seller/shop-closed-dates",{params:e})}},$=n(58467),J=n(21429),K=n(19393),G=n(43681),Q=n(11829),R=n(73339),X=n(58821),ee=function(e){e.next;var t=e.prev,n=g.Z.useForm(),i=(0,s.Z)(n,1)[0],o=(0,h.$)().t,m=(0,l.useState)([]),p=(0,s.Z)(m,2),f=p[0],x=p[1],j=(0,l.useState)(new Array(7).fill(!1)),k=(0,s.Z)(j,2),_=k[0],S=k[1],C=(0,l.useState)(!1),I=(0,s.Z)(C,2),q=I[0],N=I[1],L=(0,l.useState)(!1),M=(0,s.Z)(L,2),F=M[0],D=M[1],z=(0,c.v9)((function(e){return e.myShop}),c.wU).myShop,O=(0,$.s0)(),P=(0,c.I0)(),T=[{from:new Date(1900,4,18),to:new Date}],V=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,ee=(0,l.useState)(!0),te=(0,s.Z)(ee,2),ne=te[0],re=te[1];(0,l.useEffect)((function(){i.setFieldsValue({working_days:J.P}),z.uuid&&(D(!0),E.getById(z.uuid).then((function(e){x(e.data.closed_dates.filter((function(e){return e.day>H()(new Date).format("YYYY-MM-DD")})).map((function(e){return new Date(e.day)})))})),W.getById(z.uuid).then((function(e){S(0!==e.data.dates.length?e.data.dates.map((function(e){return e.disabled})):[]),0!==e.data.dates.length&&i.setFieldsValue({working_days:e.data.dates.map((function(e){return{title:e.day,from:H()(e.from,"HH:mm:ss"),to:H()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)}}))})})).finally((function(){return D(!1)})))}),[]);var ie=f&&f.length>0?(0,U.jsxs)(y.Z,{children:[(0,U.jsx)(A.Z,{style:{fontSize:14,padding:"4px 10px",width:"100%",marginTop:"10px"},children:o("Your.existing.vacations")}),(0,U.jsxs)(b.Z,{span:24,className:"mt-2",children:[f.slice(0,ne?1:f.length).map((function(e,t){return(0,U.jsxs)(Z.Z,{className:"d-flex justify-content-between",style:{borderBottom:"1px solid #4D5B75"},children:[(0,U.jsx)(b.Z,{span:24,style:{fontSize:14,marginTop:"8px"},children:H()(e).format("YYYY-MM-DD")}),(0,U.jsx)(b.Z,{span:24,children:(0,U.jsx)(A.Z,{color:"red",className:"cursor-pointer mt-3 mb-2",style:{fontSize:14},onClick:function(){return t=e,x(f.filter((function(e){return e!==t})));var t},children:o("remove")})})]},t)})),(0,U.jsx)(v.Z,{className:"mt-3 w-100",onClick:function(){re(!ne)},children:ne?(0,U.jsx)(X.ahe,{}):(0,U.jsx)(X.dMq,{})})]})]}):(0,U.jsx)(A.Z,{style:{fontSize:14,padding:"4px 10px",width:"100%"},children:"Please pick one or more days."}),ae=function(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n},se=function(){return{disabledHours:function(){return ae(0,1)},disabledMinutes:function(){return ae(0,0)},disabledSeconds:function(){return ae(0,60)}}};return(0,U.jsx)(U.Fragment,{children:F?(0,U.jsx)(Y.Z,{}):(0,U.jsx)(g.Z,{form:i,layout:"vertical",onFinish:function(e){N(!0);var t={dates:f?f.map((function(e){return H()(e).format("YYYY-MM-DD")})):void 0},n={dates:e.working_days.map((function(e){return{day:e.title,from:H()(e.from?e.from:"00").format("HH-mm"),to:H()(e.to?e.to:"00").format("HH-mm"),disabled:e.disabled}}))},r="my-shop";E.update(z.uuid,t).then((function(){P((0,u.ph)((0,a.Z)((0,a.Z)({},V),{},{nextUrl:r}))),O("/".concat(r)),P((0,R.S)())})).finally((function(){return N(!1)})),0!==e.working_days.length&&W.update(z.uuid,n).then((function(){P((0,u.ph)((0,a.Z)((0,a.Z)({},V),{},{nextUrl:r}))),O("/".concat(r)),P((0,R.S)())})).finally((function(){return N(!1)}))},children:(0,U.jsxs)(y.Z,{children:[(0,U.jsx)(b.Z,{span:13,children:(0,U.jsx)(d.Z,{title:o("restaurant.working.days"),children:(0,U.jsx)(y.Z,{gutter:8,children:(0,U.jsx)(b.Z,{span:24,children:(0,U.jsx)(g.Z.List,{name:"working_days",children:function(e){return(0,U.jsx)("div",{children:e.map((function(e,t){return(0,U.jsxs)(y.Z,{gutter:12,align:"center",children:[(0,U.jsx)(b.Z,{span:7,children:(0,U.jsx)(g.Z.Item,{name:[t,"day"],children:(0,U.jsx)("span",{children:o(J.P[t].title)})})}),_[e.key]?(0,U.jsx)(b.Z,{span:13,className:"mt-2",children:(0,U.jsx)("span",{children:o("shop.closed")})}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(b.Z,{span:7,children:(0,U.jsx)(g.Z.Item,{rules:[{required:!1===_[e.key]}],name:[t,"from"],children:(0,U.jsx)(B.Z,{disabledTime:se,picker:"time",placeholder:o("start.time")})})}),(0,U.jsx)(b.Z,{span:6,children:(0,U.jsx)(g.Z.Item,{rules:[{required:!1===_[e.key]}],name:[t,"to"],children:(0,U.jsx)(B.Z,{disabledTime:se,picker:"time",placeholder:o("end.time")})})})]}),(0,U.jsx)(b.Z,{span:4,children:(0,U.jsx)(g.Z.Item,{name:[t,"disabled"],valuePropName:"checked",children:(0,U.jsx)(w.Z,{checkedChildren:(0,U.jsx)(G.Z,{}),unCheckedChildren:(0,U.jsx)(Q.Z,{}),checked:_[e.key],onChange:function(){return function(e){var t=(0,r.Z)(_);t[e]=!_[e],S(t)}(e.key)}})})})]},e.key)}))})}})})})})}),(0,U.jsx)(b.Z,{span:11,children:(0,U.jsxs)(d.Z,{title:o("restaurant.closed.days"),children:[(0,U.jsx)("p",{children:"If you can't answer the buyer's questions in time and want to share this information with your buyers, you can add the dates here."}),(0,U.jsx)(g.Z.Item,{rules:[{required:!1,message:o("required")}],children:(0,U.jsx)(K._W,{className:"datepicker",mode:"multiple",disabled:T,min:1,selected:f,onSelect:x,footer:ie,showOutsideDays:!0})})]})}),(0,U.jsx)(b.Z,{span:24,children:(0,U.jsxs)(Z.Z,{children:[(0,U.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:q,children:o("next")}),(0,U.jsx)(v.Z,{htmlType:"submit",onClick:function(){return t()},children:o("prev")})]})})]})})})},te=n(10823),ne=n(44207),re={getById:function(e){return V.Z.get("rest/shop/delivery-zone/".concat(e))},create:function(e){return V.Z.post("dashboard/seller/delivery-zones",e,{})}},ie=n(34491),ae=function(e){var t=e.next,n=e.prev,r=(0,h.$)().t,i=g.Z.useForm(),a=(0,s.Z)(i,1)[0],o=(0,l.useState)([]),u=(0,s.Z)(o,2),m=u[0],p=u[1],f=(0,l.useState)(!1),x=(0,s.Z)(f,2),j=x[0],k=x[1],w=(0,l.useState)(!1),_=(0,s.Z)(w,2),S=_[0],C=_[1],I=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,q=(0,c.v9)((function(e){return e.myShop}),c.wU).myShop,N=(0,l.useState)(null),L=(0,s.Z)(N,2),M=L[0],F=L[1];return(0,l.useEffect)((function(){I.data&&(C(!0),re.getById(null===q||void 0===q?void 0:q.id).then((function(e){var t;return p(null===(t=e.data.address)||void 0===t?void 0:t.map((function(e){return{lat:e[0],lng:e[1]}})))})).finally((function(){return C(!1)})))}),[]),(0,U.jsx)(g.Z,{form:a,name:"map",layout:"vertical",onFinish:function(e){if(m.length<3)ie.Am.warning(r("place.selected.map"));else if(M){k(!0);var n={shop_id:I.data.id,address:m.map((function(e){return{0:e.lat,1:e.lng}}))};re.create(n).then((function(){return t()})).finally((function(){return k(!1)}))}else ie.Am.warning(r("place.selected.map"))},initialValues:{},children:S?(0,U.jsx)(Y.Z,{}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(y.Z,{children:(0,U.jsx)(b.Z,{span:24,children:(0,U.jsx)(d.Z,{title:r("delivery.zone"),children:(0,U.jsxs)(y.Z,{gutter:12,children:[(0,U.jsx)(b.Z,{span:24,className:"mb-3",children:(0,U.jsxs)(Z.Z,{children:[(0,U.jsx)(X.Ctn,{size:25}),(0,U.jsx)("p",{children:"Click this icon to start pin points in the map and connect them to draw a zone . Minimum 3 points required"})]})}),(0,U.jsx)(b.Z,{span:12,children:(0,U.jsx)("img",{src:ne,alt:"map gif",style:{object:"contain"}})}),(0,U.jsx)(b.Z,{span:24,children:(0,U.jsx)(te.Z,{triangleCoords:m,settriangleCoords:p,setMerge:F})})]})})})}),(0,U.jsxs)(Z.Z,{children:[(0,U.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:j,children:r("next")}),(0,U.jsx)(v.Z,{htmlType:"submit",onClick:function(){return n()},children:r("prev")})]})]})})},se=o.Z.Step,le=[{title:"shop",content:"First-content"},{title:"map",content:"Second-content"},{title:"delivery",content:"Third-content"}];function oe(){var e,t=(0,h.$)().t,n=(0,c.I0)(),g=(0,f.K)(),Z=Number((null===(e=g.values)||void 0===e?void 0:e.step)||0),v=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,x=(0,c.v9)((function(e){return e.formLang}),c.wU).languages,j=(0,c.v9)((function(e){return e.myShop}),c.wU).myShop,y=(0,l.useState)(!1),b=(0,s.Z)(y,2),k=b[0],w=b[1],_=function(){w(!0),p.Z.get().then((function(e){var t,s,l,o,d,c=(0,a.Z)((0,a.Z)((0,a.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var t=e.translations,n=x.map((function(e){var n,r,a,s;return s={},(0,i.Z)(s,"title[".concat(e.locale,"]"),null===(n=t.find((function(t){return t.locale===e.locale})))||void 0===n?void 0:n.title),(0,i.Z)(s,"description[".concat(e.locale,"]"),null===(r=t.find((function(t){return t.locale===e.locale})))||void 0===r?void 0:r.description),(0,i.Z)(s,"address[".concat(e.locale,"]"),null===(a=t.find((function(t){return t.locale===e.locale})))||void 0===a?void 0:a.address),s}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(n)))}(e.data)),{},{logo_img:S(e.data.logo_img),background_img:S(e.data.background_img),user:{label:e.data.seller.firstname+" "+(e.data.seller.lastname||""),value:e.data.seller.id},delivery_time_from:null===(t=e.data)||void 0===t?void 0:t.delivery_time.from,delivery_time_to:null===(s=e.data)||void 0===s?void 0:s.delivery_time.to,delivery_time_type:null===(l=e.data)||void 0===l?void 0:l.delivery_time.type,categories:null===(o=e.data)||void 0===o||null===(d=o.categories)||void 0===d?void 0:d.map((function(e){var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))});n((0,u.nc)({activeMenu:v,data:c}))})).finally((function(){w(!1),n((0,u.A_)(v))}))},S=function(e){return{items:e,uid:e,url:e,name:e}};(0,l.useEffect)((function(){v.refetch&&_()}),[v.refetch]);var C=function(){var e=Z+1;g.set("step",e)},I=function(){var e=Z-1;g.set("step",e)};return(0,U.jsxs)(d.Z,{title:"shop"===j.type?t("shop.edit"):t("restaurant.edit"),extra:(0,U.jsx)(m.Z,{}),children:[(0,U.jsx)(o.Z,{current:Z,onChange:function(e){n((0,u.nc)({activeMenu:v,data:(0,a.Z)((0,a.Z)({},v.data),{},{step:e})})),g.set("step",e)},children:le.map((function(e){return(0,U.jsx)(se,{title:t(e.title)},e.title)}))}),k?(0,U.jsx)(Y.Z,{}):(0,U.jsxs)("div",{className:"steps-content",children:["First-content"===le[Z].content&&(0,U.jsx)(P,{next:C,loading:k}),"Second-content"===le[Z].content&&(0,U.jsx)(ae,{prev:I,next:C}),"Third-content"===le[Z].content&&(0,U.jsx)(ee,{prev:I})]})]})}},44207:function(e,t,n){"use strict";e.exports=n.p+"static/media/map.f2e0b3013d676ba09c88.gif"},24654:function(){}}]);