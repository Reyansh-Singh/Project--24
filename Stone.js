class Stone {
    constructor(x, y) {
        var options = {
            'density':0.8,
            'friction':0.9,
            'restitution':12
          };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 150;
    World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill('black')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      }
    }