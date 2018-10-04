var player;
var holes = [];

function setup() {
  createCanvas(384, 320);
  pixelDensity(1);
  player = new Player(64, 128);
  holes.push(new Hole(128, 256));
  holes.push(new Hole(128, 224));
  holes.push(new Hole(128, 192));
  holes.push(new Hole(128, 160));
  holes.push(new Hole(128, 128));
}

function draw() {
  // for(let x=0; x<width; x+=32) {
  //   for(let y=0; y<height; y+=32) {
  //     image(tileset,x,y,32,32, 12*16, 3*16, 15, 15);
  //   }
  // }
  background(180, 220, 50);

  for (var hole of holes) {
    hole.draw();
  }

  player.update();
}
