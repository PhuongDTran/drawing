(window.webpackJsonpdrawing=window.webpackJsonpdrawing||[]).push([[0],{236:function(e,t,n){e.exports=n(522)},241:function(e,t,n){},246:function(e,t){},248:function(e,t){},283:function(e,t){},284:function(e,t){},519:function(e,t){},522:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),l=(n(241),n(31)),i=n(214),u=n(549),s=n(227),E=n.n(s),d=n(228),f=n.n(d),h=n(15),p={SET_COLOR:"SET_COLOR",SET_WIDTH:"SET_WIDTH",SET_CLEAR:"SET_CLEAR",SET_ROOM:"SET_ROOM",SET_ERASER:"SET_ERASER",SET_PEN:"SET_PEN",ALL:"ALL"},m={ROOM_LENGTH:6,CHARSET:"0123456789"},O={BROADCAST:"broadcast"},y="#ffffff",v=50;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={color:"#B80000",width:2,clear:!1,room:""};function T(e,t){switch(t.type){case p.SET_COLOR:return S({},e,{color:t.payload});case p.SET_WIDTH:return S({},e,{width:t.payload});case p.SET_CLEAR:return S({},e,{clear:t.payload});case p.SET_ROOM:return S({},e,{room:t.payload});case p.SET_ERASER:return S({},e,{color:y,width:v});case p.SET_PEN:return S({},e,{color:t.payload.color,width:t.payload.width});default:return g}}var w=r.a.createContext(null),R=n(215),C=n.n(R),j=n(216),_=n(217),A=n.n(_),x=n(542),k=n(552),D=n(544),P=n(551),L=n(550),M=n(545),H=n(546),W=n(547),N=n(548),B=n(222),I=n.n(B),G=n(221),J=n.n(G),F=n(223),X=n.n(F),Y=n(224),z=n.n(Y),Q=n(225),U=n.n(Q);var q=function(){var e=Object(a.useContext)(w),t=e.state,n=e.dispatch,o=Object(a.useState)(""),c=Object(l.a)(o,2),i=c[0],u=c[1],s=Object(a.useState)(!1),E=Object(l.a)(s,2),d=E[0],f=E[1],h=Object(a.useState)(!1),O=Object(l.a)(h,2),b=O[0],S=O[1],g=Object(a.useRef)(t.color),T=Object(a.useRef)(t.width);Object(a.useEffect)(function(){t.color===y&&t.width===v?S(!0):S(!1)},[t.color,t.width]);var R=function(){f(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{bounds:"parent"},r.a.createElement(x.a,{style:{position:"absolute",display:"inline-flex",backgroundColor:"white",flexDirection:"column"}},r.a.createElement(j.GithubPicker,{triangle:"hide",color:t.color,onChangeComplete:function(e,t){g.current=e.hex,n({type:p.SET_COLOR,payload:e.hex}),n({type:p.SET_WIDTH,payload:T.current})}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(k.a,{title:"Clear Canvas"},r.a.createElement(D.a,{variant:"contained",color:"secondary",onClick:function(){n({type:p.SET_CLEAR,payload:!0}),n({type:p.SET_COLOR,payload:g.current}),n({type:p.SET_WIDTH,payload:T.current})}}," ",r.a.createElement(J.a,null)," ")),r.a.createElement(k.a,{title:"Eraser"},r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",color:"default",onClick:function(){g.current=t.color,T.current=t.width,n({type:p.SET_ERASER})},disabled:b}," ",r.a.createElement(I.a,null)," "))),r.a.createElement(k.a,{title:"Pen"},r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(){n({type:p.SET_PEN,payload:{color:g.current,width:T.current}})},disabled:!b}," ",r.a.createElement(X.a,null)," ")))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(k.a,{title:"Share your canvas"},r.a.createElement(D.a,{style:{marginRight:"1%"},variant:"contained",color:"primary",onClick:function(){var e=C.a.generate({length:m.ROOM_LENGTH,charset:m.CHARSET});n({type:p.SET_ROOM,payload:e}),f(!0)}}," ",r.a.createElement(z.a,null)," ")),r.a.createElement(k.a,{title:"Join canvas by entering a room code"},r.a.createElement(D.a,{style:{marginRight:"1%"},variant:"contained",color:"primary",onClick:function(){i&&(alert("Ok:)"),n({type:p.SET_ROOM,payload:i}))}}," ",r.a.createElement(U.a,null)," ")),r.a.createElement(P.a,{value:i,placeholder:"Room Code",onMouseDown:function(e){return e.stopPropagation()},onChange:function(e){u(e.target.value)}})))),r.a.createElement(L.a,{open:d,onClose:R},r.a.createElement(M.a,null,"Share this room code"),r.a.createElement(H.a,null,r.a.createElement(W.a,null,t.room)),r.a.createElement(N.a,null,r.a.createElement(D.a,{onClick:R,color:"primary"}," Close "))))},K=n(33),V=n(226),Z=n.n(V)()("http://localhost:8080");var $=r.a.memo(function(){var e=Object(a.useRef)(null),t=Object(a.useContext)(w),n=t.state,o=t.dispatch,c=Object(a.useState)(!1),i=Object(l.a)(c,2),u=i[0],s=i[1],E=Object(a.useState)([]),d=Object(l.a)(E,2),f=d[0],h=d[1];Object(a.useEffect)(function(){var t=e.current;t.width=t.offsetWidth,t.height=t.offsetHeight},[]),Object(a.useEffect)(function(){if(n.clear){var t=e.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height),o({type:p.SET_CLEAR,payload:!1}),Z.emit(O.BROADCAST,{state:n,points:[]})}},[n.clear,o]),Object(a.useEffect)(function(){var t=e.current.getContext("2d");Z.on(n.room,function(e){e.state.clear&&t.clearRect(0,0,t.canvas.width,t.canvas.height),t.strokeStyle=e.state.color,t.lineWidth=e.state.width;for(var n=0;n<e.points.length;n++)e.points[n+1]&&m(t,e.points[n],e.points[n+1])})},[n.room]);var m=function(e,t,n){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.stroke()},y=function(t){s(!0);var n=S(e.current,t);h(function(e){return[].concat(Object(K.a)(e),[n])})},v=function(t){if(u){var a=e.current,r=a.getContext("2d");r.strokeStyle=n.color,r.lineWidth=n.width,f.length>=2&&m(r,f[f.length-2],f[f.length-1]);var o=S(a,t);h(function(e){return[].concat(Object(K.a)(e),[o])})}},b=function(){n.room&&Z.emit(O.BROADCAST,{state:n,points:f}),s(!1),h([])};function S(e,t){var n=e.getBoundingClientRect();return t.changedTouches?{x:t.changedTouches[0].clientX-n.left,y:t.changedTouches[0].clientY-n.top}:{x:t.clientX-n.left,y:t.clientY-n.top}}return r.a.createElement("div",{className:"canvas",style:{width:"100vw",height:"100vh",cursor:"pointer"}},r.a.createElement("canvas",{ref:e,style:{width:"100%",height:"100%"},onMouseDown:y,onMouseMove:v,onMouseUp:b,onTouchStart:y,onTouchMove:v,onTouchEnd:b}))});var ee=function(){var e=Object(a.useReducer)(T,g),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),d=s[0],h=s[1],p=Object(i.useMediaQuery)({minWidth:1024});return r.a.createElement(w.Provider,{value:{state:n,dispatch:o}},r.a.createElement(r.a.Fragment,null,(p||d)&&r.a.createElement(q,null),!p&&r.a.createElement(u.a,{size:"small",style:{position:"absolute",bottom:"1%",right:"1%",backgroundColor:"#6aaf6a",color:"white"},onClick:function(){return h(!d)}},d?r.a.createElement(E.a,null):r.a.createElement(f.a,null)),r.a.createElement($,null)))};var te=function(){return r.a.createElement("div",{className:"App",style:{textAlign:"center",width:"100vw",height:"100vh"}},r.a.createElement(ee,null))};c.a.render(r.a.createElement(te,null),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.af4f5cc2.chunk.js.map