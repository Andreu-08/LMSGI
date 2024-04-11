function mostrarMissatge(){
    let nom = document.getElementById("nom").value;

    let missatge = "Benvingut/da, " + nom +"!";

    document.getElementById("missatge").innerText = missatge;
}
