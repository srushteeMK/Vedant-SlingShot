class Rock{
    constructor(x,y){
        this.x=x
        this.y=y
        var options={
            friction:0.4,
            density: 0.8,
            restitution:0.5
        }
        this.body= Bodies.circle(this.x,this.y,20,options)
        World.add(world,this.body)
       this.image=loadImage("OctagonPink.png")
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
      //  fill("blue")
        image(this.image,0,0,20,20)

    }
        
}