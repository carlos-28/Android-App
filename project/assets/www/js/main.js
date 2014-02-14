$(document).on("pageinit", "#main", function(){
  $("a").on("click", function(){
    var clicado = $(this).attr('rel');
    getClicado(clicado);
  })
  function getClicado(clicked){
    if(clicked=="AC"){
      $.mobile.navigate('#feed');
      $(".headBar h1").html("AnimeCodex Feed");
      $("#segundoContent").html("AnimeCodex.Com");
    }
    else if(clicked=="ACN"){
      $.mobile.navigate('#feed');
      $(".headBar h1").html("AnimeCodexNetwork Feed")
      $("#segundoContent").html("AnimeCodexNetwork.Com");
    }
    
  }
})

