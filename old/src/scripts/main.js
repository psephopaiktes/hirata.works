$( function(){

    //switcher
    $('.switch li').on('click', function() {
        var category = $(this).attr('id');
        $('.switch li').removeClass('selected');
        $(this).addClass('selected');
        $('.works li').hide();
        $('li.' + category).fadeIn(200);
    });

    //Go top
    $(window).scroll( function() {
        if ($(this).scrollTop() > 100) $('#gotop').css('opacity','1');
        else $('#gotop').css('opacity','0');
    });
    $('#gotop').on('click', function() {
        $('body,html').animate({scrollTop:0}, 'swing');
    });

    //for loader
    $(window).on('load',function(){
        $('.left-box').fadeTo(0, 1);
        $('#loader').delay(200).fadeOut(300);
    });

    // GitHubPagesのレスポンスが悪いため、アニメーションをOFF

    //for Fade
    // $(window).on('load',function(){
    //     $('#fade').fadeTo(300, 1);
    // });

    // for Fade Wroks
    // $(window).on('load',function(){
    //     $('.works li').each(function(i){
    //         $(this).delay(50*i).animate({opacity:1}, 500);
    //     });
    // });



    //for Slide show
    $('.my-flipster').flipster({
        style: 'flat',
        spacing: -0.8,
        buttons: true,
        start: 'center',
        nav: 'after'
    });
    // change aspect
    if( $('.flipster__container').height() > $('.left-box img').width() )
        $('.left-box img,.left-box video').css({
            height: '60rem',
            width: 'auto'
        });

});
