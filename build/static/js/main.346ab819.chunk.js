(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{47:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/resume.74c199c5.png"},61:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(23),i=s.n(n),r=(s(61),s(25)),o=s(8),l=s(1),j=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};j.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,a=200-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,a=500):(a=this.period,this.isDeleting=!0),setTimeout((function(){s.tick()}),a)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var s=e[t].getAttribute("data-type"),a=e[t].getAttribute("data-period");s&&new j(e[t],JSON.parse(s),a)}var c=document.createElement("style");c.type="text/css",c.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(c)};var d=function(){return Object(l.jsx)("main",{children:Object(l.jsx)("div",{id:"Home",children:Object(l.jsx)("section",{children:Object(l.jsx)("h2",{className:"home-section",children:Object(l.jsx)("a",{href:"/about",class:"typewrite","data-period":"2000","data-type":'[ "Hi, I\'m Brooke.", "Welcome to my portfolio.", "Please look around. :)" ]',children:Object(l.jsx)("span",{class:"wrap"})})})})})})},h=s.p+"static/media/cover-image.90111833.jpg";var b=function(){return Object(l.jsx)("div",{className:"about-section",children:Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsxs)("h2",{className:"about-me-header",children:["Hi, I'm ",Object(l.jsx)("em",{children:"Brooke!"})]}),Object(l.jsx)("img",{src:h,className:"about-img",alt:"cover"}),Object(l.jsx)("p",{children:"I'm a Web Designer and full stack Developer based in Jacksonville, Florida. Leveraging my sales background to build a more intuitive user experience on the web. Recently I earned a certificate in full stack development from University of Central Florida, with newly developed skills in Javascript, CSS, and responsive web design. Known as an innovative problem solver with a determination for learning new things. I'm passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications."}),Object(l.jsx)("div",{className:"btns btn",children:Object(l.jsx)("a",{href:"/resume",children:"Download Resume"})}),Object(l.jsx)("h2",{children:"Skills"}),Object(l.jsx)("p",{children:"UI/UX Design / Git / React / JavaScript ES6 + / CSS3 / HTML5 / SQL / NoSQL / Express / Node / Handlebars / jQuery / REST API / Bootstrap + React-Bootstrap / Bulma "}),Object(l.jsx)("div",{className:"btn",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("a",{href:"/contact",className:"btns",children:"Contact Me"})})]})})},m=s(9),x=s(36),p=s(52),u=s(26),O=s.p+"static/media/0.88fb8922.png",f=s.p+"static/media/1.c0724e45.png",g=s.p+"static/media/2.382f82e1.png",v=s.p+"static/media/3.9f4a39b2.png",N=function(e){return Object(l.jsxs)(p.a,{xs:1,md:2,className:"g-4 project-section",children:[Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{id:"Project",children:[Object(l.jsxs)("h3",{children:["A ",Object(l.jsx)("em",{children:"small gallery"})," of recent projects ",Object(l.jsx)("em",{children:"chosen by me."})," Interested to ",Object(l.jsx)("em",{children:"see some more? "})," Visit my ",Object(l.jsx)("a",{className:"project-link",style:{textDecoration:"none"},href:"https://github.com/brookemadison",children:"Github"})," page."]}),Object(l.jsx)("a",{href:"https://github.com/brookemadison",className:"btns see-more-btn",children:"See More"})]}),Object(l.jsx)("p",{children:"This is where magic comes to life and visual stories are made. I believe that design must solve a need, stir a desire for involvement, and shed light on a path that is enjoyable, trustworthy, and human."})]}),Array.from({length:1}).map((function(e,t){return Object(l.jsx)(x.a,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(m.a.Img,{variant:"top",src:O}),Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(m.a.Title,{children:Object(l.jsx)("h4",{children:"Project Three"})}),Object(l.jsx)(m.a.Text,{children:"Details coming soon"}),Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"See Deployed"}),Object(l.jsx)("a",{href:"https://github.com/Lightfooted/High-Tech-Match-Love",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"View on Github"})})]})]})})})),Object(l.jsx)(x.a,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(m.a.Img,{variant:"top",src:f}),Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(m.a.Title,{children:Object(l.jsx)("h4",{children:"Project Two - Pok\xe9dex"})}),Object(l.jsxs)(m.a.Text,{children:[Object(l.jsx)("p",{children:"An online Pok\xe9dex that allows users to view and search for their favorite original 151 Pok\xe9mon."}),Object(l.jsx)("p",{children:"Technologies Used:"}),Object(l.jsx)("p",{children:"HTML / CSS / Javascript / Node.js / Express / MySQL / dotenv / Heroku / jawsDB /Sequelize / Bcrypt / express-session / Handlebars / Animate.css / Pok\xe9API"})]}),Object(l.jsx)("a",{href:"https://protected-hamlet-00069.herokuapp.com/\n",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"See Deployed"})}),Object(l.jsx)("a",{href:"https://github.com/Lightfooted/pokedex-project",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"View on Github"})})]})]})}),Object(l.jsx)(x.a,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(m.a.Img,{variant:"top",src:g}),Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(m.a.Title,{children:Object(l.jsx)("h4",{children:"Project One - Decide Eat"})}),Object(l.jsxs)(m.a.Text,{children:[Object(l.jsx)("p",{children:"A date night app crafted to offer a unique experience to users by taking a quiz that pairs you with a recipe, cocktail, and music playlist recommendation"}),Object(l.jsx)("p",{children:"Technologies Used:"}),Object(l.jsx)("p",{children:"HTML / CSS / Javascript / jQuery / Bulma / Spoonacular API / Spotify API"})]}),Object(l.jsx)("a",{href:"https://padredilg.github.io/decide-eat/",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"See Deployed"})}),Object(l.jsx)("a",{href:"https://github.com/Padredilg/decide-eat",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"View on Github"})})]})]})}),Object(l.jsx)(x.a,{children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(m.a.Img,{variant:"top",src:v}),Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(m.a.Title,{children:Object(l.jsx)("h4",{children:"BudgetTracker"})}),Object(l.jsxs)(m.a.Text,{children:[Object(l.jsx)("p",{children:"A PWA budget tracker application allows for offline access and functionality to to add expenses and deposits to their budget with or without a connection."}),Object(l.jsx)("p",{children:"Technologies Used:"}),Object(l.jsx)("p",{children:"Javascript / indexedDB / Express / MongoDB / Mongoose / Heroku"})]}),Object(l.jsx)("a",{href:"https://lit-reaches-08410.herokuapp.com/",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"See Deployed"})}),Object(l.jsx)("a",{href:"https://github.com/brookemadison/budget-tracker",children:Object(l.jsx)(u.a,{className:"projects-btns",variant:"outline-dark",children:"View on Github"})})]})]})})]})},y=s(47),k=function(){return Object(l.jsx)("div",{id:"Resume",children:Object(l.jsxs)("section",{className:"resume-section",children:[Object(l.jsx)("h2",{children:"Resume"}),Object(l.jsx)("div",{className:"btn",children:Object(l.jsxs)("a",{href:y.default,download:!0,id:"resume-download",children:[Object(l.jsx)("img",{src:s(47).default,alt:"resume",className:"resume-img"}),"Download"]})})]})})},w=s(6),S=s(10);var B=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(S.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),i=Object(S.a)(n,2),r=i[0],o=i[1],j=s.name,d=s.email,h=s.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."))};return Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{className:"contact-section","data-testid":"h1tag",children:[" ","Say ",Object(l.jsx)("em",{children:"Hi!,"})," ",Object(l.jsx)("em",{children:"I'd like to"})," hear from you!"]}),Object(l.jsx)("div",{className:"form",children:Object(l.jsxs)("form",{className:"contact-form",id:"contact-form",onSubmit:function(e){e.preventDefault(),r||(c(Object(w.a)({},e.target.name,e.target.value)),console.log("Form",s))},children:[Object(l.jsxs)("div",{className:"contact-input",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",size:"60",defaultValue:j,onBlur:b})]}),Object(l.jsxs)("div",{className:"contact-input",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",size:"60",defaultValue:d,onBlur:b})]}),Object(l.jsxs)("div",{className:"contact-input",children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",cols:"60",defaultValue:h,onBlur:b})]}),r&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:r})}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("button",{className:"btns","data-testid":"button",type:"submit",children:"Submit"})})]})}),Object(l.jsxs)("div",{className:"contact-simple",children:[Object(l.jsxs)("h4",{children:["Or just Keep it ",Object(l.jsx)("em",{children:"Simple."})]}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"mailto:brookemadisondesign@gmail.com",children:"Email: Brookemadisondesign@gmail.com"})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"tel:9042071528",children:"Phone Number: 904-207-1528"})})]})]})},T=s(74),D=s(72),I=s(56),L=s(73),P=function(){return Object(l.jsx)(T.a,{className:"navbar-style",bg:"*",expand:!1,children:Object(l.jsxs)(D.a,{fluid:!0,children:[Object(l.jsx)(T.a.Brand,{children:Object(l.jsx)(r.b,{className:"navbar-brand",to:"/home",children:"Brooke Madison"})}),Object(l.jsx)(T.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(l.jsxs)(T.a.Offcanvas,{className:"navbar-offcanvas",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(l.jsx)(I.a.Header,{className:"navbar-offcanvas",closeButton:!0,children:Object(l.jsx)(I.a.Title,{className:"navbar-offcanvas",id:"offcanvasNavbarLabel",children:"Brooke Madison's Portfolio"})}),Object(l.jsx)(I.a.Body,{className:"navbar-offcanvas",children:Object(l.jsxs)(L.a,{className:"justify-content-end flex-grow-1 pe-3 navbar-offcanvas",children:[Object(l.jsx)(L.a.Link,{children:Object(l.jsx)(r.b,{className:"navbar-offcanvas",style:{color:"#f5efea"},to:"home",children:"Home"})}),Object(l.jsx)(L.a.Link,{children:Object(l.jsx)(r.b,{className:"navbar-offcanvas",style:{color:"#f5efea"},to:"/about",children:"About"})}),Object(l.jsx)(L.a.Link,{children:Object(l.jsx)(r.b,{className:"navbar-offcanvas",style:{color:"#f5efea"},to:"/project",children:"Portfolio"})}),Object(l.jsx)(L.a.Link,{children:Object(l.jsx)(r.b,{className:"navbar-offcanvas",style:{color:"#f5efea"},to:"/contact",children:"Contact"})}),Object(l.jsx)(L.a.Link,{children:Object(l.jsx)(r.b,{className:"navbar-offcanvas",style:{color:"#f5efea"},to:"/resume",children:"Resume"})})]})})]})]})})},A=s(44),H=function(){return Object(l.jsxs)("footer",{className:"footer-container",children:[Object(l.jsx)("div",{className:"grow",children:Object(l.jsx)("a",{className:"footer-icons",href:"https://github.com/brookemadison",rel:"noopener noreferrer",target:"_blank",children:Object(l.jsx)(A.a,{size:28})})}),Object(l.jsx)("div",{className:"grow",children:Object(l.jsx)("a",{className:"footer-icons",href:"https://www.linkedin.com/in/brookemadisondesign/",rel:"noopener noreferrer",target:"_blank",children:Object(l.jsx)(A.b,{size:28})})}),Object(l.jsx)("div",{className:"grow",children:Object(l.jsx)("a",{className:"footer-icons",href:"https://stackoverflow.com/users/15789674/brooke-madison",rel:"noopener noreferrer",target:"_blank",children:Object(l.jsx)(A.c,{size:28})})})]})};var M=function(){return Object(l.jsxs)(r.a,{basename:"/react-portfolio/",children:["    ",Object(l.jsxs)("div",{children:[Object(l.jsx)(P,{}),Object(l.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(l.jsx)(o.a,{exact:!0,path:"/about",component:b}),Object(l.jsx)(o.a,{exact:!0,path:"/project",component:N}),Object(l.jsx)(o.a,{exact:!0,path:"/resume",component:k}),Object(l.jsx)(o.a,{exact:!0,path:"/contact",component:B}),Object(l.jsx)(H,{})]})]})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,75)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),C()}},[[69,1,2]]]);
//# sourceMappingURL=main.346ab819.chunk.js.map