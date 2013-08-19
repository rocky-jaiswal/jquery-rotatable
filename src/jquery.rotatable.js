(function() {
  (function($, window, document) {
    var Rotatable, defaults, pluginName;
    pluginName = "rotatable";
    defaults = {};
    Rotatable = (function() {
      function Rotatable(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      Rotatable.prototype.init = function() {
        var elem, _i, _len, _ref, _results;
        _ref = $(this.element);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elem = _ref[_i];
          $(elem).on(this.settings.on, this.makeRotatable);
          if (this.settings.off) {
            _results.push($(elem).on(this.settings.off, this.removeRotatable));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      Rotatable.prototype.makeRotatable = function(e) {
        return $(e.currentTarget).addClass("rotatable");
      };

      Rotatable.prototype.removeRotatable = function(e) {
        if ($(e.currentTarget).hasClass("rotatable")) {
          return $(e.currentTarget).removeClass("rotatable");
        }
      };

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
