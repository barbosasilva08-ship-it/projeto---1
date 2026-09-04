function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke("blue");
  fill(255,0,0);

  if(mouseIsPressed){
    rect(mouseX,mouseY,10,10);
    
  }
  
}
