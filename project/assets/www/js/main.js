$(document).on("pageinit", "#main", function() {
    $("a").on("click", function() {
        var clicado = $(this).attr('rel');
        getClicado(clicado);
    })

    function getClicado(clicked) {
        if (clicked == "AC") {
            $.mobile.navigate('#feed');
            $(".headBar h1").html(" Feed");

            var url = "http://animecodex.com.br/api/get_recent_posts/&callback=?"
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
            })
                .success(function(a) {
                    alert("success");
                    $("#segundoContent").html("Sucesso");
                })
                .fail(function() {
                    console.log("error");
                    alert("error!");
                    $("#segundoContent").html("Sucesso");
                })
                .always(function() {
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