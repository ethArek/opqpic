(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{221:function(n,e,t){n.exports=t.p+"static/media/upload.90507c06.svg"},231:function(n,e,t){n.exports=t(506)},271:function(n,e){},273:function(n,e){},286:function(n,e){},288:function(n,e){},299:function(n,e){},301:function(n,e){},302:function(n,e){},320:function(n,e){},322:function(n,e){},347:function(n,e){},466:function(n,e){},468:function(n,e){},474:function(n,e){},475:function(n,e){},478:function(n,e){},494:function(n,e){},497:function(n,e){},506:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(217),o=t.n(c),u=t(507),l=t(32),i=t(23),f=t(13),s=t(24),p=t(0),m=t.n(p),b=t(2),d=t(14),v=t.n(d);var E=function(n,e){var t=Object(a.useState)(!1),r=Object(f.a)(t,2),c=r[0],o=r[1],u=Object(a.useState)(),l=Object(f.a)(u,2),i=l[0],s=l[1],p=Object(a.useState)(""),d=Object(f.a)(p,2),E=d[0],h=d[1];return[{isLoading:c,responseData:i,error:E},Object(a.useCallback)((function(){(function(){var t=Object(b.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.prev=1,t.next=4,v()(n,{data:e,method:"POST"});case 4:a=t.sent,s(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),h(t.t0);case 11:return t.prev=11,o(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}})()()}),[e,n])]};function h(){var n=Object(i.a)(["\n  padding: 10px 20px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  background-color: #4287f5;\n  color: #fff;\n  border: 2px solid transparent;\n  font-family: inherit;\n  cursor: pointer;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #4257f5;\n  }\n"]);return h=function(){return n},n}var O=s.b.button(h()),j=t(221),g=t.n(j),x=t(86),w=t.n(x);function y(){var n=Object(i.a)(["\n  background-color: #000;\n  color: #fff;\n  font-family: 'Inconsolata', monospace;\n\n  p {\n    margin: 0;\n  }\n"]);return y=function(){return n},n}var k=s.b.div(y()),S=function(){var n=Object(a.useState)(1),e=Object(f.a)(n,2),t=e[0],c=e[1];return r.a.createElement(k,null,1===t&&r.a.createElement(w.a,{cursor:{show:!1},onTypingDone:function(){return c(2)}},r.a.createElement("p",null,"Uploading file to server"),r.a.createElement(w.a.Delay,{ms:300}),r.a.createElement("p",null,"Encofing file")),2===t&&r.a.createElement(w.a,{avgTypingDelay:20},r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412"),r.a.createElement("p",null,"41271274172412")))};function D(){var n=Object(i.a)(["\n  display: none;\n"]);return D=function(){return n},n}function z(){var n=Object(i.a)(["\n  text-align: center;\n"]);return z=function(){return n},n}function L(){var n=Object(i.a)(["\n  font-size: 18px;\n  color: #1b1b1b;\n"]);return L=function(){return n},n}function F(){var n=Object(i.a)(["\n  display: block;\n  border: 3px dashed #aaa;\n  width: 400px;\n  height: 300px;\n  margin-bottom: 40px;\n  cursor: pointer;\n  background: url(",") no-repeat center center;\n  background-size: 15%;\n"]);return F=function(){return n},n}function R(){var n=Object(i.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]);return R=function(){return n},n}var T=s.b.div(R()),U=s.b.label(F(),g.a),B=s.b.h2(L()),C=s.b.div(z()),A=s.b.input(D()),I=function(){var n=Object(a.useState)(),e=Object(f.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)(),l=Object(f.a)(o,2),i=l[0],s=l[1],p=E("/api/images",i),m=Object(f.a)(p,2),b=m[0],d=(b.isLoading,b.responseData,m[1]);return Object(u.d)(),r.a.createElement(T,null,t&&r.a.createElement(B,null,t.name),!t&&r.a.createElement(U,null,r.a.createElement(A,{onChange:function(n){var e=n.currentTarget.files[0],t=new FileReader;c(e),t.onload=function(n){var t={fileBase64:n.target.result,name:e.name};s(t)},t.readAsDataURL(e)},type:"file",accept:".jpg, .png"})),t&&r.a.createElement(C,null,r.a.createElement(O,{onClick:function(){return d()}},"Upload")),r.a.createElement(S,null))},J=t(223),W="https://broker-1.opacitynodes.com:3000",P={autostart:!0,endpoint:W,params:{blockSize:65536,partSize:10485760}},$={endpoint:W,autostart:!0};var q=function(n){Object(a.useEffect)((function(){document.title=n}),[n])};var G=function(n){var e=n.match.params.handle,t=Object(a.useState)(""),c=Object(f.a)(t,2),o=c[0],u=c[1],l=Object(a.useState)(""),i=Object(f.a)(l,2),s=i[0],p=i[1];return q(s),Object(a.useEffect)((function(){new J.a({handle:e},{uploadOpts:P,downloadOpts:$}).downloadFile(e).toFile().then((function(n){var e=new FileReader;p(n.name),e.addEventListener("load",(function(){var n=this.result;u(n)})),e.readAsDataURL(n)}))}),[e]),r.a.createElement("img",{src:o,alt:s})},H=Object(l.a)();var K=function(){return r.a.createElement(u.b,{history:H},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:I,exact:!0}),r.a.createElement(u.a,{path:"/:handle",component:G})))};function M(){var n=Object(i.a)(['\n  &,\n  &::before, \n  &::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: "Lato", sans-serif;\n  }\n']);return M=function(){return n},n}var N=Object(s.a)(M()),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},91:function(n,e){}},[[231,1,2]]]);
//# sourceMappingURL=main.5ec6a274.chunk.js.map