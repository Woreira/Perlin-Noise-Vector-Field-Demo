"use strict";
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');


var px = 0, py = 0;
const scale = 1;

window.onload = ()=>{
	start();
	loop();
}

function start(){
	clear();
	
	
}

function loop(){
	setInterval(update, 1000/120);
}

function update(){
	draw();
	
}

function draw(){
	//clear();
	//sphere(px, py, 10, rgbcolor(px, 0, py));
	for(var i = 0; i < canvas.width; i++){
		for(var j = 0; j < canvas.height; j++){
			
			sphere(i, j, 2, greyscale(Math.floor(Math.random() * 255)));
		}
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

