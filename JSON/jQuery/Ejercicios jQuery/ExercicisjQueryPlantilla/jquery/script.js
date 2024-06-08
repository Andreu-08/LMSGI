$(document).ready(function() {
    // Exercici 1: Inicialització JQuery
    // No cal codi jQuery aquí, ja que es tracta de la inicialització.

    // Exercici 2: Sintaxi JQuery
    $("#paragraf").hide(); // Amagar el paràgraf inicial
    $("#btnText").click(function() {
        $("#paragraf").show(); // Mostrar el paràgraf ocult
    });
    $("#btnVal").click(function() {
        $("#paragraf").fadeIn(); // Desvanir el paràgraf inicial de manera gradual
    });
    var toggleState = false;
    $("#btnToggle").click(function() {
        $("#paragraf").toggle(); // Alternar l'estat de visibilitat del paràgraf inicial
    });

    // Exercici 3: Obtenció i Modificació de Dades
    $("#btnText").click(function() {
        var text = $("#paragraf").text();
        $("#resultat").text(text);
    });

    $("#btnVal").click(function() {
        var value = $("#inputText").val();
        $("#resultat").text(value);
    });
    $("#btnAttr").click(function() {
        var href = $("#link").attr("href");
        $("#resultat").text(href);
    });

    // Exercici 4: Afegir Dades
    $("#btnAddParagraph").click(function() {
        $(".container").append("<p>Aquest és un paràgraf afegit dinàmicament.</p>");
    });

    // Exercici 5: Esborrar Dades
    $("#btnClearContainer").click(function() {
        $(".container").empty();
    });
    $("#btnClearResult").click(function() {
        $("#resultat").empty();
    });

    // Exercici 6: Manipulació de CSS
    $("#btnHighlight").click(function() {
        $("p").addClass("highlight");
    });
    $("#btnRemoveHighlight").click(function() {
        $("p").removeClass("highlight");
    });
});