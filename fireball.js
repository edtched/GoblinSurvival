class Fireball {
	constructor(gameEngine, x, y, direction) {
		this.gameEngine = gameEngine;
		//this.spritesheet = ASSET_MANAGER.getAsset("./Paladin_Walking_Centered.png");
		//this.animator = new Animator(this.spritesheet, 0, 0, 118, 102, 8, 0.25, 6.7, false, true);
		this.spritesheet = ASSET_MANAGER.getAsset("./FireballSprite.png");
		this.animator = new Animator(this.spritesheet, 0, 275, 64, 25, 8, 0.15, 0, false, true);

		this.x = x;
		this.y = y;
		this.speed = 300;
		this.direction = direction;

	}
	update() {
		if (this.direction === "right") {
			this.x += this.speed * this.gameEngine.clockTick;
		} else {
			this.x -= this.speed * this.gameEngine.clockTick;
		}
	}
	draw(ctx) {
		ctx.save();
		if (this.direction == "left") {
			ctx.scale(-1, 1);
			ctx.translate(-this.x * 2 - 64, 0);
		}
		this.animator.drawFrame(this.gameEngine.clockTick, ctx, this.x, this.y);
		ctx.restore();
    }

	isOffScreen() {
		return this.x > 1024 || this.x < -64;
	}
	//collidesWith(goblinplayer) {
	//	const fireballCenter = {
	//		x: this.x + 32, y: this.y + 12.5
	//	}
	//	const goblinplayerCenter = {
	//		x: goblinplayer.x + 16.5, y: goblinplayer.y + 10
	//	}
	//	return getDistance(fireballCenter, goblinplayerCenter) < 24;
	//}
    
//
}