var register = {};

function keyPressed() {
  register[keyCode] = true;
}

function keyReleased() {
  register[keyCode] = false;
}

register.getKey = function(key) {
  return register[key.charCodeAt(0)];
}
