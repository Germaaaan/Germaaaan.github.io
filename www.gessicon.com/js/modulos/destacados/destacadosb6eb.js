var visibleCarrusel = 5;

function actualizarVisibleCarrusel() {
    var anchoVentana = window.innerWidth;

    if (anchoVentana < 600) {
        visibleCarrusel = 1;
    } else if (anchoVentana < 900) {
        visibleCarrusel = 2;
    } else if (anchoVentana < 1200) {
        visibleCarrusel = 3;
    } else if (anchoVentana < 1500) {
        visibleCarrusel = 4;
    } else if (anchoVentana < 1900) {
        visibleCarrusel = 5;
    } else {
        visibleCarrusel = 6;
    }
}

actualizarVisibleCarrusel();

window.addEventListener("resize", actualizarVisibleCarrusel);

function mostrarFotosDestacados(key, val)
{
    var $obj = $(val).find('.fotopropiedad');
    if ($obj.hasClass('fotoCargada') || $obj.hasClass('nofoto')) return true;

    var lafoto = $obj.attr('cargaFoto');
    if (lafoto == null || lafoto == '') return true;

    $obj.css('background-image', 'url(' + lafoto + ')');
    $obj.addClass('fotoCargada');

}

$('.modulos-destacados #destacados-carrusel').each(function(key, val){
    var articlesDestacados = $(val).find('article');

    if(typeof articlesDestacados.length == 'undefined') return true;

    if(articlesDestacados.length <= visibleCarrusel) {
        articlesDestacados.each(function(key, val) {
            mostrarFotosDestacados(key, val);
        });
    }
});
