(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(t,e,r){var content=r(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("a85723dc",content,!0,{sourceMap:!1})},165:function(t,e,r){"use strict";var n=r(159);r.n(n).a},166:function(t,e,r){(e=r(57)(!1)).push([t.i,".page-enter-active,.page-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.5s}.page-enter,.page-leave-to{opacity:0}.map{padding:15px;background:#fff;width:600px;max-width:100vw}.map,.map-frame{box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.map-frame{border-top-left-radius:6px;border-top-right-radius:6px;height:8px;margin-top:60px;background:#212121}.transportation-list{display:flex;flex-direction:column;justify-content:center;align-items:center}.card{font-family:Inconsolata,monospace;display:flex;flex-wrap:wrap;margin:5px}.card>div{margin:2.5px 5px;border:1px solid #424242;padding:5px}.card>div.card-time{background:#424242;color:#fff}.card svg{min-width:16px;max-width:16px}.card-time a{color:#fff;text-decoration:none}",""]),t.exports=e},171:function(t,e,r){"use strict";r.r(e);var n={name:"Transportation",data:function(){return{transportations:[{type:"subway",name:"Levent-Boğaziçi Üniversitesi",code:"M6"},{type:"bus",name:"Taksim-Rumelihisarüstü",code:"559C"},{type:"bus",name:"Şişli-Rumelihisarüstü",code:"59R"},{type:"bus",name:"Kabataş-Rumelihisarüstü",code:"43R"},{type:"bus",name:"Sarıyer-Rumelihisarüstü",code:"59RS"},{type:"bus",name:"Kadıköy-Rumelihisarüstü",code:"125"},{type:"bus",name:"Hacıosman Metro-İstinye-Rumelihisarüstü",code:"59RH"}]}}},o=(r(165),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"page transportation"},[r("div",{staticClass:"map-frame"}),t._v(" "),r("iframe",{staticClass:"map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.8449467681826!2d29.051415829218165!3d41.08254789870584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9f92d1af553%3A0xe49bc6b01b0d20cc!2zQmViZWssIE5hdHVrIEJpcmthbiBCaW5hc8SxIChUw7xyayBEaWxpIHZlIEVkZWJpeWF0xLEgdmUgRWtvbm9taSBCw7Zsw7xtbGVyaSksIDM0MzQyIEJlxZ9pa3RhxZ8vxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1582206750008!5m2!1sen!2str",height:"450",frameborder:"0",allowfullscreen:""}}),t._v(" "),r("div",{staticClass:"transportation-list"},[r("div",{staticClass:"transportation-list-item"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-time"},[r("font-awesome-icon",{attrs:{icon:"university"}}),t._v(" "),t._m(0)],1)]),t._v(" "),r("hr")]),t._v(" "),r("div",{staticClass:"transportation-list-item"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-time"},[r("font-awesome-icon",{attrs:{icon:"map-signs"}}),t._v(" "),t._m(1)],1)]),t._v(" "),r("hr")]),t._v(" "),t._l(t.transportations,(function(e,i){return r("div",{key:i,staticClass:"transportation-list-item"},[r("div",{staticClass:"card"},[e.type?r("div",{staticClass:"card-time"},[r("font-awesome-icon",{attrs:{icon:e.type}}),t._v(" "),r("span",[t._v(t._s("subway"===e.type?"Metro":"Bus"))])],1):t._e(),t._v(" "),e.code&&e.name?r("div",{staticClass:"card-chair"},[r("strong",[t._v(t._s(e.code))]),t._v(" | \n              "),r("span",[t._v(t._s(e.name))])]):t._e()]),t._v(" "),r("hr")])}))],2),t._v(" "),r("div",{staticClass:"transportation-container"},[t._v("\n      .\n    ")]),t._v(" "),r("hr",{staticClass:"footer"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"https://harita.boun.edu.tr/goster/22",target:"_blank"}},[this._v("\n                Click here for official Boğaziçi University Map\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"http://www.boun.edu.tr/Assets/Documents/Dosyalar/Metroline.pdf",target:"_blank"}},[this._v("\n                Click here for detailed instruction\n                ")])])}],!1,null,null,null);e.default=component.exports}}]);