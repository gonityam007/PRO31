class  Particle {
    constructor(x, y,r) {
      var options = {
          restitution:0.4
      }
     
      this.radius = r;
      this.body = Bodies.circle(x, y,r, options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(2);
      fill(this.color);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
