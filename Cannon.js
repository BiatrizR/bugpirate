class Cannon {

 constructor (x,y,width,height,angle){

    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannon_ing = loadImage ("assets/canon.png");
    this.cannon_base = loadImage ("assets/cannonBase.png");

 }

 display (){

  // console.log (this.angle);
 
 
    
  
  if (keyIsDown(RIGHT_ARROW) /*&& this.angle<70*/  ) {
   this.angle +=0.01;
 }

 if (keyIsDown(LEFT_ARROW)/*&& this.angle>-30*/ ) {
   this.angle -= 0.01;
 }

    push ();
    translate (this.x,this.y);   
    rotate(this.angle);
    background(bg_ing)
    imageMode(CENTER);
    image (this.cannon_ing,0,0,this.width,this.height)

    
    pop ();


   image(this.cannon_base,70, 20, 200, 200);
   noFill()
 }
    
  
}
