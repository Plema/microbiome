$(document).ready(function(){

    $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    if($(window).width() < 1280 ){
      $('.creature-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
        ]
      });

      $('.indication .steps-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: false,
        appendArrows: $('.button-container'),
        appendDots: $('.button-container'),
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
        ]
      });
    }

    if($(window).width() <= 768 ){

        $('.technology-text article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть <i class="icon-arrow"></i></a>',
            moreLink: '<a href="#" class="show-more">Развернуть <i class="icon-arrow"></i></a>',
            collapsedHeight: 285,
        });

    }

    if($(window).width() >= 1024 ){

        $('.technology-item .item-title').matchHeight({
            byRow: false
        }); 

        $('.reviews-slider .text').matchHeight({
            byRow: false
        }); 

        $('.technology-item p').matchHeight({
            byRow: false
        }); 

    }

    $('.developers-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
      responsive: [
          {
            breakpoint: 1280,
            settings: {
              dots: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
          }
      ]
    });

    $('.developers-item .text').matchHeight({
      byRow: false
    }); 

    // $('.testimony-content article').readmore({
    //     speed: 500,
    //     lessLink: '<a href="#" class="show-more active">Свернуть</a>',
    //     moreLink: '<a href="#" class="show-more">Подробнее</a>',
    //     collapsedHeight: 265,
    // });

    // if($(window).width() >= 768 ){

    //   $('.testimony-content article').readmore({
    //     speed: 500,
    //     lessLink: '<a href="#" class="show-more active">Свернуть</a>',
    //     moreLink: '<a href="#" class="show-more">Подробнее</a>',
    //     collapsedHeight: 95,
    //   });

    // }

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

    if($(window).width() <= 768 ){

      $('.services-content article').readmore({
        speed: 500,
        lessLink: '<a href="#" class="show-more active">Свернуть</a>',
        moreLink: '<a href="#" class="show-more">Подробнее</a>',
        collapsedHeight: 365,
      });

    }

});

$(window).resize(function(){

    

});