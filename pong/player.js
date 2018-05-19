function Player(x, w, h, up, down) {
  this.y = height / 2;
  this.x = x;
  this.height = h;
  this.width = w;
  this.up = up;
  this.down = down;
  this.maxspeed = 7;
  this.speed = 0;
  this.accel = 0.5;

  this.render = function() {
    rect(this.x, this.y, this.width, this.height);
  }

  this.move = function(dir) {
    let accel = 0;
    if (this.y <= height - this.height && dir == 1) {
      accel = this.accel;
    } else if (this.y >= 0 + this.height / 4 && dir == -1) {
      accel = -this.accel;
    }

    if (this.speed + accel < this.maxspeed && this.speed + accel > -this.maxspeed) {
      this.speed += accel;
    }

    if (this.y + this.speed < height - this.height - 10 && this.y + this.speed > 0 + 10) {
      this.y += this.speed;
    } else {
      this.speed = 0;
    }
  }
}