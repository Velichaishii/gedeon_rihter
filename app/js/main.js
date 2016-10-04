$(document).ready(function() {
 
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
        $(".site-wrap").toggleClass("site-wrap-blackout");
    });

    $(".btn-b__dd-btn-search").click(function(){
        $(".search-b").toggleClass("visible");
    });

    $(".btn-cancel").click(function(){
        $(".drop-menu").toggleClass("visible");
    });

    $(".authoriz-b-dm__df-entry").click(function(){
        $(".authoriz-b-dm__form").toggleClass("visible");
    });

    if ($("select").length > 0) {
        $('select').styler();
    }
 
});