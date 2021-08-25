var box;
function setup() {
  createCanvas(800,400);
   box = createSprite(400,200,60,60);
   box.shapeColor = "blue";
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
    box.y -= 2;
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.x += 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x -= 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y += 2;
  }

  drawSprites();
}




