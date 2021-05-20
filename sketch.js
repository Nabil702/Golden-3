var Alien,Liberator
var score=0

function setup(){

createCanvas(800,600)

Liberator = createSprite(30,550,10,30);
ground = createSprite(400,570,800,10)
gr1 = createSprite(400,500,80,10)
gr2= createSprite(480,360,80,10)
Agroup= new Group()
Pgroup= new Group()
coin1group = new Group()
coin2group = new Group()
invi = new Group()
}




function draw() {
  background("blue")
  Liberator.collide(ground)
  Liberator.collide(gr1)
  Liberator.collide(gr2)
  Liberator.velocityX=0
  Liberator.velocityY=0
  if(keyDown("right")){
  Liberator.velocityX=5
    
  }
   if(keyDown("left")){
  Liberator.velocityX=-5
    
  }
  if(keyDown("up")){
    Liberator.velocityY=-5.6

       }
  Liberator.velocityY=Liberator.velocityY+2
   //gravity

  AlienandPlant()
  coin1()
  coin2()

  if(Liberator.isTouching(invi)){
    console.log("hi")
    Agroup[0].destroy()
    invi[0].destroy()
    Plant = createSprite(Alien.x,Alien.y,50,50)
    Plant.velocityX=-3
    Plant.shapeColor="green"
    score=score+1

  }
  if(Agroup.isTouching(Liberator)){
    console.log("hlo")
  }
  if(coin1group.isTouching(Liberator)){

    coin1group.destroyEach()
  }
  if(coin2group.isTouching(Liberator)){

    coin2group.destroyEach()
  }
  textSize(20)
  fill("white")
  text("Score "+score ,700,40)
  drawSprites();
  
}

function AlienandPlant(){
if(frameCount%150===0){

Alien =createSprite(800,550,50,50)
Alien.debug=true
Alien.setCollider("rectangle",-5,10,40,10)
invisbile=createSprite(Alien.x,Alien.y-15,10,40)
invisbile.shapeColor=("yellow")
invisbile.velocityX=-3
Alien.velocityX=-3
Agroup.add(Alien)
invi.add(invisbile)


}



}
function coin1(){
if(frameCount%150===0){
  c1 = createSprite(400,490,10,10)
  coin1group.add(c1)
}

}
function coin2(){
  if(frameCount%200===0){
    c2 = createSprite(480,350,10,10)
    coin2group.add(c2)
  }
  
  }



