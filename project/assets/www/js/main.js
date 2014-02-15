$(document).on("pageinit", "#main", function() {
    var codex = "http://animecodex.com.br/api/get_recent_posts/";
    var network = "http://animecodexnetwork.com.br";
    var feedContent = $("#feedContent");
    var feedHome = $("#feedHome");
    var main = $("#main");
    var item = "";






    $("#main a").on("click", function() {
        var clicado = $(this).attr('rel');
        if (clicado == "AC") {
            siteCodex();
        } else if (clicado == "ACN") {
            siteNetwork();
        };
    });





    function siteCodex() {
        feedContent.html('<div id="loading" align="CENTER"><img src="img/wait.gif"></div>');
        getFeed(codex);
    }

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

    function populateFeed(response) {
        feedContent.html("");
        var num = 1;
        $.each(response.posts, function(i, newsItem) {

            if (num % 2 != 0) {
                feedContent.append("<div class='ui-block-a'><a class='ui-btn ui-shadow ui-corner-all' href='" + newsItem.url + "'>" + newsItem.title + "</a>  </div>  ");
            } else {
                feedContent.append("<div class='ui-block-b'><a class='ui-btn ui-shadow ui-corner-all' href='" + newsItem.url + "'>" + newsItem.title + "</a> </div>   ");
            }

            num += 1;
        });
    }

})