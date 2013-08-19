# jQuery Rotatable plugin

### A simple jquery plugin to rotate stuff with pure CSS3 animations

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.rotatable.min.js"></script>
	```
3. Include the CSS from the "styles" folder in your project.

4. Call the plugin, in the jQuery ready function, passing the events to trigger the rotation "on" and "off" (off is optional) :

	```javascript
	$("#element").rotatable({on: "mouseover", off: "mouseout"});
	```
5. Move your mouse over the "#element" and watch it rotate.


## License

[MIT License](http://opensource.org/licenses/MIT)
