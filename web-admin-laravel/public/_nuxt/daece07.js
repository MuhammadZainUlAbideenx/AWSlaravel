(window.webpackJsonp=window.webpackJsonp||[]).push([[242,19,44,249],{661:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),c=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allSettings:"allDefaultSettings"}))},d=l,m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):n("div",{staticClass:"text-center"},[n("img",{attrs:{src:r(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){t.exports=r.p+"img/loader.1aa8404.gif"},664:function(t,e,r){"use strict";r.r(e);var n={props:["rating"],data:function(){return{}}},c=r(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[r("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);e.default=component.exports},721:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{counter:1}},mounted:function(){this.initial?this.counter=this.initial:this.counter=this.min},props:{max:{required:!1},min:{default:1,required:!1},initial:{required:!1}},methods:{increase:function(){this.max?this.counter<this.max&&(this.counter++,this.$emit("input",this.counter),this.$emit("change")):(this.$emit("input",this.counter),this.$emit("change"),this.counter++)},decrease:function(){this.counter>this.min&&(this.counter--,this.$emit("input",this.counter),this.$emit("change"))},reset:function(){var t=this.counter;this.initial?this.counter=this.initial:this.counter=this.min,this.counter!=t&&this.$emit("change"),this.$emit("input",this.counter)}}},c=r(71),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"me-md-3 mx-0 my-3 my-md-0",attrs:{id:"plus-minus-counter"}},[r("div",{staticClass:"counter"},[t._v(t._s(t.counter))]),t._v(" "),r("button",{staticClass:"icon-up",attrs:{type:"button"},on:{click:t.increase}},[r("fa",{attrs:{icon:["fas","chevron-up"]}})],1),t._v(" "),r("button",{staticClass:"icon-down",attrs:{type:"button"},on:{click:t.decrease}},[r("fa",{attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),r("button",{staticClass:"icon-reset",attrs:{type:"button"},on:{click:t.reset}},[r("fa",{attrs:{icon:["fas","times"]}})],1)])}),[],!1,null,null,null);e.default=component.exports},801:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(0),c=r(21),o=(r(50),r(60),r(5),r(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={created:function(){},data:function(){return{product:"",price:"",stock:"",quantity:1,is_variable:!1,key:1,wishlist:!1,settings:{responsive:[{breakpoint:1024,settings:{slidesToShow:1}},{breakpoint:600,settings:{slidesToShow:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}},mounted:function(){var t=this;this.$root.$on("detailModalProductChanged",(function(data){t.product=data,1==t.product.product_type?(t.is_variable=!1,t.price=t.product.display_price):2==t.product.product_type&&(t.is_variable=!0,t.price=t.product.starting_from_price),t.stock=t.product.stock,t.quantity=t.product.min_order}))},props:["modal_id"],methods:d({addToCart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.product.is_available){e.next=13;break}if(!(t.stock>=t.quantity)){e.next=10;break}if(!(t.quantity>=t.product.max_order)){e.next=6;break}t.$toast.error(t.$t("product_exceeds_its_maximum_order_limit")),e.next=8;break;case 6:return e.next=8,t.$webService.addCartItem({product_id:t.product.id,quantity:t.quantity}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCartItems();case 2:r.success?t.$toast.success(r.message):t.$toast.error(r.message);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:e.next=11;break;case 10:t.$toast.error(t.$t("product_out_of_stock"));case 11:e.next=14;break;case 13:t.$toast.error(t.$t("product_not_available"));case 14:case"end":return e.stop()}}),e)})))()},addToWishlist:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$auth.loggedIn||!t.$gates.hasRole("customer")){e.next=5;break}return e.next=3,t.$webService.addWishlistItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchWishlistItems();case 2:0==r.success?t.$toast.error(r.data.message):(t.wishlist=!0,t.$toast.success(r.data.message));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=6;break;case 5:t.$toast.error(t.$t("please_login_first"));case 6:case"end":return e.stop()}}),e)})))()},addToComparelist:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=JSON.parse(localStorage.getItem("compare_products")),t.allCompareProducts&&0!=t.allCompareProducts.products.lngth?3==t.allCompareProducts.products.length?t.$toast.error(t.$t("compare_already_three_products_message")):r.includes(t.product.id)?t.$toast.error(t.$t("compare_product_already_exist")):(r.push(t.product.id),localStorage.setItem("compare_products",JSON.stringify(r)),t.$toast.success(t.$t("product_is_added_to_compare_list")),t.fetchCompareProducts({compare_ids:r})):((n=[]).push(t.product.id),localStorage.setItem("compare_products",JSON.stringify(n)),t.fetchCompareProducts({compare_ids:n}),t.$toast.success(t.$t("product_is_added_to_compare_list")));case 2:case"end":return e.stop()}}),e)})))()}},Object(o.b)({fetchCartItems:"Web/Cart/fetchCartItems",fetchWishlistItems:"Web/Wishlist/fetchWishlistItems",fetchCompareProducts:"Web/General/fetchCompareProducts"})),computed:d({},Object(o.c)({allCompareProducts:"Web/General/allCompareProducts"})),watch:{product:function(){this.product&&(this.key+=1)}}},_=m,f=r(71),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade quickViewModal",attrs:{id:t.modal_id,tabindex:"-1","aria-labelledby":"quickView","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-body"},[t.product?r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-12 col-md-6"},[t.product.media.length>0?r("VueSlickCarousel",t._b({key:t.key},"VueSlickCarousel",t.settings,!1),t._l(t.product.media,(function(e){return r("div",{key:e.id},["image"==e.type?r("div",{staticClass:"img-wrap"},[r("img",{staticClass:"d-block w-100",attrs:{src:"/backend"+e.original_media_path,alt:e.alt_text}})]):t._e(),t._v(" "),"video"==e.type?r("div",{staticClass:"img-wrap"},[r("video",{staticClass:"d-block w-100",attrs:{width:"auto",height:"auto",controls:"",src:"/backend"+e.original_media_path,alt:e.alt_text}})]):t._e()])})),0):t._e(),t._v(" "),t._l(t.product.tags,(function(e,n){return r("span",{staticClass:"badge",class:n%2==0?"bg-primary":"bg-danger"},[t._v(t._s(e))])}))],2),t._v(" "),r("div",{staticClass:"col-12 col-md-6 pro-description"},[r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}}),t._v(" "),r("div",{staticClass:"pro-sec price-sec"},[r("h4",[t._v(t._s(t.product.name))]),t._v(" "),r("p",{staticClass:"price-det",domProps:{innerHTML:t._s(t.product.short_description_web)}}),t._v(" "),r("div",{staticClass:"price-stock d-flex flex-row align-items-center mb-3"},[(t.is_variable,r("h4",{staticClass:"itm-price mb-0"},[t._v(t._s(t.price))])),t._v(" "),t.stock>=t.product.min_order?r("div",{staticClass:"about-stock text-success mb-0"},[t._v("\n                  "+t._s(t.$t("available_in_stock"))+"\n                ")]):r("div",{staticClass:"about-stock text-danger mb-0"},[t._v("\n                  "+t._s(t.$t("out_of_stock"))+"\n                ")])]),t._v(" "),r("div",{staticClass:"pro-rating"},[r("GlobalRating",{attrs:{rating:t.product.reviews_average_rating}})],1)]),t._v(" "),r("div",{staticClass:"pro-sec shop-name"},[t.product.brand?r("div",[r("span",[t._v(t._s(t.$t("brand"))+": ")]),r("span",[t._v(" "+t._s(t.product.brand.name))])]):t._e(),t._v(" "),t.product.sku?r("div",[r("span",[t._v(t._s(t.$t("sku"))+": ")]),r("span",[t._v(" "+t._s(t.product.sku))])]):t._e()]),t._v(" "),r("div",{staticClass:"pro-sec quantity-sec d-flex align-items-center"},[2!=t.product.product_type?r("h4",{staticClass:"me-3"},[t._v("Qty:")]):t._e(),t._v(" "),2!=t.product.product_type?r("WebsiteTemplate1PlusMinusInput",{key:t.key,attrs:{min:t.product.min_order,max:t.stock<t.product.max_order?t.stock:t.product.max_order},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}):t._e(),t._v(" "),2!=t.product.product_type?r("button",{staticClass:"\n                  icon-cont\n                  btn-custom\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                  px-2\n                ",attrs:{type:"button",disabled:t.stock<t.product.min_order},on:{click:t.addToCart}},[r("fa",{staticClass:"me-2",attrs:{icon:["fas","shopping-bag"]}})],1):r("button",{staticClass:"\n                  btn btn-primary\n                  ad-cart\n                  d-flex\n                  justify-content-center\n                  align-items-center\n                  px-2\n                ",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return t.$router.push("/product/"+t.product.slug)}}},[t._v("\n               "+t._s(t.$t("web.customer.orders.filter.view_details"))+"\n              ")]),t._v(" "),r("a",{staticClass:"icon-cont",attrs:{href:"#",onclick:"return false;"},on:{click:function(e){return t.addToWishlist()}}},[r("fa",{class:t.product.is_wishlisted||t.wishlist?"text-danger":"",attrs:{icon:["fas","heart"]}})],1),t._v(" "),r("a",{staticClass:"icon-cont",attrs:{href:"#",onclick:"return false;"},on:{click:function(e){return t.addToComparelist()}}},[r("fa",{attrs:{icon:["fas","exchange-alt"]}})],1),t._v(" "),r("a",{staticClass:"icon-cont",attrs:{href:"#",onclick:"return false;"}},[r("fa",{attrs:{icon:["fas","share"]}})],1)],1)])]):r("div",{},[r("AdminLoader")],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:r(664).default,WebsiteTemplate1PlusMinusInput:r(721).default,AdminLoader:r(661).default})}}]);