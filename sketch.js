var ball;
var db;
var reference;
function setup(){
//lcopying firebase console in vscode variable db
  db =firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
// code for reading database
reference= db.ref('ball/positions')
reference.on("value",readpos)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
db.ref('ball/positions').set({
    'x':pos.x + x,
    'y':pos.y + y

})
}
0
function readpos(data){
    var pos=data.val()
    ball.x=pos.x;
    ball.y=pos.y;     
}