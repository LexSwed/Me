webpackJsonp([1],{"7ATU":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 90 90"}},[e("path",{attrs:{d:"M65.709 10.5c1.17 2.657 1.928 7.07.797 10.301 4.625 3.949 6.215 13.549 3.982 21.394 6.592.503 14.444-.242 19.512 1.781-4.738-.609-11.209-1.804-17.32-1.388-1.158.079-2.873-.044-2.789 1.585 7.074.555 14.104 1.16 19.912 2.973-5.761-.941-12.754-2.375-19.912-2.574-2.957 5.835-8.908 8.703-17.123 9.307.883 1.922 2.574 2.653 2.987 5.744.616 4.618-.964 11.381.595 14.459.748 1.475 1.967 1.514 2.789 2.775-2.012 2.381-7-.268-7.568-2.775-.973-4.295 1.482-10.953-1.192-13.865.188 4.685-1.108 11.264.199 15.449.515 1.646 2.002 2.281 1.593 3.766-9.352.949-5.443-12.104-6.972-19.81-1.411.101-.791 2.113-.796 2.972-.04 7.524 1.54 17.844-6.57 16.838-.237-1.582 1.088-2.119 1.593-3.563 1.479-4.233-.277-10.542.401-15.651-3.095 2.334.325 10.48-1.593 14.657-1.105 2.404-4.666 3.45-7.367 2.377.352-1.79 2.2-1.501 2.984-3.169 1.096-2.324.008-5.674.399-9.111-5.729 1.144-10.173-.166-12.348-3.764-.973-1.615-1.214-3.52-2.39-4.951-1.17-1.432-3.04-1.625-3.582-3.563 7.095-1.708 7.367 7.302 13.739 7.524 1.954.071 2.97-.563 4.778-.988.506-2.272 1.589-3.967 3.186-5.153-7.929-1.085-14.477-3.554-17.522-9.504-7.208.354-13.804 1.317-19.913 2.771 5.545-2.014 12.384-2.736 19.715-2.973-.432-2.596-4.219-1.882-6.57-1.782-4.37.192-9.87.735-13.343 1.387 5.034-1.795 12.098-1.571 18.918-1.585-2.086-6.54-1.363-16.929 3.186-20.798-1.289-3.249-.889-8.563.796-11.093 5.079.228 8.159 2.443 11.35 4.557 3.957-1.125 8.118-1.685 13.54-1.387 2.28.126 4.651 1.151 6.369.989 1.685-.158 3.542-2.049 5.178-2.771 2.131-.941 3.934-1.3 6.372-1.388z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/git.svg"}}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("/5sW"),o=s("Dd8w"),a=s.n(o),r=s("qfEq"),i=s.n(r),c=s("Nu13"),l=s.n(c),u=s("7ATU"),h=s.n(u),d=s("Smjr"),v=s.n(d),m={adjs:["Eager","Passionate","Clever","Keen","Smart","Resolute","Enthusiastic"],links:[{href:"https://github.com/LexSwed",svg:h.a},{href:"https://www.linkedin.com/in/lexswed/",svg:v.a},{href:"https://facebook.com/lexswed",svg:i.a},{href:"https://twitter.com/lexswed",svg:l.a}],data:function(){return{randomNumber:0}},props:["scroll","scrollHeight"],beforeMount:function(){this.$options.links=this.$options.links.map(function(t){return a()({},t,{delay:.5*Math.random()})})},computed:{adj:function(){return this.$options.adjs[this.randomNumber]},heading:function(){return"alexander swed".split("").reduce(function(t,e,s){var n=2*Math.random()+"s",o=3*Math.random()+"s";return t.push({l:e,style:{animationDelay:n,animationDuration:o}}),t},[])},path:function(){return window.location.pathname}},methods:{setRandomNumber:function(){this.randomNumber=Math.floor(Math.random()*this.$options.adjs.length)}},beforeDestroy:function(){clearInterval(this.interval)}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"welcome"},[s("h1",{staticClass:"heading"},t._l(t.heading,function(e,n){var o=e.l,a=e.style;return s("span",{key:n,style:a},[t._v(t._s(o))])})),t._v(" "),s("p",{staticClass:"desc"},[s("b",[t._v(t._s(t.adj))]),t._v(" software engineer")]),t._v(" "),s("div",{staticClass:"social"},t._l(t.$options.links,function(t,e){var n=t.href,o=t.svg,a=t.delay;return s("a",{key:e,staticClass:"link",style:"transition-delay: "+a+"s;",attrs:{href:n,rel:"noopener",target:"_blank"}},[s(o,{tag:"component"})],1)}))])},staticRenderFns:[]};var w=s("VU/8")(m,p,!1,function(t){s("u1SK")},null,null).exports,f={skills:[{name:"HTML / CSS",short:"Confident in layout creation and styling. Use HTML, CSS (SCSS actually) a lot on daily basis."},{name:"Node.js",short:"Have a not long experience in creating API using Node.js."},{name:"React",short:"One of the main tools. I have a good experience rewriting a project from jQuery to React. Do whatever He says to do."},{name:"Vue.js",short:"Main tool for creating front end applications. Good experience in implementing a project from zero to deployment."},{name:"Java",short:"I wrote some Java for some university courses. Don't ask me to write Java, it is here only for an even number."},{name:"Elixir",short:"We built some simple API for our university project, using it with Phoenix for quick setup of routers, controllers and model. Pretty nifty."},{name:"F#",short:"I have learnt some basics for the `Advanced programming` course. Love it the most from all FP languages I tried."},{name:"R",short:"I have used it a lot for the Data Mining course (not because I love it, just because we had a lot of homeworks)."}],cases:[{name:"Script Designer for call agents",deps:"vue, vuex, vue-router, axios, vue-slicksort, vue-dragscroll",videos:[{text:"Canvas drawings, animations and performant calculations with pure javascript",src:"/static/video/Canvas.webm"},{text:"A solid set of reusable and highly customizable components",src:"/static/video/Components.webm"},{text:"Fully featured Vuex usage",src:"/static/video/Components2.webm"},{text:"Service Workers for heavy computations",src:"/static/video/SW.webm"}]}],words:["Blessed saints","Budha wearing gravity shoes","Typed JavaScript","Holly Abramov's glassess","Colorful neckties of Saakashvili"],data:function(){var t=Math.floor(Math.random()*this.$options.words.length);return{active:0,wowWord:this.$options.words[t]}},methods:{radialGradient:function(t){window.getComputedStyle(t.currentTarget,null).getPropertyValue("--rad-grad");var e=t.layerX/t.currentTarget.offsetWidth*100;t.currentTarget.style.setProperty("--rad-grad",e+"%"),t.currentTarget.style.setProperty("--opacity",1)},cancelGradient:function(t){t.currentTarget.style.setProperty("--opacity",0)}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"show-more"},[s("header",[s("p",[t._v("\n                "+t._s(t.wowWord)+"! I am so glad "),s("span",{staticClass:"accent-color"},[t._v("you")]),t._v(" are here!"),s("br"),t._v("\n                My real name is "),s("span",{staticClass:"accent-color"},[t._v("Oleksandr Shvechykov")]),t._v(".\n                I am from "),s("span",{staticClass:"accent-color"},[t._v("Ukraine")]),t._v(" but currently I study in "),s("span",{staticClass:"accent-color"},[t._v("Tartu")]),t._v(".\n                I love front end a lot, but I was taught a bit "),s("span",{staticClass:"accent-color"},[t._v("more")]),t._v(".\n            ")])]),t._v(" "),s("div",[s("div",{staticClass:"s-card"},[s("header",[t._v("What you can ask me for:")]),t._v(" "),s("ul",{staticClass:"skills"},t._l(t.$options.skills,function(e){return s("li",{key:e.name},[s("div",{staticClass:"s-name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"s-short"},[t._v(t._s(e.short))])])}))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"s-card"},[s("header",[t._v("Showcase:")]),t._v(" "),s("ul",{staticClass:"cases"},t._l(t.$options.cases,function(e,n){return s("li",{key:n,on:{mousemove:t.radialGradient,mouseout:t.cancelGradient}},[s("div",[t._v(t._s(e.name))]),t._v(" "),s("small",[t._v("All dependecies: "+t._s(e.deps))])])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"s-card"},[s("header",[t._v("Education:")]),t._v(" "),s("ul",{staticClass:"edu"},[s("li",[s("div",[t._v("Applied Math "),s("span",{attrs:{title:"Dates when I knew this speciality"}},[t._v("(2012-2016)")])]),t._v(" "),s("a",{attrs:{href:"https://snu.edu.ua/en/",target:"_blank"}},[t._v("Volodymyr Dahl East Ukrainian National University")])]),t._v(" "),s("li",[s("div",[t._v("Software Engineering "),s("span",{attrs:{title:"Dates when I knew this speciality"}},[t._v("(2017-2019)")])]),t._v(" "),s("a",{attrs:{href:"https://www.ut.ee/en",target:"_blank"}},[t._v("University of Tartu")])])])])}]};var _=s("VU/8")(f,g,!1,function(t){s("X+MB")},null,null).exports,y={props:{showMore:{type:Boolean,default:!1}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"nav"},[s("transition",{attrs:{name:"nav",appear:"","appear-class":"nav-circle-appear"}},[s("div",{staticClass:"nav-inner",on:{click:function(e){t.$emit("update:showMore",!t.showMore)}}},[s("transition",{attrs:{name:"scale",mode:"out-in"}},[t.showMore?s("svg",{attrs:{height:"24",width:"24"}},[s("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}),t._v(" "),s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]):s("span",[t._v("More")])])],1)])],1)},staticRenderFns:[]};var b=s("VU/8")(y,x,!1,function(t){s("l2Jp")},null,null).exports,M={data:function(){return{color:"white",timeout:null,width:0,height:0,ctx:null}},mounted:function(){this.ctx=this.$el.getContext("2d"),this.updateColor(),this.updateSize(),window.addEventListener("resize",this.updateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.updateSize)},methods:{updateColor:function(){this.color=window.getComputedStyle(window.document.body,null).getPropertyValue("--accent")},updateSize:function(){var t=window.document.body,e=t.scrollWidth,s=t.scrollHeight;this.width=e,this.height=s,this.ctx.fillStyle="white",this.ctx.fillRect(0,0,e,s)},drawCircle:function(){this.ctx.fillStyle="green",this.ctx.beginPath(),this.ctx.arc(0,this.height-50,50,0,2*Math.PI),this.ctx.stroke()}},watch:{showMore:function(){clearTimeout(this.timeout),this.timeout=setTimeout(this.updateColor,3e3)}},props:{showMore:{type:Boolean,default:!1}}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{width:this.width,height:this.height}})},staticRenderFns:[]};var k={data:function(){return{showMore:!1}},mounted:function(){this.updateColor()},methods:{updateColor:function(){var t=window.getComputedStyle(this.$el,null),e=this.showMore?t.getPropertyValue("--show-more-accent"):t.getPropertyValue("--welcome-accent"),s=this.showMore?t.getPropertyValue("--show-more"):t.getPropertyValue("--welcome");document.querySelector("meta[name=theme-color]").setAttribute("content",e),document.documentElement.style.setProperty("--accent",e),document.documentElement.style.setProperty("--bg",s)}},computed:{currentView:function(){return this.showMore?"show-more":"welcome"}},watch:{showMore:function(t){var e=this;t.name;setTimeout(function(){e.updateColor()},325)}},components:{Navbar:b,Welcome:w,ShowMore:_,Background:s("VU/8")(M,C,!1,function(t){s("aloB")},null,null).exports}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"app"}},[s("navbar",{attrs:{showMore:t.showMore},on:{"update:showMore":function(e){t.showMore=e}}}),t._v(" "),s("div",{staticClass:"main"},[s("transition",{attrs:{mode:"out-in",name:t.currentView}},[t.showMore?s("show-more"):s("welcome")],1)],1),t._v(" "),s("background",{attrs:{showMore:t.showMore}})],1)},staticRenderFns:[]};var E=s("VU/8")(k,S,!1,function(t){s("eAer")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",render:function(t){return t(E)}})},Nu13:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 612 612"}},[e("path",{attrs:{d:"M612 116.258a250.746 250.746 0 0 1-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48A125.556 125.556 0 0 1 24.63 232.21v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253c24.661-17.595 46.001-39.7 62.791-64.863z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/t.svg"}}},Smjr:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 455.731 455.731"}},[e("path",{attrs:{d:"M0 0v455.73h455.73V0H0zm139.94 375.963c0 5.804-4.705 10.51-10.51 10.51H84.71c-5.804 0-10.51-4.706-10.51-10.51V185.18c0-5.804 4.706-10.51 10.51-10.51h44.72c5.805 0 10.51 4.706 10.51 10.51v190.783zM106.998 145.49c-20.308.412-38.155-16.55-38.15-38.187 0-20.985 17.28-38.105 38.407-38.088 20.873.017 38.088 17.257 38.043 38.234-.05 21.963-18.278 38.52-38.3 38.04zm279.886 236.663a4.362 4.362 0 0 1-4.364 4.362l-57.152-.014a4.361 4.361 0 0 1-4.362-4.362V264.33c0-10.182-4.126-19.406-10.802-26.078-6.764-6.768-16.15-10.916-26.5-10.8-20.28.23-36.455 17.07-36.455 37.35v117.322a4.363 4.363 0 0 1-4.365 4.362l-57.01-.014a4.362 4.362 0 0 1-4.362-4.362V179.034a4.363 4.363 0 0 1 4.363-4.363h55.795a4.364 4.364 0 0 1 4.364 4.364v23.418c.005-.01.225.018.6.075a63.404 63.404 0 0 1 3.52-5.658c11.627-16.69 30.96-27.607 52.84-27.607h11.47c39.997 0 72.42 32.423 72.42 72.42v140.47z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/linkedin.svg"}}},"X+MB":function(t,e){},aloB:function(t,e){},eAer:function(t,e){},l2Jp:function(t,e){},qfEq:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96.124 96.123"}},[e("path",{attrs:{d:"M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/f.svg"}}},u1SK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f61f4b77f91ce0dc5751.js.map