$("section#modulo-valoramostupiso-1 button.botonValorar, section#modulo-valoramostupiso-2 button.botonValorar, section#modulo-valoramostupiso-3 button.botonValorar").click(function() {
    var sectionId = $(this).closest("section").attr("id");

    var ciudad=$("section#"+sectionId+" #valorar-ciudad");
    var calle=$("section#"+sectionId+" #valorar-calle");
    var tipologia=$("section#"+sectionId+" #valorar-tipologia");
    var planta=$("section#"+sectionId+" #valorar-planta");
    var habitaciones=$("section#"+sectionId+" #valorar-habitaciones");
    var ascensor=$("section#"+sectionId+" #valorar-ascensor");

    if (ciudad.val().trim()=='') {
        alerta(FALTA_CIUDAD);
        $(ciudad).focus();
        return false;
    }

    if (calle.val().trim()=='') {
        alerta(FALTA_CALLE);
        $(calle).focus();
        return false;
    }

    if (planta.val().trim()=='' && tipologia.val()!="Local Comercial" && tipologia.val()!="Planta Baja" && tipologia.val()!="Chalet Independiente") {
        alerta(FALTA_PLANTA);
        $(planta).focus();
        return false;
    }

    if (habitaciones.val().trim()=='' && tipologia.val()!="Local Comercial") {
        alerta(FALTA_HABITACIONES);
        $(habitaciones).focus();
        return false;
    }

    $("#formu-valoramostupiso #valoracion-ciudad").val(ciudad.val());
    $("#formu-valoramostupiso #valoracion-calle").val(calle.val());
    $("#formu-valoramostupiso #valoracion-tipologia").val(tipologia.val());
    $("#formu-valoramostupiso #valoracion-planta").val(planta.val());
    $("#formu-valoramostupiso #valoracion-habitaciones").val(habitaciones.val());
    $("#formu-valoramostupiso #valoracion-ascensor").val(ascensor.val());

    modalNuestra('segundoPasoValorarmosTuPiso',VALORAMOS_TU_PROPIEDAD);
});


function enviandovaloramostupiso(){$("#modal-valoramostupiso #enviarValoracion").addClass("enviando");}


function enviarValoracionPropiedad() {

    if (!$("#modal-valoramostupiso #textolegal-valoracion").is(":checked")) {
        alerta(ACEPTAR_PRIVACIDAD);
        return false;
    }


    var ciudad=$("input#valoracion-ciudad").val();
    var calle=$("input#valoracion-calle").val();
    var tipologia=$("input#valoracion-tipologia").val();
    var planta=$("input#valoracion-planta").val();
    var habitaciones=$("input#valoracion-habitaciones").val();
    var nombre=$("input#valoracion-nombre").val();
    var email=$("input#valoracion-email").val();
    var telefono=$("input#valoracion-telefono").val();
    var ascensor=$("#valorar-ascensor option:selected").text();

    if (nombre.trim()=='') {
        alerta(FALTA_NOMBRE);
        return false;
    }

    if (!validarEmail(email)) {
        alerta(EMAIL_INCORRECTO);
        return false;
    }

    if (telefono.trim()=='' && TLF_OBLIGATORIO == '1') {
        alerta(ERROR_TELEFONO);
        return false;
    }

    grecaptcha.ready(function() {
        grecaptcha.execute('6LeFvHcUAAAAADkYzbLtZuO5lRdgl6gpLYovrRwl', {action: 'valoramostupiso'}).then(function(token) {
            $.post( "modulos/__ajx/envios/enviosFormularios.php", {beforeSend: enviandovaloramostupiso, token: token, ciudad: ciudad, calle: calle, tipologia: tipologia, planta: planta, habitaciones: habitaciones, nombre: nombre, ascensor: ascensor, email: email, telefono: telefono}, function( data ) {
                if (data.resultado==true) {
                    alerta(data.mensaje);
                    $("#modal-valoramostupiso #enviarValoracion").removeClass("enviando");
                    cerrarModalNuestra($(".modalNuestra"));
                } else
                    alerta(data.mensaje);
            },"json");
        });
    });
}
