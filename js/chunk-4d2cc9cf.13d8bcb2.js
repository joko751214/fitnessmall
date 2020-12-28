(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d2cc9cf"],{8418:function(t,s,r){"use strict";var e=r("c04e"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,s,r){var c=e(s);c in t?a.f(t,c,i(0,r)):t[c]=r}},"99af":function(t,s,r){"use strict";var e=r("23e7"),a=r("d039"),i=r("e8b5"),c=r("861d"),o=r("7b0b"),n=r("50c4"),d=r("8418"),l=r("65f0"),p=r("1dde"),u=r("b622"),h=r("2d00"),b=u("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",x=h>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=p("concat"),C=function(t){if(!c(t))return!1;var s=t[b];return void 0!==s?!!s:i(t)},_=!x||!m;e({target:"Array",proto:!0,forced:_},{concat:function(t){var s,r,e,a,i,c=o(this),p=l(c,0),u=0;for(s=-1,e=arguments.length;s<e;s++)if(i=-1===s?c:arguments[s],C(i)){if(a=n(i.length),u+a>f)throw TypeError(v);for(r=0;r<a;r++,u++)r in i&&d(p,u,i[r])}else{if(u>=f)throw TypeError(v);d(p,u++,i)}return p.length=u,p}})},bd81:function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return t.products.length?r("div",{staticClass:"container",staticStyle:{"margin-top":"8rem","margin-bottom":"4rem"}},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"border px-4 py-4 mx-2 mb-4"},[r("h4",{staticClass:"mb-4 font-weight-bold"},[t._v("訂單資料")]),t._l(t.products,(function(s,e){return r("div",{key:e},[r("div",{staticClass:"d-flex mb-2"},[r("img",{staticClass:"mr-2",staticStyle:{width:"48px",height:"48px","object-fit":"cover"},attrs:{src:s.product.imageUrl[0],alt:"美味的餐點"}}),r("div",{staticClass:"w-100"},[r("div",{staticClass:"d-flex justify-content-between font-weight-bold"},[r("p",{staticClass:"mb-0"},[t._v(t._s(s.product.title))]),r("p",{staticClass:"mb-0"},[t._v("x"+t._s(s.quantity))])]),r("div",{staticClass:"d-flex justify-content-between"},[r("small",{staticClass:"mb-0 text-muted"},[t._v(" "+t._s(t._f("currency")(s.product.price))+" / "+t._s(s.product.unit)+" ")])])])])])})),r("table",{staticClass:"table mt-4 border-top border-bottom text-muted"},[r("tbody",[r("tr",{staticClass:"mt-3"},[r("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v(" Email ")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t.user.email)+" ")])]),r("tr",[r("th",{staticClass:"border-0 px-0",attrs:{scope:"row"}},[t._v("收貨人姓名")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.user.name))])]),r("tr",[r("th",{staticClass:"border-0 px-0",attrs:{scope:"row"}},[t._v("收貨人電話")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.user.tel))])]),r("tr",[r("th",{staticClass:"border-0 px-0",attrs:{scope:"row"}},[t._v("收貨人地址")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.user.address))])])])]),r("table",{staticClass:"table text-muted"},[r("tbody",[r("tr",[r("th",{staticClass:"border-0 px-0",attrs:{scope:"row"}},[t._v("付款金額")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.totalPrice))])]),r("tr",[r("th",{staticClass:"border-0 px-0",attrs:{scope:"row"}},[t._v("付款方式")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t.payment))])]),r("tr",[r("th",{staticClass:"border-0 px-0",attrs:{scope:"row"}},[t._v("付款狀態")]),r("td",{staticClass:"text-right border-0 px-0",class:t.paid?"text-success":""},[t._v(" "+t._s(t.paid?"付款成功":"尚未付款")+" ")])])])]),t.paid?r("div",[r("div",{staticClass:"row justify-content-between align-items-center"},[r("h2",{staticClass:"my-0"},[t._v("完成訂單")]),r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.backHome(s)}}},[t._v("回到首頁")])])])]):r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger mt-4",attrs:{type:"button"},on:{click:function(s){return t.setOrderPaid()}}},[t._v("確認付款")])])],2)])])]):t._e()},a=[],i=(r("99af"),r("4160"),r("159b"),{data:function(){return{products:[],orderId:"",totalPrice:0,user:{},paid:"",payment:""}},methods:{getOrder:function(){var t=this;this.orderId=this.$route.params.orderId;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("e9fd54ce-9d42-40cb-ba4e-14553d1d6375","/ec/orders/").concat(this.orderId),r=this.$loading.show();this.$http.get(s).then((function(s){var e=s.data.data;t.user=e.user,t.paid=e.paid,t.payment=e.payment,t.products=e.products,t.products.forEach((function(s){t.totalPrice+=s.product.price*s.quantity})),r.hide()})).catch((function(s){t.$swal("獲取訂單失敗",s.response.data.errors[0],"error")}))},setOrderPaid:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api","/").concat("e9fd54ce-9d42-40cb-ba4e-14553d1d6375","/ec/orders/").concat(this.orderId,"/paying"),r=this.$loading.show();this.$http.post(s).then((function(){r.hide(),t.getOrder()})).catch((function(s){t.$swal("付款狀況",s.response.data.errors[0],"error")}))},backHome:function(){this.$router.push("/")}},created:function(){this.getOrder()}}),c=i,o=r("2877"),n=Object(o["a"])(c,e,a,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-4d2cc9cf.13d8bcb2.js.map