class Verticalbox
{
    constructor(x,y, width, height)
    {
        var options = {'restitution' : 0.3};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW, this.bodyH , options);
        World.add(myWorld, this.body);
        this.image = loadImage("sprites/wood2.png");

    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y); 
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW , this.bodyH);
        pop();
    }
};