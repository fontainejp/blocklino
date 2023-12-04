window.addEventListener('load', function load(event){
	var columns = document.querySelectorAll("button");
	var strokeStyle = document.getElementById("strokeStyle");
	var lineWidth = document.getElementById("lineWidth");
	shapes = [];
	var filled = false;
	var shapenumber = 0;
	for(var i=0;i<columns.length;i++) columns[i].addEventListener("click", main);
	function main(){
		var counter = this.id;
		var columns = document.querySelectorAll("button");
		for(var i=0;i<columns.length;i++){
			var id = document.getElementById(columns[i].id);
			id.classList.remove("selected");
		}
		var id = document.getElementById(counter);
		id.className = "selected";
		var canvas = document.getElementById('jcanvas');
		context = canvas.getContext('2d');
		imagery = new Image();
		image = new Image();
		pos = {};
		saveImage();
		context.lineWidth = lineWidth.value;
		context.strokeStyle = strokeStyle.value;
		context.fillStyle = strokeStyle.value;
		editing = false;
		dragging = false;
		extra = [{ 
			'brush': pencil, 'image': image, 'lines':lines, 'circle': circle, 'polygon':polygon, 'clear':clear
		}];
		if(counter == 'clear'){
			context.clearRect(0, 0, canvas.width, canvas.height);
			shapenumber = 0;
			shapes = []; 
			saveImage();
		}
		function windowToCanvas(x,y){
			var bbox = canvas.getBoundingClientRect();
			return { x:x - bbox.left*(canvas.width/bbox.width),
					 y:y - bbox.top*(canvas.height/bbox.height)
					};
		}
		function saveImage(){
			imagery = context.getImageData(0,0,canvas.width,canvas.height);
		}
		function loadImage(){
			context.putImageData(imagery,0,0);
		}
		canvas.onmousedown = function(e){
			saveImage();
			var loc = windowToCanvas(e.clientX, e.clientY);
			pos = loc;
			e.preventDefault();		
			dragging = true;
		}
		canvas.onmousemove = function(e){
			e.preventDefault();
			var loc = windowToCanvas(e.clientX, e.clientY);
			if(dragging){
				loadImage();
				if(counter == 'brush'){
					pencil(context, context.strokeStyle, context.lineWidth, loc);
				}else if(counter == 'circle'){
					var object = new construct(context, context.strokeStyle,context.fillStyle, context.lineWidth,loc, pos, counter);
					object.creation();
					shapes.push(object);
				}else if(counter == 'lines'){
					var object = new construct(context, context.strokeStyle, context.fillStyle, context.lineWidth,loc, pos, counter);
					object.creation();
					shapes.push(object);
				}else if(counter == 'polygon'){
					var object = new construct(context, context.strokeStyle, context.fillStyle, context.lineWidth,loc, pos, counter);
					object.creation();
					shapes.push(object);
				}else{}
			}
		}
		canvas.onmouseup = function(e){
			e.preventDefault();
			context.beginPath();
			saveImage();
			if(dragging == true){
				shapes[shapenumber] = shapes[shapes.length - 1];
				shapenumber++;
				shapes.length=shapenumber;
			}
			dragging = false;
		}
		strokeStyle.onchange = function(e){
			context.strokeStyle = strokeStyle.value;
		}
		lineWidth.onchange = function(e){
			context.lineWidth = lineWidth.value;
		}
		function construct(context, strokeStyle, fillStyle, lineWidth, loc, pos, counter){
			this.context= context;
			this.strokeStyle = strokeStyle;
			this.lineWidth = lineWidth;
			this.loc= loc;
			this.pos= pos;
			this.counter= counter;
			this.fillStyle = fillStyle;
			this.filled = false;
			this.creation = extra[0][counter];
		}
		function lines(){
			context.lineWidth = this.lineWidth;
			context.strokeStyle = this.strokeStyle;
			context.beginPath();
			context.moveTo(this.pos.x,this.pos.y);
			context.lineTo(this.loc.x, this.loc.y);
			context.stroke();
		}
		function circle(){
			context.lineWidth = this.lineWidth;
			context.strokeStyle = this.strokeStyle;
			var radius = Math.sqrt((this.loc.x-this.pos.x)*(this.loc.x-this.pos.x) + (this.loc.y-this.pos.y)*(this.loc.y-this.pos.y));
			context.beginPath();
			context.arc(this.pos.x, this.pos.y, radius, 0, 2*Math.PI,false);
			context.closePath();
			context.fill();
		}
		function polygon(){
			context.lineWidth = this.lineWidth;
			context.fillStyle = this.strokeStyle;
			context.beginPath();
			context.fillRect(this.pos.x, this.pos.y, this.loc.x-this.pos.x, this.loc.y-this.pos.y);
			context.stroke();
		}
		function pencil(context, strokeStyle, lineWidth, loc){
			context.lineWidth = lineWidth;
			context.strokeStyle = strokeStyle;
			context.moveTo(pos.x,pos.y);
			context.lineTo(loc.x,loc.y);
			context.stroke();
			pos = loc;
		}
	}
})