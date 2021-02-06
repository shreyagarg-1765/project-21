var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 50, 10);
  bullet.velocityX=12;
  bullet.shapeColor=color(255);

  wall=createSprite(1300,200,thickness,100);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(25,30);
  thickness=random(22,83)



}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
  hasCollided(bullet,wall)
}

function hasCollided(lbullet,lwall){
 
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }

    return false;


}