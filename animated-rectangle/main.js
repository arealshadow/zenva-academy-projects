// var foo = 10;
// if (foo == 10) {
//     console.log("hello");
    
// }

// let things = ["laptop", "speaker", "keyboard", 13];
// console.log(things.length);

// things.push(17);
// console.log(things);

// things.splice(1, 1);

// console.log(things);

// things.pop(17);
// console.log(things);

// var lion = {
//     name: "Simba",
//     age: 3,


// };

// console.log(lion);

// for (let i = 0; i < 10; i++) {
//     console.log("ping", i);
    
    
// }

// let j = 0;
// while (j < 10) {
//     console.log("pong", j);
//     j++;
// }

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = "rgb(200, 0, 200)";
// ctx.fillRect();

//initial position
var x = 10;
var y = 10;

//rectangle dimensions
var w = 20;
var h = 30;

//speed at which it moves
var speed = 2;
var speedY = 0;

//grab the canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//color zones
var blueZone, greenZone;
 
//update the rectangle position
var update = function() {

  var crossedRightLimit = x >= 270;
  var crossedLeftLimit = x <= 10;
  var crossedUpLimit = y >= 270;
  var crossedDownLimit = y <= 10;

  //check if x surpases a certain value
  if(crossedRightLimit) {

    //if so, push back and reverse movement
    x = 270;
    speed = -speed;
  }

  //check if x is getting too close to the left border
  else if(crossedLeftLimit) {

    //if so, push back and reverse movement
    x = 10;
    speed = -speed;
  } 
  
  if (x >= 100 && x <= 150) {

      speedY = 1;
  } 

  else {

      speedY = 0;
      
  }
  

  x = x + speed;
  y = y + speedY;
  //define color
  blueZone = x > 0 && x < 100;
  greenZone = !blueZone && x < 200;
};

//show it on the screen
var draw = function() {
  ctx.clearRect(0,0,500,300);

  if(blueZone) {
    ctx.fillStyle = "#3333FF";
  }
  else if(greenZone) {
    ctx.fillStyle = "#00CC66";
  }
  else {
    ctx.fillStyle = "rgb(200, 0, 100)";
  }

  
  ctx.fillRect(x, y, w, h);
};

//gets executed multiple times per second
var step = function() {

  update();
  draw();

  window.requestAnimationFrame(step);
};

//initial kick
step();