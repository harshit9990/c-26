class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.groundbody = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.groundbody);
    }
    display(){
      var pos =this.groundbody.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };