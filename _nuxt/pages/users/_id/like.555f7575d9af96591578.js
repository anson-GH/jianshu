webpackJsonp([7],{"1pnJ":function(t,a,i){t.exports=i.p+"img/nav-logo.4c7bbaf.png"},"3yFX":function(t,a,i){"use strict";var s=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("ul",{staticClass:"user-list"},[a("li",[a("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[a("img",{attrs:{src:i("p1ot")}})]),a("div",{staticClass:"info"},[a("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[this._v("赏心何止三两枝")]),this._m(0)],1),this._m(1)],1)])])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"meta"},[a("a",{attrs:{href:"/u/123"}},[this._v("简书")]),this._v("\n                    收录了20篇文章,5人关注\n                ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"btn btn-success follow"},[a("i",{staticClass:"fa fa-plus-square-o"}),a("span",[this._v("关注")])])}]};a.a=n},"4ePT":function(t,a,i){"use strict";a.a={data:function(){return{userShow:!1,notifyShow:!1,bgShow:!1}},name:"myHeader"}},IVUE:function(t,a,i){"use strict";var s=i("Vrh3"),n=i("xODv"),e=i("X4QL");a.a={name:"",data:function(){return{currentTab:"LikeArticle"}},methods:{toggleTab:function(t){this.currentTab=t}},components:{myHeader:s.a,FollowCollection:n.a,LikeArticle:e.a}}},JeXJ:function(t,a,i){"use strict";var s=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("ul",{staticClass:"note-list"},[a("li",[a("div",{staticClass:"content"},[a("div",{staticClass:"author"},[a("nuxt-link",{staticClass:"avatar",attrs:{to:"/u/123"}},[a("img",{attrs:{src:i("yrOU")}})]),a("div",{staticClass:"info"},[a("nuxt-link",{staticClass:"nickname",attrs:{to:"/u/123"}},[this._v("简宝玉")]),a("span",{staticClass:"time"},[this._v("5分钟前")])],1)],1),a("nuxt-link",{staticClass:"title",attrs:{to:"/p/123"}},[this._v("\n                    提现没有到账怎么办?\n                ")]),a("p",{staticClass:"abstract"},[this._v("\n\n                    提现多久可以到账 简书的提现，一般3个“工作日”会到账，到账后，你可以在支付宝，“我的-账单”里确认，转账方为”上海佰集信息科技有限公司“。 如何在简书内，查看提现是否到账 ...\n                ")]),a("div",{staticClass:"meta"},[a("nuxt-link",{staticClass:"tag",attrs:{to:"/p/123"}},[a("i",{staticClass:"fa fa-eye"}),this._v("\n                        100\n                    ")]),a("nuxt-link",{staticClass:"tag",attrs:{to:"/p/123"}},[a("i",{staticClass:"fa fa-comment"}),this._v("\n                        200\n                    ")]),this._m(0)],1)],1)])])])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("i",{staticClass:"fa fa-heart"}),this._v("\n                        15\n                    ")])}]};a.a=n},Jy8t:function(t,a,i){t.exports=i.p+"img/movie.d7be604.jpg"},Vrh3:function(t,a,i){"use strict";var s=i("4ePT"),n=i("bxP+"),e=!1;var o=function(t){e||i("lTye")},l=i("VU/8")(s.a,n.a,!1,o,null,null);l.options.__file="components/myHeader.vue",a.a=l.exports},X4QL:function(t,a,i){"use strict";var s=i("iiim"),n=i("JeXJ"),e=i("VU/8")(s.a,n.a,!1,null,null,null);e.options.__file="components/users/LikeArticle.vue",a.a=e.exports},"XO8/":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("IVUE"),n=i("cxQh"),e=i("VU/8")(s.a,n.a,!1,null,null,null);e.options.__file="pages/users/_id/like.vue",a.default=e.exports},"bxP+":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-default nav-fixed-top"},[s("div",{staticClass:"width-limit"},[s("nuxt-link",{staticClass:"nav-logo",attrs:{to:"/"}},[s("img",{attrs:{src:i("1pnJ"),alt:""}})]),s("nuxt-link",{staticClass:"btn write-btn",attrs:{to:"/create"}},[s("i",{staticClass:"fa fa-edit"}),t._v("\n                写文章\n            ")]),s("div",{staticClass:"user",on:{mouseover:function(a){t.userShow=!0},mouseleave:function(a){t.userShow=!1}}},[s("div",{staticClass:"drop-down"},[s("nuxt-link",{staticClass:"avatar",attrs:{to:"/users"}},[s("img",{attrs:{src:i("yrOU")}})])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.userShow,expression:"userShow"}],staticClass:"drop-menu"},[s("ul",[s("li",[s("nuxt-link",{attrs:{to:"/u/123"}},[s("i",{staticClass:"fa fa-home"}),t._v("\n                                我的主页\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/bookmarks"}},[s("i",{staticClass:"fa fa-bookmark"}),t._v("\n                                收藏的文章\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/users/123/like"}},[s("i",{staticClass:"fa fa-heart"}),t._v("\n                                喜欢的文章\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/settings/basic"}},[s("i",{staticClass:"fa fa-cog"}),t._v("\n                                设置\n                            ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/logout"}},[s("i",{staticClass:"fa fa-sign-out"}),t._v("\n                                退出\n                            ")])],1)])])]),s("div",{staticClass:"my-container"},[s("ul",{staticClass:"nav-list"},[s("li",{staticClass:"active"},[s("nuxt-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-compass"}),s("span",[t._v("发现")])])],1),s("li",[s("nuxt-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-book"}),s("span",[t._v("关注")])])],1),s("li",{staticClass:"notify",on:{mouseover:function(a){t.notifyShow=!0},mouseleave:function(a){t.notifyShow=!1}}},[s("nuxt-link",{attrs:{to:"/"}},[s("i",{staticClass:"fa fa-bell-o"}),s("span",[t._v("消息")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.notifyShow,expression:"notifyShow"}],staticClass:"drop-menu"},[s("ul",[s("li",[s("nuxt-link",{attrs:{to:"/notify/comments"}},[s("i",{staticClass:"fa fa-comment-o"}),t._v("\n                                        评论\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notify/chats"}},[s("i",{staticClass:"fa fa-envelope-open-o"}),t._v("\n                                        简信\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notify/requests"}},[s("i",{staticClass:"fa fa-upload"}),t._v("\n                                        投稿请求\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notify/likes"}},[s("i",{staticClass:"fa fa-heart-o"}),t._v("\n                                        喜欢和赞\n                                    ")])],1),s("li",[s("nuxt-link",{attrs:{to:"/notify/follows"}},[s("i",{staticClass:"fa fa-user-o"}),t._v("\n                                        关注\n                                    ")])],1)])])],1),s("li",{staticClass:"search"},[s("form",{attrs:{method:"post"}},[s("input",{attrs:{type:"text",placeholder:"搜索"},on:{focus:function(a){t.bgShow=!0},blur:function(a){t.bgShow=!1}}}),s("nuxt-link",{staticClass:"search-btn",class:{active:t.bgShow},attrs:{to:"/search"}},[s("i",{staticClass:"fa fa-search"})])],1)])])])],1)])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};a.a=n},cxQh:function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("my-header"),s("div",{staticClass:"person my-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 main"},[s("div",{staticClass:"main-top"},[s("nuxt-link",{staticClass:"avatar",attrs:{to:"/u/123"}},[s("img",{attrs:{src:i("yrOU")}})]),t._m(0),s("a",{staticClass:"btn btn-hollow",attrs:{href:"/notifications"}},[t._v("\n                        发简信\n                    ")]),s("div",{staticClass:"title"},[s("nuxt-link",{staticClass:"name",attrs:{to:"/u/123"}},[t._v("\n                            我是不和么\n                        ")]),s("i",{staticClass:"fa fa-mars"})],1),s("div",{staticClass:"info"},[s("ul",[s("li",[s("div",{staticClass:"meta-block"},[s("nuxt-link",{attrs:{to:"/users/123/following"}},[s("p",[t._v("88")]),t._v("\n                                        关注\n                                        "),s("i",{staticClass:"fa fa-angle-right"})])],1)]),s("li",[s("div",{staticClass:"meta-block"},[s("nuxt-link",{attrs:{to:"/users/123/followers"}},[s("p",[t._v("16")]),t._v("\n                                        粉丝\n                                        "),s("i",{staticClass:"fa fa-angle-right"})])],1)]),s("li",[s("div",{staticClass:"meta-block"},[s("nuxt-link",{attrs:{to:"/u/123"}},[s("p",[t._v("32")]),t._v("\n                                        文章\n                                        "),s("i",{staticClass:"fa fa-angle-right"})])],1)]),t._m(1),t._m(2)])])],1),s("ul",{staticClass:"trigger-menu"},[s("li",{class:{active:"FollowCollection"==t.currentTab}},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.toggleTab("FollowCollection")}}},[t._v("\n                            关注的专题/文集/连载 6\n                        ")])]),s("li",{class:{active:"LikeArticle"==t.currentTab}},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.toggleTab("LikeArticle")}}},[t._v("\n                            喜欢的文章 2\n                        ")])])]),s("div",{attrs:{id:"list-container"}},[s(t.currentTab,{tag:"component",attrs:{"keep-alive":""}})],1)]),s("div",{staticClass:"col-4 aside"},[s("div",{staticClass:"title"},[t._v("个人介绍")]),t._m(3),t._m(4),s("ul",{staticClass:"list user-dynamic"},[s("li",[s("nuxt-link",{attrs:{to:"/users/123/collection"}},[s("i",{staticClass:"fa fa-book"}),s("span",[t._v("他关注的专题/文集")])])],1),s("li",[s("nuxt-link",{attrs:{to:"/users/123/like"}},[s("i",{staticClass:"fa fa-heart-o"}),s("span",[t._v("他喜欢的文章")])])],1)]),s("div",[s("div",{staticClass:"title"},[t._v("\n                        他创建的专题\n                    ")]),s("nuxt-link",{staticClass:"function-btn new-collection-btn",attrs:{to:"/collection/new",target:"_blank"}},[s("i",{staticClass:"fa fa-plus"}),s("span",[t._v("新建专题")])]),s("ul",{staticClass:"list"},[s("li",[s("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[s("img",{attrs:{src:i("Jy8t")}})]),s("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[t._v("\n                                朱焘源值班报告\n                            ")])],1)]),s("div",{staticClass:"title"},[t._v("\n                        他管理的专题\n                    ")]),s("ul",{staticClass:"list"},[s("li",[s("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/collection/123"}},[s("img",{attrs:{src:i("Jy8t")}})]),s("nuxt-link",{staticClass:"name",attrs:{to:"/collection/123"}},[t._v("\n                                朱焘源值班报告\n                            ")])],1)]),s("div",{staticClass:"title"},[t._v("\n                        他创建的文集\n                    ")]),s("ul",{staticClass:"list"},[s("li",[s("nuxt-link",{staticClass:"avatar-collection",attrs:{to:"/note/123"}},[s("i",{staticClass:"fa fa-book"})]),s("nuxt-link",{staticClass:"name",attrs:{to:"/note/123"}},[t._v("\n                                朱焘源值班报告\n                            ")])],1)])],1)])])])],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"off user-follow-button"},[a("i",{staticClass:"fa fa-plus-square-o"}),a("span",[this._v("关注")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("div",{staticClass:"meta-block"},[a("p",[this._v("5000")]),this._v("\n                                    字数\n                                ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("div",{staticClass:"meta-block"},[a("p",[this._v("100")]),this._v("\n                                    收获喜欢\n                                ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"function-btn",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-pencil-square-o"}),this._v(" 编辑\n                ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"description"},[a("div",{staticClass:"js-intro"},[this._v("\n                        逃跑医生，预防医学专家，抗衰老顾问，创业者，奶爸！人生意义思考者，东方智慧践行者。非著名作家坯子。\n                    ")])])}]};a.a=n},iiim:function(t,a,i){"use strict";a.a={name:"LikeArticle"}},lTye:function(t,a,i){var s=i("tnz2");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("192095c0",s,!1,{sourceMap:!1})},p1ot:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAALVBMVEWWlpb////6+vrBwcHo6Ojj4+OhoaHW1tbv7+/g4OC2traxsbGtra2bm5v09PSL07DIAAAA0klEQVRo3u3YPQ4BURSG4ZMIChTf+NdJFKJiCayAHcwSWIuV2I/GTsiNBnMjc3OKYd5nAW91TvMZAAAAAPwcfViec8dgMM6dg1p5B7X2Ds68g1lufq4nSUdz1LlJI/N0kfrmqS1NzVNXmpinnpRZaY2dCizWz1uysloHFRrmicGmIvaJwY0i+onBrSIGicG5IrLEoKIIEiT4HrQXBP8zWP07JFiHYPU/hWAFz4YgQYJVCj4QJEjwy4gReM4sgecQFHhOVYHnmBY4zn0AAAAAgJq5A5FbfxmCiQwtAAAAAElFTkSuQmCC"},qJZu:function(t,a,i){"use strict";a.a={name:"FollowCollection"}},tnz2:function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,'nav{width:100%;height:56px}.navbar{padding:0;border-bottom:1px solid #e7e7e7;margin-bottom:20px;background-color:#fff}.nav-fixed-top{position:fixed;top:0;left:0;z-index:999}nav .width-limit{min-width:768px;width:1440px;margin:0 auto}nav .nav-logo{float:left;height:56px;padding:0}nav .nav-logo img{height:100%}nav a.write-btn{width:100px;height:40px;margin:7px 15px 0;background:#ea6f5a;color:#fff!important;border-radius:20px}nav a.sign-in,nav a.write-btn{float:right;line-height:24px;font-size:15px}nav a.sign-in{margin:11px 6px 0 10px;padding:6px 12px;color:#969696!important}nav a.sign-in:active{-webkit-box-shadow:none;box-shadow:none}nav a.sign-up{float:right;width:80px;height:38px;margin:7px 6px 0 10px;line-height:24px;font-size:15px;border:1px solid #ea6f5a;border-radius:20px;color:#ea6f5a!important}nav a.sign-up:hover{background:#fef7f6}nav .user{float:right;position:relative}nav .user .avatar{position:relative;width:40px;height:40px;display:block;margin:8px 28px 8px 20px}nav .user:hover{background:#f5f5f5}nav .user .avatar:before{content:"";position:absolute;top:18px;right:-14px;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #999}nav .user .avatar img{width:100%;height:100%;border-radius:50%;border:1px solid #ccc}nav .user .drop-menu{position:absolute;left:0;min-width:160px;-webkit-box-shadow:0 0 8px rgba(0,0,0,.1);box-shadow:0 0 8px rgba(0,0,0,.1);font-size:15px;z-index:999;background:#fff}nav .user .drop-menu ul{padding:10px 0;margin:0}nav .user .drop-menu ul li a{padding:10px 20px;display:block}nav .user .drop-menu ul li a:hover{background:#f5f5f5}nav .user .drop-menu ul li i{margin-right:15px;color:#ea6f5a;font-size:18px}nav .nav-list{margin:0 -15px;padding:0}nav .nav-list:after{content:"";height:0;display:block;visibility:hidden;clear:both}nav .nav-list>li{float:left;margin-right:5px}nav .nav-list>li:hover{background:#f5f5f5}nav .nav-list>li>a{display:block;height:55px;padding:15px;font-size:17px}nav .nav-list>li>a>i{font-size:20px;margin-right:7px;text-align:center;margin-top:5px}nav .nav-list>li.active{color:#ea6f5a;background:#fff}nav .nav-list .search{padding-left:15px}nav .nav-list .search:hover{background:#fff}nav .nav-list .search form{margin-top:9px;position:relative}nav .nav-list .search form input{width:240px;height:38px;border:none;background:#eee;border-radius:20px;padding:0 30px 0 20px;font-size:15px;-webkit-transition:width .3s ease-in;transition:width .3s ease-in}nav .nav-list .search form input:focus{width:320px}nav .nav-list .search form a.search-btn{display:block;width:30px;height:30px;line-height:30px;position:absolute;right:10px;top:4px;text-align:center}nav .nav-list .search form a.active{background:#969696;border-radius:50%;color:#fff!important}nav .nav-list .search form a.search-btn i{font-size:18px}@media (max-width:768px){nav .nav-list{display:none}}@media (max-width:1440px){nav .nav-list>li>a i{display:none}nav .nav-list .search form input{width:160px}nav .nav-list .search form input:focus{width:240px}}@media (max-width:1080px){nav .nav-list>li>a i{display:block}nav .nav-list>li>a span{display:none}nav .nav-list .search form input,nav .nav-list .search form input:focus{width:150px}}nav .nav-list .notify{position:relative}nav .nav-list .notify .drop-menu{position:absolute;z-index:999;left:0;min-width:160px;-webkit-box-shadow:0 0 8px rgba(0,0,0,.1);box-shadow:0 0 8px rgba(0,0,0,.1);font-size:15px;background:#fff}nav .notify .drop-menu ul{padding:10px 0;margin:0}nav .notify .drop-menu ul li a{padding:10px 20px;display:block}nav .notify .drop-menu ul li a:hover{background:#f5f5f5}nav .notify .drop-menu ul li i{margin-right:15px;color:#ea6f5a;font-size:18px}',""])},xODv:function(t,a,i){"use strict";var s=i("qJZu"),n=i("3yFX"),e=i("VU/8")(s.a,n.a,!1,null,null,null);e.options.__file="components/users/FollowCollection.vue",a.a=e.exports},yrOU:function(t,a,i){t.exports=i.p+"img/default-avatar.488a9c2.jpg"}});