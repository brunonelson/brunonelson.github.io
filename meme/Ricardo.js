let x = 1;
let y = 1;
let easing = 0.50;
let img;
let song;


function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  song.play();
  }
}

function setup(){
    var cnv = createCanvas(710,400);
    img = loadImage('disco.jpg');
    song = loadSound('dota.mp3');
    }


function draw(){
    background(119,199,199);
    image(img,0,0,width, height);
    //translate(width/2, height/2);
    let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
    push();
    translate(x,y);
    //head
    fill(175,109,5);
    ellipse(10,0,100,140);
    
    //eyes
    fill(253,253,253,253,);
    ellipse(-20,-10,20,10);
    
    //eyes
    fill(253,253,253,253);
    ellipse(30,-10,-20,-10);
    
    //pupils_left
    fill(19,88,2);
    ellipse(-20,-10,8,8);
    
    
    //pupils_right
    fill(19,88,2);
     ellipse(30,-10,-8,-8);
    
    //mouth
    fill(0,0,0,0);
    ellipse(10,39,20,10);
    line(20,39,0,39)
    
    
    
    //body
    fill(175,109,5)
    rect(-46,70,110,150);
     //4packbegins
    ellipse(50,160,80,-50);
    ellipse(-30,160,80,-50);
    ellipse(50,210,80,-50);
    ellipse(-30,210,80,-50);
    //4packends
    ellipse(-50,110,120,90);
    ellipse(69,110,120,90);
    ellipse(-40,130,20,10);
    ellipse(60,130,20,10);
    
    //arms
    ellipse(-70,180,50,100)
    ellipse(90,180,50,100)
    
    
    //durag
    fill(225,0,0);
   arc(10, -30, 90, 90, PI, 2 * PI, CHORD);
    fill(255,255,255)
    ellipse(10,-40,10,10)
    ellipse(10,-70,10,10)
    ellipse(-20,-50,10,10)
    ellipse(49,-40,10,10)
    ellipse(40,-50,10,10)
    ellipse(-20,-35,10,10)
    ellipse(10,-55,10,10)
    
    //nose
    fill(175,109,5)
    arc(2,15, 10, 10, 9, PI / -2.0);
    arc(15,14, 10, 10, 5, PI / 5.0);
    
    //facehair
    fill(0,0,0)
    rect(5,44,10,25)
    
    pop();
   
        
}