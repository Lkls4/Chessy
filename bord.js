function Bord(){
  //focusvariablen
  this.focus = false;
  this.focusPos = [0, 0];
  //namen für die schachfelder
  this.coloms = "HGFEDCBA"
  this.rows = "87654321"
  //farben
  this.black = 51;
  this.white = 180;
  this.highlight = 230;
  //positionsvariablen grossen
  this.offsetX = 20;
  this.brett_size = 400;
  this.feld_size = this.brett_size / 8;
  this.felder = [];

  //initialising the bord.
  this.make = function () {
    //i = y
    //j = x
    this.felder = [];
    var col = this.black;
    for (var i = 0; i < 8; i++) {
      (col === this.white) ? col = this.black : col = this.white;
      var li = [];
      for (var j = 0; j < 8; j++) {
        (col === this.white) ? col = this.black : col = this.white;
        var name = this.coloms[j] + this.rows[i]
        var x = (j * this.feld_size) + this.offsetX;
        var y = i * this.feld_size;
        var f = new Feld(x, y, this.feld_size, col);
        li.push(f);
      }
      console.log(li);
      this.felder.push(li);
    }
  }
  // displaying all field on the bord.
  this.display = function () {
    var f = this.felder[this.focusPos[1]][this.focusPos[0]];
    if (this.focus){
      f.focus = true;
    }else {
      f.focus = false;
    }
    //i = y
    //j = x
    for (var i = 0; i < this.felder.length; i++) {
      for (var j = 0; j < this.felder[i].length; j++) {
        this.felder[i][j].update();
      }
    }

  }
  //
  this.getFeldXY = function (mx, my) {
    //returns an array with the x and y positions of the clicked field in this.felder
    //i = y
    //j = x
    console.log("searching position: " + mx + ", " + my);
    for (var i = 0; i < this.felder.length; i++) {
      for (var j = 0; j < this.felder[i].length; j++) {
        var f = this.felder[i][j];
        var fx = f.posx;
        var fy = f.posy;
        var f_size = f.size;
        if (mx > fx && mx < fx + f_size && my > fy && my < fy + f_size) {
          console.log("faund x y = " + j + ", " + i);
          return [j, i];

        }
      }
    }
    console.log("mouse is not nn the board.");
  }
};
