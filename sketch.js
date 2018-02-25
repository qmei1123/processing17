var upLine = []; // array of Jitter objects
var x;
function setup() {
  createCanvas(1000, 900);
  // Create objects
  for (var i=0; i<50; i++) {
    upLine.push(new movement());
    x = width/2 + random(-15, 15);
  }
}

function draw() {
  background(50, 89, 100);
  for (var i=0; i< 10; i++) {
    upLine[i].move();
    upLine[i].display();
  }
}


// Jitter class
function movement() {
  this.y = random(height);
  this.yTwo = this.y + random(50);
  this.speed = 1;

  this.move = function() {
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    line(x, this.y, x, this.yTwo);
  };
}

