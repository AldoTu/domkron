$(document).ready(function(){

  var count = 0;
  //var imageID=0;

  //var intros = ['/assets/img/intro.jpg', '/assets/img/intro1.jpg', '/assets/img/intro2.jpg'];

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

  //$('.link-container').click(function(){
    //$(this).css("background-color", "white");
    //$(this).css("color", "rgba(0, 0, 0, 0.5)");
  //});

  $("#footer-arrow").click(function(){
    if (count == 0) {
      $("header").animate({top: -110}, 425);
      $('.page-container').animate({bottom: 200}, 425);
      //$("#footer-arrow").attr('transform', 'translate(0 0) rotate(180)');
      //$("#footer-arrow").animate({svgTransform: 'translate(0 0) rotate(180)'});
      count = 1;
    }
    else if (count == 1) {
      $("header").animate({top: 0}, 425);
      $('.page-container').animate({bottom: 0}, 425);
      //$("#footer-arrow").attr('transform', 'translate(0 0) rotate(180)');
      //$("#footer-arrow").animate({svgTransform: 'translate(0 0) rotate(180)'});
      count = 0;
    }
  });

});
