$(function () {
    $('.single-item').slick({
        arrows: false,
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        utoplayspeed: 100
    });

    $('.single-customer').slick({
        arrows: false,
        dots: true,
        infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // adaptiveHeight: true
    });

});
