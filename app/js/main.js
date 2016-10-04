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
 
});