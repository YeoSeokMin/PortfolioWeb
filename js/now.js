$(function(){



   $('.now').animate({top:"-50px"},1000,function(){
     $('.now').animate({top:"0px"},1000);
   });

   function now(){
       $('.now').css({color:"#fff"})
       $('.now').animate({top:"-50px"},1000,function(){


       $('.now').animate({top:"0px"},1000);
       $('.now').css({color:"gold"})
     });
   };

  setInterval(now,2000);


});
