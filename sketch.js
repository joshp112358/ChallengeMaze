var cols, rows;
var w = 60;
var grid = [];
var current;
var digits = ['Start',5,5,5,5,5,
              6,4,4,5,5,5,
              6,4,4,4,4,4,
              6,7,7,7,7,4,
              6,8,8,8,8,4,
              6,6,6,6,6,'End']

function setup(){
  createCanvas(360,360);
  cols = floor(width/w);
  rows = floor(height/w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  for (var i = 0; i<grid.length; i++){
    grid[i].element = digits[i];
  }
  current = grid[0]
}

function draw(){
  background('black');
  for (var i = 0; i < grid.length; i++) {
    grid[i].show()
  }

  current.visited = true;
}
function index(i,j){
  return i+j*cols;
}
function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true,true,true,true];
  this.element = 1
  // top right bottom left

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    noFill();
    if (this.walls[0]) {
      line(x,y,x+w,y);
    }
    if (this.walls[1]) {
      line(x+w,y,x+w,y+w);
    }
    if (this.walls[2]) {
      line(x+w,y+w,x,y+w);
    }
    if (this.walls[3]) {
      line(x,y+w,x,y);
    }
    if (this.visited){
      fill(255,0,255,100);
      rect(x,y,w,w);
    }
    text(this.element, x+w/2,y+w/2)
  }
}

function keyPressed(){
  if (key === 'C'){
    print(15)
    for (var i=0; i<grid.length; i++){
      grid[i].visited = false
      current = grid[0];
      current.visited = true;
    }
  }
  else if (keyCode === RIGHT_ARROW){
    if (current.i === cols-1){}
    else if(grid[index(current.i+1, current.j)].visited){}
    else {current = grid[index(current.i+1, current.j)]}
  }
  else if (keyCode === LEFT_ARROW){
    if (current.i === 0){}
    else if(grid[index(current.i-1, current.j)].visited){}
    else {current = grid[index(current.i-1, current.j)]}
  }
  else if (keyCode === UP_ARROW){
    if (current.j ===0){}
    else if(grid[index(current.i, current.j-1)].visited){}
    else {current = grid[index(current.i, current.j-1)]}
  }
  else if (keyCode === DOWN_ARROW){
    if (current.j === rows-1){}
    else if(grid[index(current.i, current.j+1)].visited){}
    else (current = grid[index(current.i, current.j+1)])
  }
}