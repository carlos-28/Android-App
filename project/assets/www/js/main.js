$(document).on("pageinit", "#main", function() {
    $("a").on("click", function() {
        var clicado = $(this).attr('rel');
        getClicado(clicado);
    })

    function getClicado(clicked) {
        $("#segundoContent").append('<img src="img/wait.gif">');
        if (clicked == "AC") {
            $.mobile.navigate('#feed');
            $(".headBar h1").html(" Feed");

            var url = "http://animecodex.com.br/api/get_recent_posts/"
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'jsonp',
            })
                .success(function(a) {
                    console.log(a);
                    alert("success");
                    $("#segundoContent").html("Sucesso");
                })
                .fail(function() {
                    console.log("error");
                    alert("error!");
                    $("#segundoContent").html("deu erro");
                })
                .complete(function() {
                    console.log("complete");
                });


            //$("#segundoContent").html("AnimeCodex.Com");
        } else if (clicked == "ACN") {
            $.mobile.navigate('#feed');
            $(".headBar h1").html(" Feed")
            //$("#segundoContent").html("AnimeCodexNetwork.Com");
        }

    }


    function xmlParser(xml) {
        $('#segundoContent').html(JSON.stringify(response));
    }
})