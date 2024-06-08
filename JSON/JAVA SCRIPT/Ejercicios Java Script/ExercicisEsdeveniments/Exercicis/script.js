
/*1.Canviar el color de fons del títol al passar el ratolí per sobre*/
const titol = document.getElementById('titol');
titol.addEventListener('mouseenter', function (){
    titol.style.backgroundColor = '#2c3e50';
});
titol.addEventListener('mouseleave', function (){
    titol.style.backgroundColor = '#333';
});

/*2.Alertar el text dels articles al fer-hi clic.*/
const articles = document.querySelectorAll('article');
//foreach per a recorrer els articles
articles.forEach(function (article){
    article.addEventListener('click', function(){
        alert(article.textContent);
    })
});

/*3.Canviar el color dels articles al passar el ratolí per sobre.*/
articles.forEach(function (article){
    article.addEventListener('mouseenter', function (){
        article.style.backgroundColor = 'red'
    })
    article.addEventListener('mouseleave', function (){
        article.style.backgroundColor = 'white'
    })
});

/*4. Canviar el color del menú al passar el ratolí per sobre.*/
const menu = document.getElementById('menu');
menu.addEventListener('mouseenter', function (){
    menu.style.backgroundColor = '#2c3e50';
});
menu.addEventListener('mouseleave', function (){
    menu.style.backgroundColor = '#333';
});

/*5. Mostrar l'índex de l'article al passar-hi el ratolí per sobre.*/
    //utilitzzem articles del exercici 2
    document.addEventListener('DOMContentLoaded', () => {
        // Obtener todos los elementos <article> dentro de la sección de contenidos
        const articles = document.querySelectorAll('article');

        // Recorrer cada artículo y agregar evento de ratón
        articles.forEach((article, index) => {
            const articleTitle = article.querySelector('h2'); // Obtener el elemento <h2> dentro del artículo

            // Agregar evento al pasar el ratón por encima del artículo
            article.addEventListener('mouseenter', () => {
                // Cambiar el texto del título para mostrar el índice del artículo
                articleTitle.textContent = `Índice ${index + 1}`;
            });

            // Agregar evento al retirar el ratón del artículo
            article.addEventListener('mouseleave', () => {
                // Restaurar el texto original del título
                articleTitle.textContent = `Article ${index + 1}`;
            });
        });
    });
/* 6.Canviar el color de fons del footer quan es fa clic.*/
const footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    footer.style.backgroundColor = '#2c3e50';
});

/* 7. Canviar el color del títol al fer-hi doble clic.*/
//agafem el la constant titol del ej 1
titol.addEventListener('dblclick', function(){
    titol.style.color = 'red';
})

/*8.Canviar el color de fons dels paràgrafs de l'article 2 al fer-hi clic.*/
const p = document.querySelectorAll('article p');
const p2 = p[1];
p2.addEventListener('click', function (){
    p2.style.backgroundColor = 'lightblue'
})

/*9.Redirigir a una altra pàgina al fer clic sobre el títol.*/
titol.addEventListener('click', function (){
    window.location.href = 'https://portal.edu.gva.es/iesbenigaslo/'
})

/*10.Canviar el text dels enllaços del menú al fer-hi clic.*/
// Seleccionar todos los enlaces del menú
const enlacesMenu = document.querySelectorAll('#menu a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
        // Cambiar el texto del enlace al hacer clic
        if (enlace.textContent === 'Inici') {
            enlace.textContent = 'JA';
        } else if (enlace.textContent === 'Serveis') {
            enlace.textContent = 'U';
        } else if (enlace.textContent === 'Productes') {
            enlace.textContent = 'M';
        } else if (enlace.textContent === 'Contacte') {
            enlace.textContent = 'E';}
    });
});

