(this.webpackJsonpserver=this.webpackJsonpserver||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(8),c=n.n(r),o=n(9),u=n(5),i=n(6),s=n(4);var m=function(e){return l.a.createElement("div",{className:"contentBox"},l.a.createElement("li",{className:"listItem"},e.text),l.a.createElement("div",{className:"deleteIcon"},l.a.createElement(i.a,{icon:s.b,onClick:function(){e.onChecked(e.id)}})))};var d=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1];return l.a.createElement("div",{className:"form"},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(t)},type:"text",value:r,spellcheck:"false",placeholder:"Add Work..."}),l.a.createElement("button",{onClick:function(){e.callAddItem(r),c("")}},l.a.createElement("span",null,l.a.createElement(i.a,{icon:s.a}))))};var E=function(){var e=(new Date).toLocaleString("en-Us",{weekday:"long",day:"numeric",month:"long"});return l.a.createElement("div",null,l.a.createElement("h1",{className:"DateHeading"},e))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e," Kundan Prasad"))};var v=function(){var e=Object(a.useState)(function(){var e=localStorage.getItem("lists");return console.log(e),e?JSON.parse(localStorage.getItem("lists")):[]}()),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(a.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(n))}),[n]),l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"ToDo List")),l.a.createElement(d,{callAddItem:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),l.a.createElement("div",null,l.a.createElement("ul",null,n.map((function(e,t){return l.a.createElement(m,{key:t,id:t,text:e,onChecked:c})}))))),l.a.createElement(f,null))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e40ff80a.chunk.js.map