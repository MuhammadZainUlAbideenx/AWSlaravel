(window.webpackJsonp=window.webpackJsonp||[]).push([[332,108,121,244],{1090:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),c=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={auth:!1,data:function(){return{currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},head:function(){return this.allSettings&&this.allSettings.seo&&this.allSettings.seo.shop_page?this.allSettings.seo.shop_page:{title:this.$t("shop")}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allSettings:"allDefaultSettings"}))},m=l,d=r(71),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"shop-page m-0"},["Template1"==t.currentlyActiveTemplate?r("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"shop"}}):t._e(),t._v(" "),"Template1"==t.currentlyActiveTemplate?r("WebsiteGlobalComponentsVandersPromoSection",{attrs:{page:"shop"}}):t._e(),t._v(" "),r("Website"+t.currentlyActiveTemplate+"ShopPage",{tag:"Component"}),t._v(" "),r("WebsiteTemplate1NewsLetterSection")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebsiteGlobalComponentsBreadCrumb:r(687).default,WebsiteGlobalComponentsVandersPromoSection:r(788).default,WebsiteTemplate1NewsLetterSection:r(691).default})},677:function(t,e,r){var content=r(690);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("e62035f2",content,!0,{sourceMap:!1})},687:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),c=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:["page","post","product"],data:function(){return{currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({allSettings:"allDefaultSettings"}))},m=l,d=r(71),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"site-breadcrumb bg-secondary py-3 mt-0 mb-0"},["Template1"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row mx-0"},[r("div",{staticClass:"col px-0"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},689:function(t,e,r){"use strict";r(677)},690:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".cursor-pointer{cursor:pointer}",""]),n.locals={},t.exports=n},691:function(t,e,r){"use strict";r.r(e);var n=r(0),c=(r(5),{data:function(){return{formData:{email:""}}},methods:{add_email:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.addNewsletterEmail({email:t.formData.email}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==r.success?t.$toast.error(t.$t("subscription_email_already_exists_message")):(t.formData.email="",t.$toast.success(t.$t("subscription_email_added_message")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.response.data.errors&&(t.error=r.response.data.errors,t.error.email&&t.$toast.error(t.error.email[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}}),o=c,l=(r(689),r(71)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"news-letter m-0 news-temp2"},[r("div",{staticClass:"news-letter-mail py-5 mt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 pe-5"},[r("h2",{staticClass:"text-uppercase"},[t._v(t._s(this.$t("web.home.news.newsletter.heading")))]),t._v(" "),r("p",[t._v(t._s(this.$t("web.home.news.newsletter.description")))])]),t._v(" "),r("div",{staticClass:"col-sm-6 my-auto"},[r("div",{staticClass:"input-group mail shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control border rounded px-3",attrs:{placeholder:t.$t("enter_email"),type:"email"},domProps:{value:t.formData.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_email()},input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("span",{staticClass:"\n                input-group-append\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                me-3\n                cursor-pointer\n              ",on:{click:function(e){return t.add_email()}}},[r("fa",{attrs:{icon:["fa","paper-plane"]}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},788:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),c=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={computed:l(l({},Object(c.c)({allGenericData:"Web/General/allGenericData"})),{},{shop_banner:function(){return this.allGenericData.static_banners.shop_page[0]}})},d=r(71),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.allGenericData?t.allGenericData&&null!=t.allGenericData&&t.allGenericData.static_banners&&t.allGenericData.static_banners.shop_page&&t.allGenericData.static_banners.shop_page.length>0?r("section",{staticClass:"vander-promo-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[1==t.shop_banner.url_type?r("nuxt-link",{staticClass:"img-wrap overflow-hidden rounded d-flex",attrs:{to:t.shop_banner.website_url}},[t.shop_banner.image?r("img",{staticClass:"w-100 img-fluid",attrs:{src:"/backend"+t.shop_banner.image.original_media_path}}):t._e()]):r("a",{staticClass:"img-wrap overflow-hidden rounded d-flex",attrs:{href:t.shop_banner.website_url}},[t.shop_banner.image?r("img",{staticClass:"w-100 img-fluid",attrs:{src:"/backend"+t.shop_banner.image.original_media_path}}):t._e()])],1)])])]):r("section"):r("section",{staticClass:"vander-promo-section skeletion-effect"},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"banner skeletion-animation light"})])])])}],!1,null,null,null);e.default=component.exports}}]);