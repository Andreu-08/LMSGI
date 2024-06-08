$(document).ready(function() {
    // Mostrar text del paràgraf
    $('#btnText').click(function() {
        let text = $('#paragraf').text();
        $('#resultat').text('Text del paràgraf: ' + text);
    });

    // Mostrar HTML del paràgraf
    $('#btnHtml').click(function() {
        let html = $('#paragraf').html();
        $('#resultat').text('HTML del paràgraf: ' + html);
    });

    // Mostrar valor de l'input
    $('#btnVal').click(function() {
        let valor = $('#inputText').val();
        $('#resultat').text('Valor de l\'input: ' + valor);
    });

    // Mostrar atribut href de l'enllaç
    $('#btnAttr').click(function() {
        let href = $('#link').attr('href');
        $('#resultat').text('Atribut "href" de l\'enllaç: ' + href);
    });
});


$("a").removeAttr("href"); // Elimina l'atribut href de tots els enllaços (<a>)

