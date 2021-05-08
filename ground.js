class Ground{
    constructor(x,y,w){
        this.x=x
        this.y=y
        this.w=w
        var options={
            friction:0.4,
            density: 0.6,
            restitution:0.4,
            isStatic:true
        }
        this.body= Bodies.rectangle(this.x,this.y,this.w,20,options)
        World.add(world,this.body)
          
    }
    display(){
        var pos=this.body.position
        push()
        
        rectMode(CENTER)
        fill("black")
        rect(pos.x,pos.y,this.w,20)
    
        pop()
    }
    }