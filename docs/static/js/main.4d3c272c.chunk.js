(this.webpackJsonpgaleria=this.webpackJsonpgaleria||[]).push([[0],{24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a(18),s=a.n(i),n=(a(24),a(7)),r=a(2),l=a(0),o=function(e){var t=e.arte;return Object(l.jsxs)("div",{className:"containerCesta",children:[Object(l.jsx)("div",{className:"imageCesta",style:{backgroundImage:'url("../assets/img/'.concat(t.imagen,'")'),backgroundPosition:"center",backgroundSize:"cover"}}),Object(l.jsxs)("h5",{className:"nombreCesta",children:["$ ",t.precio]}),Object(l.jsx)("h4",{className:"nameCesta",children:t.name}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"btnDelete",children:Object(l.jsx)("i",{onClick:function(){console.log("Borrado")},className:"fas fa-minus-circle"})})})]})},j=Object(c.createContext)({}),d=function(){var e=Object(c.useContext)(j).contgeneral;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("h1",{className:"carritoF",children:"Derechos reservados 2021"}),Object(l.jsxs)("div",{className:"carritoF",children:[Object(l.jsx)(n.b,{to:"/Carrito",children:Object(l.jsx)("i",{className:"fa fa-shopping-cart point","aria-hidden":"true"})}),Object(l.jsx)("span",{className:"counter",children:e})]})]})})},b=function(){var e=Object(c.useContext)(j).contgeneral;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(n.b,{to:"/",className:"home",children:Object(l.jsx)("h1",{children:"Galeria"})}),Object(l.jsxs)("div",{className:"carrito",children:[Object(l.jsx)(n.b,{to:"/Carrito",children:Object(l.jsx)("i",{className:"fa fa-shopping-cart point","aria-hidden":"true"})}),Object(l.jsx)("span",{className:"counter",children:e})]})]})},m=function(){var e=JSON.parse(localStorage.getItem("carrito"));return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)("h1",{className:"centrado",children:"Carrito de Compras"}),e.map((function(e){return Object(l.jsx)(o,{arte:e},e.id)})),Object(l.jsx)(d,{})]})},u=a(8),O=[{id:"1",imagen:"A1.jpg",name:"Caja Chica",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:600},{id:"2",imagen:"A2.jpg",name:"Guaje Mediano",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:100},{id:"3",imagen:"A3.jpg",name:"Baul Grande",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:15e3},{id:"4",imagen:"A4.jpg",name:"Guaje Chico",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:60},{id:"5",imagen:"A5.jpg",name:"Guaje Grande",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:400},{id:"6",imagen:"A6.jpg",name:"Baul Mediano",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:5e3},{id:"7",imagen:"A7.jpg",name:"Bolsa Mediana",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:800},{id:"8",imagen:"A8.jpg",name:"Bolsa Grande",detalle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat eget velit a",precio:1500}],x=[{id:"1",imagen:"B0.jpg"},{id:"2",imagen:"B1.jpg"},{id:"3",imagen:"B2.jpg"},{id:"4",imagen:"B3.jpg"}],h=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],i=t[1],s=function(){return i((function(e){return!e}))};return Object(l.jsx)(l.Fragment,{children:a?Object(l.jsx)("i",{className:"fa fa-heart col-heart","aria-hidden":"true",onClick:s}):Object(l.jsx)("i",{className:"fa fa-heart","aria-hidden":"true",onClick:s})})},f=a(13),p=function(){var e=Object(c.useState)([!1,!1,!1,!1,!1]),t=Object(u.a)(e,2),a=t[0],i=t[1],s=function(e,t){e.preventDefault();for(var c=Object(f.a)(a),s=0;s<5;s++)c[s]=s<=t;i(c)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("i",{className:"fa fa-star point","aria-hidden":"true",onClick:function(e){return s(e,0)},style:!0===a[0]?{color:"#fff200"}:null}),Object(l.jsx)("i",{className:"fa fa-star point","aria-hidden":"true",onClick:function(e){return s(e,1)},style:!0===a[1]?{color:"#fff200"}:null}),Object(l.jsx)("i",{className:"fa fa-star point","aria-hidden":"true",onClick:function(e){return s(e,2)},style:!0===a[2]?{color:"#fff200"}:null}),Object(l.jsx)("i",{className:"fa fa-star point","aria-hidden":"true",onClick:function(e){return s(e,3)},style:!0===a[3]?{color:"#fff200"}:null}),Object(l.jsx)("i",{className:"fa fa-star point","aria-hidden":"true",onClick:function(e){return s(e,4)},style:!0===a[4]?{color:"#fff200"}:null})]})},g=function(e){var t=e.location,a=O.map((function(e){return e.id})).find((function(e){return e===t.state.id})),i=O[a-1],s=i.name,r=i.detalle,o=i.precio,j=x.map((function(e){return e.imagen})),m=Object(c.useState)(0),f=Object(u.a)(m,2),g=f[0],v=f[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"back",children:[Object(l.jsx)(n.b,{to:"/",children:Object(l.jsx)("i",{className:"far fa-arrow-alt-circle-left"})}),Object(l.jsx)("h1",{className:"centrado",children:"Informacion del producto"})]}),Object(l.jsxs)("div",{className:"containerInfo",children:[Object(l.jsxs)("div",{className:"back-next",children:[0!==g?Object(l.jsx)("i",{onClick:function(){g<=j.length&&g>0&&v(g-1)},className:"far fa-arrow-alt-circle-left atras"}):Object(l.jsx)("i",{className:"far fa-arrow-alt-circle-left atras2"}),3!==g?Object(l.jsx)("i",{onClick:function(){j.length>g&&g<j.length-1&&v(g+1)},className:"far fa-arrow-alt-circle-right siguiente"}):Object(l.jsx)("i",{className:"far fa-arrow-alt-circle-right siguiente2"})]}),Object(l.jsx)("div",{className:"imageInfo",style:{backgroundImage:'url("../assets/img/bolsas/'.concat(j[g],'")'),backgroundPosition:"center",backgroundSize:"cover"}}),Object(l.jsxs)("div",{className:"reviewInfo",children:[Object(l.jsxs)("div",{className:"starsInfo",children:[Object(l.jsx)("span",{children:"Reviews"}),Object(l.jsx)(p,{})]}),Object(l.jsxs)("h5",{children:["$ ",o]})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("h4",{className:"nombreInfo",children:s}),Object(l.jsx)("div",{className:"detallesInfo",children:Object(l.jsx)("p",{children:r})})]}),Object(l.jsxs)("div",{className:"btn-boxInfo",children:[Object(l.jsx)("span",{className:"likeInfo pointInfo",children:Object(l.jsx)(h,{})}),Object(l.jsxs)("div",{className:"btnInfo",children:[Object(l.jsx)("p",{children:"Add to Car"}),Object(l.jsx)("div",{className:"cart-iconInfo",children:Object(l.jsx)("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})})]})]})]}),Object(l.jsx)(d,{})]})},v=function(e){var t=e.value,a=Object(c.useContext)(j),i=a.contgeneral,s=a.setContgeneral,n=a.carrito,r=a.setCarrito;return localStorage.setItem("carrito",JSON.stringify(n)),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"btn",children:[Object(l.jsx)("p",{onClick:function(){var e={id:t.id,imagen:t.imagen,name:t.name,detalle:t.detalle,precio:t.precio};r([].concat(Object(f.a)(n),[e])),s(i+1)},children:"Add to Car"}),Object(l.jsx)("div",{className:"cart-icon",children:Object(l.jsx)("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})})]})})},N=function(e){var t=e.arte;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(n.b,{to:{pathname:"/Informacion/".concat(t.name),state:{id:t.id}},children:Object(l.jsx)("div",{className:"image",style:{backgroundImage:'url("../assets/img/'.concat(t.imagen,'")'),backgroundPosition:"center",backgroundSize:"cover"}})}),Object(l.jsxs)("div",{className:"contenido",children:[Object(l.jsxs)("div",{className:"review",children:[Object(l.jsxs)("div",{className:"stars",children:[Object(l.jsx)("span",{children:"Reviews"}),Object(l.jsx)(p,{})]}),Object(l.jsxs)("h5",{children:["$ ",t.precio]})]}),Object(l.jsx)("h4",{className:"nombre",children:t.name}),Object(l.jsx)("div",{className:"detalles",children:Object(l.jsx)("p",{children:t.detalle})}),Object(l.jsxs)("div",{className:"btn-box",children:[Object(l.jsx)("span",{className:"like point",children:Object(l.jsx)(h,{})}),Object(l.jsx)(v,{value:t})]})]})]})},C=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)([]),n=Object(u.a)(s,2),r=n[0],o=n[1];return Object(l.jsxs)(j.Provider,{value:{contgeneral:a,setContgeneral:i,carrito:r,setCarrito:o},children:[Object(l.jsx)(b,{}),O.map((function(e){return Object(l.jsx)(N,{arte:e},e.id)})),Object(l.jsx)(d,{})]})};function k(){return Object(l.jsx)(n.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{exact:!0,path:"/",children:Object(l.jsx)(C,{})}),Object(l.jsx)(r.b,{exact:!0,path:"/Carrito",children:Object(l.jsx)(m,{})}),Object(l.jsx)(r.b,{path:"/Informacion/:id",component:g}),Object(l.jsx)(r.b,{exact:!0,path:"/",children:Object(l.jsx)(r.a,{to:"/"})})]})})}s.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4d3c272c.chunk.js.map