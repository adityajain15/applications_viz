(function(e){function n(n){for(var r,o,i=n[0],u=n[1],l=n[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==s[u]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},s={app:0},a=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/applications_viz/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var c=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),s=t.n(r);s.a},"11d4":function(e,n,t){"use strict";var r=t("d88f"),s=t.n(r);s.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Map")],1)},a=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._l(e.responses,(function(n,r){return[t("span",{key:"landscape-span-"+r,staticClass:"heebo f1 measure",style:"color: "+(r%2?"red":"black")+";"},[e._v("\n        "+e._s(n.answer)+"\n    ")])]}))],2)},i=[],u=(t("6762"),t("2fdb"),{name:"Landscape",data:function(){return{responses:[],ids:[],interval:null}},mounted:function(){this.getResponses(),this.interval=setInterval(this.getResponses,3e3)},methods:{getResponses:function(){var e=this;fetch("https://laser-leotard.glitch.me/questions/1").then((function(e){return e.json()})).then((function(n){for(var t=0;t<n.length;t++)e.ids.includes(n[t].id)||(e.ids.push(n[t].id),e.responses.push(n[t]))}))}},beforeDestroy:function(){clearInterval(this.interval)}}),l=u,c=t("2877"),p=Object(c["a"])(l,o,i,!1,null,"ddc96438",null),d=p.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"map"}})},h=[],v=t("e192"),m=t.n(v),b={name:"Map",data:function(){return{map:null,responses:[],ids:[],interval:null}},mounted:function(){m.a.accessToken="pk.eyJ1Ijoid2lzZXNocmltcCIsImEiOiJjamhtZHFkbHEzOWI1MzZvMWh2dWc0dnpwIn0.mPpRpAYssv7wcIKaAijezw",this.map=new m.a.Map({container:"map",style:"mapbox://styles/mapbox/dark-v9",center:[-74.5,40],zoom:1}),this.getResponses(),this.interval=setInterval(this.getResponses,3e3)},methods:{getRandomColor:function(){var e="hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)";return e},getResponses:function(){var e=this;fetch("https://laser-leotard.glitch.me/questions/0").then((function(e){return e.json()})).then((function(n){for(var t=0;t<n.length;t++)if(!e.ids.includes(n[t].id)){if(e.ids.push(n[t].id),e.responses.push(n[t]),"null"==n[t]["answer"])return;var r=document.createElement("div");r.className="marker",r.style.backgroundColor=e.getRandomColor(),r.style.width="5px",r.style.height="5px",r.style.borderRadius="50%",new m.a.Marker(r).setLngLat(JSON.parse(n[t]["answer"])).addTo(e.map)}}))}},beforeDestroy:function(){clearInterval(this.interval)}},y=b,g=(t("11d4"),Object(c["a"])(y,f,h,!1,null,"5ae57a4e",null)),w=g.exports,j={name:"app",components:{Landscape:d,Map:w}},O=j,_=(t("034f"),Object(c["a"])(O,s,a,!1,null,null,null)),M=_.exports;t("fa6d");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(M)}}).$mount("#app")},"64a9":function(e,n,t){},d88f:function(e,n,t){}});
//# sourceMappingURL=app.5313e9b0.js.map