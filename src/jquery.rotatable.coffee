# Note that when compiling with coffeescript, the plugin is wrapped in another
# anonymous function. We do not need to pass in undefined as well, since
# coffeescript uses (void 0) instead.
do ($ = jQuery, window, document) ->

	# window and document are passed through as local variable rather than global
	# as this (slightly) quickens the resolution process and can be more efficiently
	# minified (especially when both are regularly referenced in your plugin).

	# Create the defaults once
	pluginName = "rotatable"
	defaults = {}

	# The actual plugin constructor
	class Rotatable
		constructor: (@element, options) ->
			# jQuery has an extend method which merges the contents of two or
			# more objects, storing the result in the first object. The first object
			# is generally empty as we don't want to alter the default options for
			# future instances of the plugin
			@settings = $.extend {}, defaults, options
			@_defaults = defaults
			@_name = pluginName
			@init()

		init: ->
			# Place initialization logic here
			# You already have access to the DOM element and the options via the instance,
			# e.g., @element and @settings
			for elem in $(@element)
				$(elem).on(@settings.on, @makeRotatable)
				$(elem).on(@settings.off, @removeRotatable) if @settings.off

		makeRotatable: (e) ->
			$(e.currentTarget).addClass("rotatable")

		removeRotatable: (e) ->
			$(e.currentTarget).removeClass("rotatable") if $(e.currentTarget).hasClass("rotatable")

	# A really lightweight plugin wrapper around the constructor,
	# preventing against multiple instantiations
	$.fn[pluginName] = (options) ->
		@each ->
			if !$.data(@, "plugin_#{pluginName}")
				$.data(@, "plugin_#{pluginName}", new Rotatable(@, options))
