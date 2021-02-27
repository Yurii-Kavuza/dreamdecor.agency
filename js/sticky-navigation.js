$(document).ready(function(){
    
  $('.js--section-about').waypoint(function(direction){
      if (direction == "down") {            
          $('nav').addClass('header__navigation--sticky');
      }else {
          $('nav').removeClass('header__navigation--sticky');
      }
  });
});