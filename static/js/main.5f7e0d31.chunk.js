(this["webpackJsonpjp-dictionary"]=this["webpackJsonpjp-dictionary"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(6),s=t.n(r),l=t(1),i=(t(12),t(4)),m=t.n(i);function o(e){var a=e.searchValue,t=e.setSearchValue,c=e.inputEle,r=e.startSearch;return n.a.createElement("div",{className:"search_form_container"},n.a.createElement("button",{type:"button",className:"search_form_btn",onClick:function(){return r()}},"\u641c\u7d22"),n.a.createElement("input",{ref:c,type:"text",name:"search",className:"search_form_text_input",value:a,onChange:function(e){return t(e.target.value)},placeholder:"input search text"}),n.a.createElement("div",{className:"history_btn"}),n.a.createElement("div",{className:"search_form_text_input_clear",onClick:function(){t(""),c.current&&c.current.focus()}},n.a.createElement("div",{className:"search_form_text_input_clear_item1"}),n.a.createElement("div",{className:"search_form_text_input_clear_item2"})))}t(14);function h(e){return n.a.createElement("div",{className:"result_stats_container"},e.outcome?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"result_stats_normal"},"\u4ece "),n.a.createElement("p",{className:"result_stats_strong"},e.outcome.all),n.a.createElement("p",{className:"result_stats_normal"}," \u6761\u6570\u636e\u4e2d\uff0c\u641c\u7d22\u5230 "),n.a.createElement("p",{className:"result_stats_strong"},e.outcome.hit),n.a.createElement("p",{className:"result_stats_normal"}," \u4e2a\u7ed3\u679c")):n.a.createElement("p",{className:"result_stats_normal"},"\u7b49\u5f85\u641c\u7d22..."))}t(15);var u=t(23);function E(e){var a=e.dict,t=e.searchValue,c=function(e,a){return a.replace(new RegExp(e,"gi"),(function(e){return"<mark>".concat(e,"</mark>")}))},r=function(e,a){return c(e,a)},s=function(e,a){return console.log(a),a=function(e){var a=Array.apply(null,{length:600}).map((function(e,a,t){return String.fromCharCode(a+190)})).join("");return e.replace(new RegExp("[a-z\u250f"+a+"]","gi"),"")}(a),a=(a=(a=function(e){return e.replace(new RegExp("\uff08\\d+\uff09.*","gi"),(function(e){return"\n<b>".concat(e,"</b>")})).trim()}(a=c(e,a))).replace(/\n\$/g,"\n\t")).split(/\n/).map((function(e){return 1===e.split("\uff0f").length?e:e.split("\uff0f").join("\n\t")})).join("\n\n")};return n.a.createElement("ul",{className:"dict_items"},a&&a.map((function(e){return n.a.createElement("li",{className:"dict_item",key:Object(u.a)()},n.a.createElement("p",{className:"dict_item_vocab",dangerouslySetInnerHTML:{__html:r(t,e.\u7f57\u9a6c\u5b57+"\n"+e.\u5047\u540d\u65e5\u8bed+"\n"+e.\u6c49\u5b57\u65e5\u8bed)}}),n.a.createElement("p",{className:"dict_item_defination",dangerouslySetInnerHTML:{__html:s(t,e.\u4e2d\u6587\u89e3\u91ca)}}))})))}t(16);function k(e){var a;return a=e.checked?{backgroundColor:"lightgrey"}:{backgroundColor:"white"},n.a.createElement("div",{className:"checkbox-input-div",style:a},n.a.createElement("input",{type:"checkbox",id:e.checkId,checked:e.checked,className:"checkbox-input",onChange:e.onChangeCallback}),n.a.createElement("label",{htmlFor:e.checkId,className:"checkbox-label"},e.checkLabel))}function p(e){var a=e.searchMethod,t=e.dispatchSearchMethod;return n.a.createElement("div",{className:"check-search-div"},n.a.createElement("div",{className:"check-search-label"},"\u641c\u7d22\u65b9\u6cd5\uff1a"),n.a.createElement(k,{checkLabel:"\u5b8c\u5168\u5339\u914d",checkId:"checkTotalId",checked:a.checkTotal,onChangeCallback:function(){return t("checkTotal")}}),n.a.createElement(k,{checkLabel:"\u90e8\u5206\u5339\u914d",checkId:"checkPartId",checked:a.checkPart,onChangeCallback:function(){return t("checkPart")}}),n.a.createElement(k,{checkLabel:"\u6b63\u5219\u5339\u914d",checkId:"checkRegexId",checked:a.checkRegex,onChangeCallback:function(){return t("checkRegex")}}))}function d(e){var a=e.searchRange,t=e.dispatchSearchRange;return n.a.createElement("div",{className:"check-search-div"},n.a.createElement("div",{className:"check-search-label"},"\u641c\u7d22\u8303\u56f4\uff1a"),n.a.createElement(k,{checkLabel:"\u5168\u90e8",checkId:"checkAllId",checked:a.checkRangeAll,onChangeCallback:function(){return t("checkRangeAll")}}),n.a.createElement(k,{checkLabel:"\u5047\u540d",checkId:"checkHiraganaId",checked:a.checkHiragana,onChangeCallback:function(){return t("checkHiragana")}}),n.a.createElement(k,{checkLabel:"\u6c49\u5b57",checkId:"checkKataganaId",checked:a.checkKatagana,onChangeCallback:function(){return t("checkKatagana")}}),n.a.createElement(k,{checkLabel:"\u7f57\u9a6c\u5b57",checkId:"checkRomanjiId",checked:a.checkRomanji,onChangeCallback:function(){return t("checkRomanji")}}),n.a.createElement(k,{checkLabel:"\u4e2d\u6587\u542b\u4e49",checkId:"checkChineseId",checked:a.checkChinese,onChangeCallback:function(){return t("checkChinese")}}))}t(17),t(18);function _(e){var a=e.src,t=e.inputEle;return n.a.createElement("iframe",{src:a,name:"jisho",width:"100%",height:"100%",scrolling:"auto",frameBorder:"no",title:"jisho",onLoad:function(){setTimeout((function(){t.current&&!document.activeElement.contains(t.current)&&t.current.focus()}),2e3)}})}function N(){return n.a.createElement("div",{className:"history_container"},n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"),n.a.createElement("p",{className:"history_item"},"\u5473"),n.a.createElement("p",{className:"history_item"},"\u79cb\u8449\u539f"),n.a.createElement("p",{className:"history_item"},"\u7f8e\u8853\u9928"),n.a.createElement("p",{className:"history_item"},"\u4f53\u91cd"),n.a.createElement("p",{className:"history_item"},"\u85ac\u4ee3"),n.a.createElement("p",{className:"history_item"},"\u540d\u8abf\u5b50"),n.a.createElement("p",{className:"history_item"},"\u3050\u3089\u3044"),n.a.createElement("p",{className:"history_item"},"\u96fb\u6c17\u304c"))}t(19);var y={checkTotal:!0,checkPart:!1,checkRegex:!1},g=function(e,a){switch(a){case"checkTotal":return{checkTotal:!0,checkPart:!1,checkRegex:!1};case"checkPart":return{checkTotal:!1,checkPart:!0,checkRegex:!1};case"checkRegex":return{checkTotal:!1,checkPart:!1,checkRegex:!0};default:throw new Error("Unexpected action")}},f=t(3),b=t(2),j={checkRangeAll:!0,checkHiragana:!0,checkKatagana:!0,checkRomanji:!0,checkChinese:!0},v=function(e,a){return a[e]?Object(b.a)(Object(b.a)({},a),{},Object(f.a)({checkRangeAll:!1},e,!1)):Object.entries(a).every((function(a){var t=Object(l.a)(a,2),c=t[0],n=t[1];return c===e||("checkRangeAll"===c||n)}))?Object(b.a)(Object(b.a)({},a),{},Object(f.a)({checkRangeAll:!0},e,!0)):Object(b.a)(Object(b.a)({},a),{},Object(f.a)({checkRangeAll:!1},e,!0))},R=function(e,a){switch(a){case"checkRangeAll":return e.checkRangeAll?{checkRangeAll:!1,checkHiragana:!1,checkKatagana:!1,checkRomanji:!1,checkChinese:!1}:{checkRangeAll:!0,checkHiragana:!0,checkKatagana:!0,checkRomanji:!0,checkChinese:!0};case"checkHiragana":return v("checkHiragana",e);case"checkKatagana":return v("checkKatagana",e);case"checkRomanji":return v("checkRomanji",e);case"checkChinese":return v("checkChinese",e);default:throw new Error("Unexpected action")}};var C=function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],s=Object(c.useRef)(null),i=Object(c.useState)([]),u=Object(l.a)(i,2),k=u[0],f=u[1],b=Object(c.useState)([]),v=Object(l.a)(b,2),C=v[0],w=v[1],x=Object(c.useState)(""),O=Object(l.a)(x,2),I=O[0],S=O[1],T=Object(c.useReducer)(R,j),A=Object(l.a)(T,2),L=A[0],H=A[1],K=Object(c.useReducer)(g,y),P=Object(l.a)(K,2),M=P[0],V=P[1],U=function(e,a){return M.checkTotal?e===a&&(console.log(888,e,a),!0):M.checkPart?-1!==e.indexOf(a)||-1!==a.indexOf(e):!!M.checkRegex&&null!==a.match(new RegExp(e))},B=function(e,a){if(e||(e=t),a||(a=k),S(e),window.location.hash=e,""===e)return[];var c=a.filter((function(a){return L.checkHiragana&&U(e,a.\u5047\u540d\u65e5\u8bed)||L.checkKatagana&&U(e,a.\u6c49\u5b57\u65e5\u8bed)||L.checkRomanji&&U(e,a.\u7f57\u9a6c\u5b57)||L.checkChinese&&M.checkTotal&&U(e,a.\u4e2d\u6587\u89e3\u91ca)||L.checkChinese&&(M.checkPart||M.checkRegex)&&U(e,a.\u4e2d\u6587\u89e3\u91ca)}));w(c.slice(0,100))};return document.onkeydown=function(e){(8===e.keyCode&&e.ctrlKey||27===e.keyCode)&&(s.current&&s.current.focus(),r("")),13===e.keyCode&&B()},Object(c.useEffect)((function(){m.a.getItem("dict").then((function(e){if(null===e)fetch("/jp2chn.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("dict downloaded success"),f(e);var a=decodeURIComponent(window.location.hash.slice(1));r(a),B(a,e),m.a.setItem("dict",e).then((function(){return console.log("dict saved success.")})).catch((function(e){return console.log("dict saved fail.",e)}))})).catch((function(e){return console.log("dict downloaded and saved fail",e)}));else{console.log("dict loaded success."),f(e);var a=decodeURIComponent(window.location.hash.slice(1));r(a),B(a,e)}})).catch((function(e){console.log("dict loaded failed.",e)})),void 0!==window.orientation&&(document.getElementById("root").style.height="85vh")}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{searchValue:t,setSearchValue:r,startSearch:B,inputEle:s}),n.a.createElement("div",{className:"dict_container"},n.a.createElement(h,{outcome:{all:k.length,hit:C.length}}),n.a.createElement(p,{searchMethod:M,dispatchSearchMethod:V}),n.a.createElement(d,{searchRange:L,dispatchSearchRange:H}),n.a.createElement(E,{dict:C,searchValue:t})),n.a.createElement("div",{className:"jisho_container"},n.a.createElement(_,{src:"https://jisho.org/search/"+encodeURIComponent(I),inputEle:s})),n.a.createElement(N,null))};t(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5f7e0d31.chunk.js.map