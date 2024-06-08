function operacionsMat() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let resultatsDiv = document.getElementById("resultat");

    if (!isNaN(num1) && !isNaN(num2)) {
        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacio = num1 * num2;
        let divisio = num1 / num2;

        resultatsDiv.innerHTML =`
        <p>Suma: ${suma}</p>
        <p>Resta: ${resta}</p>
        <p>Multiplicacio: ${multiplicacio}</p>
        <p>Divisio: ${divisio}</p>`
    } else {
        resultatsDiv.innerText = "Introdueix nombres valids"
    }
}