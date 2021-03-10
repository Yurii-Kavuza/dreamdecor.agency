$(document).ready(function(){
    
    /* Scroll to the section-ideas */
    $('.js--scroll-to-ideas').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-ideas').offset().top}, 1000);
    });

    /* Scroll to the section-book */
    $('.js--scroll-to-book').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-book').offset().top}, 1000);
    });

    
  });