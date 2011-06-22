jQuery(document).ready(function(){

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
  
  jQuery(window).scroll(function(e,u){
    var headerHeight = jQuery(".header").height();
    var nextEventHeight = jQuery('#next-event').height();
    var currentPosition = jQuery(window).scrollTop();
    if (currentPosition >= (headerHeight-nextEventHeight)) {
      jQuery('#next-event').addClass('down');
    } else {
      jQuery('#next-event').removeClass('down');
    }
  });

});
