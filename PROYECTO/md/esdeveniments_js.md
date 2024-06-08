
# Esdeveniments amb Java Script

En este treball hem creat 5 esdeveniments amb JavaScript i DOM per a fer interactiva una de les pàgines del nostre projecte, en aquest cas la pàgina “Libros”.

---

## Esdeveniments

### 1. Tornar al home en fer clic en el títol
En aquest esdeveniment seleccionem l'element amb l'ID 'títol' i utilitzant un addEventListener 'click' aconseguim que en fer clic amb el ratolí ens redireccione a la nostra pàgina d'inici.

```jsx
//1.tornar al home al fer click en el titol
const titol = document.getElementById('titol')
titol.addEventListener('click', function () {
    window.location.href = '../proyecto_html_css_js/index_proyecto.html'
});
```

---

### 2. Canviar el color de fons dels llibres
Amb aquest esdeveniment aconseguim que en passar el ratolí per damunt dels divs que contenen els llibres es canvie el color de fons, 
i en llevar el ratolí torne al seu color original. En aquest cas, després de seleccionar els divs amb “querySelectorAll” al DOM, 
utilitzarem els esdeveniments ‘mouseenter’ i ‘mouseleave’ per a implementar aquesta funcionalitat.
```jsx
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
```

---

### 3. Mostrem una alerta
Amb aquest esdeveniment 'dblclick' aconseguim que en fer doble clic amb el ratolí sobre algun llibre 
es mostre una alerta amb el títol del llibre. El títol el conseguim fent que en cada iteració del bucle 
foreach extraiga l'etiqueta h3 que conté el títol del div sobre el qual està interactuant.
```jsx
//3.alerta al fer clic en algun llibre mostra el titol en la alerta
document.querySelectorAll('.libro').forEach(function(libro) {
    libro.addEventListener('dblclick', function() {
        const titulo = libro.querySelector('h3').textContent; 
        alert('Título del libro: ' + titulo);
    });
});
```

---

### 4. Canviar de color l'índex del header

Fem que les etiquetes d'enllaços del header canvien de color en passar el ratolí per damunt i 
tornen al seu color original en llevar el ratolí ('mouseenter', 'mouseleave').

Ho aconseguim seleccionant tots els elements li dins del ul del nav, després iterem sobre aquests 
elements per fer que canviïn de color quan siga un índex, i es fa el mateix procés per a tornar al seu color 
original al treure el ratolí.

```jsx
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
```

---

### 5.Canviar el color de l'element en negreta dins dels divs
Seleccionem tots els elements que tinguen la classe ‘.llibre’ i dins d'aquests elements seleccionem 
els elements en negreta (‘b’) dins dels paràgrafs (‘p’). En fer clic (esdeveniment ‘click’) sobre algun 
dels elements amb la classe .llibre, els elements en negreta dins d'aquest canviaran de color.
```jsx
//5.cambiar el color dels elements en negreta al div
document.querySelectorAll('.libro').forEach(function(libro) {
    libro.addEventListener('click', function() {

        const elementsNegreta = libro.querySelectorAll('b');
        elementsNegreta.forEach(function(element) {
            element.style.color = 'black';
        });
    });
});
```

---

### Arxius utilitzats

**Arxiu Java Script:** PROYECTO/proyecto_html_css_js/js/script_libros.js

**Arxiu HTMl modificat :** PROYECTO/proyecto_html_css_js/html/libros.html