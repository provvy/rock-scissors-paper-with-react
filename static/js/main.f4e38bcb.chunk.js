(this["webpackJsonprock-scissors-paper"]=this["webpackJsonprock-scissors-paper"]||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),r=t.n(s),o=t(4),i=t.n(o),n=(t(10),t(2)),l=(t(11),function(e){return Object(a.jsxs)("div",{className:"score-div",id:"score-div",children:[Object(a.jsx)("div",{className:"user-label",id:"user-label",children:"user"}),Object(a.jsx)("div",{className:"comp-label",id:"comp-label",children:"comp"}),Object(a.jsxs)("span",{className:"score",id:"score",children:[e.userScore," : ",e.compScore]})]})}),d=function(e){return Object(a.jsx)("div",{className:"event-div",id:"event-div",children:Object(a.jsx)("span",{className:"event",id:"event",children:e.outcome})})},b=function(e){return Object(a.jsx)("button",{onClick:e.onclick,className:"button",value:e.id,id:e.id,children:Object(a.jsx)("img",{className:"image",src:e.src,alt:e.alt})})};var u=function(){var e=Object(s.useState)(null),c=Object(n.a)(e,2),t=c[0],r=c[1],o=Object(s.useState)(null),i=Object(n.a)(o,2),u=i[0],j=i[1],p=Object(s.useState)([{src:"https://i.imgur.com/5aw99wQ.png",alt:"Rock image",id:"Rock",play:"r"},{src:"https://i.imgur.com/I8PMMF5.png",alt:"Paper image",id:"Paper",play:"p"},{src:"https://i.imgur.com/A7fQj0G.png",alt:"Scissors image",id:"Scissors",play:"s"}]),m=Object(n.a)(p,2),h=m[0],O=(m[1],Object(s.useState)("")),v=Object(n.a)(O,2),f=v[0],g=v[1],x=Object(s.useState)(""),k=Object(n.a)(x,2),S=k[0],N=k[1];return Object(s.useEffect)((function(){r(0),j(0),g("Prova a battermi!"),N(["r","p","s"])}),[]),15===t?Object(a.jsxs)("div",{className:"win-div",children:[Object(a.jsx)("h1",{children:"Complimenti, hai vinto!"}),Object(a.jsx)("button",{className:"reload-button",onClick:function(){return window.location.reload()},children:"Gioca ancora"})]}):15===u?Object(a.jsxs)("div",{className:"lost-div",children:[Object(a.jsx)("h1",{children:"Purtroppo hai perso!"}),Object(a.jsx)("button",{className:"reload-button",onClick:function(){return window.location.reload()},children:"Gioca ancora"})]}):Object(a.jsxs)("div",{id:"container",className:"container",children:[Object(a.jsx)("header",{className:"header",children:"Sasso Carta Forbici"}),Object(a.jsx)(l,{userScore:t,compScore:u}),Object(a.jsx)(d,{outcome:f}),Object(a.jsx)("div",{className:"button-div",id:"button-div",children:h.map((function(e){return Object(a.jsx)(b,{onclick:function(){return function(e){switch(e+S[Math.floor(Math.random()*S.length)]){case"rr":g("Sasso contro sasso. \xc8 un pareggio!");break;case"rp":j(u+=1),g("Sasso contro carta. Hai perso!");break;case"rs":r(t+=1),g("Sasso contro forbici. Hai vinto!");break;case"pr":r(t+=1),g("Carta contro sasso. Hai vinto!");break;case"pp":g("Carta contro carta. \xc8 un pareggio!");break;case"ps":j(u+=1),g("Carta contro forbici. Hai perso!");break;case"sr":j(u+=1),g("Forbici contro sasso. Hai perso!");break;case"sp":r(t+=1),g("Forbici contro carta. Hai vinto!");break;case"ss":g("Forbici contro forbici. \xc8 un pareggio!")}}(e.play)},src:e.src,alt:e.alt,id:e.id})}))}),Object(a.jsxs)("footer",{className:"footer",children:["Fai la tua mossa.",Object(a.jsx)("p",{children:"coded by Paolo Provveduto"})]})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,r=c.getLCP,o=c.getTTFB;t(e),a(e),s(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.f4e38bcb.chunk.js.map