class Wizard {
	constructor(gameEngine, x, y, direction) {
		this.gameEngine = gameEngine;
		//this.spritesheet = ASSET_MANAGER.getAsset("./Paladin_Walking_Centered.png");
		//this.animator = new Animator(this.spritesheet, 0, 0, 118, 102, 8, 0.25, 6.7, false, true);
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Wizard_Spritesheet.png");
		this.direction = direction; // "left" or "right"
		this.animator = new Animator(this.spritesheet, 0, 428, 98, 90, 7, 0.15, 4, false, true);

		this.x = x;
		this.y = y;
		this.fireballs = [];
		this.fireballCooldown = 0;

	}
	update() {
		this.fireballCooldown -= this.gameEngine.clockTick;
		if (this.fireballCooldown <= 0) {
			this.shootFireball();
			this.fireballCooldown = 1;
		}
		this.fireballs.forEach(fireball => fireball.update());
		this.fireballs = this.fireballs.filter(fireball => !fireball.isOffScreen());
	}
	draw(ctx) {
		ctx.save();
		if (this.direction === "left") {
			ctx.scale(-1, 1);
			ctx.translate(-this.x * 2 - 98, 0);
		}
        this.animator.drawFrame(this.gameEngine.clockTick, ctx, this.x, this.y);
		ctx.restore();
		this.fireballs.forEach(fireball => fireball.draw(ctx));
    }

    shootFireball() {
       const fireballX = this.direction === "right" ? this.x + 98 : this.x - 64;
	   const fireball = new Fireball(this.gameEngine, fireballX, this.y + 45, this.direction);
	   this.fireballs.push(fireball);
    }
}