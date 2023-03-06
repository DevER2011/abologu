img="";
stats = "";
object = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center()
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img,0,0,640,420 );
if(stats != "")
{
    for(i = 0; i <object.length; i++){
document.getElementById("status").innerHTML = "Status: Detected Objects";
fill("#A020F0");
percent = floor(object[i].confidence * 100);       
text(object[i].label + " " + percent + "%", object[i].x +15, object[i].y +15);
noFill();
stroke("#A020F0");
rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}
}
function modelLoaded(){
console.log("You win first round buddy not next");
stats = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
if(error)
{
    console.log(error);
    console.log("i told you i would win :)");
}
console.log(results);
object = results;
}
function home(){
window.location = "index.html";
}