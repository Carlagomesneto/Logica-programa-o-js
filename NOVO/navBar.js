const ancoras = [
    { "url": "/index.html", "texto": "Home"},
    { "url": "/Exercicios/Busca-nome.html", "texto": "Busca nome"},
    { "url": "/Exercicios/classificacao-triangulo.html", "texto": "Classificacao triangulo"}
    { "url": "NOVO"
];


function criaAncora (url,texto) {

    const ancora = document.createElement('a');
    ancora.setAttribute('href', url)
    ancora.innerHTML = texto;

    return ancora;
}

function criaLi(ancora) {
    const li = document.createElement('li');
    li.appendChild(ancora);

    return li;
}

function criaUlNav(ancoras) {

    const ul = document.createElement('ul');

    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLi(a);
        ul.appendChild(li);
        
    });

    return ul;
}

//<nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));

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
divMenulogo.appendChild(divLogo, nav);
 
const header = document.createElement('header');
header.appendChild(divMenulogo); 

// document.body.insertBefore(header,document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);
 

const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href','../css/navBar.css');

// document.body.insertBefore(nav,document.body.firstChild);
// document.body.insertAdjacentElement('afterbegin', nav);

document.head.appendChild(linkNavbar);

