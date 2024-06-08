# Exercicis Pràctics del DOM

## Exercici 1
Canvia el color de fons del títol a un color verd fosc (#006400).

**Pista:** Seleccionem l'element del títol utilitzant `getElementById` i després accedim a la propietat `style.backgroundColor` per canviar el color de fons a verd fosc.

## Exercici 2
Afegir un nou element al menú. Crea un nou element li al menú amb un enllaç que digui "Sobre nosaltres" i afegix-lo al final de la llista.

**Pista:** Creem un nou element li i un enllaç a, configurem l'enllaç amb l'atribut href i el text contingut, després afegim l'enllaç com a fill del li i finalment afegim el nou li com a fill de la llista del menú.

## Exercici 3
Canvia el color de fons de tots els articles a un color groc clar (#FFFF99).

**Pista:** Utilitzem `querySelectorAll` per seleccionar tots els elements article, i després iterem a través de cada element utilitzant `forEach` per canviar el color de fons a groc clar.

## Exercici 4
Canviar el color del text del menú a roig (#ee0808).

**Pista:** Utilitzem `querySelectorAll` per seleccionar tots els enllaços (a) dins del menú, i després iterem a través de cada enllaç per canviar el color del text a roig.

## Exercici 5
Crea un nou paràgraf amb el text "Segueix-nos a les xarxes socials!" i afegix-lo al final del main.

**Pista:** Creem un nou element p amb el text especificat, i després afegim aquest nou paràgraf com a fill del main utilitzant `appendChild`.

## Exercici 6
Eliminar l'enllaç "Serveis" del menú

**Pista:** Utilitzem `querySelector` per seleccionar l'enllaç amb l'atribut href igual a "#", que conté el text "Serveis". Després, accedim al seu pare utilitzant `parentNode` dues vegades per eliminar l'element li del DOM.

## Exercici 7
Canvia el color de fons del footer a un color gris fosc (#9b9797).

**Pista:** Seleccionem l'element del footer i accedim a la seua propietat `style.backgroundColor` per canviar el color de fons a gris fosc.

## Exercici 8
Canvia la mida de la font dels paràgrafs de l'article 1 a 36 pixels.

**Pista:** Utilitzem `querySelectorAll` per seleccionar tots els paràgrafs (p) dins del primer article, i després iterem a través de cada paràgraf per canviar la mida de la font a 36 píxels. Utilitzem l'argument `'article:nth-child(1) p'`.

## Exercici 9
Canviar el color de fons del títol i del menú quan es fa clic. Canvia el color de fons del títol a blau (#336699) i el color de fons del menú a vermell (#FF0000).

**Pista:** Afegim un event listener a l'element del títol i al menú per escoltar els esdeveniments de clic. Quan es fa clic, canviem el color de fons corresponent utilitzant `style.backgroundColor`.
