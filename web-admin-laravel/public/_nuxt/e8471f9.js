(window.webpackJsonp=window.webpackJsonp||[]).push([[481,17,30],{1304:function(e,t,r){"use strict";r.r(t);r(43),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),c=(r(5),r(25),r(49),r(33),r(81),r(129));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={layout:"admin",middleware:["admin","permission"],meta:{permission:"reviews.update",strategy:"update"},data:function(){return{selected_customer:"",selected_product:"",selected_review_status:"",formData:{customer_id:"",product_id:"",review_status_id:"",description:"",rating:"",is_active:!1},disabled:!1,error:!1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.allActiveProducts.products){t.next=3;break}return t.next=3,e.fetchActiveProducts();case 3:if(e.allActiveCustomers.customers){t.next=6;break}return t.next=6,e.fetchActiveCustomers();case 6:if(e.allActiveReviewStatuses.review_statuses){t.next=9;break}return t.next=9,e.fetchActiveReviewStatuses();case 9:return t.next=11,e.$repositories.reviews.show(e.$route.params.id);case 11:r=t.sent,data=r.data,e.formData.description=data.description,e.formData.rating=data.rating,e.formData.customer_id=data.customer.id,e.selected_customer=data.customer,e.selected_product=data.product,e.formData.product_id=data.product.id,e.formData.review_status_id=data.review.id,e.selected_review_status=data.review,e.formData.is_active=data.is_active;case 22:case"end":return t.stop()}}),t)})))()},methods:d(d({},Object(c.b)({updateReviews:"Reviews/updateReviews",fetchActiveReviews:"General/fetchActiveReviews",fetchActiveProducts:"General/fetchActiveProducts",fetchActiveReviewStatuses:"General/fetchActiveReviewStatuses",fetchActiveCustomers:"General/fetchActiveCustomers"})),{},{update:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateAndContinue();case 2:e.error||e.$router.replace(e.localePath("/admin/reviews"));case 3:case"end":return t.stop()}}),t)})))()},updateAndContinue:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disabled=!0,t.next=3,e.updateReviews({formData:e.formData,id:e.$route.params.id}).then((function(t){var r;t.response?(e.error=null!==(r=t.response.data.errors)&&void 0!==r?r:t.response.data,e.$toast.error(t.response.data.message)):"fail"==t.state?e.$toast.error(t.message):(e.error=!1,e.$toast.success(t.message),e.fetchActiveReviews())}));case 3:e.disabled=!1;case 4:case"end":return t.stop()}}),t)})))()}}),computed:d({},Object(c.c)({allActiveProducts:"General/allActiveProducts",allActiveCustomers:"General/allActiveCustomers",allActiveReviewStatuses:"General/allActiveReviewStatuses"})),mounted:function(){}},m=r(71),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[e._v("\n            "+e._s(this.$t("form.review.edit_review"))+"\n          ")])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:e.localePath("/admin/dashboard")}},[e._v(e._s(this.$t("sidebar.home")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:e.localePath("/admin/reviews")}},[e._v(e._s(this.$t("sidebar.review")))])],1),e._v(" "),r("li",{staticClass:"breadcrumb-item active"},[e._v("\n                "+e._s(this.$t("form.edit"))+"\n              ")])]),e._v(" "),r("p",{staticClass:"text-body-secondary"},[e._v("\n              "+e._s(this.$t("form.review.edit_description"))+"\n            ")])])])])]),e._v(" "),r("section",{staticClass:"content pb-5"},[e.$fetchState.pending?r("div",[r("AdminFormLoader")],1):r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 ps-md-0"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"  form-label",attrs:{for:"input-live"}},[e._v(e._s(e.$t("form.review.customer.label"))+":")]),e._v(" "),e.error&&e.error.customer_id?r("span",{staticClass:"float-end text-danger"},[e._v("\n                        "+e._s(e.error.customer_id[0])+"\n                      ")]):e._e(),e._v(" "),r("AdminSearchSelectable",{class:e.error&&e.error.customer_id?"error":"",attrs:{apiMethod:"activeCustomers",responseKey:"customers",initialOptions:e.allActiveCustomers.customers,selectedOptions:e.selected_customer,placeholder:e.$t("form.review.customer.placeholder")},model:{value:e.formData.customer_id,callback:function(t){e.$set(e.formData,"customer_id",t)},expression:"formData.customer_id"}}),e._v(" "),r("span",{staticClass:"  heebo-light"},[e._v("\n                        "+e._s(e.$t("form.review.customer.subheading"))+"\n                      ")])],1)]),e._v(" "),r("div",{staticClass:"col-md-6 my-1 pe-md-0"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(e.$t("form.review.product.label"))+":")]),e._v(" "),e.error&&e.error.product_id?r("span",{staticClass:"float-end text-danger"},[e._v("\n                        "+e._s(e.error.product_id[0])+"\n                      ")]):e._e(),e._v(" "),r("AdminSearchSelectable",{class:e.error&&e.error.product_id?"error":"",attrs:{apiMethod:"activeProducts",responseKey:"products",initialOptions:e.allActiveProducts.products,selectedOptions:e.selected_product,placeholder:e.$t("form.review.product.placeholder")},model:{value:e.formData.product_id,callback:function(t){e.$set(e.formData,"product_id",t)},expression:"formData.product_id"}}),e._v(" "),r("span",{staticClass:"  heebo-light"},[e._v("\n                        "+e._s(e.$t("form.review.product.subheading"))+"\n                      ")])],1)]),e._v(" "),r("div",{staticClass:"col-md-6 my-1 ps-md-0"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(e.$t("form.review.set_status.label"))+":")]),e._v(" "),e.error&&e.error.review_status_id?r("span",{staticClass:"float-end text-danger"},[e._v("\n                        "+e._s(e.error.review_status_id[0])+"\n                      ")]):e._e(),e._v(" "),r("AdminSearchSelectable",{class:e.error&&e.error.review_status_id?"error":"",attrs:{apiMethod:"activeReviewStatuses",responseKey:"review_statuses",initialOptions:e.allActiveReviewStatuses.review_statuses,selectedOptions:e.selected_review_status,placeholder:e.$t("form.review.set_status.placeholder")},model:{value:e.formData.review_status_id,callback:function(t){e.$set(e.formData,"review_status_id",t)},expression:"formData.review_status_id"}}),e._v(" "),r("span",{staticClass:"  heebo-light"},[e._v("\n                        "+e._s(e.$t("form.review.customer.subheading"))+"\n                      ")])],1)]),e._v(" "),r("div",{staticClass:"col-md-6 my-1 pe-md-0"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(this.$t("form.review.description.label"))+":")]),e._v(" "),e.error&&e.error.description?r("span",{staticClass:"float-end text-danger"},[e._v("\n                        "+e._s(e.error.description[0])+"\n                      ")]):e._e(),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.description,expression:"formData.description"}],staticClass:"form-control",attrs:{placeholder:this.$t("form.admin.description.placeholder"),"aria-describedby":"input-live-help input-live-feedback",rows:"8",cols:"50"},domProps:{value:e.formData.description},on:{input:function(t){t.target.composing||e.$set(e.formData,"description",t.target.value)}}}),e._v(" "),r("span",{staticClass:"heebo-light"},[e._v("\n                               "+e._s(e.$t("form.review.description.subheading"))+"\n                           ")])])]),e._v(" "),r("div",{staticClass:"col-md-6 my-1 ps-md-0"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(this.$t("form.review.rating.label"))+":")]),e._v(" "),e.error&&e.error.rating?r("span",{staticClass:"float-end text-danger"},[e._v("\n                        "+e._s(e.error.rating[0])+"\n                      ")]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.rating,expression:"formData.rating"}],staticClass:"form-control",class:e.error&&e.error.rating?"error":"",attrs:{type:"number",maxlength:"5.0",minlength:"0.0","aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.review.rating.placeholder"),trim:""},domProps:{value:e.formData.rating},on:{input:function(t){t.target.composing||e.$set(e.formData,"rating",t.target.value)}}}),e._v(" "),r("span",{staticClass:" heebo-light"},[e._v("\n                               "+e._s(e.$t("form.review.rating.subheading"))+"\n                           ")])])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 mb-3 ps-md-0"},[r("div",{staticClass:"d-flex align-items-center "},[r("label",{staticClass:"label form-label me-4 text-capitalize"},[e._v("\n                      "+e._s(this.$t("form.review.status.label"))+"\n                    ")]),e._v(" "),r("div",{staticClass:"form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.is_active,expression:"formData.is_active"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:e.formData.is_active?"checked":"",checked:Array.isArray(e.formData.is_active)?e._i(e.formData.is_active,null)>-1:e.formData.is_active},on:{change:function(t){var r=e.formData.is_active,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&e.$set(e.formData,"is_active",r.concat([null])):c>-1&&e.$set(e.formData,"is_active",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(e.formData,"is_active",o)}}})])]),e._v(" "),r("span",{staticClass:" heebo-light"},[e._v("\n                    "+e._s(e.$t("form.review.status.subheading"))+"\n                  ")])])])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[r("button",{staticClass:"btn btn-secondary mb-3 px-3 py-2",attrs:{type:"button",disabled:e.disabled,name:"button"},on:{click:e.update}},[e._v("\n                      "+e._s(this.$t("form.update"))+"\n                    ")])])])])])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AdminFormLoader:r(660).default,AdminSearchSelectable:r(666).default})},660:function(e,t,r){"use strict";r.r(t);var n={props:["multilang"]},o=r(71),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container skeletion-effect"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e.multilang?r("div",[r("hr",{staticClass:"text-primary"}),e._v(" "),e._m(2)]):e._e()])])]),e._v(" "),e._m(3)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),e._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),e._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),e._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6  my-1 d-flex justify-content-center flex-column "},[r("div",{staticClass:"d-flex align-items-center "},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"switch skeletion-animation"})]),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 py-2"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:" skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0 pt-3 d-md-flex"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[r("div",{staticClass:"tabs"}),e._v(" "),r("div",{staticClass:"tabs"}),e._v(" "),r("div",{staticClass:"tabs"})]),e._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"textarea  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])])])])])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[r("div",{staticClass:"button-add skeletion-animation"}),e._v(" "),r("div",{staticClass:"button-continue skeletion-animation"})])])}],!1,null,null,null);t.default=component.exports},666:function(e,t,r){"use strict";r.r(t);r(43),r(25),r(7),r(57),r(40),r(58);var n=r(59),o=r(0),c=r(21);r(5),r(47),r(101),r(4),r(33),r(258),r(27),r(259),r(28),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(66);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{loadMoreClicked:!1,options:{data:[]},selectedData:"",searchData:{page:1,search:""}}},props:{value:{required:!1},show_key:{required:!1,default:"name"},initialOptions:{required:!1},selectedOptions:{required:!1},search_id:{required:!1},multiple:{required:!1},disabled:{required:!1},apiMethod:{required:!1},responseKey:{required:!1},placeholder:{required:!1}},mounted:function(){this.initialOptions&&(this.options=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.initialOptions)),this.selectedOptions&&(this.options.data=this.options.data.concat(this.selectedOptions),this.makeConcatedOptionsUnique())},methods:{sendWholeObj:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.options.data.find((function(t){return t.id==e})),t.$emit("input",e,n),t.selectedData=n,null!==e){r.next=8;break}return t.searchData.search="",t.selectedData="",r.next=8,t.callApi(!0);case 8:case"end":return r.stop()}}),r)})))()},onSearch:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.loadMoreClicked=!1,r.searchData.page=1,r.searchData.search=e||"",t(!0),n.next=6,r.callApi(t,e);case 6:case"end":return n.stop()}}),n)})))()},callApi:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.search_id){n.next=5;break}return n.next=3,r.$generalService[r.apiMethod](r.search_id,r.searchData).then((function(n){r.options.meta=n[r.responseKey][r.responseKey].meta,r.options.links=n[r.responseKey][r.responseKey].links,r.loadMoreClicked?r.options.data=r.options.data.concat(n[r.responseKey][r.responseKey].data):r.options.data=n[r.responseKey][r.responseKey].data,r.makeConcatedOptionsUnique(),r.searchData.page=n[r.responseKey][r.responseKey].meta.current_page,t||r.options.data.push(r.selectedData),e&&e(!1)})).catch((function(e){}));case 3:n.next=7;break;case 5:return n.next=7,r.$generalService[r.apiMethod](r.searchData).then((function(n){r.options.meta=n[r.responseKey][r.responseKey].meta,r.options.links=n[r.responseKey][r.responseKey].links,r.loadMoreClicked?r.options.data=r.options.data.concat(n[r.responseKey][r.responseKey].data):r.options.data=n[r.responseKey][r.responseKey].data,r.makeConcatedOptionsUnique(),r.searchData.page=n[r.responseKey][r.responseKey].meta.current_page,t||r.options.data.push(r.selectedData),e&&e(!1)})).catch((function(e){}));case 7:case"end":return n.stop()}}),n)})))()},makeConcatedOptionsUnique:function(){var e=Object(n.a)(new Map(this.options.data.map((function(e){return[e.id,e]}))).values());this.options.data=e},loadMore:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadMoreClicked=!0,e.options&&e.options.links&&e.options.links.next&&(e.searchData.page+=1,e.callApi());case 2:case"end":return t.stop()}}),t)})))()}}},v=d,m=r(71),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-select",{attrs:{value:e.value,reduce:function(e){return e.id},multiple:e.multiple,placeholder:e.placeholder,disabled:e.disabled,label:e.show_key,filterable:!1,options:e.options.data},on:{input:function(t){return e.sendWholeObj(t)},search:e.onSearch},scopedSlots:e._u([{key:"option",fn:function(option){return[r("div",{staticClass:"d-center"},[e._v("\n      "+e._s(option[e.show_key])+"\n    ")])]}},{key:"selected-option",fn:function(option){return[r("div",{staticClass:"selected d-center"},[e._v("\n      "+e._s(option[e.show_key])+"\n    ")])]}},{key:"list-footer",fn:function(){return[r("div",{staticClass:"text-center"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.options&&e.options.links&&e.options.links.next&&e.options.meta&&e.options.meta.total!=e.options.data.length,expression:"\n          options &&\n          options.links &&\n          options.links.next &&\n          options.meta &&\n          options.meta.total != options.data.length\n        "}],staticClass:"btn btn-transparent text-primary",attrs:{type:"button",name:"button"},on:{click:e.loadMore}},[e._v("\n        "+e._s(e.$t("load_more"))+"\n      ")])])]},proxy:!0}])},[r("template",{slot:"no-options"},[e._v("\n    "+e._s(e.$t("form.search_select.no_options"))+"\n  ")])],2)}),[],!1,null,"7b020332",null);t.default=component.exports}}]);