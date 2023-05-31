"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1539],{81449:function(e,n,t){t.d(n,{Z:function(){return o}});t(47313);var l=t(84697),a=t(2717),r=t(97421),i=t(46417);function o(e){var n=e.center,t=e.handleLoadMap,o=e.children,s=(0,a.v9)((function(e){return e.globalSettings.settings}),a.wU).google_map_key;return(0,i.jsx)(l.ZP,{bootstrapURLKeys:{key:s||r.kr},defaultZoom:12,center:n,options:{fullscreenControl:!1},yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var n=e.map,l=e.maps;return t(n,l)},children:o})}},29242:function(e,n,t){function l(e,n){var t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(n){return e>=n.value}));return t?"$"+(e/t.value).toFixed(n).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t.symbol:"0"}t.d(n,{p:function(){return l}})},33118:function(e,n,t){t.d(n,{Z:function(){return i}});var l=t(70816),a=t.n(l),r=t(24511);function i(e){var n=(0,r.$)().t,t=a()(),l=a()(e),i=t.diff(l,"hours"),o=t.diff(l,"minutes");return i>23?a()(e).format("Do MMM, H:mm"):i>0?i+" "+n("hours.ago"):o+" "+n("minutes.ago")}},81539:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var l=t(29439),a=t(47313),r=t(45334),i=t(77181),o=t(74294),s=t(68197),u=t(59624),c=t(24511),d=t(2717),v=t(17649),f=t(97421),p=t(81566),h=t(90954),m=t(51282),y=t(80314),g=t(11829),x=t(55613),b=t(29242),Z=t(33118),j=t(46417),_=function(e){var n,t=e.data,l=e.handleClose,a=(0,c.$)().t,i=(0,Z.Z)(null===t||void 0===t||null===(n=t.delivery_man_setting)||void 0===n?void 0:n.updated_at),o=null===t||void 0===t?void 0:t.assign_reviews_avg_rating,d=null===t||void 0===t?void 0:t.phone,v=null===t||void 0===t?void 0:t.delivery_man_orders_count,p=null===t||void 0===t?void 0:t.delivery_man_orders_sum_total_price;return(0,j.jsxs)(s.Z,{gutter:12,align:"middle",children:[(0,j.jsx)(u.Z,{span:7,children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)(r.C,{src:f.bV+(null===t||void 0===t?void 0:t.img)}),(0,j.jsxs)("div",{className:"ml-2",children:[(0,j.jsx)("div",{className:"title",children:(null===t||void 0===t?void 0:t.firstname)+" "+(null===t||void 0===t?void 0:t.lastname)}),(0,j.jsx)(x.Z,{disabled:!0,allowHalf:!0,value:o||0})]})]})}),(0,j.jsxs)(u.Z,{span:4,children:[(0,j.jsx)("div",{className:"title",children:d}),(0,j.jsx)("div",{className:"label",children:a("phone")})]}),(0,j.jsxs)(u.Z,{span:4,children:[(0,j.jsx)("div",{className:"title",children:i}),(0,j.jsx)("div",{className:"label",children:a("last.activity")})]}),(0,j.jsxs)(u.Z,{span:4,children:[(0,j.jsx)("div",{className:"title",children:v}),(0,j.jsx)("div",{className:"label",children:a("total.orders")})]}),(0,j.jsxs)(u.Z,{span:4,children:[(0,j.jsx)("div",{className:"title",children:(0,b.p)(p)}),(0,j.jsxs)("div",{className:"label",children:[" ",a("total.earning")]})]}),(0,j.jsx)(u.Z,{span:1,children:(0,j.jsx)("button",{type:"button",className:"close-btn",onClick:l,children:(0,j.jsx)(g.Z,{})})})]})},C=t(45705),w=t(58467),k=t(39548);function N(e){var n,t,l,a,o=e.data,s=(0,c.$)().t,u=(0,w.s0)(),v=(0,d.I0)(),p=(0,d.v9)((function(e){return e.menu}),d.wU).menuItems,m=(null===o||void 0===o?void 0:o.deliveryman_orders)||[],y=(0,Z.Z)(null===o||void 0===o||null===(n=o.delivery_man_setting)||void 0===n?void 0:n.updated_at);return(0,j.jsxs)(i.Z,{className:"user-card",onClick:function(){return function(e){!!p.find((function(e){return"delivery_map_orders"===e.id}))&&v((0,h.ph)({id:"delivery_map_orders",nextUrl:"deliveries/map"})),v((0,h.bL)({url:"deliveries/map/".concat(e.id),id:"delivery_map_orders",name:s("delivery.orders"),data:{list:m,item:m[0],deliveryman:o}})),u("/deliveries/map/".concat(e.id))}(o)},children:[(0,j.jsxs)(C.Z,{children:[(0,j.jsx)(r.C,{src:f.bV+(null===o||void 0===o?void 0:o.img),icon:(0,j.jsx)(k.Z,{}),style:{color:"#1a3353"}}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h4",{className:"title",children:[null===o||void 0===o?void 0:o.firstname," ",null===o||void 0===o||null===(t=o.lastname)||void 0===t?void 0:t.charAt(0),"."]}),(0,j.jsx)("div",{className:"last-seen ".concat(null!==o&&void 0!==o&&null!==(l=o.delivery_man_setting)&&void 0!==l&&l.online?"online":"text-muted"),children:null!==o&&void 0!==o&&null!==(a=o.delivery_man_setting)&&void 0!==a&&a.online?s("online"):y})]})]}),(0,j.jsx)("div",{className:"mt-2"}),(0,j.jsxs)(C.Z,{children:[(0,j.jsxs)("div",{children:[s("active_orders"),":"]}),(0,j.jsx)("div",{children:m.length})]})]})}var V=t(81449),H=[{label:"All",value:"all",key:1},{label:"Online",value:"1",key:2},{label:"Offline",value:"0",key:3}],L=function(e){return(0,j.jsx)(r.C,{src:e.url,icon:(0,j.jsx)(k.Z,{}),style:{color:"#1a3353"},onClick:e.onClick})};function S(){var e=(0,c.$)().t,n=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,t=(0,d.I0)(),r=(0,a.useState)(void 0),g=(0,l.Z)(r,2),x=g[0],b=g[1],Z=(0,a.useState)(null),C=(0,l.Z)(Z,2),w=C[0],k=C[1],S=(0,d.v9)((function(e){return e.globalSettings}),d.wU).settings,E=(0,v.Z)(S),M=(0,d.v9)((function(e){return e.deliveries}),d.wU),D=M.delivery,R=M.loading;(0,y.Z)((function(){var e={page:1,perPage:100,online:"all"===x?void 0:x,"statuses[0]":"new","statuses[1]":"accepted","statuses[2]":"ready","statuses[3]":"on_a_way"};t((0,p.W)(e))}),[x]);return(0,a.useEffect)((function(){null!==n&&void 0!==n&&n.refetch&&(t((0,p.W)({perPage:100,"statuses[0]":"new","statuses[1]":"accepted","statuses[2]":"ready","statuses[3]":"on_a_way"})),t((0,h.A_)(n)))}),[null===n||void 0===n?void 0:n.refetch]),(0,j.jsx)(i.Z,{title:e("deliveries"),className:"delivery",extra:(0,j.jsx)(o.Z,{options:H,defaultValue:"all",loading:R,onChange:function(e){return b(e)},style:{width:"200px"}}),children:R?(0,j.jsx)(m.Z,{}):(0,j.jsxs)(s.Z,{gutter:8,children:[(0,j.jsx)(u.Z,{span:18,children:(0,j.jsxs)("div",{className:"map-container",style:{height:"73vh",width:"100%"},children:[!!w&&(0,j.jsx)(i.Z,{className:"map-user-card",children:(0,j.jsx)(_,{data:w,handleClose:function(){k(null)}})}),(0,j.jsx)(V.Z,{center:E,handleLoadMap:function(e,n){for(var t=D.map((function(e){var n,t;return{lat:Number((null===(n=e.delivery_man_setting)||void 0===n?void 0:n.location.latitude)||"0"),lng:Number((null===(t=e.delivery_man_setting)||void 0===t?void 0:t.location.longitude)||"0")}})),l=new n.LatLngBounds,a=0;a<t.length;a++)l.extend(t[a]);e.fitBounds(l)},children:D.map((function(e){var n,t,l,a;return(0,j.jsx)(L,{lat:Number((null===e||void 0===e||null===(n=e.delivery_man_setting)||void 0===n||null===(t=n.location)||void 0===t?void 0:t.latitude)||"0"),lng:Number((null===e||void 0===e||null===(l=e.delivery_man_setting)||void 0===l||null===(a=l.location)||void 0===a?void 0:a.longitude)||"0"),url:f.bV+e.img,onClick:function(){k(e)}},e.id)}))})]})}),(0,j.jsx)(u.Z,{span:6,children:(0,j.jsx)("div",{className:"order-list",style:{height:"75vh"},children:D.map((function(e,n){return(0,j.jsx)(N,{data:e},e.id+n)}))})})]})})}},55613:function(e,n,t){t.d(n,{Z:function(){return N}});var l=t(87462),a=t(47313),r=t(1413),i=t(4942),o=t(15671),s=t(43144),u=t(60136),c=t(29388),d=t(53879),v=t(46123),f=t.n(v),p=t(49242);var h=function(e){(0,u.Z)(t,e);var n=(0,c.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).onHover=function(n){var t=e.props;(0,t.onHover)(n,t.index)},e.onClick=function(n){var t=e.props;(0,t.onClick)(n,t.index)},e.onKeyDown=function(n){var t=e.props,l=t.onClick,a=t.index;13===n.keyCode&&l(n,a)},e}return(0,s.Z)(t,[{key:"getClassName",value:function(){var e=this.props,n=e.prefixCls,t=e.index,l=e.value,a=e.allowHalf,r=e.focused,i=t+1,o=n;return 0===l&&0===t&&r?o+=" ".concat(n,"-focused"):a&&l+.5>=i&&l<i?(o+=" ".concat(n,"-half ").concat(n,"-active"),r&&(o+=" ".concat(n,"-focused"))):(o+=" ".concat(n,i<=l?"-full":"-zero"),i===l&&r&&(o+=" ".concat(n,"-focused"))),o}},{key:"render",value:function(){var e=this.onHover,n=this.onClick,t=this.onKeyDown,l=this.props,r=l.disabled,i=l.prefixCls,o=l.character,s=l.characterRender,u=l.index,c=l.count,d=l.value,v="function"===typeof o?o(this.props):o,f=a.createElement("li",{className:this.getClassName()},a.createElement("div",{onClick:r?null:n,onKeyDown:r?null:t,onMouseMove:r?null:e,role:"radio","aria-checked":d>u?"true":"false","aria-posinset":u+1,"aria-setsize":c,tabIndex:r?-1:0},a.createElement("div",{className:"".concat(i,"-first")},v),a.createElement("div",{className:"".concat(i,"-second")},v)));return s&&(f=s(f,this.props)),f}}]),t}(a.Component);function m(){}var y=function(e){(0,u.Z)(t,e);var n=(0,c.Z)(t);function t(e){var l;(0,o.Z)(this,t),(l=n.call(this,e)).stars=void 0,l.rate=void 0,l.onHover=function(e,n){var t=l.props.onHoverChange,a=l.getStarValue(n,e.pageX);a!==l.state.cleanedValue&&l.setState({hoverValue:a,cleanedValue:null}),t(a)},l.onMouseLeave=function(){var e=l.props.onHoverChange;l.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},l.onClick=function(e,n){var t=l.props.allowClear,a=l.state.value,r=l.getStarValue(n,e.pageX),i=!1;t&&(i=r===a),l.onMouseLeave(),l.changeValue(i?0:r),l.setState({cleanedValue:i?r:null})},l.onFocus=function(){var e=l.props.onFocus;l.setState({focused:!0}),e&&e()},l.onBlur=function(){var e=l.props.onBlur;l.setState({focused:!1}),e&&e()},l.onKeyDown=function(e){var n=e.keyCode,t=l.props,a=t.count,r=t.allowHalf,i=t.onKeyDown,o="rtl"===t.direction,s=l.state.value;n===p.Z.RIGHT&&s<a&&!o?(s+=r?.5:1,l.changeValue(s),e.preventDefault()):n===p.Z.LEFT&&s>0&&!o||n===p.Z.RIGHT&&s>0&&o?(s-=r?.5:1,l.changeValue(s),e.preventDefault()):n===p.Z.LEFT&&s<a&&o&&(s+=r?.5:1,l.changeValue(s),e.preventDefault()),i&&i(e)},l.saveRef=function(e){return function(n){l.stars[e]=n}},l.saveRate=function(e){l.rate=e};var a=e.value;return void 0===a&&(a=e.defaultValue),l.stars={},l.state={value:a,focused:!1,cleanedValue:null},l}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.autoFocus,t=e.disabled;n&&!t&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,n){var t=this.props,l=t.allowHalf,a="rtl"===t.direction,r=e+1;if(l){var i=this.getStarDOM(e),o=function(e){var n=function(e){var n,t,l=e.ownerDocument,a=l.body,r=l&&l.documentElement,i=e.getBoundingClientRect();return n=i.left,t=i.top,{left:n-=r.clientLeft||a.clientLeft||0,top:t-=r.clientTop||a.clientTop||0}}(e),t=e.ownerDocument,l=t.defaultView||t.parentWindow;return n.left+=function(e){var n=e.pageXOffset,t="scrollLeft";if("number"!==typeof n){var l=e.document;"number"!==typeof(n=l.documentElement[t])&&(n=l.body[t])}return n}(l),n.left}(i),s=i.clientWidth;(a&&n-o>s/2||!a&&n-o<s/2)&&(r-=.5)}return r}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var n=this.props.onChange;"value"in this.props||this.setState({value:e}),n(e)}},{key:"render",value:function(){for(var e=this.props,n=e.count,t=e.allowHalf,l=e.style,r=e.prefixCls,o=e.disabled,s=e.className,u=e.character,c=e.characterRender,d=e.tabIndex,v=e.direction,p=this.state,m=p.value,y=p.hoverValue,g=p.focused,x=[],b=o?"".concat(r,"-disabled"):"",Z=0;Z<n;Z+=1)x.push(a.createElement(h,{ref:this.saveRef(Z),index:Z,count:n,disabled:o,prefixCls:"".concat(r,"-star"),allowHalf:t,value:void 0===y?m:y,onClick:this.onClick,onHover:this.onHover,key:Z,character:u,characterRender:c,focused:g}));var j=f()(r,b,s,(0,i.Z)({},"".concat(r,"-rtl"),"rtl"===v));return a.createElement("ul",{className:j,style:l,onMouseLeave:o?null:this.onMouseLeave,tabIndex:o?-1:d,onFocus:o?null:this.onFocus,onBlur:o?null:this.onBlur,onKeyDown:o?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},x)}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"value"in e&&void 0!==e.value?(0,r.Z)((0,r.Z)({},n),{},{value:e.value}):n}}]),t}(a.Component);y.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};var g=y,x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},b=t(17469),Z=function(e,n){return a.createElement(b.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:x}))};Z.displayName="StarFilled";var j=a.forwardRef(Z),_=t(37388),C=t(91964),w=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t},k=a.forwardRef((function(e,n){var t=e.prefixCls,r=e.tooltips,i=w(e,["prefixCls","tooltips"]),o=a.useContext(C.E_),s=o.getPrefixCls,u=o.direction,c=s("rate",t);return a.createElement(g,(0,l.Z)({ref:n,characterRender:function(e,n){var t=n.index;return r?a.createElement(_.Z,{title:r[t]},e):e}},i,{prefixCls:c,direction:u}))}));k.displayName="Rate",k.defaultProps={character:a.createElement(j,null)};var N=k}}]);