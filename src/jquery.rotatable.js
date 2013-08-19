(function() {
  (function($, window, document) {
    var Rotatable, defaults, pluginName;
    pluginName = "rotatable";
    defaults = {
      property: "value"
    };
    Rotatable = (function() {
      function Rotatable(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      Rotatable.prototype.init = function() {
        return $(this.element).each(function() {
          $(this).on("mouseover", function(e) {
            return $(e.currentTarget).addClass("rotatable");
          });
          return $(this).on("mouseout", function(e) {
            if ($(e.currentTarget).hasClass("rotatable")) {
              return $(e.currentTarget).removeClass("rotatable");
            }
          });
        });
      };

      Rotatable.prototype.sayHi = function(e) {};

      return Rotatable;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Rotatable(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
