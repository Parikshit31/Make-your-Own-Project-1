
//Declare variables
var player1;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10;
var cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20;
var cardboard21, cardboard22, cardboard23, cardboard24, cardboard25, cardboard26, cardboard27, cardboard28,cardboard29,cardboard30;
var cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36,cardboard37,cardboard38;

//Load sounds and images
function preload(){
  //var img1 = load
  bg = loadImage("mazeimg.jpg")
}


function setup() {
  rectMode(CORNER)
  createCanvas(1200,1000);

  //Creating player
  player1 = createSprite(10, 20, 20, 20);
  player1.shapeColor = "red";

 cardboard1 = createSprite(590,40,1100,40);
 cardboard1.shapeColor=" neon green";
 
 cardboard2 = createSprite(40,380,40,900);
 cardboard2.shapeColor="neon green";
 
 cardboard3 = createSprite(270,120,500,40);
 cardboard3.shapeColor="neon green";
 
cardboard4 = createSprite(600,290,40,400);
 cardboard4.shapeColor="neon green";
 
 cardboard5 = createSprite(350,210,430,40);
 cardboard5.shapeColor="neon green";
 
 cardboard6 = createSprite(380,290,300,40);
 cardboard6.shapeColor="neon green";
 
cardboard7 = createSprite(1150,500,40,800);
cardboard7.shapeColor="neon green";

cardboard8 = createSprite(600,890,1180,40);
cardboard8.shapeColor="neon green";

cardboard9 = createSprite(820,310,40,500);//ball front down
cardboard9.shapeColor="neon green";

cardboard10 = createSprite(710,330,40,300);
cardboard10.shapeColor="neon green";

cardboard11 = createSprite(160,550,300,40);
cardboard11.shapeColor="neon green";

cardboard12 = createSprite(1040,380,300,40);
cardboard12.shapeColor="neon green";

 cardboard13 = createSprite(640,550,350,40);
cardboard13.shapeColor="neon green";

 cardboard14 = createSprite(430,460,600,40);
cardboard14.shapeColor="neon green";

 cardboard15 = createSprite(270,370,500,40);
cardboard15.shapeColor="neon green";

 cardboard16 = createSprite(150,250,40,100);
cardboard16.shapeColor="neon green";

 cardboard17 = createSprite(370,590,40,300);
cardboard17.shapeColor="neon green";

 cardboard18 = createSprite(250,630,250,40);
cardboard18.shapeColor="neon green";

 cardboard19 = createSprite(150,720,40,200);
cardboard19.shapeColor="neon green";

 cardboard20 = createSprite(600,680,40,300);
cardboard20.shapeColor="neon green";

cardboard21 = createSprite(490,700,40,200);
cardboard21.shapeColor="neon green";

cardboard22 = createSprite(940,290,250,40);
cardboard22.shapeColor="neon green"; 

cardboard23 = createSprite(930,460,40,200);
cardboard23.shapeColor="neon green";

 cardboard24 = createSprite(990,550,150,40);
cardboard24.shapeColor="neon green";

 cardboard25 = createSprite(1040,670,40,300);
cardboard25.shapeColor="neon green";

 cardboard26 = createSprite(760,120,150,40);
cardboard26.shapeColor="neon green";

cardboard27 = createSprite(1090,130,150,40);
cardboard27.shapeColor="neon green";

 cardboard28 = createSprite(985,200,190,40);
cardboard28.shapeColor="neon green";

cardboard29 = createSprite(1100,460,150,40);
cardboard29.shapeColor="neon green";

 cardboard30 = createSprite(820,630,250,40);
cardboard30.shapeColor="neon green";

 cardboard31 = createSprite(940,290,250,40);
cardboard31.shapeColor="neon green";

 cardboard32 = createSprite(320,800,150,40);
cardboard32.shapeColor="neon green";

cardboard33 = createSprite(820,780,40,160);
cardboard33.shapeColor="neon green";

cardboard34 = createSprite(710,760,40,250);
cardboard34.shapeColor="neon green";

cardboard35 = createSprite(920,720,40,170);
cardboard35.shapeColor="neon green";

cardboard36 = createSprite(270,780,40,160);
cardboard36.shapeColor="neon green";

cardboard37 = createSprite(540,800,150,40);
cardboard37.shapeColor="neon green";

cardboard38 = createSprite(930,160,40,100);
cardboard38.shapeColor="neon green";

cardboard1.visible = false;

cardboard2.visible = false;

cardboard3.visible = false;

cardboard4.visible = false;

cardboard5.visible = false;

cardboard6.visible = false;

cardboard7.visible = false;

cardboard8.visible = false;

cardboard8.visible = false;

cardboard9.visible = false;

cardboard10.visible = false;

cardboard11.visible = false;

cardboard12.visible = false;

cardboard13.visible = false;

cardboard14.visible = false;

cardboard15.visible = false;

cardboard16.visible = false;

cardboard17.visible = false;

cardboard18.visible = false;

cardboard19.visible = false;

cardboard20.visible = false;

cardboard21.visible = false;

cardboard22.visible = false;

cardboard23.visible = false;

cardboard24.visible = false;

cardboard25.visible = false;

cardboard26.visible = false;

cardboard27.visible = false;

cardboard28.visible = false;

cardboard29.visible = false;

cardboard30.visible = false;

cardboard31.visible = false;

cardboard32.visible = false;

cardboard33.visible = false;

cardboard34.visible = false;

cardboard35.visible = false;

cardboard36.visible = false;

cardboard37.visible = false;

cardboard38.visible = false;
 
}

function draw() {
  background(bg);  

  textSize(15)
  stroke("red");
  text(mouseX+","+mouseY , mouseX,mouseY);
  

  if(keyDown ("LEFT_ARROW")){
    player1.x = player1.x - 5
  }

  if(keyDown ("RIGHT_ARROW")){
    player1.x = player1.x + 5
  }

  if(keyDown ("DOWN_ARROW")){
    player1.y = player1.y + 5
  }

  if(keyDown ("UP_ARROW")){
    player1.y = player1.y - 5
  }

  player1.bounceOff(cardboard1);
 
  player1.bounceOff(cardboard2);
 
  player1.bounceOff(cardboard3);
 
  player1.bounceOff(cardboard4);
 
  player1.bounceOff(cardboard5);
 
  player1.bounceOff(cardboard6);
 
  player1.bounceOff(cardboard7);
 
  player1.bounceOff(cardboard8);
 
  player1.bounceOff(cardboard9);
 
  player1.bounceOff(cardboard10);
 
  player1.bounceOff(cardboard11);
 
  player1.bounceOff(cardboard12);
 
  player1.bounceOff(cardboard13);
 
  player1.bounceOff(cardboard14);
 
  player1.bounceOff(cardboard15);
 
  player1.bounceOff(cardboard16);
 
  player1.bounceOff(cardboard17);
 
  player1.bounceOff(cardboard18);
 
  player1.bounceOff(cardboard19);
 
  player1.bounceOff(cardboard20);
 
  player1.bounceOff(cardboard21);
 
  player1.bounceOff(cardboard22);
 
  player1.bounceOff(cardboard23);
 
  player1.bounceOff(cardboard24);
 
  player1.bounceOff(cardboard25);
 
  player1.bounceOff(cardboard26);
 
  player1.bounceOff(cardboard27);
 
  player1.bounceOff(cardboard28);
 
  player1.bounceOff(cardboard29);
 
  player1.bounceOff(cardboard30);
 
  player1.bounceOff(cardboard31);
 
  player1.bounceOff(cardboard32);
 
  player1.bounceOff(cardboard33);
 
  player1.bounceOff(cardboard34);
 
  player1.bounceOff(cardboard35);
 
  player1.bounceOff(cardboard36);
 
  player1.bounceOff(cardboard37);
 
  player1.bounceOff(cardboard38);

  
  drawSprites();
}