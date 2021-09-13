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

    $('.developers-item').matchHeight({
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

    if($(window).width() < 1024 ){
      $('.developers-items').each(function(){
          $(this).slick({
              dots: true,
              slidesToShow: 1,
              infinite: false,
              slidesToScroll: 1,
              mobileFirst: true,
              adaptiveHeight: false,
              appendArrows: $(this).parent().find('.button-container'),
              appendDots: $(this).parent().find('.button-container'),
              nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
              responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      rows: 3,
                    }
                  },
              ]
          })
      })
    }

    if($(window).width() < 1400 ){
      var img = $('.developers-item img').width()  
      $('.developers-item img').height(img / 0.73)
    }

});

$(window).resize(function(){

  if($(window).width() < 1400 ){
    var img = $('.developers-item img').width()  
    $('.developers-item img').height(img / 0.73)
  }

});