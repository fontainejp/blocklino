(function($) {
$.fn.brushTool = function(painter) {

// SET ESSENTIALS
var $canvas = this;
$canvas.unbind();
painter.clicks = 0;
var startX, startY, endX, endY;

var drawLine = function() {
	$canvas.drawLine({
		strokeWidth: painter.stroke,
		strokeStyle: painter.color,
		strokeCap: 'round',
		strokeJoin: 'round',
		x1: startX, y1: startY,
		x2: endX, y2: endY
	});
};

$canvas.on(painter.getTouchEventName('mousedown'), function(event) {
	painter.hist.push(painter.last.src=$canvas[0].toDataURL('image/png'));
	painter.undoHist.length = 0;
	if (painter.press === true) {painter.clicks = 0;}
	if (painter.clicks === 0) {
		painter.drag = true;
		var pageCoords = painter.getPageCoords(event);
		startX = pageCoords.pageX;
		startY = pageCoords.pageY;
		endX = startX;
		endY = startY;
		$canvas.drawArc({
			fillStyle: painter.color,
			x: startX, y: startY,
			radius: (painter.stroke / 2),
			start: 0,
			end: 360
		});
		painter.clicks += 1;
	}
	event.preventDefault();
});

$canvas.on(painter.getTouchEventName('mouseup'), function(event) {
	painter.drag = false;
	painter.last.src = $canvas[0].toDataURL('image/png');
	painter.clicks = 0;
	event.preventDefault();
});

$canvas.on(painter.getTouchEventName('mousemove'), function(event) {
	if (painter.drag === true && painter.clicks >= 1) {
		startX = endX;
		startY = endY;
		var pageCoords = painter.getPageCoords(event);
		endX = pageCoords.pageX;
		endY = pageCoords.pageY;
		drawLine();
	}
	event.preventDefault();
});

};
})(jQuery);
