function preload() {

}

function setup() {
   canvas =  createCanvas(300, 300);
   canvas.center();
   video = creatCapture(VIDEO);
   video.size(300, 300);
   video.hide();
}

function draw() {

}

function take_snapshot(){
    save();
}