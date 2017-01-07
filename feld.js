function Feld (x, y, _size, _color){
  this.focus = false;
  this.highlight = 230;
  this.posx = x;
  this.posy = y;
  this.size = _size;
  this.color = _color;
  this.update = function () {
    if (this.focus){
      fill(this.highlight)
    }else {
      fill(this.color);
    }
    rect(this.posx, this.posy, this.size, this.size);
  }
}
