(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=(n(23),n(14)),u=n(13),d=(n(25),n(2)),l=n(7);var m=Object(d.b)(function(e){return{contador:e.contadorReducer.contador}},function(e){return{incrementar:function(){return e({type:"CONTADOR::INCREMENTAR"})},decrementar:function(){return e({type:"CONTADOR::DECREMENTAR"})}}})(function(e){var t=e.contador,n=e.incrementar,r=e.decrementar;return a.a.createElement("div",{id:"container"},a.a.createElement("div",{className:"App"},"Contador: ",t),a.a.createElement("div",{id:"buttonContainer"},a.a.createElement("button",{id:"btnIncrementar",onClick:n},a.a.createElement(l.a,{icon:u.faPlus})," Incrementar"),a.a.createElement("button",{id:"btnDecrementar",onClick:r},a.a.createElement(l.a,{icon:i.faMinus})," Decrementar")))}),E=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,35)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)})},f=n(6),b=n(8),s={contador:0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;switch((arguments.length>1?arguments[1]:void 0).type){case"CONTADOR::INCREMENTAR":return Object(b.a)({},e,{contador:e.contador+1});case"CONTADOR::DECREMENTAR":return Object(b.a)({},e,{contador:e.contador-1});default:return e}},R=Object(f.a)({contadorReducer:C}),O=Object(f.b)(R);o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:O},a.a.createElement(m,null)))),E()}},[[15,3,2]]]);
//# sourceMappingURL=main.949a487c.chunk.js.map