class Goodmonster
{
    constructor(x,y, width, height)
    {
        var options = {'restitution' : 1};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW, this.bodyH , options);
        World.add(myWorld, this.body);
        this.image = loadImage("sprites/angel.png");

    }
    display()
    {
       
        push();
        translate(this.body.position.x, this.body.position.y); 
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW +170, this.bodyH +120);
        pop();

    }
};