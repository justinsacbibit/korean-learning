(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),l=(n(23),n(8)),u=n(6),i=function(){return r.a.createElement("div",null,"money testing")},m=function(e){return Object(a.useEffect)(function(){var t=new URLSearchParams(window.location.search).get("p");t&&e.history.replace(t)}),r.a.createElement("div",null)},s=function(e){return r.a.createElement("div",null,r.a.createElement(m,{history:e.history}),"Click on an option above")},p=n(5),b=function(){return{hour:Math.floor(12*Math.random())+1,minute:Math.floor(59*Math.random())+1}},v=function(e){var t=e.rate,n=Object(a.useRef)(null),c=Object(a.useRef)(null),o=Object(a.useState)(!0),l=Object(p.a)(o,2),u=l[0],i=l[1],m=Object(a.useState)(null),s=Object(p.a)(m,2),v=s[0],E=s[1],d=Object(a.useState)(""),f=Object(p.a)(d,2),h=f[0],g=f[1],y=Object(a.useState)(""),w=Object(p.a)(y,2),N=w[0],O=w[1],j=Object(a.useState)(0),S=Object(p.a)(j,2),k=S[0],x=S[1],A=Object(a.useState)(0),C=Object(p.a)(A,2),R=C[0],M=C[1],T=Object(a.useState)(!1),K=Object(p.a)(T,2),U=K[0],W=K[1],B=Object(a.useState)(null),D=Object(p.a)(B,2),I=D[0],J=D[1],H=function(){var e=new SpeechSynthesisUtterance;e.voiceURI="native",e.volume=1,e.rate=t||.8,e.pitch=1,e.lang="ko-KR",e.text="".concat(v.hour,"\uc2dc ").concat(v.minute,"\ubd84"),console.log(e.text),speechSynthesis.speak(e)},L=function(){J(null),E(b()),n.current.focus()},P=function(){i(!1),h&&N&&(Number(h)===v.hour&&Number(N)===v.minute?(x(k+1),W(!0),L()):(M(R+1),J({wrongAnswer:{hour:Number(h),minute:Number(N)},correctAnswer:{hour:v.hour,minute:v.minute}})),g(""),O(""))},Y=function(e){W(!1),"Enter"===e.key&&P()};return Object(a.useEffect)(function(){v&&H()},[v]),Object(a.useEffect)(function(){I&&c.current.focus()},[I]),v?r.a.createElement("div",null,u&&r.a.createElement("div",null,'Try turning on your ringer, turning up your volume and pressing "repeat audio" if you don\'t hear anything'),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",value:h,onChange:function(e){return g(e.target.value)},type:"number",onKeyDown:Y,ref:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\uc2dc")))),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",value:N,onChange:function(e){return O(e.target.value)},type:"number",onKeyDown:Y}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},"\ubd84")))),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("button",{onClick:P,type:"button",className:"btn btn-primary"},"Submit")),r.a.createElement("div",{className:"col-auto my-1"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){H()}},"Repeat audio")))),I&&r.a.createElement("div",null,"Wrong!",r.a.createElement("div",null,"You answered with ",r.a.createElement("span",{style:{color:"red"}},I.wrongAnswer.hour,"\uc2dc ",I.wrongAnswer.minute.toString().padStart(2,"0"),"\ubd84")),r.a.createElement("div",null,"The correct answer was ",r.a.createElement("span",{style:{color:"green"}},I.correctAnswer.hour,"\uc2dc ",I.correctAnswer.minute.toString().padStart(2,"0"),"\ubd84")),r.a.createElement("button",{type:"button",className:"btn btn-primary",ref:c,onClick:function(){L()}},"Okay, next")),U&&r.a.createElement("div",null,"Correct!"),r.a.createElement("div",{style:{marginTop:100}},"Answers correct: ",k),r.a.createElement("div",null,"Answers wrong: ",R)):r.a.createElement("button",{onClick:function(){return E(b())},type:"button",className:"btn btn-primary"},"Start / \uc2dc\uc791")},E=(n(24),n(25),function(){return r.a.createElement(l.a,{basename:"/korean-learning"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/time"},"Time"))))),r.a.createElement("div",{className:"container py-5"},r.a.createElement(u.a,{path:"/",exact:!0,component:s}),r.a.createElement(u.a,{path:"/money",component:i}),r.a.createElement(u.a,{path:"/time",component:v}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.99ccd38d.chunk.js.map