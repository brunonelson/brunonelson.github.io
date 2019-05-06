var img = [];
var index = 0;
 
function preload(){
 
  img[0] = loadImage("babygame.png");
  img[1] =  loadImage("catgame.png");
  img[2] = loadImage("babyvscat.png");
    img[3] = loadImage("babyvscat2.png");
    img[4] = loadImage("catlose.png");
    img[5] = loadImage("babywins.png");
     
    
}
 
function setup(){
  createCanvas(1500,1000); 
}
 
function draw(){
    image(img[index], 50, 50, width, height);
}
 
function mouseReleased(){
 
    //ONLY if click registered inside image
    if(mouseX>50 && mouseY>50){
          index = index + 1;
          if (index == img.length){
              index = index - img.length;
        }
    }
}