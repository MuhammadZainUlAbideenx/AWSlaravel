(window.webpackJsonp=window.webpackJsonp||[]).push([[459,19,38],{1214:function(t,e,r){"use strict";r.r(e);r(43),r(7),r(4),r(57),r(40),r(58);var n=r(0),o=r(21),c=(r(5),r(33),r(81),r(26),r(25),r(49),r(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",middleware:["admin","permission"],meta:{permission:"permissions.create",strategy:"create"},data:function(){return{editorConfig:{},formData:{name:"",description:{},display_name:{}},error:!1}},fetch:function(){},methods:d(d({},Object(c.b)({addPermissions:"Permissions/addPermissions",fetchActivePermissions:"General/fetchActivePermissions"})),{},{add:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/permissions"));case 3:case"end":return e.stop()}}),e)})))()},addAndContinue:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addPermissions(t.formData).then((function(e){var r;e.response?(t.error=null!==(r=e.response.data.errors)&&void 0!==r?r:e.response.data,t.$toast.error(e.response.data.message)):(t.error=!1,t.formData.name="",t.formData.description={},t.formData.display_name={},t.$toast.success(e.message),t.fetchActivePermissions())}));case 2:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:d({},Object(c.c)({allActiveLanguages:"General/allActiveLanguages"}))},v=r(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n            "+t._s(this.$t("form.permission.create_new_permission"))+"\n          ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/permissions")}},[t._v(t._s(this.$t("sidebar.permission")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n                "+t._s(this.$t("form.create"))+"\n              ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n              "+t._s(this.$t("form.permission.form_description"))+"\n            ")])])])])]),t._v(" "),r("section",{staticClass:"content pb-5"},[t.$fetchState.pending?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("AdminLoader")],1)])]):r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{permission:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.permission.name.label"))+":")]),t._v(" "),t.error&&t.error.name?r("span",{staticClass:"float-end text-danger"},[t._v("\n                        "+t._s(t.error.name[0])+"\n                      ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",class:t.error&&t.error.name?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.permission.name.placeholder"),trim:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                        "+t._s(t.$t("form.permission.name.subheading"))+"\n                      ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",permission:"tablist"}},t._l(t.allActiveLanguages.languages,(function(e,n){return r("li",{key:n,staticClass:"nav-item",attrs:{permission:"presentation"}},[r("a",{staticClass:"nav-link",class:0==n?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,permission:"tab","aria-controls":e.code,"aria-selected":0==n?"true":"false"}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,n){return r("div",{key:e.code,staticClass:"tab-pane fade",class:0==n?"active show":"",attrs:{id:e.code,permission:"tabpanel","aria-labelledby":e.code+"-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 px-4"},[r("div",{attrs:{permission:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.permission.display_name.label"))+":")]),t._v(" "),t.error&&t.error["display_name."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["display_name."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.display_name[e.code],expression:"formData.display_name[language.code]"}],staticClass:"form-control",class:t.error&&t.error["display_name."+e.code]?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.permission.display_name.placeholder"),trim:""},domProps:{value:t.formData.display_name[e.code]},on:{input:function(r){r.target.composing||t.$set(t.formData.display_name,e.code,r.target.value)}}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.permission.display_name.subheading"))+"\n                                    ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1 px-4"},[r("div",{attrs:{permission:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.permission.description.label"))+":")]),t._v(" "),t.error&&t.error["description."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["description."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("GlobalCkeditorNuxt",{model:{value:t.formData.description[e.code],callback:function(r){t.$set(t.formData.description,e.code,r)},expression:"formData.description[language.code]"}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.permission.description.subheading"))+"\n                                    ")])],1)])])])})),0)])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-start"},[r("button",{staticClass:"btn btn-primary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.add}},[t._v("\n                      "+t._s(this.$t("form.add"))+"\n                    ")]),t._v(" "),r("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.addAndContinue}},[t._v("\n                      "+t._s(this.$t("form.add_and_continue"))+"\n                    ")])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminLoader:r(661).default,GlobalCkeditorNuxt:r(667).default})},661:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=l,m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):n("div",{staticClass:"text-center"},[n("img",{attrs:{src:r(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){t.exports=r.p+"img/loader.1aa8404.gif"},667:function(t,e,r){"use strict";r.r(e);var n;n=r(684);var o={components:{ckeditor:r(685).component},props:{value:{type:String,required:!1},tagName:{type:String,required:!1,default:"div"},disabled:{type:Boolean,required:!1},uploadUrl:{type:String,required:!1},config:{type:Object,required:!1,default:function(){}}},data:function(){return{editor:n}}},c=r(71),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ckeditor",{attrs:{editor:t.editor,value:t.value,config:t.config,tagName:t.tagName,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports}}]);