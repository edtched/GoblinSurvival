class GoblinPlayer {
	constructor(gameEngine) {
		this.gameEngine = gameEngine;
		//this.spritesheet = ASSET_MANAGER.getAsset("./Paladin_Walking_Centered.png");
		//this.animator = new Animator(this.spritesheet, 0, 0, 118, 102, 8, 0.25, 6.7, false, true);
		this.spritesheet = ASSET_MANAGER.getAsset("./GoblinSprite.png");
		
		this.animations = {
			up: new Animator(this.spritesheet, 235, 207, 33, 20, 6, 0.25, 1, false, true),
			down: new Animator(this.spritesheet, 235, 181, 33, 20, 6, 0.33, 1, false, true),
			right: new Animator(this.spritesheet, 235, 265, 33, 20, 6, 0.25, 1, false, true),
			left: new Animator(this.spritesheet, 235, 235, 33, 20, 6, 0.25, 1, true, true) 

		};
		this.currentAnimation = this.animations.down;
		this.direction = "down";
		this.x = 480;
		this.y = 700;
		this.speed = 100;

		this.pathLeft = 384;
		this.pathRight = 640;

	}
	update() {
		if (this.gameEngine.keys["ArrowUp"]) {
			this.y -= this.speed * this.gameEngine.clockTick;
			this.currentAnimation = this.animations.up;
			this.direction = "up";
		}
		if (this.gameEngine.keys["ArrowDown"]) {
			this.y += this.speed * this.gameEngine.clockTick;
			this.currentAnimation = this.animations.down;
			this.direction = "down";
		}
		if (this.gameEngine.keys["ArrowLeft"]) {
			this.x -= this.speed * this.gameEngine.clockTick;
			this.currentAnimation = this.animations.left;
			this.direction = "left";
		}
		if (this.gameEngine.keys["ArrowRight"]) {
			this.x += this.speed * this.gameEngine.clockTick;
			this.currentAnimation = this.animations.right;
			this.direction = "right";
		}
		this.x = Math.max(this.pathLeft - 32, Math.min(this.x, this.pathRight - 33));
		this.y = Math.max(0, Math.min(this.y, 768 - 20));
		//this.x = Math.max(0, Math.min(this.x, 1024 - 118));
		//this.y = Math.max(0, Math.min(this.y, 768 - 102));
		// this.gameEngine.entities.forEach(entity => {
        //     if (entity instanceof Wizard) {
        //         entity.fireballs.forEach(fireball => {
        //             if (fireball.collidesWith(this)) {
        //                 this.isAlive = false;
        //                 console.log("Game Over!");
        //             }
        //         });
        //     }
        // });
    }
	
	draw(ctx) {
		this.currentAnimation.drawFrame(this.gameEngine.clockTick, ctx, this.x, this.y);
		//ctx.fillStyle = "red";
		//ctx.fillRect(this.x, this.y, 32, 32);
	}
}