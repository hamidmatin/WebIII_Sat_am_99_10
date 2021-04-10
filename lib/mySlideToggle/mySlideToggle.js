(function ($) {
  $.fn.mySlideToggle = function (options) {
    const defs = {
      direction: 'left',
      duration: 600,
    };

    const opts = $.extend({}, defs, options);

    return this.each(function () {
      switch (opts.direction) {
        case 'up':
          $(this).animate({ height: 'toggle' }, opts.duration);
          break;

        case 'left':
          $(this).animate({ width: 'toggle' }, opts.duration);
          break;

        default:
          break;
      }
    });
  };
})(jQuery);
