(function(t){function e(e){for(var n,o,l=e[0],s=e[1],c=e[2],f=0,v=[];f<l.length;f++)o=l[f],r[o]&&v.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),r=a("ce5b"),i=a.n(r);a("bf40");n["default"].use(i.a,{});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.heading?a("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[e.heading?a("v-subheader",[t._v("\n              "+t._s(e.heading)+"\n            ")]):t._e()],1),a("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?a("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1),t._l(e.children,function(e,n){return a("v-list-tile",{key:n},[e.icon?a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1):t._e(),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1)})],2):a("v-list-tile",{key:e.text},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)]})],2)],1),a("v-toolbar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("span",{staticClass:"hidden-sm-and-down"},[t._v("Mimerslunden")])],1),a("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"search",label:"Search"}}),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("apps")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("notifications")])],1),a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"32px",tile:""}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg",alt:"Vuetify"}})])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-tooltip",{attrs:{right:""}},[a("v-btn",{attrs:{slot:"activator",href:t.source,icon:"",large:"",target:"_blank"},slot:"activator"},[a("v-icon",{attrs:{large:""}},[t._v("code")])],1),a("span",[t._v("Source")])],1),a("v-tooltip",{attrs:{right:""}},[a("v-btn",{attrs:{slot:"activator",icon:"",large:"",href:"https://codepen.io/johnjleider/pen/EQOYVV",target:"_blank"},slot:"activator"},[a("v-icon",{attrs:{large:""}},[t._v("mdi-codepen")])],1),a("span",[t._v("Codepen")])],1)],1)],1)],1),a("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"pink",dark:"",fixed:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("add")])],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[t._v("\n        Create contact\n      ")]),a("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","align-center":"","justify-space-between":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-avatar",{staticClass:"mr-3",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{placeholder:"Name"}})],1)],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{"prepend-icon":"business",placeholder:"Company"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{placeholder:"Job title"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{"prepend-icon":"mail",placeholder:"Email"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{type:"tel","prepend-icon":"phone",placeholder:"(000) 000 - 0000",mask:"phone"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{"prepend-icon":"notes",placeholder:"Notes"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"primary"}},[t._v("More")]),a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},l=[],s={data:function(){return{dialog:!1,drawer:null,items:[{icon:"money",text:"Inbetalningar",to:"payments"}]}},props:{source:String}},c=s,d=a("2877"),f=Object(d["a"])(c,o,l,!1,null,null,null);f.options.__file="App.vue";var v=f.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.83be20f5.js.map