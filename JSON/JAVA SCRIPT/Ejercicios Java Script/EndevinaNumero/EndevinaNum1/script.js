// JavaScript para EndevinaNum1
const numrandom = Math.floor(Math.random()*100 +1);
console.log(numrandom);
function endevinar(){

    let entradaEndevinalla = document.getElementById('entradaEndevinalla');
    let endevinalla = parseInt(entradaEndevinalla.value);
    let missatge = document.getElementById('missatge')


    if (endevinalla === numrandom) {
        missatge.textContent = 'Has endevinat el numero';
        missatge.style.color = 'green';
    }else if(endevinalla < numrandom){
        missatge.textContent = 'El numero es mes gran';
        missatge.style.color = 'red';
    }else{
        missatge.textContent = 'El numero es mes baix';
        missatge.style.color = 'red';
    }

    entradaEndevinalla.value = '';


}