(window.webpackJsonp=window.webpackJsonp||[]).push([[379,34],{1264:function(t,l,e){"use strict";e.r(l);var c=e(0),n=(e(5),{layout:"admin",middleware:["admin","permission"],meta:{permission:"cities.index",strategy:"read"},data:function(){return{options:[{value:"",text:"Select your Positioning"},{value:"ltr",text:"Select ltr Positioning"},{value:"rtl",text:"Select rtl Positioning"}],city:"",error:!1}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function l(){var e,data;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.$repositories.cities.show(t.$route.params.id);case 2:e=l.sent,data=e.data,t.city=data;case 5:case"end":return l.stop()}}),l)})))()},methods:{},mounted:function(){}}),o=e(71),component=Object(o.a)(n,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("div",{staticClass:"content-header"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-sm-12 px-0"},[e("h2",{staticClass:"m-0 text-body bold"},[t._v("\n            "+t._s(this.$t("form.city.view_city"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 px-0"},[e("ol",{staticClass:"breadcrumb float-sm-right text-body"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/admin/cities")}},[t._v(t._s(this.$t("sidebar.city")))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active"},[t._v("\n                "+t._s(this.$t("form.view"))+"\n              ")])]),t._v(" "),e("p",{staticClass:"text-body-secondary"},[t._v("\n              "+t._s(this.$t("form.city.view_description"))+"\n            ")])])])])]),t._v(" "),e("section",{staticClass:"content"},[t.$fetchState.pending?e("div",[e("AdminViewLoader")],1):e("div",{staticClass:"container"},[e("div",{staticClass:"card gutter-b border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 px-0"},[e("div",{staticClass:"show-table px-0 mb-3"},[e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-3"},[e("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.city.name.label"))+"\n                        ")])]),t._v(" "),e("div",{staticClass:"col-3"},[e("p",[t._v(t._s(t.city.name))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.city.code.label"))+"\n                        ")])]),t._v(" "),e("div",{staticClass:"col-3"},[e("p",[t._v(t._s(t.city.code))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.city.country.label"))+"\n                        ")])]),t._v(" "),e("div",{staticClass:"col-3"},[e("p",[t._v(t._s(t.city.country.name))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("label",{staticClass:"label form-label"},[t._v("\n                          "+t._s(this.$t("form.city.state.label"))+"\n                        ")])]),t._v(" "),e("div",{staticClass:"col-3"},[e("p",[t._v(t._s(t.city.state.name))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("label",{staticClass:"form-label",attrs:{for:"input-live "}},[t._v(t._s(this.$t("form.city.status.label")))])]),t._v(" "),e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-switch"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked",disabled:""},domProps:{checked:t.city.is_active?"checked":""}})])])])])])])])])])])])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{AdminViewLoader:e(676).default})},676:function(t,l,e){"use strict";e.r(l);var c={props:["multilang","multilangImage"]},n=e(71),component=Object(n.a)(c,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"container skeletion-effect"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card gutter-b border-0"},[e("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t.multilang?e("div",[e("hr",{staticClass:"text-primary"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 py-2"},[e("div",{staticClass:"px-0 pt-3"},[e("h2",{staticClass:"skeletion-animation"}),t._v(" "),e("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 px-0 pt-3 d-flex"},[t._m(1),t._v(" "),e("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[e("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[e("div",{staticClass:"row"},[t.multilangImage?e("div",[t._m(2)]):t._e(),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])])])])])])])]):t._e()])])])])])}),[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 my-1"},[e("div",{staticClass:"show-table"},[e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text skeletion-animation"}),t._v(" "),e("div",{staticClass:"text skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text skeletion-animation"}),t._v(" "),e("div",{staticClass:"text skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"switch skeletion-animation"})])])])]),t._v(" "),e("div",{staticClass:"col-md-6 my-1"},[e("div",{staticClass:"show-table"},[e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text skeletion-animation"}),t._v(" "),e("div",{staticClass:"text skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text skeletion-animation"}),t._v(" "),e("div",{staticClass:"text skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"label skeletion-animation"})]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"switch skeletion-animation"})])])])])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[e("div",{staticClass:"tabs"}),t._v(" "),e("div",{staticClass:"tabs"}),t._v(" "),e("div",{staticClass:"tabs"})])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"col-md-12 my-1"},[e("div",{attrs:{role:"group"}},[e("div",{staticClass:"label skeletion-animation"}),t._v(" "),e("div",{staticClass:"py-2"},[e("div",{staticClass:"image skeletion-animation"})])])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"col-md-6 my-1"},[e("div",{attrs:{role:"group "}},[e("label",{staticClass:"label skeletion-animation"}),t._v(" "),e("div",{staticClass:"input skeletion-animation"}),t._v(" "),e("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 my-1"},[e("div",{attrs:{role:"group "}},[e("label",{staticClass:"label skeletion-animation"}),t._v(" "),e("div",{staticClass:"textarea skeletion-animation"}),t._v(" "),e("div",{staticClass:"subheading skeletion-animation"})])])])}],!1,null,null,null);l.default=component.exports}}]);