$(document).ready(function(){

    $('.services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });

    $('.developers-item .text').matchHeight({
        byRow: false
    }); 


    $('.developers_js').on('click', function(){
      var popupText = $(this).parents('.developers-item').find('.popup-text').html();
      $('.developers-popup').fadeIn();
      $('.developers-content').find('.text').html(popupText);
    });

    $('.close').on('click', function(){
        $('.developers-popup').fadeOut();
    });

    $('.close-popup').on('click', function(){
      $('.developers-popup').fadeOut();
    });

});

$(window).resize(function(){

    

});