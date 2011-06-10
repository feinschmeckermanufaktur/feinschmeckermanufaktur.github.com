jQuery(function() {

  jQuery(".scroll-to-anchor").click(function() {
    var offset = jQuery("#header").height() + 30;
    jQuery.scrollTo(jQuery(jQuery(this).attr("href")), {
      duration: 500,
      offset: {
        top: -offset, left: 0
      }
    });
    jQuery(this).parents("ul").first().children("li").removeClass("active");
    jQuery(this).parent().addClass("active");
    return false;
  });

});