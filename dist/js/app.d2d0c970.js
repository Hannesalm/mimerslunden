(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],f=0,u=[];f<i.length;f++)s=i[f],r[s]&&u.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),r=a("ce5b"),o=a.n(r);a("bf40");n["default"].use(o.a,{theme:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Adminläge")]),a("v-card-text",[e._v("\n        Skriv lösen för att låsa upp admin läge\n        "),a("v-text-field",{attrs:{type:"password",label:"Lösen",required:""},model:{value:e.passwordInput,callback:function(t){e.passwordInput=t},expression:"passwordInput"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-1",flat:"flat"},on:{click:function(t){e.dialog=!1}}},[e._v("Avbryt")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:e.unlock}},[e._v("Låsupp")])],1)],1)],1),a("v-content",[a("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[a("v-toolbar-title",[e._v("Mimerslunden")]),a("v-spacer"),e.adminUnlocked?a("v-btn",{attrs:{color:"primary"}},[e._v("Lägg till betalningar")]):e._e(),e.adminUnlocked?e._e():a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.dialog=!e.dialog}}},[e._v("Låsupp")])],1),a("v-alert",{attrs:{value:!e.landscape,color:"error",transition:"fade-transition"}},[e._v("\n      Listan ses bäst om du har mobilen i liggande läge\n    ")]),a("v-card",[a("v-card-title",[e._v("\n        Inbetalningar\n        "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Sök","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.desserts,search:e.search},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.name))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.address))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.amount)+" kr")]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.date))])]}}])},[a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n          Din sökning på "'+e._s(e.search)+'" gav inga resultat.\n        ')])],1)],1)],1)],1)},i=[],l={data:function(){return{password:"skolgatan",passwordInput:"",adminUnlocked:!1,dialog:!1,drawer:null,landscape:!1,search:"",headers:[{text:"Namn",align:"left",sortable:!1,value:"name"},{text:"Adress",value:"address",align:"left"},{text:"Belopp",value:"amount",align:"left"},{text:"Inbetalningsdatum",value:"date",align:"left"}],desserts:[{value:!1,name:"Hannes och Anna",address:"Skolgatan 7",amount:50,date:"2018-01-01"},{value:!1,name:"Tobbe och Cissi",address:"Skolgatan 16",amount:50,date:"2018-01-02"}]}},props:{source:String},methods:{list:function(){},applyOrientation:function(){window.innerHeight>window.innerWidth?this.landscape=!1:this.landscape=!0},unlock:function(){this.passwordInput===this.password&&(this.adminUnlocked=!0,this.dialog=!1)}},mounted:function(){var e=this,t=screen.msOrientation||(screen.orientation||screen.mozOrientation||{}).type;this.landscape="portrait-secondary"!==t&&"portrait-primary"!==t,window.onresize=function(t){e.applyOrientation(t)}}},c=l,d=a("2877"),f=Object(d["a"])(c,s,i,!1,null,null,null);f.options.__file="App.vue";var u=f.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.d2d0c970.js.map