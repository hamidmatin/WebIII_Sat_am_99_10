(function ($) {
  $.fn.accordion = function (options) {
    const defs = {
      duration: 400,
      singleSelect: true,
    };

    const opts = $.extend({}, defs, options);

    return this.each(function () {
      const accordion = $(this);
      const titles = accordion.children('.title');
      const contents = accordion.children('.content');

      if (opts.singleSelect) {
        contents.not(':first').hide();

        titles.click(function () {
          // const current = $(this);
          const nextContent = $(this).next();

          if (nextContent.is(':hidden')) {
            contents.slideUp(opts.duration);
            nextContent.slideDown(opts.duration);
          }
        });
      } else {
        titles.click(function () {
          $(this).next().slideToggle(opts.duration);
        });
      }
    });
  };
})(jQuery);
