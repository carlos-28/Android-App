$(document).on("pageinit", "#main", function() {
    var codex = "http://animecodex.com.br/api/get_recent_posts/";
    var network = "http://animecodexnetwork.com.br";
    var feedContent = $("#feedContent");
    var feedHome = $("#feedHome");
    var main = $("#main");
    var panel = $("#mypanel");
    var inputCheck = $("#sim");
    var mostrarResumo = "nao";

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

            feedContent.append("<a data-ajax='false' class='ui-btn ui-shadow ui-corner-all' href='" + newsItem.url + "'>" + newsItem.title + "</a>");
            if (mostrarResumo == "sim") {
                feedContent.append("<div data-inset='true' id='" + newsItem.slug + "'><p>" + newsItem.excerpt + "</p></div>");
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
    }



})