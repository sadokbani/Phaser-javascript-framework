demo.state3 = function(){};



demo.state3.prototype = {
  preload: function(){
     //      spritesheet(key, url, frameWidth, frameHeight, frameMax, margin, spacing) 
 
      game.load.spritesheet("btn1","assets/btn.png");
      game.load.image('1', 'assets/back/back1.png');
      

  },
  create: function(){
      if (game.device.desktop == false) {
    // Set the scaling mode to SHOW_ALL to show all the game
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // Set a minimum and maximum size for the game
    // Here the minimum is half the game size
    // And the maximum is the original game size
     game.scale.setMinMax(screen.width*0.937502,screen.height*0.5, 
        game.width*0.36, game.height*0.4);

    // Center the game horizontally and vertically
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
}
        
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
      
      game.add.tileSprite(0, 0, game.width,game.height, '1');
      
      
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(changeState, null, null, 2);
      
    this.label=game.add.text(game.width/3, game.height/3, 'press SPACE to play again ! ',{font: "30px Jazz LET, fantasy", fill: "#800000"});
      
      this.a=localStorage.getItem("score");
      
      if(this.a<0){this.a = 0 ;}
       this.showscore=game.add.text(game.width/2.5, game.height/6, 'Your SCORE = ' + this.a ,{font: "30px Jazz LET, fantasy", fill: "#800000"});
      
      var btnBack= game.add.button(game.world.centerX,  game.height/1.6 ,"btn1",this.clickme, this, 0, 1, 0);
      btnBack.anchor.set(0.5,0.5);
      
      game.input.onDown.add(changeState, this);
      
  },
    
    clickme: function(){
       location.href = "http://www.google.com";
//         window.location.href = "http://www.google.com";
//        
    },
  update: function(){
    
  }
};

function changeState(){
    console.log('i');
    game.state.start('state2');
}