const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//ASSET_MANAGER.queueDownload("./Paladin_Walking_Centered.png")
ASSET_MANAGER.queueDownload("./GoblinSprite.png");
ASSET_MANAGER.queueDownload("./Grass.png");
ASSET_MANAGER.queueDownload("./Wizard_Spritesheet.png");
ASSET_MANAGER.queueDownload("./FireballSprite.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	const gameEngine = new GameEngine();
	gameEngine.init(ctx);

	const goblinplayer = new GoblinPlayer(gameEngine);
	gameEngine.addEntity(goblinplayer);

	const wizard = new Wizard(gameEngine, 0, 300, "right");
	const wizard2 = new Wizard(gameEngine, 900, 300, "left");
	const wizard3 = new Wizard(gameEngine, 0, 100, "right");
	const wizard4 = new Wizard(gameEngine, 900, 100, "left");
	gameEngine.addEntity(wizard);
	gameEngine.addEntity(wizard2);
	gameEngine.addEntity(wizard3);
	gameEngine.addEntity(wizard4);

	gameEngine.start();
});
