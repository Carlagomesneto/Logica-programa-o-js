const links = [
    { rel: "stylesheet", href: "/css/reset.css" },
    { rel: "stylesheet", href: "/css/style.css" },
    { rel: "stylesheet", href: "/css/responsividade" }
];

links.forEach(Links => {
    const l = document.createElement('link');
    l.rel = links.rel;
    l.href = links.href;
    document.head.appendChild(l);
    });