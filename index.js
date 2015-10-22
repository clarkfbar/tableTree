  function resize(){
    $(".list thead th").each(function(index){
      var width = $(this).width();
      $(".list .outer td:nth-child(" + index + ")").css("width", width);
      $(".list .leaf td:nth-child(" + index + ")").css("width", width);
    });
  }

  resize();
  $(window).resize(resize);

  $(".switch").click(function(){
    if($(this).parents(".outer").is(".open")){
      $(this).parents(".outer").removeClass("open").next(".inner").removeClass("open");
    }else{
      $(this).parents(".outer").addClass("open").next(".inner").addClass("open");
    }
  });

  $("tr.outer, tr.leaf").click(function(){
    $("tr.focus").removeClass("focus");
    $(this).addClass("focus");
  });