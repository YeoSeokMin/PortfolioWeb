$(function(){



   $('.down').animate({top:"200px"},800,function(){
     $('.down').animate({top:"240px"},800);
   });

   function godown(){
     $('.down').animate({top:"200px"},800,function(){
       $('.down').animate({top:"240px"},800);
     });
   };

  setInterval(godown,1600);


});
