$(document).ready(function(){

    if($(window).width() <= 768 ){

        $('.news-internal-content article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Читать далее</a>',
            collapsedHeight: 635,
        });

    }

});

$(window).resize(function(){

    

});