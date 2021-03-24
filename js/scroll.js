$(document).ready(function(){
    
    /* Scroll to the section-about-us */
    $('.js--scroll-to-about-us').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });

    
    /* Scroll to the section-ideas */
    $('.js--scroll-to-ideas').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-ideas').offset().top}, 1000);
    });

    /* Scroll to the section-propositions */
    $('.js--scroll-to-popular-propositions').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-popular-propositions').offset().top}, 1000);
    });

    /* Scroll to the section-services */
    $('.js--scroll-to-services').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000);
    });

    /* Scroll to the section-portfolio */
    $('.js--scroll-to-portfolio').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
    });

    /* Scroll to the footer */
    $('.js--scroll-to-footer').click(function(){
        $('html, body').animate({scrollTop: $('.js--footer').offset().top}, 1000);
    });

    /* Scroll to the section-book */
    $('.js--scroll-to-book').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-book').offset().top}, 1000);
    });

    
  });