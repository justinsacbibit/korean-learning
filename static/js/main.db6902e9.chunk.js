(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(23),a(8)),u=a(6),m=function(){return r.a.createElement("div",null,"money testing")},i=function(){return r.a.createElement("div",null,"Click on an option above")},s=a(5),p=function(){return{hour:Math.floor(12*Math.random())+1,minute:Math.floor(59*Math.random())+1}},b=function(e){var t=e.rate,a=Object(n.useRef)(null),c=Object(n.useRef)(null),o=Object(n.useState)(p()),l=Object(s.a)(o,2),u=l[0],m=l[1],i=Object(n.useState)(""),b=Object(s.a)(i,2),v=b[0],E=b[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),w=f[0],h=f[1],g=Object(n.useState)(0),N=Object(s.a)(g,2),y=N[0],O=N[1],j=Object(n.useState)(0),k=Object(s.a)(j,2),S=k[0],x=k[1],A=Object(n.useState)(!1),C=Object(s.a)(A,2),R=C[0],M=C[1],K=Object(n.useState)(null),T=Object(s.a)(K,2),U=T[0],W=T[1],B=function(){var e=new SpeechSynthesisUtterance;e.voiceURI="native",e.volume=1,e.rate=t||.8,e.pitch=1,e.lang="ko-KR",e.text="".concat(u.hour,"\uc2dc ").concat(u.minute,"\ubd84"),console.log(e.text),speechSynthesis.speak(e)},D=function(){W(null),m(p()),a.current.focus()},I=function(){v&&w&&(Number(v)===u.hour&&Number(w)===u.minute?(O(y+1),M(!0),D()):(x(S+1),W({wrongAnswer:{hour:Number(v),minute:Number(w)},correctAnswer:{hour:u.hour,minute:u.minute}})),E(""),h(""))},J=function(e){M(!1),"Enter"===e.key&&I()};return Object(n.useEffect)(function(){B()},[u]),Object(n.useEffect)(function(){U&&c.current.focus()},[U]),r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",value:v,onChange:function(e){return E(e.target.value)},type:"number",onKeyDown:J,ref:a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\uc2dc")))),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",value:w,onChange:function(e){return h(e.target.value)},type:"number",onKeyDown:J}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\ubd84")))),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("button",{onClick:I,type:"button",className:"btn btn-primary"},"Submit")),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){B()}},"Repeat audio")))),U&&r.a.createElement("div",null,"Wrong!",r.a.createElement("div",null,"You answered with ",r.a.createElement("span",{style:{color:"red"}},U.wrongAnswer.hour,"\uc2dc ",U.wrongAnswer.minute.toString().padStart(2,"0"),"\ubd84")),r.a.createElement("div",null,"The correct answer was ",r.a.createElement("span",{style:{color:"green"}},U.correctAnswer.hour,"\uc2dc ",U.correctAnswer.minute.toString().padStart(2,"0"),"\ubd84")),r.a.createElement("button",{type:"button",className:"btn btn-primary",ref:c,onClick:function(){D()}},"Okay, next")),R&&r.a.createElement("div",null,"Correct!"),r.a.createElement("div",{style:{marginTop:100}},"Answers correct: ",y),r.a.createElement("div",null,"Answers wrong: ",S))},v=(a(24),a(25),function(){return Object(n.useEffect)(function(){var e=new URLSearchParams(window.location.search).get("p");e&&window.location.replace("/korean-learning"+e)}),r.a.createElement(l.a,{basename:"/korean-learning"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/time"},"Time"))))),r.a.createElement("div",{className:"container py-5"},r.a.createElement(u.a,{path:"/",exact:!0,component:i}),r.a.createElement(u.a,{path:"/money",component:m}),r.a.createElement(u.a,{path:"/time",component:b}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.db6902e9.chunk.js.map