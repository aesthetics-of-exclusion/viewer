(function(t){function e(e){for(var a,i,s=e[0],c=e[1],p=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/viewer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"520a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("StreetSwipe Facade Viewer")]),0===t.pois.length?[n("h3",[t._v("Loading…")])]:[n("h3",[t._v(t._s(t.pois.length)+" POIs loaded, showing "+t._s(t.firstIndex+1)+" – "+t._s(t.lastIndex)+" ")]),n("paginate",{attrs:{"page-count":Math.ceil(t.pois.length/t.pageSize),"page-range":3,"margin-pages":2,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),n("ol",{staticClass:"pois"},t._l(t.pois.slice(t.firstIndex,t.lastIndex),(function(t){return n("li",{key:t.id},[n("POI",{attrs:{poi:t}})],1)})),0),n("paginate",{attrs:{"page-count":Math.ceil(t.pois.length/t.pageSize),"page-range":3,"margin-pages":2,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})]],2)},o=[],i=(n("4de4"),n("d3b7"),n("048a")),s=n.n(i),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"poi",attrs:{"data-id":t.poi.id}},[n("a",{attrs:{href:t.poiHref(t.poi)}},[t.maskImageUrl?[n("img",{staticClass:"mask",attrs:{src:t.maskImageUrl}})]:[n("img",{staticClass:"screenshot",attrs:{src:t.screenshotImageUrl}})]],2)])},p=[],u={name:"POI",props:{poi:Object},computed:{maskImageUrl:function(){if(this.maskAnnotation)return this.maskAnnotation.data.urls["square.jpg"]},maskAnnotation:function(){return this.annotationOfType(this.poi.annotations,"mask")},screenshotImageUrl:function(){if(this.screenshotAnnotation)return this.screenshotAnnotation.data.screenshotUrl},screenshotAnnotation:function(){return this.annotationOfType(this.poi.annotations,"screenshot")}},methods:{poiHref:function(t){return"https://console.firebase.google.com/project/streetswipe-aoe/database/firestore/data~2Fpois~2F".concat(t.id,"?hl=nl")},annotationOfType:function(t,e){return t.filter((function(t){return t.type===e}))[0]}}},l=u,f=(n("d16d"),n("2877")),d=Object(f["a"])(l,c,p,!1,null,"2ac8f344",null),g=d.exports,h={name:"App",components:{POI:g},data:function(){return{pageSize:100,page:1,pois:[]}},computed:{firstIndex:function(){return(this.page-1)*this.pageSize},lastIndex:function(){return Math.min(this.page*this.pageSize,this.pois.length)}},mounted:function(){var t=this,e="https://us-central1-streetswipe-aoe.cloudfunctions.net/annotations/all.ndjson";fetch(e).then((function(t){return s()(t.body)})).then((function(e){var n,a=e.getReader();a.read().then(n=function(e){if(!e.done){var r=e.value;r.annotations.filter((function(t){return"mask"===t.type})).length>0&&t.pois.push(e.value),a.read().then(n)}})}))}},m=h,v=(n("034f"),Object(f["a"])(m,r,o,!1,null,null,null)),b=v.exports,x=n("8832"),y=n.n(x);a["a"].component("paginate",y.a),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},d16d:function(t,e,n){"use strict";var a=n("520a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a3151c7e.js.map