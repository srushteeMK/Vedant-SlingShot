class Box{
constructor(x,y){
    this.x=x
    this.y=y
    var options={
        friction:0.4,
      ///  density: 0.7,
        restitution:0.5
    }
    this.body= Bodies.rectangle(this.x,this.y,20,30,options)
    World.add(world,this.body)
       this.r=random(0,255)
       this.g=random(0,255)
       this.b=random(0,255)
}
display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    fill(this.r,this.g,this.b)
    noStroke()
    rect(0,0,20,30)

    pop()
}
}