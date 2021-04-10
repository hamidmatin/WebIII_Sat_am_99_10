(function ($) {
  $.fn.smoothScrool = function (options) {
    return this.each(function () {
      const defs = {
        duration: 600,
      };

      const opts = $.extend({}, defs, options);
      const hash = this.hash;
      const target = $(hash);

      let topPosition = target.offset().top;
      $('html').animate(
        {
          scrollTop: topPosition,
        },
        opts.duration,
        function () {
          window.location.hash = hash;
        }
      );
    });
  };
})(jQuery);
