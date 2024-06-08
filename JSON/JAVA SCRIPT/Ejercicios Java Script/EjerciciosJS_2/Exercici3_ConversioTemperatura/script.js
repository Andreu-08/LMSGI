function conversioTemperatura() {
    let numC = parseFloat(document.getElementById("numC").value);
    let numF = (numC * 9/5) +32;

    document.getElementById("resultat").innerText = "La temperatura en Farenheit es: " + numF;

}