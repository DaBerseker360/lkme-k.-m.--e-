class Boxedlikeafish{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var option={isStatic:false,restitution:0.9}
        this.body=Bodies.rectangle(x,y,width,height,option)
World.add(world,this.body)

    }
    show(){
        push ()
        rectMode(CENTRE)
        fill("pink")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }
}