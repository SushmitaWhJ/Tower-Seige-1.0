class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.04,
            length: 10
        }
    

        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
      
        
        
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-15, pointA.y, pointB.x+18, pointB.y);
            line(pointA.x-15,pointA.y,pointB.x-15,pointB.y);
            
        }

    }
    
}