var x = 1;
var y = 1;
var easing = 0.05;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw()
{
    background(237,34,93); //247 198 0 changes the color of back gournd from dark pink to ornger //219 189 183 changes the color of back gorund to light pink //21 26 237 changes the color of back gournd from dark pink to blue //27 106 27 changes the color of back gound from dark pink to dark green //255 215 0 changes back gound color from dark pink to yellow //0 0 0 changes the color of back gound from dark pink to black 
    
    var targetX = mouseX;  
    var dx = targetX - x;
    x += dx * easing;

    var targetY = mouseY;
    var dy = targetY - y;
    y += dy * easing;

    ellipse(x,y,66,66); //80 80 makes ellipse biger //100 80 makes ellipse into a oval //200 80 makes the oval longer //200 1 turns oval into a line //1 1 turns  ellipse into a point //300 300 makes the ellipse biger 

}