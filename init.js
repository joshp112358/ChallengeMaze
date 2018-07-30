

var levelScreenSketch = new p5(chooseLeveling, 'levelScreen')
var levelingSketch = new p5(levelSketch, 'mazeScreen');
var t = true;
var f = false;
function level1(){

    levelingSketch.digits = ['Start',5,5,5,5,5,
                  6,4,4,5,5,5,
                  6,4,4,4,4,4,
                  6,7,7,7,7,4,
                  6,8,8,8,8,4,
                  6,6,6,6,6,'End'];
    levelingSketch.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
              [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
              [f,t,f,t],[f,f,t,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[t,t,f,f],[f,t,f,t],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
              [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
    levelingSketch.score = 0;
    levelingSketch.grid = [];
    levelingSketch.makeCells();
}

function level2(){
  levelingSketch.digits = ['Start',11,-10,9,6,5,
                20,-18,4,-8,7,-4,
                -16,4,-2,4,-3,4,
                -2,3,4,7,7,4,
                6,11,-5,-5,8,4,
                -3,6,6,-11,6,'End'];
  levelingSketch.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
            [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
            [f,t,f,t],[f,f,t,t],[f,f,f,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
            [f,f,f,t],[t,t,f,f],[f,f,t,t],[t,f,t,f],[t,t,f,f],[f,t,f,t],
            [f,f,f,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
            [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
  levelingSketch.score = 0;
  levelingSketch.grid = [];
  levelingSketch.makeCells();
}

function level3(){

    levelingSketch.digits = ['Start',11,5,5,5,5,
                  6,4,4,5,5,5,
                  6,4,4,4,4,4,
                  6,7,7,7,7,4,
                  6,8,8,8,8,4,
                  6,6,6,6,6,'End'];
    levelingSketch.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
              [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
              [f,t,f,t],[f,f,t,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[t,t,f,f],[f,t,f,t],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
              [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
    levelingSketch.score = 0;
    levelingSketch.grid = [];
    levelingSketch.makeCells();
}

function level4(){

    levelingSketch.digits = ['Start',5,5,5,5,5,
                  6,4,4,5,5,5,
                  6,4,4,4,4,4,
                  6,7,7,7,7,4,
                  6,8,8,8,8,4,
                  6,6,6,6,6,'End'];
    levelingSketch.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
              [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
              [f,t,f,t],[f,f,t,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[t,t,f,f],[f,t,f,t],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
              [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
    levelingSketch.score = 0;
    levelingSketch.grid = [];
    levelingSketch.makeCells();
}

function level5(){

    levelingSketch.digits = ['Start',5,5,5,5,5,
                  6,4,4,5,5,5,
                  6,4,4,4,4,4,
                  6,7,7,7,7,4,
                  6,8,8,8,8,4,
                  6,6,6,6,6,'End'];
    levelingSketch.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
              [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
              [f,t,f,t],[f,f,t,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[t,t,f,f],[f,t,f,t],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
              [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
    levelingSketch.score = 0;
    levelingSketch.grid = [];
    levelingSketch.makeCells();
}

function level6(){

    levelingSketch.digits = ['Start',5,5,5,5,5,
                  6,4,4,5,5,5,
                  6,4,4,4,4,4,
                  6,7,7,7,7,4,
                  6,8,8,8,8,4,
                  6,6,6,6,6,'End'];
    levelingSketch.walls = [[t,f,f,t],[t,f,t,f],[t,f,t,f],[t,t,f,f],[t,f,f,t],[t,t,f,f],
              [f,f,f,t],[t,f,f,f],[t,t,f,f],[f,f,t,t],[f,t,t,f],[f,t,f,t],
              [f,t,f,t],[f,f,t,t],[f,f,t,f],[t,f,t,f],[t,f,t,f],[f,t,f,f],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[t,t,f,f],[f,t,f,t],
              [f,f,f,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,f,f],[f,t,f,f],
              [f,f,t,t],[t,f,t,f],[t,f,t,f],[t,f,t,f],[f,f,t,f],[f,t,t,f]];
    levelingSketch.score = 0;
    levelingSketch.grid = [];
    levelingSketch.makeCells();
}
