demo.state2 = function(){};



demo.state2.prototype = {
 preload: function() { 
        game.load.image('bird', 'assets/aaa.png');
        game.load.image('pipe', 'assets/3.png');
        game.load.image('pipe1', 'assets/1.png');
        game.load.image('pipe2', 'assets/2.png');
//        game.load.image('background', 'assets/back3.png');
        game.load.image('1', 'assets/back/back1.png');
        game.load.image('2', 'assets/back/back2.png');
        game.load.image('3', 'assets/back/back3.png');
        game.load.image('4', 'assets/back/back4.png');
        game.load.image('5', 'assets/back/back5.png');
        game.load.image('6', 'assets/back/back6.png');
        game.load.image('7', 'assets/back/back7.png');
        game.load.audio('jump', 'assets/debut.wav'); 
        game.load.audio('hit', 'assets/fin.wav');
        game.load.audio('point', 'assets/point.wav');
     $("#SHFB").hide();
    },

    create: function() { 
        
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
//        game.input.onDown.add(this.jump, this);
}
        
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
        // Change the background color of the game to blue
//    var bc = Math.floor(Math.random() * 7) + 1;
//        if(bc == 1){game.add.tileSprite(0, 0, game.width,game.height, '1');}
//        if(bc == 2){game.add.tileSprite(0, 0, game.width,game.height, '2');}
//        if(bc == 3){game.add.tileSprite(0, 0, game.width,game.height, '3');}
//        if(bc == 4){game.add.tileSprite(0, 0, game.width,game.height, '4');}
//        if(bc == 5){game.add.tileSprite(0, 0, game.width,game.height, '5');}
//        if(bc == 6){game.add.tileSprite(0, 0, game.width,game.height, '6');}
//        if(bc == 7){game.add.tileSprite(0, 0, game.width,game.height, '7');}
        game.add.tileSprite(0, 0, game.width,game.height, '1');
       

    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Display the bird at the position x=100 and y=245
    this.bird = game.add.sprite(100, 245, 'bird');

    // Add physics to the bird
    // Needed for: movements, gravity, collisions, etc.
    game.physics.arcade.enable(this.bird);

    // Add gravity to the bird to make it fall
    this.bird.body.gravity.y = 1000;  

    // Call the 'jump' function when the spacekey is hit
    var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this); 
        
    // Create an empty group
    this.pipes = game.add.group();
       
    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this); 
    
    this.score = -2;
    this.labelScore = game.add.text(game.width/2, game.height/8, "0", { font: "60px Jazz LET, fantasy", fill: "#ffffff" });   
        
    // Move the anchor to the left and downward
    this.bird.anchor.setTo(-0.2, 0.5); 
        
    this.jumpSound = game.add.audio('jump');
        this.hitSound = game.add.audio('hit'); 
     this.pointSound = game.add.audio('point');
        
    game.input.onDown.add(this.jump, this);
        
        
    },

    update: function() {
        // If the bird is out of the screen (too high or too low)
    // Call the 'restartGame' function
    if (this.bird.y < 0 || this.bird.y > 600)
        this.restartGame();
        
    game.physics.arcade.overlap(
    this.bird, this.pipes, this.hitPipe, null, this);
        
    if (this.bird.angle < 10)
    this.bird.angle += 1; 
         localStorage.setItem("score",this.score);

    },
    jump: function() {
        
    if (this.bird.alive == false)
    return;  
    // Add a vertical velocity to the bird
    this.bird.body.velocity.y = -350;
        
    // Create an animation on the bird
    var animation = game.add.tween(this.bird);

    // Change the angle of the bird to -20° in 100 milliseconds
    animation.to({angle: -10}, 100);

    // And start the animation
    animation.start(); 
        
    this.jumpSound.play(); 
    
},

// Restart the game
restartGame: function() {
    $("#SHFB").show();
    var facebookShare = document.querySelector('[data-js="facebook-share"]');
facebookShare.onclick = function(e) {
  e.preventDefault();
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
  if(facebookWindow.focus) { facebookWindow.focus(); }
    return false;
}  
    
    game.state.start('state3');
      
},
    addOnePipe: function(x, y, elem) {
    // Create a pipe at the position x and y
    var pip = game.add.sprite(x, y, elem);

    // Add the pipe to our previously created group
    this.pipes.add(pip);

    // Enable physics on the pipe 
    game.physics.arcade.enable(pip);

    // Add velocity to the pipe to make it move left
    pip.body.velocity.x = -200; 

    // Automatically kill the pipe when it's no longer visible 
    pip.checkWorldBounds = true;
    pip.outOfBoundsKill = true;
},
   
    addRowOfPipes: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    var hole = Math.floor(Math.random() * 4) + 1;

    // Add the 6 pipes 
    // With one big hole at position 'hole' and 'hole + 1'
    for (var i = 0; i <12; i++)
        if (i != hole && i != hole + 1 && i != hole + 2 && i != hole + 3 && i != hole + 4 ) 
            this.addOnePipe(700, i * 50 , 'pipe'); 
        if(i = hole + 4){
            this.addOnePipe(700, i * 50, 'pipe1' );
        }
        if(i = hole ){ 
            this.addOnePipe(700, i * 50, 'pipe2' );
        }
   
    this.score += 1;
    if(this.score>0){this.labelScore.text = "" + this.score;
    
                     
    this.pointSound.play(); }
},
    hitPipe: function() {
    // If the bird has already hit a pipe, do nothing
    // It means the bird is already falling off the screen
    if (this.bird.alive == false)
        return;

    // Set the alive property of the bird to false
    this.bird.alive = false;

    // Prevent new pipes from appearing
    game.time.events.remove(this.timer);

    // Go through all the pipes, and stop their movement
    this.pipes.forEach(function(p){
        p.body.velocity.x = 0;
    }, this);
        
    this.hitSound.play();
       
}, 
    
};
