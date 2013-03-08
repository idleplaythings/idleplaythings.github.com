(function($){
  function thumbnails() {
    var src = $(this).attr('src');

    if (src.indexOf('_thumb.') == -1) {
      return false;
    }

    return true;
  }

  function linkToFullsize() {
    $(this).wrap('<a href="' + $(this).attr('src').replace(/_thumb/, '') + '"></a>');
  }

  $.fn.processBlogPostImages = function() {
    $('img', this).filter(thumbnails).each(linkToFullsize);
  };
})(jQuery);