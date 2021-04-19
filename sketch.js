var hr , mn,sc
function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);


}

function draw() {
  background(0,0,0);  
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
translate(200,200)
rotate(-90)
  scAngle = map(sc, 0,60, 0, 360);
hrAngle=map(hr%12,0,12,0,360);
mnAngle=map(mn,0,60,0,360);

  push()

  rotate(scAngle)
  stroke("red");
  strokeWeight(5)
  line(0,0, 100, 0);

 
  
pop()

push()
  rotate(hrAngle)
  stroke("orange");
  strokeWeight(5)
  line(0, 0, 50, 0);

 
 


  
pop()

push()
  rotate(mnAngle)
 stroke("yellow")
 strokeWeight(5)
  line(0, 0, 75, 0);

 
 
 
  
pop()
point(0,0)
noFill();
stroke("red");
  strokeWeight(9);
  arc(0,0,300,300,0,scAngle)

stroke("orange");
 
  arc(0,0,280,280,0,hrAngle)

  stroke("yellow");
 
  arc(0,0,260,260,0,mnAngle)

  drawSprites();
}