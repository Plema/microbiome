$(document).ready(function(){

    if($(window).width() < 768 ){

        // $('.news-internal-content article').readmore({
        //     speed: 500,
        //     lessLink: '<a href="#" class="show-more active">Свернуть</a>',
        //     moreLink: '<a href="#" class="show-more">Читать далее</a>',
        //     collapsedHeight: 635,
        // });

        $('.news-filter li').on('click', function(){

            $(this).parent().find('li').removeClass('active')
            $(this).addClass('active')
            $(this).parent().find('li').toggleClass('list')
            $(this).parent().toggleClass('dropdown')
            $(this).prependTo('.dropdown');
            
        })
    }
    if($(window).width() > 768 ){
        $('.news-filter li').on('click', function(){
            $(this).parent().find('li').removeClass('active')
            $(this).addClass('active')
        })
    }

});

$(window).resize(function(){

    

});