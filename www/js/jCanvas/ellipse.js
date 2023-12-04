(function($) {
$.fn.ellipseTool = function(painter) {

// SET ESSENTIALS
var $canvas = this;
$canvas.unbind();

var startX, startY, currentX, currentY, width, height;

// DRAW ELLIPSE
function makeEllipse() {
	$canvas.drawEllipse({
		fillStyle: painter.color,
		x: currentX, y: currentY,
		width: Math.abs(width), height: Math.abs(height),
		fromCenter: false
	});
}

// MOUSE DOWN STARTS DRAWING
$canvas.on(painter.getTouchEventName('mousedown'), function(event) {
	painter.hist.push(painter.last.src=$canvas[0].toDataURL('image/png'));
	painter.undoHist.length = 0;
	painter.drag = true;

	width = 0;
 	height = 0;
	var pageCoords = painter.getPageCoords(event);
 	startX = pageCoords.pageX;
	startY = pageCoords.pageY;

	makeEllipse();
	event.preventDefault();
});

// MOUSE UP STOPS DRAWING
$canvas.on(painter.getTouchEventName('mouseup'), function(event) {
	painter.drag = false;
	painter.last.src = $canvas[0].toDataURL('image/png');
	event.preventDefault();
});

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
			if (dy < 0 && painter.press === false) {
				currentY = eventY;
			} else {
				currentY = startY;
			}

			width = Math.abs(dx);
			height = Math.abs(dy);

			makeEllipse();

		}
	});
	event.preventDefault();
}
});

};
})(jQuery);
