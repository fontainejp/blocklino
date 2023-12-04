(function($) {
$(document).ready(function() {

// Set globals
var painter = {
	$canvas: $('canvas'),
	color: 'blue medium',
	press: false,
	last: new Image(),
	hist: [],
	undoHist: [],
	clicks: 0,
	start: false,
	stroke: 2
};

function updateCanvasSize() {
	var image = painter.$canvas.getCanvasImage('image/png');
	painter.canvasW = 0.8*window.innerWidth;
	painter.canvasH = 0.6*window.innerHeight;
	painter.$canvas.prop({
		width: painter.canvasW,
		height: painter.canvasH
	});
	painter.$canvas.detectPixelRatio();
	if (image.length > 10) {
		painter.$canvas.drawImage({
			source: image,
			x: 0, y: 0,
			width: painter.canvasW, height: painter.canvasH,
			fromCenter: false
		});
	}
}

var $$ = {
	//stroke: $('#stroke'),
	//strokeContainer: $('#stroke-container'),
	//box: $('#box'),
	//tools: $('#tools'),
	clear: $('#clear'),
	//slider: $('#slider'),
	colors: $('#colors'),
	brush: $('#brush'),
	path: $('#path'),
	rect: $('#rect'),
	ellipse: $('#ellipse'),
	undo: $('#undo'),
	redo: $('#redo'),
	save: $('#save')
};

var duration;

// Map standard mouse events to touch events
var mouseEventMap = {
	'mousedown': 'touchstart',
	'mouseup': 'touchend',
	'mousemove': 'touchmove'
};

// Convert mouse event name to a corresponding touch event name (if possible)
function getTouchEventName(eventName) {
	// Detect touch event support
	if (window.ontouchstart !== undefined) {
		if (mouseEventMap[eventName]) {
			eventName = mouseEventMap[eventName];
		}
	}
	return eventName;
}
painter.getTouchEventName = getTouchEventName;

function getPageCoords(event) {
	if (event.originalEvent.changedTouches) {
		return {
			pageX: event.originalEvent.changedTouches[0].pageX,
			pageY: event.originalEvent.changedTouches[0].pageY
		};
	} else {
		return {
			pageX: event.pageX,
			pageY: event.pageY
		};
	}
}

painter.getPageCoords = getPageCoords;

// Clear canvas and set background
function clearCanvas() {
	painter.$canvas.drawRect({
		fillStyle: '#fff',
		x: 0, y: 0,
		width: painter.canvasW, height: painter.canvasH,
		fromCenter: false
	});
}
painter.clearCanvas = clearCanvas;

function drawCanvasState(image) {
	painter.$canvas.clearCanvas();
	painter.$canvas.drawImage({
		source: image,
		x: 0, y: 0,
		width: painter.canvasW, height: painter.canvasH,
		fromCenter: false
	});
}

// UPDATE STROKE
function updateStroke() {
	$$.stroke.width(painter.stroke);
	$$.stroke.height(painter.stroke);
	$$.stroke.css({
		marginLeft: ($$.box.width() - $$.stroke.width()) / 2,
		marginTop: ($$.box.height() - $$.stroke.height()) / 2
	});
if (painter.start === false) {
	$$.stroke.css({backgroundColor: painter.color});
	painter.start += 1;
} else if (painter.start === true) {
	$$.stroke.stop().animate({backgroundColor: painter.color}, duration);
}
	painter.start = true;
}

var colorMap = {
	red: {
		dark: '#a11',
		medium: '#c33',
		light: '#e55'
	},
	green: {
		dark: '#4b1',
		medium: '#6d2',
		light: '#8f4'
	},
	blue: {
		dark: '#14b',
		medium: '#36d',
		light: '#58f'
	},
	orange: {
		dark: '#d51',
		medium: '#f73',
		light: '#f95'
	},
	yellow: {
		dark: '#ed2',
		medium: '#fe3',
		light: '#ff5'
	},
	purple: {
		dark: '#75d',
		medium: '#96f',
		light: '#b8f'
	},
	black: {
		dark: '#000',
		medium: '#999',
		light: '#fff'
	}
};
var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'brown', 'white', 'black'];
var shades = ['light', 'medium', 'dark'];

// ADD COLORS
function addColors() {
	var color, c, s;
	function addColor(color, shade) {
		if (colorMap[color] && colorMap[color][shade]) {
			$('<div class="color ' + color + ' ' + shade + '" />')
			.css({
				backgroundColor: colorMap[color][shade]
			})
			.appendTo('#colors');
		}
	}
	for (s = 0; s < shades.length; s += 1) {
		for (c = 0; c < colors.length; c += 1) {
			color = colors[c];
			addColor(color, shades[s]);
		}
	}
}
// APPLY CHOSEN COLOR
function getColor(swatch) {
	var info = swatch.split(' ');
	swatch = $('.' + info[0] + '.' + info[1]);
	swatch.addClass('chosen');
	painter.color = swatch.css('backgroundColor');
	//updateStroke();
}
/* FILL SLIDER
function fillSlider(percent) {
	var sliderW = $$.slider.width(),
		filler = $$.slider.children('#filler');
	filler.width(sliderW * (percent / 100));
}*/

/* CHOSEN TOOL
$$.tools.on('click', '.tool', function() {
	$$.tools.find('.chosen').removeClass('chosen');
	$(this).addClass('chosen');
});*/
// CLEAR CANVAS BUTTON
$$.clear.on('click', function() {
	painter.$canvas.trigger('mouseup');
	painter.last.src = painter.$canvas[0].toDataURL('image/png');
	painter.hist.push(painter.last.src);
	clearCanvas();
	painter.clicks = 0;
});
// SAVE PICTURE BUTTON
$$.save.on('click', function() {
	var dataURL = painter.$canvas[0].toDataURL('image/png');
	painter.$canvas.mouseup();
	var saveWindow = window.open();
	saveWindow.document.write('<img src="' + dataURL + '" alt="" />');
});
// UNDO BUTTON
$$.undo.on('click', function() {
	painter.$canvas.mouseup();
	if (painter.hist.length > 0) {
		painter.clicks = 0;
		painter.undoHist.push(painter.$canvas[0].toDataURL('image/png'));
		var last = painter.hist.pop();
		drawCanvasState(last);
	}
});
// REDO BUTTON
$$.redo.on('click', function () {
	painter.$canvas.mouseup();
	if (painter.undoHist.length > 0) {
		painter.clicks = 0;
		var last = painter.undoHist.pop();
		painter.hist.push(painter.$canvas[0].toDataURL('image/png'));
		drawCanvasState(last);
	}
});
// PAINT TOOL BUTTON
$$.brush.on('click', function() {
	painter.$canvas.brushTool(painter);
});
// PATH TOOL BUTTON
$$.path.on('click', function() {
	painter.last.src = painter.$canvas[0].toDataURL('image/png');
	painter.$canvas.pathTool(painter);
});
// RECT TOOL BUTTON
$$.rect.on('click', function() {
	painter.last.src = painter.$canvas[0].toDataURL('image/png');
	painter.$canvas.rectTool(painter);
});
// ELLIPSE TOOL BUTTON
$$.ellipse.on('click', function() {
	painter.last.src = painter.$canvas[0].toDataURL('image/png');
	painter.$canvas.ellipseTool(painter);
});
// DEFAULT TOOL
$$.brush.click();

// CHOOSE COLOR
addColors();
getColor(painter.color);
$$.colors.on('click', '.color', function() {
	var $color = $(this);
	$('.color.chosen').removeClass('chosen');
	getColor($color.prop('class').replace(/(color|chosen) /gi, ''));
	$color.addClass('chosen');
	painter.clicks = 0;
	return false;
});

/* SLIDER
$$.slider.slider({
	min: 1,
	value: 20
});
var startVal = $$.slider.slider('option', 'value');
fillSlider(startVal);
painter.stroke = Math.round(startVal / 2);
updateStroke();

// SLIDE TO CHANGE STROKE
$$.slider.bind('slide', function(event, ui) {
	var percent = ui.value;
	painter.stroke = Math.round(percent / 2);
	updateStroke();
	fillSlider(percent);
});*/

updateCanvasSize();
clearCanvas();

});
}(jQuery, {}));
