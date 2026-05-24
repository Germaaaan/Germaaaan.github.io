$("#modulo-pie-1 button.botonEnviar, #modulo-pie-2 button.botonEnviar, #modulo-pie-3 button.botonEnviar").click(function () {

    if (!$("#modulo-pie-1 #textolegal3, #modulo-pie-2 #textolegal3 ,#modulo-pie-3 #textolegal3").is(":checked")) {
        alert(ACEPTAR_PRIVACIDAD);
        return false;
    }

    var nombre = $("#pie-contacto #pie-nombre,#pie-contacto-2 #pie-nombre,#pie-contacto-3 #pie-nombre").val();
    var email = $("#pie-contacto #pie-email,#pie-contacto-2 #pie-email,#pie-contacto-3 #pie-email").val();
    var telefono = $("#pie-contacto #pie-telefono, #pie-contacto-2 #pie-telefono, #pie-contacto-3 #pie-telefono").val();
    var ciudad = $("#pie-contacto #pie-ciudad, #pie-contacto-2 #pie-ciudad, #pie-contacto-3 #pie-ciudad").val();
    var descripcion = $("#pie-contacto #pie-descripcion, #pie-contacto-2 #pie-descripcion, #pie-contacto-3 #pie-descripcion").val();

    // Comprobamos si los campos están informados
    // ------------------------------------------
    var mensaje_err = "";
    var hayerror = false;

    if (nombre == null || nombre == "") {
        mensaje_err += ERROR_NOM + "\n";
        hayerror = true;
    }

    if (TLF_OBLIGATORIO == '1' && (telefono == null || telefono == "" || isNaN(telefono) || telefono.length < 9 || telefono.length > 12)) {
        mensaje_err += ERROR_TLF + "\n";
        hayerror = true;
    }

    if (email == null || email == "" || !validarEmail(email)) {
        mensaje_err += ERROR_EML + "\n";
        hayerror = true;
    }

    if (descripcion == null || descripcion == "") {
        mensaje_err += ERROR_CONSULTA + "\n";
        hayerror = true;
    }

    if (hayerror) {
        alert(mensaje_err);
        return false;
    }

    function enviandoSolicitudInformacion() {
        $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").text('');
        $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").removeClass('ok ko');
        $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").addClass("enviando");
        $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").fadeIn(50);

    }

    grecaptcha.ready(function () {
        grecaptcha.execute('6LeFvHcUAAAAADkYzbLtZuO5lRdgl6gpLYovrRwl', {action: 'solicitudInformacion'}).then(function (token) {
            $.post("modulos/__ajx/envios/enviosFormularios.php", {
                beforeSend: enviandoSolicitudInformacion,
                token: token,
                nombre: nombre,
                email: email,
                telefono: telefono,
                ciudad: ciudad,
                descripcion: descripcion
            }, function (data) {

                var event = new CustomEvent('EnvioCorreo', {
                    'detail': {
                        'email_usuario': email,
                        'ref': null,
                        'contexto': 'pie_de_pagina',
                        'data_resultado': data.resultado,
                        'data_mensaje': data.mensaje
                    }
                }, false);

                $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").removeClass('ok ko enviando');

                if (data.resultado == false) {
                    $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").addClass('ko');
                    $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").text(data.mensaje);

                } else {
                    $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").addClass('ok');
                    $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").text(data.mensaje);

                }

                document.dispatchEvent(event);

                $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").fadeIn();
                setTimeout(function () {
                    $("#modulo-pie-1 .resultadoInfo,#modulo-pie-2 .resultadoInfo,#modulo-pie-3 .resultadoInfo").fadeOut();
                }, 4000);
            }, "json");
        });
    });
});

$("#eltextolegal3").click(function () {
    modalNuestra('mytextoprivacidadFooter', POLITICA_PRIVACIDAD);
});

function mostrar_ocultar_mapa(iddivmapa) {
    if ($("#mapaOficina_" + iddivmapa).is(':visible')) {
        $("#mapaOficina_" + iddivmapa).hide();
    } else {
        $("#mapaOficina_" + iddivmapa).show();
    }
}

function modalPoliticaCookies(titulo, textocookies, botonaceptar, botonrechazar, botongestionar, textocookiescompleto, aceptar_selec, boton_cerrar) {
    if (boton_cerrar == null) boton_cerrar = false;

    let boton_cerrar_html = '';
    let boton_cerrar_html_2 = '';
    if (boton_cerrar) {
        boton_cerrar_html = `<span class="botonCerrar" onclick="$(this).closest('.cajaNegraAlerta').remove()">X</span>`;
        boton_cerrar_html_2 = `<span class="botonCerrar" onclick="$(this).closest('#caja_texto_cookies_textocompleto').hide();$(this).closest('.modalNuestraCookies').find('#caja_texto_cookies_entrada').show();">X</span>`;
    }

    var html = '';
    html += '<div class="cajaNegraAlerta">';
    html += '<div class="modalNuestraCookies">';

    // Modal de entrada
    html += `<div id="caja_texto_cookies_entrada">`;
    html += '<h3 id="titulo_politica_cookies"><span>' + titulo + '</span> <img src="img/header/logo.png">' + boton_cerrar_html + '</h3>';
    html += '<div class="contCookies">';
    html += '<p id="texto_breve_politica_cookies">' + textocookies + '</p>';
    html += '<div id="caja_botones_cookies">';
    html += '<input type="button" id="botongestionar_aviso_entrada" value="' + botongestionar + '" onclick="desplegarTextoCookiesAviso();"/>';
    html += '<input type="button" id="botonaceptar_aviso_entrada" value="' + botonaceptar + '" onclick="cerrarModalNuestra(this);cookieHideAceptarMensajeCentro();"/>';
    html += '<input type="button" id="botonrechazar_aviso_entrada" value="' + botonrechazar + '" onclick="cerrarModalNuestra(this);cookieHideRechazarMensajeCentro();"/>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    // Fin Modal de entrada

    // Texto de las cookies
    html += '<div id="caja_texto_cookies_textocompleto" style="display: none;">';
    html += '<h3 id="titulo_politica_cookies"><span>' + titulo + '</span> <img src="img/header/logo.png">' + boton_cerrar_html_2 + '</h3>';
    html += '<div id="textocookies" class="classtextocookies contCookies">';
    //html += '<div id="mas-detalles-cookies" style="display:block;">';
    html += '' + textocookiescompleto + '';
    //html += '</div>';
    html += '</div>';
    html += '<div class="contCookies" style="flex-wrap: wrap;">';
    html += '<input type="button" id="botonaceptar_aviso_entrada" value="' + botonaceptar + '" onclick="cookieHideAceptarMensajeCentro();cerrarModalNuestra(this);"/>';
    html += '<input type="button" id="botonaceptar_aviso_textocompleto" value="' + aceptar_selec + '" onclick="cookieHiveAptSelMsgCentro();cerrarModalNuestra(this);"/>';
    html += '<input type="button" id="botonrechazar_aviso_entrada" value="' + botonrechazar + '" onclick="cookieHideRechazarMensajeCentro();cerrarModalNuestra(this);"/>';
    html += '</div>';
    html += '</div>';
    // Fin texto de las cookies

    html += '</div>'; // div Fin modalNuestraCookies
    html += '</div>'; // div Fin cajaNegraAlerta

    $('body').append(html);

    if(TEXTO_COOKIE_FIJO){
        comprobarCheckboxPoliticaCookies();
    }

}