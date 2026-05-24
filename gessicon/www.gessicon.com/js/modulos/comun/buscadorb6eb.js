$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);

    //carga ciudades en buscador provincia
    $('.buscadorProvinciaRapido').on('change', function(){
        var keyprov = $(this).val();
        if(keyprov == '') return false;
        $('.buscadorProvincia').val(keyprov);
        var $destino = $('.buscadorCiudad');
        cargarCiudadesEnSelectCiudades(keyprov, $destino, false, true);
    });
    //carga las zonas al elegir ciudad
    $('.buscadorCiudadRapido').on('change', function(){
        if($(this).find('option:selected').hasClass('selectCiudad-prov')) //paramos el evento si hemos seleccionado una provincia del listado de ciudades
            return false;

        var keyciu = $(this).val();
        if(keyciu == '') return false;

        let original_txt = '';
        $('.buscadorZonas').each((key, val) => {
            if($(val).attr('original-txt') != '') {
                $('.buscadorZonas').attr('data-txt', $(val).attr('original-txt'));
                return false;
            }
        });

        $('.buscadorCiudad').val(keyciu);
        var $destino = $('.buscadorZonas');
        busCargarZonasEnSelectZonas(keyciu, $destino);
    });
    $('.fuerzaBusqueda').on('keyup', function(event){
        if(event.keyCode != 13) return true;

        var $obj = $(this);
        $obj.closest('.buscadorRapido').find('.buscarRapido').click();
    });
    $('#slider-bloque-buscador .avanzado, #cabecera-buscador .avanzado').on('click', function(){
        var $avanzado = $($('.buscadorAvanzado')[0]);
        $avanzado.show();
        var topAvanzado = $avanzado.offset().top;
        $('html, body').animate({
            scrollTop: topAvanzado
        }, 500);
    });

    if(urlParams.get('areas') != '') {
        document.querySelectorAll('iv-buscador-areas-webs').forEach(async buscador => {
            await buscador._buscar('');
            buscador._viendoInputBusqueda = true;
            buscador._cerrar();
            $('iv-buscador-areas-webs').val(urlParams.get('areas'));
        });
    }
});


function busCargarZonasEnSelectZonas(keyciu, $destino)
{

    let keyciu_split = keyciu.split(';');
    keyciu = keyciu_split[0];
    let keysdistritos_arr = keyciu_split[1] ? keyciu_split[1].split(',') : [];

    $.ajax({
        'url'           : 'modulos/__ajx/buscador/rellenaSelectZonas.php',
        'method'        : 'post',
        'data'          : {
            'keyciu'        : keyciu,
            'devolverJson'  : true
        },
        'dataType'      : 'json'
    })
        .done(function(data){
            if(!data.correcto) {
                alert('ha fallado al cargar las zonas');
                return false;
            }

            $destino.html(data.html);

            keysdistritos_arr.forEach(keydistrito => {
                $destino.find(`.marcarGrupoTiposZonas[iddistrito='${keydistrito}']`).attr('checked', true).change();
            })

        })
        .fail(function(e){
            console.error('Ha fallado al pedir ciudades con error:');
            console.error(e);
            alert('ha fallado al cargar las ciudades')
        });
}

function busquedaBuscadorRapido($obj)
{
    var qryGet = '';
    var $buscadorRapido = $obj.closest('.buscadorRapido');
    var verMapa = $buscadorRapido.find('.buscadorVerMapa').is(':checked');
    var hasTagUsar = hastagPaginacion;

    //obtenemos los tipos
    var checkedTipos = $buscadorRapido.find('.cajaGrupoTipos input[type=checkbox].marcarTipoZona:checked');
    var keytipos = Object.keys(checkedTipos).map(function(key){
        return (typeof checkedTipos[key].value == 'undefined' || checkedTipos[key].value == '') ? false : checkedTipos[key].value;
    }).filter(tipo => tipo !== false);

    if(keytipos.length > 0) {
        keytipos = $.unique(keytipos);
        var keyTiposString = keytipos.join(',');
        qryGet += '&limtipos=' + keyTiposString;
    }

    //obtenemos las zonas
    var checkedZonas = $buscadorRapido.find('.cajaGrupoZonas input[type=checkbox].marcarTipoZona:checked');

    let valorAreas = $buscadorRapido.find('iv-buscador-areas-webs').val()
    if(valorAreas != '') {
        qryGet += '&areas=' + valorAreas;
    }

    if(verMapa) {
        qryGet += '&vermapa=1';
        hasTagUsar = hastagPaginacionMapa;
    }

    var precioDesde = $buscadorRapido.find('#precioDesdeRapido').val();
    if(precioDesde != '' && precioDesde != '0') {
        qryGet += '&preciodesde=' + precioDesde;
    }
    var precioHasta = $buscadorRapido.find('#precioHastaRapido').val();
    if(precioHasta != '' && precioHasta != '0') {
        qryGet += '&preciohasta=' + precioHasta;
    }

    var refRapido = $buscadorRapido.find('#refRapido').val();
    if(refRapido != '') {
        qryGet += '&limref=' + encodeURIComponent(refRapido);
    }

    var $moduloPaginacion = $('.modulo-paginacion');
    var orden = '';
    if($moduloPaginacion.length > 0) {
        orden = $moduloPaginacion.find('#paginacion-ordenarprops').val();
    }
    if(orden != '' && orden != null) {
        qryGet += '&orden=' + orden;
    }

    if(qryGet != '') qryGet += '&buscador=1';

    if (verMapa) qryGet += '#modulo-paginacionmapa';

    //quitamos el primer &
    qryGet = qryGet.replace(/^\s*\&/, '');

    var idioma = '';
    if (idio != '')
        idioma = '&idio=' + idio;

    var parametros = qryGet != '' ? '?' + qryGet + idioma : '';

    var resolverEn = esListado ? actual : 'index.php';

    window.location.href = resolverEn + parametros;

}
