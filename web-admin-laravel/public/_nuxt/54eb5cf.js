(window.webpackJsonp=window.webpackJsonp||[]).push([[453,17,23,36,38],{1295:function(t,e,r){"use strict";r.r(e);r(43),r(7),r(4),r(57),r(40),r(58);var l=r(21),n=r(0),o=(r(5),r(26),r(25),r(49),r(33),r(81),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"admin",middleware:["admin","permission"],meta:{permission:"parallax_banners.update",strategy:"update"},data:function(){return{images:{},url_type_options:[{value:1,text:this.$t("form.parallax_banner.url_type.internal")},{value:2,text:this.$t("form.parallax_banner.url_type.external")}],editorConfig:{},url:"/backend",parallax_banner_image_path:"",formData:{expiry_date:"",name:{},description:{},website_url:"",button_text:{},url_type:"",image:{},is_active:!1},error:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.allActiveMedia.media){e.next=3;break}return e.next=3,t.fetchActiveMedia();case 3:return e.next=5,t.$repositories.parallax_banners.show(t.$route.params.id);case 5:r=e.sent,data=r.data,t.formData.image=data.imageTranslations,t.formData.name=data.nameTranslations,t.formData.button_text=data.button_textTranslations,t.formData.description=data.descriptionTranslations,t.formData.website_url=data.website_url,t.formData.url_type=data.url_type,t.formData.expiry_date=data.expiry_date,t.images=data.images,t.formData.is_active=data.is_active;case 16:case"end":return e.stop()}}),e)})))()},methods:d(d({},Object(o.b)({updateParallaxBanners:"ParallaxBanners/updateParallaxBanners",fetchActiveParallaxBanners:"General/fetchActiveParallaxBanners",fetchActiveMedia:"General/fetchActiveMedia"})),{},{imageSelected:function(t,path,e,r){this.formData.image[r]=t,this.images[e]=path,this.$forceUpdate()},update:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateAndContinue();case 2:t.error||t.$router.replace(t.localePath("/admin/parallax_banners"));case 3:case"end":return e.stop()}}),e)})))()},updateAndContinue:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateParallaxBanners({formData:t.formData,id:t.$route.params.id}).then((function(e){var r;e.response?(t.error=null!==(r=e.response.data.errors)&&void 0!==r?r:e.response.data,t.$toast.error(e.response.data.message)):"fail"==e.state?t.$toast.error(e.message):(t.error=!1,t.$toast.success(e.message),t.fetchActiveParallaxBanners())}));case 2:case"end":return e.stop()}}),e)})))()}}),mounted:function(){},computed:d({},Object(o.c)({allActiveLanguages:"General/allActiveLanguages",allActiveMedia:"General/allActiveMedia"}))},v=r(71),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v("\n              "+t._s(this.$t("form.parallax_banner.edit_parallax_banner"))+"\n            ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/dashboard")}},[t._v(t._s(this.$t("sidebar.home")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:t.localePath("/admin/parallax_banners")}},[t._v(t._s(this.$t("sidebar.parallax_banner")))])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n                  "+t._s(this.$t("form.edit"))+"\n                ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n                "+t._s(this.$t("form.parallax_banner.edit_description"))+"\n              ")])])])])]),t._v(" "),r("section",{staticClass:"content pb-5"},[t.$fetchState.pending?r("div",[r("AdminFormLoader",{attrs:{multilang:!0}})],1):r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1 ps-md-0"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"label form-label"},[t._v("\n                      "+t._s(this.$t("form.parallax_banner.expiry_date.label"))+"\n                    ")]),t._v(" "),t.error&&t.error.expiry_date?r("span",{staticClass:"float-end text-danger"},[t._v("\n                        "+t._s(t.error.expiry_date[0])+"\n                      ")]):t._e(),t._v(" "),r("datetime",{attrs:{placeholder:this.$t("form.parallax_banner.expiry_date.placeholder"),"input-class":"form-control","value-zone":"local",type:"datetime","use12-hour":""},model:{value:t.formData.expiry_date,callback:function(e){t.$set(t.formData,"expiry_date",e)},expression:"formData.expiry_date"}}),t._v(" "),r("span",{staticClass:" heebo-light"},[t._v("\n                     "+t._s(t.$t("form.parallax_banner.expiry_date.subheading"))+"\n                 ")])],1)]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 pe-md-0"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.parallax_banner.url_type.label"))+":")]),t._v(" "),t.error&&t.error.url_type?r("span",{staticClass:"float-end text-danger"},[t._v("\n                  "+t._s(t.error.url_type[0])+"\n                ")]):t._e(),t._v(" "),r("v-select",{attrs:{placeholder:this.$t("form.parallax_banner.url_type.placeholder"),reduce:function(t){return t.value},label:"value",options:t.url_type_options},scopedSlots:t._u([{key:"option",fn:function(option){return[r("div",{staticClass:"d-center"},[t._v("\n                      "+t._s(option.text)+"\n                    ")])]}},{key:"selected-option",fn:function(option){return[r("div",{staticClass:"selected d-center"},[t._v("\n                      "+t._s(option.text)+"\n                    ")])]}}]),model:{value:t.formData.url_type,callback:function(e){t.$set(t.formData,"url_type",e)},expression:"formData.url_type"}},[r("template",{slot:"no-options"},[t._v("\n                    "+t._s(t.$t("form.search_select.no_options"))+"\n                  ")])],2),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                    "+t._s(t.$t("form.parallax_banner.url_type.subheading"))+"\n                ")])],1)]),t._v(" "),r("div",{staticClass:"col-md-6 my-1 ps-md-0"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:" form-label",attrs:{for:"input-live"}},[t._v(t._s(this.$t("form.parallax_banner.website_url.label"))+":")]),t._v(" "),t.error&&t.error.website_url?r("span",{staticClass:"float-end text-danger"},[t._v("\n                      "+t._s(t.error.website_url[0])+"\n                    ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.website_url,expression:"formData.website_url"}],staticClass:"form-control",class:t.error&&t.error.website_url?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.parallax_banner.website_url.placeholder"),trim:""},domProps:{value:t.formData.website_url},on:{input:function(e){e.target.composing||t.$set(t.formData,"website_url",e.target.value)}}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                     "+t._s(t.$t("form.parallax_banner.website_url.subheading"))+"\n                   ")])])]),t._v(" "),r("div",{staticClass:"col-md-6 pe-md-0  my-1 d-flex justify-content-center flex-column "},[r("div",{staticClass:"d-flex align-items-center "},[r("label",{staticClass:"label form-label me-4 text-capitalize"},[t._v("\n                            "+t._s(this.$t("form.parallax_banner.status.label"))+"\n                          ")]),t._v(" "),r("div",{staticClass:"form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.is_active,expression:"formData.is_active"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:t.formData.is_active?"checked":"",checked:Array.isArray(t.formData.is_active)?t._i(t.formData.is_active,null)>-1:t.formData.is_active},on:{change:function(e){var r=t.formData.is_active,l=e.target,n=!!l.checked;if(Array.isArray(r)){var o=t._i(r,null);l.checked?o<0&&t.$set(t.formData,"is_active",r.concat([null])):o>-1&&t.$set(t.formData,"is_active",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.formData,"is_active",n)}}})])]),t._v(" "),r("span",{staticClass:" heebo-light"},[t._v("\n                          "+t._s(t.$t("form.parallax_banner.status.subheading"))+"\n                        ")])])]),t._v(" "),r("hr",{staticClass:"text-primary"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0 pt-3"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v(t._s(t.$t("form.multilanguage")))]),t._v(" "),r("p",[r("span",{staticClass:"heebo-light"},[t._v("\n                          "+t._s(t.$t("lorem_ipsum"))+"\n                        ")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0 d-md-flex"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},t._l(t.allActiveLanguages.languages,(function(e,l){return r("li",{key:l,staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",class:0==l?"active":"",attrs:{id:e.code+"-tab","data-bs-toggle":"tab",href:"#"+e.code,role:"tab","aria-controls":e.code,"aria-selected":0==l?"true":"false"}},[t._v(t._s(e.name))])])})),0),t._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.allActiveLanguages.languages,(function(e,l){return r("div",{key:e.code,staticClass:"tab-pane fade",class:0==l?"active show":"",attrs:{id:e.code,role:"tabpanel","aria-labelledby":e.code+"-tab"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"   form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.parallax_banner.image.label"))+":")]),t._v(" "),t.error&&t.error["image."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                        "+t._s(t.error["image."+e.code][0])+"\n                                      ")]):t._e(),t._v(" "),r("div",{},[t.images[e.code]?r("img",{staticClass:"tab-img",attrs:{src:t.url+""+t.images[e.code]}}):t._e(),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button",name:"button","data-bs-toggle":"modal","data-bs-target":"#selectSliderImageMedia"+e.code}},[t._v(t._s(t.$t("form.select_media")))]),t._v(" "),r("AdminMediaModal",{attrs:{type:"images",bind_modal:e.code,img_var:e.code,modal_id:"selectSliderImageMedia"+e.code,redirect_panel:"admin"},on:{selectImage:t.imageSelected}})],1),t._v(" "),r("span",{staticClass:"   heebo-light"},[t._v("\n                                        "+t._s(t.$t("form.parallax_banner.image.subheading"))+"\n                                      ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.parallax_banner.name.label"))+":")]),t._v(" "),t.error&&t.error["name."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["name."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name[e.code],expression:"formData.name[language.code]"}],staticClass:"form-control",class:t.error&&t.error["name."+e.code]?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.parallax_banner.name.placeholder"),trim:""},domProps:{value:t.formData.name[e.code]},on:{input:function(r){r.target.composing||t.$set(t.formData.name,e.code,r.target.value)}}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.parallax_banner.name.subheading"))+"\n                                    ")])])]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.parallax_banner.button_text.label"))+":")]),t._v(" "),t.error&&t.error["button_text."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["button_text."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.button_text[e.code],expression:"formData.button_text[language.code]"}],staticClass:"form-control",class:t.error&&t.error["button_text."+e.code]?"error":"",attrs:{"aria-describedby":"input-live-help input-live-feedback",placeholder:t.$t("form.parallax_banner.button_text.placeholder"),trim:""},domProps:{value:t.formData.button_text[e.code]},on:{input:function(r){r.target.composing||t.$set(t.formData.button_text,e.code,r.target.value)}}}),t._v(" "),r("span",{staticClass:"heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.parallax_banner.button_text.subheading"))+"\n                                    ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"px-2 form-label",attrs:{for:"input-live"}},[t._v(t._s(t.$t("form.parallax_banner.description.label"))+":")]),t._v(" "),t.error&&t.error["description."+e.code]?r("span",{staticClass:"float-end text-danger"},[t._v("\n                                      "+t._s(t.error["description."+e.code][0])+"\n                                    ")]):t._e(),t._v(" "),r("GlobalCkeditorNuxt",{model:{value:t.formData.description[e.code],callback:function(r){t.$set(t.formData.description,e.code,r)},expression:"\n                                        formData.description[language.code]\n                                      "}}),t._v(" "),r("span",{staticClass:"px-2 heebo-light"},[t._v("\n                                      "+t._s(t.$t("form.parallax_banner.description.subheading"))+"\n                                    ")])],1)])])])})),0)])])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 px-4 text-center text-md-end"},[r("button",{staticClass:"btn btn-secondary mb-3 px-3 py-2",attrs:{type:"button",name:"button"},on:{click:t.update}},[t._v("\n                        "+t._s(this.$t("form.update"))+"\n                      ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminFormLoader:r(660).default,AdminMediaModal:r(686).default,GlobalCkeditorNuxt:r(667).default})},660:function(t,e,r){"use strict";r.r(e);var l={props:["multilang"]},n=r(71),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container skeletion-effect"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.multilang?r("div",[r("hr",{staticClass:"text-primary"}),t._v(" "),t._m(2)]):t._e()])])]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),t._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6  my-1 d-flex justify-content-center flex-column "},[r("div",{staticClass:"d-flex align-items-center "},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"switch skeletion-animation"})]),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 py-2"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:" skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0 pt-3 d-md-flex"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[r("div",{staticClass:"tabs"}),t._v(" "),r("div",{staticClass:"tabs"}),t._v(" "),r("div",{staticClass:"tabs"})]),t._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"input  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),t._v(" "),r("div",{staticClass:"textarea  skeletion-animation"}),t._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])])])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[r("div",{staticClass:"button-add skeletion-animation"}),t._v(" "),r("div",{staticClass:"button-continue skeletion-animation"})])])}],!1,null,null,null);e.default=component.exports},667:function(t,e,r){"use strict";r.r(e);var l;l=r(684);var n={components:{ckeditor:r(685).component},props:{value:{type:String,required:!1},tagName:{type:String,required:!1,default:"div"},disabled:{type:Boolean,required:!1},uploadUrl:{type:String,required:!1},config:{type:Object,required:!1,default:function(){}}},data:function(){return{editor:l}}},o=r(71),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ckeditor",{attrs:{editor:t.editor,value:t.value,config:t.config,tagName:t.tagName,disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports},675:function(t,e,r){"use strict";r.r(e);var l={name:"Card",props:{title:{type:String,default:null}}},n=r(71),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t.title?r("div",{staticClass:"card-header"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},686:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var l=r(21),n=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{url:"/backend"}},props:["modal_id","img_var","bind_modal","type","redirect_panel"],methods:c(c({},Object(n.b)({fetchActiveMedia:"General/fetchActiveMedia"})),{},{selectImage:function(t,path){this.$emit("selectImage",t,path,this.img_var,this.bind_modal)},refetchMedia:function(){this.fetchActiveMedia()}}),computed:c({},Object(n.c)({allActiveMedia:"General/allActiveMedia"}))},m=r(71),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade in media-gallery-modal single",attrs:{id:t.modal_id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog "},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header p-2"},[r("button",{staticClass:"btn rounded-circle btn-primary d-block ms-auto",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[r("fa",{attrs:{icon:"times"}})],1)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("GlobalCard",{staticStyle:{background:"none"}},[r("div",{staticClass:"todos p-5"},t._l(t.allActiveMedia.media[t.type],(function(image){return r("div",{key:image.id,staticClass:"todo"},[r("div",{staticClass:"media-gallery-img ms-auto me-auto mb-3"},[r("img",{attrs:{"data-bs-dismiss":"modal",src:t.url+""+image.thumbnail},on:{click:function(e){return t.selectImage(image.media.id,image.thumbnail)}}})])])})),0)])],1),t._v(" "),r("div",{staticClass:"modal-footer py-5"},[r("button",{staticClass:"btn btn-danger py-2 px-4 shadow",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(t._s(t.$t("close")))]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary py-2 px-4 shadow",attrs:{to:t.localePath("/"+t.redirect_panel+"/media"),target:"_blank"}},[t._v(t._s(t.$t("upload")))]),t._v(" "),r("button",{staticClass:"btn btn-success py-2 px-4 shadow",on:{click:t.refetchMedia}},[t._v(t._s(this.$t("refresh")))])],1)])])])}),[],!1,null,"d63e59a0",null);e.default=component.exports;installComponents(component,{GlobalCard:r(675).default})}}]);