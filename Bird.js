class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.birdPath = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.velocity.x);

    if(this.body.velocity.x > 10 && this.body.position.x >200){
      var pos = [this.body.position.x,this.body.position.y];
      this.birdPath.push(pos);
    }

    for(var i=0; i<this.birdPath.length; i++){
      image(this.smokeImg,this.birdPath[i][0],this.birdPath[i][1]);
    }

    super.display();
  }
}
