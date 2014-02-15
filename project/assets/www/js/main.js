$(document).on("pageinit", "#main", function() {
    var codex = "http://animecodex.com.br/api/get_recent_posts/";
    var network = "http://animecodexnetwork.com.br";
    var feedContent = $("#feedContent");




    $("a").on("click", function() {
        var clicado = $(this).attr('rel');
        if (clicado == "AC") {
            siteCodex();
        } else if (clicado == "ACN") {
            siteNetwork();
        };
    })



    function siteCodex() {
        feedContent.append('<div id="loading" align="CENTER"><img src="img/wait.gif"></div>');
        getFeed(codex);
    }

    function getFeed(url) {
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                populateFeed(data);
            },

        });


    }

    function populateFeed(response) {
        feedContent.html("");
        $.each(response.posts, function(i, newsItem) {
            feedContent.append('<div align="CENTER">')
            feedContent.append("<li>Titulo: " + newsItem.title + "<br>Data: " + newsItem.date + "<br>Autor: " + newsItem.author.name + "</li>");
            feedContent.append("</div>");
        });
    }







    // function getClicado(clicked) {
    //     $("#segundoContent").append('<img src="img/wait.gif">');
    //     if (clicked == "AC") {
    //         $.mobile.navigate('#feed');
    //         $(".headBar h1").html(" Feed");

    //         var url = "http://animecodex.com.br/api/get_recent_posts/"
    //         $.ajax({
    //             url: url,
    //             type: 'GET',
    //             dataType: 'jsonp',
    //         })
    //             .success(function(a) {
    //                 console.log(a);
    //                 alert("success");
    //                 $("#segundoContent").html("Sucesso");
    //             })
    //             .fail(function() {
    //                 console.log("error");
    //                 alert("error!");
    //                 $("#segundoContent").html("deu erro");
    //             })
    //             .complete(function() {
    //                 console.log("complete");
    //             });


    //         //$("#segundoContent").html("AnimeCodex.Com");
    //     } else if (clicked == "ACN") {
    //         $.mobile.navigate('#feed');
    //         $(".headBar h1").html(" Feed")
    //         //$("#segundoContent").html("AnimeCodexNetwork.Com");
    //     }

    // }


    // function xmlParser(xml) {
    //     $('#segundoContent').html(JSON.stringify(response));
    // }
})