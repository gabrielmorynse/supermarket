var itens;
var item;
var plataforms;
var keys;
var txtPontos;
var pontos = 0;
var counter = 0;
var text = 0;
var music;
var Game = {

	/*carregar os recurso durante o carregamento do jogo*/
	preload: function() {
		game.load.spritesheet('carrinho','image/carrinho.png',270, 249);
		game.load.image('fundo','image/fundo.png');
		game.load.image('piso','image/piso.png');
		game.load.image('arroz','image/arroz.png');
		game.load.image('banana','image/banana.png');
		game.load.image('feijao','image/feijao.png');
		game.load.image('leite','image/leite.png');
		game.load.image('melancia','image/melancia.png');
		game.load.image('prate','image/prate.png');
		game.load.image('carFundo','image/carFundo.png');
		game.load.audio('Roberto', ['Music/Roberto.mp3', 'Music/Roberto.mp3']);
	},

	/*criar os elementos que vão ser usados */
	create: function(){
		keys = game.input.keyboard.createCursorKeys();
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0,0,'fundo');
	
		plataforms = game.add.group();
		plataforms.enableBody = true;

		/* prateleria e piso para os itens*/
		var piso = plataforms.create(0,game.world.height - 64,'piso');
		piso.body.immovable = true;

		var prate = plataforms.create(97, 243, 'prate');
		prate.body.immovable = true;

		var carFundo = plataforms.create(155, 10, 'carFundo');
		carFundo.body.immovable = true;
		carFundo.x = 90;
		carFundo.y = 500;

		itens = game.add.group();
		itens.enableBody = true;

		game.input.mouse.capture = true;

		text = game.add.text(game.world.centerX, game.world.centerY, 'Tempo: 0', {fontSize:'18px', fill:'#fff'});
    		text.anchor.setTo(0, 10.8);

		for(var i = 0; i <1; i++){
				
				var carrinho = game.add.sprite(10,game.world.height -50, 'carrinho');
				game.physics.arcade.enable(carrinho);
				carrinho.body.gravity.x = 0;
				carrinho.body.collideWorldBounds = true;

				var item = itens.create(i*2,0,'arroz');
				item.x = 150, 300;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;
				item.inputEnabled = true;
    			item.input.enableDrag(true);

				var item = itens.create(i*2,0,'banana');
				item.x = 270;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;
				item.inputEnabled = true;
    			item.input.enableDrag(true);

				var item = itens.create(i*2,0,'feijao');
				item.x = 400;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;
				item.inputEnabled = true;
    			item.input.enableDrag(true);

				var item = itens.create(i*2,0,'leite');
				item.x = 550;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;
				item.inputEnabled = true;
    			item.input.enableDrag(true);

				var item = itens.create(i*2,0,'melancia');
				item.x = 670;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;
				item.inputEnabled = true;
    			item.input.enableDrag(true);

    			txtPontos = game.add.text(10,10,'Pontos: 0',{fontSize:'18px', fill:'#fff'});

    			game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);

		}
	},

	/* lógica do jogo a ser verificada, colisão, pulo, etc.*/
	update: function(){
		game.physics.arcade.collide(itens, plataforms);
				
		/*Captura click do mouse */
		game.debug.text("Left Button: " + game.input.activePointer.leftButton.isDown, 300, 132);
    	game.debug.text("Middle Button: " + game.input.activePointer.middleButton.isDown, 300, 196);
    	game.debug.text("Right Button: " + game.input.activePointer.rightButton.isDown, 300, 260);

	},

};

var game = new Phaser.Game(900, 600, Phaser.CANVAS);
game.state.add("Game",Game);
game.state.start("Game");