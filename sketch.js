var bg, bg_img;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10
  , wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20,
  wall21, wall22, wall23, laser25, laser26;
var sofia, sofia_Img;
var edges;
var msg1, msg1Img;
var gamestate = 0;
var puzzel1, puzzel1Img;
var puzzel2, puzzel2Img;
var puzzel3, puzzel3Img;
var puzzel4, puzzel4Img;


function preload() {
  bg_img = loadImage("background.jpg");
  sofia_Img = loadImage("sprite_0.png");
  msg1Img = loadImage("sprite_01.png");
  puzzel1Img = loadImage("png1.png")
  puzzel2Img = loadImage("png2.png")
  puzzel3Img = loadImage("png 3.png")
  puzzel4Img = loadImage("png 4.png")
}

function setup() {
  createCanvas(1200, 600)
  edges = createEdgeSprites();

  if (gamestate === 0) {

    sofia = createSprite(200, 150, 13, 13);
    sofia.addImage(sofia_Img)
    sofia.scale = 0.18

    msg1 = createSprite(1000, 300)
    msg1.addImage(msg1Img)
    msg1.scale = 1.2;

    wall1 = createSprite(35, 50, 80, 20);
    wall2 = createSprite(111, 40, 24, 101);

    wall3 = createSprite(101, 130, 146, 24);
    wall4 = createSprite(180, 17, 129, 22);

    wall5 = createSprite(320, 77, 110, 22);
    wall6 = createSprite(210, 120, 20, 122);


    wall7 = createSprite(342, 160, 20, 111);
    wall8 = createSprite(279, 161, 64, 19);

    wall9 = createSprite(331, 249, 179, 22);
    wall10 = createSprite(200, 299, 22, 60);

    wall11 = createSprite(253, 309, 21, 80);
    wall12 = createSprite(329, 299, 156, 21);

    wall13 = createSprite(301, 372, 20, 62);
    wall14 = createSprite(225, 400, 92, 19);

    wall15 = createSprite(149, 334, 79, 20);
    wall16 = createSprite(130, 371, 21, 60);

    wall17 = createSprite(64, 258, 20, 92);
    wall18 = createSprite(176, 172, 79, 20);

    wall19 = createSprite(22, 255, 100, 22);
    wall20 = createSprite(93, 338, 22, 90);

    wall21 = createSprite(40, 355, 20, 78);
    wall22 = createSprite(138, 261, 72, 20);

    wall23 = createSprite(450, 100, 25, 360)

    //laser24 = createSprite(189, 361, 60, 5);
    laser25 = createSprite(114, 107, 80, 5);
    laser26 = createSprite(200, 230, 130, 5);

    laser25.velocityY = 0;
    laser25.velocityX = 3;

    laser26.velocityY = 0;
    laser26.velocityX = 3;

    //laser24.velocityY = 0;
    //laser24.velocityX = 3;
  }
}


function draw() {
  background(bg_img);


  if (gamestate === 0) {

    if (sofia.isTouching(laser25)) {
      sofia.y = 14;
      sofia.x = 29;
    }


    //if (sofia.isTouching(laser24)) {
    //sofia.y = 14;
    //sofia.x = 29;
    //}


    if (sofia.isTouching(laser26)) {
      sofia.y = 14;
      sofia.x = 29;
    }






    wall1.shapeColor = "red";
    wall2.shapeColor = "red";
    wall3.shapeColor = "red";
    wall4.shapeColor = "red";
    wall5.shapeColor = "red";
    wall6.shapeColor = "red";
    wall7.shapeColor = "red";
    wall8.shapeColor = "red";
    wall9.shapeColor = "red";
    wall10.shapeColor = "red";
    wall11.shapeColor = "red";
    wall12.shapeColor = "red";
    wall13.shapeColor = "blue";
    wall14.shapeColor = "red";
    wall15.shapeColor = "red";
    wall16.shapeColor = "red";
    wall17.shapeColor = "red";
    wall18.shapeColor = "red";
    wall19.shapeColor = "red";
    wall20.shapeColor = "red";
    wall21.shapeColor = "red";
    wall22.shapeColor = "red";
    wall23.shapeColor = "red";

    //laser24.shapeColor = "pink";
    laser25.shapeColor = "green";
    laser26.shapeColor = "pink";

    laser25.bounceOff(edges[0]);
    laser25.bounceOff(edges[1]);
    laser26.bounceOff(wall23);
    laser26.bounceOff(wall17);



    laser25.bounceOff(wall6);
    laser26.bounceOff(wall14);

    //laser24.bounceOff(wall13);
    //laser24.bounceOff(wall16);  




    // createEdgeSprites();
    sofia.bounceOff(edges[1]);

    textSize(27);
    text("Mac", 15, 15);

    if (gamestate === 0) {
      textSize(39)
      stroke("yellow")
      fill("black")

      text("FINISH THIS MAZE ", 550, 200)
      textSize(33)
      text("TO COMPLETE THIS LEVEL", 500, 250)
    }




    if (sofia.isTouching(wall1)) {
      sofia.y = 18;
      sofia.x = 12;
    }

    if (sofia.isTouching(wall2)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall3)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall4)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall5)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall6)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall7)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall8)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall9)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall10)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall11)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall12)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    //if (sofia.isTouching(wall13)) {
    //sofia.y = 14;
    //sofia.x = 29;
    //}

    if (sofia.isTouching(wall14)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall15)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall16)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall17)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall18)) {
      sofia.y = 14;
      sofia.x = 29;
    }


    if (sofia.isTouching(wall19)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall20)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall21)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    if (sofia.isTouching(wall22)) {
      sofia.y = 14;
      sofia.x = 29;
    }

    drawSprites();
  }

  if (sofia.isTouching(wall13)) {
    gamestate = 1;
    stroke("yellow")
    fill("blue")
    text("'LEVEL 1 COMPLETED'", 600, 300)
    text("PRESS SPACE TO GO TO LEVEL 2", 600, 200)
    //msg1.visible=false;


  }
  if (keyCode === 32 && gamestate === 1) {
    gamestate = 2
    background("pink")
    puzzle();
    //mouseDragged();
    
    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    wall23.visible = false
    laser25.visible = false
    laser26.visible = false
    msg1.visible=false
    sofia.visible=false
    
  

  }



  if (keyDown('UP_ARROW')) {
    sofia.y = sofia.y - 2
  }

  if (keyDown('DOWN_ARROW')) {
    sofia.y = sofia.y + 2
  }

  if (keyDown('RIGHT_ARROW')) {
    sofia.x = sofia.x + 2
  }

  if (keyDown('LEFT_ARROW')) {
    sofia.x = sofia.x - 2
  }

  else {
    sofia.setVelocity(0, 0);
  }

}

function puzzle() {
  background("pink");
  puzzel1 = createSprite(200, 30)
  puzzel1.addImage(puzzel1Img)
  puzzel1.scale = 0.1
  puzzel2 = createSprite(1000, 30)
  puzzel2.addImage(puzzel2Img)
  puzzel2.scale = 0.1
  puzzel3 = createSprite(200, 500)
  puzzel3.addImage(puzzel3Img)
  puzzel3.scale = 0.1
  puzzel4 = createSprite(1000, 500)
  puzzel4.addImage(puzzel4Img)
  puzzel4.scale = 0.1

  //if (puzzel1.isTouching(puzzel2) && puzzel1.isTouching(puzzel3) && puzzel1.isTouching(puzzel4)) {
   // text("Level 2 Completed", 600, 300);
   //  gamestate = 3;
 // }

  drawSprites();

}


function mouseDragged() {

  if(mouse.x === puzzel1.x){

    puzzel1.x = World.mouseX
    puzzel1.y = World.mouseY
  } 

 // puzzel2.x = World.mouseX
  //puzzel2.y = World.mouseY
  //puzzel3.x = World.mouseX
  //puzzel3.y = World.mouseY
  //puzzel4.x = World.mouseX
  //puzzel4.y = World.mouseY

}



