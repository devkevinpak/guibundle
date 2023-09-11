(function(){"use strict";var n={315:function(n,e,t){var o=t(963),u=t(252);const l={id:"app"},r=(0,u._)("h1",null,"Vue Router Example",-1),i=(0,u.Uk)("Home"),a=(0,u.Uk)("About");function c(n,e,t,o,c,s){const f=(0,u.up)("router-link"),d=(0,u.up)("router-view");return(0,u.wg)(),(0,u.iD)("div",l,[r,(0,u.Wm)(f,{to:"/"},{default:(0,u.w5)((()=>[i])),_:1}),(0,u.Wm)(f,{to:"/about"},{default:(0,u.w5)((()=>[a])),_:1}),(0,u.Wm)(d)])}var s={name:"App"},f=t(744);const d=(0,f.Z)(s,[["render",c]]);var p=d,m=t(201);const v=n=>((0,u.dD)("data-v-287149ea"),n=n(),(0,u.Cn)(),n),w=v((()=>(0,u._)("h2",null,"Home",-1))),b=v((()=>(0,u._)("p",null,"Welcome to the Home page!",-1))),h=(0,u.Uk)("Slide 1"),_=(0,u.Uk)("Slide 2"),k=(0,u.Uk)("Slide 3"),g=(0,u.Uk)("Slide 4"),W=(0,u.Uk)("Slide 5"),S=(0,u.Uk)("Slide 6"),y=(0,u.Uk)("Slide 7"),O=(0,u.Uk)("Slide 8"),U=(0,u.Uk)("Slide 9");function F(n,e,t,o,l,r){const i=(0,u.up)("swiper-slide"),a=(0,u.up)("swiper");return(0,u.wg)(),(0,u.iD)("div",null,[w,b,(0,u._)("button",{onClick:e[0]||(e[0]=(...n)=>r.utilFunction&&r.utilFunction(...n))},"전역 함수 호출"),(0,u.Wm)(a,{navigation:!0,slidesPerView:3,spaceBetween:30,freeMode:!0,pagination:{clickable:!0},modules:o.modules,class:"mySwiper"},{default:(0,u.w5)((()=>[(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[h])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[_])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[k])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[g])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[W])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[S])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[y])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[O])),_:1}),(0,u.Wm)(i,null,{default:(0,u.w5)((()=>[U])),_:1})])),_:1},8,["modules"])])}function j(){alert("use utils!!")}var x=t(552),A=t(304),C={components:{Swiper:x.tq,SwiperSlide:x.o5},methods:{utilFunction(){j()}},setup(){return{modules:[A.Rv,A.tl,A.W_]}}};const G=(0,f.Z)(C,[["render",F],["__scopeId","data-v-287149ea"]]);var P=G;const D=(0,u._)("h2",null,"About",-1),H=(0,u._)("p",null,"This is the About page.",-1);function T(n,e,t,o,l,r){return(0,u.wg)(),(0,u.iD)("div",null,[D,H,(0,u._)("button",{onClick:e[0]||(e[0]=(...n)=>r.callGlobalFunction&&r.callGlobalFunction(...n))},"전역 함수 호출")])}var Z={methods:{callGlobalFunction(){this.$myGlobalFunction()}}};const E=(0,f.Z)(Z,[["render",T]]);var R=E;const V=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:R}],$=(0,m.p7)({history:(0,m.PO)("/guibundle/"),routes:V});var q=$;const B=(0,o.ri)(p);B.config.globalProperties.$myGlobalFunction=function(){alert("전역 함수가 호출되었습니다!")},B.use(q).mount("#app")}},e={};function t(o){var u=e[o];if(void 0!==u)return u.exports;var l=e[o]={exports:{}};return n[o](l,l.exports,t),l.exports}t.m=n,function(){var n=[];t.O=function(e,o,u,l){if(!o){var r=1/0;for(s=0;s<n.length;s++){o=n[s][0],u=n[s][1],l=n[s][2];for(var i=!0,a=0;a<o.length;a++)(!1&l||r>=l)&&Object.keys(t.O).every((function(n){return t.O[n](o[a])}))?o.splice(a--,1):(i=!1,l<r&&(r=l));if(i){n.splice(s--,1);var c=u();void 0!==c&&(e=c)}}return e}l=l||0;for(var s=n.length;s>0&&n[s-1][2]>l;s--)n[s]=n[s-1];n[s]=[o,u,l]}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var u,l,r=o[0],i=o[1],a=o[2],c=0;if(r.some((function(e){return 0!==n[e]}))){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(a)var s=a(t)}for(e&&e(o);c<r.length;c++)l=r[c],t.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return t.O(s)},o=self["webpackChunkshare"]=self["webpackChunkshare"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(315)}));o=t.O(o)})();
//# sourceMappingURL=app.4096396c.js.map