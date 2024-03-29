class Cannon_ball {

    constructor (x,y, r) {

        var options = {
            isStatic: true
        }

        this.r = 30;
        //this.x = x;
        //this.y = y;

        this.body = Bodies.circle (x,y,this.r,options);
        this.image = loadImage ("./assets/cannonball.png");

        World.add(world,this.body);
    }

    kick () {

        var newAngle = cannon.angle - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
        
    }

    display () {
        var pos = this.body.position;

        push ();
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r);

        pop ();
    }

    


}