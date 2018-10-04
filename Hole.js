class Hole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = new Sprite(tileset, 1, 0, 16, 16, 4, 16);
  }

  draw() {
    this.sprite.draw(this.x, this.y, 32, 32);
  }
}
