$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  focusOnSelect: true,
  focusOnChange: true,
});

$('.your-element').slick('slickGoTo', index, [, dontAnimate]);
     
