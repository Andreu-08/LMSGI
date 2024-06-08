$(document).ready(function(){
    // Buida el contingut del div 1 quan es fa clic al botó "Buida Contingut Div 1"
    $("#buida").click(function(){
        $("div:nth-child(1)").empty();
        // Div 1 estarà buit, però encara existirà al DOM
    });

    // Elimina el div 2 completament quan es fa clic al botó "Elimina Div 2"
    $("#elimina").click(function(){
        $("div:nth-child(2)").remove();
        // Div 2 i tot el seu contingut seran eliminats completament del DOM
    });

    // Elimina el contenidor directe dels elements seleccionats quan es fa clic al botó "Elimina Contenidor Directe"
    $("#unwrap").click(function(){
        $("p").unwrap();
        // Elimina el div.contenidor deixant només el paràgraf
    });

    // Elimina l'atribut href de tots els enllaços quan es fa clic al botó "Elimina Atribut Href"
    $("#eliminar-attr").click(function(){
        $("a").removeAttr("href");
        // S'eliminarà l'atribut href de tots els enllaços <a>
    });
});
