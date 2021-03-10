$(document).ready(function(){
    
  $('.js--section-about').waypoint(function(direction){
      if (direction == "down") {            
          $('nav').addClass('header__navigation--sticky');
      }else {
          $('nav').removeClass('header__navigation--sticky');
      }
  });

  $('.js--mobile-nav-icon').click(function(){
        var nav = $('.js--header__menu');        

        nav.slideToggle(200);
        
        
        
    });

});