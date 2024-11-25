let player, img, enemy;
let slides = [];
let currentSlide = 0;
let pos;
let h = 1;
let s = 0;

function preload() {
  player = loadImage('player.png');
  enemy = loadImage('enemy.png');

  slides.push(loadImage('slides/1.PNG'));
  slides.push(loadImage('slides/2.PNG'));
  slides.push(loadImage('slides/3.PNG'));
  slides.push(loadImage('slides/4.PNG'));
  slides.push(loadImage('slides/5.png'));
}

function setup() {
  createCanvas(1280, 720);
  pos = createVector(windowWidth / 2, windowHeight / 2);
}

function keyPressed() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  }
}


// for the shooting
function shoot(x, y) {
  rect(x + h, y + h, 20, 20);
}

function draw() {
  background(0);

  // for the shooting
  h += 5;
  if (keyIsDown(32)) { // Space key for shooting
    h = 0;
    shoot(pos.x, pos.y);
  }

  // Update x and y if an arrow key is pressed for movement.
  if (keyIsDown(LEFT_ARROW)) {
    pos.x -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    pos.x += 10;
  }

  if (keyIsDown(UP_ARROW)) {
    pos.y -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    pos.y += 10;
  }

  // draw the player
  image(player, pos.x, pos.y);

  // draw the enemy
  s += 10;
  s = s % 1280; // Reset enemy position when it goes off screen
  image(enemy, s, 100);

  // for the slides
  if (slides[currentSlide]) {
    image(slides[currentSlide], 0, 0, width, height);
  }
}
