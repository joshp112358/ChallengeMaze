var levelSketch = function(p){
  var cols, rows;
  var w = 60;
  p.grid = [];
  var current;
  p.digits = ['Start',5,5,5,5,5,
                6,4,4,5,5,5,
                6,4,4,4,4,4,
                6,7,7,7,7,4,
                6,8,8,8,8,4,
                6,6,6,6,6,'End'];
  let t = true
  let f = false
  p.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
               [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
               [f,t,f,t],[f,f,t,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
               [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[t,t,f,f],[f,t,f,t],
               [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
               [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
  p.score = 0;

  p.makeCells = function(){

    cols = p.floor(p.width/w);
    rows = p.floor(p.height/w);



    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols; i++) {
        var cell = new Cell(i, j);
        p.grid.push(cell);
      }
    }
    for (var i = 0; i<p.grid.length; i++){
      p.grid[i].element = p.digits[i];
    }
    for (var i = 0; i<p.grid.length; i++){
      p.grid[i].walls = p.walls[i];
    }

    current = p.grid[0]
  }
  p.setup = function (){
    p.createButton("back").position(350,350).mousePressed(back);
    p.createCanvas(362,362);
    scoreElem = p.createDiv();
    scoreElem.id = 'score';
    p.makeCells();
  }

  function back(){

    document.getElementById("mazeScreen").style.display= "none";
    document.getElementById("levelScreen").style.display= "block";
  }
  p.draw = function(){
    p.background('white');
    for (var i = 0; i < p.grid.length; i++) {
      p.grid[i].show()
    }

    current.visited = true;
    scoreElem.html('Score = ' + p.score);
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
      p.stroke(0);
      p.fill(0);
      if (this.walls[0]) {
        p.line(x,y,x+w,y);
      }
      if (this.walls[1]) {
        p.line(x+w,y,x+w,y+w);
      }
      if (this.walls[2]) {
        p.line(x+w,y+w,x,y+w);
      }
      if (this.walls[3]) {
        p.line(x,y+w,x,y);
      }
      if (this.visited){
        p.fill(255,0,255,50);
        p.noStroke();
        p.rect(x,y,w-4,w-4);
      }
      p.fill('black');
      p.text(this.element, x+w/2,y+w/2);
    }
  }

  p.keyPressed = function(){
    if (p.key === 'C'){
      for (var i=0; i<p.grid.length; i++){
        p.grid[i].visited = false
        current = p.grid[0];
        current.visited = true;
      }
      p.score = 0
    }
    else if (p.keyCode === p.RIGHT_ARROW){
      if(!current.walls[1]){
        if (current.i === cols-1){}
        else if(p.grid[index(current.i+1, current.j)].visited){return false}
        else {current = p.grid[index(current.i+1, current.j)]}
        if (typeof current.element=== 'number'){
          p.score += current.element;
        }
      }
    }
    else if (p.keyCode === p.LEFT_ARROW){
      if(!current.walls[3]){
        if (current.i === 0){}
        else if(p.grid[index(current.i-1, current.j)].visited){return false}
        else {current = p.grid[index(current.i-1, current.j)]}
        if (typeof current.element=== 'number'){
          p.score += current.element;
        }
      }
    }
    else if (p.keyCode === p.UP_ARROW){
      if(!current.walls[0]){
        if (current.j ===0){}
        else if(p.grid[index(current.i, current.j-1)].visited){return false}
        else {current = p.grid[index(current.i, current.j-1)]}
        if (typeof current.element=== 'number'){
          p.score += current.element;
        }
      }
    }
    else if (p.keyCode === p.DOWN_ARROW){
      if (!current.walls[2]){
        if (current.j === rows-1){}
        else if(p.grid[index(current.i, current.j+1)].visited){return false}
        else {current = p.grid[index(current.i, current.j+1)]}
        if (typeof current.element === 'number'){
          p.score += current.element;
        }
      }
    }
  }

}
