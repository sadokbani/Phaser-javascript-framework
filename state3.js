demo.state3 = function(){};



demo.state3.prototype = {
  preload: function(){

      game.load.spritesheet("btn1","assets/btn.png");
      game.load.image('1', 'assets/back/back1.png');
      

  },
  create: function(){
      if (game.device.desktop == false) {
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  
     game.scale.setMinMax(screen.width*0.75,screen.height*0.5, 
        game.width*0.36, game.height*0.4);

    
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
}
        
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
      
      game.add.tileSprite(0, 0, game.width,game.height, '1');
      
      
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(changeState, null, null, 2);
      
    this.label=game.add.text(game.width/4.5, game.height/3, 'press SPACE to play again ! ',{font: "50px Time New Roman", fill: "#800000"});
      
      this.a=localStorage.getItem("score");
      
      if(this.a<0){this.a = 0 ;}
       this.showscore=game.add.text(game.width/3.2, game.height/6, 'Your SCORE = ' + this.a ,{font: "50px Time New Roman", fill: "#800000"});
      
      var btnBack= game.add.button(game.world.centerX,  game.height/1.6 ,"btn1",this.clickme, this, 0, 1, 0);
      btnBack.anchor.set(0.5,0.5);
      
      game.input.onDown.add(changeState, this);
      
  },
    
    clickme: function(){
       location.href = "https://www.wazolab.tn/";
    
    },
  update: function(){
    
  }
};

function changeState(){
    console.log('i');
    game.state.start('state2');
}