(()=>{"use strict";var e,t={1712:(e,t,n)=>{var a=n(1669),i=n.n(a);function o(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getYear()===t.getYear()}function r(e,t){o(new Date(t[0].value),e)||i()(this).find(".xdsoft_datepicker .xdsoft_current:not(.xdsoft_today)").removeClass("xdsoft_current")}i().fn.datetimepicker.defaults.i18n.wagtail_custom_locale={months:wagtailConfig.STRINGS.MONTHS,dayOfWeek:wagtailConfig.STRINGS.WEEKDAYS,dayOfWeekShort:wagtailConfig.STRINGS.WEEKDAYS_SHORT},i().datetimepicker.setLocale("wagtail_custom_locale"),window.dateEqual=o,window.hideCurrent=r,window.initDateChooser=function(e,t){window.dateTimePickerTranslations?i()("#"+e).datetimepicker(i().extend({closeOnDateSelect:!0,timepicker:!1,scrollInput:!1,format:"Y-m-d",onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change",{bubbles:!0}))}},t||{})):i()("#"+e).datetimepicker(i().extend({timepicker:!1,scrollInput:!1,format:"Y-m-d",onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change",{bubbles:!0}))}},t||{}))},window.initTimeChooser=function(e,t){window.dateTimePickerTranslations?i()("#"+e).datetimepicker(i().extend({closeOnDateSelect:!0,datepicker:!1,scrollInput:!1,format:"H:i",onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change",{bubbles:!0}))}},t||{})):i()("#"+e).datetimepicker(i().extend({datepicker:!1,format:"H:i",onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change",{bubbles:!0}))}},t||{}))},window.initDateTimeChooser=function(e,t){window.dateTimePickerTranslations?i()("#"+e).datetimepicker(i().extend({closeOnDateSelect:!0,format:"Y-m-d H:i",scrollInput:!1,onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change",{bubbles:!0}))}},t||{})):i()("#"+e).datetimepicker(i().extend({format:"Y-m-d H:i",onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change",{bubbles:!0}))}},t||{}))}},1669:e=>{e.exports=jQuery}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,e=[],a.O=(t,n,i,o)=>{if(!n){var r=1/0;for(s=0;s<e.length;s++){for(var[n,i,o]=e[s],d=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(d=!1,o<r&&(r=o));if(d){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=883,(()=>{var e={883:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[r,d,l]=n,c=0;if(r.some((t=>0!==e[t]))){for(i in d)a.o(d,i)&&(a.m[i]=d[i]);if(l)var s=l(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},n=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[321],(()=>a(1712)));i=a.O(i)})();