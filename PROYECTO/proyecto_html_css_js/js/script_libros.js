
//1.tornar al home al fer click en el titol
const titol = document.getElementById('titol')
titol.addEventListener('click', function (){
    window.location.href = '/index.html/PROYECTO/proyecto_html_css_js/index_proyecto.html'
} );
//2.Cambiar el color del fons de dels llibres
const libro = document.querySelectorAll("section div");
libro.forEach(function(libro){
    libro.addEventListener('mouseenter', function (){
        libro.style.backgroundColor = '#eecc4c'
    })
    libro.addEventListener('mouseleave', function(){
        libro.style.backgroundColor = '#eecc9c'
    })
});

//3.alerta al fer clic en algun llibre mostra el titol en la alerta
document.querySelectorAll('.libro').forEach(function(libro) {
    libro.addEventListener('dblclick', function() {
        const titulo = libro.querySelector('h3').textContent;
        alert('Título del libro: ' + titulo);
    });
});

//4. cambiar color de fons dels index del header
const menuItems = document.querySelectorAll('nav ul li');
const tarjetas = document.querySelectorAll('.tarjeta');
menuItems.forEach((menuindex, index) => {
    menuindex.addEventListener('mouseenter', function() {
        if (tarjetas[index]) {
            tarjetas[index].style.backgroundColor = '#b0c6ba';
        }
    });
    menuindex.addEventListener('mouseleave', function() {

        if (tarjetas[index]) {
            tarjetas[index].style.backgroundColor = '';
        }
    });
});

//5.cambiar el color dels elements en negreta al div
document.querySelectorAll('.libro').forEach(function(libro) {
    libro.addEventListener('click', function() {

        const elementsNegreta = libro.querySelectorAll('b');
        elementsNegreta.forEach(function(element) {
            element.style.color = 'black';
        });
    });
});
