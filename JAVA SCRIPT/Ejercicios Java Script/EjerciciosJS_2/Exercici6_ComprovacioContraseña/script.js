function comprovaContraseña() {
    let passw = (document.getElementById("passw").value);
    let comprovacio = (document.getElementById("comprovacio"));

    let majuscules = false;
    let minuscules = false;
    let num = false;

    //comporvem si la contraseña te menos de 8 caracters
    if (passw.length < 8) {
        comprovacio.innerText = "La contraseña ha de tindre al menys 8 caracters";

    }else{
        for (let i = 0; i < passw.length; i++){

            let caracter = passw.charAt(i); // guarda el caracer que anirem comprovant

            //comprovem si el caracter es un numero
            if(!isNaN(caracter * 1)){
                num = true;
                //comprovem que continga una majuscula
            }else if (caracter === caracter.toUpperCase()){
                if (caracter !== caracter.toLowerCase())
                    majuscules = true;
                //comprovem si hi ha una minuscula
            }else if (caracter === caracter.toLowerCase()){
                if(caracter !== caracter.toUpperCase())
                minuscules = true;
            }
        }
        if(!majuscules){
            comprovacio.innerText = "Es necesaria una majuscula";
        } else if(!minuscules){
            comprovacio.innerText = "Es necesaria una minuscula";

        } else if (!num){
            comprovacio.innerText = "Es necesari un numero"
        }else{
            comprovacio.innerText = "La contraseña es correcta"
        }
    }

}