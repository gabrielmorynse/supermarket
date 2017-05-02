var itens;
var plataforms;
var keys;

var Game = {

	/*carregar os recurso durante o carregamento do jogo*/
	preload: function() {
		game.load.image('fundo','image/fundo.png');
		game.load.image('piso','image/piso.png');
		game.load.image('carrinho1','image/carrinho1.png');
		game.load.image('carrinho2','image/carrinho2.png');
		game.load.image('arroz','image/arroz.png');
		game.load.image('banana','image/banana.png');
		game.load.image('feijao','image/feijao.png');
		game.load.image('leite','image/leite.png');
		game.load.image('melancia','image/melancia.png');
		game.load.image('prate','image/prate.png');

		game.load.spritesheet('carrinho','image/carrinho.png',270, 249);
	},

	/*criar os elementos que vão ser usados */
	create: function(){
		keys = game.input.keyboard.createCursorKeys();
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0,0,'fundo');
		
		plataforms = game.add.group();
		plataforms.enableBody = true;

		var piso = plataforms.create(0,game.world.height - 64,'piso');

		/* prateleria para os itens*/
		var prate = plataforms.create(97, 243, 'prate');
		prate.body.immovable = true;

		/*criar carrinho*/
		var carrinho = game.add.sprite(50,game.world.height -250, 'carrinho');
		game.physics.arcade.enable(carrinho);
		carrinho.body.gravity.x = 90;

		carrinho.body.collideWorldBounds = true;


		itens = game.add.group();
		itens.enableBody = true;

		for(var i = 0; i <2; i++){
				var item = itens.create(i*2,0,'arroz');
				item.x = 150, 300;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;

				var item = itens.create(i*2,0,'banana');
				item.x = 270;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;

				var item = itens.create(i*2,0,'feijao');
				item.x = 400;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;

				var item = itens.create(i*2,0,'leite');
				item.x = 550;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;

				var item = itens.create(i*2,0,'melancia');
				item.x = 670;
				item.body.gravity.y = 50;
				item.body.bounce.y = 0.2;
				item.body.collideWorldBounds = true;
		}
	},

	/* lógica do jogo a ser verificada, colisão, pulo, etc.*/
	update: function(){
		game.physics.arcade.collide(itens, plataforms);

		
		if(keys.left.isDown){
			carrinho.body.velocity.x = -150;
		} else
		if(keys.right.isDown){
			carrinho.body.velocity.x = 150;
		}

	}

};

var game = new Phaser.Game(900, 600, Phaser.CANVAS);
game.state.add("Game",Game);
game.state.start("Game");
