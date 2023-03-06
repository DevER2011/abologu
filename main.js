image="";

function setup(){
canvas = createCanvas(640, 420);
canvas.center()
}
function preload(){
image = loadImage('dog_cat.jpg');
}
function draw(){
image(image,0,0,640,420 );
fill("#A020F0");
text("Dog", 45, 75);
nofill();
stroke("#A020F0");
rect(40,60,450,350);
}
function change(){
    window.location = "work_tbl.html";
}
function chan(){
    
}