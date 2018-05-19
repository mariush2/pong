let player1, p1Keys, player2, p2Keys, ball;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width / 2, height / 2, 40);
  ball.start()

  p1Keys = [UP_ARROW, DOWN_ARROW];
  player1 = new Player(0 + 50, 20, 100, p1Keys[0], p1Keys[1]);

  p2Keys = [87, 83];
  player2 = new Player(width - 50, 20, 100, p2Keys[0], p2Keys[1]);
}


function draw() {
  background(51);

  movePlayers();
  ball.render();
  ball.move();

  player1.render();
  player2.render();

}

function movePlayers() {
  if (keyIsDown(p1Keys[0])) {
    player1.move(-1);
  } else if (keyIsDown(p1Keys[1])) {
    player1.move(1);
  }

  if (keyIsDown(p2Keys[0])) {
    player2.move(-1);
  } else if (keyIsDown(p2Keys[1])) {
    player2.move(1);
  }

}

function keyReleased() {
  if (p1Keys.includes(keyCode)) {
    player1.speed = 0;
  } else {
    player2.speed = 0;
  }
}