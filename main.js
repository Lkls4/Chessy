var offsetX = 20;
var brett_size = 400;
var canvas_size = 420;
var feld_size = brett_size / 8;
console.log(feld_size);
var brett = new Bord();
//bord positions
//var c3Pos = brett.get_pos("C1")
//console.log(c3Pos[0] + " and " + c3Pos[1]);
//var C3 = new Feld(c3Pos[0], c3Pos[1], feld_size, white);

function setup() {
  createCanvas(420, 420);
  background(153);
  line(20, 0, 20, 420);
  line(0, 400, 420, 400);
  brett.make();
}

function draw() {
  fill(153)
  rect(20,0,400,400);
  brett.display();
  //A1.update();
  //C3.update();

}

function mousePressed() {
  if (!brett.focus) {
    console.log("x= " + mouseX);
    var x = parseInt(mouseX);
    console.log("y= " + mouseY);
    var y = parseInt(mouseY);
    var pos = brett.getFeldXY(x, y);
    if (pos != undefined) {
      brett.focus = true;
      brett.focusPos = pos;
    }
    console.log(pos);
  }else {
    brett.focus = false;
  }

}
