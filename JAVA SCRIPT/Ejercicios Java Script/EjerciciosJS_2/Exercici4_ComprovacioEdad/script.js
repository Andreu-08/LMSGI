function comrovaEdad() {
    let edad = parseFloat(document.getElementById("edad").value);
    if (edad >= 18) {
        document.getElementById("resultat").innerText = "Eres major de edad";
    } else if (edad <= 0) {
        document.getElementById("resultat").innerText = "No estas viu";
    }else{
        document.getElementById("resultat").innerText = "Eres menor de edad";
    }
}