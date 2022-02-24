class particle{
	constructor(px, py, sx, sy){
		this.pos = new vector2(px, py);
		this.speed = new vector2(sx, sy);
	}

	update(){
		this.pos = vector2.add(this.pos, this.speed);
	}

	draw(){
		sphere(this.pos.x, this.pos.y, 2, "red");
	}
};

class vector2{
	constructor(x, y){
		this.x = x;
		this.y = y;
	};

	static add(a, b){
		return new vector2(a.x + b.x, a.y + b.y);
	};
}