class Divisions {
    constructor(x, y, w, h) {
        var options = {
         isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y)
        fill("white");
        rect(0,0, this.w, this.h);
        pop();
    }
};