//this sketch makes an image look like it is filmed on my camcorder
//click the snap button with your mouse to take screenshots

//variables
var capture;
var canvasWidth = 680;
var canvasHeight = 460;
var squareSize = 40;
var video;
var button;
//screenshot array
var snapshots = [];

function preload() {
  img1 = loadImage("camcorderblack.jpg");
  
}

function setup() {
  print("Introduction to Programming 1, Assignment 8, Lilliana Luján-Griffith, 04/04/23")
  createCanvas(canvasWidth, canvasHeight);
  
//webcam
  capture = createCapture(VIDEO);
  capture.size(canvasWidth, canvasHeight);
  capture.hide();
  button = createButton('snap');
  button.mousePressed(takesnap);
}

function takesnap() {
  snapshots.push(capture.get());
  filter(POSTERIZE,16);
}

function draw() {
//image effect
    filter(POSTERIZE,16);
    image(capture, 0, 0, 600, 400);

//camcorder image overlay
    tint(255, 100);
    image(img1, 0, 0, 600, 400);

//screenshots on the side of the canvas
    var w = 80;
    var h = 60;
    var x = 600;
    var y = 0;
  for(var i = 0; i < snapshots.length; i++) {
    tint(255, 100);
    image(img1, x, y, w, h);
    image(snapshots[i], x, y, w, h);
    x = 600
    y = y + h;
  }
}