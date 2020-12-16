class Stone {
    constructor(x,y,radius){
    var options 
    ={
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
    }
    
    this.r = radius;
    this.x = x;
    this.y = y;
    this.image = loadImage("stone.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    //console.log(stone);
    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0,0,this.r*2, this.r*2);
    pop();
}
}
 
