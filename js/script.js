$(document).ready(function(){
    
    $('.js--section-about').waypoints(function(direction){
        if (direction == "down") {            
            $('nav').addClass('.header__navigation--sticky');
            //$('nav').removeClass('.header__navigation');
        }else {
            $('nav').removeClass('.header__navigation--sticky');
            //$('nav').addClass('.header__navigation');
        }
    },{
        offset:'220px;'
    });
    
    /*var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })*/
});