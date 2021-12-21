class Ground{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var option={isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height,option)
World.add(world,this.body)

    }
    show(){
        push ()
        rectMode(CENTER)
        fill("pink")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }
}