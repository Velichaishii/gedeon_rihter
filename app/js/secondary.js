$(document).ready(function(){

    $(".btn-b__dd-btn-share-white").click(function(){
        $(".btn-b__dd-list").toggleClass("visible");
    });

    $(".btn-b__dd-btn-drop-menu").click(function(){
        $(".drop-menu").toggleClass("visible");
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