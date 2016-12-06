$(document).ready(function(){
  $('h1').animate({left: 0}, 1700);
  
  $(".link-container").mouseover(function(){
    $(this).css({
      transition : 'background-color 0.3s ease-in-out', "background-color": "white"
    });
    $(this).children().css({
      transition : 'color 0.3s ease-in-out', "color": "rgba(0, 0, 0, 0.5)"
    });
  });

  $(".link-container").mouseleave(function(){
    $(this).css({
      transition : 'background-color 0.3s ease-in-out', "background-color": ""
    });
    $(this).children().css({
      transition : 'color 0.3s ease-in-out', "color": "white"
    });
  });

});
