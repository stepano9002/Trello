(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(72),n(10)),l=n(24),d=n(134),u=n(132),s=n(130),p=n(131),b=n(18),f=n(11),v=n(33),m=n.n(v);function g(){var e=Object(o.a)(["\n  cursor: pointer;\n"]);return g=function(){return e},e}function E(){var e=Object(o.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n"]);return E=function(){return e},e}function h(){var e=Object(o.a)(["\n  min-height: 85px;\n  padding: 6, 8, 2;\n"]);return h=function(){return e},e}function D(){var e=Object(o.a)(["\n  resize: none;\n  width: 100%;\n  outline: none;\n  border: none;\n"]);return D=function(){return e},e}function j(){var e=Object(o.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return j=function(){return e},e}var O=f.b.div(j()),y=Object(f.b)(m.a)(D()),x=Object(f.b)(d.a)(h()),I=f.b.div(E()),C=Object(f.b)(s.a)(g());var w=function(e){var t=e.list,n=e.text,a=void 0===n?"":n,c=e.onChange,i=e.closeForm,o=e.children,l=t?"list title":"title card";return r.a.createElement(O,null,r.a.createElement(x,null,r.a.createElement(y,{placeholder:l,autoFocus:!0,value:a,onChange:function(e){c(e)}})),r.a.createElement(I,null,o),r.a.createElement(C,{onMouseDown:i}))},A=n(6),k={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD"};function R(){var e=Object(o.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  & :hover {\n    opacity: 0.8;\n  }\n"]);return R=function(){return e},e}function _(){var e=Object(o.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return _=function(){return e},e}var S=f.b.div(_()),P=Object(f.b)(s.a)(R(),S);var T=Object(A.b)()((function(e){var t=e.text,n=e.id,c=e.index,i=e.listID;console.log(n);var o=Object(a.useState)(t),s=Object(l.a)(o,2),f=s[0],v=s[1],m=Object(a.useState)(!1),g=Object(l.a)(m,2),E=g[0],h=g[1],D=Object(A.c)(),j=function(e){v(e.target.value)},O=function(e){h(!1)},y=function(e){e.preventDefault(),D(function(e,t,n){return{type:k.EDIT_CARD,payload:{id:e,listID:t,cardText:n}}}(n,i,f)),h(!1)};return E?r.a.createElement(w,{text:f,onChange:j,closeForm:O},r.a.createElement("div",{onClick:y},"\uc800\uc7a5")):r.a.createElement(b.b,{draggableId:String(n),index:c},(function(e){return r.a.createElement(S,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(d.a,null,r.a.createElement(P,{onMouseDown:function(){return h(!E)}},"edit"),r.a.createElement(p.a,null,r.a.createElement(u.a,{gutterBottom:!0},t))),e.placeholder)}))})),L=n(23),H=n(133),F={display:"flex",alignItems:"center",cursor:"pointer",borderRadius:3,height:36,width:272,paddingLeft:10};function G(e){var t=e.list,n=e.onClick,a=e.onChange,c=e.value,i=e.handleaddList,o=e.handleaddCard,l=t?"\ub9ac\uc2a4\ud2b8 \uc81c\ubaa9 \uc785\ub825 \ud558\uc148":"\uce74\ub4dc\uc81c\ubaa9 \uc785\ub825 \ud558\uc148 ",u=t?"\ub9ac\uc2a4\ud2b8 \ucd94\uac00":"\uce74\ub4dc \ucd94\uac00";return r.a.createElement("div",null,r.a.createElement(d.a,{style:{overflow:"visible",minHeight:80,minWidth:272,padding:"6px 8px 2px"}},r.a.createElement(m.a,{placeholder:l,autoFocus:!0,onClick:n,onChange:a,value:c,style:{resize:"none",width:"100%",outline:"none",border:"none"}})),r.a.createElement("div",null,r.a.createElement(H.a,{onMouseDown:t?i:o,onClick:n,variant:"contained",style:{color:"white",backgroundColor:"#151515"}},u),r.a.createElement(s.a,{onClick:n,style:{marginLeft:8,cursor:"pointer"}},"close")))}function N(e){var t=e.list,n=e.onClick,a=t?"add another list":"add another card",c=t?1:.5,i=t?"rgba(0,0,0,0.15)":"inherit",o=t?"white":"inherit";return r.a.createElement("div",{onClick:n,style:Object(L.a)({},F,{opacity:c,color:o,background:i})},r.a.createElement(s.a,null,"add"),r.a.createElement("p",null,a))}var z=Object(A.b)()((function(e){var t=e.listID,n=e.list;console.log(t);var c=Object(A.c)(),i=Object(a.useState)(""),o=Object(l.a)(i,2),d=o[0],u=o[1],s=Object(a.useState)(!1),p=Object(l.a)(s,2),b=p[0],f=p[1],v=function(){f(!b)};return r.a.createElement("div",null,b?r.a.createElement(G,{listID:t,handleaddCard:function(){c(function(e,t){return{type:k.ADD_CARD,payload:{text:t,listID:e}}}(t,d)),u(""),f(!b)},handleaddList:function(){var e;c((e=d,{type:k.ADD_LIST,payload:e})),u(""),f(!b)},onClick:v,onChange:function(e){return u(e.target.value)},value:d,list:n}):r.a.createElement(N,{onClick:v,list:n}))})),B={container:{backgroundColor:"#dfe3e6",borderRadius:3,width:300,padding:8,marginRight:8}};var M=function(e){var t=e.title,n=e.cards,a=e.listID,c=e.index;return r.a.createElement(b.b,{draggableId:String(a),index:c},(function(e){return r.a.createElement("div",Object.assign({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps),r.a.createElement("div",{style:B.container},r.a.createElement(b.c,{droppableId:String(a),type:"card"},(function(e){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),r.a.createElement("h4",null,t),n.map((function(e,t){return r.a.createElement(T,{key:e.id,index:t,text:e.text,id:e.id,listID:a})})),e.placeholder,r.a.createElement(z,{listID:a})," ")}))))}))};function W(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return W=function(){return e},e}function J(){var e=Object(o.a)(["\n  body{\n    background:#6E6E6E;\n  }\n"]);return J=function(){return e},e}var $=Object(f.a)(J()),q=f.b.div(W());var K=Object(A.b)((function(e){return{lists:e.lists,cards:e.lists.cards}}))((function(e){var t=e.lists,n=Object(A.c)();return r.a.createElement(b.a,{onDragEnd:function(e){var t=e.destination,a=e.source,r=e.draggableId,c=e.type;console.log(e),t&&n(function(e,t,n,a,r,c){return{type:k.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:n,droppableIndexEnd:a,draggableId:r,type:c}}}(a.droppableId,t.droppableId,a.index,t.index,r,c))}},console.log(t),r.a.createElement(b.c,{droppableId:"akk-list",direction:"horizontal",type:"list"},(function(e){return r.a.createElement(q,Object.assign({},e.droppableProps,{ref:e.innerRef}),t.map((function(e,t){return r.a.createElement(M,{listID:e.id,key:e.id,title:e.title,cards:e.cards,index:t})})),e.placeholder,r.a.createElement(z,{list:!0}))})),r.a.createElement($,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(8),U=n(12),V=1,X=2,Y=[{title:"\uc5b4\uc81c \ubabb\ud55c\uac83\ub4e4",id:"\ub9ac\uc2a4\ud2b8\ubc88\ud638".concat(0),cards:[{id:"\uce74\ub4dc\ubc88\ud638".concat(0),text:"\ucf54\ud14c\uc900\ube44"},{id:"\uce74\ub4dc\ubc88\ud638".concat(1),text:"\ud3ec\ud3f4 \uad00\ub9ac "}]}];var Z=Object(Q.c)({lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.ADD_LIST:var n={title:t.payload,cards:[],id:"\ub9ac\uc2a4\ud2b8\ubc88\ud638".concat(V)};return V+=1,[].concat(Object(U.a)(e),[n]);case k.ADD_CARD:var a={text:t.payload.text,id:"\uce74\ub4dc\ubc88\ud638".concat(X)};X+=1;var r=e.map((function(e){return e.id===t.payload.listID?Object(L.a)({},e,{cards:[].concat(Object(U.a)(e.cards),[a])}):e}));return r;case k.EDIT_CARD:var c=t.payload,i=(c.id,c.cardText,e.find((function(e){return e.id===t.payload.listID})));console.log(i.cards);var o=e.map((function(e){return Object(L.a)({},e,{cards:[].concat(Object(U.a)(e.cards),[Object(L.a)({},e.cards,{text:t.payload.cardText})])})}));return o;case k.DRAG_HAPPENED:var l=t.payload,d=l.droppableIdStart,u=l.droppableIdEnd,s=l.droppableIndexStart,p=l.droppableIndexEnd,b=(l.draggableId,l.type),f=Object(U.a)(e);if("list"===b){var v=f.splice(s,1);return f.splice.apply(f,[p,0].concat(Object(U.a)(v))),f}if(d===u){var m,g=e.find((function(e){return d===e.id})),E=g.cards.splice(s,1);(m=g.cards).splice.apply(m,[p,0].concat(Object(U.a)(E)))}if(d!==u){var h,D=e.find((function(e){return d===e.id})),j=D.cards.splice(s,1),O=e.find((function(e){return u===e.id}));(h=O.cards).splice.apply(h,[p,0].concat(Object(U.a)(j)))}return f;default:return e}}}),ee=n(61),te=n.n(ee),ne=Object(Q.e)(Z,Object(Q.a)(te.a));i.a.render(r.a.createElement(A.a,{store:ne},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,n){e.exports=n(116)},72:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.735cfb25.chunk.js.map