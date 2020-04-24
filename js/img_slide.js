$(function(){
  $('.prev').click(function(){
    $(this).siblings('.img_slide').find('li:last').prependTo($(this).siblings('.img_slide'));
    $(this).siblings('.img_slide').css({left:"-372px"});
    $(this).siblings('.img_slide').stop().animate({left:"0px"},500);
  });

  $('.next').click(function(){
    $(this).siblings('.img_slide').animate({marginLeft:-372},function(){
      $(this).find('li:first').appendTo(this);
      $(this).css({'margin-left':0});
    });
  });
});


$(function(){
  $('.prev').click(function(){
    $(this).siblings('.img_slide_style').find('li:last').prependTo($(this).siblings('.img_slide_style'));
    $(this).siblings('.img_slide_style').css({left:"-372px"});
    $(this).siblings('.img_slide_style').stop().animate({left:"0px"},500);
  });

  $('.next').click(function(){
    $(this).siblings('.img_slide_style').animate({marginLeft:-372},function(){
      $(this).find('li:first').appendTo(this);
      $(this).css({'margin-left':0});
    });
  });
});
