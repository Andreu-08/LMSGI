let numeroSecreto;
let intents = [];

function iniciarJoc() {
    const minNumero = parseInt(document.getElementById('minNumero').value, 10);
    const maxNumero = parseInt(document.getElementById('maxNumero').value, 10);

    if (minNumero >= maxNumero || isNaN(minNumero) || isNaN(maxNumero)) {
        alert("Assegura't que els números són vàlids i el mínim és menor que el màxim.");
        return;
    }

    numeroSecreto = Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;
    console.log(numeroSecreto);
    document.getElementById('formRang').style.display = 'none';
    document.getElementById('joc').style.display = 'block';
}

function endevinar() {
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

document.querySelector('form').addEventListener('submit', e => e.preventDefault());
