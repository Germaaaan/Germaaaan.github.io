$(".modulos-suscribete button.accionEnviar").click(function() {
    var emailSuscripcion=$(".modulos-suscribete .emailSuscripcion").val();

    if (!validarEmail(emailSuscripcion)) {
        alerta(EMAIL_INCORRECTO);
        return false;
    }

    if (!$(".modulos-suscribete #checkPolitica").is(":checked")) {
        alerta(ACEPTAR_PRIVACIDAD);
        return false;
    }

    if (!$(".modulos-suscribete #checkNewsletter").is(":checked")) {
        alerta(ACEPTAR_NEWSLETTERS);
        return false;
    }

    function enviandoSuscribete(){
        switch ($(".modulos-suscribete").closest("section").prop("id")) {
            case "modulo-suscribete-2" :
                $(".modulos-suscribete .resultadoSuscribete").css("display","inline-block");
                break;
            default :
                $(".modulos-suscribete .botonEnviar").addClass("enviando");
                break;
        }
    }

    grecaptcha.ready(function() {
        grecaptcha.execute('6LeFvHcUAAAAADkYzbLtZuO5lRdgl6gpLYovrRwl', {action: 'suscribete'}).then(function(token) {
            $.post( "modulos/__ajx/envios/enviosFormularios.php", {beforeSend: enviandoSuscribete, token: token, emailSuscripcion: emailSuscripcion}, function( data ) {

                switch ($(".modulos-suscribete").closest("section").prop("id")) {
                    case "modulo-suscribete-2" :
                        $(".modulos-suscribete .resultadoSuscribete").css("display","none");
                        break;
                    default :
                        $(".modulos-suscribete .botonEnviar").removeClass("enviando");
                        break;
                }

                alerta(data.mensaje);
            },"json");
        });
    });
});


$("#txtPoliticaSuscribete").click(function () {
    modalNuestra('mytextoprivacidadFooter',POLITICA_PRIVACIDAD);
});