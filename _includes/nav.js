(function($){
  var CURRENT_CLASS = 'current';

  function clearHighlights(root) {
    $('a', root).removeClass(CURRENT_CLASS);
  }

  function highlightFirstLinkInContainer(root) {
    $($('a', root).first().parent()[0]).addClass(CURRENT_CLASS);
  }

  function highlightCurrentCurrentLinkInContainer(root) {
    return root.each(function() {
      var $this = $(this);

      $('a', $this)
        .each(function(index, element) {
          if (window.location.pathname !== $(element).attr('href')) {
            return true;
          }

          $(this).parents('li').addClass(CURRENT_CLASS);
      });
    });
  }

  $.fn.highlightCurrentNavItem = function() {
    clearHighlights(this);

    if (window.location.pathname === "/") {
      highlightFirstLinkInContainer(this);
    } else {
      highlightCurrentCurrentLinkInContainer(this);
    }
  };
})(jQuery);