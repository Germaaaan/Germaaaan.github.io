$(document).ready(function(){
    $('.menuPrincipalCabecera > label').on('click', function(event){
        var anchoVentana = $(window).innerWidth();
        if(anchoVentana > 900) return true;

        var $obj = $(this);
        var $li = $(this).closest('.menuPrincipalCabecera');
        var submenu = $li.find('ul.header-submenuContenedo');
        var eraVisible = submenu.is(':visible');
        $('ul.header-submenuContenedo').hide();
        $('#unicode').html('&#9661;');
        $('li.menuPrincipalCabecera.tmpActive').removeClass('tmpActive');

        if(submenu.length == 0) return true;

        event.preventDefault();

        if(eraVisible) {
            $li.removeClass('tmpActive');
            submenu.hide();
        } else {
            $li.addClass('tmpActive');
            submenu.css('display', 'flex');
            $('#unicode').html('&#9651;');
        }
    });

    $('.header-menu').on('click', function(event){
        if(event.target !== this) return true;
        $obj = $(this);
        var anchoVentana = $(window).innerWidth();
        if(anchoVentana > 900) return true;
        if(!$obj.hasClass('header-menu')) return true;

        $obj.toggleClass('xvisible');
    });
});
