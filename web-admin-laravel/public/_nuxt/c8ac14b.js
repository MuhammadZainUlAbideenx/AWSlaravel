(window.webpackJsonp=window.webpackJsonp||[]).push([[290,19,44,87,211,262,282],{1040:function(t,e,n){t.exports=n.p+"img/separator.ac63af2.png"},1423:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(57),n(40),n(58);var r=n(21),o=n(0),c=(n(7),n(4),n(5),n(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allNewArrivalProducts){e.next=3;break}return e.next=3,t.fetchNewArrivalProducts();case 3:case"end":return e.stop()}}),e)})))()},methods:d({},Object(c.b)({fetchNewArrivalProducts:"Web/General/fetchNewArrivalProducts"})),computed:d(d({},Object(c.c)({allNewArrivalProducts:"Web/General/allNewArrivalProducts"})),{},{categoriesWhichHaveProducts:function(){return this.allNewArrivalProducts?this.allNewArrivalProducts.filter((function(t){return t.products.length>0})):[]}}),data:function(){return{settings:{infinite:!0,slidesToShow:3,rows:1,slidesPerRow:1,arrows:!1,autoplay:!0,responsive:[{breakpoint:1199,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:1}},{breakpoint:575,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}},v=n(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?r("section",[r("WebsiteSkeletonTemplate2NewArrival")],1):t.$fetchState.error?r("section",{staticClass:"featured-items"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("AdminLoader")],1)])]):t.categoriesWhichHaveProducts&&t.categoriesWhichHaveProducts.length>0?r("section",{staticClass:"new-arrivals"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col text-center"},[r("h2",{staticClass:"section-heading"},[t._v("\n                    "+t._s(this.$t("web.home.new_arrival_products.heading.text1"))+"\n                ")]),t._v(" "),r("img",{attrs:{src:n(1040),alt:""}}),t._v(" "),r("p",{staticClass:"section-subheading mt-2"},[t._v("\n                    "+t._s(this.$t("web.home.new_arrival_products.description"))+"\n                ")])])]),t._v(" "),t._l(t.categoriesWhichHaveProducts,(function(e,n){return r("div",{key:e.id,staticClass:"row categories-section"},[n%2==0?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-5 order-md-1 order-2"},[r("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(e.products,(function(t){return r("div",{key:t.id,staticClass:"mt-md-0 mt-4"},[r("Template2NewArrivalProductCard",{attrs:{product:t}})],1)})),0)],1),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-7 order-md-2 order-1"},[r("div",{staticClass:"new-arrival-static-banner h-100  rounded px-0"},[r("div",{staticClass:"img-wrap position-relative"},[r("img",{staticClass:"h-100 w-100",attrs:{src:"backend"+e.image.thumbnails.medium.thumbnail,alt:"category-banner"}}),t._v(" "),r("div",{staticClass:"position-absolute start-0 col-6 ps-3 py-4"},[r("h3",{staticClass:"fw-bold my-3"},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),r("p",{staticClass:"d-md-block d-none"},[t._v("\n                                   "+t._s(e.description)+"\n                            ")]),t._v(" "),r("nuxt-link",{staticClass:"arrival-link",attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v("\n                                "+t._s(t.$t("view_all_collection"))+"\n                            ")])],1)])])])]):t._e(),t._v(" "),n%2==1?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-7"},[r("div",{staticClass:"new-arrival-static-banner text-dark h-100 rounded px-0"},[r("div",{staticClass:"img-wrap position-relative"},[r("img",{staticClass:"h-100 w-100",attrs:{src:"backend"+e.image.thumbnails.medium.thumbnail,alt:"category-banner"}}),t._v(" "),r("div",{staticClass:"position-absolute end-0 ps-lg-3 py-4 pe-3"},[r("h2",{staticClass:"fw-bold mb-1"},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),r("h4",{staticClass:"fw-bold mb-3 d-md-block d-none"},[t._v("\n                               "+t._s(e.description)+"\n                            ")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-secondary text-white text-uppercase",attrs:{to:{path:"/shop",query:{category:e.slug}}}},[t._v(t._s(t.$t("shop_now"))+"\n                            ")])],1)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-5"},[r("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(e.products,(function(t){return r("div",{key:t.id,staticClass:"mt-md-0 mt-4"},[r("Template2NewArrivalProductCard",{attrs:{product:t}})],1)})),0)],1)]):t._e()])}))],2)]):r("div")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebsiteSkeletonTemplate2NewArrival:n(723).default,AdminLoader:n(661).default,Template2NewArrivalProductCard:n(719).default})},661:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(4),n(57),n(40),n(58);var r=n(21),o=n(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=l,m=n(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?r("div",{staticClass:"text-center"},[r("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):r("div",{staticClass:"text-center"},[r("img",{attrs:{src:n(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,n){t.exports=n.p+"img/defult-product-img.e4aa9fc.png"},663:function(t,e,n){t.exports=n.p+"img/loader.1aa8404.gif"},664:function(t,e,n){"use strict";n.r(e);var r={props:["rating"],data:function(){return{}}},o=n(71),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[n("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);e.default=component.exports},719:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(57),n(40),n(58);var r=n(0),o=n(21),c=(n(101),n(4),n(5),n(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={props:["product"],data:function(){return{wishlist:!1}},methods:d(d({},Object(c.b)({fetchCartItems:"Web/Cart/fetchCartItems",fetchWishlistItems:"Web/Wishlist/fetchWishlistItems"})),{},{addToCart:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.product.is_available){e.next=9;break}if(2!=t.product.product_type){e.next=5;break}t.$router.push("/product/".concat(t.product.slug)),e.next=7;break;case 5:return e.next=7,t.$webService.addCartItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.success){e.next=6;break}return t.$toast.success(n.message),e.next=4,t.fetchCartItems();case 4:e.next=7;break;case 6:t.$toast.error(n.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:e.next=10;break;case 9:t.$toast.error(t.$t("product_not_available"));case 10:case"end":return e.stop()}}),e)})))()},addToWishlist:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$auth.loggedIn||!t.$gates.hasRole("customer")){e.next=5;break}return e.next=3,t.$webService.addWishlistItem({product_id:t.product.id,quantity:1}).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchWishlistItems();case 2:0==n.success?t.$toast.error(n.data.message):(t.wishlist=!0,t.$toast.success(n.data.message));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=6;break;case 5:t.$toast.error(t.$t("please_login_first"));case 6:case"end":return e.stop()}}),e)})))()}}),computed:{image:function(){if(this.product.media){var image=this.product.media.find((function(t){return"image"==t.type}));return image||null}return null}}},v=m,_=n(71),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card m-0 p-3 bg-transparent h-100 border-1"},[r("div",{staticClass:"p-0 bg-light rounded position-relative mb-3 card-img overflow-hidden"},[t.product.media.length>0?r("img",{staticClass:"w-100 rounded card-image",attrs:{src:"/backend"+t.product.media[0].thumbnails.large.thumbnail,alt:""}}):r("img",{staticClass:"w-100 rounded card-image-1",attrs:{src:n(662),alt:""}}),t._v(" "),t.product.tags&&t.product.tags.length>0?r("div",{staticClass:"d-flex flex-column justify-content-end align-items-end position-absolute badge-custom"},t._l(t.product.tags,(function(e,n){return r("span",{key:n,staticClass:"d-block mb-1"},["Sale"==e?r("span",{staticClass:"badge me-1 bg-danger py-1 px-2"},[t._v("\n                         "+t._s(t.$t("web.home.new_arrival_products.sale"))+"\n                     ")]):t._e(),t._v(" "),"Featured"==e?r("span",{staticClass:"badge me-1 bg-primary py-1 px-2 position-relative text-uppercase"},[t._v("\n                         "+t._s(t.$t("web.home.new_arrival_products.featured"))+"\n                     ")]):t._e(),t._v(" "),"New"==e?r("span",{staticClass:"badge me-1 bg-success py-1 px-2 position-relative text-uppercase"},[t._v("\n                        "+t._s(t.$t("web.home.new_arrival_products.new"))+"\n                     ")]):t._e()])})),0):t._e()]),t._v(" "),r("div",{staticClass:"text-section"},[r("h3",[r("nuxt-link",{staticClass:"fs-5 fw-bold",attrs:{to:"/product/"+t.product.slug}},[t._v(t._s(t.product.name))])],1),t._v(" "),t.product.categories&&t.product.categories.length>0?r("span",t._l(t.product.categories,(function(e,n){return r("h4",{key:n,staticClass:"fs-6 text-dark-50"},[t._v(t._s(e.name))])})),0):t._e(),t._v(" "),r("div",{staticClass:"rating mb-2"},[r("GlobalRating",{attrs:{rating:t.product.reviews_average_rating}})],1),t._v(" "),t.product.flash_sale?r("span",{staticClass:"w-100 d-block mb-3 text-dark-50"},[t._v(t._s(t.product.display_price)),r("small",{staticClass:"text-danger"},[t._v(" "+t._s(t.product.flash_sale.display_price))])]):t.product.special_sale?r("span",{staticClass:"w-100 d-block mb-3 text-dark-50"},[t._v(t._s(t.product.display_price)),r("small",{staticClass:"text-danger"},[t._v(" "+t._s(t.product.special_sale.display_price))])]):r("span",{staticClass:"product-price d-flex align-items-center mb-3"},[t.product.attributes&&t.product.attributes.length>0?r("span",[t._v("\n                     "+t._s(t.$t("starting_from_price"))+"\n                 "),t.product.attributes&&t.product.attributes.length>0?r("span",{staticClass:"w-100 text-dark-50"},[t._v("\n                 "+t._s(t.product.starting_from_price)+"\n                 ")]):t._e()]):r("span",[r("span",{staticClass:"w-100 d-block text-dark-50"},[t._v("\n                 "+t._s(t.product.display_price)+"\n                 ")])])]),t._v(" "),r("div",{staticClass:"d-flex align-items-center"},[r("button",{staticClass:"btn btn-primary border-0 text-uppercase",attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v(t._s(t.$t("web.home.new_arrival_products.add_to_cart")))]),t._v(" "),r("span",[r("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("add_to_wishlist")},expression:"{ content: $t('add_to_wishlist') }"}],staticClass:"mx-2 list-icon d-flex flex-row align-items-center",attrs:{href:"#",onclick:"return false;"},on:{click:function(e){return t.addToWishlist()}}},[r("span",{staticClass:"list-icon",class:t.product.is_wishlisted||t.wishlist?"text-danger":""},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"23",height:"23",x:"0",y:"0",viewBox:"0 0 512.001 512","xml:space":"preserve"}},[r("g",{attrs:{transform:"matrix(1,0,0,1,0,30)"}},[r("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",fill:"currentColor","data-original":"currentColor"}})])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:n(664).default})},723:function(t,e,n){"use strict";n.r(e);var r=n(71),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-arrivals skeletion-effect"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h2",{staticClass:"section-heading section-heading-animation skeletion-animation text w-50"})])]),t._v(" "),n("div",{staticClass:"row categories-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"card card-border-animation skeletion-animation border-0"},[n("div",{staticClass:"img-wrap img-wrap-height rounded  overflow-hidden text"},[n("div",{staticClass:"thumb-img thumb-image-custom-height skeletion-animation text rounded",attrs:{src:"",alt:""}}),t._v(" "),n("span",{staticClass:"badge  skeletion-animation text custom-badge"})]),t._v(" "),n("div",{staticClass:"card-body text-start"},[n("h6",{staticClass:"fw-bold skeletion-animation text"}),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"rating mb-2 text-warning justify-content-start"},[n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"})]),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"price-icon d-flex flex-row"},[n("div",{staticClass:"price skeletion-animation text me-3 px-5"}),t._v(" "),n("div",{staticClass:"price skeletion-animation text px-2"})])])])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"card card-border-animation skeletion-animation border-0"},[n("div",{staticClass:"img-wrap img-wrap-height rounded  overflow-hidden text"},[n("div",{staticClass:"thumb-img thumb-image-custom-height skeletion-animation text rounded",attrs:{src:"",alt:""}}),t._v(" "),n("span",{staticClass:"badge  skeletion-animation text custom-badge"})]),t._v(" "),n("div",{staticClass:"card-body text-start"},[n("h6",{staticClass:"fw-bold skeletion-animation text"}),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"rating mb-2 text-warning justify-content-start"},[n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"})]),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"price-icon d-flex flex-row"},[n("div",{staticClass:"price skeletion-animation text me-3 px-5"}),t._v(" "),n("div",{staticClass:"price skeletion-animation text px-2"})])])])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"card card-border-animation skeletion-animation border-0"},[n("div",{staticClass:"img-wrap img-wrap-height rounded  overflow-hidden text"},[n("div",{staticClass:"thumb-img thumb-image-custom-height skeletion-animation text rounded",attrs:{src:"",alt:""}}),t._v(" "),n("span",{staticClass:"badge  skeletion-animation text custom-badge"})]),t._v(" "),n("div",{staticClass:"card-body text-start"},[n("h6",{staticClass:"fw-bold skeletion-animation text"}),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"rating mb-2 text-warning justify-content-start"},[n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"})]),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"price-icon d-flex flex-row"},[n("div",{staticClass:"price skeletion-animation text me-3 px-5"}),t._v(" "),n("div",{staticClass:"price skeletion-animation text px-2"})])])])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"card card-border-animation skeletion-animation border-0"},[n("div",{staticClass:"img-wrap img-wrap-height rounded  overflow-hidden text"},[n("div",{staticClass:"thumb-img thumb-image-custom-height skeletion-animation text rounded",attrs:{src:"",alt:""}}),t._v(" "),n("span",{staticClass:"badge  skeletion-animation text custom-badge"})]),t._v(" "),n("div",{staticClass:"card-body text-start"},[n("h6",{staticClass:"fw-bold skeletion-animation text"}),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"rating mb-2 text-warning justify-content-start"},[n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"}),t._v(" "),n("span",{staticClass:"skeletion-animation text"})]),t._v(" "),n("h6",{staticClass:"fw-bold skeletion-animation text w-25"}),t._v(" "),n("div",{staticClass:"price-icon d-flex flex-row"},[n("div",{staticClass:"price skeletion-animation text me-3 px-5"}),t._v(" "),n("div",{staticClass:"price skeletion-animation text px-2"})])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);