$(document).ready(function (){//inicailitzem jQuery
    //cambiem el contingut del paragraf amb id text
    //amb hover manjem el event al entrar y ixir amb el ratoli
    const contingutP = $('#text').text();//guardem el contingut del paragraf per tornarlo a mostrar
    $("#text").hover(function(){
        //cambien contingut
      $("#text").text("Cambiem contingt paragraf")
  }, function (){
        //mostrem contingut de nou
      $("#text").text(contingutP)
  });

    //añadim contingut amb en input
    //cambien el css del imput al tindre el foco en ell
    $("#inputText").focus(function (){//al posat el foco (focus)
      $("#inputText").css('background-color', 'lightgray')
    })
    $("#inputText").blur(function (){//al llevar el foco (blur)
        $("#inputText").css('background-color', 'white')
    })
    /*
    al escriure al input (.keyup) fem que al div amb id 'resultat'
    se introuixca el text (.text) amb el valor del input (.val)
     */
    $("#inputText").keyup(function (){
        $("#resultat").text($("#inputText").val())
    })

    //cambiem el text de l'enllaç prevenint el seu comportament
    $("#link").click(function(event){
        event.preventDefault() //prevenim el comportament per defecte
        //utilitzem 'this' per indicar que es el element que tenim seleccionat a la funcio
        $(this).text("Enllaç clicat");
    })

    //cambiem el color de fons del contenidor principal
    $("#container").dblclick(function(){
     $(this).css('background-color','lightblue')
    })

    /*cambiem de color el parafraf de exemple afegintli una nova clase
    * al pasarli el ratoli per damunt*/
    $("#text").mouseenter(function(){
        $(this).addClass("highlight");
    });
    $("#text").mouseleave(function(){
        $(this).removeClass("highlight");
    });

    //afegim text al presionar la teclat enter
    $('#inputText').on('keypress', function(event){
        if(event.which === 13){ //13 es el codigo de la tecla enter
            event.preventDefault();//evitem el comportament per defecte de la tecla
            const textInput = $(this).val();//valor del contingut del input
            if(textInput.length > 0){//cuan el valor del input es major que 0 (conté text)
                $('#container').append('<p>' + textInput + '</p>')//afegim aquest contingut al element amb el id 'container' (div principal)
                //buidem el contingu del input (this)
                $(this).val('');
            }
        }
    });

    //color intermitent del contenidor al desplaçarse per la pagina
    $(window).scroll(function(){//seleccionem tota la pagina (window) y li afegim una funcio .scroll
        $('#container').toggleClass('scrolling');//alternem la clase .scrolling cuan pase el event
    });
});