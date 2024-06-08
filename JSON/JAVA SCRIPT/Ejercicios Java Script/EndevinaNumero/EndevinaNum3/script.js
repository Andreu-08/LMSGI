let numeroSecreto, maxIntents;
let intents = [];

function iniciarJoc() {
    const minNumero = parseInt(document.getElementById('minNumero').value, 10);
    const maxNumero = parseInt(document.getElementById('maxNumero').value, 10);
    maxIntents = parseInt(document.getElementById('maxIntents').value, 10);

    if (isNaN(minNumero) || isNaN(maxNumero) || isNaN(maxIntents) || minNumero >= maxNumero || maxIntents <= 0) {
        alert("Assegura't que els números són vàlids i el mínim és menor que el màxim, i que els intents són majors que zero.");
        return;
    }

    numeroSecreto = Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;
    intents = [];
    document.getElementById('formRang').style.display = 'none';
    document.getElementById('joc').style.display = 'block';
    document.getElementById('llistaNumeros').innerHTML = '';
    document.getElementById('missatge').textContent = '';
}

function endevinar() {
    if (intents.length >= maxIntents) {
        document.getElementById('missatge').textContent = `Has excedit el nombre màxim d'intents! El número era ${numeroSecreto}`;
        document.getElementById('missatge').style.color = 'red';
        return;
    }

    const entradaEndevinalla = document.getElementById('entradaEndevinalla');
    const endevinalla = parseInt(entradaEndevinalla.value, 10);
    const missatge = document.getElementById('missatge');
    const llistaNumeros = document.getElementById('llistaNumeros');

    intents.push(endevinalla);
    let item = document.createElement('li');
    item.textContent = endevinalla;
    llistaNumeros.appendChild(item);

    if (endevinalla === numeroSecreto) {
        missatge.textContent = 'Has endevinat el número!';
        missatge.style.color = 'green';
    } else if (endevinalla < numeroSecreto) {
        missatge.textContent = 'El número és més gran';
        missatge.style.color = 'red';
    } else {
        missatge.textContent = 'El número és més baix';
        missatge.style.color = 'red';
    }
    entradaEndevinalla.value = '';
}

function reiniciar() {
    document.getElementById('formRang').style.display = 'block';
    document.getElementById('joc').style.display = 'none';
}

document.querySelector('form').addEventListener('submit', e => e.preventDefault());

