const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,rand
var drops=[

]
var MaxDrops=100

function preload(){
    
}

function setup(){
   engine=Engine.create()
   world=engine.world
   createCanvas(400,700)
umrela1=new umbrela(200,500)
if (frameCount%150===0) {
    for (let index = 0; index < MaxDrops; index++) {
        drops.push(new Drops(random(0,400),random(0,400)))
        
    }
}
   
    
}

function draw(){
    Engine.update(engine)
    background(0)
    umrela1.display()
    for (let index = 0; index < MaxDrops; index++) {
        drops[index].showDrop()
        drops[index].updateY()
        
    }
}   

