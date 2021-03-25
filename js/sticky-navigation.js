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

    nav.slideToggle('normal',function(){

        $('.header__navigation').addClass('header__navigation--secondary');
         if(this.style.display === 'none') { 
            $('.header__navigation').removeClass('header__navigation--secondary'); 
            this.removeAttribute('style')} 
        });
    });
});
