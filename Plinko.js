class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        
        this.body = Bodies.circle(x, y, 10, options);
        this.r = 10;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
      //  imageMode(CENTER);
        noStroke();
        fill(random(0,255),random(0,255),random(0,255));
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }

};