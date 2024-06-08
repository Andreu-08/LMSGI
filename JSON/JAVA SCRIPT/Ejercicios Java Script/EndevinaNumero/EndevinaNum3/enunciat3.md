**Títol:** Endevina el Número - Versió 3

**Descripció:**
Afegim una restricció de nombre màxim d'intents. L'usuari podrà configurar també el nombre màxim d'intents per endevinar el número secret. 
Si l'usuari excedeix aquest nombre màxim d'intents sense endevinar el número, el joc acabarà i es mostrarà el número secret. 
A més, s'ha afegit la funcionalitat de reiniciar el joc per començar de nou.

**Funcions Principals:**

1. **Configuració del Nombre Màxim d'Intents:** L'usuari pot introduir un nombre màxim d'intents per endevinar el número secret.
2. **Control del Joc:** Si l'usuari no endevina el número abans d'esgotar els intents, el joc finalitzarà i es mostrarà el número secret.
3. **Reinici del Joc:** S'ha afegit la capacitat de reiniciar el joc per començar una nova partida.

**Canvis Respecte a la Versió Anterior:**

- Afegit un camp per al nombre màxim d'intents a la configuració inicial del joc.
- Control d'intents: S'ha implementat la comprovació per veure si l'usuari ha excedit el nombre màxim d'intents.
- Funció de reiniciar: S'ha afegit la funció de reiniciar el joc per començar una nova partida.

**Elements Utilitzats:**

HTML:
- Input per al nombre màxim d'intents (`<input type="number" id="maxIntents" required>`).
- Botó per al formulari de configuració del joc (`<button type="submit">Començar</button>`).

JavaScript:
- Gestió del nombre màxim d'intents introduït per l'usuari (`maxIntents`).
- Comprovació del nombre màxim d'intents abans de permetre continuar amb el joc.
- Afegim un event listener al formulari per gestionar l'enviament dels valors del rang

````
formRang.addEventListener('submit', (e) => {
e.preventDefault(); // Evita que el formulari s'envii de forma predeterminada
````

- Verifiquem que els elements introduïts són val·lids
````
    if (isNaN(minNumero) || isNaN(maxNumero) || isNaN(maxIntents) || minNumero >= maxNumero || maxIntents <= 0) {
        alert('Per favor, introdueix un rang de números vàlid i un nombre màxim d\'intents vàlid.'); // Mostra un missatge d'alerta si els valors no són vàlids
        return;
    }
 ````

CSS:
- Estils per al nou element de nombre màxim d'intents i el botó associat al formulari de configuració.