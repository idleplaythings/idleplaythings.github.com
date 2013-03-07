(function($){
  $.fn.processTwitterLinks = function() {
    return this.each(function() {
      var $this = $(this);

      $('a.tweet', $this).click(function(event) {
        var url = this.href + '?';
        var urlComponents = [];
        urlComponents.push('text=' + encodeURIComponent(window.document.title));
        urlComponents.push('&url=' + window.location.href);
        urlComponents.push('&via=' + encodeURIComponent($(this).data('via')));

        window.open(url + urlComponents.join('&'), 'twitter', 'status=1,width=550,height=450');
        event.preventDefault();
        return false;
      });
    });
  };
})(jQuery);