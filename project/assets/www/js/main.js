$(document).on("pageinit", "#main", function() {
    $("a").on("click", function() {
        var clicado = $(this).attr('rel');
        getClicado(clicado);
    })

    function getClicado(clicked) {
        if (clicked == "AC") {
            $.mobile.navigate('#feed');
            $(".headBar h1").html("AnimeCodex Feed");

            var url = "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=codecademy&callback=?"
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
            })
                .done(function() {
                    $("#segundoContent").append('Sucesso!');
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });


            //$("#segundoContent").html("AnimeCodex.Com");
        } else if (clicked == "ACN") {
            $.mobile.navigate('#feed');
            $(".headBar h1").html("AnimeCodexNetwork Feed")
            //$("#segundoContent").html("AnimeCodexNetwork.Com");
        }

    }


    function xmlParser(xml) {
        $('#segundoContent').html(JSON.stringify(response));
    }
})