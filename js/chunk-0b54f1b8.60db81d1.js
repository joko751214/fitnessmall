(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b54f1b8"],{"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):a(n(t))}},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"13a0":function(t,e,r){"use strict";var n=r("5b79"),a=r.n(n);a.a},2355:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",staticStyle:{"margin-top":"8rem"}},[t.carts.length?r("div",{staticClass:"row mt-5 mb-5 justify-content-center"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row justify-content-between px-3 mb-5"},[r("h3",[t._v("已選擇商品")]),r("div",{staticClass:"text-right"},[r("a",{staticClass:"h4 text-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.deleteCartList()}}},[r("i",{staticClass:"fas fa-times"})])])]),t._l(t.carts,(function(e){return r("div",{key:e.product.id,staticClass:"d-flex mt-4 bg-light"},[r("div",{staticClass:"cartImage",style:{backgroundImage:"url("+e.product.imageUrl[0]+")"}}),r("div",{staticClass:"w-100 p-3 position-relative"},[r("a",{staticClass:"position-absolute  text-dark",staticStyle:{top:"16px",right:"16px"},attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.deleteCartList(e.product)}}},[r("i",{staticClass:"fas fa-times"})]),r("p",{staticClass:"mb-0 font-weight-bold"},[t._v(" "+t._s(e.product.title)+" ")]),r("p",{staticClass:"mb-1 text-muted",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(e.product.content)+" ")]),r("div",{staticClass:"d-flex justify-content-between align-items-center w-100 mt-3"},[r("div",{staticClass:"input-group w-50 align-items-center"},[r("div",{staticClass:"input-group-append pr-1"},[r("button",{staticClass:"btn btn-outline-primary btn-sm border-0",attrs:{disabled:1===e.quantity},on:{click:function(r){return r.preventDefault(),t.updateCartData(e,"-")}}},[r("i",{staticClass:"fas fa-minus"})])]),r("input",{staticClass:"form-control border-0\n                        text-center my-auto shadow-none bg-light px-0",attrs:{type:"number",disabled:""},domProps:{value:e.quantity}}),r("div",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn btn-outline-primary btn-sm border-0",on:{click:function(r){return r.preventDefault(),t.updateCartData(e,"+")}}},[r("i",{staticClass:"fas fa-plus"})])])]),r("p",{staticClass:"mb-0 ml-auto info-text"},[t._v(" "+t._s(t._f("currency")(e.product.price))+"/"+t._s(e.product.unit)+" ")])])])])})),r("div",{staticStyle:{"margin-left":"124px"}},[r("div",{staticClass:"d-flex justify-content-between mt-4"},[r("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("總計")]),r("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(" "+t._s(t._f("currency")(t.totalPrice))+" ")])])]),r("div",{staticClass:"d-flex mt-4 justify-content-between\n            align-items-md-center align-items-end w-100"},[r("router-link",{staticClass:"text-dark mt-5 h5",attrs:{to:"/products"}},[r("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" 繼續購物 ")]),r("router-link",{staticClass:"btn btn-primary mt-5 rounded-0",attrs:{to:"/order"}},[r("i",{staticClass:"fas fa-shopping-cart text-white"},[t._v(" 結帳")])])],1)],2)]):r("div",{staticStyle:{"margin-bottom":"103px","margin-top":"200px"}},[r("div",{staticClass:"d-flex justify-content-center my-7"},[r("h4",{staticClass:"mb-3 warning-text"},[t._v("目前沒有商品，快去逛逛")]),r("router-link",{staticClass:"text-dark mt-5 mt-3 h5",attrs:{to:"/products"}},[r("i",{staticClass:"fas fa-chevron-left mr-2"}),t._v(" 查看商品 ")])],1)]),r("ProductsCategory")],1)},a=[],i=(r("99af"),r("4160"),r("159b"),r("2909")),o=r("34f1"),s={components:{ProductsCategory:o["a"]},data:function(){return{carts:[],totalPrice:0,status:!1,statusId:""}},methods:{deleteCartList:function(t){var e=this;if(t){var r="".concat("https://course-ec-api.hexschool.io/api","/").concat("e9fd54ce-9d42-40cb-ba4e-14553d1d6375","/ec/shopping/").concat(t.id),n={product:t.id};this.statusId=t.id;var a=this.$loading.show();this.$http.delete(r,n).then((function(){e.getCartData(),e.statusId="",a.hide(),e.$swal("商品刪除","可以再看看其他的","success")})).catch((function(t){e.$swal("商品無法刪除",t.response.data.errors[0],"error")}))}else{var i="".concat("https://course-ec-api.hexschool.io/api","/").concat("e9fd54ce-9d42-40cb-ba4e-14553d1d6375","/ec/shopping/all/product"),o=this.$loading.show();this.$http.delete(i).then((function(){e.getCartData(),o.hide(),e.$swal("商品清空","目前商品已全數清空","success")})).catch((function(t){e.$swal("商品無法刪除",t.response.data.errors[0],"error")}))}},getCartData:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e9fd54ce-9d42-40cb-ba4e-14553d1d6375","/ec/shopping");this.totalPrice=0;var r=this.$loading.show();this.$http.get(e).then((function(e){t.carts=Object(i["a"])(e.data.data),t.carts.forEach((function(e){t.totalPrice+=e.product.price*e.quantity})),r.hide()})).catch((function(e){t.$swal("獲取購物車清單失敗",e.response.data.errors[0],"error")}))},updateCartData:function(t,e){var r=this,n=t;switch(e){case"+":n.quantity+=1;break;case"-":n.quantity-=1;break;default:break}var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e9fd54ce-9d42-40cb-ba4e-14553d1d6375","/ec/shopping"),i={product:n.product.id,quantity:n.quantity},o=this.$loading.show();this.$http.patch(a,i).then((function(){r.getCartData(),o.hide()})).catch((function(t){r.$swal("產品更新失敗",t.response.data.errors[0],"error")}))}},created:function(){this.getCartData()}},c=s,u=(r("958a"),r("2877")),f=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=f.exports},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=r("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||Object(o["a"])(t)||s()}},"34f1":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-5 productsCategory"},[r("h4",{staticClass:"font-weight-bold"},[t._v("商品介紹")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 my-4"},[r("div",{staticClass:"card border-0 mb-4"},[r("a",{staticClass:"product_category",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toCategory("沙拉")}}},[r("div",{staticClass:"rounded-0",staticStyle:{height:"300px","background-size":"cover","background-position":"center","background-image":"url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SGvCdPPn9jw2ARKfHWCUiLIKrTWbwWtMOp5ZL0kSRkza2SXrGQEQFcj4G1uyQO3Uu6mQM8NrQquNbtRuNwpxudCuY986zDz8ux1xvr4OeZtxlgaQVeiSXW2vCG7aBMlE.jpg')"}})]),r("h2",{staticClass:"title"},[t._v("精選沙拉")]),r("h3",{staticClass:"description"},[t._v("採用豐富的萵苣、蘿蔓、歐式生菜與蔬果")])])]),r("div",{staticClass:"col-lg-4 my-4"},[r("div",{staticClass:"card border-0 mb-4"},[r("a",{staticClass:"product_category",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toCategory("早餐套餐")}}},[r("div",{staticClass:"rounded-0",staticStyle:{height:"300px","background-size":"cover","background-position":"center","background-image":"url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cAgR5BV5on9QdxXu0xo1dH8BmtPy54xYlL1vvTn2ujMB3AhF7K7us1LhfDhFdjJUCsfxqPZd1ftqhpgbIOgz7OE6EwYWsGPBhicmNlCHywujAteyPfE2QnqgZcUPscKn.jpg')"}})]),r("h2",{staticClass:"title"},[t._v("低GI美味早餐")]),r("h3",{staticClass:"description"},[t._v("還在思考早餐要吃什麼嗎?快來FITNESSMALL看看吧~~")])])]),r("div",{staticClass:"col-lg-4 my-4"},[r("div",{staticClass:"card border-0 mb-4"},[r("a",{staticClass:"product_category",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toCategory("水果拼盤")}}},[r("div",{staticClass:"rounded-0",staticStyle:{height:"300px","background-size":"cover","background-position":"center","background-image":"url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/eHAXBPnYATGKLJtRauUHU4xMfhf18Q4sVkAh0biGFjLs1B25PMZKFKWyalWSKcXLGtl66Is9vRjIdPPtPk29asVB6cfff6jiX0RajGWn4ViYKfolR5d0jHKuYDpB1K9Y.jpg')"}})]),r("h2",{staticClass:"title"},[t._v("輕盈水果拼盤")]),r("h3",{staticClass:"description"},[t._v("水果為產地新鮮直送，除了新鮮還是新鮮!")])])])])])},a=[],i={data:function(){return{}},methods:{toCategory:function(t){this.$router.push({name:"products",params:{categoryName:t}})}}},o=i,s=(r("13a0"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),i=r("7dd0"),o="String Iterator",s=a.set,c=a.getterFor(o);i(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,p,h=a(t),b="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,y=void 0!==g,m=u(h),C=0;if(y&&(g=n(g,v>2?arguments[2]:void 0,2)),void 0==m||b==Array&&o(m))for(e=s(h.length),r=new b(e);e>C;C++)p=y?g(h[C],C):h[C],c(r,C,p);else for(l=m.call(h),d=l.next,r=new b;!(f=d.call(l)).done;C++)p=y?i(l,g,[f.value,C],!0):f.value,c(r,C,p);return r.length=C,r}},"5b79":function(t,e,r){},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"71d1":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?a.f(t,o,i(0,r)):t[o]=r}},"958a":function(t,e,r){"use strict";var n=r("71d1"),a=r.n(n);a.a},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),o=r("861d"),s=r("7b0b"),c=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),p=r("2d00"),h=d("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),y=l("concat"),m=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},C=!g||!y;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,n,a,i,o=s(this),l=f(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],m(i)){if(a=c(i.length),d+a>b)throw TypeError(v);for(r=0;r<a;r++,d++)r in i&&u(l,d,i[r])}else{if(d>=b)throw TypeError(v);u(l,d++,i)}return l.length=d,l}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),h=r("825a"),b=r("7b0b"),v=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),C=r("df75"),w=r("241c"),x=r("057f"),S=r("7418"),j=r("06cf"),k=r("9bf2"),O=r("d1e7"),_=r("9112"),P=r("6eeb"),A=r("5692"),$=r("f772"),D=r("d012"),E=r("90e3"),I=r("b622"),L=r("e538"),q=r("746f"),z=r("d44e"),K=r("69f3"),N=r("b727").forEach,F=$("hidden"),G="Symbol",M="prototype",Q=I("toPrimitive"),T=K.set,B=K.getterFor(G),R=Object[M],W=a.Symbol,U=i("JSON","stringify"),Y=j.f,H=k.f,J=x.f,X=O.f,V=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=a.QObject,at=!nt||!nt[M]||!nt[M].findChild,it=s&&f((function(){return 7!=m(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(R,e);n&&delete R[e],H(t,e,r),n&&t!==R&&H(R,e,n)}:H,ot=function(t,e){var r=V[t]=m(W[M]);return T(r,{type:G,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,r){t===R&&ct(Z,e,r),h(t);var n=g(e,!0);return h(r),l(V,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,F)||H(t,F,y(1,{})),t[F][n]=!0),it(t,n,r)):H(t,n,r)},ut=function(t,e){h(t);var r=v(e),n=C(r).concat(ht(r));return N(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===R&&l(V,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(V,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=v(t),n=g(e,!0);if(r!==R||!l(V,n)||l(Z,n)){var a=Y(r,n);return!a||!l(V,n)||l(r,F)&&r[F][n]||(a.enumerable=!0),a}},pt=function(t){var e=J(v(t)),r=[];return N(e,(function(t){l(V,t)||l(D,t)||r.push(t)})),r},ht=function(t){var e=t===R,r=J(e?Z:v(t)),n=[];return N(r,(function(t){!l(V,t)||e&&!l(R,t)||n.push(V[t])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===R&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),it(this,e,y(1,t))};return s&&at&&it(R,e,{configurable:!0,set:r}),ot(e,t)},P(W[M],"toString",(function(){return B(this).tag})),P(W,"withoutSetter",(function(t){return ot(E(t),t)})),O.f=lt,k.f=ct,j.f=dt,w.f=x.f=pt,S.f=ht,L.f=function(t){return ot(I(t),t)},s&&(H(W[M],"description",{configurable:!0,get:function(){return B(this).description}}),o||P(R,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),N(C(rt),(function(t){q(t)})),n({target:G,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),U){var bt=!c||f((function(){var t=W();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),a[1]=e,U.apply(null,a)}})}W[M][Q]||_(W[M],Q,W[M].valueOf),z(W,G),D[F]=!0},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("e260"),o=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),f=i.values;for(var l in a){var d=n[l],p=d&&d.prototype;if(p){if(p[c]!==f)try{o(p,c,f)}catch(b){p[c]=f}if(p[u]||o(p,u,l),a[l])for(var h in i)if(p[h]!==i[h])try{o(p,h,i[h])}catch(b){p[h]=i[h]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=i.Symbol;if(a&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var h=p.toString,b="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(o(l,t))return"";var r=b?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),v=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),p=o(t,d),h=o(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,p,h);for(n=new(void 0===r?Array:r)(g(h-p,0)),f=0;p<h;p++,f++)p in l&&u(n,f,l[p]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-0b54f1b8.60db81d1.js.map