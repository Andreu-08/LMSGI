function calcularSuma() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultat = num1 + num2;
        document.getElementById("resultat").innerText = "La suma es : " + resultat
    } else {
        document.getElementById("resultat").innerText = "Introdueix numeros";
    }
}