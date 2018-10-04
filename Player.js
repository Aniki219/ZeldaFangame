class Player {
  constructor(x, y) {
    this.x = x || 64;
    this.y = y || 128;
    this.moveSpeed = 3;
    this.sprite = new Sprite(linkImg, 2);
    this.state = "move";
    this.animCallback = null;
    this.jumpArray = [];
    this.direction = 0;

    this.can = {
      jump: true,
      sword: true
    }
  }

  draw() {
    this.sprite.draw(this.x, this.y, 32, 32);
    this.sprite.animate(this.animCallback, this);
  }

  move() {
    let xvel = 0;
    let yvel = 0;

    if (register[DOWN_ARROW]) {
      yvel = this.moveSpeed;
      this.direction = 1;
    }
    if (register[UP_ARROW]) {
      yvel = -this.moveSpeed;
      this.direction = 3;
    }
    if (register[LEFT_ARROW]) {
      xvel = -this.moveSpeed;
      this.direction = 2;
    }
    if (register[RIGHT_ARROW]) {
      xvel = this.moveSpeed;
      this.direction = 0;
    }
    this.x += xvel;
    this.y += yvel;

    if (this.state == "move") {
      this.sprite.animationNumber = this.direction;
      this.sprite.numFrames = 2;
      if (xvel == 0 && yvel == 0) {
        this.sprite.frameSpeed = 0;
      } else {
        this.sprite.frameSpeed = 10;
      }
    }
  }

  update() {
    this.draw();

    switch(this.state) {
      case 'move':
        this.move();
        break;
      case 'jump':
        this.move();
        this.animCallback = "land";
        if (this.jumpArray.length > 0) {
          this.sprite.yoffset = this.jumpArray.pop();
        }
        break;
    }

    this.actions();
  }

  land() {
    this.state = "move";
    this.sprite.animationNumber = this.direction;
    this.sprite.frame = 0;
    this.sprite.yoffset = 0;
    this.can.jump = true;
  }

  actions() {
    if (this.can.jump && register.getKey('A')) {
      this.can.jump = false;
      this.state = "jump";
      this.sprite.frame = 0;
      this.sprite.animationNumber += 4;
      this.sprite.numFrames = 4;
      this.sprite.frameSpeed = 8;
      this.sprite.onAnimationEnd = this.land;

      for(var theta = 0; theta<PI; theta += PI/28){
        let y = -1 + -24 * sin(theta);
        this.jumpArray.push(y);
      }
    }
  }
}
