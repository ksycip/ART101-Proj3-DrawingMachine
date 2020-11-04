// 900, 500

let array = [];
//let backgroundColor = (250, 233, 225);
let strokeWidth = 5;

let noiseOffset = 0.0;
let colorPicker;


function setup() {
// createCanvas(900, 500);
// ;
  createCanvas(windowWidth, windowHeight);
  // background(220);
  // var cnv = createCanvas(windowWidth, windowHeight);
  //   var x = (windowWidth - width) / 2;
  //   var y = (windowHeight - height) / 2;
  //   cnv.position(x, y);

    // background(124, 181, 176);

    //strokeWeight(10);
    colorPicker = createColorPicker('');
    colorPicker.position(5, 15);

    noFill();
}

function draw() {
  // strokeWeight(strokeWidth);
  stroke(colorPicker.color());
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // noiseOffset += 0.05;
  // strokeWidth = noise(noiseOffset) * 25;
  //
  // //stroke(map(mouseX, 214, 242, 255, true));
  // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  // line(mouseX, mouseY,pmouseX, pmouseY);
}



function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear image
    clear();

  // else if(key === 'd'){
  //   //display image
  //   background(250, 233, 225);
    beginShape();
    for(let i = 0; i < array.length; i++){
      //line(array[i][0], array [i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array [i][1]);
        }
  endShape();
    //line(array[0][0], array [0][1], array[1][0], array[1][1]);
    // line(array[1][0], array [1][1], array[2][0], array[2][1]);
  }
  return false;
    }


// function mousePressed(){
//   array = [];
//   // backgroundColor = ();
//
// }
