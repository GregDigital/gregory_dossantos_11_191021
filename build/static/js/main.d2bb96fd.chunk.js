(this.webpackJsonpgregory_dos_santos_11_19102021=this.webpackJsonpgregory_dos_santos_11_19102021||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(33),i=s.n(n),r=s(36),l=s(8),o=s(2),j=s(12),u=s(0),d=function(e){var t=Object(c.useState)(!1),s=Object(j.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(),r=Object(j.a)(i,2),l=r[0],o=r[1],d=Object(c.useRef)();Object(c.useEffect)((function(){o("".concat(d.current.scrollHeight,"px"))}),[]);return Object(u.jsxs)("div",{className:"collapse",children:[Object(u.jsxs)("button",{onClick:function(){n(!a&&"active")},className:"collapse-visible",children:[Object(u.jsx)("span",{children:e.label}),Object(u.jsx)("img",{className:a&&"active",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAARCAYAAADOk8xKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB1c/dCYAwDATgxAkcwVU6qd3MblIVopRgsD8XwYN70bRfQ/SH5JzXs/RFBLviiyrMFzUwH/QB26R41MAWKRa1sOI/Dn3DoGgtBkFbsSG0F+tCR7EmFIXVoJPMcDGfjgZmTtQZORvkrvuzflUc3Uyn2DRaAzOBoxfYAQGb+4r2Ktj6AAAAAElFTkSuQmCC",alt:"chevron"})]}),Object(u.jsx)("div",{className:a?"collapse-toggle animated":"collapse-toggle",style:{height:a?"".concat(l):"0px"},ref:d,children:Object(u.jsx)("p",{children:e.children})})]})},b=s.p+"static/media/logo.a6101328.svg",h=function(){return Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{className:"logoImg",src:b,alt:"logo"})})},m=function(){return Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"link",children:[Object(u.jsx)(l.c,{exact:!0,to:"/",activeClassName:"nav-active",children:"Accueil"}),Object(u.jsx)(l.c,{exact:!0,to:"/a-propos",activeClassName:"nav-active",children:"\xc0 Propos"})]})]})},O=function(){return Object(u.jsxs)("div",{className:"banner",children:[Object(u.jsx)("p",{children:"Chez vous, partout et ailleurs"}),Object(u.jsx)("img",{className:"imgBanner",src:"./img/banner.png",alt:"banner"})]})},x=s.p+"static/media/logo-white.ee689fd9.svg",p=function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("img",{className:"footerImg",src:x,alt:"logo-footer"}),Object(u.jsx)("p",{children:"\xa9 2020 Kasa. All rights reserved"})]})},g=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(O,{}),Object(u.jsxs)("main",{className:"about",children:[Object(u.jsx)(d,{label:"Fiabilit\xe9",children:Object(u.jsx)("p",{children:"Les annonces post\xe9es sur Kasa garantissent une fiabilit\xe9 totale. Les photos sont conformes aux logements, et toutes les informations sont r\xe9guli\xe8rement v\xe9rifi\xe9es par nos \xe9quipes."})}),Object(u.jsx)(d,{label:"Respect",children:Object(u.jsx)("p",{children:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entra\xeenera une exclusion de notre plateforme."})}),Object(u.jsx)(d,{label:"Service",children:Object(u.jsx)("p",{children:"Nos \xe9quipes se tiennent \xe0 votre disposition pour vous fournir une exp\xe9rience parfaite. N'h\xe9sitez pas \xe0 nous contacter si vous avez la moindre question."})}),Object(u.jsx)(d,{label:"S\xe9curit\xe9",children:Object(u.jsx)("p",{children:"La s\xe9curit\xe9 est la priorit\xe9 de Kasa. Aussi bien pour nos h\xf4tes que pour les voyageurs, chaque logement correspond aux crit\xe8res de s\xe9curit\xe9 \xe9tablis par nos services. En laissant une note aussi bien \xe0 l'h\xf4te qu'au locataire, cela permet \xe0 nos \xe9quipes de v\xe9rifier que les standards sont bien respect\xe9s. Nous organisons \xe9galement des ateliers sur la s\xe9curit\xe9 domestique pour nos h\xf4tes."})})]}),Object(u.jsx)(p,{})]})},v=s(15),f=s.n(v),A=function(e){var t=e.logement;return Object(u.jsxs)(l.c,{exact:!0,to:"/logement/".concat(t.id),activeClassName:"logement",children:[Object(u.jsx)("img",{className:"imgCard",src:t.cover,alt:t.title,loading:"lazy"}),Object(u.jsx)("h2",{className:"titleCard",children:t.title})]})},N=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){f.a.create({baseURL:"http://localhost:3000"}).get("logements.json").then((function(e){return a(e.data)}))}),[]),Object(u.jsx)("main",{className:"main",children:Object(u.jsx)("section",{className:"sectionCards",children:s.map((function(e){return Object(u.jsx)("article",{className:"aptCard",children:Object(u.jsx)(A,{logement:e},e.name)})}))})})},S=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(m,{}),Object(u.jsx)(O,{}),Object(u.jsx)(N,{}),Object(u.jsx)(p,{})]})},C=s(16),R=s(17),k=s(19),y=s(18),q=s(11),B=s(23),w=function(e){Object(k.a)(s,e);var t=Object(y.a)(s);function s(e){var c;return Object(C.a)(this,s),(c=t.call(this,e)).state={current:0},c.nextSlide=c.nextSlide.bind(Object(q.a)(c)),c.prevSlide=c.prevSlide.bind(Object(q.a)(c)),c}return Object(R.a)(s,[{key:"nextSlide",value:function(){this.state.current>=this.props.pictures.length-1?this.setState({current:0}):this.setState({current:this.state.current+1})}},{key:"prevSlide",value:function(){0===this.state.current?this.setState({current:this.props.pictures.length-1}):this.setState({current:this.state.current-1})}},{key:"render",value:function(){return Object(u.jsxs)("section",{className:"slider",children:[Object(u.jsx)("img",{className:"sliderPic",src:this.props.pictures[this.state.current],alt:"logement"}),this.props.pictures.length>1?Object(u.jsxs)("div",{children:[Object(u.jsx)(B.a,{className:"left",onClick:this.prevSlide}),Object(u.jsx)(B.b,{className:"right",onClick:this.nextSlide})]}):"",Object(u.jsxs)("p",{className:"count",children:[this.state.current+1,"/",this.props.pictures.length]})]})}}]),s}(c.Component),D=s.p+"static/media/starGrey.7e4ba603.svg",U=s.p+"static/media/starRed.6430150c.svg",E=function(e){Object(k.a)(s,e);var t=Object(y.a)(s);function s(e){var c;return Object(C.a)(this,s),(c=t.call(this,e)).state={logementData:[]},c}return Object(R.a)(s,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:3000/logements.json").then((function(t){return e.setState({logementData:t.data})}))}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.logementData,s=t.findIndex((function(t){return t.id===e})),c=t[s];if(c){for(var a=c.title,n=c.host,i=c.location,r=c.description,l=c.equipments,o=c.tags,j=c.pictures,b=c.rating,h=[],O=0;O<5;O++)b>O?h.push(Object(u.jsx)("img",{className:"starSvg",src:U,alt:"stars red"})):h.push(Object(u.jsx)("img",{className:"starSvg",src:D,alt:"stars grey"}));return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(w,{pictures:j}),Object(u.jsxs)("main",{className:"collapseMain",children:[Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("div",{className:"contentTitleName",children:[Object(u.jsxs)("div",{className:"contentTitle",children:[Object(u.jsx)("h1",{children:a}),Object(u.jsx)("h2",{children:i})]}),Object(u.jsxs)("div",{className:"contentName",children:[Object(u.jsx)("p",{children:n.name}),Object(u.jsx)("img",{src:n.picture,alt:n.name})]})]}),Object(u.jsxs)("div",{className:"contentStarTags",children:[Object(u.jsx)("div",{className:"contentTags",children:o.map((function(e){return Object(u.jsx)("div",{className:"tags",children:e})}))}),Object(u.jsx)("div",{className:"star",children:Object(u.jsx)("span",{children:h})})]})]}),Object(u.jsxs)("section",{className:"sectionCollapse",children:[Object(u.jsx)("article",{className:"collapseArticle",children:Object(u.jsx)(d,{classname:"collapseLogement",label:"Description",children:Object(u.jsx)("p",{children:r})})}),Object(u.jsx)("article",{className:"collapseArticle",children:Object(u.jsx)(d,{label:"Equipement",children:Object(u.jsx)("ul",{children:l.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})})})]})]}),Object(u.jsx)(p,{})]})}return null}}]),s}(c.Component),F=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("h1",{className:"notFound",children:"404"}),Object(u.jsx)("p",{className:"notFoundPara",children:"Oups! La page que vous demandez n'existe pas."}),Object(u.jsx)("ul",{className:"notFoundUl",children:Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{exact:!0,to:"/",activeClassName:"returnAccueil",children:"Retourner sur la page d'accueil"})})}),Object(u.jsx)(p,{})]})},z=function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:S}),Object(u.jsx)(o.a,{path:"/a-propos",exact:!0,component:g}),Object(u.jsx)(o.a,{path:"/logement/:id",render:function(e){return Object(u.jsx)(E,Object(r.a)({},e))}}),Object(u.jsx)(o.a,{component:F})]})})};s(65);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d2bb96fd.chunk.js.map