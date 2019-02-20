let img;



function setup(){
    var cnv = createCanvas(710,400);
    img = loadImage('marry.jpg');
    
    
    
}

function draw(){
    background(119,199,199);
    image(img,0,0,width, height);
    translate(width/2, height/2);
    
    //hoody
    fill(1,4,0);
    ellipse(0,0,130,160);
    
    //head
    fill(255,200,140);
    ellipse(0,0,100,140);
    
    //eyes
    fill(253,253,253,253,);
    ellipse(-20,-10,20,10);
    
    //eyes
    fill(253,253,253,253);
    ellipse(20,-10,-20,-10);
    
    //pupils_left
    fill(19,88,2);
    ellipse(map(mouseX,0, width, -23,-17), -10, 8, 8);
    //ellipse(-20,-10,8,8);
    
    
    //pupils_right
    fill(19,88,2);
     ellipse(map(mouseX,0, width,17,23), -10, 8, 8);
    //ellipse(20,-10,-8,-8);
    
    //mouth
    fill(0,0,0,0);
    ellipse(0,39,18,0);
    
    //hoody
    fill(1,4,0)
    rect(-60,69,120,150);
    
    //hair
    fill(82,52,5);
    ellipse(0,-50,85,44)
    
    //nose
    fill(0,0,0,0);
    ellipse(0,18,0,10);
    
    //nose
    fill(0,0,0,0);
    ellipse(6,22,9,0);
        
}