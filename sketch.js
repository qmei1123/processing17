var upLine = []; // array of Jitter objects

function setup() {
  createCanvas(1275, 680);
  // Create objects
  for (var i=0; i<50; i++) {
    upLine.push(new movement());
  }
}

function draw() {
  background(20, 20, 40);
  for (var i=0; i<upLine.length; i++) {
    upLine[i].move();
    upLine[i].display();
  }
}

// Jitter class
function movement() {
  this.x = random(width);
  this.y = random(height);
  this.yTwo = this.y + random(50);
  this.speed = 1;

  this.move = function() {
    this.x = random(width);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
      strokeWeight(5);
    stroke(15, 15, 70);
    line(this.x, this.y, this.x, this.yTwo);
  };
}

function bar() {
    this.display = function() {
        rect()
    }
}

