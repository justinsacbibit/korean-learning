(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(23),a(8)),u=a(6),i=function(){return r.a.createElement("div",null,"money testing")},m=function(e){return Object(n.useEffect)(function(){var t=new URLSearchParams(window.location.search).get("p");t&&e.history.replace(t)}),r.a.createElement("div",null)},s=function(e){return r.a.createElement("div",null,r.a.createElement(m,{history:e.history}),"Click on an option above")},p=a(5),b=function(e){var t=e.rate,a=Object(n.useRef)(null),c=Object(n.useRef)(null),o=Object(n.useState)(!0),l=Object(p.a)(o,2),u=l[0],i=l[1],m=Object(n.useState)(null),s=Object(p.a)(m,2),b=s[0],v=s[1],E=Object(n.useState)(""),d=Object(p.a)(E,2),f=d[0],h=d[1],g=Object(n.useState)(""),y=Object(p.a)(g,2),w=y[0],N=y[1],O=Object(n.useState)(0),j=Object(p.a)(O,2),S=j[0],k=j[1],x=Object(n.useState)(0),A=Object(p.a)(x,2),C=A[0],R=A[1],T=Object(n.useState)(!1),M=Object(p.a)(T,2),K=M[0],U=M[1],W=Object(n.useState)(null),B=Object(p.a)(W,2),D=B[0],I=B[1],J=function(e){var a=new SpeechSynthesisUtterance;a.voiceURI="native",a.volume=1,a.rate=t||.8,a.pitch=1,a.lang="ko-KR",a.text="".concat(e.hour,"\uc2dc ").concat(e.minute,"\ubd84"),console.log(a.text),speechSynthesis.speak(a)},H=function(){I(null);var e={hour:Math.floor(12*Math.random())+1,minute:Math.floor(59*Math.random())+1};v(e),J(e)};Object(n.useEffect)(function(){b&&setTimeout(function(){a.current.focus()},100)},[b]);var L=function(){i(!1),f&&w&&(Number(f)===b.hour&&Number(w)===b.minute?(k(S+1),U(!0),H()):(R(C+1),I({wrongAnswer:{hour:Number(f),minute:Number(w)},correctAnswer:{hour:b.hour,minute:b.minute}})),h(""),N(""))},P=function(e){U(!1),"Enter"===e.key&&L()};return Object(n.useEffect)(function(){D&&c.current.focus()},[D]),b?r.a.createElement("div",null,u&&r.a.createElement("div",null,'Try turning on your ringer, turning up your volume and pressing "repeat audio" if you don\'t hear anything'),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",value:f,onChange:function(e){return h(e.target.value)},type:"number",onKeyDown:P,ref:a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\uc2dc")))),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",value:w,onChange:function(e){return N(e.target.value)},type:"number",onKeyDown:P}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\ubd84")))),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("button",{onClick:L,type:"button",className:"btn btn-primary"},"Submit")),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){J(b)}},"Repeat audio")))),D&&r.a.createElement("div",null,"Wrong!",r.a.createElement("div",null,"You answered with ",r.a.createElement("span",{style:{color:"red"}},D.wrongAnswer.hour,"\uc2dc ",D.wrongAnswer.minute.toString().padStart(2,"0"),"\ubd84")),r.a.createElement("div",null,"The correct answer was ",r.a.createElement("span",{style:{color:"green"}},D.correctAnswer.hour,"\uc2dc ",D.correctAnswer.minute.toString().padStart(2,"0"),"\ubd84")),r.a.createElement("button",{type:"button",className:"btn btn-primary",ref:c,onClick:function(){H()}},"Okay, next")),K&&r.a.createElement("div",null,"Correct!"),r.a.createElement("div",{style:{marginTop:100}},"Answers correct: ",S),r.a.createElement("div",null,"Answers wrong: ",C)):r.a.createElement("button",{onClick:function(){return H()},type:"button",className:"btn btn-primary"},"Start / \uc2dc\uc791")},v=(a(24),a(25),function(){return r.a.createElement(l.a,{basename:"/korean-learning"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/time"},"Time"))))),r.a.createElement("div",{className:"container py-5"},r.a.createElement(u.a,{path:"/",exact:!0,component:s}),r.a.createElement(u.a,{path:"/money",component:i}),r.a.createElement(u.a,{path:"/time",component:b}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.f8a9a701.chunk.js.map