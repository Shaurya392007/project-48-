class Badmonster
{
    constructor(x,y, width, height)
    {
        var options = {'restitution' : 0.5};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW, this.bodyH , options);
        World.add(myWorld, this.body);
        this.image = loadImage("sprites/monster.png");
        this.remove = false;

    }
    display()
    {

        console.log(this.body.speed);

        if(this.body.speed < 13)
        {
            push();
            translate(this.body.position.x, this.body.position.y); 
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.bodyW +170, this.bodyH +70);
            pop();
       }
    else
        {
            if(this.remove === false)
            {
                World.remove(myWorld ,this.body);
                score = score +50;
                countMonsters = countMonsters-1;
                this.remove = true;
            }
           
        }
       
        

    }
};