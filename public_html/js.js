$(document).ready(function () {

    $("button").click(function () {
        $(".menu").slideToggle(1000);
    });

    /*funcao ativa botao de navegacao
     $(".btn-nav").click(function (e) {
     e.preventDefault();
     $(".btn-nav").removeClass("active");
     $(this).addClass("active");
     });
     */
    /*funcao animacao scroll*/
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    /*funcao menu fixo mudando menu*/
    var altura = $(window).height();
    var nav = $('.nav');
    var page2 = $('.page-2');
    var page3 = $('.page-3');
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('#page-2').first().height() && $(this).scrollTop() < $('#page-3').first().height()) {
            nav.addClass("menu-fixo");
            page2.addClass('back');

        }
        if ($(this).scrollTop() > $('#page-3').first().height()) {
            nav.addClass("menu-fixo");
            page3.addClass('back2');

        } else {
            nav.removeClass("menu-fixo");
            page2.removeClass("back");
            page3.removeClass("back");

        }
    });



});

