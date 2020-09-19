// Wow js
// ===========================================================
$(function(){
    new WOW().init();
});

// Preloader
// ===========================================================
$(window).on('load', function(){
    $('#preloader').fadeOut("slow");
});

// Sidebar-ContactBx
// ===========================================================
$(document).ready(function(){
    $('.toggle').click(function(){
        $('#sidebar-contact').toggleClass('active')
        $('.toggle').toggleClass('active')
    })
})

// Navbar
// ===========================================================
var zero = 0;

$(document).ready(function(){
    $(window).on('scroll', function(){
        $('.navbar').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    })
})

// Accordion
// ===========================================================
$(document).on('click', '#accordion>li>a', function(){
    $(this).siblings('.box').addClass('active');
    $(this).closest('li').siblings('li').find('.box').removeClass('active');
})
    $('#accordion').on('click','li>a',function(){
        $('#accordion li a.active').removeClass('active');
        $(this).addClass('active');
    })