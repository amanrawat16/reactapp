(this["webpackJsonpone-piece-cast"]=this["webpackJsonpone-piece-cast"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(14),a=c.n(r),i=c(5),j=c.n(i),o=c(15),d=c(3),l=c(16),b=c.n(l),u=c.p+"static/media/logo.e6ecab44.png",O=c(0),h=function(){return Object(O.jsx)("header",{className:"center",children:Object(O.jsx)("img",{src:u,alt:""})})},x=function(e){var t=e.item;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-inner",children:[Object(O.jsx)("div",{className:"card-front",children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsxs)("div",{className:"card-back",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})})},m=c.p+"static/media/spinner.11d9cde8.gif",p=function(){return Object(O.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},f=function(e){var t=e.items;return e.isLoading?Object(O.jsx)(p,{}):Object(O.jsx)("section",{className:"cards",children:t.map((function(e){return Object(O.jsx)(x,{item:e},e.char_id)}))})},g=function(e){var t=e.getQuery,c=Object(n.useState)(""),s=Object(d.a)(c,2),r=s[0],a=s[1];return Object(O.jsx)("section",{className:"search",children:Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",autoFocus:!0,value:r,onChange:function(e){return c=e.target.value,a(c),void t(c);var c}})})})},v=(c(41),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(d.a)(r,2),i=a[0],l=a[1],u=Object(n.useState)(""),x=Object(d.a)(u,2),m=x[0],p=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 2:t=e.sent,console.log(t.data),s(t.data),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{}),Object(O.jsx)(g,{getQuery:function(e){return p(e)}}),Object(O.jsx)(f,{isLoading:i,items:c})]})});a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.05b1b6dd.chunk.js.map