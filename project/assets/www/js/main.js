$(document).on("pageinit", "#main", function() {

    // Variables
    var codex = "http://animecodex.com.br/api/get_recent_posts/";
    var network = "http://animecodexnetwork.com.br";
    var feedContent = $("#feedContent");
    var feedHome = $("#feedHome");
    var main = $("#main");
    var panel = $("#mypanel");
    var inputCheck = $("#sim");
    var mostrarResumo = "nao";
    var changeRead = $("input[name=leitura]:radio");
    var readStyle = "lista";
    var imagem = "";

    // Trigger configs()
    configs();

    // Reload panel
    $("#mypanel").trigger("updatelayout");

    // Click event and get site
    $("#main a").on("click", function() {
        var clicado = $(this).attr('rel');
        if (clicado == "AC") {
            siteCodex();
        } else if (clicado == "ACN") {
            siteNetwork();
        };
    });




    // Feed AnimeCodex.Com
    function siteCodex() {
        feedContent.html('<div id="loading" align="CENTER"><img src="img/wait.gif"></div>');
        getFeed(codex);
    }

    // Get feed
    function getFeed(url) {
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(data, textStatus, jqXHR) {
                console.log(textStatus);
                item = data;
                populateFeed(item);
            },
        });

    }

    // Populate #feed
    function populateFeed(response) {
        feedContent.html("");
        var num = 1;
        $.each(response.posts, function(i, newsItem) {

            if (readStyle == "lista") {
                feedContent.append("<a data-ajax='false' class='ui-btn ui-shadow ui-corner-all' href='" + newsItem.url + "'>" + newsItem.title + "</a>");
                if (mostrarResumo == "sim") {
                    feedContent.append("<div data-inset='true' id='resumo'><p>" + newsItem.excerpt + "</p></div><hr>");
                }
            } else {
                if (newsItem.thumbnail) {
                    imagem = newsItem.thumbnail;
                } else {
                    imagem = "img/icon.png";
                }
                feedContent.append(" <div id='newsEntry' align'CENTER'> <div class='newsSingle'> <div class='newsBgimg'><img src='" + imagem + "'> </div><a class='newsTitle' href='" + newsItem.url + "'>" + newsItem.title + "</a > <div class='newsResumo'>" + newsItem.excerpt + " </div> </div>");
            }


        });
    }


    // Configurations
    function configs() {
        // Show Excerpt
        inputCheck.on('change', function() {
            if ($(this).is(":checked")) {
                mostrarResumo = "sim";
                siteCodex();
            } else {
                mostrarResumo = "nao";
                siteCodex();
            }
        });
        // Show Excerpt
        // Change read style
        changeRead.on('change', function() {
            if ($(this).val() == "lista") {
                readStyle = "lista";
                siteCodex();
            } else if ($(this).val() == "grid") {
                readStyle = "grid";
                siteCodex();
            }
        });

        // Change read style
    }

    // < div id = 'newsEntry' > < div class = 'newsSinglie' > < div class = 'newsBgimg' > < /div><a class='newsTitle'></a > < div class = 'newsResumo' > < /div> </div >

})