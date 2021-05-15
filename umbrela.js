class umbrela{
    constructor(x,y){
        var options={
            isStatic:true

        }
        
        this.umbrela=Matter.Bodies.circle(x,y,50,options)
        this.radius=50
        Matter.World.add(world,this.umbrela)
        this.image=loadImage("walking_1.png")
    }
   
    display(){
        fill("blue")
        imageMode(CENTER)
        image(this.image,this.umbrela.position.x,this.umbrela.position.y,this.radius,this.radius)
}
}