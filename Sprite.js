class Sprite {
  constructor(imageSource, numFrames, frameSpeed, sw, sh, frame, animationNumber) {
    this.img = imageSource;

    this.numFrames = numFrames || 1;
    this.frameSpeed = frameSpeed || 0;
    this.sw = sw || 16;
    this.sh = sh || 16;

    this.frame = frame || 0;
    this.animationNumber = animationNumber || 0;
    this.xoffset = 0;
    this.yoffset = 0;
  }

  draw(x, y, w, h) {
    var sx = this.sw * this.frame;
    var sy = this.sh * this.animationNumber;

    image(this.img, x + this.xoffset, y + this.yoffset, w, h, sx, sy, this.sw, this.sh);
  }

  animate(onAnimationEnd, obj) {
    if (this.frameSpeed <= 0) {return;}
    if (frameCount % this.frameSpeed == 0) {
      this.frame++;
    }

    if (this.frame >= this.numFrames) {
      this.frame = 0;
      if (onAnimationEnd) {
        obj[onAnimationEnd]();
      }
    }
  }
}
