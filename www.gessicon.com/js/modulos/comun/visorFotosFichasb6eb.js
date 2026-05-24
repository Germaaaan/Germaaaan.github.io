var inicioMovimientoRatonVisor = 0;
var metaViewportOriginal;

$('document').ready(function(){
    //evento para visor de fotos de fichas
    $('.visorficha .visorficha-miniaturas li').on('click', function(){
        var $obj = $(this);
        var lafoto = $obj.attr('cargafoto');
        //le quitamos la S de miniatura
        lafoto = lafoto.replace(/([0-9]+-[0-9]+)s/, "$1");

        if (typeof(arr_antesydespues)!="undefined") {
            if(arr_antesydespues[parseInt(lafoto.match(/([0-9]{1,3})/gm).pop())]!=undefined) {
                $("#fichapropiedad-bloquevisor a.verAntesYDespues").attr('fotoActual',parseInt(lafoto.match(/([0-9]{1,3})/gm).pop()));
                $("#fichapropiedad-bloquevisor a.verAntesYDespues").fadeIn(80);
            } else {
                $("#fichapropiedad-bloquevisor a.verAntesYDespues").attr('fotoActual',0);
                $("#fichapropiedad-bloquevisor a.verAntesYDespues").fadeOut(50);
            }
        }

        $obj.closest('.visorficha').find('.visorficha-principal').css('background-image', 'url(' + lafoto + '), url(img/nofotos.png)');
    });

    $('.visorficha .visorficha-principal').on('touchstart', function(event){
        //si esta en movil y a fullscreen saltamos el pasar imagen con el dedo por si quiere hacer zoom en la foto
        if(esMovil && $(this).hasClass('fullscreened')) return;
        inicioMovimientoRatonVisor = event.changedTouches[0].pageX;
    });

    $('.visorficha .visorficha-principal').on('touchend', function(event){
        //si esta en movil y a fullscreen saltamos el pasar imagen con el dedo por si quiere hacer zoom en la foto
        if(esMovil && $(this).hasClass('fullscreened')) return;

        var $obj = $(this);
        var nuevaPosicion = event.changedTouches[0].pageX;

        cambiaFotoTouch($obj, nuevaPosicion);
    });

    $('.visorficha .visorficha-principal').on('mousedown', function(event){
        inicioMovimientoRatonVisor = event.offsetX;
    });

    $('.visorficha .visorficha-principal').on('mouseup', function(event){
        var $obj = $(this );
        var nuevaPosicion = event.offsetX;

        cambiaFotoTouch($obj, nuevaPosicion);

    });

    $('.visorficha .visorficha-miniaturas ul').on('scroll', function(event){
        $obj = $(this);
        fotosAlVueloMiniaturasVisorFotos($obj);
    });


    $('.visorficha .visorficha-fullscreen').on('click', function(event){
        event.preventDefault();
        var $obj = $(this);
        var $padre = $obj.closest('.visorficha-principal');
        var $objMetas = $('head').find('meta[name="viewport"]');
        var metaParaPantallaCompleta = 'width=device-width, user-scalable=yes, minimum-scale=1.0';

        if($obj.hasClass('fullscreened')) {
            //dejamos la meta como estaba antes de pantalla completa
            if($objMetas.length > 0) {
                $objMetas.attr('content', metaViewportOriginal);
            }

            $padre.removeClass('fullscreened');
            $obj.removeClass('fullscreened');
            //mostramos tambien la capa de estado ficha si existe
            $padre.find('.visorficha-bg-estadogestionadas').show();
        }else{
            //adaptamos la meta del viewport para que se pueda hacer zoom
            if($objMetas.length > 0) {
                metaViewportOriginal = $objMetas.attr('content');
                $objMetas.attr('content', metaParaPantallaCompleta);
            }

            $padre.addClass('fullscreened');
            $obj.addClass('fullscreened');
            //ocultamos tambien la capa de estado ficha si existe
            $padre.find('.visorficha-bg-estadogestionadas').hide();
        }
    });

    $('.visorficha').on('keyup', '.visorficha-principal.fullscreened',function(event){
        if(event.keyCode == '27') {
            event.preventDefault();
            $(this).find('.visorficha-fullscreen.fullscreened').click();
        }
    });

    var $contenedorScrollable = $('.visorficha .visorficha-miniaturas');
    var $contenidoScrollable = $('.visorficha .visorficha-miniaturas ul');
    bindDragScroll($contenedorScrollable, $contenidoScrollable);

    //hacemos la carga inicial de las fotos al vuelo de las miniaturas
    fotosAlVueloMiniaturasVisorFotos($('.visorficha .visorficha-miniaturas ul'));

});

function fotosAlVueloMiniaturasVisorFotos($obj)
{
    var posicionScroll, anchoCajaScroll, posicionScrollMaxima;
    $obj.each(function(key, val){
        $xObj = $(val);
        posicionScroll = $xObj.scrollLeft();
        anchoCajaScroll = $xObj.closest('.visorficha-miniaturas').innerWidth();
        // posicionScrollMaxima = posicionScroll + anchoCajaScroll - (anchoCajaScroll * 0.13);
        posicionScrollMaxima = posicionScroll + anchoCajaScroll + 100;

        $xObj.find(' > li:not(.fotoCargada):not(.nofoto)').each(function(key2, val2){
            $objFoto = $(val2);
            var posicionFoto = val2.offsetLeft;
            if(posicionFoto >= posicionScroll && posicionFoto <= posicionScrollMaxima) {
                var lafoto = $objFoto.attr('cargafoto');
                $objFoto.css('background-image', 'url(' + lafoto + ')').addClass('fotoCargada');
            }
        });
    });

}

function cambiaFotoTouch($obj, nuevaPosicion)
{

    var siguiente = true; //por defecto pasamos a la foto anterior
    if(nuevaPosicion >= inicioMovimientoRatonVisor) {
        siguiente = false;
    }
    var diferencia = Math.abs(inicioMovimientoRatonVisor - nuevaPosicion);
    //si no es mas de 15 pixeles contamos como que no ha hecho la accion para cambiar de foto
    if(diferencia < 40) return false;

    if(siguiente) {
        $obj.find('.flechanext').click()
    }else{
        $obj.find('.flechaprev').click()
    }

}