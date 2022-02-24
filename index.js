
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');
var particles = new Array(100);


window.onload = ()=>{
	start();
	startLoop();
}

function start(){
	clear();
	image('noise.png', 0, 0, canvas.width, canvas.height);
	for(var i = 0; i < particles.length; i++){
		particles[i] = new particle(canvas.width/2, canvas.height/2, Math.random() - 0.5, Math.random() - 0.5);
	}
	
}

function startLoop(){
	setInterval(update, 1000/30);
}

function update(){
	//sphere(0,0,200,"red");
	
	for(var i = 0; i < particles.length; i++){
		particles[i].update();
	}
	draw();
}

function draw(){
	for(var i = 0; i < particles.length; i++){
		particles[i].draw();
	}
}

function clear(){
	rect(0, 0, canvas.width, canvas.height, "black");
}

function rect(x, y, w, h, c){
	canvasContext.fillStyle = c;
	canvasContext.fillRect(x, y, w, h);
}

function square(x, y, l, c){
	rect(x, y, l, l, c);
}

function sphere(x, y, r, c){
	canvasContext.fillStyle = c;
	canvasContext.beginPath();
	canvasContext.ellipse(x, y, r, r, 0, 0, Math.PI*2, false);
	canvasContext.fill();
}

function rgbcolor(r, g, b){
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function greyscale(g){
	return rgbcolor(g, g, g);
}

function image(source, x, y, w, h){
	var img = new Image();   // Create new img element
	img.onload = function(){
		canvasContext.drawImage(img, x, y, w, h);
	};
	
	img.src = source; // Set source path
	return img;
}

