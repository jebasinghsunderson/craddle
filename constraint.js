class Rope{
    constructor(bodyA,bodyB,OffsetX,OffsetY){
        this.OffsetX=OffsetX
        this.OffsetY=OffsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:10,
            pointB:{x:this.OffsetX,y:this.OffsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        strokeWeight(4)
        var Anchor1X=pointA.x 
        var Anchor1Y=pointA.y 
        var Anchor2X=pointB.x+this.offsetX 
        var Anchor2Y=pointB.y+this.offsetY
       // stroke("black")
        line( Anchor1X, Anchor1Y,Anchor2X,Anchor2Y)

    }
};