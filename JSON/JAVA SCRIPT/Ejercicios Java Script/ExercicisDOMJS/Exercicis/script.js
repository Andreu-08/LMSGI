
/*Exercici 1 : Canviar color del titol a ver fosc
 */
const titol = document.getElementById("titol");
titol.style.backgroundColor = '#006400';

/*Exercici 2: Afegir un nou element al menú.
Crea un nou element li al menú amb un enllaç que digui
 "Sobre nosaltres" i afegix-lo al final de la llista. */
const menu = document.getElementById('menu');
const nouElement = document.createElement('li');
const nouEnllas =document.createElement('a');
nouEnllas.href = '#';
nouEnllas.textContent = 'Sobre nosaltres'
nouElement.appendChild(nouEnllas);
menu.appendChild(nouElement);

/*Exercici 3*/
const article = document.querySelectorAll('article');
 article.forEach(article =>{ //la flecha indica que es funcio
     article.style.backgroundColor = '#FFFF99';
 });

/*Exercici 4: Canviar el color del text del menú a roig (#ee0808).*/

const enllas = document.querySelectorAll('#menu li a');
enllas.forEach(enllas =>{
  enllas.style.color = '#ee0808'
});

/*Exercici 5: Crea un nou paràgraf amb el text "Segueix-nos a les xarxes socials!"
 i afegix-lo al final del main. */
const main = document.querySelector('main')
const p = document.createElement('p');
p.textContent = 'Segueix-nos a les xarxes socials!';
main.appendChild(p)

/*Exercici 6*/
const enllasServeis = document.querySelector('#menu li a[href = "#"]')
enllasServeis.parentNode.parentNode.removeChild(enllasServeis.parentNode);
/*Exercici 7 : Canvia el color de fons del footer a un color gris fosc(#9b9797).*/
const footer = document.querySelector('footer');
footer.style.backgroundColor = '#9b9797';

/*Exercici 8*/
const pArticle1 = document.querySelectorAll('article:nth-child(1) p');
pArticle1.forEach(pArticle1 => {
    pArticle1.style.fontSize = '36px';
})

/*Exercici 9 Canviar el color de fons del títol i del menú quan es fa clic.
Canvia el color de fons del títol a blau
(#336699)i el color de fons del menú a vermell(#FF0000).*/
// Selecciona el títol i el menú
const titol2 = document.querySelector('#titol');
const menu2 = document.querySelector('#menu');

// Funció per canviar el color de fons del títol
titol.addEventListener('click', function() {
    titol2.style.backgroundColor = '#336699'; // Blau
});

// Funció per canviar el color de fons del menú
menu.addEventListener('click', function() {
    menu2.style.backgroundColor = '#FF0000'; // Vermell
});