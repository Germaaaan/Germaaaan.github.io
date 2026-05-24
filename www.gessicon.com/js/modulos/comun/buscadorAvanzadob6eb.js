$(document).ready(function(){
    //mostramos el buscador avanzado al cargar si se tiene que mostrar
    if(mostrarBuscadorAvanzado) {
        $('.buscadorAvanzado').css('display', 'flex').find('.ocultar').hide();
    }
    $('.fuerzaBusquedaAvanzado').on('keyup', function(event){
        if(event.keyCode != 13) return true;

        var $obj = $(this);
        $obj.closest('.buscadorAvanzado').find('.buscarAvanzado').click();
    });
    $('.buscadorAvanzado .ocultar').on('click', function(){
        $(this).closest('.buscadorAvanzado').slideUp(200);
    });
});


function busquedaBuscadorAvanzado($obj)
{
    var qryGet = '';
    var $buscadorAvanzado = $obj.closest('.buscadorAvanzado');
    var hasTagUsar = hastagPaginacion;

    //obtenemos los tipos
    var checkedTipos = $buscadorAvanzado.find('.cajaGrupoTipos input[type=checkbox].marcarTipoZona:checked');
    var keytipos = Object.keys(checkedTipos).map(function(key){
        return typeof checkedTipos[key].value == 'undefined' ? false : checkedTipos[key].value;
    }).filter(tipo => tipo !== false);

    if(keytipos.length > 0) {
        keytipos = $.unique(keytipos);
        var keyTiposString = keytipos.join(',');
        qryGet += '&limtipos=' + keyTiposString;
    }

    let valorAreas = $buscadorAvanzado.find('iv-buscador-areas-webs').val()
    if(valorAreas != '') {
        qryGet += '&areas=' + valorAreas;
    }

    var precioDesde = $buscadorAvanzado.find('#preciodesdeAvanzado').val();
    if(precioDesde != '' && precioDesde != '0') {
        qryGet += '&preciodesde=' + precioDesde;
    }
    var precioHasta = $buscadorAvanzado.find('#preciohastaAvanzado').val();
    if(precioHasta != '' && precioHasta != '0') {
        qryGet += '&preciohasta=' + precioHasta;
    }

    var refRapido = $buscadorAvanzado.find('#limref2').val();
    if(refRapido != '') {
        qryGet += '&limref=' + encodeURIComponent(refRapido);
    }

    var metrosCuadrados = $buscadorAvanzado.find('#metros').val();
    if(parseInt(metrosCuadrados) > 0) {
        qryGet += '&metros=' + metrosCuadrados;
    }

    var metrosCuadrados2 = $buscadorAvanzado.find('#metros2').val();
    if(parseInt(metrosCuadrados2) > 0) {
        qryGet += '&metros2=' + metrosCuadrados2;
    }

    var habitaciones = $buscadorAvanzado.find('#limhab').val();
    if(parseInt(habitaciones) > 0) {
        qryGet += '&limhab=' + habitaciones;
    }

    var banos = $buscadorAvanzado.find('#limbanos').val();
    if(parseInt(banos) > 0) {
        qryGet += '&limbanos=' + banos;
    }

    //checkboxes
    if($buscadorAvanzado.find('#chkventa').is(':checked')) {
        qryGet += '&limventa=1';
    }
    if($buscadorAvanzado.find('#chkalquiler').is(':checked')) {
        qryGet += '&limalquiler=1';
    }
    if($buscadorAvanzado.find('#opcioncompra').is(':checked')) {
        qryGet += '&opcioncompra=1';
    }
    if($buscadorAvanzado.find('#chkalquilervacacional').is(':checked')) {
        qryGet += '&alquilervacacional=1';
    }
    if($buscadorAvanzado.find('#chktraspaso').is(':checked')) {
        qryGet += '&limtraspaso=1';
    }
    if($buscadorAvanzado.find('#piscina').is(':checked')) {
        qryGet += '&piscina=1';
    }
    if($buscadorAvanzado.find('#parking').is(':checked')) {
        qryGet += '&parking=1';
    }
    if($buscadorAvanzado.find('#ascensor').is(':checked')) {
        qryGet += '&ascensor=1';
    }
    if($buscadorAvanzado.find('#terraza').is(':checked')) {
        qryGet += '&terraza=1';
    }
    if($buscadorAvanzado.find('#muebles').is(':checked')) {
        qryGet += '&muebles=1';
    }
    if($buscadorAvanzado.find('#urbanizacion').is(':checked')) {
        qryGet += '&urbanizacion=1';
    }
    if($buscadorAvanzado.find('#obranueva').is(':checked')) {
        qryGet += '&obranueva=1';
    }
    if($buscadorAvanzado.find('#vistasalmar').is(':checked')) {
        qryGet += '&vistasalmar=1';
    }

    var $moduloPaginacion = $('.modulo-paginacion');
    var orden = '';
    if($moduloPaginacion.length > 0) {
        orden = $moduloPaginacion.find('#paginacion-ordenarprops').val();
    }
    if(orden != '' && orden != null) {
        qryGet += '&orden=' + orden;
    }

    if(qryGet != '') qryGet += '&av=1&buscador=1';

    //quitamos el primer &
    qryGet = qryGet.replace(/^\s*\&/, '');

    var parametros = qryGet != '' ? '?' + qryGet : '';

    var resolverEn = esListado ? actual : 'index.php';

    window.location.href = resolverEn + parametros;

}