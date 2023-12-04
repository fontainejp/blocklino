(function($) {
$.fn.rectTool = function(painter) {

// DECLARE VARIABLES
var $canvas = this;
$canvas.unbind();

var startX, startY, currentX, currentY, width, height;

// MAKE RECTANGLES
function makeRect() {
	$canvas.drawRect({
		fillStyle: painter.color,
		x: currentX, y: currentY,
		width: Math.abs(width),
		height: Math.abs(height),
		fromCenter: false
	});
}

// MOUSE DOWN STARTS DRAWING
$canvas.on(painter.getTouchEventName('mousedown'), function(event) {
	painter.hist.push(painter.last.src=$canvas[0].toDataURL('image/png'));
	var pageCoords = painter.getPageCoords(event);
	startX = pageCoords.pageX;
	startY = pageCoords.pageY;
	width = 0;
	height = 0;
	makeRect();
	painter.drag = true;
	event.preventDefault();
});

// MOUSE UP STOPS DRAWING
$canvas.on(painter.getTouchEventName('mouseup'), function(event) {
	painter.drag = false;
	width = 0;
	height = 0;
	painter.last.src=$canvas[0].toDataURL('image/png');
	event.preventDefault();
});

// DRAG MOUSE TO DRAW
$canvas.on(painter.getTouchEventName('mousemove'), function(event) {
if (painter.drag === true) {

	painter.clearCanvas();
	$canvas.drawImage({
		source:painter.last.src,
		x: 0, y: 0,
		width: painter.canvasW, height: painter.canvasH,
		fromCenter: false,
		load: function() {

			var pageCoords = painter.getPageCoords(event);
			var eventX = pageCoords.pageX;
			var eventY = pageCoords.pageY;
			var dx = eventX - startX;
			var dy = eventY - startY;

			if (dx < 0) {
				currentX = eventX;
			} else {
				currentX = startX;
			}
			if (dy < 0) {
				currentY = eventY;
			} else {
				currentY = startY;
			}

			width = Math.abs(dx);
			height = Math.abs(dy);

			makeRect();

		}
	});
	event.preventDefault();
}
});

};
})(jQuery);
