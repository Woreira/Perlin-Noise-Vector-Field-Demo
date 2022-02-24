class particle{
	constructor(px, py, speed, dir){
		this.pos = new vector2(px, py);
		this.speed = speed;
		this.dir = dir;
	}

	update(f){
		this.dir = vector2.fromAngle(f);
		this.pos = vector2.add(this.pos, vector2.mult(this.dir, this.speed));
		this.wrapAround();
	}

	draw(){
		sphere(this.pos.x, this.pos.y, 2, "red");
	}

	wrapAround(){
		if(this.pos.x > 1000){
			this.pos.x = 0;
		}else if(this.pos.x < 0){
			this.pos.x = 1000;
		}

		if(this.pos.y > 1000){
			this.pos.y = 0;
		}else if(this.pos.y < 0){
			this.pos.y = 1000;
		}
	}
};

class vector2{
	constructor(x, y){
		this.x = x;
		this.y = y;
	};

	static add(a, b){
		return new vector2(a.x + b.x, a.y + b.y);
	}

	static mult(v, a){
		return new vector2(v.x * a, v.y * a);
	}

	//somewhat normalized
	static randomNormalized(){
		return new vector2(Math.random() -0.5, Math.random() -0.5);
	}

	static fromAngle(f){
		return new vector2(Math.cos(f * Math.PI * 2), Math.sin(f * Math.PI * 2));
	}
};