class Bob{
    constructor(x,y,radius){
        var options={
          'isStatic':false,
            'friction':0.1,
            'restiution':1.0,
            'density':1.0,

        }
  
     this.body=Bodies.circle(x,y,radius,options);
     this.x=x;
     this.y=y;  
     this.radius=45;

     //this.image=loadImage("paper.png")    
      World.add(world,this.body);

    }
    display(){ 
        var pos = this.body.position;
      
        push();
        translate(pos.x, pos.y);        
        ellipseMode(RADIUS);
        strokeWeight(4);
         stroke("green");
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop(); 
    }

};