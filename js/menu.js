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


    //切換漢堡按鈕
    $('.hamburger').click(function () {
        //切換 三 & X 加入 & 刪除class
        $(this).toggleClass('is-active');
        $('.navgation').toggleClass('show');
    });

});


$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 2000) {
        $('.menu a').css("color", "white");
    }
    if ($(this).scrollTop() > 3500) {
        $('.menu a').css("color", "black");
    }
    else if ($(this).scrollTop() < 2000) {
        $('.menu a').css("color", "black");
    }
}) 

$(window).scroll(function () {
    if ($(this).scrollTop() > 2000) {
        $('.main-text').css("color", "white");
    }
    if ($(this).scrollTop() > 3700) {
        $('.main-text').css("color", "black");
    }
    else if ($(this).scrollTop() < 2000) {
        $('.main-text').css("color", "black");
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 2000) {
        $('.connet img:eq(0)').css('opacity', '0');
        $('.connet img:eq(1)').css('opacity', '1');
    }
    if ($(this).scrollTop() > 3500) {
        $('.connet img:eq(0)').css('opacity', '1');
        $('.connet img:eq(1)').css('opacity', '0');
    }
    else if ($(this).scrollTop() < 2000) {
        $('.connet img:eq(0)').css('opacity', '1');
        $('.connet img:eq(1)').css('opacity', '0');
    }
}) 


//jquery smoove
$('.smoove').smoove();