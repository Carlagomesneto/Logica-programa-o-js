//<a> do Home
const aHome = document.createElement('a'); 
aHome.setAttribute('href','/exercicios/index.html');
aHome.innerHTML = 'Home';

// <li> do exercicio 1
const liHome = document.createElement('li');
liExercicio6.appendChild(aExercicio6);

// <a> do exercicio 6 
const aExercicio6 = document.createElement('li');
aExercicio6.setAttribute('href', '/exercicios/exercicio6.html');
aExercicio6.appendChild(aExercicio6);

// <ul> do menu
const ulNav = document.createElement('ul');
ulExercicio1.appendChild(liHome, liExercicio1);

//<nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);


// De acordo com a solução do professor...

// <span>Desafios e Exercicios</span>
const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Desafios e Exercicios';

// <div class="logo>
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);

//<div class="logo-menu">
const divMenulogo = document.createElement('div');
divMenulogo.classList.add('logo-menu');
divMenulogo.appendChild(divLogo,nav);
 
const header = document.createElement('header');
header.appendChild(divMenulogo); 

// document.body.insertBefore(header,document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);
 

const linkNavbar = createElement('link');
linkNavbar.setAttribute('rel', 'StyleSheet');
linkNavbar.setAttribute('href','/css/navBar.css');

// document.body.insertBefore(nav,document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', nav);

document.head.appendChild(linkNavbar);