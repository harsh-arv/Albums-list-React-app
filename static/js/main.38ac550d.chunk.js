(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(19),a=c.n(r),j=c(20),i=c(4),l=c(16),o=c.n(l),b=c(8),d=c(2),u=c(23),h=c(1),O=function(){return Object(h.jsx)("div",{className:"navbar",children:Object(h.jsx)("div",{className:"",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"icon",children:Object(h.jsx)("a",{href:"/Albums-list-React-app",children:Object(h.jsx)(u.a,{})})}),Object(h.jsx)("li",{className:"addAlbum",children:Object(h.jsx)(b.b,{to:"/add",children:"Add Album"})}),Object(h.jsx)("li",{className:"deleteAlbum",children:Object(h.jsx)(b.b,{to:"/delete",children:"Delete Album"})}),Object(h.jsx)("li",{className:"replaceAlbum",children:Object(h.jsx)(b.b,{to:"/replace",children:"Replace Album"})})]})})})},x=c(24),p=(c(36),c(13)),m=function(){return Object(h.jsx)("div",{className:"app-spinner"})},f=function(e){var t=Object(n.useState)(),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(),j=Object(i.a)(a,2),l=j[0],o=j[1],b=Object(n.useState)(),d=Object(i.a)(b,2),u=d[0],O=d[1],f=Object(n.useState)(!1),v=Object(i.a)(f,2),y=v[0],g=v[1];return y?Object(h.jsx)(m,{}):Object(h.jsxs)("div",{className:"cointainer",children:[Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["User Id",Object(h.jsx)("input",{type:"text",name:"userId",placeholder:"enter Id",onChange:function(e){return r(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["Title",Object(h.jsx)("input",{type:"text",name:"title",placeholder:"enter Title",onChange:function(e){return o(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["Body",Object(h.jsx)("input",{type:"text",name:"body",placeholder:"enter Body",required:!0,onChange:function(e){return O(e.target.value)}})]})}),Object(h.jsx)("button",{className:"button-55",type:"button",onClick:function(){return function(t,c,n){g(!0);var s=fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:c,body:n,userId:t}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){g(!1),p.b.success("Successfully toasted!"),e.setAlbum((function(e){return[].concat(Object(x.a)(e),[t])}))})).catch((function(e){g(!1),p.b.error("This is an error!"),console.log(e)}));setTimeout(s,2e3)}(s,l,u)},disabled:y,children:"Submit"})]}),Object(h.jsx)(p.a,{})]})},v=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(i.a)(r,2),j=a[0],l=a[1];return j?Object(h.jsx)(m,{}):Object(h.jsx)("div",{className:"cointainer",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("label",{children:["Id",Object(h.jsx)("input",{type:"text",name:"id",placeholder:"enter Id",pattern:"[0-9]+",onChange:function(e){s(e.target.value)},required:!0})]}),Object(h.jsx)("button",{className:"button-55",type:"button",onClick:function(){return function(e){void 0!=e?(l(!0),fetch("https://jsonplaceholder.typicode.com/posts/".concat(e),{method:"DELETE"}).then((function(){return l(!1)})).catch((function(e){return l(!1)})),console.log(e)):window.alert("Can't be emty")}(c)},children:"Delete"})]})})},y=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),a=Object(i.a)(r,2),j=a[0],l=a[1],o=Object(n.useState)(),b=Object(i.a)(o,2),d=b[0],u=b[1],O=Object(n.useState)(),x=Object(i.a)(O,2),p=x[0],f=x[1],v=Object(n.useState)(!1),y=Object(i.a)(v,2),g=y[0],S=y[1];return g?Object(h.jsx)(m,{}):Object(h.jsx)("div",{className:"cointainer",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["Id",Object(h.jsx)("input",{type:"text",name:"id",placeholder:"enter Id",onChange:function(e){return s(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["Title",Object(h.jsx)("input",{type:"text",name:"Title",placeholder:"enter Title",onChange:function(e){return l(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["Body",Object(h.jsx)("input",{type:"text",name:"body",placeholder:"enter Body",onChange:function(e){return u(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["UserId",Object(h.jsx)("input",{type:"text",name:"UserId",placeholder:"enter UserId",onChange:function(e){return f(e.target.value)},required:!0})]})}),Object(h.jsx)("button",{className:"button-55",type:"button",onClick:function(){return function(e){S(!0);var t=fetch("https://jsonplaceholder.typicode.com/posts/".concat(e),{method:"PUT",body:JSON.stringify({id:e,title:j,body:d,userId:p}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){S(!1),console.log(e)})).catch((function(e){S(!1)(console.log(e))}));console.log(e),setTimeout(t,2e3)}(c)},children:"Delete"})]})})};var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),l=a[0],u=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return s(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(c),setTimeout((function(){u(!1)}),2e3),l?Object(h.jsxs)("div",{children:[Object(h.jsxs)(b.a,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(m,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/add",children:Object(h.jsx)(f,{album:c,setAlbum:s})}),Object(h.jsx)(d.a,{path:"/delete",children:Object(h.jsx)(v,{})}),Object(h.jsx)(d.a,{path:"/replace",children:Object(h.jsx)(y,{})})]})]}),","]}):Object(h.jsxs)("div",{children:[Object(h.jsxs)(b.a,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/Albums-list-React-app",children:!l&&c.map((function(e,t){return Object(h.jsx)("div",{className:"albums-container",children:Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsxs)("p",{children:["UserId: ",e.userId]}),Object(h.jsxs)("h2",{children:["Title: ",e.title," "]}),Object(h.jsxs)("p",{children:["Content: ",e.body]})]})},t)}))}),Object(h.jsx)(d.a,{path:"/add",children:Object(h.jsx)(f,{album:c,setAlbum:s})}),Object(h.jsx)(d.a,{path:"/delete",children:Object(h.jsx)(v,{})}),Object(h.jsx)(d.a,{path:"/replace",children:Object(h.jsx)(y,{})})]})]}),","]})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.38ac550d.chunk.js.map