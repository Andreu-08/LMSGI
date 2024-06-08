let operacioSeleccionada = ''; //variable per a saber la operacion en el swich
let primerNum = ''; //guarda el primer numero de la operacio
let segonNum = ''; // guarda el segon numero de la operacio

//funcio per a poder utilitzar els numero en la calculadora
function presionarNum(num){
    //variable que guardara el valor al element amb id pantalla
    let pantalla = document.getElementById('pantalla');

    if(pantalla.value === '0') {
        //indiquem que la variable num tinga el valor de la pantalla (en este cas 0 per defecte)
        pantalla.value = num;
    }else{
        //el element de la pantalla que es 0 per defecte se suma al valor que li marquem
        pantalla.value += num;
    }

}
//funcio pero a poder utilitzar els operadors a la calculadora
function operacio(operador){
    primerNum = document.getElementById('pantalla').value;
    //asi indiquem que se guarde la seleccio del operador que volem utilizar y la pantalla es coloque a 0 per a esperar el seguent valor
    operacioSeleccionada = operador;
    document.getElementById('pantalla').value ='0';
}

//funcio per a fer els calculs
function calcular(){
    //cambiem el valor de la variable per a guardar el segon numero amb el valor indicat a la pantalla y amb el que es fara la operacio
    segonNum = document.getElementById('pantalla').value;
    let resultat = 0; //almaçena el resultat

    //swich per a totes les opcions segons el operador que seleccionem
    switch (operacioSeleccionada) {
        case "+":
            //operacio convertint els valors a int ya que eren strings (parseInt)
            resultat = parseInt(primerNum) + parseInt(segonNum);
            break;
        case "-":
            resultat = parseInt(primerNum) - parseInt(segonNum);
            break;
        case "*":
            resultat = parseInt(primerNum) * parseInt(segonNum);
            break;
        case "/":
            resultat = parseInt(primerNum) / parseInt(segonNum);
            break;
    }
    //indiquem que a la pantalla es mostre el valor del resultat de la operacion (toString())
    document.getElementById('pantalla').value = resultat.toString();

}
//funcio per a limpiar la pantalla de la calculadora y resetejar les operacions
function limpiar(){
    //el valor de lelement pantalla pasa a 0
    document.getElementById('pantalla').value = '0';
    //totes les variables tant dels numeros com dels operadors es tornen per defecte
    operacioSeleccionada = '';
    primerNum = '';
    segonNum = '';
}