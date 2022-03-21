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
		sphere(this.pos.x, this.pos.y, 0.5, "black");
	}

	//particles leave on one side, they appear in the other
	wrapAround(){
		if(this.pos.x > canvas.width){
			this.pos.x = 0;
		}else if(this.pos.x < 0){
			this.pos.x = canvas.width;
		}

		if(this.pos.y > canvas.height){
			this.pos.y = 0;
		}else if(this.pos.y < 0){
			this.pos.y = canvas.height;
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

	//somewhat normalized, no need for dead mathematical precision here
	static randomNormalized(){
		return new vector2(Math.random() -0.5, Math.random() -0.5);
	}

	//gets the angle vector from a scalar
	static fromAngle(f){
		return new vector2(Math.cos(f * Math.PI * 2), Math.sin(f * Math.PI * 2));
	}
};