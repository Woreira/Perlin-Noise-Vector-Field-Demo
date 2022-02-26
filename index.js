
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');
var particles = new Array(5000);

noise.seed(Math.random());
var period = 2 / 800;

window.onload = ()=>{
	start();
	startLoop();
}

function start(){
	clear();
	//img = image('noise.png', 0, 0, canvas.width, canvas.height);
	
	for(var i = 0; i < particles.length; i++){
		particles[i] = new particle(randomRange(0, canvas.width), randomRange(0, canvas.height), 2, vector2.randomNormalized());
	}
}
	

function startLoop(){
	setInterval(update, 1000/60);
}

function update(){
	for(var i = 0; i < particles.length; i++){
		var f = noise.perlin2(particles[i].pos.x * period, particles[i].pos.y * period);
		particles[i].update(f);
	}
	draw();
}

function draw(){
	for(var i = 0; i < particles.length; i++){
		particles[i].draw();
	}
}

function clear(){
	rect(0, 0, canvas.width, canvas.height, "white");
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

function randomRange(min, max){
	return (Math.random() * (max - min)) - min;
}