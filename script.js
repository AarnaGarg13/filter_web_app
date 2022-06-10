x_nose = 0;
y_nose = 0;
lips_clipart = ""
function preload()
{
    lips_clipart = loadImage("filter_web_app_lips.png")
}
function setup()
{
    canvas = createCanvas(400 , 400)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.size(400 , 400)
    webcam.hide()
    pose_netModel = ml5.poseNet(webcam , modelLoaded)
    pose_netModel.on('pose' , gotResults)
}
function draw()
{
    image(webcam , 0 , 0 , 400 , 400)
    image(lips_clipart , x_nose , y_nose , 50 , 30)
}
function modelLoaded()
{
    console.log("THE MODEL HAS BEEN LOADED")
}
function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results)
        x_nose = results[0].pose.nose.x - 20
        y_nose = results[0].pose.nose.y + 35
    }
}
function take_snapshot()
{
    save("img.png")
}