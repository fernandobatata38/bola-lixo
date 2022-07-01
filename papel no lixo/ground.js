class Ground {
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        var ground_Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,ground_Options);
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
    
}
