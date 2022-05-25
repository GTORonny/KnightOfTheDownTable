function setup() {
var canvas = createCanvas(750, 500);
  canvas.parent('sketch-holder');

}

function draw() {
    background('lightblue');
    fill('green')
    triangle(30, 75, 58, 20, 86, 75);
  
  
  line(330, -50, 330, 700);
    fill('red')
   ellipse(450, 50, 55);
   ellipse(450, 450, 55);
  ellipse(200, 200, 55);
  ellipse(365, 200, 55);
    fill('white')
  square(300, 20, 55);
  square(300, 400, 55);
    fill('gray')
  square(590, 150, 200);
 
}