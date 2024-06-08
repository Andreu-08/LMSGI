 **Títol:** Endevina el Número

**Descripció:**
Crea un joc interactiu en el qual l'usuari ha d'endevinar un número secret generat aleatòriament entre 1 i 100. 
L'objectiu és trobar el número amb el menor nombre d'intents possible. 
El joc donarà retroalimentació en temps real sobre si l'entrada és massa alta, massa baixa o correcta. 
Quan s'encerta el número, el joc felicitarà l'usuari i mostrarà quantes vegades ho ha endevinat.

**Funcions Principals:**

1. **Generació Aleatòria del Número Secret:** Utilitzarém `Math.random()` per generar un número aleatori entre 1 i 100. (Math.floor(Math.random() * 100) + 1;)
2. **Captura de l'Entrada de l'Usuari:** Amb l'element `<input>` per permetre que l'usuari pose els números.
3. **Comparació de l'Entrada de l'Usuari:** Utilitzarém condicionals per comparar l'entrada de l'usuari amb el número secret i proporcionar retroalimentació.
4. **Actualització del Missatge de Retroalimentació:** El missatge s'ha de modificar dinàmicament per donar indicacions a l'usuari.

**Elements Utilitzats:**

**HTML:**
- `<h1>`: Títol del joc.
- `<div>`: Contenidor principal.
- `<input>`: Entrada de l'usuari.
- `<button>`: Botó per endevinar.
- `<div>`: Espai per mostrar retroalimentació.

**JavaScript:**
- **Funció `endevinar()`:** Realitza la lògica principal del joc. Captura l'entrada de l'usuari, compara amb el número secret i actualitza el missatge de retroalimentació.

**CSS:**
- **Estils de Posicionament:** Centra el contingut verticalment i horitzontalment a la pantalla per a una millor presentació.
- **Estils de Color:** Canvia el color del missatge de retroalimentació per indicar si l'entrada és massa alta, massa baixa o correcta.
- **Estils de Botons i Entrades:** Defineix l'aparença dels botons i les entrades d'usuari per a una millor experiència d'usuari.