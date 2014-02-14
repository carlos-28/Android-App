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

  $.ajax({type: "GET", URL: "http://animecodex.com.br/feed", dataType: "xml", success: xmlParser});
  function xmlParser(xml) {
    $(xml).find("channel").each(function(){
      $("#segundoContent").append($(this).find("title").text());
    })    
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

