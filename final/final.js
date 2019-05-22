let song;
//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var ghost, asterisk;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  ghost = loadAnimation('assets/punch0001.png', 'assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0002.png','assets/punch0002.png','assets/punch0002.png','assets/punch0002.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png','assets/punch0002.png','assets/punch0003.png',);
//
//  //create an animation listing all the images files
//  asterisk = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
}
function setup() {
  song = loadSound('oda.mp3');
  //createCanvas(720, 200);
  createCanvas(1000, 1000);

  background(255, 0, 0);
}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    //background(255, 0, 0);
  } else {
    song.play();
    //background(0, 255, 0);
  }
}

//function setup() {
//  createCanvas(1000, 1000);
//}

function draw() {
  background(255, 255, 255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(ghost, 700, 300);
//  animation(asterisk, 500, 150);
}
