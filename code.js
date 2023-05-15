var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


var barra=createSprite(200,390,100,20);
barra.shapeColor="black";

var score=0;

var bola=createSprite(200,200,20,20);
bola.shapeColor="black";

var gameState = "start";

var boxgroup = createGroup();
boxgroup.add(box1);
boxgroup.add(box2);
boxgroup.add(box3);
boxgroup.add(box4);
boxgroup.add(box5);
boxgroup.add(box6);
boxgroup.add(box7);
boxgroup.add(box8);
boxgroup.add(box9);
boxgroup.add(box10);
boxgroup.add(box11);
boxgroup.add(box12);
boxgroup.add(box13);
boxgroup.add(box14);
boxgroup.add(box15);
boxgroup.add(box16);





createEdgeSprites();




function draw() {
  background("gray");
  
  drawSprites();

  
 

bola.bounceOff(leftEdge);
bola.bounceOff(rightEdge);
bola.bounceOff(barra);
bola.bounceOff(topEdge);
bola.bounceOff(boxgroup,boxdestroy);


  if (keyDown("left")) {
    barra.x-=4;
  }
  
  if (keyDown("right")){
barra.x+=4;
}

textSize(30);
textFont("Rockwell");
fill("blue");
text("pontos:" + score, 14, 20);

if (gameState == "start"){
textSize(25);
text("Aperte ESPAÇO para jogar", 50,300);


if (keyDown("space")) {
    bola.velocityX=4;
    bola.velocityY=4;
    gameState = "play";
  }
}

if (gameState=="play") {
    barra.x;
 
  if (score==1600||bola.isTouching(bottomEdge)) {
    gameState="Fim";  
  bola.setVelocity(0,0);
 
  }
  
}


if (gameState=="Fim") {
  if (keyDown("r")) {
    bola.y=200;
    bola.x=200;
    gameState="start";
  }
}






if (score== 1600) {
 fill("blue");
  text("você ganhou que novidade!", 20, 250);
  bola.setVelocity(0,0);
}

if (bola.isTouching(bottomEdge)) {
 fill("blue");
  text("você e muito ruim kkkkk", 50, 250);
  bola.setVelocity(0,0);
}


 

}

function boxdestroy(bola,box) {
  box.destroy();
score=score + 100;
}














// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
