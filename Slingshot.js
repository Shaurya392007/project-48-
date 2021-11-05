class Slingshot
{
    constructor(b1,p2)
    {
        var options = {
            'bodyA' :b1, 
            'pointB' : p2,
            'length' : 10,
            'stiffness' : 0.04
        }
        this.sling = Matter.Constraint.create(options);
        World.add(myWorld ,this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");

    }

    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    display()
    {
        image(this.sling1, 200 ,138 ,70,250);
        image(this.sling2, 150 ,141 , 70, 145);
        if(this.sling.bodyA)
        {
            strokeWeight(3);

            line(this.sling.bodyA.position.x -20,this.sling.bodyA.position.y , this.sling.pointB.x -30 ,this.sling.pointB.y);
            line(this.sling.bodyA.position.x -20,this.sling.bodyA.position.y , this.sling.pointB.x +30 ,this.sling.pointB.y);

        }
       
    }
}