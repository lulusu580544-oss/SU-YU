$(function () {

    $('.text:eq(0)').hover(function () {
        $('.image img:eq(0)').css('opacity', '1');
        $('.image img:eq(1)').css('opacity', '0');
        $('.image img:eq(3)').css('opacity', '0');
        $('.image img:eq(2)').css('opacity', '0');
    });

    $('.text:eq(1)').hover(function () {
        $('.image img:eq(1)').css('opacity', '1');
        $('.image img:eq(0)').css('opacity', '0');
        $('.image img:eq(3)').css('opacity', '0');
        $('.image img:eq(2)').css('opacity', '0');
    });
    $('.text:eq(2)').hover(function () {
        $('.image img:eq(2)').css('opacity', '1');
        $('.image img:eq(1)').css('opacity', '0');
        $('.image img:eq(0)').css('opacity', '0');
        $('.image img:eq(3)').css('opacity', '0');
    });
    $('.text:eq(3)').hover(function () {
        $('.image img:eq(3)').css('opacity', '1');
        $('.image img:eq(2)').css('opacity', '0');
        $('.image img:eq(0)').css('opacity', '0');
        $('.image img:eq(1)').css('opacity', '0');
    });
});


$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 2000) {
        $('& a').css("color", "white");
    }
    if ($(this).scrollTop() > 3000) {
        $('& a').css("color", "black");
    }
    else if ($(this).scrollTop() < 2000) {
        $('& a').css("color", "black");
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 2000) {
        $('.main-text').css("color", "white");
    }
    if ($(this).scrollTop() > 2700) {
        $('.main-text').css("color", "black");
    }
    else if ($(this).scrollTop() < 2000) {
        $('.main-text').css("color", "black");
    }
})

//jquery smoove
$('.smoove').smoove();