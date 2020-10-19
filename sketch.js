var mRect,fRect;



function setup() {
  createCanvas(800,400);

  mRect = createSprite(100,200,50,40);
  fRect = createSprite(700,200,30,70);

  mRect.shapeColor = 'blue';
  fRect.shapeColor = 'blue';
 
  mRect.velocityX = 3;
  fRect.velocityX = -3;
}

function draw() {
  background(0); 
  
  if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2 
    && fRect.x - mRect.x < mRect.width/2 + fRect.width/2) {
    mRect.velocityX = mRect.velocityX * (-1);
    fRect.velocityX = fRect.velocityX * (-1);
    }
    if(mRect.y - fRect.y < mRect.height/2 + fRect.height/2
    && fRect.y - mRect.y < mRect.height/2 + fRect.height/2) {
      mRect.velocityY = mRect.velocityY * (-1);
      fRect.velocityY = fRect.velocityY * (-1);
  }
  

  drawSprites();
}