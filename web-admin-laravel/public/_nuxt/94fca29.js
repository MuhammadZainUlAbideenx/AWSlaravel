(window.webpackJsonp=window.webpackJsonp||[]).push([[111,44],{664:function(t,e,r){"use strict";r.r(e);var n={props:["rating"],data:function(){return{}}},o=r(71),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[r("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,r){t.exports=r.p+"img/mart-section-bg.c3a223e.png"},706:function(t,e,r){t.exports=r.p+"img/mart-section-logo.8953740.png"},794:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),l=(r(5),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["vendor"],data:function(){return{follow:!1,currentlyActiveTemplate:"",data:{vendor_id:"",customer_id:""},settings:{infinite:!0,slidesToShow:4,speed:500,rows:2,slidesPerRow:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}},methods:{followVendor:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$auth.loggedIn||!e.$gates.hasRole("customer")){r.next=7;break}return e.data.vendor_id=t,e.data.customer_id=e.$auth.user.id,r.next=5,e.$webService.followVendor(e.data).then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.follow=r.data.is_follow,e.$emit("updateFollowCount",e.follow),e.$toast.success(r.message);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:r.next=8;break;case 7:e.$toast.error(e.$t("please_login_first"));case 8:case"end":return r.stop()}}),r)})))()}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme,this.follow=this.vendor.is_followed},computed:d(d({},Object(l.c)({allSettings:"allDefaultSettings"})),{},{cover_image:function(){return this.vendor&&this.vendor.store&&this.vendor.store.cover_image?this.vendor.store.cover_image:null},store_logo:function(){return this.vendor&&this.vendor.store&&this.vendor.store.store_logo?this.vendor.store.store_logo:null}})},_=v,f=r(71),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"vender-detail mart-sectioin mt-5"},["Template1"==t.currentlyActiveTemplate?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"vender-detail-wrap bg-secondary rounded-bottom pb-4"},[n("div",{staticClass:"mart-bg-wrap"},[null!=t.vendor.store&&t.vendor.store.cover_image?n("img",{staticClass:"mart-bg",attrs:{src:"/backend"+t.vendor.store.cover_image.original_media_path,alt:""}}):n("img",{staticClass:"mart-bg",attrs:{src:r(705),alt:""}}),t._v(" "),n("div",{staticClass:"mart-logo-wrap img-wrap"},[null!=t.vendor.store&&t.vendor.store.store_logo?n("img",{staticClass:"img-fluid",attrs:{src:"/backend"+t.vendor.store.store_logo.original_media_path,alt:""}}):n("img",{staticClass:"img-fluid",attrs:{src:r(706),alt:""}})])]),t._v(" "),null!=t.vendor.store&&t.vendor.store.name?n("h2",{staticClass:"section-heading"},[t._v(t._s(this.vendor.store.name))]):t._e(),t._v(" "),n("div",{staticClass:"\n              vender-info\n              d-flex\n              justify-content-between\n              align-items-center\n              p-4\n              px-5\n\n            "},[n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.seller_rating"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.reviews_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.order_completion"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.orders_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-followers"},[n("div",[t._v("  "+t._s(t.$t("web.customer.featured_vendor_profile.followers")))]),t._v(" "),n("div",{staticClass:"text-primary fw-bold mb-1"},[t._v(t._s(t.vendor.total_follower))])]),t._v(" "),n("div",{staticClass:"vender-btns"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews?type=all-products"}},[n("button",{staticClass:"\n                  btn btn-primary\n                  text-white\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mb-2\n                  mx-auto\n                "},[t._v("\n                "+t._s(t.$t("web.customer.featured_vendor_profile.all_products"))+"\n              ")])]),t._v(" "),n("button",{staticClass:"\n                  btn btn-warning\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mx-auto\n                ",on:{click:function(e){return t.followVendor(t.vendor.id)}}},[n("fa",{staticClass:"me-2",class:t.follow?"text-danger":"",attrs:{icon:["fas","heart"]}}),t._v(" "+t._s(t.$t("follow"))+"\n              ")],1)],1)])])])])]):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"vender-detail-wrap bg-secondary rounded-bottom pb-4"},[n("div",{staticClass:"mart-bg-wrap"},[null!=t.vendor.store&&t.vendor.store.cover_image?n("img",{staticClass:"mart-bg",attrs:{src:"/backend"+t.vendor.store.cover_image.original_media_path,alt:""}}):n("img",{staticClass:"mart-bg",attrs:{src:r(705),alt:""}}),t._v(" "),n("div",{staticClass:"mart-logo-wrap img-wrap"},[null!=t.vendor.store&&t.vendor.store.store_logo?n("img",{staticClass:"img-fluid",attrs:{src:"/backend"+t.vendor.store.store_logo.original_media_path,alt:""}}):n("img",{staticClass:"img-fluid",attrs:{src:r(706),alt:""}})])]),t._v(" "),null!=t.vendor.store&&t.vendor.store.name?n("h2",{staticClass:"section-heading"},[t._v(t._s(this.vendor.store.name))]):t._e(),t._v(" "),n("div",{staticClass:"\n              vender-info\n              d-flex\n              justify-content-between\n              align-items-center\n              p-4\n              px-5\n\n            "},[n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                   "+t._s(t.$t("web.customer.featured_vendor_profile.seller_rating"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.reviews_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-rating"},[n("div",{staticClass:"text-primary fw-bold mb-1"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews"}},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.order_completion"))+"\n                ")])],1),t._v(" "),n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:""+t.vendor.orders_average_rating}})],1)]),t._v(" "),n("div",{staticClass:"vender-followers"},[n("div",[t._v(t._s(t.$t("web.customer.featured_vendor_profile.followers")))]),t._v(" "),n("div",{staticClass:"text-primary fw-bold mb-1"},[t._v(t._s(t.vendor.total_follower))])]),t._v(" "),n("div",{staticClass:"vender-btns"},[n("nuxt-link",{attrs:{to:"/store/"+t.vendor.store.slug+"/reviews?type=all-products"}},[n("button",{staticClass:"\n                  btn btn-primary\n                  text-white\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mb-2\n                  mx-auto\n                "},[t._v("\n                 "+t._s(t.$t("web.customer.featured_vendor_profile.all_products"))+"\n              ")])]),t._v(" "),n("button",{staticClass:"\n                  btn btn-warning\n                  rounded\n                  fw-bold\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                  mx-auto\n                ",on:{click:function(e){return t.followVendor(t.vendor.id)}}},[n("fa",{staticClass:"me-2",class:t.follow?"text-danger":"",attrs:{icon:["fas","heart"]}}),t._v(" "+t._s(t.$t("follow"))+"\n              ")],1)],1)])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalRating:r(664).default})}}]);