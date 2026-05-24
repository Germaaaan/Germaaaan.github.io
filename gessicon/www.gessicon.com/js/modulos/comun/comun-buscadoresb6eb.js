$(document).ready(function(){
    $('body').on('change', '.cajaGrupoTiposZonas .marcarTipoZona', function(){ //marca/desmarca el checkbox
        marcaDesmarcaCheckboxTiposZonas($(this));
    });
    $('body').on('change', '.cajaGrupoTiposZonas .marcarGrupoTiposZonas', function(){ //marca/desmarca al seleccionar los grupos de tipos
        marcaDesmarcaGruposTipos($(this));
    });
    $('body').on('change', '.cajaGrupoTiposZonas .marcarTodas', function(){ //marca o desmarca todo al clickar en todos
        marcarDesmarcarTodosTipos($(this));
    });
    $('body').on('click', '.cajaGrupoTiposZonas .grupoTipoZona span', function(){ //marca/desmarca al hacer click en el texto span como si fuera el checkbox
        labelCheckboxGruposTipos($(this));
    });
    $('body').on('click', '.buscadorVerMapa', function(){ //marcamos el mapa en todos los buscadores
        var $obj = $(this);
        if($obj.is(':checked')) {
            $('.buscadorVerMapa:not(:checked)').attr('checked', true);
        }else{
            $('.buscadorVerMapa:checked').attr('checked', false);
        }
    });
    $('body').on('keyup', '.inputBuscador', function(){ //sincroinzamos los inputos con todos los buscadores
        var elTexto = $(this).val();
        var laClase = $(this).attr('claseSincroniza');
        $('.' + laClase).val(elTexto).attr('data-last-valid-value', elTexto);
    });

    $('body').on('keydown', '.inputBuscadorDesde, .inputBuscadorHasta', function(e){
        if (['.', 'e', ',', '+', '-'].includes(e.key)) {
            e.preventDefault();
        }
    });

    $('body').on('input', '.inputBuscadorDesde, .inputBuscadorHasta', function(){
        if (this.type === 'number' && this.validity && this.validity.badInput) {
            this.value = this.getAttribute('data-last-valid-value') || '';
        } else {
            this.setAttribute('data-last-valid-value', this.value);
        }
    });

    //modificamos en todos los buscadores cuando se hace click en una zona
    $('.buscadorZonas').on('click', '.marcarTipoZona', function(){
        var $obj = $(this);
        var elValue = $obj.val();
        if($obj.is(':checked')) {
            $('.cajaGrupoZonas .marcarTipoZona[value="' + elValue + '"]:not(:checked').attr('checked', true).change();
        }else{
            $('.cajaGrupoZonas .marcarTipoZona[value="' + elValue + '"]:checked').attr('checked', false).change();
        }
    });
    //modificamos en todos los buscadores cuando se hace click en un grupo de zona
    $('.buscadorZonas').on('click', '.marcarGrupoTiposZonas', function(){
        var $obj = $(this);
        var elValue = $obj.val();
        if($obj.is(':checked')) {
            $('.cajaGrupoZonas .marcarGrupoTiposZonas[value="' + elValue + '"]:not(:checked)').attr('checked', true).change();
        }else{
            $('.cajaGrupoZonas .marcarGrupoTiposZonas[value="' + elValue + '"]:checked').attr('checked', false).change();
        }
    });
    //modificamos en todos los buscadores cuando se hace click en una zona
    $('.buscadorTipos').on('click', '.marcarTipoZona', function(){
        var $obj = $(this);
        var elValue = $obj.val();
        if($obj.is(':checked')) {
            $('.cajaGrupoTipos .marcarTipoZona[value="' + elValue + '"]:not(:checked)').attr('checked', true).change();
        }else{
            $('.cajaGrupoTipos .marcarTipoZona[value="' + elValue + '"]:checked').attr('checked', false).change();
        }
    });
    //modificamos en todos los buscadores cuando se hace click en un grupo de zona
    $('.buscadorTipos').on('click', '.marcarGrupoTiposZonas', function(){
        var $obj = $(this);
        var elValue = $obj.val();
        if($obj.is(':checked')) {
            $('.cajaGrupoTipos .marcarGrupoTiposZonas[value="' + elValue + '"]:not(:checked)').attr('checked', true).change();
        }else{
            $('.cajaGrupoTipos .marcarGrupoTiposZonas[value="' + elValue + '"]:checked').attr('checked', false).change();
        }
    });

    $('#buscador-lupa-oculto, #buscador-input-oculto').on('click', function(){
        if($("#slider-buscador").css("opacity")=="0") {
            $("#slider-buscador").animate({ opacity: 1}, 500,function() {
                $("#slider-buscador").css("visibility","visible"); //mostramos buscador
                if($("#slider-bloque-buscador").hasClass("slider-bloque-buscador-2")){ //modificamos alineacion
                    $("#slider-slogan").css("text-align","");
                }
            });

            $("#slider-buscador-oculto").fadeOut(500); //ocultamos input y lupa
            if($("#slider-bloque-buscador").hasClass("slider-bloque-buscador-1")) {
                $("#buscador-input-oculto").animate({marginLeft: "-800px"}, 500);
            }
        }
        else{
            $("#slider-buscador").animate({ opacity: 0}, 500,function() { //ocultamos buscador
                $("#slider-buscador").css("visibility","hidden");
            });
            $("#slider-buscador-oculto").fadeIn(500); //mostramos input y lupa

        }
    });

});
