$(document).ready(function(){

    $('#slider-estrella-felchas a').on('click', function(){

        event.preventDefault();

        var $obj = $(this);
        var numDestacados = listados.destacadosestrella.length - 1;
        var siguiente;

        if($obj.hasClass('flecha2-previous')) {
            if(destacadosestrellaActual == 1)
                siguiente =  numDestacados;
            else
                siguiente = destacadosestrellaActual - 1;

        }else if($obj.hasClass('flecha2-next')) {
            if(destacadosestrellaActual >= numDestacados)
                siguiente =  1;
            else
                siguiente = destacadosestrellaActual + 1;
        }else {
            return false;
        }

        if(typeof listados.destacadosestrella[siguiente] == 'undefined') return false;

        rellenaDestacadoEstrella(siguiente);

        destacadosestrellaActual = siguiente;


    });
});


function rellenaDestacadoEstrella(indice)
{

    var datos = listados.destacadosestrella[indice];

    var $objPadre = $('#slider-bloque-estrella');

    $objPadre.find('article.propiedad').attr('onclick', 'window.location.href = "' + datos.urlfichaauto + '"');
    $objPadre.find('.titulo1').html(datos.tituloauto);
    $objPadre.find('.precio1').html(datos.precioauto);
    $objPadre.find('.ref').html(datos.ref);
    $objPadre.find('.habitaciones').html(datos.total_hab);
    $objPadre.find('.banyos').html(datos.banyos);
    $objPadre.find('.superficie').html(datos.superficieauto);
    $objPadre.find('.fotopropiedad').css('background-image', 'url(' + datos.fotoprincipalauto + ')')
        .attr('indice', indice);
    if(datos.numfotos > 0) {
        $objPadre.find('article.propiedad').removeClass('nofoto')
    }else{
        $objPadre.find('article.propiedad').addClass('nofoto')
    }

}


var PosSlider=-3;
var SaltaSlider=false;

function DestacadoCabecera(pos) {
    document.getElementById('slider-textoEstrella').innerHTML=imagesCab[pos+1];
    document.getElementById('slider-textoEstrella').setAttribute("posslider",pos);
    $(".contenedorDatosSliderDestacado").on("click",function(){window.location.assign(imagesCab[pos+2]);})
}

function SliderCabecera(pos){

    if(imagesCab.length < 1) return;

    PosSlider=PosSlider+3;

    if (PosSlider >= imagesCab.length) {PosSlider = 0;pos= 0;}

    if (pos!=null) {
        PosSlider=pos;
        SaltaSlider=false;
        if (PosSlider<0) PosSlider=imagesCab.length-3;
    }
    if (SaltaSlider==false)  {
        $("#img1").fadeOut("slow", function () {
            let backgroundImage =  imagesCab[PosSlider].replace('_*.','_'+letraFoto+'.');
            backgroundImage = backgroundImage.replace(/(\d+-\d+)s(\.jpg)/, '$1$2');

            $(this).css("background-image",`url('${backgroundImage}')`);
            $(this).fadeIn("slow"); DestacadoCabecera(PosSlider);
        });
    } else {
        SaltaSlider=false;
        PosSlider=PosSlider-3;
    }
    if (pos!=null) SaltaSlider=true; //para que se espere una transaccion mas
}

SliderCabecera(0);

if (imagesCab.length>3) {
    setInterval(function() { SliderCabecera(); },4000);
} else {
    if (document.querySelector(".modulo-slider .slider-botonAnterior") != null) {
        document.querySelector(".modulo-slider .slider-botonAnterior").style.display = "none";
        document.querySelector(".modulo-slider .slider-botonSiguiente").style.display = "none";
    }
}