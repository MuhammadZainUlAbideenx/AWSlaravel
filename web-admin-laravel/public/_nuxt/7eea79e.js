(window.webpackJsonp=window.webpackJsonp||[]).push([[361,19,30,38],{1255:function(t,e,r){"use strict";r.r(e);r(43),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(0),c=(r(5),r(26),r(25),r(49),r(33),r(81),r(129));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={layout:"admin",middleware:["admin","permission"],meta:{permission:"attribute_values.update",strategy:"update"},data:function(){return{selected_attribute:"",formData:{name:{},attribute_id:"",description:{},is_active:!1},disabled:!1,error:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allActiveAttributes.attributes){e.next=3;break}return e.next=3,t.fetchActiveAttributes();case 3:return e.next=5,t.$repositories.attribute_values.show(t.$route.params.id);case 5:r=e.sent,data=r.data,t.formData.name=data.nameTranslations,t.formData.description=data.descriptionTranslations,t.formData.is_active=data.is_active,data.attribute&&(t.formData.attribute_id=data.attribute.id,t.selected_attribute=data.attribute);case 11:case"end":return e.stop()}}),e)})))()},methods:d(d({},Object(c.b)({updateAttributeValues:"AttributeValues/updateAttributeValues",fetchActiveAttributes:"General/fetchActiveAttributes",fetchActiveAttributeValues:"General/fetchActiveAttributeValues"})),{},{update:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/attribute_values"));case 3:case"end":return e.stop()}}),e)})))()},updateAndContinue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!0,e.next=3,t.updateAttributeValues({formData:t.formData,id:t.$route.params.id}).then((function(e){var r;e.response?(t.error=null!==(r=e.response.data.errors)&&void 0!==r?r:e.response.data,t.$toast.error(e.response.data.message)):"fail"==e.state?t.$toast.error(e.message):(t.error=!1,t.$toast.success(e.message),t.fetchActiveAttributeValues())}));case 3:t.disabled=!1;case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:d({},Object(c.c)({allActiveLanguages:"General/allActiveLanguages",allActiveAttributes:"General/allActiveAttributes"}))},m=r(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n              "+t._s(this.$t("form.attribute_value.edit_attribute"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/attribute_values")}},[t._v(t._s(this.$t("sidebar.attribute_value")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n                  "+t._s(this.$t("form.edit"))+"\n                ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n                "+t._s(this.$t("form.attribute_value.edit_description"))+"\n              ")])])])])]),t._v(" "),r("section",{staticClass:"content pb-5"},[t.$fetchState.pending?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("AdminLoader")],1)])]):r("div",{staticClass:"container"},[r("div",{staticClass:"row "},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 px-4"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.attribute_value.attribute.label"))+":")]),t._v(" "),t.error&&t.error.attribute_id?r("span",{staticClass:"float-end text-danger"},[t._v("\n                        "+t._s(t.error.attribute_id[0])+"\n                      ")]):t._e(),t._v(" "),r("AdminSearchSelectable",{class:t.error&&t.error.attribute_id?"error":"",attrs:{apiMethod:"activeAttributes",responseKey:"attributes",initialOptions:t.allActiveAttributes.attributes,placeholder:this.$t("form.attribute_value.attribute.placeholder"),selectedOptions:t.selected_attribute},model:{value:t.formData.attribute_id,callback:function(e){t.$set(t.formData,"attribute_id",e)},expression:"formData.attribute_id"}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                        "+t._s(t.$t("form.attribute_value.attribute.subheading"))+"\n                      ")])],1)]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 d-flex justify-content-center flex-column"},[r("div",{staticClass:"d-flex align-items-center"},[r("label",{staticClass:"label form-label me-4 text-capitalize"},[t._v("\n                      "+t._s(this.$t("form.attribute_value.status.label"))+"\n                    ")]),t._v(" "),r("div",{staticClass:"form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.is_active,expression:"formData.is_active"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.is_active?"checked":"",checked:Array.isArray(t.formData.is_active)?t._i(t.formData.is_active,null)>-1:t.formData.is_active},on:{change:function(e){var r=t.formData.is_active,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&t.$set(t.formData,"is_active",r.concat([null])):c>-1&&t.$set(t.formData,"is_active",r.slice(0,c).concat(r.slice(c+1)))}else t.$set(t.formData,"is_active",o)}}})])]),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                    "+t._s(t.$t("form.attribute_value.status.subheading"))+"\n                  ")])])]),t._v(" "),r("hr",{staticClass:"text-primary"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v(t._s(t.$t("form.multilanguage")))]),t._v(" "),r("p",[r("span",{staticClass:"heebo-light"},[t._v("\n                          "+t._s(t.$t("form.manufacturer.website_url.subheading"))+"\n                        ")])]),t._v(" "),r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-lg-12 px-0 d-md-flex"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},t._l(t.allActiveLanguages.languages,(function(e,n){return r("li",{key:n,staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",class:0==n?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,role:"tab","aria-controls":e.code,"aria-selected":0==n?"true":"false"}},[t._v(t._s(e.name))])])})),0),t._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,n){return r("div",{key:e.code,staticClass:"tab-pane fade",class:0==n?"active show":"",attrs:{id:e.code,role:"tabpanel","aria-labelledby":e.code+"-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.attribute_value.name.label"))+":")]),t._v(" "),t.error&&t.error["name."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["name."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name[e.code],expression:"formData.name[language.code]"}],staticClass:"form-control",class:t.error&&t.error["name."+e.code]?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.attribute_value.name.placeholder"),trim:""},domProps:{value:t.formData.name[e.code]},on:{input:function(r){r.target.composing||t.$set(t.formData.name,e.code,r.target.value)}}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.attribute_value.name.subheading"))+"\n                                    ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.attribute_value.description.label"))+":")]),t._v(" "),t.error&&t.error["description."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["description."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("GlobalCkeditorNuxt",{model:{value:t.formData.description[e.code],callback:function(r){t.$set(t.formData.description,e.code,r)},expression:"\n                                        formData.description[language.code]\n                                      "}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.attribute_value.description.subheading"))+"\n                                    ")])],1)])])])})),0)])])])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[r("button",{staticClass:"btn btn-secondary mb-3 px-3 py-2",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.update}},[t._v("\n              "+t._s(this.$t("form.update"))+"\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-success mb-3 px-3 py-2",attrs:{type:"button",disabled:t.disabled,name:"button"},on:{click:t.updateAndContinue}},[t._v("\n              "+t._s(this.$t("form.update_and_continue"))+"\n            ")])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminLoader:r(661).default,AdminSearchSelectable:r(666).default,GlobalCkeditorNuxt:r(667).default})},661:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),o=r(129);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=l,v=r(71),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allSettings.general_settings&&t.allSettings.general_settings.loader?n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/backend"+t.allSettings.general_settings.loader.original_media_path,alt:"",width:"135px",height:"135px"}})]):n("div",{staticClass:"text-center"},[n("img",{attrs:{src:r(663),alt:"",width:"135px",height:"135px"}})])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){t.exports=r.p+"img/loader.1aa8404.gif"},666:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(57),r(40),r(58);var n=r(59),o=r(0),c=r(21);r(5),r(47),r(101),r(4),r(33),r(258),r(27),r(259),r(28),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(66);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{loadMoreClicked:!1,options:{data:[]},selectedData:"",searchData:{page:1,search:""}}},props:{value:{required:!1},show_key:{required:!1,default:"name"},initialOptions:{required:!1},selectedOptions:{required:!1},search_id:{required:!1},multiple:{required:!1},disabled:{required:!1},apiMethod:{required:!1},responseKey:{required:!1},placeholder:{required:!1}},mounted:function(){this.initialOptions&&(this.options=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.initialOptions)),this.selectedOptions&&(this.options.data=this.options.data.concat(this.selectedOptions),this.makeConcatedOptionsUnique())},methods:{sendWholeObj:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.options.data.find((function(e){return e.id==t})),e.$emit("input",t,n),e.selectedData=n,null!==t){r.next=8;break}return e.searchData.search="",e.selectedData="",r.next=8,e.callApi(!0);case 8:case"end":return r.stop()}}),r)})))()},onSearch:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.loadMoreClicked=!1,r.searchData.page=1,r.searchData.search=t||"",e(!0),n.next=6,r.callApi(e,t);case 6:case"end":return n.stop()}}),n)})))()},callApi:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.search_id){n.next=5;break}return n.next=3,r.$generalService[r.apiMethod](r.search_id,r.searchData).then((function(n){r.options.meta=n[r.responseKey][r.responseKey].meta,r.options.links=n[r.responseKey][r.responseKey].links,r.loadMoreClicked?r.options.data=r.options.data.concat(n[r.responseKey][r.responseKey].data):r.options.data=n[r.responseKey][r.responseKey].data,r.makeConcatedOptionsUnique(),r.searchData.page=n[r.responseKey][r.responseKey].meta.current_page,e||r.options.data.push(r.selectedData),t&&t(!1)})).catch((function(t){}));case 3:n.next=7;break;case 5:return n.next=7,r.$generalService[r.apiMethod](r.searchData).then((function(n){r.options.meta=n[r.responseKey][r.responseKey].meta,r.options.links=n[r.responseKey][r.responseKey].links,r.loadMoreClicked?r.options.data=r.options.data.concat(n[r.responseKey][r.responseKey].data):r.options.data=n[r.responseKey][r.responseKey].data,r.makeConcatedOptionsUnique(),r.searchData.page=n[r.responseKey][r.responseKey].meta.current_page,e||r.options.data.push(r.selectedData),t&&t(!1)})).catch((function(t){}));case 7:case"end":return n.stop()}}),n)})))()},makeConcatedOptionsUnique:function(){var t=Object(n.a)(new Map(this.options.data.map((function(t){return[t.id,t]}))).values());this.options.data=t},loadMore:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loadMoreClicked=!0,t.options&&t.options.links&&t.options.links.next&&(t.searchData.page+=1,t.callApi());case 2:case"end":return e.stop()}}),e)})))()}}},v=d,m=r(71),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-select",{attrs:{value:t.value,reduce:function(t){return t.id},multiple:t.multiple,placeholder:t.placeholder,disabled:t.disabled,label:t.show_key,filterable:!1,options:t.options.data},on:{input:function(e){return t.sendWholeObj(e)},search:t.onSearch},scopedSlots:t._u([{key:"option",fn:function(option){return[r("div",{staticClass:"d-center"},[t._v("\n      "+t._s(option[t.show_key])+"\n    ")])]}},{key:"selected-option",fn:function(option){return[r("div",{staticClass:"selected d-center"},[t._v("\n      "+t._s(option[t.show_key])+"\n    ")])]}},{key:"list-footer",fn:function(){return[r("div",{staticClass:"text-center"},[r("button",{directives:[{name:"show",rawName:"v-show",value:t.options&&t.options.links&&t.options.links.next&&t.options.meta&&t.options.meta.total!=t.options.data.length,expression:"\n          options &&\n          options.links &&\n          options.links.next &&\n          options.meta &&\n          options.meta.total != options.data.length\n        "}],staticClass:"btn btn-transparent text-primary",attrs:{type:"button",name:"button"},on:{click:t.loadMore}},[t._v("\n        "+t._s(t.$t("load_more"))+"\n      ")])])]},proxy:!0}])},[r("template",{slot:"no-options"},[t._v("\n    "+t._s(t.$t("form.search_select.no_options"))+"\n  ")])],2)}),[],!1,null,"7b020332",null);e.default=component.exports},667:function(t,e,r){"use strict";r.r(e);var n;n=r(684);var o={components:{ckeditor:r(685).component},props:{value:{type:String,required:!1},tagName:{type:String,required:!1,default:"div"},disabled:{type:Boolean,required:!1},uploadUrl:{type:String,required:!1},config:{type:Object,required:!1,default:function(){}}},data:function(){return{editor:n}}},c=r(71),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ckeditor",{attrs:{editor:t.editor,value:t.value,config:t.config,tagName:t.tagName,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports}}]);