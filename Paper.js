class Paper{
  constructor(x, y, radius){
      var options={
          isStatic : false,
          restitution : 0.5,
          friction : 0.5,
          density : 1.2
      }
      this.x = x;
      this.y = y;
      this.radius=radius;

      this.p=Bodies.circle(this.x, this.y, this.radius, options);
      World.add(world,this.p);
    }
    display(){
        var paperpos = this.p.position;
        fill("purple");
        ellipseMode(RADIUS);
        circle(paperpos.x, paperpos.y, this.radius);
    }
};