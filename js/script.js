$(document).ready(function(){
    
    $('.js--section-about').waypoint(function(direction){
        if (direction == "down") {            
            $('nav').addClass('header__navigation--sticky');
        }else {
            $('nav').removeClass('header__navigation--sticky');
        }
    });
    
    /*var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })*/
});