$(document).on("pageinit", "#main", function() {

    // Variables
    var urlCodex = "http://animecodex.com.br/api/get_recent_posts/";
    var UrlNetwork = "http://animecodexnetwork.com.br";
    var feedContent = $("#feedContent");
    var feedHome = $("#feedHome");
    var main = $("#main");
    var panel = $("#mypanel");
    var inputCheck = $("#sim");
    var mostrarResumo = false;
    var changeRead = $("input[name=leitura]:radio");
    var readStyle = "lista";
    var imagem = null;
    var imagemDafault = "img/icon.png";
    var loadingPage = "<div id='loading' align='CENTER'><img src='img/wait.gif'></div>";
    var categories = new Array();

    // Trigger configs()
    configs();

    // Reload panel
    panel.trigger("updatelayout");

    // Click event and get site
    main.find('a').on("click", function() {
        var clicado = $(this).attr('rel');
        if (clicado == "AC") {
            siteCodex();
        } else if (clicado == "ACN") {
            siteNetwork();
        }
    });




    // Feed AnimeCodex.Com
    function siteCodex() {
        feedContent.html(loadingPage);
        getFeed(urlCodex);
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
            }
        });

    }

    // Populate #feed
    function populateFeed(response) {
        feedContent.html("");
        $.each(response.posts, function(i, newsItem) {

            // Retrieve the categories
            var category = this.categories;
            getCategories(category);

            // Populate
            // Sem imagem
            if (readStyle == "lista") {
                feedContent.append("<a data-ajax='false' class='ui-btn ui-shadow ui-corner-all' href='" + newsItem.url + "'>" + newsItem.title + "<br><small>" + categories + "</small></a>");
                // Com resumo
                if (mostrarResumo == true) {
                    feedContent.append("<div data-inset='true' id='resumo'><p>" + newsItem.excerpt + "</p></div><hr>");
                }
            } else {
                // Com imagem
                if (newsItem.thumbnail) {
                    imagem = newsItem.thumbnail;
                } else {
                    imagem = imagemDafault;
                }
                feedContent.append(" <div id='newsEntry' align'CENTER'> <div class='newsSingle'> <div class='newsBgimg'><img src='" + imagem + "'> </div><a class='newsTitle' href='" + newsItem.url + "'>" + newsItem.title + "</a > <div class='newsResumo'>" + newsItem.excerpt + " </div> </div>");
            }
        });
    }

    // Get Categories
    function getCategories(i) {
        categories.length = 0;
        $.each(i, function(index, val) {
            /* iterate through array or object */
            categories.push(val.title);
        });
    }
    // Get Categories


    // Configurations
    function configs() {
        // Show Excerpt
        inputCheck.on('change', function() {
            mostrarResumo = $(this).is(":checked");

            siteCodex();
        });
        // Show Excerpt

        // Change read style
        changeRead.on('change', function() {

            val = $(this).val();
            if (val == "lista") {
                readStyle = "lista";
            } else if (val == "grid") {
                readStyle = "grid";
            }

            siteCodex();
        });
        // Change read style
    }
})