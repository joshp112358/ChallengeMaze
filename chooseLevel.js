var chooseLeveling = function(p){
  var buttons = [];
  p.setup = function(){
    p.createCanvas(362,362);
    p.background("blue")
    buttons.push(p.createButton("level1").position(50,50).mousePressed(leveling1));
    buttons.push(p.createButton("level2").position(50,100).mousePressed(leveling2));
    buttons.push(p.createButton("level3").position(50,150).mousePressed(leveling3));
    buttons.push(p.createButton("level4").position(100,50).mousePressed(leveling4));
    buttons.push(p.createButton("level5").position(100,100).mousePressed(leveling5));
    buttons.push(p.createButton("level6").position(100,150).mousePressed(leveling6));
  }
  function leveling1(){
    level1();
    document.getElementById("mazeScreen").style.display= "block";
    document.getElementById("levelScreen").style.display= "none";
  }
  function leveling2(){
    level2();

    document.getElementById("mazeScreen").style.display = "block";
    document.getElementById("levelScreen").style.display = "none";
  }
  function leveling3(){
    level3();
    document.getElementById("mazeScreen").style.display = "block";
    document.getElementById("levelScreen").style.display = "none";
  }
  function leveling4(){
    level4();
    document.getElementById("mazeScreen").style.display = "block";
    document.getElementById("levelScreen").style.display = "none";
  }
  function leveling5(){
    level5();

    document.getElementById("mazeScreen").style.display = "block";
    document.getElementById("levelScreen").style.display = "none";
  }
  function leveling6(){
    level6();
    document.getElementById("mazeScreen").style.display = "block";
    document.getElementById("levelScreen").style.display = "none";
  }

}
