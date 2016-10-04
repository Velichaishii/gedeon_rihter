$(document).ready(function() {

    var doc = $(document);


    doc.click(function (e) {
        var target = $(e.target),
            popup = target.closest(".popup");
            popup_open = target.closest(".popup_open");

        if ((!popup.length > 0 ) && (!popup_open.length > 0 )) {
            $(".popup").removeClass("visible");
            $(".site-wrap__overlay").fadeOut(400);
        }

    });


      $(".owl-carousel").owlCarousel({

          navigation: false, // Show next and prev buttons
          autoPlay: 10000,
          slideSpeed: 400,
          paginationSpeed: 300,
          singleItem: true

          // "singleItem:true" is a shortcut for:
          // items : 1,
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

    $(".btn-b__dd-btn-share-white").click(function(){
        $(".btn-b__dd-list").toggleClass("visible");
    });

    $(".btn-b__dd-btn-drop-menu").click(function(){
        $(".drop-menu").toggleClass("visible");
        $(".site-wrap__overlay").fadeToggle(400);
    });

    $(".btn-b__dd-btn-search").click(function(){
        $(".search-b").toggleClass("visible");
    });

    $(".drop-menu .btn-cancel").click(function(){
        $(".drop-menu").toggleClass("visible");
        $(".site-wrap__overlay").fadeToggle(400);
    });

    $(".authoriz-b-dm__df-entry").click(function(){
        $(".authoriz-b-dm__form").toggleClass("visible");
    });

    if ($("select").length > 0) {
        $('select').styler();
    }

});