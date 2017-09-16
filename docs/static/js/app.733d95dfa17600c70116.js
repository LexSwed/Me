webpackJsonp([1],Array(29).concat([function(t,e,n){"use strict";var a=n(18),i=n(104),o=n(91),s=n.n(o),r=n(87),c=n.n(r),l=n(93),u=n.n(l);a.a.use(i.a),e.a=new i.a({routes:[{name:"main",path:"/",component:s.a},{name:"about",path:"/about",component:c.a},{name:"showcase",path:"/showcase",component:u.a}]})},function(t,e,n){function a(t){n(82)}var i=n(0)(n(31),n(103),a,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(44),i=n.n(a),o=n(45),s=n.n(o),r=n(92),c=n.n(r),l=n(94),u=n.n(l),h=n(41);e.default={data:function(){return{themes:h.a,activeTheme:"dark",style:document.documentElement.style}},methods:{updateTheme:function(){document.querySelector("meta[name=theme-color]").setAttribute("content",this.themes[this.activeTheme][this.$route.name])},colorApp:function(t,e){var n=this,a=t||this.activeTheme,o=this.themes[a];e&&e.classList.add("theme-active"),setTimeout(function(){[].concat(s()(n.style)).forEach(function(t){return n.style.removeProperty(t)}),i()(o).forEach(function(t){return n.style.setProperty("--"+t,o[t])})},100),setTimeout(function(){n.activeTheme=a,e&&e.classList.remove("theme-active")},500),window.localStorage.setItem("theme",a)}},computed:{routeName:function(){return this.$route.name},activeThemeIndex:function(){var t=this;return i()(this.themes).findIndex(function(e){return e===t.activeTheme})}},mounted:function(){var t=window.localStorage.getItem("theme");this.colorApp(t)},updated:function(){this.updateTheme()},components:{Navbar:c.a,Themer:u.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(90),i=n.n(a),o=n(89),s=n.n(o),r=n(88),c=n.n(r);e.default={name:"about",data:function(){return{isHired:!1,x:50,y:50}},components:{"about-who":i.a,"about-exp":s.a,"about-edu":c.a},mounted:function(){window.addEventListener("deviceorientation",this.mobileChangePerspective,{passive:!0})},beforeDestroy:function(){window.removeEventListener("deviceorientation",this.mobileChangePerspective)},methods:{changePerspective:function(t){this.x=t.clientX/8,this.y=t.clientY/4},mobileChangePerspective:function(t){var e=t.gamma,n=t.beta;e=4*e+50,n=7*n-340,this.x=e>150?150:e<-150?-150:e,this.y=n>150?150:n<-150?-150:n}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(39);e.default={data:function(){return{monthInPixels:20,exp:a.a,expHeight:300}},mounted:function(){var t=this.exp.length-1,e=this.getFromStart(this.exp[t].from),n=this.getFromStart();this.expHeight=e+n},methods:{getStyle:function(t,e){var n=this.getFromStart(t);return{top:n+"px",height:this.getFromStart(e)-n+"px"}},getFromStart:function(t){var e=void 0!==t?new Date(t):new Date;return this.monthInPixels*(e.getMonth()+e.getFullYear()-2017)},getMonth:function(t){return t?new Date(t).toDateString().slice(4,8):"*"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(40),i=n(86),o=n.n(i),s=n(85),r=n.n(s);e.default={data:function(){return{who:a.a,whoActive:0,imgMap:{"web-design":o.a,"front-end":r.a}}},methods:{setActive:function(t){this.whoActive=t},onScroll:function(t){var e=t.target.scrollWidth,n=t.target.scrollLeft;0===this.whoActive&&e-n<e/2?this.whoActive=1:1===this.whoActive&&e-n>=e/2&&(this.whoActive=0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(111),i=n.n(a),o=n(106),s=n.n(o),r=n(109),c=n.n(r),l=n(107),u=n.n(l),h=n(108),m=n.n(h);e.default={name:"c-main",components:{vk:i.a,f:s.a,t:c.a,git:u.a,linkedin:m.a},data:function(){return{adjs:["Eager","Passionate","Clever","Keen","Fired up","Smart","Turned on","Resolute","Enthusiastic"],randomNumber:0,links:[{href:"https://github.com/LexSwed",svg:u.a},{href:"https://www.linkedin.com/in/lexswed/",svg:m.a},{href:"https://vk.com/lexswed",svg:i.a},{href:"https://facebook.com/lexswed",svg:s.a},{href:"https://twitter.com/lexswed",svg:c.a}]}},props:["scroll","scrollHeight"],mounted:function(){this.interval=setInterval(this.setRandomNumber,2600)},computed:{adj:function(){return this.adjs[this.randomNumber]},heading:function(){return"alexander swed".split("").reduce(function(t,e,n){var a=2*Math.random()+"s",i=3*Math.random()+"s";return t.push({l:e,style:{animationDelay:a,animationDuration:i}}),t},[])}},methods:{setRandomNumber:function(){this.randomNumber=Math.floor(Math.random()*this.adjs.length)}},beforeDestroy:function(){clearInterval(this.interval)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navbar",data:function(){return{links:[{to:"/",text:"Home",name:"main"},{to:"/about",text:"About",name:"about"},{to:"/showcase",text:"Showcase",name:"showcase"}],pointerLeft:0,pointerWidth:0}},watch:{$route:function(t,e){t!==e&&this.setPointerStyle()}},mounted:function(){this.setPointerStyle(),window.addEventListener("resize",this.setPointerStyle)},beforeDestroy:function(){window.removeEventListener("resize",this.setPointerStyle)},methods:{setPointerStyle:function(){if(!this.$route.name)return null;var t=this.$refs[this.$route.name][0].$el,e=t.getBoundingClientRect();this.pointerLeft=t.offsetLeft,this.pointerWidth=e.width}},computed:{getPointerStyle:function(){return{transform:"translateX("+this.pointerLeft+"px) scaleX("+this.pointerWidth/10+")"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(110),i=n.n(a),o=n(83),s=n.n(o);e.default={data:function(){return{tumbleweed:i.a,hz:s.a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{scale:1}},computed:{svgStyle:function(){return{transform:"scale("+(this.scale>1?this.scale:1)+")",opacity:this.scale>9?0:1,transition:this.scale>9?"transform 1s linear, opacity 0.8s linear":"none"}},circleStyle:function(){this.theme.main;return 1!==this.scale?{fill:this.theme.main,animation:"none",r:"50%"}:{fill:this.theme.main}}},methods:{onTouchStart:function(t){this.touchStart={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY}},onTouchMove:function(t){var e={x:Math.abs(t.targetTouches[0].clientX-this.touchStart.x),y:Math.abs(t.targetTouches[0].clientY-this.touchStart.y)},n=e.x>e.y?.05*e.x:.05*e.y;n>9?this.$emit("paint",this.name,t.currentTarget):this.scale=n},onTouchEnd:function(t){this.scale<9&&(this.scale=1)}},props:["theme","name"]}},function(t,e,n){"use strict";e.a=[{name:"TimeToSite",resp:"Writing simple websites, visit cards, landings from psd templates",from:"01.03.2017",to:"02.10.2017"},{name:"Smiddle",resp:"Developing and maintaining complex single page application using ReactJS",from:"02.14.2017",to:"07.31.2017"}]},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=[{title:"npm",url:"https://www.npmjs.com/"},{title:"Pug",url:"https://pugjs.org"},{title:"SCSS",url:"http://sass-lang.com/"},{title:"Gulp",url:"http://gulpjs.com/"},{title:"jQuery",url:'"https://jquery.com/'},{title:"Bootstrap",url:"http://getbootstrap.com/"},{title:"Materialize CSS",url:"http://materializecss.com/"}].map(function(t){var e=t.title;return'<a href="'+t.url+'" target="_blank" rel="noopener">'+e+"</a>"}).join(", "),i=[{title:"Web designer",short:"Responsible for creating awesome web pages based on drawn design templates",content:"I wrote a lot of HTML, CSS and jQuery for web sites, some of which were designed by myself.\n                While creating design for a new feature, I always keep in mind all the sides:\n                how it could be implemented it, how user will iteract with it and general impression.\n                To implement all ideas I have, I've been using different technologies, includes "+a,img:"web-design"},{title:"Front-end developer",short:"I am a JavaScript developer... as yet",content:"I started my way from learning Maths and Software Engineering basics in my University.\n        With time, JS evolved in the most popular programming language in the world and I was drawn into it's world.\n        I am proud of being a part of the world's largest community in the world, where people generete such a beautiful\n        ideas and things that made our Web to look and feel such amazing. I always follow the latest trends and tooling\n        and for now this is only the beggining...",img:"front-end"}]},function(t,e,n){"use strict";e.a={fluent:{main:"#ebefee",about:"#ebefee",showcase:"#ebefee",accent:"#E81123","nav-bg":"white","nav-link-hover-bg":"rgb(214, 219, 218)","text-color":"#0c0c0c","who-fitler":"blur(2px) invert(80%)","who-inner-bg":"rgba(214, 219, 218, 0.6)","about-img-shadow":"0 6px 27px rgba(42,44,58,.35)","about-img-filter":"brightness(130%) blur(2px)","block-shadow":"0 11px 37px rgba(42,44,58,.15), 4px 12px 42px rgba(129,165,238,.1)"},light:{main:"#FFFCFF",about:"rgb(224, 223, 213)",showcase:"#fff2cf",accent:"#283593","text-color":"#2D2D2A","about-img-shadow":"var(--block-shadow)","about-img-filter":"brightness(200%) opacity(0.6)","who-fitler":"brightness(80%) blur(2px) invert(85%) hue-rotate(50deg)","who-inner-bg":"rgba(224, 223, 213, 0.5)","block-shadow":"0 1px 3px rgba(0,0,0,0.4)","b-r":"8px"},dark:{main:"rgb(12, 12, 12)",about:"#031628",showcase:"#311100",light:"#FFFCFF","text-color":"#FFFCFF","block-shadow":"0 1px 3px rgba(0, 0, 0, 0.4)","about-img-shadow":"var(--block-shadow)","about-img-filter":"brightness(50%)","who-fitler":"brightness(25%) blur(2px)","who-inner-bg":"rgba(255,255,255,0.1)","b-r":"5px",accent:"#EABA6B",dark:"rgb(12, 12, 12)",warning:"#CF5C36",filter:"grayscale(100%)"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),i=n(30),o=n.n(i),s=n(29);a.a.config.productionTip=!1,new a.a({el:"#root",router:s.a,template:"<App/>",components:{App:o.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"40510a37fc385044a13ba1bcb0730443.webm"},function(t,e,n){t.exports=n.p+"static/img/1.208f03b.jpg"},function(t,e,n){t.exports=n.p+"static/img/frontend.9bccf7a.png"},function(t,e,n){t.exports=n.p+"static/img/html.a9e805f.png"},function(t,e,n){function a(t){n(74)}var i=n(0)(n(32),n(95),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(77)}var i=n(0)(null,n(98),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(78)}var i=n(0)(n(33),n(99),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(75)}var i=n(0)(n(34),n(96),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(76)}var i=n(0)(n(35),n(97),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(80)}var i=n(0)(n(36),n(101),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(79)}var i=n(0)(n(37),n(100),a,null,null);t.exports=i.exports},function(t,e,n){function a(t){n(81)}var i=n(0)(n(38),n(102),a,null,null);t.exports=i.exports},function(t,e,n){t.exports={render:function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"about"},[a("div",{staticClass:"about-main",style:{perspectiveOrigin:e.x+"% "+e.y+"%"},on:{mousemove:e.changePerspective,mouseleave:function(){t.x=50,t.y=50}}},[e._m(0),e._v(" "),e._m(1)]),e._v(" "),a("about-who"),e._v(" "),a("about-exp"),e._v(" "),a("about-edu")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-img"},[a("img",{attrs:{src:n(84),rel:"preload"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-info"},[n("h2",[t._v("Oleksandr Shvechykov")]),t._v(" "),n("h5",[t._v("Front-end Developer, Web UI/UX Designer")]),t._v(" "),n("p",[t._v("@lexswed")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-who"},[n("img",{class:{"who-img-active":0===t.whoActive},attrs:{src:t.imgMap["web-design"]}}),t._v(" "),n("img",{class:{"who-img-active":1===t.whoActive},attrs:{src:t.imgMap["front-end"]}}),t._v(" "),n("h2",[t._v("Who am I?")]),t._v(" "),n("div",{staticClass:"who-container",on:{scroll:t.onScroll}},[n("div",{staticClass:"who-back"},t._l(t.who,function(e,a){var i=e.title;return n("div",{staticClass:"who-block"},[n("h3",{class:{"back-active":t.whoActive!==a},on:{click:function(e){t.whoActive=a}}},[t._v(t._s(i))])])})),t._v(" "),n("div",{class:"who-inner who-inner-"+t.whoActive},t._l(t.who,function(e,a){var i=e.title,o=e.short,s=e.content;return n("div",{key:a,staticClass:"who-block"},[n("h3",[t._v(t._s(i))]),t._v(" "),n("h4",[t._v(t._s(o))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(s)}})])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-main"},[n("h1",{staticClass:"heading"},t._l(t.heading,function(e){var a=e.l,i=e.style;return n("span",{key:a,style:i},[t._v(t._s(a))])})),t._v(" "),n("p",{staticClass:"desc"},[n("b",[t._v(t._s(t.adj))]),t._v(" frontend developer")]),t._v(" "),n("div",{staticClass:"social"},t._l(t.links,function(t,e){var a=t.href,i=t.svg;return n("a",{key:e,staticClass:"link",attrs:{href:a,rel:"noopener",target:"_blank"}},[n(i,{tag:"component"})],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-block"},[n("h2",[t._v("Education")]),t._v(" "),n("div",{staticClass:"about-edu"},[n("div",{staticClass:"edu-dates"},[n("span",[t._v("2012")]),t._v(" "),n("span",[t._v("-")]),t._v(" "),n("span",[t._v("2014")])]),t._v(" "),n("div",{staticClass:"edu-main"},[n("h3",[t._v("Bachelor degree in applied math")]),t._v(" "),n("p",[t._v("Volodymyr Dahl East Ukrainian National University")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-block"},[n("h2",[t._v("Experience")]),t._v(" "),n("ul",{ref:"timeline",staticClass:"exp-timeline",style:{height:t.expHeight+"px"}},t._l(t.exp,function(e){var a=e.name,i=e.resp,o=e.from,s=e.to;return n("li",{staticClass:"exp-job",style:t.getStyle(o,s)},[n("div",{staticClass:"exp-job-time"},[t._v(t._s(t.getMonth(o))+" - "+t._s(t.getMonth(s)))]),t._v(" "),n("div",{staticClass:"exp-job-main"},[n("h4",[n("b",[t._v("@"+t._s(a))]),t._v(t._s(void 0===s?" (current)":"")),n("span",[t._v(" - "+t._s(i))])])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"showcase"},[n("div",{staticClass:"card-empty"},[n("video",{attrs:{autoplay:"",loop:""}},[n("source",{attrs:{src:t.hz,type:"video/webm"}})]),t._v(" "),n("h2",[t._v("Nothing to show yet")]),t._v(" "),t._m(0)]),t._v(" "),n(t.tumbleweed,{tag:"component",staticClass:"tumbleweed"})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-promise"},[t._v("But you can still check my\n            "),n("a",{attrs:{href:"https://github.com/LexSwed",target:"_blank"}},[t._v("GitHub account\n            ")]),t._v(" to see some old code or even\n            "),n("a",{attrs:{href:"https://github.com/LexSwed/Me/blob/master/src/components/Showcase.vue",target:"_blank"}},[t._v("this page")]),t._v(".\n        ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("transition",{attrs:{name:"nav",appear:"","appear-class":"nav-appear"}},[n("ul",[t._l(this.links,function(e,a){var i=e.to,o=e.text,s=e.name;return n("router-link",{key:a,ref:s,refInFor:!0,staticClass:"nav-link",style:{animationDelay:.3*a+2+"s"},attrs:{tag:"li",to:i}},[n("a",[t._v(t._s(o))])])}),t._v(" "),n("span",{ref:"pointer",staticClass:"pointer",style:t.getPointerStyle})],2)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"themer",on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,click:function(e){t.$emit("paint",t.name,e.currentTarget)}}},[n("svg",{staticClass:"themer-circle",style:t.svgStyle,attrs:{viewBox:"0 0 100 100"}},[n("circle",{style:t.circleStyle}),t._v(" "),n("circle",{style:t.circleStyle})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{style:{backgroundColor:"var(--"+t.routeName+")"},attrs:{id:"app"}},[t._l(t.themes,function(e,a,i){return t.activeThemeIndex!==i?n("themer",{key:a,attrs:{theme:e,name:a},on:{paint:t.colorApp}}):t._e()}),t._v(" "),n("navbar"),t._v(" "),n("div",{staticClass:"main"},[n("transition",{attrs:{mode:"out-in",name:t.routeName}},[n("router-view")],1)],1)],2)},staticRenderFns:[]}},,,function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123"><path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z"/></svg>'}},function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M65.709 10.5c1.17 2.657 1.928 7.07.797 10.301 4.625 3.949 6.215 13.549 3.982 21.394 6.592.503 14.444-.242 19.512 1.781-4.738-.609-11.209-1.804-17.32-1.388-1.158.079-2.873-.044-2.789 1.585 7.074.555 14.104 1.16 19.912 2.973-5.761-.941-12.754-2.375-19.912-2.574-2.957 5.835-8.908 8.703-17.123 9.307.883 1.922 2.574 2.653 2.987 5.744.616 4.618-.964 11.381.595 14.459.748 1.475 1.967 1.514 2.789 2.775-2.012 2.381-7-.268-7.568-2.775-.973-4.295 1.482-10.953-1.192-13.865.188 4.685-1.108 11.264.199 15.449.515 1.646 2.002 2.281 1.593 3.766-9.352.949-5.443-12.104-6.972-19.81-1.411.101-.791 2.113-.796 2.972-.04 7.524 1.54 17.844-6.57 16.838-.237-1.582 1.088-2.119 1.593-3.563 1.479-4.233-.277-10.542.401-15.651-3.095 2.334.325 10.48-1.593 14.657-1.105 2.404-4.666 3.45-7.367 2.377.352-1.79 2.2-1.501 2.984-3.169 1.096-2.324.008-5.674.399-9.111-5.729 1.144-10.173-.166-12.348-3.764-.973-1.615-1.214-3.52-2.39-4.951-1.17-1.432-3.04-1.625-3.582-3.563 7.095-1.708 7.367 7.302 13.739 7.524 1.954.071 2.97-.563 4.778-.988.506-2.272 1.589-3.967 3.186-5.153-7.929-1.085-14.477-3.554-17.522-9.504-7.208.354-13.804 1.317-19.913 2.771 5.545-2.014 12.384-2.736 19.715-2.973-.432-2.596-4.219-1.882-6.57-1.782-4.37.192-9.87.735-13.343 1.387 5.034-1.795 12.098-1.571 18.918-1.585-2.086-6.54-1.363-16.929 3.186-20.798-1.289-3.249-.889-8.563.796-11.093 5.079.228 8.159 2.443 11.35 4.557 3.957-1.125 8.118-1.685 13.54-1.387 2.28.126 4.651 1.151 6.369.989 1.685-.158 3.542-2.049 5.178-2.771 2.131-.941 3.934-1.3 6.372-1.388z"/></svg>'}},function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.731 455.731"><path d="M0 0v455.73h455.73V0H0zm139.94 375.963c0 5.804-4.705 10.51-10.51 10.51H84.71c-5.804 0-10.51-4.706-10.51-10.51V185.18c0-5.804 4.706-10.51 10.51-10.51h44.72c5.805 0 10.51 4.706 10.51 10.51v190.783zM106.998 145.49c-20.308.412-38.155-16.55-38.15-38.187 0-20.985 17.28-38.105 38.407-38.088 20.873.017 38.088 17.257 38.043 38.234-.05 21.963-18.278 38.52-38.3 38.04zm279.886 236.663a4.362 4.362 0 0 1-4.364 4.362l-57.152-.014a4.361 4.361 0 0 1-4.362-4.362V264.33c0-10.182-4.126-19.406-10.802-26.078-6.764-6.768-16.15-10.916-26.5-10.8-20.28.23-36.455 17.07-36.455 37.35v117.322a4.363 4.363 0 0 1-4.365 4.362l-57.01-.014a4.362 4.362 0 0 1-4.362-4.362V179.034a4.363 4.363 0 0 1 4.363-4.363h55.795a4.364 4.364 0 0 1 4.364 4.364v23.418c.005-.01.225.018.6.075a63.404 63.404 0 0 1 3.52-5.658c11.627-16.69 30.96-27.607 52.84-27.607h11.47c39.997 0 72.42 32.423 72.42 72.42v140.47z"/></svg>'}},function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 116.258a250.746 250.746 0 0 1-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48A125.556 125.556 0 0 1 24.63 232.21v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253c24.661-17.595 46.001-39.7 62.791-64.863z"/></svg>'}},function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" width="864" height="864" viewBox="0 0 864 864"><path fill-rule="evenodd" clip-rule="evenodd" d="M135.708 444.458c8.388-35.936 12.715-73.495 26.265-107.365 14.63-36.572 14.588-70.06-.094-105.14-22.188 24.955-18.152 64.41-42.342 88.7-2.36-.824-4.722-1.647-7.084-2.47 1.56-9.194 1.935-18.797 4.936-27.493 5.48-15.877 12.944-31.063 18.617-46.884 1.48-4.12.055-9.697-1.186-14.294-2.75-10.208-6.23-20.218-9.414-30.31 1.54-.53 3.078-1.062 4.618-1.593l11.146 27.244c10.524-9.235 16.988-19.268 14.82-34.083-1.252-8.556-2.045-17.686-.3-25.98 1.008-4.794 7.472-8.438 11.48-12.6 2.077 4.887 4.662 9.637 6.037 14.712.81 2.984-.304 6.49-.924 14.662 6.443-8.462 9.312-14.277 13.958-17.646 3.412-2.477 9.15-1.75 13.85-2.45-.25 4.133.797 8.97-.994 12.265-5.242 9.65-12.22 18.37-17.302 28.09-2.79 5.337-3.135 11.955-1.818 19.52 6.747-25.735 24.805-38.153 47.06-46.418-19.17 21.787-46.64 38.99-38.1 77.07 3.664-2.41 4.536-2.682 4.58-3.05 4.288-36.45 33.766-45.068 61.406-56.01 25.352-10.036 25.092-10.273 14.752-34.646-3.79-8.933-6.477-18.334-9.667-27.52 1.362-1.796 2.725-3.593 4.085-5.39 6.204 3.29 14.34 5.14 18.127 10.228 4.86 6.53 6.222 15.662 9.522 24.875 24.212-29.992 47.072-58.31 72.34-89.608 17.234 12.26 8.567 37.42 21.274 52.466 4.67-.942 9.542-1.927 14.413-2.912-24.26 15.357-9.365 32.462-2.758 48.534 4.985 12.125 11.283 23.71 16.998 35.536l5.41-.25c1.746-18.625 3.065-37.303 5.355-55.862 2.432-19.7 5.686-39.303 8.853-58.904.413-2.56 2.455-4.854 3.742-7.27 4.7 2.53 9.4 5.06 15.826 8.524 15.14-10.328 24.675-35.478 52.756-28.242-34.274 3.95-42.285 32.645-56.684 55.612 21.637-5.657 37.46-25.788 63.384-22.97-17.32 9.563-33.262 17.187-47.93 26.76-18.402 12.015-24.276 32.018-27.655 52.197-3.512 20.96-5.173 42.23-8.095 67.225l26.806-15.545 3.965 3.334L438 252.244l17.103 33.876c-1.768 1.352-3.533 2.704-5.298 4.056-17.49-.502-19.258-21.754-32.346-28.064-16.283 21.122 2.61 44.17 50.48 58.483-2.36-36.288-3.8-71.48-7.374-106.45-1.267-12.395 2.148-17.01 12.17-24.332 18.43-13.46 34.103-30.89 50.042-47.508 18.948-19.756 33.677-44.086 66.822-56.48-3.602 8.834-4.41 15.39-8.09 19.107-23.737 23.976-47.484 48.02-72.572 70.547-9.65 8.667-7.41 17.717-5.665 26.68 2.486 12.78 7.285 25.107 12.16 41.115 8.844-18.61 18.423-34.06 23.398-50.87 3.392-11.463 19.154-20.74 8.81-36.04-.375-.557 7.48-9.15 11.993-9.67 2.982-.342 8.786 6.546 10.027 11.097 10.738 39.394 20.715 78.996 30.965 118.522.974 3.753 2.27 7.422 3.414 11.13l5.692 1.25c14.66-43.793 31.403-87.03 43.283-131.566 8.438-31.64.527-45.925-23.16-64.48 1.02-1.26 2.043-2.523 3.064-3.787 8.782 7.112 17.566 14.222 26.16 21.18l14.296-6.246c.408 5.58 1.295 11.174 1.105 16.733-.255 7.475-1.344 14.92-2.055 22.192 29.045 10.985 14.684 41.007 27.728 60.764 15.107-2.456 30.943-5.503 46.918-7.327 4.52-.516 9.446 2.546 14.186 3.968-3.746 3.698-6.93 9.51-11.346 10.685-11.755 3.132-23.98 5.004-36.133 5.992-12.687 1.032-15.335 10.314-8.13 15.79 29.345 22.306 21.6 54.71 23.77 83.44 1.853 24.507-2.855 49.51-5.086 80.108 14.352-21.77 27.038-39.6 38.145-58.36 7.657-12.936 12.646-27.427 19.854-40.665 2.257-4.148 7.853-6.48 14.154-7.87-8.41 47.188-41.563 80.843-65.37 124.26 18.635-2.8 34.847-7.74 50.743-6.872 13.884.76 31.516-9.164 44.09 10.396-29.356-5.63-35.342 13.336-44.456 33.083-13.326 28.874-31.05 55.718-46.782 83.22 10.504 3.666 28.124-2.393 39.125-14.328 9.005-9.77 19.167-13.286 36.066-5.716-15.89 9.315-28.385 16.643-40.882 23.97.202 1.494.4 2.99.604 4.487 19.336 1.98 38.705 3.71 57.987 6.127 4.542.568 8.796 3.452 13.182 5.27-4.006 3.47-7.5 8.42-12.15 10.026-5.84 2.017-12.663 1.943-19.004 1.62-15.458-.786-26.78 2.74-24.46 24.54-11.432-11.777-1.897-35.575-25.02-33.968-9.006.626-17.944 2.234-26.913 3.395l.072 5.227c3.774 3.092 7.55 6.185 12.588 10.315l-27.603 6.688c8.086 34.86 16.198 69.824 24.31 104.79l-8.07 2.895-17.548-43.128-19.454 25.9c-1.08-.522-2.16-1.044-3.24-1.564 4.05-8.937 6.75-18.867 12.44-26.598 10.698-14.533 5.64-28.73.566-42.495-1.62-4.4-9.628-9.274-14.312-8.902-4.404.353-10.66 6.73-11.89 11.536-2.56 9.995-2.123 20.73-3.326 31.11-.818 7.077-2.33 14.074-3.533 21.107-1.572-.154-3.145-.307-4.717-.458v-47.45c-40.32 23.238-77.877 47.177-117.474 67.048-38.402 19.274-78.9 34.37-118.48 51.302.55 2.405 1.1 4.812 1.648 7.216 34.522-3.833 69.236-6.45 103.515-11.844 34.357-5.403 68.28-13.58 104.195-20.91l2.985 13.983c-59.79 17.98-112.217 57.066-177.306 47.47.163 29.267-11.11 41.77-33.038 39.406V778.58c-26.932-10.49-56.7-18.105-82.05-33.162-22.016-13.08-35.76-3.168-53.643 4.933-20.71 9.38-41.844 20.23-70.386 16.634 12.264-22.97 38.088-9.39 49.02-22.677-9.163-1.022-19.426-2.17-29.69-3.314.068-1.953.14-3.908.208-5.862l37.47-6.144c.443-2.007.89-4.017 1.333-6.022-23.684-11.718-47.368-23.435-74.976-37.092l13.485-3.96c-23.486-19.476-46.238-39.187-70.066-57.493-5.782-4.442-15.022-4.873-22.837-6.02-6.378-.938-13.002-.19-19.517-.19l-.552-5.303 15.976-5.388c-.07-1.244.308-2.92-.254-3.343C90.384 575.165 68.558 532.76 41.76 494.3c-5.62-8.067-12.655-15.438-16.645-24.218-1.877-4.127 1.926-10.833 3.153-16.37 4.045 2.816 9.154 4.836 11.96 8.58 14.947 19.95 30.575 39.557 43.63 60.723 27.55 44.668 67.292 76.107 108.633 106.65 25.122 18.558 47.93 40.242 71.832 60.46 3.808 3.222 7.896 6.11 11.763 9.085 11.004-11.37 5.48-19.41-.45-29.158-16.808-27.61-32.292-56.022-51.05-88.953L219 609.118c8.97 12.676 25.26 35.697 41.552 58.716l-3.128 3.447c-3.876-2.463-8.343-4.325-11.534-7.48-24.786-24.51-51.688-47.408-73.113-74.603-14.195-18.02-20.358-42.342-30.25-63.778-16.618-36.006-24.403-74.372-32.613-112.905-4.348-20.41-16.32-39.106-23.593-59.034-2.398-6.576-3.755-19.1-.602-21.12 10.538-6.752 12.717 4.784 16.417 11.48 1.625 2.943 2.782 6.146 4.272 9.5 8.164-7.176 15.6-13.712 23.035-20.25l3.38 3.992c-4.85 4.594-11.315 8.373-14.15 13.985-3.74 7.404-7.777 16.938-6.152 24.342 4.81 21.91 12.268 43.243 18.94 64.725.503 1.62 2.985 2.624 4.498 3.98 2.704 10.415 5.457 20.764 8.21 31.113 15.65-37.77 15.65-37.77 27.844-34.064-20.666 22.39-23.2 56.98-6.087 78.34 5.768-16.042 11.227-32.483 17.553-48.582 19.287-49.082 30.182-98.342 4.8-150.273-2.587 4-5.733 7.004-6.647 10.58-6.446 25.193-11.84 50.67-18.83 75.705-3.228 11.567-8.64 22.698-14.467 33.25-1.583 2.876-8.276 2.926-12.625 4.273zm275.976-15.603c-9.887 3.028-20.852 6.388-31.82 9.75l-4.467-7.603c6.6-5.614 12.81-11.786 19.87-16.747 33.57-23.598 41.832-33.94 20.214-67.873-21.71 15.653-50.26 86.746-66.795 142.316 13.26-4.713 24.513-8.714 35.765-12.715 1.007 1.246 2.012 2.493 3.017 3.74-5.368 3.947-10.25 9.004-16.207 11.608-11.812 5.162-28.875 4.36-32.093 19.847-7.398 35.614-22.005 71.398-2.36 108.51l23.482-33.127c1.41.662 2.817 1.326 4.228 1.99-13.922 25.237-38.753 48.4-15.096 82.966 4.363-17.214 9.186-32.438 11.975-48.026 5.833-32.598 24.62-66.87-10.502-95.4-2.157-1.75.116-8.955.328-13.62 4.666.397 9.48.23 13.944 1.395 2.87.75 5.23 3.456 8.974 6.104l37.544-93.115zm113.412 123.583c39.132-9.128 31.617-9.36 32.376-38.953.55-21.51 5.663-28.313 30.14-33.2-29.825 12.834-22.855 36.928-22.254 59.578 21.19-2.878 36.72-23.26 37.07-49.376.544-40.736.367-81.487.043-122.227-.05-6.308-2.512-12.6-3.86-18.897l-5.094-.45c-8.38 22.337-16.758 44.676-25.433 67.805h11.73l-38.966 49.017 21.035-2.183 3.36 3.72c-3.326 3.696-6.053 9.637-10.08 10.712-22.256 5.94-33.884 22.202-40.698 36.5 4.298 15.336 7.463 26.636 10.632 37.954zm-63.124-59.856c1.196 1.146 2.395 2.293 3.593 3.438l77.75-92.898c-3.97 32.18-28.574 52.19-43.822 77.896 15.293-1.314 23.22-8.118 27.71-22.15 5.468-17.09 13.636-33.394 21.497-49.62 12.404-25.6 26.012-50.626 37.91-76.45 2.197-4.773.794-13.828-2.56-18.013-8.017-10.008-17.83-18.704-27.59-27.155-9.612-8.325-20.05-15.696-32.77-25.53-8.795 26.768.337 48.33 4.84 70.704 6.16-8.085 9.973-17.092 15.496-24.887 2.27-3.203 8.226-3.792 12.505-5.572.92 3.924 3.16 8.106 2.46 11.714-1.163 5.967-4.225 11.566-6.42 17.156l13.547 5.62-45.547 35.8a3647.27 3647.27 0 0 0 2.845 3.726c10.446 1.166 20.89 2.33 31.334 3.493-58.523 12.098-73.43 31.78-92.778 112.727zm115.81 64.292c-29.56 13.556-60.884 14.47-79.77 39.018-18.895 24.565-41.975 33.644-72.39 29.568-7.817-1.048-19.823 3.08-24.472 9.054-18.69 24.022-35.25 49.703-52.555 74.713 35.86-5.236 52.117-29.544 62.548-61.05l1.85 17.657c1.4 1.126 2.8 2.252 4.2 3.38 3.584-5.196 7.033-10.49 10.775-15.57 12.666-17.185 32.29-16.8 48.927-13.6 11.974 2.303 17.853.527 25.104-7.376 5.395-5.877 11.665-11.558 18.64-15.27 24.27-12.93 42.182-31.69 57.143-60.524zm87.807-160.44c12.848-29.09 22.738-56.965 13.23-88.348l8.007 12.247c5.808-13.784 5.808-13.784-15.778-65.477-37.472 1.64-48.268 30.108-52.666 58.87-1.777 11.616 12.437 25.678 19.373 38.627l5.61-1.37c1.402-7.67 5.162-15.885 3.558-22.866-1.67-7.262-8.52-13.332-14.927-22.544l20.106 9.213c4.324-10.897 8.622-21.732 12.922-32.566l5.023.875c-9.987 37.063-31.314 73.944-4.46 113.338zm60.885 62.1l4.575 2.047c-5.113 11.3-9.625 22.923-15.488 33.818-7.494 13.93-11.258 27.176-.733 39.993 3.442-6.615 6.172-13.023 9.916-18.77 5.04-7.737 11.506-14.58 16.22-22.484 11.262-18.893 21.922-38.147 32.66-57.348 1.754-3.134 2.68-6.73 3.988-10.115-3.657-1.07-7.558-3.555-10.932-2.976-19.397 3.33-38.9 6.542-57.82 11.777-4.776 1.32-8.306 9.524-11.004 15.23-2.15 4.544-.545 11.382-3.404 14.98-11.978 15.072-3.324 26.755 6.188 42.71 9.476-17.924 17.655-33.39 25.833-48.86zM296.672 602.66l7.313.693c1.432-6.434 3.61-12.803 4.168-19.312 2.936-34.218 9.835-67.35 23.467-99.108 3.512-8.185 5.34-17.926 4.876-26.792-.75-14.4-3.837-28.7-6.342-42.97-.885-5.038-2.954-9.867-4.75-15.66-36.418 26.512-40.636 43.713-27.03 100.867 21.387-18.978 11.86-41.602 6.635-64.375 13.162 11.358 18.238 25.757 13.792 41.988-3.775 13.795-9.962 26.983-15.662 40.19-12.033 27.876-5.76 56.277-6.468 84.48zm33.323-252.94c1.822.748 3.642 1.497 5.462 2.243 4.783-5.633 9.47-11.353 14.366-16.887 42.2-47.71 44.01-61.47 13.81-114.55-3.96-6.954-9.703-13.025-15.34-18.805-1.523-1.563-5.682-.56-8.63-.734.438 2.377.624 4.833 1.35 7.118 6.486 20.374 13.067 40.718 19.873 61.855-6.464 3.27-14.585 6.472-21.645 11.243-5.506 3.72-13.733 9.382-13.75 14.204-.052 18.1 2.765 36.21 4.505 54.314zm45.896 282.346c19.217-27.396 38.17-54.355 57.035-81.376 2.587-3.705 5.932-7.433 6.912-11.62 5.34-22.853 10.05-45.854 14.518-66.67-58.444 35.807-72.636 95.86-78.464 159.666zM209.074 328.2c10.242-24.82 18.17-44.518 26.535-64.03 2.697-6.29 5.206-15.7 10.083-17.504 25.652-9.48 21.59-35.223 31.814-53.907-20.213 6.926-44.713 11.31-55.74 25.886-13.538 17.895-18.013 43.926-22.052 67.194-2.076 11.962 5.304 25.566 9.36 42.36zm48.576 116.57c1.9.248 3.798.494 5.697.74 14.48-11.972 20.844-26.946 18.724-45.87-.683-6.1.866-12.79 2.87-18.708 1.01-2.986 5.32-4.855 8.136-7.23 2.157 2.864 5.568 5.48 6.187 8.644 1.034 5.285.282 10.916.282 16.402 9.702-6.48 21.423-14.923 21.24-23.1-.49-22-6.06-43.886-10.382-70.57l-50.196 68.152c14.922 7.262 14.397 8.048 10.19 21.4-5.173 16.422-8.578 33.4-12.748 50.14zm353.84 71.607c.795.508 1.592 1.015 2.388 1.522 10.3-22.986 20.772-45.897 30.794-69.004 3.156-7.275 9.253-16.89 6.883-22.325-10.212-23.41-23.072-45.666-34.722-67.873-1.814 53.59-3.578 105.634-5.342 157.68zm-4.462 100.72c-.468-2.223-.938-4.444-1.408-6.666-19.942-5.795-38.218 3.012-54.952 11.597-32.375 16.604-63.102 36.396-95.163 53.653-30.938 16.654-62.7 31.78-94.1 47.58.79 1.682 1.584 3.36 2.377 5.04l243.246-111.206zm-99.9-111.333c-1.046-2.59-2.092-5.18-3.136-7.77-12.732 5.59-30.612 7.713-37.16 17.456-15.436 22.96-25.468 49.552-39.075 77.536 24.617-8.688 46.23-16.91 68.238-23.886 16.448-5.213 21.15-15.954 18.325-36.16-8.187 4.032-14.812 6.842-20.965 10.454-6.47 3.8-12.492 8.368-18.71 12.602l-2.45-3.835 8.92-30.41 26.013-15.988zm-133.942-122c1.128.59 2.258 1.18 3.386 1.772 8.928-13.423 16.46-28.105 27.145-39.944 12.796-14.18 5.553-24.983-.643-38.77-17.116 22.167-31.498 43.807-48.964 62.572-17.528 18.83-21.835 40.706-6.064 66.74 8.17-23.335 15.664-44.73 23.156-66.128l4.165 1.417c-.727 4.115-1.455 8.228-2.18 12.342zM208.422 560.68c1.71.232 3.422.464 5.134.694 1.32-4.067 2.704-8.116 3.946-12.208 3.68-12.106 5.03-25.625 11.423-36.06 13.68-22.33 4.473-46.74 9.094-69.723.654-3.256-5.135-10.887-8.264-11.073-4.238-.253-10.63 3.717-12.81 7.684-4.087 7.438-7.918 16.113-8.153 24.38-.913 32.08-.37 64.2-.37 96.306zm24.46-257.218c24.85 17.362 29.525.646 33.548-19.917 4.832 12.534 7.364 19.112 11.695 30.35 9.936-14.032 23.082-24.348 23.595-35.255.768-16.39-3.873-34.654-19.656-51.79-4.49 11.632-6.984 19.626-10.615 27.063-3.393 6.947-7.355 13.82-12.198 19.81-8.27 10.23-17.425 19.743-26.37 29.74zm163.84 201.356c46.687-40.18 70.82-89.063 61.6-125.62-8.97 10.594-24.328 20.45-24.984 31.202-1.473 24.138-17.324 39.792-25.687 59.583-4.563 10.8-7.122 22.445-10.93 34.835zm-33.023-391.796l-9.204-1.913c-16.057 22.323-33.2 43.983-47.535 67.363-4.52 7.373-1.525 19.355-1.97 29.228l7.06 1.89c17.704-24.69 36.05-48.966 52.572-74.426 3.28-5.053-.434-14.644-.923-22.142zm-111.142 391.51c-27.794 56.437-27.162 48.08-9.12 73.575 13.164-5.71 25.833-11.2 40.85-17.71-2.042-21.33-22.03-35.008-31.73-55.866zm248.944-202.05c-13.655 15.136-33.527 88.456-30.465 111.842 20.73-13.415 16.823-36.105 15.64-57.945l5.162.18c2.193 6.434 4.388 12.866 7.65 22.423 5.933-10.39 14.714-18.634 14.017-25.976-1.643-17.26-7.813-34.086-12.005-50.524zm131.362 282.772l2.62 5.748c4.983-2.85 12.25-4.523 14.458-8.805 4.218-8.18 5.612-17.832 7.888-26.945.096-.38-2.88-2.336-4.2-2.13-11.075 1.74-25 .315-32.512 6.543-14.194 11.77-24.69 27.994-36.725 42.368 4.58-2.218 13.422-.167 20.547-2.787 7.32-2.69 13.104-9.78 19.298-15.243 5.422-4.78 10.477-9.98 15.694-14.993.92.97 1.844 1.94 2.766 2.91l-9.834 13.334zm-403.24-200.13l5.34-.585c9.834-15.032 20.164-29.778 29.124-45.313 2.035-3.53 1.148-12.122-1.608-14.286-4.71-3.694-12.483-6.512-18.003-5.3-5.588 1.228-12.184 6.87-14.437 12.224-3.524 8.373-5.01 18.126-5.033 27.3-.023 8.65 2.956 17.307 4.616 25.96zm486.26-84.963c-13.397 41.214-27.416 84.35-42.172 129.75 34.777-17.556 44.092-85.29 42.17-129.75zM410.495 752.477l-.24 2.293 50.176 7.574c33.523-7.344 71.68-15.703 109.834-24.063-.426-1.975-.85-3.952-1.273-5.93-26.034 4.88-51.914 10.98-78.146 14.303-26.604 3.368-53.554 3.993-80.35 5.823zm-57.91-489.352l-23.608-42.91c-15.055 18.15-20.417 40.72-10.32 47.5 10.414 6.992 23.225 10.292 33.928-4.59zm76.068 451.558c40.998-6.152 160.983-62.03 177.296-81.128l-177.296 81.128zm129.92-462.117c22.405-21.378 15.495-35.743.12-51.172-19.745 28.632-19.96 38.417-.12 51.172zM399.37 245.66l4.8-1.852c-4.607-28.69-20.67-52.957-36.15-78.22-3.29 7.188-5.6 15.054-2.878 20.312 10.54 20.37 22.682 39.91 34.228 59.76zm-67.358 405.6c-8.38 15.857-16.882 30.822-24.096 46.383-1.813 3.908.5 9.73.917 14.674 4.78-1.986 10.66-2.818 14.16-6.15 19.248-18.336 20.69-28.015 9.02-54.908zm322.054-439.742c12.12-2.94 21.72-5.27 34.214-8.304l-14.515-39.79c-1.83.182-3.66.362-5.493.54-4.47 14.964-8.938 29.925-14.206 47.554zM718.47 556.12c-46.21-6.838-58.423-.146-50.593 24.927 16.964-8.358 33.78-16.64 50.593-24.927zm-458.643 37.31l-9.36-8.512-3.494 2.77 26.96 41.56c3.203-5.58 5.437-9.337 7.54-13.165 6.91-12.587.547-33.96-9.8-31.45-3.356 2.49-7.042 5.227-11.846 8.796zm352.81-51.52c33.803-23.838 57.304-62.816 51.088-82.845l-51.087 82.845zm-128.24-249.652c18.79-22.985 15.516-66.97-4.908-76.23 1.606 24.96 3.196 49.644 4.908 76.23zm153.96-37.616c8.488-2.104 16.738-2.812 23.58-6.29 4.937-2.512 8-8.707 11.9-13.258-4.072-3.16-8.504-9.232-12.132-8.785-5.38.66-11.22 5.08-14.947 9.51-3.67 4.362-4.96 10.73-8.4 18.822zM279.53 455.894c-20.615 28.878-19.97 35.623 4.61 56.275l-4.61-56.276zm185.702-121.08c-11.426-6.037-21.185-11.19-34.88-18.428l16.45 44.833c6.82-9.773 11.906-17.056 18.43-26.407zm211.492 163.512c-10.718 12.246-21.434 24.493-32.73 37.402 25.82 2.55 25.82 2.55 32.73-37.402zm-485.7 73.917V504.56c-16.065 40.55-19.41 54.07 0 67.683zM430.01 611.26c38.39 6.598 38.39 6.598 49.12-16.858l-49.12 16.857zm-121.747 59.728l8.355.645 3.674-64.964c-.813-.103-1.63-.2-2.442-.302l-9.587 64.62zm272.34-422.863c-14.27 21.472-14.212 21.806 4.51 31.542-1.45-10.132-2.72-19.02-4.51-31.542z" fill="#AF8D64"/></svg>'}},function(t,e){t.exports={template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.496 96.496"><path d="M92.5 65.178c-2.874-3.446-6.255-6.387-9.454-9.51-2.886-2.815-3.068-4.448-.748-7.697 2.532-3.545 5.255-6.955 7.81-10.485 2.385-3.3 4.823-6.59 6.078-10.54.796-2.512.092-3.622-2.485-4.062-.443-.077-.902-.08-1.354-.08l-15.29-.02c-1.882-.027-2.923.794-3.59 2.463-.898 2.256-1.825 4.51-2.896 6.687-2.43 4.936-5.144 9.707-8.95 13.747-.838.89-1.766 2.017-3.168 1.553-1.754-.64-2.27-3.53-2.242-4.507l-.015-17.647c-.34-2.522-.9-3.646-3.402-4.136l-15.882.003c-2.12 0-3.182.82-4.314 2.145-.653.766-.85 1.263.492 1.517 2.636.5 4.12 2.205 4.515 4.848.632 4.223.588 8.463.224 12.703-.107 1.24-.32 2.474-.81 3.63-.77 1.817-2.01 2.187-3.638 1.07-1.476-1.013-2.512-2.44-3.526-3.875-3.81-5.382-6.848-11.186-9.326-17.285-.716-1.762-1.95-2.83-3.818-2.86a392.148 392.148 0 0 0-13.762.005c-2.76.052-3.583 1.392-2.46 3.894C5.486 37.85 11.047 48.655 18.306 58.497c3.727 5.05 8.006 9.51 13.534 12.67 6.264 3.582 13.008 4.66 20.11 4.328 3.327-.156 4.326-1.02 4.48-4.336.104-2.268.36-4.523 1.48-6.56 1.098-2 2.76-2.382 4.678-1.138.96.623 1.767 1.416 2.53 2.252 1.872 2.048 3.677 4.158 5.62 6.137 2.437 2.48 5.324 3.946 8.954 3.647l14.052.003c2.264-.148 3.438-2.924 2.138-5.45-.913-1.77-2.11-3.347-3.383-4.872z"/></svg>'}}]),[42]);
//# sourceMappingURL=app.733d95dfa17600c70116.js.map