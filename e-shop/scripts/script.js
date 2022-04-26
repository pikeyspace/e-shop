$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.baner').addClass('hiden');
        } else {
            $('.baner').removeClass('hiden');
        }
    });
});



// Boorger-menu script

$(function() {
    $('body').on('click', '.burger-menu', function(event) {
        $('.burger-menu, .header-menu').toggleClass('active');
        $('.header-link').toggleClass('active');
        $('body').toggleClass('lock')
    })
    $('.menu-bar__inner').click(function(event) {
        $('.burger-menu, .header-menu').removeClass('active');
        $('body').removeClass('lock');
    })
})



$('.sidebar-toggle__btn').on('click', function() {
    $(this).toggleClass('in');
    $(this).parent().next().slideToggle();
})



$('.main-slider').slick({
    dots: true,
    speed: 3000,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    prevArrow: false,
    nextArrow: false
});

$('.populiar-slider').slick({
    dots: true,
    speed: 3000,
    autoplay: false,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
        // prevArrow: true,
        // nextArrow: true
});


$(function() {
    $(".notebook").load("item.html");
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('#item').load('item.thml');
});

(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);

$('.show-more__link').on('click', function() {
    $('item.html').append()
})