(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5de4e062"],{"04d1":function(e,t,n){var c=n("342f"),a=c.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"07ac":function(e,t,n){var c=n("23e7"),a=n("6f53").values;c({target:"Object",stat:!0},{values:function(e){return a(e)}})},"0dc1":function(e,t,n){},"0feb":function(e,t,n){"use strict";var c=n("7a23"),a={class:"modal fade",tabindex:"-1"},r={class:"modal-dialog modal-dialog-centered"},o={class:"modal-content bg-gray-dark p-sm-3 p-2"},i=Object(c["createVNode"])("button",{class:"ms-auto btn-close text-light",type:"button","data-bs-dismiss":"modal"},null,-1),s={class:"text-center pb-sm-3 pb-2 px-sm-4 px-2"},l={class:"mb-4"},u={class:"fw-bold fs-7 text-uppercase"},d={class:"container"},p={class:"row text-center"},f={class:"ls-sm"},b={class:"fs-3 fw-bold text-primary"},h={class:"fw-bold text-primary"},m={class:"fs-6 text-decoration-line-through"};function v(e,t,n,v,g,O){var j=Object(c["resolveComponent"])("Counter");return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",o,[i,Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("h6",u,Object(c["toDisplayString"])(g.tempProduct.subtitle),1),Object(c["createVNode"])("h4",null,Object(c["toDisplayString"])(g.tempProduct.title),1)]),Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("img",{class:"col-md-8 col-sm-8 col-9 mx-auto",src:g.tempProduct.imageUrl,alt:g.tempProduct.subtitle},null,8,["src","alt"])])]),Object(c["createVNode"])("div",f,[Object(c["createVNode"])("span",b,Object(c["toDisplayString"])(e.$helper.currency(g.tempProduct.price)),1),Object(c["createVNode"])("span",h," / "+Object(c["toDisplayString"])(g.tempProduct.unit)+"  ",1),Object(c["createVNode"])("span",m,Object(c["toDisplayString"])(e.$helper.currency(g.tempProduct.origin_price)),1)]),Object(c["createVNode"])(j,{class:"counter-lg w-100 mb-3",fixed:"",value:g.tempProduct.qty,"onUpdate:value":t[1]||(t[1]=function(e){return g.tempProduct.qty=e})},null,8,["value"]),Object(c["createVNode"])("button",{class:"btn btn-primary w-100",type:"button","data-bs-dismiss":"modal",onClick:t[2]||(t[2]=function(){return O.submitCartItem&&O.submitCartItem.apply(O,arguments)})},"加入購物車")])])])])}var g=n("7355"),O={name:"ProductModal",components:{Counter:g["a"]},emits:["submit-cart-item"],props:{product:{type:Object,defualt:function(){}}},data:function(){return{tempProduct:JSON.parse(JSON.stringify(this.product))}},watch:{product:function(){this.tempProduct=JSON.parse(JSON.stringify(this.product))}},methods:{submitCartItem:function(){this.$emit("submit-cart-item",this.tempProduct)}}};O.render=v;t["a"]=O},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1799:function(e,t,n){"use strict";var c=n("7a23"),a={class:"pagination justify-content-center text-center"},r=Object(c["createVNode"])("span",null,"«",-1),o=Object(c["createVNode"])("span",null,"»",-1);function i(e,t,n,i,s,l){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",null,[Object(c["createVNode"])("ul",a,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!n.pages.has_prev}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return l.updatePage(n.pages.current_page-1)}),["prevent"]))},[r])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.pages.total_pages,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:e,class:["page-item",{active:e===n.pages.current_page}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(t){return l.updatePage(e)}),["prevent"])},Object(c["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!n.pages.has_next}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return l.updatePage(n.pages.current_page+1)}),["prevent"]))},[o])],2)])])}var s={name:"Pagination",props:["pages"],emits:["update-page"],methods:{updatePage:function(e){this.$emit("update-page",e)}}};s.render=i;t["a"]=s},2532:function(e,t,n){"use strict";var c=n("23e7"),a=n("5a34"),r=n("1d80"),o=n("577e"),i=n("ab13");c({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~o(r(this)).indexOf(o(a(e)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var c=n("6eeb"),a=n("825a"),r=n("577e"),o=n("d039"),i=n("ad6d"),s="toString",l=RegExp.prototype,u=l[s],d=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=u.name!=s;(d||p)&&c(RegExp.prototype,s,(function(){var e=a(this),t=r(e.source),n=e.flags,c=r(void 0===n&&e instanceof RegExp&&!("flags"in l)?i.call(e):n);return"/"+t+"/"+c}),{unsafe:!0})},"44e7":function(e,t,n){var c=n("861d"),a=n("c6b6"),r=n("b622"),o=r("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"466d":function(e,t,n){"use strict";var c=n("d784"),a=n("825a"),r=n("50c4"),o=n("577e"),i=n("1d80"),s=n("8aa5"),l=n("14c3");c("match",(function(e,t,n){return[function(t){var n=i(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,n):new RegExp(t)[e](o(n))},function(e){var c=a(this),i=o(e),u=n(t,c,i);if(u.done)return u.value;if(!c.global)return l(c,i);var d=c.unicode;c.lastIndex=0;var p,f=[],b=0;while(null!==(p=l(c,i))){var h=o(p[0]);f[b]=h,""===h&&(c.lastIndex=s(i,r(c.lastIndex),d)),b++}return 0===b?null:f}]}))},"4d63":function(e,t,n){var c=n("83ab"),a=n("da84"),r=n("94ca"),o=n("7156"),i=n("9112"),s=n("9bf2").f,l=n("241c").f,u=n("44e7"),d=n("577e"),p=n("ad6d"),f=n("9f7f"),b=n("6eeb"),h=n("d039"),m=n("5135"),v=n("69f3").enforce,g=n("2626"),O=n("b622"),j=n("fce3"),y=n("107c"),x=O("match"),N=a.RegExp,V=N.prototype,k=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,w=/a/g,S=/a/g,E=new N(w)!==w,P=f.UNSUPPORTED_Y,B=c&&(!E||P||j||y||h((function(){return S[x]=!1,N(w)!=w||N(S)==S||"/a/i"!=N(w,"i")}))),M=function(e){for(var t,n=e.length,c=0,a="",r=!1;c<=n;c++)t=e.charAt(c),"\\"!==t?r||"."!==t?("["===t?r=!0:"]"===t&&(r=!1),a+=t):a+="[\\s\\S]":a+=t+e.charAt(++c);return a},I=function(e){for(var t,n=e.length,c=0,a="",r=[],o={},i=!1,s=!1,l=0,u="";c<=n;c++){if(t=e.charAt(c),"\\"===t)t+=e.charAt(++c);else if("]"===t)i=!1;else if(!i)switch(!0){case"["===t:i=!0;break;case"("===t:k.test(e.slice(c+1))&&(c+=2,s=!0),a+=t,l++;continue;case">"===t&&s:if(""===u||m(o,u))throw new SyntaxError("Invalid capture group name");o[u]=!0,r.push([u,l]),s=!1,u="";continue}s?u+=t:a+=t}return[a,r]};if(r("RegExp",B)){for(var C=function(e,t){var n,c,a,r,s,l,f=this instanceof C,b=u(e),h=void 0===t,m=[],g=e;if(!f&&b&&h&&e.constructor===C)return e;if((b||e instanceof C)&&(e=e.source,h&&(t="flags"in g?g.flags:p.call(g))),e=void 0===e?"":d(e),t=void 0===t?"":d(t),g=e,j&&"dotAll"in w&&(c=!!t&&t.indexOf("s")>-1,c&&(t=t.replace(/s/g,""))),n=t,P&&"sticky"in w&&(a=!!t&&t.indexOf("y")>-1,a&&(t=t.replace(/y/g,""))),y&&(r=I(e),e=r[0],m=r[1]),s=o(N(e,t),f?this:V,C),(c||a||m.length)&&(l=v(s),c&&(l.dotAll=!0,l.raw=C(M(e),n)),a&&(l.sticky=!0),m.length&&(l.groups=m)),e!==g)try{i(s,"source",""===g?"(?:)":g)}catch(O){}return s},D=function(e){e in C||s(C,e,{configurable:!0,get:function(){return N[e]},set:function(t){N[e]=t}})},R=l(N),z=0;R.length>z;)D(R[z++]);V.constructor=C,C.prototype=V,b(a,"RegExp",C)}g("RegExp")},"4e82":function(e,t,n){"use strict";var c=n("23e7"),a=n("1c0b"),r=n("7b0b"),o=n("50c4"),i=n("577e"),s=n("d039"),l=n("addb"),u=n("a640"),d=n("04d1"),p=n("d998"),f=n("2d00"),b=n("512c"),h=[],m=h.sort,v=s((function(){h.sort(void 0)})),g=s((function(){h.sort(null)})),O=u("sort"),j=!s((function(){if(f)return f<70;if(!(d&&d>3)){if(p)return!0;if(b)return b<603;var e,t,n,c,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(c=0;c<47;c++)h.push({k:t+c,v:n})}for(h.sort((function(e,t){return t.v-e.v})),c=0;c<h.length;c++)t=h[c].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),y=v||!g||!O||!j,x=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:i(t)>i(n)?1:-1}};c({target:"Array",proto:!0,forced:y},{sort:function(e){void 0!==e&&a(e);var t=r(this);if(j)return void 0===e?m.call(t):m.call(t,e);var n,c,i=[],s=o(t.length);for(c=0;c<s;c++)c in t&&i.push(t[c]);i=l(i,x(e)),n=i.length,c=0;while(c<n)t[c]=i[c++];while(c<s)delete t[c++];return t}})},"512c":function(e,t,n){var c=n("342f"),a=c.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},5605:function(e,t,n){e.exports=n.p+"img/filter-light.311fdceb.svg"},"5a34":function(e,t,n){var c=n("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5fa3":function(e,t,n){"use strict";var c=n("2909");n("caad"),n("2532"),n("a434"),n("159b"),n("d81d"),n("b64b");t["a"]={name:"SizeSynchronizerMixin",data:function(){return{sizeSyncElGroups:{default:[]},syncInterval:300}},methods:{pushSizeSyncEl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";t in this.sizeSyncElGroups||(this.sizeSyncElGroups[t]=[]),this.sizeSyncElGroups[t].includes(e)||this.sizeSyncElGroups[t].push(e)},removeSizeSyncEl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=this.sizeSyncElGroups[t].indexOf(e);n>-1&&this.sizeSyncElGroups[t].splice(n,1)},removeAllSizeSyncEls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";this.sizeSyncElGroups[e]=[]},syncElGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=this.sizeSyncElGroups[e];t.forEach((function(e){e.style.height=null}));var n=Math.max.apply(Math,Object(c["a"])(t.map((function(e){return e.clientHeight}))));t.forEach((function(e){e.clientHeight!==n&&(e.style.height="".concat(n,"px"))}))},syncElGroups:function(){Object.keys(this.sizeSyncElGroups).forEach(this.syncElGroup)}},created:function(){setInterval(this.syncElGroups,this.syncInterval)}}},"6d12":function(e,t,n){e.exports=n.p+"img/loupe-light.fcefd177.svg"},"6f53":function(e,t,n){var c=n("83ab"),a=n("df75"),r=n("fc6a"),o=n("d1e7").f,i=function(e){return function(t){var n,i=r(t),s=a(i),l=s.length,u=0,d=[];while(l>u)n=s[u++],c&&!o.call(i,n)||d.push(e?[n,i[n]]:i[n]);return d}};e.exports={entries:i(!0),values:i(!1)}},7355:function(e,t,n){"use strict";var c=n("7a23"),a=Object(c["withScopeId"])("data-v-77a9b0b7");Object(c["pushScopeId"])("data-v-77a9b0b7");var r={class:"counter"},o={class:"digit"};Object(c["popScopeId"])();var i=a((function(e,t,n,a,i,s){return Object(c["openBlock"])(),Object(c["createBlock"])("table",r,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("td",{class:"minus",onClick:t[1]||(t[1]=function(){return s.decrease&&s.decrease.apply(s,arguments)})},"-"),Object(c["createVNode"])("td",o,Object(c["toDisplayString"])(n.value),1),Object(c["createVNode"])("td",{class:"plus",onClick:t[2]||(t[2]=function(){return s.increase&&s.increase.apply(s,arguments)})},"+")])])})),s=(n("a9e3"),{name:"Counter",props:{min:{type:Number,default:1},max:{type:Number,default:99},value:{type:Number,default:0}},emits:["update:value"],methods:{increase:function(){this.value>=this.max||this.$emit("update:value",this.value+1)},decrease:function(){this.value<=this.min||this.$emit("update:value",this.value-1)}}});n("b56a");s.render=i,s.__scopeId="data-v-77a9b0b7";t["a"]=s},"841c":function(e,t,n){"use strict";var c=n("d784"),a=n("825a"),r=n("1d80"),o=n("129f"),i=n("577e"),s=n("14c3");c("search",(function(e,t,n){return[function(t){var n=r(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,n):new RegExp(t)[e](i(n))},function(e){var c=a(this),r=i(e),l=n(t,c,r);if(l.done)return l.value;var u=c.lastIndex;o(u,0)||(c.lastIndex=0);var d=s(c,r);return o(c.lastIndex,u)||(c.lastIndex=u),null===d?-1:d.index}]}))},"95dc":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u}));var c=function(e){return{all:e=e||new Map,on:function(t,n){var c=e.get(t);c&&c.push(n)||e.set(t,[n])},off:function(t,n){var c=e.get(t);c&&c.splice(c.indexOf(n)>>>0,1)},emit:function(t,n){(e.get(t)||[]).slice().map((function(e){e(n)})),(e.get("*")||[]).slice().map((function(e){e(t,n)}))}}},a={name:"RouterMixin",provide:function(){return{emitter:c()}},data:function(){return{emitter:{}}},created:function(){this.emitter=this.$.provides.emitter}},r={name:"TransmitterMixin",inject:["emitter"],methods:{emit:function(e,t){this.emitter.emit(e,t)}}},o={name:"DialogTransmitterMixin",extends:r,methods:{pushDialog:function(e,t,n,c,a){this.emit("push-dialog",{type:e||"alert",title:t,content:n,onConfirm:c,onCancel:a})},pushAlert:function(e,t,n){this.pushDialog("alert",e,t,n)},pushConfirm:function(e,t,n,c){this.pushDialog("confirm",e,t,n,c)}}},i={name:"MessageTransmitterMixin",extends:r,methods:{pushMessage:function(e,t,n){this.emit("push-message",{style:e||"success",title:t,content:n})},pushMessageSuccess:function(e,t){this.pushMessage("success",e,t)},pushMessageFailure:function(e,t){this.pushMessage("danger",e,t)}}},s={name:"ReceiverMixin",inject:["emitter"],methods:{initReceiver:function(e,t){this.emitter.on(e,t)}}},l={name:"DialogReceiverMixin",extends:s,methods:{initDialogReceiver:function(e){this.initReceiver("push-dialog",(function(t){e.push(t)}))}}},u={name:"MessageReceiverMixin",extends:s,methods:{initMessageReceiver:function(e){this.initReceiver("push-message",(function(t){e.push(t)}))}}}},"96b9":function(e,t,n){e.exports=n.p+"img/sort-light.9a5bac70.svg"},a1f8:function(e,t,n){},a434:function(e,t,n){"use strict";var c=n("23e7"),a=n("23cb"),r=n("a691"),o=n("50c4"),i=n("7b0b"),s=n("65f0"),l=n("8418"),u=n("1dde"),d=u("splice"),p=Math.max,f=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,c,u,d,m,v,g=i(this),O=o(g.length),j=a(e,O),y=arguments.length;if(0===y?n=c=0:1===y?(n=0,c=O-j):(n=y-2,c=f(p(r(t),0),O-j)),O+n-c>b)throw TypeError(h);for(u=s(g,c),d=0;d<c;d++)m=j+d,m in g&&l(u,d,g[m]);if(u.length=c,n<c){for(d=j;d<O-c;d++)m=d+c,v=d+n,m in g?g[v]=g[m]:delete g[v];for(d=O;d>O-c+n;d--)delete g[d-1]}else if(n>c)for(d=O-c;d>j;d--)m=d+c-1,v=d+n-1,m in g?g[v]=g[m]:delete g[v];for(d=0;d<n;d++)g[d+j]=arguments[d+2];return g.length=O-c+n,u}})},ab13:function(e,t,n){var c=n("b622"),a=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(c){}}return!1}},addb:function(e,t){var n=Math.floor,c=function(e,t){var o=e.length,i=n(o/2);return o<8?a(e,t):r(c(e.slice(0,i),t),c(e.slice(i),t),t)},a=function(e,t){var n,c,a=e.length,r=1;while(r<a){c=r,n=e[r];while(c&&t(e[c-1],n)>0)e[c]=e[--c];c!==r++&&(e[c]=n)}return e},r=function(e,t,n){var c=e.length,a=t.length,r=0,o=0,i=[];while(r<c||o<a)r<c&&o<a?i.push(n(e[r],t[o])<=0?e[r++]:t[o++]):i.push(r<c?e[r++]:t[o++]);return i};e.exports=c},b56a:function(e,t,n){"use strict";n("a1f8")},caad:function(e,t,n){"use strict";var c=n("23e7"),a=n("4d64").includes,r=n("44d2");c({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d2b9:function(e,t,n){e.exports=n.p+"img/title-dec.52fa587e.png"},d81d:function(e,t,n){"use strict";var c=n("23e7"),a=n("b727").map,r=n("1dde"),o=r("map");c({target:"Array",proto:!0,forced:!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},d998:function(e,t,n){var c=n("342f");e.exports=/MSIE|Trident/.test(c)},e6dc:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c"),n("4e82"),n("b0c0");var c=n("7a23"),a=n("d2b9"),r=n.n(a),o=n("6d12"),i=n.n(o),s=n("5605"),l=n.n(s),u=n("96b9"),d=n.n(u),p=Object(c["withScopeId"])("data-v-3b12876d");Object(c["pushScopeId"])("data-v-3b12876d");var f={class:"min-vh-100 py-7"},b=Object(c["createVNode"])("div",{class:"text-center"},[Object(c["createVNode"])("h2",{class:"mb-0 lh-1"},"系列酒藏"),Object(c["createVNode"])("img",{class:"mw-100",src:r.a,alt:""})],-1),h={class:"container"},m={class:"col-lg-11 col mx-auto mt-lg-5 mb-lg-6 my-4"},v={class:"row align-items-center"},g=Object(c["createVNode"])("div",{class:"col d-xl-flex d-none"},null,-1),O={class:"col-auto row gx-2 d-xl-flex d-none"},j={class:"col d-flex align-items-center justify-content-end"},y={class:"input-group input-group-sm justify-content-end"},x=Object(c["createVNode"])("button",{class:"btn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#input-search"},[Object(c["createVNode"])("img",{src:i.a,alt:"search",width:"20"})],-1),N=Object(c["createVNode"])("div",null,[Object(c["createVNode"])("button",{class:"btn d-xl-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#filters"},[Object(c["createVNode"])("img",{src:l.a,alt:"filters",width:"20"})])],-1),V={class:"dropdown"},k=Object(c["createVNode"])("button",{class:"btn",type:"button","data-bs-toggle":"dropdown"},[Object(c["createVNode"])("img",{src:d.a,alt:"sort",width:"20"})],-1),w={class:"dropdown-menu dropdown-menu-dark"},S={id:"filters",class:"d-xl-none row row-cols-sm-4 row-cols-2 g-2 mb-4 collapse"},E={class:"col-lg-11 col mx-auto"},P={class:"container"},B={class:"row row-cols-xl-4 row-cols-md-3 row-cols-2 gx-md-7 gx-5 gy-sm-6 gy-5"},M={class:"position-relative w-100 my-auto"},I={class:"cover-parent overlay-dark hover d-sm-flex d-none align-items-center"},C={class:"d-flex flex-column mx-auto"},D=Object(c["createVNode"])("button",{class:"btn btn-sm btn-decorative w-100",type:"button"},"瞭解更多",-1),R={class:"mt-3"},z={class:"ls-sm text-center"},_={class:"fs-5 fw-bold text-primary"},A={class:"fs-6 fw-bold text-primary"},T={class:"fs-7 text-primary text-decoration-line-through"},F={key:1,class:"text-center mt-8"},G=Object(c["createVNode"])("div",{class:"fw-medium"},"沒有符合條件的商品",-1);Object(c["popScopeId"])();var $=p((function(e,t,n,a,r,o){var i=Object(c["resolveComponent"])("router-link"),s=Object(c["resolveComponent"])("Pagination"),l=Object(c["resolveComponent"])("ProductModal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",f,[b,Object(c["createVNode"])("div",h,[Object(c["createVNode"])("div",m,[Object(c["createVNode"])("div",v,[g,Object(c["createVNode"])("div",O,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.filters,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e,class:"col"},[Object(c["withDirectives"])(Object(c["createVNode"])("select",{class:"form-select indicator-left","onUpdate:modelValue":function(t){return e.value=t}},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.options,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("option",{key:e,innerHTML:e.content,value:e.value},null,8,["innerHTML","value"])})),128))],8,["onUpdate:modelValue"]),[[c["vModelSelect"],e.value]])])})),128))]),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("div",null,[Object(c["createVNode"])("div",y,[x,Object(c["withDirectives"])(Object(c["createVNode"])("input",{id:"input-search",class:["form-control input-underline shadow-none collapse",{show:r.search}],type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.search=e})},null,2),[[c["vModelText"],r.search,void 0,{lazy:!0}]])])]),N,Object(c["createVNode"])("div",V,[k,Object(c["createVNode"])("ul",w,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.sort.options,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:t},[Object(c["createVNode"])("button",{class:["dropdown-item ls-sm",{active:t===r.sort.value}],type:"button",onClick:function(e){return r.sort.value=t}},Object(c["toDisplayString"])(e.name),11,["onClick"])])})),128))])])])]),Object(c["createVNode"])("div",S,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.filters,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e,class:"col"},[Object(c["withDirectives"])(Object(c["createVNode"])("select",{class:"form-select indicator-left","onUpdate:modelValue":function(t){return e.value=t}},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.options,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("option",{key:e,innerHTML:e.content,value:e.value},null,8,["innerHTML","value"])})),128))],8,["onUpdate:modelValue"]),[[c["vModelSelect"],e.value]])])})),128))])]),Object(c["createVNode"])("div",E,[Object(c["createVNode"])("div",P,[Object(c["createVNode"])("div",B,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.displayed,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t.id,class:"col d-flex flex-column lh-sm"},[Object(c["createVNode"])("div",{class:"d-flex flex-column",ref:function(t){t&&e.pushSizeSyncEl(t)}},[Object(c["createVNode"])("div",M,[Object(c["createVNode"])("img",{class:"w-100",src:t.imageUrl,alt:t.subtitle},null,8,["src","alt"]),Object(c["createVNode"])("div",I,[Object(c["createVNode"])("div",C,[Object(c["createVNode"])(i,{to:"/product/".concat(t.id)},{default:p((function(){return[D]})),_:2},1032,["to"]),Object(c["createVNode"])("div",R,[Object(c["createVNode"])("button",{class:"btn btn-sm btn-decorative",type:"button","data-bs-toggle":"modal","data-bs-target":"#product-modal",onClick:function(e){return o.showModal(t)}}," 加入購物車 ",8,["onClick"])])])]),Object(c["createVNode"])(i,{class:"d-sm-none stretched-link",to:"/product/".concat(t.id)},null,8,["to"])])],512),Object(c["createVNode"])(i,{class:"fs-8 fw-bold ls-sm text-center text-uppercase pt-3\n                  text-light text-decoration-none text-truncate truncate-multi-line",to:"/product/".concat(t.id)},{default:p((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.subtitle),1)]})),_:2},1032,["to"]),Object(c["createVNode"])(i,{class:"fs-6 ls-sm text-center pt-1 my-auto\n                  text-light text-decoration-none",to:"/product/".concat(t.id)},{default:p((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.title),1)]})),_:2},1032,["to"]),Object(c["createVNode"])("div",z,[Object(c["createVNode"])("span",_,Object(c["toDisplayString"])(e.$helper.currency(t.price)),1),Object(c["createVNode"])("span",A,"/"+Object(c["toDisplayString"])(t.unit)+" ",1),Object(c["createVNode"])("span",T,Object(c["toDisplayString"])(e.$helper.currency(t.origin_price)),1)])])})),128))])])])]),r.isInitialized?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},[o.isEmpty?(Object(c["openBlock"])(),Object(c["createBlock"])("div",F,[G,Object(c["createVNode"])("button",{class:"btn ls-0 btn-primary mt-4",type:"button",onClick:t[2]||(t[2]=function(){return o.resetFilters&&o.resetFilters.apply(o,arguments)})},"重設篩選條件")])):(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,class:"mt-6",pages:o.pagination,onUpdatePage:o.updatePage},null,8,["pages","onUpdatePage"]))],64)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])(l,{id:"product-modal",product:r.modalItem,onSubmitCartItem:o.addCartItem},null,8,["product","onSubmitCartItem"])],64)})),U=n("5530"),L=(n("caad"),n("2532"),n("4de4"),n("07ac"),n("466d"),n("4d63"),n("25f0"),n("fb6a"),n("9129"),n("a9e3"),n("159b"),n("d3b7"),n("9011")),q=n("95dc"),J=n("5fa3"),H=n("0feb"),K=n("1799"),Q={name:"Products",mixins:[L["a"],q["g"],q["d"],J["a"]],components:{ProductModal:H["a"],Pagination:K["a"]},data:function(){return{products:[],modalItem:this.defaultProduct(),search:"",filters:[{name:"type",default:"",value:"",options:[{content:"所有類別",value:""},{content:"威士忌",value:"威士忌"},{content:"琴酒",value:"琴酒"}],func:function(e){return e.category.includes(this.value)}},{name:"materials",default:"",value:"",options:[{content:"所有原料&emsp;&emsp;",value:""},{content:"單一麥芽",value:"單一麥芽"},{content:"調和麥芽",value:"調和麥芽"},{content:"穀物威士忌",value:"穀物威士忌"},{content:"調和威士忌",value:"調和威士忌"},{content:"裸麥威士忌",value:"裸麥威士忌"},{content:"原桶強度",value:"原桶強度"},{content:"原桶酒",value:"原桶酒"},{content:"波本威士忌",value:"波本威士忌"},{content:"田納西威士忌",value:"田納西威士忌"}],func:function(e){return e.category.includes(this.value)}},{name:"region",default:"",value:"",options:[{content:"所有產區",value:""},{content:"蘇格蘭",value:"蘇格蘭"},{content:"愛爾蘭",value:"愛爾蘭"},{content:"美國",value:"美國"},{content:"日本",value:"日本"},{content:"英國",value:"英國"},{content:"法國",value:"法國"},{content:"德國",value:"德國"},{content:"瑞典",value:"瑞典"}],func:function(e){return e.category.includes(this.value)}},{name:"price",default:[],value:[],options:[{content:"不限價格",value:[]},{content:"500元以下",value:[0,499]},{content:"500~999元",value:[500,999]},{content:"1000~1999元",value:[1e3,1999]},{content:"2000元以上",value:[2e3]}],parse:function(e){return JSON.parse(e)},func:function(e){return(!this.value[0]||e.price>=this.value[0])&&(!this.value[1]||e.price<=this.value[1])}}],sort:{default:0,value:0,options:[{name:"上架時間",func:function(){return!1}},{name:"價格低至高",func:function(e,t){return e.price-t.price}},{name:"價格高至低",func:function(e,t){return t.price-e.price}}]},page:1,itemsPerPage:12,isInitialized:!1}},computed:{filtered:function(){var e=this;return this.products.filter((function(t){return Object.values(e.filters).every((function(e){return e.func(t)}))})).filter((function(t){return t.title.match(new RegExp(e.search,"i"))||t.subtitle.match(new RegExp(e.search,"i"))})).sort(this.sort.options[this.sort.value].func)},displayed:function(){return this.filtered.slice((this.page-1)*this.itemsPerPage,this.page*this.itemsPerPage)},isEmpty:function(){return 0===this.filtered.length},pagination:function(){return{current_page:this.page,total_pages:Math.ceil(this.filtered.length/this.itemsPerPage),has_prev:this.page>1,has_next:this.page<Math.ceil(this.filtered.length/this.itemsPerPage)}}},watch:{search:function(){this.page=1},filters:{handler:function(){this.page=1},deep:!0},sort:function(){this.page=1},displayed:function(){this.removeAllSizeSyncEls()}},methods:{parseQuery:function(e){"search"in e&&(this.search=e.search),"sort"in e&&!Number.isNaN(e.sort)&&(this.sort.value=parseInt(e.sort,10)),this.filters.forEach((function(t){t.name in e&&(t.value=t.parse?t.parse(e[t.name]):e[t.name])})),"page"in e&&!Number.isNaN(e.page)&&(this.page=parseInt(e.page,10))},defaultProduct:function(){return{info:{},content:{},qty:1}},resetFilters:function(){this.search="",this.filters.forEach((function(e){e.value=e.default})),this.sort.value=this.sort.default},showModal:function(e){this.modalItem=Object(U["a"])(Object(U["a"])({},e),{},{qty:1})},getAllProducts:function(){var e=this;this.$loading.show();var t=function(t){e.products=t.products};return this.sendRequest("getProductsAll",null,null,t,null).finally(this.$loading.hide)},addCartItem:function(e){var t=this;this.$loading.show();var n={data:{product_id:e.id,qty:e.qty}},c=function(e){t.pushMessageSuccess(e.message),t.emit("update-item-count")},a=function(e){t.pushMessageFailure(e.message)};return this.sendRequest("addCartItem",null,n,c,a).finally(this.$loading.hide)},updatePage:function(e){this.page=e,window.scrollTo(0,0)}},created:function(){var e=this;this.parseQuery(this.$route.query),this.getAllProducts().then((function(){e.isInitialized=!0}))}};n("f7f3");Q.render=$,Q.__scopeId="data-v-3b12876d";t["default"]=Q},f7f3:function(e,t,n){"use strict";n("0dc1")}}]);
//# sourceMappingURL=chunk-5de4e062.31b8ab2b.js.map