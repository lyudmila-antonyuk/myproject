let accordion = (function () {
  let $accordion = $(".incentivized");
  let $accordion_header = $accordion.find(".content_concepts");
  let $accordion_item = $(".businesses_sprin");

  // default settings
  let settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false,
  };

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on("click", function () {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $(".businesses_sprin.active").length > 1) {
        $(".businesses_sprin.active:not(:first)").removeClass("active");
      }

      // reveal the active accordion bodies
      $(".businesses_sprin.active").find("> .posite_organic").show();
    },
    toggle: function ($this) {
      if (
        settings.oneOpen &&
        $this[0] !=
          $this
            .closest(".incentivized")
            .find("> .businesses_sprin.active > .content_concepts")[0]
      ) {
        $this
          .closest(".incentivized")
          .find("> .businesses_sprin")
          .removeClass("active")
          .find(".posite_organic")
          .slideUp();
      }

      // show/hide the clicked accordion item
      $this.closest(".businesses_sprin").toggleClass("active");
      $this.next().stop().slideToggle(settings.speed);
    },
  };
})();

$(document).ready(function () {
  accordion.init({
    speed: 300,
    oneOpen: true,
  });
});
