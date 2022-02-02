function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,130);

    poseNet = ml5.poseNet(video,modelLoaded);
}


function draw() {
    background('#969A97')
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}




