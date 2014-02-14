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

  function hideMain() {
    $("#mainHdr").hide();
    $("#mainContent").hide();
    $("#mainFtr").hide();
  }
  function hideFeed() {
    $("#feedHdr").hide();
    $("#segundoContent").hide();
    $("#feedFtr").hide();
  }

  function showProgress() {
    hideMain();
    hideFeed();
    $("#progressHdr").show();
    $("#progressContent").show();
    $("#ftrProgress").show();
  }
})

