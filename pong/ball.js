function Ball(x, y, r) {
  this.velocity_x = 0;
  this.velocity_y = 0;
  this.x = x;
  this.y = y;
  this.r = r;

  this.render = function() {
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.start = function() {
    this.velocity_x = ((random() >= 0.5) ? 3 : -3);
  }

  this.move = function() {
    this.checkX();
    this.checkY();
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }

  this.checkX = function() {
    if (this.x <= 0 + this.r / 2 || this.x >= width - this.r / 2) {
      //outside on one side
      this.end();
    }
  }

  this.checkY = function() {
    if (this.y <= 0 + this.r / 2) {
      this.velocity_y = this.velocity_y * (-1);

    } else if (this.y >= height - this.r / 2) {
      this.velocity_y = this.velocity_y * (-1);

    }
  }

  this.end = function() {
    this.velocity_x = 0;
    this.velocity_y = 0;

  }
}