function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(400,400);
    canvas.position(600,100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#15d646');
}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}