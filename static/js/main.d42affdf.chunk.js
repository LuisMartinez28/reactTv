(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{162:function(e,t,a){e.exports=a(213)},167:function(e,t,a){},194:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(11),i=a(36),u=a(24),s=a(97),m=(a(167),function(){var e=Object(s.useMediaQuery)({query:"(max-width: 1224px)"});return r.a.createElement(u.Navbar,{className:"bp3-violet1"},r.a.createElement(u.Navbar.Group,{align:u.Alignment.LEFT},r.a.createElement(u.Navbar.Heading,null,r.a.createElement(i.b,{to:"/"},"React Movies")),!e&&r.a.createElement("input",{className:"bp3-input",placeholder:"Search your favorite Movie/Tv Show",type:"search"}),r.a.createElement(u.Navbar.Divider,{className:"customize-bar-divider"}),r.a.createElement(i.b,{to:"/movies"},r.a.createElement(u.Button,{className:"bp3-minimal",icon:"film"},"Movies")),r.a.createElement(i.b,{to:"/"},r.a.createElement(u.Button,{className:"bp3-minimal",icon:"video"},"TV Shows"))))}),v=(a(194),function(e){var t=e.children;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement(m,null)),r.a.createElement("div",{className:"body"},t))}),d=a(106),p=a(42),h=a.n(p),f=a(58),E=a(103),b=a(104),g=a(107),y=a(105),w=a.n(y).a.create({baseURL:"https://api.themoviedb.org/3/"});w.interceptors.request.use((function(e){return e.params=Object(g.a)({api_key:"49d1d45c576713c95ea9afe3d1bbea95"},e.params),e}));var x=w,N=function(){function e(){Object(E.a)(this,e)}return Object(b.a)(e,[{key:"getPopularMovies",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/movie/popular");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getLatestMovies",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/movie/latest");case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=a(59),M=a.n(k),j=function(e){var t=e.movie;return r.a.createElement(u.Card,null,r.a.createElement("div",{className:M.a.card_body},r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path,alt:""})),r.a.createElement("div",{className:M.a.title},r.a.createElement("h3",null,t.title))))},_=a(219),O=a(217),T=a(220),D=a(218);a(212);_.a.use([O.a]);var L=function(e){var t=e.movieList;return r.a.createElement(T.a,{spaceBetween:50,slidesPerView:3,virtual:!0},t.map((function(e,t){return r.a.createElement(D.a,{key:t},r.a.createElement(j,{movie:e}))})))},S=new N,A=[{path:"/home",component:function(){return r.a.createElement(v,null,r.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}},r.a.createElement("div",null,r.a.createElement("div",{style:{maxWidth:"600px",margin:"0px auto"}},r.a.createElement("h1",null,"React Movies"),r.a.createElement("h4",{style:{color:"#5c255c"}},"The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different."))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/LuisMartinez28/react-movie"},r.a.createElement("i",{style:{color:"#5e6367"},className:"fab fa-github fa-4x"})),r.a.createElement("br",null),r.a.createElement("small",null,"Source Code"))))}},{path:"/movies",component:function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){S.getPopularMovies().then((function(e){c(e.results)}))}),[]),r.a.createElement(v,null,r.a.createElement("h1",null,"Movies"),r.a.createElement(L,{movieList:a}))}},{path:"/404",component:function(){return r.a.createElement(v,null,r.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}},r.a.createElement("h1",null,"Page Not Found 404")))}}];function B(e){var t=e.location.pathname;if(e.beforeEnter&&e.beforeEnter(t),"/"===t)return r.a.createElement(o.a,{to:"/home"});var a=A.find((function(e){var a=e.path;return a=a.replace(/(:.+)/g,"[^/]+").replace(/\//g,"\\/"),new RegExp("".concat(a,"(\\/|\\/)?$"),"gi").test(t)}));return a?r.a.createElement(o.b,{exact:!a.hasChild,path:a.path,component:a.component}):r.a.createElement(o.a,{to:"/404"})}var C=function(e){return r.a.createElement(i.a,null,r.a.createElement(o.d,null,r.a.createElement(B,e)))};var P=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"app"},r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports={card_body:"movie-card_card_body__1j_AA",title:"movie-card_title__2opVj"}}},[[162,1,2]]]);
//# sourceMappingURL=main.d42affdf.chunk.js.map