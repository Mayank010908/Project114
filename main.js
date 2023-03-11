noseX = 0;
noseY = 0;


function preload(){
 mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
   canvas = createCanvas(450, 400)
   canvas.center()

   video = createCapture(VIDEO)
   video.size(450,400)
   video.hide()
          
   posenet = ml5.poseNet(video,modelLoaded)
}

function modelLoaded(){
   console.log("model loaded succesfully")
   posenet.on('pose',gotresult)
}

function gotresult(results){

   if(results.length>0){
      
      console.log(results)
      noseX = results[0].pose.nose.x-35;
      noseY = results[0].pose.nose.y+10;

   }
}

function draw(){
   image(video,0,0,450,400);
   image(mustache, noseX, noseY, 80, 40)
}

function takesnapshot(){
    save("mymustachepic.png")
}