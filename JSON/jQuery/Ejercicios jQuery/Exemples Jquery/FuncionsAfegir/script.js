$(document).ready(function() {
    // Afegir contingut al final dels paràgrafs
    $("p").append(" <span>Adeu</span>");

    // Afegir contingut al principi dels paràgrafs
    $("p").prepend("<span>Hola</span> ");

    // Afegir contingut abans dels paràgrafs
    $("p").before("<b>Salutació: </b>");

    // Afegir contingut després dels paràgrafs
    $("p").after("<br>");

    // Envolta els paràgrafs amb un div amb la classe 'container'
    $("p").wrap("<div class='container'></div>");
});


