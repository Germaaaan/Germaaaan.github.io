$(document).ready(function(){
    $('#paginacion-numPaginas a').on('click', function(event){
        event.preventDefault();

        var irApagina = $(this).html();

        cambiarApagina(irApagina);
    });
    $('.irAPaginaSiguiente').on('click', function(event){
        event.preventDefault();
        var paginaSiguiente = paginaActual + 1;
        cambiarApagina(paginaSiguiente);
    });
    $('.irAUltimaPagina').on('click', function(event){
        event.preventDefault();
        cambiarApagina(paginasTotales);
    });
    $('.irAPrimeraPagina').on('click', function(event){
        event.preventDefault();
        cambiarApagina(1);
    });
    $('.irAPaginaAnterior').on('click', function(event){
        event.preventDefault();
        if(paginaActual === 1) return true;
        var paginaAnterior = paginaActual - 1;
        cambiarApagina(paginaAnterior);
    });
    $('.irApagina').on('keyup', function(event){
        event.preventDefault();

        if(event.keyCode !== 13) return true;

        var irApagina = $(this).val();

        if(paginaActual === irApagina) return true;

        if(isNaN(irApagina) || irApagina < 1) {
            alert('Página incorrecta: ' + irApagina);
            $(this).val('');
            return true;
        }
        if(irApagina > paginasTotales) {
            alert('Página incorrecta: ' + irApagina + ', la última página es ' + paginasTotales);
            $(this).val('');
            return true;
        }

        cambiarApagina(irApagina);
    });
    $('.numElementosPorPagina').on('change', function(event){
        event.preventDefault();
        var xNumelementosPorPagina = $(this).val();

        var objParametro = {
            'res'           : xNumelementosPorPagina,
            'pag'           : 1
        };
        anyadirParamentroAurlYredirigir(objParametro, hastagPaginacion);
    });

    // $("#paginacion-contenido .paginacion-ficha").on("mouseenter mouseleave",function(a){
    //     $(this).find(".paginacion-contacto").fadeToggle();
    // });

    $('#paginacion-ordenarprops').on('change', function(){
        const inmovillaPages = {
            'ALQUILER': 'alquiler.php',
            'VENTA': 'venta.php',
            'PROMOCIONES': 'promociones.php',
            'TEMPORADA': 'temporada.php',
            'BANCO': 'banco.php',
        };

        const valOrdenar = $(this).val();
        const url = new URL(window.location.href);
        const dirurl = url.pathname;
        const es_promo = dirurl.includes(inmovillaPages.PROMOCIONES);
        const es_venta = dirurl.includes(inmovillaPages.VENTA);
        const es_alquiler = dirurl.includes(inmovillaPages.ALQUILER);
        const es_temporada = dirurl.includes(inmovillaPages.TEMPORADA);
        const es_bancario = dirurl.includes(inmovillaPages.BANCO);
        let redireccionar_a = dirurl.substring(1);

        if (es_promo) {
            redireccionar_a = inmovillaPages.PROMOCIONES;
        } else if (es_venta && (valOrdenar == 5 || valOrdenar == 6)) {
            redireccionar_a = inmovillaPages.VENTA;
        } else if (es_alquiler && (valOrdenar == 5 || valOrdenar == 6)) {
            redireccionar_a = inmovillaPages.ALQUILER;
        } else if (es_temporada && (valOrdenar == 5 || valOrdenar == 6)) {
            redireccionar_a = inmovillaPages.TEMPORADA;
        } else if (es_bancario && (valOrdenar == 5 || valOrdenar == 6)) {
            redireccionar_a = inmovillaPages.BANCO;
        }

        //var nuevaUrl = anyadirParametrosAurl({'orden' : valOrdenar});
        window.location.href = anyadirParametrosAurl({'orden': valOrdenar}, redireccionar_a);
    })

});

function cambiarApagina(pagina)
{
    var objParametro = {'pag' : pagina, 'idio' : idio};
    anyadirParamentroAurlYredirigir(objParametro, hastagPaginacion);
}