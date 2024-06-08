**Títol:** Endevina el Número - V2

**Descripció:**
Amplia l'exercici anterior afegint la possibilitat de configurar un rang personalitzat per als números a endevinar. 
L'usuari podrà introduir un valor mínim i un valor màxim, i el número secret serà generat dins d'aquest rang. 
A més, es mostrarà una llista dels números introduïts per l'usuari durant el joc.

**Funcions Principals:**

1. **Configuració del Rang de Números:** L'usuari introduirà un valor mínim i un valor màxim per establir el rang de números a endevinar. 
2. **Generació Aleatòria del Número Secret:** El número secret es generarà aleatòriament dins d'aquest rang. (Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;)
3. **Visualització de la Llista de Números Introduïts:** Es mostrarà una llista dels números que l'usuari ha introduït durant el joc.
4. **Estructura General:** Tindrem un formulari inicial per al rang i un `<div>`per al joc que incialment estarà ocult `<div id="joc" style="display: none;">` a continuació a l'script ocultarem el formulari i es mostra el joc: 
````
    // Oculta el formulari de configuració i mostra el joc
    document.getElementById('formRang').style.display = 'none';
    document.getElementById('joc').style.display = 'block';
 ````

**Elements Utilitzats:**

**HTML:**
- `<form>`: Per permetre a l'usuari configurar el rang de números.
- `<label>`: Etiquetes per als camps d'entrada del rang.
- `<input>`: Entrades per als valors mínim i màxim del rang.
- `<ul>` i `<li>`: Per mostrar la llista de números introduïts per l'usuari.


**JavaScript:**
- **Funció `iniciarJoc()`:** Inicialitza el joc generant el número secret dins del rang configurat.
- **Funció `endevinar()`:** S'ha actualitzat per afegir els números introduïts per l'usuari a la llista i mostrar-los visualment.

**CSS:**
- S'han afegit estils per a la llista de números introduïts (`#llistaNumeros`) per a una millor presentació.
- S'ha estilitzat cada element de la llista (`#llistaNumeros li`) per ressaltar-los visualment.