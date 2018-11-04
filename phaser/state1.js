var demo = {};
demo.state1 = function(){};



demo.state1.prototype = {
  preload: function(){
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
      this.label=game.add.text(game.width/6, game.height/10, '404',{font: "150px Time New Roman", fill: "#800000" }); 
      
      
     this.label=game.add.text(game.width/6, game.height/3, 'OOPS !!! It seems that your bird has',{font: "50px Time New Roman", fill: "#800000"}); 
       this.label=game.add.text(game.width/5, game.height/2.4, ' lost his way to this page ',{font: "50px Time New Roman", fill: "#800000"}); 
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(changeState, null, null, 2);
    this.label=game.add.text(game.width/4, game.height/1.6, 'press SPACE to start ! ',{font: "50px Time New Roman", fill: "#800000"});
      
   game.input.onDown.add(this.changeState, this);
      
  },
    
    changeState: function(){
    console.log('2');
    game.state.start('state2');
},
    
  update: function(){
    
  }
};

