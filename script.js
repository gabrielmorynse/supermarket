var itens;
var plataforms;
var player;
var piso;

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
	},

	/*criar os elementos que vão ser usados */
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.add.sprite(0,0,'fundo');
		plataforms = game.add.group();

		var piso = plataforms.create(0,game.world.height - 64,'piso');

		player = game.add.sprite();

		itens = game.add.group();
		itens.enableBody = true;

		for(var i = 0; i <5; i++){
				var item = itens.create(i*2,0,'arroz');
				item.body.gravity.y = 50;
				item.body.bounce.y = 0;
		}
	},

	/* lógica do jogo a ser verificada, colisão, pulo, etc.*/
	update: function(){
		game.physics.arcade.collide(itens);

	}

};

var game = new Phaser.Game(900, 600, Phaser.CANVAS);
game.state.add("Game",Game);
game.state.start("Game");