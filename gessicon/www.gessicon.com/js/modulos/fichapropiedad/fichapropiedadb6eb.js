$(document).ready(function() {
    var cookies_permitidas = document.cookie.split("; ").includes("cookies_accepted_vdf=1");
    if (cookies_permitidas) {
        parametros="tipo=vistas&cod_ofer=" + listados.fichapropiedad[1].cod_ofer;
        var respuesta=lanzaajax("POST","modulos/__ajx/setCookies.php",parametros,"");
    }
});

$("#texto-legal-contactanos").click(function () {
    modalNuestra('mytextoprivacidadInfoProp', POLITICA_PRIVACIDAD);
});

$("#fichapropiedad-bloquecontactanos button.botonEnviar").on('click', function() {

    if (!$("#fichapropiedad-bloquecontactanos #textolegal-fichapropiedad").is(":checked")) {
        alerta(ACEPTAR_PRIVACIDAD, false);
        return false;
    }

    var email=$("#fichapropiedad-bloquecontactanos #txtemail").val();

    if (!validarEmail(email)) {
        alerta(DIRECCION_EMAIL_INCORRECTA, false);
        $("#fichapropiedad-bloquecontactanos #txtemail").focus();
        return false;
    }

    var nombre=$("#fichapropiedad-bloquecontactanos #txtnombre").val();
    if (nombre=='') {
        alerta(ERRORNOMBRE, false);
        $("#fichapropiedad-bloquecontactanos #txtnombre").focus();
        return false;
    }

    var tlf=$("#fichapropiedad-bloquecontactanos #txttelefono").val();
    if ((tlf=='' || tlf==null || tlf.isNaN || tlf.length<9 || tlf.length>12) && TLF_OBLIGATORIO == "1") {
        alerta(ERROR_TLF, false);
        $("#fichapropiedad-bloquecontactanos #txttelefono").focus();
        return false;
    }

    //bloqueamos el boton para que no envie muchas veces
    $("#fichapropiedad-bloquecontactanos button.botonEnviar").attr('disabled', 'true');

    var ref=$("#fichapropiedad-bloquecontactanos #refContacto").val();
    var apellidos=$("#fichapropiedad-bloquecontactanos #txtapellidos").val();
    var telefono=$("#fichapropiedad-bloquecontactanos #txttelefono").val();
    var elEmail=$("#fichapropiedad-bloquecontactanos #elMail").val();

    var consulta=$("#fichapropiedad-bloquecontactanos #txtconsulta").val();
    if (consulta=='') {
        alerta(ERROR_CONSULTA, false);
        $("#fichapropiedad-bloquecontactanos #txtconsulta").focus();
        return false;
    }

    function enviandoContactanos(){
        $("#fichapropiedad-bloquecontactanos button.botonEnviar").addClass("enviando");
    }

    grecaptcha.ready(function() {
        grecaptcha.execute('6LeFvHcUAAAAADkYzbLtZuO5lRdgl6gpLYovrRwl', {action: 'contactanosFicha'}).then(function(token) {
            $.post( "modulos/__ajx/envios/enviosFormularios.php", {
                beforeSend: enviandoContactanos,
                token: token,
                email: email,
                nombre: nombre,
                apellidos: apellidos,
                telefono: telefono,
                ref: ref,
                consulta: consulta,
                elEmail: elEmail,
                datoofe_e: listados.fichapropiedad[1].cod_ofer,
                //numagencia_e: listados.fichapropiedad[1].numagencia
                numagencia_e: numagencia_web
            }, function( data ) {
                $("#fichapropiedad-bloquecontactanos .resultado").removeClass('ok ko');

                var event = new CustomEvent('EnvioCorreo', {
                    'detail': {
                        'email_usuario': email,
                        'ref': ref,
                        'contexto': 'ficha',
                        'data_resultado': data.resultado,
                        'data_mensaje': data.mensaje
                    }
                }, false);

                if(data.resultado==false) {
                    $("#fichapropiedad-bloquecontactanos .resultado").addClass('ko');
                    $("#fichapropiedad-bloquecontactanos .resultado").text(data.mensaje);
                }
                else {
                    $("#fichapropiedad-bloquecontactanos .resultado").addClass('ok');
                    $("#fichapropiedad-bloquecontactanos .resultado").text(data.mensaje);
                }
                document.dispatchEvent(event);


                $("#fichapropiedad-bloquecontactanos button.botonEnviar").removeClass("enviando");
                $("#fichapropiedad-bloquecontactanos .botonEnviar").slideUp();$("#fichapropiedad-bloquecontactanos .resultado").slideDown();
                setTimeout(function(){$("#fichapropiedad-bloquecontactanos .resultado").slideUp();$("#fichapropiedad-bloquecontactanos .botonEnviar").slideDown(function(){$("#fichapropiedad-bloquecontactanos button.botonEnviar").removeAttr('disabled')}); }, 4000);
            },"json");
        });
    });
});

$("#fichapropiedad-bloquevisor a.verAntesYDespues").on('click', function(event) {
    event.preventDefault();

    var fotoNormal=$(this).attr("fotoActual");

    if (fotoNormal==0) {
        alerta(OCURRIDO_ERROR, false);
        $("#fichapropiedad-bloquevisor a.verAntesYDespues").fadeOut(50);
        return false;
    }

    if(arr_antesydespues[fotoNormal]!=undefined)
        var fotoAntes=arr_antesydespues[fotoNormal];
    else {
        alerta(OCURRIDO_ERROR, false);
        return false;
    }

    var altoInicial=$("#fotosNormales").height();
    var anchoInicial=$("#fotosNormales").width();

    var parametros='fn='+fotoNormal+';fa='+fotoAntes+';fl='+listados.fichapropiedad[1].fotoletra+';na='+listados.fichapropiedad[1].numagencia+';sr='+listados.fichapropiedad[1].srvfotos+';co='+listados.fichapropiedad[1].cod_ofer;
    var urlImgWidth="https://fotos"+listados.fichapropiedad[1].srvfotos+".apinmo.com/"+listados.fichapropiedad[1].numagencia+"/"+listados.fichapropiedad[1].cod_ofer+"/ant-"+fotoAntes+".jpg";
    var urlVisorantesDespues='https://crm.apinmo.com/new/app/visor/visorantesydespues.php?data='+btoa(parametros);


    var imgWidth = new Image();
    imgWidth.src = urlImgWidth;
    imgWidth.addEventListener("load", function(){

        /*
        var anchoIdeal=(altoInicial*this.naturalWidth)/this.naturalHeight;
        if (anchoIdeal>window.innerWidth)
            anchoIdeal=(anchoInicial*this.naturalHeight)/this.naturalWidth;
        if (!$.isNumeric(anchoIdeal) || anchoIdeal>anchoInicial)
            anchoIdeal='100%';

        $("#fichapropiedad-bloquevisor #fotosAntesYDespues.bloqueVisorIndividual iframe").css("width",anchoIdeal+'px');
        $("#fichapropiedad-bloquevisor #fotosAntesYDespues.bloqueVisorIndividual iframe").css("height",altoInicial);
        */

        var proporcion = this.naturalWidth/this.naturalHeight;
        anchoIdeal  = anchoInicial+'px';
        altoIdeal   = (anchoInicial/proporcion)+'px';

        $("#fichapropiedad-bloquevisor #fotosAntesYDespues.bloqueVisorIndividual iframe").css("height",altoIdeal);
        $("#fichapropiedad-bloquevisor #fotosAntesYDespues.bloqueVisorIndividual iframe").css("width",anchoIdeal);

    });

    $("#fichapropiedad-bloquevisor #fotosAntesYDespues.bloqueVisorIndividual iframe").attr("src",urlVisorantesDespues);
    $("#fichapropiedad-bloquevisor .bloqueVisorIndividual").css("display","none");
    $("#fichapropiedad-bloquevisor #fotosAntesYDespues.bloqueVisorIndividual").css("display","block");

    // mostrar ventana fn=9;fa=3;fl=2;co=7191547;na=2;sr=6
});

$("#fichapropiedad-bloquevisor #fotosAntesYDespues .volver-atras").on('click', function() {
    $("#fichapropiedad-bloquevisor .bloqueVisorIndividual").css("display","none");
    $("#fichapropiedad-bloquevisor #fotosNormales.bloqueVisorIndividual").css("display","block");
});


$("#fichapropiedad-bloquevisor li.pestanaVisor").on('click', function() {
    $("#fichapropiedad-bloquevisor .bloqueVisorIndividual").css("display","none");

    $("#fichapropiedad-bloquevisor li.pestanaVisor").removeClass("activo");
    $(this).addClass("activo");

    var tipo=$(this).attr("tipo");
    var valor=$(this).attr("valor");

    if (valor!='' && $("#fichapropiedad-bloquevisor #"+tipo+".bloqueVisorIndividual iframe").attr("src")=="")
        $("#fichapropiedad-bloquevisor #"+tipo+".bloqueVisorIndividual iframe").prop("src",valor);
    if(tipo!="videoYT") {
        $("#fichapropiedad-bloquevisor #" + tipo + ".bloqueVisorIndividual").css("height", $("#fotosNormales").height());
        $("#fichapropiedad-bloquevisor #" + tipo + ".bloqueVisorIndividual iframe").css("height", $("#fotosNormales").height());
    }
        $("#fichapropiedad-bloquevisor #" + tipo + ".bloqueVisorIndividual").css("display", "block");

});

if (esMovil == 1) {

    $("#fichapropiedad-bloquevisor .bloqueVisorIndividual .visor-fullscreen").on("click", function () {
        var  agenciaPropietaria = '';
        if(unsolocontacto) {
            agenciaPropietaria = '&o=' + numagencia;
        }

        window.open("https://crm.apinmo.com/fotosvr/tour.php?cod=" + listados.fichapropiedad[1].cod_ofer + "." + listados.fichapropiedad[1].numagencia + agenciaPropietaria);

    });
} else {
    $("#fichapropiedad-bloquevisor .bloqueVisorIndividual .visor-fullscreen").on('click', function() {
        var visor=$(this).closest(".bloqueVisorIndividual");

        if ($(visor).prop("id")=="fotosPanoramicas") { // Refrescamos el scr para que recargue porque necesita cargar con las medidas de pantalla para la buena visualización
            $("#fichapropiedad-bloquevisor #" + $(visor).prop("id") + ".bloqueVisorIndividual iframe").prop("src", $("#fichapropiedad-bloquevisor #" + $(visor).prop("id") + ".bloqueVisorIndividual iframe").prop("src"));
        }

        if (!$(this).hasClass("invertido")) {
            $(this).siblings("iframe").addClass("fullscreen");
            $(this).addClass("invertido");
        } else {
            $(this).siblings("iframe").removeClass("fullscreen");
            $(this).removeClass("invertido");
        }
    });
}



$("#fichapropiedad-bloquevisor .miniaturaYoutube").click(function () {

    var idYT=this.id;
    var url="https://www.youtube.com/embed/"+idYT+"?modestbranding=1&rel=0&showinfo=0";
    $("#fichapropiedad-bloquevisor #iframeYoutube").attr('src',url);

    /*
    var url="https://player.vimeo.com/video/703209730?h=cfcfc90a3a"+idYT+"?modestbranding=1&rel=0&showinfo=0";
     */

});


function checkForZero(field) {
    if (field.value == 0 || field.value.length == 0)
    {
        alerta("Hay un campo vacio o igual a 0", false);
        field.focus();
    }
}

function cambiarCalculo(obj) {
    if ($(obj).attr('tipo')=='hipoteca')
        $('.contenedorCalculadoras').addClass( "hipoteca" );
    else
        $('.contenedorCalculadoras').removeClass( "hipoteca" );

    $('.botoneraCalculadoras button').removeClass('activo');
    $(obj).addClass('activo');
}

function cmdCalc_Click() {
    var form = $("#calculadora2 form").get(0);
    var gasto = form.gastos2.value;
    var cuota=form.price.value;
    if (cuota=='') cuota="0";
    if (gasto=='') gasto="0";
    gasto=parseInt(gasto);
    cuota=parseInt(cuota);
    cuota = cuota + ((cuota*gasto)/100);
    var anyos=form.year.value;
    if (anyos=='') anyos="0";
    anyos=parseInt(anyos);
    var interes=form.interes.value;
    if (interes=='') interes="0";
    interes=parseFloat(interes);
    var intRate = (interes/100) / 12;
    var n = anyos * 12;
    var total= cuota * Math.floor( (Math.pow(1+intRate,n)-1) / (intRate*(Math.pow(1+intRate,n))) );
    total = Math.round(total);


    if(total>0){
        document.getElementById("bloqueres2").style.display="inline-block";
        document.getElementById("resultado2").innerHTML=total + ' ' + moneda + '</span>';
    }

}


function Morgcal() {
    var form = $("#calculadora1 form").get(0);
    var gasto = form.gastos1.value;
    var LoanAmount = form.LoanAmount.value;
    LoanAmount = LoanAmount - gasto;
    var DownPayment= "0";
    var AnnualInterestRate = form.InterestRate.value/100;
    var Years= form.NumberOfYears.value;
    var MonthRate=AnnualInterestRate/12;
    var NumPayments=Years*12;
    var Prin=LoanAmount-DownPayment;
    var MonthPayment=Math.floor((Prin*MonthRate)/(1-Math.pow((1+MonthRate),(-1*NumPayments)))*100)/100;
    MonthPayment = Math.round(MonthPayment);

    if(MonthPayment>0){
        document.getElementById("bloqueres1").style.display="inline-block";
        document.getElementById("resultado1").innerHTML=MonthPayment + ' ' + moneda + '</span>';
    }
}