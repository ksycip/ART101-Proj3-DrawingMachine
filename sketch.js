let array = [];
//let backgroundColor = (250, 233, 225);
let strokeWidth = 5;

let noiseOffset = 0.0;


function setup() {
  createCanvas(600, 600);
  //createCanvas(windowWidth, windowHeight);
  //background(220);



  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  //background(250, 233, 225);
  drawGrid();

  //strokeWeight(10);

  noFill();
}

function draw() {

  background(250, 233, 225, 5);
  //strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;


  // if (mouseIsPressed){
  //
  //   backgroundColor -= 5;
  //   background(backgroundColor);
  //
  //
  //   array.push([mouseX, mouseY]);

  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

  // beginShape();
  // for(let i = 0; i < array.length; i++){
  //   //line(array[i][0], array [i][1], array[i + 1][0], array[i + 1][1]);
  //   curveVertex(array[i][0], array [i][1]);
  //
  //     }
  // endShape();

}
//}

function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear image
    clear();

    // else if(key === 'd'){
    //   //display image
    //   background(250, 233, 225);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array [i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
    //line(array[0][0], array [0][1], array[1][0], array[1][1]);
    // line(array[1][0], array [1][1], array[2][0], array[2][1]);
  }
  return false;
}


function mousePressed() {
  array = [];
  backgroundColor = (250, 233, 225);

}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
    //noStroke();
    strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(strokeWidth);
}
